(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=i=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,Oe=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Se=Symbol(),Le=new WeakMap;let et=class{constructor(e,s,r){if(this._$cssResult$=!0,r!==Se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(Oe&&e===void 0){const r=s!==void 0&&s.length===1;r&&(e=Le.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Le.set(s,e))}return e}toString(){return this.cssText}};const ct=i=>new et(typeof i=="string"?i:i+"",void 0,Se),S=(i,...e)=>{const s=i.length===1?i[0]:e.reduce((r,t,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+i[o+1],i[0]);return new et(s,i,Se)},pt=(i,e)=>{if(Oe)i.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const r=document.createElement("style"),t=k.litNonce;t!==void 0&&r.setAttribute("nonce",t),r.textContent=s.cssText,i.appendChild(r)}},qe=Oe?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let s="";for(const r of e.cssRules)s+=r.cssText;return ct(s)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ht,defineProperty:dt,getOwnPropertyDescriptor:ut,getOwnPropertyNames:bt,getOwnPropertySymbols:gt,getPrototypeOf:vt}=Object,_=globalThis,Ve=_.trustedTypes,yt=Ve?Ve.emptyScript:"",$e=_.reactiveElementPolyfillSupport,M=(i,e)=>i,ee={toAttribute(i,e){switch(e){case Boolean:i=i?yt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let s=i;switch(e){case Boolean:s=i!==null;break;case Number:s=i===null?null:Number(i);break;case Object:case Array:try{s=JSON.parse(i)}catch{s=null}}return s}},Ae=(i,e)=>!ht(i,e),We={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:Ae};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class j extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=We){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(e,s),!s.noAccessor){const r=Symbol(),t=this.getPropertyDescriptor(e,r,s);t!==void 0&&dt(this.prototype,e,t)}}static getPropertyDescriptor(e,s,r){const{get:t,set:o}=ut(this.prototype,e)??{get(){return this[s]},set(n){this[s]=n}};return{get(){return t==null?void 0:t.call(this)},set(n){const p=t==null?void 0:t.call(this);o.call(this,n),this.requestUpdate(e,p,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??We}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const e=vt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const s=this.properties,r=[...bt(s),...gt(s)];for(const t of r)this.createProperty(t,s[t])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[r,t]of s)this.elementProperties.set(r,t)}this._$Eh=new Map;for(const[s,r]of this.elementProperties){const t=this._$Eu(s,r);t!==void 0&&this._$Eh.set(t,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const t of r)s.unshift(qe(t))}else e!==void 0&&s.push(qe(e));return s}static _$Eu(e,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const r of s.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostDisconnected)==null?void 0:r.call(s)})}attributeChangedCallback(e,s,r){this._$AK(e,r)}_$EC(e,s){var o;const r=this.constructor.elementProperties.get(e),t=this.constructor._$Eu(e,r);if(t!==void 0&&r.reflect===!0){const n=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:ee).toAttribute(s,r.type);this._$Em=e,n==null?this.removeAttribute(t):this.setAttribute(t,n),this._$Em=null}}_$AK(e,s){var o;const r=this.constructor,t=r._$Eh.get(e);if(t!==void 0&&this._$Em!==t){const n=r.getPropertyOptions(t),p=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:ee;this._$Em=t,this[t]=p.fromAttribute(s,n.type),this._$Em=null}}requestUpdate(e,s,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Ae)(this[e],s))return;this.P(e,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,s,r){this._$AL.has(e)||this._$AL.set(e,s),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[o,n]of t)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(r=this._$EO)==null||r.forEach(t=>{var o;return(o=t.hostUpdate)==null?void 0:o.call(t)}),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(r=>{var t;return(t=r.hostUpdated)==null?void 0:t.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(e){}firstUpdated(e){}}j.elementStyles=[],j.shadowRootOptions={mode:"open"},j[M("elementProperties")]=new Map,j[M("finalized")]=new Map,$e==null||$e({ReactiveElement:j}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:Ae},ft=(i=mt,e,s)=>{const{kind:r,metadata:t}=s;let o=globalThis.litPropertyMetadata.get(t);if(o===void 0&&globalThis.litPropertyMetadata.set(t,o=new Map),o.set(s.name,i),r==="accessor"){const{name:n}=s;return{set(p){const c=e.get.call(this);e.set.call(this,p),this.requestUpdate(n,c,i)},init(p){return p!==void 0&&this.P(n,void 0,i),p}}}if(r==="setter"){const{name:n}=s;return function(p){const c=this[n];e.call(this,p),this.requestUpdate(n,c,i)}}throw Error("Unsupported decorator location: "+r)};function l(i){return(e,s)=>typeof s=="object"?ft(i,e,s):((r,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(t,o):void 0})(i,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tt(i){return l({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,te=L.trustedTypes,Ke=te?te.createPolicy("lit-html",{createHTML:i=>i}):void 0,st="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,rt="?"+$,$t=`<${rt}>`,O=document,q=()=>O.createComment(""),V=i=>i===null||typeof i!="object"&&typeof i!="function",Ee=Array.isArray,_t=i=>Ee(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",_e=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fe=/-->/g,Je=/>/g,C=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ge=/'/g,Ze=/"/g,it=/^(?:script|style|textarea|title)$/i,xt=i=>(e,...s)=>({_$litType$:i,strings:e,values:s}),a=xt(1),D=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Xe=new WeakMap,P=O.createTreeWalker(O,129);function ot(i,e){if(!Ee(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ke!==void 0?Ke.createHTML(e):e}const wt=(i,e)=>{const s=i.length-1,r=[];let t,o=e===2?"<svg>":e===3?"<math>":"",n=H;for(let p=0;p<s;p++){const c=i[p];let b,v,h=-1,m=0;for(;m<c.length&&(n.lastIndex=m,v=n.exec(c),v!==null);)m=n.lastIndex,n===H?v[1]==="!--"?n=Fe:v[1]!==void 0?n=Je:v[2]!==void 0?(it.test(v[2])&&(t=RegExp("</"+v[2],"g")),n=C):v[3]!==void 0&&(n=C):n===C?v[0]===">"?(n=t??H,h=-1):v[1]===void 0?h=-2:(h=n.lastIndex-v[2].length,b=v[1],n=v[3]===void 0?C:v[3]==='"'?Ze:Ge):n===Ze||n===Ge?n=C:n===Fe||n===Je?n=H:(n=C,t=void 0);const f=n===C&&i[p+1].startsWith("/>")?" ":"";o+=n===H?c+$t:h>=0?(r.push(b),c.slice(0,h)+st+c.slice(h)+$+f):c+$+(h===-2?p:f)}return[ot(i,o+(i[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class W{constructor({strings:e,_$litType$:s},r){let t;this.parts=[];let o=0,n=0;const p=e.length-1,c=this.parts,[b,v]=wt(e,s);if(this.el=W.createElement(b,r),P.currentNode=this.el.content,s===2||s===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(t=P.nextNode())!==null&&c.length<p;){if(t.nodeType===1){if(t.hasAttributes())for(const h of t.getAttributeNames())if(h.endsWith(st)){const m=v[n++],f=t.getAttribute(h).split($),Q=/([.?@])?(.*)/.exec(m);c.push({type:1,index:o,name:Q[2],strings:f,ctor:Q[1]==="."?Pt:Q[1]==="?"?Ot:Q[1]==="@"?St:ce}),t.removeAttribute(h)}else h.startsWith($)&&(c.push({type:6,index:o}),t.removeAttribute(h));if(it.test(t.tagName)){const h=t.textContent.split($),m=h.length-1;if(m>0){t.textContent=te?te.emptyScript:"";for(let f=0;f<m;f++)t.append(h[f],q()),P.nextNode(),c.push({type:2,index:++o});t.append(h[m],q())}}}else if(t.nodeType===8)if(t.data===rt)c.push({type:2,index:o});else{let h=-1;for(;(h=t.data.indexOf($,h+1))!==-1;)c.push({type:7,index:o}),h+=$.length-1}o++}}static createElement(e,s){const r=O.createElement("template");return r.innerHTML=e,r}}function R(i,e,s=i,r){var n,p;if(e===D)return e;let t=r!==void 0?(n=s._$Co)==null?void 0:n[r]:s._$Cl;const o=V(e)?void 0:e._$litDirective$;return(t==null?void 0:t.constructor)!==o&&((p=t==null?void 0:t._$AO)==null||p.call(t,!1),o===void 0?t=void 0:(t=new o(i),t._$AT(i,s,r)),r!==void 0?(s._$Co??(s._$Co=[]))[r]=t:s._$Cl=t),t!==void 0&&(e=R(i,t._$AS(i,e.values),t,r)),e}class Ct{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:r}=this._$AD,t=((e==null?void 0:e.creationScope)??O).importNode(s,!0);P.currentNode=t;let o=P.nextNode(),n=0,p=0,c=r[0];for(;c!==void 0;){if(n===c.index){let b;c.type===2?b=new Z(o,o.nextSibling,this,e):c.type===1?b=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(b=new At(o,this,e)),this._$AV.push(b),c=r[++p]}n!==(c==null?void 0:c.index)&&(o=P.nextNode(),n++)}return P.currentNode=O,t}p(e){let s=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,s),s+=r.strings.length-2):r._$AI(e[s])),s++}}class Z{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,r,t){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=t,this._$Cv=(t==null?void 0:t.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=R(this,e,s),V(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):_t(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&V(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){var o;const{values:s,_$litType$:r}=e,t=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=W.createElement(ot(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===t)this._$AH.p(s);else{const n=new Ct(t,this),p=n.u(this.options);n.p(s),this.T(p),this._$AH=n}}_$AC(e){let s=Xe.get(e.strings);return s===void 0&&Xe.set(e.strings,s=new W(e)),s}k(e){Ee(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,t=0;for(const o of e)t===s.length?s.push(r=new Z(this.O(q()),this.O(q()),this,this.options)):r=s[t],r._$AI(o),t++;t<s.length&&(this._$AR(r&&r._$AB.nextSibling,t),s.length=t)}_$AR(e=this._$AA.nextSibling,s){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,s);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class ce{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,r,t,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=s,this._$AM=t,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,s=this,r,t){const o=this.strings;let n=!1;if(o===void 0)e=R(this,e,s,0),n=!V(e)||e!==this._$AH&&e!==D,n&&(this._$AH=e);else{const p=e;let c,b;for(e=o[0],c=0;c<o.length-1;c++)b=R(this,p[r+c],s,c),b===D&&(b=this._$AH[c]),n||(n=!V(b)||b!==this._$AH[c]),b===g?e=g:e!==g&&(e+=(b??"")+o[c+1]),this._$AH[c]=b}n&&!t&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Pt extends ce{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class Ot extends ce{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class St extends ce{constructor(e,s,r,t,o){super(e,s,r,t,o),this.type=5}_$AI(e,s=this){if((e=R(this,e,s,0)??g)===D)return;const r=this._$AH,t=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==g&&(r===g||t);t&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class At{constructor(e,s,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const xe=L.litHtmlPolyfillSupport;xe==null||xe(W,Z),(L.litHtmlVersions??(L.litHtmlVersions=[])).push("3.2.1");const Et=(i,e,s)=>{const r=(s==null?void 0:s.renderBefore)??e;let t=r._$litPart$;if(t===void 0){const o=(s==null?void 0:s.renderBefore)??null;r._$litPart$=t=new Z(e.insertBefore(q(),o),o,void 0,s??{})}return t._$AI(i),t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Et(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return D}}var ke;u._$litElement$=!0,u.finalized=!0,(ke=globalThis.litElementHydrateSupport)==null||ke.call(globalThis,{LitElement:u});const we=globalThis.litElementPolyfillSupport;we==null||we({LitElement:u});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");var jt=Object.defineProperty,je=(i,e,s,r)=>{for(var t=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=n(e,s,t)||t);return t&&jt(e,s,t),t};class pe extends u{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.size="md"}createRenderRoot(){return this}getSizeClasses(){return{sm:"px-2 py-1 text-sm",md:"px-4 py-2",lg:"px-6 py-3 text-lg"}[this.size]}render(){return a`
      <button
        type=${this.type}
        ?disabled=${this.disabled}
        class="rounded-md ${this.getVariantClasses()} ${this.getSizeClasses()}"
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `}_handleClick(e){this.dispatchEvent(new CustomEvent("click",{detail:e,bubbles:!0,composed:!0}))}}je([l({type:Boolean})],pe.prototype,"disabled");je([l({type:String})],pe.prototype,"type");je([l({type:String})],pe.prototype,"size");var Dt=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,It=(i,e,s,r)=>{for(var t=r>1?void 0:r?Rt(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&Dt(e,s,t),t};let Ye=class extends pe{getColorClasses(){return this.disabled?"bg-gray-400 text-gray-700 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"}getSizeClasses(){return{small:"px-2 py-1 text-sm",medium:"px-4 py-2",large:"px-6 py-3 text-lg"}[this.size]}};Ye=It([d("primary-button")],Ye);var zt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,he=(i,e,s,r)=>{for(var t=r>1?void 0:r?Ut(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&zt(e,s,t),t};let I=class extends u{constructor(){super(...arguments),this.label="Button",this.size="medium",this.disabled=!1}createRenderRoot(){return this}render(){const i={small:"px-2 py-1 text-sm",medium:"px-4 py-2",large:"px-6 py-3 text-lg"},e="font-bold rounded transition-colors duration-200",s=this.disabled?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 active:bg-gray-200";return a`
      <button
        class="${e} ${s} ${i[this.size]}"
        ?disabled=${this.disabled}
      >
        ${this.label}
      </button>
    `}};I.styles=S`
    :host {
      display: inline-block;
    }
  `;he([l({type:String})],I.prototype,"label",2);he([l({type:String})],I.prototype,"size",2);he([l({type:Boolean})],I.prototype,"disabled",2);I=he([d("secondary-button")],I);var Tt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,de=(i,e,s,r)=>{for(var t=r>1?void 0:r?Bt(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&Tt(e,s,t),t};let z=class extends u{constructor(){super(...arguments),this.icon="",this.size="medium",this.disabled=!1}createRenderRoot(){return this}render(){const i={small:"p-1 text-sm",medium:"p-2",large:"p-3 text-lg"},e="rounded-full transition-colors duration-200 flex items-center justify-center",s=this.disabled?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700";return a`
      <button
        class="${e} ${s} ${i[this.size]}"
        ?disabled=${this.disabled}
      >
        <span class="material-icons">${this.icon}</span>
      </button>
    `}};z.styles=S`
    :host {
      display: inline-block;
    }
  `;de([l({type:String})],z.prototype,"icon",2);de([l({type:String})],z.prototype,"size",2);de([l({type:Boolean})],z.prototype,"disabled",2);z=de([d("icon-button")],z);var Nt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,ue=(i,e,s,r)=>{for(var t=r>1?void 0:r?Ht(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&Nt(e,s,t),t};let U=class extends u{constructor(){super(...arguments),this.label="Link",this.href="#",this.disabled=!1}createRenderRoot(){return this}render(){const i="font-medium transition-colors duration-200",e=this.disabled?"text-gray-400 cursor-not-allowed":"text-blue-600 hover:text-blue-800";return a`
      <a
        href=${this.disabled?null:this.href}
        class="${i} ${e}"
        ?disabled=${this.disabled}
      >
        ${this.label}
      </a>
    `}};U.styles=S`
    :host {
      display: inline-block;
    }
  `;ue([l({type:String})],U.prototype,"label",2);ue([l({type:String})],U.prototype,"href",2);ue([l({type:Boolean})],U.prototype,"disabled",2);U=ue([d("link-button")],U);var Mt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,De=(i,e,s,r)=>{for(var t=r>1?void 0:r?Lt(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&Mt(e,s,t),t};let K=class extends u{constructor(){super(...arguments),this.content="",this.color="blue"}createRenderRoot(){return this}render(){return a`
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${{blue:"bg-blue-100 text-blue-800",green:"bg-green-100 text-green-800",red:"bg-red-100 text-red-800",yellow:"bg-yellow-100 text-yellow-800"}[this.color]}">
        ${this.content}
      </span>
    `}};K.styles=S`
    :host {
      display: inline-block;
    }
  `;De([l({type:String})],K.prototype,"content",2);De([l({type:String})],K.prototype,"color",2);K=De([d("custom-badge")],K);var qt=Object.defineProperty,be=(i,e,s,r)=>{for(var t=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=n(e,s,t)||t);return t&&qt(e,s,t),t};class y extends u{constructor(){super(...arguments),this.value="",this.label="",this.error="",this.disabled=!1}createRenderRoot(){return this}emitChange(e){this.value=e,this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!0}))}render(){return a`
      <div class="w-full">
        ${this.label?a`
          <label class="block text-sm font-medium text-gray-700 mb-1">
            ${this.label}
          </label>
        `:""}
        
        ${this.renderInput()}
        
        ${this.error?a`
          <p class="mt-1 text-sm text-red-500">
            ${this.error}
          </p>
        `:""}
      </div>
    `}}be([l({type:String})],y.prototype,"value");be([l({type:String})],y.prototype,"label");be([l({type:String})],y.prototype,"error");be([l({type:Boolean})],y.prototype,"disabled");var Vt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,Re=(i,e,s,r)=>{for(var t=r>1?void 0:r?Wt(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&Vt(e,s,t),t};let se=class extends y{constructor(){super(...arguments),this.placeholder="",this.type="text"}renderInput(){return a`
      <input
        type=${this.type}
        .value=${this.value}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        @input=${this._handleInput}
        class="w-full px-3 py-2 border rounded-md ${this.error?"border-red-500":"border-gray-300"} focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
      />
    `}_handleInput(i){const e=i.target;this.emitChange(e.value)}};Re([l({type:String})],se.prototype,"placeholder",2);Re([l({type:String})],se.prototype,"type",2);se=Re([d("text-input")],se);var Kt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,ge=(i,e,s,r)=>{for(var t=r>1?void 0:r?Ft(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&Kt(e,s,t),t};let F=class extends y{constructor(){super(...arguments),this.step=1}renderInput(){return a`
      <div class="relative">
        <button
          type="button"
          @click=${this._decrease}
          ?disabled=${this.disabled||this.min!==void 0&&Number(this.value)<=this.min}
          class="absolute left-0 top-0 h-full px-2 text-gray-500 hover:text-gray-700 disabled:text-gray-300"
        >
          -
        </button>
        
        <input
          type="number"
          .value=${this.value}
          ?disabled=${this.disabled}
          min=${this.min}
          max=${this.max}
          step=${this.step}
          @input=${this._handleInput}
          class="w-full px-8 py-2 text-center border rounded-md ${this.error?"border-red-500":"border-gray-300"}"
        />
        
        <button
          type="button"
          @click=${this._increase}
          ?disabled=${this.disabled||this.max!==void 0&&Number(this.value)>=this.max}
          class="absolute right-0 top-0 h-full px-2 text-gray-500 hover:text-gray-700 disabled:text-gray-300"
        >
          +
        </button>
      </div>
    `}_handleInput(i){const e=i.target;this.emitChange(e.value)}_increase(){const i=Number(this.value||0)+this.step;(this.max===void 0||i<=this.max)&&this.emitChange(String(i))}_decrease(){const i=Number(this.value||0)-this.step;(this.min===void 0||i>=this.min)&&this.emitChange(String(i))}};ge([l({type:Number})],F.prototype,"min",2);ge([l({type:Number})],F.prototype,"max",2);ge([l({type:Number})],F.prototype,"step",2);F=ge([d("number-input")],F);var Jt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,Ie=(i,e,s,r)=>{for(var t=r>1?void 0:r?Gt(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&Jt(e,s,t),t};let re=class extends y{constructor(){super(...arguments),this.placeholder="email@example.com",this.allowMultiple=!1}renderInput(){return a`
      <div class="relative">
        <input
          type="email"
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?multiple=${this.allowMultiple}
          @input=${this._handleInput}
          class="w-full px-3 py-2 border rounded-md ${this.error?"border-red-500":"border-gray-300"}"
        />
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          ${this.error?a`
            <span class="material-icons text-red-500 text-sm">error</span>
          `:""}
        </div>
      </div>
    `}_handleInput(i){const e=i.target;this._validateEmail(e.value)&&this.emitChange(e.value)}_validateEmail(i){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)}};Ie([l({type:String})],re.prototype,"placeholder",2);Ie([l({type:Boolean})],re.prototype,"allowMultiple",2);re=Ie([d("email-input")],re);var Zt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,ze=(i,e,s,r)=>{for(var t=r>1?void 0:r?Xt(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&Zt(e,s,t),t};let ie=class extends y{constructor(){super(...arguments),this.placeholder="(123) 456-7890",this.countryCode="+1"}renderInput(){return a`
      <div class="flex">
        <div class="flex-shrink-0">
          <select
            class="h-full py-2 pl-3 pr-7 border-r-0 border rounded-l-md ${this.error?"border-red-500":"border-gray-300"}"
            .value=${this.countryCode}
            @change=${this._handleCountryChange}
          >
            <option value="+1">US (+1)</option>
            <option value="+44">UK (+44)</option>
            <option value="+34">ES (+34)</option>
          </select>
        </div>
        <input
          type="tel"
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          class="flex-1 px-3 py-2 border-l-0 border rounded-r-md ${this.error?"border-red-500":"border-gray-300"}"
        />
      </div>
    `}_handleInput(i){const e=i.target,s=this._formatPhoneNumber(e.value);e.value=s,this.emitChange(s)}_handleCountryChange(i){const e=i.target;this.countryCode=e.value,this.dispatchEvent(new CustomEvent("country-change",{detail:this.countryCode}))}_formatPhoneNumber(i){const e=i.replace(/\D/g,"");return e.length<=3?e:e.length<=6?`(${e.slice(0,3)}) ${e.slice(3)}`:`(${e.slice(0,3)}) ${e.slice(3,6)}-${e.slice(6,10)}`}};ze([l({type:String})],ie.prototype,"placeholder",2);ze([l({type:String})],ie.prototype,"countryCode",2);ie=ze([d("phone-input")],ie);var Yt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,Ue=(i,e,s,r)=>{for(var t=r>1?void 0:r?Qt(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&Yt(e,s,t),t};let oe=class extends y{constructor(){super(...arguments),this.placeholder="https://example.com",this.requireHttps=!0}renderInput(){return a`
      <div class="relative">
        <input
          type="url"
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          class="w-full pl-10 pr-3 py-2 border rounded-md ${this.error?"border-red-500":"border-gray-300"}"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span class="material-icons text-gray-400 text-sm">link</span>
        </div>
      </div>
    `}_handleInput(i){const e=i.target;this._validateUrl(e.value)&&this.emitChange(e.value)}_validateUrl(i){try{const e=new URL(i);return this.requireHttps?e.protocol==="https:":!0}catch{return!1}}};Ue([l({type:String})],oe.prototype,"placeholder",2);Ue([l({type:Boolean})],oe.prototype,"requireHttps",2);oe=Ue([d("url-input")],oe);var kt=Object.defineProperty,es=Object.getOwnPropertyDescriptor,Te=(i,e,s,r)=>{for(var t=r>1?void 0:r?es(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&kt(e,s,t),t};let ne=class extends y{constructor(){super(...arguments),this.loading=!1,this.placeholder="Search..."}renderInput(){return a`
      <div class="relative">
        <input
          type="search"
          placeholder=${this.placeholder}
          .value=${this.value}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          class="w-full pl-10 pr-4 py-2 border rounded-lg ${this.error?"border-red-500":"border-gray-300"}"
        >
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          ${this.loading?a`
            <loading-spinner size="sm"></loading-spinner>
          `:a`
            <search-icon></search-icon>
          `}
        </div>
      </div>
    `}_handleInput(i){const e=i.target;this.emitChange(e.value)}};Te([l({type:Boolean})],ne.prototype,"loading",2);Te([l({type:String})],ne.prototype,"placeholder",2);ne=Te([d("search-input")],ne);var ts=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,X=(i,e,s,r)=>{for(var t=r>1?void 0:r?ss(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&ts(e,s,t),t};let T=class extends y{constructor(){super(...arguments),this.rows=3,this.placeholder="",this.autoResize=!1}renderInput(){return a`
      <textarea
        .value=${this.value}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        rows=${this.rows}
        maxlength=${this.maxLength}
        @input=${this._handleInput}
        class="w-full px-3 py-2 border rounded-md resize-y ${this.error?"border-red-500":"border-gray-300"}"
      ></textarea>
      ${this.maxLength?a`
        <div class="text-xs text-gray-500 text-right mt-1">
          ${this.value.length}/${this.maxLength}
        </div>
      `:""}
    `}_handleInput(i){const e=i.target;this.emitChange(e.value),this.autoResize&&(e.style.height="auto",e.style.height=`${e.scrollHeight}px`)}};X([l({type:Number})],T.prototype,"rows",2);X([l({type:String})],T.prototype,"placeholder",2);X([l({type:Number})],T.prototype,"maxLength",2);X([l({type:Boolean})],T.prototype,"autoResize",2);T=X([d("textarea-input")],T);var rs=Object.defineProperty,is=Object.getOwnPropertyDescriptor,A=(i,e,s,r)=>{for(var t=r>1?void 0:r?is(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&rs(e,s,t),t};let x=class extends u{constructor(){super(...arguments),this.value="",this.label="",this.options=[],this.disabled=!1,this.required=!1,this.error=""}createRenderRoot(){return this}render(){return a`
      <div class="flex flex-col">
        ${this.label?a`
          <label class="mb-1 text-sm font-medium text-gray-700">
            ${this.label}
            ${this.required?a`<span class="text-red-500">*</span>`:""}
          </label>
        `:""}
        
        <select
          class="w-full px-3 py-2 border rounded-md ${this.error?"border-red-500":"border-gray-300"} ${this.disabled?"bg-gray-100 cursor-not-allowed":"bg-white"}"
          .value=${this.value}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @change=${this._handleChange}
        >
          <option value="">Seleccionar...</option>
          ${this.options.map(i=>a`
            <option value=${i.value}>${i.label}</option>
          `)}
        </select>
        
        ${this.error?a`
          <span class="mt-1 text-sm text-red-500">${this.error}</span>
        `:""}
      </div>
    `}_handleChange(i){const e=i.target;this.value=e.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))}};A([l({type:String})],x.prototype,"value",2);A([l({type:String})],x.prototype,"label",2);A([l({type:Array})],x.prototype,"options",2);A([l({type:Boolean})],x.prototype,"disabled",2);A([l({type:Boolean})],x.prototype,"required",2);A([l({type:String})],x.prototype,"error",2);x=A([d("select-input")],x);var os=Object.defineProperty,ns=Object.getOwnPropertyDescriptor,ve=(i,e,s,r)=>{for(var t=r>1?void 0:r?ns(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&os(e,s,t),t};let B=class extends u{constructor(){super(...arguments),this.checked=!1,this.label="",this.disabled=!1}createRenderRoot(){return this}render(){return a`
      <label class="inline-flex items-center">
        <input
          type="checkbox"
          class="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
        >
        <span class="ml-2 text-gray-700">${this.label}</span>
      </label>
    `}_handleChange(i){this.checked=i.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked}}))}};B.styles=S`
    :host {
      display: inline-block;
    }
  `;ve([l({type:Boolean})],B.prototype,"checked",2);ve([l({type:String})],B.prototype,"label",2);ve([l({type:Boolean})],B.prototype,"disabled",2);B=ve([d("custom-checkbox")],B);var ls=Object.defineProperty,nt=(i,e,s,r)=>{for(var t=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=n(e,s,t)||t);return t&&ls(e,s,t),t};class Be extends u{constructor(){super(...arguments),this.size="md",this.alt=""}getSizeClass(){return{sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16"}[this.size]}render(){return a`
      <div class="relative inline-block">
        <div class="${this.getSizeClass()} rounded-full overflow-hidden">
          ${this.renderContent()}
        </div>
        ${this.getStatusColor()?a`
          <span class="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white ${this.getStatusColor()}"></span>
        `:""}
      </div>
    `}}nt([l({type:String})],Be.prototype,"size");nt([l({type:String})],Be.prototype,"alt");var as=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,Ne=(i,e,s,r)=>{for(var t=r>1?void 0:r?cs(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&as(e,s,t),t};let le=class extends Be{constructor(){super(...arguments),this.src="",this.status=""}renderContent(){return this.src?a`
      <img
        src=${this.src}
        alt=${this.alt}
        class="w-full h-full object-cover"
      >
    `:a`
      <div class="w-full h-full bg-gray-200 flex items-center justify-center">
        <span class="text-gray-500 material-icons">person</span>
      </div>
    `}getStatusColor(){return{online:"bg-green-500",offline:"bg-gray-500",away:"bg-yellow-500",busy:"bg-red-500"}[this.status]||""}};Ne([l({type:String})],le.prototype,"src",2);Ne([l({type:String})],le.prototype,"status",2);le=Ne([d("image-avatar")],le);var ps=Object.defineProperty,ye=(i,e,s,r)=>{for(var t=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=n(e,s,t)||t);return t&&ps(e,s,t),t};class Y extends u{constructor(){super(...arguments),this.value=0,this.max=100,this.size="medium",this.showLabel=!0}createRenderRoot(){return this}render(){const e=this.value/this.max*100,s={small:"h-1",medium:"h-2",large:"h-4"}[this.size];return a`
      <div class="w-full">
        ${this.showLabel?this.renderLabel(e):""}
        <div class="w-full bg-gray-200 rounded-full ${s}">
          <div
            class="${this.getColorClass()} rounded-full ${s}"
            style="width: ${e}%"
          ></div>
        </div>
      </div>
    `}renderLabel(e){return a`
      <div class="flex justify-between mb-1">
        <slot name="label">
          <span class="text-sm font-medium text-gray-700">Progress</span>
        </slot>
        <span class="text-sm font-medium text-gray-700">${Math.round(e)}%</span>
      </div>
    `}}ye([l({type:Number})],Y.prototype,"value");ye([l({type:Number})],Y.prototype,"max");ye([l({type:String})],Y.prototype,"size");ye([l({type:Boolean})],Y.prototype,"showLabel");var hs=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,lt=(i,e,s,r)=>{for(var t=r>1?void 0:r?ds(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&hs(e,s,t),t};let Ce=class extends Y{constructor(){super(...arguments),this.color="blue"}getColorClass(){return{blue:"bg-blue-600",green:"bg-green-600",red:"bg-red-600",yellow:"bg-yellow-600"}[this.color]}};lt([l({type:String})],Ce.prototype,"color",2);Ce=lt([d("custom-progress")],Ce);var us=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,He=(i,e,s,r)=>{for(var t=r>1?void 0:r?bs(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&us(e,s,t),t};let J=class extends u{constructor(){super(...arguments),this.orientation="horizontal",this.color="gray-200"}render(){return a`
      <div class="${{horizontal:"w-full h-px",vertical:"h-full w-px"}[this.orientation]} bg-${this.color}"></div>
    `}};J.styles=S`
    :host {
      display: block;
    }
  `;He([l({type:String})],J.prototype,"orientation",2);He([l({type:String})],J.prototype,"color",2);J=He([d("custom-divider")],J);var gs=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,me=(i,e,s,r)=>{for(var t=r>1?void 0:r?vs(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&gs(e,s,t),t};let G=class extends u{constructor(){super(...arguments),this.orientation="horizontal",this.size="md",this.attached=!0}createRenderRoot(){return this}render(){return a`
      <div class="
        ${this.orientation==="horizontal"?"flex":"flex flex-col"}
        ${this.attached?"divide-x divide-gray-200":"gap-2"}
        rounded-md
      ">
        <slot></slot>
      </div>
    `}};me([l({type:String})],G.prototype,"orientation",2);me([l({type:String})],G.prototype,"size",2);me([l({type:Boolean})],G.prototype,"attached",2);G=me([d("button-group")],G);var ys=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,fe=(i,e,s,r)=>{for(var t=r>1?void 0:r?ms(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&ys(e,s,t),t};let N=class extends u{constructor(){super(...arguments),this.items=[],this.label="Dropdown",this._isOpen=!1}createRenderRoot(){return this}render(){return a`
      <div class="relative inline-block text-left">
        <div>
          <button @click=${this._toggleDropdown} type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
            ${this.label}
            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        ${this._isOpen?a`
          <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              ${this.items.map(i=>a`
                <a href=${i.href} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">${i.label}</a>
              `)}
            </div>
          </div>
        `:""}
      </div>
    `}_toggleDropdown(){this._isOpen=!this._isOpen}};N.styles=S`
    :host {
      display: inline-block;
    }
  `;fe([l({type:Array})],N.prototype,"items",2);fe([l({type:String})],N.prototype,"label",2);fe([tt()],N.prototype,"_isOpen",2);N=fe([d("custom-dropdown")],N);var fs=Object.defineProperty,$s=Object.getOwnPropertyDescriptor,at=(i,e,s,r)=>{for(var t=r>1?void 0:r?$s(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&fs(e,s,t),t};let Pe=class extends u{constructor(){super(...arguments),this.allowMultiple=!1}createRenderRoot(){return this}render(){return a`
      <div class="space-y-2" @toggle=${this._handleToggle}>
        <slot></slot>
      </div>
    `}_handleToggle(i){this.allowMultiple||this.querySelectorAll("accordion-item").forEach(s=>{s!==i.target&&(s.open=!1)})}};at([l({type:Boolean})],Pe.prototype,"allowMultiple",2);Pe=at([d("custom-accordion")],Pe);var _s=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,E=(i,e,s,r)=>{for(var t=r>1?void 0:r?xs(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&_s(e,s,t),t};let w=class extends u{constructor(){super(...arguments),this.columns=[],this.data=[],this.striped=!1,this.hoverable=!1,this.compact=!1,this.bordered=!1}render(){return a`
      <div class="overflow-x-auto">
        <table class="${this.getTableClasses()}">
          ${this.renderHeader()}
          ${this.renderBody()}
        </table>
      </div>
    `}getTableClasses(){return`
      min-w-full divide-y divide-gray-200
      ${this.bordered?"border border-gray-200":""}
      ${this.compact?"table-compact":""}
    `}renderHeader(){return a`
      <thead class="bg-gray-50">
        <tr>
          ${this.columns.map(i=>a`
            <th 
              scope="col" 
              class="${this.getHeaderClasses(i)}"
            >
              ${i.header}
              <slot name="header-${i.key}"></slot>
            </th>
          `)}
        </tr>
      </thead>
    `}getHeaderClasses(i){return`
      px-6 py-3 text-${i.align||"left"}
      text-xs font-medium text-gray-500 uppercase tracking-wider
      ${this.bordered?"border-x border-gray-200":""}
    `}renderBody(){return a`
      <tbody class="bg-white divide-y divide-gray-200">
        ${this.data.map((i,e)=>a`
          <tr class="${this.getRowClasses(e)}">
            ${this.columns.map(s=>a`
              <td class="${this.getCellClasses(s)}">
                ${this.renderCell(s,i)}
              </td>
            `)}
          </tr>
        `)}
      </tbody>
    `}getRowClasses(i){return`
      ${this.striped&&i%2?"bg-gray-50":""}
      ${this.hoverable?"hover:bg-gray-100":""}
    `}getCellClasses(i){return`
      px-6 py-4 whitespace-nowrap text-sm text-gray-500
      text-${i.align||"left"}
      ${this.bordered?"border-x border-gray-200":""}
      ${this.compact?"py-2":""}
    `}renderCell(i,e){return i.render?i.render(e[i.key],e):e[i.key]}};E([l({type:Array})],w.prototype,"columns",2);E([l({type:Array})],w.prototype,"data",2);E([l({type:Boolean})],w.prototype,"striped",2);E([l({type:Boolean})],w.prototype,"hoverable",2);E([l({type:Boolean})],w.prototype,"compact",2);E([l({type:Boolean})],w.prototype,"bordered",2);w=E([Component("custom-table")],w);var ws=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,Me=(i,e,s,r)=>{for(var t=r>1?void 0:r?Cs(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&ws(e,s,t),t};let ae=class extends u{constructor(){super(...arguments),this.items=[],this.currentIndex=0}render(){return a`
      <!-- Inyección de Tailwind directamente en el Shadow DOM -->
      <style>
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        :host {
          display: block;
        }

        .carousel-container {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .carousel-items {
          display: flex;
          transition: transform 0.5s ease-in-out;
          width: 100%;
        }

        .carousel-item {
          flex: 0 0 100%;
          box-sizing: border-box;
          
        }

         .carousel-item  img{
          width: 100%;
          
        }
        .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 10px;
          border: none;
          cursor: pointer;
          z-index: 10;
        }

        .carousel-control.prev {
          left: 10px;
        }

        .carousel-control.next {
          right: 10px;
        }
      </style>
      <!-- Contenido del carrusel -->
      <div class="carousel-container">
        <div
          class="carousel-items"
          style="transform: translateX(-${this.currentIndex*100}%)"
        >
          ${this.items.map(i=>a`
              <div class="carousel-item">
                <img src="${i.image}" alt="${i.alt}" class="w-full h-64 object-cover" />
                <div class="p-4 bg-gray-100">
                  <h3 class="text-xl font-bold">${i.title}</h3>
                  <p>${i.description}</p>
                </div>
              </div>
            `)}
        </div>
        <!-- Botones de navegación -->
        <button
          class="carousel-control prev"
          @click=${this.prevSlide}
        >&lt;</button>
        <button
          class="carousel-control next"
          @click=${this.nextSlide}
        >&gt;</button>
      </div>
    `}prevSlide(){this.currentIndex=(this.currentIndex-1+this.items.length)%this.items.length}nextSlide(){this.currentIndex=(this.currentIndex+1)%this.items.length}};Me([l({type:Array})],ae.prototype,"items",2);Me([tt()],ae.prototype,"currentIndex",2);ae=Me([d("custom-carousel")],ae);class Ps extends u{createRenderRoot(){return this}render(){return this.renderContent()}}var Os=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,As=(i,e,s,r)=>{for(var t=r>1?void 0:r?Ss(e,s):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,s,t):n(t))||t);return r&&t&&Os(e,s,t),t};let Qe=class extends Ps{renderContent(){return a`
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Componentes Web SOLID
          </h1>
          <p class="text-xl mb-8">
            Una biblioteca de componentes web construida con Lit y siguiendo principios SOLID
          </p>
          <div class="flex gap-4">
            <primary-button label="Comenzar" size="lg"></primary-button>
            <secondary-button label="Documentación" size="lg"></secondary-button>
          </div>
        </div>
      </section>

      <!-- Inputs Showcase -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8">Inputs</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="space-y-4">
              <text-input
                label="Texto"
                placeholder="Ingrese texto..."
              ></text-input>

              <email-input
                label="Email"
                placeholder="email@ejemplo.com"
              ></email-input>

              <number-input
                label="Cantidad"
                min="0"
                max="100"
              ></number-input>
            </div>

            <div class="space-y-4">
              <phone-input
                label="Teléfono"
                placeholder="(123) 456-7890"
              ></phone-input>

              <url-input
                label="Sitio Web"
                placeholder="https://ejemplo.com"
              ></url-input>

              <select-input
                label="Opciones"
                .options=${[{value:"1",label:"Opción 1"},{value:"2",label:"Opción 2"},{value:"3",label:"Opción 3"}]}
              ></select-input>
            </div>

            <div class="space-y-4">
              <textarea-input
                label="Mensaje"
                rows="3"
                placeholder="Escriba su mensaje..."
              ></textarea-input>

              <search-input
                label="Búsqueda"
                placeholder="Buscar..."
              ></search-input>
            </div>
          </div>
        </div>
      </section>

      <!-- Buttons & Controls -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8">Botones y Controles</h2>
          
          <div class="space-y-8">
            <div class="flex flex-wrap gap-4">
              <primary-button label="Principal"></primary-button>
              <secondary-button label="Secundario"></secondary-button>
              <link-button label="Enlace" href="#"></link-button>
              <icon-button icon="star"></icon-button>
            </div>

            <button-group>
              <primary-button label="Izquierda"></primary-button>
              <primary-button label="Centro"></primary-button>
              <primary-button label="Derecha"></primary-button>
            </button-group>

            <custom-progress value="75" color="blue"></custom-progress>
          </div>
        </div>
      </section>

      <!-- Cards & Content -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8">Tarjetas y Contenido</h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <custom-card
              title="Tarjeta Simple"
              content="Una tarjeta básica con título y contenido"
              elevated
            ></custom-card>

            <custom-accordion>
              <accordion-item title="Sección 1">
                Contenido de la sección 1
              </accordion-item>
              <accordion-item title="Sección 2">
                Contenido de la sección 2
              </accordion-item>
            </custom-accordion>

            <custom-tabs
              .tabs=${[{label:"Tab 1",content:"Contenido del tab 1"},{label:"Tab 2",content:"Contenido del tab 2"}]}
            ></custom-tabs>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8">Testimonios</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <custom-testimonial
              quote="Estos componentes son increíbles"
              author="Juan Pérez"
              role="Desarrollador Frontend"
              avatar="/avatars/1.jpg"
            ></custom-testimonial>

            <custom-testimonial
              quote="La mejor biblioteca que he usado"
              author="María García"
              role="Tech Lead"
              avatar="/avatars/2.jpg"
            ></custom-testimonial>
          </div>
        </div>
      </section>

      <!-- Navigation -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8">Navegación</h2>
          
          <div class="space-y-8">
            <custom-breadcrumbs
              .items=${[{label:"Inicio",href:"#"},{label:"Componentes",href:"#"},{label:"Navegación",href:"#"}]}
            ></custom-breadcrumbs>

            <div class="flex items-center gap-4">
              <custom-avatar
                src="/avatars/user.jpg"
                size="large"
                status="online"
              ></custom-avatar>
              
              <custom-avatar
                size="medium"
                status="away"
              ></custom-avatar>
            </div>
          </div>
        </div>
      </section>
    `}};Qe=As([d("landing-page")],Qe);
