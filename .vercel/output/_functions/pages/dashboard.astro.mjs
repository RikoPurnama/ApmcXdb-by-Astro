/* empty css                                     */
import { c as createComponent, r as renderTemplate, f as renderComponent } from '../chunks/astro/server_jPH76rp6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_Bg1sMzxM.mjs';
export { renderers } from '../renderers.mjs';

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "Title": "Dashboard" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "App", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "E:/projects/Astrojs projects/ApmcProjects/src/components/app.tsx", "client:component-export": "default" })} ` })}`;
}, "E:/projects/Astrojs projects/ApmcProjects/src/pages/dashboard.astro", void 0);

const $$file = "E:/projects/Astrojs projects/ApmcProjects/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
