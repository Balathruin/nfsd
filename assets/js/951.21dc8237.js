(self.webpackChunknfsd=self.webpackChunknfsd||[]).push([[951],{542:(e,t,n)=>{"use strict";n.d(t,{_:()=>r,u:()=>c});var s=n(6540),a=n(9532),o=n(4848);const i=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(i.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(i);if(null===e)throw new a.dV("DocProvider");return e}},7293:(e,t,n)=>{"use strict";n.d(t,{A:()=>w});var s=n(6540),a=n(4848);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),i=n?.props.children;return{mdxAdmonitionTitle:i,rest:o.length>0?(0,a.jsx)(a.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var i=n(4164),r=n(1312),c=n(7559);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:s}=e;return(0,a.jsx)("div",{className:(0,i.A)(c.G.common.admonition,c.G.common.admonitionType(t),l.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,a.jsxs)("div",{className:l.admonitionHeading,children:[(0,a.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,a.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:o,className:i}=e;return(0,a.jsxs)(d,{type:t,className:i,children:[s||n?(0,a.jsx)(u,{title:s,icon:n}):null,(0,a.jsx)(m,{children:o})]})}function p(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,a.jsx)(p,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,a.jsx)(h,{...f,...e,className:(0,i.A)("alert alert--secondary",e.className),children:e.children})}function b(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,a.jsx)(b,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,a.jsx)(h,{...g,...e,className:(0,i.A)("alert alert--success",e.className),children:e.children})}function j(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,a.jsx)(j,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function A(e){return(0,a.jsx)(h,{...N,...e,className:(0,i.A)("alert alert--info",e.className),children:e.children})}function C(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const y={icon:(0,a.jsx)(C,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function k(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const L={icon:(0,a.jsx)(k,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const B={icon:(0,a.jsx)(C,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const _={...{note:x,tip:v,info:A,warning:function(e){return(0,a.jsx)(h,{...y,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,a.jsx)(h,{...L,...e,className:(0,i.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,a.jsx)(x,{title:"secondary",...e}),important:e=>(0,a.jsx)(A,{title:"important",...e}),success:e=>(0,a.jsx)(v,{title:"success",...e}),caution:function(e){return(0,a.jsx)(h,{...B,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})}}};function w(e){const t=o(e),n=(s=t.type,_[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),_.info));var s;return(0,a.jsx)(n,{...t})}},6896:(e,t,n)=>{"use strict";n.d(t,{A:()=>b});n(6540);var s=n(4164),a=n(1312),o=n(5260),i=n(4848);function r(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,i.jsx)(o.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n(7559),h=n(7293);function p(e){let{className:t}=e;return(0,i.jsx)(h.A,{type:"caution",title:(0,i.jsx)(d,{}),className:(0,s.A)(t,m.G.common.draftBanner),children:(0,i.jsx)(u,{})})}function f(e){let{className:t}=e;return(0,i.jsx)(h.A,{type:"caution",title:(0,i.jsx)(r,{}),className:(0,s.A)(t,m.G.common.unlistedBanner),children:(0,i.jsx)(c,{})})}function x(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{}),(0,i.jsx)(f,{...e})]})}function b(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,i.jsxs)(i.Fragment,{children:[(n||s.unlisted)&&(0,i.jsx)(x,{}),s.draft&&(0,i.jsx)(p,{})]})}},1243:(e,t,n)=>{"use strict";n.d(t,{A:()=>b});n(6540);var s=n(4164),a=n(7559),o=n(6972),i=n(9169),r=n(8774),c=n(1312),l=n(6025),d=n(4848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,l.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(r.A,{"aria-label":(0,c.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function f(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(r.A,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function x(e){let{children:t,active:n,index:a,addMicrodata:o}=e;return(0,d.jsxs)("li",{...o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function b(){const e=(0,o.OF)(),t=(0,i.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,c.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(f,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},252:(e,t,n)=>{"use strict";n.d(t,{A:()=>le});var s=n(6540),a=n(4164),o=n(7559),i=n(542),r=n(1107),c=n(8453),l=n(5260),d=n(2303),u=n(5293),m=n(6342);function h(){const{prism:e}=(0,m.p)(),{colorMode:t}=(0,u.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var p=n(8426),f=n.n(p);const x=/title=(?<quote>["'])(?<title>.*?)\1/,b=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},v={...g,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},j=Object.keys(g);function N(e,t){const n=e.map((e=>{const{start:n,end:s}=v[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function A(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&b.test(o)){const e=o.match(b).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=f()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return N(["js","jsBlock"],t);case"jsx":case"tsx":return N(["js","jsBlock","jsx"],t);case"html":return N(["js","jsBlock","html"],t);case"python":case"py":case"bash":return N(["bash"],t);case"markdown":case"md":return N(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return N(["tex"],t);case"lua":case"haskell":case"sql":return N(["lua"],t);case"wasm":return N(["wasm"],t);case"vb":case"vba":case"visual-basic":return N(["vb","rem"],t);case"vbnet":return N(["vbnet","rem"],t);case"batch":return N(["rem"],t);case"basic":return N(["rem","f90"],t);case"fsharp":return N(["js","ml"],t);case"ocaml":case"sml":return N(["ml"],t);case"fortran":return N(["f90"],t);case"cobol":return N(["cobol"],t);default:return N(j,t)}}(s,a),r=n.split("\n"),c=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<r.length;){const e=r[h].match(i);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?c[l[t]].range+=`${h},`:d[t]?c[d[t]].start=h:u[t]&&(c[u[t]].range+=`${c[u[t]].start}-${h-1},`),r.splice(h,1)}n=r.join("\n");const m={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;f()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const C={codeBlockContainer:"codeBlockContainer_Ckt0"};var y=n(4848);function k(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(h());return(0,y.jsx)(t,{...n,style:s,className:(0,a.A)(n.className,C.codeBlockContainer,o.G.common.codeBlock)})}const L={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function B(e){let{children:t,className:n}=e;return(0,y.jsx)(k,{as:"pre",tabIndex:0,className:(0,a.A)(L.codeBlockStandalone,"thin-scrollbar",n),children:(0,y.jsx)("code",{className:L.codeBlockLines,children:t})})}var _=n(9532);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function T(e,t){const[n,a]=(0,s.useState)(),o=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=w);const a=(0,_._q)(t),o=(0,_.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var E=n(1765);const H={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function M(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:i}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const r=o({line:t,className:(0,a.A)(n,s&&H.codeLine)}),c=t.map(((e,t)=>(0,y.jsx)("span",{...i({token:e})},t)));return(0,y.jsxs)("span",{...r,children:[s?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{className:H.codeLineNumber}),(0,y.jsx)("span",{className:H.codeLineContent,children:c})]}):c,(0,y.jsx)("br",{})]})}var S=n(1312);function I(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function U(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const V={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function R(e){let{code:t,className:n}=e;const[o,i]=(0,s.useState)(!1),r=(0,s.useRef)(void 0),c=(0,s.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),s=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection(),o=a.rangeCount>0&&a.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),s&&s.focus()}(t),i(!0),r.current=window.setTimeout((()=>{i(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),(0,y.jsx)("button",{type:"button","aria-label":o?(0,S.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,S.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,S.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.A)("clean-btn",n,V.copyButton,o&&V.copyButtonCopied),onClick:c,children:(0,y.jsxs)("span",{className:V.copyButtonIcons,"aria-hidden":"true",children:[(0,y.jsx)(I,{className:V.copyButtonIcon}),(0,y.jsx)(U,{className:V.copyButtonSuccessIcon})]})})}function z(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const O={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function P(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,S.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,y.jsx)("button",{type:"button",onClick:n,className:(0,a.A)("clean-btn",t,s&&O.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,y.jsx)(z,{className:O.wordWrapButtonIcon,"aria-hidden":"true"})})}function G(e){let{children:t,className:n="",metastring:o,title:i,showLineNumbers:r,language:c}=e;const{prism:{defaultLanguage:l,magicComments:d}}=(0,m.p)(),u=function(e){return e?.toLowerCase()}(c??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??l),p=h(),f=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),r=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return T(o,r),(0,s.useEffect)((()=>{r()}),[e,r]),(0,s.useEffect)((()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)})),[r]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}(),b=function(e){return e?.match(x)?.groups.title??""}(o)||i,{lineClassNames:g,code:v}=A(t,{metastring:o,language:u,magicComments:d}),j=r??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,y.jsxs)(k,{as:"div",className:(0,a.A)(n,u&&!n.includes(`language-${u}`)&&`language-${u}`),children:[b&&(0,y.jsx)("div",{className:L.codeBlockTitle,children:b}),(0,y.jsxs)("div",{className:L.codeBlockContent,children:[(0,y.jsx)(E.f4,{theme:p,code:v,language:u??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:i}=e;return(0,y.jsx)("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,a.A)(t,L.codeBlock,"thin-scrollbar"),style:n,children:(0,y.jsx)("code",{className:(0,a.A)(L.codeBlockLines,j&&L.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,y.jsx)(M,{line:e,getLineProps:o,getTokenProps:i,classNames:g[t],showLineNumbers:j},t)))})})}}),(0,y.jsxs)("div",{className:L.buttonGroup,children:[(f.isEnabled||f.isCodeScrollable)&&(0,y.jsx)(P,{className:L.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),(0,y.jsx)(R,{className:L.codeButton,code:v})]})]})]})}function D(e){let{children:t,...n}=e;const a=(0,d.A)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof o?G:B;return(0,y.jsx)(i,{...n,children:o},String(a))}function W(e){return(0,y.jsx)("code",{...e})}var $=n(8774);var F=n(3427),q=n(1422);const Z={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function J(e){return!!e&&("SUMMARY"===e.tagName||J(e.parentElement))}function Y(e,t){return!!e&&(e===t||Y(e.parentElement,t))}function K(e){let{summary:t,children:n,...o}=e;(0,F.A)().collectAnchor(o.id);const i=(0,d.A)(),r=(0,s.useRef)(null),{collapsed:c,setCollapsed:l}=(0,q.u)({initialState:!o.open}),[u,m]=(0,s.useState)(o.open),h=s.isValidElement(t)?t:(0,y.jsx)("summary",{children:t??"Details"});return(0,y.jsxs)("details",{...o,ref:r,open:u,"data-collapsed":c,className:(0,a.A)(Z.details,i&&Z.isBrowser,o.className),onMouseDown:e=>{J(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;J(t)&&Y(t,r.current)&&(e.preventDefault(),c?(l(!1),m(!0)):l(!0))},children:[h,(0,y.jsx)(q.N,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{l(e),m(!e)},children:(0,y.jsx)("div",{className:Z.collapsibleContent,children:n})})]})}const Q={details:"details_b_Ee"},X="alert alert--info";function ee(e){let{...t}=e;return(0,y.jsx)(K,{...t,className:(0,a.A)(X,Q.details,t.className)})}function te(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,y.jsx)(y.Fragment,{children:t.filter((e=>e!==n))});return(0,y.jsx)(ee,{...e,summary:n,children:a})}function ne(e){return(0,y.jsx)(r.A,{...e})}const se={containsTaskList:"containsTaskList_mC6p"};function ae(e){if(void 0!==e)return(0,a.A)(e,e?.includes("contains-task-list")&&se.containsTaskList)}const oe={img:"img_ev3q"};var ie=n(7293);const re={Head:l.A,details:te,Details:te,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,y.jsx)(W,{...e}):(0,y.jsx)(D,{...e})},a:function(e){return(0,y.jsx)($.A,{...e})},pre:function(e){return(0,y.jsx)(y.Fragment,{children:e.children})},ul:function(e){return(0,y.jsx)("ul",{...e,className:ae(e.className)})},li:function(e){return(0,F.A)().collectAnchor(e.id),(0,y.jsx)("li",{...e})},img:function(e){return(0,y.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,a.A)(t,oe.img))});var t},h1:e=>(0,y.jsx)(ne,{as:"h1",...e}),h2:e=>(0,y.jsx)(ne,{as:"h2",...e}),h3:e=>(0,y.jsx)(ne,{as:"h3",...e}),h4:e=>(0,y.jsx)(ne,{as:"h4",...e}),h5:e=>(0,y.jsx)(ne,{as:"h5",...e}),h6:e=>(0,y.jsx)(ne,{as:"h6",...e}),admonition:ie.A,mermaid:()=>null};function ce(e){let{children:t}=e;return(0,y.jsx)(c.x,{components:re,children:t})}function le(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,i.u)();return t.hide_title||void 0!==n?null:e.title}();return(0,y.jsxs)("div",{className:(0,a.A)(o.G.docs.docMarkdown,"markdown"),children:[n&&(0,y.jsx)("header",{children:(0,y.jsx)(r.A,{as:"h1",children:n})}),(0,y.jsx)(ce,{children:t})]})}},9446:(e,t,n)=>{"use strict";n.d(t,{A:()=>C});n(6540);var s=n(4164),a=n(7559),o=n(542),i=n(1312),r=n(8774);const c={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=n(4848);function d(e){let{permalink:t,label:n,count:a,description:o}=e;return(0,l.jsxs)(r.A,{href:t,title:o,className:(0,s.A)(c.tag,a?c.tagWithCount:c.tagRegular),children:[n,a&&(0,l.jsx)("span",{children:a})]})}const u={tags:"tags_jXut",tag:"tag_QGVx"};function m(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(i.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.A)(u.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:u.tag,children:(0,l.jsx)(d,{...e})},e.permalink)))})]})}const h={iconEdit:"iconEdit_Z9Sw"};function p(e){let{className:t,...n}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(h.iconEdit,t),"aria-hidden":"true",...n,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function f(e){let{editUrl:t}=e;return(0,l.jsxs)(r.A,{to:t,className:a.G.common.editThisPage,children:[(0,l.jsx)(p,{}),(0,l.jsx)(i.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var x=n(4586);function b(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,x.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,x.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function g(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=b({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,l.jsx)(i.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function v(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(i.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function j(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,l.jsxs)("span",{className:a.G.common.lastUpdated,children:[(0,l.jsx)(i.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,l.jsx)(g,{lastUpdatedAt:t}):"",byUser:n?(0,l.jsx)(v,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const N={lastUpdated:"lastUpdated_JAkA"};function A(e){let{className:t,editUrl:n,lastUpdatedAt:a,lastUpdatedBy:o}=e;return(0,l.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,l.jsx)("div",{className:"col",children:n&&(0,l.jsx)(f,{editUrl:n})}),(0,l.jsx)("div",{className:(0,s.A)("col",N.lastUpdated),children:(a||o)&&(0,l.jsx)(j,{lastUpdatedAt:a,lastUpdatedBy:o})})]})}function C(){const{metadata:e}=(0,o.u)(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,tags:r}=e,c=r.length>0,d=!!(t||n||i);return c||d?(0,l.jsxs)("footer",{className:(0,s.A)(a.G.docs.docFooter,"docusaurus-mt-lg"),children:[c&&(0,l.jsx)("div",{className:(0,s.A)("row margin-top--sm",a.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(m,{tags:r})})}),d&&(0,l.jsx)(A,{className:(0,s.A)("margin-top--sm",a.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i})]}):null}},3679:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(6540);var s=n(542),a=n(6929),o=n(4848);function i(){const{metadata:e}=(0,s.u)();return(0,o.jsx)(a.A,{previous:e.previous,next:e.next})}},206:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});n(6540);var s=n(7559),a=n(542),o=n(4164),i=n(5195);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var c=n(4848);const l="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){let{className:t,...n}=e;return(0,c.jsx)("div",{className:(0,o.A)(r.tableOfContents,"thin-scrollbar",t),children:(0,c.jsx)(i.A,{...n,linkClassName:l,linkActiveClassName:d})})}function m(){const{toc:e,frontMatter:t}=(0,a.u)();return(0,c.jsx)(u,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:s.G.docs.docTocDesktop})}},1683:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});n(6540);var s=n(4164),a=n(7559),o=n(542),i=n(1422),r=n(5195),c=n(1312);const l={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var d=n(4848);function u(e){let{collapsed:t,...n}=e;return(0,d.jsx)("button",{type:"button",...n,className:(0,s.A)("clean-btn",l.tocCollapsibleButton,!t&&l.tocCollapsibleButtonExpanded,n.className),children:(0,d.jsx)(c.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const m={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function h(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:o}=e;const{collapsed:c,toggleCollapsed:l}=(0,i.u)({initialState:!0});return(0,d.jsxs)("div",{className:(0,s.A)(m.tocCollapsible,!c&&m.tocCollapsibleExpanded,n),children:[(0,d.jsx)(u,{collapsed:c,onClick:l}),(0,d.jsx)(i.N,{lazy:!0,className:m.tocCollapsibleContent,collapsed:c,children:(0,d.jsx)(r.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:o})})]})}const p={tocMobile:"tocMobile_ITEo"};function f(){const{toc:e,frontMatter:t}=(0,o.u)();return(0,d.jsx)(h,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,s.A)(a.G.docs.docTocMobile,p.tocMobile)})}},9158:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});n(6540);var s=n(1003),a=n(542),o=n(4848);function i(){const{metadata:e,frontMatter:t,assets:n}=(0,a.u)();return(0,o.jsx)(s.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var r=n(2254);function c(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(a._,{content:e.content,children:(0,o.jsxs)(s.e3,{className:t,children:[(0,o.jsx)(i,{}),(0,o.jsx)(r.A,{children:(0,o.jsx)(n,{})})]})})}},6929:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(6540);var s=n(1312),a=n(4164),o=n(8774),i=n(4848);function r(e){const{permalink:t,title:n,subLabel:s,isNext:r}=e;return(0,i.jsxs)(o.A,{className:(0,a.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}function c(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(r,{...t,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(r,{...n,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(6540);var s=n(4164),a=n(1312),o=n(7559),i=n(3025),r=n(4848);function c(e){let{className:t}=e;const n=(0,i.r)();return n.badge?(0,r.jsx)("span",{className:(0,s.A)(t,o.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},1878:(e,t,n)=>{"use strict";n.d(t,{A:()=>x});n(6540);var s=n(4164),a=n(4586),o=n(8774),i=n(1312),r=n(8295),c=n(7559),l=n(3886),d=n(3025),u=n(4848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(o.A,{to:n,onClick:s,children:(0,u.jsx)(i.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function f(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,a.A)(),{pluginId:i}=(0,r.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,l.g1)(i),{latestDocSuggestion:m,latestVersionSuggestion:f}=(0,r.HW)(i),x=m??(b=f).docs.find((e=>e.id===b.mainDocId));var b;return(0,u.jsxs)("div",{className:(0,s.A)(t,c.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:o,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(p,{versionLabel:f.label,to:x.path,onClick:()=>d(f.name)})})]})}function x(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(f,{className:t,versionMetadata:n}):null}},5195:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var s=n(6540),a=n(6342);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>r(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function l(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=l();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),l=c(r,{anchorTopOffset:n.current}),d=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var u=n(8774),m=n(4848);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const p=s.memo(h);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:l,maxHeadingLevel:u,...h}=e;const f=(0,a.p)(),x=l??f.tableOfContents.minHeadingLevel,b=u??f.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:x,maxHeadingLevel:b});return d((0,s.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:x,maxHeadingLevel:b}}),[r,c,x,b])),(0,m.jsx)(p,{toc:g,className:n,linkClassName:r,...h})}},8426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>i,x:()=>r});var s=n(6540);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);