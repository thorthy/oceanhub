import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { boats } from "@/lib/mockData";
import { useInView } from "@/hooks/useInView";
import BoatCard from "./BoatCard";

export default function FeaturedBoatsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFE]" data-testid="section-featured-boats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#03045E]" data-testid="text-featured-title">
              Embarcações populares
            </h2>
            <p className="mt-3 text-[#03045E]/50 text-lg">
              As mais bem avaliadas pelos nossos usuários
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boats.map((boat, i) => (
              <BoatCard key={boat.id} boat={boat} index={i} isInView={isInView} />
            ))}
          </div>

          <div className={`flex justify-center mt-12 transition-all duration-700 delay-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <Button
              variant="outline"
              data-testid="button-view-all-boats"
              className="text-[#0077B6] border-[#0077B6]/20 text-sm font-semibold rounded-xl"
            >
              Ver todas as embarcações
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
