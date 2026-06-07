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
import {aiCodingComparison2026, ComparisonScene, ComparisonTool} from '../data/ai-coding-comparison-2026';

const data = aiCodingComparison2026;

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const toolColors: Record<ComparisonTool, string> = {
  codex: '#10a37f',
  claude: '#d97757',
  opencode: '#22c55e',
};

const pop = (frame: number, fps: number, delay = 0) =>
  spring({frame: frame - delay, fps, config: {damping: 20, stiffness: 130, mass: 0.8}});

const makeStarts = (scenes: ComparisonScene[]): number[] => {
  let cursor = 0;
  return scenes.map((scene: ComparisonScene) => {
    const from = cursor;
    cursor += scene.duration;
    return from;
  });
};

/* SVG Icons */
const Icons = {
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Bolt: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  Unlock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 019.9-1" />
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  Terminal: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
};

export const AICodingComparison2026: React.FC = () => {
  const starts = makeStarts(data.scenes);
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill className="aic-root">
      {data.scenes.map((scene, index) => (
        <Sequence key={scene.id} from={starts[index]} durationInFrames={scene.duration}>
          <SceneShell scene={scene} index={index} total={data.scenes.length} />
        </Sequence>
      ))}
      <NewsTicker frame={frame} />
    </AbsoluteFill>
  );
};

const SceneShell: React.FC<{scene: ComparisonScene; index: number; total: number}> = ({
  scene,
  index,
  total,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const accent = toolColors[scene.tool as ComparisonTool] || scene.accentColor || '#ffffff';
  
  const exitProgress = interpolate(frame, [scene.duration - 15, scene.duration], [0, 1], clamp);
  
  return (
    <AbsoluteFill 
      className={`aic-scene scene-${scene.id}`}
      style={{
        '--accent-color': accent,
        opacity: interpolate(exitProgress, [0, 1], [1, 0], clamp),
      } as React.CSSProperties}
    >
      <div className="aic-bg-image">
        <Img src={scene.image || ''} className="aic-reveal-img" />
        <div className="aic-bg-overlay" />
      </div>
      <div className="aic-noise" />
      
      <Header index={index} total={total} />
      
      <div className="aic-content-grid">
        <CopyBlock scene={scene} frame={frame} fps={fps} />
        
        {scene.type !== 'comparison' && scene.type !== 'cta' && scene.type !== 'hook' && (
          <TerminalBlock scene={scene} frame={frame} fps={fps} />
        )}

        {scene.type === 'comparison' && <ComparisonTable frame={frame} fps={fps} />}
        {scene.type === 'cta' && <CTAContent frame={frame} fps={fps} />}
        {scene.type === 'hook' && <HookContent frame={frame} fps={fps} />}
      </div>
    </AbsoluteFill>
  );
};

const Header: React.FC<{index: number; total: number}> = ({index, total}) => (
  <div className="aic-header">
    <div className="aic-brand">
      <div className="aic-brand-dot" />
      <span className="aic-wordmark">AI INSIGHTS • 2026</span>
    </div>
    <div className="aic-scene-info">
      STREAM_{String(index + 1).padStart(2, '0')} // TOTAL_{total}
    </div>
  </div>
);

const NewsTicker: React.FC<{frame: number}> = ({frame}) => {
  const x = interpolate(frame, [0, 1000], [0, -3000], {extrapolateRight: 'extend'});
  const news = [
    '• CLAUDE 4.6 ENGINE BENCHMARKS AT 98.2% ON CODING REASONING',
    '• OPENAI CODEX v2.8 ROLLS OUT KERNEL-LEVEL SANDBOXING FOR LINUX',
    '• OPENCODE CLI REACHES 160K GITHUB STARS • COMMUNITY DRIVEN AI ON THE RISE',
    '• MCP PROTOCOL ADOPTION GROWS BY 400% IN Q1 2026',
    '• NEW "COMPUTER USE" CAPABILITIES LEAKED FOR UPCOMING CODEX UPDATE',
  ];

  return (
    <div className="aic-ticker-wrapper">
      <div className="aic-ticker-tag">BREAKING NEWS</div>
      <div className="aic-ticker-track">
        <div style={{transform: `translateX(${x}px)`, display: 'flex', whiteSpace: 'nowrap', gap: '100px'}}>
          {[...news, ...news, ...news].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CopyBlock: React.FC<{scene: ComparisonScene; frame: number; fps: number}> = ({
  scene,
  frame,
  fps,
}) => {
  return (
    <div className="aic-copy-block">
      <div 
        className="aic-eyebrow"
        style={{ opacity: interpolate(pop(frame, fps, 5), [0, 1], [0, 1], clamp) }}
      >
        {scene.eyebrow}
      </div>
      
      <h1 className="aic-title">
        {scene.title.map((line, i) => (
          <span 
            key={i} 
            style={{ 
              display: 'block',
              opacity: interpolate(pop(frame, fps, 10 + i * 5), [0, 1], [0, 1], clamp),
              transform: `translateY(${interpolate(pop(frame, fps, 10 + i * 5), [0, 1], [40, 0], clamp)}px)`
            }}
          >
            {line}
          </span>
        ))}
      </h1>

      {scene.subtitle && (
        <div 
          className="aic-subtitle"
          style={{ opacity: interpolate(pop(frame, fps, 30), [0, 1], [0, 1], clamp) }}
        >
          {scene.subtitle.join(' • ')}
        </div>
      )}

      {scene.type === 'feature' && (
        <div className="aic-icons-grid">
          {[Icons.Shield, Icons.Bolt, Icons.Globe].map((Icon, i) => (
            <div 
              key={i} 
              className="aic-icon-item"
              style={{ 
                opacity: interpolate(pop(frame, fps, 40 + i * 10), [0, 1], [0, 1], clamp),
                transform: `scale(${interpolate(pop(frame, fps, 40 + i * 10), [0, 1], [0.5, 1], clamp)})`
              }}
            >
              <Icon />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const TerminalBlock: React.FC<{scene: ComparisonScene; frame: number; fps: number}> = ({
  scene,
  frame,
  fps,
}) => {
  const show = pop(frame, fps, 45);
  const tool = scene.tool || 'cli';

  return (
    <div 
      className="aic-terminal-float"
      style={{ 
        opacity: interpolate(show, [0, 1], [0, 1], clamp),
        transform: `translateY(${interpolate(show, [0, 1], [60, 0], clamp)}px)`
      }}
    >
      <div className="aic-term-header">
        <div className="aic-term-dot" />
        <div className="aic-term-dot" />
        <div className="aic-term-dot" />
        <div className="aic-term-title">{tool}_v2.6.sh</div>
      </div>
      <div className="aic-term-body">
        <div className="aic-term-line">
          <span className="aic-term-prompt">❯</span>
          <span className="aic-term-txt">{tool} status --detailed</span>
        </div>
        {scene.bullets?.map((bullet, i) => (
          <div 
            key={i} 
            className="aic-term-line"
            style={{ 
              opacity: interpolate(frame, [60 + i * 15, 75 + i * 15], [0, 1], clamp),
              marginLeft: '20px'
            }}
          >
            <span className="aic-term-prompt">▶</span>
            <span className="aic-term-txt">{bullet}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ComparisonTable: React.FC<{frame: number; fps: number}> = ({frame, fps}) => {
  const show = pop(frame, fps, 10);
  const rows = [
    { label: 'Security', v1: '★★★', v2: '★★', v3: '★★★' },
    { label: 'Reasoning', v1: '★★', v2: '★★★', v3: 'VAR' },
    { label: 'Flexibility', v1: '★', v2: '★', v3: '★★★' },
    { label: 'Privacy', v1: 'MED', v2: 'MED', v3: 'HIGH' },
  ];

  return (
    <div 
      className="aic-comparison-box"
      style={{ 
        opacity: interpolate(show, [0, 1], [0, 1], clamp),
        transform: `translate(-50%, -50%) scale(${interpolate(show, [0, 1], [0.95, 1], clamp)})`
      }}
    >
      <div className="aic-comp-table">
        <div className="aic-comp-head">
          <span>Metric</span>
          <span>Codex</span>
          <span>Claude</span>
          <span>OpenCode</span>
        </div>
        {rows.map((row, i) => (
          <div 
            key={i} 
            className="aic-comp-row"
            style={{ opacity: interpolate(frame, [30 + i * 10, 45 + i * 10], [0, 1], clamp) }}
          >
            <span className="aic-comp-label">{row.label}</span>
            <span className="aic-comp-cell" style={{color: '#10a37f'}}>{row.v1}</span>
            <span className="aic-comp-cell" style={{color: '#d97757'}}>{row.v2}</span>
            <span className="aic-comp-cell" style={{color: '#22c55e'}}>{row.v3}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HookContent: React.FC<{frame: number; fps: number}> = ({frame, fps}) => (
  <div style={{ marginTop: 'auto', marginBottom: '100px' }}>
    <div 
      className="aic-icon-item"
      style={{ 
        width: '120px', 
        height: '120px', 
        margin: '0 auto 40px',
        opacity: interpolate(pop(frame, fps, 10), [0, 1], [0, 1], clamp) 
      }}
    >
      <Icons.Terminal />
    </div>
  </div>
);

const CTAContent: React.FC<{frame: number; fps: number}> = ({frame, fps}) => (
  <div style={{ textAlign: 'center', marginTop: 'auto', marginBottom: '100px' }}>
    <div 
      style={{ 
        fontSize: '24px', 
        fontWeight: 600, 
        color: 'rgba(255,255,255,0.5)',
        opacity: interpolate(pop(frame, fps, 40), [0, 1], [0, 1], clamp) 
      }}
    >
      WHICH SIDE ARE YOU ON?
    </div>
  </div>
);