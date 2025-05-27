(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Hu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ve={},Cs=[],on=()=>{},$I=()=>!1,Rl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Gu=n=>n.startsWith("onUpdate:"),Ze=Object.assign,Wu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},jI=Object.prototype.hasOwnProperty,Ae=(n,e)=>jI.call(n,e),ie=Array.isArray,xs=n=>So(n)==="[object Map]",Pl=n=>So(n)==="[object Set]",uf=n=>So(n)==="[object Date]",fe=n=>typeof n=="function",qe=n=>typeof n=="string",un=n=>typeof n=="symbol",De=n=>n!==null&&typeof n=="object",Gm=n=>(De(n)||fe(n))&&fe(n.then)&&fe(n.catch),Wm=Object.prototype.toString,So=n=>Wm.call(n),qI=n=>So(n).slice(8,-1),Qm=n=>So(n)==="[object Object]",Qu=n=>qe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$i=Hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},zI=/-(\w)/g,ur=Cl(n=>n.replace(zI,(e,t)=>t?t.toUpperCase():"")),KI=/\B([A-Z])/g,_r=Cl(n=>n.replace(KI,"-$1").toLowerCase()),Jm=Cl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sc=Cl(n=>n?`on${Jm(n)}`:""),rr=(n,e)=>!Object.is(n,e),Ta=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ym=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Jc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},HI=n=>{const e=qe(n)?Number(n):NaN;return isNaN(e)?n:e};let hf;const xl=()=>hf||(hf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ju(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=qe(r)?JI(r):Ju(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(n)||De(n))return n}const GI=/;(?![^(]*\))/g,WI=/:([^]+)/,QI=/\/\*[^]*?\*\//g;function JI(n){const e={};return n.replace(QI,"").split(GI).forEach(t=>{if(t){const r=t.split(WI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xt(n){let e="";if(qe(n))e=n;else if(ie(n))for(let t=0;t<n.length;t++){const r=xt(n[t]);r&&(e+=r+" ")}else if(De(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const YI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",XI=Hu(YI);function Xm(n){return!!n||n===""}function ZI(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=kl(n[r],e[r]);return t}function kl(n,e){if(n===e)return!0;let t=uf(n),r=uf(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=un(n),r=un(e),t||r)return n===e;if(t=ie(n),r=ie(e),t||r)return t&&r?ZI(n,e):!1;if(t=De(n),r=De(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!kl(n[o],e[o]))return!1}}return String(n)===String(e)}function Zm(n,e){return n.findIndex(t=>kl(t,e))}const eg=n=>!!(n&&n.__v_isRef===!0),Et=n=>qe(n)?n:n==null?"":ie(n)||De(n)&&(n.toString===Wm||!fe(n.toString))?eg(n)?Et(n.value):JSON.stringify(n,tg,2):String(n),tg=(n,e)=>eg(e)?tg(n,e.value):xs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Rc(r,i)+" =>"]=s,t),{})}:Pl(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Rc(t))}:un(e)?Rc(e):De(e)&&!ie(e)&&!Qm(e)?String(e):e,Rc=(n,e="")=>{var t;return un(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class eE{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=bt;try{return bt=this,e()}finally{bt=t}}}on(){++this._on===1&&(this.prevScope=bt,bt=this)}off(){this._on>0&&--this._on===0&&(bt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function tE(){return bt}let Ne;const Pc=new WeakSet;class ng{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&bt.active&&bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pc.has(this)&&(Pc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,df(this),ig(this);const e=Ne,t=Wt;Ne=this,Wt=!0;try{return this.fn()}finally{og(this),Ne=e,Wt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Zu(e);this.deps=this.depsTail=void 0,df(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yc(this)&&this.run()}get dirty(){return Yc(this)}}let rg=0,ji,qi;function sg(n,e=!1){if(n.flags|=8,e){n.next=qi,qi=n;return}n.next=ji,ji=n}function Yu(){rg++}function Xu(){if(--rg>0)return;if(qi){let e=qi;for(qi=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ji;){let e=ji;for(ji=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function ig(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function og(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Zu(r),nE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Yc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ag(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ag(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ro)||(n.globalVersion=ro,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Yc(n))))return;n.flags|=2;const e=n.dep,t=Ne,r=Wt;Ne=n,Wt=!0;try{ig(n);const s=n.fn(n._value);(e.version===0||rr(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=t,Wt=r,og(n),n.flags&=-3}}function Zu(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Zu(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function nE(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Wt=!0;const lg=[];function Rn(){lg.push(Wt),Wt=!1}function Pn(){const n=lg.pop();Wt=n===void 0?!0:n}function df(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ne;Ne=void 0;try{e()}finally{Ne=t}}}let ro=0;class rE{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class eh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ne||!Wt||Ne===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ne)t=this.activeLink=new rE(Ne,this),Ne.deps?(t.prevDep=Ne.depsTail,Ne.depsTail.nextDep=t,Ne.depsTail=t):Ne.deps=Ne.depsTail=t,cg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Ne.depsTail,t.nextDep=void 0,Ne.depsTail.nextDep=t,Ne.depsTail=t,Ne.deps===t&&(Ne.deps=r)}return t}trigger(e){this.version++,ro++,this.notify(e)}notify(e){Yu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Xu()}}}function cg(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)cg(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Xc=new WeakMap,jr=Symbol(""),Zc=Symbol(""),so=Symbol("");function dt(n,e,t){if(Wt&&Ne){let r=Xc.get(n);r||Xc.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new eh),s.map=r,s.key=t),s.track()}}function In(n,e,t,r,s,i){const o=Xc.get(n);if(!o){ro++;return}const l=c=>{c&&c.trigger()};if(Yu(),e==="clear")o.forEach(l);else{const c=ie(n),u=c&&Qu(t);if(c&&t==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===so||!un(m)&&m>=d)&&l(p)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),u&&l(o.get(so)),e){case"add":c?u&&l(o.get("length")):(l(o.get(jr)),xs(n)&&l(o.get(Zc)));break;case"delete":c||(l(o.get(jr)),xs(n)&&l(o.get(Zc)));break;case"set":xs(n)&&l(o.get(jr));break}}Xu()}function fs(n){const e=be(n);return e===n?e:(dt(e,"iterate",so),jt(n)?e:e.map(it))}function Vl(n){return dt(n=be(n),"iterate",so),n}const sE={__proto__:null,[Symbol.iterator](){return Cc(this,Symbol.iterator,it)},concat(...n){return fs(this).concat(...n.map(e=>ie(e)?fs(e):e))},entries(){return Cc(this,"entries",n=>(n[1]=it(n[1]),n))},every(n,e){return yn(this,"every",n,e,void 0,arguments)},filter(n,e){return yn(this,"filter",n,e,t=>t.map(it),arguments)},find(n,e){return yn(this,"find",n,e,it,arguments)},findIndex(n,e){return yn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return yn(this,"findLast",n,e,it,arguments)},findLastIndex(n,e){return yn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return yn(this,"forEach",n,e,void 0,arguments)},includes(...n){return xc(this,"includes",n)},indexOf(...n){return xc(this,"indexOf",n)},join(n){return fs(this).join(n)},lastIndexOf(...n){return xc(this,"lastIndexOf",n)},map(n,e){return yn(this,"map",n,e,void 0,arguments)},pop(){return Si(this,"pop")},push(...n){return Si(this,"push",n)},reduce(n,...e){return ff(this,"reduce",n,e)},reduceRight(n,...e){return ff(this,"reduceRight",n,e)},shift(){return Si(this,"shift")},some(n,e){return yn(this,"some",n,e,void 0,arguments)},splice(...n){return Si(this,"splice",n)},toReversed(){return fs(this).toReversed()},toSorted(n){return fs(this).toSorted(n)},toSpliced(...n){return fs(this).toSpliced(...n)},unshift(...n){return Si(this,"unshift",n)},values(){return Cc(this,"values",it)}};function Cc(n,e,t){const r=Vl(n),s=r[e]();return r!==n&&!jt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const iE=Array.prototype;function yn(n,e,t,r,s,i){const o=Vl(n),l=o!==n&&!jt(n),c=o[e];if(c!==iE[e]){const p=c.apply(n,i);return l?it(p):p}let u=t;o!==n&&(l?u=function(p,m){return t.call(this,it(p),m,n)}:t.length>2&&(u=function(p,m){return t.call(this,p,m,n)}));const d=c.call(o,u,r);return l&&s?s(d):d}function ff(n,e,t,r){const s=Vl(n);let i=t;return s!==n&&(jt(n)?t.length>3&&(i=function(o,l,c){return t.call(this,o,l,c,n)}):i=function(o,l,c){return t.call(this,o,it(l),c,n)}),s[e](i,...r)}function xc(n,e,t){const r=be(n);dt(r,"iterate",so);const s=r[e](...t);return(s===-1||s===!1)&&sh(t[0])?(t[0]=be(t[0]),r[e](...t)):s}function Si(n,e,t=[]){Rn(),Yu();const r=be(n)[e].apply(n,t);return Xu(),Pn(),r}const oE=Hu("__proto__,__v_isRef,__isVue"),ug=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(un));function aE(n){un(n)||(n=String(n));const e=be(this);return dt(e,"has",n),e.hasOwnProperty(n)}class hg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?_E:mg:i?pg:fg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let c;if(o&&(c=sE[t]))return c;if(t==="hasOwnProperty")return aE}const l=Reflect.get(e,t,mt(e)?e:r);return(un(t)?ug.has(t):oE(t))||(s||dt(e,"get",t),i)?l:mt(l)?o&&Qu(t)?l:l.value:De(l)?s?gg(l):nh(l):l}}class dg extends hg{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const c=hr(i);if(!jt(r)&&!hr(r)&&(i=be(i),r=be(r)),!ie(e)&&mt(i)&&!mt(r))return c?!1:(i.value=r,!0)}const o=ie(e)&&Qu(t)?Number(t)<e.length:Ae(e,t),l=Reflect.set(e,t,r,mt(e)?e:s);return e===be(s)&&(o?rr(r,i)&&In(e,"set",t,r):In(e,"add",t,r)),l}deleteProperty(e,t){const r=Ae(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&In(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!un(t)||!ug.has(t))&&dt(e,"has",t),r}ownKeys(e){return dt(e,"iterate",ie(e)?"length":jr),Reflect.ownKeys(e)}}class lE extends hg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const cE=new dg,uE=new lE,hE=new dg(!0);const eu=n=>n,la=n=>Reflect.getPrototypeOf(n);function dE(n,e,t){return function(...r){const s=this.__v_raw,i=be(s),o=xs(i),l=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=s[n](...r),d=t?eu:e?za:it;return!e&&dt(i,"iterate",c?Zc:jr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function ca(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function fE(n,e){const t={get(s){const i=this.__v_raw,o=be(i),l=be(s);n||(rr(s,l)&&dt(o,"get",s),dt(o,"get",l));const{has:c}=la(o),u=e?eu:n?za:it;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!n&&dt(be(s),"iterate",jr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=be(i),l=be(s);return n||(rr(s,l)&&dt(o,"has",s),dt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=be(l),u=e?eu:n?za:it;return!n&&dt(c,"iterate",jr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return Ze(t,n?{add:ca("add"),set:ca("set"),delete:ca("delete"),clear:ca("clear")}:{add(s){!e&&!jt(s)&&!hr(s)&&(s=be(s));const i=be(this);return la(i).has.call(i,s)||(i.add(s),In(i,"add",s,s)),this},set(s,i){!e&&!jt(i)&&!hr(i)&&(i=be(i));const o=be(this),{has:l,get:c}=la(o);let u=l.call(o,s);u||(s=be(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?rr(i,d)&&In(o,"set",s,i):In(o,"add",s,i),this},delete(s){const i=be(this),{has:o,get:l}=la(i);let c=o.call(i,s);c||(s=be(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&In(i,"delete",s,void 0),u},clear(){const s=be(this),i=s.size!==0,o=s.clear();return i&&In(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=dE(s,n,e)}),t}function th(n,e){const t=fE(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ae(t,s)&&s in r?t:r,s,i)}const pE={get:th(!1,!1)},mE={get:th(!1,!0)},gE={get:th(!0,!1)};const fg=new WeakMap,pg=new WeakMap,mg=new WeakMap,_E=new WeakMap;function yE(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vE(n){return n.__v_skip||!Object.isExtensible(n)?0:yE(qI(n))}function nh(n){return hr(n)?n:rh(n,!1,cE,pE,fg)}function IE(n){return rh(n,!1,hE,mE,pg)}function gg(n){return rh(n,!0,uE,gE,mg)}function rh(n,e,t,r,s){if(!De(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=vE(n);if(i===0)return n;const o=s.get(n);if(o)return o;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function ks(n){return hr(n)?ks(n.__v_raw):!!(n&&n.__v_isReactive)}function hr(n){return!!(n&&n.__v_isReadonly)}function jt(n){return!!(n&&n.__v_isShallow)}function sh(n){return n?!!n.__v_raw:!1}function be(n){const e=n&&n.__v_raw;return e?be(e):n}function EE(n){return!Ae(n,"__v_skip")&&Object.isExtensible(n)&&Ym(n,"__v_skip",!0),n}const it=n=>De(n)?nh(n):n,za=n=>De(n)?gg(n):n;function mt(n){return n?n.__v_isRef===!0:!1}function Ie(n){return TE(n,!1)}function TE(n,e){return mt(n)?n:new wE(n,e)}class wE{constructor(e,t){this.dep=new eh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:be(e),this._value=t?e:it(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||jt(e)||hr(e);e=r?e:be(e),rr(e,t)&&(this._rawValue=e,this._value=r?e:it(e),this.dep.trigger())}}function Pt(n){return mt(n)?n.value:n}const bE={get:(n,e,t)=>e==="__v_raw"?n:Pt(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return mt(s)&&!mt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function _g(n){return ks(n)?n:new Proxy(n,bE)}class AE{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new eh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ro-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return sg(this,!0),!0}get value(){const e=this.dep.track();return ag(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function SE(n,e,t=!1){let r,s;return fe(n)?r=n:(r=n.get,s=n.set),new AE(r,s,t)}const ua={},Ka=new WeakMap;let Vr;function RE(n,e=!1,t=Vr){if(t){let r=Ka.get(t);r||Ka.set(t,r=[]),r.push(n)}}function PE(n,e,t=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=t,u=$=>s?$:jt($)||s===!1||s===0?En($,1):En($);let d,p,m,I,R=!1,k=!1;if(mt(n)?(p=()=>n.value,R=jt(n)):ks(n)?(p=()=>u(n),R=!0):ie(n)?(k=!0,R=n.some($=>ks($)||jt($)),p=()=>n.map($=>{if(mt($))return $.value;if(ks($))return u($);if(fe($))return c?c($,2):$()})):fe(n)?e?p=c?()=>c(n,2):n:p=()=>{if(m){Rn();try{m()}finally{Pn()}}const $=Vr;Vr=d;try{return c?c(n,3,[I]):n(I)}finally{Vr=$}}:p=on,e&&s){const $=p,Z=s===!0?1/0:s;p=()=>En($(),Z)}const x=tE(),B=()=>{d.stop(),x&&x.active&&Wu(x.effects,d)};if(i&&e){const $=e;e=(...Z)=>{$(...Z),B()}}let q=k?new Array(n.length).fill(ua):ua;const j=$=>{if(!(!(d.flags&1)||!d.dirty&&!$))if(e){const Z=d.run();if(s||R||(k?Z.some((ee,b)=>rr(ee,q[b])):rr(Z,q))){m&&m();const ee=Vr;Vr=d;try{const b=[Z,q===ua?void 0:k&&q[0]===ua?[]:q,I];c?c(e,3,b):e(...b),q=Z}finally{Vr=ee}}}else d.run()};return l&&l(j),d=new ng(p),d.scheduler=o?()=>o(j,!1):j,I=$=>RE($,!1,d),m=d.onStop=()=>{const $=Ka.get(d);if($){if(c)c($,4);else for(const Z of $)Z();Ka.delete(d)}},e?r?j(!0):q=d.run():o?o(j.bind(null,!0),!0):d.run(),B.pause=d.pause.bind(d),B.resume=d.resume.bind(d),B.stop=B,B}function En(n,e=1/0,t){if(e<=0||!De(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,mt(n))En(n.value,e,t);else if(ie(n))for(let r=0;r<n.length;r++)En(n[r],e,t);else if(Pl(n)||xs(n))n.forEach(r=>{En(r,e,t)});else if(Qm(n)){for(const r in n)En(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&En(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ro(n,e,t,r){try{return r?n(...r):n()}catch(s){Dl(s,e,t)}}function Qt(n,e,t,r){if(fe(n)){const s=Ro(n,e,t,r);return s&&Gm(s)&&s.catch(i=>{Dl(i,e,t)}),s}if(ie(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Qt(n[i],e,t,r));return s}}function Dl(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,c,u)===!1)return}l=l.parent}if(i){Rn(),Ro(i,null,10,[n,c,u]),Pn();return}}CE(n,t,s,r,o)}function CE(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const vt=[];let en=-1;const Vs=[];let Qn=null,Es=0;const yg=Promise.resolve();let Ha=null;function vg(n){const e=Ha||yg;return n?e.then(this?n.bind(this):n):e}function xE(n){let e=en+1,t=vt.length;for(;e<t;){const r=e+t>>>1,s=vt[r],i=io(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function ih(n){if(!(n.flags&1)){const e=io(n),t=vt[vt.length-1];!t||!(n.flags&2)&&e>=io(t)?vt.push(n):vt.splice(xE(e),0,n),n.flags|=1,Ig()}}function Ig(){Ha||(Ha=yg.then(Tg))}function kE(n){ie(n)?Vs.push(...n):Qn&&n.id===-1?Qn.splice(Es+1,0,n):n.flags&1||(Vs.push(n),n.flags|=1),Ig()}function pf(n,e,t=en+1){for(;t<vt.length;t++){const r=vt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;vt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Eg(n){if(Vs.length){const e=[...new Set(Vs)].sort((t,r)=>io(t)-io(r));if(Vs.length=0,Qn){Qn.push(...e);return}for(Qn=e,Es=0;Es<Qn.length;Es++){const t=Qn[Es];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Qn=null,Es=0}}const io=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Tg(n){try{for(en=0;en<vt.length;en++){const e=vt[en];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ro(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;en<vt.length;en++){const e=vt[en];e&&(e.flags&=-2)}en=-1,vt.length=0,Eg(),Ha=null,(vt.length||Vs.length)&&Tg()}}let Vt=null,wg=null;function Ga(n){const e=Vt;return Vt=n,wg=n&&n.type.__scopeId||null,e}function bg(n,e=Vt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&wf(-1);const i=Ga(e);let o;try{o=n(...s)}finally{Ga(i),r._d&&wf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wa(n,e){if(Vt===null)return n;const t=Ll(Vt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ve]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&En(o),r.push({dir:i,instance:t,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function Pr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Rn(),Qt(c,t,8,[n.el,l,n,e]),Pn())}}const VE=Symbol("_vte"),DE=n=>n.__isTeleport,ps=Symbol("_leaveCb"),ha=Symbol("_enterCb");function NE(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ri(()=>{n.isMounted=!0}),oh(()=>{n.isUnmounting=!0}),n}const Ut=[Function,Array],OE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ut,onEnter:Ut,onAfterEnter:Ut,onEnterCancelled:Ut,onBeforeLeave:Ut,onLeave:Ut,onAfterLeave:Ut,onLeaveCancelled:Ut,onBeforeAppear:Ut,onAppear:Ut,onAfterAppear:Ut,onAppearCancelled:Ut};function ME(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function tu(n,e,t,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:I,onAfterLeave:R,onLeaveCancelled:k,onBeforeAppear:x,onAppear:B,onAfterAppear:q,onAppearCancelled:j}=e,$=String(n.key),Z=ME(t,n),ee=(v,w)=>{v&&Qt(v,r,9,w)},b=(v,w)=>{const A=w[1];ee(v,w),ie(v)?v.every(T=>T.length<=1)&&A():v.length<=1&&A()},y={mode:o,persisted:l,beforeEnter(v){let w=c;if(!t.isMounted)if(i)w=x||c;else return;v[ps]&&v[ps](!0);const A=Z[$];A&&Ts(n,A)&&A.el[ps]&&A.el[ps](),ee(w,[v])},enter(v){let w=u,A=d,T=p;if(!t.isMounted)if(i)w=B||u,A=q||d,T=j||p;else return;let _=!1;const oe=v[ha]=Oe=>{_||(_=!0,Oe?ee(T,[v]):ee(A,[v]),y.delayedLeave&&y.delayedLeave(),v[ha]=void 0)};w?b(w,[v,oe]):oe()},leave(v,w){const A=String(n.key);if(v[ha]&&v[ha](!0),t.isUnmounting)return w();ee(m,[v]);let T=!1;const _=v[ps]=oe=>{T||(T=!0,w(),oe?ee(k,[v]):ee(R,[v]),v[ps]=void 0,Z[A]===n&&delete Z[A])};Z[A]=n,I?b(I,[v,_]):_()},clone(v){return tu(v,e,t,r)}};return y}function oo(n,e){n.shapeFlag&6&&n.component?(n.transition=e,oo(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ag(n,e=!1,t){let r=[],s=0;for(let i=0;i<n.length;i++){let o=n[i];const l=t==null?o.key:String(t)+String(o.key!=null?o.key:i);o.type===kt?(o.patchFlag&128&&s++,r=r.concat(Ag(o.children,e,l))):(e||o.type!==Cn)&&r.push(l!=null?Gr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Sg(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Wa(n,e,t,r,s=!1){if(ie(n)){n.forEach((R,k)=>Wa(R,e&&(ie(e)?e[k]:e),t,r,s));return}if(zi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Wa(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Ll(r.component):r.el,o=s?null:i,{i:l,r:c}=n,u=e&&e.r,d=l.refs===Ve?l.refs={}:l.refs,p=l.setupState,m=be(p),I=p===Ve?()=>!1:R=>Ae(m,R);if(u!=null&&u!==c&&(qe(u)?(d[u]=null,I(u)&&(p[u]=null)):mt(u)&&(u.value=null)),fe(c))Ro(c,l,12,[o,d]);else{const R=qe(c),k=mt(c);if(R||k){const x=()=>{if(n.f){const B=R?I(c)?p[c]:d[c]:c.value;s?ie(B)&&Wu(B,i):ie(B)?B.includes(i)||B.push(i):R?(d[c]=[i],I(c)&&(p[c]=d[c])):(c.value=[i],n.k&&(d[n.k]=c.value))}else R?(d[c]=o,I(c)&&(p[c]=o)):k&&(c.value=o,n.k&&(d[n.k]=o))};o?(x.id=-1,Rt(x,t)):x()}}}xl().requestIdleCallback;xl().cancelIdleCallback;const zi=n=>!!n.type.__asyncLoader,Rg=n=>n.type.__isKeepAlive;function LE(n,e){Pg(n,"a",e)}function FE(n,e){Pg(n,"da",e)}function Pg(n,e,t=ft){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Nl(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Rg(s.parent.vnode)&&UE(r,e,t,s),s=s.parent}}function UE(n,e,t,r){const s=Nl(e,n,r,!0);xg(()=>{Wu(r[e],s)},t)}function Nl(n,e,t=ft,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{Rn();const l=Po(t),c=Qt(e,t,n,o);return l(),Pn(),c});return r?s.unshift(i):s.push(i),i}}const Nn=n=>(e,t=ft)=>{(!lo||n==="sp")&&Nl(n,(...r)=>e(...r),t)},BE=Nn("bm"),ri=Nn("m"),$E=Nn("bu"),Cg=Nn("u"),oh=Nn("bum"),xg=Nn("um"),jE=Nn("sp"),qE=Nn("rtg"),zE=Nn("rtc");function KE(n,e=ft){Nl("ec",n,e)}const HE=Symbol.for("v-ndc");function kg(n,e,t,r){let s;const i=t,o=ie(n);if(o||qe(n)){const l=o&&ks(n);let c=!1,u=!1;l&&(c=!jt(n),u=hr(n),n=Vl(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(c?u?za(it(n[d])):it(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(De(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(n[d],d,c,i)}}else s=[];return s}const nu=n=>n?Jg(n)?Ll(n):nu(n.parent):null,Ki=Ze(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>nu(n.parent),$root:n=>nu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Dg(n),$forceUpdate:n=>n.f||(n.f=()=>{ih(n.update)}),$nextTick:n=>n.n||(n.n=vg.bind(n.proxy)),$watch:n=>mT.bind(n)}),kc=(n,e)=>n!==Ve&&!n.__isScriptSetup&&Ae(n,e),GE={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=n;let u;if(e[0]!=="$"){const I=o[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(kc(r,e))return o[e]=1,r[e];if(s!==Ve&&Ae(s,e))return o[e]=2,s[e];if((u=n.propsOptions[0])&&Ae(u,e))return o[e]=3,i[e];if(t!==Ve&&Ae(t,e))return o[e]=4,t[e];ru&&(o[e]=0)}}const d=Ki[e];let p,m;if(d)return e==="$attrs"&&dt(n.attrs,"get",""),d(n);if((p=l.__cssModules)&&(p=p[e]))return p;if(t!==Ve&&Ae(t,e))return o[e]=4,t[e];if(m=c.config.globalProperties,Ae(m,e))return m[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return kc(s,e)?(s[e]=t,!0):r!==Ve&&Ae(r,e)?(r[e]=t,!0):Ae(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!t[o]||n!==Ve&&Ae(n,o)||kc(e,o)||(l=i[0])&&Ae(l,o)||Ae(r,o)||Ae(Ki,o)||Ae(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ae(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function mf(n){return ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ru=!0;function WE(n){const e=Dg(n),t=n.proxy,r=n.ctx;ru=!1,e.beforeCreate&&gf(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:I,updated:R,activated:k,deactivated:x,beforeDestroy:B,beforeUnmount:q,destroyed:j,unmounted:$,render:Z,renderTracked:ee,renderTriggered:b,errorCaptured:y,serverPrefetch:v,expose:w,inheritAttrs:A,components:T,directives:_,filters:oe}=e;if(u&&QE(u,r,null),o)for(const Re in o){const Ee=o[Re];fe(Ee)&&(r[Re]=Ee.bind(t))}if(s){const Re=s.call(t,t);De(Re)&&(n.data=nh(Re))}if(ru=!0,i)for(const Re in i){const Ee=i[Re],zt=fe(Ee)?Ee.bind(t,t):fe(Ee.get)?Ee.get.bind(t,t):on,Er=!fe(Ee)&&fe(Ee.set)?Ee.set.bind(t):on,pn=os({get:zt,set:Er});Object.defineProperty(r,Re,{enumerable:!0,configurable:!0,get:()=>pn.value,set:We=>pn.value=We})}if(l)for(const Re in l)Vg(l[Re],r,t,Re);if(c){const Re=fe(c)?c.call(t):c;Reflect.ownKeys(Re).forEach(Ee=>{tT(Ee,Re[Ee])})}d&&gf(d,n,"c");function ze(Re,Ee){ie(Ee)?Ee.forEach(zt=>Re(zt.bind(t))):Ee&&Re(Ee.bind(t))}if(ze(BE,p),ze(ri,m),ze($E,I),ze(Cg,R),ze(LE,k),ze(FE,x),ze(KE,y),ze(zE,ee),ze(qE,b),ze(oh,q),ze(xg,$),ze(jE,v),ie(w))if(w.length){const Re=n.exposed||(n.exposed={});w.forEach(Ee=>{Object.defineProperty(Re,Ee,{get:()=>t[Ee],set:zt=>t[Ee]=zt})})}else n.exposed||(n.exposed={});Z&&n.render===on&&(n.render=Z),A!=null&&(n.inheritAttrs=A),T&&(n.components=T),_&&(n.directives=_),v&&Sg(n)}function QE(n,e,t=on){ie(n)&&(n=su(n));for(const r in n){const s=n[r];let i;De(s)?"default"in s?i=ba(s.from||r,s.default,!0):i=ba(s.from||r):i=ba(s),mt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function gf(n,e,t){Qt(ie(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Vg(n,e,t,r){let s=r.includes(".")?Kg(t,r):()=>t[r];if(qe(n)){const i=e[n];fe(i)&&Ns(s,i)}else if(fe(n))Ns(s,n.bind(t));else if(De(n))if(ie(n))n.forEach(i=>Vg(i,e,t,r));else{const i=fe(n.handler)?n.handler.bind(t):e[n.handler];fe(i)&&Ns(s,i,n)}}function Dg(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(u=>Qa(c,u,o,!0)),Qa(c,e,o)),De(e)&&i.set(e,c),c}function Qa(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Qa(n,i,t,!0),s&&s.forEach(o=>Qa(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const l=JE[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const JE={data:_f,props:yf,emits:yf,methods:Di,computed:Di,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Di,directives:Di,watch:XE,provide:_f,inject:YE};function _f(n,e){return e?n?function(){return Ze(fe(n)?n.call(this,this):n,fe(e)?e.call(this,this):e)}:e:n}function YE(n,e){return Di(su(n),su(e))}function su(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function yt(n,e){return n?[...new Set([].concat(n,e))]:e}function Di(n,e){return n?Ze(Object.create(null),n,e):e}function yf(n,e){return n?ie(n)&&ie(e)?[...new Set([...n,...e])]:Ze(Object.create(null),mf(n),mf(e??{})):e}function XE(n,e){if(!n)return e;if(!e)return n;const t=Ze(Object.create(null),n);for(const r in e)t[r]=yt(n[r],e[r]);return t}function Ng(){return{app:null,config:{isNativeTag:$I,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ZE=0;function eT(n,e){return function(r,s=null){fe(r)||(r=Ze({},r)),s!=null&&!De(s)&&(s=null);const i=Ng(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:ZE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:FT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&fe(d.install)?(o.add(d),d.install(u,...p)):fe(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const I=u._ceVNode||we(r,s);return I.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),n(I,d,m),c=!0,u._container=d,d.__vue_app__=u,Ll(I.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Qt(l,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Ds;Ds=u;try{return d()}finally{Ds=p}}};return u}}let Ds=null;function tT(n,e){if(ft){let t=ft.provides;const r=ft.parent&&ft.parent.provides;r===t&&(t=ft.provides=Object.create(r)),t[n]=e}}function ba(n,e,t=!1){const r=ft||Vt;if(r||Ds){const s=Ds?Ds._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&fe(e)?e.call(r&&r.proxy):e}}const Og={},Mg=()=>Object.create(Og),Lg=n=>Object.getPrototypeOf(n)===Og;function nT(n,e,t,r=!1){const s={},i=Mg();n.propsDefaults=Object.create(null),Fg(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:IE(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function rT(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,l=be(s),[c]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Ol(n.emitsOptions,m))continue;const I=e[m];if(c)if(Ae(i,m))I!==i[m]&&(i[m]=I,u=!0);else{const R=ur(m);s[R]=iu(c,l,R,I,n,!1)}else I!==i[m]&&(i[m]=I,u=!0)}}}else{Fg(n,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Ae(e,p)&&((d=_r(p))===p||!Ae(e,d)))&&(c?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=iu(c,l,p,void 0,n,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ae(e,p))&&(delete i[p],u=!0)}u&&In(n.attrs,"set","")}function Fg(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,l;if(e)for(let c in e){if($i(c))continue;const u=e[c];let d;s&&Ae(s,d=ur(c))?!i||!i.includes(d)?t[d]=u:(l||(l={}))[d]=u:Ol(n.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=be(t),u=l||Ve;for(let d=0;d<i.length;d++){const p=i[d];t[p]=iu(s,c,p,u[p],n,!Ae(u,p))}}return o}function iu(n,e,t,r,s,i){const o=n[t];if(o!=null){const l=Ae(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=s;if(t in u)r=u[t];else{const d=Po(s);r=u[t]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(t,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===_r(t))&&(r=!0))}return r}const sT=new WeakMap;function Ug(n,e,t=!1){const r=t?sT:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},l=[];let c=!1;if(!fe(n)){const d=p=>{c=!0;const[m,I]=Ug(p,e,!0);Ze(o,m),I&&l.push(...I)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!c)return De(n)&&r.set(n,Cs),Cs;if(ie(i))for(let d=0;d<i.length;d++){const p=ur(i[d]);vf(p)&&(o[p]=Ve)}else if(i)for(const d in i){const p=ur(d);if(vf(p)){const m=i[d],I=o[p]=ie(m)||fe(m)?{type:m}:Ze({},m),R=I.type;let k=!1,x=!0;if(ie(R))for(let B=0;B<R.length;++B){const q=R[B],j=fe(q)&&q.name;if(j==="Boolean"){k=!0;break}else j==="String"&&(x=!1)}else k=fe(R)&&R.name==="Boolean";I[0]=k,I[1]=x,(k||Ae(I,"default"))&&l.push(p)}}const u=[o,l];return De(n)&&r.set(n,u),u}function vf(n){return n[0]!=="$"&&!$i(n)}const ah=n=>n[0]==="_"||n==="$stable",lh=n=>ie(n)?n.map(nn):[nn(n)],iT=(n,e,t)=>{if(e._n)return e;const r=bg((...s)=>lh(e(...s)),t);return r._c=!1,r},Bg=(n,e,t)=>{const r=n._ctx;for(const s in n){if(ah(s))continue;const i=n[s];if(fe(i))e[s]=iT(s,i,r);else if(i!=null){const o=lh(i);e[s]=()=>o}}},$g=(n,e)=>{const t=lh(e);n.slots.default=()=>t},jg=(n,e,t)=>{for(const r in e)(t||!ah(r))&&(n[r]=e[r])},oT=(n,e,t)=>{const r=n.slots=Mg();if(n.vnode.shapeFlag&32){const s=e._;s?(jg(r,e,t),t&&Ym(r,"_",s,!0)):Bg(e,r)}else e&&$g(n,e)},aT=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=Ve;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:jg(s,e,t):(i=!e.$stable,Bg(e,s)),o=e}else e&&($g(n,e),o={default:1});if(i)for(const l in s)!ah(l)&&o[l]==null&&delete s[l]},Rt=TT;function lT(n){return cT(n)}function cT(n,e){const t=xl();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:I=on,insertStaticContent:R}=n,k=(E,S,D,L=null,O=null,M=null,J=void 0,K=null,z=!!S.dynamicChildren)=>{if(E===S)return;E&&!Ts(E,S)&&(L=mn(E),We(E,O,M,!0),E=null),S.patchFlag===-2&&(z=!1,S.dynamicChildren=null);const{type:F,ref:re,shapeFlag:W}=S;switch(F){case Ml:x(E,S,D,L);break;case Cn:B(E,S,D,L);break;case Aa:E==null&&q(S,D,L,J);break;case kt:T(E,S,D,L,O,M,J,K,z);break;default:W&1?Z(E,S,D,L,O,M,J,K,z):W&6?_(E,S,D,L,O,M,J,K,z):(W&64||W&128)&&F.process(E,S,D,L,O,M,J,K,z,Yt)}re!=null&&O&&Wa(re,E&&E.ref,M,S||E,!S)},x=(E,S,D,L)=>{if(E==null)r(S.el=l(S.children),D,L);else{const O=S.el=E.el;S.children!==E.children&&u(O,S.children)}},B=(E,S,D,L)=>{E==null?r(S.el=c(S.children||""),D,L):S.el=E.el},q=(E,S,D,L)=>{[E.el,E.anchor]=R(E.children,S,D,L,E.el,E.anchor)},j=({el:E,anchor:S},D,L)=>{let O;for(;E&&E!==S;)O=m(E),r(E,D,L),E=O;r(S,D,L)},$=({el:E,anchor:S})=>{let D;for(;E&&E!==S;)D=m(E),s(E),E=D;s(S)},Z=(E,S,D,L,O,M,J,K,z)=>{S.type==="svg"?J="svg":S.type==="math"&&(J="mathml"),E==null?ee(S,D,L,O,M,J,K,z):v(E,S,O,M,J,K,z)},ee=(E,S,D,L,O,M,J,K)=>{let z,F;const{props:re,shapeFlag:W,transition:te,dirs:ce}=E;if(z=E.el=o(E.type,M,re&&re.is,re),W&8?d(z,E.children):W&16&&y(E.children,z,null,L,O,Vc(E,M),J,K),ce&&Pr(E,null,L,"created"),b(z,E,E.scopeId,J,L),re){for(const de in re)de!=="value"&&!$i(de)&&i(z,de,null,re[de],M,L);"value"in re&&i(z,"value",null,re.value,M),(F=re.onVnodeBeforeMount)&&Xt(F,L,E)}ce&&Pr(E,null,L,"beforeMount");const ae=uT(O,te);ae&&te.beforeEnter(z),r(z,S,D),((F=re&&re.onVnodeMounted)||ae||ce)&&Rt(()=>{F&&Xt(F,L,E),ae&&te.enter(z),ce&&Pr(E,null,L,"mounted")},O)},b=(E,S,D,L,O)=>{if(D&&I(E,D),L)for(let M=0;M<L.length;M++)I(E,L[M]);if(O){let M=O.subTree;if(S===M||Gg(M.type)&&(M.ssContent===S||M.ssFallback===S)){const J=O.vnode;b(E,J,J.scopeId,J.slotScopeIds,O.parent)}}},y=(E,S,D,L,O,M,J,K,z=0)=>{for(let F=z;F<E.length;F++){const re=E[F]=K?Jn(E[F]):nn(E[F]);k(null,re,S,D,L,O,M,J,K)}},v=(E,S,D,L,O,M,J)=>{const K=S.el=E.el;let{patchFlag:z,dynamicChildren:F,dirs:re}=S;z|=E.patchFlag&16;const W=E.props||Ve,te=S.props||Ve;let ce;if(D&&Cr(D,!1),(ce=te.onVnodeBeforeUpdate)&&Xt(ce,D,S,E),re&&Pr(S,E,D,"beforeUpdate"),D&&Cr(D,!0),(W.innerHTML&&te.innerHTML==null||W.textContent&&te.textContent==null)&&d(K,""),F?w(E.dynamicChildren,F,K,D,L,Vc(S,O),M):J||Ee(E,S,K,null,D,L,Vc(S,O),M,!1),z>0){if(z&16)A(K,W,te,D,O);else if(z&2&&W.class!==te.class&&i(K,"class",null,te.class,O),z&4&&i(K,"style",W.style,te.style,O),z&8){const ae=S.dynamicProps;for(let de=0;de<ae.length;de++){const ye=ae[de],ot=W[ye],et=te[ye];(et!==ot||ye==="value")&&i(K,ye,ot,et,O,D)}}z&1&&E.children!==S.children&&d(K,S.children)}else!J&&F==null&&A(K,W,te,D,O);((ce=te.onVnodeUpdated)||re)&&Rt(()=>{ce&&Xt(ce,D,S,E),re&&Pr(S,E,D,"updated")},L)},w=(E,S,D,L,O,M,J)=>{for(let K=0;K<S.length;K++){const z=E[K],F=S[K],re=z.el&&(z.type===kt||!Ts(z,F)||z.shapeFlag&70)?p(z.el):D;k(z,F,re,null,L,O,M,J,!0)}},A=(E,S,D,L,O)=>{if(S!==D){if(S!==Ve)for(const M in S)!$i(M)&&!(M in D)&&i(E,M,S[M],null,O,L);for(const M in D){if($i(M))continue;const J=D[M],K=S[M];J!==K&&M!=="value"&&i(E,M,K,J,O,L)}"value"in D&&i(E,"value",S.value,D.value,O)}},T=(E,S,D,L,O,M,J,K,z)=>{const F=S.el=E?E.el:l(""),re=S.anchor=E?E.anchor:l("");let{patchFlag:W,dynamicChildren:te,slotScopeIds:ce}=S;ce&&(K=K?K.concat(ce):ce),E==null?(r(F,D,L),r(re,D,L),y(S.children||[],D,re,O,M,J,K,z)):W>0&&W&64&&te&&E.dynamicChildren?(w(E.dynamicChildren,te,D,O,M,J,K),(S.key!=null||O&&S===O.subTree)&&qg(E,S,!0)):Ee(E,S,D,re,O,M,J,K,z)},_=(E,S,D,L,O,M,J,K,z)=>{S.slotScopeIds=K,E==null?S.shapeFlag&512?O.ctx.activate(S,D,L,J,z):oe(S,D,L,O,M,J,z):Oe(E,S,z)},oe=(E,S,D,L,O,M,J)=>{const K=E.component=kT(E,L,O);if(Rg(E)&&(K.ctx.renderer=Yt),DT(K,!1,J),K.asyncDep){if(O&&O.registerDep(K,ze,J),!E.el){const z=K.subTree=we(Cn);B(null,z,S,D)}}else ze(K,E,S,D,O,M,J)},Oe=(E,S,D)=>{const L=S.component=E.component;if(IT(E,S,D))if(L.asyncDep&&!L.asyncResolved){Re(L,S,D);return}else L.next=S,L.update();else S.el=E.el,L.vnode=S},ze=(E,S,D,L,O,M,J)=>{const K=()=>{if(E.isMounted){let{next:W,bu:te,u:ce,parent:ae,vnode:de}=E;{const at=zg(E);if(at){W&&(W.el=de.el,Re(E,W,J)),at.asyncDep.then(()=>{E.isUnmounted||K()});return}}let ye=W,ot;Cr(E,!1),W?(W.el=de.el,Re(E,W,J)):W=de,te&&Ta(te),(ot=W.props&&W.props.onVnodeBeforeUpdate)&&Xt(ot,ae,W,de),Cr(E,!0);const et=Ef(E),Lt=E.subTree;E.subTree=et,k(Lt,et,p(Lt.el),mn(Lt),E,O,M),W.el=et.el,ye===null&&ET(E,et.el),ce&&Rt(ce,O),(ot=W.props&&W.props.onVnodeUpdated)&&Rt(()=>Xt(ot,ae,W,de),O)}else{let W;const{el:te,props:ce}=S,{bm:ae,m:de,parent:ye,root:ot,type:et}=E,Lt=zi(S);Cr(E,!1),ae&&Ta(ae),!Lt&&(W=ce&&ce.onVnodeBeforeMount)&&Xt(W,ye,S),Cr(E,!0);{ot.ce&&ot.ce._injectChildStyle(et);const at=E.subTree=Ef(E);k(null,at,D,L,E,O,M),S.el=at.el}if(de&&Rt(de,O),!Lt&&(W=ce&&ce.onVnodeMounted)){const at=S;Rt(()=>Xt(W,ye,at),O)}(S.shapeFlag&256||ye&&zi(ye.vnode)&&ye.vnode.shapeFlag&256)&&E.a&&Rt(E.a,O),E.isMounted=!0,S=D=L=null}};E.scope.on();const z=E.effect=new ng(K);E.scope.off();const F=E.update=z.run.bind(z),re=E.job=z.runIfDirty.bind(z);re.i=E,re.id=E.uid,z.scheduler=()=>ih(re),Cr(E,!0),F()},Re=(E,S,D)=>{S.component=E;const L=E.vnode.props;E.vnode=S,E.next=null,rT(E,S.props,L,D),aT(E,S.children,D),Rn(),pf(E),Pn()},Ee=(E,S,D,L,O,M,J,K,z=!1)=>{const F=E&&E.children,re=E?E.shapeFlag:0,W=S.children,{patchFlag:te,shapeFlag:ce}=S;if(te>0){if(te&128){Er(F,W,D,L,O,M,J,K,z);return}else if(te&256){zt(F,W,D,L,O,M,J,K,z);return}}ce&8?(re&16&&wr(F,O,M),W!==F&&d(D,W)):re&16?ce&16?Er(F,W,D,L,O,M,J,K,z):wr(F,O,M,!0):(re&8&&d(D,""),ce&16&&y(W,D,L,O,M,J,K,z))},zt=(E,S,D,L,O,M,J,K,z)=>{E=E||Cs,S=S||Cs;const F=E.length,re=S.length,W=Math.min(F,re);let te;for(te=0;te<W;te++){const ce=S[te]=z?Jn(S[te]):nn(S[te]);k(E[te],ce,D,null,O,M,J,K,z)}F>re?wr(E,O,M,!0,!1,W):y(S,D,L,O,M,J,K,z,W)},Er=(E,S,D,L,O,M,J,K,z)=>{let F=0;const re=S.length;let W=E.length-1,te=re-1;for(;F<=W&&F<=te;){const ce=E[F],ae=S[F]=z?Jn(S[F]):nn(S[F]);if(Ts(ce,ae))k(ce,ae,D,null,O,M,J,K,z);else break;F++}for(;F<=W&&F<=te;){const ce=E[W],ae=S[te]=z?Jn(S[te]):nn(S[te]);if(Ts(ce,ae))k(ce,ae,D,null,O,M,J,K,z);else break;W--,te--}if(F>W){if(F<=te){const ce=te+1,ae=ce<re?S[ce].el:L;for(;F<=te;)k(null,S[F]=z?Jn(S[F]):nn(S[F]),D,ae,O,M,J,K,z),F++}}else if(F>te)for(;F<=W;)We(E[F],O,M,!0),F++;else{const ce=F,ae=F,de=new Map;for(F=ae;F<=te;F++){const tt=S[F]=z?Jn(S[F]):nn(S[F]);tt.key!=null&&de.set(tt.key,F)}let ye,ot=0;const et=te-ae+1;let Lt=!1,at=0;const Fn=new Array(et);for(F=0;F<et;F++)Fn[F]=0;for(F=ce;F<=W;F++){const tt=E[F];if(ot>=et){We(tt,O,M,!0);continue}let Ft;if(tt.key!=null)Ft=de.get(tt.key);else for(ye=ae;ye<=te;ye++)if(Fn[ye-ae]===0&&Ts(tt,S[ye])){Ft=ye;break}Ft===void 0?We(tt,O,M,!0):(Fn[Ft-ae]=F+1,Ft>=at?at=Ft:Lt=!0,k(tt,S[Ft],D,null,O,M,J,K,z),ot++)}const fi=Lt?hT(Fn):Cs;for(ye=fi.length-1,F=et-1;F>=0;F--){const tt=ae+F,Ft=S[tt],Ho=tt+1<re?S[tt+1].el:L;Fn[F]===0?k(null,Ft,D,Ho,O,M,J,K,z):Lt&&(ye<0||F!==fi[ye]?pn(Ft,D,Ho,2):ye--)}}},pn=(E,S,D,L,O=null)=>{const{el:M,type:J,transition:K,children:z,shapeFlag:F}=E;if(F&6){pn(E.component.subTree,S,D,L);return}if(F&128){E.suspense.move(S,D,L);return}if(F&64){J.move(E,S,D,Yt);return}if(J===kt){r(M,S,D);for(let W=0;W<z.length;W++)pn(z[W],S,D,L);r(E.anchor,S,D);return}if(J===Aa){j(E,S,D);return}if(L!==2&&F&1&&K)if(L===0)K.beforeEnter(M),r(M,S,D),Rt(()=>K.enter(M),O);else{const{leave:W,delayLeave:te,afterLeave:ce}=K,ae=()=>{E.ctx.isUnmounted?s(M):r(M,S,D)},de=()=>{W(M,()=>{ae(),ce&&ce()})};te?te(M,ae,de):de()}else r(M,S,D)},We=(E,S,D,L=!1,O=!1)=>{const{type:M,props:J,ref:K,children:z,dynamicChildren:F,shapeFlag:re,patchFlag:W,dirs:te,cacheIndex:ce}=E;if(W===-2&&(O=!1),K!=null&&(Rn(),Wa(K,null,D,E,!0),Pn()),ce!=null&&(S.renderCache[ce]=void 0),re&256){S.ctx.deactivate(E);return}const ae=re&1&&te,de=!zi(E);let ye;if(de&&(ye=J&&J.onVnodeBeforeUnmount)&&Xt(ye,S,E),re&6)Tr(E.component,D,L);else{if(re&128){E.suspense.unmount(D,L);return}ae&&Pr(E,null,S,"beforeUnmount"),re&64?E.type.remove(E,S,D,Yt,L):F&&!F.hasOnce&&(M!==kt||W>0&&W&64)?wr(F,S,D,!1,!0):(M===kt&&W&384||!O&&re&16)&&wr(z,S,D),L&&Qe(E)}(de&&(ye=J&&J.onVnodeUnmounted)||ae)&&Rt(()=>{ye&&Xt(ye,S,E),ae&&Pr(E,null,S,"unmounted")},D)},Qe=E=>{const{type:S,el:D,anchor:L,transition:O}=E;if(S===kt){uc(D,L);return}if(S===Aa){$(E);return}const M=()=>{s(D),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(E.shapeFlag&1&&O&&!O.persisted){const{leave:J,delayLeave:K}=O,z=()=>J(D,M);K?K(E.el,M,z):z()}else M()},uc=(E,S)=>{let D;for(;E!==S;)D=m(E),s(E),E=D;s(S)},Tr=(E,S,D)=>{const{bum:L,scope:O,job:M,subTree:J,um:K,m:z,a:F,parent:re,slots:{__:W}}=E;If(z),If(F),L&&Ta(L),re&&ie(W)&&W.forEach(te=>{re.renderCache[te]=void 0}),O.stop(),M&&(M.flags|=8,We(J,E,S,D)),K&&Rt(K,S),Rt(()=>{E.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},wr=(E,S,D,L=!1,O=!1,M=0)=>{for(let J=M;J<E.length;J++)We(E[J],S,D,L,O)},mn=E=>{if(E.shapeFlag&6)return mn(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const S=m(E.anchor||E.el),D=S&&S[VE];return D?m(D):S};let hi=!1;const Ko=(E,S,D)=>{E==null?S._vnode&&We(S._vnode,null,null,!0):k(S._vnode||null,E,S,null,null,null,D),S._vnode=E,hi||(hi=!0,pf(),Eg(),hi=!1)},Yt={p:k,um:We,m:pn,r:Qe,mt:oe,mc:y,pc:Ee,pbc:w,n:mn,o:n};return{render:Ko,hydrate:void 0,createApp:eT(Ko)}}function Vc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Cr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function uT(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function qg(n,e,t=!1){const r=n.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Jn(s[i]),l.el=o.el),!t&&l.patchFlag!==-2&&qg(o,l)),l.type===Ml&&(l.el=o.el),l.type===Cn&&!l.el&&(l.el=o.el)}}function hT(n){const e=n.slice(),t=[0];let r,s,i,o,l;const c=n.length;for(r=0;r<c;r++){const u=n[r];if(u!==0){if(s=t[t.length-1],n[s]<u){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)l=i+o>>1,n[t[l]]<u?i=l+1:o=l;u<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function zg(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:zg(e)}function If(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const dT=Symbol.for("v-scx"),fT=()=>ba(dT);function pT(n,e){return ch(n,null,e)}function Ns(n,e,t){return ch(n,e,t)}function ch(n,e,t=Ve){const{immediate:r,deep:s,flush:i,once:o}=t,l=Ze({},t),c=e&&r||!e&&i!=="post";let u;if(lo){if(i==="sync"){const I=fT();u=I.__watcherHandles||(I.__watcherHandles=[])}else if(!c){const I=()=>{};return I.stop=on,I.resume=on,I.pause=on,I}}const d=ft;l.call=(I,R,k)=>Qt(I,d,R,k);let p=!1;i==="post"?l.scheduler=I=>{Rt(I,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(I,R)=>{R?I():ih(I)}),l.augmentJob=I=>{e&&(I.flags|=4),p&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const m=PE(n,e,l);return lo&&(u?u.push(m):c&&m()),m}function mT(n,e,t){const r=this.proxy,s=qe(n)?n.includes(".")?Kg(r,n):()=>r[n]:n.bind(r,r);let i;fe(e)?i=e:(i=e.handler,t=e);const o=Po(this),l=ch(s,i.bind(r),t);return o(),l}function Kg(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const gT=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ur(e)}Modifiers`]||n[`${_r(e)}Modifiers`];function _T(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ve;let s=t;const i=e.startsWith("update:"),o=i&&gT(r,e.slice(7));o&&(o.trim&&(s=t.map(d=>qe(d)?d.trim():d)),o.number&&(s=t.map(Jc)));let l,c=r[l=Sc(e)]||r[l=Sc(ur(e))];!c&&i&&(c=r[l=Sc(_r(e))]),c&&Qt(c,n,6,s);const u=r[l+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Qt(u,n,6,s)}}function Hg(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},l=!1;if(!fe(n)){const c=u=>{const d=Hg(u,e,!0);d&&(l=!0,Ze(o,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(De(n)&&r.set(n,null),null):(ie(i)?i.forEach(c=>o[c]=null):Ze(o,i),De(n)&&r.set(n,o),o)}function Ol(n,e){return!n||!Rl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(n,e[0].toLowerCase()+e.slice(1))||Ae(n,_r(e))||Ae(n,e))}function Ef(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:I,ctx:R,inheritAttrs:k}=n,x=Ga(n);let B,q;try{if(t.shapeFlag&4){const $=s||r,Z=$;B=nn(u.call(Z,$,d,p,I,m,R)),q=l}else{const $=e;B=nn($.length>1?$(p,{attrs:l,slots:o,emit:c}):$(p,null)),q=e.props?l:yT(l)}}catch($){Hi.length=0,Dl($,n,1),B=we(Cn)}let j=B;if(q&&k!==!1){const $=Object.keys(q),{shapeFlag:Z}=j;$.length&&Z&7&&(i&&$.some(Gu)&&(q=vT(q,i)),j=Gr(j,q,!1,!0))}return t.dirs&&(j=Gr(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(t.dirs):t.dirs),t.transition&&oo(j,t.transition),B=j,Ga(x),B}const yT=n=>{let e;for(const t in n)(t==="class"||t==="style"||Rl(t))&&((e||(e={}))[t]=n[t]);return e},vT=(n,e)=>{const t={};for(const r in n)(!Gu(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function IT(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Tf(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Ol(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Tf(r,o,u):!0:!!o;return!1}function Tf(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Ol(t,i))return!0}return!1}function ET({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Gg=n=>n.__isSuspense;function TT(n,e){e&&e.pendingBranch?ie(n)?e.effects.push(...n):e.effects.push(n):kE(n)}const kt=Symbol.for("v-fgt"),Ml=Symbol.for("v-txt"),Cn=Symbol.for("v-cmt"),Aa=Symbol.for("v-stc"),Hi=[];let Dt=null;function _e(n=!1){Hi.push(Dt=n?null:[])}function wT(){Hi.pop(),Dt=Hi[Hi.length-1]||null}let ao=1;function wf(n,e=!1){ao+=n,n<0&&Dt&&e&&(Dt.hasOnce=!0)}function Wg(n){return n.dynamicChildren=ao>0?Dt||Cs:null,wT(),ao>0&&Dt&&Dt.push(n),n}function xe(n,e,t,r,s,i){return Wg(G(n,e,t,r,s,i,!0))}function qr(n,e,t,r,s){return Wg(we(n,e,t,r,s,!0))}function Ja(n){return n?n.__v_isVNode===!0:!1}function Ts(n,e){return n.type===e.type&&n.key===e.key}const Qg=({key:n})=>n??null,Sa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?qe(n)||mt(n)||fe(n)?{i:Vt,r:n,k:e,f:!!t}:n:null);function G(n,e=null,t=null,r=0,s=null,i=n===kt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Qg(e),ref:e&&Sa(e),scopeId:wg,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Vt};return l?(hh(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=qe(t)?8:16),ao>0&&!o&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const we=bT;function bT(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===HE)&&(n=Cn),Ja(n)){const l=Gr(n,e,!0);return t&&hh(l,t),ao>0&&!i&&Dt&&(l.shapeFlag&6?Dt[Dt.indexOf(n)]=l:Dt.push(l)),l.patchFlag=-2,l}if(LT(n)&&(n=n.__vccOpts),e){e=AT(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=xt(l)),De(c)&&(sh(c)&&!ie(c)&&(c=Ze({},c)),e.style=Ju(c))}const o=qe(n)?1:Gg(n)?128:DE(n)?64:De(n)?4:fe(n)?2:0;return G(n,e,t,r,s,o,i,!0)}function AT(n){return n?sh(n)||Lg(n)?Ze({},n):n:null}function Gr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=n,u=e?PT(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Qg(u),ref:e&&e.ref?t&&i?ie(i)?i.concat(Sa(e)):[i,Sa(e)]:Sa(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==kt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Gr(n.ssContent),ssFallback:n.ssFallback&&Gr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&oo(d,c.clone(d)),d}function ST(n=" ",e=0){return we(Ml,null,n,e)}function RT(n,e){const t=we(Aa,null,n);return t.staticCount=e,t}function uh(n="",e=!1){return e?(_e(),qr(Cn,null,n)):we(Cn,null,n)}function nn(n){return n==null||typeof n=="boolean"?we(Cn):ie(n)?we(kt,null,n.slice()):Ja(n)?Jn(n):we(Ml,null,String(n))}function Jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Gr(n)}function hh(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ie(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),hh(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Lg(e)?e._ctx=Vt:s===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Vt},t=32):(e=String(e),r&64?(t=16,e=[ST(e)]):t=8);n.children=e,n.shapeFlag|=t}function PT(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xt([e.class,r.class]));else if(s==="style")e.style=Ju([e.style,r.style]);else if(Rl(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Xt(n,e,t,r=null){Qt(n,e,7,[t,r])}const CT=Ng();let xT=0;function kT(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||CT,i={uid:xT++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new eE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ug(r,s),emitsOptions:Hg(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_T.bind(null,i),n.ce&&n.ce(i),i}let ft=null;const VT=()=>ft||Vt;let Ya,ou;{const n=xl(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ya=e("__VUE_INSTANCE_SETTERS__",t=>ft=t),ou=e("__VUE_SSR_SETTERS__",t=>lo=t)}const Po=n=>{const e=ft;return Ya(n),n.scope.on(),()=>{n.scope.off(),Ya(e)}},bf=()=>{ft&&ft.scope.off(),Ya(null)};function Jg(n){return n.vnode.shapeFlag&4}let lo=!1;function DT(n,e=!1,t=!1){e&&ou(e);const{props:r,children:s}=n.vnode,i=Jg(n);nT(n,r,i,e),oT(n,s,t||e);const o=i?NT(n,e):void 0;return e&&ou(!1),o}function NT(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,GE);const{setup:r}=t;if(r){Rn();const s=n.setupContext=r.length>1?MT(n):null,i=Po(n),o=Ro(r,n,0,[n.props,s]),l=Gm(o);if(Pn(),i(),(l||n.sp)&&!zi(n)&&Sg(n),l){if(o.then(bf,bf),e)return o.then(c=>{Af(n,c)}).catch(c=>{Dl(c,n,0)});n.asyncDep=o}else Af(n,o)}else Yg(n)}function Af(n,e,t){fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:De(e)&&(n.setupState=_g(e)),Yg(n)}function Yg(n,e,t){const r=n.type;n.render||(n.render=r.render||on);{const s=Po(n);Rn();try{WE(n)}finally{Pn(),s()}}}const OT={get(n,e){return dt(n,"get",""),n[e]}};function MT(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,OT),slots:n.slots,emit:n.emit,expose:e}}function Ll(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(_g(EE(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ki)return Ki[t](n)},has(e,t){return t in e||t in Ki}})):n.proxy}function LT(n){return fe(n)&&"__vccOpts"in n}const os=(n,e)=>SE(n,e,lo);function au(n,e,t){const r=arguments.length;return r===2?De(e)&&!ie(e)?Ja(e)?we(n,null,[e]):we(n,e):we(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Ja(t)&&(t=[t]),we(n,e,t))}const FT="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lu;const Sf=typeof window<"u"&&window.trustedTypes;if(Sf)try{lu=Sf.createPolicy("vue",{createHTML:n=>n})}catch{}const Xg=lu?n=>lu.createHTML(n):n=>n,UT="http://www.w3.org/2000/svg",BT="http://www.w3.org/1998/Math/MathML",vn=typeof document<"u"?document:null,Rf=vn&&vn.createElement("template"),$T={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?vn.createElementNS(UT,n):e==="mathml"?vn.createElementNS(BT,n):t?vn.createElement(n,{is:t}):vn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>vn.createTextNode(n),createComment:n=>vn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>vn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Rf.innerHTML=Xg(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=Rf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},jn="transition",Ri="animation",$s=Symbol("_vtc"),Zg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},jT=Ze({},OE,Zg),xr=(n,e=[])=>{ie(n)?n.forEach(t=>t(...e)):n&&n(...e)},Pf=n=>n?ie(n)?n.some(e=>e.length>1):n.length>1:!1;function qT(n){const e={};for(const T in n)T in Zg||(e[T]=n[T]);if(n.css===!1)return e;const{name:t="v",type:r,duration:s,enterFromClass:i=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:I=`${t}-leave-to`}=n,R=zT(s),k=R&&R[0],x=R&&R[1],{onBeforeEnter:B,onEnter:q,onEnterCancelled:j,onLeave:$,onLeaveCancelled:Z,onBeforeAppear:ee=B,onAppear:b=q,onAppearCancelled:y=j}=e,v=(T,_,oe,Oe)=>{T._enterCancelled=Oe,Wn(T,_?d:l),Wn(T,_?u:o),oe&&oe()},w=(T,_)=>{T._isLeaving=!1,Wn(T,p),Wn(T,I),Wn(T,m),_&&_()},A=T=>(_,oe)=>{const Oe=T?b:q,ze=()=>v(_,T,oe);xr(Oe,[_,ze]),Cf(()=>{Wn(_,T?c:i),Zt(_,T?d:l),Pf(Oe)||xf(_,r,k,ze)})};return Ze(e,{onBeforeEnter(T){xr(B,[T]),Zt(T,i),Zt(T,o)},onBeforeAppear(T){xr(ee,[T]),Zt(T,c),Zt(T,u)},onEnter:A(!1),onAppear:A(!0),onLeave(T,_){T._isLeaving=!0;const oe=()=>w(T,_);Zt(T,p),T._enterCancelled?(Zt(T,m),cu()):(cu(),Zt(T,m)),Cf(()=>{T._isLeaving&&(Wn(T,p),Zt(T,I),Pf($)||xf(T,r,x,oe))}),xr($,[T,oe])},onEnterCancelled(T){v(T,!1,void 0,!0),xr(j,[T])},onAppearCancelled(T){v(T,!0,void 0,!0),xr(y,[T])},onLeaveCancelled(T){w(T),xr(Z,[T])}})}function zT(n){if(n==null)return null;if(De(n))return[Dc(n.enter),Dc(n.leave)];{const e=Dc(n);return[e,e]}}function Dc(n){return HI(n)}function Zt(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[$s]||(n[$s]=new Set)).add(e)}function Wn(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[$s];t&&(t.delete(e),t.size||(n[$s]=void 0))}function Cf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let KT=0;function xf(n,e,t,r){const s=n._endId=++KT,i=()=>{s===n._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:o,timeout:l,propCount:c}=e_(n,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{n.removeEventListener(u,m),i()},m=I=>{I.target===n&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),n.addEventListener(u,m)}function e_(n,e){const t=window.getComputedStyle(n),r=R=>(t[R]||"").split(", "),s=r(`${jn}Delay`),i=r(`${jn}Duration`),o=kf(s,i),l=r(`${Ri}Delay`),c=r(`${Ri}Duration`),u=kf(l,c);let d=null,p=0,m=0;e===jn?o>0&&(d=jn,p=o,m=i.length):e===Ri?u>0&&(d=Ri,p=u,m=c.length):(p=Math.max(o,u),d=p>0?o>u?jn:Ri:null,m=d?d===jn?i.length:c.length:0);const I=d===jn&&/\b(transform|all)(,|$)/.test(r(`${jn}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:I}}function kf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>Vf(t)+Vf(n[r])))}function Vf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function cu(){return document.body.offsetHeight}function HT(n,e,t){const r=n[$s];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Df=Symbol("_vod"),GT=Symbol("_vsh"),WT=Symbol(""),QT=/(^|;)\s*display\s*:/;function JT(n,e,t){const r=n.style,s=qe(t);let i=!1;if(t&&!s){if(e)if(qe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&Ra(r,l,"")}else for(const o in e)t[o]==null&&Ra(r,o,"");for(const o in t)o==="display"&&(i=!0),Ra(r,o,t[o])}else if(s){if(e!==t){const o=r[WT];o&&(t+=";"+o),r.cssText=t,i=QT.test(t)}}else e&&n.removeAttribute("style");Df in n&&(n[Df]=i?r.display:"",n[GT]&&(r.display="none"))}const Nf=/\s*!important$/;function Ra(n,e,t){if(ie(t))t.forEach(r=>Ra(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=YT(n,e);Nf.test(t)?n.setProperty(_r(r),t.replace(Nf,""),"important"):n[r]=t}}const Of=["Webkit","Moz","ms"],Nc={};function YT(n,e){const t=Nc[e];if(t)return t;let r=ur(e);if(r!=="filter"&&r in n)return Nc[e]=r;r=Jm(r);for(let s=0;s<Of.length;s++){const i=Of[s]+r;if(i in n)return Nc[e]=i}return e}const Mf="http://www.w3.org/1999/xlink";function Lf(n,e,t,r,s,i=XI(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Mf,e.slice(6,e.length)):n.setAttributeNS(Mf,e,t):t==null||i&&!Xm(t)?n.removeAttribute(e):n.setAttribute(e,i?"":un(t)?String(t):t)}function Ff(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Xg(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Xm(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Mr(n,e,t,r){n.addEventListener(e,t,r)}function XT(n,e,t,r){n.removeEventListener(e,t,r)}const Uf=Symbol("_vei");function ZT(n,e,t,r,s=null){const i=n[Uf]||(n[Uf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=ew(e);if(r){const u=i[e]=rw(r,s);Mr(n,l,u,c)}else o&&(XT(n,l,o,c),i[e]=void 0)}}const Bf=/(?:Once|Passive|Capture)$/;function ew(n){let e;if(Bf.test(n)){e={};let r;for(;r=n.match(Bf);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):_r(n.slice(2)),e]}let Oc=0;const tw=Promise.resolve(),nw=()=>Oc||(tw.then(()=>Oc=0),Oc=Date.now());function rw(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Qt(sw(r,t.value),e,5,[r])};return t.value=n,t.attached=nw(),t}function sw(n,e){if(ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $f=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,iw=(n,e,t,r,s,i)=>{const o=s==="svg";e==="class"?HT(n,r,o):e==="style"?JT(n,t,r):Rl(e)?Gu(e)||ZT(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ow(n,e,r,o))?(Ff(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Lf(n,e,r,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?Ff(n,ur(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Lf(n,e,r,o))};function ow(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&$f(e)&&fe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $f(e)&&qe(t)?!1:e in n}const t_=new WeakMap,n_=new WeakMap,Xa=Symbol("_moveCb"),jf=Symbol("_enterCb"),aw=n=>(delete n.props.mode,n),lw=aw({name:"TransitionGroup",props:Ze({},jT,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=VT(),r=NE();let s,i;return Cg(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!fw(s[0].el,t.vnode.el,o)){s=[];return}s.forEach(uw),s.forEach(hw);const l=s.filter(dw);cu(),l.forEach(c=>{const u=c.el,d=u.style;Zt(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[Xa]=m=>{m&&m.target!==u||(!m||/transform$/.test(m.propertyName))&&(u.removeEventListener("transitionend",p),u[Xa]=null,Wn(u,o))};u.addEventListener("transitionend",p)}),s=[]}),()=>{const o=be(n),l=qT(o);let c=o.tag||kt;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),oo(d,tu(d,l,r,t)),t_.set(d,d.el.getBoundingClientRect()))}i=e.default?Ag(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&oo(d,tu(d,l,r,t))}return we(c,null,i)}}}),cw=lw;function uw(n){const e=n.el;e[Xa]&&e[Xa](),e[jf]&&e[jf]()}function hw(n){n_.set(n,n.el.getBoundingClientRect())}function dw(n){const e=t_.get(n),t=n_.get(n),r=e.left-t.left,s=e.top-t.top;if(r||s){const i=n.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",n}}function fw(n,e,t){const r=n.cloneNode(),s=n[$s];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),t.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=e_(r);return i.removeChild(r),o}const Za=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ie(e)?t=>Ta(e,t):e};function pw(n){n.target.composing=!0}function qf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Os=Symbol("_assign"),uu={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Os]=Za(s);const i=r||s.props&&s.props.type==="number";Mr(n,e?"change":"input",o=>{if(o.target.composing)return;let l=n.value;t&&(l=l.trim()),i&&(l=Jc(l)),n[Os](l)}),t&&Mr(n,"change",()=>{n.value=n.value.trim()}),e||(Mr(n,"compositionstart",pw),Mr(n,"compositionend",qf),Mr(n,"change",qf))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},o){if(n[Os]=Za(o),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?Jc(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},mw={deep:!0,created(n,e,t){n[Os]=Za(t),Mr(n,"change",()=>{const r=n._modelValue,s=gw(n),i=n.checked,o=n[Os];if(ie(r)){const l=Zm(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Pl(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(r_(n,i))})},mounted:zf,beforeUpdate(n,e,t){n[Os]=Za(t),zf(n,e,t)}};function zf(n,{value:e,oldValue:t},r){n._modelValue=e;let s;if(ie(e))s=Zm(e,r.props.value)>-1;else if(Pl(e))s=e.has(r.props.value);else{if(e===t)return;s=kl(e,r_(n,!0))}n.checked!==s&&(n.checked=s)}function gw(n){return"_value"in n?n._value:n.value}function r_(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const _w=["ctrl","shift","alt","meta"],yw={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>_w.some(t=>n[`${t}Key`]&&!e.includes(t))},an=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=yw[e[o]];if(l&&l(s,e))return}return n(s,...i)})},vw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},s_=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=_r(s.key);if(e.some(o=>o===i||vw[o]===i))return n(s)})},Iw=Ze({patchProp:iw},$T);let Kf;function Ew(){return Kf||(Kf=lT(Iw))}const Tw=(...n)=>{const e=Ew().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=bw(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,ww(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ww(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function bw(n){return qe(n)?document.querySelector(n):n}const Aw="/ProyectoFinal-DAW/assets/Logo-DU5Dxk_Z.png",Sw=()=>{};var Hf={};/**
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
 */const i_=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Rw=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},o_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,I=u&63;c||(I=64,o||(m=64)),r.push(t[d],t[p],t[m],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(i_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Rw(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new Pw;const m=i<<2|l>>4;if(r.push(m),u!==64){const I=l<<4&240|u>>2;if(r.push(I),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cw=function(n){const e=i_(n);return o_.encodeByteArray(e,!0)},el=function(n){return Cw(n).replace(/\./g,"")},a_=function(n){try{return o_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const xw=()=>l_().__FIREBASE_DEFAULTS__,kw=()=>{if(typeof process>"u"||typeof Hf>"u")return;const n=Hf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&a_(n[1]);return e&&JSON.parse(e)},Fl=()=>{try{return Sw()||xw()||kw()||Vw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},c_=n=>{var e,t;return(t=(e=Fl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Dw=n=>{const e=c_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},u_=()=>{var n;return(n=Fl())===null||n===void 0?void 0:n.config},h_=n=>{var e;return(e=Fl())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Nw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Co(n){return n.endsWith(".cloudworkstations.dev")}async function d_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ow(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[el(JSON.stringify(t)),el(JSON.stringify(o)),""].join(".")}const Gi={};function Mw(){const n={prod:[],emulator:[]};for(const e of Object.keys(Gi))Gi[e]?n.emulator.push(e):n.prod.push(e);return n}function Lw(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Gf=!1;function f_(n,e){if(typeof window>"u"||typeof document>"u"||!Co(window.location.host)||Gi[n]===e||Gi[n]||Gf)return;Gi[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Mw().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,I){m.setAttribute("width","24"),m.setAttribute("id",I),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Gf=!0,o()},m}function d(m,I){m.setAttribute("id",I),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Lw(r),I=t("text"),R=document.getElementById(I)||document.createElement("span"),k=t("learnmore"),x=document.getElementById(k)||document.createElement("a"),B=t("preprendIcon"),q=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const j=m.element;l(j),d(x,k);const $=u();c(q,B),j.append(q,R,x,$),document.body.appendChild(j)}i?(R.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function p_(){var n;const e=(n=Fl())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Uw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $w(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jw(){const n=Je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function m_(){return!p_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function g_(){return!p_()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function __(){try{return typeof indexedDB=="object"}catch{return!1}}function qw(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const zw="FirebaseError";class On extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=zw,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xo.prototype.create)}}class xo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Kw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new On(s,l,r)}}function Kw(n,e){return n.replace(Hw,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Hw=/\{\$([^}]+)}/g;function Gw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Wr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Wf(i)&&Wf(o)){if(!Wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Wf(n){return n!==null&&typeof n=="object"}/**
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
 */function ko(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ni(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Oi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ww(n,e){const t=new Qw(n,e);return t.subscribe.bind(t)}class Qw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Jw(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Mc),s.error===void 0&&(s.error=Mc),s.complete===void 0&&(s.complete=Mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jw(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Mc(){}/**
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
 */function He(n){return n&&n._delegate?n._delegate:n}class Qr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Yw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Nw;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zw(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xw(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xw(n){return n===Dr?void 0:n}function Zw(n){return n.instantiationMode==="EAGER"}/**
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
 */class eb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Yw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(me||(me={}));const tb={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},nb=me.INFO,rb={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},sb=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=rb[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dh{constructor(e){this.name=e,this._logLevel=nb,this._logHandler=sb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const ib=(n,e)=>e.some(t=>n instanceof t);let Qf,Jf;function ob(){return Qf||(Qf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ab(){return Jf||(Jf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const y_=new WeakMap,hu=new WeakMap,v_=new WeakMap,Lc=new WeakMap,fh=new WeakMap;function lb(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(sr(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&y_.set(t,n)}).catch(()=>{}),fh.set(e,n),e}function cb(n){if(hu.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});hu.set(n,e)}let du={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||v_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return sr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ub(n){du=n(du)}function hb(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Fc(this),e,...t);return v_.set(r,e.sort?e.sort():[e]),sr(r)}:ab().includes(n)?function(...e){return n.apply(Fc(this),e),sr(y_.get(this))}:function(...e){return sr(n.apply(Fc(this),e))}}function db(n){return typeof n=="function"?hb(n):(n instanceof IDBTransaction&&cb(n),ib(n,ob())?new Proxy(n,du):n)}function sr(n){if(n instanceof IDBRequest)return lb(n);if(Lc.has(n))return Lc.get(n);const e=db(n);return e!==n&&(Lc.set(n,e),fh.set(e,n)),e}const Fc=n=>fh.get(n);function fb(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=sr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(sr(o.result),c.oldVersion,c.newVersion,sr(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const pb=["get","getKey","getAll","getAllKeys","count"],mb=["put","add","delete","clear"],Uc=new Map;function Yf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=mb.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pb.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return Uc.set(e,i),i}ub(n=>({...n,get:(e,t,r)=>Yf(e,t)||n.get(e,t,r),has:(e,t)=>!!Yf(e,t)||n.has(e,t)}));/**
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
 */class gb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_b(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _b(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fu="@firebase/app",Xf="0.13.0";/**
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
 */const xn=new dh("@firebase/app"),yb="@firebase/app-compat",vb="@firebase/analytics-compat",Ib="@firebase/analytics",Eb="@firebase/app-check-compat",Tb="@firebase/app-check",wb="@firebase/auth",bb="@firebase/auth-compat",Ab="@firebase/database",Sb="@firebase/data-connect",Rb="@firebase/database-compat",Pb="@firebase/functions",Cb="@firebase/functions-compat",xb="@firebase/installations",kb="@firebase/installations-compat",Vb="@firebase/messaging",Db="@firebase/messaging-compat",Nb="@firebase/performance",Ob="@firebase/performance-compat",Mb="@firebase/remote-config",Lb="@firebase/remote-config-compat",Fb="@firebase/storage",Ub="@firebase/storage-compat",Bb="@firebase/firestore",$b="@firebase/ai",jb="@firebase/firestore-compat",qb="firebase",zb="11.8.0";/**
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
 */const pu="[DEFAULT]",Kb={[fu]:"fire-core",[yb]:"fire-core-compat",[Ib]:"fire-analytics",[vb]:"fire-analytics-compat",[Tb]:"fire-app-check",[Eb]:"fire-app-check-compat",[wb]:"fire-auth",[bb]:"fire-auth-compat",[Ab]:"fire-rtdb",[Sb]:"fire-data-connect",[Rb]:"fire-rtdb-compat",[Pb]:"fire-fn",[Cb]:"fire-fn-compat",[xb]:"fire-iid",[kb]:"fire-iid-compat",[Vb]:"fire-fcm",[Db]:"fire-fcm-compat",[Nb]:"fire-perf",[Ob]:"fire-perf-compat",[Mb]:"fire-rc",[Lb]:"fire-rc-compat",[Fb]:"fire-gcs",[Ub]:"fire-gcs-compat",[Bb]:"fire-fst",[jb]:"fire-fst-compat",[$b]:"fire-vertex","fire-js":"fire-js",[qb]:"fire-js-all"};/**
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
 */const tl=new Map,Hb=new Map,mu=new Map;function Zf(n,e){try{n.container.addComponent(e)}catch(t){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function js(n){const e=n.name;if(mu.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;mu.set(e,n);for(const t of tl.values())Zf(t,n);for(const t of Hb.values())Zf(t,n);return!0}function ph(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Bt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Gb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new xo("app","Firebase",Gb);/**
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
 */class Wb{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const si=zb;function I_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw ir.create("bad-app-name",{appName:String(s)});if(t||(t=u_()),!t)throw ir.create("no-options");const i=tl.get(s);if(i){if(Wr(t,i.options)&&Wr(r,i.config))return i;throw ir.create("duplicate-app",{appName:s})}const o=new eb(s);for(const c of mu.values())o.addComponent(c);const l=new Wb(t,r,o);return tl.set(s,l),l}function E_(n=pu){const e=tl.get(n);if(!e&&n===pu&&u_())return I_();if(!e)throw ir.create("no-app",{appName:n});return e}function or(n,e,t){var r;let s=(r=Kb[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(l.join(" "));return}js(new Qr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Qb="firebase-heartbeat-database",Jb=1,co="firebase-heartbeat-store";let Bc=null;function T_(){return Bc||(Bc=fb(Qb,Jb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(co)}catch(t){console.warn(t)}}}}).catch(n=>{throw ir.create("idb-open",{originalErrorMessage:n.message})})),Bc}async function Yb(n){try{const t=(await T_()).transaction(co),r=await t.objectStore(co).get(w_(n));return await t.done,r}catch(e){if(e instanceof On)xn.warn(e.message);else{const t=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(t.message)}}}async function ep(n,e){try{const r=(await T_()).transaction(co,"readwrite");await r.objectStore(co).put(e,w_(n)),await r.done}catch(t){if(t instanceof On)xn.warn(t.message);else{const r=ir.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xn.warn(r.message)}}}function w_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Xb=1024,Zb=30;class eA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nA(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Zb){const o=rA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tp(),{heartbeatsToSend:r,unsentEntries:s}=tA(this._heartbeatsCache.heartbeats),i=el(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return xn.warn(t),""}}}function tp(){return new Date().toISOString().substring(0,10)}function tA(n,e=Xb){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),np(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),np(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class nA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return __()?qw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Yb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ep(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ep(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function np(n){return el(JSON.stringify({version:2,heartbeats:n})).length}function rA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function sA(n){js(new Qr("platform-logger",e=>new gb(e),"PRIVATE")),js(new Qr("heartbeat",e=>new eA(e),"PRIVATE")),or(fu,Xf,n),or(fu,Xf,"esm2017"),or("fire-js","")}sA("");function mh(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function b_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iA=b_,A_=new xo("auth","Firebase",b_());/**
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
 */const nl=new dh("@firebase/auth");function oA(n,...e){nl.logLevel<=me.WARN&&nl.warn(`Auth (${si}): ${n}`,...e)}function Pa(n,...e){nl.logLevel<=me.ERROR&&nl.error(`Auth (${si}): ${n}`,...e)}/**
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
 */function Jt(n,...e){throw gh(n,...e)}function ln(n,...e){return gh(n,...e)}function S_(n,e,t){const r=Object.assign(Object.assign({},iA()),{[e]:t});return new xo("auth","Firebase",r).create(e,{appName:n.name})}function An(n){return S_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gh(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return A_.create(n,...e)}function le(n,e,...t){if(!n)throw gh(e,...t)}function Tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Pa(e),new Error(e)}function kn(n,e){n||Tn(e)}/**
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
 */function rl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function R_(){return rp()==="http:"||rp()==="https:"}function rp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function aA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(R_()||Bw()||"connection"in navigator)?navigator.onLine:!0}function lA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Vo{constructor(e,t){this.shortDelay=e,this.longDelay=t,kn(t>e,"Short delay should be less than long delay!"),this.isMobile=Fw()||$w()}get(){return aA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _h(n,e){kn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class P_{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hA=new Vo(3e4,6e4);function dn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function fn(n,e,t,r,s={}){return C_(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ko(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},i);return Uw()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Co(n.emulatorConfig.host)&&(u.credentials="include"),P_.fetch()(await x_(n,n.config.apiHost,t,l),u)})}async function C_(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},cA),e);try{const s=new fA(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw da(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw da(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw da(n,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw S_(n,d,u);Jt(n,d)}}catch(s){if(s instanceof On)throw s;Jt(n,"network-request-failed",{message:String(s)})}}async function Do(n,e,t,r,s={}){const i=await fn(n,e,t,r,s);return"mfaPendingCredential"in i&&Jt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function x_(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?_h(n.config,s):`${n.config.apiScheme}://${s}`;return uA.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function dA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),hA.get())})}}function da(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ln(n,e,r);return s.customData._tokenResponse=t,s}function sp(n){return n!==void 0&&n.enterprise!==void 0}class pA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return dA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mA(n,e){return fn(n,"GET","/v2/recaptchaConfig",dn(n,e))}/**
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
 */async function gA(n,e){return fn(n,"POST","/v1/accounts:delete",e)}async function sl(n,e){return fn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _A(n,e=!1){const t=He(n),r=await t.getIdToken(e),s=yh(r);le(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wi($c(s.auth_time)),issuedAtTime:Wi($c(s.iat)),expirationTime:Wi($c(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $c(n){return Number(n)*1e3}function yh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Pa("JWT malformed, contained fewer than 3 sections"),null;try{const s=a_(t);return s?JSON.parse(s):(Pa("Failed to decode base64 JWT payload"),null)}catch(s){return Pa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ip(n){const e=yh(n);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function uo(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof On&&yA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function yA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class vA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wi(this.lastLoginAt),this.creationTime=Wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function il(n){var e;const t=n.auth,r=await n.getIdToken(),s=await uo(n,sl(t,{idToken:r}));le(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?k_(i.providerUserInfo):[],l=EA(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new gu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function IA(n){const e=He(n);await il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EA(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function k_(n){return n.map(e=>{var{providerId:t}=e,r=mh(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function TA(n,e){const t=await C_(n,{},async()=>{const r=ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await x_(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",P_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wA(n,e){return fn(n,"POST","/v2/accounts:revokeToken",dn(n,e))}/**
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
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ip(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){le(e.length!==0,"internal-error");const t=ip(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await TA(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Ms;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function qn(n,e){le(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Gt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=mh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await uo(this,this.stsTokenManager.getToken(this.auth,e));return le(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return _A(this,e)}reload(){return IA(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await uo(this,gA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,l,c,u,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,I=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(l=t.tenantId)!==null&&l!==void 0?l:void 0,x=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,B=(u=t.createdAt)!==null&&u!==void 0?u:void 0,q=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:j,emailVerified:$,isAnonymous:Z,providerData:ee,stsTokenManager:b}=t;le(j&&b,e,"internal-error");const y=Ms.fromJSON(this.name,b);le(typeof j=="string",e,"internal-error"),qn(p,e.name),qn(m,e.name),le(typeof $=="boolean",e,"internal-error"),le(typeof Z=="boolean",e,"internal-error"),qn(I,e.name),qn(R,e.name),qn(k,e.name),qn(x,e.name),qn(B,e.name),qn(q,e.name);const v=new Gt({uid:j,auth:e,email:m,emailVerified:$,displayName:p,isAnonymous:Z,photoURL:R,phoneNumber:I,tenantId:k,stsTokenManager:y,createdAt:B,lastLoginAt:q});return ee&&Array.isArray(ee)&&(v.providerData=ee.map(w=>Object.assign({},w))),x&&(v._redirectEventId=x),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ms;s.updateFromServerResponse(t);const i=new Gt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await il(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?k_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ms;l.updateFromIdToken(r);const c=new Gt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new gu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const op=new Map;function wn(n){kn(n instanceof Function,"Expected a class definition");let e=op.get(n);return e?(kn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,op.set(n,e),e)}/**
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
 */class V_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}V_.type="NONE";const ap=V_;/**
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
 */function Ca(n,e,t){return`firebase:${n}:${e}:${t}`}class Ls{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ca(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ca("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await sl(this.auth,{idToken:e}).catch(()=>{});return t?Gt._fromGetAccountInfoResponse(this.auth,t,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ls(wn(ap),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||wn(ap);const o=Ca(r,e.config.apiKey,e.name);let l=null;for(const u of t)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const m=await sl(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Gt._fromGetAccountInfoResponse(e,m,d)}else p=Gt._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ls(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ls(i,e,r))}}/**
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
 */function lp(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(M_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(D_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(F_(e))return"Blackberry";if(U_(e))return"Webos";if(N_(e))return"Safari";if((e.includes("chrome/")||O_(e))&&!e.includes("edge/"))return"Chrome";if(L_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function D_(n=Je()){return/firefox\//i.test(n)}function N_(n=Je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function O_(n=Je()){return/crios\//i.test(n)}function M_(n=Je()){return/iemobile/i.test(n)}function L_(n=Je()){return/android/i.test(n)}function F_(n=Je()){return/blackberry/i.test(n)}function U_(n=Je()){return/webos/i.test(n)}function vh(n=Je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function bA(n=Je()){var e;return vh(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AA(){return jw()&&document.documentMode===10}function B_(n=Je()){return vh(n)||L_(n)||U_(n)||F_(n)||/windows phone/i.test(n)||M_(n)}/**
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
 */function $_(n,e=[]){let t;switch(n){case"Browser":t=lp(Je());break;case"Worker":t=`${lp(Je())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${si}/${r}`}/**
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
 */class SA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function RA(n,e={}){return fn(n,"GET","/v2/passwordPolicy",dn(n,e))}/**
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
 */const PA=6;class CA{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:PA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class xA{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cp(this),this.idTokenSubscription=new cp(this),this.beforeStateQueue=new SA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=A_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sl(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await il(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(An(this));const t=e?He(e):null;return t&&le(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RA(this),t=new CA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await wA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wn(e)||this._popupRedirectResolver;le(t,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[wn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&oA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yr(n){return He(n)}class cp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ww(t=>this.observer=t)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ul={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kA(n){Ul=n}function j_(n){return Ul.loadJS(n)}function VA(){return Ul.recaptchaEnterpriseScript}function DA(){return Ul.gapiScript}function NA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class OA{constructor(){this.enterprise=new MA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class MA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const LA="recaptcha-enterprise",q_="NO_RECAPTCHA";class FA{constructor(e){this.type=LA,this.auth=yr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{mA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new pA(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;sp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(q_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new OA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!t&&sp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=VA();c.length!==0&&(c+=l),j_(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function up(n,e,t,r=!1,s=!1){const i=new FA(n);let o;if(s)o=q_;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ol(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await up(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await up(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(o)})}/**
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
 */function UA(n,e){const t=ph(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Wr(i,e??{}))return s;Jt(s,"already-initialized")}return t.initialize({options:e})}function BA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(wn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $A(n,e,t){const r=yr(n);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=z_(e),{host:o,port:l}=jA(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(Wr(u,r.config.emulator)&&Wr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Co(o)?(d_(`${i}//${o}${c}`),f_("Auth",!0)):qA()}function z_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function jA(n){const e=z_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:hp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:hp(o)}}}function hp(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function qA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ih{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,t){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function zA(n,e){return fn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function KA(n,e){return Do(n,"POST","/v1/accounts:signInWithPassword",dn(n,e))}async function HA(n,e){return fn(n,"POST","/v1/accounts:sendOobCode",dn(n,e))}async function GA(n,e){return HA(n,e)}/**
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
 */async function WA(n,e){return Do(n,"POST","/v1/accounts:signInWithEmailLink",dn(n,e))}async function QA(n,e){return Do(n,"POST","/v1/accounts:signInWithEmailLink",dn(n,e))}/**
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
 */class ho extends Ih{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ho(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ho(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ol(e,t,"signInWithPassword",KA);case"emailLink":return WA(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ol(e,r,"signUpPassword",zA);case"emailLink":return QA(e,{idToken:t,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Fs(n,e){return Do(n,"POST","/v1/accounts:signInWithIdp",dn(n,e))}/**
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
 */const JA="http://localhost";class Jr extends Ih{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=mh(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Jr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Fs(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Fs(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fs(e,t)}buildRequest(){const e={requestUri:JA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ko(t)}return e}}/**
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
 */function YA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XA(n){const e=Ni(Oi(n)).link,t=e?Ni(Oi(e)).deep_link_id:null,r=Ni(Oi(n)).deep_link_id;return(r?Ni(Oi(r)).link:null)||r||t||e||n}class Eh{constructor(e){var t,r,s,i,o,l;const c=Ni(Oi(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=YA((s=c.mode)!==null&&s!==void 0?s:null);le(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=XA(e);try{return new Eh(t)}catch{return null}}}/**
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
 */class ii{constructor(){this.providerId=ii.PROVIDER_ID}static credential(e,t){return ho._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Eh.parseLink(t);return le(r,"argument-error"),ho._fromEmailAndCode(e,r.code,r.tenantId)}}ii.PROVIDER_ID="password";ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class K_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class No extends K_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends No{constructor(){super("facebook.com")}static credential(e){return Jr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Xn extends No{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Xn.credential(t,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
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
 */class Zn extends No{constructor(){super("github.com")}static credential(e){return Jr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */class er extends No{constructor(){super("twitter.com")}static credential(e,t){return Jr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return er.credential(t,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
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
 */async function ZA(n,e){return Do(n,"POST","/v1/accounts:signUp",dn(n,e))}/**
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
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Gt._fromIdTokenResponse(e,r,s),o=dp(r);return new Yr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=dp(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function dp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class al extends On{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,al.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new al(e,t,r,s)}}function H_(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?al._fromErrorAndOperation(n,i,e,r):i})}async function e0(n,e,t=!1){const r=await uo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yr._forOperation(n,"link",r)}/**
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
 */async function t0(n,e,t=!1){const{auth:r}=n;if(Bt(r.app))return Promise.reject(An(r));const s="reauthenticate";try{const i=await uo(n,H_(r,s,e,n),t);le(i.idToken,r,"internal-error");const o=yh(i.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(n.uid===l,r,"user-mismatch"),Yr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
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
 */async function G_(n,e,t=!1){if(Bt(n.app))return Promise.reject(An(n));const r="signIn",s=await H_(n,r,e),i=await Yr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function n0(n,e){return G_(yr(n),e)}/**
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
 */async function W_(n){const e=yr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function r0(n,e,t){const r=yr(n);await ol(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",GA)}async function s0(n,e,t){if(Bt(n.app))return Promise.reject(An(n));const r=yr(n),o=await ol(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ZA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&W_(n),c}),l=await Yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function i0(n,e,t){return Bt(n.app)?Promise.reject(An(n)):n0(He(n),ii.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&W_(n),r})}/**
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
 */async function o0(n,e){return fn(n,"POST","/v1/accounts:createAuthUri",dn(n,e))}/**
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
 */async function a0(n,e){const t=R_()?rl():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:s}=await o0(He(n),r);return s||[]}/**
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
 */function l0(n,e){return He(n).setPersistence(e)}function c0(n,e,t,r){return He(n).onIdTokenChanged(e,t,r)}function u0(n,e,t){return He(n).beforeAuthStateChanged(e,t)}function Q_(n,e,t,r){return He(n).onAuthStateChanged(e,t,r)}function h0(n){return He(n).signOut()}const ll="__sak";/**
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
 */class J_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ll,"1"),this.storage.removeItem(ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const d0=1e3,f0=10;class Y_ extends J_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=B_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);AA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,f0):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},d0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Y_.type="LOCAL";const X_=Y_;/**
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
 */class Z_ extends J_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Z_.type="SESSION";const Th=Z_;/**
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
 */function p0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(t.origin,i)),c=await p0(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bl.receivers=[];/**
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
 */function wh(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class m0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=wh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function cn(){return window}function g0(n){cn().location.href=n}/**
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
 */function ey(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function _0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function y0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function v0(){return ey()?self:null}/**
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
 */const ty="firebaseLocalStorageDb",I0=1,cl="firebaseLocalStorage",ny="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $l(n,e){return n.transaction([cl],e?"readwrite":"readonly").objectStore(cl)}function E0(){const n=indexedDB.deleteDatabase(ty);return new Oo(n).toPromise()}function _u(){const n=indexedDB.open(ty,I0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(cl,{keyPath:ny})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(cl)?e(r):(r.close(),await E0(),e(await _u()))})})}async function fp(n,e,t){const r=$l(n,!0).put({[ny]:e,value:t});return new Oo(r).toPromise()}async function T0(n,e){const t=$l(n,!1).get(e),r=await new Oo(t).toPromise();return r===void 0?null:r.value}function pp(n,e){const t=$l(n,!0).delete(e);return new Oo(t).toPromise()}const w0=800,b0=3;class ry{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _u(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>b0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bl._getInstance(v0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _0(),!this.activeServiceWorker)return;this.sender=new m0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||y0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _u();return await fp(e,ll,"1"),await pp(e,ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>fp(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>T0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$l(s,!1).getAll();return new Oo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ry.type="LOCAL";const A0=ry;new Vo(3e4,6e4);/**
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
 */function S0(n,e){return e?wn(e):(le(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class bh extends Ih{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function R0(n){return G_(n.auth,new bh(n),n.bypassAuthState)}function P0(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),t0(t,new bh(n),n.bypassAuthState)}async function C0(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),e0(t,new bh(n),n.bypassAuthState)}/**
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
 */class sy{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R0;case"linkViaPopup":case"linkViaRedirect":return C0;case"reauthViaPopup":case"reauthViaRedirect":return P0;default:Jt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const x0=new Vo(2e3,1e4);class Ps extends sy{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ps.currentPopupAction&&Ps.currentPopupAction.cancel(),Ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=wh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,x0.get())};e()}}Ps.currentPopupAction=null;/**
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
 */const k0="pendingRedirect",xa=new Map;class V0 extends sy{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=xa.get(this.auth._key());if(!e){try{const r=await D0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}xa.set(this.auth._key(),e)}return this.bypassAuthState||xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function D0(n,e){const t=M0(e),r=O0(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function N0(n,e){xa.set(n._key(),e)}function O0(n){return wn(n._redirectPersistence)}function M0(n){return Ca(k0,n.config.apiKey,n.name)}async function L0(n,e,t=!1){if(Bt(n.app))return Promise.reject(An(n));const r=yr(n),s=S0(r,e),o=await new V0(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const F0=10*60*1e3;class U0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!B0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!iy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ln(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F0&&this.cachedEventUids.clear(),this.cachedEventUids.has(mp(e))}saveEventToCache(e){this.cachedEventUids.add(mp(e)),this.lastProcessedEventTime=Date.now()}}function mp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function iy({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function B0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iy(n);default:return!1}}/**
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
 */async function $0(n,e={}){return fn(n,"GET","/v1/projects",e)}/**
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
 */const j0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q0=/^https?/;async function z0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $0(n);for(const t of e)try{if(K0(t))return}catch{}Jt(n,"unauthorized-domain")}function K0(n){const e=rl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!q0.test(t))return!1;if(j0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const H0=new Vo(3e4,6e4);function gp(){const n=cn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function G0(n){return new Promise((e,t)=>{var r,s,i;function o(){gp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gp(),t(ln(n,"network-request-failed"))},timeout:H0.get()})}if(!((s=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=cn().gapi)===null||i===void 0)&&i.load)o();else{const l=NA("iframefcb");return cn()[l]=()=>{gapi.load?o():t(ln(n,"network-request-failed"))},j_(`${DA()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ka=null,e})}let ka=null;function W0(n){return ka=ka||G0(n),ka}/**
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
 */const Q0=new Vo(5e3,15e3),J0="__/auth/iframe",Y0="emulator/auth/iframe",X0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eS(n){const e=n.config;le(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_h(e,Y0):`https://${n.config.authDomain}/${J0}`,r={apiKey:e.apiKey,appName:n.name,v:si},s=Z0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ko(r).slice(1)}`}async function tS(n){const e=await W0(n),t=cn().gapi;return le(t,n,"internal-error"),e.open({where:document.body,url:eS(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(n,"network-request-failed"),l=cn().setTimeout(()=>{i(o)},Q0.get());function c(){cn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const nS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rS=500,sS=600,iS="_blank",oS="http://localhost";class _p{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aS(n,e,t,r=rS,s=sS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},nS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Je().toLowerCase();t&&(l=O_(u)?iS:t),D_(u)&&(e=e||oS,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[I,R])=>`${m}${I}=${R},`,"");if(bA(u)&&l!=="_self")return lS(e||"",l),new _p(null);const p=window.open(e||"",l,d);le(p,n,"popup-blocked");try{p.focus()}catch{}return new _p(p)}function lS(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const cS="__/auth/handler",uS="emulator/auth/handler",hS=encodeURIComponent("fac");async function yp(n,e,t,r,s,i){le(n.config.authDomain,n,"auth-domain-config-required"),le(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:si,eventId:s};if(e instanceof K_){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Gw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof No){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),u=c?`#${hS}=${encodeURIComponent(c)}`:"";return`${dS(n)}?${ko(l).slice(1)}${u}`}function dS({config:n}){return n.emulator?_h(n,uS):`https://${n.authDomain}/${cS}`}/**
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
 */const jc="webStorageSupport";class fS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Th,this._completeRedirectFn=L0,this._overrideRedirectResult=N0}async _openPopup(e,t,r,s){var i;kn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await yp(e,t,r,rl(),s);return aS(e,o,wh())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await yp(e,t,r,rl(),s);return g0(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(kn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await tS(e),r=new U0(e);return t.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(jc,{type:jc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[jc];o!==void 0&&t(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=z0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return B_()||N_()||vh()}}const pS=fS;var vp="@firebase/auth",Ip="1.10.6";/**
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
 */class mS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _S(n){js(new Qr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$_(n)},u=new xA(r,s,i,c);return BA(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),js(new Qr("auth-internal",e=>{const t=yr(e.getProvider("auth").getImmediate());return(r=>new mS(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(vp,Ip,gS(n)),or(vp,Ip,"esm2017")}/**
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
 */const yS=5*60,vS=h_("authIdTokenMaxAge")||yS;let Ep=null;const IS=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>vS)return;const s=t==null?void 0:t.token;Ep!==s&&(Ep=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Us(n=E_()){const e=ph(n,"auth");if(e.isInitialized())return e.getImmediate();const t=UA(n,{popupRedirectResolver:pS,persistence:[A0,X_,Th]}),r=h_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=IS(i.toString());u0(t,o,()=>o(t.currentUser)),c0(t,l=>o(l))}}const s=c_("auth");return s&&$A(t,`http://${s}`),t}function ES(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}kA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",ES().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_S("Browser");var TS="firebase",wS="11.8.1";/**
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
 */or(TS,wS,"app");var Tp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ar,oy;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function v(){}v.prototype=y.prototype,b.D=y.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(w,A,T){for(var _=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)_[oe-2]=arguments[oe];return y.prototype[A].apply(w,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,v){v||(v=0);var w=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)w[A]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(A=0;16>A;++A)w[A]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=b.g[0],v=b.g[1],A=b.g[2];var T=b.g[3],_=y+(T^v&(A^T))+w[0]+3614090360&4294967295;y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+w[1]+3905402710&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+w[2]+606105819&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+w[3]+3250441966&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(T^v&(A^T))+w[4]+4118548399&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+w[5]+1200080426&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+w[6]+2821735955&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+w[7]+4249261313&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(T^v&(A^T))+w[8]+1770035416&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+w[9]+2336552879&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+w[10]+4294925233&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+w[11]+2304563134&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(T^v&(A^T))+w[12]+1804603682&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(A^y&(v^A))+w[13]+4254626195&4294967295,T=y+(_<<12&4294967295|_>>>20),_=A+(v^T&(y^v))+w[14]+2792965006&4294967295,A=T+(_<<17&4294967295|_>>>15),_=v+(y^A&(T^y))+w[15]+1236535329&4294967295,v=A+(_<<22&4294967295|_>>>10),_=y+(A^T&(v^A))+w[1]+4129170786&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+w[6]+3225465664&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+w[11]+643717713&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+w[0]+3921069994&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(A^T&(v^A))+w[5]+3593408605&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+w[10]+38016083&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+w[15]+3634488961&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+w[4]+3889429448&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(A^T&(v^A))+w[9]+568446438&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+w[14]+3275163606&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+w[3]+4107603335&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+w[8]+1163531501&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(A^T&(v^A))+w[13]+2850285829&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^A&(y^v))+w[2]+4243563512&4294967295,T=y+(_<<9&4294967295|_>>>23),_=A+(y^v&(T^y))+w[7]+1735328473&4294967295,A=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(A^T))+w[12]+2368359562&4294967295,v=A+(_<<20&4294967295|_>>>12),_=y+(v^A^T)+w[5]+4294588738&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+w[8]+2272392833&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+w[11]+1839030562&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+w[14]+4259657740&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(v^A^T)+w[1]+2763975236&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+w[4]+1272893353&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+w[7]+4139469664&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+w[10]+3200236656&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(v^A^T)+w[13]+681279174&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+w[0]+3936430074&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+w[3]+3572445317&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+w[6]+76029189&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(v^A^T)+w[9]+3654602809&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^A)+w[12]+3873151461&4294967295,T=y+(_<<11&4294967295|_>>>21),_=A+(T^y^v)+w[15]+530742520&4294967295,A=T+(_<<16&4294967295|_>>>16),_=v+(A^T^y)+w[2]+3299628645&4294967295,v=A+(_<<23&4294967295|_>>>9),_=y+(A^(v|~T))+w[0]+4096336452&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+w[7]+1126891415&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+w[14]+2878612391&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+w[5]+4237533241&4294967295,v=A+(_<<21&4294967295|_>>>11),_=y+(A^(v|~T))+w[12]+1700485571&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+w[3]+2399980690&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+w[10]+4293915773&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+w[1]+2240044497&4294967295,v=A+(_<<21&4294967295|_>>>11),_=y+(A^(v|~T))+w[8]+1873313359&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+w[15]+4264355552&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+w[6]+2734768916&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+w[13]+1309151649&4294967295,v=A+(_<<21&4294967295|_>>>11),_=y+(A^(v|~T))+w[4]+4149444226&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~A))+w[11]+3174756917&4294967295,T=y+(_<<10&4294967295|_>>>22),_=A+(y^(T|~v))+w[2]+718787259&4294967295,A=T+(_<<15&4294967295|_>>>17),_=v+(T^(A|~y))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(A+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+T&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var v=y-this.blockSize,w=this.B,A=this.h,T=0;T<y;){if(A==0)for(;T<=v;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<y;)if(w[A++]=b.charCodeAt(T++),A==this.blockSize){s(this,w),A=0;break}}else for(;T<y;)if(w[A++]=b[T++],A==this.blockSize){s(this,w),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var v=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=v&255,v/=256;for(this.u(b),b=Array(16),y=v=0;4>y;++y)for(var w=0;32>w;w+=8)b[v++]=this.g[y]>>>w&255;return b};function i(b,y){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=y(b)}function o(b,y){this.h=y;for(var v=[],w=!0,A=b.length-1;0<=A;A--){var T=b[A]|0;w&&T==y||(v[A]=T,w=!1)}this.g=v}var l={};function c(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return x(u(-b));for(var y=[],v=1,w=0;b>=v;w++)y[w]=b/v|0,v*=4294967296;return new o(y,0)}function d(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return x(d(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),w=p,A=0;A<b.length;A+=8){var T=Math.min(8,b.length-A),_=parseInt(b.substring(A,A+T),y);8>T?(T=u(Math.pow(y,T)),w=w.j(T).add(u(_))):(w=w.j(v),w=w.add(u(_)))}return w}var p=c(0),m=c(1),I=c(16777216);n=o.prototype,n.m=function(){if(k(this))return-x(this).m();for(var b=0,y=1,v=0;v<this.g.length;v++){var w=this.i(v);b+=(0<=w?w:4294967296+w)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(k(this))return"-"+x(this).toString(b);for(var y=u(Math.pow(b,6)),v=this,w="";;){var A=$(v,y).g;v=B(v,A.j(y));var T=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=A,R(v))return T+w;for(;6>T.length;)T="0"+T;w=T+w}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function k(b){return b.h==-1}n.l=function(b){return b=B(this,b),k(b)?-1:R(b)?0:1};function x(b){for(var y=b.g.length,v=[],w=0;w<y;w++)v[w]=~b.g[w];return new o(v,~b.h).add(m)}n.abs=function(){return k(this)?x(this):this},n.add=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],w=0,A=0;A<=y;A++){var T=w+(this.i(A)&65535)+(b.i(A)&65535),_=(T>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);w=_>>>16,T&=65535,_&=65535,v[A]=_<<16|T}return new o(v,v[v.length-1]&-2147483648?-1:0)};function B(b,y){return b.add(x(y))}n.j=function(b){if(R(this)||R(b))return p;if(k(this))return k(b)?x(this).j(x(b)):x(x(this).j(b));if(k(b))return x(this.j(x(b)));if(0>this.l(I)&&0>b.l(I))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,v=[],w=0;w<2*y;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<b.g.length;A++){var T=this.i(w)>>>16,_=this.i(w)&65535,oe=b.i(A)>>>16,Oe=b.i(A)&65535;v[2*w+2*A]+=_*Oe,q(v,2*w+2*A),v[2*w+2*A+1]+=T*Oe,q(v,2*w+2*A+1),v[2*w+2*A+1]+=_*oe,q(v,2*w+2*A+1),v[2*w+2*A+2]+=T*oe,q(v,2*w+2*A+2)}for(w=0;w<y;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=y;w<2*y;w++)v[w]=0;return new o(v,0)};function q(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function j(b,y){this.g=b,this.h=y}function $(b,y){if(R(y))throw Error("division by zero");if(R(b))return new j(p,p);if(k(b))return y=$(x(b),y),new j(x(y.g),x(y.h));if(k(y))return y=$(b,x(y)),new j(x(y.g),y.h);if(30<b.g.length){if(k(b)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,w=y;0>=w.l(b);)v=Z(v),w=Z(w);var A=ee(v,1),T=ee(w,1);for(w=ee(w,2),v=ee(v,2);!R(w);){var _=T.add(w);0>=_.l(b)&&(A=A.add(v),T=_),w=ee(w,1),v=ee(v,1)}return y=B(b,A.j(y)),new j(A,y)}for(A=p;0<=b.l(y);){for(v=Math.max(1,Math.floor(b.m()/y.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),T=u(v),_=T.j(y);k(_)||0<_.l(b);)v-=w,T=u(v),_=T.j(y);R(T)&&(T=m),A=A.add(T),b=B(b,_)}return new j(A,b)}n.A=function(b){return $(this,b).h},n.and=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)&b.i(w);return new o(v,this.h&b.h)},n.or=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)|b.i(w);return new o(v,this.h|b.h)},n.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)^b.i(w);return new o(v,this.h^b.h)};function Z(b){for(var y=b.g.length+1,v=[],w=0;w<y;w++)v[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(v,b.h)}function ee(b,y){var v=y>>5;y%=32;for(var w=b.g.length-v,A=[],T=0;T<w;T++)A[T]=0<y?b.i(T+v)>>>y|b.i(T+v+1)<<32-y:b.i(T+v);return new o(A,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,oy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,ar=o}).apply(typeof Tp<"u"?Tp:typeof self<"u"?self:typeof window<"u"?window:{});var fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ay,Mi,ly,Va,yu,cy,uy,hy;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof fa=="object"&&fa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break e;f=f[C]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,C={next:function(){if(!g&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function I(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,C,V){for(var H=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)H[ke-2]=arguments[ke];return h.prototype[C].apply(g,H)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function x(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const C=a.length||0,V=g.length||0;a.length=C+V;for(let H=0;H<V;H++)a[C+H]=g[H]}else a.push(g)}}class B{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function q(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var Z=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function ee(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,h){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let V=0;V<v.length;V++)f=v[V],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function T(a){l.setTimeout(()=>{throw a},0)}function _(){var a=zt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class oe{constructor(){this.h=this.g=null}add(h,f){const g=Oe.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Oe=new B(()=>new ze,a=>a.reset());class ze{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,Ee=!1,zt=new oe,Er=()=>{const a=l.Promise.resolve(void 0);Re=()=>{a.then(pn)}};var pn=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(f){T(f)}var h=Oe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function We(){this.s=this.s,this.C=this.C}We.prototype.s=!1,We.prototype.ma=function(){this.s||(this.s=!0,this.N())},We.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var uc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Tr(a,h){if(Qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{$(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:wr[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Tr.aa.h.call(this)}}R(Tr,Qe);var wr={2:"touch",3:"pen",4:"mouse"};Tr.prototype.h=function(){Tr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var mn="closure_listenable_"+(1e6*Math.random()|0),hi=0;function Ko(a,h,f,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=C,this.key=++hi,this.da=this.fa=!1}function Yt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function di(a){this.src=a,this.g={},this.h=0}di.prototype.add=function(a,h,f,g,C){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var H=S(a,h,g,C);return-1<H?(h=a[H],f||(h.fa=!1)):(h=new Ko(h,this.src,V,!!g,C),h.fa=f,a.push(h)),h};function E(a,h){var f=h.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=C)&&Array.prototype.splice.call(g,C,1),V&&(Yt(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function S(a,h,f,g){for(var C=0;C<a.length;++C){var V=a[C];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==g)return C}return-1}var D="closure_lm_"+(1e6*Math.random()|0),L={};function O(a,h,f,g,C){if(Array.isArray(h)){for(var V=0;V<h.length;V++)O(a,h[V],f,g,C);return null}return f=ce(f),a&&a[mn]?a.K(h,f,u(g)?!!g.capture:!1,C):M(a,h,f,!1,g,C)}function M(a,h,f,g,C,V){if(!h)throw Error("Invalid event type");var H=u(C)?!!C.capture:!!C,ke=W(a);if(ke||(a[D]=ke=new di(a)),f=ke.add(h,f,g,H,V),f.proxy)return f;if(g=J(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)uc||(C=H),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(F(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function J(){function a(f){return h.call(a.src,a.listener,f)}const h=re;return a}function K(a,h,f,g,C){if(Array.isArray(h))for(var V=0;V<h.length;V++)K(a,h[V],f,g,C);else g=u(g)?!!g.capture:!!g,f=ce(f),a&&a[mn]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=S(V,f,g,C),-1<f&&(Yt(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=W(a))&&(h=a.g[h.toString()],a=-1,h&&(a=S(h,f,g,C)),(f=-1<a?h[a]:null)&&z(f))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[mn])E(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(F(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=W(h))?(E(f,a),f.h==0&&(f.src=null,h[D]=null)):Yt(a)}}}function F(a){return a in L?L[a]:L[a]="on"+a}function re(a,h){if(a.da)a=!0;else{h=new Tr(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&z(a),a=f.call(g,h)}return a}function W(a){return a=a[D],a instanceof di?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function ae(){We.call(this),this.i=new di(this),this.M=this,this.F=null}R(ae,We),ae.prototype[mn]=!0,ae.prototype.removeEventListener=function(a,h,f,g){K(this,a,h,f,g)};function de(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Qe(h,a);else if(h instanceof Qe)h.target=h.target||a;else{var C=h;h=new Qe(g,a),w(h,C)}if(C=!0,f)for(var V=f.length-1;0<=V;V--){var H=h.g=f[V];C=ye(H,g,!0,h)&&C}if(H=h.g=a,C=ye(H,g,!0,h)&&C,C=ye(H,g,!1,h)&&C,f)for(V=0;V<f.length;V++)H=h.g=f[V],C=ye(H,g,!1,h)&&C}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Yt(f[g]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ae.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function ye(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,V=0;V<h.length;++V){var H=h[V];if(H&&!H.da&&H.capture==f){var ke=H.listener,nt=H.ha||H.src;H.fa&&E(a.i,H),C=ke.call(nt,g)!==!1&&C}}return C&&!g.defaultPrevented}function ot(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function et(a){a.g=ot(()=>{a.g=null,a.i&&(a.i=!1,et(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Lt extends We{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(a){We.call(this),this.h=a,this.g={}}R(at,We);var Fn=[];function fi(a){ee(a.g,function(h,f){this.g.hasOwnProperty(f)&&z(h)},a),a.g={}}at.prototype.N=function(){at.aa.N.call(this),fi(this)},at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=l.JSON.stringify,Ft=l.JSON.parse,Ho=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function hc(){}hc.prototype.h=null;function yd(a){return a.h||(a.h=a.i())}function vd(){}var pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dc(){Qe.call(this,"d")}R(dc,Qe);function fc(){Qe.call(this,"c")}R(fc,Qe);var br={},Id=null;function Go(){return Id=Id||new ae}br.La="serverreachability";function Ed(a){Qe.call(this,br.La,a)}R(Ed,Qe);function mi(a){const h=Go();de(h,new Ed(h))}br.STAT_EVENT="statevent";function Td(a,h){Qe.call(this,br.STAT_EVENT,a),this.stat=h}R(Td,Qe);function _t(a){const h=Go();de(h,new Td(h,a))}br.Ma="timingevent";function wd(a,h){Qe.call(this,br.Ma,a),this.size=h}R(wd,Qe);function gi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function _i(){this.g=!0}_i.prototype.xa=function(){this.g=!1};function yI(a,h,f,g,C,V){a.info(function(){if(a.g)if(V)for(var H="",ke=V.split("&"),nt=0;nt<ke.length;nt++){var Te=ke[nt].split("=");if(1<Te.length){var lt=Te[0];Te=Te[1];var ct=lt.split("_");H=2<=ct.length&&ct[1]=="type"?H+(lt+"="+Te+"&"):H+(lt+"=redacted&")}}else H=null;else H=V;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+f+`
`+H})}function vI(a,h,f,g,C,V,H){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+f+`
`+V+" "+H})}function cs(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+EI(a,f)+(g?" "+g:"")})}function II(a,h){a.info(function(){return"TIMEOUT: "+h})}_i.prototype.info=function(){};function EI(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var V=C[0];if(V!="noop"&&V!="stop"&&V!="close")for(var H=1;H<C.length;H++)C[H]=""}}}}return tt(f)}catch{return h}}var Wo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pc;function Qo(){}R(Qo,hc),Qo.prototype.g=function(){return new XMLHttpRequest},Qo.prototype.i=function(){return{}},pc=new Qo;function Un(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new at(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ad}function Ad(){this.i=null,this.g="",this.h=!1}var Sd={},mc={};function gc(a,h,f){a.L=1,a.v=Zo(gn(h)),a.m=f,a.P=!0,Rd(a,null)}function Rd(a,h){a.F=Date.now(),Jo(a),a.A=gn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),$d(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Ad,a.g=of(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Lt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Fn[0]=C.toString()),C=Fn);for(var V=0;V<C.length;V++){var H=O(f,C[V],g||h.handleEvent,!1,h.h||h);if(!H)break;h.g[H.key]=H}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),mi(),yI(a.i,a.u,a.A,a.l,a.R,a.m)}Un.prototype.ca=function(a){a=a.target;const h=this.M;h&&_n(a)==3?h.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const ct=_n(this.g);var h=this.g.Ba();const ds=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Wd(this.g)))){this.J||ct!=4||h==7||(h==8||0>=ds?mi(3):mi(2)),_c(this);var f=this.g.Z();this.X=f;t:if(Pd(this)){var g=Wd(this.g);a="";var C=g.length,V=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ar(this),yi(this);var H="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==C-1)});g.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=f==200,vI(this.i,this.u,this.A,this.l,this.R,ct,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,nt=this.g;if((ke=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(ke)){var Te=ke;break t}}Te=null}if(f=Te)cs(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yc(this,f);else{this.o=!1,this.s=3,_t(12),Ar(this),yi(this);break e}}if(this.P){f=!0;let Kt;for(;!this.J&&this.C<H.length;)if(Kt=TI(this,H),Kt==mc){ct==4&&(this.s=4,_t(14),f=!1),cs(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==Sd){this.s=4,_t(15),cs(this.i,this.l,H,"[Invalid Chunk]"),f=!1;break}else cs(this.i,this.l,Kt,null),yc(this,Kt);if(Pd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||H.length!=0||this.h.h||(this.s=1,_t(16),f=!1),this.o=this.o&&f,!f)cs(this.i,this.l,H,"[Invalid Chunked Response]"),Ar(this),yi(this);else if(0<H.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),bc(lt),lt.M=!0,_t(11))}}else cs(this.i,this.l,H,null),yc(this,H);ct==4&&Ar(this),this.o&&!this.J&&(ct==4?tf(this.j,this):(this.o=!1,Jo(this)))}else UI(this.g),f==400&&0<H.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Ar(this),yi(this)}}}catch{}finally{}};function Pd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function TI(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?mc:(f=Number(h.substring(f,g)),isNaN(f)?Sd:(g+=1,g+f>h.length?mc:(h=h.slice(g,g+f),a.C=g+f,h)))}Un.prototype.cancel=function(){this.J=!0,Ar(this)};function Jo(a){a.S=Date.now()+a.I,Cd(a,a.I)}function Cd(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=gi(m(a.ba,a),h)}function _c(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(II(this.i,this.A),this.L!=2&&(mi(),_t(17)),Ar(this),this.s=2,yi(this)):Cd(this,this.S-a)};function yi(a){a.j.G==0||a.J||tf(a.j,a)}function Ar(a){_c(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,fi(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function yc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||vc(f.h,a))){if(!a.K&&vc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ia(f),ra(f);else break e;wc(f),_t(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=gi(m(f.Za,f),6e3));if(1>=Vd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Rr(f,11)}else if((a.K||f.g==a)&&ia(f),!q(h))for(C=f.Da.g.parse(h),h=0;h<C.length;h++){let Te=C[h];if(f.T=Te[0],Te=Te[1],f.G==2)if(Te[0]=="c"){f.K=Te[1],f.ia=Te[2];const lt=Te[3];lt!=null&&(f.la=lt,f.j.info("VER="+f.la));const ct=Te[4];ct!=null&&(f.Aa=ct,f.j.info("SVER="+f.Aa));const ds=Te[5];ds!=null&&typeof ds=="number"&&0<ds&&(g=1.5*ds,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Kt=a.g;if(Kt){const aa=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(aa){var V=g.h;V.g||aa.indexOf("spdy")==-1&&aa.indexOf("quic")==-1&&aa.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Ic(V,V.h),V.h=null))}if(g.D){const Ac=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ac&&(g.ya=Ac,Me(g.I,g.D,Ac))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var H=a;if(g.qa=sf(g,g.J?g.ia:null,g.W),H.K){Dd(g.h,H);var ke=H,nt=g.L;nt&&(ke.I=nt),ke.B&&(_c(ke),Jo(ke)),g.g=H}else Zd(g);0<f.i.length&&sa(f)}else Te[0]!="stop"&&Te[0]!="close"||Rr(f,7);else f.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?Rr(f,7):Tc(f):Te[0]!="noop"&&f.l&&f.l.ta(Te),f.v=0)}}mi(4)}catch{}}var wI=class{constructor(a,h){this.g=a,this.map=h}};function xd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vd(a){return a.h?1:a.g?a.g.size:0}function vc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ic(a,h){a.g?a.g.add(h):a.h=h}function Dd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}xd.prototype.cancel=function(){if(this.i=Nd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Nd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function bI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function AI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Od(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=AI(a),g=bI(a),C=g.length,V=0;V<C;V++)h.call(void 0,g[V],f&&f[V],a)}var Md=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SI(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),C=null;if(0<=g){var V=a[f].substring(0,g);C=a[f].substring(g+1)}else V=a[f];h(V,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Sr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Sr){this.h=a.h,Yo(this,a.j),this.o=a.o,this.g=a.g,Xo(this,a.s),this.l=a.l;var h=a.i,f=new Ei;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Ld(this,f),this.m=a.m}else a&&(h=String(a).match(Md))?(this.h=!1,Yo(this,h[1]||"",!0),this.o=vi(h[2]||""),this.g=vi(h[3]||"",!0),Xo(this,h[4]),this.l=vi(h[5]||"",!0),Ld(this,h[6]||"",!0),this.m=vi(h[7]||"")):(this.h=!1,this.i=new Ei(null,this.h))}Sr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ii(h,Fd,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ii(h,Fd,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ii(f,f.charAt(0)=="/"?CI:PI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ii(f,kI)),a.join("")};function gn(a){return new Sr(a)}function Yo(a,h,f){a.j=f?vi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Xo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Ld(a,h,f){h instanceof Ei?(a.i=h,VI(a.i,a.h)):(f||(h=Ii(h,xI)),a.i=new Ei(h,a.h))}function Me(a,h,f){a.i.set(h,f)}function Zo(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function vi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ii(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,RI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function RI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fd=/[#\/\?@]/g,PI=/[#\?:]/g,CI=/[#\?]/g,xI=/[#\?@]/g,kI=/#/g;function Ei(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Bn(a){a.g||(a.g=new Map,a.h=0,a.i&&SI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Ei.prototype,n.add=function(a,h){Bn(this),this.i=null,a=us(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Ud(a,h){Bn(a),h=us(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Bd(a,h){return Bn(a),h=us(a,h),a.g.has(h)}n.forEach=function(a,h){Bn(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(h,C,g,this)},this)},this)},n.na=function(){Bn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const C=a[g];for(let V=0;V<C.length;V++)f.push(h[g])}return f},n.V=function(a){Bn(this);let h=[];if(typeof a=="string")Bd(this,a)&&(h=h.concat(this.g.get(us(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},n.set=function(a,h){return Bn(this),this.i=null,a=us(this,a),Bd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function $d(a,h,f){Ud(a,h),0<f.length&&(a.i=null,a.g.set(us(a,h),k(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const V=encodeURIComponent(String(g)),H=this.V(g);for(g=0;g<H.length;g++){var C=V;H[g]!==""&&(C+="="+encodeURIComponent(String(H[g]))),a.push(C)}}return this.i=a.join("&")};function us(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function VI(a,h){h&&!a.j&&(Bn(a),a.i=null,a.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Ud(this,g),$d(this,C,f))},a)),a.j=h}function DI(a,h){const f=new _i;if(l.Image){const g=new Image;g.onload=I($n,f,"TestLoadImage: loaded",!0,h,g),g.onerror=I($n,f,"TestLoadImage: error",!1,h,g),g.onabort=I($n,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=I($n,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function NI(a,h){const f=new _i,g=new AbortController,C=setTimeout(()=>{g.abort(),$n(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(C),V.ok?$n(f,"TestPingServer: ok",!0,h):$n(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),$n(f,"TestPingServer: error",!1,h)})}function $n(a,h,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function OI(){this.g=new Ho}function MI(a,h,f){const g=f||"";try{Od(a,function(C,V){let H=C;u(C)&&(H=tt(C)),h.push(g+V+"="+encodeURIComponent(H))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function ea(a){this.l=a.Ub||null,this.j=a.eb||!1}R(ea,hc),ea.prototype.g=function(){return new ta(this.l,this.j)},ea.prototype.i=function(a){return function(){return a}}({});function ta(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ta,ae),n=ta.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,wi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ti(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function jd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ti(this):wi(this),this.readyState==3&&jd(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Ti(this))},n.Qa=function(a){this.g&&(this.response=a,Ti(this))},n.ga=function(){this.g&&Ti(this)};function Ti(a){a.readyState=4,a.l=null,a.j=null,a.v=null,wi(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function wi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qd(a){let h="";return ee(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Ec(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=qd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Me(a,h,f))}function $e(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R($e,ae);var LI=/^https?$/i,FI=["POST","PUT"];n=$e.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pc.g(),this.v=this.o?yd(this.o):yd(pc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){zd(this,V);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(FI,h,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,H]of f)this.g.setRequestHeader(V,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gd(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){zd(this,V)}};function zd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Kd(a),na(a)}function Kd(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),na(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),na(this,!0)),$e.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Hd(this):this.bb())},n.bb=function(){Hd(this)};function Hd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_n(a)!=4||a.Z()!=2)){if(a.u&&_n(a)==4)ot(a.Ea,0,a);else if(de(a,"readystatechange"),_n(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=H===0){var C=String(a.D).match(Md)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!LI.test(C?C.toLowerCase():"")}f=g}if(f)de(a,"complete"),de(a,"success");else{a.m=6;try{var V=2<_n(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Kd(a)}}finally{na(a)}}}}function na(a,h){if(a.g){Gd(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||de(a,"ready");try{f.onreadystatechange=g}catch{}}}function Gd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function _n(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ft(h)}};function Wd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function UI(a){const h={};a=(a.g&&2<=_n(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(q(a[g]))continue;var f=A(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[C]||[];h[C]=V,V.push(f)}b(h,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Qd(a){this.Aa=0,this.i=[],this.j=new _i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bi("baseRetryDelayMs",5e3,a),this.cb=bi("retryDelaySeedMs",1e4,a),this.Wa=bi("forwardChannelMaxRetries",2,a),this.wa=bi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new xd(a&&a.concurrentRequestLimit),this.Da=new OI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qd.prototype,n.la=8,n.G=1,n.connect=function(a,h,f,g){_t(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=sf(this,null,this.W),sa(this)};function Tc(a){if(Jd(a),a.G==3){var h=a.U++,f=gn(a.I);if(Me(f,"SID",a.K),Me(f,"RID",h),Me(f,"TYPE","terminate"),Ai(a,f),h=new Un(a,a.j,h),h.L=2,h.v=Zo(gn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=of(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Jo(h)}rf(a)}function ra(a){a.g&&(bc(a),a.g.cancel(),a.g=null)}function Jd(a){ra(a),a.u&&(l.clearTimeout(a.u),a.u=null),ia(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function sa(a){if(!kd(a.h)&&!a.s){a.s=!0;var h=a.Ga;Re||Er(),Ee||(Re(),Ee=!0),zt.add(h,a),a.B=0}}function BI(a,h){return Vd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=gi(m(a.Ga,a,h),nf(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Un(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),w(V,this.S)):V=this.S),this.m!==null||this.O||(C.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Xd(this,C,h),f=gn(this.I),Me(f,"RID",a),Me(f,"CVER",22),this.D&&Me(f,"X-HTTP-Session-Id",this.D),Ai(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(qd(V)))+"&"+h:this.m&&Ec(f,this.m,V)),Ic(this.h,C),this.Ua&&Me(f,"TYPE","init"),this.P?(Me(f,"$req",h),Me(f,"SID","null"),C.T=!0,gc(C,f,null)):gc(C,f,h),this.G=2}}else this.G==3&&(a?Yd(this,a):this.i.length==0||kd(this.h)||Yd(this))};function Yd(a,h){var f;h?f=h.l:f=a.U++;const g=gn(a.I);Me(g,"SID",a.K),Me(g,"RID",f),Me(g,"AID",a.T),Ai(a,g),a.m&&a.o&&Ec(g,a.m,a.o),f=new Un(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Xd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ic(a.h,f),gc(f,g,h)}function Ai(a,h){a.H&&ee(a.H,function(f,g){Me(h,g,f)}),a.l&&Od({},function(f,g){Me(h,g,f)})}function Xd(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let V=-1;for(;;){const H=["count="+f];V==-1?0<f?(V=C[0].g,H.push("ofs="+V)):V=0:H.push("ofs="+V);let ke=!0;for(let nt=0;nt<f;nt++){let Te=C[nt].g;const lt=C[nt].map;if(Te-=V,0>Te)V=Math.max(0,C[nt].g-100),ke=!1;else try{MI(lt,H,"req"+Te+"_")}catch{g&&g(lt)}}if(ke){g=H.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Zd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Re||Er(),Ee||(Re(),Ee=!0),zt.add(h,a),a.v=0}}function wc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=gi(m(a.Fa,a),nf(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,ef(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=gi(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),ra(this),ef(this))};function bc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ef(a){a.g=new Un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=gn(a.qa);Me(h,"RID","rpc"),Me(h,"SID",a.K),Me(h,"AID",a.T),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(h,"TO",a.ja),Me(h,"TYPE","xmlhttp"),Ai(a,h),a.m&&a.o&&Ec(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Zo(gn(h)),f.m=null,f.P=!0,Rd(f,a)}n.Za=function(){this.C!=null&&(this.C=null,ra(this),wc(this),_t(19))};function ia(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function tf(a,h){var f=null;if(a.g==h){ia(a),bc(a),a.g=null;var g=2}else if(vc(a.h,h))f=h.D,Dd(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;g=Go(),de(g,new wd(g,f)),sa(a)}else Zd(a);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&BI(a,h)||g==2&&wc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),C){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function nf(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Rr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const C=!g;g=new Sr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Yo(g,"https"),Zo(g),C?DI(g.toString(),f):NI(g.toString(),f)}else _t(2);a.G=0,a.l&&a.l.sa(h),rf(a),Jd(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function rf(a){if(a.G=0,a.ka=[],a.l){const h=Nd(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ka,h),x(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function sf(a,h,f){var g=f instanceof Sr?gn(f):new Sr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Xo(g,g.s);else{var C=l.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var V=new Sr(null);g&&Yo(V,g),h&&(V.g=h),C&&Xo(V,C),f&&(V.l=f),g=V}return f=a.D,h=a.ya,f&&h&&Me(g,f,h),Me(g,"VER",a.la),Ai(a,g),g}function of(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new $e(new ea({eb:f})):new $e(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function af(){}n=af.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oa(){}oa.prototype.g=function(a,h){return new St(a,h)};function St(a,h){ae.call(this),this.g=new Qd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!q(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!q(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new hs(this)}R(St,ae),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Tc(this.g)},St.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=tt(a),a=f);h.i.push(new wI(h.Ya++,a)),h.G==3&&sa(h)},St.prototype.N=function(){this.g.l=null,delete this.j,Tc(this.g),delete this.g,St.aa.N.call(this)};function lf(a){dc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(lf,dc);function cf(){fc.call(this),this.status=1}R(cf,fc);function hs(a){this.g=a}R(hs,af),hs.prototype.ua=function(){de(this.g,"a")},hs.prototype.ta=function(a){de(this.g,new lf(a))},hs.prototype.sa=function(a){de(this.g,new cf)},hs.prototype.ra=function(){de(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,hy=function(){return new oa},uy=function(){return Go()},cy=br,yu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wo.NO_ERROR=0,Wo.TIMEOUT=8,Wo.HTTP_ERROR=6,Va=Wo,bd.COMPLETE="complete",ly=bd,vd.EventType=pi,pi.OPEN="a",pi.CLOSE="b",pi.ERROR="c",pi.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Mi=vd,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,ay=$e}).apply(typeof fa<"u"?fa:typeof self<"u"?self:typeof window<"u"?window:{});const wp="@firebase/firestore",bp="4.7.16";/**
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
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
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
 */const Xr=new dh("@firebase/firestore");function ws(){return Xr.logLevel}function U(n,...e){if(Xr.logLevel<=me.DEBUG){const t=e.map(Ah);Xr.debug(`Firestore (${oi}): ${n}`,...t)}}function It(n,...e){if(Xr.logLevel<=me.ERROR){const t=e.map(Ah);Xr.error(`Firestore (${oi}): ${n}`,...t)}}function Zr(n,...e){if(Xr.logLevel<=me.WARN){const t=e.map(Ah);Xr.warn(`Firestore (${oi}): ${n}`,...t)}}function Ah(n){if(typeof n=="string")return n;try{/**
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
 */function X(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,dy(n,r,t)}function dy(n,e,t){let r=`FIRESTORE (${oi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw It(r),new Error(r)}function ne(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||dy(e,s,r)}function he(n,e){return n}/**
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
 */class fy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(rt.UNAUTHENTICATED))}shutdown(){}}class AS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class SS{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string",31837,{l:r}),new fy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new rt(e)}}class RS{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class PS{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new RS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ap{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ap(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ap(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function xS(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function py(){return new TextEncoder}/**
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
 */class my{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=xS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function vu(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=py(),o=kS(i.encode(Sp(n,t)),i.encode(Sp(e,t)));return o!==0?o:ue(r,s)}}t+=r>65535?2:1}return ue(n.length,e.length)}function Sp(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function kS(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function qs(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function gy(n){return n+"\0"}/**
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
 */const Rp=-62135596800,Pp=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Pp);return new Be(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Y(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Y(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rp)throw new Y(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pp}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Rp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const Cp="__name__";class tn{constructor(e,t,r){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&X(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return tn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=tn.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=tn.isNumericId(e),s=tn.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?tn.extractNumericId(e).compare(tn.extractNumericId(t)):vu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ar.fromString(e.substring(4,e.length-2))}}class Se extends tn{construct(e,t,r){return new Se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Se(t)}static emptyPath(){return new Se([])}}const VS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends tn{construct(e,t,r){return new Ue(e,t,r)}static isValidIdentifier(e){return VS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cp}static keyField(){return new Ue([Cp])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(t)}static emptyPath(){return new Ue([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Se.fromString(e))}static fromName(e){return new Q(Se.fromString(e).popFirst(5))}static empty(){return new Q(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Se(e.slice()))}}/**
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
 */const fo=-1;class ul{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Iu(n){return n.fields.find(e=>e.kind===2)}function Nr(n){return n.fields.filter(e=>e.kind!==2)}ul.UNKNOWN_ID=-1;class Da{constructor(e,t){this.fieldPath=e,this.kind=t}}class po{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new po(0,Mt.min())}}function DS(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Be(t+1,0):new Be(t,r));return new Mt(s,Q.empty(),e)}function _y(n){return new Mt(n.readTime,n.key,fo)}class Mt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Mt(se.min(),Q.empty(),fo)}static max(){return new Mt(se.max(),Q.empty(),fo)}}function Sh(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const yy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function as(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==yy)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */const Ct="SimpleDb";class jl{static open(e,t,r,s){try{return new jl(t,e.transaction(s,r))}catch(i){throw new Qi(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Sn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Qi(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=Rh(r.target.error);this.S.reject(new Qi(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(U(Ct,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new OS(t)}}class lr{static delete(e){return U(Ct,"Removing database:",e),Lr(l_().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!__())return!1;if(lr.F())return!0;const e=Je(),t=lr.M(e),r=0<t&&t<10,s=Iy(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,lr.M(Je())===12.2&&It("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(U(Ct,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Qi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new Y(N.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new Y(N.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Qi(e,o))},s.onupgradeneeded=i=>{U(Ct,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${o.version}`);this.B.q(o,s.transaction,i.oldVersion,this.version).next(()=>{U(Ct,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const r=t.target;this.L=r.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const l=jl.open(this.db,e,i?"readonly":"readwrite",r),c=s(l).next(u=>(l.v(),u)).catch(u=>(l.abort(u),P.reject(u))).toPromise();return c.catch(()=>{}),await l.D,c}catch(l){const c=l,u=c.name!=="FirebaseError"&&o<3;if(U(Ct,"Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Iy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class NS{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return Lr(this.K.delete())}}class Qi extends Y{constructor(e,t){super(N.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function vr(n){return n.name==="IndexedDbTransactionError"}class OS{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(U(Ct,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(U(Ct,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Lr(r)}add(e){return U(Ct,"ADD",this.store.name,e,e),Lr(this.store.add(e))}get(e){return Lr(this.store.get(e)).next(t=>(t===void 0&&(t=null),U(Ct,"GET",this.store.name,e,t),t))}delete(e){return U(Ct,"DELETE",this.store.name,e),Lr(this.store.delete(e))}count(){return U(Ct,"COUNT",this.store.name),Lr(this.store.count())}J(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new P((o,l)=>{i.onerror=c=>{l(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.Y(i,(l,c)=>{o.push(c)}).next(()=>o)}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new P((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}X(e,t){U(Ct,"DELETE ALL",this.store.name);const r=this.options(e,t);r.ee=!1;const s=this.cursor(r);return this.Y(s,(i,o,l)=>l.delete())}te(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.Y(s,t)}ne(e){const t=this.cursor({});return new P((r,s)=>{t.onerror=i=>{const o=Rh(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():r()}):r()}})}Y(e,t){const r=[];return new P((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void s();const c=new NS(l),u=t(l.primaryKey,l.value,c);if(u instanceof P){const d=u.catch(p=>(c.done(),P.reject(p)));r.push(d)}c.isDone?s():c.j===null?l.continue():l.continue(c.j)}}).next(()=>P.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.ee?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Lr(n){return new P((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Rh(r.target.error);t(s)}})}let xp=!1;function Rh(n){const e=lr.M(Je());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new Y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return xp||(xp=!0,setTimeout(()=>{throw r},0)),r}}return n}const Ji="IndexBackfiller";class MS{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){U(Ji,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();U(Ji,`Documents written: ${t}`)}catch(t){vr(t)?U(Ji,"Ignoring IndexedDB error during index backfill: ",t):await as(t)}await this.ie(6e4)})}}class LS{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const r=new Set;let s=t,i=!0;return P.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U(Ji,`Processing collection: ${o}`),this._e(e,o,s).next(l=>{s-=l,r.add(o)});i=!1})).next(()=>t-s)}_e(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ae(s,i)).next(l=>(U(Ji,`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,t,l))).next(()=>o.size)}))}ae(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=_y(i);Sh(o,r)>0&&(r=o)}),new Mt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class $t{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}$t.le=-1;/**
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
 */const zr=-1;function ql(n){return n==null}function mo(n){return n===0&&1/n==-1/0}function FS(n){return typeof n=="number"&&Number.isInteger(n)&&!mo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const hl="";function gt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=kp(e)),e=US(n.get(t),e);return kp(e)}function US(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case hl:t+="";break;default:t+=i}}return t}function kp(n){return n+hl+""}function rn(n){const e=n.length;if(ne(e>=2,64408,{path:n}),e===2)return ne(n.charAt(0)===hl&&n.charAt(1)==="",56145,{path:n}),Se.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(hl,i);switch((o<0||o>t)&&X(50515,{path:n}),n.charAt(o+1)){case"":const l=n.substring(i,o);let c;s.length===0?c=l:(s+=l,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:X(61167,{path:n})}i=o+2}return new Se(r)}/**
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
 */const Or="remoteDocuments",Mo="owner",ms="owner",go="mutationQueues",BS="userId",Ht="mutations",Vp="batchId",$r="userMutationsIndex",Dp=["userId","batchId"];/**
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
 */function Na(n,e){return[n,gt(e)]}function Ey(n,e,t){return[n,gt(e),t]}const $S={},zs="documentMutations",dl="remoteDocumentsV14",jS=["prefixPath","collectionGroup","readTime","documentId"],Oa="documentKeyIndex",qS=["prefixPath","collectionGroup","documentId"],Ty="collectionGroupIndex",zS=["collectionGroup","readTime","prefixPath","documentId"],_o="remoteDocumentGlobal",Eu="remoteDocumentGlobalKey",Ks="targets",wy="queryTargetsIndex",KS=["canonicalId","targetId"],Hs="targetDocuments",HS=["targetId","path"],Ph="documentTargetsIndex",GS=["path","targetId"],fl="targetGlobalKey",Kr="targetGlobal",yo="collectionParents",WS=["collectionId","parent"],Gs="clientMetadata",QS="clientId",zl="bundles",JS="bundleId",Kl="namedQueries",YS="name",Ch="indexConfiguration",XS="indexId",Tu="collectionGroupIndex",ZS="collectionGroup",Yi="indexState",eR=["indexId","uid"],by="sequenceNumberIndex",tR=["uid","sequenceNumber"],Xi="indexEntries",nR=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ay="documentKeyIndex",rR=["indexId","uid","orderedDocumentKey"],Hl="documentOverlays",sR=["userId","collectionPath","documentId"],wu="collectionPathOverlayIndex",iR=["userId","collectionPath","largestBatchId"],Sy="collectionGroupOverlayIndex",oR=["userId","collectionGroup","largestBatchId"],xh="globals",aR="name",Ry=[go,Ht,zs,Or,Ks,Mo,Kr,Hs,Gs,_o,yo,zl,Kl],lR=[...Ry,Hl],Py=[go,Ht,zs,dl,Ks,Mo,Kr,Hs,Gs,_o,yo,zl,Kl,Hl],Cy=Py,kh=[...Cy,Ch,Yi,Xi],cR=kh,xy=[...kh,xh],uR=xy;/**
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
 */class bu extends vy{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function Ye(n,e){const t=he(n);return lr.N(t.he,e)}/**
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
 */function Np(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ir(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ky(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Fe{constructor(e,t){this.comparator=e,this.root=t||st.EMPTY}insert(e,t){return new Fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pa(this.root,e,this.comparator,!0)}}class pa{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new st(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new st(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Op(this.data.getIterator())}getIteratorFrom(e){return new Op(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ce(this.comparator);return t.data=e,t}}class Op{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function gs(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class At{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new At([])}unionWith(e){let t=new Ce(Ue.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new At(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Vy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vy("Invalid base64 string: "+i):i}}(e);return new Ge(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const hR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=hR.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Dn(n){return typeof n=="string"?Ge.fromBase64String(n):Ge.fromUint8Array(n)}/**
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
 */const Dy="server_timestamp",Ny="__type__",Oy="__previous_value__",My="__local_write_time__";function Vh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ny])===null||t===void 0?void 0:t.stringValue)===Dy}function Gl(n){const e=n.mapValue.fields[Oy];return Vh(e)?Gl(e):e}function vo(n){const e=Vn(n.mapValue.fields[My].timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class dR{constructor(e,t,r,s,i,o,l,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const pl="(default)";class es{constructor(e,t){this.projectId=e,this.database=t||pl}static empty(){return new es("","")}get isDefaultDatabase(){return this.database===pl}isEqual(e){return e instanceof es&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Dh="__type__",Ly="__max__",nr={mapValue:{fields:{__type__:{stringValue:Ly}}}},Nh="__vector__",Ws="value",Ma={nullValue:"NULL_VALUE"};function dr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vh(n)?4:Fy(n)?9007199254740991:Wl(n)?10:11:X(28295,{value:n})}function hn(n,e){if(n===e)return!0;const t=dr(n);if(t!==dr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return vo(n).isEqual(vo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Vn(s.timestampValue),l=Vn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Dn(s.bytesValue).isEqual(Dn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Le(s.doubleValue),l=Le(i.doubleValue);return o===l?mo(o)===mo(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return qs(n.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Np(o)!==Np(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!hn(o[c],l[c])))return!1;return!0}(n,e);default:return X(52216,{left:n})}}function Io(n,e){return(n.values||[]).find(t=>hn(t,e))!==void 0}function fr(n,e){if(n===e)return 0;const t=dr(n),r=dr(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Le(i.integerValue||i.doubleValue),c=Le(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Mp(n.timestampValue,e.timestampValue);case 4:return Mp(vo(n),vo(e));case 5:return vu(n.stringValue,e.stringValue);case 6:return function(i,o){const l=Dn(i),c=Dn(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=ue(l[u],c[u]);if(d!==0)return d}return ue(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ue(Le(i.latitude),Le(o.latitude));return l!==0?l:ue(Le(i.longitude),Le(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Lp(n.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},I=(l=p[Ws])===null||l===void 0?void 0:l.arrayValue,R=(c=m[Ws])===null||c===void 0?void 0:c.arrayValue,k=ue(((u=I==null?void 0:I.values)===null||u===void 0?void 0:u.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Lp(I,R)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===nr.mapValue&&o===nr.mapValue)return 0;if(i===nr.mapValue)return 1;if(o===nr.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=vu(c[p],d[p]);if(m!==0)return m;const I=fr(l[c[p]],u[d[p]]);if(I!==0)return I}return ue(c.length,d.length)}(n.mapValue,e.mapValue);default:throw X(23264,{Pe:t})}}function Mp(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Vn(n),r=Vn(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function Lp(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=fr(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function Qs(n){return Au(n)}function Au(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Vn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Dn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Au(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Au(t.fields[o])}`;return s+"}"}(n.mapValue):X(61005,{value:n})}function La(n){switch(dr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gl(n);return e?16+La(e):16;case 5:return 2*n.stringValue.length;case 6:return Dn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+La(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Ir(r.fields,(i,o)=>{s+=i.length+La(o)}),s}(n.mapValue);default:throw X(13486,{value:n})}}function Eo(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Su(n){return!!n&&"integerValue"in n}function To(n){return!!n&&"arrayValue"in n}function Fp(n){return!!n&&"nullValue"in n}function Up(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fa(n){return!!n&&"mapValue"in n}function Wl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Dh])===null||t===void 0?void 0:t.stringValue)===Nh}function Zi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ir(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Zi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Zi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Fy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ly}const Uy={mapValue:{fields:{[Dh]:{stringValue:Nh},[Ws]:{arrayValue:{}}}}};function fR(n){return"nullValue"in n?Ma:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Eo(es.empty(),Q.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Wl(n)?Uy:{mapValue:{}}:X(35942,{value:n})}function pR(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Eo(es.empty(),Q.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Uy:"mapValue"in n?Wl(n)?{mapValue:{}}:nr:X(61959,{value:n})}function Bp(n,e){const t=fr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function $p(n,e){const t=fr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Fa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zi(t)}setAll(e){let t=Ue.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=Zi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Fa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Fa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ir(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pt(Zi(this.value))}}function By(n){const e=[];return Ir(n.fields,(t,r)=>{const s=new Ue([t]);if(Fa(r)){const i=By(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new At(e)}/**
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
 */class Js{constructor(e,t){this.position=e,this.inclusive=t}}function jp(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),t.key):r=fr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function qp(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!hn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ml{constructor(e,t="asc"){this.field=e,this.dir=t}}function mR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class $y{}class ge extends $y{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new gR(e,t,r):t==="array-contains"?new vR(e,r):t==="in"?new Gy(e,r):t==="not-in"?new IR(e,r):t==="array-contains-any"?new ER(e,r):new ge(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new _R(e,r):new yR(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(fr(t,this.value)):t!==null&&dr(this.value)===dr(t)&&this.matchesComparison(fr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pe extends $y{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Pe(e,t)}matches(e){return Ys(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Ys(n){return n.op==="and"}function Ru(n){return n.op==="or"}function Oh(n){return jy(n)&&Ys(n)}function jy(n){for(const e of n.filters)if(e instanceof Pe)return!1;return!0}function Pu(n){if(n instanceof ge)return n.field.canonicalString()+n.op.toString()+Qs(n.value);if(Oh(n))return n.filters.map(e=>Pu(e)).join(",");{const e=n.filters.map(t=>Pu(t)).join(",");return`${n.op}(${e})`}}function qy(n,e){return n instanceof ge?function(r,s){return s instanceof ge&&r.op===s.op&&r.field.isEqual(s.field)&&hn(r.value,s.value)}(n,e):n instanceof Pe?function(r,s){return s instanceof Pe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&qy(o,s.filters[l]),!0):!1}(n,e):void X(19439)}function zy(n,e){const t=n.filters.concat(e);return Pe.create(t,n.op)}function Ky(n){return n instanceof ge?function(t){return`${t.field.canonicalString()} ${t.op} ${Qs(t.value)}`}(n):n instanceof Pe?function(t){return t.op.toString()+" {"+t.getFilters().map(Ky).join(" ,")+"}"}(n):"Filter"}class gR extends ge{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class _R extends ge{constructor(e,t){super(e,"in",t),this.keys=Hy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class yR extends ge{constructor(e,t){super(e,"not-in",t),this.keys=Hy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Hy(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Q.fromName(r.referenceValue))}class vR extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return To(t)&&Io(t.arrayValue,this.value)}}class Gy extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Io(this.value.arrayValue,t)}}class IR extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(Io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Io(this.value.arrayValue,t)}}class ER extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!To(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Io(this.value.arrayValue,r))}}/**
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
 */class TR{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function Cu(n,e=null,t=[],r=[],s=null,i=null,o=null){return new TR(n,e,t,r,s,i,o)}function ts(n){const e=he(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Pu(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ql(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Qs(r)).join(",")),e.Ie=t}return e.Ie}function Lo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!mR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qy(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!qp(n.startAt,e.startAt)&&qp(n.endAt,e.endAt)}function gl(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function _l(n,e){return n.filters.filter(t=>t instanceof ge&&t.field.isEqual(e))}function zp(n,e,t){let r=Ma,s=!0;for(const i of _l(n,e)){let o=Ma,l=!0;switch(i.op){case"<":case"<=":o=fR(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,l=!1;break;case"!=":case"not-in":o=Ma}Bp({value:r,inclusive:s},{value:o,inclusive:l})<0&&(r=o,s=l)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Bp({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Kp(n,e,t){let r=nr,s=!0;for(const i of _l(n,e)){let o=nr,l=!0;switch(i.op){case">=":case">":o=pR(i.value),l=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,l=!1;break;case"!=":case"not-in":o=nr}$p({value:r,inclusive:s},{value:o,inclusive:l})>0&&(r=o,s=l)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];$p({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Fo{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function wR(n,e,t,r,s,i,o,l){return new Fo(n,e,t,r,s,i,o,l)}function Mh(n){return new Fo(n)}function Hp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wy(n){return n.collectionGroup!==null}function eo(n){const e=he(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ce(Ue.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ml(i,r))}),t.has(Ue.keyField().canonicalString())||e.Ee.push(new ml(Ue.keyField(),r))}return e.Ee}function qt(n){const e=he(n);return e.de||(e.de=bR(e,eo(n))),e.de}function bR(n,e){if(n.limitType==="F")return Cu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ml(s.field,i)});const t=n.endAt?new Js(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Js(n.startAt.position,n.startAt.inclusive):null;return Cu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function xu(n,e){const t=n.filters.concat([e]);return new Fo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ku(n,e,t){return new Fo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ql(n,e){return Lo(qt(n),qt(e))&&n.limitType===e.limitType}function Qy(n){return`${ts(qt(n))}|lt:${n.limitType}`}function bs(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Ky(s)).join(", ")}]`),ql(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Qs(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Qs(s)).join(",")),`Target(${r})`}(qt(n))}; limitType=${n.limitType})`}function Uo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of eo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=jp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,eo(r),s)||r.endAt&&!function(o,l,c){const u=jp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,eo(r),s))}(n,e)}function AR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jy(n){return(e,t)=>{let r=!1;for(const s of eo(n)){const i=SR(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function SR(n,e,t){const r=n.field.isKeyField()?Q.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?fr(c,u):X(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:n.dir})}}/**
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
 */class Mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ir(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ky(this.inner)}size(){return this.innerSize}}/**
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
 */const RR=new Fe(Q.comparator);function Nt(){return RR}const Yy=new Fe(Q.comparator);function Li(...n){let e=Yy;for(const t of n)e=e.insert(t.key,t);return e}function Xy(n){let e=Yy;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function sn(){return to()}function Zy(){return to()}function to(){return new Mn(n=>n.toString(),(n,e)=>n.isEqual(e))}const PR=new Fe(Q.comparator),CR=new Ce(Q.comparator);function pe(...n){let e=CR;for(const t of n)e=e.add(t);return e}const xR=new Ce(ue);function kR(){return xR}/**
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
 */function Lh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mo(e)?"-0":e}}function ev(n){return{integerValue:""+n}}function VR(n,e){return FS(e)?ev(e):Lh(n,e)}/**
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
 */class Jl{constructor(){this._=void 0}}function DR(n,e,t){return n instanceof wo?function(s,i){const o={fields:{[Ny]:{stringValue:Dy},[My]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vh(i)&&(i=Gl(i)),i&&(o.fields[Oy]=i),{mapValue:o}}(t,e):n instanceof Xs?nv(n,e):n instanceof Zs?rv(n,e):function(s,i){const o=tv(s,i),l=Gp(o)+Gp(s.Re);return Su(o)&&Su(s.Re)?ev(l):Lh(s.serializer,l)}(n,e)}function NR(n,e,t){return n instanceof Xs?nv(n,e):n instanceof Zs?rv(n,e):t}function tv(n,e){return n instanceof bo?function(r){return Su(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class wo extends Jl{}class Xs extends Jl{constructor(e){super(),this.elements=e}}function nv(n,e){const t=sv(e);for(const r of n.elements)t.some(s=>hn(s,r))||t.push(r);return{arrayValue:{values:t}}}class Zs extends Jl{constructor(e){super(),this.elements=e}}function rv(n,e){let t=sv(e);for(const r of n.elements)t=t.filter(s=>!hn(s,r));return{arrayValue:{values:t}}}class bo extends Jl{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Gp(n){return Le(n.integerValue||n.doubleValue)}function sv(n){return To(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class OR{constructor(e,t){this.field=e,this.transform=t}}function MR(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Xs&&s instanceof Xs||r instanceof Zs&&s instanceof Zs?qs(r.elements,s.elements,hn):r instanceof bo&&s instanceof bo?hn(r.Re,s.Re):r instanceof wo&&s instanceof wo}(n.transform,e.transform)}class LR{constructor(e,t){this.version=e,this.transformResults=t}}class Tt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tt}static exists(e){return new Tt(void 0,e)}static updateTime(e){return new Tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ua(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yl{}function iv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Xl(n.key,Tt.none()):new ai(n.key,n.data,Tt.none());{const t=n.data,r=pt.empty();let s=new Ce(Ue.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ln(n.key,r,new At(s.toArray()),Tt.none())}}function FR(n,e,t){n instanceof ai?function(s,i,o){const l=s.value.clone(),c=Qp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Ln?function(s,i,o){if(!Ua(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Qp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(ov(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function no(n,e,t,r){return n instanceof ai?function(i,o,l,c){if(!Ua(i.precondition,o))return l;const u=i.value.clone(),d=Jp(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ln?function(i,o,l,c){if(!Ua(i.precondition,o))return l;const u=Jp(i.fieldTransforms,c,o),d=o.data;return d.setAll(ov(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,l){return Ua(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function UR(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=tv(r.transform,s||null);i!=null&&(t===null&&(t=pt.empty()),t.set(r.field,i))}return t||null}function Wp(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qs(r,s,(i,o)=>MR(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ai extends Yl{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ln extends Yl{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ov(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Qp(n,e,t){const r=new Map;ne(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,NR(o,l,t[s]))}return r}function Jp(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,DR(i,o,e))}return r}class Xl extends Yl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class av extends Yl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Fh{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&FR(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=no(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=no(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Zy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=iv(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),pe())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(t,r)=>Wp(t,r))&&qs(this.baseMutations,e.baseMutations,(t,r)=>Wp(t,r))}}class Uh{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ne(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return PR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Uh(e,t,r,s)}}/**
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
 */class Bh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class BR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ke,ve;function $R(n){switch(n){case N.OK:return X(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return X(15467,{code:n})}}function lv(n){if(n===void 0)return It("GRPC error has no .code"),N.UNKNOWN;switch(n){case Ke.OK:return N.OK;case Ke.CANCELLED:return N.CANCELLED;case Ke.UNKNOWN:return N.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return N.INTERNAL;case Ke.UNAVAILABLE:return N.UNAVAILABLE;case Ke.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ke.NOT_FOUND:return N.NOT_FOUND;case Ke.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ke.ABORTED:return N.ABORTED;case Ke.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ke.DATA_LOSS:return N.DATA_LOSS;default:return X(39323,{code:n})}}(ve=Ke||(Ke={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const jR=new ar([4294967295,4294967295],0);function Yp(n){const e=py().encode(n),t=new oy;return t.update(e),new Uint8Array(t.digest())}function Xp(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ar([t,r],0),new ar([s,i],0)]}class $h{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Fi(`Invalid padding: ${t}`);if(r<0)throw new Fi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Fi(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=ar.fromNumber(this.pe)}we(e,t,r){let s=e.add(t.multiply(ar.fromNumber(r)));return s.compare(jR)===1&&(s=new ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Yp(e),[r,s]=Xp(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.Se(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new $h(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const t=Yp(e),[r,s]=Xp(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Fi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zl{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Bo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Zl(se.min(),s,new Fe(ue),Nt(),pe())}}class Bo{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Bo(r,t,pe(),pe(),pe())}}/**
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
 */class Ba{constructor(e,t,r,s){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=s}}class cv{constructor(e,t){this.targetId=e,this.Ce=t}}class uv{constructor(e,t,r=Ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Zp{constructor(){this.Fe=0,this.Me=em(),this.xe=Ge.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=pe(),t=pe(),r=pe();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:X(38017,{changeType:i})}}),new Bo(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=em()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ne(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class qR{constructor(e){this.ze=e,this.je=new Map,this.He=Nt(),this.Je=ma(),this.Ye=ma(),this.Ze=new Fe(ue)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:X(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,r=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(gl(i))if(r===0){const o=new Q(i.path);this.tt(t,o,je.newNoDocument(o,se.min()))}else ne(r===1,20013,{expectedCount:r});else{const o=this.ut(t);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=Dn(r).toUint8Array()}catch(c){if(c instanceof Vy)return Zr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new $h(o,s,i)}catch(c){return Zr(c instanceof Fi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&gl(l.target)){const c=new Q(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,je.newNoDocument(c,e))}i.Le&&(t.set(o,i.qe()),i.Qe())}});let r=pe();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Zl(e,t,this.Ze,this.He,r);return this.He=Nt(),this.Je=ma(),this.Ye=ma(),this.Ze=new Fe(ue),s}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Zp,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Ce(ue),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Ce(ue),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Zp),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ma(){return new Fe(Q.comparator)}function em(){return new Fe(Q.comparator)}const zR={asc:"ASCENDING",desc:"DESCENDING"},KR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HR={and:"AND",or:"OR"};class GR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vu(n,e){return n.useProto3Json||ql(e)?e:{value:e}}function ei(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hv(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function WR(n,e){return ei(n,e.toTimestamp())}function wt(n){return ne(!!n,49232),se.fromTimestamp(function(t){const r=Vn(t);return new Be(r.seconds,r.nanos)}(n))}function jh(n,e){return Du(n,e).canonicalString()}function Du(n,e){const t=function(s){return new Se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function dv(n){const e=Se.fromString(n);return ne(Ev(e),10190,{key:e.toString()}),e}function yl(n,e){return jh(n.databaseId,e.path)}function Hr(n,e){const t=dv(e);if(t.get(1)!==n.databaseId.projectId)throw new Y(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Y(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(mv(t))}function fv(n,e){return jh(n.databaseId,e)}function pv(n){const e=dv(n);return e.length===4?Se.emptyPath():mv(e)}function Nu(n){return new Se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mv(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function tm(n,e,t){return{name:yl(n,e),fields:t.value.mapValue.fields}}function QR(n,e,t){const r=Hr(n,e.name),s=wt(e.updateTime),i=e.createTime?wt(e.createTime):se.min(),o=new pt({mapValue:{fields:e.fields}}),l=je.newFoundDocument(r,s,i,o);return t&&l.setHasCommittedMutations(),t?l.setHasCommittedMutations():l}function JR(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:X(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(ne(d===void 0||typeof d=="string",58123),Ge.fromBase64String(d||"")):(ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ge.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?N.UNKNOWN:lv(u.code);return new Y(d,u.message||"")}(o);t=new uv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hr(n,r.document.name),i=wt(r.document.updateTime),o=r.document.createTime?wt(r.document.createTime):se.min(),l=new pt({mapValue:{fields:r.document.fields}}),c=je.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];t=new Ba(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hr(n,r.document),i=r.readTime?wt(r.readTime):se.min(),o=je.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Ba([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hr(n,r.document),i=r.removedTargetIds||[];t=new Ba([],i,s,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new BR(s,i),l=r.targetId;t=new cv(l,o)}}return t}function vl(n,e){let t;if(e instanceof ai)t={update:tm(n,e.key,e.value)};else if(e instanceof Xl)t={delete:yl(n,e.key)};else if(e instanceof Ln)t={update:tm(n,e.key,e.data),updateMask:nP(e.fieldMask)};else{if(!(e instanceof av))return X(16599,{ft:e.type});t={verify:yl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof wo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Zs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof bo)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw X(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:WR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X(27497)}(n,e.precondition)),t}function Ou(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Tt.updateTime(wt(i.updateTime)):i.exists!==void 0?Tt.exists(i.exists):Tt.none()}(e.currentDocument):Tt.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,l){let c=null;if("setToServerValue"in l)ne(l.setToServerValue==="REQUEST_TIME",16630,{proto:l}),c=new wo;else if("appendMissingElements"in l){const d=l.appendMissingElements.values||[];c=new Xs(d)}else if("removeAllFromArray"in l){const d=l.removeAllFromArray.values||[];c=new Zs(d)}else"increment"in l?c=new bo(o,l.increment):X(16584,{proto:l});const u=Ue.fromServerFormat(l.fieldPath);return new OR(u,c)}(n,s)):[];if(e.update){e.update.name;const s=Hr(n,e.update.name),i=new pt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new At(u.map(d=>Ue.fromServerFormat(d)))}(e.updateMask);return new Ln(s,i,o,t,r)}return new ai(s,i,t,r)}if(e.delete){const s=Hr(n,e.delete);return new Xl(s,t)}if(e.verify){const s=Hr(n,e.verify);return new av(s,t)}return X(1463,{proto:e})}function YR(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?wt(s.updateTime):wt(i);return o.isEqual(se.min())&&(o=wt(i)),new LR(o,s.transformResults||[])}(t,e))):[]}function gv(n,e){return{documents:[fv(n,e.path)]}}function _v(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=fv(n,s);const i=function(u){if(u.length!==0)return Iv(Pe.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:As(m.field),direction:ZR(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Vu(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:t,parent:s}}function yv(n){let e=pv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ne(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const m=vv(p);return m instanceof Pe&&Oh(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(R){return new ml(Ss(R.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ql(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(p){const m=!!p.before,I=p.values||[];return new Js(I,m)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const m=!p.before,I=p.values||[];return new Js(I,m)}(t.endAt)),wR(e,s,o,i,l,"F",c,u)}function XR(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function vv(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ss(t.unaryFilter.field);return ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ss(t.unaryFilter.field);return ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ss(t.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ss(t.unaryFilter.field);return ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(n):n.fieldFilter!==void 0?function(t){return ge.create(Ss(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Pe.create(t.compositeFilter.filters.map(r=>vv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(t.compositeFilter.op))}(n):X(30097,{filter:n})}function ZR(n){return zR[n]}function eP(n){return KR[n]}function tP(n){return HR[n]}function As(n){return{fieldPath:n.canonicalString()}}function Ss(n){return Ue.fromServerFormat(n.fieldPath)}function Iv(n){return n instanceof ge?function(t){if(t.op==="=="){if(Up(t.value))return{unaryFilter:{field:As(t.field),op:"IS_NAN"}};if(Fp(t.value))return{unaryFilter:{field:As(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Up(t.value))return{unaryFilter:{field:As(t.field),op:"IS_NOT_NAN"}};if(Fp(t.value))return{unaryFilter:{field:As(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(t.field),op:eP(t.op),value:t.value}}}(n):n instanceof Pe?function(t){const r=t.getFilters().map(s=>Iv(s));return r.length===1?r[0]:{compositeFilter:{op:tP(t.op),filters:r}}}(n):X(54877,{filter:n})}function nP(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ev(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Tv{constructor(e){this.wt=e}}function rP(n,e){let t;if(e.document)t=QR(n.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=Q.fromSegments(e.noDocument.path),s=rs(e.noDocument.readTime);t=je.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return X(56709);{const r=Q.fromSegments(e.unknownDocument.path),s=rs(e.unknownDocument.version);t=je.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new Be(s[0],s[1]);return se.fromTimestamp(i)}(e.readTime)),t}function nm(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Il(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:yl(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ei(i,o.version.toTimestamp()),createTime:ei(i,o.createTime.toTimestamp())}}(n.wt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:ns(e.version)};else{if(!e.isUnknownDocument())return X(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:ns(e.version)}}return r}function Il(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function ns(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function rs(n){const e=new Be(n.seconds,n.nanoseconds);return se.fromTimestamp(e)}function Fr(n,e){const t=(e.baseMutations||[]).map(i=>Ou(n.wt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const l=e.mutations[i+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Ou(n.wt,i)),s=Be.fromMillis(e.localWriteTimeMs);return new Fh(e.batchId,s,t,r)}function Ui(n){const e=rs(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?rs(n.lastLimboFreeSnapshotVersion):se.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){const o=i.documents.length;return ne(o===1,1966,{count:o}),qt(Mh(pv(i.documents[0])))}(n.query):function(i){return qt(yv(i))}(n.query),new bn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ge.fromBase64String(n.resumeToken))}function wv(n,e){const t=ns(e.snapshotVersion),r=ns(e.lastLimboFreeSnapshotVersion);let s;s=gl(e.target)?gv(n.wt,e.target):_v(n.wt,e.target).gt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ts(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function bv(n){const e=yv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ku(e,e.limit,"L"):e}function qc(n,e){return new Bh(e.largestBatchId,Ou(n.wt,e.overlayMutation))}function rm(n,e){const t=e.path.lastSegment();return[n,gt(e.path.popLast()),t]}function sm(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:ns(r.readTime),documentKey:gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class sP{getBundleMetadata(e,t){return im(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:rs(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return im(e).put(function(s){return{bundleId:s.id,createTime:ns(wt(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return om(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:bv(i.bundledQuery),readTime:rs(i.readTime)}}(r)})}saveNamedQuery(e,t){return om(e).put(function(s){return{name:s.name,readTime:ns(wt(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function im(n){return Ye(n,zl)}function om(n){return Ye(n,Kl)}/**
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
 */class ec{constructor(e,t){this.serializer=e,this.userId=t}static St(e,t){const r=t.uid||"";return new ec(e,r)}getOverlay(e,t){return Pi(e).get(rm(this.userId,t)).next(r=>r?qc(this.serializer,r):null)}getOverlays(e,t){const r=sn();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const l=new Bh(t,o);s.push(this.bt(e,l))}),P.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(gt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Pi(e).X(wu,l))}),P.waitFor(i)}getOverlaysForCollection(e,t,r){const s=sn(),i=gt(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Pi(e).J(wu,o).next(l=>{for(const c of l){const u=qc(this.serializer,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=sn();let o;const l=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Pi(e).te({index:Sy,range:l},(c,u,d)=>{const p=qc(this.serializer,u);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):d.done()}).next(()=>i)}bt(e,t){return Pi(e).put(function(s,i,o){const[l,c,u]=rm(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:vl(s.wt,o.mutation)}}(this.serializer,this.userId,t))}}function Pi(n){return Ye(n,Hl)}/**
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
 */class iP{Dt(e){return Ye(e,xh)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ge.fromUint8Array(r):Ge.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Ur{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(Le(e.integerValue));else if("doubleValue"in e){const r=Le(e.doubleValue);isNaN(r)?this.Mt(t,13):(this.Mt(t,15),mo(r)?t.xt(0):t.xt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Mt(t,20),typeof r=="string"&&(r=Vn(r)),t.Ot(`${r.seconds||""}`),t.xt(r.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(Dn(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Mt(t,45),t.xt(r.latitude||0),t.xt(r.longitude||0)}else"mapValue"in e?Fy(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):Wl(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):X(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const r=e.fields||{};this.Mt(t,55);for(const s of Object.keys(r))this.Nt(s,t),this.Ct(r[s],t)}qt(e,t){var r,s;const i=e.fields||{};this.Mt(t,53);const o=Ws,l=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.Mt(t,15),t.xt(Le(l)),this.Nt(o,t),this.Ct(i[o],t)}$t(e,t){const r=e.values||[];this.Mt(t,50);for(const s of r)this.Ct(s,t)}kt(e,t){this.Mt(t,37),Q.fromName(e).path.forEach(r=>{this.Mt(t,60),this.Kt(r,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}Ur.Wt=new Ur;/**
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
 */const _s=255;function oP(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function am(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=oP(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class aP{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.zt(r.value),r=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Yt()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.zt(r);else if(r<2048)this.zt(960|r>>>6),this.zt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|r>>>12),this.zt(128|63&r>>>6),this.zt(128|63&r);else{const s=t.codePointAt(0);this.zt(240|s>>>18),this.zt(128|63&s>>>12),this.zt(128|63&s>>>6),this.zt(128|63&s)}}this.jt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Yt()}en(e){const t=this.tn(e),r=am(t);this.nn(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}rn(e){const t=this.tn(e),r=am(t);this.nn(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}sn(){this._n(_s),this._n(255)}an(){this.un(_s),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===_s?(this._n(_s),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===_s?(this.un(_s),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class lP{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class cP{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class Ci{constructor(){this.ln=new aP,this.hn=new lP(this.ln),this.Pn=new cP(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
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
 */class Br{constructor(e,t,r,s){this.In=e,this.En=t,this.dn=r,this.An=s}Rn(){const e=this.An.length,t=e===0||this.An[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.An,0),t!==e?r.set([0],this.An.length):++r[r.length-1],new Br(this.In,this.En,this.dn,r)}Vn(e,t,r){return{indexId:this.In,uid:e,arrayValue:$a(this.dn),directionalValue:$a(this.An),orderedDocumentKey:$a(t),documentKey:r.path.toArray()}}mn(e,t,r){const s=this.Vn(e,t,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function zn(n,e){let t=n.In-e.In;return t!==0?t:(t=lm(n.dn,e.dn),t!==0?t:(t=lm(n.An,e.An),t!==0?t:Q.comparator(n.En,e.En)))}function lm(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function $a(n){return g_()?function(t){let r="";for(let s=0;s<t.length;s++)r+=String.fromCharCode(t[s]);return r}(n):n}function cm(n){return typeof n!="string"?n:function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(n)}class um{constructor(e){this.fn=new Ce((t,r)=>Ue.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.gn=e.orderBy,this.pn=[];for(const t of e.filters){const r=t;r.isInequality()?this.fn=this.fn.add(r):this.pn.push(r)}}get yn(){return this.fn.size>1}wn(e){if(ne(e.collectionGroup===this.collectionId,49279),this.yn)return!1;const t=Iu(e);if(t!==void 0&&!this.Sn(t))return!1;const r=Nr(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.Sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.fn.size>0){const l=this.fn.getIterator().getNext();if(!s.has(l.field.canonicalString())){const c=r[i];if(!this.bn(l,c)||!this.Dn(this.gn[o++],c))return!1}++i}for(;i<r.length;++i){const l=r[i];if(o>=this.gn.length||!this.Dn(this.gn[o++],l))return!1}return!0}vn(){if(this.yn)return null;let e=new Ce(Ue.comparator);const t=[];for(const r of this.pn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Da(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Da(r.field,0))}for(const r of this.gn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Da(r.field,r.dir==="asc"?0:1)));return new ul(ul.UNKNOWN_ID,this.collectionId,t,po.empty())}Sn(e){for(const t of this.pn)if(this.bn(t,e))return!0;return!1}bn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Dn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Av(n){var e,t;if(ne(n instanceof ge||n instanceof Pe,20012),n instanceof ge){if(n instanceof Gy){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ge.create(n.field,"==",i)))||[];return Pe.create(s,"or")}return n}const r=n.filters.map(s=>Av(s));return Pe.create(r,n.op)}function uP(n){if(n.getFilters().length===0)return[];const e=Fu(Av(n));return ne(Sv(e),7391),Mu(e)||Lu(e)?[e]:e.getFilters()}function Mu(n){return n instanceof ge}function Lu(n){return n instanceof Pe&&Oh(n)}function Sv(n){return Mu(n)||Lu(n)||function(t){if(t instanceof Pe&&Ru(t)){for(const r of t.getFilters())if(!Mu(r)&&!Lu(r))return!1;return!0}return!1}(n)}function Fu(n){if(ne(n instanceof ge||n instanceof Pe,34018),n instanceof ge)return n;if(n.filters.length===1)return Fu(n.filters[0]);const e=n.filters.map(r=>Fu(r));let t=Pe.create(e,n.op);return t=El(t),Sv(t)?t:(ne(t instanceof Pe,64498),ne(Ys(t),40251),ne(t.filters.length>1,57927),t.filters.reduce((r,s)=>qh(r,s)))}function qh(n,e){let t;return ne(n instanceof ge||n instanceof Pe,38388),ne(e instanceof ge||e instanceof Pe,25473),t=n instanceof ge?e instanceof ge?function(s,i){return Pe.create([s,i],"and")}(n,e):hm(n,e):e instanceof ge?hm(e,n):function(s,i){if(ne(s.filters.length>0&&i.filters.length>0,48005),Ys(s)&&Ys(i))return zy(s,i.getFilters());const o=Ru(s)?s:i,l=Ru(s)?i:s,c=o.filters.map(u=>qh(u,l));return Pe.create(c,"or")}(n,e),El(t)}function hm(n,e){if(Ys(e))return zy(e,n.getFilters());{const t=e.filters.map(r=>qh(n,r));return Pe.create(t,"or")}}function El(n){if(ne(n instanceof ge||n instanceof Pe,11850),n instanceof ge)return n;const e=n.getFilters();if(e.length===1)return El(e[0]);if(jy(n))return n;const t=e.map(s=>El(s)),r=[];return t.forEach(s=>{s instanceof ge?r.push(s):s instanceof Pe&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Pe.create(r,n.op)}/**
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
 */class hP{constructor(){this.Cn=new zh}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Mt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Mt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class zh{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ce(Se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ce(Se.comparator)).toArray()}}/**
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
 */const dm="IndexedDbIndexManager",ga=new Uint8Array(0);class dP{constructor(e,t){this.databaseId=t,this.Fn=new zh,this.Mn=new Mn(r=>ts(r),(r,s)=>Lo(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Fn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.Fn.add(t)});const i={collectionId:r,parent:gt(s)};return fm(e).put(i)}return P.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[gy(t),""],!1,!0);return fm(e).J(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(rn(o.parent))}return r})}addFieldIndex(e,t){const r=xi(e),s=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=vs(e);return i.next(l=>{o.put(sm(l,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=xi(e),s=vs(e),i=ys(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=xi(e),r=ys(e),s=vs(e);return t.X().next(()=>r.X()).next(()=>s.X())}createTargetIndexes(e,t){return P.forEach(this.xn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new um(r).vn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=ys(e);let s=!0;const i=new Map;return P.forEach(this.xn(t),o=>this.On(e,o).next(l=>{s&&(s=!!l),i.set(o,l)})).next(()=>{if(s){let o=pe();const l=[];return P.forEach(i,(c,u)=>{U(dm,`Using index ${function(j){return`id=${j.indexId}|cg=${j.collectionGroup}|f=${j.fields.map($=>`${$.fieldPath}:${$.kind}`).join(",")}`}(c)} to execute ${ts(t)}`);const d=function(j,$){const Z=Iu($);if(Z===void 0)return null;for(const ee of _l(j,Z.fieldPath))switch(ee.op){case"array-contains-any":return ee.value.arrayValue.values||[];case"array-contains":return[ee.value]}return null}(u,c),p=function(j,$){const Z=new Map;for(const ee of Nr($))for(const b of _l(j,ee.fieldPath))switch(b.op){case"==":case"in":Z.set(ee.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return Z.set(ee.fieldPath.canonicalString(),b.value),Array.from(Z.values())}return null}(u,c),m=function(j,$){const Z=[];let ee=!0;for(const b of Nr($)){const y=b.kind===0?zp(j,b.fieldPath,j.startAt):Kp(j,b.fieldPath,j.startAt);Z.push(y.value),ee&&(ee=y.inclusive)}return new Js(Z,ee)}(u,c),I=function(j,$){const Z=[];let ee=!0;for(const b of Nr($)){const y=b.kind===0?Kp(j,b.fieldPath,j.endAt):zp(j,b.fieldPath,j.endAt);Z.push(y.value),ee&&(ee=y.inclusive)}return new Js(Z,ee)}(u,c),R=this.Nn(c,u,m),k=this.Nn(c,u,I),x=this.Bn(c,u,p),B=this.Ln(c.indexId,d,R,m.inclusive,k,I.inclusive,x);return P.forEach(B,q=>r.Z(q,t.limit).next(j=>{j.forEach($=>{const Z=Q.fromSegments($.documentKey);o.has(Z)||(o=o.add(Z),l.push(Z))})}))}).next(()=>l)}return P.resolve(null)})}xn(e){let t=this.Mn.get(e);return t||(e.filters.length===0?t=[e]:t=uP(Pe.create(e.filters,"and")).map(r=>Cu(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Mn.set(e,t),t)}Ln(e,t,r,s,i,o,l){const c=(t!=null?t.length:1)*Math.max(r.length,i.length),u=c/(t!=null?t.length:1),d=[];for(let p=0;p<c;++p){const m=t?this.kn(t[p/u]):ga,I=this.qn(e,m,r[p%u],s),R=this.Qn(e,m,i[p%u],o),k=l.map(x=>this.qn(e,m,x,!0));d.push(...this.createRange(I,R,k))}return d}qn(e,t,r,s){const i=new Br(e,Q.empty(),t,r);return s?i:i.Rn()}Qn(e,t,r,s){const i=new Br(e,Q.empty(),t,r);return s?i.Rn():i}On(e,t){const r=new um(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const l of i)r.wn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,t){let r=2;const s=this.xn(t);return P.forEach(s,i=>this.On(e,i).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new Ce(Ue.comparator),d=!1;for(const p of c.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:u=u.add(m.field));for(const p of c.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(d?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}$n(e,t){const r=new Ci;for(const s of Nr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Tn(s.kind);Ur.Wt.vt(i,o)}return r.cn()}kn(e){const t=new Ci;return Ur.Wt.vt(e,t.Tn(0)),t.cn()}Un(e,t){const r=new Ci;return Ur.Wt.vt(Eo(this.databaseId,t),r.Tn(function(i){const o=Nr(i);return o.length===0?0:o[o.length-1].kind}(e))),r.cn()}Bn(e,t,r){if(r===null)return[];let s=[];s.push(new Ci);let i=0;for(const o of Nr(e)){const l=r[i++];for(const c of s)if(this.Kn(t,o.fieldPath)&&To(l))s=this.Wn(s,o,l);else{const u=c.Tn(o.kind);Ur.Wt.vt(l,u)}}return this.Gn(s)}Nn(e,t,r){return this.Bn(e,t,r.position)}Gn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].cn();return t}Wn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const l of s){const c=new Ci;c.seed(l.cn()),Ur.Wt.vt(o,c.Tn(t.kind)),i.push(c)}return i}Kn(e,t){return!!e.filters.find(r=>r instanceof ge&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=xi(e),s=vs(e);return(t?r.J(Tu,IDBKeyRange.bound(t,t)):r.J()).next(i=>{const o=[];return P.forEach(i,l=>s.get([l.indexId,this.uid]).next(c=>{o.push(function(d,p){const m=p?new po(p.sequenceNumber,new Mt(rs(p.readTime),new Q(rn(p.documentKey)),p.largestBatchId)):po.empty(),I=d.fields.map(([R,k])=>new Da(Ue.fromServerFormat(R),k));return new ul(d.indexId,d.collectionGroup,I,m)}(l,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:ue(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=xi(e),i=vs(e);return this.zn(e).next(o=>s.J(Tu,IDBKeyRange.bound(t,t)).next(l=>P.forEach(l,c=>i.put(sm(c.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return P.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(l=>(r.set(s.collectionGroup,l),P.forEach(l,c=>this.jn(e,s,c).next(u=>{const d=this.Hn(i,c);return u.isEqual(d)?P.resolve():this.Jn(e,i,c,u,d)}))))})}Yn(e,t,r,s){return ys(e).put(s.Vn(this.uid,this.Un(r,t.key),t.key))}Zn(e,t,r,s){return ys(e).delete(s.mn(this.uid,this.Un(r,t.key),t.key))}jn(e,t,r){const s=ys(e);let i=new Ce(zn);return s.te({index:Ay,range:IDBKeyRange.only([r.indexId,this.uid,$a(this.Un(r,t))])},(o,l)=>{i=i.add(new Br(r.indexId,t,cm(l.arrayValue),cm(l.directionalValue)))}).next(()=>i)}Hn(e,t){let r=new Ce(zn);const s=this.$n(t,e);if(s==null)return r;const i=Iu(t);if(i!=null){const o=e.data.field(i.fieldPath);if(To(o))for(const l of o.arrayValue.values||[])r=r.add(new Br(t.indexId,e.key,this.kn(l),s))}else r=r.add(new Br(t.indexId,e.key,ga,s));return r}Jn(e,t,r,s,i){U(dm,"Updating index entries for document '%s'",t.key);const o=[];return function(c,u,d,p,m){const I=c.getIterator(),R=u.getIterator();let k=gs(I),x=gs(R);for(;k||x;){let B=!1,q=!1;if(k&&x){const j=d(k,x);j<0?q=!0:j>0&&(B=!0)}else k!=null?q=!0:B=!0;B?(p(x),x=gs(R)):q?(m(k),k=gs(I)):(k=gs(I),x=gs(R))}}(s,i,zn,l=>{o.push(this.Yn(e,t,r,l))},l=>{o.push(this.Zn(e,t,r,l))}),P.waitFor(o)}zn(e){let t=1;return vs(e).te({index:by,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,l)=>zn(o,l)).filter((o,l,c)=>!l||zn(o,c[l-1])!==0);const s=[];s.push(e);for(const o of r){const l=zn(o,e),c=zn(o,t);if(l===0)s[0]=e.Rn();else if(l>0&&c<0)s.push(o),s.push(o.Rn());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Xn(s[o],s[o+1]))return[];const l=s[o].mn(this.uid,ga,Q.empty()),c=s[o+1].mn(this.uid,ga,Q.empty());i.push(IDBKeyRange.bound(l,c))}return i}Xn(e,t){return zn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(pm)}getMinOffset(e,t){return P.mapArray(this.xn(t),r=>this.On(e,r).next(s=>s||X(44426))).next(pm)}}function fm(n){return Ye(n,yo)}function ys(n){return Ye(n,Xi)}function xi(n){return Ye(n,Ch)}function vs(n){return Ye(n,Yi)}function pm(n){ne(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Sh(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Mt(e.readTime,e.documentKey,t)}/**
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
 */const mm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rv=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function Pv(n,e,t){const r=n.store(Ht),s=n.store(zs),i=[],o=IDBKeyRange.only(t.batchId);let l=0;const c=r.te({range:o},(d,p,m)=>(l++,m.delete()));i.push(c.next(()=>{ne(l===1,47070,{batchId:t.batchId})}));const u=[];for(const d of t.mutations){const p=Ey(e,d.key.path,t.batchId);i.push(s.delete(p)),u.push(d.key)}return P.waitFor(i).next(()=>u)}function Tl(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw X(14731);e=n.noDocument}return JSON.stringify(e).length}/**
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
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(Rv,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);class tc{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.er={}}static St(e,t,r,s){ne(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new tc(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Kn(e).te({index:$r,range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Rs(e),o=Kn(e);return o.add({}).next(l=>{ne(typeof l=="number",49019);const c=new Fh(l,t,r,s),u=function(I,R,k){const x=k.baseMutations.map(q=>vl(I.wt,q)),B=k.mutations.map(q=>vl(I.wt,q));return{userId:R,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:x,mutations:B}}(this.serializer,this.userId,c),d=[];let p=new Ce((m,I)=>ue(m.canonicalString(),I.canonicalString()));for(const m of s){const I=Ey(this.userId,m.key.path,l);p=p.add(m.key.path.popLast()),d.push(o.put(u)),d.push(i.put(I,$S))}return p.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.er[l]=c.keys()}),P.waitFor(d).next(()=>c)})}lookupMutationBatch(e,t){return Kn(e).get(t).next(r=>r?(ne(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),Fr(this.serializer,r)):null)}tr(e,t){return this.er[t]?P.resolve(this.er[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.er[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Kn(e).te({index:$r,range:s},(o,l,c)=>{l.userId===this.userId&&(ne(l.batchId>=r,47524,{nr:r}),i=Fr(this.serializer,l)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=zr;return Kn(e).te({index:$r,range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,zr],[this.userId,Number.POSITIVE_INFINITY]);return Kn(e).J($r,t).next(r=>r.map(s=>Fr(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Na(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Rs(e).te({range:s},(o,l,c)=>{const[u,d,p]=o,m=rn(d);if(u===this.userId&&t.path.isEqual(m))return Kn(e).get(p).next(I=>{if(!I)throw X(61480,{rr:o,batchId:p});ne(I.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:I.userId,batchId:p}),i.push(Fr(this.serializer,I))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ce(ue);const s=[];return t.forEach(i=>{const o=Na(this.userId,i.path),l=IDBKeyRange.lowerBound(o),c=Rs(e).te({range:l},(u,d,p)=>{const[m,I,R]=u,k=rn(I);m===this.userId&&i.path.isEqual(k)?r=r.add(R):p.done()});s.push(c)}),P.waitFor(s).next(()=>this.ir(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Na(this.userId,r),o=IDBKeyRange.lowerBound(i);let l=new Ce(ue);return Rs(e).te({range:o},(c,u,d)=>{const[p,m,I]=c,R=rn(m);p===this.userId&&r.isPrefixOf(R)?R.length===s&&(l=l.add(I)):d.done()}).next(()=>this.ir(e,l))}ir(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Kn(e).get(i).next(o=>{if(o===null)throw X(35274,{batchId:i});ne(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(Fr(this.serializer,o))}))}),P.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return Pv(e.he,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.sr(t.batchId)}),P.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}sr(e){delete this.er[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return P.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Rs(e).te({range:r},(i,o,l)=>{if(i[0]===this.userId){const c=rn(i[1]);s.push(c)}else l.done()}).next(()=>{ne(s.length===0,56720,{_r:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return Cv(e,this.userId,t)}ar(e){return xv(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:zr,lastStreamToken:""})}}function Cv(n,e,t){const r=Na(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Rs(n).te({range:i,ee:!0},(l,c,u)=>{const[d,p,m]=l;d===e&&p===s&&(o=!0),u.done()}).next(()=>o)}function Kn(n){return Ye(n,Ht)}function Rs(n){return Ye(n,zs)}function xv(n){return Ye(n,go)}/**
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
 */class ss{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ss(0)}static lr(){return new ss(-1)}}/**
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
 */class fP{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.hr(e).next(t=>{const r=new ss(t.highestTargetId);return t.highestTargetId=r.next(),this.Pr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.hr(e).next(t=>se.fromTimestamp(new Be(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.hr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.hr(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Pr(e,s)))}addTargetData(e,t){return this.Tr(e,t).next(()=>this.hr(e).next(r=>(r.targetCount+=1,this.Ir(t,r),this.Pr(e,r))))}updateTargetData(e,t){return this.Tr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Is(e).delete(t.targetId)).next(()=>this.hr(e)).next(r=>(ne(r.targetCount>0,8065),r.targetCount-=1,this.Pr(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Is(e).te((o,l)=>{const c=Ui(l);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>P.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Is(e).te((r,s)=>{const i=Ui(s);t(i)})}hr(e){return gm(e).get(fl).next(t=>(ne(t!==null,2888),t))}Pr(e,t){return gm(e).put(fl,t)}Tr(e,t){return Is(e).put(wv(this.serializer,t))}Ir(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.hr(e).next(t=>t.targetCount)}getTargetData(e,t){const r=ts(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Is(e).te({range:s,index:wy},(o,l,c)=>{const u=Ui(l);Lo(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=tr(e);return t.forEach(o=>{const l=gt(o.path);s.push(i.put({targetId:r,path:l})),s.push(this.referenceDelegate.addReference(e,r,o))}),P.waitFor(s)}removeMatchingKeys(e,t,r){const s=tr(e);return P.forEach(t,i=>{const o=gt(i.path);return P.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=tr(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=tr(e);let i=pe();return s.te({range:r,ee:!0},(o,l,c)=>{const u=rn(o[1]),d=new Q(u);i=i.add(d)}).next(()=>i)}containsKey(e,t){const r=gt(t.path),s=IDBKeyRange.bound([r],[gy(r)],!1,!0);let i=0;return tr(e).te({index:Ph,ee:!0,range:s},([o,l],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}Rt(e,t){return Is(e).get(t).next(r=>r?Ui(r):null)}}function Is(n){return Ye(n,Ks)}function gm(n){return Ye(n,Kr)}function tr(n){return Ye(n,Hs)}/**
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
 */const _m="LruGarbageCollector",pP=1048576;function ym([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class mP{constructor(e){this.Er=e,this.buffer=new Ce(ym),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ym(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class kv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){U(_m,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){vr(t)?U(_m,"Ignoring IndexedDB error during garbage collection: ",t):await as(t)}await this.mr(3e5)})}}class gP{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve($t.le);const r=new mP(t);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(mm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mm):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ws()<=me.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Vv(n,e){return new gP(n,e)}/**
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
 */class _P{constructor(e,t){this.db=e,this.garbageCollector=Vv(this,t)}pr(e){const t=this.Sr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}yr(e,t){return this.br(e,(r,s)=>t(s))}addReference(e,t,r){return _a(e,r)}removeReference(e,t,r){return _a(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return _a(e,t)}Dr(e,t){return function(s,i){let o=!1;return xv(s).ne(l=>Cv(s,l,i).next(c=>(c&&(o=!0),P.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.br(e,(o,l)=>{if(l<=t){const c=this.Dr(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,se.min()),tr(e).delete(function(p){return[0,gt(p.path)]}(o))))});s.push(c)}}).next(()=>P.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return _a(e,t)}br(e,t){const r=tr(e);let s,i=$t.le;return r.te({index:Ph},([o,l],{path:c,sequenceNumber:u})=>{o===0?(i!==$t.le&&t(new Q(rn(s)),i),i=u,s=c):i=$t.le}).next(()=>{i!==$t.le&&t(new Q(rn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function _a(n,e){return tr(n).put(function(r,s){return{targetId:0,path:gt(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class Dv{constructor(){this.changes=new Mn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yP{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return kr(e).put(r)}removeEntry(e,t,r){return kr(e).delete(function(i,o){const l=i.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],Il(o),l[l.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.vr(e,r)))}getEntry(e,t){let r=je.newInvalidDocument(t);return kr(e).te({index:Oa,range:IDBKeyRange.only(ki(t))},(s,i)=>{r=this.Cr(t,i)}).next(()=>r)}Fr(e,t){let r={size:0,document:je.newInvalidDocument(t)};return kr(e).te({index:Oa,range:IDBKeyRange.only(ki(t))},(s,i)=>{r={document:this.Cr(t,i),size:Tl(i)}}).next(()=>r)}getEntries(e,t){let r=Nt();return this.Mr(e,t,(s,i)=>{const o=this.Cr(s,i);r=r.insert(s,o)}).next(()=>r)}Or(e,t){let r=Nt(),s=new Fe(Q.comparator);return this.Mr(e,t,(i,o)=>{const l=this.Cr(i,o);r=r.insert(i,l),s=s.insert(i,Tl(o))}).next(()=>({documents:r,Nr:s}))}Mr(e,t,r){if(t.isEmpty())return P.resolve();let s=new Ce(Em);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(ki(s.first()),ki(s.last())),o=s.getIterator();let l=o.getNext();return kr(e).te({index:Oa,range:i},(c,u,d)=>{const p=Q.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;l&&Em(l,p)<0;)r(l,null),l=o.getNext();l&&l.isEqual(p)&&(r(l,u),l=o.hasNext()?o.getNext():null),l?d.H(ki(l)):d.done()}).next(()=>{for(;l;)r(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,l=[o.popLast().toArray(),o.lastSegment(),Il(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return kr(e).J(IDBKeyRange.bound(l,c,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let d=Nt();for(const p of u){const m=this.Cr(Q.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(Uo(t,m)||s.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,t,r,s){let i=Nt();const o=Im(t,r),l=Im(t,Mt.max());return kr(e).te({index:Ty,range:IDBKeyRange.bound(o,l,!0)},(c,u,d)=>{const p=this.Cr(Q.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(p.key,p),i.size===s&&d.done()}).next(()=>i)}newChangeBuffer(e){return new vP(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return vm(e).get(Eu).next(t=>(ne(!!t,20021),t))}vr(e,t){return vm(e).put(Eu,t)}Cr(e,t){if(t){const r=rP(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(se.min())))return r}return je.newInvalidDocument(e)}}function Nv(n){return new yP(n)}class vP extends Dv{constructor(e,t){super(),this.Br=e,this.trackRemovals=t,this.Lr=new Mn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new Ce((i,o)=>ue(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const l=this.Lr.get(i);if(t.push(this.Br.removeEntry(e,i,l.readTime)),o.isValidDocument()){const c=nm(this.Br.serializer,o);s=s.add(i.path.popLast());const u=Tl(c);r+=u-l.size,t.push(this.Br.addEntry(e,i,c))}else if(r-=l.size,this.trackRemovals){const c=nm(this.Br.serializer,o.convertToNoDocument(se.min()));t.push(this.Br.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.Br.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Br.updateMetadata(e,r)),P.waitFor(t)}getFromCache(e,t){return this.Br.Fr(e,t).next(r=>(this.Lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Br.Or(e,t).next(({documents:r,Nr:s})=>(s.forEach((i,o)=>{this.Lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function vm(n){return Ye(n,_o)}function kr(n){return Ye(n,dl)}function ki(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Im(n,e){const t=e.documentKey.path.toArray();return[n,Il(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Em(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=ue(t[i],r[i]),s)return s;return s=ue(t.length,r.length),s||(s=ue(t[t.length-2],r[r.length-2]),s||ue(t[t.length-1],r[r.length-1]))}/**
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
 */class IP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Ov{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&no(r.mutation,s,At.empty(),Be.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=pe()){const s=sn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Li();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=sn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,pe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=Nt();const o=to(),l=function(){return to()}();return t.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Ln)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),no(d.mutation,u,d.mutation.getFieldMask(),Be.now())):o.set(u.key,At.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var p;return l.set(u,new IP(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=to();let s=new Fe((o,l)=>o-l),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=r.get(c)||At.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||pe()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=Zy();d.forEach(m=>{if(!i.has(m)){const I=iv(t.get(m),r.get(m));I!==null&&p.set(m,I),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Wy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(sn());let l=fo,c=i;return o.next(u=>P.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?P.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,pe())).next(d=>({batchId:l,changes:Xy(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(r=>{let s=Li();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Li();return this.indexManager.getCollectionParents(e,i).next(l=>P.forEach(l,c=>{const u=function(p,m){return new Fo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,je.newInvalidDocument(d)))});let l=Li();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&no(d.mutation,u,At.empty(),Be.now()),Uo(t,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class EP{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return P.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:wt(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(s){return{name:s.name,query:bv(s.bundledQuery),readTime:wt(s.readTime)}}(t)),P.resolve()}}/**
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
 */class TP{constructor(){this.overlays=new Fe(Q.comparator),this.Qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=sn();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.bt(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=sn(),i=t.length+1,o=new Q(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Fe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=sn(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=sn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return P.resolve(l)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Bh(t,r));let i=this.Qr.get(t);i===void 0&&(i=pe(),this.Qr.set(t,i)),this.Qr.set(t,i.add(r.key))}}/**
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
 */class wP{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class Kh{constructor(){this.$r=new Ce(Xe.Ur),this.Kr=new Ce(Xe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new Xe(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new Xe(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new Q(new Se([])),r=new Xe(t,e),s=new Xe(t,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new Q(new Se([])),r=new Xe(t,e),s=new Xe(t,e+1);let i=pe();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Xe(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return Q.comparator(e.key,t.key)||ue(e.Zr,t.Zr)}static Wr(e,t){return ue(e.Zr,t.Zr)||Q.comparator(e.key,t.key)}}/**
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
 */class bP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Ce(Xe.Ur)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Fh(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ti(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?zr:this.nr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xe(t,0),s=new Xe(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ce(ue);return t.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),P.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new Q(i),0);let l=new Ce(ue);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},o),P.resolve(this.ni(l))}ni(e){const t=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ne(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return P.forEach(t.mutations,s=>{const i=new Xe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new Xe(t,0),s=this.Xr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class AP{constructor(e){this.ii=e,this.docs=function(){return new Fe(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let r=Nt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():je.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Nt();const o=t.path,l=new Q(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Sh(_y(d),r)<=0||(s.has(d.key)||Uo(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){X(9500)}si(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new SP(this)}getSize(e){return P.resolve(this.size)}}class SP extends Dv{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class RP{constructor(e){this.persistence=e,this.oi=new Mn(t=>ts(t),Lo),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this._i=0,this.ai=new Kh,this.targetCount=0,this.ui=ss.cr()}forEachTarget(e,t){return this.oi.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),P.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ss(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Tr(t),P.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.ai.containsKey(t))}}/**
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
 */class Hh{constructor(e,t){this.ci={},this.overlays={},this.li=new $t(0),this.hi=!1,this.hi=!0,this.Pi=new wP,this.referenceDelegate=e(this),this.Ti=new RP(this),this.indexManager=new hP,this.remoteDocumentCache=function(s){return new AP(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Tv(t),this.Ei=new EP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new TP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new bP(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const s=new PP(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,t){return P.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class PP extends vy{constructor(e){super(),this.currentSequenceNumber=e}}class nc{constructor(e){this.persistence=e,this.Vi=new Kh,this.mi=null}static fi(e){return new nc(e)}get gi(){if(this.mi)return this.mi;throw X(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.gi,r=>{const s=Q.fromPath(r);return this.pi(e,s).next(i=>{i||t.removeEntry(s,se.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return P.or([()=>P.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class wl{constructor(e,t){this.persistence=e,this.yi=new Mn(r=>gt(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Vv(this,t)}static fi(e,t){return new wl(e,t)}di(){}Ai(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return P.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,t).next(l=>{l||(r++,i.removeEntry(o,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),P.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=La(e.data.value)),t}Dr(e,t,r){return P.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.yi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class CP{constructor(e){this.serializer=e}q(e,t,r,s){const i=new jl("createOrUpgrade",t);r<1&&s>=1&&(function(c){c.createObjectStore(Mo)}(e),function(c){c.createObjectStore(go,{keyPath:BS}),c.createObjectStore(Ht,{keyPath:Vp,autoIncrement:!0}).createIndex($r,Dp,{unique:!0}),c.createObjectStore(zs)}(e),Tm(e),function(c){c.createObjectStore(Or)}(e));let o=P.resolve();return r<3&&s>=3&&(r!==0&&(function(c){c.deleteObjectStore(Hs),c.deleteObjectStore(Ks),c.deleteObjectStore(Kr)}(e),Tm(e)),o=o.next(()=>function(c){const u=c.store(Kr),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:se.min().toTimestamp(),targetCount:0};return u.put(fl,d)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store(Ht).J().next(p=>{c.deleteObjectStore(Ht),c.createObjectStore(Ht,{keyPath:Vp,autoIncrement:!0}).createIndex($r,Dp,{unique:!0});const m=u.store(Ht),I=p.map(R=>m.put(R));return P.waitFor(I)})}(e,i))),o=o.next(()=>{(function(c){c.createObjectStore(Gs,{keyPath:QS})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.wi(i))),r<6&&s>=6&&(o=o.next(()=>(function(c){c.createObjectStore(_o)}(e),this.Si(i)))),r<7&&s>=7&&(o=o.next(()=>this.bi(i))),r<8&&s>=8&&(o=o.next(()=>this.Di(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.Ci(i))),r<11&&s>=11&&(o=o.next(()=>{(function(c){c.createObjectStore(zl,{keyPath:JS})})(e),function(c){c.createObjectStore(Kl,{keyPath:YS})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore(Hl,{keyPath:sR});u.createIndex(wu,iR,{unique:!1}),u.createIndex(Sy,oR,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore(dl,{keyPath:jS});u.createIndex(Oa,qS),u.createIndex(Ty,zS)}(e)).next(()=>this.Fi(e,i)).next(()=>e.deleteObjectStore(Or))),r<14&&s>=14&&(o=o.next(()=>this.Mi(e,i))),r<15&&s>=15&&(o=o.next(()=>function(c){c.createObjectStore(Ch,{keyPath:XS,autoIncrement:!0}).createIndex(Tu,ZS,{unique:!1}),c.createObjectStore(Yi,{keyPath:eR}).createIndex(by,tR,{unique:!1}),c.createObjectStore(Xi,{keyPath:nR}).createIndex(Ay,rR,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore(Yi).clear()}).next(()=>{t.objectStore(Xi).clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(c){c.createObjectStore(xh,{keyPath:aR})})(e)})),r<18&&s>=18&&g_()&&(o=o.next(()=>{t.objectStore(Yi).clear()}).next(()=>{t.objectStore(Xi).clear()})),o}Si(e){let t=0;return e.store(Or).te((r,s)=>{t+=Tl(s)}).next(()=>{const r={byteSize:t};return e.store(_o).put(Eu,r)})}wi(e){const t=e.store(go),r=e.store(Ht);return t.J().next(s=>P.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,zr],[i.userId,i.lastAcknowledgedBatchId]);return r.J($r,o).next(l=>P.forEach(l,c=>{ne(c.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const u=Fr(this.serializer,c);return Pv(e,i.userId,u).next(()=>{})}))}))}bi(e){const t=e.store(Hs),r=e.store(Or);return e.store(Kr).get(fl).next(s=>{const i=[];return r.te((o,l)=>{const c=new Se(o),u=function(p){return[0,gt(p)]}(c);i.push(t.get(u).next(d=>d?P.resolve():(p=>t.put({targetId:0,path:gt(p),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>P.waitFor(i))})}Di(e,t){e.createObjectStore(yo,{keyPath:WS});const r=t.store(yo),s=new zh,i=o=>{if(s.add(o)){const l=o.lastSegment(),c=o.popLast();return r.put({collectionId:l,parent:gt(c)})}};return t.store(Or).te({ee:!0},(o,l)=>{const c=new Se(o);return i(c.popLast())}).next(()=>t.store(zs).te({ee:!0},([o,l,c],u)=>{const d=rn(l);return i(d.popLast())}))}Ci(e){const t=e.store(Ks);return t.te((r,s)=>{const i=Ui(s),o=wv(this.serializer,i);return t.put(o)})}Fi(e,t){const r=t.store(Or),s=[];return r.te((i,o)=>{const l=t.store(dl),c=function(p){return p.document?new Q(Se.fromString(p.document.name).popFirst(5)):p.noDocument?Q.fromSegments(p.noDocument.path):p.unknownDocument?Q.fromSegments(p.unknownDocument.path):X(36783)}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(l.put(u))}).next(()=>P.waitFor(s))}Mi(e,t){const r=t.store(Ht),s=Nv(this.serializer),i=new Hh(nc.fi,this.serializer.wt);return r.J().next(o=>{const l=new Map;return o.forEach(c=>{var u;let d=(u=l.get(c.userId))!==null&&u!==void 0?u:pe();Fr(this.serializer,c).keys().forEach(p=>d=d.add(p)),l.set(c.userId,d)}),P.forEach(l,(c,u)=>{const d=new rt(u),p=ec.St(this.serializer,d),m=i.getIndexManager(d),I=tc.St(d,this.serializer,m,i.referenceDelegate);return new Ov(s,I,p,m).recalculateAndSaveOverlaysForDocumentKeys(new bu(t,$t.le),c).next()})})}}function Tm(n){n.createObjectStore(Hs,{keyPath:HS}).createIndex(Ph,GS,{unique:!0}),n.createObjectStore(Ks,{keyPath:"targetId"}).createIndex(wy,KS,{unique:!0}),n.createObjectStore(Kr)}const Hn="IndexedDbPersistence",zc=18e5,Kc=5e3,Hc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",xP="main";class Gh{constructor(e,t,r,s,i,o,l,c,u,d,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.xi=i,this.window=o,this.document=l,this.Oi=u,this.Ni=d,this.Bi=p,this.li=null,this.hi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Li=null,this.inForeground=!1,this.ki=null,this.qi=null,this.Qi=Number.NEGATIVE_INFINITY,this.$i=m=>Promise.resolve(),!Gh.C())throw new Y(N.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new _P(this,s),this.Ui=t+xP,this.serializer=new Tv(c),this.Ki=new lr(this.Ui,this.Bi,new CP(this.serializer)),this.Pi=new iP,this.Ti=new fP(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Nv(this.serializer),this.Ei=new sP,this.window&&this.window.localStorage?this.Wi=this.window.localStorage:(this.Wi=null,d===!1&&It(Hn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Y(N.FAILED_PRECONDITION,Hc);return this.zi(),this.ji(),this.Hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ti.getHighestSequenceNumber(e))}).then(e=>{this.li=new $t(e,this.Oi)}).then(()=>{this.hi=!0}).catch(e=>(this.Ki&&this.Ki.close(),Promise.reject(e)))}Ji(e){return this.$i=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.xi.enqueueAndForget(async()=>{this.started&&await this.Gi()}))}Gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ya(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Yi(e).next(t=>{t||(this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)))})}).next(()=>this.Zi(e)).next(t=>this.isPrimary&&!t?this.Xi(e).next(()=>!1):!!t&&this.es(e).next(()=>!0))).catch(e=>{if(vr(e))return U(Hn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U(Hn,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.xi.enqueueRetryable(()=>this.$i(e)),this.isPrimary=e})}Yi(e){return Vi(e).get(ms).next(t=>P.resolve(this.ts(t)))}ns(e){return ya(e).delete(this.clientId)}async rs(){if(this.isPrimary&&!this.ss(this.Qi,zc)){this.Qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Ye(t,Gs);return r.J().next(s=>{const i=this._s(s,zc),o=s.filter(l=>i.indexOf(l)===-1);return P.forEach(o,l=>r.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Wi)for(const t of e)this.Wi.removeItem(this.us(t.clientId))}}Hi(){this.qi=this.xi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Gi().then(()=>this.rs()).then(()=>this.Hi()))}ts(e){return!!e&&e.ownerId===this.clientId}Zi(e){return this.Ni?P.resolve(!0):Vi(e).get(ms).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,Kc)&&!this.cs(t.ownerId)){if(this.ts(t)&&this.networkEnabled)return!0;if(!this.ts(t)){if(!t.allowTabSynchronization)throw new Y(N.FAILED_PRECONDITION,Hc);return!1}}return!(!this.networkEnabled||!this.inForeground)||ya(e).J().next(r=>this._s(r,Kc).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,l=this.networkEnabled===s.networkEnabled;if(i||o&&l)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&U(Hn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.hi=!1,this.ls(),this.qi&&(this.qi.cancel(),this.qi=null),this.hs(),this.Ps(),await this.Ki.runTransaction("shutdown","readwrite",[Mo,Gs],e=>{const t=new bu(e,$t.le);return this.Xi(t).next(()=>this.ns(t))}),this.Ki.close(),this.Ts()}_s(e,t){return e.filter(r=>this.ss(r.updateTimeMs,t)&&!this.cs(r.clientId))}Is(){return this.runTransaction("getActiveClients","readonly",e=>ya(e).J().next(t=>this._s(t,zc).map(r=>r.clientId)))}get started(){return this.hi}getGlobalsCache(){return this.Pi}getMutationQueue(e,t){return tc.St(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new dP(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return ec.St(this.serializer,e)}getBundleCache(){return this.Ei}runTransaction(e,t,r){U(Hn,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(c){return c===18?uR:c===17?xy:c===16?cR:c===15?kh:c===14?Cy:c===13?Py:c===12?lR:c===11?Ry:void X(60245)}(this.Bi);let o;return this.Ki.runTransaction(e,s,i,l=>(o=new bu(l,this.li?this.li.next():$t.le),t==="readwrite-primary"?this.Yi(o).next(c=>!!c||this.Zi(o)).next(c=>{if(!c)throw It(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)),new Y(N.FAILED_PRECONDITION,yy);return r(o)}).next(c=>this.es(o).next(()=>c)):this.Es(o).next(()=>r(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Es(e){return Vi(e).get(ms).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,Kc)&&!this.cs(t.ownerId)&&!this.ts(t)&&!(this.Ni||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Y(N.FAILED_PRECONDITION,Hc)})}es(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Vi(e).put(ms,t)}static C(){return lr.C()}Xi(e){const t=Vi(e);return t.get(ms).next(r=>this.ts(r)?(U(Hn,"Releasing primary lease."),t.delete(ms)):P.resolve())}ss(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(It(`Detected an update time that is in the future: ${e} > ${r}`),!1))}zi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ki=()=>{this.xi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Gi()))},this.document.addEventListener("visibilitychange",this.ki),this.inForeground=this.document.visibilityState==="visible")}hs(){this.ki&&(this.document.removeEventListener("visibilitychange",this.ki),this.ki=null)}ji(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Li=()=>{this.ls();const t=/(?:Version|Mobile)\/1[456]/;m_()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.xi.enterRestrictedMode(!0),this.xi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Li))}Ps(){this.Li&&(this.window.removeEventListener("pagehide",this.Li),this.Li=null)}cs(e){var t;try{const r=((t=this.Wi)===null||t===void 0?void 0:t.getItem(this.us(e)))!==null;return U(Hn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return It(Hn,"Failed to get zombied client id.",r),!1}}ls(){if(this.Wi)try{this.Wi.setItem(this.us(this.clientId),String(Date.now()))}catch(e){It("Failed to set zombie client id.",e)}}Ts(){if(this.Wi)try{this.Wi.removeItem(this.us(this.clientId))}catch{}}us(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Vi(n){return Ye(n,Mo)}function ya(n){return Ye(n,Gs)}function kP(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Wh{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ds=r,this.As=s}static Rs(e,t){let r=pe(),s=pe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Wh(e,t.fromCache,r,s)}}/**
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
 */class VP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Mv{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return m_()?8:Iy(Je())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ws(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ss(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new VP;return this.bs(e,t,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,t,o,l.size)})}).next(()=>i.result)}Ds(e,t,r,s){return r.documentReadCount<this.gs?(ws()<=me.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",bs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),P.resolve()):(ws()<=me.DEBUG&&U("QueryEngine","Query:",bs(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(ws()<=me.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",bs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qt(t))):P.resolve())}ws(e,t){if(Hp(t))return P.resolve(null);let r=qt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ku(t,null,"F"),r=qt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=pe(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(t,l);return this.Cs(t,u,o,c.readTime)?this.ws(e,ku(t,null,"F")):this.Fs(e,u,t,c)}))})))}Ss(e,t,r,s){return Hp(t)||s.isEqual(se.min())?P.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(t,i);return this.Cs(t,o,r,s)?P.resolve(null):(ws()<=me.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bs(t)),this.Fs(e,o,t,DS(s,fo)).next(l=>l))})}vs(e,t){let r=new Ce(Jy(e));return t.forEach((s,i)=>{Uo(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,t,r){return ws()<=me.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",bs(t)),this.ys.getDocumentsMatchingQuery(e,t,Mt.min(),r)}Fs(e,t,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Qh="LocalStore",DP=3e8;class NP{constructor(e,t,r,s){this.persistence=e,this.Ms=t,this.serializer=s,this.xs=new Fe(ue),this.Os=new Mn(i=>ts(i),Lo),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ov(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function Lv(n,e,t,r){return new NP(n,e,t,r)}async function Fv(n,e){const t=he(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=pe();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function OP(n,e){const t=he(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let I=P.resolve();return m.forEach(R=>{I=I.next(()=>d.getEntry(c,R)).next(k=>{const x=u.docVersions.get(R);ne(x!==null,48541),k.version.compareTo(x)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),d.addEntry(k)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=pe();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Uv(n){const e=he(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function MP(n,e){const t=he(n),r=e.snapshotVersion;let s=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Bs.newChangeBuffer({trackRemovals:!0});s=t.xs;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(t.Ti.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.Ti.addMatchingKeys(i,d.addedDocuments,p)));let I=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(Ge.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),s=s.insert(p,I),function(k,x,B){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=DP?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(m,I,d)&&l.push(t.Ti.updateTargetData(i,I))});let c=Nt(),u=pe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(LP(i,o,e.documentUpdates).next(d=>{c=d.qs,u=d.Qs})),!r.isEqual(se.min())){const d=t.Ti.getLastRemoteSnapshotVersion(i).next(p=>t.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return P.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.xs=s,i))}function LP(n,e,t){let r=pe(),s=pe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Nt();return t.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):U(Qh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function FP(n,e){const t=he(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=zr),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function UP(n,e){const t=he(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ti.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.Ti.allocateTargetId(r).next(o=>(s=new bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function Uu(n,e,t){const r=he(n),s=r.xs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!vr(o))throw o;U(Qh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function wm(n,e,t){const r=he(n);let s=se.min(),i=pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=he(c),m=p.Os.get(d);return m!==void 0?P.resolve(p.xs.get(m)):p.Ti.getTargetData(u,d)}(r,o,qt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,t?s:se.min(),t?i:pe())).next(l=>(BP(r,AR(e),l),{documents:l,$s:i})))}function BP(n,e,t){let r=n.Ns.get(e)||se.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ns.set(e,r)}class bm{constructor(){this.activeTargetIds=kR()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bv{constructor(){this.xo=new bm,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new bm,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $P{No(e){}shutdown(){}}/**
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
 */const Am="ConnectivityMonitor";class Sm{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){U(Am,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){U(Am,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let va=null;function Bu(){return va===null?va=function(){return 268435456+Math.round(2147483648*Math.random())}():va++,"0x"+va.toString(16)}/**
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
 */const Gc="RestConnection",jP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qP{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===pl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,t,r,s,i){const o=Bu(),l=this.jo(e,t.toUriEncodedString());U(Gc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),d=Co(u);return this.Jo(e,l,c,r,d).then(p=>(U(Gc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Zr(Gc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,t,r,s,i,o){return this.zo(e,t,r,s,i)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,t){const r=jP[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */class zP{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const ut="WebChannelConnection";class KP extends qP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const o=Bu();return new Promise((l,c)=>{const u=new ay;u.setWithCredentials(!0),u.listenOnce(ly.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Va.NO_ERROR:const p=u.getResponseJson();U(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Va.TIMEOUT:U(ut,`RPC '${e}' ${o} timed out`),c(new Y(N.DEADLINE_EXCEEDED,"Request time out"));break;case Va.HTTP_ERROR:const m=u.getStatus();if(U(ut,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I==null?void 0:I.error;if(R&&R.status&&R.message){const k=function(B){const q=B.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(q)>=0?q:N.UNKNOWN}(R.status);c(new Y(k,R.message))}else c(new Y(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new Y(N.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{U(ut,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);U(ut,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",d,r,15)})}T_(e,t,r){const s=Bu(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hy(),l=uy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");U(ut,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,I=!1;const R=new zP({Zo:x=>{I?U(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(m||(U(ut,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),U(ut,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},Xo:()=>p.close()}),k=(x,B,q)=>{x.listen(B,j=>{try{q(j)}catch($){setTimeout(()=>{throw $},0)}})};return k(p,Mi.EventType.OPEN,()=>{I||(U(ut,`RPC '${e}' stream ${s} transport opened.`),R.__())}),k(p,Mi.EventType.CLOSE,()=>{I||(I=!0,U(ut,`RPC '${e}' stream ${s} transport closed`),R.u_())}),k(p,Mi.EventType.ERROR,x=>{I||(I=!0,Zr(ut,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),R.u_(new Y(N.UNAVAILABLE,"The operation could not be completed")))}),k(p,Mi.EventType.MESSAGE,x=>{var B;if(!I){const q=x.data[0];ne(!!q,16349);const j=q,$=(j==null?void 0:j.error)||((B=j[0])===null||B===void 0?void 0:B.error);if($){U(ut,`RPC '${e}' stream ${s} received error:`,$);const Z=$.status;let ee=function(v){const w=Ke[v];if(w!==void 0)return lv(w)}(Z),b=$.message;ee===void 0&&(ee=N.INTERNAL,b="Unknown error status: "+Z+" with message "+$.message),I=!0,R.u_(new Y(ee,b)),p.close()}else U(ut,`RPC '${e}' stream ${s} received:`,q),R.c_(q)}}),k(l,cy.STAT_EVENT,x=>{x.stat===yu.PROXY?U(ut,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===yu.NOPROXY&&U(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.a_()},0),R}}/**
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
 */function HP(){return typeof window<"u"?window:null}function ja(){return typeof document<"u"?document:null}/**
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
 */function rc(n){return new GR(n,!0)}/**
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
 */class $v{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,t-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const Rm="PersistentStream";class jv{constructor(e,t,r,s,i,o,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new $v(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(It(t.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===t&&this.K_(r,s)},r=>{e(()=>{const s=new Y(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return U(Rm,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(U(Rm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GP extends jv{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=JR(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?wt(o.readTime):se.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=Nu(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=gl(c)?{documents:gv(i,c)}:{query:_v(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=hv(i,o.resumeToken);const u=Vu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=ei(i,o.snapshotVersion.toTimestamp());const u=Vu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=XR(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=Nu(this.serializer),t.removeTarget=e,this.L_(t)}}class WP extends jv{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=YR(e.writeResults,e.commitTime),r=wt(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=Nu(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>vl(this.serializer,r))};this.L_(t)}}/**
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
 */class QP{}class JP extends QP{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new Y(N.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Du(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(N.UNKNOWN,i.toString())})}Yo(e,t,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,Du(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(N.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class YP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(It(t),this.oa=!1):U("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const is="RemoteStore";class XP{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(o=>{r.enqueueAndForget(async()=>{ls(this)&&(U(is,"Restarting streams for network reachability change."),await async function(c){const u=he(c);u.Ta.add(4),await $o(u),u.da.set("Unknown"),u.Ta.delete(4),await sc(u)}(this))})}),this.da=new YP(r,s)}}async function sc(n){if(ls(n))for(const e of n.Ia)await e(!0)}async function $o(n){for(const e of n.Ia)await e(!1)}function qv(n,e){const t=he(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),Zh(t)?Xh(t):li(t).M_()&&Yh(t,e))}function Jh(n,e){const t=he(n),r=li(t);t.Pa.delete(e),r.M_()&&zv(t,e),t.Pa.size===0&&(r.M_()?r.N_():ls(t)&&t.da.set("Unknown"))}function Yh(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}li(n).H_(e)}function zv(n,e){n.Aa.Ke(e),li(n).J_(e)}function Xh(n){n.Aa=new qR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),li(n).start(),n.da._a()}function Zh(n){return ls(n)&&!li(n).F_()&&n.Pa.size>0}function ls(n){return he(n).Ta.size===0}function Kv(n){n.Aa=void 0}async function ZP(n){n.da.set("Online")}async function eC(n){n.Pa.forEach((e,t)=>{Yh(n,e)})}async function tC(n,e){Kv(n),Zh(n)?(n.da.ca(e),Xh(n)):n.da.set("Unknown")}async function nC(n,e,t){if(n.da.set("Online"),e instanceof uv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Pa.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Pa.delete(l),s.Aa.removeTarget(l))}(n,e)}catch(r){U(is,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bl(n,r)}else if(e instanceof Ba?n.Aa.Xe(e):e instanceof cv?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(se.min()))try{const r=await Uv(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.Aa.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Pa.get(u);d&&i.Pa.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.Pa.get(c);if(!d)return;i.Pa.set(c,d.withResumeToken(Ge.EMPTY_BYTE_STRING,d.snapshotVersion)),zv(i,c);const p=new bn(d.target,c,u,d.sequenceNumber);Yh(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){U(is,"Failed to raise snapshot:",r),await bl(n,r)}}async function bl(n,e,t){if(!vr(e))throw e;n.Ta.add(1),await $o(n),n.da.set("Offline"),t||(t=()=>Uv(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U(is,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await sc(n)})}function Hv(n,e){return e().catch(t=>bl(n,t,e))}async function jo(n){const e=he(n),t=pr(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:zr;for(;rC(e);)try{const s=await FP(e.localStore,r);if(s===null){e.ha.length===0&&t.N_();break}r=s.batchId,sC(e,s)}catch(s){await bl(e,s)}Gv(e)&&Wv(e)}function rC(n){return ls(n)&&n.ha.length<10}function sC(n,e){n.ha.push(e);const t=pr(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function Gv(n){return ls(n)&&!pr(n).F_()&&n.ha.length>0}function Wv(n){pr(n).start()}async function iC(n){pr(n).ta()}async function oC(n){const e=pr(n);for(const t of n.ha)e.Z_(t.mutations)}async function aC(n,e,t){const r=n.ha.shift(),s=Uh.from(r,e,t);await Hv(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await jo(n)}async function lC(n,e){e&&pr(n).Y_&&await async function(r,s){if(function(o){return $R(o)&&o!==N.ABORTED}(s.code)){const i=r.ha.shift();pr(r).O_(),await Hv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await jo(r)}}(n,e),Gv(n)&&Wv(n)}async function Pm(n,e){const t=he(n);t.asyncQueue.verifyOperationInProgress(),U(is,"RemoteStore received new credentials");const r=ls(t);t.Ta.add(3),await $o(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await sc(t)}async function cC(n,e){const t=he(n);e?(t.Ta.delete(2),await sc(t)):e||(t.Ta.add(2),await $o(t),t.da.set("Unknown"))}function li(n){return n.Ra||(n.Ra=function(t,r,s){const i=he(t);return i.ra(),new GP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:ZP.bind(null,n),n_:eC.bind(null,n),i_:tC.bind(null,n),j_:nC.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),Zh(n)?Xh(n):n.da.set("Unknown")):(await n.Ra.stop(),Kv(n))})),n.Ra}function pr(n){return n.Va||(n.Va=function(t,r,s){const i=he(t);return i.ra(),new WP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:iC.bind(null,n),i_:lC.bind(null,n),X_:oC.bind(null,n),ea:aC.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await jo(n)):(await n.Va.stop(),n.ha.length>0&&(U(is,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
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
 */class ed{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new ed(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function td(n,e){if(It("AsyncQueue",`${e}: ${n}`),vr(n))return new Y(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Bs{static emptySet(e){return new Bs(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=Li(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Cm{constructor(){this.ma=new Fe(Q.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):X(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class ti{constructor(e,t,r,s,i,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new ti(e,t,Bs.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ql(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class uC{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class hC{constructor(){this.queries=xm(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const s=he(t),i=s.queries;s.queries=xm(),i.forEach((o,l)=>{for(const c of l.ya)c.onError(r)})})(this,new Y(N.ABORTED,"Firestore shutting down"))}}function xm(){return new Mn(n=>Qy(n),Ql)}async function dC(n,e){const t=he(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.wa()&&e.Sa()&&(r=2):(i=new uC,r=e.Sa()?0:1);try{switch(r){case 0:i.pa=await t.onListen(s,!0);break;case 1:i.pa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=td(o,`Initialization of query '${bs(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ya.push(e),e.Da(t.onlineState),i.pa&&e.va(i.pa)&&nd(t)}async function fC(n,e){const t=he(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ya.indexOf(e);o>=0&&(i.ya.splice(o,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function pC(n,e){const t=he(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.ya)l.va(s)&&(r=!0);o.pa=s}}r&&nd(t)}function mC(n,e,t){const r=he(n),s=r.queries.get(e);if(s)for(const i of s.ya)i.onError(t);r.queries.delete(e)}function nd(n){n.ba.forEach(e=>{e.next()})}var $u,km;(km=$u||($u={})).Ca="default",km.Cache="cache";class gC{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ti(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==$u.Cache}}/**
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
 */class Qv{constructor(e){this.key=e}}class Jv{constructor(e){this.key=e}}class _C{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=pe(),this.mutatedKeys=pe(),this.Ha=Jy(e),this.Ja=new Bs(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new Cm,s=t?t.Ja:this.Ja;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),I=Uo(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let x=!1;m&&I?m.data.isEqual(I.data)?R!==k&&(r.track({type:3,doc:I}),x=!0):this.eu(m,I)||(r.track({type:2,doc:I}),x=!0,(c&&this.Ha(I,c)>0||u&&this.Ha(I,u)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),x=!0):m&&!I&&(r.track({type:1,doc:m}),x=!0,(c||u)&&(l=!0)),x&&(I?(o=o.add(I),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ja:o,Xa:r,Cs:l,mutatedKeys:i}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((d,p)=>function(I,R){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:x})}};return k(I)-k(R)}(d.type,p.type)||this.Ha(d.doc,p.doc)),this.tu(r),s=s!=null&&s;const l=t&&!s?this.nu():[],c=this.ja.size===0&&this.current&&!s?1:0,u=c!==this.za;return this.za=c,o.length!==0||u?{snapshot:new ti(this.query,e.Ja,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Cm,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=pe(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new Jv(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new Qv(r))}),t}su(e){this.Ga=e.$s,this.ja=pe();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return ti.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const rd="SyncEngine";class yC{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class vC{constructor(e){this.key=e,this._u=!1}}class IC{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new Mn(l=>Qy(l),Ql),this.cu=new Map,this.lu=new Set,this.hu=new Fe(Q.comparator),this.Pu=new Map,this.Tu=new Kh,this.Iu={},this.Eu=new Map,this.du=ss.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function EC(n,e,t=!0){const r=nI(n);let s;const i=r.uu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await Yv(r,e,t,!0),s}async function TC(n,e){const t=nI(n);await Yv(t,e,!0,!1)}async function Yv(n,e,t,r){const s=await UP(n.localStore,qt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await wC(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&qv(n.remoteStore,s),l}async function wC(n,e,t,r,s){n.Ru=(p,m,I)=>async function(k,x,B,q){let j=x.view.Za(B);j.Cs&&(j=await wm(k.localStore,x.query,!1).then(({documents:b})=>x.view.Za(b,j)));const $=q&&q.targetChanges.get(x.targetId),Z=q&&q.targetMismatches.get(x.targetId)!=null,ee=x.view.applyChanges(j,k.isPrimaryClient,$,Z);return Dm(k,x.targetId,ee.ru),ee.snapshot}(n,p,m,I);const i=await wm(n.localStore,e,!0),o=new _C(e,i.$s),l=o.Za(i.documents),c=Bo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(l,n.isPrimaryClient,c);Dm(n,t,u.ru);const d=new yC(e,t,o);return n.uu.set(e,d),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),u.snapshot}async function bC(n,e,t){const r=he(n),s=r.uu.get(e),i=r.cu.get(s.targetId);if(i.length>1)return r.cu.set(s.targetId,i.filter(o=>!Ql(o,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Uu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Jh(r.remoteStore,s.targetId),ju(r,s.targetId)}).catch(as)):(ju(r,s.targetId),await Uu(r.localStore,s.targetId,!0))}async function AC(n,e){const t=he(n),r=t.uu.get(e),s=t.cu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Jh(t.remoteStore,r.targetId))}async function SC(n,e,t){const r=rI(n);try{const s=await function(o,l){const c=he(o),u=Be.now(),d=l.reduce((I,R)=>I.add(R.key),pe());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=Nt(),k=pe();return c.Bs.getEntries(I,d).next(x=>{R=x,R.forEach((B,q)=>{q.isValidDocument()||(k=k.add(B))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,R)).next(x=>{p=x;const B=[];for(const q of l){const j=UR(q,p.get(q.key).overlayedDocument);j!=null&&B.push(new Ln(q.key,j,By(j.value.mapValue),Tt.exists(!0)))}return c.mutationQueue.addMutationBatch(I,u,B,l)}).next(x=>{m=x;const B=x.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(I,x.batchId,B)})}).then(()=>({batchId:m.batchId,changes:Xy(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Iu[o.currentUser.toKey()];u||(u=new Fe(ue)),u=u.insert(l,c),o.Iu[o.currentUser.toKey()]=u}(r,s.batchId,t),await qo(r,s.changes),await jo(r.remoteStore)}catch(s){const i=td(s,"Failed to persist write");t.reject(i)}}async function Xv(n,e){const t=he(n);try{const r=await MP(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Pu.get(i);o&&(ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o._u=!0:s.modifiedDocuments.size>0?ne(o._u,14607):s.removedDocuments.size>0&&(ne(o._u,42227),o._u=!1))}),await qo(t,r,e)}catch(r){await as(r)}}function Vm(n,e,t){const r=he(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.uu.forEach((i,o)=>{const l=o.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=he(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.ya)m.Da(l)&&(u=!0)}),u&&nd(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RC(n,e,t){const r=he(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Pu.get(e),i=s&&s.key;if(i){let o=new Fe(Q.comparator);o=o.insert(i,je.newNoDocument(i,se.min()));const l=pe().add(i),c=new Zl(se.min(),new Map,new Fe(ue),o,l);await Xv(r,c),r.hu=r.hu.remove(i),r.Pu.delete(e),sd(r)}else await Uu(r.localStore,e,!1).then(()=>ju(r,e,t)).catch(as)}async function PC(n,e){const t=he(n),r=e.batch.batchId;try{const s=await OP(t.localStore,e);eI(t,r,null),Zv(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await qo(t,s)}catch(s){await as(s)}}async function CC(n,e,t){const r=he(n);try{const s=await function(o,l){const c=he(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(ne(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);eI(r,e,t),Zv(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await qo(r,s)}catch(s){await as(s)}}function Zv(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function eI(n,e,t){const r=he(n);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}function ju(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.cu.get(e))n.uu.delete(r),t&&n.au.Vu(r,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(r=>{n.Tu.containsKey(r)||tI(n,r)})}function tI(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(Jh(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),sd(n))}function Dm(n,e,t){for(const r of t)r instanceof Qv?(n.Tu.addReference(r.key,e),xC(n,r)):r instanceof Jv?(U(rd,"Document no longer in limbo: "+r.key),n.Tu.removeReference(r.key,e),n.Tu.containsKey(r.key)||tI(n,r.key)):X(19791,{mu:r})}function xC(n,e){const t=e.key,r=t.path.canonicalString();n.hu.get(t)||n.lu.has(r)||(U(rd,"New document in limbo: "+t),n.lu.add(r),sd(n))}function sd(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new Q(Se.fromString(e)),r=n.du.next();n.Pu.set(r,new vC(t)),n.hu=n.hu.insert(t,r),qv(n.remoteStore,new bn(qt(Mh(t.path)),r,"TargetPurposeLimboResolution",$t.le))}}async function qo(n,e,t){const r=he(n),s=[],i=[],o=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{o.push(r.Ru(c,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Wh.Rs(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.au.j_(s),await async function(c,u){const d=he(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>P.forEach(u,m=>P.forEach(m.ds,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>P.forEach(m.As,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!vr(p))throw p;U(Qh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const I=d.xs.get(m),R=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(R);d.xs=d.xs.insert(m,k)}}}(r.localStore,i))}async function kC(n,e){const t=he(n);if(!t.currentUser.isEqual(e)){U(rd,"User change. New user:",e.toKey());const r=await Fv(t.localStore,e);t.currentUser=e,function(i,o){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new Y(N.CANCELLED,o))})}),i.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qo(t,r.ks)}}function VC(n,e){const t=he(n),r=t.Pu.get(e);if(r&&r._u)return pe().add(r.key);{let s=pe();const i=t.cu.get(e);if(!i)return s;for(const o of i){const l=t.uu.get(o);s=s.unionWith(l.view.Ya)}return s}}function nI(n){const e=he(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RC.bind(null,e),e.au.j_=pC.bind(null,e.eventManager),e.au.Vu=mC.bind(null,e.eventManager),e}function rI(n){const e=he(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CC.bind(null,e),e}class Ao{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rc(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return Lv(this.persistence,new Mv,e.initialUser,this.serializer)}yu(e){return new Hh(nc.fi,this.serializer)}pu(e){return new Bv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ao.provider={build:()=>new Ao};class DC extends Ao{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){ne(this.persistence.referenceDelegate instanceof wl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new kv(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Hh(r=>wl.fi(r,t),this.serializer)}}class NC extends Ao{constructor(e,t,r){super(),this.Du=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Du.initialize(this,e),await rI(this.Du.syncEngine),await jo(this.Du.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}wu(e){return Lv(this.persistence,new Mv,e.initialUser,this.serializer)}Su(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new kv(r,e.asyncQueue,t)}bu(e,t){const r=new LS(t,this.persistence);return new MS(e.asyncQueue,r)}yu(e){const t=kP(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Gh(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,HP(),ja(),this.serializer,this.sharedClientState,!!this.forceOwnership)}pu(e){return new Bv}}class Al{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kC.bind(null,this.syncEngine),await cC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hC}()}createDatastore(e){const t=rc(e.databaseInfo.databaseId),r=function(i){return new KP(i)}(e.databaseInfo);return function(i,o,l,c){return new JP(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new XP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Vm(this.syncEngine,t,0),function(){return Sm.C()?new Sm:new $P}())}createSyncEngine(e,t){return function(s,i,o,l,c,u,d){const p=new IC(s,i,o,l,c,u);return d&&(p.Au=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=he(s);U(is,"RemoteStore shutting down."),i.Ta.add(5),await $o(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Al.provider={build:()=>new Al};/**
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
 */class OC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):It("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const mr="FirestoreClient";class MC{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=my.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{U(mr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U(mr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=td(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wc(n,e){n.asyncQueue.verifyOperationInProgress(),U(mr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Fv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Nm(n,e){n.asyncQueue.verifyOperationInProgress();const t=await LC(n);U(mr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Pm(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Pm(e.remoteStore,s)),n._onlineComponents=e}async function LC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(mr,"Using user provided OfflineComponentProvider");try{await Wc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Zr("Error using user provided cache. Falling back to memory cache: "+t),await Wc(n,new Ao)}}else U(mr,"Using default OfflineComponentProvider"),await Wc(n,new DC(void 0));return n._offlineComponents}async function sI(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(mr,"Using user provided OnlineComponentProvider"),await Nm(n,n._uninitializedComponentsProvider._online)):(U(mr,"Using default OnlineComponentProvider"),await Nm(n,new Al))),n._onlineComponents}function FC(n){return sI(n).then(e=>e.syncEngine)}async function UC(n){const e=await sI(n),t=e.eventManager;return t.onListen=EC.bind(null,e.syncEngine),t.onUnlisten=bC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=TC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=AC.bind(null,e.syncEngine),t}function BC(n,e,t={}){const r=new Sn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new OC({next:m=>{d.Cu(),o.enqueueAndForget(()=>fC(i,p)),m.fromCache&&c.source==="server"?u.reject(new Y(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new gC(l,d,{includeMetadataChanges:!0,La:!0});return dC(i,p)}(await UC(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function iI(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Om=new Map;/**
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
 */function oI(n,e,t){if(!t)throw new Y(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function $C(n,e,t,r){if(e===!0&&r===!0)throw new Y(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Mm(n){if(!Q.isDocumentKey(n))throw new Y(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Lm(n){if(Q.isDocumentKey(n))throw new Y(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ic(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X(12329,{type:typeof n})}function gr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Y(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ic(n);throw new Y(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const aI="firestore.googleapis.com",Fm=!0;class Um{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=aI,this.ssl=Fm}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Fm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pP)throw new Y(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$C("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Um({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Um(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bS;switch(r.type){case"firstParty":return new PS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Om.get(t);r&&(U("ComponentProvider","Removing Datastore"),Om.delete(t),r.terminate())}(this),Promise.resolve()}}function jC(n,e,t,r={}){var s;n=gr(n,oc);const i=Co(e),o=n._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i&&(d_(`https://${c}`),f_("Firestore",!0)),o.host!==aI&&o.host!==c&&Zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Wr(u,l)&&(n._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=rt.MOCK_USER;else{d=Ow(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Y(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new rt(m)}n._authCredentials=new AS(new fy(d,p))}}/**
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
 */class ci{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ci(this.firestore,e,this._query)}}class Ot{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class cr extends ci{constructor(e,t,r){super(e,t,Mh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new Q(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function Bm(n,e,...t){if(n=He(n),oI("collection","path",e),n instanceof oc){const r=Se.fromString(e,...t);return Lm(r),new cr(n,null,r)}{if(!(n instanceof Ot||n instanceof cr))throw new Y(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return Lm(r),new cr(n.firestore,null,r)}}function qu(n,e,...t){if(n=He(n),arguments.length===1&&(e=my.newId()),oI("doc","path",e),n instanceof oc){const r=Se.fromString(e,...t);return Mm(r),new Ot(n,null,new Q(r))}{if(!(n instanceof Ot||n instanceof cr))throw new Y(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return Mm(r),new Ot(n.firestore,n instanceof cr?n.converter:null,new Q(r))}}/**
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
 */const $m="AsyncQueue";class jm{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new $v(this,"async_queue_retry"),this.ec=()=>{const r=ja();r&&U($m,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=ja();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=ja();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new Sn;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!vr(e))throw e;U($m,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,It("INTERNAL UNHANDLED ERROR: ",qm(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const s=ed.createAndSchedule(this,e,t,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&X(47125,{_c:qm(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function qm(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ui extends oc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new jm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jm(e),this._firestoreClient=void 0,await e}}}function qC(n,e){const t=typeof n=="object"?n:E_(),r=typeof n=="string"?n:pl,s=ph(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Dw("firestore");i&&jC(s,...i)}return s}function lI(n){if(n._terminated)throw new Y(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||cI(n),n._firestoreClient}function cI(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,u,d){return new dR(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,iI(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new MC(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}function zC(n,e){Zr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return KC(n,Al.provider,{build:r=>new NC(r,t.cacheSizeBytes,void 0)}),Promise.resolve()}function KC(n,e,t){if((n=gr(n,ui))._firestoreClient||n._terminated)throw new Y(N.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new Y(N.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},cI(n)}/**
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
 */class ni{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ni(Ge.fromBase64String(e))}catch(t){throw new Y(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ni(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ac{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Y(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class id{constructor(e){this._methodName=e}}/**
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
 */class od{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Y(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Y(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */class ad{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const HC=/^__.*__$/;class GC{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ln(e,this.data,this.fieldMask,t,this.fieldTransforms):new ai(e,this.data,t,this.fieldTransforms)}}class uI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ln(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hI(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{hc:n})}}class ld{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Sl(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(hI(this.hc)&&HC.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class WC{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||rc(e)}gc(e,t,r,s=!1){return new ld({hc:e,methodName:t,fc:r,path:Ue.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cd(n){const e=n._freezeSettings(),t=rc(n._databaseId);return new WC(n._databaseId,!!e.ignoreUndefinedProperties,t)}function QC(n,e,t,r,s,i={}){const o=n.gc(i.merge||i.mergeFields?2:0,e,t,s);ud("Data must be an object, but it was:",o,r);const l=dI(r,o);let c,u;if(i.merge)c=new At(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=zu(e,p,t);if(!o.contains(m))throw new Y(N.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);pI(d,m)||d.push(m)}c=new At(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new GC(new pt(l),c,u)}class lc extends id{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lc}}function JC(n,e,t,r){const s=n.gc(1,e,t);ud("Data must be an object, but it was:",s,r);const i=[],o=pt.empty();Ir(r,(c,u)=>{const d=hd(e,c,t);u=He(u);const p=s.Ac(d);if(u instanceof lc)i.push(d);else{const m=zo(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new At(i);return new uI(o,l,s.fieldTransforms)}function YC(n,e,t,r,s,i){const o=n.gc(1,e,t),l=[zu(e,r,t)],c=[s];if(i.length%2!=0)throw new Y(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(zu(e,i[m])),c.push(i[m+1]);const u=[],d=pt.empty();for(let m=l.length-1;m>=0;--m)if(!pI(u,l[m])){const I=l[m];let R=c[m];R=He(R);const k=o.Ac(I);if(R instanceof lc)u.push(I);else{const x=zo(R,k);x!=null&&(u.push(I),d.set(I,x))}}const p=new At(u);return new uI(d,p,o.fieldTransforms)}function XC(n,e,t,r=!1){return zo(t,n.gc(r?4:3,e))}function zo(n,e){if(fI(n=He(n)))return ud("Unsupported field value:",e,n),dI(n,e);if(n instanceof id)return function(r,s){if(!hI(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=zo(l,s.Rc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return VR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:ei(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ei(s.serializer,i)}}if(r instanceof od)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ni)return{bytesValue:hv(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ad)return function(o,l){return{mapValue:{fields:{[Dh]:{stringValue:Nh},[Ws]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Vc("VectorValues must only contain numeric values.");return Lh(l.serializer,u)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${ic(r)}`)}(n,e)}function dI(n,e){const t={};return ky(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ir(n,(r,s)=>{const i=zo(s,e.Ic(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function fI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Be||n instanceof od||n instanceof ni||n instanceof Ot||n instanceof id||n instanceof ad)}function ud(n,e,t){if(!fI(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ic(t);throw r==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+r)}}function zu(n,e,t){if((e=He(e))instanceof ac)return e._internalPath;if(typeof e=="string")return hd(n,e);throw Sl("Field path arguments must be of type string or ",n,!1,void 0,t)}const ZC=new RegExp("[~\\*/\\[\\]]");function hd(n,e,t){if(e.search(ZC)>=0)throw Sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ac(...e.split("."))._internalPath}catch{throw Sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Sl(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Y(N.INVALID_ARGUMENT,l+n+c)}function pI(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class mI{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ex(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(dd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ex extends mI{data(){return super.data()}}function dd(n,e){return typeof e=="string"?hd(n,e):e instanceof ac?e._internalPath:e._delegate._internalPath}/**
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
 */function tx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Y(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fd{}class nx extends fd{}function rx(n,e,...t){let r=[];e instanceof fd&&r.push(e),r=r.concat(t),function(i){const o=i.filter(c=>c instanceof pd).length,l=i.filter(c=>c instanceof cc).length;if(o>1||o>0&&l>0)throw new Y(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class cc extends nx{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new cc(e,t,r)}_apply(e){const t=this._parse(e);return gI(e._query,t),new ci(e.firestore,e.converter,xu(e._query,t))}_parse(e){const t=cd(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Y(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Km(p,d);const R=[];for(const k of p)R.push(zm(c,i,k));m={arrayValue:{values:R}}}else m=zm(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Km(p,d),m=XC(l,o,p,d==="in"||d==="not-in");return ge.create(u,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function sx(n,e,t){const r=e,s=dd("where",n);return cc._create(s,r,t)}class pd extends fd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new pd(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Pe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)gI(o,c),o=xu(o,c)}(e._query,t),new ci(e.firestore,e.converter,xu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function zm(n,e,t){if(typeof(t=He(t))=="string"){if(t==="")throw new Y(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wy(e)&&t.indexOf("/")!==-1)throw new Y(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Se.fromString(t));if(!Q.isDocumentKey(r))throw new Y(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Eo(n,new Q(r))}if(t instanceof Ot)return Eo(n,t._key);throw new Y(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ic(t)}.`)}function Km(n,e){if(!Array.isArray(n)||n.length===0)throw new Y(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gI(n,e){const t=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Y(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ix{convertValue(e,t="none"){switch(dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ir(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Ws].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Le(o.doubleValue));return new ad(i)}convertGeoPoint(e){return new od(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Gl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(vo(e));default:return null}}convertTimestamp(e){const t=Vn(e);return new Be(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Se.fromString(e);ne(Ev(r),9688,{name:e});const s=new es(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(t)||It(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function ox(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class Ia{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ax extends mI{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(dd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class qa extends ax{data(e={}){return super.data(e)}}class lx{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ia(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new qa(this._firestore,this._userDataWriter,r.key,r,new Ia(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Y(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new qa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ia(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new qa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ia(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:cx(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function cx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:n})}}class ux extends ix{constructor(e){super(),this.firestore=e}convertBytes(e){return new ni(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,t)}}function hx(n){n=gr(n,ci);const e=gr(n.firestore,ui),t=lI(e),r=new ux(e);return tx(n._query),BC(t,n._query).then(s=>new lx(e,r,n,s))}function dx(n,e,t,...r){n=gr(n,Ot);const s=gr(n.firestore,ui),i=cd(s);let o;return o=typeof(e=He(e))=="string"||e instanceof ac?YC(i,"updateDoc",n._key,e,t,r):JC(i,"updateDoc",n._key,e),md(s,[o.toMutation(n._key,Tt.exists(!0))])}function fx(n){return md(gr(n.firestore,ui),[new Xl(n._key,Tt.none())])}function px(n,e){const t=gr(n.firestore,ui),r=qu(n),s=ox(n.converter,e);return md(t,[QC(cd(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Tt.exists(!1))]).then(()=>r)}function md(n,e){return function(r,s){const i=new Sn;return r.asyncQueue.enqueueAndForget(async()=>SC(await FC(r),s,i)),i.promise}(lI(n),e)}(function(e,t=!0){(function(s){oi=s})(si),js(new Qr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ui(new SS(r.getProvider("auth-internal")),new CS(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new es(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),or(wp,bp,e),or(wp,bp,"esm2017")})();const mx={apiKey:"AIzaSyA8EmogduR2W8d9ht3q4VyM4J-JUTvwBd8",authDomain:"noteeasy-7080d.firebaseapp.com",projectId:"noteeasy-7080d",storageBucket:"noteeasy-7080d.appspot.com",messagingSenderId:"982678504604",appId:"1:982678504604:web:efbc601021106951319959",measurementId:"G-4FHPK9T92Y"},gx=I_(mx),Bi=qC(gx);zC(Bi).then(()=>{console.log("Persistencia offline habilitada.")}).catch(n=>{n.code==="failed-precondition"?console.warn("Persistencia offline no habilitada: varias pestañas abiertas."):n.code==="unimplemented"&&console.warn("Persistencia offline no soportada en este navegador.")});function gd(){const n=Ie([]),e=Us(),t=Ie(null);Q_(e,u=>{t.value=u,t.value?r():n.value=[]});async function r(){try{if(!t.value){n.value=[];return}const u=rx(Bm(Bi,"notes"),sx("uid","==",t.value.uid)),d=await hx(u);n.value=d.docs.map(p=>({id:p.id,...p.data(),favorita:p.data().favorita??!1})),console.log("Notas cargadas:",n.value)}catch(u){console.error("Error al cargar notas:",u.message)}}async function s(u){try{if(!t.value)throw new Error("Para crear notas debes estar registrado/logueado");const d={...u,uid:t.value.uid,favorita:u.favorita??!1},p=await px(Bm(Bi,"notes"),d);n.value.push({id:p.id,...d})}catch(d){throw alert(d.message),d}}async function i(u,d){try{const p=await i0(e,u,d);return t.value=p.user,await r(),p.user}catch(p){throw console.error("Error al iniciar sesión:",p.message),p}}async function o(u,d){try{await dx(qu(Bi,"notes",d),u),n.value=n.value.map(p=>p.id===d?{id:d,...u}:p)}catch(p){console.error("Error al actualizar nota:",p.message)}}async function l(u){try{await fx(qu(Bi,"notes",u)),n.value=n.value.filter(d=>d.id!==u)}catch(d){console.error("Error al eliminar nota:",d.message)}}function c(){n.value=[]}return{notes:n,loadNotes:r,addNote:s,login:i,updateNote:o,deleteNote:l,clearNotes:c}}const _x={class:"bg-[var(--color-white)] dark:bg-[var(--color-semi-black)] p-6 rounded-lg shadow-lg w-96 relative border border-[var(--color-black)] dark:border-[var(--color-grey)]"},yx={class:"mb-4"},vx={class:"mb-4"},Ix={class:"mb-4 flex items-center"},Ex={class:"text-center mt-4"},Tx={__name:"LoginModal",props:{isModalOpen:Boolean},emits:["close"],setup(n,{emit:e}){const t=n,r=e,s=Ie(""),i=Ie(""),o=Ie(!1),l=Ie(null),{login:c,loadNotes:u}=gd();async function d(){if(!navigator.onLine){alert("No tienes conexión a internet. Conéctate para iniciar sesión.");return}try{const k=Us();await l0(k,o.value?X_:Th),await c(s.value,i.value),await u(),r("close")}catch(k){k.code==="auth/invalid-credential"||k.message&&k.message.includes("invalid-credential")?alert("El usuario o la contraseña no son correctos. Si no tienes cuenta, regístrate primero."):k.code==="auth/user-not-found"||k.message&&k.message.includes("user-not-found")?alert("Debes registrarte antes de iniciar sesión."):alert("Error: "+(k.message||k))}}async function p(){if(!navigator.onLine){alert("No tienes conexión a internet. Conéctate para registrarte.");return}const k=Us();try{if((await a0(k,s.value)).length>0){alert("Este email ya está registrado. Por favor, inicia sesión.");return}await s0(k,s.value,i.value),alert("Registro exitoso. Ahora puedes iniciar sesión."),m()}catch(x){alert("Error de registro: "+x.message)}}function m(){r("close")}function I(){if(!s.value){alert("Por favor, introduce tu email para poder enviar el correo de recuperación.");return}if(!navigator.onLine){alert("No tienes conexión a internet. Conéctate para recuperar la contraseña.");return}const k=Us();r0(k,s.value).then(()=>{alert("Se ha enviado un correo para restablecer tu contraseña.")}).catch(x=>{alert("Error al enviar el correo: "+x.message)})}Ns(()=>t.isModalOpen,k=>{var x;k?(document.addEventListener("keydown",R),(x=l.value)==null||x.focus()):document.removeEventListener("keydown",R)});function R(k){k.key==="Escape"&&m()}return(k,x)=>t.isModalOpen?(_e(),xe("div",{key:0,class:"fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50",onKeydown:s_(m,["esc"]),tabindex:"0",ref_key:"modalContainer",ref:l,onMousedown:an(m,["self"])},[G("div",_x,[G("button",{onClick:m,class:"absolute top-2 right-2 text-xl font-bold text-[var(--color-black)] dark:text-[var(--color-white)]"},"×"),x[7]||(x[7]=G("h2",{class:"text-xl font-semibold text-center mb-4 text-[var(--color-black)] dark:text-[var(--color-white)]"},"Login / Register",-1)),G("form",{onSubmit:an(d,["prevent"])},[G("div",yx,[x[3]||(x[3]=G("label",{for:"email",class:"block text-sm font-medium text-[var(--color-black)] dark:text-[var(--color-white)]"},"Email:",-1)),wa(G("input",{id:"email",type:"email","onUpdate:modelValue":x[0]||(x[0]=B=>s.value=B),class:"w-full mt-1 p-2 border border-[var(--color-black)] dark:border-[var(--color-white)] rounded-md bg-[var(--color-grey)] dark:bg-[var(--color-white)] text-[var(--color-black)] dark:text-[var(--color-black)]",required:""},null,512),[[uu,s.value]])]),G("div",vx,[x[4]||(x[4]=G("label",{for:"password",class:"block text-sm font-medium text-[var(--color-black)] dark:text-[var(--color-white)]"},"Password:",-1)),wa(G("input",{id:"password",type:"password","onUpdate:modelValue":x[1]||(x[1]=B=>i.value=B),class:"w-full mt-1 p-2 border border-[var(--color-black)] dark:border-[var(--color-white)] rounded-md bg-[var(--color-grey)] dark:bg-[var(--color-white)] text-[var(--color-black)] dark:text-[var(--color-black)]",required:""},null,512),[[uu,i.value]])]),G("div",Ix,[wa(G("input",{id:"keepLogged",type:"checkbox","onUpdate:modelValue":x[2]||(x[2]=B=>o.value=B),class:"mr-2 w-6 h-6"},null,512),[[mw,o.value]]),x[5]||(x[5]=G("label",{for:"keepLogged",class:"text-md text-[var(--color-black)] dark:text-[var(--color-white)]"},"No cerrar sesión",-1))]),G("div",{class:"flex justify-between"},[G("button",{type:"button",onClick:p,class:"px-4 py-2 bg-green-500 text-[var(--color-white)] rounded-md shadow-md"}," Register "),x[6]||(x[6]=G("button",{type:"submit",class:"px-4 py-2 bg-[var(--color-blue-strong)] text-[var(--color-white)] rounded-md shadow-md"}," Login ",-1))])],32),G("div",Ex,[G("a",{href:"#",onClick:an(I,["prevent"]),class:"text-sm text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] hover:underline"}," ¿Olvidaste tu contraseña? ")])])],544)):uh("",!0)}},wx={class:"bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]"},bx={class:"container mx-auto w-full px-3 py-2 grid grid-cols-3 items-center gap-2 relative"},Ax={class:"flex items-center justify-end"},Sx={__name:"Header",setup(n){const e=Ie(!1),t=Ie(!1),{loadNotes:r,clearNotes:s}=gd();function i(){e.value=!0}function o(){e.value=!1}function l(){const c=Us();h0(c).then(()=>{t.value=!1,s(),alert("Sesión cerrada exitosamente.")}).catch(u=>{alert("Error al cerrar sesión: "+u.message)})}return ri(()=>{const c=Us();Q_(c,u=>{t.value=!!u,u?r():s()})}),(c,u)=>(_e(),xe("header",wx,[G("section",bx,[u[0]||(u[0]=RT('<div class="flex items-center justify-start"><a href="index.html" class="ml-2"><img src="'+Aw+'" alt="Logo" class="h-12 w-auto"></a></div><div class="font-semibold text-center"><h1 class="text-xl md:text-2xl font-bold">NoteEasy</h1></div>',2)),G("div",Ax,[t.value?(_e(),xe("button",{key:1,onClick:l,class:"mr-2 bg-[var(--color-red)] text-[var(--color-white)] px-3 py-2 rounded-md shadow-md"}," Logout ")):(_e(),xe("button",{key:0,onClick:i,class:"mr-2 bg-[var(--color-white)] px-3 py-2 rounded-md shadow-md"}," Login/Register "))])]),we(Tx,{isModalOpen:e.value,onClose:o},null,8,["isModalOpen"])]))}},Rx=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},Px={},Cx={class:"h-16 bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)] flex items-center justify-center"};function xx(n,e){return _e(),xe("section",Cx,e[0]||(e[0]=[G("div",null,[G("h1",{class:"text-[var(--color-black)] dark:text-[var(--color-white)] text-xl font-['Inter']"}," By Alejandro Sánchez López - DAW ")],-1)]))}const kx=Rx(Px,[["render",xx]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vx=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),Dx=n=>{const e=Vx(n);return e.charAt(0).toUpperCase()+e.slice(1)},Nx=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ea={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:r,iconNode:s,name:i,class:o,...l},{slots:c})=>au("svg",{...Ea,width:n||Ea.width,height:n||Ea.height,stroke:r||Ea.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:Nx("lucide",...i?[`lucide-${Hm(Dx(i))}-icon`,`lucide-${Hm(i)}`]:["lucide-icon"]),...l},[...s.map(u=>au(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=(n,e)=>(t,{slots:r})=>au(Ox,{...t,iconNode:e,name:n},r);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=_d("monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=_d("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=_d("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Gn=Ie(localStorage.getItem("theme")||"system");function Ux(){const n=()=>{const t=window.matchMedia("(prefers-color-scheme: dark)").matches;Gn.value==="dark"?document.documentElement.classList.add("dark"):Gn.value==="light"?document.documentElement.classList.remove("dark"):document.documentElement.classList.toggle("dark",t),localStorage.setItem("theme",Gn.value)};return ri(()=>{n();const t=window.matchMedia("(prefers-color-scheme: dark)"),r=s=>{Gn.value==="system"&&document.documentElement.classList.toggle("dark",s.matches)};t.addEventListener("change",r)}),pT(()=>{n()}),{theme:Gn,toggleTheme:()=>{Gn.value=Gn.value==="light"?"dark":Gn.value==="dark"?"system":"light"}}}const Bx={__name:"ThemeToggle",setup(n){const{theme:e,toggleTheme:t}=Ux();return(r,s)=>(_e(),xe("button",{onClick:s[0]||(s[0]=(...i)=>Pt(t)&&Pt(t)(...i)),class:"fixed bottom-24 left-6 md:bottom-24 md:left-16 rounded-full w-12 h-12 md:w-16 md:h-16 bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)] text-[var(--color-black)] dark:text-[var(--button-text-light)] flex items-center justify-center gap-2 shadow-lg z-50"},[Pt(e)==="light"?(_e(),qr(Pt(Fx),{key:0,class:"w-6 h-6 md:w-7 md:h-7"})):Pt(e)==="dark"?(_e(),qr(Pt(Lx),{key:1,class:"w-6 h-6 md:w-7 md:h-7"})):(_e(),qr(Pt(Mx),{key:2,class:"w-6 h-6 md:w-7 md:h-7"}))]))}},$x={class:"flex flex-col space-y-2"},jx=["for"],qx=["id","value"],zx=["value"],Ku={__name:"GeneralSelect",props:{label:String,id:String,options:Array,modelValue:String},setup(n){return(e,t)=>(_e(),xe("div",$x,[G("label",{for:n.id,class:"text-md text-[var(--color-black)] dark:text-[var(--color-white)]"},Et(n.label)+":",9,jx),G("select",{id:n.id,value:n.modelValue,onChange:t[0]||(t[0]=r=>e.$emit("update:modelValue",r.target.value)),class:"border border-[var(--color-black)] rounded-2xl p-2 text-base bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-semi-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"},[(_e(!0),xe(kt,null,kg(n.options,r=>(_e(),xe("option",{key:r,value:r},Et(r),9,zx))),128))],40,qx)]))}},Kx={class:"flex flex-col space-y-2"},Hx=["for"],Gx=["id","value","placeholder"],Wx=["id","type","value","placeholder"],Qc={__name:"GeneralInput",props:{label:String,id:String,type:{type:String,default:"text"},placeholder:String,modelValue:String},setup(n){return(e,t)=>(_e(),xe("div",Kx,[G("label",{for:n.id,class:"text-md font-medium text-[var(--color-black)] dark:text-[var(--color-white)]"},Et(n.label)+":",9,Hx),n.type==="textarea"?(_e(),xe("textarea",{key:0,id:n.id,value:n.modelValue,onInput:t[0]||(t[0]=r=>e.$emit("update:modelValue",r.target.value)),placeholder:n.placeholder,class:"border border-[var(--color-black)] rounded-2xl p-2 text-base bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)] resize-y min-h-[96px]"},null,40,Gx)):(_e(),xe("input",{key:1,id:n.id,type:n.type,value:n.modelValue,onInput:t[1]||(t[1]=r=>e.$emit("update:modelValue",r.target.value)),placeholder:n.placeholder,class:"border border-[var(--color-black)] rounded-2xl p-2 text-base bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"},null,40,Wx))]))}},Qx={__name:"CloseButton",emits:["close"],setup(n,{emit:e}){const t=e,r=()=>{t("close")};return(s,i)=>(_e(),xe("section",null,[G("button",{onClick:r,class:"px-4 py-2 bg-[var(--color-red)] hover:bg-[var(--color-black)] text-[var(--color-white)] font-semibold rounded-lg shadow-md"}," Volver ")]))}},Jx={__name:"SaveButton",props:{inputs:Object,selectValue:{type:[Object,String],default:""}},emits:["saveSuccess"],setup(n,{emit:e}){const t=n,r=e,s=()=>{const i=JSON.parse(localStorage.getItem("notes"))||[],o=new Date().toISOString(),l={title:t.inputs.noteTitle.trim(),etiquetas:t.inputs.noteEtiquetas.trim(),description:t.inputs.noteDescription.trim(),priority:t.selectValue.trim(),timestamp:o};t.inputs.index!==void 0&&t.inputs.index!==null?i[t.inputs.index]=l:i.push(l),localStorage.setItem("notes",JSON.stringify(i)),r("saveSuccess",{note:l,index:t.inputs.index})};return(i,o)=>(_e(),xe("section",null,[G("button",{onClick:s,class:"px-4 py-2 bg-[var(--color-blue-strong)] hover:bg-[var(--color-blue-strong)] text-[var(--color-white)] font-semibold rounded-lg shadow-md"}," Guardar ")]))}};function Yx({title:n,etiquetas:e,description:t,priority:r}){return!(!(n!=null&&n.trim())||!(e!=null&&e.trim())||!(t!=null&&t.trim())||!(r!=null&&r.trim()))}const Xx={class:"p-8 rounded-lg w-[94vw] max-w-3xl md:w-full mx-auto relative bg-[var(--color-white)] dark:bg-[var(--color-semi-black)] border border-[var(--color-semi-black)] shadow-lg"},Zx={class:"text-2xl font-semibold mb-0 text-[var(--color-black)] dark:text-[var(--color-white)]"},e1={class:"space-y-8"},t1={class:"flex gap-4"},n1={class:"flex justify-between mt-6"},r1={__name:"AddNoteModal",props:{isModalOpen:Boolean,noteData:Object,editIndex:Number},emits:["close","saveSuccess"],setup(n,{emit:e}){const t=n,r=e,s=Ie(""),i=Ie(""),o=Ie(""),l=Ie("Sin Prioridad"),c=Ie(""),u=Ie(!1),d=Ie(null);Ns(()=>t.noteData,I=>{I?(s.value=I.title,i.value=I.etiquetas,o.value=I.description,l.value=I.priority||"Sin Prioridad",c.value=I.timestamp,u.value=I.favorita??!1):(l.value="Sin Prioridad",u.value=!1)},{immediate:!0}),Ns(()=>t.isModalOpen,I=>{I&&vg(()=>{var R;(R=d.value)==null||R.focus()})});const p=()=>{r("close")},m=I=>{if(!Yx({title:s.value,etiquetas:i.value,description:o.value,priority:l.value})){alert("Todos los campos son obligatorios.");return}I.note.favorita=u.value,r("saveSuccess",I),p()};return(I,R)=>n.isModalOpen?(_e(),xe("section",{key:0,ref_key:"modalSection",ref:d,class:"fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50",onMousedown:an(p,["self"]),onKeydown:s_(p,["esc"]),tabindex:"0"},[G("div",Xx,[G("button",{onClick:p,class:"absolute top-2 right-2 text-xl font-bold text-[var(--color-black)] dark:text-[var(--color-white)]"}," × "),G("h2",Zx,Et(n.editIndex!==null?"Editar Nota":"Crear una nueva nota"),1),R[4]||(R[4]=G("hr",{class:"w-1/3 border-2 mb-4 border-[var(--color-blue)]"},null,-1)),G("div",e1,[we(Ku,{label:"Prioridad",id:"noteType",options:["Alta","Media","Baja","Sin Prioridad"],modelValue:l.value,"onUpdate:modelValue":R[0]||(R[0]=k=>l.value=k)},null,8,["modelValue"]),G("div",t1,[we(Qc,{label:"Título",id:"noteTitle",type:"text",placeholder:"Título...",modelValue:s.value,"onUpdate:modelValue":R[1]||(R[1]=k=>s.value=k),class:"flex-1"},null,8,["modelValue"]),we(Qc,{label:"Etiquetas",id:"noteEtiquetas",type:"text",placeholder:"Etiquetas...",modelValue:i.value,"onUpdate:modelValue":R[2]||(R[2]=k=>i.value=k),class:"flex-1"},null,8,["modelValue"])]),we(Qc,{label:"Descripción",id:"noteDescription",type:"textarea",placeholder:"Descripción...",modelValue:o.value,"onUpdate:modelValue":R[3]||(R[3]=k=>o.value=k)},null,8,["modelValue"])]),G("div",n1,[we(Jx,{inputs:{noteTitle:s.value,noteEtiquetas:i.value,noteDescription:o.value,timestamp:c.value,index:n.editIndex,favorita:u.value},selectValue:l.value,onSaveSuccess:m},null,8,["inputs","selectValue"]),we(Qx,{onClose:p,class:"ml-auto"})])])],544)):uh("",!0)}},s1={class:"w-full"},i1={__name:"SearchInput",props:{modelValue:String},emits:["update:modelValue","search"],setup(n,{emit:e}){const t=n,r=e,s=Ie(t.modelValue||""),i=()=>{r("update:modelValue",s.value),r("search",s.value)};return(o,l)=>(_e(),xe("div",s1,[l[1]||(l[1]=G("label",{for:"searchBox",class:"block mb-1 text-[var(--color-black)] dark:text-[var(--color-white)]"}," Buscar notas: ",-1)),wa(G("input",{id:"searchBox",type:"text","onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c),onInput:i,placeholder:"Buscar...",class:"border border-[var(--color-black)] rounded-2xl p-2 text-base w-full bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-black)]"},null,544),[[uu,s.value]])]))}};function o1(n){return os(()=>{const e=n.value.flatMap(t=>t.etiquetas?t.etiquetas.split(","):[]).map(t=>t.trim()).filter(t=>t);return["Todas",...new Set(e)]})}const a1={class:"flex flex-col lg:flex-row items-center justify-center gap-2 pb-2 bg-[var(--color-grey-page)] dark:bg-[var(--color-black)] w-full"},l1={class:"flex flex-col items-center justify-center h-full mb-1 lg:mb-0 lg:mr-6 lg:w-auto w-full"},c1={class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-grey)] mt-1 text-center opacity-70"},u1={class:"flex flex-col md:flex-row items-center gap-4 md:gap-6 md:justify-center overflow-x-auto md:overflow-x-visible px-3 md:px-0 lg:w-auto w-full"},h1={class:"flex flex-row gap-2 md:gap-4 justify-center min-w-0 max-w-[500px] mx-auto"},d1={class:"flex flex-row gap-1 md:gap-4 justify-center items-center min-w-0 max-w-xs w-full md:max-w-[500px] md:mx-auto"},f1=["aria-label"],p1={class:"flex flex-row items-center gap-1 md:mt-6 align-middle"},m1={__name:"Filtros",props:{notes:{type:Array,default:()=>[]},filteredNotesCount:{type:Number,default:0},totalNotesCount:{type:Number,default:0}},emits:["filter","search","order","toggleFavorites"],setup(n,{emit:e}){const t=n,r=e,s=Ie("Todas"),i=Ie("Todas"),o=Ie(""),l=Ie("Más reciente"),c=Ie(!1),u=os(()=>t.notes),d=o1(u),p=()=>{r("filter",{priority:s.value,tag:i.value})},m=()=>{r("search",o.value)},I=k=>{l.value=k,r("order",l.value)},R=()=>{c.value=!c.value,r("toggleFavorites",c.value)};return(k,x)=>(_e(),xe("div",a1,[G("div",l1,[x[5]||(x[5]=G("h2",{class:"text-3xl font-semibold text-[var(--color-black)] dark:text-[var(--color-white)] mt-2 whitespace-nowrap text-center"}," Notas creadas ",-1)),G("span",c1,Et(n.filteredNotesCount)+" de "+Et(n.totalNotesCount)+" notas ",1),x[6]||(x[6]=G("hr",{class:"border-2 border-[var(--color-blue)] dark:border-[var(--color-blue-strong)] w-44 mt-1"},null,-1))]),G("div",u1,[G("div",h1,[we(Ku,{label:"Prioridad",id:"priorityFilter",options:["Todas","Sin Prioridad","Alta","Media","Baja"],modelValue:s.value,"onUpdate:modelValue":x[0]||(x[0]=B=>s.value=B),onChange:p,class:"w-28 xs:w-32 p-2 text-base md:w-44 md:p-5 md:text-base"},null,8,["modelValue"]),we(Ku,{label:"Etiquetas",id:"tagsFilter",options:Pt(d),modelValue:i.value,"onUpdate:modelValue":x[1]||(x[1]=B=>i.value=B),onChange:p,class:"w-28 xs:w-32 p-2 text-base md:w-44 md:p-5 md:text-base"},null,8,["options","modelValue"])]),G("div",d1,[we(i1,{modelValue:o.value,"onUpdate:modelValue":x[2]||(x[2]=B=>o.value=B),onInput:m,class:"mb-6 md:mb-0 w-32 sm:w-36 md:w-60 p-2 text-base md:p-5 md:text-base align-middle"},null,8,["modelValue"]),G("button",{onClick:R,"aria-label":c.value?"Mostrar todas las notas":"Mostrar solo favoritas",class:xt(["p-1 rounded transition flex items-center mr-1 md:mr-3 md:mt-6 align-middle",c.value?" dark:bg-yellow-300":"hover:bg-[var(--color-grey)] dark:hover:bg-[var(--color-semi-black)]"])},[(_e(),xe("svg",{xmlns:"http://www.w3.org/2000/svg",class:xt(["w-7 h-7 md:w-8 md:h-8",c.value?"text-yellow-400":"text-gray-400 hover:text-yellow-400 transition"]),fill:"currentColor",viewBox:"0 0 24 24"},x[7]||(x[7]=[G("path",{d:"M12 17.75l-6.172 3.245 1.179-6.873-5-4.873 6.9-1.002L12 2.25l3.093 6.997 6.9 1.002-5 4.873 1.179 6.873z"},null,-1)]),2))],10,f1),G("div",p1,[x[10]||(x[10]=G("span",{class:"mr-1 text-xs md:text-base text-[var(--color-black)] dark:text-[var(--color-white)] whitespace-nowrap"},"Por fecha:",-1)),G("button",{onClick:x[3]||(x[3]=B=>I("Más reciente")),"aria-label":"Ordenar por más reciente",class:xt(["p-1 rounded transition",l.value==="Más reciente"?"bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]":"hover:bg-[var(--color-grey)] dark:hover:bg-[var(--color-semi-black)]"])},[(_e(),xe("svg",{xmlns:"http://www.w3.org/2000/svg",class:xt(["w-5 h-5",l.value==="Más reciente"?"text-[var(--color-black)] dark:text-[var(--color-white)]":"text-[var(--color-semi-black)] dark:text-[var(--color-grey)]"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},x[8]||(x[8]=[G("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))],2),G("button",{onClick:x[4]||(x[4]=B=>I("Más antiguo")),"aria-label":"Ordenar por más antiguo",class:xt(["p-1 rounded transition",l.value==="Más antiguo"?"bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]":"hover:bg-[var(--color-grey)] dark:hover:bg-[var(--color-semi-black)]"])},[(_e(),xe("svg",{xmlns:"http://www.w3.org/2000/svg",class:xt(["w-5 h-5",l.value==="Más antiguo"?"text-[var(--color-black)] dark:text-[var(--color-white)]":"text-[var(--color-semi-black)] dark:text-[var(--color-grey)]"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},x[9]||(x[9]=[G("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},null,-1)]),2))],2)])])])]))}};function _I(n){if(!n)return"Fecha no disponible";const e=new Date(n);return`${e.toLocaleDateString()} - ${e.toLocaleTimeString()}`}const g1={class:"absolute top-2 right-2 z-20"},_1={class:"flex flex-col flex-grow ml-6 h-full justify-between relative z-10"},y1={class:"text-2xl font-bold text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] mt-0"},v1={class:"mb-3 text-md text-[var(--color-black)] dark:text-[var(--color-black)] mt-2 whitespace-pre-line break-words break-all overflow-y-auto max-h-24"},I1={class:"flex flex-col mt-auto"},E1={class:"text-sm text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"},T1={class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"},w1={class:"absolute bottom-3 right-3 flex gap-2 z-20"},b1={__name:"NoteCard",props:{note:Object},emits:["delete","edit","toggleFavorite","showDetail"],setup(n,{emit:e}){const t=n,r=e,s=os(()=>{switch(t.note.priority){case"Alta":return"bg-[var(--color-red)]";case"Media":return"bg-[var(--color-yellow)]";case"Baja":return"bg-[var(--color-blue-medium)]";default:return"bg-[var(--color-semi-black)]"}});function i(){r("showDetail",t.note)}function o(){r("toggleFavorite",t.note)}return(l,c)=>(_e(),xe("div",{class:"flex flex-col p-4 rounded-lg shadow-md w-[95vw] max-w-sm md:max-w-md min-h-[180px] md:min-h-[200px] relative mx-auto mb-8 bg-[var(--color-white)] dark:bg-[var(--color-grey)] cursor-pointer",onClick:i},[G("div",{class:xt([s.value,"absolute left-0 top-0 bottom-0 w-4 rounded-l-lg h-full"])},null,2),G("div",g1,[G("button",{onClick:an(o,["stop"]),class:"p-1 rounded-full focus:outline-none"},[(_e(),xe("svg",{xmlns:"http://www.w3.org/2000/svg",class:xt(["w-8 h-8",n.note.favorita?"text-yellow-400":"text-gray-400 hover:text-yellow-400 transition"]),fill:"currentColor",viewBox:"0 0 24 24"},c[2]||(c[2]=[G("path",{d:"M12 17.75l-6.172 3.245 1.179-6.873-5-4.873 6.9-1.002L12 2.25l3.093 6.997 6.9 1.002-5 4.873 1.179 6.873z"},null,-1)]),2))])]),G("div",_1,[G("h3",y1,Et(n.note.title),1),G("p",v1,Et(n.note.description),1),G("div",I1,[G("p",E1,Et(n.note.etiquetas),1),G("p",T1,Et(Pt(_I)(n.note.timestamp)),1)])]),G("div",w1,[G("button",{onClick:c[0]||(c[0]=an(u=>l.$emit("edit"),["stop"])),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-blue-strong)] dark:bg-[var(--color-blue-strong)] text-[var(--color-white)]"}," Editar "),G("button",{onClick:c[1]||(c[1]=an(u=>l.$emit("delete"),["stop"])),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-red)] text-[var(--color-white)]"}," Eliminar ")])]))}},A1={key:0,class:"mt-10 mb-10 text-center text-[var(--color-semi-black)] dark:text-[var(--color-grey)] text-lg"},S1={__name:"NotesList",props:{filteredNotes:{type:Array,default:()=>[]}},setup(n){return(e,t)=>n.filteredNotes.length===0?(_e(),xe("div",A1,' ¡No hay notas aún! Pulsa el botón "+" para agregar tu primera nota. ')):(_e(),qr(cw,{key:1,name:"note-fade",tag:"div",class:"grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 mt-0 w-full max-w-6xl mx-auto"},{default:bg(()=>[(_e(!0),xe(kt,null,kg(n.filteredNotes,r=>(_e(),qr(b1,{key:r.id,note:r,onShowDetail:s=>e.$emit("showDetail",r),onDelete:s=>e.$emit("delete",r.id),onEdit:s=>e.$emit("edit",r.id),onToggleFavorite:s=>e.$emit("toggleFavorite",r.id)},null,8,["note","onShowDetail","onDelete","onEdit","onToggleFavorite"]))),128))]),_:1}))}},R1={class:"flex flex-col flex-grow ml-6 h-full justify-between relative z-10"},P1={class:"text-2xl font-bold text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] mt-0"},C1={class:"mb-3 text-md text-[var(--color-black)] dark:text-[var(--color-black)] mt-2 whitespace-pre-line break-words break-all overflow-y-auto max-h-32 md:max-h-56 pr-2",style:{"scrollbar-gutter":"stable"}},x1={class:"flex flex-col mt-auto"},k1={class:"text-sm text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"},V1={class:"text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"},D1={class:"absolute bottom-3 right-3 flex gap-2 z-20"},N1={__name:"NoteDetailModal",props:{note:Object},emits:["close","edit","delete"],setup(n,{emit:e}){const t=n,r=e,s=Ie(null),i=()=>r("close"),o=d=>{d.key==="Escape"&&i()};ri(()=>{window.addEventListener("keydown",o)}),oh(()=>{window.removeEventListener("keydown",o)});const l=()=>{r("edit",t.note),r("close")},c=()=>{r("delete",t.note),r("close")},u=os(()=>{switch(t.note.priority){case"Alta":return"bg-[var(--color-red)]";case"Media":return"bg-[var(--color-yellow)]";case"Baja":return"bg-[var(--color-blue-medium)]";default:return"bg-[var(--color-semi-black)]"}});return(d,p)=>(_e(),xe("div",{class:"fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50",onMousedown:an(i,["self"])},[G("div",{class:"flex flex-col p-4 rounded-lg shadow-md w-[98vw] max-w-sm md:max-w-md min-h-[180px] md:min-h-[200px] relative mx-auto mb-8 bg-[var(--color-white)] dark:bg-[var(--color-grey)] overflow-hidden",ref_key:"modalRef",ref:s},[G("div",{class:xt([u.value,"absolute left-0 top-0 bottom-0 w-4 rounded-l-lg h-full"])},null,2),G("div",R1,[G("button",{onClick:i,class:"absolute top-2 right-2 text-xl font-bold z-20 text-[var(--color-black)] dark:text-[var(--color-white)]"},"×"),G("h3",P1,Et(n.note.title),1),G("p",C1,Et(n.note.description),1),G("div",x1,[G("p",k1,Et(n.note.etiquetas),1),G("p",V1,Et(Pt(_I)(n.note.timestamp)),1)])]),G("div",D1,[G("button",{onClick:an(l,["stop"]),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-blue-strong)] dark:bg-[var(--color-blue-strong)] text-[var(--color-white)]"}," Editar "),G("button",{onClick:an(c,["stop"]),class:"px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-red)] text-[var(--color-white)]"}," Eliminar ")])],512)],32))}};function O1(n,e,t,r,s){return os(()=>{let i=n.value.filter(o=>{var p,m,I;const l=o.priority||"Sin Prioridad",c=e.value==="Todas"||l===e.value,u=t.value==="Todas"||o.etiquetas&&o.etiquetas.split(",").map(R=>R.trim().toLowerCase()).includes(t.value.trim().toLowerCase()),d=!r.value||((p=o.title)==null?void 0:p.toLowerCase().includes(r.value.toLowerCase()))||((m=o.description)==null?void 0:m.toLowerCase().includes(r.value.toLowerCase()))||((I=o.etiquetas)==null?void 0:I.toLowerCase().includes(r.value.toLowerCase()));return c&&u&&d});return s&&s.value&&(i=i.slice().sort((o,l)=>s.value==="Más reciente"?new Date(l.timestamp)-new Date(o.timestamp):new Date(o.timestamp)-new Date(l.timestamp))),i})}const M1={class:"flex flex-col items-center pb-40 md:pb-0 w-full max-w-full overflow-x-hidden bg-[var(--color-grey-page)] dark:bg-[var(--color-black)]"},L1={__name:"NotesBody",setup(n){const{notes:e,loadNotes:t,addNote:r,updateNote:s,deleteNote:i}=gd(),o=Ie(!1),l=Ie({}),c=Ie(null),u=Ie("Todas"),d=Ie("Todas"),p=Ie(""),m=Ie("Más reciente"),I=Ie(!1),R=O1(e,u,d,p,m),k=os(()=>I.value?R.value.filter(_=>_.favorita):R.value);function x({priority:_,tag:oe}){u.value=_,d.value=oe}function B(_){p.value=_}function q(_){m.value=_}function j(_){I.value=_}function $(_=null,oe=null){_?(l.value={..._},c.value=_.id):(l.value={title:"",etiquetas:"",description:"",priority:"Sin Prioridad",timestamp:"",favorita:!1},c.value=null),o.value=!0}function Z(){o.value=!1}function ee({note:_,index:oe}){oe!=null?(s(_,oe),Z()):r(_).then(()=>Z()).catch(()=>{})}function b(_){i(_)}function y(_){const oe=e.value.find(Oe=>Oe.id===_);oe&&$(oe,_)}function v(_){const oe=e.value.find(Oe=>Oe.id===_);if(oe){const Oe={...oe,favorita:!oe.favorita};s(Oe,_)}}const w=Ie(!1),A=Ie(null);function T(_){A.value=_,w.value=!0}return ri(t),(_,oe)=>(_e(),xe("div",M1,[we(Bx),G("button",{onClick:oe[0]||(oe[0]=Oe=>$(null,null)),class:"fixed bottom-24 right-6 md:bottom-24 md:right-16 rounded-full w-12 h-12 md:w-16 md:h-16 bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)] text-[var(--color-black)] dark:text-[var(--color-white)] flex items-center justify-center gap-2 shadow-lg z-50"},[(_e(),xe("svg",{class:xt(["w-6 h-6 md:w-7 md:h-7","text-[var(--color-black)] dark:text-[var(--color-white)]"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},oe[4]||(oe[4]=[G("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M12 5v14m7-7H5"},null,-1)])))]),we(r1,{isModalOpen:o.value,noteData:l.value,editIndex:c.value,onClose:Z,onSaveSuccess:ee},null,8,["isModalOpen","noteData","editIndex"]),we(m1,{notes:Pt(e),filteredNotesCount:k.value.length,totalNotesCount:Pt(e).length,onFilter:x,onSearch:B,onOrder:q,onToggleFavorites:j},null,8,["notes","filteredNotesCount","totalNotesCount"]),we(S1,{filteredNotes:k.value,onShowDetail:T,onDelete:b,onEdit:y,onToggleFavorite:v},null,8,["filteredNotes"]),w.value?(_e(),qr(N1,{key:0,note:A.value,onClose:oe[1]||(oe[1]=Oe=>w.value=!1),onEdit:oe[2]||(oe[2]=Oe=>y(A.value.id)),onDelete:oe[3]||(oe[3]=Oe=>b(A.value.id))},null,8,["note"])):uh("",!0)]))}},F1={class:"min-h-screen flex flex-col"},U1={class:"flex-1 flex flex-col"},B1={__name:"App",setup(n){return(e,t)=>(_e(),xe("div",F1,[we(Sx),G("main",U1,[we(L1)]),we(kx)]))}};Tw(B1).mount("#app");
