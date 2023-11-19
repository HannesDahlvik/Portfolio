var J=Object.defineProperty;var K=(t,e,n)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var R=(t,e,n)=>(K(t,typeof e!="symbol"?e+"":e,n),n);import{n as w,r as v,m as P,k as j,i as Q,p as M,q as X,v as Y,w as Z,x as tt,y as O,z as et,A as nt,B as it}from"./scheduler.ce07a0f8.js";const q=typeof window<"u";let rt=q?()=>window.performance.now():()=>Date.now(),z=q?t=>requestAnimationFrame(t):w;const g=new Set;function I(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&z(I)}function st(t){let e;return g.size===0&&z(I),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let S=!1;function lt(){S=!0}function ot(){S=!1}function at(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&i.push(_)}e=i}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let i=0;i<e.length;i++){const a=e[i].claim_order,_=(o>0&&e[n[o]].claim_order<=a?o+1:at(1,o,m=>e[n[m]].claim_order,a))-1;r[i]=n[_]+1;const u=_+1;n[u]=i,o=Math.max(u,o)}const c=[],l=[];let s=e.length-1;for(let i=n[o]+1;i!=0;i=r[i-1]){for(c.push(e[i-1]);s>=i;s--)l.push(e[s]);s--}for(;s>=0;s--)l.push(e[s]);c.reverse(),l.sort((i,a)=>i.claim_order-a.claim_order);for(let i=0,a=0;i<l.length;i++){for(;a<c.length&&l[i].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(l[i],_)}}function ut(t,e){t.appendChild(e)}function F(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ft(t){const e=U("style");return e.textContent="/* empty */",_t(F(t),e),e.sheet}function _t(t,e){return ut(t.head||t,e),e.sheet}function dt(t,e){if(S){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){S&&!n?dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function Pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function zt(){return H(" ")}function Ht(){return H("")}function ht(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mt(t,e){for(const n in e)ht(t,n,e[n])}function Ot(t){return t.dataset.svelteH}function pt(t){return Array.from(t.childNodes)}function $t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,e,n,r,o=!1){$t(t);const c=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(e(s)){const i=n(s);return i===void 0?t.splice(l,1):t[l]=i,o||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(e(s)){const i=n(s);return i===void 0?t.splice(l,1):t[l]=i,o?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return r()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function W(t,e,n,r){return V(t,o=>o.nodeName===e,o=>{const c=[];for(let l=0;l<o.attributes.length;l++){const s=o.attributes[l];n[s.name]||c.push(s.name)}c.forEach(l=>o.removeAttribute(l))},()=>r(e))}function kt(t,e,n){return W(t,e,n,U)}function qt(t,e,n){return W(t,e,n,mt)}function yt(t,e){return V(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>H(e),!0)}function It(t){return yt(t," ")}function Ft(t,e){e=""+e,t.data!==e&&(t.data=e)}function Lt(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function gt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function Ut(t,e){const n=[];let r=0;for(const o of e.childNodes)if(o.nodeType===8){const c=o.textContent.trim();c===`HEAD_${t}_END`?(r-=1,n.push(o)):c===`HEAD_${t}_START`&&(r+=1,n.push(o))}else r>0&&n.push(o);return n}function Vt(t,e){return new t(e)}const A=new Map;let E=0;function xt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function wt(t,e){const n={stylesheet:ft(e),rules:{}};return A.set(t,n),n}function k(t,e,n,r,o,c,l,s=0){const i=16.666/r;let a=`{
`;for(let d=0;d<=1;d+=i){const y=e+(n-e)*c(d);a+=d*100+`%{${l(y,1-y)}}
`}const _=a+`100% {${l(n,1-n)}}
}`,u=`__svelte_${xt(_)}_${s}`,m=F(t),{stylesheet:$,rules:f}=A.get(m)||wt(m,t);f[u]||(f[u]=!0,$.insertRule(`@keyframes ${u} ${_}`,$.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${u} ${r}ms linear ${o}ms 1 both`,E+=1,u}function vt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),o=n.length-r.length;o&&(t.style.animation=r.join(", "),E-=o,E||Nt())}function Nt(){z(()=>{E||(A.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&L(e)}),A.clear())})}let x;function bt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function T(t,e,n){t.dispatchEvent(gt(`${e?"intro":"outro"}${n}`))}const b=new Set;let p;function Wt(){p={r:0,c:[],p}}function Gt(){p.r||v(p.c),p=p.p}function At(t,e){t&&t.i&&(b.delete(t),t.i(e))}function Jt(t,e,n,r){if(t&&t.o){if(b.has(t))return;b.add(t),p.c.push(()=>{b.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Et={duration:0};function Kt(t,e,n,r){let c=e(t,n,{direction:"both"}),l=r?0:1,s=null,i=null,a=null,_;function u(){a&&vt(t,a)}function m(f,h){const d=f.b-l;return h*=Math.abs(d),{a:l,b:f.b,d,duration:h,start:f.start,end:f.start+h,group:f.group}}function $(f){const{delay:h=0,duration:d=300,easing:y=Q,tick:C=w,css:D}=c||Et,B={start:rt()+h,b:f};f||(B.group=p,p.r+=1),"inert"in t&&(f?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),s||i?i=B:(D&&(u(),a=k(t,l,f,d,h,y,D)),f&&C(0,1),s=m(B,d),j(()=>T(t,f,"start")),st(N=>{if(i&&N>i.start&&(s=m(i,d),i=null,T(t,s.b,"start"),D&&(u(),a=k(t,l,s.b,s.duration,0,y,c.css))),s){if(N>=s.end)C(l=s.b,1-l),T(t,s.b,"end"),i||(s.b?u():--s.group.r||v(s.group.c)),s=null;else if(N>=s.start){const G=N-s.start;l=s.a+s.d*y(G/s.duration),C(l,1-l)}}return!!(s||i)}))}return{run(f){P(c)?bt().then(()=>{c=c({direction:f?"in":"out"}),$(f)}):$(f)},end(){u(),s=i=null}}}function Qt(t){t&&t.c()}function Xt(t,e){t&&t.l(e)}function St(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),j(()=>{const c=t.$$.on_mount.map(et).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...c):v(c),t.$$.on_mount=[]}),o.forEach(j)}function Ct(t,e){const n=t.$$;n.fragment!==null&&(Z(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(nt.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Yt(t,e,n,r,o,c,l=null,s=[-1]){const i=tt;O(t);const a=t.$$={fragment:null,ctx:[],props:c,update:w,not_equal:o,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:e.target||i.$$.root};l&&l(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(u,m,...$)=>{const f=$.length?$[0]:m;return a.ctx&&o(a.ctx[u],a.ctx[u]=f)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](f),_&&Dt(t,u)),m}):[],a.update(),_=!0,v(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){lt();const u=pt(e.target);a.fragment&&a.fragment.l(u),u.forEach(L)}else a.fragment&&a.fragment.c();e.intro&&At(t.$$.fragment),St(t,e.target,e.anchor),ot(),X()}O(i)}class Zt{constructor(){R(this,"$$");R(this,"$$set")}$destroy(){Ct(this,1),this.$destroy=w}$on(e,n){if(!P(n))return w;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Y(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Bt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Bt);export{Mt as A,Pt as B,Kt as C,Ot as D,Ut as E,Zt as S,jt as a,Gt as b,It as c,At as d,Ht as e,L as f,U as g,kt as h,Yt as i,pt as j,ht as k,Lt as l,H as m,yt as n,Ft as o,Wt as p,Vt as q,Qt as r,zt as s,Jt as t,Xt as u,St as v,Ct as w,dt as x,mt as y,qt as z};