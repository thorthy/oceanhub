import { Anchor } from "lucide-react";
import { SiInstagram, SiFacebook, SiX } from "react-icons/si";

const footerLinks = {
  explorar: {
    title: "Explorar",
    links: ["Buscar embarcações", "Destinos", "Categorias"],
  },
  anfitrioes: {
    title: "Anfitriões",
    links: ["Anuncie seu barco", "Como funciona", "Central de ajuda"],
  },
  legal: {
    title: "Legal",
    links: ["Termos de Uso", "Política de Privacidade", "Política de Cancelamento"],
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#001A3D] text-white" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg bg-[#0077B6]">
                <Anchor className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">OceanHub</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              A maior plataforma de aluguel de embarcações do Brasil. Conectando
              pessoas a experiências inesquecíveis na água.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: SiInstagram, label: "Instagram" },
                { Icon: SiFacebook, label: "Facebook" },
                { Icon: SiX, label: "X" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  data-testid={`link-social-${label.toLowerCase()}`}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/40 text-sm hover:text-white/70 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs" data-testid="text-copyright">
              &copy; 2026 OceanHub. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-white/30 text-xs">
              <span data-testid="text-trust-payment">Pagamento Seguro</span>
              <span className="text-white/10">|</span>
              <span data-testid="text-trust-lgpd">Dados Protegidos (LGPD)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
