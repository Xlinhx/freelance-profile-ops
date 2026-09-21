/**
 * XLINHX PORTFOLIO — PROJECT SHOWCASE & DETAIL MODAL
 * Tái cấu trúc chuẩn 1:1 theo bản thiết kế Image 4 (popup-du-an.png)
 * Bao gồm: dải ruy băng xén xéo lá cây, watermark cành cây, layout 2 cột,
 * subgrid Bài toán / Cách giải quyết, lưới thẻ Tech Stack, và footer sóng ngọc bích.
 */

(function() {
  'use strict';

  var Catalog = (typeof window !== 'undefined' && window.ProjectsCatalog) ? window.ProjectsCatalog : {};
  var ICONS = Catalog.ICONS || {};
  var PROJECT_CASES = Catalog.PROJECT_CASES || [];
  var getProject = Catalog.getProject || function(id) {
    if (!PROJECT_CASES || !PROJECT_CASES.length) return null;
    for (var i = 0; i < PROJECT_CASES.length; i++) {
      if (PROJECT_CASES[i].id === id) return PROJECT_CASES[i];
    }
    return PROJECT_CASES[0];
  };

  var lastFocusedElement = null;
  var lockedScrollY = 0;
  var lockedBodyPadding = '';

  function lockPageScroll() {
    lockedScrollY = window.scrollY || window.pageYOffset || 0;
    lockedBodyPadding = document.body.style.paddingRight;
    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = scrollbarWidth > 0 ? scrollbarWidth + 'px' : '';
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + lockedScrollY + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }

  function unlockPageScroll() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.style.paddingRight = lockedBodyPadding;
    window.scrollTo({ top: lockedScrollY, behavior: 'instant' });
  }

  function getProblemStatement(project) {
    var problemMap = {
      fabsolution: 'Dữ liệu rải rác trong hội thoại, dễ sót việc.',
      dealer: 'Bán sỉ và nhập hàng rời rạc, khó kiểm soát đơn và tồn kho.',
      engpath: 'Thiếu môi trường luyện tập liên tục và phản hồi tiến độ.',
      conhon: 'Đặc sản Cù Lao khó tiếp cận rộng rãi qua kênh số.',
      vanhien: 'Tài liệu di sản rời rạc, khó tra cứu một cách trực quan.',
      suky: 'Dữ liệu lịch sử phong phú nhưng thiếu phân tầng thời gian.'
    };
    if (problemMap[project.id]) return problemMap[project.id];
    if (project.solves) {
      var firstSentence = project.solves.split('.')[0];
      return firstSentence ? firstSentence + '.' : project.solves;
    }
    return 'Quy trình thủ công tốn thời gian và dễ phát sinh sai sót.';
  }

  function getSolutionItems(project) {
    var solutionMap = {
      fabsolution: [
        'Hộp tin hợp nhất – gom tất cả hội thoại về một nơi.',
        'Đồng bộ Zalo – cập nhật trạng thái, đơn hàng theo thời gian thực.',
        'AI hỗ trợ xử lý – đọc, phân loại, gợi ý và nhắc việc.'
      ],
      dealer: [
        'Cửa hàng B2B – phân luồng sản phẩm và giá sỉ cho đại lý.',
        'Quản trị đơn tập trung – đồng bộ trạng thái đơn và kho hàng.',
        'Hạ tầng VPS ổn định – vận hành bền bỉ trên Docker và Nginx.'
      ],
      engpath: [
        'Lộ trình cá nhân hóa – phân theo trình độ và mục tiêu học.',
        'Tương tác trực quan – bài tập ngữ cảnh và flashcard ghi nhớ.',
        'Theo dõi tiến độ – báo cáo chi tiết thời gian và kết quả đạt được.'
      ]
    };
    if (solutionMap[project.id]) return solutionMap[project.id];
    if (project.architecture && project.architecture.length > 0) {
      return project.architecture.slice(0, 3);
    }
    return [
      'Giao diện tối ưu – đơn giản, nhanh và dễ sử dụng.',
      'Kiến trúc module – mở rộng linh hoạt theo quy mô.',
      'Tự động hóa luồng việc – giảm thiểu thao tác nhập tay.'
    ];
  }

  function formatSolutionText(text) {
    if (text.indexOf('–') !== -1) {
      var parts = text.split('–');
      return '<strong>' + parts[0].trim() + '</strong> – ' + parts.slice(1).join('–').trim();
    }
    if (text.indexOf(':') !== -1) {
      var p = text.split(':');
      return '<strong>' + p[0].trim() + '</strong>: ' + p.slice(1).join(':').trim();
    }
    return text;
  }

  function getTechIcon(name) {
    if (ICONS[name]) return ICONS[name];
    var map = {
      'Next.js': '/shared/icons/nextjs.svg',
      Next: '/shared/icons/nextjs.svg',
      Vite: '/shared/icons/vite.svg',
      'Zalo OA': '/shared/icons/zalo.svg',
      AI: '/shared/icons/ai.svg',
      Realtime: '/shared/icons/realtime.svg',
      'Restaurant Ops': '/shared/icons/restaurant.svg',
      Dashboard: '/shared/icons/dashboard.svg',
      VPS: '/shared/icons/vps.svg',
      'Cloudflare Pages': '/shared/icons/cloudflare.svg',
      Cloudflare: '/shared/icons/cloudflare.svg',
      Docker: '/shared/icons/docker.svg',
      PostgreSQL: '/shared/icons/postgresql.svg',
      NestJS: '/shared/icons/nodejs.svg',
      Prisma: '/shared/icons/postgresql.svg',
      Nginx: '/shared/icons/vps.svg'
    };
    return map[name] || '/shared/icons/react.svg';
  }

  function detailMarkup(project) {
    var screen = (project.screens && project.screens.length > 0) ? project.screens[0] : {
      title: project.title,
      caption: project.summary,
      desktop: project.cover || ''
    };

    var problemText = getProblemStatement(project);
    var solutions = getSolutionItems(project);

    var solutionsHtml = solutions.map(function(item) {
      return '<li class="solution-check-item">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#009975"/><path d="m8 12 3 3 5-5" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '<span>' + formatSolutionText(item) + '</span>' +
      '</li>';
    }).join('');

    var techRowsHtml = (project.tech || []).map(function(row) {
      var cat = row[0];
      var items = row[1] || [];
      var cardsHtml = items.map(function(name) {
        var iconSrc = getTechIcon(name);
        return '<div class="tech-app-card">' +
          '<div class="tech-app-card-icon"><img src="' + iconSrc + '" alt="' + name + '" loading="lazy"></div>' +
          '<span class="tech-app-card-name" title="' + name + '">' + name + '</span>' +
        '</div>';
      }).join('');

      return '<div class="tech-category-row">' +
        '<span class="tech-cat-label">' + cat + '</span>' +
        '<div class="tech-cards-wrap">' + cardsHtml + '</div>' +
      '</div>';
    }).join('');

    return '<!-- 1. Dải ruy băng ngọc bích xén xéo lá cây ở góc trên-trái -->' +
      '<div class="modal-ribbon-bookmark" aria-hidden="true">' +
        '<img src="assets/decor/modal-ribbon-leaf.png" alt="">' +
      '</div>' +

      '<!-- 2. Watermark cành cây phác thảo ở góc trên-phải -->' +
      '<div class="modal-watermark-tr" aria-hidden="true">' +
        '<img src="assets/decor/modal-watermark-tree.png" alt="">' +
      '</div>' +

      '<!-- 3. Nút đóng góc trên-phải (✕ Đóng (ESC)) -->' +
      '<button class="modal-close-pill" data-close-modal type="button" aria-label="Đóng hộp thoại">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
        '<span>Đóng (ESC)</span>' +
      '</button>' +

      '<!-- 4. Thanh tiêu đề modal -->' +
      '<div class="modal-top-header">' +
        '<div class="modal-title-row">' +
          '<h3 class="modal-title-text">' + project.title + '</h3>' +
          '<span class="modal-live-badge"><span class="badge-dot"></span>' + (project.time || 'Live product') + '</span>' +
        '</div>' +
        '<p class="modal-subtitle-text">' + project.summary + '</p>' +
      '</div>' +

      '<!-- 5. Thân modal 2 cột -->' +
      '<div class="modal-scroll-body">' +
        '<div class="modal-two-col-grid">' +
          '<!-- CỘT TRÁI: Screenshot & Bài toán/Cách giải quyết -->' +
          '<div class="modal-left-col">' +
            '<div class="modal-screenshot-frame">' +
              '<img src="' + screen.desktop + '" alt="' + screen.title + '" loading="eager">' +
            '</div>' +
            '<div class="modal-screenshot-caption-bar">' +
              '<div class="caption-info-group">' +
                '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' +
                '<div class="caption-text-block">' +
                  '<span class="caption-title">' + screen.title + '</span>' +
                  '<p class="caption-desc">' + screen.caption + '</p>' +
                '</div>' +
              '</div>' +
              '<button class="btn-expand-preview" data-full-img="' + screen.desktop + '" type="button">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>' +
                '<span>Xem ảnh lớn</span>' +
              '</button>' +
            '</div>' +
            '<hr class="modal-divider-rule">' +
            '<div class="modal-subgrid-problem-solution">' +
              '<div class="problem-block">' +
                '<div class="section-heading-with-icon">' +
                  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>' +
                  '<h4>Bài toán</h4>' +
                '</div>' +
                '<p class="problem-text">' + problemText + '</p>' +
              '</div>' +
              '<div class="solution-block">' +
                '<div class="section-heading-with-icon">' +
                  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M15 2a6 6 0 0 0-6 6c0 2 1 3.5 2 5h2c1-1.5 2-3 2-5a6 6 0 0 0-6-6z"/></svg>' +
                  '<h4>Cách giải quyết</h4>' +
                '</div>' +
                '<ul class="solution-checklist">' + solutionsHtml + '</ul>' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<!-- CỘT PHẢI: Vai trò, Tech Stack & Trích dẫn -->' +
          '<div class="modal-right-col">' +
            '<div class="role-block">' +
              '<div class="section-heading-with-icon">' +
                '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' +
                '<h4>Vai trò của tôi</h4>' +
              '</div>' +
              '<p class="role-value-text">' + project.role + '</p>' +
            '</div>' +
            '<hr class="modal-divider-rule">' +
            '<div class="tech-stack-block">' +
              '<div class="section-heading-with-icon">' +
                '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>' +
                '<h4>Tech Stack</h4>' +
              '</div>' +
              '<div class="tech-stack-container">' + techRowsHtml + '</div>' +
            '</div>' +
            '<hr class="modal-divider-rule">' +
            '<div class="modal-quote-section">' +
              '<svg class="quote-leaf-svg" width="24" height="28" viewBox="0 0 24 28" fill="none"><path d="M4 26C4 26 5 18 12 12M12 12C16 8 20 6 20 2C16 2 12 6 12 12ZM12 12C8 10 4 11 2 15C5 17 9 15 12 12ZM12 12C14 16 15 20 18 22C19 18 17 14 12 12Z" stroke="#009975" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
              '<div class="quote-content">' +
                '<p>“Những ý tưởng tốt luôn xứng đáng được lắng nghe.”</p>' +
                '<div class="quote-author-row"><span class="quote-author">Xlinhx</span></div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<!-- 6. Chân Popup: Nền sóng ngọc bích -->' +
      '<div class="modal-footer-bar">' +
        '<div class="modal-footer-brand">' +
          '<span class="brand-name">Xlinhx</span>' +
          '<span class="brand-pipe">|</span>' +
          '<span class="brand-slogan">Biến ý tưởng thành sản phẩm có giá trị thật.</span>' +
        '</div>' +
        '<div class="modal-footer-actions">' +
          (project.demo ? '<a class="btn-footer-live" href="' + project.demo + '" target="_blank" rel="noopener noreferrer"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg><span>Xem bản chạy</span></a>' : '') +
          '<button class="btn-footer-close" data-close-modal type="button"><span>Đóng</span></button>' +
        '</div>' +
      '</div>';
  }

  function openLightbox(imgSrc, title) {
    var existing = document.getElementById('image-lightbox-modal');
    if (existing) existing.remove();

    var lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox-modal open';
    lightbox.id = 'image-lightbox-modal';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.innerHTML = '<button class="lightbox-close-btn" type="button" aria-label="Đóng ảnh lớn">&times;</button>' +
      '<div class="image-lightbox-frame">' +
        '<img src="' + imgSrc + '" alt="' + (title || 'Ảnh lớn') + '">' +
      '</div>';

    document.body.appendChild(lightbox);

    function close() {
      lightbox.classList.remove('open');
      setTimeout(function() { lightbox.remove(); }, 250);
    }

    lightbox.querySelector('.lightbox-close-btn').addEventListener('click', close);
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) close();
    });
  }

  function bindModalEvents(project, modal) {
    // Close buttons
    modal.querySelectorAll('[data-close-modal]').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        closeProjectDetail();
      });
    });

    // Expand preview button
    modal.querySelectorAll('.btn-expand-preview').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var src = btn.dataset.fullImg;
        if (src) openLightbox(src, project.title);
      });
    });
  }

  function openProjectDetail(projectId) {
    var project = getProject(projectId);
    if (!project) return;

    closeAllProjectsModal();

    lastFocusedElement = document.activeElement;

    var modal = document.getElementById('project-detail-modal');
    if (!modal) return;

    var surface = modal.querySelector('.modal-surface');
    if (surface) {
      surface.innerHTML = detailMarkup(project);
    }

    bindModalEvents(project, modal);

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    lockPageScroll();

    var closeBtn = modal.querySelector('.modal-close-pill') || modal.querySelector('[data-close-modal]');
    if (closeBtn) closeBtn.focus();
  }

  function closeProjectDetail() {
    var modal = document.getElementById('project-detail-modal');
    if (!modal || !modal.classList.contains('open')) return;

    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    unlockPageScroll();

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      try {
        lastFocusedElement.focus({ preventScroll: true });
      } catch (err) {
        lastFocusedElement.focus();
      }
    }
  }

  function openAllProjectsModal() {
    var modal = document.getElementById('all-projects-modal');
    if (!modal) return;

    var body = document.getElementById('all-projects-content');
    if (body) {
      var validIds = ['dealer', 'conhon', 'engpath', 'fabsolution', 'vanhien', 'suky'];
      var activeProjects = PROJECT_CASES.filter(function(p) {
        return validIds.indexOf(p.id) !== -1;
      });
      var html = '<div class="all-projects-grid">';
      activeProjects.forEach(function(p, i) {
        var num = (i + 1) < 10 ? '0' + (i + 1) : '' + (i + 1);
        html += '<div class="directory-card" data-project="' + p.id + '">' +
          '<div class="directory-thumb"><img src="' + p.cover + '" alt="' + p.title + '" loading="eager"></div>' +
          '<div class="directory-info">' +
            '<div class="card-num-type">Dự án ' + num + ' · ' + p.time + '</div>' +
            '<h4 class="directory-title">' + p.title + '</h4>' +
            '<div class="directory-tag">' + p.tag + '</div>' +
          '</div>' +
        '</div>';
      });
      html += '</div>';
      body.innerHTML = html;

      body.querySelectorAll('.directory-card[data-project]').forEach(function(card) {
        card.addEventListener('click', function() {
          openProjectDetail(card.dataset.project);
        });
      });
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    lockPageScroll();

    var closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeAllProjectsModal() {
    var modal = document.getElementById('all-projects-modal');
    if (!modal || !modal.classList.contains('open')) return;

    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    unlockPageScroll();

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      try {
        lastFocusedElement.focus({ preventScroll: true });
      } catch (err) {
        lastFocusedElement.focus();
      }
    }
  }

  // Keyboard navigation & global listeners
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      var lightbox = document.getElementById('image-lightbox-modal');
      if (lightbox && lightbox.classList.contains('open')) {
        lightbox.classList.remove('open');
        setTimeout(function() { lightbox.remove(); }, 250);
        return;
      }
      var detailModal = document.getElementById('project-detail-modal');
      if (detailModal && detailModal.classList.contains('open')) {
        closeProjectDetail();
        return;
      }
      var allModal = document.getElementById('all-projects-modal');
      if (allModal && allModal.classList.contains('open')) {
        closeAllProjectsModal();
        return;
      }
    }
  });

  // Attach backdrop handlers
  document.addEventListener('DOMContentLoaded', function() {
    var detailModal = document.getElementById('project-detail-modal');
    if (detailModal) {
      detailModal.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-backdrop')) {
          closeProjectDetail();
        }
      });
    }

    var allModal = document.getElementById('all-projects-modal');
    if (allModal) {
      allModal.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-backdrop') || e.target.closest('[data-close-all-modal]')) {
          closeAllProjectsModal();
        }
      });
    }

    // Attach card click handlers in section 2
    document.querySelectorAll('.project-card[data-project]').forEach(function(card) {
      card.addEventListener('click', function() {
        openProjectDetail(card.dataset.project);
      });
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectDetail(card.dataset.project);
        }
      });
    });

    // Attach "Tất cả dự án" button
    var allBtn = document.getElementById('open-all-projects-btn');
    if (allBtn) {
      allBtn.addEventListener('click', function() {
        openAllProjectsModal();
      });
    }
  });

  // Export functions to window
  window.openProjectDetail = openProjectDetail;
  window.closeProjectDetail = closeProjectDetail;
  window.openAllProjectsModal = openAllProjectsModal;
  window.closeAllProjectsModal = closeAllProjectsModal;

})();
