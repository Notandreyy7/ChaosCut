# ChaosCut 🎬⚡

> Transforme caos em conteúdo viral

ChaosCut é um SaaS MVP focado em streamers IRL e criadores de daily vlogs (estilo Kai Cenat, iShowSpeed, TotA). A ferramenta analisa lives longas do YouTube ou Twitch e identifica momentos clipáveis perfeitos para Shorts, Reels e TikTok.

## 🚀 Features

- ✅ Análise instantânea de lives (YouTube e Twitch)
- ✅ Identificação automática de momentos virais
- ✅ 5 tipos de reação: Shock, Engraçado, Caótico, Emocional, Polêmico
- ✅ Sistema de intensidade (1-10) para cada momento
- ✅ Timestamps precisos com função de copiar
- ✅ Filtros por tipo de reação
- ✅ Ordenação por intensidade ou timestamp
- ✅ Interface dark mode moderna
- ✅ Sem necessidade de login/cadastro
- ✅ Totalmente responsivo

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Styling:** Tailwind CSS
- **Ícones:** Lucide React
- **Deploy:** Vercel (pronto para deploy)

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos

1. **Clone ou baixe o projeto:**

```bash
cd chaoscut
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

4. **Abra o navegador:**

Acesse [http://localhost:3000](http://localhost:3000)

## 🎯 Como Usar

1. **Página Inicial:**
   - Cole o link de uma live do YouTube ou Twitch
   - Clique em "Analisar Live"

2. **Página de Análise:**
   - Visualize todos os momentos clipáveis encontrados
   - Use os filtros para encontrar tipos específicos de reação
   - Ordene por intensidade ou timestamp
   - Clique em "Copiar" para copiar o timestamp

3. **Workflow recomendado:**
   - Encontre os melhores momentos no ChaosCut
   - Copie os timestamps
   - Abra seu editor de vídeo favorito
   - Use os timestamps para criar clips virais

## 📁 Estrutura do Projeto

```
chaoscut/
├── app/
│   ├── analyze/
│   │   └── page.tsx          # Página de análise/resultados
│   ├── layout.tsx             # Layout raiz
│   ├── page.tsx               # Landing page
│   └── globals.css            # Estilos globais
├── components/
│   ├── Badge.tsx              # Badge de tipo de reação
│   ├── Button.tsx             # Componente de botão
│   └── MomentCard.tsx         # Card de momento clipável
├── lib/
│   └── mock-data.ts           # Dados mockados
├── types/
│   └── index.ts               # Tipos TypeScript
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Design

- **Dark Mode:** Interface escura por padrão
- **Cores principais:** Purple (#A855F7), Pink (#EC4899)
- **Tipografia:** Inter (Google Fonts)
- **UI inspirada em:** Streaming platforms, Creator tools

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa linter
```

## 🚀 Deploy na Vercel

1. Faça push do código para um repositório Git
2. Conecte o repositório na [Vercel](https://vercel.com)
3. Deploy automático! ✨

Ou use o Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 💡 Dados Mockados

Atualmente, o app usa dados completamente mockados. Os momentos clipáveis são gerados automaticamente para demonstração.

**Para implementar com dados reais:**
1. Integre com APIs de transcrição (ex: Whisper, AssemblyAI)
2. Implemente análise de sentimento/emoção
3. Adicione backend (ex: Supabase, Firebase)
4. Configure processamento de vídeo

## 🎯 Público-Alvo

- Streamers IRL (Kai Cenat, iShowSpeed, xQc)
- Daily vloggers
- Editores de vídeo
- Criadores de conteúdo vertical (TikTok, Shorts, Reels)

## 📝 Licença

Este é um projeto MVP para demonstração.

## 🤝 Contribuindo

Este é um MVP. Sugestões e melhorias são bem-vindas!

---

**Feito com ⚡ para criadores de conteúdo**
