import { chromium } from 'playwright';
import fs from 'node:fs/promises';
const base = process.env.TEST_BASE_URL ?? 'http://127.0.0.1:8765';
const sites = ['atelier','nocturne','botanical','modern-apothecary','rose-atelier','gallery-house','sunday-market','ritual-collective','heritage-craft','studio-monochrome'];
const widths = [320,360,375,390,430,480,600,768,820,1024,1280,1440,1920];
const screenshotWidths = new Set([320,390,768,1440]);
const out = 'responsive-report';
await fs.mkdir(out, {recursive:true});
const browser = await chromium.launch({headless:true});
const issues = []; let tested = 0;
for (const slug of sites) {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: {width,height:900}, deviceScaleFactor:1, reducedMotion:'reduce'});
    const errors=[];
    page.on('pageerror', e=>errors.push(e.message));
    const response = await page.goto(`${base}/demos/${slug}/`, {waitUntil:'domcontentloaded',timeout:25000});
    await page.locator('#main').waitFor();
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(100);
    const report = await page.evaluate(()=>{
      const viewport = window.innerWidth;
      const doc = document.documentElement;
      const horizontal = Math.max(doc.scrollWidth,document.body.scrollWidth)-viewport;
      const headings = [...document.querySelectorAll('h1,h2,h3,.editorial-large,.paper-masthead strong')]
        .filter(el=>getComputedStyle(el).display!=='none')
        .map(el=>{
          const b=el.getBoundingClientRect(),computed=getComputedStyle(el);
          const localOverflow = el.scrollWidth-el.clientWidth;
          const inIntentionalRail=!!el.closest('.theme-catalogue .archive-items');
          const offscreen = !inIntentionalRail && (b.right>viewport+3||b.left < -3);
          return {text:(el.textContent||'').trim().slice(0,70),width:Math.round(b.width),scrollWidth:el.scrollWidth,clientWidth:el.clientWidth,localOverflow,offscreen,whiteSpace:computed.whiteSpace,overflow:computed.overflow}
        });
      const nav = document.querySelector('.sitehead');
      const navbounds=nav?.getBoundingClientRect();
      return {horizontal,viewport,headings:headings.filter(h=>(h.localOverflow>3 && h.overflow!=='visible')||h.offscreen),navOverflow:navbounds && (navbounds.width>viewport+3),hero:document.querySelector('.hero')?.getBoundingClientRect().height};
    });
    if(response?.status()!==200) issues.push({slug,width,kind:'http',status:response?.status()});
    if(report.horizontal>3) issues.push({slug,width,kind:'horizontal-overflow',amount:report.horizontal});
    if(report.headings.length)issues.push({slug,width,kind:'headline-clipping',headings:report.headings});
    if(report.navOverflow)issues.push({slug,width,kind:'nav-overflow'});
    if(errors.length)issues.push({slug,width,kind:'runtime',errors});
    if(screenshotWidths.has(width)){
      await page.screenshot({path:`${out}/${slug}-${width}.png`,fullPage:true,animations:'disabled'});
    }
    tested++;
    await page.close();
  }
}
await browser.close();
const summary = {tested,sites:sites.length,widths,issueCount:issues.length,issues};
await fs.writeFile(`${out}/results.json`,JSON.stringify(summary,null,2));
console.log(JSON.stringify(summary,null,2));
if(issues.length)process.exitCode=1;
