"use strict";(()=>{var it=Object.create;var X=Object.defineProperty;var at=Object.getOwnPropertyDescriptor;var lt=Object.getOwnPropertyNames;var st=Object.getPrototypeOf,ut=Object.prototype.hasOwnProperty;var ct=(b,u)=>()=>(u||b((u={exports:{}}).exports,u),u.exports);var pt=(b,u,y,S)=>{if(u&&typeof u=="object"||typeof u=="function")for(let g of lt(u))!ut.call(b,g)&&g!==y&&X(b,g,{get:()=>u[g],enumerable:!(S=at(u,g))||S.enumerable});return b};var ft=(b,u,y)=>(y=b!=null?it(st(b)):{},pt(u||!b||!b.__esModule?X(y,"default",{value:b,enumerable:!0}):y,b));var Y=ct((M,z)=>{var B,q;B=M,q=function(){"use strict";function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?b(Object(r),!0).forEach(function(n){S(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function y(t){return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(t)}function S(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function g(t){return function(e){if(Array.isArray(e))return L(e)}(t)||function(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}(t)||C(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function C(t,e){if(t){if(typeof t=="string")return L(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(t,e):void 0}}function L(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var H=function(t){return typeof t=="string"?document.querySelector(t):t()},w=function(t,e){var r=typeof t=="string"?document.createElement(t):t;for(var n in e){var o=e[n];if(n==="inside")o.append(r);else if(n==="dest")H(o[0]).insertAdjacentElement(o[1],r);else if(n==="around"){var i=o;i.parentNode.insertBefore(r,i),r.append(i),i.getAttribute("autofocus")!=null&&i.focus()}else n in r?r[n]=o:r.setAttribute(n,o)}return r},h=function(t,e){return t=String(t).toLowerCase(),e?t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").normalize("NFC"):t},x=function(t,e){return w("mark",u({innerHTML:t},typeof e=="string"&&{class:e})).outerHTML},v=function(t,e){e.input.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:e.feedback,cancelable:!0}))},j=function(t,e,r){var n=r||{},o=n.mode,i=n.diacritics,l=n.highlight,f=h(e,i);if(e=String(e),t=h(t,i),o==="loose"){var p=(t=t.replace(/ /g,"")).length,a=0,c=Array.from(e).map(function(m,d){return a<p&&f[d]===t[a]&&(m=l?x(m,l):m,a++),m}).join("");if(a===p)return c}else{var s=f.indexOf(t);if(~s)return t=e.substring(s,s+t.length),s=l?e.replace(t,x(t,l)):e}},F=function(t,e){return new Promise(function(r,n){var o;return(o=t.data).cache&&o.store?r():new Promise(function(i,l){return typeof o.src=="function"?o.src(e).then(i,l):i(o.src)}).then(function(i){try{return t.feedback=o.store=i,v("response",t),r()}catch(l){return n(l)}},n)})},rt=function(t,e){var r=e.data,n=e.searchEngine,o=[];r.store.forEach(function(l,f){var p=function(s){var m=s?l[s]:l,d=typeof n=="function"?n(t,m):j(t,m,{mode:n,diacritics:e.diacritics,highlight:e.resultItem.highlight});if(d){var _={match:d,value:l};s&&(_.key=s),o.push(_)}};if(r.keys){var a,c=function(s,m){var d=typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(!d){if(Array.isArray(s)||(d=C(s))||m&&s&&typeof s.length=="number"){d&&(s=d);var _=0,I=function(){};return{s:I,n:function(){return _>=s.length?{done:!0}:{done:!1,value:s[_++]}},e:function(k){throw k},f:I}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O,E=!0,P=!1;return{s:function(){d=d.call(s)},n:function(){var k=d.next();return E=k.done,k},e:function(k){P=!0,O=k},f:function(){try{E||d.return==null||d.return()}finally{if(P)throw O}}}}(r.keys);try{for(c.s();!(a=c.n()).done;)p(a.value)}catch(s){c.e(s)}finally{c.f()}}else p()}),r.filter&&(o=r.filter(o));var i=o.slice(0,e.resultsList.maxResults);e.feedback={query:t,matches:o,results:i},v("results",e)},R="aria-expanded",U="aria-activedescendant",$="aria-selected",V=function(t,e){t.feedback.selection=u({index:e},t.feedback.results[e])},G=function(t){t.isOpen||((t.wrapper||t.input).setAttribute(R,!0),t.list.removeAttribute("hidden"),t.isOpen=!0,v("open",t))},A=function(t){t.isOpen&&((t.wrapper||t.input).setAttribute(R,!1),t.input.setAttribute(U,""),t.list.setAttribute("hidden",""),t.isOpen=!1,v("close",t))},D=function(t,e){var r=e.resultItem,n=e.list.getElementsByTagName(r.tag),o=!!r.selected&&r.selected.split(" ");if(e.isOpen&&n.length){var i,l,f=e.cursor;t>=n.length&&(t=0),t<0&&(t=n.length-1),e.cursor=t,f>-1&&(n[f].removeAttribute($),o&&(l=n[f].classList).remove.apply(l,g(o))),n[t].setAttribute($,!0),o&&(i=n[t].classList).add.apply(i,g(o)),e.input.setAttribute(U,n[e.cursor].id),e.list.scrollTop=n[t].offsetTop-e.list.clientHeight+n[t].clientHeight+5,e.feedback.cursor=e.cursor,V(e,t),v("navigate",e)}},J=function(t){D(t.cursor+1,t)},K=function(t){D(t.cursor-1,t)},T=function(t,e,r){(r=r>=0?r:t.cursor)<0||(t.feedback.event=e,V(t,r),v("selection",t),A(t))};function Q(t,e){var r=this;return new Promise(function(n,o){var i,l;return i=e||((l=t.input)instanceof HTMLInputElement||l instanceof HTMLTextAreaElement?l.value:l.innerHTML),function(p,a,c){return a?a(p):p.length>=c}(i=t.query?t.query(i):i,t.trigger,t.threshold)?F(t,i).then(function(p){try{return t.feedback instanceof Error?n():(rt(i,t),t.resultsList&&function(a){var c=a.resultsList,s=a.list,m=a.resultItem,d=a.feedback,_=d.matches,I=d.results;if(a.cursor=-1,s.innerHTML="",_.length||c.noResults){var O=new DocumentFragment;I.forEach(function(E,P){var k=w(m.tag,u({id:"".concat(m.id,"_").concat(P),role:"option",innerHTML:E.match,inside:O},m.class&&{class:m.class}));m.element&&m.element(k,E)}),s.append(O),c.element&&c.element(s,d),G(a)}else A(a)}(t),f.call(r))}catch(a){return o(a)}},o):(A(t),f.call(r));function f(){return n()}})}var N=function(t,e){for(var r in t)for(var n in t[r])e(r,n)},nt=function(t){var e,r,n,o=t.events,i=(e=function(){return Q(t)},r=t.debounce,function(){clearTimeout(n),n=setTimeout(function(){return e()},r)}),l=t.events=u({input:u({},o&&o.input)},t.resultsList&&{list:o?u({},o.list):{}}),f={input:{input:function(){i()},keydown:function(p){(function(a,c){switch(a.keyCode){case 40:case 38:a.preventDefault(),a.keyCode===40?J(c):K(c);break;case 13:c.submit||a.preventDefault(),c.cursor>=0&&T(c,a);break;case 9:c.resultsList.tabSelect&&c.cursor>=0&&T(c,a);break;case 27:c.input.value="",A(c)}})(p,t)},blur:function(){A(t)}},list:{mousedown:function(p){p.preventDefault()},click:function(p){(function(a,c){var s=c.resultItem.tag.toUpperCase(),m=Array.from(c.list.querySelectorAll(s)),d=a.target.closest(s);d&&d.nodeName===s&&T(c,a,m.indexOf(d))})(p,t)}}};N(f,function(p,a){(t.resultsList||a==="input")&&(l[p][a]||(l[p][a]=f[p][a]))}),N(l,function(p,a){t[p].addEventListener(a,l[p][a])})};function W(t){var e=this;return new Promise(function(r,n){var o,i,l;if(o=t.placeHolder,l={role:"combobox","aria-owns":(i=t.resultsList).id,"aria-haspopup":!0,"aria-expanded":!1},w(t.input,u(u({"aria-controls":i.id,"aria-autocomplete":"both"},o&&{placeholder:o}),!t.wrapper&&u({},l))),t.wrapper&&(t.wrapper=w("div",u({around:t.input,class:t.name+"_wrapper"},l))),i&&(t.list=w(i.tag,u({dest:[i.destination,i.position],id:i.id,role:"listbox",hidden:"hidden"},i.class&&{class:i.class}))),nt(t),t.data.cache)return F(t).then(function(p){try{return f.call(e)}catch(a){return n(a)}},n);function f(){return v("init",t),r()}return f.call(e)})}function ot(t){var e=t.prototype;e.init=function(){W(this)},e.start=function(r){Q(this,r)},e.unInit=function(){if(this.wrapper){var r=this.wrapper.parentNode;r.insertBefore(this.input,this.wrapper),r.removeChild(this.wrapper)}var n;N((n=this).events,function(o,i){n[o].removeEventListener(i,n.events[o][i])})},e.open=function(){G(this)},e.close=function(){A(this)},e.goTo=function(r){D(r,this)},e.next=function(){J(this)},e.previous=function(){K(this)},e.select=function(r){T(this,null,r)},e.search=function(r,n,o){return j(r,n,o)}}return function t(e){this.options=e,this.id=t.instances=(t.instances||0)+1,this.name="autoComplete",this.wrapper=1,this.threshold=1,this.debounce=0,this.resultsList={position:"afterend",tag:"ul",maxResults:5},this.resultItem={tag:"li"},function(r){var n=r.name,o=r.options,i=r.resultsList,l=r.resultItem;for(var f in o)if(y(o[f])==="object")for(var p in r[f]||(r[f]={}),o[f])r[f][p]=o[f][p];else r[f]=o[f];r.selector=r.selector||"#"+n,i.destination=i.destination||r.selector,i.id=i.id||n+"_list_"+r.id,l.id=l.id||n+"_result",r.input=H(r.selector)}(this),ot.call(this,t),W(this)}},typeof M=="object"&&typeof z<"u"?z.exports=q():typeof define=="function"&&define.amd?define(q):(B=typeof globalThis<"u"?globalThis:B||self).autoComplete=q()});var yt=ft(Y(),1);var Z=async b=>{try{let u=document.getElementById("ville"),y=document.getElementById("codepostal"),S=document.getElementById("numberStreet"),g=document.querySelector(".address_item"),C=g.parentNode;for(;C.children.length>1;)C.removeChild(C.lastChild);let w=(await(await fetch(`https://api-adresse.data.gouv.fr/search/?q=${b}`)).json()).features.map(h=>({label:h.properties.label,city:h.properties.city,postcode:h.properties.postcode,context:h.properties.context,numero:h.properties.housenumber,nom:h.properties.name}));return w.forEach(h=>{let x=g.cloneNode(!0),v=x.querySelector("[adress-label]"),j=x.querySelector("[adress-postal]");v.textContent=h.label,j.textContent=h.context,x.style.display="",x.addEventListener("click",()=>{u.value=h.city,y.value=h.postcode,S.value=h.nom,document.getElementById("autoComplete").value=h.label,document.querySelector(".adress_list").style.display="none"}),C.appendChild(x)}),g.style.display="none",w}catch(u){console.error("Error fetching or processing data:",u)}};var tt=document.getElementById("autoComplete"),et;document.querySelector(".adress_list").style.display="none";tt.addEventListener("input",function(){et=tt.value,Z(et),document.querySelector(".adress_list").style.display="flex"});})();
