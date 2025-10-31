## Portfólio — Weslei B Santana

Aplicação moderna de portfólio construída com Next.js 16 (App Router), TypeScript, Tailwind CSS e componentes shadcn/ui. Suporta i18n (pt, en, es, fr), tema claro/escuro e animações com Framer Motion.

### Tecnologias
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

### Pré-requisitos
- Node.js 18+
- npm (ou yarn, pnpm, bun)

### Como rodar localmente
```bash
npm install
npm run dev
# Acesse: http://localhost:3000
```

### Scripts
- `dev`: ambiente de desenvolvimento
- `build`: build de produção
- `start`: iniciar servidor de produção
- `lint`: análise estática

### Estrutura principal
- `src/app`: rotas, layouts, páginas e i18n
- `src/components`: componentes reutilizáveis (UI, navegação, seções)
- `src/data/profile.ts`: dados do perfil e links sociais
- `public/`: assets estáticos

### i18n
As traduções ficam em `src/i18n/messages/*.json`. O idioma é escolhido pela rota (`/[locale]`).

### Contato
- GitHub: `https://github.com/wesleibruno`
- LinkedIn: `https://www.linkedin.com/in/wesleibruno/`
- WhatsApp: `https://wa.me/5543996627695`
- Email: `weslei945@gmail.com`

### Deploy
Recomendado via Vercel. Após `npm run build`, conecte o repositório na Vercel e defina o framework como Next.js.

### Licença
Uso pessoal. Sinta-se à vontade para se inspirar no código, mantendo créditos quando aplicável.


