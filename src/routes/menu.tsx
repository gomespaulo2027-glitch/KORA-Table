import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/kora/reveal";
import { menuCategories, restaurant } from "@/lib/kora-data";
const camaraoImage = "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1024&q=85";
const moambaImage = "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1024&q=85";
const sobremesaImage = "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1024&q=85";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — MUKANDA Cozinha" },
      {
        name: "description",
        content:
          "Menu de demonstração do MUKANDA Cozinha: entradas, pratos principais, sobremesas e coquetéis inspirados na cozinha angolana. Preços fictícios em Kwanza (Kz).",
      },
      { property: "og:title", content: "Menu — MUKANDA Cozinha" },
      {
        property: "og:description",
        content:
          "Entradas, pratos principais, sobremesas e coquetéis inspirados na cozinha angolana. Site de demonstração com preços fictícios.",
      },
      { property: "og:url", content: "/menu" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

const principais = menuCategories.find((category) => category.id === "principais")!;
const entradas = menuCategories.find((category) => category.id === "entradas")!;
const sobremesas = menuCategories.find((category) => category.id === "sobremesas")!;

const signatures = [
  { image: moambaImage, alt: `Prato em destaque do ${restaurant.name}.`, ...principais.dishes[0]! },
  { image: camaraoImage, alt: `Prato em destaque do ${restaurant.name}.`, ...entradas.dishes[2]! },
  { image: sobremesaImage, alt: `Sobremesa em destaque do ${restaurant.name}.`, ...sobremesas.dishes[0]! },
];

function MenuPage() {
  return (
    <>
      <section className="bg-secondary/60 py-14 sm:py-20" aria-labelledby="menu-title">
        <div className="shell max-w-3xl">
          <p className="eyebrow animate-rise">Menu</p>
          <h1
            id="menu-title"
            className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl"
          >
            O que cozinhamos esta estação.
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground sm:text-lg">
            Carta curta e rotativa: o mercado manda, a cozinha interpreta. Este menu é fictício e
            serve apenas de demonstração — os preços em Kwanza são inventados.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="especiais-title">
        <div className="shell">
          <Reveal>
            <h2 id="especiais-title" className="font-display text-2xl font-semibold sm:text-3xl">
              Especiais da casa
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signatures.map((dish, i) => (
              <Reveal key={dish.name} delay={i * 100}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative">
                    <img
                      src={dish.image}
                      alt={dish.alt}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-espresso/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream backdrop-blur">
                      {dish.tag}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 p-6">
                    <h3 className="font-display text-lg font-semibold">{dish.name}</h3>
                    <p className="shrink-0 font-semibold text-primary">{dish.price}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {menuCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={index % 2 === 1 ? "bg-secondary/50 py-14 sm:py-20" : "py-14 sm:py-20"}
          aria-labelledby={`${category.id}-title`}
        >
          <div className="shell max-w-3xl">
            <Reveal>
              <h2
                id={`${category.id}-title`}
                className="font-display text-2xl font-semibold text-foreground sm:text-3xl"
              >
                {category.title}
              </h2>
              {category.intro && <p className="mt-2 text-muted-foreground">{category.intro}</p>}
            </Reveal>
            <ul className="mt-8 divide-y divide-border/70">
              {category.dishes.map((dish) => (
                <li key={dish.name} className="py-5">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 sm:flex sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="min-w-0 font-semibold text-foreground">
                      {dish.name}
                      {dish.tag && (
                        <span className="ml-3 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                          {dish.tag}
                        </span>
                      )}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 border-b border-dashed border-border sm:block"
                    />
                    <p className="shrink-0 font-semibold text-primary">{dish.price}</p>
                  </div>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {dish.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-espresso py-14 sm:py-16" aria-labelledby="menu-cta-title">
        <div className="shell text-center">
          <Reveal>
            <h2
              id="menu-cta-title"
              className="font-display text-2xl font-semibold text-cream sm:text-3xl"
            >
              Quer provar à mesa?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-cream/75">
              Reserve pelo WhatsApp em dois minutos — indicamos as mesas com melhor luz ao fim da
              tarde.
            </p>
            <a
              href={restaurant.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-ochre px-7 py-3.5 text-sm font-semibold text-espresso shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
            >
              Reservar pelo WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}