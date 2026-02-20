import { Waves, Ship, Sailboat, Fish, Anchor } from "lucide-react";
import { categories } from "@/lib/mockData";
import { useInView } from "@/hooks/useInView";

const iconMap: Record<string, typeof Waves> = {
  waves: Waves,
  ship: Ship,
  sailboat: Sailboat,
  fish: Fish,
  anchor: Anchor,
};

export default function CategoriesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="explorar" className="py-20 md:py-28 bg-white" data-testid="section-categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#03045E]" data-testid="text-categories-title">
              Escolha sua experiência
            </h2>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Anchor;
              return (
                <button
                  key={cat.id}
                  data-testid={`card-category-${cat.id}`}
                  className="group flex-shrink-0 w-[140px] md:w-auto"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100 bg-white hover-elevate transition-all duration-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{ transitionDelay: `${i * 80 + 200}ms`, transitionDuration: "500ms" }}>
                    <div className="w-14 h-14 rounded-xl bg-[#0077B6]/8 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#0077B6]" />
                    </div>
                    <span className="text-sm font-semibold text-[#03045E]">{cat.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
