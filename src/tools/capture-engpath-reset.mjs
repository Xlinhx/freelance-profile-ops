import {mkdir} from 'node:fs/promises';
import path from 'node:path';
import {chromium} from 'playwright';

const baseUrl = 'https://edupath-english.pages.dev';
const mediaDir = path.resolve('public/media/engpath-reset');

const student = {
  email: 'hs01@engpath.vn',
  password: 'student123',
};

const essay =
  'Living a long and healthy life requires consistent habits and a positive mindset. First, teenagers should sleep enough because the body needs time to recover and the brain needs rest to remember lessons. Second, a balanced diet with vegetables, fruit, protein, and enough water gives us energy for school and sports. Exercise is also important, even a short walk or a simple workout can improve our mood and protect our heart. In addition, we should reduce screen time before bed and spend more time talking with family or friends. Mental health is part of a healthy life, so students need to manage stress and ask for help when they feel tired. In my opinion, health is built from small daily choices, not from one big change. If we keep these habits every day, we can live longer, study better, and enjoy life more.';

const waitForApp = async (page) => {
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(700);
};

const shot = async (page, name) => {
  await waitForApp(page);
  await page.screenshot({
    path: path.join(mediaDir, `${name}.png`),
    fullPage: false,
  });
  console.log(`captured ${name}`);
};

const loginStudent = async (page) => {
  await page.goto(`${baseUrl}/login`, {waitUntil: 'networkidle'});
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.goto(`${baseUrl}/login`, {waitUntil: 'networkidle'});
  const inputs = page.locator('input');
  await inputs.first().fill(student.email);
  await inputs.nth(1).fill(student.password);
  await page.locator('form').getByRole('button', {name: /Đăng Nhập/i}).click();
  await page.waitForURL('**/grades', {timeout: 8000});
};

const main = async () => {
  await mkdir(mediaDir, {recursive: true});

  const browser = await chromium.launch({headless: true});
  const page = await browser.newPage({
    viewport: {width: 1080, height: 1920},
    deviceScaleFactor: 1,
  });

  await page.goto(baseUrl, {waitUntil: 'networkidle'});
  await shot(page, '01-landing-system');

  await loginStudent(page);
  await shot(page, '02-student-grades');

  await page.goto(`${baseUrl}/dashboard`, {waitUntil: 'networkidle'});
  await shot(page, '03-student-dashboard');

  await page.goto(`${baseUrl}/grade/11`, {waitUntil: 'networkidle'});
  await shot(page, '04-student-roadmap');

  await page.goto(`${baseUrl}/grade/11/unit/11`, {waitUntil: 'networkidle'});
  await shot(page, '05-student-unit-overview');

  await page.goto(`${baseUrl}/grade/11/unit/11/vocabulary`, {waitUntil: 'networkidle'});
  await shot(page, '06-student-vocab');

  await page.goto(`${baseUrl}/grade/11/unit/11/grammar`, {waitUntil: 'networkidle'});
  await shot(page, '07-student-grammar');

  await page.goto(`${baseUrl}/grade/11/unit/11/reading`, {waitUntil: 'networkidle'});
  await shot(page, '08-student-reading-listening');

  await page.goto(`${baseUrl}/grade/11/unit/11/speaking`, {waitUntil: 'networkidle'});
  await page.getByRole('textbox').fill(essay);
  await shot(page, '09-student-writing');

  await page.locator('button:has-text("AI Chấm bài")').click();
  await page.getByText('Nhận Xét Từ AI').waitFor({timeout: 30000});
  await page.getByText('Tổng điểm').waitFor({timeout: 30000});
  await shot(page, '10-student-ai-result');

  await page.getByRole('button', {name: 'Mở AI Chatbot'}).click();
  await page.getByPlaceholder('Hỏi về tiếng Anh...').fill('How can I improve this essay score?');
  await page
    .locator('div')
    .filter({hasText: 'AI Gia Sư Cá Nhân'})
    .locator('button')
    .last()
    .click();
  await page.getByText('Chào Việt Anh').waitFor({timeout: 30000});
  await shot(page, '11-student-ai-chat');

  await page.goto(`${baseUrl}/achievements`, {waitUntil: 'networkidle'});
  await shot(page, '12-student-achievements');

  await browser.close();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
