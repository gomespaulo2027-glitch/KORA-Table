/**
 * CONFIGURAÇÃO DO TEMPLATE MASTER
 *
 * Regra: alterar primeiro este ficheiro ao adaptar o template para um novo cliente.
 * A estrutura visual das páginas deve permanecer reutilizável.
 *
 * Nunca colocar aqui dados inventados como se fossem reais.
 * Quando uma informação ainda não foi fornecida pelo cliente, usar null
 * ou marcar explicitamente como pendente.
 */

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
  name: "KORA Table",
  tagline: "Restaurante contemporâneo · Luanda",
  city: "Luanda",
  address: "Rua da Cambunda nº 42, Ingombota — Luanda",
  addressNote: "Endereço fictício de demonstração",
  phoneDisplay: "+244 923 456 789",
  phoneHref: "tel:+244923456789",
  whatsappDisplay: "+244 923 456 789",
  whatsappHref: "https://wa.me/244923456789",
  email: "ola@koratable.example",
  openingHours: [
    { days: "Terça a sexta", time: "12h00 – 15h00 · 18h30 – 22h30" },
    { days: "Sábado e domingo", time: "12h30 – 23h00" },
    { days: "Segunda", time: "Fechado" },
  ],
  instagram: undefined,
  facebook: undefined,
  mapUrl: undefined,
};
