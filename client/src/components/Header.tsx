import { useState, useEffect } from "react";
import { Anchor, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      data-testid="header-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 group"
            data-testid="link-logo"
          >
            <div className={`p-1.5 rounded-lg transition-colors ${isScrolled ? "bg-[#0077B6]" : "bg-white/20 backdrop-blur-sm"}`}>
              <Anchor className={`w-5 h-5 ${isScrolled ? "text-white" : "text-white"}`} />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? "text-[#03045E]" : "text-white"}`}>
              OceanHub
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {[
              { label: "Explorar", id: "explorar" },
              { label: "Como Funciona", id: "como-funciona" },
              { label: "Anuncie seu Barco", id: "anuncie" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                data-testid={`link-nav-${item.id}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-[#03045E]/70 hover:text-[#03045E] hover:bg-[#0077B6]/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3" data-testid="nav-auth-buttons">
            <Button
              variant="outline"
              data-testid="button-entrar"
              className={`text-sm font-medium ${
                isScrolled
                  ? "border-[#0077B6]/30 text-[#0077B6]"
                  : "border-white/40 text-white bg-white/10 backdrop-blur-sm"
              }`}
            >
              Entrar
            </Button>
            <Button
              data-testid="button-cadastre-se"
              className="text-sm font-medium bg-[#0077B6] text-white"
            >
              Cadastre-se
            </Button>
          </div>

          <button
            data-testid="button-mobile-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-[#03045E]" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          data-testid="nav-mobile-menu"
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl"
        >
          <div className="px-4 py-6 space-y-2">
            {[
              { label: "Explorar", id: "explorar" },
              { label: "Como Funciona", id: "como-funciona" },
              { label: "Anuncie seu Barco", id: "anuncie" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                data-testid={`link-mobile-${item.id}`}
                className="block w-full text-left px-4 py-3 rounded-lg text-[#03045E] font-medium hover:bg-[#0077B6]/5 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full border-[#0077B6]/30 text-[#0077B6]" data-testid="button-mobile-entrar">
                Entrar
              </Button>
              <Button className="w-full bg-[#0077B6] text-white" data-testid="button-mobile-cadastre">
                Cadastre-se
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
