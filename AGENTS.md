<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project rules

- KORA Table is a fictional demo restaurant site (Luanda, Angola) for the Lovable → GitHub → Vercel flow: no auth, no database, no payments, no real brand content. All contacts, prices (Kz), and testimonials are invented and labelled as demonstration data.
- Site content is written in Portuguese (neutral/Angola).
- Shared site copy (contacts, hours, menu, testimonials) lives in `src/lib/kora-data.ts`; components and routes import from there instead of hardcoding values.
- No external dependencies for UI: Tailwind v4 tokens in `src/styles.css` plus `lucide-react` only. Keep the bundle light for deployment.