# Freelance Profile Operations Hub

Hệ thống phát triển và vận hành **Portfolio** và **Curriculum Vitae (CV)** của **Nguyễn Xuân Lĩnh (Xlinhx)**.

---

## 🏛️ Kiến Trúc Hệ Thống (Zero Bloat Architecture)

Workspace được thiết kế tinh gọn theo đúng 2 sản phẩm cốt lõi (Portfolio & CV) và tầng metadata tương đối kết nối GitHub:

```
p:\freelance-profile-ops/
│
├── 📁 docs/                          [Metadata tương đối & Con trỏ GitHub Repos]
│   ├── projects-metadata.md          # Sổ bộ metadata tương đối của 12 dự án + lệnh gh CLI
│   └── creator-profile.md            # Thông tin tác giả, rate Upwork $16/hr, links chính thức
│
├── 📁 brand-system/                  [Tài sản nhận diện phục vụ hiển thị Web]
│   ├── guidelines/                   # Quy chuẩn mỹ thuật, bảng màu, triết lý thủ công số (Xlinhx)
│   ├── marks/                        # Logo chính thức (XL Scene, transparent, wordmark)
│   └── references/                   # Mockup chuẩn 1:1 từ Designer (Ground Truth visual)
│
├── 📁 frontend-apps/                 [Showcases hiển thị: Portfolio & CV]
│   │
│   ├── 📁 shared/                    # TẦNG DÙNG CHUNG DUY NHẤT (Single Source of Truth)
│   │   ├── data/projects-catalog.js  # 100% dữ liệu hiển thị case studies cho các concept
│   │   ├── icons/                    # 100% SVG icons công nghệ (React, Node, Python, AWS...)
│   │   ├── identity/                 # Favicon, avatar hồ sơ dùng chung
│   │   └── projects-media/           # Ảnh giao diện thực tế của các dự án (Conhon, Lumi...)
│   │
│   ├── 📁 concept-craft-studio/      # PORTFOLIO CHÍNH: Daylight Studio (Xlinhx)
│   │   ├── assets/scenes/            # 3 Master Stage sạch: act1, act2, act3
│   │   ├── assets/mockups/           # Ảnh mockups thật dùng trong các case study
│   │   ├── modules/                  # 11 Micro-modules độc lập theo Section (30-80 dòng/file)
│   │   ├── styles/                   # 12 CSS modules theo chức năng (tokens, base, stages, s01-s10)
│   │   ├── index.html                # Entry point
│   │   ├── styles.css                # CSS Manifest (chỉ 16 dòng nạp @import)
│   │   ├── main.js                   # Orchestrator gọn nhẹ (20 dòng khởi chạy modules)
│   │   └── project-showcase.js       # Modal case studies kết nối ProjectsCatalog
│   │
│   └── 📁 concept-curriculum-vitae/  # CV SHOWCASE: Hồ sơ CV bản in A4 / PDF / Web
│       ├── current-march-2026/       # Bản CV chuẩn mới nhất
│       ├── archive-jan-2026/         # Bản lưu trữ lịch sử
│       └── index.html                # CV Gateway
│
├── 📁 tooling/                       [Công cụ phát triển & Build Cloudflare]
│   ├── build.mjs                     # Đóng gói xuất bản Cloudflare Pages (dist/)
│   └── serve.mjs                     # Local Dev Server (Port 3000)
│
├── package.json                      # Scripts: dev, build, preview
├── AGENTS.md                         # Hiến pháp vận hành của AI (Bắt buộc đọc trước)
├── CLAUDE.md                         # Hướng dẫn nhanh CLI
└── README.md                         # Bản đồ tổng quan toàn bộ repository
```

---

## ⚡ Khởi Chạy Nhanh (Quick Start)

1. **Kiểm tra kết nối GitHub CLI:**
   ```bash
   gh auth status
   ```
2. **Khởi chạy Dev Server (Port 3000):**
   ```bash
   npm run dev      # hoặc: node tooling/serve.mjs
   ```
3. **Đóng gói xuất bản Cloudflare Pages (`dist/`):**
   ```bash
   npm run build    # hoặc: node tooling/build.mjs
   ```
4. **Danh mục URLs cục bộ:**
   - **Craft Studio (Trang chính):** `http://localhost:3000/` (hoặc `/studio/`)
   - **Curriculum Vitae:** `http://localhost:3000/cv/`
   - **Tài nguyên Shared:** `http://localhost:3000/shared/icons/react.svg`

---

## 🔒 Nguyên Tắc Cốt Lõi (Non-Negotiables)

1. **Chỉ phục vụ Portfolio & CV:** Mọi tài liệu phi giao diện chỉ lưu trữ metadata tương đối và con trỏ GitHub.
2. **Nguồn sự thật mã nguồn nằm trên GitHub (`Xlinhx/<repo>`):** Không sao chép hay lưu trữ code/tài liệu trùng lặp trong repo này.
3. **Tầng dùng chung `frontend-apps/shared/`:** Dữ liệu dự án hiển thị web quy tụ 100% tại `shared/data/projects-catalog.js`.
4. **Anti-God File:** CSS và JS phải module hoá theo vai trò và chức năng (dưới 100 dòng/file).
5. **Zero Ghosting & Zero Emoji:** 100% typography vector và SVG vector trên bối cảnh studio sạch sẽ.