"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const badges = [
  { label: "Atendimento Rápido" },
  { label: "Garantia de Serviço" },
  { label: "Equipe Qualificada" },
];

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-ink"
    >
      {/* Cinematic backdrop */}
      <div className="absolute inset-0">
        {!videoFailed && (
          <video
            className="h-full w-full object-cover opacity-70"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-poster.jpg"
            onError={() => setVideoFailed(true)}
          >
            {/*
              Substitua pelo vídeo cinematográfico gerado por IA (loop contínuo,
              ambiente premium com fluxo de ar frio). Caminho esperado:
              /public/videos/hero-loop.mp4
            */}
            <source src="/videos/hero-loop.mp4" type="video/mp4" />
          </video>
        )}

        {/* Ambient animated fallback / atmospheric layer (always present, blends under video) */}
        <div className="absolute inset-0 -z-10 bg-ink">
          <div className="animate-drift absolute -top-1/4 left-[-10%] h-[70%] w-[70%] rounded-full bg-ice/20 blur-[120px]" />
          <div
            className="animate-drift absolute bottom-[-20%] right-[-10%] h-[60%] w-[60%] rounded-full bg-ice-deep/20 blur-[130px]"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="animate-drift absolute left-1/3 top-1/2 h-[40%] w-[40%] rounded-full bg-platinum/10 blur-[110px]"
            style={{ animationDelay: "6s" }}
          />
        </div>

        {/* Cinematic gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
        <div className="absolute inset-0 bg-ice-radial" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 sm:px-10 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="eyebrow mb-6"
        >
          Arclimac · Climatização de Alto Padrão
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance max-w-4xl font-display text-[2.4rem] font-light leading-[1.08] text-frost sm:text-6xl lg:text-[4.2rem]"
        >
          Instalação, Higienização e{" "}
          <em className="text-ice not-italic font-normal">Manutenção</em> de
          Ar-Condicionado com Agilidade e Garantia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-xl font-body text-base text-frost/70 sm:text-lg"
        >
          Conforto térmico sob medida para sua casa ou empresa em Campinas e
          região, com técnicos certificados e peças originais.
        </motion.p>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-body text-[11.5px] uppercase tracking-[0.08em] text-frost/80 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-ice shadow-[0_0_8px_2px_rgba(143,227,255,0.6)]" />
              {badge.label}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-11 flex flex-col gap-4 w-full items-center sm:flex-row sm:items-center"
        >
          <a
            href={buildWhatsAppLink(
              "Olá! Vim pelo site da Arclimac e quero solicitar um orçamento de ar-condicionado."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta animate-pulseSoft rounded-full w-full sm:w-auto"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.004 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.484 1.345 5.001L2 22l5.135-1.334a9.958 9.958 0 004.87 1.24h.004c5.514 0 9.997-4.483 9.997-9.998C22 6.483 17.518 2 12.004 2zm0 18.187h-.003a8.196 8.196 0 01-4.175-1.14l-.3-.178-3.048.792.813-2.97-.195-.305a8.183 8.183 0 01-1.256-4.39c0-4.524 3.68-8.203 8.207-8.203 2.19 0 4.25.854 5.798 2.404a8.146 8.146 0 012.401 5.802c-.001 4.524-3.68 8.188-8.242 8.188z" />
            </svg>
            Solicitar Orçamento no WhatsApp
          </a>
          <a href="#simulador" className="btn-ghost rounded-full w-full sm:w-auto">
            Montar meu pedido
          </a>
        </motion.div>
      </div>

      {/* Scroll helper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 hidden sm:flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-frost/40">
          Role para explorar
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-frost/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
