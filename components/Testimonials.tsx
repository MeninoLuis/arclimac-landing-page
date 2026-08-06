"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Chegaram no horário combinado, explicaram tudo antes de começar e deixaram o ar-condicionado funcionando como novo.",
    name: "Marina C.",
    role: "Cambuí, Campinas",
  },
  {
    quote:
      "Contratamos o PMOC para o escritório e o laudo técnico ficou pronto no prazo, com todo o suporte para a norma.",
    name: "Rafael T.",
    role: "Administradora Predial",
  },
  {
    quote:
      "Fizeram a higienização completa dos splits e o cheiro de mofo que incomodava a família simplesmente sumiu.",
    name: "Luciana M.",
    role: "Jardim Chapadão",
  },
  {
    quote:
      "Preço combinado foi exatamente o preço cobrado. Nenhuma surpresa, nenhum custo extra de última hora.",
    name: "Eduardo P.",
    role: "Loja no Cambuí",
  },
  {
    quote:
      "O multi-split instalado economizou muito espaço na fachada do prédio e o resultado estético ficou impecável.",
    name: "Fernanda A.",
    role: "Taquaral, Campinas",
  },
];

export default function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto mb-14 max-w-2xl px-6 text-center sm:px-10">
        <p className="eyebrow mb-4 justify-center">Prova Social</p>
        <h2 className="text-balance font-display text-3xl font-light text-frost sm:text-5xl">
          Quem já sentiu a diferença
        </h2>
      </div>

      <div className="relative mask-fade-b">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, ease: "linear", repeat: Infinity }}
        >
          {loop.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="w-[320px] shrink-0 rounded-[24px] border border-white/[0.07] bg-white/[0.02] p-7 sm:w-[380px]"
            >
              <div className="mb-4 flex gap-1 text-ice">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-[14px] leading-relaxed text-frost/75">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 font-display text-[13px] text-ice">
                  {t.name.charAt(0)}
                </span>
                <div className="leading-tight">
                  <p className="font-body text-[13px] font-medium text-frost">{t.name}</p>
                  <p className="font-mono text-[10.5px] uppercase tracking-widest2 text-frost/40">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
