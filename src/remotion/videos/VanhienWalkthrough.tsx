import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {
  TransitionSeries,
  linearTiming,
  springTiming,
} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {wipe} from '@remotion/transitions/wipe';
import {flip} from '@remotion/transitions/flip';
import {clockWipe} from '@remotion/transitions/clock-wipe';

type Region = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type SceneKind =
  | 'hook'
  | 'teacher-overview'
  | 'teacher-management'
  | 'create'
  | 'student-dashboard'
  | 'exam'
  | 'chat'
  | 'multiverse-core'
  | 'multiverse-exploration'
  | 'results'
  | 'outro';

type CopySide = 'left' | 'right' | 'center';
type Tone = 'ink' | 'teal' | 'gold' | 'green' | 'violet' | 'red' | 'blue';
type TransitionType = 'none' | 'fade' | 'slide-up' | 'slide-right' | 'wipe-right' | 'wipe-down' | 'flip' | 'clockWipe' | 'iris';

export type VanhienScene = {
  duration: number;
  kind: SceneKind;
  image: string;
  secondImage?: string;
  altImage?: string;
  label: string;
  headline: string[];
  caption: string;
  side: CopySide;
  tone: Tone;
  transition: TransitionType;
};

export type VanhienProject = {
  fps: number;
  accent: string;
  title: string;
  scenes: VanhienScene[];
};

type Props = {
  project: VanhienProject;
};

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const source = {
  width: 1080,
  height: 1920,
};

const toneColor: Record<Tone, string> = {
  ink: '#16343d',
  teal: '#0d756f',
  gold: '#c98a30',
  green: '#128264',
  violet: '#6356b9',
  red: '#b4493e',
  blue: '#1d72a8',
};

const slices = {
  homeFeatureStrip: {x: 0, y: 1160, width: 1080, height: 520},
  teacherOverviewPanel: {x: 316, y: 96, width: 734, height: 778},
  teacherClassesPanel: {x: 312, y: 92, width: 744, height: 398},
  teacherLibraryPanel: {x: 228, y: 74, width: 808, height: 636},
  studentDash: {x: 0, y: 0, width: 1080, height: 660},
  chatThread: {x: 100, y: 0, width: 980, height: 480},
  chatQuestion: {x: 744, y: 82, width: 326, height: 150},
  chatInput: {x: 40, y: 1700, width: 1000, height: 160},
  multiverseRootCard: {x: 350, y: 182, width: 308, height: 300},
  multiverseBranchesCard: {x: 54, y: 504, width: 616, height: 354},
  multiverseListCard: {x: 284, y: 138, width: 378, height: 222},
  multiverseReaderHero: {x: 690, y: 176, width: 344, height: 900},
  resultCard: {x: 300, y: 392, width: 736, height: 318},
  reviewPanel: {x: 0, y: 0, width: 1080, height: 620},
};

const focusRects = {
  studentUpcoming: {x: 294, y: 200, width: 760, height: 240},
  studentRecentResult: {x: 292, y: 512, width: 754, height: 124},
  storylineList: {x: 284, y: 138, width: 380, height: 214},
};

const entrance = (frame: number, delay = 0, damping = 14, stiffness = 160) =>
  spring({
    frame: frame - delay,
    fps: 30,
    config: {damping, stiffness, mass: 0.85},
  });

const getPresentation = (t: TransitionType, w: number, h: number): {p: any; timing: any} | null => {
  switch (t) {
    case 'fade': return {p: fade(), timing: linearTiming({durationInFrames: 18})};
    case 'slide-up': return {p: slide({direction: 'from-bottom'}), timing: springTiming({config: {damping: 20, stiffness: 100}})};
    case 'slide-right': return {p: slide({direction: 'from-right'}), timing: springTiming({config: {damping: 18, stiffness: 120}})};
    case 'wipe-right': return {p: wipe({direction: 'from-left'}), timing: linearTiming({durationInFrames: 20})};
    case 'wipe-down': return {p: wipe({direction: 'from-top'}), timing: linearTiming({durationInFrames: 20})};
    case 'flip': return {p: flip({direction: 'from-right'}), timing: springTiming({config: {damping: 14, stiffness: 80}})};
    case 'clockWipe': return {p: clockWipe({width: w, height: h}), timing: linearTiming({durationInFrames: 24})};
    case 'iris': return {p: fade(), timing: linearTiming({durationInFrames: 22})};
    default: return null;
  }
};

export const VanhienWalkthrough: React.FC<Props> = ({project}) => {
  const {width, height} = useVideoConfig();

  return (
    <AbsoluteFill className="vh5-root" style={{perspective: '1200px'}}>
      <TransitionSeries>
        {project.scenes.map((scene, index) => {
          const next = project.scenes[index + 1];
          const pres = next ? getPresentation(next.transition, width, height) : null;

          return (
            <React.Fragment key={`${scene.kind}-${index}`}>
              <TransitionSeries.Sequence durationInFrames={scene.duration}>
                <SceneView scene={scene} index={index} total={project.scenes.length} />
              </TransitionSeries.Sequence>
              {pres && (
                <TransitionSeries.Transition
                  presentation={pres.p}
                  timing={pres.timing}
                />
              )}
            </React.Fragment>
          );
        })}
      </TransitionSeries>
    </AbsoluteFill>
  );
};

const SceneView: React.FC<{
  scene: VanhienScene;
  index: number;
  total: number;
}> = ({scene, index, total}) => {
  return (
    <AbsoluteFill
      className={`vh5-scene vh5-${scene.kind}`}
      style={
        {
          '--tone': toneColor[scene.tone],
        } as React.CSSProperties
      }
    >
      <div className="vh5-scene-bg" />
      <SceneCounter index={index} total={total} />
      {scene.kind === 'hook' ? <HookScene scene={scene} /> : null}
      {scene.kind === 'teacher-overview' ? <TeacherOverviewScene scene={scene} /> : null}
      {scene.kind === 'teacher-management' ? <TeacherManagementScene scene={scene} /> : null}
      {scene.kind === 'create' ? <CreateScene scene={scene} /> : null}
      {scene.kind === 'student-dashboard' ? <StudentDashboardScene scene={scene} /> : null}
      {scene.kind === 'exam' ? <ExamScene scene={scene} /> : null}
      {scene.kind === 'chat' ? <ChatScene scene={scene} /> : null}
      {scene.kind === 'multiverse-core' ? <MultiverseCoreScene scene={scene} /> : null}
      {scene.kind === 'multiverse-exploration' ? <MultiverseExplorationScene scene={scene} /> : null}
      {scene.kind === 'results' ? <ResultsScene scene={scene} /> : null}
      {scene.kind === 'outro' ? <OutroScene scene={scene} /> : null}
    </AbsoluteFill>
  );
};

const SceneCounter: React.FC<{index: number; total: number}> = ({index, total}) => (
  <div className="vh5-counter">
    <span>{String(index + 1).padStart(2, '0')}</span>
    <i />
    <span>{String(total).padStart(2, '0')}</span>
  </div>
);

const KenBurnsShot: React.FC<{
  image: string;
  camera?: {x: number; y: number; scale: number};
  dim?: number;
  fog?: number;
  zoomMode?: 'in' | 'out' | 'static';
}> = ({image, camera = {x: 0, y: 0, scale: 1}, dim = 0.18, fog = 0.26, zoomMode = 'in'}) => {
  const frame = useCurrentFrame();
  
  let s = camera.scale;
  const tx = camera.x;
  let ty = camera.y;

  // Only very subtle zoom — barely perceptible. No panning.
  if (zoomMode === 'in') {
    s *= interpolate(frame, [0, 150], [1, 1.02], clamp);
    ty += interpolate(frame, [0, 150], [0, -6], clamp);
  } else if (zoomMode === 'out') {
    s *= interpolate(frame, [0, 150], [1.03, 1], clamp);
    ty += interpolate(frame, [0, 150], [-8, 0], clamp);
  }

  return (
    <div className="vh5-full-shot">
      <Img
        src={staticFile(image)}
        style={{
          transform: `translate(${tx}px, ${ty}px) scale(${s})`,
        }}
      />
      <div className="vh5-shot-dim" style={{opacity: dim}} />
      <div className="vh5-shot-fog" style={{opacity: fog}} />
    </div>
  );
};

const CropShot: React.FC<{
  image: string;
  region: Region;
  outputWidth: number;
}> = ({image, region, outputWidth}) => {
  const height = Math.round((region.height / region.width) * outputWidth);
  const scale = outputWidth / region.width;

  return (
    <div className="vh5-crop" style={{width: outputWidth, height}}>
      <Img
        src={staticFile(image)}
        style={{
          width: source.width * scale,
          height: source.height * scale,
          transform: `translate(${-region.x * scale}px, ${-region.y * scale}px)`,
        }}
      />
    </div>
  );
};

const PanelCard: React.FC<{
  image: string;
  region: Region;
  outputWidth: number;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({image, region, outputWidth, title, className, style}) => {
  const height = Math.round((region.height / region.width) * outputWidth);
  return (
    <div className={`vh5-panel-card ${className ?? ''}`} style={{
      ...style,
      left: 540 - outputWidth / 2,
      top: 960 - height / 2,
      transformStyle: 'preserve-3d',
    }}>
      <CropShot image={image} region={region} outputWidth={outputWidth} />
      {title && <span>{title}</span>}
    </div>
  );
};

const CopyCard: React.FC<{
  scene: VanhienScene;
  className?: string;
  hero?: boolean;
}> = ({scene, className, hero = false}) => {
  const frame = useCurrentFrame();

  // Container entrance — keeps layout stable
  const containerIn = entrance(frame, 4);
  // Staggered elements inside with bouncier feel
  const labelIn = entrance(frame, 4, 12, 180);
  const captionIn = entrance(frame, 4 + 10 + scene.headline.length * 8 + 6, 16, 120);

  return (
    <div
      className={`vh5-copy vh5-copy-${scene.side} ${hero ? 'vh5-copy-hero' : ''} ${className ?? ''}`}
      style={{
        opacity: interpolate(containerIn, [0, 0.28], [0, 1], clamp),
        transform: `${scene.side === 'center' ? 'translateX(-50%) ' : ''}translateY(${interpolate(
          containerIn,
          [0, 1],
          [34, 0],
          clamp,
        )}px)`,
      }}
    >
      {/* Label: slide-in from side */}
      <div className="vh5-label" style={{
        opacity: interpolate(labelIn, [0, 0.3], [0, 1], clamp),
        transform: `translateX(${interpolate(labelIn, [0, 1], [scene.side === 'right' ? 30 : -30, 0], clamp)}px)`,
      }}>{scene.label}</div>

      {/* Headline: each line staggers by 8 frames, very bouncy */}
      <h1>
        {scene.headline.map((line, i) => {
          const lineIn = entrance(frame, 4 + 10 + i * 8, 10, 200);
          return (
            <span key={line} style={{
              opacity: interpolate(lineIn, [0, 0.4], [0, 1], clamp),
              transform: `translateY(${interpolate(lineIn, [0, 1], [24, 0], clamp)}px) scale(${interpolate(lineIn, [0, 1], [0.95, 1], clamp)})`,
              display: 'block',
            }}>{line}</span>
          );
        })}
      </h1>

      {/* Caption: gentle fade-in last */}
      {scene.caption && <p style={{
        opacity: interpolate(captionIn, [0, 0.4], [0, 1], clamp),
      }}>{scene.caption}</p>}
    </div>
  );
};

const CursorMark: React.FC<{
  x: number;
  y: number;
  delay?: number;
}> = ({x, y, delay = 0}) => {
  const frame = useCurrentFrame();
  const t = entrance(frame, delay, 18, 138);

  return (
    <div
      className="vh5-cursor-wrap"
      style={{
        left: x,
        top: y,
        opacity: interpolate(t, [0, 0.18], [0, 1], clamp),
        transform: `translate(${interpolate(t, [0, 1], [36, 0], clamp)}px, ${interpolate(
          t,
          [0, 1],
          [22, 0],
          clamp,
        )}px)`,
      }}
    >
      <div className="vh5-pointer" />
      <div
        className="vh5-ripple"
        style={{
          transform: `scale(${interpolate(t, [0, 1], [0.74, 1.08], clamp)})`,
          opacity: interpolate(t, [0, 0.25, 1], [0, 1, 0.76], clamp),
        }}
      />
    </div>
  );
};

const FocusBox: React.FC<{
  rect: Region;
  label?: string;
  delay?: number;
  className?: string;
}> = ({rect, label, delay = 0, className}) => {
  const frame = useCurrentFrame();
  const t = entrance(frame, delay, 22, 118);

  return (
    <div
      className={`vh5-focus-box ${className ?? ''}`}
      style={{
        left: rect.x,
        top: rect.y,
        width: rect.width,
        height: rect.height,
        opacity: interpolate(t, [0, 0.22], [0, 1], clamp),
        transform: `translateY(${interpolate(t, [0, 1], [24, 0], clamp)}px) scale(${interpolate(
          t,
          [0, 1],
          [0.96, 1],
          clamp,
        )})`,
      }}
    >
      {label && <span>{label}</span>}
    </div>
  );
};

const MotionPath: React.FC<{
  d: string;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({d, delay = 0, duration = 420, className}) => {
  const frame = useCurrentFrame();
  const t = entrance(frame, delay, 22, 118);

  return (
    <svg className={`vh5-motion-path ${className ?? ''}`} viewBox="0 0 1080 1920" aria-hidden="true">
      <path
        d={d}
        style={{
          strokeDashoffset: interpolate(t, [0, 1], [duration, 0], clamp),
          opacity: interpolate(t, [0, 0.2, 1], [0, 1, 0.9], clamp),
        }}
      />
    </svg>
  );
};

const NativeSpotlight: React.FC<{
  x: number;
  y: number;
  radius: number;
  delay?: number;
}> = ({x, y, radius, delay = 0}) => {
  const frame = useCurrentFrame();
  const t = entrance(frame, delay, 20, 90);

  return (
    <div
      className="vh5-native-spotlight"
      style={{
        background: `radial-gradient(circle at ${x}px ${y}px, transparent ${interpolate(t, [0, 1], [0, radius], clamp)}px, rgba(0, 0, 0, ${interpolate(t, [0, 1], [0, 0.75], clamp)}) ${radius + 120}px)`,
      }}
    />
  );
};

const HoverPulse: React.FC<{
  x: number;
  y: number;
  width: number;
  height: number;
  delay?: number;
}> = ({x, y, width, height, delay = 0}) => {
  const frame = useCurrentFrame();
  const t = entrance(frame, delay, 20, 124);

  return (
    <div
      className="vh5-hover-pulse"
      style={{
        left: x,
        top: y,
        width,
        height,
        opacity: interpolate(t, [0, 0.22, 1], [0, 1, 0.72], clamp),
        transform: `scale(${interpolate(t, [0, 1], [0.92, 1.04], clamp)})`,
      }}
    />
  );
};

const TooltipNote: React.FC<{
  x: number;
  y: number;
  title: string;
  delay?: number;
}> = ({x, y, title, delay = 0}) => {
  const frame = useCurrentFrame();
  const t = entrance(frame, delay, 16, 110);

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        zIndex: 50,
        opacity: interpolate(t, [0, 0.2], [0, 1], clamp),
        transform: `scale(${interpolate(t, [0, 1], [0.5, 1], clamp)}) translateY(${interpolate(t, [0, 1], [30, 0], clamp)}px)`,
        background: '#f8faf5',
        color: '#061b17',
        padding: '16px 26px',
        borderRadius: '999px',
        fontWeight: 800,
        fontSize: '26px',
        boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        border: '3px solid #f97316'
      }}
    >
      <div style={{width: 14, height: 14, borderRadius: 7, background: '#f97316'}} />
      {title}
    </div>
  );
};

const HookScene: React.FC<{scene: VanhienScene}> = ({scene}) => {
  return (
    <>
      <KenBurnsShot image={scene.image} camera={{x: 0, y: -10, scale: 1.01}} dim={0.03} fog={0.12} zoomMode="static" />
      <div className="vh5-hook-glow" />
      <CopyCard scene={scene} className="vh5-hook-copy" hero />
    </>
  );
};

const TeacherOverviewScene: React.FC<{scene: VanhienScene}> = ({scene}) => {
  const frame = useCurrentFrame();
  const panelIn = entrance(frame, 6, 12, 140); // bouncy scale-in

  return (
    <>
      <KenBurnsShot image={scene.image} camera={{x: 0, y: -6, scale: 1.02}} dim={0.15} fog={0.2} zoomMode="static" />
      <PanelCard
        image={scene.image}
        region={slices.teacherOverviewPanel}
        outputWidth={960}
        title="Dashboard hệ thống"
        className="vh5-overview-panel"
        style={{
          opacity: interpolate(panelIn, [0, 0.24], [0, 1], clamp),
          transform: `translateY(${interpolate(panelIn, [0, 1], [-100, 0], clamp)}px) scale(${interpolate(panelIn, [0, 1], [0.8, 1], clamp)}) rotateY(${interpolate(panelIn, [0, 1], [-20, 0], clamp)}deg)`,
        }}
      />
      <CopyCard scene={scene} className="vh5-overview-copy" />
    </>
  );
};

const TeacherManagementScene: React.FC<{scene: VanhienScene}> = ({scene}) => {
  const frame = useCurrentFrame();
  const p1In = entrance(frame, 4, 12, 160);
  const p1Out = interpolate(frame, [65, 75], [1, 0], clamp);
  const p2In = entrance(frame, 72, 12, 160);

  return (
    <>
      <KenBurnsShot image={scene.image} camera={{x: 0, y: -6, scale: 1.02}} dim={0.1} fog={0.2} zoomMode="static" />
      {/* Sequential Reveal: Panel 1 shows then fades, Panel 2 appears */}
      <PanelCard
        image={scene.image}
        region={slices.teacherClassesPanel}
        outputWidth={940}
        title="Lớp học"
        className="vh5-module-classes"
        style={{
          opacity: interpolate(p1In, [0, 0.24], [0, 1], clamp) * p1Out,
          transform: `scale(${interpolate(p1In, [0, 1], [0.85, 1], clamp)}) rotateY(${interpolate(p1In, [0, 1], [-15, 0], clamp)}deg)`,
          zIndex: 2,
        }}
      />
      <PanelCard
        image={scene.secondImage ?? scene.image}
        region={slices.teacherLibraryPanel}
        outputWidth={940}
        title="Thư viện"
        className="vh5-library-panel"
        style={{
          opacity: interpolate(p2In, [0, 0.24], [0, 1], clamp),
          transform: `scale(${interpolate(p2In, [0, 1], [0.85, 1], clamp)}) rotateY(${interpolate(p2In, [0, 1], [15, 0], clamp)}deg)`,
          zIndex: 2,
        }}
      />
      <CopyCard scene={scene} className="vh5-management-copy" />
    </>
  );
};

const CreateScene: React.FC<{scene: VanhienScene}> = ({scene}) => {
  return (
    <>
      <KenBurnsShot image={scene.image} camera={{x: 0, y: -10, scale: 1.02}} dim={0.06} fog={0.16} zoomMode="static" />
      <NativeSpotlight x={540} y={960} radius={350} delay={4} />
      <HoverPulse x={826} y={846} width={164} height={70} delay={6} />
      <CursorMark x={876} y={880} delay={10} />
      <CopyCard scene={scene} className="vh5-create-copy" />
    </>
  );
};

const StudentDashboardScene: React.FC<{scene: VanhienScene}> = ({scene}) => {
  const frame = useCurrentFrame();
  const upIn = entrance(frame, 6, 14, 140);

  return (
    <>
      <KenBurnsShot image={scene.image} camera={{x: 0, y: -6, scale: 1.02}} dim={0.16} fog={0.2} zoomMode="static" />
      <PanelCard
        image={scene.image}
        region={slices.studentDash}
        outputWidth={940}
        className="vh5-student-dash-bg"
        style={{
          opacity: interpolate(upIn, [0, 0.24], [0, 0.5], clamp),
          transform: `translateY(-20px) scale(1.05)`,
          zIndex: 0,
        }}
      />
      <PanelCard
        image={scene.image}
        region={focusRects.studentUpcoming}
        outputWidth={880}
        title="Bài sắp tới"
        className="vh5-student-dash-1"
        style={{
          opacity: interpolate(upIn, [0, 0.24], [0, 1], clamp),
          transform: `translateY(${interpolate(upIn, [0, 1], [-200, -320], clamp)}px) rotateX(${interpolate(upIn, [0, 1], [-15, 0], clamp)}deg)`,
          zIndex: 1,
        }}
      />
      <TooltipNote x={140} y={400} title="Giao diện cá nhân hóa" delay={12} />
      <TooltipNote x={580} y={540} title="Bài tập cần hoàn thành" delay={18} />
      <CopyCard scene={scene} className="vh5-student-copy" />
    </>
  );
};

const ExamScene: React.FC<{scene: VanhienScene}> = ({scene}) => (
  <>
    <KenBurnsShot image={scene.image} camera={{x: 0, y: 0, scale: 1.01}} dim={0.06} fog={0.14} zoomMode="static" />
    <CursorMark x={920} y={1500} delay={15} />
    <TooltipNote x={240} y={600} title="Làm bài thi trực tiếp" delay={10} />
    <CopyCard scene={scene} className="vh5-exam-copy" />
  </>
);

const ChatScene: React.FC<{scene: VanhienScene}> = ({scene}) => {
  const frame = useCurrentFrame();
  const mainIn = entrance(frame, 8, 22, 110);
  const inputIn = entrance(frame, 16, 12, 160);

  return (
    <>
      <KenBurnsShot image={scene.image} camera={{x: 0, y: -6, scale: 1.02}} dim={0.18} fog={0.3} zoomMode="static" />
      <div className="vh5-chat-glow" />
      <PanelCard
        image={scene.image}
        region={slices.chatThread}
        outputWidth={960}
        className="vh5-chat-main"
        style={{
          opacity: interpolate(mainIn, [0, 0.24], [0, 1], clamp),
          transform: `translateY(${interpolate(mainIn, [0, 1], [100, -280], clamp)}px) rotateX(${interpolate(mainIn, [0, 1], [-15, 0], clamp)}deg)`,
          zIndex: 1,
        }}
      />
      <PanelCard
        image={scene.secondImage ?? scene.image}
        region={slices.chatInput}
        outputWidth={880}
        className="vh5-chat-input"
        style={{
          opacity: interpolate(inputIn, [0, 0.24], [0, 1], clamp),
          transform: `translateY(${interpolate(inputIn, [0, 1], [300, 140], clamp)}px) rotateZ(${interpolate(inputIn, [0, 1], [6, 0], clamp)}deg)`,
          zIndex: 2,
        }}
      />
      {/* CSS Typing Interaction for Chat */}
      <div className="vh5-typing-pulse" style={{
        position: 'absolute',
        bottom: 120, left: 160,
        opacity: Math.floor(frame / 8) % 2 === 0 ? 1 : 0.4,
        color: '#f97316', fontSize: 32, fontWeight: 'bold'
      }}>|</div>
      <CopyCard scene={scene} className="vh5-chat-copy" hero />
    </>
  );
};

const MultiverseCoreScene: React.FC<{scene: VanhienScene}> = ({scene}) => {
  const frame = useCurrentFrame();
  const lineIn = entrance(frame, 10, 20, 90);
  const line2In = entrance(frame, 20, 20, 90);
  const line3In = entrance(frame, 30, 20, 90);

  return (
    <>
      <KenBurnsShot image={scene.image} camera={{x: 0, y: -8, scale: 1.02}} dim={0.15} fog={0.2} zoomMode="in" />
      {/* Callout Lines: SVG paths that draw themselves from root to branches */}
      <svg className="vh5-multi-lines" viewBox="0 0 1080 1920" aria-hidden="true" style={{zIndex: 10, position: 'absolute', inset: 0, pointerEvents: 'none'}}>
        <path
          d="M504 480 L 504 520 Q 504 560, 380 620 L 260 700"
          style={{strokeDasharray: 400, strokeDashoffset: interpolate(lineIn, [0, 1], [400, 0], clamp), strokeWidth: 5, stroke: '#f97316', fill: 'none', strokeLinecap: 'round'}}
        />
        <path
          d="M504 480 L 504 520 Q 504 560, 630 620 L 750 700"
          style={{strokeDasharray: 400, strokeDashoffset: interpolate(line2In, [0, 1], [400, 0], clamp), strokeWidth: 5, stroke: '#f97316', fill: 'none', strokeLinecap: 'round'}}
        />
        <path
          d="M504 480 L 504 700"
          style={{strokeDasharray: 300, strokeDashoffset: interpolate(line3In, [0, 1], [300, 0], clamp), strokeWidth: 5, stroke: '#b4493e', fill: 'none', strokeLinecap: 'round'}}
        />
      </svg>
      <TooltipNote x={80} y={710} title="Nhánh 1" delay={14} />
      <TooltipNote x={700} y={710} title="Nhánh 2" delay={24} />
      <TooltipNote x={420} y={720} title="Nhánh gốc" delay={34} />
      <CopyCard scene={scene} className="vh5-multi-copy" hero />
    </>
  );
};

const MultiverseExplorationScene: React.FC<{scene: VanhienScene}> = ({scene}) => {
  const frame = useCurrentFrame();
  // Focus Mask: moves from left panel area to right reader area
  const maskX = interpolate(frame, [10, 50, 70, 110], [200, 200, 600, 600], clamp);
  const maskY = interpolate(frame, [10, 50, 70, 110], [300, 300, 500, 500], clamp);
  const maskOp = interpolate(frame, [6, 14], [0, 1], clamp);

  return (
    <>
      <KenBurnsShot image={scene.image} camera={{x: 0, y: -6, scale: 1.02}} dim={0.08} fog={0.12} zoomMode="out" />
      {/* Dark overlay with bright rectangular hole that moves */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none',
        opacity: maskOp,
        background: `radial-gradient(ellipse 420px 320px at ${maskX}px ${maskY}px, transparent 0%, rgba(0,0,0,0.65) 100%)`,
      }} />
      <TooltipNote x={80} y={540} title="Danh sách mạch truyện" delay={10} />
      <TooltipNote x={580} y={740} title="Nội dung nhánh vũ trụ" delay={50} />
      <CopyCard scene={scene} className="vh5-story-copy" hero />
    </>
  );
};

const ResultsScene: React.FC<{scene: VanhienScene}> = ({scene}) => {
  const frame = useCurrentFrame();
  const p1In = entrance(frame, 6, 16, 120);
  const p1Out = interpolate(frame, [60, 72], [1, 0], clamp);
  const p2In = entrance(frame, 68, 16, 120);

  return (
    <>
      <KenBurnsShot image={scene.image} camera={{x: 0, y: -8, scale: 1.02}} dim={0.15} fog={0.25} zoomMode="static" />
      {/* Sequential Reveal: Student result first, then teacher review */}
      <PanelCard
        image={scene.image}
        region={slices.resultCard}
        outputWidth={800}
        title="Góc nhìn học sinh"
        className="vh5-results-student"
        style={{
          opacity: interpolate(p1In, [0, 0.24], [0, 1], clamp),
          transform: `translateX(${interpolate(p1In, [0, 1], [-300, 0], clamp)}px) scale(${interpolate(p1In, [0, 1], [0.9, 1], clamp)}) translateY(-450px)`,
          zIndex: 2,
        }}
      />
      
      {/* Object-Object Interaction: Magnetic Connector Line appearing between the two panels */}
      <svg className="vh5-connector" viewBox="0 0 1080 1920" aria-hidden="true" style={{zIndex: 5, position: 'absolute', inset: 0, pointerEvents: 'none'}}>
        <path
          d="M 540 682 Q 700 716, 540 750"
          style={{
            strokeDasharray: 300,
            strokeDashoffset: interpolate(p2In, [0, 1], [300, 0], clamp),
            strokeWidth: 6, stroke: '#128264', fill: 'none', strokeLinecap: 'round',
            opacity: interpolate(p2In, [0, 0.5], [0, 1], clamp)
          }}
        />
        <circle cx="540" cy="750" r="10" fill="#128264" opacity={interpolate(p2In, [0.8, 1], [0, 1], clamp)} />
      </svg>

      <PanelCard
        image={scene.altImage ?? scene.image}
        region={slices.reviewPanel}
        outputWidth={800}
        title="Góc nhìn giáo viên"
        className="vh5-results-teacher"
        style={{
          opacity: interpolate(p2In, [0, 0.24], [0, 1], clamp),
          transform: `translateX(${interpolate(p2In, [0, 1], [300, 0], clamp)}px) scale(${interpolate(p2In, [0, 1], [0.9, 1], clamp)}) translateY(30px)`,
          zIndex: 6,
        }}
      />
      <CopyCard scene={scene} className="vh5-results-copy" hero />
    </>
  );
};

const OutroScene: React.FC<{scene: VanhienScene}> = ({scene}) => {
  return (
    <>
      <KenBurnsShot image={scene.image} camera={{x: 0, y: -6, scale: 1.02}} dim={0.18} fog={0.25} zoomMode="static" />
      <CopyCard scene={scene} className="vh5-outro-copy" hero />
    </>
  );
};
