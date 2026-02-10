'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo, useState } from 'react';
import Link from 'next/link';
import { getMockAnalysis } from '@/lib/mock-data';
import { MomentCard } from '@/components/MomentCard';
import { Button } from '@/components/Button';
import { ReactionType } from '@/types';
import { ArrowLeft, Filter, Youtube, TwitchIcon, Zap } from 'lucide-react';

function AnalyzeContent() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url') || '';
  const analysis = getMockAnalysis(url);

  const [selectedFilter, setSelectedFilter] = useState<ReactionType | 'all'>('all');
  const [sortBy, setSortBy] = useState<'timestamp' | 'intensity'>('intensity');

  const reactionTypes: Array<{ value: ReactionType | 'all'; label: string; emoji: string }> = [
    { value: 'all', label: 'Todos', emoji: '🎬' },
    { value: 'Shock', label: 'Shock', emoji: '😱' },
    { value: 'Engraçado', label: 'Engraçado', emoji: '😂' },
    { value: 'Caótico', label: 'Caótico', emoji: '🔥' },
    { value: 'Emocional', label: 'Emocional', emoji: '💙' },
    { value: 'Polêmico', label: 'Polêmico', emoji: '⚡' },
  ];

  const filteredAndSortedMoments = useMemo(() => {
    let moments = analysis.moments;

    // Filtrar por tipo
    if (selectedFilter !== 'all') {
      moments = moments.filter(m => m.reactionType === selectedFilter);
    }

    // Ordenar
    if (sortBy === 'intensity') {
      moments = [...moments].sort((a, b) => b.intensity - a.intensity);
    } else {
      moments = [...moments].sort((a, b) => a.timestampSeconds - b.timestampSeconds);
    }

    return moments;
  }, [analysis.moments, selectedFilter, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-500" />
                <span className="text-lg font-bold text-white">ChaosCut</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Video Info */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center shrink-0">
              {analysis.platform === 'youtube' ? (
                <Youtube className="w-6 h-6 text-purple-400" />
              ) : (
                <TwitchIcon className="w-6 h-6 text-purple-400" />
              )}
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white mb-2">
                {analysis.videoTitle}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">Duração:</span>
                  <span>{analysis.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">Plataforma:</span>
                  <span className="capitalize">{analysis.platform}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">Momentos encontrados:</span>
                  <span className="font-semibold text-white">{analysis.totalMoments}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-semibold text-white">Filtros</h2>
          </div>

          {/* Reaction Type Filter */}
          <div className="mb-4">
            <div className="text-sm text-zinc-400 mb-3">Tipo de Reação</div>
            <div className="flex flex-wrap gap-2">
              {reactionTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedFilter(type.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedFilter === type.value
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/30'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  <span className="mr-1.5">{type.emoji}</span>
                  {type.label}
                  {type.value === 'all' && (
                    <span className="ml-2 text-xs opacity-70">({analysis.totalMoments})</span>
                  )}
                  {type.value !== 'all' && (
                    <span className="ml-2 text-xs opacity-70">
                      ({analysis.moments.filter(m => m.reactionType === type.value).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div>
            <div className="text-sm text-zinc-400 mb-3">Ordenar por</div>
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy('intensity')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  sortBy === 'intensity'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/30'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                🔥 Intensidade
              </button>
              <button
                onClick={() => setSortBy('timestamp')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  sortBy === 'timestamp'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/30'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                ⏱️ Timestamp
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-zinc-400">
            Mostrando <span className="text-white font-semibold">{filteredAndSortedMoments.length}</span> {filteredAndSortedMoments.length === 1 ? 'momento' : 'momentos'}
            {selectedFilter !== 'all' && (
              <span className="ml-1">
                • <span className="text-purple-400">{selectedFilter}</span>
              </span>
            )}
          </p>
        </div>

        {/* Moments List */}
        <div className="grid gap-4">
          {filteredAndSortedMoments.map((moment) => (
            <MomentCard key={moment.id} moment={moment} />
          ))}
        </div>

        {filteredAndSortedMoments.length === 0 && (
          <div className="text-center py-16">
            <div className="text-zinc-500 text-lg">
              Nenhum momento encontrado para este filtro
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setSelectedFilter('all')}
              className="mt-4"
            >
              Limpar filtros
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

export default function AnalyzePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-zinc-400">Carregando análise...</p>
        </div>
      </div>
    }>
      <AnalyzeContent />
    </Suspense>
  );
}
