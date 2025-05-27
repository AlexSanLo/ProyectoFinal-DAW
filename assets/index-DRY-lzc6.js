(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ku(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ve={},Ss=[],an=()=>{},MI=()=>!1,Sl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Hu=n=>n.startsWith("onUpdate:"),Ze=Object.assign,Gu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},LI=Object.prototype.hasOwnProperty,Se=(n,e)=>LI.call(n,e),ie=Array.isArray,Rs=n=>Ao(n)==="[object Map]",Rl=n=>Ao(n)==="[object Set]",cf=n=>Ao(n)==="[object Date]",fe=n=>typeof n=="function",qe=n=>typeof n=="string",un=n=>typeof n=="symbol",De=n=>n!==null&&typeof n=="object",Hm=n=>(De(n)||fe(n))&&fe(n.then)&&fe(n.catch),Gm=Object.prototype.toString,Ao=n=>Gm.call(n),FI=n=>Ao(n).slice(8,-1),Wm=n=>Ao(n)==="[object Object]",Wu=n=>qe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ui=Ku(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},UI=/-(\w)/g,ur=Pl(n=>n.replace(UI,(e,t)=>t?t.toUpperCase():"")),BI=/\B([A-Z])/g,_r=Pl(n=>n.replace(BI,"-$1").toLowerCase()),Qm=Pl(n=>n.charAt(0).toUpperCase()+n.slice(1)),bc=Pl(n=>n?`on${Qm(n)}`:""),rr=(n,e)=>!Object.is(n,e),wa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Jm=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Qc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},$I=n=>{const e=qe(n)?Number(n):NaN;return isNaN(e)?n:e};let uf;const Cl=()=>uf||(uf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qu(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=qe(r)?KI(r):Qu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(n)||De(n))return n}const jI=/;(?![^(]*\))/g,qI=/:([^]+)/,zI=/\/\*[^]*?\*\//g;function KI(n){const e={};return n.replace(zI,"").split(jI).forEach(t=>{if(t){const r=t.split(qI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function At(n){let e="";if(qe(n))e=n;else if(ie(n))for(let t=0;t<n.length;t++){const r=At(n[t]);r&&(e+=r+" ")}else if(De(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const HI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",GI=Ku(HI);function Ym(n){return!!n||n===""}function WI(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=xl(n[r],e[r]);return t}function xl(n,e){if(n===e)return!0;let t=cf(n),r=cf(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=un(n),r=un(e),t||r)return n===e;if(t=ie(n),r=ie(e),t||r)return t&&r?WI(n,e):!1;if(t=De(n),r=De(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!xl(n[o],e[o]))return!1}}return String(n)===String(e)}function Xm(n,e){return n.findIndex(t=>xl(t,e))}const Zm=n=>!!(n&&n.__v_isRef===!0),it=n=>qe(n)?n:n==null?"":ie(n)||De(n)&&(n.toString===Gm||!fe(n.toString))?Zm(n)?it(n.value):JSON.stringify(n,eg,2):String(n),eg=(n,e)=>Zm(e)?eg(n,e.value):Rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Ac(r,i)+" =>"]=s,t),{})}:Rl(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ac(t))}:un(e)?Ac(e):De(e)&&!ie(e)&&!Wm(e)?String(e):e,Ac=(n,e="")=>{var t;return un(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class QI{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=bt;try{return bt=this,e()}finally{bt=t}}}on(){++this._on===1&&(this.prevScope=bt,bt=this)}off(){this._on>0&&--this._on===0&&(bt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function JI(){return bt}let Ne;const Sc=new WeakSet;class tg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&bt.active&&bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sc.has(this)&&(Sc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hf(this),sg(this);const e=Ne,t=Qt;Ne=this,Qt=!0;try{return this.fn()}finally{ig(this),Ne=e,Qt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xu(e);this.deps=this.depsTail=void 0,hf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jc(this)&&this.run()}get dirty(){return Jc(this)}}let ng=0,Bi,$i;function rg(n,e=!1){if(n.flags|=8,e){n.next=$i,$i=n;return}n.next=Bi,Bi=n}function Ju(){ng++}function Yu(){if(--ng>0)return;if($i){let e=$i;for($i=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Bi;){let e=Bi;for(Bi=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function sg(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ig(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Xu(r),YI(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Jc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(og(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function og(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===to)||(n.globalVersion=to,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Jc(n))))return;n.flags|=2;const e=n.dep,t=Ne,r=Qt;Ne=n,Qt=!0;try{sg(n);const s=n.fn(n._value);(e.version===0||rr(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=t,Qt=r,ig(n),n.flags&=-3}}function Xu(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Xu(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function YI(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Qt=!0;const ag=[];function Rn(){ag.push(Qt),Qt=!1}function Pn(){const n=ag.pop();Qt=n===void 0?!0:n}function hf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ne;Ne=void 0;try{e()}finally{Ne=t}}}let to=0;class XI{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ne||!Qt||Ne===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ne)t=this.activeLink=new XI(Ne,this),Ne.deps?(t.prevDep=Ne.depsTail,Ne.depsTail.nextDep=t,Ne.depsTail=t):Ne.deps=Ne.depsTail=t,lg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Ne.depsTail,t.nextDep=void 0,Ne.depsTail.nextDep=t,Ne.depsTail=t,Ne.deps===t&&(Ne.deps=r)}return t}trigger(e){this.version++,to++,this.notify(e)}notify(e){Ju();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Yu()}}}function lg(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)lg(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Yc=new WeakMap,jr=Symbol(""),Xc=Symbol(""),no=Symbol("");function dt(n,e,t){if(Qt&&Ne){let r=Yc.get(n);r||Yc.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Zu),s.map=r,s.key=t),s.track()}}function In(n,e,t,r,s,i){const o=Yc.get(n);if(!o){to++;return}const l=c=>{c&&c.trigger()};if(Ju(),e==="clear")o.forEach(l);else{const c=ie(n),u=c&&Wu(t);if(c&&t==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===no||!un(m)&&m>=d)&&l(p)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),u&&l(o.get(no)),e){case"add":c?u&&l(o.get("length")):(l(o.get(jr)),Rs(n)&&l(o.get(Xc)));break;case"delete":c||(l(o.get(jr)),Rs(n)&&l(o.get(Xc)));break;case"set":Rs(n)&&l(o.get(jr));break}}Yu()}function us(n){const e=be(n);return e===n?e:(dt(e,"iterate",no),qt(n)?e:e.map(st))}function kl(n){return dt(n=be(n),"iterate",no),n}const ZI={__proto__:null,[Symbol.iterator](){return Rc(this,Symbol.iterator,st)},concat(...n){return us(this).concat(...n.map(e=>ie(e)?us(e):e))},entries(){return Rc(this,"entries",n=>(n[1]=st(n[1]),n))},every(n,e){return yn(this,"every",n,e,void 0,arguments)},filter(n,e){return yn(this,"filter",n,e,t=>t.map(st),arguments)},find(n,e){return yn(this,"find",n,e,st,arguments)},findIndex(n,e){return yn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return yn(this,"findLast",n,e,st,arguments)},findLastIndex(n,e){return yn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return yn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Pc(this,"includes",n)},indexOf(...n){return Pc(this,"indexOf",n)},join(n){return us(this).join(n)},lastIndexOf(...n){return Pc(this,"lastIndexOf",n)},map(n,e){return yn(this,"map",n,e,void 0,arguments)},pop(){return Ai(this,"pop")},push(...n){return Ai(this,"push",n)},reduce(n,...e){return df(this,"reduce",n,e)},reduceRight(n,...e){return df(this,"reduceRight",n,e)},shift(){return Ai(this,"shift")},some(n,e){return yn(this,"some",n,e,void 0,arguments)},splice(...n){return Ai(this,"splice",n)},toReversed(){return us(this).toReversed()},toSorted(n){return us(this).toSorted(n)},toSpliced(...n){return us(this).toSpliced(...n)},unshift(...n){return Ai(this,"unshift",n)},values(){return Rc(this,"values",st)}};function Rc(n,e,t){const r=kl(n),s=r[e]();return r!==n&&!qt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const eE=Array.prototype;function yn(n,e,t,r,s,i){const o=kl(n),l=o!==n&&!qt(n),c=o[e];if(c!==eE[e]){const p=c.apply(n,i);return l?st(p):p}let u=t;o!==n&&(l?u=function(p,m){return t.call(this,st(p),m,n)}:t.length>2&&(u=function(p,m){return t.call(this,p,m,n)}));const d=c.call(o,u,r);return l&&s?s(d):d}function df(n,e,t,r){const s=kl(n);let i=t;return s!==n&&(qt(n)?t.length>3&&(i=function(o,l,c){return t.call(this,o,l,c,n)}):i=function(o,l,c){return t.call(this,o,st(l),c,n)}),s[e](i,...r)}function Pc(n,e,t){const r=be(n);dt(r,"iterate",no);const s=r[e](...t);return(s===-1||s===!1)&&rh(t[0])?(t[0]=be(t[0]),r[e](...t)):s}function Ai(n,e,t=[]){Rn(),Ju();const r=be(n)[e].apply(n,t);return Yu(),Pn(),r}const tE=Ku("__proto__,__v_isRef,__isVue"),cg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(un));function nE(n){un(n)||(n=String(n));const e=be(this);return dt(e,"has",n),e.hasOwnProperty(n)}class ug{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?dE:pg:i?fg:dg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let c;if(o&&(c=ZI[t]))return c;if(t==="hasOwnProperty")return nE}const l=Reflect.get(e,t,mt(e)?e:r);return(un(t)?cg.has(t):tE(t))||(s||dt(e,"get",t),i)?l:mt(l)?o&&Wu(t)?l:l.value:De(l)?s?mg(l):th(l):l}}class hg extends ug{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const c=hr(i);if(!qt(r)&&!hr(r)&&(i=be(i),r=be(r)),!ie(e)&&mt(i)&&!mt(r))return c?!1:(i.value=r,!0)}const o=ie(e)&&Wu(t)?Number(t)<e.length:Se(e,t),l=Reflect.set(e,t,r,mt(e)?e:s);return e===be(s)&&(o?rr(r,i)&&In(e,"set",t,r):In(e,"add",t,r)),l}deleteProperty(e,t){const r=Se(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&In(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!un(t)||!cg.has(t))&&dt(e,"has",t),r}ownKeys(e){return dt(e,"iterate",ie(e)?"length":jr),Reflect.ownKeys(e)}}class rE extends ug{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const sE=new hg,iE=new rE,oE=new hg(!0);const Zc=n=>n,la=n=>Reflect.getPrototypeOf(n);function aE(n,e,t){return function(...r){const s=this.__v_raw,i=be(s),o=Rs(i),l=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=s[n](...r),d=t?Zc:e?za:st;return!e&&dt(i,"iterate",c?Xc:jr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function ca(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function lE(n,e){const t={get(s){const i=this.__v_raw,o=be(i),l=be(s);n||(rr(s,l)&&dt(o,"get",s),dt(o,"get",l));const{has:c}=la(o),u=e?Zc:n?za:st;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!n&&dt(be(s),"iterate",jr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=be(i),l=be(s);return n||(rr(s,l)&&dt(o,"has",s),dt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=be(l),u=e?Zc:n?za:st;return!n&&dt(c,"iterate",jr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return Ze(t,n?{add:ca("add"),set:ca("set"),delete:ca("delete"),clear:ca("clear")}:{add(s){!e&&!qt(s)&&!hr(s)&&(s=be(s));const i=be(this);return la(i).has.call(i,s)||(i.add(s),In(i,"add",s,s)),this},set(s,i){!e&&!qt(i)&&!hr(i)&&(i=be(i));const o=be(this),{has:l,get:c}=la(o);let u=l.call(o,s);u||(s=be(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?rr(i,d)&&In(o,"set",s,i):In(o,"add",s,i),this},delete(s){const i=be(this),{has:o,get:l}=la(i);let c=o.call(i,s);c||(s=be(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&In(i,"delete",s,void 0),u},clear(){const s=be(this),i=s.size!==0,o=s.clear();return i&&In(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=aE(s,n,e)}),t}function eh(n,e){const t=lE(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Se(t,s)&&s in r?t:r,s,i)}const cE={get:eh(!1,!1)},uE={get:eh(!1,!0)},hE={get:eh(!0,!1)};const dg=new WeakMap,fg=new WeakMap,pg=new WeakMap,dE=new WeakMap;function fE(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pE(n){return n.__v_skip||!Object.isExtensible(n)?0:fE(FI(n))}function th(n){return hr(n)?n:nh(n,!1,sE,cE,dg)}function mE(n){return nh(n,!1,oE,uE,fg)}function mg(n){return nh(n,!0,iE,hE,pg)}function nh(n,e,t,r,s){if(!De(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=pE(n);if(i===0)return n;const o=s.get(n);if(o)return o;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function Ps(n){return hr(n)?Ps(n.__v_raw):!!(n&&n.__v_isReactive)}function hr(n){return!!(n&&n.__v_isReadonly)}function qt(n){return!!(n&&n.__v_isShallow)}function rh(n){return n?!!n.__v_raw:!1}function be(n){const e=n&&n.__v_raw;return e?be(e):n}function gE(n){return!Se(n,"__v_skip")&&Object.isExtensible(n)&&Jm(n,"__v_skip",!0),n}const st=n=>De(n)?th(n):n,za=n=>De(n)?mg(n):n;function mt(n){return n?n.__v_isRef===!0:!1}function ye(n){return _E(n,!1)}function _E(n,e){return mt(n)?n:new yE(n,e)}class yE{constructor(e,t){this.dep=new Zu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:be(e),this._value=t?e:st(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||qt(e)||hr(e);e=r?e:be(e),rr(e,t)&&(this._rawValue=e,this._value=r?e:st(e),this.dep.trigger())}}function Ct(n){return mt(n)?n.value:n}const vE={get:(n,e,t)=>e==="__v_raw"?n:Ct(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return mt(s)&&!mt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function gg(n){return Ps(n)?n:new Proxy(n,vE)}class IE{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Zu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=to-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return rg(this,!0),!0}get value(){const e=this.dep.track();return og(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function EE(n,e,t=!1){let r,s;return fe(n)?r=n:(r=n.get,s=n.set),new IE(r,s,t)}const ua={},Ka=new WeakMap;let Vr;function TE(n,e=!1,t=Vr){if(t){let r=Ka.get(t);r||Ka.set(t,r=[]),r.push(n)}}function wE(n,e,t=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=t,u=$=>s?$:qt($)||s===!1||s===0?En($,1):En($);let d,p,m,I,R=!1,k=!1;if(mt(n)?(p=()=>n.value,R=qt(n)):Ps(n)?(p=()=>u(n),R=!0):ie(n)?(k=!0,R=n.some($=>Ps($)||qt($)),p=()=>n.map($=>{if(mt($))return $.value;if(Ps($))return u($);if(fe($))return c?c($,2):$()})):fe(n)?e?p=c?()=>c(n,2):n:p=()=>{if(m){Rn();try{m()}finally{Pn()}}const $=Vr;Vr=d;try{return c?c(n,3,[I]):n(I)}finally{Vr=$}}:p=an,e&&s){const $=p,Z=s===!0?1/0:s;p=()=>En($(),Z)}const x=JI(),B=()=>{d.stop(),x&&x.active&&Gu(x.effects,d)};if(i&&e){const $=e;e=(...Z)=>{$(...Z),B()}}let z=k?new Array(n.length).fill(ua):ua;const q=$=>{if(!(!(d.flags&1)||!d.dirty&&!$))if(e){const Z=d.run();if(s||R||(k?Z.some((ee,b)=>rr(ee,z[b])):rr(Z,z))){m&&m();const ee=Vr;Vr=d;try{const b=[Z,z===ua?void 0:k&&z[0]===ua?[]:z,I];c?c(e,3,b):e(...b),z=Z}finally{Vr=ee}}}else d.run()};return l&&l(q),d=new tg(p),d.scheduler=o?()=>o(q,!1):q,I=$=>TE($,!1,d),m=d.onStop=()=>{const $=Ka.get(d);if($){if(c)c($,4);else for(const Z of $)Z();Ka.delete(d)}},e?r?q(!0):z=d.run():o?o(q.bind(null,!0),!0):d.run(),B.pause=d.pause.bind(d),B.resume=d.resume.bind(d),B.stop=B,B}function En(n,e=1/0,t){if(e<=0||!De(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,mt(n))En(n.value,e,t);else if(ie(n))for(let r=0;r<n.length;r++)En(n[r],e,t);else if(Rl(n)||Rs(n))n.forEach(r=>{En(r,e,t)});else if(Wm(n)){for(const r in n)En(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&En(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function So(n,e,t,r){try{return r?n(...r):n()}catch(s){Vl(s,e,t)}}function Jt(n,e,t,r){if(fe(n)){const s=So(n,e,t,r);return s&&Hm(s)&&s.catch(i=>{Vl(i,e,t)}),s}if(ie(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Jt(n[i],e,t,r));return s}}function Vl(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,c,u)===!1)return}l=l.parent}if(i){Rn(),So(i,null,10,[n,c,u]),Pn();return}}bE(n,t,s,r,o)}function bE(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const It=[];let tn=-1;const Cs=[];let Qn=null,ys=0;const _g=Promise.resolve();let Ha=null;function yg(n){const e=Ha||_g;return n?e.then(this?n.bind(this):n):e}function AE(n){let e=tn+1,t=It.length;for(;e<t;){const r=e+t>>>1,s=It[r],i=ro(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function sh(n){if(!(n.flags&1)){const e=ro(n),t=It[It.length-1];!t||!(n.flags&2)&&e>=ro(t)?It.push(n):It.splice(AE(e),0,n),n.flags|=1,vg()}}function vg(){Ha||(Ha=_g.then(Eg))}function SE(n){ie(n)?Cs.push(...n):Qn&&n.id===-1?Qn.splice(ys+1,0,n):n.flags&1||(Cs.push(n),n.flags|=1),vg()}function ff(n,e,t=tn+1){for(;t<It.length;t++){const r=It[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;It.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ig(n){if(Cs.length){const e=[...new Set(Cs)].sort((t,r)=>ro(t)-ro(r));if(Cs.length=0,Qn){Qn.push(...e);return}for(Qn=e,ys=0;ys<Qn.length;ys++){const t=Qn[ys];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Qn=null,ys=0}}const ro=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Eg(n){try{for(tn=0;tn<It.length;tn++){const e=It[tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),So(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;tn<It.length;tn++){const e=It[tn];e&&(e.flags&=-2)}tn=-1,It.length=0,Ig(),Ha=null,(It.length||Cs.length)&&Eg()}}let Vt=null,Tg=null;function Ga(n){const e=Vt;return Vt=n,Tg=n&&n.type.__scopeId||null,e}function wg(n,e=Vt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Tf(-1);const i=Ga(e);let o;try{o=n(...s)}finally{Ga(i),r._d&&Tf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ba(n,e){if(Vt===null)return n;const t=Ml(Vt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ve]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&En(o),r.push({dir:i,instance:t,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function Pr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Rn(),Jt(c,t,8,[n.el,l,n,e]),Pn())}}const RE=Symbol("_vte"),PE=n=>n.__isTeleport,hs=Symbol("_leaveCb"),ha=Symbol("_enterCb");function CE(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ni(()=>{n.isMounted=!0}),ih(()=>{n.isUnmounting=!0}),n}const Ut=[Function,Array],xE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ut,onEnter:Ut,onAfterEnter:Ut,onEnterCancelled:Ut,onBeforeLeave:Ut,onLeave:Ut,onAfterLeave:Ut,onLeaveCancelled:Ut,onBeforeAppear:Ut,onAppear:Ut,onAfterAppear:Ut,onAppearCancelled:Ut};function kE(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function eu(n,e,t,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:I,onAfterLeave:R,onLeaveCancelled:k,onBeforeAppear:x,onAppear:B,onAfterAppear:z,onAppearCancelled:q}=e,$=String(n.key),Z=kE(t,n),ee=(v,w)=>{v&&Jt(v,r,9,w)},b=(v,w)=>{const A=w[1];ee(v,w),ie(v)?v.every(T=>T.length<=1)&&A():v.length<=1&&A()},y={mode:o,persisted:l,beforeEnter(v){let w=c;if(!t.isMounted)if(i)w=x||c;else return;v[hs]&&v[hs](!0);const A=Z[$];A&&vs(n,A)&&A.el[hs]&&A.el[hs](),ee(w,[v])},enter(v){let w=u,A=d,T=p;if(!t.isMounted)if(i)w=B||u,A=z||d,T=q||p;else return;let _=!1;const oe=v[ha]=Oe=>{_||(_=!0,Oe?ee(T,[v]):ee(A,[v]),y.delayedLeave&&y.delayedLeave(),v[ha]=void 0)};w?b(w,[v,oe]):oe()},leave(v,w){const A=String(n.key);if(v[ha]&&v[ha](!0),t.isUnmounting)return w();ee(m,[v]);let T=!1;const _=v[hs]=oe=>{T||(T=!0,w(),oe?ee(k,[v]):ee(R,[v]),v[hs]=void 0,Z[A]===n&&delete Z[A])};Z[A]=n,I?b(I,[v,_]):_()},clone(v){return eu(v,e,t,r)}};return y}function so(n,e){n.shapeFlag&6&&n.component?(n.transition=e,so(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function bg(n,e=!1,t){let r=[],s=0;for(let i=0;i<n.length;i++){let o=n[i];const l=t==null?o.key:String(t)+String(o.key!=null?o.key:i);o.type===kt?(o.patchFlag&128&&s++,r=r.concat(bg(o.children,e,l))):(e||o.type!==Cn)&&r.push(l!=null?Hr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ag(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Wa(n,e,t,r,s=!1){if(ie(n)){n.forEach((R,k)=>Wa(R,e&&(ie(e)?e[k]:e),t,r,s));return}if(ji(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Wa(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Ml(r.component):r.el,o=s?null:i,{i:l,r:c}=n,u=e&&e.r,d=l.refs===Ve?l.refs={}:l.refs,p=l.setupState,m=be(p),I=p===Ve?()=>!1:R=>Se(m,R);if(u!=null&&u!==c&&(qe(u)?(d[u]=null,I(u)&&(p[u]=null)):mt(u)&&(u.value=null)),fe(c))So(c,l,12,[o,d]);else{const R=qe(c),k=mt(c);if(R||k){const x=()=>{if(n.f){const B=R?I(c)?p[c]:d[c]:c.value;s?ie(B)&&Gu(B,i):ie(B)?B.includes(i)||B.push(i):R?(d[c]=[i],I(c)&&(p[c]=d[c])):(c.value=[i],n.k&&(d[n.k]=c.value))}else R?(d[c]=o,I(c)&&(p[c]=o)):k&&(c.value=o,n.k&&(d[n.k]=o))};o?(x.id=-1,Pt(x,t)):x()}}}Cl().requestIdleCallback;Cl().cancelIdleCallback;const ji=n=>!!n.type.__asyncLoader,Sg=n=>n.type.__isKeepAlive;function VE(n,e){Rg(n,"a",e)}function DE(n,e){Rg(n,"da",e)}function Rg(n,e,t=ft){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Dl(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Sg(s.parent.vnode)&&NE(r,e,t,s),s=s.parent}}function NE(n,e,t,r){const s=Dl(e,n,r,!0);Cg(()=>{Gu(r[e],s)},t)}function Dl(n,e,t=ft,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{Rn();const l=Ro(t),c=Jt(e,t,n,o);return l(),Pn(),c});return r?s.unshift(i):s.push(i),i}}const Nn=n=>(e,t=ft)=>{(!oo||n==="sp")&&Dl(n,(...r)=>e(...r),t)},OE=Nn("bm"),ni=Nn("m"),ME=Nn("bu"),Pg=Nn("u"),ih=Nn("bum"),Cg=Nn("um"),LE=Nn("sp"),FE=Nn("rtg"),UE=Nn("rtc");function BE(n,e=ft){Dl("ec",n,e)}const $E=Symbol.for("v-ndc");function xg(n,e,t,r){let s;const i=t,o=ie(n);if(o||qe(n)){const l=o&&Ps(n);let c=!1,u=!1;l&&(c=!qt(n),u=hr(n),n=kl(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(c?u?za(st(n[d])):st(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(De(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(n[d],d,c,i)}}else s=[];return s}const tu=n=>n?Qg(n)?Ml(n):tu(n.parent):null,qi=Ze(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>tu(n.parent),$root:n=>tu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Vg(n),$forceUpdate:n=>n.f||(n.f=()=>{sh(n.update)}),$nextTick:n=>n.n||(n.n=yg.bind(n.proxy)),$watch:n=>uT.bind(n)}),Cc=(n,e)=>n!==Ve&&!n.__isScriptSetup&&Se(n,e),jE={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=n;let u;if(e[0]!=="$"){const I=o[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Cc(r,e))return o[e]=1,r[e];if(s!==Ve&&Se(s,e))return o[e]=2,s[e];if((u=n.propsOptions[0])&&Se(u,e))return o[e]=3,i[e];if(t!==Ve&&Se(t,e))return o[e]=4,t[e];nu&&(o[e]=0)}}const d=qi[e];let p,m;if(d)return e==="$attrs"&&dt(n.attrs,"get",""),d(n);if((p=l.__cssModules)&&(p=p[e]))return p;if(t!==Ve&&Se(t,e))return o[e]=4,t[e];if(m=c.config.globalProperties,Se(m,e))return m[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Cc(s,e)?(s[e]=t,!0):r!==Ve&&Se(r,e)?(r[e]=t,!0):Se(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!t[o]||n!==Ve&&Se(n,o)||Cc(e,o)||(l=i[0])&&Se(l,o)||Se(r,o)||Se(qi,o)||Se(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Se(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function pf(n){return ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let nu=!0;function qE(n){const e=Vg(n),t=n.proxy,r=n.ctx;nu=!1,e.beforeCreate&&mf(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:I,updated:R,activated:k,deactivated:x,beforeDestroy:B,beforeUnmount:z,destroyed:q,unmounted:$,render:Z,renderTracked:ee,renderTriggered:b,errorCaptured:y,serverPrefetch:v,expose:w,inheritAttrs:A,components:T,directives:_,filters:oe}=e;if(u&&zE(u,r,null),o)for(const Pe in o){const Ee=o[Pe];fe(Ee)&&(r[Pe]=Ee.bind(t))}if(s){const Pe=s.call(t,t);De(Pe)&&(n.data=th(Pe))}if(nu=!0,i)for(const Pe in i){const Ee=i[Pe],Kt=fe(Ee)?Ee.bind(t,t):fe(Ee.get)?Ee.get.bind(t,t):an,Er=!fe(Ee)&&fe(Ee.set)?Ee.set.bind(t):an,pn=dr({get:Kt,set:Er});Object.defineProperty(r,Pe,{enumerable:!0,configurable:!0,get:()=>pn.value,set:We=>pn.value=We})}if(l)for(const Pe in l)kg(l[Pe],r,t,Pe);if(c){const Pe=fe(c)?c.call(t):c;Reflect.ownKeys(Pe).forEach(Ee=>{JE(Ee,Pe[Ee])})}d&&mf(d,n,"c");function ze(Pe,Ee){ie(Ee)?Ee.forEach(Kt=>Pe(Kt.bind(t))):Ee&&Pe(Ee.bind(t))}if(ze(OE,p),ze(ni,m),ze(ME,I),ze(Pg,R),ze(VE,k),ze(DE,x),ze(BE,y),ze(UE,ee),ze(FE,b),ze(ih,z),ze(Cg,$),ze(LE,v),ie(w))if(w.length){const Pe=n.exposed||(n.exposed={});w.forEach(Ee=>{Object.defineProperty(Pe,Ee,{get:()=>t[Ee],set:Kt=>t[Ee]=Kt})})}else n.exposed||(n.exposed={});Z&&n.render===an&&(n.render=Z),A!=null&&(n.inheritAttrs=A),T&&(n.components=T),_&&(n.directives=_),v&&Ag(n)}function zE(n,e,t=an){ie(n)&&(n=ru(n));for(const r in n){const s=n[r];let i;De(s)?"default"in s?i=Aa(s.from||r,s.default,!0):i=Aa(s.from||r):i=Aa(s),mt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function mf(n,e,t){Jt(ie(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function kg(n,e,t,r){let s=r.includes(".")?zg(t,r):()=>t[r];if(qe(n)){const i=e[n];fe(i)&&ks(s,i)}else if(fe(n))ks(s,n.bind(t));else if(De(n))if(ie(n))n.forEach(i=>kg(i,e,t,r));else{const i=fe(n.handler)?n.handler.bind(t):e[n.handler];fe(i)&&ks(s,i,n)}}function Vg(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(u=>Qa(c,u,o,!0)),Qa(c,e,o)),De(e)&&i.set(e,c),c}function Qa(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Qa(n,i,t,!0),s&&s.forEach(o=>Qa(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const l=KE[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const KE={data:gf,props:_f,emits:_f,methods:Vi,computed:Vi,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Vi,directives:Vi,watch:GE,provide:gf,inject:HE};function gf(n,e){return e?n?function(){return Ze(fe(n)?n.call(this,this):n,fe(e)?e.call(this,this):e)}:e:n}function HE(n,e){return Vi(ru(n),ru(e))}function ru(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function yt(n,e){return n?[...new Set([].concat(n,e))]:e}function Vi(n,e){return n?Ze(Object.create(null),n,e):e}function _f(n,e){return n?ie(n)&&ie(e)?[...new Set([...n,...e])]:Ze(Object.create(null),pf(n),pf(e??{})):e}function GE(n,e){if(!n)return e;if(!e)return n;const t=Ze(Object.create(null),n);for(const r in e)t[r]=yt(n[r],e[r]);return t}function Dg(){return{app:null,config:{isNativeTag:MI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let WE=0;function QE(n,e){return function(r,s=null){fe(r)||(r=Ze({},r)),s!=null&&!De(s)&&(s=null);const i=Dg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:WE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:VT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&fe(d.install)?(o.add(d),d.install(u,...p)):fe(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const I=u._ceVNode||we(r,s);return I.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),n(I,d,m),c=!0,u._container=d,d.__vue_app__=u,Ml(I.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Jt(l,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=xs;xs=u;try{return d()}finally{xs=p}}};return u}}let xs=null;function JE(n,e){if(ft){let t=ft.provides;const r=ft.parent&&ft.parent.provides;r===t&&(t=ft.provides=Object.create(r)),t[n]=e}}function Aa(n,e,t=!1){const r=ft||Vt;if(r||xs){const s=xs?xs._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&fe(e)?e.call(r&&r.proxy):e}}const Ng={},Og=()=>Object.create(Ng),Mg=n=>Object.getPrototypeOf(n)===Ng;function YE(n,e,t,r=!1){const s={},i=Og();n.propsDefaults=Object.create(null),Lg(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:mE(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function XE(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,l=be(s),[c]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Nl(n.emitsOptions,m))continue;const I=e[m];if(c)if(Se(i,m))I!==i[m]&&(i[m]=I,u=!0);else{const R=ur(m);s[R]=su(c,l,R,I,n,!1)}else I!==i[m]&&(i[m]=I,u=!0)}}}else{Lg(n,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Se(e,p)&&((d=_r(p))===p||!Se(e,d)))&&(c?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=su(c,l,p,void 0,n,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Se(e,p))&&(delete i[p],u=!0)}u&&In(n.attrs,"set","")}function Lg(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ui(c))continue;const u=e[c];let d;s&&Se(s,d=ur(c))?!i||!i.includes(d)?t[d]=u:(l||(l={}))[d]=u:Nl(n.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=be(t),u=l||Ve;for(let d=0;d<i.length;d++){const p=i[d];t[p]=su(s,c,p,u[p],n,!Se(u,p))}}return o}function su(n,e,t,r,s,i){const o=n[t];if(o!=null){const l=Se(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=s;if(t in u)r=u[t];else{const d=Ro(s);r=u[t]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(t,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===_r(t))&&(r=!0))}return r}const ZE=new WeakMap;function Fg(n,e,t=!1){const r=t?ZE:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},l=[];let c=!1;if(!fe(n)){const d=p=>{c=!0;const[m,I]=Fg(p,e,!0);Ze(o,m),I&&l.push(...I)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!c)return De(n)&&r.set(n,Ss),Ss;if(ie(i))for(let d=0;d<i.length;d++){const p=ur(i[d]);yf(p)&&(o[p]=Ve)}else if(i)for(const d in i){const p=ur(d);if(yf(p)){const m=i[d],I=o[p]=ie(m)||fe(m)?{type:m}:Ze({},m),R=I.type;let k=!1,x=!0;if(ie(R))for(let B=0;B<R.length;++B){const z=R[B],q=fe(z)&&z.name;if(q==="Boolean"){k=!0;break}else q==="String"&&(x=!1)}else k=fe(R)&&R.name==="Boolean";I[0]=k,I[1]=x,(k||Se(I,"default"))&&l.push(p)}}const u=[o,l];return De(n)&&r.set(n,u),u}function yf(n){return n[0]!=="$"&&!Ui(n)}const oh=n=>n[0]==="_"||n==="$stable",ah=n=>ie(n)?n.map(rn):[rn(n)],eT=(n,e,t)=>{if(e._n)return e;const r=wg((...s)=>ah(e(...s)),t);return r._c=!1,r},Ug=(n,e,t)=>{const r=n._ctx;for(const s in n){if(oh(s))continue;const i=n[s];if(fe(i))e[s]=eT(s,i,r);else if(i!=null){const o=ah(i);e[s]=()=>o}}},Bg=(n,e)=>{const t=ah(e);n.slots.default=()=>t},$g=(n,e,t)=>{for(const r in e)(t||!oh(r))&&(n[r]=e[r])},tT=(n,e,t)=>{const r=n.slots=Og();if(n.vnode.shapeFlag&32){const s=e._;s?($g(r,e,t),t&&Jm(r,"_",s,!0)):Ug(e,r)}else e&&Bg(n,e)},nT=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=Ve;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:$g(s,e,t):(i=!e.$stable,Ug(e,s)),o=e}else e&&(Bg(n,e),o={default:1});if(i)for(const l in s)!oh(l)&&o[l]==null&&delete s[l]},Pt=_T;function rT(n){return sT(n)}function sT(n,e){const t=Cl();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:I=an,insertStaticContent:R}=n,k=(E,S,D,L=null,O=null,M=null,J=void 0,H=null,K=!!S.dynamicChildren)=>{if(E===S)return;E&&!vs(E,S)&&(L=mn(E),We(E,O,M,!0),E=null),S.patchFlag===-2&&(K=!1,S.dynamicChildren=null);const{type:F,ref:re,shapeFlag:W}=S;switch(F){case Ol:x(E,S,D,L);break;case Cn:B(E,S,D,L);break;case kc:E==null&&z(S,D,L,J);break;case kt:T(E,S,D,L,O,M,J,H,K);break;default:W&1?Z(E,S,D,L,O,M,J,H,K):W&6?_(E,S,D,L,O,M,J,H,K):(W&64||W&128)&&F.process(E,S,D,L,O,M,J,H,K,Xt)}re!=null&&O&&Wa(re,E&&E.ref,M,S||E,!S)},x=(E,S,D,L)=>{if(E==null)r(S.el=l(S.children),D,L);else{const O=S.el=E.el;S.children!==E.children&&u(O,S.children)}},B=(E,S,D,L)=>{E==null?r(S.el=c(S.children||""),D,L):S.el=E.el},z=(E,S,D,L)=>{[E.el,E.anchor]=R(E.children,S,D,L,E.el,E.anchor)},q=({el:E,anchor:S},D,L)=>{let O;for(;E&&E!==S;)O=m(E),r(E,D,L),E=O;r(S,D,L)},$=({el:E,anchor:S})=>{let D;for(;E&&E!==S;)D=m(E),s(E),E=D;s(S)},Z=(E,S,D,L,O,M,J,H,K)=>{S.type==="svg"?J="svg":S.type==="math"&&(J="mathml"),E==null?ee(S,D,L,O,M,J,H,K):v(E,S,O,M,J,H,K)},ee=(E,S,D,L,O,M,J,H)=>{let K,F;const{props:re,shapeFlag:W,transition:te,dirs:ce}=E;if(K=E.el=o(E.type,M,re&&re.is,re),W&8?d(K,E.children):W&16&&y(E.children,K,null,L,O,xc(E,M),J,H),ce&&Pr(E,null,L,"created"),b(K,E,E.scopeId,J,L),re){for(const de in re)de!=="value"&&!Ui(de)&&i(K,de,null,re[de],M,L);"value"in re&&i(K,"value",null,re.value,M),(F=re.onVnodeBeforeMount)&&Zt(F,L,E)}ce&&Pr(E,null,L,"beforeMount");const ae=iT(O,te);ae&&te.beforeEnter(K),r(K,S,D),((F=re&&re.onVnodeMounted)||ae||ce)&&Pt(()=>{F&&Zt(F,L,E),ae&&te.enter(K),ce&&Pr(E,null,L,"mounted")},O)},b=(E,S,D,L,O)=>{if(D&&I(E,D),L)for(let M=0;M<L.length;M++)I(E,L[M]);if(O){let M=O.subTree;if(S===M||Hg(M.type)&&(M.ssContent===S||M.ssFallback===S)){const J=O.vnode;b(E,J,J.scopeId,J.slotScopeIds,O.parent)}}},y=(E,S,D,L,O,M,J,H,K=0)=>{for(let F=K;F<E.length;F++){const re=E[F]=H?Jn(E[F]):rn(E[F]);k(null,re,S,D,L,O,M,J,H)}},v=(E,S,D,L,O,M,J)=>{const H=S.el=E.el;let{patchFlag:K,dynamicChildren:F,dirs:re}=S;K|=E.patchFlag&16;const W=E.props||Ve,te=S.props||Ve;let ce;if(D&&Cr(D,!1),(ce=te.onVnodeBeforeUpdate)&&Zt(ce,D,S,E),re&&Pr(S,E,D,"beforeUpdate"),D&&Cr(D,!0),(W.innerHTML&&te.innerHTML==null||W.textContent&&te.textContent==null)&&d(H,""),F?w(E.dynamicChildren,F,H,D,L,xc(S,O),M):J||Ee(E,S,H,null,D,L,xc(S,O),M,!1),K>0){if(K&16)A(H,W,te,D,O);else if(K&2&&W.class!==te.class&&i(H,"class",null,te.class,O),K&4&&i(H,"style",W.style,te.style,O),K&8){const ae=S.dynamicProps;for(let de=0;de<ae.length;de++){const ve=ae[de],ot=W[ve],et=te[ve];(et!==ot||ve==="value")&&i(H,ve,ot,et,O,D)}}K&1&&E.children!==S.children&&d(H,S.children)}else!J&&F==null&&A(H,W,te,D,O);((ce=te.onVnodeUpdated)||re)&&Pt(()=>{ce&&Zt(ce,D,S,E),re&&Pr(S,E,D,"updated")},L)},w=(E,S,D,L,O,M,J)=>{for(let H=0;H<S.length;H++){const K=E[H],F=S[H],re=K.el&&(K.type===kt||!vs(K,F)||K.shapeFlag&70)?p(K.el):D;k(K,F,re,null,L,O,M,J,!0)}},A=(E,S,D,L,O)=>{if(S!==D){if(S!==Ve)for(const M in S)!Ui(M)&&!(M in D)&&i(E,M,S[M],null,O,L);for(const M in D){if(Ui(M))continue;const J=D[M],H=S[M];J!==H&&M!=="value"&&i(E,M,H,J,O,L)}"value"in D&&i(E,"value",S.value,D.value,O)}},T=(E,S,D,L,O,M,J,H,K)=>{const F=S.el=E?E.el:l(""),re=S.anchor=E?E.anchor:l("");let{patchFlag:W,dynamicChildren:te,slotScopeIds:ce}=S;ce&&(H=H?H.concat(ce):ce),E==null?(r(F,D,L),r(re,D,L),y(S.children||[],D,re,O,M,J,H,K)):W>0&&W&64&&te&&E.dynamicChildren?(w(E.dynamicChildren,te,D,O,M,J,H),(S.key!=null||O&&S===O.subTree)&&jg(E,S,!0)):Ee(E,S,D,re,O,M,J,H,K)},_=(E,S,D,L,O,M,J,H,K)=>{S.slotScopeIds=H,E==null?S.shapeFlag&512?O.ctx.activate(S,D,L,J,K):oe(S,D,L,O,M,J,K):Oe(E,S,K)},oe=(E,S,D,L,O,M,J)=>{const H=E.component=AT(E,L,O);if(Sg(E)&&(H.ctx.renderer=Xt),RT(H,!1,J),H.asyncDep){if(O&&O.registerDep(H,ze,J),!E.el){const K=H.subTree=we(Cn);B(null,K,S,D)}}else ze(H,E,S,D,O,M,J)},Oe=(E,S,D)=>{const L=S.component=E.component;if(mT(E,S,D))if(L.asyncDep&&!L.asyncResolved){Pe(L,S,D);return}else L.next=S,L.update();else S.el=E.el,L.vnode=S},ze=(E,S,D,L,O,M,J)=>{const H=()=>{if(E.isMounted){let{next:W,bu:te,u:ce,parent:ae,vnode:de}=E;{const at=qg(E);if(at){W&&(W.el=de.el,Pe(E,W,J)),at.asyncDep.then(()=>{E.isUnmounted||H()});return}}let ve=W,ot;Cr(E,!1),W?(W.el=de.el,Pe(E,W,J)):W=de,te&&wa(te),(ot=W.props&&W.props.onVnodeBeforeUpdate)&&Zt(ot,ae,W,de),Cr(E,!0);const et=If(E),Lt=E.subTree;E.subTree=et,k(Lt,et,p(Lt.el),mn(Lt),E,O,M),W.el=et.el,ve===null&&gT(E,et.el),ce&&Pt(ce,O),(ot=W.props&&W.props.onVnodeUpdated)&&Pt(()=>Zt(ot,ae,W,de),O)}else{let W;const{el:te,props:ce}=S,{bm:ae,m:de,parent:ve,root:ot,type:et}=E,Lt=ji(S);Cr(E,!1),ae&&wa(ae),!Lt&&(W=ce&&ce.onVnodeBeforeMount)&&Zt(W,ve,S),Cr(E,!0);{ot.ce&&ot.ce._injectChildStyle(et);const at=E.subTree=If(E);k(null,at,D,L,E,O,M),S.el=at.el}if(de&&Pt(de,O),!Lt&&(W=ce&&ce.onVnodeMounted)){const at=S;Pt(()=>Zt(W,ve,at),O)}(S.shapeFlag&256||ve&&ji(ve.vnode)&&ve.vnode.shapeFlag&256)&&E.a&&Pt(E.a,O),E.isMounted=!0,S=D=L=null}};E.scope.on();const K=E.effect=new tg(H);E.scope.off();const F=E.update=K.run.bind(K),re=E.job=K.runIfDirty.bind(K);re.i=E,re.id=E.uid,K.scheduler=()=>sh(re),Cr(E,!0),F()},Pe=(E,S,D)=>{S.component=E;const L=E.vnode.props;E.vnode=S,E.next=null,XE(E,S.props,L,D),nT(E,S.children,D),Rn(),ff(E),Pn()},Ee=(E,S,D,L,O,M,J,H,K=!1)=>{const F=E&&E.children,re=E?E.shapeFlag:0,W=S.children,{patchFlag:te,shapeFlag:ce}=S;if(te>0){if(te&128){Er(F,W,D,L,O,M,J,H,K);return}else if(te&256){Kt(F,W,D,L,O,M,J,H,K);return}}ce&8?(re&16&&wr(F,O,M),W!==F&&d(D,W)):re&16?ce&16?Er(F,W,D,L,O,M,J,H,K):wr(F,O,M,!0):(re&8&&d(D,""),ce&16&&y(W,D,L,O,M,J,H,K))},Kt=(E,S,D,L,O,M,J,H,K)=>{E=E||Ss,S=S||Ss;const F=E.length,re=S.length,W=Math.min(F,re);let te;for(te=0;te<W;te++){const ce=S[te]=K?Jn(S[te]):rn(S[te]);k(E[te],ce,D,null,O,M,J,H,K)}F>re?wr(E,O,M,!0,!1,W):y(S,D,L,O,M,J,H,K,W)},Er=(E,S,D,L,O,M,J,H,K)=>{let F=0;const re=S.length;let W=E.length-1,te=re-1;for(;F<=W&&F<=te;){const ce=E[F],ae=S[F]=K?Jn(S[F]):rn(S[F]);if(vs(ce,ae))k(ce,ae,D,null,O,M,J,H,K);else break;F++}for(;F<=W&&F<=te;){const ce=E[W],ae=S[te]=K?Jn(S[te]):rn(S[te]);if(vs(ce,ae))k(ce,ae,D,null,O,M,J,H,K);else break;W--,te--}if(F>W){if(F<=te){const ce=te+1,ae=ce<re?S[ce].el:L;for(;F<=te;)k(null,S[F]=K?Jn(S[F]):rn(S[F]),D,ae,O,M,J,H,K),F++}}else if(F>te)for(;F<=W;)We(E[F],O,M,!0),F++;else{const ce=F,ae=F,de=new Map;for(F=ae;F<=te;F++){const tt=S[F]=K?Jn(S[F]):rn(S[F]);tt.key!=null&&de.set(tt.key,F)}let ve,ot=0;const et=te-ae+1;let Lt=!1,at=0;const Fn=new Array(et);for(F=0;F<et;F++)Fn[F]=0;for(F=ce;F<=W;F++){const tt=E[F];if(ot>=et){We(tt,O,M,!0);continue}let Ft;if(tt.key!=null)Ft=de.get(tt.key);else for(ve=ae;ve<=te;ve++)if(Fn[ve-ae]===0&&vs(tt,S[ve])){Ft=ve;break}Ft===void 0?We(tt,O,M,!0):(Fn[Ft-ae]=F+1,Ft>=at?at=Ft:Lt=!0,k(tt,S[Ft],D,null,O,M,J,H,K),ot++)}const di=Lt?oT(Fn):Ss;for(ve=di.length-1,F=et-1;F>=0;F--){const tt=ae+F,Ft=S[tt],Ho=tt+1<re?S[tt+1].el:L;Fn[F]===0?k(null,Ft,D,Ho,O,M,J,H,K):Lt&&(ve<0||F!==di[ve]?pn(Ft,D,Ho,2):ve--)}}},pn=(E,S,D,L,O=null)=>{const{el:M,type:J,transition:H,children:K,shapeFlag:F}=E;if(F&6){pn(E.component.subTree,S,D,L);return}if(F&128){E.suspense.move(S,D,L);return}if(F&64){J.move(E,S,D,Xt);return}if(J===kt){r(M,S,D);for(let W=0;W<K.length;W++)pn(K[W],S,D,L);r(E.anchor,S,D);return}if(J===kc){q(E,S,D);return}if(L!==2&&F&1&&H)if(L===0)H.beforeEnter(M),r(M,S,D),Pt(()=>H.enter(M),O);else{const{leave:W,delayLeave:te,afterLeave:ce}=H,ae=()=>{E.ctx.isUnmounted?s(M):r(M,S,D)},de=()=>{W(M,()=>{ae(),ce&&ce()})};te?te(M,ae,de):de()}else r(M,S,D)},We=(E,S,D,L=!1,O=!1)=>{const{type:M,props:J,ref:H,children:K,dynamicChildren:F,shapeFlag:re,patchFlag:W,dirs:te,cacheIndex:ce}=E;if(W===-2&&(O=!1),H!=null&&(Rn(),Wa(H,null,D,E,!0),Pn()),ce!=null&&(S.renderCache[ce]=void 0),re&256){S.ctx.deactivate(E);return}const ae=re&1&&te,de=!ji(E);let ve;if(de&&(ve=J&&J.onVnodeBeforeUnmount)&&Zt(ve,S,E),re&6)Tr(E.component,D,L);else{if(re&128){E.suspense.unmount(D,L);return}ae&&Pr(E,null,S,"beforeUnmount"),re&64?E.type.remove(E,S,D,Xt,L):F&&!F.hasOnce&&(M!==kt||W>0&&W&64)?wr(F,S,D,!1,!0):(M===kt&&W&384||!O&&re&16)&&wr(K,S,D),L&&Qe(E)}(de&&(ve=J&&J.onVnodeUnmounted)||ae)&&Pt(()=>{ve&&Zt(ve,S,E),ae&&Pr(E,null,S,"unmounted")},D)},Qe=E=>{const{type:S,el:D,anchor:L,transition:O}=E;if(S===kt){lc(D,L);return}if(S===kc){$(E);return}const M=()=>{s(D),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(E.shapeFlag&1&&O&&!O.persisted){const{leave:J,delayLeave:H}=O,K=()=>J(D,M);H?H(E.el,M,K):K()}else M()},lc=(E,S)=>{let D;for(;E!==S;)D=m(E),s(E),E=D;s(S)},Tr=(E,S,D)=>{const{bum:L,scope:O,job:M,subTree:J,um:H,m:K,a:F,parent:re,slots:{__:W}}=E;vf(K),vf(F),L&&wa(L),re&&ie(W)&&W.forEach(te=>{re.renderCache[te]=void 0}),O.stop(),M&&(M.flags|=8,We(J,E,S,D)),H&&Pt(H,S),Pt(()=>{E.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},wr=(E,S,D,L=!1,O=!1,M=0)=>{for(let J=M;J<E.length;J++)We(E[J],S,D,L,O)},mn=E=>{if(E.shapeFlag&6)return mn(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const S=m(E.anchor||E.el),D=S&&S[RE];return D?m(D):S};let ui=!1;const Ko=(E,S,D)=>{E==null?S._vnode&&We(S._vnode,null,null,!0):k(S._vnode||null,E,S,null,null,null,D),S._vnode=E,ui||(ui=!0,ff(),Ig(),ui=!1)},Xt={p:k,um:We,m:pn,r:Qe,mt:oe,mc:y,pc:Ee,pbc:w,n:mn,o:n};return{render:Ko,hydrate:void 0,createApp:QE(Ko)}}function xc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Cr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function iT(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function jg(n,e,t=!1){const r=n.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Jn(s[i]),l.el=o.el),!t&&l.patchFlag!==-2&&jg(o,l)),l.type===Ol&&(l.el=o.el),l.type===Cn&&!l.el&&(l.el=o.el)}}function oT(n){const e=n.slice(),t=[0];let r,s,i,o,l;const c=n.length;for(r=0;r<c;r++){const u=n[r];if(u!==0){if(s=t[t.length-1],n[s]<u){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)l=i+o>>1,n[t[l]]<u?i=l+1:o=l;u<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function qg(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qg(e)}function vf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const aT=Symbol.for("v-scx"),lT=()=>Aa(aT);function cT(n,e){return lh(n,null,e)}function ks(n,e,t){return lh(n,e,t)}function lh(n,e,t=Ve){const{immediate:r,deep:s,flush:i,once:o}=t,l=Ze({},t),c=e&&r||!e&&i!=="post";let u;if(oo){if(i==="sync"){const I=lT();u=I.__watcherHandles||(I.__watcherHandles=[])}else if(!c){const I=()=>{};return I.stop=an,I.resume=an,I.pause=an,I}}const d=ft;l.call=(I,R,k)=>Jt(I,d,R,k);let p=!1;i==="post"?l.scheduler=I=>{Pt(I,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(I,R)=>{R?I():sh(I)}),l.augmentJob=I=>{e&&(I.flags|=4),p&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const m=wE(n,e,l);return oo&&(u?u.push(m):c&&m()),m}function uT(n,e,t){const r=this.proxy,s=qe(n)?n.includes(".")?zg(r,n):()=>r[n]:n.bind(r,r);let i;fe(e)?i=e:(i=e.handler,t=e);const o=Ro(this),l=lh(s,i.bind(r),t);return o(),l}function zg(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const hT=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ur(e)}Modifiers`]||n[`${_r(e)}Modifiers`];function dT(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ve;let s=t;const i=e.startsWith("update:"),o=i&&hT(r,e.slice(7));o&&(o.trim&&(s=t.map(d=>qe(d)?d.trim():d)),o.number&&(s=t.map(Qc)));let l,c=r[l=bc(e)]||r[l=bc(ur(e))];!c&&i&&(c=r[l=bc(_r(e))]),c&&Jt(c,n,6,s);const u=r[l+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Jt(u,n,6,s)}}function Kg(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},l=!1;if(!fe(n)){const c=u=>{const d=Kg(u,e,!0);d&&(l=!0,Ze(o,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(De(n)&&r.set(n,null),null):(ie(i)?i.forEach(c=>o[c]=null):Ze(o,i),De(n)&&r.set(n,o),o)}function Nl(n,e){return!n||!Sl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(n,e[0].toLowerCase()+e.slice(1))||Se(n,_r(e))||Se(n,e))}function If(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:I,ctx:R,inheritAttrs:k}=n,x=Ga(n);let B,z;try{if(t.shapeFlag&4){const $=s||r,Z=$;B=rn(u.call(Z,$,d,p,I,m,R)),z=l}else{const $=e;B=rn($.length>1?$(p,{attrs:l,slots:o,emit:c}):$(p,null)),z=e.props?l:fT(l)}}catch($){zi.length=0,Vl($,n,1),B=we(Cn)}let q=B;if(z&&k!==!1){const $=Object.keys(z),{shapeFlag:Z}=q;$.length&&Z&7&&(i&&$.some(Hu)&&(z=pT(z,i)),q=Hr(q,z,!1,!0))}return t.dirs&&(q=Hr(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(t.dirs):t.dirs),t.transition&&so(q,t.transition),B=q,Ga(x),B}const fT=n=>{let e;for(const t in n)(t==="class"||t==="style"||Sl(t))&&((e||(e={}))[t]=n[t]);return e},pT=(n,e)=>{const t={};for(const r in n)(!Hu(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function mT(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Ef(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Nl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Ef(r,o,u):!0:!!o;return!1}function Ef(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Nl(t,i))return!0}return!1}function gT({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Hg=n=>n.__isSuspense;function _T(n,e){e&&e.pendingBranch?ie(n)?e.effects.push(...n):e.effects.push(n):SE(n)}const kt=Symbol.for("v-fgt"),Ol=Symbol.for("v-txt"),Cn=Symbol.for("v-cmt"),kc=Symbol.for("v-stc"),zi=[];let Dt=null;function me(n=!1){zi.push(Dt=n?null:[])}function yT(){zi.pop(),Dt=zi[zi.length-1]||null}let io=1;function Tf(n,e=!1){io+=n,n<0&&Dt&&e&&(Dt.hasOnce=!0)}function Gg(n){return n.dynamicChildren=io>0?Dt||Ss:null,yT(),io>0&&Dt&&Dt.push(n),n}function Ae(n,e,t,r,s,i){return Gg(j(n,e,t,r,s,i,!0))}function Vs(n,e,t,r,s){return Gg(we(n,e,t,r,s,!0))}function Ja(n){return n?n.__v_isVNode===!0:!1}function vs(n,e){return n.type===e.type&&n.key===e.key}const Wg=({key:n})=>n??null,Sa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?qe(n)||mt(n)||fe(n)?{i:Vt,r:n,k:e,f:!!t}:n:null);function j(n,e=null,t=null,r=0,s=null,i=n===kt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Wg(e),ref:e&&Sa(e),scopeId:Tg,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Vt};return l?(ch(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=qe(t)?8:16),io>0&&!o&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const we=vT;function vT(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===$E)&&(n=Cn),Ja(n)){const l=Hr(n,e,!0);return t&&ch(l,t),io>0&&!i&&Dt&&(l.shapeFlag&6?Dt[Dt.indexOf(n)]=l:Dt.push(l)),l.patchFlag=-2,l}if(kT(n)&&(n=n.__vccOpts),e){e=IT(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=At(l)),De(c)&&(rh(c)&&!ie(c)&&(c=Ze({},c)),e.style=Qu(c))}const o=qe(n)?1:Hg(n)?128:PE(n)?64:De(n)?4:fe(n)?2:0;return j(n,e,t,r,s,o,i,!0)}function IT(n){return n?rh(n)||Mg(n)?Ze({},n):n:null}function Hr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=n,u=e?TT(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Wg(u),ref:e&&e.ref?t&&i?ie(i)?i.concat(Sa(e)):[i,Sa(e)]:Sa(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==kt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Hr(n.ssContent),ssFallback:n.ssFallback&&Hr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&so(d,c.clone(d)),d}function ET(n=" ",e=0){return we(Ol,null,n,e)}function ri(n="",e=!1){return e?(me(),Vs(Cn,null,n)):we(Cn,null,n)}function rn(n){return n==null||typeof n=="boolean"?we(Cn):ie(n)?we(kt,null,n.slice()):Ja(n)?Jn(n):we(Ol,null,String(n))}function Jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Hr(n)}function ch(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ie(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ch(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Mg(e)?e._ctx=Vt:s===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Vt},t=32):(e=String(e),r&64?(t=16,e=[ET(e)]):t=8);n.children=e,n.shapeFlag|=t}function TT(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=At([e.class,r.class]));else if(s==="style")e.style=Qu([e.style,r.style]);else if(Sl(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Zt(n,e,t,r=null){Jt(n,e,7,[t,r])}const wT=Dg();let bT=0;function AT(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||wT,i={uid:bT++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new QI(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fg(r,s),emitsOptions:Kg(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=dT.bind(null,i),n.ce&&n.ce(i),i}let ft=null;const ST=()=>ft||Vt;let Ya,iu;{const n=Cl(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ya=e("__VUE_INSTANCE_SETTERS__",t=>ft=t),iu=e("__VUE_SSR_SETTERS__",t=>oo=t)}const Ro=n=>{const e=ft;return Ya(n),n.scope.on(),()=>{n.scope.off(),Ya(e)}},wf=()=>{ft&&ft.scope.off(),Ya(null)};function Qg(n){return n.vnode.shapeFlag&4}let oo=!1;function RT(n,e=!1,t=!1){e&&iu(e);const{props:r,children:s}=n.vnode,i=Qg(n);YE(n,r,i,e),tT(n,s,t||e);const o=i?PT(n,e):void 0;return e&&iu(!1),o}function PT(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,jE);const{setup:r}=t;if(r){Rn();const s=n.setupContext=r.length>1?xT(n):null,i=Ro(n),o=So(r,n,0,[n.props,s]),l=Hm(o);if(Pn(),i(),(l||n.sp)&&!ji(n)&&Ag(n),l){if(o.then(wf,wf),e)return o.then(c=>{bf(n,c)}).catch(c=>{Vl(c,n,0)});n.asyncDep=o}else bf(n,o)}else Jg(n)}function bf(n,e,t){fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:De(e)&&(n.setupState=gg(e)),Jg(n)}function Jg(n,e,t){const r=n.type;n.render||(n.render=r.render||an);{const s=Ro(n);Rn();try{qE(n)}finally{Pn(),s()}}}const CT={get(n,e){return dt(n,"get",""),n[e]}};function xT(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,CT),slots:n.slots,emit:n.emit,expose:e}}function Ml(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(gg(gE(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qi)return qi[t](n)},has(e,t){return t in e||t in qi}})):n.proxy}function kT(n){return fe(n)&&"__vccOpts"in n}const dr=(n,e)=>EE(n,e,oo);function ou(n,e,t){const r=arguments.length;return r===2?De(e)&&!ie(e)?Ja(e)?we(n,null,[e]):we(n,e):we(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Ja(t)&&(t=[t]),we(n,e,t))}const VT="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let au;const Af=typeof window<"u"&&window.trustedTypes;if(Af)try{au=Af.createPolicy("vue",{createHTML:n=>n})}catch{}const Yg=au?n=>au.createHTML(n):n=>n,DT="http://www.w3.org/2000/svg",NT="http://www.w3.org/1998/Math/MathML",vn=typeof document<"u"?document:null,Sf=vn&&vn.createElement("template"),OT={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?vn.createElementNS(DT,n):e==="mathml"?vn.createElementNS(NT,n):t?vn.createElement(n,{is:t}):vn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>vn.createTextNode(n),createComment:n=>vn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>vn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Sf.innerHTML=Yg(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=Sf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},jn="transition",Si="animation",Us=Symbol("_vtc"),Xg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},MT=Ze({},xE,Xg),xr=(n,e=[])=>{ie(n)?n.forEach(t=>t(...e)):n&&n(...e)},Rf=n=>n?ie(n)?n.some(e=>e.length>1):n.length>1:!1;function LT(n){const e={};for(const T in n)T in Xg||(e[T]=n[T]);if(n.css===!1)return e;const{name:t="v",type:r,duration:s,enterFromClass:i=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:I=`${t}-leave-to`}=n,R=FT(s),k=R&&R[0],x=R&&R[1],{onBeforeEnter:B,onEnter:z,onEnterCancelled:q,onLeave:$,onLeaveCancelled:Z,onBeforeAppear:ee=B,onAppear:b=z,onAppearCancelled:y=q}=e,v=(T,_,oe,Oe)=>{T._enterCancelled=Oe,Wn(T,_?d:l),Wn(T,_?u:o),oe&&oe()},w=(T,_)=>{T._isLeaving=!1,Wn(T,p),Wn(T,I),Wn(T,m),_&&_()},A=T=>(_,oe)=>{const Oe=T?b:z,ze=()=>v(_,T,oe);xr(Oe,[_,ze]),Pf(()=>{Wn(_,T?c:i),en(_,T?d:l),Rf(Oe)||Cf(_,r,k,ze)})};return Ze(e,{onBeforeEnter(T){xr(B,[T]),en(T,i),en(T,o)},onBeforeAppear(T){xr(ee,[T]),en(T,c),en(T,u)},onEnter:A(!1),onAppear:A(!0),onLeave(T,_){T._isLeaving=!0;const oe=()=>w(T,_);en(T,p),T._enterCancelled?(en(T,m),lu()):(lu(),en(T,m)),Pf(()=>{T._isLeaving&&(Wn(T,p),en(T,I),Rf($)||Cf(T,r,x,oe))}),xr($,[T,oe])},onEnterCancelled(T){v(T,!1,void 0,!0),xr(q,[T])},onAppearCancelled(T){v(T,!0,void 0,!0),xr(y,[T])},onLeaveCancelled(T){w(T),xr(Z,[T])}})}function FT(n){if(n==null)return null;if(De(n))return[Vc(n.enter),Vc(n.leave)];{const e=Vc(n);return[e,e]}}function Vc(n){return $I(n)}function en(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Us]||(n[Us]=new Set)).add(e)}function Wn(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[Us];t&&(t.delete(e),t.size||(n[Us]=void 0))}function Pf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let UT=0;function Cf(n,e,t,r){const s=n._endId=++UT,i=()=>{s===n._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:o,timeout:l,propCount:c}=Zg(n,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{n.removeEventListener(u,m),i()},m=I=>{I.target===n&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),n.addEventListener(u,m)}function Zg(n,e){const t=window.getComputedStyle(n),r=R=>(t[R]||"").split(", "),s=r(`${jn}Delay`),i=r(`${jn}Duration`),o=xf(s,i),l=r(`${Si}Delay`),c=r(`${Si}Duration`),u=xf(l,c);let d=null,p=0,m=0;e===jn?o>0&&(d=jn,p=o,m=i.length):e===Si?u>0&&(d=Si,p=u,m=c.length):(p=Math.max(o,u),d=p>0?o>u?jn:Si:null,m=d?d===jn?i.length:c.length:0);const I=d===jn&&/\b(transform|all)(,|$)/.test(r(`${jn}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:I}}function xf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>kf(t)+kf(n[r])))}function kf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function lu(){return document.body.offsetHeight}function BT(n,e,t){const r=n[Us];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Vf=Symbol("_vod"),$T=Symbol("_vsh"),jT=Symbol(""),qT=/(^|;)\s*display\s*:/;function zT(n,e,t){const r=n.style,s=qe(t);let i=!1;if(t&&!s){if(e)if(qe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&Ra(r,l,"")}else for(const o in e)t[o]==null&&Ra(r,o,"");for(const o in t)o==="display"&&(i=!0),Ra(r,o,t[o])}else if(s){if(e!==t){const o=r[jT];o&&(t+=";"+o),r.cssText=t,i=qT.test(t)}}else e&&n.removeAttribute("style");Vf in n&&(n[Vf]=i?r.display:"",n[$T]&&(r.display="none"))}const Df=/\s*!important$/;function Ra(n,e,t){if(ie(t))t.forEach(r=>Ra(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=KT(n,e);Df.test(t)?n.setProperty(_r(r),t.replace(Df,""),"important"):n[r]=t}}const Nf=["Webkit","Moz","ms"],Dc={};function KT(n,e){const t=Dc[e];if(t)return t;let r=ur(e);if(r!=="filter"&&r in n)return Dc[e]=r;r=Qm(r);for(let s=0;s<Nf.length;s++){const i=Nf[s]+r;if(i in n)return Dc[e]=i}return e}const Of="http://www.w3.org/1999/xlink";function Mf(n,e,t,r,s,i=GI(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Of,e.slice(6,e.length)):n.setAttributeNS(Of,e,t):t==null||i&&!Ym(t)?n.removeAttribute(e):n.setAttribute(e,i?"":un(t)?String(t):t)}function Lf(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Yg(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Ym(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Mr(n,e,t,r){n.addEventListener(e,t,r)}function HT(n,e,t,r){n.removeEventListener(e,t,r)}const Ff=Symbol("_vei");function GT(n,e,t,r,s=null){const i=n[Ff]||(n[Ff]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=WT(e);if(r){const u=i[e]=YT(r,s);Mr(n,l,u,c)}else o&&(HT(n,l,o,c),i[e]=void 0)}}const Uf=/(?:Once|Passive|Capture)$/;function WT(n){let e;if(Uf.test(n)){e={};let r;for(;r=n.match(Uf);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):_r(n.slice(2)),e]}let Nc=0;const QT=Promise.resolve(),JT=()=>Nc||(QT.then(()=>Nc=0),Nc=Date.now());function YT(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Jt(XT(r,t.value),e,5,[r])};return t.value=n,t.attached=JT(),t}function XT(n,e){if(ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Bf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ZT=(n,e,t,r,s,i)=>{const o=s==="svg";e==="class"?BT(n,r,o):e==="style"?zT(n,t,r):Sl(e)?Hu(e)||GT(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ew(n,e,r,o))?(Lf(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mf(n,e,r,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?Lf(n,ur(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Mf(n,e,r,o))};function ew(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Bf(e)&&fe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Bf(e)&&qe(t)?!1:e in n}const e_=new WeakMap,t_=new WeakMap,Xa=Symbol("_moveCb"),$f=Symbol("_enterCb"),tw=n=>(delete n.props.mode,n),nw=tw({name:"TransitionGroup",props:Ze({},MT,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=ST(),r=CE();let s,i;return Pg(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!aw(s[0].el,t.vnode.el,o)){s=[];return}s.forEach(sw),s.forEach(iw);const l=s.filter(ow);lu(),l.forEach(c=>{const u=c.el,d=u.style;en(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[Xa]=m=>{m&&m.target!==u||(!m||/transform$/.test(m.propertyName))&&(u.removeEventListener("transitionend",p),u[Xa]=null,Wn(u,o))};u.addEventListener("transitionend",p)}),s=[]}),()=>{const o=be(n),l=LT(o);let c=o.tag||kt;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),so(d,eu(d,l,r,t)),e_.set(d,d.el.getBoundingClientRect()))}i=e.default?bg(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&so(d,eu(d,l,r,t))}return we(c,null,i)}}}),rw=nw;function sw(n){const e=n.el;e[Xa]&&e[Xa](),e[$f]&&e[$f]()}function iw(n){t_.set(n,n.el.getBoundingClientRect())}function ow(n){const e=e_.get(n),t=t_.get(n),r=e.left-t.left,s=e.top-t.top;if(r||s){const i=n.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",n}}function aw(n,e,t){const r=n.cloneNode(),s=n[Us];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),t.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=Zg(r);return i.removeChild(r),o}const Za=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ie(e)?t=>wa(e,t):e};function lw(n){n.target.composing=!0}function jf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ds=Symbol("_assign"),cu={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Ds]=Za(s);const i=r||s.props&&s.props.type==="number";Mr(n,e?"change":"input",o=>{if(o.target.composing)return;let l=n.value;t&&(l=l.trim()),i&&(l=Qc(l)),n[Ds](l)}),t&&Mr(n,"change",()=>{n.value=n.value.trim()}),e||(Mr(n,"compositionstart",lw),Mr(n,"compositionend",jf),Mr(n,"change",jf))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},o){if(n[Ds]=Za(o),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?Qc(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},cw={deep:!0,created(n,e,t){n[Ds]=Za(t),Mr(n,"change",()=>{const r=n._modelValue,s=uw(n),i=n.checked,o=n[Ds];if(ie(r)){const l=Xm(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Rl(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(n_(n,i))})},mounted:qf,beforeUpdate(n,e,t){n[Ds]=Za(t),qf(n,e,t)}};function qf(n,{value:e,oldValue:t},r){n._modelValue=e;let s;if(ie(e))s=Xm(e,r.props.value)>-1;else if(Rl(e))s=e.has(r.props.value);else{if(e===t)return;s=xl(e,n_(n,!0))}n.checked!==s&&(n.checked=s)}function uw(n){return"_value"in n?n._value:n.value}function n_(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const hw=["ctrl","shift","alt","meta"],dw={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>hw.some(t=>n[`${t}Key`]&&!e.includes(t))},$t=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=dw[e[o]];if(l&&l(s,e))return}return n(s,...i)})},fw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},r_=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=_r(s.key);if(e.some(o=>o===i||fw[o]===i))return n(s)})},pw=Ze({patchProp:ZT},OT);let zf;function mw(){return zf||(zf=rT(pw))}const gw=(...n)=>{const e=mw().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=yw(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,_w(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function _w(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function yw(n){return qe(n)?document.querySelector(n):n}const vw="/ProyectoFinal-DAW/assets/Logo-DU5Dxk_Z.png",Iw=()=>{};var Kf={};/**
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
 */const s_=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ew=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},i_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,I=u&63;c||(I=64,o||(m=64)),r.push(t[d],t[p],t[m],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(s_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ew(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new Tw;const m=i<<2|l>>4;if(r.push(m),u!==64){const I=l<<4&240|u>>2;if(r.push(I),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ww=function(n){const e=s_(n);return i_.encodeByteArray(e,!0)},o_=function(n){return ww(n).replace(/\./g,"")},a_=function(n){try{return i_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function l_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bw=()=>l_().__FIREBASE_DEFAULTS__,Aw=()=>{if(typeof process>"u"||typeof Kf>"u")return;const n=Kf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&a_(n[1]);return e&&JSON.parse(e)},Ll=()=>{try{return Iw()||bw()||Aw()||Sw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rw=n=>{var e,t;return(t=(e=Ll())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},c_=()=>{var n;return(n=Ll())===null||n===void 0?void 0:n.config},u_=n=>{var e;return(e=Ll())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Pw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n){return n.endsWith(".cloudworkstations.dev")}async function h_(n){return(await fetch(n,{credentials:"include"})).ok}const Ki={};function Cw(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ki))Ki[e]?n.emulator.push(e):n.prod.push(e);return n}function xw(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Hf=!1;function kw(n,e){if(typeof window>"u"||typeof document>"u"||!Po(window.location.host)||Ki[n]===e||Ki[n]||Hf)return;Ki[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Cw().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,I){m.setAttribute("width","24"),m.setAttribute("id",I),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Hf=!0,o()},m}function d(m,I){m.setAttribute("id",I),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=xw(r),I=t("text"),R=document.getElementById(I)||document.createElement("span"),k=t("learnmore"),x=document.getElementById(k)||document.createElement("a"),B=t("preprendIcon"),z=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const q=m.element;l(q),d(x,k);const $=u();c(z,B),q.append(z,R,x,$),document.body.appendChild(q)}i?(R.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function d_(){var n;const e=(n=Ll())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ow(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mw(){const n=Je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function f_(){return!d_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function p_(){return!d_()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function m_(){try{return typeof indexedDB=="object"}catch{return!1}}function Lw(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Fw="FirebaseError";class On extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Fw,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Co.prototype.create)}}class Co{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Uw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new On(s,l,r)}}function Uw(n,e){return n.replace(Bw,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Bw=/\{\$([^}]+)}/g;function $w(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Gf(i)&&Gf(o)){if(!Gr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Gf(n){return n!==null&&typeof n=="object"}/**
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
 */function xo(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Di(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ni(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function jw(n,e){const t=new qw(n,e);return t.subscribe.bind(t)}class qw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");zw(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Oc),s.error===void 0&&(s.error=Oc),s.complete===void 0&&(s.complete=Oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zw(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Oc(){}/**
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
 */function He(n){return n&&n._delegate?n._delegate:n}class Wr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dr="[DEFAULT]";/**
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
 */class Kw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Pw;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gw(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hw(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hw(n){return n===Dr?void 0:n}function Gw(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ww{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Kw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ge||(ge={}));const Qw={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Jw=ge.INFO,Yw={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Xw=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Yw[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uh{constructor(e){this.name=e,this._logLevel=Jw,this._logHandler=Xw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Zw=(n,e)=>e.some(t=>n instanceof t);let Wf,Qf;function eb(){return Wf||(Wf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tb(){return Qf||(Qf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const g_=new WeakMap,uu=new WeakMap,__=new WeakMap,Mc=new WeakMap,hh=new WeakMap;function nb(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(sr(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&g_.set(t,n)}).catch(()=>{}),hh.set(e,n),e}function rb(n){if(uu.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});uu.set(n,e)}let hu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return uu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||__.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return sr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sb(n){hu=n(hu)}function ib(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Lc(this),e,...t);return __.set(r,e.sort?e.sort():[e]),sr(r)}:tb().includes(n)?function(...e){return n.apply(Lc(this),e),sr(g_.get(this))}:function(...e){return sr(n.apply(Lc(this),e))}}function ob(n){return typeof n=="function"?ib(n):(n instanceof IDBTransaction&&rb(n),Zw(n,eb())?new Proxy(n,hu):n)}function sr(n){if(n instanceof IDBRequest)return nb(n);if(Mc.has(n))return Mc.get(n);const e=ob(n);return e!==n&&(Mc.set(n,e),hh.set(e,n)),e}const Lc=n=>hh.get(n);function ab(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=sr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(sr(o.result),c.oldVersion,c.newVersion,sr(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const lb=["get","getKey","getAll","getAllKeys","count"],cb=["put","add","delete","clear"],Fc=new Map;function Jf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=cb.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lb.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return Fc.set(e,i),i}sb(n=>({...n,get:(e,t,r)=>Jf(e,t)||n.get(e,t,r),has:(e,t)=>!!Jf(e,t)||n.has(e,t)}));/**
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
 */class ub{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hb(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function hb(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const du="@firebase/app",Yf="0.13.0";/**
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
 */const xn=new uh("@firebase/app"),db="@firebase/app-compat",fb="@firebase/analytics-compat",pb="@firebase/analytics",mb="@firebase/app-check-compat",gb="@firebase/app-check",_b="@firebase/auth",yb="@firebase/auth-compat",vb="@firebase/database",Ib="@firebase/data-connect",Eb="@firebase/database-compat",Tb="@firebase/functions",wb="@firebase/functions-compat",bb="@firebase/installations",Ab="@firebase/installations-compat",Sb="@firebase/messaging",Rb="@firebase/messaging-compat",Pb="@firebase/performance",Cb="@firebase/performance-compat",xb="@firebase/remote-config",kb="@firebase/remote-config-compat",Vb="@firebase/storage",Db="@firebase/storage-compat",Nb="@firebase/firestore",Ob="@firebase/ai",Mb="@firebase/firestore-compat",Lb="firebase",Fb="11.8.0";/**
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
 */const fu="[DEFAULT]",Ub={[du]:"fire-core",[db]:"fire-core-compat",[pb]:"fire-analytics",[fb]:"fire-analytics-compat",[gb]:"fire-app-check",[mb]:"fire-app-check-compat",[_b]:"fire-auth",[yb]:"fire-auth-compat",[vb]:"fire-rtdb",[Ib]:"fire-data-connect",[Eb]:"fire-rtdb-compat",[Tb]:"fire-fn",[wb]:"fire-fn-compat",[bb]:"fire-iid",[Ab]:"fire-iid-compat",[Sb]:"fire-fcm",[Rb]:"fire-fcm-compat",[Pb]:"fire-perf",[Cb]:"fire-perf-compat",[xb]:"fire-rc",[kb]:"fire-rc-compat",[Vb]:"fire-gcs",[Db]:"fire-gcs-compat",[Nb]:"fire-fst",[Mb]:"fire-fst-compat",[Ob]:"fire-vertex","fire-js":"fire-js",[Lb]:"fire-js-all"};/**
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
 */const el=new Map,Bb=new Map,pu=new Map;function Xf(n,e){try{n.container.addComponent(e)}catch(t){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Bs(n){const e=n.name;if(pu.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;pu.set(e,n);for(const t of el.values())Xf(t,n);for(const t of Bb.values())Xf(t,n);return!0}function dh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Bt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const $b={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new Co("app","Firebase",$b);/**
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
 */class jb{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const si=Fb;function y_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw ir.create("bad-app-name",{appName:String(s)});if(t||(t=c_()),!t)throw ir.create("no-options");const i=el.get(s);if(i){if(Gr(t,i.options)&&Gr(r,i.config))return i;throw ir.create("duplicate-app",{appName:s})}const o=new Ww(s);for(const c of pu.values())o.addComponent(c);const l=new jb(t,r,o);return el.set(s,l),l}function qb(n=fu){const e=el.get(n);if(!e&&n===fu&&c_())return y_();if(!e)throw ir.create("no-app",{appName:n});return e}function or(n,e,t){var r;let s=(r=Ub[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(l.join(" "));return}Bs(new Wr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zb="firebase-heartbeat-database",Kb=1,ao="firebase-heartbeat-store";let Uc=null;function v_(){return Uc||(Uc=ab(zb,Kb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ao)}catch(t){console.warn(t)}}}}).catch(n=>{throw ir.create("idb-open",{originalErrorMessage:n.message})})),Uc}async function Hb(n){try{const t=(await v_()).transaction(ao),r=await t.objectStore(ao).get(I_(n));return await t.done,r}catch(e){if(e instanceof On)xn.warn(e.message);else{const t=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(t.message)}}}async function Zf(n,e){try{const r=(await v_()).transaction(ao,"readwrite");await r.objectStore(ao).put(e,I_(n)),await r.done}catch(t){if(t instanceof On)xn.warn(t.message);else{const r=ir.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xn.warn(r.message)}}}function I_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gb=1024,Wb=30;class Qb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yb(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ep();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Wb){const o=Xb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ep(),{heartbeatsToSend:r,unsentEntries:s}=Jb(this._heartbeatsCache.heartbeats),i=o_(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return xn.warn(t),""}}}function ep(){return new Date().toISOString().substring(0,10)}function Jb(n,e=Gb){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),tp(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),tp(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Yb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return m_()?Lw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Hb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tp(n){return o_(JSON.stringify({version:2,heartbeats:n})).length}function Xb(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Zb(n){Bs(new Wr("platform-logger",e=>new ub(e),"PRIVATE")),Bs(new Wr("heartbeat",e=>new Qb(e),"PRIVATE")),or(du,Yf,n),or(du,Yf,"esm2017"),or("fire-js","")}Zb("");function fh(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function E_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eA=E_,T_=new Co("auth","Firebase",E_());/**
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
 */const tl=new uh("@firebase/auth");function tA(n,...e){tl.logLevel<=ge.WARN&&tl.warn(`Auth (${si}): ${n}`,...e)}function Pa(n,...e){tl.logLevel<=ge.ERROR&&tl.error(`Auth (${si}): ${n}`,...e)}/**
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
 */function Yt(n,...e){throw ph(n,...e)}function ln(n,...e){return ph(n,...e)}function w_(n,e,t){const r=Object.assign(Object.assign({},eA()),{[e]:t});return new Co("auth","Firebase",r).create(e,{appName:n.name})}function An(n){return w_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ph(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return T_.create(n,...e)}function le(n,e,...t){if(!n)throw ph(e,...t)}function Tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Pa(e),new Error(e)}function kn(n,e){n||Tn(e)}/**
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
 */function nl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function b_(){return np()==="http:"||np()==="https:"}function np(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function nA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b_()||Nw()||"connection"in navigator)?navigator.onLine:!0}function rA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ko{constructor(e,t){this.shortDelay=e,this.longDelay=t,kn(t>e,"Short delay should be less than long delay!"),this.isMobile=Vw()||Ow()}get(){return nA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mh(n,e){kn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class A_{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const iA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oA=new ko(3e4,6e4);function dn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function fn(n,e,t,r,s={}){return S_(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=xo(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},i);return Dw()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Po(n.emulatorConfig.host)&&(u.credentials="include"),A_.fetch()(await R_(n,n.config.apiHost,t,l),u)})}async function S_(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},sA),e);try{const s=new lA(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw da(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw da(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw da(n,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw w_(n,d,u);Yt(n,d)}}catch(s){if(s instanceof On)throw s;Yt(n,"network-request-failed",{message:String(s)})}}async function Vo(n,e,t,r,s={}){const i=await fn(n,e,t,r,s);return"mfaPendingCredential"in i&&Yt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function R_(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?mh(n.config,s):`${n.config.apiScheme}://${s}`;return iA.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function aA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),oA.get())})}}function da(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ln(n,e,r);return s.customData._tokenResponse=t,s}function rp(n){return n!==void 0&&n.enterprise!==void 0}class cA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return aA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function uA(n,e){return fn(n,"GET","/v2/recaptchaConfig",dn(n,e))}/**
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
 */async function hA(n,e){return fn(n,"POST","/v1/accounts:delete",e)}async function rl(n,e){return fn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dA(n,e=!1){const t=He(n),r=await t.getIdToken(e),s=gh(r);le(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Hi(Bc(s.auth_time)),issuedAtTime:Hi(Bc(s.iat)),expirationTime:Hi(Bc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bc(n){return Number(n)*1e3}function gh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Pa("JWT malformed, contained fewer than 3 sections"),null;try{const s=a_(t);return s?JSON.parse(s):(Pa("Failed to decode base64 JWT payload"),null)}catch(s){return Pa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sp(n){const e=gh(n);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function lo(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof On&&fA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function fA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class pA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hi(this.lastLoginAt),this.creationTime=Hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sl(n){var e;const t=n.auth,r=await n.getIdToken(),s=await lo(n,rl(t,{idToken:r}));le(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?P_(i.providerUserInfo):[],l=gA(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new mu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function mA(n){const e=He(n);await sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gA(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function P_(n){return n.map(e=>{var{providerId:t}=e,r=fh(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _A(n,e){const t=await S_(n,{},async()=>{const r=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await R_(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",A_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yA(n,e){return fn(n,"POST","/v2/accounts:revokeToken",dn(n,e))}/**
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
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){le(e.length!==0,"internal-error");const t=sp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await _A(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Ns;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function qn(n,e){le(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Wt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=fh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new mu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await lo(this,this.stsTokenManager.getToken(this.auth,e));return le(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dA(this,e)}reload(){return mA(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await lo(this,hA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,l,c,u,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,I=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(l=t.tenantId)!==null&&l!==void 0?l:void 0,x=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,B=(u=t.createdAt)!==null&&u!==void 0?u:void 0,z=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:q,emailVerified:$,isAnonymous:Z,providerData:ee,stsTokenManager:b}=t;le(q&&b,e,"internal-error");const y=Ns.fromJSON(this.name,b);le(typeof q=="string",e,"internal-error"),qn(p,e.name),qn(m,e.name),le(typeof $=="boolean",e,"internal-error"),le(typeof Z=="boolean",e,"internal-error"),qn(I,e.name),qn(R,e.name),qn(k,e.name),qn(x,e.name),qn(B,e.name),qn(z,e.name);const v=new Wt({uid:q,auth:e,email:m,emailVerified:$,displayName:p,isAnonymous:Z,photoURL:R,phoneNumber:I,tenantId:k,stsTokenManager:y,createdAt:B,lastLoginAt:z});return ee&&Array.isArray(ee)&&(v.providerData=ee.map(w=>Object.assign({},w))),x&&(v._redirectEventId=x),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ns;s.updateFromServerResponse(t);const i=new Wt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await sl(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?P_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ns;l.updateFromIdToken(r);const c=new Wt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new mu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const ip=new Map;function wn(n){kn(n instanceof Function,"Expected a class definition");let e=ip.get(n);return e?(kn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ip.set(n,e),e)}/**
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
 */class C_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}C_.type="NONE";const op=C_;/**
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
 */function Ca(n,e,t){return`firebase:${n}:${e}:${t}`}class Os{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ca(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ca("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await rl(this.auth,{idToken:e}).catch(()=>{});return t?Wt._fromGetAccountInfoResponse(this.auth,t,e):null}return Wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Os(wn(op),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||wn(op);const o=Ca(r,e.config.apiKey,e.name);let l=null;for(const u of t)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const m=await rl(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Wt._fromGetAccountInfoResponse(e,m,d)}else p=Wt._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Os(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Os(i,e,r))}}/**
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
 */function ap(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(D_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(x_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O_(e))return"Blackberry";if(M_(e))return"Webos";if(k_(e))return"Safari";if((e.includes("chrome/")||V_(e))&&!e.includes("edge/"))return"Chrome";if(N_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function x_(n=Je()){return/firefox\//i.test(n)}function k_(n=Je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function V_(n=Je()){return/crios\//i.test(n)}function D_(n=Je()){return/iemobile/i.test(n)}function N_(n=Je()){return/android/i.test(n)}function O_(n=Je()){return/blackberry/i.test(n)}function M_(n=Je()){return/webos/i.test(n)}function _h(n=Je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vA(n=Je()){var e;return _h(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IA(){return Mw()&&document.documentMode===10}function L_(n=Je()){return _h(n)||N_(n)||M_(n)||O_(n)||/windows phone/i.test(n)||D_(n)}/**
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
 */function F_(n,e=[]){let t;switch(n){case"Browser":t=ap(Je());break;case"Worker":t=`${ap(Je())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${si}/${r}`}/**
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
 */class EA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function TA(n,e={}){return fn(n,"GET","/v2/passwordPolicy",dn(n,e))}/**
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
 */const wA=6;class bA{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:wA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class AA{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lp(this),this.idTokenSubscription=new lp(this),this.beforeStateQueue=new EA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await rl(this,{idToken:e}),r=await Wt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(An(this));const t=e?He(e):null;return t&&le(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TA(this),t=new bA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Co("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await yA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wn(e)||this._popupRedirectResolver;le(t,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[wn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=F_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&tA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yr(n){return He(n)}class lp{constructor(e){this.auth=e,this.observer=null,this.addObserver=jw(t=>this.observer=t)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SA(n){Fl=n}function U_(n){return Fl.loadJS(n)}function RA(){return Fl.recaptchaEnterpriseScript}function PA(){return Fl.gapiScript}function CA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class xA{constructor(){this.enterprise=new kA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class kA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const VA="recaptcha-enterprise",B_="NO_RECAPTCHA";class DA{constructor(e){this.type=VA,this.auth=yr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{uA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new cA(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;rp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(B_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!t&&rp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=RA();c.length!==0&&(c+=l),U_(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function cp(n,e,t,r=!1,s=!1){const i=new DA(n);let o;if(s)o=B_;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function il(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await cp(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await cp(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(o)})}/**
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
 */function NA(n,e){const t=dh(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Gr(i,e??{}))return s;Yt(s,"already-initialized")}return t.initialize({options:e})}function OA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(wn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function MA(n,e,t){const r=yr(n);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$_(e),{host:o,port:l}=LA(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(Gr(u,r.config.emulator)&&Gr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Po(o)?(h_(`${i}//${o}${c}`),kw("Auth",!0)):FA()}function $_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function LA(n){const e=$_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:up(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:up(o)}}}function up(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function FA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class yh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,t){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function UA(n,e){return fn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function BA(n,e){return Vo(n,"POST","/v1/accounts:signInWithPassword",dn(n,e))}async function $A(n,e){return fn(n,"POST","/v1/accounts:sendOobCode",dn(n,e))}async function jA(n,e){return $A(n,e)}/**
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
 */async function qA(n,e){return Vo(n,"POST","/v1/accounts:signInWithEmailLink",dn(n,e))}async function zA(n,e){return Vo(n,"POST","/v1/accounts:signInWithEmailLink",dn(n,e))}/**
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
 */class co extends yh{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new co(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new co(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return il(e,t,"signInWithPassword",BA);case"emailLink":return qA(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return il(e,r,"signUpPassword",UA);case"emailLink":return zA(e,{idToken:t,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ms(n,e){return Vo(n,"POST","/v1/accounts:signInWithIdp",dn(n,e))}/**
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
 */const KA="http://localhost";class Qr extends yh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=fh(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ms(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ms(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ms(e,t)}buildRequest(){const e={requestUri:KA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xo(t)}return e}}/**
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
 */function HA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GA(n){const e=Di(Ni(n)).link,t=e?Di(Ni(e)).deep_link_id:null,r=Di(Ni(n)).deep_link_id;return(r?Di(Ni(r)).link:null)||r||t||e||n}class vh{constructor(e){var t,r,s,i,o,l;const c=Di(Ni(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=HA((s=c.mode)!==null&&s!==void 0?s:null);le(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=GA(e);try{return new vh(t)}catch{return null}}}/**
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
 */class ii{constructor(){this.providerId=ii.PROVIDER_ID}static credential(e,t){return co._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=vh.parseLink(t);return le(r,"argument-error"),co._fromEmailAndCode(e,r.code,r.tenantId)}}ii.PROVIDER_ID="password";ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class j_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Do extends j_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends Do{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Xn extends Do{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Xn.credential(t,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
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
 */class Zn extends Do{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */class er extends Do{constructor(){super("twitter.com")}static credential(e,t){return Qr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return er.credential(t,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
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
 */async function WA(n,e){return Vo(n,"POST","/v1/accounts:signUp",dn(n,e))}/**
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
 */class Jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Wt._fromIdTokenResponse(e,r,s),o=hp(r);return new Jr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=hp(r);return new Jr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function hp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ol extends On{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ol.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ol(e,t,r,s)}}function q_(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ol._fromErrorAndOperation(n,i,e,r):i})}async function QA(n,e,t=!1){const r=await lo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Jr._forOperation(n,"link",r)}/**
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
 */async function JA(n,e,t=!1){const{auth:r}=n;if(Bt(r.app))return Promise.reject(An(r));const s="reauthenticate";try{const i=await lo(n,q_(r,s,e,n),t);le(i.idToken,r,"internal-error");const o=gh(i.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(n.uid===l,r,"user-mismatch"),Jr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
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
 */async function z_(n,e,t=!1){if(Bt(n.app))return Promise.reject(An(n));const r="signIn",s=await q_(n,r,e),i=await Jr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function YA(n,e){return z_(yr(n),e)}/**
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
 */async function K_(n){const e=yr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function XA(n,e,t){const r=yr(n);await il(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",jA)}async function ZA(n,e,t){if(Bt(n.app))return Promise.reject(An(n));const r=yr(n),o=await il(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&K_(n),c}),l=await Jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function e0(n,e,t){return Bt(n.app)?Promise.reject(An(n)):YA(He(n),ii.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&K_(n),r})}/**
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
 */async function t0(n,e){return fn(n,"POST","/v1/accounts:createAuthUri",dn(n,e))}/**
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
 */async function n0(n,e){const t=b_()?nl():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:s}=await t0(He(n),r);return s||[]}/**
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
 */function r0(n,e){return He(n).setPersistence(e)}function s0(n,e,t,r){return He(n).onIdTokenChanged(e,t,r)}function i0(n,e,t){return He(n).beforeAuthStateChanged(e,t)}function H_(n,e,t,r){return He(n).onAuthStateChanged(e,t,r)}function o0(n){return He(n).signOut()}const al="__sak";/**
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
 */class G_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(al,"1"),this.storage.removeItem(al),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const a0=1e3,l0=10;class W_ extends G_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=L_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);IA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,l0):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},a0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}W_.type="LOCAL";const Q_=W_;/**
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
 */class J_ extends G_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}J_.type="SESSION";const Ih=J_;/**
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
 */function c0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ul(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(t.origin,i)),c=await c0(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
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
 */function Eh(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class u0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Eh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function cn(){return window}function h0(n){cn().location.href=n}/**
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
 */function Y_(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function d0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function p0(){return Y_()?self:null}/**
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
 */const X_="firebaseLocalStorageDb",m0=1,ll="firebaseLocalStorage",Z_="fbase_key";class No{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bl(n,e){return n.transaction([ll],e?"readwrite":"readonly").objectStore(ll)}function g0(){const n=indexedDB.deleteDatabase(X_);return new No(n).toPromise()}function gu(){const n=indexedDB.open(X_,m0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ll,{keyPath:Z_})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ll)?e(r):(r.close(),await g0(),e(await gu()))})})}async function dp(n,e,t){const r=Bl(n,!0).put({[Z_]:e,value:t});return new No(r).toPromise()}async function _0(n,e){const t=Bl(n,!1).get(e),r=await new No(t).toPromise();return r===void 0?null:r.value}function fp(n,e){const t=Bl(n,!0).delete(e);return new No(t).toPromise()}const y0=800,v0=3;class ey{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>v0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Y_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(p0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await d0(),!this.activeServiceWorker)return;this.sender=new u0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gu();return await dp(e,al,"1"),await fp(e,al),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>dp(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>_0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Bl(s,!1).getAll();return new No(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ey.type="LOCAL";const I0=ey;new ko(3e4,6e4);/**
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
 */function E0(n,e){return e?wn(e):(le(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Th extends yh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ms(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function T0(n){return z_(n.auth,new Th(n),n.bypassAuthState)}function w0(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),JA(t,new Th(n),n.bypassAuthState)}async function b0(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),QA(t,new Th(n),n.bypassAuthState)}/**
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
 */class ty{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return T0;case"linkViaPopup":case"linkViaRedirect":return b0;case"reauthViaPopup":case"reauthViaRedirect":return w0;default:Yt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const A0=new ko(2e3,1e4);class As extends ty{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Eh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,A0.get())};e()}}As.currentPopupAction=null;/**
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
 */const S0="pendingRedirect",xa=new Map;class R0 extends ty{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=xa.get(this.auth._key());if(!e){try{const r=await P0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}xa.set(this.auth._key(),e)}return this.bypassAuthState||xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function P0(n,e){const t=k0(e),r=x0(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function C0(n,e){xa.set(n._key(),e)}function x0(n){return wn(n._redirectPersistence)}function k0(n){return Ca(S0,n.config.apiKey,n.name)}async function V0(n,e,t=!1){if(Bt(n.app))return Promise.reject(An(n));const r=yr(n),s=E0(r,e),o=await new R0(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const D0=10*60*1e3;class N0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!O0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ny(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ln(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=D0&&this.cachedEventUids.clear(),this.cachedEventUids.has(pp(e))}saveEventToCache(e){this.cachedEventUids.add(pp(e)),this.lastProcessedEventTime=Date.now()}}function pp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ny({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function O0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ny(n);default:return!1}}/**
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
 */async function M0(n,e={}){return fn(n,"GET","/v1/projects",e)}/**
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
 */const L0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F0=/^https?/;async function U0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await M0(n);for(const t of e)try{if(B0(t))return}catch{}Yt(n,"unauthorized-domain")}function B0(n){const e=nl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!F0.test(t))return!1;if(L0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const $0=new ko(3e4,6e4);function mp(){const n=cn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function j0(n){return new Promise((e,t)=>{var r,s,i;function o(){mp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mp(),t(ln(n,"network-request-failed"))},timeout:$0.get()})}if(!((s=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=cn().gapi)===null||i===void 0)&&i.load)o();else{const l=CA("iframefcb");return cn()[l]=()=>{gapi.load?o():t(ln(n,"network-request-failed"))},U_(`${PA()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ka=null,e})}let ka=null;function q0(n){return ka=ka||j0(n),ka}/**
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
 */const z0=new ko(5e3,15e3),K0="__/auth/iframe",H0="emulator/auth/iframe",G0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Q0(n){const e=n.config;le(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?mh(e,H0):`https://${n.config.authDomain}/${K0}`,r={apiKey:e.apiKey,appName:n.name,v:si},s=W0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${xo(r).slice(1)}`}async function J0(n){const e=await q0(n),t=cn().gapi;return le(t,n,"internal-error"),e.open({where:document.body,url:Q0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:G0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(n,"network-request-failed"),l=cn().setTimeout(()=>{i(o)},z0.get());function c(){cn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Y0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},X0=500,Z0=600,eS="_blank",tS="http://localhost";class gp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nS(n,e,t,r=X0,s=Z0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Y0),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Je().toLowerCase();t&&(l=V_(u)?eS:t),x_(u)&&(e=e||tS,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[I,R])=>`${m}${I}=${R},`,"");if(vA(u)&&l!=="_self")return rS(e||"",l),new gp(null);const p=window.open(e||"",l,d);le(p,n,"popup-blocked");try{p.focus()}catch{}return new gp(p)}function rS(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const sS="__/auth/handler",iS="emulator/auth/handler",oS=encodeURIComponent("fac");async function _p(n,e,t,r,s,i){le(n.config.authDomain,n,"auth-domain-config-required"),le(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:si,eventId:s};if(e instanceof j_){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",$w(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Do){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),u=c?`#${oS}=${encodeURIComponent(c)}`:"";return`${aS(n)}?${xo(l).slice(1)}${u}`}function aS({config:n}){return n.emulator?mh(n,iS):`https://${n.authDomain}/${sS}`}/**
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
 */const $c="webStorageSupport";class lS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ih,this._completeRedirectFn=V0,this._overrideRedirectResult=C0}async _openPopup(e,t,r,s){var i;kn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await _p(e,t,r,nl(),s);return nS(e,o,Eh())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await _p(e,t,r,nl(),s);return h0(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(kn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await J0(e),r=new N0(e);return t.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send($c,{type:$c},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$c];o!==void 0&&t(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=U0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return L_()||k_()||_h()}}const cS=lS;var yp="@firebase/auth",vp="1.10.6";/**
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
 */class uS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dS(n){Bs(new Wr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:F_(n)},u=new AA(r,s,i,c);return OA(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Bs(new Wr("auth-internal",e=>{const t=yr(e.getProvider("auth").getImmediate());return(r=>new uS(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(yp,vp,hS(n)),or(yp,vp,"esm2017")}/**
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
 */const fS=5*60,pS=u_("authIdTokenMaxAge")||fS;let Ip=null;const mS=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>pS)return;const s=t==null?void 0:t.token;Ip!==s&&(Ip=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ls(n=qb()){const e=dh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=NA(n,{popupRedirectResolver:cS,persistence:[I0,Q_,Ih]}),r=u_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=mS(i.toString());i0(t,o,()=>o(t.currentUser)),s0(t,l=>o(l))}}const s=Rw("auth");return s&&MA(t,`http://${s}`),t}function gS(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}SA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",gS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dS("Browser");var _S="firebase",yS="11.8.1";/**
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
 */or(_S,yS,"app");var Ep=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ar,ry;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function v(){}v.prototype=y.prototype,b.D=y.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(w,A,T){for(var _=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)_[oe-2]=arguments[oe];return y.prototype[A].apply(w,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,v){v||(v=0);var w=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)w[A]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(A=0;16>A;++A)w[A]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=b.g[0],v=b.g[1],A=b.g[2];var T=b.g[3],_=y+(T^v&(A^T))+w[0]+3614090360&4294967295;y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+w[1]+3905402710&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+w[2]+606105819&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+w[3]+3250441966&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(T^v&(A^T))+w[4]+4118548399&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+w[5]+1200080426&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+w[6]+2821735955&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+w[7]+4249261313&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(T^v&(A^T))+w[8]+1770035416&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+w[9]+2336552879&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+w[10]+4294925233&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+w[11]+2304563134&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(T^v&(A^T))+w[12]+1804603682&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+w[13]+4254626195&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+w[14]+2792965006&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+w[15]+1236535329&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(A^T&(v^A))+w[1]+4129170786&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+w[6]+3225465664&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+w[11]+643717713&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+w[0]+3921069994&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(A^T&(v^A))+w[5]+3593408605&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+w[10]+38016083&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+w[15]+3634488961&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+w[4]+3889429448&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(A^T&(v^A))+w[9]+568446438&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+w[14]+3275163606&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+w[3]+4107603335&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+w[8]+1163531501&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(A^T&(v^A))+w[13]+2850285829&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+w[2]+4243563512&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+w[7]+1735328473&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+w[12]+2368359562&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(v^A^T)+w[5]+4294588738&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+w[8]+2272392833&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+w[11]+1839030562&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+w[14]+4259657740&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(v^A^T)+w[1]+2763975236&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+w[4]+1272893353&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+w[7]+4139469664&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+w[10]+3200236656&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(v^A^T)+w[13]+681279174&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+w[0]+3936430074&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+w[3]+3572445317&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+w[6]+76029189&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(v^A^T)+w[9]+3654602809&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+w[12]+3873151461&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+w[15]+530742520&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+w[2]+3299628645&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(A^(v|~T))+w[0]+4096336452&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+w[7]+1126891415&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+w[14]+2878612391&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+w[5]+4237533241&4294967295,v=A+(_<<21&4294967295|_>>>11),_=y+(A^(v|~T))+w[12]+1700485571&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+w[3]+2399980690&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+w[10]+4293915773&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+w[1]+2240044497&4294967295,v=A+(_<<21&4294967295|_>>>11),_=y+(A^(v|~T))+w[8]+1873313359&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+w[15]+4264355552&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+w[6]+2734768916&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+w[13]+1309151649&4294967295,v=A+(_<<21&4294967295|_>>>11),_=y+(A^(v|~T))+w[4]+4149444226&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+w[11]+3174756917&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+w[2]+718787259&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(A+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+T&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var v=y-this.blockSize,w=this.B,A=this.h,T=0;T<y;){if(A==0)for(;T<=v;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<y;)if(w[A++]=b.charCodeAt(T++),A==this.blockSize){s(this,w),A=0;break}}else for(;T<y;)if(w[A++]=b[T++],A==this.blockSize){s(this,w),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var v=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=v&255,v/=256;for(this.u(b),b=Array(16),y=v=0;4>y;++y)for(var w=0;32>w;w+=8)b[v++]=this.g[y]>>>w&255;return b};function i(b,y){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=y(b)}function o(b,y){this.h=y;for(var v=[],w=!0,A=b.length-1;0<=A;A--){var T=b[A]|0;w&&T==y||(v[A]=T,w=!1)}this.g=v}var l={};function c(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return x(u(-b));for(var y=[],v=1,w=0;b>=v;w++)y[w]=b/v|0,v*=4294967296;return new o(y,0)}function d(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return x(d(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),w=p,A=0;A<b.length;A+=8){var T=Math.min(8,b.length-A),_=parseInt(b.substring(A,A+T),y);8>T?(T=u(Math.pow(y,T)),w=w.j(T).add(u(_))):(w=w.j(v),w=w.add(u(_)))}return w}var p=c(0),m=c(1),I=c(16777216);n=o.prototype,n.m=function(){if(k(this))return-x(this).m();for(var b=0,y=1,v=0;v<this.g.length;v++){var w=this.i(v);b+=(0<=w?w:4294967296+w)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(k(this))return"-"+x(this).toString(b);for(var y=u(Math.pow(b,6)),v=this,w="";;){var A=$(v,y).g;v=B(v,A.j(y));var T=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=A,R(v))return T+w;for(;6>T.length;)T="0"+T;w=T+w}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function k(b){return b.h==-1}n.l=function(b){return b=B(this,b),k(b)?-1:R(b)?0:1};function x(b){for(var y=b.g.length,v=[],w=0;w<y;w++)v[w]=~b.g[w];return new o(v,~b.h).add(m)}n.abs=function(){return k(this)?x(this):this},n.add=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],w=0,A=0;A<=y;A++){var T=w+(this.i(A)&65535)+(b.i(A)&65535),_=(T>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);w=_>>>16,T&=65535,_&=65535,v[A]=_<<16|T}return new o(v,v[v.length-1]&-2147483648?-1:0)};function B(b,y){return b.add(x(y))}n.j=function(b){if(R(this)||R(b))return p;if(k(this))return k(b)?x(this).j(x(b)):x(x(this).j(b));if(k(b))return x(this.j(x(b)));if(0>this.l(I)&&0>b.l(I))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,v=[],w=0;w<2*y;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<b.g.length;A++){var T=this.i(w)>>>16,_=this.i(w)&65535,oe=b.i(A)>>>16,Oe=b.i(A)&65535;v[2*w+2*A]+=_*Oe,z(v,2*w+2*A),v[2*w+2*A+1]+=T*Oe,z(v,2*w+2*A+1),v[2*w+2*A+1]+=_*oe,z(v,2*w+2*A+1),v[2*w+2*A+2]+=T*oe,z(v,2*w+2*A+2)}for(w=0;w<y;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=y;w<2*y;w++)v[w]=0;return new o(v,0)};function z(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function q(b,y){this.g=b,this.h=y}function $(b,y){if(R(y))throw Error("division by zero");if(R(b))return new q(p,p);if(k(b))return y=$(x(b),y),new q(x(y.g),x(y.h));if(k(y))return y=$(b,x(y)),new q(x(y.g),y.h);if(30<b.g.length){if(k(b)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,w=y;0>=w.l(b);)v=Z(v),w=Z(w);var A=ee(v,1),T=ee(w,1);for(w=ee(w,2),v=ee(v,2);!R(w);){var _=T.add(w);0>=_.l(b)&&(A=A.add(v),T=_),w=ee(w,1),v=ee(v,1)}return y=B(b,A.j(y)),new q(A,y)}for(A=p;0<=b.l(y);){for(v=Math.max(1,Math.floor(b.m()/y.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),T=u(v),_=T.j(y);k(_)||0<_.l(b);)v-=w,T=u(v),_=T.j(y);R(T)&&(T=m),A=A.add(T),b=B(b,_)}return new q(A,b)}n.A=function(b){return $(this,b).h},n.and=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)&b.i(w);return new o(v,this.h&b.h)},n.or=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)|b.i(w);return new o(v,this.h|b.h)},n.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)^b.i(w);return new o(v,this.h^b.h)};function Z(b){for(var y=b.g.length+1,v=[],w=0;w<y;w++)v[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(v,b.h)}function ee(b,y){var v=y>>5;y%=32;for(var w=b.g.length-v,A=[],T=0;T<w;T++)A[T]=0<y?b.i(T+v)>>>y|b.i(T+v+1)<<32-y:b.i(T+v);return new o(A,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ry=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,ar=o}).apply(typeof Ep<"u"?Ep:typeof self<"u"?self:typeof window<"u"?window:{});var fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sy,Oi,iy,Va,_u,oy,ay,ly;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof fa=="object"&&fa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break e;f=f[C]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,C={next:function(){if(!g&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function I(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,C,V){for(var G=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)G[ke-2]=arguments[ke];return h.prototype[C].apply(g,G)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function x(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const C=a.length||0,V=g.length||0;a.length=C+V;for(let G=0;G<V;G++)a[C+G]=g[G]}else a.push(g)}}class B{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function z(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var Z=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ee(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,h){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let V=0;V<v.length;V++)f=v[V],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function T(a){l.setTimeout(()=>{throw a},0)}function _(){var a=Kt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class oe{constructor(){this.h=this.g=null}add(h,f){const g=Oe.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Oe=new B(()=>new ze,a=>a.reset());class ze{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,Ee=!1,Kt=new oe,Er=()=>{const a=l.Promise.resolve(void 0);Pe=()=>{a.then(pn)}};var pn=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(f){T(f)}var h=Oe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function We(){this.s=this.s,this.C=this.C}We.prototype.s=!1,We.prototype.ma=function(){this.s||(this.s=!0,this.N())},We.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var lc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Tr(a,h){if(Qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{$(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:wr[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Tr.aa.h.call(this)}}R(Tr,Qe);var wr={2:"touch",3:"pen",4:"mouse"};Tr.prototype.h=function(){Tr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var mn="closure_listenable_"+(1e6*Math.random()|0),ui=0;function Ko(a,h,f,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=C,this.key=++ui,this.da=this.fa=!1}function Xt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function hi(a){this.src=a,this.g={},this.h=0}hi.prototype.add=function(a,h,f,g,C){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var G=S(a,h,g,C);return-1<G?(h=a[G],f||(h.fa=!1)):(h=new Ko(h,this.src,V,!!g,C),h.fa=f,a.push(h)),h};function E(a,h){var f=h.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=C)&&Array.prototype.splice.call(g,C,1),V&&(Xt(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function S(a,h,f,g){for(var C=0;C<a.length;++C){var V=a[C];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==g)return C}return-1}var D="closure_lm_"+(1e6*Math.random()|0),L={};function O(a,h,f,g,C){if(Array.isArray(h)){for(var V=0;V<h.length;V++)O(a,h[V],f,g,C);return null}return f=ce(f),a&&a[mn]?a.K(h,f,u(g)?!!g.capture:!1,C):M(a,h,f,!1,g,C)}function M(a,h,f,g,C,V){if(!h)throw Error("Invalid event type");var G=u(C)?!!C.capture:!!C,ke=W(a);if(ke||(a[D]=ke=new hi(a)),f=ke.add(h,f,g,G,V),f.proxy)return f;if(g=J(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)lc||(C=G),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(F(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function J(){function a(f){return h.call(a.src,a.listener,f)}const h=re;return a}function H(a,h,f,g,C){if(Array.isArray(h))for(var V=0;V<h.length;V++)H(a,h[V],f,g,C);else g=u(g)?!!g.capture:!!g,f=ce(f),a&&a[mn]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=S(V,f,g,C),-1<f&&(Xt(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=W(a))&&(h=a.g[h.toString()],a=-1,h&&(a=S(h,f,g,C)),(f=-1<a?h[a]:null)&&K(f))}function K(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[mn])E(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(F(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=W(h))?(E(f,a),f.h==0&&(f.src=null,h[D]=null)):Xt(a)}}}function F(a){return a in L?L[a]:L[a]="on"+a}function re(a,h){if(a.da)a=!0;else{h=new Tr(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&K(a),a=f.call(g,h)}return a}function W(a){return a=a[D],a instanceof hi?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function ae(){We.call(this),this.i=new hi(this),this.M=this,this.F=null}R(ae,We),ae.prototype[mn]=!0,ae.prototype.removeEventListener=function(a,h,f,g){H(this,a,h,f,g)};function de(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Qe(h,a);else if(h instanceof Qe)h.target=h.target||a;else{var C=h;h=new Qe(g,a),w(h,C)}if(C=!0,f)for(var V=f.length-1;0<=V;V--){var G=h.g=f[V];C=ve(G,g,!0,h)&&C}if(G=h.g=a,C=ve(G,g,!0,h)&&C,C=ve(G,g,!1,h)&&C,f)for(V=0;V<f.length;V++)G=h.g=f[V],C=ve(G,g,!1,h)&&C}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Xt(f[g]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ae.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function ve(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,V=0;V<h.length;++V){var G=h[V];if(G&&!G.da&&G.capture==f){var ke=G.listener,nt=G.ha||G.src;G.fa&&E(a.i,G),C=ke.call(nt,g)!==!1&&C}}return C&&!g.defaultPrevented}function ot(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function et(a){a.g=ot(()=>{a.g=null,a.i&&(a.i=!1,et(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Lt extends We{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(a){We.call(this),this.h=a,this.g={}}R(at,We);var Fn=[];function di(a){ee(a.g,function(h,f){this.g.hasOwnProperty(f)&&K(h)},a),a.g={}}at.prototype.N=function(){at.aa.N.call(this),di(this)},at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=l.JSON.stringify,Ft=l.JSON.parse,Ho=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function cc(){}cc.prototype.h=null;function _d(a){return a.h||(a.h=a.i())}function yd(){}var fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function uc(){Qe.call(this,"d")}R(uc,Qe);function hc(){Qe.call(this,"c")}R(hc,Qe);var br={},vd=null;function Go(){return vd=vd||new ae}br.La="serverreachability";function Id(a){Qe.call(this,br.La,a)}R(Id,Qe);function pi(a){const h=Go();de(h,new Id(h))}br.STAT_EVENT="statevent";function Ed(a,h){Qe.call(this,br.STAT_EVENT,a),this.stat=h}R(Ed,Qe);function _t(a){const h=Go();de(h,new Ed(h,a))}br.Ma="timingevent";function Td(a,h){Qe.call(this,br.Ma,a),this.size=h}R(Td,Qe);function mi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function gi(){this.g=!0}gi.prototype.xa=function(){this.g=!1};function fI(a,h,f,g,C,V){a.info(function(){if(a.g)if(V)for(var G="",ke=V.split("&"),nt=0;nt<ke.length;nt++){var Te=ke[nt].split("=");if(1<Te.length){var lt=Te[0];Te=Te[1];var ct=lt.split("_");G=2<=ct.length&&ct[1]=="type"?G+(lt+"="+Te+"&"):G+(lt+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+f+`
`+G})}function pI(a,h,f,g,C,V,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+f+`
`+V+" "+G})}function os(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+gI(a,f)+(g?" "+g:"")})}function mI(a,h){a.info(function(){return"TIMEOUT: "+h})}gi.prototype.info=function(){};function gI(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var V=C[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<C.length;G++)C[G]=""}}}}return tt(f)}catch{return h}}var Wo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dc;function Qo(){}R(Qo,cc),Qo.prototype.g=function(){return new XMLHttpRequest},Qo.prototype.i=function(){return{}},dc=new Qo;function Un(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new at(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bd}function bd(){this.i=null,this.g="",this.h=!1}var Ad={},fc={};function pc(a,h,f){a.L=1,a.v=Zo(gn(h)),a.m=f,a.P=!0,Sd(a,null)}function Sd(a,h){a.F=Date.now(),Jo(a),a.A=gn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Bd(f.i,"t",g),a.C=0,f=a.j.J,a.h=new bd,a.g=sf(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Lt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Fn[0]=C.toString()),C=Fn);for(var V=0;V<C.length;V++){var G=O(f,C[V],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),pi(),fI(a.i,a.u,a.A,a.l,a.R,a.m)}Un.prototype.ca=function(a){a=a.target;const h=this.M;h&&_n(a)==3?h.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const ct=_n(this.g);var h=this.g.Ba();const cs=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Gd(this.g)))){this.J||ct!=4||h==7||(h==8||0>=cs?pi(3):pi(2)),mc(this);var f=this.g.Z();this.X=f;t:if(Rd(this)){var g=Gd(this.g);a="";var C=g.length,V=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ar(this),_i(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==C-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,pI(this.i,this.u,this.A,this.l,this.R,ct,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,nt=this.g;if((ke=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(ke)){var Te=ke;break t}}Te=null}if(f=Te)os(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gc(this,f);else{this.o=!1,this.s=3,_t(12),Ar(this),_i(this);break e}}if(this.P){f=!0;let Ht;for(;!this.J&&this.C<G.length;)if(Ht=_I(this,G),Ht==fc){ct==4&&(this.s=4,_t(14),f=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==Ad){this.s=4,_t(15),os(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else os(this.i,this.l,Ht,null),gc(this,Ht);if(Rd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||G.length!=0||this.h.h||(this.s=1,_t(16),f=!1),this.o=this.o&&f,!f)os(this.i,this.l,G,"[Invalid Chunked Response]"),Ar(this),_i(this);else if(0<G.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Tc(lt),lt.M=!0,_t(11))}}else os(this.i,this.l,G,null),gc(this,G);ct==4&&Ar(this),this.o&&!this.J&&(ct==4?ef(this.j,this):(this.o=!1,Jo(this)))}else NI(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Ar(this),_i(this)}}}catch{}finally{}};function Rd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function _I(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?fc:(f=Number(h.substring(f,g)),isNaN(f)?Ad:(g+=1,g+f>h.length?fc:(h=h.slice(g,g+f),a.C=g+f,h)))}Un.prototype.cancel=function(){this.J=!0,Ar(this)};function Jo(a){a.S=Date.now()+a.I,Pd(a,a.I)}function Pd(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=mi(m(a.ba,a),h)}function mc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(mI(this.i,this.A),this.L!=2&&(pi(),_t(17)),Ar(this),this.s=2,_i(this)):Pd(this,this.S-a)};function _i(a){a.j.G==0||a.J||ef(a.j,a)}function Ar(a){mc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,di(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function gc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||_c(f.h,a))){if(!a.K&&_c(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ia(f),ra(f);else break e;Ec(f),_t(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=mi(m(f.Za,f),6e3));if(1>=kd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Rr(f,11)}else if((a.K||f.g==a)&&ia(f),!z(h))for(C=f.Da.g.parse(h),h=0;h<C.length;h++){let Te=C[h];if(f.T=Te[0],Te=Te[1],f.G==2)if(Te[0]=="c"){f.K=Te[1],f.ia=Te[2];const lt=Te[3];lt!=null&&(f.la=lt,f.j.info("VER="+f.la));const ct=Te[4];ct!=null&&(f.Aa=ct,f.j.info("SVER="+f.Aa));const cs=Te[5];cs!=null&&typeof cs=="number"&&0<cs&&(g=1.5*cs,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ht=a.g;if(Ht){const aa=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(aa){var V=g.h;V.g||aa.indexOf("spdy")==-1&&aa.indexOf("quic")==-1&&aa.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(yc(V,V.h),V.h=null))}if(g.D){const wc=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;wc&&(g.ya=wc,Me(g.I,g.D,wc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var G=a;if(g.qa=rf(g,g.J?g.ia:null,g.W),G.K){Vd(g.h,G);var ke=G,nt=g.L;nt&&(ke.I=nt),ke.B&&(mc(ke),Jo(ke)),g.g=G}else Xd(g);0<f.i.length&&sa(f)}else Te[0]!="stop"&&Te[0]!="close"||Rr(f,7);else f.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?Rr(f,7):Ic(f):Te[0]!="noop"&&f.l&&f.l.ta(Te),f.v=0)}}pi(4)}catch{}}var yI=class{constructor(a,h){this.g=a,this.map=h}};function Cd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function kd(a){return a.h?1:a.g?a.g.size:0}function _c(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function yc(a,h){a.g?a.g.add(h):a.h=h}function Vd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Cd.prototype.cancel=function(){if(this.i=Dd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Dd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function vI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function II(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Nd(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=II(a),g=vI(a),C=g.length,V=0;V<C;V++)h.call(void 0,g[V],f&&f[V],a)}var Od=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function EI(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),C=null;if(0<=g){var V=a[f].substring(0,g);C=a[f].substring(g+1)}else V=a[f];h(V,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Sr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Sr){this.h=a.h,Yo(this,a.j),this.o=a.o,this.g=a.g,Xo(this,a.s),this.l=a.l;var h=a.i,f=new Ii;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Md(this,f),this.m=a.m}else a&&(h=String(a).match(Od))?(this.h=!1,Yo(this,h[1]||"",!0),this.o=yi(h[2]||""),this.g=yi(h[3]||"",!0),Xo(this,h[4]),this.l=yi(h[5]||"",!0),Md(this,h[6]||"",!0),this.m=yi(h[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}Sr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(vi(h,Ld,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(vi(h,Ld,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(vi(f,f.charAt(0)=="/"?bI:wI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",vi(f,SI)),a.join("")};function gn(a){return new Sr(a)}function Yo(a,h,f){a.j=f?yi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Xo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Md(a,h,f){h instanceof Ii?(a.i=h,RI(a.i,a.h)):(f||(h=vi(h,AI)),a.i=new Ii(h,a.h))}function Me(a,h,f){a.i.set(h,f)}function Zo(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function yi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function vi(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,TI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function TI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ld=/[#\/\?@]/g,wI=/[#\?:]/g,bI=/[#\?]/g,AI=/[#\?@]/g,SI=/#/g;function Ii(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Bn(a){a.g||(a.g=new Map,a.h=0,a.i&&EI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Ii.prototype,n.add=function(a,h){Bn(this),this.i=null,a=as(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Fd(a,h){Bn(a),h=as(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ud(a,h){return Bn(a),h=as(a,h),a.g.has(h)}n.forEach=function(a,h){Bn(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(h,C,g,this)},this)},this)},n.na=function(){Bn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const C=a[g];for(let V=0;V<C.length;V++)f.push(h[g])}return f},n.V=function(a){Bn(this);let h=[];if(typeof a=="string")Ud(this,a)&&(h=h.concat(this.g.get(as(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},n.set=function(a,h){return Bn(this),this.i=null,a=as(this,a),Ud(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Bd(a,h,f){Fd(a,h),0<f.length&&(a.i=null,a.g.set(as(a,h),k(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const V=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var C=V;G[g]!==""&&(C+="="+encodeURIComponent(String(G[g]))),a.push(C)}}return this.i=a.join("&")};function as(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function RI(a,h){h&&!a.j&&(Bn(a),a.i=null,a.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Fd(this,g),Bd(this,C,f))},a)),a.j=h}function PI(a,h){const f=new gi;if(l.Image){const g=new Image;g.onload=I($n,f,"TestLoadImage: loaded",!0,h,g),g.onerror=I($n,f,"TestLoadImage: error",!1,h,g),g.onabort=I($n,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=I($n,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function CI(a,h){const f=new gi,g=new AbortController,C=setTimeout(()=>{g.abort(),$n(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(C),V.ok?$n(f,"TestPingServer: ok",!0,h):$n(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),$n(f,"TestPingServer: error",!1,h)})}function $n(a,h,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function xI(){this.g=new Ho}function kI(a,h,f){const g=f||"";try{Nd(a,function(C,V){let G=C;u(C)&&(G=tt(C)),h.push(g+V+"="+encodeURIComponent(G))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function ea(a){this.l=a.Ub||null,this.j=a.eb||!1}R(ea,cc),ea.prototype.g=function(){return new ta(this.l,this.j)},ea.prototype.i=function(a){return function(){return a}}({});function ta(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ta,ae),n=ta.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ti(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ti(this)),this.g&&(this.readyState=3,Ti(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$d(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function $d(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ei(this):Ti(this),this.readyState==3&&$d(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Ei(this))},n.Qa=function(a){this.g&&(this.response=a,Ei(this))},n.ga=function(){this.g&&Ei(this)};function Ei(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ti(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ti(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function jd(a){let h="";return ee(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function vc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=jd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Me(a,h,f))}function $e(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R($e,ae);var VI=/^https?$/i,DI=["POST","PUT"];n=$e.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dc.g(),this.v=this.o?_d(this.o):_d(dc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){qd(this,V);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(DI,h,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of f)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hd(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){qd(this,V)}};function qd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,zd(a),na(a)}function zd(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),na(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),na(this,!0)),$e.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Kd(this):this.bb())},n.bb=function(){Kd(this)};function Kd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_n(a)!=4||a.Z()!=2)){if(a.u&&_n(a)==4)ot(a.Ea,0,a);else if(de(a,"readystatechange"),_n(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=G===0){var C=String(a.D).match(Od)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!VI.test(C?C.toLowerCase():"")}f=g}if(f)de(a,"complete"),de(a,"success");else{a.m=6;try{var V=2<_n(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",zd(a)}}finally{na(a)}}}}function na(a,h){if(a.g){Hd(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||de(a,"ready");try{f.onreadystatechange=g}catch{}}}function Hd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function _n(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ft(h)}};function Gd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function NI(a){const h={};a=(a.g&&2<=_n(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(z(a[g]))continue;var f=A(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[C]||[];h[C]=V,V.push(f)}b(h,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Wd(a){this.Aa=0,this.i=[],this.j=new gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wi("baseRetryDelayMs",5e3,a),this.cb=wi("retryDelaySeedMs",1e4,a),this.Wa=wi("forwardChannelMaxRetries",2,a),this.wa=wi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Cd(a&&a.concurrentRequestLimit),this.Da=new xI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Wd.prototype,n.la=8,n.G=1,n.connect=function(a,h,f,g){_t(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=rf(this,null,this.W),sa(this)};function Ic(a){if(Qd(a),a.G==3){var h=a.U++,f=gn(a.I);if(Me(f,"SID",a.K),Me(f,"RID",h),Me(f,"TYPE","terminate"),bi(a,f),h=new Un(a,a.j,h),h.L=2,h.v=Zo(gn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=sf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Jo(h)}nf(a)}function ra(a){a.g&&(Tc(a),a.g.cancel(),a.g=null)}function Qd(a){ra(a),a.u&&(l.clearTimeout(a.u),a.u=null),ia(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function sa(a){if(!xd(a.h)&&!a.s){a.s=!0;var h=a.Ga;Pe||Er(),Ee||(Pe(),Ee=!0),Kt.add(h,a),a.B=0}}function OI(a,h){return kd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=mi(m(a.Ga,a,h),tf(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Un(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),w(V,this.S)):V=this.S),this.m!==null||this.O||(C.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Yd(this,C,h),f=gn(this.I),Me(f,"RID",a),Me(f,"CVER",22),this.D&&Me(f,"X-HTTP-Session-Id",this.D),bi(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(jd(V)))+"&"+h:this.m&&vc(f,this.m,V)),yc(this.h,C),this.Ua&&Me(f,"TYPE","init"),this.P?(Me(f,"$req",h),Me(f,"SID","null"),C.T=!0,pc(C,f,null)):pc(C,f,h),this.G=2}}else this.G==3&&(a?Jd(this,a):this.i.length==0||xd(this.h)||Jd(this))};function Jd(a,h){var f;h?f=h.l:f=a.U++;const g=gn(a.I);Me(g,"SID",a.K),Me(g,"RID",f),Me(g,"AID",a.T),bi(a,g),a.m&&a.o&&vc(g,a.m,a.o),f=new Un(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Yd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),yc(a.h,f),pc(f,g,h)}function bi(a,h){a.H&&ee(a.H,function(f,g){Me(h,g,f)}),a.l&&Nd({},function(f,g){Me(h,g,f)})}function Yd(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let V=-1;for(;;){const G=["count="+f];V==-1?0<f?(V=C[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let ke=!0;for(let nt=0;nt<f;nt++){let Te=C[nt].g;const lt=C[nt].map;if(Te-=V,0>Te)V=Math.max(0,C[nt].g-100),ke=!1;else try{kI(lt,G,"req"+Te+"_")}catch{g&&g(lt)}}if(ke){g=G.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Xd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Pe||Er(),Ee||(Pe(),Ee=!0),Kt.add(h,a),a.v=0}}function Ec(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=mi(m(a.Fa,a),tf(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Zd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=mi(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),ra(this),Zd(this))};function Tc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Zd(a){a.g=new Un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=gn(a.qa);Me(h,"RID","rpc"),Me(h,"SID",a.K),Me(h,"AID",a.T),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(h,"TO",a.ja),Me(h,"TYPE","xmlhttp"),bi(a,h),a.m&&a.o&&vc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Zo(gn(h)),f.m=null,f.P=!0,Sd(f,a)}n.Za=function(){this.C!=null&&(this.C=null,ra(this),Ec(this),_t(19))};function ia(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ef(a,h){var f=null;if(a.g==h){ia(a),Tc(a),a.g=null;var g=2}else if(_c(a.h,h))f=h.D,Vd(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;g=Go(),de(g,new Td(g,f)),sa(a)}else Xd(a);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&OI(a,h)||g==2&&Ec(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),C){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function tf(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Rr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const C=!g;g=new Sr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Yo(g,"https"),Zo(g),C?PI(g.toString(),f):CI(g.toString(),f)}else _t(2);a.G=0,a.l&&a.l.sa(h),nf(a),Qd(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function nf(a){if(a.G=0,a.ka=[],a.l){const h=Dd(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ka,h),x(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function rf(a,h,f){var g=f instanceof Sr?gn(f):new Sr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Xo(g,g.s);else{var C=l.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var V=new Sr(null);g&&Yo(V,g),h&&(V.g=h),C&&Xo(V,C),f&&(V.l=f),g=V}return f=a.D,h=a.ya,f&&h&&Me(g,f,h),Me(g,"VER",a.la),bi(a,g),g}function sf(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new $e(new ea({eb:f})):new $e(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function of(){}n=of.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oa(){}oa.prototype.g=function(a,h){return new Rt(a,h)};function Rt(a,h){ae.call(this),this.g=new Wd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!z(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!z(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ls(this)}R(Rt,ae),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Ic(this.g)},Rt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=tt(a),a=f);h.i.push(new yI(h.Ya++,a)),h.G==3&&sa(h)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Ic(this.g),delete this.g,Rt.aa.N.call(this)};function af(a){uc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(af,uc);function lf(){hc.call(this),this.status=1}R(lf,hc);function ls(a){this.g=a}R(ls,of),ls.prototype.ua=function(){de(this.g,"a")},ls.prototype.ta=function(a){de(this.g,new af(a))},ls.prototype.sa=function(a){de(this.g,new lf)},ls.prototype.ra=function(){de(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,ly=function(){return new oa},ay=function(){return Go()},oy=br,_u={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wo.NO_ERROR=0,Wo.TIMEOUT=8,Wo.HTTP_ERROR=6,Va=Wo,wd.COMPLETE="complete",iy=wd,yd.EventType=fi,fi.OPEN="a",fi.CLOSE="b",fi.ERROR="c",fi.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Oi=yd,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,sy=$e}).apply(typeof fa<"u"?fa:typeof self<"u"?self:typeof window<"u"?window:{});const Tp="@firebase/firestore",wp="4.7.16";/**
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
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let oi="11.8.1";/**
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
 */const Yr=new uh("@firebase/firestore");function Is(){return Yr.logLevel}function U(n,...e){if(Yr.logLevel<=ge.DEBUG){const t=e.map(wh);Yr.debug(`Firestore (${oi}): ${n}`,...t)}}function Et(n,...e){if(Yr.logLevel<=ge.ERROR){const t=e.map(wh);Yr.error(`Firestore (${oi}): ${n}`,...t)}}function uo(n,...e){if(Yr.logLevel<=ge.WARN){const t=e.map(wh);Yr.warn(`Firestore (${oi}): ${n}`,...t)}}function wh(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function X(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,cy(n,r,t)}function cy(n,e,t){let r=`FIRESTORE (${oi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Et(r),new Error(r)}function ne(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||cy(e,s,r)}function he(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends On{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class vS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(vt.UNAUTHENTICATED))}shutdown(){}}class ES{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string",31837,{l:r}),new vS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new vt(e)}}class TS{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class wS{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new TS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new bp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new bp(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function AS(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function uy(){return new TextEncoder}/**
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
 */class hy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=AS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function yu(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=uy(),o=SS(i.encode(Ap(n,t)),i.encode(Ap(e,t)));return o!==0?o:ue(r,s)}}t+=r>65535?2:1}return ue(n.length,e.length)}function Ap(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function SS(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function $s(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function dy(n){return n+"\0"}/**
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
 */const Sp=-62135596800,Rp=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Rp);return new Be(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Y(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Y(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sp)throw new Y(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rp}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Sp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Be(0,0))}static max(){return new se(new Be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Pp="__name__";class nn{constructor(e,t,r){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&X(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return nn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=nn.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=nn.isNumericId(e),s=nn.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?nn.extractNumericId(e).compare(nn.extractNumericId(t)):yu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ar.fromString(e.substring(4,e.length-2))}}class Re extends nn{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Re(t)}static emptyPath(){return new Re([])}}const RS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends nn{construct(e,t,r){return new Ue(e,t,r)}static isValidIdentifier(e){return RS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pp}static keyField(){return new Ue([Pp])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(t)}static emptyPath(){return new Ue([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Re.fromString(e))}static fromName(e){return new Q(Re.fromString(e).popFirst(5))}static empty(){return new Q(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Re(e.slice()))}}/**
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
 */const ho=-1;class cl{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function vu(n){return n.fields.find(e=>e.kind===2)}function Nr(n){return n.fields.filter(e=>e.kind!==2)}cl.UNKNOWN_ID=-1;class Da{constructor(e,t){this.fieldPath=e,this.kind=t}}class fo{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new fo(0,Mt.min())}}function PS(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Be(t+1,0):new Be(t,r));return new Mt(s,Q.empty(),e)}function fy(n){return new Mt(n.readTime,n.key,ho)}class Mt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Mt(se.min(),Q.empty(),ho)}static max(){return new Mt(se.max(),Q.empty(),ho)}}function bh(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const py="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class my{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ss(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==py)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
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
 */const xt="SimpleDb";class $l{static open(e,t,r,s){try{return new $l(t,e.transaction(s,r))}catch(i){throw new Gi(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Sn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Gi(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=Ah(r.target.error);this.S.reject(new Gi(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(U(xt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new xS(t)}}class lr{static delete(e){return U(xt,"Removing database:",e),Lr(l_().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!m_())return!1;if(lr.F())return!0;const e=Je(),t=lr.M(e),r=0<t&&t<10,s=gy(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,lr.M(Je())===12.2&&Et("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(U(xt,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Gi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new Y(N.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new Y(N.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Gi(e,o))},s.onupgradeneeded=i=>{U(xt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${o.version}`);this.B.q(o,s.transaction,i.oldVersion,this.version).next(()=>{U(xt,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const r=t.target;this.L=r.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const l=$l.open(this.db,e,i?"readonly":"readwrite",r),c=s(l).next(u=>(l.v(),u)).catch(u=>(l.abort(u),P.reject(u))).toPromise();return c.catch(()=>{}),await l.D,c}catch(l){const c=l,u=c.name!=="FirebaseError"&&o<3;if(U(xt,"Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function gy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class CS{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return Lr(this.K.delete())}}class Gi extends Y{constructor(e,t){super(N.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function vr(n){return n.name==="IndexedDbTransactionError"}class xS{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(U(xt,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(U(xt,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Lr(r)}add(e){return U(xt,"ADD",this.store.name,e,e),Lr(this.store.add(e))}get(e){return Lr(this.store.get(e)).next(t=>(t===void 0&&(t=null),U(xt,"GET",this.store.name,e,t),t))}delete(e){return U(xt,"DELETE",this.store.name,e),Lr(this.store.delete(e))}count(){return U(xt,"COUNT",this.store.name),Lr(this.store.count())}J(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new P((o,l)=>{i.onerror=c=>{l(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.Y(i,(l,c)=>{o.push(c)}).next(()=>o)}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new P((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}X(e,t){U(xt,"DELETE ALL",this.store.name);const r=this.options(e,t);r.ee=!1;const s=this.cursor(r);return this.Y(s,(i,o,l)=>l.delete())}te(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.Y(s,t)}ne(e){const t=this.cursor({});return new P((r,s)=>{t.onerror=i=>{const o=Ah(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():r()}):r()}})}Y(e,t){const r=[];return new P((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void s();const c=new CS(l),u=t(l.primaryKey,l.value,c);if(u instanceof P){const d=u.catch(p=>(c.done(),P.reject(p)));r.push(d)}c.isDone?s():c.j===null?l.continue():l.continue(c.j)}}).next(()=>P.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.ee?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Lr(n){return new P((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Ah(r.target.error);t(s)}})}let Cp=!1;function Ah(n){const e=lr.M(Je());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new Y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Cp||(Cp=!0,setTimeout(()=>{throw r},0)),r}}return n}const Wi="IndexBackfiller";class kS{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){U(Wi,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();U(Wi,`Documents written: ${t}`)}catch(t){vr(t)?U(Wi,"Ignoring IndexedDB error during index backfill: ",t):await ss(t)}await this.ie(6e4)})}}class VS{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const r=new Set;let s=t,i=!0;return P.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U(Wi,`Processing collection: ${o}`),this._e(e,o,s).next(l=>{s-=l,r.add(o)});i=!1})).next(()=>t-s)}_e(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ae(s,i)).next(l=>(U(Wi,`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,t,l))).next(()=>o.size)}))}ae(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=fy(i);bh(o,r)>0&&(r=o)}),new Mt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class jt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}jt.le=-1;/**
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
 */const qr=-1;function jl(n){return n==null}function po(n){return n===0&&1/n==-1/0}function DS(n){return typeof n=="number"&&Number.isInteger(n)&&!po(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ul="";function gt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=xp(e)),e=NS(n.get(t),e);return xp(e)}function NS(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ul:t+="";break;default:t+=i}}return t}function xp(n){return n+ul+""}function sn(n){const e=n.length;if(ne(e>=2,64408,{path:n}),e===2)return ne(n.charAt(0)===ul&&n.charAt(1)==="",56145,{path:n}),Re.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(ul,i);switch((o<0||o>t)&&X(50515,{path:n}),n.charAt(o+1)){case"":const l=n.substring(i,o);let c;s.length===0?c=l:(s+=l,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:X(61167,{path:n})}i=o+2}return new Re(r)}/**
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
 */const Or="remoteDocuments",Oo="owner",ds="owner",mo="mutationQueues",OS="userId",Gt="mutations",kp="batchId",$r="userMutationsIndex",Vp=["userId","batchId"];/**
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
 */function Na(n,e){return[n,gt(e)]}function _y(n,e,t){return[n,gt(e),t]}const MS={},js="documentMutations",hl="remoteDocumentsV14",LS=["prefixPath","collectionGroup","readTime","documentId"],Oa="documentKeyIndex",FS=["prefixPath","collectionGroup","documentId"],yy="collectionGroupIndex",US=["collectionGroup","readTime","prefixPath","documentId"],go="remoteDocumentGlobal",Iu="remoteDocumentGlobalKey",qs="targets",vy="queryTargetsIndex",BS=["canonicalId","targetId"],zs="targetDocuments",$S=["targetId","path"],Sh="documentTargetsIndex",jS=["path","targetId"],dl="targetGlobalKey",zr="targetGlobal",_o="collectionParents",qS=["collectionId","parent"],Ks="clientMetadata",zS="clientId",ql="bundles",KS="bundleId",zl="namedQueries",HS="name",Rh="indexConfiguration",GS="indexId",Eu="collectionGroupIndex",WS="collectionGroup",Qi="indexState",QS=["indexId","uid"],Iy="sequenceNumberIndex",JS=["uid","sequenceNumber"],Ji="indexEntries",YS=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ey="documentKeyIndex",XS=["indexId","uid","orderedDocumentKey"],Kl="documentOverlays",ZS=["userId","collectionPath","documentId"],Tu="collectionPathOverlayIndex",eR=["userId","collectionPath","largestBatchId"],Ty="collectionGroupOverlayIndex",tR=["userId","collectionGroup","largestBatchId"],Ph="globals",nR="name",wy=[mo,Gt,js,Or,qs,Oo,zr,zs,Ks,go,_o,ql,zl],rR=[...wy,Kl],by=[mo,Gt,js,hl,qs,Oo,zr,zs,Ks,go,_o,ql,zl,Kl],Ay=by,Ch=[...Ay,Rh,Qi,Ji],sR=Ch,Sy=[...Ch,Ph],iR=Sy;/**
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
 */class wu extends my{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function Ye(n,e){const t=he(n);return lr.N(t.he,e)}/**
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
 */function Dp(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ir(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ry(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Fe{constructor(e,t){this.comparator=e,this.root=t||rt.EMPTY}insert(e,t){return new Fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pa(this.root,e,this.comparator,!0)}}class pa{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new rt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Np(this.data.getIterator())}getIteratorFrom(e){return new Np(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class Np{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function fs(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class St{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new St([])}unionWith(e){let t=new xe(Ue.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new St(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $s(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Py extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Py("Invalid base64 string: "+i):i}}(e);return new Ge(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const oR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=oR.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Dn(n){return typeof n=="string"?Ge.fromBase64String(n):Ge.fromUint8Array(n)}/**
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
 */const Cy="server_timestamp",xy="__type__",ky="__previous_value__",Vy="__local_write_time__";function xh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[xy])===null||t===void 0?void 0:t.stringValue)===Cy}function Hl(n){const e=n.mapValue.fields[ky];return xh(e)?Hl(e):e}function yo(n){const e=Vn(n.mapValue.fields[Vy].timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class aR{constructor(e,t,r,s,i,o,l,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const fl="(default)";class Xr{constructor(e,t){this.projectId=e,this.database=t||fl}static empty(){return new Xr("","")}get isDefaultDatabase(){return this.database===fl}isEqual(e){return e instanceof Xr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const kh="__type__",Dy="__max__",nr={mapValue:{fields:{__type__:{stringValue:Dy}}}},Vh="__vector__",Hs="value",Ma={nullValue:"NULL_VALUE"};function fr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xh(n)?4:Ny(n)?9007199254740991:Gl(n)?10:11:X(28295,{value:n})}function hn(n,e){if(n===e)return!0;const t=fr(n);if(t!==fr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return yo(n).isEqual(yo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Vn(s.timestampValue),l=Vn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Dn(s.bytesValue).isEqual(Dn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Le(s.doubleValue),l=Le(i.doubleValue);return o===l?po(o)===po(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return $s(n.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Dp(o)!==Dp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!hn(o[c],l[c])))return!1;return!0}(n,e);default:return X(52216,{left:n})}}function vo(n,e){return(n.values||[]).find(t=>hn(t,e))!==void 0}function pr(n,e){if(n===e)return 0;const t=fr(n),r=fr(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Le(i.integerValue||i.doubleValue),c=Le(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Op(n.timestampValue,e.timestampValue);case 4:return Op(yo(n),yo(e));case 5:return yu(n.stringValue,e.stringValue);case 6:return function(i,o){const l=Dn(i),c=Dn(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=ue(l[u],c[u]);if(d!==0)return d}return ue(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ue(Le(i.latitude),Le(o.latitude));return l!==0?l:ue(Le(i.longitude),Le(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Mp(n.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},I=(l=p[Hs])===null||l===void 0?void 0:l.arrayValue,R=(c=m[Hs])===null||c===void 0?void 0:c.arrayValue,k=ue(((u=I==null?void 0:I.values)===null||u===void 0?void 0:u.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Mp(I,R)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===nr.mapValue&&o===nr.mapValue)return 0;if(i===nr.mapValue)return 1;if(o===nr.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=yu(c[p],d[p]);if(m!==0)return m;const I=pr(l[c[p]],u[d[p]]);if(I!==0)return I}return ue(c.length,d.length)}(n.mapValue,e.mapValue);default:throw X(23264,{Pe:t})}}function Op(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Vn(n),r=Vn(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function Mp(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=pr(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function Gs(n){return bu(n)}function bu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Vn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Dn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=bu(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${bu(t.fields[o])}`;return s+"}"}(n.mapValue):X(61005,{value:n})}function La(n){switch(fr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Hl(n);return e?16+La(e):16;case 5:return 2*n.stringValue.length;case 6:return Dn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+La(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Ir(r.fields,(i,o)=>{s+=i.length+La(o)}),s}(n.mapValue);default:throw X(13486,{value:n})}}function Io(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Au(n){return!!n&&"integerValue"in n}function Eo(n){return!!n&&"arrayValue"in n}function Lp(n){return!!n&&"nullValue"in n}function Fp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fa(n){return!!n&&"mapValue"in n}function Gl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[kh])===null||t===void 0?void 0:t.stringValue)===Vh}function Yi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ir(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Yi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Yi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ny(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Dy}const Oy={mapValue:{fields:{[kh]:{stringValue:Vh},[Hs]:{arrayValue:{}}}}};function lR(n){return"nullValue"in n?Ma:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Io(Xr.empty(),Q.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Gl(n)?Oy:{mapValue:{}}:X(35942,{value:n})}function cR(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Io(Xr.empty(),Q.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Oy:"mapValue"in n?Gl(n)?{mapValue:{}}:nr:X(61959,{value:n})}function Up(n,e){const t=pr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Bp(n,e){const t=pr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Fa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yi(t)}setAll(e){let t=Ue.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=Yi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Fa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Fa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ir(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pt(Yi(this.value))}}function My(n){const e=[];return Ir(n.fields,(t,r)=>{const s=new Ue([t]);if(Fa(r)){const i=My(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new St(e)}/**
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
 */class je{constructor(e,t,r,s,i,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new je(e,0,se.min(),se.min(),se.min(),pt.empty(),0)}static newFoundDocument(e,t,r,s){return new je(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new je(e,2,t,se.min(),se.min(),pt.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,se.min(),se.min(),pt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ws{constructor(e,t){this.position=e,this.inclusive=t}}function $p(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),t.key):r=pr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function jp(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!hn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class pl{constructor(e,t="asc"){this.field=e,this.dir=t}}function uR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ly{}class _e extends Ly{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new hR(e,t,r):t==="array-contains"?new pR(e,r):t==="in"?new qy(e,r):t==="not-in"?new mR(e,r):t==="array-contains-any"?new gR(e,r):new _e(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new dR(e,r):new fR(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(pr(t,this.value)):t!==null&&fr(this.value)===fr(t)&&this.matchesComparison(pr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ce extends Ly{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Ce(e,t)}matches(e){return Qs(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Qs(n){return n.op==="and"}function Su(n){return n.op==="or"}function Dh(n){return Fy(n)&&Qs(n)}function Fy(n){for(const e of n.filters)if(e instanceof Ce)return!1;return!0}function Ru(n){if(n instanceof _e)return n.field.canonicalString()+n.op.toString()+Gs(n.value);if(Dh(n))return n.filters.map(e=>Ru(e)).join(",");{const e=n.filters.map(t=>Ru(t)).join(",");return`${n.op}(${e})`}}function Uy(n,e){return n instanceof _e?function(r,s){return s instanceof _e&&r.op===s.op&&r.field.isEqual(s.field)&&hn(r.value,s.value)}(n,e):n instanceof Ce?function(r,s){return s instanceof Ce&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Uy(o,s.filters[l]),!0):!1}(n,e):void X(19439)}function By(n,e){const t=n.filters.concat(e);return Ce.create(t,n.op)}function $y(n){return n instanceof _e?function(t){return`${t.field.canonicalString()} ${t.op} ${Gs(t.value)}`}(n):n instanceof Ce?function(t){return t.op.toString()+" {"+t.getFilters().map($y).join(" ,")+"}"}(n):"Filter"}class hR extends _e{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class dR extends _e{constructor(e,t){super(e,"in",t),this.keys=jy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class fR extends _e{constructor(e,t){super(e,"not-in",t),this.keys=jy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function jy(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Q.fromName(r.referenceValue))}class pR extends _e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Eo(t)&&vo(t.arrayValue,this.value)}}class qy extends _e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&vo(this.value.arrayValue,t)}}class mR extends _e{constructor(e,t){super(e,"not-in",t)}matches(e){if(vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!vo(this.value.arrayValue,t)}}class gR extends _e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Eo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>vo(this.value.arrayValue,r))}}/**
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
 */class _R{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function Pu(n,e=null,t=[],r=[],s=null,i=null,o=null){return new _R(n,e,t,r,s,i,o)}function Zr(n){const e=he(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ru(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),jl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Gs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Gs(r)).join(",")),e.Ie=t}return e.Ie}function Mo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!uR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Uy(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!jp(n.startAt,e.startAt)&&jp(n.endAt,e.endAt)}function ml(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function gl(n,e){return n.filters.filter(t=>t instanceof _e&&t.field.isEqual(e))}function qp(n,e,t){let r=Ma,s=!0;for(const i of gl(n,e)){let o=Ma,l=!0;switch(i.op){case"<":case"<=":o=lR(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,l=!1;break;case"!=":case"not-in":o=Ma}Up({value:r,inclusive:s},{value:o,inclusive:l})<0&&(r=o,s=l)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Up({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function zp(n,e,t){let r=nr,s=!0;for(const i of gl(n,e)){let o=nr,l=!0;switch(i.op){case">=":case">":o=cR(i.value),l=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,l=!1;break;case"!=":case"not-in":o=nr}Bp({value:r,inclusive:s},{value:o,inclusive:l})>0&&(r=o,s=l)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Bp({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Lo{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function yR(n,e,t,r,s,i,o,l){return new Lo(n,e,t,r,s,i,o,l)}function Nh(n){return new Lo(n)}function Kp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zy(n){return n.collectionGroup!==null}function Xi(n){const e=he(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new xe(Ue.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new pl(i,r))}),t.has(Ue.keyField().canonicalString())||e.Ee.push(new pl(Ue.keyField(),r))}return e.Ee}function zt(n){const e=he(n);return e.de||(e.de=vR(e,Xi(n))),e.de}function vR(n,e){if(n.limitType==="F")return Pu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pl(s.field,i)});const t=n.endAt?new Ws(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ws(n.startAt.position,n.startAt.inclusive):null;return Pu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Cu(n,e){const t=n.filters.concat([e]);return new Lo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function xu(n,e,t){return new Lo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Wl(n,e){return Mo(zt(n),zt(e))&&n.limitType===e.limitType}function Ky(n){return`${Zr(zt(n))}|lt:${n.limitType}`}function Es(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>$y(s)).join(", ")}]`),jl(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Gs(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Gs(s)).join(",")),`Target(${r})`}(zt(n))}; limitType=${n.limitType})`}function Fo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Xi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=$p(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Xi(r),s)||r.endAt&&!function(o,l,c){const u=$p(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Xi(r),s))}(n,e)}function IR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Hy(n){return(e,t)=>{let r=!1;for(const s of Xi(n)){const i=ER(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ER(n,e,t){const r=n.field.isKeyField()?Q.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?pr(c,u):X(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:n.dir})}}/**
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
 */class Mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ir(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ry(this.inner)}size(){return this.innerSize}}/**
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
 */const TR=new Fe(Q.comparator);function Nt(){return TR}const Gy=new Fe(Q.comparator);function Mi(...n){let e=Gy;for(const t of n)e=e.insert(t.key,t);return e}function Wy(n){let e=Gy;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function on(){return Zi()}function Qy(){return Zi()}function Zi(){return new Mn(n=>n.toString(),(n,e)=>n.isEqual(e))}const wR=new Fe(Q.comparator),bR=new xe(Q.comparator);function pe(...n){let e=bR;for(const t of n)e=e.add(t);return e}const AR=new xe(ue);function SR(){return AR}/**
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
 */function Oh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:po(e)?"-0":e}}function Jy(n){return{integerValue:""+n}}function RR(n,e){return DS(e)?Jy(e):Oh(n,e)}/**
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
 */class Ql{constructor(){this._=void 0}}function PR(n,e,t){return n instanceof To?function(s,i){const o={fields:{[xy]:{stringValue:Cy},[Vy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&xh(i)&&(i=Hl(i)),i&&(o.fields[ky]=i),{mapValue:o}}(t,e):n instanceof Js?Xy(n,e):n instanceof Ys?Zy(n,e):function(s,i){const o=Yy(s,i),l=Hp(o)+Hp(s.Re);return Au(o)&&Au(s.Re)?Jy(l):Oh(s.serializer,l)}(n,e)}function CR(n,e,t){return n instanceof Js?Xy(n,e):n instanceof Ys?Zy(n,e):t}function Yy(n,e){return n instanceof wo?function(r){return Au(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class To extends Ql{}class Js extends Ql{constructor(e){super(),this.elements=e}}function Xy(n,e){const t=ev(e);for(const r of n.elements)t.some(s=>hn(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ys extends Ql{constructor(e){super(),this.elements=e}}function Zy(n,e){let t=ev(e);for(const r of n.elements)t=t.filter(s=>!hn(s,r));return{arrayValue:{values:t}}}class wo extends Ql{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Hp(n){return Le(n.integerValue||n.doubleValue)}function ev(n){return Eo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class xR{constructor(e,t){this.field=e,this.transform=t}}function kR(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Js&&s instanceof Js||r instanceof Ys&&s instanceof Ys?$s(r.elements,s.elements,hn):r instanceof wo&&s instanceof wo?hn(r.Re,s.Re):r instanceof To&&s instanceof To}(n.transform,e.transform)}class VR{constructor(e,t){this.version=e,this.transformResults=t}}class Tt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tt}static exists(e){return new Tt(void 0,e)}static updateTime(e){return new Tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ua(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Jl{}function tv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Yl(n.key,Tt.none()):new ai(n.key,n.data,Tt.none());{const t=n.data,r=pt.empty();let s=new xe(Ue.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ln(n.key,r,new St(s.toArray()),Tt.none())}}function DR(n,e,t){n instanceof ai?function(s,i,o){const l=s.value.clone(),c=Wp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Ln?function(s,i,o){if(!Ua(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Wp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(nv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function eo(n,e,t,r){return n instanceof ai?function(i,o,l,c){if(!Ua(i.precondition,o))return l;const u=i.value.clone(),d=Qp(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ln?function(i,o,l,c){if(!Ua(i.precondition,o))return l;const u=Qp(i.fieldTransforms,c,o),d=o.data;return d.setAll(nv(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,l){return Ua(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function NR(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Yy(r.transform,s||null);i!=null&&(t===null&&(t=pt.empty()),t.set(r.field,i))}return t||null}function Gp(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$s(r,s,(i,o)=>kR(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ai extends Jl{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ln extends Jl{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nv(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Wp(n,e,t){const r=new Map;ne(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,CR(o,l,t[s]))}return r}function Qp(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,PR(i,o,e))}return r}class Yl extends Jl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rv extends Jl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Mh{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&DR(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=eo(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=eo(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Qy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=tv(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),pe())}isEqual(e){return this.batchId===e.batchId&&$s(this.mutations,e.mutations,(t,r)=>Gp(t,r))&&$s(this.baseMutations,e.baseMutations,(t,r)=>Gp(t,r))}}class Lh{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ne(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return wR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Lh(e,t,r,s)}}/**
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
 */class Fh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class OR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ke,Ie;function MR(n){switch(n){case N.OK:return X(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return X(15467,{code:n})}}function sv(n){if(n===void 0)return Et("GRPC error has no .code"),N.UNKNOWN;switch(n){case Ke.OK:return N.OK;case Ke.CANCELLED:return N.CANCELLED;case Ke.UNKNOWN:return N.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return N.INTERNAL;case Ke.UNAVAILABLE:return N.UNAVAILABLE;case Ke.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ke.NOT_FOUND:return N.NOT_FOUND;case Ke.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ke.ABORTED:return N.ABORTED;case Ke.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ke.DATA_LOSS:return N.DATA_LOSS;default:return X(39323,{code:n})}}(Ie=Ke||(Ke={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const LR=new ar([4294967295,4294967295],0);function Jp(n){const e=uy().encode(n),t=new ry;return t.update(e),new Uint8Array(t.digest())}function Yp(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ar([t,r],0),new ar([s,i],0)]}class Uh{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Li(`Invalid padding: ${t}`);if(r<0)throw new Li(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Li(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Li(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=ar.fromNumber(this.pe)}we(e,t,r){let s=e.add(t.multiply(ar.fromNumber(r)));return s.compare(LR)===1&&(s=new ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Jp(e),[r,s]=Yp(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.Se(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Uh(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const t=Jp(e),[r,s]=Yp(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Li extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xl{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Uo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Xl(se.min(),s,new Fe(ue),Nt(),pe())}}class Uo{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Uo(r,t,pe(),pe(),pe())}}/**
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
 */class Ba{constructor(e,t,r,s){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=s}}class iv{constructor(e,t){this.targetId=e,this.Ce=t}}class ov{constructor(e,t,r=Ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Xp{constructor(){this.Fe=0,this.Me=Zp(),this.xe=Ge.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=pe(),t=pe(),r=pe();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:X(38017,{changeType:i})}}),new Uo(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Zp()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ne(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class FR{constructor(e){this.ze=e,this.je=new Map,this.He=Nt(),this.Je=ma(),this.Ye=ma(),this.Ze=new Fe(ue)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:X(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,r=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(ml(i))if(r===0){const o=new Q(i.path);this.tt(t,o,je.newNoDocument(o,se.min()))}else ne(r===1,20013,{expectedCount:r});else{const o=this.ut(t);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=Dn(r).toUint8Array()}catch(c){if(c instanceof Py)return uo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Uh(o,s,i)}catch(c){return uo(c instanceof Li?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&ml(l.target)){const c=new Q(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,je.newNoDocument(c,e))}i.Le&&(t.set(o,i.qe()),i.Qe())}});let r=pe();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Xl(e,t,this.Ze,this.He,r);return this.He=Nt(),this.Je=ma(),this.Ye=ma(),this.Ze=new Fe(ue),s}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Xp,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new xe(ue),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new xe(ue),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Xp),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ma(){return new Fe(Q.comparator)}function Zp(){return new Fe(Q.comparator)}const UR={asc:"ASCENDING",desc:"DESCENDING"},BR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$R={and:"AND",or:"OR"};class jR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ku(n,e){return n.useProto3Json||jl(e)?e:{value:e}}function Xs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function av(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qR(n,e){return Xs(n,e.toTimestamp())}function wt(n){return ne(!!n,49232),se.fromTimestamp(function(t){const r=Vn(t);return new Be(r.seconds,r.nanos)}(n))}function Bh(n,e){return Vu(n,e).canonicalString()}function Vu(n,e){const t=function(s){return new Re(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function lv(n){const e=Re.fromString(n);return ne(_v(e),10190,{key:e.toString()}),e}function _l(n,e){return Bh(n.databaseId,e.path)}function Kr(n,e){const t=lv(e);if(t.get(1)!==n.databaseId.projectId)throw new Y(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Y(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(hv(t))}function cv(n,e){return Bh(n.databaseId,e)}function uv(n){const e=lv(n);return e.length===4?Re.emptyPath():hv(e)}function Du(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hv(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function em(n,e,t){return{name:_l(n,e),fields:t.value.mapValue.fields}}function zR(n,e,t){const r=Kr(n,e.name),s=wt(e.updateTime),i=e.createTime?wt(e.createTime):se.min(),o=new pt({mapValue:{fields:e.fields}}),l=je.newFoundDocument(r,s,i,o);return t&&l.setHasCommittedMutations(),t?l.setHasCommittedMutations():l}function KR(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:X(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(ne(d===void 0||typeof d=="string",58123),Ge.fromBase64String(d||"")):(ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ge.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?N.UNKNOWN:sv(u.code);return new Y(d,u.message||"")}(o);t=new ov(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Kr(n,r.document.name),i=wt(r.document.updateTime),o=r.document.createTime?wt(r.document.createTime):se.min(),l=new pt({mapValue:{fields:r.document.fields}}),c=je.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];t=new Ba(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Kr(n,r.document),i=r.readTime?wt(r.readTime):se.min(),o=je.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Ba([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Kr(n,r.document),i=r.removedTargetIds||[];t=new Ba([],i,s,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new OR(s,i),l=r.targetId;t=new iv(l,o)}}return t}function yl(n,e){let t;if(e instanceof ai)t={update:em(n,e.key,e.value)};else if(e instanceof Yl)t={delete:_l(n,e.key)};else if(e instanceof Ln)t={update:em(n,e.key,e.data),updateMask:YR(e.fieldMask)};else{if(!(e instanceof rv))return X(16599,{ft:e.type});t={verify:_l(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof To)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Js)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ys)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wo)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw X(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X(27497)}(n,e.precondition)),t}function Nu(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Tt.updateTime(wt(i.updateTime)):i.exists!==void 0?Tt.exists(i.exists):Tt.none()}(e.currentDocument):Tt.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,l){let c=null;if("setToServerValue"in l)ne(l.setToServerValue==="REQUEST_TIME",16630,{proto:l}),c=new To;else if("appendMissingElements"in l){const d=l.appendMissingElements.values||[];c=new Js(d)}else if("removeAllFromArray"in l){const d=l.removeAllFromArray.values||[];c=new Ys(d)}else"increment"in l?c=new wo(o,l.increment):X(16584,{proto:l});const u=Ue.fromServerFormat(l.fieldPath);return new xR(u,c)}(n,s)):[];if(e.update){e.update.name;const s=Kr(n,e.update.name),i=new pt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new St(u.map(d=>Ue.fromServerFormat(d)))}(e.updateMask);return new Ln(s,i,o,t,r)}return new ai(s,i,t,r)}if(e.delete){const s=Kr(n,e.delete);return new Yl(s,t)}if(e.verify){const s=Kr(n,e.verify);return new rv(s,t)}return X(1463,{proto:e})}function HR(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?wt(s.updateTime):wt(i);return o.isEqual(se.min())&&(o=wt(i)),new VR(o,s.transformResults||[])}(t,e))):[]}function dv(n,e){return{documents:[cv(n,e.path)]}}function fv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=cv(n,s);const i=function(u){if(u.length!==0)return gv(Ce.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Ts(m.field),direction:WR(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=ku(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:t,parent:s}}function pv(n){let e=uv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ne(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const m=mv(p);return m instanceof Ce&&Dh(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(R){return new pl(ws(R.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,jl(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(p){const m=!!p.before,I=p.values||[];return new Ws(I,m)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const m=!p.before,I=p.values||[];return new Ws(I,m)}(t.endAt)),yR(e,s,o,i,l,"F",c,u)}function GR(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mv(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ws(t.unaryFilter.field);return _e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ws(t.unaryFilter.field);return _e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ws(t.unaryFilter.field);return _e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ws(t.unaryFilter.field);return _e.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(n):n.fieldFilter!==void 0?function(t){return _e.create(ws(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ce.create(t.compositeFilter.filters.map(r=>mv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(t.compositeFilter.op))}(n):X(30097,{filter:n})}function WR(n){return UR[n]}function QR(n){return BR[n]}function JR(n){return $R[n]}function Ts(n){return{fieldPath:n.canonicalString()}}function ws(n){return Ue.fromServerFormat(n.fieldPath)}function gv(n){return n instanceof _e?function(t){if(t.op==="=="){if(Fp(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NAN"}};if(Lp(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fp(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NOT_NAN"}};if(Lp(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(t.field),op:QR(t.op),value:t.value}}}(n):n instanceof Ce?function(t){const r=t.getFilters().map(s=>gv(s));return r.length===1?r[0]:{compositeFilter:{op:JR(t.op),filters:r}}}(n):X(54877,{filter:n})}function YR(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _v(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class bn{constructor(e,t,r,s,i=se.min(),o=se.min(),l=Ge.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yv{constructor(e){this.wt=e}}function XR(n,e){let t;if(e.document)t=zR(n.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=Q.fromSegments(e.noDocument.path),s=ts(e.noDocument.readTime);t=je.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return X(56709);{const r=Q.fromSegments(e.unknownDocument.path),s=ts(e.unknownDocument.version);t=je.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new Be(s[0],s[1]);return se.fromTimestamp(i)}(e.readTime)),t}function tm(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:vl(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:_l(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Xs(i,o.version.toTimestamp()),createTime:Xs(i,o.createTime.toTimestamp())}}(n.wt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:es(e.version)};else{if(!e.isUnknownDocument())return X(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:es(e.version)}}return r}function vl(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function es(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ts(n){const e=new Be(n.seconds,n.nanoseconds);return se.fromTimestamp(e)}function Fr(n,e){const t=(e.baseMutations||[]).map(i=>Nu(n.wt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const l=e.mutations[i+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Nu(n.wt,i)),s=Be.fromMillis(e.localWriteTimeMs);return new Mh(e.batchId,s,t,r)}function Fi(n){const e=ts(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?ts(n.lastLimboFreeSnapshotVersion):se.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){const o=i.documents.length;return ne(o===1,1966,{count:o}),zt(Nh(uv(i.documents[0])))}(n.query):function(i){return zt(pv(i))}(n.query),new bn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ge.fromBase64String(n.resumeToken))}function vv(n,e){const t=es(e.snapshotVersion),r=es(e.lastLimboFreeSnapshotVersion);let s;s=ml(e.target)?dv(n.wt,e.target):fv(n.wt,e.target).gt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Zr(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Iv(n){const e=pv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xu(e,e.limit,"L"):e}function jc(n,e){return new Fh(e.largestBatchId,Nu(n.wt,e.overlayMutation))}function nm(n,e){const t=e.path.lastSegment();return[n,gt(e.path.popLast()),t]}function rm(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:es(r.readTime),documentKey:gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class ZR{getBundleMetadata(e,t){return sm(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:ts(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return sm(e).put(function(s){return{bundleId:s.id,createTime:es(wt(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return im(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:Iv(i.bundledQuery),readTime:ts(i.readTime)}}(r)})}saveNamedQuery(e,t){return im(e).put(function(s){return{name:s.name,readTime:es(wt(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function sm(n){return Ye(n,ql)}function im(n){return Ye(n,zl)}/**
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
 */class Zl{constructor(e,t){this.serializer=e,this.userId=t}static St(e,t){const r=t.uid||"";return new Zl(e,r)}getOverlay(e,t){return Ri(e).get(nm(this.userId,t)).next(r=>r?jc(this.serializer,r):null)}getOverlays(e,t){const r=on();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const l=new Fh(t,o);s.push(this.bt(e,l))}),P.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(gt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Ri(e).X(Tu,l))}),P.waitFor(i)}getOverlaysForCollection(e,t,r){const s=on(),i=gt(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ri(e).J(Tu,o).next(l=>{for(const c of l){const u=jc(this.serializer,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=on();let o;const l=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ri(e).te({index:Ty,range:l},(c,u,d)=>{const p=jc(this.serializer,u);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):d.done()}).next(()=>i)}bt(e,t){return Ri(e).put(function(s,i,o){const[l,c,u]=nm(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:yl(s.wt,o.mutation)}}(this.serializer,this.userId,t))}}function Ri(n){return Ye(n,Kl)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{Dt(e){return Ye(e,Ph)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ge.fromUint8Array(r):Ge.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Ur{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(Le(e.integerValue));else if("doubleValue"in e){const r=Le(e.doubleValue);isNaN(r)?this.Mt(t,13):(this.Mt(t,15),po(r)?t.xt(0):t.xt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Mt(t,20),typeof r=="string"&&(r=Vn(r)),t.Ot(`${r.seconds||""}`),t.xt(r.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(Dn(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Mt(t,45),t.xt(r.latitude||0),t.xt(r.longitude||0)}else"mapValue"in e?Ny(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):Gl(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):X(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const r=e.fields||{};this.Mt(t,55);for(const s of Object.keys(r))this.Nt(s,t),this.Ct(r[s],t)}qt(e,t){var r,s;const i=e.fields||{};this.Mt(t,53);const o=Hs,l=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.Mt(t,15),t.xt(Le(l)),this.Nt(o,t),this.Ct(i[o],t)}$t(e,t){const r=e.values||[];this.Mt(t,50);for(const s of r)this.Ct(s,t)}kt(e,t){this.Mt(t,37),Q.fromName(e).path.forEach(r=>{this.Mt(t,60),this.Kt(r,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}Ur.Wt=new Ur;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=255;function tP(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function om(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=tP(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class nP{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.zt(r.value),r=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Yt()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.zt(r);else if(r<2048)this.zt(960|r>>>6),this.zt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|r>>>12),this.zt(128|63&r>>>6),this.zt(128|63&r);else{const s=t.codePointAt(0);this.zt(240|s>>>18),this.zt(128|63&s>>>12),this.zt(128|63&s>>>6),this.zt(128|63&s)}}this.jt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Yt()}en(e){const t=this.tn(e),r=om(t);this.nn(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}rn(e){const t=this.tn(e),r=om(t);this.nn(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}sn(){this._n(ps),this._n(255)}an(){this.un(ps),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===ps?(this._n(ps),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===ps?(this.un(ps),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class rP{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class sP{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class Pi{constructor(){this.ln=new nP,this.hn=new rP(this.ln),this.Pn=new sP(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
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
 */class Br{constructor(e,t,r,s){this.In=e,this.En=t,this.dn=r,this.An=s}Rn(){const e=this.An.length,t=e===0||this.An[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.An,0),t!==e?r.set([0],this.An.length):++r[r.length-1],new Br(this.In,this.En,this.dn,r)}Vn(e,t,r){return{indexId:this.In,uid:e,arrayValue:$a(this.dn),directionalValue:$a(this.An),orderedDocumentKey:$a(t),documentKey:r.path.toArray()}}mn(e,t,r){const s=this.Vn(e,t,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function zn(n,e){let t=n.In-e.In;return t!==0?t:(t=am(n.dn,e.dn),t!==0?t:(t=am(n.An,e.An),t!==0?t:Q.comparator(n.En,e.En)))}function am(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function $a(n){return p_()?function(t){let r="";for(let s=0;s<t.length;s++)r+=String.fromCharCode(t[s]);return r}(n):n}function lm(n){return typeof n!="string"?n:function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(n)}class cm{constructor(e){this.fn=new xe((t,r)=>Ue.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.gn=e.orderBy,this.pn=[];for(const t of e.filters){const r=t;r.isInequality()?this.fn=this.fn.add(r):this.pn.push(r)}}get yn(){return this.fn.size>1}wn(e){if(ne(e.collectionGroup===this.collectionId,49279),this.yn)return!1;const t=vu(e);if(t!==void 0&&!this.Sn(t))return!1;const r=Nr(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.Sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.fn.size>0){const l=this.fn.getIterator().getNext();if(!s.has(l.field.canonicalString())){const c=r[i];if(!this.bn(l,c)||!this.Dn(this.gn[o++],c))return!1}++i}for(;i<r.length;++i){const l=r[i];if(o>=this.gn.length||!this.Dn(this.gn[o++],l))return!1}return!0}vn(){if(this.yn)return null;let e=new xe(Ue.comparator);const t=[];for(const r of this.pn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Da(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Da(r.field,0))}for(const r of this.gn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Da(r.field,r.dir==="asc"?0:1)));return new cl(cl.UNKNOWN_ID,this.collectionId,t,fo.empty())}Sn(e){for(const t of this.pn)if(this.bn(t,e))return!0;return!1}bn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Dn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Ev(n){var e,t;if(ne(n instanceof _e||n instanceof Ce,20012),n instanceof _e){if(n instanceof qy){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>_e.create(n.field,"==",i)))||[];return Ce.create(s,"or")}return n}const r=n.filters.map(s=>Ev(s));return Ce.create(r,n.op)}function iP(n){if(n.getFilters().length===0)return[];const e=Lu(Ev(n));return ne(Tv(e),7391),Ou(e)||Mu(e)?[e]:e.getFilters()}function Ou(n){return n instanceof _e}function Mu(n){return n instanceof Ce&&Dh(n)}function Tv(n){return Ou(n)||Mu(n)||function(t){if(t instanceof Ce&&Su(t)){for(const r of t.getFilters())if(!Ou(r)&&!Mu(r))return!1;return!0}return!1}(n)}function Lu(n){if(ne(n instanceof _e||n instanceof Ce,34018),n instanceof _e)return n;if(n.filters.length===1)return Lu(n.filters[0]);const e=n.filters.map(r=>Lu(r));let t=Ce.create(e,n.op);return t=Il(t),Tv(t)?t:(ne(t instanceof Ce,64498),ne(Qs(t),40251),ne(t.filters.length>1,57927),t.filters.reduce((r,s)=>$h(r,s)))}function $h(n,e){let t;return ne(n instanceof _e||n instanceof Ce,38388),ne(e instanceof _e||e instanceof Ce,25473),t=n instanceof _e?e instanceof _e?function(s,i){return Ce.create([s,i],"and")}(n,e):um(n,e):e instanceof _e?um(e,n):function(s,i){if(ne(s.filters.length>0&&i.filters.length>0,48005),Qs(s)&&Qs(i))return By(s,i.getFilters());const o=Su(s)?s:i,l=Su(s)?i:s,c=o.filters.map(u=>$h(u,l));return Ce.create(c,"or")}(n,e),Il(t)}function um(n,e){if(Qs(e))return By(e,n.getFilters());{const t=e.filters.map(r=>$h(n,r));return Ce.create(t,"or")}}function Il(n){if(ne(n instanceof _e||n instanceof Ce,11850),n instanceof _e)return n;const e=n.getFilters();if(e.length===1)return Il(e[0]);if(Fy(n))return n;const t=e.map(s=>Il(s)),r=[];return t.forEach(s=>{s instanceof _e?r.push(s):s instanceof Ce&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Ce.create(r,n.op)}/**
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
 */class oP{constructor(){this.Cn=new jh}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Mt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Mt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class jh{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new xe(Re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xe(Re.comparator)).toArray()}}/**
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
 */const hm="IndexedDbIndexManager",ga=new Uint8Array(0);class aP{constructor(e,t){this.databaseId=t,this.Fn=new jh,this.Mn=new Mn(r=>Zr(r),(r,s)=>Mo(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Fn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.Fn.add(t)});const i={collectionId:r,parent:gt(s)};return dm(e).put(i)}return P.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[dy(t),""],!1,!0);return dm(e).J(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(sn(o.parent))}return r})}addFieldIndex(e,t){const r=Ci(e),s=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=gs(e);return i.next(l=>{o.put(rm(l,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Ci(e),s=gs(e),i=ms(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ci(e),r=ms(e),s=gs(e);return t.X().next(()=>r.X()).next(()=>s.X())}createTargetIndexes(e,t){return P.forEach(this.xn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new cm(r).vn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=ms(e);let s=!0;const i=new Map;return P.forEach(this.xn(t),o=>this.On(e,o).next(l=>{s&&(s=!!l),i.set(o,l)})).next(()=>{if(s){let o=pe();const l=[];return P.forEach(i,(c,u)=>{U(hm,`Using index ${function(q){return`id=${q.indexId}|cg=${q.collectionGroup}|f=${q.fields.map($=>`${$.fieldPath}:${$.kind}`).join(",")}`}(c)} to execute ${Zr(t)}`);const d=function(q,$){const Z=vu($);if(Z===void 0)return null;for(const ee of gl(q,Z.fieldPath))switch(ee.op){case"array-contains-any":return ee.value.arrayValue.values||[];case"array-contains":return[ee.value]}return null}(u,c),p=function(q,$){const Z=new Map;for(const ee of Nr($))for(const b of gl(q,ee.fieldPath))switch(b.op){case"==":case"in":Z.set(ee.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return Z.set(ee.fieldPath.canonicalString(),b.value),Array.from(Z.values())}return null}(u,c),m=function(q,$){const Z=[];let ee=!0;for(const b of Nr($)){const y=b.kind===0?qp(q,b.fieldPath,q.startAt):zp(q,b.fieldPath,q.startAt);Z.push(y.value),ee&&(ee=y.inclusive)}return new Ws(Z,ee)}(u,c),I=function(q,$){const Z=[];let ee=!0;for(const b of Nr($)){const y=b.kind===0?zp(q,b.fieldPath,q.endAt):qp(q,b.fieldPath,q.endAt);Z.push(y.value),ee&&(ee=y.inclusive)}return new Ws(Z,ee)}(u,c),R=this.Nn(c,u,m),k=this.Nn(c,u,I),x=this.Bn(c,u,p),B=this.Ln(c.indexId,d,R,m.inclusive,k,I.inclusive,x);return P.forEach(B,z=>r.Z(z,t.limit).next(q=>{q.forEach($=>{const Z=Q.fromSegments($.documentKey);o.has(Z)||(o=o.add(Z),l.push(Z))})}))}).next(()=>l)}return P.resolve(null)})}xn(e){let t=this.Mn.get(e);return t||(e.filters.length===0?t=[e]:t=iP(Ce.create(e.filters,"and")).map(r=>Pu(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Mn.set(e,t),t)}Ln(e,t,r,s,i,o,l){const c=(t!=null?t.length:1)*Math.max(r.length,i.length),u=c/(t!=null?t.length:1),d=[];for(let p=0;p<c;++p){const m=t?this.kn(t[p/u]):ga,I=this.qn(e,m,r[p%u],s),R=this.Qn(e,m,i[p%u],o),k=l.map(x=>this.qn(e,m,x,!0));d.push(...this.createRange(I,R,k))}return d}qn(e,t,r,s){const i=new Br(e,Q.empty(),t,r);return s?i:i.Rn()}Qn(e,t,r,s){const i=new Br(e,Q.empty(),t,r);return s?i.Rn():i}On(e,t){const r=new cm(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const l of i)r.wn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,t){let r=2;const s=this.xn(t);return P.forEach(s,i=>this.On(e,i).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new xe(Ue.comparator),d=!1;for(const p of c.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:u=u.add(m.field));for(const p of c.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(d?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}$n(e,t){const r=new Pi;for(const s of Nr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Tn(s.kind);Ur.Wt.vt(i,o)}return r.cn()}kn(e){const t=new Pi;return Ur.Wt.vt(e,t.Tn(0)),t.cn()}Un(e,t){const r=new Pi;return Ur.Wt.vt(Io(this.databaseId,t),r.Tn(function(i){const o=Nr(i);return o.length===0?0:o[o.length-1].kind}(e))),r.cn()}Bn(e,t,r){if(r===null)return[];let s=[];s.push(new Pi);let i=0;for(const o of Nr(e)){const l=r[i++];for(const c of s)if(this.Kn(t,o.fieldPath)&&Eo(l))s=this.Wn(s,o,l);else{const u=c.Tn(o.kind);Ur.Wt.vt(l,u)}}return this.Gn(s)}Nn(e,t,r){return this.Bn(e,t,r.position)}Gn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].cn();return t}Wn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const l of s){const c=new Pi;c.seed(l.cn()),Ur.Wt.vt(o,c.Tn(t.kind)),i.push(c)}return i}Kn(e,t){return!!e.filters.find(r=>r instanceof _e&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ci(e),s=gs(e);return(t?r.J(Eu,IDBKeyRange.bound(t,t)):r.J()).next(i=>{const o=[];return P.forEach(i,l=>s.get([l.indexId,this.uid]).next(c=>{o.push(function(d,p){const m=p?new fo(p.sequenceNumber,new Mt(ts(p.readTime),new Q(sn(p.documentKey)),p.largestBatchId)):fo.empty(),I=d.fields.map(([R,k])=>new Da(Ue.fromServerFormat(R),k));return new cl(d.indexId,d.collectionGroup,I,m)}(l,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:ue(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Ci(e),i=gs(e);return this.zn(e).next(o=>s.J(Eu,IDBKeyRange.bound(t,t)).next(l=>P.forEach(l,c=>i.put(rm(c.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return P.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(l=>(r.set(s.collectionGroup,l),P.forEach(l,c=>this.jn(e,s,c).next(u=>{const d=this.Hn(i,c);return u.isEqual(d)?P.resolve():this.Jn(e,i,c,u,d)}))))})}Yn(e,t,r,s){return ms(e).put(s.Vn(this.uid,this.Un(r,t.key),t.key))}Zn(e,t,r,s){return ms(e).delete(s.mn(this.uid,this.Un(r,t.key),t.key))}jn(e,t,r){const s=ms(e);let i=new xe(zn);return s.te({index:Ey,range:IDBKeyRange.only([r.indexId,this.uid,$a(this.Un(r,t))])},(o,l)=>{i=i.add(new Br(r.indexId,t,lm(l.arrayValue),lm(l.directionalValue)))}).next(()=>i)}Hn(e,t){let r=new xe(zn);const s=this.$n(t,e);if(s==null)return r;const i=vu(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Eo(o))for(const l of o.arrayValue.values||[])r=r.add(new Br(t.indexId,e.key,this.kn(l),s))}else r=r.add(new Br(t.indexId,e.key,ga,s));return r}Jn(e,t,r,s,i){U(hm,"Updating index entries for document '%s'",t.key);const o=[];return function(c,u,d,p,m){const I=c.getIterator(),R=u.getIterator();let k=fs(I),x=fs(R);for(;k||x;){let B=!1,z=!1;if(k&&x){const q=d(k,x);q<0?z=!0:q>0&&(B=!0)}else k!=null?z=!0:B=!0;B?(p(x),x=fs(R)):z?(m(k),k=fs(I)):(k=fs(I),x=fs(R))}}(s,i,zn,l=>{o.push(this.Yn(e,t,r,l))},l=>{o.push(this.Zn(e,t,r,l))}),P.waitFor(o)}zn(e){let t=1;return gs(e).te({index:Iy,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,l)=>zn(o,l)).filter((o,l,c)=>!l||zn(o,c[l-1])!==0);const s=[];s.push(e);for(const o of r){const l=zn(o,e),c=zn(o,t);if(l===0)s[0]=e.Rn();else if(l>0&&c<0)s.push(o),s.push(o.Rn());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Xn(s[o],s[o+1]))return[];const l=s[o].mn(this.uid,ga,Q.empty()),c=s[o+1].mn(this.uid,ga,Q.empty());i.push(IDBKeyRange.bound(l,c))}return i}Xn(e,t){return zn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(fm)}getMinOffset(e,t){return P.mapArray(this.xn(t),r=>this.On(e,r).next(s=>s||X(44426))).next(fm)}}function dm(n){return Ye(n,_o)}function ms(n){return Ye(n,Ji)}function Ci(n){return Ye(n,Rh)}function gs(n){return Ye(n,Qi)}function fm(n){ne(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;bh(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Mt(e.readTime,e.documentKey,t)}/**
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
 */const pm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wv=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function bv(n,e,t){const r=n.store(Gt),s=n.store(js),i=[],o=IDBKeyRange.only(t.batchId);let l=0;const c=r.te({range:o},(d,p,m)=>(l++,m.delete()));i.push(c.next(()=>{ne(l===1,47070,{batchId:t.batchId})}));const u=[];for(const d of t.mutations){const p=_y(e,d.key.path,t.batchId);i.push(s.delete(p)),u.push(d.key)}return P.waitFor(i).next(()=>u)}function El(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw X(14731);e=n.noDocument}return JSON.stringify(e).length}/**
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
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(wv,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);class ec{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.er={}}static St(e,t,r,s){ne(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new ec(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Kn(e).te({index:$r,range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=bs(e),o=Kn(e);return o.add({}).next(l=>{ne(typeof l=="number",49019);const c=new Mh(l,t,r,s),u=function(I,R,k){const x=k.baseMutations.map(z=>yl(I.wt,z)),B=k.mutations.map(z=>yl(I.wt,z));return{userId:R,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:x,mutations:B}}(this.serializer,this.userId,c),d=[];let p=new xe((m,I)=>ue(m.canonicalString(),I.canonicalString()));for(const m of s){const I=_y(this.userId,m.key.path,l);p=p.add(m.key.path.popLast()),d.push(o.put(u)),d.push(i.put(I,MS))}return p.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.er[l]=c.keys()}),P.waitFor(d).next(()=>c)})}lookupMutationBatch(e,t){return Kn(e).get(t).next(r=>r?(ne(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),Fr(this.serializer,r)):null)}tr(e,t){return this.er[t]?P.resolve(this.er[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.er[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Kn(e).te({index:$r,range:s},(o,l,c)=>{l.userId===this.userId&&(ne(l.batchId>=r,47524,{nr:r}),i=Fr(this.serializer,l)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=qr;return Kn(e).te({index:$r,range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,qr],[this.userId,Number.POSITIVE_INFINITY]);return Kn(e).J($r,t).next(r=>r.map(s=>Fr(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Na(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return bs(e).te({range:s},(o,l,c)=>{const[u,d,p]=o,m=sn(d);if(u===this.userId&&t.path.isEqual(m))return Kn(e).get(p).next(I=>{if(!I)throw X(61480,{rr:o,batchId:p});ne(I.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:I.userId,batchId:p}),i.push(Fr(this.serializer,I))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(ue);const s=[];return t.forEach(i=>{const o=Na(this.userId,i.path),l=IDBKeyRange.lowerBound(o),c=bs(e).te({range:l},(u,d,p)=>{const[m,I,R]=u,k=sn(I);m===this.userId&&i.path.isEqual(k)?r=r.add(R):p.done()});s.push(c)}),P.waitFor(s).next(()=>this.ir(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Na(this.userId,r),o=IDBKeyRange.lowerBound(i);let l=new xe(ue);return bs(e).te({range:o},(c,u,d)=>{const[p,m,I]=c,R=sn(m);p===this.userId&&r.isPrefixOf(R)?R.length===s&&(l=l.add(I)):d.done()}).next(()=>this.ir(e,l))}ir(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Kn(e).get(i).next(o=>{if(o===null)throw X(35274,{batchId:i});ne(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(Fr(this.serializer,o))}))}),P.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return bv(e.he,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.sr(t.batchId)}),P.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}sr(e){delete this.er[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return P.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return bs(e).te({range:r},(i,o,l)=>{if(i[0]===this.userId){const c=sn(i[1]);s.push(c)}else l.done()}).next(()=>{ne(s.length===0,56720,{_r:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return Av(e,this.userId,t)}ar(e){return Sv(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:qr,lastStreamToken:""})}}function Av(n,e,t){const r=Na(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return bs(n).te({range:i,ee:!0},(l,c,u)=>{const[d,p,m]=l;d===e&&p===s&&(o=!0),u.done()}).next(()=>o)}function Kn(n){return Ye(n,Gt)}function bs(n){return Ye(n,js)}function Sv(n){return Ye(n,mo)}/**
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
 */class ns{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ns(0)}static lr(){return new ns(-1)}}/**
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
 */class lP{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.hr(e).next(t=>{const r=new ns(t.highestTargetId);return t.highestTargetId=r.next(),this.Pr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.hr(e).next(t=>se.fromTimestamp(new Be(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.hr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.hr(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Pr(e,s)))}addTargetData(e,t){return this.Tr(e,t).next(()=>this.hr(e).next(r=>(r.targetCount+=1,this.Ir(t,r),this.Pr(e,r))))}updateTargetData(e,t){return this.Tr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>_s(e).delete(t.targetId)).next(()=>this.hr(e)).next(r=>(ne(r.targetCount>0,8065),r.targetCount-=1,this.Pr(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return _s(e).te((o,l)=>{const c=Fi(l);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>P.waitFor(i)).next(()=>s)}forEachTarget(e,t){return _s(e).te((r,s)=>{const i=Fi(s);t(i)})}hr(e){return mm(e).get(dl).next(t=>(ne(t!==null,2888),t))}Pr(e,t){return mm(e).put(dl,t)}Tr(e,t){return _s(e).put(vv(this.serializer,t))}Ir(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.hr(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Zr(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return _s(e).te({range:s,index:vy},(o,l,c)=>{const u=Fi(l);Mo(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=tr(e);return t.forEach(o=>{const l=gt(o.path);s.push(i.put({targetId:r,path:l})),s.push(this.referenceDelegate.addReference(e,r,o))}),P.waitFor(s)}removeMatchingKeys(e,t,r){const s=tr(e);return P.forEach(t,i=>{const o=gt(i.path);return P.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=tr(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=tr(e);let i=pe();return s.te({range:r,ee:!0},(o,l,c)=>{const u=sn(o[1]),d=new Q(u);i=i.add(d)}).next(()=>i)}containsKey(e,t){const r=gt(t.path),s=IDBKeyRange.bound([r],[dy(r)],!1,!0);let i=0;return tr(e).te({index:Sh,ee:!0,range:s},([o,l],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}Rt(e,t){return _s(e).get(t).next(r=>r?Fi(r):null)}}function _s(n){return Ye(n,qs)}function mm(n){return Ye(n,zr)}function tr(n){return Ye(n,zs)}/**
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
 */const gm="LruGarbageCollector",Rv=1048576;function _m([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class cP{constructor(e){this.Er=e,this.buffer=new xe(_m),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();_m(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Pv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){U(gm,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){vr(t)?U(gm,"Ignoring IndexedDB error during garbage collection: ",t):await ss(t)}await this.mr(3e5)})}}class uP{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(jt.le);const r=new cP(t);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(pm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pm):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Is()<=ge.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Cv(n,e){return new uP(n,e)}/**
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
 */class hP{constructor(e,t){this.db=e,this.garbageCollector=Cv(this,t)}pr(e){const t=this.Sr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}yr(e,t){return this.br(e,(r,s)=>t(s))}addReference(e,t,r){return _a(e,r)}removeReference(e,t,r){return _a(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return _a(e,t)}Dr(e,t){return function(s,i){let o=!1;return Sv(s).ne(l=>Av(s,l,i).next(c=>(c&&(o=!0),P.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.br(e,(o,l)=>{if(l<=t){const c=this.Dr(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,se.min()),tr(e).delete(function(p){return[0,gt(p.path)]}(o))))});s.push(c)}}).next(()=>P.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return _a(e,t)}br(e,t){const r=tr(e);let s,i=jt.le;return r.te({index:Sh},([o,l],{path:c,sequenceNumber:u})=>{o===0?(i!==jt.le&&t(new Q(sn(s)),i),i=u,s=c):i=jt.le}).next(()=>{i!==jt.le&&t(new Q(sn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function _a(n,e){return tr(n).put(function(r,s){return{targetId:0,path:gt(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class xv{constructor(){this.changes=new Mn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class dP{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return kr(e).put(r)}removeEntry(e,t,r){return kr(e).delete(function(i,o){const l=i.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],vl(o),l[l.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.vr(e,r)))}getEntry(e,t){let r=je.newInvalidDocument(t);return kr(e).te({index:Oa,range:IDBKeyRange.only(xi(t))},(s,i)=>{r=this.Cr(t,i)}).next(()=>r)}Fr(e,t){let r={size:0,document:je.newInvalidDocument(t)};return kr(e).te({index:Oa,range:IDBKeyRange.only(xi(t))},(s,i)=>{r={document:this.Cr(t,i),size:El(i)}}).next(()=>r)}getEntries(e,t){let r=Nt();return this.Mr(e,t,(s,i)=>{const o=this.Cr(s,i);r=r.insert(s,o)}).next(()=>r)}Or(e,t){let r=Nt(),s=new Fe(Q.comparator);return this.Mr(e,t,(i,o)=>{const l=this.Cr(i,o);r=r.insert(i,l),s=s.insert(i,El(o))}).next(()=>({documents:r,Nr:s}))}Mr(e,t,r){if(t.isEmpty())return P.resolve();let s=new xe(Im);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(xi(s.first()),xi(s.last())),o=s.getIterator();let l=o.getNext();return kr(e).te({index:Oa,range:i},(c,u,d)=>{const p=Q.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;l&&Im(l,p)<0;)r(l,null),l=o.getNext();l&&l.isEqual(p)&&(r(l,u),l=o.hasNext()?o.getNext():null),l?d.H(xi(l)):d.done()}).next(()=>{for(;l;)r(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,l=[o.popLast().toArray(),o.lastSegment(),vl(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return kr(e).J(IDBKeyRange.bound(l,c,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let d=Nt();for(const p of u){const m=this.Cr(Q.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(Fo(t,m)||s.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,t,r,s){let i=Nt();const o=vm(t,r),l=vm(t,Mt.max());return kr(e).te({index:yy,range:IDBKeyRange.bound(o,l,!0)},(c,u,d)=>{const p=this.Cr(Q.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(p.key,p),i.size===s&&d.done()}).next(()=>i)}newChangeBuffer(e){return new fP(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return ym(e).get(Iu).next(t=>(ne(!!t,20021),t))}vr(e,t){return ym(e).put(Iu,t)}Cr(e,t){if(t){const r=XR(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(se.min())))return r}return je.newInvalidDocument(e)}}function kv(n){return new dP(n)}class fP extends xv{constructor(e,t){super(),this.Br=e,this.trackRemovals=t,this.Lr=new Mn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new xe((i,o)=>ue(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const l=this.Lr.get(i);if(t.push(this.Br.removeEntry(e,i,l.readTime)),o.isValidDocument()){const c=tm(this.Br.serializer,o);s=s.add(i.path.popLast());const u=El(c);r+=u-l.size,t.push(this.Br.addEntry(e,i,c))}else if(r-=l.size,this.trackRemovals){const c=tm(this.Br.serializer,o.convertToNoDocument(se.min()));t.push(this.Br.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.Br.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Br.updateMetadata(e,r)),P.waitFor(t)}getFromCache(e,t){return this.Br.Fr(e,t).next(r=>(this.Lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Br.Or(e,t).next(({documents:r,Nr:s})=>(s.forEach((i,o)=>{this.Lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function ym(n){return Ye(n,go)}function kr(n){return Ye(n,hl)}function xi(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function vm(n,e){const t=e.documentKey.path.toArray();return[n,vl(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Im(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=ue(t[i],r[i]),s)return s;return s=ue(t.length,r.length),s||(s=ue(t[t.length-2],r[r.length-2]),s||ue(t[t.length-1],r[r.length-1]))}/**
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
 */class pP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Vv{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&eo(r.mutation,s,St.empty(),Be.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=pe()){const s=on();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Mi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=on();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,pe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=Nt();const o=Zi(),l=function(){return Zi()}();return t.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Ln)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),eo(d.mutation,u,d.mutation.getFieldMask(),Be.now())):o.set(u.key,St.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var p;return l.set(u,new pP(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Zi();let s=new Fe((o,l)=>o-l),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=r.get(c)||St.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||pe()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=Qy();d.forEach(m=>{if(!i.has(m)){const I=tv(t.get(m),r.get(m));I!==null&&p.set(m,I),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(on());let l=ho,c=i;return o.next(u=>P.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?P.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,pe())).next(d=>({batchId:l,changes:Wy(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(r=>{let s=Mi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Mi();return this.indexManager.getCollectionParents(e,i).next(l=>P.forEach(l,c=>{const u=function(p,m){return new Lo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,je.newInvalidDocument(d)))});let l=Mi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&eo(d.mutation,u,St.empty(),Be.now()),Fo(t,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class mP{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return P.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:wt(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(s){return{name:s.name,query:Iv(s.bundledQuery),readTime:wt(s.readTime)}}(t)),P.resolve()}}/**
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
 */class gP{constructor(){this.overlays=new Fe(Q.comparator),this.Qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=on();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.bt(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=on(),i=t.length+1,o=new Q(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Fe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=on(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=on(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return P.resolve(l)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Fh(t,r));let i=this.Qr.get(t);i===void 0&&(i=pe(),this.Qr.set(t,i)),this.Qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class qh{constructor(){this.$r=new xe(Xe.Ur),this.Kr=new xe(Xe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new Xe(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new Xe(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new Q(new Re([])),r=new Xe(t,e),s=new Xe(t,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new Q(new Re([])),r=new Xe(t,e),s=new Xe(t,e+1);let i=pe();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Xe(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return Q.comparator(e.key,t.key)||ue(e.Zr,t.Zr)}static Wr(e,t){return ue(e.Zr,t.Zr)||Q.comparator(e.key,t.key)}}/**
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
 */class yP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new xe(Xe.Ur)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Mh(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ti(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?qr:this.nr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xe(t,0),s=new Xe(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(ue);return t.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),P.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new Q(i),0);let l=new xe(ue);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},o),P.resolve(this.ni(l))}ni(e){const t=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ne(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return P.forEach(t.mutations,s=>{const i=new Xe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new Xe(t,0),s=this.Xr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class vP{constructor(e){this.ii=e,this.docs=function(){return new Fe(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let r=Nt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():je.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Nt();const o=t.path,l=new Q(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||bh(fy(d),r)<=0||(s.has(d.key)||Fo(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){X(9500)}si(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new IP(this)}getSize(e){return P.resolve(this.size)}}class IP extends xv{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class EP{constructor(e){this.persistence=e,this.oi=new Mn(t=>Zr(t),Mo),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this._i=0,this.ai=new qh,this.targetCount=0,this.ui=ns.cr()}forEachTarget(e,t){return this.oi.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),P.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ns(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Tr(t),P.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.ai.containsKey(t))}}/**
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
 */class zh{constructor(e,t){this.ci={},this.overlays={},this.li=new jt(0),this.hi=!1,this.hi=!0,this.Pi=new _P,this.referenceDelegate=e(this),this.Ti=new EP(this),this.indexManager=new oP,this.remoteDocumentCache=function(s){return new vP(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new yv(t),this.Ei=new mP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new yP(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const s=new TP(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,t){return P.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class TP extends my{constructor(e){super(),this.currentSequenceNumber=e}}class tc{constructor(e){this.persistence=e,this.Vi=new qh,this.mi=null}static fi(e){return new tc(e)}get gi(){if(this.mi)return this.mi;throw X(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.gi,r=>{const s=Q.fromPath(r);return this.pi(e,s).next(i=>{i||t.removeEntry(s,se.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return P.or([()=>P.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Tl{constructor(e,t){this.persistence=e,this.yi=new Mn(r=>gt(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Cv(this,t)}static fi(e,t){return new Tl(e,t)}di(){}Ai(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return P.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,t).next(l=>{l||(r++,i.removeEntry(o,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),P.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=La(e.data.value)),t}Dr(e,t,r){return P.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.yi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class wP{constructor(e){this.serializer=e}q(e,t,r,s){const i=new $l("createOrUpgrade",t);r<1&&s>=1&&(function(c){c.createObjectStore(Oo)}(e),function(c){c.createObjectStore(mo,{keyPath:OS}),c.createObjectStore(Gt,{keyPath:kp,autoIncrement:!0}).createIndex($r,Vp,{unique:!0}),c.createObjectStore(js)}(e),Em(e),function(c){c.createObjectStore(Or)}(e));let o=P.resolve();return r<3&&s>=3&&(r!==0&&(function(c){c.deleteObjectStore(zs),c.deleteObjectStore(qs),c.deleteObjectStore(zr)}(e),Em(e)),o=o.next(()=>function(c){const u=c.store(zr),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:se.min().toTimestamp(),targetCount:0};return u.put(dl,d)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store(Gt).J().next(p=>{c.deleteObjectStore(Gt),c.createObjectStore(Gt,{keyPath:kp,autoIncrement:!0}).createIndex($r,Vp,{unique:!0});const m=u.store(Gt),I=p.map(R=>m.put(R));return P.waitFor(I)})}(e,i))),o=o.next(()=>{(function(c){c.createObjectStore(Ks,{keyPath:zS})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.wi(i))),r<6&&s>=6&&(o=o.next(()=>(function(c){c.createObjectStore(go)}(e),this.Si(i)))),r<7&&s>=7&&(o=o.next(()=>this.bi(i))),r<8&&s>=8&&(o=o.next(()=>this.Di(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.Ci(i))),r<11&&s>=11&&(o=o.next(()=>{(function(c){c.createObjectStore(ql,{keyPath:KS})})(e),function(c){c.createObjectStore(zl,{keyPath:HS})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore(Kl,{keyPath:ZS});u.createIndex(Tu,eR,{unique:!1}),u.createIndex(Ty,tR,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore(hl,{keyPath:LS});u.createIndex(Oa,FS),u.createIndex(yy,US)}(e)).next(()=>this.Fi(e,i)).next(()=>e.deleteObjectStore(Or))),r<14&&s>=14&&(o=o.next(()=>this.Mi(e,i))),r<15&&s>=15&&(o=o.next(()=>function(c){c.createObjectStore(Rh,{keyPath:GS,autoIncrement:!0}).createIndex(Eu,WS,{unique:!1}),c.createObjectStore(Qi,{keyPath:QS}).createIndex(Iy,JS,{unique:!1}),c.createObjectStore(Ji,{keyPath:YS}).createIndex(Ey,XS,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore(Qi).clear()}).next(()=>{t.objectStore(Ji).clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(c){c.createObjectStore(Ph,{keyPath:nR})})(e)})),r<18&&s>=18&&p_()&&(o=o.next(()=>{t.objectStore(Qi).clear()}).next(()=>{t.objectStore(Ji).clear()})),o}Si(e){let t=0;return e.store(Or).te((r,s)=>{t+=El(s)}).next(()=>{const r={byteSize:t};return e.store(go).put(Iu,r)})}wi(e){const t=e.store(mo),r=e.store(Gt);return t.J().next(s=>P.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,qr],[i.userId,i.lastAcknowledgedBatchId]);return r.J($r,o).next(l=>P.forEach(l,c=>{ne(c.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const u=Fr(this.serializer,c);return bv(e,i.userId,u).next(()=>{})}))}))}bi(e){const t=e.store(zs),r=e.store(Or);return e.store(zr).get(dl).next(s=>{const i=[];return r.te((o,l)=>{const c=new Re(o),u=function(p){return[0,gt(p)]}(c);i.push(t.get(u).next(d=>d?P.resolve():(p=>t.put({targetId:0,path:gt(p),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>P.waitFor(i))})}Di(e,t){e.createObjectStore(_o,{keyPath:qS});const r=t.store(_o),s=new jh,i=o=>{if(s.add(o)){const l=o.lastSegment(),c=o.popLast();return r.put({collectionId:l,parent:gt(c)})}};return t.store(Or).te({ee:!0},(o,l)=>{const c=new Re(o);return i(c.popLast())}).next(()=>t.store(js).te({ee:!0},([o,l,c],u)=>{const d=sn(l);return i(d.popLast())}))}Ci(e){const t=e.store(qs);return t.te((r,s)=>{const i=Fi(s),o=vv(this.serializer,i);return t.put(o)})}Fi(e,t){const r=t.store(Or),s=[];return r.te((i,o)=>{const l=t.store(hl),c=function(p){return p.document?new Q(Re.fromString(p.document.name).popFirst(5)):p.noDocument?Q.fromSegments(p.noDocument.path):p.unknownDocument?Q.fromSegments(p.unknownDocument.path):X(36783)}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(l.put(u))}).next(()=>P.waitFor(s))}Mi(e,t){const r=t.store(Gt),s=kv(this.serializer),i=new zh(tc.fi,this.serializer.wt);return r.J().next(o=>{const l=new Map;return o.forEach(c=>{var u;let d=(u=l.get(c.userId))!==null&&u!==void 0?u:pe();Fr(this.serializer,c).keys().forEach(p=>d=d.add(p)),l.set(c.userId,d)}),P.forEach(l,(c,u)=>{const d=new vt(u),p=Zl.St(this.serializer,d),m=i.getIndexManager(d),I=ec.St(d,this.serializer,m,i.referenceDelegate);return new Vv(s,I,p,m).recalculateAndSaveOverlaysForDocumentKeys(new wu(t,jt.le),c).next()})})}}function Em(n){n.createObjectStore(zs,{keyPath:$S}).createIndex(Sh,jS,{unique:!0}),n.createObjectStore(qs,{keyPath:"targetId"}).createIndex(vy,BS,{unique:!0}),n.createObjectStore(zr)}const Hn="IndexedDbPersistence",qc=18e5,zc=5e3,Kc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",bP="main";class Kh{constructor(e,t,r,s,i,o,l,c,u,d,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.xi=i,this.window=o,this.document=l,this.Oi=u,this.Ni=d,this.Bi=p,this.li=null,this.hi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Li=null,this.inForeground=!1,this.ki=null,this.qi=null,this.Qi=Number.NEGATIVE_INFINITY,this.$i=m=>Promise.resolve(),!Kh.C())throw new Y(N.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new hP(this,s),this.Ui=t+bP,this.serializer=new yv(c),this.Ki=new lr(this.Ui,this.Bi,new wP(this.serializer)),this.Pi=new eP,this.Ti=new lP(this.referenceDelegate,this.serializer),this.remoteDocumentCache=kv(this.serializer),this.Ei=new ZR,this.window&&this.window.localStorage?this.Wi=this.window.localStorage:(this.Wi=null,d===!1&&Et(Hn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Y(N.FAILED_PRECONDITION,Kc);return this.zi(),this.ji(),this.Hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ti.getHighestSequenceNumber(e))}).then(e=>{this.li=new jt(e,this.Oi)}).then(()=>{this.hi=!0}).catch(e=>(this.Ki&&this.Ki.close(),Promise.reject(e)))}Ji(e){return this.$i=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.xi.enqueueAndForget(async()=>{this.started&&await this.Gi()}))}Gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ya(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Yi(e).next(t=>{t||(this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)))})}).next(()=>this.Zi(e)).next(t=>this.isPrimary&&!t?this.Xi(e).next(()=>!1):!!t&&this.es(e).next(()=>!0))).catch(e=>{if(vr(e))return U(Hn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U(Hn,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.xi.enqueueRetryable(()=>this.$i(e)),this.isPrimary=e})}Yi(e){return ki(e).get(ds).next(t=>P.resolve(this.ts(t)))}ns(e){return ya(e).delete(this.clientId)}async rs(){if(this.isPrimary&&!this.ss(this.Qi,qc)){this.Qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Ye(t,Ks);return r.J().next(s=>{const i=this._s(s,qc),o=s.filter(l=>i.indexOf(l)===-1);return P.forEach(o,l=>r.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Wi)for(const t of e)this.Wi.removeItem(this.us(t.clientId))}}Hi(){this.qi=this.xi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Gi().then(()=>this.rs()).then(()=>this.Hi()))}ts(e){return!!e&&e.ownerId===this.clientId}Zi(e){return this.Ni?P.resolve(!0):ki(e).get(ds).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,zc)&&!this.cs(t.ownerId)){if(this.ts(t)&&this.networkEnabled)return!0;if(!this.ts(t)){if(!t.allowTabSynchronization)throw new Y(N.FAILED_PRECONDITION,Kc);return!1}}return!(!this.networkEnabled||!this.inForeground)||ya(e).J().next(r=>this._s(r,zc).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,l=this.networkEnabled===s.networkEnabled;if(i||o&&l)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&U(Hn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.hi=!1,this.ls(),this.qi&&(this.qi.cancel(),this.qi=null),this.hs(),this.Ps(),await this.Ki.runTransaction("shutdown","readwrite",[Oo,Ks],e=>{const t=new wu(e,jt.le);return this.Xi(t).next(()=>this.ns(t))}),this.Ki.close(),this.Ts()}_s(e,t){return e.filter(r=>this.ss(r.updateTimeMs,t)&&!this.cs(r.clientId))}Is(){return this.runTransaction("getActiveClients","readonly",e=>ya(e).J().next(t=>this._s(t,qc).map(r=>r.clientId)))}get started(){return this.hi}getGlobalsCache(){return this.Pi}getMutationQueue(e,t){return ec.St(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new aP(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return Zl.St(this.serializer,e)}getBundleCache(){return this.Ei}runTransaction(e,t,r){U(Hn,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(c){return c===18?iR:c===17?Sy:c===16?sR:c===15?Ch:c===14?Ay:c===13?by:c===12?rR:c===11?wy:void X(60245)}(this.Bi);let o;return this.Ki.runTransaction(e,s,i,l=>(o=new wu(l,this.li?this.li.next():jt.le),t==="readwrite-primary"?this.Yi(o).next(c=>!!c||this.Zi(o)).next(c=>{if(!c)throw Et(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)),new Y(N.FAILED_PRECONDITION,py);return r(o)}).next(c=>this.es(o).next(()=>c)):this.Es(o).next(()=>r(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Es(e){return ki(e).get(ds).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,zc)&&!this.cs(t.ownerId)&&!this.ts(t)&&!(this.Ni||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Y(N.FAILED_PRECONDITION,Kc)})}es(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ki(e).put(ds,t)}static C(){return lr.C()}Xi(e){const t=ki(e);return t.get(ds).next(r=>this.ts(r)?(U(Hn,"Releasing primary lease."),t.delete(ds)):P.resolve())}ss(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Et(`Detected an update time that is in the future: ${e} > ${r}`),!1))}zi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ki=()=>{this.xi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Gi()))},this.document.addEventListener("visibilitychange",this.ki),this.inForeground=this.document.visibilityState==="visible")}hs(){this.ki&&(this.document.removeEventListener("visibilitychange",this.ki),this.ki=null)}ji(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Li=()=>{this.ls();const t=/(?:Version|Mobile)\/1[456]/;f_()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.xi.enterRestrictedMode(!0),this.xi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Li))}Ps(){this.Li&&(this.window.removeEventListener("pagehide",this.Li),this.Li=null)}cs(e){var t;try{const r=((t=this.Wi)===null||t===void 0?void 0:t.getItem(this.us(e)))!==null;return U(Hn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Et(Hn,"Failed to get zombied client id.",r),!1}}ls(){if(this.Wi)try{this.Wi.setItem(this.us(this.clientId),String(Date.now()))}catch(e){Et("Failed to set zombie client id.",e)}}Ts(){if(this.Wi)try{this.Wi.removeItem(this.us(this.clientId))}catch{}}us(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ki(n){return Ye(n,Oo)}function ya(n){return Ye(n,Ks)}function AP(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Hh{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ds=r,this.As=s}static Rs(e,t){let r=pe(),s=pe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hh(e,t.fromCache,r,s)}}/**
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
 */class SP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Dv{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return f_()?8:gy(Je())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ws(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ss(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new SP;return this.bs(e,t,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,t,o,l.size)})}).next(()=>i.result)}Ds(e,t,r,s){return r.documentReadCount<this.gs?(Is()<=ge.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Es(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),P.resolve()):(Is()<=ge.DEBUG&&U("QueryEngine","Query:",Es(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Is()<=ge.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Es(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zt(t))):P.resolve())}ws(e,t){if(Kp(t))return P.resolve(null);let r=zt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=xu(t,null,"F"),r=zt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=pe(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(t,l);return this.Cs(t,u,o,c.readTime)?this.ws(e,xu(t,null,"F")):this.Fs(e,u,t,c)}))})))}Ss(e,t,r,s){return Kp(t)||s.isEqual(se.min())?P.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(t,i);return this.Cs(t,o,r,s)?P.resolve(null):(Is()<=ge.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Es(t)),this.Fs(e,o,t,PS(s,ho)).next(l=>l))})}vs(e,t){let r=new xe(Hy(e));return t.forEach((s,i)=>{Fo(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,t,r){return Is()<=ge.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Es(t)),this.ys.getDocumentsMatchingQuery(e,t,Mt.min(),r)}Fs(e,t,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Gh="LocalStore",RP=3e8;class PP{constructor(e,t,r,s){this.persistence=e,this.Ms=t,this.serializer=s,this.xs=new Fe(ue),this.Os=new Mn(i=>Zr(i),Mo),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Vv(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function Nv(n,e,t,r){return new PP(n,e,t,r)}async function Ov(n,e){const t=he(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=pe();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function CP(n,e){const t=he(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let I=P.resolve();return m.forEach(R=>{I=I.next(()=>d.getEntry(c,R)).next(k=>{const x=u.docVersions.get(R);ne(x!==null,48541),k.version.compareTo(x)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),d.addEntry(k)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=pe();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Mv(n){const e=he(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function xP(n,e){const t=he(n),r=e.snapshotVersion;let s=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Bs.newChangeBuffer({trackRemovals:!0});s=t.xs;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(t.Ti.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.Ti.addMatchingKeys(i,d.addedDocuments,p)));let I=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(Ge.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),s=s.insert(p,I),function(k,x,B){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=RP?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(m,I,d)&&l.push(t.Ti.updateTargetData(i,I))});let c=Nt(),u=pe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(kP(i,o,e.documentUpdates).next(d=>{c=d.qs,u=d.Qs})),!r.isEqual(se.min())){const d=t.Ti.getLastRemoteSnapshotVersion(i).next(p=>t.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return P.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.xs=s,i))}function kP(n,e,t){let r=pe(),s=pe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Nt();return t.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):U(Gh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function VP(n,e){const t=he(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=qr),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DP(n,e){const t=he(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ti.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.Ti.allocateTargetId(r).next(o=>(s=new bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function Fu(n,e,t){const r=he(n),s=r.xs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!vr(o))throw o;U(Gh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function Tm(n,e,t){const r=he(n);let s=se.min(),i=pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=he(c),m=p.Os.get(d);return m!==void 0?P.resolve(p.xs.get(m)):p.Ti.getTargetData(u,d)}(r,o,zt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,t?s:se.min(),t?i:pe())).next(l=>(NP(r,IR(e),l),{documents:l,$s:i})))}function NP(n,e,t){let r=n.Ns.get(e)||se.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ns.set(e,r)}class wm{constructor(){this.activeTargetIds=SR()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lv{constructor(){this.xo=new wm,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new wm,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OP{No(e){}shutdown(){}}/**
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
 */const bm="ConnectivityMonitor";class Am{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){U(bm,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){U(bm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let va=null;function Uu(){return va===null?va=function(){return 268435456+Math.round(2147483648*Math.random())}():va++,"0x"+va.toString(16)}/**
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
 */const Hc="RestConnection",MP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class LP{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===fl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,t,r,s,i){const o=Uu(),l=this.jo(e,t.toUriEncodedString());U(Hc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),d=Po(u);return this.Jo(e,l,c,r,d).then(p=>(U(Hc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw uo(Hc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,t,r,s,i,o){return this.zo(e,t,r,s,i)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,t){const r=MP[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */class FP{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const ut="WebChannelConnection";class UP extends LP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const o=Uu();return new Promise((l,c)=>{const u=new sy;u.setWithCredentials(!0),u.listenOnce(iy.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Va.NO_ERROR:const p=u.getResponseJson();U(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Va.TIMEOUT:U(ut,`RPC '${e}' ${o} timed out`),c(new Y(N.DEADLINE_EXCEEDED,"Request time out"));break;case Va.HTTP_ERROR:const m=u.getStatus();if(U(ut,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I==null?void 0:I.error;if(R&&R.status&&R.message){const k=function(B){const z=B.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(z)>=0?z:N.UNKNOWN}(R.status);c(new Y(k,R.message))}else c(new Y(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new Y(N.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{U(ut,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);U(ut,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",d,r,15)})}T_(e,t,r){const s=Uu(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ly(),l=ay(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");U(ut,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,I=!1;const R=new FP({Zo:x=>{I?U(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(m||(U(ut,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),U(ut,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},Xo:()=>p.close()}),k=(x,B,z)=>{x.listen(B,q=>{try{z(q)}catch($){setTimeout(()=>{throw $},0)}})};return k(p,Oi.EventType.OPEN,()=>{I||(U(ut,`RPC '${e}' stream ${s} transport opened.`),R.__())}),k(p,Oi.EventType.CLOSE,()=>{I||(I=!0,U(ut,`RPC '${e}' stream ${s} transport closed`),R.u_())}),k(p,Oi.EventType.ERROR,x=>{I||(I=!0,uo(ut,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),R.u_(new Y(N.UNAVAILABLE,"The operation could not be completed")))}),k(p,Oi.EventType.MESSAGE,x=>{var B;if(!I){const z=x.data[0];ne(!!z,16349);const q=z,$=(q==null?void 0:q.error)||((B=q[0])===null||B===void 0?void 0:B.error);if($){U(ut,`RPC '${e}' stream ${s} received error:`,$);const Z=$.status;let ee=function(v){const w=Ke[v];if(w!==void 0)return sv(w)}(Z),b=$.message;ee===void 0&&(ee=N.INTERNAL,b="Unknown error status: "+Z+" with message "+$.message),I=!0,R.u_(new Y(ee,b)),p.close()}else U(ut,`RPC '${e}' stream ${s} received:`,z),R.c_(z)}}),k(l,oy.STAT_EVENT,x=>{x.stat===_u.PROXY?U(ut,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===_u.NOPROXY&&U(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.a_()},0),R}}/**
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
 */function BP(){return typeof window<"u"?window:null}function ja(){return typeof document<"u"?document:null}/**
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
 */function nc(n){return new jR(n,!0)}/**
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
 */class Fv{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,t-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const Sm="PersistentStream";class Uv{constructor(e,t,r,s,i,o,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Fv(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Et(t.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===t&&this.K_(r,s)},r=>{e(()=>{const s=new Y(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return U(Sm,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(U(Sm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $P extends Uv{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=KR(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?wt(o.readTime):se.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=Du(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=ml(c)?{documents:dv(i,c)}:{query:fv(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=av(i,o.resumeToken);const u=ku(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=Xs(i,o.snapshotVersion.toTimestamp());const u=ku(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=GR(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=Du(this.serializer),t.removeTarget=e,this.L_(t)}}class jP extends Uv{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=HR(e.writeResults,e.commitTime),r=wt(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=Du(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>yl(this.serializer,r))};this.L_(t)}}/**
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
 */class qP{}class zP extends qP{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new Y(N.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Vu(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(N.UNKNOWN,i.toString())})}Yo(e,t,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,Vu(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(N.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class KP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Et(t),this.oa=!1):U("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const rs="RemoteStore";class HP{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(o=>{r.enqueueAndForget(async()=>{is(this)&&(U(rs,"Restarting streams for network reachability change."),await async function(c){const u=he(c);u.Ta.add(4),await Bo(u),u.da.set("Unknown"),u.Ta.delete(4),await rc(u)}(this))})}),this.da=new KP(r,s)}}async function rc(n){if(is(n))for(const e of n.Ia)await e(!0)}async function Bo(n){for(const e of n.Ia)await e(!1)}function Bv(n,e){const t=he(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),Yh(t)?Jh(t):li(t).M_()&&Qh(t,e))}function Wh(n,e){const t=he(n),r=li(t);t.Pa.delete(e),r.M_()&&$v(t,e),t.Pa.size===0&&(r.M_()?r.N_():is(t)&&t.da.set("Unknown"))}function Qh(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}li(n).H_(e)}function $v(n,e){n.Aa.Ke(e),li(n).J_(e)}function Jh(n){n.Aa=new FR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),li(n).start(),n.da._a()}function Yh(n){return is(n)&&!li(n).F_()&&n.Pa.size>0}function is(n){return he(n).Ta.size===0}function jv(n){n.Aa=void 0}async function GP(n){n.da.set("Online")}async function WP(n){n.Pa.forEach((e,t)=>{Qh(n,e)})}async function QP(n,e){jv(n),Yh(n)?(n.da.ca(e),Jh(n)):n.da.set("Unknown")}async function JP(n,e,t){if(n.da.set("Online"),e instanceof ov&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Pa.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Pa.delete(l),s.Aa.removeTarget(l))}(n,e)}catch(r){U(rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wl(n,r)}else if(e instanceof Ba?n.Aa.Xe(e):e instanceof iv?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(se.min()))try{const r=await Mv(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.Aa.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Pa.get(u);d&&i.Pa.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.Pa.get(c);if(!d)return;i.Pa.set(c,d.withResumeToken(Ge.EMPTY_BYTE_STRING,d.snapshotVersion)),$v(i,c);const p=new bn(d.target,c,u,d.sequenceNumber);Qh(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){U(rs,"Failed to raise snapshot:",r),await wl(n,r)}}async function wl(n,e,t){if(!vr(e))throw e;n.Ta.add(1),await Bo(n),n.da.set("Offline"),t||(t=()=>Mv(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U(rs,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await rc(n)})}function qv(n,e){return e().catch(t=>wl(n,t,e))}async function $o(n){const e=he(n),t=mr(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:qr;for(;YP(e);)try{const s=await VP(e.localStore,r);if(s===null){e.ha.length===0&&t.N_();break}r=s.batchId,XP(e,s)}catch(s){await wl(e,s)}zv(e)&&Kv(e)}function YP(n){return is(n)&&n.ha.length<10}function XP(n,e){n.ha.push(e);const t=mr(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function zv(n){return is(n)&&!mr(n).F_()&&n.ha.length>0}function Kv(n){mr(n).start()}async function ZP(n){mr(n).ta()}async function eC(n){const e=mr(n);for(const t of n.ha)e.Z_(t.mutations)}async function tC(n,e,t){const r=n.ha.shift(),s=Lh.from(r,e,t);await qv(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await $o(n)}async function nC(n,e){e&&mr(n).Y_&&await async function(r,s){if(function(o){return MR(o)&&o!==N.ABORTED}(s.code)){const i=r.ha.shift();mr(r).O_(),await qv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $o(r)}}(n,e),zv(n)&&Kv(n)}async function Rm(n,e){const t=he(n);t.asyncQueue.verifyOperationInProgress(),U(rs,"RemoteStore received new credentials");const r=is(t);t.Ta.add(3),await Bo(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await rc(t)}async function rC(n,e){const t=he(n);e?(t.Ta.delete(2),await rc(t)):e||(t.Ta.add(2),await Bo(t),t.da.set("Unknown"))}function li(n){return n.Ra||(n.Ra=function(t,r,s){const i=he(t);return i.ra(),new $P(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:GP.bind(null,n),n_:WP.bind(null,n),i_:QP.bind(null,n),j_:JP.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),Yh(n)?Jh(n):n.da.set("Unknown")):(await n.Ra.stop(),jv(n))})),n.Ra}function mr(n){return n.Va||(n.Va=function(t,r,s){const i=he(t);return i.ra(),new jP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:ZP.bind(null,n),i_:nC.bind(null,n),X_:eC.bind(null,n),ea:tC.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await $o(n)):(await n.Va.stop(),n.ha.length>0&&(U(rs,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
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
 */class Xh{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new Xh(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zh(n,e){if(Et("AsyncQueue",`${e}: ${n}`),vr(n))return new Y(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Fs{static emptySet(e){return new Fs(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=Mi(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Pm{constructor(){this.ma=new Fe(Q.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):X(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class Zs{constructor(e,t,r,s,i,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Zs(e,t,Fs.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class sC{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class iC{constructor(){this.queries=Cm(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const s=he(t),i=s.queries;s.queries=Cm(),i.forEach((o,l)=>{for(const c of l.ya)c.onError(r)})})(this,new Y(N.ABORTED,"Firestore shutting down"))}}function Cm(){return new Mn(n=>Ky(n),Wl)}async function oC(n,e){const t=he(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.wa()&&e.Sa()&&(r=2):(i=new sC,r=e.Sa()?0:1);try{switch(r){case 0:i.pa=await t.onListen(s,!0);break;case 1:i.pa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=Zh(o,`Initialization of query '${Es(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ya.push(e),e.Da(t.onlineState),i.pa&&e.va(i.pa)&&ed(t)}async function aC(n,e){const t=he(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ya.indexOf(e);o>=0&&(i.ya.splice(o,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function lC(n,e){const t=he(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.ya)l.va(s)&&(r=!0);o.pa=s}}r&&ed(t)}function cC(n,e,t){const r=he(n),s=r.queries.get(e);if(s)for(const i of s.ya)i.onError(t);r.queries.delete(e)}function ed(n){n.ba.forEach(e=>{e.next()})}var Bu,xm;(xm=Bu||(Bu={})).Ca="default",xm.Cache="cache";class uC{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Bu.Cache}}/**
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
 */class Hv{constructor(e){this.key=e}}class Gv{constructor(e){this.key=e}}class hC{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=pe(),this.mutatedKeys=pe(),this.Ha=Hy(e),this.Ja=new Fs(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new Pm,s=t?t.Ja:this.Ja;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),I=Fo(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let x=!1;m&&I?m.data.isEqual(I.data)?R!==k&&(r.track({type:3,doc:I}),x=!0):this.eu(m,I)||(r.track({type:2,doc:I}),x=!0,(c&&this.Ha(I,c)>0||u&&this.Ha(I,u)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),x=!0):m&&!I&&(r.track({type:1,doc:m}),x=!0,(c||u)&&(l=!0)),x&&(I?(o=o.add(I),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ja:o,Xa:r,Cs:l,mutatedKeys:i}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((d,p)=>function(I,R){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:x})}};return k(I)-k(R)}(d.type,p.type)||this.Ha(d.doc,p.doc)),this.tu(r),s=s!=null&&s;const l=t&&!s?this.nu():[],c=this.ja.size===0&&this.current&&!s?1:0,u=c!==this.za;return this.za=c,o.length!==0||u?{snapshot:new Zs(this.query,e.Ja,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Pm,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=pe(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new Gv(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new Hv(r))}),t}su(e){this.Ga=e.$s,this.ja=pe();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return Zs.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const td="SyncEngine";class dC{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class fC{constructor(e){this.key=e,this._u=!1}}class pC{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new Mn(l=>Ky(l),Wl),this.cu=new Map,this.lu=new Set,this.hu=new Fe(Q.comparator),this.Pu=new Map,this.Tu=new qh,this.Iu={},this.Eu=new Map,this.du=ns.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function mC(n,e,t=!0){const r=Zv(n);let s;const i=r.uu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await Wv(r,e,t,!0),s}async function gC(n,e){const t=Zv(n);await Wv(t,e,!0,!1)}async function Wv(n,e,t,r){const s=await DP(n.localStore,zt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await _C(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Bv(n.remoteStore,s),l}async function _C(n,e,t,r,s){n.Ru=(p,m,I)=>async function(k,x,B,z){let q=x.view.Za(B);q.Cs&&(q=await Tm(k.localStore,x.query,!1).then(({documents:b})=>x.view.Za(b,q)));const $=z&&z.targetChanges.get(x.targetId),Z=z&&z.targetMismatches.get(x.targetId)!=null,ee=x.view.applyChanges(q,k.isPrimaryClient,$,Z);return Vm(k,x.targetId,ee.ru),ee.snapshot}(n,p,m,I);const i=await Tm(n.localStore,e,!0),o=new hC(e,i.$s),l=o.Za(i.documents),c=Uo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(l,n.isPrimaryClient,c);Vm(n,t,u.ru);const d=new dC(e,t,o);return n.uu.set(e,d),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),u.snapshot}async function yC(n,e,t){const r=he(n),s=r.uu.get(e),i=r.cu.get(s.targetId);if(i.length>1)return r.cu.set(s.targetId,i.filter(o=>!Wl(o,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Wh(r.remoteStore,s.targetId),$u(r,s.targetId)}).catch(ss)):($u(r,s.targetId),await Fu(r.localStore,s.targetId,!0))}async function vC(n,e){const t=he(n),r=t.uu.get(e),s=t.cu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Wh(t.remoteStore,r.targetId))}async function IC(n,e,t){const r=eI(n);try{const s=await function(o,l){const c=he(o),u=Be.now(),d=l.reduce((I,R)=>I.add(R.key),pe());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=Nt(),k=pe();return c.Bs.getEntries(I,d).next(x=>{R=x,R.forEach((B,z)=>{z.isValidDocument()||(k=k.add(B))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,R)).next(x=>{p=x;const B=[];for(const z of l){const q=NR(z,p.get(z.key).overlayedDocument);q!=null&&B.push(new Ln(z.key,q,My(q.value.mapValue),Tt.exists(!0)))}return c.mutationQueue.addMutationBatch(I,u,B,l)}).next(x=>{m=x;const B=x.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(I,x.batchId,B)})}).then(()=>({batchId:m.batchId,changes:Wy(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Iu[o.currentUser.toKey()];u||(u=new Fe(ue)),u=u.insert(l,c),o.Iu[o.currentUser.toKey()]=u}(r,s.batchId,t),await jo(r,s.changes),await $o(r.remoteStore)}catch(s){const i=Zh(s,"Failed to persist write");t.reject(i)}}async function Qv(n,e){const t=he(n);try{const r=await xP(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Pu.get(i);o&&(ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o._u=!0:s.modifiedDocuments.size>0?ne(o._u,14607):s.removedDocuments.size>0&&(ne(o._u,42227),o._u=!1))}),await jo(t,r,e)}catch(r){await ss(r)}}function km(n,e,t){const r=he(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.uu.forEach((i,o)=>{const l=o.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=he(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.ya)m.Da(l)&&(u=!0)}),u&&ed(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function EC(n,e,t){const r=he(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Pu.get(e),i=s&&s.key;if(i){let o=new Fe(Q.comparator);o=o.insert(i,je.newNoDocument(i,se.min()));const l=pe().add(i),c=new Xl(se.min(),new Map,new Fe(ue),o,l);await Qv(r,c),r.hu=r.hu.remove(i),r.Pu.delete(e),nd(r)}else await Fu(r.localStore,e,!1).then(()=>$u(r,e,t)).catch(ss)}async function TC(n,e){const t=he(n),r=e.batch.batchId;try{const s=await CP(t.localStore,e);Yv(t,r,null),Jv(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await jo(t,s)}catch(s){await ss(s)}}async function wC(n,e,t){const r=he(n);try{const s=await function(o,l){const c=he(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(ne(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Yv(r,e,t),Jv(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await jo(r,s)}catch(s){await ss(s)}}function Jv(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function Yv(n,e,t){const r=he(n);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}function $u(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.cu.get(e))n.uu.delete(r),t&&n.au.Vu(r,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(r=>{n.Tu.containsKey(r)||Xv(n,r)})}function Xv(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(Wh(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),nd(n))}function Vm(n,e,t){for(const r of t)r instanceof Hv?(n.Tu.addReference(r.key,e),bC(n,r)):r instanceof Gv?(U(td,"Document no longer in limbo: "+r.key),n.Tu.removeReference(r.key,e),n.Tu.containsKey(r.key)||Xv(n,r.key)):X(19791,{mu:r})}function bC(n,e){const t=e.key,r=t.path.canonicalString();n.hu.get(t)||n.lu.has(r)||(U(td,"New document in limbo: "+t),n.lu.add(r),nd(n))}function nd(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new Q(Re.fromString(e)),r=n.du.next();n.Pu.set(r,new fC(t)),n.hu=n.hu.insert(t,r),Bv(n.remoteStore,new bn(zt(Nh(t.path)),r,"TargetPurposeLimboResolution",jt.le))}}async function jo(n,e,t){const r=he(n),s=[],i=[],o=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{o.push(r.Ru(c,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Hh.Rs(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.au.j_(s),await async function(c,u){const d=he(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>P.forEach(u,m=>P.forEach(m.ds,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>P.forEach(m.As,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!vr(p))throw p;U(Gh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const I=d.xs.get(m),R=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(R);d.xs=d.xs.insert(m,k)}}}(r.localStore,i))}async function AC(n,e){const t=he(n);if(!t.currentUser.isEqual(e)){U(td,"User change. New user:",e.toKey());const r=await Ov(t.localStore,e);t.currentUser=e,function(i,o){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new Y(N.CANCELLED,o))})}),i.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jo(t,r.ks)}}function SC(n,e){const t=he(n),r=t.Pu.get(e);if(r&&r._u)return pe().add(r.key);{let s=pe();const i=t.cu.get(e);if(!i)return s;for(const o of i){const l=t.uu.get(o);s=s.unionWith(l.view.Ya)}return s}}function Zv(n){const e=he(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EC.bind(null,e),e.au.j_=lC.bind(null,e.eventManager),e.au.Vu=cC.bind(null,e.eventManager),e}function eI(n){const e=he(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wC.bind(null,e),e}class bo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nc(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return Nv(this.persistence,new Dv,e.initialUser,this.serializer)}yu(e){return new zh(tc.fi,this.serializer)}pu(e){return new Lv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bo.provider={build:()=>new bo};class RC extends bo{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){ne(this.persistence.referenceDelegate instanceof Tl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Pv(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new zh(r=>Tl.fi(r,t),this.serializer)}}class PC extends bo{constructor(e,t,r){super(),this.Du=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Du.initialize(this,e),await eI(this.Du.syncEngine),await $o(this.Du.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}wu(e){return Nv(this.persistence,new Dv,e.initialUser,this.serializer)}Su(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Pv(r,e.asyncQueue,t)}bu(e,t){const r=new VS(t,this.persistence);return new kS(e.asyncQueue,r)}yu(e){const t=AP(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Kh(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,BP(),ja(),this.serializer,this.sharedClientState,!!this.forceOwnership)}pu(e){return new Lv}}class bl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>km(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AC.bind(null,this.syncEngine),await rC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iC}()}createDatastore(e){const t=nc(e.databaseInfo.databaseId),r=function(i){return new UP(i)}(e.databaseInfo);return function(i,o,l,c){return new zP(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new HP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>km(this.syncEngine,t,0),function(){return Am.C()?new Am:new OP}())}createSyncEngine(e,t){return function(s,i,o,l,c,u,d){const p=new pC(s,i,o,l,c,u);return d&&(p.Au=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=he(s);U(rs,"RemoteStore shutting down."),i.Ta.add(5),await Bo(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}bl.provider={build:()=>new bl};/**
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
 */class CC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Et("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const gr="FirestoreClient";class xC{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=hy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{U(gr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U(gr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Zh(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gc(n,e){n.asyncQueue.verifyOperationInProgress(),U(gr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ov(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Dm(n,e){n.asyncQueue.verifyOperationInProgress();const t=await kC(n);U(gr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Rm(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Rm(e.remoteStore,s)),n._onlineComponents=e}async function kC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(gr,"Using user provided OfflineComponentProvider");try{await Gc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;uo("Error using user provided cache. Falling back to memory cache: "+t),await Gc(n,new bo)}}else U(gr,"Using default OfflineComponentProvider"),await Gc(n,new RC(void 0));return n._offlineComponents}async function tI(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(gr,"Using user provided OnlineComponentProvider"),await Dm(n,n._uninitializedComponentsProvider._online)):(U(gr,"Using default OnlineComponentProvider"),await Dm(n,new bl))),n._onlineComponents}function VC(n){return tI(n).then(e=>e.syncEngine)}async function DC(n){const e=await tI(n),t=e.eventManager;return t.onListen=mC.bind(null,e.syncEngine),t.onUnlisten=yC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vC.bind(null,e.syncEngine),t}function NC(n,e,t={}){const r=new Sn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new CC({next:m=>{d.Cu(),o.enqueueAndForget(()=>aC(i,p)),m.fromCache&&c.source==="server"?u.reject(new Y(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new uC(l,d,{includeMetadataChanges:!0,La:!0});return oC(i,p)}(await DC(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function nI(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Nm=new Map;/**
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
 */function rI(n,e,t){if(!t)throw new Y(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function OC(n,e,t,r){if(e===!0&&r===!0)throw new Y(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Om(n){if(!Q.isDocumentKey(n))throw new Y(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Mm(n){if(Q.isDocumentKey(n))throw new Y(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X(12329,{type:typeof n})}function ei(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Y(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=sc(n);throw new Y(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const MC="firestore.googleapis.com",Lm=!0;class Fm{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=MC,this.ssl=Lm}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Lm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Rv)throw new Y(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new IS;switch(r.type){case"firstParty":return new wS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Nm.get(t);r&&(U("ComponentProvider","Removing Datastore"),Nm.delete(t),r.terminate())}(this),Promise.resolve()}}/**
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
 */class ci{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ci(this.firestore,e,this._query)}}class Ot{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class cr extends ci{constructor(e,t,r){super(e,t,Nh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new Q(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function Um(n,e,...t){if(n=He(n),rI("collection","path",e),n instanceof rd){const r=Re.fromString(e,...t);return Mm(r),new cr(n,null,r)}{if(!(n instanceof Ot||n instanceof cr))throw new Y(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return Mm(r),new cr(n.firestore,null,r)}}function ju(n,e,...t){if(n=He(n),arguments.length===1&&(e=hy.newId()),rI("doc","path",e),n instanceof rd){const r=Re.fromString(e,...t);return Om(r),new Ot(n,null,new Q(r))}{if(!(n instanceof Ot||n instanceof cr))throw new Y(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return Om(r),new Ot(n.firestore,n instanceof cr?n.converter:null,new Q(r))}}/**
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
 */const Bm="AsyncQueue";class $m{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Fv(this,"async_queue_retry"),this.ec=()=>{const r=ja();r&&U(Bm,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=ja();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=ja();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new Sn;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!vr(e))throw e;U(Bm,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Et("INTERNAL UNHANDLED ERROR: ",jm(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const s=Xh.createAndSchedule(this,e,t,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&X(47125,{_c:jm(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function jm(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class qo extends rd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new $m,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $m(e),this._firestoreClient=void 0,await e}}}function LC(n,e,t){t||(t=fl);const r=dh(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Gr(i,e))return s;throw new Y(N.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new Y(N.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Rv)throw new Y(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Po(e.host)&&h_(e.host),r.initialize({options:e,instanceIdentifier:t})}function sI(n){if(n._terminated)throw new Y(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||FC(n),n._firestoreClient}function FC(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,u,d){return new aR(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,nI(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new xC(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class ti{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ti(Ge.fromBase64String(e))}catch(t){throw new Y(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ti(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ic{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Y(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sd{constructor(e){this._methodName=e}}/**
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
 */class id{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Y(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Y(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const UC=/^__.*__$/;class BC{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ln(e,this.data,this.fieldMask,t,this.fieldTransforms):new ai(e,this.data,t,this.fieldTransforms)}}class iI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ln(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oI(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{hc:n})}}class ad{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new ad(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Al(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(oI(this.hc)&&UC.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class $C{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||nc(e)}gc(e,t,r,s=!1){return new ad({hc:e,methodName:t,fc:r,path:Ue.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ld(n){const e=n._freezeSettings(),t=nc(n._databaseId);return new $C(n._databaseId,!!e.ignoreUndefinedProperties,t)}function jC(n,e,t,r,s,i={}){const o=n.gc(i.merge||i.mergeFields?2:0,e,t,s);cd("Data must be an object, but it was:",o,r);const l=aI(r,o);let c,u;if(i.merge)c=new St(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=qu(e,p,t);if(!o.contains(m))throw new Y(N.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);cI(d,m)||d.push(m)}c=new St(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new BC(new pt(l),c,u)}class oc extends sd{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oc}}function qC(n,e,t,r){const s=n.gc(1,e,t);cd("Data must be an object, but it was:",s,r);const i=[],o=pt.empty();Ir(r,(c,u)=>{const d=ud(e,c,t);u=He(u);const p=s.Ac(d);if(u instanceof oc)i.push(d);else{const m=zo(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new St(i);return new iI(o,l,s.fieldTransforms)}function zC(n,e,t,r,s,i){const o=n.gc(1,e,t),l=[qu(e,r,t)],c=[s];if(i.length%2!=0)throw new Y(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(qu(e,i[m])),c.push(i[m+1]);const u=[],d=pt.empty();for(let m=l.length-1;m>=0;--m)if(!cI(u,l[m])){const I=l[m];let R=c[m];R=He(R);const k=o.Ac(I);if(R instanceof oc)u.push(I);else{const x=zo(R,k);x!=null&&(u.push(I),d.set(I,x))}}const p=new St(u);return new iI(d,p,o.fieldTransforms)}function KC(n,e,t,r=!1){return zo(t,n.gc(r?4:3,e))}function zo(n,e){if(lI(n=He(n)))return cd("Unsupported field value:",e,n),aI(n,e);if(n instanceof sd)return function(r,s){if(!oI(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=zo(l,s.Rc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:Xs(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xs(s.serializer,i)}}if(r instanceof id)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ti)return{bytesValue:av(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof od)return function(o,l){return{mapValue:{fields:{[kh]:{stringValue:Vh},[Hs]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Vc("VectorValues must only contain numeric values.");return Oh(l.serializer,u)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${sc(r)}`)}(n,e)}function aI(n,e){const t={};return Ry(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ir(n,(r,s)=>{const i=zo(s,e.Ic(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function lI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Be||n instanceof id||n instanceof ti||n instanceof Ot||n instanceof sd||n instanceof od)}function cd(n,e,t){if(!lI(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=sc(t);throw r==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+r)}}function qu(n,e,t){if((e=He(e))instanceof ic)return e._internalPath;if(typeof e=="string")return ud(n,e);throw Al("Field path arguments must be of type string or ",n,!1,void 0,t)}const HC=new RegExp("[~\\*/\\[\\]]");function ud(n,e,t){if(e.search(HC)>=0)throw Al(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ic(...e.split("."))._internalPath}catch{throw Al(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Al(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Y(N.INVALID_ARGUMENT,l+n+c)}function cI(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class uI{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(hd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class GC extends uI{data(){return super.data()}}function hd(n,e){return typeof e=="string"?ud(n,e):e instanceof ic?e._internalPath:e._delegate._internalPath}/**
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
 */function WC(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Y(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dd{}class QC extends dd{}function JC(n,e,...t){let r=[];e instanceof dd&&r.push(e),r=r.concat(t),function(i){const o=i.filter(c=>c instanceof fd).length,l=i.filter(c=>c instanceof ac).length;if(o>1||o>0&&l>0)throw new Y(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ac extends QC{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ac(e,t,r)}_apply(e){const t=this._parse(e);return hI(e._query,t),new ci(e.firestore,e.converter,Cu(e._query,t))}_parse(e){const t=ld(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Y(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){zm(p,d);const R=[];for(const k of p)R.push(qm(c,i,k));m={arrayValue:{values:R}}}else m=qm(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||zm(p,d),m=KC(l,o,p,d==="in"||d==="not-in");return _e.create(u,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function YC(n,e,t){const r=e,s=hd("where",n);return ac._create(s,r,t)}class fd extends dd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fd(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ce.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)hI(o,c),o=Cu(o,c)}(e._query,t),new ci(e.firestore,e.converter,Cu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function qm(n,e,t){if(typeof(t=He(t))=="string"){if(t==="")throw new Y(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zy(e)&&t.indexOf("/")!==-1)throw new Y(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Re.fromString(t));if(!Q.isDocumentKey(r))throw new Y(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Io(n,new Q(r))}if(t instanceof Ot)return Io(n,t._key);throw new Y(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sc(t)}.`)}function zm(n,e){if(!Array.isArray(n)||n.length===0)throw new Y(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hI(n,e){const t=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Y(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class XC{convertValue(e,t="none"){switch(fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ir(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Hs].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Le(o.doubleValue));return new od(i)}convertGeoPoint(e){return new id(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Hl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(yo(e));default:return null}}convertTimestamp(e){const t=Vn(e);return new Be(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);ne(_v(r),9688,{name:e});const s=new Xr(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(t)||Et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function ZC(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class Ia{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ex extends uI{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(hd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class qa extends ex{data(e={}){return super.data(e)}}class tx{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ia(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new qa(this._firestore,this._userDataWriter,r.key,r,new Ia(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Y(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new qa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ia(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new qa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ia(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:nx(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function nx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:n})}}class rx extends XC{constructor(e){super(),this.firestore=e}convertBytes(e){return new ti(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,t)}}function sx(n){n=ei(n,ci);const e=ei(n.firestore,qo),t=sI(e),r=new rx(e);return WC(n._query),NC(t,n._query).then(s=>new tx(e,r,n,s))}function ix(n,e,t,...r){n=ei(n,Ot);const s=ei(n.firestore,qo),i=ld(s);let o;return o=typeof(e=He(e))=="string"||e instanceof ic?zC(i,"updateDoc",n._key,e,t,r):qC(i,"updateDoc",n._key,e),pd(s,[o.toMutation(n._key,Tt.exists(!0))])}function ox(n){return pd(ei(n.firestore,qo),[new Yl(n._key,Tt.none())])}function ax(n,e){const t=ei(n.firestore,qo),r=ju(n),s=ZC(n.converter,e);return pd(t,[jC(ld(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Tt.exists(!1))]).then(()=>r)}function pd(n,e){return function(r,s){const i=new Sn;return r.asyncQueue.enqueueAndForget(async()=>IC(await VC(r),s,i)),i.promise}(sI(n),e)}class lx{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=hx(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function cx(n){return new lx(n)}class ux{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=bl.provider,this._offlineComponentProvider={build:t=>new PC(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}function hx(n){return new ux(void 0)}(function(e,t=!0){(function(s){oi=s})(si),Bs(new Wr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new qo(new ES(r.getProvider("auth-internal")),new bS(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xr(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),or(Tp,wp,e),or(Tp,wp,"esm2017")})();const dx={apiKey:"AIzaSyA8EmogduR2W8d9ht3q4VyM4J-JUTvwBd8",authDomain:"noteeasy-7080d.firebaseapp.com",projectId:"noteeasy-7080d",storageBucket:"noteeasy-7080d.appspot.com",messagingSenderId:"982678504604",appId:"1:982678504604:web:efbc601021106951319959",measurementId:"G-4FHPK9T92Y"},fx=y_(dx),Ea=LC(fx,{localCache:cx({})});function md(){const n=ye([]),e=Ls(),t=ye(null);H_(e,u=>{t.value=u,t.value?r():n.value=[]});async function r(){try{if(!t.value){n.value=[];return}const u=JC(Um(Ea,"notes"),YC("uid","==",t.value.uid)),d=await sx(u);n.value=d.docs.map(p=>({id:p.id,...p.data(),favorita:p.data().favorita??!1})),console.log("Notas cargadas:",n.value)}catch(u){console.error("Error al cargar notas:",u.message)}}async function s(u){try{if(!t.value)throw new Error("Para crear notas debes estar registrado/logueado");const d={...u,uid:t.value.uid,favorita:u.favorita??!1},p=await ax(Um(Ea,"notes"),d);n.value.push({id:p.id,...d})}catch(d){throw alert(d.message),d}}async function i(u,d){try{const p=await e0(e,u,d);return t.value=p.user,await r(),p.user}catch(p){throw console.error("Error al iniciar sesión:",p.message),p}}async function o(u,d){try{await ix(ju(Ea,"notes",d),u),n.value=n.value.map(p=>p.id===d?{id:d,...u}:p)}catch(p){console.error("Error al actualizar nota:",p.message)}}async function l(u){try{await ox(ju(Ea,"notes",u)),n.value=n.value.filter(d=>d.id!==u)}catch(d){console.error("Error al eliminar nota:",d.message)}}function c(){n.value=[]}return{notes:n,loadNotes:r,addNote:s,login:i,updateNote:o,deleteNote:l,clearNotes:c}}const px={class:"bg-[var(--color-white)] dark:bg-[var(--color-semi-black)] p-6 rounded-lg shadow-lg w-96 relative border border-[var(--color-black)] dark:border-[var(--color-grey)]"},mx={class:"mb-4"},gx={class:"mb-4"},_x={class:"mb-4 flex items-center"},yx={class:"text-center mt-4"},vx={__name:"LoginModal",props:{isModalOpen:Boolean},emits:["close"],setup(n,{emit:e}){const t=n,r=e,s=ye(""),i=ye(""),o=ye(!1),l=ye(null),{login:c,loadNotes:u}=md();async function d(){if(!navigator.onLine){alert("No tienes conexión a internet. Conéctate para iniciar sesión.");return}try{const k=Ls();await r0(k,o.value?Q_:Ih),await c(s.value,i.value),await u(),r("close")}catch(k){k.code==="auth/invalid-credential"||k.message&&k.message.includes("invalid-credential")?alert("El usuario o la contraseña no son correctos. Si no tienes cuenta, regístrate primero."):k.code==="auth/user-not-found"||k.message&&k.message.includes("user-not-found")?alert("Debes registrarte antes de iniciar sesión."):alert("Error: "+(k.message||k))}}async function p(){if(!navigator.onLine){alert("No tienes conexión a internet. Conéctate para registrarte.");return}const k=Ls();try{if((await n0(k,s.value)).length>0){alert("Este email ya está registrado. Por favor, inicia sesión.");return}await ZA(k,s.value,i.value),alert("Registro exitoso. Ahora puedes iniciar sesión."),m()}catch(x){alert("Error de registro: "+x.message)}}function m(){r("close")}function I(){if(!s.value){alert("Por favor, introduce tu email para poder enviar el correo de recuperación.");return}if(!navigator.onLine){alert("No tienes conexión a internet. Conéctate para recuperar la contraseña.");return}const k=Ls();XA(k,s.value).then(()=>{alert("Se ha enviado un correo para restablecer tu contraseña.")}).catch(x=>{alert("Error al enviar el correo: "+x.message)})}ks(()=>t.isModalOpen,k=>{var x;k?(document.addEventListener("keydown",R),(x=l.value)==null||x.focus()):document.removeEventListener("keydown",R)});function R(k){k.key==="Escape"&&m()}return(k,x)=>t.isModalOpen?(me(),Ae("div",{key:0,class:"fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50",onKeydown:r_(m,["esc"]),tabindex:"0",ref_key:"modalContainer",ref:l,onMousedown:$t(m,["self"])},[j("div",px,[j("button",{onClick:m,class:"absolute top-2 right-2 text-xl font-bold text-[var(--color-black)] dark:text-[var(--color-white)]"},"×"),x[7]||(x[7]=j("h2",{class:"text-xl font-semibold text-center mb-4 text-[var(--color-black)] dark:text-[var(--color-white)]"},"Login / Register",-1)),j("form",{onSubmit:$t(d,["prevent"])},[j("div",mx,[x[3]||(x[3]=j("label",{for:"email",class:"block text-sm font-medium text-[var(--color-black)] dark:text-[var(--color-white)]"},"Email:",-1)),ba(j("input",{id:"email",type:"email","onUpdate:modelValue":x[0]||(x[0]=B=>s.value=B),class:"w-full mt-1 p-2 border border-[var(--color-black)] dark:border-[var(--color-white)] rounded-md bg-[var(--color-grey)] dark:bg-[var(--color-white)] text-[var(--color-black)] dark:text-[var(--color-black)]",required:""},null,512),[[cu,s.value]])]),j("div",gx,[x[4]||(x[4]=j("label",{for:"password",class:"block text-sm font-medium text-[var(--color-black)] dark:text-[var(--color-white)]"},"Password:",-1)),ba(j("input",{id:"password",type:"password","onUpdate:modelValue":x[1]||(x[1]=B=>i.value=B),class:"w-full mt-1 p-2 border border-[var(--color-black)] dark:border-[var(--color-white)] rounded-md bg-[var(--color-grey)] dark:bg-[var(--color-white)] text-[var(--color-black)] dark:text-[var(--color-black)]",required:""},null,512),[[cu,i.value]])]),j("div",_x,[ba(j("input",{id:"keepLogged",type:"checkbox","onUpdate:modelValue":x[2]||(x[2]=B=>o.value=B),class:"mr-2 w-6 h-6"},null,512),[[cw,o.value]]),x[5]||(x[5]=j("label",{for:"keepLogged",class:"text-md text-[var(--color-black)] dark:text-[var(--color-white)]"},"No cerrar sesión",-1))]),j("div",{class:"flex justify-between"},[j("button",{type:"button",onClick:p,class:"px-4 py-2 bg-green-500 text-[var(--color-white)] rounded-md shadow-md"}," Register "),x[6]||(x[6]=j("button",{type:"submit",class:"px-4 py-2 bg-[var(--color-blue-strong)] text-[var(--color-white)] rounded-md shadow-md"}," Login ",-1))])],32),j("div",yx,[j("a",{href:"#",onClick:$t(I,["prevent"]),class:"text-sm text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] hover:underline"}," ¿Olvidaste tu contraseña? ")])])],544)):ri("",!0)}},Ix={class:"bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]"},Ex={class:"container mx-auto w-full px-3 py-2 grid grid-cols-3 items-center gap-2 relative"},Tx={class:"flex items-center justify-end"},wx={__name:"Header",setup(n){const e=ye(!1),t=ye(!1),{loadNotes:r,clearNotes:s}=md();function i(){e.value=!0}function o(){e.value=!1}function l(){const c=Ls();o0(c).then(()=>{t.value=!1,s(),alert("Sesión cerrada exitosamente.")}).catch(u=>{alert("Error al cerrar sesión: "+u.message)})}return ni(()=>{const c=Ls();H_(c,u=>{t.value=!!u,u?r():s()})}),(c,u)=>(me(),Ae("header",Ix,[j("section",Ex,[u[1]||(u[1]=j("div",{class:"flex items-center justify-start"},[j("a",{href:"index.html",class:"ml-2"},[j("img",{src:vw,alt:"Logo",class:"h-12 w-auto"})])],-1)),j("div",{class:At(["font-semibold text-center",{"mr-3 md:mr-0":!t.value}])},u[0]||(u[0]=[j("h1",{class:"text-xl md:text-2xl dark:text-white font-bold"},"NoteEasy",-1)]),2),j("div",Tx,[t.value?(me(),Ae("button",{key:1,onClick:l,class:"mr-2 bg-[var(--color-red)] text-[var(--color-white)] px-3 py-2 rounded-md shadow-md"}," Logout ")):(me(),Ae("button",{key:0,onClick:i,class:"mr-2 bg-[var(--color-white)] px-3 py-2 rounded-md shadow-md"}," Login/Register "))])]),we(vx,{isModalOpen:e.value,onClose:o},null,8,["isModalOpen"])]))}},bx=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},Ax={},Sx={class:"h-16 bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)] flex items-center justify-center"};function Rx(n,e){return me(),Ae("section",Sx,e[0]||(e[0]=[j("div",null,[j("h1",{class:"text-[var(--color-black)] dark:text-[var(--color-white)] text-xl font-['Inter']"}," By Alejandro Sánchez López - DAW ")],-1)]))}const Px=bx(Ax,[["render",Rx]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cx=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),xx=n=>{const e=Cx(n);return e.charAt(0).toUpperCase()+e.slice(1)},kx=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ta={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:r,iconNode:s,name:i,class:o,...l},{slots:c})=>ou("svg",{...Ta,width:n||Ta.width,height:n||Ta.height,stroke:r||Ta.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:kx("lucide",...i?[`lucide-${Km(xx(i))}-icon`,`lucide-${Km(i)}`]:["lucide-icon"]),...l},[...s.map(u=>ou(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=(n,e)=>(t,{slots:r})=>ou(Vx,{...t,iconNode:e,name:n},r);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=gd("monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=gd("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=gd("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Gn=ye(localStorage.getItem("theme")||"system");function Mx(){const n=()=>{const t=window.matchMedia("(prefers-color-scheme: dark)").matches;Gn.value==="dark"?document.documentElement.classList.add("dark"):Gn.value==="light"?document.documentElement.classList.remove("dark"):document.documentElement.classList.toggle("dark",t),localStorage.setItem("theme",Gn.value)};return ni(()=>{n();const t=window.matchMedia("(prefers-color-scheme: dark)"),r=s=>{Gn.value==="system"&&document.documentElement.classList.toggle("dark",s.matches)};t.addEventListener("change",r)}),cT(()=>{n()}),{theme:Gn,toggleTheme:()=>{Gn.value=Gn.value==="light"?"dark":Gn.value==="dark"?"system":"light"}}}const Lx={__name:"ThemeToggle",setup(n){const{theme:e,toggleTheme:t}=Mx();return(r,s)=>(me(),Ae("button",{onClick:s[0]||(s[0]=(...i)=>Ct(t)&&Ct(t)(...i)),class:"fixed bottom-24 left-6 md:bottom-24 md:left-16 rounded-full w-12 h-12 md:w-16 md:h-16 bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)] text-[var(--color-black)] dark:text-[var(--button-text-light)] flex items-center justify-center gap-2 shadow-lg z-50"},[Ct(e)==="light"?(me(),Vs(Ct(Ox),{key:0,class:"w-6 h-6 md:w-7 md:h-7"})):Ct(e)==="dark"?(me(),Vs(Ct(Nx),{key:1,class:"w-6 h-6 md:w-7 md:h-7"})):(me(),Vs(Ct(Dx),{key:2,class:"w-6 h-6 md:w-7 md:h-7"}))]))}},Fx={class:"flex flex-col space-y-2"},Ux=["for"],Bx=["id","value"],$x=["value"],zu={__name:"GeneralSelect",props:{label:String,id:String,options:Array,modelValue:String},setup(n){return(e,t)=>(me(),Ae("div",Fx,[j("label",{for:n.id,class:"text-md text-[var(--color-black)] dark:text-[var(--color-white)]"},it(n.label)+":",9,Ux),j("select",{id:n.id,value:n.modelValue,onChange:t[0]||(t[0]=r=>e.$emit("update:modelValue",r.target.value)),class:"border border-[var(--color-black)] rounded-2xl p-2 text-base bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-semi-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"},[(me(!0),Ae(kt,null,xg(n.options,r=>(me(),Ae("option",{key:r,value:r},it(r),9,$x))),128))],40,Bx)]))}},jx={class:"flex flex-col space-y-2"},qx=["for"],zx=["id","value","placeholder"],Kx=["id","type","value","placeholder"],Wc={__name:"GeneralInput",props:{label:String,id:String,type:{type:String,default:"text"},placeholder:String,modelValue:String},setup(n){return(e,t)=>(me(),Ae("div",jx,[j("label",{for:n.id,class:"text-md font-medium text-[var(--color-black)] dark:text-[var(--color-white)]"},it(n.label)+":",9,qx),n.type==="textarea"?(me(),Ae("textarea",{key:0,id:n.id,value:n.modelValue,onInput:t[0]||(t[0]=r=>e.$emit("update:modelValue",r.target.value)),placeholder:n.placeholder,class:"border border-[var(--color-black)] rounded-2xl p-2 text-base bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)] resize-y min-h-[96px]"},null,40,zx)):(me(),Ae("input",{key:1,id:n.id,type:n.type,value:n.modelValue,onInput:t[1]||(t[1]=r=>e.$emit("update:modelValue",r.target.value)),placeholder:n.placeholder,class:"border border-[var(--color-black)] rounded-2xl p-2 text-base bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"},null,40,Kx))]))}},Hx={__name:"CloseButton",emits:["close"],setup(n,{emit:e}){const t=e,r=()=>{t("close")};return(s,i)=>(me(),Ae("section",null,[j("button",{onClick:r,class:"px-4 py-2 bg-[var(--color-red)] hover:bg-[var(--color-black)] text-[var(--color-white)] font-semibold rounded-lg shadow-md"}," Volver ")]))}},Gx={__name:"SaveButton",props:{inputs:Object,selectValue:{type:[Object,String],default:""}},emits:["saveSuccess"],setup(n,{emit:e}){const t=n,r=e,s=()=>{const i=JSON.parse(localStorage.getItem("notes"))||[],o=new Date().toISOString(),l={title:t.inputs.noteTitle.trim(),etiquetas:t.inputs.noteEtiquetas.trim(),description:t.inputs.noteDescription.trim(),priority:t.selectValue.trim(),timestamp:o};t.inputs.index!==void 0&&t.inputs.index!==null?i[t.inputs.index]=l:i.push(l),localStorage.setItem("notes",JSON.stringify(i)),r("saveSuccess",{note:l,index:t.inputs.index})};return(i,o)=>(me(),Ae("section",null,[j("button",{onClick:s,class:"px-4 py-2 bg-[var(--color-blue-strong)] hover:bg-[var(--color-blue-strong)] text-[var(--color-white)] font-semibold rounded-lg shadow-md"}," Guardar ")]))}};function Wx({title:n,etiquetas:e,description:t,priority:r}){return!(!(n!=null&&n.trim())||!(e!=null&&e.trim())||!(t!=null&&t.trim())||!(r!=null&&r.trim()))}const Qx={class:"p-4 rounded-lg w-[95vw] max-w-md md:max-w-3xl mx-2 md:mx-auto relative bg-[var(--color-white)] dark:bg-[var(--color-semi-black)] border border-[var(--color-semi-black)] shadow-lg"},Jx={class:"text-2xl font-semibold mb-0 text-[var(--color-black)] dark:text-[var(--color-white)]"},Yx={class:"space-y-8"},Xx={class:"flex gap-2 w-full"},Zx={class:"w-1/2 min-w-0"},e1={class:"w-1/2 min-w-0"},t1={class:"flex justify-between mt-6"},n1={__name:"AddNoteModal",props:{isModalOpen:Boolean,noteData:Object,editIndex:Number},emits:["close","saveSuccess"],setup(n,{emit:e}){const t=n,r=e,s=ye(""),i=ye(""),o=ye(""),l=ye("Sin Prioridad"),c=ye(""),u=ye(!1),d=ye(null);ks(()=>t.noteData,I=>{I?(s.value=I.title,i.value=I.etiquetas,o.value=I.description,l.value=I.priority||"Sin Prioridad",c.value=I.timestamp,u.value=I.favorita??!1):(l.value="Sin Prioridad",u.value=!1)},{immediate:!0}),ks(()=>t.isModalOpen,I=>{I&&yg(()=>{var R;(R=d.value)==null||R.focus()})});const p=()=>{r("close")},m=I=>{if(!Wx({title:s.value,etiquetas:i.value,description:o.value,priority:l.value})){alert("Todos los campos son obligatorios.");return}I.note.favorita=u.value,r("saveSuccess",I),p()};return(I,R)=>n.isModalOpen?(me(),Ae("section",{key:0,ref_key:"modalSection",ref:d,class:"fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50",onMousedown:$t(p,["self"]),onKeydown:r_(p,["esc"]),tabindex:"0"},[j("div",Qx,[j("button",{onClick:p,class:"absolute top-2 right-2 text-xl font-bold text-[var(--color-black)] dark:text-[var(--color-white)]"}," × "),j("h2",Jx,it(n.editIndex!==null?"Editar Nota":"Crear una nueva nota"),1),R[5]||(R[5]=j("hr",{class:"w-1/3 border-2 mb-4 border-[var(--color-blue)]"},null,-1)),j("div",Yx,[we(zu,{label:"Prioridad",id:"noteType",options:["Alta","Media","Baja","Sin Prioridad"],modelValue:l.value,"onUpdate:modelValue":R[0]||(R[0]=k=>l.value=k)},null,8,["modelValue"]),j("div",Xx,[j("div",Zx,[we(Wc,{label:"Título",id:"noteTitle",type:"text",placeholder:"Título...",modelValue:s.value,"onUpdate:modelValue":R[1]||(R[1]=k=>s.value=k),class:"w-full text-sm","label-class":"text-xs"},null,8,["modelValue"])]),j("div",e1,[we(Wc,{label:"Etiquetas",id:"noteEtiquetas",type:"text",placeholder:"Etiquetas...",modelValue:i.value,"onUpdate:modelValue":R[2]||(R[2]=k=>i.value=k),class:"w-full text-sm","label-class":"text-xs"},null,8,["modelValue"]),R[4]||(R[4]=j("sub",{class:"block text-xs text-gray-500 mt-1"},"Separadas por coma (,)",-1))])]),we(Wc,{label:"Descripción",id:"noteDescription",type:"textarea",placeholder:"Descripción...",modelValue:o.value,"onUpdate:modelValue":R[3]||(R[3]=k=>o.value=k)},null,8,["modelValue"])]),j("div",t1,[we(Gx,{inputs:{noteTitle:s.value,noteEtiquetas:i.value,noteDescription:o.value,timestamp:c.value,index:n.editIndex,favorita:u.value},selectValue:l.value,onSaveSuccess:m},null,8,["inputs","selectValue"]),we(Hx,{onClose:p,class:"ml-auto"})])])],544)):ri("",!0)}},r1={class:"w-full"},s1={__name:"SearchInput",props:{modelValue:String},emits:["update:modelValue","search"],setup(n,{emit:e}){const t=n,r=e,s=ye(t.modelValue||""),i=()=>{r("update:modelValue",s.value),r("search",s.value)};return(o,l)=>(me(),Ae("div",r1,[l[1]||(l[1]=j("label",{for:"searchBox",class:"block mb-1 text-[var(--color-black)] dark:text-[var(--color-white)]"}," Buscar notas: ",-1)),ba(j("input",{id:"searchBox",type:"text","onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c),onInput:i,placeholder:"Buscar...",class:"border border-[var(--color-black)] rounded-2xl p-2 text-base w-full bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-black)]"},null,544),[[cu,s.value]])]))}};function i1(n){return dr(()=>{const e=n.value.flatMap(t=>t.etiquetas?t.etiquetas.split(","):[]).map(t=>t.trim()).filter(t=>t);return["Todas",...new Set(e)]})}const o1={class:"flex flex-col lg:flex-row items-center justify-center gap-2 pb-2 bg-[var(--color-grey-page)] dark:bg-[var(--color-black)] w-full"},a1={class:"flex flex-col items-center justify-center h-full mb-1 lg:mb-0 lg:mr-6 lg:w-auto w-full"},l1={class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-grey)] mt-1 text-center opacity-70"},c1={class:"flex flex-col md:flex-row items-center gap-4 md:gap-6 md:justify-center px-3 md:px-0 lg:w-auto w-full"},u1={class:"flex flex-row gap-2 md:gap-4 justify-center min-w-0 w-full max-w-full md:max-w-[500px] mx-auto"},h1={class:"flex flex-row gap-1 md:gap-4 justify-center items-center min-w-0 w-full max-w-full md:max-w-[500px] md:mx-auto"},d1=["aria-label"],f1={class:"flex flex-row items-center gap-1 md:mt-6"},p1={__name:"Filtros",props:{notes:{type:Array,default:()=>[]},filteredNotesCount:{type:Number,default:0},totalNotesCount:{type:Number,default:0}},emits:["filter","search","order","toggleFavorites"],setup(n,{emit:e}){const t=n,r=e,s=ye("Todas"),i=ye("Todas"),o=ye(""),l=ye("Más reciente"),c=ye(!1),u=dr(()=>t.notes),d=i1(u),p=()=>{r("filter",{priority:s.value,tag:i.value})},m=()=>{r("search",o.value)},I=k=>{l.value=k,r("order",l.value)},R=()=>{c.value=!c.value,r("toggleFavorites",c.value)};return(k,x)=>(me(),Ae("div",o1,[j("div",a1,[x[5]||(x[5]=j("h2",{class:"text-3xl font-semibold text-[var(--color-black)] dark:text-[var(--color-white)] mt-2 whitespace-nowrap text-center"}," Notas creadas ",-1)),j("span",l1,it(n.filteredNotesCount)+" de "+it(n.totalNotesCount)+" notas ",1),x[6]||(x[6]=j("hr",{class:"border-2 border-[var(--color-blue)] dark:border-[var(--color-blue-strong)] w-44 mt-1"},null,-1))]),j("div",c1,[j("div",u1,[we(zu,{label:"Prioridad",id:"priorityFilter",options:["Todas","Sin Prioridad","Alta","Media","Baja"],modelValue:s.value,"onUpdate:modelValue":x[0]||(x[0]=B=>s.value=B),onChange:p,class:"w-1/2 min-w-[110px] max-w-[180px] p-2 text-base md:w-44 md:p-5 md:text-base"},null,8,["modelValue"]),we(zu,{label:"Etiquetas",id:"tagsFilter",options:Ct(d),modelValue:i.value,"onUpdate:modelValue":x[1]||(x[1]=B=>i.value=B),onChange:p,class:"w-1/2 min-w-[110px] max-w-[180px] p-2 text-base md:w-44 md:p-5 md:text-base"},null,8,["options","modelValue"])]),j("div",h1,[we(s1,{modelValue:o.value,"onUpdate:modelValue":x[2]||(x[2]=B=>o.value=B),onInput:m,class:"mb-5 md:mb-0 w-full sm:w-60 md:w-44 p-2 text-base md:p-5 md:text-base"},null,8,["modelValue"]),j("button",{onClick:R,"aria-label":c.value?"Mostrar todas las notas":"Mostrar solo favoritas",class:"p-1 rounded transition flex items-center mr-1 md:mr-3 md:mt-6 bg-transparent",type:"button"},[(me(),Ae("svg",{xmlns:"http://www.w3.org/2000/svg",class:At(["w-7 h-7 md:w-8 md:h-8 transition-colors",c.value?"text-yellow-400":"text-gray-400"]),fill:"currentColor",viewBox:"0 0 24 24"},x[7]||(x[7]=[j("path",{d:"M12 17.75l-6.172 3.245 1.179-6.873-5-4.873 6.9-1.002L12 2.25l3.093 6.997 6.9 1.002-5 4.873 1.179 6.873z"},null,-1)]),2))],8,d1),j("div",f1,[x[10]||(x[10]=j("span",{class:"mr-1 text-xs md:text-base text-[var(--color-black)] dark:text-[var(--color-white)] whitespace-nowrap"},"Por fecha:",-1)),j("button",{onClick:x[3]||(x[3]=B=>I("Más reciente")),"aria-label":"Ordenar por más reciente",class:At(["p-1 rounded transition",l.value==="Más reciente"?"bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]":"hover:bg-[var(--color-grey)] dark:hover:bg-[var(--color-semi-black)]"])},[(me(),Ae("svg",{xmlns:"http://www.w3.org/2000/svg",class:At(["w-5 h-5",l.value==="Más reciente"?"text-[var(--color-black)] dark:text-[var(--color-white)]":"text-[var(--color-semi-black)] dark:text-[var(--color-grey)]"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},x[8]||(x[8]=[j("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))],2),j("button",{onClick:x[4]||(x[4]=B=>I("Más antiguo")),"aria-label":"Ordenar por más antiguo",class:At(["p-1 rounded transition",l.value==="Más antiguo"?"bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]":"hover:bg-[var(--color-grey)] dark:hover:bg-[var(--color-semi-black)]"])},[(me(),Ae("svg",{xmlns:"http://www.w3.org/2000/svg",class:At(["w-5 h-5",l.value==="Más antiguo"?"text-[var(--color-black)] dark:text-[var(--color-white)]":"text-[var(--color-semi-black)] dark:text-[var(--color-grey)]"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},x[9]||(x[9]=[j("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},null,-1)]),2))],2)])])])]))}};function dI(n){if(!n)return"Fecha no disponible";const e=new Date(n);return`${e.toLocaleDateString()} - ${e.toLocaleTimeString()}`}const m1={class:"absolute top-2 right-2 z-20"},g1={class:"flex flex-col flex-grow ml-6 h-full justify-between relative z-10"},_1=["title"],y1={class:"mb-3 text-md text-[var(--color-black)] dark:text-[var(--color-black)] mt-2 whitespace-pre-line break-words overflow-y-auto max-h-24"},v1={class:"flex flex-col mt-auto"},I1=["title"],E1={class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"},T1={class:"absolute bottom-3 right-3 flex gap-2 z-20"},w1={__name:"NoteCard",props:{note:Object},emits:["delete","edit","toggleFavorite","showDetail"],setup(n,{emit:e}){const t=n,r=e,s=ye(!1);function i(){window.matchMedia("(hover: hover)").matches&&t.note.title&&(s.value=!0,setTimeout(()=>{s.value=!1},2500))}function o(){r("showDetail",t.note)}function l(){r("toggleFavorite",t.note.id)}const c=dr(()=>{switch(t.note.priority){case"Alta":return"bg-[var(--color-red)]";case"Media":return"bg-[var(--color-yellow)]";case"Baja":return"bg-[var(--color-blue-medium)]";default:return"bg-gray-500"}});return(u,d)=>(me(),Ae("div",{class:"flex flex-col p-4 rounded-lg shadow-md w-full max-w-[420px] mx-auto min-h-[180px] md:min-h-[200px] relative mb-8 bg-[var(--color-white)] dark:bg-[var(--color-grey)] cursor-pointer",onClick:o},[j("div",{class:At([c.value,"absolute left-0 top-0 bottom-0 w-4 rounded-l-lg h-full z-10"])},null,2),j("div",m1,[j("button",{onClick:$t(l,["stop"]),class:"p-1 rounded-full focus:outline-none bg-transparent",type:"button"},[(me(),Ae("svg",{xmlns:"http://www.w3.org/2000/svg",class:At(["w-8 h-8 transition-colors",n.note.favorita?"text-yellow-400":"text-gray-400"]),fill:"currentColor",viewBox:"0 0 24 24"},d[3]||(d[3]=[j("path",{d:"M12 17.75l-6.172 3.245 1.179-6.873-5-4.873 6.9-1.002L12 2.25l3.093 6.997 6.9 1.002-5 4.873 1.179 6.873z"},null,-1)]),2))])]),j("div",g1,[j("h3",{class:"text-2xl font-bold text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] mt-0 overflow-hidden whitespace-nowrap text-ellipsis pr-12",style:{"text-overflow":"ellipsis","overflow-wrap":"normal"},title:n.note.title,onClick:$t(i,["stop"])},it(n.note.title),9,_1),s.value?(me(),Ae("div",{key:0,class:"fixed left-1/2 top-1/4 transform -translate-x-1/2 bg-white text-black p-2 rounded shadow z-50",onClick:d[0]||(d[0]=p=>s.value=!1)},it(n.note.title),1)):ri("",!0),j("p",y1,it(n.note.description),1),j("div",v1,[j("p",{class:"text-sm text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)] truncate overflow-hidden whitespace-nowrap max-w-[50%]",title:n.note.etiquetas},it(n.note.etiquetas),9,I1),j("p",E1,it(Ct(dI)(n.note.timestamp)),1)])]),j("div",T1,[j("button",{onClick:d[1]||(d[1]=$t(p=>u.$emit("edit"),["stop"])),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-blue-strong)] dark:bg-[var(--color-blue-strong)] text-[var(--color-white)]"}," Editar "),j("button",{onClick:d[2]||(d[2]=$t(p=>u.$emit("delete"),["stop"])),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-red)] text-[var(--color-white)]"}," Eliminar ")])]))}},b1={class:"w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8"},A1={key:0,class:"mt-10 mb-10 text-center text-[var(--color-semi-black)] dark:text-[var(--color-grey)] text-lg"},S1={__name:"NotesList",props:{filteredNotes:{type:Array,default:()=>[]}},setup(n){return(e,t)=>(me(),Ae("div",b1,[n.filteredNotes.length===0?(me(),Ae("div",A1,' ¡No hay notas aún! Pulsa el botón "+" para agregar tu primera nota. ')):ri("",!0),we(rw,{name:"note-fade",tag:"div",class:"grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mt-0 justify-items-center"},{default:wg(()=>[(me(!0),Ae(kt,null,xg(n.filteredNotes,r=>(me(),Vs(w1,{key:r.id,note:r,onShowDetail:s=>e.$emit("showDetail",r),onDelete:s=>e.$emit("delete",r.id),onEdit:s=>e.$emit("edit",r.id),onToggleFavorite:s=>e.$emit("toggleFavorite",r.id)},null,8,["note","onShowDetail","onDelete","onEdit","onToggleFavorite"]))),128))]),_:1})]))}},R1={class:"flex flex-col flex-grow ml-6 h-full justify-between relative z-10"},P1={class:"flex flex-col pr-2"},C1=["title"],x1={class:"mb-3 text-md text-[var(--color-black)] dark:text-[var(--color-black)] mt-2 whitespace-pre-line break-words break-all overflow-y-auto pr-2 max-h-32",style:{"scrollbar-gutter":"stable"}},k1={class:"mt-2 pr-36"},V1={class:"text-sm text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)] break-words whitespace-normal overflow-y-auto pr-2 max-h-[3.2em]",style:{display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical","text-overflow":"ellipsis"}},D1={class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"},N1={class:"absolute bottom-3 right-3 flex gap-2 z-20"},O1={__name:"NoteDetailModal",props:{note:Object},emits:["close","edit","delete"],setup(n,{emit:e}){const t=n,r=e,s=ye(null),i=ye(!1),o=()=>r("close"),l=p=>{p.key==="Escape"&&o()};ni(()=>{window.addEventListener("keydown",l)}),ih(()=>{window.removeEventListener("keydown",l)});const c=dr(()=>{switch(t.note.priority){case"Alta":return"bg-[var(--color-red)]";case"Media":return"bg-[var(--color-yellow)]";case"Baja":return"bg-[var(--color-blue-medium)]";default:return"bg-gray-500"}});function u(){window.matchMedia("(hover: hover)").matches&&t.note.title&&(i.value=!0,setTimeout(()=>{i.value=!1},2500))}const d=dr(()=>{const p=t.note.title||"",m=t.note.description||"";return(p+m).trim().length<80?"min-h-[200px]":"min-h-[260px]"});return(p,m)=>(me(),Ae("div",{class:"fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50",onMousedown:$t(o,["self"])},[j("div",{class:At(["flex flex-col p-4 rounded-lg shadow-md w-full max-w-[370px] md:max-w-xl mx-2 relative mb-8 bg-[var(--color-white)] dark:bg-[var(--color-grey)] cursor-pointer",d.value]),ref_key:"modalRef",ref:s},[j("div",{class:At([c.value,"absolute left-0 top-0 bottom-0 w-4 rounded-l-lg h-full z-10"])},null,2),j("div",R1,[j("button",{onClick:o,class:"absolute top-2 right-2 text-xl font-bold z-20 text-[var(--color-black)] dark:text-[var(--color-white)]"},"×"),j("div",P1,[j("h3",{class:"text-2xl font-bold text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] mt-0 break-words whitespace-normal overflow-hidden pr-10",style:{display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical","max-height":"3.2em","text-overflow":"ellipsis"},title:n.note.title,onClick:$t(u,["stop"])},it(n.note.title||"Sin título"),9,C1),i.value?(me(),Ae("div",{key:0,class:"fixed left-1/2 top-1/4 transform -translate-x-1/2 bg-white text-black p-2 rounded shadow z-50",onClick:m[0]||(m[0]=I=>i.value=!1)},it(n.note.title),1)):ri("",!0),j("p",x1,it(n.note.description||"Sin contenido"),1)]),j("div",k1,[j("p",V1,it(n.note.etiquetas||"Sin etiquetas"),1),j("p",D1,it(Ct(dI)(n.note.timestamp)),1)])]),j("div",N1,[j("button",{onClick:m[1]||(m[1]=$t(I=>p.$emit("edit"),["stop"])),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-blue-strong)] dark:bg-[var(--color-blue-strong)] text-[var(--color-white)]"}," Editar "),j("button",{onClick:m[2]||(m[2]=$t(I=>p.$emit("delete"),["stop"])),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-red)] text-[var(--color-white)]"}," Eliminar ")])],2)],32))}};function M1(n,e,t,r,s){return dr(()=>{let i=n.value.filter(o=>{var p,m,I;const l=o.priority||"Sin Prioridad",c=e.value==="Todas"||l===e.value,u=t.value==="Todas"||o.etiquetas&&o.etiquetas.split(",").map(R=>R.trim().toLowerCase()).includes(t.value.trim().toLowerCase()),d=!r.value||((p=o.title)==null?void 0:p.toLowerCase().includes(r.value.toLowerCase()))||((m=o.description)==null?void 0:m.toLowerCase().includes(r.value.toLowerCase()))||((I=o.etiquetas)==null?void 0:I.toLowerCase().includes(r.value.toLowerCase()));return c&&u&&d});return s&&s.value&&(i=i.slice().sort((o,l)=>s.value==="Más reciente"?new Date(l.timestamp)-new Date(o.timestamp):new Date(o.timestamp)-new Date(l.timestamp))),i})}const L1={class:"flex flex-col items-center pb-40 md:pb-0 w-full max-w-full overflow-x-hidden bg-[var(--color-grey-page)] dark:bg-[var(--color-black)]"},F1={__name:"NotesBody",setup(n){const{notes:e,loadNotes:t,addNote:r,updateNote:s,deleteNote:i}=md(),o=ye(!1),l=ye({}),c=ye(null),u=ye("Todas"),d=ye("Todas"),p=ye(""),m=ye("Más reciente"),I=ye(!1),R=M1(e,u,d,p,m),k=dr(()=>I.value?R.value.filter(_=>_.favorita):R.value);function x({priority:_,tag:oe}){u.value=_,d.value=oe}function B(_){p.value=_}function z(_){m.value=_}function q(_){I.value=_}function $(_=null,oe=null){_?(l.value={..._},c.value=_.id):(l.value={title:"",etiquetas:"",description:"",priority:"Sin Prioridad",timestamp:"",favorita:!1},c.value=null),o.value=!0}function Z(){o.value=!1}function ee({note:_,index:oe}){oe!=null?(s(_,oe),Z()):r(_).then(()=>Z()).catch(()=>{})}function b(_){i(_)}function y(_){const oe=e.value.find(Oe=>Oe.id===_);oe&&$(oe,_)}function v(_){const oe=e.value.find(Oe=>Oe.id===_);if(oe){const Oe={...oe,favorita:!oe.favorita};s(Oe,_)}}const w=ye(!1),A=ye(null);function T(_){A.value=_,w.value=!0}return ni(t),(_,oe)=>(me(),Ae("div",L1,[we(Lx),j("button",{onClick:oe[0]||(oe[0]=Oe=>$(null,null)),class:"fixed bottom-24 right-6 md:bottom-24 md:right-16 rounded-full w-12 h-12 md:w-16 md:h-16 bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)] text-[var(--color-black)] dark:text-[var(--color-white)] flex items-center justify-center gap-2 shadow-lg z-50"},[(me(),Ae("svg",{class:At(["w-6 h-6 md:w-7 md:h-7","text-[var(--color-black)] dark:text-[var(--color-white)]"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},oe[4]||(oe[4]=[j("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M12 5v14m7-7H5"},null,-1)])))]),we(n1,{isModalOpen:o.value,noteData:l.value,editIndex:c.value,onClose:Z,onSaveSuccess:ee},null,8,["isModalOpen","noteData","editIndex"]),we(p1,{notes:Ct(e),filteredNotesCount:k.value.length,totalNotesCount:Ct(e).length,onFilter:x,onSearch:B,onOrder:z,onToggleFavorites:q},null,8,["notes","filteredNotesCount","totalNotesCount"]),we(S1,{filteredNotes:k.value,onShowDetail:T,onDelete:b,onEdit:y,onToggleFavorite:v},null,8,["filteredNotes"]),w.value?(me(),Vs(O1,{key:0,note:A.value,onClose:oe[1]||(oe[1]=Oe=>w.value=!1),onEdit:oe[2]||(oe[2]=Oe=>y(A.value.id)),onDelete:oe[3]||(oe[3]=Oe=>b(A.value.id))},null,8,["note"])):ri("",!0)]))}},U1={class:"min-h-screen flex flex-col"},B1={class:"flex-1 flex flex-col"},$1={__name:"App",setup(n){return(e,t)=>(me(),Ae("div",U1,[we(wx),j("main",B1,[we(F1)]),we(Px)]))}};gw($1).mount("#app");
