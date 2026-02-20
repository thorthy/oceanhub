import { Search, CalendarCheck, Anchor } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    icon: Search,
    title: "Busque",
    description: "Encontre a embarcação ideal no destino desejado",
    step: 1,
  },
  {
    icon: CalendarCheck,
    title: "Reserve",
    description: "Escolha a data, horário e faça o pagamento seguro",
    step: 2,
  },
  {
    icon: Anchor,
    title: "Navegue",
    description: "Compareça à marina e aproveite sua experiência",
    step: 3,
  },
];

export default function HowItWorksSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white" data-testid="section-how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#03045E]" data-testid="text-how-title">
              Como funciona
            </h2>
            <p className="mt-3 text-[#03045E]/50 text-lg">
              Alugar uma embarcação nunca foi tão simples
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-[#0077B6]/20 via-[#0077B6]/40 to-[#0077B6]/20" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {steps.map((step, i) => (
                <div
                  key={step.step}
                  className={`flex flex-col items-center text-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 200 + 200}ms` }}
                  data-testid={`step-${step.step}`}
                >
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-[#0077B6]/8 flex items-center justify-center mb-6">
                      <step.icon className="w-9 h-9 text-[#0077B6]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0077B6] text-white text-xs font-bold flex items-center justify-center shadow-md shadow-[#0077B6]/30">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#03045E] mb-2">{step.title}</h3>
                  <p className="text-[#03045E]/50 text-sm leading-relaxed max-w-[250px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
