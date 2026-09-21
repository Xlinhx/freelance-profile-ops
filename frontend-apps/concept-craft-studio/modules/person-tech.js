/**
 * S07 / S08: PERSON TECH & MASTER STAGE MODULE — XLINHX JADE CRAFT STUDIO
 * "Trao đổi trực tiếp với người xây sản phẩm."
 * Điều khiển:
 * 1. Desktop: Thanh dock viền iPhone Dynamic Island & băng chuyền tech stack marquee.
 * 2. Mobile: Native iOS Bottom Sheet Modal (Drawer vuốt, lọc nhóm segmented, grid 14 tech items).
 * 3. Mobile Motion: Tắt 3D pointer tilt & scroll parallax nặng nề, chuyển sang touch active micro-motion 0ms delay.
 */
(function() {
  'use strict';

  function initPersonTech() {
    const personSection = document.getElementById('person');
    const isTouchOrMobile = window.innerWidth <= 768 || window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ====================================================================
    // 1. DESKTOP: iPhone Dock Expansion Toggle
    // ====================================================================
    const dockContainer = document.getElementById('s07-dock-container');
    const dockTrigger = document.getElementById('s07-dock-trigger');
    const dockDrawer = document.getElementById('s07-dock-drawer');
    const marqueeTrack = document.getElementById('s07-marquee-track');

    if (dockTrigger && dockContainer && dockDrawer) {
      dockTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = dockContainer.classList.contains('is-open');
        const nextState = !isOpen;

        dockContainer.classList.toggle('is-open', nextState);
        dockTrigger.setAttribute('aria-expanded', String(nextState));
        dockDrawer.setAttribute('aria-hidden', String(!nextState));
      });
    }

    // ====================================================================
    // 2. MOBILE: Native iOS Bottom Sheet Modal (Popup Di Động)
    // ====================================================================
    const mDockTrigger = document.getElementById('s07-m-dock-trigger');
    const techSheet = document.getElementById('s07-tech-sheet');
    const techBackdrop = document.getElementById('s07-tech-sheet-backdrop');
    const sheetCloseBtn = document.getElementById('s07-sheet-close-btn');
    const sheetHandleWrap = document.getElementById('s07-sheet-handle-wrap');
    const sheetTabs = document.querySelectorAll('.s07-sheet-tab-btn');
    const sheetItems = document.querySelectorAll('.s07-sheet-item');

    function openTechSheet() {
      if (!techSheet || !techBackdrop) return;
      techSheet.classList.add('is-open');
      techBackdrop.classList.add('is-open');
      techSheet.setAttribute('aria-hidden', 'false');
      techBackdrop.setAttribute('aria-hidden', 'false');
      if (mDockTrigger) mDockTrigger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeTechSheet() {
      if (!techSheet || !techBackdrop) return;
      techSheet.classList.remove('is-open');
      techBackdrop.classList.remove('is-open');
      techSheet.style.transform = '';
      techSheet.setAttribute('aria-hidden', 'true');
      techBackdrop.setAttribute('aria-hidden', 'true');
      if (mDockTrigger) mDockTrigger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (mDockTrigger) {
      mDockTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openTechSheet();
      });
    }

    if (techBackdrop) {
      techBackdrop.addEventListener('click', closeTechSheet);
    }

    if (sheetCloseBtn) {
      sheetCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeTechSheet();
      });
    }

    // Dismiss with ESC key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && techSheet && techSheet.classList.contains('is-open')) {
        closeTechSheet();
      }
    });

    // Touch pull-to-dismiss gesture on sheet handle wrap
    if (sheetHandleWrap && techSheet) {
      let startY = 0;
      let currentY = 0;
      let isDragging = false;

      sheetHandleWrap.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        isDragging = true;
        techSheet.style.transition = 'none';
      }, { passive: true });

      sheetHandleWrap.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentY = e.touches[0].clientY;
        const deltaY = currentY - startY;
        if (deltaY > 0) {
          techSheet.style.transform = `translateY(${deltaY}px)`;
        }
      }, { passive: true });

      sheetHandleWrap.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        techSheet.style.transition = 'transform 0.38s cubic-bezier(0.32, 0.72, 0, 1)';
        const deltaY = currentY - startY;
        if (deltaY > 65) {
          closeTechSheet();
        } else {
          techSheet.style.transform = '';
        }
        startY = 0;
        currentY = 0;
      }, { passive: true });
    }

    // Segmented Filter Tabs for Tech Items
    if (sheetTabs.length > 0 && sheetItems.length > 0) {
      sheetTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          sheetTabs.forEach((t) => {
            t.classList.remove('is-active');
            t.setAttribute('aria-selected', 'false');
          });
          tab.classList.add('is-active');
          tab.setAttribute('aria-selected', 'true');

          const filter = tab.getAttribute('data-sheet-filter') || 'all';

          sheetItems.forEach((item) => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
              item.style.display = 'flex';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    }

    // ====================================================================
    // 3. SMOOTH NAVIGATION (Desktop & Mobile Internal Links)
    // ====================================================================
    const internalLinks = [
      { id: 's07-btn-contact', targetId: 'contact' },
      { id: 's07-btn-projects', targetId: 'projects' },
      { id: 's07-card-projects', targetId: 'projects' },
      { id: 's07-m-btn-contact', targetId: 'contact' },
      { id: 's07-m-btn-projects', targetId: 'projects' },
      { id: 's07-m-card-projects', targetId: 'projects' }
    ];

    internalLinks.forEach(({ id, targetId }) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', (e) => {
          const target = document.getElementById(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (history.pushState) {
              history.pushState(null, '', '#' + targetId);
            }
          }
        });
      }
    });

    // ====================================================================
    // 4. PAUSE MARQUEE ON TOUCH / HOVER FOR ACCESSIBILITY
    // ====================================================================
    if (marqueeTrack) {
      marqueeTrack.addEventListener('touchstart', () => {
        marqueeTrack.style.animationPlayState = 'paused';
      }, { passive: true });

      marqueeTrack.addEventListener('touchend', () => {
        setTimeout(() => {
          marqueeTrack.style.animationPlayState = 'running';
        }, 1200);
      }, { passive: true });
    }

    // ====================================================================
    // 5. DESKTOP-ONLY MOTION: 3D Cursor Tilt & Multi-plane Parallax
    // (Bỏ qua hoàn toàn trên mobile để tiết kiệm tài nguyên & đạt 120fps mượt mà)
    // ====================================================================
    if (!isTouchOrMobile && !prefersReducedMotion) {
      const cards = personSection ? personSection.querySelectorAll('.s07-card') : [];

      cards.forEach((card) => {
        card.addEventListener('pointermove', (e) => {
          const rect = card.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) return;
          const px = (e.clientX - rect.left) / rect.width - 0.5; // [-0.5, 0.5]
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          const rx = (-py * 10).toFixed(2);
          const ry = (px * 10).toFixed(2);
          const lx = ((px + 0.5) * 100).toFixed(1);
          const ly = ((py + 0.5) * 100).toFixed(1);

          card.style.setProperty('--rx', `${rx}deg`);
          card.style.setProperty('--ry', `${ry}deg`);
          card.style.setProperty('--light-x', `${lx}%`);
          card.style.setProperty('--light-y', `${ly}%`);
        });

        card.addEventListener('pointerleave', () => {
          card.style.setProperty('--rx', '0deg');
          card.style.setProperty('--ry', '0deg');
        });
      });

      // Scroll-driven Multi-plane Parallax (Desktop)
      let ticking = false;
      function updateScrollParallax() {
        if (!personSection) return;
        const rect = personSection.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;

        if (rect.bottom >= -100 && rect.top <= vh + 100) {
          const centerOffset = (rect.top + rect.height / 2) - (vh / 2);
          const progress = centerOffset / (vh + rect.height);
          const bgY = (progress * 46).toFixed(1);
          const cardsY = (-progress * 28).toFixed(1);

          personSection.style.setProperty('--s07-bg-parallax', `${bgY}px`);
          personSection.style.setProperty('--s07-cards-parallax', `${cardsY}px`);
        }
        ticking = false;
      }

      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollParallax);
          ticking = true;
        }
      }, { passive: true });

      updateScrollParallax();
    }

    // ====================================================================
    // 6. VIEWPORT INTERSECTION OBSERVER
    // ====================================================================
    if (personSection && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            personSection.classList.add('is-in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      observer.observe(personSection);
    }
  }

  window.initPersonTech = initPersonTech;
})();
