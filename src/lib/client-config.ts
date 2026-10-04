/** Configuração comercial única do cliente. Edite este arquivo para adaptar um novo restaurante. */

export type RestaurantConfig = {
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

export const restaurant: RestaurantConfig = {
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
};

export type Dish = { name: string; description: string; price: string; tag?: string };
export type MenuCategory = { id: string; title: string; intro?: string; dishes: Dish[] };

export const menuCategories: MenuCategory[] = [
  { id:"entradas", title:"Para começar", intro:"Petiscos e sabores de mesa partilhada.", dishes:[
    {name:"Pastéis de peixe da casa",description:"Peixe fresco, ervas, limão e molho picante suave.",price:"3.800 Kz",tag:"Casa"},
    {name:"Mandioca crocante com ginguba",description:"Mandioca dourada, creme de ginguba torrada e ervas frescas.",price:"3.200 Kz"},
    {name:"Camarão salteado com alho",description:"Camarão, alho, limão e manteiga de ervas.",price:"5.900 Kz"}
  ]},
  { id:"principais", title:"Pratos da casa", intro:"Cozinha angolana com apresentação contemporânea.", dishes:[
    {name:"Peixe grelhado à Mukanda",description:"Peixe do dia, molho de tomate assado, banana-pão e salada crocante.",price:"10.500 Kz",tag:"Assinatura"},
    {name:"Frango com molho de dendém",description:"Frango dourado, molho de dendém, arroz de coco e legumes da estação.",price:"8.900 Kz"},
    {name:"Carne de vaca na brasa",description:"Corte macio grelhado, batata-doce assada e molho de pimenta.",price:"12.000 Kz"},
    {name:"Kizaca cremosa com arroz de coco",description:"Folhas de mandioca, amendoim, coco e legumes salteados.",price:"7.200 Kz",tag:"Vegetariano"}
  ]},
  { id:"sobremesas", title:"Sobremesas", intro:"Final doce com ingredientes que nos são próximos.", dishes:[
    {name:"Musse de maracujá e coco",description:"Maracujá fresco, coco tostado e crocante de castanha.",price:"2.800 Kz"},
    {name:"Banana caramelizada",description:"Banana-pão, caramelo de cana e gelado de baunilha.",price:"3.000 Kz"}
  ]},
  { id:"bebidas", title:"Bebidas", intro:"Sumos, mocktails e clássicos para acompanhar a mesa.", dishes:[
    {name:"Gengibre & maracujá",description:"Gengibre fresco, maracujá, limão e água com gás.",price:"2.200 Kz",tag:"Sem álcool"},
    {name:"Tónica de hibisco",description:"Hibisco, frutos vermelhos e tónica artesanal.",price:"2.500 Kz"},
    {name:"Seleção de vinhos",description:"Rótulos selecionados para acompanhar a cozinha.",price:"desde 1.800 Kz"}
  ]}
];

export type Testimonial = { quote:string; author:string; detail:string };
export const testimonials: Testimonial[] = [
  {quote:"Comida angolana com apresentação elegante e porções muito bem pensadas.",author:"Cliente A.",detail:"Depoimento fictício · demonstração"},
  {quote:"O peixe da casa e o sumo de gengibre foram o destaque do jantar.",author:"Cliente B.",detail:"Depoimento fictício · demonstração"},
  {quote:"Um ambiente tranquilo para jantar sem pressa. Voltaria para experimentar o menu inteiro.",author:"Cliente C.",detail:"Depoimento fictício · demonstração"}
];
