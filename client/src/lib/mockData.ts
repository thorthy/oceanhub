export interface Boat {
  id: number;
  title: string;
  location: string;
  capacity: number;
  minHours: number;
  rating: number;
  reviews: number;
  pricePerHour: number;
  hasSkipper: boolean;
  image: string;
}

export interface Destination {
  id: number;
  name: string;
  boatCount: number;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export const boats: Boat[] = [
  {
    id: 1,
    title: "Lancha Phantom 303 — Angra dos Reis",
    location: "Angra dos Reis, RJ",
    capacity: 12,
    minHours: 4,
    rating: 4.9,
    reviews: 47,
    pricePerHour: 450,
    hasSkipper: true,
    image: "linear-gradient(135deg, #0077B6 0%, #00B4D8 50%, #48CAE4 100%)",
  },
  {
    id: 2,
    title: "Veleiro Bavaria 40 — Ilhabela",
    location: "Ilhabela, SP",
    capacity: 8,
    minHours: 6,
    rating: 4.8,
    reviews: 32,
    pricePerHour: 380,
    hasSkipper: true,
    image: "linear-gradient(135deg, #023E8A 0%, #0077B6 50%, #0096C7 100%)",
  },
  {
    id: 3,
    title: "Jet Ski Yamaha VX — Florianópolis",
    location: "Florianópolis, SC",
    capacity: 2,
    minHours: 1,
    rating: 4.7,
    reviews: 89,
    pricePerHour: 180,
    hasSkipper: false,
    image: "linear-gradient(135deg, #00B4D8 0%, #48CAE4 50%, #90E0EF 100%)",
  },
  {
    id: 4,
    title: "Catamarã Lagoon 42 — Paraty",
    location: "Paraty, RJ",
    capacity: 20,
    minHours: 4,
    rating: 4.9,
    reviews: 24,
    pricePerHour: 650,
    hasSkipper: true,
    image: "linear-gradient(135deg, #03045E 0%, #023E8A 50%, #0077B6 100%)",
  },
  {
    id: 5,
    title: "Barco de Pesca Cabrasmar 28 — Ubatuba",
    location: "Ubatuba, SP",
    capacity: 6,
    minHours: 3,
    rating: 4.6,
    reviews: 56,
    pricePerHour: 250,
    hasSkipper: true,
    image: "linear-gradient(135deg, #0096C7 0%, #00B4D8 50%, #48CAE4 100%)",
  },
  {
    id: 6,
    title: "Lancha Focker 265 — Guarujá",
    location: "Guarujá, SP",
    capacity: 10,
    minHours: 3,
    rating: 4.8,
    reviews: 41,
    pricePerHour: 350,
    hasSkipper: false,
    image: "linear-gradient(135deg, #0077B6 0%, #0096C7 50%, #00B4D8 100%)",
  },
];

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Angra dos Reis",
    boatCount: 48,
    image: "/images/dest-angra.png",
  },
  {
    id: 2,
    name: "Ilhabela",
    boatCount: 35,
    image: "/images/dest-ilhabela.png",
  },
  {
    id: 3,
    name: "Florianópolis",
    boatCount: 42,
    image: "/images/dest-floripa.png",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Fernanda Costa",
    location: "São Paulo, SP",
    avatar: "MF",
    rating: 5,
    text: "Experiência incrível! Alugamos uma lancha em Angra dos Reis e foi o melhor fim de semana da família. O marinheiro era super atencioso e o processo de reserva foi muito simples.",
  },
  {
    id: 2,
    name: "Carlos Eduardo Silva",
    location: "Rio de Janeiro, RJ",
    avatar: "CE",
    rating: 5,
    text: "Já usei a OceanHub três vezes e sempre foi impecável. A última vez alugamos um veleiro em Ilhabela — paisagens de tirar o fôlego! Recomendo demais.",
  },
  {
    id: 3,
    name: "Ana Beatriz Oliveira",
    location: "Curitiba, PR",
    avatar: "AB",
    rating: 5,
    text: "Meu marido e eu comemoramos nosso aniversário em um catamarã em Paraty. Tudo organizado pela OceanHub. Pagamento seguro, comunicação direta com o proprietário. Perfeito!",
  },
  {
    id: 4,
    name: "Rafael Mendes",
    location: "Belo Horizonte, MG",
    avatar: "RM",
    rating: 5,
    text: "Pescaria em Ubatuba com os amigos — o barco estava em perfeitas condições. O app facilitou muito a reserva, com preço justo e sem surpresas.",
  },
  {
    id: 5,
    name: "Juliana Rocha",
    location: "Florianópolis, SC",
    avatar: "JR",
    rating: 5,
    text: "Alugamos jet skis para um grupo de 6 pessoas. Foi super divertido e a plataforma nos deu total segurança na hora de fechar. Voltarei com certeza!",
  },
];

export const categories: Category[] = [
  { id: 1, name: "Jet Ski", icon: "waves" },
  { id: 2, name: "Lancha", icon: "ship" },
  { id: 3, name: "Veleiro", icon: "sailboat" },
  { id: 4, name: "Barco de Pesca", icon: "fish" },
  { id: 5, name: "Catamarã", icon: "ship" },
  { id: 6, name: "Outros", icon: "anchor" },
];

export const metrics = [
  { label: "+500", sublabel: "embarcações", icon: "ship" },
  { label: "+2.000", sublabel: "experiências realizadas", icon: "compass" },
  { label: "4.8", sublabel: "avaliação média", icon: "star" },
  { label: "+50", sublabel: "destinos", icon: "mapPin" },
];
