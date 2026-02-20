import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const benefits = [
  "Controle total da sua agenda e preços",
  "Pagamento seguro e garantido",
  "Seguro e proteção inclusos",
];

export default function HostCTASection() {
  const { ref, isInView } = useInView();

  return (
    <section id="anuncie" className="relative overflow-hidden" data-testid="section-host-cta">
      <div className="bg-gradient-to-br from-[#03045E] via-[#023E8A] to-[#0077B6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2
                data-testid="text-host-title"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Tem uma embarcação?
                <br />
                <span className="text-[#48CAE4]">Transforme-a em renda</span>
              </h2>
              <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed max-w-lg">
                Proprietários usam seus barcos apenas 20% do ano. Monetize seu
                ativo ocioso conectando-se a milhares de pessoas buscando
                experiências na água.
              </p>

              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 transition-all duration-500 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                    style={{ transitionDelay: `${i * 150 + 400}ms` }}
                    data-testid={`benefit-${i}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-white/90 text-sm font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className={`mt-10 transition-all duration-700 delay-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <Button
                  data-testid="button-start-hosting"
                  className="bg-white text-[#03045E] font-bold px-8 py-6 text-base rounded-xl shadow-xl shadow-black/20"
                >
                  Comece a anunciar gratuitamente
                </Button>
              </div>
            </div>

            <div className={`relative transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src="/images/boat-cta.png"
                  alt="Embarcação navegando"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03045E]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#48CAE4]/10 blur-3xl" />
              <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-[#0077B6]/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
