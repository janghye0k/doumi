"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[950],{7570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=t(7458),i=t(9284),r=t(3154);const o={title:"DOM",description:"Dom Methods"},l="DOM Methods",c={id:"methos/dom",title:"DOM",description:"Dom Methods",source:"@site/docs/methos/dom.mdx",sourceDirName:"methos",slug:"/methos/dom",permalink:"/doumi/docs/methos/dom",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"DOM",description:"Dom Methods"},sidebar:"docSidebar",previous:{title:"Collection",permalink:"/doumi/docs/methos/collection"},next:{title:"Function",permalink:"/doumi/docs/methos/function"}},d={},a=[{value:"bind$",id:"bind",level:2},{value:"create$",id:"create",level:2},{value:"find$",id:"find",level:2},{value:"findAll$",id:"findall",level:2},{value:"on",id:"on",level:2},{value:"off",id:"off",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"dom-methods",children:"DOM Methods"}),"\n",(0,s.jsx)(n.h2,{id:"bind",children:"bind$"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Function to pre-register events for elements whose existence is uncertain by registering events on the parent element."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Since"}),": ",(0,s.jsx)(n.em,{children:"0.1.0"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,s.jsx)(r.Z,{datas:[{param:"$element",type:"Element",description:"Parent element"},{param:"eventType",type:"string",description:"Event type to listen for. It should be of the mouse event type"},{param:"selector",type:"string",description:"A string containing one or more selectors to match."},{param:"listener",type:{value:"EvtListener",link:"../types#EvtListener"},description:"The object that receives a notification when an event of the specified type occurs."},{param:"[condition]",type:"Function",description:"Callback function that determine whether to fire an event listener"}]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Declaration"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare function bind$<\n  K extends MouseEventKeys,\n  T extends Element = HTMLElement,\n>(\n  $element: Element,\n  eventType: K,\n  selector: string,\n  listener: EvtListener<K, T>,\n  condition: BindCondition\n): void;\n\n// Types\n\n/**\n * Callback function that determine whether to fire an event listener\n * @callback BindCondition\n * @param {Element} parent The parent element where the event is actually registered\n * @param {Element} target The selector element on which to fire the event.\n * @returns {boolean} Whether to fire an event\n */\ntype BindCondition<P extends Element = Element, T extends Element = Element> = (\n  parent: P,\n  target: T\n) => boolean;\n\ntype MouseEventKeys =\n  | 'auxclick'\n  | 'click'\n  | 'contextmenu'\n  | 'dblclick'\n  | 'mousedown'\n  | 'mouseenter'\n  | 'mouseleave'\n  | 'mousemove'\n  | 'mouseout'\n  | 'mouseover'\n  | 'mouseup';\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"bind$(document.body, 'click', '.some-selector', (event) => console.log(event));\n"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"create",children:"create$"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Create Element"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,s.jsx)(r.Z,{datas:[{param:"tagName",type:"string",description:"The tag name of element"},{param:"[options]",type:"Object",description:"The element options"}]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Declaration"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare function create$<\n  K extends keyof HTMLElementTagNameMap,\n  T = HTMLElementTagNameMap[K],\n>(tagName: K, options?: CreateOptions<T>): HTMLElementTagNameMap[K];\n\n// Types\n\ntype CreateOptions<T> = Partial<\n  Omit<Writable<OmitFunction<T>>, keyof CreateCustomOptions>\n> &\n  CreateCustomOptions;\n\ntype CreateCustomOptions = {\n  id?: string | undefined;\n  className?: string | undefined;\n  classList?: string[] | undefined;\n  role?: AriaRole;\n  style?: Partial<CSSStyleDeclaration> | undefined;\n  dataset?: Record<string, string | boolean | number | undefined> | undefined;\n};\n\ntype Writable<T> = { [P in WritableKeys<T>]: T[P] };\n\ntype OmitFunction<T> = { [P in Exclude<keyof T, FunctionKeys<T>>]: T[P] };\n\ntype WritableKeys<T> = {\n  [P in keyof T]-?: IfEquals<\n    { [Q in P]: T[P] },\n    { -readonly [Q in P]: T[P] },\n    P,\n    never\n  >;\n}[keyof T];\n\ntype FunctionKeys<T> = {\n  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;\n}[keyof T];\n\ntype IfEquals<X, Y, A = X, B = never> =\n  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const $div = create$('div', { className: 'my-class', innerHTML: 'welcome' });\n// <div class=\"my-class\">welcome</div>\n"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"find",children:"find$"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Returns the first ",(0,s.jsx)(n.code,{children:"Element"})," within the document that matches the specified selector, or group of selectors. If no matches are found, ",(0,s.jsx)(n.code,{children:"null"})," is returned."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Since"}),": ",(0,s.jsx)(n.em,{children:"0.1.0"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,s.jsx)(r.Z,{datas:[{param:"selector",type:"string",description:"A string containing one or more selectors to match."},{param:"[element]",type:"Element",description:"The target element to find selector"}]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsx)(r.Z,{datas:[{type:"Element | null",description:""}]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Declaration"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare function find$<T extends Element = HTMLElement>(\n  selector: string,\n  element?: Element\n): T | null;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"find$('.some-class');\n"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"findall",children:"findAll$"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Since"}),": ",(0,s.jsx)(n.em,{children:"0.1.0"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,s.jsx)(r.Z,{datas:[{param:"selector",type:"string",description:"A string containing one or more selectors to match."},{param:"[element]",type:"Element",description:"The target element to find selector"}]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsx)(r.Z,{datas:[{type:"NodeListOf<Element>",description:"A non-live `NodeList` containing one `Element` object for each element that matches at least one of the specified selectors or an empty `NodeList` in case of no matches."}]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Declaration"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare function findAll$<T extends Element = HTMLElement>(\n  selector: string,\n  element?: Element\n): NodeListOf<T>;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const $items = findAll$('.some-item');\n"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"on",children:"on"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Bind event listener"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Since"}),": ",(0,s.jsx)(n.em,{children:"0.1.0"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,s.jsx)(r.Z,{datas:[{param:"element",type:"T",description:"The element to bind event"},{param:"eventType",type:"string",description:"A case-sensitive string representing the event type to listen for."},{param:"listener",type:{value:"EvtListener",link:"../types#EvtListener"},description:"The object that receives a notification when an event of the specified type occurs."},{param:"[options]",type:{value:"AddEventListenerOptions",link:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#options"},description:"An object that specifies characteristics about the event listener. If `true`, allows you to take advantage of event bubbling for events that otherwise don\u2019t support it."}]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Declaration"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare const on: <\n  K extends keyof HTMLElementEventMap,\n  T extends Element = HTMLElement,\n>(\n  element: T,\n  eventType: K,\n  listener: EvtListener<K, T>,\n  options?: AddEventListenerOptions\n) => void;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const handler = () => console.log('hi');\non(document.body, 'click', handler);\ndocument.body.click(); // 'hi'\n"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"off",children:"off"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Unbind event listener"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Since"}),": ",(0,s.jsx)(n.em,{children:"0.1.0"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,s.jsx)(r.Z,{datas:[{param:"element",type:"T",description:"The element to unbind event"},{param:"eventType",type:"string",description:"A case-sensitive string representing the event type to listen for."},{param:"listener",type:{value:"EvtListener",link:"../types#EvtListener"},description:"The object that receives a notification when an event of the specified type occurs."}]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Declaration"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare const off: <\n  K extends keyof HTMLElementEventMap,\n  T extends Element = HTMLElement,\n>(\n  element: T,\n  eventType: K,\n  listener: EvtListener<K, T>\n) => void;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const handler = () => console.log('hi');\ndocument.body.addEventListener('click', handler);\ndocument.body.click(); // 'hi'\noff(document.body, 'click', handler);\ndocument.body.click(); //\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},89:(e,n,t)=>{t.d(n,{Ds:()=>l,Kn:()=>i,XP:()=>o,kC:()=>c,kJ:()=>s});const s=e=>Array.isArray(e),i=e=>"function"==typeof e||"object"==typeof e&&!!e,r=Object.assign;const o=e=>Object.keys(e);function l(e,n,t){void 0===t&&(t=!1);let s,i,o=null;const l=()=>{o=null,t||(s=e(...i)),o||(i=null)},c=r((function(){for(var r=arguments.length,c=new Array(r),d=0;d<r;d++)c[d]=arguments[d];i=c;const a=t&&!o;return o&&clearTimeout(o),o=window.setTimeout(l,n),a&&(s=e(...i)),s}),{cancel:()=>{o&&clearTimeout(o),o=null}});return c}const c=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()},3154:(e,n,t)=>{t.d(n,{Z:()=>o});var s=t(89),i=(t(2983),t(7477)),r=t(7458);const o=e=>{let{datas:n}=e;if(!(0,s.kJ)(n)||0===n.length)return null;const t=(0,s.XP)(n.at(0)).filter((e=>"link"!==e));return(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:t.map((e=>(0,r.jsx)("th",{children:(0,s.kC)(e)},e)))})}),(0,r.jsx)("tbody",{children:n.map(((e,n)=>(0,r.jsx)("tr",{children:t.map((n=>{const t=e[n],o=(0,s.Kn)(t)?(0,r.jsx)(i.Z,{to:t.link,children:t.value}):t;return(0,r.jsx)("td",{children:"type"===n?(0,r.jsx)("code",{children:o}):o.split("`").map(((e,n)=>n%2==0?e:(0,r.jsx)("code",{children:e})))},"col-"+n)}))},"row"+n)))})]})}},9284:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(2983);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);