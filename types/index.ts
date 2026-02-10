export type ReactionType = 'Shock' | 'Engraçado' | 'Caótico' | 'Emocional' | 'Polêmico';

export interface ClipMoment {
  id: string;
  timestamp: string;
  timestampSeconds: number;
  reactionType: ReactionType;
  transcript: string;
  intensity: number; // 1-10
}

export interface AnalysisResult {
  videoUrl: string;
  videoTitle: string;
  platform: 'youtube' | 'twitch';
  duration: string;
  totalMoments: number;
  moments: ClipMoment[];
}
