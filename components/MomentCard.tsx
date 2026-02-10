'use client';

import React, { useState } from 'react';
import { ClipMoment } from '@/types';
import { Badge } from './Badge';
import { Button } from './Button';
import { Copy, Check, Download, Scissors, Sparkles } from 'lucide-react';
import { generateClip, formatDuration } from '@/lib/clip-generator';

interface MomentCardProps {
  moment: ClipMoment;
  videoUrl: string;
}

export function MomentCard({ moment, videoUrl }: MomentCardProps) {
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(moment.timestamp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerateClip = async () => {
    setIsGenerating(true);
    try {
      await generateClip(
        moment.id,
        moment.timestamp,
        moment.clipDuration,
        moment.reactionType
      );
      setGenerated(true);
      setTimeout(() => setGenerated(false), 3000);
    } catch (error) {
      console.error('Erro ao gerar clipe:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-purple-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-purple-900/10">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="text-2xl font-bold text-purple-400 font-mono">
            {moment.timestamp}
          </div>
          <Badge type={moment.reactionType} />
          <div className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
            {formatDuration(moment.clipDuration)}
          </div>
        </div>
        
        <div className="flex gap-2 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-1.5" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-1.5" />
                Copiar
              </>
            )}
          </Button>
        </div>
      </div>

      <p className="text-zinc-300 text-sm leading-relaxed italic mb-4">
        "{moment.transcript}"
      </p>

      <div className="flex items-center gap-2 mb-4">
        <div className="text-xs text-zinc-500">Intensidade:</div>
        <div className="flex gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-4 rounded-full ${
                i < moment.intensity ? 'bg-purple-500' : 'bg-zinc-800'
              }`}
            />
          ))}
        </div>
        <div className="text-xs text-purple-400 font-medium ml-1">
          {moment.intensity}/10
        </div>
      </div>

      {/* Botão de Gerar Clipe */}
      <Button
        variant={generated ? 'secondary' : 'primary'}
        size="sm"
        onClick={handleGenerateClip}
        disabled={isGenerating}
        className="w-full"
      >
        {isGenerating ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
            Gerando clipe...
          </>
        ) : generated ? (
          <>
            <Check className="w-4 h-4 mr-2" />
            Clipe baixado!
          </>
        ) : (
          <>
            <Scissors className="w-4 h-4 mr-2" />
            Gerar Clipe ({formatDuration(moment.clipDuration)})
          </>
        )}
      </Button>

      {/* Info adicional */}
      <div className="mt-3 text-xs text-zinc-500 flex items-center gap-1">
        <Sparkles className="w-3 h-3" />
        <span>Clipe otimizado para Shorts, Reels e TikTok (9:16)</span>
      </div>
    </div>
  );
}
