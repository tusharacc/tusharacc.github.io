import"../chunks/DsnmJJEf.js";import{af as Pe,F as we,x as he,aM as ze,C as ce,y as N,ai as De,z as ve,j as B,a0 as st,A as it,H as nt,B as Ee,D as U,M as H,aj as lt,an as ot,G as ae,J as ft,aN as pe,aO as be,I as dt,aP as Ne,P as Ge,V as Te,ar as Ve,ad as je,K as Ae,L as Je,aQ as ct,aR as _e,aS as re,aT as ut,al as vt,aU as gt,aq as ht,aV as pt,T as Ue,aW as bt,E as _t,aX as mt,au as xt,aG as We,aY as kt,aZ as $t,N as yt,a_ as St,a$ as wt,U as At,b0 as Bt,b1 as Ft,b2 as Et,b3 as Nt,p as se,b4 as Tt,a as F,q as ie,v as T,c as w,e as Me,k as oe,r as S,aJ as D,o as O,aK as Ke,b5 as Mt,f as M,t as P,S as Ct,b6 as ee,h as Lt,$ as It}from"../chunks/BDkKsZF2.js";import{i as Be}from"../chunks/DrpndMpk.js";import{i as Ot,a as Rt,c as Ht,d as Ye,n as Pt,b as zt,o as Dt,s as Z}from"../chunks/CCveYkVG.js";import{l as z,p as q,s as ne,i as te,a as Gt,b as Vt}from"../chunks/CTUOiL7L.js";import{d as Ce}from"../chunks/BkMdHSsz.js";function jt(e,a){if(a){const t=document.body;e.autofocus=!0,Pe(()=>{document.activeElement===t&&e.focus()})}}function X(e,a){return a}function Jt(e,a,t){for(var r=e.items,s=[],n=a.length,i=0;i<n;i++)gt(a[i].e,s,!0);var o=n>0&&s.length===0&&t!==null;if(o){var v=t.parentNode;ht(v),v.append(t),r.clear(),R(e,a[0].prev,a[n-1].next)}pt(s,()=>{for(var l=0;l<n;l++){var p=a[l];o||(r.delete(p.k),R(e,p.prev,p.next)),re(p.e,!o)}})}function Q(e,a,t,r,s,n=null){var i=e,o={flags:a,items:new Map,first:null},v=(a&ze)!==0;if(v){var l=e;i=N?ce(De(l)):l.appendChild(we())}N&&ve();var p=null,d=!1,f=new Map,x=st(()=>{var m=t();return je(m)?m:m==null?[]:Ve(m)}),c,h;function _(){Ut(h,c,o,f,i,s,a,r,t),n!==null&&(c.length===0?p?Ae(p):p=ae(()=>n(i)):p!==null&&Je(p,()=>{p=null}))}he(()=>{h??=Ue,c=B(x);var m=c.length;if(d&&m===0)return;d=m===0;let A=!1;if(N){var b=it(i)===nt;b!==(m===0)&&(i=Ee(),ce(i),U(!1),A=!0)}if(N){for(var k=null,$,g=0;g<m;g++){if(H.nodeType===lt&&H.data===ot){i=H,A=!0,U(!1);break}var u=c[g],y=r(u,g);$=$e(H,o,k,null,u,y,g,s,a,t),o.items.set(y,$),k=$}m>0&&ce(Ee())}if(N)m===0&&n&&(p=ae(()=>n(i)));else if(ft()){var E=new Set,L=dt;for(g=0;g<m;g+=1){u=c[g],y=r(u,g);var I=o.items.get(y)??f.get(y);I?(a&(pe|be))!==0&&qe(I,u,g,a):($=$e(null,o,null,null,u,y,g,s,a,t,!0),f.set(y,$)),E.add(y)}for(const[C,G]of o.items)E.has(C)||L.skipped_effects.add(G.e);L.add_callback(_)}else _();A&&U(!0),B(x)}),N&&(i=H)}function Ut(e,a,t,r,s,n,i,o,v){var l=(i&ut)!==0,p=(i&(pe|be))!==0,d=a.length,f=t.items,x=t.first,c=x,h,_=null,m,A=[],b=[],k,$,g,u;if(l)for(u=0;u<d;u+=1)k=a[u],$=o(k,u),g=f.get($),g!==void 0&&(g.a?.measure(),(m??=new Set).add(g));for(u=0;u<d;u+=1){if(k=a[u],$=o(k,u),g=f.get($),g===void 0){var y=r.get($);if(y!==void 0){r.delete($),f.set($,y);var E=_?_.next:c;R(t,_,y),R(t,y,E),me(y,E,s),_=y}else{var L=c?c.e.nodes_start:s;_=$e(L,t,_,_===null?t.first:_.next,k,$,u,n,i,v)}f.set($,_),A=[],b=[],c=_.next;continue}if(p&&qe(g,k,u,i),(g.e.f&_e)!==0&&(Ae(g.e),l&&(g.a?.unfix(),(m??=new Set).delete(g))),g!==c){if(h!==void 0&&h.has(g)){if(A.length<b.length){var I=b[0],C;_=I.prev;var G=A[0],V=A[A.length-1];for(C=0;C<A.length;C+=1)me(A[C],I,s);for(C=0;C<b.length;C+=1)h.delete(b[C]);R(t,G.prev,V.next),R(t,_,G),R(t,V,I),c=I,_=V,u-=1,A=[],b=[]}else h.delete(g),me(g,c,s),R(t,g.prev,g.next),R(t,g,_===null?t.first:_.next),R(t,_,g),_=g;continue}for(A=[],b=[];c!==null&&c.k!==$;)(c.e.f&_e)===0&&(h??=new Set).add(c),b.push(c),c=c.next;if(c===null)continue;g=c}A.push(g),_=g,c=g.next}if(c!==null||h!==void 0){for(var j=h===void 0?[]:Ve(h);c!==null;)(c.e.f&_e)===0&&j.push(c),c=c.next;var K=j.length;if(K>0){var J=(i&ze)!==0&&d===0?s:null;if(l){for(u=0;u<K;u+=1)j[u].a?.measure();for(u=0;u<K;u+=1)j[u].a?.fix()}Jt(t,j,J)}}l&&Pe(()=>{if(m!==void 0)for(g of m)g.a?.apply()}),e.first=t.first&&t.first.e,e.last=_&&_.e;for(var Y of r.values())re(Y.e);r.clear()}function qe(e,a,t,r){(r&pe)!==0&&Ne(e.v,a),(r&be)!==0?Ne(e.i,t):e.i=t}function $e(e,a,t,r,s,n,i,o,v,l,p){var d=(v&pe)!==0,f=(v&ct)===0,x=d?f?Ge(s,!1,!1):Te(s):s,c=(v&be)===0?i:Te(i),h={i:c,v:x,k:n,a:null,e:null,prev:t,next:r};try{if(e===null){var _=document.createDocumentFragment();_.append(e=we())}return h.e=ae(()=>o(e,x,c,l),N),h.e.prev=t&&t.e,h.e.next=r&&r.e,t===null?p||(a.first=h):(t.next=h,t.e.next=h.e),r!==null&&(r.prev=h,r.e.prev=h.e),h}finally{}}function me(e,a,t){for(var r=e.next?e.next.e.nodes_start:t,s=a?a.e.nodes_start:t,n=e.e.nodes_start;n!==null&&n!==r;){var i=vt(n);s.before(n),n=i}}function R(e,a,t){a===null?e.first=t:(a.next=t,a.e.next=t&&t.e),t!==null&&(t.prev=a,t.e.prev=a&&a.e)}function W(e,a,t,r,s){N&&ve();var n=a.$$slots?.[t],i=!1;n===!0&&(n=a.children,i=!0),n===void 0||n(e,i?()=>r:r)}function Wt(e,a,t,r,s,n){let i=N;N&&ve();var o,v,l=null;N&&H.nodeType===bt&&(l=H,ve());var p=N?H:e,d;he(()=>{const f=a()||null;var x=mt;f!==o&&(d&&(f===null?Je(d,()=>{d=null,v=null}):f===v?Ae(d):re(d)),f&&f!==v&&(d=ae(()=>{if(l=N?l:document.createElementNS(x,f),xt(l,l),r){N&&Ot(f)&&l.append(document.createComment(""));var c=N?De(l):l.appendChild(we());N&&(c===null?U(!1):ce(c)),r(l,c)}Ue.nodes_end=l,p.before(l)})),o=f,o&&(v=o))},_t),i&&(U(!0),ce(p))}function Kt(e,a){var t=void 0,r;he(()=>{t!==(t=a())&&(r&&(re(r),r=null),t&&(r=ae(()=>{We(()=>t(e))})))})}function Ze(e){var a,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(a=0;a<s;a++)e[a]&&(t=Ze(e[a]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Yt(){for(var e,a,t=0,r="",s=arguments.length;t<s;t++)(e=arguments[t])&&(a=Ze(e))&&(r&&(r+=" "),r+=a);return r}function qt(e){return typeof e=="object"?Yt(e):e??""}const Le=[...` 	
\r\f \v\uFEFF`];function Zt(e,a,t){var r=e==null?"":""+e;if(a&&(r=r?r+" "+a:a),t){for(var s in t)if(t[s])r=r?r+" "+s:s;else if(r.length)for(var n=s.length,i=0;(i=r.indexOf(s,i))>=0;){var o=i+n;(i===0||Le.includes(r[i-1]))&&(o===r.length||Le.includes(r[o]))?r=(i===0?"":r.substring(0,i))+r.substring(o+1):i=o}}return r===""?null:r}function Ie(e,a=!1){var t=a?" !important;":";",r="";for(var s in e){var n=e[s];n!=null&&n!==""&&(r+=" "+s+": "+n+t)}return r}function xe(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Xt(e,a){if(a){var t="",r,s;if(Array.isArray(a)?(r=a[0],s=a[1]):r=a,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var n=!1,i=0,o=!1,v=[];r&&v.push(...Object.keys(r).map(xe)),s&&v.push(...Object.keys(s).map(xe));var l=0,p=-1;const h=e.length;for(var d=0;d<h;d++){var f=e[d];if(o?f==="/"&&e[d-1]==="*"&&(o=!1):n?n===f&&(n=!1):f==="/"&&e[d+1]==="*"?o=!0:f==='"'||f==="'"?n=f:f==="("?i++:f===")"&&i--,!o&&n===!1&&i===0){if(f===":"&&p===-1)p=d;else if(f===";"||d===h-1){if(p!==-1){var x=xe(e.substring(l,p).trim());if(!v.includes(x)){f!==";"&&d++;var c=e.substring(l,d).trim();t+=" "+c+";"}}l=d+1,p=-1}}}}return r&&(t+=Ie(r)),s&&(t+=Ie(s,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Fe(e,a,t,r,s,n){var i=e.__className;if(N||i!==t||i===void 0){var o=Zt(t,r,n);(!N||o!==e.getAttribute("class"))&&(o==null?e.removeAttribute("class"):a?e.className=o:e.setAttribute("class",o)),e.__className=t}else if(n&&s!==n)for(var v in n){var l=!!n[v];(s==null||l!==!!s[v])&&e.classList.toggle(v,l)}return n}function ke(e,a={},t,r){for(var s in t){var n=t[s];a[s]!==n&&(t[s]==null?e.style.removeProperty(s):e.style.setProperty(s,n,r))}}function ge(e,a,t,r){var s=e.__style;if(N||s!==a){var n=Xt(a,r);(!N||n!==e.getAttribute("style"))&&(n==null?e.removeAttribute("style"):e.style.cssText=n),e.__style=a}else r&&(Array.isArray(r)?(ke(e,t?.[0],r[0]),ke(e,t?.[1],r[1],"important")):ke(e,t,r));return r}function ye(e,a,t=!1){if(e.multiple){if(a==null)return;if(!je(a))return kt();for(var r of e.options)r.selected=a.includes(Oe(r));return}for(r of e.options){var s=Oe(r);if($t(s,a)){r.selected=!0;return}}(!t||a!==void 0)&&(e.selectedIndex=-1)}function Qt(e){var a=new MutationObserver(()=>{ye(e,e.__value)});a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),yt(()=>{a.disconnect()})}function Oe(e){return"__value"in e?e.__value:e.value}const fe=Symbol("class"),de=Symbol("style"),Xe=Symbol("is custom element"),Qe=Symbol("is html");function ea(e,a){a?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Se(e,a,t,r){var s=et(e);N&&(s[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||s[a]!==(s[a]=t)&&(a==="loading"&&(e[Et]=t),t==null?e.removeAttribute(a):typeof t!="string"&&tt(e).includes(a)?e[a]=t:e.setAttribute(a,t))}function ta(e,a,t,r,s=!1){var n=et(e),i=n[Xe],o=!n[Qe];let v=N&&i;v&&U(!1);var l=a||{},p=e.tagName==="OPTION";for(var d in a)d in t||(t[d]=null);t.class?t.class=qt(t.class):t[fe]&&(t.class=null),t[de]&&(t.style??=null);var f=tt(e);for(const b in t){let k=t[b];if(p&&b==="value"&&k==null){e.value=e.__value="",l[b]=k;continue}if(b==="class"){var x=e.namespaceURI==="http://www.w3.org/1999/xhtml";Fe(e,x,k,r,a?.[fe],t[fe]),l[b]=k,l[fe]=t[fe];continue}if(b==="style"){ge(e,k,a?.[de],t[de]),l[b]=k,l[de]=t[de];continue}var c=l[b];if(!(k===c&&!(k===void 0&&e.hasAttribute(b)))){l[b]=k;var h=b[0]+b[1];if(h!=="$$")if(h==="on"){const $={},g="$$"+b;let u=b.slice(2);var _=zt(u);if(Rt(u)&&(u=u.slice(0,-7),$.capture=!0),!_&&c){if(k!=null)continue;e.removeEventListener(u,l[g],$),l[g]=null}if(k!=null)if(_)e[`__${u}`]=k,Ye([u]);else{let y=function(E){l[b].call(this,E)};l[g]=Ht(u,e,y,$)}else _&&(e[`__${u}`]=void 0)}else if(b==="style")Se(e,b,k);else if(b==="autofocus")jt(e,!!k);else if(!i&&(b==="__value"||b==="value"&&k!=null))e.value=e.__value=k;else if(b==="selected"&&p)ea(e,k);else{var m=b;o||(m=Pt(m));var A=m==="defaultValue"||m==="defaultChecked";if(k==null&&!i&&!A)if(n[b]=null,m==="value"||m==="checked"){let $=e;const g=a===void 0;if(m==="value"){let u=$.defaultValue;$.removeAttribute(m),$.defaultValue=u,$.value=$.__value=g?u:null}else{let u=$.defaultChecked;$.removeAttribute(m),$.defaultChecked=u,$.checked=g?u:!1}}else e.removeAttribute(b);else A||f.includes(m)&&(i||typeof k!="string")?(e[m]=k,m in n&&(n[m]=At)):typeof k!="function"&&Se(e,m,k)}}}return v&&U(!0),l}function Re(e,a,t=[],r=[],s,n=!1){St(t,r,i=>{var o=void 0,v={},l=e.nodeName==="SELECT",p=!1;if(he(()=>{var f=a(...i.map(B)),x=ta(e,o,f,s,n);p&&l&&"value"in f&&ye(e,f.value);for(let h of Object.getOwnPropertySymbols(v))f[h]||re(v[h]);for(let h of Object.getOwnPropertySymbols(f)){var c=f[h];h.description===wt&&(!o||c!==o[h])&&(v[h]&&re(v[h]),v[h]=ae(()=>Kt(e,()=>c))),x[h]=c}o=x}),l){var d=e;We(()=>{ye(d,o.value,!0),Qt(d)})}p=!0})}function et(e){return e.__attributes??={[Xe]:e.nodeName.includes("-"),[Qe]:e.namespaceURI===Bt}}var He=new Map;function tt(e){var a=He.get(e.nodeName);if(a)return a;He.set(e.nodeName,a=[]);for(var t,r=e,s=Element.prototype;s!==r;){t=Nt(r);for(var n in t)t[n].set&&a.push(n);r=Ft(r)}return a}/**
 * @license lucide-svelte v0.541.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const aa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ra=Tt("<svg><!><!></svg>");function le(e,a){const t=z(a,["children","$$slots","$$events","$$legacy"]),r=z(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);se(a,!1);let s=q(a,"name",8,void 0),n=q(a,"color",8,"currentColor"),i=q(a,"size",8,24),o=q(a,"strokeWidth",8,2),v=q(a,"absoluteStrokeWidth",8,!1),l=q(a,"iconNode",24,()=>[]);const p=(...c)=>c.filter((h,_,m)=>!!h&&m.indexOf(h)===_).join(" ");Be();var d=ra();Re(d,(c,h)=>({...aa,...r,width:i(),height:i(),stroke:n(),"stroke-width":c,class:h}),[()=>(oe(v()),oe(o()),oe(i()),Me(()=>v()?Number(o())*24/Number(i()):o())),()=>(oe(s()),oe(t),Me(()=>p("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)))]);var f=w(d);Q(f,1,l,X,(c,h)=>{var _=Ke(()=>Mt(B(h),2));let m=()=>B(_)[0],A=()=>B(_)[1];var b=D(),k=O(b);Wt(k,m,!0,($,g)=>{Re($,()=>({...A()}))}),F(c,b)});var x=T(f);W(x,a,"default",{}),S(d),F(e,d),ie()}function sa(e,a){const t=z(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.541.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];le(e,ne({name:"external-link"},()=>t,{get iconNode(){return r},children:(s,n)=>{var i=D(),o=O(i);W(o,a,"default",{}),F(s,i)},$$slots:{default:!0}}))}function ia(e,a){const t=z(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.541.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];le(e,ne({name:"file-text"},()=>t,{get iconNode(){return r},children:(s,n)=>{var i=D(),o=O(i);W(o,a,"default",{}),F(s,i)},$$slots:{default:!0}}))}function na(e,a){const t=z(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.541.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];le(e,ne({name:"github"},()=>t,{get iconNode(){return r},children:(s,n)=>{var i=D(),o=O(i);W(o,a,"default",{}),F(s,i)},$$slots:{default:!0}}))}function la(e,a){const t=z(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.541.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];le(e,ne({name:"linkedin"},()=>t,{get iconNode(){return r},children:(s,n)=>{var i=D(),o=O(i);W(o,a,"default",{}),F(s,i)},$$slots:{default:!0}}))}function oa(e,a){const t=z(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.541.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];le(e,ne({name:"moon"},()=>t,{get iconNode(){return r},children:(s,n)=>{var i=D(),o=O(i);W(o,a,"default",{}),F(s,i)},$$slots:{default:!0}}))}function fa(e,a){const t=z(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.541.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];le(e,ne({name:"sun"},()=>t,{get iconNode(){return r},children:(s,n)=>{var i=D(),o=O(i);W(o,a,"default",{}),F(s,i)},$$slots:{default:!0}}))}var da=M('<nav class="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 z-50"><div class="max-w-[600px] mx-auto px-4 flex items-center justify-between h-12"><a href="#home" class="font-mono text-sm font-semibold text-gray-900 dark:text-white">ts</a> <div class="flex items-center gap-6"><a href="#tech" class="font-mono text-xs text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors">tech</a> <a href="#projects" class="font-mono text-xs text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors">projects</a> <button class="text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Toggle dark mode"><!></button></div></div></nav>');function ca(e,a){se(a,!1);const[t,r]=Gt(),s=()=>Vt(Ce,"$darkMode",t);function n(){Ce.update(x=>!x)}Be();var i=da(),o=w(i),v=T(w(o),2),l=T(w(v),4);l.__click=n;var p=w(l);{var d=x=>{fa(x,{size:15})},f=x=>{oa(x,{size:15})};te(p,x=>{s()?x(d):x(f,!1)})}S(l),S(v),S(o),S(i),F(e,i),ie(),r()}Ye(["click"]);var ua=M('<section id="home" class="min-h-[60vh] flex items-center justify-center pt-16 px-4"><div class="max-w-2xl w-full"><div><p class="font-mono text-xs tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400">Site Reliability Engineer</p> <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">Tushar Saurabh</h1> <p class="text-lg text-slate-500 dark:text-slate-400 font-mono">Chubb · DevOps · Cloud · Automation</p> <div class="flex items-center gap-5 pt-4"><a href="https://github.com/tusharacc" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub"><!> <span>GitHub</span></a> <a href="https://linkedin.com/in/tushar-saurabh-49ba8a63" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="LinkedIn"><!> <span>LinkedIn</span></a> <a href="https://blogs.tusharsaurabh.com" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Blog"><!> <span>Blog</span></a></div></div></div></section>');function va(e,a){se(a,!1);let t=Ge(!1);Dt(()=>{Ct(t,!0)}),Be();var r=ua(),s=w(r),n=w(s);let i;var o=T(w(n),6),v=w(o),l=w(v);na(l,{size:18}),ee(2),S(v);var p=T(v,2),d=w(p);la(d,{size:18}),ee(2),S(p);var f=T(p,2),x=w(f);ia(x,{size:18}),ee(2),S(f),S(o),S(n),S(s),S(r),P(c=>i=Fe(n,1,"space-y-3 transition-all duration-700",null,i,c),[()=>({"opacity-0":!B(t),"translate-y-4":!B(t)})]),F(e,r),ie()}var ga=M('<div class="trace-h svelte-b5tl4t" aria-hidden="true"></div>'),ha=M('<span class="chip svelte-b5tl4t"> </span>'),pa=M('<!> <div class="node svelte-b5tl4t"><div class="yr svelte-b5tl4t"> </div> <div class="chips svelte-b5tl4t"></div></div>',1),ba=M('<div class="trace-h svelte-b5tl4t" aria-hidden="true"></div> <div class="node node-phantom svelte-b5tl4t" aria-hidden="true"></div>',1),_a=M('<div class="turn svelte-b5tl4t" aria-hidden="true"></div>'),ma=M("<div><!> <!></div> <!>",1),xa=M('<section class="py-14 px-4"><div class="mb-8 flex items-center gap-3 max-w-[600px] mx-auto"><span class="font-mono text-xs tracking-[0.25em] uppercase text-amber-500/50">01</span> <span class="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">Tech Evolution</span> <span class="flex-1 h-px bg-slate-200 dark:bg-slate-800"></span></div> <div class="max-w-[600px] mx-auto"></div></section>');function ka(e,a){se(a,!0);const t=3,r=a.data.filter(d=>d.langs.length>0),s=[];for(let d=0;d<r.length;d+=t)s.push(r.slice(d,d+t));const n={Python:{dkBg:"#0a1929",dkFg:"#60a5fa",ltBg:"#dbeafe",ltFg:"#1d4ed8"},JavaScript:{dkBg:"#1a1400",dkFg:"#fbbf24",ltBg:"#fef3c7",ltFg:"#92400e"},TypeScript:{dkBg:"#091225",dkFg:"#93c5fd",ltBg:"#dbeafe",ltFg:"#1e3a8a"},Ruby:{dkBg:"#1a0505",dkFg:"#f87171",ltBg:"#fee2e2",ltFg:"#991b1b"},Shell:{dkBg:"#011408",dkFg:"#34d399",ltBg:"#d1fae5",ltFg:"#065f46"},Swift:{dkBg:"#1a0800",dkFg:"#fb923c",ltBg:"#ffedd5",ltFg:"#9a3412"},"C#":{dkBg:"#100818",dkFg:"#c084fc",ltBg:"#ede9fe",ltFg:"#5b21b6"},CSS:{dkBg:"#1a0311",dkFg:"#f472b6",ltBg:"#fce7f3",ltFg:"#9d174d"},HTML:{dkBg:"#180c00",dkFg:"#fdba74",ltBg:"#fff7ed",ltFg:"#c2410c"},Go:{dkBg:"#001a1f",dkFg:"#22d3ee",ltBg:"#cffafe",ltFg:"#155e75"},"C++":{dkBg:"#0c0e14",dkFg:"#94a3b8",ltBg:"#f1f5f9",ltFg:"#334155"},Rust:{dkBg:"#1a0c00",dkFg:"#fb923c",ltBg:"#fff7ed",ltFg:"#9a3412"},Java:{dkBg:"#1a0800",dkFg:"#fca5a5",ltBg:"#fff1f2",ltFg:"#9f1239"},Kotlin:{dkBg:"#100818",dkFg:"#c084fc",ltBg:"#f5f3ff",ltFg:"#6d28d9"},Dart:{dkBg:"#001a1f",dkFg:"#22d3ee",ltBg:"#ecfeff",ltFg:"#0e7490"},Assembly:{dkBg:"#0c0e14",dkFg:"#94a3b8",ltBg:"#f8fafc",ltFg:"#475569"},Svelte:{dkBg:"#1a0600",dkFg:"#ff7043",ltBg:"#fff0ed",ltFg:"#c2410c"},AppleScript:{dkBg:"#080818",dkFg:"#a5b4fc",ltBg:"#eef2ff",ltFg:"#4338ca"},"Jupyter Notebook":{dkBg:"#140c00",dkFg:"#f59e0b",ltBg:"#fef3c7",ltFg:"#92400e"},AngularJS:{dkBg:"#1a0000",dkFg:"#fca5a5",ltBg:"#fee2e2",ltFg:"#991b1b"},Claude:{dkBg:"#1a1100",dkFg:"#f59e0b",ltBg:"#fefce8",ltFg:"#854d0e"},Copilot:{dkBg:"#00101a",dkFg:"#38bdf8",ltBg:"#e0f2fe",ltFg:"#0369a1"}},i={dkBg:"#0c0e14",dkFg:"#94a3b8",ltBg:"#f1f5f9",ltFg:"#334155"};function o(d){const f=n[d]??i;return`--dk-bg:${f.dkBg};--dk-fg:${f.dkFg};--dk-border:${f.dkFg}40;--lt-bg:${f.ltBg};--lt-fg:${f.ltFg};--lt-border:${f.ltFg}50`}function v(d){const f=d%2===0,x="height:24px;width:calc(33.333% + 8px);border-bottom:1px dashed rgba(245,158,11,0.3);";return f?x+"margin-left:auto;border-right:1px dashed rgba(245,158,11,0.3);border-bottom-right-radius:10px;":x+"margin-right:auto;border-left:1px dashed rgba(245,158,11,0.3);border-bottom-left-radius:10px;"}var l=xa(),p=T(w(l),2);Q(p,21,()=>s,X,(d,f,x)=>{const c=Ke(()=>x%2===1);var h=ma(),_=O(h);let m;var A=w(_);Q(A,17,()=>B(f),X,(u,y,E)=>{var L=pa(),I=O(L);{var C=J=>{var Y=ga();F(J,Y)};te(I,J=>{E>0&&J(C)})}var G=T(I,2),V=w(G),j=w(V,!0);S(V);var K=T(V,2);Q(K,21,()=>B(y).langs,X,(J,Y)=>{var ue=ha(),at=w(ue,!0);S(ue),P(rt=>{ge(ue,rt),Z(at,B(Y))},[()=>o(B(Y))]),F(J,ue)}),S(K),S(G),P(()=>Z(j,B(y).year)),F(u,L)});var b=T(A,2);{var k=u=>{var y=D(),E=O(y);Q(E,17,()=>Array(t-B(f).length),X,(L,I)=>{var C=ba();ee(2),F(L,C)}),F(u,y)};te(b,u=>{B(f).length<t&&u(k)})}S(_);var $=T(_,2);{var g=u=>{var y=_a();P(E=>ge(y,E),[()=>v(x)]),F(u,y)};te($,u=>{x<s.length-1&&u(g)})}P(u=>m=Fe(_,1,"row svelte-b5tl4t",null,m,u),[()=>({"row-rev":B(c)})]),F(d,h)}),S(p),S(l),F(e,l),ie()}var $a=M('<span class="shrink-0 font-mono text-[9px] px-1.5 py-0.5 rounded border"> </span>'),ya=M('<p class="text-sm text-slate-500 dark:text-slate-400 leading-snug line-clamp-2"> </p>'),Sa=M('<li><a target="_blank" rel="noopener noreferrer" class="project-card group flex items-start justify-between gap-4 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 dark:hover:border-amber-500/30 bg-white/80 dark:bg-slate-950/60 transition-all duration-200"><div class="min-w-0 flex-1"><div class="flex items-center gap-2 mb-1"><span class="font-mono text-sm font-semibold text-gray-900 dark:text-white truncate"> </span> <!></div> <!></div> <div class="shrink-0 flex flex-col items-end gap-2 pt-0.5"><!> <span class="font-mono text-[10px] text-slate-400"> </span></div></a></li>'),wa=M('<section class="py-14 px-4"><div class="max-w-[600px] mx-auto"><div class="mb-8 flex items-center gap-3"><span class="font-mono text-xs tracking-[0.25em] uppercase text-amber-500/50">02</span> <span class="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">Recent Projects</span> <span class="flex-1 h-px bg-slate-200 dark:bg-slate-800"></span></div> <ul class="space-y-3"></ul></div></section>');function Aa(e,a){se(a,!0);const t={Python:{bg:"#0a1929",fg:"#60a5fa"},JavaScript:{bg:"#1a1400",fg:"#fbbf24"},TypeScript:{bg:"#091225",fg:"#93c5fd"},Ruby:{bg:"#1a0505",fg:"#f87171"},Shell:{bg:"#011408",fg:"#34d399"},Swift:{bg:"#1a0800",fg:"#fb923c"},"C#":{bg:"#100818",fg:"#c084fc"},CSS:{bg:"#1a0311",fg:"#f472b6"},HTML:{bg:"#180c00",fg:"#fdba74"},Go:{bg:"#001a1f",fg:"#22d3ee"},"C++":{bg:"#0c0e14",fg:"#94a3b8"},Svelte:{bg:"#1a0600",fg:"#ff7043"}};function r(v){const l=t[v]??{bg:"#0c0e14",fg:"#94a3b8"};return`background:${l.bg};color:${l.fg};border-color:${l.fg}40`}function s(v){return new Date(v).toLocaleDateString("en-GB",{month:"short",year:"numeric"})}var n=wa(),i=w(n),o=T(w(i),2);Q(o,21,()=>a.projects,X,(v,l)=>{var p=Sa(),d=w(p),f=w(d),x=w(f),c=w(x),h=w(c,!0);S(c);var _=T(c,2);{var m=y=>{var E=$a(),L=w(E,!0);S(E),P(I=>{ge(E,I),Z(L,B(l).language)},[()=>r(B(l).language)]),F(y,E)};te(_,y=>{B(l).language&&y(m)})}S(x);var A=T(x,2);{var b=y=>{var E=ya(),L=w(E,!0);S(E),P(()=>Z(L,B(l).description)),F(y,E)};te(A,y=>{B(l).description&&y(b)})}S(f);var k=T(f,2),$=w(k);sa($,{size:14,class:"text-slate-400 group-hover:text-amber-500 transition-colors"});var g=T($,2),u=w(g,!0);S(g),S(k),S(d),S(p),P(y=>{Se(d,"href",B(l).url),Z(h,B(l).name),Z(u,y)},[()=>s(B(l).updatedAt)]),F(v,p)}),S(o),S(i),S(n),F(e,n),ie()}var Ba=M('<meta name="description" content="Site Reliability Engineer specialising in DevOps, Cloud Infrastructure, and System Automation."/> <meta property="og:title" content="Tushar Saurabh — SRE"/> <meta property="og:description" content="Site Reliability Engineer at Chubb. DevOps · Cloud · Automation."/> <meta name="twitter:card" content="summary"/>',1),Fa=M('<!> <main class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors"><!> <div id="tech" class="scroll-mt-12"><!></div> <div id="projects" class="scroll-mt-12"><!></div> <footer class="py-8 px-4 border-t border-slate-200 dark:border-slate-800"><div class="max-w-[600px] mx-auto flex items-center justify-between"><span class="font-mono text-xs text-slate-400">Tushar Saurabh</span> <div class="flex items-center gap-4 font-mono text-xs text-slate-400"><a href="https://github.com/tusharacc" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a> <a href="https://linkedin.com/in/tushar-saurabh-49ba8a63" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a> <a href="https://blogs.tusharsaurabh.com" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a></div></div></footer></main>',1);function Ia(e,a){se(a,!0);var t=Fa();Lt(p=>{var d=Ba();It.title="Tushar Saurabh — SRE",ee(6),F(p,d)});var r=O(t);ca(r,{});var s=T(r,2),n=w(s);va(n,{});var i=T(n,2),o=w(i);ka(o,{get data(){return a.data.timeline}}),S(i);var v=T(i,2),l=w(v);Aa(l,{get projects(){return a.data.projects}}),S(v),ee(2),S(s),F(e,t),ie()}export{Ia as component};
