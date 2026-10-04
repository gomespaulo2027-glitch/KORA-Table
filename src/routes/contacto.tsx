import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { Reveal } from "@/components/kora/reveal";
import { restaurant } from "@/lib/kora-data";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto e reservas — KORA Table" },
      {
        name: "description",
        content:
          "Reserve a sua mesa no KORA Table pelo WhatsApp ou telefone. Horário, endereço fictício e localização ilustrativa em Luanda. Site de demonstração.",
      },
      { property: "og:title", content: "Contacto e reservas — KORA Table" },
      {
        property: "og:description",
        content:
          "Reservas pelo WhatsApp, horário e localização ilustrativa do KORA Table em Luanda. Site de demonstração com dados fictícios.",
      },
      { property: "og:url", content: "/contacto" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactoPage,
});

const contactCards = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: [restaurant.address, restaurant.addressNote],
  },
  {
    icon: Phone,
    title: "Telefone",
    lines: [restaurant.phoneDisplay, "Número fictício de demonstração"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: [restaurant.whatsappDisplay, "Respostas em minutos, dentro do horário"],
  },
  {
    icon: Clock,
    title: "Horário",
    lines: restaurant.hours.map((h) => `${h.days}: ${h.time}`),
  },
];

function ContactoPage() {
  return (
    <>
      <section className="bg-secondary/60 py-14 sm:py-20" aria-labelledby="contacto-title">
        <div className="shell max-w-3xl">
          <p className="eyebrow animate-rise">Contacto e reservas</p>
          <h1
            id="contacto-title"
            className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl"
          >
            Reserve a sua mesa.
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground sm:text-lg">
            Trabalhamos com reservas simples pelo WhatsApp: diga o dia, a hora e quantas pessoas, e
            confirmamos de imediato. Todos os dados desta página são fictícios, criados para
            demonstração.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={restaurant.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Reservar pelo WhatsApp
            </a>
            <a
              href={restaurant.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Phone className="size-4" aria-hidden="true" />
              {restaurant.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="informacao-title">
        <div className="shell">
          <Reveal>
            <h2 id="informacao-title" className="font-display text-2xl font-semibold sm:text-3xl">
              Informação prática
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <span className="grid size-10 place-items-center rounded-full bg-secondary text-primary">
                    <card.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-semibold text-foreground">{card.title}</h3>
                  <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground">
                    {card.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa ilustrativo — bloco visual, sem integração real */}
      <section className="pb-14 sm:pb-20" aria-labelledby="mapa-title">
        <div className="shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-espresso shadow-lg">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 46px, rgba(243,228,211,0.25) 46px, rgba(243,228,211,0.25) 47px), repeating-linear-gradient(90deg, transparent, transparent 46px, rgba(243,228,211,0.25) 46px, rgba(243,228,211,0.25) 47px)",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-72 w-72 rounded-full bg-ochre/20 blur-3xl"
              />
              <div className="relative flex flex-col items-center gap-4 px-6 py-16 text-center sm:py-20">
                <span className="grid size-14 place-items-center rounded-full bg-ochre text-espresso shadow-lg">
                  <MapPin className="size-7" aria-hidden="true" />
                </span>
                <h2
                  id="mapa-title"
                  className="font-display text-2xl font-semibold text-cream sm:text-3xl"
                >
                  Estamos no centro de Luanda
                </h2>
                <p className="max-w-md text-sm text-cream/75">
                  {restaurant.address}. Bloco ilustrativo de localização — mapa fictício, sem
                  integração real. {restaurant.addressNote}.
                </p>
                <a
                  href={restaurant.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
                >
                  Pedir indicações pelo WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}