/* empty css                                     */
import { c as createComponent, r as renderTemplate, f as renderComponent } from '../chunks/astro/server_Cn0lcgAD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_BKTxJgp5.mjs';
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "Title": "Login" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "App", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "E:/projects/Astrojs projects/ApmcProjects/src/components/app", "client:component-export": "default" })} ` })}`;
}, "E:/projects/Astrojs projects/ApmcProjects/src/pages/login.astro", void 0);

const $$file = "E:/projects/Astrojs projects/ApmcProjects/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
