/**
 * S09: CONTACT STAGE MOTION & MOBILE TOUCH MODULE — XLINHX DAYLIGHT CRAFT STUDIO (Revision 06.0)
 * "Tờ thư nhô lên từ hộp ngọc bích trên Desktop & Khay ngọc bích chạm nhanh trên Mobile"
 * 
 * CHỨC NĂNG:
 * 1. Intersection Observer kích hoạt nhịp thở xuất hiện (.is-in-view) trên cả Desktop & Mobile.
 * 2. Desktop: 3D Perspective Tilt & Specular Sheen theo con trỏ chuột.
 * 3. Mobile (< 860px):
 *    - Chạm chọn Quick Chips -> Tự động điền nội dung vào form tức thì.
 *    - Nút CTA di động -> Soạn sẵn email gửi đến linhnx.developer@gmail.com.
 *    - Nút cuộn lên đầu trang di động.
 *    - Hoàn toàn không chạy RAF tilt loops trên thiết bị cảm ứng để tiết kiệm pin và đảm bảo 60fps.
 */
(function() {
  'use strict';

  function initContactStageMotion() {
    const stage = document.getElementById('contact');
    if (!stage) return;

    // 1. INTERSECTION OBSERVER: Kích hoạt xuất hiện khi cuộn vào viewport
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      stage.classList.add('is-in-view');
    } else {
      const stageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            stage.classList.add('is-in-view');
          }
        });
      }, {
        threshold: [0.1, 0.25, 0.5]
      });

      stageObserver.observe(stage);

      // Tự động kích hoạt nếu trang được tải lại ngay tại Section 9
      const rect = stage.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        stage.classList.add('is-in-view');
      }
    }

    // 2. DESKTOP 3D TILT & SPECULAR SHEEN (Chỉ chạy trên thiết bị có chuột - mouse / fine pointer)
    const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 861px)').matches;
    const paperCard = stage.querySelector('.s09-paper-card');

    if (isDesktopPointer && paperCard && !prefersReducedMotion) {
      let currentTiltX = 0;
      let currentTiltY = 0;
      let targetTiltX = 0;
      let targetTiltY = 0;
      let targetSheenX = 35;
      let targetSheenY = 25;
      let currentSheenX = 35;
      let currentSheenY = 25;
      let rafId = null;
      let isTracking = false;

      function renderTiltLoop() {
        currentTiltX += (targetTiltX - currentTiltX) * 0.08;
        currentTiltY += (targetTiltY - currentTiltY) * 0.08;
        currentSheenX += (targetSheenX - currentSheenX) * 0.08;
        currentSheenY += (targetSheenY - currentSheenY) * 0.08;

        paperCard.style.transform = `perspective(1000px) rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg)`;
        paperCard.style.setProperty('--sheen-x', `${currentSheenX.toFixed(1)}%`);
        paperCard.style.setProperty('--sheen-y', `${currentSheenY.toFixed(1)}%`);

        if (isTracking || Math.abs(targetTiltX - currentTiltX) > 0.01 || Math.abs(targetTiltY - currentTiltY) > 0.01) {
          rafId = requestAnimationFrame(renderTiltLoop);
        } else {
          rafId = null;
        }
      }

      function onPointerMove(e) {
        const cardRect = paperCard.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;

        const nx = Math.max(-1, Math.min(1, (e.clientX - centerX) / (cardRect.width * 0.7)));
        const ny = Math.max(-1, Math.min(1, (e.clientY - centerY) / (cardRect.height * 0.7)));

        targetTiltX = -ny * 1.8;
        targetTiltY = nx * 2.2;
        targetSheenX = 50 + nx * 35;
        targetSheenY = 50 + ny * 35;

        isTracking = true;
        if (!rafId) {
          rafId = requestAnimationFrame(renderTiltLoop);
        }
      }

      function onPointerLeave() {
        targetTiltX = 0;
        targetTiltY = 0;
        targetSheenX = 35;
        targetSheenY = 25;
        isTracking = false;
        if (!rafId) {
          rafId = requestAnimationFrame(renderTiltLoop);
        }
      }

      stage.addEventListener('pointermove', onPointerMove, { passive: true });
      stage.addEventListener('pointerleave', onPointerLeave, { passive: true });
    }

    // 3. ARTISTIC MOBILE STAGE LOGIC (iPhone X/11/12... <= 860px)
    const mobileStage = document.getElementById('s09-mobile-stage') || document.getElementById('s09-mobile-deck');
    if (mobileStage) {
      const textarea = document.getElementById('contact-m-message');
      const inputInfo = document.getElementById('contact-m-info');
      const submitBtn = document.getElementById('contact-m-submit-btn');
      const scrollTopBtn = document.getElementById('s09-m-scroll-top-btn');

      // Xử lý gửi thư trao đổi di động
      if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const message = (textarea?.value || '').trim();
          const contact = (inputInfo?.value || '').trim();

          const subject = encodeURIComponent('[Xlinhx Studio] Trao đổi dự án mới');
          let bodyText = message || 'Chào Lĩnh, mình muốn trao đổi về dự án mới.';
          if (contact) {
            bodyText += `\n\n---\nThông tin liên hệ của mình: ${contact}`;
          }
          const body = encodeURIComponent(bodyText);

          window.location.href = `mailto:linhnx.developer@gmail.com?subject=${subject}&body=${body}`;
        });
      }

      // Cuộn lên đầu trang trên mobile
      if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          if (document.body) {
            document.body.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
          if (document.documentElement) {
            document.documentElement.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        });
      }
    }
  }

  // Khởi chạy khi DOM sẵn sàng
  window.initContactStageMotion = initContactStageMotion;
})();
