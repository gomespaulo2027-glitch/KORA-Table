import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { restaurant } from "@/lib/kora-data";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/menu", label: "Menu" },
  { to: "/experiencia", label: "Experiência" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Fecha o menu sempre que a rota muda.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Saltar para o conteúdo
      </a>

      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 shell py-3 sm:flex sm:justify-between sm:py-4">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2.5"
          aria-label="KORA Table — página inicial"
        >
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-full border border-primary/50 bg-espresso text-base font-semibold text-cream"
          >
            K
          </span>
          <span className="min-w-0 truncate font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            KORA <span className="font-normal italic text-primary">Table</span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden sm:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeProps={{ className: "text-foreground after:w-full after:opacity-100" }}
                  className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:opacity-0 after:transition-all after:duration-300 hover:after:w-full hover:after:opacity-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="/contacto"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay sm:inline-flex"
          >
            Reservar mesa
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary sm:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-movel" className="border-t border-border/70 bg-background sm:hidden">
          <nav aria-label="Navegação móvel" className="shell py-3">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="block border-b border-border/50 py-3 text-base font-medium text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="/contacto"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Reservar mesa
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}