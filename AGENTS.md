# Repository Guidelines & AI Operating Constitution

> **KIM CHỈ NAM BẤT KHẢ XÂM PHẠM DÀNH CHO MỌI AI ASSISTANT (ANTIGRAVITY, CLAUDE, CURSOR, COPILOT)**
> Mọi thay đổi mã nguồn, tổ chức thư mục hoặc phát triển tính năng mới bắt buộc phải tuân thủ 100% các nguyên tắc dưới đây. Không tự ý phá vỡ cấu trúc hoặc quay lại các thói quen cắt ghép chắp vá cũ.

---

## 1. Tôn Chỉ Tối Thượng: Chỉ Xoay Quanh 2 Mục Tiêu (Portfolio & CV)

- **Mục tiêu duy nhất của Repository:** Xây dựng, hoàn thiện và hiển thị 2 sản phẩm:
  1. **Portfolio** (Craft Studio tại root `/` và `/studio/`, sẵn sàng build deploy Cloudflare Pages).
  2. **Curriculum Vitae (CV)** (Bản web tương tác, in ấn A4 và PDF tại `/cv/`).
- **Vai trò của Thư mục `docs/`:**
  - **Chỉ lưu trữ METADATA TƯƠNG ĐỐI**, tuyệt đối không ôm đồm sao chép mã nguồn, tài liệu kinh doanh hay phân tích lan man.
  - Làm cầu nối chỉ dẫn trực tiếp tới profile và các repository thật trên GitHub: `https://github.com/Xlinhx`.
  - Cung cấp hướng dẫn vận hành GitHub CLI (`gh`) cho AI/Developer khi cần bảo trì, cập nhật số liệu case study, hoặc phát triển thêm.

---

## 2. Quy Trình GitHub CLI Dành Cho AI Khi Bảo Trì & Phát Triển

Mọi AI khi bước vào repository cần tra cứu mã nguồn thật của dự án phải thực hiện tuần tự:

1. **Kiểm tra trạng thái xác thực:**
   ```bash
   gh auth status
   ```
   - Nếu **CHƯA ĐĂNG NHẬP:** Dừng lại ngay lập tức và thông báo cho tác giả:
     > *"Vui lòng chạy `gh auth login` trên terminal để xác thực quyền truy cập GitHub CLI."*
   - Nếu **ĐÃ ĐĂNG NHẬP:** Sử dụng lệnh CLI để tra cứu.

2. **Truy xuất thông tin dự án thật từ GitHub (Single Source of Truth):**
   - Đọc bảng metadata tương đối tại [`docs/projects-metadata.md`](file:///p:/freelance-profile-ops/docs/projects-metadata.md) để lấy đúng tên repo (`Xlinhx/<repo-name>`).
   - Dùng `gh repo view Xlinhx/<repo-name>` để xem README và kiến trúc.
   - Dùng `gh api` hoặc clone tạm khi cần đối chiếu source code gốc để cập nhật lại vào [`frontend-apps/shared/data/projects-catalog.js`](file:///p:/freelance-profile-ops/frontend-apps/shared/data/projects-catalog.js).

---

## 3. Cấu Trúc Mã Nguồn Rạch Ròi (Zero Bloat)

```
p:\freelance-profile-ops/
│
├── 📁 docs/                          [Metadata tương đối & Con trỏ GitHub Repos]
│   ├── projects-metadata.md          # Bảng metadata tương đối của 12 dự án + lệnh gh CLI
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
├── AGENTS.md                         # Hiến pháp vận hành của AI
├── CLAUDE.md                         # Hướng dẫn nhanh CLI
└── README.md                         # Bản đồ tổng quan toàn bộ repository
```

---

## 4. Các Nguyên Tắc Bất Khả Xâm Phạm (Non-Negotiable Rules)

### 1. Không Ôm Đồm & Không Nhồi Nhét Tài Liệu Ngoài Phạm Vi
- Nghiêm cấm tạo file nháp, script thử nghiệm hay file rác ở thư mục gốc hoặc trong các concept.
- Tuyệt đối không lưu trữ tài liệu kinh doanh, chiến lược marketing, audit lan man trong repo này.
- Mọi chi tiết sâu về code của các dự án phải tra cứu từ GitHub thật qua GitHub CLI.

### 2. Triết Lý Anti-God File (Phân Rã Theo Vai Trò & Chức Năng)
- Nghiêm cấm nhồi nhét hàng nghìn dòng CSS/JS vào một file duy nhất.
- File CSS phải module hóa theo chức năng trong `styles/`.
- File JS phải module hóa thành các micro-scripts độc lập tại `modules/`.
- Dữ liệu dự án quy tụ 100% tại `frontend-apps/shared/data/projects-catalog.js`.

### 3. Tuyệt Đối Không Chắp Vá "Đục Lỗ Đè Lấp Liếm" (Zero Ghosting)
- Toàn bộ nội dung tương tác (tiêu đề, nhãn nút, checklist, text mô tả) phải do HTML/CSS typography font `Be Vietnam Pro` và SVG vector làm chủ 100% trên nền bối cảnh sạch sẽ.
- Nút bấm phải có trạng thái Active / Inactive / Hover đổi màu mượt mà.

### 4. Tiêu Chuẩn 0 Emoji (100% SVG Vector)
- Giao diện người dùng trên web, CV và Portfolio tuyệt đối không dùng Emoji.
- Toàn bộ biểu tượng phải sử dụng thẻ `<svg>` vector sắc nét.

### 5. Tôn Trọng Ground Truth Của Creator
- Hourly rate trên Upwork: Cố định ở `$16/hr`. Không tự ý thay đổi khi chưa có lệnh.
- Profile GitHub chính thức: `https://github.com/Xlinhx`.
- Tuyệt đối không nhúng các mạng xã hội cá nhân giải trí vào hồ sơ tuyển dụng.

---

## 5. Lệnh Vận Hành Nhanh (Quick Commands)

- Kiểm tra GitHub CLI:
  ```bash
  gh auth status
  ```
- Khởi chạy Dev Server (Port 3000):
  ```bash
  npm run dev      # hoặc: node tooling/serve.mjs
  ```
- Đóng gói xuất bản Cloudflare Pages (`dist/`):
  ```bash
  npm run build    # hoặc: node tooling/build.mjs
  ```
- Deploy trực tiếp lên Cloudflare Pages qua CLI:
  ```bash
  npm run deploy
  ```
- URL các Concept cục bộ:
  - **Craft Studio (Trang chính):** `http://localhost:3000/` (hoặc `/studio/`)
  - **Curriculum Vitae:** `http://localhost:3000/cv/`
  - **Tài nguyên Shared:** `http://localhost:3000/shared/icons/react.svg`