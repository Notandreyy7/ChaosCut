# 🚀 Quick Start - ChaosCut

## Instalação Rápida (3 passos)

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar servidor
```bash
npm run dev
```

### 3. Abrir no navegador
```
http://localhost:3000
```

## ✨ Pronto!

A aplicação estará rodando em modo de desenvolvimento.

## 🎯 Como Testar

1. Na página inicial, cole qualquer URL (ex: `https://youtube.com/watch?v=test`)
2. Clique em "Analisar Live"
3. Explore os momentos clipáveis mockados
4. Teste os filtros e ordenação
5. Clique em "Copiar" para copiar timestamps

## 🔧 Comandos Úteis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificar código
```

## 📦 Estrutura Simplificada

```
app/
  page.tsx           → Landing Page
  analyze/page.tsx   → Resultados
  
components/
  Button.tsx         → Botões
  Badge.tsx          → Badges de reação
  MomentCard.tsx     → Cards dos momentos
  
lib/
  mock-data.ts       → Dados de exemplo
```

## 🎨 Personalização

- **Cores:** `tailwind.config.ts`
- **Dados Mock:** `lib/mock-data.ts`
- **Tipos de Reação:** `types/index.ts`

## ⚡ Deploy Rápido na Vercel

```bash
npm i -g vercel
vercel
```

Ou conecte seu repositório Git em [vercel.com](https://vercel.com)

## 💡 Dicas

- Todos os dados são mockados (sem backend necessário)
- Dark mode ativo por padrão
- Sem necessidade de autenticação
- Responsivo (funciona em mobile)

---

**Dúvidas?** Veja o README.md completo.
