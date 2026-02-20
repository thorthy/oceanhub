import { MapPin, Calendar, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100vh] md:min-h-[92vh] flex items-center" data-testid="section-hero">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Praia tropical brasileira"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03045E]/70 via-[#03045E]/40 to-[#03045E]/80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-44">
        <div className="max-w-3xl">
          <h1
            data-testid="text-hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Explore o Brasil
            <br />
            <span className="text-[#48CAE4]">por água</span>
          </h1>
          <p
            data-testid="text-hero-subtitle"
            className="mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            Encontre e alugue embarcações para experiências inesquecíveis em
            praias, lagos e represas por todo o Brasil
          </p>
        </div>

        <div
          data-testid="search-bar"
          className="mt-8 md:mt-12 md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 md:w-full md:max-w-4xl md:px-4"
        >
          <div className="bg-white rounded-2xl shadow-2xl shadow-black/15 p-4 md:p-3">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0">
              <div className="flex-1 md:border-r border-gray-100">
                <div className="flex items-center gap-3 px-3 py-2 md:pr-6">
                  <div className="p-2 rounded-lg bg-[#0077B6]/10">
                    <MapPin className="w-5 h-5 text-[#0077B6]" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-semibold text-[#03045E]/60 uppercase tracking-wider">
                      Destino
                    </label>
                    <input
                      type="text"
                      placeholder="Para onde você vai?"
                      data-testid="input-destination"
                      className="w-full text-sm text-[#03045E] font-medium placeholder:text-[#03045E]/30 bg-transparent outline-none mt-0.5"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 md:border-r border-gray-100">
                <div className="flex items-center gap-3 px-3 py-2 md:px-6">
                  <div className="p-2 rounded-lg bg-[#0077B6]/10">
                    <Calendar className="w-5 h-5 text-[#0077B6]" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-semibold text-[#03045E]/60 uppercase tracking-wider">
                      Data
                    </label>
                    <input
                      type="text"
                      placeholder="Quando?"
                      data-testid="input-date"
                      className="w-full text-sm text-[#03045E] font-medium placeholder:text-[#03045E]/30 bg-transparent outline-none mt-0.5"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 px-3 py-2 md:px-6">
                  <div className="p-2 rounded-lg bg-[#0077B6]/10">
                    <Users className="w-5 h-5 text-[#0077B6]" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-semibold text-[#03045E]/60 uppercase tracking-wider">
                      Passageiros
                    </label>
                    <input
                      type="number"
                      placeholder="Quantos?"
                      min="1"
                      data-testid="input-passengers"
                      className="w-full text-sm text-[#03045E] font-medium placeholder:text-[#03045E]/30 bg-transparent outline-none mt-0.5"
                    />
                  </div>
                </div>
              </div>

              <div className="md:pl-3">
                <Button
                  data-testid="button-search"
                  className="w-full md:w-auto bg-[#0077B6] text-white rounded-xl px-8 py-6 text-base font-semibold shadow-lg shadow-[#0077B6]/30"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
