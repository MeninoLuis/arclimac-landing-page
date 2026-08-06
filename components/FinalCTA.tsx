"use client";

import { motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0B2A45] via-[#0C3355] to-[#082036] px-8 py-16 text-center sm:px-16">
        <div className="absolute inset-0 bg-ice-radial opacity-60" />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-ice/10 blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-ice-deep/20 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <p className="eyebrow mb-5 justify-center text-ice/90">Arclimac</p>
          <h2 className="text-balance mx-auto max-w-2xl font-display text-3xl font-light text-frost sm:text-5xl">
            Pronto para garantir seu conforto?
          </h2>
          <p className="mx-auto mt-5 max-w-md font-body text-[15px] text-frost/70">
            Fale agora com nossa equipe e receba um orçamento rápido, sem
            compromisso, direto no seu WhatsApp.
          </p>
          <a
            href={buildWhatsAppLink(
              "Olá! Vim pelo site da Arclimac e quero garantir meu conforto com um orçamento."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta animate-pulseSoft mt-9 rounded-full"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.004 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.484 1.345 5.001L2 22l5.135-1.334a9.958 9.958 0 004.87 1.24h.004c5.514 0 9.997-4.483 9.997-9.998C22 6.483 17.518 2 12.004 2zm0 18.187h-.003a8.196 8.196 0 01-4.175-1.14l-.3-.178-3.048.792.813-2.97-.195-.305a8.183 8.183 0 01-1.256-4.39c0-4.524 3.68-8.203 8.207-8.203 2.19 0 4.25.854 5.798 2.404a8.146 8.146 0 012.401 5.802c-.001 4.524-3.68 8.188-8.242 8.188z" />
            </svg>
            Falar no WhatsApp Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
