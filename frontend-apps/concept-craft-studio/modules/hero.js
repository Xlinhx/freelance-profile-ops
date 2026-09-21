/**
 * HERO MODULE — XLINHX THỦY MẶC KHÚC THỦY (03-thuy-mac)
 * Điều phối Motion tương tác nặng đô:
 * 1. Interactive 3D Cursor Multi-plane Parallax (Desktop)
 * 2. Scroll-Driven Cinematic Camera & River Transformation nối tiếp Section 2
 * 3. Cascade Typography & Living Atmosphere Reveal
 */
(function() {
  'use strict';

  function initHero() {
    const heroSection = document.querySelector('.section-hero');
    const heroCopy = document.querySelector('.hero-copy');
    const artPlate = document.querySelector('.hero-art-plate');
    const sunbeams = document.querySelector('.hero-sunbeams-layer');
    const dappledLight = document.querySelector('.hero-dappled-light');
    const riverTransition = document.querySelector('.hero-river-transition');
    if (!heroSection) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Kích hoạt hiệu ứng xuất hiện ban đầu
    if (prefersReducedMotion) {
      heroCopy?.classList.add('is-revealed');
      return;
    }

    requestAnimationFrame(() => {
      setTimeout(() => heroCopy?.classList.add('is-revealed'), 150);
    });

    // 2. Interactive 3D Cursor Multi-plane Parallax (Desktop chỉ khi > 860px)
    let mouseX = 0, mouseY = 0;
    let targetMouseX = 0, targetMouseY = 0;
    let isMouseActive = false;
    let rafId = null;

    function renderParallax() {
      if (!isMouseActive) return;
      // Lerp mượt mà (smooth damping)
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      if (artPlate) {
        artPlate.style.transform = `perspective(1200px) rotateY(${mouseX * 1.6}deg) rotateX(${-mouseY * 1.2}deg) translate3d(${mouseX * 10}px, ${mouseY * 8}px, 0)`;
      }
      if (sunbeams) {
        sunbeams.style.transform = `translate3d(${-mouseX * 18}px, ${-mouseY * 10}px, 0)`;
      }
      if (dappledLight) {
        dappledLight.style.transform = `translate3d(${mouseX * 12}px, ${mouseY * 10}px, 0)`;
      }
      if (heroCopy) {
        heroCopy.style.transform = `translate3d(${-mouseX * 8}px, ${-mouseY * 6}px, 0)`;
      }

      rafId = requestAnimationFrame(renderParallax);
    }

    heroSection.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 860) return;
      const rect = heroSection.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width) - 0.5;
      targetMouseY = ((e.clientY - rect.top) / rect.height) - 0.5;

      if (!isMouseActive) {
        isMouseActive = true;
        rafId = requestAnimationFrame(renderParallax);
      }
    }, { passive: true });

    heroSection.addEventListener('mouseleave', () => {
      targetMouseX = 0;
      targetMouseY = 0;
      setTimeout(() => {
        if (Math.abs(mouseX) < 0.01 && Math.abs(mouseY) < 0.01) {
          isMouseActive = false;
          if (rafId) cancelAnimationFrame(rafId);
          if (artPlate) artPlate.style.transform = '';
          if (sunbeams) sunbeams.style.transform = '';
          if (dappledLight) dappledLight.style.transform = '';
          if (heroCopy) heroCopy.style.transform = '';
        }
      }, 500);
    }, { passive: true });

    // 3. Scroll-Driven Cinematic Camera & River Flow Downward
    let isScrollTicking = false;

    function handleScrollTransformation() {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = heroSection.offsetHeight || window.innerHeight;

      if (scrollY > heroHeight + 50) {
        isScrollTicking = false;
        return;
      }

      const progress = Math.min(1, Math.max(0, scrollY / heroHeight));

      // Chữ mờ dần và bay nhẹ lên với optical blur
      if (heroCopy) {
        const copyY = progress * -60;
        const copyOpacity = Math.max(0, 1 - progress * 2.2);
        const copyBlur = progress * 6;
        heroCopy.style.opacity = copyOpacity;
        heroCopy.style.filter = `blur(${copyBlur}px)`;
        heroCopy.style.transform = `translate3d(0, ${copyY}px, 0)`;
      }

      // Tranh zoom nhẹ tạo chiều sâu bước vào thế giới thủy mặc (tâm xoay tại cuốn sách & rặng núi)
      if (artPlate && !isMouseActive) {
        const artScale = 1 + progress * 0.06;
        artPlate.style.transform = `scale(${artScale})`;
      }

      // Luồng sáng và bụi quang học tan dần vào khí quyển
      if (sunbeams) {
        sunbeams.style.opacity = Math.max(0.2, 0.7 - progress * 0.6);
      }
      if (dappledLight) {
        dappledLight.style.opacity = Math.max(0.08, 0.25 - progress * 0.25);
      }

      // Dải sóng nước ngọc chuyển tiếp mượt mà vào thềm đá Section 2
      if (riverTransition) {
        riverTransition.style.opacity = Math.min(1, 0.85 + progress * 0.15);
      }

      isScrollTicking = false;
    }

    window.addEventListener('scroll', () => {
      if (!isScrollTicking) {
        requestAnimationFrame(handleScrollTransformation);
        isScrollTicking = true;
      }
    }, { passive: true });
  }

  window.initHero = initHero;
})();
