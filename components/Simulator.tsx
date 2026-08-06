"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type ServiceType = {
  id: string;
  label: string;
  hint: string;
};

type Equipment = {
  id: string;
  label: string;
  hint: string;
};

const SERVICES: ServiceType[] = [
  { id: "instalacao", label: "Instalação", hint: "Do zero, com fixação e vácuo profissional" },
  { id: "higienizacao", label: "Higienização / Limpeza", hint: "Remoção de fungos e bactérias" },
  { id: "manutencao", label: "Manutenção / Conserto", hint: "Diagnóstico e reparo completo" },
  { id: "pmoc", label: "PMOC (Empresas)", hint: "Plano de manutenção obrigatório" },
];

const EQUIPMENTS: Equipment[] = [
  {
    id: "split-residencial",
    label: "Split Residencial",
    hint: "O modelo mais comum em casas e apartamentos: uma unidade externa conectada a uma unidade interna, com instalação discreta e baixo ruído.",
  },
  {
    id: "multi-split",
    label: "Multi-Split",
    hint: "Permite que uma única unidade externa alimente múltiplas unidades internas em cômodos diferentes, ideal para economizar espaço na fachada.",
  },
  {
    id: "cassete",
    label: "Ar Comercial / Cassete",
    hint: "Aparelho embutido no teto com vazão em 4 direções, padrão para escritórios e lojas.",
  },
];

const STEP_LABELS = ["Tipo de serviço", "Equipamento", "Bairro / Cidade"];

function Tooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        aria-label="Mais informações"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="flex h-5 w-5 items-center justify-center rounded-full border border-ice/40 font-mono text-[10px] text-ice/80 transition-colors hover:bg-ice/10"
      >
        ?
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute bottom-full z-30 mb-4 rounded-2xl border border-white/10 p-4 text-left shadow-soft backdrop-blur-xl left-2 right-2 w-auto max-w-[90vw] sm:left-1/2 sm:right-auto sm:w-60 sm:-translate-x-1/2"
            style={{ backgroundColor: "#111A24" }}
          >
            <p className="font-body text-[12.5px] leading-relaxed text-frost/85">
              {text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

export default function Simulator() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<string | null>(null);
  const [equipment, setEquipment] = useState<string | null>(null);
  const [location, setLocation] = useState("");
  const [direction, setDirection] = useState(1);

  const serviceLabel = SERVICES.find((s) => s.id === service)?.label ?? null;
  const equipmentLabel =
    EQUIPMENTS.find((e) => e.id === equipment)?.label ?? null;

  const canAdvance =
    (step === 0 && !!service) ||
    (step === 1 && !!equipment) ||
    (step === 2 && location.trim().length > 1);

  const goNext = () => {
    if (!canAdvance) return;
    setDirection(1);
    setStep((s) => Math.min(s + 1, 2));
  };
  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const message = useMemo(() => {
    const lines = [
      "Olá! Quero montar um pedido pelo site da Arclimac:",
      serviceLabel ? `• Serviço: ${serviceLabel}` : null,
      equipmentLabel ? `• Equipamento: ${equipmentLabel}` : null,
      location ? `• Local: ${location}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  }, [serviceLabel, equipmentLabel, location]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  return (
    <section id="simulador" className="section-pad relative">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="eyebrow mb-4 justify-center">Simulador de Pedido</p>
          <h2 className="text-balance font-display text-3xl font-light text-frost sm:text-5xl">
            Monte seu pedido em 3 passos
          </h2>
        </div>

        <div className="glass-panel overflow-hidden rounded-[28px] shadow-soft">
          {/* Step indicator */}
          <div className="flex items-center gap-4 border-b border-white/[0.06] px-6 py-6 sm:px-10">
            {STEP_LABELS.map((label, i) => (
              <div key={label} className="flex flex-1 items-center gap-3">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-[12px] transition-all duration-500 ${
                    i <= step
                      ? "bg-ice/20 text-ice border border-ice/50"
                      : "border border-white/10 text-frost/30"
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`hidden font-body text-[12.5px] transition-colors duration-500 sm:block ${
                    i <= step ? "text-frost/90" : "text-frost/30"
                  }`}
                >
                  {label}
                </span>
                {i < STEP_LABELS.length - 1 && (
                  <span className="hidden h-px flex-1 bg-white/10 sm:block" />
                )}
              </div>
            ))}
          </div>

          <div className="grid gap-0 md:grid-cols-[1.3fr_1fr]">
            {/* Step content */}
            <div className="relative min-h-[360px] overflow-visible p-6 sm:p-10">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {step === 0 && (
                    <div>
                      <h3 className="mb-6 font-display text-xl font-normal text-frost">
                        Qual serviço você precisa?
                      </h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {SERVICES.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => setService(s.id)}
                            className={`group rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                              service === s.id
                                ? "border-ice/60 bg-ice/[0.07]"
                                : "border-white/10 bg-white/[0.02] hover:border-white/25"
                            }`}
                          >
                            <p className="font-body text-[14.5px] font-medium text-frost">
                              {s.label}
                            </p>
                            <p className="mt-1 font-body text-[12px] text-frost/50">
                              {s.hint}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <h3 className="mb-6 font-display text-xl font-normal text-frost">
                        Qual equipamento?
                      </h3>
                      <div className="flex flex-col gap-3">
                        {EQUIPMENTS.map((eq) => (
                          <div
                            key={eq.id}
                            onClick={() => setEquipment(eq.id)}
                            className={`flex cursor-pointer items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 ${
                              equipment === eq.id
                                ? "border-ice/60 bg-ice/[0.07]"
                                : "border-white/10 bg-white/[0.02] hover:border-white/25"
                            }`}
                          >
                            <span className="font-body text-[14.5px] font-medium text-frost">
                              {eq.label}
                            </span>
                            <Tooltip text={eq.hint} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h3 className="mb-6 font-display text-xl font-normal text-frost">
                        Em qual bairro ou cidade?
                      </h3>
                      <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Ex.: Cambuí, Campinas"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 font-body text-[14.5px] text-frost placeholder:text-frost/30 outline-none transition-colors focus:border-ice/50"
                      />
                      <p className="mt-3 font-body text-[12px] text-frost/40">
                        Atendemos Campinas, Valinhos, Vinhedo, Sumaré, Hortolândia,
                        Paulínia e região.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={goBack}
                  disabled={step === 0}
                  className="font-body text-[12.5px] uppercase tracking-[0.1em] text-frost/50 transition-colors hover:text-frost disabled:opacity-0"
                >
                  Voltar
                </button>
                {step < 2 && (
                  <button
                    onClick={goNext}
                    disabled={!canAdvance}
                    className="rounded-full border border-ice/40 px-6 py-2.5 font-body text-[12.5px] uppercase tracking-[0.1em] text-ice transition-all duration-300 hover:bg-ice/10 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Próximo
                  </button>
                )}
              </div>
            </div>

            {/* Summary */}
            <div className="border-t border-white/[0.06] bg-white/[0.02] p-6 sm:p-10 md:border-l md:border-t-0">
              <p className="eyebrow mb-6">Resumo do Pedido</p>

              <div className="flex flex-col gap-4">
                <SummaryRow label="Serviço" value={serviceLabel} />
                <SummaryRow label="Equipamento" value={equipmentLabel} />
                <SummaryRow label="Local" value={location || null} />
              </div>

              <div className="hairline my-8" />

              <a
                href={buildWhatsAppLink(message)}
                target={service && equipment && location ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-disabled={!(service && equipment && location)}
                onClick={(e) => {
                  if (!(service && equipment && location)) e.preventDefault();
                }}
                className={`btn-cta w-full rounded-full transition-all duration-300 ${
                  service && equipment && location
                    ? ""
                    : "pointer-events-none opacity-30"
                }`}
              >
                Enviar Pedido no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryRow({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.04] pb-3">
      <span className="font-mono text-[11px] uppercase tracking-widest2 text-frost/40">
        {label}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={value ?? "empty"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className={`font-body text-[13px] ${
            value ? "text-frost" : "text-frost/25"
          }`}
        >
          {value ?? "—"}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
