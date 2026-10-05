/**
 * SINGLE SOURCE OF TRUTH: PROJECTS CATALOG DATA
 * Cung cấp dữ liệu chuẩn hoá cho các concept (Craft Studio, CV)
 * Tách biệt hoàn toàn phần Dữ liệu (Data) khỏi phần Hiển thị (Presentation).
 * 100% hình ảnh định dạng WebP sắc nét, tối ưu hiệu năng toàn diện.
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
    'Three.js': '/shared/icons/threejs.svg',
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
    'Cloudflare Pages': '/shared/icons/cloudflare.svg',
    D1: '/shared/icons/cloudflare.svg',
    KV: '/shared/icons/cloudflare.svg',
    'Workers AI': '/shared/icons/ai.svg',
    Gemini: '/shared/icons/ai.svg',
    NestJS: '/shared/icons/nestjs.svg',
    Prisma: '/shared/icons/postgresql.svg',
    Nginx: '/shared/icons/vps.svg',
    SSE: '/shared/icons/realtime.svg'
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
    D1: '#003B57',
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
    SSE: '#0891b2',
    WebSocket: '#1f2937',
    'Cloudflare Pages': '#f48120',
    KV: '#f48120',
    'Zalo OA': '#0068ff',
    Realtime: '#0891b2',
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
      demo: 'https://zaloai.webinprogress.click/',
      cover: '/shared/projects-media/fab/dashboard-desktop.webp',
      solves: 'Doanh nghiệp bán hàng qua Zalo OA thường gặp tình trạng thông tin phân mảnh nghiêm trọng: tin nhắn nằm rải rác, nhân viên phải ghi nhớ thủ công thực đơn và giá, dễ bỏ sót đơn hàng giờ cao điểm. FabSolution hợp nhất toàn bộ hội thoại, đơn hàng, AI nhận diện ý định và trạng thái vận hành vào một không gian tập trung.',
      architecture: [
        'Zalo Bridge Worker – duy trì kết nối WebSocket và Webhook song công bảo mật với hệ sinh thái Zalo OA.',
        'AI Context Engine – phân loại hội thoại tự động, trích xuất ý định đặt món và gợi ý phản hồi chuẩn xác theo menu.',
        'Order State Machine – đồng bộ giỏ hàng, bảng giá và trạng thái xử lý đơn hàng tức thì cho chủ cửa hàng.',
        'Operations Workspace – giao diện tối ưu tốc độ phản hồi dưới 1 giây, hạn chế tối đa thao tác nhập liệu thủ công.'
      ],
      tech: [
        ['Frontend', ['React', 'TypeScript']],
        ['Backend', ['Node.js', 'Redis']],
        ['Hạ tầng', ['Docker', 'Cloudflare']]
      ],
      screens: [
        {
          title: 'Tổng quan vận hành',
          caption: 'Bảng điều khiển trung tâm theo dõi doanh số, số hội thoại mới, đơn hàng cần giao và trạng thái AI bot.',
          desktop: '/shared/projects-media/fab/dashboard-desktop.webp',
          mobile: '/shared/projects-media/fab/dashboard-mobile.webp'
        },
        {
          title: 'Hộp tin Zalo hợp nhất',
          caption: 'Màn hình hội thoại đa khách hàng tích hợp trợ lý AI gợi ý trả lời và chốt đơn ngay trong khung chat.',
          desktop: '/shared/projects-media/fab/hop-tin-desktop.webp',
          mobile: '/shared/projects-media/fab/hop-tin-mobile.webp'
        },
        {
          title: 'Quản lý đơn hàng',
          caption: 'Theo dõi tiến trình xử lý đơn, lịch sử giao hàng và doanh thu thời gian thực của cửa hàng.',
          desktop: '/shared/projects-media/fab/don-hang-desktop.webp',
          mobile: '/shared/projects-media/fab/don-hang-mobile.webp'
        },
        {
          title: 'Thực đơn & Sản phẩm',
          caption: 'Quản lý catalog món ăn, giá bán và tình trạng còn/hết hàng để AI tự động tư vấn chính xác.',
          desktop: '/shared/projects-media/fab/thuc-don-desktop.webp',
          mobile: '/shared/projects-media/fab/thuc-don-mobile.webp'
        },
        {
          title: 'Kịch bản tư vấn AI',
          caption: 'Cấu hình luồng phản hồi thông minh, câu hỏi thường gặp và điều kiện kích hoạt chốt sale tự động.',
          desktop: '/shared/projects-media/fab/kich-ban-desktop.webp',
          mobile: '/shared/projects-media/fab/kich-ban-mobile.webp'
        },
        {
          title: 'Kết nối Zalo OA',
          caption: 'Trung tâm quản lý webhook, đồng bộ token xác thực và trạng thái hoạt động của kênh OA.',
          desktop: '/shared/projects-media/fab/ket-noi-desktop.webp',
          mobile: '/shared/projects-media/fab/ket-noi-mobile.webp'
        },
        {
          title: 'Nhật ký hệ thống',
          caption: 'Giám sát chi tiết các sự kiện gửi nhận tin, webhook payloads và log kích hoạt kịch bản.',
          desktop: '/shared/projects-media/fab/nhat-ky-desktop.webp',
          mobile: '/shared/projects-media/fab/nhat-ky-mobile.webp'
        },
        {
          title: 'Bảng quản trị',
          caption: 'Khu vực quản lý tài khoản nhân viên, phân quyền cửa hàng và cấu hình tham số hệ thống.',
          desktop: '/shared/projects-media/fab/admin-desktop.webp',
          mobile: '/shared/projects-media/fab/admin-mobile.webp'
        },
        {
          title: 'Cổng đăng nhập hệ thống',
          caption: 'Giao diện xác thực tài khoản quản trị và nhân viên vận hành Zalo AI Workspace.',
          desktop: '/shared/projects-media/fab/login-desktop.webp',
          mobile: '/shared/projects-media/fab/login-mobile.webp'
        }
      ]
    },
    {
      id: 'dealer',
      category: 'ecom',
      featured: true,
      title: 'Thương mại điện tử bán sỉ (B2B)',
      tag: 'B2B Commerce · Wholesale Ops',
      summary: 'Nền tảng đặt hàng và vận hành phân phối bán buôn cho mạng lưới hơn 170 đại lý: catalog sỉ, công nợ, quản trị đơn và vận hành VPS.',
      time: 'Production',
      role: 'Kiến trúc hệ thống & Full-stack Lead',
      demo: 'https://hienchina.com/',
      cover: '/shared/projects-media/dealer/home-desktop.webp',
      solves: 'Kinh doanh bán sỉ ngành hàng thời trang và gia dụng có quy mô hàng trăm đơn mỗi ngày nhưng việc đặt hàng qua Zalo gây sai sót mã hàng, nhầm lẫn giá chiết khấu đại lý và thất thoát tồn kho. Dự án xây dựng cổng thương mại B2B chuẩn hóa luồng đặt sỉ, quản lý hạn mức công nợ và cập nhật kho theo thời gian thực.',
      architecture: [
        'Next.js Storefront – giao diện tối ưu tốc độ tải trang, phân tách rõ luồng khách lẻ và cổng đăng nhập đại lý xem giá sỉ.',
        'NestJS Core API – kiến trúc module hoá phân lớp, bảo vệ nghiêm ngặt các nghiệp vụ giá bán sỉ và phân quyền RBAC.',
        'PostgreSQL & Prisma – quản lý snapshot giá tại thời điểm đặt đơn, chống sai lệch doanh thu khi thay đổi bảng giá.',
        'Docker & Nginx trên VPS – thiết lập reverse proxy cân bằng tải, nén gzip và tự động gia hạn chứng chỉ SSL.'
      ],
      tech: [
        ['Frontend', ['Next.js', 'TypeScript']],
        ['Backend', ['NestJS']],
        ['Database', ['PostgreSQL']],
        ['Hạ tầng', ['Docker']]
      ],
      screens: [
        {
          title: 'Mặt tiền thương mại',
          caption: 'Cửa hàng trực tuyến giới thiệu sản phẩm xuất khẩu nổi bật, banner khuyến mãi và định hướng đại lý.',
          desktop: '/shared/projects-media/dealer/home-desktop.webp',
          mobile: '/shared/projects-media/dealer/home-mobile.webp'
        },
        {
          title: 'Danh mục sản phẩm',
          caption: 'Lưới sản phẩm phân cấp theo ngành hàng, bộ lọc linh hoạt theo mức giá, mã hàng và phân loại.',
          desktop: '/shared/projects-media/dealer/catalog-desktop.webp',
          mobile: '/shared/projects-media/dealer/catalog-mobile.webp'
        },
        {
          title: 'Chi tiết sản phẩm',
          caption: 'Màn hình sản phẩm hiển thị thông số chi tiết, bảng kích cỡ, tình trạng tồn kho và chính sách sỉ.',
          desktop: '/shared/projects-media/dealer/product-detail-desktop.webp',
          mobile: '/shared/projects-media/dealer/product-detail-mobile.webp'
        },
        {
          title: 'Admin dashboard',
          caption: 'Trung tâm chỉ huy dành cho quản trị: theo dõi tổng doanh thu, biểu đồ đơn hàng và thông số kinh doanh.',
          desktop: '/shared/projects-media/dealer/admin-dashboard-desktop.webp',
          mobile: '/shared/projects-media/dealer/admin-dashboard-mobile.webp'
        },
        {
          title: 'Quản trị đơn hàng',
          caption: 'Theo dõi chi tiết trạng thái đơn từ lúc tạo, duyệt thanh toán, đóng gói đến hoàn tất giao hàng.',
          desktop: '/shared/projects-media/dealer/admin-orders-desktop.webp',
          mobile: '/shared/projects-media/dealer/admin-orders-mobile.webp'
        },
        {
          title: 'Quản trị sản phẩm & kho',
          caption: 'Quản lý kho hàng tập trung, cập nhật nhanh số lượng tồn, giá nhập và giá bán buôn chiết khấu.',
          desktop: '/shared/projects-media/dealer/admin-products-desktop.webp',
          mobile: '/shared/projects-media/dealer/admin-products-mobile.webp'
        },
        {
          title: 'Quản lý đại lý',
          caption: 'Quản lý hồ sơ hơn 170 đại lý, cấp quyền truy cập giá sỉ và theo dõi lịch sử doanh số từng tài khoản.',
          desktop: '/shared/projects-media/dealer/admin-dealers-desktop.webp',
          mobile: '/shared/projects-media/dealer/admin-dealers-mobile.webp'
        },
        {
          title: 'Đối soát thanh toán',
          caption: 'Quản lý dòng tiền, xác nhận giao dịch chuyển khoản ngân hàng và kiểm soát công nợ đại lý.',
          desktop: '/shared/projects-media/dealer/admin-payments-desktop.webp',
          mobile: '/shared/projects-media/dealer/admin-payments-mobile.webp'
        },
        {
          title: 'Không gian đại lý',
          caption: 'Bảng điều khiển cá nhân cho đại lý theo dõi các đơn đặt sỉ, tình trạng giao vận và lịch sử thanh toán.',
          desktop: '/shared/projects-media/dealer/dealer-account-desktop.webp',
          mobile: '/shared/projects-media/dealer/dealer-account-mobile.webp'
        },
        {
          title: 'Giỏ hàng đặt sỉ',
          caption: 'Giao diện đặt sỉ số lượng lớn, tự động áp dụng bảng giá bậc thang theo khối lượng đơn đặt hàng.',
          desktop: '/shared/projects-media/dealer/cart-desktop.webp',
          mobile: '/shared/projects-media/dealer/cart-mobile.webp'
        }
      ]
    },
    {
      id: 'nostime',
      category: 'ecom',
      featured: true,
      title: 'Nostime — Boutique đồng hồ cao cấp',
      tag: 'Luxury Boutique · ERP & Commerce',
      summary: 'Showcase và nền tảng phân phối đồng hồ cao cấp: quản trị từng mã đồng hồ độc bản, tra cứu đơn hàng, danh mục thương hiệu và vận hành Docker trên VPS.',
      time: 'Production',
      role: 'Kiến trúc hệ thống & Full-stack Lead',
      demo: 'https://nostime-clock.vercel.app/',
      cover: '/shared/projects-media/nostime/home-desktop.webp',
      solves: 'Kinh doanh đồng hồ xa xỉ đòi hỏi mỗi chiếc đồng hồ là một dòng dữ liệu độc bản với hồ sơ kiểm định, bảo hành và giá biến động theo thời gian. Nostime xây dựng giao diện bán lẻ tối giản chuẩn boutique Thụy Sĩ, tách biệt hoàn toàn dữ liệu hàng sẵn sàng bán với sổ cái nội bộ.',
      architecture: [
        'Next.js Storefront – giao diện trình diễn sản phẩm đạt độ hoàn thiện cao, tối ưu typography và hiển thị ảnh đa độ phân giải.',
        'Drizzle ORM & PostgreSQL – mô hình hoá dữ liệu đồng hồ theo sổ cái độc bản, quản lý trạng thái niêm yết và lịch sử giao dịch.',
        'Tailwind CSS & Token System – quy chuẩn bảng màu, khoảng cách và visual hierarchy theo phong cách đồng hồ cổ điển cao cấp.',
        'Docker VPS Deployment – container hoá toàn diện dịch vụ web, cơ sở dữ liệu và reverse proxy đảm bảo tính độc lập.'
      ],
      tech: [
        ['Frontend', ['Next.js', 'Tailwind CSS', 'TypeScript']],
        ['Cơ sở dữ liệu', ['PostgreSQL']],
        ['Hạ tầng', ['Docker']]
      ],
      screens: [
        {
          title: 'Mặt tiền Boutique đồng hồ',
          caption: 'Không gian trưng bày đồng hồ xa xỉ với typography tinh tế, bộ sưu tập giới hạn và phong cách tối giản.',
          desktop: '/shared/projects-media/nostime/home-desktop.webp',
          mobile: '/shared/projects-media/nostime/home-mobile.webp'
        },
        {
          title: 'Bộ sưu tập chế tác',
          caption: 'Danh mục các dòng đồng hồ tuyển chọn từ các nhà chế tác Thụy Sĩ danh tiếng.',
          desktop: '/shared/projects-media/nostime/collections-desktop.webp',
          mobile: '/shared/projects-media/nostime/collections-mobile.webp'
        },
        {
          title: 'Thương hiệu đối tác',
          caption: 'Giới thiệu các thương hiệu đồng hồ huyền thoại: Rolex, Patek Philippe, Audemars Piguet, Omega.',
          desktop: '/shared/projects-media/nostime/brands-desktop.webp',
          mobile: '/shared/projects-media/nostime/brands-mobile.webp'
        },
        {
          title: 'Dịch vụ chuyên biệt',
          caption: 'Chính sách thẩm định, ký gửi, bảo dưỡng và tư vấn sưu tầm đồng hồ chuyên nghiệp.',
          desktop: '/shared/projects-media/nostime/services-desktop.webp',
          mobile: '/shared/projects-media/nostime/services-mobile.webp'
        },
        {
          title: 'Câu chuyện thương hiệu',
          caption: 'Triết lý gìn giữ giá trị thời gian và niềm đam mê với nghệ thuật chế tác cơ khí vi mô.',
          desktop: '/shared/projects-media/nostime/about-desktop.webp',
          mobile: '/shared/projects-media/nostime/about-mobile.webp'
        },
        {
          title: 'Tạp chí thời gian (Journal)',
          caption: 'Các bài viết phân tích chiều sâu về lịch sử phát triển, công nghệ bộ máy và xu hướng sưu tầm.',
          desktop: '/shared/projects-media/nostime/journal-desktop.webp',
          mobile: '/shared/projects-media/nostime/journal-mobile.webp'
        },
        {
          title: 'Giỏ hàng & Đặt hẹn',
          caption: 'Quy trình chọn mua và đặt lịch hẹn xem đồng hồ trực tiếp tại phòng trưng bày.',
          desktop: '/shared/projects-media/nostime/cart-desktop.webp',
          mobile: '/shared/projects-media/nostime/cart-mobile.webp'
        },
        {
          title: 'Tra cứu tình trạng đơn hàng',
          caption: 'Cổng tra cứu tiến độ xử lý và hành trình vận chuyển đồng hồ dành cho khách hàng.',
          desktop: '/shared/projects-media/nostime/lookup-desktop.webp',
          mobile: '/shared/projects-media/nostime/lookup-mobile.webp'
        },
        {
          title: 'Liên hệ tư vấn VIP',
          caption: 'Kênh liên hệ trực tiếp với chuyên gia thẩm định và địa chỉ phòng trưng bày Nostime.',
          desktop: '/shared/projects-media/nostime/contact-desktop.webp',
          mobile: '/shared/projects-media/nostime/contact-mobile.webp'
        }
      ]
    },
    {
      id: 'engpath',
      category: 'ai',
      featured: true,
      title: 'EngPath — Giáo dục tiếng Anh AI',
      tag: 'AI Education · English Lab',
      summary: 'Ứng dụng luyện tiếng Anh THPT với luồng sư phạm độc lập cho học sinh và giáo viên: bài học, điểm số, AI feedback và quản trị trên Cloudflare.',
      time: 'Live demo',
      role: 'Kiến trúc hệ thống & Full-stack AI',
      demo: 'https://edupath-english.pages.dev/',
      cover: '/shared/projects-media/engpath/landing-desktop.webp',
      solves: 'Học sinh THPT ôn thi tốt nghiệp thường thiếu công cụ làm bài có phản hồi ngữ pháp tức thì, trong khi giáo viên mất hàng giờ biên soạn đề thi bám sát ma trận sách giáo khoa mới. EngPath kết nối cả hai bên trong một nền tảng: học sinh luyện tập có AI hỗ trợ sửa lỗi, giáo viên kiểm soát chất lượng nội dung và tiến độ lớp học.',
      architecture: [
        'Hono on Cloudflare Edge – bộ API serverless siêu nhẹ phản hồi dưới 50ms, vận hành toàn cầu không cần quản trị máy chủ.',
        'Cloudflare D1 & KV – lưu trữ cơ sở dữ liệu quan hệ SQLite phân tán, đồng bộ tiến độ học tập và bộ đệm tốc độ cao.',
        'Workers AI Integration – ứng dụng các mô hình Gemma và Llama tinh chỉnh chuyên biệt cho phân tích ngữ pháp và sinh đề.',
        'Two-Sided Learning Workflow – quy trình sư phạm khép kín đảm bảo giáo viên luôn có quyền duyệt cuối cùng trước khi phát hành đề.'
      ],
      tech: [
        ['Frontend', ['React', 'TypeScript']],
        ['Hạ tầng & Edge', ['Hono', 'Cloudflare']]
      ],
      screens: [
        {
          title: 'Trang chủ giáo dục',
          caption: 'Cổng vào nền tảng học tiếng Anh THPT thế hệ mới, định vị rõ vai trò giáo viên và lộ trình của học sinh.',
          desktop: '/shared/projects-media/engpath/landing-desktop.webp',
          mobile: '/shared/projects-media/engpath/landing-mobile.webp'
        },
        {
          title: 'Bảng điều khiển giáo viên',
          caption: 'Tổng quan học sinh trực tuyến, điểm số trung bình, mức tiêu thụ AI token và kho học liệu đang quản trị.',
          desktop: '/shared/projects-media/engpath/teacher-dashboard-desktop.webp',
          mobile: '/shared/projects-media/engpath/teacher-dashboard-mobile.webp'
        },
        {
          title: 'Quản lý lớp & học sinh',
          caption: 'Không gian phân bổ lớp, quản lý danh sách học viên và theo dõi chi tiết điểm số từng bài thi.',
          desktop: '/shared/projects-media/engpath/teacher-classes-desktop.webp',
          mobile: '/shared/projects-media/engpath/teacher-classes-mobile.webp'
        },
        {
          title: 'Soạn bài & Đề thi AI',
          caption: 'Công cụ hỗ trợ giáo viên tạo nhanh ngân hàng từ vựng, ngữ pháp và đề kiểm tra tự động bằng AI.',
          desktop: '/shared/projects-media/engpath/teacher-knowledge-desktop.webp',
          mobile: '/shared/projects-media/engpath/teacher-knowledge-mobile.webp'
        },
        {
          title: 'Thống kê & Báo cáo học tập',
          caption: 'Phân tích điểm chuẩn, tỷ lệ sai sót theo từng điểm ngữ pháp và hiệu quả học tập toàn khối.',
          desktop: '/shared/projects-media/engpath/teacher-analytics-desktop.webp',
          mobile: '/shared/projects-media/engpath/teacher-analytics-mobile.webp'
        },
        {
          title: 'Lộ trình học theo khối',
          caption: 'Giao diện trực quan cho học sinh chọn khối 10, 11, 12 và mở khóa các chặng bài học theo chương trình.',
          desktop: '/shared/projects-media/engpath/student-roadmap-desktop.webp',
          mobile: '/shared/projects-media/engpath/student-roadmap-mobile.webp'
        },
        {
          title: 'Luyện từ vựng chuyên sâu',
          caption: 'Thẻ học từ vựng ngữ cảnh tích hợp phiên âm chuẩn, phát âm AI và ví dụ thực tế trong câu.',
          desktop: '/shared/projects-media/engpath/student-vocab-desktop.webp',
          mobile: '/shared/projects-media/engpath/student-vocab-mobile.webp'
        },
        {
          title: 'Bảng xếp hạng & Thành tích',
          caption: 'Cơ chế gamification thúc đẩy động lực học tập qua điểm kinh nghiệm (XP), chuỗi ngày học và huy hiệu đạt được.',
          desktop: '/shared/projects-media/engpath/student-achievements-desktop.webp',
          mobile: '/shared/projects-media/engpath/student-achievements-mobile.webp'
        }
      ]
    },
    {
      id: 'suky',
      category: 'ai',
      featured: true,
      title: 'Sử Ký — Game học Lịch sử với AI',
      tag: 'Classroom Game · EdTech AI',
      summary: 'Ứng dụng lớp học Lịch sử 12 dạng game đấu trường: trích xuất DOCX, AI sinh câu hỏi theo thang Bloom, phòng thi không cần tài khoản.',
      time: 'Live demo',
      role: 'Kiến trúc hệ thống & Full-stack',
      demo: 'https://su-ky.pages.dev/',
      cover: '/shared/projects-media/suky/landing-desktop.webp',
      solves: 'Môn Lịch sử thường bị xem là khô khan, học sinh khó ghi nhớ chuỗi sự kiện dài và giáo viên thiếu công cụ kiểm tra nhanh đầu giờ có tính tương tác cao. Sử Ký biến giáo án thành đấu trường thi đấu tương tác trực tiếp: học sinh tham gia bằng mã PIN không cần tạo tài khoản, AI hỗ trợ sinh câu hỏi theo mức độ nhận thức.',
      architecture: [
        'Browser-side DOCX Parser – trích xuất nội dung bài giảng trực tiếp trên trình duyệt bằng thư viện Mammoth.',
        'Gemma 3 on Workers AI – sinh câu hỏi tự động bám sát ma trận 4 cấp độ tư duy: Nhận biết, Thông hiểu, Vận dụng, Phân tích.',
        'Multi-Mode Engine – hỗ trợ 4 chế độ chơi độc đáo: Tăng tốc (trắc nghiệm), Thẩm phán (đúng/sai), Chùm câu hỏi và Nhập vai lịch sử.',
        'Serverless D1 Room State – quản lý trạng thái phòng thi, thu nhận kết quả nộp bài song song và tính điểm xếp hạng tự động.'
      ],
      tech: [
        ['Frontend', ['React', 'Three.js']],
        ['Hạ tầng Edge', ['Cloudflare']]
      ],
      screens: [
        {
          title: 'Đấu trường lịch sử 12',
          caption: 'Trang chủ thiết kế phong cách thời không với Three.js, điểm vào nhanh cho học sinh nhập mã phòng thi đấu.',
          desktop: '/shared/projects-media/suky/landing-desktop.webp',
          mobile: '/shared/projects-media/suky/landing-mobile.webp'
        },
        {
          title: 'Bảng điều khiển giáo viên',
          caption: 'Trung tâm quản trị phòng thi, theo dõi danh sách lớp học và quản lý các bộ câu hỏi đã duyệt.',
          desktop: '/shared/projects-media/suky/teacher-dashboard-desktop.webp',
          mobile: '/shared/projects-media/suky/teacher-dashboard-mobile.webp'
        },
        {
          title: 'Tạo phòng thi & Sinh câu hỏi AI',
          caption: 'Giáo viên chọn bài học, số lượng câu và tỷ lệ nhận thức để AI tạo bản nháp kiểm duyệt trước khi phát đề.',
          desktop: '/shared/projects-media/suky/teacher-create-room-desktop.webp',
          mobile: '/shared/projects-media/suky/teacher-create-room-mobile.webp'
        },
        {
          title: 'Kho nguồn kiến thức',
          caption: 'Quản lý tài liệu lịch sử theo từng chuyên đề, hỗ trợ tải lên tệp Word giáo án để bóc tách tri thức.',
          desktop: '/shared/projects-media/suky/teacher-sources-desktop.webp',
          mobile: '/shared/projects-media/suky/teacher-sources-mobile.webp'
        },
        {
          title: 'Quản lý phòng thi đấu',
          caption: 'Theo dõi các phòng thi đang mở, số học sinh đang kết nối và trạng thái hoàn thành bài thi.',
          desktop: '/shared/projects-media/suky/teacher-rooms-desktop.webp',
          mobile: '/shared/projects-media/suky/teacher-rooms-mobile.webp'
        },
        {
          title: 'Chế độ thi đấu Tăng tốc',
          caption: 'Giao diện thi đấu của học sinh với đồng hồ đếm ngược kịch tính, phản hồi âm thanh và tính điểm tức thì.',
          desktop: '/shared/projects-media/suky/student-tang-toc-desktop.webp',
          mobile: '/shared/projects-media/suky/student-tang-toc-mobile.webp'
        },
        {
          title: 'Bảng quản trị hệ thống',
          caption: 'Khu vực quản lý danh sách giáo viên, phân bổ tài nguyên AI token và kiểm tra nhật ký vận hành.',
          desktop: '/shared/projects-media/suky/admin-panel-desktop.webp',
          mobile: '/shared/projects-media/suky/admin-panel-mobile.webp'
        }
      ]
    },
    {
      id: 'conhon',
      category: 'backend',
      featured: true,
      title: 'Văn hóa dân gian Cổ Nhơn',
      tag: 'Realtime Game · Heritage Digitization',
      summary: 'Nền tảng số hóa trò chơi dân gian Cổ Nhơn Bình Định: phiên chơi, hạn mức, thanh toán QR tự động, kết quả và cộng đồng.',
      time: 'Production mùa vụ',
      role: 'Kiến trúc realtime, payment & vận hành',
      demo: 'https://conhonannhonbinhdinh.vn/',
      cover: '/shared/projects-media/conhon/home-desktop.webp',
      solves: 'Trò chơi dân gian Cổ Nhơn (An Nhơn, Bình Định) là nét văn hóa đặc sắc mỗi dịp Tết đến xuân về. Việc ghi tịch thủ công trước đây dễ xảy ra nhầm lẫn số, quá tải hạn mức từng con vật và khó đối soát thanh toán. Dự án số hóa toàn bộ quy trình: người chơi đặt tịch qua web, thanh toán VietQR tự động, theo dõi mở Thai thời gian thực và tra cứu lịch sử minh bạch.',
      architecture: [
        'PostgreSQL Row-level Lock – dùng SELECT FOR UPDATE bảo đảm tính toàn vẹn, tuyệt đối chống bán vượt hạn mức 36 con tịch.',
        'Idempotent Payment Webhook – tiếp nhận thông báo thanh toán PayOS tự động, chống duplicate giao dịch bằng chữ ký HMAC và Redis lock.',
        'Realtime Server-Sent Events (SSE) – phát sóng kết quả mở Thai đồng loạt đến hàng nghìn người theo dõi trực tuyến.',
        'Di sản văn hoá số – tái hiện hình ảnh 36 con tịch dân gian bằng phong cách đồ họa sắc nét trên nền tảng web hiện đại.'
      ],
      tech: [
        ['Frontend', ['React', 'TypeScript']],
        ['Backend & Cache', ['Node.js', 'Redis']],
        ['Cơ sở dữ liệu', ['PostgreSQL']],
        ['Thanh toán & Infra', ['PayOS', 'Docker']]
      ],
      screens: [
        {
          title: 'Trang chủ Cổ Nhơn',
          caption: 'Cửa ngõ di sản dân gian: giới thiệu mùa chơi, bài vị, đồng hồ đếm ngược phiên mở Thai và tổng quan quy tắc.',
          desktop: '/shared/projects-media/conhon/home-desktop.webp',
          mobile: '/shared/projects-media/conhon/home-mobile.webp'
        },
        {
          title: 'Bàn chọn 36 con tịch',
          caption: 'Giao diện chọn tịch trực quan theo từng hạng bảng với định mức hạn ngạch thời gian thực, chống bán vượt số lượng.',
          desktop: '/shared/projects-media/conhon/chon-thai-desktop.webp',
          mobile: '/shared/projects-media/conhon/chon-thai-mobile.webp'
        },
        {
          title: 'Khai mở câu Thai',
          caption: 'Trưng bày câu thai ẩn ý của phiên chơi, hỗ trợ người chơi suy luận câu đố dân gian trước giờ mở thưởng.',
          desktop: '/shared/projects-media/conhon/cau-thai-desktop.webp',
          mobile: '/shared/projects-media/conhon/cau-thai-mobile.webp'
        },
        {
          title: 'Bảng vàng kết quả',
          caption: 'Công bố kết quả mở thưởng theo từng phiên, tra cứu tịch trúng thưởng minh bạch và thống kê tần suất xuất hiện.',
          desktop: '/shared/projects-media/conhon/ket-qua-desktop.webp',
          mobile: '/shared/projects-media/conhon/ket-qua-mobile.webp'
        },
        {
          title: 'Ý nghĩa 36 con tịch',
          caption: 'Tư liệu chi tiết về nguồn gốc, quy luật và giá trị văn hóa độc đáo của 36 con tịch Cổ Nhơn An Nhơn.',
          desktop: '/shared/projects-media/conhon/lich-su-desktop.webp',
          mobile: '/shared/projects-media/conhon/lich-su-mobile.webp'
        },
        {
          title: 'Hướng dẫn quy luật chơi',
          caption: 'Bản hướng dẫn minh bạch cho người mới bắt đầu về cách thức chọn tịch, tỷ lệ trả thưởng và nhận thưởng.',
          desktop: '/shared/projects-media/conhon/huong-dan-desktop.webp',
          mobile: '/shared/projects-media/conhon/huong-dan-mobile.webp'
        },
        {
          title: 'Cổng đăng nhập đặt tịch',
          caption: 'Giao diện xác thực bảo mật tài khoản người chơi để tham gia đặt tịch các phiên mở Thai.',
          desktop: '/shared/projects-media/conhon/dang-nhap-desktop.webp',
          mobile: '/shared/projects-media/conhon/dang-nhap-mobile.webp'
        }
      ]
    },
    {
      id: 'vanhien',
      category: 'ai',
      featured: true,
      title: 'Văn Hiến — Dạy học Ngữ văn với AI',
      tag: 'AI Education · Literature Lab',
      summary: 'Nền tảng hỗ trợ dạy và học Ngữ văn: kho tác phẩm, đối thoại nhân vật AI, đề kiểm tra chuẩn ma trận và quản trị sư phạm.',
      time: 'Live demo',
      role: 'Kiến trúc sản phẩm & Full-stack AI',
      demo: '',
      cover: '/shared/projects-media/vanhien/home-desktop.webp',
      solves: 'Giảng dạy Ngữ văn THPT thường gặp trở ngại khi học sinh khó liên hệ sâu sắc với tâm lý các nhân vật văn học cổ điển, trong khi việc chấm bài luận tự luận đòi hỏi lượng lớn thời gian của giáo viên. Văn Hiến đưa tác phẩm văn học thành không gian tương tác sống động: học sinh đối thoại trực tiếp với nhân vật qua AI, giáo viên có công cụ chấm theo barem điểm Bộ Giáo dục.',
      architecture: [
        'Multi-Role Education Flow – phân quyền độc lập giữa giáo viên quản trị đề thi và học sinh tham gia phòng luyện tập.',
        'Character Persona Engine – mô phỏng ngôn ngữ, tính cách và góc nhìn thời đại của các nhân vật văn học kinh điển qua LLM.',
        'Rubric-based Essay Grading – thuật toán đối chiếu bài làm học sinh với tiêu chuẩn chấm điểm sư phạm, chỉ ra điểm cần cải thiện.',
        'Serverless Edge Infrastructure – triển khai trên Cloudflare Pages, D1 và Workers AI giúp giảm 90% chi phí vận hành hạ tầng.'
      ],
      tech: [
        ['Frontend', ['React', 'TypeScript']],
        ['Hạ tầng Edge', ['Cloudflare']]
      ],
      screens: [
        {
          title: 'Trang chủ Văn Hiến',
          caption: 'Điểm khởi đầu khám phá kho tàng văn học Việt Nam, kết nối bài giảng truyền thống với công nghệ AI tương tác.',
          desktop: '/shared/projects-media/vanhien/home-desktop.webp',
          mobile: '/shared/projects-media/vanhien/home-mobile.webp'
        },
        {
          title: 'Bảng điều khiển giáo viên',
          caption: 'Khu vực quản trị lớp học, theo dõi bài nộp của học sinh và phân tích biểu đồ năng lực theo từng tác phẩm.',
          desktop: '/shared/projects-media/vanhien/teacher-dashboard-desktop.webp',
          mobile: '/shared/projects-media/vanhien/teacher-dashboard-mobile.webp'
        },
        {
          title: 'Ma trận đề thi Ngữ văn AI',
          caption: 'Hệ thống hỗ trợ giáo viên xây dựng nhanh đề kiểm tra tự luận và trắc nghiệm bám sát cấu trúc đề thi quốc gia.',
          desktop: '/shared/projects-media/vanhien/teacher-ai-exam-desktop.webp',
          mobile: '/shared/projects-media/vanhien/teacher-ai-exam-mobile.webp'
        },
        {
          title: 'Thiết lập nhân vật văn học',
          caption: 'Cấu hình tính cách, bối cảnh tâm lý và nguồn trích dẫn tác phẩm để AI nhập vai chính xác.',
          desktop: '/shared/projects-media/vanhien/teacher-character-prompt-desktop.webp',
          mobile: '/shared/projects-media/vanhien/teacher-character-prompt-mobile.webp'
        },
        {
          title: 'Phòng thi & Bài làm học sinh',
          caption: 'Không gian làm bài kiểm tra trực tuyến có kiểm soát thời gian, chống sao chép và hỗ trợ dàn ý thông minh.',
          desktop: '/shared/projects-media/vanhien/student-exam-room-desktop.webp',
          mobile: '/shared/projects-media/vanhien/student-exam-room-mobile.webp'
        },
        {
          title: 'Đối thoại cùng nhân vật AI',
          caption: 'Trải nghiệm nhập vai độc đáo: học sinh trò chuyện trực tiếp với nhân vật văn học để hiểu sâu động cơ và tâm lý.',
          desktop: '/shared/projects-media/vanhien/student-character-chat-desktop.webp',
          mobile: '/shared/projects-media/vanhien/student-character-chat-mobile.webp'
        },
        {
          title: 'Vũ trụ tác phẩm đa chiều',
          caption: 'Bản đồ tương tác kết nối các tác phẩm văn học theo giai đoạn lịch sử, trào lưu tư tưởng và tác giả.',
          desktop: '/shared/projects-media/vanhien/student-multiverse-desktop.webp',
          mobile: '/shared/projects-media/vanhien/student-multiverse-mobile.webp'
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
