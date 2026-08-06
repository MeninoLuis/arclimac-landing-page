"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-ink/80 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#topo" className="flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ice/40">
            <span className="absolute inset-0 rounded-full bg-ice/10 blur-md" />
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="relative"
            >
              <path
                d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"
                stroke="#8FE3FF"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[19px] tracking-wide text-frost">
              Arclimac
            </span>
            <span className="mt-1 hidden font-mono text-[9px] uppercase tracking-widest2 text-platinum/70 sm:block">
              Comércio e Serviços
            </span>
          </span>
        </a>

        {/* Center text - hidden on small screens */}
        <p className="hidden font-body text-[13px] tracking-wide text-frost/70 md:block">
          Atendimento em{" "}
          <span className="text-ice/90">Campinas e Região</span>
        </p>

        {/* CTA */}
        <a
          href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-cta-gradient px-4 py-2.5 font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-ink shadow-cta transition-transform duration-300 hover:scale-105 sm:px-5 sm:py-3"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.004 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.484 1.345 5.001L2 22l5.135-1.334a9.958 9.958 0 004.87 1.24h.004c5.514 0 9.997-4.483 9.997-9.998C22 6.483 17.518 2 12.004 2zm0 18.187h-.003a8.196 8.196 0 01-4.175-1.14l-.3-.178-3.048.792.813-2.97-.195-.305a8.183 8.183 0 01-1.256-4.39c0-4.524 3.68-8.203 8.207-8.203 2.19 0 4.25.854 5.798 2.404a8.146 8.146 0 012.401 5.802c-.001 4.524-3.68 8.188-8.242 8.188z" />
          </svg>
          <span className="hidden sm:inline">WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </motion.header>
  );
}
