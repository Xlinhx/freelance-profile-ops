import { chromium } from 'playwright';

async function capture() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/studio/#projects', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  
  const projectsEl = await page.$('#projects');
  if (projectsEl) {
    await projectsEl.screenshot({ path: 'tooling/projects-preview.png' });
    console.log('Saved projects-preview.png');
  } else {
    await page.screenshot({ path: 'tooling/projects-preview.png' });
    console.log('Saved full page screenshot');
  }
  
  await browser.close();
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
