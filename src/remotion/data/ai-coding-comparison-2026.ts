export type ComparisonTool = 'codex' | 'claude' | 'opencode';

export type ComparisonScene = {
  id: string;
  duration: number;
  type: 'hook' | 'intro' | 'tool-intro' | 'feature' | 'pricing' | 'comparison' | 'cta';
  tool?: ComparisonTool;
  eyebrow: string;
  title: string[];
  subtitle?: string[];
  bullets?: string[];
  note?: string;
  accentColor: string;
  badge?: string;
  stats?: { label: string; value: string }[];
  image?: string;
};

export const aiCodingComparison2026: {
  fps: number;
  width: number;
  height: number;
  title: string;
  scenes: ComparisonScene[];
} = {
  fps: 30,
  width: 1080,
  height: 1920,
  title: 'CUỘC CHIẾN AI CLI 2026: AI NÀO LÀ VUA?',
  scenes: [
    {
      id: 'hook',
      duration: 120,
      type: 'hook',
      eyebrow: 'BÁO CÁO ĐỘC QUYỀN',
      title: ['ĐẠI CHIẾN AI CLI', 'NĂM 2026'],
      subtitle: ['Đâu là công cụ làm chủ Terminal của bạn?'],
      accentColor: '#ef4444',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1080&h=1920&q=80',
    },
    {
      id: 'intro',
      duration: 150,
      type: 'intro',
      eyebrow: '3 ĐỐI THỦ NẶNG KÝ',
      title: ['CODEX', 'CLAUDE', 'OPENCODE'],
      subtitle: ['OpenAI vs Anthropic vs Cộng đồng'],
      accentColor: '#ffffff',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1080&h=1920&q=80',
    },
    {
      id: 'codex-intro',
      duration: 150,
      type: 'tool-intro',
      tool: 'codex',
      eyebrow: 'QUÁI VẬT TỪ OPENAI',
      title: ['CODEX CLI'],
      subtitle: ['Tốc độ kinh hoàng & Bảo mật cấp Kernel'],
      accentColor: '#10a37f',
      badge: 'GPT-5.4 ENGINE',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1080&h=1920&q=80',
    },
    {
      id: 'codex-features',
      duration: 180,
      type: 'feature',
      tool: 'codex',
      eyebrow: 'HIỆU NĂNG TỐI THƯỢNG',
      title: ['SIÊU TỐC ĐỘ', '& BẢO MẬT'],
      bullets: ['Sandboxing Kernel Landlock', 'Đẩy tính toán lên Cloud siêu tốc', 'Phân tích hệ thống thời gian thực', 'Xử lý logic nhanh gấp 4.2 lần'],
      accentColor: '#10a37f',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1080&h=1920&q=80',
    },
    {
      id: 'claude-intro',
      duration: 150,
      type: 'tool-intro',
      tool: 'claude',
      eyebrow: 'TRÍ TUỆ ANTHROPIC',
      title: ['CLAUDE CODE'],
      subtitle: ['Cộng sự lập trình với tư duy sâu sắc'],
      accentColor: '#d97757',
      badge: 'SONNET 4.6 INSIDE',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1080&h=1920&q=80',
    },
    {
      id: 'claude-features',
      duration: 180,
      type: 'feature',
      tool: 'claude',
      eyebrow: 'HỢP TÁC CHUYÊN SÂU',
      title: ['TƯ DUY', 'KIẾN TRÚC'],
      bullets: ['Hệ thống Checkpoint kiểu Git', 'Tích hợp giao thức MCP mạnh mẽ', 'Hiểu cấu trúc đa file phức tạp', 'Truy vết logic như con người'],
      accentColor: '#d97757',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1080&h=1920&q=80',
    },
    {
      id: 'opencode-intro',
      duration: 150,
      type: 'tool-intro',
      tool: 'opencode',
      eyebrow: 'TỰ DO NGUỒN MỞ',
      title: ['OPENCODE CLI'],
      subtitle: ['Không phụ thuộc Model & Quyền riêng tư 100%'],
      accentColor: '#22c55e',
      badge: '100% RIÊNG TƯ',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1080&h=1920&q=80',
    },
    {
      id: 'opencode-features',
      duration: 180,
      type: 'feature',
      tool: 'opencode',
      eyebrow: 'KIỂM SOÁT TUYỆT ĐỐI',
      title: ['DÙNG KEY RIÊNG', '& CHẠY LOCAL'],
      bullets: ['Hỗ trợ chế độ Air-gapped nội bộ', 'Chạy mượt Ollama & Llama cục bộ', 'Kết nối hơn 75 nhà cung cấp API', 'Đồng bộ Session phi tập trung'],
      accentColor: '#22c55e',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1080&h=1920&q=80',
    },
    {
      id: 'comparison',
      duration: 210,
      type: 'comparison',
      eyebrow: 'BẢNG ĐIỂM CHỐT',
      title: ['SO SÁNH', 'CHI TIẾT'],
      subtitle: ['Tìm AI CLI hoàn hảo cho công việc của bạn'],
      accentColor: '#ffffff',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&h=1920&q=80',
    },
    {
      id: 'cta',
      duration: 150,
      type: 'cta',
      eyebrow: 'BẠN CHỌN AI?',
      title: ['CHỌN VŨ KHÍ', 'CỦA BẠN'],
      subtitle: ['Bình luận lựa chọn bên dưới • Đăng ký để xem tutorial AI'],
      accentColor: '#ef4444',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1080&h=1920&q=80',
    },
  ],
};