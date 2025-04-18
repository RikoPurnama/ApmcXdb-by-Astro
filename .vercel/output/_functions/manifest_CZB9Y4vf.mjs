import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Cs9r8Sw9.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_Cn0lcgAD.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/projects/Astrojs%20projects/ApmcProjects/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/login","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/login\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/login.ts","pathname":"/api/auth/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/logout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/logout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/logout.ts","pathname":"/api/auth/logout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/checksession","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/checksession\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"checksession","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/checksession.ts","pathname":"/api/checksession","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/clients","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/clients\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"clients","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/clients.ts","pathname":"/api/clients","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/promotions","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/promotions\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"promotions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/promotions.ts","pathname":"/api/promotions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/updateclients","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/updateclients\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"updateclients","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/updateclients.ts","pathname":"/api/updateclients","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.xHpkMk9I.css"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.xHpkMk9I.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.xHpkMk9I.css"}],"routeData":{"route":"/more","isIndex":false,"type":"page","pattern":"^\\/more\\/?$","segments":[[{"content":"more","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/more.astro","pathname":"/more","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.xHpkMk9I.css"},{"type":"external","src":"/_astro/index.DV8PrLMj.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/projects/Astrojs projects/ApmcProjects/src/pages/index.astro",{"propagation":"none","containsHead":true}],["E:/projects/Astrojs projects/ApmcProjects/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["E:/projects/Astrojs projects/ApmcProjects/src/pages/login.astro",{"propagation":"none","containsHead":true}],["E:/projects/Astrojs projects/ApmcProjects/src/pages/more.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/auth/login@_@ts":"pages/api/auth/login.astro.mjs","\u0000@astro-page:src/pages/api/auth/logout@_@ts":"pages/api/auth/logout.astro.mjs","\u0000@astro-page:src/pages/api/checksession@_@ts":"pages/api/checksession.astro.mjs","\u0000@astro-page:src/pages/api/clients@_@ts":"pages/api/clients.astro.mjs","\u0000@astro-page:src/pages/api/promotions@_@ts":"pages/api/promotions.astro.mjs","\u0000@astro-page:src/pages/api/updateclients@_@ts":"pages/api/updateclients.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/more@_@astro":"pages/more.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","E:/projects/Astrojs projects/ApmcProjects/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","E:/projects/Astrojs projects/ApmcProjects/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dg2Ah6gy.mjs","\u0000@astrojs-manifest":"manifest_CZB9Y4vf.mjs","E:/projects/Astrojs projects/ApmcProjects/src/components/react/intro":"_astro/intro.B8jrCKpL.js","E:/projects/Astrojs projects/ApmcProjects/src/components/react/locationAndService":"_astro/locationAndService.CCLZYdKi.js","E:/projects/Astrojs projects/ApmcProjects/src/components/react/mitraList.tsx":"_astro/mitraList.XAOip0qj.js","E:/projects/Astrojs projects/ApmcProjects/src/components/react/productPrices":"_astro/productPrices.BB99l9FQ.js","E:/projects/Astrojs projects/ApmcProjects/src/components/mitraVoucher":"_astro/mitraVoucher.MC4X_hyd.js","@astrojs/react/client.js":"_astro/client.DNZJuE1l.js","E:/projects/Astrojs projects/ApmcProjects/src/components/react/nav":"_astro/nav.Cit8d9V2.js","E:/projects/Astrojs projects/ApmcProjects/src/components/react/banner":"_astro/banner.DuMqN4QF.js","E:/projects/Astrojs projects/ApmcProjects/src/components/app.tsx":"_astro/app.BtdFYbPC.js","E:/projects/Astrojs projects/ApmcProjects/src/components/app":"_astro/app.C3QGltF4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/dashboard.xHpkMk9I.css","/_astro/index.DV8PrLMj.css","/android-chrome-512x512.png","/favicon.svg","/fiberoptic.jpg","/hero.webp","/Irma_voc.webp","/Istiqomah_voc.webp","/Lulu_voc.webp","/maskot.webp","/modem.jpg","/nokuota.jpg","/Saroh_voc.webp","/unlimited.jpg","/_astro/app.BtdFYbPC.js","/_astro/app.C3QGltF4.js","/_astro/banner.DuMqN4QF.js","/_astro/client.DNZJuE1l.js","/_astro/iconBase.BURwr5k2.js","/_astro/index.Cb2GqDXq.js","/_astro/index.CVTMhOUg.js","/_astro/index.D2MAbzvX.js","/_astro/index.oIQ917gr.js","/_astro/intro.B8jrCKpL.js","/_astro/jsx-runtime.CDeAccHH.js","/_astro/locationAndService.CCLZYdKi.js","/_astro/mitraList.XAOip0qj.js","/_astro/mitraVoucher.MC4X_hyd.js","/_astro/motion.DmQNgYpf.js","/_astro/nav.Cit8d9V2.js","/_astro/productPrices.BB99l9FQ.js","/_astro/swiper-react.DbA68-D7.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"HoDleW+udR+fAIYwdk4o8zge701O42Vd6rcy1lF6/GM="});

export { manifest };
