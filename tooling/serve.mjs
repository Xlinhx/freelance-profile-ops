import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const APPS_DIR = path.join(ROOT_DIR, 'frontend-apps');
const BRAND_DIR = path.join(ROOT_DIR, 'brand-system');

const PORT = parseInt(process.env.PORT || '3000', 10);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf'
};

function resolveTargetFile(reqUrl) {
  const urlObj = new URL(reqUrl, `http://localhost:${PORT}`);
  let pathname = decodeURIComponent(urlObj.pathname);

  // Root default -> Concept Craft Studio
  if (pathname === '/' || pathname === '') {
    return path.join(APPS_DIR, 'concept-craft-studio', 'index.html');
  }

  // Fallback for default favicon.ico
  if (pathname === '/favicon.ico') {
    return path.join(APPS_DIR, 'shared', 'identity', 'favicon.svg');
  }

  // Shared layer assets (/shared/...)
  if (pathname.startsWith('/shared/')) {
    const rel = pathname.slice('/shared/'.length);
    return path.join(APPS_DIR, 'shared', rel);
  }

  // Brand system assets (/brand/...)
  if (pathname.startsWith('/brand/')) {
    const rel = pathname.slice('/brand/'.length);
    return path.join(BRAND_DIR, rel);
  }

  // Concept: Craft Studio (Daylight / Xlinhx)
  if (pathname.startsWith('/studio/') || pathname.startsWith('/xlinhx/')) {
    const prefix = pathname.startsWith('/studio/') ? '/studio/' : '/xlinhx/';
    const rel = pathname.slice(prefix.length);
    const target = path.join(APPS_DIR, 'concept-craft-studio', rel);
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
      return path.join(target, 'index.html');
    }
    return target;
  }
  if (pathname === '/studio' || pathname === '/xlinhx') {
    return path.join(APPS_DIR, 'concept-craft-studio', 'index.html');
  }

  // Concept: Curriculum Vitae
  if (pathname.startsWith('/cv/')) {
    const rel = pathname.slice('/cv/'.length);
    const target = path.join(APPS_DIR, 'concept-curriculum-vitae', rel);
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
      return path.join(target, 'index.html');
    }
    return target;
  }
  if (pathname === '/cv') {
    return path.join(APPS_DIR, 'concept-curriculum-vitae', 'index.html');
  }

  // Direct asset fallback within concept-craft-studio
  const fallbackStudio = path.join(APPS_DIR, 'concept-craft-studio', pathname);
  if (fs.existsSync(fallbackStudio) && !fs.statSync(fallbackStudio).isDirectory()) {
    return fallbackStudio;
  }

  // Direct fallback within frontend-apps
  const fallbackApp = path.join(APPS_DIR, pathname);
  if (fs.existsSync(fallbackApp) && !fs.statSync(fallbackApp).isDirectory()) {
    return fallbackApp;
  }

  return fallbackStudio;
}

const server = http.createServer((req, res) => {
  const filePath = resolveTargetFile(req.url);

  // Security check: ensure target is within ROOT_DIR
  const relative = path.relative(ROOT_DIR, filePath);
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`404 Not Found: ${req.url}`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`🚀 Freelance Profile Ops — Local Server Started!`);
  console.log(`👉 Portfolio (Craft Studio):  http://localhost:${PORT}/ (or /studio/)`);
  console.log(`👉 Concept CV & Resume:       http://localhost:${PORT}/cv/`);
  console.log(`👉 Shared Assets Layer:       http://localhost:${PORT}/shared/`);
  console.log(`======================================================\n`);
});