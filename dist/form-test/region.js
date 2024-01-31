"use strict";(()=>{var nt=Object.create;var X=Object.defineProperty;var ot=Object.getOwnPropertyDescriptor;var it=Object.getOwnPropertyNames;var at=Object.getPrototypeOf,st=Object.prototype.hasOwnProperty;var lt=(d,s)=>()=>(s||d((s={exports:{}}).exports,s),s.exports);var ut=(d,s,b,g)=>{if(s&&typeof s=="object"||typeof s=="function")for(let y of it(s))!st.call(d,y)&&y!==b&&X(d,y,{get:()=>s[y],enumerable:!(g=ot(s,y))||g.enumerable});return d};var ct=(d,s,b)=>(b=d!=null?nt(at(d)):{},ut(s||!d||!d.__esModule?X(b,"default",{value:d,enumerable:!0}):b,d));var Y=lt((H,D)=>{var I,S;I=H,S=function(){"use strict";function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?d(Object(r),!0).forEach(function(n){g(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function b(t){return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(t)}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t){return function(e){if(Array.isArray(e))return E(e)}(t)||function(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}(t)||M(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function M(t,e){if(t){if(typeof t=="string")return E(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(t,e):void 0}}function E(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var z=function(t){return typeof t=="string"?document.querySelector(t):t()},C=function(t,e){var r=typeof t=="string"?document.createElement(t):t;for(var n in e){var o=e[n];if(n==="inside")o.append(r);else if(n==="dest")z(o[0]).insertAdjacentElement(o[1],r);else if(n==="around"){var i=o;i.parentNode.insertBefore(r,i),r.append(i),i.getAttribute("autofocus")!=null&&i.focus()}else n in r?r[n]=o:r.setAttribute(n,o)}return r},$=function(t,e){return t=String(t).toLowerCase(),e?t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").normalize("NFC"):t},q=function(t,e){return C("mark",s({innerHTML:t},typeof e=="string"&&{class:e})).outerHTML},w=function(t,e){e.input.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:e.feedback,cancelable:!0}))},N=function(t,e,r){var n=r||{},o=n.mode,i=n.diacritics,l=n.highlight,f=$(e,i);if(e=String(e),t=$(t,i),o==="loose"){var p=(t=t.replace(/ /g,"")).length,a=0,c=Array.from(e).map(function(h,m){return a<p&&f[m]===t[a]&&(h=l?q(h,l):h,a++),h}).join("");if(a===p)return c}else{var u=f.indexOf(t);if(~u)return t=e.substring(u,u+t.length),u=l?e.replace(t,q(t,l)):e}},B=function(t,e){return new Promise(function(r,n){var o;return(o=t.data).cache&&o.store?r():new Promise(function(i,l){return typeof o.src=="function"?o.src(e).then(i,l):i(o.src)}).then(function(i){try{return t.feedback=o.store=i,w("response",t),r()}catch(l){return n(l)}},n)})},tt=function(t,e){var r=e.data,n=e.searchEngine,o=[];r.store.forEach(function(l,f){var p=function(u){var h=u?l[u]:l,m=typeof n=="function"?n(t,h):N(t,h,{mode:n,diacritics:e.diacritics,highlight:e.resultItem.highlight});if(m){var x={match:m,value:l};u&&(x.key=u),o.push(x)}};if(r.keys){var a,c=function(u,h){var m=typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(!m){if(Array.isArray(u)||(m=M(u))||h&&u&&typeof u.length=="number"){m&&(u=m);var x=0,j=function(){};return{s:j,n:function(){return x>=u.length?{done:!0}:{done:!1,value:u[x++]}},e:function(v){throw v},f:j}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O,_=!0,L=!1;return{s:function(){m=m.call(u)},n:function(){var v=m.next();return _=v.done,v},e:function(v){L=!0,O=v},f:function(){try{_||m.return==null||m.return()}finally{if(L)throw O}}}}(r.keys);try{for(c.s();!(a=c.n()).done;)p(a.value)}catch(u){c.e(u)}finally{c.f()}}else p()}),r.filter&&(o=r.filter(o));var i=o.slice(0,e.resultsList.maxResults);e.feedback={query:t,matches:o,results:i},w("results",e)},F="aria-expanded",R="aria-activedescendant",U="aria-selected",J=function(t,e){t.feedback.selection=s({index:e},t.feedback.results[e])},G=function(t){t.isOpen||((t.wrapper||t.input).setAttribute(F,!0),t.list.removeAttribute("hidden"),t.isOpen=!0,w("open",t))},k=function(t){t.isOpen&&((t.wrapper||t.input).setAttribute(F,!1),t.input.setAttribute(R,""),t.list.setAttribute("hidden",""),t.isOpen=!1,w("close",t))},T=function(t,e){var r=e.resultItem,n=e.list.getElementsByTagName(r.tag),o=!!r.selected&&r.selected.split(" ");if(e.isOpen&&n.length){var i,l,f=e.cursor;t>=n.length&&(t=0),t<0&&(t=n.length-1),e.cursor=t,f>-1&&(n[f].removeAttribute(U),o&&(l=n[f].classList).remove.apply(l,y(o))),n[t].setAttribute(U,!0),o&&(i=n[t].classList).add.apply(i,y(o)),e.input.setAttribute(R,n[e.cursor].id),e.list.scrollTop=n[t].offsetTop-e.list.clientHeight+n[t].clientHeight+5,e.feedback.cursor=e.cursor,J(e,t),w("navigate",e)}},K=function(t){T(t.cursor+1,t)},Q=function(t){T(t.cursor-1,t)},A=function(t,e,r){(r=r>=0?r:t.cursor)<0||(t.feedback.event=e,J(t,r),w("selection",t),k(t))};function V(t,e){var r=this;return new Promise(function(n,o){var i,l;return i=e||((l=t.input)instanceof HTMLInputElement||l instanceof HTMLTextAreaElement?l.value:l.innerHTML),function(p,a,c){return a?a(p):p.length>=c}(i=t.query?t.query(i):i,t.trigger,t.threshold)?B(t,i).then(function(p){try{return t.feedback instanceof Error?n():(tt(i,t),t.resultsList&&function(a){var c=a.resultsList,u=a.list,h=a.resultItem,m=a.feedback,x=m.matches,j=m.results;if(a.cursor=-1,u.innerHTML="",x.length||c.noResults){var O=new DocumentFragment;j.forEach(function(_,L){var v=C(h.tag,s({id:"".concat(h.id,"_").concat(L),role:"option",innerHTML:_.match,inside:O},h.class&&{class:h.class}));h.element&&h.element(v,_)}),u.append(O),c.element&&c.element(u,m),G(a)}else k(a)}(t),f.call(r))}catch(a){return o(a)}},o):(k(t),f.call(r));function f(){return n()}})}var P=function(t,e){for(var r in t)for(var n in t[r])e(r,n)},et=function(t){var e,r,n,o=t.events,i=(e=function(){return V(t)},r=t.debounce,function(){clearTimeout(n),n=setTimeout(function(){return e()},r)}),l=t.events=s({input:s({},o&&o.input)},t.resultsList&&{list:o?s({},o.list):{}}),f={input:{input:function(){i()},keydown:function(p){(function(a,c){switch(a.keyCode){case 40:case 38:a.preventDefault(),a.keyCode===40?K(c):Q(c);break;case 13:c.submit||a.preventDefault(),c.cursor>=0&&A(c,a);break;case 9:c.resultsList.tabSelect&&c.cursor>=0&&A(c,a);break;case 27:c.input.value="",k(c)}})(p,t)},blur:function(){k(t)}},list:{mousedown:function(p){p.preventDefault()},click:function(p){(function(a,c){var u=c.resultItem.tag.toUpperCase(),h=Array.from(c.list.querySelectorAll(u)),m=a.target.closest(u);m&&m.nodeName===u&&A(c,a,h.indexOf(m))})(p,t)}}};P(f,function(p,a){(t.resultsList||a==="input")&&(l[p][a]||(l[p][a]=f[p][a]))}),P(l,function(p,a){t[p].addEventListener(a,l[p][a])})};function W(t){var e=this;return new Promise(function(r,n){var o,i,l;if(o=t.placeHolder,l={role:"combobox","aria-owns":(i=t.resultsList).id,"aria-haspopup":!0,"aria-expanded":!1},C(t.input,s(s({"aria-controls":i.id,"aria-autocomplete":"both"},o&&{placeholder:o}),!t.wrapper&&s({},l))),t.wrapper&&(t.wrapper=C("div",s({around:t.input,class:t.name+"_wrapper"},l))),i&&(t.list=C(i.tag,s({dest:[i.destination,i.position],id:i.id,role:"listbox",hidden:"hidden"},i.class&&{class:i.class}))),et(t),t.data.cache)return B(t).then(function(p){try{return f.call(e)}catch(a){return n(a)}},n);function f(){return w("init",t),r()}return f.call(e)})}function rt(t){var e=t.prototype;e.init=function(){W(this)},e.start=function(r){V(this,r)},e.unInit=function(){if(this.wrapper){var r=this.wrapper.parentNode;r.insertBefore(this.input,this.wrapper),r.removeChild(this.wrapper)}var n;P((n=this).events,function(o,i){n[o].removeEventListener(i,n.events[o][i])})},e.open=function(){G(this)},e.close=function(){k(this)},e.goTo=function(r){T(r,this)},e.next=function(){K(this)},e.previous=function(){Q(this)},e.select=function(r){A(this,null,r)},e.search=function(r,n,o){return N(r,n,o)}}return function t(e){this.options=e,this.id=t.instances=(t.instances||0)+1,this.name="autoComplete",this.wrapper=1,this.threshold=1,this.debounce=0,this.resultsList={position:"afterend",tag:"ul",maxResults:5},this.resultItem={tag:"li"},function(r){var n=r.name,o=r.options,i=r.resultsList,l=r.resultItem;for(var f in o)if(b(o[f])==="object")for(var p in r[f]||(r[f]={}),o[f])r[f][p]=o[f][p];else r[f]=o[f];r.selector=r.selector||"#"+n,i.destination=i.destination||r.selector,i.id=i.id||n+"_list_"+r.id,l.id=l.id||n+"_result",r.input=z(r.selector)}(this),rt.call(this,t),W(this)}},typeof H=="object"&&typeof D<"u"?D.exports=S():typeof define=="function"&&define.amd?define(S):(I=typeof globalThis<"u"?globalThis:I||self).autoComplete=S()});var Z=ct(Y(),1),pt=document.querySelector("select[number]"),ft=async function(){await(await(await fetch("https://restcountries.com/v3.1/all")).json()).forEach(b=>{let g=document.createElement("option");g.value=`name : ${b.name.common}`,g.text=`${b.name.common}`,pt.appendChild(g)})};ft();var dt=new Z.default({placeHolder:"Chercher une ville",data:{src:async d=>{try{return await(await fetch(`https://geo.api.gouv.fr/communes?nom=${d}&boost=population`)).json()}catch(s){return s}},keys:["nom"]},resultItem:{highlight:!0,element:(d,s)=>{d.style="display: flex; justify-content: space-between;",d.innerHTML=`
      <span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
        ${s.value.nom}
      </span>
      <span style="display: flex; align-items: center; font-size: 13px; font-weight: 100; text-transform: uppercase; color: rgba(0,0,0,.3);">
        ${s.value.codesPostaux[0]}
      </span>`}},events:{input:{selection:d=>{let s=d.detail.selection.value;dt.input.value=`${s.nom} (${s.codesPostaux[0]})`}}}});})();