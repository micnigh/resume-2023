(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[531],{9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,i=r(2648).Z,o=r(1598).Z,a=r(7273).Z,u=o(r(7294)),c=i(r(3121)),s=r(2675),l=r(139),f=r(8730);r(7238);var d=i(r(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/resume-2023/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,i,o,a,u){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let c="decode"in e?e.decode():Promise.resolve();c.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&a(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let u=!1,c=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>u,isPropagationStopped:()=>c,persist:()=>{},preventDefault:()=>{u=!0,t.preventDefault()},stopPropagation:()=>{c=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let y=u.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:i,widthInt:o,qualityInt:c,className:s,imgStyle:l,blurStyle:f,isLazy:d,fill:h,placeholder:m,loading:g,srcString:y,config:v,unoptimized:b,loader:w,onLoadRef:S,onLoadingCompleteRef:_,setBlurComplete:k,setShowAltText:z,onLoad:j,onError:E}=e,O=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=d?"lazy":g,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},O,r,{width:o,height:i,decoding:"async","data-nimg":h?"fill":"1",className:s,loading:g,style:n({},l,f),ref:u.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&p(e,y,m,S,_,k,b))},[y,m,S,_,k,E,b,t]),onLoad:e=>{let t=e.currentTarget;p(t,y,m,S,_,k,b)},onError:e=>{z(!0),"blur"===m&&k(!0),E&&E(e)}})))}),v=u.forwardRef((e,t)=>{let r,i;var o,{src:p,sizes:v,unoptimized:b=!1,priority:w=!1,loading:S,className:_,quality:k,width:z,height:j,fill:E,style:O,onLoad:A,onLoadingComplete:C,placeholder:x="empty",blurDataURL:I,layout:P,objectFit:R,objectPosition:V,lazyBoundary:M,lazyRoot:N}=e,D=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let L=u.useContext(f.ImageConfigContext),B=u.useMemo(()=>{let e=h||L||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[L]),W=D,F=W.loader||d.default;delete W.loader;let T="__next_img_default"in F;if(T){if("custom"===B.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let U=F;F=e=>{let{config:t}=e,r=a(e,["config"]);return U(r)}}if(P){"fill"===P&&(E=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];q&&(O=n({},O,q));let G={responsive:"100vw",fill:"100vw"}[P];G&&!v&&(v=G)}let Z="",J=g(z),H=g(j);if("object"==typeof(o=p)&&(m(o)||void 0!==o.src)){let K=m(p)?p.default:p;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(!K.height||!K.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)));if(r=K.blurWidth,i=K.blurHeight,I=I||K.blurDataURL,Z=K.src,!E){if(J||H){if(J&&!H){let Y=J/K.width;H=Math.round(K.height*Y)}else if(!J&&H){let $=H/K.height;J=Math.round(K.width*$)}}else J=K.width,H=K.height}}let Q=!w&&("lazy"===S||void 0===S);((p="string"==typeof p?p:Z).startsWith("data:")||p.startsWith("blob:"))&&(b=!0,Q=!1),B.unoptimized&&(b=!0),T&&p.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(b=!0);let[X,ee]=u.useState(!1),[et,er]=u.useState(!1),en=g(k),ei=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:V}:{},et?{}:{color:"transparent"},O),eo="blur"===x&&I&&!X?{backgroundSize:ei.objectFit||"cover",backgroundPosition:ei.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:J,heightInt:H,blurWidth:r,blurHeight:i,blurDataURL:I}),'")')}:{},ea=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:c,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let o=/(^|\s)(1?\d?\d)vw/g,a=[];for(let u;u=o.exec(r);u)a.push(parseInt(u[2]));if(a.length){let c=.01*Math.min(...a);return{widths:i.filter(e=>e>=n[0]*c),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let s=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:s,kind:"x"}}(t,i,a),l=c.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:c.map((e,n)=>"".concat(u({config:t,src:r,quality:o,width:e})," ").concat("w"===s?e:n+1).concat(s)).join(", "),src:u({config:t,src:r,quality:o,width:c[l]})}}({config:B,src:p,unoptimized:b,width:J,quality:en,sizes:v,loader:F}),eu=p,ec={imageSrcSet:ea.srcSet,imageSizes:ea.sizes,crossOrigin:W.crossOrigin},es=u.useRef(A);u.useEffect(()=>{es.current=A},[A]);let el=u.useRef(C);u.useEffect(()=>{el.current=C},[C]);let ef=n({isLazy:Q,imgAttributes:ea,heightInt:H,widthInt:J,qualityInt:en,className:_,imgStyle:ei,blurStyle:eo,loading:S,config:B,fill:E,unoptimized:b,placeholder:x,loader:F,srcString:eu,onLoadRef:es,onLoadingCompleteRef:el,setBlurComplete:ee,setShowAltText:er},W);return u.default.createElement(u.default.Fragment,null,u.default.createElement(y,Object.assign({},ef,{ref:t})),w?u.default.createElement(c.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},ec))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o}=e,a=n||t,u=i||r,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(u,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)},2677:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function u(e){return!!(e&&"function"==typeof e.hasOwnProperty&&(e.hasOwnProperty("__ownerID")||e._map&&e._map.hasOwnProperty("__ownerID")))}function c(e,t,r){return Object.keys(e).reduce(function(t,n){var i=""+n;return t.has(i)?t.set(i,r(t.get(i),e[i])):t},t)}r.d(t,{cY:function(){return _},fK:function(){return v}});var s=function(){function e(e,t,r){if(void 0===t&&(t={}),void 0===r&&(r={}),!e||"string"!=typeof e)throw Error("Expected a string key for Entity, but found "+e+".");var n=r,i=n.idAttribute,a=void 0===i?"id":i,c=n.mergeStrategy,s=void 0===c?function(e,t){return o({},e,t)}:c,l=n.processStrategy,f=void 0===l?function(e){return o({},e)}:l,d=n.fallbackStrategy;this._key=e,this._getId="function"==typeof a?a:function(e){return u(e)?e.get(a):e[a]},this._idAttribute=a,this._mergeStrategy=s,this._processStrategy=f,this._fallbackStrategy=void 0===d?function(e,t){}:d,this.define(t)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce(function(t,r){var n,i=e[r];return o({},t,((n={})[r]=i,n))},this.schema||{})},t.getId=function(e,t,r){return this._getId(e,t,r)},t.merge=function(e,t){return this._mergeStrategy(e,t)},t.fallback=function(e,t){return this._fallbackStrategy(e,t)},t.normalize=function(e,t,r,n,i,o){var a=this,u=this.getId(e,t,r),c=this.key;if(c in o||(o[c]={}),u in o[c]||(o[c][u]=[]),o[c][u].some(function(t){return t===e}))return u;o[c][u].push(e);var s=this._processStrategy(e,t,r);return Object.keys(this.schema).forEach(function(t){if(s.hasOwnProperty(t)&&"object"==typeof s[t]){var r=a.schema[t],u="function"==typeof r?r(e):r;s[t]=n(s[t],s,t,u,i,o)}}),i(this,s,e,t,r),u},t.denormalize=function(e,t){var r=this;return u(e)?c(this.schema,e,t):(Object.keys(this.schema).forEach(function(n){if(e.hasOwnProperty(n)){var i=r.schema[n];e[n]=t(e[n],i)}}),e)},i(e,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),e}(),l=function(){function e(e,t){t&&(this._schemaAttribute="string"==typeof t?function(e){return e[t]}:t),this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=e},t.getSchemaAttribute=function(e,t,r){return!this.isSingleSchema&&this._schemaAttribute(e,t,r)},t.inferSchema=function(e,t,r){if(this.isSingleSchema)return this.schema;var n=this.getSchemaAttribute(e,t,r);return this.schema[n]},t.normalizeValue=function(e,t,r,n,i,o){var a=this.inferSchema(e,t,r);if(!a)return e;var u=n(e,t,r,a,i,o);return this.isSingleSchema||null==u?u:{id:u,schema:this.getSchemaAttribute(e,t,r)}},t.denormalizeValue=function(e,t){var r=u(e)?e.get("schema"):e.schema;if(!this.isSingleSchema&&!r)return e;var n=this.isSingleSchema?void 0:u(e)?e.get("id"):e.id,i=this.isSingleSchema?this.schema:this.schema[r];return t(n||e,i)},i(e,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),e}(),f=function(e){function t(t,r){if(!r)throw Error('Expected option "schemaAttribute" not found on UnionSchema.');return e.call(this,t,r)||this}a(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,i,o){return this.normalizeValue(e,t,r,n,i,o)},r.denormalize=function(e,t){return this.denormalizeValue(e,t)},t}(l),d=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,i,a){var u=this;return Object.keys(e).reduce(function(t,r,c){var s,l=e[r];return null!=l?o({},t,((s={})[r]=u.normalizeValue(l,e,r,n,i,a),s)):t},{})},r.denormalize=function(e,t){var r=this;return Object.keys(e).reduce(function(n,i){var a,u=e[i];return o({},n,((a={})[i]=r.denormalizeValue(u,t),a))},{})},t}(l),h=function(e){if(Array.isArray(e)&&e.length>1)throw Error("Expected schema definition to be a single schema, but found "+e.length+".");return e[0]},m=function(e,t,r){return e=h(e),t&&t.map?t.map(function(t){return r(t,e)}):t},g=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,i,o){var a=this;return(Array.isArray(e)?e:Object.keys(e).map(function(t){return e[t]})).map(function(e,u){return a.normalizeValue(e,t,r,n,i,o)}).filter(function(e){return null!=e})},r.denormalize=function(e,t){var r=this;return e&&e.map?e.map(function(e){return r.denormalizeValue(e,t)}):e},t}(l),p=function(e,t,r,n,i,a,u){var c=o({},t);return Object.keys(e).forEach(function(r){var n=e[r],o="function"==typeof n?n(t):n,s=i(t[r],t,r,o,a,u);null==s?delete c[r]:c[r]=s}),c},y=function(e,t,r){if(u(t))return c(e,t,r);var n=o({},t);return Object.keys(e).forEach(function(t){null!=n[t]&&(n[t]=r(n[t],e[t]))}),n},v={Array:g,Entity:s,Object:function(){function e(e){this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce(function(t,r){var n,i=e[r];return o({},t,((n={})[r]=i,n))},this.schema||{})},t.normalize=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return p.apply(void 0,[this.schema].concat(t))},t.denormalize=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return y.apply(void 0,[this.schema].concat(t))},e}(),Union:f,Values:d},b=function(e,t,r,n,i){var a=n(e,t);if(void 0===a&&t instanceof s&&(a=t.fallback(e,t)),"object"!=typeof a||null===a)return a;if(i[t.key]||(i[t.key]={}),!i[t.key][e]){var c=u(a)?a:o({},a);i[t.key][e]=c,i[t.key][e]=t.denormalize(c,r)}return i[t.key][e]},w=function(e){var t={},r=S(e);return function e(n,i){return"object"!=typeof i||i.denormalize&&"function"==typeof i.denormalize?null==n?n:i instanceof s?b(n,i,e,r,t):i.denormalize(n,e):(Array.isArray(i)?m:y)(i,n,e)}},S=function(e){var t=u(e);return function(r,n){var i=n.key;return"object"==typeof r?r:t?e.getIn([i,r.toString()]):e[i]&&e[i][r]}},_=function(e,t,r){if(void 0!==e)return w(r)(e,t)}},1151:function(e,t,r){"use strict";r.d(t,{ah:function(){return o}});var n=r(7294);let i=n.createContext({});function o(e){let t=n.useContext(i);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}}}]);