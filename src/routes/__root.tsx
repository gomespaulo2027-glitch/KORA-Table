import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/kora/site-header";
import { SiteFooter } from "@/components/kora/site-footer";

function NotFoundComponent() {
  return (
    <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">Erro 404</p>
      <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        O endereço que procurou não existe ou foi movido. Volte ao início ou descubra o nosso menu.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-clay"
        >
          Ir para o início
        </a>
        <a
          href="/menu"
          className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          Ver menu
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">Algo falhou</p>
      <h1 className="mt-3 text-3xl font-semibold text-foreground">Esta página não carregou</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        Foi um problema do nosso lado. Tente novamente ou regresse ao início.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-clay"
        >
          Tentar de novo
        </button>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          Ir para o início
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KORA Table — Restaurante contemporâneo em Luanda" },
      {
        name: "description",
        content:
          "KORA Table é um restaurante contemporâneo fictício em Luanda: cozinha angolana reinterpretada, ambiente acolhedor e reservas simples. Site de demonstração.",
      },
      { property: "og:site_name", content: "KORA Table" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#3A2418" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Karla:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="conteudo" className="flex-1">
          {/* As rotas filhas renderizam aqui. Remover este Outlet quebra todas as páginas. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}