"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[863],{7592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var i=t(7458),s=t(9284),o=t(3154);const c={title:"Function",description:"Function Methods"},r="Function Methods",d={id:"methos/function",title:"Function",description:"Function Methods",source:"@site/docs/methos/function.mdx",sourceDirName:"methos",slug:"/methos/function",permalink:"/doumi/docs/methos/function",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Function",description:"Function Methods"},sidebar:"docSidebar",previous:{title:"DOM",permalink:"/doumi/docs/methos/dom"},next:{title:"Lang",permalink:"/doumi/docs/methos/lang"}},a={},l=[{value:"debounce",id:"debounce",level:2},{value:"sleep",id:"sleep",level:2},{value:"throttle",id:"throttle",level:2},{value:"times",id:"times",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"function-methods",children:"Function Methods"}),"\n",(0,i.jsx)(n.h2,{id:"debounce",children:"debounce"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Since"}),": ",(0,i.jsx)(n.em,{children:"0.1.0"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,i.jsx)(o.Z,{datas:[{param:"func",type:"Function",description:"The function to debounce."},{param:"wait",type:"number",description:"The number of milliseconds to delay"},{param:"[immediate]",type:"boolean",description:"If immediate is `true`, the argument `func` will be triggered at the beginning of the sequence instead of at the end."}]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Returns"})}),"\n",(0,i.jsx)(o.Z,{datas:[{type:"Function",description:"Returns debounce function. You can cancel debounce using `debounced.cancel`"}]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Declaration"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"declare function debounce<\n  T extends (...args: any[]) => any = (...args: any[]) => any,\n>(func: T, wait: number, immediate?: boolean): Debounced<T>;\n\ntype Debounced<T extends (...args: T[]) => any> = {\n  (...args: Parameters<T>): ReturnType<T>;\n  cancel: () => void;\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const debounced = debounce(resizeHandler, 200);\ndocument.body.addEventListener('resize', debounced);\n\n// You can cancel the trailing bebounced invocation.\nfunction mustStopDebounce() {\n  debounced.cancel();\n}\n\n// Invoke `requestData` when clicked, debouncing subsequent calls.\n$requestApiBtn.addEventListener('click', debounce(requestData, 300, true));\n"})}),"\n",(0,i.jsx)(n.h2,{id:"sleep",children:"sleep"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Trigger delay"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Since"}),": ",(0,i.jsx)(n.em,{children:"0.1.0"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,i.jsx)(o.Z,{datas:[{param:"wait",type:"number ",description:"The number of milliseconds to delay"}]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Declaration"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"declare const sleep: (wait: number) => Promise<void>;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"throttle",children:"throttle"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Creates a throttled function that only invokes func at most once per every wait milliseconds."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The throttled function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Since"}),": ",(0,i.jsx)(n.em,{children:"0.1.0"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,i.jsx)(o.Z,{datas:[{param:"func",type:"Function",description:"The function to throttle."},{param:"wait",type:"number",description:"The number of milliseconds to delay"},{param:"[options = {}]",type:"ThrottleOptions",description:"The options object."},{param:"[options.leading = true]",type:"boolean",description:"Specify invoking on the leading edge of the timeout."},{param:"[options.trailing = true]",type:"boolean",description:"Specify invoking on the trailing edge of the timeout."}]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Returns"})}),"\n",(0,i.jsx)(o.Z,{datas:[{type:"Function",description:"Returns throttled function. You can cancel throttle using `throttled.cancel`"}]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Declaration"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"declare function throttle<T extends (...args: any[]) => any>(\n  func: T,\n  wait: number,\n  options?: { leading?: boolean; trailing?: boolean }\n): Throttled<T>;\n\ntype Throttled<T extends (...args: T[]) => any> = {\n  (...args: Parameters<T>): ReturnType<T>;\n  cancel: () => void;\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const throttled = throttle(scrollHandler, 200);\nwindow.addEventListener('scroll', throttled);\n\n// You can cancel the trailing throttled invocation.\nthrottled.cancel();\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"times",children:"times"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Invokes the iteratee n times, returning an array of the results of each invocation."}),"\n",(0,i.jsx)(n.p,{children:"The iteratee is invoked with one argument; (index)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Since"}),": ",(0,i.jsx)(n.em,{children:"1.1.0"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,i.jsx)(o.Z,{datas:[{param:"count",type:"number",description:"The number of times to invoke iteratee."},{param:"fn",type:"Function",description:"The function invoked per iteration."}]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Returns"})}),"\n",(0,i.jsx)(o.Z,{datas:[{type:"any[]",description:"Returns the array of results."}]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Declaration"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"declare function times<Fn extends (...args: any[]) => any>(\n  count: number,\n  fn: Fn\n): ReturnType<Fn>[];\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"times(3, Boolean); // [false, true, true]\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);