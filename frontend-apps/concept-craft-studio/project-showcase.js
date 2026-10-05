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
      fabsolution: 'Khách đặt món và hỏi đơn rải rác trên Zalo OA; nhân viên kiểm tra thực đơn/tồn kho thủ công và dễ sót đơn vào giờ cao điểm.',
      dealer: 'Bán buôn qua tin nhắn/Excel dễ lệch tồn kho, khó kiểm soát công nợ đại lý và khách sỉ không chủ động xem được giá theo phân cấp.',
      nostime: 'Thị trường đồng hồ xa xỉ đòi hỏi mỗi sản phẩm là một cá thể độc bản có kiểm định nghiêm ngặt; việc quản lý qua bảng tính dễ sai lệch tình trạng kho và giảm uy tín thương hiệu.',
      conhon: 'Lễ hội mùa vụ đón 300–500 người truy cập đồng thời; việc ghi tịch giấy và chuyển khoản thủ công dễ thất thoát, trùng lặp và quá tải.',
      engpath: 'Học sinh thiếu môi trường luyện Nói/Viết theo cấu trúc đề thi THPT; giáo viên mất nhiều giờ chấm bài tự luận và khó theo sát từng em.',
      suky: 'Tiết học Lịch sử dễ khô khan, giáo viên mất nhiều thời gian soạn câu hỏi và học sinh ngại làm các bài kiểm tra trắc nghiệm truyền thống.',
      vanhien: 'Học sinh khó cảm nhận chiều sâu tâm lý nhân vật qua câu chữ tĩnh; giáo viên thiếu công cụ tạo đề nghị luận xã hội kèm đáp án gợi ý.'
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
        'Hộp tin tập trung – Gom toàn bộ hội thoại từ Zalo OA vào một workspace điều phối thống nhất theo thời gian thực.',
        'AI trích xuất đơn & gợi ý trả lời – Tự động nhận diện món, số lượng, địa chỉ và soạn sẵn câu trả lời chuẩn theo menu.',
        'Tạo đơn tại chỗ – Chốt đơn, tính tiền và chuyển trạng thái chế biến trực tiếp ngay trong cửa sổ chat.'
      ],
      dealer: [
        'Cổng phân phối B2B – Phân quyền xem bảng giá sỉ theo cấp đại lý, cho phép đặt hàng số lượng lớn 24/7.',
        'Kiểm soát tồn kho tự động – Khóa tồn kho khả dụng tức thì khi có đơn, ngăn chặn tình trạng đặt vượt số lượng.',
        'Sổ nợ & Lịch sử thanh toán – Quản lý hạn mức công nợ, đối soát thanh toán và xuất file đơn hàng nhanh chóng.'
      ],
      nostime: [
        'Sổ cái đồng hồ độc bản – Định danh và theo dõi trạng thái từng chiếc đồng hồ từ nhập kho, kiểm định đến khi giao khách.',
        'Storefront chuẩn Boutique – Trải nghiệm duyệt sản phẩm sang trọng, tối ưu hình ảnh đa góc chụp và chi tiết thông số máy.',
        'Tra cứu đơn hàng minh bạch – Hệ thống tra cứu hành trình và chứng thư bảo hành trực tuyến cho người mua.'
      ],
      conhon: [
        'Xử lý đồng thời cao (CCU) – Dùng Row-level Locking trong PostgreSQL và Redis cache để chống bán vượt hạn mức tịch.',
        'Thanh toán QR PayOS – Tự động khớp giao dịch chuyển khoản ngân hàng và xác nhận đơn trong 1–2 giây.',
        'Truyền kết quả Realtime – Đồng bộ kết quả mở thưởng tức thì tới người chơi qua Server-Sent Events (SSE).'
      ],
      engpath: [
        'AI chấm bài & Sửa lỗi chi tiết – Phân tích lỗi ngữ pháp, từ vựng và gợi ý cải thiện câu theo barem chấm điểm chuẩn.',
        'Lộ trình bám sát SGK 10–12 – Phân chia bài học theo từng Unit với flashcard từ vựng, bài tập ngữ pháp và mini test.',
        'Bảng theo dõi tiến độ – Thống kê điểm số, thời gian học và vùng kỹ năng còn yếu để giáo viên can thiệp kịp thời.'
      ],
      suky: [
        'Vào lớp không cần tài khoản – Học sinh nhập mã PIN trên điện thoại là tham gia ngay vào phòng học trong vài giây.',
        'Workers AI sinh câu hỏi từ tài liệu – Tải file bài học (.docx) để AI tự động trích xuất và tạo câu hỏi phân hóa 4 mức độ.',
        '4 chế độ đấu tương tác – Tăng tốc, Thẩm phán, Câu hỏi chùm và Nhập vai lịch sử giúp giờ học sôi động và có dữ liệu đánh giá.'
      ],
      vanhien: [
        'Đối thoại nhân vật văn học – AI nhập vai các nhân vật tác phẩm kinh điển để học sinh trò chuyện và tìm hiểu bối cảnh.',
        'Sinh đề thi & Barem chuẩn – Hỗ trợ giáo viên xây dựng nhanh đề kiểm tra tự luận kèm tiêu chí chấm điểm chi tiết.',
        'Bản đồ tác phẩm tương tác – Trực quan hóa mối liên hệ giữa các tác giả, trào lưu tư tưởng và giai đoạn lịch sử văn học.'
      ]
    };
    if (solutionMap[project.id]) return solutionMap[project.id];
    if (project.architecture && project.architecture.length > 0) {
      return project.architecture.slice(0, 3);
    }
    return [
      'Giao diện tối ưu – Đơn giản, nhanh và dễ sử dụng.',
      'Kiến trúc module – Mở rộng linh hoạt theo quy mô.',
      'Tự động hóa luồng việc – Giảm thiểu thao tác nhập tay.'
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
      TypeScript: '/shared/icons/typescript.svg',
      'Tailwind CSS': '/shared/icons/tailwind.svg',
      Tailwind: '/shared/icons/tailwind.svg',
      Hono: '/shared/icons/hono.svg',
      PayOS: '/shared/icons/payos.svg',
      Redis: '/shared/icons/redis.svg',
      'Node.js': '/shared/icons/nodejs.svg',
      Node: '/shared/icons/nodejs.svg',
      Vite: '/shared/icons/vite.svg',
      Cloudflare: '/shared/icons/cloudflare.svg',
      'Cloudflare Pages': '/shared/icons/cloudflare.svg',
      Docker: '/shared/icons/docker.svg',
      PostgreSQL: '/shared/icons/postgresql.svg',
      'Three.js': '/shared/icons/threejs.svg',
      NestJS: '/shared/icons/nestjs.svg'
    };
    return map[name] || '/shared/icons/react.svg';
  }

  function detailMarkup(project) {
    var screens = (project.screens && project.screens.length > 0) ? project.screens : [{
      title: project.title,
      caption: project.summary,
      desktop: project.cover || ''
    }];
    var currentScreen = screens[0];
    var showNav = screens.length > 1;

    var navButtonsHtml = showNav ? (
      '<button class="modal-nav-arrow modal-nav-prev" id="modal-prev-screen-btn" type="button" aria-label="Xem ảnh trước">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>' +
      '</button>' +
      '<button class="modal-nav-arrow modal-nav-next" id="modal-next-screen-btn" type="button" aria-label="Xem ảnh kế tiếp">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>' +
      '</button>' +
      '<span class="modal-screen-badge" id="modal-screen-badge">1 / ' + screens.length + '</span>'
    ) : '';

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
              navButtonsHtml +
              '<img id="modal-active-img" src="' + currentScreen.desktop + '" alt="' + currentScreen.title + '" loading="eager">' +
            '</div>' +
            '<div class="modal-screenshot-caption-bar">' +
              '<div class="caption-info-group">' +
                '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' +
                '<div class="caption-text-block">' +
                  '<span class="caption-title" id="modal-caption-title">' + currentScreen.title + '</span>' +
                  '<p class="caption-desc" id="modal-caption-desc">' + currentScreen.caption + '</p>' +
                '</div>' +
              '</div>' +
              '<button class="btn-expand-preview" id="modal-expand-btn" data-full-img="' + currentScreen.desktop + '" type="button">' +
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

          '<!-- CỘT PHẢI: Vai trò & Tech Stack -->' +
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
    var screens = (project.screens && project.screens.length > 0) ? project.screens : [{
      title: project.title,
      caption: project.summary,
      desktop: project.cover || ''
    }];
    var currentScreenIdx = 0;

    function switchScreen(newIdx) {
      if (screens.length <= 1) return;
      currentScreenIdx = (newIdx + screens.length) % screens.length;
      var sc = screens[currentScreenIdx];

      var img = modal.querySelector('#modal-active-img');
      var badge = modal.querySelector('#modal-screen-badge');
      var capTitle = modal.querySelector('#modal-caption-title');
      var capDesc = modal.querySelector('#modal-caption-desc');
      var expandBtn = modal.querySelector('#modal-expand-btn') || modal.querySelector('.btn-expand-preview');

      if (img) {
        img.classList.add('is-switching');
        setTimeout(function() {
          img.src = sc.desktop;
          img.alt = sc.title;
          img.onload = function() {
            img.classList.remove('is-switching');
          };
          setTimeout(function() { img.classList.remove('is-switching'); }, 200);
        }, 100);
      }

      if (badge) badge.textContent = (currentScreenIdx + 1) + ' / ' + screens.length;
      if (capTitle) capTitle.textContent = sc.title;
      if (capDesc) capDesc.textContent = sc.caption;
      if (expandBtn) expandBtn.setAttribute('data-full-img', sc.desktop);
    }

    var prevBtn = modal.querySelector('#modal-prev-screen-btn');
    if (prevBtn) {
      prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        switchScreen(currentScreenIdx - 1);
      });
    }

    var nextBtn = modal.querySelector('#modal-next-screen-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        switchScreen(currentScreenIdx + 1);
      });
    }

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
        var src = btn.getAttribute('data-full-img') || btn.dataset.fullImg;
        var activeTitle = (screens[currentScreenIdx] && screens[currentScreenIdx].title) || project.title;
        if (src) openLightbox(src, activeTitle);
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
      var validIds = ['dealer', 'conhon', 'nostime', 'engpath', 'fabsolution', 'vanhien', 'suky'];
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
    var detailModal = document.getElementById('project-detail-modal');
    var isDetailOpen = detailModal && detailModal.classList.contains('open');

    if (e.key === 'ArrowLeft' && isDetailOpen) {
      var prevBtn = detailModal.querySelector('#modal-prev-screen-btn');
      if (prevBtn) {
        e.preventDefault();
        prevBtn.click();
        return;
      }
    }
    if (e.key === 'ArrowRight' && isDetailOpen) {
      var nextBtn = detailModal.querySelector('#modal-next-screen-btn');
      if (nextBtn) {
        e.preventDefault();
        nextBtn.click();
        return;
      }
    }

    if (e.key === 'Escape' || e.keyCode === 27) {
      var lightbox = document.getElementById('image-lightbox-modal');
      if (lightbox && lightbox.classList.contains('open')) {
        lightbox.classList.remove('open');
        setTimeout(function() { lightbox.remove(); }, 250);
        return;
      }
      if (isDetailOpen) {
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
