# Afonso Nobre Advocacia — landing page

Next.js (App Router) + TypeScript, CSS puro com custom properties. Sem Tailwind, sem bibliotecas de UI.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # produção
```

## Estrutura

- `lib/content.ts` — todo o conteúdo (áreas, sócias, reconhecimentos, contatos, endereços). Edite aqui.
- `app/page.tsx` — composição da página.
- `app/globals.css` — tokens (`:root`) e estilos por componente (prefixo `an-`).
- `components/` — header com menu mobile, retrato com fallback e selos.

## Pendências

- **Imagens:** carregadas direto de `afonsonobre.com.br/wp-content/uploads`. Para independência do WordPress, baixe os arquivos para `public/` e troque as URLs em `lib/content.ts`.
- **Imagens do portfólio RD Station** (`conteudo.afonsonobre.com.br/portifolio`): o CDN bloqueia acesso automatizado, então não foram incorporadas.
