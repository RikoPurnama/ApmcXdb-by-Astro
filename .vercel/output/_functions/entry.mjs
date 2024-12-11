import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DL5OiBgh.mjs';
import { manifest } from './manifest_CZB9Y4vf.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/login.astro.mjs');
const _page2 = () => import('./pages/api/auth/logout.astro.mjs');
const _page3 = () => import('./pages/api/checksession.astro.mjs');
const _page4 = () => import('./pages/api/clients.astro.mjs');
const _page5 = () => import('./pages/api/promotions.astro.mjs');
const _page6 = () => import('./pages/api/updateclients.astro.mjs');
const _page7 = () => import('./pages/dashboard.astro.mjs');
const _page8 = () => import('./pages/login.astro.mjs');
const _page9 = () => import('./pages/more.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/login.ts", _page1],
    ["src/pages/api/auth/logout.ts", _page2],
    ["src/pages/api/checksession.ts", _page3],
    ["src/pages/api/clients.ts", _page4],
    ["src/pages/api/promotions.ts", _page5],
    ["src/pages/api/updateclients.ts", _page6],
    ["src/pages/dashboard.astro", _page7],
    ["src/pages/login.astro", _page8],
    ["src/pages/more.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "519cef7c-ba88-4e85-9ec1-22134085802b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
