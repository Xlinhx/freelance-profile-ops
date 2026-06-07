export type SceneLayout = 'chaos' | 'flow' | 'dashboard' | 'result' | 'cta';

export type WalkthroughScene = {
  id: string;
  start: number;
  duration: number;
  kicker: string;
  headline: string;
  caption: string;
  layout: SceneLayout;
  labels: string[];
  media?: string;
};

export type WalkthroughProject = {
  id: string;
  fps: number;
  durationInFrames: number;
  title: string;
  subtitle: string;
  clientLabel: string;
  accent: string;
  scenes: WalkthroughScene[];
};
