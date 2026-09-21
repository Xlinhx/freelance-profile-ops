/**
 * QUALITY PREVIEW MODULE — XLINHX JADE BOOK JOURNEY
 * S06: Switch Desktop / Mobile preview container reflow thực tế.
 */
(function() {
  'use strict';

  function initQualityPreview() {
    const desktopBtn = document.getElementById('preview-btn-desktop');
    const mobileBtn = document.getElementById('preview-btn-mobile');
    const liveSurface = document.getElementById('quality-live-surface');

    if (!desktopBtn || !mobileBtn || !liveSurface) return;

    function setMode(mode) {
      const isMobile = mode === 'mobile';
      desktopBtn.classList.toggle('is-active', !isMobile);
      mobileBtn.classList.toggle('is-active', isMobile);
      desktopBtn.setAttribute('aria-pressed', !isMobile ? 'true' : 'false');
      mobileBtn.setAttribute('aria-pressed', isMobile ? 'true' : 'false');

      liveSurface.classList.toggle('is-mobile', isMobile);
    }

    desktopBtn.addEventListener('click', () => setMode('desktop'));
    mobileBtn.addEventListener('click', () => setMode('mobile'));
  }

  window.initQualityPreview = initQualityPreview;
})();
