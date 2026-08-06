"use client";

import { motion } from "framer-motion";

const REASONS = [
  {
    title: "Respeito à sua casa ou empresa",
    text: "Técnicos uniformizados, pontuais e cuidadosos com cada ambiente, como se fosse a própria casa.",
    icon: (
      <path
        d="M4 11.5L12 4l8 7.5M6 10v9a1 1 0 001 1h4v-6h2v6h4a1 1 0 001-1v-9"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Transparência no preço",
    text: "Orçamento claro antes de qualquer serviço, sem custos ocultos ou surpresas na hora de pagar.",
    icon: (
      <path
        d="M12 3v18M17 7.5c0-1.93-2.24-3.5-5-3.5s-5 1.57-5 3.5S9.24 11 12 11s5 1.57 5 3.5-2.24 3.5-5 3.5-5-1.57-5-3.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Atendemos todas as marcas",
    text: "Experiência com os principais fabricantes do mercado, residenciais e comerciais, em qualquer modelo.",
    icon: (
      <path
        d="M4 17h16M6 17V9l6-4 6 4v8M10 17v-4h4v4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Por Que Escolher a Arclimac</p>
          <h2 className="text-balance font-display text-3xl font-light text-frost sm:text-5xl">
            Confiança construída em cada visita
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="rounded-[26px] border border-white/[0.07] bg-white/[0.02] p-8 transition-colors duration-500 hover:border-platinum/30"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-ice">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  {r.icon}
                </svg>
              </span>
              <h3 className="mt-6 font-display text-[19px] font-normal text-frost">
                {r.title}
              </h3>
              <p className="mt-3 font-body text-[13.5px] leading-relaxed text-frost/55">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
