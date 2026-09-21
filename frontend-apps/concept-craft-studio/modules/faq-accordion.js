/**
 * S09: FAQ ACCORDION MODULE — XLINHX DAYLIGHT CRAFT STUDIO
 * "Làm rõ trước khi bắt đầu."
 * 
 * 1. SCROLL-TRIGGERED CINEMATIC REVEAL:
 *    - IntersectionObserver kích hoạt chuỗi chuyển động cascade khi cuộn tới Section 8
 * 2. INTERACTIVE QUATREFOIL & JADE KOMOREBI HOVER:
 *    - Tia sáng ngọc bích động theo con trỏ chuột trên từng hàng accordion
 *    - Hoa văn tứ diệp ở hai đầu dải phân cách xoay nhẹ và phát sáng khi hover hàng tương ứng
 * 3. SPATIAL 3D MOUSE PARALLAX:
 *    - Thị sai không gian đa lớp mượt mà giữa bối cảnh núi ngọc và nội dung
 * 4. TACTILE ACCORDION TOGGLE:
 *    - Đóng mở 60fps mượt mà, phản hồi đàn hồi chuẩn Apple Spring Physics
 */
(function() {
  'use strict';

  function initFaqAccordion() {
    const faqSection = document.getElementById('faq');
    if (!faqSection) return;

    const rows = faqSection.querySelectorAll('.s09-acc-row');
    const dividers = faqSection.querySelectorAll('.s09-ornament-divider');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // =========================================================================
    // 1. SCROLL REVEAL OBSERVER: KÍCH HOẠT CHUỖI MOTION KHI CUỘN TỚI
    // =========================================================================
    if (prefersReducedMotion) {
      faqSection.classList.add('is-in-view');
    } else if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            faqSection.classList.add('is-in-view');
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      });

      revealObserver.observe(faqSection);
    } else {
      faqSection.classList.add('is-in-view');
    }

    // =========================================================================
    // 2. ACCORDION EXPANSION & TACTILE INTERACTION
    // =========================================================================
    rows.forEach((row, index) => {
      const trigger = row.querySelector('.s09-acc-trigger');
      if (!trigger) return;

      // Divider liền kề phía trên và phía dưới hàng này
      const prevDivider = dividers[index];
      const nextDivider = dividers[index + 1];

      // Tương tác Hover: Ánh sáng ngọc theo trỏ chuột & xoay hoa văn tứ diệp viền
      row.addEventListener('pointerenter', () => {
        if (prevDivider) prevDivider.classList.add('is-row-hovered');
        if (nextDivider) nextDivider.classList.add('is-row-hovered');
      });

      row.addEventListener('pointerleave', () => {
        if (prevDivider) prevDivider.classList.remove('is-row-hovered');
        if (nextDivider) nextDivider.classList.remove('is-row-hovered');
      });

      row.addEventListener('pointermove', (e) => {
        const rect = row.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        row.style.setProperty('--mouse-x', `${x}px`);
        row.style.setProperty('--mouse-y', `${y}px`);
      });

      // Click Toggle với phản hồi đóng mở mượt mà
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = row.classList.contains('is-open');

        // Đóng các hàng khác để người xem tập trung câu trả lời
        rows.forEach(otherRow => {
          if (otherRow !== row) {
            otherRow.classList.remove('is-open');
            const otherBtn = otherRow.querySelector('.s09-acc-trigger');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Đảo trạng thái hàng hiện tại
        if (isOpen) {
          row.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          row.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // =========================================================================
    // 3. 3D SPATIAL PARALLAX THEO CHUỘT (TỰ NHIÊN & ÊM DỊU)
    // =========================================================================
    if (!prefersReducedMotion) {
      let mouseX = 0, mouseY = 0;
      let targetX = 0, targetY = 0;
      let isHovering = false;
      let animationFrameId = null;

      const backdrop = faqSection.querySelector('.s08-backdrop-img');
      const leftCol = faqSection.querySelector('.s09-left-col');
      const rightCol = faqSection.querySelector('.s09-right-col');

      function renderParallax() {
        mouseX += (targetX - mouseX) * 0.065;
        mouseY += (targetY - mouseY) * 0.065;

        if (backdrop) {
          // Nền di chuyển ngược hướng chuột tạo cảm giác chiều sâu 3D
          backdrop.style.transform = `scale(1.03) translate3d(${-mouseX * 0.5}px, ${-mouseY * 0.35}px, 0)`;
        }
        if (leftCol) {
          leftCol.style.transform = `translate3d(${mouseX * 0.25}px, ${mouseY * 0.15}px, 0)`;
        }
        if (rightCol) {
          rightCol.style.transform = `translate3d(${mouseX * 0.15}px, ${mouseY * 0.2}px, 0)`;
        }

        if (isHovering || Math.abs(targetX - mouseX) > 0.01 || Math.abs(targetY - mouseY) > 0.01) {
          animationFrameId = requestAnimationFrame(renderParallax);
        } else {
          animationFrameId = null;
        }
      }

      function startParallaxLoop() {
        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(renderParallax);
        }
      }

      faqSection.addEventListener('pointerenter', () => {
        isHovering = true;
        startParallaxLoop();
      });

      faqSection.addEventListener('pointerleave', () => {
        isHovering = false;
        targetX = 0;
        targetY = 0;
        startParallaxLoop();
      });

      faqSection.addEventListener('pointermove', (e) => {
        const rect = faqSection.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        targetX = nx * 16;
        targetY = ny * 10;
        startParallaxLoop();
      });
    }
  }

  window.initFaqAccordion = initFaqAccordion;
})();
