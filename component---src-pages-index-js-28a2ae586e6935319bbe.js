"use strict";(self.webpackChunktealchoi=self.webpackChunktealchoi||[]).push([[678],{3204:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return b},P:function(){return E},S:function(){return A},_:function(){return s},a:function(){return l},b:function(){return c},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),i=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=s(e,u);return r.createElement(r.Fragment,null,r.createElement(m,l({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:o}=e,c=s(e,g);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=s(e,h);const o=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,l({},i,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var v;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=s(e,w);return t?r.createElement(y,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const b=function(e){return r.createElement(r.Fragment,null,r.createElement(y,l({},e)),r.createElement("noscript",null,r.createElement(y,l({},e,{shouldLoad:!0}))))};b.displayName="MainImage",b.propTypes=y.propTypes;const L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:L},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],x=new Set;let T,N;const I=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:d,class:u,onStartLoad:m,onLoad:p,onError:g}=e,h=s(e,S);const{width:f,height:y,layout:v}=n,w=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,y,v),{style:E,className:b}=w,L=s(w,k),C=(0,r.useRef)(),I=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const O=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,f,y);return(0,r.useEffect)((()=>{T||(T=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return N=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void x.add(I);if(N&&x.has(I))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;C.current&&(C.current.innerHTML=a(l({isLoading:!0,isLoaded:x.has(I),image:n},h)),x.has(I)||(t=requestAnimationFrame((()=>{C.current&&(r=s(C.current,I,x,i,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{x.has(I)&&N&&(C.current.innerHTML=N(l({isLoading:x.has(I),isLoaded:x.has(I),image:n},h)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},L,{style:l({},E,i,{backgroundColor:c}),className:b+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(I,e):null}));O.propTypes=C,O.displayName="GatsbyImage";const _=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),z={src:i().string.isRequired,alt:L,width:M,height:M,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(P=O,function(e){let{src:t,__imageData:a,__error:n}=e,i=s(e,_);return n&&console.warn(n),a?r.createElement(P,l({image:a},i)):(console.warn("Image not loaded",t),null)});var P;A.displayName="StaticImage",A.propTypes=z},8678:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{let{location:t,title:a,children:i}=e;const l="/"===t.pathname;let s;return s=l?r.createElement("h1",{className:"main-heading"},r.createElement(n.Link,{to:"/"},a)):r.createElement(n.Link,{className:"header-link-home",to:"/"},a),r.createElement("div",{className:"global-wrapper","data-is-root-path":l},r.createElement("header",{className:"global-header"},s),r.createElement("main",null,i),r.createElement("footer",null,"© ",(new Date).getFullYear(),", Teal Choi"))}},9357:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{var t,a,i;let{description:l,title:s,children:o}=e;const{site:c}=(0,n.useStaticQuery)("642825376"),d=l||c.siteMetadata.description,u=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?s+" | "+u:s),r.createElement("meta",{name:"description",content:d}),r.createElement("meta",{property:"og:title",content:s}),r.createElement("meta",{property:"og:description",content:d}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a||null===(i=a.social)||void 0===i?void 0:i.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:s}),r.createElement("meta",{name:"twitter:description",content:d}),o)}},3239:function(e,t,a){a.r(t),a.d(t,{Head:function(){return d},default:function(){return c}});var r=a(7294),n=a(1883),i=a(3723);var l=()=>{var e,t;const l=(0,n.useStaticQuery)("1935551786"),s=null===(e=l.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=l.site.siteMetadata)||void 0===t?void 0:t.social;return r.createElement("div",{className:"bio"},r.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(9430)}),(null==s?void 0:s.name)&&r.createElement("p",null,"Written by ",r.createElement("strong",null,s.name)," ",(null==s?void 0:s.summary)||null," ",r.createElement("a",{href:"https://instagram.com/"+((null==o?void 0:o.instagram)||"")},"Follow me on Instagram")))},s=a(8678),o=a(9357);var c=e=>{var t;let{data:a,location:i}=e;const o=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=a.allMarkdownRemark.nodes;return 0===c.length?r.createElement(s.Z,{location:i,title:o},r.createElement(l,null),r.createElement("p",{style:{fontWeight:"700"}},"Coming Soon :)")):r.createElement(s.Z,{location:i,title:o},r.createElement(l,null),r.createElement("ol",{style:{listStyle:"none"}},c.map((e=>{const t=e.frontmatter.title||e.fields.slug;return r.createElement("li",{key:e.fields.slug},r.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h2",null,r.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},r.createElement("span",{itemProp:"headline"},t))),r.createElement("small",null,e.frontmatter.date)),r.createElement("section",null,r.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const d=()=>r.createElement(o.Z,{title:"모든 글"})},9430:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#383828","images":{"fallback":{"src":"/static/400191486a03e709ec59b09709cfe310/e5610/profile-pic.png","srcSet":"/static/400191486a03e709ec59b09709cfe310/e5610/profile-pic.png 50w,\\n/static/400191486a03e709ec59b09709cfe310/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/400191486a03e709ec59b09709cfe310/d4bf4/profile-pic.avif 50w,\\n/static/400191486a03e709ec59b09709cfe310/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/400191486a03e709ec59b09709cfe310/3faea/profile-pic.webp 50w,\\n/static/400191486a03e709ec59b09709cfe310/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-28a2ae586e6935319bbe.js.map