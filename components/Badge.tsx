import React from 'react';
import { ReactionType } from '@/types';

interface BadgeProps {
  type: ReactionType;
}

const badgeStyles: Record<ReactionType, string> = {
  Shock: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Engraçado: 'bg-green-500/20 text-green-400 border-green-500/30',
  Caótico: 'bg-red-500/20 text-red-400 border-red-500/30',
  Emocional: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Polêmico: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

const badgeEmojis: Record<ReactionType, string> = {
  Shock: '😱',
  Engraçado: '😂',
  Caótico: '🔥',
  Emocional: '💙',
  Polêmico: '⚡',
};

export function Badge({ type }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${badgeStyles[type]}`}>
      <span>{badgeEmojis[type]}</span>
      <span>{type}</span>
    </span>
  );
}
