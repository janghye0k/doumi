"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[592],{89:(e,n,t)=>{t.d(n,{Ds:()=>l,Kn:()=>c,XP:()=>s,kC:()=>i,kJ:()=>o});const o=e=>Array.isArray(e),c=e=>"function"==typeof e||"object"==typeof e&&!!e,r=Object.assign;const s=e=>Object.keys(e);function l(e,n,t){void 0===t&&(t=!1);let o,c,s=null;const l=()=>{s=null,t||(o=e(...c)),s||(c=null)},i=r((function(){for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];c=i;const a=t&&!s;return s&&clearTimeout(s),s=window.setTimeout(l,n),a&&(o=e(...c)),o}),{cancel:()=>{s&&clearTimeout(s),s=null}});return i}const i=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()},3154:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(89),c=(t(2983),t(7477)),r=t(7458);const s=e=>{let{datas:n}=e;if(!(0,o.kJ)(n)||0===n.length)return null;const t=(0,o.XP)(n.at(0)).filter((e=>"link"!==e));return(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:t.map((e=>(0,r.jsx)("th",{children:(0,o.kC)(e)},e)))})}),(0,r.jsx)("tbody",{children:n.map(((e,n)=>(0,r.jsx)("tr",{children:t.map((n=>{const t=e[n],s=(0,o.Kn)(t)?(0,r.jsx)(c.Z,{to:t.link,children:t.value}):t;return(0,r.jsx)("td",{children:"type"===n?(0,r.jsx)("code",{children:s}):s.split("`").map(((e,n)=>n%2==0?e:(0,r.jsx)("code",{children:e})))},"col-"+n)}))},"row"+n)))})]})}},9284:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var o=t(2983);const c={},r=o.createContext(c);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);