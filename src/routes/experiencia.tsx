import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Landmark, Star } from "lucide-react";
import { Reveal } from "@/components/kora/reveal";
import { restaurant } from "@/lib/kora-data";
const ambienteImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85";
const heroImage = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=85";
const moambaImage = "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1024&q=85";
const camaraoImage = "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1024&q=85";
const polvoImage = "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1024&q=85";
const sobremesaImage = "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1024&q=85";

export const Route = createFileRoute("/experiencia")({
  head: () => ({
    meta: [
      { title: "Experiência — MUKANDA Cozinha" },
      {
        name: "description",
        content:
          "O ambiente do MUKANDA Cozinha: uma sala de barro e madeira em Luanda, luz de fim de tarde, terraço e uma cozinha aberta. Site de demonstração fictício.",
      },
      { property: "og:title", content: "Experiência — MUKANDA Cozinha" },
      {
        property: "og:description",
        content:
          "Ambiente, galeria e detalhes da experiência no MUKANDA Cozinha, restaurante contemporâneo fictício em Luanda.",
      },
      { property: "og:url", content: "/experiencia" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/experiencia" }],
  }),
  component: ExperienciaPage,
});

const gallery = [
  {
    image: heroImage,
    alt: "Prato de peixe grelhado com banana-pão e salada em cerâmica escura, sobre toalha de linho creme.",
    caption: "Prato de assinatura",
  },
  {
    image: ambienteImage,
    alt: "Interior do restaurante ao pôr do sol: paredes terracota, candeeiros de vime, mesas de madeira com toalhas creme e lanternas acesas.",
    caption: "Sala ao pôr do sol",
  },
  {
    image: moambaImage,
    alt: "Moamba de galinha em tigela de barro com funge num prato terracota.",
    caption: "Moamba da casa",
  },
  {
    image: polvoImage,
    alt: "Salada de polvo grelhado com coriandros, cebola-roxa e batata-doce tostada em tigela artesanal.",
    caption: "Do mercado para a mesa",
  },
  {
    image: camaraoImage,
    alt: "Camarões grelhados com manteiga de piri-piri e limão chamuscado em prato de pedra.",
    caption: "Da costa de Angola",
  },
  {
    image: sobremesaImage,
    alt: "Mousse de coco com caramelo e lascas de coco tostado num prato de cerâmica escura.",
    caption: "Doce de fecho",
  },
];

const pillars = [
  {
    icon: Landmark,
    title: "Um espaço com memória",
    text: "Barro, madeira e palha: a sala conversa com a arquitetura angolana, sem excessos. Candeeiros de vime baixam a luz ao anoitecer.",
  },
  {
    icon: Users,
    title: "Serviço próximo",
    text: "Equipa pequena e atenta, que conhece cada prato a fundo — e sabe quando não deve interromper a conversa.",
  },
  {
    icon: Star,
    title: "Detalhes que se provam",
    text: "Pão de fermentação lenta, óleos infusionados e compotas de fruta da época: pequenos gestos em cada prato.",
  },
];

function ExperienciaPage() {
  return (
    <>
      <section className="bg-secondary/60 py-14 sm:py-20" aria-labelledby="experiencia-title">
        <div className="shell max-w-3xl">
          <p className="eyebrow animate-rise">Experiência</p>
          <h1
            id="experiencia-title"
            className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl"
          >
            Comer bem também é criar memória.
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground sm:text-lg">
            Em Luanda, a mesa ganha outro ritmo. No MUKANDA Cozinha, a luz desce, as conversas esticam-se e
            cada prato chega ao ritmo da cozinha.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="ambiente-title">
        <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={ambienteImage}
              alt="Sala do MUKANDA Cozinha ao anoitecer: paredes terracota, candeeiros de vime, mesas postas com lanternas e vista para o pôr do sol."
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full rounded-3xl object-cover shadow-xl"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">O ambiente</p>
            <h2
              id="ambiente-title"
              className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl"
            >
              Texturas naturais e luz de fim de tarde.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Desenhamos a sala para desacelerar: mesas bem distanciadas, texturas naturais e uma
              cozinha aberta onde se vê a brasa a trabalhar. Ao fim de tarde, o terraço é o melhor
              lugar da casa.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A música é discreta, o som é de conversa e de panelas. Nada corre com pressa — nem o
              serviço, nem a refeição.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 py-14 sm:py-20" aria-labelledby="pilares-title">
        <div className="shell">
          <div className="grid gap-10 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 100}>
                <div>
                  <span className="grid size-11 place-items-center rounded-full bg-card text-primary shadow-sm">
                    <pillar.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3
                    id={i === 0 ? "pilares-title" : undefined}
                    className="mt-4 font-display text-xl font-semibold text-foreground"
                  >
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="galeria-title">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Galeria</p>
            <h2 id="galeria-title" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Um olhar sobre a casa e os pratos.
            </h2>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {gallery.map((item, i) => (
              <Reveal key={item.caption} delay={(i % 3) * 80}>
                <li className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/85 to-transparent px-4 pb-3 pt-10 text-sm font-medium text-cream">
                    {item.caption}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-espresso py-14 sm:py-16" aria-labelledby="exp-cta-title">
        <div className="shell text-center">
          <Reveal>
            <h2
              id="exp-cta-title"
              className="font-display text-2xl font-semibold text-cream sm:text-3xl"
            >
              Venha conhecer a sala em pessoa.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-cream/75">
              Reserve pelo WhatsApp ou passe por {restaurant.address} —{" "}
              {restaurant.addressNote.toLowerCase()}.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={restaurant.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-ochre px-7 py-3.5 text-sm font-semibold text-espresso shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
              >
                Reservar pelo WhatsApp
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                Ver o menu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}