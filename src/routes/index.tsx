import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Wine, SunMedium } from "lucide-react";
import { Reveal } from "@/components/kora/reveal";
import { menuCategories, restaurant, testimonials } from "@/lib/kora-data";
const heroImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=85";
const moambaImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1024&q=85";
const camaraoImage = "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1024&q=85";
const polvoImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1024&q=85";
const sobremesaImage = "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1024&q=85";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${restaurant.name} — ${restaurant.tagline}` },
      {
        name: "description",
        content:
          `${restaurant.tagline} em ${restaurant.city}: cozinha reinterpretada, pratos de assinatura e ambiente acolhedor. Reservas pelo WhatsApp. Site de demonstração.`,
      },
      { property: "og:title", content: `${restaurant.name} — ${restaurant.tagline}` },
      {
        property: "og:description",
        content:
          `${restaurant.tagline} num ambiente contemporâneo em ${restaurant.city}. Reservas pelo WhatsApp. Site de demonstração.`,
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const principais = menuCategories.find((category) => category.id === "principais")!;
const sobremesas = menuCategories.find((category) => category.id === "sobremesas")!;

const highlights = [
  { image: camaraoImage, alt: `Prato em destaque do ${restaurant.name}.`, ...principais.dishes[0]! },
  { image: polvoImage, alt: `Prato em destaque do ${restaurant.name}.`, ...principais.dishes[1]! },
  { image: sobremesaImage, alt: `Sobremesa em destaque do ${restaurant.name}.`, ...sobremesas.dishes[0]! },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden" aria-labelledby="hero-title">
        <img
          src={heroImage}
          alt={`Prato de assinatura do ${restaurant.name}: peixe grelhado com banana-pão, salada fresca e molho, servido em cerâmica escura sobre toalha de linho creme.`}
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-espresso/80 via-espresso/55 to-espresso/80" />

        <div className="shell flex min-h-[78svh] flex-col justify-end py-16 sm:min-h-[82svh] sm:justify-center sm:py-24">
          <div className="max-w-2xl animate-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ochre">
              {restaurant.city} · {restaurant.tagline}
            </p>
            <h1
              id="hero-title"
              className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl lg:text-6xl"
            >
              Sabores de Angola, <span className="italic text-ochre">reinterpretados à mesa.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/85 sm:text-lg">
              Receitas de sempre com técnica de agora. Produtos frescos do mercado, brasa paciente e
              uma sala feita para demorar à mesa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay"
              >
                Reservar mesa
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-6 py-3 text-sm font-semibold text-cream backdrop-blur transition-colors hover:bg-cream/20"
              >
                Ver menu
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* A nossa cozinha */}
      <section className="py-16 sm:py-24" aria-labelledby="cozinha-title">
        <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">A nossa cozinha</p>
            <h2
              id="cozinha-title"
              className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
            >
              Sabores de família, tratados com técnica e precisão.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              A cozinha do {restaurant.name} parte de sabores angolanos e trata cada prato como uma
              criação de autor: produtos de mercado, cocções cuidadas e apresentação elegante, sem
              perder a alma.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                {
                  icon: Leaf,
                  title: "Ingredientes frescos",
                  text: "Escolhemos ingredientes frescos e valorizamos sabores familiares.",
                },
                {
                  icon: SunMedium,
                  title: "Brasa e tempo",
                  text: "A brasa e as cocções lentas dão profundidade a carnes, peixes e legumes.",
                },
                {
                  icon: Wine,
                  title: "Bebidas à mesa",
                  text: "Sumos, mocktails e vinhos escolhidos para acompanhar cada prato.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/menu"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-clay"
            >
              Explorar o menu completo
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <img
                src={moambaImage}
                alt="Moamba de galinha servida num recipiente de barro escuro, acompanhada de funge branco num prato de cerâmica terracota."
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
              />
              <p className="absolute bottom-4 left-4 right-4 rounded-2xl bg-espresso/85 px-5 py-3 text-sm font-medium text-cream backdrop-blur">
                {`${menuCategories[1]?.dishes[0]?.name ?? "Prato de assinatura"} — servido com banana-pão e legumes.`}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Destaques da cozinha */}
      <section className="bg-secondary/60 py-16 sm:py-24" aria-labelledby="destaques-title">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Da cozinha para a mesa</p>
            <h2
              id="destaques-title"
              className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
            >
              Três sabores que definem a casa.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((dish, i) => (
              <Reveal key={dish.name} delay={i * 100}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <img
                    src={dish.image}
                    alt={dish.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {dish.name}
                      </h3>
                      <p className="shrink-0 font-semibold text-primary">{dish.price}</p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {dish.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              Ver todo o menu
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Depoimentos (fictícios) */}
      <section className="py-16 sm:py-24" aria-labelledby="depoimentos-title">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">O que dizem à mesa</p>
            <h2
              id="depoimentos-title"
              className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl"
            >
              Experiências à mesa
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Depoimentos fictícios, criados apenas para esta demonstração.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 100}>
                <blockquote className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm">
                  <p className="text-3xl leading-none text-ochre" aria-hidden="true">
                    “
                  </p>
                  <p className="mt-2 leading-relaxed text-foreground/90">{t.quote}</p>
                  <footer className="mt-5">
                    <p className="font-semibold text-foreground">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.detail}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-espresso py-16 sm:py-20" aria-labelledby="cta-title">
        <div className="shell text-center">
          <Reveal>
            <h2
              id="cta-title"
              className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl"
            >
              A mesa está posta. Venha conhecer a casa.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/75">
              Reserve pelo WhatsApp e deixe o resto connosco. Grupos até oito pessoas confirmam na
              hora; eventos maiores, pedimos um telefonema.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={restaurant.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-ochre px-7 py-3.5 text-sm font-semibold text-espresso shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
              >
                Reservar pelo WhatsApp
              </a>
              <a
                href={restaurant.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                Ligar: {restaurant.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}