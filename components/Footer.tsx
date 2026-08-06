export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink px-6 pb-10 pt-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-[19px] text-frost">Arclimac</span>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-widest2 text-platinum/70">
              Comércio e Serviços
            </p>
            <p className="mt-5 font-body text-[13px] leading-relaxed text-frost/50">
              Instalação, higienização, manutenção e PMOC de ar-condicionado
              para residências e empresas.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-frost/40">
              Horário de Atendimento
            </p>
            <ul className="mt-4 flex flex-col gap-2 font-body text-[13px] text-frost/60">
              <li>Segunda a sexta: 8h às 18h</li>
              <li>Sábado: 8h às 13h</li>
              <li>Plantão emergencial sob consulta</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-frost/40">
              Área de Atendimento
            </p>
            <ul className="mt-4 flex flex-col gap-2 font-body text-[13px] text-frost/60">
              <li>Campinas</li>
              <li>Valinhos e Vinhedo</li>
              <li>Sumaré e Hortolândia</li>
              <li>Paulínia e região</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-frost/40">
              Contato
            </p>
            <ul className="mt-4 flex flex-col gap-2 font-body text-[13px] text-frost/60">
              <li>contato@arclimac.com.br</li>
              <li>(19) 99999-9999</li>
              <li>CNPJ: 00.000.000/0001-00</li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-body text-[12px] text-frost/35">
            © {new Date().getFullYear()} Arclimac Comércio e Serviços. Todos os
            direitos reservados.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-frost/25">
            Climatização de alto padrão em Campinas
          </p>
        </div>
      </div>
    </footer>
  );
}
