'use client';

import React, { useState } from 'react';
import { ClipMoment } from '@/types';
import { Badge } from './Badge';
import { Button } from './Button';
import { Copy, Check } from 'lucide-react';

interface MomentCardProps {
  moment: ClipMoment;
}

export function MomentCard({ moment }: MomentCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(moment.timestamp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-purple-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-purple-900/10">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-purple-400 font-mono">
            {moment.timestamp}
          </div>
          <Badge type={moment.reactionType} />
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="shrink-0"
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

      <p className="text-zinc-300 text-sm leading-relaxed italic">
        "{moment.transcript}"
      </p>

      <div className="mt-4 flex items-center gap-2">
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
    </div>
  );
}
