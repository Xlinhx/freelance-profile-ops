const cvData = {
    vi: {
        personal: {
            name: "Nguyễn Xuân Lĩnh",
            title: "Fullstack Developer",
            avatarInitials: "XL",
            contact: {
                phone: "0932 433 459",
                email: "linhnx.developer@gmail.com",
                location: "Đà Nẵng, Việt Nam",
                github: {
                    label: "github.com/initforge",
                    url: "https://github.com/initforge"
                },
                linkedin: {
                    label: "linkedin.com/in/linhnx-dev",
                    url: "https://linkedin.com/in/linhnx-dev"
                }
            }
        },
        skills: [
            {
                category: "Frontend",
                items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
            },
            {
                category: "Backend",
                items: ["NestJS", "Node.js", "Express", "PostgreSQL", "Prisma"]
            },
            {
                category: "DevOps",
                items: ["Docker", "Nginx", "GitHub Actions", "Redis", "Cloudflare"]
            },
            {
                category: "AI",
                items: ["Gemini API", "Firebase"]
            }
        ],
        intro: "Fullstack Developer sở hữu hệ thống production thật — xử lý đơn hàng, thanh toán, và người dùng đồng thời mỗi ngày. Tự thiết kế kiến trúc, viết code, triển khai, và vận hành toàn bộ lifecycle từ database đến deployment trên VPS.",
        productionProjects: [
            {
                title: "B2B Wholesale & Retail Management Platform",
                subtitle: "Hệ thống nhập sỉ & lẻ hàng nội địa Trung Quốc — production live",
                period: "2025 – nay",
                url: "hienchina.com",
                link: "https://hienchina.com",
                bullets: [
                    "Tách monolith Next.js bị lỗi hash mismatch khi deploy → kiến trúc <strong>NestJS API + Next.js frontend</strong> — zero deployment failure kể từ migration",
                    "<strong>9 module NestJS</strong>: orders, inventory, dealer debt, returns, notifications — backend tự tính lại giá từ biến thể, không tin client",
                    "Custom JWT + RBAC (Admin/Dealer) + Edge Middleware xác thực bằng <code>jose</code> (vì <code>jsonwebtoken</code> không chạy trên Edge Runtime)",
                    "CI/CD tự động: GitHub Actions → Docker Compose (3 services) → SSL-aware Nginx trên VPS"
                ],
                stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker", "Nginx", "GitHub Actions"]
            },
            {
                title: "Real-Time Entertainment Platform",
                subtitle: "150-200+ concurrent users, thanh toán thật qua PayOS",
                period: "2025",
                url: "conhonannhonbinhdinh.vn",
                link: "https://conhonannhonbinhdinh.vn",
                bullets: [
                    "Xử lý race condition: <strong>atomic transaction + row-level locking</strong> (<code>SELECT FOR UPDATE</code>) — không bán vượt giới hạn",
                    "Idempotent webhook cho PayOS — chống duplicate payment. Đơn chưa thanh toán 15 phút → <strong>CRON tự rollback</strong>",
                    "3 vùng miền với rules riêng — <strong>dynamic config system</strong> thay đổi không cần redeploy",
                    "7-tab admin: analytics, đơn hàng, moderation, báo cáo doanh thu, kết quả thắng/thua"
                ],
                stack: ["React", "TypeScript", "WebSocket", "SSE", "PostgreSQL", "Redis", "Docker"]
            }
        ],
        otherProjects: [
            {
                badge: "AI",
                title: "IELTS AI Assessment",
                description: "Chấm IELTS tự động — audio (speaking) + image (writing) → Gemini multimodal",
                url: "github.com/initforge/mini-ielts.score",
                link: "https://github.com/initforge/mini-ielts.score"
            },
            {
                badge: "OCR",
                title: "Financial Reconciliation",
                description: "OCR scan bill bằng Gemini Vision → đối soát Merchant/Agent tự động",
                url: "github.com/initforge/mini-reconcile",
                link: "https://github.com/initforge/mini-reconcile"
            },
            {
                badge: "CMS",
                title: "Industrial Equipment Catalog",
                description: "500+ SKUs — PLpgSQL stored procedures, watermark pipeline, 3D viewer",
                url: "github.com/initforge/mini-truck-cms",
                link: "https://github.com/initforge/mini-truck-cms"
            },
            {
                badge: "Sys",
                title: "Queue Management System",
                description: "Real-time WebSocket + Redis pub/sub, RBAC, Docker Compose 3 services",
                url: "github.com/initforge/mini-queue-management",
                link: "https://github.com/initforge/mini-queue-management"
            }
        ],
        labels: {
            contact: "Liên Hệ",
            techStack: "Tech Stack",
            introduction: "Giới Thiệu",
            productionProjects: "Dự Án Production",
            otherProjects: "Dự Án Khác",
            updated: "Cập nhật: Tháng 3/2026",
            exportPdf: "Xuất PDF",
            viewGithub: "→ GitHub"
        }
    },
    en: {
        personal: {
            name: "Nguyen Xuan Linh",
            title: "Fullstack Developer",
            avatarInitials: "XL",
            contact: {
                phone: "0932 433 459",
                email: "linhnx.developer@gmail.com",
                location: "Da Nang, Vietnam",
                github: {
                    label: "github.com/initforge",
                    url: "https://github.com/initforge"
                },
                linkedin: {
                    label: "linkedin.com/in/linhnx-dev",
                    url: "https://linkedin.com/in/linhnx-dev"
                }
            }
        },
        skills: [
            {
                category: "Frontend",
                items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
            },
            {
                category: "Backend",
                items: ["NestJS", "Node.js", "Express", "PostgreSQL", "Prisma"]
            },
            {
                category: "DevOps",
                items: ["Docker", "Nginx", "GitHub Actions", "Redis", "Cloudflare"]
            },
            {
                category: "AI",
                items: ["Gemini API", "Firebase"]
            }
        ],
        intro: "Fullstack Developer with real production systems handling orders, payments, and concurrent users every day. I design architecture, write code, deploy, and maintain the full lifecycle from database to VPS deployment.",
        productionProjects: [
            {
                title: "B2B Wholesale & Retail Management Platform",
                subtitle: "China wholesale and retail sourcing platform running in production",
                period: "2025 - now",
                url: "hienchina.com",
                link: "https://hienchina.com",
                bullets: [
                    "Split a fragile Next.js monolith with hash mismatch deployment issues into a <strong>NestJS API + Next.js frontend</strong>, reaching zero deployment failures after migration",
                    "<strong>9 NestJS modules</strong>: orders, inventory, dealer debt, returns, notifications. Backend recalculates prices from variants instead of trusting the client",
                    "Custom JWT + RBAC (Admin/Dealer) + Edge Middleware using <code>jose</code> because <code>jsonwebtoken</code> does not run on Edge Runtime",
                    "Automated CI/CD: GitHub Actions to Docker Compose (3 services) to SSL-aware Nginx on VPS"
                ],
                stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker", "Nginx", "GitHub Actions"]
            },
            {
                title: "Real-Time Entertainment Platform",
                subtitle: "150-200+ concurrent users, real payments through PayOS",
                period: "2025",
                url: "conhonannhonbinhdinh.vn",
                link: "https://conhonannhonbinhdinh.vn",
                bullets: [
                    "Solved race conditions with <strong>atomic transactions + row-level locking</strong> (<code>SELECT FOR UPDATE</code>) to prevent overselling",
                    "Idempotent PayOS webhook to prevent duplicate payments. Unpaid orders after 15 minutes are rolled back by <strong>CRON</strong>",
                    "Three regions with separate rules, using a <strong>dynamic config system</strong> that changes behavior without redeploying",
                    "7-tab admin: analytics, orders, moderation, revenue reports, win/loss results"
                ],
                stack: ["React", "TypeScript", "WebSocket", "SSE", "PostgreSQL", "Redis", "Docker"]
            }
        ],
        otherProjects: [
            {
                badge: "AI",
                title: "IELTS AI Assessment",
                description: "Automatic IELTS scoring: audio for speaking and image for writing through Gemini multimodal",
                url: "github.com/initforge/mini-ielts.score",
                link: "https://github.com/initforge/mini-ielts.score"
            },
            {
                badge: "OCR",
                title: "Financial Reconciliation",
                description: "Bill OCR with Gemini Vision for automated merchant/agent reconciliation",
                url: "github.com/initforge/mini-reconcile",
                link: "https://github.com/initforge/mini-reconcile"
            },
            {
                badge: "CMS",
                title: "Industrial Equipment Catalog",
                description: "500+ SKUs with PLpgSQL stored procedures, watermark pipeline, and 3D viewer",
                url: "github.com/initforge/mini-truck-cms",
                link: "https://github.com/initforge/mini-truck-cms"
            },
            {
                badge: "Sys",
                title: "Queue Management System",
                description: "Real-time WebSocket + Redis pub/sub, RBAC, Docker Compose with 3 services",
                url: "github.com/initforge/mini-queue-management",
                link: "https://github.com/initforge/mini-queue-management"
            }
        ],
        labels: {
            contact: "Contact",
            techStack: "Tech Stack",
            introduction: "Introduction",
            productionProjects: "Production Projects",
            otherProjects: "Other Projects",
            updated: "Updated: March 2026",
            exportPdf: "Export PDF",
            viewGithub: "→ GitHub"
        }
    }
};
