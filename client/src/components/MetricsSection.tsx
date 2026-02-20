import { Ship, Compass, Star, MapPin } from "lucide-react";
import { useInView, useCountUp } from "@/hooks/useInView";

const iconMap: Record<string, typeof Ship> = {
  ship: Ship,
  compass: Compass,
  star: Star,
  mapPin: MapPin,
};

const metricsData = [
  { label: "500", prefix: "+", sublabel: "embarcações", icon: "ship" },
  { label: "2000", prefix: "+", sublabel: "experiências realizadas", icon: "compass" },
  { label: "4.8", prefix: "", sublabel: "avaliação média", icon: "star" },
  { label: "50", prefix: "+", sublabel: "destinos", icon: "mapPin" },
];

function MetricItem({ metric, isInView, index }: { metric: typeof metricsData[0]; isInView: boolean; index: number }) {
  const numericValue = parseFloat(metric.label);
  const isDecimal = metric.label.includes(".");
  const count = useCountUp(isDecimal ? numericValue * 10 : numericValue, 2000, isInView);
  const displayValue = isDecimal ? (count / 10).toFixed(1) : count.toLocaleString("pt-BR");
  const Icon = iconMap[metric.icon] || Ship;

  return (
    <div
      data-testid={`metric-${metric.icon}`}
      className={`flex flex-col items-center text-center p-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 150 + 200}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-[#0077B6]/10 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-[#0077B6]" />
      </div>
      <p className="text-3xl md:text-4xl font-extrabold text-[#03045E]">
        {metric.prefix}{displayValue}
      </p>
      <p className="text-sm text-[#03045E]/50 font-medium mt-1">{metric.sublabel}</p>
    </div>
  );
}

export default function MetricsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 md:py-24 bg-[#F0F7FF]" data-testid="section-metrics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {metricsData.map((metric, i) => (
            <MetricItem key={metric.icon} metric={metric} isInView={isInView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
