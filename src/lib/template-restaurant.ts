/** Configuração do Restaurante #2 — adaptação do Template Master. */

export type TemplateRestaurant = {
  name: string;
  tagline: string;
  city: string;
  address: string;
  addressNote?: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappDisplay: string;
  whatsappHref: string;
  email: string;
  openingHours: Array<{ days: string; time: string }>;
  instagram?: string;
  facebook?: string;
  mapUrl?: string;
};

export const templateRestaurant: TemplateRestaurant = {
  name: "MUKANDA Cozinha",
  tagline: "Cozinha angolana de autor · Luanda",
  city: "Luanda",
  address: "Rua das Acácias nº 18, Maianga — Luanda",
  addressNote: "Endereço fictício de demonstração",
  phoneDisplay: "+244 922 111 222",
  phoneHref: "tel:+244922111222",
  whatsappDisplay: "+244 922 111 222",
  whatsappHref: "https://wa.me/244922111222",
  email: "ola@mukanda.example",
  openingHours: [
    { days: "Terça a sexta", time: "12h00 – 15h00 · 18h00 – 22h30" },
    { days: "Sábado", time: "12h30 – 23h00" },
    { days: "Domingo e segunda", time: "Fechado" },
  ],
  instagram: undefined,
  facebook: undefined,
  mapUrl: undefined,
};
