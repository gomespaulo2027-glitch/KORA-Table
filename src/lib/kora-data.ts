/**
 * Dados fictícios do site de demonstração KORA Table.
 * Todos os contactos, preços e depoimentos são inventados para efeitos de demonstração.
 */

export const restaurant = {
  name: "KORA Table",
  tagline: "Restaurante contemporâneo · Luanda",
  address: "Rua da Cambunda nº 42, Ingombota — Luanda",
  addressNote: "Endereço fictício de demonstração",
  phoneDisplay: "+244 923 456 789",
  phoneHref: "tel:+244923456789",
  whatsappHref: "https://wa.me/244923456789",
  whatsappDisplay: "+244 923 456 789",
  email: "ola@koratable.example",
  hours: [
    { days: "Terça a sexta", time: "12h00 – 15h00 · 18h30 – 22h30" },
    { days: "Sábado e domingo", time: "12h30 – 23h00" },
    { days: "Segunda", time: "Fechado" },
  ],
};

export type Dish = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  intro?: string;
  dishes: Dish[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "entradas",
    title: "Entradas",
    intro: "Pequenos começos com carácter angolano.",
    dishes: [
      {
        name: "Calulu da casa",
        description:
          "Peixe seco, folhas de gindungo fresco e feijão de óleo de palma, servido com chips de mandioca.",
        price: "4.500 Kz",
      },
      {
        name: "Tartaro de atum com ginguba",
        description: "Atum picado, manteiga de ginguba torrada, limão-cravo e flor de sal.",
        price: "5.200 Kz",
        tag: "Assinatura",
      },
      {
        name: "Polvo salteado à coriandros",
        description: "Polvo grelhado, cebola-roxa, coriandros e batata-doce em lasca.",
        price: "6.800 Kz",
      },
      {
        name: "Pão de fermentação lenta",
        description: "Pão quente da casa com manteiga de cacão e sal de Boavista.",
        price: "2.200 Kz",
      },
    ],
  },
  {
    id: "principais",
    title: "Pratos principais",
    intro: "Clássicos revisitados com técnica contemporânea.",
    dishes: [
      {
        name: "Moamba de galinha",
        description: "Galinha caseira, moamba de dendém e gindungo, funge de silabalundo ao lado.",
        price: "9.500 Kz",
        tag: "Preferido da casa",
      },
      {
        name: "Camarão piri-piri na grelha",
        description: "Camarão-tesoura, manteiga de piri-piri, limão chamuscado e arroz de coco.",
        price: "12.500 Kz",
      },
      {
        name: "Robalo com banana-pão",
        description: "Robalo na brasa, puré de banana-pão, moela de tomate e óleo de coentros.",
        price: "10.800 Kz",
      },
      {
        name: "Kizaca com amendoim e coco",
        description: "Versão vegetariana da kizaca, arroz de coco tostado e amendoim caramelizado.",
        price: "7.900 Kz",
        tag: "Vegetariano",
      },
      {
        name: "Costela de boi à Luanda",
        description: "Costela cozinhada lentamente, funge frito e molho de calulu reduzido.",
        price: "13.500 Kz",
      },
    ],
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    intro: "Doces inspirados nas ruas e mercados de Luanda.",
    dishes: [
      {
        name: "Cocada cremosa com caramelo",
        description: "Mousse de coco, caramelo de açúcar mascavado e lascas de coco tostado.",
        price: "3.200 Kz",
      },
      {
        name: "Mousse de maracujá e hibisco",
        description: "Mousse aérea, geleia de hibisco e granulado de castanha-de-caju.",
        price: "2.800 Kz",
      },
      {
        name: "Queijada da Ilha",
        description: "Queijada morna de canela com gelado de mandioca doce.",
        price: "3.000 Kz",
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas e coquetéis",
    intro: "Da adega nacional aos clássicos com sabor de Angola.",
    dishes: [
      {
        name: "Kibala sour",
        description: "Cachaça de ginga, kibala, limão e espuma de clara batida.",
        price: "3.500 Kz",
        tag: "Coquetel da casa",
      },
      {
        name: "Ginja do Planalto",
        description: "Ginja macerada, tónica artesanal e casca de laranja queimada.",
        price: "2.500 Kz",
      },
      {
        name: "Funge fizz",
        description: "Gin, xarope de tamarindo, água com gás e manjericão.",
        price: "3.000 Kz",
      },
      {
        name: "Carta de vinhos",
        description: "Seleção rotativa de vinhos portugueses e sul-africanos — pergunte pela taça.",
        price: "desde 1.800 Kz",
      },
    ],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  detail: string;
};

/** Depoimentos claramente fictícios, criados apenas para demonstração. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "A moamba tem o sabor de casa, mas servida como num restaurante de portefólio internacional. Voltei duas vezes na mesma semana.",
    author: "Ana M.",
    detail: "Cliente fictícia · Luanda",
  },
  {
    quote:
      "Ambiente calmo, serviço atento e um funge impecável. Ideal para um jantar demorado ou uma celebração pequena.",
    author: "Jorge F.",
    detail: "Cliente fictício · Luanda",
  },
  {
    quote:
      "O coquetel de kibala é uma surpresa — e a sobremesa de coco quase não nos deixou partir à rua.",
    author: "Sara & Tomás",
    detail: "Clientes fictícios · visita de demonstração",
  },
];