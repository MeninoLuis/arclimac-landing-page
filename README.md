# Arclimac — Landing Page

Landing page ultra-premium, mobile-first, para a Arclimac Comércio e Serviços
(ar-condicionado em Campinas e região). Stack: **Next.js 14 (App Router) +
TypeScript + Tailwind CSS + Framer Motion**.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Build de produção:

```bash
npm run build
npm start
```

## Antes de publicar — 3 ajustes obrigatórios

1. **Número de WhatsApp**
   Edite `lib/whatsapp.ts` e troque `WHATSAPP_NUMBER` pelo número real da
   Arclimac (formato internacional, só dígitos, ex.: `5519912345678`).

2. **Vídeo do Hero**
   O componente `components/Hero.tsx` espera um vídeo em loop em
   `public/videos/hero-loop.mp4` (formato paisagem, sem áudio, ~15–30s,
   comprimido para web — recomenda-se H.264, < 8MB). Este pacote **não
   inclui o arquivo de vídeo em si** — eu não gero arquivos de vídeo, apenas
   código. Gere o vídeo cinematográfico com a ferramenta de IA de sua
   escolha (ambiente premium, fluxo de ar frio, tons azul-gelo/prata) e
   salve-o nesse caminho. Adicione também um frame estático em
   `public/images/hero-poster.jpg` para exibição instantânea antes do vídeo
   carregar. Caso o vídeo esteja ausente ou falhe ao carregar, o hero usa
   automaticamente um fundo animado (gradientes fluidos em CSS/Framer
   Motion) como fallback elegante — o layout nunca fica quebrado.

3. **Dados institucionais**
   Em `components/Footer.tsx`, substitua e-mail, telefone e CNPJ pelos
   dados reais da empresa.

## Estrutura

```
app/
  layout.tsx        Fontes (Fraunces, Manrope, Space Grotesk) e metadata
  page.tsx           Composição das seções
  globals.css         Tokens visuais e utilitários
components/
  Header.tsx          Navbar fixa com CTA de WhatsApp
  Hero.tsx            Hero cinematográfico full-screen
  Simulator.tsx        Simulador animado "Monte seu pedido em 3 passos"
  ServiceCards.tsx     Cards de serviço com reveal 3D no scroll
  WhyChoose.tsx         "Por Que Escolher"
  Testimonials.tsx      Prova social (marquee)
  FinalCTA.tsx           Banner final premium
  Footer.tsx              Rodapé institucional
  WhatsAppBubble.tsx       Bolha flutuante permanente
lib/
  whatsapp.ts               Geração centralizada de links wa.me
```

## Notas de design

- Paleta "cold luxury": preto-azulado profundo (`ink`), gelo/ciano (`ice`),
  platina (`platinum`) e verde-sinalizador (`signal`) reservado para os CTAs
  de WhatsApp.
- Tipografia: Fraunces (display, uso comedido), Manrope (corpo), Space
  Grotesk (rótulos/mono).
- Todo o texto de interface está em português, conforme especificado no
  briefing.
- `prefers-reduced-motion` é respeitado globalmente.
