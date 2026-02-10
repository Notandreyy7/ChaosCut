'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { Zap, TrendingUp, Clock, Target } from 'lucide-react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAnalyze = () => {
    if (!url.trim()) return;
    
    setIsLoading(true);
    
    // Simula processamento
    setTimeout(() => {
      const encodedUrl = encodeURIComponent(url);
      router.push(`/analyze?url=${encodedUrl}`);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAnalyze();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-purple-500" />
            <span className="text-xl font-bold text-white">ChaosCut</span>
          </div>
          <div className="text-sm text-zinc-400">
            Beta v1.0
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400 mb-6">
            <Zap className="w-4 h-4" />
            <span>Para streamers IRL e criadores de conteúdo</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme caos em
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              conteúdo viral
            </span>
          </h1>
          
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Encontre automaticamente os melhores momentos das suas lives para criar Shorts, Reels e TikToks que explodem.
          </p>

          {/* Input Section */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
            <div className="mb-4">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Cole o link da live (YouTube ou Twitch)..."
                className="w-full px-6 py-4 bg-zinc-950 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            
            <Button
              onClick={handleAnalyze}
              disabled={!url.trim() || isLoading}
              size="lg"
              className="w-full"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Analisando...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  Analisar Live
                </>
              )}
            </Button>

            <p className="text-xs text-zinc-500 mt-3">
              Funciona com YouTube e Twitch • Sem necessidade de login
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Como funciona
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                1. Cole o link
              </h3>
              <p className="text-zinc-400 text-sm">
                Adicione a URL da sua live do YouTube ou Twitch
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                2. Análise instantânea
              </h3>
              <p className="text-zinc-400 text-sm">
                IA identifica momentos com potencial viral
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                3. Baixe os clipes
              </h3>
              <p className="text-zinc-400 text-sm">
                Gere e baixe clipes prontos em MP4, otimizados para redes sociais
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="text-purple-400 font-semibold mb-2">
              ✂️ Gera Clipes Automaticamente
            </div>
            <p className="text-zinc-400 text-sm">
              Baixe clipes prontos em MP4, otimizados para vertical (9:16)
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="text-purple-400 font-semibold mb-2">
              ⚡ Análise por Reação
            </div>
            <p className="text-zinc-400 text-sm">
              Identifica Shock, Engraçado, Caótico, Emocional e Polêmico
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="text-purple-400 font-semibold mb-2">
              📦 Download em Lote
            </div>
            <p className="text-zinc-400 text-sm">
              Gere e baixe todos os clipes de uma vez com um clique
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="text-purple-400 font-semibold mb-2">
              🔥 Score de Intensidade
            </div>
            <p className="text-zinc-400 text-sm">
              Veja quais momentos têm mais potencial viral
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="text-purple-400 font-semibold mb-2">
              🎯 Duração Otimizada
            </div>
            <p className="text-zinc-400 text-sm">
              Cada clipe tem a duração ideal para Shorts, Reels e TikTok
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="text-purple-400 font-semibold mb-2">
              💨 Sem Cadastro
            </div>
            <p className="text-zinc-400 text-sm">
              Cole o link e comece a usar imediatamente
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-24">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-zinc-500">
          <p>ChaosCut • Feito para criadores de conteúdo</p>
        </div>
      </footer>
    </div>
  );
}
