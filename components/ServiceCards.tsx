"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SERVICES = [
  {
    n: "01",
    title: "Instalação Profissional",
    text: "Fixação segura, vácuo completo e teste de carga de gás para performance máxima desde o primeiro dia, sem retrabalho.",
  },
  {
    n: "02",
    title: "Higienização Profunda",
    text: "Remoção de fungos, bactérias e partículas dos filtros e serpentinas, preservando a pureza do ar que sua família respira.",
  },
  {
    n: "03",
    title: "Manutenção Completa",
    text: "Revisão elétrica e mecânica que prolonga a vida útil do equipamento e evita paradas inesperadas em dias críticos.",
  },
  {
    n: "04",
    title: "PMOC",
    text: "Plano de Manutenção, Operação e Controle dentro da norma vigente, com laudos técnicos para empresas e condomínios.",
  },
];

function Card({ n, title, text, index }: (typeof SERVICES)[number] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 45%"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, y, opacity, transformPerspective: 1000 }}
      transition={{ ease: "easeOut" }}
      className="group relative rounded-[26px] border border-white/[0.07] bg-white/[0.02] p-8 transition-colors duration-500 hover:border-ice/30"
    >
      <div className="absolute inset-0 rounded-[26px] bg-ice-radial opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="font-mono text-[13px] text-ice/60">{n}</span>
      <h3 className="mt-5 font-display text-[22px] font-normal text-frost">
        {title}
      </h3>
      <p className="mt-3 font-body text-[13.5px] leading-relaxed text-frost/55">
        {text}
      </p>
      <div className="mt-7 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-ice/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
}

export default function ServiceCards() {
  return (
    <section id="servicos" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Nossos Serviços</p>
          <h2 className="text-balance font-display text-3xl font-light text-frost sm:text-5xl">
            Cuidado técnico em cada etapa do seu conforto
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Card key={s.n} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
