// Node script using Playwright
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('browser log:', msg.type(), msg.text()));

  await page.goto('http://127.0.0.1:9013', { waitUntil: 'networkidle' });

  // Wait for the story iframe to be present and load its content
  const iframe = await page.waitForSelector('iframe[id^="storybook-preview-iframe"], iframe#storybook-preview-iframe', { timeout: 10000 });
  const frame = await iframe.contentFrame();

  // Wait for canvas inside preview
  await frame.waitForSelector('canvas', { timeout: 10000 });

  // Click near the center of the canvas to try to trigger a pick
  const canvas = await frame.$('canvas');
  const box = await canvas.boundingBox();
  await canvas.click({ position: { x: Math.floor(box.width / 2), y: Math.floor(box.height / 2) } });

  // Wait a bit to capture any console errors
  await page.waitForTimeout(1500);

  await browser.close();
})();