(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[376],{227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,o=n(2648).Z,l=n(1598).Z,a=n(7273).Z,i=l(n(7294)),u=o(n(3121)),s=n(2675),c=n(139),f=n(8730);n(7238);var d=o(n(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentNode){if(null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,a=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>a,persist(){},preventDefault(){l=!0,t.preventDefault()},stopPropagation(){a=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let v=i.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:o,widthInt:l,qualityInt:u,className:s,imgStyle:c,blurStyle:f,isLazy:d,fill:p,placeholder:g,loading:m,srcString:v,config:y,unoptimized:b,loader:w,onLoadRef:E,onLoadingCompleteRef:C,onLoad:S,onError:k}=e,P=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return m=d?"lazy":m,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",Object.assign({},P,n,{width:l,height:o,decoding:"async","data-nimg":p?"fill":"1",className:s,loading:m,style:r({},c,f),ref:i.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&h(e,v,E,C,b))},[v,E,C,k,b,t]),onLoad(e){let t=e.currentTarget;h(t,v,E,C,b)},onError(e){let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===g&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),k&&k(e)}})))}),y=i.forwardRef((e,t)=>{let n,o;var l,{src:h,sizes:y,unoptimized:b=!1,priority:w=!1,loading:E,className:C,quality:S,width:k,height:P,fill:j,style:O,onLoad:x,onLoadingComplete:I,placeholder:R="empty",blurDataURL:_,layout:M,objectFit:D,objectPosition:L,lazyBoundary:T,lazyRoot:N}=e,z=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let A=i.useContext(f.ImageConfigContext),B=i.useMemo(()=>{let e=p||A||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[A]),H=z,U=H.loader||d.default;if(delete H.loader,"__next_img_default"in U){if("custom"===B.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let F=U;U=e=>{let{config:t}=e,n=a(e,["config"]);return F(n)}}if(M){"fill"===M&&(j=!0);let $={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];$&&(O=r({},O,$));let W={responsive:"100vw",fill:"100vw"}[M];W&&!y&&(y=W)}let Z="",K=m(k),q=m(P);if("object"==typeof(l=h)&&(g(l)||void 0!==l.src)){let G=g(h)?h.default:h;if(!G.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(!G.height||!G.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)));if(n=G.blurWidth,o=G.blurHeight,_=_||G.blurDataURL,Z=G.src,!j){if(K||q){if(K&&!q){let V=K/G.width;q=Math.round(G.height*V)}else if(!K&&q){let J=q/G.height;K=Math.round(G.width*J)}}else K=G.width,q=G.height}}let Y=!w&&("lazy"===E||void 0===E);((h="string"==typeof h?h:Z).startsWith("data:")||h.startsWith("blob:"))&&(b=!0,Y=!1),B.unoptimized&&(b=!0);let Q=m(S),X=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:D,objectPosition:L}:{},{color:"transparent"},O),ee="blur"===R&&_?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:K,heightInt:q,blurWidth:n,blurHeight:o,blurDataURL:_}),'")')}:{},et=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:l,sizes:a,loader:i}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let l=/(^|\s)(1?\d?\d)vw/g,a=[];for(let i;i=l.exec(n);i)a.push(parseInt(i[2]));if(a.length){let u=.01*Math.min(...a);return{widths:o.filter(e=>e>=r[0]*u),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let s=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:s,kind:"x"}}(t,o,a),c=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,r)=>"".concat(i({config:t,src:n,quality:l,width:e})," ").concat("w"===s?e:r+1).concat(s)).join(", "),src:i({config:t,src:n,quality:l,width:u[c]})}}({config:B,src:h,unoptimized:b,width:K,quality:Q,sizes:y,loader:U}),en=h,er={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:H.crossOrigin},eo=i.useRef(x);i.useEffect(()=>{eo.current=x},[x]);let el=i.useRef(I);i.useEffect(()=>{el.current=I},[I]);let ea=r({isLazy:Y,imgAttributes:et,heightInt:q,widthInt:K,qualityInt:Q,className:C,imgStyle:X,blurStyle:ee,loading:E,config:B,fill:j,unoptimized:b,placeholder:R,loader:U,srcString:en,onLoadRef:eo,onLoadingCompleteRef:el},H);return i.default.createElement(i.default.Fragment,null,i.default.createElement(v,Object.assign({},ea,{ref:t})),w?i.default.createElement(u.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},er))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),a=n(1003),i=n(7795),u=n(4465),s=n(2692),c=n(8245),f=n(9246),d=n(227),p=n(3468);let g=new Set;function m(e,t,n,r){if(a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(g.has(l))return;g.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function h(e){return"string"==typeof e?e:i.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let n,r;let{href:i,as:g,children:v,prefetch:y,passHref:b,replace:w,shallow:E,scroll:C,locale:S,onClick:k,onMouseEnter:P,onTouchStart:j,legacyBehavior:O=!1}=e,x=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,O&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let I=!1!==y,R=l.default.useContext(s.RouterContext),_=l.default.useContext(c.AppRouterContext),M=null!=R?R:_,D=!R,{href:L,as:T}=l.default.useMemo(()=>{if(!R){let e=h(i);return{href:e,as:g?h(g):e}}let[t,n]=a.resolveHref(R,i,!0);return{href:t,as:g?a.resolveHref(R,g):n||t}},[R,i,g]),N=l.default.useRef(L),z=l.default.useRef(T);O&&(r=l.default.Children.only(n));let A=O?r&&"object"==typeof r&&r.ref:t,[B,H,U]=f.useIntersection({rootMargin:"200px"}),F=l.default.useCallback(e=>{(z.current!==T||N.current!==L)&&(U(),z.current=T,N.current=L),B(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[T,A,L,U,B]);l.default.useEffect(()=>{M&&H&&I&&m(M,L,T,{locale:S})},[T,L,H,S,I,null==R?void 0:R.locale,M]);let $={ref:F,onClick(e){O||"function"!=typeof k||k(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),M&&!e.defaultPrevented&&function(e,t,n,r,o,i,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:u}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};c?l.default.startTransition(g):g()}(e,M,L,T,w,E,C,S,D,I)},onMouseEnter(e){O||"function"!=typeof P||P(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),M&&(I||!D)&&m(M,L,T,{locale:S,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){O||"function"!=typeof j||j(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),M&&(I||!D)&&m(M,L,T,{locale:S,priority:!0,bypassPrefetchedCheck:!0})}};if(!O||b||"a"===r.type&&!("href"in r.props)){let W=void 0!==S?S:null==R?void 0:R.locale,Z=(null==R?void 0:R.isLocaleDomain)&&d.getDomainLocale(T,W,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);$.href=Z||p.addBasePath(u.addLocale(T,W,null==R?void 0:R.defaultLocale))}return O?l.default.cloneElement(r,$):l.default.createElement("a",Object.assign({},x,$),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:u}=e,s=u||!l,[c,f]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(l){if(!s&&!c&&d&&d.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},i.push(n),a.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(r);let t=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&i.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){let r=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(r)}},[d,s,n,t,c]);let g=r.useCallback(()=>{f(!1)},[]);return[p,c,g]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:l}=e,a=r||t,i=o||n,u=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&i?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(i,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)},1664:function(e,t,n){e.exports=n(1551)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function u(e){return function(t){return r.createElement(s,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var n,o=e.attr,l=e.size,u=e.title,s=i(e,["attr","size","title"]),c=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==l?r.createElement(l.Consumer,null,function(e){return t(e)}):t(o)}},3186:function(e,t,n){"use strict";n.d(t,{p:function(){return K}});var r,o,l,a,i,u,s,c=n(7294);function f(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,f),o}var d=((r=d||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),p=((o=p||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function g({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:a}){let i=h(t,e);if(l)return m(i,n,r,a);let u=null!=o?o:0;if(2&u){let{static:s=!1,...c}=i;if(s)return m(c,n,r,a)}if(1&u){let{unmount:d=!0,...p}=i;return f(d?0:1,{0:()=>null,1:()=>m({...p,hidden:!0,style:{display:"none"}},n,r,a)})}return m(i,n,r,a)}function m(e,t={},n,r){let{as:o=n,children:l,refName:a="ref",...i}=b(e,["unmount","static"]),u=void 0!==e.ref?{[a]:e.ref}:{},s="function"==typeof l?l(t):l;i.className&&"function"==typeof i.className&&(i.className=i.className(t));let f={};if(t){let d=!1,p=[];for(let[g,m]of Object.entries(t))"boolean"==typeof m&&(d=!0),!0===m&&p.push(g);d&&(f["data-headlessui-state"]=p.join(" "))}if(o===c.Fragment&&Object.keys(y(i)).length>0){if(!(0,c.isValidElement)(s)||Array.isArray(s)&&s.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));return(0,c.cloneElement)(s,Object.assign({},h(s.props,y(b(i,["ref"]))),f,u,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(s.ref,u.ref)))}return(0,c.createElement)(o,Object.assign({},b(i,["ref"]),o!==c.Fragment&&u,o!==c.Fragment&&f),s)}function h(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&"function"==typeof r[o]?(null!=n[o]||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let l in n)Object.assign(t,{[l](e,...t){for(let r of n[l]){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;r(e,...t)}}});return t}function v(e){var t;return Object.assign((0,c.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function y(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function b(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let w="undefined"==typeof window||"undefined"==typeof document,E=w?c.useEffect:c.useLayoutEffect,C=function(e){let t;let n=(t=(0,c.useRef)(e),E(()=>{t.current=e},[e]),t);return c.useCallback((...e)=>n.current(...e),[n])},S=Symbol();function k(...e){let t=(0,c.useRef)(e);(0,c.useEffect)(()=>{t.current=e},[e]);let n=C(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[S]))?void 0:n}let P={serverHandoffComplete:!1},j=0;function O(){return++j}let x=null!=(s=c.useId)?s:function(){let e=function(){let[e,t]=(0,c.useState)(P.serverHandoffComplete);return(0,c.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,c.useEffect)(()=>{!1===P.serverHandoffComplete&&(P.serverHandoffComplete=!0)},[]),e}(),[t,n]=c.useState(e?O:null);return E(()=>{null===t&&n(O())},[t]),null!=t?""+t:void 0};var I=((l=I||{}).Space=" ",l.Enter="Enter",l.Escape="Escape",l.Backspace="Backspace",l.Delete="Delete",l.ArrowLeft="ArrowLeft",l.ArrowUp="ArrowUp",l.ArrowRight="ArrowRight",l.ArrowDown="ArrowDown",l.Home="Home",l.End="End",l.PageUp="PageUp",l.PageDown="PageDown",l.Tab="Tab",l);let R=(0,c.createContext)(null);R.displayName="OpenClosedContext";var _=((a=_||{})[a.Open=0]="Open",a[a.Closed=1]="Closed",a);function M({value:e,children:t}){return c.createElement(R.Provider,{value:e},t)}function D(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var L=((i=L||{})[i.Open=0]="Open",i[i.Closed=1]="Closed",i),T=((u=T||{})[u.ToggleDisclosure=0]="ToggleDisclosure",u[u.CloseDisclosure=1]="CloseDisclosure",u[u.SetButtonId=2]="SetButtonId",u[u.SetPanelId=3]="SetPanelId",u[u.LinkPanel=4]="LinkPanel",u[u.UnlinkPanel=5]="UnlinkPanel",u);let N={0:e=>({...e,disclosureState:f(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},z=(0,c.createContext)(null);function A(e){let t=(0,c.useContext)(z);if(null===t){let n=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,A),n}return t}z.displayName="DisclosureContext";let B=(0,c.createContext)(null);B.displayName="DisclosureAPIContext";let H=(0,c.createContext)(null);function U(e,t){return f(t.type,N,e,t)}H.displayName="DisclosurePanelContext";let F=c.Fragment,$=v(function(e,t){let{defaultOpen:n=!1,...r}=e,o=(0,c.useRef)(null),l=k(t,function(e,t=!0){return Object.assign(e,{[S]:t})}(e=>{o.current=e},void 0===e.as||e.as===c.Fragment)),a=(0,c.useRef)(null),i=(0,c.useRef)(null),u=(0,c.useReducer)(U,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:i,panelRef:a,buttonId:null,panelId:null}),[{disclosureState:s,buttonId:d},p]=u,m=C(e=>{p({type:1});let t=w?null:o instanceof Node?o.ownerDocument:null!=o&&o.hasOwnProperty("current")&&o.current instanceof Node?o.current.ownerDocument:document;if(!t||!d)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(d):t.getElementById(d);null==n||n.focus()}),h=(0,c.useMemo)(()=>({close:m}),[m]),v=(0,c.useMemo)(()=>({open:0===s,close:m}),[s,m]);return c.createElement(z.Provider,{value:u},c.createElement(B.Provider,{value:h},c.createElement(M,{value:f(s,{0:_.Open,1:_.Closed})},g({ourProps:{ref:l},theirProps:r,slot:v,defaultTag:F,name:"Disclosure"}))))}),W=v(function(e,t){let n=x(),{id:r=`headlessui-disclosure-button-${n}`,...o}=e,[l,a]=A("Disclosure.Button"),i=(0,c.useContext)(H),u=null!==i&&i===l.panelId,s=(0,c.useRef)(null),f=k(s,t,u?null:l.buttonRef);(0,c.useEffect)(()=>{if(!u)return a({type:2,buttonId:r}),()=>{a({type:2,buttonId:null})}},[r,a,u]);let d=C(e=>{var t;if(u){if(1===l.disclosureState)return;switch(e.key){case I.Space:case I.Enter:e.preventDefault(),e.stopPropagation(),a({type:0}),null==(t=l.buttonRef.current)||t.focus()}}else switch(e.key){case I.Space:case I.Enter:e.preventDefault(),e.stopPropagation(),a({type:0})}}),p=C(e=>{e.key===I.Space&&e.preventDefault()}),m=C(t=>{var n;(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r})(t.currentTarget)||e.disabled||(u?(a({type:0}),null==(n=l.buttonRef.current)||n.focus()):a({type:0}))}),h=(0,c.useMemo)(()=>({open:0===l.disclosureState}),[l]),v=function(e,t){let[n,r]=(0,c.useState)(()=>D(e));return E(()=>{r(D(e))},[e.type,e.as]),E(()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,s);return g({ourProps:u?{ref:f,type:v,onKeyDown:d,onClick:m}:{ref:f,id:r,type:v,"aria-expanded":e.disabled?void 0:0===l.disclosureState,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:d,onKeyUp:p,onClick:m},theirProps:o,slot:h,defaultTag:"button",name:"Disclosure.Button"})}),Z=d.RenderStrategy|d.Static,K=Object.assign($,{Button:W,Panel:v(function(e,t){let n=x(),{id:r=`headlessui-disclosure-panel-${n}`,...o}=e,[l,a]=A("Disclosure.Panel"),{close:i}=function e(t){let n=(0,c.useContext)(B);if(null===n){let r=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return n}("Disclosure.Panel"),u=k(t,l.panelRef,e=>{a({type:e?4:5})});(0,c.useEffect)(()=>(a({type:3,panelId:r}),()=>{a({type:3,panelId:null})}),[r,a]);let s=(0,c.useContext)(R),f=null!==s?s===_.Open:0===l.disclosureState,d=(0,c.useMemo)(()=>({open:0===l.disclosureState,close:i}),[l,i]);return c.createElement(H.Provider,{value:l.panelId},g({ourProps:{ref:u,id:r},theirProps:o,slot:d,defaultTag:"div",features:Z,visible:f,name:"Disclosure.Panel"}))})})},3407:function(e,t,n){"use strict";var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});t.Z=o},1415:function(e,t,n){"use strict";var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});t.Z=o}}]);