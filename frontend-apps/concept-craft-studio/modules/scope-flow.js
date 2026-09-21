/**
 * S04: SCOPE FLOW MODULE — CONCEPT CRAFT STUDIO
 * "Bắt đầu từ điều cần nhất. Chọn ưu tiên. Cùng chốt phần nên làm trước."
 *
 * Tính năng chính:
 * 1. Scroll-triggered 3D Page Turn Animation:
 *    - Ban đầu sách trống không
 *    - Các trang giấy lật mở 3D chân thực
 *    - Chữ và thẻ tính năng xuất hiện so le (staggered ink reveal)
 *    - Hiệu ứng nhiễu hạt giấy (paper/film grain)
 * 2. Wind & Snow Canvas Effect:
 *    - Gió thổi qua khung cửa sổ nguyệt môn góc phải
 *    - Tinh thể tuyết nhỏ lăn/chao lượn bay vào phòng
 *    - Kéo dài trong vài giây rồi biến mất hoàn toàn
 *    - Tự động kích hoạt lại khi người dùng cuộn đến
 * 3. Tương tác 3 bài toán trọng tâm (Dịch vụ, Tự động hóa, Vận hành)
 * 4. Đồng bộ kịch bản với Contact Brief ở Section 10
 */

(function() {
  'use strict';

  const ICONS = {
    document: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    gallery: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
    send: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
    sync: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>`,
    board: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 3v18M15 3v18"/></svg>`,
    search: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    shield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  };

  const SCOPE_DATA = {
    services: {
      id: 'services',
      title: 'Giới thiệu dịch vụ',
      pill: 'Website',
      briefText: 'Mình muốn xây dựng trang giới thiệu dịch vụ và sản phẩm rõ ràng, chuyên nghiệp để khách hàng liên hệ ngay.',
      deliverables: [
        {
          icon: 'document',
          title: 'Thông tin dịch vụ',
          desc: 'Giới thiệu rõ bạn làm gì, giá trị mang lại.'
        },
        {
          icon: 'gallery',
          title: 'Sản phẩm đã làm',
          desc: 'Một số dự án tiêu biểu, dễ hình dung.'
        },
        {
          icon: 'send',
          title: 'Cách liên hệ',
          desc: 'Để khách hàng có thể trao đổi ngay.'
        }
      ],
      addonSubtitle: 'Đặt lịch • Thanh toán • Tích hợp',
      addonChips: [
        'Đặt lịch hẹn trực tuyến',
        'Thanh toán tự động PayOS',
        'Tích hợp CRM & Google Sheets'
      ]
    },
    automation: {
      id: 'automation',
      title: 'Bớt việc nhập lại',
      pill: 'Tự động hóa',
      briefText: 'Mình muốn tự động hóa khâu thu thập và xử lý thông tin để bớt việc nhập liệu lặp đi lặp lại.',
      deliverables: [
        {
          icon: 'document',
          title: 'Biểu mẫu thu thập một chạm',
          desc: 'Nhận thông tin chuẩn xác từ khách hàng hoặc nội bộ.'
        },
        {
          icon: 'sync',
          title: 'Đồng bộ dữ liệu tự động',
          desc: 'Chuyển tiếp dữ liệu về Sheets, Notion hoặc cơ sở dữ liệu.'
        },
        {
          icon: 'send',
          title: 'Thông báo tức thì',
          desc: 'Gửi tin nhắn Telegram hoặc Email ngay khi phát sinh tác vụ.'
        }
      ],
      addonSubtitle: 'Phê duyệt • Báo cáo • Phân quyền',
      addonChips: [
        'Quy trình duyệt nhiều cấp',
        'Xuất báo cáo PDF / Excel tự động',
        'Phân quyền tài khoản nhân viên'
      ]
    },
    operations: {
      id: 'operations',
      title: 'Theo dõi công việc',
      pill: 'Công cụ nội bộ',
      briefText: 'Mình muốn xây dựng bảng theo dõi tiến độ công việc và quản lý trạng thái gọn gàng, dễ dùng.',
      deliverables: [
        {
          icon: 'board',
          title: 'Bảng quản lý trạng thái',
          desc: 'Xem nhanh tình trạng đơn, tiến độ từng công đoạn.'
        },
        {
          icon: 'search',
          title: 'Bộ lọc & tìm kiếm thông minh',
          desc: 'Tra cứu đơn hàng, mã khách hàng chỉ trong vài giây.'
        },
        {
          icon: 'shield',
          title: 'Nhật ký hoạt động rõ ràng',
          desc: 'Ghi nhận ai đã làm gì, lúc nào, tránh thất thoát thông tin.'
        }
      ],
      addonSubtitle: 'Biểu đồ • Cảnh báo • Nhật ký',
      addonChips: [
        'Biểu đồ thống kê tuần / tháng',
        'Cảnh báo đơn trễ hạn tự động',
        'Sao lưu lịch sử vận hành'
      ]
    }
  };

  /**
   * Snow & Wind Particle System for the Window
   */
  class WindowSnowEffect {
    constructor(canvas, stage) {
      this.canvas = canvas;
      this.stage = stage;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.wisps = [];
      this.animId = null;
      this.startTime = 0;
      this.duration = 3800; // ms total effect duration (~3.8s)
      this.spawningDuration = 2400; // ms to keep generating new flakes
      this.running = false;

      this.resize = this.resize.bind(this);
      this.render = this.render.bind(this);
      window.addEventListener('resize', this.resize);
      this.resize();
    }

    resize() {
      if (!this.stage || !this.canvas) return;
      const rect = this.stage.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.width = rect.width;
      this.height = rect.height;
      this.canvas.width = Math.round(this.width * dpr);
      this.canvas.height = Math.round(this.height * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    start() {
      if (this.running) return;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      this.resize();
      this.running = true;
      this.startTime = performance.now();
      this.particles = [];
      this.wisps = [];

      // Create initial wind wisps (gentle air currents from window into room)
      for (let i = 0; i < 4; i++) {
        this.wisps.push({
          progress: -(i * 0.22), // staggered start
          speed: 0.007 + Math.random() * 0.004,
          startY: this.height * (0.16 + Math.random() * 0.25),
          midYOffset: (Math.random() - 0.5) * 50,
          endYOffset: 70 + Math.random() * 80,
          length: 110 + Math.random() * 130,
          opacity: 0.2 + Math.random() * 0.25,
          width: 1 + Math.random() * 1.4
        });
      }

      this.loop();
    }

    stop() {
      this.running = false;
      if (this.animId) {
        cancelAnimationFrame(this.animId);
        this.animId = null;
      }
      if (this.ctx) {
        this.ctx.clearRect(0, 0, this.width, this.height);
      }
    }

    spawnParticle() {
      // Circular moon-gate window aperture coordinates:
      // Center roughly x: 86.5%, y: 26.5%
      const winCenterX = this.width * 0.865;
      const winCenterY = this.height * 0.265;
      const spreadX = this.width * 0.08;
      const spreadY = this.height * 0.12;

      const angle = Math.random() * Math.PI * 2;
      const dist = Math.sqrt(Math.random());
      const x = winCenterX + Math.cos(angle) * spreadX * dist;
      const y = winCenterY + Math.sin(angle) * spreadY * dist;

      // Speed: wind blowing leftwards into the room across desk/book
      const vx = -(1.8 + Math.random() * 2.4);
      const vy = 0.5 + Math.random() * 1.2;
      const size = 0.9 + Math.random() * 1.8;
      const maxAlpha = 0.45 + Math.random() * 0.5;
      const life = 1800 + Math.random() * 1200; // life in ms
      const tumbleSpeed = 0.04 + Math.random() * 0.06;
      const wobbleSpeed = 0.03 + Math.random() * 0.04;
      const wobbleAmp = 0.6 + Math.random() * 1.0;

      this.particles.push({
        x,
        y,
        vx,
        vy,
        size,
        alpha: 0,
        maxAlpha,
        age: 0,
        life,
        tumbleAngle: Math.random() * Math.PI,
        tumbleSpeed,
        wobbleAngle: Math.random() * Math.PI * 2,
        wobbleSpeed,
        wobbleAmp,
        blur: size > 2 ? 1 : 0
      });
    }

    loop() {
      if (!this.running) return;
      this.render();
      this.animId = requestAnimationFrame(this.loop.bind(this));
    }

    render() {
      if (!this.running) return;
      this.ctx.clearRect(0, 0, this.width, this.height);

      // Continuously spawn new flakes to maintain a gentle continuous snowfall
      if (this.particles.length < 34 && Math.random() < 0.65) {
        this.spawnParticle();
        if (Math.random() < 0.3) {
          this.spawnParticle();
        }
      }

      // Draw continuous subtle wind wisps
      this.ctx.save();
      this.wisps.forEach(w => {
        w.progress += w.speed;
        if (w.progress > 1) {
          w.progress = 0;
          w.startY = this.height * (0.16 + Math.random() * 0.25);
        }
        if (w.progress > 0 && w.progress < 1) {
          const startX = this.width * (0.92 - w.progress * 0.45);
          const startY = w.startY + w.progress * w.endYOffset;
          const endX = startX - w.length * (1 - w.progress * 0.3);
          const endY = startY + w.midYOffset;

          const grad = this.ctx.createLinearGradient(startX, startY, endX, endY);
          const a = w.opacity * Math.sin(w.progress * Math.PI);
          grad.addColorStop(0, `rgba(255, 255, 255, 0)`);
          grad.addColorStop(0.3, `rgba(255, 255, 255, ${a * 0.7})`);
          grad.addColorStop(0.7, `rgba(240, 250, 245, ${a * 0.4})`);
          grad.addColorStop(1, `rgba(255, 255, 255, 0)`);

          this.ctx.beginPath();
          this.ctx.moveTo(startX, startY);
          this.ctx.quadraticCurveTo(
            (startX + endX) / 2 + 25,
            startY + w.midYOffset * 0.8,
            endX,
            endY
          );
          this.ctx.strokeStyle = grad;
          this.ctx.lineWidth = w.width;
          this.ctx.stroke();
        }
      });
      this.ctx.restore();

      // Update & render snowflakes
      const dt = 16.6; // approx 60fps frame delta
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.age += dt;

        if (p.age >= p.life) {
          this.particles.splice(i, 1);
          continue;
        }

        // Smooth fade-in then fade-out
        const progress = p.age / p.life;
        if (progress < 0.2) {
          p.alpha = (progress / 0.2) * p.maxAlpha;
        } else if (progress > 0.65) {
          p.alpha = (1 - (progress - 0.65) / 0.35) * p.maxAlpha;
        } else {
          p.alpha = p.maxAlpha;
        }

        // Confine particles strictly to the circular moon window zone (x >= 84%)
        if (p.x < this.width * 0.84) {
          this.particles.splice(i, 1);
          continue;
        }

        // Physics: wind deceleration and soft gravity
        p.vx *= 0.996;
        p.vy += 0.007;

        p.wobbleAngle += p.wobbleSpeed;
        p.tumbleAngle += p.tumbleSpeed;

        p.x += p.vx + Math.sin(p.wobbleAngle) * p.wobbleAmp;
        p.y += p.vy;

        // Render tumbling snowflake
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.wobbleAngle * 0.5);
        this.ctx.scale(1, Math.max(0.2, Math.abs(Math.cos(p.tumbleAngle))));

        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;

        if (p.blur) {
          this.ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
          this.ctx.shadowBlur = 3;
        }

        this.ctx.fill();
        this.ctx.restore();
      }
    }
  }

  /**
   * Main Scope Flow Controller
   */
  function initScopeFlow() {
    const scopeSection = document.getElementById('scope');
    if (!scopeSection || scopeSection.dataset.s04Init === 'true') return;
    scopeSection.dataset.s04Init = 'true';

    const stage = scopeSection.querySelector('.s04-panoramic-stage');
    const snowCanvas = document.getElementById('s04-snow-canvas');
    const optionCards = scopeSection.querySelectorAll('.s04-option-card[data-scope]');
    const deliverablesList = document.getElementById('s04-deliverables-list');
    const addonSummary = document.getElementById('s04-addon-summary');
    const addonChips = document.getElementById('s04-addon-chips');
    const addonToggle = document.getElementById('s04-addon-toggle');
    const addonContent = document.getElementById('s04-addon-content');
    const stageCtaBtn = document.getElementById('s04-stage-cta-btn');
    const openInquiryBtn = document.getElementById('s04-open-inquiry-btn');

    let currentScope = 'services';
    let snowEffect = null;
    if (snowCanvas && stage) {
      snowEffect = new WindowSnowEffect(snowCanvas, stage);
    }

    // Mathematical 1:1 Pixel Lock between Background Image & Book Spread
    const bookSpread = document.getElementById('s04-book-spread');

    function syncBookSpreadLayout() {
      if (!stage || !bookSpread) return;
      if (window.innerWidth <= 900) {
        bookSpread.style.position = '';
        bookSpread.style.left = '';
        bookSpread.style.top = '';
        bookSpread.style.width = '';
        bookSpread.style.height = '';
        return;
      }

      const W = stage.clientWidth;
      const H = stage.clientHeight;
      if (!W || !H) return;

      const AR = 1376 / 768;
      const stageAR = W / H;

      let imgW, imgH, imgLeft, imgTop;
      if (stageAR >= AR) {
        imgW = W;
        imgH = W / AR;
        imgLeft = 0;
        imgTop = (H - imgH) / 2;
      } else {
        imgH = H;
        imgW = H * AR;
        imgLeft = (W - imgW) / 2;
        imgTop = 0;
      }

      bookSpread.style.position = 'absolute';
      bookSpread.style.left = `${imgLeft}px`;
      bookSpread.style.top = `${imgTop}px`;
      bookSpread.style.width = `${imgW}px`;
      bookSpread.style.height = `${imgH}px`;

      const backdropImg = stage.querySelector('.s04-backdrop-img');
      if (backdropImg) {
        backdropImg.style.objectPosition = 'center center';
      }
    }

    syncBookSpreadLayout();
    window.addEventListener('resize', syncBookSpreadLayout);
    if (window.ResizeObserver) {
      new ResizeObserver(syncBookSpreadLayout).observe(stage);
    }

    // Observer to manage continuous snow effect while Section 4 is in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
          if (snowEffect) {
            snowEffect.start();
          }
        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.05) {
          if (snowEffect) {
            snowEffect.stop();
          }
        }
      });
    }, {
      threshold: [0, 0.15, 0.5]
    });

    observer.observe(scopeSection);

    // Dynamic right page update
    function renderRightPage(data) {
      if (!deliverablesList) return;

      deliverablesList.classList.add('is-updating');

      setTimeout(() => {
        // Render Deliverables
        let html = '';
        data.deliverables.forEach(item => {
          const iconSvg = ICONS[item.icon] || ICONS.document;
          html += `
            <div class="s04-deliverable-item">
              <div class="s04-deliverable-icon-box" aria-hidden="true">
                ${iconSvg}
              </div>
              <div class="s04-deliverable-info">
                <h4 class="s04-deliverable-title">${item.title}</h4>
                <p class="s04-deliverable-desc">${item.desc}</p>
              </div>
            </div>
          `;
        });
        deliverablesList.innerHTML = html;

        // Render Addon subtitle
        if (addonSummary) {
          addonSummary.textContent = data.addonSubtitle;
        }

        // Render Addon chips
        if (addonChips) {
          let chipsHtml = '';
          data.addonChips.forEach(chip => {
            chipsHtml += `<span class="s04-addon-chip">${chip}</span>`;
          });
          addonChips.innerHTML = chipsHtml;
        }

        deliverablesList.classList.remove('is-updating');
      }, 120);
    }

    function setScope(scopeKey) {
      if (!SCOPE_DATA[scopeKey]) return;
      currentScope = scopeKey;
      const data = SCOPE_DATA[scopeKey];

      // Update Radio Cards State
      optionCards.forEach(card => {
        const isActive = card.getAttribute('data-scope') === scopeKey;
        card.classList.toggle('is-active', isActive);
        card.setAttribute('aria-checked', isActive ? 'true' : 'false');
      });

      // Update Right Page Content
      renderRightPage(data);
    }

    // Attach click events on Left Radio Cards
    optionCards.forEach(card => {
      card.addEventListener('click', () => {
        const key = card.getAttribute('data-scope');
        if (key && key !== currentScope) {
          setScope(key);
        }
      });

      // Keyboard navigation (Enter / Space)
      card.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          const key = card.getAttribute('data-scope');
          if (key && key !== currentScope) {
            setScope(key);
          }
        }
      });
    });

    // Accordion Toggle
    if (addonToggle && addonContent) {
      addonToggle.addEventListener('click', () => {
        const isExpanded = addonToggle.getAttribute('aria-expanded') === 'true';
        addonToggle.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
        addonContent.hidden = isExpanded;
      });
    }

    // Main CTA Button: Navigate to S10 with selected brief scenario
    if (stageCtaBtn) {
      stageCtaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const data = SCOPE_DATA[currentScope];
        if (data && typeof window.setContactBriefScenario === 'function') {
          window.setContactBriefScenario({
            pill: data.pill,
            suggestedText: data.briefText
          });
        }
        const contactSec = document.getElementById('contact');
        if (contactSec) {
          contactSec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Inquiry Link: Open discussion
    if (openInquiryBtn) {
      openInquiryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (typeof window.setContactBriefScenario === 'function') {
          window.setContactBriefScenario({
            pill: 'Website',
            suggestedText: 'Mình muốn trao đổi về bài toán thực tế và cách tiếp cận phù hợp cho giai đoạn đầu.'
          });
        }
        const contactSec = document.getElementById('contact');
        if (contactSec) {
          contactSec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Initial render of default scope data
    renderRightPage(SCOPE_DATA[currentScope]);

    // Expose trigger for manual testing if needed
    window.triggerScopeAnimation = function() {};
  }

  // Initialize when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScopeFlow);
  } else {
    initScopeFlow();
  }

  window.initScopeFlow = initScopeFlow;
})();
