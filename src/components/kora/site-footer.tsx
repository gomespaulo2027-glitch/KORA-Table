import { Link } from "@tanstack/react-router";
import { restaurant } from "@/lib/kora-data";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-espresso text-cream">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-xl font-semibold">
            KORA <span className="font-normal italic text-ochre">Table</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            Sabores de Angola, reinterpretados à mesa. Um restaurante contemporâneo no coração de
            Luanda.
          </p>
        </div>

        <nav aria-label="Navegação de rodapé">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ochre">Navegar</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/" className="text-cream/80 transition-colors hover:text-cream">
                Início
              </Link>
            </li>
            <li>
              <Link to="/menu" className="text-cream/80 transition-colors hover:text-cream">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/experiencia" className="text-cream/80 transition-colors hover:text-cream">
                Experiência
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="text-cream/80 transition-colors hover:text-cream">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ochre">Contacto</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
            <li>{restaurant.address}</li>
            <li>
              <a href={restaurant.phoneHref} className="transition-colors hover:text-cream">
                {restaurant.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={restaurant.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream"
              >
                WhatsApp {restaurant.whatsappDisplay}
              </a>
            </li>
            <li>{restaurant.email}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ochre">Horário</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
            {restaurant.hours.map((h) => (
              <li key={h.days}>
                <span className="block text-cream">{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} KORA Table — marca e conteúdo fictícios de demonstração.
          </p>
          <p>Todos os contactos, preços e depoimentos desta página são inventados.</p>
        </div>
      </div>
    </footer>
  );
}