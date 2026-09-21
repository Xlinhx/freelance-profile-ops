/**
 * SINGLE SOURCE OF TRUTH: PROJECTS CATALOG DATA
 * Cung cấp dữ liệu chuẩn hoá cho các concept (Craft Studio, CV)
 * Tách biệt hoàn toàn phần Dữ liệu (Data) khỏi phần Hiển thị (Presentation).
 */

(function(global) {
  'use strict';

  var ICONS = {
    React: '/shared/icons/react.svg',
    TypeScript: '/shared/icons/typescript.svg',
    Next: '/shared/icons/nextjs.svg',
    'Next.js': '/shared/icons/nextjs.svg',
    Node: '/shared/icons/nodejs.svg',
    'Node.js': '/shared/icons/nodejs.svg',
    PostgreSQL: '/shared/icons/postgresql.svg',
    Redis: '/shared/icons/redis.svg',
    Docker: '/shared/icons/docker.svg',
    Python: '/shared/icons/python.svg',
    OpenAI: '/shared/icons/openai.svg',
    MongoDB: '/shared/icons/mongodb.svg',
    Three: '/shared/icons/threejs.svg',
    AWS: '/shared/icons/aws.svg',
    Cloudflare: '/shared/icons/cloudflare.svg',
    Tailwind: '/shared/icons/tailwind.svg',
    'Tailwind CSS': '/shared/icons/tailwind.svg',
    PayOS: '/shared/icons/payos.svg',
    Hono: '/shared/icons/hono.svg',
    Vite: '/shared/icons/vite.svg',
    'Zalo OA': '/shared/icons/zalo.svg',
    AI: '/shared/icons/ai.svg',
    Realtime: '/shared/icons/realtime.svg',
    'Restaurant Ops': '/shared/icons/restaurant.svg',
    Dashboard: '/shared/icons/dashboard.svg',
    VPS: '/shared/icons/vps.svg',
    'Cloudflare Pages': '/shared/icons/cloudflare.svg'
  };

  var TECH_CONVEYOR = [
    { name: 'React', icon: '/shared/icons/react.svg' },
    { name: 'Next.js', icon: '/shared/icons/nextjs.svg' },
    { name: 'TypeScript', icon: '/shared/icons/typescript.svg' },
    { name: 'Node.js', icon: '/shared/icons/nodejs.svg' },
    { name: 'Python', icon: '/shared/icons/python.svg' },
    { name: 'PostgreSQL', icon: '/shared/icons/postgresql.svg' },
    { name: 'Redis', icon: '/shared/icons/redis.svg' },
    { name: 'Docker', icon: '/shared/icons/docker.svg' },
    { name: 'Cloudflare', icon: '/shared/icons/cloudflare.svg' },
    { name: 'PayOS', icon: '/shared/icons/payos.svg' },
    { name: 'Tailwind CSS', icon: '/shared/icons/tailwind.svg' },
    { name: 'Hono', icon: '/shared/icons/hono.svg' }
  ];

  var COLORS = {
    React: '#149eca',
    TypeScript: '#3178c6',
    Vite: '#7c3aed',
    Tailwind: '#06b6d4',
    'Tailwind CSS': '#06b6d4',
    Cloudflare: '#f48120',
    D1: '#374151',
    Hono: '#e36002',
    Workers: '#1f2937',
    'Workers AI': '#5a45b8',
    Gemini: '#7c5fc7',
    JWT: '#1f2937',
    jose: '#1f2937',
    SWR: '#1f2937',
    Next: '#000000',
    'Next.js': '#000000',
    NestJS: '#e0234e',
    Prisma: '#24354a',
    Node: '#2f9e44',
    'Node.js': '#2f9e44',
    PostgreSQL: '#336791',
    Redis: '#dc382d',
    Docker: '#2496ed',
    Nginx: '#009639',
    PayOS: '#155eef',
    SSE: '#1f2937',
    WebSocket: '#1f2937',
    'Framer Motion': '#6d5bd0',
    'Cloudflare Pages': '#f48120',
    KV: '#f48120',
    Vercel: '#000000',
    Express: '#1f2937',
    'Zalo OA': '#0068ff',
    Realtime: '#0891b2',
    'Restaurant Ops': '#d97706',
    AI: '#102E38',
    Dashboard: '#4b5563',
    VPS: '#374151'
  };

  var PROJECT_CASES = [
    {
      id: 'fabsolution',
      category: 'ai',
      featured: true,
      title: 'FabSolution — Giải pháp AI cho Zalo',
      tag: 'AI Business · Zalo Automation',
      summary: 'Workspace AI kết nối Zalo để gom hội thoại, đơn hàng, thực đơn, kịch bản và vận hành chăm sóc khách hàng vào một màn hình làm việc thống nhất.',
      time: 'Live product',
      role: 'Kiến trúc sản phẩm & Full-stack AI',
      demo: 'https://fab.webinprogress.click/',
      cover: '/shared/projects-media/fab/home-desktop.png',
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
          desktop: '/shared/projects-media/fab/home-desktop.png',
          mobile: '/shared/projects-media/fab/home-desktop.png',
          contain: true
        }
      ]
    },
    {
      id: 'dealer',
      category: 'ecom',
      featured: true,
      title: 'Thương mại điện tử bán sỉ (B2B)',
      tag: 'B2B Commerce · Operations',
      summary: 'Nền tảng đặt hàng và vận hành nhập sỉ/lẻ cho quy trình kinh doanh thật: catalog, tài khoản đại lý, đơn hàng, quản trị và triển khai VPS.',
      time: 'Production',
      role: 'Kiến trúc hệ thống & Full-stack',
      demo: 'https://hienchina.com/',
      cover: '/shared/projects-media/dealer/home-desktop.png',
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
          desktop: '/shared/projects-media/dealer/home-desktop.png',
          mobile: '/shared/projects-media/dealer/home-mobile.png'
        },
        {
          title: 'Admin dashboard',
          caption: 'Không gian vận hành cho quản trị: theo dõi trạng thái kinh doanh và các nhóm dữ liệu cốt lõi.',
          desktop: '/shared/projects-media/dealer/admin-dashboard-desktop.png',
          mobile: '/shared/projects-media/dealer/home-mobile.png',
          contain: true
        }
      ]
    },
    {
      id: 'conhon',
      category: 'backend',
      featured: false,
      title: 'Văn hóa dân gian Cổ Nhơn',
      tag: 'Realtime · Payment',
      summary: 'Nền tảng số hóa quy trình đặt tịch Cổ Nhơn: phiên chơi, hạn mức, thanh toán QR, kết quả, cộng đồng và dashboard quản trị.',
      time: 'Production mùa vụ',
      role: 'Kiến trúc realtime, payment & vận hành',
      demo: 'https://conhonannhonbinhdinh.vn/',
      cover: '/shared/projects-media/conhon/home-desktop.png',
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
          desktop: '/shared/projects-media/conhon/home-desktop.png',
          mobile: '/shared/projects-media/conhon/home-mobile.png'
        }
      ]
    },
    {
      id: 'engpath',
      category: 'ai',
      featured: false,
      title: 'EngPath — Giáo dục tiếng Anh AI',
      tag: 'AI Education · English',
      summary: 'Ứng dụng luyện tiếng Anh THPT với student/teacher flow, bài học, điểm số, AI feedback và quản trị nội dung trên Cloudflare.',
      time: 'Live demo',
      role: 'Full-stack AI education',
      demo: 'https://edupath-english.pages.dev/',
      cover: '/shared/projects-media/engpath/home-desktop.png',
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
          desktop: '/shared/projects-media/engpath/home-desktop.png',
          mobile: '/shared/projects-media/engpath/home-mobile.png'
        },
        {
          title: 'Teacher dashboard',
          caption: 'Không gian giáo viên theo dõi lớp học, bài luyện và tiến độ học sinh.',
          desktop: '/shared/projects-media/engpath/teacher-dashboard-desktop.png',
          mobile: '/shared/projects-media/engpath/home-mobile.png',
          contain: true
        },
        {
          title: 'Student grades',
          caption: 'Bề mặt học sinh xem kết quả, phản hồi và tiến độ luyện tập.',
          desktop: '/shared/projects-media/engpath/student-grades-desktop.png',
          mobile: '/shared/projects-media/engpath/home-mobile.png',
          contain: true
        }
      ]
    },
    {
      id: 'vanhien',
      category: 'ai',
      featured: false,
      title: 'Văn Hiến — Dạy học Ngữ văn với AI',
      tag: 'AI Education · Literature',
      summary: 'Nền tảng hỗ trợ dạy và học Ngữ văn: kho tác phẩm, phân tích AI, nhân vật, đề kiểm tra, rubric và quản trị lớp.',
      time: 'Live demo',
      role: 'Full-stack AI education',
      demo: 'https://van-hien.pages.dev/',
      cover: '/shared/projects-media/vanhien/home-desktop.png',
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
          desktop: '/shared/projects-media/vanhien/home-desktop.png',
          mobile: '/shared/projects-media/vanhien/home-mobile.png'
        },
        {
          title: 'Admin dashboard',
          caption: 'Khu vực quản trị dữ liệu, lớp học và hoạt động hệ thống.',
          desktop: '/shared/projects-media/vanhien/admin-dashboard-desktop.png',
          mobile: '/shared/projects-media/vanhien/home-mobile.png',
          contain: true
        },
        {
          title: 'Quản lý người dùng',
          caption: 'Bề mặt kiểm soát user/role để vận hành hệ thống giáo dục đa vai trò.',
          desktop: '/shared/projects-media/vanhien/admin-users-desktop.png',
          mobile: '/shared/projects-media/vanhien/home-mobile.png',
          contain: true
        }
      ]
    },
    {
      id: 'suky',
      category: 'ai',
      featured: false,
      title: 'Sử Ký — Game học Lịch sử với AI',
      tag: 'Classroom Game · AI',
      summary: 'Ứng dụng lớp học Lịch sử 12 dạng game room: giáo viên tạo phiên, AI sinh câu hỏi, học sinh tham gia và hệ thống tổng hợp kết quả.',
      time: 'Live demo',
      role: 'Full-stack classroom game',
      demo: 'https://su-ky.pages.dev/',
      cover: '/shared/projects-media/suky/home-desktop.png',
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
        ['Data', ['D1', 'KV']]
      ],
      screens: [
        {
          title: 'Homepage Sử Ký',
          caption: 'Trang vào lớp học game hóa, phân tách rõ teacher flow và student join.',
          desktop: '/shared/projects-media/suky/home-desktop.png',
          mobile: '/shared/projects-media/suky/home-mobile.png'
        }
      ]
    },
    {
      id: 'lumi',
      category: 'web',
      featured: true,
      title: 'Lumi — Nền tảng Du lịch & Nghỉ dưỡng Trải nghiệm',
      tag: 'Website thương hiệu · Travel Platform',
      summary: 'Website thương hiệu và trải nghiệm khám phá các điểm đến ven biển, kết hợp hình ảnh thiên nhiên sống động và luồng điều hướng tối giản.',
      time: 'Live Product',
      role: 'Kiến trúc giao diện & Tối ưu trải nghiệm',
      demo: '',
      cover: '/studio/assets/mockups/lumi-coast.jpg',
      solves: 'Giúp khách hàng cảm nhận được vẻ đẹp thiên nhiên ngay từ cái nhìn đầu tiên, dễ dàng tra cứu điểm đến và lên kế hoạch hành trình chỉ trong vài thao tác.',
      architecture: [
        'Giao diện Web tối ưu hiệu năng và hình ảnh Retina sắc nét.',
        'Bố cục dạng thẻ nổi mờ kết hợp men sứ cao cấp.',
        'Tương thích hoàn hảo trên mọi kích thước màn hình.'
      ],
      tech: [
        ['Frontend', ['Next.js', 'React', 'Tailwind CSS']],
        ['Animation', ['CSS Transitions', 'Framer Motion']],
        ['Vận hành', ['Cloudflare Pages', 'Vercel']]
      ],
      screens: [
        {
          title: 'Trang chủ Lumi',
          caption: 'Giao diện khám phá hành trình phong cách tối giản hướng biển.',
          desktop: '/studio/assets/mockups/lumi-coast.jpg',
          mobile: '/studio/assets/mockups/lumi-coast.jpg'
        }
      ]
    },
    {
      id: 'notehub',
      category: 'web',
      featured: true,
      title: 'NoteHub — Ứng dụng Quản lý Ghi chú & Kế hoạch',
      tag: 'Ứng dụng · Productivity Workspace',
      summary: 'Không gian làm việc số cho cá nhân và nhóm: tổ chức tài liệu theo cây thư mục, soạn thảo nhanh và theo dõi tiến độ công việc.',
      time: 'Production',
      role: 'Full-stack Developer',
      demo: '',
      cover: '/studio/assets/mockups/mockup_p1_landscape.jpg',
      solves: 'Giải quyết vấn đề thông tin bị rời rạc trên nhiều ứng dụng chat và bảng tính, giúp quản lý toàn bộ tài liệu và việc cần làm tại một nơi duy nhất.',
      architecture: [
        'Cấu trúc sidebar thư mục phân cấp rõ ràng.',
        'Trình soạn thảo ghi chú hỗ trợ checklist và tiến độ trực quan.',
        'Đồng bộ dữ liệu thời gian thực và hỗ trợ làm việc offline.'
      ],
      tech: [
        ['Frontend', ['React', 'TypeScript', 'Tailwind CSS']],
        ['Backend', ['Node.js', 'PostgreSQL']],
        ['State', ['Zustand', 'SWR']]
      ],
      screens: [
        {
          title: 'Giao diện NoteHub',
          caption: 'Sidebar thư mục và trình soạn thảo kế hoạch triển khai trực quan.',
          desktop: '/studio/assets/mockups/mockup_p1_landscape.jpg',
          mobile: '/studio/assets/mockups/mockup_p1_landscape.jpg'
        }
      ]
    },
    {
      id: 'promptai',
      category: 'ai',
      featured: true,
      title: 'PromptAI — Trợ lý AI & Tự động hoá Nội dung',
      tag: 'AI & Tự động hóa · Intelligent Assistant',
      summary: 'Workspace AI kết nối các mô hình ngôn ngữ lớn để tóm tắt cuộc họp, trích xuất việc cần làm và hỗ trợ tạo nội dung tự động.',
      time: 'Live Demo',
      role: 'AI Engineer & Frontend',
      demo: '',
      cover: '/shared/projects-media/engpath/home-desktop.png',
      solves: 'Tự động hóa các thao tác xử lý văn bản thủ công, giảm 80% thời gian phân loại yêu cầu và ghi chép biên bản cuộc họp.',
      architecture: [
        'Khung hội thoại tương tác mượt mà hỗ trợ streaming phản hồi.',
        'Hệ thống gợi ý prompt ngữ cảnh thông minh.',
        'Kết nối trực tiếp với các LLM API hiện đại.'
      ],
      tech: [
        ['Frontend', ['React', 'TypeScript', 'Vite']],
        ['AI/API', ['Gemini', 'OpenAI', 'Workers AI']],
        ['Vận hành', ['Cloudflare Pages']]
      ],
      screens: [
        {
          title: 'Hộp thoại PromptAI',
          caption: 'Giao diện tương tác thông minh với trợ lý AI.',
          desktop: '/shared/projects-media/engpath/home-desktop.png',
          mobile: '/shared/projects-media/engpath/home-desktop.png'
        }
      ]
    },
    {
      id: 'moc',
      category: 'web',
      featured: true,
      title: 'Mộc. — Website Thương mại Đồ gỗ & Gia dụng Bền vững',
      tag: 'Thương mại điện tử · Sustainable Living',
      summary: 'Cửa hàng trực tuyến đồ nội thất và đồ gia dụng thủ công phong cách Bắc Âu tối giản, tôn vinh chất liệu tự nhiên.',
      time: 'Production',
      role: 'Full-stack & Thiết kế',
      demo: '',
      cover: '/studio/assets/mockups/mockup_p4_chair.jpg',
      solves: 'Tạo trải nghiệm mua sắm ấm cúng, sang trọng với tốc độ tải trang nhanh và hình ảnh sản phẩm chân thực.',
      architecture: [
        'Trưng bày sản phẩm dạng carousel và lưới danh mục mượt mà.',
        'Tối ưu hóa hình ảnh webP và lazy load.',
        'Luồng giỏ hàng và đặt hàng tinh gọn.'
      ],
      tech: [
        ['Frontend', ['Next.js', 'React', 'Tailwind CSS']],
        ['E-commerce', ['Cart Engine', 'Stripe/PayOS']],
        ['Vận hành', ['Vercel', 'CDN']]
      ],
      screens: [
        {
          title: 'Sản phẩm Mộc.',
          caption: 'Trải nghiệm xem sản phẩm đồ gỗ tự nhiên tinh tế.',
          desktop: '/studio/assets/mockups/mockup_p4_chair.jpg',
          mobile: '/studio/assets/mockups/mockup_p4_chair.jpg'
        }
      ]
    },
    {
      id: 'workflow',
      category: 'ai',
      featured: true,
      title: 'WorkFlow — Hệ thống Lịch biểu & Điều phối Công việc',
      tag: 'Công cụ nội bộ · Calendar & Task Operations',
      summary: 'Bảng điều khiển lịch trình và điều phối nhiệm vụ theo ngày, hỗ trợ theo dõi tiến độ dự án và quản lý tài nguyên đội nhóm.',
      time: 'Production',
      role: 'Kiến trúc hệ thống & Full-stack',
      demo: '',
      cover: '/shared/projects-media/dealer/admin-dashboard-desktop.png',
      solves: 'Giúp đội ngũ nắm bắt lịch làm việc, cuộc họp và hạn chót trong nháy mắt mà không bị quá tải thông tin.',
      architecture: [
        'Lịch biểu tương tác đa góc nhìn theo ngày và tháng.',
        'Gắn nhãn màu trực quan theo mức độ ưu tiên công việc.',
        'Tích hợp thông báo nhắc hẹn thông minh.'
      ],
      tech: [
        ['Frontend', ['React', 'TypeScript', 'Tailwind CSS']],
        ['Backend', ['Node.js', 'Express', 'PostgreSQL']]
      ],
      screens: [
        {
          title: 'Lịch biểu WorkFlow',
          caption: 'Giao diện quản lý lịch họp và đầu việc hàng ngày.',
          desktop: '/shared/projects-media/dealer/admin-dashboard-desktop.png',
          mobile: '/shared/projects-media/dealer/admin-dashboard-desktop.png'
        }
      ]
    },
    {
      id: 'dulich',
      category: 'travel',
      featured: true,
      title: 'Nền tảng Du lịch Trải nghiệm',
      tag: 'Travel Platform · Booking',
      summary: 'Hệ thống đặt tour và khám phá điểm đến tinh tế với giao diện tối giản, tối ưu trải nghiệm người dùng.',
      time: 'Case Study',
      role: 'Full-stack & UI/UX Design',
      demo: '',
      cover: '/studio/assets/mockups/mockup_p1_landscape.jpg',
      solves: 'Giúp khách hàng dễ dàng tìm kiếm lịch trình phù hợp, xem thông tin chi tiết các tour du lịch và hoàn tất quy trình đặt chỗ trong 3 bước.',
      architecture: [
        'Giao diện Web tối ưu hiệu năng và hình ảnh.',
        'Hệ thống quản lý lịch trình và phân bổ tour linh hoạt.',
        'Xử lý đặt chỗ và thông báo tự động.'
      ],
      tech: [
        ['Frontend', ['Next.js', 'React', 'Tailwind CSS']],
        ['Backend', ['Node.js', 'PostgreSQL']]
      ],
      screens: [
        {
          title: 'Trang chủ du lịch',
          caption: 'Giao diện khám phá hành trình phong cách tối giản.',
          desktop: '/studio/assets/mockups/mockup_p1_landscape.jpg',
          mobile: '/studio/assets/mockups/mockup_p1_landscape.jpg'
        }
      ]
    },
    {
      id: 'nhakhoa',
      category: 'health',
      featured: true,
      title: 'Hệ thống Đặt lịch Nha khoa',
      tag: 'Healthcare · Booking Flow',
      summary: 'Giải pháp đặt lịch khám và tư vấn trực tuyến chuyên nghiệp cho phòng khám nha khoa.',
      time: 'Case Study',
      role: 'Full-stack Developer',
      demo: '',
      cover: '/studio/assets/mockups/mockup_p1_landscape.jpg',
      solves: 'Giảm thiểu tỷ lệ bỏ hẹn và tối ưu hóa thời gian làm việc của bác sĩ thông qua lịch biểu tự động.',
      architecture: [
        'Lịch biểu trực quan với các slot thời gian thời gian thực.',
        'Tích hợp thông báo xác nhận và nhắc hẹn tự động.'
      ],
      tech: [
        ['Frontend', ['React', 'TypeScript']],
        ['Backend', ['Node.js', 'Express', 'PostgreSQL']]
      ],
      screens: []
    },
    {
      id: 'tongkho',
      category: 'ecom',
      featured: true,
      title: 'Tổng Kho Đồ Gỗ Tối Giản',
      tag: 'E-Commerce · Furniture',
      summary: 'Website bán hàng nội thất và đồ gia dụng phong cách Scandinavia tối giản.',
      time: 'Case Study',
      role: 'Full-stack & Design',
      demo: '',
      cover: '/studio/assets/mockups/mockup_p4_chair.jpg',
      solves: 'Trải nghiệm mua sắm mượt mà, trực quan với danh mục sản phẩm nổi bật và luồng giỏ hàng tinh gọn.',
      architecture: [
        'Catalog sản phẩm tốc độ cao tối ưu SEO.',
        'Giỏ hàng và quy trình đặt hàng tinh gọn.'
      ],
      tech: [
        ['Frontend', ['Next.js', 'Tailwind CSS']],
        ['Backend', ['Node.js', 'PostgreSQL']]
      ],
      screens: [
        {
          title: 'Bộ sưu tập nội thất',
          caption: 'Mặt hàng bàn ghế gốm sứ tối giản.',
          desktop: '/studio/assets/mockups/mockup_p4_chair.jpg',
          mobile: '/studio/assets/mockups/mockup_p4_chair.jpg'
        }
      ]
    },
    {
      id: 'uicar',
      category: 'web',
      featured: false,
      title: 'UI Car — Showroom ô tô cao cấp',
      tag: 'Brand Site · Automotive',
      summary: 'Website trình diễn sản phẩm ô tô với visual-first layout, motion nhẹ và trải nghiệm responsive cho browsing trên desktop/mobile.',
      time: 'Live demo',
      role: 'Frontend & visual direction',
      demo: 'https://u-i-car.vercel.app/',
      cover: '/shared/projects-media/uicar/home-desktop.png',
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
          desktop: '/shared/projects-media/uicar/home-desktop.png',
          mobile: '/shared/projects-media/uicar/home-mobile.png'
        }
      ]
    },
    {
      id: 'muong',
      category: 'web',
      featured: false,
      title: 'Mường Culture — Bảo tàng văn hóa số',
      tag: 'Cultural Site · Museum',
      summary: 'Website văn hóa số giới thiệu không gian Mường, trò chơi dân gian, bảo tàng ảo và nội dung khám phá theo hướng trải nghiệm.',
      time: 'Live demo',
      role: 'Frontend & cultural storytelling',
      demo: 'https://u-i-muongculture.vercel.app/',
      cover: '/shared/projects-media/muong/home-desktop.png',
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
          desktop: '/shared/projects-media/muong/home-desktop.png',
          mobile: '/shared/projects-media/muong/home-mobile.png'
        },
        {
          title: 'Hỏi đúm',
          caption: 'Một điểm tương tác văn hóa, dùng để biến nội dung dân gian thành trải nghiệm có nhịp chơi.',
          desktop: '/shared/projects-media/muong/hoi-dum-desktop.png',
          mobile: '/shared/projects-media/muong/home-mobile.png',
          contain: true
        },
        {
          title: 'Bảo tàng ảo',
          caption: 'Không gian trưng bày giúp người xem đi qua nội dung văn hóa theo cảm giác tham quan.',
          desktop: '/shared/projects-media/muong/virtual-museum-desktop.png',
          mobile: '/shared/projects-media/muong/home-mobile.png',
          contain: true
        }
      ]
    }
  ];

  function getProject(projectId) {
    if (!projectId) return null;
    return PROJECT_CASES.find(function(p) { return p.id === projectId; }) || PROJECT_CASES[0];
  }

  var ProjectsCatalog = {
    ICONS: ICONS,
    TECH_CONVEYOR: TECH_CONVEYOR,
    COLORS: COLORS,
    PROJECT_CASES: PROJECT_CASES,
    getProject: getProject
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProjectsCatalog;
  }
  if (global) {
    global.ProjectsCatalog = ProjectsCatalog;
  }
})(typeof window !== 'undefined' ? window : this);
