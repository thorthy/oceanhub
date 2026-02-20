import { destinations } from "@/lib/mockData";
import { useInView } from "@/hooks/useInView";

export default function DestinationsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 md:py-28 bg-white" data-testid="section-destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#03045E]" data-testid="text-destinations-title">
              Destinos populares
            </h2>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0 scrollbar-hide">
            {destinations.map((dest, i) => (
              <button
                key={dest.id}
                data-testid={`card-destination-${dest.id}`}
                className={`group flex-shrink-0 w-[280px] md:w-auto relative rounded-2xl overflow-hidden aspect-[4/3] transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03045E]/80 via-[#03045E]/20 to-transparent group-hover:from-[#03045E]/60 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{dest.name}</h3>
                  <p className="text-white/70 text-sm mt-1">
                    {dest.boatCount} embarcações disponíveis
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
