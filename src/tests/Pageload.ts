import { expect, test } from 'vitest';
import puppeteer from 'puppeteer';

test('Page load test', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:6969');
  const pageTitle = await page.title();
  
  expect(pageTitle).toBe('Blackhole Exploration | Homepage');

  await browser.close();
});
