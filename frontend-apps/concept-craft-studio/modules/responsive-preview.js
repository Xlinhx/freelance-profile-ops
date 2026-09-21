/**
 * S06: RESPONSIVE PREVIEW MODULE — XLINHX JADE BOOK JOURNEY
 * "Màn hình đổi. Việc vẫn dễ."
 *
 * Tính năng tương tác & Motion cao cấp:
 * - Accordion chạm toggle 2 chiều trên bản mobile (Mở ra / Thu gọn mượt mà theo vật lý Apple)
 * - Tương tác con quay 3D chuột (Mouse Gyroscope Tilt) có phản quang specular sheen
 * - Dải hạt sóng ngọc bích di chuyển liên tục dọc đường nối SVG giữa 2 nút CTA
 * - Kích hoạt hoạt cảnh xuất hiện tầng bậc (Staggered Entrance) khi cuộn tới mục
 * - Cuộn mượt mà (Smooth Scroll) chính xác vị trí và hiệu ứng ánh sáng chào đón (Arrival Spotlight)
 */
(function() {
  'use strict';

  function initResponsivePreview() {
    const qualitySection = document.getElementById('quality');
    const stage = document.getElementById('s06-devices-stage');
    if (!stage || !qualitySection) return;

    const accordionItems = document.querySelectorAll('.s06-accordion-item');
    const hintBtn = document.getElementById('s06-hint-btn');
    const connectorSvg = document.getElementById('s06-connector-svg');
    const connectorPath = document.getElementById('s06-connector-path');
    const connectorPulse = document.getElementById('s06-connector-pulse');
    const dotStart = document.getElementById('s06-connector-dot-start');
    const dotStartRing = document.getElementById('s06-connector-dot-start-ring');
    const dotEnd = document.getElementById('s06-connector-dot-end');
    const dotEndRing = document.getElementById('s06-connector-dot-end-ring');
    const tabletCta = document.getElementById('s06-cta-tablet');
    const mobileCta = document.getElementById('s06-cta-mobile');
    const tabletFrame = document.getElementById('s06-tablet-frame');
    const phoneFrame = document.getElementById('s06-phone-frame');

    // =========================================================================
    // 1. ACCORDION 2 CHIỀU (EXPAND / COLLAPSE) TRÊN BẢN MOBILE
    // =========================================================================
    function toggleAccordionItem(targetItem) {
      const isCurrentlyOpen = targetItem.classList.contains('is-open');

      accordionItems.forEach(item => {
        const trigger = item.querySelector('.s06-accordion-trigger');
        const panel = item.querySelector('.s06-accordion-panel');

        if (item === targetItem) {
          if (isCurrentlyOpen) {
            // Đang mở -> Thu gọn lại
            item.classList.remove('is-open');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
            if (panel) {
              setTimeout(() => {
                if (!item.classList.contains('is-open')) panel.setAttribute('hidden', '');
              }, 320);
            }
          } else {
            // Đang đóng -> Mở ra
            item.classList.add('is-open');
            if (trigger) trigger.setAttribute('aria-expanded', 'true');
            if (panel) panel.removeAttribute('hidden');
          }
        } else {
          // Đóng các mục khác để giữ bố cục gọn gàng
          item.classList.remove('is-open');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
          if (panel) {
            setTimeout(() => {
              if (!item.classList.contains('is-open')) panel.setAttribute('hidden', '');
            }, 320);
          }
        }
      });

      // Cập nhật lại đường cong nối SVG sau khi chiều cao thay đổi
      setTimeout(updateConnectorLine, 320);
    }

    accordionItems.forEach(item => {
      const trigger = item.querySelector('.s06-accordion-trigger');
      if (trigger) {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          toggleAccordionItem(item);
        });
      }
    });

    // Nút gợi ý dưới đáy "Thử mở một mục trên bản mobile"
    if (hintBtn) {
      hintBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const itemsArr = Array.from(accordionItems);
        const openIdx = itemsArr.findIndex(it => it.classList.contains('is-open'));

        hintBtn.classList.add('is-pressed');
        setTimeout(() => hintBtn.classList.remove('is-pressed'), 200);

        if (openIdx === -1) {
          // Chưa có mục nào mở -> mở mục đầu tiên (Website)
          toggleAccordionItem(itemsArr[0]);
        } else {
          // Đang có mục mở -> chuyển sang mục tiếp theo
          const nextIdx = (openIdx + 1) % itemsArr.length;
          toggleAccordionItem(itemsArr[nextIdx]);
        }
      });
    }

    // =========================================================================
    // 2. TƯƠNG TÁC 3D MOUSE GYROSCOPE TILT & SPECULAR SHEEN GLARE
    // =========================================================================
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    function setup3DTilt(element, maxAngleX, maxAngleY, maxZ) {
      if (!element || !supportsHover) return;

      let currentRx = 0, currentRy = 0, currentZ = 0;
      let targetRx = 0, targetRy = 0, targetZ = 0;
      let isHovering = false;
      let rafId = null;

      function updateSpring() {
        // Damped spring interpolation (lerp ~ 0.12)
        currentRx += (targetRx - currentRx) * 0.12;
        currentRy += (targetRy - currentRy) * 0.12;
        currentZ += (targetZ - currentZ) * 0.12;

        element.style.transform = `perspective(1200px) rotateX(${currentRx.toFixed(2)}deg) rotateY(${currentRy.toFixed(2)}deg) translateZ(${currentZ.toFixed(1)}px)`;

        const isSettled = Math.abs(targetRx - currentRx) < 0.02 &&
                          Math.abs(targetRy - currentRy) < 0.02 &&
                          Math.abs(targetZ - currentZ) < 0.05;

        if (!isSettled || isHovering) {
          rafId = requestAnimationFrame(updateSpring);
        } else {
          element.style.transform = '';
          rafId = null;
        }
      }

      function startSpring() {
        if (!rafId) {
          rafId = requestAnimationFrame(updateSpring);
        }
      }

      element.addEventListener('pointerenter', () => {
        isHovering = true;
        element.style.setProperty('--glare-opacity', '0.32');
        startSpring();
      });

      element.addEventListener('pointermove', (e) => {
        const rect = element.getBoundingClientRect();
        const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
        const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1

        targetRx = -normY * maxAngleX;
        targetRy = normX * maxAngleY;
        targetZ = maxZ;

        // Tọa độ vệt sáng Specular Glare theo phần trăm
        const glareX = ((normX + 1) / 2) * 100;
        const glareY = ((normY + 1) / 2) * 100;
        element.style.setProperty('--glare-x', `${glareX.toFixed(1)}%`);
        element.style.setProperty('--glare-y', `${glareY.toFixed(1)}%`);

        startSpring();
      });

      element.addEventListener('pointerleave', () => {
        isHovering = false;
        targetRx = 0;
        targetRy = 0;
        targetZ = 0;
        element.style.setProperty('--glare-opacity', '0');
        startSpring();
      });
    }

    // Gán 3D Gyroscope Tilt cho Tablet (khung ngang, góc nhẹ đầm chắc) và Phone (khung dọc, góc phản hồi nhanh)
    setup3DTilt(tabletFrame, 4.2, 5.0, 10);
    setup3DTilt(phoneFrame, 5.5, 6.5, 14);

    // =========================================================================
    // 3. VẼ ĐƯỜNG CONG NỐI SVG & TIA NĂNG LƯỢNG NGỌC BÍCH DI CHUYỂN
    // =========================================================================
    function updateConnectorLine() {
      if (!connectorSvg || !connectorPath || !tabletCta || !mobileCta) return;
      if (window.innerWidth <= 1024) {
        connectorSvg.style.display = 'none';
        return;
      }

      connectorSvg.style.display = 'block';

      const stageRect = stage.getBoundingClientRect();
      const tabletRect = tabletCta.getBoundingClientRect();
      const mobileRect = mobileCta.getBoundingClientRect();

      // Điểm bắt đầu: mép phải nút CTA tablet
      const x1 = tabletRect.right - stageRect.left + 2;
      const y1 = tabletRect.top + tabletRect.height / 2 - stageRect.top;

      // Điểm kết thúc: mép trái nút CTA mobile
      const x2 = mobileRect.left - stageRect.left - 2;
      const y2 = mobileRect.top + mobileRect.height / 2 - stageRect.top;

      // Độ võng Bezier mềm mại (dx * 0.55)
      const dx = Math.max(32, (x2 - x1) * 0.55);
      const d = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;

      connectorPath.setAttribute('d', d);
      if (connectorPulse) {
        connectorPulse.setAttribute('d', d);
        // Thiết lập chiều dài nét cho hiệu ứng di chuyển tia sáng
        const totalLen = Math.ceil(connectorPath.getTotalLength ? connectorPath.getTotalLength() : 200);
        connectorPulse.style.setProperty('--path-length', `${totalLen}px`);
      }

      if (dotStart) {
        dotStart.setAttribute('cx', x1);
        dotStart.setAttribute('cy', y1);
      }
      if (dotStartRing) {
        dotStartRing.setAttribute('cx', x1);
        dotStartRing.setAttribute('cy', y1);
      }
      if (dotEnd) {
        dotEnd.setAttribute('cx', x2);
        dotEnd.setAttribute('cy', y2);
      }
      if (dotEndRing) {
        dotEndRing.setAttribute('cx', x2);
        dotEndRing.setAttribute('cy', y2);
      }
    }

    // Cập nhật khi resize hoặc đổi viewport
    window.addEventListener('resize', updateConnectorLine, { passive: true });
    window.addEventListener('load', updateConnectorLine);
    setTimeout(updateConnectorLine, 350);
    setTimeout(updateConnectorLine, 800);

    // =========================================================================
    // 4. HIỆU ỨNG XUẤT HIỆN TẦNG BẬC (ENTRANCE REVEAL VIA INTERSECTION OBSERVER)
    // =========================================================================
    function checkInitialVisibility() {
      const rect = qualitySection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        qualitySection.classList.add('is-in-view');
        updateConnectorLine();
      }
    }

    if ('IntersectionObserver' in window) {
      const entranceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            qualitySection.classList.add('is-in-view');
            updateConnectorLine();
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px'
      });

      entranceObserver.observe(qualitySection);
      // Kiểm tra ngay nếu người dùng đã tải trang trực tiếp tại #quality
      setTimeout(checkInitialVisibility, 100);
    } else {
      qualitySection.classList.add('is-in-view');
    }

    // =========================================================================
    // 5. CUỘN MƯỢT MÀ VÀO SECTION 6 TỪ CÁC SECTION KHÁC & ÁNH SÁNG CHÀO ĐÓN
    // =========================================================================
    const qualityLinks = document.querySelectorAll('a[href="#quality"]');

    function scrollToQuality(e) {
      e.preventDefault();
      const headerOffset = 76; // Bù trừ chiều cao thanh dock kính cố định
      const sectionTop = qualitySection.getBoundingClientRect().top + window.scrollY;
      const targetScroll = Math.max(0, sectionTop - headerOffset);

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });

      // Kích hoạt hiệu ứng vầng sáng chào đón (Arrival Feedback Glow)
      setTimeout(() => {
        qualitySection.classList.add('is-focused-arrival');
        setTimeout(() => {
          qualitySection.classList.remove('is-focused-arrival');
        }, 1500);
      }, 450);

      // Cập nhật URL sạch sẽ
      if (history.pushState) {
        history.pushState(null, '', '#quality');
      }
    }

    qualityLinks.forEach(link => {
      link.addEventListener('click', scrollToQuality);
    });

    // =========================================================================
    // 6. NATIVE MOBILE ARTISTIC DECK (ACCORDION GỐM SỨ 2 CHIỀU <= 768PX)
    // Tái hiện 1:1 theo bản thiết kế tham chiếu (Ground Truth)
    // =========================================================================
    const artDeck = document.getElementById('s06-mobile-art-deck');
    if (artDeck) {
      const artCards = artDeck.querySelectorAll('.s06-art-card');

      function toggleArtCard(targetCard) {
        const isCurrentlyOpen = targetCard.classList.contains('is-open');

        artCards.forEach(card => {
          const trigger = card.querySelector('.s06-art-card-trigger');
          if (card === targetCard) {
            if (isCurrentlyOpen) {
              // Bấm vào thẻ đang mở -> Thu gọn lại mượt mà
              card.classList.remove('is-open');
              if (trigger) trigger.setAttribute('aria-expanded', 'false');
            } else {
              // Bấm vào thẻ đang đóng -> Mở bung thẻ này
              card.classList.add('is-open');
              if (trigger) trigger.setAttribute('aria-expanded', 'true');
            }
          } else {
            // Tự động thu gọn các thẻ khác để giữ tỷ lệ màn hình điện thoại thanh thoát
            card.classList.remove('is-open');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
          }
        });
      }

      artCards.forEach(card => {
        const trigger = card.querySelector('.s06-art-card-trigger');
        if (trigger) {
          trigger.addEventListener('click', (e) => {
            e.preventDefault();
            toggleArtCard(card);
          });
        }
      });

      // Xử lý nút liên kết dưới đáy "Xem bố cục rộng →"
      const wideLink = document.getElementById('s06-art-wide-link');
      if (wideLink) {
        wideLink.addEventListener('click', (e) => {
          const targetSection = document.getElementById('projects');
          if (targetSection) {
            e.preventDefault();
            const headerOffset = 76;
            const targetScroll = Math.max(0, targetSection.getBoundingClientRect().top + window.scrollY - headerOffset);
            window.scrollTo({
              top: targetScroll,
              behavior: 'smooth'
            });
            if (history.pushState) {
              history.pushState(null, '', '#projects');
            }
          }
        });
      }
    }
  }

  window.initResponsivePreview = initResponsivePreview;
})();
