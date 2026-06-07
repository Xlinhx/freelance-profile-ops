(function() {
  var ICONS = {
    React: 'icons/react.svg',
    TypeScript: 'icons/typescript.svg',
    Next: 'icons/nextjs.svg',
    'Next.js': 'icons/nextjs.svg',
    Node: 'icons/nodejs.svg',
    'Node.js': 'icons/nodejs.svg',
    PostgreSQL: 'icons/postgresql.svg',
    Redis: 'icons/redis.svg',
    Docker: 'icons/docker.svg',
    Python: 'icons/python.svg',
    OpenAI: 'icons/openai.svg',
    MongoDB: 'icons/mongodb.svg',
    Three: 'icons/threejs.svg'
  };

  var COLORS = {
    React: '#31c6f7',
    TypeScript: '#3178c6',
    Vite: '#7c3aed',
    Tailwind: '#22b8c7',
    Cloudflare: '#f48120',
    D1: '#3a3a3a',
    Hono: '#e36002',
    Workers: '#111827',
    'Workers AI': '#6d5bd0',
    Gemini: '#8b6fd6',
    JWT: '#111',
    jose: '#111',
    SWR: '#111',
    Next: '#111',
    'Next.js': '#111',
    NestJS: '#e0234e',
    Prisma: '#24354a',
    Node: '#2f9e44',
    'Node.js': '#2f9e44',
    PostgreSQL: '#336791',
    Redis: '#dc382d',
    Docker: '#2496ed',
    Nginx: '#009639',
    PayOS: '#155eef',
    SSE: '#111',
    WebSocket: '#111',
    'Framer Motion': '#6d5bd0',
    'Cloudflare Pages': '#f48120',
    KV: '#f48120',
    Vercel: '#111',
    'React Router': '#ca4245',
    'Express': '#111',
    'Multer': '#59666c',
    'Zalo OA': '#0068ff',
    'Realtime': '#0891b2',
    'Restaurant Ops': '#d97706'
  };

  var PROJECT_CASES = [
    {
      id: 'dealer',
      category: 'ecom',
      title: 'Thương mại điện tử bán sỉ',
      tag: 'B2B Commerce · Operations',
      summary: 'Nền tảng đặt hàng và vận hành nhập sỉ/lẻ cho quy trình kinh doanh thật: catalog, tài khoản đại lý, đơn hàng, quản trị và triển khai VPS.',
      time: 'Production',
      role: 'Kiến trúc hệ thống & Full-stack',
      demo: 'https://hienchina.com/',
      cover: 'assets/projects/dealer/home-desktop.png',
      solves: 'Dự án giải quyết bài toán bán hàng vận hành liên tục: khách cần xem sản phẩm, đại lý cần đặt hàng nhanh, admin cần theo dõi đơn và dữ liệu phải sống ổn định trên VPS. Trọng tâm không phải landing page, mà là luồng thương mại điện tử đủ dùng cho kinh doanh thật.',
      architecture: [
        'Next.js frontend xử lý trải nghiệm cửa hàng và dashboard.',
        'NestJS API đóng vai trò backend nghiệp vụ, tách khỏi phần hiển thị.',
        'PostgreSQL + Prisma giữ dữ liệu người dùng, sản phẩm, đơn hàng.',
        'Docker Compose + Nginx triển khai production trên VPS.'
      ],
      tech: [
        ['Frontend', ['Next.js', 'React', 'TypeScript']],
        ['Backend', ['NestJS', 'Node.js', 'Prisma']],
        ['Database', ['PostgreSQL']],
        ['Vận hành', ['Docker', 'Nginx', 'VPS']]
      ],
      screens: [
        {
          title: 'Homepage bán hàng',
          caption: 'Mặt tiền thương mại: khách truy cập để nhận diện ngành hàng, xem sản phẩm và đi vào luồng mua.',
          desktop: 'assets/projects/dealer/home-desktop.png',
          mobile: 'assets/projects/dealer/home-mobile.png'
        },
        {
          title: 'Admin dashboard',
          caption: 'Không gian vận hành cho quản trị: theo dõi trạng thái kinh doanh và các nhóm dữ liệu cốt lõi.',
          desktop: 'assets/projects/dealer/admin-dashboard-desktop.png',
          mobile: 'assets/projects/dealer/home-mobile.png',
          contain: true
        }
      ]
    },
    {
      id: 'conhon',
      category: 'backend',
      title: 'Văn hóa dân gian Cổ Nhơn',
      tag: 'Realtime · Payment',
      summary: 'Nền tảng số hóa quy trình đặt tịch Cổ Nhơn: phiên chơi, hạn mức, thanh toán QR, kết quả, cộng đồng và dashboard quản trị.',
      time: 'Production mùa vụ',
      role: 'Kiến trúc realtime, payment & vận hành',
      demo: 'https://conhonannhonbinhdinh.vn/',
      cover: 'assets/projects/conhon/home-desktop.png',
      solves: 'Hệ thống đưa một quy trình dân gian có tính mùa vụ lên web mà vẫn giữ được nhịp vận hành thực tế: người dùng đặt tịch, thanh toán, nhận kết quả; admin kiểm soát phiên, hạn mức, kết quả và cộng đồng. Điểm khó nằm ở concurrency và dữ liệu tiền thật.',
      architecture: [
        'React/Vite frontend cho người chơi và admin.',
        'Express backend quản lý order, session, PayOS webhook và SSE.',
        'PostgreSQL dùng transaction + row-level lock để chống bán vượt hạn mức.',
        'Redis hỗ trợ rate limit và trạng thái realtime; Docker + Nginx chạy production.'
      ],
      tech: [
        ['Frontend', ['React', 'TypeScript', 'Vite']],
        ['Backend', ['Node.js', 'Express', 'SSE']],
        ['Data', ['PostgreSQL', 'Redis']],
        ['Payment', ['PayOS', 'JWT']],
        ['Vận hành', ['Docker', 'Nginx']]
      ],
      screens: [
        {
          title: 'Homepage Cổ Nhơn',
          caption: 'Điểm vào cho người chơi: giới thiệu mùa chơi, định hướng Thai/kết quả và dẫn vào luồng đặt tịch.',
          desktop: 'assets/projects/conhon/home-desktop.png',
          mobile: 'assets/projects/conhon/home-mobile.png'
        }
      ]
    },
    {
      id: 'engpath',
      category: 'ai',
      title: 'EngPath — Giáo dục tiếng Anh tích hợp AI',
      tag: 'AI Education · English',
      summary: 'Ứng dụng luyện tiếng Anh THPT với student/teacher flow, bài học, điểm số, AI feedback và quản trị nội dung trên Cloudflare.',
      time: 'Live demo',
      role: 'Full-stack AI education',
      demo: 'https://edupath-english.pages.dev/',
      cover: 'assets/projects/engpath/home-desktop.png',
      solves: 'EngPath gom các hoạt động học tiếng Anh thành một workspace: học sinh luyện bài, nhận feedback; giáo viên theo dõi tiến độ, quản lý lớp và nội dung. AI được dùng để phản hồi và hỗ trợ học tập, không chỉ là lớp trang trí ở homepage.',
      architecture: [
        'React/Vite SPA cho student và teacher dashboard.',
        'Cloudflare Pages Functions/Hono làm API edge.',
        'D1 SQLite + KV lưu dữ liệu ứng dụng trên Cloudflare.',
        'Workers AI/Gemini xử lý transcribe, feedback và nội dung học tập.'
      ],
      tech: [
        ['Frontend', ['React', 'Vite']],
        ['Backend', ['Hono', 'Cloudflare Pages']],
        ['AI', ['Gemini', 'Workers AI']],
        ['Data', ['D1', 'KV']],
        ['Auth', ['JWT', 'jose']]
      ],
      screens: [
        {
          title: 'Landing giáo dục',
          caption: 'Trang giới thiệu định vị sản phẩm, hướng người dùng vào vai trò học sinh hoặc giáo viên.',
          desktop: 'assets/projects/engpath/home-desktop.png',
          mobile: 'assets/projects/engpath/home-mobile.png'
        },
        {
          title: 'Teacher dashboard',
          caption: 'Không gian giáo viên theo dõi lớp học, bài luyện và tiến độ học sinh.',
          desktop: 'assets/projects/engpath/teacher-dashboard-desktop.png',
          mobile: 'assets/projects/engpath/home-mobile.png',
          contain: true
        },
        {
          title: 'Student grades',
          caption: 'Bề mặt học sinh xem kết quả, phản hồi và tiến độ luyện tập.',
          desktop: 'assets/projects/engpath/student-grades-desktop.png',
          mobile: 'assets/projects/engpath/home-mobile.png',
          contain: true
        }
      ]
    },
    {
      id: 'vanhien',
      category: 'ai',
      title: 'Văn Hiến — Dạy học Ngữ văn với AI',
      tag: 'AI Education · Literature',
      summary: 'Nền tảng hỗ trợ dạy và học Ngữ văn: kho tác phẩm, phân tích AI, nhân vật, đề kiểm tra, rubric và quản trị lớp.',
      time: 'Live demo',
      role: 'Full-stack AI education',
      demo: 'https://van-hien.pages.dev/',
      cover: 'assets/projects/vanhien/home-desktop.png',
      solves: 'Văn Hiến biến Ngữ văn thành một môi trường học có dữ liệu và tương tác: giáo viên tổ chức tác phẩm, lớp học, đề kiểm tra; học sinh tiếp cận phân tích và luyện tập theo ngữ cảnh. AI được đặt vào workflow sư phạm, không thay giáo viên.',
      architecture: [
        'React + TypeScript/Vite cho UI đa vai trò.',
        'Cloudflare Pages Functions xử lý API gần người dùng.',
        'D1 + KV lưu nội dung lớp học, users và trạng thái ứng dụng.',
        'Workers AI hỗ trợ phân tích văn bản, nhân vật và phản hồi học tập.'
      ],
      tech: [
        ['Frontend', ['React', 'TypeScript', 'Vite']],
        ['Backend', ['Cloudflare Pages', 'D1']],
        ['AI', ['Workers AI', 'Gemini']],
        ['Auth/Data', ['JWT', 'jose', 'SWR']]
      ],
      screens: [
        {
          title: 'Homepage Văn Hiến',
          caption: 'Điểm vào cho nền tảng Ngữ văn, giới thiệu rõ ngữ cảnh học tập và vai trò người dùng.',
          desktop: 'assets/projects/vanhien/home-desktop.png',
          mobile: 'assets/projects/vanhien/home-mobile.png'
        },
        {
          title: 'Admin dashboard',
          caption: 'Khu vực quản trị dữ liệu, lớp học và hoạt động hệ thống.',
          desktop: 'assets/projects/vanhien/admin-dashboard-desktop.png',
          mobile: 'assets/projects/vanhien/home-mobile.png',
          contain: true
        },
        {
          title: 'Quản lý người dùng',
          caption: 'Bề mặt kiểm soát user/role để vận hành hệ thống giáo dục đa vai trò.',
          desktop: 'assets/projects/vanhien/admin-users-desktop.png',
          mobile: 'assets/projects/vanhien/home-mobile.png',
          contain: true
        }
      ]
    },
    {
      id: 'suky',
      category: 'ai',
      title: 'Sử Ký — Game học Lịch sử tích hợp AI',
      tag: 'Classroom Game · AI',
      summary: 'Ứng dụng lớp học Lịch sử 12 dạng game room: giáo viên tạo phiên, AI sinh câu hỏi, học sinh tham gia và hệ thống tổng hợp kết quả.',
      time: 'Live demo',
      role: 'Full-stack classroom game',
      demo: 'https://su-ky.pages.dev/',
      cover: 'assets/projects/suky/home-desktop.png',
      solves: 'Sử Ký xử lý vấn đề lớp học khó tương tác: biến bài học Lịch sử thành phiên chơi có phòng, câu hỏi, điểm số và dữ liệu sau giờ học. Giáo viên kiểm soát nội dung; AI hỗ trợ sinh câu hỏi và tri thức phụ trợ.',
      architecture: [
        'React/Vite frontend cho teacher dashboard và student room.',
        'Cloudflare Workers/Pages Functions làm lớp API serverless.',
        'D1 + KV lưu phòng học, câu hỏi, kết quả và cache.',
        'Workers AI/Gemma hỗ trợ sinh câu hỏi, tóm tắt và gợi ý nội dung.'
      ],
      tech: [
        ['Frontend', ['React', 'Vite']],
        ['Backend', ['Cloudflare Pages', 'Workers']],
        ['AI', ['Gemini', 'Workers AI']],
        ['Data', ['D1', 'KV']],
        ['Testing', ['Vitest', 'Wrangler']]
      ],
      screens: [
        {
          title: 'Homepage Sử Ký',
          caption: 'Trang vào lớp học game hóa, phân tách rõ teacher flow và student join.',
          desktop: 'assets/projects/suky/home-desktop.png',
          mobile: 'assets/projects/suky/home-mobile.png'
        },
        {
          title: 'Teacher dashboard',
          caption: 'Không gian giáo viên tạo phòng, điều phối bài học và theo dõi hoạt động lớp.',
          desktop: 'assets/projects/suky/teacher-dashboard-desktop.png',
          mobile: 'assets/projects/suky/home-mobile.png',
          contain: true
        },
        {
          title: 'Kho tri thức',
          caption: 'Nơi quản lý tri thức/câu hỏi dùng cho phiên chơi và sinh nội dung AI.',
          desktop: 'assets/projects/suky/teacher-knowledge-desktop.png',
          mobile: 'assets/projects/suky/home-mobile.png',
          contain: true
        }
      ]
    },
    {
      id: 'uicar',
      category: 'web',
      title: 'UI Car — Showroom ô tô cao cấp',
      tag: 'Brand Site · Automotive',
      summary: 'Website trình diễn sản phẩm ô tô với visual-first layout, motion nhẹ và trải nghiệm responsive cho browsing trên desktop/mobile.',
      time: 'Live demo',
      role: 'Frontend & visual direction',
      demo: 'https://u-i-car.vercel.app/',
      cover: 'assets/projects/uicar/home-desktop.png',
      solves: 'Dự án tập trung vào cảm giác thương hiệu và khả năng xem sản phẩm: người dùng cần thấy xe, nhận diện phân khúc và di chuyển nhanh qua nội dung chính mà không bị layout marketing rỗng.',
      architecture: [
        'Frontend SPA triển khai trên Vercel.',
        'Layout lấy hình ảnh sản phẩm làm điểm neo thị giác.',
        'Responsive composition ưu tiên hero, danh mục và CTA rõ.',
        'Không có backend phức tạp; trọng tâm là mặt hiển thị.'
      ],
      tech: [
        ['Frontend', ['React', 'Vite']],
        ['UI', ['Tailwind', 'Framer Motion']],
        ['Deploy', ['Vercel']]
      ],
      screens: [
        {
          title: 'Homepage showroom',
          caption: 'Mặt tiền visual-first cho sản phẩm ô tô, ưu tiên cảm giác thương hiệu và hành động xem xe.',
          desktop: 'assets/projects/uicar/home-desktop.png',
          mobile: 'assets/projects/uicar/home-mobile.png'
        }
      ]
    },
    {
      id: 'muong',
      category: 'web',
      title: 'Mường Culture — Bảo tàng văn hóa số',
      tag: 'Cultural Site · Museum',
      summary: 'Website văn hóa số giới thiệu không gian Mường, trò chơi dân gian, bảo tàng ảo và nội dung khám phá theo hướng trải nghiệm.',
      time: 'Live demo',
      role: 'Frontend & cultural storytelling',
      demo: 'https://u-i-muongculture.vercel.app/',
      cover: 'assets/projects/muong/home-desktop.png',
      solves: 'Mường Culture cần truyền tải chất liệu văn hóa bằng trải nghiệm web có hình ảnh, nhịp kể chuyện và các điểm tương tác. Trọng tâm là giữ nội dung dễ khám phá thay vì biến văn hóa thành một trang giới thiệu tĩnh.',
      architecture: [
        'Frontend triển khai trên Vercel.',
        'Các section đóng vai trò tuyến tham quan: homepage, hỏi đúm, bảo tàng ảo.',
        'Visual asset và layout giữ vai trò chính trong việc kể chuyện.',
        'Không gắn backend nặng; phù hợp mô hình website văn hóa/trưng bày.'
      ],
      tech: [
        ['Frontend', ['React', 'Vite']],
        ['Experience', ['Three', 'Framer Motion']],
        ['Deploy', ['Vercel']]
      ],
      screens: [
        {
          title: 'Homepage văn hóa',
          caption: 'Trang mở đầu giới thiệu tinh thần dự án và dẫn người dùng vào các tuyến khám phá.',
          desktop: 'assets/projects/muong/home-desktop.png',
          mobile: 'assets/projects/muong/home-mobile.png'
        },
        {
          title: 'Hỏi đúm',
          caption: 'Một điểm tương tác văn hóa, dùng để biến nội dung dân gian thành trải nghiệm có nhịp chơi.',
          desktop: 'assets/projects/muong/hoi-dum-desktop.png',
          mobile: 'assets/projects/muong/home-mobile.png',
          contain: true
        },
        {
          title: 'Bảo tàng ảo',
          caption: 'Không gian trưng bày giúp người xem đi qua nội dung văn hóa theo cảm giác tham quan.',
          desktop: 'assets/projects/muong/virtual-museum-desktop.png',
          mobile: 'assets/projects/muong/home-mobile.png',
          contain: true
        }
      ]
    }
  ];

  PROJECT_CASES = [
    {
      id: 'fabsolution',
      category: 'ai',
      title: 'FabSolution — Giải pháp AI cho doanh nghiệp trên Zalo',
      tag: 'AI Business · Zalo Automation',
      summary: 'Workspace AI kết nối Zalo để gom hội thoại, đơn hàng, thực đơn, kịch bản và vận hành chăm sóc khách hàng vào một màn hình làm việc thống nhất.',
      time: 'Live product',
      role: 'Kiến trúc sản phẩm & Full-stack AI',
      demo: 'https://fab.webinprogress.click/',
      cover: 'assets/projects/fab/home-desktop.png',
      solves: 'FabSolution giải quyết bài toán doanh nghiệp bán hàng qua Zalo nhưng dữ liệu nằm rải rác trong hội thoại: nhân viên phải đọc tin nhắn, nhớ đơn, kiểm tra thực đơn, phản hồi thủ công và rất dễ sót việc. Hệ thống đưa hội thoại, đơn hàng, AI xử lý nội dung và trạng thái vận hành về cùng một workspace để chủ cửa hàng theo dõi được toàn bộ nhịp làm việc.',
      architecture: [
        'Dashboard trung tâm cho inbox, đơn hàng, thực đơn, kịch bản, kết nối và quản trị.',
        'Zalo Bridge giữ vai trò cầu nối hội thoại, đồng bộ trạng thái gửi/nhận và dữ liệu khách.',
        'Lớp AI hỗ trợ phân loại hội thoại, đọc ý định đặt hàng và gợi ý xử lý theo ngữ cảnh.',
        'Thiết kế theo hướng operations-first: ít trang trí, ưu tiên tốc độ phản hồi và quan sát trạng thái.'
      ],
      tech: [
        ['Frontend', ['React', 'TypeScript', 'Vite']],
        ['AI/Ops', ['AI', 'Zalo OA', 'Realtime']],
        ['Workflow', ['Restaurant Ops', 'Dashboard']],
        ['Vận hành', ['Cloudflare Pages', 'VPS']]
      ],
      screens: [
        {
          title: 'Hộp tin Zalo hợp nhất',
          caption: 'Màn hình chính để chủ cửa hàng theo dõi hội thoại, trạng thái Zalo online và xử lý nhu cầu đặt món/đặt hàng ngay trong workspace.',
          desktop: 'assets/projects/fab/home-desktop.png',
          mobile: 'assets/projects/fab/home-desktop.png',
          contain: true
        }
      ]
    }
  ].concat(PROJECT_CASES.filter(function(project) {
    return project.id !== 'uicar' && project.id !== 'muong';
  }));

  var showcaseState = { id: null, slide: 0, device: 'desktop' };

  function svgArrow() {
    return '<svg viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10"/></svg>';
  }

  function deviceIcon(type) {
    if (type === 'mobile') return '<svg viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>';
    return '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>';
  }

  function externalIcon() {
    return '<svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14L21 3"/></svg>';
  }

  function techBadge(name) {
    var img = ICONS[name] ? '<img src="' + ICONS[name] + '" alt="">' : '<span class="tech-mark">' + name.slice(0, 2).toUpperCase() + '</span>';
    var bg = COLORS[name] || '#222';
    return '<span class="tech-badge" style="background:' + bg + '">' + img + name + '</span>';
  }

  function projectCard(project, index) {
    var size = index < 4 ? 'work-half' : 'work-half work-extra';
    var hidden = index < 4 ? '' : ' style="display:none"';
    return '<a href="#" class="work-card ' + size + '" data-category="' + project.category + '" data-project="' + project.id + '"' + hidden + '>' +
      '<div class="work-img-wrap"><div class="view-overlay"><span class="view-label">Xem chi tiết</span></div>' +
      '<img src="' + project.cover + '" alt="' + project.title + '" class="work-img" loading="lazy" decoding="async">' +
      '<div class="work-tag">' + project.tag + '</div></div>' +
      '<div class="work-info"><div><h3>' + project.title + '</h3><p>' + project.summary + '</p></div><div class="work-arrow">' + svgArrow() + '</div></div>' +
      '<div class="work-tech-tags">' + project.tech.slice(0, 3).flatMap(function(row) { return row[1].slice(0, 2); }).slice(0, 5).map(function(name) { return '<span class="work-tech-tag">' + name + '</span>'; }).join('') + '</div>' +
      '</a>';
  }

  function renderProjects() {
    var grid = document.querySelector('.work-grid');
    if (!grid) return;
    grid.innerHTML = PROJECT_CASES.map(projectCard).join('');
    grid.querySelectorAll('.work-card[data-project]').forEach(function(card) {
      card.addEventListener('click', function(event) {
        event.preventDefault();
        window.openProjectDetail(card.dataset.project);
      });
    });

    var sectionHead = document.querySelector('#work .section-head .sub');
    if (sectionHead) {
      sectionHead.textContent = 'Các dự án đang live, có screenshot thật từ production/demo và mô tả theo đúng vai trò kỹ thuật của từng hệ thống.';
    }

    var viewAll = document.getElementById('btn-view-all');
    if (viewAll) viewAll.textContent = 'Xem toàn bộ dự án live';

    var liveCategories = PROJECT_CASES.reduce(function(set, project) {
      set[project.category] = true;
      return set;
    }, {});
    document.querySelectorAll('.filter-pill').forEach(function(pill) {
      var filter = pill.dataset.filter;
      pill.style.display = filter === 'all' || liveCategories[filter] ? '' : 'none';
    });
  }

  function stackTable(project) {
    return '<div class="stack-table">' + project.tech.map(function(row) {
      return '<div class="stack-row"><div class="stack-layer">' + row[0] + '</div><div class="stack-badges">' + row[1].map(techBadge).join('') + '</div></div>';
    }).join('') + '</div>';
  }

  function renderShowcase(project) {
    var slide = project.screens[showcaseState.slide] || project.screens[0];
    var src = showcaseState.device === 'mobile' ? (slide.mobile || slide.desktop) : slide.desktop;
    var isMobile = showcaseState.device === 'mobile';
    var dots = project.screens.map(function(_, index) {
      return '<span class="showcase-dot ' + (index === showcaseState.slide ? 'active' : '') + '"></span>';
    }).join('');

    return '<div class="showcase-panel">' +
      '<div class="showcase-top"><div><div class="showcase-eyebrow">Screenshots</div></div>' +
      '<div class="device-toggle" role="tablist" aria-label="Chọn thiết bị">' +
      '<button class="device-btn ' + (!isMobile ? 'active' : '') + '" data-device="desktop" type="button">' + deviceIcon('desktop') + '<span>PC</span></button>' +
      '<button class="device-btn ' + (isMobile ? 'active' : '') + '" data-device="mobile" type="button">' + deviceIcon('mobile') + '<span>Mobile</span></button>' +
      '</div></div>' +
      '<div class="showcase-stage"><div class="showcase-frame ' + (isMobile ? 'mobile ' : '') + (slide.contain ? 'contain' : '') + '">' +
      '<img src="' + src + '" alt="' + slide.title + '" loading="eager" decoding="async"></div></div>' +
      '<div class="showcase-caption"><h4>' + slide.title + '</h4><p>' + slide.caption + '</p></div>' +
      '<div class="showcase-controls">' +
      '<button class="showcase-nav-btn" data-step="-1" type="button" aria-label="Ảnh trước"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></button>' +
      '<div class="showcase-dots">' + dots + '</div>' +
      '<button class="showcase-nav-btn" data-step="1" type="button" aria-label="Ảnh sau"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></button>' +
      '</div>' +
      '</div>';
  }

  function bindShowcaseControls(project) {
    document.querySelectorAll('.device-btn[data-device]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        showcaseState.device = btn.dataset.device;
        updateShowcase(project);
      });
    });
    document.querySelectorAll('.showcase-nav-btn[data-step]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var step = Number(btn.dataset.step);
        showcaseState.slide = (showcaseState.slide + step + project.screens.length) % project.screens.length;
        updateShowcase(project);
      });
    });
  }

  function updateShowcase(project) {
    var slot = document.getElementById('showcase-slot');
    if (!slot) return;
    slot.innerHTML = renderShowcase(project);
    bindShowcaseControls(project);
  }

  function detailMarkup(project) {
    return '<div class="project-case-body">' +
      '<aside class="project-brief">' +
      '<p class="brief-lede">' + project.summary + '</p>' +
      '<div class="brief-meta">' +
      '<div class="brief-meta-item"><span class="brief-label">Loại dự án</span><span class="brief-value">' + project.tag + '</span></div>' +
      '<div class="brief-meta-item"><span class="brief-label">Trạng thái</span><span class="brief-value">' + project.time + '</span></div>' +
      '<div class="brief-meta-item"><span class="brief-label">Vai trò</span><span class="brief-value">' + project.role + '</span></div>' +
      '<div class="brief-meta-item"><span class="brief-label">Demo</span><span class="brief-value">' + (project.demo ? 'Đang live' : 'Bổ sung sau') + '</span></div>' +
      '</div>' +
      '<section class="brief-section"><h4>Ứng Dụng Giải Quyết Gì</h4><p>' + project.solves + '</p></section>' +
      '<section class="brief-section"><h4>Tech Stack</h4>' + stackTable(project) + '</section>' +
      '<section class="brief-section"><h4>Kiến Trúc</h4><ul class="arch-list">' + project.architecture.map(function(item) { return '<li>' + item + '</li>'; }).join('') + '</ul></section>' +
      '<section class="brief-section"><h4>Link demo</h4>' + (project.demo ? '<a class="demo-link" href="' + project.demo + '" target="_blank" rel="noreferrer">' + externalIcon() + 'Mở bản live</a>' : '<p>Demo sẽ được bổ sung sau.</p>') + '</section>' +
      '</aside>' +
      '<section id="showcase-slot">' + renderShowcase(project) + '</section>' +
      '</div>';
  }

  function bindCaseTabs() {
    var body = document.querySelector('.project-case-body');
    if (!body || body.querySelector('.project-mobile-tabs')) return;
    body.dataset.activeTab = 'overview';

    var tabs = document.createElement('div');
    tabs.className = 'project-mobile-tabs';
    tabs.setAttribute('role', 'tablist');
    tabs.setAttribute('aria-label', 'Chọn phần chi tiết dự án');
    tabs.innerHTML =
      '<button class="case-tab active" data-case-tab="overview" type="button">Tổng quan</button>' +
      '<button class="case-tab" data-case-tab="screens" type="button">Ảnh</button>' +
      '<button class="case-tab" data-case-tab="stack" type="button">Stack</button>' +
      '<button class="case-tab" data-case-tab="architecture" type="button">Kiến trúc</button>';
    body.insertBefore(tabs, body.firstChild);

    var lede = body.querySelector('.brief-lede');
    var meta = body.querySelector('.brief-meta');
    var sections = body.querySelectorAll('.project-brief .brief-section');
    var showcase = body.querySelector('#showcase-slot');
    if (lede) lede.dataset.caseSection = 'overview';
    if (meta) meta.dataset.caseSection = 'overview';
    if (sections[0]) sections[0].dataset.caseSection = 'overview';
    if (sections[1]) sections[1].dataset.caseSection = 'stack';
    if (sections[2]) sections[2].dataset.caseSection = 'architecture';
    if (sections[3]) sections[3].dataset.caseSection = 'overview';
    if (showcase) showcase.dataset.caseSection = 'screens';

    tabs.querySelectorAll('.case-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        body.dataset.activeTab = btn.dataset.caseTab;
        tabs.querySelectorAll('.case-tab').forEach(function(tab) {
          tab.classList.toggle('active', tab === btn);
        });
      });
    });
  }

  function getProject(id) {
    return PROJECT_CASES.find(function(project) { return project.id === id; });
  }

  function overrideDetailModal() {
    var detailModal = document.getElementById('project-detail-modal');
    if (!detailModal) return;
    window.PROJECT_CASES = PROJECT_CASES;
    window.openProjectDetail = function(projectId) {
      var project = getProject(projectId);
      if (!project) return;
      showcaseState = { id: project.id, slide: 0, device: 'desktop' };
      var title = document.getElementById('detail-title');
      var body = detailModal.querySelector('.detail-body');
      if (title) title.textContent = project.title;
      if (body) {
        body.classList.add('project-case-root');
        body.innerHTML = detailMarkup(project);
      }
      bindShowcaseControls(project);
      bindCaseTabs();

      var listModal = document.getElementById('project-modal');
      if (listModal) listModal.classList.remove('open');
      detailModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
  }

  function refactorTestimonials() {
    var grid = document.querySelector('.testimonials-grid');
    if (!grid) return;
    var items = [
      { projectId: 'engpath', project: 'EngPath AI', slots: ['Feedback 01', 'Feedback 02'] },
      { projectId: 'suky', project: 'Sử Ký', slots: ['Feedback 01'] },
      { projectId: 'vanhien', project: 'Văn Hiến', slots: ['Feedback 01'] },
      { projectId: 'conhon', project: 'Văn hóa dân gian Cổ Nhơn', slots: ['Feedback 01'] },
      { projectId: 'dealer', project: 'Thương mại điện tử bán sỉ', slots: ['Feedback 01'] },
      { projectId: 'fabsolution', project: 'FabSolution', slots: ['Feedback 01'] }
    ];
    var rail = document.createElement('div');
    rail.className = 'feedback-rail';
    rail.innerHTML = '<button class="feedback-nav" data-dir="-1" type="button" aria-label="Feedback trước"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></button><div class="feedback-track"></div><button class="feedback-nav" data-dir="1" type="button" aria-label="Feedback sau"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></button>';
    var track = rail.querySelector('.feedback-track');
    var cards = items.map(function(item, index) {
      var card = document.createElement('article');
      card.className = 'feedback-slide feedback-card-compact' + (index === 0 ? ' active' : '');
      card.innerHTML =
        '<div class="feedback-placeholder-grid ' + (item.slots.length === 1 ? 'single' : '') + '">' +
        item.slots.map(function(slot) {
          return '<button class="feedback-placeholder-shot" type="button" data-project="' + item.projectId + '">' +
            '<span class="placeholder-icon"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 15l3-3 3 3 2-2 2 2"/><circle cx="8" cy="9" r="1"/></svg></span>' +
            '<span class="placeholder-text">Ảnh feedback - bổ sung sau</span>' +
            '<small>' + slot + '</small>' +
            '</button>';
        }).join('') +
        '</div>' +
        '<div class="feedback-caption-line">' + item.project + ' · Feedback đang chờ ảnh thật</div>';
      track.appendChild(card);
      return card;
    });
    grid.replaceWith(rail);

    rail.querySelectorAll('.feedback-placeholder-shot').forEach(function(btn) {
      btn.addEventListener('click', function() {
        window.openProjectDetail(btn.dataset.project);
      });
    });

    cards.forEach(function(card, index) {
      card.classList.add('feedback-slide');
      if (index === 0) card.classList.add('active');
    });
    var active = 0;
    rail.querySelectorAll('.feedback-nav').forEach(function(btn) {
      btn.addEventListener('click', function() {
        cards[active].classList.remove('active');
        active = (active + Number(btn.dataset.dir) + cards.length) % cards.length;
        cards[active].classList.add('active');
      });
    });
  }

  function refactorTestimonialsV2() {
    var grid = document.querySelector('.testimonials-grid');
    if (!grid) return;
    var items = [
      {
        caption: 'EngPath AI - giao diện học viên và bảng điều khiển giáo viên.',
        images: [
          { src: 'assets/real/feedback-engpath.png', label: 'Dashboard EngPath' },
          { src: 'assets/projects/engpath/teacher-dashboard-desktop.png', label: 'Quản trị giáo viên' }
        ]
      },
      {
        caption: 'Sử Ký - quản trị tri thức và nội dung nhà trường.',
        images: [
          { src: 'assets/real/feedback-suky.png', label: 'Tổng quan hệ thống' },
          { src: 'assets/projects/suky/teacher-knowledge-desktop.png', label: 'Kho kiến thức' }
        ]
      },
      {
        caption: 'Văn Hiến AI - quản trị lớp học, tài khoản và hoạt động hệ thống.',
        images: [
          { src: 'assets/real/feedback-vanhien.png', label: 'Tổng quan hệ thống' },
          { src: 'assets/projects/vanhien/admin-users-desktop.png', label: 'Quản lý người dùng' }
        ]
      },
      {
        caption: 'Văn hóa dân gian Cổ Nhơn - landing và luồng mua tịch mùa Tết.',
        images: [
          { src: 'assets/real/feedback-conhon.png', label: 'Landing lễ hội' },
          { src: 'assets/projects/conhon/home-mobile.png', label: 'Mobile landing' }
        ]
      },
      {
        caption: 'Thương mại điện tử bán sỉ - dashboard đơn hàng và vận hành.',
        images: [
          { src: 'assets/real/feedback-dealer.png', label: 'Dashboard kinh doanh' },
          { src: 'assets/projects/dealer/admin-dashboard-desktop.png', label: 'Quản trị đơn hàng' }
        ]
      },
      {
        caption: 'FabSolution - giải pháp AI cho doanh nghiệp trên Zalo.',
        images: [
          { src: 'assets/real/feedback-fabsolution.png', label: 'Zalo AI workspace' },
          { src: 'assets/projects/fab/home-desktop.png', label: 'Màn hình chính' }
        ]
      }
    ];
    var rail = document.createElement('div');
    rail.className = 'feedback-rail';
    rail.innerHTML = '<button class="feedback-nav" data-dir="-1" type="button" aria-label="Feedback trước"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></button><div class="feedback-track"></div><button class="feedback-nav" data-dir="1" type="button" aria-label="Feedback sau"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></button>';
    var track = rail.querySelector('.feedback-track');
    var cards = items.map(function(item, index) {
      var card = document.createElement('article');
      card.className = 'feedback-slide feedback-card-compact' + (index === 0 ? ' active' : '');
      card.innerHTML =
        '<div class="feedback-placeholder-grid">' +
        item.images.map(function(image) {
          return '<figure class="feedback-real-shot">' +
            '<img src="' + image.src + '" alt="' + image.label + '" loading="lazy" decoding="async">' +
            '<figcaption>' + image.label + '</figcaption>' +
          '</figure>';
        }).join('') +
        '</div>' +
        '<div class="feedback-caption-line">' + item.caption + '</div>';
      track.appendChild(card);
      return card;
    });
    grid.replaceWith(rail);

    var active = 0;
    rail.querySelectorAll('.feedback-nav').forEach(function(btn) {
      btn.addEventListener('click', function() {
        cards[active].classList.remove('active');
        active = (active + Number(btn.dataset.dir) + cards.length) % cards.length;
        cards[active].classList.add('active');
      });
    });
  }

  function refactorTestimonialsV3() {
    var grid = document.querySelector('.testimonials-grid');
    if (!grid) return;
    var items = [
      { name: 'Hoàng Ngân', project: 'EngPath', projectId: 'engpath', slots: ['Feedback 01', 'Feedback 02'] },
      { name: 'Nông Thị', project: 'Sử Ký', projectId: 'suky', slots: ['Feedback 01'] },
      { name: 'Nhóm giáo viên', project: 'Văn Hiến', projectId: 'vanhien', slots: ['Feedback 01', 'Feedback 02'] },
      { name: 'Cậu Ba Cổ Nhơn', project: 'Cổ Nhơn', projectId: 'conhon', slots: ['Feedback 01'] },
      { name: 'Nguyễn Thị Thu Hiền', project: 'Hiền China', projectId: 'dealer', slots: ['Feedback 01'] },
      { name: 'Anh Khánh', project: 'FabSolution', projectId: 'fabsolution', slots: ['Feedback 01', 'Feedback 02'] }
    ];
    var rail = document.createElement('div');
    rail.className = 'feedback-rail feedback-placeholder-rail';
    rail.innerHTML = '<button class="feedback-nav" data-dir="-1" type="button" aria-label="Feedback trước"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></button><div class="feedback-track"></div><button class="feedback-nav" data-dir="1" type="button" aria-label="Feedback sau"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></button>';
    var track = rail.querySelector('.feedback-track');
    var cards = items.map(function(item, index) {
      var card = document.createElement('article');
      card.className = 'feedback-slide feedback-card-compact' + (index === 0 ? ' active' : '');
      card.innerHTML =
        '<div class="feedback-placeholder-grid ' + (item.slots.length === 1 ? 'single' : '') + '">' +
        item.slots.map(function(slot) {
          return '<div class="feedback-placeholder-shot">' +
            '<span class="placeholder-icon"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 15l3-3 3 3 2-2 2 2"/><circle cx="8" cy="9" r="1"/></svg></span>' +
            '<span class="placeholder-text">Ảnh feedback - bổ sung sau</span>' +
            '<small>' + slot + '</small>' +
          '</div>';
        }).join('') +
        '</div>' +
        '<div class="feedback-caption-line"><span>' + item.name + ' - </span><button class="feedback-project-link" type="button" data-project="' + item.projectId + '">' + item.project + '</button></div>';
      track.appendChild(card);
      return card;
    });
    grid.replaceWith(rail);

    rail.querySelectorAll('.feedback-project-link').forEach(function(btn) {
      btn.addEventListener('click', function() {
        window.openProjectDetail(btn.dataset.project);
      });
    });

    var active = 0;
    rail.querySelectorAll('.feedback-nav').forEach(function(btn) {
      btn.addEventListener('click', function() {
        cards[active].classList.remove('active');
        active = (active + Number(btn.dataset.dir) + cards.length) % cards.length;
        cards[active].classList.add('active');
      });
    });
  }

  function init() {
    renderProjects();
    overrideDetailModal();
    refactorTestimonialsV3();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
