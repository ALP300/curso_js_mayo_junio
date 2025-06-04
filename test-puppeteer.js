const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    dumpio: true
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  console.log('Page loaded');
  await browser.close();
})();