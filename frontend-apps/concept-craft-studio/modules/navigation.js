/**
 * NAVIGATION MODULE — XLINHX JADE BOOK JOURNEY
 * Sticky Header Glass Dock, Scroll Spy, Mobile Drawer & Scroll-to-top.
 */
(function() {
  'use strict';

  function initNavigation() {
    const header = document.getElementById('site-header');
    const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"], .mobile-nav-link[href^="#"]'));
    const menuToggleBtn = document.getElementById('menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');

    // Sticky header background transition
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header?.classList.add('is-scrolled');
      } else {
        header?.classList.remove('is-scrolled');
      }
    }, { passive: true });

    // Mobile Hamburger Toggle
    if (menuToggleBtn && mobileDrawer) {
      function openDrawer() {
        mobileDrawer.classList.add('is-open');
        menuToggleBtn.setAttribute('aria-expanded', 'true');
      }

      function closeDrawer() {
        mobileDrawer.classList.remove('is-open');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
      }

      menuToggleBtn.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.contains('is-open');
        if (isOpen) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });

      // Close on backdrop click
      mobileDrawer.addEventListener('click', (e) => {
        if (e.target === mobileDrawer) {
          closeDrawer();
        }
      });

      // Close on link click
      const drawerLinks = mobileDrawer.querySelectorAll('.mobile-nav-link');
      drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
          closeDrawer();
        });
      });

      // Close on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
          closeDrawer();
        }
      });
    }

    // Smooth Anchor Navigation with Sticky Header Dock Compensation
    const navLinksSmooth = document.querySelectorAll('.header-nav .nav-link, .btn-header-contact, .mobile-nav-link, a[href^="#"]');
    navLinksSmooth.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href === '#' || !href.startsWith('#')) return;
        const targetId = href.substring(1);
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        e.preventDefault();
        // Các sân khấu full màn hình (hero, person, faq, contact) căn khớp 100vh đỉnh viewport (offset 0)
        // Các section nội dung thông thường trừ bù độ cao header dock 76px
        const isDesktopStage = window.innerWidth > 768;
        const fullScreenSections = ['hero', 'person', 'faq', 'contact'];
        const isFullScreen = isDesktopStage && fullScreenSections.includes(targetId);
        const headerOffset = isFullScreen ? 0 : 76;
        const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth'
        });

        // Nếu cuộn tới section Quality (#quality), kích hoạt hiệu ứng vầng sáng chào đón
        if (targetId === 'quality') {
          setTimeout(() => {
            targetEl.classList.add('is-focused-arrival');
            setTimeout(() => targetEl.classList.remove('is-focused-arrival'), 1500);
          }, 450);
        }

        if (history.pushState) {
          history.pushState(null, '', href);
        }
      });
    });

    // Scroll Spy via IntersectionObserver
    const trackedIds = ['hero', 'projects', 'needs', 'scope', 'process', 'quality', 'person', 'faq', 'contact'];
    const trackedSections = trackedIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if ('IntersectionObserver' in window && trackedSections.length) {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const currentId = entry.target.id;
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('is-active', href === `#${currentId}`);
          });
        });
      }, {
        rootMargin: '-20% 0px -50% 0px',
        threshold: 0
      });
      trackedSections.forEach(sec => sectionObserver.observe(sec));
    }

    // Scroll to Top
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  window.initNavigation = initNavigation;
})();
