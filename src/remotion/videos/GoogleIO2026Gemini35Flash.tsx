import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
} from 'remotion';
import { googleIOVideoData, GoogleIOScene, BenchmarkMetric, CommunityQuote } from '../data/google-io-2026-gemini-3.5-flash';
import '../GoogleIO2026Gemini35Flash.css';

const data = googleIOVideoData;

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const pop = (frame: number, fps: number, delay = 0) =>
  spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 120, mass: 0.9 },
  });

const makeStarts = (scenes: GoogleIOScene[]): number[] => {
  let cursor = 0;
  return scenes.map((scene) => {
    const from = cursor;
    cursor += scene.duration;
    return from;
  });
};

/* SVG Icons */
const Icons = {
  Terminal: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  Cpu: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
    </svg>
  ),
};

export const GoogleIO2026Gemini35Flash: React.FC = () => {
  const starts = makeStarts(data.scenes);
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill className="gio-root">
      <div className="gio-dot-grid" />
      <div className="gio-gradient-mesh" />
      <div className="gio-noise" />

      {data.scenes.map((scene, index) => (
        <Sequence key={scene.id} from={starts[index]} durationInFrames={scene.duration}>
          <SceneShell scene={scene} index={index} total={data.scenes.length} />
        </Sequence>
      ))}

      <NewsTicker frame={frame} />
    </AbsoluteFill>
  );
};

const SceneShell: React.FC<{ scene: GoogleIOScene; index: number; total: number }> = ({
  scene,
  index,
  total,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const accent = scene.accentColor || '#4285F4';

  // Entry transition (first 18 frames) using spring
  const entrySpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100, mass: 0.8 },
  });

  // Exit transition (last 18 frames) using spring
  const exitSpring = spring({
    frame: frame - (scene.duration - 18),
    fps,
    config: { damping: 15, stiffness: 100, mass: 0.8 },
  });

  // Premium Slide Up + Scale Down Transition physics
  const translateY = interpolate(entrySpring, [0, 1], [400, 0], clamp) + interpolate(exitSpring, [0, 1], [0, -400], clamp);
  const scale = interpolate(entrySpring, [0, 1], [0.9, 1], clamp) * interpolate(exitSpring, [0, 1], [1, 0.95], clamp);
  const opacity = interpolate(entrySpring, [0, 1], [0, 1], clamp) * interpolate(exitSpring, [0, 1], [1, 0], clamp);

  return (
    <AbsoluteFill
      className={`gio-scene scene-${scene.id}`}
      style={{
        '--accent-color': accent,
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity,
      } as React.CSSProperties}
    >
      {scene.image && (
        <div className="gio-bg-image">
          <Img
            src={scene.image}
            style={{
              transform: `scale(${interpolate(frame, [0, scene.duration], [1.08, 1.02], clamp)})`,
            }}
          />
          <div className="gio-bg-overlay" />
        </div>
      )}

      <Header index={index} total={total} />

      <div className="gio-content-grid">
        <CopyBlock scene={scene} frame={frame} fps={fps} />

        {scene.type === 'intro' && <IntroContent frame={frame} fps={fps} />}
        {scene.type === 'benchmarks' && scene.benchmarks && (
          <BenchmarksList metrics={scene.benchmarks} frame={frame} fps={fps} />
        )}
        {scene.type === 'speed' && <SpeedComparison frame={frame} fps={fps} />}
        {scene.type === 'community' && scene.quotes && (
          <CommunitySentimentList quotes={scene.quotes} frame={frame} fps={fps} />
        )}
        {scene.type === 'cta' && <CTAContent frame={frame} fps={fps} />}
      </div>
    </AbsoluteFill>
  );
};

const Header: React.FC<{ index: number; total: number }> = ({ index, total }) => (
  <div className="gio-header">
    <div className="gio-brand">
      <div className="gio-brand-dot" />
      <span className="gio-wordmark">GOOGLE I/O 2026</span>
    </div>
    <div className="gio-scene-info">
      SECTION_{String(index + 1).padStart(2, '0')} // {total}
    </div>
  </div>
);

const CopyBlock: React.FC<{ scene: GoogleIOScene; frame: number; fps: number }> = ({
  scene,
  frame,
  fps,
}) => {
  return (
    <div className="gio-copy-block">
      <div
        className="gio-eyebrow"
        style={{
          opacity: interpolate(pop(frame, fps, 5), [0, 1], [0, 1], clamp),
          transform: `translateX(${interpolate(pop(frame, fps, 5), [0, 1], [-20, 0], clamp)}px)`,
        }}
      >
        {scene.label}
      </div>

      <h1 className="gio-title">
        {scene.title.map((line, i) => (
          <span
            key={i}
            style={{
              display: 'block',
              opacity: interpolate(pop(frame, fps, 10 + i * 5), [0, 1], [0, 1], clamp),
              transform: `translateY(${interpolate(pop(frame, fps, 10 + i * 5), [0, 1], [30, 0], clamp)}px)`,
            }}
          >
            {line}
          </span>
        ))}
      </h1>

      <div
        className="gio-subtitle"
        style={{
          opacity: interpolate(pop(frame, fps, 25), [0, 1], [0, 1], clamp),
          transform: `translateY(${interpolate(pop(frame, fps, 25), [0, 1], [15, 0], clamp)}px)`,
        }}
      >
        {scene.caption}
      </div>
    </div>
  );
};

const IntroContent: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const show = pop(frame, fps, 35);
  const codePrompt = `// Antigravity Agent Configuration
const agent = new GoogleAntigravity({
  model: 'gemini-3.5-flash',
  features: ['agentic-loop', 'code-reasoning'],
  maxSubAgents: 5,
  sandbox: true
});

console.log("Deploying agent...");
await agent.deploy();`;

  // Typing simulation
  const typeIndex = Math.min(codePrompt.length, Math.floor(interpolate(frame, [40, 110], [0, codePrompt.length], clamp)));
  const typedCode = codePrompt.slice(0, typeIndex);

  return (
    <div
      className="gio-glass-card gio-studio-card"
      style={{
        opacity: interpolate(show, [0, 1], [0, 1], clamp),
        transform: `translateY(${interpolate(show, [0, 1], [50, 0], clamp)}px)`,
      }}
    >
      <div className="gio-studio-header">
        <div className="gio-brand-dot" style={{ background: '#ef4444' }} />
        <div className="gio-brand-dot" style={{ background: '#f59e0b' }} />
        <div className="gio-brand-dot" style={{ background: '#10b981' }} />
        <span style={{ fontSize: '11px', fontFamily: 'JetBrains Mono', color: 'rgba(255,255,255,0.3)', marginLeft: '10px' }}>
          AI_STUDIO_TEST.js
        </span>
      </div>
      <div className="gio-studio-body" style={{ whiteSpace: 'pre-wrap' }}>
        {typedCode}
        {frame % 15 < 8 && <span className="gio-cursor-sim" />}
      </div>
    </div>
  );
};

const BenchmarksList: React.FC<{ metrics: BenchmarkMetric[]; frame: number; fps: number }> = ({
  metrics,
  frame,
  fps,
}) => {
  return (
    <div className="gio-benchmarks-list">
      {metrics.map((metric, i) => {
        const show = pop(frame, fps, 30 + i * 15);
        // Interpolate the benchmark values for a counter running effect
        const runningValue = interpolate(frame, [35 + i * 15, 75 + i * 15], [0, metric.value], clamp);
        const y = interpolate(show, [0, 1], [40, 0], clamp);

        return (
          <div
            key={i}
            className="gio-glass-card gio-benchmark-card"
            style={{
              opacity: interpolate(show, [0, 1], [0, 1], clamp),
              transform: `translateY(${y}px)`,
            }}
          >
            <div className="gio-benchmark-info" style={{ flex: 1 }}>
              <div className="gio-benchmark-meta">
                <span className="gio-benchmark-label">{metric.label}</span>
                <span className="gio-benchmark-desc">{metric.description}</span>
              </div>
              {/* Progress Bar dynamic animation */}
              <div className="gio-benchmark-bar-bg">
                <div 
                  className="gio-benchmark-bar" 
                  style={{ 
                    width: `${runningValue}%`,
                  }} 
                />
              </div>
            </div>
            <div className="gio-benchmark-value">
              {runningValue.toFixed(1)}%
            </div>
          </div>
        );
      })}
    </div>
  );
};

const SpeedComparison: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const show = pop(frame, fps, 30);

  const codeString = `import { GeminiModel } from '@google/ai';\n\nasync function execute() {\n  const res = await GeminiModel.generate({\n    prompt: 'Solve SWE-bench-1024...',\n    thinking: true\n  });\n  console.log(res.code);\n}`;

  // Gemini 3.5 Flash: 4x speed (types full in 45 frames)
  const flashCharCount = Math.min(
    codeString.length,
    Math.floor(interpolate(frame, [35, 80], [0, codeString.length], clamp))
  );

  // Gemini 3.1 Pro: 1x speed (types 40% of code in same duration)
  const proCharCount = Math.min(
    codeString.length,
    Math.floor(interpolate(frame, [35, 130], [0, codeString.length * 0.40], clamp))
  );

  // Latency counter: Flash reaches 0.23s, Pro reaches 0.95s
  const flashLatency = interpolate(frame, [35, 80], [0.00, 0.23], clamp);
  const proLatency = interpolate(frame, [35, 130], [0.00, 0.95], clamp);

  const flashDone = flashCharCount === codeString.length;

  return (
    <div
      className="gio-speed-split"
      style={{
        opacity: interpolate(show, [0, 1], [0, 1], clamp),
        transform: `translateY(${interpolate(show, [0, 1], [40, 0], clamp)}px)`,
      }}
    >
      {/* Column Left: Flash */}
      <div className={`gio-glass-card gio-speed-column model-flash ${flashDone ? 'is-done' : ''}`}>
        <div className="gio-speed-header">3.5 Flash</div>
        <div className="gio-speed-body">
          {codeString.slice(0, flashCharCount)}
          {flashCharCount < codeString.length && <span className="gio-cursor-sim" style={{ background: 'var(--gio-neon-cyan)' }} />}
        </div>
        <div className="gio-speed-timer-ui">
          <span className="gio-timer-icon">⏱️</span>
          <span className="gio-timer-val">{flashLatency.toFixed(2)}s</span>
          <span className="gio-timer-status">{flashDone ? 'DONE' : 'RUNNING'}</span>
        </div>
        <div className="gio-speed-overlay-tag gio-speed-tag-flash">
          {flashDone ? 'FASTEST (0.23s)' : '4.2x SPEED'}
        </div>
      </div>

      {/* Column Right: Pro */}
      <div className="gio-glass-card gio-speed-column model-pro">
        <div className="gio-speed-header">3.1 Pro</div>
        <div className="gio-speed-body" style={{ opacity: 0.5 }}>
          {codeString.slice(0, proCharCount)}
          <span className="gio-cursor-sim" style={{ background: 'var(--gio-neon-purple)' }} />
        </div>
        <div className="gio-speed-timer-ui">
          <span className="gio-timer-icon">⏳</span>
          <span className="gio-timer-val">{proLatency.toFixed(2)}s</span>
          <span className="gio-timer-status">PROCESSING</span>
        </div>
        <div className="gio-speed-overlay-tag gio-speed-tag-pro">
          SLOWER
        </div>
      </div>
    </div>
  );
};

const CommunitySentimentList: React.FC<{ quotes: CommunityQuote[]; frame: number; fps: number }> = ({
  quotes,
  frame,
  fps,
}) => {
  return (
    <div className="gio-community-list">
      {quotes.map((quote, i) => {
        const show = pop(frame, fps, 30 + i * 20);
        // Staggered slide in from bottom left/right
        const y = interpolate(show, [0, 1], [50, 0], clamp);
        const x = interpolate(show, [0, 1], [i % 2 === 0 ? -30 : 30, 0], clamp);

        let sentimentLabel = '';
        let sentimentClass = '';
        let sentimentIcon = '💬';
        if (quote.sentiment === 'positive') {
          sentimentLabel = 'PRO';
          sentimentClass = 'tag-pro';
          sentimentIcon = '👍';
        } else if (quote.sentiment === 'negative') {
          sentimentLabel = 'CON';
          sentimentClass = 'tag-con';
          sentimentIcon = '👎';
        } else {
          sentimentLabel = 'NEUTRAL';
          sentimentClass = 'tag-neutral';
          sentimentIcon = '💬';
        }

        return (
          <div
            key={quote.id}
            className={`gio-glass-card gio-comm-card gio-chat-bubble bubble-${quote.sentiment}`}
            style={{
              opacity: interpolate(show, [0, 1], [0, 1], clamp),
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div className="gio-comm-avatar-wrapper">
              <div className="gio-comm-avatar">{quote.avatar}</div>
              <div className={`gio-sentiment-indicator ${quote.sentiment}`}>{sentimentIcon}</div>
            </div>
            <div className="gio-comm-main">
              <div className="gio-comm-user-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="gio-comm-user">{quote.user}</span>
                  <span className={`gio-sentiment-badge ${sentimentClass}`}>{sentimentLabel}</span>
                </div>
                <span className={`gio-comm-source gio-source-${quote.source.toLowerCase().replace(' ', '')}`}>
                  {quote.source}
                </span>
              </div>
              <div className="gio-comm-content">"{quote.content}"</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CTAContent: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const show = pop(frame, fps, 35);
  const btnShow = pop(frame, fps, 55);

  return (
    <div className="gio-cta-area">
      <div
        className="gio-icon-item"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '35px',
          background: 'rgba(66, 133, 244, 0.1)',
          border: '1px solid rgba(66, 133, 244, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: interpolate(show, [0, 1], [0, 1], clamp),
          transform: `scale(${interpolate(show, [0, 1], [0.8, 1], clamp)})`,
          marginBottom: '20px',
        }}
      >
        <Icons.Cpu />
      </div>

      <div
        className="gio-button"
        style={{
          opacity: interpolate(btnShow, [0, 1], [0, 1], clamp),
          transform: `translateY(${interpolate(btnShow, [0, 1], [20, 0], clamp)}px)`,
        }}
      >
        BÌNH LUẬN NGAY
      </div>
    </div>
  );
};

const NewsTicker: React.FC<{ frame: number }> = ({ frame }) => {
  // Constant slow horizontal scrolling
  const x = interpolate(frame, [0, 900], [0, -2200], { extrapolateRight: 'extend' });

  const newsItems = [
    '• GOOGLE I/O 2026: AGENTIC ERA IS HERE',
    '• GEMINI SPARK PERSONAL AGENT ANNOUNCED',
    '• ANTIGRAVITY 2.0 UPDATED FOR AGENT ORCHESTRATION',
    '• GOOGLE PARTNERS WITH WARBY PARKER FOR NEW SMART GLASSES',
    '• GEMINI 3.5 PRO SLATED FOR JUNE 2026 RELEASE',
    '• ANDROID XR ECOSYSTEM UNVEILED',
  ];

  return (
    <div className="gio-ticker-wrapper">
      <div className="gio-ticker-tag">I/O 2026 FLASH</div>
      <div className="gio-ticker-track">
        <div style={{ transform: `translateX(${x}px)`, display: 'flex', whiteSpace: 'nowrap', gap: '80px' }}>
          {[...newsItems, ...newsItems, ...newsItems].map((item, i) => (
            <span key={i} style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 'bold' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
