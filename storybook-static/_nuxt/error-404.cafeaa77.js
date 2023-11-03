import{D as q,j as _,l as w,E as R,G as I,x as k,r as A,o as E,f as V,e as g,t as x,a as B,w as z,b as j,q as $,s as D}from"./vue.esm-bundler.fd807677.js";import{u as y,a as S,b as L,n as U}from"./entry.8d3ea79f.js";import{h as M,p as H,a as F,w as O,b as G}from"./paths.85c5da9b.js";import{u as X}from"./welcome.6bf33815.js";import{_ as Q}from"./_plugin-vue_export-helper.c27b6911.js";import"./iframe.407f12c7.js";import"../sb-preview/runtime.js";import"./VCheckbox.f47dcf2e.js";import"./Card.47b5a6bc.js";const C=globalThis.requestIdleCallback||(t=>{const a=Date.now(),s={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{t(s)},1)}),J=t=>{const a=y();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{C(t)}):C(t)};async function N(t,a=S()){const{path:s,matched:c}=a.resolve(t);if(!c.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(s)))return;const e=a._preloadPromises=a._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>N(t,a));a._routePreloaded.add(s);const o=c.map(r=>{var n;return(n=r.components)==null?void 0:n.default}).filter(r=>typeof r=="function");for(const r of o){const n=Promise.resolve(r()).catch(()=>{}).finally(()=>e.splice(e.indexOf(n)));e.push(n)}await Promise.all(e)}const K=(...t)=>t.find(a=>a!==void 0),W="noopener noreferrer",Y=import.meta.server?()=>{}:globalThis.requestIdleCallback||(t=>{const a=Date.now(),s={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{t(s)},1)}),Z=import.meta.server?()=>{}:globalThis.cancelIdleCallback||(t=>{clearTimeout(t)});/*! @__NO_SIDE_EFFECTS__ */function ee(t){const a=t.componentName||"NuxtLink",s=(e,o,r)=>{import.meta.dev&&e[o]!==void 0&&e[r]!==void 0&&console.warn(`[${a}] \`${o}\` and \`${r}\` cannot be used together. \`${r}\` will be ignored.`)},c=(e,o)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const r=t.trailingSlash==="append"?O:G;if(typeof e=="string")return r(e,!0);const n="path"in e?e.path:o(e).path;return{...e,name:void 0,path:r(n,!0)}};return q({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:o}){const r=S()??L(),n=_(()=>{s(e,"to","href");const l=e.to||e.href||"";return c(l,r.resolve)}),d=_(()=>e.external||e.target&&e.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||M(n.value,{acceptRelative:!0})),p=w(!1),f=import.meta.server?void 0:w(null),T=import.meta.server?void 0:l=>{var m;f.value=e.custom?(m=l==null?void 0:l.$el)==null?void 0:m.nextElementSibling:l==null?void 0:l.$el};if(import.meta.client&&(s(e,"prefetch","noPrefetch"),e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!ne())){const m=y();let h,i=null;R(()=>{const b=ae();J(()=>{h=Y(()=>{var v;(v=f==null?void 0:f.value)!=null&&v.tagName&&(i=b.observe(f.value,async()=>{i==null||i(),i=null;const u=typeof n.value=="string"?n.value:r.resolve(n.value).fullPath;await Promise.all([m.hooks.callHook("link:prefetch",u).catch(()=>{}),!d.value&&N(n.value,r).catch(()=>{})]),p.value=!0}))})})}),I(()=>{h&&Z(h),i==null||i(),i=null})}return()=>{var b,v;if(!d.value){const u={ref:T,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(p.value&&(u.class=e.prefetchedClass||t.prefetchedClass),u.rel=e.rel),k(A("RouterLink"),u,o.default)}const l=typeof n.value=="object"?((b=r.resolve(n.value))==null?void 0:b.href)??null:n.value||null,m=e.target||null;s(e,"noRel","rel");const h=e.noRel?null:K(e.rel,t.externalRelAttribute,l?W:"")||null,i=()=>U(l,{replace:e.replace});return e.custom?o.default?o.default({href:l,navigate:i,get route(){if(!l)return;const u=H(l);return{path:u.pathname,fullPath:u.pathname,get query(){return F(u.search)},hash:u.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l}},rel:h,target:m,isExternal:d.value,isActive:!1,isExactActive:!1}):null:k("a",{ref:f,href:l,rel:h,target:m},(v=o.default)==null?void 0:v.call(o))}}})}const te=ee({componentName:"NuxtLink"});function ae(){if(import.meta.server)return;const t=y();if(t._observer)return t._observer;let a=null;const s=new Map,c=(o,r)=>(a||(a=new IntersectionObserver(n=>{for(const d of n){const p=s.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&p&&p()}})),s.set(o,r),a.observe(o),()=>{s.delete(o),a.unobserve(o),s.size===0&&(a.disconnect(),a=null)});return t._observer={observe:c}}function ne(){if(import.meta.server)return;const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const re=t=>($("data-v-f5c0a1bb"),t=t(),D(),t),oe={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},le=re(()=>g("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),se={class:"max-w-520px text-center z-20"},ie=["textContent"],ue=["textContent"],ce={class:"w-full flex items-center justify-center"},P={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const a=t;return X({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(s,c)=>{const e=te;return E(),V("div",oe,[le,g("div",se,[g("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:x(t.statusCode)},null,8,ie),g("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:x(t.description)},null,8,ue),g("div",ce,[B(e,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:z(()=>[j(x(t.backHome),1)]),_:1})])])])}}},ye=Q(P,[["__scopeId","data-v-f5c0a1bb"]]);P.__docgenInfo={exportName:"default",displayName:"error-404",description:"",tags:{},props:[{name:"appName",type:{name:"string"},defaultValue:{func:!1,value:'"Nuxt"'}},{name:"version",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"statusCode",type:{name:"number"},defaultValue:{func:!1,value:"404"}},{name:"statusMessage",type:{name:"string"},defaultValue:{func:!1,value:'"Not Found"'}},{name:"description",type:{name:"string"},defaultValue:{func:!1,value:'"Sorry, the page you are looking for could not be found."'}},{name:"backHome",type:{name:"string"},defaultValue:{func:!1,value:'"Go back home"'}}],sourceFiles:["/home/tulex/Entwicklung/Projekte/NUXT/N4/node_modules/.pnpm/@nuxt+ui-templates@1.3.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]};export{ye as default};
//# sourceMappingURL=error-404.cafeaa77.js.map
