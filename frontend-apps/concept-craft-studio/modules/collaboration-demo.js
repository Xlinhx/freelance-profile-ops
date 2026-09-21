/**
 * S05: COLLABORATION JOURNEY MODULE — JADE RIVER INTERACTIVITY
 * Quản lý tương tác đồng bộ 2 chiều:
 * - Desktop: Giữa 3 mốc số trên dòng sông ngọc (01, 02, 03) và 3 thẻ quy trình, accordion góp ý.
 * - Mobile: Thanh hành trình Dòng Sông Ngọc (River Stepper), trượt thẻ Spotlight Card,
 *   nút chuyển chặng Prev/Next, pips chỉ báo và cử chỉ vuốt chạm cảm ứng (touch swipe).
 */

(function() {
  'use strict';

  function initCollaborationDemo() {
    const nodes = [
      document.getElementById('s05-node-1'),
      document.getElementById('s05-node-2'),
      document.getElementById('s05-node-3')
    ].filter(Boolean);

    const stepCards = [
      document.getElementById('s05-step-1'),
      document.getElementById('s05-step-2'),
      document.getElementById('s05-step-3')
    ].filter(Boolean);

    const stageFrame = document.querySelector('.s05-stage-frame');
    const stepsWrapper = document.getElementById('s05-steps-wrapper');
    const stepsFlow = document.querySelector('.s05-steps-flow');
    const statusBadge = document.getElementById('s05-status-badge');
    const guideToggleBtn = document.getElementById('s05-guide-toggle-btn');
    const chevronBtn = document.getElementById('s05-chevron-btn');
    const feedbackCard = document.getElementById('s05-feedback-card');

    const prevBtn = document.getElementById('s05-mobile-prev');
    const nextBtn = document.getElementById('s05-mobile-next');
    const pips = Array.from(document.querySelectorAll('.s05-pip'));

    const mobileNodes = [
      document.querySelector('#s05-step-1 .s05-step-node'),
      document.querySelector('#s05-step-2 .s05-step-node'),
      document.querySelector('#s05-step-3 .s05-step-node')
    ].filter(Boolean);

    const mobileGuidePill = document.getElementById('s05-mobile-guide-pill');
    const mobileGuideDrawer = document.getElementById('s05-mobile-guide-drawer');

    if (!nodes.length || !stepCards.length) return;

    let activeIndex = 0; // 0-indexed (Step 1 is active initially)
    let userInteracted = false;
    let autoCycleTimer = null;

    function stopAutoCycle() {
      if (autoCycleTimer) {
        clearInterval(autoCycleTimer);
        autoCycleTimer = null;
      }
    }

    function onUserInteraction() {
      userInteracted = true;
      stopAutoCycle();
    }

    function startAutoCycle() {
      if (userInteracted || autoCycleTimer || isMobileView()) return;
      autoCycleTimer = setInterval(() => {
        if (userInteracted) {
          stopAutoCycle();
          return;
        }
        const nextIndex = (activeIndex + 1) % stepCards.length;
        setActiveStep(nextIndex);
      }, 5500); // Gentle 5.5s interval to let user digest each step
    }

    function isMobileView() {
      return window.matchMedia('(max-width: 860px)').matches;
    }

    function setActiveStep(index, focusNode = false) {
      if (index < 0 || index >= stepCards.length) return;
      activeIndex = index;

      // Update data-active-step attribute on stage frame for bulletproof CSS state binding
      if (stageFrame) {
        stageFrame.setAttribute('data-active-step', String(index + 1));
      }

      // 1. Update River Nodes (Desktop)
      nodes.forEach((node, i) => {
        const isActive = (i === index);
        node.classList.toggle('is-active', isActive);
        node.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      // 1b. Update Mobile Step Nodes (Mobile Timeline)
      mobileNodes.forEach((node, i) => {
        const isActive = (i === index);
        node.classList.toggle('is-active', isActive);
        node.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      // 2. Update Step Cards
      stepCards.forEach((card, i) => {
        const isActive = (i === index);
        card.classList.toggle('is-active', isActive);
        card.setAttribute('aria-selected', isActive ? 'true' : 'false');

        // Move Status Badge to active card header / top bar
        if (isActive && statusBadge) {
          const topBar = card.querySelector('.s05-card-top-bar');
          const header = card.querySelector('.s05-step-header');
          const target = (isMobileView() && topBar) ? topBar : header;
          if (target && !target.contains(statusBadge)) {
            target.appendChild(statusBadge);
          }
        }
      });

      // 3. Update Mobile Nav Controls & Pips (if present)
      if (prevBtn) {
        prevBtn.disabled = (index === 0);
      }
      if (nextBtn) {
        nextBtn.disabled = (index === stepCards.length - 1);
      }
      pips.forEach((pip, i) => {
        pip.classList.toggle('is-active', i === index);
      });

      // 4. Auto-open feedback accordion on desktop when Step 2 is selected
      if (index === 1 && feedbackCard && !feedbackCard.classList.contains('is-open')) {
        openFeedbackCard();
      } else if (index !== 1 && feedbackCard && feedbackCard.classList.contains('is-open')) {
        closeFeedbackCard();
      }

      if (focusNode && nodes[index]) {
        try {
          nodes[index].focus({ preventScroll: true });
        } catch (_) {
          nodes[index].focus();
        }
      }
    }

    function toggleFeedbackCard() {
      if (!feedbackCard) return;
      const isOpen = feedbackCard.classList.contains('is-open');
      if (isOpen) {
        closeFeedbackCard();
      } else {
        openFeedbackCard();
      }
    }

    function openFeedbackCard() {
      if (!feedbackCard) return;
      feedbackCard.classList.add('is-open');
      if (guideToggleBtn) guideToggleBtn.setAttribute('aria-expanded', 'true');
    }

    function closeFeedbackCard() {
      if (!feedbackCard) return;
      feedbackCard.classList.remove('is-open');
      if (guideToggleBtn) guideToggleBtn.setAttribute('aria-expanded', 'false');
    }

    // Bind River Nodes Clicks & Keys (Desktop)
    nodes.forEach((node, i) => {
      node.addEventListener('click', (e) => {
        e.preventDefault();
        onUserInteraction();
        setActiveStep(i);
      });

      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onUserInteraction();
          setActiveStep(i);
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          e.preventDefault();
          onUserInteraction();
          const next = (i + 1) % nodes.length;
          setActiveStep(next, true);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          e.preventDefault();
          onUserInteraction();
          const prev = (i - 1 + nodes.length) % nodes.length;
          setActiveStep(prev, true);
        }
      });
    });

    // Bind Mobile Step Nodes Clicks
    mobileNodes.forEach((node, i) => {
      node.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        onUserInteraction();
        setActiveStep(i);
      });
    });

    // Bind Mobile Guide Pill Accordion (Cách góp ý)
    if (mobileGuidePill && mobileGuideDrawer) {
      mobileGuidePill.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        onUserInteraction();
        const isExpanded = mobileGuidePill.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          mobileGuidePill.setAttribute('aria-expanded', 'false');
          mobileGuideDrawer.hidden = true;
        } else {
          mobileGuidePill.setAttribute('aria-expanded', 'true');
          mobileGuideDrawer.hidden = false;
          setActiveStep(1);
        }
      });
    }

    // Bind Step Cards Clicks (Desktop & Mobile)
    stepCards.forEach((card, i) => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('.s05-feedback-card') || e.target.closest('.s05-mobile-guide-wrap')) {
          return;
        }
        onUserInteraction();
        setActiveStep(i);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (!e.target.closest('button')) {
            e.preventDefault();
            onUserInteraction();
            setActiveStep(i);
          }
        }
      });
    });

    // Bind Accordion Toggles (Desktop)
    if (guideToggleBtn) {
      guideToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        onUserInteraction();
        toggleFeedbackCard();
      });
    }

    if (chevronBtn) {
      chevronBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        onUserInteraction();
        toggleFeedbackCard();
      });
    }

    // Bind Mobile Prev / Next Buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        onUserInteraction();
        if (activeIndex > 0) {
          setActiveStep(activeIndex - 1);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        onUserInteraction();
        if (activeIndex < stepCards.length - 1) {
          setActiveStep(activeIndex + 1);
        }
      });
    }

    // Bind Mobile Indicator Pips
    pips.forEach((pip, i) => {
      pip.addEventListener('click', (e) => {
        e.preventDefault();
        onUserInteraction();
        setActiveStep(i);
      });
    });

    // Touch Swipe Gesture for Mobile Cards
    if (stepsWrapper) {
      let startX = 0;
      let startY = 0;
      let endX = 0;
      let endY = 0;

      stepsWrapper.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches.length === 1) {
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
        }
      }, { passive: true });

      stepsWrapper.addEventListener('touchend', (e) => {
        if (e.changedTouches && e.changedTouches.length === 1) {
          endX = e.changedTouches[0].clientX;
          endY = e.changedTouches[0].clientY;
          const diffX = endX - startX;
          const diffY = endY - startY;

          // Detect horizontal swipe: minimum 36px and horizontally dominant
          if (Math.abs(diffX) > 36 && Math.abs(diffX) > Math.abs(diffY) * 1.3) {
            onUserInteraction();
            if (diffX < 0) {
              // Swipe left -> Next step
              if (activeIndex < stepCards.length - 1) {
                setActiveStep(activeIndex + 1);
              }
            } else {
              // Swipe right -> Prev step
              if (activeIndex > 0) {
                setActiveStep(activeIndex - 1);
              }
            }
          }
        }
      }, { passive: true });
    }

    // Interactive 3D Parallax on Desktop (Emil Kowalski & Apple Design direct manipulation)
    if (stageFrame && !isMobileView()) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

      // Pause gentle auto-cycle while user inspects or hovers the stage
      stageFrame.addEventListener('mouseenter', () => {
        stopAutoCycle();
      });

      stageFrame.addEventListener('mouseleave', () => {
        if (!userInteracted) {
          startAutoCycle();
        }
      });

      if (!prefersReducedMotion && hasFinePointer) {
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;
        let isLoopRunning = false;
        let isInside = false;

        function updateParallax() {
          const dx = targetX - currentX;
          const dy = targetY - currentY;
          currentX += dx * 0.07;
          currentY += dy * 0.07;

          stageFrame.style.setProperty('--s05-px', currentX.toFixed(4));
          stageFrame.style.setProperty('--s05-py', currentY.toFixed(4));

          if (isInside || Math.abs(dx) > 0.001 || Math.abs(dy) > 0.001) {
            requestAnimationFrame(updateParallax);
          } else {
            currentX = 0;
            currentY = 0;
            stageFrame.style.setProperty('--s05-px', '0');
            stageFrame.style.setProperty('--s05-py', '0');
            isLoopRunning = false;
          }
        }

        function startLoop() {
          if (!isLoopRunning) {
            isLoopRunning = true;
            requestAnimationFrame(updateParallax);
          }
        }

        stageFrame.addEventListener('mousemove', (e) => {
          const rect = stageFrame.getBoundingClientRect();
          if (rect.width <= 0 || rect.height <= 0) return;
          isInside = true;
          const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
          targetX = Math.max(-1, Math.min(1, nx));
          targetY = Math.max(-1, Math.min(1, ny));
          startLoop();
        }, { passive: true });

        stageFrame.addEventListener('mouseleave', () => {
          isInside = false;
          targetX = 0;
          targetY = 0;
          startLoop();
        });
      }
    }

    // Scroll Reveal Observer: Triggers Heavy-Duty Cinematic Motion Sequence on Desktop
    const processSection = document.getElementById('process');
    if (processSection) {
      if (isMobileView()) {
        // Instant view on mobile, zero scroll latency or heavy delay
        processSection.classList.add('is-in-view');
      } else if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              processSection.classList.add('is-in-view');
              startAutoCycle();
            } else {
              stopAutoCycle();
            }
          });
        }, {
          threshold: 0.15,
          rootMargin: '0px 0px -40px 0px'
        });
        observer.observe(processSection);
      } else {
        processSection.classList.add('is-in-view');
        startAutoCycle();
      }
    }

    // Page Visibility API to pause animation loop when tab is backgrounded
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAutoCycle();
      } else if (processSection && processSection.classList.contains('is-in-view')) {
        startAutoCycle();
      }
    });

    // Initialize initial state (Step 1)
    setActiveStep(0);
    // Export to window for main orchestrator & test controls
    window.setCollaborationStep = setActiveStep;
  }

  // Export to window for main orchestrator
  window.initCollaborationDemo = initCollaborationDemo;
})();
