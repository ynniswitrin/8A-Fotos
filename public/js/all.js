<<<<<<< HEAD
if(!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t="length"in e&&e.length,n=Z.type(e);return"function"===n||Z.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function i(e,t,n){if(Z.isFunction(t))return Z.grep(e,function(e,i){return!!t.call(e,i,e)!==n});if(t.nodeType)return Z.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(ae.test(t))return Z.filter(t,e,n);t=Z.filter(t,e)}return Z.grep(e,function(e){return Q.call(t,e)>=0!==n})}function o(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function r(e){var t=fe[e]={};return Z.each(e.match(he)||[],function(e,n){t[n]=!0}),t}function s(){J.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1),Z.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Z.expando+a.uid++}function l(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(we,"-$1").toLowerCase(),n=e.getAttribute(i),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:be.test(n)?Z.parseJSON(n):n}catch(o){}ye.set(e,t,n)}else n=void 0;return n}function u(){return!0}function c(){return!1}function p(){try{return J.activeElement}catch(e){}}function d(e,t){return Z.nodeName(e,"table")&&Z.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function h(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function f(e){var t=Re.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n=0,i=e.length;i>n;n++)ve.set(e[n],"globalEval",!t||ve.get(t[n],"globalEval"))}function g(e,t){var n,i,o,r,s,a,l,u;if(1===t.nodeType){if(ve.hasData(e)&&(r=ve.access(e),s=ve.set(t,r),u=r.events)){delete s.handle,s.events={};for(o in u)for(n=0,i=u[o].length;i>n;n++)Z.event.add(t,o,u[o][n])}ye.hasData(e)&&(a=ye.access(e),l=Z.extend({},a),ye.set(t,l))}}function v(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&Z.nodeName(e,t)?Z.merge([e],n):n}function y(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Ee.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function b(t,n){var i,o=Z(n.createElement(t)).appendTo(n.body),r=e.getDefaultComputedStyle&&(i=e.getDefaultComputedStyle(o[0]))?i.display:Z.css(o[0],"display");return o.detach(),r}function w(e){var t=J,n=ze[e];return n||(n=b(e,t),"none"!==n&&n||(qe=(qe||Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=qe[0].contentDocument,t.write(),t.close(),n=b(e,t),qe.detach()),ze[e]=n),n}function x(e,t,n){var i,o,r,s,a=e.style;return n=n||Ue(e),n&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||Z.contains(e.ownerDocument,e)||(s=Z.style(e,t)),_e.test(s)&&Me.test(t)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?s+"":s}function T(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function C(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),i=t,o=Ge.length;o--;)if(t=Ge[o]+n,t in e)return t;return i}function E(e,t,n){var i=Be.exec(t);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function k(e,t,n,i,o){for(var r=n===(i?"border":"content")?4:"width"===t?1:0,s=0;4>r;r+=2)"margin"===n&&(s+=Z.css(e,n+Te[r],!0,o)),i?("content"===n&&(s-=Z.css(e,"padding"+Te[r],!0,o)),"margin"!==n&&(s-=Z.css(e,"border"+Te[r]+"Width",!0,o))):(s+=Z.css(e,"padding"+Te[r],!0,o),"padding"!==n&&(s+=Z.css(e,"border"+Te[r]+"Width",!0,o)));return s}function S(e,t,n){var i=!0,o="width"===t?e.offsetWidth:e.offsetHeight,r=Ue(e),s="border-box"===Z.css(e,"boxSizing",!1,r);if(0>=o||null==o){if(o=x(e,t,r),(0>o||null==o)&&(o=e.style[t]),_e.test(o))return o;i=s&&(Y.boxSizingReliable()||o===e.style[t]),o=parseFloat(o)||0}return o+k(e,t,n||(s?"border":"content"),i,r)+"px"}function N(e,t){for(var n,i,o,r=[],s=0,a=e.length;a>s;s++)i=e[s],i.style&&(r[s]=ve.get(i,"olddisplay"),n=i.style.display,t?(r[s]||"none"!==n||(i.style.display=""),""===i.style.display&&Ce(i)&&(r[s]=ve.access(i,"olddisplay",w(i.nodeName)))):(o=Ce(i),"none"===n&&o||ve.set(i,"olddisplay",o?n:Z.css(i,"display"))));for(s=0;a>s;s++)i=e[s],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?r[s]||"":"none"));return e}function D(e,t,n,i,o){return new D.prototype.init(e,t,n,i,o)}function F(){return setTimeout(function(){Ye=void 0}),Ye=Z.now()}function A(e,t){var n,i=0,o={height:e};for(t=t?1:0;4>i;i+=2-t)n=Te[i],o["margin"+n]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function $(e,t,n){for(var i,o=(nt[t]||[]).concat(nt["*"]),r=0,s=o.length;s>r;r++)if(i=o[r].call(n,t,e))return i}function L(e,t,n){var i,o,r,s,a,l,u,c,p=this,d={},h=e.style,f=e.nodeType&&Ce(e),m=ve.get(e,"fxshow");n.queue||(a=Z._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,Z.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],u=Z.css(e,"display"),c="none"===u?ve.get(e,"olddisplay")||w(e.nodeName):u,"inline"===c&&"none"===Z.css(e,"float")&&(h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}));for(i in t)if(o=t[i],Ke.exec(o)){if(delete t[i],r=r||"toggle"===o,o===(f?"hide":"show")){if("show"!==o||!m||void 0===m[i])continue;f=!0}d[i]=m&&m[i]||Z.style(e,i)}else u=void 0;if(Z.isEmptyObject(d))"inline"===("none"===u?w(e.nodeName):u)&&(h.display=u);else{m?"hidden"in m&&(f=m.hidden):m=ve.access(e,"fxshow",{}),r&&(m.hidden=!f),f?Z(e).show():p.done(function(){Z(e).hide()}),p.done(function(){var t;ve.remove(e,"fxshow");for(t in d)Z.style(e,t,d[t])});for(i in d)s=$(f?m[i]:0,i,p),i in m||(m[i]=s.start,f&&(s.end=s.start,s.start="width"===i||"height"===i?1:0))}}function I(e,t){var n,i,o,r,s;for(n in e)if(i=Z.camelCase(n),o=t[i],r=e[n],Z.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),s=Z.cssHooks[i],s&&"expand"in s){r=s.expand(r),delete e[i];for(n in r)n in e||(e[n]=r[n],t[n]=o)}else t[i]=o}function O(e,t,n){var i,o,r=0,s=tt.length,a=Z.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var t=Ye||F(),n=Math.max(0,u.startTime+u.duration-t),i=n/u.duration||0,r=1-i,s=0,l=u.tweens.length;l>s;s++)u.tweens[s].run(r);return a.notifyWith(e,[u,r,n]),1>r&&l?n:(a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:Z.extend({},t),opts:Z.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Ye||F(),duration:n.duration,tweens:[],createTween:function(t,n){var i=Z.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(i),i},stop:function(t){var n=0,i=t?u.tweens.length:0;if(o)return this;for(o=!0;i>n;n++)u.tweens[n].run(1);return t?a.resolveWith(e,[u,t]):a.rejectWith(e,[u,t]),this}}),c=u.props;for(I(c,u.opts.specialEasing);s>r;r++)if(i=tt[r].call(u,e,c,u.opts))return i;return Z.map(c,$,u),Z.isFunction(u.opts.start)&&u.opts.start.call(e,u),Z.fx.timer(Z.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function j(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,o=0,r=t.toLowerCase().match(he)||[];if(Z.isFunction(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function R(e,t,n,i){function o(a){var l;return r[a]=!0,Z.each(e[a]||[],function(e,a){var u=a(t,n,i);return"string"!=typeof u||s||r[u]?s?!(l=u):void 0:(t.dataTypes.unshift(u),o(u),!1)}),l}var r={},s=e===bt;return o(t.dataTypes[0])||!r["*"]&&o("*")}function P(e,t){var n,i,o=Z.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n]);return i&&Z.extend(!0,e,i),e}function H(e,t,n){for(var i,o,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o;break}s||(s=o)}r=r||s}return r?(r!==l[0]&&l.unshift(r),n[r]):void 0}function q(e,t,n,i){var o,r,s,a,l,u={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)u[s.toLowerCase()]=e.converters[s];for(r=c.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=c.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(s=u[l+" "+r]||u["* "+r],!s)for(o in u)if(a=o.split(" "),a[1]===r&&(s=u[l+" "+a[0]]||u["* "+a[0]])){s===!0?s=u[o]:u[o]!==!0&&(r=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}function z(e,t,n,i){var o;if(Z.isArray(t))Z.each(t,function(t,o){n||Et.test(e)?i(e,o):z(e+"["+("object"==typeof o?t:"")+"]",o,n,i)});else if(n||"object"!==Z.type(t))i(e,t);else for(o in t)z(e+"["+o+"]",t[o],n,i)}function M(e){return Z.isWindow(e)?e:9===e.nodeType&&e.defaultView}var _=[],U=_.slice,W=_.concat,B=_.push,Q=_.indexOf,X={},V=X.toString,G=X.hasOwnProperty,Y={},J=e.document,K="2.1.4",Z=function(e,t){return new Z.fn.init(e,t)},ee=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,te=/^-ms-/,ne=/-([\da-z])/gi,ie=function(e,t){return t.toUpperCase()};Z.fn=Z.prototype={jquery:K,constructor:Z,selector:"",length:0,toArray:function(){return U.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:U.call(this)},pushStack:function(e){var t=Z.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return Z.each(this,e,t)},map:function(e){return this.pushStack(Z.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(U.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:B,sort:_.sort,splice:_.splice},Z.extend=Z.fn.extend=function(){var e,t,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||Z.isFunction(s)||(s={}),a===l&&(s=this,a--);l>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],i=e[t],s!==i&&(u&&i&&(Z.isPlainObject(i)||(o=Z.isArray(i)))?(o?(o=!1,r=n&&Z.isArray(n)?n:[]):r=n&&Z.isPlainObject(n)?n:{},s[t]=Z.extend(u,r,i)):void 0!==i&&(s[t]=i));return s},Z.extend({expando:"jQuery"+(K+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===Z.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!Z.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"!==Z.type(e)||e.nodeType||Z.isWindow(e)?!1:e.constructor&&!G.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?X[V.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=Z.trim(e),e&&(1===e.indexOf("use strict")?(t=J.createElement("script"),t.text=e,J.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(te,"ms-").replace(ne,ie)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,i){var o,r=0,s=e.length,a=n(e);if(i){if(a)for(;s>r&&(o=t.apply(e[r],i),o!==!1);r++);else for(r in e)if(o=t.apply(e[r],i),o===!1)break}else if(a)for(;s>r&&(o=t.call(e[r],r,e[r]),o!==!1);r++);else for(r in e)if(o=t.call(e[r],r,e[r]),o===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(ee,"")},makeArray:function(e,t){var i=t||[];return null!=e&&(n(Object(e))?Z.merge(i,"string"==typeof e?[e]:e):B.call(i,e)),i},inArray:function(e,t,n){return null==t?-1:Q.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,o=e.length;n>i;i++)e[o++]=t[i];return e.length=o,e},grep:function(e,t,n){for(var i,o=[],r=0,s=e.length,a=!n;s>r;r++)i=!t(e[r],r),i!==a&&o.push(e[r]);return o},map:function(e,t,i){var o,r=0,s=e.length,a=n(e),l=[];if(a)for(;s>r;r++)o=t(e[r],r,i),null!=o&&l.push(o);else for(r in e)o=t(e[r],r,i),null!=o&&l.push(o);return W.apply([],l)},guid:1,proxy:function(e,t){var n,i,o;return"string"==typeof t&&(n=e[t],t=e,e=n),Z.isFunction(e)?(i=U.call(arguments,2),o=function(){return e.apply(t||this,i.concat(U.call(arguments)))},o.guid=e.guid=e.guid||Z.guid++,o):void 0},now:Date.now,support:Y}),Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){X["[object "+t+"]"]=t.toLowerCase()});var oe=function(e){function t(e,t,n,i){var o,r,s,a,l,u,p,h,f,m;if((t?t.ownerDocument||t:z)!==L&&$(t),t=t||L,n=n||[],a=t.nodeType,"string"!=typeof e||!e||1!==a&&9!==a&&11!==a)return n;if(!i&&O){if(11!==a&&(o=ye.exec(e)))if(s=o[1]){if(9===a){if(r=t.getElementById(s),!r||!r.parentNode)return n;if(r.id===s)return n.push(r),n}else if(t.ownerDocument&&(r=t.ownerDocument.getElementById(s))&&H(t,r)&&r.id===s)return n.push(r),n}else{if(o[2])return K.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&x.getElementsByClassName)return K.apply(n,t.getElementsByClassName(s)),n}if(x.qsa&&(!j||!j.test(e))){if(h=p=q,f=t,m=1!==a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(u=k(e),(p=t.getAttribute("id"))?h=p.replace(we,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",l=u.length;l--;)u[l]=h+d(u[l]);f=be.test(e)&&c(t.parentNode)||t,m=u.join(",")}if(m)try{return K.apply(n,f.querySelectorAll(m)),n}catch(g){}finally{p||t.removeAttribute("id")}}}return N(e.replace(le,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[q]=!0,e}function o(e){var t=L.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function r(e,t){for(var n=e.split("|"),i=e.length;i--;)T.attrHandle[n[i]]=t}function s(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||X)-(~e.sourceIndex||X);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function u(e){return i(function(t){return t=+t,i(function(n,i){for(var o,r=e([],n.length,t),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function p(){}function d(e){for(var t=0,n=e.length,i="";n>t;t++)i+=e[t].value;return i}function h(e,t,n){var i=t.dir,o=n&&"parentNode"===i,r=_++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var a,l,u=[M,r];if(s){for(;t=t[i];)if((1===t.nodeType||o)&&e(t,n,s))return!0}else for(;t=t[i];)if(1===t.nodeType||o){if(l=t[q]||(t[q]={}),(a=l[i])&&a[0]===M&&a[1]===r)return u[2]=a[2];if(l[i]=u,u[2]=e(t,n,s))return!0}}}function f(e){return e.length>1?function(t,n,i){for(var o=e.length;o--;)if(!e[o](t,n,i))return!1;return!0}:e[0]}function m(e,n,i){for(var o=0,r=n.length;r>o;o++)t(e,n[o],i);return i}function g(e,t,n,i,o){for(var r,s=[],a=0,l=e.length,u=null!=t;l>a;a++)(r=e[a])&&(!n||n(r,i,o))&&(s.push(r),u&&t.push(a));return s}function v(e,t,n,o,r,s){return o&&!o[q]&&(o=v(o)),r&&!r[q]&&(r=v(r,s)),i(function(i,s,a,l){var u,c,p,d=[],h=[],f=s.length,v=i||m(t||"*",a.nodeType?[a]:a,[]),y=!e||!i&&t?v:g(v,d,e,a,l),b=n?r||(i?e:f||o)?[]:s:y;if(n&&n(y,b,a,l),o)for(u=g(b,h),o(u,[],a,l),c=u.length;c--;)(p=u[c])&&(b[h[c]]=!(y[h[c]]=p));if(i){if(r||e){if(r){for(u=[],c=b.length;c--;)(p=b[c])&&u.push(y[c]=p);r(null,b=[],u,l)}for(c=b.length;c--;)(p=b[c])&&(u=r?ee(i,p):d[c])>-1&&(i[u]=!(s[u]=p))}}else b=g(b===s?b.splice(f,b.length):b),r?r(null,s,b,l):K.apply(s,b)})}function y(e){for(var t,n,i,o=e.length,r=T.relative[e[0].type],s=r||T.relative[" "],a=r?1:0,l=h(function(e){return e===t},s,!0),u=h(function(e){return ee(t,e)>-1},s,!0),c=[function(e,n,i){var o=!r&&(i||n!==D)||((t=n).nodeType?l(e,n,i):u(e,n,i));return t=null,o}];o>a;a++)if(n=T.relative[e[a].type])c=[h(f(c),n)];else{if(n=T.filter[e[a].type].apply(null,e[a].matches),n[q]){for(i=++a;o>i&&!T.relative[e[i].type];i++);return v(a>1&&f(c),a>1&&d(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(le,"$1"),n,i>a&&y(e.slice(a,i)),o>i&&y(e=e.slice(i)),o>i&&d(e))}c.push(n)}return f(c)}function b(e,n){var o=n.length>0,r=e.length>0,s=function(i,s,a,l,u){var c,p,d,h=0,f="0",m=i&&[],v=[],y=D,b=i||r&&T.find.TAG("*",u),w=M+=null==y?1:Math.random()||.1,x=b.length;for(u&&(D=s!==L&&s);f!==x&&null!=(c=b[f]);f++){if(r&&c){for(p=0;d=e[p++];)if(d(c,s,a)){l.push(c);break}u&&(M=w)}o&&((c=!d&&c)&&h--,i&&m.push(c))}if(h+=f,o&&f!==h){for(p=0;d=n[p++];)d(m,v,s,a);if(i){if(h>0)for(;f--;)m[f]||v[f]||(v[f]=Y.call(l));v=g(v)}K.apply(l,v),u&&!i&&v.length>0&&h+n.length>1&&t.uniqueSort(l)}return u&&(M=w,D=y),m};return o?i(s):s}var w,x,T,C,E,k,S,N,D,F,A,$,L,I,O,j,R,P,H,q="sizzle"+1*new Date,z=e.document,M=0,_=0,U=n(),W=n(),B=n(),Q=function(e,t){return e===t&&(A=!0),0},X=1<<31,V={}.hasOwnProperty,G=[],Y=G.pop,J=G.push,K=G.push,Z=G.slice,ee=function(e,t){for(var n=0,i=e.length;i>n;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe=ie.replace("w","w#"),re="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+oe+"))|)"+ne+"*\\]",se=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+re+")*)|.*)\\)|)",ae=new RegExp(ne+"+","g"),le=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),pe=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),de=new RegExp(se),he=new RegExp("^"+oe+"$"),fe={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+re),PSEUDO:new RegExp("^"+se),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},me=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,be=/[+~]/,we=/'|\\/g,xe=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Te=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},Ce=function(){$()};try{K.apply(G=Z.call(z.childNodes),z.childNodes),G[z.childNodes.length].nodeType}catch(Ee){K={apply:G.length?function(e,t){J.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}x=t.support={},E=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},$=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:z;return i!==L&&9===i.nodeType&&i.documentElement?(L=i,I=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),O=!E(i),x.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=o(function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=ve.test(i.getElementsByClassName),x.getById=o(function(e){return I.appendChild(e).id=q,!i.getElementsByName||!i.getElementsByName(q).length}),x.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&O){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(xe,Te);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(xe,Te);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=x.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):x.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,r=t.getElementsByTagName(e);if("*"===e){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},T.find.CLASS=x.getElementsByClassName&&function(e,t){return O?t.getElementsByClassName(e):void 0},R=[],j=[],(x.qsa=ve.test(i.querySelectorAll))&&(o(function(e){I.appendChild(e).innerHTML="<a id='"+q+"'></a><select id='"+q+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&j.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||j.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+q+"-]").length||j.push("~="),e.querySelectorAll(":checked").length||j.push(":checked"),e.querySelectorAll("a#"+q+"+*").length||j.push(".#.+[+~]")}),o(function(e){var t=i.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&j.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||j.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),j.push(",.*:")})),(x.matchesSelector=ve.test(P=I.matches||I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&o(function(e){x.disconnectedMatch=P.call(e,"div"),P.call(e,"[s!='']:x"),R.push("!=",se)}),j=j.length&&new RegExp(j.join("|")),R=R.length&&new RegExp(R.join("|")),t=ve.test(I.compareDocumentPosition),H=t||ve.test(I.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},Q=t?function(e,t){if(e===t)return A=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!x.sortDetached&&t.compareDocumentPosition(e)===n?e===i||e.ownerDocument===z&&H(z,e)?-1:t===i||t.ownerDocument===z&&H(z,t)?1:F?ee(F,e)-ee(F,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0;var n,o=0,r=e.parentNode,a=t.parentNode,l=[e],u=[t];if(!r||!a)return e===i?-1:t===i?1:r?-1:a?1:F?ee(F,e)-ee(F,t):0;if(r===a)return s(e,t);for(n=e;n=n.parentNode;)l.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;l[o]===u[o];)o++;return o?s(l[o],u[o]):l[o]===z?-1:u[o]===z?1:0},i):L},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==L&&$(e),n=n.replace(pe,"='$1']"),!(!x.matchesSelector||!O||R&&R.test(n)||j&&j.test(n)))try{var i=P.call(e,n);if(i||x.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(o){}return t(n,L,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==L&&$(e),H(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==L&&$(e);var n=T.attrHandle[t.toLowerCase()],i=n&&V.call(T.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==i?i:x.attributes||!O?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,o=0;if(A=!x.detectDuplicates,F=!x.sortStable&&e.slice(0),e.sort(Q),A){for(;t=e[o++];)t===e[o]&&(i=n.push(o));for(;i--;)e.splice(n[i],1)}return F=null,e},C=t.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:i,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xe,Te),e[3]=(e[3]||e[4]||e[5]||"").replace(xe,Te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=k(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xe,Te).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=U[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&U(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(o){var r=t.attr(o,e);return null==r?"!="===n:n?(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&r.indexOf(i)>-1:"$="===n?i&&r.slice(-i.length)===i:"~="===n?(" "+r.replace(ae," ")+" ").indexOf(i)>-1:"|="===n?r===i||r.slice(0,i.length+1)===i+"-":!1):!0}},CHILD:function(e,t,n,i,o){var r="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===o?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,d,h,f,m=r!==s?"nextSibling":"previousSibling",g=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a;if(g){if(r){for(;m;){for(p=t;p=p[m];)if(a?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;f=m="only"===e&&!f&&"nextSibling"}return!0}if(f=[s?g.firstChild:g.lastChild],s&&y){for(c=g[q]||(g[q]={}),u=c[e]||[],h=u[0]===M&&u[1],d=u[0]===M&&u[2],p=h&&g.childNodes[h];p=++h&&p&&p[m]||(d=h=0)||f.pop();)if(1===p.nodeType&&++d&&p===t){c[e]=[M,h,d];break}}else if(y&&(u=(t[q]||(t[q]={}))[e])&&u[0]===M)d=u[1];else for(;(p=++h&&p&&p[m]||(d=h=0)||f.pop())&&((a?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++d||(y&&((p[q]||(p[q]={}))[e]=[M,d]),p!==t)););return d-=o,d===i||d%i===0&&d/i>=0}}},PSEUDO:function(e,n){var o,r=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return r[q]?r(n):r.length>1?(o=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,o=r(e,n),s=o.length;s--;)i=ee(e,o[s]),e[i]=!(t[i]=o[s])}):function(e){return r(e,0,o)}):r}},pseudos:{not:i(function(e){var t=[],n=[],o=S(e.replace(le,"$1"));return o[q]?i(function(e,t,n,i){for(var r,s=o(e,null,i,[]),a=e.length;a--;)(r=s[a])&&(e[a]=!(t[a]=r))}):function(e,i,r){return t[0]=e,o(t,null,r,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(xe,Te),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:i(function(e){return he.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xe,Te).toLowerCase(),function(t){var n;do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===I},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return me.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[0>n?n+t:n]}),even:u(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var i=0>n?n+t:n;--i>=0;)e.push(i);return e}),gt:u(function(e,t,n){for(var i=0>n?n+t:n;++i<t;)e.push(i);return e})}},T.pseudos.nth=T.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[w]=a(w);for(w in{submit:!0,reset:!0})T.pseudos[w]=l(w);return p.prototype=T.filters=T.pseudos,T.setFilters=new p,k=t.tokenize=function(e,n){var i,o,r,s,a,l,u,c=W[e+" "];if(c)return n?0:c.slice(0);for(a=e,l=[],u=T.preFilter;a;){(!i||(o=ue.exec(a)))&&(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),i=!1,(o=ce.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(le," ")}),a=a.slice(i.length));for(s in T.filter)!(o=fe[s].exec(a))||u[s]&&!(o=u[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),a=a.slice(i.length));if(!i)break}return n?a.length:a?t.error(e):W(e,l).slice(0)},S=t.compile=function(e,t){var n,i=[],o=[],r=B[e+" "];if(!r){for(t||(t=k(e)),n=t.length;n--;)r=y(t[n]),r[q]?i.push(r):o.push(r);r=B(e,b(o,i)),r.selector=e}return r},N=t.select=function(e,t,n,i){var o,r,s,a,l,u="function"==typeof e&&e,p=!i&&k(e=u.selector||e);if(n=n||[],1===p.length){if(r=p[0]=p[0].slice(0),r.length>2&&"ID"===(s=r[0]).type&&x.getById&&9===t.nodeType&&O&&T.relative[r[1].type]){if(t=(T.find.ID(s.matches[0].replace(xe,Te),t)||[])[0],!t)return n;u&&(t=t.parentNode),e=e.slice(r.shift().value.length)}for(o=fe.needsContext.test(e)?0:r.length;o--&&(s=r[o],!T.relative[a=s.type]);)if((l=T.find[a])&&(i=l(s.matches[0].replace(xe,Te),be.test(r[0].type)&&c(t.parentNode)||t))){if(r.splice(o,1),e=i.length&&d(r),!e)return K.apply(n,i),n;break}}return(u||S(e,p))(i,t,!O,n,be.test(e)&&c(t.parentNode)||t),n},x.sortStable=q.split("").sort(Q).join("")===q,x.detectDuplicates=!!A,$(),x.sortDetached=o(function(e){return 1&e.compareDocumentPosition(L.createElement("div"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||r("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),x.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||r("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||r(te,function(e,t,n){var i;return n?void 0:e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(e);Z.find=oe,Z.expr=oe.selectors,Z.expr[":"]=Z.expr.pseudos,Z.unique=oe.uniqueSort,Z.text=oe.getText,Z.isXMLDoc=oe.isXML,Z.contains=oe.contains;var re=Z.expr.match.needsContext,se=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ae=/^.[^:#\[\.,]*$/;Z.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?Z.find.matchesSelector(i,e)?[i]:[]:Z.find.matches(e,Z.grep(t,function(e){return 1===e.nodeType}))},Z.fn.extend({find:function(e){var t,n=this.length,i=[],o=this;
if("string"!=typeof e)return this.pushStack(Z(e).filter(function(){for(t=0;n>t;t++)if(Z.contains(o[t],this))return!0}));for(t=0;n>t;t++)Z.find(e,o[t],i);return i=this.pushStack(n>1?Z.unique(i):i),i.selector=this.selector?this.selector+" "+e:e,i},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&re.test(e)?Z(e):e||[],!1).length}});var le,ue=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ce=Z.fn.init=function(e,t){var n,i;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ue.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||le).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof Z?t[0]:t,Z.merge(this,Z.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:J,!0)),se.test(n[1])&&Z.isPlainObject(t))for(n in t)Z.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return i=J.getElementById(n[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=J,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):Z.isFunction(e)?"undefined"!=typeof le.ready?le.ready(e):e(Z):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),Z.makeArray(e,this))};ce.prototype=Z.fn,le=Z(J);var pe=/^(?:parents|prev(?:Until|All))/,de={children:!0,contents:!0,next:!0,prev:!0};Z.extend({dir:function(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&Z(e).is(n))break;i.push(e)}return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),Z.fn.extend({has:function(e){var t=Z(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(Z.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,i=0,o=this.length,r=[],s=re.test(e)||"string"!=typeof e?Z(e,t||this.context):0;o>i;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&Z.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(r.length>1?Z.unique(r):r)},index:function(e){return e?"string"==typeof e?Q.call(Z(e),this[0]):Q.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Z.unique(Z.merge(this.get(),Z(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Z.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Z.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Z.dir(e,"parentNode",n)},next:function(e){return o(e,"nextSibling")},prev:function(e){return o(e,"previousSibling")},nextAll:function(e){return Z.dir(e,"nextSibling")},prevAll:function(e){return Z.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Z.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Z.dir(e,"previousSibling",n)},siblings:function(e){return Z.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Z.sibling(e.firstChild)},contents:function(e){return e.contentDocument||Z.merge([],e.childNodes)}},function(e,t){Z.fn[e]=function(n,i){var o=Z.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=Z.filter(i,o)),this.length>1&&(de[e]||Z.unique(o),pe.test(e)&&o.reverse()),this.pushStack(o)}});var he=/\S+/g,fe={};Z.Callbacks=function(e){e="string"==typeof e?fe[e]||r(e):Z.extend({},e);var t,n,i,o,s,a,l=[],u=!e.once&&[],c=function(r){for(t=e.memory&&r,n=!0,a=o||0,o=0,s=l.length,i=!0;l&&s>a;a++)if(l[a].apply(r[0],r[1])===!1&&e.stopOnFalse){t=!1;break}i=!1,l&&(u?u.length&&c(u.shift()):t?l=[]:p.disable())},p={add:function(){if(l){var n=l.length;!function r(t){Z.each(t,function(t,n){var i=Z.type(n);"function"===i?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==i&&r(n)})}(arguments),i?s=l.length:t&&(o=n,c(t))}return this},remove:function(){return l&&Z.each(arguments,function(e,t){for(var n;(n=Z.inArray(t,l,n))>-1;)l.splice(n,1),i&&(s>=n&&s--,a>=n&&a--)}),this},has:function(e){return e?Z.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],s=0,this},disable:function(){return l=u=t=void 0,this},disabled:function(){return!l},lock:function(){return u=void 0,t||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],i?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!n}};return p},Z.extend({Deferred:function(e){var t=[["resolve","done",Z.Callbacks("once memory"),"resolved"],["reject","fail",Z.Callbacks("once memory"),"rejected"],["notify","progress",Z.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var e=arguments;return Z.Deferred(function(n){Z.each(t,function(t,r){var s=Z.isFunction(e[t])&&e[t];o[r[1]](function(){var e=s&&s.apply(this,arguments);e&&Z.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[r[0]+"With"](this===i?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?Z.extend(e,i):i}},o={};return i.pipe=i.then,Z.each(t,function(e,r){var s=r[2],a=r[3];i[r[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),o[r[0]]=function(){return o[r[0]+"With"](this===o?i:this,arguments),this},o[r[0]+"With"]=s.fireWith}),i.promise(o),e&&e.call(o,o),o},when:function(e){var t,n,i,o=0,r=U.call(arguments),s=r.length,a=1!==s||e&&Z.isFunction(e.promise)?s:0,l=1===a?e:Z.Deferred(),u=function(e,n,i){return function(o){n[e]=this,i[e]=arguments.length>1?U.call(arguments):o,i===t?l.notifyWith(n,i):--a||l.resolveWith(n,i)}};if(s>1)for(t=new Array(s),n=new Array(s),i=new Array(s);s>o;o++)r[o]&&Z.isFunction(r[o].promise)?r[o].promise().done(u(o,i,r)).fail(l.reject).progress(u(o,n,t)):--a;return a||l.resolveWith(i,r),l.promise()}});var me;Z.fn.ready=function(e){return Z.ready.promise().done(e),this},Z.extend({isReady:!1,readyWait:1,holdReady:function(e){e?Z.readyWait++:Z.ready(!0)},ready:function(e){(e===!0?--Z.readyWait:Z.isReady)||(Z.isReady=!0,e!==!0&&--Z.readyWait>0||(me.resolveWith(J,[Z]),Z.fn.triggerHandler&&(Z(J).triggerHandler("ready"),Z(J).off("ready"))))}}),Z.ready.promise=function(t){return me||(me=Z.Deferred(),"complete"===J.readyState?setTimeout(Z.ready):(J.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1))),me.promise(t)},Z.ready.promise();var ge=Z.access=function(e,t,n,i,o,r,s){var a=0,l=e.length,u=null==n;if("object"===Z.type(n)){o=!0;for(a in n)Z.access(e,t,a,n[a],!0,r,s)}else if(void 0!==i&&(o=!0,Z.isFunction(i)||(s=!0),u&&(s?(t.call(e,i),t=null):(u=t,t=function(e,t,n){return u.call(Z(e),n)})),t))for(;l>a;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return o?e:u?t.call(e):l?t(e[0],n):r};Z.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},a.uid=1,a.accepts=Z.acceptData,a.prototype={key:function(e){if(!a.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=a.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(i){t[this.expando]=n,Z.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var i,o=this.key(e),r=this.cache[o];if("string"==typeof t)r[t]=n;else if(Z.isEmptyObject(r))Z.extend(this.cache[o],t);else for(i in t)r[i]=t[i];return r},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var i;return void 0===t||t&&"string"==typeof t&&void 0===n?(i=this.get(e,t),void 0!==i?i:this.get(e,Z.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i,o,r=this.key(e),s=this.cache[r];if(void 0===t)this.cache[r]={};else{Z.isArray(t)?i=t.concat(t.map(Z.camelCase)):(o=Z.camelCase(t),t in s?i=[t,o]:(i=o,i=i in s?[i]:i.match(he)||[])),n=i.length;for(;n--;)delete s[i[n]]}},hasData:function(e){return!Z.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var ve=new a,ye=new a,be=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,we=/([A-Z])/g;Z.extend({hasData:function(e){return ye.hasData(e)||ve.hasData(e)},data:function(e,t,n){return ye.access(e,t,n)},removeData:function(e,t){ye.remove(e,t)},_data:function(e,t,n){return ve.access(e,t,n)},_removeData:function(e,t){ve.remove(e,t)}}),Z.fn.extend({data:function(e,t){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===e){if(this.length&&(o=ye.get(r),1===r.nodeType&&!ve.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=Z.camelCase(i.slice(5)),l(r,i,o[i])));ve.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof e?this.each(function(){ye.set(this,e)}):ge(this,function(t){var n,i=Z.camelCase(e);if(r&&void 0===t){if(n=ye.get(r,e),void 0!==n)return n;if(n=ye.get(r,i),void 0!==n)return n;if(n=l(r,i,void 0),void 0!==n)return n}else this.each(function(){var n=ye.get(this,i);ye.set(this,i,t),-1!==e.indexOf("-")&&void 0!==n&&ye.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ye.remove(this,e)})}}),Z.extend({queue:function(e,t,n){var i;return e?(t=(t||"fx")+"queue",i=ve.get(e,t),n&&(!i||Z.isArray(n)?i=ve.access(e,t,Z.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=Z.queue(e,t),i=n.length,o=n.shift(),r=Z._queueHooks(e,t),s=function(){Z.dequeue(e,t)};"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,s,r)),!i&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return ve.get(e,n)||ve.access(e,n,{empty:Z.Callbacks("once memory").add(function(){ve.remove(e,[t+"queue",n])})})}}),Z.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Z.queue(this[0],e):void 0===t?this:this.each(function(){var n=Z.queue(this,e,t);Z._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Z.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Z.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,o=Z.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=ve.get(r[s],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(t)}});var xe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Te=["Top","Right","Bottom","Left"],Ce=function(e,t){return e=t||e,"none"===Z.css(e,"display")||!Z.contains(e.ownerDocument,e)},Ee=/^(?:checkbox|radio)$/i;!function(){var e=J.createDocumentFragment(),t=e.appendChild(J.createElement("div")),n=J.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),Y.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var ke="undefined";Y.focusinBubbles="onfocusin"in e;var Se=/^key/,Ne=/^(?:mouse|pointer|contextmenu)|click/,De=/^(?:focusinfocus|focusoutblur)$/,Fe=/^([^.]*)(?:\.(.+)|)$/;Z.event={global:{},add:function(e,t,n,i,o){var r,s,a,l,u,c,p,d,h,f,m,g=ve.get(e);if(g)for(n.handler&&(r=n,n=r.handler,o=r.selector),n.guid||(n.guid=Z.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(t){return typeof Z!==ke&&Z.event.triggered!==t.type?Z.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(he)||[""],u=t.length;u--;)a=Fe.exec(t[u])||[],h=m=a[1],f=(a[2]||"").split(".").sort(),h&&(p=Z.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=Z.event.special[h]||{},c=Z.extend({type:h,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&Z.expr.match.needsContext.test(o),namespace:f.join(".")},r),(d=l[h])||(d=l[h]=[],d.delegateCount=0,p.setup&&p.setup.call(e,i,f,s)!==!1||e.addEventListener&&e.addEventListener(h,s,!1)),p.add&&(p.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),o?d.splice(d.delegateCount++,0,c):d.push(c),Z.event.global[h]=!0)},remove:function(e,t,n,i,o){var r,s,a,l,u,c,p,d,h,f,m,g=ve.hasData(e)&&ve.get(e);if(g&&(l=g.events)){for(t=(t||"").match(he)||[""],u=t.length;u--;)if(a=Fe.exec(t[u])||[],h=m=a[1],f=(a[2]||"").split(".").sort(),h){for(p=Z.event.special[h]||{},h=(i?p.delegateType:p.bindType)||h,d=l[h]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=d.length;r--;)c=d[r],!o&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(d.splice(r,1),c.selector&&d.delegateCount--,p.remove&&p.remove.call(e,c));s&&!d.length&&(p.teardown&&p.teardown.call(e,f,g.handle)!==!1||Z.removeEvent(e,h,g.handle),delete l[h])}else for(h in l)Z.event.remove(e,h+t[u],n,i,!0);Z.isEmptyObject(l)&&(delete g.handle,ve.remove(e,"events"))}},trigger:function(t,n,i,o){var r,s,a,l,u,c,p,d=[i||J],h=G.call(t,"type")?t.type:t,f=G.call(t,"namespace")?t.namespace.split("."):[];if(s=a=i=i||J,3!==i.nodeType&&8!==i.nodeType&&!De.test(h+Z.event.triggered)&&(h.indexOf(".")>=0&&(f=h.split("."),h=f.shift(),f.sort()),u=h.indexOf(":")<0&&"on"+h,t=t[Z.expando]?t:new Z.Event(h,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=f.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:Z.makeArray(n,[t]),p=Z.event.special[h]||{},o||!p.trigger||p.trigger.apply(i,n)!==!1)){if(!o&&!p.noBubble&&!Z.isWindow(i)){for(l=p.delegateType||h,De.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),a=s;a===(i.ownerDocument||J)&&d.push(a.defaultView||a.parentWindow||e)}for(r=0;(s=d[r++])&&!t.isPropagationStopped();)t.type=r>1?l:p.bindType||h,c=(ve.get(s,"events")||{})[t.type]&&ve.get(s,"handle"),c&&c.apply(s,n),c=u&&s[u],c&&c.apply&&Z.acceptData(s)&&(t.result=c.apply(s,n),t.result===!1&&t.preventDefault());return t.type=h,o||t.isDefaultPrevented()||p._default&&p._default.apply(d.pop(),n)!==!1||!Z.acceptData(i)||u&&Z.isFunction(i[h])&&!Z.isWindow(i)&&(a=i[u],a&&(i[u]=null),Z.event.triggered=h,i[h](),Z.event.triggered=void 0,a&&(i[u]=a)),t.result}},dispatch:function(e){e=Z.event.fix(e);var t,n,i,o,r,s=[],a=U.call(arguments),l=(ve.get(this,"events")||{})[e.type]||[],u=Z.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,e)!==!1){for(s=Z.event.handlers.call(this,e,l),t=0;(o=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(r.namespace))&&(e.handleObj=r,e.data=r.data,i=((Z.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,a),void 0!==i&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,o,r,s=[],a=t.delegateCount,l=e.target;if(a&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!==this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(i=[],n=0;a>n;n++)r=t[n],o=r.selector+" ",void 0===i[o]&&(i[o]=r.needsContext?Z(o,this).index(l)>=0:Z.find(o,this,null,[l]).length),i[o]&&i.push(r);i.length&&s.push({elem:l,handlers:i})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,o,r=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||J,i=n.documentElement,o=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),e.which||void 0===r||(e.which=1&r?1:2&r?3:4&r?2:0),e}},fix:function(e){if(e[Z.expando])return e;var t,n,i,o=e.type,r=e,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=Ne.test(o)?this.mouseHooks:Se.test(o)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,e=new Z.Event(r),t=i.length;t--;)n=i[t],e[n]=r[n];return e.target||(e.target=J),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==p()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===p()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&Z.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return Z.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,i){var o=Z.extend(new Z.Event,n,{type:e,isSimulated:!0,originalEvent:{}});i?Z.event.trigger(o,null,t):Z.event.dispatch.call(t,o),o.isDefaultPrevented()&&n.preventDefault()}},Z.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},Z.Event=function(e,t){return this instanceof Z.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?u:c):this.type=e,t&&Z.extend(this,t),this.timeStamp=e&&e.timeStamp||Z.now(),void(this[Z.expando]=!0)):new Z.Event(e,t)},Z.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=u,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},Z.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Z.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,o=e.relatedTarget,r=e.handleObj;return(!o||o!==i&&!Z.contains(i,o))&&(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),Y.focusinBubbles||Z.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){Z.event.simulate(t,e.target,Z.event.fix(e),!0)};Z.event.special[t]={setup:function(){var i=this.ownerDocument||this,o=ve.access(i,t);o||i.addEventListener(e,n,!0),ve.access(i,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=ve.access(i,t)-1;o?ve.access(i,t,o):(i.removeEventListener(e,n,!0),ve.remove(i,t))}}}),Z.fn.extend({on:function(e,t,n,i,o){var r,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(s in e)this.on(s,t,n,e[s],o);return this}if(null==n&&null==i?(i=t,n=t=void 0):null==i&&("string"==typeof t?(i=n,n=void 0):(i=n,n=t,t=void 0)),i===!1)i=c;else if(!i)return this;return 1===o&&(r=i,i=function(e){return Z().off(e),r.apply(this,arguments)},i.guid=r.guid||(r.guid=Z.guid++)),this.each(function(){Z.event.add(this,e,i,n,t)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,Z(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,t,e[o]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=c),this.each(function(){Z.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){Z.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?Z.event.trigger(e,t,n,!0):void 0}});var Ae=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,$e=/<([\w:]+)/,Le=/<|&#?\w+;/,Ie=/<(?:script|style|link)/i,Oe=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^$|\/(?:java|ecma)script/i,Re=/^true\/(.*)/,Pe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,He={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};He.optgroup=He.option,He.tbody=He.tfoot=He.colgroup=He.caption=He.thead,He.th=He.td,Z.extend({clone:function(e,t,n){var i,o,r,s,a=e.cloneNode(!0),l=Z.contains(e.ownerDocument,e);if(!(Y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Z.isXMLDoc(e)))for(s=v(a),r=v(e),i=0,o=r.length;o>i;i++)y(r[i],s[i]);if(t)if(n)for(r=r||v(e),s=s||v(a),i=0,o=r.length;o>i;i++)g(r[i],s[i]);else g(e,a);return s=v(a,"script"),s.length>0&&m(s,!l&&v(e,"script")),a},buildFragment:function(e,t,n,i){for(var o,r,s,a,l,u,c=t.createDocumentFragment(),p=[],d=0,h=e.length;h>d;d++)if(o=e[d],o||0===o)if("object"===Z.type(o))Z.merge(p,o.nodeType?[o]:o);else if(Le.test(o)){for(r=r||c.appendChild(t.createElement("div")),s=($e.exec(o)||["",""])[1].toLowerCase(),a=He[s]||He._default,r.innerHTML=a[1]+o.replace(Ae,"<$1></$2>")+a[2],u=a[0];u--;)r=r.lastChild;Z.merge(p,r.childNodes),r=c.firstChild,r.textContent=""}else p.push(t.createTextNode(o));for(c.textContent="",d=0;o=p[d++];)if((!i||-1===Z.inArray(o,i))&&(l=Z.contains(o.ownerDocument,o),r=v(c.appendChild(o),"script"),l&&m(r),n))for(u=0;o=r[u++];)je.test(o.type||"")&&n.push(o);return c},cleanData:function(e){for(var t,n,i,o,r=Z.event.special,s=0;void 0!==(n=e[s]);s++){if(Z.acceptData(n)&&(o=n[ve.expando],o&&(t=ve.cache[o]))){if(t.events)for(i in t.events)r[i]?Z.event.remove(n,i):Z.removeEvent(n,i,t.handle);ve.cache[o]&&delete ve.cache[o]}delete ye.cache[n[ye.expando]]}}}),Z.fn.extend({text:function(e){return ge(this,function(e){return void 0===e?Z.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=d(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=d(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,i=e?Z.filter(e,this):this,o=0;null!=(n=i[o]);o++)t||1!==n.nodeType||Z.cleanData(v(n)),n.parentNode&&(t&&Z.contains(n.ownerDocument,n)&&m(v(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(Z.cleanData(v(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return Z.clone(this,e,t)})},html:function(e){return ge(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ie.test(e)&&!He[($e.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Ae,"<$1></$2>");try{for(;i>n;n++)t=this[n]||{},1===t.nodeType&&(Z.cleanData(v(t,!1)),t.innerHTML=e);t=0}catch(o){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,Z.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=W.apply([],e);var n,i,o,r,s,a,l=0,u=this.length,c=this,p=u-1,d=e[0],m=Z.isFunction(d);if(m||u>1&&"string"==typeof d&&!Y.checkClone&&Oe.test(d))return this.each(function(n){var i=c.eq(n);m&&(e[0]=d.call(this,n,i.html())),i.domManip(e,t)});if(u&&(n=Z.buildFragment(e,this[0].ownerDocument,!1,this),i=n.firstChild,1===n.childNodes.length&&(n=i),i)){for(o=Z.map(v(n,"script"),h),r=o.length;u>l;l++)s=n,l!==p&&(s=Z.clone(s,!0,!0),r&&Z.merge(o,v(s,"script"))),t.call(this[l],s,l);if(r)for(a=o[o.length-1].ownerDocument,Z.map(o,f),l=0;r>l;l++)s=o[l],je.test(s.type||"")&&!ve.access(s,"globalEval")&&Z.contains(a,s)&&(s.src?Z._evalUrl&&Z._evalUrl(s.src):Z.globalEval(s.textContent.replace(Pe,"")))}return this}}),Z.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Z.fn[e]=function(e){for(var n,i=[],o=Z(e),r=o.length-1,s=0;r>=s;s++)n=s===r?this:this.clone(!0),Z(o[s])[t](n),B.apply(i,n.get());return this.pushStack(i)}});var qe,ze={},Me=/^margin/,_e=new RegExp("^("+xe+")(?!px)[a-z%]+$","i"),Ue=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)};!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",o.appendChild(r);var t=e.getComputedStyle(s,null);n="1%"!==t.top,i="4px"===t.width,o.removeChild(r)}var n,i,o=J.documentElement,r=J.createElement("div"),s=J.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===s.style.backgroundClip,r.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",r.appendChild(s),e.getComputedStyle&&Z.extend(Y,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==i&&t(),i},reliableMarginRight:function(){var t,n=s.appendChild(J.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",o.appendChild(r),t=!parseFloat(e.getComputedStyle(n,null).marginRight),o.removeChild(r),s.removeChild(n),t}}))}(),Z.swap=function(e,t,n,i){var o,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];o=n.apply(e,i||[]);for(r in t)e.style[r]=s[r];return o};var We=/^(none|table(?!-c[ea]).+)/,Be=new RegExp("^("+xe+")(.*)$","i"),Qe=new RegExp("^([+-])=("+xe+")","i"),Xe={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","O","Moz","ms"];Z.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=x(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,s,a=Z.camelCase(t),l=e.style;return t=Z.cssProps[a]||(Z.cssProps[a]=C(l,a)),s=Z.cssHooks[t]||Z.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:l[t]:(r=typeof n,"string"===r&&(o=Qe.exec(n))&&(n=(o[1]+1)*o[2]+parseFloat(Z.css(e,t)),r="number"),void(null!=n&&n===n&&("number"!==r||Z.cssNumber[a]||(n+="px"),Y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l[t]=n))))}},css:function(e,t,n,i){var o,r,s,a=Z.camelCase(t);return t=Z.cssProps[a]||(Z.cssProps[a]=C(e.style,a)),s=Z.cssHooks[t]||Z.cssHooks[a],s&&"get"in s&&(o=s.get(e,!0,n)),void 0===o&&(o=x(e,t,i)),"normal"===o&&t in Ve&&(o=Ve[t]),""===n||n?(r=parseFloat(o),n===!0||Z.isNumeric(r)?r||0:o):o}}),Z.each(["height","width"],function(e,t){Z.cssHooks[t]={get:function(e,n,i){return n?We.test(Z.css(e,"display"))&&0===e.offsetWidth?Z.swap(e,Xe,function(){return S(e,t,i)}):S(e,t,i):void 0},set:function(e,n,i){var o=i&&Ue(e);return E(e,n,i?k(e,t,i,"border-box"===Z.css(e,"boxSizing",!1,o),o):0)}}}),Z.cssHooks.marginRight=T(Y.reliableMarginRight,function(e,t){return t?Z.swap(e,{display:"inline-block"},x,[e,"marginRight"]):void 0}),Z.each({margin:"",padding:"",border:"Width"},function(e,t){Z.cssHooks[e+t]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];4>i;i++)o[e+Te[i]+t]=r[i]||r[i-2]||r[0];return o}},Me.test(e)||(Z.cssHooks[e+t].set=E)}),Z.fn.extend({css:function(e,t){return ge(this,function(e,t,n){var i,o,r={},s=0;if(Z.isArray(t)){for(i=Ue(e),o=t.length;o>s;s++)r[t[s]]=Z.css(e,t[s],!1,i);return r}return void 0!==n?Z.style(e,t,n):Z.css(e,t)},e,t,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ce(this)?Z(this).show():Z(this).hide()})}}),Z.Tween=D,D.prototype={constructor:D,init:function(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||"swing",this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(Z.cssNumber[n]?"":"px")},cur:function(){var e=D.propHooks[this.prop];return e&&e.get?e.get(this):D.propHooks._default.get(this)},run:function(e){var t,n=D.propHooks[this.prop];return this.options.duration?this.pos=t=Z.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):D.propHooks._default.set(this),this}},D.prototype.init.prototype=D.prototype,D.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=Z.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){Z.fx.step[e.prop]?Z.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[Z.cssProps[e.prop]]||Z.cssHooks[e.prop])?Z.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},D.propHooks.scrollTop=D.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Z.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Z.fx=D.prototype.init,Z.fx.step={};var Ye,Je,Ke=/^(?:toggle|show|hide)$/,Ze=new RegExp("^(?:([+-])=|)("+xe+")([a-z%]*)$","i"),et=/queueHooks$/,tt=[L],nt={"*":[function(e,t){var n=this.createTween(e,t),i=n.cur(),o=Ze.exec(t),r=o&&o[3]||(Z.cssNumber[e]?"":"px"),s=(Z.cssNumber[e]||"px"!==r&&+i)&&Ze.exec(Z.css(n.elem,e)),a=1,l=20;if(s&&s[3]!==r){r=r||s[3],o=o||[],s=+i||1;do a=a||".5",s/=a,Z.style(n.elem,e,s+r);while(a!==(a=n.cur()/i)&&1!==a&&--l)}return o&&(s=n.start=+s||+i||0,n.unit=r,n.end=o[1]?s+(o[1]+1)*o[2]:+o[2]),n}]};Z.Animation=Z.extend(O,{tweener:function(e,t){Z.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,i=0,o=e.length;o>i;i++)n=e[i],nt[n]=nt[n]||[],nt[n].unshift(t)},prefilter:function(e,t){t?tt.unshift(e):tt.push(e)}}),Z.speed=function(e,t,n){var i=e&&"object"==typeof e?Z.extend({},e):{complete:n||!n&&t||Z.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Z.isFunction(t)&&t};return i.duration=Z.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in Z.fx.speeds?Z.fx.speeds[i.duration]:Z.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){Z.isFunction(i.old)&&i.old.call(this),i.queue&&Z.dequeue(this,i.queue)},i},Z.fn.extend({fadeTo:function(e,t,n,i){return this.filter(Ce).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var o=Z.isEmptyObject(e),r=Z.speed(t,n,i),s=function(){var t=O(this,Z.extend({},e),r);(o||ve.get(this,"finish"))&&t.stop(!0)};return s.finish=s,o||r.queue===!1?this.each(s):this.queue(r.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",r=Z.timers,s=ve.get(this);if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&et.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=e&&r[o].queue!==e||(r[o].anim.stop(n),t=!1,r.splice(o,1));(t||!n)&&Z.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=ve.get(this),i=n[e+"queue"],o=n[e+"queueHooks"],r=Z.timers,s=i?i.length:0;for(n.finish=!0,Z.queue(this,e,[]),
o&&o.stop&&o.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1));for(t=0;s>t;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),Z.each(["toggle","show","hide"],function(e,t){var n=Z.fn[t];Z.fn[t]=function(e,i,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(A(t,!0),e,i,o)}}),Z.each({slideDown:A("show"),slideUp:A("hide"),slideToggle:A("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Z.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),Z.timers=[],Z.fx.tick=function(){var e,t=0,n=Z.timers;for(Ye=Z.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||Z.fx.stop(),Ye=void 0},Z.fx.timer=function(e){Z.timers.push(e),e()?Z.fx.start():Z.timers.pop()},Z.fx.interval=13,Z.fx.start=function(){Je||(Je=setInterval(Z.fx.tick,Z.fx.interval))},Z.fx.stop=function(){clearInterval(Je),Je=null},Z.fx.speeds={slow:600,fast:200,_default:400},Z.fn.delay=function(e,t){return e=Z.fx?Z.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var i=setTimeout(t,e);n.stop=function(){clearTimeout(i)}})},function(){var e=J.createElement("input"),t=J.createElement("select"),n=t.appendChild(J.createElement("option"));e.type="checkbox",Y.checkOn=""!==e.value,Y.optSelected=n.selected,t.disabled=!0,Y.optDisabled=!n.disabled,e=J.createElement("input"),e.value="t",e.type="radio",Y.radioValue="t"===e.value}();var it,ot,rt=Z.expr.attrHandle;Z.fn.extend({attr:function(e,t){return ge(this,Z.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Z.removeAttr(this,e)})}}),Z.extend({attr:function(e,t,n){var i,o,r=e.nodeType;return e&&3!==r&&8!==r&&2!==r?typeof e.getAttribute===ke?Z.prop(e,t,n):(1===r&&Z.isXMLDoc(e)||(t=t.toLowerCase(),i=Z.attrHooks[t]||(Z.expr.match.bool.test(t)?ot:it)),void 0===n?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=Z.find.attr(e,t),null==o?void 0:o):null!==n?i&&"set"in i&&void 0!==(o=i.set(e,n,t))?o:(e.setAttribute(t,n+""),n):void Z.removeAttr(e,t)):void 0},removeAttr:function(e,t){var n,i,o=0,r=t&&t.match(he);if(r&&1===e.nodeType)for(;n=r[o++];)i=Z.propFix[n]||n,Z.expr.match.bool.test(n)&&(e[i]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!Y.radioValue&&"radio"===t&&Z.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),ot={set:function(e,t,n){return t===!1?Z.removeAttr(e,n):e.setAttribute(n,n),n}},Z.each(Z.expr.match.bool.source.match(/\w+/g),function(e,t){var n=rt[t]||Z.find.attr;rt[t]=function(e,t,i){var o,r;return i||(r=rt[t],rt[t]=o,o=null!=n(e,t,i)?t.toLowerCase():null,rt[t]=r),o}});var st=/^(?:input|select|textarea|button)$/i;Z.fn.extend({prop:function(e,t){return ge(this,Z.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Z.propFix[e]||e]})}}),Z.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var i,o,r,s=e.nodeType;return e&&3!==s&&8!==s&&2!==s?(r=1!==s||!Z.isXMLDoc(e),r&&(t=Z.propFix[t]||t,o=Z.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]):void 0},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||st.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),Y.optSelected||(Z.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),Z.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Z.propFix[this.toLowerCase()]=this});var at=/[\t\r\n\f]/g;Z.fn.extend({addClass:function(e){var t,n,i,o,r,s,a="string"==typeof e&&e,l=0,u=this.length;if(Z.isFunction(e))return this.each(function(t){Z(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(he)||[];u>l;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(at," "):" ")){for(r=0;o=t[r++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");s=Z.trim(i),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,i,o,r,s,a=0===arguments.length||"string"==typeof e&&e,l=0,u=this.length;if(Z.isFunction(e))return this.each(function(t){Z(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(he)||[];u>l;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(at," "):"")){for(r=0;o=t[r++];)for(;i.indexOf(" "+o+" ")>=0;)i=i.replace(" "+o+" "," ");s=e?Z.trim(i):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(Z.isFunction(e)?function(n){Z(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,i=0,o=Z(this),r=e.match(he)||[];t=r[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else(n===ke||"boolean"===n)&&(this.className&&ve.set(this,"__className__",this.className),this.className=this.className||e===!1?"":ve.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(at," ").indexOf(t)>=0)return!0;return!1}});var lt=/\r/g;Z.fn.extend({val:function(e){var t,n,i,o=this[0];return arguments.length?(i=Z.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,Z(this).val()):e,null==o?o="":"number"==typeof o?o+="":Z.isArray(o)&&(o=Z.map(o,function(e){return null==e?"":e+""})),t=Z.valHooks[this.type]||Z.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))})):o?(t=Z.valHooks[o.type]||Z.valHooks[o.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(lt,""):null==n?"":n)):void 0}}),Z.extend({valHooks:{option:{get:function(e){var t=Z.find.attr(e,"value");return null!=t?t:Z.trim(Z.text(e))}},select:{get:function(e){for(var t,n,i=e.options,o=e.selectedIndex,r="select-one"===e.type||0>o,s=r?null:[],a=r?o+1:i.length,l=0>o?a:r?o:0;a>l;l++)if(n=i[l],!(!n.selected&&l!==o||(Y.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&Z.nodeName(n.parentNode,"optgroup"))){if(t=Z(n).val(),r)return t;s.push(t)}return s},set:function(e,t){for(var n,i,o=e.options,r=Z.makeArray(t),s=o.length;s--;)i=o[s],(i.selected=Z.inArray(i.value,r)>=0)&&(n=!0);return n||(e.selectedIndex=-1),r}}}}),Z.each(["radio","checkbox"],function(){Z.valHooks[this]={set:function(e,t){return Z.isArray(t)?e.checked=Z.inArray(Z(e).val(),t)>=0:void 0}},Y.checkOn||(Z.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Z.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Z.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var ut=Z.now(),ct=/\?/;Z.parseJSON=function(e){return JSON.parse(e+"")},Z.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(i){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&Z.error("Invalid XML: "+e),t};var pt=/#.*$/,dt=/([?&])_=[^&]*/,ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,ft=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,mt=/^(?:GET|HEAD)$/,gt=/^\/\//,vt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,yt={},bt={},wt="*/".concat("*"),xt=e.location.href,Tt=vt.exec(xt.toLowerCase())||[];Z.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xt,type:"GET",isLocal:ft.test(Tt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Z.parseJSON,"text xml":Z.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?P(P(e,Z.ajaxSettings),t):P(Z.ajaxSettings,e)},ajaxPrefilter:j(yt),ajaxTransport:j(bt),ajax:function(e,t){function n(e,t,n,s){var l,c,v,y,w,T=t;2!==b&&(b=2,a&&clearTimeout(a),i=void 0,r=s||"",x.readyState=e>0?4:0,l=e>=200&&300>e||304===e,n&&(y=H(p,x,n)),y=q(p,y,x,l),l?(p.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(Z.lastModified[o]=w),w=x.getResponseHeader("etag"),w&&(Z.etag[o]=w)),204===e||"HEAD"===p.type?T="nocontent":304===e?T="notmodified":(T=y.state,c=y.data,v=y.error,l=!v)):(v=T,(e||!T)&&(T="error",0>e&&(e=0))),x.status=e,x.statusText=(t||T)+"",l?f.resolveWith(d,[c,T,x]):f.rejectWith(d,[x,T,v]),x.statusCode(g),g=void 0,u&&h.trigger(l?"ajaxSuccess":"ajaxError",[x,p,l?c:v]),m.fireWith(d,[x,T]),u&&(h.trigger("ajaxComplete",[x,p]),--Z.active||Z.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var i,o,r,s,a,l,u,c,p=Z.ajaxSetup({},t),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?Z(d):Z.event,f=Z.Deferred(),m=Z.Callbacks("once memory"),g=p.statusCode||{},v={},y={},b=0,w="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!s)for(s={};t=ht.exec(r);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?r:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)g[t]=[g[t],e[t]];else x.always(e[x.status]);return this},abort:function(e){var t=e||w;return i&&i.abort(t),n(0,t),this}};if(f.promise(x).complete=m.add,x.success=x.done,x.error=x.fail,p.url=((e||p.url||xt)+"").replace(pt,"").replace(gt,Tt[1]+"//"),p.type=t.method||t.type||p.method||p.type,p.dataTypes=Z.trim(p.dataType||"*").toLowerCase().match(he)||[""],null==p.crossDomain&&(l=vt.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]===Tt[1]&&l[2]===Tt[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(Tt[3]||("http:"===Tt[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=Z.param(p.data,p.traditional)),R(yt,p,t,x),2===b)return x;u=Z.event&&p.global,u&&0===Z.active++&&Z.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!mt.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(ct.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=dt.test(o)?o.replace(dt,"$1_="+ut++):o+(ct.test(o)?"&":"?")+"_="+ut++)),p.ifModified&&(Z.lastModified[o]&&x.setRequestHeader("If-Modified-Since",Z.lastModified[o]),Z.etag[o]&&x.setRequestHeader("If-None-Match",Z.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||t.contentType)&&x.setRequestHeader("Content-Type",p.contentType),x.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+wt+"; q=0.01":""):p.accepts["*"]);for(c in p.headers)x.setRequestHeader(c,p.headers[c]);if(p.beforeSend&&(p.beforeSend.call(d,x,p)===!1||2===b))return x.abort();w="abort";for(c in{success:1,error:1,complete:1})x[c](p[c]);if(i=R(bt,p,t,x)){x.readyState=1,u&&h.trigger("ajaxSend",[x,p]),p.async&&p.timeout>0&&(a=setTimeout(function(){x.abort("timeout")},p.timeout));try{b=1,i.send(v,n)}catch(T){if(!(2>b))throw T;n(-1,T)}}else n(-1,"No Transport");return x},getJSON:function(e,t,n){return Z.get(e,t,n,"json")},getScript:function(e,t){return Z.get(e,void 0,t,"script")}}),Z.each(["get","post"],function(e,t){Z[t]=function(e,n,i,o){return Z.isFunction(n)&&(o=o||i,i=n,n=void 0),Z.ajax({url:e,type:t,dataType:o,data:n,success:i})}}),Z._evalUrl=function(e){return Z.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},Z.fn.extend({wrapAll:function(e){var t;return Z.isFunction(e)?this.each(function(t){Z(this).wrapAll(e.call(this,t))}):(this[0]&&(t=Z(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return this.each(Z.isFunction(e)?function(t){Z(this).wrapInner(e.call(this,t))}:function(){var t=Z(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Z.isFunction(e);return this.each(function(n){Z(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Z.nodeName(this,"body")||Z(this).replaceWith(this.childNodes)}).end()}}),Z.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},Z.expr.filters.visible=function(e){return!Z.expr.filters.hidden(e)};var Ct=/%20/g,Et=/\[\]$/,kt=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;Z.param=function(e,t){var n,i=[],o=function(e,t){t=Z.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=Z.ajaxSettings&&Z.ajaxSettings.traditional),Z.isArray(e)||e.jquery&&!Z.isPlainObject(e))Z.each(e,function(){o(this.name,this.value)});else for(n in e)z(n,e[n],t,o);return i.join("&").replace(Ct,"+")},Z.fn.extend({serialize:function(){return Z.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=Z.prop(this,"elements");return e?Z.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!Z(this).is(":disabled")&&Nt.test(this.nodeName)&&!St.test(e)&&(this.checked||!Ee.test(e))}).map(function(e,t){var n=Z(this).val();return null==n?null:Z.isArray(n)?Z.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}}),Z.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Dt=0,Ft={},At={0:200,1223:204},$t=Z.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Ft)Ft[e]()}),Y.cors=!!$t&&"withCredentials"in $t,Y.ajax=$t=!!$t,Z.ajaxTransport(function(e){var t;return Y.cors||$t&&!e.crossDomain?{send:function(n,i){var o,r=e.xhr(),s=++Dt;if(r.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)r[o]=e.xhrFields[o];e.mimeType&&r.overrideMimeType&&r.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(o in n)r.setRequestHeader(o,n[o]);t=function(e){return function(){t&&(delete Ft[s],t=r.onload=r.onerror=null,"abort"===e?r.abort():"error"===e?i(r.status,r.statusText):i(At[r.status]||r.status,r.statusText,"string"==typeof r.responseText?{text:r.responseText}:void 0,r.getAllResponseHeaders()))}},r.onload=t(),r.onerror=t("error"),t=Ft[s]=t("abort");try{r.send(e.hasContent&&e.data||null)}catch(a){if(t)throw a}},abort:function(){t&&t()}}:void 0}),Z.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return Z.globalEval(e),e}}}),Z.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Z.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=Z("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),J.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Lt=[],It=/(=)\?(?=&|$)|\?\?/;Z.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Lt.pop()||Z.expando+"_"+ut++;return this[e]=!0,e}}),Z.ajaxPrefilter("json jsonp",function(t,n,i){var o,r,s,a=t.jsonp!==!1&&(It.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&It.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(o=t.jsonpCallback=Z.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(It,"$1"+o):t.jsonp!==!1&&(t.url+=(ct.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return s||Z.error(o+" was not called"),s[0]},t.dataTypes[0]="json",r=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=r,t[o]&&(t.jsonpCallback=n.jsonpCallback,Lt.push(o)),s&&Z.isFunction(r)&&r(s[0]),s=r=void 0}),"script"):void 0}),Z.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||J;var i=se.exec(e),o=!n&&[];return i?[t.createElement(i[1])]:(i=Z.buildFragment([e],t,o),o&&o.length&&Z(o).remove(),Z.merge([],i.childNodes))};var Ot=Z.fn.load;Z.fn.load=function(e,t,n){if("string"!=typeof e&&Ot)return Ot.apply(this,arguments);var i,o,r,s=this,a=e.indexOf(" ");return a>=0&&(i=Z.trim(e.slice(a)),e=e.slice(0,a)),Z.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),s.length>0&&Z.ajax({url:e,type:o,dataType:"html",data:t}).done(function(e){r=arguments,s.html(i?Z("<div>").append(Z.parseHTML(e)).find(i):e)}).complete(n&&function(e,t){s.each(n,r||[e.responseText,t,e])}),this},Z.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Z.fn[t]=function(e){return this.on(t,e)}}),Z.expr.filters.animated=function(e){return Z.grep(Z.timers,function(t){return e===t.elem}).length};var jt=e.document.documentElement;Z.offset={setOffset:function(e,t,n){var i,o,r,s,a,l,u,c=Z.css(e,"position"),p=Z(e),d={};"static"===c&&(e.style.position="relative"),a=p.offset(),r=Z.css(e,"top"),l=Z.css(e,"left"),u=("absolute"===c||"fixed"===c)&&(r+l).indexOf("auto")>-1,u?(i=p.position(),s=i.top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),Z.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(d.top=t.top-a.top+s),null!=t.left&&(d.left=t.left-a.left+o),"using"in t?t.using.call(e,d):p.css(d)}},Z.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){Z.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},r=i&&i.ownerDocument;return r?(t=r.documentElement,Z.contains(t,i)?(typeof i.getBoundingClientRect!==ke&&(o=i.getBoundingClientRect()),n=M(r),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o):void 0},position:function(){if(this[0]){var e,t,n=this[0],i={top:0,left:0};return"fixed"===Z.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),Z.nodeName(e[0],"html")||(i=e.offset()),i.top+=Z.css(e[0],"borderTopWidth",!0),i.left+=Z.css(e[0],"borderLeftWidth",!0)),{top:t.top-i.top-Z.css(n,"marginTop",!0),left:t.left-i.left-Z.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||jt;e&&!Z.nodeName(e,"html")&&"static"===Z.css(e,"position");)e=e.offsetParent;return e||jt})}}),Z.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var i="pageYOffset"===n;Z.fn[t]=function(o){return ge(this,function(t,o,r){var s=M(t);return void 0===r?s?s[n]:t[o]:void(s?s.scrollTo(i?e.pageXOffset:r,i?r:e.pageYOffset):t[o]=r)},t,o,arguments.length,null)}}),Z.each(["top","left"],function(e,t){Z.cssHooks[t]=T(Y.pixelPosition,function(e,n){return n?(n=x(e,t),_e.test(n)?Z(e).position()[t]+"px":n):void 0})}),Z.each({Height:"height",Width:"width"},function(e,t){Z.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){Z.fn[i]=function(i,o){var r=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||o===!0?"margin":"border");return ge(this,function(t,n,i){var o;return Z.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?Z.css(t,n,s):Z.style(t,n,i,s)},t,r?i:void 0,r,null)}})}),Z.fn.size=function(){return this.length},Z.fn.andSelf=Z.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Z});var Rt=e.jQuery,Pt=e.$;return Z.noConflict=function(t){return e.$===Z&&(e.$=Pt),t&&e.jQuery===Z&&(e.jQuery=Rt),Z},typeof t===ke&&(e.jQuery=e.$=Z),Z}),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(e){"use strict";var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1||t[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(e){"use strict";function t(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(void 0!==e.style[n])return{end:t[n]};return!1}e.fn.emulateTransitionEnd=function(t){var n=!1,i=this;e(this).one("bsTransitionEnd",function(){n=!0});var o=function(){n||e(i).trigger(e.support.transition.end)};return setTimeout(o,t),this},e(function(){e.support.transition=t(),e.support.transition&&(e.event.special.bsTransitionEnd={bindType:e.support.transition.end,delegateType:e.support.transition.end,handle:function(t){return e(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var n=e(this),o=n.data("bs.alert");o||n.data("bs.alert",o=new i(this)),"string"==typeof t&&o[t].call(n)})}var n='[data-dismiss="alert"]',i=function(t){e(t).on("click",n,this.close)};i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.prototype.close=function(t){function n(){s.detach().trigger("closed.bs.alert").remove()}var o=e(this),r=o.attr("data-target");r||(r=o.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));var s=e(r);t&&t.preventDefault(),s.length||(s=o.closest(".alert")),s.trigger(t=e.Event("close.bs.alert")),t.isDefaultPrevented()||(s.removeClass("in"),e.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n())};var o=e.fn.alert;e.fn.alert=t,e.fn.alert.Constructor=i,e.fn.alert.noConflict=function(){return e.fn.alert=o,this},e(document).on("click.bs.alert.data-api",n,i.prototype.close)}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var i=e(this),o=i.data("bs.button"),r="object"==typeof t&&t;o||i.data("bs.button",o=new n(this,r)),"toggle"==t?o.toggle():t&&o.setState(t)})}var n=function(t,i){this.$element=e(t),this.options=e.extend({},n.DEFAULTS,i),this.isLoading=!1};n.VERSION="3.3.6",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var n="disabled",i=this.$element,o=i.is("input")?"val":"html",r=i.data();t+="Text",null==r.resetText&&i.data("resetText",i[o]()),setTimeout(e.proxy(function(){i[o](null==r[t]?this.options[t]:r[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(n).attr(n,n)):this.isLoading&&(this.isLoading=!1,i.removeClass(n).removeAttr(n))},this),0)},n.prototype.toggle=function(){var e=!0,t=this.$element.closest('[data-toggle="buttons"]');if(t.length){var n=this.$element.find("input");"radio"==n.prop("type")?(n.prop("checked")&&(e=!1),t.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.$element.hasClass("active")&&(e=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),e&&n.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var i=e.fn.button;e.fn.button=t,e.fn.button.Constructor=n,e.fn.button.noConflict=function(){return e.fn.button=i,this},e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var i=e(n.target);i.hasClass("btn")||(i=i.closest(".btn")),t.call(i,"toggle"),e(n.target).is('input[type="radio"]')||e(n.target).is('input[type="checkbox"]')||n.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){e(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var i=e(this),o=i.data("bs.carousel"),r=e.extend({},n.DEFAULTS,i.data(),"object"==typeof t&&t),s="string"==typeof t?t:r.slide;o||i.data("bs.carousel",o=new n(this,r)),"number"==typeof t?o.to(t):s?o[s]():r.interval&&o.pause().cycle()})}var n=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",e.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",e.proxy(this.pause,this)).on("mouseleave.bs.carousel",e.proxy(this.cycle,this))};n.VERSION="3.3.6",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},n.prototype.keydown=function(e){if(!/input|textarea/i.test(e.target.tagName)){switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}e.preventDefault()}},n.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(e){return this.$items=e.parent().children(".item"),this.$items.index(e||this.$active)},n.prototype.getItemForDirection=function(e,t){var n=this.getItemIndex(t),i="prev"==e&&0===n||"next"==e&&n==this.$items.length-1;if(i&&!this.options.wrap)return t;var o="prev"==e?-1:1,r=(n+o)%this.$items.length;return this.$items.eq(r)},n.prototype.to=function(e){var t=this,n=this.getItemIndex(this.$active=this.$element.find(".item.active"));return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){t.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",this.$items.eq(e))},n.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(t,i){var o=this.$element.find(".item.active"),r=i||this.getItemForDirection(t,o),s=this.interval,a="next"==t?"left":"right",l=this;if(r.hasClass("active"))return this.sliding=!1;var u=r[0],c=e.Event("slide.bs.carousel",{relatedTarget:u,direction:a});if(this.$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,s&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=e(this.$indicators.children()[this.getItemIndex(r)]);p&&p.addClass("active")}var d=e.Event("slid.bs.carousel",{relatedTarget:u,direction:a});return e.support.transition&&this.$element.hasClass("slide")?(r.addClass(t),r[0].offsetWidth,o.addClass(a),r.addClass(a),o.one("bsTransitionEnd",function(){r.removeClass([t,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(d)},0)}).emulateTransitionEnd(n.TRANSITION_DURATION)):(o.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger(d)),s&&this.cycle(),this}};var i=e.fn.carousel;e.fn.carousel=t,e.fn.carousel.Constructor=n,e.fn.carousel.noConflict=function(){return e.fn.carousel=i,this};var o=function(n){var i,o=e(this),r=e(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(r.hasClass("carousel")){var s=e.extend({},r.data(),o.data()),a=o.attr("data-slide-to");a&&(s.interval=!1),t.call(r,s),a&&r.data("bs.carousel").to(a),n.preventDefault()}};e(document).on("click.bs.carousel.data-api","[data-slide]",o).on("click.bs.carousel.data-api","[data-slide-to]",o),e(window).on("load",function(){e('[data-ride="carousel"]').each(function(){var n=e(this);t.call(n,n.data())})})}(jQuery),+function(e){"use strict";function t(t){var n,i=t.attr("data-target")||(n=t.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");return e(i)}function n(t){return this.each(function(){var n=e(this),o=n.data("bs.collapse"),r=e.extend({},i.DEFAULTS,n.data(),"object"==typeof t&&t);!o&&r.toggle&&/show|hide/.test(t)&&(r.toggle=!1),o||n.data("bs.collapse",o=new i(this,r)),"string"==typeof t&&o[t]()})}var i=function(t,n){this.$element=e(t),this.options=e.extend({},i.DEFAULTS,n),this.$trigger=e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};i.VERSION="3.3.6",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(o&&o.length&&(t=o.data("bs.collapse"),t&&t.transitioning))){var r=e.Event("show.bs.collapse");if(this.$element.trigger(r),!r.isDefaultPrevented()){o&&o.length&&(n.call(o,"hide"),t||o.data("bs.collapse",null));var s=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[s](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return a.call(this);var l=e.camelCase(["scroll",s].join("-"));this.$element.one("bsTransitionEnd",e.proxy(a,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=e.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return e.support.transition?void this.$element[n](0).one("bsTransitionEnd",e.proxy(o,this)).emulateTransitionEnd(i.TRANSITION_DURATION):o.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return e(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(e.proxy(function(n,i){var o=e(i);this.addAriaAndCollapsedClass(t(o),o)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(e,t){var n=e.hasClass("in");e.attr("aria-expanded",n),t.toggleClass("collapsed",!n).attr("aria-expanded",n)};var o=e.fn.collapse;e.fn.collapse=n,e.fn.collapse.Constructor=i,e.fn.collapse.noConflict=function(){return e.fn.collapse=o,this},e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var o=e(this);o.attr("data-target")||i.preventDefault();var r=t(o),s=r.data("bs.collapse"),a=s?"toggle":o.data();n.call(r,a)})}(jQuery),+function(e){"use strict";function t(t){var n=t.attr("data-target");n||(n=t.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var i=n&&e(n);return i&&i.length?i:t.parent()}function n(n){n&&3===n.which||(e(o).remove(),e(r).each(function(){var i=e(this),o=t(i),r={relatedTarget:this};o.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&e.contains(o[0],n.target)||(o.trigger(n=e.Event("hide.bs.dropdown",r)),n.isDefaultPrevented()||(i.attr("aria-expanded","false"),
o.removeClass("open").trigger(e.Event("hidden.bs.dropdown",r)))))}))}function i(t){return this.each(function(){var n=e(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new s(this)),"string"==typeof t&&i[t].call(n)})}var o=".dropdown-backdrop",r='[data-toggle="dropdown"]',s=function(t){e(t).on("click.bs.dropdown",this.toggle)};s.VERSION="3.3.6",s.prototype.toggle=function(i){var o=e(this);if(!o.is(".disabled, :disabled")){var r=t(o),s=r.hasClass("open");if(n(),!s){"ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click",n);var a={relatedTarget:this};if(r.trigger(i=e.Event("show.bs.dropdown",a)),i.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),r.toggleClass("open").trigger(e.Event("shown.bs.dropdown",a))}return!1}},s.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var i=e(this);if(n.preventDefault(),n.stopPropagation(),!i.is(".disabled, :disabled")){var o=t(i),s=o.hasClass("open");if(!s&&27!=n.which||s&&27==n.which)return 27==n.which&&o.find(r).trigger("focus"),i.trigger("click");var a=" li:not(.disabled):visible a",l=o.find(".dropdown-menu"+a);if(l.length){var u=l.index(n.target);38==n.which&&u>0&&u--,40==n.which&&u<l.length-1&&u++,~u||(u=0),l.eq(u).trigger("focus")}}}};var a=e.fn.dropdown;e.fn.dropdown=i,e.fn.dropdown.Constructor=s,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=a,this},e(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",r,s.prototype.toggle).on("keydown.bs.dropdown.data-api",r,s.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",s.prototype.keydown)}(jQuery),+function(e){"use strict";function t(t,i){return this.each(function(){var o=e(this),r=o.data("bs.modal"),s=e.extend({},n.DEFAULTS,o.data(),"object"==typeof t&&t);r||o.data("bs.modal",r=new n(this,s)),"string"==typeof t?r[t](i):s.show&&r.show(i)})}var n=function(t,n){this.options=n,this.$body=e(document.body),this.$element=e(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,e.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};n.VERSION="3.3.6",n.TRANSITION_DURATION=300,n.BACKDROP_TRANSITION_DURATION=150,n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)},n.prototype.show=function(t){var i=this,o=e.Event("show.bs.modal",{relatedTarget:t});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(t){e(t.target).is(i.$element)&&(i.ignoreBackdropClick=!0)})}),this.backdrop(function(){var o=e.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),o&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();var r=e.Event("shown.bs.modal",{relatedTarget:t});o?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(r)}).emulateTransitionEnd(n.TRANSITION_DURATION):i.$element.trigger("focus").trigger(r)}))},n.prototype.hide=function(t){t&&t.preventDefault(),t=e.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),e(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),e.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",e.proxy(this.hideModal,this)).emulateTransitionEnd(n.TRANSITION_DURATION):this.hideModal())},n.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){this.$element[0]===e.target||this.$element.has(e.target).length||this.$element.trigger("focus")},this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",e.proxy(function(e){27==e.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},n.prototype.resize=function(){this.isShown?e(window).on("resize.bs.modal",e.proxy(this.handleUpdate,this)):e(window).off("resize.bs.modal")},n.prototype.hideModal=function(){var e=this;this.$element.hide(),this.backdrop(function(){e.$body.removeClass("modal-open"),e.resetAdjustments(),e.resetScrollbar(),e.$element.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},n.prototype.backdrop=function(t){var i=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var r=e.support.transition&&o;if(this.$backdrop=e(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",e.proxy(function(e){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(e.target===e.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;r?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var s=function(){i.removeBackdrop(),t&&t()};e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):s()}else t&&t()},n.prototype.handleUpdate=function(){this.adjustDialog()},n.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})},n.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},n.prototype.checkScrollbar=function(){var e=window.innerWidth;if(!e){var t=document.documentElement.getBoundingClientRect();e=t.right-Math.abs(t.left)}this.bodyIsOverflowing=document.body.clientWidth<e,this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",e+this.scrollbarWidth)},n.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},n.prototype.measureScrollbar=function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",this.$body.append(e);var t=e.offsetWidth-e.clientWidth;return this.$body[0].removeChild(e),t};var i=e.fn.modal;e.fn.modal=t,e.fn.modal.Constructor=n,e.fn.modal.noConflict=function(){return e.fn.modal=i,this},e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var i=e(this),o=i.attr("href"),r=e(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),s=r.data("bs.modal")?"toggle":e.extend({remote:!/#/.test(o)&&o},r.data(),i.data());i.is("a")&&n.preventDefault(),r.one("show.bs.modal",function(e){e.isDefaultPrevented()||r.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),t.call(r,s,this)})}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var i=e(this),o=i.data("bs.tooltip"),r="object"==typeof t&&t;(o||!/destroy|hide/.test(t))&&(o||i.data("bs.tooltip",o=new n(this,r)),"string"==typeof t&&o[t]())})}var n=function(e,t){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",e,t)};n.VERSION="3.3.6",n.TRANSITION_DURATION=150,n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(t,n,i){if(this.enabled=!0,this.type=t,this.$element=e(n),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&e(e.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),r=o.length;r--;){var s=o[r];if("click"==s)this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",l="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(t){return t=e.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},n.prototype.getDelegateOptions=function(){var t={},n=this.getDefaults();return this._options&&e.each(this._options,function(e,i){n[e]!=i&&(t[e]=i)}),t},n.prototype.enter=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),t instanceof e.Event&&(n.inState["focusin"==t.type?"focus":"hover"]=!0),n.tip().hasClass("in")||"in"==n.hoverState?void(n.hoverState="in"):(clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show())},n.prototype.isInStateTrue=function(){for(var e in this.inState)if(this.inState[e])return!0;return!1},n.prototype.leave=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),t instanceof e.Event&&(n.inState["focusout"==t.type?"focus":"hover"]=!1),n.isInStateTrue()?void 0:(clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide())},n.prototype.show=function(){var t=e.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var i=e.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!i)return;var o=this,r=this.tip(),s=this.getUID(this.type);this.setContent(),r.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&r.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,u=l.test(a);u&&(a=a.replace(l,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var c=this.getPosition(),p=r[0].offsetWidth,d=r[0].offsetHeight;if(u){var h=a,f=this.getPosition(this.$viewport);a="bottom"==a&&c.bottom+d>f.bottom?"top":"top"==a&&c.top-d<f.top?"bottom":"right"==a&&c.right+p>f.width?"left":"left"==a&&c.left-p<f.left?"right":a,r.removeClass(h).addClass(a)}var m=this.getCalculatedOffset(a,c,p,d);this.applyPlacement(m,a);var g=function(){var e=o.hoverState;o.$element.trigger("shown.bs."+o.type),o.hoverState=null,"out"==e&&o.leave(o)};e.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",g).emulateTransitionEnd(n.TRANSITION_DURATION):g()}},n.prototype.applyPlacement=function(t,n){var i=this.tip(),o=i[0].offsetWidth,r=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,e.offset.setOffset(i[0],e.extend({using:function(e){i.css({top:Math.round(e.top),left:Math.round(e.left)})}},t),0),i.addClass("in");var l=i[0].offsetWidth,u=i[0].offsetHeight;"top"==n&&u!=r&&(t.top=t.top+r-u);var c=this.getViewportAdjustedDelta(n,t,l,u);c.left?t.left+=c.left:t.top+=c.top;var p=/top|bottom/.test(n),d=p?2*c.left-o+l:2*c.top-r+u,h=p?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(d,i[0][h],p)},n.prototype.replaceArrow=function(e,t,n){this.arrow().css(n?"left":"top",50*(1-e/t)+"%").css(n?"top":"left","")},n.prototype.setContent=function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},n.prototype.hide=function(t){function i(){"in"!=o.hoverState&&r.detach(),o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),t&&t()}var o=this,r=e(this.$tip),s=e.Event("hide.bs."+this.type);return this.$element.trigger(s),s.isDefaultPrevented()?void 0:(r.removeClass("in"),e.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i(),this.hoverState=null,this)},n.prototype.fixTitle=function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition=function(t){t=t||this.$element;var n=t[0],i="BODY"==n.tagName,o=n.getBoundingClientRect();null==o.width&&(o=e.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var r=i?{top:0,left:0}:t.offset(),s={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},a=i?{width:e(window).width(),height:e(window).height()}:null;return e.extend({},o,s,a,r)},n.prototype.getCalculatedOffset=function(e,t,n,i){return"bottom"==e?{top:t.top+t.height,left:t.left+t.width/2-n/2}:"top"==e?{top:t.top-i,left:t.left+t.width/2-n/2}:"left"==e?{top:t.top+t.height/2-i/2,left:t.left-n}:{top:t.top+t.height/2-i/2,left:t.left+t.width}},n.prototype.getViewportAdjustedDelta=function(e,t,n,i){var o={top:0,left:0};if(!this.$viewport)return o;var r=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport);if(/right|left/.test(e)){var a=t.top-r-s.scroll,l=t.top+r-s.scroll+i;a<s.top?o.top=s.top-a:l>s.top+s.height&&(o.top=s.top+s.height-l)}else{var u=t.left-r,c=t.left+r+n;u<s.left?o.left=s.left-u:c>s.right&&(o.left=s.left+s.width-c)}return o},n.prototype.getTitle=function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||("function"==typeof n.title?n.title.call(t[0]):n.title)},n.prototype.getUID=function(e){do e+=~~(1e6*Math.random());while(document.getElementById(e));return e},n.prototype.tip=function(){if(!this.$tip&&(this.$tip=e(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(t){var n=this;t&&(n=e(t.currentTarget).data("bs."+this.type),n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n))),t?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n)},n.prototype.destroy=function(){var e=this;clearTimeout(this.timeout),this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type),e.$tip&&e.$tip.detach(),e.$tip=null,e.$arrow=null,e.$viewport=null})};var i=e.fn.tooltip;e.fn.tooltip=t,e.fn.tooltip.Constructor=n,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=i,this}}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var i=e(this),o=i.data("bs.popover"),r="object"==typeof t&&t;(o||!/destroy|hide/.test(t))&&(o||i.data("bs.popover",o=new n(this,r)),"string"==typeof t&&o[t]())})}var n=function(e,t){this.init("popover",e,t)};if(!e.fn.tooltip)throw new Error("Popover requires tooltip.js");n.VERSION="3.3.6",n.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=e.extend({},e.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof n?"html":"append":"text"](n),e.removeClass("fade top bottom left right in"),e.find(".popover-title").html()||e.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var e=this.$element,t=this.options;return e.attr("data-content")||("function"==typeof t.content?t.content.call(e[0]):t.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var i=e.fn.popover;e.fn.popover=t,e.fn.popover.Constructor=n,e.fn.popover.noConflict=function(){return e.fn.popover=i,this}}(jQuery),+function(e){"use strict";function t(n,i){this.$body=e(document.body),this.$scrollElement=e(e(n).is(document.body)?window:n),this.options=e.extend({},t.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e.proxy(this.process,this)),this.refresh(),this.process()}function n(n){return this.each(function(){var i=e(this),o=i.data("bs.scrollspy"),r="object"==typeof n&&n;o||i.data("bs.scrollspy",o=new t(this,r)),"string"==typeof n&&o[n]()})}t.VERSION="3.3.6",t.DEFAULTS={offset:10},t.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},t.prototype.refresh=function(){var t=this,n="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),e.isWindow(this.$scrollElement[0])||(n="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=e(this),o=t.data("target")||t.attr("href"),r=/^#./.test(o)&&e(o);return r&&r.length&&r.is(":visible")&&[[r[n]().top+i,o]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},t.prototype.process=function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),i=this.options.offset+n-this.$scrollElement.height(),o=this.offsets,r=this.targets,s=this.activeTarget;if(this.scrollHeight!=n&&this.refresh(),t>=i)return s!=(e=r[r.length-1])&&this.activate(e);if(s&&t<o[0])return this.activeTarget=null,this.clear();for(e=o.length;e--;)s!=r[e]&&t>=o[e]&&(void 0===o[e+1]||t<o[e+1])&&this.activate(r[e])},t.prototype.activate=function(t){this.activeTarget=t,this.clear();var n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=e(n).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},t.prototype.clear=function(){e(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=e.fn.scrollspy;e.fn.scrollspy=n,e.fn.scrollspy.Constructor=t,e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=i,this},e(window).on("load.bs.scrollspy.data-api",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);n.call(t,t.data())})})}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var i=e(this),o=i.data("bs.tab");o||i.data("bs.tab",o=new n(this)),"string"==typeof t&&o[t]()})}var n=function(t){this.element=e(t)};n.VERSION="3.3.6",n.TRANSITION_DURATION=150,n.prototype.show=function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=t.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=n.find(".active:last a"),r=e.Event("hide.bs.tab",{relatedTarget:t[0]}),s=e.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(r),t.trigger(s),!s.isDefaultPrevented()&&!r.isDefaultPrevented()){var a=e(i);this.activate(t.closest("li"),n),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},n.prototype.activate=function(t,i,o){function r(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),o&&o()}var s=i.find("> .active"),a=o&&e.support.transition&&(s.length&&s.hasClass("fade")||!!i.find("> .fade").length);s.length&&a?s.one("bsTransitionEnd",r).emulateTransitionEnd(n.TRANSITION_DURATION):r(),s.removeClass("in")};var i=e.fn.tab;e.fn.tab=t,e.fn.tab.Constructor=n,e.fn.tab.noConflict=function(){return e.fn.tab=i,this};var o=function(n){n.preventDefault(),t.call(e(this),"show")};e(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var i=e(this),o=i.data("bs.affix"),r="object"==typeof t&&t;o||i.data("bs.affix",o=new n(this,r)),"string"==typeof t&&o[t]()})}var n=function(t,i){this.options=e.extend({},n.DEFAULTS,i),this.$target=e(this.options.target).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this)),this.$element=e(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};n.VERSION="3.3.6",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getState=function(e,t,n,i){var o=this.$target.scrollTop(),r=this.$element.offset(),s=this.$target.height();if(null!=n&&"top"==this.affixed)return n>o?"top":!1;if("bottom"==this.affixed)return null!=n?o+this.unpin<=r.top?!1:"bottom":e-i>=o+s?!1:"bottom";var a=null==this.affixed,l=a?o:r.top,u=a?s:t;return null!=n&&n>=o?"top":null!=i&&l+u>=e-i?"bottom":!1},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(n.RESET).addClass("affix");var e=this.$target.scrollTop(),t=this.$element.offset();return this.pinnedOffset=t.top-e},n.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),i=this.options.offset,o=i.top,r=i.bottom,s=Math.max(e(document).height(),e(document.body).height());"object"!=typeof i&&(r=o=i),"function"==typeof o&&(o=i.top(this.$element)),"function"==typeof r&&(r=i.bottom(this.$element));var a=this.getState(s,t,o,r);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var l="affix"+(a?"-"+a:""),u=e.Event(l+".bs.affix");if(this.$element.trigger(u),u.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:s-t-r})}};var i=e.fn.affix;e.fn.affix=t,e.fn.affix.Constructor=n,e.fn.affix.noConflict=function(){return e.fn.affix=i,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var n=e(this),i=n.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),t.call(n,i)})})}(jQuery),function(){var e,t,n,i,o,r,s,a,l=[].slice,u={}.hasOwnProperty,c=function(e,t){function n(){this.constructor=e}for(var i in t)u.call(t,i)&&(e[i]=t[i]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e};s=function(){},t=function(){function e(){}return e.prototype.addEventListener=e.prototype.on,e.prototype.on=function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this},e.prototype.emit=function(){var e,t,n,i,o,r;if(i=arguments[0],e=2<=arguments.length?l.call(arguments,1):[],this._callbacks=this._callbacks||{},n=this._callbacks[i])for(o=0,r=n.length;r>o;o++)t=n[o],t.apply(this,e);return this},e.prototype.removeListener=e.prototype.off,e.prototype.removeAllListeners=e.prototype.off,e.prototype.removeEventListener=e.prototype.off,e.prototype.off=function(e,t){var n,i,o,r,s;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(i=this._callbacks[e],!i)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(o=r=0,s=i.length;s>r;o=++r)if(n=i[o],n===t){i.splice(o,1);break}return this},e}(),e=function(e){function n(e,t){var o,r,s;if(this.element=e,this.version=n.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(n.instances.push(this),this.element.dropzone=this,o=null!=(s=n.optionsForElement(this.element))?s:{},this.options=i({},this.defaultOptions,o,null!=t?t:{}),this.options.forceFallback||!n.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(r=this.getExistingFallback())&&r.parentNode&&r.parentNode.removeChild(r),this.options.previewsContainer!==!1&&(this.options.previewsContainer?this.previewsContainer=n.getElement(this.options.previewsContainer,"previewsContainer"):this.previewsContainer=this.element),this.options.clickable&&(this.options.clickable===!0?this.clickableElements=[this.element]:this.clickableElements=n.getElements(this.options.clickable,"clickable")),this.init()}var i,o;return c(n,e),n.prototype.Emitter=t,n.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],n.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(e,t){return t()},init:function(){return s},forceFallback:!1,fallback:function(){var e,t,i,o,r,s;for(this.element.className=""+this.element.className+" dz-browser-not-supported",s=this.element.getElementsByTagName("div"),o=0,r=s.length;r>o;o++)e=s[o],/(^| )dz-message($| )/.test(e.className)&&(t=e,e.className="dz-message");return t||(t=n.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(t)),i=t.getElementsByTagName("span")[0],i&&(null!=i.textContent?i.textContent=this.options.dictFallbackMessage:null!=i.innerText&&(i.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e){var t,n,i;return t={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},n=e.width/e.height,t.optWidth=this.options.thumbnailWidth,t.optHeight=this.options.thumbnailHeight,null==t.optWidth&&null==t.optHeight?(t.optWidth=t.srcWidth,t.optHeight=t.srcHeight):null==t.optWidth?t.optWidth=n*t.optHeight:null==t.optHeight&&(t.optHeight=1/n*t.optWidth),i=t.optWidth/t.optHeight,e.height<t.optHeight||e.width<t.optWidth?(t.trgHeight=t.srcHeight,t.trgWidth=t.srcWidth):n>i?(t.srcHeight=e.height,t.srcWidth=t.srcHeight*i):(t.srcWidth=e.width,t.srcHeight=t.srcWidth/i),t.srcX=(e.width-t.srcWidth)/2,t.srcY=(e.height-t.srcHeight)/2,t},drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:s,dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:s,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var t,i,o,r,s,a,l,u,c,p,d,h,f;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(e.previewElement=n.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement),p=e.previewElement.querySelectorAll("[data-dz-name]"),r=0,l=p.length;l>r;r++)t=p[r],t.textContent=e.name;for(d=e.previewElement.querySelectorAll("[data-dz-size]"),s=0,u=d.length;u>s;s++)t=d[s],t.innerHTML=this.filesize(e.size);for(this.options.addRemoveLinks&&(e._removeLink=n.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink)),i=function(t){return function(i){return i.preventDefault(),i.stopPropagation(),e.status===n.UPLOADING?n.confirm(t.options.dictCancelUploadConfirmation,function(){
return t.removeFile(e)}):t.options.dictRemoveFileConfirmation?n.confirm(t.options.dictRemoveFileConfirmation,function(){return t.removeFile(e)}):t.removeFile(e)}}(this),h=e.previewElement.querySelectorAll("[data-dz-remove]"),f=[],a=0,c=h.length;c>a;a++)o=h[a],f.push(o.addEventListener("click",i));return f}},removedfile:function(e){var t;return e.previewElement&&null!=(t=e.previewElement)&&t.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){var n,i,o,r;if(e.previewElement){for(e.previewElement.classList.remove("dz-file-preview"),r=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),i=0,o=r.length;o>i;i++)n=r[i],n.alt=e.name,n.src=t;return setTimeout(function(t){return function(){return e.previewElement.classList.add("dz-image-preview")}}(this),1)}},error:function(e,t){var n,i,o,r,s;if(e.previewElement){for(e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error),r=e.previewElement.querySelectorAll("[data-dz-errormessage]"),s=[],i=0,o=r.length;o>i;i++)n=r[i],s.push(n.textContent=t);return s}},errormultiple:s,processing:function(e){return e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink)?e._removeLink.textContent=this.options.dictCancelUpload:void 0},processingmultiple:s,uploadprogress:function(e,t,n){var i,o,r,s,a;if(e.previewElement){for(s=e.previewElement.querySelectorAll("[data-dz-uploadprogress]"),a=[],o=0,r=s.length;r>o;o++)i=s[o],"PROGRESS"===i.nodeName?a.push(i.value=t):a.push(i.style.width=""+t+"%");return a}},totaluploadprogress:s,sending:s,sendingmultiple:s,success:function(e){return e.previewElement?e.previewElement.classList.add("dz-success"):void 0},successmultiple:s,canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:s,complete:function(e){return e._removeLink&&(e._removeLink.textContent=this.options.dictRemoveFile),e.previewElement?e.previewElement.classList.add("dz-complete"):void 0},completemultiple:s,maxfilesexceeded:s,maxfilesreached:s,queuecomplete:s,addedfiles:s,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'},i=function(){var e,t,n,i,o,r,s;for(i=arguments[0],n=2<=arguments.length?l.call(arguments,1):[],r=0,s=n.length;s>r;r++){t=n[r];for(e in t)o=t[e],i[e]=o}return i},n.prototype.getAcceptedFiles=function(){var e,t,n,i,o;for(i=this.files,o=[],t=0,n=i.length;n>t;t++)e=i[t],e.accepted&&o.push(e);return o},n.prototype.getRejectedFiles=function(){var e,t,n,i,o;for(i=this.files,o=[],t=0,n=i.length;n>t;t++)e=i[t],e.accepted||o.push(e);return o},n.prototype.getFilesWithStatus=function(e){var t,n,i,o,r;for(o=this.files,r=[],n=0,i=o.length;i>n;n++)t=o[n],t.status===e&&r.push(t);return r},n.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(n.QUEUED)},n.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(n.UPLOADING)},n.prototype.getAddedFiles=function(){return this.getFilesWithStatus(n.ADDED)},n.prototype.getActiveFiles=function(){var e,t,i,o,r;for(o=this.files,r=[],t=0,i=o.length;i>t;t++)e=o[t],(e.status===n.UPLOADING||e.status===n.QUEUED)&&r.push(e);return r},n.prototype.init=function(){var e,t,i,o,r,s,a;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(n.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(i=function(e){return function(){return e.hiddenFileInput&&e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null==e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!=e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!=e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",document.querySelector(e.options.hiddenInputContainer).appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var t,n,o,r;if(n=e.hiddenFileInput.files,n.length)for(o=0,r=n.length;r>o;o++)t=n[o],e.addFile(t);return e.emit("addedfiles",n),i()})}}(this))(),this.URL=null!=(s=window.URL)?s:window.webkitURL,a=this.events,o=0,r=a.length;r>o;o++)e=a[o],this.on(e,this.options[e]);return this.on("uploadprogress",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("canceled",function(e){return function(t){return e.emit("complete",t)}}(this)),this.on("complete",function(e){return function(t){return 0===e.getAddedFiles().length&&0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length?setTimeout(function(){return e.emit("queuecomplete")},0):void 0}}(this)),t=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(e){return function(t){return e.emit("dragstart",t)}}(this),dragenter:function(e){return function(n){return t(n),e.emit("dragenter",n)}}(this),dragover:function(e){return function(n){var i;try{i=n.dataTransfer.effectAllowed}catch(o){}return n.dataTransfer.dropEffect="move"===i||"linkMove"===i?"move":"copy",t(n),e.emit("dragover",n)}}(this),dragleave:function(e){return function(t){return e.emit("dragleave",t)}}(this),drop:function(e){return function(n){return t(n),e.drop(n)}}(this),dragend:function(e){return function(t){return e.emit("dragend",t)}}(this)}}],this.clickableElements.forEach(function(e){return function(t){return e.listeners.push({element:t,events:{click:function(i){return(t!==e.element||i.target===e.element||n.elementInside(i.target,e.element.querySelector(".dz-message")))&&e.hiddenFileInput.click(),!0}}})}}(this)),this.enable(),this.options.init.call(this)},n.prototype.destroy=function(){var e;return this.disable(),this.removeAllFiles(!0),(null!=(e=this.hiddenFileInput)?e.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,n.instances.splice(n.instances.indexOf(this),1)},n.prototype.updateTotalUploadProgress=function(){var e,t,n,i,o,r,s,a;if(i=0,n=0,e=this.getActiveFiles(),e.length){for(a=this.getActiveFiles(),r=0,s=a.length;s>r;r++)t=a[r],i+=t.upload.bytesSent,n+=t.upload.total;o=100*i/n}else o=100;return this.emit("totaluploadprogress",o,n,i)},n.prototype._getParamName=function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):""+this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")},n.prototype.getFallbackForm=function(){var e,t,i,o;return(e=this.getExistingFallback())?e:(i='<div class="dz-fallback">',this.options.dictFallbackText&&(i+="<p>"+this.options.dictFallbackText+"</p>"),i+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',t=n.createElement(i),"FORM"!==this.element.tagName?(o=n.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),o.appendChild(t)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=o?o:t)},n.prototype.getExistingFallback=function(){var e,t,n,i,o,r;for(t=function(e){var t,n,i;for(n=0,i=e.length;i>n;n++)if(t=e[n],/(^| )fallback($| )/.test(t.className))return t},r=["div","form"],i=0,o=r.length;o>i;i++)if(n=r[i],e=t(this.element.getElementsByTagName(n)))return e},n.prototype.setupEventListeners=function(){var e,t,n,i,o,r,s;for(r=this.listeners,s=[],i=0,o=r.length;o>i;i++)e=r[i],s.push(function(){var i,o;i=e.events,o=[];for(t in i)n=i[t],o.push(e.element.addEventListener(t,n,!1));return o}());return s},n.prototype.removeEventListeners=function(){var e,t,n,i,o,r,s;for(r=this.listeners,s=[],i=0,o=r.length;o>i;i++)e=r[i],s.push(function(){var i,o;i=e.events,o=[];for(t in i)n=i[t],o.push(e.element.removeEventListener(t,n,!1));return o}());return s},n.prototype.disable=function(){var e,t,n,i,o;for(this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),i=this.files,o=[],t=0,n=i.length;n>t;t++)e=i[t],o.push(this.cancelUpload(e));return o},n.prototype.enable=function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()},n.prototype.filesize=function(e){var t,n,i,o,r,s,a,l;if(i=0,o="b",e>0){for(s=["TB","GB","MB","KB","b"],n=a=0,l=s.length;l>a;n=++a)if(r=s[n],t=Math.pow(this.options.filesizeBase,4-n)/10,e>=t){i=e/Math.pow(this.options.filesizeBase,4-n),o=r;break}i=Math.round(10*i)/10}return"<strong>"+i+"</strong> "+o},n.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},n.prototype.drop=function(e){var t,n;e.dataTransfer&&(this.emit("drop",e),t=e.dataTransfer.files,this.emit("addedfiles",t),t.length&&(n=e.dataTransfer.items,n&&n.length&&null!=n[0].webkitGetAsEntry?this._addFilesFromItems(n):this.handleFiles(t)))},n.prototype.paste=function(e){var t,n;if(null!=(null!=e&&null!=(n=e.clipboardData)?n.items:void 0))return this.emit("paste",e),t=e.clipboardData.items,t.length?this._addFilesFromItems(t):void 0},n.prototype.handleFiles=function(e){var t,n,i,o;for(o=[],n=0,i=e.length;i>n;n++)t=e[n],o.push(this.addFile(t));return o},n.prototype._addFilesFromItems=function(e){var t,n,i,o,r;for(r=[],i=0,o=e.length;o>i;i++)n=e[i],null!=n.webkitGetAsEntry&&(t=n.webkitGetAsEntry())?t.isFile?r.push(this.addFile(n.getAsFile())):t.isDirectory?r.push(this._addFilesFromDirectory(t,t.name)):r.push(void 0):null!=n.getAsFile&&(null==n.kind||"file"===n.kind)?r.push(this.addFile(n.getAsFile())):r.push(void 0);return r},n.prototype._addFilesFromDirectory=function(e,t){var n,i;return n=e.createReader(),i=function(e){return function(n){var i,o,r;for(o=0,r=n.length;r>o;o++)i=n[o],i.isFile?i.file(function(n){return e.options.ignoreHiddenFiles&&"."===n.name.substring(0,1)?void 0:(n.fullPath=""+t+"/"+n.name,e.addFile(n))}):i.isDirectory&&e._addFilesFromDirectory(i,""+t+"/"+i.name)}}(this),n.readEntries(i,function(e){return"undefined"!=typeof console&&null!==console?("function"==typeof console.log,void 0):void 0})},n.prototype.accept=function(e,t){return e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):n.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)},n.prototype.addFile=function(e){return e.upload={progress:0,total:e.size,bytesSent:0},this.files.push(e),e.status=n.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,function(t){return function(n){return n?(e.accepted=!1,t._errorProcessing([e],n)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()}}(this))},n.prototype.enqueueFiles=function(e){var t,n,i;for(n=0,i=e.length;i>n;n++)t=e[n],this.enqueueFile(t);return null},n.prototype.enqueueFile=function(e){if(e.status!==n.ADDED||e.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.");return e.status=n.QUEUED,this.options.autoProcessQueue?setTimeout(function(e){return function(){return e.processQueue()}}(this),0):void 0},n.prototype._thumbnailQueue=[],n.prototype._processingThumbnail=!1,n.prototype._enqueueThumbnail=function(e){return this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024?(this._thumbnailQueue.push(e),setTimeout(function(e){return function(){return e._processThumbnailQueue()}}(this),0)):void 0},n.prototype._processThumbnailQueue=function(){return this._processingThumbnail||0===this._thumbnailQueue.length?void 0:(this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),function(e){return function(){return e._processingThumbnail=!1,e._processThumbnailQueue()}}(this)))},n.prototype.removeFile=function(e){return e.status===n.UPLOADING&&this.cancelUpload(e),this.files=a(this.files,e),this.emit("removedfile",e),0===this.files.length?this.emit("reset"):void 0},n.prototype.removeAllFiles=function(e){var t,i,o,r;for(null==e&&(e=!1),r=this.files.slice(),i=0,o=r.length;o>i;i++)t=r[i],(t.status!==n.UPLOADING||e)&&this.removeFile(t);return null},n.prototype.createThumbnail=function(e,t){var n;return n=new FileReader,n.onload=function(i){return function(){return"image/svg+xml"===e.type?(i.emit("thumbnail",e,n.result),void(null!=t&&t())):i.createThumbnailFromUrl(e,n.result,t)}}(this),n.readAsDataURL(e)},n.prototype.createThumbnailFromUrl=function(e,t,n,i){var o;return o=document.createElement("img"),i&&(o.crossOrigin=i),o.onload=function(t){return function(){var i,s,a,l,u,c,p,d;return e.width=o.width,e.height=o.height,a=t.options.resize.call(t,e),null==a.trgWidth&&(a.trgWidth=a.optWidth),null==a.trgHeight&&(a.trgHeight=a.optHeight),i=document.createElement("canvas"),s=i.getContext("2d"),i.width=a.trgWidth,i.height=a.trgHeight,r(s,o,null!=(u=a.srcX)?u:0,null!=(c=a.srcY)?c:0,a.srcWidth,a.srcHeight,null!=(p=a.trgX)?p:0,null!=(d=a.trgY)?d:0,a.trgWidth,a.trgHeight),l=i.toDataURL("image/png"),t.emit("thumbnail",e,l),null!=n?n():void 0}}(this),null!=n&&(o.onerror=n),o.src=t},n.prototype.processQueue=function(){var e,t,n,i;if(t=this.options.parallelUploads,n=this.getUploadingFiles().length,e=n,!(n>=t)&&(i=this.getQueuedFiles(),i.length>0)){if(this.options.uploadMultiple)return this.processFiles(i.slice(0,t-n));for(;t>e;){if(!i.length)return;this.processFile(i.shift()),e++}}},n.prototype.processFile=function(e){return this.processFiles([e])},n.prototype.processFiles=function(e){var t,i,o;for(i=0,o=e.length;o>i;i++)t=e[i],t.processing=!0,t.status=n.UPLOADING,this.emit("processing",t);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)},n.prototype._getFilesWithXhr=function(e){var t,n;return n=function(){var n,i,o,r;for(o=this.files,r=[],n=0,i=o.length;i>n;n++)t=o[n],t.xhr===e&&r.push(t);return r}.call(this)},n.prototype.cancelUpload=function(e){var t,i,o,r,s,a,l;if(e.status===n.UPLOADING){for(i=this._getFilesWithXhr(e.xhr),o=0,s=i.length;s>o;o++)t=i[o],t.status=n.CANCELED;for(e.xhr.abort(),r=0,a=i.length;a>r;r++)t=i[r],this.emit("canceled",t);this.options.uploadMultiple&&this.emit("canceledmultiple",i)}else((l=e.status)===n.ADDED||l===n.QUEUED)&&(e.status=n.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));return this.options.autoProcessQueue?this.processQueue():void 0},o=function(){var e,t;return t=arguments[0],e=2<=arguments.length?l.call(arguments,1):[],"function"==typeof t?t.apply(this,e):t},n.prototype.uploadFile=function(e){return this.uploadFiles([e])},n.prototype.uploadFiles=function(e){var t,r,s,a,l,u,c,p,d,h,f,m,g,v,y,b,w,x,T,C,E,k,S,N,D,F,A,$,L,I,O,j,R,P;for(T=new XMLHttpRequest,C=0,N=e.length;N>C;C++)t=e[C],t.xhr=T;m=o(this.options.method,e),w=o(this.options.url,e),T.open(m,w,!0),T.withCredentials=!!this.options.withCredentials,y=null,s=function(n){return function(){var i,o,r;for(r=[],i=0,o=e.length;o>i;i++)t=e[i],r.push(n._errorProcessing(e,y||n.options.dictResponseError.replace("{{statusCode}}",T.status),T));return r}}(this),b=function(n){return function(i){var o,r,s,a,l,u,c,p,d;if(null!=i)for(r=100*i.loaded/i.total,s=0,u=e.length;u>s;s++)t=e[s],t.upload={progress:r,total:i.total,bytesSent:i.loaded};else{for(o=!0,r=100,a=0,c=e.length;c>a;a++)t=e[a],(100!==t.upload.progress||t.upload.bytesSent!==t.upload.total)&&(o=!1),t.upload.progress=r,t.upload.bytesSent=t.upload.total;if(o)return}for(d=[],l=0,p=e.length;p>l;l++)t=e[l],d.push(n.emit("uploadprogress",t,r,t.upload.bytesSent));return d}}(this),T.onload=function(t){return function(i){var o;if(e[0].status!==n.CANCELED&&4===T.readyState){if(y=T.responseText,T.getResponseHeader("content-type")&&~T.getResponseHeader("content-type").indexOf("application/json"))try{y=JSON.parse(y)}catch(r){i=r,y="Invalid JSON response from server."}return b(),200<=(o=T.status)&&300>o?t._finished(e,y,i):s()}}}(this),T.onerror=function(t){return function(){return e[0].status!==n.CANCELED?s():void 0}}(this),v=null!=(L=T.upload)?L:T,v.onprogress=b,u={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&i(u,this.options.headers);for(a in u)l=u[a],l&&T.setRequestHeader(a,l);if(r=new FormData,this.options.params){I=this.options.params;for(f in I)x=I[f],r.append(f,x)}for(E=0,D=e.length;D>E;E++)t=e[E],this.emit("sending",t,T,r);if(this.options.uploadMultiple&&this.emit("sendingmultiple",e,T,r),"FORM"===this.element.tagName)for(O=this.element.querySelectorAll("input, textarea, select, button"),k=0,F=O.length;F>k;k++)if(p=O[k],d=p.getAttribute("name"),h=p.getAttribute("type"),"SELECT"===p.tagName&&p.hasAttribute("multiple"))for(j=p.options,S=0,A=j.length;A>S;S++)g=j[S],g.selected&&r.append(d,g.value);else(!h||"checkbox"!==(R=h.toLowerCase())&&"radio"!==R||p.checked)&&r.append(d,p.value);for(c=$=0,P=e.length-1;P>=0?P>=$:$>=P;c=P>=0?++$:--$)r.append(this._getParamName(c),e[c],e[c].name);return this.submitRequest(T,r,e)},n.prototype.submitRequest=function(e,t,n){return e.send(t)},n.prototype._finished=function(e,t,i){var o,r,s;for(r=0,s=e.length;s>r;r++)o=e[r],o.status=n.SUCCESS,this.emit("success",o,t,i),this.emit("complete",o);return this.options.uploadMultiple&&(this.emit("successmultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue?this.processQueue():void 0},n.prototype._errorProcessing=function(e,t,i){var o,r,s;for(r=0,s=e.length;s>r;r++)o=e[r],o.status=n.ERROR,this.emit("error",o,t,i),this.emit("complete",o);return this.options.uploadMultiple&&(this.emit("errormultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue?this.processQueue():void 0},n}(t),e.version="4.2.0",e.options={},e.optionsForElement=function(t){return t.getAttribute("id")?e.options[n(t.getAttribute("id"))]:void 0},e.instances=[],e.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},e.autoDiscover=!0,e.discover=function(){var t,n,i,o,r,s;for(document.querySelectorAll?i=document.querySelectorAll(".dropzone"):(i=[],t=function(e){var t,n,o,r;for(r=[],n=0,o=e.length;o>n;n++)t=e[n],/(^| )dropzone($| )/.test(t.className)?r.push(i.push(t)):r.push(void 0);return r},t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))),s=[],o=0,r=i.length;r>o;o++)n=i[o],e.optionsForElement(n)!==!1?s.push(new e(n)):s.push(void 0);return s},e.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],e.isBrowserSupported=function(){var t,n,i,o,r;if(t=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(r=e.blacklistedBrowsers,i=0,o=r.length;o>i;i++)n=r[i],n.test(navigator.userAgent)&&(t=!1);else t=!1;else t=!1;return t},a=function(e,t){var n,i,o,r;for(r=[],i=0,o=e.length;o>i;i++)n=e[i],n!==t&&r.push(n);return r},n=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})},e.createElement=function(e){var t;return t=document.createElement("div"),t.innerHTML=e,t.childNodes[0]},e.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},e.getElement=function(e,t){var n;if("string"==typeof e?n=document.querySelector(e):null!=e.nodeType&&(n=e),null==n)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return n},e.getElements=function(e,t){var n,i,o,r,s,a,l,u;if(e instanceof Array){o=[];try{for(r=0,a=e.length;a>r;r++)i=e[r],o.push(this.getElement(i,t))}catch(c){n=c,o=null}}else if("string"==typeof e)for(o=[],u=document.querySelectorAll(e),s=0,l=u.length;l>s;s++)i=u[s],o.push(i);else null!=e.nodeType&&(o=[e]);if(null==o||!o.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return o},e.confirm=function(e,t,n){return window.confirm(e)?t():null!=n?n():void 0},e.isValidFile=function(e,t){var n,i,o,r,s;if(!t)return!0;for(t=t.split(","),i=e.type,n=i.replace(/\/.*$/,""),r=0,s=t.length;s>r;r++)if(o=t[r],o=o.trim(),"."===o.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(o.toLowerCase(),e.name.length-o.length))return!0}else if(/\/\*$/.test(o)){if(n===o.replace(/\/.*$/,""))return!0}else if(i===o)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(t){return this.each(function(){return new e(this,t)})}),"undefined"!=typeof module&&null!==module?module.exports=e:window.Dropzone=e,e.ADDED="added",e.QUEUED="queued",e.ACCEPTED=e.QUEUED,e.UPLOADING="uploading",e.PROCESSING=e.UPLOADING,e.CANCELED="canceled",e.ERROR="error",e.SUCCESS="success",o=function(e){var t,n,i,o,r,s,a,l,u,c;for(a=e.naturalWidth,s=e.naturalHeight,n=document.createElement("canvas"),n.width=1,n.height=s,i=n.getContext("2d"),i.drawImage(e,0,0),o=i.getImageData(0,0,1,s).data,c=0,r=s,l=s;l>c;)t=o[4*(l-1)+3],0===t?r=l:c=l,l=r+c>>1;return u=l/s,0===u?1:u},r=function(e,t,n,i,r,s,a,l,u,c){var p;return p=o(t),e.drawImage(t,n,i,r,s,a,l,u,c/p)},i=function(e,t){var n,i,o,r,s,a,l,u,c;if(o=!1,c=!0,i=e.document,u=i.documentElement,n=i.addEventListener?"addEventListener":"attachEvent",l=i.addEventListener?"removeEventListener":"detachEvent",a=i.addEventListener?"":"on",r=function(n){return"readystatechange"!==n.type||"complete"===i.readyState?(("load"===n.type?e:i)[l](a+n.type,r,!1),!o&&(o=!0)?t.call(e,n.type||n):void 0):void 0},s=function(){var e;try{u.doScroll("left")}catch(t){return e=t,void setTimeout(s,50)}return r("poll")},"complete"!==i.readyState){if(i.createEventObject&&u.doScroll){try{c=!e.frameElement}catch(p){}c&&s()}return i[n](a+"DOMContentLoaded",r,!1),i[n](a+"readystatechange",r,!1),e[n](a+"load",r,!1)}},e._autoDiscoverFunction=function(){return e.autoDiscover?e.discover():void 0},i(window,e._autoDiscoverFunction)}.call(this),Dropzone.options.photoupload={maxFilesize:4,acceptedFiles:"image/*",dictDefaultMessage:"Fotos hier her ziehen, um sie hinzuzufügen"},function(){var e={initialize:function(){this.methodLinks=$("a[data-method]"),this.token=$("a[data-token]"),this.registerEvents()},registerEvents:function(){this.methodLinks.on("click",this.handleMethod)},handleMethod:function(t){var n,i=$(this),o=i.data("method").toUpperCase();if(-1!==$.inArray(o,["PUT","DELETE"])){if(i.data("confirm")&&!e.verifyConfirm(i))return!1;n=e.createForm(i),n.submit(),t.preventDefault()}},verifyConfirm:function(e){return confirm(e.data("confirm"))},createForm:function(e){var t=$("<form>",{method:"POST",action:e.attr("href")}),n=$("<input>",{type:"hidden",name:"_token",value:e.data("token")}),i=$("<input>",{name:"_method",type:"hidden",value:e.data("method")});return t.append(n,i).appendTo("body")}};e.initialize()}();
=======
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

(function() {
  var Dropzone, Emitter, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  noop = function() {};

  Emitter = (function() {
    function Emitter() {}

    Emitter.prototype.addEventListener = Emitter.prototype.on;

    Emitter.prototype.on = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }
      this._callbacks[event].push(fn);
      return this;
    };

    Emitter.prototype.emit = function() {
      var args, callback, callbacks, event, _i, _len;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      this._callbacks = this._callbacks || {};
      callbacks = this._callbacks[event];
      if (callbacks) {
        for (_i = 0, _len = callbacks.length; _i < _len; _i++) {
          callback = callbacks[_i];
          callback.apply(this, args);
        }
      }
      return this;
    };

    Emitter.prototype.removeListener = Emitter.prototype.off;

    Emitter.prototype.removeAllListeners = Emitter.prototype.off;

    Emitter.prototype.removeEventListener = Emitter.prototype.off;

    Emitter.prototype.off = function(event, fn) {
      var callback, callbacks, i, _i, _len;
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      }
      callbacks = this._callbacks[event];
      if (!callbacks) {
        return this;
      }
      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      }
      for (i = _i = 0, _len = callbacks.length; _i < _len; i = ++_i) {
        callback = callbacks[i];
        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      return this;
    };

    return Emitter;

  })();

  Dropzone = (function(_super) {
    var extend, resolveOption;

    __extends(Dropzone, _super);

    Dropzone.prototype.Emitter = Emitter;


    /*
    This is a list of all available events you can register on a dropzone object.
    
    You can register an event handler like this:
    
        dropzone.on("dragEnter", function() { });
     */

    Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

    Dropzone.prototype.defaultOptions = {
      url: null,
      method: "post",
      withCredentials: false,
      parallelUploads: 2,
      uploadMultiple: false,
      maxFilesize: 256,
      paramName: "file",
      createImageThumbnails: true,
      maxThumbnailFilesize: 10,
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      filesizeBase: 1000,
      maxFiles: null,
      params: {},
      clickable: true,
      ignoreHiddenFiles: true,
      acceptedFiles: null,
      acceptedMimeTypes: null,
      autoProcessQueue: true,
      autoQueue: true,
      addRemoveLinks: false,
      previewsContainer: null,
      hiddenInputContainer: "body",
      capture: null,
      dictDefaultMessage: "Drop files here to upload",
      dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
      dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
      dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
      dictInvalidFileType: "You can't upload files of this type.",
      dictResponseError: "Server responded with {{statusCode}} code.",
      dictCancelUpload: "Cancel upload",
      dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
      dictRemoveFile: "Remove file",
      dictRemoveFileConfirmation: null,
      dictMaxFilesExceeded: "You can not upload any more files.",
      accept: function(file, done) {
        return done();
      },
      init: function() {
        return noop;
      },
      forceFallback: false,
      fallback: function() {
        var child, messageElement, span, _i, _len, _ref;
        this.element.className = "" + this.element.className + " dz-browser-not-supported";
        _ref = this.element.getElementsByTagName("div");
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          child = _ref[_i];
          if (/(^| )dz-message($| )/.test(child.className)) {
            messageElement = child;
            child.className = "dz-message";
            continue;
          }
        }
        if (!messageElement) {
          messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
          this.element.appendChild(messageElement);
        }
        span = messageElement.getElementsByTagName("span")[0];
        if (span) {
          if (span.textContent != null) {
            span.textContent = this.options.dictFallbackMessage;
          } else if (span.innerText != null) {
            span.innerText = this.options.dictFallbackMessage;
          }
        }
        return this.element.appendChild(this.getFallbackForm());
      },
      resize: function(file) {
        var info, srcRatio, trgRatio;
        info = {
          srcX: 0,
          srcY: 0,
          srcWidth: file.width,
          srcHeight: file.height
        };
        srcRatio = file.width / file.height;
        info.optWidth = this.options.thumbnailWidth;
        info.optHeight = this.options.thumbnailHeight;
        if ((info.optWidth == null) && (info.optHeight == null)) {
          info.optWidth = info.srcWidth;
          info.optHeight = info.srcHeight;
        } else if (info.optWidth == null) {
          info.optWidth = srcRatio * info.optHeight;
        } else if (info.optHeight == null) {
          info.optHeight = (1 / srcRatio) * info.optWidth;
        }
        trgRatio = info.optWidth / info.optHeight;
        if (file.height < info.optHeight || file.width < info.optWidth) {
          info.trgHeight = info.srcHeight;
          info.trgWidth = info.srcWidth;
        } else {
          if (srcRatio > trgRatio) {
            info.srcHeight = file.height;
            info.srcWidth = info.srcHeight * trgRatio;
          } else {
            info.srcWidth = file.width;
            info.srcHeight = info.srcWidth / trgRatio;
          }
        }
        info.srcX = (file.width - info.srcWidth) / 2;
        info.srcY = (file.height - info.srcHeight) / 2;
        return info;
      },

      /*
      Those functions register themselves to the events on init and handle all
      the user interface specific stuff. Overwriting them won't break the upload
      but can break the way it's displayed.
      You can overwrite them if you don't like the default behavior. If you just
      want to add an additional event handler, register it on the dropzone object
      and don't overwrite those options.
       */
      drop: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragstart: noop,
      dragend: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragenter: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragover: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragleave: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      paste: noop,
      reset: function() {
        return this.element.classList.remove("dz-started");
      },
      addedfile: function(file) {
        var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
        if (this.element === this.previewsContainer) {
          this.element.classList.add("dz-started");
        }
        if (this.previewsContainer) {
          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
          file.previewTemplate = file.previewElement;
          this.previewsContainer.appendChild(file.previewElement);
          _ref = file.previewElement.querySelectorAll("[data-dz-name]");
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            node.textContent = file.name;
          }
          _ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            node = _ref1[_j];
            node.innerHTML = this.filesize(file.size);
          }
          if (this.options.addRemoveLinks) {
            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
            file.previewElement.appendChild(file._removeLink);
          }
          removeFileEvent = (function(_this) {
            return function(e) {
              e.preventDefault();
              e.stopPropagation();
              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                  return _this.removeFile(file);
                });
              } else {
                if (_this.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                    return _this.removeFile(file);
                  });
                } else {
                  return _this.removeFile(file);
                }
              }
            };
          })(this);
          _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
          _results = [];
          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
            removeLink = _ref2[_k];
            _results.push(removeLink.addEventListener("click", removeFileEvent));
          }
          return _results;
        }
      },
      removedfile: function(file) {
        var _ref;
        if (file.previewElement) {
          if ((_ref = file.previewElement) != null) {
            _ref.parentNode.removeChild(file.previewElement);
          }
        }
        return this._updateMaxFilesReachedClass();
      },
      thumbnail: function(file, dataUrl) {
        var thumbnailElement, _i, _len, _ref;
        if (file.previewElement) {
          file.previewElement.classList.remove("dz-file-preview");
          _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            thumbnailElement = _ref[_i];
            thumbnailElement.alt = file.name;
            thumbnailElement.src = dataUrl;
          }
          return setTimeout(((function(_this) {
            return function() {
              return file.previewElement.classList.add("dz-image-preview");
            };
          })(this)), 1);
        }
      },
      error: function(file, message) {
        var node, _i, _len, _ref, _results;
        if (file.previewElement) {
          file.previewElement.classList.add("dz-error");
          if (typeof message !== "String" && message.error) {
            message = message.error;
          }
          _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            _results.push(node.textContent = message);
          }
          return _results;
        }
      },
      errormultiple: noop,
      processing: function(file) {
        if (file.previewElement) {
          file.previewElement.classList.add("dz-processing");
          if (file._removeLink) {
            return file._removeLink.textContent = this.options.dictCancelUpload;
          }
        }
      },
      processingmultiple: noop,
      uploadprogress: function(file, progress, bytesSent) {
        var node, _i, _len, _ref, _results;
        if (file.previewElement) {
          _ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            if (node.nodeName === 'PROGRESS') {
              _results.push(node.value = progress);
            } else {
              _results.push(node.style.width = "" + progress + "%");
            }
          }
          return _results;
        }
      },
      totaluploadprogress: noop,
      sending: noop,
      sendingmultiple: noop,
      success: function(file) {
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-success");
        }
      },
      successmultiple: noop,
      canceled: function(file) {
        return this.emit("error", file, "Upload canceled.");
      },
      canceledmultiple: noop,
      complete: function(file) {
        if (file._removeLink) {
          file._removeLink.textContent = this.options.dictRemoveFile;
        }
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-complete");
        }
      },
      completemultiple: noop,
      maxfilesexceeded: noop,
      maxfilesreached: noop,
      queuecomplete: noop,
      addedfiles: noop,
      previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>"
    };

    extend = function() {
      var key, object, objects, target, val, _i, _len;
      target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      for (_i = 0, _len = objects.length; _i < _len; _i++) {
        object = objects[_i];
        for (key in object) {
          val = object[key];
          target[key] = val;
        }
      }
      return target;
    };

    function Dropzone(element, options) {
      var elementOptions, fallback, _ref;
      this.element = element;
      this.version = Dropzone.version;
      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
      this.clickableElements = [];
      this.listeners = [];
      this.files = [];
      if (typeof this.element === "string") {
        this.element = document.querySelector(this.element);
      }
      if (!(this.element && (this.element.nodeType != null))) {
        throw new Error("Invalid dropzone element.");
      }
      if (this.element.dropzone) {
        throw new Error("Dropzone already attached.");
      }
      Dropzone.instances.push(this);
      this.element.dropzone = this;
      elementOptions = (_ref = Dropzone.optionsForElement(this.element)) != null ? _ref : {};
      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
        return this.options.fallback.call(this);
      }
      if (this.options.url == null) {
        this.options.url = this.element.getAttribute("action");
      }
      if (!this.options.url) {
        throw new Error("No URL provided.");
      }
      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
      }
      if (this.options.acceptedMimeTypes) {
        this.options.acceptedFiles = this.options.acceptedMimeTypes;
        delete this.options.acceptedMimeTypes;
      }
      this.options.method = this.options.method.toUpperCase();
      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
        fallback.parentNode.removeChild(fallback);
      }
      if (this.options.previewsContainer !== false) {
        if (this.options.previewsContainer) {
          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
        } else {
          this.previewsContainer = this.element;
        }
      }
      if (this.options.clickable) {
        if (this.options.clickable === true) {
          this.clickableElements = [this.element];
        } else {
          this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
        }
      }
      this.init();
    }

    Dropzone.prototype.getAcceptedFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.accepted) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getRejectedFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (!file.accepted) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getFilesWithStatus = function(status) {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status === status) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getQueuedFiles = function() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    };

    Dropzone.prototype.getUploadingFiles = function() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    };

    Dropzone.prototype.getAddedFiles = function() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    };

    Dropzone.prototype.getActiveFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.init = function() {
      var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }
      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }
      if (this.clickableElements.length) {
        setupHiddenFileInput = (function(_this) {
          return function() {
            if (_this.hiddenFileInput) {
              _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
            }
            _this.hiddenFileInput = document.createElement("input");
            _this.hiddenFileInput.setAttribute("type", "file");
            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
              _this.hiddenFileInput.setAttribute("multiple", "multiple");
            }
            _this.hiddenFileInput.className = "dz-hidden-input";
            if (_this.options.acceptedFiles != null) {
              _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
            }
            if (_this.options.capture != null) {
              _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
            }
            _this.hiddenFileInput.style.visibility = "hidden";
            _this.hiddenFileInput.style.position = "absolute";
            _this.hiddenFileInput.style.top = "0";
            _this.hiddenFileInput.style.left = "0";
            _this.hiddenFileInput.style.height = "0";
            _this.hiddenFileInput.style.width = "0";
            document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
            return _this.hiddenFileInput.addEventListener("change", function() {
              var file, files, _i, _len;
              files = _this.hiddenFileInput.files;
              if (files.length) {
                for (_i = 0, _len = files.length; _i < _len; _i++) {
                  file = files[_i];
                  _this.addFile(file);
                }
              }
              _this.emit("addedfiles", files);
              return setupHiddenFileInput();
            });
          };
        })(this);
        setupHiddenFileInput();
      }
      this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;
      _ref1 = this.events;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        eventName = _ref1[_i];
        this.on(eventName, this.options[eventName]);
      }
      this.on("uploadprogress", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("removedfile", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("canceled", (function(_this) {
        return function(file) {
          return _this.emit("complete", file);
        };
      })(this));
      this.on("complete", (function(_this) {
        return function(file) {
          if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
            return setTimeout((function() {
              return _this.emit("queuecomplete");
            }), 0);
          }
        };
      })(this));
      noPropagation = function(e) {
        e.stopPropagation();
        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      };
      this.listeners = [
        {
          element: this.element,
          events: {
            "dragstart": (function(_this) {
              return function(e) {
                return _this.emit("dragstart", e);
              };
            })(this),
            "dragenter": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.emit("dragenter", e);
              };
            })(this),
            "dragover": (function(_this) {
              return function(e) {
                var efct;
                try {
                  efct = e.dataTransfer.effectAllowed;
                } catch (_error) {}
                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
                noPropagation(e);
                return _this.emit("dragover", e);
              };
            })(this),
            "dragleave": (function(_this) {
              return function(e) {
                return _this.emit("dragleave", e);
              };
            })(this),
            "drop": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.drop(e);
              };
            })(this),
            "dragend": (function(_this) {
              return function(e) {
                return _this.emit("dragend", e);
              };
            })(this)
          }
        }
      ];
      this.clickableElements.forEach((function(_this) {
        return function(clickableElement) {
          return _this.listeners.push({
            element: clickableElement,
            events: {
              "click": function(evt) {
                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                  _this.hiddenFileInput.click();
                }
                return true;
              }
            }
          });
        };
      })(this));
      this.enable();
      return this.options.init.call(this);
    };

    Dropzone.prototype.destroy = function() {
      var _ref;
      this.disable();
      this.removeAllFiles(true);
      if ((_ref = this.hiddenFileInput) != null ? _ref.parentNode : void 0) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }
      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    };

    Dropzone.prototype.updateTotalUploadProgress = function() {
      var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;
      totalBytesSent = 0;
      totalBytes = 0;
      activeFiles = this.getActiveFiles();
      if (activeFiles.length) {
        _ref = this.getActiveFiles();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          file = _ref[_i];
          totalBytesSent += file.upload.bytesSent;
          totalBytes += file.upload.total;
        }
        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }
      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    };

    Dropzone.prototype._getParamName = function(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
      }
    };

    Dropzone.prototype.getFallbackForm = function() {
      var existingFallback, fields, fieldsString, form;
      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }
      fieldsString = "<div class=\"dz-fallback\">";
      if (this.options.dictFallbackText) {
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
      }
      fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
      fields = Dropzone.createElement(fieldsString);
      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);
      } else {
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }
      return form != null ? form : fields;
    };

    Dropzone.prototype.getExistingFallback = function() {
      var fallback, getFallback, tagName, _i, _len, _ref;
      getFallback = function(elements) {
        var el, _i, _len;
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          el = elements[_i];
          if (/(^| )fallback($| )/.test(el.className)) {
            return el;
          }
        }
      };
      _ref = ["div", "form"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tagName = _ref[_i];
        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    };

    Dropzone.prototype.setupEventListeners = function() {
      var elementListeners, event, listener, _i, _len, _ref, _results;
      _ref = this.listeners;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elementListeners = _ref[_i];
        _results.push((function() {
          var _ref1, _results1;
          _ref1 = elementListeners.events;
          _results1 = [];
          for (event in _ref1) {
            listener = _ref1[event];
            _results1.push(elementListeners.element.addEventListener(event, listener, false));
          }
          return _results1;
        })());
      }
      return _results;
    };

    Dropzone.prototype.removeEventListeners = function() {
      var elementListeners, event, listener, _i, _len, _ref, _results;
      _ref = this.listeners;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elementListeners = _ref[_i];
        _results.push((function() {
          var _ref1, _results1;
          _ref1 = elementListeners.events;
          _results1 = [];
          for (event in _ref1) {
            listener = _ref1[event];
            _results1.push(elementListeners.element.removeEventListener(event, listener, false));
          }
          return _results1;
        })());
      }
      return _results;
    };

    Dropzone.prototype.disable = function() {
      var file, _i, _len, _ref, _results;
      this.clickableElements.forEach(function(element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        _results.push(this.cancelUpload(file));
      }
      return _results;
    };

    Dropzone.prototype.enable = function() {
      this.clickableElements.forEach(function(element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    };

    Dropzone.prototype.filesize = function(size) {
      var cutoff, i, selectedSize, selectedUnit, unit, units, _i, _len;
      selectedSize = 0;
      selectedUnit = "b";
      if (size > 0) {
        units = ['TB', 'GB', 'MB', 'KB', 'b'];
        for (i = _i = 0, _len = units.length; _i < _len; i = ++_i) {
          unit = units[i];
          cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }
        selectedSize = Math.round(10 * selectedSize) / 10;
      }
      return "<strong>" + selectedSize + "</strong> " + selectedUnit;
    };

    Dropzone.prototype._updateMaxFilesReachedClass = function() {
      if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }
        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    };

    Dropzone.prototype.drop = function(e) {
      var files, items;
      if (!e.dataTransfer) {
        return;
      }
      this.emit("drop", e);
      files = e.dataTransfer.files;
      this.emit("addedfiles", files);
      if (files.length) {
        items = e.dataTransfer.items;
        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }
    };

    Dropzone.prototype.paste = function(e) {
      var items, _ref;
      if ((e != null ? (_ref = e.clipboardData) != null ? _ref.items : void 0 : void 0) == null) {
        return;
      }
      this.emit("paste", e);
      items = e.clipboardData.items;
      if (items.length) {
        return this._addFilesFromItems(items);
      }
    };

    Dropzone.prototype.handleFiles = function(files) {
      var file, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        _results.push(this.addFile(file));
      }
      return _results;
    };

    Dropzone.prototype._addFilesFromItems = function(items) {
      var entry, item, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
          if (entry.isFile) {
            _results.push(this.addFile(item.getAsFile()));
          } else if (entry.isDirectory) {
            _results.push(this._addFilesFromDirectory(entry, entry.name));
          } else {
            _results.push(void 0);
          }
        } else if (item.getAsFile != null) {
          if ((item.kind == null) || item.kind === "file") {
            _results.push(this.addFile(item.getAsFile()));
          } else {
            _results.push(void 0);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
      var dirReader, entriesReader;
      dirReader = directory.createReader();
      entriesReader = (function(_this) {
        return function(entries) {
          var entry, _i, _len;
          for (_i = 0, _len = entries.length; _i < _len; _i++) {
            entry = entries[_i];
            if (entry.isFile) {
              entry.file(function(file) {
                if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                  return;
                }
                file.fullPath = "" + path + "/" + file.name;
                return _this.addFile(file);
              });
            } else if (entry.isDirectory) {
              _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);
            }
          }
        };
      })(this);
      return dirReader.readEntries(entriesReader, function(error) {
        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
      });
    };

    Dropzone.prototype.accept = function(file, done) {
      if (file.size > this.options.maxFilesize * 1024 * 1024) {
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        return done(this.options.dictInvalidFileType);
      } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        return this.emit("maxfilesexceeded", file);
      } else {
        return this.options.accept.call(this, file, done);
      }
    };

    Dropzone.prototype.addFile = function(file) {
      file.upload = {
        progress: 0,
        total: file.size,
        bytesSent: 0
      };
      this.files.push(file);
      file.status = Dropzone.ADDED;
      this.emit("addedfile", file);
      this._enqueueThumbnail(file);
      return this.accept(file, (function(_this) {
        return function(error) {
          if (error) {
            file.accepted = false;
            _this._errorProcessing([file], error);
          } else {
            file.accepted = true;
            if (_this.options.autoQueue) {
              _this.enqueueFile(file);
            }
          }
          return _this._updateMaxFilesReachedClass();
        };
      })(this));
    };

    Dropzone.prototype.enqueueFiles = function(files) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        this.enqueueFile(file);
      }
      return null;
    };

    Dropzone.prototype.enqueueFile = function(file) {
      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;
        if (this.options.autoProcessQueue) {
          return setTimeout(((function(_this) {
            return function() {
              return _this.processQueue();
            };
          })(this)), 0);
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    };

    Dropzone.prototype._thumbnailQueue = [];

    Dropzone.prototype._processingThumbnail = false;

    Dropzone.prototype._enqueueThumbnail = function(file) {
      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);
        return setTimeout(((function(_this) {
          return function() {
            return _this._processThumbnailQueue();
          };
        })(this)), 0);
      }
    };

    Dropzone.prototype._processThumbnailQueue = function() {
      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }
      this._processingThumbnail = true;
      return this.createThumbnail(this._thumbnailQueue.shift(), (function(_this) {
        return function() {
          _this._processingThumbnail = false;
          return _this._processThumbnailQueue();
        };
      })(this));
    };

    Dropzone.prototype.removeFile = function(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }
      this.files = without(this.files, file);
      this.emit("removedfile", file);
      if (this.files.length === 0) {
        return this.emit("reset");
      }
    };

    Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
      var file, _i, _len, _ref;
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }
      _ref = this.files.slice();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
          this.removeFile(file);
        }
      }
      return null;
    };

    Dropzone.prototype.createThumbnail = function(file, callback) {
      var fileReader;
      fileReader = new FileReader;
      fileReader.onload = (function(_this) {
        return function() {
          if (file.type === "image/svg+xml") {
            _this.emit("thumbnail", file, fileReader.result);
            if (callback != null) {
              callback();
            }
            return;
          }
          return _this.createThumbnailFromUrl(file, fileReader.result, callback);
        };
      })(this);
      return fileReader.readAsDataURL(file);
    };

    Dropzone.prototype.createThumbnailFromUrl = function(file, imageUrl, callback, crossOrigin) {
      var img;
      img = document.createElement("img");
      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }
      img.onload = (function(_this) {
        return function() {
          var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
          file.width = img.width;
          file.height = img.height;
          resizeInfo = _this.options.resize.call(_this, file);
          if (resizeInfo.trgWidth == null) {
            resizeInfo.trgWidth = resizeInfo.optWidth;
          }
          if (resizeInfo.trgHeight == null) {
            resizeInfo.trgHeight = resizeInfo.optHeight;
          }
          canvas = document.createElement("canvas");
          ctx = canvas.getContext("2d");
          canvas.width = resizeInfo.trgWidth;
          canvas.height = resizeInfo.trgHeight;
          drawImageIOSFix(ctx, img, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
          thumbnail = canvas.toDataURL("image/png");
          _this.emit("thumbnail", file, thumbnail);
          if (callback != null) {
            return callback();
          }
        };
      })(this);
      if (callback != null) {
        img.onerror = callback;
      }
      return img.src = imageUrl;
    };

    Dropzone.prototype.processQueue = function() {
      var i, parallelUploads, processingLength, queuedFiles;
      parallelUploads = this.options.parallelUploads;
      processingLength = this.getUploadingFiles().length;
      i = processingLength;
      if (processingLength >= parallelUploads) {
        return;
      }
      queuedFiles = this.getQueuedFiles();
      if (!(queuedFiles.length > 0)) {
        return;
      }
      if (this.options.uploadMultiple) {
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          }
          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    };

    Dropzone.prototype.processFile = function(file) {
      return this.processFiles([file]);
    };

    Dropzone.prototype.processFiles = function(files) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.processing = true;
        file.status = Dropzone.UPLOADING;
        this.emit("processing", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }
      return this.uploadFiles(files);
    };

    Dropzone.prototype._getFilesWithXhr = function(xhr) {
      var file, files;
      return files = (function() {
        var _i, _len, _ref, _results;
        _ref = this.files;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          file = _ref[_i];
          if (file.xhr === xhr) {
            _results.push(file);
          }
        }
        return _results;
      }).call(this);
    };

    Dropzone.prototype.cancelUpload = function(file) {
      var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;
      if (file.status === Dropzone.UPLOADING) {
        groupedFiles = this._getFilesWithXhr(file.xhr);
        for (_i = 0, _len = groupedFiles.length; _i < _len; _i++) {
          groupedFile = groupedFiles[_i];
          groupedFile.status = Dropzone.CANCELED;
        }
        file.xhr.abort();
        for (_j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) {
          groupedFile = groupedFiles[_j];
          this.emit("canceled", groupedFile);
        }
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if ((_ref = file.status) === Dropzone.ADDED || _ref === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    resolveOption = function() {
      var args, option;
      option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (typeof option === 'function') {
        return option.apply(this, args);
      }
      return option;
    };

    Dropzone.prototype.uploadFile = function(file) {
      return this.uploadFiles([file]);
    };

    Dropzone.prototype.uploadFiles = function(files) {
      var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, method, option, progressObj, response, updateProgress, url, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      xhr = new XMLHttpRequest();
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.xhr = xhr;
      }
      method = resolveOption(this.options.method, files);
      url = resolveOption(this.options.url, files);
      xhr.open(method, url, true);
      xhr.withCredentials = !!this.options.withCredentials;
      response = null;
      handleError = (function(_this) {
        return function() {
          var _j, _len1, _results;
          _results = [];
          for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
            file = files[_j];
            _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
          }
          return _results;
        };
      })(this);
      updateProgress = (function(_this) {
        return function(e) {
          var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;
          if (e != null) {
            progress = 100 * e.loaded / e.total;
            for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
              file = files[_j];
              file.upload = {
                progress: progress,
                total: e.total,
                bytesSent: e.loaded
              };
            }
          } else {
            allFilesFinished = true;
            progress = 100;
            for (_k = 0, _len2 = files.length; _k < _len2; _k++) {
              file = files[_k];
              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
                allFilesFinished = false;
              }
              file.upload.progress = progress;
              file.upload.bytesSent = file.upload.total;
            }
            if (allFilesFinished) {
              return;
            }
          }
          _results = [];
          for (_l = 0, _len3 = files.length; _l < _len3; _l++) {
            file = files[_l];
            _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
          }
          return _results;
        };
      })(this);
      xhr.onload = (function(_this) {
        return function(e) {
          var _ref;
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          if (xhr.readyState !== 4) {
            return;
          }
          response = xhr.responseText;
          if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
            try {
              response = JSON.parse(response);
            } catch (_error) {
              e = _error;
              response = "Invalid JSON response from server.";
            }
          }
          updateProgress();
          if (!((200 <= (_ref = xhr.status) && _ref < 300))) {
            return handleError();
          } else {
            return _this._finished(files, response, e);
          }
        };
      })(this);
      xhr.onerror = (function(_this) {
        return function() {
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          return handleError();
        };
      })(this);
      progressObj = (_ref = xhr.upload) != null ? _ref : xhr;
      progressObj.onprogress = updateProgress;
      headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };
      if (this.options.headers) {
        extend(headers, this.options.headers);
      }
      for (headerName in headers) {
        headerValue = headers[headerName];
        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }
      formData = new FormData();
      if (this.options.params) {
        _ref1 = this.options.params;
        for (key in _ref1) {
          value = _ref1[key];
          formData.append(key, value);
        }
      }
      for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
        file = files[_j];
        this.emit("sending", file, xhr, formData);
      }
      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }
      if (this.element.tagName === "FORM") {
        _ref2 = this.element.querySelectorAll("input, textarea, select, button");
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          input = _ref2[_k];
          inputName = input.getAttribute("name");
          inputType = input.getAttribute("type");
          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
            _ref3 = input.options;
            for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
              option = _ref3[_l];
              if (option.selected) {
                formData.append(inputName, option.value);
              }
            }
          } else if (!inputType || ((_ref4 = inputType.toLowerCase()) !== "checkbox" && _ref4 !== "radio") || input.checked) {
            formData.append(inputName, input.value);
          }
        }
      }
      for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) {
        formData.append(this._getParamName(i), files[i], files[i].name);
      }
      return this.submitRequest(xhr, formData, files);
    };

    Dropzone.prototype.submitRequest = function(xhr, formData, files) {
      return xhr.send(formData);
    };

    Dropzone.prototype._finished = function(files, responseText, e) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.status = Dropzone.SUCCESS;
        this.emit("success", file, responseText, e);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    Dropzone.prototype._errorProcessing = function(files, message, xhr) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.status = Dropzone.ERROR;
        this.emit("error", file, message, xhr);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    return Dropzone;

  })(Emitter);

  Dropzone.version = "4.2.0";

  Dropzone.options = {};

  Dropzone.optionsForElement = function(element) {
    if (element.getAttribute("id")) {
      return Dropzone.options[camelize(element.getAttribute("id"))];
    } else {
      return void 0;
    }
  };

  Dropzone.instances = [];

  Dropzone.forElement = function(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if ((element != null ? element.dropzone : void 0) == null) {
      throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    }
    return element.dropzone;
  };

  Dropzone.autoDiscover = true;

  Dropzone.discover = function() {
    var checkElements, dropzone, dropzones, _i, _len, _results;
    if (document.querySelectorAll) {
      dropzones = document.querySelectorAll(".dropzone");
    } else {
      dropzones = [];
      checkElements = function(elements) {
        var el, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          el = elements[_i];
          if (/(^| )dropzone($| )/.test(el.className)) {
            _results.push(dropzones.push(el));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };
      checkElements(document.getElementsByTagName("div"));
      checkElements(document.getElementsByTagName("form"));
    }
    _results = [];
    for (_i = 0, _len = dropzones.length; _i < _len; _i++) {
      dropzone = dropzones[_i];
      if (Dropzone.optionsForElement(dropzone) !== false) {
        _results.push(new Dropzone(dropzone));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

  Dropzone.isBrowserSupported = function() {
    var capableBrowser, regex, _i, _len, _ref;
    capableBrowser = true;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
      if (!("classList" in document.createElement("a"))) {
        capableBrowser = false;
      } else {
        _ref = Dropzone.blacklistedBrowsers;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          regex = _ref[_i];
          if (regex.test(navigator.userAgent)) {
            capableBrowser = false;
            continue;
          }
        }
      }
    } else {
      capableBrowser = false;
    }
    return capableBrowser;
  };

  without = function(list, rejectedItem) {
    var item, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      item = list[_i];
      if (item !== rejectedItem) {
        _results.push(item);
      }
    }
    return _results;
  };

  camelize = function(str) {
    return str.replace(/[\-_](\w)/g, function(match) {
      return match.charAt(1).toUpperCase();
    });
  };

  Dropzone.createElement = function(string) {
    var div;
    div = document.createElement("div");
    div.innerHTML = string;
    return div.childNodes[0];
  };

  Dropzone.elementInside = function(element, container) {
    if (element === container) {
      return true;
    }
    while (element = element.parentNode) {
      if (element === container) {
        return true;
      }
    }
    return false;
  };

  Dropzone.getElement = function(el, name) {
    var element;
    if (typeof el === "string") {
      element = document.querySelector(el);
    } else if (el.nodeType != null) {
      element = el;
    }
    if (element == null) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
    }
    return element;
  };

  Dropzone.getElements = function(els, name) {
    var e, el, elements, _i, _j, _len, _len1, _ref;
    if (els instanceof Array) {
      elements = [];
      try {
        for (_i = 0, _len = els.length; _i < _len; _i++) {
          el = els[_i];
          elements.push(this.getElement(el, name));
        }
      } catch (_error) {
        e = _error;
        elements = null;
      }
    } else if (typeof els === "string") {
      elements = [];
      _ref = document.querySelectorAll(els);
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        el = _ref[_j];
        elements.push(el);
      }
    } else if (els.nodeType != null) {
      elements = [els];
    }
    if (!((elements != null) && elements.length)) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
    }
    return elements;
  };

  Dropzone.confirm = function(question, accepted, rejected) {
    if (window.confirm(question)) {
      return accepted();
    } else if (rejected != null) {
      return rejected();
    }
  };

  Dropzone.isValidFile = function(file, acceptedFiles) {
    var baseMimeType, mimeType, validType, _i, _len;
    if (!acceptedFiles) {
      return true;
    }
    acceptedFiles = acceptedFiles.split(",");
    mimeType = file.type;
    baseMimeType = mimeType.replace(/\/.*$/, "");
    for (_i = 0, _len = acceptedFiles.length; _i < _len; _i++) {
      validType = acceptedFiles[_i];
      validType = validType.trim();
      if (validType.charAt(0) === ".") {
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
          return true;
        }
      } else if (/\/\*$/.test(validType)) {
        if (baseMimeType === validType.replace(/\/.*$/, "")) {
          return true;
        }
      } else {
        if (mimeType === validType) {
          return true;
        }
      }
    }
    return false;
  };

  if (typeof jQuery !== "undefined" && jQuery !== null) {
    jQuery.fn.dropzone = function(options) {
      return this.each(function() {
        return new Dropzone(this, options);
      });
    };
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Dropzone;
  } else {
    window.Dropzone = Dropzone;
  }

  Dropzone.ADDED = "added";

  Dropzone.QUEUED = "queued";

  Dropzone.ACCEPTED = Dropzone.QUEUED;

  Dropzone.UPLOADING = "uploading";

  Dropzone.PROCESSING = Dropzone.UPLOADING;

  Dropzone.CANCELED = "canceled";

  Dropzone.ERROR = "error";

  Dropzone.SUCCESS = "success";


  /*
  
  Bugfix for iOS 6 and 7
  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
  based on the work of https://github.com/stomita/ios-imagefile-megapixel
   */

  detectVerticalSquash = function(img) {
    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
    iw = img.naturalWidth;
    ih = img.naturalHeight;
    canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = ih;
    ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    data = ctx.getImageData(0, 0, 1, ih).data;
    sy = 0;
    ey = ih;
    py = ih;
    while (py > sy) {
      alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
        ey = py;
      } else {
        sy = py;
      }
      py = (ey + sy) >> 1;
    }
    ratio = py / ih;
    if (ratio === 0) {
      return 1;
    } else {
      return ratio;
    }
  };

  drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    var vertSquashRatio;
    vertSquashRatio = detectVerticalSquash(img);
    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
  };


  /*
   * contentloaded.js
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   */

  contentLoaded = function(win, fn) {
    var add, doc, done, init, poll, pre, rem, root, top;
    done = false;
    top = true;
    doc = win.document;
    root = doc.documentElement;
    add = (doc.addEventListener ? "addEventListener" : "attachEvent");
    rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
    pre = (doc.addEventListener ? "" : "on");
    init = function(e) {
      if (e.type === "readystatechange" && doc.readyState !== "complete") {
        return;
      }
      (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
      if (!done && (done = true)) {
        return fn.call(win, e.type || e);
      }
    };
    poll = function() {
      var e;
      try {
        root.doScroll("left");
      } catch (_error) {
        e = _error;
        setTimeout(poll, 50);
        return;
      }
      return init("poll");
    };
    if (doc.readyState !== "complete") {
      if (doc.createEventObject && root.doScroll) {
        try {
          top = !win.frameElement;
        } catch (_error) {}
        if (top) {
          poll();
        }
      }
      doc[add](pre + "DOMContentLoaded", init, false);
      doc[add](pre + "readystatechange", init, false);
      return win[add](pre + "load", init, false);
    }
  };

  Dropzone._autoDiscoverFunction = function() {
    if (Dropzone.autoDiscover) {
      return Dropzone.discover();
    }
  };

  contentLoaded(window, Dropzone._autoDiscoverFunction);

}).call(this);

/*
Exemples : 
<a href="posts/2" data-method="delete" data-token="{{csrf_token()}}"> 
- Or, request confirmation in the process -
<a href="posts/2" data-method="delete" data-token="{{csrf_token()}}" data-confirm="Are you sure?">
*/


(function() {
 
  laravel = {
    initialize: function() {
      this.methodLinks = $('a[data-method]');
      this.token = $('a[data-token]');
      this.registerEvents();
    },
 
    registerEvents: function() {
      this.methodLinks.on('click', this.handleMethod);
    },
 
    handleMethod: function(e) {
      var link = $(this);
      var httpMethod = link.data('method').toUpperCase();
      var form;
 
      // If the data-method attribute is not PUT or DELETE,
      // then we don't know what to do. Just ignore.
      if ( $.inArray(httpMethod, ['PUT', 'DELETE']) === - 1 ) {
        return;
      }
 
      // Allow user to optionally provide data-confirm="Are you sure?"
      if ( link.data('confirm') ) {
        if ( ! laravel.verifyConfirm(link) ) {
          return false;
        }
      }
 
      form = laravel.createForm(link);
      form.submit();
 
      e.preventDefault();
    },
 
    verifyConfirm: function(link) {
      return confirm(link.data('confirm'));
    },
 
    createForm: function(link) {
      var form = 
      $('<form>', {
        'method': 'POST',
        'action': link.attr('href')
      });
 
      var token = 
      $('<input>', {
        'type': 'hidden',
        'name': '_token',
        'value': link.data('token')
        });
 
      var hiddenInput =
      $('<input>', {
        'name': '_method',
        'type': 'hidden',
        'value': link.data('method')
      });
 
      return form.append(token, hiddenInput)
                 .appendTo('body');
    }
  };
  
})();
/*************************
 * Croppie
 * Copyright 2016
 * Foliotek
 * Version: 2.0.1
 *************************/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports);
    } else {
        // Browser globals
        factory((root.commonJsStrict = {}));
    }
}(this, function (exports) {

    if (typeof Promise !== 'function') {
        /*! promise-polyfill 3.1.0 */
        !function(a){function b(a,b){return function(){a.apply(b,arguments)}}function c(a){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof a)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],i(a,b(e,this),b(f,this))}function d(a){var b=this;return null===this._state?void this._deferreds.push(a):void k(function(){var c=b._state?a.onFulfilled:a.onRejected;if(null===c)return void(b._state?a.resolve:a.reject)(b._value);var d;try{d=c(b._value)}catch(e){return void a.reject(e)}a.resolve(d)})}function e(a){try{if(a===this)throw new TypeError("A promise cannot be resolved with itself.");if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void i(b(c,a),b(e,this),b(f,this))}this._state=!0,this._value=a,g.call(this)}catch(d){f.call(this,d)}}function f(a){this._state=!1,this._value=a,g.call(this)}function g(){for(var a=0,b=this._deferreds.length;b>a;a++)d.call(this,this._deferreds[a]);this._deferreds=null}function h(a,b,c,d){this.onFulfilled="function"==typeof a?a:null,this.onRejected="function"==typeof b?b:null,this.resolve=c,this.reject=d}function i(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(e){if(d)return;d=!0,c(e)}}var j=setTimeout,k="function"==typeof setImmediate&&setImmediate||function(a){j(a,1)},l=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};c.prototype["catch"]=function(a){return this.then(null,a)},c.prototype.then=function(a,b){var e=this;return new c(function(c,f){d.call(e,new h(a,b,c,f))})},c.all=function(){var a=Array.prototype.slice.call(1===arguments.length&&l(arguments[0])?arguments[0]:arguments);return new c(function(b,c){function d(f,g){try{if(g&&("object"==typeof g||"function"==typeof g)){var h=g.then;if("function"==typeof h)return void h.call(g,function(a){d(f,a)},c)}a[f]=g,0===--e&&b(a)}catch(i){c(i)}}if(0===a.length)return b([]);for(var e=a.length,f=0;f<a.length;f++)d(f,a[f])})},c.resolve=function(a){return a&&"object"==typeof a&&a.constructor===c?a:new c(function(b){b(a)})},c.reject=function(a){return new c(function(b,c){c(a)})},c.race=function(a){return new c(function(b,c){for(var d=0,e=a.length;e>d;d++)a[d].then(b,c)})},c._setImmediateFn=function(a){k=a},"undefined"!=typeof module&&module.exports?module.exports=c:a.Promise||(a.Promise=c)}(this);
    }

    var cssPrefixes = ['Webkit', 'Moz', 'ms'],
        emptyStyles = document.createElement('div').style,
        CSS_TRANS_ORG,
        CSS_TRANSFORM,
        CSS_USERSELECT;

    function vendorPrefix(prop) {
        if (prop in emptyStyles) {
            return prop;
        }

        var capProp = prop[0].toUpperCase() + prop.slice(1),
            i = cssPrefixes.length;

        while (i--) {
            prop = cssPrefixes[i] + capProp;
            if (prop in emptyStyles) {
                return prop;
            }
        }
    }

    CSS_TRANSFORM = vendorPrefix('transform');
    CSS_TRANS_ORG = vendorPrefix('transformOrigin');
    CSS_USERSELECT = vendorPrefix('userSelect');

    // Credits to : Andrew Dupont - http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    function deepExtend(destination, source) {
        destination = destination || {};
        for (var property in source) {
            if (source[property] && source[property].constructor && source[property].constructor === Object) {
                destination[property] = destination[property] || {};
                arguments.callee(destination[property], source[property]);
            } else {
                destination[property] = source[property];
            }
        }
        return destination;
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function dispatchChange(element) {
        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            element.dispatchEvent(evt);
        }
        else {
            element.fireEvent("onchange");
        }
    }

    //http://jsperf.com/vanilla-css
    function css(el, styles, val) {
        if (typeof (styles) === 'string') {
            var tmp = styles;
            styles = {};
            styles[tmp] = val;
        }

        for (var prop in styles) {
            el.style[prop] = styles[prop];
        }
    }

    function addClass(el, c) {
        if (el.classList) {
            el.classList.add(c);
        }
        else {
            el.className += ' ' + c;
        }
    }

    function removeClass(el, c) {
        if (el.classList) {
            el.classList.remove(c);
        }
        else {
            el.className = el.className.replace(c, '');
        }
    }

    /* Utilities */
    function loadImage(src, imageEl) {
        var img = imageEl || new Image(),
            prom;

        prom = new Promise(function (resolve, reject) {
            if (src.substring(0,4).toLowerCase() === 'http') {
                img.setAttribute('crossOrigin', 'anonymous');
            }
            img.onload = function () {
                setTimeout(function () {
                    resolve(img);
                }, 1);
            };
        });

        img.style.opacity = 0;
        img.src = src;
        return prom;
    }

    /* CSS Transform Prototype */
    var _TRANSLATE = 'translate3d',
        _TRANSLATE_SUFFIX = ', 0px';
    var Transform = function (x, y, scale) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.scale = parseFloat(scale);
    };

    Transform.parse = function (v) {
        if (v.style) {
            return Transform.parse(v.style[CSS_TRANSFORM]);
        }
        else if (v.indexOf('matrix') > -1 || v.indexOf('none') > -1) {
            return Transform.fromMatrix(v);
        }
        else {
            return Transform.fromString(v);
        }
    };

    Transform.fromMatrix = function (v) {
        var vals = v.substring(7).split(',');
        if (!vals.length || v === 'none') {
            vals = [1, 0, 0, 1, 0, 0];
        }

        return new Transform(parseInt(vals[4], 10), parseInt(vals[5], 10), parseFloat(vals[0]));
    };

    Transform.fromString = function (v) {
        var values = v.split(') '),
            translate = values[0].substring(_TRANSLATE.length + 1).split(','),
            scale = values.length > 1 ? values[1].substring(6) : 1,
            x = translate.length > 1 ? translate[0] : 0,
            y = translate.length > 1 ? translate[1] : 0;

        return new Transform(x, y, scale);
    };

    Transform.prototype.toString = function () {
        return _TRANSLATE + '(' + this.x + 'px, ' + this.y + 'px' + _TRANSLATE_SUFFIX + ') scale(' + this.scale + ')';
    };

    var TransformOrigin = function (el) {
        if (!el || !el.style[CSS_TRANS_ORG]) {
            this.x = 0;
            this.y = 0;
            return;
        }
        var css = el.style[CSS_TRANS_ORG].split(' ');
        this.x = parseFloat(css[0]);
        this.y = parseFloat(css[1]);
    };

    TransformOrigin.prototype.toString = function () {
        return this.x + 'px ' + this.y + 'px';
    };

    function getExifOrientation (img, cb) {
        if (!window.EXIF) {
            cb(0);
        }

        EXIF.getData(img, function () { 
            var orientation = EXIF.getTag(this, 'Orientation');
            cb(orientation);            
        });
    }

    function rotateCanvas(canvas, ctx, img, orientation) {
        var width = img.width,
            height = img.height;

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.save();
      switch (orientation) {
          case 2:
             ctx.translate(width, 0);
             ctx.scale(-1, 1);
             break;

          case 3:
              ctx.translate(width, height);
              ctx.rotate(180*Math.PI/180);
              break;

          case 4:
              ctx.translate(0, height);
              ctx.scale(1, -1);
              break;

          case 5:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(90*Math.PI/180);
              ctx.scale(1, -1);
              break;

          case 6:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(90*Math.PI/180);
              ctx.translate(0, -height);
              break;

          case 7:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(-90*Math.PI/180);
              ctx.translate(-width, height);
              ctx.scale(1, -1);
              break;

          case 8:
              canvas.width = height;
              canvas.height = width;
              ctx.translate(0, width);
              ctx.rotate(-90*Math.PI/180);
              break;
        }
        ctx.drawImage(img, 0,0, width, height);
        ctx.restore();
    }

    /* Private Methods */
    function _create() {
        var self = this,
            contClass = 'croppie-container',
            customViewportClass = self.options.viewport.type ? 'cr-vp-' + self.options.viewport.type : null,
            boundary, img, viewport, overlay, canvas;

        self.options.useCanvas = self.options.exif && window.EXIF;
        // Properties on class
        self.data = {};
        self.elements = {};

        // Generating Markup
        boundary = self.elements.boundary = document.createElement('div');
        viewport = self.elements.viewport = document.createElement('div');
        img = self.elements.img = document.createElement('img');
        overlay = self.elements.overlay = document.createElement('div');

        if (self.options.useCanvas) {
            self.elements.canvas = document.createElement('canvas');
            self.elements.preview = self.elements.canvas;
        }
        else {
            self.elements.preview = self.elements.img;
        }

        addClass(boundary, 'cr-boundary');
        css(boundary, {
            width: self.options.boundary.width + 'px',
            height: self.options.boundary.height + 'px'
        });

        addClass(viewport, 'cr-viewport');
        if (customViewportClass) {
            addClass(viewport, customViewportClass);
        }
        css(viewport, {
            width: self.options.viewport.width + 'px',
            height: self.options.viewport.height + 'px'
        });

        addClass(self.elements.preview, 'cr-image');
        addClass(overlay, 'cr-overlay');

        self.element.appendChild(boundary);
        boundary.appendChild(self.elements.preview);
        boundary.appendChild(viewport);
        boundary.appendChild(overlay);

        addClass(self.element, contClass);
        if (self.options.customClass) {
            addClass(self.element, self.options.customClass);
        }

        // Initialize drag & zoom
        _initDraggable.call(this);

        if (self.options.enableZoom) {
            _initializeZoom.call(self);
        }
    }

    function _setZoomerVal(v) {
        if (this.options.enableZoom) {
            this.elements.zoomer.value = fix(v, 4);
        }
    }

    function _initializeZoom() {
        var self = this,
            wrap = self.elements.zoomerWrap = document.createElement('div'),
            zoomer = self.elements.zoomer = document.createElement('input'),
            origin,
            viewportRect,
            transform;

        addClass(wrap, 'cr-slider-wrap');
        addClass(zoomer, 'cr-slider');
        zoomer.type = 'range';
        zoomer.step = '0.01';
        zoomer.value = 1;
        zoomer.style.display = self.options.showZoomer ? '' : 'none';

        self.element.appendChild(wrap);
        wrap.appendChild(zoomer);

        self._currentZoom = 1;
        function start() {
            _updateCenterPoint.call(self);
            origin = new TransformOrigin(self.elements.preview);
            viewportRect = self.elements.viewport.getBoundingClientRect();
            transform = Transform.parse(self.elements.preview);
        }

        function change() {
            _onZoom.call(self, {
                value: parseFloat(zoomer.value),
                origin: origin || new TransformOrigin(self.elements.preview),
                viewportRect: viewportRect || self.elements.viewport.getBoundingClientRect(),
                transform: transform || Transform.parse(self.elements.preview)
            });
        }

        function scroll(ev) {
            var delta, targetZoom;

            if (ev.wheelDelta) {
                delta = ev.wheelDelta / 1200; //wheelDelta min: -120 max: 120 // max x 10 x 2
            } else if (ev.deltaY) {
                delta = ev.deltaY / 1060; //deltaY min: -53 max: 53 // max x 10 x 2
            } else if (ev.detail) {
                delta = ev.detail / 60; //delta min: -3 max: 3 // max x 10 x 2
            } else {
                delta = 0;
            }

            targetZoom = self._currentZoom + delta;

            ev.preventDefault();
            start();
            _setZoomerVal.call(self, targetZoom);
            change();
        }

        self.elements.zoomer.addEventListener('mousedown', start);
        self.elements.zoomer.addEventListener('touchstart', start);

        self.elements.zoomer.addEventListener('input', change);// this is being fired twice on keypress
        self.elements.zoomer.addEventListener('change', change);

        if (self.options.mouseWheelZoom) {
            self.elements.boundary.addEventListener('mousewheel', scroll);
            self.elements.boundary.addEventListener('DOMMouseScroll', scroll);
        }
    }

    function _onZoom(ui) {
        var self = this,
            transform = ui.transform,
            vpRect = ui.viewportRect,
            origin = ui.origin;

        self._currentZoom = ui.value;
        transform.scale = self._currentZoom;

        var boundaries = _getVirtualBoundaries.call(self, vpRect),
            transBoundaries = boundaries.translate,
            oBoundaries = boundaries.origin;

        if (transform.x >= transBoundaries.maxX) {
            origin.x = oBoundaries.minX;
            transform.x = transBoundaries.maxX;
        }

        if (transform.x <= transBoundaries.minX) {
            origin.x = oBoundaries.maxX;
            transform.x = transBoundaries.minX;
        }

        if (transform.y >= transBoundaries.maxY) {
            origin.y = oBoundaries.minY;
            transform.y = transBoundaries.maxY;
        }

        if (transform.y <= transBoundaries.minY) {
            origin.y = oBoundaries.maxY;
            transform.y = transBoundaries.minY;
        }

        var transCss = {};
        transCss[CSS_TRANSFORM] = transform.toString();
        transCss[CSS_TRANS_ORG] = origin.toString();
        css(self.elements.preview, transCss);

        _debouncedOverlay.call(self);
        _triggerUpdate.call(self);
    }

    function _getVirtualBoundaries(viewport) {
        var self = this,
            scale = self._currentZoom,
            vpWidth = viewport.width,
            vpHeight = viewport.height,
            centerFromBoundaryX = self.options.boundary.width / 2,
            centerFromBoundaryY = self.options.boundary.height / 2,
            originalImgWidth = self._originalImageWidth,
            originalImgHeight = self._originalImageHeight,
            curImgWidth = originalImgWidth * scale,
            curImgHeight = originalImgHeight * scale,
            halfWidth = vpWidth / 2,
            halfHeight = vpHeight / 2;


        var maxX = ((halfWidth / scale) - centerFromBoundaryX) * -1;
        var minX = maxX - ((curImgWidth * (1 / scale)) - (vpWidth * (1 / scale)));

        var maxY = ((halfHeight / scale) - centerFromBoundaryY) * -1;
        var minY = maxY - ((curImgHeight * (1 / scale)) - (vpHeight * (1 / scale)));

        var originMinX = (1 / scale) * halfWidth;
        var originMaxX = (curImgWidth * (1 / scale)) - originMinX;

        var originMinY = (1 / scale) * halfHeight;
        var originMaxY = (curImgHeight * (1 / scale)) - originMinY;

        return {
            translate: {
                maxX: maxX,
                minX: minX,
                maxY: maxY,
                minY: minY
            },
            origin: {
                maxX: originMaxX,
                minX: originMinX,
                maxY: originMaxY,
                minY: originMinY
            }
        };
    }

    function _updateCenterPoint() {
        var self = this,
            scale = self._currentZoom,
            data = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            transform = Transform.parse(self.elements.preview.style[CSS_TRANSFORM]),
            pc = new TransformOrigin(self.elements.preview),
            top = (vpData.top - data.top) + (vpData.height / 2),
            left = (vpData.left - data.left) + (vpData.width / 2),
            center = {},
            adj = {};

        center.y = top / scale;
        center.x = left / scale;

        adj.y = (center.y - pc.y) * (1 - scale);
        adj.x = (center.x - pc.x) * (1 - scale);

        transform.x -= adj.x;
        transform.y -= adj.y;

        var newCss = {};
        newCss[CSS_TRANS_ORG] = center.x + 'px ' + center.y + 'px';
        newCss[CSS_TRANSFORM] = transform.toString();
        css(self.elements.preview, newCss);
    }

    function _initDraggable() {
        var self = this,
            isDragging = false,
            originalX,
            originalY,
            originalDistance,
            vpRect;

        function mouseDown(ev) {
            ev.preventDefault();
            if (isDragging) return;
            isDragging = true;
            originalX = ev.pageX;
            originalY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                originalX = touches.pageX;
                originalY = touches.pageY;
            }

            transform = Transform.parse(self.elements.preview);
            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
            window.addEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = 'none';
            vpRect = self.elements.viewport.getBoundingClientRect();
        }

        function mouseMove(ev) {
            ev.preventDefault();
            var pageX = ev.pageX,
                pageY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - originalX,
                deltaY = pageY - originalY,
                imgRect = self.elements.preview.getBoundingClientRect(),
                top = transform.y + deltaY,
                left = transform.x + deltaX,
                newCss = {};

            if (ev.type == 'touchmove') {
                if (ev.touches.length > 1) {
                    var touch1 = ev.touches[0];
                    var touch2 = ev.touches[1];
                    var dist = Math.sqrt((touch1.pageX - touch2.pageX) * (touch1.pageX - touch2.pageX) + (touch1.pageY - touch2.pageY) * (touch1.pageY - touch2.pageY));

                    if (!originalDistance) {
                        originalDistance = dist / self._currentZoom;
                    }

                    var scale = dist / originalDistance;

                    _setZoomerVal.call(self, scale);
                    dispatchChange(self.elements.zoomer);
                    return;
                }
            }

            if (vpRect.top > imgRect.top + deltaY && vpRect.bottom < imgRect.bottom + deltaY) {
                transform.y = top;
            }

            if (vpRect.left > imgRect.left + deltaX && vpRect.right < imgRect.right + deltaX) {
                transform.x = left;
            }

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            originalY = pageY;
            originalX = pageX;
        }

        function mouseUp() {
            isDragging = false;
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        self.elements.overlay.addEventListener('mousedown', mouseDown);
        self.elements.overlay.addEventListener('touchstart', mouseDown);
    }

    function _updateOverlay() {
        var self = this,
            boundRect = self.elements.boundary.getBoundingClientRect(),
            imgData = self.elements.preview.getBoundingClientRect();

        css(self.elements.overlay, {
            width: imgData.width + 'px',
            height: imgData.height + 'px',
            top: (imgData.top - boundRect.top) + 'px',
            left: (imgData.left - boundRect.left) + 'px'
        });
    }
    var _debouncedOverlay = debounce(_updateOverlay, 500);

    function _triggerUpdate() {
        var self = this;
        if (_isVisible.call(self)) {
            self.options.update.call(self, self.get());
        }
    }

    function _isVisible() {
        return this.elements.preview.offsetHeight > 0 && this.elements.preview.offsetWidth > 0;
    }

    function _updatePropertiesFromImage() {
        var self = this,
            minZoom = 0,
            maxZoom = 1.5,
            initialZoom = 1,
            cssReset = {},
            img = self.elements.preview,
            zoomer = self.elements.zoomer,
            transformReset = new Transform(0, 0, initialZoom),
            originReset = new TransformOrigin(),
            isVisible = _isVisible.call(self),
            imgData,
            vpData,
            boundaryData,
            minW,
            minH;

        if (!isVisible || self.data.bound) {
            // if the croppie isn't visible or it doesn't need binding
            return;
        }

        self.data.bound = true;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        cssReset[CSS_TRANS_ORG] = originReset.toString();
        cssReset['opacity'] = 1;
        css(img, cssReset);

        imgData = img.getBoundingClientRect();
        vpData = self.elements.viewport.getBoundingClientRect();
        boundaryData = self.elements.boundary.getBoundingClientRect();
        self._originalImageWidth = imgData.width;
        self._originalImageHeight = imgData.height;

        if (self.options.enableZoom) {
            minW = vpData.width / imgData.width;
            minH = vpData.height / imgData.height;
            minZoom = Math.max(minW, minH);

            if (minZoom >= maxZoom) {
                maxZoom = minZoom + 1;
            }

            zoomer.min = fix(minZoom, 4);
            zoomer.max = fix(maxZoom, 4);
            initialZoom = Math.max((boundaryData.width / imgData.width), (boundaryData.height / imgData.height));
            _setZoomerVal.call(self, initialZoom);
            dispatchChange(zoomer);
        }

        self._currentZoom = transformReset.scale = initialZoom;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        css(img, cssReset);

        if (self.data.points.length) {
            _bindPoints.call(self, self.data.points);
        }
        else {
            _centerImage.call(self);
        }


        _updateOverlay.call(self);
    }

    function _bindPoints(points) {
        if (points.length != 4) {
            throw "Croppie - Invalid number of points supplied: " + points;
        }
        var self = this,
            pointsWidth = points[2] - points[0],
            // pointsHeight = points[3] - points[1],
            vpData = self.elements.viewport.getBoundingClientRect(),
            boundRect = self.elements.boundary.getBoundingClientRect(),
            vpOffset = {
                left: vpData.left - boundRect.left,
                top: vpData.top - boundRect.top
            },
            scale = vpData.width / pointsWidth,
            originTop = points[1],
            originLeft = points[0],
            transformTop = (-1 * points[1]) + vpOffset.top,
            transformLeft = (-1 * points[0]) + vpOffset.left,
            newCss = {};

        newCss[CSS_TRANS_ORG] = originLeft + 'px ' + originTop + 'px';
        newCss[CSS_TRANSFORM] = new Transform(transformLeft, transformTop, scale).toString();
        css(self.elements.preview, newCss);

        _setZoomerVal.call(self, scale);
        self._currentZoom = scale;
    }

    function _centerImage() {
        var self = this,
            imgDim = self.elements.preview.getBoundingClientRect(),
            vpDim = self.elements.viewport.getBoundingClientRect(),
            boundDim = self.elements.boundary.getBoundingClientRect(),
            vpLeft = vpDim.left - boundDim.left,
            vpTop = vpDim.top - boundDim.top,
            w = vpLeft - ((imgDim.width - vpDim.width) / 2),
            h = vpTop - ((imgDim.height - vpDim.height) / 2),
            transform = new Transform(w, h, self._currentZoom);

        css(self.elements.preview, CSS_TRANSFORM, transform.toString());
    }

    function _transferImageToCanvas() {
        var self = this,
            canvas = self.elements.canvas,
            img = self.elements.img,
            ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = img.width;
        canvas.height = img.height;

        getExifOrientation(img, function (orientation) {
            rotateCanvas(canvas, ctx, img, parseInt(orientation));
        });
    }

    function _getHtmlResult(data) {
        var points = data.points,
            div = document.createElement('div'),
            img = document.createElement('img'),
            width = points[2] - points[0],
            height = points[3] - points[1];

        addClass(div, 'croppie-result');
        div.appendChild(img);
        css(img, {
            left: (-1 * points[0]) + 'px',
            top: (-1 * points[1]) + 'px'
        });
        img.src = data.url;
        css(div, {
            width: width + 'px',
            height: height + 'px'
        });

        return div;
    }

    function _getCanvasResult(img, data) {
        var points = data.points,
            left = points[0],
            top = points[1],
            width = (points[2] - points[0]),
            height = (points[3] - points[1]),
            circle = data.circle,
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            outWidth = width,
            outHeight = height;

        if (data.outputWidth && data.outputHeight) {
            outWidth = data.outputWidth;
            outHeight = data.outputHeight;
        }

        canvas.width = outWidth;
        canvas.height = outHeight;

        ctx.drawImage(img, left, top, width, height, 0, 0, outWidth, outHeight);
        if (circle) {
            ctx.fillStyle = '#fff';
            ctx.globalCompositeOperation = 'destination-in';
            ctx.beginPath();
            ctx.arc(outWidth / 2, outHeight / 2, outWidth / 2, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }
        return canvas.toDataURL(data.format, data.quality);
    }

    function _bind(options, cb) {
        var self = this,
            url,
            points = [];

        if (typeof (options) === 'string') {
            url = options;
            options = {};
        }
        else if (Array.isArray(options)) {
            points = options.slice();
        }
        else if (typeof (options) == 'undefined' && self.data.url) { //refreshing
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            return null;
        }
        else {
            url = options.url;
            points = options.points || [];
        }

        self.data.bound = false;
        self.data.url = url || self.data.url;
        self.data.points = (points || self.data.points).map(function (p) {
            return parseFloat(p);
        });
        var prom = loadImage(url, self.elements.img);
        prom.then(function () {
            if (self.options.useCanvas) {
                self.elements.img.exifdata = null;
                _transferImageToCanvas.call(self);
            }
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            if (cb) {
                cb();
            }
        });
        return prom;
    }

    function fix(v, decimalPoints) {
        return parseFloat(v).toFixed(decimalPoints || 0);
    }

    function _get() {
        var self = this,
            imgData = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            x1 = vpData.left - imgData.left,
            y1 = vpData.top - imgData.top,
            x2 = x1 + vpData.width,
            y2 = y1 + vpData.height,
            scale = self._currentZoom;

        if (scale === Infinity || isNaN(scale)) {
            scale = 1;
        }

        x1 = Math.max(0, x1 / scale);
        y1 = Math.max(0, y1 / scale);
        x2 = Math.max(0, x2 / scale);
        y2 = Math.max(0, y2 / scale);

        return {
            points: [fix(x1), fix(y1), fix(x2), fix(y2)],
            zoom: scale
        };
    }

    var RESULT_DEFAULTS = {
            type: 'canvas', 
            size: 'viewport', 
            format: 'png', 
            quality: 1
        },
        RESULT_FORMATS = ['jpeg', 'webp', 'png'];

    function _result(options) {
        var self = this,
            data = _get.call(self),
            opts = deepExtend(RESULT_DEFAULTS, deepExtend({}, options)),
            type = (typeof (options) === 'string' ? options : opts.type),
            size = opts.size,
            format = opts.format,
            quality = opts.quality,
            vpRect,
            prom;

        if (size === 'viewport') {
            vpRect = self.elements.viewport.getBoundingClientRect();
            data.outputWidth = vpRect.width;
            data.outputHeight = vpRect.height;
        }

        if (RESULT_FORMATS.indexOf(format) > -1) {
            data.format = 'image/' + format;
            data.quality = quality;
        }

        data.circle = self.options.viewport.type === 'circle';
        data.url = self.data.url;

        prom = new Promise(function (resolve, reject) {
            if (type === 'canvas') {
                resolve(_getCanvasResult.call(self, self.elements.preview, data));
            }
            else {
                resolve(_getHtmlResult.call(self, data));
            }
        });
        return prom;
    }

    function _refresh() {
        _updatePropertiesFromImage.call(this);
    }

    function _destroy() {
        var self = this;
        self.element.removeChild(self.elements.boundary);
        removeClass(self.element, 'croppie-container');
        if (self.options.enableZoom) {
            self.element.removeChild(self.elements.zoomerWrap);
        }
        delete self.elements;
    }

    if (this.jQuery) {
        var $ = this.jQuery;
        $.fn.croppie = function (opts) {
            var ot = typeof opts;

            if (ot === 'string') {
                var args = Array.prototype.slice.call(arguments, 1);
                var singleInst = $(this).data('croppie');

                if (opts === 'get') {
                    return singleInst.get();
                }
                else if (opts === 'result') {
                    return singleInst.result.apply(singleInst, args);
                }

                return this.each(function () {
                    var i = $(this).data('croppie');
                    if (!i) return;

                    var method = i[opts];
                    if ($.isFunction(method)) {
                        method.apply(i, args);
                        if (opts === 'destroy') {
                            $(this).removeData('croppie');
                        }
                    }
                    else {
                        throw 'Croppie ' + opts + ' method not found';
                    }
                });
            }
            else {
                return this.each(function () {
                    var i = new Croppie(this, opts);
                    $(this).data('croppie', i);
                });
            }
        };
    }

    function Croppie(element, opts) {
        this.element = element;
        this.options = deepExtend(deepExtend({}, Croppie.defaults), opts);

        _create.call(this);
    }

    Croppie.defaults = {
        viewport: {
            width: 100,
            height: 100,
            type: 'square'
        },
        boundary: {
            width: 300,
            height: 300
        },
        customClass: '',
        showZoomer: true,
        enableZoom: true,
        mouseWheelZoom: true,
        exif: false,
        update: function () { }
    };

    deepExtend(Croppie.prototype, {
        bind: function (options, cb) {
            return _bind.call(this, options, cb);
        },
        get: function () {
            return _get.call(this);
        },
        result: function (type) {
            return _result.call(this, type);
        },
        refresh: function () {
            return _refresh.call(this);
        },
        setZoom: function (v) {
            _setZoomerVal.call(this, v);
            dispatchChange(this.elements.zoomer);
        },
        destroy: function () {
            return _destroy.call(this);
        }
    });

    exports.Croppie = window.Croppie = Croppie;

    if (typeof module === 'object' && !!module.exports) {
        module.exports = Croppie;    
    }
}));

//# sourceMappingURL=all.js.map
>>>>>>> a8c3321f135fad3d6445c5c0cdb83912e4f2a7ae
