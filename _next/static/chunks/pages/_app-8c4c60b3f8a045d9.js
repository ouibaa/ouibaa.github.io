(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(150)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,o=r(2648).Z,i=r(1598).Z,a=r(7273).Z,l=i(r(7294)),c=o(r(3121)),s=r(2675),u=r(139),f=r(8730);r(7238);var d=o(r(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,o,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentNode){if(null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,a=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>a,persist(){},preventDefault(){i=!0,t.preventDefault()},stopPropagation(){a=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:o,widthInt:i,qualityInt:c,className:s,imgStyle:u,blurStyle:f,isLazy:d,fill:p,placeholder:h,loading:g,srcString:v,config:b,unoptimized:y,loader:w,onLoadRef:j,onLoadingCompleteRef:x,onLoad:C,onError:_}=e,E=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return g=d?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},E,r,{width:i,height:o,decoding:"async","data-nimg":p?"fill":"1",className:s,loading:g,style:n({},u,f),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&m(e,v,j,x,y))},[v,j,x,_,y,t]),onLoad(e){let t=e.currentTarget;m(t,v,j,x,y)},onError(e){let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===h&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),_&&_(e)}})))}),b=l.forwardRef((e,t)=>{let r,o;var i,{src:m,sizes:b,unoptimized:y=!1,priority:w=!1,loading:j,className:x,quality:C,width:_,height:E,fill:z,style:O,onLoad:k,onLoadingComplete:S,placeholder:P="empty",blurDataURL:M,layout:I,objectFit:R,objectPosition:N,lazyBoundary:A,lazyRoot:L}=e,T=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=l.useContext(f.ImageConfigContext),D=l.useMemo(()=>{let e=p||B||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[B]),V=T,q=V.loader||d.default;if(delete V.loader,"__next_img_default"in q){if("custom"===D.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let U=q;q=e=>{let{config:t}=e,r=a(e,["config"]);return U(r)}}if(I){"fill"===I&&(z=!0);let W={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];W&&(O=n({},O,W));let F={responsive:"100vw",fill:"100vw"}[I];F&&!b&&(b=F)}let H="",Z=g(_),G=g(E);if("object"==typeof(i=m)&&(h(i)||void 0!==i.src)){let K=h(m)?m.default:m;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(!K.height||!K.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)));if(r=K.blurWidth,o=K.blurHeight,M=M||K.blurDataURL,H=K.src,!z){if(Z||G){if(Z&&!G){let J=Z/K.width;G=Math.round(K.height*J)}else if(!Z&&G){let X=G/K.height;Z=Math.round(K.width*X)}}else Z=K.width,G=K.height}}let $=!w&&("lazy"===j||void 0===j);((m="string"==typeof m?m:H).startsWith("data:")||m.startsWith("blob:"))&&(y=!0,$=!1),D.unoptimized&&(y=!0);let Q=g(C),Y=Object.assign(z?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:N}:{},{color:"transparent"},O),ee="blur"===P&&M?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:Z,heightInt:G,blurWidth:r,blurHeight:o,blurDataURL:M}),'")')}:{},et=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:c,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let i=/(^|\s)(1?\d?\d)vw/g,a=[];for(let l;l=i.exec(r);l)a.push(parseInt(l[2]));if(a.length){let c=.01*Math.min(...a);return{widths:o.filter(e=>e>=n[0]*c),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let s=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:s,kind:"x"}}(t,o,a),u=c.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:c.map((e,n)=>"".concat(l({config:t,src:r,quality:i,width:e})," ").concat("w"===s?e:n+1).concat(s)).join(", "),src:l({config:t,src:r,quality:i,width:c[u]})}}({config:D,src:m,unoptimized:y,width:Z,quality:Q,sizes:b,loader:q}),er=m,en={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:V.crossOrigin},eo=l.useRef(k);l.useEffect(()=>{eo.current=k},[k]);let ei=l.useRef(S);l.useEffect(()=>{ei.current=S},[S]);let ea=n({isLazy:$,imgAttributes:et,heightInt:G,widthInt:Z,qualityInt:Q,className:x,imgStyle:Y,blurStyle:ee,loading:j,config:D,fill:z,unoptimized:y,placeholder:P,loader:q,srcString:er,onLoadRef:eo,onLoadingCompleteRef:ei},V);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},ea,{ref:t})),w?l.default.createElement(c.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},en))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,o=r(7273).Z,i=n(r(7294)),a=r(1003),l=r(7795),c=r(4465),s=r(2692),u=r(8245),f=r(9246),d=r(227),p=r(3468);let h=new Set;function g(e,t,r,n){if(a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(h.has(i))return;h.add(i)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:l.formatUrl(e)}let v=i.default.forwardRef(function(e,t){let r,n;let{href:l,as:h,children:v,prefetch:b,passHref:y,replace:w,shallow:j,scroll:x,locale:C,onClick:_,onMouseEnter:E,onTouchStart:z,legacyBehavior:O=!1}=e,k=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=v,O&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));let S=!1!==b,P=i.default.useContext(s.RouterContext),M=i.default.useContext(u.AppRouterContext),I=null!=P?P:M,R=!P,{href:N,as:A}=i.default.useMemo(()=>{if(!P){let e=m(l);return{href:e,as:h?m(h):e}}let[t,r]=a.resolveHref(P,l,!0);return{href:t,as:h?a.resolveHref(P,h):r||t}},[P,l,h]),L=i.default.useRef(N),T=i.default.useRef(A);O&&(n=i.default.Children.only(r));let B=O?n&&"object"==typeof n&&n.ref:t,[D,V,q]=f.useIntersection({rootMargin:"200px"}),U=i.default.useCallback(e=>{(T.current!==A||L.current!==N)&&(q(),T.current=A,L.current=N),D(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[A,B,N,q,D]);i.default.useEffect(()=>{I&&V&&S&&g(I,N,A,{locale:C})},[A,N,V,C,S,null==P?void 0:P.locale,I]);let W={ref:U,onClick(e){O||"function"!=typeof _||_(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,n,o,l,c,s,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:s,scroll:c}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};u?i.default.startTransition(h):h()}(e,I,N,A,w,j,x,C,R,S)},onMouseEnter(e){O||"function"!=typeof E||E(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&(S||!R)&&g(I,N,A,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){O||"function"!=typeof z||z(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&(S||!R)&&g(I,N,A,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!O||y||"a"===n.type&&!("href"in n.props)){let F=void 0!==C?C:null==P?void 0:P.locale,H=(null==P?void 0:P.isLocaleDomain)&&d.getDomainLocale(A,F,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);W.href=H||p.addBasePath(c.addLocale(A,F,null==P?void 0:P.defaultLocale))}return O?i.default.cloneElement(n,W):i.default.createElement("a",Object.assign({},k,W),r)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:c}=e,s=c||!i,[u,f]=n.useState(!1),[d,p]=n.useState(null);n.useEffect(()=>{if(i){if(!s&&!u&&d&&d.tagName){let e=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},l.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let t=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&l.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!u){let n=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(n)}},[d,s,r,t,u]);let h=n.useCallback(()=>{f(!1)},[]);return[p,u,h]};var n=r(7294),o=r(4686);let i="function"==typeof IntersectionObserver,a=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i}=e,a=n||t,l=o||r,c=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},150:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(5893);r(7475),r(1535);var o=r(4298),i=r.n(o),a=r(5675),l=r.n(a),c=r(1664),s=r.n(c),u=r(7294),f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},d=u.createContext&&u.createContext(f),p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function g(e){return function(t){return u.createElement(m,p({attr:p({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return u.createElement(t.tag,p({key:r},t.attr),e(t.child))})}(e.child))}}function m(e){var t=function(t){var r,n=e.attr,o=e.size,i=e.title,a=h(e,["attr","size","title"]),l=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),u.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,a,{className:r,style:p(p({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&u.createElement("title",null,i),e.children)};return void 0!==d?u.createElement(d.Consumer,null,function(e){return t(e)}):t(f)}function v(e){return g({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}}]})(e)}function b(e){return g({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}}]})(e)}function y(e){return g({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}}]})(e)}function w(e){return g({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}}]})(e)}function j(){return(0,n.jsx)("div",{className:"navbar fixed-bottom bg-light",children:(0,n.jsxs)("div",{className:"container-fluid d-flex justify-content-around",children:[(0,n.jsx)(s(),{href:"https://instagram.com/wbrliu",children:(0,n.jsx)(b,{size:"45px",color:"black"})}),(0,n.jsx)(s(),{href:"https://github.com/ouibaa",children:(0,n.jsx)(v,{size:"45px",color:"black"})}),(0,n.jsx)(s(),{href:"https://www.linkedin.com/in/weber-liu-118985b9",children:(0,n.jsx)(y,{size:"45px",color:"black"})}),(0,n.jsx)(s(),{href:"https://twitter.com/weberwcliu",children:(0,n.jsx)(w,{size:"45px",color:"black"})}),(0,n.jsx)(s(),{href:"https://instagram.com/wbrliu",children:(0,n.jsx)(l(),{src:"/icons/orcid.svg",width:"45",height:"45",alt:"ORCid"})})]})})}function x(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",strategy:"beforeInteractive"}),(0,n.jsx)(i(),{src:"https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js",strategy:"beforeInteractive"}),(0,n.jsx)(i(),{src:"https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js",strategy:"beforeInteractive"}),(0,n.jsx)(t,{...r}),(0,n.jsx)(j,{})]})}},1535:function(){},7475:function(){},5675:function(e,t,r){e.exports=r(9749)},1664:function(e,t,r){e.exports=r(1551)},4298:function(e,t,r){e.exports=r(3573)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);