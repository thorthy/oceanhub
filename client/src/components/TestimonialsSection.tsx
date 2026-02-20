import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/mockData";
import { useInView } from "@/hooks/useInView";

export default function TestimonialsSection() {
  const { ref, isInView } = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFE]" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#03045E]" data-testid="text-testimonials-title">
              O que dizem nossos usuários
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {getVisibleTestimonials().map((t, i) => (
                <div
                  key={`${t.id}-${currentIndex}`}
                  data-testid={`card-testimonial-${t.id}`}
                  className={`bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0077B6] to-[#48CAE4] flex items-center justify-center text-white font-bold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-[#03045E] text-sm">{t.name}</p>
                      <p className="text-xs text-[#03045E]/40">{t.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-[#03045E]/60 text-sm leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>

            <div className="md:hidden">
              {testimonials.map((t, i) => (
                <div
                  key={t.id}
                  className={`${i === currentIndex ? "block" : "hidden"}`}
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0077B6] to-[#48CAE4] flex items-center justify-center text-white font-bold text-sm">
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-[#03045E] text-sm">{t.name}</p>
                        <p className="text-xs text-[#03045E]/40">{t.location}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-[#03045E]/60 text-sm leading-relaxed">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prev}
                data-testid="button-testimonial-prev"
                aria-label="Depoimento anterior"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#03045E]/50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    data-testid={`button-testimonial-dot-${i}`}
                    aria-label={`Depoimento ${i + 1}`}
                    aria-current={i === currentIndex ? "true" : undefined}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-[#0077B6] w-6" : "bg-[#0077B6]/20"}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                data-testid="button-testimonial-next"
                aria-label="Próximo depoimento"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#03045E]/50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
