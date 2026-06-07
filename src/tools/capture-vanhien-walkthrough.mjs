import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const baseUrl = 'https://van-hien.pages.dev';
const mediaDir = path.resolve('public/media/vanhien');
const rawDir = path.join(mediaDir, 'raw');

const credentials = {
  teacherUser: process.env.VANHIEN_TEACHER_USERNAME,
  teacherPass: process.env.VANHIEN_TEACHER_PASSWORD,
  studentUser: process.env.VANHIEN_STUDENT_USERNAME,
  studentPass: process.env.VANHIEN_STUDENT_PASSWORD,
};

for (const [key, value] of Object.entries(credentials)) {
  if (!value) {
    throw new Error(
      `Missing env var: ${key.replace(/[A-Z]/g, (letter) => `_${letter}`).toUpperCase()}`,
    );
  }
}

const viewport = {width: 1080, height: 1920};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function shot(page, name) {
  await page.screenshot({
    path: path.join(mediaDir, `${name}.png`),
    fullPage: false,
  });
}

async function login(page, username, password) {
  await page.goto(`${baseUrl}/login`, {waitUntil: 'networkidle'});
  await page.getByRole('textbox').first().fill(username);
  await page.getByRole('textbox').nth(1).fill(password);
  await page.getByRole('button', {name: /login\s*đăng nhập/i}).click();
  await page.waitForLoadState('networkidle');
}

async function main() {
  await fs.mkdir(mediaDir, {recursive: true});
  await fs.mkdir(rawDir, {recursive: true});

  const browser = await chromium.launch({headless: true});
  const context = await browser.newContext({
    viewport,
    recordVideo: {
      dir: rawDir,
      size: viewport,
    },
  });
  const page = await context.newPage();

  await page.goto(baseUrl, {waitUntil: 'networkidle'});
  await shot(page, '01-home');

  await login(page, credentials.teacherUser, credentials.teacherPass);
  await page.waitForURL('**/teacher/dashboard');
  await wait(700);
  await shot(page, '02-teacher-dashboard');
  await shot(page, '13-teacher-overview');

  await page.getByRole('link', {name: /lớp học/i}).click();
  await page.waitForLoadState('networkidle');
  await wait(500);
  await shot(page, '10-teacher-classes');

  await page.getByRole('link', {name: /thư viện tác phẩm/i}).click();
  await page.waitForLoadState('networkidle');
  await wait(500);
  await shot(page, '11-teacher-library');

  await page.getByRole('link', {name: /ngân hàng đề/i}).click();
  await page.waitForLoadState('networkidle');
  await wait(500);
  await shot(page, '12-teacher-bank');

  await page.getByRole('button', {name: /tạo bài thi/i}).click();
  await wait(600);
  await shot(page, '03-teacher-ai-exam');
  await page.keyboard.press('Escape');
  await wait(300);

  await page.getByRole('link', {name: /phân tích ai/i}).click();
  await page.waitForLoadState('networkidle');
  await wait(500);
  await shot(page, '05-teacher-ai-review');

  await page.getByRole('button', {name: /đăng xuất/i}).click();
  await page.waitForLoadState('networkidle');

  await login(page, credentials.studentUser, credentials.studentPass);
  await page.waitForURL('**/student/dashboard');
  await wait(700);
  await shot(page, '06-student-dashboard');

  await page.getByRole('link', {name: /lặng lẽ sa pa/i}).first().click();
  await page.waitForLoadState('networkidle');
  await wait(700);
  await shot(page, '07-student-exam-room');

  await page.getByRole('link', {name: /chat nhân vật/i}).click();
  await page.waitForLoadState('networkidle');
  await page.getByText(/lão hạc/i).first().click();
  await wait(400);
  await page.getByText(/ông giáo/i).first().click();
  await wait(700);
  await shot(page, '08-student-character-chat');

  await page.getByRole('textbox', {name: /hỏi ông giáo/i}).fill(
    'Vì sao Lão Hạc lại bán cậu Vàng?',
  );
  await page.getByRole('button', {name: 'send'}).click();
  await wait(5500);
  await shot(page, '17-student-character-response');

  await page.getByRole('link', {name: /đa vũ trụ/i}).click();
  await page.waitForLoadState('networkidle');
  await wait(500);
  await shot(page, '15-student-multiverse-list');

  await page
    .getByRole('button', {name: /lão hạc không bán cậu vàng/i})
    .click();
  await wait(900);
  await shot(page, '09-student-multiverse');

  await page.keyboard.press('Escape');
  await wait(300);
  const closeButtons = page.getByRole('button', {name: /close|đóng|x/i});
  if (await closeButtons.count()) {
    await closeButtons.first().click({force: true}).catch(() => {});
    await wait(300);
  }
  await page.keyboard.press('Escape').catch(() => {});
  await wait(500);

  await page.getByRole('link', {name: /kết quả/i}).click();
  await page.waitForLoadState('networkidle');
  await wait(500);
  await shot(page, '14-student-results');

  await page.getByRole('link', {name: /hồ sơ của tôi/i}).click();
  await page.waitForLoadState('networkidle');
  await wait(500);
  await shot(page, '16-student-profile');

  await context.close();
  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
