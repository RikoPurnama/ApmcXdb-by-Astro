import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro } from './astro/server_jPH76rp6.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { Title } = Astro2.props;
  return renderTemplate`<html lang="id" class="scroll-smooth"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/android-chrome-512x512.png"><meta name="description" content="Nikmati internet cepat jangkauan luas mulai dari 200 ribuan saja perbulan. Yuk pilih apmcXdb untuk memperlancar kegiatan mu dirumah bersama apmcXdb.net"><meta name="keywords" content="Apmc, Apmcnet, ApmcXdb, ApmcXdb.net, Internet, Wifi, Wifi murah, Wifi indramayu, Wifi di indramayu"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${Title} | Apmcxdb</title>${renderHead()}</head> <body> <main class="text-dark bg-white"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "E:/projects/Astrojs projects/ApmcProjects/src/layouts/layout.astro", void 0);

export { $$Layout as $ };
