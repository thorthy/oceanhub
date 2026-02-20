import { Heart, MapPin, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Boat } from "@/lib/mockData";

interface BoatCardProps {
  boat: Boat;
  index: number;
  isInView: boolean;
}

export default function BoatCard({ boat, index, isInView }: BoatCardProps) {
  return (
    <div
      data-testid={`card-boat-${boat.id}`}
      className={`group cursor-pointer transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100 + 200}ms` }}
    >
      <div className="rounded-2xl bg-white border border-gray-100 transition-all duration-300">
        <div className="relative aspect-[4/3] rounded-t-2xl overflow-hidden">
          <div
            className="w-full h-full transition-transform duration-500 group-hover:scale-105"
            style={{ background: boat.image }}
          />
          {boat.hasSkipper && (
            <Badge
              data-testid={`badge-skipper-${boat.id}`}
              className="absolute top-3 left-3 bg-[#48CAE4]/90 text-white text-xs font-semibold no-default-hover-elevate no-default-active-elevate"
            >
              Com Marinheiro
            </Badge>
          )}
          <button
            data-testid={`button-favorite-${boat.id}`}
            aria-label={`Favoritar ${boat.title}`}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors"
          >
            <Heart className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="p-4">
          <h3
            data-testid={`text-boat-title-${boat.id}`}
            className="font-bold text-[#03045E] text-[15px] leading-snug line-clamp-1"
          >
            {boat.title}
          </h3>

          <div className="flex items-center gap-1.5 mt-2 text-[#03045E]/50">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs font-medium" data-testid={`text-boat-location-${boat.id}`}>
              {boat.location}
            </span>
          </div>

          <div className="flex items-center gap-3 mt-2.5 text-xs text-[#03045E]/50 font-medium">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              até {boat.capacity} pessoas
            </span>
            <span className="text-[#03045E]/20">|</span>
            <span>{boat.minHours}h mín</span>
          </div>

          <div className="flex items-center gap-1.5 mt-2.5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-sm font-bold text-[#03045E]">{boat.rating}</span>
            <span className="text-xs text-[#03045E]/40">({boat.reviews} avaliações)</span>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-50">
            <span className="text-xs text-[#03045E]/50">A partir de</span>
            <span
              data-testid={`text-boat-price-${boat.id}`}
              className="block text-lg font-bold text-[#0077B6]"
            >
              R$ {boat.pricePerHour}
              <span className="text-sm font-medium text-[#03045E]/40">/hora</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
