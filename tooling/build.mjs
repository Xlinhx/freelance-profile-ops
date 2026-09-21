import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const APPS_DIR = path.join(ROOT_DIR, 'frontend-apps');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

console.log('⚡ Starting Cloudflare Pages build for Xlinhx Craft Studio...\n');

// 1. Clean & prepare dist directory
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

// Helper to copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 2. Copy Craft Studio to root of dist/
const craftStudioDir = path.join(APPS_DIR, 'concept-craft-studio');
console.log(`📦 Copying Craft Studio [${craftStudioDir}] -> [dist/]...`);
copyDirSync(craftStudioDir, DIST_DIR);

// 3. Copy shared layer to dist/shared/
const sharedDir = path.join(APPS_DIR, 'shared');
const distSharedDir = path.join(DIST_DIR, 'shared');
console.log(`📦 Copying Shared Assets [${sharedDir}] -> [dist/shared/]...`);
copyDirSync(sharedDir, distSharedDir);

// 4. Copy Curriculum Vitae to dist/cv/
const cvDir = path.join(APPS_DIR, 'concept-curriculum-vitae');
const distCvDir = path.join(DIST_DIR, 'cv');
console.log(`📦 Copying Curriculum Vitae [${cvDir}] -> [dist/cv/]...`);
copyDirSync(cvDir, distCvDir);

// 5. Generate Cloudflare Pages _headers
const headersContent = `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Access-Control-Allow-Origin: *

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/*.js
  Cache-Control: public, max-age=0, must-revalidate

/*.css
  Cache-Control: public, max-age=0, must-revalidate

/shared/icons/*
  Cache-Control: public, max-age=31536000, immutable

/shared/identity/*
  Cache-Control: public, max-age=31536000, immutable

/shared/projects-media/*
  Cache-Control: public, max-age=31536000, immutable

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;
fs.writeFileSync(path.join(DIST_DIR, '_headers'), headersContent, 'utf8');
console.log('📄 Generated dist/_headers for Cloudflare Pages caching & security');

// 6. Generate Cloudflare Pages _redirects
const redirectsContent = `/studio/*  /:splat  301
/studio    /        301
/xlinhx/*  /:splat  301
/xlinhx    /        301
`;
fs.writeFileSync(path.join(DIST_DIR, '_redirects'), redirectsContent, 'utf8');
console.log('📄 Generated dist/_redirects for legacy /studio/ and /xlinhx/ routes');

console.log('\n✅ Cloudflare Pages build complete! Output ready at: dist/\n');
