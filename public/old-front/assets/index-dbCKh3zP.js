(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Zp(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const rt={},Zr=[],Wn=()=>{},iP=()=>!1,th=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),eg=t=>t.startsWith("onUpdate:"),zt=Object.assign,tg=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rP=Object.prototype.hasOwnProperty,Ve=(t,e)=>rP.call(t,e),ue=Array.isArray,eo=t=>vl(t)==="[object Map]",nh=t=>vl(t)==="[object Set]",Hy=t=>vl(t)==="[object Date]",_e=t=>typeof t=="function",Pt=t=>typeof t=="string",vi=t=>typeof t=="symbol",et=t=>t!==null&&typeof t=="object",dT=t=>(et(t)||_e(t))&&_e(t.then)&&_e(t.catch),fT=Object.prototype.toString,vl=t=>fT.call(t),oP=t=>vl(t).slice(8,-1),pT=t=>vl(t)==="[object Object]",ng=t=>Pt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,jc=Zp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sh=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},aP=/-(\w)/g,Es=sh(t=>t.replace(aP,(e,n)=>n?n.toUpperCase():"")),lP=/\B([A-Z])/g,xo=sh(t=>t.replace(lP,"-$1").toLowerCase()),ih=sh(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bc=sh(t=>t?`on${ih(t)}`:""),Ei=(t,e)=>!Object.is(t,e),Wc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},nu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qy;const gT=()=>qy||(qy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rh(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Pt(s)?dP(s):rh(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Pt(t)||et(t))return t}const cP=/;(?![^(]*\))/g,uP=/:([^]+)/,hP=/\/\*[^]*?\*\//g;function dP(t){const e={};return t.replace(hP,"").split(cP).forEach(n=>{if(n){const s=n.split(uP);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function oh(t){let e="";if(Pt(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const s=oh(t[n]);s&&(e+=s+" ")}else if(et(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fP="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pP=Zp(fP);function mT(t){return!!t||t===""}function gP(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=ah(t[s],e[s]);return n}function ah(t,e){if(t===e)return!0;let n=Hy(t),s=Hy(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=vi(t),s=vi(e),n||s)return t===e;if(n=ue(t),s=ue(e),n||s)return n&&s?gP(t,e):!1;if(n=et(t),s=et(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ah(t[o],e[o]))return!1}}return String(t)===String(e)}function mP(t,e){return t.findIndex(n=>ah(n,e))}const _P=t=>Pt(t)?t:t==null?"":ue(t)||et(t)&&(t.toString===fT||!_e(t.toString))?JSON.stringify(t,_T,2):String(t),_T=(t,e)=>e&&e.__v_isRef?_T(t,e.value):eo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ud(s,r)+" =>"]=i,n),{})}:nh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ud(n))}:vi(e)?Ud(e):et(e)&&!ue(e)&&!pT(e)?String(e):e,Ud=(t,e="")=>{var n;return vi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Sn;class yT{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Sn,!e&&Sn&&(this.index=(Sn.scopes||(Sn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Sn;try{return Sn=this,e()}finally{Sn=n}}}on(){Sn=this}off(){Sn=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function lh(t){return new yT(t)}function yP(t,e=Sn){e&&e.active&&e.effects.push(t)}function ch(){return Sn}function sg(t){Sn&&Sn.cleanups.push(t)}let rr;class ig{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,yP(this,i)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Tr();for(const e of this.deps)if(e.computed&&(vP(e.computed),this._dirtyLevel>=2))break;br(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=hi,n=rr;try{return hi=!0,rr=this,this._runnings++,zy(this),this.fn()}finally{Gy(this),this._runnings--,rr=n,hi=e}}stop(){var e;this.active&&(zy(this),Gy(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function vP(t){return t.value}function zy(t){t._trackId++,t._depsLength=0}function Gy(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)vT(t.deps[e],t);t.deps.length=t._depsLength}}function vT(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let hi=!0,Mf=0;const ET=[];function Tr(){ET.push(hi),hi=!1}function br(){const t=ET.pop();hi=t===void 0?!0:t}function rg(){Mf++}function og(){for(Mf--;!Mf&&Lf.length;)Lf.shift()()}function wT(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&vT(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Lf=[];function TT(t,e,n){rg();for(const s of t.keys())if(!(!s.allowRecurse&&s._runnings)&&s._dirtyLevel<e&&(!s._runnings||e!==2)){const i=s._dirtyLevel;s._dirtyLevel=e,i===0&&(!s._queryings||e!==2)&&(s.trigger(),s.scheduler&&Lf.push(s.scheduler))}og()}const bT=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},su=new WeakMap,or=Symbol(""),Ff=Symbol("");function wn(t,e,n){if(hi&&rr){let s=su.get(t);s||su.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=bT(()=>s.delete(n))),wT(rr,i)}}function $s(t,e,n,s,i,r){const o=su.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ue(t)){const l=Number(s);o.forEach((u,h)=>{(h==="length"||!vi(h)&&h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ue(t)?ng(n)&&a.push(o.get("length")):(a.push(o.get(or)),eo(t)&&a.push(o.get(Ff)));break;case"delete":ue(t)||(a.push(o.get(or)),eo(t)&&a.push(o.get(Ff)));break;case"set":eo(t)&&a.push(o.get(or));break}rg();for(const l of a)l&&TT(l,3);og()}function EP(t,e){var n;return(n=su.get(t))==null?void 0:n.get(e)}const wP=Zp("__proto__,__v_isRef,__isVue"),IT=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vi)),Ky=TP();function TP(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=je(this);for(let r=0,o=this.length;r<o;r++)wn(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(je)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Tr(),rg();const s=je(this)[e].apply(this,n);return og(),br(),s}}),t}function bP(t){const e=je(this);return wn(e,"has",t),e.hasOwnProperty(t)}class CT{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?LP:PT:r?RT:ST).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ue(e);if(!i){if(o&&Ve(Ky,n))return Reflect.get(Ky,n,s);if(n==="hasOwnProperty")return bP}const a=Reflect.get(e,n,s);return(vi(n)?IT.has(n):wP(n))||(i||wn(e,"get",n),r)?a:bt(a)?o&&ng(n)?a:a.value:et(a)?i?El(a):hh(a):a}}class AT extends CT{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const l=po(r);if(!Kr(s)&&!po(s)&&(r=je(r),s=je(s)),!ue(e)&&bt(r)&&!bt(s))return l?!1:(r.value=s,!0)}const o=ue(e)&&ng(n)?Number(n)<e.length:Ve(e,n),a=Reflect.set(e,n,s,i);return e===je(i)&&(o?Ei(s,r)&&$s(e,"set",n,s):$s(e,"add",n,s)),a}deleteProperty(e,n){const s=Ve(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&$s(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!vi(n)||!IT.has(n))&&wn(e,"has",n),s}ownKeys(e){return wn(e,"iterate",ue(e)?"length":or),Reflect.ownKeys(e)}}class IP extends CT{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const CP=new AT,AP=new IP,SP=new AT(!0),ag=t=>t,uh=t=>Reflect.getPrototypeOf(t);function fc(t,e,n=!1,s=!1){t=t.__v_raw;const i=je(t),r=je(e);n||(Ei(e,r)&&wn(i,"get",e),wn(i,"get",r));const{has:o}=uh(i),a=s?ag:n?ug:Wa;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function pc(t,e=!1){const n=this.__v_raw,s=je(n),i=je(t);return e||(Ei(t,i)&&wn(s,"has",t),wn(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function gc(t,e=!1){return t=t.__v_raw,!e&&wn(je(t),"iterate",or),Reflect.get(t,"size",t)}function Qy(t){t=je(t);const e=je(this);return uh(e).has.call(e,t)||(e.add(t),$s(e,"add",t,t)),this}function Yy(t,e){e=je(e);const n=je(this),{has:s,get:i}=uh(n);let r=s.call(n,t);r||(t=je(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Ei(e,o)&&$s(n,"set",t,e):$s(n,"add",t,e),this}function Xy(t){const e=je(this),{has:n,get:s}=uh(e);let i=n.call(e,t);i||(t=je(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&$s(e,"delete",t,void 0),r}function Jy(){const t=je(this),e=t.size!==0,n=t.clear();return e&&$s(t,"clear",void 0,void 0),n}function mc(t,e){return function(s,i){const r=this,o=r.__v_raw,a=je(o),l=e?ag:t?ug:Wa;return!t&&wn(a,"iterate",or),o.forEach((u,h)=>s.call(i,l(u),l(h),r))}}function _c(t,e,n){return function(...s){const i=this.__v_raw,r=je(i),o=eo(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=i[t](...s),h=n?ag:e?ug:Wa;return!e&&wn(r,"iterate",l?Ff:or),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function Xs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function RP(){const t={get(r){return fc(this,r)},get size(){return gc(this)},has:pc,add:Qy,set:Yy,delete:Xy,clear:Jy,forEach:mc(!1,!1)},e={get(r){return fc(this,r,!1,!0)},get size(){return gc(this)},has:pc,add:Qy,set:Yy,delete:Xy,clear:Jy,forEach:mc(!1,!0)},n={get(r){return fc(this,r,!0)},get size(){return gc(this,!0)},has(r){return pc.call(this,r,!0)},add:Xs("add"),set:Xs("set"),delete:Xs("delete"),clear:Xs("clear"),forEach:mc(!0,!1)},s={get(r){return fc(this,r,!0,!0)},get size(){return gc(this,!0)},has(r){return pc.call(this,r,!0)},add:Xs("add"),set:Xs("set"),delete:Xs("delete"),clear:Xs("clear"),forEach:mc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=_c(r,!1,!1),n[r]=_c(r,!0,!1),e[r]=_c(r,!1,!0),s[r]=_c(r,!0,!0)}),[t,n,e,s]}const[PP,kP,OP,NP]=RP();function lg(t,e){const n=e?t?NP:OP:t?kP:PP;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Ve(n,i)&&i in s?n:s,i,r)}const xP={get:lg(!1,!1)},DP={get:lg(!1,!0)},MP={get:lg(!0,!1)},ST=new WeakMap,RT=new WeakMap,PT=new WeakMap,LP=new WeakMap;function FP(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function VP(t){return t.__v_skip||!Object.isExtensible(t)?0:FP(oP(t))}function hh(t){return po(t)?t:cg(t,!1,CP,xP,ST)}function kT(t){return cg(t,!1,SP,DP,RT)}function El(t){return cg(t,!0,AP,MP,PT)}function cg(t,e,n,s,i){if(!et(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=VP(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function to(t){return po(t)?to(t.__v_raw):!!(t&&t.__v_isReactive)}function po(t){return!!(t&&t.__v_isReadonly)}function Kr(t){return!!(t&&t.__v_isShallow)}function OT(t){return to(t)||po(t)}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function NT(t){return tu(t,"__v_skip",!0),t}const Wa=t=>et(t)?hh(t):t,ug=t=>et(t)?El(t):t;class xT{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ig(()=>e(this._value),()=>iu(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=je(this);return hg(e),(!e._cacheable||e.effect.dirty)&&Ei(e._value,e._value=e.effect.run())&&iu(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function $P(t,e,n=!1){let s,i;const r=_e(t);return r?(s=t,i=Wn):(s=t.get,i=t.set),new xT(s,i,r||!i,n)}function hg(t){hi&&rr&&(t=je(t),wT(rr,t.dep||(t.dep=bT(()=>t.dep=void 0,t instanceof xT?t:void 0))))}function iu(t,e=3,n){t=je(t);const s=t.dep;s&&TT(s,e)}function bt(t){return!!(t&&t.__v_isRef===!0)}function wt(t){return DT(t,!1)}function ar(t){return DT(t,!0)}function DT(t,e){return bt(t)?t:new UP(t,e)}class UP{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:je(e),this._value=n?e:Wa(e)}get value(){return hg(this),this._value}set value(e){const n=this.__v_isShallow||Kr(e)||po(e);e=n?e:je(e),Ei(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Wa(e),iu(this,3))}}function Vt(t){return bt(t)?t.value:t}function Yt(t){return _e(t)?t():Vt(t)}const jP={get:(t,e,n)=>Vt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return bt(i)&&!bt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function MT(t){return to(t)?t:new Proxy(t,jP)}class BP{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>hg(this),()=>iu(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function WP(t){return new BP(t)}class HP{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return EP(je(this._object),this._key)}}class qP{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function dg(t,e,n){return bt(t)?t:_e(t)?new qP(t):et(t)&&arguments.length>1?zP(t,e,n):wt(t)}function zP(t,e,n){const s=t[e];return bt(s)?s:new HP(t,e,n)}function di(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){dh(r,e,n)}return i}function Zn(t,e,n,s){if(_e(t)){const r=di(t,e,n,s);return r&&dT(r)&&r.catch(o=>{dh(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Zn(t[r],e,n,s));return i}function dh(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){di(l,null,10,[t,o,a]);return}}GP(t,n,i,s)}function GP(t,e,n,s=!0){console.error(t)}let Ha=!1,Vf=!1;const Zt=[];let hs=0;const no=[];let xs=null,Zi=0;const LT=Promise.resolve();let fg=null;function fh(t){const e=fg||LT;return t?e.then(this?t.bind(this):t):e}function KP(t){let e=hs+1,n=Zt.length;for(;e<n;){const s=e+n>>>1,i=Zt[s],r=qa(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function pg(t){(!Zt.length||!Zt.includes(t,Ha&&t.allowRecurse?hs+1:hs))&&(t.id==null?Zt.push(t):Zt.splice(KP(t.id),0,t),FT())}function FT(){!Ha&&!Vf&&(Vf=!0,fg=LT.then($T))}function QP(t){const e=Zt.indexOf(t);e>hs&&Zt.splice(e,1)}function YP(t){ue(t)?no.push(...t):(!xs||!xs.includes(t,t.allowRecurse?Zi+1:Zi))&&no.push(t),FT()}function Zy(t,e,n=Ha?hs+1:0){for(;n<Zt.length;n++){const s=Zt[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Zt.splice(n,1),n--,s()}}}function VT(t){if(no.length){const e=[...new Set(no)];if(no.length=0,xs){xs.push(...e);return}for(xs=e,xs.sort((n,s)=>qa(n)-qa(s)),Zi=0;Zi<xs.length;Zi++)xs[Zi]();xs=null,Zi=0}}const qa=t=>t.id==null?1/0:t.id,XP=(t,e)=>{const n=qa(t)-qa(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $T(t){Vf=!1,Ha=!0,Zt.sort(XP);try{for(hs=0;hs<Zt.length;hs++){const e=Zt[hs];e&&e.active!==!1&&di(e,null,14)}}finally{hs=0,Zt.length=0,VT(),Ha=!1,fg=null,(Zt.length||no.length)&&$T()}}function JP(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||rt;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=s[h]||rt;p&&(i=n.map(m=>Pt(m)?m.trim():m)),d&&(i=n.map(nu))}let a,l=s[a=Bc(e)]||s[a=Bc(Es(e))];!l&&r&&(l=s[a=Bc(xo(e))]),l&&Zn(l,t,6,i);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Zn(u,t,6,i)}}function UT(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!_e(t)){const l=u=>{const h=UT(u,e,!0);h&&(a=!0,zt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(et(t)&&s.set(t,null),null):(ue(r)?r.forEach(l=>o[l]=null):zt(o,r),et(t)&&s.set(t,o),o)}function ph(t,e){return!t||!th(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(t,e[0].toLowerCase()+e.slice(1))||Ve(t,xo(e))||Ve(t,e))}let Wt=null,jT=null;function ru(t){const e=Wt;return Wt=t,jT=t&&t.type.__scopeId||null,e}function Ia(t,e=Wt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&uv(-1);const r=ru(e);let o;try{o=t(...i)}finally{ru(r),s._d&&uv(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function jd(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:u,render:h,renderCache:d,data:p,setupState:m,ctx:y,inheritAttrs:w}=t;let T,A;const N=ru(t);try{if(n.shapeFlag&4){const L=i||s,$=L;T=us(h.call($,L,d,r,m,p,y)),A=l}else{const L=e;T=us(L.length>1?L(r,{attrs:l,slots:a,emit:u}):L(r,null)),A=e.props?l:ZP(l)}}catch(L){Sa.length=0,dh(L,t,1),T=pt(wi)}let k=T;if(A&&w!==!1){const L=Object.keys(A),{shapeFlag:$}=k;L.length&&$&7&&(o&&L.some(eg)&&(A=ek(A,o)),k=mo(k,A))}return n.dirs&&(k=mo(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),T=k,ru(N),T}const ZP=t=>{let e;for(const n in t)(n==="class"||n==="style"||th(n))&&((e||(e={}))[n]=t[n]);return e},ek=(t,e)=>{const n={};for(const s in t)(!eg(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function tk(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ev(s,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==s[p]&&!ph(u,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ev(s,o,u):!0:!!o;return!1}function ev(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ph(n,r))return!0}return!1}function nk({vnode:t,parent:e},n){if(n)for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const BT="components";function WT(t,e){return ik(BT,t,!0,e)||t}const sk=Symbol.for("v-ndc");function ik(t,e,n=!0,s=!1){const i=Wt||xt;if(i){const r=i.type;if(t===BT){const a=Yk(r,!1);if(a&&(a===e||a===Es(e)||a===ih(Es(e))))return r}const o=tv(i[t]||r[t],e)||tv(i.appContext[t],e);return!o&&s?r:o}}function tv(t,e){return t&&(t[e]||t[Es(e)]||t[ih(Es(e))])}const rk=t=>t.__isSuspense;function ok(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):YP(t)}const ak=Symbol.for("v-scx"),lk=()=>kn(ak),yc={};function Hn(t,e,n){return HT(t,e,n)}function HT(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=rt){var l;if(e&&r){const $=e;e=(...ee)=>{$(...ee),L()}}const u=ch()===((l=xt)==null?void 0:l.scope)?xt:null;let h,d=!1,p=!1;if(bt(t)?(h=()=>t.value,d=Kr(t)):to(t)?(h=Kr(t)||s===!1?()=>Ds(t,1):()=>Ds(t),d=!0):ue(t)?(p=!0,d=t.some($=>to($)||Kr($)),h=()=>t.map($=>{if(bt($))return $.value;if(to($))return Ds($,Kr($)||s===!1?1:void 0);if(_e($))return di($,u,2)})):_e(t)?e?h=()=>di(t,u,2):h=()=>{if(!(u&&u.isUnmounted))return m&&m(),Zn(t,u,3,[y])}:h=Wn,e&&s){const $=h;h=()=>Ds($())}let m,y=$=>{m=k.onStop=()=>{di($,u,4),m=k.onStop=void 0}},w;if(yh)if(y=Wn,e?n&&Zn(e,u,3,[h(),p?[]:void 0,y]):h(),i==="sync"){const $=lk();w=$.__watcherHandles||($.__watcherHandles=[])}else return Wn;let T=p?new Array(t.length).fill(yc):yc;const A=()=>{if(!(!k.active||!k.dirty))if(e){const $=k.run();(s||d||(p?$.some((ee,ae)=>Ei(ee,T[ae])):Ei($,T)))&&(m&&m(),Zn(e,u,3,[$,T===yc?void 0:p&&T[0]===yc?[]:T,y]),T=$)}else k.run()};A.allowRecurse=!!e;let N;i==="sync"?N=A:i==="post"?N=()=>En(A,u&&u.suspense):(A.pre=!0,u&&(A.id=u.uid),N=()=>pg(A));const k=new ig(h,Wn,N),L=()=>{k.stop(),u&&u.scope&&tg(u.scope.effects,k)};return e?n?A():T=k.run():i==="post"?En(k.run.bind(k),u&&u.suspense):k.run(),w&&w.push(L),L}function ck(t,e,n){const s=this.proxy,i=Pt(t)?t.includes(".")?qT(s,t):()=>s[t]:t.bind(s,s);let r;_e(e)?r=e:(r=e.handler,n=e);const o=xt;_o(this);const a=HT(i,r.bind(s),n);return o?_o(o):lr(),a}function qT(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ds(t,e,n=0,s){if(!et(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),bt(t))Ds(t.value,e,n,s);else if(ue(t))for(let i=0;i<t.length;i++)Ds(t[i],e,n,s);else if(nh(t)||eo(t))t.forEach(i=>{Ds(i,e,n,s)});else if(pT(t))for(const i in t)Ds(t[i],e,n,s);return t}function DW(t,e){const n=Wt;if(n===null)return t;const s=vh(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,u=rt]=e[r];o&&(_e(o)&&(o={mounted:o,updated:o}),o.deep&&Ds(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:u}))}return t}function Gi(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Tr(),Zn(l,n,8,[t.el,a,t,e]),br())}}/*! #__NO_SIDE_EFFECTS__ */function zT(t,e){return _e(t)?zt({name:t.name},e,{setup:t}):t}const Ca=t=>!!t.type.__asyncLoader,GT=t=>t.type.__isKeepAlive;function uk(t,e){KT(t,"a",e)}function hk(t,e){KT(t,"da",e)}function KT(t,e,n=xt){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(gh(e,s,n),n){let i=n.parent;for(;i&&i.parent;)GT(i.parent.vnode)&&dk(s,e,n,i),i=i.parent}}function dk(t,e,n,s){const i=gh(e,t,s,!0);YT(()=>{tg(s[e],i)},n)}function gh(t,e,n=xt,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Tr(),_o(n);const a=Zn(e,n,t,o);return lr(),br(),a});return s?i.unshift(r):i.push(r),r}}const qs=t=>(e,n=xt)=>(!yh||t==="sp")&&gh(t,(...s)=>e(...s),n),fk=qs("bm"),QT=qs("m"),pk=qs("bu"),gk=qs("u"),mk=qs("bum"),YT=qs("um"),gg=qs("sp"),_k=qs("rtg"),yk=qs("rtc");function vk(t,e=xt){gh("ec",t,e)}function MW(t,e,n,s){let i;const r=n&&n[s];if(ue(t)||Pt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(et(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];i[a]=e(t[u],u,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function go(t,e,n={},s,i){if(Wt.isCE||Wt.parent&&Ca(Wt.parent)&&Wt.parent.isCE)return e!=="default"&&(n.name=e),pt("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),fn();const o=r&&XT(r(n)),a=yg(Gn,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function XT(t){return t.some(e=>lu(e)?!(e.type===wi||e.type===Gn&&!XT(e.children)):!0)?t:null}function Ek(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:Bc(s)]=t[s];return n}const $f=t=>t?ub(t)?vh(t)||t.proxy:$f(t.parent):null,Aa=zt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$f(t.parent),$root:t=>$f(t.root),$emit:t=>t.emit,$options:t=>mg(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,pg(t.update)}),$nextTick:t=>t.n||(t.n=fh.bind(t.proxy)),$watch:t=>ck.bind(t)}),Bd=(t,e)=>t!==rt&&!t.__isScriptSetup&&Ve(t,e),wk={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Bd(s,e))return o[e]=1,s[e];if(i!==rt&&Ve(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&Ve(u,e))return o[e]=3,r[e];if(n!==rt&&Ve(n,e))return o[e]=4,n[e];Uf&&(o[e]=0)}}const h=Aa[e];let d,p;if(h)return e==="$attrs"&&wn(t,"get",e),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==rt&&Ve(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Ve(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Bd(i,e)?(i[e]=n,!0):s!==rt&&Ve(s,e)?(s[e]=n,!0):Ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==rt&&Ve(t,o)||Bd(e,o)||(a=r[0])&&Ve(a,o)||Ve(s,o)||Ve(Aa,o)||Ve(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nv(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Uf=!0;function Tk(t){const e=mg(t),n=t.proxy,s=t.ctx;Uf=!1,e.beforeCreate&&sv(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:m,updated:y,activated:w,deactivated:T,beforeDestroy:A,beforeUnmount:N,destroyed:k,unmounted:L,render:$,renderTracked:ee,renderTriggered:ae,errorCaptured:Te,serverPrefetch:de,expose:Ae,inheritAttrs:at,components:rn,directives:dt,filters:Dn}=e;if(u&&bk(u,s,null),o)for(const Ee in o){const S=o[Ee];_e(S)&&(s[Ee]=S.bind(n))}if(i){const Ee=i.call(n,n);et(Ee)&&(t.data=hh(Ee))}if(Uf=!0,r)for(const Ee in r){const S=r[Ee],It=_e(S)?S.bind(n,n):_e(S.get)?S.get.bind(n,n):Wn,Ct=!_e(S)&&_e(S.set)?S.set.bind(n):Wn,Lt=pn({get:It,set:Ct});Object.defineProperty(s,Ee,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:He=>Lt.value=He})}if(a)for(const Ee in a)JT(a[Ee],s,n,Ee);if(l){const Ee=_e(l)?l.call(n):l;Reflect.ownKeys(Ee).forEach(S=>{Hc(S,Ee[S])})}h&&sv(h,t,"c");function xe(Ee,S){ue(S)?S.forEach(It=>Ee(It.bind(n))):S&&Ee(S.bind(n))}if(xe(fk,d),xe(QT,p),xe(pk,m),xe(gk,y),xe(uk,w),xe(hk,T),xe(vk,Te),xe(yk,ee),xe(_k,ae),xe(mk,N),xe(YT,L),xe(gg,de),ue(Ae))if(Ae.length){const Ee=t.exposed||(t.exposed={});Ae.forEach(S=>{Object.defineProperty(Ee,S,{get:()=>n[S],set:It=>n[S]=It})})}else t.exposed||(t.exposed={});$&&t.render===Wn&&(t.render=$),at!=null&&(t.inheritAttrs=at),rn&&(t.components=rn),dt&&(t.directives=dt)}function bk(t,e,n=Wn){ue(t)&&(t=jf(t));for(const s in t){const i=t[s];let r;et(i)?"default"in i?r=kn(i.from||s,i.default,!0):r=kn(i.from||s):r=kn(i),bt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function sv(t,e,n){Zn(ue(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function JT(t,e,n,s){const i=s.includes(".")?qT(n,s):()=>n[s];if(Pt(t)){const r=e[t];_e(r)&&Hn(i,r)}else if(_e(t))Hn(i,t.bind(n));else if(et(t))if(ue(t))t.forEach(r=>JT(r,e,n,s));else{const r=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(r)&&Hn(i,r,t)}}function mg(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(u=>ou(l,u,o,!0)),ou(l,e,o)),et(e)&&r.set(e,l),l}function ou(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ou(t,r,n,!0),i&&i.forEach(o=>ou(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Ik[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ik={data:iv,props:rv,emits:rv,methods:ma,computed:ma,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:ma,directives:ma,watch:Ak,provide:iv,inject:Ck};function iv(t,e){return e?t?function(){return zt(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function Ck(t,e){return ma(jf(t),jf(e))}function jf(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dn(t,e){return t?[...new Set([].concat(t,e))]:e}function ma(t,e){return t?zt(Object.create(null),t,e):e}function rv(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:zt(Object.create(null),nv(t),nv(e??{})):e}function Ak(t,e){if(!t)return e;if(!e)return t;const n=zt(Object.create(null),t);for(const s in e)n[s]=dn(t[s],e[s]);return n}function ZT(){return{app:null,config:{isNativeTag:iP,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sk=0;function Rk(t,e){return function(s,i=null){_e(s)||(s=zt({},s)),i!=null&&!et(i)&&(i=null);const r=ZT(),o=new WeakSet;let a=!1;const l=r.app={_uid:Sk++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Jk,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&_e(u.install)?(o.add(u),u.install(l,...h)):_e(u)&&(o.add(u),u(l,...h))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,h){return h?(r.components[u]=h,l):r.components[u]},directive(u,h){return h?(r.directives[u]=h,l):r.directives[u]},mount(u,h,d){if(!a){const p=pt(s,i);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(p,u):t(p,u,d),a=!0,l._container=u,u.__vue_app__=l,vh(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return r.provides[u]=h,l},runWithContext(u){au=l;try{return u()}finally{au=null}}};return l}}let au=null;function Hc(t,e){if(xt){let n=xt.provides;const s=xt.parent&&xt.parent.provides;s===n&&(n=xt.provides=Object.create(s)),n[t]=e}}function kn(t,e,n=!1){const s=xt||Wt;if(s||au){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:au._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&_e(e)?e.call(s&&s.proxy):e}}function Pk(t,e,n,s=!1){const i={},r={};tu(r,_h,1),t.propsDefaults=Object.create(null),eb(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:kT(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function kk(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=je(i),[l]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(ph(t.emitsOptions,p))continue;const m=e[p];if(l)if(Ve(r,p))m!==r[p]&&(r[p]=m,u=!0);else{const y=Es(p);i[y]=Bf(l,a,y,m,t,!1)}else m!==r[p]&&(r[p]=m,u=!0)}}}else{eb(t,e,i,r)&&(u=!0);let h;for(const d in a)(!e||!Ve(e,d)&&((h=xo(d))===d||!Ve(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(i[d]=Bf(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!Ve(e,d))&&(delete r[d],u=!0)}u&&$s(t,"set","$attrs")}function eb(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(jc(l))continue;const u=e[l];let h;i&&Ve(i,h=Es(l))?!r||!r.includes(h)?n[h]=u:(a||(a={}))[h]=u:ph(t.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(r){const l=je(n),u=a||rt;for(let h=0;h<r.length;h++){const d=r[h];n[d]=Bf(i,l,d,u[d],t,!Ve(u,d))}}return o}function Bf(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Ve(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&_e(l)){const{propsDefaults:u}=i;n in u?s=u[n]:(_o(i),s=u[n]=l.call(null,e),lr())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===xo(n))&&(s=!0))}return s}function tb(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!_e(t)){const h=d=>{l=!0;const[p,m]=tb(d,e,!0);zt(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!l)return et(t)&&s.set(t,Zr),Zr;if(ue(r))for(let h=0;h<r.length;h++){const d=Es(r[h]);ov(d)&&(o[d]=rt)}else if(r)for(const h in r){const d=Es(h);if(ov(d)){const p=r[h],m=o[d]=ue(p)||_e(p)?{type:p}:zt({},p);if(m){const y=cv(Boolean,m.type),w=cv(String,m.type);m[0]=y>-1,m[1]=w<0||y<w,(y>-1||Ve(m,"default"))&&a.push(d)}}}const u=[o,a];return et(t)&&s.set(t,u),u}function ov(t){return t[0]!=="$"}function av(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function lv(t,e){return av(t)===av(e)}function cv(t,e){return ue(e)?e.findIndex(n=>lv(n,t)):_e(e)&&lv(e,t)?0:-1}const nb=t=>t[0]==="_"||t==="$stable",_g=t=>ue(t)?t.map(us):[us(t)],Ok=(t,e,n)=>{if(e._n)return e;const s=Ia((...i)=>_g(e(...i)),n);return s._c=!1,s},sb=(t,e,n)=>{const s=t._ctx;for(const i in t){if(nb(i))continue;const r=t[i];if(_e(r))e[i]=Ok(i,r,s);else if(r!=null){const o=_g(r);e[i]=()=>o}}},ib=(t,e)=>{const n=_g(e);t.slots.default=()=>n},Nk=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=je(e),tu(e,"_",n)):sb(e,t.slots={})}else t.slots={},e&&ib(t,e);tu(t.slots,_h,1)},xk=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=rt;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(zt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,sb(e,i)),o=e}else e&&(ib(t,e),o={default:1});if(r)for(const a in i)!nb(a)&&o[a]==null&&delete i[a]};function Wf(t,e,n,s,i=!1){if(ue(t)){t.forEach((p,m)=>Wf(p,e&&(ue(e)?e[m]:e),n,s,i));return}if(Ca(s)&&!i)return;const r=s.shapeFlag&4?vh(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,u=e&&e.r,h=a.refs===rt?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==l&&(Pt(u)?(h[u]=null,Ve(d,u)&&(d[u]=null)):bt(u)&&(u.value=null)),_e(l))di(l,a,12,[o,h]);else{const p=Pt(l),m=bt(l);if(p||m){const y=()=>{if(t.f){const w=p?Ve(d,l)?d[l]:h[l]:l.value;i?ue(w)&&tg(w,r):ue(w)?w.includes(r)||w.push(r):p?(h[l]=[r],Ve(d,l)&&(d[l]=h[l])):(l.value=[r],t.k&&(h[t.k]=l.value))}else p?(h[l]=o,Ve(d,l)&&(d[l]=o)):m&&(l.value=o,t.k&&(h[t.k]=o))};o?(y.id=-1,En(y,n)):y()}}}const En=ok;function Dk(t){return Mk(t)}function Mk(t,e){const n=gT();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:m=Wn,insertStaticContent:y}=t,w=(v,E,C,P=null,x=null,M=null,G=void 0,U=null,W=!!E.dynamicChildren)=>{if(v===E)return;v&&!ea(v,E)&&(P=O(v),He(v,x,M,!0),v=null),E.patchFlag===-2&&(W=!1,E.dynamicChildren=null);const{type:F,ref:Q,shapeFlag:ne}=E;switch(F){case mh:T(v,E,C,P);break;case wi:A(v,E,C,P);break;case qc:v==null&&N(E,C,P,G);break;case Gn:rn(v,E,C,P,x,M,G,U,W);break;default:ne&1?$(v,E,C,P,x,M,G,U,W):ne&6?dt(v,E,C,P,x,M,G,U,W):(ne&64||ne&128)&&F.process(v,E,C,P,x,M,G,U,W,H)}Q!=null&&x&&Wf(Q,v&&v.ref,M,E||v,!E)},T=(v,E,C,P)=>{if(v==null)s(E.el=a(E.children),C,P);else{const x=E.el=v.el;E.children!==v.children&&u(x,E.children)}},A=(v,E,C,P)=>{v==null?s(E.el=l(E.children||""),C,P):E.el=v.el},N=(v,E,C,P)=>{[v.el,v.anchor]=y(v.children,E,C,P,v.el,v.anchor)},k=({el:v,anchor:E},C,P)=>{let x;for(;v&&v!==E;)x=p(v),s(v,C,P),v=x;s(E,C,P)},L=({el:v,anchor:E})=>{let C;for(;v&&v!==E;)C=p(v),i(v),v=C;i(E)},$=(v,E,C,P,x,M,G,U,W)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),v==null?ee(E,C,P,x,M,G,U,W):de(v,E,x,M,G,U,W)},ee=(v,E,C,P,x,M,G,U)=>{let W,F;const{props:Q,shapeFlag:ne,transition:ie,dirs:oe}=v;if(W=v.el=o(v.type,M,Q&&Q.is,Q),ne&8?h(W,v.children):ne&16&&Te(v.children,W,null,P,x,Wd(v,M),G,U),oe&&Gi(v,null,P,"created"),ae(W,v,v.scopeId,G,P),Q){for(const Me in Q)Me!=="value"&&!jc(Me)&&r(W,Me,null,Q[Me],M,v.children,P,x,Y);"value"in Q&&r(W,"value",null,Q.value,M),(F=Q.onVnodeBeforeMount)&&cs(F,P,v)}oe&&Gi(v,null,P,"beforeMount");const ye=Lk(x,ie);ye&&ie.beforeEnter(W),s(W,E,C),((F=Q&&Q.onVnodeMounted)||ye||oe)&&En(()=>{F&&cs(F,P,v),ye&&ie.enter(W),oe&&Gi(v,null,P,"mounted")},x)},ae=(v,E,C,P,x)=>{if(C&&m(v,C),P)for(let M=0;M<P.length;M++)m(v,P[M]);if(x){let M=x.subTree;if(E===M){const G=x.vnode;ae(v,G,G.scopeId,G.slotScopeIds,x.parent)}}},Te=(v,E,C,P,x,M,G,U,W=0)=>{for(let F=W;F<v.length;F++){const Q=v[F]=U?ti(v[F]):us(v[F]);w(null,Q,E,C,P,x,M,G,U)}},de=(v,E,C,P,x,M,G)=>{const U=E.el=v.el;let{patchFlag:W,dynamicChildren:F,dirs:Q}=E;W|=v.patchFlag&16;const ne=v.props||rt,ie=E.props||rt;let oe;if(C&&Ki(C,!1),(oe=ie.onVnodeBeforeUpdate)&&cs(oe,C,E,v),Q&&Gi(E,v,C,"beforeUpdate"),C&&Ki(C,!0),F?Ae(v.dynamicChildren,F,U,C,P,Wd(E,x),M):G||S(v,E,U,null,C,P,Wd(E,x),M,!1),W>0){if(W&16)at(U,E,ne,ie,C,P,x);else if(W&2&&ne.class!==ie.class&&r(U,"class",null,ie.class,x),W&4&&r(U,"style",ne.style,ie.style,x),W&8){const ye=E.dynamicProps;for(let Me=0;Me<ye.length;Me++){const ze=ye[Me],_t=ne[ze],on=ie[ze];(on!==_t||ze==="value")&&r(U,ze,_t,on,x,v.children,C,P,Y)}}W&1&&v.children!==E.children&&h(U,E.children)}else!G&&F==null&&at(U,E,ne,ie,C,P,x);((oe=ie.onVnodeUpdated)||Q)&&En(()=>{oe&&cs(oe,C,E,v),Q&&Gi(E,v,C,"updated")},P)},Ae=(v,E,C,P,x,M,G)=>{for(let U=0;U<E.length;U++){const W=v[U],F=E[U],Q=W.el&&(W.type===Gn||!ea(W,F)||W.shapeFlag&70)?d(W.el):C;w(W,F,Q,null,P,x,M,G,!0)}},at=(v,E,C,P,x,M,G)=>{if(C!==P){if(C!==rt)for(const U in C)!jc(U)&&!(U in P)&&r(v,U,C[U],null,G,E.children,x,M,Y);for(const U in P){if(jc(U))continue;const W=P[U],F=C[U];W!==F&&U!=="value"&&r(v,U,F,W,G,E.children,x,M,Y)}"value"in P&&r(v,"value",C.value,P.value,G)}},rn=(v,E,C,P,x,M,G,U,W)=>{const F=E.el=v?v.el:a(""),Q=E.anchor=v?v.anchor:a("");let{patchFlag:ne,dynamicChildren:ie,slotScopeIds:oe}=E;oe&&(U=U?U.concat(oe):oe),v==null?(s(F,C,P),s(Q,C,P),Te(E.children,C,Q,x,M,G,U,W)):ne>0&&ne&64&&ie&&v.dynamicChildren?(Ae(v.dynamicChildren,ie,C,x,M,G,U),(E.key!=null||x&&E===x.subTree)&&rb(v,E,!0)):S(v,E,C,Q,x,M,G,U,W)},dt=(v,E,C,P,x,M,G,U,W)=>{E.slotScopeIds=U,v==null?E.shapeFlag&512?x.ctx.activate(E,C,P,G,W):Dn(E,C,P,x,M,G,W):Gt(v,E,W)},Dn=(v,E,C,P,x,M,G)=>{const U=v.component=qk(v,P,x);if(GT(v)&&(U.ctx.renderer=H),zk(U),U.asyncDep){if(x&&x.registerDep(U,xe),!v.el){const W=U.subTree=pt(wi);A(null,W,E,C)}}else xe(U,v,E,C,x,M,G)},Gt=(v,E,C)=>{const P=E.component=v.component;if(tk(v,E,C))if(P.asyncDep&&!P.asyncResolved){Ee(P,E,C);return}else P.next=E,QP(P.update),P.effect.dirty=!0,P.update();else E.el=v.el,P.vnode=E},xe=(v,E,C,P,x,M,G)=>{const U=()=>{if(v.isMounted){let{next:Q,bu:ne,u:ie,parent:oe,vnode:ye}=v;{const Gs=ob(v);if(Gs){Q&&(Q.el=ye.el,Ee(v,Q,G)),Gs.asyncDep.then(()=>{v.isUnmounted||U()});return}}let Me=Q,ze;Ki(v,!1),Q?(Q.el=ye.el,Ee(v,Q,G)):Q=ye,ne&&Wc(ne),(ze=Q.props&&Q.props.onVnodeBeforeUpdate)&&cs(ze,oe,Q,ye),Ki(v,!0);const _t=jd(v),on=v.subTree;v.subTree=_t,w(on,_t,d(on.el),O(on),v,x,M),Q.el=_t.el,Me===null&&nk(v,_t.el),ie&&En(ie,x),(ze=Q.props&&Q.props.onVnodeUpdated)&&En(()=>cs(ze,oe,Q,ye),x)}else{let Q;const{el:ne,props:ie}=E,{bm:oe,m:ye,parent:Me}=v,ze=Ca(E);if(Ki(v,!1),oe&&Wc(oe),!ze&&(Q=ie&&ie.onVnodeBeforeMount)&&cs(Q,Me,E),Ki(v,!0),ne&&Oe){const _t=()=>{v.subTree=jd(v),Oe(ne,v.subTree,v,x,null)};ze?E.type.__asyncLoader().then(()=>!v.isUnmounted&&_t()):_t()}else{const _t=v.subTree=jd(v);w(null,_t,C,P,v,x,M),E.el=_t.el}if(ye&&En(ye,x),!ze&&(Q=ie&&ie.onVnodeMounted)){const _t=E;En(()=>cs(Q,Me,_t),x)}(E.shapeFlag&256||Me&&Ca(Me.vnode)&&Me.vnode.shapeFlag&256)&&v.a&&En(v.a,x),v.isMounted=!0,E=C=P=null}},W=v.effect=new ig(U,Wn,()=>pg(F),v.scope),F=v.update=()=>{W.dirty&&W.run()};F.id=v.uid,Ki(v,!0),F()},Ee=(v,E,C)=>{E.component=v;const P=v.vnode.props;v.vnode=E,v.next=null,kk(v,E.props,P,C),xk(v,E.children,C),Tr(),Zy(v),br()},S=(v,E,C,P,x,M,G,U,W=!1)=>{const F=v&&v.children,Q=v?v.shapeFlag:0,ne=E.children,{patchFlag:ie,shapeFlag:oe}=E;if(ie>0){if(ie&128){Ct(F,ne,C,P,x,M,G,U,W);return}else if(ie&256){It(F,ne,C,P,x,M,G,U,W);return}}oe&8?(Q&16&&Y(F,x,M),ne!==F&&h(C,ne)):Q&16?oe&16?Ct(F,ne,C,P,x,M,G,U,W):Y(F,x,M,!0):(Q&8&&h(C,""),oe&16&&Te(ne,C,P,x,M,G,U,W))},It=(v,E,C,P,x,M,G,U,W)=>{v=v||Zr,E=E||Zr;const F=v.length,Q=E.length,ne=Math.min(F,Q);let ie;for(ie=0;ie<ne;ie++){const oe=E[ie]=W?ti(E[ie]):us(E[ie]);w(v[ie],oe,C,null,x,M,G,U,W)}F>Q?Y(v,x,M,!0,!1,ne):Te(E,C,P,x,M,G,U,W,ne)},Ct=(v,E,C,P,x,M,G,U,W)=>{let F=0;const Q=E.length;let ne=v.length-1,ie=Q-1;for(;F<=ne&&F<=ie;){const oe=v[F],ye=E[F]=W?ti(E[F]):us(E[F]);if(ea(oe,ye))w(oe,ye,C,null,x,M,G,U,W);else break;F++}for(;F<=ne&&F<=ie;){const oe=v[ne],ye=E[ie]=W?ti(E[ie]):us(E[ie]);if(ea(oe,ye))w(oe,ye,C,null,x,M,G,U,W);else break;ne--,ie--}if(F>ne){if(F<=ie){const oe=ie+1,ye=oe<Q?E[oe].el:P;for(;F<=ie;)w(null,E[F]=W?ti(E[F]):us(E[F]),C,ye,x,M,G,U,W),F++}}else if(F>ie)for(;F<=ne;)He(v[F],x,M,!0),F++;else{const oe=F,ye=F,Me=new Map;for(F=ye;F<=ie;F++){const an=E[F]=W?ti(E[F]):us(E[F]);an.key!=null&&Me.set(an.key,F)}let ze,_t=0;const on=ie-ye+1;let Gs=!1,Gl=0;const Mi=new Array(on);for(F=0;F<on;F++)Mi[F]=0;for(F=oe;F<=ne;F++){const an=v[F];if(_t>=on){He(an,x,M,!0);continue}let Mn;if(an.key!=null)Mn=Me.get(an.key);else for(ze=ye;ze<=ie;ze++)if(Mi[ze-ye]===0&&ea(an,E[ze])){Mn=ze;break}Mn===void 0?He(an,x,M,!0):(Mi[Mn-ye]=F+1,Mn>=Gl?Gl=Mn:Gs=!0,w(an,E[Mn],C,null,x,M,G,U,W),_t++)}const Kl=Gs?Fk(Mi):Zr;for(ze=Kl.length-1,F=on-1;F>=0;F--){const an=ye+F,Mn=E[an],zo=an+1<Q?E[an+1].el:P;Mi[F]===0?w(null,Mn,C,zo,x,M,G,U,W):Gs&&(ze<0||F!==Kl[ze]?Lt(Mn,C,zo,2):ze--)}}},Lt=(v,E,C,P,x=null)=>{const{el:M,type:G,transition:U,children:W,shapeFlag:F}=v;if(F&6){Lt(v.component.subTree,E,C,P);return}if(F&128){v.suspense.move(E,C,P);return}if(F&64){G.move(v,E,C,H);return}if(G===Gn){s(M,E,C);for(let ne=0;ne<W.length;ne++)Lt(W[ne],E,C,P);s(v.anchor,E,C);return}if(G===qc){k(v,E,C);return}if(P!==2&&F&1&&U)if(P===0)U.beforeEnter(M),s(M,E,C),En(()=>U.enter(M),x);else{const{leave:ne,delayLeave:ie,afterLeave:oe}=U,ye=()=>s(M,E,C),Me=()=>{ne(M,()=>{ye(),oe&&oe()})};ie?ie(M,ye,Me):Me()}else s(M,E,C)},He=(v,E,C,P=!1,x=!1)=>{const{type:M,props:G,ref:U,children:W,dynamicChildren:F,shapeFlag:Q,patchFlag:ne,dirs:ie}=v;if(U!=null&&Wf(U,null,C,v,!0),Q&256){E.ctx.deactivate(v);return}const oe=Q&1&&ie,ye=!Ca(v);let Me;if(ye&&(Me=G&&G.onVnodeBeforeUnmount)&&cs(Me,E,v),Q&6)Ft(v.component,C,P);else{if(Q&128){v.suspense.unmount(C,P);return}oe&&Gi(v,null,E,"beforeUnmount"),Q&64?v.type.remove(v,E,C,x,H,P):F&&(M!==Gn||ne>0&&ne&64)?Y(F,E,C,!1,!0):(M===Gn&&ne&384||!x&&Q&16)&&Y(W,E,C),P&&mt(v)}(ye&&(Me=G&&G.onVnodeUnmounted)||oe)&&En(()=>{Me&&cs(Me,E,v),oe&&Gi(v,null,E,"unmounted")},C)},mt=v=>{const{type:E,el:C,anchor:P,transition:x}=v;if(E===Gn){De(C,P);return}if(E===qc){L(v);return}const M=()=>{i(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(v.shapeFlag&1&&x&&!x.persisted){const{leave:G,delayLeave:U}=x,W=()=>G(C,M);U?U(v.el,M,W):W()}else M()},De=(v,E)=>{let C;for(;v!==E;)C=p(v),i(v),v=C;i(E)},Ft=(v,E,C)=>{const{bum:P,scope:x,update:M,subTree:G,um:U}=v;P&&Wc(P),x.stop(),M&&(M.active=!1,He(G,v,E,C)),U&&En(U,E),En(()=>{v.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Y=(v,E,C,P=!1,x=!1,M=0)=>{for(let G=M;G<v.length;G++)He(v[G],E,C,P,x)},O=v=>v.shapeFlag&6?O(v.component.subTree):v.shapeFlag&128?v.suspense.next():p(v.anchor||v.el),X=(v,E,C)=>{v==null?E._vnode&&He(E._vnode,null,null,!0):w(E._vnode||null,v,E,null,null,null,C),Zy(),VT(),E._vnode=v},H={p:w,um:He,m:Lt,r:mt,mt:Dn,mc:Te,pc:S,pbc:Ae,n:O,o:t};let se,Oe;return e&&([se,Oe]=e(H)),{render:X,hydrate:se,createApp:Rk(X,se)}}function Wd({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ki({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Lk(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function rb(t,e,n=!1){const s=t.children,i=e.children;if(ue(s)&&ue(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=ti(i[r]),a.el=o.el),n||rb(o,a)),a.type===mh&&(a.el=o.el)}}function Fk(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<u?r=a+1:o=a;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function ob(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ob(e)}const Vk=t=>t.__isTeleport,Gn=Symbol.for("v-fgt"),mh=Symbol.for("v-txt"),wi=Symbol.for("v-cmt"),qc=Symbol.for("v-stc"),Sa=[];let Qn=null;function fn(t=!1){Sa.push(Qn=t?null:[])}function $k(){Sa.pop(),Qn=Sa[Sa.length-1]||null}let za=1;function uv(t){za+=t}function ab(t){return t.dynamicChildren=za>0?Qn||Zr:null,$k(),za>0&&Qn&&Qn.push(t),t}function jn(t,e,n,s,i,r){return ab($t(t,e,n,s,i,r,!0))}function yg(t,e,n,s,i){return ab(pt(t,e,n,s,i,!0))}function lu(t){return t?t.__v_isVNode===!0:!1}function ea(t,e){return t.type===e.type&&t.key===e.key}const _h="__vInternal",lb=({key:t})=>t??null,zc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Pt(t)||bt(t)||_e(t)?{i:Wt,r:t,k:e,f:!!n}:t:null);function $t(t,e=null,n=null,s=0,i=null,r=t===Gn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lb(e),ref:e&&zc(e),scopeId:jT,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Wt};return a?(vg(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Pt(n)?8:16),za>0&&!o&&Qn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Qn.push(l),l}const pt=Uk;function Uk(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===sk)&&(t=wi),lu(t)){const a=mo(t,e,!0);return n&&vg(a,n),za>0&&!r&&Qn&&(a.shapeFlag&6?Qn[Qn.indexOf(t)]=a:Qn.push(a)),a.patchFlag|=-2,a}if(Xk(t)&&(t=t.__vccOpts),e){e=jk(e);let{class:a,style:l}=e;a&&!Pt(a)&&(e.class=oh(a)),et(l)&&(OT(l)&&!ue(l)&&(l=zt({},l)),e.style=rh(l))}const o=Pt(t)?1:rk(t)?128:Vk(t)?64:et(t)?4:_e(t)?2:0;return $t(t,e,n,s,i,o,r,!0)}function jk(t){return t?OT(t)||_h in t?zt({},t):t:null}function mo(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?cb(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&lb(a),ref:e&&e.ref?n&&i?ue(i)?i.concat(zc(e)):[i,zc(e)]:zc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gn?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mo(t.ssContent),ssFallback:t.ssFallback&&mo(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Hf(t=" ",e=0){return pt(mh,null,t,e)}function Bk(t,e){const n=pt(qc,null,t);return n.staticCount=e,n}function hv(t="",e=!1){return e?(fn(),yg(wi,null,t)):pt(wi,null,t)}function us(t){return t==null||typeof t=="boolean"?pt(wi):ue(t)?pt(Gn,null,t.slice()):typeof t=="object"?ti(t):pt(mh,null,String(t))}function ti(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mo(t)}function vg(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),vg(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(_h in e)?e._ctx=Wt:i===3&&Wt&&(Wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:Wt},n=32):(e=String(e),s&64?(n=16,e=[Hf(e)]):n=8);t.children=e,t.shapeFlag|=n}function cb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=oh([e.class,s.class]));else if(i==="style")e.style=rh([e.style,s.style]);else if(th(i)){const r=e[i],o=s[i];o&&r!==o&&!(ue(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function cs(t,e,n,s=null){Zn(t,e,7,[n,s])}const Wk=ZT();let Hk=0;function qk(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Wk,r={uid:Hk++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new yT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tb(s,i),emitsOptions:UT(s,i),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:s.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=JP.bind(null,r),t.ce&&t.ce(r),r}let xt=null;const wl=()=>xt||Wt;let Eg,qf;{const t=gT(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Eg=e("__VUE_INSTANCE_SETTERS__",n=>xt=n),qf=e("__VUE_SSR_SETTERS__",n=>yh=n)}const _o=t=>{Eg(t),t.scope.on()},lr=()=>{xt&&xt.scope.off(),Eg(null)};function ub(t){return t.vnode.shapeFlag&4}let yh=!1;function zk(t,e=!1){e&&qf(e);const{props:n,children:s}=t.vnode,i=ub(t);Pk(t,n,i,e),Nk(t,s);const r=i?Gk(t,e):void 0;return e&&qf(!1),r}function Gk(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=NT(new Proxy(t.ctx,wk));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Qk(t):null;_o(t),Tr();const r=di(s,t,0,[t.props,i]);if(br(),lr(),dT(r)){if(r.then(lr,lr),e)return r.then(o=>{dv(t,o,e)}).catch(o=>{dh(o,t,0)});t.asyncDep=r}else dv(t,r,e)}else hb(t,e)}function dv(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:et(e)&&(t.setupState=MT(e)),hb(t,n)}let fv;function hb(t,e,n){const s=t.type;if(!t.render){if(!e&&fv&&!s.render){const i=s.template||mg(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,u=zt(zt({isCustomElement:r,delimiters:a},o),l);s.render=fv(i,u)}}t.render=s.render||Wn}{_o(t),Tr();try{Tk(t)}finally{br(),lr()}}}function Kk(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return wn(t,"get","$attrs"),e[n]}}))}function Qk(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Kk(t)},slots:t.slots,emit:t.emit,expose:e}}function vh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(MT(NT(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Aa)return Aa[n](t)},has(e,n){return n in e||n in Aa}}))}function Yk(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function Xk(t){return _e(t)&&"__vccOpts"in t}const pn=(t,e)=>$P(t,e,yh);function db(t,e,n){const s=arguments.length;return s===2?et(e)&&!ue(e)?lu(e)?pt(t,null,[e]):pt(t,e):pt(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&lu(n)&&(n=[n]),pt(t,e,n))}const Jk="3.4.3",Zk="http://www.w3.org/2000/svg",eO="http://www.w3.org/1998/Math/MathML",ni=typeof document<"u"?document:null,pv=ni&&ni.createElement("template"),tO={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ni.createElementNS(Zk,t):e==="mathml"?ni.createElementNS(eO,t):ni.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ni.createTextNode(t),createComment:t=>ni.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ni.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{pv.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=pv.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},nO=Symbol("_vtc");function sO(t,e,n){const s=t[nO];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const iO=Symbol("_vod"),rO=Symbol("");function oO(t,e,n){const s=t.style,i=Pt(n);if(n&&!i){if(e&&!Pt(e))for(const r in e)n[r]==null&&zf(s,r,"");for(const r in n)zf(s,r,n[r])}else{const r=s.display;if(i){if(e!==n){const o=s[rO];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");iO in t&&(s.display=r)}}const gv=/\s*!important$/;function zf(t,e,n){if(ue(n))n.forEach(s=>zf(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=aO(t,e);gv.test(n)?t.setProperty(xo(s),n.replace(gv,""),"important"):t[s]=n}}const mv=["Webkit","Moz","ms"],Hd={};function aO(t,e){const n=Hd[e];if(n)return n;let s=Es(e);if(s!=="filter"&&s in t)return Hd[e]=s;s=ih(s);for(let i=0;i<mv.length;i++){const r=mv[i]+s;if(r in t)return Hd[e]=r}return e}const _v="http://www.w3.org/1999/xlink";function lO(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_v,e.slice(6,e.length)):t.setAttributeNS(_v,e,n);else{const r=pP(e);n==null||r&&!mT(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function cO(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,h=n??"";u!==h&&(t.value=h),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=mT(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function er(t,e,n,s){t.addEventListener(e,n,s)}function uO(t,e,n,s){t.removeEventListener(e,n,s)}const yv=Symbol("_vei");function hO(t,e,n,s,i=null){const r=t[yv]||(t[yv]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=dO(e);if(s){const u=r[e]=gO(s,i);er(t,a,u,l)}else o&&(uO(t,a,o,l),r[e]=void 0)}}const vv=/(?:Once|Passive|Capture)$/;function dO(t){let e;if(vv.test(t)){e={};let s;for(;s=t.match(vv);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xo(t.slice(2)),e]}let qd=0;const fO=Promise.resolve(),pO=()=>qd||(fO.then(()=>qd=0),qd=Date.now());function gO(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Zn(mO(s,n.value),e,5,[s])};return n.value=t,n.attached=pO(),n}function mO(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ev=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,_O=(t,e,n,s,i,r,o,a,l)=>{const u=i==="svg";e==="class"?sO(t,s,u):e==="style"?oO(t,n,s):th(e)?eg(e)||hO(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yO(t,e,s,u))?cO(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),lO(t,e,s,u))};function yO(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ev(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ev(e)&&Pt(n)?!1:e in t}const cu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>Wc(e,n):e};function vO(t){t.target.composing=!0}function wv(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const so=Symbol("_assign"),LW={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[so]=cu(i);const r=s||i.props&&i.props.type==="number";er(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=nu(a)),t[so](a)}),n&&er(t,"change",()=>{t.value=t.value.trim()}),e||(er(t,"compositionstart",vO),er(t,"compositionend",wv),er(t,"change",wv))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[so]=cu(r),t.composing)return;const o=i||t.type==="number"?nu(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},FW={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=nh(e);er(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?nu(uu(o)):uu(o));t[so](t.multiple?i?new Set(r):r:r[0])}),t[so]=cu(s)},mounted(t,{value:e}){Tv(t,e)},beforeUpdate(t,e,n){t[so]=cu(n)},updated(t,{value:e}){Tv(t,e)}};function Tv(t,e){const n=t.multiple;if(!(n&&!ue(e)&&!nh(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=uu(r);if(n)ue(e)?r.selected=mP(e,o)>-1:r.selected=e.has(o);else if(ah(uu(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function uu(t){return"_value"in t?t._value:t.value}const EO=["ctrl","shift","alt","meta"],wO={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>EO.some(n=>t[`${n}Key`]&&!e.includes(n))},VW=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=wO[e[o]];if(a&&a(i,e))return}return t(i,...r)})},TO=zt({patchProp:_O},tO);let bv;function bO(){return bv||(bv=Dk(TO))}const Gf=(...t)=>{const e=bO().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=CO(s);if(!i)return;const r=e._component;!_e(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,IO(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function IO(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function CO(t){return Pt(t)?document.querySelector(t):t}/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,e){typeof exports=="object"&&typeof module<"u"?module.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self).bootstrap=e()})(void 0,function(){const t=new Map,e={set(g,c,f){t.has(g)||t.set(g,new Map);const _=t.get(g);_.has(c)||_.size===0?_.set(c,f):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(_.keys())[0]}.`)},get:(g,c)=>t.has(g)&&t.get(g).get(c)||null,remove(g,c){if(!t.has(g))return;const f=t.get(g);f.delete(c),f.size===0&&t.delete(g)}},n="transitionend",s=g=>(g&&window.CSS&&window.CSS.escape&&(g=g.replace(/#([^\s"#']+)/g,(c,f)=>`#${CSS.escape(f)}`)),g),i=g=>{g.dispatchEvent(new Event(n))},r=g=>!(!g||typeof g!="object")&&(g.jquery!==void 0&&(g=g[0]),g.nodeType!==void 0),o=g=>r(g)?g.jquery?g[0]:g:typeof g=="string"&&g.length>0?document.querySelector(s(g)):null,a=g=>{if(!r(g)||g.getClientRects().length===0)return!1;const c=getComputedStyle(g).getPropertyValue("visibility")==="visible",f=g.closest("details:not([open])");if(!f)return c;if(f!==g){const _=g.closest("summary");if(_&&_.parentNode!==f||_===null)return!1}return c},l=g=>!g||g.nodeType!==Node.ELEMENT_NODE||!!g.classList.contains("disabled")||(g.disabled!==void 0?g.disabled:g.hasAttribute("disabled")&&g.getAttribute("disabled")!=="false"),u=g=>{if(!document.documentElement.attachShadow)return null;if(typeof g.getRootNode=="function"){const c=g.getRootNode();return c instanceof ShadowRoot?c:null}return g instanceof ShadowRoot?g:g.parentNode?u(g.parentNode):null},h=()=>{},d=g=>{g.offsetHeight},p=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,m=[],y=()=>document.documentElement.dir==="rtl",w=g=>{var c;c=()=>{const f=p();if(f){const _=g.NAME,b=f.fn[_];f.fn[_]=g.jQueryInterface,f.fn[_].Constructor=g,f.fn[_].noConflict=()=>(f.fn[_]=b,g.jQueryInterface)}},document.readyState==="loading"?(m.length||document.addEventListener("DOMContentLoaded",()=>{for(const f of m)f()}),m.push(c)):c()},T=(g,c=[],f=g)=>typeof g=="function"?g(...c):f,A=(g,c,f=!0)=>{if(!f)return void T(g);const _=(R=>{if(!R)return 0;let{transitionDuration:D,transitionDelay:B}=window.getComputedStyle(R);const J=Number.parseFloat(D),Z=Number.parseFloat(B);return J||Z?(D=D.split(",")[0],B=B.split(",")[0],1e3*(Number.parseFloat(D)+Number.parseFloat(B))):0})(c)+5;let b=!1;const I=({target:R})=>{R===c&&(b=!0,c.removeEventListener(n,I),T(g))};c.addEventListener(n,I),setTimeout(()=>{b||i(c)},_)},N=(g,c,f,_)=>{const b=g.length;let I=g.indexOf(c);return I===-1?!f&&_?g[b-1]:g[0]:(I+=f?1:-1,_&&(I=(I+b)%b),g[Math.max(0,Math.min(I,b-1))])},k=/[^.]*(?=\..*)\.|.*/,L=/\..*/,$=/::\d+$/,ee={};let ae=1;const Te={mouseenter:"mouseover",mouseleave:"mouseout"},de=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ae(g,c){return c&&`${c}::${ae++}`||g.uidEvent||ae++}function at(g){const c=Ae(g);return g.uidEvent=c,ee[c]=ee[c]||{},ee[c]}function rn(g,c,f=null){return Object.values(g).find(_=>_.callable===c&&_.delegationSelector===f)}function dt(g,c,f){const _=typeof c=="string",b=_?f:c||f;let I=Ee(g);return de.has(I)||(I=g),[_,b,I]}function Dn(g,c,f,_,b){if(typeof c!="string"||!g)return;let[I,R,D]=dt(c,f,_);c in Te&&(R=(ge=>function(fe){if(!fe.relatedTarget||fe.relatedTarget!==fe.delegateTarget&&!fe.delegateTarget.contains(fe.relatedTarget))return ge.call(this,fe)})(R));const B=at(g),J=B[D]||(B[D]={}),Z=rn(J,R,I?f:null);if(Z)return void(Z.oneOff=Z.oneOff&&b);const K=Ae(R,c.replace(k,"")),be=I?function(le,ge,fe){return function me(Xe){const nt=le.querySelectorAll(ge);for(let{target:Se}=Xe;Se&&Se!==this;Se=Se.parentNode)for(const We of nt)if(We===Se)return It(Xe,{delegateTarget:Se}),me.oneOff&&S.off(le,Xe.type,ge,fe),fe.apply(Se,[Xe])}}(g,f,R):function(le,ge){return function fe(me){return It(me,{delegateTarget:le}),fe.oneOff&&S.off(le,me.type,ge),ge.apply(le,[me])}}(g,R);be.delegationSelector=I?f:null,be.callable=R,be.oneOff=b,be.uidEvent=K,J[K]=be,g.addEventListener(D,be,I)}function Gt(g,c,f,_,b){const I=rn(c[f],_,b);I&&(g.removeEventListener(f,I,!!b),delete c[f][I.uidEvent])}function xe(g,c,f,_){const b=c[f]||{};for(const[I,R]of Object.entries(b))I.includes(_)&&Gt(g,c,f,R.callable,R.delegationSelector)}function Ee(g){return g=g.replace(L,""),Te[g]||g}const S={on(g,c,f,_){Dn(g,c,f,_,!1)},one(g,c,f,_){Dn(g,c,f,_,!0)},off(g,c,f,_){if(typeof c!="string"||!g)return;const[b,I,R]=dt(c,f,_),D=R!==c,B=at(g),J=B[R]||{},Z=c.startsWith(".");if(I===void 0){if(Z)for(const K of Object.keys(B))xe(g,B,K,c.slice(1));for(const[K,be]of Object.entries(J)){const le=K.replace($,"");D&&!c.includes(le)||Gt(g,B,R,be.callable,be.delegationSelector)}}else{if(!Object.keys(J).length)return;Gt(g,B,R,I,b?f:null)}},trigger(g,c,f){if(typeof c!="string"||!g)return null;const _=p();let b=null,I=!0,R=!0,D=!1;c!==Ee(c)&&_&&(b=_.Event(c,f),_(g).trigger(b),I=!b.isPropagationStopped(),R=!b.isImmediatePropagationStopped(),D=b.isDefaultPrevented());const B=It(new Event(c,{bubbles:I,cancelable:!0}),f);return D&&B.preventDefault(),R&&g.dispatchEvent(B),B.defaultPrevented&&b&&b.preventDefault(),B}};function It(g,c={}){for(const[f,_]of Object.entries(c))try{g[f]=_}catch{Object.defineProperty(g,f,{configurable:!0,get:()=>_})}return g}function Ct(g){if(g==="true")return!0;if(g==="false")return!1;if(g===Number(g).toString())return Number(g);if(g===""||g==="null")return null;if(typeof g!="string")return g;try{return JSON.parse(decodeURIComponent(g))}catch{return g}}function Lt(g){return g.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}const He={setDataAttribute(g,c,f){g.setAttribute(`data-bs-${Lt(c)}`,f)},removeDataAttribute(g,c){g.removeAttribute(`data-bs-${Lt(c)}`)},getDataAttributes(g){if(!g)return{};const c={},f=Object.keys(g.dataset).filter(_=>_.startsWith("bs")&&!_.startsWith("bsConfig"));for(const _ of f){let b=_.replace(/^bs/,"");b=b.charAt(0).toLowerCase()+b.slice(1,b.length),c[b]=Ct(g.dataset[_])}return c},getDataAttribute:(g,c)=>Ct(g.getAttribute(`data-bs-${Lt(c)}`))};class mt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,f){const _=r(f)?He.getDataAttribute(f,"config"):{};return{...this.constructor.Default,...typeof _=="object"?_:{},...r(f)?He.getDataAttributes(f):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,f=this.constructor.DefaultType){for(const[b,I]of Object.entries(f)){const R=c[b],D=r(R)?"element":(_=R)==null?`${_}`:Object.prototype.toString.call(_).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(I).test(D))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${b}" provided type "${D}" but expected type "${I}".`)}var _}}class De extends mt{constructor(c,f){super(),(c=o(c))&&(this._element=c,this._config=this._getConfig(f),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),S.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,f,_=!0){A(c,f,_)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return e.get(o(c),this.DATA_KEY)}static getOrCreateInstance(c,f={}){return this.getInstance(c)||new this(c,typeof f=="object"?f:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}const Ft=g=>{let c=g.getAttribute("data-bs-target");if(!c||c==="#"){let f=g.getAttribute("href");if(!f||!f.includes("#")&&!f.startsWith("."))return null;f.includes("#")&&!f.startsWith("#")&&(f=`#${f.split("#")[1]}`),c=f&&f!=="#"?s(f.trim()):null}return c},Y={find:(g,c=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(c,g)),findOne:(g,c=document.documentElement)=>Element.prototype.querySelector.call(c,g),children:(g,c)=>[].concat(...g.children).filter(f=>f.matches(c)),parents(g,c){const f=[];let _=g.parentNode.closest(c);for(;_;)f.push(_),_=_.parentNode.closest(c);return f},prev(g,c){let f=g.previousElementSibling;for(;f;){if(f.matches(c))return[f];f=f.previousElementSibling}return[]},next(g,c){let f=g.nextElementSibling;for(;f;){if(f.matches(c))return[f];f=f.nextElementSibling}return[]},focusableChildren(g){const c=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(f=>`${f}:not([tabindex^="-"])`).join(",");return this.find(c,g).filter(f=>!l(f)&&a(f))},getSelectorFromElement(g){const c=Ft(g);return c&&Y.findOne(c)?c:null},getElementFromSelector(g){const c=Ft(g);return c?Y.findOne(c):null},getMultipleElementsFromSelector(g){const c=Ft(g);return c?Y.find(c):[]}},O=(g,c="hide")=>{const f=`click.dismiss${g.EVENT_KEY}`,_=g.NAME;S.on(document,f,`[data-bs-dismiss="${_}"]`,function(b){if(["A","AREA"].includes(this.tagName)&&b.preventDefault(),l(this))return;const I=Y.getElementFromSelector(this)||this.closest(`.${_}`);g.getOrCreateInstance(I)[c]()})},X=".bs.alert",H=`close${X}`,se=`closed${X}`;class Oe extends De{static get NAME(){return"alert"}close(){if(S.trigger(this._element,H).defaultPrevented)return;this._element.classList.remove("show");const c=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,c)}_destroyElement(){this._element.remove(),S.trigger(this._element,se),this.dispose()}static jQueryInterface(c){return this.each(function(){const f=Oe.getOrCreateInstance(this);if(typeof c=="string"){if(f[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);f[c](this)}})}}O(Oe,"close"),w(Oe);const v='[data-bs-toggle="button"]';class E extends De{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(c){return this.each(function(){const f=E.getOrCreateInstance(this);c==="toggle"&&f[c]()})}}S.on(document,"click.bs.button.data-api",v,g=>{g.preventDefault();const c=g.target.closest(v);E.getOrCreateInstance(c).toggle()}),w(E);const C=".bs.swipe",P=`touchstart${C}`,x=`touchmove${C}`,M=`touchend${C}`,G=`pointerdown${C}`,U=`pointerup${C}`,W={endCallback:null,leftCallback:null,rightCallback:null},F={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Q extends mt{constructor(c,f){super(),this._element=c,c&&Q.isSupported()&&(this._config=this._getConfig(f),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return W}static get DefaultType(){return F}static get NAME(){return"swipe"}dispose(){S.off(this._element,C)}_start(c){this._supportPointerEvents?this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX):this._deltaX=c.touches[0].clientX}_end(c){this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX-this._deltaX),this._handleSwipe(),T(this._config.endCallback)}_move(c){this._deltaX=c.touches&&c.touches.length>1?0:c.touches[0].clientX-this._deltaX}_handleSwipe(){const c=Math.abs(this._deltaX);if(c<=40)return;const f=c/this._deltaX;this._deltaX=0,f&&T(f>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(S.on(this._element,G,c=>this._start(c)),S.on(this._element,U,c=>this._end(c)),this._element.classList.add("pointer-event")):(S.on(this._element,P,c=>this._start(c)),S.on(this._element,x,c=>this._move(c)),S.on(this._element,M,c=>this._end(c)))}_eventIsPointerPenTouch(c){return this._supportPointerEvents&&(c.pointerType==="pen"||c.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ne=".bs.carousel",ie=".data-api",oe="next",ye="prev",Me="left",ze="right",_t=`slide${ne}`,on=`slid${ne}`,Gs=`keydown${ne}`,Gl=`mouseenter${ne}`,Mi=`mouseleave${ne}`,Kl=`dragstart${ne}`,an=`load${ne}${ie}`,Mn=`click${ne}${ie}`,zo="carousel",Ql="active",m_=".active",__=".carousel-item",rS=m_+__,oS={ArrowLeft:ze,ArrowRight:Me},aS={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},lS={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Sr extends De{constructor(c,f){super(c,f),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Y.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===zo&&this.cycle()}static get Default(){return aS}static get DefaultType(){return lS}static get NAME(){return"carousel"}next(){this._slide(oe)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(ye)}pause(){this._isSliding&&i(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?S.one(this._element,on,()=>this.cycle()):this.cycle())}to(c){const f=this._getItems();if(c>f.length-1||c<0)return;if(this._isSliding)return void S.one(this._element,on,()=>this.to(c));const _=this._getItemIndex(this._getActive());if(_===c)return;const b=c>_?oe:ye;this._slide(b,f[c])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(c){return c.defaultInterval=c.interval,c}_addEventListeners(){this._config.keyboard&&S.on(this._element,Gs,c=>this._keydown(c)),this._config.pause==="hover"&&(S.on(this._element,Gl,()=>this.pause()),S.on(this._element,Mi,()=>this._maybeEnableCycle())),this._config.touch&&Q.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const f of Y.find(".carousel-item img",this._element))S.on(f,Kl,_=>_.preventDefault());const c={leftCallback:()=>this._slide(this._directionToOrder(Me)),rightCallback:()=>this._slide(this._directionToOrder(ze)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new Q(this._element,c)}_keydown(c){if(/input|textarea/i.test(c.target.tagName))return;const f=oS[c.key];f&&(c.preventDefault(),this._slide(this._directionToOrder(f)))}_getItemIndex(c){return this._getItems().indexOf(c)}_setActiveIndicatorElement(c){if(!this._indicatorsElement)return;const f=Y.findOne(m_,this._indicatorsElement);f.classList.remove(Ql),f.removeAttribute("aria-current");const _=Y.findOne(`[data-bs-slide-to="${c}"]`,this._indicatorsElement);_&&(_.classList.add(Ql),_.setAttribute("aria-current","true"))}_updateInterval(){const c=this._activeElement||this._getActive();if(!c)return;const f=Number.parseInt(c.getAttribute("data-bs-interval"),10);this._config.interval=f||this._config.defaultInterval}_slide(c,f=null){if(this._isSliding)return;const _=this._getActive(),b=c===oe,I=f||N(this._getItems(),_,b,this._config.wrap);if(I===_)return;const R=this._getItemIndex(I),D=K=>S.trigger(this._element,K,{relatedTarget:I,direction:this._orderToDirection(c),from:this._getItemIndex(_),to:R});if(D(_t).defaultPrevented||!_||!I)return;const B=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(R),this._activeElement=I;const J=b?"carousel-item-start":"carousel-item-end",Z=b?"carousel-item-next":"carousel-item-prev";I.classList.add(Z),d(I),_.classList.add(J),I.classList.add(J),this._queueCallback(()=>{I.classList.remove(J,Z),I.classList.add(Ql),_.classList.remove(Ql,Z,J),this._isSliding=!1,D(on)},_,this._isAnimated()),B&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return Y.findOne(rS,this._element)}_getItems(){return Y.find(__,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(c){return y()?c===Me?ye:oe:c===Me?oe:ye}_orderToDirection(c){return y()?c===ye?Me:ze:c===ye?ze:Me}static jQueryInterface(c){return this.each(function(){const f=Sr.getOrCreateInstance(this,c);if(typeof c!="number"){if(typeof c=="string"){if(f[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);f[c]()}}else f.to(c)})}}S.on(document,Mn,"[data-bs-slide], [data-bs-slide-to]",function(g){const c=Y.getElementFromSelector(this);if(!c||!c.classList.contains(zo))return;g.preventDefault();const f=Sr.getOrCreateInstance(c),_=this.getAttribute("data-bs-slide-to");return _?(f.to(_),void f._maybeEnableCycle()):He.getDataAttribute(this,"slide")==="next"?(f.next(),void f._maybeEnableCycle()):(f.prev(),void f._maybeEnableCycle())}),S.on(window,an,()=>{const g=Y.find('[data-bs-ride="carousel"]');for(const c of g)Sr.getOrCreateInstance(c)}),w(Sr);const Go=".bs.collapse",cS=`show${Go}`,uS=`shown${Go}`,hS=`hide${Go}`,dS=`hidden${Go}`,fS=`click${Go}.data-api`,ld="show",Rr="collapse",Yl="collapsing",pS=`:scope .${Rr} .${Rr}`,cd='[data-bs-toggle="collapse"]',gS={parent:null,toggle:!0},mS={parent:"(null|element)",toggle:"boolean"};class Pr extends De{constructor(c,f){super(c,f),this._isTransitioning=!1,this._triggerArray=[];const _=Y.find(cd);for(const b of _){const I=Y.getSelectorFromElement(b),R=Y.find(I).filter(D=>D===this._element);I!==null&&R.length&&this._triggerArray.push(b)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return gS}static get DefaultType(){return mS}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(b=>b!==this._element).map(b=>Pr.getOrCreateInstance(b,{toggle:!1}))),c.length&&c[0]._isTransitioning||S.trigger(this._element,cS).defaultPrevented)return;for(const b of c)b.hide();const f=this._getDimension();this._element.classList.remove(Rr),this._element.classList.add(Yl),this._element.style[f]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const _=`scroll${f[0].toUpperCase()+f.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Yl),this._element.classList.add(Rr,ld),this._element.style[f]="",S.trigger(this._element,uS)},this._element,!0),this._element.style[f]=`${this._element[_]}px`}hide(){if(this._isTransitioning||!this._isShown()||S.trigger(this._element,hS).defaultPrevented)return;const c=this._getDimension();this._element.style[c]=`${this._element.getBoundingClientRect()[c]}px`,d(this._element),this._element.classList.add(Yl),this._element.classList.remove(Rr,ld);for(const f of this._triggerArray){const _=Y.getElementFromSelector(f);_&&!this._isShown(_)&&this._addAriaAndCollapsedClass([f],!1)}this._isTransitioning=!0,this._element.style[c]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Yl),this._element.classList.add(Rr),S.trigger(this._element,dS)},this._element,!0)}_isShown(c=this._element){return c.classList.contains(ld)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=o(c.parent),c}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(cd);for(const f of c){const _=Y.getElementFromSelector(f);_&&this._addAriaAndCollapsedClass([f],this._isShown(_))}}_getFirstLevelChildren(c){const f=Y.find(pS,this._config.parent);return Y.find(c,this._config.parent).filter(_=>!f.includes(_))}_addAriaAndCollapsedClass(c,f){if(c.length)for(const _ of c)_.classList.toggle("collapsed",!f),_.setAttribute("aria-expanded",f)}static jQueryInterface(c){const f={};return typeof c=="string"&&/show|hide/.test(c)&&(f.toggle=!1),this.each(function(){const _=Pr.getOrCreateInstance(this,f);if(typeof c=="string"){if(_[c]===void 0)throw new TypeError(`No method named "${c}"`);_[c]()}})}}S.on(document,fS,cd,function(g){(g.target.tagName==="A"||g.delegateTarget&&g.delegateTarget.tagName==="A")&&g.preventDefault();for(const c of Y.getMultipleElementsFromSelector(this))Pr.getOrCreateInstance(c,{toggle:!1}).toggle()}),w(Pr);var ln="top",bn="bottom",In="right",cn="left",Xl="auto",kr=[ln,bn,In,cn],Li="start",Or="end",y_="clippingParents",ud="viewport",Nr="popper",v_="reference",hd=kr.reduce(function(g,c){return g.concat([c+"-"+Li,c+"-"+Or])},[]),dd=[].concat(kr,[Xl]).reduce(function(g,c){return g.concat([c,c+"-"+Li,c+"-"+Or])},[]),E_="beforeRead",w_="read",T_="afterRead",b_="beforeMain",I_="main",C_="afterMain",A_="beforeWrite",S_="write",R_="afterWrite",P_=[E_,w_,T_,b_,I_,C_,A_,S_,R_];function rs(g){return g?(g.nodeName||"").toLowerCase():null}function Cn(g){if(g==null)return window;if(g.toString()!=="[object Window]"){var c=g.ownerDocument;return c&&c.defaultView||window}return g}function Fi(g){return g instanceof Cn(g).Element||g instanceof Element}function Ln(g){return g instanceof Cn(g).HTMLElement||g instanceof HTMLElement}function fd(g){return typeof ShadowRoot<"u"&&(g instanceof Cn(g).ShadowRoot||g instanceof ShadowRoot)}const pd={name:"applyStyles",enabled:!0,phase:"write",fn:function(g){var c=g.state;Object.keys(c.elements).forEach(function(f){var _=c.styles[f]||{},b=c.attributes[f]||{},I=c.elements[f];Ln(I)&&rs(I)&&(Object.assign(I.style,_),Object.keys(b).forEach(function(R){var D=b[R];D===!1?I.removeAttribute(R):I.setAttribute(R,D===!0?"":D)}))})},effect:function(g){var c=g.state,f={popper:{position:c.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(c.elements.popper.style,f.popper),c.styles=f,c.elements.arrow&&Object.assign(c.elements.arrow.style,f.arrow),function(){Object.keys(c.elements).forEach(function(_){var b=c.elements[_],I=c.attributes[_]||{},R=Object.keys(c.styles.hasOwnProperty(_)?c.styles[_]:f[_]).reduce(function(D,B){return D[B]="",D},{});Ln(b)&&rs(b)&&(Object.assign(b.style,R),Object.keys(I).forEach(function(D){b.removeAttribute(D)}))})}},requires:["computeStyles"]};function os(g){return g.split("-")[0]}var Vi=Math.max,Jl=Math.min,xr=Math.round;function gd(){var g=navigator.userAgentData;return g!=null&&g.brands&&Array.isArray(g.brands)?g.brands.map(function(c){return c.brand+"/"+c.version}).join(" "):navigator.userAgent}function k_(){return!/^((?!chrome|android).)*safari/i.test(gd())}function Dr(g,c,f){c===void 0&&(c=!1),f===void 0&&(f=!1);var _=g.getBoundingClientRect(),b=1,I=1;c&&Ln(g)&&(b=g.offsetWidth>0&&xr(_.width)/g.offsetWidth||1,I=g.offsetHeight>0&&xr(_.height)/g.offsetHeight||1);var R=(Fi(g)?Cn(g):window).visualViewport,D=!k_()&&f,B=(_.left+(D&&R?R.offsetLeft:0))/b,J=(_.top+(D&&R?R.offsetTop:0))/I,Z=_.width/b,K=_.height/I;return{width:Z,height:K,top:J,right:B+Z,bottom:J+K,left:B,x:B,y:J}}function md(g){var c=Dr(g),f=g.offsetWidth,_=g.offsetHeight;return Math.abs(c.width-f)<=1&&(f=c.width),Math.abs(c.height-_)<=1&&(_=c.height),{x:g.offsetLeft,y:g.offsetTop,width:f,height:_}}function O_(g,c){var f=c.getRootNode&&c.getRootNode();if(g.contains(c))return!0;if(f&&fd(f)){var _=c;do{if(_&&g.isSameNode(_))return!0;_=_.parentNode||_.host}while(_)}return!1}function Ps(g){return Cn(g).getComputedStyle(g)}function _S(g){return["table","td","th"].indexOf(rs(g))>=0}function Ks(g){return((Fi(g)?g.ownerDocument:g.document)||window.document).documentElement}function Zl(g){return rs(g)==="html"?g:g.assignedSlot||g.parentNode||(fd(g)?g.host:null)||Ks(g)}function N_(g){return Ln(g)&&Ps(g).position!=="fixed"?g.offsetParent:null}function Ko(g){for(var c=Cn(g),f=N_(g);f&&_S(f)&&Ps(f).position==="static";)f=N_(f);return f&&(rs(f)==="html"||rs(f)==="body"&&Ps(f).position==="static")?c:f||function(_){var b=/firefox/i.test(gd());if(/Trident/i.test(gd())&&Ln(_)&&Ps(_).position==="fixed")return null;var I=Zl(_);for(fd(I)&&(I=I.host);Ln(I)&&["html","body"].indexOf(rs(I))<0;){var R=Ps(I);if(R.transform!=="none"||R.perspective!=="none"||R.contain==="paint"||["transform","perspective"].indexOf(R.willChange)!==-1||b&&R.willChange==="filter"||b&&R.filter&&R.filter!=="none")return I;I=I.parentNode}return null}(g)||c}function _d(g){return["top","bottom"].indexOf(g)>=0?"x":"y"}function Qo(g,c,f){return Vi(g,Jl(c,f))}function x_(g){return Object.assign({},{top:0,right:0,bottom:0,left:0},g)}function D_(g,c){return c.reduce(function(f,_){return f[_]=g,f},{})}const M_={name:"arrow",enabled:!0,phase:"main",fn:function(g){var c,f=g.state,_=g.name,b=g.options,I=f.elements.arrow,R=f.modifiersData.popperOffsets,D=os(f.placement),B=_d(D),J=[cn,In].indexOf(D)>=0?"height":"width";if(I&&R){var Z=function(Je,Ke){return x_(typeof(Je=typeof Je=="function"?Je(Object.assign({},Ke.rects,{placement:Ke.placement})):Je)!="number"?Je:D_(Je,kr))}(b.padding,f),K=md(I),be=B==="y"?ln:cn,le=B==="y"?bn:In,ge=f.rects.reference[J]+f.rects.reference[B]-R[B]-f.rects.popper[J],fe=R[B]-f.rects.reference[B],me=Ko(I),Xe=me?B==="y"?me.clientHeight||0:me.clientWidth||0:0,nt=ge/2-fe/2,Se=Z[be],We=Xe-K[J]-Z[le],Ce=Xe/2-K[J]/2+nt,Le=Qo(Se,Ce,We),Ge=B;f.modifiersData[_]=((c={})[Ge]=Le,c.centerOffset=Le-Ce,c)}},effect:function(g){var c=g.state,f=g.options.element,_=f===void 0?"[data-popper-arrow]":f;_!=null&&(typeof _!="string"||(_=c.elements.popper.querySelector(_)))&&O_(c.elements.popper,_)&&(c.elements.arrow=_)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Mr(g){return g.split("-")[1]}var yS={top:"auto",right:"auto",bottom:"auto",left:"auto"};function L_(g){var c,f=g.popper,_=g.popperRect,b=g.placement,I=g.variation,R=g.offsets,D=g.position,B=g.gpuAcceleration,J=g.adaptive,Z=g.roundOffsets,K=g.isFixed,be=R.x,le=be===void 0?0:be,ge=R.y,fe=ge===void 0?0:ge,me=typeof Z=="function"?Z({x:le,y:fe}):{x:le,y:fe};le=me.x,fe=me.y;var Xe=R.hasOwnProperty("x"),nt=R.hasOwnProperty("y"),Se=cn,We=ln,Ce=window;if(J){var Le=Ko(f),Ge="clientHeight",Je="clientWidth";Le===Cn(f)&&Ps(Le=Ks(f)).position!=="static"&&D==="absolute"&&(Ge="scrollHeight",Je="scrollWidth"),(b===ln||(b===cn||b===In)&&I===Or)&&(We=bn,fe-=(K&&Le===Ce&&Ce.visualViewport?Ce.visualViewport.height:Le[Ge])-_.height,fe*=B?1:-1),b!==cn&&(b!==ln&&b!==bn||I!==Or)||(Se=In,le-=(K&&Le===Ce&&Ce.visualViewport?Ce.visualViewport.width:Le[Je])-_.width,le*=B?1:-1)}var Ke,ft=Object.assign({position:D},J&&yS),An=Z===!0?function(zn,un){var Vn=zn.x,$n=zn.y,lt=un.devicePixelRatio||1;return{x:xr(Vn*lt)/lt||0,y:xr($n*lt)/lt||0}}({x:le,y:fe},Cn(f)):{x:le,y:fe};return le=An.x,fe=An.y,B?Object.assign({},ft,((Ke={})[We]=nt?"0":"",Ke[Se]=Xe?"0":"",Ke.transform=(Ce.devicePixelRatio||1)<=1?"translate("+le+"px, "+fe+"px)":"translate3d("+le+"px, "+fe+"px, 0)",Ke)):Object.assign({},ft,((c={})[We]=nt?fe+"px":"",c[Se]=Xe?le+"px":"",c.transform="",c))}const yd={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(g){var c=g.state,f=g.options,_=f.gpuAcceleration,b=_===void 0||_,I=f.adaptive,R=I===void 0||I,D=f.roundOffsets,B=D===void 0||D,J={placement:os(c.placement),variation:Mr(c.placement),popper:c.elements.popper,popperRect:c.rects.popper,gpuAcceleration:b,isFixed:c.options.strategy==="fixed"};c.modifiersData.popperOffsets!=null&&(c.styles.popper=Object.assign({},c.styles.popper,L_(Object.assign({},J,{offsets:c.modifiersData.popperOffsets,position:c.options.strategy,adaptive:R,roundOffsets:B})))),c.modifiersData.arrow!=null&&(c.styles.arrow=Object.assign({},c.styles.arrow,L_(Object.assign({},J,{offsets:c.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:B})))),c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-placement":c.placement})},data:{}};var ec={passive:!0};const vd={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(g){var c=g.state,f=g.instance,_=g.options,b=_.scroll,I=b===void 0||b,R=_.resize,D=R===void 0||R,B=Cn(c.elements.popper),J=[].concat(c.scrollParents.reference,c.scrollParents.popper);return I&&J.forEach(function(Z){Z.addEventListener("scroll",f.update,ec)}),D&&B.addEventListener("resize",f.update,ec),function(){I&&J.forEach(function(Z){Z.removeEventListener("scroll",f.update,ec)}),D&&B.removeEventListener("resize",f.update,ec)}},data:{}};var vS={left:"right",right:"left",bottom:"top",top:"bottom"};function tc(g){return g.replace(/left|right|bottom|top/g,function(c){return vS[c]})}var ES={start:"end",end:"start"};function F_(g){return g.replace(/start|end/g,function(c){return ES[c]})}function Ed(g){var c=Cn(g);return{scrollLeft:c.pageXOffset,scrollTop:c.pageYOffset}}function wd(g){return Dr(Ks(g)).left+Ed(g).scrollLeft}function Td(g){var c=Ps(g),f=c.overflow,_=c.overflowX,b=c.overflowY;return/auto|scroll|overlay|hidden/.test(f+b+_)}function V_(g){return["html","body","#document"].indexOf(rs(g))>=0?g.ownerDocument.body:Ln(g)&&Td(g)?g:V_(Zl(g))}function Yo(g,c){var f;c===void 0&&(c=[]);var _=V_(g),b=_===((f=g.ownerDocument)==null?void 0:f.body),I=Cn(_),R=b?[I].concat(I.visualViewport||[],Td(_)?_:[]):_,D=c.concat(R);return b?D:D.concat(Yo(Zl(R)))}function bd(g){return Object.assign({},g,{left:g.x,top:g.y,right:g.x+g.width,bottom:g.y+g.height})}function $_(g,c,f){return c===ud?bd(function(_,b){var I=Cn(_),R=Ks(_),D=I.visualViewport,B=R.clientWidth,J=R.clientHeight,Z=0,K=0;if(D){B=D.width,J=D.height;var be=k_();(be||!be&&b==="fixed")&&(Z=D.offsetLeft,K=D.offsetTop)}return{width:B,height:J,x:Z+wd(_),y:K}}(g,f)):Fi(c)?function(_,b){var I=Dr(_,!1,b==="fixed");return I.top=I.top+_.clientTop,I.left=I.left+_.clientLeft,I.bottom=I.top+_.clientHeight,I.right=I.left+_.clientWidth,I.width=_.clientWidth,I.height=_.clientHeight,I.x=I.left,I.y=I.top,I}(c,f):bd(function(_){var b,I=Ks(_),R=Ed(_),D=(b=_.ownerDocument)==null?void 0:b.body,B=Vi(I.scrollWidth,I.clientWidth,D?D.scrollWidth:0,D?D.clientWidth:0),J=Vi(I.scrollHeight,I.clientHeight,D?D.scrollHeight:0,D?D.clientHeight:0),Z=-R.scrollLeft+wd(_),K=-R.scrollTop;return Ps(D||I).direction==="rtl"&&(Z+=Vi(I.clientWidth,D?D.clientWidth:0)-B),{width:B,height:J,x:Z,y:K}}(Ks(g)))}function U_(g){var c,f=g.reference,_=g.element,b=g.placement,I=b?os(b):null,R=b?Mr(b):null,D=f.x+f.width/2-_.width/2,B=f.y+f.height/2-_.height/2;switch(I){case ln:c={x:D,y:f.y-_.height};break;case bn:c={x:D,y:f.y+f.height};break;case In:c={x:f.x+f.width,y:B};break;case cn:c={x:f.x-_.width,y:B};break;default:c={x:f.x,y:f.y}}var J=I?_d(I):null;if(J!=null){var Z=J==="y"?"height":"width";switch(R){case Li:c[J]=c[J]-(f[Z]/2-_[Z]/2);break;case Or:c[J]=c[J]+(f[Z]/2-_[Z]/2)}}return c}function Lr(g,c){c===void 0&&(c={});var f=c,_=f.placement,b=_===void 0?g.placement:_,I=f.strategy,R=I===void 0?g.strategy:I,D=f.boundary,B=D===void 0?y_:D,J=f.rootBoundary,Z=J===void 0?ud:J,K=f.elementContext,be=K===void 0?Nr:K,le=f.altBoundary,ge=le!==void 0&&le,fe=f.padding,me=fe===void 0?0:fe,Xe=x_(typeof me!="number"?me:D_(me,kr)),nt=be===Nr?v_:Nr,Se=g.rects.popper,We=g.elements[ge?nt:be],Ce=function(un,Vn,$n,lt){var as=Vn==="clippingParents"?function(Ze){var hn=Yo(Zl(Ze)),Un=["absolute","fixed"].indexOf(Ps(Ze).position)>=0&&Ln(Ze)?Ko(Ze):Ze;return Fi(Un)?hn.filter(function(Ys){return Fi(Ys)&&O_(Ys,Un)&&rs(Ys)!=="body"}):[]}(un):[].concat(Vn),ls=[].concat(as,[$n]),$r=ls[0],kt=ls.reduce(function(Ze,hn){var Un=$_(un,hn,lt);return Ze.top=Vi(Un.top,Ze.top),Ze.right=Jl(Un.right,Ze.right),Ze.bottom=Jl(Un.bottom,Ze.bottom),Ze.left=Vi(Un.left,Ze.left),Ze},$_(un,$r,lt));return kt.width=kt.right-kt.left,kt.height=kt.bottom-kt.top,kt.x=kt.left,kt.y=kt.top,kt}(Fi(We)?We:We.contextElement||Ks(g.elements.popper),B,Z,R),Le=Dr(g.elements.reference),Ge=U_({reference:Le,element:Se,strategy:"absolute",placement:b}),Je=bd(Object.assign({},Se,Ge)),Ke=be===Nr?Je:Le,ft={top:Ce.top-Ke.top+Xe.top,bottom:Ke.bottom-Ce.bottom+Xe.bottom,left:Ce.left-Ke.left+Xe.left,right:Ke.right-Ce.right+Xe.right},An=g.modifiersData.offset;if(be===Nr&&An){var zn=An[b];Object.keys(ft).forEach(function(un){var Vn=[In,bn].indexOf(un)>=0?1:-1,$n=[ln,bn].indexOf(un)>=0?"y":"x";ft[un]+=zn[$n]*Vn})}return ft}function wS(g,c){c===void 0&&(c={});var f=c,_=f.placement,b=f.boundary,I=f.rootBoundary,R=f.padding,D=f.flipVariations,B=f.allowedAutoPlacements,J=B===void 0?dd:B,Z=Mr(_),K=Z?D?hd:hd.filter(function(ge){return Mr(ge)===Z}):kr,be=K.filter(function(ge){return J.indexOf(ge)>=0});be.length===0&&(be=K);var le=be.reduce(function(ge,fe){return ge[fe]=Lr(g,{placement:fe,boundary:b,rootBoundary:I,padding:R})[os(fe)],ge},{});return Object.keys(le).sort(function(ge,fe){return le[ge]-le[fe]})}const j_={name:"flip",enabled:!0,phase:"main",fn:function(g){var c=g.state,f=g.options,_=g.name;if(!c.modifiersData[_]._skip){for(var b=f.mainAxis,I=b===void 0||b,R=f.altAxis,D=R===void 0||R,B=f.fallbackPlacements,J=f.padding,Z=f.boundary,K=f.rootBoundary,be=f.altBoundary,le=f.flipVariations,ge=le===void 0||le,fe=f.allowedAutoPlacements,me=c.options.placement,Xe=os(me),nt=B||(Xe!==me&&ge?function(Ze){if(os(Ze)===Xl)return[];var hn=tc(Ze);return[F_(Ze),hn,F_(hn)]}(me):[tc(me)]),Se=[me].concat(nt).reduce(function(Ze,hn){return Ze.concat(os(hn)===Xl?wS(c,{placement:hn,boundary:Z,rootBoundary:K,padding:J,flipVariations:ge,allowedAutoPlacements:fe}):hn)},[]),We=c.rects.reference,Ce=c.rects.popper,Le=new Map,Ge=!0,Je=Se[0],Ke=0;Ke<Se.length;Ke++){var ft=Se[Ke],An=os(ft),zn=Mr(ft)===Li,un=[ln,bn].indexOf(An)>=0,Vn=un?"width":"height",$n=Lr(c,{placement:ft,boundary:Z,rootBoundary:K,altBoundary:be,padding:J}),lt=un?zn?In:cn:zn?bn:ln;We[Vn]>Ce[Vn]&&(lt=tc(lt));var as=tc(lt),ls=[];if(I&&ls.push($n[An]<=0),D&&ls.push($n[lt]<=0,$n[as]<=0),ls.every(function(Ze){return Ze})){Je=ft,Ge=!1;break}Le.set(ft,ls)}if(Ge)for(var $r=function(Ze){var hn=Se.find(function(Un){var Ys=Le.get(Un);if(Ys)return Ys.slice(0,Ze).every(function(uc){return uc})});if(hn)return Je=hn,"break"},kt=ge?3:1;kt>0&&$r(kt)!=="break";kt--);c.placement!==Je&&(c.modifiersData[_]._skip=!0,c.placement=Je,c.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function B_(g,c,f){return f===void 0&&(f={x:0,y:0}),{top:g.top-c.height-f.y,right:g.right-c.width+f.x,bottom:g.bottom-c.height+f.y,left:g.left-c.width-f.x}}function W_(g){return[ln,In,bn,cn].some(function(c){return g[c]>=0})}const H_={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(g){var c=g.state,f=g.name,_=c.rects.reference,b=c.rects.popper,I=c.modifiersData.preventOverflow,R=Lr(c,{elementContext:"reference"}),D=Lr(c,{altBoundary:!0}),B=B_(R,_),J=B_(D,b,I),Z=W_(B),K=W_(J);c.modifiersData[f]={referenceClippingOffsets:B,popperEscapeOffsets:J,isReferenceHidden:Z,hasPopperEscaped:K},c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-reference-hidden":Z,"data-popper-escaped":K})}},q_={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(g){var c=g.state,f=g.options,_=g.name,b=f.offset,I=b===void 0?[0,0]:b,R=dd.reduce(function(Z,K){return Z[K]=function(be,le,ge){var fe=os(be),me=[cn,ln].indexOf(fe)>=0?-1:1,Xe=typeof ge=="function"?ge(Object.assign({},le,{placement:be})):ge,nt=Xe[0],Se=Xe[1];return nt=nt||0,Se=(Se||0)*me,[cn,In].indexOf(fe)>=0?{x:Se,y:nt}:{x:nt,y:Se}}(K,c.rects,I),Z},{}),D=R[c.placement],B=D.x,J=D.y;c.modifiersData.popperOffsets!=null&&(c.modifiersData.popperOffsets.x+=B,c.modifiersData.popperOffsets.y+=J),c.modifiersData[_]=R}},Id={name:"popperOffsets",enabled:!0,phase:"read",fn:function(g){var c=g.state,f=g.name;c.modifiersData[f]=U_({reference:c.rects.reference,element:c.rects.popper,strategy:"absolute",placement:c.placement})},data:{}},z_={name:"preventOverflow",enabled:!0,phase:"main",fn:function(g){var c=g.state,f=g.options,_=g.name,b=f.mainAxis,I=b===void 0||b,R=f.altAxis,D=R!==void 0&&R,B=f.boundary,J=f.rootBoundary,Z=f.altBoundary,K=f.padding,be=f.tether,le=be===void 0||be,ge=f.tetherOffset,fe=ge===void 0?0:ge,me=Lr(c,{boundary:B,rootBoundary:J,padding:K,altBoundary:Z}),Xe=os(c.placement),nt=Mr(c.placement),Se=!nt,We=_d(Xe),Ce=We==="x"?"y":"x",Le=c.modifiersData.popperOffsets,Ge=c.rects.reference,Je=c.rects.popper,Ke=typeof fe=="function"?fe(Object.assign({},c.rects,{placement:c.placement})):fe,ft=typeof Ke=="number"?{mainAxis:Ke,altAxis:Ke}:Object.assign({mainAxis:0,altAxis:0},Ke),An=c.modifiersData.offset?c.modifiersData.offset[c.placement]:null,zn={x:0,y:0};if(Le){if(I){var un,Vn=We==="y"?ln:cn,$n=We==="y"?bn:In,lt=We==="y"?"height":"width",as=Le[We],ls=as+me[Vn],$r=as-me[$n],kt=le?-Je[lt]/2:0,Ze=nt===Li?Ge[lt]:Je[lt],hn=nt===Li?-Je[lt]:-Ge[lt],Un=c.elements.arrow,Ys=le&&Un?md(Un):{width:0,height:0},uc=c.modifiersData["arrow#persistent"]?c.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Ny=uc[Vn],xy=uc[$n],hc=Qo(0,Ge[lt],Ys[lt]),YR=Se?Ge[lt]/2-kt-hc-Ny-ft.mainAxis:Ze-hc-Ny-ft.mainAxis,XR=Se?-Ge[lt]/2+kt+hc+xy+ft.mainAxis:hn+hc+xy+ft.mainAxis,Fd=c.elements.arrow&&Ko(c.elements.arrow),JR=Fd?We==="y"?Fd.clientTop||0:Fd.clientLeft||0:0,Dy=(un=An==null?void 0:An[We])!=null?un:0,ZR=as+XR-Dy,My=Qo(le?Jl(ls,as+YR-Dy-JR):ls,as,le?Vi($r,ZR):$r);Le[We]=My,zn[We]=My-as}if(D){var Ly,eP=We==="x"?ln:cn,tP=We==="x"?bn:In,zi=Le[Ce],dc=Ce==="y"?"height":"width",Fy=zi+me[eP],Vy=zi-me[tP],Vd=[ln,cn].indexOf(Xe)!==-1,$y=(Ly=An==null?void 0:An[Ce])!=null?Ly:0,Uy=Vd?Fy:zi-Ge[dc]-Je[dc]-$y+ft.altAxis,jy=Vd?zi+Ge[dc]+Je[dc]-$y-ft.altAxis:Vy,By=le&&Vd?function(nP,sP,$d){var Wy=Qo(nP,sP,$d);return Wy>$d?$d:Wy}(Uy,zi,jy):Qo(le?Uy:Fy,zi,le?jy:Vy);Le[Ce]=By,zn[Ce]=By-zi}c.modifiersData[_]=zn}},requiresIfExists:["offset"]};function TS(g,c,f){f===void 0&&(f=!1);var _,b,I=Ln(c),R=Ln(c)&&function(K){var be=K.getBoundingClientRect(),le=xr(be.width)/K.offsetWidth||1,ge=xr(be.height)/K.offsetHeight||1;return le!==1||ge!==1}(c),D=Ks(c),B=Dr(g,R,f),J={scrollLeft:0,scrollTop:0},Z={x:0,y:0};return(I||!I&&!f)&&((rs(c)!=="body"||Td(D))&&(J=(_=c)!==Cn(_)&&Ln(_)?{scrollLeft:(b=_).scrollLeft,scrollTop:b.scrollTop}:Ed(_)),Ln(c)?((Z=Dr(c,!0)).x+=c.clientLeft,Z.y+=c.clientTop):D&&(Z.x=wd(D))),{x:B.left+J.scrollLeft-Z.x,y:B.top+J.scrollTop-Z.y,width:B.width,height:B.height}}function bS(g){var c=new Map,f=new Set,_=[];function b(I){f.add(I.name),[].concat(I.requires||[],I.requiresIfExists||[]).forEach(function(R){if(!f.has(R)){var D=c.get(R);D&&b(D)}}),_.push(I)}return g.forEach(function(I){c.set(I.name,I)}),g.forEach(function(I){f.has(I.name)||b(I)}),_}var G_={placement:"bottom",modifiers:[],strategy:"absolute"};function K_(){for(var g=arguments.length,c=new Array(g),f=0;f<g;f++)c[f]=arguments[f];return!c.some(function(_){return!(_&&typeof _.getBoundingClientRect=="function")})}function nc(g){g===void 0&&(g={});var c=g,f=c.defaultModifiers,_=f===void 0?[]:f,b=c.defaultOptions,I=b===void 0?G_:b;return function(R,D,B){B===void 0&&(B=I);var J,Z,K={placement:"bottom",orderedModifiers:[],options:Object.assign({},G_,I),modifiersData:{},elements:{reference:R,popper:D},attributes:{},styles:{}},be=[],le=!1,ge={state:K,setOptions:function(me){var Xe=typeof me=="function"?me(K.options):me;fe(),K.options=Object.assign({},I,K.options,Xe),K.scrollParents={reference:Fi(R)?Yo(R):R.contextElement?Yo(R.contextElement):[],popper:Yo(D)};var nt,Se,We=function(Ce){var Le=bS(Ce);return P_.reduce(function(Ge,Je){return Ge.concat(Le.filter(function(Ke){return Ke.phase===Je}))},[])}((nt=[].concat(_,K.options.modifiers),Se=nt.reduce(function(Ce,Le){var Ge=Ce[Le.name];return Ce[Le.name]=Ge?Object.assign({},Ge,Le,{options:Object.assign({},Ge.options,Le.options),data:Object.assign({},Ge.data,Le.data)}):Le,Ce},{}),Object.keys(Se).map(function(Ce){return Se[Ce]})));return K.orderedModifiers=We.filter(function(Ce){return Ce.enabled}),K.orderedModifiers.forEach(function(Ce){var Le=Ce.name,Ge=Ce.options,Je=Ge===void 0?{}:Ge,Ke=Ce.effect;if(typeof Ke=="function"){var ft=Ke({state:K,name:Le,instance:ge,options:Je});be.push(ft||function(){})}}),ge.update()},forceUpdate:function(){if(!le){var me=K.elements,Xe=me.reference,nt=me.popper;if(K_(Xe,nt)){K.rects={reference:TS(Xe,Ko(nt),K.options.strategy==="fixed"),popper:md(nt)},K.reset=!1,K.placement=K.options.placement,K.orderedModifiers.forEach(function(Ke){return K.modifiersData[Ke.name]=Object.assign({},Ke.data)});for(var Se=0;Se<K.orderedModifiers.length;Se++)if(K.reset!==!0){var We=K.orderedModifiers[Se],Ce=We.fn,Le=We.options,Ge=Le===void 0?{}:Le,Je=We.name;typeof Ce=="function"&&(K=Ce({state:K,options:Ge,name:Je,instance:ge})||K)}else K.reset=!1,Se=-1}}},update:(J=function(){return new Promise(function(me){ge.forceUpdate(),me(K)})},function(){return Z||(Z=new Promise(function(me){Promise.resolve().then(function(){Z=void 0,me(J())})})),Z}),destroy:function(){fe(),le=!0}};if(!K_(R,D))return ge;function fe(){be.forEach(function(me){return me()}),be=[]}return ge.setOptions(B).then(function(me){!le&&B.onFirstUpdate&&B.onFirstUpdate(me)}),ge}}var IS=nc(),CS=nc({defaultModifiers:[vd,Id,yd,pd]}),Cd=nc({defaultModifiers:[vd,Id,yd,pd,q_,j_,z_,M_,H_]});const Q_=Object.freeze(Object.defineProperty({__proto__:null,afterMain:C_,afterRead:T_,afterWrite:R_,applyStyles:pd,arrow:M_,auto:Xl,basePlacements:kr,beforeMain:b_,beforeRead:E_,beforeWrite:A_,bottom:bn,clippingParents:y_,computeStyles:yd,createPopper:Cd,createPopperBase:IS,createPopperLite:CS,detectOverflow:Lr,end:Or,eventListeners:vd,flip:j_,hide:H_,left:cn,main:I_,modifierPhases:P_,offset:q_,placements:dd,popper:Nr,popperGenerator:nc,popperOffsets:Id,preventOverflow:z_,read:w_,reference:v_,right:In,start:Li,top:ln,variationPlacements:hd,viewport:ud,write:S_},Symbol.toStringTag,{value:"Module"})),Y_="dropdown",$i=".bs.dropdown",Ad=".data-api",AS="ArrowUp",X_="ArrowDown",SS=`hide${$i}`,RS=`hidden${$i}`,PS=`show${$i}`,kS=`shown${$i}`,J_=`click${$i}${Ad}`,Z_=`keydown${$i}${Ad}`,OS=`keyup${$i}${Ad}`,Fr="show",Ui='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',NS=`${Ui}.${Fr}`,sc=".dropdown-menu",xS=y()?"top-end":"top-start",DS=y()?"top-start":"top-end",MS=y()?"bottom-end":"bottom-start",LS=y()?"bottom-start":"bottom-end",FS=y()?"left-start":"right-start",VS=y()?"right-start":"left-start",$S={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},US={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class qn extends De{constructor(c,f){super(c,f),this._popper=null,this._parent=this._element.parentNode,this._menu=Y.next(this._element,sc)[0]||Y.prev(this._element,sc)[0]||Y.findOne(sc,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return $S}static get DefaultType(){return US}static get NAME(){return Y_}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const c={relatedTarget:this._element};if(!S.trigger(this._element,PS,c).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const f of[].concat(...document.body.children))S.on(f,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Fr),this._element.classList.add(Fr),S.trigger(this._element,kS,c)}}hide(){if(l(this._element)||!this._isShown())return;const c={relatedTarget:this._element};this._completeHide(c)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(c){if(!S.trigger(this._element,SS,c).defaultPrevented){if("ontouchstart"in document.documentElement)for(const f of[].concat(...document.body.children))S.off(f,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(Fr),this._element.classList.remove(Fr),this._element.setAttribute("aria-expanded","false"),He.removeDataAttribute(this._menu,"popper"),S.trigger(this._element,RS,c)}}_getConfig(c){if(typeof(c=super._getConfig(c)).reference=="object"&&!r(c.reference)&&typeof c.reference.getBoundingClientRect!="function")throw new TypeError(`${Y_.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return c}_createPopper(){if(Q_===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let c=this._element;this._config.reference==="parent"?c=this._parent:r(this._config.reference)?c=o(this._config.reference):typeof this._config.reference=="object"&&(c=this._config.reference);const f=this._getPopperConfig();this._popper=Cd(c,this._menu,f)}_isShown(){return this._menu.classList.contains(Fr)}_getPlacement(){const c=this._parent;if(c.classList.contains("dropend"))return FS;if(c.classList.contains("dropstart"))return VS;if(c.classList.contains("dropup-center"))return"top";if(c.classList.contains("dropdown-center"))return"bottom";const f=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return c.classList.contains("dropup")?f?DS:xS:f?LS:MS}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(f=>Number.parseInt(f,10)):typeof c=="function"?f=>c(f,this._element):c}_getPopperConfig(){const c={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(He.setDataAttribute(this._menu,"popper","static"),c.modifiers=[{name:"applyStyles",enabled:!1}]),{...c,...T(this._config.popperConfig,[c])}}_selectMenuItem({key:c,target:f}){const _=Y.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(b=>a(b));_.length&&N(_,f,c===X_,!_.includes(f)).focus()}static jQueryInterface(c){return this.each(function(){const f=qn.getOrCreateInstance(this,c);if(typeof c=="string"){if(f[c]===void 0)throw new TypeError(`No method named "${c}"`);f[c]()}})}static clearMenus(c){if(c.button===2||c.type==="keyup"&&c.key!=="Tab")return;const f=Y.find(NS);for(const _ of f){const b=qn.getInstance(_);if(!b||b._config.autoClose===!1)continue;const I=c.composedPath(),R=I.includes(b._menu);if(I.includes(b._element)||b._config.autoClose==="inside"&&!R||b._config.autoClose==="outside"&&R||b._menu.contains(c.target)&&(c.type==="keyup"&&c.key==="Tab"||/input|select|option|textarea|form/i.test(c.target.tagName)))continue;const D={relatedTarget:b._element};c.type==="click"&&(D.clickEvent=c),b._completeHide(D)}}static dataApiKeydownHandler(c){const f=/input|textarea/i.test(c.target.tagName),_=c.key==="Escape",b=[AS,X_].includes(c.key);if(!b&&!_||f&&!_)return;c.preventDefault();const I=this.matches(Ui)?this:Y.prev(this,Ui)[0]||Y.next(this,Ui)[0]||Y.findOne(Ui,c.delegateTarget.parentNode),R=qn.getOrCreateInstance(I);if(b)return c.stopPropagation(),R.show(),void R._selectMenuItem(c);R._isShown()&&(c.stopPropagation(),R.hide(),I.focus())}}S.on(document,Z_,Ui,qn.dataApiKeydownHandler),S.on(document,Z_,sc,qn.dataApiKeydownHandler),S.on(document,J_,qn.clearMenus),S.on(document,OS,qn.clearMenus),S.on(document,J_,Ui,function(g){g.preventDefault(),qn.getOrCreateInstance(this).toggle()}),w(qn);const ey="backdrop",ty="show",ny=`mousedown.bs.${ey}`,jS={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},BS={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class sy extends mt{constructor(c){super(),this._config=this._getConfig(c),this._isAppended=!1,this._element=null}static get Default(){return jS}static get DefaultType(){return BS}static get NAME(){return ey}show(c){if(!this._config.isVisible)return void T(c);this._append();const f=this._getElement();this._config.isAnimated&&d(f),f.classList.add(ty),this._emulateAnimation(()=>{T(c)})}hide(c){this._config.isVisible?(this._getElement().classList.remove(ty),this._emulateAnimation(()=>{this.dispose(),T(c)})):T(c)}dispose(){this._isAppended&&(S.off(this._element,ny),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const c=document.createElement("div");c.className=this._config.className,this._config.isAnimated&&c.classList.add("fade"),this._element=c}return this._element}_configAfterMerge(c){return c.rootElement=o(c.rootElement),c}_append(){if(this._isAppended)return;const c=this._getElement();this._config.rootElement.append(c),S.on(c,ny,()=>{T(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(c){A(c,this._getElement(),this._config.isAnimated)}}const ic=".bs.focustrap",WS=`focusin${ic}`,HS=`keydown.tab${ic}`,iy="backward",qS={autofocus:!0,trapElement:null},zS={autofocus:"boolean",trapElement:"element"};class ry extends mt{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return qS}static get DefaultType(){return zS}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),S.off(document,ic),S.on(document,WS,c=>this._handleFocusin(c)),S.on(document,HS,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,S.off(document,ic))}_handleFocusin(c){const{trapElement:f}=this._config;if(c.target===document||c.target===f||f.contains(c.target))return;const _=Y.focusableChildren(f);_.length===0?f.focus():this._lastTabNavDirection===iy?_[_.length-1].focus():_[0].focus()}_handleKeydown(c){c.key==="Tab"&&(this._lastTabNavDirection=c.shiftKey?iy:"forward")}}const oy=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ay=".sticky-top",rc="padding-right",ly="margin-right";class Sd{constructor(){this._element=document.body}getWidth(){const c=document.documentElement.clientWidth;return Math.abs(window.innerWidth-c)}hide(){const c=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,rc,f=>f+c),this._setElementAttributes(oy,rc,f=>f+c),this._setElementAttributes(ay,ly,f=>f-c)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,rc),this._resetElementAttributes(oy,rc),this._resetElementAttributes(ay,ly)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(c,f,_){const b=this.getWidth();this._applyManipulationCallback(c,I=>{if(I!==this._element&&window.innerWidth>I.clientWidth+b)return;this._saveInitialAttribute(I,f);const R=window.getComputedStyle(I).getPropertyValue(f);I.style.setProperty(f,`${_(Number.parseFloat(R))}px`)})}_saveInitialAttribute(c,f){const _=c.style.getPropertyValue(f);_&&He.setDataAttribute(c,f,_)}_resetElementAttributes(c,f){this._applyManipulationCallback(c,_=>{const b=He.getDataAttribute(_,f);b!==null?(He.removeDataAttribute(_,f),_.style.setProperty(f,b)):_.style.removeProperty(f)})}_applyManipulationCallback(c,f){if(r(c))f(c);else for(const _ of Y.find(c,this._element))f(_)}}const Fn=".bs.modal",GS=`hide${Fn}`,KS=`hidePrevented${Fn}`,cy=`hidden${Fn}`,uy=`show${Fn}`,QS=`shown${Fn}`,YS=`resize${Fn}`,XS=`click.dismiss${Fn}`,JS=`mousedown.dismiss${Fn}`,ZS=`keydown.dismiss${Fn}`,eR=`click${Fn}.data-api`,hy="modal-open",dy="show",Rd="modal-static",tR={backdrop:!0,focus:!0,keyboard:!0},nR={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ji extends De{constructor(c,f){super(c,f),this._dialog=Y.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Sd,this._addEventListeners()}static get Default(){return tR}static get DefaultType(){return nR}static get NAME(){return"modal"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||this._isTransitioning||S.trigger(this._element,uy,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(hy),this._adjustDialog(),this._backdrop.show(()=>this._showElement(c)))}hide(){this._isShown&&!this._isTransitioning&&(S.trigger(this._element,GS).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(dy),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){S.off(window,Fn),S.off(this._dialog,Fn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new sy({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ry({trapElement:this._element})}_showElement(c){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const f=Y.findOne(".modal-body",this._dialog);f&&(f.scrollTop=0),d(this._element),this._element.classList.add(dy),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,S.trigger(this._element,QS,{relatedTarget:c})},this._dialog,this._isAnimated())}_addEventListeners(){S.on(this._element,ZS,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),S.on(window,YS,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),S.on(this._element,JS,c=>{S.one(this._element,XS,f=>{this._element===c.target&&this._element===f.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(hy),this._resetAdjustments(),this._scrollBar.reset(),S.trigger(this._element,cy)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(S.trigger(this._element,KS).defaultPrevented)return;const c=this._element.scrollHeight>document.documentElement.clientHeight,f=this._element.style.overflowY;f==="hidden"||this._element.classList.contains(Rd)||(c||(this._element.style.overflowY="hidden"),this._element.classList.add(Rd),this._queueCallback(()=>{this._element.classList.remove(Rd),this._queueCallback(()=>{this._element.style.overflowY=f},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const c=this._element.scrollHeight>document.documentElement.clientHeight,f=this._scrollBar.getWidth(),_=f>0;if(_&&!c){const b=y()?"paddingLeft":"paddingRight";this._element.style[b]=`${f}px`}if(!_&&c){const b=y()?"paddingRight":"paddingLeft";this._element.style[b]=`${f}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(c,f){return this.each(function(){const _=ji.getOrCreateInstance(this,c);if(typeof c=="string"){if(_[c]===void 0)throw new TypeError(`No method named "${c}"`);_[c](f)}})}}S.on(document,eR,'[data-bs-toggle="modal"]',function(g){const c=Y.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&g.preventDefault(),S.one(c,uy,_=>{_.defaultPrevented||S.one(c,cy,()=>{a(this)&&this.focus()})});const f=Y.findOne(".modal.show");f&&ji.getInstance(f).hide(),ji.getOrCreateInstance(c).toggle(this)}),O(ji),w(ji);const ks=".bs.offcanvas",fy=".data-api",sR=`load${ks}${fy}`,py="show",gy="showing",my="hiding",_y=".offcanvas.show",iR=`show${ks}`,rR=`shown${ks}`,oR=`hide${ks}`,yy=`hidePrevented${ks}`,vy=`hidden${ks}`,aR=`resize${ks}`,lR=`click${ks}${fy}`,cR=`keydown.dismiss${ks}`,uR={backdrop:!0,keyboard:!0,scroll:!1},hR={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Os extends De{constructor(c,f){super(c,f),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return uR}static get DefaultType(){return hR}static get NAME(){return"offcanvas"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||S.trigger(this._element,iR,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Sd().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(gy),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(py),this._element.classList.remove(gy),S.trigger(this._element,rR,{relatedTarget:c})},this._element,!0))}hide(){this._isShown&&(S.trigger(this._element,oR).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(my),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(py,my),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Sd().reset(),S.trigger(this._element,vy)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const c=!!this._config.backdrop;return new sy({className:"offcanvas-backdrop",isVisible:c,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:c?()=>{this._config.backdrop!=="static"?this.hide():S.trigger(this._element,yy)}:null})}_initializeFocusTrap(){return new ry({trapElement:this._element})}_addEventListeners(){S.on(this._element,cR,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():S.trigger(this._element,yy))})}static jQueryInterface(c){return this.each(function(){const f=Os.getOrCreateInstance(this,c);if(typeof c=="string"){if(f[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);f[c](this)}})}}S.on(document,lR,'[data-bs-toggle="offcanvas"]',function(g){const c=Y.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&g.preventDefault(),l(this))return;S.one(c,vy,()=>{a(this)&&this.focus()});const f=Y.findOne(_y);f&&f!==c&&Os.getInstance(f).hide(),Os.getOrCreateInstance(c).toggle(this)}),S.on(window,sR,()=>{for(const g of Y.find(_y))Os.getOrCreateInstance(g).show()}),S.on(window,aR,()=>{for(const g of Y.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(g).position!=="fixed"&&Os.getOrCreateInstance(g).hide()}),O(Os),w(Os);const Ey={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},dR=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),fR=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,pR=(g,c)=>{const f=g.nodeName.toLowerCase();return c.includes(f)?!dR.has(f)||!!fR.test(g.nodeValue):c.filter(_=>_ instanceof RegExp).some(_=>_.test(f))},gR={allowList:Ey,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},mR={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},_R={entry:"(string|element|function|null)",selector:"(string|element)"};class yR extends mt{constructor(c){super(),this._config=this._getConfig(c)}static get Default(){return gR}static get DefaultType(){return mR}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(c=>this._resolvePossibleFunction(c)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(c){return this._checkContent(c),this._config.content={...this._config.content,...c},this}toHtml(){const c=document.createElement("div");c.innerHTML=this._maybeSanitize(this._config.template);for(const[b,I]of Object.entries(this._config.content))this._setContent(c,I,b);const f=c.children[0],_=this._resolvePossibleFunction(this._config.extraClass);return _&&f.classList.add(..._.split(" ")),f}_typeCheckConfig(c){super._typeCheckConfig(c),this._checkContent(c.content)}_checkContent(c){for(const[f,_]of Object.entries(c))super._typeCheckConfig({selector:f,entry:_},_R)}_setContent(c,f,_){const b=Y.findOne(_,c);b&&((f=this._resolvePossibleFunction(f))?r(f)?this._putElementInTemplate(o(f),b):this._config.html?b.innerHTML=this._maybeSanitize(f):b.textContent=f:b.remove())}_maybeSanitize(c){return this._config.sanitize?function(f,_,b){if(!f.length)return f;if(b&&typeof b=="function")return b(f);const I=new window.DOMParser().parseFromString(f,"text/html"),R=[].concat(...I.body.querySelectorAll("*"));for(const D of R){const B=D.nodeName.toLowerCase();if(!Object.keys(_).includes(B)){D.remove();continue}const J=[].concat(...D.attributes),Z=[].concat(_["*"]||[],_[B]||[]);for(const K of J)pR(K,Z)||D.removeAttribute(K.nodeName)}return I.body.innerHTML}(c,this._config.allowList,this._config.sanitizeFn):c}_resolvePossibleFunction(c){return T(c,[this])}_putElementInTemplate(c,f){if(this._config.html)return f.innerHTML="",void f.append(c);f.textContent=c.textContent}}const vR=new Set(["sanitize","allowList","sanitizeFn"]),Pd="fade",oc="show",wy=".modal",Ty="hide.bs.modal",Xo="hover",kd="focus",ER={AUTO:"auto",TOP:"top",RIGHT:y()?"left":"right",BOTTOM:"bottom",LEFT:y()?"right":"left"},wR={allowList:Ey,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},TR={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Bi extends De{constructor(c,f){if(Q_===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(c,f),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return wR}static get DefaultType(){return TR}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),S.off(this._element.closest(wy),Ty,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const c=S.trigger(this._element,this.constructor.eventName("show")),f=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(c.defaultPrevented||!f)return;this._disposePopper();const _=this._getTipElement();this._element.setAttribute("aria-describedby",_.getAttribute("id"));const{container:b}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(b.append(_),S.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(_),_.classList.add(oc),"ontouchstart"in document.documentElement)for(const I of[].concat(...document.body.children))S.on(I,"mouseover",h);this._queueCallback(()=>{S.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!S.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(oc),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))S.off(c,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger[kd]=!1,this._activeTrigger[Xo]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),S.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(c){const f=this._getTemplateFactory(c).toHtml();if(!f)return null;f.classList.remove(Pd,oc),f.classList.add(`bs-${this.constructor.NAME}-auto`);const _=(b=>{do b+=Math.floor(1e6*Math.random());while(document.getElementById(b));return b})(this.constructor.NAME).toString();return f.setAttribute("id",_),this._isAnimated()&&f.classList.add(Pd),f}setContent(c){this._newContent=c,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(c){return this._templateFactory?this._templateFactory.changeContent(c):this._templateFactory=new yR({...this._config,content:c,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(c){return this.constructor.getOrCreateInstance(c.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Pd)}_isShown(){return this.tip&&this.tip.classList.contains(oc)}_createPopper(c){const f=T(this._config.placement,[this,c,this._element]),_=ER[f.toUpperCase()];return Cd(this._element,c,this._getPopperConfig(_))}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(f=>Number.parseInt(f,10)):typeof c=="function"?f=>c(f,this._element):c}_resolvePossibleFunction(c){return T(c,[this._element])}_getPopperConfig(c){const f={placement:c,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:_=>{this._getTipElement().setAttribute("data-popper-placement",_.state.placement)}}]};return{...f,...T(this._config.popperConfig,[f])}}_setListeners(){const c=this._config.trigger.split(" ");for(const f of c)if(f==="click")S.on(this._element,this.constructor.eventName("click"),this._config.selector,_=>{this._initializeOnDelegatedTarget(_).toggle()});else if(f!=="manual"){const _=f===Xo?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),b=f===Xo?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");S.on(this._element,_,this._config.selector,I=>{const R=this._initializeOnDelegatedTarget(I);R._activeTrigger[I.type==="focusin"?kd:Xo]=!0,R._enter()}),S.on(this._element,b,this._config.selector,I=>{const R=this._initializeOnDelegatedTarget(I);R._activeTrigger[I.type==="focusout"?kd:Xo]=R._element.contains(I.relatedTarget),R._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},S.on(this._element.closest(wy),Ty,this._hideModalHandler)}_fixTitle(){const c=this._element.getAttribute("title");c&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",c),this._element.setAttribute("data-bs-original-title",c),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(c,f){clearTimeout(this._timeout),this._timeout=setTimeout(c,f)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(c){const f=He.getDataAttributes(this._element);for(const _ of Object.keys(f))vR.has(_)&&delete f[_];return c={...f,...typeof c=="object"&&c?c:{}},c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c.container=c.container===!1?document.body:o(c.container),typeof c.delay=="number"&&(c.delay={show:c.delay,hide:c.delay}),typeof c.title=="number"&&(c.title=c.title.toString()),typeof c.content=="number"&&(c.content=c.content.toString()),c}_getDelegateConfig(){const c={};for(const[f,_]of Object.entries(this._config))this.constructor.Default[f]!==_&&(c[f]=_);return c.selector=!1,c.trigger="manual",c}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(c){return this.each(function(){const f=Bi.getOrCreateInstance(this,c);if(typeof c=="string"){if(f[c]===void 0)throw new TypeError(`No method named "${c}"`);f[c]()}})}}w(Bi);const bR={...Bi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},IR={...Bi.DefaultType,content:"(null|string|element|function)"};class ac extends Bi{static get Default(){return bR}static get DefaultType(){return IR}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(c){return this.each(function(){const f=ac.getOrCreateInstance(this,c);if(typeof c=="string"){if(f[c]===void 0)throw new TypeError(`No method named "${c}"`);f[c]()}})}}w(ac);const Od=".bs.scrollspy",CR=`activate${Od}`,by=`click${Od}`,AR=`load${Od}.data-api`,Vr="active",Nd="[href]",Iy=".nav-link",SR=`${Iy}, .nav-item > ${Iy}, .list-group-item`,RR={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},PR={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Jo extends De{constructor(c,f){super(c,f),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return RR}static get DefaultType(){return PR}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const c of this._observableSections.values())this._observer.observe(c)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(c){return c.target=o(c.target)||document.body,c.rootMargin=c.offset?`${c.offset}px 0px -30%`:c.rootMargin,typeof c.threshold=="string"&&(c.threshold=c.threshold.split(",").map(f=>Number.parseFloat(f))),c}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(S.off(this._config.target,by),S.on(this._config.target,by,Nd,c=>{const f=this._observableSections.get(c.target.hash);if(f){c.preventDefault();const _=this._rootElement||window,b=f.offsetTop-this._element.offsetTop;if(_.scrollTo)return void _.scrollTo({top:b,behavior:"smooth"});_.scrollTop=b}}))}_getNewObserver(){const c={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(f=>this._observerCallback(f),c)}_observerCallback(c){const f=R=>this._targetLinks.get(`#${R.target.id}`),_=R=>{this._previousScrollData.visibleEntryTop=R.target.offsetTop,this._process(f(R))},b=(this._rootElement||document.documentElement).scrollTop,I=b>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=b;for(const R of c){if(!R.isIntersecting){this._activeTarget=null,this._clearActiveClass(f(R));continue}const D=R.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(I&&D){if(_(R),!b)return}else I||D||_(R)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const c=Y.find(Nd,this._config.target);for(const f of c){if(!f.hash||l(f))continue;const _=Y.findOne(decodeURI(f.hash),this._element);a(_)&&(this._targetLinks.set(decodeURI(f.hash),f),this._observableSections.set(f.hash,_))}}_process(c){this._activeTarget!==c&&(this._clearActiveClass(this._config.target),this._activeTarget=c,c.classList.add(Vr),this._activateParents(c),S.trigger(this._element,CR,{relatedTarget:c}))}_activateParents(c){if(c.classList.contains("dropdown-item"))Y.findOne(".dropdown-toggle",c.closest(".dropdown")).classList.add(Vr);else for(const f of Y.parents(c,".nav, .list-group"))for(const _ of Y.prev(f,SR))_.classList.add(Vr)}_clearActiveClass(c){c.classList.remove(Vr);const f=Y.find(`${Nd}.${Vr}`,c);for(const _ of f)_.classList.remove(Vr)}static jQueryInterface(c){return this.each(function(){const f=Jo.getOrCreateInstance(this,c);if(typeof c=="string"){if(f[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);f[c]()}})}}S.on(window,AR,()=>{for(const g of Y.find('[data-bs-spy="scroll"]'))Jo.getOrCreateInstance(g)}),w(Jo);const Wi=".bs.tab",kR=`hide${Wi}`,OR=`hidden${Wi}`,NR=`show${Wi}`,xR=`shown${Wi}`,DR=`click${Wi}`,MR=`keydown${Wi}`,LR=`load${Wi}`,FR="ArrowLeft",Cy="ArrowRight",VR="ArrowUp",Ay="ArrowDown",xd="Home",Sy="End",Hi="active",Ry="fade",Dd="show",Py=".dropdown-toggle",Md=`:not(${Py})`,ky='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ld=`.nav-link${Md}, .list-group-item${Md}, [role="tab"]${Md}, ${ky}`,$R=`.${Hi}[data-bs-toggle="tab"], .${Hi}[data-bs-toggle="pill"], .${Hi}[data-bs-toggle="list"]`;class qi extends De{constructor(c){super(c),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),S.on(this._element,MR,f=>this._keydown(f)))}static get NAME(){return"tab"}show(){const c=this._element;if(this._elemIsActive(c))return;const f=this._getActiveElem(),_=f?S.trigger(f,kR,{relatedTarget:c}):null;S.trigger(c,NR,{relatedTarget:f}).defaultPrevented||_&&_.defaultPrevented||(this._deactivate(f,c),this._activate(c,f))}_activate(c,f){c&&(c.classList.add(Hi),this._activate(Y.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.removeAttribute("tabindex"),c.setAttribute("aria-selected",!0),this._toggleDropDown(c,!0),S.trigger(c,xR,{relatedTarget:f})):c.classList.add(Dd)},c,c.classList.contains(Ry)))}_deactivate(c,f){c&&(c.classList.remove(Hi),c.blur(),this._deactivate(Y.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.setAttribute("aria-selected",!1),c.setAttribute("tabindex","-1"),this._toggleDropDown(c,!1),S.trigger(c,OR,{relatedTarget:f})):c.classList.remove(Dd)},c,c.classList.contains(Ry)))}_keydown(c){if(![FR,Cy,VR,Ay,xd,Sy].includes(c.key))return;c.stopPropagation(),c.preventDefault();const f=this._getChildren().filter(b=>!l(b));let _;if([xd,Sy].includes(c.key))_=f[c.key===xd?0:f.length-1];else{const b=[Cy,Ay].includes(c.key);_=N(f,c.target,b,!0)}_&&(_.focus({preventScroll:!0}),qi.getOrCreateInstance(_).show())}_getChildren(){return Y.find(Ld,this._parent)}_getActiveElem(){return this._getChildren().find(c=>this._elemIsActive(c))||null}_setInitialAttributes(c,f){this._setAttributeIfNotExists(c,"role","tablist");for(const _ of f)this._setInitialAttributesOnChild(_)}_setInitialAttributesOnChild(c){c=this._getInnerElement(c);const f=this._elemIsActive(c),_=this._getOuterElement(c);c.setAttribute("aria-selected",f),_!==c&&this._setAttributeIfNotExists(_,"role","presentation"),f||c.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(c,"role","tab"),this._setInitialAttributesOnTargetPanel(c)}_setInitialAttributesOnTargetPanel(c){const f=Y.getElementFromSelector(c);f&&(this._setAttributeIfNotExists(f,"role","tabpanel"),c.id&&this._setAttributeIfNotExists(f,"aria-labelledby",`${c.id}`))}_toggleDropDown(c,f){const _=this._getOuterElement(c);if(!_.classList.contains("dropdown"))return;const b=(I,R)=>{const D=Y.findOne(I,_);D&&D.classList.toggle(R,f)};b(Py,Hi),b(".dropdown-menu",Dd),_.setAttribute("aria-expanded",f)}_setAttributeIfNotExists(c,f,_){c.hasAttribute(f)||c.setAttribute(f,_)}_elemIsActive(c){return c.classList.contains(Hi)}_getInnerElement(c){return c.matches(Ld)?c:Y.findOne(Ld,c)}_getOuterElement(c){return c.closest(".nav-item, .list-group-item")||c}static jQueryInterface(c){return this.each(function(){const f=qi.getOrCreateInstance(this);if(typeof c=="string"){if(f[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);f[c]()}})}}S.on(document,DR,ky,function(g){["A","AREA"].includes(this.tagName)&&g.preventDefault(),l(this)||qi.getOrCreateInstance(this).show()}),S.on(window,LR,()=>{for(const g of Y.find($R))qi.getOrCreateInstance(g)}),w(qi);const Qs=".bs.toast",UR=`mouseover${Qs}`,jR=`mouseout${Qs}`,BR=`focusin${Qs}`,WR=`focusout${Qs}`,HR=`hide${Qs}`,qR=`hidden${Qs}`,zR=`show${Qs}`,GR=`shown${Qs}`,Oy="hide",lc="show",cc="showing",KR={animation:"boolean",autohide:"boolean",delay:"number"},QR={animation:!0,autohide:!0,delay:5e3};class Zo extends De{constructor(c,f){super(c,f),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return QR}static get DefaultType(){return KR}static get NAME(){return"toast"}show(){S.trigger(this._element,zR).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Oy),d(this._element),this._element.classList.add(lc,cc),this._queueCallback(()=>{this._element.classList.remove(cc),S.trigger(this._element,GR),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(S.trigger(this._element,HR).defaultPrevented||(this._element.classList.add(cc),this._queueCallback(()=>{this._element.classList.add(Oy),this._element.classList.remove(cc,lc),S.trigger(this._element,qR)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(lc),super.dispose()}isShown(){return this._element.classList.contains(lc)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(c,f){switch(c.type){case"mouseover":case"mouseout":this._hasMouseInteraction=f;break;case"focusin":case"focusout":this._hasKeyboardInteraction=f}if(f)return void this._clearTimeout();const _=c.relatedTarget;this._element===_||this._element.contains(_)||this._maybeScheduleHide()}_setListeners(){S.on(this._element,UR,c=>this._onInteraction(c,!0)),S.on(this._element,jR,c=>this._onInteraction(c,!1)),S.on(this._element,BR,c=>this._onInteraction(c,!0)),S.on(this._element,WR,c=>this._onInteraction(c,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(c){return this.each(function(){const f=Zo.getOrCreateInstance(this,c);if(typeof c=="string"){if(f[c]===void 0)throw new TypeError(`No method named "${c}"`);f[c](this)}})}}return O(Zo),w(Zo),{Alert:Oe,Button:E,Carousel:Sr,Collapse:Pr,Dropdown:qn,Modal:ji,Offcanvas:Os,Popover:ac,ScrollSpy:Jo,Tab:qi,Toast:Zo,Tooltip:Bi}});var Ra,Ur,vc,fb,Iv,ta,na,Ec,wc;Ra=document.getElementsByClassName("custom-select");fb=Ra.length;for(Ur=0;Ur<fb;Ur++){for(ta=Ra[Ur].getElementsByTagName("select")[0],Iv=ta.length,na=document.createElement("DIV"),na.setAttribute("class","select-selected"),na.innerHTML=ta.options[ta.selectedIndex].innerHTML,Ra[Ur].appendChild(na),Ec=document.createElement("DIV"),Ec.setAttribute("class","select-items select-hide"),vc=1;vc<Iv;vc++)wc=document.createElement("DIV"),wc.innerHTML=ta.options[vc].innerHTML,wc.addEventListener("click",function(t){var e,n,s,i,r,o,a;for(i=this.parentNode.parentNode.getElementsByTagName("select")[0],o=i.length,r=this.parentNode.previousSibling,n=0;n<o;n++)if(i.options[n].innerHTML==this.innerHTML){for(i.selectedIndex=n,r.innerHTML=this.innerHTML,e=this.parentNode.getElementsByClassName("same-as-selected"),a=e.length,s=0;s<a;s++)e[s].removeAttribute("class");this.setAttribute("class","same-as-selected");break}r.click()}),Ec.appendChild(wc);Ra[Ur].appendChild(Ec),na.addEventListener("click",function(t){t.stopPropagation(),pb(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}function pb(t){var e,n,s,i,r,o=[];for(e=document.getElementsByClassName("select-items"),n=document.getElementsByClassName("select-selected"),i=e.length,r=n.length,s=0;s<r;s++)t==n[s]?o.push(s):n[s].classList.remove("select-arrow-active");for(s=0;s<i;s++)o.indexOf(s)&&e[s].classList.add("select-hide")}document.addEventListener("click",pb);var Cv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(t,e){if(!t)throw Do(e)},Do=function(t){return new Error("Firebase Database ("+gb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},AO=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Eh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(p=64)),s.push(n[h],n[d],n[p],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||d==null)throw new SO;const p=r<<2|a>>4;if(s.push(p),u!==64){const m=a<<4&240|u>>2;if(s.push(m),d!==64){const y=u<<6&192|d;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _b=function(t){const e=mb(t);return Eh.encodeByteArray(e,!0)},hu=function(t){return _b(t).replace(/\./g,"")},du=function(t){try{return Eh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(t){return yb(void 0,t)}function yb(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!PO(n)||(t[n]=yb(t[n],e[n]));return t}function PO(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=()=>kO().__FIREBASE_DEFAULTS__,NO=()=>{if(typeof process>"u"||typeof Cv>"u")return;const t=Cv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&du(t[1]);return e&&JSON.parse(e)},wg=()=>{try{return OO()||NO()||xO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},DO=t=>{var e,n;return(n=(e=wg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},MO=t=>{const e=DO(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},vb=()=>{var t;return(t=wg())===null||t===void 0?void 0:t.config},LO=t=>{var e;return(e=wg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[hu(JSON.stringify(n)),hu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nn())}function VO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Eb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $O(){const t=nn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wb(){return gb.NODE_ADMIN===!0}function Tb(){try{return typeof indexedDB=="object"}catch{return!1}}function UO(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO="FirebaseError";class Cs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=jO,Object.setPrototypeOf(this,Cs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?BO(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Cs(i,a,s)}}function BO(t,e){return t.replace(WO,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const WO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t){return JSON.parse(t)}function At(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ka(du(r[0])||""),n=Ka(du(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},HO=function(t){const e=bb(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},qO=function(t){const e=bb(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Kf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fu(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function pu(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Av(r)&&Av(o)){if(!pu(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Av(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const p=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^r&(o^a),h=1518500249):(u=r^o^a,h=1859775393):d<60?(u=r&o|a&(r|o),h=2400959708):(u=r^o^a,h=3395469782);const p=(i<<5|i>>>27)+u+l+h+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function GO(t,e){const n=new KO(t,e);return n.subscribe.bind(n)}class KO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");QO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=zd),i.error===void 0&&(i.error=zd),i.complete===void 0&&(i.complete=zd);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zd(){}function Ib(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,j(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wh=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){return t&&t._delegate?t._delegate:t}class ts{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ga;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZO(e))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xi){return this.instances.has(e)}getOptions(e=Xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:JO(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xi){return this.component?this.component.multipleInstances?e:Xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JO(t){return t===Xi?void 0:t}function ZO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ne||(Ne={}));const tN={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},nN=Ne.INFO,sN={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},iN=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=sN[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tl{constructor(e){this.name=e,this._logLevel=nN,this._logHandler=iN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const rN=(t,e)=>e.some(n=>t instanceof n);let Sv,Rv;function oN(){return Sv||(Sv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aN(){return Rv||(Rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cb=new WeakMap,Qf=new WeakMap,Ab=new WeakMap,Gd=new WeakMap,bg=new WeakMap;function lN(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(fi(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cb.set(n,t)}).catch(()=>{}),bg.set(e,t),e}function cN(t){if(Qf.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Qf.set(t,e)}let Yf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ab.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uN(t){Yf=t(Yf)}function hN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Kd(this),e,...n);return Ab.set(s,e.sort?e.sort():[e]),fi(s)}:aN().includes(t)?function(...e){return t.apply(Kd(this),e),fi(Cb.get(this))}:function(...e){return fi(t.apply(Kd(this),e))}}function dN(t){return typeof t=="function"?hN(t):(t instanceof IDBTransaction&&cN(t),rN(t,oN())?new Proxy(t,Yf):t)}function fi(t){if(t instanceof IDBRequest)return lN(t);if(Gd.has(t))return Gd.get(t);const e=dN(t);return e!==t&&(Gd.set(t,e),bg.set(e,t)),e}const Kd=t=>bg.get(t);function fN(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=fi(o);return s&&o.addEventListener("upgradeneeded",l=>{s(fi(o.result),l.oldVersion,l.newVersion,fi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const pN=["get","getKey","getAll","getAllKeys","count"],gN=["put","add","delete","clear"],Qd=new Map;function Pv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qd.get(e))return Qd.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=gN.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||pN.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Qd.set(e,r),r}uN(t=>({...t,get:(e,n,s)=>Pv(e,n)||t.get(e,n,s),has:(e,n)=>!!Pv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_N(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _N(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xf="@firebase/app",kv="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Tl("@firebase/app"),yN="@firebase/app-compat",vN="@firebase/analytics-compat",EN="@firebase/analytics",wN="@firebase/app-check-compat",TN="@firebase/app-check",bN="@firebase/auth",IN="@firebase/auth-compat",CN="@firebase/database",AN="@firebase/database-compat",SN="@firebase/functions",RN="@firebase/functions-compat",PN="@firebase/installations",kN="@firebase/installations-compat",ON="@firebase/messaging",NN="@firebase/messaging-compat",xN="@firebase/performance",DN="@firebase/performance-compat",MN="@firebase/remote-config",LN="@firebase/remote-config-compat",FN="@firebase/storage",VN="@firebase/storage-compat",$N="@firebase/firestore",UN="@firebase/firestore-compat",jN="firebase",BN="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="[DEFAULT]",WN={[Xf]:"fire-core",[yN]:"fire-core-compat",[EN]:"fire-analytics",[vN]:"fire-analytics-compat",[TN]:"fire-app-check",[wN]:"fire-app-check-compat",[bN]:"fire-auth",[IN]:"fire-auth-compat",[CN]:"fire-rtdb",[AN]:"fire-rtdb-compat",[SN]:"fire-fn",[RN]:"fire-fn-compat",[PN]:"fire-iid",[kN]:"fire-iid-compat",[ON]:"fire-fcm",[NN]:"fire-fcm-compat",[xN]:"fire-perf",[DN]:"fire-perf-compat",[MN]:"fire-rc",[LN]:"fire-rc-compat",[FN]:"fire-gcs",[VN]:"fire-gcs-compat",[$N]:"fire-fst",[UN]:"fire-fst-compat","fire-js":"fire-js",[jN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new Map,Zf=new Map;function HN(t,e){try{t.container.addComponent(e)}catch(n){fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ws(t){const e=t.name;if(Zf.has(e))return fr.debug(`There were multiple attempts to register component ${e}.`),!1;Zf.set(e,t);for(const n of gu.values())HN(n,t);return!0}function Sb(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pi=new Mo("app","Firebase",qN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=BN;function Rb(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Jf,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw pi.create("bad-app-name",{appName:String(i)});if(n||(n=vb()),!n)throw pi.create("no-options");const r=gu.get(i);if(r){if(pu(n,r.options)&&pu(s,r.config))return r;throw pi.create("duplicate-app",{appName:i})}const o=new eN(i);for(const l of Zf.values())o.addComponent(l);const a=new zN(n,s,o);return gu.set(i,a),a}function Pb(t=Jf){const e=gu.get(t);if(!e&&t===Jf&&vb())return Rb();if(!e)throw pi.create("no-app",{appName:t});return e}function On(t,e,n){var s;let i=(s=WN[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fr.warn(a.join(" "));return}ws(new ts(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN="firebase-heartbeat-database",KN=1,Qa="firebase-heartbeat-store";let Yd=null;function kb(){return Yd||(Yd=fN(GN,KN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qa)}}}).catch(t=>{throw pi.create("idb-open",{originalErrorMessage:t.message})})),Yd}async function QN(t){try{return await(await kb()).transaction(Qa).objectStore(Qa).get(Ob(t))}catch(e){if(e instanceof Cs)fr.warn(e.message);else{const n=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fr.warn(n.message)}}}async function Ov(t,e){try{const s=(await kb()).transaction(Qa,"readwrite");await s.objectStore(Qa).put(e,Ob(t)),await s.done}catch(n){if(n instanceof Cs)fr.warn(n.message);else{const s=pi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fr.warn(s.message)}}}function Ob(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=1024,XN=30*24*60*60*1e3;class JN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ex(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Nv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=XN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nv(),{heartbeatsToSend:s,unsentEntries:i}=ZN(this._heartbeatsCache.heartbeats),r=hu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Nv(){return new Date().toISOString().substring(0,10)}function ZN(t,e=YN){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),xv(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ex{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tb()?UO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await QN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ov(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ov(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xv(t){return hu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(t){ws(new ts("platform-logger",e=>new mN(e),"PRIVATE")),ws(new ts("heartbeat",e=>new JN(e),"PRIVATE")),On(Xf,kv,t),On(Xf,kv,"esm2017"),On("fire-js","")}tx("");function Ig(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Nb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nx=Nb,xb=new Mo("auth","Firebase",Nb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=new Tl("@firebase/auth");function sx(t,...e){mu.logLevel<=Ne.WARN&&mu.warn(`Auth (${Ri}): ${t}`,...e)}function Gc(t,...e){mu.logLevel<=Ne.ERROR&&mu.error(`Auth (${Ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t,...e){throw Cg(t,...e)}function _s(t,...e){return Cg(t,...e)}function ix(t,e,n){const s=Object.assign(Object.assign({},nx()),{[e]:n});return new Mo("auth","Firebase",s).create(e,{appName:t.name})}function Cg(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return xb.create(t,...e)}function we(t,e,...n){if(!t)throw Cg(e,...n)}function Ms(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gc(e),new Error(e)}function Bs(t,e){t||Ms(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rx(){return Dv()==="http:"||Dv()==="https:"}function Dv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rx()||VO()||"connection"in navigator)?navigator.onLine:!0}function ax(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bs(n>e,"Short delay should be less than long delay!"),this.isMobile=Tg()||Eb()}get(){return ox()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t,e){Bs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ms("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ms("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ms("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=new bl(3e4,6e4);function Sg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fo(t,e,n,s,i={}){return Mb(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Lo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Db.fetch()(Lb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Mb(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},lx),e);try{const i=new hx(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Tc(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Tc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Tc(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ix(t,h,u);js(t,h)}}catch(i){if(i instanceof Cs)throw i;js(t,"network-request-failed",{message:String(i)})}}async function ux(t,e,n,s,i={}){const r=await Fo(t,e,n,s,i);return"mfaPendingCredential"in r&&js(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Lb(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ag(t.config,i):`${t.config.apiScheme}://${i}`}class hx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(_s(this.auth,"network-request-failed")),cx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tc(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=_s(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dx(t,e){return Fo(t,"POST","/v1/accounts:delete",e)}async function fx(t,e){return Fo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function px(t,e=!1){const n=As(t),s=await n.getIdToken(e),i=Rg(s);we(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Pa(Xd(i.auth_time)),issuedAtTime:Pa(Xd(i.iat)),expirationTime:Pa(Xd(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Xd(t){return Number(t)*1e3}function Rg(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Gc("JWT malformed, contained fewer than 3 sections"),null;try{const i=du(n);return i?JSON.parse(i):(Gc("Failed to decode base64 JWT payload"),null)}catch(i){return Gc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gx(t){const e=Rg(t);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Cs&&mx(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function mx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pa(this.lastLoginAt),this.creationTime=Pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ya(t,fx(n,{idToken:s}));we(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ex(r.providerUserInfo):[],a=vx(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Fb(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function yx(t){const e=As(t);await _u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vx(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Ex(t){return t.map(e=>{var{providerId:n}=e,s=Ig(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wx(t,e){const n=await Mb(t,{},async()=>{const s=Lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Lb(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Db.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tx(t,e){return Fo(t,"POST","/v2/accounts:revokeToken",Sg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return we(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await wx(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Xa;return s&&(we(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(we(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(we(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xa,this.toJSON())}_performRefresh(){return Ms("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t,e){we(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cr{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ig(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _x(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Fb(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ya(this,this.stsTokenManager.getToken(this.auth,e));return we(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return px(this,e)}reload(){return yx(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await _u(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ya(this,dx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,u,h;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:k,emailVerified:L,isAnonymous:$,providerData:ee,stsTokenManager:ae}=n;we(k&&ae,e,"internal-error");const Te=Xa.fromJSON(this.name,ae);we(typeof k=="string",e,"internal-error"),Js(d,e.name),Js(p,e.name),we(typeof L=="boolean",e,"internal-error"),we(typeof $=="boolean",e,"internal-error"),Js(m,e.name),Js(y,e.name),Js(w,e.name),Js(T,e.name),Js(A,e.name),Js(N,e.name);const de=new cr({uid:k,auth:e,email:p,emailVerified:L,displayName:d,isAnonymous:$,photoURL:y,phoneNumber:m,tenantId:w,stsTokenManager:Te,createdAt:A,lastLoginAt:N});return ee&&Array.isArray(ee)&&(de.providerData=ee.map(Ae=>Object.assign({},Ae))),T&&(de._redirectEventId=T),de}static async _fromIdTokenResponse(e,n,s=!1){const i=new Xa;i.updateFromServerResponse(n);const r=new cr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await _u(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=new Map;function Ls(t){Bs(t instanceof Function,"Expected a class definition");let e=Mv.get(t);return e?(Bs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vb.type="NONE";const Lv=Vb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(t,e,n){return`firebase:${t}:${e}:${n}`}class io{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Kc(this.userKey,i.apiKey,r),this.fullPersistenceKey=Kc("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new io(Ls(Lv),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Ls(Lv);const o=Kc(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=cr._fromJSON(e,h);u!==r&&(a=d),r=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new io(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new io(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($b(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wb(e))return"Blackberry";if(Hb(e))return"Webos";if(Pg(e))return"Safari";if((e.includes("chrome/")||Ub(e))&&!e.includes("edge/"))return"Chrome";if(Bb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $b(t=nn()){return/firefox\//i.test(t)}function Pg(t=nn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ub(t=nn()){return/crios\//i.test(t)}function jb(t=nn()){return/iemobile/i.test(t)}function Bb(t=nn()){return/android/i.test(t)}function Wb(t=nn()){return/blackberry/i.test(t)}function Hb(t=nn()){return/webos/i.test(t)}function Th(t=nn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bx(t=nn()){var e;return Th(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ix(){return $O()&&document.documentMode===10}function qb(t=nn()){return Th(t)||Bb(t)||Hb(t)||Wb(t)||/windows phone/i.test(t)||jb(t)}function Cx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t,e=[]){let n;switch(t){case"Browser":n=Fv(nn());break;case"Worker":n=`${Fv(nn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(t,e={}){return Fo(t,"GET","/v2/passwordPolicy",Sg(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=6;class Px{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Rx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vv(this),this.idTokenSubscription=new Vv(this),this.beforeStateQueue=new Ax(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ls(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await io.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ax()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?As(e):null;return n&&we(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ls(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sx(this),n=new Px(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Tx(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ls(e)||this._popupRedirectResolver;we(n,this,"argument-error"),this.redirectPersistenceManager=await io.create(this,[Ls(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gb(t){return As(t)}class Vv{constructor(e){this.auth=e,this.observer=null,this.addObserver=GO(n=>this.observer=n)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Nx(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=_s("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Ox().appendChild(s)})}function xx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t,e){const n=Sb(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(pu(r,e??{}))return i;js(i,"already-initialized")}return n.initialize({options:e})}function Mx(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ls);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ms("not implemented")}_getIdTokenResponse(e){return Ms("not implemented")}_linkToIdToken(e,n){return Ms("not implemented")}_getReauthenticationResolver(e){return Ms("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e){return ux(t,"POST","/v1/accounts:signInWithIdp",Sg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx="http://localhost";class pr extends Kb{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):js("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ig(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new pr(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ro(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ro(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ro(e,n)}buildRequest(){const e={requestUri:Lx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends Qb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Il{constructor(){super("facebook.com")}static credential(e){return pr._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pr._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return oi.credential(n,s)}catch{return null}}}oi.GOOGLE_SIGN_IN_METHOD="google.com";oi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Il{constructor(){super("github.com")}static credential(e){return pr._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.GITHUB_SIGN_IN_METHOD="github.com";ai.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Il{constructor(){super("twitter.com")}static credential(e,n){return pr._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return li.credential(n,s)}catch{return null}}}li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await cr._fromIdTokenResponse(e,s,i),o=$v(s);return new vo({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=$v(s);return new vo({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function $v(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends Cs{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,yu.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new yu(e,n,s,i)}}function Yb(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?yu._fromErrorAndOperation(t,r,e,s):r})}async function Fx(t,e,n=!1){const s=await Ya(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vo._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vx(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Ya(t,Yb(s,i,e,t),n);we(r.idToken,s,"internal-error");const o=Rg(r.idToken);we(o,s,"internal-error");const{sub:a}=o;return we(t.uid===a,s,"user-mismatch"),vo._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&js(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $x(t,e,n=!1){const s="signIn",i=await Yb(t,s,e),r=await vo._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Ux(t,e,n,s){return As(t).onIdTokenChanged(e,n,s)}const vu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vu,"1"),this.storage.removeItem(vu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(){const t=nn();return Pg(t)||Th(t)}const Bx=1e3,Wx=10;class Jb extends Xb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jx()&&Cx(),this.fallbackToPolling=qb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Ix()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Wx):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Bx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jb.type="LOCAL";const Hx=Jb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb extends Xb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zb.type="SESSION";const eI=Zb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new bh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),l=await qx(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=kg("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(){return window}function Gx(t){ys().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(){return typeof ys().WorkerGlobalScope<"u"&&typeof ys().importScripts=="function"}async function Kx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Yx(){return tI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="firebaseLocalStorageDb",Xx=1,Eu="firebaseLocalStorage",sI="fbase_key";class Cl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ih(t,e){return t.transaction([Eu],e?"readwrite":"readonly").objectStore(Eu)}function Jx(){const t=indexedDB.deleteDatabase(nI);return new Cl(t).toPromise()}function tp(){const t=indexedDB.open(nI,Xx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Eu,{keyPath:sI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Eu)?e(s):(s.close(),await Jx(),e(await tp()))})})}async function Uv(t,e,n){const s=Ih(t,!0).put({[sI]:e,value:n});return new Cl(s).toPromise()}async function Zx(t,e){const n=Ih(t,!1).get(e),s=await new Cl(n).toPromise();return s===void 0?null:s.value}function jv(t,e){const n=Ih(t,!0).delete(e);return new Cl(n).toPromise()}const eD=800,tD=3;class iI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>tD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bh._getInstance(Yx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Kx(),!this.activeServiceWorker)return;this.sender=new zx(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Qx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tp();return await Uv(e,vu,"1"),await jv(e,vu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Uv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Zx(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ih(i,!1).getAll();return new Cl(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iI.type="LOCAL";const nD=iI;new bl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sD(t,e){return e?Ls(e):(we(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og extends Kb{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iD(t){return $x(t.auth,new Og(t),t.bypassAuthState)}function rD(t){const{auth:e,user:n}=t;return we(n,e,"internal-error"),Vx(n,new Og(t),t.bypassAuthState)}async function oD(t){const{auth:e,user:n}=t;return we(n,e,"internal-error"),Fx(n,new Og(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iD;case"linkViaPopup":case"linkViaRedirect":return oD;case"reauthViaPopup":case"reauthViaRedirect":return rD;default:js(this.auth,"internal-error")}}resolve(e){Bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=new bl(2e3,1e4);class Qr extends rI{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Bs(this.filter.length===1,"Popup operations only handle one event");const e=kg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_s(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_s(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_s(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aD.get())};e()}}Qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD="pendingRedirect",Qc=new Map;class cD extends rI{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Qc.get(this.auth._key());if(!e){try{const s=await uD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Qc.set(this.auth._key(),e)}return this.bypassAuthState||Qc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uD(t,e){const n=fD(e),s=dD(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function hD(t,e){Qc.set(t._key(),e)}function dD(t){return Ls(t._redirectPersistence)}function fD(t){return Kc(lD,t.config.apiKey,t.name)}async function pD(t,e,n=!1){const s=Gb(t),i=sD(s,e),o=await new cD(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=10*60*1e3;class mD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_D(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!oI(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(_s(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bv(e))}saveEventToCache(e){this.cachedEventUids.add(Bv(e)),this.lastProcessedEventTime=Date.now()}}function Bv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _D(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(t,e={}){return Fo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ED=/^https?/;async function wD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yD(t);for(const n of e)try{if(TD(n))return}catch{}js(t,"unauthorized-domain")}function TD(t){const e=ep(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ED.test(n))return!1;if(vD.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=new bl(3e4,6e4);function Wv(){const t=ys().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ID(t){return new Promise((e,n)=>{var s,i,r;function o(){Wv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wv(),n(_s(t,"network-request-failed"))},timeout:bD.get()})}if(!((i=(s=ys().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=ys().gapi)===null||r===void 0)&&r.load)o();else{const a=xx("iframefcb");return ys()[a]=()=>{gapi.load?o():n(_s(t,"network-request-failed"))},Nx(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Yc=null,e})}let Yc=null;function CD(t){return Yc=Yc||ID(t),Yc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=new bl(5e3,15e3),SD="__/auth/iframe",RD="emulator/auth/iframe",PD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OD(t){const e=t.config;we(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ag(e,RD):`https://${t.config.authDomain}/${SD}`,s={apiKey:e.apiKey,appName:t.name,v:Ri},i=kD.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Lo(s).slice(1)}`}async function ND(t){const e=await CD(t),n=ys().gapi;return we(n,t,"internal-error"),e.open({where:document.body,url:OD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PD,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=_s(t,"network-request-failed"),a=ys().setTimeout(()=>{r(o)},AD.get());function l(){ys().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DD=500,MD=600,LD="_blank",FD="http://localhost";class Hv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VD(t,e,n,s=DD,i=MD){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},xD),{width:s.toString(),height:i.toString(),top:r,left:o}),u=nn().toLowerCase();n&&(a=Ub(u)?LD:n),$b(u)&&(e=e||FD,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[m,y])=>`${p}${m}=${y},`,"");if(bx(u)&&a!=="_self")return $D(e||"",a),new Hv(null);const d=window.open(e||"",a,h);we(d,t,"popup-blocked");try{d.focus()}catch{}return new Hv(d)}function $D(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD="__/auth/handler",jD="emulator/auth/handler",BD=encodeURIComponent("fac");async function qv(t,e,n,s,i,r){we(t.config.authDomain,t,"auth-domain-config-required"),we(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ri,eventId:i};if(e instanceof Qb){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(r||{}))o[h]=d}if(e instanceof Il){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${BD}=${encodeURIComponent(l)}`:"";return`${WD(t)}?${Lo(a).slice(1)}${u}`}function WD({config:t}){return t.emulator?Ag(t,jD):`https://${t.authDomain}/${UD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="webStorageSupport";class HD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eI,this._completeRedirectFn=pD,this._overrideRedirectResult=hD}async _openPopup(e,n,s,i){var r;Bs((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await qv(e,n,s,ep(),i);return VD(e,o,kg())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await qv(e,n,s,ep(),i);return Gx(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Bs(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ND(e),s=new mD(e);return n.register("authEvent",i=>(we(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jd,{type:Jd},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Jd];o!==void 0&&n(!!o),js(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qb()||Pg()||Th()}}const qD=HD;var zv="@firebase/auth",Gv="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function KD(t){ws(new ts("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;we(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zb(t)},u=new kx(s,i,r,l);return Mx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ws(new ts("auth-internal",e=>{const n=Gb(e.getProvider("auth").getImmediate());return(s=>new zD(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(zv,Gv,GD(t)),On(zv,Gv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=5*60;LO("authIdTokenMaxAge");KD("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD=new Map,XD={activated:!1,tokenObservers:[]};function ns(t){return YD.get(t)||Object.assign({},XD)}const Kv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ga,this.pending.promise.catch(n=>{}),await ZD(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ga,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function ZD(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},wu=new Mo("appCheck","AppCheck",e1);function aI(t){if(!ns(t).activated)throw wu.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="firebase-app-check-database",n1=1,np="firebase-app-check-store";let bc=null;function s1(){return bc||(bc=new Promise((t,e)=>{try{const n=indexedDB.open(t1,n1);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(wu.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(np,{keyPath:"compositeKey"})}}}catch(n){e(wu.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),bc)}function i1(t,e){return r1(o1(t),e)}async function r1(t,e){const s=(await s1()).transaction(np,"readwrite"),r=s.objectStore(np).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var u;a(wu.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function o1(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=new Tl("@firebase/app-check");function Qv(t,e){return Tb()?i1(t,e).catch(n=>{sp.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1={error:"UNKNOWN_ERROR"};function l1(t){return Eh.encodeString(JSON.stringify(t),!1)}async function ip(t,e=!1){const n=t.app;aI(n);const s=ns(n);let i=s.token,r;if(i&&!_a(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(_a(l)?i=l:await Qv(n,void 0))}if(!e&&i&&_a(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await ns(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?sp.warn(l.message):sp.error(l),r=l}let a;return i?r?_a(i)?a={token:i.token,internalError:r}:a=Xv(r):(a={token:i.token},s.token=i,await Qv(n,i)):a=Xv(r),o&&d1(n,a),a}async function c1(t){const e=t.app;aI(e);const{provider:n}=ns(e);{const{token:s}=await n.getToken();return{token:s}}}function u1(t,e,n,s){const{app:i}=t,r=ns(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&_a(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Yv(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Yv(t))}function lI(t,e){const n=ns(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Yv(t){const{app:e}=t,n=ns(e);let s=n.tokenRefresher;s||(s=h1(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function h1(t){const{app:e}=t;return new JD(async()=>{const n=ns(e);let s;if(n.token?s=await ip(t,!0):s=await ip(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=ns(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Kv.RETRIAL_MIN_WAIT,Kv.RETRIAL_MAX_WAIT)}function d1(t,e){const n=ns(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function _a(t){return t.expireTimeMillis-Date.now()>0}function Xv(t){return{token:l1(a1),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=ns(this.app);for(const n of e)lI(this.app,n.next);return Promise.resolve()}}function p1(t,e){return new f1(t,e)}function g1(t){return{getToken:e=>ip(t,e),getLimitedUseToken:()=>c1(t),addTokenListener:e=>u1(t,"INTERNAL",e),removeTokenListener:e=>lI(t.app,e)}}const m1="@firebase/app-check",_1="0.8.1",y1="app-check",Jv="app-check-internal";function v1(){ws(new ts(y1,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return p1(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Jv).initialize()})),ws(new ts(Jv,t=>{const e=t.getProvider("app-check").getImmediate();return g1(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),On(m1,_1)}v1();var E1="firebase",w1="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On(E1,w1,"app");const cI=Symbol("firebaseApp");function Ir(t){return wl()&&kn(cI,null)||Pb(t)}const Et=()=>{};function Ng(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function T1(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Pi(t){return!!t&&typeof t=="object"}const b1=Object.prototype;function I1(t){return Pi(t)&&Object.getPrototypeOf(t)===b1}function xg(t){return Pi(t)&&t.type==="document"}function C1(t){return Pi(t)&&t.type==="collection"}function A1(t){return xg(t)||C1(t)}function S1(t){return Pi(t)&&t.type==="query"}function R1(t){return Pi(t)&&"ref"in t}function P1(t){return Pi(t)&&typeof t.bucket=="string"}function k1(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const O1=Symbol.for("v-scx");function uI(){return wl(),!!kn(O1,0)}const Ic=new WeakMap;function Dg(t,e){if(!Ic.has(t)){const n=lh(!0);Ic.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Ic.delete(t)}}return Ic.get(t)}const N1=new WeakMap,Cc=new WeakMap;function x1(t){const e=Ir(t);if(!Cc.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{Cc.set(e,r),n(r.value)}];Cc.set(e,i)}return Cc.get(e)}function D1(t,e){Ux(e,n=>{const s=x1();t.value=n,Array.isArray(s)&&s[1](t)})}var Zv={};const eE="@firebase/database",tE="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hI="";function M1(t){hI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),At(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ka(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new L1(e)}}catch{}return new F1},tr=dI("localStorage"),rp=dI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=new Tl("@firebase/database"),V1=function(){let t=1;return function(){return t++}}(),fI=function(t){const e=YO(t),n=new zO;n.update(e);const s=n.digest();return Eh.encodeByteArray(s)},Al=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Al.apply(null,s):typeof s=="object"?e+=At(s):e+=s,e+=" "}return e};let ur=null,nE=!0;const $1=function(t,e){j(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(oo.logLevel=Ne.VERBOSE,ur=oo.log.bind(oo),e&&rp.set("logging_enabled",!0)):typeof t=="function"?ur=t:(ur=null,rp.remove("logging_enabled"))},Xt=function(...t){if(nE===!0&&(nE=!1,ur===null&&rp.get("logging_enabled")===!0&&$1(!0)),ur){const e=Al.apply(null,t);ur(e)}},Sl=function(t){return function(...e){Xt(t,...e)}},op=function(...t){const e="FIREBASE INTERNAL ERROR: "+Al(...t);oo.error(e)},gr=function(...t){const e=`FIREBASE FATAL ERROR: ${Al(...t)}`;throw oo.error(e),new Error(e)},Nn=function(...t){const e="FIREBASE WARNING: "+Al(...t);oo.warn(e)},U1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Nn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},j1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Eo="[MIN_NAME]",mr="[MAX_NAME]",Vo=function(t,e){if(t===e)return 0;if(t===Eo||e===mr)return-1;if(e===Eo||t===mr)return 1;{const n=sE(t),s=sE(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},B1=function(t,e){return t===e?0:t<e?-1:1},sa=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+At(e))},Mg=function(t){if(typeof t!="object"||t===null)return At(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=At(e[s]),n+=":",n+=Mg(t[e[s]]);return n+="}",n},gI=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Tn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mI=function(t){j(!pI(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},W1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},H1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function q1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const z1=new RegExp("^-?(0*)\\d{1,10}$"),G1=-2147483648,K1=2147483647,sE=function(t){if(z1.test(t)){const e=Number(t);if(e>=G1&&e<=K1)return e}return null},Rl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Nn("Exception was thrown by user callback.",n),e},Math.floor(0))}},Q1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ka=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Nn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Nn(e)}}class ap{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ap.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="5",_I="v",yI="s",vI="r",EI="f",wI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,TI="ls",bI="p",lp="ac",II="websocket",CI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Z1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function AI(t,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let s;if(e===II)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===CI)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Z1(t)&&(n.ns=t.namespace);const i=[];return Tn(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(){this.counters_={}}incrementCounter(e,n=1){zs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return RO(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd={},ef={};function Fg(t){const e=t.toString();return Zd[e]||(Zd[e]=new eM),Zd[e]}function tM(t,e){const n=t.toString();return ef[n]||(ef[n]=e()),ef[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Rl(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="start",sM="close",iM="pLPCommand",rM="pRTLPCB",SI="id",RI="pw",PI="ser",oM="cb",aM="seg",lM="ts",cM="d",uM="dframe",kI=1870,OI=30,hM=kI-OI,dM=25e3,fM=3e4;class Yr{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Sl(e),this.stats_=Fg(n),this.urlFn=l=>(this.appCheckToken&&(l[lp]=this.appCheckToken),AI(n,CI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new nM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(fM)),j1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vg((...r)=>{const[o,a,l,u,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===iE)this.id=a,this.password=l;else if(o===sM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[iE]="t",s[PI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[oM]=this.scriptTagHolder.uniqueCallbackIdentifier),s[_I]=Lg,this.transportSessionId&&(s[yI]=this.transportSessionId),this.lastSessionId&&(s[TI]=this.lastSessionId),this.applicationId&&(s[bI]=this.applicationId),this.appCheckToken&&(s[lp]=this.appCheckToken),typeof location<"u"&&location.hostname&&wI.test(location.hostname)&&(s[vI]=EI);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yr.forceAllow_=!0}static forceDisallow(){Yr.forceDisallow_=!0}static isAvailable(){return Yr.forceAllow_?!0:!Yr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!W1()&&!H1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=At(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_b(n),i=gI(s,hM);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[uM]="t",s[SI]=e,s[RI]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=At(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Vg{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=V1(),window[iM+this.uniqueCallbackIdentifier]=e,window[rM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Vg.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Xt("frame writing exception"),a.stack&&Xt(a.stack),Xt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[SI]=this.myID,e[RI]=this.myPW,e[PI]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+OI+s.length<=kI;){const o=this.pendingSegs.shift();s=s+"&"+aM+i+"="+o.seg+"&"+lM+i+"="+o.ts+"&"+cM+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(dM)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Xt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM=16384,gM=45e3;let Tu=null;typeof MozWebSocket<"u"?Tu=MozWebSocket:typeof WebSocket<"u"&&(Tu=WebSocket);class Kn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Sl(this.connId),this.stats_=Fg(n),this.connURL=Kn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[_I]=Lg,typeof location<"u"&&location.hostname&&wI.test(location.hostname)&&(o[vI]=EI),n&&(o[yI]=n),s&&(o[TI]=s),i&&(o[lp]=i),r&&(o[bI]=r),AI(e,II,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tr.set("previous_websocket_failure",!0);try{let s;wb(),this.mySock=new Tu(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Kn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Tu!==null&&!Kn.forceDisallow_}static previouslyFailed(){return tr.isInMemoryStorage||tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ka(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=At(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=gI(n,pM);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kn.responsesRequiredToBeHealthy=2;Kn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Yr,Kn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Kn&&Kn.isAvailable();let s=n&&!Kn.previouslyFailed();if(e.webSocketOnly&&(n||Nn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Kn];else{const i=this.transports_=[];for(const r of Ja.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ja.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ja.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM=6e4,_M=5e3,yM=10*1024,vM=100*1024,tf="t",rE="d",EM="s",oE="r",wM="e",aE="o",lE="a",cE="n",uE="p",TM="h";class bM{constructor(e,n,s,i,r,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Sl("c:"+this.id+":"),this.transportManager_=new Ja(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ka(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>yM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tf in e){const n=e[tf];n===lE?this.upgradeIfSecondaryHealthy_():n===oE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===aE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=sa("t",e),s=sa("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:uE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:lE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:cE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=sa("t",e),s=sa("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=sa(tf,e);if(rE in e){const s=e[rE];if(n===TM){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===cE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===EM?this.onConnectionShutdown_(s):n===oE?this.onReset_(s):n===wM?op("Server Error: "+s):n===aE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):op("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Lg!==s&&Nn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ka(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ka(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_M))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:uE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends xI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Tg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bu}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=32,dE=768;class tt{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ue(){return new tt("")}function Pe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ti(t){return t.pieces_.length-t.pieceNum_}function st(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new tt(t.pieces_,e)}function DI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function IM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function MI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function LI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new tt(e,0)}function St(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof tt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new tt(n,0)}function ke(t){return t.pieceNum_>=t.pieces_.length}function _n(t,e){const n=Pe(t),s=Pe(e);if(n===null)return e;if(n===s)return _n(st(t),st(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $g(t,e){if(Ti(t)!==Ti(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Yn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ti(t)>Ti(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class CM{constructor(e,n){this.errorPrefix_=n,this.parts_=MI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=wh(this.parts_[s]);FI(this)}}function AM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=wh(e),FI(t)}function SM(t){const e=t.parts_.pop();t.byteLength_-=wh(e),t.parts_.length>0&&(t.byteLength_-=1)}function FI(t){if(t.byteLength_>dE)throw new Error(t.errorPrefix_+"has a key path longer than "+dE+" bytes ("+t.byteLength_+").");if(t.parts_.length>hE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hE+") or object contains a cycle "+Ji(t))}function Ji(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug extends xI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ug}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=1e3,RM=60*5*1e3,fE=30*1e3,PM=1.3,kM=3e4,OM="server_kill",pE=3;class Us extends NI{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Us.nextPersistentConnectionId_++,this.log_=Sl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ia,this.maxReconnectDelay_=RM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!wb())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ug.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(At(r)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ga,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,u=a.s;Us.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zs(e,"w")){const s=yo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Nn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=fE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=HO(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+At(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):op("Unrecognized action received from server: "+At(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ia,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ia,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kM&&(this.reconnectDelay_=ia),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*PM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Us.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},u=function(d){j(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Xt("getToken() completed but was canceled"):(Xt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new bM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{Nn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(OM)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Nn(d),l())}}}interrupt(e){Xt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Kf(this.interruptReasons_)&&(this.reconnectDelay_=ia,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Mg(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new tt(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Xt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=pE&&(this.reconnectDelay_=fE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Xt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=pE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hI.replace(/\./g,"-")]=1,Tg()?e["framework.cordova"]=1:Eb()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bu.getInstance().currentlyOnline();return Kf(this.interruptReasons_)&&e}}Us.nextPersistentConnectionId_=0;Us.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Re(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Re(Eo,e),i=new Re(Eo,n);return this.compare(s,i)!==0}minPost(){return Re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac;class VI extends Ch{static get __EMPTY_NODE(){return Ac}static set __EMPTY_NODE(e){Ac=e}compare(e,n){return Vo(e.name,n.name)}isDefinedOn(e){throw Do("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Re.MIN}maxPost(){return new Re(mr,Ac)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new Re(e,Ac)}toString(){return".key"}}const ao=new VI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc=class{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Rn=class ya{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ya.RED,this.left=i??ps.EMPTY_NODE,this.right=r??ps.EMPTY_NODE}copy(e,n,s,i,r){return new ya(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ps.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ps.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ya.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ya.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Rn.RED=!0;Rn.BLACK=!1;class NM{copy(e,n,s,i,r){return this}insert(e,n,s){return new Rn(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let ps=class Xc{constructor(e,n=Xc.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Xc(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Rn.BLACK,null,null))}remove(e){return new Xc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Rn.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Sc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Sc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Sc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Sc(this.root_,null,this.comparator_,!0,e)}};ps.EMPTY_NODE=new NM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(t,e){return Vo(t.name,e.name)}function jg(t,e){return Vo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cp;function DM(t){cp=t}const $I=function(t){return typeof t=="number"?"number:"+mI(t):"string:"+t},UI=function(t){if(t.isLeafNode()){const e=t.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zs(e,".sv"),"Priority must be a string or number.")}else j(t===cp||t.isEmpty(),"priority of unexpected type.");j(t===cp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gE;class Ot{constructor(e,n=Ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),UI(this.priorityNode_)}static set __childrenNodeConstructor(e){gE=e}static get __childrenNodeConstructor(){return gE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ke(e)?this:Pe(e)===".priority"?this.priorityNode_:Ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Pe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(j(s!==".priority"||Ti(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(st(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$I(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mI(this.value_):e+=this.value_,this.lazyHash_=fI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ot.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ot.VALUE_TYPE_ORDER.indexOf(n),r=Ot.VALUE_TYPE_ORDER.indexOf(s);return j(i>=0,"Unknown leaf type: "+n),j(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jI,BI;function MM(t){jI=t}function LM(t){BI=t}class FM extends Ch{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Vo(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Re.MIN}maxPost(){return new Re(mr,new Ot("[PRIORITY-POST]",BI))}makePost(e,n){const s=jI(e);return new Re(n,new Ot("[PRIORITY-POST]",s))}toString(){return".priority"}}const ut=new FM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM=Math.log(2);class $M{constructor(e){const n=r=>parseInt(Math.log(r)/VM,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Iu=function(t,e,n,s){t.sort(e);const i=function(l,u){const h=u-l;let d,p;if(h===0)return null;if(h===1)return d=t[l],p=n?n(d):d,new Rn(p,d.node,Rn.BLACK,null,null);{const m=parseInt(h/2,10)+l,y=i(l,m),w=i(m+1,u);return d=t[m],p=n?n(d):d,new Rn(p,d.node,Rn.BLACK,y,w)}},r=function(l){let u=null,h=null,d=t.length;const p=function(y,w){const T=d-y,A=d;d-=y;const N=i(T+1,A),k=t[T],L=n?n(k):k;m(new Rn(L,k.node,w,null,N))},m=function(y){u?(u.left=y,u=y):(h=y,u=y)};for(let y=0;y<l.count;++y){const w=l.nextBitIsOne(),T=Math.pow(2,l.count-(y+1));w?p(T,Rn.BLACK):(p(T,Rn.BLACK),p(T,Rn.RED))}return h},o=new $M(t.length),a=r(o);return new ps(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf;const jr={};class Fs{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return j(jr&&ut,"ChildrenNode.ts has not been loaded"),nf=nf||new Fs({".priority":jr},{".priority":ut}),nf}get(e){const n=yo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ps?n:null}hasIndex(e){return zs(this.indexSet_,e.toString())}addIndex(e,n){j(e!==ao,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Re.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Iu(s,e.getCompare()):a=jr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Fs(h,u)}addToIndexes(e,n){const s=fu(this.indexes_,(i,r)=>{const o=yo(this.indexSet_,r);if(j(o,"Missing index implementation for "+r),i===jr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Re.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Iu(a,o.getCompare())}else return jr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Re(e.name,a))),l.insert(e,e.node)}});return new Fs(s,this.indexSet_)}removeFromIndexes(e,n){const s=fu(this.indexes_,i=>{if(i===jr)return i;{const r=n.get(e.name);return r?i.remove(new Re(e.name,r)):i}});return new Fs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;class ce{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&UI(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ra||(ra=new ce(new ps(jg),null,Fs.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ra}updatePriority(e){return this.children_.isEmpty()?this:new ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ra:n}}getChild(e){const n=Pe(e);return n===null?this:this.getImmediateChild(n).getChild(st(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Re(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ra:this.priorityNode_;return new ce(i,o,r)}}updateChild(e,n){const s=Pe(e);if(s===null)return n;{j(Pe(e)!==".priority"||Ti(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(st(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ut,(o,a)=>{n[o]=a.val(e),s++,r&&ce.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$I(this.getPriority().val())+":"),this.forEachChild(ut,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":fI(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Re(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Re(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Re.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Re.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pl?-1:0}withIndex(e){if(e===ao||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ce(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ao||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ut),i=n.getIterator(ut);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ao?null:this.indexMap_.get(e.toString())}}ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class UM extends ce{constructor(){super(new ps(jg),ce.EMPTY_NODE,Fs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ce.EMPTY_NODE}isEmpty(){return!1}}const Pl=new UM;Object.defineProperties(Re,{MIN:{value:new Re(Eo,ce.EMPTY_NODE)},MAX:{value:new Re(mr,Pl)}});VI.__EMPTY_NODE=ce.EMPTY_NODE;Ot.__childrenNodeConstructor=ce;DM(Pl);LM(Pl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM=!0;function jt(t,e=null){if(t===null)return ce.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ot(n,jt(e))}if(!(t instanceof Array)&&jM){const n=[];let s=!1;if(Tn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=jt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Re(o,l)))}}),n.length===0)return ce.EMPTY_NODE;const r=Iu(n,xM,o=>o.name,jg);if(s){const o=Iu(n,ut.getCompare());return new ce(r,jt(e),new Fs({".priority":o},{".priority":ut}))}else return new ce(r,jt(e),Fs.Default)}else{let n=ce.EMPTY_NODE;return Tn(t,(s,i)=>{if(zs(t,s)&&s.substring(0,1)!=="."){const r=jt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(jt(e))}}MM(jt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM extends Ch{constructor(e){super(),this.indexPath_=e,j(!ke(e)&&Pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Vo(e.name,n.name):r}makePost(e,n){const s=jt(e),i=ce.EMPTY_NODE.updateChild(this.indexPath_,s);return new Re(n,i)}maxPost(){const e=ce.EMPTY_NODE.updateChild(this.indexPath_,Pl);return new Re(mr,e)}toString(){return MI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM extends Ch{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Vo(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Re.MIN}maxPost(){return Re.MAX}makePost(e,n){const s=jt(e);return new Re(n,s)}toString(){return".value"}}const HM=new WM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){return{type:"value",snapshotNode:t}}function wo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Za(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function el(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function qM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Za(n,a)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(wo(n,s)):o.trackChildChange(el(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ut,(i,r)=>{n.hasChild(i)||s.trackChildChange(Za(i,r))}),n.isLeafNode()||n.forEachChild(ut,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(el(i,r,o))}else s.trackChildChange(wo(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ce.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.indexedFilter_=new Bg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=tl.getStartPost_(e),this.endPost_=tl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Re(n,s))||(s=ce.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ce.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ce.EMPTY_NODE);const r=this;return n.forEachChild(ut,(o,a)=>{r.matches(new Re(o,a))||(i=i.updateImmediateChild(o,ce.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new tl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Re(n,s))||(s=ce.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=ce.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ce.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ce.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ce.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(p,m)=>d(m,p)}else o=this.index_.getCompare();const a=e;j(a.numChildren()===this.limit_,"");const l=new Re(n,s),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,u,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const m=p==null?1:o(p,l);if(h&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(el(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Za(n,d));const w=a.updateImmediateChild(n,ce.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(wo(p.name,p.node)),w.updateImmediateChild(p.name,p.node)):w}}else return s.isEmpty()?e:h&&o(u,l)>=0?(r!=null&&(r.trackChildChange(Za(u.name,u.node)),r.trackChildChange(wo(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(u.name,ce.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ut}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Eo}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ut}copy(){const e=new Wg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GM(t){return t.loadsAllData()?new Bg(t.getIndex()):t.hasLimit()?new zM(t):new tl(t)}function mE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ut?n="$priority":t.index_===HM?n="$value":t.index_===ao?n="$key":(j(t.index_ instanceof BM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=At(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=At(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+At(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=At(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+At(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function _E(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ut&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu extends NI{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Sl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Cu.getListenId_(e,s),a={};this.listens_[o]=a;const l=mE(e._queryParams);this.restRequest_(r+".json",l,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(r,d,!1,s),yo(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",i(p,null)}})}unlisten(e,n){const s=Cu.getListenId_(e,n);delete this.listens_[s]}get(e){const n=mE(e._queryParams),s=e._path.toString(),i=new Ga;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Lo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ka(a.responseText)}catch{Nn("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Nn("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(){this.rootNode_=ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(){return{value:null,children:new Map}}function HI(t,e,n){if(ke(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Pe(e);t.children.has(s)||t.children.set(s,Au());const i=t.children.get(s);e=st(e),HI(i,e,n)}}function up(t,e,n){t.value!==null?n(e,t.value):QM(t,(s,i)=>{const r=new tt(e.toString()+"/"+s);up(i,r,n)})}function QM(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Tn(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=10*1e3,XM=30*1e3,JM=5*60*1e3;class ZM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new YM(e);const s=yE+(XM-yE)*Math.random();ka(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Tn(e,(i,r)=>{r>0&&zs(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ka(this.reportStats_.bind(this),Math.floor(Math.random()*2*JM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xn||(Xn={}));function qI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xn.ACK_USER_WRITE,this.source=qI()}operationForChild(e){if(ke(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new tt(e));return new Su(Ue(),n,this.revert)}}else return j(Pe(this.path)===e,"operationForChild called for unrelated child."),new Su(st(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n){this.source=e,this.path=n,this.type=Xn.LISTEN_COMPLETE}operationForChild(e){return ke(this.path)?new nl(this.source,Ue()):new nl(this.source,st(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xn.OVERWRITE}operationForChild(e){return ke(this.path)?new _r(this.source,Ue(),this.snap.getImmediateChild(e)):new _r(this.source,st(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xn.MERGE}operationForChild(e){if(ke(this.path)){const n=this.children.subtree(new tt(e));return n.isEmpty()?null:n.value?new _r(this.source,Ue(),n.value):new sl(this.source,Ue(),n)}else return j(Pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new sl(this.source,st(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ke(e))return this.isFullyInitialized()&&!this.filtered_;const n=Pe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tL(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(qM(o.childName,o.snapshotNode))}),oa(t,i,"child_removed",e,s,n),oa(t,i,"child_added",e,s,n),oa(t,i,"child_moved",r,s,n),oa(t,i,"child_changed",e,s,n),oa(t,i,"value",e,s,n),i}function oa(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>sL(t,a,l)),o.forEach(a=>{const l=nL(t,a,r);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function nL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function sL(t,e,n){if(e.childName==null||n.childName==null)throw Do("Should only compare child_ events.");const s=new Re(e.childName,e.snapshotNode),i=new Re(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t,e){return{eventCache:t,serverCache:e}}function Oa(t,e,n,s){return Ah(new bi(e,n,s),t.serverCache)}function zI(t,e,n,s){return Ah(t.eventCache,new bi(e,n,s))}function Ru(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function yr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf;const iL=()=>(sf||(sf=new ps(B1)),sf);class it{constructor(e,n=iL()){this.value=e,this.children=n}static fromObject(e){let n=new it(null);return Tn(e,(s,i)=>{n=n.set(new tt(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ue(),value:this.value};if(ke(e))return null;{const s=Pe(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(st(e),n);return r!=null?{path:St(new tt(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ke(e))return this;{const n=Pe(e),s=this.children.get(n);return s!==null?s.subtree(st(e)):new it(null)}}set(e,n){if(ke(e))return new it(n,this.children);{const s=Pe(e),r=(this.children.get(s)||new it(null)).set(st(e),n),o=this.children.insert(s,r);return new it(this.value,o)}}remove(e){if(ke(e))return this.children.isEmpty()?new it(null):new it(null,this.children);{const n=Pe(e),s=this.children.get(n);if(s){const i=s.remove(st(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new it(null):new it(this.value,r)}else return this}}get(e){if(ke(e))return this.value;{const n=Pe(e),s=this.children.get(n);return s?s.get(st(e)):null}}setTree(e,n){if(ke(e))return n;{const s=Pe(e),r=(this.children.get(s)||new it(null)).setTree(st(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new it(this.value,o)}}fold(e){return this.fold_(Ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(St(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ue(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ke(e))return null;{const r=Pe(e),o=this.children.get(r);return o?o.findOnPath_(st(e),St(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ue(),n)}foreachOnPath_(e,n,s){if(ke(e))return this;{this.value&&s(n,this.value);const i=Pe(e),r=this.children.get(i);return r?r.foreachOnPath_(st(e),St(n,i),s):new it(null)}}foreach(e){this.foreach_(Ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(St(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.writeTree_=e}static empty(){return new es(new it(null))}}function Na(t,e,n){if(ke(e))return new es(new it(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=_n(i,e);return r=r.updateChild(o,n),new es(t.writeTree_.set(i,r))}else{const i=new it(n),r=t.writeTree_.setTree(e,i);return new es(r)}}}function vE(t,e,n){let s=t;return Tn(n,(i,r)=>{s=Na(s,St(e,i),r)}),s}function EE(t,e){if(ke(e))return es.empty();{const n=t.writeTree_.setTree(e,new it(null));return new es(n)}}function hp(t,e){return Cr(t,e)!=null}function Cr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(_n(n.path,e)):null}function wE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ut,(s,i)=>{e.push(new Re(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Re(s,i.value))}),e}function gi(t,e){if(ke(e))return t;{const n=Cr(t,e);return n!=null?new es(new it(n)):new es(t.writeTree_.subtree(e))}}function dp(t){return t.writeTree_.isEmpty()}function To(t,e){return GI(Ue(),t.writeTree_,e)}function GI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(j(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=GI(St(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(St(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t,e){return XI(e,t)}function rL(t,e,n,s,i){j(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Na(t.visibleWrites,e,n)),t.lastWriteId=s}function oL(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function aL(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&lL(a,s.path)?i=!1:Yn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return cL(t),!0;if(s.snap)t.visibleWrites=EE(t.visibleWrites,s.path);else{const a=s.children;Tn(a,l=>{t.visibleWrites=EE(t.visibleWrites,St(s.path,l))})}return!0}else return!1}function lL(t,e){if(t.snap)return Yn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Yn(St(t.path,n),e))return!0;return!1}function cL(t){t.visibleWrites=KI(t.allWrites,uL,Ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function uL(t){return t.visible}function KI(t,e,n){let s=es.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Yn(n,o)?(a=_n(n,o),s=Na(s,a,r.snap)):Yn(o,n)&&(a=_n(o,n),s=Na(s,Ue(),r.snap.getChild(a)));else if(r.children){if(Yn(n,o))a=_n(n,o),s=vE(s,a,r.children);else if(Yn(o,n))if(a=_n(o,n),ke(a))s=vE(s,Ue(),r.children);else{const l=yo(r.children,Pe(a));if(l){const u=l.getChild(st(a));s=Na(s,Ue(),u)}}}else throw Do("WriteRecord should have .snap or .children")}}return s}function QI(t,e,n,s,i){if(!s&&!i){const r=Cr(t.visibleWrites,e);if(r!=null)return r;{const o=gi(t.visibleWrites,e);if(dp(o))return n;if(n==null&&!hp(o,Ue()))return null;{const a=n||ce.EMPTY_NODE;return To(o,a)}}}else{const r=gi(t.visibleWrites,e);if(!i&&dp(r))return n;if(!i&&n==null&&!hp(r,Ue()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(Yn(u.path,e)||Yn(e,u.path))},a=KI(t.allWrites,o,e),l=n||ce.EMPTY_NODE;return To(a,l)}}}function hL(t,e,n){let s=ce.EMPTY_NODE;const i=Cr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ut,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=gi(t.visibleWrites,e);return n.forEachChild(ut,(o,a)=>{const l=To(gi(r,new tt(o)),a);s=s.updateImmediateChild(o,l)}),wE(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=gi(t.visibleWrites,e);return wE(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function dL(t,e,n,s,i){j(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=St(e,n);if(hp(t.visibleWrites,r))return null;{const o=gi(t.visibleWrites,r);return dp(o)?i.getChild(n):To(o,i.getChild(n))}}function fL(t,e,n,s){const i=St(e,n),r=Cr(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=gi(t.visibleWrites,i);return To(o,s.getNode().getImmediateChild(n))}else return null}function pL(t,e){return Cr(t.visibleWrites,e)}function gL(t,e,n,s,i,r,o){let a;const l=gi(t.visibleWrites,e),u=Cr(l,Ue());if(u!=null)a=u;else if(n!=null)a=To(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),p=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=p.getNext();for(;m&&h.length<i;)d(m,s)!==0&&h.push(m),m=p.getNext();return h}else return[]}function mL(){return{visibleWrites:es.empty(),allWrites:[],lastWriteId:-1}}function Pu(t,e,n,s){return QI(t.writeTree,t.treePath,e,n,s)}function zg(t,e){return hL(t.writeTree,t.treePath,e)}function TE(t,e,n,s){return dL(t.writeTree,t.treePath,e,n,s)}function ku(t,e){return pL(t.writeTree,St(t.treePath,e))}function _L(t,e,n,s,i,r){return gL(t.writeTree,t.treePath,e,n,s,i,r)}function Gg(t,e,n){return fL(t.writeTree,t.treePath,e,n)}function YI(t,e){return XI(St(t.treePath,e),t.writeTree)}function XI(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,el(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Za(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,wo(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,el(s,e.snapshotNode,i.oldSnap));else throw Do("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const JI=new vL;class Kg{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new bi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gg(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:yr(this.viewCache_),r=_L(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(t){return{filter:t}}function wL(t,e){j(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function TL(t,e,n,s,i){const r=new yL;let o,a;if(n.type===Xn.OVERWRITE){const u=n;u.source.fromUser?o=fp(t,e,u.path,u.snap,s,i,r):(j(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ke(u.path),o=Ou(t,e,u.path,u.snap,s,i,a,r))}else if(n.type===Xn.MERGE){const u=n;u.source.fromUser?o=IL(t,e,u.path,u.children,s,i,r):(j(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=pp(t,e,u.path,u.children,s,i,a,r))}else if(n.type===Xn.ACK_USER_WRITE){const u=n;u.revert?o=SL(t,e,u.path,s,i,r):o=CL(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===Xn.LISTEN_COMPLETE)o=AL(t,e,n.path,s,r);else throw Do("Unknown operation type: "+n.type);const l=r.getChanges();return bL(e,o,l),{viewCache:o,changes:l}}function bL(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ru(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(WI(Ru(e)))}}function ZI(t,e,n,s,i,r){const o=e.eventCache;if(ku(s,n)!=null)return e;{let a,l;if(ke(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=yr(e),h=u instanceof ce?u:ce.EMPTY_NODE,d=zg(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const u=Pu(s,yr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=Pe(n);if(u===".priority"){j(Ti(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=TE(s,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=st(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=TE(s,n,o.getNode(),l);p!=null?d=o.getNode().getImmediateChild(u).updateChild(h,p):d=o.getNode().getImmediateChild(u)}else d=Gg(s,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,h,i,r):a=o.getNode()}}return Oa(e,a,o.isFullyInitialized()||ke(n),t.filter.filtersNodes())}}function Ou(t,e,n,s,i,r,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(ke(n))u=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);u=h.updateFullNode(l.getNode(),m,null)}else{const m=Pe(n);if(!l.isCompleteForPath(n)&&Ti(n)>1)return e;const y=st(n),T=l.getNode().getImmediateChild(m).updateChild(y,s);m===".priority"?u=h.updatePriority(l.getNode(),T):u=h.updateChild(l.getNode(),m,T,y,JI,null)}const d=zI(e,u,l.isFullyInitialized()||ke(n),h.filtersNodes()),p=new Kg(i,d,r);return ZI(t,d,n,i,p,a)}function fp(t,e,n,s,i,r,o){const a=e.eventCache;let l,u;const h=new Kg(i,e,r);if(ke(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Oa(e,u,!0,t.filter.filtersNodes());else{const d=Pe(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),l=Oa(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=st(n),m=a.getNode().getImmediateChild(d);let y;if(ke(p))y=s;else{const w=h.getCompleteChild(d);w!=null?DI(p)===".priority"&&w.getChild(LI(p)).isEmpty()?y=w:y=w.updateChild(p,s):y=ce.EMPTY_NODE}if(m.equals(y))l=e;else{const w=t.filter.updateChild(a.getNode(),d,y,p,h,o);l=Oa(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function bE(t,e){return t.eventCache.isCompleteForChild(e)}function IL(t,e,n,s,i,r,o){let a=e;return s.foreach((l,u)=>{const h=St(n,l);bE(e,Pe(h))&&(a=fp(t,a,h,u,i,r,o))}),s.foreach((l,u)=>{const h=St(n,l);bE(e,Pe(h))||(a=fp(t,a,h,u,i,r,o))}),a}function IE(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function pp(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ke(n)?u=s:u=new it(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,p)=>{if(h.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),y=IE(t,m,p);l=Ou(t,l,new tt(d),y,i,r,o,a)}}),u.children.inorderTraversal((d,p)=>{const m=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!h.hasChild(d)&&!m){const y=e.serverCache.getNode().getImmediateChild(d),w=IE(t,y,p);l=Ou(t,l,new tt(d),w,i,r,o,a)}}),l}function CL(t,e,n,s,i,r,o){if(ku(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ke(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ou(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ke(n)){let u=new it(null);return l.getNode().forEachChild(ao,(h,d)=>{u=u.set(new tt(h),d)}),pp(t,e,n,u,i,r,a,o)}else return e}else{let u=new it(null);return s.foreach((h,d)=>{const p=St(n,h);l.isCompleteForPath(p)&&(u=u.set(h,l.getNode().getChild(p)))}),pp(t,e,n,u,i,r,a,o)}}function AL(t,e,n,s,i){const r=e.serverCache,o=zI(e,r.getNode(),r.isFullyInitialized()||ke(n),r.isFiltered());return ZI(t,o,n,s,JI,i)}function SL(t,e,n,s,i,r){let o;if(ku(s,n)!=null)return e;{const a=new Kg(s,e,i),l=e.eventCache.getNode();let u;if(ke(n)||Pe(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Pu(s,yr(e));else{const d=e.serverCache.getNode();j(d instanceof ce,"serverChildren would be complete if leaf node"),h=zg(s,d)}h=h,u=t.filter.updateFullNode(l,h,r)}else{const h=Pe(n);let d=Gg(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?u=t.filter.updateChild(l,h,d,st(n),a,r):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,ce.EMPTY_NODE,st(n),a,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Pu(s,yr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||ku(s,Ue())!=null,Oa(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Bg(s.getIndex()),r=GM(s);this.processor_=EL(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(ce.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(ce.EMPTY_NODE,a.getNode(),null),h=new bi(l,o.isFullyInitialized(),i.filtersNodes()),d=new bi(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ah(d,h),this.eventGenerator_=new eL(this.query_)}get query(){return this.query_}}function PL(t){return t.viewCache_.serverCache.getNode()}function kL(t){return Ru(t.viewCache_)}function OL(t,e){const n=yr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ke(e)&&!n.getImmediateChild(Pe(e)).isEmpty())?n.getChild(e):null}function CE(t){return t.eventRegistrations_.length===0}function NL(t,e){t.eventRegistrations_.push(e)}function AE(t,e,n){const s=[];if(n){j(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function SE(t,e,n,s){e.type===Xn.MERGE&&e.source.queryId!==null&&(j(yr(t.viewCache_),"We should always have a full cache before handling merges"),j(Ru(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=TL(t.processor_,i,e,n,s);return wL(t.processor_,r.viewCache),j(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,eC(t,r.changes,r.viewCache.eventCache.getNode(),null)}function xL(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ut,(r,o)=>{s.push(wo(r,o))}),n.isFullyInitialized()&&s.push(WI(n.getNode())),eC(t,s,n.getNode(),e)}function eC(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return tL(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu;class tC{constructor(){this.views=new Map}}function DL(t){j(!Nu,"__referenceConstructor has already been defined"),Nu=t}function ML(){return j(Nu,"Reference.ts has not been loaded"),Nu}function LL(t){return t.views.size===0}function Qg(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return j(r!=null,"SyncTree gave us an op for an invalid query."),SE(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(SE(o,e,n,s));return r}}function nC(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Pu(n,i?s:null),l=!1;a?l=!0:s instanceof ce?(a=zg(n,s),l=!1):(a=ce.EMPTY_NODE,l=!1);const u=Ah(new bi(a,l,!1),new bi(s,i,!1));return new RL(e,u)}return o}function FL(t,e,n,s,i,r){const o=nC(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),NL(o,n),xL(o,n)}function VL(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ii(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(AE(u,n,s)),CE(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||r.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(AE(l,n,s)),CE(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ii(t)&&r.push(new(ML())(e._repo,e._path)),{removed:r,events:o}}function sC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function mi(t,e){let n=null;for(const s of t.views.values())n=n||OL(s,e);return n}function iC(t,e){if(e._queryParams.loadsAllData())return Rh(t);{const s=e._queryIdentifier;return t.views.get(s)}}function rC(t,e){return iC(t,e)!=null}function Ii(t){return Rh(t)!=null}function Rh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu;function $L(t){j(!xu,"__referenceConstructor has already been defined"),xu=t}function UL(){return j(xu,"Reference.ts has not been loaded"),xu}let jL=1;class RE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new it(null),this.pendingWriteTree_=mL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function BL(t,e,n,s,i){return rL(t.pendingWriteTree_,e,n,s,i),i?Ol(t,new _r(qI(),e,n)):[]}function Xr(t,e,n=!1){const s=oL(t.pendingWriteTree_,e);if(aL(t.pendingWriteTree_,e)){let r=new it(null);return s.snap!=null?r=r.set(Ue(),!0):Tn(s.children,o=>{r=r.set(new tt(o),!0)}),Ol(t,new Su(s.path,r,n))}else return[]}function kl(t,e,n){return Ol(t,new _r(Hg(),e,n))}function WL(t,e,n){const s=it.fromObject(n);return Ol(t,new sl(Hg(),e,s))}function HL(t,e){return Ol(t,new nl(Hg(),e))}function qL(t,e,n){const s=Yg(t,n);if(s){const i=Xg(s),r=i.path,o=i.queryId,a=_n(r,e),l=new nl(qg(o),a);return Jg(t,r,l)}else return[]}function Du(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||rC(o,e))){const l=VL(o,e,n,s);LL(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=l.removed;if(a=l.events,!i){const h=u.findIndex(p=>p._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(p,m)=>Ii(m));if(h&&!d){const p=t.syncPointTree_.subtree(r);if(!p.isEmpty()){const m=KL(p);for(let y=0;y<m.length;++y){const w=m[y],T=w.query,A=uC(t,w);t.listenProvider_.startListening(xa(T),il(t,T),A.hashFn,A.onComplete)}}}!d&&u.length>0&&!s&&(h?t.listenProvider_.stopListening(xa(e),null):u.forEach(p=>{const m=t.queryToTagMap.get(Ph(p));t.listenProvider_.stopListening(xa(p),m)}))}QL(t,u)}return a}function oC(t,e,n,s){const i=Yg(t,s);if(i!=null){const r=Xg(i),o=r.path,a=r.queryId,l=_n(o,e),u=new _r(qg(a),l,n);return Jg(t,o,u)}else return[]}function zL(t,e,n,s){const i=Yg(t,s);if(i){const r=Xg(i),o=r.path,a=r.queryId,l=_n(o,e),u=it.fromObject(n),h=new sl(qg(a),l,u);return Jg(t,o,h)}else return[]}function gp(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,m)=>{const y=_n(p,i);r=r||mi(m,y),o=o||Ii(m)});let a=t.syncPointTree_.get(i);a?(o=o||Ii(a),r=r||mi(a,Ue())):(a=new tC,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=ce.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,y)=>{const w=mi(y,Ue());w&&(r=r.updateImmediateChild(m,w))}));const u=rC(a,e);if(!u&&!e._queryParams.loadsAllData()){const p=Ph(e);j(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const m=YL();t.queryToTagMap.set(p,m),t.tagToQueryMap.set(m,p)}const h=Sh(t.pendingWriteTree_,i);let d=FL(a,e,n,h,r,l);if(!u&&!o&&!s){const p=iC(a,e);d=d.concat(XL(t,e,p))}return d}function aC(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=_n(o,e),u=mi(a,l);if(u)return u});return QI(i,e,r,n,!0)}function GL(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(u,h)=>{const d=_n(u,n);s=s||mi(h,d)});let i=t.syncPointTree_.get(n);i?s=s||mi(i,Ue()):(i=new tC,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new bi(s,!0,!1):null,a=Sh(t.pendingWriteTree_,e._path),l=nC(i,e,a,r?o.getNode():ce.EMPTY_NODE,r);return kL(l)}function Ol(t,e){return lC(e,t.syncPointTree_,null,Sh(t.pendingWriteTree_,Ue()))}function lC(t,e,n,s){if(ke(t.path))return cC(t,e,n,s);{const i=e.get(Ue());n==null&&i!=null&&(n=mi(i,Ue()));let r=[];const o=Pe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=YI(s,o);r=r.concat(lC(a,l,u,h))}return i&&(r=r.concat(Qg(i,t,s,n))),r}}function cC(t,e,n,s){const i=e.get(Ue());n==null&&i!=null&&(n=mi(i,Ue()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=YI(s,o),h=t.operationForChild(o);h&&(r=r.concat(cC(h,a,l,u)))}),i&&(r=r.concat(Qg(i,t,s,n))),r}function uC(t,e){const n=e.query,s=il(t,n);return{hashFn:()=>(PL(e)||ce.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?qL(t,n._path,s):HL(t,n._path);{const r=q1(i,n);return Du(t,n,null,r)}}}}function il(t,e){const n=Ph(e);return t.queryToTagMap.get(n)}function Ph(t){return t._path.toString()+"$"+t._queryIdentifier}function Yg(t,e){return t.tagToQueryMap.get(e)}function Xg(t){const e=t.indexOf("$");return j(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new tt(t.substr(0,e))}}function Jg(t,e,n){const s=t.syncPointTree_.get(e);j(s,"Missing sync point for query tag that we're tracking");const i=Sh(t.pendingWriteTree_,e);return Qg(s,n,i,null)}function KL(t){return t.fold((e,n,s)=>{if(n&&Ii(n))return[Rh(n)];{let i=[];return n&&(i=sC(n)),Tn(s,(r,o)=>{i=i.concat(o)}),i}})}function xa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(UL())(t._repo,t._path):t}function QL(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ph(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function YL(){return jL++}function XL(t,e,n){const s=e._path,i=il(t,e),r=uC(t,n),o=t.listenProvider_.startListening(xa(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)j(!Ii(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,h,d)=>{if(!ke(u)&&h&&Ii(h))return[Rh(h).query];{let p=[];return h&&(p=p.concat(sC(h).map(m=>m.query))),Tn(d,(m,y)=>{p=p.concat(y)}),p}});for(let u=0;u<l.length;++u){const h=l[u];t.listenProvider_.stopListening(xa(h),il(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zg(n)}node(){return this.node_}}class em{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=St(this.path_,e);return new em(this.syncTree_,n)}node(){return aC(this.syncTree_,this.path_)}}const JL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},PE=function(t,e,n){if(!t||typeof t!="object")return t;if(j(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ZL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return eF(t[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ZL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+t)}},eF=function(t,e,n){t.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&j(!1,"Unexpected increment value: "+s);const i=e.node();if(j(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},tF=function(t,e,n,s){return tm(e,new em(n,t),s)},nF=function(t,e,n){return tm(t,new Zg(e),n)};function tm(t,e,n){const s=t.getPriority().val(),i=PE(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=PE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ot(a,jt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ot(i))),o.forEachChild(ut,(a,l)=>{const u=tm(l,e.getImmediateChild(a),n);u!==l&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function sm(t,e){let n=e instanceof tt?e:new tt(e),s=t,i=Pe(n);for(;i!==null;){const r=yo(s.node.children,i)||{children:{},childCount:0};s=new nm(i,s,r),n=st(n),i=Pe(n)}return s}function $o(t){return t.node.value}function hC(t,e){t.node.value=e,mp(t)}function dC(t){return t.node.childCount>0}function sF(t){return $o(t)===void 0&&!dC(t)}function kh(t,e){Tn(t.node.children,(n,s)=>{e(new nm(n,t,s))})}function fC(t,e,n,s){n&&!s&&e(t),kh(t,i=>{fC(i,e,!0,s)}),n&&s&&e(t)}function iF(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Nl(t){return new tt(t.parent===null?t.name:Nl(t.parent)+"/"+t.name)}function mp(t){t.parent!==null&&rF(t.parent,t.name,t)}function rF(t,e,n){const s=sF(n),i=zs(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,mp(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,mp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oF=/[\[\].#$\/\u0000-\u001F\u007F]/,aF=/[\[\].#$\u0000-\u001F\u007F]/,rf=10*1024*1024,pC=function(t){return typeof t=="string"&&t.length!==0&&!oF.test(t)},gC=function(t){return typeof t=="string"&&t.length!==0&&!aF.test(t)},lF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gC(t)},mC=function(t,e,n){const s=n instanceof tt?new CM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ji(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ji(s)+" with contents = "+e.toString());if(pI(e))throw new Error(t+"contains "+e.toString()+" "+Ji(s));if(typeof e=="string"&&e.length>rf/3&&wh(e)>rf)throw new Error(t+"contains a string greater than "+rf+" utf8 bytes "+Ji(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Tn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!pC(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ji(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);AM(s,o),mC(t,a,s),SM(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ji(s)+" in addition to actual children.")}},_C=function(t,e,n,s){if(!(s&&n===void 0)&&!gC(n))throw new Error(Ib(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},cF=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_C(t,e,n,s)},uF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lF(n))throw new Error(Ib(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yC(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!$g(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function vC(t,e,n){yC(t,n),EC(t,s=>$g(s,e))}function ki(t,e,n){yC(t,n),EC(t,s=>Yn(s,e)||Yn(e,s))}function EC(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(dF(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function dF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ur&&Xt("event: "+n.toString()),Rl(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fF="repo_interrupt",pF=25;class gF{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Au(),this.transactionQueueTree_=new nm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mF(t,e,n){if(t.stats_=Fg(t.repoInfo_),t.forceRestClient_||Q1())t.server_=new Cu(t.repoInfo_,(s,i,r,o)=>{kE(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>OE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{At(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Us(t.repoInfo_,e,(s,i,r,o)=>{kE(t,s,i,r,o)},s=>{OE(t,s)},s=>{yF(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=tM(t.repoInfo_,()=>new ZM(t.stats_,t.server_)),t.infoData_=new KM,t.infoSyncTree_=new RE({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=kl(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),im(t,"connected",!1),t.serverSyncTree_=new RE({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const u=o(a,l);ki(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function _F(t){const n=t.infoData_.getNode(new tt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function wC(t){return JL({timestamp:_F(t)})}function kE(t,e,n,s,i){t.dataUpdateCount++;const r=new tt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=fu(n,u=>jt(u));o=zL(t.serverSyncTree_,r,l,i)}else{const l=jt(n);o=oC(t.serverSyncTree_,r,l,i)}else if(s){const l=fu(n,u=>jt(u));o=WL(t.serverSyncTree_,r,l)}else{const l=jt(n);o=kl(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=am(t,r)),ki(t.eventQueue_,a,o)}function OE(t,e){im(t,"connected",e),e===!1&&wF(t)}function yF(t,e){Tn(e,(n,s)=>{im(t,n,s)})}function im(t,e,n){const s=new tt("/.info/"+e),i=jt(n);t.infoData_.updateSnapshot(s,i);const r=kl(t.infoSyncTree_,s,i);ki(t.eventQueue_,s,r)}function vF(t){return t.nextWriteId_++}function EF(t,e,n){const s=GL(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=jt(i).withIndex(e._queryParams.getIndex());gp(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=kl(t.serverSyncTree_,e._path,r);else{const a=il(t.serverSyncTree_,e);o=oC(t.serverSyncTree_,e._path,r,a)}return ki(t.eventQueue_,e._path,o),Du(t.serverSyncTree_,e,n,null,!0),r},i=>(rm(t,"get for query "+At(e)+" failed: "+i),Promise.reject(new Error(i))))}function wF(t){rm(t,"onDisconnectEvents");const e=wC(t),n=Au();up(t.onDisconnect_,Ue(),(i,r)=>{const o=tF(i,r,t.serverSyncTree_,e);HI(n,i,o)});let s=[];up(n,Ue(),(i,r)=>{s=s.concat(kl(t.serverSyncTree_,i,r));const o=AF(t,i);am(t,o)}),t.onDisconnect_=Au(),ki(t.eventQueue_,Ue(),s)}function TF(t,e,n){let s;Pe(e._path)===".info"?s=gp(t.infoSyncTree_,e,n):s=gp(t.serverSyncTree_,e,n),vC(t.eventQueue_,e._path,s)}function NE(t,e,n){let s;Pe(e._path)===".info"?s=Du(t.infoSyncTree_,e,n):s=Du(t.serverSyncTree_,e,n),vC(t.eventQueue_,e._path,s)}function bF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(fF)}function rm(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Xt(n,...e)}function TC(t,e,n){return aC(t.serverSyncTree_,e,n)||ce.EMPTY_NODE}function om(t,e=t.transactionQueueTree_){if(e||Oh(t,e),$o(e)){const n=IC(t,e);j(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&IF(t,Nl(e),n)}else dC(e)&&kh(e,n=>{om(t,n)})}function IF(t,e,n){const s=n.map(u=>u.currentWriteId),i=TC(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];j(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=_n(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,u=>{rm(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Xr(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&d.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Oh(t,sm(t.transactionQueueTree_,e)),om(t,t.transactionQueueTree_),ki(t.eventQueue_,e,h);for(let p=0;p<d.length;p++)Rl(d[p])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Nn("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}am(t,e)}},o)}function am(t,e){const n=bC(t,e),s=Nl(n),i=IC(t,n);return CF(t,i,s),s}function CF(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=_n(n,l.path);let h=!1,d;if(j(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,i=i.concat(Xr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=pF)h=!0,d="maxretry",i=i.concat(Xr(t.serverSyncTree_,l.currentWriteId,!0));else{const p=TC(t,l.path,o);l.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){mC("transaction failed: Data returned ",m,l.path);let y=jt(m);typeof m=="object"&&m!=null&&zs(m,".priority")||(y=y.updatePriority(p.getPriority()));const T=l.currentWriteId,A=wC(t),N=nF(y,p,A);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=N,l.currentWriteId=vF(t),o.splice(o.indexOf(T),1),i=i.concat(BL(t.serverSyncTree_,l.path,N,l.currentWriteId,l.applyLocally)),i=i.concat(Xr(t.serverSyncTree_,T,!0))}else h=!0,d="nodata",i=i.concat(Xr(t.serverSyncTree_,l.currentWriteId,!0))}ki(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Oh(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Rl(s[a]);om(t,t.transactionQueueTree_)}function bC(t,e){let n,s=t.transactionQueueTree_;for(n=Pe(e);n!==null&&$o(s)===void 0;)s=sm(s,n),e=st(e),n=Pe(e);return s}function IC(t,e){const n=[];return CC(t,e,n),n.sort((s,i)=>s.order-i.order),n}function CC(t,e,n){const s=$o(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);kh(e,i=>{CC(t,i,n)})}function Oh(t,e){const n=$o(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,hC(e,n.length>0?n:void 0)}kh(e,s=>{Oh(t,s)})}function AF(t,e){const n=Nl(bC(t,e)),s=sm(t.transactionQueueTree_,e);return iF(s,i=>{of(t,i)}),of(t,s),fC(s,i=>{of(t,i)}),n}function of(t,e){const n=$o(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(j(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(j(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Xr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?hC(e,void 0):n.length=r+1,ki(t.eventQueue_,Nl(e),i);for(let o=0;o<s.length;o++)Rl(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SF(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function RF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Nn(`Invalid query segment '${n}' in query '${t}'`)}return e}const xE=function(t,e){const n=PF(t),s=n.namespace;n.domain==="firebase.com"&&gr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&gr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||U1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new J1(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new tt(n.pathString)}},PF=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=SF(t.substring(h,d)));const p=RF(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in p&&(r=p.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+At(this.snapshot.exportVal())}}class SC{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ke(this._path)?null:DI(this._path)}get ref(){return new Ss(this._repo,this._path)}get _queryIdentifier(){const e=_E(this._queryParams),n=Mg(e);return n==="{}"?"default":n}get _queryObject(){return _E(this._queryParams)}isEqual(e){if(e=As(e),!(e instanceof lm))return!1;const n=this._repo===e._repo,s=$g(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+IM(this._path)}}class Ss extends lm{constructor(e,n){super(e,n,new Wg,!1)}get parent(){const e=LI(this._path);return e===null?null:new Ss(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bo{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new tt(e),s=_p(this.ref,e);return new bo(this._node.getChild(n),s,ut)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new bo(i,_p(this.ref,s),ut)))}hasChild(e){const n=new tt(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _p(t,e){return t=As(t),Pe(t._path)===null?cF("child","path",e,!1):_C("child","path",e,!1),new Ss(t._repo,St(t._path,e))}function PC(t){t=As(t);const e=new RC(()=>{}),n=new Nh(e);return EF(t._repo,t,n).then(s=>new bo(s,new Ss(t._repo,t._path),t._queryParams.getIndex()))}class Nh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new AC("value",this,new bo(e.snapshotNode,new Ss(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new SC(this,e,n):null}matches(e){return e instanceof Nh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class cm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new SC(this,e,n):null}createEvent(e,n){j(e.childName!=null,"Child events should have a childName.");const s=_p(new Ss(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new AC(e.type,this,new bo(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof cm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function xl(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,u=(h,d)=>{NE(t._repo,t,a),l(h,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new RC(n,r||void 0),a=e==="value"?new Nh(o):new cm(e,o);return TF(t._repo,t,a),()=>NE(t._repo,t,a)}function kC(t,e,n,s){return xl(t,"value",e,n,s)}function kF(t,e,n,s){return xl(t,"child_added",e,n,s)}function OF(t,e,n,s){return xl(t,"child_changed",e,n,s)}function NF(t,e,n,s){return xl(t,"child_moved",e,n,s)}function xF(t,e,n,s){return xl(t,"child_removed",e,n,s)}DL(Ss);$L(Ss);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DF="FIREBASE_DATABASE_EMULATOR_HOST",yp={};let MF=!1;function LF(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||gr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xE(r,i),a=o.repoInfo,l,u;typeof process<"u"&&Zv&&(u=Zv[DF]),u?(l=!0,r=`http://${u}?ns=${a.namespace}`,o=xE(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new ap(ap.OWNER):new X1(t.name,t.options,e);uF("Invalid Firebase Database URL",o),ke(o.path)||gr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=VF(a,t,h,new Y1(t.name,n));return new $F(d,t)}function FF(t,e){const n=yp[e];(!n||n[t.key]!==t)&&gr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),bF(t),delete n[t.key]}function VF(t,e,n,s){let i=yp[e.name];i||(i={},yp[e.name]=i);let r=i[t.toURLString()];return r&&gr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new gF(t,MF,n,s),i[t.toURLString()]=r,r}class $F{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ss(this._repo,Ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gr("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UF(t){M1(Ri),ws(new ts("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return LF(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),On(eE,tE,t),On(eE,tE,"esm2017")}Us.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Us.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};UF();var jF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,um=um||{},pe=jF||self;function xh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Dl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function BF(t){return Object.prototype.hasOwnProperty.call(t,af)&&t[af]||(t[af]=++WF)}var af="closure_uid_"+(1e9*Math.random()>>>0),WF=0;function HF(t,e,n){return t.call.apply(t.bind,arguments)}function qF(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function en(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?en=HF:en=qF,en.apply(null,arguments)}function Rc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Mt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Oi(){this.s=this.s,this.o=this.o}var zF=0;Oi.prototype.s=!1;Oi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),zF!=0)&&BF(this)};Oi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const OC=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hm(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function DE(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(xh(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function tn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tn.prototype.h=function(){this.defaultPrevented=!0};var GF=function(){if(!pe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};pe.addEventListener("test",n,e),pe.removeEventListener("test",n,e)}catch{}return t}();function rl(t){return/^[\s\xa0]*$/.test(t)}function Dh(){var t=pe.navigator;return t&&(t=t.userAgent)?t:""}function ds(t){return Dh().indexOf(t)!=-1}function dm(t){return dm[" "](t),t}dm[" "]=function(){};function KF(t,e){var n=UV;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var QF=ds("Opera"),Io=ds("Trident")||ds("MSIE"),NC=ds("Edge"),vp=NC||Io,xC=ds("Gecko")&&!(Dh().toLowerCase().indexOf("webkit")!=-1&&!ds("Edge"))&&!(ds("Trident")||ds("MSIE"))&&!ds("Edge"),YF=Dh().toLowerCase().indexOf("webkit")!=-1&&!ds("Edge");function DC(){var t=pe.document;return t?t.documentMode:void 0}var Ep;e:{var lf="",cf=function(){var t=Dh();if(xC)return/rv:([^\);]+)(\)|;)/.exec(t);if(NC)return/Edge\/([\d\.]+)/.exec(t);if(Io)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(YF)return/WebKit\/(\S+)/.exec(t);if(QF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(cf&&(lf=cf?cf[1]:""),Io){var uf=DC();if(uf!=null&&uf>parseFloat(lf)){Ep=String(uf);break e}}Ep=lf}var wp;if(pe.document&&Io){var ME=DC();wp=ME||parseInt(Ep,10)||void 0}else wp=void 0;var XF=wp;function ol(t,e){if(tn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xC){e:{try{dm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:JF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ol.$.h.call(this)}}Mt(ol,tn);var JF={2:"touch",3:"pen",4:"mouse"};ol.prototype.h=function(){ol.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ml="closure_listenable_"+(1e6*Math.random()|0),ZF=0;function eV(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++ZF,this.fa=this.ia=!1}function Mh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function fm(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function tV(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function MC(t){const e={};for(const n in t)e[n]=t[n];return e}const LE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function LC(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<LE.length;r++)n=LE[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Lh(t){this.src=t,this.g={},this.h=0}Lh.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=bp(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new eV(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function Tp(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=OC(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Mh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bp(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var pm="closure_lm_"+(1e6*Math.random()|0),hf={};function FC(t,e,n,s,i){if(s&&s.once)return $C(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)FC(t,e[r],n,s,i);return null}return n=_m(n),t&&t[Ml]?t.O(e,n,Dl(s)?!!s.capture:!!s,i):VC(t,e,n,!1,s,i)}function VC(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Dl(i)?!!i.capture:!!i,a=mm(t);if(a||(t[pm]=a=new Lh(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=nV(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)GF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(jC(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function nV(){function t(n){return e.call(t.src,t.listener,n)}const e=sV;return t}function $C(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)$C(t,e[r],n,s,i);return null}return n=_m(n),t&&t[Ml]?t.P(e,n,Dl(s)?!!s.capture:!!s,i):VC(t,e,n,!0,s,i)}function UC(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)UC(t,e[r],n,s,i);else s=Dl(s)?!!s.capture:!!s,n=_m(n),t&&t[Ml]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=bp(r,n,s,i),-1<n&&(Mh(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=mm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bp(e,n,s,i)),(n=-1<t?e[t]:null)&&gm(n))}function gm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ml])Tp(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(jC(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=mm(e))?(Tp(n,t),n.h==0&&(n.src=null,e[pm]=null)):Mh(t)}}}function jC(t){return t in hf?hf[t]:hf[t]="on"+t}function sV(t,e){if(t.fa)t=!0;else{e=new ol(e,this);var n=t.listener,s=t.la||t.src;t.ia&&gm(t),t=n.call(s,e)}return t}function mm(t){return t=t[pm],t instanceof Lh?t:null}var df="__closure_events_fn_"+(1e9*Math.random()>>>0);function _m(t){return typeof t=="function"?t:(t[df]||(t[df]=function(e){return t.handleEvent(e)}),t[df])}function Dt(){Oi.call(this),this.i=new Lh(this),this.S=this,this.J=null}Mt(Dt,Oi);Dt.prototype[Ml]=!0;Dt.prototype.removeEventListener=function(t,e,n,s){UC(this,t,e,n,s)};function Ht(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new tn(e,t);else if(e instanceof tn)e.target=e.target||t;else{var i=e;e=new tn(s,t),LC(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Pc(o,s,!0,e)&&i}if(o=e.g=t,i=Pc(o,s,!0,e)&&i,i=Pc(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Pc(o,s,!1,e)&&i}Dt.prototype.N=function(){if(Dt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Mh(n[s]);delete t.g[e],t.h--}}this.J=null};Dt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Dt.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Pc(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Tp(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var ym=pe.JSON.stringify;class iV{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function rV(){var t=vm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oV{constructor(){this.h=this.g=null}add(e,n){const s=BC.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var BC=new iV(()=>new aV,t=>t.reset());class aV{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lV(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function cV(t){pe.setTimeout(()=>{throw t},0)}let al,ll=!1,vm=new oV,WC=()=>{const t=pe.Promise.resolve(void 0);al=()=>{t.then(uV)}};var uV=()=>{for(var t;t=rV();){try{t.h.call(t.g)}catch(n){cV(n)}var e=BC;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ll=!1};function Fh(t,e){Dt.call(this),this.h=t||1,this.g=e||pe,this.j=en(this.qb,this),this.l=Date.now()}Mt(Fh,Dt);z=Fh.prototype;z.ga=!1;z.T=null;z.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ht(this,"tick"),this.ga&&(Em(this),this.start()))}};z.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Em(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}z.N=function(){Fh.$.N.call(this),Em(this),delete this.g};function wm(t,e,n){if(typeof t=="function")n&&(t=en(t,n));else if(t&&typeof t.handleEvent=="function")t=en(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:pe.setTimeout(t,e||0)}function HC(t){t.g=wm(()=>{t.g=null,t.i&&(t.i=!1,HC(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hV extends Oi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:HC(this)}N(){super.N(),this.g&&(pe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cl(t){Oi.call(this),this.h=t,this.g={}}Mt(cl,Oi);var FE=[];function qC(t,e,n,s){Array.isArray(n)||(n&&(FE[0]=n.toString()),n=FE);for(var i=0;i<n.length;i++){var r=FC(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function zC(t){fm(t.g,function(e,n){this.g.hasOwnProperty(n)&&gm(e)},t),t.g={}}cl.prototype.N=function(){cl.$.N.call(this),zC(this)};cl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vh(){this.g=!0}Vh.prototype.Ea=function(){this.g=!1};function dV(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var d=h.split("_");o=2<=d.length&&d[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function fV(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Jr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+gV(t,n)+(s?" "+s:"")})}function pV(t,e){t.info(function(){return"TIMEOUT: "+e})}Vh.prototype.info=function(){};function gV(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ym(n)}catch{return e}}var Ar={},VE=null;function $h(){return VE=VE||new Dt}Ar.Ta="serverreachability";function GC(t){tn.call(this,Ar.Ta,t)}Mt(GC,tn);function ul(t){const e=$h();Ht(e,new GC(e))}Ar.STAT_EVENT="statevent";function KC(t,e){tn.call(this,Ar.STAT_EVENT,t),this.stat=e}Mt(KC,tn);function yn(t){const e=$h();Ht(e,new KC(e,t))}Ar.Ua="timingevent";function QC(t,e){tn.call(this,Ar.Ua,t),this.size=e}Mt(QC,tn);function Ll(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return pe.setTimeout(function(){t()},e)}var Uh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},YC={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Tm(){}Tm.prototype.h=null;function $E(t){return t.h||(t.h=t.i())}function XC(){}var Fl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function bm(){tn.call(this,"d")}Mt(bm,tn);function Im(){tn.call(this,"c")}Mt(Im,tn);var Ip;function jh(){}Mt(jh,Tm);jh.prototype.g=function(){return new XMLHttpRequest};jh.prototype.i=function(){return{}};Ip=new jh;function Vl(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new cl(this),this.P=mV,t=vp?125:void 0,this.V=new Fh(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new JC}function JC(){this.i=null,this.g="",this.h=!1}var mV=45e3,ZC={},Cp={};z=Vl.prototype;z.setTimeout=function(t){this.P=t};function Ap(t,e,n){t.L=1,t.A=Wh(Ws(e)),t.u=n,t.S=!0,eA(t,null)}function eA(t,e){t.G=Date.now(),$l(t),t.B=Ws(t.A);var n=t.B,s=t.W;Array.isArray(s)||(s=[String(s)]),lA(n.i,"t",s),t.o=0,n=t.l.J,t.h=new JC,t.g=PA(t.l,n?e:null,!t.u),0<t.O&&(t.M=new hV(en(t.Pa,t,t.g),t.O)),qC(t.U,t.g,"readystatechange",t.nb),e=t.I?MC(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ul(),dV(t.j,t.v,t.B,t.m,t.W,t.u)}z.nb=function(t){t=t.target;const e=this.M;e&&gs(t)==3?e.l():this.Pa(t)};z.Pa=function(t){try{if(t==this.g)e:{const h=gs(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>h)&&(h!=3||vp||this.g&&(this.h.h||this.g.ja()||WE(this.g)))){this.J||h!=4||e==7||(e==8||0>=d?ul(3):ul(2)),Bh(this);var n=this.g.da();this.ca=n;t:if(tA(this)){var s=WE(this.g);t="";var i=s.length,r=gs(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nr(this),Da(this);var o="";break t}this.h.i=new pe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,fV(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rl(a)){var u=a;break t}}u=null}if(n=u)Jr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sp(this,n);else{this.i=!1,this.s=3,yn(12),nr(this),Da(this);break e}}this.S?(nA(this,h,o),vp&&this.i&&h==3&&(qC(this.U,this.V,"tick",this.mb),this.V.start())):(Jr(this.j,this.m,o,null),Sp(this,o)),h==4&&nr(this),this.i&&!this.J&&(h==4?CA(this.l,this):(this.i=!1,$l(this)))}else FV(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,yn(12)):(this.s=0,yn(13)),nr(this),Da(this)}}}catch{}finally{}};function tA(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function nA(t,e,n){let s=!0,i;for(;!t.J&&t.o<n.length;)if(i=_V(t,n),i==Cp){e==4&&(t.s=4,yn(14),s=!1),Jr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ZC){t.s=4,yn(15),Jr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Jr(t.j,t.m,i,null),Sp(t,i);tA(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,yn(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),km(e),e.M=!0,yn(11))):(Jr(t.j,t.m,n,"[Invalid Chunked Response]"),nr(t),Da(t))}z.mb=function(){if(this.g){var t=gs(this.g),e=this.g.ja();this.o<e.length&&(Bh(this),nA(this,t,e),this.i&&t!=4&&$l(this))}};function _V(t,e){var n=t.o,s=e.indexOf(`
`,n);return s==-1?Cp:(n=Number(e.substring(n,s)),isNaN(n)?ZC:(s+=1,s+n>e.length?Cp:(e=e.slice(s,s+n),t.o=s+n,e)))}z.cancel=function(){this.J=!0,nr(this)};function $l(t){t.Y=Date.now()+t.P,sA(t,t.P)}function sA(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ll(en(t.lb,t),e)}function Bh(t){t.C&&(pe.clearTimeout(t.C),t.C=null)}z.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(pV(this.j,this.B),this.L!=2&&(ul(),yn(17)),nr(this),this.s=2,Da(this)):sA(this,this.Y-t)};function Da(t){t.l.H==0||t.J||CA(t.l,t)}function nr(t){Bh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Em(t.V),zC(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Sp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Rp(n.i,t))){if(!t.K&&Rp(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Fu(n),Gh(n);else break e;Pm(n),yn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ll(en(n.ib,n),6e3));if(1>=hA(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else sr(n,11)}else if((t.K||n.g==t)&&Fu(n),!rl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const h=u[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=s.i;r.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Cm(r,r.h),r.h=null))}if(s.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.Da=w,ot(s.I,s.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=RA(s,s.J?s.pa:null,s.Y),o.K){dA(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.C&&(Bh(a),$l(a)),s.g=o}else bA(s);0<n.j.length&&Kh(n)}else u[0]!="stop"&&u[0]!="close"||sr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?sr(n,7):Rm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ul(4)}catch{}}function yV(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(xh(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function vV(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(xh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function iA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=vV(t),s=yV(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var rA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function EV(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function hr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hr){this.h=t.h,Mu(this,t.j),this.s=t.s,this.g=t.g,Lu(this,t.m),this.l=t.l;var e=t.i,n=new hl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),UE(this,n),this.o=t.o}else t&&(e=String(t).match(rA))?(this.h=!1,Mu(this,e[1]||"",!0),this.s=va(e[2]||""),this.g=va(e[3]||"",!0),Lu(this,e[4]),this.l=va(e[5]||"",!0),UE(this,e[6]||"",!0),this.o=va(e[7]||"")):(this.h=!1,this.i=new hl(null,this.h))}hr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ea(e,jE,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ea(e,jE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ea(n,n.charAt(0)=="/"?bV:TV,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ea(n,CV)),t.join("")};function Ws(t){return new hr(t)}function Mu(t,e,n){t.j=n?va(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Lu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function UE(t,e,n){e instanceof hl?(t.i=e,AV(t.i,t.h)):(n||(e=Ea(e,IV)),t.i=new hl(e,t.h))}function ot(t,e,n){t.i.set(e,n)}function Wh(t){return ot(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function va(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ea(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wV),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wV(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var jE=/[#\/\?@]/g,TV=/[#\?:]/g,bV=/[#\?]/g,IV=/[#\?@]/g,CV=/#/g;function hl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ni(t){t.g||(t.g=new Map,t.h=0,t.i&&EV(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=hl.prototype;z.add=function(t,e){Ni(this),this.i=null,t=Uo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function oA(t,e){Ni(t),e=Uo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function aA(t,e){return Ni(t),e=Uo(t,e),t.g.has(e)}z.forEach=function(t,e){Ni(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};z.ta=function(){Ni(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};z.Z=function(t){Ni(this);let e=[];if(typeof t=="string")aA(this,t)&&(e=e.concat(this.g.get(Uo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return Ni(this),this.i=null,t=Uo(this,t),aA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function lA(t,e,n){oA(t,e),0<n.length&&(t.i=null,t.g.set(Uo(t,e),hm(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Uo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function AV(t,e){e&&!t.j&&(Ni(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(oA(this,s),lA(this,i,n))},t)),t.j=e}var SV=class{constructor(t,e){this.g=t,this.map=e}};function cA(t){this.l=t||RV,pe.PerformanceNavigationTiming?(t=pe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(pe.g&&pe.g.Ka&&pe.g.Ka()&&pe.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var RV=10;function uA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hA(t){return t.h?1:t.g?t.g.size:0}function Rp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Cm(t,e){t.g?t.g.add(e):t.h=e}function dA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cA.prototype.cancel=function(){if(this.i=fA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return hm(t.i)}var PV=class{stringify(t){return pe.JSON.stringify(t,void 0)}parse(t){return pe.JSON.parse(t,void 0)}};function kV(){this.g=new PV}function OV(t,e,n){const s=n||"";try{iA(t,function(i,r){let o=i;Dl(i)&&(o=ym(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function NV(t,e){const n=new Vh;if(pe.Image){const s=new Image;s.onload=Rc(kc,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Rc(kc,n,s,"TestLoadImage: error",!1,e),s.onabort=Rc(kc,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Rc(kc,n,s,"TestLoadImage: timeout",!1,e),pe.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function kc(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Hh(t){this.l=t.ec||null,this.j=t.ob||!1}Mt(Hh,Tm);Hh.prototype.g=function(){return new qh(this.l,this.j)};Hh.prototype.i=function(t){return function(){return t}}({});function qh(t,e){Dt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Am,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Mt(qh,Dt);var Am=0;z=qh.prototype;z.open=function(t,e){if(this.readyState!=Am)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,dl(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||pe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ul(this)),this.readyState=Am};z.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,dl(this)),this.g&&(this.readyState=3,dl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof pe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function pA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}z.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ul(this):dl(this),this.readyState==3&&pA(this)}};z.Za=function(t){this.g&&(this.response=this.responseText=t,Ul(this))};z.Ya=function(t){this.g&&(this.response=t,Ul(this))};z.ka=function(){this.g&&Ul(this)};function Ul(t){t.readyState=4,t.l=null,t.j=null,t.A=null,dl(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function dl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var xV=pe.JSON.parse;function ht(t){Dt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=gA,this.L=this.M=!1}Mt(ht,Dt);var gA="",DV=/^https?$/i,MV=["POST","PUT"];z=ht.prototype;z.Oa=function(t){this.M=t};z.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ip.g(),this.C=this.u?$E(this.u):$E(Ip),this.g.onreadystatechange=en(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){BE(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=pe.FormData&&t instanceof pe.FormData,!(0<=OC(MV,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{yA(this),0<this.B&&((this.L=LV(this.g))?(this.g.timeout=this.B,this.g.ontimeout=en(this.ua,this)):this.A=wm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){BE(this,r)}};function LV(t){return Io&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.ua=function(){typeof um<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ht(this,"timeout"),this.abort(8))};function BE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,mA(t),zh(t)}function mA(t){t.F||(t.F=!0,Ht(t,"complete"),Ht(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ht(this,"complete"),Ht(this,"abort"),zh(this))};z.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zh(this,!0)),ht.$.N.call(this)};z.La=function(){this.s||(this.G||this.v||this.l?_A(this):this.kb())};z.kb=function(){_A(this)};function _A(t){if(t.h&&typeof um<"u"&&(!t.C[1]||gs(t)!=4||t.da()!=2)){if(t.v&&gs(t)==4)wm(t.La,0,t);else if(Ht(t,"readystatechange"),gs(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(rA)[1]||null;!i&&pe.self&&pe.self.location&&(i=pe.self.location.protocol.slice(0,-1)),s=!DV.test(i?i.toLowerCase():"")}n=s}if(n)Ht(t,"complete"),Ht(t,"success");else{t.m=6;try{var r=2<gs(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",mA(t)}}finally{zh(t)}}}}function zh(t,e){if(t.g){yA(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ht(t,"ready");try{n.onreadystatechange=s}catch{}}}function yA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(pe.clearTimeout(t.A),t.A=null)}z.isActive=function(){return!!this.g};function gs(t){return t.g?t.g.readyState:0}z.da=function(){try{return 2<gs(this)?this.g.status:-1}catch{return-1}};z.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),xV(e)}};function WE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case gA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function FV(t){const e={};t=(t.g&&2<=gs(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(rl(t[s]))continue;var n=lV(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}tV(e,function(s){return s.join(", ")})}z.Ia=function(){return this.m};z.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vA(t){let e="";return fm(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Sm(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=vA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ot(t,e,n))}function aa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function EA(t){this.Ga=0,this.j=[],this.l=new Vh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=aa("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=aa("baseRetryDelayMs",5e3,t),this.hb=aa("retryDelaySeedMs",1e4,t),this.eb=aa("forwardChannelMaxRetries",2,t),this.xa=aa("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cA(t&&t.concurrentRequestLimit),this.Ja=new kV,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}z=EA.prototype;z.ra=8;z.H=1;function Rm(t){if(wA(t),t.H==3){var e=t.W++,n=Ws(t.I);if(ot(n,"SID",t.K),ot(n,"RID",e),ot(n,"TYPE","terminate"),jl(t,n),e=new Vl(t,t.l,e),e.L=2,e.A=Wh(Ws(n)),n=!1,pe.navigator&&pe.navigator.sendBeacon)try{n=pe.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&pe.Image&&(new Image().src=e.A,n=!0),n||(e.g=PA(e.l,null),e.g.ha(e.A)),e.G=Date.now(),$l(e)}SA(t)}function Gh(t){t.g&&(km(t),t.g.cancel(),t.g=null)}function wA(t){Gh(t),t.u&&(pe.clearTimeout(t.u),t.u=null),Fu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&pe.clearTimeout(t.m),t.m=null)}function Kh(t){if(!uA(t.i)&&!t.m){t.m=!0;var e=t.Na;al||WC(),ll||(al(),ll=!0),vm.add(e,t),t.C=0}}function VV(t,e){return hA(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ll(en(t.Na,t,e),AA(t,t.C)),t.C++,!0)}z.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Vl(this,this.l,t);let r=this.s;if(this.U&&(r?(r=MC(r),LC(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=TA(this,i,e),n=Ws(this.I),ot(n,"RID",t),ot(n,"CVER",22),this.F&&ot(n,"X-HTTP-Session-Id",this.F),jl(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(vA(r)))+"&"+e:this.o&&Sm(n,this.o,r)),Cm(this.i,i),this.bb&&ot(n,"TYPE","init"),this.P?(ot(n,"$req",e),ot(n,"SID","null"),i.aa=!0,Ap(i,n,null)):Ap(i,n,e),this.H=2}}else this.H==3&&(t?HE(this,t):this.j.length==0||uA(this.i)||HE(this))};function HE(t,e){var n;e?n=e.m:n=t.W++;const s=Ws(t.I);ot(s,"SID",t.K),ot(s,"RID",n),ot(s,"AID",t.V),jl(t,s),t.o&&t.s&&Sm(s,t.o,t.s),n=new Vl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=TA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Cm(t.i,n),Ap(n,s,e)}function jl(t,e){t.na&&fm(t.na,function(n,s){ot(e,s,n)}),t.h&&iA({},function(n,s){ot(e,s,n)})}function TA(t,e,n){n=Math.min(t.j.length,n);var s=t.h?en(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const h=i[l].map;if(u-=r,0>u)r=Math.max(0,i[l].g-100),a=!1;else try{OV(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function bA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;al||WC(),ll||(al(),ll=!0),vm.add(e,t),t.A=0}}function Pm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ll(en(t.Ma,t),AA(t,t.A)),t.A++,!0)}z.Ma=function(){if(this.u=null,IA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ll(en(this.jb,this),t)}};z.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,yn(10),Gh(this),IA(this))};function km(t){t.B!=null&&(pe.clearTimeout(t.B),t.B=null)}function IA(t){t.g=new Vl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Ws(t.wa);ot(e,"RID","rpc"),ot(e,"SID",t.K),ot(e,"AID",t.V),ot(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ot(e,"TO",t.qa),ot(e,"TYPE","xmlhttp"),jl(t,e),t.o&&t.s&&Sm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Wh(Ws(e)),n.u=null,n.S=!0,eA(n,t)}z.ib=function(){this.v!=null&&(this.v=null,Gh(this),Pm(this),yn(19))};function Fu(t){t.v!=null&&(pe.clearTimeout(t.v),t.v=null)}function CA(t,e){var n=null;if(t.g==e){Fu(t),km(t),t.g=null;var s=2}else if(Rp(t.i,e))n=e.F,dA(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;s=$h(),Ht(s,new QC(s,n)),Kh(t)}else bA(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(s==1&&VV(t,e)||s==2&&Pm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:sr(t,5);break;case 4:sr(t,10);break;case 3:sr(t,6);break;default:sr(t,2)}}}function AA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function sr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=en(t.pb,t);n||(n=new hr("//www.google.com/images/cleardot.gif"),pe.location&&pe.location.protocol=="http"||Mu(n,"https"),Wh(n)),NV(n.toString(),s)}else yn(2);t.H=0,t.h&&t.h.za(e),SA(t),wA(t)}z.pb=function(t){t?(this.l.info("Successfully pinged google.com"),yn(2)):(this.l.info("Failed to ping google.com"),yn(1))};function SA(t){if(t.H=0,t.ma=[],t.h){const e=fA(t.i);(e.length!=0||t.j.length!=0)&&(DE(t.ma,e),DE(t.ma,t.j),t.i.i.length=0,hm(t.j),t.j.length=0),t.h.ya()}}function RA(t,e,n){var s=n instanceof hr?Ws(n):new hr(n);if(s.g!="")e&&(s.g=e+"."+s.g),Lu(s,s.m);else{var i=pe.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new hr(null);s&&Mu(r,s),e&&(r.g=e),i&&Lu(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&ot(s,n,e),ot(s,"VER",t.ra),jl(t,s),s}function PA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new ht(new Hh({ob:n})):new ht(t.va),e.Oa(t.J),e}z.isActive=function(){return!!this.h&&this.h.isActive(this)};function kA(){}z=kA.prototype;z.Ba=function(){};z.Aa=function(){};z.za=function(){};z.ya=function(){};z.isActive=function(){return!0};z.Va=function(){};function Vu(){if(Io&&!(10<=Number(XF)))throw Error("Environmental error: no available transport.")}Vu.prototype.g=function(t,e){return new xn(t,e)};function xn(t,e){Dt.call(this),this.g=new EA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!rl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!rl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new jo(this)}Mt(xn,Dt);xn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;yn(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=RA(t,null,t.Y),Kh(t)};xn.prototype.close=function(){Rm(this.g)};xn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ym(t),t=n);e.j.push(new SV(e.fb++,t)),e.H==3&&Kh(e)};xn.prototype.N=function(){this.g.h=null,delete this.j,Rm(this.g),delete this.g,xn.$.N.call(this)};function OA(t){bm.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Mt(OA,bm);function NA(){Im.call(this),this.status=1}Mt(NA,Im);function jo(t){this.g=t}Mt(jo,kA);jo.prototype.Ba=function(){Ht(this.g,"a")};jo.prototype.Aa=function(t){Ht(this.g,new OA(t))};jo.prototype.za=function(t){Ht(this.g,new NA)};jo.prototype.ya=function(){Ht(this.g,"b")};function $V(){this.blockSize=-1}function ss(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Mt(ss,$V);ss.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ff(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}ss.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)ff(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){ff(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){ff(this,s),i=0;break}}this.h=i,this.i+=e};ss.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Ye(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var UV={};function Om(t){return-128<=t&&128>t?KF(t,function(e){return new Ye([e|0],0>e?-1:0)}):new Ye([t|0],0>t?-1:0)}function ms(t){if(isNaN(t)||!isFinite(t))return lo;if(0>t)return Bt(ms(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Pp;return new Ye(e,0)}function xA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Bt(xA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ms(Math.pow(e,8)),s=lo,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=ms(Math.pow(e,r)),s=s.R(r).add(ms(o))):(s=s.R(n),s=s.add(ms(o)))}return s}var Pp=4294967296,lo=Om(0),kp=Om(1),qE=Om(16777216);z=Ye.prototype;z.ea=function(){if(Bn(this))return-Bt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Pp+s)*e,e*=Pp}return t};z.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Vs(this))return"0";if(Bn(this))return"-"+Bt(this).toString(t);for(var e=ms(Math.pow(t,6)),n=this,s="";;){var i=Uu(n,e).g;n=$u(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Vs(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};z.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Vs(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Bn(t){return t.h==-1}z.X=function(t){return t=$u(this,t),Bn(t)?-1:Vs(t)?0:1};function Bt(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Ye(n,~t.h).add(kp)}z.abs=function(){return Bn(this)?Bt(this):this};z.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new Ye(n,n[n.length-1]&-2147483648?-1:0)};function $u(t,e){return t.add(Bt(e))}z.R=function(t){if(Vs(this)||Vs(t))return lo;if(Bn(this))return Bn(t)?Bt(this).R(Bt(t)):Bt(Bt(this).R(t));if(Bn(t))return Bt(this.R(Bt(t)));if(0>this.X(qE)&&0>t.X(qE))return ms(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,Oc(n,2*s+2*i),n[2*s+2*i+1]+=r*l,Oc(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Oc(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Oc(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Ye(n,0)};function Oc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function la(t,e){this.g=t,this.h=e}function Uu(t,e){if(Vs(e))throw Error("division by zero");if(Vs(t))return new la(lo,lo);if(Bn(t))return e=Uu(Bt(t),e),new la(Bt(e.g),Bt(e.h));if(Bn(e))return e=Uu(t,Bt(e)),new la(Bt(e.g),e.h);if(30<t.g.length){if(Bn(t)||Bn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=kp,s=e;0>=s.X(t);)n=zE(n),s=zE(s);var i=Br(n,1),r=Br(s,1);for(s=Br(s,2),n=Br(n,2);!Vs(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Br(s,1),n=Br(n,1)}return e=$u(t,i.R(e)),new la(i,e)}for(i=lo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=ms(n),o=r.R(e);Bn(o)||0<o.X(t);)n-=s,r=ms(n),o=r.R(e);Vs(r)&&(r=kp),i=i.add(r),t=$u(t,o)}return new la(i,t)}z.gb=function(t){return Uu(this,t).h};z.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Ye(n,this.h&t.h)};z.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Ye(n,this.h|t.h)};z.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Ye(n,this.h^t.h)};function zE(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Ye(n,t.h)}function Br(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Ye(i,t.h)}Vu.prototype.createWebChannel=Vu.prototype.g;xn.prototype.send=xn.prototype.u;xn.prototype.open=xn.prototype.m;xn.prototype.close=xn.prototype.close;Uh.NO_ERROR=0;Uh.TIMEOUT=8;Uh.HTTP_ERROR=6;YC.COMPLETE="complete";XC.EventType=Fl;Fl.OPEN="a";Fl.CLOSE="b";Fl.ERROR="c";Fl.MESSAGE="d";Dt.prototype.listen=Dt.prototype.O;ht.prototype.listenOnce=ht.prototype.P;ht.prototype.getLastError=ht.prototype.Sa;ht.prototype.getLastErrorCode=ht.prototype.Ia;ht.prototype.getStatus=ht.prototype.da;ht.prototype.getResponseJson=ht.prototype.Wa;ht.prototype.getResponseText=ht.prototype.ja;ht.prototype.send=ht.prototype.ha;ht.prototype.setWithCredentials=ht.prototype.Oa;ss.prototype.digest=ss.prototype.l;ss.prototype.reset=ss.prototype.reset;ss.prototype.update=ss.prototype.j;Ye.prototype.add=Ye.prototype.add;Ye.prototype.multiply=Ye.prototype.R;Ye.prototype.modulo=Ye.prototype.gb;Ye.prototype.compare=Ye.prototype.X;Ye.prototype.toNumber=Ye.prototype.ea;Ye.prototype.toString=Ye.prototype.toString;Ye.prototype.getBits=Ye.prototype.D;Ye.fromNumber=ms;Ye.fromString=xA;var jV=function(){return new Vu},BV=function(){return $h()},pf=Uh,WV=YC,HV=Ar,GE={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Nc=XC,qV=ht,zV=ss,co=Ye;const KE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qt.UNAUTHENTICATED=new Qt(null),Qt.GOOGLE_CREDENTIALS=new Qt("google-credentials-uid"),Qt.FIRST_PARTY=new Qt("first-party-uid"),Qt.MOCK_USER=new Qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Tl("@firebase/firestore");function ca(){return vr.logLevel}function te(t,...e){if(vr.logLevel<=Ne.DEBUG){const n=e.map(Nm);vr.debug(`Firestore (${Bo}): ${t}`,...n)}}function Hs(t,...e){if(vr.logLevel<=Ne.ERROR){const n=e.map(Nm);vr.error(`Firestore (${Bo}): ${t}`,...n)}}function Co(t,...e){if(vr.logLevel<=Ne.WARN){const n=e.map(Nm);vr.warn(`Firestore (${Bo}): ${t}`,...n)}}function Nm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t="Unexpected state"){const e=`FIRESTORE (${Bo}) INTERNAL ASSERTION FAILED: `+t;throw Hs(e),new Error(e)}function Tt(t,e){t||Ie()}function Be(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Cs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qt.UNAUTHENTICATED))}shutdown(){}}class KV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QV{constructor(e){this.t=e,this.currentUser=Qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new _i;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new _i,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new _i)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Tt(typeof s.accessToken=="string"),new DA(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Tt(e===null||typeof e=="string"),new Qt(e)}}class YV{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Qt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XV{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new YV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Tt(typeof n.token=="string"),this.R=n.token,new JV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=e$(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function qe(t,e){return t<e?-1:t>e?1:0}function Ao(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return vn.fromMillis(Date.now())}static fromDate(e){return vn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new vn(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?qe(this.nanoseconds,e.nanoseconds):qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new vn(0,0))}static max(){return new ve(new vn(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ie(),s===void 0?s=e.length-n:s>e.length-n&&Ie(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return fl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fl?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ct extends fl{construct(e,n,s){return new ct(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new re(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ct(n)}static emptyPath(){return new ct([])}}const n$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gn extends fl{construct(e,n,s){return new gn(e,n,s)}static isValidIdentifier(e){return n$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gn(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new re(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new re(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new re(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new re(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gn(n)}static emptyPath(){return new gn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(ct.fromString(e))}static fromName(e){return new he(ct.fromString(e).popFirst(5))}static empty(){return new he(ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ct.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ct.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new ct(e.slice()))}}function s$(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ve.fromTimestamp(s===1e9?new vn(n+1,0):new vn(n,s));return new Ci(i,he.empty(),e)}function i$(t){return new Ci(t.readTime,t.key,-1)}class Ci{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ci(ve.min(),he.empty(),-1)}static max(){return new Ci(ve.max(),he.empty(),-1)}}function r$(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:qe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class a${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xm(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==o$)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,s)=>{n(e)})}static reject(e){return new V((n,s)=>{s(e)})}static waitFor(e){return new V((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=V.resolve(!1);for(const s of e)n=n.next(i=>i?V.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new V((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new V((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Bl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.se(s),this.oe=s=>n.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Dm._e=-1;function Qh(t){return t==null}function Op(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yh(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function l$(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n){this.comparator=e,this.root=n||Ut.EMPTY}insert(e,n){return new gt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ut.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xc(this.root,e,this.comparator,!1)}getReverseIterator(){return new xc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xc(this.root,e,this.comparator,!0)}}class xc{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ut{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ut.RED,this.left=i??Ut.EMPTY,this.right=r??Ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ut(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ut.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();const e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}}Ut.EMPTY=null,Ut.RED=!0,Ut.BLACK=!1;Ut.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(e,n,s,i,r){return this}insert(e,n,s){return new Ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new YE(this.data.getIterator())}getIteratorFrom(e){return new YE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof qt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qt(this.comparator);return n.data=e,n}}class YE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.fields=e,e.sort(gn.comparator)}static empty(){return new ci([])}unionWith(e){let n=new qt(gn.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ci(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ao(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new MA("Invalid base64 string: "+r):r}}(e);return new sn(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new sn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sn.EMPTY_BYTE_STRING=new sn("");const c$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(t){if(Tt(!!t),typeof t=="string"){let e=0;const n=c$.exec(t);if(Tt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:vt(t.seconds),nanos:vt(t.nanos)}}function vt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?sn.fromBase64String(t):sn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lm(t){const e=t.mapValue.fields.__previous_value__;return Mm(e)?Lm(e):e}function pl(t){const e=Ai(t.mapValue.fields.__local_write_time__.timestampValue);return new vn(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u${constructor(e,n,s,i,r,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class gl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mm(t)?4:h$(t)?9007199254740991:10:Ie()}function Ts(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pl(t).isEqual(pl(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Ai(i.timestampValue),a=Ai(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Er(i.bytesValue).isEqual(Er(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return vt(i.geoPointValue.latitude)===vt(r.geoPointValue.latitude)&&vt(i.geoPointValue.longitude)===vt(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return vt(i.integerValue)===vt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=vt(i.doubleValue),a=vt(r.doubleValue);return o===a?Op(o)===Op(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ao(t.arrayValue.values||[],e.arrayValue.values||[],Ts);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(QE(o)!==QE(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ts(o[l],a[l])))return!1;return!0}(t,e);default:return Ie()}}function ml(t,e){return(t.values||[]).find(n=>Ts(n,e))!==void 0}function So(t,e){if(t===e)return 0;const n=wr(t),s=wr(e);if(n!==s)return qe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return qe(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=vt(r.integerValue||r.doubleValue),l=vt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return XE(t.timestampValue,e.timestampValue);case 4:return XE(pl(t),pl(e));case 5:return qe(t.stringValue,e.stringValue);case 6:return function(r,o){const a=Er(r),l=Er(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=qe(a[u],l[u]);if(h!==0)return h}return qe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=qe(vt(r.latitude),vt(o.latitude));return a!==0?a:qe(vt(r.longitude),vt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const h=So(a[u],l[u]);if(h)return h}return qe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Dc.mapValue&&o===Dc.mapValue)return 0;if(r===Dc.mapValue)return 1;if(o===Dc.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=qe(l[d],h[d]);if(p!==0)return p;const m=So(a[l[d]],u[h[d]]);if(m!==0)return m}return qe(l.length,h.length)}(t.mapValue,e.mapValue);default:throw Ie()}}function XE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return qe(t,e);const n=Ai(t),s=Ai(e),i=qe(n.seconds,s.seconds);return i!==0?i:qe(n.nanos,s.nanos)}function Ro(t){return Np(t)}function Np(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Ai(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Er(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=Np(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Np(n.fields[o])}`;return i+"}"}(t.mapValue):Ie()}function xp(t){return!!t&&"integerValue"in t}function Fm(t){return!!t&&"arrayValue"in t}function JE(t){return!!t&&"nullValue"in t}function ZE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gf(t){return!!t&&"mapValue"in t}function Ma(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yh(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ma(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ma(t.arrayValue.values[n]);return e}return Object.assign({},t)}function h$(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.value=e}static empty(){return new fs({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!gf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ma(n)}setAll(e){let n=gn.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Ma(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());gf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ts(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];gf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Yh(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new fs(Ma(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Jt(e,0,ve.min(),ve.min(),ve.min(),fs.empty(),0)}static newFoundDocument(e,n,s,i){return new Jt(e,1,n,ve.min(),s,i,0)}static newNoDocument(e,n){return new Jt(e,2,n,ve.min(),ve.min(),fs.empty(),0)}static newUnknownDocument(e,n){return new Jt(e,3,n,ve.min(),ve.min(),fs.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fs.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){this.position=e,this.inclusive=n}}function ew(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=he.comparator(he.fromName(o.referenceValue),n.key):s=So(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function tw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ts(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n="asc"){this.field=e,this.dir=n}}function d$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{}class Rt extends LA{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new p$(e,n,s):n==="array-contains"?new _$(e,s):n==="in"?new y$(e,s):n==="not-in"?new v$(e,s):n==="array-contains-any"?new E$(e,s):new Rt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new g$(e,s):new m$(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(So(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(So(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bs extends LA{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new bs(e,n)}matches(e){return FA(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function FA(t){return t.op==="and"}function VA(t){return f$(t)&&FA(t)}function f$(t){for(const e of t.filters)if(e instanceof bs)return!1;return!0}function Dp(t){if(t instanceof Rt)return t.field.canonicalString()+t.op.toString()+Ro(t.value);if(VA(t))return t.filters.map(e=>Dp(e)).join(",");{const e=t.filters.map(n=>Dp(n)).join(",");return`${t.op}(${e})`}}function $A(t,e){return t instanceof Rt?function(s,i){return i instanceof Rt&&s.op===i.op&&s.field.isEqual(i.field)&&Ts(s.value,i.value)}(t,e):t instanceof bs?function(s,i){return i instanceof bs&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&$A(o,i.filters[a]),!0):!1}(t,e):void Ie()}function UA(t){return t instanceof Rt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ro(n.value)}`}(t):t instanceof bs?function(n){return n.op.toString()+" {"+n.getFilters().map(UA).join(" ,")+"}"}(t):"Filter"}class p$ extends Rt{constructor(e,n,s){super(e,n,s),this.key=he.fromName(s.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class g$ extends Rt{constructor(e,n){super(e,"in",n),this.keys=jA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class m$ extends Rt{constructor(e,n){super(e,"not-in",n),this.keys=jA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>he.fromName(s.referenceValue))}class _$ extends Rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fm(n)&&ml(n.arrayValue,this.value)}}class y$ extends Rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ml(this.value.arrayValue,n)}}class v$ extends Rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ml(this.value.arrayValue,n)}}class E$ extends Rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ml(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w${constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function nw(t,e=null,n=[],s=[],i=null,r=null,o=null){return new w$(t,e,n,s,i,r,o)}function Vm(t){const e=Be(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Dp(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Qh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ro(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ro(s)).join(",")),e.ce=n}return e.ce}function $m(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!d$(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$A(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tw(t.startAt,e.startAt)&&tw(t.endAt,e.endAt)}function Mp(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function T$(t,e,n,s,i,r,o,a){return new Xh(t,e,n,s,i,r,o,a)}function Jh(t){return new Xh(t)}function sw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function b$(t){return t.collectionGroup!==null}function La(t){const e=Be(t);if(e.le===null){e.le=[];const n=new Set;for(const r of e.explicitOrderBy)e.le.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new qt(gn.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.le.push(new Bu(r,s))}),n.has(gn.keyField().canonicalString())||e.le.push(new Bu(gn.keyField(),s))}return e.le}function vs(t){const e=Be(t);return e.he||(e.he=I$(e,La(t))),e.he}function I$(t,e){if(t.limitType==="F")return nw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Bu(i.field,r)});const n=t.endAt?new ju(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new ju(t.startAt.position,t.startAt.inclusive):null;return nw(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Lp(t,e,n){return new Xh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zh(t,e){return $m(vs(t),vs(e))&&t.limitType===e.limitType}function BA(t){return`${Vm(vs(t))}|lt:${t.limitType}`}function Hr(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>UA(i)).join(", ")}]`),Qh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>Ro(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>Ro(i)).join(",")),`Target(${s})`}(vs(t))}; limitType=${t.limitType})`}function ed(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):he.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of La(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const u=ew(o,a,l);return o.inclusive?u<=0:u<0}(s.startAt,La(s),i)||s.endAt&&!function(o,a,l){const u=ew(o,a,l);return o.inclusive?u>=0:u>0}(s.endAt,La(s),i))}(t,e)}function C$(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function WA(t){return(e,n)=>{let s=!1;for(const i of La(t)){const r=A$(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function A$(t,e,n){const s=t.field.isKeyField()?he.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),u=a.data.field(r);return l!==null&&u!==null?So(l,u):Ie()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yh(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return l$(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S$=new gt(he.comparator);function Si(){return S$}const HA=new gt(he.comparator);function wa(...t){let e=HA;for(const n of t)e=e.insert(n.key,n);return e}function R$(t){let e=HA;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ir(){return Fa()}function qA(){return Fa()}function Fa(){return new Wo(t=>t.toString(),(t,e)=>t.isEqual(e))}const P$=new qt(he.comparator);function $e(...t){let e=P$;for(const n of t)e=e.add(n);return e}const k$=new qt(qe);function O$(){return k$}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N$(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Op(e)?"-0":e}}function x$(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this._=void 0}}function D$(t,e,n){return t instanceof Fp?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Mm(r)&&(r=Lm(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Wu?zA(t,e):t instanceof Hu?GA(t,e):function(i,r){const o=L$(i,r),a=iw(o)+iw(i.Ie);return xp(o)&&xp(i.Ie)?x$(a):N$(i.serializer,a)}(t,e)}function M$(t,e,n){return t instanceof Wu?zA(t,e):t instanceof Hu?GA(t,e):n}function L$(t,e){return t instanceof Vp?function(s){return xp(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Fp extends td{}class Wu extends td{constructor(e){super(),this.elements=e}}function zA(t,e){const n=KA(e);for(const s of t.elements)n.some(i=>Ts(i,s))||n.push(s);return{arrayValue:{values:n}}}class Hu extends td{constructor(e){super(),this.elements=e}}function GA(t,e){let n=KA(e);for(const s of t.elements)n=n.filter(i=>!Ts(i,s));return{arrayValue:{values:n}}}class Vp extends td{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function iw(t){return vt(t.integerValue||t.doubleValue)}function KA(t){return Fm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function F$(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Wu&&i instanceof Wu||s instanceof Hu&&i instanceof Hu?Ao(s.elements,i.elements,Ts):s instanceof Vp&&i instanceof Vp?Ts(s.Ie,i.Ie):s instanceof Fp&&i instanceof Fp}(t.transform,e.transform)}class dr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dr}static exists(e){return new dr(void 0,e)}static updateTime(e){return new dr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Um{}function QA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $$(t.key,dr.none()):new jm(t.key,t.data,dr.none());{const n=t.data,s=fs.empty();let i=new qt(gn.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new nd(t.key,s,new ci(i.toArray()),dr.none())}}function V$(t,e,n){t instanceof jm?function(i,r,o){const a=i.value.clone(),l=ow(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof nd?function(i,r,o){if(!Jc(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=ow(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(YA(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Va(t,e,n,s){return t instanceof jm?function(r,o,a,l){if(!Jc(r.precondition,o))return a;const u=r.value.clone(),h=aw(r.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof nd?function(r,o,a,l){if(!Jc(r.precondition,o))return a;const u=aw(r.fieldTransforms,l,o),h=o.data;return h.setAll(YA(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(d=>d.field))}(t,e,n,s):function(r,o,a){return Jc(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function rw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Ao(s,i,(r,o)=>F$(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jm extends Um{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class nd extends Um{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function YA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ow(t,e,n){const s=new Map;Tt(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,M$(o,a,n[i]))}return s}function aw(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,D$(r,o,e))}return s}class $$ extends Um{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U${constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&V$(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Va(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Va(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=qA();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=QA(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ve.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),$e())}isEqual(e){return this.batchId===e.batchId&&Ao(this.mutations,e.mutations,(n,s)=>rw(n,s))&&Ao(this.baseMutations,e.baseMutations,(n,s)=>rw(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j${constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B${constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,Fe;function XA(t){if(t===void 0)return Hs("GRPC error has no .code"),q.UNKNOWN;switch(t){case yt.OK:return q.OK;case yt.CANCELLED:return q.CANCELLED;case yt.UNKNOWN:return q.UNKNOWN;case yt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case yt.INTERNAL:return q.INTERNAL;case yt.UNAVAILABLE:return q.UNAVAILABLE;case yt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case yt.NOT_FOUND:return q.NOT_FOUND;case yt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case yt.ABORTED:return q.ABORTED;case yt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case yt.DATA_LOSS:return q.DATA_LOSS;default:return Ie()}}(Fe=yt||(yt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W$(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H$=new co([4294967295,4294967295],0);function lw(t){const e=W$().encode(t),n=new zV;return n.update(e),new Uint8Array(n.digest())}function cw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new co([n,s],0),new co([i,r],0)]}class Bm{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ta(`Invalid padding: ${n}`);if(s<0)throw new Ta(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ta(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ta(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=co.fromNumber(this.Te)}de(e,n,s){let i=e.add(n.multiply(co.fromNumber(s)));return i.compare(H$)===1&&(i=new co([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=lw(e),[s,i]=cw(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);if(!this.Ae(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Bm(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=lw(e),[s,i]=cw(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);this.Re(o)}}Re(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ta extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Wl.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new sd(ve.min(),i,new gt(qe),Si(),$e())}}class Wl{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Wl(s,n,$e(),$e(),$e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n,s,i){this.Ve=e,this.removedTargetIds=n,this.key=s,this.me=i}}class JA{constructor(e,n){this.targetId=e,this.fe=n}}class ZA{constructor(e,n,s=sn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class uw{constructor(){this.ge=0,this.pe=dw(),this.ye=sn.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=$e(),n=$e(),s=$e();return this.pe.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Ie()}}),new Wl(this.ye,this.we,e,n,s)}Fe(){this.Se=!1,this.pe=dw()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Tt(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class q${constructor(e){this.Le=e,this.ke=new Map,this.qe=Si(),this.Qe=hw(),this.Ke=new gt(qe)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(n);break;case 3:this.je(n)&&(s.Be(),s.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.Ce(e.resumeToken));break;default:Ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((s,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,s=e.fe.count,i=this.Ye(n);if(i){const r=i.target;if(Mp(r))if(s===0){const o=new he(r.path);this.We(n,o,Jt.newNoDocument(o,ve.min()))}else Tt(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,a;try{o=Er(s).toUint8Array()}catch(l){if(l instanceof MA)return Co("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Bm(o,i,r)}catch(l){return Co(l instanceof Ta?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,s){return n.fe.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let i=0;return s.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(n,r,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&Mp(a.target)){const l=new he(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Jt.newNoDocument(l,e))}r.De&&(n.set(o,r.ve()),r.Fe())}});let s=$e();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const i=new sd(e,n,this.Ke,this.qe,s);return this.qe=Si(),this.Qe=hw(),this.Ke=new gt(qe),i}Ue(e,n){if(!this.je(e))return;const s=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,s),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),s&&(this.qe=this.qe.insert(n,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new uw,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new qt(qe),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new uw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function hw(){return new gt(he.comparator)}function dw(){return new gt(he.comparator)}const z$={asc:"ASCENDING",desc:"DESCENDING"},G$={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},K$={and:"AND",or:"OR"};class Q${constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $p(t,e){return t.useProto3Json||Qh(e)?e:{value:e}}function Y$(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function X$(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uo(t){return Tt(!!t),ve.fromTimestamp(function(n){const s=Ai(n);return new vn(s.seconds,s.nanos)}(t))}function J$(t,e){return function(s){return new ct(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function e0(t){const e=ct.fromString(t);return Tt(i0(e)),e}function mf(t,e){const n=e0(e);if(n.get(1)!==t.databaseId.projectId)throw new re(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(t0(n))}function Up(t,e){return J$(t.databaseId,e)}function Z$(t){const e=e0(t);return e.length===4?ct.emptyPath():t0(e)}function fw(t){return new ct(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function t0(t){return Tt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function eU(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(Tt(h===void 0||typeof h=="string"),sn.fromBase64String(h||"")):(Tt(h===void 0||h instanceof Uint8Array),sn.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?q.UNKNOWN:XA(u.code);return new re(h,u.message||"")}(o);n=new ZA(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=mf(t,s.document.name),r=uo(s.document.updateTime),o=s.document.createTime?uo(s.document.createTime):ve.min(),a=new fs({mapValue:{fields:s.document.fields}}),l=Jt.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Zc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=mf(t,s.document),r=s.readTime?uo(s.readTime):ve.min(),o=Jt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Zc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=mf(t,s.document),r=s.removedTargetIds||[];n=new Zc([],r,i,null)}else{if(!("filter"in e))return Ie();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new B$(i,r),a=s.targetId;n=new JA(a,o)}}return n}function tU(t,e){return{documents:[Up(t,e.path)]}}function nU(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Up(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Up(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return s0(bs.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:qr(d.field),direction:rU(d.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=$p(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function sU(t){let e=Z$(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Tt(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=function(d){const p=n0(d);return p instanceof bs&&VA(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(y){return new Bu(zr(y.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Qh(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,m=d.values||[];return new ju(m,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,m=d.values||[];return new ju(m,p)}(n.endAt)),T$(e,i,o,r,a,"F",l,u)}function iU(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function n0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=zr(n.unaryFilter.field);return Rt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=zr(n.unaryFilter.field);return Rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=zr(n.unaryFilter.field);return Rt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zr(n.unaryFilter.field);return Rt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}}(t):t.fieldFilter!==void 0?function(n){return Rt.create(zr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return bs.create(n.compositeFilter.filters.map(s=>n0(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Ie()}}(n.compositeFilter.op))}(t):Ie()}function rU(t){return z$[t]}function oU(t){return G$[t]}function aU(t){return K$[t]}function qr(t){return{fieldPath:t.canonicalString()}}function zr(t){return gn.fromServerFormat(t.fieldPath)}function s0(t){return t instanceof Rt?function(n){if(n.op==="=="){if(ZE(n.value))return{unaryFilter:{field:qr(n.field),op:"IS_NAN"}};if(JE(n.value))return{unaryFilter:{field:qr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ZE(n.value))return{unaryFilter:{field:qr(n.field),op:"IS_NOT_NAN"}};if(JE(n.value))return{unaryFilter:{field:qr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qr(n.field),op:oU(n.op),value:n.value}}}(t):t instanceof bs?function(n){const s=n.getFilters().map(i=>s0(i));return s.length===1?s[0]:{compositeFilter:{op:aU(n.op),filters:s}}}(t):Ie()}function i0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,s,i,r=ve.min(),o=ve.min(),a=sn.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ui(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lU{constructor(e){this.ut=e}}function cU(t){const e=sU({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uU{constructor(){this.on=new hU}addToCollectionParentIndex(e,n){return this.on.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Ci.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Ci.min())}updateCollectionGroup(e,n,s){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class hU{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new qt(ct.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new qt(ct.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Po(0)}static Nn(){return new Po(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dU{constructor(){this.changes=new Wo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?V.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pU{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Va(s.mutation,i,ci.empty(),vn.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,$e()).next(()=>s))}getLocalViewOfDocuments(e,n,s=$e()){const i=ir();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=wa();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ir();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,$e()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Si();const o=Fa(),a=function(){return Fa()}();return n.forEach((l,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof nd)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Va(h.mutation,u,h.mutation.getFieldMask(),vn.now())):o.set(u.key,ci.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new fU(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Fa();let i=new gt((o,a)=>o-a),r=$e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=s.get(l)||ci.empty();h=a.applyToLocalView(u,h),s.set(l,h);const d=(i.get(a.batchId)||$e()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=qA();h.forEach(p=>{if(!r.has(p)){const m=QA(n.get(p),s.get(p));m!==null&&d.set(p,m),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return V.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):b$(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):V.resolve(ir());let a=-1,l=r;return o.next(u=>V.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(h)?V.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,l,u,$e())).next(h=>({batchId:a,changes:R$(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(s=>{let i=wa();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=wa();return this.indexManager.getCollectionParents(e,r).next(a=>V.forEach(a,l=>{const u=function(d,p){return new Xh(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Jt.newInvalidDocument(h)))});let a=wa();return o.forEach((l,u)=>{const h=r.get(l);h!==void 0&&Va(h.mutation,u,ci.empty(),vn.now()),ed(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gU{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return V.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:uo(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:cU(i.bundledQuery),readTime:uo(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mU{constructor(){this.overlays=new gt(he.comparator),this.lr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ir();return V.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.lt(e,n,r)}),V.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.lr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.lr.delete(s)),V.resolve()}getOverlaysForCollection(e,n,s){const i=ir(),r=n.length+1,o=new he(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new gt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=ir(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ir(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return V.resolve(a)}lt(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(s.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new j$(n,s));let r=this.lr.get(n);r===void 0&&(r=$e(),this.lr.set(n,r)),this.lr.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.hr=new qt(Nt.Pr),this.Ir=new qt(Nt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new Nt(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new Nt(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new he(new ct([])),s=new Nt(n,e),i=new Nt(n,e+1),r=[];return this.Ir.forEachInRange([s,i],o=>{this.dr(o),r.push(o.key)}),r}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new he(new ct([])),s=new Nt(n,e),i=new Nt(n,e+1);let r=$e();return this.Ir.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Nt(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Nt{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return he.comparator(e.key,n.key)||qe(e.gr,n.gr)}static Tr(e,n){return qe(e.gr,n.gr)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new qt(Nt.Pr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new U$(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Nt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Sr(s),r=i<0?0:i;return V.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Nt(n,0),i=new Nt(n,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([s,i],o=>{const a=this.wr(o.gr);r.push(a)}),V.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new qt(qe);return n.forEach(i=>{const r=new Nt(i,0),o=new Nt(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([r,o],a=>{s=s.add(a.gr)})}),V.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;he.isDocumentKey(r)||(r=r.child(""));const o=new Nt(new he(r),0);let a=new qt(qe);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),V.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const i=this.wr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Tt(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return V.forEach(n.mutations,i=>{const r=new Nt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new Nt(n,0),i=this.yr.firstAfterOrEqual(s);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yU{constructor(e){this.Cr=e,this.docs=function(){return new gt(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return V.resolve(s?s.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(e,n){let s=Si();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Jt.newInvalidDocument(i))}),V.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Si();const o=n.path,a=new he(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||r$(i$(h),s)<=0||(i.has(h.key)||ed(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return V.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Ie()}vr(e,n){return V.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new vU(this)}getSize(e){return V.resolve(this.size)}}class vU extends dU{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(s)}),V.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(e){this.persistence=e,this.Fr=new Wo(n=>Vm(n),$m),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Wm,this.targetCount=0,this.Nr=Po.On()}forEachTarget(e,n){return this.Fr.forEach((s,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),V.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Po(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.kn(n),V.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),V.waitFor(r).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return V.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),V.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return V.resolve(s)}containsKey(e,n){return V.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wU{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Dm(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new EU(this),this.indexManager=new uU,this.remoteDocumentCache=function(i){return new yU(i)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new lU(n),this.Kr=new gU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mU,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new _U(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){te("MemoryPersistence","Starting transaction:",e);const i=new TU(this.Lr.next());return this.referenceDelegate.$r(),s(i).next(r=>this.referenceDelegate.Ur(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Wr(e,n){return V.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class TU extends a${constructor(e){super(),this.currentSequenceNumber=e}}class Hm{constructor(e){this.persistence=e,this.Gr=new Wm,this.zr=null}static jr(e){return new Hm(e)}get Hr(){if(this.zr)return this.zr;throw Ie()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),V.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Hr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Hr,s=>{const i=he.fromPath(s);return this.Jr(e,i).next(r=>{r||n.removeEntry(i,ve.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return V.or([()=>V.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=i}static Qi(e,n){let s=$e(),i=$e();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new qm(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IU{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.zi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ji(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new bU;return this.Hi(e,n,o).next(a=>{if(r.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>r.result)}Ji(e,n,s,i){return s.documentReadCount<this.Ui?(ca()<=Ne.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Hr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),V.resolve()):(ca()<=Ne.DEBUG&&te("QueryEngine","Query:",Hr(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Wi*i?(ca()<=Ne.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Hr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vs(n))):V.resolve())}zi(e,n){if(sw(n))return V.resolve(null);let s=vs(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Lp(n,null,"F"),s=vs(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=$e(...r);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,Lp(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,s,i){return sw(n)||i.isEqual(ve.min())?V.resolve(null):this.Gi.getDocuments(e,s).next(r=>{const o=this.Yi(n,r);return this.Zi(n,o,s,i)?V.resolve(null):(ca()<=Ne.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hr(n)),this.Xi(e,o,n,s$(i,-1)).next(a=>a))})}Yi(e,n){let s=new qt(WA(e));return n.forEach((i,r)=>{ed(e,r)&&(s=s.add(r))}),s}Zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Hi(e,n,s){return ca()<=Ne.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Hr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Ci.min(),s)}Xi(e,n,s,i){return this.Gi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU{constructor(e,n,s,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new gt(qe),this.ns=new Wo(r=>Vm(r),$m),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pU(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function AU(t,e,n,s){return new CU(t,e,n,s)}async function r0(t,e){const n=Be(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=$e();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function o0(t){const e=Be(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function SU(t,e){const n=Be(t),s=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;a.push(n.qr.removeMatchingKeys(r,h.removedDocuments,d).next(()=>n.qr.addMatchingKeys(r,h.addedDocuments,d)));let m=p.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(sn.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(d,m),function(w,T,A){return w.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(p,m,h)&&a.push(n.qr.updateTargetData(r,m))});let l=Si(),u=$e();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(RU(r,o,e.documentUpdates).next(h=>{l=h.us,u=h.cs})),!s.isEqual(ve.min())){const h=n.qr.getLastRemoteSnapshotVersion(r).next(d=>n.qr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return V.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,u)).next(()=>l)}).then(r=>(n.ts=i,r))}function RU(t,e,n){let s=$e(),i=$e();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Si();return n.forEach((a,l)=>{const u=r.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ve.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function PU(t,e){const n=Be(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.qr.getTargetData(s,e).next(r=>r?(i=r,V.resolve(i)):n.qr.allocateTargetId(s).next(o=>(i=new ui(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.ts.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function jp(t,e,n){const s=Be(t),i=s.ts.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Bl(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(i.target)}function pw(t,e,n){const s=Be(t);let i=ve.min(),r=$e();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=Be(l),p=d.ns.get(h);return p!==void 0?V.resolve(d.ts.get(p)):d.qr.getTargetData(u,h)}(s,o,vs(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?i:ve.min(),n?r:$e())).next(a=>(kU(s,C$(e),a),{documents:a,ls:r})))}function kU(t,e,n){let s=t.rs.get(e)||ve.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.rs.set(e,s)}class gw{constructor(){this.activeTargetIds=O$()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OU{constructor(){this.eo=new gw,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new gw,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NU{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mc=null;function _f(){return Mc===null?Mc=function(){return 268435456+Math.round(2147483648*Math.random())}():Mc++,"0x"+Mc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DU{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="WebChannelConnection";class MU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=s+"://"+n.host,this.fo=`projects/${i}/databases/${r}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get yo(){return!1}wo(n,s,i,r,o){const a=_f(),l=this.So(n,s);te("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,r,o),this.Do(n,l,u,i).then(h=>(te("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Co("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Co(n,s,i,r,o,a){return this.wo(n,s,i,r,o)}bo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}So(n,s){const i=xU[n];return`${this.mo}/v1/${s}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,s,i){const r=_f();return new Promise((o,a)=>{const l=new qV;l.setWithCredentials(!0),l.listenOnce(WV.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case pf.NO_ERROR:const h=l.getResponseJson();te(Kt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(h)),o(h);break;case pf.TIMEOUT:te(Kt,`RPC '${e}' ${r} timed out`),a(new re(q.DEADLINE_EXCEEDED,"Request time out"));break;case pf.HTTP_ERROR:const d=l.getStatus();if(te(Kt,`RPC '${e}' ${r} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const y=function(T){const A=T.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(A)>=0?A:q.UNKNOWN}(m.status);a(new re(y,m.message))}else a(new re(q.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new re(q.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{te(Kt,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);te(Kt,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",u,s,15)})}vo(e,n,s){const i=_f(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jV(),a=BV(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const h=r.join("");te(Kt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,m=!1;const y=new DU({co:T=>{m?te(Kt,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(p||(te(Kt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),te(Kt,`RPC '${e}' stream ${i} sending:`,T),d.send(T))},lo:()=>d.close()}),w=(T,A,N)=>{T.listen(A,k=>{try{N(k)}catch(L){setTimeout(()=>{throw L},0)}})};return w(d,Nc.EventType.OPEN,()=>{m||te(Kt,`RPC '${e}' stream ${i} transport opened.`)}),w(d,Nc.EventType.CLOSE,()=>{m||(m=!0,te(Kt,`RPC '${e}' stream ${i} transport closed`),y.Ro())}),w(d,Nc.EventType.ERROR,T=>{m||(m=!0,Co(Kt,`RPC '${e}' stream ${i} transport errored:`,T),y.Ro(new re(q.UNAVAILABLE,"The operation could not be completed")))}),w(d,Nc.EventType.MESSAGE,T=>{var A;if(!m){const N=T.data[0];Tt(!!N);const k=N,L=k.error||((A=k[0])===null||A===void 0?void 0:A.error);if(L){te(Kt,`RPC '${e}' stream ${i} received error:`,L);const $=L.status;let ee=function(de){const Ae=yt[de];if(Ae!==void 0)return XA(Ae)}($),ae=L.message;ee===void 0&&(ee=q.INTERNAL,ae="Unknown error status: "+$+" with message "+L.message),m=!0,y.Ro(new re(ee,ae)),d.close()}else te(Kt,`RPC '${e}' stream ${i} received:`,N),y.Vo(N)}}),w(a,HV.STAT_EVENT,T=>{T.stat===GE.PROXY?te(Kt,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===GE.NOPROXY&&te(Kt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function yf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(t){return new Q$(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n,s=1e3,i=1.5,r=6e4){this.si=e,this.timerId=n,this.Fo=s,this.Mo=i,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),s=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-s);i>0&&te("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{constructor(e,n,s,i,r,o,a,l){this.si=e,this.Ko=s,this.$o=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new l0(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Hs(n.toString()),Hs("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Uo===n&&this.s_(s,i)},s=>{e(()=>{const i=new re(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.o_(i)})})}s_(e,n){const s=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{s(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{s(()=>this.o_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FU extends LU{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=eU(this.serializer,e),s=function(r){if(!("targetChange"in r))return ve.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?uo(o.readTime):ve.min()}(e);return this.listener.a_(n,s)}u_(e){const n={};n.database=fw(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=Mp(l)?{documents:tU(r,l)}:{query:nU(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=X$(r,o.resumeToken);const u=$p(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ve.min())>0){a.readTime=Y$(r,o.snapshotVersion.toTimestamp());const u=$p(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=iU(this.serializer,e);s&&(n.labels=s),this.e_(n)}c_(e){const n={};n.database=fw(this.serializer),n.removeTarget=e,this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VU extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new re(q.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.wo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(q.UNKNOWN,i.toString())})}Co(e,n,s,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new re(q.UNKNOWN,r.toString())})}terminate(){this.d_=!0}}class $U{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Hs(n),this.f_=!1):te("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro(o=>{s.enqueueAndForget(async()=>{ql(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Be(l);u.C_.add(4),await Hl(u),u.M_.set("Unknown"),u.C_.delete(4),await id(u)}(this))})}),this.M_=new $U(s,i)}}async function id(t){if(ql(t))for(const e of t.v_)await e(!0)}async function Hl(t){for(const e of t.v_)await e(!1)}function c0(t,e){const n=Be(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Km(n)?Gm(n):Ho(n).Ho()&&zm(n,e))}function u0(t,e){const n=Be(t),s=Ho(n);n.D_.delete(e),s.Ho()&&h0(n,e),n.D_.size===0&&(s.Ho()?s.Zo():ql(n)&&n.M_.set("Unknown"))}function zm(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ho(t).u_(e)}function h0(t,e){t.x_.Oe(e),Ho(t).c_(e)}function Gm(t){t.x_=new q$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ho(t).start(),t.M_.g_()}function Km(t){return ql(t)&&!Ho(t).jo()&&t.D_.size>0}function ql(t){return Be(t).C_.size===0}function d0(t){t.x_=void 0}async function jU(t){t.D_.forEach((e,n)=>{zm(t,e)})}async function BU(t,e){d0(t),Km(t)?(t.M_.w_(e),Gm(t)):t.M_.set("Unknown")}async function WU(t,e,n){if(t.M_.set("Online"),e instanceof ZA&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await _w(t,s)}else if(e instanceof Zc?t.x_.$e(e):e instanceof JA?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(ve.min()))try{const s=await o0(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=r.D_.get(u);h&&r.D_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=r.D_.get(l);if(!h)return;r.D_.set(l,h.withResumeToken(sn.EMPTY_BYTE_STRING,h.snapshotVersion)),h0(r,l);const d=new ui(h.target,l,u,h.sequenceNumber);zm(r,d)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await _w(t,s)}}async function _w(t,e,n){if(!Bl(e))throw e;t.C_.add(1),await Hl(t),t.M_.set("Offline"),n||(n=()=>o0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await id(t)})}async function yw(t,e){const n=Be(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=ql(n);n.C_.add(3),await Hl(n),s&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await id(n)}async function HU(t,e){const n=Be(t);e?(n.C_.delete(2),await id(n)):e||(n.C_.add(2),await Hl(n),n.M_.set("Unknown"))}function Ho(t){return t.O_||(t.O_=function(n,s,i){const r=Be(n);return r.A_(),new FU(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{ho:jU.bind(null,t),Io:BU.bind(null,t),a_:WU.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Km(t)?Gm(t):t.M_.set("Unknown")):(await t.O_.stop(),d0(t))})),t.O_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new _i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Qm(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function f0(t,e){if(Hs("AsyncQueue",`${e}: ${t}`),Bl(t))return new re(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.comparator=e?(n,s)=>e(n,s)||he.comparator(n.key,s.key):(n,s)=>he.comparator(n.key,s.key),this.keyedMap=wa(),this.sortedSet=new gt(this.comparator)}static emptySet(e){return new ho(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ho)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ho;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.B_=new gt(he.comparator)}track(e){const n=e.doc.key,s=this.B_.get(n);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(n,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(n):e.type===1&&s.type===2?this.B_=this.B_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Ie():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,s)=>{e.push(s)}),e}}class ko{constructor(e,n,s,i,r,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ko(e,n,ho.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qU{constructor(){this.k_=void 0,this.listeners=[]}}class zU{constructor(){this.queries=new Wo(e=>BA(e),Zh),this.onlineState="Unknown",this.q_=new Set}}async function Ym(t,e){const n=Be(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new qU),i)try{r.k_=await n.onListen(s)}catch(o){const a=f0(o,`Initialization of query '${Hr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Q_(n.onlineState),r.k_&&e.K_(r.k_)&&Jm(n)}async function Xm(t,e){const n=Be(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function GU(t,e){const n=Be(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.K_(i)&&(s=!0);o.k_=i}}s&&Jm(n)}function KU(t,e,n){const s=Be(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Jm(t){t.q_.forEach(e=>{e.next()})}class Zm{constructor(e,n,s){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=s||{}}K_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ko(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.J_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.key=e}}class g0{constructor(e){this.key=e}}class QU{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=$e(),this.mutatedKeys=$e(),this._a=WA(e),this.aa=new ho(this._a)}get ua(){return this.ia}ca(e,n){const s=n?n.la:new vw,i=n?n.aa:this.aa;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const p=i.get(h),m=ed(this.query,d)?d:null,y=!!p&&this.mutatedKeys.has(p.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;p&&m?p.data.isEqual(m.data)?y!==w&&(s.track({type:3,doc:m}),T=!0):this.ha(p,m)||(s.track({type:2,doc:m}),T=!0,(l&&this._a(m,l)>0||u&&this._a(m,u)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),T=!0):p&&!m&&(s.track({type:1,doc:p}),T=!0,(l||u)&&(a=!0)),T&&(m?(o=o.add(m),r=w?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{aa:o,la:s,Zi:a,mutatedKeys:r}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((h,d)=>function(m,y){const w=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie()}};return w(m)-w(y)}(h.type,d.type)||this._a(h.doc,d.doc)),this.Pa(s),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new ko(this.query,e.aa,r,o,e.mutatedKeys,l===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new vw,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=$e(),this.aa.forEach(s=>{this.Ea(s.key)&&(this.oa=this.oa.add(s.key))});const n=[];return e.forEach(s=>{this.oa.has(s)||n.push(new g0(s))}),this.oa.forEach(s=>{e.has(s)||n.push(new p0(s))}),n}da(e){this.ia=e.ls,this.oa=$e();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return ko.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class YU{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class XU{constructor(e){this.key=e,this.Ra=!1}}class JU{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Wo(a=>BA(a),Zh),this.fa=new Map,this.ga=new Set,this.pa=new gt(he.comparator),this.ya=new Map,this.wa=new Wm,this.Sa={},this.ba=new Map,this.Da=Po.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function ZU(t,e){const n=oj(t);let s,i;const r=n.ma.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Aa();else{const o=await PU(n.localStore,vs(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await ej(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&c0(n.remoteStore,o)}return i}async function ej(t,e,n,s,i){t.va=(d,p,m)=>async function(w,T,A,N){let k=T.view.ca(A);k.Zi&&(k=await pw(w.localStore,T.query,!1).then(({documents:ae})=>T.view.ca(ae,k)));const L=N&&N.targetChanges.get(T.targetId),$=N&&N.targetMismatches.get(T.targetId)!=null,ee=T.view.applyChanges(k,w.isPrimaryClient,L,$);return ww(w,T.targetId,ee.Ta),ee.snapshot}(t,d,p,m);const r=await pw(t.localStore,e,!0),o=new QU(e,r.ls),a=o.ca(r.documents),l=Wl.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);ww(t,n,u.Ta);const h=new YU(e,n,o);return t.ma.set(e,h),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function tj(t,e){const n=Be(t),s=n.ma.get(e),i=n.fa.get(s.targetId);if(i.length>1)return n.fa.set(s.targetId,i.filter(r=>!Zh(r,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await jp(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),u0(n.remoteStore,s.targetId),Bp(n,s.targetId)}).catch(xm)):(Bp(n,s.targetId),await jp(n.localStore,s.targetId,!0))}async function m0(t,e){const n=Be(t);try{const s=await SU(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.ya.get(r);o&&(Tt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?Tt(o.Ra):i.removedDocuments.size>0&&(Tt(o.Ra),o.Ra=!1))}),await y0(n,s,e)}catch(s){await xm(s)}}function Ew(t,e,n){const s=Be(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ma.forEach((r,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Be(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.listeners)p.Q_(a)&&(u=!0)}),u&&Jm(l)}(s.eventManager,e),i.length&&s.Va.a_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function nj(t,e,n){const s=Be(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ya.get(e),r=i&&i.key;if(r){let o=new gt(he.comparator);o=o.insert(r,Jt.newNoDocument(r,ve.min()));const a=$e().add(r),l=new sd(ve.min(),new Map,new gt(qe),o,a);await m0(s,l),s.pa=s.pa.remove(r),s.ya.delete(e),e_(s)}else await jp(s.localStore,e,!1).then(()=>Bp(s,e,n)).catch(xm)}function Bp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.fa.get(e))t.ma.delete(s),n&&t.Va.Fa(s,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(s=>{t.wa.containsKey(s)||_0(t,s)})}function _0(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(u0(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),e_(t))}function ww(t,e,n){for(const s of n)s instanceof p0?(t.wa.addReference(s.key,e),sj(t,s)):s instanceof g0?(te("SyncEngine","Document no longer in limbo: "+s.key),t.wa.removeReference(s.key,e),t.wa.containsKey(s.key)||_0(t,s.key)):Ie()}function sj(t,e){const n=e.key,s=n.path.canonicalString();t.pa.get(n)||t.ga.has(s)||(te("SyncEngine","New document in limbo: "+n),t.ga.add(s),e_(t))}function e_(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new he(ct.fromString(e)),s=t.Da.next();t.ya.set(s,new XU(n)),t.pa=t.pa.insert(n,s),c0(t.remoteStore,new ui(vs(Jh(n.path)),s,"TargetPurposeLimboResolution",Dm._e))}}async function y0(t,e,n){const s=Be(t),i=[],r=[],o=[];s.ma.isEmpty()||(s.ma.forEach((a,l)=>{o.push(s.va(l,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const h=qm.Qi(l.targetId,u);r.push(h)}}))}),await Promise.all(o),s.Va.a_(i),await async function(l,u){const h=Be(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>V.forEach(u,p=>V.forEach(p.ki,m=>h.persistence.referenceDelegate.addReference(d,p.targetId,m)).next(()=>V.forEach(p.qi,m=>h.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))}catch(d){if(!Bl(d))throw d;te("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const m=h.ts.get(p),y=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(y);h.ts=h.ts.insert(p,w)}}}(s.localStore,r))}async function ij(t,e){const n=Be(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await r0(n.localStore,e);n.currentUser=e,function(r,o){r.ba.forEach(a=>{a.forEach(l=>{l.reject(new re(q.CANCELLED,o))})}),r.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await y0(n,s._s)}}function rj(t,e){const n=Be(t),s=n.ya.get(e);if(s&&s.Ra)return $e().add(s.key);{let i=$e();const r=n.fa.get(e);if(!r)return i;for(const o of r){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function oj(t){const e=Be(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=m0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nj.bind(null,e),e.Va.a_=GU.bind(null,e.eventManager),e.Va.Fa=KU.bind(null,e.eventManager),e}class Tw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=a0(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return AU(this.persistence,new IU,e.initialUser,this.serializer)}createPersistence(e){return new wU(Hm.jr,this.serializer)}createSharedClientState(e){return new OU}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aj{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ew(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ij.bind(null,this.syncEngine),await HU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zU}()}createDatastore(e){const n=a0(e.databaseInfo.databaseId),s=function(r){return new MU(r)}(e.databaseInfo);return function(r,o,a,l){return new VU(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new UU(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ew(this.syncEngine,n,0),function(){return mw.D()?new mw:new NU}())}createSyncEngine(e,n){return function(i,r,o,a,l,u,h){const d=new JU(i,r,o,a,l,u);return h&&(d.Ca=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=Be(n);te("RemoteStore","RemoteStore shutting down."),s.C_.add(5),await Hl(s),s.F_.shutdown(),s.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Hs("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lj{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Qt.UNAUTHENTICATED,this.clientId=t$.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{te("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(te("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(q.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=f0(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function vf(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await r0(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uj(t);te("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>yw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>yw(e.remoteStore,r)),t._onlineComponents=e}function cj(t){return t.name==="FirebaseError"?t.code===q.FAILED_PRECONDITION||t.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function uj(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await vf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!cj(n))throw n;Co("Error using user provided cache. Falling back to memory cache: "+n),await vf(t,new Tw)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await vf(t,new Tw);return t._offlineComponents}async function hj(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await bw(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await bw(t,new aj))),t._onlineComponents}async function qu(t){const e=await hj(t),n=e.eventManager;return n.onListen=ZU.bind(null,e.syncEngine),n.onUnlisten=tj.bind(null,e.syncEngine),n}function dj(t,e,n={}){const s=new _i;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,u){const h=new t_({next:p=>{o.enqueueAndForget(()=>Xm(r,d));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new re(q.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&l&&l.source==="server"?u.reject(new re(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new Zm(Jh(a.path),h,{includeMetadataChanges:!0,J_:!0});return Ym(r,d)}(await qu(t),t.asyncQueue,e,n,s)),s.promise}function fj(t,e,n={}){const s=new _i;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,u){const h=new t_({next:p=>{o.enqueueAndForget(()=>Xm(r,d)),p.fromCache&&l.source==="server"?u.reject(new re(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new Zm(a,h,{includeMetadataChanges:!0,J_:!0});return Ym(r,d)}(await qu(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pj(t,e,n){if(!n)throw new re(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gj(t,e,n,s){if(e===!0&&s===!0)throw new re(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cw(t){if(he.isDocumentKey(t))throw new re(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mj(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ie()}function yi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mj(t);throw new re(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new re(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=v0((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class n_{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Aw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Aw(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new GV;switch(s.type){case"firstParty":return new XV(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Iw.get(n);s&&(te("ComponentProvider","Removing Datastore"),Iw.delete(n),s.terminate())}(this),Promise.resolve()}}function _j(t,e,n,s={}){var i;const r=(t=yi(t,n_))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=Qt.MOCK_USER;else{a=FO(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new re(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Qt(u)}t._authCredentials=new KV(new DA(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new zl(this.firestore,e,this._query)}}class xi{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xi(this.firestore,e,this._key)}}class fo extends zl{constructor(e,n,s){super(e,n,Jh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xi(this.firestore,null,new he(e))}withConverter(e){return new fo(this.firestore,e,this._path)}}function yj(t,e,...n){if(t=As(t),pj("collection","path",e),t instanceof n_){const s=ct.fromString(e,...n);return Cw(s),new fo(t,null,s)}{if(!(t instanceof xi||t instanceof fo))throw new re(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ct.fromString(e,...n));return Cw(s),new fo(t.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vj{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new l0(this,"async_queue_retry"),this.iu=()=>{const n=yf();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=yf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=yf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new _i;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Bl(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(s=>{this.eu=s,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Hs("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.tu=!1,s))));return this.Ja=n,n}enqueueAfterDelay(e,n,s){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Qm.createAndSchedule(this,e,n,s,r=>this.au(r));return this.Xa.push(i),i}su(){this.eu&&Ie()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function Sw(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class _l extends n_{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new vj}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||w0(this),this._firestoreClient.terminate()}}function E0(t,e){const n=typeof t=="object"?t:Pb(),s=typeof t=="string"?t:e||"(default)",i=Sb(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=MO("firestore");r&&_j(i,...r)}return i}function s_(t){return t._firestoreClient||w0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function w0(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,u,h){return new u$(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,v0(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new lj(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zu(sn.fromBase64String(e))}catch(n){throw new re(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zu(sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return qe(this._lat,e._lat)||qe(this._long,e._long)}}const Ej=new RegExp("[~\\*/\\[\\]]");function wj(t,e,n){if(e.search(Ej)>=0)throw Rw(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new T0(...e.split("."))._internalPath}catch{throw Rw(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rw(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new re(q.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new xi(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(C0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Tj extends I0{data(){return super.data()}}function C0(t,e){return typeof e=="string"?wj(t,e):e instanceof T0?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bj{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Yh(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new b0(vt(e.latitude),vt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Lm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(pl(e));default:return null}}convertTimestamp(e){const n=Ai(e);return new vn(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ct.fromString(e);Tt(i0(s));const i=new gl(s.get(1),s.get(3)),r=new he(s.popFirst(5));return i.isEqual(n)||Hs(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class S0 extends I0{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new eu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(C0("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class eu extends S0{data(e={}){return super.data(e)}}class R0{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ba(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new eu(this._firestore,this._userDataWriter,s.key,s,new ba(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new eu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ba(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new eu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ba(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Ij(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ij(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(t){t=yi(t,xi);const e=yi(t.firestore,_l);return dj(s_(e),t._key).then(n=>k0(e,t,n))}class i_ extends bj{constructor(e){super(),this.firestore=e}convertBytes(e){return new zu(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xi(this.firestore,null,n)}}function Cj(t){t=yi(t,zl);const e=yi(t.firestore,_l),n=s_(e),s=new i_(e);return A0(t._query),fj(n,t._query).then(i=>new R0(e,s,t,i))}function r_(t,...e){var n,s,i;t=As(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Sw(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Sw(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,h;if(t instanceof xi)u=yi(t.firestore,_l),h=Jh(t._key.path),l={next:d=>{e[o]&&e[o](k0(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=yi(t,zl);u=yi(d.firestore,_l),h=d._query;const p=new i_(u);l={next:m=>{e[o]&&e[o](new R0(u,p,d,m))},error:e[o+1],complete:e[o+2]},A0(t._query)}return function(p,m,y,w){const T=new t_(w),A=new Zm(m,T,y);return p.asyncQueue.enqueueAndForget(async()=>Ym(await qu(p),A)),()=>{T.Na(),p.asyncQueue.enqueueAndForget(async()=>Xm(await qu(p),A))}}(s_(u),h,a,l)}function k0(t,e,n){const s=n.docs.get(e._key),i=new i_(t);return new S0(t,i,e._key,s,new ba(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Bo=i})(Ri),ws(new ts("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new _l(new QV(s.getProvider("auth-internal")),new ZV(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gl(u.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),On(KE,"4.4.0",e),On(KE,"4.4.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0="firebasestorage.googleapis.com",Aj="storageBucket",Sj=2*60*1e3,Rj=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Cs{constructor(e,n,s=0){super(Ef(e),`Firebase Storage: ${n} (${Ef(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Rs.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ef(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Is;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Is||(Is={}));function Ef(t){return"storage/"+t}function Pj(){const t="An unknown error occurred, please check the error payload for server response.";return new Rs(Is.UNKNOWN,t)}function kj(){return new Rs(Is.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Oj(){return new Rs(Is.CANCELED,"User canceled the upload/download.")}function Nj(t){return new Rs(Is.INVALID_URL,"Invalid URL '"+t+"'.")}function xj(t){return new Rs(Is.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Pw(t){return new Rs(Is.INVALID_ARGUMENT,t)}function N0(){return new Rs(Is.APP_DELETED,"The Firebase app was deleted.")}function Dj(t){return new Rs(Is.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Jn.makeFromUrl(e,n)}catch{return new Jn(e,"")}if(s.path==="")return s;throw xj(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${h}/b/${i}/o${p}`,"i"),y={bucket:1,path:3},w=n===O0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",A=new RegExp(`^https?://${w}/${i}/${T}`,"i"),k=[{regex:a,indices:l,postModify:r},{regex:m,indices:y,postModify:u},{regex:A,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<k.length;L++){const $=k[L],ee=$.regex.exec(e);if(ee){const ae=ee[$.indices.bucket];let Te=ee[$.indices.path];Te||(Te=""),s=new Jn(ae,Te),$.postModify(s);break}}if(s==null)throw Nj(e);return s}}class Mj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lj(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...T){u||(u=!0,e.apply(null,T))}function d(T){i=setTimeout(()=>{i=null,t(m,l())},T)}function p(){r&&clearTimeout(r)}function m(T,...A){if(u){p();return}if(T){p(),h.call(null,T,...A);return}if(l()||o){p(),h.call(null,T,...A);return}s<64&&(s*=2);let k;a===1?(a=2,k=0):k=(s+Math.random())*1e3,d(k)}let y=!1;function w(T){y||(y=!0,p(),!u&&(i!==null?(T||(a=2),clearTimeout(i),d(0)):T||(a=1)))}return d(0),r=setTimeout(()=>{o=!0,w(!0)},n),w}function Fj(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vj(t){return t!==void 0}function kw(t,e,n,s){if(s<e)throw Pw(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Pw(`Invalid value for '${t}'. Expected ${n} or less.`)}function $j(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Gu||(Gu={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uj(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jj{constructor(e,n,s,i,r,o,a,l,u,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Lc(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Gu.NO_ERROR,l=r.getStatus();if(!a||Uj(l,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===Gu.ABORT;s(!1,new Lc(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;s(!0,new Lc(u,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Vj(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Pj();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?N0():Oj();o(l)}else{const l=kj();o(l)}};this.canceled_?n(!1,new Lc(!1,null,!0)):this.backoffId_=Lj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Fj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Lc{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Bj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Wj(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Hj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function qj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function zj(t,e,n,s,i,r,o=!0){const a=$j(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return Hj(u,e),Bj(u,n),Wj(u,r),qj(u,s),new jj(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Kj(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n){this._service=e,n instanceof Jn?this._location=n:this._location=Jn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ku(e,n)}get root(){const e=new Jn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Kj(this._location.path)}get storage(){return this._service}get parent(){const e=Gj(this._location.path);if(e===null)return null;const n=new Jn(this._location.bucket,e);return new Ku(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Dj(e)}}function Ow(t,e){const n=e==null?void 0:e[Aj];return n==null?null:Jn.makeFromBucketSpec(n,t)}class Qj{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=O0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Sj,this._maxUploadRetryTime=Rj,this._requests=new Set,i!=null?this._bucket=Jn.makeFromBucketSpec(i,this._host):this._bucket=Ow(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jn.makeFromBucketSpec(this._url,e):this._bucket=Ow(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){kw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){kw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ku(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Mj(N0());{const o=zj(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Nw="@firebase/storage",xw="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yj="storage";function Xj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Qj(n,s,i,e,Ri)}function Jj(){ws(new ts(Yj,Xj,"PUBLIC").setMultipleInstances(!0)),On(Nw,xw,""),On(Nw,xw,"esm2017")}Jj();const wf=new WeakMap;function x0(t,e){return wf.has(e)||wf.set(e,t||{f:{},r:{},s:{},u:{}}),wf.get(e)}function D0(t,e,n,s){if(!t)return n;const[i,r]=M0(t);if(!i)return n;const o=x0(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function Zj(t,e,n,s){if(!t)return;const[i,r]=M0(t);if(!i)return;const o=x0(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(Et),a}function M0(t){return A1(t)||S1(t)?["f",t.path]:R1(t)?["r",t.toString()]:P1(t)?["s",t.toString()]:[]}const Tf=new WeakMap;function L0(t,e,n){const s=Ir();Tf.has(s)||Tf.set(s,new Map);const i=Tf.get(s),r=Zj(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):Et}function eB(t){if(!t.exists())return null;const e=t.val();return Pi(e)?Object.defineProperty(e,"id",{value:t.key}):{$value:e,id:t.key}}function ua(t,e){for(let n=0;n<t.length;n++)if(t[n].id===e)return n;return-1}const o_={reset:!1,serialize:eB,wait:!0};function tB(t,e,n,s,i){const r=Object.assign({},o_,i);let o=Et;function a(l){const u=r.serialize(l);t.value=u,n(u)}return r.once?PC(e).then(a).catch(s):o=kC(e,a,s),l=>{if(o(),l){const u=typeof l=="function"?l():null;t.value=u}}}function nB(t,e,n,s,i){const r=Object.assign({},o_,i);let o=r.wait?[]:t;r.wait||(t.value=[]);let a=Et,l=Et,u=Et,h=Et,d=Et;return r.once?PC(e).then(p=>{const m=[];p.forEach(y=>{m.push(r.serialize(y))}),n(t.value=m)}).catch(s):(a=kF(e,(p,m)=>{const y=Yt(o),w=m?ua(y,m)+1:0;y.splice(w,0,r.serialize(p))},s),u=xF(e,p=>{const m=Yt(o);m.splice(ua(m,p.key),1)},s),l=OF(e,p=>{const m=Yt(o);m.splice(ua(m,p.key),1,r.serialize(p))},s),h=NF(e,(p,m)=>{const y=Yt(o),w=ua(y,p.key),T=y.splice(w,1)[0],A=m?ua(y,m)+1:0;y.splice(A,0,T)},s),d=kC(e,()=>{const p=Yt(o);r.wait&&(t.value=p,o=t),n(p),d()},s)),p=>{if(d(),a(),u(),l(),h(),p){const m=typeof p=="function"?p():[];t.value=m}}}function sB(t,e={},n=!1){let s=Et;const i=Object.assign({},o_,e),r=Yt(t),o=i.target||wt();uI()&&(i.once=!0);const l=D0(r,i.ssrKey,o.value,Ir());o.value=l;let h=!(n?(l||[]).length>0:l!==void 0);const d=wt(),p=wt(!1),m=ar(),y=ch();let w=Et;function T(){const k=Yt(t),L=new Promise(($,ee)=>{if(s(i.reset),!k)return s=Et,$(null);p.value=h,h=!0,Array.isArray(o.value)?s=nB(o,k,$,ee,i):s=tB(o,k,$,ee,i)}).catch($=>{throw m.value===L&&(d.value=$),$}).finally(()=>{m.value===L&&(p.value=!1)});m.value=L}let A=Et;bt(t)&&(A=Hn(t,T)),T(),r&&(w=L0(m.value,r,i.ssrKey)),y&&(sg(N),wl()&&gg(()=>m.value));function N(k=i.reset){A(),w(),s(k)}return Object.defineProperties(o,{data:{get:()=>o},error:{get:()=>d},pending:{get:()=>p},promise:{get:()=>m},stop:{get:()=>N}})}const iB={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Wp(t,e,n,s){if(!I1(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const u=n[l];return a[u.path]=u.data(),a},{});function o(a,l,u,h){l=l||{};const[d,p]=h;Object.getOwnPropertyNames(a).forEach(m=>{const y=Object.getOwnPropertyDescriptor(a,m);y&&!y.enumerable&&Object.defineProperty(d,m,y)});for(const m in a){const y=a[m];if(y==null||y instanceof Date||y instanceof vn||y instanceof b0)d[m]=y;else if(xg(y)){const w=u+m;d[m]=w in n?l[m]:y.path,p[w]=y.converter?y:y.withConverter(s.converter)}else if(Array.isArray(y)){d[m]=Array(y.length);for(let w=0;w<y.length;w++){const T=y[w];T&&T.path in r&&(d[m][w]=r[T.path])}o(y,l[m]||d[m],u+m+".",[d[m],p])}else Pi(y)?(d[m]={},o(y,l[m],u+m+".",[d[m],p])):d[m]=y}}return o(t,e,"",i),i}const a_={reset:!1,wait:!0,maxRefDepth:2,converter:iB,snapshotOptions:{serverTimestamps:"estimate"}};function Qu(t){for(const e in t)t[e].unsub()}function Hp(t,e,n,s,i,r,o,a,l){const[u,h]=Wp(s.data(t.snapshotOptions),Ng(e,n),i,t);r.set(e,n,u),qp(t,e,n,i,h,r,o,a,l)}function rB({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let u=Et;return a.once?P0(t).then(h=>{h.exists()?Hp(a,e,n,h,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):u=r_(t,h=>{h.exists()?Hp(a,e,n,h,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{u(),Qu(l)}}function qp(t,e,n,s,i,r,o,a,l){const u=Object.keys(i);if(Object.keys(s).filter(w=>u.indexOf(w)<0).forEach(w=>{s[w].unsub(),delete s[w]}),!u.length||++o>t.maxRefDepth)return a(n);let d=0;const p=u.length,m=Object.create(null);function y(w){w in m&&++d>=p&&a(n)}u.forEach(w=>{const T=s[w],A=i[w],N=`${n}.${w}`;if(m[N]=!0,T)if(T.path!==A.path)T.unsub();else return;s[w]={data:()=>Ng(e,N),unsub:rB({ref:A,target:e,path:N,depth:o,ops:r,resolve:y.bind(null,N),reject:l},t),path:A.path}})}function oB(t,e,n,s,i,r){const o=Object.assign({},a_,r),{snapshotListenOptions:a,snapshotOptions:l,wait:u,once:h}=o,d="value";let p=wt(u?[]:t.value);u||n.set(t,d,[]);const m=s;let y,w=Et;const T=[],A={added:({newIndex:k,doc:L})=>{T.splice(k,0,Object.create(null));const $=T[k],[ee,ae]=Wp(L.data(l),void 0,$,o);n.add(Yt(p),k,ee),qp(o,p,`${d}.${k}`,$,ae,n,0,s.bind(null,L),i)},modified:({oldIndex:k,newIndex:L,doc:$})=>{const ee=Yt(p),ae=T[k],Te=ee[k],[de,Ae]=Wp($.data(l),Te,ae,o);T.splice(L,0,ae),n.remove(ee,k),n.add(ee,L,de),qp(o,p,`${d}.${L}`,ae,Ae,n,0,s,i)},removed:({oldIndex:k})=>{const L=Yt(p);n.remove(L,k),Qu(T.splice(k,1)[0])}};function N(k){const L=k.docChanges(a);if(!y&&L.length){y=!0;let $=0;const ee=L.length,ae=Object.create(null);for(let Te=0;Te<ee;Te++)ae[L[Te].doc.id]=!0;s=Te=>{Te&&Te.id in ae&&++$>=ee&&(u&&(n.set(t,d,Yt(p)),p=t),m(Yt(p)),s=Et)}}L.forEach($=>{A[$.type]($)}),L.length||(u&&(n.set(t,d,Yt(p)),p=t),s(Yt(p)))}return h?Cj(e).then(N).catch(i):w=r_(e,N,i),k=>{if(w(),k){const L=typeof k=="function"?k():[];n.set(t,d,L)}T.forEach(Qu)}}function aB(t,e,n,s,i,r){const o=Object.assign({},a_,r),a="value",l=Object.create(null);s=k1(s,()=>Ng(t,a));let u=Et;function h(d){d.exists()?Hp(o,t,a,d,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?P0(e).then(h).catch(i):u=r_(e,h,i),d=>{if(u(),d){const p=typeof d=="function"?d():null;n.set(t,a,p)}Qu(l)}}const Dw=Symbol();function lB(t,e){let n=Et;const s=Object.assign({},a_,e),i=Yt(t),r=s.target||wt();uI()&&(s.once=!0);const o=D0(i,s.ssrKey,Dw,Ir()),a=o!==Dw;a&&(r.value=o);let l=!a;const u=wt(!1),h=wt(),d=ar(),p=ch();let m=Et;function y(){let A=Yt(t);const N=new Promise((k,L)=>{if(n(s.reset),!A)return n=Et,k(null);u.value=l,l=!0,A.converter||(A=A.withConverter(s.converter)),n=(xg(A)?aB:oB)(r,A,cB,k,L,s)}).catch(k=>(d.value===N&&(h.value=k),Promise.reject(k))).finally(()=>{d.value===N&&(u.value=!1)});d.value=N}let w=Et;bt(t)&&(w=Hn(t,y)),y(),i&&(m=L0(d.value,i,s.ssrKey)),wl()&&gg(()=>d.value),p&&sg(T);function T(A=s.reset){w(),m(),n(A)}return Object.defineProperties(r,{error:{get:()=>h},data:{get:()=>r},pending:{get:()=>u},promise:{get:()=>d},stop:{get:()=>T}})}const cB={set:(t,e,n)=>T1(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function WW(t){return E0(Ir(t))}const ha=new WeakMap;function uB(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}const hB={bindName:"$databaseBind",unbindName:"$databaseUnbind"};function dB(t,e,n){const s=Object.assign({},hB,e),{bindName:i,unbindName:r}=s,o=t.config.globalProperties;o[r]=function(l,u){uB(l,ha.get(this),u),delete this.$firebaseRefs[l]},o[i]=function(l,u,h){const d=Object.assign({},s,h),p=dg(this.$data,l);ha.has(this)||ha.set(this,{});const m=ha.get(this);m[l]&&m[l](d.reset),e&&(e.bindName||(o.$rtdbBind=o[i]),e.unbindName||(o.$rtdbUnbind=o[r]));const y=Dg(n||Ir(),t).run(()=>lh()),{promise:w,stop:T}=t.runWithContext(()=>y.run(()=>sB(u,{target:p,...d}))),A=N=>{T(N),y.stop()};return m[l]=A,this.$firebaseRefs[l]=u.ref,w.value},t.mixin({beforeCreate(){this.$firebaseRefs=Object.create(null)},created(){let a=this.$options.firebase;if(typeof a=="function"&&(a=a.call(this)),!!a)for(const l in a)this[i](l,a[l],s)},beforeUnmount(){const a=ha.get(this);if(a)for(const l in a)a[l]();this.$firebaseRefs=null}})}function fB(t){return(e,n)=>dB(n,t,e)}const da=new WeakMap;function pB(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}const gB={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},mB=function(e,n,s){const i=Object.assign({},gB,n),{bindName:r,unbindName:o}=i,a=e.config.globalProperties;a[o]=function(u,h){pB(u,da.get(this),h),delete this.$firestoreRefs[u]},a[r]=function(u,h,d){const p=Object.assign({},i,d),m=dg(this.$data,u);da.has(this)||da.set(this,{});const y=da.get(this);y[u]&&y[u](p.reset);const w=Dg(s||Ir(),e).run(()=>lh()),{promise:T,stop:A}=e.runWithContext(()=>w.run(()=>lB(h,{target:m,...p}))),N=k=>{A(k),w.stop()};return y[u]=N,this.$firestoreRefs[u]=h,T.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:l}=this.$options,u=typeof l=="function"?l.call(this):l;if(u)for(const h in u)this[r](h,u[h],i)},beforeUnmount(){const l=da.get(this);if(l)for(const u in l)l[u]();this.$firestoreRefs=null}})};function _B(t){return(e,n)=>mB(n,t,e)}function yB(t){return EB({initialUser:t,dependencies:{popupRedirectResolver:qD,persistence:[nD,Hx,eI]}})}const vB=Symbol("VueFireAuth");function EB({dependencies:t,initialUser:e}){return(n,s)=>{const[i,r]=wB(n,s,e,t);D1(i,r)}}function wB(t,e,n,s){const i=Dg(t,e).run(()=>wt(n));N1.set(t,i);const r=Dx(t,s);return e.provide(vB,r),[i,r]}function TB(t,{firebaseApp:e,modules:n=[]}){t.provide(cI,e);for(const s of n)s(e,t)}const bB="modulepreload",IB=function(t){return"/i/"+t},Mw={},Qi=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=IB(o),o in Mw)return;Mw[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!s)for(let d=r.length-1;d>=0;d--){const p=r[d];if(p.href===o&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":bB,a||(h.as="script",h.crossOrigin=""),h.href=o,document.head.appendChild(h),a)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Gr=typeof window<"u";function CB(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Qe=Object.assign;function bf(t,e){const n={};for(const s in e){const i=e[s];n[s]=is(i)?i.map(t):t(i)}return n}const $a=()=>{},is=Array.isArray,AB=/\/$/,SB=t=>t.replace(AB,"");function If(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=OB(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function RB(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Lw(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function PB(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Oo(e.matched[s],n.matched[i])&&F0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Oo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function F0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!kB(t[n],e[n]))return!1;return!0}function kB(t,e){return is(t)?Fw(t,e):is(e)?Fw(e,t):t===e}function Fw(t,e){return is(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function OB(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var yl;(function(t){t.pop="pop",t.push="push"})(yl||(yl={}));var Ua;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ua||(Ua={}));function NB(t){if(!t)if(Gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),SB(t)}const xB=/^[^#]+#/;function DB(t,e){return t.replace(xB,"#")+e}function MB(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const rd=()=>({left:window.pageXOffset,top:window.pageYOffset});function LB(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=MB(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Vw(t,e){return(history.state?history.state.position-e:-1)+t}const zp=new Map;function FB(t,e){zp.set(t,e)}function VB(t){const e=zp.get(t);return zp.delete(t),e}let $B=()=>location.protocol+"//"+location.host;function V0(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Lw(l,"")}return Lw(n,t)+s+i}function UB(t,e,n,s){let i=[],r=[],o=null;const a=({state:p})=>{const m=V0(t,location),y=n.value,w=e.value;let T=0;if(p){if(n.value=m,e.value=p,o&&o===y){o=null;return}T=w?p.position-w.position:0}else s(m);i.forEach(A=>{A(n.value,y,{delta:T,type:yl.pop,direction:T?T>0?Ua.forward:Ua.back:Ua.unknown})})};function l(){o=n.value}function u(p){i.push(p);const m=()=>{const y=i.indexOf(p);y>-1&&i.splice(y,1)};return r.push(m),m}function h(){const{history:p}=window;p.state&&p.replaceState(Qe({},p.state,{scroll:rd()}),"")}function d(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function $w(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?rd():null}}function jB(t){const{history:e,location:n}=window,s={value:V0(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:$B()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),i.value=u}catch(m){console.error(m),n[h?"replace":"assign"](p)}}function o(l,u){const h=Qe({},e.state,$w(i.value.back,l,i.value.forward,!0),u,{position:i.value.position});r(l,h,!0),s.value=l}function a(l,u){const h=Qe({},i.value,e.state,{forward:l,scroll:rd()});r(h.current,h,!0);const d=Qe({},$w(s.value,l,null),{position:h.position+1},u);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function BB(t){t=NB(t);const e=jB(t),n=UB(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Qe({location:"",base:t,go:s,createHref:DB.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function WB(t){return typeof t=="string"||t&&typeof t=="object"}function $0(t){return typeof t=="string"||typeof t=="symbol"}const Zs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},U0=Symbol("");var Uw;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Uw||(Uw={}));function No(t,e){return Qe(new Error,{type:t,[U0]:!0},e)}function Ns(t,e){return t instanceof Error&&U0 in t&&(e==null||!!(t.type&e))}const jw="[^/]+?",HB={sensitive:!1,strict:!1,start:!0,end:!0},qB=/[.+*?^${}()[\]/\\]/g;function zB(t,e){const n=Qe({},HB,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let d=0;d<u.length;d++){const p=u[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(i+="/"),i+=p.value.replace(qB,"\\$&"),m+=40;else if(p.type===1){const{value:y,repeatable:w,optional:T,regexp:A}=p;r.push({name:y,repeatable:w,optional:T});const N=A||jw;if(N!==jw){m+=10;try{new RegExp(`(${N})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${y}" (${N}): `+L.message)}}let k=w?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(k=T&&u.length<2?`(?:/${k})`:"/"+k),T&&(k+="?"),i+=k,m+=20,T&&(m+=-8),w&&(m+=-20),N===".*"&&(m+=-50)}h.push(m)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const m=h[p]||"",y=r[p-1];d[y.name]=m&&y.repeatable?m.split("/"):m}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const m of p)if(m.type===0)h+=m.value;else if(m.type===1){const{value:y,repeatable:w,optional:T}=m,A=y in u?u[y]:"";if(is(A)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const N=is(A)?A.join("/"):A;if(!N)if(T)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);h+=N}}return h||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function GB(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function KB(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=GB(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Bw(s))return 1;if(Bw(i))return-1}return i.length-s.length}function Bw(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const QB={type:0,value:""},YB=/[a-zA-Z0-9_]/;function XB(t){if(!t)return[[]];if(t==="/")return[[QB]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,u="",h="";function d(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:YB.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),i}function JB(t,e,n){const s=zB(XB(t.path),n),i=Qe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function ZB(t,e){const n=[],s=new Map;e=qw({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,d,p){const m=!p,y=e4(h);y.aliasOf=p&&p.record;const w=qw(e,h),T=[y];if("alias"in h){const k=typeof h.alias=="string"?[h.alias]:h.alias;for(const L of k)T.push(Qe({},y,{components:p?p.record.components:y.components,path:L,aliasOf:p?p.record:y}))}let A,N;for(const k of T){const{path:L}=k;if(d&&L[0]!=="/"){const $=d.record.path,ee=$[$.length-1]==="/"?"":"/";k.path=d.record.path+(L&&ee+L)}if(A=JB(k,d,w),p?p.alias.push(A):(N=N||A,N!==A&&N.alias.push(A),m&&h.name&&!Hw(A)&&o(h.name)),y.children){const $=y.children;for(let ee=0;ee<$.length;ee++)r($[ee],A,p&&p.children[ee])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return N?()=>{o(N)}:$a}function o(h){if($0(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){let d=0;for(;d<n.length&&KB(h,n[d])>=0&&(h.record.path!==n[d].record.path||!j0(h,n[d]));)d++;n.splice(d,0,h),h.record.name&&!Hw(h)&&s.set(h.record.name,h)}function u(h,d){let p,m={},y,w;if("name"in h&&h.name){if(p=s.get(h.name),!p)throw No(1,{location:h});w=p.record.name,m=Qe(Ww(d.params,p.keys.filter(N=>!N.optional).map(N=>N.name)),h.params&&Ww(h.params,p.keys.map(N=>N.name))),y=p.stringify(m)}else if("path"in h)y=h.path,p=n.find(N=>N.re.test(y)),p&&(m=p.parse(y),w=p.record.name);else{if(p=d.name?s.get(d.name):n.find(N=>N.re.test(d.path)),!p)throw No(1,{location:h,currentLocation:d});w=p.record.name,m=Qe({},d.params,h.params),y=p.stringify(m)}const T=[];let A=p;for(;A;)T.unshift(A.record),A=A.parent;return{name:w,path:y,params:m,matched:T,meta:n4(T)}}return t.forEach(h=>r(h)),{addRoute:r,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ww(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function e4(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:t4(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function t4(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Hw(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function n4(t){return t.reduce((e,n)=>Qe(e,n.meta),{})}function qw(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function j0(t,e){return e.children.some(n=>n===t||j0(t,n))}const B0=/#/g,s4=/&/g,i4=/\//g,r4=/=/g,o4=/\?/g,W0=/\+/g,a4=/%5B/g,l4=/%5D/g,H0=/%5E/g,c4=/%60/g,q0=/%7B/g,u4=/%7C/g,z0=/%7D/g,h4=/%20/g;function l_(t){return encodeURI(""+t).replace(u4,"|").replace(a4,"[").replace(l4,"]")}function d4(t){return l_(t).replace(q0,"{").replace(z0,"}").replace(H0,"^")}function Gp(t){return l_(t).replace(W0,"%2B").replace(h4,"+").replace(B0,"%23").replace(s4,"%26").replace(c4,"`").replace(q0,"{").replace(z0,"}").replace(H0,"^")}function f4(t){return Gp(t).replace(r4,"%3D")}function p4(t){return l_(t).replace(B0,"%23").replace(o4,"%3F")}function g4(t){return t==null?"":p4(t).replace(i4,"%2F")}function Yu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function m4(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(W0," "),o=r.indexOf("="),a=Yu(o<0?r:r.slice(0,o)),l=o<0?null:Yu(r.slice(o+1));if(a in e){let u=e[a];is(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function zw(t){let e="";for(let n in t){const s=t[n];if(n=f4(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(is(s)?s.map(r=>r&&Gp(r)):[s&&Gp(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function _4(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=is(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const y4=Symbol(""),Gw=Symbol(""),od=Symbol(""),c_=Symbol(""),Kp=Symbol("");function fa(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function si(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(No(4,{from:n,to:e})):d instanceof Error?a(d):WB(d)?a(No(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},u=t.call(s&&s.instances[i],e,n,l);let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(d=>a(d))})}function Cf(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(v4(a)){const u=(a.__vccOpts||a)[e];u&&i.push(si(u,n,s,r,o))}else{let l=a();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const h=CB(u)?u.default:u;r.components[o]=h;const p=(h.__vccOpts||h)[e];return p&&si(p,n,s,r,o)()}))}}return i}function v4(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Kw(t){const e=kn(od),n=kn(c_),s=pn(()=>e.resolve(Vt(t.to))),i=pn(()=>{const{matched:l}=s.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(Oo.bind(null,h));if(p>-1)return p;const m=Qw(l[u-2]);return u>1&&Qw(h)===m&&d[d.length-1].path!==m?d.findIndex(Oo.bind(null,l[u-2])):p}),r=pn(()=>i.value>-1&&b4(n.params,s.value.params)),o=pn(()=>i.value>-1&&i.value===n.matched.length-1&&F0(n.params,s.value.params));function a(l={}){return T4(l)?e[Vt(t.replace)?"replace":"push"](Vt(t.to)).catch($a):Promise.resolve()}return{route:s,href:pn(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const E4=zT({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kw,setup(t,{slots:e}){const n=hh(Kw(t)),{options:s}=kn(od),i=pn(()=>({[Yw(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yw(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:db("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),w4=E4;function T4(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function b4(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!is(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Qw(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yw=(t,e,n)=>t??e??n,I4=zT({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=kn(Kp),i=pn(()=>t.route||s.value),r=kn(Gw,0),o=pn(()=>{let u=Vt(r);const{matched:h}=i.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=pn(()=>i.value.matched[o.value]);Hc(Gw,pn(()=>o.value+1)),Hc(y4,a),Hc(Kp,i);const l=wt();return Hn(()=>[l.value,a.value,t.name],([u,h,d],[p,m,y])=>{h&&(h.instances[d]=u,m&&m!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!Oo(h,m)||!p)&&(h.enterCallbacks[d]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=i.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return Xw(n.default,{Component:p,route:u});const m=d.props[h],y=m?m===!0?u.params:typeof m=="function"?m(u):m:null,T=db(p,Qe({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Xw(n.default,{Component:T,route:u})||T}}});function Xw(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const C4=I4;function A4(t){const e=ZB(t.routes,t),n=t.parseQuery||m4,s=t.stringifyQuery||zw,i=t.history,r=fa(),o=fa(),a=fa(),l=ar(Zs);let u=Zs;Gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=bf.bind(null,O=>""+O),d=bf.bind(null,g4),p=bf.bind(null,Yu);function m(O,X){let H,se;return $0(O)?(H=e.getRecordMatcher(O),se=X):se=O,e.addRoute(se,H)}function y(O){const X=e.getRecordMatcher(O);X&&e.removeRoute(X)}function w(){return e.getRoutes().map(O=>O.record)}function T(O){return!!e.getRecordMatcher(O)}function A(O,X){if(X=Qe({},X||l.value),typeof O=="string"){const C=If(n,O,X.path),P=e.resolve({path:C.path},X),x=i.createHref(C.fullPath);return Qe(C,P,{params:p(P.params),hash:Yu(C.hash),redirectedFrom:void 0,href:x})}let H;if("path"in O)H=Qe({},O,{path:If(n,O.path,X.path).path});else{const C=Qe({},O.params);for(const P in C)C[P]==null&&delete C[P];H=Qe({},O,{params:d(C)}),X.params=d(X.params)}const se=e.resolve(H,X),Oe=O.hash||"";se.params=h(p(se.params));const v=RB(s,Qe({},O,{hash:d4(Oe),path:se.path})),E=i.createHref(v);return Qe({fullPath:v,hash:Oe,query:s===zw?_4(O.query):O.query||{}},se,{redirectedFrom:void 0,href:E})}function N(O){return typeof O=="string"?If(n,O,l.value.path):Qe({},O)}function k(O,X){if(u!==O)return No(8,{from:X,to:O})}function L(O){return ae(O)}function $(O){return L(Qe(N(O),{replace:!0}))}function ee(O){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:H}=X;let se=typeof H=="function"?H(O):H;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=N(se):{path:se},se.params={}),Qe({query:O.query,hash:O.hash,params:"path"in se?{}:O.params},se)}}function ae(O,X){const H=u=A(O),se=l.value,Oe=O.state,v=O.force,E=O.replace===!0,C=ee(H);if(C)return ae(Qe(N(C),{state:typeof C=="object"?Qe({},Oe,C.state):Oe,force:v,replace:E}),X||H);const P=H;P.redirectedFrom=X;let x;return!v&&PB(s,se,H)&&(x=No(16,{to:P,from:se}),Lt(se,se,!0,!1)),(x?Promise.resolve(x):Ae(P,se)).catch(M=>Ns(M)?Ns(M,2)?M:Ct(M):S(M,P,se)).then(M=>{if(M){if(Ns(M,2))return ae(Qe({replace:E},N(M.to),{state:typeof M.to=="object"?Qe({},Oe,M.to.state):Oe,force:v}),X||P)}else M=rn(P,se,!0,E,Oe);return at(P,se,M),M})}function Te(O,X){const H=k(O,X);return H?Promise.reject(H):Promise.resolve()}function de(O){const X=De.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(O):O()}function Ae(O,X){let H;const[se,Oe,v]=S4(O,X);H=Cf(se.reverse(),"beforeRouteLeave",O,X);for(const C of se)C.leaveGuards.forEach(P=>{H.push(si(P,O,X))});const E=Te.bind(null,O,X);return H.push(E),Y(H).then(()=>{H=[];for(const C of r.list())H.push(si(C,O,X));return H.push(E),Y(H)}).then(()=>{H=Cf(Oe,"beforeRouteUpdate",O,X);for(const C of Oe)C.updateGuards.forEach(P=>{H.push(si(P,O,X))});return H.push(E),Y(H)}).then(()=>{H=[];for(const C of v)if(C.beforeEnter)if(is(C.beforeEnter))for(const P of C.beforeEnter)H.push(si(P,O,X));else H.push(si(C.beforeEnter,O,X));return H.push(E),Y(H)}).then(()=>(O.matched.forEach(C=>C.enterCallbacks={}),H=Cf(v,"beforeRouteEnter",O,X),H.push(E),Y(H))).then(()=>{H=[];for(const C of o.list())H.push(si(C,O,X));return H.push(E),Y(H)}).catch(C=>Ns(C,8)?C:Promise.reject(C))}function at(O,X,H){a.list().forEach(se=>de(()=>se(O,X,H)))}function rn(O,X,H,se,Oe){const v=k(O,X);if(v)return v;const E=X===Zs,C=Gr?history.state:{};H&&(se||E?i.replace(O.fullPath,Qe({scroll:E&&C&&C.scroll},Oe)):i.push(O.fullPath,Oe)),l.value=O,Lt(O,X,H,E),Ct()}let dt;function Dn(){dt||(dt=i.listen((O,X,H)=>{if(!Ft.listening)return;const se=A(O),Oe=ee(se);if(Oe){ae(Qe(Oe,{replace:!0}),se).catch($a);return}u=se;const v=l.value;Gr&&FB(Vw(v.fullPath,H.delta),rd()),Ae(se,v).catch(E=>Ns(E,12)?E:Ns(E,2)?(ae(E.to,se).then(C=>{Ns(C,20)&&!H.delta&&H.type===yl.pop&&i.go(-1,!1)}).catch($a),Promise.reject()):(H.delta&&i.go(-H.delta,!1),S(E,se,v))).then(E=>{E=E||rn(se,v,!1),E&&(H.delta&&!Ns(E,8)?i.go(-H.delta,!1):H.type===yl.pop&&Ns(E,20)&&i.go(-1,!1)),at(se,v,E)}).catch($a)}))}let Gt=fa(),xe=fa(),Ee;function S(O,X,H){Ct(O);const se=xe.list();return se.length?se.forEach(Oe=>Oe(O,X,H)):console.error(O),Promise.reject(O)}function It(){return Ee&&l.value!==Zs?Promise.resolve():new Promise((O,X)=>{Gt.add([O,X])})}function Ct(O){return Ee||(Ee=!O,Dn(),Gt.list().forEach(([X,H])=>O?H(O):X()),Gt.reset()),O}function Lt(O,X,H,se){const{scrollBehavior:Oe}=t;if(!Gr||!Oe)return Promise.resolve();const v=!H&&VB(Vw(O.fullPath,0))||(se||!H)&&history.state&&history.state.scroll||null;return fh().then(()=>Oe(O,X,v)).then(E=>E&&LB(E)).catch(E=>S(E,O,X))}const He=O=>i.go(O);let mt;const De=new Set,Ft={currentRoute:l,listening:!0,addRoute:m,removeRoute:y,hasRoute:T,getRoutes:w,resolve:A,options:t,push:L,replace:$,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:xe.add,isReady:It,install(O){const X=this;O.component("RouterLink",w4),O.component("RouterView",C4),O.config.globalProperties.$router=X,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Vt(l)}),Gr&&!mt&&l.value===Zs&&(mt=!0,L(i.location).catch(Oe=>{}));const H={};for(const Oe in Zs)Object.defineProperty(H,Oe,{get:()=>l.value[Oe],enumerable:!0});O.provide(od,X),O.provide(c_,kT(H)),O.provide(Kp,l);const se=O.unmount;De.add(O),O.unmount=function(){De.delete(O),De.size<1&&(u=Zs,dt&&dt(),dt=null,l.value=Zs,mt=!1,Ee=!1),se()}}};function Y(O){return O.reduce((X,H)=>X.then(()=>de(H)),Promise.resolve())}return Ft}function S4(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(u=>Oo(u,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Oo(u,l))||i.push(l))}return[n,s,i]}function R4(){return kn(od)}function HW(){return kn(c_)}const P4=[{path:"/",name:"event",component:()=>Qi(()=>import("./Events-vNmMsn6H.js"),__vite__mapDeps([0,1,2,3,4]))},{path:"/event/:id",name:"event-details",component:()=>Qi(()=>import("./EventDetails-ubuL1ids.js"),__vite__mapDeps([5,3,1]))},{path:"/events/map",name:"event-map",component:()=>Qi(()=>import("./Map-GA43lL6l.js"),__vite__mapDeps([6,2,1,4]))},{path:"/profile",name:"profile",component:()=>Qi(()=>import("./Profile-GD3Cjh6z.js"),__vite__mapDeps([7,1,2,3])),meta:{requiresAuth:!0}},{path:"/login",name:"login",component:()=>Qi(()=>import("./Login-ULJf69zy.js"),__vite__mapDeps([])),meta:{requiresAuth:!1}},{path:"/verify",name:"verify",component:()=>Qi(()=>import("./Verify-ga2vUPzQ.js"),__vite__mapDeps([])),meta:{requiresAuth:!1}},{path:"/Export",name:"Export",component:()=>Qi(()=>import("./Export-BzYoz8af.js"),__vite__mapDeps([])),meta:{requiresAuth:!1}}],G0=A4({history:BB(),routes:P4});G0.beforeEach((t,e,n)=>{const s=localStorage.getItem("token");t.meta.requiresAuth&&!s?n("/login"):!t.meta.requiresAuth&&s&&t.path==="/login"?n("/"):n()});const Jw=t=>{let e=!1,n;return()=>(e||(e=!0,n=t()),n)};class Qp{static isServer(){return typeof document>"u"}}function k4(t){const e=document.createElement("SCRIPT");if(typeof t!="object")throw new Error("options should  be an object");Array.prototype.isPrototypeOf(t.libraries)&&(t.libraries=t.libraries.join(",")),t.v||(t.v=3.47),t.callback="vueGoogleMapsInit";let s="https://maps.googleapis.com/maps/api/js?"+Object.keys(t).map(i=>encodeURIComponent(i)+"="+encodeURIComponent(t[i])).join("&");return e.setAttribute("src",s),e.setAttribute("async",""),e.setAttribute("defer",""),e}let Zw=!1;function O4(t){if(!Qp.isServer()){if(Zw)throw new Error("You already started the loading of google maps");{Zw=!0;const e=k4(t);document.head.appendChild(e)}}}const K0=(t,e,n)=>{for(let s of n){const i=`on${s.charAt(0).toUpperCase()}${s.slice(1)}`.replace(/[-_]+(.)?/g,(r,o)=>o?o.toUpperCase():"");t.$props[i]||t.$attrs[i]?e.addListener(s,r=>{t.$emit(s,r)}):(t.$gmapOptions.autobindAllEvents||t.$attrs[s])&&e.addListener(s,r=>{t.$emit(s,r)})}};function Q0(t,e,n,s=!1){let i=!1;function r(){i||(i=!0,t.$nextTick(()=>{i=!1,n()}))}for(let o of e)t.$watch(o,r,{immediate:s})}class eT{static capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}}function Xu(t,e){return Object.keys(e).reduce((n,s)=>(t[s]!==void 0&&(n[s]=t[s]),n),{})}function u_(t,e,n){for(let s in n){let{twoWay:i,type:r,trackProperties:o,noBind:a}=n[s];if(a)continue;const l="set"+eT.capitalizeFirstLetter(s),u="get"+eT.capitalizeFirstLetter(s),h=s.toLowerCase()+"_changed",d=t[s];if(typeof e[l]>"u")throw new Error(`${l} is not a method of (the Maps object corresponding to) ${t.$options._componentTag}`);r!==Object||!o?t.$watch(s,()=>{const p=t[s];e[l](p)},{immediate:typeof d<"u",deep:r===Object}):Q0(t,o.map(p=>`${s}.${p}`),()=>{e[l](t[s])},t[s]!==void 0),i&&(t.$gmapOptions.autobindAllEvents||t.$attrs[h])&&e.addListener(h,()=>{t.$emit(h,e[u]())})}}const N4={inject:{$mapPromise:{default:"abcdef"}},provide(){return this.$mapPromise.then(t=>{this.$map=t}),{}}};function Di(t){const{mappedProps:e,name:n,ctr:s,ctrArgs:i,events:r,beforeCreate:o,afterCreate:a,props:l,...u}=t,h=`$${n}Promise`,d=`$${n}Object`;return x4(!(u.props instanceof Array),"`props` should be an object, not Array"),{...typeof GENERATE_DOC<"u"?{$vgmOptions:t}:{},mixins:[N4],props:{...l,...h_(e)},render(){return""},provide(){const p=this.$mapPromise.then(m=>{this.$map=m;const y={...this.options,map:m,...Xu(this,e)};if(delete y.options,o){const w=o.bind(this)(y);if(w instanceof Promise)return w.then(()=>({options:y}))}return{options:y}}).then(({options:m})=>{const y=s();return this[d]=i?new(Function.prototype.bind.call(y,null,...i(m,Xu(this,l||{})))):new y(m),u_(this,this[d],e),K0(this,this[d],r),a&&a.bind(this)(this[d]),this[d]});return this[h]=p,{[h]:p}},unmounted(){this[d]&&this[d].setMap&&this[d].setMap(null)},...u}}function x4(t,e){if(!t)throw new Error(e)}function h_(t){return Object.entries(t).map(([e,n])=>{const s={};return"type"in n&&(s.type=n.type),"default"in n&&(s.default=n.default),"required"in n&&(s.required=n.required),[e,s]}).reduce((e,[n,s])=>(e[n]=s,e),{})}const D4={draggable:{type:Boolean},editable:{type:Boolean},options:{twoWay:!1,type:Object},path:{type:Array,twoWay:!0}},M4=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],L4=Di({mappedProps:D4,props:{deepWatch:{type:Boolean,default:!1}},events:M4,name:"polyline",ctr:()=>google.maps.Polyline,afterCreate(){let t=()=>{};this.$watch("path",e=>{if(e){t(),this.$polylineObject.setPath(e);const n=this.$polylineObject.getPath(),s=[],i=()=>{this.$emit("path_changed",this.$polylineObject.getPath())};s.push([n,n.addListener("insert_at",i)]),s.push([n,n.addListener("remove_at",i)]),s.push([n,n.addListener("set_at",i)]),t=()=>{s.map(([r,o])=>google.maps.event.removeListener(o))}}},{deep:this.deepWatch,immediate:!0})}}),F4={draggable:{type:Boolean},editable:{type:Boolean},options:{type:Object},path:{type:Array,twoWay:!0,noBind:!0},paths:{type:Array,twoWay:!0,noBind:!0}},V4=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],$4=Di({props:{deepWatch:{type:Boolean,default:!1}},events:V4,mappedProps:F4,name:"polygon",ctr:()=>google.maps.Polygon,beforeCreate(t){t.path||delete t.path,t.paths||delete t.paths},afterCreate(t){let e=()=>{};this.$watch("paths",n=>{if(n){e(),t.setPaths(n);const s=()=>{this.$emit("paths_changed",t.getPaths())},i=[],r=t.getPaths();for(let o=0;o<r.getLength();o++){let a=r.getAt(o);i.push([a,a.addListener("insert_at",s)]),i.push([a,a.addListener("remove_at",s)]),i.push([a,a.addListener("set_at",s)])}i.push([r,r.addListener("insert_at",s)]),i.push([r,r.addListener("remove_at",s)]),i.push([r,r.addListener("set_at",s)]),e=()=>{i.map(([o,a])=>google.maps.event.removeListener(a))}}},{deep:this.deepWatch,immediate:!0}),this.$watch("path",n=>{if(n){e(),t.setPaths(n);const s=t.getPath(),i=[],r=()=>{this.$emit("path_changed",t.getPath())};i.push([s,s.addListener("insert_at",r)]),i.push([s,s.addListener("remove_at",r)]),i.push([s,s.addListener("set_at",r)]),e=()=>{i.map(([o,a])=>google.maps.event.removeListener(a))}}},{deep:this.deepWatch,immediate:!0})}}),U4={center:{type:Object,twoWay:!0,required:!0},radius:{type:Number,twoWay:!0},draggable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},options:{type:Object,twoWay:!1}},j4=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],B4=Di({mappedProps:U4,name:"circle",ctr:()=>google.maps.Circle,events:j4}),W4={bounds:{type:Object,twoWay:!0},draggable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},options:{type:Object,twoWay:!1}},H4=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],q4=Di({mappedProps:W4,name:"rectangle",ctr:()=>google.maps.Rectangle,events:H4}),qo=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},z4={animation:{twoWay:!0,type:Number},attribution:{type:Object},clickable:{type:Boolean,twoWay:!0,default:!0},cursor:{type:String,twoWay:!0},draggable:{type:Boolean,twoWay:!0,default:!1},icon:{twoWay:!0},label:{},opacity:{type:Number,default:1},options:{type:Object},place:{type:Object},position:{type:Object,twoWay:!0},shape:{type:Object,twoWay:!0},title:{type:String,twoWay:!0},zIndex:{type:Number,twoWay:!0},visible:{twoWay:!0,default:!0}},Af=["click","rightclick","dblclick","drag","dragstart","dragend","mouseup","mousedown","mouseover","mouseout"],G4=Di({mappedProps:z4,events:Af,name:"marker",ctr:()=>google.maps.Marker,inject:{$clusterPromise:{default:null}},emits:Af,unmounted(){this.$markerObject&&(this.$clusterObject?this.$clusterObject.removeMarker(this.$markerObject,!0):this.$markerObject.setMap(null))},beforeCreate(t){return this.$clusterPromise&&(t.map=null),this.$clusterPromise},afterCreate(t){Af.forEach(e=>{t.addListener(e,n=>{this.$emit(e,n)})}),this.$clusterPromise&&this.$clusterPromise.then(e=>{this.$clusterObject=e,e.addMarker(t)})}});function K4(t,e,n,s,i,r){return fn(),jn("div",{onClick:e[0]||(e[0]=()=>{console.log("sdfsd")})},[go(t.$slots,"default")])}const Q4=qo(G4,[["render",K4]]);var qW=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Y4(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var X4=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var s,i,r;if(Array.isArray(e)){if(s=e.length,s!=n.length)return!1;for(i=s;i--!==0;)if(!t(e[i],n[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(r=Object.keys(e),s=r.length,s!==Object.keys(n).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,r[i]))return!1;for(i=s;i--!==0;){var o=r[i];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n};const tT=Y4(X4),nT=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],Sf=1,pa=8;class d_{static from(e){if(!(e instanceof ArrayBuffer))throw new Error("Data must be an instance of ArrayBuffer.");const[n,s]=new Uint8Array(e,0,2);if(n!==219)throw new Error("Data does not appear to be in a KDBush format.");const i=s>>4;if(i!==Sf)throw new Error(`Got v${i} data when expected v${Sf}.`);const r=nT[s&15];if(!r)throw new Error("Unrecognized array type.");const[o]=new Uint16Array(e,2,1),[a]=new Uint32Array(e,4,1);return new d_(a,o,r,e)}constructor(e,n=64,s=Float64Array,i){if(isNaN(e)||e<0)throw new Error(`Unpexpected numItems value: ${e}.`);this.numItems=+e,this.nodeSize=Math.min(Math.max(+n,2),65535),this.ArrayType=s,this.IndexArrayType=e<65536?Uint16Array:Uint32Array;const r=nT.indexOf(this.ArrayType),o=e*2*this.ArrayType.BYTES_PER_ELEMENT,a=e*this.IndexArrayType.BYTES_PER_ELEMENT,l=(8-a%8)%8;if(r<0)throw new Error(`Unexpected typed array class: ${s}.`);i&&i instanceof ArrayBuffer?(this.data=i,this.ids=new this.IndexArrayType(this.data,pa,e),this.coords=new this.ArrayType(this.data,pa+a+l,e*2),this._pos=e*2,this._finished=!0):(this.data=new ArrayBuffer(pa+o+a+l),this.ids=new this.IndexArrayType(this.data,pa,e),this.coords=new this.ArrayType(this.data,pa+a+l,e*2),this._pos=0,this._finished=!1,new Uint8Array(this.data,0,2).set([219,(Sf<<4)+r]),new Uint16Array(this.data,2,1)[0]=n,new Uint32Array(this.data,4,1)[0]=e)}add(e,n){const s=this._pos>>1;return this.ids[s]=s,this.coords[this._pos++]=e,this.coords[this._pos++]=n,s}finish(){const e=this._pos>>1;if(e!==this.numItems)throw new Error(`Added ${e} items when expected ${this.numItems}.`);return Yp(this.ids,this.coords,this.nodeSize,0,this.numItems-1,0),this._finished=!0,this}range(e,n,s,i){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");const{ids:r,coords:o,nodeSize:a}=this,l=[0,r.length-1,0],u=[];for(;l.length;){const h=l.pop()||0,d=l.pop()||0,p=l.pop()||0;if(d-p<=a){for(let T=p;T<=d;T++){const A=o[2*T],N=o[2*T+1];A>=e&&A<=s&&N>=n&&N<=i&&u.push(r[T])}continue}const m=p+d>>1,y=o[2*m],w=o[2*m+1];y>=e&&y<=s&&w>=n&&w<=i&&u.push(r[m]),(h===0?e<=y:n<=w)&&(l.push(p),l.push(m-1),l.push(1-h)),(h===0?s>=y:i>=w)&&(l.push(m+1),l.push(d),l.push(1-h))}return u}within(e,n,s){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");const{ids:i,coords:r,nodeSize:o}=this,a=[0,i.length-1,0],l=[],u=s*s;for(;a.length;){const h=a.pop()||0,d=a.pop()||0,p=a.pop()||0;if(d-p<=o){for(let T=p;T<=d;T++)sT(r[2*T],r[2*T+1],e,n)<=u&&l.push(i[T]);continue}const m=p+d>>1,y=r[2*m],w=r[2*m+1];sT(y,w,e,n)<=u&&l.push(i[m]),(h===0?e-s<=y:n-s<=w)&&(a.push(p),a.push(m-1),a.push(1-h)),(h===0?e+s>=y:n+s>=w)&&(a.push(m+1),a.push(d),a.push(1-h))}return l}}function Yp(t,e,n,s,i,r){if(i-s<=n)return;const o=s+i>>1;Y0(t,e,o,s,i,r),Yp(t,e,n,s,o-1,1-r),Yp(t,e,n,o+1,i,1-r)}function Y0(t,e,n,s,i,r){for(;i>s;){if(i-s>600){const u=i-s+1,h=n-s+1,d=Math.log(u),p=.5*Math.exp(2*d/3),m=.5*Math.sqrt(d*p*(u-p)/u)*(h-u/2<0?-1:1),y=Math.max(s,Math.floor(n-h*p/u+m)),w=Math.min(i,Math.floor(n+(u-h)*p/u+m));Y0(t,e,n,y,w,r)}const o=e[2*n+r];let a=s,l=i;for(ga(t,e,s,n),e[2*i+r]>o&&ga(t,e,s,i);a<l;){for(ga(t,e,a,l),a++,l--;e[2*a+r]<o;)a++;for(;e[2*l+r]>o;)l--}e[2*s+r]===o?ga(t,e,s,l):(l++,ga(t,e,l,i)),l<=n&&(s=l+1),n<=l&&(i=l-1)}}function ga(t,e,n,s){Rf(t,n,s),Rf(e,2*n,2*s),Rf(e,2*n+1,2*s+1)}function Rf(t,e,n){const s=t[e];t[e]=t[n],t[n]=s}function sT(t,e,n,s){const i=t-n,r=e-s;return i*i+r*r}const J4={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:t=>t},iT=Math.fround||(t=>e=>(t[0]=+e,t[0]))(new Float32Array(1)),Yi=2,ii=3,Pf=4,ei=5,X0=6;class Z4{constructor(e){this.options=Object.assign(Object.create(J4),e),this.trees=new Array(this.options.maxZoom+1),this.stride=this.options.reduce?7:6,this.clusterProps=[]}load(e){const{log:n,minZoom:s,maxZoom:i}=this.options;n&&console.time("total time");const r=`prepare ${e.length} points`;n&&console.time(r),this.points=e;const o=[];for(let l=0;l<e.length;l++){const u=e[l];if(!u.geometry)continue;const[h,d]=u.geometry.coordinates,p=iT(Fc(h)),m=iT(Vc(d));o.push(p,m,1/0,l,-1,1),this.options.reduce&&o.push(0)}let a=this.trees[i+1]=this._createTree(o);n&&console.timeEnd(r);for(let l=i;l>=s;l--){const u=+Date.now();a=this.trees[l]=this._createTree(this._cluster(a,l)),n&&console.log("z%d: %d clusters in %dms",l,a.numItems,+Date.now()-u)}return n&&console.timeEnd("total time"),this}getClusters(e,n){let s=((e[0]+180)%360+360)%360-180;const i=Math.max(-90,Math.min(90,e[1]));let r=e[2]===180?180:((e[2]+180)%360+360)%360-180;const o=Math.max(-90,Math.min(90,e[3]));if(e[2]-e[0]>=360)s=-180,r=180;else if(s>r){const d=this.getClusters([s,i,180,o],n),p=this.getClusters([-180,i,r,o],n);return d.concat(p)}const a=this.trees[this._limitZoom(n)],l=a.range(Fc(s),Vc(o),Fc(r),Vc(i)),u=a.data,h=[];for(const d of l){const p=this.stride*d;h.push(u[p+ei]>1?rT(u,p,this.clusterProps):this.points[u[p+ii]])}return h}getChildren(e){const n=this._getOriginId(e),s=this._getOriginZoom(e),i="No cluster with the specified id.",r=this.trees[s];if(!r)throw new Error(i);const o=r.data;if(n*this.stride>=o.length)throw new Error(i);const a=this.options.radius/(this.options.extent*Math.pow(2,s-1)),l=o[n*this.stride],u=o[n*this.stride+1],h=r.within(l,u,a),d=[];for(const p of h){const m=p*this.stride;o[m+Pf]===e&&d.push(o[m+ei]>1?rT(o,m,this.clusterProps):this.points[o[m+ii]])}if(d.length===0)throw new Error(i);return d}getLeaves(e,n,s){n=n||10,s=s||0;const i=[];return this._appendLeaves(i,e,n,s,0),i}getTile(e,n,s){const i=this.trees[this._limitZoom(e)],r=Math.pow(2,e),{extent:o,radius:a}=this.options,l=a/o,u=(s-l)/r,h=(s+1+l)/r,d={features:[]};return this._addTileFeatures(i.range((n-l)/r,u,(n+1+l)/r,h),i.data,n,s,r,d),n===0&&this._addTileFeatures(i.range(1-l/r,u,1,h),i.data,r,s,r,d),n===r-1&&this._addTileFeatures(i.range(0,u,l/r,h),i.data,-1,s,r,d),d.features.length?d:null}getClusterExpansionZoom(e){let n=this._getOriginZoom(e)-1;for(;n<=this.options.maxZoom;){const s=this.getChildren(e);if(n++,s.length!==1)break;e=s[0].properties.cluster_id}return n}_appendLeaves(e,n,s,i,r){const o=this.getChildren(n);for(const a of o){const l=a.properties;if(l&&l.cluster?r+l.point_count<=i?r+=l.point_count:r=this._appendLeaves(e,l.cluster_id,s,i,r):r<i?r++:e.push(a),e.length===s)break}return r}_createTree(e){const n=new d_(e.length/this.stride|0,this.options.nodeSize,Float32Array);for(let s=0;s<e.length;s+=this.stride)n.add(e[s],e[s+1]);return n.finish(),n.data=e,n}_addTileFeatures(e,n,s,i,r,o){for(const a of e){const l=a*this.stride,u=n[l+ei]>1;let h,d,p;if(u)h=J0(n,l,this.clusterProps),d=n[l],p=n[l+1];else{const w=this.points[n[l+ii]];h=w.properties;const[T,A]=w.geometry.coordinates;d=Fc(T),p=Vc(A)}const m={type:1,geometry:[[Math.round(this.options.extent*(d*r-s)),Math.round(this.options.extent*(p*r-i))]],tags:h};let y;u||this.options.generateId?y=n[l+ii]:y=this.points[n[l+ii]].id,y!==void 0&&(m.id=y),o.features.push(m)}}_limitZoom(e){return Math.max(this.options.minZoom,Math.min(Math.floor(+e),this.options.maxZoom+1))}_cluster(e,n){const{radius:s,extent:i,reduce:r,minPoints:o}=this.options,a=s/(i*Math.pow(2,n)),l=e.data,u=[],h=this.stride;for(let d=0;d<l.length;d+=h){if(l[d+Yi]<=n)continue;l[d+Yi]=n;const p=l[d],m=l[d+1],y=e.within(l[d],l[d+1],a),w=l[d+ei];let T=w;for(const A of y){const N=A*h;l[N+Yi]>n&&(T+=l[N+ei])}if(T>w&&T>=o){let A=p*w,N=m*w,k,L=-1;const $=((d/h|0)<<5)+(n+1)+this.points.length;for(const ee of y){const ae=ee*h;if(l[ae+Yi]<=n)continue;l[ae+Yi]=n;const Te=l[ae+ei];A+=l[ae]*Te,N+=l[ae+1]*Te,l[ae+Pf]=$,r&&(k||(k=this._map(l,d,!0),L=this.clusterProps.length,this.clusterProps.push(k)),r(k,this._map(l,ae)))}l[d+Pf]=$,u.push(A/T,N/T,1/0,$,-1,T),r&&u.push(L)}else{for(let A=0;A<h;A++)u.push(l[d+A]);if(T>1)for(const A of y){const N=A*h;if(!(l[N+Yi]<=n)){l[N+Yi]=n;for(let k=0;k<h;k++)u.push(l[N+k])}}}}return u}_getOriginId(e){return e-this.points.length>>5}_getOriginZoom(e){return(e-this.points.length)%32}_map(e,n,s){if(e[n+ei]>1){const o=this.clusterProps[e[n+X0]];return s?Object.assign({},o):o}const i=this.points[e[n+ii]].properties,r=this.options.map(i);return s&&r===i?Object.assign({},r):r}}function rT(t,e,n){return{type:"Feature",id:t[e+ii],properties:J0(t,e,n),geometry:{type:"Point",coordinates:[e9(t[e]),t9(t[e+1])]}}}function J0(t,e,n){const s=t[e+ei],i=s>=1e4?`${Math.round(s/1e3)}k`:s>=1e3?`${Math.round(s/100)/10}k`:s,r=t[e+X0],o=r===-1?{}:Object.assign({},n[r]);return Object.assign(o,{cluster:!0,cluster_id:t[e+ii],point_count:s,point_count_abbreviated:i})}function Fc(t){return t/360+.5}function Vc(t){const e=Math.sin(t*Math.PI/180),n=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return n<0?0:n>1?1:n}function e9(t){return(t-.5)*360}function t9(t){const e=(180-t*360)*Math.PI/180;return 360*Math.atan(Math.exp(e))/Math.PI-90}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function n9(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}class Pn{static isAdvancedMarkerAvailable(e){return google.maps.marker&&e.getMapCapabilities().isAdvancedMarkersAvailable===!0}static isAdvancedMarker(e){return google.maps.marker&&e instanceof google.maps.marker.AdvancedMarkerElement}static setMap(e,n){this.isAdvancedMarker(e)?e.map=n:e.setMap(n)}static getPosition(e){if(this.isAdvancedMarker(e)){if(e.position){if(e.position instanceof google.maps.LatLng)return e.position;if(e.position.lat&&e.position.lng)return new google.maps.LatLng(e.position.lat,e.position.lng)}return new google.maps.LatLng(null)}return e.getPosition()}static getVisible(e){return this.isAdvancedMarker(e)?!0:e.getVisible()}}class Xp{constructor({markers:e,position:n}){this.markers=e,n&&(n instanceof google.maps.LatLng?this._position=n:this._position=new google.maps.LatLng(n))}get bounds(){if(this.markers.length===0&&!this._position)return;const e=new google.maps.LatLngBounds(this._position,this._position);for(const n of this.markers)e.extend(Pn.getPosition(n));return e}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(e=>Pn.getVisible(e)).length}push(e){this.markers.push(e)}delete(){this.marker&&(Pn.setMap(this.marker,null),this.marker=void 0),this.markers.length=0}}class s9{constructor({maxZoom:e=16}){this.maxZoom=e}noop({markers:e}){return i9(e)}}const i9=t=>t.map(n=>new Xp({position:Pn.getPosition(n),markers:[n]}));class r9 extends s9{constructor(e){var{maxZoom:n,radius:s=60}=e,i=n9(e,["maxZoom","radius"]);super({maxZoom:n}),this.state={zoom:-1},this.superCluster=new Z4(Object.assign({maxZoom:this.maxZoom,radius:s},i))}calculate(e){let n=!1;const s={zoom:e.map.getZoom()};if(!tT(e.markers,this.markers)){n=!0,this.markers=[...e.markers];const i=this.markers.map(r=>{const o=Pn.getPosition(r);return{type:"Feature",geometry:{type:"Point",coordinates:[o.lng(),o.lat()]},properties:{marker:r}}});this.superCluster.load(i)}return n||(this.state.zoom<=this.maxZoom||s.zoom<=this.maxZoom)&&(n=!tT(this.state,s)),this.state=s,n&&(this.clusters=this.cluster(e)),{clusters:this.clusters,changed:n}}cluster({map:e}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(e.getZoom())).map(n=>this.transformCluster(n))}transformCluster({geometry:{coordinates:[e,n]},properties:s}){if(s.cluster)return new Xp({markers:this.superCluster.getLeaves(s.cluster_id,1/0).map(r=>r.properties.marker),position:{lat:n,lng:e}});const i=s.marker;return new Xp({markers:[i],position:Pn.getPosition(i)})}}class o9{constructor(e,n){this.markers={sum:e.length};const s=n.map(r=>r.count),i=s.reduce((r,o)=>r+o,0);this.clusters={count:n.length,markers:{mean:i/n.length,sum:i,min:Math.min(...s),max:Math.max(...s)}}}}class a9{render({count:e,position:n},s,i){const o=`<svg fill="${e>Math.max(10,s.clusters.markers.mean)?"#ff0000":"#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${e}</text>
</svg>`,a=`Cluster of ${e} markers`,l=Number(google.maps.Marker.MAX_ZINDEX)+e;if(Pn.isAdvancedMarkerAvailable(i)){const d=new DOMParser().parseFromString(o,"image/svg+xml").documentElement;d.setAttribute("transform","translate(0 25)");const p={map:i,position:n,zIndex:l,title:a,content:d};return new google.maps.marker.AdvancedMarkerElement(p)}const u={position:n,zIndex:l,title:a,icon:{url:`data:image/svg+xml;base64,${btoa(o)}`,anchor:new google.maps.Point(25,25)}};return new google.maps.Marker(u)}}function l9(t,e){for(let n in e.prototype)t.prototype[n]=e.prototype[n]}class f_{constructor(){l9(f_,google.maps.OverlayView)}}var ja;(function(t){t.CLUSTERING_BEGIN="clusteringbegin",t.CLUSTERING_END="clusteringend",t.CLUSTER_CLICK="click"})(ja||(ja={}));const c9=(t,e,n)=>{n.fitBounds(e.bounds)};class oT extends f_{constructor({map:e,markers:n=[],algorithmOptions:s={},algorithm:i=new r9(s),renderer:r=new a9,onClusterClick:o=c9}){super(),this.markers=[...n],this.clusters=[],this.algorithm=i,this.renderer=r,this.onClusterClick=o,e&&this.setMap(e)}addMarker(e,n){this.markers.includes(e)||(this.markers.push(e),n||this.render())}addMarkers(e,n){e.forEach(s=>{this.addMarker(s,!0)}),n||this.render()}removeMarker(e,n){const s=this.markers.indexOf(e);return s===-1?!1:(Pn.setMap(e,null),this.markers.splice(s,1),n||this.render(),!0)}removeMarkers(e,n){let s=!1;return e.forEach(i=>{s=this.removeMarker(i,!0)||s}),s&&!n&&this.render(),s}clearMarkers(e){this.markers.length=0,e||this.render()}render(){const e=this.getMap();if(e instanceof google.maps.Map&&e.getProjection()){google.maps.event.trigger(this,ja.CLUSTERING_BEGIN,this);const{clusters:n,changed:s}=this.algorithm.calculate({markers:this.markers,map:e,mapCanvasProjection:this.getProjection()});if(s||s==null){const i=new Set;for(const o of n)o.markers.length==1&&i.add(o.markers[0]);const r=[];for(const o of this.clusters)o.marker!=null&&(o.markers.length==1?i.has(o.marker)||Pn.setMap(o.marker,null):r.push(o.marker));this.clusters=n,this.renderClusters(),requestAnimationFrame(()=>r.forEach(o=>Pn.setMap(o,null)))}google.maps.event.trigger(this,ja.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(e=>Pn.setMap(e,null)),this.clusters.forEach(e=>e.delete()),this.clusters=[]}renderClusters(){const e=new o9(this.markers,this.clusters),n=this.getMap();this.clusters.forEach(s=>{s.markers.length===1?s.marker=s.markers[0]:(s.marker=this.renderer.render(s,e,n),s.markers.forEach(i=>Pn.setMap(i,null)),this.onClusterClick&&s.marker.addListener("click",i=>{google.maps.event.trigger(this,ja.CLUSTER_CLICK,s),this.onClusterClick(i,s,n)})),Pn.setMap(s.marker,n)})}}const kf={maxZoom:{type:Number,twoWay:!1},batchSizeIE:{type:Number,twoWay:!1},calculator:{type:Function,twoWay:!1},enableRetinaIcons:{type:Boolean,twoWay:!1},gridSize:{type:Number,twoWay:!1},ignoreHidden:{type:Boolean,twoWay:!1},imageExtension:{type:String,twoWay:!1},imagePath:{type:String,twoWay:!1},imageSizes:{type:Array,twoWay:!1},minimumClusterSize:{type:Number,twoWay:!1},styles:{type:Array,twoWay:!1},zoomOnClick:{type:Boolean,twoWay:!1}},u9=["click","rightclick","dblclick","drag","dragstart","dragend","mouseup","mousedown","mouseover","mouseout"],h9=Di({mappedProps:kf,events:u9,name:"cluster",ctr:()=>{if(typeof oT>"u"){const t="MarkerClusterer is not installed!";throw console.error(t),new Error(t)}return oT},ctrArgs:({map:t,...e})=>[t,[],e],afterCreate(t){const e=()=>{const n=t.getMarkers();t.clearMarkers(),t.addMarkers(n)};for(let n in kf)kf[n].twoWay&&this.$on(n.toLowerCase()+"_changed",e)},updated(){this.$clusterObject&&this.$clusterObject.repaint()},beforeUnmount(){this.$children&&this.$children.length&&this.$children.forEach(t=>{t.$clusterObject===this.$clusterObject&&(t.$clusterObject=null)}),this.$clusterObject&&this.$clusterObject.clearMarkers()}});function d9(t,e,n,s,i,r){return fn(),jn("div",null,[go(t.$slots,"default")])}const f9=qo(h9,[["render",d9]]),p9={options:{type:Object,required:!1,default(){return{}}},position:{type:Object,twoWay:!0},zIndex:{type:Number,twoWay:!0}},g9=["domready","click","closeclick","content_changed"],m9=Di({mappedProps:p9,events:g9,name:"infoWindow",ctr:()=>google.maps.InfoWindow,props:{opened:{type:Boolean,default:!0}},inject:{$markerPromise:{default:null}},mounted(){const t=this.$refs.infoWindow;t.parentNode.removeChild(t)},beforeCreate(t){if(t.content=this.$refs.infoWindow,this.$markerPromise)return delete t.position,this.$markerPromise.then(e=>(this.$markerObject=e,e))},emits:["closeclick"],methods:{_openInfoWindow(){this.$infoWindowObject.close(),this.opened?this.$infoWindowObject.open(this.$map,this.$markerObject):this.$emit("closeclick")}},afterCreate(){this._openInfoWindow(),this.$watch("opened",()=>{this._openInfoWindow()})}}),_9={ref:"infoWindow"};function y9(t,e,n,s,i,r){return fn(),jn("div",_9,[go(t.$slots,"default")],512)}const v9=qo(m9,[["render",y9]]),E9={props:["resizeBus"],data(){return{_actualResizeBus:null}},created(){typeof this.resizeBus>"u"?this.$data._actualResizeBus=this.$gmapDefaultResizeBus:this.$data._actualResizeBus=this.resizeBus},methods:{_resizeCallback(){this.resize()},isFunction(t){return t&&{}.toString.call(t)==="[object Function]"},_delayedResizeCallback(){this.$nextTick(()=>this._resizeCallback())}},watch:{resizeBus(t){this.$data._actualResizeBus=t},"$data._actualResizeBus"(t,e){e&&e.$off("resize",this._delayedResizeCallback)}},unmounted(){this.$data._actualResizeBus&&this.isFunction(this.$data._actualResizeBus.$off)&&this.$data._actualResizeBus.$off("resize",this._delayedResizeCallback)}};function w9(t){let e=0;t(()=>{e+=1},()=>{e=Math.max(0,e-1)},()=>e===0)}const Of={center:{required:!0,twoWay:!0,type:Object,noBind:!0},zoom:{required:!1,twoWay:!0,type:Number,noBind:!0},heading:{type:Number,twoWay:!0},mapTypeId:{twoWay:!0,type:String},tilt:{twoWay:!0,type:Number},options:{type:Object,default(){return{}}}},aT=["bounds_changed","click","dblclick","drag","dragend","dragstart","idle","mousemove","mouseout","mouseover","resize","rightclick","tilesloaded"],T9=["panBy","panTo","panToBounds","fitBounds"].reduce((t,e)=>(t[e]=function(){this.$mapObject&&this.$mapObject[e].apply(this.$mapObject,arguments)},t),{}),b9={resize(){this.$mapObject&&google.maps.event.trigger(this.$mapObject,"resize")},resizePreserveCenter(){if(!this.$mapObject)return;const t=this.$mapObject.getCenter();google.maps.event.trigger(this.$mapObject,"resize"),this.$mapObject.setCenter(t)},_resizeCallback(){this.resizePreserveCenter()}},I9={mixins:[E9],props:h_({...Of,...aT.reduce((t,e)=>({...t,[`on${e.charAt(0).toUpperCase()}${e.slice(1)}`.replace(/[-_]+(.)?/g,(n,s)=>s?s.toUpperCase():"")]:Function}),{})}),inheritAttrs:!1,provide(){return this.$mapPromise=new Promise((t,e)=>{this.$mapPromiseDeferred={resolve:t,reject:e}}),{$mapPromise:this.$mapPromise}},emits:["center_changed","zoom_changed","bounds_changed"],computed:{finalLat(){return this.center&&typeof this.center.lat=="function"?this.center.lat():this.center.lat},finalLng(){return this.center&&typeof this.center.lng=="function"?this.center.lng():this.center.lng},finalLatLng(){return{lat:this.finalLat,lng:this.finalLng}}},watch:{zoom(t){this.$mapObject&&this.$mapObject.setZoom(t)}},mounted(){return this.$gmapApiPromiseLazy().then(()=>{const t=this.$refs["vue-map"],e={...this.options,...Xu(this,Of)};return delete e.options,this.$mapObject=new google.maps.Map(t,e),u_(this,this.$mapObject,Of),K0(this,this.$mapObject,aT),w9((n,s,i)=>{this.$mapObject.addListener("center_changed",()=>{i()&&this.$emit("center_changed",this.$mapObject.getCenter()),s()}),Q0(this,["finalLat","finalLng"],()=>{n(),this.$mapObject.setCenter(this.finalLatLng)})}),this.$mapObject.addListener("zoom_changed",()=>{this.$emit("zoom_changed",this.$mapObject.getZoom())}),this.$mapObject.addListener("bounds_changed",()=>{this.$emit("bounds_changed",this.$mapObject.getBounds())}),this.$mapPromiseDeferred.resolve(this.$mapObject),this.$mapObject}).catch(t=>{throw t})},methods:{...b9,...T9}},C9={class:"vue-map-hidden"};function A9(t,e,n,s,i,r){return fn(),jn("div",{class:oh(["vue-map-container",t.$attrs.class])},[$t("div",{ref:"vue-map",class:"vue-map",style:rh(t.$attrs.style?t.$attrs.style:"")},null,4),$t("div",C9,[go(t.$slots,"default")]),go(t.$slots,"visible")],2)}const S9=qo(I9,[["render",A9]]),R9={options:{type:Object,twoWay:!1,default:()=>{}},data:{type:Array,twoWay:!0}},P9=[],k9=Di({mappedProps:R9,name:"heatmap",ctr:()=>google.maps.visualization.HeatmapLayer,events:P9}),O9=t=>{const e=t.addEventListener?t.addEventListener:t.attachEvent;function n(s,i){if(s==="keydown"){const r=i;i=function(o){const a=document.getElementsByClassName("pac-item-selected").length>0;if(o.which===13&&!a){const l=document.createEvent("Event");l.keyCode=40,l.which=40,r.apply(t,[l])}r.apply(t,[o])}}e.apply(t,[s,i])}t.addEventListener=n,t.attachEvent=n},Nf={bounds:{type:Object},componentRestrictions:{type:Object,noBind:!0},types:{type:Array,default:function(){return[]}}},N9={selectFirstOnEnter:{required:!1,type:Boolean,default:!1},options:{type:Object}},x9={mounted(){this.$gmapApiPromiseLazy().then(()=>{if(this.selectFirstOnEnter&&O9(this.$refs.input),typeof google.maps.places.Autocomplete!="function")throw new Error("google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?");const t={...Xu(this,Nf),...this.options};this.$autocomplete=new google.maps.places.Autocomplete(this.$refs.input,t),u_(this,this.$autocomplete,Nf),this.$watch("componentRestrictions",e=>{e!==void 0&&this.$autocomplete.setComponentRestrictions(e)}),this.$autocomplete.addListener("place_changed",()=>{this.$emit("place_changed",this.$autocomplete.getPlace())})})},props:{...h_(Nf),...N9}};function D9(t,e,n,s,i,r){return fn(),jn("input",cb({ref:"input"},t.$attrs,Ek(t.$attrs,!0)),null,16)}const M9=qo(x9,[["render",D9]]);let Z0=null;function L9(t,e){e={installComponents:!0,autobindAllEvents:!1,...e},Z0=Gf({data:function(){return{gmapApi:null}}});const n=Gf();let s=F9(e);t.mixin({created(){this.$gmapDefaultResizeBus=n,this.$gmapOptions=e,this.$gmapApiPromiseLazy=s}}),t.$gmapDefaultResizeBus=n,t.$gmapApiPromiseLazy=s,e.installComponents&&(t.component("GMapMap",S9),t.component("GMapMarker",Q4),t.component("GMapInfoWindow",v9),t.component("GMapCluster",f9),t.component("GMapPolyline",L4),t.component("GMapPolygon",$4),t.component("GMapCircle",B4),t.component("GMapRectangle",q4),t.component("GMapAutocomplete",M9),t.component("GMapHeatmap",k9))}function F9(t){function e(){return Z0.gmapApi={},window.google}if(t.load)return Jw(()=>Qp.isServer()?new Promise(()=>{}).then(e):new Promise((n,s)=>{try{window.vueGoogleMapsInit=n,O4(t.load)}catch(i){s(i)}}).then(e));{const n=new Promise(s=>{Qp.isServer()||(window.vueGoogleMapsInit=s)}).then(e);return Jw(()=>n)}}const V9="/i/assets/logoLight-aoGEXfnA.png";function p_(t){return ch()?(sg(t),!0):!1}function xf(){const t=new Set,e=i=>{t.delete(i)};return{on:i=>{t.add(i);const r=()=>e(i);return p_(r),{off:r}},off:e,trigger:(...i)=>Promise.all(Array.from(t).map(r=>r(...i)))}}function $9(t){let e=!1,n;const s=lh(!0);return(...i)=>(e||(n=s.run(()=>t(...i)),e=!0),n)}function mn(t){return typeof t=="function"?t():Vt(t)}const eS=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const U9=Object.prototype.toString,j9=t=>U9.call(t)==="[object Object]",Ju=()=>{};function B9(t,e){function n(...s){return new Promise((i,r)=>{Promise.resolve(t(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(i).catch(r)})}return n}const tS=t=>t();function W9(t,e={}){let n,s,i=Ju;const r=a=>{clearTimeout(a),i(),i=Ju};return a=>{const l=mn(t),u=mn(e.maxWait);return n&&r(n),l<=0||u!==void 0&&u<=0?(s&&(r(s),s=null),Promise.resolve(a())):new Promise((h,d)=>{i=e.rejectOnCancel?d:h,u&&!s&&(s=setTimeout(()=>{n&&r(n),s=null,h(a())},u)),n=setTimeout(()=>{s&&r(s),s=null,h(a())},l)})}}function H9(t=tS){const e=wt(!0);function n(){e.value=!1}function s(){e.value=!0}const i=(...r)=>{e.value&&t(...r)};return{isActive:El(e),pause:n,resume:s,eventFilter:i}}function lT(t,e=!1,n="Timeout"){return new Promise((s,i)=>{setTimeout(e?()=>i(n):s,t)})}function q9(t,...e){return e.some(n=>n in t)}function z9(t){return t||wl()}function Df(...t){if(t.length!==1)return dg(...t);const e=t[0];return typeof e=="function"?El(WP(()=>({get:e,set:Ju}))):wt(e)}function nS(t,e,n={}){const{eventFilter:s=tS,...i}=n;return Hn(t,B9(s,e),i)}function G9(t,e,n={}){const{eventFilter:s,...i}=n,{eventFilter:r,pause:o,resume:a,isActive:l}=H9(s);return{stop:nS(t,e,{...i,eventFilter:r}),pause:o,resume:a,isActive:l}}function K9(t,e=!0,n){z9()?QT(t,n):e?t():fh(t)}function Jp(t,e=!1){function n(d,{flush:p="sync",deep:m=!1,timeout:y,throwOnTimeout:w}={}){let T=null;const N=[new Promise(k=>{T=Hn(t,L=>{d(L)!==e&&(T==null||T(),k(L))},{flush:p,deep:m,immediate:!0})})];return y!=null&&N.push(lT(y,w).then(()=>mn(t)).finally(()=>T==null?void 0:T())),Promise.race(N)}function s(d,p){if(!bt(d))return n(L=>L===d,p);const{flush:m="sync",deep:y=!1,timeout:w,throwOnTimeout:T}=p??{};let A=null;const k=[new Promise(L=>{A=Hn([t,d],([$,ee])=>{e!==($===ee)&&(A==null||A(),L($))},{flush:m,deep:y,immediate:!0})})];return w!=null&&k.push(lT(w,T).then(()=>mn(t)).finally(()=>(A==null||A(),mn(t)))),Promise.race(k)}function i(d){return n(p=>!!p,d)}function r(d){return s(null,d)}function o(d){return s(void 0,d)}function a(d){return n(Number.isNaN,d)}function l(d,p){return n(m=>{const y=Array.from(m);return y.includes(d)||y.includes(mn(d))},p)}function u(d){return h(1,d)}function h(d=1,p){let m=-1;return n(()=>(m+=1,m>=d),p)}return Array.isArray(mn(t))?{toMatch:n,toContains:l,changed:u,changedTimes:h,get not(){return Jp(t,!e)}}:{toMatch:n,toBe:s,toBeTruthy:i,toBeNull:r,toBeNaN:a,toBeUndefined:o,changed:u,changedTimes:h,get not(){return Jp(t,!e)}}}function Q9(t){return Jp(t)}function Y9(t,e,n={}){const{immediate:s=!0}=n,i=wt(!1);let r=null;function o(){r&&(clearTimeout(r),r=null)}function a(){i.value=!1,o()}function l(...u){o(),i.value=!0,r=setTimeout(()=>{i.value=!1,r=null,t(...u)},mn(e))}return s&&(i.value=!0,eS&&l()),p_(a),{isPending:El(i),start:l,stop:a}}function zW(t,e,n={}){const{debounce:s=0,maxWait:i=void 0,...r}=n;return nS(t,e,{...r,eventFilter:W9(s,{maxWait:i})})}function X9(t){var e;const n=mn(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Zu=eS?window:void 0;function cT(...t){let e,n,s,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,s,i]=t,e=Zu):[e,n,s,i]=t,!e)return Ju;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const r=[],o=()=>{r.forEach(h=>h()),r.length=0},a=(h,d,p,m)=>(h.addEventListener(d,p,m),()=>h.removeEventListener(d,p,m)),l=Hn(()=>[X9(e),mn(i)],([h,d])=>{if(o(),!h)return;const p=j9(d)?{...d}:d;r.push(...n.flatMap(m=>s.map(y=>a(h,m,y,p))))},{immediate:!0,flush:"post"}),u=()=>{l(),o()};return p_(u),u}const $c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Uc="__vueuse_ssr_handlers__",J9=Z9();function Z9(){return Uc in $c||($c[Uc]=$c[Uc]||{}),$c[Uc]}function eW(t,e){return J9[t]||e}function tW(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const sS={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},uT="vueuse-storage";function hT(t,e,n,s={}){var i;const{flush:r="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:u=!1,shallow:h,window:d=Zu,eventFilter:p,onError:m=de=>{console.error(de)},initOnMounted:y}=s,w=(h?ar:wt)(typeof e=="function"?e():e);if(!n)try{n=eW("getDefaultStorage",()=>{var de;return(de=Zu)==null?void 0:de.localStorage})()}catch(de){m(de)}if(!n)return w;const T=mn(e),A=tW(T),N=(i=s.serializer)!=null?i:sS[A],{pause:k,resume:L}=G9(w,()=>$(w.value),{flush:r,deep:o,eventFilter:p});return d&&a&&K9(()=>{cT(d,"storage",Te),cT(d,uT,ae),y&&Te()}),y||Te(),w;function $(de){try{if(de==null)n.removeItem(t);else{const Ae=N.write(de),at=n.getItem(t);at!==Ae&&(n.setItem(t,Ae),d&&d.dispatchEvent(new CustomEvent(uT,{detail:{key:t,oldValue:at,newValue:Ae,storageArea:n}})))}}catch(Ae){m(Ae)}}function ee(de){const Ae=de?de.newValue:n.getItem(t);if(Ae==null)return l&&T!=null&&n.setItem(t,N.write(T)),T;if(!de&&u){const at=N.read(Ae);return typeof u=="function"?u(at,T):A==="object"&&!Array.isArray(at)?{...T,...at}:at}else return typeof Ae!="string"?Ae:N.read(Ae)}function ae(de){Te(de.detail)}function Te(de){if(!(de&&de.storageArea!==n)){if(de&&de.key==null){w.value=T;return}if(!(de&&de.key!==t)){k();try{(de==null?void 0:de.newValue)!==N.write(w.value)&&(w.value=ee(de))}catch(Ae){m(Ae)}finally{de?fh(L):L()}}}}}const nW={json:"application/json",text:"text/plain"};function eh(t){return t&&q9(t,"immediate","refetch","initialData","timeout","beforeFetch","afterFetch","onFetchError","fetch","updateDataOnError")}function sW(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Ba(t){return typeof Headers<"u"&&t instanceof Headers?Object.fromEntries([...t.entries()]):t}function Wr(t,...e){return t==="overwrite"?async n=>{const s=e[e.length-1];return s?{...n,...await s(n)}:n}:async n=>{for(const s of e)s&&(n={...n,...await s(n)});return n}}function iW(t={}){const e=t.combination||"chain",n=t.options||{},s=t.fetchOptions||{};function i(r,...o){const a=pn(()=>{const h=mn(t.baseUrl),d=mn(r);return h&&!sW(d)?oW(h,d):d});let l=n,u=s;return o.length>0&&(eh(o[0])?l={...l,...o[0],beforeFetch:Wr(e,n.beforeFetch,o[0].beforeFetch),afterFetch:Wr(e,n.afterFetch,o[0].afterFetch),onFetchError:Wr(e,n.onFetchError,o[0].onFetchError)}:u={...u,...o[0],headers:{...Ba(u.headers)||{},...Ba(o[0].headers)||{}}}),o.length>1&&eh(o[1])&&(l={...l,...o[1],beforeFetch:Wr(e,n.beforeFetch,o[1].beforeFetch),afterFetch:Wr(e,n.afterFetch,o[1].afterFetch),onFetchError:Wr(e,n.onFetchError,o[1].onFetchError)}),rW(a,u,l)}return i}function rW(t,...e){var n;const s=typeof AbortController=="function";let i={},r={immediate:!0,refetch:!1,timeout:0,updateDataOnError:!1};const o={method:"GET",type:"text",payload:void 0};e.length>0&&(eh(e[0])?r={...r,...e[0]}:i=e[0]),e.length>1&&eh(e[1])&&(r={...r,...e[1]});const{fetch:a=(n=Zu)==null?void 0:n.fetch,initialData:l,timeout:u}=r,h=xf(),d=xf(),p=xf(),m=wt(!1),y=wt(!1),w=wt(!1),T=wt(null),A=ar(null),N=ar(null),k=ar(l||null),L=pn(()=>s&&y.value);let $,ee;const ae=()=>{s&&($==null||$.abort(),$=new AbortController,$.signal.onabort=()=>w.value=!0,i={...i,signal:$.signal})},Te=xe=>{y.value=xe,m.value=!xe};u&&(ee=Y9(ae,u,{immediate:!1}));let de=0;const Ae=async(xe=!1)=>{var Ee,S;ae(),Te(!0),N.value=null,T.value=null,w.value=!1,de+=1;const It=de,Ct={method:o.method,headers:{}};if(o.payload){const De=Ba(Ct.headers),Ft=mn(o.payload);!o.payloadType&&Ft&&Object.getPrototypeOf(Ft)===Object.prototype&&!(Ft instanceof FormData)&&(o.payloadType="json"),o.payloadType&&(De["Content-Type"]=(Ee=nW[o.payloadType])!=null?Ee:o.payloadType),Ct.body=o.payloadType==="json"?JSON.stringify(Ft):Ft}let Lt=!1;const He={url:mn(t),options:{...Ct,...i},cancel:()=>{Lt=!0}};if(r.beforeFetch&&Object.assign(He,await r.beforeFetch(He)),Lt||!a)return Te(!1),Promise.resolve(null);let mt=null;return ee&&ee.start(),a(He.url,{...Ct,...He.options,headers:{...Ba(Ct.headers),...Ba((S=He.options)==null?void 0:S.headers)}}).then(async De=>{if(A.value=De,T.value=De.status,mt=await De.clone()[o.type](),!De.ok)throw k.value=l||null,new Error(De.statusText);return r.afterFetch&&({data:mt}=await r.afterFetch({data:mt,response:De})),k.value=mt,h.trigger(De),De}).catch(async De=>{let Ft=De.message||De.name;if(r.onFetchError&&({error:Ft,data:mt}=await r.onFetchError({data:mt,error:De,response:A.value})),N.value=Ft,r.updateDataOnError&&(k.value=mt),d.trigger(De),xe)throw De;return null}).finally(()=>{It===de&&Te(!1),ee&&ee.stop(),p.trigger(null)})},at=Df(r.refetch);Hn([at,Df(t)],([xe])=>xe&&Ae(),{deep:!0});const rn={isFinished:m,statusCode:T,response:A,error:N,data:k,isFetching:y,canAbort:L,aborted:w,abort:ae,execute:Ae,onFetchResponse:h.on,onFetchError:d.on,onFetchFinally:p.on,get:dt("GET"),put:dt("PUT"),post:dt("POST"),delete:dt("DELETE"),patch:dt("PATCH"),head:dt("HEAD"),options:dt("OPTIONS"),json:Gt("json"),text:Gt("text"),blob:Gt("blob"),arrayBuffer:Gt("arrayBuffer"),formData:Gt("formData")};function dt(xe){return(Ee,S)=>{if(!y.value)return o.method=xe,o.payload=Ee,o.payloadType=S,bt(o.payload)&&Hn([at,Df(o.payload)],([It])=>It&&Ae(),{deep:!0}),{...rn,then(It,Ct){return Dn().then(It,Ct)}}}}function Dn(){return new Promise((xe,Ee)=>{Q9(m).toBe(!0).then(()=>xe(rn)).catch(S=>Ee(S))})}function Gt(xe){return()=>{if(!y.value)return o.type=xe,{...rn,then(Ee,S){return Dn().then(Ee,S)}}}}return r.immediate&&Promise.resolve().then(()=>Ae()),{...rn,then(xe,Ee){return Dn().then(xe,Ee)}}}function oW(t,e){return!t.endsWith("/")&&!e.startsWith("/")?`${t}/${e}`:`${t}${e}`}const g_=$9(()=>{const t=wt(hT("token",null)),e=wt(hT("user",null,localStorage,{serializer:sS.object})),n=pn(()=>t.value),s=pn(()=>e.value);return{getToken:n,setToken:o=>{t.value=o},getUser:s,setUser:o=>{e.value=o}}}),aW="https://new.myeventksa.com/api",lW=iW({baseUrl:aW,options:{async beforeFetch({options:t}){const{getToken:e}=g_();return e.value&&(t.headers.Authorization=`Bearer ${e.value}`),t.headers["Content-Type"]="application/json",t.headers.Accept="application/json",{options:t}}},fetchOptions:{mode:"cors"}}),cW=()=>{const t=R4(),{setToken:e,setUser:n}=g_();return{logout:async()=>{const{data:i,error:r,isFetching:o,onFetchResponse:a}=lW("auth/logout",{method:"POST"}).json();return a(l=>{l.status===200&&(e(null),n(null),t.push("/login"))}),{data:i,error:r,isFetching:o}}}},uW={class:"py-3 mb-3"},hW={class:"container-fluid d-flex justify-content-between align-items-center",style:{"grid-template-columns":"1fr 2fr"}},dW={class:"dropdown"},fW=$t("img",{src:V9,alt:"",height:"60",class:"logo"},null,-1),pW={class:"d-flex align-items-center"},gW={class:"flex-shrink-0 dropdown"},mW=$t("a",{class:"d-block text-decoration-none","data-bs-toggle":"dropdown","aria-expanded":"false"},[$t("i",{class:"fa-solid fa-bars fs-1 me-2 text-brand"})],-1),_W={class:"dropdown-menu text-small p-2"},yW={key:0,class:"d-flex align-items-center"},vW=["src"],EW={key:1},wW=$t("hr",{class:"dropdown-divider"},null,-1),TW=[wW],bW={key:1,class:"dropdown-item text-danger"},IW={__name:"HeaderLayout",setup(t){const{logout:e}=cW(),{getToken:n,getUser:s}=g_(),i=Math.floor(Math.random()*16777215).toString(16);return(r,o)=>{const a=WT("router-link");return fn(),jn("header",uW,[$t("div",hW,[$t("div",null,[$t("div",dW,[pt(a,{to:"/",tag:"a",class:"d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none"},{default:Ia(()=>[fW]),_:1})])]),$t("div",pW,[$t("div",gW,[mW,$t("ul",_W,[Vt(n)&&Vt(s)?(fn(),jn("li",yW,[pt(a,{class:"dropdown-item",to:"/profile"},{default:Ia(()=>[$t("img",{src:`https://ui-avatars.com/api/?name=${Vt(s).name}&background=${Vt(i)}&color=fff`,alt:"mdo",width:"30",class:"rounded-circle me-2"},null,8,vW),Hf(" "+_P(Vt(s).name),1)]),_:1})])):hv("",!0),Vt(n)?(fn(),jn("li",EW,TW)):hv("",!0),$t("li",null,[Vt(n)?(fn(),jn("div",{key:0,style:{cursor:"pointer"},class:"dropdown-item text-danger",onClick:o[0]||(o[0]=(...l)=>Vt(e)&&Vt(e)(...l))}," تسجيل الخروج ")):(fn(),jn("div",bW,[pt(a,{class:"dropdown-item",to:"/login"},{default:Ia(()=>[Hf("تسجيل الدخول")]),_:1})]))])])])])])])}}},CW={},AW={class:"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mb-2 pb-0 border-top container",dir:"ltr"},SW=Bk('<div class="col-md-4 d-flex align-items-center"><span class="text-body-secondary text-nowrap">Powered by NextLeveL © 2024</span></div><ul class="nav col-md-4 justify-content-end list-unstyled d-flex"><li class=""><a class="text-body-secondary" href="#"><i class="fab fa-twitter"></i></a></li><li class="me-3"><a class="text-body-secondary" href="#"><i class="fab fa-telegram-plane"></i></a></li><li class="me-3"><a class="text-body-secondary" href="#"><i class="fab fa-whatsapp"></i></a></li></ul>',2),RW=[SW];function PW(t,e){return fn(),jn("footer",AW,RW)}const kW=qo(CW,[["render",PW]]),OW={__name:"DefaultLayout",setup(t){return(e,n)=>(fn(),jn("div",null,[pt(IW),$t("main",null,[go(e.$slots,"default")]),pt(kW)]))}},NW={__name:"App",setup(t){return(e,n)=>{const s=WT("router-view");return fn(),yg(OW,null,{default:Ia(()=>[pt(s)]),_:1})}}},iS=Rb({apiKey:"AIzaSyAat9OI4xdqvO2RjpsvbMx3PE3AoBCVoXo",authDomain:"domais-events-management.firebaseapp.com",databaseURL:"https://domais-events-management-default-rtdb.firebaseio.com",projectId:"domais-events-management",storageBucket:"domais-events-management.appspot.com",messagingSenderId:"722531256889",appId:"1:722531256889:web:f9b19175f26ab722b39be8",measurementId:"G-TRXRV4QSMZ"}),xW=E0(iS);yj(xW,"Events");const ad=Gf(NW);ad.use(TB,{firebaseApp:iS,modules:[yB(),_B({reset:!0,wait:!1}),fB({reset:!0,wait:!1})]});ad.use(G0);ad.use(L9,{load:{key:"AIzaSyAat9OI4xdqvO2RjpsvbMx3PE3AoBCVoXo",libraries:"places"}});ad.mount("#app");export{VW as A,LW as B,zW as C,QT as D,WW as E,Gn as F,qo as _,$t as a,hv as b,jn as c,Bk as d,WT as e,Vt as f,pt as g,Ia as h,Hf as i,R4 as j,HW as k,yg as l,rh as m,oh as n,fn as o,wt as p,hh as q,MW as r,Hn as s,_P as t,g_ as u,FW as v,DW as w,lW as x,pn as y,qW as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Events-vNmMsn6H.js","assets/moment-UDURgb9g.js","assets/ar-sa-pDONzxrt.js","assets/default-event-TthUPv4k.js","assets/useLiteraries-RjhiVWAN.js","assets/EventDetails-ubuL1ids.js","assets/Map-GA43lL6l.js","assets/Profile-GD3Cjh6z.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}