import"../chunks/DsnmJJEf.js";import{af as ze,F as ye,x as ge,aM as De,C as ue,y as T,ai as Ge,z as de,j as A,a0 as rt,A as st,H as it,B as Ne,D as W,M as B,aj as nt,an as ot,G as te,J as lt,aN as he,aO as pe,I as ft,aP as Te,P as Be,V as Me,ar as Ve,ad as je,K as Se,L as Ue,aQ as ct,aR as be,aS as ae,aT as ut,al as dt,aU as vt,aq as gt,aV as ht,T as We,aW as pt,E as bt,aX as _t,au as mt,aG as Fe,aY as xt,aZ as wt,N as $t,a_ as kt,a$ as yt,U as St,b0 as At,b1 as Et,b2 as Nt,b3 as Tt,p as re,b4 as Mt,a as E,q as se,v as C,c as S,e as Ce,k as le,r as k,aJ as U,o as H,aK as Je,b5 as Ct,f as L,t as V,S as Lt,b6 as Q,h as It,$ as Ot}from"../chunks/BDkKsZF2.js";import{i as Ae}from"../chunks/DrpndMpk.js";import{i as Rt,a as Ht,c as Pt,d as Ye,n as zt,b as Dt,o as Gt,s as K}from"../chunks/CCveYkVG.js";import{l as j,p as q,s as ie,i as ee,a as Bt,b as Vt}from"../chunks/CTUOiL7L.js";import{d as Le}from"../chunks/BkMdHSsz.js";function jt(e,a){if(a){const t=document.body;e.autofocus=!0,ze(()=>{document.activeElement===t&&e.focus()})}}function Z(e,a){return a}function Ut(e,a,t){for(var r=e.items,s=[],n=a.length,i=0;i<n;i++)vt(a[i].e,s,!0);var l=n>0&&s.length===0&&t!==null;if(l){var g=t.parentNode;gt(g),g.append(t),r.clear(),P(e,a[0].prev,a[n-1].next)}ht(s,()=>{for(var o=0;o<n;o++){var d=a[o];l||(r.delete(d.k),P(e,d.prev,d.next)),ae(d.e,!l)}})}function X(e,a,t,r,s,n=null){var i=e,l={flags:a,items:new Map,first:null},g=(a&De)!==0;if(g){var o=e;i=T?ue(Ge(o)):o.appendChild(ye())}T&&de();var d=null,v=!1,u=new Map,$=rt(()=>{var _=t();return je(_)?_:_==null?[]:Ve(_)}),c,p;function m(){Wt(p,c,l,u,i,s,a,r,t),n!==null&&(c.length===0?d?Se(d):d=te(()=>n(i)):d!==null&&Ue(d,()=>{d=null}))}ge(()=>{p??=We,c=A($);var _=c.length;if(v&&_===0)return;v=_===0;let N=!1;if(T){var b=st(i)===it;b!==(_===0)&&(i=Ne(),ue(i),W(!1),N=!0)}if(T){for(var x=null,w,f=0;f<_;f++){if(B.nodeType===nt&&B.data===ot){i=B,N=!0,W(!1);break}var h=c[f],y=r(h,f);w=we(B,l,x,null,h,y,f,s,a,t),l.items.set(y,w),x=w}_>0&&ue(Ne())}if(T)_===0&&n&&(d=te(()=>n(i)));else if(lt()){var M=new Set,R=ft;for(f=0;f<_;f+=1){h=c[f],y=r(h,f);var I=l.items.get(y)??u.get(y);I?(a&(he|pe))!==0&&qe(I,h,f,a):(w=we(null,l,null,null,h,y,f,s,a,t,!0),u.set(y,w)),M.add(y)}for(const[O,D]of l.items)M.has(O)||R.skipped_effects.add(D.e);R.add_callback(m)}else m();N&&W(!0),A($)}),T&&(i=B)}function Wt(e,a,t,r,s,n,i,l,g){var o=(i&ut)!==0,d=(i&(he|pe))!==0,v=a.length,u=t.items,$=t.first,c=$,p,m=null,_,N=[],b=[],x,w,f,h;if(o)for(h=0;h<v;h+=1)x=a[h],w=l(x,h),f=u.get(w),f!==void 0&&(f.a?.measure(),(_??=new Set).add(f));for(h=0;h<v;h+=1){if(x=a[h],w=l(x,h),f=u.get(w),f===void 0){var y=r.get(w);if(y!==void 0){r.delete(w),u.set(w,y);var M=m?m.next:c;P(t,m,y),P(t,y,M),_e(y,M,s),m=y}else{var R=c?c.e.nodes_start:s;m=we(R,t,m,m===null?t.first:m.next,x,w,h,n,i,g)}u.set(w,m),N=[],b=[],c=m.next;continue}if(d&&qe(f,x,h,i),(f.e.f&be)!==0&&(Se(f.e),o&&(f.a?.unfix(),(_??=new Set).delete(f))),f!==c){if(p!==void 0&&p.has(f)){if(N.length<b.length){var I=b[0],O;m=I.prev;var D=N[0],oe=N[N.length-1];for(O=0;O<N.length;O+=1)_e(N[O],I,s);for(O=0;O<b.length;O+=1)p.delete(b[O]);P(t,D.prev,oe.next),P(t,m,D),P(t,oe,I),c=I,m=oe,h-=1,N=[],b=[]}else p.delete(f),_e(f,c,s),P(t,f.prev,f.next),P(t,f,m===null?t.first:m.next),P(t,m,f),m=f;continue}for(N=[],b=[];c!==null&&c.k!==w;)(c.e.f&be)===0&&(p??=new Set).add(c),b.push(c),c=c.next;if(c===null)continue;f=c}N.push(f),m=f,c=f.next}if(c!==null||p!==void 0){for(var G=p===void 0?[]:Ve(p);c!==null;)(c.e.f&be)===0&&G.push(c),c=c.next;var z=G.length;if(z>0){var J=(i&De)!==0&&v===0?s:null;if(o){for(h=0;h<z;h+=1)G[h].a?.measure();for(h=0;h<z;h+=1)G[h].a?.fix()}Ut(t,G,J)}}o&&ze(()=>{if(_!==void 0)for(f of _)f.a?.apply()}),e.first=t.first&&t.first.e,e.last=m&&m.e;for(var Y of r.values())ae(Y.e);r.clear()}function qe(e,a,t,r){(r&he)!==0&&Te(e.v,a),(r&pe)!==0?Te(e.i,t):e.i=t}function we(e,a,t,r,s,n,i,l,g,o,d){var v=(g&he)!==0,u=(g&ct)===0,$=v?u?Be(s,!1,!1):Me(s):s,c=(g&pe)===0?i:Me(i),p={i:c,v:$,k:n,a:null,e:null,prev:t,next:r};try{if(e===null){var m=document.createDocumentFragment();m.append(e=ye())}return p.e=te(()=>l(e,$,c,o),T),p.e.prev=t&&t.e,p.e.next=r&&r.e,t===null?d||(a.first=p):(t.next=p,t.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function _e(e,a,t){for(var r=e.next?e.next.e.nodes_start:t,s=a?a.e.nodes_start:t,n=e.e.nodes_start;n!==null&&n!==r;){var i=dt(n);s.before(n),n=i}}function P(e,a,t){a===null?e.first=t:(a.next=t,a.e.next=t&&t.e),t!==null&&(t.prev=a,t.e.prev=a&&a.e)}function F(e,a,t,r,s){T&&de();var n=a.$$slots?.[t],i=!1;n===!0&&(n=a.children,i=!0),n===void 0||n(e,i?()=>r:r)}function Ft(e,a,t,r,s,n){let i=T;T&&de();var l,g,o=null;T&&B.nodeType===pt&&(o=B,de());var d=T?B:e,v;ge(()=>{const u=a()||null;var $=_t;u!==l&&(v&&(u===null?Ue(v,()=>{v=null,g=null}):u===g?Se(v):ae(v)),u&&u!==g&&(v=te(()=>{if(o=T?o:document.createElementNS($,u),mt(o,o),r){T&&Rt(u)&&o.append(document.createComment(""));var c=T?Ge(o):o.appendChild(ye());T&&(c===null?W(!1):ue(c)),r(o,c)}We.nodes_end=o,d.before(o)})),l=u,l&&(g=l))},bt),i&&(W(!0),ue(d))}function Jt(e,a){var t=void 0,r;ge(()=>{t!==(t=a())&&(r&&(ae(r),r=null),t&&(r=te(()=>{Fe(()=>t(e))})))})}function Ke(e){var a,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(a=0;a<s;a++)e[a]&&(t=Ke(e[a]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Yt(){for(var e,a,t=0,r="",s=arguments.length;t<s;t++)(e=arguments[t])&&(a=Ke(e))&&(r&&(r+=" "),r+=a);return r}function qt(e){return typeof e=="object"?Yt(e):e??""}const Ie=[...` 	
\r\f \v\uFEFF`];function Kt(e,a,t){var r=e==null?"":""+e;if(a&&(r=r?r+" "+a:a),t){for(var s in t)if(t[s])r=r?r+" "+s:s;else if(r.length)for(var n=s.length,i=0;(i=r.indexOf(s,i))>=0;){var l=i+n;(i===0||Ie.includes(r[i-1]))&&(l===r.length||Ie.includes(r[l]))?r=(i===0?"":r.substring(0,i))+r.substring(l+1):i=l}}return r===""?null:r}function Oe(e,a=!1){var t=a?" !important;":";",r="";for(var s in e){var n=e[s];n!=null&&n!==""&&(r+=" "+s+": "+n+t)}return r}function me(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Zt(e,a){if(a){var t="",r,s;if(Array.isArray(a)?(r=a[0],s=a[1]):r=a,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var n=!1,i=0,l=!1,g=[];r&&g.push(...Object.keys(r).map(me)),s&&g.push(...Object.keys(s).map(me));var o=0,d=-1;const p=e.length;for(var v=0;v<p;v++){var u=e[v];if(l?u==="/"&&e[v-1]==="*"&&(l=!1):n?n===u&&(n=!1):u==="/"&&e[v+1]==="*"?l=!0:u==='"'||u==="'"?n=u:u==="("?i++:u===")"&&i--,!l&&n===!1&&i===0){if(u===":"&&d===-1)d=v;else if(u===";"||v===p-1){if(d!==-1){var $=me(e.substring(o,d).trim());if(!g.includes($)){u!==";"&&v++;var c=e.substring(o,v).trim();t+=" "+c+";"}}o=v+1,d=-1}}}}return r&&(t+=Oe(r)),s&&(t+=Oe(s,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Ee(e,a,t,r,s,n){var i=e.__className;if(T||i!==t||i===void 0){var l=Kt(t,r,n);(!T||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):a?e.className=l:e.setAttribute("class",l)),e.__className=t}else if(n&&s!==n)for(var g in n){var o=!!n[g];(s==null||o!==!!s[g])&&e.classList.toggle(g,o)}return n}function xe(e,a={},t,r){for(var s in t){var n=t[s];a[s]!==n&&(t[s]==null?e.style.removeProperty(s):e.style.setProperty(s,n,r))}}function ve(e,a,t,r){var s=e.__style;if(T||s!==a){var n=Zt(a,r);(!T||n!==e.getAttribute("style"))&&(n==null?e.removeAttribute("style"):e.style.cssText=n),e.__style=a}else r&&(Array.isArray(r)?(xe(e,t?.[0],r[0]),xe(e,t?.[1],r[1],"important")):xe(e,t,r));return r}function $e(e,a,t=!1){if(e.multiple){if(a==null)return;if(!je(a))return xt();for(var r of e.options)r.selected=a.includes(Re(r));return}for(r of e.options){var s=Re(r);if(wt(s,a)){r.selected=!0;return}}(!t||a!==void 0)&&(e.selectedIndex=-1)}function Xt(e){var a=new MutationObserver(()=>{$e(e,e.__value)});a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),$t(()=>{a.disconnect()})}function Re(e){return"__value"in e?e.__value:e.value}const fe=Symbol("class"),ce=Symbol("style"),Ze=Symbol("is custom element"),Xe=Symbol("is html");function Qt(e,a){a?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ke(e,a,t,r){var s=Qe(e);T&&(s[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||s[a]!==(s[a]=t)&&(a==="loading"&&(e[Nt]=t),t==null?e.removeAttribute(a):typeof t!="string"&&et(e).includes(a)?e[a]=t:e.setAttribute(a,t))}function ea(e,a,t,r,s=!1){var n=Qe(e),i=n[Ze],l=!n[Xe];let g=T&&i;g&&W(!1);var o=a||{},d=e.tagName==="OPTION";for(var v in a)v in t||(t[v]=null);t.class?t.class=qt(t.class):t[fe]&&(t.class=null),t[ce]&&(t.style??=null);var u=et(e);for(const b in t){let x=t[b];if(d&&b==="value"&&x==null){e.value=e.__value="",o[b]=x;continue}if(b==="class"){var $=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ee(e,$,x,r,a?.[fe],t[fe]),o[b]=x,o[fe]=t[fe];continue}if(b==="style"){ve(e,x,a?.[ce],t[ce]),o[b]=x,o[ce]=t[ce];continue}var c=o[b];if(!(x===c&&!(x===void 0&&e.hasAttribute(b)))){o[b]=x;var p=b[0]+b[1];if(p!=="$$")if(p==="on"){const w={},f="$$"+b;let h=b.slice(2);var m=Dt(h);if(Ht(h)&&(h=h.slice(0,-7),w.capture=!0),!m&&c){if(x!=null)continue;e.removeEventListener(h,o[f],w),o[f]=null}if(x!=null)if(m)e[`__${h}`]=x,Ye([h]);else{let y=function(M){o[b].call(this,M)};o[f]=Pt(h,e,y,w)}else m&&(e[`__${h}`]=void 0)}else if(b==="style")ke(e,b,x);else if(b==="autofocus")jt(e,!!x);else if(!i&&(b==="__value"||b==="value"&&x!=null))e.value=e.__value=x;else if(b==="selected"&&d)Qt(e,x);else{var _=b;l||(_=zt(_));var N=_==="defaultValue"||_==="defaultChecked";if(x==null&&!i&&!N)if(n[b]=null,_==="value"||_==="checked"){let w=e;const f=a===void 0;if(_==="value"){let h=w.defaultValue;w.removeAttribute(_),w.defaultValue=h,w.value=w.__value=f?h:null}else{let h=w.defaultChecked;w.removeAttribute(_),w.defaultChecked=h,w.checked=f?h:!1}}else e.removeAttribute(b);else N||u.includes(_)&&(i||typeof x!="string")?(e[_]=x,_ in n&&(n[_]=St)):typeof x!="function"&&ke(e,_,x)}}}return g&&W(!0),o}function He(e,a,t=[],r=[],s,n=!1){kt(t,r,i=>{var l=void 0,g={},o=e.nodeName==="SELECT",d=!1;if(ge(()=>{var u=a(...i.map(A)),$=ea(e,l,u,s,n);d&&o&&"value"in u&&$e(e,u.value);for(let p of Object.getOwnPropertySymbols(g))u[p]||ae(g[p]);for(let p of Object.getOwnPropertySymbols(u)){var c=u[p];p.description===yt&&(!l||c!==l[p])&&(g[p]&&ae(g[p]),g[p]=te(()=>Jt(e,()=>c))),$[p]=c}l=$}),o){var v=e;Fe(()=>{$e(v,l.value,!0),Xt(v)})}d=!0})}function Qe(e){return e.__attributes??={[Ze]:e.nodeName.includes("-"),[Xe]:e.namespaceURI===At}}var Pe=new Map;function et(e){var a=Pe.get(e.nodeName);if(a)return a;Pe.set(e.nodeName,a=[]);for(var t,r=e,s=Element.prototype;s!==r;){t=Tt(r);for(var n in t)t[n].set&&a.push(n);r=Et(r)}return a}/**
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
 */const ta={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var aa=Mt("<svg><!><!></svg>");function ne(e,a){const t=j(a,["children","$$slots","$$events","$$legacy"]),r=j(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);re(a,!1);let s=q(a,"name",8,void 0),n=q(a,"color",8,"currentColor"),i=q(a,"size",8,24),l=q(a,"strokeWidth",8,2),g=q(a,"absoluteStrokeWidth",8,!1),o=q(a,"iconNode",24,()=>[]);const d=(...c)=>c.filter((p,m,_)=>!!p&&_.indexOf(p)===m).join(" ");Ae();var v=aa();He(v,(c,p)=>({...ta,...r,width:i(),height:i(),stroke:n(),"stroke-width":c,class:p}),[()=>(le(g()),le(l()),le(i()),Ce(()=>g()?Number(l())*24/Number(i()):l())),()=>(le(s()),le(t),Ce(()=>d("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)))]);var u=S(v);X(u,1,o,Z,(c,p)=>{var m=Je(()=>Ct(A(p),2));let _=()=>A(m)[0],N=()=>A(m)[1];var b=U(),x=H(b);Ft(x,_,!0,(w,f)=>{He(w,()=>({...N()}))}),E(c,b)});var $=C(u);F($,a,"default",{}),k(v),E(e,v),se()}function ra(e,a){const t=j(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ne(e,ie({name:"external-link"},()=>t,{get iconNode(){return r},children:(s,n)=>{var i=U(),l=H(i);F(l,a,"default",{}),E(s,i)},$$slots:{default:!0}}))}function sa(e,a){const t=j(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];ne(e,ie({name:"file-text"},()=>t,{get iconNode(){return r},children:(s,n)=>{var i=U(),l=H(i);F(l,a,"default",{}),E(s,i)},$$slots:{default:!0}}))}function ia(e,a){const t=j(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];ne(e,ie({name:"github"},()=>t,{get iconNode(){return r},children:(s,n)=>{var i=U(),l=H(i);F(l,a,"default",{}),E(s,i)},$$slots:{default:!0}}))}function na(e,a){const t=j(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];ne(e,ie({name:"linkedin"},()=>t,{get iconNode(){return r},children:(s,n)=>{var i=U(),l=H(i);F(l,a,"default",{}),E(s,i)},$$slots:{default:!0}}))}function oa(e,a){const t=j(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];ne(e,ie({name:"moon"},()=>t,{get iconNode(){return r},children:(s,n)=>{var i=U(),l=H(i);F(l,a,"default",{}),E(s,i)},$$slots:{default:!0}}))}function la(e,a){const t=j(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];ne(e,ie({name:"sun"},()=>t,{get iconNode(){return r},children:(s,n)=>{var i=U(),l=H(i);F(l,a,"default",{}),E(s,i)},$$slots:{default:!0}}))}var fa=L('<nav class="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 z-50"><div class="max-w-[600px] mx-auto px-4 flex items-center justify-between h-12"><a href="#home" class="font-mono text-sm font-semibold text-gray-900 dark:text-white">ts</a> <div class="flex items-center gap-6"><a href="#tech" class="font-mono text-xs text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors">tech</a> <a href="#projects" class="font-mono text-xs text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors">projects</a> <button class="text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Toggle dark mode"><!></button></div></div></nav>');function ca(e,a){re(a,!1);const[t,r]=Bt(),s=()=>Vt(Le,"$darkMode",t);function n(){Le.update($=>!$)}Ae();var i=fa(),l=S(i),g=C(S(l),2),o=C(S(g),4);o.__click=n;var d=S(o);{var v=$=>{la($,{size:15})},u=$=>{oa($,{size:15})};ee(d,$=>{s()?$(v):$(u,!1)})}k(o),k(g),k(l),k(i),E(e,i),se(),r()}Ye(["click"]);var ua=L('<section id="home" class="min-h-[60vh] flex items-center justify-center pt-16 px-4"><div class="max-w-2xl w-full"><div><p class="font-mono text-xs tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400">Site Reliability Engineer</p> <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">Tushar Saurabh</h1> <p class="text-lg text-slate-500 dark:text-slate-400 font-mono">Chubb · DevOps · Cloud · Automation</p> <div class="flex items-center gap-5 pt-4"><a href="https://github.com/tusharacc" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub"><!> <span>GitHub</span></a> <a href="https://linkedin.com/in/tushar-saurabh-49ba8a63" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="LinkedIn"><!> <span>LinkedIn</span></a> <a href="https://blogs.tusharsaurabh.com" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Blog"><!> <span>Blog</span></a></div></div></div></section>');function da(e,a){re(a,!1);let t=Be(!1);Gt(()=>{Lt(t,!0)}),Ae();var r=ua(),s=S(r),n=S(s);let i;var l=C(S(n),6),g=S(l),o=S(g);ia(o,{size:18}),Q(2),k(g);var d=C(g,2),v=S(d);na(v,{size:18}),Q(2),k(d);var u=C(d,2),$=S(u);sa($,{size:18}),Q(2),k(u),k(l),k(n),k(s),k(r),V(c=>i=Ee(n,1,"space-y-3 transition-all duration-700",null,i,c),[()=>({"opacity-0":!A(t),"translate-y-4":!A(t)})]),E(e,r),se()}var va=L('<div class="trace-h svelte-w5x0w9" aria-hidden="true"></div>'),ga=L('<span class="chip svelte-w5x0w9"> </span>'),ha=L('<!> <div class="node svelte-w5x0w9"><div class="yr svelte-w5x0w9"> </div> <div class="chips svelte-w5x0w9"></div></div>',1),pa=L('<div class="trace-h svelte-w5x0w9" aria-hidden="true"></div> <div class="node node-phantom svelte-w5x0w9" aria-hidden="true"></div>',1),ba=L('<div class="turn svelte-w5x0w9" aria-hidden="true"></div>'),_a=L("<div><!> <!></div> <!>",1),ma=L('<section class="py-14 px-4"><div class="mb-8 flex items-center gap-3 max-w-[600px] mx-auto"><span class="font-mono text-xs tracking-[0.25em] uppercase text-amber-500/50">01</span> <span class="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">Tech Evolution</span> <span class="flex-1 h-px bg-slate-200 dark:bg-slate-800"></span></div> <div class="max-w-[600px] mx-auto"></div></section>');function xa(e,a){re(a,!0);const t=3,r=a.data.filter(d=>d.langs.length>0),s=[];for(let d=0;d<r.length;d+=t)s.push(r.slice(d,d+t));const n={Python:{bg:"#0a1929",fg:"#60a5fa"},JavaScript:{bg:"#1a1400",fg:"#fbbf24"},TypeScript:{bg:"#091225",fg:"#93c5fd"},Ruby:{bg:"#1a0505",fg:"#f87171"},Shell:{bg:"#011408",fg:"#34d399"},Swift:{bg:"#1a0800",fg:"#fb923c"},"C#":{bg:"#100818",fg:"#c084fc"},CSS:{bg:"#1a0311",fg:"#f472b6"},HTML:{bg:"#180c00",fg:"#fdba74"},Go:{bg:"#001a1f",fg:"#22d3ee"},"C++":{bg:"#0c0e14",fg:"#94a3b8"},Svelte:{bg:"#1a0600",fg:"#ff7043"},AppleScript:{bg:"#080818",fg:"#a5b4fc"},Jupyter:{bg:"#140c00",fg:"#f59e0b"},AngularJS:{bg:"#1a0000",fg:"#fca5a5"}};function i(d){const v=n[d]??{bg:"#0c0e14",fg:"#94a3b8"};return`background:${v.bg};color:${v.fg};border-color:${v.fg}40`}function l(d){const v=d%2===0,u="height:24px;width:calc(33.333% + 8px);border-bottom:1px dashed rgba(245,158,11,0.3);";return v?u+"margin-left:auto;border-right:1px dashed rgba(245,158,11,0.3);border-bottom-right-radius:10px;":u+"margin-right:auto;border-left:1px dashed rgba(245,158,11,0.3);border-bottom-left-radius:10px;"}var g=ma(),o=C(S(g),2);X(o,21,()=>s,Z,(d,v,u)=>{const $=Je(()=>u%2===1);var c=_a(),p=H(c);let m;var _=S(p);X(_,17,()=>A(v),Z,(f,h,y)=>{var M=ha(),R=H(M);{var I=z=>{var J=va();E(z,J)};ee(R,z=>{y>0&&z(I)})}var O=C(R,2),D=S(O),oe=S(D,!0);k(D);var G=C(D,2);X(G,21,()=>A(h).langs,Z,(z,J)=>{var Y=ga(),tt=S(Y,!0);k(Y),V(at=>{ve(Y,at),K(tt,A(J))},[()=>i(A(J))]),E(z,Y)}),k(G),k(O),V(()=>K(oe,A(h).year)),E(f,M)});var N=C(_,2);{var b=f=>{var h=U(),y=H(h);X(y,17,()=>Array(t-A(v).length),Z,(M,R)=>{var I=pa();Q(2),E(M,I)}),E(f,h)};ee(N,f=>{A(v).length<t&&f(b)})}k(p);var x=C(p,2);{var w=f=>{var h=ba();V(y=>ve(h,y),[()=>l(u)]),E(f,h)};ee(x,f=>{u<s.length-1&&f(w)})}V(f=>m=Ee(p,1,"row svelte-w5x0w9",null,m,f),[()=>({"row-rev":A($)})]),E(d,c)}),k(o),k(g),E(e,g),se()}var wa=L('<span class="shrink-0 font-mono text-[9px] px-1.5 py-0.5 rounded border"> </span>'),$a=L('<p class="text-sm text-slate-500 dark:text-slate-400 leading-snug line-clamp-2"> </p>'),ka=L('<li><a target="_blank" rel="noopener noreferrer" class="project-card group flex items-start justify-between gap-4 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 dark:hover:border-amber-500/30 bg-white/80 dark:bg-slate-950/60 transition-all duration-200"><div class="min-w-0 flex-1"><div class="flex items-center gap-2 mb-1"><span class="font-mono text-sm font-semibold text-gray-900 dark:text-white truncate"> </span> <!></div> <!></div> <div class="shrink-0 flex flex-col items-end gap-2 pt-0.5"><!> <span class="font-mono text-[10px] text-slate-400"> </span></div></a></li>'),ya=L('<section class="py-14 px-4"><div class="max-w-[600px] mx-auto"><div class="mb-8 flex items-center gap-3"><span class="font-mono text-xs tracking-[0.25em] uppercase text-amber-500/50">02</span> <span class="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">Recent Projects</span> <span class="flex-1 h-px bg-slate-200 dark:bg-slate-800"></span></div> <ul class="space-y-3"></ul></div></section>');function Sa(e,a){re(a,!0);const t={Python:{bg:"#0a1929",fg:"#60a5fa"},JavaScript:{bg:"#1a1400",fg:"#fbbf24"},TypeScript:{bg:"#091225",fg:"#93c5fd"},Ruby:{bg:"#1a0505",fg:"#f87171"},Shell:{bg:"#011408",fg:"#34d399"},Swift:{bg:"#1a0800",fg:"#fb923c"},"C#":{bg:"#100818",fg:"#c084fc"},CSS:{bg:"#1a0311",fg:"#f472b6"},HTML:{bg:"#180c00",fg:"#fdba74"},Go:{bg:"#001a1f",fg:"#22d3ee"},"C++":{bg:"#0c0e14",fg:"#94a3b8"},Svelte:{bg:"#1a0600",fg:"#ff7043"}};function r(g){const o=t[g]??{bg:"#0c0e14",fg:"#94a3b8"};return`background:${o.bg};color:${o.fg};border-color:${o.fg}40`}function s(g){return new Date(g).toLocaleDateString("en-GB",{month:"short",year:"numeric"})}var n=ya(),i=S(n),l=C(S(i),2);X(l,21,()=>a.projects,Z,(g,o)=>{var d=ka(),v=S(d),u=S(v),$=S(u),c=S($),p=S(c,!0);k(c);var m=C(c,2);{var _=y=>{var M=wa(),R=S(M,!0);k(M),V(I=>{ve(M,I),K(R,A(o).language)},[()=>r(A(o).language)]),E(y,M)};ee(m,y=>{A(o).language&&y(_)})}k($);var N=C($,2);{var b=y=>{var M=$a(),R=S(M,!0);k(M),V(()=>K(R,A(o).description)),E(y,M)};ee(N,y=>{A(o).description&&y(b)})}k(u);var x=C(u,2),w=S(x);ra(w,{size:14,class:"text-slate-400 group-hover:text-amber-500 transition-colors"});var f=C(w,2),h=S(f,!0);k(f),k(x),k(v),k(d),V(y=>{ke(v,"href",A(o).url),K(p,A(o).name),K(h,y)},[()=>s(A(o).updatedAt)]),E(g,d)}),k(l),k(i),k(n),E(e,n),se()}var Aa=L('<meta name="description" content="Site Reliability Engineer specialising in DevOps, Cloud Infrastructure, and System Automation."/> <meta property="og:title" content="Tushar Saurabh — SRE"/> <meta property="og:description" content="Site Reliability Engineer at Chubb. DevOps · Cloud · Automation."/> <meta name="twitter:card" content="summary"/>',1),Ea=L('<!> <main class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors"><!> <div id="tech" class="scroll-mt-12"><!></div> <div id="projects" class="scroll-mt-12"><!></div> <footer class="py-8 px-4 border-t border-slate-200 dark:border-slate-800"><div class="max-w-[600px] mx-auto flex items-center justify-between"><span class="font-mono text-xs text-slate-400">Tushar Saurabh</span> <div class="flex items-center gap-4 font-mono text-xs text-slate-400"><a href="https://github.com/tusharacc" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a> <a href="https://linkedin.com/in/tushar-saurabh-49ba8a63" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a> <a href="https://blogs.tusharsaurabh.com" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a></div></div></footer></main>',1);function Oa(e,a){re(a,!0);var t=Ea();It(d=>{var v=Aa();Ot.title="Tushar Saurabh — SRE",Q(6),E(d,v)});var r=H(t);ca(r,{});var s=C(r,2),n=S(s);da(n,{});var i=C(n,2),l=S(i);xa(l,{get data(){return a.data.timeline}}),k(i);var g=C(i,2),o=S(g);Sa(o,{get projects(){return a.data.projects}}),k(g),Q(2),k(s),E(e,t),se()}export{Oa as component};
