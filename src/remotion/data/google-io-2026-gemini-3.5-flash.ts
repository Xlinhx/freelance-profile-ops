import { staticFile } from 'remotion';

export type CommunityQuote = {
  id: string;
  source: 'Reddit' | 'Hacker News';
  user: string;
  avatar: string;
  content: string;
  sentiment: 'positive' | 'negative' | 'neutral';
};

export type BenchmarkMetric = {
  label: string;
  value: number; // For score counter animation
  displayValue: string;
  description: string;
};

export type GoogleIOScene = {
  id: string;
  duration: number; // duration in frames (30fps)
  type: 'hook' | 'intro' | 'benchmarks' | 'speed' | 'community' | 'cta';
  label: string;
  title: string[];
  caption: string;
  image?: string;
  accentColor: string;
  benchmarks?: BenchmarkMetric[];
  quotes?: CommunityQuote[];
};

export const googleIOVideoData = {
  fps: 30,
  width: 1080,
  height: 1920,
  title: 'Google I/O 2026 & Gemini 3.5 Flash',
  scenes: [
    {
      id: 'hook',
      duration: 120, // 4s
      type: 'hook',
      label: 'GOOGLE I/O 2026',
      title: ['GEMINI 3.5 FLASH:', 'ĐỦ MẠNH ĐỂ DIỆT PRO?'],
      caption: 'Đột phá lớn nhất tại Google I/O 2026',
      image: staticFile('media/google-io-2026/01-google-io-keyart.png'),
      accentColor: '#4285F4',
    },
    {
      id: 'intro',
      duration: 150, // 5s
      type: 'intro',
      label: 'KỶ NGUYÊN AGENTIC',
      title: ['KỶ NGUYÊN AGENTIC', 'AI ĐÃ ĐẾN!'],
      caption: 'Thiết kế riêng cho multi-agent & coding',
      image: staticFile('media/google-io-2026/03-vscode-agent.png'),
      accentColor: '#00f2fe',
    },
    {
      id: 'benchmarks',
      duration: 180, // 6s
      type: 'benchmarks',
      label: 'ĐỘT PHÁ SỨC MẠNH',
      title: ['HỦY DIỆT MỌI', 'BẢNG BENCHMARK!'],
      caption: 'MCP Atlas: 83.6% • Terminal-Bench: 76.2%',
      image: staticFile('media/google-io-2026/05-performance-chart.png'),
      accentColor: '#22c55e',
      benchmarks: [
        {
          label: 'MCP Atlas (Agentic)',
          value: 83.6,
          displayValue: '83.6%',
          description: 'Khả năng phối hợp sub-agent',
        },
        {
          label: 'Terminal-Bench 2.1',
          value: 76.2,
          displayValue: '76.2%',
          description: 'Tác vụ dòng lệnh hệ thống',
        },
        {
          label: 'CharXiv Reasoning',
          value: 84.2,
          displayValue: '84.2%',
          description: 'Khả năng suy luận nâng cao',
        },
      ],
    },
    {
      id: 'speed',
      duration: 150, // 5s
      type: 'speed',
      label: 'TỐI ƯU HIỆU NĂNG',
      title: ['TỐC ĐỘ PHẢN HỒI', 'NHANH GẤP 4 LẦN!'],
      caption: 'Giảm trễ tối đa cho Agentic loops',
      accentColor: '#a6c0fe',
    },
    {
      id: 'community',
      duration: 180, // 6s
      type: 'community',
      label: 'Ý KIẾN CỘNG ĐỒNG',
      title: ['Ý KIẾN TRÁI CHIỀU', 'CỦA CỘNG ĐỒNG'],
      caption: 'Lập trình viên nói gì trên Reddit & HN?',
      accentColor: '#ef4444',
      quotes: [
        {
          id: 'q1',
          source: 'Reddit',
          user: 'u/dev_kernel',
          avatar: '💻',
          content: 'Tốc độ cực kỳ ấn tượng khi tích hợp vào agentic loop!',
          sentiment: 'positive',
        },
        {
          id: 'q2',
          source: 'Hacker News',
          user: 'HN_User98',
          avatar: '⚡',
          content: 'Giá API $1.5/M input cao hơn bản Flash cũ. Cần cân nhắc.',
          sentiment: 'negative',
        },
        {
          id: 'q3',
          source: 'Reddit',
          user: 'u/ai_builder',
          avatar: '🚀',
          content: 'Model nhạy prompt hơn nhiều. Cần tune lại system prompt.',
          sentiment: 'neutral',
        },
      ],
    },
    {
      id: 'cta',
      duration: 120, // 4s
      type: 'cta',
      label: 'Ý KIẾN CỦA BẠN?',
      title: ['VŨ KHÍ MỚI', 'CỦA BẠN?'],
      caption: 'Bình luận bên dưới & Bấm Follow AI',
      image: staticFile('media/google-io-2026/01-google-io-keyart.png'),
      accentColor: '#4285F4',
    },
  ] as GoogleIOScene[],
};
