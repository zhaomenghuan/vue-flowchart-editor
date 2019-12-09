(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-flowchart-editor"] = factory();
	else
		root["vue-flowchart-editor"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00fd":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "0273":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("c1b2");
var definePropertyModule = __webpack_require__("4180");
var createPropertyDescriptor = __webpack_require__("2c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "0363":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3ac6");
var shared = __webpack_require__("d659");
var uid = __webpack_require__("3e80");
var NATIVE_SYMBOL = __webpack_require__("1e63");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "0481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var flattenIntoArray = __webpack_require__("a2bf");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var arraySpeciesCreate = __webpack_require__("65f0");

// `Array.prototype.flat` method
// https://github.com/tc39/proposal-flatMap
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "0621":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "06fa":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "07c7":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "07cd":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=820)}([,function(t,e,n){"use strict";var r=function(t,e,n){t.prototype=e.prototype=n,n.constructor=t};function i(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function a(){}var o="\\s*([+-]?\\d+)\\s*",s="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",u="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",c=/^#([0-9a-f]{3})$/,h=/^#([0-9a-f]{6})$/,f=new RegExp("^rgb\\("+[o,o,o]+"\\)$"),l=new RegExp("^rgb\\("+[u,u,u]+"\\)$"),p=new RegExp("^rgba\\("+[o,o,o,s]+"\\)$"),d=new RegExp("^rgba\\("+[u,u,u,s]+"\\)$"),g=new RegExp("^hsl\\("+[s,u,u]+"\\)$"),v=new RegExp("^hsla\\("+[s,u,u,s]+"\\)$"),m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function x(t){var e;return t=(t+"").trim().toLowerCase(),(e=c.exec(t))?new _((e=parseInt(e[1],16))>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):(e=h.exec(t))?y(parseInt(e[1],16)):(e=f.exec(t))?new _(e[1],e[2],e[3],1):(e=l.exec(t))?new _(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=p.exec(t))?b(e[1],e[2],e[3],e[4]):(e=d.exec(t))?b(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=g.exec(t))?S(e[1],e[2]/100,e[3]/100,1):(e=v.exec(t))?S(e[1],e[2]/100,e[3]/100,e[4]):m.hasOwnProperty(t)?y(m[t]):"transparent"===t?new _(NaN,NaN,NaN,0):null}function y(t){return new _(t>>16&255,t>>8&255,255&t,1)}function b(t,e,n,r){return r<=0&&(t=e=n=NaN),new _(t,e,n,r)}function M(t){return t instanceof a||(t=x(t)),t?new _((t=t.rgb()).r,t.g,t.b,t.opacity):new _}function w(t,e,n,r){return 1===arguments.length?M(t):new _(t,e,n,null==r?1:r)}function _(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}function E(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function S(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new P(t,e,n,r)}function A(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof P)return new P(t.h,t.s,t.l,t.opacity);if(t instanceof a||(t=x(t)),!t)return new P;if(t instanceof P)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,i=Math.min(e,n,r),o=Math.max(e,n,r),s=NaN,u=o-i,c=(o+i)/2;return u?(s=e===o?(n-r)/u+6*(n<r):n===o?(r-e)/u+2:(e-n)/u+4,u/=c<.5?o+i:2-o-i,s*=60):u=c>0&&c<1?0:s,new P(s,u,c,t.opacity)}(t):new P(t,e,n,null==r?1:r)}function P(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}function O(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}r(a,x,{displayable:function(){return this.rgb().displayable()},hex:function(){return this.rgb().hex()},toString:function(){return this.rgb()+""}}),r(_,w,i(a,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new _(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new _(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},hex:function(){return"#"+E(this.r)+E(this.g)+E(this.b)},toString:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),r(P,A,i(a,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new P(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new P(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return new _(O(t>=240?t-240:t+120,i,r),O(t,i,r),O(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var C=Math.PI/180,I=180/Math.PI,T=.96422,k=1,N=.82521,L=4/29,B=6/29,j=3*B*B,D=B*B*B;function R(t){if(t instanceof X)return new X(t.l,t.a,t.b,t.opacity);if(t instanceof Z){if(isNaN(t.h))return new X(t.l,0,0,t.opacity);var e=t.h*C;return new X(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}t instanceof _||(t=M(t));var n,r,i=H(t.r),a=H(t.g),o=H(t.b),s=G((.2225045*i+.7168786*a+.0606169*o)/k);return i===a&&a===o?n=r=s:(n=G((.4360747*i+.3850649*a+.1430804*o)/T),r=G((.0139322*i+.0971045*a+.7141733*o)/N)),new X(116*s-16,500*(n-s),200*(s-r),t.opacity)}function F(t,e){return new X(t,0,0,null==e?1:e)}function Y(t,e,n,r){return 1===arguments.length?R(t):new X(t,e,n,null==r?1:r)}function X(t,e,n,r){this.l=+t,this.a=+e,this.b=+n,this.opacity=+r}function G(t){return t>D?Math.pow(t,1/3):t/j+L}function q(t){return t>B?t*t*t:j*(t-L)}function U(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function H(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function V(t){if(t instanceof Z)return new Z(t.h,t.c,t.l,t.opacity);if(t instanceof X||(t=R(t)),0===t.a&&0===t.b)return new Z(NaN,0,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*I;return new Z(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function z(t,e,n,r){return 1===arguments.length?V(t):new Z(n,e,t,null==r?1:r)}function W(t,e,n,r){return 1===arguments.length?V(t):new Z(t,e,n,null==r?1:r)}function Z(t,e,n,r){this.h=+t,this.c=+e,this.l=+n,this.opacity=+r}r(X,Y,i(a,{brighter:function(t){return new X(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new X(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return new _(U(3.1338561*(e=T*q(e))-1.6168667*(t=k*q(t))-.4906146*(n=N*q(n))),U(-.9787684*e+1.9161415*t+.033454*n),U(.0719453*e-.2289914*t+1.4052427*n),this.opacity)}})),r(Z,W,i(a,{brighter:function(t){return new Z(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Z(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return R(this).rgb()}}));var K=-.14861,Q=1.78277,$=-.29227,J=-.90649,tt=1.97294,et=tt*J,nt=tt*Q,rt=Q*$-J*K;function it(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof at)return new at(t.h,t.s,t.l,t.opacity);t instanceof _||(t=M(t));var e=t.r/255,n=t.g/255,r=t.b/255,i=(rt*r+et*e-nt*n)/(rt+et-nt),a=r-i,o=(tt*(n-i)-$*a)/J,s=Math.sqrt(o*o+a*a)/(tt*i*(1-i)),u=s?Math.atan2(o,a)*I-120:NaN;return new at(u<0?u+360:u,s,i,t.opacity)}(t):new at(t,e,n,null==r?1:r)}function at(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}r(at,it,i(a,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new at(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new at(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*C,e=+this.l,n=isNaN(this.s)?0:this.s*e*(1-e),r=Math.cos(t),i=Math.sin(t);return new _(255*(e+n*(K*r+Q*i)),255*(e+n*($*r+J*i)),255*(e+n*(tt*r)),this.opacity)}})),n.d(e,"a",function(){return x}),n.d(e,"h",function(){return w}),n.d(e,"e",function(){return A}),n.d(e,"f",function(){return Y}),n.d(e,"d",function(){return W}),n.d(e,"g",function(){return z}),n.d(e,"c",function(){return F}),n.d(e,"b",function(){return it})},,,,,,,,,,,,,,,function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){"use strict";n.r(e);var r,i,a=0,o=0,s=0,u=1e3,c=0,h=0,f=0,l="object"==typeof performance&&performance.now?performance:Date,p="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function d(){return h||(p(g),h=l.now()+f)}function g(){h=0}function v(){this._call=this._time=this._next=null}function m(t,e,n){var r=new v;return r.restart(t,e,n),r}function x(){d(),++a;for(var t,e=r;e;)(t=h-e._time)>=0&&e._call.call(null,t),e=e._next;--a}function y(){h=(c=l.now())+f,a=o=0;try{x()}finally{a=0,function(){var t,e,n=r,a=1/0;for(;n;)n._call?(a>n._time&&(a=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:r=e);i=t,M(a)}(),h=0}}function b(){var t=l.now(),e=t-c;e>u&&(f-=e,c=t)}function M(t){a||(o&&(o=clearTimeout(o)),t-h>24?(t<1/0&&(o=setTimeout(y,t-l.now()-f)),s&&(s=clearInterval(s))):(s||(c=l.now(),s=setInterval(b,u)),a=1,p(y)))}v.prototype=m.prototype={constructor:v,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?d():+n)+(null==e?0:+e),this._next||i===this||(i?i._next=this:r=this,i=this),this._call=t,this._time=n,M()},stop:function(){this._call&&(this._call=null,this._time=1/0,M())}};var w=function(t,e,n){var r=new v;return e=null==e?0:+e,r.restart(function(n){r.stop(),t(n+e)},e,n),r},_=function(t,e,n){var r=new v,i=e;return null==e?(r.restart(t,e,n),r):(e=+e,n=null==n?d():+n,r.restart(function a(o){o+=i,r.restart(a,i+=e,n),t(o)},e,n),r)};n.d(e,"now",function(){return d}),n.d(e,"timer",function(){return m}),n.d(e,"timerFlush",function(){return x}),n.d(e,"timeout",function(){return w}),n.d(e,"interval",function(){return _})},,function(t,e,n){var r=n(644),i={};r.merge(i,r,{mixin:function(t,e){var n=t.CFG?"CFG":"ATTRS";if(t&&e){t._mixins=e,t[n]=t[n]||{};var r={};i.each(e,function(e){i.augment(t,e);var a=e[n];a&&i.merge(r,a)}),t[n]=i.merge(r,t[n])}}}),t.exports=i},function(t,e,n){var r=n(117),i="object"==typeof self&&self&&self.Object===Object&&self,a=r||i||Function("return this")();t.exports=a},,,function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},,,function(t,e,n){var r={},i=n(682),a=n(748),o=n(257),s=n(727),u=n(726),c=n(725);o.mix(r,o,u,c,s,a,i),t.exports=r},,,,,,,,function(t,e,n){var r=n(38),i=n(250),a=n(249),o="[object Null]",s="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?s:o:u&&u in Object(t)?i(t):a(t)}},,,,function(t,e,n){var r=n(20).Symbol;t.exports=r},function(t,e,n){var r=n(34),i=n(23),a="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||i(t)&&r(t)==a}},,,,,function(t,e,n){"use strict";function r(t){return+t}function i(t){return t*t}function a(t){return t*(2-t)}function o(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function s(t){return t*t*t}function u(t){return--t*t*t+1}function c(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}n.r(e);var h=function t(e){function n(t){return Math.pow(t,e)}return e=+e,n.exponent=t,n}(3),f=function t(e){function n(t){return 1-Math.pow(1-t,e)}return e=+e,n.exponent=t,n}(3),l=function t(e){function n(t){return((t*=2)<=1?Math.pow(t,e):2-Math.pow(2-t,e))/2}return e=+e,n.exponent=t,n}(3),p=Math.PI,d=p/2;function g(t){return 1-Math.cos(t*d)}function v(t){return Math.sin(t*d)}function m(t){return(1-Math.cos(p*t))/2}function x(t){return Math.pow(2,10*t-10)}function y(t){return 1-Math.pow(2,-10*t)}function b(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function M(t){return 1-Math.sqrt(1-t*t)}function w(t){return Math.sqrt(1- --t*t)}function _(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}var E=4/11,S=6/11,A=8/11,P=.75,O=9/11,C=10/11,I=.9375,T=21/22,k=63/64,N=1/E/E;function L(t){return 1-B(1-t)}function B(t){return(t=+t)<E?N*t*t:t<A?N*(t-=S)*t+P:t<C?N*(t-=O)*t+I:N*(t-=T)*t+k}function j(t){return((t*=2)<=1?1-B(1-t):B(t-1)+1)/2}var D=function t(e){function n(t){return t*t*((e+1)*t-e)}return e=+e,n.overshoot=t,n}(1.70158),R=function t(e){function n(t){return--t*t*((e+1)*t+e)+1}return e=+e,n.overshoot=t,n}(1.70158),F=function t(e){function n(t){return((t*=2)<1?t*t*((e+1)*t-e):(t-=2)*t*((e+1)*t+e)+2)/2}return e=+e,n.overshoot=t,n}(1.70158),Y=2*Math.PI,X=function t(e,n){var r=Math.asin(1/(e=Math.max(1,e)))*(n/=Y);function i(t){return e*Math.pow(2,10*--t)*Math.sin((r-t)/n)}return i.amplitude=function(e){return t(e,n*Y)},i.period=function(n){return t(e,n)},i}(1,.3),G=function t(e,n){var r=Math.asin(1/(e=Math.max(1,e)))*(n/=Y);function i(t){return 1-e*Math.pow(2,-10*(t=+t))*Math.sin((t+r)/n)}return i.amplitude=function(e){return t(e,n*Y)},i.period=function(n){return t(e,n)},i}(1,.3),q=function t(e,n){var r=Math.asin(1/(e=Math.max(1,e)))*(n/=Y);function i(t){return((t=2*t-1)<0?e*Math.pow(2,10*t)*Math.sin((r-t)/n):2-e*Math.pow(2,-10*t)*Math.sin((r+t)/n))/2}return i.amplitude=function(e){return t(e,n*Y)},i.period=function(n){return t(e,n)},i}(1,.3);n.d(e,"easeLinear",function(){return r}),n.d(e,"easeQuad",function(){return o}),n.d(e,"easeQuadIn",function(){return i}),n.d(e,"easeQuadOut",function(){return a}),n.d(e,"easeQuadInOut",function(){return o}),n.d(e,"easeCubic",function(){return c}),n.d(e,"easeCubicIn",function(){return s}),n.d(e,"easeCubicOut",function(){return u}),n.d(e,"easeCubicInOut",function(){return c}),n.d(e,"easePoly",function(){return l}),n.d(e,"easePolyIn",function(){return h}),n.d(e,"easePolyOut",function(){return f}),n.d(e,"easePolyInOut",function(){return l}),n.d(e,"easeSin",function(){return m}),n.d(e,"easeSinIn",function(){return g}),n.d(e,"easeSinOut",function(){return v}),n.d(e,"easeSinInOut",function(){return m}),n.d(e,"easeExp",function(){return b}),n.d(e,"easeExpIn",function(){return x}),n.d(e,"easeExpOut",function(){return y}),n.d(e,"easeExpInOut",function(){return b}),n.d(e,"easeCircle",function(){return _}),n.d(e,"easeCircleIn",function(){return M}),n.d(e,"easeCircleOut",function(){return w}),n.d(e,"easeCircleInOut",function(){return _}),n.d(e,"easeBounce",function(){return B}),n.d(e,"easeBounceIn",function(){return L}),n.d(e,"easeBounceOut",function(){return B}),n.d(e,"easeBounceInOut",function(){return j}),n.d(e,"easeBack",function(){return F}),n.d(e,"easeBackIn",function(){return D}),n.d(e,"easeBackOut",function(){return R}),n.d(e,"easeBackInOut",function(){return F}),n.d(e,"easeElastic",function(){return G}),n.d(e,"easeElasticIn",function(){return X}),n.d(e,"easeElasticOut",function(){return G}),n.d(e,"easeElasticInOut",function(){return q})},function(t,e,n){var r=n(115),i=Array.isArray?Array.isArray:function(t){return r(t,"Array")};t.exports=i},function(t,e,n){var r=n(621),i=n(45);t.exports=function(t,e){if(t)if(i(t))for(var n=0,a=t.length;n<a&&!1!==e(t[n],n);n++);else if(r(t))for(var o in t)if(t.hasOwnProperty(o)&&!1===e(t[o],o))break}},,,,,,,,,,,,function(t,e,n){var r=n(19),i=n(742),a=n(641),o=n(613),s=function t(e){t.superclass.constructor.call(this,e)};s.ATTRS={},r.extend(s,a);var u={matrix:"matrix",path:"path",points:"points",lineDash:"lineDash"};r.augment(s,i,{isShape:!0,drawInner:function(t){var e=this._attrs;this.createPath(t);var n=t.globalAlpha;if(this.hasFill()){var i=e.fillOpacity;r.isNil(i)||1===i?t.fill():(t.globalAlpha=i,t.fill(),t.globalAlpha=n)}if(this.hasStroke()&&this._attrs.lineWidth>0){var a=e.strokeOpacity;r.isNil(a)||1===a||(t.globalAlpha=a),t.stroke()}this.afterPath(t)},afterPath:function(){},isHitBox:function(){return!0},isHit:function(t,e){var n=[t,e,1];if(this.invert(n),this.isHitBox()){var r=this.getBBox();if(r&&!o.box(r.minX,r.maxX,r.minY,r.maxY,n[0],n[1]))return!1}var i=this._attrs.clip;return i?(i.invert(n,this.get("canvas")),!!i.isPointInPath(n[0],n[1])&&this.isPointInPath(n[0],n[1])):this.isPointInPath(n[0],n[1])},calculateBox:function(){return null},getHitLineWidth:function(){var t=this._attrs,e=t.lineAppendWidth||0;return(t.lineWidth||0)+e},clearTotalMatrix:function(){this._cfg.totalMatrix=null,this._cfg.region=null},clearBBox:function(){this._cfg.box=null,this._cfg.region=null},getBBox:function(){var t=this._cfg.box;return t||((t=this.calculateBox())&&(t.x=t.minX,t.y=t.minY,t.width=t.maxX-t.minX,t.height=t.maxY-t.minY),this._cfg.box=t),t},clone:function(){var t=null,e=this._attrs,n={};return r.each(e,function(t,i){u[i]&&r.isArray(e[i])?n[i]=function(t){for(var e=[],n=0;n<t.length;n++)r.isArray(t[n])?e.push([].concat(t[n])):e.push(t[n]);return e}(e[i]):n[i]=e[i]}),t=new this.constructor({attrs:n}),t._cfg.zIndex=this._cfg.zIndex,t}}),t.exports=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setMatrixArrayType=function(t){e.ARRAY_TYPE=t},e.toRadian=function(t){return t*i},e.equals=function(t,e){return Math.abs(t-e)<=r*Math.max(1,Math.abs(t),Math.abs(e))};var r=e.EPSILON=1e-6;e.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,e.RANDOM=Math.random;var i=Math.PI/180},,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(115);t.exports=function(t){return r(t,"Function")}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){var n={}.toString;t.exports=function(t,e){return n.call(t)==="[object "+e+"]"}},function(t,e,n){var r;
/*!
 * EventEmitter v5.1.0 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */!function(e){"use strict";function i(){}var a=i.prototype,o=e.EventEmitter;function s(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n;return-1}function u(t){return function(){return this[t].apply(this,arguments)}}a.getListeners=function(t){var e,n,r=this._getEvents();if(t instanceof RegExp)for(n in e={},r)r.hasOwnProperty(n)&&t.test(n)&&(e[n]=r[n]);else e=r[t]||(r[t]=[]);return e},a.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1)n.push(t[e].listener);return n},a.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&((e={})[t]=n),e||n},a.addListener=function(t,e){if(!function t(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!=typeof e)&&t(e.listener)}(e))throw new TypeError("listener must be a function");var n,r=this.getListenersAsObject(t),i="object"==typeof e;for(n in r)r.hasOwnProperty(n)&&-1===s(r[n],e)&&r[n].push(i?e:{listener:e,once:!1});return this},a.on=u("addListener"),a.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},a.once=u("addOnceListener"),a.defineEvent=function(t){return this.getListeners(t),this},a.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},a.removeListener=function(t,e){var n,r,i=this.getListenersAsObject(t);for(r in i)i.hasOwnProperty(r)&&-1!==(n=s(i[r],e))&&i[r].splice(n,1);return this},a.off=u("removeListener"),a.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},a.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},a.manipulateListeners=function(t,e,n){var r,i,a=t?this.removeListener:this.addListener,o=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(r=n.length;r--;)a.call(this,e,n[r]);else for(r in e)e.hasOwnProperty(r)&&(i=e[r])&&("function"==typeof i?a.call(this,r,i):o.call(this,r,i));return this},a.removeEvent=function(t){var e,n=typeof t,r=this._getEvents();if("string"===n)delete r[t];else if(t instanceof RegExp)for(e in r)r.hasOwnProperty(e)&&t.test(e)&&delete r[e];else delete this._events;return this},a.removeAllListeners=u("removeEvent"),a.emitEvent=function(t,e){var n,r,i,a,o=this.getListenersAsObject(t);for(a in o)if(o.hasOwnProperty(a))for(n=o[a].slice(0),i=0;i<n.length;i++)!0===(r=n[i]).once&&this.removeListener(t,r.listener),r.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,r.listener);return this},a.trigger=u("emitEvent"),a.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},a.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},a._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},a._getEvents=function(){return this._events||(this._events={})},i.noConflict=function(){return e.EventEmitter=o,i},void 0===(r=function(){return i}.call(e,n,e,t))||(t.exports=r)}(this||{})},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(252))},function(t,e){t.exports=function(t){return null!==t&&"function"!=typeof t&&isFinite(t.length)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(115);t.exports=function(t){return r(t,"Number")}},function(t,e){t.exports=function(t){return null===t||void 0===t}},function(t,e,n){"use strict";n.r(e);var r=n(1);function i(t,e,n,r,i){var a=t*t,o=a*t;return((1-3*t+3*a-o)*e+(4-6*a+3*o)*n+(1+3*t+3*a-3*o)*r+o*i)/6}var a=function(t){var e=t.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),a=t[r],o=t[r+1],s=r>0?t[r-1]:2*a-o,u=r<e-1?t[r+2]:2*o-a;return i((n-r/e)*e,s,a,o,u)}},o=function(t){var e=t.length;return function(n){var r=Math.floor(((n%=1)<0?++n:n)*e),a=t[(r+e-1)%e],o=t[r%e],s=t[(r+1)%e],u=t[(r+2)%e];return i((n-r/e)*e,a,o,s,u)}},s=function(t){return function(){return t}};function u(t,e){return function(n){return t+n*e}}function c(t,e){var n=e-t;return n?u(t,n>180||n<-180?n-360*Math.round(n/360):n):s(isNaN(t)?e:t)}function h(t){return 1==(t=+t)?f:function(e,n){return n-e?function(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}(e,n,t):s(isNaN(e)?n:e)}}function f(t,e){var n=e-t;return n?u(t,n):s(isNaN(t)?e:t)}var l=function t(e){var n=h(e);function i(t,e){var i=n((t=Object(r.h)(t)).r,(e=Object(r.h)(e)).r),a=n(t.g,e.g),o=n(t.b,e.b),s=f(t.opacity,e.opacity);return function(e){return t.r=i(e),t.g=a(e),t.b=o(e),t.opacity=s(e),t+""}}return i.gamma=t,i}(1);function p(t){return function(e){var n,i,a=e.length,o=new Array(a),s=new Array(a),u=new Array(a);for(n=0;n<a;++n)i=Object(r.h)(e[n]),o[n]=i.r||0,s[n]=i.g||0,u[n]=i.b||0;return o=t(o),s=t(s),u=t(u),i.opacity=1,function(t){return i.r=o(t),i.g=s(t),i.b=u(t),i+""}}}var d=p(a),g=p(o),v=function(t,e){var n,r=e?e.length:0,i=t?Math.min(r,t.length):0,a=new Array(i),o=new Array(r);for(n=0;n<i;++n)a[n]=P(t[n],e[n]);for(;n<r;++n)o[n]=e[n];return function(t){for(n=0;n<i;++n)o[n]=a[n](t);return o}},m=function(t,e){var n=new Date;return e-=t=+t,function(r){return n.setTime(t+e*r),n}},x=function(t,e){return e-=t=+t,function(n){return t+e*n}},y=function(t,e){var n,r={},i={};for(n in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)n in t?r[n]=P(t[n],e[n]):i[n]=e[n];return function(t){for(n in r)i[n]=r[n](t);return i}},b=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,M=new RegExp(b.source,"g");var w,_,E,S,A=function(t,e){var n,r,i,a=b.lastIndex=M.lastIndex=0,o=-1,s=[],u=[];for(t+="",e+="";(n=b.exec(t))&&(r=M.exec(e));)(i=r.index)>a&&(i=e.slice(a,i),s[o]?s[o]+=i:s[++o]=i),(n=n[0])===(r=r[0])?s[o]?s[o]+=r:s[++o]=r:(s[++o]=null,u.push({i:o,x:x(n,r)})),a=M.lastIndex;return a<e.length&&(i=e.slice(a),s[o]?s[o]+=i:s[++o]=i),s.length<2?u[0]?function(t){return function(e){return t(e)+""}}(u[0].x):function(t){return function(){return t}}(e):(e=u.length,function(t){for(var n,r=0;r<e;++r)s[(n=u[r]).i]=n.x(t);return s.join("")})},P=function(t,e){var n,i=typeof e;return null==e||"boolean"===i?s(e):("number"===i?x:"string"===i?(n=Object(r.a)(e))?(e=n,l):A:e instanceof r.a?l:e instanceof Date?m:Array.isArray(e)?v:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?y:x)(t,e)},O=function(t,e){return e-=t=+t,function(n){return Math.round(t+e*n)}},C=180/Math.PI,I={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},T=function(t,e,n,r,i,a){var o,s,u;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(u=t*n+e*r)&&(n-=t*u,r-=e*u),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,u/=s),t*r<e*n&&(t=-t,e=-e,u=-u,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(e,t)*C,skewX:Math.atan(u)*C,scaleX:o,scaleY:s}};function k(t,e,n,r){function i(t){return t.length?t.pop()+" ":""}return function(a,o){var s=[],u=[];return a=t(a),o=t(o),function(t,r,i,a,o,s){if(t!==i||r!==a){var u=o.push("translate(",null,e,null,n);s.push({i:u-4,x:x(t,i)},{i:u-2,x:x(r,a)})}else(i||a)&&o.push("translate("+i+e+a+n)}(a.translateX,a.translateY,o.translateX,o.translateY,s,u),function(t,e,n,a){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),a.push({i:n.push(i(n)+"rotate(",null,r)-2,x:x(t,e)})):e&&n.push(i(n)+"rotate("+e+r)}(a.rotate,o.rotate,s,u),function(t,e,n,a){t!==e?a.push({i:n.push(i(n)+"skewX(",null,r)-2,x:x(t,e)}):e&&n.push(i(n)+"skewX("+e+r)}(a.skewX,o.skewX,s,u),function(t,e,n,r,a,o){if(t!==n||e!==r){var s=a.push(i(a)+"scale(",null,",",null,")");o.push({i:s-4,x:x(t,n)},{i:s-2,x:x(e,r)})}else 1===n&&1===r||a.push(i(a)+"scale("+n+","+r+")")}(a.scaleX,a.scaleY,o.scaleX,o.scaleY,s,u),a=o=null,function(t){for(var e,n=-1,r=u.length;++n<r;)s[(e=u[n]).i]=e.x(t);return s.join("")}}}var N=k(function(t){return"none"===t?I:(w||(w=document.createElement("DIV"),_=document.documentElement,E=document.defaultView),w.style.transform=t,t=E.getComputedStyle(_.appendChild(w),null).getPropertyValue("transform"),_.removeChild(w),t=t.slice(7,-1).split(","),T(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),L=k(function(t){return null==t?I:(S||(S=document.createElementNS("http://www.w3.org/2000/svg","g")),S.setAttribute("transform",t),(t=S.transform.baseVal.consolidate())?(t=t.matrix,T(t.a,t.b,t.c,t.d,t.e,t.f)):I)},", ",")",")"),B=Math.SQRT2;function j(t){return((t=Math.exp(t))+1/t)/2}var D=function(t,e){var n,r,i=t[0],a=t[1],o=t[2],s=e[0],u=e[1],c=e[2],h=s-i,f=u-a,l=h*h+f*f;if(l<1e-12)r=Math.log(c/o)/B,n=function(t){return[i+t*h,a+t*f,o*Math.exp(B*t*r)]};else{var p=Math.sqrt(l),d=(c*c-o*o+4*l)/(2*o*2*p),g=(c*c-o*o-4*l)/(2*c*2*p),v=Math.log(Math.sqrt(d*d+1)-d),m=Math.log(Math.sqrt(g*g+1)-g);r=(m-v)/B,n=function(t){var e=t*r,n=j(v),s=o/(2*p)*(n*function(t){return((t=Math.exp(2*t))-1)/(t+1)}(B*e+v)-function(t){return((t=Math.exp(t))-1/t)/2}(v));return[i+s*h,a+s*f,o*n/j(B*e+v)]}}return n.duration=1e3*r,n};function R(t){return function(e,n){var i=t((e=Object(r.e)(e)).h,(n=Object(r.e)(n)).h),a=f(e.s,n.s),o=f(e.l,n.l),s=f(e.opacity,n.opacity);return function(t){return e.h=i(t),e.s=a(t),e.l=o(t),e.opacity=s(t),e+""}}}var F=R(c),Y=R(f);function X(t,e){var n=f((t=Object(r.f)(t)).l,(e=Object(r.f)(e)).l),i=f(t.a,e.a),a=f(t.b,e.b),o=f(t.opacity,e.opacity);return function(e){return t.l=n(e),t.a=i(e),t.b=a(e),t.opacity=o(e),t+""}}function G(t){return function(e,n){var i=t((e=Object(r.d)(e)).h,(n=Object(r.d)(n)).h),a=f(e.c,n.c),o=f(e.l,n.l),s=f(e.opacity,n.opacity);return function(t){return e.h=i(t),e.c=a(t),e.l=o(t),e.opacity=s(t),e+""}}}var q=G(c),U=G(f);function H(t){return function e(n){function i(e,i){var a=t((e=Object(r.b)(e)).h,(i=Object(r.b)(i)).h),o=f(e.s,i.s),s=f(e.l,i.l),u=f(e.opacity,i.opacity);return function(t){return e.h=a(t),e.s=o(t),e.l=s(Math.pow(t,n)),e.opacity=u(t),e+""}}return n=+n,i.gamma=e,i}(1)}var V=H(c),z=H(f),W=function(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t(r/(e-1));return n};n.d(e,"interpolate",function(){return P}),n.d(e,"interpolateArray",function(){return v}),n.d(e,"interpolateBasis",function(){return a}),n.d(e,"interpolateBasisClosed",function(){return o}),n.d(e,"interpolateDate",function(){return m}),n.d(e,"interpolateNumber",function(){return x}),n.d(e,"interpolateObject",function(){return y}),n.d(e,"interpolateRound",function(){return O}),n.d(e,"interpolateString",function(){return A}),n.d(e,"interpolateTransformCss",function(){return N}),n.d(e,"interpolateTransformSvg",function(){return L}),n.d(e,"interpolateZoom",function(){return D}),n.d(e,"interpolateRgb",function(){return l}),n.d(e,"interpolateRgbBasis",function(){return d}),n.d(e,"interpolateRgbBasisClosed",function(){return g}),n.d(e,"interpolateHsl",function(){return F}),n.d(e,"interpolateHslLong",function(){return Y}),n.d(e,"interpolateLab",function(){return X}),n.d(e,"interpolateHcl",function(){return q}),n.d(e,"interpolateHclLong",function(){return U}),n.d(e,"interpolateCubehelix",function(){return V}),n.d(e,"interpolateCubehelixLong",function(){return z}),n.d(e,"quantize",function(){return W})},,,,,,,,,function(t,e,n){var r=n(609);t.exports={track:!1,defaultNodeSize:40,labelStyle:{fill:"#595959",textAlign:"center",textBaseline:"middle"},groupStyle:{stroke:"#CED4D9",fill:"#F2F4F5",radius:2},groupBackgroundPadding:[40,10,10,10],updateDuration:450,enterDuration:450,leaveDuration:450,updateEasing:"easeQuadOut",enterEasing:"easeQuadOut",leaveEasing:"easeQuadOut",version:r}},function(t,e,n){t.exports={Canvas:n(747),Group:n(642),Shape:n(58),Arc:n(638),Circle:n(637),Dom:n(636),Ellipse:n(635),Fan:n(634),Image:n(633),Line:n(632),Marker:n(611),Path:n(631),Polygon:n(630),Polyline:n(629),Rect:n(628),Text:n(627),PathSegment:n(600),PathUtil:n(610),Event:n(643),version:"3.3.5"}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r=n(38),i=Object.prototype,a=i.hasOwnProperty,o=i.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var i=o.call(t);return r&&(e?t[s]=n:delete t[s]),i}},function(t,e,n){var r=n(16),i=n(39),a=NaN,o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,h=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return a;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=u.test(t);return n||c.test(t)?h(t.slice(2),n?2:8):s.test(t)?a:+t}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(20);t.exports=function(){return r.Date.now()}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.forEach=e.sqrLen=e.len=e.sqrDist=e.dist=e.div=e.mul=e.sub=void 0,e.create=i,e.clone=function(t){var e=new r.ARRAY_TYPE(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},e.length=a,e.fromValues=o,e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},e.set=function(t,e,n,r){return t[0]=e,t[1]=n,t[2]=r,t},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t},e.subtract=s,e.multiply=u,e.divide=c,e.ceil=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t},e.floor=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t},e.round=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t},e.scaleAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t},e.distance=h,e.squaredDistance=f,e.squaredLength=l,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t},e.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t},e.normalize=p,e.dot=d,e.cross=function(t,e,n){var r=e[0],i=e[1],a=e[2],o=n[0],s=n[1],u=n[2];return t[0]=i*u-a*s,t[1]=a*o-r*u,t[2]=r*s-i*o,t},e.lerp=function(t,e,n,r){var i=e[0],a=e[1],o=e[2];return t[0]=i+r*(n[0]-i),t[1]=a+r*(n[1]-a),t[2]=o+r*(n[2]-o),t},e.hermite=function(t,e,n,r,i,a){var o=a*a,s=o*(2*a-3)+1,u=o*(a-2)+a,c=o*(a-1),h=o*(3-2*a);return t[0]=e[0]*s+n[0]*u+r[0]*c+i[0]*h,t[1]=e[1]*s+n[1]*u+r[1]*c+i[1]*h,t[2]=e[2]*s+n[2]*u+r[2]*c+i[2]*h,t},e.bezier=function(t,e,n,r,i,a){var o=1-a,s=o*o,u=a*a,c=s*o,h=3*a*s,f=3*u*o,l=u*a;return t[0]=e[0]*c+n[0]*h+r[0]*f+i[0]*l,t[1]=e[1]*c+n[1]*h+r[1]*f+i[1]*l,t[2]=e[2]*c+n[2]*h+r[2]*f+i[2]*l,t},e.random=function(t,e){e=e||1;var n=2*r.RANDOM()*Math.PI,i=2*r.RANDOM()-1,a=Math.sqrt(1-i*i)*e;return t[0]=Math.cos(n)*a,t[1]=Math.sin(n)*a,t[2]=i*e,t},e.transformMat4=function(t,e,n){var r=e[0],i=e[1],a=e[2],o=n[3]*r+n[7]*i+n[11]*a+n[15];return o=o||1,t[0]=(n[0]*r+n[4]*i+n[8]*a+n[12])/o,t[1]=(n[1]*r+n[5]*i+n[9]*a+n[13])/o,t[2]=(n[2]*r+n[6]*i+n[10]*a+n[14])/o,t},e.transformMat3=function(t,e,n){var r=e[0],i=e[1],a=e[2];return t[0]=r*n[0]+i*n[3]+a*n[6],t[1]=r*n[1]+i*n[4]+a*n[7],t[2]=r*n[2]+i*n[5]+a*n[8],t},e.transformQuat=function(t,e,n){var r=n[0],i=n[1],a=n[2],o=n[3],s=e[0],u=e[1],c=e[2],h=i*c-a*u,f=a*s-r*c,l=r*u-i*s,p=i*l-a*f,d=a*h-r*l,g=r*f-i*h,v=2*o;return h*=v,f*=v,l*=v,p*=2,d*=2,g*=2,t[0]=s+h+p,t[1]=u+f+d,t[2]=c+l+g,t},e.rotateX=function(t,e,n,r){var i=[],a=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],a[0]=i[0],a[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),a[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t},e.rotateY=function(t,e,n,r){var i=[],a=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],a[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),a[1]=i[1],a[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t},e.rotateZ=function(t,e,n,r){var i=[],a=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],a[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),a[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),a[2]=i[2],t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t},e.angle=function(t,e){var n=o(t[0],t[1],t[2]),r=o(e[0],e[1],e[2]);p(n,n),p(r,r);var i=d(n,r);return i>1?0:i<-1?Math.PI:Math.acos(i)},e.str=function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]},e.equals=function(t,e){var n=t[0],i=t[1],a=t[2],o=e[0],s=e[1],u=e[2];return Math.abs(n-o)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(i-s)<=r.EPSILON*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(a-u)<=r.EPSILON*Math.max(1,Math.abs(a),Math.abs(u))};var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(59));function i(){var t=new r.ARRAY_TYPE(3);return r.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function a(t){var e=t[0],n=t[1],r=t[2];return Math.sqrt(e*e+n*n+r*r)}function o(t,e,n){var i=new r.ARRAY_TYPE(3);return i[0]=t,i[1]=e,i[2]=n,i}function s(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function u(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function c(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function h(t,e){var n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return Math.sqrt(n*n+r*r+i*i)}function f(t,e){var n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return n*n+r*r+i*i}function l(t){var e=t[0],n=t[1],r=t[2];return e*e+n*n+r*r}function p(t,e){var n=e[0],r=e[1],i=e[2],a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}function d(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}e.sub=s,e.mul=u,e.div=c,e.dist=h,e.sqrDist=f,e.len=a,e.sqrLen=l,e.forEach=function(){var t=i();return function(e,n,r,i,a,o){var s=void 0,u=void 0;for(n||(n=3),r||(r=0),u=i?Math.min(i*n+r,e.length):e.length,s=r;s<u;s+=n)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],a(t,t,o),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2];return e}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.forEach=e.sqrLen=e.sqrDist=e.dist=e.div=e.mul=e.sub=e.len=void 0,e.create=i,e.clone=function(t){var e=new r.ARRAY_TYPE(2);return e[0]=t[0],e[1]=t[1],e},e.fromValues=function(t,e){var n=new r.ARRAY_TYPE(2);return n[0]=t,n[1]=e,n},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t},e.set=function(t,e,n){return t[0]=e,t[1]=n,t},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t},e.subtract=a,e.multiply=o,e.divide=s,e.ceil=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t},e.floor=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t},e.round=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t},e.scaleAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t},e.distance=u,e.squaredDistance=c,e.length=h,e.squaredLength=f,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t},e.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t},e.normalize=function(t,e){var n=e[0],r=e[1],i=n*n+r*r;i>0&&(i=1/Math.sqrt(i),t[0]=e[0]*i,t[1]=e[1]*i);return t},e.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]},e.cross=function(t,e,n){var r=e[0]*n[1]-e[1]*n[0];return t[0]=t[1]=0,t[2]=r,t},e.lerp=function(t,e,n,r){var i=e[0],a=e[1];return t[0]=i+r*(n[0]-i),t[1]=a+r*(n[1]-a),t},e.random=function(t,e){e=e||1;var n=2*r.RANDOM()*Math.PI;return t[0]=Math.cos(n)*e,t[1]=Math.sin(n)*e,t},e.transformMat2=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[2]*i,t[1]=n[1]*r+n[3]*i,t},e.transformMat2d=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[2]*i+n[4],t[1]=n[1]*r+n[3]*i+n[5],t},e.transformMat3=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[3]*i+n[6],t[1]=n[1]*r+n[4]*i+n[7],t},e.transformMat4=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[4]*i+n[12],t[1]=n[1]*r+n[5]*i+n[13],t},e.rotate=function(t,e,n,r){var i=e[0]-n[0],a=e[1]-n[1],o=Math.sin(r),s=Math.cos(r);return t[0]=i*s-a*o+n[0],t[1]=i*o+a*s+n[1],t},e.angle=function(t,e){var n=t[0],r=t[1],i=e[0],a=e[1],o=n*n+r*r;o>0&&(o=1/Math.sqrt(o));var s=i*i+a*a;s>0&&(s=1/Math.sqrt(s));var u=(n*i+r*a)*o*s;return u>1?0:u<-1?Math.PI:Math.acos(u)},e.str=function(t){return"vec2("+t[0]+", "+t[1]+")"},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]},e.equals=function(t,e){var n=t[0],i=t[1],a=e[0],o=e[1];return Math.abs(n-a)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(i-o)<=r.EPSILON*Math.max(1,Math.abs(i),Math.abs(o))};var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(59));function i(){var t=new r.ARRAY_TYPE(2);return r.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0),t}function a(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function o(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t}function s(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t}function u(t,e){var n=e[0]-t[0],r=e[1]-t[1];return Math.sqrt(n*n+r*r)}function c(t,e){var n=e[0]-t[0],r=e[1]-t[1];return n*n+r*r}function h(t){var e=t[0],n=t[1];return Math.sqrt(e*e+n*n)}function f(t){var e=t[0],n=t[1];return e*e+n*n}e.len=h,e.sub=a,e.mul=o,e.div=s,e.dist=u,e.sqrDist=c,e.sqrLen=f,e.forEach=function(){var t=i();return function(e,n,r,i,a,o){var s=void 0,u=void 0;for(n||(n=2),r||(r=0),u=i?Math.min(i*n+r,e.length):e.length,s=r;s<u;s+=n)t[0]=e[s],t[1]=e[s+1],a(t,t,o),e[s]=t[0],e[s+1]=t[1];return e}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sub=e.mul=void 0,e.create=function(){var t=new r.ARRAY_TYPE(9);r.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0);return t[0]=1,t[4]=1,t[8]=1,t},e.fromMat4=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t},e.clone=function(t){var e=new r.ARRAY_TYPE(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},e.fromValues=function(t,e,n,i,a,o,s,u,c){var h=new r.ARRAY_TYPE(9);return h[0]=t,h[1]=e,h[2]=n,h[3]=i,h[4]=a,h[5]=o,h[6]=s,h[7]=u,h[8]=c,h},e.set=function(t,e,n,r,i,a,o,s,u,c){return t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s,t[7]=u,t[8]=c,t},e.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},e.transpose=function(t,e){if(t===e){var n=e[1],r=e[2],i=e[5];t[1]=e[3],t[2]=e[6],t[3]=n,t[5]=e[7],t[6]=r,t[7]=i}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t},e.invert=function(t,e){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],h=e[8],f=h*o-s*c,l=-h*a+s*u,p=c*a-o*u,d=n*f+r*l+i*p;if(!d)return null;return d=1/d,t[0]=f*d,t[1]=(-h*r+i*c)*d,t[2]=(s*r-i*o)*d,t[3]=l*d,t[4]=(h*n-i*u)*d,t[5]=(-s*n+i*a)*d,t[6]=p*d,t[7]=(-c*n+r*u)*d,t[8]=(o*n-r*a)*d,t},e.adjoint=function(t,e){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],h=e[8];return t[0]=o*h-s*c,t[1]=i*c-r*h,t[2]=r*s-i*o,t[3]=s*u-a*h,t[4]=n*h-i*u,t[5]=i*a-n*s,t[6]=a*c-o*u,t[7]=r*u-n*c,t[8]=n*o-r*a,t},e.determinant=function(t){var e=t[0],n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6],u=t[7],c=t[8];return e*(c*a-o*u)+n*(-c*i+o*s)+r*(u*i-a*s)},e.multiply=i,e.translate=function(t,e,n){var r=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],c=e[6],h=e[7],f=e[8],l=n[0],p=n[1];return t[0]=r,t[1]=i,t[2]=a,t[3]=o,t[4]=s,t[5]=u,t[6]=l*r+p*o+c,t[7]=l*i+p*s+h,t[8]=l*a+p*u+f,t},e.rotate=function(t,e,n){var r=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],c=e[6],h=e[7],f=e[8],l=Math.sin(n),p=Math.cos(n);return t[0]=p*r+l*o,t[1]=p*i+l*s,t[2]=p*a+l*u,t[3]=p*o-l*r,t[4]=p*s-l*i,t[5]=p*u-l*a,t[6]=c,t[7]=h,t[8]=f,t},e.scale=function(t,e,n){var r=n[0],i=n[1];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=i*e[3],t[4]=i*e[4],t[5]=i*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},e.fromTranslation=function(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t},e.fromRotation=function(t,e){var n=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=n,t[2]=0,t[3]=-n,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},e.fromScaling=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},e.fromMat2d=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t},e.fromQuat=function(t,e){var n=e[0],r=e[1],i=e[2],a=e[3],o=n+n,s=r+r,u=i+i,c=n*o,h=r*o,f=r*s,l=i*o,p=i*s,d=i*u,g=a*o,v=a*s,m=a*u;return t[0]=1-f-d,t[3]=h-m,t[6]=l+v,t[1]=h+m,t[4]=1-c-d,t[7]=p-g,t[2]=l-v,t[5]=p+g,t[8]=1-c-f,t},e.normalFromMat4=function(t,e){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],h=e[8],f=e[9],l=e[10],p=e[11],d=e[12],g=e[13],v=e[14],m=e[15],x=n*s-r*o,y=n*u-i*o,b=n*c-a*o,M=r*u-i*s,w=r*c-a*s,_=i*c-a*u,E=h*g-f*d,S=h*v-l*d,A=h*m-p*d,P=f*v-l*g,O=f*m-p*g,C=l*m-p*v,I=x*C-y*O+b*P+M*A-w*S+_*E;if(!I)return null;return I=1/I,t[0]=(s*C-u*O+c*P)*I,t[1]=(u*A-o*C-c*S)*I,t[2]=(o*O-s*A+c*E)*I,t[3]=(i*O-r*C-a*P)*I,t[4]=(n*C-i*A+a*S)*I,t[5]=(r*A-n*O-a*E)*I,t[6]=(g*_-v*w+m*M)*I,t[7]=(v*b-d*_-m*y)*I,t[8]=(d*w-g*b+m*x)*I,t},e.projection=function(t,e,n){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/n,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t},e.str=function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},e.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t},e.subtract=a,e.multiplyScalar=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t},e.multiplyScalarAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t[3]=e[3]+n[3]*r,t[4]=e[4]+n[4]*r,t[5]=e[5]+n[5]*r,t[6]=e[6]+n[6]*r,t[7]=e[7]+n[7]*r,t[8]=e[8]+n[8]*r,t},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]},e.equals=function(t,e){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],u=t[5],c=t[6],h=t[7],f=t[8],l=e[0],p=e[1],d=e[2],g=e[3],v=e[4],m=e[5],x=e[6],y=e[7],b=e[8];return Math.abs(n-l)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(i-p)<=r.EPSILON*Math.max(1,Math.abs(i),Math.abs(p))&&Math.abs(a-d)<=r.EPSILON*Math.max(1,Math.abs(a),Math.abs(d))&&Math.abs(o-g)<=r.EPSILON*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(s-v)<=r.EPSILON*Math.max(1,Math.abs(s),Math.abs(v))&&Math.abs(u-m)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(m))&&Math.abs(c-x)<=r.EPSILON*Math.max(1,Math.abs(c),Math.abs(x))&&Math.abs(h-y)<=r.EPSILON*Math.max(1,Math.abs(h),Math.abs(y))&&Math.abs(f-b)<=r.EPSILON*Math.max(1,Math.abs(f),Math.abs(b))};var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(59));function i(t,e,n){var r=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],c=e[6],h=e[7],f=e[8],l=n[0],p=n[1],d=n[2],g=n[3],v=n[4],m=n[5],x=n[6],y=n[7],b=n[8];return t[0]=l*r+p*o+d*c,t[1]=l*i+p*s+d*h,t[2]=l*a+p*u+d*f,t[3]=g*r+v*o+m*c,t[4]=g*i+v*s+m*h,t[5]=g*a+v*u+m*f,t[6]=x*r+y*o+b*c,t[7]=x*i+y*s+b*h,t[8]=x*a+y*u+b*f,t}function a(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t}e.mul=i,e.sub=a},function(t,e,n){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=5,a=n(819);Math.sign=function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1};var o=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}({},a,{throttle:n(749),debounce:n(645),omit:function(t,e){var n={};return a.each(t,function(t,r){-1===e.indexOf(r)&&(n[r]=t)}),n},traverseTree:function(t,e,n,r){void 0===r&&(r=!1);var i=n(t);r&&e(t,null,null),i&&o.each(i,function(r,i){e(r,t,i),o.traverseTree(r,e,n)})},toAllPadding:function(t){var e=0,n=0,r=0,i=0;return o.isNumber(t)||o.isString(t)?e=n=r=i=t:o.isArray(t)&&(e=t[0],r=o.isNil(t[1])?t[0]:t[1],i=o.isNil(t[2])?t[0]:t[2],n=o.isNil(t[3])?r:t[3]),[e,r,i,n]},guid:function(){return"xxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})},mix:function(){var t,e,n=o.toArray(arguments),r=n[0];if(!0===r)for(r=n[1],e=2;e<n.length;e++)s(r,t=n[e]);else for(e=1;e<n.length;e++)for(var i in t=n[e])t.hasOwnProperty(i)&&"constructor"!==i&&(r[i]=t[i]);return r},mixin:function(t,e){if(t&&e){t._mixins=e,t.ATTRS=t.ATTRS||{};o.each(e,function(e){o.augment(t,e)}),t.ATTRS=o.mix({},t.ATTRS)}}});function s(t,e,n){for(var r in n=n||0,e)if(e.hasOwnProperty(r)){var a=e[r];null!==a&&o.isPlainObject(a)?(o.isPlainObject(t[r])||(t[r]={}),n<i?s(t[r],e[r],n+1):t[r]=e[r]):o.isArray(a)?(t[r]=[],t[r]=t[r].concat(a)):void 0!==a&&(t[r]=e[r])}}o.Array={remove:function(t,e){var n=o.indexOf(t,e);-1!==n&&t.splice(n,1)}},t.exports=o},function(t,e,n){var r=n(26),i={},a={draw:function(){}},o={defaultShapeType:null,getShape:function(t,e){return this[t]||this[e]||this[this.defaultShapeType]||a},getExtendShape:function(t,e){var n=this;if(r.isArray(t)){var i={};return t.forEach(function(t){n[t]&&(i=r.mix({},i,n.getShape(t,e)))}),i}return this.getShape(t,e)}};i.registerShapeManager=function(t,e){var n=r.mix({},o,e),a=r.upperFirst(t);return i[a]=n,i["register"+a]=function(t,e,i,a){r.isNil(i)&&r.isNil(a)&&(i=t);var o=n.getExtendShape(i,a),s=r.mix(!0,{},o,e);return s.type=t,n[t]=s,s},n},t.exports=i},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(19),i=/[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,a=/[^\s\,]+/gi;t.exports={parseRadius:function(t){var e=0,n=0,i=0,a=0;return r.isArray(t)?1===t.length?e=n=i=a=t[0]:2===t.length?(e=i=t[0],n=a=t[1]):3===t.length?(e=t[0],n=a=t[1],i=t[2]):(e=t[0],n=t[1],i=t[2],a=t[3]):e=n=i=a=t,{r1:e,r2:n,r3:i,r4:a}},parsePath:function(t){return t=t||[],r.isArray(t)?t:r.isString(t)?(t=t.match(i),r.each(t,function(e,n){if((e=e.match(a))[0].length>1){var i=e[0].charAt(0);e.splice(1,0,e[0].substr(1)),e[0]=i}r.each(e,function(t,n){isNaN(t)||(e[n]=+t)}),t[n]=e}),t):void 0}}},function(t,e,n){var r=n(237);t.exports=function(t){return r(t)?"":t.toString()}},function(t,e,n){var r=n(115);t.exports=function(t){return r(t,"String")}},function(t,e,n){var r=n(619),i=n(115);t.exports=function(t){if(!r(t)||!i(t,"Object"))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}},function(t,e,n){var r=function(t){function e(e){var n;return(n=t.call(this)||this).options=e,n}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t),e.prototype.execute=function(){var t=this,e=this.options;this.roots.forEach(function(n){t.layout(n,e).eachNode(function(t){t.data.x=t.x+t.data.width/2+t.hgap,t.data.y=t.y+t.data.height/2+t.vgap})})},e}(n(622));t.exports=r},function(t,e,n){!function(e,n){t.exports=n()}("undefined"!=typeof self&&self,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var r=n(7);t.exports={assign:r}},function(t,e,n){var r=n(3),i=function(){function t(t,e){void 0===e&&(e={});this.options=e,this.rootNode=r(t,e)}return t.prototype.execute=function(){throw new Error("please override this method")},t}();t.exports=i},function(t,e,n){var r=n(4),i=["LR","RL","TB","BT","H","V"],a=["LR","RL","H"],o=i[0];t.exports=function(t,e,n){var s=e.direction||o;if(e.isHorizontal=function(t){return a.indexOf(t)>-1}(s),s&&-1===i.indexOf(s))throw new TypeError("Invalid direction: "+s);if(s===i[0])n(t,e);else if(s===i[1])n(t,e),t.right2left();else if(s===i[2])n(t,e);else if(s===i[3])n(t,e),t.bottom2top();else if(s===i[4]||s===i[5]){var u=r(t,e),c=u.left,h=u.right;n(c,e),n(h,e),e.isHorizontal?c.right2left():c.bottom2top(),h.translate(c.x-h.x,c.y-h.y),t.x=c.x,t.y=h.y;var f=t.getBoundingBox();e.isHorizontal?f.top<0&&t.translate(0,-f.top):f.left<0&&t.translate(-f.left,0)}return t.translate(-(t.x+t.width/2+t.hgap),-(t.y+t.height/2+t.vgap)),t}},function(t,e,n){var r=n(0),i={getId:function(t){return t.id||t.name},getHGap:function(t){return t.hgap||18},getVGap:function(t){return t.vgap||18},getChildren:function(t){return t.children},getHeight:function(t){return t.height||36},getWidth:function(t){var e=t.name||" ";return t.width||18*e.split("").length}};function a(t,e){var n=this;if(n.vgap=n.hgap=0,t instanceof a)return t;n.data=t;var r=e.getHGap(t),i=e.getVGap(t);return n.width=e.getWidth(t),n.height=e.getHeight(t),n.id=e.getId(t),n.x=n.y=0,n.depth=0,n.children||(n.children=[]),n.addGap(r,i),n}r.assign(a.prototype,{isRoot:function(){return 0===this.depth},isLeaf:function(){return 0===this.children.length},addGap:function(t,e){this.hgap+=t,this.vgap+=e,this.width+=2*t,this.height+=2*e},eachNode:function(t){for(var e,n=[this];e=n.pop();)t(e),n=n.concat(e.children)},DFTraverse:function(t){this.eachNode(t)},BFTraverse:function(t){for(var e,n=[this];e=n.shift();)t(e),n=n.concat(e.children)},getBoundingBox:function(){var t={left:Number.MAX_VALUE,top:Number.MAX_VALUE,width:0,height:0};return this.eachNode(function(e){t.left=Math.min(t.left,e.x),t.top=Math.min(t.top,e.y),t.width=Math.max(t.width,e.x+e.width),t.height=Math.max(t.height,e.y+e.height)}),t},translate:function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.eachNode(function(n){n.x+=t,n.y+=e})},right2left:function(){var t=this.getBoundingBox();this.eachNode(function(e){e.x=e.x-2*(e.x-t.left)-e.width}),this.translate(t.width,0)},bottom2top:function(){var t=this.getBoundingBox();this.eachNode(function(e){e.y=e.y-2*(e.y-t.top)-e.height}),this.translate(0,t.height)}}),t.exports=function(t,e,n){void 0===e&&(e={});var o,s=new a(t,e=r.assign({},i,e)),u=[s];if(!n&&!t.collapsed)for(;o=u.pop();)if(!o.data.collapsed){var c=e.getChildren(o.data),h=c?c.length:0;if(o.children=new Array(h),c&&h)for(var f=0;f<h;f++){var l=new a(c[f],e);o.children[f]=l,u.push(l),l.parent=o,l.depth=o.depth+1}}return s}},function(t,e,n){var r=n(3);t.exports=function(t,e){for(var n=r(t.data,e,!0),i=r(t.data,e,!0),a=t.children.length,o=Math.round(a/2),s=e.getSide||function(t,e){return e<o?"right":"left"},u=0;u<a;u++){var c=t.children[u];"right"===s(c,u)?i.children.push(c):n.children.push(c)}return n.eachNode(function(t){t.isRoot()||(t.side="left")}),i.eachNode(function(t){t.isRoot()||(t.side="right")}),{left:n,right:i}}},function(t,e,n){var r={compactBox:n(6),dendrogram:n(9),indented:n(11),mindmap:n(13)};t.exports=r},function(t,e,n){var r=n(1),i=n(8),a=n(2),o=n(0),s=function(t){function e(){return t.apply(this,arguments)||this}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t),e.prototype.execute=function(){return a(this.rootNode,this.options,i)},e}(r),u={};t.exports=function(t,e){return e=o.assign({},u,e),new s(t,e).execute()}},function(t,e){function n(t,e){for(var n in e)e.hasOwnProperty(n)&&"constructor"!==n&&void 0!==e[n]&&(t[n]=e[n])}t.exports=function(t,e,r,i){return e&&n(t,e),r&&n(t,r),i&&n(t,i),t}},function(t,e){function n(t,e,n,r){void 0===r&&(r=[]);var i=this;i.w=t||0,i.h=e||0,i.y=n||0,i.x=0,i.c=r||[],i.cs=r.length,i.prelim=0,i.mod=0,i.shift=0,i.change=0,i.tl=null,i.tr=null,i.el=null,i.er=null,i.msel=0,i.mser=0}function r(t,e){!function t(e,n,r){r?e.y+=n:e.x+=n,e.children.forEach(function(e){t(e,n,r)})}(t,-function t(e,n){var r=n?e.y:e.x;return e.children.forEach(function(e){r=Math.min(t(e,n),r)}),r}(t,e),e)}n.fromNode=function(t,e){if(!t)return null;var r=[];return t.children.forEach(function(t){r.push(n.fromNode(t,e))}),e?new n(t.height,t.width,t.x,r):new n(t.width,t.height,t.y,r)},t.exports=function(t,e){void 0===e&&(e={});var i=e.isHorizontal;function a(t){0===t.cs?(t.el=t,t.er=t,t.msel=t.mser=0):(t.el=t.c[0].el,t.msel=t.c[0].msel,t.er=t.c[t.cs-1].er,t.mser=t.c[t.cs-1].mser)}function o(t,e,n){for(var r=t.c[e-1],i=r.mod,a=t.c[e],o=a.mod;null!==r&&null!==a;){h(r)>n.low&&(n=n.nxt);var f=i+r.prelim+r.w-(o+a.prelim);f>0&&(o+=f,s(t,e,n.index,f));var l=h(r),p=h(a);l<=p&&null!==(r=c(r))&&(i+=r.mod),l>=p&&null!==(a=u(a))&&(o+=a.mod)}!r&&a?function(t,e,n,r){var i=t.c[0].el;i.tl=n;var a=r-n.mod-t.c[0].msel;i.mod+=a,i.prelim-=a,t.c[0].el=t.c[e].el,t.c[0].msel=t.c[e].msel}(t,e,a,o):r&&!a&&function(t,e,n,r){var i=t.c[e].er;i.tr=n;var a=r-n.mod-t.c[e].mser;i.mod+=a,i.prelim-=a,t.c[e].er=t.c[e-1].er,t.c[e].mser=t.c[e-1].mser}(t,e,r,i)}function s(t,e,n,r){t.c[e].mod+=r,t.c[e].msel+=r,t.c[e].mser+=r,function(t,e,n,r){if(n!==e-1){var i=e-n;t.c[n+1].shift+=r/i,t.c[e].shift-=r/i,t.c[e].change-=r-r/i}}(t,e,n,r)}function u(t){return 0===t.cs?t.tl:t.c[0]}function c(t){return 0===t.cs?t.tr:t.c[t.cs-1]}function h(t){return t.y+t.h}function f(t,e,n){for(;null!==n&&t>=n.low;)n=n.nxt;return{low:t,index:e,nxt:n}}!function t(e,n,r){void 0===r&&(r=0),n?(e.x=r,r+=e.width):(e.y=r,r+=e.height),e.children.forEach(function(e){t(e,n,r)})}(t,i);var l=n.fromNode(t,i);return function t(e){if(0!==e.cs){t(e.c[0]);for(var n=f(h(e.c[0].el),0,null),r=1;r<e.cs;++r){t(e.c[r]);var i=h(e.c[r].er);o(e,r,n),n=f(i,r,n)}!function(t){t.prelim=(t.c[0].prelim+t.c[0].mod+t.c[t.cs-1].mod+t.c[t.cs-1].prelim+t.c[t.cs-1].w)/2-t.w/2}(e),a(e)}else a(e)}(l),function t(e,n){n+=e.mod,e.x=e.prelim+n,function(t){for(var e=0,n=0,r=0;r<t.cs;r++)e+=t.c[r].shift,n+=e+t.c[r].change,t.c[r].mod+=n}(e);for(var r=0;r<e.cs;r++)t(e.c[r],n)}(l,0),function t(e,n,r){r?n.y=e.x:n.x=e.x,e.c.forEach(function(e,i){t(e,n.children[i],r)})}(l,t,i),r(t,i),t}},function(t,e,n){var r=n(1),i=n(10),a=n(2),o=n(0),s=function(t){function e(){return t.apply(this,arguments)||this}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t),e.prototype.execute=function(){return this.rootNode.width=0,a(this.rootNode,this.options,i)},e}(r),u={};t.exports=function(t,e){return e=o.assign({},u,e),new s(t,e).execute()}},function(t,e,n){var r=n(0);var i={isHorizontal:!0,nodeSep:20,nodeSize:20,rankSep:200,subTreeSep:10};t.exports=function(t,e){void 0===e&&(e={}),e=r.assign({},i,e);var n,a=0;var o=function t(e){if(!e)return null;e.width=0,e.depth&&e.depth>a&&(a=e.depth);var n=e.children,r=n.length,i=new function(t,e){void 0===t&&(t=0),void 0===e&&(e=[]);var n=this;n.x=n.y=0,n.leftChild=n.rightChild=null,n.height=0,n.children=e}(e.height,[]);return n.forEach(function(e,n){var a=t(e);i.children.push(a),0===n&&(i.leftChild=a),n===r-1&&(i.rightChild=a)}),i.originNode=e,i.isLeaf=e.isLeaf(),i}(t);return function t(e){if(e.isLeaf||0===e.children.length)e.drawingDepth=a;else{var n=e.children.map(function(e){return t(e)}),r=Math.min.apply(null,n);e.drawingDepth=r-1}return e.drawingDepth}(o),function t(r){r.x=r.drawingDepth*e.rankSep,r.isLeaf?(r.y=0,n&&(r.y=n.y+n.height+e.nodeSep,r.originNode.parent!==n.originNode.parent&&(r.y+=e.subTreeSep)),n=r):(r.children.forEach(function(e){t(e)}),r.y=(r.leftChild.y+r.rightChild.y)/2)}(o),function t(e,n,r){r?(n.x=e.x,n.y=e.y):(n.x=e.y,n.y=e.x),e.children.forEach(function(e,i){t(e,n.children[i],r)})}(o,t,e.isHorizontal),t}},function(t,e,n){var r=n(1),i=n(12),a=n(4),o=n(0),s=["LR","RL","H"],u=s[0],c=function(t){function e(){return t.apply(this,arguments)||this}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t),e.prototype.execute=function(){var t=this.options,e=this.rootNode;t.isHorizontal=!0;var n=t.indent,r=t.direction||u;if(r&&-1===s.indexOf(r))throw new TypeError("Invalid direction: "+r);if(r===s[0])i(e,n);else if(r===s[1])i(e,n),e.right2left();else if(r===s[2]){var o=a(e,t),c=o.left,h=o.right;i(c,n),c.right2left(),i(h,n);var f=c.getBoundingBox();h.translate(f.width,0),e.x=h.x-e.width/2}return e},e}(r),h={};t.exports=function(t,e){return e=o.assign({},h,e),new c(t,e).execute()}},function(t,e){t.exports=function(t,e){void 0===e&&(e=20);var n=null;t.eachNode(function(t){!function(t,e,n){t.x+=n*t.depth,t.y=e?e.y+e.height:0}(t,n,e),n=t})}},function(t,e,n){var r=n(1),i=n(14),a=n(2),o=n(0),s=function(t){function e(){return t.apply(this,arguments)||this}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t),e.prototype.execute=function(){return a(this.rootNode,this.options,i)},e}(r),u={};t.exports=function(t,e){return e=o.assign({},u,e),new s(t,e).execute()}},function(t,e,n){var r=n(0);var i={getSubTreeSep:function(){return 0}};t.exports=function(t,e){void 0===e&&(e={}),e=r.assign({},i,e),t.parent={x:0,width:0,height:0,y:0},t.BFTraverse(function(t){t.x=t.parent.x+t.parent.width}),t.parent=null,function t(e,n){var r=0;return e.children.length?e.children.forEach(function(e){r+=t(e,n)}):r=e.height,e._subTreeSep=n.getSubTreeSep(e.data),e.totalHeight=Math.max(e.height,r)+2*e._subTreeSep,e.totalHeight}(t,e),t.startY=0,t.y=t.totalHeight/2-t.height/2,t.eachNode(function(t){var e=t.children,n=e.length;if(n){var r=e[0];if(r.startY=t.startY+t._subTreeSep,1===n)r.y=t.y+t.height/2-r.height/2;else{r.y=r.startY+r.totalHeight/2-r.height/2;for(var i=1;i<n;i++){var a=e[i];a.startY=e[i-1].startY+e[i-1].totalHeight,a.y=a.startY+a.totalHeight/2-a.height/2}}}}),function t(e){var n=e.children,r=n.length;if(r){n.forEach(function(e){t(e)});var i=n[0],a=n[r-1],o=a.y-i.y+a.height,s=0;if(n.forEach(function(t){s+=t.totalHeight}),o>e.height)e.y=i.y+o/2-e.height/2;else if(1!==n.length||e.height>s){var u=e.y+(e.height-o)/2-i.y;n.forEach(function(t){t.translate(0,u)})}else e.y=(i.y+i.height/2+a.y+a.height/2)/2-e.height/2}}(t)}}])})},function(t,e,n){var r=n(26),i=function(){var t=e.prototype;function e(t){var e=this.getDefaultCfg();r.mix(this,e,t),this._init()}return t.getDefaultCfg=function(){return{}},t._init=function(){},t.destroy=function(){},e}();t.exports=i},function(t,e,n){var r=n(19),i=n(613),a=n(612),o=n(640),s=n(639),u=r.vec3,c=r.mat3,h=["m","l","c","a","q","h","v","t","s","z"];function f(t,e,n){return{x:n.x+t,y:n.y+e}}function l(t,e){return{x:e.x+(e.x-t.x),y:e.y+(e.y-t.y)}}function p(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function d(t,e){return(t[0]*e[0]+t[1]*e[1])/(p(t)*p(e))}function g(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(d(t,e))}var v=function(t,e,n){this.preSegment=e,this.isLast=n,this.init(t,e)};r.augment(v,{init:function(t,e){var n=t[0];e=e||{endPoint:{x:0,y:0}};var i,a,o,s,u=h.indexOf(n)>=0,c=u?n.toUpperCase():n,p=t,v=e.endPoint,m=p[1],x=p[2];switch(c){default:break;case"M":s=u?f(m,x,v):{x:m,y:x},this.command="M",this.params=[v,s],this.subStart=s,this.endPoint=s;break;case"L":s=u?f(m,x,v):{x:m,y:x},this.command="L",this.params=[v,s],this.subStart=e.subStart,this.endPoint=s,this.endTangent=function(){return[s.x-v.x,s.y-v.y]},this.startTangent=function(){return[v.x-s.x,v.y-s.y]};break;case"H":s=u?f(m,0,v):{x:m,y:v.y},this.command="L",this.params=[v,s],this.subStart=e.subStart,this.endPoint=s,this.endTangent=function(){return[s.x-v.x,s.y-v.y]},this.startTangent=function(){return[v.x-s.x,v.y-s.y]};break;case"V":s=u?f(0,m,v):{x:v.x,y:m},this.command="L",this.params=[v,s],this.subStart=e.subStart,this.endPoint=s,this.endTangent=function(){return[s.x-v.x,s.y-v.y]},this.startTangent=function(){return[v.x-s.x,v.y-s.y]};break;case"Q":u?(i=f(m,x,v),a=f(p[3],p[4],v)):(i={x:m,y:x},a={x:p[3],y:p[4]}),this.command="Q",this.params=[v,i,a],this.subStart=e.subStart,this.endPoint=a,this.endTangent=function(){return[a.x-i.x,a.y-i.y]},this.startTangent=function(){return[v.x-i.x,v.y-i.y]};break;case"T":a=u?f(m,x,v):{x:m,y:x},"Q"===e.command?(i=l(e.params[1],v),this.command="Q",this.params=[v,i,a],this.subStart=e.subStart,this.endPoint=a,this.endTangent=function(){return[a.x-i.x,a.y-i.y]},this.startTangent=function(){return[v.x-i.x,v.y-i.y]}):(this.command="TL",this.params=[v,a],this.subStart=e.subStart,this.endPoint=a,this.endTangent=function(){return[a.x-v.x,a.y-v.y]},this.startTangent=function(){return[v.x-a.x,v.y-a.y]});break;case"C":u?(i=f(m,x,v),a=f(p[3],p[4],v),o=f(p[5],p[6],v)):(i={x:m,y:x},a={x:p[3],y:p[4]},o={x:p[5],y:p[6]}),this.command="C",this.params=[v,i,a,o],this.subStart=e.subStart,this.endPoint=o,this.endTangent=function(){return[o.x-a.x,o.y-a.y]},this.startTangent=function(){return[v.x-i.x,v.y-i.y]};break;case"S":u?(a=f(m,x,v),o=f(p[3],p[4],v)):(a={x:m,y:x},o={x:p[3],y:p[4]}),"C"===e.command?(i=l(e.params[2],v),this.command="C",this.params=[v,i,a,o],this.subStart=e.subStart,this.endPoint=o,this.endTangent=function(){return[o.x-a.x,o.y-a.y]},this.startTangent=function(){return[v.x-i.x,v.y-i.y]}):(this.command="SQ",this.params=[v,a,o],this.subStart=e.subStart,this.endPoint=o,this.endTangent=function(){return[o.x-a.x,o.y-a.y]},this.startTangent=function(){return[v.x-a.x,v.y-a.y]});break;case"A":var y=m,b=x,M=p[3],w=p[4],_=p[5];s=u?f(p[6],p[7],v):{x:p[6],y:p[7]},this.command="A";var E=function(t,e,n,i,a,o,s){var u=r.mod(r.toRadian(s),2*Math.PI),c=t.x,h=t.y,f=e.x,l=e.y,p=Math.cos(u)*(c-f)/2+Math.sin(u)*(h-l)/2,v=-1*Math.sin(u)*(c-f)/2+Math.cos(u)*(h-l)/2,m=p*p/(a*a)+v*v/(o*o);m>1&&(a*=Math.sqrt(m),o*=Math.sqrt(m));var x=a*a*(v*v)+o*o*(p*p),y=Math.sqrt((a*a*(o*o)-x)/x);n===i&&(y*=-1),isNaN(y)&&(y=0);var b=y*a*v/o,M=y*-o*p/a,w=(c+f)/2+Math.cos(u)*b-Math.sin(u)*M,_=(h+l)/2+Math.sin(u)*b+Math.cos(u)*M,E=g([1,0],[(p-b)/a,(v-M)/o]),S=[(p-b)/a,(v-M)/o],A=[(-1*p-b)/a,(-1*v-M)/o],P=g(S,A);return d(S,A)<=-1&&(P=Math.PI),d(S,A)>=1&&(P=0),0===i&&P>0&&(P-=2*Math.PI),1===i&&P<0&&(P+=2*Math.PI),[t,w,_,a,o,E,P,u,i]}(v,s,w,_,y,b,M);this.params=E;var S=e.subStart;this.subStart=S,this.endPoint=s;var A=E[5]%(2*Math.PI);r.isNumberEqual(A,2*Math.PI)&&(A=0);var P=E[6]%(2*Math.PI);r.isNumberEqual(P,2*Math.PI)&&(P=0);var O=.001;this.startTangent=function(){0===_&&(O*=-1);var t=E[3]*Math.cos(A-O)+E[1],e=E[4]*Math.sin(A-O)+E[2];return[t-S.x,e-S.y]},this.endTangent=function(){var t=E[6];t-2*Math.PI<1e-4&&(t=0);var e=E[3]*Math.cos(A+t+O)+E[1],n=E[4]*Math.sin(A+t-O)+E[2];return[v.x-e,v.y-n]};break;case"Z":this.command="Z",this.params=[v,e.subStart],this.subStart=e.subStart,this.endPoint=e.subStart}},isInside:function(t,e,n){var r=this.command,a=this.params,o=this.box;if(o&&!i.box(o.minX,o.maxX,o.minY,o.maxY,t,e))return!1;switch(r){default:break;case"M":return!1;case"TL":case"L":case"Z":return i.line(a[0].x,a[0].y,a[1].x,a[1].y,n,t,e);case"SQ":case"Q":return i.quadraticline(a[0].x,a[0].y,a[1].x,a[1].y,a[2].x,a[2].y,n,t,e);case"C":return i.cubicline(a[0].x,a[0].y,a[1].x,a[1].y,a[2].x,a[2].y,a[3].x,a[3].y,n,t,e);case"A":var s=a,h=s[1],f=s[2],l=s[3],p=s[4],d=s[5],g=s[6],v=s[7],m=s[8],x=l>p?l:p,y=l>p?1:l/p,b=l>p?p/l:1;s=[t,e,1];var M=[1,0,0,0,1,0,0,0,1];return c.translate(M,M,[-h,-f]),c.rotate(M,M,-v),c.scale(M,M,[1/y,1/b]),u.transformMat3(s,s,M),i.arcline(0,0,x,d,d+g,1-m,n,s[0],s[1])}return!1},draw:function(t){var e,n,r,i=this.command,a=this.params;switch(i){default:break;case"M":t.moveTo(a[1].x,a[1].y);break;case"TL":case"L":t.lineTo(a[1].x,a[1].y);break;case"SQ":case"Q":e=a[1],n=a[2],t.quadraticCurveTo(e.x,e.y,n.x,n.y);break;case"C":e=a[1],n=a[2],r=a[3],t.bezierCurveTo(e.x,e.y,n.x,n.y,r.x,r.y);break;case"A":var o=a,s=o[1],u=o[2],c=o[3],h=o[4],f=o[5],l=o[6],p=o[7],d=o[8],g=c>h?c:h,v=c>h?1:c/h,m=c>h?h/c:1;t.translate(s,u),t.rotate(p),t.scale(v,m),t.arc(0,0,g,f,f+l,1-d),t.scale(1/v,1/m),t.rotate(-p),t.translate(-s,-u);break;case"Z":t.closePath()}},getBBox:function(t){var e,n,r,i,u=t/2,c=this.params;switch(this.command){default:case"M":case"Z":break;case"TL":case"L":this.box={minX:Math.min(c[0].x,c[1].x)-u,maxX:Math.max(c[0].x,c[1].x)+u,minY:Math.min(c[0].y,c[1].y)-u,maxY:Math.max(c[0].y,c[1].y)+u};break;case"SQ":case"Q":for(r=0,i=(n=o.extrema(c[0].x,c[1].x,c[2].x)).length;r<i;r++)n[r]=o.at(c[0].x,c[1].x,c[2].x,n[r]);for(n.push(c[0].x,c[2].x),r=0,i=(e=o.extrema(c[0].y,c[1].y,c[2].y)).length;r<i;r++)e[r]=o.at(c[0].y,c[1].y,c[2].y,e);e.push(c[0].y,c[2].y),this.box={minX:Math.min.apply(Math,n)-u,maxX:Math.max.apply(Math,n)+u,minY:Math.min.apply(Math,e)-u,maxY:Math.max.apply(Math,e)+u};break;case"C":for(r=0,i=(n=a.extrema(c[0].x,c[1].x,c[2].x,c[3].x)).length;r<i;r++)n[r]=a.at(c[0].x,c[1].x,c[2].x,c[3].x,n[r]);for(r=0,i=(e=a.extrema(c[0].y,c[1].y,c[2].y,c[3].y)).length;r<i;r++)e[r]=a.at(c[0].y,c[1].y,c[2].y,c[3].y,e[r]);n.push(c[0].x,c[3].x),e.push(c[0].y,c[3].y),this.box={minX:Math.min.apply(Math,n)-u,maxX:Math.max.apply(Math,n)+u,minY:Math.min.apply(Math,e)-u,maxY:Math.max.apply(Math,e)+u};break;case"A":var h=c,f=h[1],l=h[2],p=h[3],d=h[4],g=h[5],v=h[6],m=h[7],x=h[8],y=g,b=g+v,M=s.xExtrema(m,p,d),w=1/0,_=-1/0,E=[y,b];for(r=2*-Math.PI;r<=2*Math.PI;r+=Math.PI){var S=M+r;1===x?y<S&&S<b&&E.push(S):b<S&&S<y&&E.push(S)}for(r=0,i=E.length;r<i;r++){var A=s.xAt(m,p,d,f,E[r]);A<w&&(w=A),A>_&&(_=A)}var P=s.yExtrema(m,p,d),O=1/0,C=-1/0,I=[y,b];for(r=2*-Math.PI;r<=2*Math.PI;r+=Math.PI){var T=P+r;1===x?y<T&&T<b&&I.push(T):b<T&&T<y&&I.push(T)}for(r=0,i=I.length;r<i;r++){var k=s.yAt(m,p,d,l,I[r]);k<O&&(O=k),k>C&&(C=k)}this.box={minX:w-u,maxX:_+u,minY:O-u,maxY:C+u}}}}),t.exports=v},function(t,e,n){var r=n(593),i=n(600),a=Math.PI,o=Math.sin,s=Math.cos,u=Math.atan2,c=10,h=a/3;function f(t,e,n,r,i,f,l){var p,d,g,v,m,x,y;if(!e.fill){var b=e.arrowLength||c,M=e.arrowAngle?e.arrowAngle*a/180:h;y=u(r-f,n-i),m=Math.abs(e.lineWidth*s(y))/2,x=Math.abs(e.lineWidth*o(y))/2,l&&(m=-m,x=-x),p=i+b*s(y+M/2),d=f+b*o(y+M/2),g=i+b*s(y-M/2),v=f+b*o(y-M/2),t.beginPath(),t.moveTo(p-m,d-x),t.lineTo(i-m,f-x),t.lineTo(g-m,v-x),t.moveTo(i-m,f-x),t.lineTo(i+m,f+x),t.moveTo(i,f),t.stroke()}}function l(t,e,n,a,o,s,u){var c=u?e.startArrow:e.endArrow,h=c.d,f=0,l=o-n,p=s-a,d=Math.atan(l/p);0===p&&l<0?f=Math.PI:l>0&&p>0?f=Math.PI/2-d:l<0&&p<0?f=-Math.PI/2-d:l>=0&&p<0?f=-d-Math.PI/2:l<=0&&p>0&&(f=Math.PI/2-d);var g=function(t){var e,n=[],a=r.parsePath(t.path);if(!Array.isArray(a)||0===a.length||"M"!==a[0][0]&&"m"!==a[0][0])return!1;for(var o=a.length,s=0;s<a.length;s++){var u=a[s];e=new i(u,e,s===o-1),n.push(e)}return n}(c);if(g){h&&(u?(o+=Math.sin(Math.abs(d))*h,s=s+Math.cos(Math.abs(d))*h-.5*t.lineWidth):(o-=Math.sin(Math.abs(d))*h,s=s-Math.cos(Math.abs(d))*h+.5*t.lineWidth)),t.save(),t.beginPath(),t.translate(o,s),t.rotate(f);for(var v=0;v<g.length;v++)g[v].draw(t);t.setTransform(1,0,0,1,0,0),t.fillStyle=t.strokeStyle,t.fill(),t.restore()}}t.exports={addStartArrow:function(t,e,n,r,i,a){"object"==typeof e.startArrow?l(t,e,n,r,i,a,!0):e.startArrow&&f(t,e,n,r,i,a,!0)},addEndArrow:function(t,e,n,r,i,a){"object"==typeof e.endArrow?l(t,e,n,r,i,a,!1):e.endArrow&&f(t,e,n,r,i,a,!1)}}},function(t,e,n){var r=n(19);function i(t,e,n,r){return{x:Math.cos(r)*n+t,y:Math.sin(r)*n+e}}function a(t,e,n,r){var i,a;return r?t<e?(i=e-t,a=2*Math.PI-n+t):t>n&&(i=2*Math.PI-t+e,a=t-n):(i=t-e,a=n-t),i>a?n:e}function o(t,e,n,i){var o=0;return n-e>=2*Math.PI&&(o=2*Math.PI),e=r.mod(e,2*Math.PI),n=r.mod(n,2*Math.PI)+o,t=r.mod(t,2*Math.PI),i?e>=n?t>n&&t<e?t:a(t,n,e,!0):t<e||t>n?t:a(t,e,n):e<=n?e<t&&t<n?t:a(t,e,n,!0):t>e||t<n?t:a(t,n,e)}function s(t,e,n,i,a,s,u,c,h){var f=[u,c],l=[t,e],p=r.vec2.subtract([],f,l),d=r.vec2.angleTo([1,0],p);d=o(d,i,a,s);var g=[n*Math.cos(d)+t,n*Math.sin(d)+e];return h&&(h.x=g[0],h.y=g[1]),r.vec2.distance(g,f)}t.exports={nearAngle:o,projectPoint:function(t,e,n,r,i,a,o,u){var c={};return s(t,e,n,r,i,a,o,u,c),c},pointDistance:s,box:function(t,e,n,a,s,u){var c=Math.PI/2,h=Math.PI,f=3*Math.PI/2,l=[],p=o(0,a,s,u);0===p&&l.push(i(t,e,n,0)),(p=o(c,a,s,u))===c&&l.push(i(t,e,n,c)),(p=o(h,a,s,u))===h&&l.push(i(t,e,n,h)),(p=o(f,a,s,u))===f&&l.push(i(t,e,n,f)),l.push(i(t,e,n,a)),l.push(i(t,e,n,s));var d=1/0,g=-1/0,v=1/0,m=-1/0;return r.each(l,function(t){d>t.x&&(d=t.x),g<t.x&&(g=t.x),v>t.y&&(v=t.y),m<t.y&&(m=t.y)}),{minX:d,minY:v,maxX:g,maxY:m}}}},function(t,e,n){var r=n(19).vec2;t.exports={at:function(t,e,n){return(e-t)*n+t},pointDistance:function(t,e,n,i,a,o){var s=[n-t,i-e];if(r.exactEquals(s,[0,0]))return NaN;var u=[-s[1],s[0]];r.normalize(u,u);var c=[a-t,o-e];return Math.abs(r.dot(c,u))},box:function(t,e,n,r,i){var a=i/2,o=Math.min(t,n),s=Math.max(t,n);return{minX:o-a,minY:Math.min(e,r)-a,maxX:s+a,maxY:Math.max(e,r)+a}},len:function(t,e,n,r){return Math.sqrt((n-t)*(n-t)+(r-e)*(r-e))}}},function(t,e,n){var r=n(118);t.exports=function(t){return r(t)?Array.prototype.slice.call(t):[]}},function(t,e,n){var r=n(118),i=Array.prototype.indexOf;t.exports=function(t,e){return!!r(t)&&i.call(t,e)>-1}},function(t,e){function n(t,e){for(var n in e)e.hasOwnProperty(n)&&"constructor"!==n&&void 0!==e[n]&&(t[n]=e[n])}t.exports=function(t,e,r,i){return e&&n(t,e),r&&n(t,r),i&&n(t,i),t}},,function(t,e,n){var r=n(26);var i=function(){function t(t){r.mix(this,{id:"",type:null,model:{},group:null,animate:!1,modelCache:{},isItem:!0,visible:!0},t),this._init()}var e=t.prototype;return e._init=function(){this._initGroup(),this.draw()},e._mapping=function(){var t=this.mapper,e=this.model;t.mapping(e)},e._initGroup=function(){var t=this.group,e=this.model,n=this.type;t.isItemContainer=!0,t.id=e.id,t.itemType=n,t.model=e,t.item=this},e._calculateBBox=function(){var t=this.keyShape,e=this.group,n=r.getBBox(t,e);return n.width=n.maxX-n.minX,n.height=n.maxY-n.minY,n.centerX=(n.minX+n.maxX)/2,n.centerY=(n.minY+n.maxY)/2,n},e.getLabel=function(){return this.group.findByClass("label")[0]},e.getGraph=function(){return this.graph},e._setShapeObj=function(){var t=this.graph,e=this.type,n=this.getModel();this.shapeObj=t.getShapeObj(e,n)},e._afterDraw=function(){var t=this.graph;this._setGId(),this._cacheModel(),t.emit("afteritemdraw",{item:this})},e._cacheModel=function(){this.modelCache=r.mix({},this.model)},e._setGId=function(){var t=this.group,e=this.id,n=this.type;t.gid=e,t.deepEach(function(t,r,i){var a=r.gid;if(t.id=e,t.eventPreFix=n,t.gid=a+"-"+i,t.isShape){var o=t.get("type");t.gid+="-"+o}})},e._beforeDraw=function(){var t=this.graph,e=this.group;t.emit("beforeitemdraw",{item:this}),e.resetMatrix(),this.updateCollapsedParent()},e._shouldDraw=function(){return!0},e._getDiff=function(){var t=[],e=this.model,n=this.modelCache;return r.each(e,function(e,i){r.isEqual(e,n[i])||t.push(i)}),0!==t.length&&t},e._drawInner=function(){var t=this.animate;this.group.clear(!t),this._mapping(),this._setShapeObj();var e=this.shapeObj,n=e.draw(this);n&&(n.isKeyShape=!0,this.keyShape=n),e.afterDraw&&e.afterDraw(this)},e.deepEach=function(t,e){r.traverseTree(this,t,e||function(t){return t.getChildren()})},e.getShapeObj=function(){return this.shapeObj},e.updateCollapsedParent=function(){var t=this.dataMap;this.collapsedParent=function t(e,n){var r=n[e.parent];if(!r)return!1;if(r){var i=t(r,n);if(i)return i}return r.collapsed?r:void 0}(this.model,t)},e.isVisible=function(){return this.visible},e.hide=function(){var t=this.group,e=this.graph;e.emit("beforeitemhide",{item:this}),t.hide(),this.visible=!1,e.emit("afteritemhide",{item:this})},e.show=function(){var t=this.group,e=this.graph;e.emit("beforeitemshow",{item:this}),t.show(),this.visible=!0,e.emit("afteritemshow",{item:this})},e.draw=function(){this._beforeDraw(),this._shouldDraw()&&this._drawInner(),this._afterDraw()},e.forceUpdate=function(){this._beforeDraw(),this._drawInner(),this._afterDraw()},e.getCenter=function(){var t=this.getBBox();return{x:t.centerX,y:t.centerY}},e.getBBox=function(){return this.bbox||this._calculateBBox()},e.layoutUpdate=function(){this.isVisible()&&this.draw()},e.update=function(){this.draw()},e.getModel=function(){return this.model},e.getKeyShape=function(){return this.keyShape},e.getGraphicGroup=function(){return this.group},e.getHierarchy=function(){return this.graph.getHierarchy(this)},e.getParent=function(){var t=this.model;return this.itemMap[t.parent]},e.getAllParents=function(){for(var t=this.model,e=this.itemMap,n=[],r=t.parent;r&&e[r];){var i=e[r],a=i.getModel();n.push(i),r=a.parent}return n},e.getAllChildren=function(){var t=[];return this.deepEach(function(e){t.push(e)}),t},e.getChildren=function(){var t=this.id;return this.graph.getItems().filter(function(e){return e.model.parent===t})},e.toFront=function(){this.group.toFront()},e.toBack=function(){this.group.toBack()},e.destroy=function(){if(!this.destroyed){var t=this.animate,e=this.graph;e.emit("beforeitemdestroy",{item:this}),this.group.remove(!t),this.destroyed=!0,e.emit("afteritemdestroy",{item:this})}},t}();t.exports=i},function(t,e){t.exports="2.2.6"},function(t,e,n){var r=n(644),i="\t\n\v\f\r   ᠎             　\u2028\u2029",a=new RegExp("([a-z])["+i+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+i+"]*,?["+i+"]*)+)","ig"),o=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+i+"]*,?["+i+"]*","ig"),s=function(t){if(!t)return null;if(typeof t==typeof[])return t;var e={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},n=[];return String(t).replace(a,function(t,r,i){var a=[],s=r.toLowerCase();if(i.replace(o,function(t,e){e&&a.push(+e)}),"m"===s&&a.length>2&&(n.push([r].concat(a.splice(0,2))),s="l",r="m"===r?"l":"L"),"o"===s&&1===a.length&&n.push([r,a[0]]),"r"===s)n.push([r].concat(a));else for(;a.length>=e[s]&&(n.push([r].concat(a.splice(0,e[s]))),e[s]););}),n},u=function(t,e){for(var n=[],r=0,i=t.length;i-2*!e>r;r+=2){var a=[{x:+t[r-2],y:+t[r-1]},{x:+t[r],y:+t[r+1]},{x:+t[r+2],y:+t[r+3]},{x:+t[r+4],y:+t[r+5]}];e?r?i-4===r?a[3]={x:+t[0],y:+t[1]}:i-2===r&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[i-2],y:+t[i-1]}:i-4===r?a[3]=a[2]:r||(a[0]={x:+t[r],y:+t[r+1]}),n.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return n},c=function(t,e,n,r,i){var a=[];if(null===i&&null===r&&(r=n),t=+t,e=+e,n=+n,r=+r,null!==i){var o=Math.PI/180,s=t+n*Math.cos(-r*o),u=t+n*Math.cos(-i*o);a=[["M",s,e+n*Math.sin(-r*o)],["A",n,n,0,+(i-r>180),0,u,e+n*Math.sin(-i*o)]]}else a=[["M",t,e],["m",0,-r],["a",n,r,0,1,1,0,2*r],["a",n,r,0,1,1,0,-2*r],["z"]];return a},h=function(t){if(!(t=s(t))||!t.length)return[["M",0,0]];var e,n,r=[],i=0,a=0,o=0,h=0,f=0;"M"===t[0][0]&&(o=i=+t[0][1],h=a=+t[0][2],f++,r[0]=["M",i,a]);for(var l,p,d=3===t.length&&"M"===t[0][0]&&"R"===t[1][0].toUpperCase()&&"Z"===t[2][0].toUpperCase(),g=f,v=t.length;g<v;g++){if(r.push(l=[]),(e=(p=t[g])[0])!==e.toUpperCase())switch(l[0]=e.toUpperCase(),l[0]){case"A":l[1]=p[1],l[2]=p[2],l[3]=p[3],l[4]=p[4],l[5]=p[5],l[6]=+p[6]+i,l[7]=+p[7]+a;break;case"V":l[1]=+p[1]+a;break;case"H":l[1]=+p[1]+i;break;case"R":for(var m=2,x=(n=[i,a].concat(p.slice(1))).length;m<x;m++)n[m]=+n[m]+i,n[++m]=+n[m]+a;r.pop(),r=r.concat(u(n,d));break;case"O":r.pop(),(n=c(i,a,p[1],p[2])).push(n[0]),r=r.concat(n);break;case"U":r.pop(),r=r.concat(c(i,a,p[1],p[2],p[3])),l=["U"].concat(r[r.length-1].slice(-2));break;case"M":o=+p[1]+i,h=+p[2]+a;break;default:for(var y=1,b=p.length;y<b;y++)l[y]=+p[y]+(y%2?i:a)}else if("R"===e)n=[i,a].concat(p.slice(1)),r.pop(),r=r.concat(u(n,d)),l=["R"].concat(p.slice(-2));else if("O"===e)r.pop(),(n=c(i,a,p[1],p[2])).push(n[0]),r=r.concat(n);else if("U"===e)r.pop(),r=r.concat(c(i,a,p[1],p[2],p[3])),l=["U"].concat(r[r.length-1].slice(-2));else for(var M=0,w=p.length;M<w;M++)l[M]=p[M];if("O"!==(e=e.toUpperCase()))switch(l[0]){case"Z":i=+o,a=+h;break;case"H":i=l[1];break;case"V":a=l[1];break;case"M":o=l[l.length-2],h=l[l.length-1];break;default:i=l[l.length-2],a=l[l.length-1]}}return r},f=function(t,e,n,r){return[t,e,n,r,n,r]},l=function(t,e,n,r,i,a){return[1/3*t+2/3*n,1/3*e+2/3*r,1/3*i+2/3*n,1/3*a+2/3*r,i,a]},p=function(t,e){var n,r=h(t),i=e&&h(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s=[],u=[],c="",p="",d=function(t,e,n){var r,i;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(function t(e,n,r,i,a,o,s,u,c,h){r===i&&(r+=1);var f,l,p,d,g,v=120*Math.PI/180,m=Math.PI/180*(+a||0),x=[],y=function(t,e,n){return{x:t*Math.cos(n)-e*Math.sin(n),y:t*Math.sin(n)+e*Math.cos(n)}};if(h)l=h[0],p=h[1],d=h[2],g=h[3];else{e=(f=y(e,n,-m)).x,n=f.y,u=(f=y(u,c,-m)).x,c=f.y,e===u&&n===c&&(u+=1,c+=1);var b=(e-u)/2,M=(n-c)/2,w=b*b/(r*r)+M*M/(i*i);w>1&&(r*=w=Math.sqrt(w),i*=w);var _=r*r,E=i*i,S=(o===s?-1:1)*Math.sqrt(Math.abs((_*E-_*M*M-E*b*b)/(_*M*M+E*b*b)));d=S*r*M/i+(e+u)/2,g=S*-i*b/r+(n+c)/2,l=Math.asin(((n-g)/i).toFixed(9)),p=Math.asin(((c-g)/i).toFixed(9)),l=e<d?Math.PI-l:l,p=u<d?Math.PI-p:p,l<0&&(l=2*Math.PI+l),p<0&&(p=2*Math.PI+p),s&&l>p&&(l-=2*Math.PI),!s&&p>l&&(p-=2*Math.PI)}var A=p-l;if(Math.abs(A)>v){var P=p,O=u,C=c;p=l+v*(s&&p>l?1:-1),x=t(u=d+r*Math.cos(p),c=g+i*Math.sin(p),r,i,a,0,s,O,C,[p,P,d,g])}A=p-l;var I=Math.cos(l),T=Math.sin(l),k=Math.cos(p),N=Math.sin(p),L=Math.tan(A/4),B=4/3*r*L,j=4/3*i*L,D=[e,n],R=[e+B*T,n-j*I],F=[u+B*N,c-j*k],Y=[u,c];if(R[0]=2*D[0]-R[0],R[1]=2*D[1]-R[1],h)return[R,F,Y].concat(x);for(var X=[],G=0,q=(x=[R,F,Y].concat(x).join().split(",")).length;G<q;G++)X[G]=G%2?y(x[G-1],x[G],m).y:y(x[G],x[G+1],m).x;return X}.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":"C"===n||"S"===n?(r=2*e.x-e.bx,i=2*e.y-e.by):(r=e.x,i=e.y),t=["C",r,i].concat(t.slice(1));break;case"T":"Q"===n||"T"===n?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"].concat(l(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(l(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat(f(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat(f(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat(f(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat(f(e.x,e.y,e.X,e.Y))}return t},g=function(t,e){if(t[e].length>7){t[e].shift();for(var a=t[e];a.length;)s[e]="A",i&&(u[e]="A"),t.splice(e++,0,["C"].concat(a.splice(0,6)));t.splice(e,1),n=Math.max(r.length,i&&i.length||0)}},v=function(t,e,a,o,s){t&&e&&"M"===t[s][0]&&"M"!==e[s][0]&&(e.splice(s,0,["M",o.x,o.y]),a.bx=0,a.by=0,a.x=t[s][1],a.y=t[s][2],n=Math.max(r.length,i&&i.length||0))};n=Math.max(r.length,i&&i.length||0);for(var m=0;m<n;m++){r[m]&&(c=r[m][0]),"C"!==c&&(s[m]=c,m&&(p=s[m-1])),r[m]=d(r[m],a,p),"A"!==s[m]&&"C"===c&&(s[m]="C"),g(r,m),i&&(i[m]&&(c=i[m][0]),"C"!==c&&(u[m]=c,m&&(p=u[m-1])),i[m]=d(i[m],o,p),"A"!==u[m]&&"C"===c&&(u[m]="C"),g(i,m)),v(r,i,a,o,m),v(i,r,o,a,m);var x=r[m],y=i&&i[m],b=x.length,M=i&&y.length;a.x=x[b-2],a.y=x[b-1],a.bx=parseFloat(x[b-4])||a.x,a.by=parseFloat(x[b-3])||a.y,o.bx=i&&(parseFloat(y[M-4])||o.x),o.by=i&&(parseFloat(y[M-3])||o.y),o.x=i&&y[M-2],o.y=i&&y[M-1]}return i?[r,i]:r},d=/,?([a-z]),?/gi,g=function(t){return t.join(",").replace(d,"$1")},v=function(t,e,n,r,i){return t*(t*(-3*e+9*n-9*r+3*i)+6*e-12*n+6*r)-3*e+3*n},m=function(t,e,n,r,i,a,o,s,u){null===u&&(u=1);for(var c=(u=u>1?1:u<0?0:u)/2,h=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],f=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],l=0,p=0;p<12;p++){var d=c*h[p]+c,g=v(d,t,n,i,o),m=v(d,e,r,a,s),x=g*g+m*m;l+=f[p]*Math.sqrt(x)}return c*l},x=function(t,e,n,r,i,a,o,s){if(!(Math.max(t,n)<Math.min(i,o)||Math.min(t,n)>Math.max(i,o)||Math.max(e,r)<Math.min(a,s)||Math.min(e,r)>Math.max(a,s))){var u=(t-n)*(a-s)-(e-r)*(i-o);if(u){var c=((t*r-e*n)*(i-o)-(t-n)*(i*s-a*o))/u,h=((t*r-e*n)*(a-s)-(e-r)*(i*s-a*o))/u,f=+c.toFixed(2),l=+h.toFixed(2);if(!(f<+Math.min(t,n).toFixed(2)||f>+Math.max(t,n).toFixed(2)||f<+Math.min(i,o).toFixed(2)||f>+Math.max(i,o).toFixed(2)||l<+Math.min(e,r).toFixed(2)||l>+Math.max(e,r).toFixed(2)||l<+Math.min(a,s).toFixed(2)||l>+Math.max(a,s).toFixed(2)))return{x:c,y:h}}}},y=function(t,e,n){return e>=t.x&&e<=t.x+t.width&&n>=t.y&&n<=t.y+t.height},b=function(t,e,n,r,i){if(i)return[["M",+t+ +i,e],["l",n-2*i,0],["a",i,i,0,0,1,i,i],["l",0,r-2*i],["a",i,i,0,0,1,-i,i],["l",2*i-n,0],["a",i,i,0,0,1,-i,-i],["l",0,2*i-r],["a",i,i,0,0,1,i,-i],["z"]];var a=[["M",t,e],["l",n,0],["l",0,r],["l",-n,0],["z"]];return a.parsePathArray=g,a},M=function(t,e,n,r){return null===t&&(t=e=n=r=0),null===e&&(e=t.y,n=t.width,r=t.height,t=t.x),{x:t,y:e,width:n,w:n,height:r,h:r,x2:t+n,y2:e+r,cx:t+n/2,cy:e+r/2,r1:Math.min(n,r)/2,r2:Math.max(n,r)/2,r0:Math.sqrt(n*n+r*r)/2,path:b(t,e,n,r),vb:[t,e,n,r].join(" ")}},w=function(t,e,n,i,a,o,s,u){r.isArray(t)||(t=[t,e,n,i,a,o,s,u]);var c=function(t,e,n,r,i,a,o,s){for(var u,c,h,f,l=[],p=[[],[]],d=0;d<2;++d)if(0===d?(c=6*t-12*n+6*i,u=-3*t+9*n-9*i+3*o,h=3*n-3*t):(c=6*e-12*r+6*a,u=-3*e+9*r-9*a+3*s,h=3*r-3*e),Math.abs(u)<1e-12){if(Math.abs(c)<1e-12)continue;(f=-h/c)>0&&f<1&&l.push(f)}else{var g=c*c-4*h*u,v=Math.sqrt(g);if(!(g<0)){var m=(-c+v)/(2*u);m>0&&m<1&&l.push(m);var x=(-c-v)/(2*u);x>0&&x<1&&l.push(x)}}for(var y,b=l.length,M=b;b--;)y=1-(f=l[b]),p[0][b]=y*y*y*t+3*y*y*f*n+3*y*f*f*i+f*f*f*o,p[1][b]=y*y*y*e+3*y*y*f*r+3*y*f*f*a+f*f*f*s;return p[0][M]=t,p[1][M]=e,p[0][M+1]=o,p[1][M+1]=s,p[0].length=p[1].length=M+2,{min:{x:Math.min.apply(0,p[0]),y:Math.min.apply(0,p[1])},max:{x:Math.max.apply(0,p[0]),y:Math.max.apply(0,p[1])}}}.apply(null,t);return M(c.min.x,c.min.y,c.max.x-c.min.x,c.max.y-c.min.y)},_=function(t,e,n,r,i,a,o,s,u){var c=1-u,h=Math.pow(c,3),f=Math.pow(c,2),l=u*u,p=l*u,d=t+2*u*(n-t)+l*(i-2*n+t),g=e+2*u*(r-e)+l*(a-2*r+e),v=n+2*u*(i-n)+l*(o-2*i+n),m=r+2*u*(a-r)+l*(s-2*a+r);return{x:h*t+3*f*u*n+3*c*u*u*i+p*o,y:h*e+3*f*u*r+3*c*u*u*a+p*s,m:{x:d,y:g},n:{x:v,y:m},start:{x:c*t+u*n,y:c*e+u*r},end:{x:c*i+u*o,y:c*a+u*s},alpha:90-180*Math.atan2(d-v,g-m)/Math.PI}},E=function(t,e,n){if(!function(t,e){return t=M(t),e=M(e),y(e,t.x,t.y)||y(e,t.x2,t.y)||y(e,t.x,t.y2)||y(e,t.x2,t.y2)||y(t,e.x,e.y)||y(t,e.x2,e.y)||y(t,e.x,e.y2)||y(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y)}(w(t),w(e)))return n?0:[];for(var r=~~(m.apply(0,t)/8),i=~~(m.apply(0,e)/8),a=[],o=[],s={},u=n?0:[],c=0;c<r+1;c++){var h=_.apply(0,t.concat(c/r));a.push({x:h.x,y:h.y,t:c/r})}for(var f=0;f<i+1;f++){var l=_.apply(0,e.concat(f/i));o.push({x:l.x,y:l.y,t:f/i})}for(var p=0;p<r;p++)for(var d=0;d<i;d++){var g=a[p],v=a[p+1],b=o[d],E=o[d+1],S=Math.abs(v.x-g.x)<.001?"y":"x",A=Math.abs(E.x-b.x)<.001?"y":"x",P=x(g.x,g.y,v.x,v.y,b.x,b.y,E.x,E.y);if(P){if(s[P.x.toFixed(4)]===P.y.toFixed(4))continue;s[P.x.toFixed(4)]=P.y.toFixed(4);var O=g.t+Math.abs((P[S]-g[S])/(v[S]-g[S]))*(v.t-g.t),C=b.t+Math.abs((P[A]-b[A])/(E[A]-b[A]))*(E.t-b.t);O>=0&&O<=1&&C>=0&&C<=1&&(n?u++:u.push({x:P.x,y:P.y,t1:O,t2:C}))}}return u};function S(t,e){var n=[],r=[];return t.length&&function t(e,i){if(1===e.length)n.push(e[0]),r.push(e[0]);else{for(var a=[],o=0;o<e.length-1;o++)0===o&&n.push(e[0]),o===e.length-2&&r.push(e[o+1]),a[o]=[(1-i)*e[o][0]+i*e[o+1][0],(1-i)*e[o][1]+i*e[o+1][1]];t(a,i)}}(t,e),{left:n,right:r.reverse()}}var A=function(t,e,n){if(1===n)return[[].concat(t)];var r=[];if("L"===e[0]||"C"===e[0]||"Q"===e[0])r=r.concat(function(t,e,n){var r=[[t[1],t[2]]];n=n||2;var i=[];"A"===e[0]?(r.push(e[6]),r.push(e[7])):"C"===e[0]?(r.push([e[1],e[2]]),r.push([e[3],e[4]]),r.push([e[5],e[6]])):"S"===e[0]||"Q"===e[0]?(r.push([e[1],e[2]]),r.push([e[3],e[4]])):r.push([e[1],e[2]]);for(var a=r,o=1/n,s=0;s<n-1;s++){var u=S(a,o/(1-o*s));i.push(u.left),a=u.right}return i.push(a),i.map(function(t){var e=[];return 4===t.length&&(e.push("C"),e=e.concat(t[2])),t.length>=3&&(3===t.length&&e.push("Q"),e=e.concat(t[1])),2===t.length&&e.push("L"),e=e.concat(t[t.length-1])})}(t,e,n));else{var i=[].concat(t);"M"===i[0]&&(i[0]="L");for(var a=0;a<=n-1;a++)r.push(i)}return r},P=function(t,e){if(t.length!==e.length)return!1;var n=!0;return r.each(t,function(t,r){if(t!==e[r])return n=!1,!1}),n};function O(t,e,n){var r=null,i=n;return e<i&&(i=e,r="add"),t<i&&(i=t,r="del"),{type:r,min:i}}function C(t,e,n){for(var r,i=[].concat(t),a=1/(n+1),o=I(e)[0],s=1;s<=n;s++)a*=s,0===(r=Math.floor(t.length*a))?i.unshift([o[0]*a+t[r][0]*(1-a),o[1]*a+t[r][1]*(1-a)]):i.splice(r,0,[o[0]*a+t[r][0]*(1-a),o[1]*a+t[r][1]*(1-a)]);return i}function I(t){var e=[];switch(t[0]){case"M":case"L":e.push([t[1],t[2]]);break;case"A":e.push([t[6],t[7]]);break;case"Q":e.push([t[3],t[4]]),e.push([t[1],t[2]]);break;case"T":e.push([t[1],t[2]]);break;case"C":e.push([t[5],t[6]]),e.push([t[1],t[2]]),e.push([t[3],t[4]]);break;case"S":e.push([t[3],t[4]]),e.push([t[1],t[2]]);break;case"H":case"V":e.push([t[1],t[1]])}return e}t.exports={parsePathString:s,parsePathArray:g,pathTocurve:p,pathToAbsolute:h,catmullRomToBezier:u,rectPath:b,fillPath:function(t,e){if(1===t.length)return t;var n=t.length-1,r=e.length-1,i=n/r,a=[];if(1===t.length&&"M"===t[0][0]){for(var o=0;o<r-n;o++)t.push(t[0]);return t}for(var s=0;s<r;s++){var u=Math.floor(i*s);a[u]=(a[u]||0)+1}var c=a.reduce(function(e,r,i){return i===n?e.concat(t[n]):e.concat(A(t[i],t[i+1],r))},[]);return c.unshift(t[0]),"Z"!==e[r]&&"z"!==e[r]||c.push("Z"),c},fillPathByDiff:function(t,e){var n=function(t,e){var n,r,i=t.length,a=e.length,o=0;if(0===i||0===a)return null;for(var s=[],u=0;u<=i;u++)s[u]=[],s[u][0]={min:u};for(var c=0;c<=a;c++)s[0][c]={min:c};for(var h=1;h<=i;h++){n=t[h-1];for(var f=1;f<=a;f++){r=e[f-1],o=P(n,r)?0:1;var l=s[h-1][f].min+1,p=s[h][f-1].min+1,d=s[h-1][f-1].min+o;s[h][f]=O(l,p,d)}}return s}(t,e),r=t.length,i=e.length,a=[],o=1,s=1;if(n[r][i]!==r){for(var u=1;u<=r;u++){var c=n[u][u].min;s=u;for(var h=o;h<=i;h++)n[u][h].min<c&&(c=n[u][h].min,s=h);o=s,n[u][o].type&&a.push({index:u-1,type:n[u][o].type})}for(var f=a.length-1;f>=0;f--)o=a[f].index,"add"===a[f].type?t.splice(o,0,[].concat(t[o])):t.splice(o,1)}var l=i-(r=t.length);if(r<i)for(var p=0;p<l;p++)"z"===t[r-1][0]||"Z"===t[r-1][0]?t.splice(r-2,0,t[r-2]):t.push(t[r-1]),r+=1;return t},formatPath:function(t,e){if(t.length<=1)return t;for(var n,r=0;r<e.length;r++)if(t[r][0]!==e[r][0])switch(n=I(t[r]),e[r][0]){case"M":t[r]=["M"].concat(n[0]);break;case"L":t[r]=["L"].concat(n[0]);break;case"A":t[r]=[].concat(e[r]),t[r][6]=n[0][0],t[r][7]=n[0][1];break;case"Q":if(n.length<2){if(!(r>0)){t[r]=e[r];break}n=C(n,t[r-1],1)}t[r]=["Q"].concat(n.reduce(function(t,e){return t.concat(e)},[]));break;case"T":t[r]=["T"].concat(n[0]);break;case"C":if(n.length<3){if(!(r>0)){t[r]=e[r];break}n=C(n,t[r-1],2)}t[r]=["C"].concat(n.reduce(function(t,e){return t.concat(e)},[]));break;case"S":if(n.length<2){if(!(r>0)){t[r]=e[r];break}n=C(n,t[r-1],1)}t[r]=["S"].concat(n.reduce(function(t,e){return t.concat(e)},[]));break;default:t[r]=e[r]}return t},intersection:function(t,e){return function(t,e,n){var r,i,a,o,s,u,c,h,f,l;t=p(t),e=p(e);for(var d=n?0:[],g=0,v=t.length;g<v;g++){var m=t[g];if("M"===m[0])r=s=m[1],i=u=m[2];else{"C"===m[0]?(r=(f=[r,i].concat(m.slice(1)))[6],i=f[7]):(f=[r,i,r,i,s,u,s,u],r=s,i=u);for(var x=0,y=e.length;x<y;x++){var b=e[x];if("M"===b[0])a=c=b[1],o=h=b[2];else{"C"===b[0]?(a=(l=[a,o].concat(b.slice(1)))[6],o=l[7]):(l=[a,o,a,o,c,h,c,h],a=c,o=h);var M=E(f,l,n);if(n)d+=M;else{for(var w=0,_=M.length;w<_;w++)M[w].segment1=g,M[w].segment2=x,M[w].bez1=f,M[w].bez2=l;d=d.concat(M)}}}}}return d}(t,e)}}},function(t,e,n){var r=n(19),i=n(58),a=n(593),o=n(600),s=function t(e){t.superclass.constructor.call(this,e)};s.Symbols={circle:function(t,e,n){return[["M",t,e],["m",-n,0],["a",n,n,0,1,0,2*n,0],["a",n,n,0,1,0,2*-n,0]]},square:function(t,e,n){return[["M",t-n,e-n],["L",t+n,e-n],["L",t+n,e+n],["L",t-n,e+n],["Z"]]},diamond:function(t,e,n){return[["M",t-n,e],["L",t,e-n],["L",t+n,e],["L",t,e+n],["Z"]]},triangle:function(t,e,n){var r=n*Math.sin(1/3*Math.PI);return[["M",t-n,e+r],["L",t,e-r],["L",t+n,e+r],["z"]]},"triangle-down":function(t,e,n){var r=n*Math.sin(1/3*Math.PI);return[["M",t-n,e-r],["L",t+n,e-r],["L",t,e+r],["Z"]]}},s.ATTRS={path:null,lineWidth:1},r.extend(s,i),r.augment(s,{type:"marker",canFill:!0,canStroke:!0,getDefaultAttrs:function(){return{x:0,y:0,lineWidth:1}},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.radius,i=this.getHitLineWidth()/2+r;return{minX:e-i,minY:n-i,maxX:e+i,maxY:n+i}},_getPath:function(){var t=this._attrs,e=t.x,n=t.y,i=t.radius||t.r,a=t.symbol||"circle";return(r.isFunction(a)?a:s.Symbols[a])(e,n,i)},createPath:function(t){var e=this._cfg.segments;if(!e||this._cfg.hasUpdate){var n,r=a.parsePath(this._getPath());t.beginPath(),e=[];for(var i=0;i<r.length;i++){var s=r[i];n=new o(s,n,i===r.length-1),e.push(n),n.draw(t)}this._cfg.segments=e,this._cfg.hasUpdate=!1}else{t.beginPath();for(var u=0;u<e.length;u++)e[u].draw(t)}}}),t.exports=s},function(t,e,n){var r=n(19),i=r.vec2;function a(t,e,n,r,i){var a=1-i;return a*a*(a*r+3*i*n)+i*i*(i*t+3*a*e)}function o(t,e,n,r,o,s,u,c,h,f,l){var p,d,g,v,m,x,y,b,M=.005,w=1/0,_=[h,f];for(d=0;d<1;d+=.05)g=[a(t,n,o,u,d),a(e,r,s,c,d)],(v=i.squaredDistance(_,g))<w&&(p=d,w=v);w=1/0;for(var E=0;E<32&&!(M<1e-4);E++)b=p+M,g=[a(t,n,o,u,y=p-M),a(e,r,s,c,y)],v=i.squaredDistance(_,g),y>=0&&v<w?(p=y,w=v):(x=[a(t,n,o,u,b),a(e,r,s,c,b)],m=i.squaredDistance(_,x),b<=1&&m<w?(p=b,w=m):M*=.5);return l&&(l.x=a(t,n,o,u,p),l.y=a(e,r,s,c,p)),Math.sqrt(w)}function s(t,e,n,r,i){return t*(t*(-3*e+9*n-9*r+3*i)+6*e-12*n+6*r)-3*e+3*n}t.exports={at:a,derivativeAt:function(t,e,n,r,i){var a=1-i;return 3*(((e-t)*a+2*(n-e)*i)*a+(r-n)*i*i)},projectPoint:function(t,e,n,r,i,a,s,u,c,h){var f={};return o(t,e,n,r,i,a,s,u,c,h,f),f},pointDistance:o,extrema:function(t,e,n,i){var a,o,s,u=3*t-9*e+9*n-3*i,c=6*e-12*n+6*i,h=3*n-3*i,f=[];if(r.isNumberEqual(u,0))r.isNumberEqual(c,0)||(a=-h/c)>=0&&a<=1&&f.push(a);else{var l=c*c-4*u*h;r.isNumberEqual(l,0)?f.push(-c/(2*u)):l>0&&(o=(-c-(s=Math.sqrt(l)))/(2*u),(a=(-c+s)/(2*u))>=0&&a<=1&&f.push(a),o>=0&&o<=1&&f.push(o))}return f},len:function(t,e,n,i,a,o,u,c,h){r.isNil(h)&&(h=1);for(var f=(h=h>1?1:h<0?0:h)/2,l=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;g<12;g++){var v=f*l[g]+f,m=s(v,t,n,a,u),x=s(v,e,i,o,c),y=m*m+x*x;d+=p[g]*Math.sqrt(y)}return f*d}}},function(t,e,n){var r=n(603),i=n(640),a=n(612),o=n(602);t.exports={line:function(t,e,n,i,a,o,s){var u=r.box(t,e,n,i,a);if(!this.box(u.minX,u.maxX,u.minY,u.maxY,o,s))return!1;var c=r.pointDistance(t,e,n,i,o,s);return!isNaN(c)&&c<=a/2},polyline:function(t,e,n,r){var i=t.length-1;if(i<1)return!1;for(var a=0;a<i;a++){var o=t[a][0],s=t[a][1],u=t[a+1][0],c=t[a+1][1];if(this.line(o,s,u,c,e,n,r))return!0}return!1},cubicline:function(t,e,n,r,i,o,s,u,c,h,f){return a.pointDistance(t,e,n,r,i,o,s,u,h,f)<=c/2},quadraticline:function(t,e,n,r,a,o,s,u,c){return i.pointDistance(t,e,n,r,a,o,u,c)<=s/2},arcline:function(t,e,n,r,i,a,s,u,c){return o.pointDistance(t,e,n,r,i,a,u,c)<=s/2},rect:function(t,e,n,r,i,a){return t<=i&&i<=t+n&&e<=a&&a<=e+r},circle:function(t,e,n,r,i){return Math.pow(r-t,2)+Math.pow(i-e,2)<=Math.pow(n,2)},box:function(t,e,n,r,i,a){return t<=i&&i<=e&&n<=a&&a<=r}}},function(t,e,n){var r=n(619),i=n(118),a=n(595);t.exports=function t(e,n){if(e===n)return!0;if(!e||!n)return!1;if(a(e)||a(n))return!1;if(i(e)||i(n)){if(e.length!==n.length)return!1;for(var o=!0,s=0;s<e.length&&(o=t(e[s],n[s]));s++);return o}if(r(e)||r(n)){var u=Object.keys(e),c=Object.keys(n);if(u.length!==c.length)return!1;for(var h=!0,f=0;f<u.length&&(h=t(e[u[f]],n[u[f]]));f++);return h}return!1}},function(t,e,n){var r=n(596),i=n(45),a=5;function o(t,e,n,s){for(var u in n=n||0,s=s||a,e)if(e.hasOwnProperty(u)){var c=e[u];null!==c&&r(c)?(r(t[u])||(t[u]={}),n<s?o(t[u],c,n+1,s):t[u]=e[u]):i(c)?(t[u]=[],t[u]=t[u].concat(c)):void 0!==c&&(t[u]=c)}}t.exports=function(){for(var t=new Array(arguments.length),e=t.length,n=0;n<e;n++)t[n]=arguments[n];for(var r=t[0],i=1;i<e;i++)o(r,t[i]);return r}},function(t,e,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(45);t.exports=function t(e){if("object"!==(void 0===e?"undefined":r(e))||null===e)return e;var n=void 0;if(i(e)){n=[];for(var a=0,o=e.length;a<o;a++)"object"===r(e[a])&&null!=e[a]?n[a]=t(e[a]):n[a]=e[a]}else for(var s in n={},e)"object"===r(e[s])&&null!=e[s]?n[s]=t(e[s]):n[s]=e[s];return n}},function(t,e,n){var r=n(256);r.translate=function(t,e,n){var i=new Array(9);return r.fromTranslation(i,n),r.multiply(t,i,e)},r.rotate=function(t,e,n){var i=new Array(9);return r.fromRotation(i,n),r.multiply(t,i,e)},r.scale=function(t,e,n){var i=new Array(9);return r.fromScaling(i,n),r.multiply(t,i,e)},t.exports=r},function(t,e){t.exports=function(t,e,n){return t<e?e:t>n?n:t}},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){return"object"===(void 0===t?"undefined":n(t))&&null!==t}},function(t,e,n){var r=n(46),i=n(118);t.exports=function(t,e){if(!i(t))return t;var n=[];return r(t,function(t,r){e(t,r)&&n.push(t)}),n}},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){var e=void 0===t?"undefined":n(t);return null!==t&&"object"===e||"function"===e}},function(t,e){var n=function(){function t(){}return t.prototype.execute=function(){throw new Error("please override this method")},t}();t.exports=n},function(t,e,n){t.exports={CompactBoxTree:n(688),Dendrogram:n(687),IndentedTree:n(686),Mindmap:n(685),Base:n(622)}},function(t,e,n){var r=n(26),i=function(t){function e(e){var n={type:"node",isNode:!0,zIndex:3,edges:[],linkable:!0};return r.mix(n,e),t.call(this,n)||this}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n.updatePosition=function(){var t=this.group,e=this.model;t.setMatrix([1,0,0,0,1,0,e.x?e.x:0,e.y?e.y:0,1]),this.bbox=this._calculateBBox()},n._shouldDraw=function(){var e=this._getDiff(),n=t.prototype._shouldDraw.call(this);return e&&!(2===e.length&&-1!==e.indexOf("x")&&-1!==e.indexOf("y"))&&!(1===e.length&&("x"===e[0]||"y"===e[0]))&&n},n._afterDraw=function(){this.updatePosition(),t.prototype._afterDraw.call(this)},n.layoutUpdate=function(){this._beforeDraw(),this._afterDraw()},n.getEdges=function(){var t=this;return this.graph.getEdges().filter(function(e){var n=e.getModel();return n.source===t.id||n.target===t.id})},n.getInEdges=function(){var t=this;return this.getEdges().filter(function(e){return e.target===t})},n.getOutEdges=function(){var t=this;return this.getEdges().filter(function(e){return e.source===t})},n.getLinkPoints=function(t){var e=this.getAnchorPoints();if(r.isNumber(t)&&e[t])return[e[t]];var n=t.x,i=t.y,a=this.getBBox(),o=a.centerX,s=a.centerY,u=n-o,c=i-s,h=this.shapeObj,f=h.anchor||{},l=this.defaultIntersectBox,p=[];if(r.isEmpty(e)){switch(h.intersectBox||f.intersectBox||f.type||l){case"rect":p=[r.getIntersectPointRect(a,t)];break;case"path":if(this.keyShape&&"path"===this.keyShape.get("type")){var d=r.parsePathArray(["M",n,i,"L",o,s]);p=[r.intersection(d,this.keyShape.get("path"))]}break;default:p=[r.getIntersectPointCircle(n,i,a.centerX,a.centerY,Math.max(a.width,a.height)/2)]}r.isEmpty(p[0])&&(p=[{x:o,y:s}])}else p=e.map(function(t){var e=t.x-o,n=t.y-s,i=r.getArcOfVectors({x:u,y:c},{x:e,y:n});return r.mix({},t,{arc:i})}).sort(function(t,e){return t.arc-e.arc});return p},n.getAnchorPoints=function(t){var e,n=this.shapeObj,i=this.getBBox(),a=[],o=n.anchor||{};return e=r.isArray(o)?o:r.isFunction(o)?o(this):r.isFunction(o.points)?o.points(this):o.points,r.each(e,function(t,e){var n=r.mix({x:i.minX+t[0]*i.width,y:i.minY+t[1]*i.height},t[2],{index:e});a.push(n)}),this._anchorPoints=a,r.isNumber(t)?this._anchorPoints[t]:this._anchorPoints},e}(n(608));t.exports=i},function(t,e,n){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(715),n(714),n(713);var i=n(712),a=n(710),o=n(683),s=n(26),u=n(706),c=n(248),h=n(704),f=n(702),l=n(700),p=n(699),d=n(697),g=n(696),v=n(695),m=n(692),x=n(691),y=[g,f,l,h,v,m,n(690),x,p,d],b=function(t){!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(n,t);var e=n.prototype;function n(e){var n,r={};return y.forEach(function(t){s.mix(r,s.clone(t.CFG),e)}),(n=t.call(this,r)||this)._pluginInit(),n.emit("beforeinit"),n._init(),n.emit("afterinit"),n}return e.getDefaultCfg=function(){return{container:void 0,width:void 0,height:void 0,plugins:[],fontFamily:'"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "sans-serif"',nodeDefaultShape:void 0,edgeDefaultShape:void 0,groupDefaultShape:void 0,defaultIntersectBox:"circle",renderer:"canvas",_type:"graph",_controllers:{},_timers:{},_dataMap:{},_itemMap:{},_freezMap:{},_data:{},_delayRunObj:{}}},e._init=function(){var t=this;this._initData(),this._initContainer(),this._initCanvas(),y.forEach(function(e){e.INIT&&t[e.INIT]()}),this.initEvent()},e.initEvent=function(){},e._executeLayout=function(t,e,n,r){s.isFunction(t)?t(e,n,this):s.isObject(t)&&(t.nodes=e,t.edges=n,t.groups=r,t.graph=this,t.execute())},e._pluginInit=function(){var t=this;this.get("plugins").forEach(function(e){t._initPlugin(e)})},e._initPlugin=function(t){t.graph=this,t.init&&t.init()},e._getTimer=function(t){return this.get("_timers")[t]},e._setTimer=function(t,e){this.get("_timers")[t]=e},e._getController=function(t){return this.get("_controllers")[t]},e._initContainer=function(){var t=this.get("container");t||(t=this.get("id")),t=s.initDOMContainer(t,"graph");var e=s.createDOM('<div class="graph-container"></div>',{position:"relative"});t.appendChild(e),this.set("_containerDOM",t),this.set("_graphContainer",e)},e._initCanvas=function(){var t=this.get("_graphContainer"),e=this.get("width"),n=this.get("height"),r=this.get("fontFamily"),i=this.get("renderer"),a={width:e,height:n,fontFamily:r,renderer:i,eventEnable:!1,containerDOM:t};"svg"===i&&(a.pixelRatio=1);var o=new(0,c.Canvas)(a),s=o.get("el");s.style.top=0,s.style.left=0,s.style.overflow="hidden",this.set("_canvas",o);var u=this.getMouseEventWrapper();u.style.outline="none",u.style["user-select"]="none",u.setAttribute("tabindex",20);var h=o.addGroup(),f=h.addGroup();this.set("_itemGroup",f),this.set("_rootGroup",h)},e._initData=function(){this.set("_dataMap",{}),this.set("_itemMap",{_nodes:[],_edges:[],_groups:[],_guides:[]}),this.set("_data",{})},e._refresh=function(){},e.getKeyboardEventWrapper=function(){var t=this.get("keyboardEventWrapper");return t||this.getMouseEventWrapper()},e.getMouseEventWrapper=function(){return this.get("_canvas").get("el")},e.addPlugin=function(t){var e=this.get("plugins");this._initPlugin(t),e.push(t)},e.getGraphContainer=function(){return this.get("_graphContainer")},e._sortGroup=function(t){var e=this.get("_dataMap"),n={};t.forEach(function(t){var r=t.id,i=t.parent;for(n[r]=1;i&&e[i];)n[r]++,i=e[i].parent}),t.sort(function(t,e){return n[e.id]-n[t.id]})},e._addItems=function(t,e){var n=this;this._addDatas(t,e),"group"===t&&this._sortGroup(e);var r=s.upperFirst(t),i=a[r],o=this.get("_itemMap"),u=this.get("_itemGroup"),c=this.get("_dataMap"),h=this.get("animate"),f=this.get("defaultIntersectBox");if(!i)throw new Error("please set valid item type!");e.forEach(function(e){var r=new i({id:e.id,type:t,model:e,group:u.addGroup(),graph:n,mapper:n._getController(t+"Mapper"),itemMap:o,animate:h,dataMap:c,defaultIntersectBox:f});o[e.id]=r,o["_"+t+"s"].push(r)})},e._removeItems=function(t){var e=this.get("_dataMap"),n=this.get("_itemMap");t.forEach(function(t){delete e[t.id],delete n[t.id],s.Array.remove(n["_"+t.type+"s"],t),t.destroy()})},e._updateItems=function(t,e){t.forEach(function(t,n){var r=e[n];r&&s.mix(t.getModel(),r),t.update()})},e._getShowEdge=function(t){var e=t.getSource(),n=t.getTarget();return(e.linkable&&e.isVisible()||!e.linkable)&&(n.linkable&&n.isVisible()||!n.linkable)&&t},e._addDatas=function(t,e){var n=this.get("_dataMap");e.forEach(function(t){if(s.isNil(t.id)&&(t.id=s.guid()),n[t.id])throw new Error("id:"+t.id+" has already been set, please set new one");n[t.id]=t})},e._drawInner=function(){var t=this.get("_data"),e=this.get("_itemGroup"),n=this.get("_dataMap"),r=this.get("_itemMap");t.nodes&&this._addItems("node",t.nodes),t.groups&&this._addItems("group",t.groups),t.edges&&this._addItems("edge",t.edges),t.guides&&this._addItems("guide",t.guides),e.sortBy(function(t){var e=t.id,i=r[e],a=n[e];return a&&!s.isNil(a.index)?a.index:!i||i.destroyed||s.isNil(i.zIndex)?void 0:i.zIndex})},e._clearInner=function(){this.getItems().forEach(function(t){t&&t.destroy()})},e.preventAnimate=function(t){return this.set("_forcePreventAnimate",!0),t(),this.set("_forcePreventAnimate",!1),this},e.getShapeObj=function(t,e){if(!s.isObject(t)){var n=s.upperFirst(t),r=o[n],i=this.get(t+"DefaultShape");return r.getShape(e.shape,i)}return t.getShapeObj()},e.getSource=function(){return this.get("_sourceData")},e.parseSource=function(t){return t},e.getCanvas=function(){return this.get("_canvas")},e.getRootGroup=function(){return this.get("_rootGroup")},e.getItemGroup=function(){return this.get("_itemGroup")},e.source=function(t){return this.emit("beforesource"),this.set("_data",t),this.set("_sourceData",t),this.emit("aftersource"),this},e.render=function(){return this.emit("beforerender"),this.emit("beforedrawinner"),this._drawInner(),this.emit("afterdrawinner"),this.emit("afterrender"),this},e.reRender=function(){var t=this.get("_sourceData");return this.read(t),this},e.setCapture=function(t){this.get("_rootGroup").set("capture",t)},e.destroy=function(){this.emit("beforedestroy");var e=this.get("_canvas"),n=this.get("_graphContainer"),r=this.get("_controllers"),i=this.get("_timers"),a=this.get("_windowForceResizeEvent"),o=this.get("plugins");return s.each(i,function(t){clearTimeout(t)}),s.each(r,function(t){t.destroy()}),o.forEach(function(t){t.destroy&&t.destroy()}),e&&e.destroy(),n.destroy(),window.removeEventListener("resize",a),this.emit("afterdestroy"),t.prototype.destroy.call(this),this},e.save=function(){var t={nodes:[],edges:[],groups:[],guides:[]};return this.get("_itemGroup").get("children").forEach(function(e,n){var r=e.model;if(r){var i=e.itemType,a=s.clone(r);a.index=n,t[i+"s"].push(a)}}),0===t.nodes.length&&delete t.nodes,0===t.edges.length&&delete t.edges,0===t.groups.length&&delete t.groups,0===t.guides.length&&delete t.guides,t},e.add=function(t,e){var n=[],r={action:"add",model:e,affectedItemIds:n};this.emit("beforechange",r);var i=this.get("_itemMap");this._addItems(t,[e]);var a=i[e.id];return a.getAllParents().forEach(function(t){t.update()}),r.item=a,n.push(e.id),this.emit("afterchange",r),a},e.remove=function(t){if((t=this.getItem(t))&&!t.destroyed){var e=[],n=[],r={action:"remove",item:t,affectedItemIds:n};if(t.isNode){var i=t.getEdges();e=e.concat(i)}if(t.isGroup){var a=t.getEdges(),o=t.getAllChildren(),u=t.getCrossEdges(),c=t.getInnerEdges();e=e.concat(a,o,u,c),e=s.uniq(e)}e.push(t);var h=t.getAllParents();return h.forEach(function(t){n.push(t.id)}),e.forEach(function(t){n.push(t.id)}),this.emit("beforechange",r),this._removeItems(e),h.forEach(function(t){t.update()}),this.emit("afterchange",r),this}},e.simpleUpdate=function(t,e){return this._updateItems([t],[e]),this.draw(),this},e.update=function(t,e){var n=this.get("_itemMap");if((t=this.getItem(t))&&!t.destroyed&&e){var r=this.get("animate"),i=[],a=[],o=[],u=t.getModel(),c=s.mix({},u),h={action:"update",item:t,originModel:c,updateModel:e,affectedItemIds:o},f=n[c.parent];if(i.push(t),a.push(e),o.push(t.id),f&&f!==parent&&s.isGroup(f)&&t.getAllParents().forEach(function(t){i.push(t),a.push(null),o.push(t.id)}),e.parent){var l=n[e.parent];if(!l)throw new Error("there is no "+e.parent+" exist, please add a new one!");i.push(l),a.push(null),o.push(l.id),l.getAllParents().forEach(function(t){i.push(t),a.push(null),o.push(t.id)})}if(t.isNode||t.isGroup)t.getEdges().forEach(function(t){i.push(t),a.push(null),o.push(t.id)});return t.isGroup&&!s.isNil(e.collapsed)&&(r&&t.deepEach(function(t){o.push(t.id)}),t.getCrossEdges().forEach(function(t){i.push(t),a.push(null),o.push(t.id)})),this.emit("beforechange",h),this._updateItems(i,a),this.emit("afterchange",h),this}},e.read=function(t){var e=this;if(!t)throw new Error("please read valid data!");var n={action:"changeData",data:t};return this.emit("beforechange",n),this.preventAnimate(function(){e.clear(),e.source(t),e.render()}),this.emit("afterchange",n),this},e.clear=function(){return this.emit("beforeclear"),this._clearInner(),this._initData(),this.emit("afterclear"),this},e.hide=function(t){var e=[],n=[],r={item:t=this.getItem(t),affectedItemIds:n};return e.push(t),t.isNode&&t.getEdges().forEach(function(t){e.push(t)}),t.isGroup&&(t.getEdges().forEach(function(t){e.push(t)}),t.deepEach(function(t){e.push(t)})),(e=s.uniq(e)).forEach(function(t){n.push(t.id)}),this.emit("beforehide",r),e.forEach(function(t){t.hide()}),this.emit("afterhide",r),this},e.show=function(t){var e=this,n=[],r=[],i={item:t=this.getItem(t),affectedItemIds:r};if(t.visible=!0,t.isEdge){var a=this._getShowEdge(t);a&&n.push(a)}else n.push(t);return t.isNode&&t.getEdges().forEach(function(t){(t=e._getShowEdge(t))&&n.push(t)}),t.isGroup&&(t.getEdges().forEach(function(t){(t=e._getShowEdge(t))&&n.push(t)}),t.deepEach(function(t){n.push(t)})),(n=s.uniq(n)).forEach(function(t){r.push(t.id)}),this.emit("beforeshow",i),n.forEach(function(t){t.show()}),this.emit("aftershow",i),this},e.getWidth=function(){return this.get("width")},e.getHeight=function(){return this.get("height")},e.changeSize=function(t,e){if(!(Math.abs(t)>=1/0||Math.abs(e)>=1/0)){var n=this.get("_canvas");return t===this.get("width")&&e===this.get("height")||(this.emit("beforechangesize"),n.changeSize(t,e),this.set("width",t),this.set("height",e),this.emit("afterchangesize"),this.draw()),this}console.warn("size parameter more than the maximum")},e.toFront=function(t){t=this.getItem(t);var e=this.get("_itemGroup"),n=t.getGraphicGroup();s.toFront(n,e),this.draw()},e.toBack=function(t){t=this.getItem(t);var e=this.get("_itemGroup"),n=t.getGraphicGroup();s.toBack(n,e),this.draw()},e.css=function(t){var e=this.getGraphContainer();s.modifyCSS(e,t)},e.saveImage=function(t){var e=this.getBBox(),n=this.getFitViewPadding();return new u(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}({graph:this,width:e.width+n[1]+n[3],height:e.height+n[0]+n[2]},t)).toCanvas()},n}(i);y.forEach(function(t){s.mix(b.prototype,t.AUGMENT)}),t.exports=b},function(t,e){var n={registerBehaviour:function(t,e,r){e.dependences=r,n[t]=e},resetMode:function(t,e){var r,i=[];e._off();for(var a=0;a<t.length;a++)(r=n[t[a]])&&(r.dependences&&r.dependences.forEach(function(t){t&&-1===i.indexOf(t)&&(n[t](e),i.push(t))}),r&&-1===i.indexOf(r)&&r(e))}};t.exports=n},function(t,e,n){var r=n(19),i=n(58),a=function t(e){t.superclass.constructor.call(this,e)};a.ATTRS={x:0,y:0,text:null,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom",lineHeight:null,textArr:null},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"text",getDefaultAttrs:function(){return{lineWidth:1,lineCount:1,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom"}},initTransform:function(){var t=this._attrs.fontSize;t&&+t<12&&this.transform([["t",-1*this._attrs.x,-1*this._attrs.y],["s",+t/12,+t/12],["t",this._attrs.x,this._attrs.y]])},_assembleFont:function(){var t=this._attrs,e=t.fontSize,n=t.fontFamily,r=t.fontWeight,i=t.fontStyle,a=t.fontVariant;t.font=[i,a,r,e+"px",n].join(" ")},_setAttrText:function(){var t=this._attrs,e=t.text,n=null;if(r.isString(e)&&-1!==e.indexOf("\n")){var i=(n=e.split("\n")).length;t.lineCount=i}t.textArr=n},_getTextHeight:function(){var t=this._attrs,e=t.lineCount,n=1*t.fontSize;return e>1?n*e+this._getSpaceingY()*(e-1):n},isHitBox:function(){return!1},calculateBox:function(){var t=this._attrs,e=this._cfg;e.attrs&&!e.hasUpdate||(this._assembleFont(),this._setAttrText()),t.textArr||this._setAttrText();var n=t.x,r=t.y,i=this.measureText();if(!i)return{minX:n,minY:r,maxX:n,maxY:r};var a=this._getTextHeight(),o=t.textAlign,s=t.textBaseline,u=this.getHitLineWidth(),c={x:n,y:r-a};o&&("end"===o||"right"===o?c.x-=i:"center"===o&&(c.x-=i/2)),s&&("top"===s?c.y+=a:"middle"===s&&(c.y+=a/2)),this.set("startPoint",c);var h=u/2;return{minX:c.x-h,minY:c.y-h,maxX:c.x+i+h,maxY:c.y+a+h}},_getSpaceingY:function(){var t=this._attrs,e=t.lineHeight,n=1*t.fontSize;return e?e-n:.14*n},drawInner:function(t){var e=this._attrs,n=this._cfg;n.attrs&&!n.hasUpdate||(this._assembleFont(),this._setAttrText()),t.font=e.font;var i=e.text;if(i){var a=e.textArr,o=e.x,s=e.y;if(t.beginPath(),this.hasStroke()){var u=e.strokeOpacity;r.isNil(u)||1===u||(t.globalAlpha=u),a?this._drawTextArr(t,!1):t.strokeText(i,o,s),t.globalAlpha=1}if(this.hasFill()){var c=e.fillOpacity;r.isNil(c)||1===c||(t.globalAlpha=c),a?this._drawTextArr(t,!0):t.fillText(i,o,s)}n.hasUpdate=!1}},_drawTextArr:function(t,e){var n,i=this._attrs.textArr,a=this._attrs.textBaseline,o=1*this._attrs.fontSize,s=this._getSpaceingY(),u=this._attrs.x,c=this._attrs.y,h=this.getBBox(),f=h.maxY-h.minY;r.each(i,function(r,i){n=c+i*(s+o)-f+o,"middle"===a&&(n+=f-o-(f-o)/2),"top"===a&&(n+=f-o),e?t.fillText(r,u,n):t.strokeText(r,u,n)})},measureText:function(){var t,e=this._attrs,n=e.text,i=e.font,a=e.textArr,o=0;if(!r.isNil(n)){var s=document.createElement("canvas").getContext("2d");return s.save(),s.font=i,a?r.each(a,function(e){t=s.measureText(e).width,o<t&&(o=t),s.restore()}):(o=s.measureText(n).width,s.restore()),o}}}),t.exports=a},function(t,e,n){var r=n(19),i=n(593).parseRadius,a=n(58),o=function t(e){t.superclass.constructor.call(this,e)};o.ATTRS={x:0,y:0,width:0,height:0,radius:0,lineWidth:1},r.extend(o,a),r.augment(o,{canFill:!0,canStroke:!0,type:"rect",getDefaultAttrs:function(){return{lineWidth:1,radius:0}},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.width,i=t.height,a=this.getHitLineWidth()/2;return{minX:e-a,minY:n-a,maxX:e+r+a,maxY:n+i+a}},createPath:function(t){var e=this._attrs,n=e.x,r=e.y,a=e.width,o=e.height,s=e.radius;if((t=t||this.get("context")).beginPath(),0===s)t.rect(n,r,a,o);else{var u=i(s);t.moveTo(n+u.r1,r),t.lineTo(n+a-u.r2,r),0!==u.r2&&t.arc(n+a-u.r2,r+u.r2,u.r2,-Math.PI/2,0),t.lineTo(n+a,r+o-u.r3),0!==u.r3&&t.arc(n+a-u.r3,r+o-u.r3,u.r3,0,Math.PI/2),t.lineTo(n+u.r4,r+o),0!==u.r4&&t.arc(n+u.r4,r+o-u.r4,u.r4,Math.PI/2,Math.PI),t.lineTo(n,r+u.r1),0!==u.r1&&t.arc(n+u.r1,r+u.r1,u.r1,Math.PI,1.5*Math.PI),t.closePath()}}}),t.exports=o},function(t,e,n){var r=n(19),i=n(58),a=n(601),o=n(603),s=function t(e){t.superclass.constructor.call(this,e)};s.ATTRS={points:null,lineWidth:1,startArrow:!1,endArrow:!1,tCache:null},r.extend(s,i),r.augment(s,{canStroke:!0,type:"polyline",tCache:null,getDefaultAttrs:function(){return{lineWidth:1,startArrow:!1,endArrow:!1}},calculateBox:function(){var t=this._attrs,e=this.getHitLineWidth(),n=t.points;if(!n||0===n.length)return null;var i=1/0,a=1/0,o=-1/0,s=-1/0;r.each(n,function(t){var e=t[0],n=t[1];e<i&&(i=e),e>o&&(o=e),n<a&&(a=n),n>s&&(s=n)});var u=e/2;return{minX:i-u,minY:a-u,maxX:o+u,maxY:s+u}},_setTcache:function(){var t,e,n=this._attrs.points,i=0,a=0,s=[];n&&0!==n.length&&(r.each(n,function(t,e){n[e+1]&&(i+=o.len(t[0],t[1],n[e+1][0],n[e+1][1]))}),i<=0||(r.each(n,function(r,u){n[u+1]&&((t=[])[0]=a/i,e=o.len(r[0],r[1],n[u+1][0],n[u+1][1]),a+=e,t[1]=a/i,s.push(t))}),this.tCache=s))},createPath:function(t){var e,n,r=this._attrs.points;if(!(r.length<2)){for((t=t||this.get("context")).beginPath(),t.moveTo(r[0][0],r[0][1]),n=1,e=r.length-1;n<e;n++)t.lineTo(r[n][0],r[n][1]);t.lineTo(r[e][0],r[e][1])}},getStartTangent:function(){var t=this.__attrs.points,e=[];return e.push([t[1][0],t[1][1]]),e.push([t[0][0],t[0][1]]),e},getEndTangent:function(){var t=this.__attrs.points,e=t.length-1,n=[];return n.push([t[e-1][0],t[e-1][1]]),n.push([t[e][0],t[e][1]]),n},afterPath:function(t){var e=this._attrs,n=e.points,r=n.length-1;t=t||this.get("context"),e.startArrow&&a.addStartArrow(t,e,n[1][0],n[1][1],n[0][0],n[0][1]),e.endArrow&&a.addEndArrow(t,e,n[r-1][0],n[r-1][1],n[r][0],n[r][1])},getPoint:function(t){var e,n,i=this._attrs.points,a=this.tCache;return a||(this._setTcache(),a=this.tCache),r.each(a,function(r,i){t>=r[0]&&t<=r[1]&&(e=(t-r[0])/(r[1]-r[0]),n=i)}),{x:o.at(i[n][0],i[n+1][0],e),y:o.at(i[n][1],i[n+1][1],e)}}}),t.exports=s},function(t,e,n){var r=n(19),i=n(58),a=function t(e){t.superclass.constructor.call(this,e)};a.ATTRS={points:null,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"polygon",getDefaultAttrs:function(){return{lineWidth:1}},calculateBox:function(){var t=this._attrs.points,e=this.getHitLineWidth();if(!t||0===t.length)return null;var n=1/0,i=1/0,a=-1/0,o=-1/0;r.each(t,function(t){var e=t[0],r=t[1];e<n&&(n=e),e>a&&(a=e),r<i&&(i=r),r>o&&(o=r)});var s=e/2;return{minX:n-s,minY:i-s,maxX:a+s,maxY:o+s}},createPath:function(t){var e=this._attrs.points;e.length<2||((t=t||this.get("context")).beginPath(),r.each(e,function(e,n){0===n?t.moveTo(e[0],e[1]):t.lineTo(e[0],e[1])}),t.closePath())}}),t.exports=a},function(t,e,n){var r=n(19),i=n(58),a=n(600),o=n(593),s=n(601),u=n(610),c=n(612),h=function t(e){t.superclass.constructor.call(this,e)};h.ATTRS={path:null,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(h,i),r.augment(h,{canFill:!0,canStroke:!0,type:"path",getDefaultAttrs:function(){return{lineWidth:1,startArrow:!1,endArrow:!1}},_afterSetAttrPath:function(t){if(r.isNil(t))return this.setSilent("segments",null),void this.setSilent("box",void 0);var e,n=o.parsePath(t),i=[];if(r.isArray(n)&&0!==n.length&&("M"===n[0][0]||"m"===n[0][0])){for(var s=n.length,u=0;u<n.length;u++){var c=n[u];e=new a(c,e,u===s-1),i.push(e)}this.setSilent("segments",i),this.setSilent("tCache",null),this.setSilent("box",null)}},calculateBox:function(){var t=this.get("segments");if(!t)return null;var e=this.getHitLineWidth(),n=1/0,i=-1/0,a=1/0,o=-1/0;return r.each(t,function(t){t.getBBox(e);var r=t.box;r&&(r.minX<n&&(n=r.minX),r.maxX>i&&(i=r.maxX),r.minY<a&&(a=r.minY),r.maxY>o&&(o=r.maxY))}),n===1/0||a===1/0?{minX:0,minY:0,maxX:0,maxY:0}:{minX:n,minY:a,maxX:i,maxY:o}},_setTcache:function(){var t,e,n,i,a=0,o=0,s=[],u=this._cfg.curve;u&&(r.each(u,function(t,e){n=u[e+1],i=t.length,n&&(a+=c.len(t[i-2],t[i-1],n[1],n[2],n[3],n[4],n[5],n[6]))}),r.each(u,function(r,h){n=u[h+1],i=r.length,n&&((t=[])[0]=o/a,e=c.len(r[i-2],r[i-1],n[1],n[2],n[3],n[4],n[5],n[6]),o+=e,t[1]=o/a,s.push(t))}),this._cfg.tCache=s)},_calculateCurve:function(){var t=this._attrs.path;this._cfg.curve=u.pathTocurve(t)},getStartTangent:function(){var t,e,n,i,a=this.get("segments");if(a.length>1)if(t=a[0].endPoint,e=a[1].endPoint,n=a[1].startTangent,i=[],r.isFunction(n)){var o=n();i.push([t.x-o[0],t.y-o[1]]),i.push([t.x,t.y])}else i.push([e.x,e.y]),i.push([t.x,t.y]);return i},getEndTangent:function(){var t,e,n,i,a=this.get("segments"),o=a.length;if(o>1)if(t=a[o-2].endPoint,e=a[o-1].endPoint,n=a[o-1].endTangent,i=[],r.isFunction(n)){var s=n();i.push([e.x-s[0],e.y-s[1]]),i.push([e.x,e.y])}else i.push([t.x,t.y]),i.push([e.x,e.y]);return i},getPoint:function(t){var e,n,i=this._cfg.tCache;i||(this._calculateCurve(),this._setTcache(),i=this._cfg.tCache);var a=this._cfg.curve;if(!i)return a?{x:a[0][1],y:a[0][2]}:null;r.each(i,function(r,i){t>=r[0]&&t<=r[1]&&(e=(t-r[0])/(r[1]-r[0]),n=i)});var o=a[n];if(r.isNil(o)||r.isNil(n))return null;var s=o.length,u=a[n+1];return{x:c.at(o[s-2],u[1],u[3],u[5],1-e),y:c.at(o[s-1],u[2],u[4],u[6],1-e)}},createPath:function(t){var e=this.get("segments");if(r.isArray(e)){(t=t||this.get("context")).beginPath();for(var n=e.length,i=0;i<n;i++)e[i].draw(t)}},afterPath:function(t){var e=this._attrs,n=this.get("segments"),i=e.path;if(t=t||this.get("context"),r.isArray(n)&&1!==n.length&&(e.startArrow||e.endArrow)&&"z"!==i[i.length-1]&&"Z"!==i[i.length-1]&&!e.fill){var a=this.getStartTangent();s.addStartArrow(t,e,a[0][0],a[0][1],a[1][0],a[1][1]);var o=this.getEndTangent();s.addEndArrow(t,e,o[0][0],o[0][1],o[1][0],o[1][1])}}}),t.exports=h},function(t,e,n){var r=n(19),i=n(58),a=n(601),o=n(603),s=function t(e){t.superclass.constructor.call(this,e)};s.ATTRS={x1:0,y1:0,x2:0,y2:0,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(s,i),r.augment(s,{canStroke:!0,type:"line",getDefaultAttrs:function(){return{lineWidth:1,startArrow:!1,endArrow:!1}},calculateBox:function(){var t=this._attrs,e=t.x1,n=t.y1,r=t.x2,i=t.y2,a=this.getHitLineWidth();return o.box(e,n,r,i,a)},createPath:function(t){var e=this._attrs,n=e.x1,r=e.y1,i=e.x2,a=e.y2;(t=t||self.get("context")).beginPath(),t.moveTo(n,r),t.lineTo(i,a)},afterPath:function(t){var e=this._attrs,n=e.x1,r=e.y1,i=e.x2,o=e.y2;t=t||this.get("context"),e.startArrow&&a.addStartArrow(t,e,i,o,n,r),e.endArrow&&a.addEndArrow(t,e,n,r,i,o)},getPoint:function(t){var e=this._attrs;return{x:o.at(e.x1,e.x2,t),y:o.at(e.y1,e.y2,t)}}}),t.exports=s},function(t,e,n){var r=n(19),i=n(58),a=function t(e){t.superclass.constructor.call(this,e)};a.ATTRS={x:0,y:0,img:void 0,width:0,height:0,sx:null,sy:null,swidth:null,sheight:null},r.extend(a,i),r.augment(a,{type:"image",isHitBox:function(){return!1},calculateBox:function(){var t=this._attrs;this._cfg.attrs&&this._cfg.attrs.img===t.img||this._setAttrImg();var e=t.x,n=t.y;return{minX:e,minY:n,maxX:e+t.width,maxY:n+t.height}},_beforeSetLoading:function(t){var e=this.get("canvas");return!1===t&&!0===this.get("toDraw")&&(this._cfg.loading=!1,e.draw()),t},_setAttrImg:function(){var t=this,e=t._attrs,n=e.img;if(!r.isString(n))return n instanceof Image?(e.width||t.attr("width",n.width),e.height||t.attr("height",n.height),n):n instanceof HTMLElement&&r.isString(n.nodeName)&&"CANVAS"===n.nodeName.toUpperCase()?(e.width||t.attr("width",Number(n.getAttribute("width"))),e.height||t.attr("height",Number(n.getAttribute("height"))),n):n instanceof ImageData?(e.width||t.attr("width",n.width),e.height||t.attr("height",n.height),n):null;var i=new Image;i.onload=function(){if(t.get("destroyed"))return!1;t.attr("imgSrc",n),t.attr("img",i);var e=t.get("callback");e&&e.call(t),t.set("loading",!1)},i.src=n,i.crossOrigin="Anonymous",t.set("loading",!0)},drawInner:function(t){this._cfg.hasUpdate&&this._setAttrImg(),this.get("loading")?this.set("toDraw",!0):(this._drawImage(t),this._cfg.hasUpdate=!1)},_drawImage:function(t){var e=this._attrs,n=e.x,i=e.y,a=e.img,o=e.width,s=e.height,u=e.sx,c=e.sy,h=e.swidth,f=e.sheight;this.set("toDraw",!1);var l=a;if(l instanceof ImageData&&((l=new Image).src=a),l instanceof Image||l instanceof HTMLElement&&r.isString(l.nodeName)&&"CANVAS"===l.nodeName.toUpperCase()){if(r.isNil(u)||r.isNil(c)||r.isNil(h)||r.isNil(f))return void t.drawImage(l,n,i,o,s);if(!(r.isNil(u)||r.isNil(c)||r.isNil(h)||r.isNil(f)))return void t.drawImage(l,u,c,h,f,n,i,o,s)}}}),t.exports=a},function(t,e,n){var r=n(19),i=n(58),a=n(602),o=function t(e){t.superclass.constructor.call(this,e)};o.ATTRS={x:0,y:0,rs:0,re:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"fan",getDefaultAttrs:function(){return{clockwise:!1,lineWidth:1,rs:0,re:0}},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.rs,i=t.re,o=t.startAngle,s=t.endAngle,u=t.clockwise,c=this.getHitLineWidth(),h=a.box(e,n,r,o,s,u),f=a.box(e,n,i,o,s,u),l=c/2;return{minX:Math.min(h.minX,f.minX)-l,minY:Math.min(h.minY,f.minY)-l,maxX:Math.max(h.maxX,f.maxX)+l,maxY:Math.max(h.maxY,f.maxY)+l}},createPath:function(t){var e=this._attrs,n=e.x,r=e.y,i=e.rs,a=e.re,o=e.startAngle,s=e.endAngle,u=e.clockwise,c={x:Math.cos(o)*i+n,y:Math.sin(o)*i+r},h={x:Math.cos(o)*a+n,y:Math.sin(o)*a+r},f={x:Math.cos(s)*i+n,y:Math.sin(s)*i+r};(t=t||self.get("context")).beginPath(),t.moveTo(c.x,c.y),t.lineTo(h.x,h.y),t.arc(n,r,a,o,s,u),t.lineTo(f.x,f.y),t.arc(n,r,i,s,o,!u),t.closePath()}}),t.exports=o},function(t,e,n){var r=n(19),i=n(58),a=function t(e){t.superclass.constructor.call(this,e)};a.ATTRS={x:0,y:0,rx:1,ry:1,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"ellipse",getDefaultAttrs:function(){return{lineWidth:1}},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.rx,i=t.ry,a=this.getHitLineWidth(),o=r+a/2,s=i+a/2;return{minX:e-o,minY:n-s,maxX:e+o,maxY:n+s}},createPath:function(t){var e=this._attrs,n=e.x,i=e.y,a=e.rx,o=e.ry;t=t||self.get("context");var s=a>o?a:o,u=a>o?1:a/o,c=a>o?o/a:1,h=[1,0,0,0,1,0,0,0,1];r.mat3.scale(h,h,[u,c]),r.mat3.translate(h,h,[n,i]),t.beginPath(),t.save(),t.transform(h[0],h[1],h[3],h[4],h[6],h[7]),t.arc(0,0,s,0,2*Math.PI),t.restore(),t.closePath()}}),t.exports=a},function(t,e,n){var r=n(19),i=n(58),a=function t(e){t.superclass.constructor.call(this,e)};r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"dom",calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.width,i=t.height,a=this.getHitLineWidth()/2;return{minX:e-a,minY:n-a,maxX:e+r+a,maxY:n+i+a}}}),t.exports=a},function(t,e,n){var r=n(19),i=n(58),a=function t(e){t.superclass.constructor.call(this,e)};a.ATTRS={x:0,y:0,r:0,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"circle",getDefaultAttrs:function(){return{lineWidth:1}},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.r,i=this.getHitLineWidth()/2+r;return{minX:e-i,minY:n-i,maxX:e+i,maxY:n+i}},createPath:function(t){var e=this._attrs,n=e.x,r=e.y,i=e.r;t.beginPath(),t.arc(n,r,i,0,2*Math.PI,!1),t.closePath()}}),t.exports=a},function(t,e,n){var r=n(19),i=n(58),a=n(602),o=n(601);function s(t,e,n){return t+e*Math.cos(n)}function u(t,e,n){return t+e*Math.sin(n)}var c=function t(e){t.superclass.constructor.call(this,e)};c.ATTRS={x:0,y:0,r:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(c,i),r.augment(c,{canStroke:!0,type:"arc",getDefaultAttrs:function(){return{x:0,y:0,r:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1,startArrow:!1,endArrow:!1}},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.r,i=t.startAngle,o=t.endAngle,s=t.clockwise,u=this.getHitLineWidth()/2,c=a.box(e,n,r,i,o,s);return c.minX-=u,c.minY-=u,c.maxX+=u,c.maxY+=u,c},getStartTangent:function(){var t=this._attrs,e=t.x,n=t.y,r=t.startAngle,i=t.r,a=t.clockwise,o=Math.PI/180;a&&(o*=-1);var c=[],h=s(e,i,r+o),f=u(n,i,r+o),l=s(e,i,r),p=u(n,i,r);return c.push([h,f]),c.push([l,p]),c},getEndTangent:function(){var t=this._attrs,e=t.x,n=t.y,r=t.endAngle,i=t.r,a=t.clockwise,o=Math.PI/180,c=[];a&&(o*=-1);var h=s(e,i,r+o),f=u(n,i,r+o),l=s(e,i,r),p=u(n,i,r);return c.push([l,p]),c.push([h,f]),c},createPath:function(t){var e=this._attrs,n=e.x,r=e.y,i=e.r,a=e.startAngle,o=e.endAngle,s=e.clockwise;(t=t||self.get("context")).beginPath(),t.arc(n,r,i,a,o,s)},afterPath:function(t){var e=this._attrs;if(t=t||this.get("context"),e.startArrow){var n=this.getStartTangent();o.addStartArrow(t,e,n[0][0],n[0][1],n[1][0],n[1][1])}if(e.endArrow){var r=this.getEndTangent();o.addEndArrow(t,e,r[0][0],r[0][1],r[1][0],r[1][1])}}}),t.exports=c},function(t,e){t.exports={xAt:function(t,e,n,r,i){return e*Math.cos(t)*Math.cos(i)-n*Math.sin(t)*Math.sin(i)+r},yAt:function(t,e,n,r,i){return e*Math.sin(t)*Math.cos(i)+n*Math.cos(t)*Math.sin(i)+r},xExtrema:function(t,e,n){return Math.atan(-n/e*Math.tan(t))},yExtrema:function(t,e,n){return Math.atan(n/(e*Math.tan(t)))}}},function(t,e,n){var r=n(19),i=r.vec2;function a(t,e,n,r){var i=1-r;return i*(i*t+2*r*e)+r*r*n}function o(t,e,n,r,o,s,u,c,h){var f,l,p,d,g,v,m,x=.005,y=1/0,b=[u,c];for(g=0;g<1;g+=.05)p=[a(t,n,o,g),a(e,r,s,g)],(l=i.squaredDistance(b,p))<y&&(f=g,y=l);for(y=1/0,m=0;m<32&&!(x<1e-4);m++){var M=f-x,w=f+x;p=[a(t,n,o,M),a(e,r,s,M)],l=i.squaredDistance(b,p),M>=0&&l<y?(f=M,y=l):(d=[a(t,n,o,w),a(e,r,s,w)],v=i.squaredDistance(b,d),w<=1&&v<y?(f=w,y=v):x*=.5)}return h&&(h.x=a(t,n,o,f),h.y=a(e,r,s,f)),Math.sqrt(y)}t.exports={at:a,projectPoint:function(t,e,n,r,i,a,s,u){var c={};return o(t,e,n,r,i,a,s,u,c),c},pointDistance:o,extrema:function(t,e,n){var i=t+n-2*e;if(r.isNumberEqual(i,0))return[.5];var a=(t-e)/i;return a<=1&&a>=0?[a]:[]}}},function(t,e,n){var r=n(19),i=n(746),a=n(745),o=n(744),s=n(116),u=function(t){this._cfg={zIndex:0,capture:!0,visible:!0,destroyed:!1},r.assign(this._cfg,this.getDefaultCfg(),t),this.initAttrs(this._cfg.attrs),this._cfg.attrs={},this.initTransform(),this.init()};u.CFG={id:null,zIndex:0,canvas:null,parent:null,capture:!0,context:null,visible:!0,destroyed:!1},r.augment(u,i,a,s,o,{init:function(){this.setSilent("animable",!0),this.setSilent("animating",!1)},getParent:function(){return this._cfg.parent},getDefaultCfg:function(){return{}},set:function(t,e){return"zIndex"===t&&this._beforeSetZIndex&&this._beforeSetZIndex(e),"loading"===t&&this._beforeSetLoading&&this._beforeSetLoading(e),this._cfg[t]=e,this},setSilent:function(t,e){this._cfg[t]=e},get:function(t){return this._cfg[t]},show:function(){return this._cfg.visible=!0,this},hide:function(){return this._cfg.visible=!1,this},remove:function(t,e){var n=this._cfg,i=n.parent,a=n.el;return i&&r.remove(i.get("children"),this),a&&(e?i&&i._cfg.tobeRemoved.push(a):a.parentNode.removeChild(a)),(t||void 0===t)&&this.destroy(),this},destroy:function(){this.get("destroyed")||(this._attrs=null,this.removeEvent(),this._cfg={destroyed:!0})},toFront:function(){var t=this._cfg,e=t.parent;if(e){var n=e._cfg.children,r=t.el,i=n.indexOf(this);n.splice(i,1),n.push(this),r&&(r.parentNode.removeChild(r),t.el=null)}},toBack:function(){var t=this._cfg,e=t.parent;if(e){var n=e._cfg.children,r=t.el,i=n.indexOf(this);if(n.splice(i,1),n.unshift(this),r){var a=r.parentNode;a.removeChild(r),a.insertBefore(r,a.firstChild)}}},_beforeSetZIndex:function(t){var e=this._cfg.parent;this._cfg.zIndex=t,r.isNil(e)||e.sort();var n=this._cfg.el;if(n){var i=e._cfg.children,a=i.indexOf(this),o=n.parentNode;o.removeChild(n),a===i.length-1?o.appendChild(n):o.insertBefore(n,o.childNodes[a])}return t},_setAttrs:function(t){return this.attr(t),t},setZIndex:function(t){return this._cfg.zIndex=t,this._beforeSetZIndex(t)},clone:function(){return r.clone(this)},getBBox:function(){}}),t.exports=u},function(t,e,n){var r=n(19),i=n(641),a=n(743),o={},s="_INDEX";function u(t,e,n){for(var r,i=t.length-1;i>=0;i--){var a=t[i];if(a._cfg.visible&&a._cfg.capture&&(a.isGroup?r=a.getShape(e,n):a.isHit(e,n)&&(r=a)),r)break}return r}var c=function t(e){t.superclass.constructor.call(this,e),this.set("children",[]),this.set("tobeRemoved",[]),this._beforeRenderUI(),this._renderUI(),this._bindUI()};r.extend(c,i),r.augment(c,{isGroup:!0,type:"group",canFill:!0,canStroke:!0,getDefaultCfg:function(){return function t(e){if(!e._cfg&&e!==c){var n=e.superclass.constructor;n&&!n._cfg&&t(n),e._cfg={},r.merge(e._cfg,n._cfg),r.merge(e._cfg,e.CFG)}}(this.constructor),r.merge({},this.constructor._cfg)},_beforeRenderUI:function(){},_renderUI:function(){},_bindUI:function(){},addShape:function(t,e){var n=this.get("canvas");e=e||{};var i=o[t];if(i||(i=r.upperFirst(t),o[t]=i),e.attrs&&n){var s=e.attrs;if("text"===t){var u=n.get("fontFamily");u&&(s.fontFamily=s.fontFamily?s.fontFamily:u)}}e.canvas=n,e.type=t;var c=new a[i](e);return this.add(c),c},addGroup:function(t,e){var n,i=this.get("canvas");if(e=r.merge({},e),r.isFunction(t))e?(e.canvas=i,e.parent=this,n=new t(e)):n=new t({canvas:i,parent:this}),this.add(n);else if(r.isObject(t))t.canvas=i,n=new c(t),this.add(n);else{if(void 0!==t)return!1;n=new c,this.add(n)}return n},renderBack:function(t,e){var n=this.get("backShape"),i=this.getBBox();return r.merge(e,{x:i.minX-t[3],y:i.minY-t[0],width:i.width+t[1]+t[3],height:i.height+t[0]+t[2]}),n?n.attr(e):n=this.addShape("rect",{zIndex:-1,attrs:e}),this.set("backShape",n),this.sort(),n},removeChild:function(t,e){if(arguments.length>=2)this.contain(t)&&t.remove(e);else{if(1===arguments.length){if(!r.isBoolean(t))return this.contain(t)&&t.remove(!0),this;e=t}0===arguments.length&&(e=!0),c.superclass.remove.call(this,e)}return this},add:function(t){var e=this,n=e.get("children");if(r.isArray(t))r.each(t,function(t){var n=t.get("parent");n&&n.removeChild(t,!1),e._setCfgProperty(t)}),e._cfg.children=n.concat(t);else{var i=t,a=i.get("parent");a&&a.removeChild(i,!1),e._setCfgProperty(i),n.push(i)}return e},_setCfgProperty:function(t){var e=this._cfg;t.set("parent",this),t.set("canvas",e.canvas),e.timeline&&t.set("timeline",e.timeline)},contain:function(t){return this.get("children").indexOf(t)>-1},getChildByIndex:function(t){return this.get("children")[t]},getFirst:function(){return this.getChildByIndex(0)},getLast:function(){var t=this.get("children").length-1;return this.getChildByIndex(t)},getBBox:function(){var t=1/0,e=-1/0,n=1/0,i=-1/0,a=this.get("children");a.length>0?r.each(a,function(r){if(r.get("visible")){if(r.isGroup&&0===r.get("children").length)return;var a=r.getBBox();if(!a)return!0;var o=[a.minX,a.minY,1],s=[a.minX,a.maxY,1],u=[a.maxX,a.minY,1],c=[a.maxX,a.maxY,1];r.apply(o),r.apply(s),r.apply(u),r.apply(c);var h=Math.min(o[0],s[0],u[0],c[0]),f=Math.max(o[0],s[0],u[0],c[0]),l=Math.min(o[1],s[1],u[1],c[1]),p=Math.max(o[1],s[1],u[1],c[1]);h<t&&(t=h),f>e&&(e=f),l<n&&(n=l),p>i&&(i=p)}}):(t=0,e=0,n=0,i=0);var o={minX:t,minY:n,maxX:e,maxY:i};return o.x=o.minX,o.y=o.minY,o.width=o.maxX-o.minX,o.height=o.maxY-o.minY,o},getCount:function(){return this.get("children").length},sort:function(){var t=this.get("children");return r.each(t,function(t,e){return t[s]=e,t}),t.sort(function(t){return function(e,n){var r=t(e,n);return 0===r?e[s]-n[s]:r}}(function(t,e){return t.get("zIndex")-e.get("zIndex")})),this},findById:function(t){return this.find(function(e){return e.get("id")===t})},find:function(t){if(r.isString(t))return this.findById(t);var e=this.get("children"),n=null;return r.each(e,function(e){if(t(e)?n=e:e.find&&(n=e.find(t)),n)return!1}),n},findAll:function(t){var e=this.get("children"),n=[],i=[];return r.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(i=e.findAllBy(t),n=n.concat(i))}),n},findBy:function(t){var e=this.get("children"),n=null;return r.each(e,function(e){if(t(e)?n=e:e.findBy&&(n=e.findBy(t)),n)return!1}),n},findAllBy:function(t){var e=this.get("children"),n=[],i=[];return r.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(i=e.findAllBy(t),n=n.concat(i))}),n},getShape:function(t,e){var n,r=this._attrs.clip,i=this._cfg.children;if(r){var a=[t,e,1];r.invert(a,this.get("canvas")),r.isPointInPath(a[0],a[1])&&(n=u(i,t,e))}else n=u(i,t,e);return n},clearTotalMatrix:function(){if(this.get("totalMatrix")){this.setSilent("totalMatrix",null);for(var t=this._cfg.children,e=0;e<t.length;e++){t[e].clearTotalMatrix()}}},clear:function(t){for(var e=this._cfg.children,n=e.length-1;n>=0;n--)e[n].remove(!0,t);return this._cfg.children=[],this},destroy:function(){this.get("destroyed")||(this.clear(),c.superclass.destroy.call(this))},clone:function(){var t=this._cfg.children,e=new c;return r.each(t,function(t){e.add(t.clone())}),e}}),t.exports=c},function(t,e,n){var r=n(19),i=function(t,e,n,r){this.type=t,this.target=null,this.currentTarget=null,this.bubbles=n,this.cancelable=r,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.removed=!1,this.event=e};r.augment(i,{preventDefault:function(){this.defaultPrevented=this.cancelable&&!0},stopPropagation:function(){this.propagationStopped=!0},remove:function(){this.remove=!0},clone:function(){return r.clone(this)},toString:function(){return"[Event (type="+this.type+")]"}}),t.exports=i},function(t,e,n){t.exports={isFunction:n(84),isObject:n(621),isBoolean:n(653),isNil:n(237),isString:n(595),isArray:n(45),isNumber:n(236),isEmpty:n(647),uniqueId:n(646),clone:n(616),deepMix:n(615),assign:n(606),merge:n(615),upperFirst:n(655),each:n(46),isEqual:n(614),toArray:n(604),extend:n(650),augment:n(651),remove:n(676),isNumberEqual:n(673),toRadian:n(669),toDegree:n(671),mod:n(672),clamp:n(618),createDom:n(681),modifyCSS:n(680),requestAnimationFrame:n(679),getRatio:function(){return window.devicePixelRatio?window.devicePixelRatio:2},mat3:n(617),vec2:n(668),vec3:n(667),transform:n(666)}},function(t,e,n){var r=n(16),i=n(253),a=n(251),o="Expected a function",s=Math.max,u=Math.min;t.exports=function(t,e,n){var c,h,f,l,p,d,g=0,v=!1,m=!1,x=!0;if("function"!=typeof t)throw new TypeError(o);function y(e){var n=c,r=h;return c=h=void 0,g=e,l=t.apply(r,n)}function b(t){var n=t-d;return void 0===d||n>=e||n<0||m&&t-g>=f}function M(){var t=i();if(b(t))return w(t);p=setTimeout(M,function(t){var n=e-(t-d);return m?u(n,f-(t-g)):n}(t))}function w(t){return p=void 0,x&&c?y(t):(c=h=void 0,l)}function _(){var t=i(),n=b(t);if(c=arguments,h=this,d=t,n){if(void 0===p)return function(t){return g=t,p=setTimeout(M,e),v?y(t):l}(d);if(m)return p=setTimeout(M,e),y(d)}return void 0===p&&(p=setTimeout(M,e)),l}return e=a(e)||0,r(n)&&(v=!!n.leading,f=(m="maxWait"in n)?s(a(n.maxWait)||0,e):f,x="trailing"in n?!!n.trailing:x),_.cancel=function(){void 0!==p&&clearTimeout(p),g=0,c=d=h=p=void 0},_.flush=function(){return void 0===p?l:w(i())},_}},function(t,e){var n=function(){var t={};return function(e){return t[e=e||"g"]?t[e]+=1:t[e]=1,e+t[e]}}();t.exports=n},function(t,e,n){var r=n(237),i=n(118),a=n(654),o=n(652),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(r(t))return!0;if(i(t))return!t.length;var e=a(t);if("Map"===e||"Set"===e)return!t.size;if(o(t))return!Object.keys(t).length;for(var n in t)if(s.call(t,n))return!1;return!0}},function(t,e,n){var r=n(46),i=n(45),a=Object.prototype.hasOwnProperty;t.exports=function(t,e){if(!e||!i(t))return t;var n={},o=null;return r(t,function(t){o=e(t),a.call(n,o)?n[o].push(t):n[o]=[t]}),n}},function(t,e,n){var r=n(84),i=n(45),a=n(648);t.exports=function(t,e){if(!e)return{0:t};if(!r(e)){var n=i(e)?e:e.replace(/\s+/g,"").split("*");e=function(t){for(var e="_",r=0,i=n.length;r<i;r++)e+=t[n[r]]&&t[n[r]].toString();return e}}return a(t,e)}},function(t,e,n){var r=n(84),i=n(606);t.exports=function(t,e,n,a){r(e)||(n=e,e=t,t=function(){});var o=Object.create?function(t,e){return Object.create(t,{constructor:{value:e}})}:function(t,e){function n(){}n.prototype=t;var r=new n;return r.constructor=e,r},s=o(e.prototype,t);return t.prototype=i(s,t.prototype),t.superclass=o(e.prototype,e),i(s,n),i(t,a),t}},function(t,e,n){var r=n(84),i=n(604),a=n(606);t.exports=function(t){for(var e=i(arguments),n=1;n<e.length;n++){var o=e[n];r(o)&&(o=o.prototype),a(t.prototype,o)}}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e,n){var r=n(115);t.exports=function(t){return r(t,"Boolean")}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).replace(/^\[object /,"").replace(/\]$/,"")}},function(t,e,n){var r=n(594);t.exports=function(t){var e=r(t);return e.charAt(0).toUpperCase()+e.substring(1)}},function(t,e,n){var r=n(594);t.exports=function(t){return r(t).toUpperCase()}},function(t,e,n){var r=n(594);t.exports=function(t){return r(t).toLowerCase()}},function(t,e){t.exports=function(t,e){for(var n=[],r=0,i=t.length;i-2*!e>r;r+=2){var a=[{x:+t[r-2],y:+t[r-1]},{x:+t[r],y:+t[r+1]},{x:+t[r+2],y:+t[r+3]},{x:+t[r+4],y:+t[r+5]}];e?r?i-4===r?a[3]={x:+t[0],y:+t[1]}:i-2===r&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[i-2],y:+t[i-1]}:i-4===r?a[3]=a[2]:r||(a[0]={x:+t[r],y:+t[r+1]}),n.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return n}},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r="\t\n\v\f\r   ᠎             　\u2028\u2029",i=new RegExp("([a-z])["+r+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+r+"]*,?["+r+"]*)+)","ig"),a=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+r+"]*,?["+r+"]*","ig");t.exports=function(t){if(!t)return null;if((void 0===t?"undefined":n(t))===n([]))return t;var e={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},r=[];return String(t).replace(i,function(t,n,i){var o=[],s=n.toLowerCase();if(i.replace(a,function(t,e){e&&o.push(+e)}),"m"===s&&o.length>2&&(r.push([n].concat(o.splice(0,2))),s="l",n="m"===n?"l":"L"),"o"===s&&1===o.length&&r.push([n,o[0]]),"r"===s)r.push([n].concat(o));else for(;o.length>=e[s]&&(r.push([n].concat(o.splice(0,e[s]))),e[s]););}),r}},function(t,e,n){var r=n(659),i=n(658);function a(t,e,n,r,i){var a=[];if(null===i&&null===r&&(r=n),t=+t,e=+e,n=+n,r=+r,null!==i){var o=Math.PI/180,s=t+n*Math.cos(-r*o),u=t+n*Math.cos(-i*o);a=[["M",s,e+n*Math.sin(-r*o)],["A",n,n,0,+(i-r>180),0,u,e+n*Math.sin(-i*o)]]}else a=[["M",t,e],["m",0,-r],["a",n,r,0,1,1,0,2*r],["a",n,r,0,1,1,0,-2*r],["z"]];return a}t.exports=function(t){if(!(t=r(t))||!t.length)return[["M",0,0]];var e=[],n=0,o=0,s=0,u=0,c=0,h=void 0,f=void 0;"M"===t[0][0]&&(s=n=+t[0][1],u=o=+t[0][2],c++,e[0]=["M",n,o]);for(var l,p,d=3===t.length&&"M"===t[0][0]&&"R"===t[1][0].toUpperCase()&&"Z"===t[2][0].toUpperCase(),g=c,v=t.length;g<v;g++){if(e.push(l=[]),(h=(p=t[g])[0])!==h.toUpperCase())switch(l[0]=h.toUpperCase(),l[0]){case"A":l[1]=p[1],l[2]=p[2],l[3]=p[3],l[4]=p[4],l[5]=p[5],l[6]=+p[6]+n,l[7]=+p[7]+o;break;case"V":l[1]=+p[1]+o;break;case"H":l[1]=+p[1]+n;break;case"R":for(var m=2,x=(f=[n,o].concat(p.slice(1))).length;m<x;m++)f[m]=+f[m]+n,f[++m]=+f[m]+o;e.pop(),e=e.concat(i(f,d));break;case"O":e.pop(),(f=a(n,o,p[1],p[2])).push(f[0]),e=e.concat(f);break;case"U":e.pop(),e=e.concat(a(n,o,p[1],p[2],p[3])),l=["U"].concat(e[e.length-1].slice(-2));break;case"M":s=+p[1]+n,u=+p[2]+o;break;default:for(var y=1,b=p.length;y<b;y++)l[y]=+p[y]+(y%2?n:o)}else if("R"===h)f=[n,o].concat(p.slice(1)),e.pop(),e=e.concat(i(f,d)),l=["R"].concat(p.slice(-2));else if("O"===h)e.pop(),(f=a(n,o,p[1],p[2])).push(f[0]),e=e.concat(f);else if("U"===h)e.pop(),e=e.concat(a(n,o,p[1],p[2],p[3])),l=["U"].concat(e[e.length-1].slice(-2));else for(var M=0,w=p.length;M<w;M++)l[M]=p[M];if("O"!==(h=h.toUpperCase()))switch(l[0]){case"Z":n=+s,o=+u;break;case"H":n=l[1];break;case"V":o=l[1];break;case"M":s=l[l.length-2],u=l[l.length-1];break;default:n=l[l.length-2],o=l[l.length-1]}}return e}},function(t,e,n){var r=n(660),i=function(t,e,n,r){return[t,e,n,r,n,r]},a=function(t,e,n,r,i,a){return[1/3*t+2/3*n,1/3*e+2/3*r,1/3*i+2/3*n,1/3*a+2/3*r,i,a]};t.exports=function(t,e){var n=r(t),o=e&&r(e),s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},u={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},c=[],h=[],f="",l="",p=void 0,d=function(t,e,n){var r=void 0,o=void 0;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(function t(e,n,r,i,a,o,s,u,c,h){r===i&&(r+=1);var f=120*Math.PI/180,l=Math.PI/180*(+a||0),p=[],d=void 0,g=void 0,v=void 0,m=void 0,x=void 0,y=function(t,e,n){return{x:t*Math.cos(n)-e*Math.sin(n),y:t*Math.sin(n)+e*Math.cos(n)}};if(h)g=h[0],v=h[1],m=h[2],x=h[3];else{e=(d=y(e,n,-l)).x,n=d.y,u=(d=y(u,c,-l)).x,c=d.y,e===u&&n===c&&(u+=1,c+=1);var b=(e-u)/2,M=(n-c)/2,w=b*b/(r*r)+M*M/(i*i);w>1&&(r*=w=Math.sqrt(w),i*=w);var _=r*r,E=i*i,S=(o===s?-1:1)*Math.sqrt(Math.abs((_*E-_*M*M-E*b*b)/(_*M*M+E*b*b)));m=S*r*M/i+(e+u)/2,x=S*-i*b/r+(n+c)/2,g=Math.asin(((n-x)/i).toFixed(9)),v=Math.asin(((c-x)/i).toFixed(9)),g=e<m?Math.PI-g:g,v=u<m?Math.PI-v:v,g<0&&(g=2*Math.PI+g),v<0&&(v=2*Math.PI+v),s&&g>v&&(g-=2*Math.PI),!s&&v>g&&(v-=2*Math.PI)}var A=v-g;if(Math.abs(A)>f){var P=v,O=u,C=c;v=g+f*(s&&v>g?1:-1),p=t(u=m+r*Math.cos(v),c=x+i*Math.sin(v),r,i,a,0,s,O,C,[v,P,m,x])}A=v-g;var I=Math.cos(g),T=Math.sin(g),k=Math.cos(v),N=Math.sin(v),L=Math.tan(A/4),B=4/3*r*L,j=4/3*i*L,D=[e,n],R=[e+B*T,n-j*I],F=[u+B*N,c-j*k],Y=[u,c];if(R[0]=2*D[0]-R[0],R[1]=2*D[1]-R[1],h)return[R,F,Y].concat(p);for(var X=[],G=0,q=(p=[R,F,Y].concat(p).join().split(",")).length;G<q;G++)X[G]=G%2?y(p[G-1],p[G],l).y:y(p[G],p[G+1],l).x;return X}.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":"C"===n||"S"===n?(r=2*e.x-e.bx,o=2*e.y-e.by):(r=e.x,o=e.y),t=["C",r,o].concat(t.slice(1));break;case"T":"Q"===n||"T"===n?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"].concat(a(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(a(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat(i(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat(i(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat(i(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat(i(e.x,e.y,e.X,e.Y))}return t},g=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)c[e]="A",o&&(h[e]="A"),t.splice(e++,0,["C"].concat(r.splice(0,6)));t.splice(e,1),p=Math.max(n.length,o&&o.length||0)}},v=function(t,e,r,i,a){t&&e&&"M"===t[a][0]&&"M"!==e[a][0]&&(e.splice(a,0,["M",i.x,i.y]),r.bx=0,r.by=0,r.x=t[a][1],r.y=t[a][2],p=Math.max(n.length,o&&o.length||0))};p=Math.max(n.length,o&&o.length||0);for(var m=0;m<p;m++){n[m]&&(f=n[m][0]),"C"!==f&&(c[m]=f,m&&(l=c[m-1])),n[m]=d(n[m],s,l),"A"!==c[m]&&"C"===f&&(c[m]="C"),g(n,m),o&&(o[m]&&(f=o[m][0]),"C"!==f&&(h[m]=f,m&&(l=h[m-1])),o[m]=d(o[m],u,l),"A"!==h[m]&&"C"===f&&(h[m]="C"),g(o,m)),v(n,o,s,u,m),v(o,n,u,s,m);var x=n[m],y=o&&o[m],b=x.length,M=o&&y.length;s.x=x[b-2],s.y=x[b-1],s.bx=parseFloat(x[b-4])||s.x,s.by=parseFloat(x[b-3])||s.y,u.bx=o&&(parseFloat(y[M-4])||u.x),u.by=o&&(parseFloat(y[M-3])||u.y),u.x=o&&y[M-2],u.y=o&&y[M-1]}return o?[n,o]:n}},function(t,e){var n=/,?([a-z]),?/gi;t.exports=function(t){return t.join(",").replace(n,"$1")}},function(t,e,n){var r=n(662);t.exports=function(t,e,n,i,a){if(a)return[["M",+t+ +a,e],["l",n-2*a,0],["a",a,a,0,0,1,a,a],["l",0,i-2*a],["a",a,a,0,0,1,-a,a],["l",2*a-n,0],["a",a,a,0,0,1,-a,-a],["l",0,2*a-i],["a",a,a,0,0,1,a,-a],["z"]];var o=[["M",t,e],["l",n,0],["l",0,i],["l",-n,0],["z"]];return o.parsePathArray=r,o}},function(t,e,n){var r=n(46),i=n(84),a=Object.values?function(t){return Object.values(t)}:function(t){var e=[];return r(t,function(n,r){i(t)&&"prototype"===r||e.push(n)}),e};t.exports=a},function(t,e){t.exports=function(t,e){return t.hasOwnProperty(e)}},function(t,e,n){var r=n(616),i=n(46),a=n(617);t.exports=function(t,e){return t=r(t),i(e,function(e){switch(e[0]){case"t":a.translate(t,t,[e[1],e[2]]);break;case"s":a.scale(t,t,[e[1],e[2]]);break;case"r":a.rotate(t,t,e[1]);break;case"m":a.multiply(t,t,e[1]);break;default:return!1}}),t}},function(t,e,n){var r=n(254);t.exports=r},function(t,e,n){var r=n(255),i=n(618);r.angle=function(t,e){var n=r.dot(t,e)/(r.length(t)*r.length(e));return Math.acos(i(n,-1,1))},r.direction=function(t,e){return t[0]*e[1]-e[0]*t[1]},r.angleTo=function(t,e,n){var i=r.angle(t,e),a=r.direction(t,e)>=0;return n?a?2*Math.PI-i:i:a?i:2*Math.PI-i},r.vertical=function(t,e,n){return n?(t[0]=e[1],t[1]=-1*e[0]):(t[0]=-1*e[1],t[1]=e[0]),t},t.exports=r},function(t,e){var n=Math.PI/180;t.exports=function(t){return n*t}},function(t,e){t.exports=parseInt},function(t,e){var n=180/Math.PI;t.exports=function(t){return n*t}},function(t,e){t.exports=function(t,e){return(t%e+e)%e}},function(t,e){t.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e-5;return Math.abs(t-e)<n}},function(t,e,n){var r=n(46),i=n(605);t.exports=function(t){var e=[];return r(t,function(t){i(e,t)||e.push(t)}),e}},function(t,e,n){var r=n(118),i=Array.prototype.splice;t.exports=function(t,e){if(!r(t))return[];for(var n=t?e.length:0,a=n-1;n--;){var o=void 0,s=e[n];n!==a&&s===o||(o=s,i.call(t,s,1))}return t}},function(t,e){var n=Array.prototype,r=n.splice,i=n.indexOf,a=n.slice;t.exports=function(t){for(var e=a.call(arguments,1),n=0;n<e.length;n++)for(var o=e[n],s=-1;(s=i.call(t,o))>-1;)r.call(t,s,1);return t}},function(t,e,n){var r=n(46),i=n(84),a=Object.keys?function(t){return Object.keys(t)}:function(t){var e=[];return r(t,function(n,r){i(t)&&"prototype"===r||e.push(r)}),e};t.exports=a},function(t,e,n){var r=n(677),i=n(237);t.exports=function(t,e){var n=r(e),a=n.length;if(i(t))return!a;for(var o=0;o<a;o+=1){var s=n[o];if(e[s]!==t[s]||!(s in t))return!1}return!0}},function(t,e){t.exports=function(t){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return setTimeout(t,16)})(t)}},function(t,e){t.exports=function(t,e){if(t)for(var n in e)e.hasOwnProperty(n)&&(t.style[n]=e[n]);return t}},function(t,e){var n=document.createElement("table"),r=document.createElement("tr"),i=/^\s*<(\w+|!)[^>]*>/,a={tr:document.createElement("tbody"),tbody:n,thead:n,tfoot:n,td:r,th:r,"*":document.createElement("div")};t.exports=function(t){var e=i.test(t)&&RegExp.$1;e in a||(e="*");var n=a[e];t=t.replace(/(^\s*)|(\s*$)/g,""),n.innerHTML=""+t;var r=n.childNodes[0];return n.removeChild(r),r}},function(t,e,n){var r=n(257),i={isBetween:function(t,e,n){return t>=e&&t<=n},getLineIntersect:function(t,e,n,r){var a=n.x-t.x,o=n.y-t.y,s=e.x-t.x,u=e.y-t.y,c=r.x-n.x,h=r.y-n.y,f=s*h-u*c,l=null;if(f*f>.001*(s*s+u*u)*(c*c+h*h)){var p=(a*h-o*c)/f,d=(a*u-o*s)/f;i.isBetween(p,0,1)&&i.isBetween(d,0,1)&&(l={x:t.x+p*s,y:t.y+p*u})}return l},getIntersectPointRect:function(t,e){var n=t.minX,r=t.minY,a=t.maxX-t.minX,o=t.maxY-t.minY,s=[],u={x:n+a/2,y:r+o/2};s.push({x:n,y:r}),s.push({x:n+a,y:r}),s.push({x:n+a,y:r+o}),s.push({x:n,y:r+o}),s.push({x:n,y:r});for(var c=null,h=1;h<s.length&&!(c=i.getLineIntersect(s[h-1],s[h],u,e));h++);return c},getIntersectPointCircle:function(t,e,n,r,i){if(Math.sqrt(Math.pow(t-n,2)+Math.pow(e-r,2))<i)return null;var a=t-n,o=e-r,s=Math.sign(a),u=Math.sign(o),c=Math.atan(o/a);return{x:n+Math.abs(i*Math.cos(c))*s,y:r+Math.abs(i*Math.sin(c))*u}},applyMatrix:function(t,e,n){void 0===n&&(n=1);var i=[t.x,t.y,n];return r.vec3.transformMat3(i,i,e),{x:i[0],y:i[1]}},invertMatrix:function(t,e,n){void 0===n&&(n=1);var i=r.mat3.invert([],e),a=[t.x,t.y,n];return r.vec3.transformMat3(a,a,i),{x:a[0],y:a[1]}},radixSort:function(t,e){var n,r,i,a,o,s,u,c=10,h=1,f=[],l=1;for(i=0;i<t.length;i++)n=e(t[i]),r=(n=parseInt(n,10)).toString().length,n.toString().length>l&&(l=r);for(i=0;i<l;i++,h*=10,c*=10){for(a=0;a<t.length;a++)o=e(t[a]),void 0===f[o=parseInt(o%c/h,10)]&&(f[o]=[]),f[o].push(t[a]);for(s=0,a=0;a<f.length;a++)if(u=void 0,void 0!==f[a])for(u=f[a].shift();void 0!==u;)t[s++]=u,u=f[a].shift()}return t},getArcOfVectors:function(t,e){var n=t.x,r=t.y,i=e.x,a=e.y,o=Math.sqrt(n*n+r*r),s=Math.sqrt(i*i+a*a);return Math.acos((n*i+r*a)/(o*s))}};t.exports=r.mix({},r,i)},function(t,e,n){var r=n(258);r.registerShapeManager("node",{defaultShapeType:"common"}),r.registerShapeManager("edge",{defaultShapeType:"common"}),r.registerShapeManager("group",{defaultShapeType:"common"}),r.registerShapeManager("guide",{defaultShapeType:"common"}),n(724),n(721),n(719),n(717),t.exports=r},function(t,e,n){var r=n(247),i=n(609),a=n(26);setTimeout(function(){var t=r.track;if(r.track){var e=new Image,n={pg:document.URL,r:(new Date).getTime(),g6:!0,version:i,page_type:"syslog"};a.isObject(t)&&a.mix(n,t);var o=encodeURIComponent(JSON.stringify([n]));e.src="https://kcart.alipay.com/web/bi.do?BIProfile=merge&d="+o}},2e3)},function(t,e,n){var r=n(598),i=function(t){function e(e){var n;return(n=t.call(this,e)||this).layout=r.mindmap,n}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t),e}(n(597));t.exports=i},function(t,e,n){var r=n(598),i=function(t){function e(e){var n;return(n=t.call(this,e)||this).layout=r.indented,n}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t),e}(n(597));t.exports=i},function(t,e,n){var r=n(598),i=function(t){function e(e){var n;return(n=t.call(this,e)||this).layout=r.dendrogram,n}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t),e}(n(597));t.exports=i},function(t,e,n){var r=n(598),i=function(t){function e(e){var n;return(n=t.call(this,e)||this).layout=r.compactBox,n}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t),e}(n(597));t.exports=i},function(t,e,n){var r=n(26),i=n(625),a=n(623),o=function(t){function e(e){var n=r.mix({layout:new a.CompactBoxTree({getHGap:function(){return 10},getVGap:function(){return 10}}),_type:"tree"},e);return t.call(this,n)||this}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n.initEvent=function(){var t=this;this.on("afterdrawinner",function(){t.get("_sourceData").roots.forEach(function(e){var n=t.find(e.id);t._setVisibleByCollapsed(n)})})},n._executeLayout=function(t){var e=this.get("_sourceData");r.isFunction(t)?t(e.roots,this):r.isObject(t)&&(t.roots=e.roots,t.graph=this,t.execute())},n.getHierarchy=function(t){t=this.getItem(t);for(var e=this.get("_dataMap"),n=t.getModel().parent,r=1;n;)n=e[n].parent,r++;return r},n.parseSource=function(t){var e=t.roots,n=this.get("_dataMap"),i=[],a=[];if(!e)throw new Error("please set data.roots!");return e.forEach(function(t){r.traverseTree(t,function(t,e){t.id||(t.id=r.guid()),e||(e=n[t.parent]),e&&(t.parent=e.id,e.id||(e.id=r.guid()),a.push({source:e.id,target:t.id,id:e.id+"-"+t.id})),i.push(t)},function(t){return t.children},!0)}),{nodes:i,edges:a}},n._setVisibleByCollapsed=function(t){var e=t.getModel();t.collapsedParent?(t.hide(),t.getEdges().forEach(function(t){t.hide()}),t.deepEach(function(t){t.hide(),t.getEdges().forEach(function(t){t.hide()})})):e.collapsed?t.deepEach(function(t){t.hide(),t.getEdges().forEach(function(t){t.hide()})}):t.deepEach(function(t){t.collapsedParent&&(t.hide(),t.getEdges().forEach(function(t){t.hide()}))})},n.source=function(t){var e=this.parseSource(t);this.emit("beforesource"),this.set("_sourceData",t),this.set("_data",e),this.emit("aftersource")},n._setNodeNth=function(t,e){var n=(t=this.getItem(t)).getModel(),i=t.getParent().getModel().children;r.Array.remove(i,n),i.splice(e,0,n)},n.getNth=function(t){var e=(t=this.getItem(t)).getModel();return t.getParent().getModel().children.indexOf(e)},n.add=function(t,e){var n,i=this.get("_dataMap")[e.parent],a={action:"add",model:e};if("node"===t||"guide"===t){if(this.emit("beforechange",a),"node"===t){if(!i)throw new Error("please set available parent Id !");r.isArray(i.children)?i.children.push(e):i.children=[e];var o=this.parseSource({roots:[e]});this._addItems("node",o.nodes),this._addItems("edge",o.edges),n=this.find(e.id),this._setVisibleByCollapsed(n),r.isNil(e.nth)||this._setNodeNth(n,e.nth),this.find(i.id).forceUpdate()}else this._addItems(t,[e]),n=this.find(e.id);return a.item=n,this.emit("afterchange",a),n}console.warn("Tree do not support add type "+t+"!")},n.update=function(t,e){var n=this;if(e){var i=(t=this.getItem(t)).getModel(),a=r.mix({},i),o={action:"update",item:t,originModel:a,updateModel:e};if(this.emit("beforechange",o),this._updateItems([t],[e]),t.isNode){if("collapsed"in e&&(e.collapsed?t.deepEach(function(t){t.hide(),t.getEdges().forEach(function(t){t.hide()})}):t.deepEach(function(t){t.show(),t.getInEdges().forEach(function(t){t.show()})},function(t){return t.model.collapsed?null:t.getChildren()})),e.parent&&e.parent!==a.parent){var s=this.find(a.parent).getModel(),u=this.find(e.parent).getModel(),c=this.find(s.id+"-"+a.id),h={id:u.id+"-"+a.id,source:u.id,target:a.id};r.Array.remove(s.children,i),u.children?u.children.push(i):u.children=[i],this._removeItems([c]),this._addItems("edge",[h]),this.find(u.id).forceUpdate()}r.isArray(e.children)&&(a.children&&r.each(a.children,function(t){var e=n.find(t.id),r=[e];e.getEdges().forEach(function(t){r.push(t)}),n._removeItems(r)}),r.each(e.children,function(t){var e=n.parseSource({roots:[t]}),i=r.isNil(t.id)?r.guid():t.id;n._addItems("node",e.nodes),n._addItems("edge",e.edges),!t.parent&&n._addItems("edge",[{id:a.id+"-"+i,source:a.id,target:i}])})),r.isNil(e.nth)||this._setNodeNth(t,e.nth);var f=this.find(i.parent);f&&f.forceUpdate()}return this.emit("afterchange",o),this}},n.remove=function(t){var e=this.get("_dataMap"),n=[];if((t=this.getItem(t))&&!t.destroyed){var i={action:"remove",item:t};if(this.emit("beforechange",i),n.push(t),"node"===t.type){t.getEdges().forEach(function(t){n.push(t)});var a=t.getModel(),o=e[a.parent];t.deepEach(function(t){n.push(t),t.getEdges().forEach(function(t){n.push(t)})}),r.Array.remove(o.children,a),this.find(o.id).forceUpdate()}return this._removeItems(r.uniq(n)),this.emit("afterchange",i),this}},n.getRoots=function(){var t=this;return this.getSource().roots.map(function(e){return t.find(e.id)})},n.save=function(){var t={roots:r.clone(this.getSource().roots),guides:this.getGuides().map(function(t){return t.getModel()})};return 0===t.roots.length&&delete t.roots,0===t.guides.length&&delete t.guides,t},e}(i);t.exports=o},function(t,e,n){var r=n(26),i={INIT:"_initForceFit"};i.AUGMENT={_initForceFit:function(){var t=this.get("width"),e=this.get("height");return t||e?t?e?void 0:(this.forceFit("height"),void this._bindForceEvent("height")):(this.forceFit("width"),void this._bindForceEvent("width")):(this.forceFit(),void this._bindForceEvent())},_bindForceEvent:function(t){var e=this,n=this._getTimer("forceFit"),r=function(){var r=setTimeout(function(){e.forceFit(t)},200);n&&clearTimeout(n),e._setTimer("forceFit",r)};window.addEventListener("resize",r),this.set("_windowForceResizeEvent",r)},forceFit:function(t){var e=this.get("_containerDOM"),n=this.get("width"),i=this.get("height"),a=r.getHeight(e),o=r.getWidth(e);return"width"===t?(this.changeSize(o,i),this):"height"===t?(this.changeSize(n,a),this):(this.changeSize(o,a),this)}},t.exports=i},function(t,e,n){var r=n(26),i={CFG:{fitView:void 0,fitViewPadding:10,minZoom:.2,maxZoom:10}};i.AUGMENT={getBBox:function(){var t=this.get("_itemGroup"),e=this.get("_itemMap"),n=t.get("children");return n.length>0?(n=n.filter(function(t){var n=e[t.id];return!!n&&!1!==n.getShapeObj().bboxCalculation}),r.getChildrenBBox(n)):{minX:0,minY:0,maxX:this.get("width"),maxY:this.get("height")}},getFitViewPadding:function(){return r.toAllPadding(this.get("fitViewPadding"))},setFitView:function(t){if(!t)return this;if("autoZoom"===t)return this.autoZoom(),this;var e=this.getFitViewPadding(),n=this.get("width"),i=this.get("height"),a=this.getBBox(),o=a.maxX-a.minX,s=a.maxY-a.minY,u={x:0,y:0,width:n,height:i},c=r.getNineBoxPosition(t,u,o,s,e),h=[1,0,0,0,1,0,0,0,1];r.mat3.translate(h,h,[-a.minX+c.x,-a.minY+c.y]),this.updateMatrix(h)},_getZoomRatio:function(t){var e=this.get("maxZoom"),n=this.get("minZoom");return t<n&&(t=n),t>e&&(t=e),t},autoZoom:function(t){var e=this;t||(t=this.getFitViewPadding());var n=this.get("width"),i=this.get("height"),a=this.getBBox(),o=r.getAutoZoomMatrix({minX:0,minY:0,maxX:n,maxY:i},a,t,function(t){return e._getZoomRatio(t)});this.updateMatrix(o)},getZoom:function(){return this.getMatrix()[0]},updateMatrix:function(t){var e=this.getMatrix(),n={updateMatrix:t,originMatrix:e},r=e[0]!==t[0];return this.emit("beforeviewportchange",n),r&&this.emit("beforezoom",n),this.setMatrix(t),r&&this.emit("afterzoom",n),this.emit("afterviewportchange",n),this.draw(),this},zoom:function(t,e){if(!r.isNumber(t)){e=this._getZoomRatio(e);var n=this.get("_rootGroup"),i=r.clone(n.getMatrix()),a=i[6]+i[0]*t.x-e*t.x,o=i[7]+i[0]*t.y-e*t.y;return i[6]=0,i[7]=0,i[0]=e,i[4]=e,r.mat3.translate(i,i,[a,o]),this.updateMatrix(i),this}var s=this.get("width"),u=this.get("height");this.zoomByDom({x:s/2,y:u/2},t)},zoomByDom:function(t,e){var n=this.getPoint(t);return this.zoom(n,e),this},translate:function(t,e){var n=this.get("_rootGroup").getMatrix();return r.mat3.translate(n,n,[t,e]),this.updateMatrix(n),this},translateByDom:function(t,e){var n=this.get("_rootGroup").getMatrix()[0];return this.translate(t/n,e/n),this},getMatrix:function(){return this.get("_rootGroup").getMatrix()},setMatrix:function(t){this.get("_rootGroup").setMatrix(t)},getPoint:function(t){return this.getPointByDom(t)},getPointByDom:function(t){var e=this.get("_rootGroup").getMatrix();return r.invertMatrix(t,e)},getPointByCanvas:function(t){var e=this.get("_canvas").get("pixelRatio");return this.getPoint({x:t.x/e,y:t.y/e})},getPointByClient:function(t){var e=this.get("_canvas").getPointByClient(t.x,t.y);return this.getPointByCanvas(e)},getDomPoint:function(t){var e=this.get("_rootGroup").getMatrix();return r.applyMatrix(t,e)},getCanvasPoint:function(t){var e=this.get("_canvas").get("pixelRatio"),n=this.getDomPoint(t);return{x:n.x*e,y:n.y*e}},getClientPoint:function(t){var e=this.getCanvasPoint(t),n=this.get("_canvas").getClientByPoint(e.x,e.y);return{x:n.clientX,y:n.clientY}},focus:function(t){if(r.isString(t)&&(t=this.find(t)),t){var e=t.getCenter();this.focusPoint(e)}return this},focusPoint:function(t){var e=this.get("_rootGroup").getMatrix(),n=this.get("width"),r=this.get("height"),i=-e[6]+n/2-e[0]*t.x,a=-e[7]+r/2-e[0]*t.y;return this.translate(i,a),this},focusPointByDom:function(t){var e=this.getPoint(t);return this.focusPoint(e),this}},t.exports=i},function(t,e){var n={INIT:"_initDraw",AUGMENT:{_initDraw:function(){var t=this,e=this.get("_controllers").animate;["clear","show","hide","change","updatenodeposition"].forEach(function(n){e&&t.on("before"+n,function(n){var r=t.get("_forcePreventAnimate"),i=n?n.affectedItemIds:void 0;!0!==r&&e&&e.cacheGraph("startCache",i)}),t.on("after"+n,function(n){var r=n?n.affectedItemIds:void 0,i=t.get("_forcePreventAnimate");if(n&&"changeData"===n.action){var a=t.get("fitView");a&&t.setFitView(a)}!0!==i&&e?(e.cacheGraph("endCache",r),e.run()):t.draw()})})},draw:function(){this.get("_canvas").draw()},animateDraw:function(){this.get("_controllers").animate.run()}}};t.exports=n},function(t,e,n){var r=n(247);function i(t,e){var n=t.getGraphicGroup(),i=t.getBBox(),a=(i.minX+i.maxX)/2,o=(i.minY+i.maxY)/2,s=n.getMatrix()[0];n.transform([["t",-a,-o],["s",.01/s,.01/s],["t",a,o]]),n.animate({transform:[["t",-a,-o],["s",100*s,100*s],["t",a,o]]},r.enterDuration,r.enterEasing,e)}function a(t,e){var n=t.getGraphicGroup(),i=t.getBBox(),a=(i.minX+i.maxX)/2,o=(i.minY+i.maxY)/2,s=n.getMatrix()[0];n.animate({transform:[["t",-a,-o],["s",.01/s,.01/s],["t",a,o]]},r.leaveDuration,r.leaveEasing,e)}function o(t,e){t.deepEach(function(t){if(t.isShape){var n=t.attr("fillOpacity"),i=t.attr("strokeOpacity");t.attr({fillOpacity:0,strokeOpacity:0}),t.animate({fillOpacity:n,strokeOpacity:i},r.enterDuration,r.enterEasing,e)}})}function s(t,e){t.deepEach(function(t){var n=t.attr("fillOpacity"),i=t.attr("strokeOpacity");t.isShape&&t.animate({fillOpacity:0,strokeOpacity:0},r.leaveDuration,r.leaveEasing,function(){t.attr({fillOpacity:n,strokeOpacity:i}),e()})})}t.exports={enterScaleIn:function(t){var e=t.item;t.element.isItemContainer&&e.getKeyShape()&&i(e)},showScaleIn:function(t){var e=t.item;t.element.isItemContainer&&e.getKeyShape()&&i(e)},leaveScaleOut:function(t){var e=t.item,n=t.element,r=t.done;n.isItemContainer&&a(e,function(){r()})},hideScaleOut:function(t){var e=t.item,n=t.element,r=t.done;n.isItemContainer&&a(e,function(){r()})},enterFadeIn:function(t){var e=t.element,n=t.item;e.isItemContainer&&n.getKeyShape()&&o(e)},showFadeIn:function(t){var e=t.element,n=t.item;e.isItemContainer&&n.getKeyShape()&&o(e)},leaveFadeOut:function(t){var e=t.element,n=t.item,r=t.done;e.isItemContainer&&n.getKeyShape()&&s(e,r)},hideFadeOut:function(t){var e=t.element,n=t.item,r=t.done;e.isItemContainer&&n.getKeyShape()&&s(e,r)}}},function(t,e,n){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=n(599),a=n(693),o=n(26),s=n(247),u=["matrix","fillStyle","strokeStyle","endArrow","startArrow"],c=function(t){function e(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n.getDefaultCfg=function(){return{show:"scaleIn",hide:"scaleOut",enter:"scaleIn",leave:"scaleOut",update:function(t){var e=t.element,n=t.endKeyFrame.props;e.animate(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}({matrix:n.matrix},n.attrs),s.updateDuration,s.updateEasing)},graph:null,startCache:{},endCache:{},keykeyCache:{}}},n._init=function(){var t=this,e=this.graph,n=this.keykeyCache;e.on("afteritemdraw",function(e){e.item.getGraphicGroup().deepEach(function(e){n[e.gid]=t._getCache(e)},!0)})},n.cacheGraph=function(t,e){var n,r=this,i=this.graph;n=e?e.map(function(t){return i.find(t)}):i.getItems(),this[t]={},n.forEach(function(e){e&&r.cache(e,r[t],t)})},n._getCache=function(t){var e=this.keykeyCache;if(!o.isObject(t))return e[t];var n={props:{matrix:o.clone(t.getMatrix()),attrs:{}}};if(t.isShape){var r=t.attr();r=o.omit(r,u),n.props.attrs=o.clone(r)}return n},n._getAnimation=function(t,e){var n=this.graph,r=t.shapeObj,i=this[e],s=r[e+"Animation"]||r[e+"Animate"],u=n.get("_"+e+"Animation"),c=s||u||i;return o.isString(c)?a[e+o.upperFirst(c)]:c},n.cache=function(t,e,n){var r=this;t.getGraphicGroup().deepEach(function(i){var a=i.gid,o="startCache"===n?r._getCache(i):r._getCache(i.gid);o.enterAnimate=r._getAnimation(t,"enter"),o.leaveAnimate=r._getAnimation(t,"leave"),o.showAnimate=r._getAnimation(t,"show"),o.hideAnimate=r._getAnimation(t,"hide"),o.updateAnimate=r._getAnimation(t,"update"),o.item=t,o.element=i,o.visible=i.get("visible"),e[a]=o},!0)},n._compare=function(){var t=this.startCache,e=this.endCache,n=[],r=[],i=[],a=[],s=[];o.each(e,function(e,r){var o=t[r];o?o.element.get("type")===e.element.get("type")&&(o.visible&&e.visible?i.push(r):o.visible&&!e.visible?a.push(r):!o.visible&&e.visible&&s.push(r)):n.push(r)}),o.each(t,function(t,n){e[n]||r.push(n)}),this.enterElements=n,this.leaveElements=r,this.updateElements=i,this.hideElements=a,this.showElements=s},n._addTween=function(){var t=this.enterElements,e=this.leaveElements,n=this.updateElements,r=this.hideElements,i=this.showElements,a=this.startCache,s=this.endCache;t.forEach(function(t){var e=s[t],n=e.enterAnimate;n&&n({element:e.element,item:e.item,endKeyFrame:e,startKeyFrame:null,startCache:a,endCache:s,done:function(){}})}),e.forEach(function(t){var e=a[t],n=e.leaveAnimate;if(n){var r=a[t].element;r.isItemContainer&&r.getParent().add(r),n({element:r,item:e.item,endKeyFrame:null,startKeyFrame:e,startCache:a,endCache:s,done:function(){r.isItemContainer&&r.remove()}})}}),n.forEach(function(t){var e=s[t],n=a[t],r=e.element,i=n.element,u=n.props,c=e.props,h=e.updateAnimate;u.attrs&&r.attr(u.attrs),o.isEqual(u.matrix,c.matrix)||r.setMatrix(u.matrix),h({element:r,item:e,endKeyFrame:e,startKeyFrame:n,startCache:a,endCache:s,done:function(){}}),i!==r&&i.remove()}),r.forEach(function(t){var e=s[t],n=a[t],r=e.hideAnimate;r&&(e.element.show(),r({element:e.element,item:e.item,endKeyFrame:e,startKeyFrame:n,startCache:a,endCache:s,done:function(){var t=e.item,n=t.getGraphicGroup();!t.visible&&n.hide()}}))}),i.forEach(function(t){var e=s[t],n=a[t],r=e.showAnimate;r&&r({element:e.element,item:e.item,endKeyFrame:e,startKeyFrame:n,startCache:a,endCache:s,done:function(){}})})},n.run=function(){this.graph.destroyed||(this._compare(),this._addTween())},e}(i);t.exports=c},function(t,e,n){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=n(26),a=n(694),o={INIT:"_initAnimate",CFG:{animate:!1}};o.AUGMENT={_initAnimate:function(){var t=this.get("animate");if(t){var e=this.get("_controllers"),n={graph:this};i.isPlainObject(t)&&(n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}({},n,t)),e.animate=new a(n)}}},t.exports=o},function(t,e,n){var r=n(26),i={INIT:"_initFilter",CFG:{filters:[]}};i.AUGMENT={_initFilter:function(){var t=this,e=this.get("filters");r.isFunction(e)&&this.set("filters",[e]),this.on("afterchange",function(n){var r=n.action;e.length>0&&"changeData"===r&&!t.destroyed&&t.filter()})},addFilter:function(t){return this.get("filters").push(t),t},removeFilter:function(t){var e=this.get("filters");this.set("filters",r.filter(e,t))},filter:function(){this.emit("beforefilter");var t=this.get("filters"),e=this.getItems(),n=this._getFilterItems();t.forEach(function(t){n=n.filter(t)}),e.forEach(function(t){-1===n.indexOf(t)?t.hide():t.show()}),this.draw(),this.emit("afterfilter")},_getFilterItems:function(){return this.getItems().filter(function(t){return!1!==t.getShapeObj().filter})}},t.exports=i},function(t,e,n){var r=n(26),i=n(626),a={CFG:{modes:{default:[]},mode:"default",_eventCache:{}},INIT:"_initModes"};a.AUGMENT={_initModes:function(){var t=this.get("mode");this.changeMode(t)},changeMode:function(t){var e=this.get("modes");r.isEmpty(e)||r.isEmpty(e[t])||(i.resetMode(e[t],this),this.set("mode",t))},addBehaviour:function(t,e){var n=this.get("modes");e=e||this.get("mode"),r.isEmpty(n[e])&&(n[e]=[]);var a=n[e],o=[].concat(t);return r.each(o,function(t){-1===a.indexOf(t)&&a.push(t)}),i.resetMode(n[e],this),this},removeBehaviour:function(t){var e=this.get("modes"),n=this.get("mode"),a=e[n];if(!r.isEmpty(a)){var o=[].concat(t);return a=a.filter(function(t){return-1===o.indexOf(t)}),e[n]=a,i.resetMode(a,this),this}},behaviourOn:function(t,e){var n=this._eventCache;n[t]||(n[t]=[]),n[t].push(e),this.on(t,e)},_off:function(){var t=this,e=this._eventCache;r.each(e,function(e,n){r.each(e,function(e){t.off(n,e)})}),this._eventCache={}}},t.exports=a},function(t,e,n){var r=n(599),i=n(26),a={MOUSEMOVE:"mousemove",MOUSEDOWN:"mousedown",MOUSEUP:"mouseup",MOUSEENTER:"mouseenter",MOUSELEAVE:"mouseleave",CLICK:"click",DBLCLICK:"dblclick",DRAGSTART:"dragstart",DRAG:"drag",DRAGENTER:"dragenter",DRAGLEAVE:"dragleave",DRAGEND:"dragend",DROP:"drop",CONTEXTMENU:"contextmenu",WHEEL:"wheel",KEYDOWN:"keydown",KEYUP:"keyup",KEYPRESS:"keypress",MOUSEWHEEL:"mousewheel"},o=[a.DBLCLICK,a.MOUSEDOWN,a.MOUSEUP,a.MOUSEENTER,a.MOUSELEAVE,a.MOUSEMOVE,a.CONTEXTMENU,a.WHEEL,a.MOUSEWHEEL],s=[a.KEYDOWN,a.KEYUP,a.KEYPRESS];var u=function(t){function e(e){var n;return(n=t.call(this,e)||this)._domEvents=[],n._initEventStates(),n._registerEvents(),n}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n._initEventStates=function(){this._pressing=!1,this._dragging=!1,this._currentEventObj={},this._dragEventObj={}},n._registerEvents=function(){this._registerMouseEvents(),this._registerKeyboardEvents()},n._registerKeyboardEvents=function(){var t=this.graph,e=t.getKeyboardEventWrapper(),n=this._domEvents,r=t.get("keyboardEnable");i.each(s,function(a){n.push(i.addEventListener(e,a,function(e){var n=!0;i.isFunction(r)&&(n=r()),n&&t.emit(a,{domEvent:e})}))})},n._registerMouseEvents=function(){var t=this,e=this,n=this.graph.getMouseEventWrapper(),r=this._domEvents;i.each(o,function(o){r.push(i.addEventListener(n,o,function(n){if(n.type!==a.MOUSEENTER||!n.fromElement||n.fromElement.parentNode&&!function(t,e){for(var n=t.parentNode;n;){if(n.tagName===e)return!0;n=n.parentNode}return!1}(n.fromElement,"foreignObject")){var r=t._currentEventObj;t._oldEventObj=r,t._processEventObj(n);var o=t._currentEventObj;e._simulateEvents(n,r,o),-1!==[a.MOUSELEAVE,a.MOUSEENTER].indexOf(n.type)&&e._triggerEvent("canvas:"+n.type),e._triggerEvent(n.type),n.type===a.MOUSELEAVE&&(t._dragging&&e._triggerEvent(a.DRAGLEAVE,i.mix({},o,{item:null,shape:null,currentItem:t._dragEventObj.item,currentShape:t._dragEventObj.shape})),e._initEventStates())}}))})},n.destroy=function(){var t=this._domEvents;i.each(t,function(t){t&&t.remove()}),this._domEvents=null},n._triggerEvent=function(t,e){if(e||(e="mouseleave"===t?this._oldEventObj:this._currentEventObj),"mousedown"===t&&(e.button=this._button),e._type=t,this.emitGraphEvent(t,e),-1===["canvas:"+a.MOUSELEAVE,"canvas:"+a.MOUSEENTER].indexOf(t)){var n=e.shape&&e.shape.eventPreFix;if(-1!==[a.DRAGSTART,a.DRAG,a.DRAGEND].indexOf(t)&&(n=e.currentShape&&e.currentShape.eventPreFix),n){var r=n+":"+t;e._type=r,i.isBoolean(e._isItemChange)?e._isItemChange&&this.emitGraphEvent(r,e):this.emitGraphEvent(r,e)}}},n.emitGraphEvent=function(t,e){this.graph.emit(t,e)},n._getDistanceToPress=function(t){return Math.pow(t.clientX-this._pressX,2)+Math.pow(t.clientY-this._pressY,2)},n._simulateEvents=function(t,e,n){void 0===e&&(e={}),void 0===n&&(n={});var r=this._dragEventObj.item,o=this._dragEventObj.shape;switch(t.type){case a.MOUSEDOWN:this._pressing=!0,this._button=t.button,this._pressX=t.clientX,this._pressY=t.clientY;break;case a.MOUSEMOVE:if(this._dragging){if(this._triggerEvent(a.DRAG,i.mix({},n,{button:this._button,currentItem:r,currentShape:o})),e.shape!==n.shape){var s=this._isItemChange(e,n);e.shape&&this._triggerEvent(a.DRAGLEAVE,i.mix({},n,{button:this._button,item:e.item,shape:e.shape,toItem:n.item,toShape:n.shape,currentItem:r,currentShape:o,_isItemChange:s})),n.shape&&this._triggerEvent(a.DRAGENTER,i.mix({},n,{button:this._button,currentItem:r,currentShape:o,fromItem:e.item,fromShape:e.shape,_isItemChange:s}))}}else this._pressing&&this._getDistanceToPress(t)>9&&(this._dragging=!0,this._dragEventObj=e,r=this._dragEventObj.item,o=this._dragEventObj.shape,this._triggerEvent(a.DRAGSTART,i.mix({},e,{button:this._button,currentItem:r,currentShape:o})));if(e.shape!==n.shape){var u=this._isItemChange(e,n);e.shape&&this._triggerEvent(a.MOUSELEAVE,i.mix({},n,{item:e.item,shape:e.shape,toItem:n.item,toShape:n.shape,_isItemChange:u})),n.shape&&this._triggerEvent(a.MOUSEENTER,i.mix({},n,{fromtItem:e.item,fromShape:e.shape,_isItemChange:u}))}break;case a.MOUSEUP:!this._dragging&&this._pressing?this._triggerEvent(a.CLICK,i.mix({},n,{button:this._button})):(this._triggerEvent(a.DROP,i.mix({},n,{button:this._button,currentItem:r,currentShape:o})),this._triggerEvent(a.DRAGEND,i.mix({},n,{button:this._button,currentItem:r,currentShape:o}))),this._pressing=!1,this._dragging=!1,this._dragEventObj={};break;default:return}},n._isItemChange=function(t,e){var n=t.shape,r=e.shape,a=n&&r&&(n.get("isItemChange")||r.get("isItemChange"));return a?a(r,n):i.isObject(t.item)&&i.isObject(e.item)?t.item.id!==e.item.id:t.item!==e.item},n._processEventObj=function(t){var e=this.graph.get("_canvas"),n=this._getEventObj(t,e);this._currentEventObj=n},n._parsePoint=function(t,e){return this.graph.getPointByCanvas({x:t,y:e})},n._getEventObj=function(t,e){var n=this.graph,r=t.clientX,i=t.clientY,a=e.getPointByClient(r,i),o=this._parsePoint(a.x,a.y),s=e.getShape(a.x,a.y,t),u=n.getItemByShape(s),c=e.get("pixelRatio");return{item:u,shape:s,x:o.x,y:o.y,domX:a.x/c,domY:a.y/c,domEvent:t}},e}(r);t.exports=u},function(t,e,n){var r={},i=n(698);r.INIT="_initEvents",r.CFG={keyboardEnable:!0},r.AUGMENT={_initEvents:function(){this.get("_controllers").events=new i({graph:this})}},t.exports=r},function(t,e,n){var r=n(26),i={};i.AUGMENT={find:function(t){return this.get("_itemMap")[t]},getNodes:function(){return this.get("_itemMap")._nodes},getEdges:function(){return this.get("_itemMap")._edges},getGroups:function(){return this.get("_itemMap")._groups},getGuides:function(){return this.get("_itemMap")._guides},getItems:function(){var t=this.get("_itemMap"),e=[];return r.each(t,function(t){t.type&&e.push(t)}),e},getItemByShape:function(t){return t?this.getItem(t.id):null},getItem:function(t){var e=this.get("_itemMap");return r.isObject(t)?t.destroyed&&(t=e[t.id]):t=e[t],t}},t.exports=i},function(t,e,n){var r=n(599),i=n(26),a=["color","shape","size","label","style"],o=function(t){function e(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n._init=function(){var t=this,e={};i.each(a,function(n){e[n]={},t[n]=function(r){return e[n].input=r,t}}),this.channels=e},n.addChannels=function(t){var e=this.channels;i.each(t,function(t,n){e[n]={input:t}})},n.mapping=function(t){var e=this.channels;i.each(e,function(e,n){i.isFunction(e.input)?t[n]=e.input(t):e.input&&(t[n]=e.input)})},e}(r);t.exports=o},function(t,e,n){var r=n(701),i={INIT:"_initMapper"};i.AUGMENT={_initMapper:function(){var t=this.get("_controllers");t.nodeMapper=new r({graph:this}),t.edgeMapper=new r({graph:this}),t.groupMapper=new r({graph:this}),t.guideMapper=new r({graph:this})},node:function(t){var e=this._getController("nodeMapper");return t&&e.addChannels(t),e},edge:function(t){var e=this._getController("edgeMapper");return t&&e.addChannels(t),e},group:function(t){var e=this._getController("groupMapper");return t&&e.addChannels(t),this._getController("groupMapper")},guide:function(t){var e=this._getController("guideMapper");return t&&e.addChannels(t),this._getController("guideMapper")}},t.exports=i},function(t,e,n){var r=function(t){function e(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n.getDefaultCfg=function(){return{graph:null,auto:!0,processor:null}},n._init=function(){var t=this,e=this.graph;e.on("afteritemdraw",function(t){var e=t.item,n=e.getKeyShape(),r=e.getModel();if(e.isEdge)r.lineWidth=n.attr("lineWidth");else if(e.isNode||e.isGroup){var i=e.getBBox();r.width=i.width,r.height=i.height}}),e.on("afterchange",function(n){var r=n.action;"once"===t.auto?"changeData"===r&&(e.destroyed||e.preventAnimate(function(){t.layout()})):t.auto&&!e.destroyed&&e.preventAnimate(function(){t.layout()})})},n.changeLayout=function(t){this.processor=t,this.layout()},n.layout=function(){var t=this.graph,e=this.getLayoutProcessor();t.emit("beforelayout");var n=t.getNodes().filter(function(t){return t.isVisible()}).map(function(t){return t.getModel()}),r=t.getEdges().filter(function(t){return t.isVisible()}).map(function(t){return t.getModel()}),i=t.getGroups().filter(function(t){return t.isVisible()}).map(function(t){return t.getModel()});t._executeLayout(e,n,r,i),t.updateNodePosition(),t.emit("afterlayout")},n.getLayoutProcessor=function(){return this.processor?this.processor:this.processer},e}(n(599));t.exports=r},function(t,e,n){var r=n(26),i=n(703),a={CFG:{layout:void 0},INIT:"_initLayout"};a.AUGMENT={_initLayout:function(){var t=this.get("_controllers"),e=this._getLayoutCfg();e&&(t.layout=new i(r.mix({graph:this},e)))},_getLayoutCfg:function(){var t=this.get("layout");return r.isPlainObject(t)?t:r.isFunction(t)||r.isObject(t)?{processor:t}:null},layout:function(){return this._getController("layout").layout(),this},updateNodePosition:function(t){var e=this.getGuides(),n=[],i=[];return this.emit("beforeupdatenodeposition"),t?(t.forEach(function(t){t.getEdges().forEach(function(t){i.push(t)});var e=t.getParent();e&&n.push(e)}),i=r.uniq(i),n=r.uniq(n)):(t=this.getNodes(),n=this.getGroups(),i=this.getEdges()),t.forEach(function(t){t.layoutUpdate()}),n.forEach(function(t){t.layoutUpdate()}),i.forEach(function(t){t.layoutUpdate()}),e.forEach(function(t){t.layoutUpdate()}),this.emit("afterupdatenodeposition"),this},changeLayout:function(t){return this._getController("layout").changeLayout(t),this},getLayout:function(){return this._getController("layout").getLayoutProcessor()}},t.exports=a},function(t,e,n){!function(e){"use strict";var n=function(){return{escape:function(t){return t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var n=t(e).toLowerCase();return function(){var t="application/font-woff";return{woff:t,woff2:t,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}()[n]||""},dataAsUrl:function(t,e){return"data:"+e+";base64,"+t},isDataUrl:function(t){return-1!==t.search(/^(data:)/)},canvasToBlob:function(t){return t.toBlob?new Promise(function(e){t.toBlob(e)}):function(t){return new Promise(function(e){for(var n=window.atob(t.toDataURL().split(",")[1]),r=n.length,i=new Uint8Array(r),a=0;a<r;a++)i[a]=n.charCodeAt(a);e(new Blob([i],{type:"image/png"}))})}(t)},resolveUrl:function(t,e){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var i=n.createElement("a");return n.body.appendChild(i),r.href=e,i.href=t,i.href},getAndEncode:function(t){var e=3e4;s.impl.options.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());return new Promise(function(n){var r,i=new XMLHttpRequest;if(i.onreadystatechange=function(){if(4!==i.readyState)return;if(200!==i.status)return void(r?n(r):o("cannot fetch resource: "+t+", status: "+i.status));var e=new FileReader;e.onloadend=function(){var t=e.result.split(/,/)[1];n(t)},e.readAsDataURL(i.response)},i.ontimeout=function(){r?n(r):o("timeout of "+e+"ms occured while fetching resource: "+t)},i.responseType="blob",i.timeout=e,i.open("GET",t,!0),i.send(),s.impl.options.imagePlaceholder){var a=s.impl.options.imagePlaceholder.split(/,/);a&&a[1]&&(r=a[1])}function o(t){console.error(t),n("")}})},uid:function(){var t=0;return function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+t++}}(),delay:function(t){return function(e){return new Promise(function(n){setTimeout(function(){n(e)},t)})}},asArray:function(t){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e},escapeXhtml:function(t){return t.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(t){return new Promise(function(e,n){var r=new Image;r.onload=function(){e(r)},r.onerror=n,r.src=t})},width:function(t){var n=e(t,"border-left-width"),r=e(t,"border-right-width");return t.scrollWidth+n+r},height:function(t){var n=e(t,"border-top-width"),r=e(t,"border-bottom-width");return t.scrollHeight+n+r}};function t(t){var e=/\.([^\.\/]*?)$/g.exec(t);return e?e[1]:""}function e(t,e){var n=window.getComputedStyle(t).getPropertyValue(e);return parseFloat(n.replace("px",""))}}(),r=function(){var t=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(t,n,a){return e(t)?Promise.resolve(t).then(r).then(function(e){var r=Promise.resolve(t);return e.forEach(function(t){r=r.then(function(e){return i(e,t,n,a)})}),r}):Promise.resolve(t)},shouldProcess:e,impl:{readUrls:r,inline:i}};function e(e){return-1!==e.search(t)}function r(e){for(var r,i=[];null!==(r=t.exec(e));)i.push(r[1]);return i.filter(function(t){return!n.isDataUrl(t)})}function i(t,e,r,i){return Promise.resolve(e).then(function(t){return r?n.resolveUrl(t,r):t}).then(i||n.getAndEncode).then(function(t){return n.dataAsUrl(t,n.mimeType(e))}).then(function(r){return t.replace(function(t){return new RegExp("(url\\(['\"]?)("+n.escape(t)+")(['\"]?\\))","g")}(e),"$1"+r+"$3")})}}(),i=function(){return{resolveAll:function(){return t(document).then(function(t){return Promise.all(t.map(function(t){return t.resolve()}))}).then(function(t){return t.join("\n")})},impl:{readAll:t}};function t(){return Promise.resolve(n.asArray(document.styleSheets)).then(function(t){var e=[];return t.forEach(function(t){try{n.asArray(t.cssRules||[]).forEach(e.push.bind(e))}catch(e){console.log("Error while reading CSS rules from "+t.href,e.toString())}}),e}).then(function(t){return t.filter(function(t){return t.type===CSSRule.FONT_FACE_RULE}).filter(function(t){return r.shouldProcess(t.style.getPropertyValue("src"))})}).then(function(e){return e.map(t)});function t(t){return{resolve:function(){var e=(t.parentStyleSheet||{}).href;return r.inlineAll(t.cssText,e)},src:function(){return t.style.getPropertyValue("src")}}}}}(),a=function(){return{inlineAll:function e(i){if(!(i instanceof Element))return Promise.resolve(i);return function(t){var e=t.style.getPropertyValue("background");return e?r.inlineAll(e).then(function(e){t.style.setProperty("background",e,t.style.getPropertyPriority("background"))}).then(function(){return t}):Promise.resolve(t)}(i).then(function(){return i instanceof HTMLImageElement?t(i).inline():Promise.all(n.asArray(i.childNodes).map(function(t){return e(t)}))})},impl:{newImage:t}};function t(t){return{inline:function(e){return n.isDataUrl(t.src)?Promise.resolve():Promise.resolve(t.src).then(e||n.getAndEncode).then(function(e){return n.dataAsUrl(e,n.mimeType(t.src))}).then(function(e){return new Promise(function(n,r){t.onload=n,t.onerror=r,t.src=e})})}}}}(),o={imagePlaceholder:void 0,cacheBust:!1},s={toSvg:u,toPng:function(t,e){return c(t,e||{}).then(function(t){return t.toDataURL()})},toJpeg:function(t,e){return c(t,e=e||{}).then(function(t){return t.toDataURL("image/jpeg",e.quality||1)})},toBlob:function(t,e){return c(t,e||{}).then(n.canvasToBlob)},toPixelData:function(t,e){return c(t,e||{}).then(function(e){return e.getContext("2d").getImageData(0,0,n.width(t),n.height(t)).data})},impl:{fontFaces:i,images:a,util:n,inliner:r,options:{}}};function u(t,e){return function(t){void 0===t.imagePlaceholder?s.impl.options.imagePlaceholder=o.imagePlaceholder:s.impl.options.imagePlaceholder=t.imagePlaceholder;void 0===t.cacheBust?s.impl.options.cacheBust=o.cacheBust:s.impl.options.cacheBust=t.cacheBust}(e=e||{}),Promise.resolve(t).then(function(t){return function(t,e,r){if(!r&&e&&!e(t))return Promise.resolve();return Promise.resolve(t).then(function(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)}).then(function(r){return function(t,e,r){var i=t.childNodes;return 0===i.length?Promise.resolve(e):function(t,e,n){var r=Promise.resolve();return e.forEach(function(e){r=r.then(function(){return h(e,n)}).then(function(e){e&&t.appendChild(e)})}),r}(e,n.asArray(i),r).then(function(){return e})}(t,r,e)}).then(function(e){return function(t,e){return e instanceof Element?Promise.resolve().then(function(){!function(t,e){t.cssText?e.cssText=t.cssText:function(t,e){n.asArray(t).forEach(function(n){e.setProperty(n,t.getPropertyValue(n),t.getPropertyPriority(n))})}(t,e)}(window.getComputedStyle(t),e.style)}).then(function(){[":before",":after"].forEach(function(r){!function(r){var i=window.getComputedStyle(t,r),a=i.getPropertyValue("content");if(""!==a&&"none"!==a){var o=n.uid();e.className=e.className+" "+o;var s=document.createElement("style");s.appendChild(function(t,e,r){var i="."+t+":"+e,a=r.cssText?function(t){var e=t.getPropertyValue("content");return t.cssText+" content: "+e+";"}(r):function(t){return n.asArray(t).map(function(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}).join("; ")+";"}(r);return document.createTextNode(i+"{"+a+"}")}(o,r,i)),e.appendChild(s)}}(r)})}).then(function(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value),t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}).then(function(){e instanceof SVGElement&&(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e instanceof SVGRectElement&&["width","height"].forEach(function(t){var n=e.getAttribute(t);n&&e.style.setProperty(t,n)}))}).then(function(){return e}):e}(t,e)})}(t,e.filter,!0)}).then(f).then(l).then(function(t){e.bgcolor&&(t.style.backgroundColor=e.bgcolor);e.width&&(t.style.width=e.width+"px");e.height&&(t.style.height=e.height+"px");e.style&&Object.keys(e.style).forEach(function(n){t.style[n]=e.style[n]});return t}).then(function(r){return function(t,e,r){return Promise.resolve(t).then(function(t){return t.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(t)}).then(n.escapeXhtml).then(function(t){return'<foreignObject x="0" y="0" width="100%" height="100%">'+t+"</foreignObject>"}).then(function(t){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+r+'">'+t+"</svg>"}).then(function(t){return"data:image/svg+xml;charset=utf-8,"+t})}(r,e.width||n.width(t),e.height||n.height(t))})}function c(t,e){return u(t,e).then(n.makeImage).then(n.delay(100)).then(function(r){var i=function(t){var r=document.createElement("canvas");if(r.width=e.width||n.width(t),r.height=e.height||n.height(t),e.bgcolor){var i=r.getContext("2d");i.fillStyle=e.bgcolor,i.fillRect(0,0,r.width,r.height)}return r}(t);return i.getContext("2d").drawImage(r,0,0),i})}function h(t,e,r){if(!r&&e&&!e(t))return Promise.resolve();return Promise.resolve(t).then(i).then(function(n){return a(t,n,e)}).then(function(e){return o(t,e)});function i(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)}function a(t,e,r){var i=t.childNodes;return 0===i.length?Promise.resolve(e):function(t,e,n){var r=Promise.resolve();return e.forEach(function(e){r=r.then(function(){return h(e,n)}).then(function(e){e&&t.appendChild(e)})}),r}(e,n.asArray(i),r).then(function(){return e});function a(t,e,n){var r=Promise.resolve();return e.forEach(function(e){r=r.then(function(){return h(e,n)}).then(function(e){e&&t.appendChild(e)})}),r}}function o(t,e){return e instanceof Element?Promise.resolve().then(function(){!function(t,e){t.cssText?e.cssText=t.cssText:function(t,e){n.asArray(t).forEach(function(n){e.setProperty(n,t.getPropertyValue(n),t.getPropertyPriority(n))})}(t,e)}(window.getComputedStyle(t),e.style)}).then(function(){[":before",":after"].forEach(function(r){!function(r){var i=window.getComputedStyle(t,r),a=i.getPropertyValue("content");if(""===a||"none"===a)return;var o=n.uid();e.className=e.className+" "+o;var s=document.createElement("style");s.appendChild(function(t,e,r){var i="."+t+":"+e,a=r.cssText?function(t){var e=t.getPropertyValue("content");return t.cssText+" content: "+e+";"}(r):function(t){return n.asArray(t).map(function(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}).join("; ")+";"}(r);return document.createTextNode(i+"{"+a+"}")}(o,r,i)),e.appendChild(s)}(r)})}).then(function(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value);t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}).then(function(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(t){var n=e.getAttribute(t);n&&e.style.setProperty(t,n)})}).then(function(){return e}):e;function r(){function r(t,e){if(t.cssText)e.cssText=t.cssText;else r(t,e);function r(t,e){n.asArray(t).forEach(function(n){e.setProperty(n,t.getPropertyValue(n),t.getPropertyPriority(n))})}}r(window.getComputedStyle(t),e.style)}function i(){function r(r){var i=window.getComputedStyle(t,r),a=i.getPropertyValue("content");if(a===""||a==="none")return;var o=n.uid();e.className=e.className+" "+o;var s=document.createElement("style");function u(t,e,r){var i="."+t+":"+e,a=r.cssText?o(r):s(r);return document.createTextNode(i+"{"+a+"}");function o(t){var e=t.getPropertyValue("content");return t.cssText+" content: "+e+";"}function s(t){return n.asArray(t).map(e).join("; ")+";";function e(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}}}s.appendChild(u(o,r,i)),e.appendChild(s)}[":before",":after"].forEach(function(t){r(t)})}function a(){if(t instanceof HTMLTextAreaElement)e.innerHTML=t.value;if(t instanceof HTMLInputElement)e.setAttribute("value",t.value)}function o(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(t){var n=e.getAttribute(t);if(!n)return;e.style.setProperty(t,n)})}}}function f(t){return i.resolveAll().then(function(e){var n=document.createElement("style");return t.appendChild(n),n.appendChild(document.createTextNode(e)),t})}function l(t){return a.inlineAll(t).then(function(){return t})}t.exports=s}()},function(t,e,n){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=n(26),a=n(248),o=n(705),s=function(){function t(t){this.options=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}({graph:null,width:null,height:null,canvas:null,beforeTransform:function(){},afterTransform:function(){},drawCount:0},t)}var e=t.prototype;return e.getCanvas=function(){var t=this.options,e=t.width,n=t.height,r=t.canvas;if(!r){var o=i.createDOM("<canvas></canvas>");r=new a.Canvas({containerDOM:o,width:e,height:n})}return r.drawCount||(r.drawCount=0),r},e.drawInner=function(t,e){var n=this.options.graph,r=n.getCanvas(),i=n.get("renderer"),a=t.drawCount;if("svg"===i){var s=[];r.deepEach(function(t){"dom"===t.get("type")&&s.push(t)}),s.length>0?s.forEach(function(n){var r=n.get("el");if(r){n.domImageOnload=!1;var i=n.attr("width"),u=n.attr("height");o.toPng(r,{width:i,height:u}).then(function(r){var i=new Image;i.src=r,i.onload=function(){if(a===t.drawCount-1){n.domImage=i,n.domImageOnload=!0;for(var r=0;r<s.length;r++){var o=s[r];if(!o.domImageOnload||o.get("destroyed"))break;o.domImageOnload&&r===s.length-1&&e()}}}})}}):e()}else e();t.drawCount+=1},e.toCanvas=function(){var t=this.options,e=t.graph,n=t.width,r=t.height,a=t.beforeTransform,o=t.limitRatio,s=t.afterTransform,u=this.getCanvas(),c=e.getBBox(),h=i.clone(e.getMatrix()),f=e.getFitViewPadding(),l=e.getCanvas(),p=i.getAutoZoomMatrix({minX:0,minY:0,maxX:n,maxY:r},c,f,o);return this.drawInner(u,function(){var t=l.get("children");u.set("children",t),a(p,h),e.setMatrix(p),u.draw(),e.setMatrix(h),s(p,h)}),u.matrix=p,u.get("el")},t}();t.exports=s},function(t,e,n){var r=n(26),i=function(t){function e(e){var n={type:"guide",isGuide:!0,zIndex:4};return r.mix(n,e),t.call(this,n)||this}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t),e}(n(608));t.exports=i},function(t,e,n){var r=n(26),i=function(t){function e(e){var n={type:"group",isNode:!1,isGroup:!0,zIndex:1};return r.mix(n,e),t.call(this,n)||this}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n._beforeDraw=function(){this.deepEach(function(t,e){e&&(t.zIndex=e.zIndex+1),t.updateCollapsedParent(),t.collapsedParent?t.hide():t.show()}),this.getInnerEdges().forEach(function(t){t.linkedItemVisible()?t.show():t.hide()}),t.prototype._beforeDraw.call(this)},n.updatePosition=function(){},n._shouldDraw=function(){return!0},n.getCrossEdges=function(){var t=[],e=this.getInnerEdges();this.deepEach(function(e){t.push(e.id)});var n=e.filter(function(e){var n=e.getModel();return-1===t.indexOf(n.source)||-1===t.indexOf(n.target)});return r.uniq(n)},n.getInnerEdges=function(){var t=[];return this.deepEach(function(e){e.getEdges().forEach(function(e){t.push(e)})}),r.uniq(t)},n.getChildrenBBox=function(){var t=this.getChildren().map(function(t){return t.getGraphicGroup()});return r.getChildrenBBox(t)},e}(n(624));t.exports=i},function(t,e,n){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=n(26),a=function(t){function e(e){var n={type:"edge",isEdge:!0,zIndex:2};return i.mix(n,e),t.call(this,n)||this}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n._init=function(){t.prototype._init.call(this)},n._beforeDraw=function(){var e=this.model,n=this.itemMap;i.isObject(e.source)?this.source=e.source:this.source=n[e.source],i.isObject(e.target)?this.target=e.target:this.target=n[e.target],t.prototype._beforeDraw.call(this)},n._afterDraw=function(){this.linkedItemVisible()||this.hide(),this._addArrow(),t.prototype._afterDraw.call(this)},n._addArrow=function(){var t=this.model,e=this.keyShape;if("path"===e.get("type")){var n=this.shapeObj,r=e.attr("endArrow"),i=e.attr("startArrow"),a=t.endArrow||r,o=t.startArrow||i;i&&e.attr("startArrow",!1),r&&e.attr("endArrow",!1),a&&this._drawArrow(n.endArrow,"end"),o&&this._drawArrow(n.startArrow,"start")}},n._drawArrow=function(t,e){var n=t.path,a=t.shorten,o=t.tangent,s=t.ratio,u=t.style;o=o(this),a=a(this),n=n(this),u=u(this),s=s();var c=this.group,h=this.keyShape,f=i.parsePathString(h.attr("path")),l=f[f.length-1],p=f[0],d=h.getPoint(s);if(d&&!isNaN(d.x)){var g=c.addShape("path",{attrs:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}({path:n},u)}),v=o[1][0]-o[0][0],m=o[1][1]-o[0][1],x=a/Math.sqrt(v*v+m*m),y=[-v*x,-m*x],b=0,M=Math.atan(v/m);0===m&&v<0?b=Math.PI:v>0&&m>0?b=Math.PI/2-M:v<0&&m<0?b=-Math.PI/2-M:v>=0&&m<0?b=-M-Math.PI/2:v<=0&&m>0&&(b=Math.PI/2-M),g.rotate(b),g.translate(d.x,d.y),"end"===e?(l[l.length-1]=y[1]+d.y,l[l.length-2]=y[0]+d.x):(p[p.length-1]=y[1]+d.y,p[p.length-2]=y[0]+d.x),h.attr("path",f),this[e+"Arrow"]=g}},n._getControlPoints=function(){var t=this.model.controlPoints;return i.isArray(t)?t:[]},n._shouldDraw=function(){return t.prototype._shouldDraw.call(this)&&this.linkedItemVisible()},n._getPoint=function(t){if(t.isItem){var e=t.getBBox();return{x:e.centerX,y:e.centerY}}return{x:t.x,y:t.y}},n.linkedItemVisible=function(){var t=this.source,e=this.target;return i.isPlainObject(t)||i.isPlainObject(e)||t.isVisible()||e.isVisible()||t.collapsedParent!==e.collapsedParent},n.getSource=function(){var t=this.source,e=t.collapsedParent,n=this.itemMap;return e?n[e.id]:t},n.getTarget=function(){var t=this.target,e=t.collapsedParent,n=this.itemMap;return e?n[e.id]:t},n.getPoints=function(){var t=this.getSource(),e=this.getTarget(),n=this.model,r=this._getControlPoints(),a=this._getPoint(t),o=this._getPoint(e),s=[a].concat(r).concat([o]),u=s.length;if(t.isItem){var c=i.isNumber(this.model.sourceAnchor)&&t.id===n.source?this.model.sourceAnchor:s[1],h=t.getLinkPoints(c);s[0]=h[0]}if(e.isItem){var f=i.isNumber(this.model.targetAnchor)&&e.id===n.target?this.model.targetAnchor:s[u-2],l=e.getLinkPoints(f);s[u-1]=l[0]}return s},n.destroy=function(){var e=this.itemMap,n=this.model,r=e[n.source],a=e[n.target];r&&r.isItem&&i.Array.remove(r.edges,this),a&&a.isItem&&i.Array.remove(a.edges,this),t.prototype.destroy.call(this)},e}(n(608));t.exports=a},function(t,e,n){t.exports={Node:n(624),Edge:n(709),Group:n(708),Guide:n(707)}},function(t,e,n){var r;
/*!
 * EventEmitter v5.2.5 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */!function(e){"use strict";function i(){}var a=i.prototype,o=e.EventEmitter;function s(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n;return-1}function u(t){return function(){return this[t].apply(this,arguments)}}a.getListeners=function(t){var e,n,r=this._getEvents();if(t instanceof RegExp)for(n in e={},r)r.hasOwnProperty(n)&&t.test(n)&&(e[n]=r[n]);else e=r[t]||(r[t]=[]);return e},a.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1)n.push(t[e].listener);return n},a.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&((e={})[t]=n),e||n},a.addListener=function(t,e){if(!function t(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!=typeof e)&&t(e.listener)}(e))throw new TypeError("listener must be a function");var n,r=this.getListenersAsObject(t),i="object"==typeof e;for(n in r)r.hasOwnProperty(n)&&-1===s(r[n],e)&&r[n].push(i?e:{listener:e,once:!1});return this},a.on=u("addListener"),a.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},a.once=u("addOnceListener"),a.defineEvent=function(t){return this.getListeners(t),this},a.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},a.removeListener=function(t,e){var n,r,i=this.getListenersAsObject(t);for(r in i)i.hasOwnProperty(r)&&-1!==(n=s(i[r],e))&&i[r].splice(n,1);return this},a.off=u("removeListener"),a.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},a.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},a.manipulateListeners=function(t,e,n){var r,i,a=t?this.removeListener:this.addListener,o=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(r=n.length;r--;)a.call(this,e,n[r]);else for(r in e)e.hasOwnProperty(r)&&(i=e[r])&&("function"==typeof i?a.call(this,r,i):o.call(this,r,i));return this},a.removeEvent=function(t){var e,n=typeof t,r=this._getEvents();if("string"===n)delete r[t];else if(t instanceof RegExp)for(e in r)r.hasOwnProperty(e)&&t.test(e)&&delete r[e];else delete this._events;return this},a.removeAllListeners=u("removeEvent"),a.emitEvent=function(t,e){var n,r,i,a,o=this.getListenersAsObject(t);for(a in o)if(o.hasOwnProperty(a))for(n=o[a].slice(0),i=0;i<n.length;i++)!0===(r=n[i]).once&&this.removeListener(t,r.listener),r.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,r.listener);return this},a.trigger=u("emitEvent"),a.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},a.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},a._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},a._getEvents=function(){return this._events||(this._events={})},i.noConflict=function(){return e.EventEmitter=o,i},void 0===(r=function(){return i}.call(e,n,e,t))||(t.exports=r)}("undefined"!=typeof window?window:this||{})},function(t,e,n){var r=n(26),i=function(t){!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(n,t);var e=n.prototype;function n(e){var n,i=(n=t.call(this)||this).getDefaultCfg();return n._cfg=r.mix({},i,e),n}return e.getDefaultCfg=function(){return{}},e.get=function(t){return this._cfg[t]},e.set=function(t,e){this._cfg[t]=e},e.destroy=function(){this._cfg={},this.removeAllListeners(),this.destroyed=!0},n}(n(711));t.exports=i},function(t,e,n){var r=n(26),i=n(248),a=function(){};r.augment(a,{drawInner:function(t){var e=r.clone(this.getTotalMatrix()),n=this._attrs,i=n.x,a=n.y,o=n.width,s=n.height;t.setTransform(e[0],e[1],e[3],e[4],e[6],e[7]),t.drawImage(this.domImage,i,a,o,s)}}),r.mixin(i.Dom,[a]),t.exports=a},function(t,e,n){var r=n(26),i=n(248),a=function(){};r.augment(a,{hasClass:function(t){var e=this.get("class");return!(!e||-1===e.indexOf(t))}}),r.mixin(i.Shape,[a]),t.exports=a},function(t,e,n){var r=n(248),i=n(26),a=function(){};i.augment(a,{findByClass:function(t){var e=[];return this.deepEach(function(n){n.hasClass(t)&&e.push(n)}),e},hasClass:function(t){var e=this.get("class");return!(!e||-1===e.indexOf(t))},deepEach:function(t,e){i.traverseTree(this,t,function(t){return t.get("children")},e)},sort:function(){var t=this.get("children");this.set("children",i.radixSort(t,function(t){return t.get("zIndex")}))},sortBy:function(t){var e=this.get("children");this.set("children",i.radixSort(e,t))},clear:function(t){for(var e=this._cfg.children,n=e.length-1;n>=0;n--)e[n].remove(t);return this._cfg.children=[],this}}),i.mixin(r.Group,[a]),t.exports=a},function(t,e,n){n(258).registerGuide("common",{draw:function(){console.warn("do not have this guide, please register one")}})},function(t,e,n){t.exports={common:n(716)}},function(t,e,n){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=n(258),a=n(26),o=n(247);i.registerGroup("common",{draw:function(t){return t.getModel().collapsed?this.drawCollapsed(t):this.drawExpanded(t)},defaultWidth:184,defaultHeight:40,getLabel:function(t){return t.getModel().label},drawLabel:function(t,e,n){var r=this.getLabel(t);if(r){var i=t.getGraphicGroup(),s=[8,8];e+=s[0],n+=s[1];var u=t.getModel(),c=u.labelOffsetX,h=u.labelOffsetY,f=u.labelRotate;e=c?c+e:e,n=h?h+n:n;var l=a.mix(!0,{},o.labelStyle,{x:e,y:n,textAlign:"left",textBaseline:"top"});a.isObject(r)?a.mix(l,r):l.text=r;var p=i.addShape("text",{class:"label",attrs:l});if(f){var d=p.getBBox(),g=(d.maxX+d.minX)/2,v=(d.maxY+d.minY)/2;p.transform([["t",-g,-v],["r",f,f],["t",g,v]])}}},drawKeyShape:function(t,e){var n=e.x,r=e.y,i=e.width,s=e.height,u=t.getModel(),c=t.getGraphicGroup(),h=a.mix({},o.groupStyle,u.style),f=a.getRectPath(n,r,i,s,h.radius);return t.lastChildrenBox=e,c.addShape("path",{attrs:a.mix({},h,{path:f})})},getChildrenBBox:function(t){var e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}({},t.lastChildrenBox),n=t.getModel();if(t.getChildren().length>0){var i=t.getChildrenBBox();e.x=i.minX-o.groupBackgroundPadding[3],e.y=i.minY-o.groupBackgroundPadding[0],e.width=i.maxX-i.minX+o.groupBackgroundPadding[3]+o.groupBackgroundPadding[1],e.height=i.maxY-i.minY+o.groupBackgroundPadding[0]+o.groupBackgroundPadding[2]}else e.width=this.defaultWidth,e.height=this.defaultHeight;return a.isNil(e.x)&&!a.isNil(n.x)&&(e.x=n.x),a.isNil(e.y)&&!a.isNil(n.y)&&(e.y=n.y),e},drawExpanded:function(t){var e=this.getChildrenBBox(t),n=this.drawKeyShape(t,e);return this.drawLabel(t,e.x,e.y),n},drawCollapsed:function(t){var e=this.getChildrenBBox(t);e.width=this.defaultWidth,e.height=this.defaultHeight;var n=this.drawKeyShape(t,e);return this.drawLabel(t,e.x,e.y),n},anchor:{intersectBox:"rect"}})},function(t,e,n){t.exports={common:n(718)}},function(t,e,n){function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=n(258),o=n(26),s=n(247),u={path:function(t){var e=t.getKeyShape().attr("lineWidth"),n=10*(e=e>3?e:3)/3,r=4*e/3,i=4*e;return[["M",-n,r],["L",0,0],["L",-n,-r],["A",i,i,0,0,1,-n,r],["Z"]]},shorten:function(t){var e=t.getKeyShape().attr("lineWidth");return 3.1*(e>3?e:3)},style:function(t){var e=t.getKeyShape().attr();return{fillOpacity:e.strokeOpacity,fill:e.stroke}}};a.registerEdge("common",{draw:function(t){var e=this.drawKeyShape(t);return this.drawLabel(t,e),e},drawKeyShape:function(t){var e=t.getGraphicGroup(),n=this.getStyle(t),r=this.getPath(t);return e.addShape("path",{attrs:o.mix({},n,{path:r})})},getStyle:function(t){var e=t.getModel();return o.mix(!0,{},{stroke:e.color||"#A3B1BF",strokeOpacity:.92,lineAppendWidth:4,lineWidth:e.size||1},e.style)},getPath:function(t){var e=t.getPoints();return o.pointsToPolygon(e)},getLabel:function(t){return t.getModel().label},getDefaultLabelRectStyle:function(){return{fill:"white"}},getDefaultLabelRectPadding:function(){return o.toAllPadding([4,8])},drawLabel:function(t,e){var n=this.getLabel(t),r=t.getGraphicGroup(),i=t.getModel(),a=i.labelOffsetX,u=i.labelOffsetY,c=i.labelRotate;if(n){var h=e.getPoint(.5);if(!h)return;h.x=a?h.x+a:h.x,h.y=u?h.y+u:h.y;var f=o.mix(!0,{},s.labelStyle,h);o.isObject(n)?o.mix(f,n):f.text=n,n=r.addShape("text",{class:"label",attrs:f});var l=this.getDefaultLabelRectPadding(t),p=this.getDefaultLabelRectStyle(t),d=n.getBBox(),g=i.labelRectStyle?o.mix({},p,i.labelRectStyle):p,v=r.addShape("rect",{attrs:o.mix({},g,{x:d.minX-l[3],y:d.minY-l[0],width:d.maxX-d.minX+l[1]+l[3],height:d.maxY-d.minY+l[0]+l[2]})});if(c){var m=(d.maxX+d.minX)/2,x=(d.maxY+d.minY)/2;n.transform([["t",-m,-x],["r",c,c],["t",m,x]]),v.transform([["t",-m,-x],["r",c,c],["t",m,x]])}o.toFront(n)}},startArrow:r({},u,{tangent:function(t){return t.getKeyShape().getStartTangent()},ratio:function(){return 0}}),endArrow:r({},u,{tangent:function(t){return t.getKeyShape().getEndTangent()},ratio:function(){return 1}})})},function(t,e,n){t.exports={common:n(720)}},function(t,e,n){var r=n(258),i=n(26);r.registerNode("html",{getHtml:function(t){return t.getModel().html},cssSize:!0,draw:function(t){var e=i.createDOM('<div class="g6-html-node-container"></div>'),n=t.getGraphicGroup(),r=t.getGraph();if("svg"!==r.get("renderer"))throw new Error("please use svg renderer draw html element !");var a=r.getGraphContainer(),o=this.getSize(t),s=this.getStyle(t),u=this.cssSize,c=this.getHtml(t);c=i.createDOM(c),e.css({position:"absolute",padding:"0px",margin:"0px"}),e.appendChild(c),a.appendChild(e),u&&(o[0]=e.width(),o[1]=e.height());var h=-o[0]/2,f=-o[1]/2,l=o[0],p=o[1],d=n.addShape("rect",{attrs:i.mix({},s,{x:h,y:f,width:l,height:p})});return n.addShape("dom",{attrs:i.mix({x:h,y:f,width:l,height:p,html:e})}),d}})},function(t,e,n){var r=n(258),i=n(26),a=n(247);r.registerNode("common",{draw:function(t){var e=t.getGraphicGroup(),n=this.drawLabel(t),r=this.drawKeyShape(t);return n&&i.toFront(n,e),r},getSize:function(t){var e=t.getModel().size;return i.isArray(e)?e:i.isNumber(e)?[e,e]:[a.defaultNodeSize,a.defaultNodeSize]},getStyle:function(t){var e=t.getModel();return i.mix(!0,{lineWidth:1,fill:e.color||"#40a9ff",stroke:e.color||"#096dd9",fillOpacity:.92},e.style)},getLabel:function(t){return t.getModel().label},drawKeyShape:function(t){var e=t.getGraphicGroup(),n=this.getStyle(t),r=this.getPath(t);return e.addShape("path",{attrs:i.mix({},n,{path:r})})},drawLabel:function(t){var e=t.getGraphicGroup(),n=this.getLabel(t),r=t.getModel(),o=r.labelOffsetX,s=r.labelOffsetY,u=r.labelRotate;if(!i.isNil(n)){var c=i.mix(!0,{},a.labelStyle,{x:o||0,y:s||0});i.isObject(n)?i.mix(c,n):c.text=n;var h=e.addShape("text",{class:"label",attrs:c});return u&&h.rotate(u),h}},getPath:function(t){var e=this.getSize(t);return i.getEllipsePath(0,0,e[0]/2,e[1]/2)}})},function(t,e,n){t.exports={common:n(723),html:n(722)}},function(t,e,n){var r=n(682),i=n(257),a={getAutoZoomMatrix:function(t,e,n,i){var a=[1,0,0,0,1,0,0,0,1],o=t.maxX-t.minX,s=t.maxY-t.minY,u=(e.maxX+e.minX)/2,c=(e.maxY+e.minY)/2,h=o-n[1]-n[3],f=s-n[0]-n[2],l=e.maxX-e.minX,p=e.maxY-e.minY,d=Math.min(f/p,h/l);return i&&(d=i(d)),r.mat3.translate(a,a,[-u,-c]),r.mat3.scale(a,a,[d,d]),r.mat3.translate(a,a,[o/2,s/2]),a},getNineBoxPosition:function(t,e,n,r,i){var a={};switch(t){case"tl":a.y=e.x+i[0],a.x=e.y+i[3];break;case"lc":a.y=(e.height-r)/2,a.x=i[3];break;case"bl":a.y=e.height-r-i[2],a.x=i[3];break;case"cc":a.y=(e.height-r)/2,a.x=(e.width-n)/2;break;case"tc":a.y=i[0],a.x=(e.width-n)/2;break;case"tr":a.y=i[0],a.x=e.width-n-i[1];break;case"rc":a.y=(e.height-r)/2,a.x=e.width-n-i[1];break;case"br":a.y=e.height-r-i[2],a.x=e.width-n-i[1];break;case"bc":a.y=e.height-r-i[2],a.x=(e.width-n)/2;break;default:a.y=e.x+i[0],a.x=e.y+i[3]}return a.x+=e.x,a.y+=e.y,a},getTotalBBox:function(t){var e=1/0,n=-1/0,r=1/0,i=-1/0;return t.forEach(function(t){t.minX<e&&(e=t.minX),t.maxX>n&&(n=t.maxX),t.minY<r&&(r=t.minY),t.maxY>i&&(i=t.maxY)}),{minX:e,minY:r,maxX:n,maxY:i,width:n-e,height:i-r}},getChildrenBBox:function(t){var e=1/0,n=-1/0,r=1/0,o=-1/0;i.each(t,function(t){var i=t.isGroup?a.getChildrenBBox(t.get("children")):t.getBBox();if(!i)return!0;var s=[i.minX,i.minY,1],u=[i.minX,i.maxY,1],c=[i.maxX,i.minY,1],h=[i.maxX,i.maxY,1];t.apply(s),t.apply(u),t.apply(c),t.apply(h);var f=Math.min(s[0],u[0],c[0],h[0]),l=Math.max(s[0],u[0],c[0],h[0]),p=Math.min(s[1],u[1],c[1],h[1]),d=Math.max(s[1],u[1],c[1],h[1]);f<e&&(e=f),l>n&&(n=l),p<r&&(r=p),d>o&&(o=d)});var s={minX:e,minY:r,maxX:n,maxY:o};return s.x=s.minX,s.y=s.minY,s.width=s.maxX-s.minX,s.height=s.maxY-s.minY,s.centerX=(s.minX+s.maxX)/2,s.centerY=(s.minY+s.maxY)/2,s},getBBox:function(t,e){var n,i=t.getBBox(),a={x:i.minX,y:i.minY},o={x:i.maxX,y:i.maxY};if(e.isGroup){for(n=t;n!==e;){var s=n.getMatrix();a=r.applyMatrix(a,s),o=r.applyMatrix(o,s),n=n.getParent()}var u=n.getMatrix();a=r.applyMatrix(a,u),o=r.applyMatrix(o,u)}else a=r.applyMatrix(a,e),o=r.applyMatrix(o,e);return{minX:a.x,minY:a.y,maxX:o.x,maxY:o.y}},toBack:function(t){t.toBack()},toFront:function(t){t.toFront()}};t.exports=a},function(t,e,n){var r=n(257);t.exports={isNode:function(t){return t&&r.isObject(t)&&"node"===t.type},isEdge:function(t){return t&&r.isObject(t)&&"edge"===t.type},isGroup:function(t){return t&&r.isObject(t)&&"group"===t.type}}},function(t,e,n){var r=n(257),i={};r.mix(i,{addEventListener:function(t,e,n){return t.attachEvent?(t.attachEvent("on"+e,n),{remove:function(){t.detachEvent("on"+e,n)}}):t.addEventListener?(t.addEventListener(e,n,!1),{remove:function(){t.removeEventListener(e,n,!1)}}):void 0},createDOM:function(t,e){var n;return(n=r.isString(t)?r.createDom(t):t).bbox=n.getBoundingClientRect(),n.hide=function(){return n.style.visibility="hidden",n},n.show=function(){return n.style.visibility="visible",n},n.css=function(t){return r.modifyCSS(n,t),n},n.width=function(){return r.getWidth(n)},n.height=function(){return r.getHeight(n)},n.destroy=function(){n.parentNode&&n.parentNode.removeChild(n)},n.on=function(t,e){n.addEventListener(t,e)},n.off=function(t,e){n.removeEventListener(t,e)},n.css(e),n},initDOMContainer:function(t,e){if(!t)throw new Error("please set the container for the "+e+" !");return r.isString(t)&&(t=document.getElementById(t)),t}}),t.exports=i},function(t,e){var n={svg:"svg",circle:"circle",rect:"rect",text:"text",path:"path",foreignObject:"foreignObject",polygon:"polygon",ellipse:"ellipse",image:"image"};t.exports=function(t,e,r){var i=r.target||r.srcElement;if(!n[i.tagName]){for(var a=i.parentNode;a&&!n[a.tagName];)a=a.parentNode;i=a}return this._cfg.el===i?this:this.find(function(t){return t._cfg&&t._cfg.el===i})}},function(t,e,n){var r=n(19),i=/^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,a=function(){function t(t){var e=document.createElementNS("http://www.w3.org/2000/svg","pattern");e.setAttribute("patternUnits","userSpaceOnUse");var n=document.createElementNS("http://www.w3.org/2000/svg","image");e.appendChild(n);var a=r.uniqueId("pattern_");e.id=a,this.el=e,this.id=a,this.cfg=t;var o=i.exec(t)[2];n.setAttribute("href",o);var s=new Image;function u(){console.log(s.width,s.height),e.setAttribute("width",s.width),e.setAttribute("height",s.height)}return o.match(/^data:/i)||(s.crossOrigin="Anonymous"),s.src=o,s.complete?u():(s.onload=u,s.src=s.src),this}return t.prototype.match=function(t,e){return this.cfg===e},t}();t.exports=a},function(t,e,n){var r=n(19),i=function(){function t(t){this.type="clip";var e=document.createElementNS("http://www.w3.org/2000/svg","clipPath");this.el=e,this.id=r.uniqueId("clip_"),e.id=this.id;var n=t._cfg.el;return e.appendChild(n.cloneNode(!0)),this.cfg=t,this}var e=t.prototype;return e.match=function(){return!1},e.remove=function(){var t=this.el;t.parentNode.removeChild(t)},t}();t.exports=i},function(t,e,n){var r=n(19),i=function(){function t(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=r.uniqueId("marker_");n.setAttribute("id",i);var a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("stroke","none"),a.setAttribute("fill",t.stroke||"#000"),n.appendChild(a),n.setAttribute("overflow","visible"),n.setAttribute("orient","auto-start-reverse"),this.el=n,this.child=a,this.id=i,this.cfg=t["marker-start"===e?"startArrow":"endArrow"],this.stroke=t.stroke||"#000",!0===this.cfg?this._setDefaultPath(e,a):this._setMarker(t.lineWidth,a),this}var e=t.prototype;return e.match=function(){return!1},e._setDefaultPath=function(t,e){var n=this.el;e.setAttribute("d","M0,0 L6,3 L0,6 L3,3Z"),n.setAttribute("refX",3),n.setAttribute("refY",3)},e._setMarker=function(t,e){var n=this.el,i=this.cfg.path,a=this.cfg.d;r.isArray(i)&&(i=i.map(function(t){return t.join(" ")}).join("")),e.setAttribute("d",i),n.appendChild(e),a&&n.setAttribute("refX",a/t)},e.update=function(t){var e=this.child;e.attr?e.attr("fill",t):e.setAttribute("fill",t)},t}();t.exports=i},function(t,e,n){var r=n(19),i={shadowColor:"color",shadowOpacity:"opacity",shadowBlur:"blur",shadowOffsetX:"dx",shadowOffsetY:"dy"},a={x:"-40%",y:"-40%",width:"200%",height:"200%"},o=function(){function t(t){this.type="filter";var e=document.createElementNS("http://www.w3.org/2000/svg","filter");return r.each(a,function(t,n){e.setAttribute(n,t)}),this.el=e,this.id=r.uniqueId("filter_"),this.el.id=this.id,this.cfg=t,this._parseShadow(t,e),this}var e=t.prototype;return e.match=function(t,e){if(this.type!==t)return!1;var n=!0,i=this.cfg;return r.each(Object.keys(i),function(t){if(i[t]!==e[t])return n=!1,!1}),n},e.update=function(t,e){var n=this.cfg;return n[i[t]]=e,this._parseShadow(n,this.el),this},e._parseShadow=function(t,e){var n='<feDropShadow \n      dx="'+(t.dx||0)+'" \n      dy="'+(t.dy||0)+'" \n      stdDeviation="'+(t.blur?t.blur/10:0)+'"\n      flood-color="'+(t.color?t.color:"#000")+'"\n      flood-opacity="'+(t.opacity?t.opacity:1)+'"\n      />';e.innerHTML=n},t}();t.exports=o},function(t,e,n){var r=n(19),i=/^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,a=/^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,o=/[\d.]+:(#[^\s]+|[^\)]+\))/gi;function s(t){var e=t.match(o);if(!e)return"";var n="";return e.sort(function(t,e){return t=t.split(":"),e=e.split(":"),Number(t[0])-Number(e[0])}),r.each(e,function(t){t=t.split(":"),n+='<stop offset="'+t[0]+'" stop-color="'+t[1]+'"></stop>'}),n}var u=function(){function t(t){var e=null,n=r.uniqueId("gradient_");return"l"===t.toLowerCase()[0]?function(t,e){var n,a,o=i.exec(t),u=r.mod(r.toRadian(parseFloat(o[1])),2*Math.PI),c=o[2];u>=0&&u<.5*Math.PI?(n={x:0,y:0},a={x:1,y:1}):.5*Math.PI<=u&&u<Math.PI?(n={x:1,y:0},a={x:0,y:1}):Math.PI<=u&&u<1.5*Math.PI?(n={x:1,y:1},a={x:0,y:0}):(n={x:0,y:1},a={x:1,y:0});var h=Math.tan(u),f=h*h,l=(a.x-n.x+h*(a.y-n.y))/(f+1)+n.x,p=h*(a.x-n.x+h*(a.y-n.y))/(f+1)+n.y;e.setAttribute("x1",n.x),e.setAttribute("y1",n.y),e.setAttribute("x2",l),e.setAttribute("y2",p),e.innerHTML=s(c)}(t,e=document.createElementNS("http://www.w3.org/2000/svg","linearGradient")):function(t,e){var n=a.exec(t),r=parseFloat(n[1]),i=parseFloat(n[2]),o=parseFloat(n[3]),u=n[4];e.setAttribute("cx",r),e.setAttribute("cy",i),e.setAttribute("r",o),e.innerHTML=s(u)}(t,e=document.createElementNS("http://www.w3.org/2000/svg","radialGradient")),e.setAttribute("id",n),this.el=e,this.id=n,this.cfg=t,this}return t.prototype.match=function(t,e){return this.cfg===e},t}();t.exports=u},function(t,e,n){var r=n(19),i=n(733),a=n(732),o=n(731),s=n(730),u=n(729),c=function(){function t(t){var e=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=r.uniqueId("defs_");e.id=n,t.appendChild(e),this.children=[],this.defaultArrow={},this.el=e,this.canvas=t}var e=t.prototype;return e.find=function(t,e){for(var n=this.children,r=null,i=0;i<n.length;i++)if(n[i].match(t,e)){r=n[i].id;break}return r},e.findById=function(t){for(var e=this.children,n=null,r=0;r<e.length;r++)if(e[r].id===t){n=e[r];break}return n},e.add=function(t){this.children.push(t),t.canvas=this.canvas,t.parent=this},e.getDefaultArrow=function(t,e){var n=t.stroke||t.strokeStyle;if(this.defaultArrow[n])return this.defaultArrow[n].id;var r=new o(t,e);return this.defaultArrow[n]=r,this.el.appendChild(r.el),r.id},e.addGradient=function(t){var e=new i(t);return this.el.appendChild(e.el),this.add(e),e.id},e.addArrow=function(t,e){var n=new o(t,e);return this.el.appendChild(n.el),n.id},e.addShadow=function(t){var e=new a(t);return this.el.appendChild(e.el),this.add(e),e.id},e.addPattern=function(t){var e=new u(t);return this.el.appendChild(e.el),this.add(e),e.id},e.addClip=function(t){var e=new s(t);return this.el.appendChild(e.el),this.add(e),e.id},t}();t.exports=c},function(t,e,n){var r=n(19),i=n(593).parseRadius,a=n(611),o=n(734),s={rect:"path",circle:"circle",line:"line",path:"path",marker:"path",text:"text",polygon:"polygon",image:"image",ellipse:"ellipse",dom:"foreignObject",fan:"path",group:"g"},u={opacity:"opacity",fillStyle:"fill",strokeOpacity:"stroke-opacity",fillOpacity:"fill-opacity",strokeStyle:"stroke",x:"x",y:"y",r:"r",width:"width",height:"height",x1:"x1",x2:"x2",y1:"y1",y2:"y2",lineCap:"stroke-linecap",lineJoin:"stroke-linejoin",lineWidth:"stroke-width",lineDash:"stroke-dasharray",lineDashOffset:"stroke-dashoffset",miterLimit:"stroke-miterlimit",font:"font",fontSize:"font-size",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",fontFamily:"font-family",startArrow:"marker-start",endArrow:"marker-end",path:"d",class:"class",id:"id",style:"style",preserveAspectRatio:"preserveAspectRatio"},c={top:"before-edge",middle:"central",bottom:"after-edge",alphabetic:"baseline",hanging:"hanging"},h={left:"left",start:"left",center:"middle",right:"end",end:"end"},f=function(){function t(t){if(!t)return null;var e=r.uniqueId("canvas_"),n=r.createDom('<svg id="'+e+'"></svg>');return t.appendChild(n),this.type="svg",this.canvas=n,this.context=new o(n),this.toDraw=!1,this}var e=t.prototype;return e.draw=function(t){var e=this;e.animateHandler?e.toDraw=!0:function n(){e.animateHandler=r.requestAnimationFrame(function(){e.animateHandler=void 0,e.toDraw&&n()});try{e._drawChildren(t)}catch(t){console.warn("error in draw canvas, detail as:"),console.warn(t),e.toDraw=!1}e.toDraw=!1}()},e.drawSync=function(t){this._drawChildren(t)},e._drawGroup=function(t,e){var n=t._cfg;n.removed||n.destroyed||(n.tobeRemoved&&(r.each(n.tobeRemoved,function(t){t.parentNode&&t.parentNode.removeChild(t)}),n.tobeRemoved=[]),this._drawShape(t,e),n.children&&n.children.length>0&&this._drawChildren(t))},e._drawChildren=function(t){var e,n=t._cfg.children;if(n)for(var r=0;r<n.length;r++)(e=n[r]).isGroup?this._drawGroup(e,r):this._drawShape(e,r)},e._drawShape=function(t,e){var n=t._attrs,r=t._cfg,i=r.el;r.removed||r.destroyed?i&&i.parentNode.removeChild(r.el):(!i&&r.parent&&(this._createDom(t,e),this._updateShape(t)),i=r.el,!1!==r.visible?(r.visible&&i.hasAttribute("visibility")&&i.removeAttribute("visibility"),r.hasUpdate&&this._updateShape(t),n.clip&&n.clip._cfg.hasUpdate&&this._updateShape(n.clip)):i.setAttribute("visibility","hidden"))},e._updateShape=function(t){var e=t._attrs,n=t._cfg.attrs;if(n)if(t._cfg.el||this._createDom(t),"clip"in e&&this._setClip(t,e.clip),("shadowOffsetX"in e||"shadowOffsetY"in e||"shadowBlur"in e||"shadowColor"in e)&&this._setShadow(t),"text"!==t.type){for(var i in"fan"===t.type&&this._updateFan(t),"marker"===t.type&&t._cfg.el.setAttribute("d",this._assembleMarker(e)),"rect"===t.type&&t._cfg.el.setAttribute("d",this._assembleRect(e)),e)e[i]!==n[i]&&this._setAttribute(t,i,e[i]);t._cfg.attrs=r.deepMix({},t._attrs),t._cfg.hasUpdate=!1}else this._updateText(t)},e._setAttribute=function(t,e,n){var i=t.type,a=t._attrs,o=t._cfg.el,s=this.context;if("marker"!==i&&"rect"!==i||!~["x","y","radius","r"].indexOf(e))if(~["circle","ellipse"].indexOf(i)&&~["x","y"].indexOf(e))o.setAttribute("c"+e,parseInt(n,10));else{if("polygon"===i&&"points"===e)return n&&0!==n.length||(n=""),r.isArray(n)&&(n=(n=n.map(function(t){return t[0]+","+t[1]})).join(" ")),void o.setAttribute("points",n);if("path"===e&&r.isArray(n))o.setAttribute("d",this._formatPath(n));else if("img"!==e){if("transform"===e)return n?void this._setTransform(t):void o.removeAttribute("transform");if("rotate"===e)return n?void this._setTransform(t):void o.removeAttribute("transform");if("matrix"!==e)if("fillStyle"!==e&&"strokeStyle"!==e){if("clip"!==e)if(~e.indexOf("Arrow"))if(e=u[e],n){var c=null;c="boolean"==typeof n?s.getDefaultArrow(a,e):s.addArrow(a,e),o.setAttribute(e,"url(#"+c+")"),t._cfg[e]=c}else t._cfg[e]=null,o.removeAttribute(e);else"html"===e&&("string"==typeof n?o.innerHTML=n:(o.innerHTML="",o.appendChild(n))),u[e]&&o.setAttribute(u[e],n)}else this._setColor(t,e,n);else this._setTransform(t)}else this._setImage(t,n)}},e._createDom=function(t,e){var n=s[t.type],r=t._attrs,i=t._cfg.parent,a=i._cfg.el;if(!n)throw new Error("the type"+t.type+"is not supported by svg");var o=document.createElementNS("http://www.w3.org/2000/svg",n);if(t._cfg.el=o,i)if(void 0===e)a.appendChild(o);else{var u=i._cfg.el.childNodes;"svg"===a.tagName&&(e+=1),u.length<=e?a.appendChild(o):a.insertBefore(o,u[e])}return t._cfg.attrs={},"text"===t.type?(o.setAttribute("paint-order","stroke"),o.setAttribute("style","stroke-linecap:butt; stroke-linejoin:miter;")):(r.stroke||r.strokeStyle||o.setAttribute("stroke","none"),r.fill||r.fillStyle||o.setAttribute("fill","none")),o},e._assembleMarker=function(t){var e=t.r;if(void 0===t.r&&(e=t.radius),isNaN(Number(t.x))||isNaN(Number(t.y))||isNaN(Number(e)))return"";var n="";return n="function"==typeof t.symbol?t.symbol(t.x,t.y,e):a.Symbols[t.symbol||"circle"](t.x,t.y,e),r.isArray(n)&&(n=n.map(function(t){return t.join(" ")}).join("")),n},e._assembleRect=function(t){var e=t.x,n=t.y,a=t.width,o=t.height,s=t.radius;if(!s)return"M "+e+","+n+" l "+a+",0 l 0,"+o+" l"+-a+" 0 z";var u=i(s);return r.isArray(s)?1===s.length?u.r1=u.r2=u.r3=u.r4=s[0]:2===s.length?(u.r1=u.r3=s[0],u.r2=u.r4=s[1]):3===s.length?(u.r1=s[0],u.r2=u.r4=s[1],u.r3=s[2]):(u.r1=s[0],u.r2=s[1],u.r3=s[2],u.r4=s[3]):u.r1=u.r2=u.r3=u.r4=s,[["M "+(e+u.r1)+","+n],["l "+(a-u.r1-u.r2)+",0"],["a "+u.r2+","+u.r2+",0,0,1,"+u.r2+","+u.r2],["l 0,"+(o-u.r2-u.r3)],["a "+u.r3+","+u.r3+",0,0,1,"+-u.r3+","+u.r3],["l "+(u.r3+u.r4-a)+",0"],["a "+u.r4+","+u.r4+",0,0,1,"+-u.r4+","+-u.r4],["l 0,"+(u.r4+u.r1-o)],["a "+u.r1+","+u.r1+",0,0,1,"+u.r1+","+-u.r1],["z"]].join(" ")},e._formatPath=function(t){return~(t=t.map(function(t){return t.join(" ")}).join("")).indexOf("NaN")?"":t},e._setTransform=function(t){for(var e=t._attrs.matrix,n=t._cfg.el,r=[],i=0;i<9;i+=3)r.push(e[i]+","+e[i+1]);-1===(r=r.join(",")).indexOf("NaN")?n.setAttribute("transform","matrix("+r+")"):console.warn("invalid matrix:",e)},e._setImage=function(t,e){var n=t._attrs,i=t._cfg.el;if(r.isString(e))i.setAttribute("href",e);else if(e instanceof Image)n.width||(i.setAttribute("width",e.width),t._attrs.width=e.width),n.height||(i.setAttribute("height",e.height),t._attrs.height=e.height),i.setAttribute("href",e.src);else if(e instanceof HTMLElement&&r.isString(e.nodeName)&&"CANVAS"===e.nodeName.toUpperCase())i.setAttribute("href",e.toDataURL());else if(e instanceof ImageData){var a=document.createElement("canvas");a.setAttribute("width",e.width),a.setAttribute("height",e.height),a.getContext("2d").putImageData(e,0,0),n.width||(i.setAttribute("width",e.width),t._attrs.width=e.width),n.height||(i.setAttribute("height",e.height),t._attrs.height=e.height),i.setAttribute("href",a.toDataURL())}},e._updateFan=function(t){function e(t,e,n){return{x:e*Math.cos(t)+n.x,y:e*Math.sin(t)+n.y}}var n=t._attrs,i=t._cfg,a={x:n.x,y:n.y},o=[],s=n.startAngle,u=n.endAngle;r.isNumberEqual(u-s,2*Math.PI)&&(u-=1e-5);var c=e(s,n.re,a),h=e(u,n.re,a),f=u>s?1:0,l=Math.abs(u-s)>Math.PI?1:0,p=n.rs,d=n.re,g=e(s,n.rs,a),v=e(u,n.rs,a);n.rs>0?(o.push("M "+h.x+","+h.y),o.push("L "+v.x+","+v.y),o.push("A "+p+","+p+",0,"+l+","+(1===f?0:1)+","+g.x+","+g.y),o.push("L "+c.x+" "+c.y)):(o.push("M "+a.x+","+a.y),o.push("L "+c.x+","+c.y)),o.push("A "+d+","+d+",0,"+l+","+f+","+h.x+","+h.y),n.rs>0?o.push("L "+v.x+","+v.y):o.push("Z"),i.el.setAttribute("d",o.join(" "))},e._updateText=function(t){var e=t._attrs,n=t._cfg.attrs,r=t._cfg.el;for(var i in this._setFont(t),e)if(e[i]!==n[i]){if("text"===i){this._setText(t,""+e[i]);continue}if("fillStyle"===i||"strokeStyle"===i){this._setColor(t,i,e[i]);continue}if("matrix"===i){this._setTransform(t);continue}u[i]&&r.setAttribute(u[i],e[i])}t._cfg.attrs=Object.assign({},t._attrs),t._cfg.hasUpdate=!1},e._setFont=function(t){var e=t.get("el"),n=t._attrs,r=n.fontSize;e.setAttribute("alignment-baseline",c[n.textBaseline]||"baseline"),e.setAttribute("text-anchor",h[n.textAlign]||"left"),r&&+r<12&&(n.matrix=[1,0,0,0,1,0,0,0,1],t.transform([["t",-n.x,-n.y],["s",+r/12,+r/12],["t",n.x,n.y]]))},e._setText=function(t,e){var n=t._cfg.el,i=t._attrs.textBaseline||"bottom";if(e)if(~e.indexOf("\n")){var a=t._attrs.x,o=e.split("\n"),s=o.length-1,u="";r.each(o,function(t,e){0===e?"alphabetic"===i?u+='<tspan x="'+a+'" dy="'+-s+'em">'+t+"</tspan>":"top"===i?u+='<tspan x="'+a+'" dy="0.9em">'+t+"</tspan>":"middle"===i?u+='<tspan x="'+a+'" dy="'+-(s-1)/2+'em">'+t+"</tspan>":"bottom"===i?u+='<tspan x="'+a+'" dy="-'+(s+.3)+'em">'+t+"</tspan>":"hanging"===i&&(u+='<tspan x="'+a+'" dy="'+(-(s-1)-.3)+'em">'+t+"</tspan>"):u+='<tspan x="'+a+'" dy="1em">'+t+"</tspan>"}),n.innerHTML=u}else n.innerHTML=e;else n.innerHTML=""},e._setClip=function(t,e){var n=t._cfg.el;if(e)if(n.hasAttribute("clip-path"))e._cfg.hasUpdate&&this._updateShape(e);else{this._createDom(e),this._updateShape(e);var r=this.context.addClip(e);n.setAttribute("clip-path","url(#"+r+")")}else n.removeAttribute("clip-path")},e._setColor=function(t,e,n){var r=t._cfg.el,i=this.context;if(n)if(n=n.trim(),/^[r,R,L,l]{1}[\s]*\(/.test(n)){var a=i.find("gradient",n);a||(a=i.addGradient(n)),r.setAttribute(u[e],"url(#"+a+")")}else if(/^[p,P]{1}[\s]*\(/.test(n)){var o=i.find("pattern",n);o||(o=i.addPattern(n)),r.setAttribute(u[e],"url(#"+o+")")}else r.setAttribute(u[e],n);else r.setAttribute(u[e],"none")},e._setShadow=function(t){var e=t._cfg.el,n=t._attrs,r={dx:n.shadowOffsetX,dy:n.shadowOffsetY,blur:n.shadowBlur,color:n.shadowColor};if(r.dx||r.dy||r.blur||r.color){var i=this.context.find("filter",r);i||(i=this.context.addShadow(r,this)),e.setAttribute("filter","url(#"+i+")")}else e.removeAttribute("filter")},t}();t.exports=f},function(t,e,n){t.exports={painter:n(735),getShape:n(728)}},function(t,e,n){var r=n(19),i=/[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,a=/[^\s\,]+/gi,o=/^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,s=/^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,u=/^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,c=/[\d.]+:(#[^\s]+|[^\)]+\))/gi;function h(t,e){var n=t.match(c);r.each(n,function(t){t=t.split(":"),e.addColorStop(t[0],t[1])})}t.exports={parsePath:function(t){return t=t||[],r.isArray(t)?t:r.isString(t)?(t=t.match(i),r.each(t,function(e,n){if((e=e.match(a))[0].length>1){var i=e[0].charAt(0);e.splice(1,0,e[0].substr(1)),e[0]=i}r.each(e,function(t,n){isNaN(t)||(e[n]=+t)}),t[n]=e}),t):void 0},parseStyle:function(t,e,n){if(r.isString(t)){if("("===t[1]||"("===t[2]){if("l"===t[0])return function(t,e,n){var i,a,s=o.exec(t),u=r.mod(r.toRadian(parseFloat(s[1])),2*Math.PI),c=s[2],f=e.getBBox();u>=0&&u<.5*Math.PI?(i={x:f.minX,y:f.minY},a={x:f.maxX,y:f.maxY}):.5*Math.PI<=u&&u<Math.PI?(i={x:f.maxX,y:f.minY},a={x:f.minX,y:f.maxY}):Math.PI<=u&&u<1.5*Math.PI?(i={x:f.maxX,y:f.maxY},a={x:f.minX,y:f.minY}):(i={x:f.minX,y:f.maxY},a={x:f.maxX,y:f.minY});var l=Math.tan(u),p=l*l,d=(a.x-i.x+l*(a.y-i.y))/(p+1)+i.x,g=l*(a.x-i.x+l*(a.y-i.y))/(p+1)+i.y,v=n.createLinearGradient(i.x,i.y,d,g);return h(c,v),v}(t,e,n);if("r"===t[0])return function(t,e,n){var r=s.exec(t),i=parseFloat(r[1]),a=parseFloat(r[2]),o=parseFloat(r[3]),u=r[4];if(0===o){var f=u.match(c);return f[f.length-1].split(":")[1]}var l=e.getBBox(),p=l.maxX-l.minX,d=l.maxY-l.minY,g=Math.sqrt(p*p+d*d)/2,v=n.createRadialGradient(l.minX+p*i,l.minY+d*a,o*g,l.minX+p/2,l.minY+d/2,g);return h(u,v),v}(t,e,n);if("p"===t[0])return function(t,e,n){if(e.get("patternSource")&&e.get("patternSource")===t)return e.get("pattern");var r,i,a=u.exec(t),o=a[1],s=a[2];function c(){r=n.createPattern(i,o),e.setSilent("pattern",r),e.setSilent("patternSource",t)}switch(o){case"a":o="repeat";break;case"x":o="repeat-x";break;case"y":o="repeat-y";break;case"n":o="no-repeat";break;default:o="no-repeat"}return i=new Image,s.match(/^data:/i)||(i.crossOrigin="Anonymous"),i.src=s,i.complete?c():(i.onload=c,i.src=i.src),r}(t,e,n)}return t}}}},function(t,e,n){var r=n(19),i=n(737),a=["fillStyle","font","globalAlpha","lineCap","lineWidth","lineJoin","miterLimit","shadowBlur","shadowColor","shadowOffsetX","shadowOffsetY","strokeStyle","textAlign","textBaseline","lineDash","lineDashOffset"],o=function(){function t(t){if(!t)return null;var e=r.uniqueId("canvas_"),n=r.createDom('<canvas id="'+e+'"></canvas>');return t.appendChild(n),this.type="canvas",this.canvas=n,this.context=n.getContext("2d"),this.toDraw=!1,this}var e=t.prototype;return e.beforeDraw=function(){var t=this.canvas;this.context&&this.context.clearRect(0,0,t.width,t.height)},e.draw=function(t){var e=this;e.animateHandler?e.toDraw=!0:function n(){e.animateHandler=r.requestAnimationFrame(function(){e.animateHandler=void 0,e.toDraw&&n()}),e.beforeDraw();try{e._drawGroup(t)}catch(t){console.warn("error in draw canvas, detail as:"),console.warn(t),e.toDraw=!1}e.toDraw=!1}()},e.drawSync=function(t){this.beforeDraw(),this._drawGroup(t)},e._drawGroup=function(t){if(!t._cfg.removed&&!t._cfg.destroyed&&t._cfg.visible){var e=t._cfg.children,n=null;this.setContext(t);for(var r=0;r<e.length;r++)n=e[r],e[r].isGroup?this._drawGroup(n):this._drawShape(n);this.restoreContext(t)}},e._drawShape=function(t){t._cfg.removed||t._cfg.destroyed||!t._cfg.visible||(this.setContext(t),t.drawInner(this.context),this.restoreContext(t),t._cfg.attrs=t._attrs,t._cfg.hasUpdate=!1)},e.setContext=function(t){var e=this.context,n=t._attrs.clip;e.save(),n&&(n.resetTransform(e),n.createPath(e),e.clip()),this.resetContext(t),t.resetTransform(e)},e.restoreContext=function(){this.context.restore()},e.resetContext=function(t){var e=this.context,n=t._attrs;if(!t.isGroup)for(var o in n)if(a.indexOf(o)>-1){var s=n[o];"fillStyle"===o&&(s=i.parseStyle(s,t,e)),"strokeStyle"===o&&(s=i.parseStyle(s,t,e)),"lineDash"===o&&e.setLineDash?r.isArray(s)?e.setLineDash(s):r.isString(s)&&e.setLineDash(s.split(" ")):e[o]=s}},t}();t.exports=o},function(t,e,n){t.exports={painter:n(738)}},function(t,e,n){t.exports={canvas:n(739),svg:n(736)}},function(t,e,n){var r=n(19),i=n(610),a=n(17),o=n(44),s=n(238),u=s.interpolate,c=s.interpolateArray,h=function(t){this._animators=[],this._current=0,this._timer=null,this.canvas=t};function f(t,e,n){var a,s=e.startTime;if(n<s+e.delay||e.isPaused)return!1;var h=e.duration,f=e.easing;if(n=n-s-e.delay,e.toAttrs.repeat)a=n%h/h,a=o[f](a);else{if(!((a=n/h)<1))return t.attr(e.toAttrs),e.toMatrix&&t.setMatrix(e.toMatrix),!0;a=o[f](a)}return function(t,e,n){var a={},o=e.toAttrs,s=e.fromAttrs,h=e.toMatrix;if(!t.get("destroyed")){var f;for(var l in o)if(!r.isEqual(s[l],o[l]))if("path"===l){var p=o[l],d=s[l];p.length>d.length?(p=i.parsePathString(o[l]),d=i.parsePathString(s[l]),d=i.fillPathByDiff(d,p),d=i.formatPath(d,p),e.fromAttrs.path=d,e.toAttrs.path=p):e.pathFormatted||(p=i.parsePathString(o[l]),d=i.parsePathString(s[l]),d=i.formatPath(d,p),e.fromAttrs.path=d,e.toAttrs.path=p,e.pathFormatted=!0),a[l]=[];for(var g=0;g<p.length;g++){for(var v=p[g],m=d[g],x=[],y=0;y<v.length;y++)r.isNumber(v[y])&&m&&r.isNumber(m[y])?(f=u(m[y],v[y]),x.push(f(n))):x.push(v[y]);a[l].push(x)}}else f=u(s[l],o[l]),a[l]=f(n);if(h){var b=c(e.fromMatrix,h)(n);t.setMatrix(b)}t.attr(a)}}(t,e,a),!1}r.augment(h,{initTimer:function(){var t,e,n,r=this,i=this;i._timer=a.timer(function(a){if(i._current=a,r._animators.length>0){for(var o=r._animators.length-1;o>=0;o--)if((t=r._animators[o]).get("destroyed"))i.removeAnimator(o);else{if(!t.get("pause").isPaused)for(var s=(e=t.get("animators")).length-1;s>=0;s--)n=e[s],f(t,n,a)&&(e.splice(s,1),!1,n.callback&&n.callback());0===e.length&&i.removeAnimator(o)}r.canvas.draw()}})},addAnimator:function(t){this._animators.push(t)},removeAnimator:function(t){this._animators.splice(t,1)},isAnimating:function(){return!!this._animators.length},stop:function(){this._timer&&this._timer.stop()},stopAllAnimations:function(){this._animators.forEach(function(t){t.stopAnimate()}),this._animators=[],this.canvas.draw()},getTime:function(){return this._current}}),t.exports=h},function(t,e,n){var r=n(19),i=n(613),a={arc:n(602),ellipse:n(639),line:n(603)},o=r.createDom('<canvas width="500" height="500"></canvas>').getContext("2d");function s(t,e,n){return n.createPath(o),o.isPointInPath(t,e)}var u={arc:function(t,e){var n=this._attrs,r=n.x,a=n.y,o=n.r,s=n.startAngle,u=n.endAngle,c=n.clockwise,h=this.getHitLineWidth();return!!this.hasStroke()&&i.arcline(r,a,o,s,u,c,h,t,e)},circle:function(t,e){var n=this._attrs,r=n.x,a=n.y,o=n.r,s=this.getHitLineWidth(),u=this.hasFill(),c=this.hasStroke();return u&&c?i.circle(r,a,o,t,e)||i.arcline(r,a,o,0,2*Math.PI,!1,s,t,e):u?i.circle(r,a,o,t,e):!!c&&i.arcline(r,a,o,0,2*Math.PI,!1,s,t,e)},dom:function(t,e){if(!this._cfg.el)return!1;var n=this._cfg.el.getBBox();return i.box(n.x,n.x+n.width,n.y,n.y+n.height,t,e)},ellipse:function(t,e){var n=this._attrs,a=this.hasFill(),o=this.hasStroke(),s=n.x,u=n.y,c=n.rx,h=n.ry,f=this.getHitLineWidth(),l=c>h?c:h,p=c>h?1:c/h,d=c>h?h/c:1,g=[t,e,1],v=[1,0,0,0,1,0,0,0,1];r.mat3.scale(v,v,[p,d]),r.mat3.translate(v,v,[s,u]);var m=r.mat3.invert([],v);return r.vec3.transformMat3(g,g,m),a&&o?i.circle(0,0,l,g[0],g[1])||i.arcline(0,0,l,0,2*Math.PI,!1,f,g[0],g[1]):a?i.circle(0,0,l,g[0],g[1]):!!o&&i.arcline(0,0,l,0,2*Math.PI,!1,f,g[0],g[1])},fan:function(t,e){var n=this,o=n.hasFill(),s=n.hasStroke(),u=n._attrs,c=u.x,h=u.y,f=u.rs,l=u.re,p=u.startAngle,d=u.endAngle,g=u.clockwise,v=[t-c,e-h],m=r.vec2.angleTo([1,0],v);function x(){var t=a.arc.nearAngle(m,p,d,g);if(r.isNumberEqual(m,t)){var e=r.vec2.squaredLength(v);if(f*f<=e&&e<=l*l)return!0}return!1}function y(){var r=n.getHitLineWidth(),a={x:Math.cos(p)*f+c,y:Math.sin(p)*f+h},o={x:Math.cos(p)*l+c,y:Math.sin(p)*l+h},s={x:Math.cos(d)*f+c,y:Math.sin(d)*f+h},u={x:Math.cos(d)*l+c,y:Math.sin(d)*l+h};return!!(i.line(a.x,a.y,o.x,o.y,r,t,e)||i.line(s.x,s.y,u.x,u.y,r,t,e)||i.arcline(c,h,f,p,d,g,r,t,e)||i.arcline(c,h,l,p,d,g,r,t,e))}return o&&s?x()||y():o?x():!!s&&y()},image:function(t,e){var n=this._attrs;if(this.get("toDraw")||!n.img)return!1;this._cfg.attrs&&this._cfg.attrs.img===n.img||this._setAttrImg();var r=n.x,a=n.y,o=n.width,s=n.height;return i.rect(r,a,o,s,t,e)},line:function(t,e){var n=this._attrs,r=n.x1,a=n.y1,o=n.x2,s=n.y2,u=this.getHitLineWidth();return!!this.hasStroke()&&i.line(r,a,o,s,u,t,e)},path:function(t,e){var n=this,i=n.get("segments"),a=n.hasFill(),o=n.hasStroke();function u(){if(!r.isEmpty(i)){for(var a=n.getHitLineWidth(),o=0,s=i.length;o<s;o++)if(i[o].isInside(t,e,a))return!0;return!1}}return a&&o?s(t,e,n)||u():a?s(t,e,n):!!o&&u()},marker:function(t,e){var n=this._attrs,r=n.x,a=n.y,o=n.radius||n.r,s=this.getHitLineWidth();return i.circle(r,a,o+s/2,t,e)},polygon:function(t,e){var n=this,r=n.hasFill(),a=n.hasStroke();function o(){var r=n._attrs.points;if(r.length<2)return!1;var a=n.getHitLineWidth(),o=r.slice(0);return r.length>=3&&o.push(r[0]),i.polyline(o,a,t,e)}return r&&a?s(t,e,n)||o():r?s(t,e,n):!!a&&o()},polyline:function(t,e){var n=this._attrs;if(this.hasStroke()){var r=n.points;if(r.length<2)return!1;var a=n.lineWidth;return i.polyline(r,a,t,e)}return!1},rect:function(t,e){var n=this,r=n.hasFill(),a=n.hasStroke();function o(){var r=n._attrs,a=r.x,o=r.y,s=r.width,u=r.height,c=r.radius,h=n.getHitLineWidth();if(0===c){var f=h/2;return i.line(a-f,o,a+s+f,o,h,t,e)||i.line(a+s,o-f,a+s,o+u+f,h,t,e)||i.line(a+s+f,o+u,a-f,o+u,h,t,e)||i.line(a,o+u+f,a,o-f,h,t,e)}return i.line(a+c,o,a+s-c,o,h,t,e)||i.line(a+s,o+c,a+s,o+u-c,h,t,e)||i.line(a+s-c,o+u,a+c,o+u,h,t,e)||i.line(a,o+u-c,a,o+c,h,t,e)||i.arcline(a+s-c,o+c,c,1.5*Math.PI,2*Math.PI,!1,h,t,e)||i.arcline(a+s-c,o+u-c,c,0,.5*Math.PI,!1,h,t,e)||i.arcline(a+c,o+u-c,c,.5*Math.PI,Math.PI,!1,h,t,e)||i.arcline(a+c,o+c,c,Math.PI,1.5*Math.PI,!1,h,t,e)}return r&&a?s(t,e,n)||o():r?s(t,e,n):!!a&&o()},text:function(t,e){var n=this.getBBox();if(this.hasFill()||this.hasStroke())return i.box(n.minX,n.maxX,n.minY,n.maxY,t,e)}};t.exports={isPointInPath:function(t,e){var n=u[this.type];return!!n&&n.call(this,t,e)}}},function(t,e,n){var r=n(58);r.Arc=n(638),r.Circle=n(637),r.Dom=n(636),r.Ellipse=n(635),r.Fan=n(634),r.Image=n(633),r.Line=n(632),r.Marker=n(611),r.Path=n(631),r.Polygon=n(630),r.Polyline=n(629),r.Rect=n(628),r.Text=n(627),t.exports=r},function(t,e,n){var r=n(19),i={delay:"delay",rotate:"rotate"},a={fill:"fill",stroke:"stroke",fillStyle:"fillStyle",strokeStyle:"strokeStyle"};t.exports={animate:function(t,e,n,o,s){void 0===s&&(s=0);this.set("animating",!0);var u=this.get("timeline");u||(u=this.get("canvas").get("timeline"),this.setSilent("timeline",u));var c=this.get("animators")||[];u._timer||u.initTimer(),r.isNumber(o)&&(s=o,o=null),r.isFunction(n)?(o=n,n="easeLinear"):n=n||"easeLinear";var h=function(t,e){var n={matrix:null,attrs:{}},o=e._attrs;for(var s in t)if("transform"===s)n.matrix=r.transform(e.getMatrix(),t[s]);else if("rotate"===s)n.matrix=r.transform(e.getMatrix(),[["r",t[s]]]);else if("matrix"===s)n.matrix=t[s];else{if(a[s]&&/^[r,R,L,l]{1}[\s]*\(/.test(t[s]))continue;i[s]||o[s]===t[s]||(n.attrs[s]=t[s])}return n}(t,this),f={fromAttrs:function(t,e){var n={},r=e._attrs;for(var i in t.attrs)n[i]=r[i];return n}(h,this),toAttrs:h.attrs,fromMatrix:r.clone(this.getMatrix()),toMatrix:h.matrix,duration:e,easing:n,callback:o,delay:s,startTime:u.getTime(),id:r.uniqueId()};c.length>0?c=function(t,e){var n=e.delay,i=Object.prototype.hasOwnProperty;return r.each(e.toAttrs,function(e,a){r.each(t,function(t){n<t.startTime+t.duration&&i.call(t.toAttrs,a)&&(delete t.toAttrs[a],delete t.fromAttrs[a])})}),e.toMatrix&&r.each(t,function(t){n<t.startTime+t.duration&&t.toMatrix&&delete t.toMatrix}),t}(c,f):u.addAnimator(this),c.push(f),this.setSilent("animators",c),this.setSilent("pause",{isPaused:!1})},stopAnimate:function(){var t=this,e=this.get("animators");r.each(e,function(e){t.attr(e.toAttrs),e.toMatrix&&t.attr("matrix",e.toMatrix),e.callback&&e.callback()}),this.setSilent("animating",!1),this.setSilent("animators",[])},pauseAnimate:function(){var t=this.get("timeline");return this.setSilent("pause",{isPaused:!0,pauseTime:t.getTime()}),this},resumeAnimate:function(){var t=this.get("timeline").getTime(),e=this.get("animators"),n=this.get("pause").pauseTime;return r.each(e,function(e){e.startTime=e.startTime+(t-n),e._paused=!1,e._pauseTime=null}),this.setSilent("pause",{isPaused:!1}),this.setSilent("animators",e),this}}},function(t,e,n){var r=n(19);function i(t){return 1===t[0]&&0===t[1]&&0===t[3]&&1===t[4]&&0===t[6]&&0===t[7]}function a(t){return 0===t[1]&&0===t[3]&&0===t[6]&&0===t[7]}function o(t,e){i(e)||(a(e)?(t[0]*=e[0],t[4]*=e[4]):r.mat3.multiply(t,t,e))}t.exports={initTransform:function(){},resetMatrix:function(){this.attr("matrix",[1,0,0,0,1,0,0,0,1])},translate:function(t,e){var n=this._attrs.matrix;return r.mat3.translate(n,n,[t,e]),this.clearTotalMatrix(),this.attr("matrix",n),this},rotate:function(t){var e=this._attrs.matrix;return r.mat3.rotate(e,e,t),this.clearTotalMatrix(),this.attr("matrix",e),this},scale:function(t,e){var n=this._attrs.matrix;return r.mat3.scale(n,n,[t,e]),this.clearTotalMatrix(),this.attr("matrix",n),this},rotateAtStart:function(t){var e=this._attrs.x||this._cfg.attrs.x,n=this._attrs.y||this._cfg.attrs.y;return Math.abs(t)>2*Math.PI&&(t=t/180*Math.PI),this.transform([["t",-e,-n],["r",t],["t",e,n]])},move:function(t,e){var n=this.get("x")||0,r=this.get("y")||0;return this.translate(t-n,e-r),this.set("x",t),this.set("y",e),this},transform:function(t){var e=this,n=this._attrs.matrix;return r.each(t,function(t){switch(t[0]){case"t":e.translate(t[1],t[2]);break;case"s":e.scale(t[1],t[2]);break;case"r":e.rotate(t[1]);break;case"m":e.attr("matrix",r.mat3.multiply([],n,t[1])),e.clearTotalMatrix()}}),e},setTransform:function(t){return this.attr("matrix",[1,0,0,0,1,0,0,0,1]),this.transform(t)},getMatrix:function(){return this.attr("matrix")},setMatrix:function(t){return this.attr("matrix",t),this.clearTotalMatrix(),this},apply:function(t,e){var n;return n=e?this._getMatrixByRoot(e):this.attr("matrix"),r.vec3.transformMat3(t,t,n),this},_getMatrixByRoot:function(t){t=t||this;for(var e=this,n=[];e!==t;)n.unshift(e),e=e.get("parent");n.unshift(e);var i=[1,0,0,0,1,0,0,0,1];return r.each(n,function(t){r.mat3.multiply(i,t.attr("matrix"),i)}),i},getTotalMatrix:function(){var t=this._cfg.totalMatrix;if(!t){t=[1,0,0,0,1,0,0,0,1];var e=this._cfg.parent;if(e)o(t,e.getTotalMatrix());o(t,this.attr("matrix")),this._cfg.totalMatrix=t}return t},clearTotalMatrix:function(){},invert:function(t){var e=this.getTotalMatrix();if(a(e))t[0]/=e[0],t[1]/=e[4];else{var n=r.mat3.invert([],e);n&&r.vec3.transformMat3(t,t,n)}return this},resetTransform:function(t){var e=this.attr("matrix");i(e)||t.transform(e[0],e[1],e[3],e[4],e[6],e[7])}}},function(t,e,n){var r=n(19);t.exports={canFill:!1,canStroke:!1,initAttrs:function(t){return this._attrs={opacity:1,fillOpacity:1,strokeOpacity:1,matrix:[1,0,0,0,1,0,0,0,1]},this.attr(r.assign(this.getDefaultAttrs(),t)),this},getDefaultAttrs:function(){return{}},attr:function(t,e){if(0===arguments.length)return this._attrs;if(r.isObject(t)){for(var n in t)this._setAttr(n,t[n]);return this.clearBBox(),this._cfg.hasUpdate=!0,this}return 2===arguments.length?(this._setAttr(t,e),this.clearBBox(),this._cfg.hasUpdate=!0,this):this._attrs[t]},_setAttr:function(t,e){var n=this._attrs;n[t]=e,"fill"!==t&&"stroke"!==t?"opacity"!==t?"clip"===t&&e?this._setClip(e):"path"===t&&this._afterSetAttrPath?this._afterSetAttrPath(e):"transform"!==t?"rotate"===t&&this.rotateAtStart(e):this.transform(e):n.globalAlpha=e:n[t+"Style"]=e},clearBBox:function(){this.setSilent("box",null)},hasFill:function(){return this.canFill&&this._attrs.fillStyle},hasStroke:function(){return this.canStroke&&this._attrs.strokeStyle},_setClip:function(t){t._cfg.renderer=this._cfg.renderer,t._cfg.canvas=this._cfg.canvas,t._cfg.parent=this._cfg.parent,t.hasFill=function(){return!0}}}},function(t,e,n){var r=n(19),i=n(643),a=n(642),o=n(741),s=n(740),u=function t(e){t.superclass.constructor.call(this,e)};u.CFG={eventEnable:!0,width:null,height:null,widthCanvas:null,heightCanvas:null,widthStyle:null,heightStyle:null,containerDOM:null,canvasDOM:null,pixelRatio:null,renderer:"canvas"},r.extend(u,a),r.augment(u,{init:function(){u.superclass.init.call(this),this._setGlobalParam(),this._setContainer(),this._initPainter(),this._scale(),this.get("eventEnable")&&this._registEvents()},getEmitter:function(t,e){if(t){if(!r.isEmpty(t._getEvents()))return t;var n=t.get("parent");if(n&&!e.propagationStopped)return this.getEmitter(n,e)}},_getEventObj:function(t,e,n,r){var a=new i(t,e,!0,!0);return a.x=n.x,a.y=n.y,a.clientX=e.clientX,a.clientY=e.clientY,a.currentTarget=r,a.target=r,a},_triggerEvent:function(t,e){var n,r=this.getPointByClient(e.clientX,e.clientY),i=this.getShape(r.x,r.y,e),a=this.get("el");if("mousemove"===t){var o=this.get("preShape");if(o&&o!==i){var s=this._getEventObj("mouseleave",e,r,o);(n=this.getEmitter(o,e))&&n.emit("mouseleave",s),a.style.cursor="default"}if(i){var u=this._getEventObj("mousemove",e,r,i);if((n=this.getEmitter(i,e))&&n.emit("mousemove",u),o!==i){var c=this._getEventObj("mouseenter",e,r,i);n&&n.emit("mouseenter",c,e)}}else{var h=this._getEventObj("mousemove",e,r,this);this.emit("mousemove",h)}this.set("preShape",i)}else{var f=this._getEventObj(t,e,r,i||this);(n=this.getEmitter(i,e))&&n!==this&&n.emit(t,f),this.emit(t,f)}i&&!i.get("destroyed")&&(a.style.cursor=i.attr("cursor")||"default")},_registEvents:function(){var t=this,e=t.get("el");r.each(["mouseout","mouseover","mousemove","mousedown","mouseleave","mouseup","click","dblclick"],function(n){e.addEventListener(n,function(e){t._triggerEvent(n,e)},!1)}),e.addEventListener("touchstart",function(e){r.isEmpty(e.touches)||t._triggerEvent("touchstart",e.touches[0])},!1),e.addEventListener("touchmove",function(e){r.isEmpty(e.touches)||t._triggerEvent("touchmove",e.touches[0])},!1),e.addEventListener("touchend",function(e){r.isEmpty(e.changedTouches)||t._triggerEvent("touchend",e.changedTouches[0])},!1)},_scale:function(){if("svg"!==this._cfg.renderType){var t=this.get("pixelRatio");this.scale(t,t)}},_setGlobalParam:function(){var t=this.get("renderer")||"canvas";"svg"===t?this.set("pixelRatio",1):this.get("pixelRatio")||this.set("pixelRatio",r.getRatio()),this._cfg.renderType=t;var e=s[t];this._cfg.renderer=e,this._cfg.canvas=this;var n=new o(this);this._cfg.timeline=n},_setContainer:function(){var t=this.get("containerId"),e=this.get("containerDOM");e||(e=document.getElementById(t),this.set("containerDOM",e)),r.modifyCSS(e,{position:"relative"})},_initPainter:function(){var t=this.get("containerDOM"),e=new this._cfg.renderer.painter(t);this._cfg.painter=e,this._cfg.canvasDOM=this._cfg.el=e.canvas,this.changeSize(this.get("width"),this.get("height"))},_resize:function(){var t=this.get("canvasDOM"),e=this.get("widthCanvas"),n=this.get("heightCanvas"),r=this.get("widthStyle"),i=this.get("heightStyle");t.style.width=r,t.style.height=i,t.setAttribute("width",e),t.setAttribute("height",n)},getWidth:function(){var t=this.get("pixelRatio");return this.get("width")*t},getHeight:function(){var t=this.get("pixelRatio");return this.get("height")*t},changeSize:function(t,e){var n=this.get("pixelRatio"),r=t*n,i=e*n;this.set("widthCanvas",r),this.set("heightCanvas",i),this.set("widthStyle",t+"px"),this.set("heightStyle",e+"px"),this.set("width",t),this.set("height",e),this._resize()},getPointByClient:function(t,e){var n=this.get("el"),r=this.get("pixelRatio")||1,i=n.getBoundingClientRect();return{x:(t-i.left)*r,y:(e-i.top)*r}},getClientByPoint:function(t,e){var n=this.get("el").getBoundingClientRect(),r=this.get("pixelRatio")||1;return{clientX:t/r+n.left,clientY:e/r+n.top}},draw:function(){this._cfg.painter.draw(this)},getShape:function(t,e,n){return 3===arguments.length&&this._cfg.renderer.getShape?this._cfg.renderer.getShape.call(this,t,e,n):u.superclass.getShape.call(this,t,e)},getRenderer:function(){return this._cfg.renderType},_drawSync:function(){this._cfg.painter.drawSync(this)},destroy:function(){var t=this._cfg,e=t.containerDOM,n=t.canvasDOM;n&&e&&e.removeChild(n),t.timeline.stop(),u.superclass.destroy.call(this)}}),t.exports=u},function(t,e,n){var r=n(248),i={};n(257).mix(i,r.PathUtil,{getRectPath:r.PathUtil.rectPath,pointsToPolygon:function(t){for(var e=[["M",t[0].x,t[0].y]],n=1;n<t.length;n++){var r=t[n];e.push(["L",r.x,r.y])}return e},getEllipsePath:function(t,e,n,r){return[["M",t,e-r],["a",n,r,0,1,1,0,2*r],["a",n,r,0,1,1,0,-2*r],["z"]]}}),t.exports=i},function(t,e,n){var r=n(645),i=n(16),a="Expected a function";t.exports=function(t,e,n){var o=!0,s=!0;if("function"!=typeof t)throw new TypeError(a);return i(n)&&(o="leading"in n?!!n.leading:o,s="trailing"in n?!!n.trailing:s),r(t,e,{leading:o,maxWait:e,trailing:s})}},function(t,e){t.exports=function(t,e,n){var r=void 0,i=void 0,a=void 0,o=void 0,s=0;n||(n={});var u=function(){s=!1===n.leading?0:Date.now(),r=null,o=t.apply(i,a),r||(i=a=null)},c=function(){var c=Date.now();s||!1!==n.leading||(s=c);var h=e-(c-s);return i=this,a=arguments,h<=0||h>e?(r&&(clearTimeout(r),r=null),s=c,o=t.apply(i,a),r||(i=a=null)):r||!1===n.trailing||(r=setTimeout(u,h)),o};return c.cancel=function(){clearTimeout(r),s=0,r=i=a=null},c}},function(t,e,n){var r=n(46),i=n(596),a=Object.prototype.hasOwnProperty;t.exports=function(t,e){if(null===t||!i(t))return{};var n={};return r(e,function(e){a.call(t,e)&&(n[e]=t[e])}),n}},function(t,e,n){var r=n(46),i=n(118);t.exports=function(t,e){if(!i(t))return t;var n=[];return r(t,function(t,r){n.push(e(t,r))}),n}},function(t,e,n){var r=n(84),i=n(614);t.exports=function(t,e,n){return r(n)?!!n(t,e):i(t,e)}},function(t,e,n){var r=n(118);t.exports=function(t,e){if(!r(t))return-1;var n=Array.prototype.indexOf;if(n)return n.call(t,e);for(var i=-1,a=0;a<t.length;a++)if(t[a]===e){i=a;break}return i}},function(t,e,n){var r=n(649);t.exports=function(t,e){if(!e)return[t];var n=r(t,e),i=[];for(var a in n)i.push(n[a]);return i}},function(t,e){t.exports=function(t,e,n){var r=void 0;return function(){var i=this,a=arguments,o=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||t.apply(i,a)},e),o&&t.apply(i,a)}}},function(t,e,n){var r=n(115);t.exports=function(t){return r(t,"Error")}},function(t,e,n){var r=n(115);t.exports=function(t){return r(t,"Arguments")}},function(t,e,n){var r=n(115);t.exports=function(t){return r(t,"Date")}},function(t,e,n){var r=n(115);t.exports=function(t){return r(t,"RegExp")}},function(t,e){t.exports=function(t){return void 0===t}},function(t,e){t.exports=function(t){return null===t}},function(t,e,n){var r=n(115),i={getType:n(654),isArray:n(45),isArrayLike:n(118),isBoolean:n(653),isFunction:n(84),isNil:n(237),isNull:n(762),isNumber:n(236),isObject:n(621),isObjectLike:n(619),isPlainObject:n(596),isPrototype:n(652),isType:r,isUndefined:n(761),isString:n(595),isRegExp:n(760),isDate:n(759),isArguments:n(758),isError:n(757)};t.exports=i},function(t,e,n){t.exports=n(656)},function(t,e){t.exports=function(t,e){return t&&e?t.replace(/\\?\{([^{}]+)\}/g,function(t,n){return"\\"===t.charAt(0)?t.slice(1):void 0===e[n]?"":e[n]}):t}},function(t,e,n){var r=n(594);t.exports=function(t){var e=r(t);return e.charAt(0).toLowerCase()+e.substring(1)}},function(t,e,n){t.exports=n(657)},function(t,e,n){var r={lc:n(767),lowerCase:n(657),lowerFirst:n(766),substitute:n(765),uc:n(764),upperCase:n(656),upperFirst:n(655)};t.exports=r},function(t,e){function n(t){var e=[];switch(t[0]){case"M":case"L":e.push([t[1],t[2]]);break;case"A":e.push([t[6],t[7]]);break;case"Q":e.push([t[3],t[4]]),e.push([t[1],t[2]]);break;case"T":e.push([t[1],t[2]]);break;case"C":e.push([t[5],t[6]]),e.push([t[1],t[2]]),e.push([t[3],t[4]]);break;case"S":e.push([t[3],t[4]]),e.push([t[1],t[2]]);break;case"H":case"V":e.push([t[1],t[1]])}return e}function r(t,e,r){for(var i=[].concat(t),a=void 0,o=1/(r+1),s=n(e)[0],u=1;u<=r;u++)o*=u,0===(a=Math.floor(t.length*o))?i.unshift([s[0]*o+t[a][0]*(1-o),s[1]*o+t[a][1]*(1-o)]):i.splice(a,0,[s[0]*o+t[a][0]*(1-o),s[1]*o+t[a][1]*(1-o)]);return i}t.exports=function(t,e){if(t.length<=1)return t;for(var i=void 0,a=0;a<e.length;a++)if(t[a][0]!==e[a][0])switch(i=n(t[a]),e[a][0]){case"M":t[a]=["M"].concat(i[0]);break;case"L":t[a]=["L"].concat(i[0]);break;case"A":t[a]=[].concat(e[a]),t[a][6]=i[0][0],t[a][7]=i[0][1];break;case"Q":if(i.length<2){if(!(a>0)){t[a]=e[a];break}i=r(i,t[a-1],1)}t[a]=["Q"].concat(i.reduce(function(t,e){return t.concat(e)},[]));break;case"T":t[a]=["T"].concat(i[0]);break;case"C":if(i.length<3){if(!(a>0)){t[a]=e[a];break}i=r(i,t[a-1],2)}t[a]=["C"].concat(i.reduce(function(t,e){return t.concat(e)},[]));break;case"S":if(i.length<2){if(!(a>0)){t[a]=e[a];break}i=r(i,t[a-1],1)}t[a]=["S"].concat(i.reduce(function(t,e){return t.concat(e)},[]));break;default:t[a]=e[a]}return t}},function(t,e,n){var r=n(46);t.exports=function(t,e){if(t.length!==e.length)return!1;var n=!0;return r(t,function(t,r){if(t!==e[r])return n=!1,!1}),n}},function(t,e,n){var r=n(770);function i(t,e,n){var r=null,i=n;return e<i&&(i=e,r="add"),t<i&&(i=t,r="del"),{type:r,min:i}}t.exports=function(t,e){var n=function(t,e){var n=t.length,a=e.length,o=void 0,s=void 0,u=0;if(0===n||0===a)return null;for(var c=[],h=0;h<=n;h++)c[h]=[],c[h][0]={min:h};for(var f=0;f<=a;f++)c[0][f]={min:f};for(var l=1;l<=n;l++){o=t[l-1];for(var p=1;p<=a;p++){s=e[p-1],u=r(o,s)?0:1;var d=c[l-1][p].min+1,g=c[l][p-1].min+1,v=c[l-1][p-1].min+u;c[l][p]=i(d,g,v)}}return c}(t,e),a=t.length,o=e.length,s=[],u=1,c=1;if(n[a][o]!==a){for(var h=1;h<=a;h++){var f=n[h][h].min;c=h;for(var l=u;l<=o;l++)n[h][l].min<f&&(f=n[h][l].min,c=l);u=c,n[h][u].type&&s.push({index:h-1,type:n[h][u].type})}for(var p=s.length-1;p>=0;p--)u=s[p].index,"add"===s[p].type?t.splice(u,0,[].concat(t[u])):t.splice(u,1)}if((a=t.length)<o)for(var d=0;d<o-a;d++)"z"===t[a-1][0]||"Z"===t[a-1][0]?t.splice(a-2,0,t[a-2]):t.push(t[a-1]);return t}},function(t,e){function n(t,e){var n=[],r=[];return t.length&&function t(e,i){if(1===e.length)n.push(e[0]),r.push(e[0]);else{for(var a=[],o=0;o<e.length-1;o++)0===o&&n.push(e[0]),o===e.length-2&&r.push(e[o+1]),a[o]=[(1-i)*e[o][0]+i*e[o+1][0],(1-i)*e[o][1]+i*e[o+1][1]];t(a,i)}}(t,e),{left:n,right:r.reverse()}}function r(t,e,r){if(1===r)return[[].concat(t)];var i=[];if("L"===e[0]||"C"===e[0]||"Q"===e[0])i=i.concat(function(t,e,r){var i=[[t[1],t[2]]];r=r||2;var a=[];"A"===e[0]?(i.push(e[6]),i.push(e[7])):"C"===e[0]?(i.push([e[1],e[2]]),i.push([e[3],e[4]]),i.push([e[5],e[6]])):"S"===e[0]||"Q"===e[0]?(i.push([e[1],e[2]]),i.push([e[3],e[4]])):i.push([e[1],e[2]]);for(var o=i,s=1/r,u=0;u<r-1;u++){var c=n(o,s/(1-s*u));a.push(c.left),o=c.right}return a.push(o),a.map(function(t){var e=[];return 4===t.length&&(e.push("C"),e=e.concat(t[2])),t.length>=3&&(3===t.length&&e.push("Q"),e=e.concat(t[1])),2===t.length&&e.push("L"),e=e.concat(t[t.length-1])})}(t,e,r));else{var a=[].concat(t);"M"===a[0]&&(a[0]="L");for(var o=0;o<=r-1;o++)i.push(a)}return i}t.exports=function(t,e){if(1===t.length)return t;var n=t.length-1,i=e.length-1,a=n/i,o=[];if(1===t.length&&"M"===t[0][0]){for(var s=0;s<i-n;s++)t.push(t[0]);return t}for(var u=0;u<i;u++){var c=Math.floor(a*u);o[c]=(o[c]||0)+1}var h=o.reduce(function(e,i,a){return a===n?e.concat(t[n]):e.concat(r(t[a],t[a+1],i))},[]);return h.unshift(t[0]),"Z"!==e[i]&&"z"!==e[i]||h.push("Z"),h}},function(t,e,n){var r=n(45),i=n(663),a=n(661),o=function(t,e,n,r,i){return t*(t*(-3*e+9*n-9*r+3*i)+6*e-12*n+6*r)-3*e+3*n},s=function(t,e,n,r,i,a,s,u,c){null===c&&(c=1);for(var h=(c=c>1?1:c<0?0:c)/2,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],l=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],p=0,d=0;d<12;d++){var g=h*f[d]+h,v=o(g,t,n,i,s),m=o(g,e,r,a,u),x=v*v+m*m;p+=l[d]*Math.sqrt(x)}return h*p},u=function(t,e,n,r,i,a,o,s){if(!(Math.max(t,n)<Math.min(i,o)||Math.min(t,n)>Math.max(i,o)||Math.max(e,r)<Math.min(a,s)||Math.min(e,r)>Math.max(a,s))){var u=(t-n)*(a-s)-(e-r)*(i-o);if(u){var c=((t*r-e*n)*(i-o)-(t-n)*(i*s-a*o))/u,h=((t*r-e*n)*(a-s)-(e-r)*(i*s-a*o))/u,f=+c.toFixed(2),l=+h.toFixed(2);if(!(f<+Math.min(t,n).toFixed(2)||f>+Math.max(t,n).toFixed(2)||f<+Math.min(i,o).toFixed(2)||f>+Math.max(i,o).toFixed(2)||l<+Math.min(e,r).toFixed(2)||l>+Math.max(e,r).toFixed(2)||l<+Math.min(a,s).toFixed(2)||l>+Math.max(a,s).toFixed(2)))return{x:c,y:h}}}},c=function(t,e,n){return e>=t.x&&e<=t.x+t.width&&n>=t.y&&n<=t.y+t.height},h=function(t,e,n,r){return null===t&&(t=e=n=r=0),null===e&&(e=t.y,n=t.width,r=t.height,t=t.x),{x:t,y:e,width:n,w:n,height:r,h:r,x2:t+n,y2:e+r,cx:t+n/2,cy:e+r/2,r1:Math.min(n,r)/2,r2:Math.max(n,r)/2,r0:Math.sqrt(n*n+r*r)/2,path:i(t,e,n,r),vb:[t,e,n,r].join(" ")}},f=function(t,e,n,i,a,o,s,u){r(t)||(t=[t,e,n,i,a,o,s,u]);var c=function(t,e,n,r,i,a,o,s){for(var u=[],c=[[],[]],h=void 0,f=void 0,l=void 0,p=void 0,d=0;d<2;++d)if(0===d?(f=6*t-12*n+6*i,h=-3*t+9*n-9*i+3*o,l=3*n-3*t):(f=6*e-12*r+6*a,h=-3*e+9*r-9*a+3*s,l=3*r-3*e),Math.abs(h)<1e-12){if(Math.abs(f)<1e-12)continue;(p=-l/f)>0&&p<1&&u.push(p)}else{var g=f*f-4*l*h,v=Math.sqrt(g);if(!(g<0)){var m=(-f+v)/(2*h);m>0&&m<1&&u.push(m);var x=(-f-v)/(2*h);x>0&&x<1&&u.push(x)}}for(var y=u.length,b=y,M=void 0;y--;)M=1-(p=u[y]),c[0][y]=M*M*M*t+3*M*M*p*n+3*M*p*p*i+p*p*p*o,c[1][y]=M*M*M*e+3*M*M*p*r+3*M*p*p*a+p*p*p*s;return c[0][b]=t,c[1][b]=e,c[0][b+1]=o,c[1][b+1]=s,c[0].length=c[1].length=b+2,{min:{x:Math.min.apply(0,c[0]),y:Math.min.apply(0,c[1])},max:{x:Math.max.apply(0,c[0]),y:Math.max.apply(0,c[1])}}}.apply(null,t);return h(c.min.x,c.min.y,c.max.x-c.min.x,c.max.y-c.min.y)},l=function(t,e,n,r,i,a,o,s,u){var c=1-u,h=Math.pow(c,3),f=Math.pow(c,2),l=u*u,p=l*u,d=t+2*u*(n-t)+l*(i-2*n+t),g=e+2*u*(r-e)+l*(a-2*r+e),v=n+2*u*(i-n)+l*(o-2*i+n),m=r+2*u*(a-r)+l*(s-2*a+r);return{x:h*t+3*f*u*n+3*c*u*u*i+p*o,y:h*e+3*f*u*r+3*c*u*u*a+p*s,m:{x:d,y:g},n:{x:v,y:m},start:{x:c*t+u*n,y:c*e+u*r},end:{x:c*i+u*o,y:c*a+u*s},alpha:90-180*Math.atan2(d-v,g-m)/Math.PI}},p=function(t,e,n){if(!function(t,e){return t=h(t),e=h(e),c(e,t.x,t.y)||c(e,t.x2,t.y)||c(e,t.x,t.y2)||c(e,t.x2,t.y2)||c(t,e.x,e.y)||c(t,e.x2,e.y)||c(t,e.x,e.y2)||c(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y)}(f(t),f(e)))return n?0:[];for(var r=~~(s.apply(0,t)/8),i=~~(s.apply(0,e)/8),a=[],o=[],p={},d=n?0:[],g=0;g<r+1;g++){var v=l.apply(0,t.concat(g/r));a.push({x:v.x,y:v.y,t:g/r})}for(var m=0;m<i+1;m++){var x=l.apply(0,e.concat(m/i));o.push({x:x.x,y:x.y,t:m/i})}for(var y=0;y<r;y++)for(var b=0;b<i;b++){var M=a[y],w=a[y+1],_=o[b],E=o[b+1],S=Math.abs(w.x-M.x)<.001?"y":"x",A=Math.abs(E.x-_.x)<.001?"y":"x",P=u(M.x,M.y,w.x,w.y,_.x,_.y,E.x,E.y);if(P){if(p[P.x.toFixed(4)]===P.y.toFixed(4))continue;p[P.x.toFixed(4)]=P.y.toFixed(4);var O=M.t+Math.abs((P[S]-M[S])/(w[S]-M[S]))*(w.t-M.t),C=_.t+Math.abs((P[A]-_[A])/(E[A]-_[A]))*(E.t-_.t);O>=0&&O<=1&&C>=0&&C<=1&&(n?d++:d.push({x:P.x,y:P.y,t1:O,t2:C}))}}return d};t.exports=function(t,e){return function(t,e,n){t=a(t),e=a(e);for(var r=void 0,i=void 0,o=void 0,s=void 0,u=void 0,c=void 0,h=void 0,f=void 0,l=void 0,d=void 0,g=n?0:[],v=0,m=t.length;v<m;v++){var x=t[v];if("M"===x[0])r=u=x[1],i=c=x[2];else{"C"===x[0]?(r=(l=[r,i].concat(x.slice(1)))[6],i=l[7]):(l=[r,i,r,i,u,c,u,c],r=u,i=c);for(var y=0,b=e.length;y<b;y++){var M=e[y];if("M"===M[0])o=h=M[1],s=f=M[2];else{"C"===M[0]?(o=(d=[o,s].concat(M.slice(1)))[6],s=d[7]):(d=[o,s,o,s,h,f,h,f],o=h,s=f);var w=p(l,d,n);if(n)g+=w;else{for(var _=0,E=w.length;_<E;_++)w[_].segment1=v,w[_].segment2=y,w[_].bez1=l,w[_].bez2=d;g=g.concat(w)}}}}}return g}(t,e)}},function(t,e,n){var r=n(773),i=n(660),a=n(661),o=n(658);t.exports={catmullRom2Bezier:o,catmullRomToBezier:o,fillPath:n(772),fillPathByDiff:n(771),formatPath:n(769),intersection:r,pathIntersection:r,parsePathArray:n(662),parsePathString:n(659),pathToAbsolute:i,path2absolute:i,pathTocurve:a,path2curve:a,rectPath:n(663)}},function(t,e,n){var r=n(605),i=n(664);t.exports=function(t,e){return r(i(t),e)}},function(t,e,n){t.exports=n(665)},function(t,e,n){t.exports=n(46)},function(t,e,n){t.exports={forIn:n(777),has:n(665),hasKey:n(776),hasValue:n(775),keys:n(677),isMatch:n(678),values:n(664)}},function(t,e,n){t.exports={mat3:n(617),vec2:n(668),vec3:n(667),transform:n(666)}},function(t,e,n){var r=n(45),i=n(84),a=n(46);t.exports=function(t,e){if(r(t)){var n=t[0],o=void 0;o=i(e)?e(t[0]):t[0][e];var s=void 0;return a(t,function(t){(s=i(e)?e(t):t[e])<o&&(n=t,o=s)}),n}}},function(t,e,n){var r=n(45),i=n(84),a=n(46);t.exports=function(t,e){if(r(t)){var n=t[0],o=void 0;o=i(e)?e(t[0]):t[0][e];var s=void 0;return a(t,function(t){(s=i(e)?e(t):t[e])>o&&(n=t,o=s)}),n}}},function(t,e,n){var r=n(236);t.exports=function(t){return r(t)&&t>0}},function(t,e,n){var r=n(236);t.exports=function(t){return r(t)&&t%2!=0}},function(t,e,n){var r=n(236);t.exports=function(t){return r(t)&&t<0}},function(t,e,n){var r=n(236),i=Number.isInteger?Number.isInteger:function(t){return r(t)&&t%1==0};t.exports=i},function(t,e,n){var r=n(236);t.exports=function(t){return r(t)&&t%2==0}},function(t,e,n){var r=n(236);t.exports=function(t){return r(t)&&t%1!=0}},function(t,e){t.exports=function(t,e){var n=e.toString(),r=n.indexOf(".");if(-1===r)return Math.round(t);var i=n.substr(r+1).length;return i>20&&(i=20),parseFloat(t.toFixed(i))}},function(t,e,n){var r=n(673);t.exports={clamp:n(618),fixedBase:n(788),isDecimal:n(787),isEven:n(786),isInteger:n(785),isNegative:n(784),isNumberEqual:r,isOdd:n(783),isPositive:n(782),maxBy:n(781),minBy:n(780),mod:n(672),snapEqual:r,toDegree:n(671),toInt:n(670),toInteger:n(670),toRadian:n(669)}},function(t,e,n){var r=n(45);t.exports=function(t){var e=0,n=0,i=0,a=0;return r(t)?1===t.length?e=n=i=a=t[0]:2===t.length?(e=i=t[0],n=a=t[1]):3===t.length?(e=t[0],n=a=t[1],i=t[2]):(e=t[0],n=t[1],i=t[2],a=t[3]):e=n=i=a=t,{r1:e,r2:n,r3:i,r4:a}}},function(t,e,n){var r=n(45),i=n(595),a=n(46),o=/[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,s=/[^\s\,]+/gi;t.exports=function(t){return r(t=t||[])?t:i(t)?(t=t.match(o),a(t,function(e,n){if((e=e.match(s))[0].length>1){var r=e[0].charAt(0);e.splice(1,0,e[0].substr(1)),e[0]=r}a(e,function(t,n){isNaN(t)||(e[n]=+t)}),t[n]=e}),t):void 0}},function(t,e){var n={};t.exports=function(t){var e=n[t];if(!e){for(var r=t.toString(16),i=r.length;i<6;i++)r="0"+r;e="#"+r,n[t]=e}return e}},function(t,e,n){var r=n(792);t.exports={number2color:r,numberToColor:r,parsePath:n(791),parseRadius:n(790)}},function(t,e){t.exports=function(t,e){if(t["_wrap_"+e])return t["_wrap_"+e];var n=function(n){t[e](n)};return t["_wrap_"+e]=n,n}},function(t,e){t.exports=function(t,e){return t["_wrap_"+e]}},function(t,e,n){t.exports={getWrapBehavior:n(795),wrapBehavior:n(794)}},function(t,e,n){var r=n(237),i=n(45),a=n(46);t.exports=function(t,e){for(var n=[],o={},s=0;s<t.length;s++){var u=t[s][e];r(u)||(i(u)||(u=[u]),a(u,function(t){o[t]||(n.push(t),o[t]=!0)}))}return n}},function(t,e,n){var r=n(46),i=n(604),a=n(674);t.exports=function(){var t=[],e=i(arguments);return r(e,function(e){t=t.concat(e)}),a(t)}},function(t,e,n){var r=n(595),i=n(84),a=n(45);t.exports=function(t,e){var n=void 0;if(i(e))n=function(t,n){return e(t)-e(n)};else{var o=[];r(e)?o.push(e):a(e)&&(o=e),n=function(t,e){for(var n=0;n<o.length;n+=1){var r=o[n];if(t[r]>e[r])return 1;if(t[r]<e[r])return-1}return 0}}return t.sort(n),t}},function(t,e,n){var r=n(118),i=n(675);t.exports=function(t,e){var n=[];if(!r(t))return n;for(var a=-1,o=[],s=t.length;++a<s;){var u=t[a];e(u,a,t)&&(n.push(u),o.push(a))}return i(t,o),n}},function(t,e,n){var r=n(45),i=n(596),a=n(46);t.exports=function(t,e,n){if(!r(t)&&!i(t))return t;var o=n;return a(t,function(t,n){o=e(o,t,n)}),o}},function(t,e){t.exports=function(t){for(var e=[],n=0;n<t.length;n++)e=e.concat(t[n]);return e}},function(t,e,n){var r=n(620),i=n(45);t.exports=function(t){if(!(t=r(t,function(t){return!isNaN(t)})).length)return{min:0,max:0};if(i(t[0])){for(var e=[],n=0;n<t.length;n++)e=e.concat(t[n]);t=e}var a=Math.max.apply(null,t);return{min:Math.min.apply(null,t),max:a}}},function(t,e,n){var r=n(45);t.exports=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(r(e))for(var i=0;i<e.length;i+=1)t(e[i],n);else n.push(e);return n}},function(t,e,n){var r=n(45),i=n(46);t.exports=function(t){if(!r(t))return t;var e=[];return i(t,function(t){r(t)?i(t,function(t){e.push(t)}):e.push(t)}),e}},function(t,e,n){var r=n(237),i=n(45);t.exports=function(t,e){for(var n=null,a=0;a<t.length;a++){var o=t[a][e];if(!r(o)){n=i(o)?o[0]:o;break}}return n}},function(t,e,n){var r=n(84),i=n(596),a=n(678);t.exports=function(t,e){var n=void 0;if(r(e)&&(n=e),i(e)&&(n=function(t){return a(t,e)}),n)for(var o=0;o<t.length;o+=1)if(n(t[o]))return t[o];return null}},function(t,e,n){var r=n(620),i=n(605);t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return r(t,function(t){return!i(e,t)})}},function(t,e,n){t.exports={contains:n(605),difference:n(808),find:n(807),firstValue:n(806),flatten:n(805),flattenDeep:n(804),getRange:n(803),merge:n(802),pull:n(676),pullAt:n(675),reduce:n(801),remove:n(800),sortBy:n(799),union:n(798),uniq:n(674),valuesOfKey:n(797)}},function(t,e){t.exports=function(t,e){var n=this.getStyle(t,"width",e);return"auto"===n&&(n=t.offsetWidth),parseFloat(n)}},function(t,e,n){var r=n(237);t.exports=function(t,e,n){try{return window.getComputedStyle?window.getComputedStyle(t,null)[e]:t.currentStyle[e]}catch(t){return r(n)?null:n}}},function(t,e){t.exports=function(){return window.devicePixelRatio?window.devicePixelRatio:2}},function(t,e){t.exports=function(t,e){var n=this.getWidth(t,e),r=parseFloat(this.getStyle(t,"borderLeftWidth"))||0,i=parseFloat(this.getStyle(t,"paddingLeft"))||0,a=parseFloat(this.getStyle(t,"paddingRight"))||0;return n+r+(parseFloat(this.getStyle(t,"borderRightWidth"))||0)+i+a}},function(t,e){t.exports=function(t,e){var n=this.getHeight(t,e),r=parseFloat(this.getStyle(t,"borderTopWidth"))||0,i=parseFloat(this.getStyle(t,"paddingTop"))||0,a=parseFloat(this.getStyle(t,"paddingBottom"))||0;return n+r+(parseFloat(this.getStyle(t,"borderBottomWidth"))||0)+i+a}},function(t,e){t.exports=function(t,e){var n=this.getStyle(t,"height",e);return"auto"===n&&(n=t.offsetHeight),parseFloat(n)}},function(t,e){t.exports=function(t,e){if(t&&t.getBoundingClientRect){var n=t.getBoundingClientRect(),r=document.documentElement.clientTop,i=document.documentElement.clientLeft;return{top:n.top-r,bottom:n.bottom-r,left:n.left-i,right:n.right-i}}return e||null}},function(t,e){t.exports=function(t,e,n){if(t){if(t.addEventListener)return t.addEventListener(e,n,!1),{remove:function(){t.removeEventListener(e,n,!1)}};if(t.attachEvent)return t.attachEvent("on"+e,n),{remove:function(){t.detachEvent("on"+e,n)}}}}},function(t,e,n){t.exports={addEventListener:n(817),createDom:n(681),getBoundingClientRect:n(816),getHeight:n(815),getOuterHeight:n(814),getOuterWidth:n(813),getRatio:n(812),getStyle:n(811),getWidth:n(810),modifyCSS:n(680),requestAnimationFrame:n(679)}},function(t,e,n){var r=n(46),i=n(606),a=n(818),o=n(809),s=n(796),u=n(793),c=n(789),h=n(779),f=n(778),l=n(774),p=n(768),d=n(763),g={DOMUtil:a,DomUtil:a,MatrixUtil:h,PathUtil:l,arrayUtil:o,domUtil:a,eventUtil:s,formatUtil:u,mathUtil:c,matrixUtil:h,objectUtil:f,stringUtil:p,pathUtil:l,typeUtil:d,augment:n(651),clone:n(616),debounce:n(756),deepMix:n(615),each:r,extend:n(650),filter:n(620),group:n(755),groupBy:n(648),groupToMap:n(649),indexOf:n(754),isEmpty:n(647),isEqual:n(614),isEqualWith:n(753),map:n(752),mix:i,pick:n(751),throttle:n(750),toArray:n(604),toString:n(594),uniqueId:n(646)};r([a,o,s,u,c,h,f,l,p,d],function(t){i(g,t)}),t.exports=g},function(t,e,n){var r=n(683),i=n(626),a=n(247),o=n(609),s=n(248),u={Graph:n(625),Tree:n(689),Util:n(26),Layouts:n(623),G:s,Plugins:{},Components:{},Global:a,Shape:r,registerNode:r.registerNode,registerEdge:r.registerEdge,registerGroup:r.registerGroup,registerGuide:r.registerGuide,registerBehaviour:i.registerBehaviour,version:o,track:function(t){a.track=t}};n(684),t.exports=u}])});
//# sourceMappingURL=g6.js.map

/***/ }),

/***/ "087d":
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "09e1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d339");

/***/ }),

/***/ "0b07":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("34ac"),
    getValue = __webpack_require__("3698");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "0b11":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2f74");

/***/ }),

/***/ "0b7b":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("8f95");
var Iterators = __webpack_require__("7463");
var wellKnownSymbol = __webpack_require__("0363");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "0c82":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('asyncDispose');


/***/ }),

/***/ "0cf0":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("b323");
var enumBugKeys = __webpack_require__("9e57");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d24":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("2b3e"),
    stubFalse = __webpack_require__("07c7");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "0e67":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "100e":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("cd9d"),
    overRest = __webpack_require__("2286"),
    setToString = __webpack_require__("c1c9");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "126d":
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__("6da8"),
    hasUnicode = __webpack_require__("aaec"),
    unicodeToArray = __webpack_require__("d094");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "1290":
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "1310":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "1316":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9cd3");

/***/ }),

/***/ "1368":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("da03");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "1561":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "159a":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("32b3"),
    castPath = __webpack_require__("e2e4"),
    isIndex = __webpack_require__("c098"),
    isObject = __webpack_require__("1a8c"),
    toKey = __webpack_require__("f4d6");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "15f3":
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__("89d9"),
    hasIn = __webpack_require__("8604");

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var sloppyArrayMethod = __webpack_require__("b301");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "1875":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "18d8":
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__("234d");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "194a":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("cc94");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1a8c":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("8f95");
var wellKnownSymbol = __webpack_require__("0363");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c29":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("fc93");
__webpack_require__("6f89");
__webpack_require__("8b7b");
__webpack_require__("e363");
__webpack_require__("64db");
__webpack_require__("22a9");
__webpack_require__("9080");
__webpack_require__("0e67");
__webpack_require__("e699");
__webpack_require__("e7cc");
__webpack_require__("2e85");
__webpack_require__("980e");
__webpack_require__("9ac4");
__webpack_require__("274e");
__webpack_require__("8d05");
__webpack_require__("ef09");
__webpack_require__("aa1b");
__webpack_require__("8176");
__webpack_require__("522d");
var path = __webpack_require__("764b");

module.exports = path.Symbol;


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("60ae");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1e63":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("06fa");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "1efc":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "1fc8":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("f8c2");
var getIteratorMethod = __webpack_require__("35a1");
var callWithSafeIterationClosing = __webpack_require__("9bdd");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "2286":
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__("85e3");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "22a9":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.hasInstance` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');


/***/ }),

/***/ "234d":
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__("e380");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "2364":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0e67");
__webpack_require__("3e47");
__webpack_require__("5145");
var WrappedWellKnownSymbolModule = __webpack_require__("fbcc");

module.exports = WrappedWellKnownSymbolModule.f('iterator');


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2474":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "2478":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "2524":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "253c":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "2593":
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__("15f3"),
    flatRest = __webpack_require__("c6cf");

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ "2616":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("0363");
var Iterators = __webpack_require__("7463");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "266f":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');


/***/ }),

/***/ "26e8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "274e":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.split` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');


/***/ }),

/***/ "2874":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("4180").f;
var createNonEnumerableProperty = __webpack_require__("0273");
var has = __webpack_require__("78e7");
var toString = __webpack_require__("1c0a");
var wellKnownSymbol = __webpack_require__("0363");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var METHOD_REQUIRED = toString !== ({}).toString;

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && METHOD_REQUIRED) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),

/***/ "28c9":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "29f3":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "2b10":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "2b3e":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("585a");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "2c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");
var bind = __webpack_require__("f8c2");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("b629");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2dc0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("588c");

/***/ }),

/***/ "2dcb":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("91e9");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "2e85":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.replace` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');


/***/ }),

/***/ "2ec1":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("100e"),
    isIterateeCall = __webpack_require__("9aff");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "2f5a":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("96e9");
var global = __webpack_require__("3ac6");
var isObject = __webpack_require__("dfdb");
var createNonEnumerableProperty = __webpack_require__("0273");
var objectHas = __webpack_require__("78e7");
var sharedKey = __webpack_require__("b2ed");
var hiddenKeys = __webpack_require__("6e9a");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "2f74":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("68ec");


/***/ }),

/***/ "2f97":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("dfdb");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "2fcc":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "30c9":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("9520"),
    isLength = __webpack_require__("b218");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "32b3":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("872a"),
    eq = __webpack_require__("9638");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "34ac":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("9520"),
    isMasked = __webpack_require__("1368"),
    isObject = __webpack_require__("1a8c"),
    toSource = __webpack_require__("dc57");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "3698":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "3729":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    getRawTag = __webpack_require__("00fd"),
    objectToString = __webpack_require__("29f3");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "373a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2364");


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3ac6":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "3b4a":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3e47":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("cbd0").charAt;
var InternalStateModule = __webpack_require__("2f5a");
var defineIterator = __webpack_require__("4056");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3e476":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("a5eb");
var DESCRIPTORS = __webpack_require__("c1b2");
var objectDefinePropertyModile = __webpack_require__("4180");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "3e80":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4056":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a5eb");
var createIteratorConstructor = __webpack_require__("f575");
var getPrototypeOf = __webpack_require__("5779");
var setPrototypeOf = __webpack_require__("ec62");
var setToStringTag = __webpack_require__("2874");
var createNonEnumerableProperty = __webpack_require__("0273");
var redefine = __webpack_require__("d666");
var wellKnownSymbol = __webpack_require__("0363");
var IS_PURE = __webpack_require__("7042");
var Iterators = __webpack_require__("7463");
var IteratorsCore = __webpack_require__("bb83");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "4069":
/***/ (function(module, exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__("44d2");

addToUnscopables('flat');


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "4180":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("c1b2");
var IE8_DOM_DEFINE = __webpack_require__("77b2");
var anObject = __webpack_require__("6f8d");
var toPrimitive = __webpack_require__("7168");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "41c3":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c"),
    isPrototype = __webpack_require__("eac5"),
    nativeKeysIn = __webpack_require__("ec8c");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "4245":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("1290");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "42454":
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__("f909"),
    createAssigner = __webpack_require__("2ec1");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("da84");


/***/ }),

/***/ "4344":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("dfdb");
var isArray = __webpack_require__("6220");
var wellKnownSymbol = __webpack_require__("0363");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "4359":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44ba":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("c1b2");
var propertyIsEnumerableModule = __webpack_require__("7043");
var createPropertyDescriptor = __webpack_require__("2c6c");
var toIndexedObject = __webpack_require__("a421");
var toPrimitive = __webpack_require__("7168");
var has = __webpack_require__("78e7");
var IE8_DOM_DEFINE = __webpack_require__("77b2");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var createNonEnumerableProperty = __webpack_require__("9112");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "4508":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("1561");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "471b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("194a");
var toObject = __webpack_require__("4fff");
var callWithSafeIterationClosing = __webpack_require__("faaa");
var isArrayIteratorMethod = __webpack_require__("2616");
var toLength = __webpack_require__("6725");
var createProperty = __webpack_require__("6c15");
var getIteratorMethod = __webpack_require__("0b7b");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator, next;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "484e":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("a5eb");
var from = __webpack_require__("471b");
var checkCorrectnessOfIteration = __webpack_require__("7de7");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "4896":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("6f8d");
var defineProperties = __webpack_require__("c230");
var enumBugKeys = __webpack_require__("9e57");
var hiddenKeys = __webpack_require__("6e9a");
var html = __webpack_require__("edbd");
var documentCreateElement = __webpack_require__("7a37");
var sharedKey = __webpack_require__("b2ed");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "4963":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3ac6");
var userAgent = __webpack_require__("c4b8");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "49f4":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4d8c":
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__("5c69");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4f50":
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__("b760"),
    cloneBuffer = __webpack_require__("e538"),
    cloneTypedArray = __webpack_require__("c8fe"),
    copyArray = __webpack_require__("4359"),
    initCloneObject = __webpack_require__("fa21"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747"),
    isArrayLikeObject = __webpack_require__("dcbe"),
    isBuffer = __webpack_require__("0d24"),
    isFunction = __webpack_require__("9520"),
    isObject = __webpack_require__("1a8c"),
    isPlainObject = __webpack_require__("60ed"),
    isTypedArray = __webpack_require__("73ac"),
    safeGet = __webpack_require__("8adb"),
    toPlainObject = __webpack_require__("8de2");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "4fff":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1875");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "50d8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5145":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("9103");
var DOMIterables = __webpack_require__("78a2");
var global = __webpack_require__("3ac6");
var createNonEnumerableProperty = __webpack_require__("0273");
var Iterators = __webpack_require__("7463");
var wellKnownSymbol = __webpack_require__("0363");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && !CollectionPrototype[TO_STRING_TAG]) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),

/***/ "522d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3ac6");
var setToStringTag = __webpack_require__("2874");

// JSON[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "55a3":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.4.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56c5":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("a5eb");
var setPrototypeOf = __webpack_require__("ec62");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5779":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("78e7");
var toObject = __webpack_require__("4fff");
var sharedKey = __webpack_require__("b2ed");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("f5fb");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "585a":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "588c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("5145");
__webpack_require__("3e47");

module.exports = __webpack_require__("59d7");


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "59d7":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("8f95");
var wellKnownSymbol = __webpack_require__("0363");
var Iterators = __webpack_require__("7463");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "5ab9":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("e519");
var path = __webpack_require__("764b");

module.exports = path.Array.isArray;


/***/ }),

/***/ "5c69":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("087d"),
    isFlattenable = __webpack_require__("0621");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5d24":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6426");

/***/ }),

/***/ "5e2e":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("28c9"),
    listCacheDelete = __webpack_require__("69d5"),
    listCacheGet = __webpack_require__("b4c0"),
    listCacheHas = __webpack_require__("fba5"),
    listCacheSet = __webpack_require__("67ca");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "6044":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "60ae":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("b39a");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "60ed":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    getPrototype = __webpack_require__("2dcb"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "6220":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("fc48");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "6271":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("373a");

/***/ }),

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "6386":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("a421");
var toLength = __webpack_require__("6725");
var toAbsoluteIndex = __webpack_require__("4508");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "638c":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("06fa");
var classof = __webpack_require__("fc48");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "6426":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ac0c");


/***/ }),

/***/ "64db":
/***/ (function(module, exports) {

// empty


/***/ }),

/***/ "656b":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("e2e4"),
    toKey = __webpack_require__("f4d6");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "6725":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("1561");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "6747":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "67ca":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "68ec":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("56c5");
var path = __webpack_require__("764b");

module.exports = path.Object.setPrototypeOf;


/***/ }),

/***/ "69d5":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6c15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("7168");
var definePropertyModule = __webpack_require__("4180");
var createPropertyDescriptor = __webpack_require__("2c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "6da8":
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "6e9a":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var nativeFunctionToString = __webpack_require__("9e81");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "6f89":
/***/ (function(module, exports) {

// empty


/***/ }),

/***/ "6f8d":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("dfdb");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "6fcd":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("50d8"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747"),
    isBuffer = __webpack_require__("0d24"),
    isIndex = __webpack_require__("c098"),
    isTypedArray = __webpack_require__("73ac");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "7042":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "7043":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "70a1":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__("07cd")):undefined}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=25)}([function(e,t,n){"use strict";function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n){return e.addShape("path",{attrs:r({},n,{path:t})})}function a(e){return[{x:e.centerX,y:e.minY},{x:e.maxX,y:e.centerY},{x:e.centerX,y:e.maxY},{x:e.minX,y:e.centerY}]}function c(e,t){var n,r,o=a(t),i=1/0;return o.forEach(function(t,o){var a,c,u=(a=e,c=t,Math.sqrt(Math.pow(a.x-c.x,2)+Math.pow(a.y-c.y,2)));u<i&&(n=t,i=u,r=o)}),{point:n,index:r}}function u(e,t){return{x:(e[t].x+e[t+1].x)/2,y:(e[t].y+e[t+1].y)/2}}function s(e,t){var n=e.point,r=e.index,o=t.point,i=t.index;return n.x===o.x||n.y===o.y?[n,o]:2===r&&0===i||0===r&&2===i?[n,{x:n.x,y:(n.y+o.y)/2},{x:o.x,y:(n.y+o.y)/2},o]:2!==r&&0!==r||3!==i&&1!==i?1!==r&&3!==r||2!==i&&0!==i?[n,{x:(n.x+o.x)/2,y:n.y},{x:(n.x+o.x)/2,y:o.y},o]:[n,{x:o.x,y:n.y},o]:[n,{x:n.x,y:o.y},o]}function l(e,t){return e[t].x===e[t+1].x}function d(e,t,n){return l(t,n)?e.x===t[n].x&&(e.y-t[n].y)*(e.y-t[n+1].y)<=0:e.y===t[n].y&&(e.x-t[n].x)*(e.x-t[n+1].x)<=0}function f(e,t){for(var n,r,o,i,a,c=1/0,u=0;u<t.length-1;u++){var s=l(t,u),f=void 0;if(d(f=s?{x:t[u].x,y:e.y}:{x:e.x,y:t[u].y},t,u)){var h=(i=e,a=f,Math.pow(i.x-a.x,2)+Math.pow(i.y-a.y,2));c>h&&(c=h,n=u,r=f,o=s)}}return{verticalPoint:r,index:n,vertical:o}}function h(e,t,n){var r,o,i,u=function(e){if(!e)return{x:void 0,y:void 0};var t=e.getBBox();return{x:t.centerX,y:t.centerY}}(t),s=e.getLinkPoints(u)[0];if(n){var l=a(e.getBBox())[n];r=e.getBBox(),o=l,i={x:t.getBBox().centerX,y:t.getBBox().centerY},((r.centerX-o.x)*(r.centerX-i.x)>0||(r.centerY-o.y)*(r.centerY-i.y)>0)&&(s=l)}s=c(s,e.getBBox());var d=t.getLinkPoints(s.point)[0];return{sourcePoint:s,targetPoint:d=c(d,t.getBBox())}}function g(e,t,n){return l(t,n)?e.minX>t[n].x?1:e.maxX<t[n].x?-1:0:e.minY>t[n].y?1:e.maxY<t.y?-1:0}function p(e,t,n){return l(t,n)?{x:t[n].x,y:e.y}:{x:e.x,y:t[n].y}}function m(e){var t;switch(e){case 0:t=2;break;case 1:t=3;break;case 3:t=1;break;default:t=0}return t}n.d(t,"b",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"f",function(){return c}),n.d(t,"j",function(){return u}),n.d(t,"h",function(){return s}),n.d(t,"i",function(){return l}),n.d(t,"l",function(){return d}),n.d(t,"e",function(){return f}),n.d(t,"d",function(){return h}),n.d(t,"a",function(){return g}),n.d(t,"g",function(){return p}),n.d(t,"k",function(){return m})},function(e,t,n){function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(7),a=n(3),c=n(4),u={getActivedStyle:function(){},getSelectedStyle:function(){},getStyle:function(){},getPath:function(){}};function s(e,t,n){var r=[];return c.isString(e)?r=[t,e]:c.isArray(e)?(e.unshift(t),r=e):r=[t],n&&r.unshift(n+"-base"),r}i.registerNode("page-base",r({},u)),i.registerEdge("page-base",r({},u)),i.registerGroup("page-base",r({},u)),i.registerGuide("page-base",r({},u)),a.setRegister=function(e,t,n){e.registerNode=function(e,r,o){i.registerNode(e,r,s(o,t+"-base",n))},e.registerEdge=function(e,r,o){i.registerEdge(e,r,s(o,t+"-base",n))},e.registerGroup=function(e,r,o){i.registerGroup(e,r,s(o,t+"-base",n))},e.registerGuide=function(e,r,o){i.registerGuide(e,r,s(o,t+"-base",n))},e.registerBehaviour=function(e,t,n){i.registerBehaviour(e,function(e){var n=e.get("page");n.set("_graph",e),t(n)},n)}},a.setRegister(a,"page"),n(44),e.exports=a},function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(7),i=n(22),a=n(63),c=n(64),u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({},o.Util,i,a,c);e.exports=u},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=n(21),d=n(4),f=n(14),h=n(34),g=n(35),p=n(37),m=[h,n(38),n(39),g,p,n(40),n(42),n(43)],y=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r={defaultData:null,shortcut:{redo:!0,undo:!0,delete:!0,resetZoom:!0,autoZoom:!0,zoomIn:!0,zoomOut:!0},_controllers:{},_signals:{}};return d.each(m,function(e){d.mix(r,e.CFG)}),d.mix(!0,r,e),(n=c(this,u(t).call(this,r))).isPage=!0,n.type="page",n._init(),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,l),n=t,(r=[{key:"getDelegation",value:function(e,t){var n;t||(t=this.getGraph().getRootGroup());if(1!==e.length||e[0].isNode||e[0].isGroup){var r=d.getTotalBBox(e.map(function(e){return e.getBBox()}));(n=d.getRectByBox(r,t,f.nodeDelegationStyle)).set("capture",!1)}else e[0].isEdge?n=t.addShape("path",{attrs:o({path:"M0 0L 1 1"},f.edgeDelegationStyle),capture:!1}):(n=d.getRectByBox(e[0],t,f.nodeDelegationStyle)).set("capture",!1);return n}},{key:"focusGraphWrapper",value:function(){this.getGraph().getKeyboardEventWrapper().focus()}},{key:"saveImage",value:function(e){var t,n,r=this,i=this.getGraph(),a=i.getBBox(),c=i.getFitViewPadding();return i.saveImage(o({width:a.width+c[1]+c[3],height:a.height+c[0]+c[2],beforeTransform:function(){t=r.getSelected().map(function(e){return e.id}),n=r.getSelected().map(function(e){return e.id}),r.clearSelected(),r.clearActived()},afterTransform:function(){r.setSelected(t,!0),r.setActived(n,!0)}},e))}},{key:"_init",value:function(){var e=this;d.each(m,function(t){t.INIT&&e[t.INIT]()}),this.bindEvent(),this._cacheBBox()}},{key:"executeCommand",value:function(e,t){var n=this.editor;n?n.executeCommand(e,t):e()}},{key:"_cacheBBox",value:function(){var e=this.getGraph();this.set("bboxCache",e.getBBox())}},{key:"bindEvent",value:function(){var e=this;this.getGraph().on("afterchange",function(){e._cacheBBox()})}},{key:"translateLimt",value:function(e){var t=this.getGraph(),n=this.get("bboxCache"),r=t.getWidth(),o=t.getHeight(),i=[n.minX,n.minY,1],a=[n.maxX,n.maxY,1];return d.vec3.transformMat3(i,i,e),d.vec3.transformMat3(a,a,e),a[0]<100&&d.mat3.translate(e,e,[100-a[0],0]),a[1]<100&&d.mat3.translate(e,e,[0,100-a[1]]),i[1]>o-100&&d.mat3.translate(e,e,[0,o-100-i[1]]),i[0]>r-100&&d.mat3.translate(e,e,[r-100-i[0],0]),!0}},{key:"setSignal",value:function(e,t){this.get("_signals")[e]=t}},{key:"getSignal",value:function(e){return this.get("_signals")[e]}},{key:"setController",value:function(e,t){this.get("_controllers")[e]=t}},{key:"getController",value:function(e){return this.get("_controllers")[e]}},{key:"destroy",value:function(){var e=this.get("_graph"),t=this.get("_controllers");d.each(t,function(e){e.destroy()}),e.destroy()}}])&&a(n.prototype,r),i&&a(n,i),t}();d.each(m,function(e){d.mix(y.prototype,e.AUGMENT)}),e.exports=y},function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(6),i=n(14),a=o.createDOM("<canvas>").getContext("2d");e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({},o,{getPanCanvasBehaviour:function(e){return function(t){var n,r,a=t.getGraph();a.behaviourOn("canvas:mouseenter",function(){t.css({cursor:i.cursor.beforePanCanvas})}),a.behaviourOn("mouseleave",function(e){e.toShape||t.css({cursor:i.cursor.beforePanCanvas})}),a.behaviourOn("mousedown",function(o){(2!==o.button&&!e||!o.shape||o.item&&!1===o.item.dragable&&"mind-root"!==o.item.shapeObj.type&&!t.getSignal("dragEdge"))&&(n={x:o.domX,y:o.domY},t.css({cursor:i.cursor.panningCanvas}),r=a.getMatrix(),t.setCapture(!1))}),a.behaviourOn("drag",function(e){if(n){var i=e.domX-n.x,c=e.domY-n.y,u=[];o.mat3.translate(u,r,[i,c]),t.translateLimt(u)&&(a.updateMatrix(u),a.draw())}}),a.behaviourOn("mouseup",function(){n&&(n=void 0,r=void 0,t.setCapture(!0),t.css({cursor:i.cursor.beforePanCanvas}))})}},getLabelTextByTextLineWidth:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:320;a.font=t;var r=a.measureText(e).width;if(r>n){r=0;for(var o=1;o<e.length;o++)(r+=a.measureText(e[o]).width)>=n&&(e=e.substring(0,o)+"\n"+e.substring(o,e.length),o+=1,r=0)}return e}})},function(e,t){e.exports={orbitGap:10,nodeDefaultShape:"flow-node",edgeDefaultShape:"flow-smooth",groupDefaultShape:"flow-group",nodeActivedOutterStyle:{lineWidth:0},groupSelectedOutterStyle:{stroke:"#E0F0FF",lineWidth:2},nodeSelectedOutterStyle:{stroke:"#E0F0FF",lineWidth:2},edgeActivedStyle:{stroke:"#1890FF",strokeOpacity:.92},nodeActivedStyle:{fill:"#F3F9FF",stroke:"#1890FF"},groupActivedStyle:{stroke:"#1890FF"},edgeSelectedStyle:{lineWidth:2,strokeOpacity:.92,stroke:"#A3B1BF"},nodeSelectedStyle:{fill:"#F3F9FF",stroke:"#1890FF"},groupSelectedStyle:{stroke:"#1890FF",fillOpacity:.92},nodeStyle:{stroke:"#CED4D9",fill:"#FFFFFF",shadowOffsetX:0,shadowOffsetY:4,shadowBlur:10,shadowColor:"rgba(13, 26, 38, 0.08)",lineWidth:1,radius:4,fillOpacity:.92},edgeStyle:{stroke:"#A3B1BF",strokeOpacity:.92,lineWidth:1,lineAppendWidth:8,endArrow:!0},groupBackgroundPadding:[40,10,10,10],groupLabelOffsetX:10,groupLabelOffsetY:10,edgeLabelStyle:{fill:"#666",textAlign:"center",textBaseline:"middle"},edgeLabelRectPadding:4,edgeLabelRectStyle:{fill:"white"},nodeLabelStyle:{fill:"#666",textAlign:"center",textBaseline:"middle"},groupStyle:{stroke:"#CED4D9",radius:4},groupLabelStyle:{fill:"#666",textAlign:"left",textBaseline:"top"},multiSelectRectStyle:{fill:"#1890FF",fillOpacity:.08,stroke:"#1890FF",opacity:.1},dragNodeHoverToGroupStyle:{stroke:"#1890FF",lineWidth:2},dragNodeLeaveFromGroupStyle:{stroke:"#BAE7FF",lineWidth:2},anchorPointStyle:{radius:3.5,fill:"#fff",stroke:"#1890FF",lineAppendWidth:12},anchorHotsoptStyle:{radius:12,fill:"#1890FF",fillOpacity:.25},anchorHotsoptActivedStyle:{radius:14},anchorPointHoverStyle:{radius:4,fill:"#1890FF",fillOpacity:1,stroke:"#1890FF"},nodeControlPointStyle:{radius:4,fill:"#fff",shadowBlur:4,shadowColor:"#666"},edgeControlPointStyle:{radius:6,symbol:"square",lineAppendWidth:6,fillOpacity:0,strokeOpacity:0},nodeSelectedBoxStyle:{stroke:"#C2C2C2"},cursor:{panningCanvas:"-webkit-grabbing",beforePanCanvas:"-webkit-grab",hoverNode:"move",hoverEffectiveAnchor:"crosshair",hoverEdge:"default",hoverGroup:"move",hoverUnEffectiveAnchor:"default",hoverEdgeControllPoint:"crosshair",multiSelect:"crosshair"},zIndex:{anchorPoint:3,anchorHotsopt:2,selectedBox:1,controlPoint:4},polylineEdgeStyle:{offset:10,borderRadius:5},addToGroupDelayTime:400,outFromGroupDelayTime:400}},function(e,t,n){function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(7),a=n(28),c=n(29),u={whitespace:{9:"Tab",13:"Enter",32:"Space"},fn:{112:"f1 ",113:"f2 ",114:"f3 ",115:"f4 ",116:"f5 ",117:"f6 ",118:"f7 ",119:"f8 ",120:"f9 ",121:"f10",122:"f11",123:"f12"},letter:{65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z"},number:{48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9"},navigation:{37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown"},symbol:{110:"decimal point",186:"semi-colon",187:"=",188:"comma",189:"-",190:"period ",191:"/",192:"grave accent",219:"open bracket ",220:"back slash ",221:"close bracket ",222:"single quote "},smallNumberKey:{96:"numpad 0 ",97:"numpad 1 ",98:"numpad 2 ",99:"numpad 3 ",100:"numpad 4 ",101:"numpad 5 ",102:"numpad 6 ",103:"numpad 7 ",104:"numpad 8 ",105:"numpad 9 "},modifierKey:{16:"Shift",17:"Ctrl ",18:"Alt",20:"caps lock"},escKey:{8:"Backspace",46:"Delete",27:"Escape"},homeKey:{91:"Windows Key / Left command",92:"right window key ",93:"Windows Menu"},computeKey:{106:"multiply ",107:"add",109:"subtract ",111:"divide "}},s=r({},i.Util,a,{getNodeSize:function(e){if(e){if(i.Util.isNumber(e))return[e,e];if(i.Util.isString(e)){if(-1===e.indexOf("*")){var t=Number(e);return[t,t]}return e.split("*")}return e}return[96,48]},getTypeAndChar:function(e){var t;for(var n in e=""+e,u)for(var r in t=n,u[n])if(r===e)return{type:t,character:u[n][r]};return{}},getKeyboradKey:function(e){return e.key||s.getTypeAndChar(e.keyCode).character},getIndex:function(e){return e.getParent().get("children").indexOf(e)},setId:function(e){e.id||(e.id=i.Util.guid())},pointLineDistance:function(e,t,n,r,o,a){var c=[n-e,r-t];if(i.Util.vec2.exactEquals(c,[0,0]))return NaN;var u=[-c[1],c[0]];i.Util.vec2.normalize(u,u);var s=[o-e,a-t];return Math.abs(i.Util.vec2.dot(s,u))},getRectByBox:function(e,t,n){return t.addShape("rect",{attrs:r({},n,{x:e.minX,y:e.minY,width:e.maxX-e.minX,height:e.maxY-e.minY})})},objectToValues:function(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(e[t]);return n},getValue:function(e){return i.Util.isFunction(e)?e():e},getContrast:function(e,t){var n={};return i.Util.each(t,function(t,r){n[r]=e[r]}),n},arrowTo:function(e,t,n,r,o,a,c){var u=[a-r,c-o],s=i.Util.vec2.angleTo(u,[1,0],!0);return e.transform([["r",s],["t",t,n]]),e},setEndOfContenteditable:function(e){var t,n;document.createRange?((t=document.createRange()).selectNodeContents(e),t.collapse(!1),(n=window.getSelection()).removeAllRanges(),n.addRange(t)):document.selection&&((t=document.body.createTextRange()).moveToElementText(e),t.collapse(!1),t.select())},matches:function(e,t){return(Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1}).call(e,t)},delegateEvent:function(e,t,n,r){return s.addEventListener(e,t,function(t){for(var o=t.target||t.srcElement;o!==e;)s.matches(o,n)&&r.call(o,Array.prototype.slice.call(arguments)),o=o.parentNode})},Palettes:c});e.exports=s},function(t,n){t.exports=e},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=n(7),f=n(1),h=n(10),g=[],p=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r={showHotArea:!1,defaultData:{roots:[{label:"思维导图",children:[{label:"新建节点"},{label:"新建节点"},{label:"新建节点"}]}]},shortcut:{append:!0,appendChild:!0,collapseExpand:!0,selectAll:!0},labelEditable:!0,graph:{modes:{default:["clickNodeSelected","keydownMoveSelection","clickCanvasSelected","keydownEditLabel","panBlank","wheelChangeViewport","panMindNode","clickCollapsedButton","clickExpandedButton","hoverButton","hoverNodeActived","dblclickItemEditLabel"],readOnly:["clickNodeSelected","wheelChangeViewport","keydownMoveSelection","hoverNodeActived","panCanvas","clickExpandedButton","hoverButton","clickCanvasSelected"]},layout:new d.Layouts.Mindmap({direction:"H",getSubTreeSep:function(e){return e.children&&e.children.length>0?e.hierarchy<=2?8:2:0},getHGap:function(e){return 1===e.hierarchy?8:2===e.hierarchy?24:18},getVGap:function(e){return 1===e.hierarchy?24:2===e.hierarchy?24:2},getSide:function(e){return e.data.side?e.data.side:"right"}}),mode:"default",defaultIntersectBox:"rect",nodeDefaultShape:"mind-base",edgeDefaultShape:"mind-edge",minZoom:.2,maxZoom:2},align:{item:!1},rootShape:"mind-root",firstSubShape:"mind-first-sub",secondSubShape:"mind-second-sub",subShape:"mind-base",nodeDefaultShape:"mind-base",graphConstructor:d.Tree,defaultSide:"right"},o={};return h.each(g,function(e){h.mix(o,e.CFG)}),h.mix(!0,r,o,e),(n=c(this,s(t).call(this,r))).isMind=!0,n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,f),n=t,(r=[{key:"_init",value:function(){var e=this;u(s(t.prototype),"_init",this).call(this),h.each(g,function(t){t.INIT&&e[t.INIT]()});var n=this.getGraph(),r=this.get("defaultData"),o=n.get("mode"),i=n.getRootGroup().addGroup();if(this.set("hotAreaGroup",i),n.edge().shape(function(e){if(n.find(e.target).getModel().isPlaceholder)return"mind-placeholder-edge"}),r&&this.read(r),"default"===o){if(r){var a=this.getRoot(),c=n.find(a.id);this.setSelected(c,!0)}}else if("readOnly"===o){var l=this.get("shortcut");l.append=!1,l.appendChild=!1,l.selectAll=!1,l.delete=!1}if(r){var d=this.getRoot();this.focus(d.id)}}},{key:"bindEvent",value:function(){var e=this;u(s(t.prototype),"bindEvent",this).call(this);var n=this.get("_graph");n.on("keydown",function(e){e.domEvent.preventDefault()}),n.on("beforechange",function(t){"add"===t.action?e._beforeAdd(t):"changeData"===t.action&&e._beforeChangeData(t)}),n.on("aftersource",function(){e._setHierarchy()}),n.on("afterchange",function(){e._setHotArea()}),n.on("afteritemdraw",function(e){var t=e.item,n=t.getModel();if(t.isEdge){var r=t.getGraphicGroup();h.toBack(r,r.getParent()),r.setSilent("capture",!1)}n.parent||(t.isRoot=!0,t.deleteable=!1,t.collapseExpand=!1,t.appendable=!1,t.dragable=!1)}),this.on("beforedelete",function(t){var n=t.items[0],r=e._getBrothers(n),o=e._getNth(n);r[o-1]?e.setSelected(r[o-1].id,!0):r[o+1]?e.setSelected(r[o+1].id,!0):e.setSelected(n.getParent(),!0)}),this.on("afteritemselected",function(t){e._tryAdjustViewport(t.item)})}},{key:"getRoot",value:function(){return this.getGraph().getSource().roots[0]}},{key:"_setHierarchy",value:function(e){var t=this.getGraph(),n=this.get("firstSubShape"),r=this.get("secondSubShape"),o=this.get("defaultSide");if(e){var i=t.find(e.parent);if(i){var a=i.getModel();e.hierarchy=a.hierarchy+1,"mind-placeholder"!==e.shape&&(2===e.hierarchy&&(e.shape=n,e.side||(e.side=o)),3===e.hierarchy&&(e.shape=r))}}else(e=this.getRoot()).hierarchy=1;h.traverseTree(e,function(e,t){e.hierarchy=t.hierarchy+1,e.side||(e.side=o),t.side&&(e.side=t.side),2===e.hierarchy?e.shape=n:3===e.hierarchy&&(e.shape=r)},function(e){return e.children})}},{key:"getFirstChildrenBySide",value:function(e){var t=this.getRoot(),n=[];return t.children.forEach(function(t){t.side===e&&n.push(t)}),n}},{key:"_getNth",value:function(e){return this.getGraph().getNth(e)}},{key:"_getBrothers",value:function(e){return e.getParent().getModel().children}},{key:"_getMoveChildModel",value:function(e){if(e&&e.length>0){var t=e.length;return e[parseInt(t/2)]}}},{key:"_getVerticalMoveItem",value:function(e,t,n){for(var r,o=this.getGraph().getNodes(),i=e.getBBox(),a=[i.minX,i.maxX],c=[],u=0;u<a.length;u++)for(var s=a[u],l=0;l<o.length;l++){var d=o[l],f=d.getBBox();t(f,i,s)&&c.push({long:n(f,i),node:d})}return c.length>0&&(c.sort(function(e,t){return e.long-t.long}),r=c[0].node),r}},{key:"_arrowTopItem",value:function(e){var t=this._getBrothers(e),n=this._getNth(e);return t[n-1]?t[n-1]:this._getVerticalMoveItem(e,function(e,t,n){return e.centerY<t.centerY&&n<=e.maxX&&n>=e.minX},function(e,t){return t.centerY-e.centerY})}},{key:"_arrowBottomItem",value:function(e){var t=this._getBrothers(e),n=this._getNth(e);return t[n+1]?t[n+1]:this._getVerticalMoveItem(e,function(e,t,n){return e.centerY>t.centerY&&n<=e.maxX&&n>=e.minX},function(e,t){return e.centerY-t.centerY})}},{key:"_arrowLeftItem",value:function(e){var t=h.getMindNodeSide(e);if(e.isRoot){var n=this.getFirstChildrenBySide("left");return this._getMoveChildModel(n)}if("left"===t){var r=e.getModel().children;return this._getMoveChildModel(r)}return e.getParent()}},{key:"_arrowRightItem",value:function(e){var t=h.getMindNodeSide(e);if(e.isRoot){var n=this.getFirstChildrenBySide("right");return this._getMoveChildModel(n)}if("right"===t){var r=e.getModel().children;return this._getMoveChildModel(r)}return e.getParent()}},{key:"_moveItemSelection",value:function(e){var t=this.getGraph(),n=this.getSelected()[0];if(n){var r,o=e.domEvent,i=h.getKeyboradKey(o);"ArrowUp"!==i||n.isRoot?"ArrowDown"!==i||n.isRoot?"ArrowLeft"===i?r=this._arrowLeftItem(n):"ArrowRight"===i&&(r=this._arrowRightItem(n)):r=this._arrowBottomItem(n):r=this._arrowTopItem(n),r&&(r=t.find(r.id)).isVisible()&&(this.clearSelected(),this.setSelected(r,!0))}}},{key:"showLabelEditor",value:function(e){var t=e.domEvent,n=this.getSelected()[0],r=h.getKeyboradKey(t);if(n&&1===r.length&&!t.metaKey&&!t.ctrlKey){var o=this.get("labelTextArea");n&&(this.beginEditLabel(n),o.innerHTML=r,h.setEndOfContenteditable(o))}}},{key:"_tryAdjustViewport",value:function(e){var t=this.get("_graph"),n=e.getBBox(),r={x:n.minX,y:n.minY},o={x:n.maxX,y:n.maxY},i=t.getDomPoint(r),a=t.getDomPoint(o),c=t.getWidth(),u=t.getHeight();i.x<0&&t.translate(16-i.x,0),i.y<0&&t.translate(0,16-i.y),a.x>c&&t.translate(c-a.x-16,0),a.y>u&&t.translate(0,u-a.y-16)}},{key:"_beforeChangeData",value:function(e){var t=e.data.roots[0],n=this.get("rootShape");t.shape=n,this._setHierarchy(t)}},{key:"_beforeAdd",value:function(e){var t=this.get("_graph"),n=e.model,r=t.find(n.parent);r.getModel().collapsed&&t.update(r,{collapsed:!1}),this._setHierarchy(n)}},{key:"_drawHotAreaShape",value:function(){var e=this.get("_graph"),t=this.get("hotAreaGroup"),n=this.get("hotAreas");t.clear(),n.forEach(function(e){t.addShape("rect",{attrs:{x:e.minX,y:e.minY,width:e.maxX-e.minX,height:e.maxY-e.minY,fill:e.color,fillOpacity:.4},capture:!1})}),e.draw()}},{key:"_setHotArea",value:function(){var e=[],t=this.get("_graph"),n=this.getRoot(),r="placeholder",i=this.get("showHotArea"),a=t.find(n.id).getBBox();e.push({minX:a.minX-90,minY:a.minY-60,maxX:(a.minX+a.maxX)/2,maxY:a.maxY+60,parent:n,current:n,id:n.id+"left"+r,nth:n.children.length,side:"left",color:"orange"}),e.push({minX:(a.minX+a.maxX)/2,minY:a.minY-60,maxX:a.maxX+90,maxY:a.maxY+60,parent:n,current:n,id:n.id+"right"+r,nth:n.children.length,side:"right",color:"pink"}),h.traverseTree(n,function(n,i,a){var c=t.find(n.id);if(!n.isPlaceholder&&c&&c.isVisible()){var u=function(e,t,n){var r=n.children,o=e;if(!n.parent)for(;r[o]&&r[o].side!==t.side;)o++;for(;r[o]&&r[o].isPlaceholder;)o++;if(r[o]&&r[o].side===t.side)return r[o]}(a+1,n,i),s=function(e,t,n){var r=n.children,o=e;if(!n.parent)for(;r[o]&&r[o].side!==t.side;)o--;for(;r[o]&&r[o].isPlaceholder;)o--;if(r[o]&&r[o].side===t.side)return r[o]}(a-1,n,i),l=t.find(n.id).getBBox(),d=i.children,f=2===n.hierarchy&&"right"===n.side,h=2===n.hierarchy&&"left"===n.side;if(s||e.push({minX:f?l.minX-90:l.minX,minY:function(){var e=s?l.minY:l.minY-16;d[a-1]&&d[a-1].isPlaceholder&&d[a-1].side===n.side&&(e=t.find(d[a-1].id).getBBox().minY);return e}(),maxX:h?l.maxX+90:l.maxX,maxY:(l.minY+l.maxY)/2,parent:i,id:(s?s.id:void 0)+n.id+i.id+r,side:n.side,color:"yellow",nth:a}),u){var g=t.find(u.id).getBBox();e.push({minX:"left"===n.side?Math.max(l.minX,g.minX):f?l.minX-90:l.minX,minY:(l.minY+l.maxY)/2,maxX:"right"===n.side?Math.min(l.maxX,g.maxX):h?l.maxX+90:l.maxX,maxY:(g.minY+g.maxY)/2,parent:i,id:n.id+(u?u.id:void 0)+i.id+r,side:n.side,color:"blue",nth:a+1})}else e.push({minX:f?l.minX-90:l.minX,minY:(l.minY+l.maxY)/2,maxX:h?l.maxX+90:l.maxX,maxY:function(){var e=l.maxY+16;d[a+1]&&d[a+1].isPlaceholder&&d[a+1].side===n.side&&(e=t.find(d[a+1].id).getBBox().maxY);return e}(),parent:i,id:n.id+void 0+i.id+r,color:"red",nth:a+1,addOrder:"push",side:n.side});if(!n.children||0===n.children.length||1===n.children.length&&n.children[0].isPlaceholder){var p;p=n.x>i.x?{minX:l.maxX,minY:l.minY-0,maxX:l.maxX+100,maxY:l.maxY+0}:{minX:l.minX-100,minY:l.minY-0,maxX:l.minX,maxY:l.maxY+0},e.push(o({},p,{parent:n,id:NaN+n.id+r,nth:0,color:"green",side:n.side,addOrder:"push"}))}}},function(e){return e.children}),this.set("hotAreas",e),i&&this._drawHotAreaShape()}},{key:"hideHotArea",value:function(){var e=this.get("_graph");this.get("hotAreaGroup").clear(),e.draw(),this.set("showHotArea",!1)}},{key:"showHotArea",value:function(){this._drawHotAreaShape(),this.set("showHotArea",!0)}},{key:"getHotArea",value:function(e){var t;return this.get("hotAreas").forEach(function(n){if(e.x>n.minX&&e.x<n.maxX&&e.y>n.minY&&e.y<n.maxY)return t=n,!1}),t}},{key:"saveExpandImage",value:function(e){var t,n,r,i=this,a=this.getGraph(),c=a.getBBox(),u=a.getFitViewPadding();return a.saveImage(o({width:c.width+u[1]+u[3],height:c.height+u[0]+u[2],beforeTransform:function(){var e=a.getNodes();(t=e.filter(function(e){return e.getModel().collapsed}).map(function(e){return e.getModel().id})).forEach(function(e){a.update(e,{collapsed:!1})}),a.layout(),n=i.getSelected().map(function(e){return e.id}),r=i.getSelected().map(function(e){return e.id}),i.clearSelected(),i.clearActived()},afterTransform:function(){t.forEach(function(e){a.update(e,{collapsed:!0})}),i.setSelected(n,!0),i.setActived(r,!0)}},e))}},{key:"save",value:function(){var e=this.get("_graph").save();return e.roots.forEach(function(e){h.traverseTree(e,function(e){delete e.x,delete e.y,delete e.width,delete e.height,delete e.parent,delete e.nth,delete e.hierarchy,delete e.index,delete e.shape},function(e){return e.children},!0)}),e}}])&&a(n.prototype,r),i&&a(n,i),t}();h.each(g,function(e){h.mix(p.prototype,e.AUGMENT)}),f.setRegister(p,"mind","page"),e.exports=p},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var i=n(7).Util,a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=this.getDefaultCfg();i.mix(!0,this,n,t),this.init()}return o(e,[{key:"getDefaultCfg",value:function(){return{}}}]),o(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),e}();e.exports=a},function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({},n(4),{getMindNodeSide:function(e){var t=e.getModel();if(t.side)return t.side;var n=e.getParent();return n?n.getModel().side?n.getModel().side:o.getMindNodeSide(n):void 0}});e.exports=o},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=n(1),u=n(16),s=n(19),l=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r={graph:{modes:{default:["panBlank","hoverGroupActived","keydownCmdWheelZoom","clickEdgeSelected","clickNodeSelected","clickCanvasSelected","clickGroupSelected","hoverNodeActived","hoverEdgeActived","hoverButton","clickCollapsedButton","clickExpandedButton","wheelChangeViewport","keydownShiftMultiSelected","dragNodeAddToGroup","dragOutFromGroup","panItem","hoverEdgeControlPoint","dragEdgeControlPoint"],add:["dragPanelItemAddNode"],readOnly:["panCanvas"],move:["panCanvas"],multiSelect:["dragMultiSelect"]},mode:"default",defaultIntersectBox:"rect",nodeDefaultShape:"flow-base",edgeDefaultShape:"flow-smooth",groupDefaultShape:"flow-base"},linkNode:!1};return s.mix(!0,r,{},e),(n=o(this,i(t).call(this,r))).isFlow=!0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,u),t}();c.setRegister(l,"flow","diagram"),e.exports=l},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=n(16),l=n(1),d=n(6),f=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r={graph:{modes:{default:["panBlank","keydownCmdWheelZoom","clickEdgeSelected","clickNodeSelected","clickCanvasSelected","hoverNodeActived","hoverEdgeActived","hoverButton","wheelChangeViewport","keydownShiftMultiSelected","panItem","hoverNodeShowArrowController","hoverEdgeControlPoint","dragEdgeControlPoint","bpmnMoveEdgeController"],add:["dragPanelItemAddNode","processAddEdge"],readOnly:["panCanvas"],move:["panCanvas"],multiSelect:["dragMultiSelect"]},mode:"default",defaultIntersectBox:"rect",nodeDefaultShape:"bpmn-base",edgeDefaultShape:"bpmn-base"},arrowController:{thickness:32,long:32,controllers:[]}};return d.mix(!0,r,{},e),(n=i(this,c(t).call(this,r))).isBPMN=!0,n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,s),n=t,(r=[{key:"_init",value:function(){a(c(t.prototype),"_init",this).call(this),this._initArrowController()}},{key:"_createArrowController",value:function(e,t){var n=this,r=this.get("arrowController").controllers,o=d.createDOM('<div class="g6-bpmn-arrow"><svg t="1543840367375" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1061" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><defs><style type="text/css"></style></defs><path d="M906.77248 512c0 4.77184-2.21184 9.2672-5.9904 12.17536l-376.5248 289.4848c-2.7648 2.11968-6.06208 3.18464-9.3696 3.18464-3.25632 0-6.5024-1.03424-9.24672-3.09248-5.50912-4.15744-7.5776-11.48928-5.03808-17.90976l75.71456-191.67232L132.58752 604.17024c-8.48896 0-15.36-6.88128-15.36-15.36l0-153.6c0-8.48896 6.87104-15.36 15.36-15.36l443.72992 0-75.71456-191.68256c-2.53952-6.42048-0.47104-13.75232 5.04832-17.90976 5.50912-4.15744 13.12768-4.13696 18.60608 0.09216l376.5248 289.4848C904.56064 502.7328 906.77248 507.22816 906.77248 512z" p-id="1062" fill="#34B7EF"></path></svg></div>',{visibility:"hidden",width:e+"px",height:t+"px",position:"absolute"});return o.setAttribute("draggable","true"),d.addEventListener(o,"dragstart",function(){var e=o.hoverNode,t={shape:"bpmn-base",source:e.id,anchorIndex:o.getAttribute("anchorIndex")},r=e.getBBox(),i=n.getDelegation([{isEdge:!0}]);n.setSignal("dragEdge",!0),n.beginAdd("edge",t),n.set("addEdgeConfig",{addModel:t,delegation:i,startPoint:{x:r.centerX,y:r.centerY},sourceItem:e}),n.hideArrowController()}),r.push(o),o}},{key:"showArrowController",value:function(e){this.get("arrowController").controllers.forEach(function(t){t.show(),t.hoverNode=e})}},{key:"hideArrowController",value:function(){this.get("arrowController").controllers.forEach(function(e){e.hide()})}},{key:"_initArrowController",value:function(){var e=this.getGraph().getGraphContainer(),t=this.get("arrowController"),n=t.thickness,r=t.long,o=this._createArrowController(n,r),i=this._createArrowController(n,r),a=this._createArrowController(r,n),c=this._createArrowController(r,n);e.appendChild(o),e.appendChild(i),e.appendChild(a),e.appendChild(c),t.topArrow=o,t.bottomArrow=i,t.leftArrow=a,t.rightArrow=c}},{key:"bindEvent",value:function(){var e=this;a(c(t.prototype),"bindEvent",this).call(this);var n=this.getGraph();n.on("beforepanitem",function(){e.hideArrowController()}),n.on("afterviewportchange",function(){e.hideArrowController()})}}])&&o(n.prototype,r),l&&o(n,l),t}();l.setRegister(f,"bpmn","diagram"),e.exports=f},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=n(7),l=n(1),d=n(2),f=n(65),h=n(66),g=n(68),p=n(72),m=[f,n(73),p,h,g,n(74)],y=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r={shortcut:{copy:!0,paste:!0,selectAll:!0,addGroup:!0,unGroup:!0},graph:{minZoom:.2,maxZoom:2},graphConstructor:s.Graph,noEndEdge:!0},o={};return d.each(m,function(e){d.mix(o,e.CFG)}),d.mix(!0,r,o,e),(n=i(this,c(t).call(this,r))).isFlow=!0,n}var n,r,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,l),n=t,(r=[{key:"_init",value:function(){var e=this;a(c(t.prototype),"_init",this).call(this),d.each(m,function(t){t.INIT&&e[t.INIT]()})}},{key:"bindEvent",value:function(){var e=this;a(c(t.prototype),"bindEvent",this).call(this),this.on("beforeitemactived",function(t){var n=t.item,r=e.get("_graph").getShapeObj(n).getActivedOutterStyle(n);n.isNode&&e.addOutterShape(n,r)}),this.on("beforeitemunactived",function(t){var n=t.item;(n.isNode||n.isGroup)&&e.clearOutterShape(n)}),this.on("beforeitemselected",function(t){var n=t.item,r=e.get("_graph").getShapeObj(n).getSelectedOutterStyle(n);n.isNode?e.addOutterShape(n,r):n.isGroup&&e.addOutterShape(n,r)}),this.on("beforeitemunselected",function(t){var n=t.item;(n.isNode||n.isGroup)&&e.clearOutterShape(n)})}}])&&o(n.prototype,r),f&&o(n,f),t}();d.each(m,function(e){d.mix(y.prototype,e.AUGMENT)}),l.setRegister(y,"diagram","page"),e.exports=y},function(e,t){e.exports={gridStyle:{stroke:"#A3B1BF",lineWidth:.5},cursor:{panningCanvas:"-webkit-grabbing",beforePanCanvas:"-webkit-grab"},wheelPanRatio:.3,alignLineStyle:{stroke:"#FA8C16",lineWidth:1},nodeDelegationStyle:{stroke:"#1890FF",fill:"#1890FF",fillOpacity:.08,lineDash:[4,4],radius:4,lineWidth:1},edgeDelegationStyle:{stroke:"#1890FF",lineDash:[4,4],lineWidth:1}}},function(e,t,n){var r=n(18);n(32),n(33),e.exports=r},function(e,t,n){var r=n(13);n(75),n(80),e.exports=r},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=n(1),l=n(16),d=n(24),f=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r={graph:{modes:{default:["panBlank","hoverGroupActived","keydownCmdWheelZoom","clickEdgeSelected","clickNodeSelected","clickCanvasSelected","clickGroupSelected","hoverNodeActived","hoverEdgeActived","hoverButton","clickCollapsedButton","clickExpandedButton","wheelChangeViewport","keydownShiftMultiSelected","dragNodeAddToGroup","dragOutFromGroup","panItem","hoverEdgeControlPoint","dragEdgeControlPoint"],add:["dragPanelItemAddNode","processAddEdge"],readOnly:["panCanvas"],move:["panCanvas"],multiSelect:["dragMultiSelect"]},mode:"default",defaultIntersectBox:"circle",nodeDefaultShape:"koni-base",edgeDefaultShape:"koni-base",groupDefaultShape:"koni-base",minZoom:.5,maxZoom:2},orbit:{satellite:["forkAndLink"]},anchorLink:!1,noEndEdge:!1};return d.mix(!0,r,{},e),(n=i(this,c(t).call(this,r))).isKoni=!0,n}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,l),n=t,(r=[{key:"bindEvent",value:function(){a(c(t.prototype),"bindEvent",this).call(this);var e=this.getGraph();e.on("afterchange",function(t){var n=t.item,r=t.action,o=t.originModel,i=t.updateModel;if(n&&n.isEdge)if("add"===r||"remove"===r){var a=n.getSource(),c=n.getTarget();d.getParallelEdges(a,c,!0).forEach(function(e){e.update()})}else if("update"===r){var u=e.find(o.source),s=e.find(o.target),l=[];if(d.getParallelEdges(u,s,!0).forEach(function(e){e.update()}),d.isNil(i.target)&&!d.isNil(i.source)){var f=e.find(i.source);l=d.getParallelEdges(f,s,!0)}else if(!d.isNil(i.target)&&d.isNil(i.source)){var h=e.find(i.target);l=d.getParallelEdges(u,h,!0)}else if(!d.isNil(i.target)&&!d.isNil(i.source)){var g=e.find(i.source),p=e.find(i.target);l=d.getParallelEdges(g,p,!0)}l.forEach(function(e){e.update()})}"changeData"===r&&e.getEdges().forEach(function(e){e.update()}),e.draw()})}}])&&o(n.prototype,r),s&&o(n,s),t}();s.setRegister(f,"koni","diagram"),e.exports=f},function(e,t,n){function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(6),a={};function c(e){return e.getCurrentPage().getSelected().length>0}function u(e){var t=e.getCurrentPage();this.snapShot=t.save(),this.selectedItems=t.getSelected().map(function(e){return e.id}),this.method&&(i.isString(this.method)?t[this.method]():this.method(e))}function s(e){var t=e.getCurrentPage();t.read(this.snapShot),t.setSelected(this.selectedItems,!0)}function l(e){return e.getCurrentPage().getMode()!==this.toMode}function d(e){var t=e.getCurrentPage();this.fromMode=t.getMode(),t.changeMode(this.toMode)}function f(e){e.getCurrentPage().changeMode(this.fromMode)}function h(e){var t={},n=[];return e.forEach(function(e){var o=e.model,a=i.mix(!0,{},r({},o,{id:i.guid()}));t[o.id]=a.id,n.push(r({},e,{model:a}))}),n.forEach(function(e){var n=e.model;if(n.parent){var r=t[n.parent];r?n.parent=r:delete n.parent}}),n.sort(function(e,t){return e.index-t.index}),n}a.list=[],a.registerCommand=function(e,t,n){if(a[e])i.mix(a[e],t);else{var o=r({enable:function(){return!0},init:function(){},execute:u,back:s,shortcutCodes:void 0,executeTimes:1,name:e,queue:!0},t);n&&a[n]&&(o=i.mix({},a[n],t)),a[e]=o,a.list.push(o)}},a.execute=function(e,t,n){var r=i.mix(!0,{},a[e],n),o=t.get("_command");return r.enable(t)&&(r.init(),r.queue&&(o.queue.splice(o.current,o.queue.length-o.current,r),o.current+=1),t.emit("beforecommandexecute",{command:r}),r.execute(t),t.emit("aftercommandexecute",{command:r}),t.setCommandDOMenable()),r},a.enable=function(e,t){return a[e].enable(t)},a.registerCommand("common",{back:s}),a.registerCommand("copyAdjacent",{enable:function(){return this.copyNode&&this.copyNode.isNode&&this.x&&this.y},execute:function(e){var t=this.copyNode,n=e.getCurrentPage(),r=n.getGraph(),o=t.getModel(),a=i.clone(o);a.id=i.guid(),a.x=this.x,a.y=this.y;var c=r.add("node",a),u=r.add("edge",{source:o.id,target:a.id});1===this.executeTimes&&(this.addIds=[c.id,u.id],this.page=n)},back:function(){var e=this.page.getGraph();this.addIds.forEach(function(t){e.remove(t)})}}),a.registerCommand("add",{enable:function(){return this.type&&this.addModel},execute:function(e){var t=e.getCurrentPage(),n=t.getGraph().add(this.type,this.addModel);1===this.executeTimes&&(this.addId=n.id,this.page=t)},back:function(){this.page.getGraph().remove(this.addId)}}),a.registerCommand("update",{enable:function(){return this.itemId&&this.updateModel},execute:function(e){var t=e.getCurrentPage(),n=t.getGraph(),r=n.find(this.itemId);1===this.executeTimes&&(this.originModel=i.getContrast(r.getModel(),this.updateModel),this.page=t),n.update(r,this.updateModel)},back:function(){var e=this.page.getGraph(),t=e.find(this.itemId);e.update(t,this.originModel)}}),a.registerCommand("redo",{queue:!1,enable:function(e){var t=e.get("_command"),n=t.queue;return t.current<n.length},execute:function(e){var t=e.get("_command");t.queue[t.current].execute(e),t.current+=1},shortcutCodes:[["metaKey","shiftKey","z"],["ctrlKey","shiftKey","z"]]}),a.registerCommand("undo",{queue:!1,enable:function(e){return e.get("_command").current>0},execute:function(e){var t=e.get("_command"),n=t.queue[t.current-1];n.executeTimes++,n.back(e),t.current-=1},shortcutCodes:[["metaKey","z"],["ctrlKey","z"]]}),a.registerCommand("copy",{queue:!1,enable:c,method:function(e){var t=e.getCurrentPage().getSelected(),n=e.get("_command"),o=t.map(function(e){return e.getGraphicGroup()}),a=i.getChildrenBBox(o);n.clipboard=[],t.forEach(function(e){i.traverseTree(e,function(e){var t=e.getModel(),r=e.getGraphicGroup();n.clipboard.push({type:e.type,index:i.getIndex(r),model:t})},function(e){return e.getChildren&&e.getChildren()},!0)}),e.set("copyCenterBox",r({},a))}}),a.registerCommand("pasteHere",{enable:function(e){return e.get("_command").clipboard.length>0},method:function(e){var t=e.getCurrentPage(),n=e.get("_command"),r=this.pasteData?this.pasteData:h(n.clipboard),o=this.copyCenterBox?this.copyCenterBox:e.get("copyCenterBox"),a=this.contextmenuPoint?this.contextmenuPoint:e.get("contextmenuPoint");t.clearSelected(),this.copyCenterBox=i.clone(o),this.pasteData=i.clone(r),this.contextmenuPoint=i.clone(a),r.forEach(function(e){var n=e.model;n.x&&(n.x+=a.x-o.minX),n.y&&(n.y+=a.y-o.minY),t.add(e.type,n)})},back:s}),a.registerCommand("paste",{enable:function(e){return e.get("_command").clipboard.length>0},method:function(e){var t=e.getCurrentPage(),n=e.get("_command"),r=this.pasteData?this.pasteData:h(n.clipboard);t.clearSelected(),this.pasteData=i.clone(r),r.forEach(function(e){var n=e.model;n.x&&(n.x+=10),n.y&&(n.y+=10),t.add(e.type,n)})},back:s}),a.registerCommand("addGroup",{init:function(){this.addGroupId=i.guid()},enable:function(e){return e.getCurrentPage().getSelected().length>1},method:function(e){e.getCurrentPage().addGroup({id:this.addGroupId})},back:s}),a.registerCommand("unGroup",{enable:function(e){var t=e.getCurrentPage().getSelected();return 1===t.length&&t[0].isGroup},method:"unGroup",back:s}),a.registerCommand("delete",{getDeleteItems:function(e){var t=e.getCurrentPage(),n=t.getGraph(),r=this.itemIds?this.itemIds.map(function(e){return n.find(e)}):t.getSelected();return r=r.filter(function(e){return!1!==e.deleteable})},enable:function(e){return this.getDeleteItems(e).length>0},method:function(e){var t=e.getCurrentPage(),n=this.getDeleteItems(e),r=t.getGraph();t.emit("beforedelete",{items:n}),i.each(n,function(e){r.remove(e)}),t.emit("afterdelete",{items:n}),this.itemIds=n.map(function(e){return e.getModel().id})},back:s,shortcutCodes:["Delete","Backspace"]}),a.registerCommand("selectAll",{method:function(e){var t=e.getCurrentPage();t.getGraph().getItems().forEach(function(e){t.setSelected(e,!0)})},back:s,shortcutCodes:[["metaKey","a"]]}),a.registerCommand("toBack",{enable:c,method:"toBack",back:s}),a.registerCommand("toFront",{enable:c,method:"toFront",back:s}),a.registerCommand("clear",{enable:function(e){return e.getCurrentPage().getItems().length>0},method:"clear",back:s}),a.registerCommand("multiSelect",{enable:l,toMode:"multiSelect",execute:d,back:f}),a.registerCommand("move",{enable:l,toMode:"move",execute:d,back:f}),e.exports=a},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n.r(t),n.d(t,"mouseEnterEdge",function(){return o}),n.d(t,"mouseLeaveEdge",function(){return i}),n.d(t,"startMove",function(){return a}),n.d(t,"endMove",function(){return c}),n.d(t,"mouseMoveEdge",function(){return u}),n.d(t,"mergeLine",function(){return s});var r=n(0);function o(e){var t=e.graph,n=e.bpmn,o=e.ev,i=e.backUpCursor,a=o.item,c=a.model.controlPoints,u=Object(r.e)({x:o.x,y:o.y},c),s=u.index,l=u.vertical;null!=s&&(i&&(a._cursor=n.getGraph().getMouseEventWrapper().style.cursor),t.update(a,{hold:{index:s,vertical:l}}),l?n.css({cursor:"col-resize"}):n.css({cursor:"row-resize"}))}function i(e){var t=e.graph,n=e.bpmn,r=e.item;r._cursor&&n.css({cursor:r._cursor}),delete r._cursor,t.update(r,{hold:void 0})}function a(e,t){var n=t.item;e.update(n,{lastMouse:{x:t.x,y:t.y}})}function c(e){var t=e.graph,n=e.item;t.update(n,{lastMouse:void 0,moveDelta:void 0})}function u(e,t,n){var r;r=t.model&&t.model.hold&&t.model.hold.vertical?{x:n.x-t.model.lastMouse.x,y:0}:{x:0,y:n.y-t.model.lastMouse.y},e.update(t,{edgeMoved:r,modifiedByMouse:!0})}function s(e,t,n){var r,o=e.model,i=t||o.hold.index,a=o.controlPoints;null===n&&(n=o.hold.vertical);var c=[];return i>=2&&(n?Math.abs(a[i-2].x-a[i].x)<=3&&(r=[{x:a[i-2].x,y:a[i-2].y},{x:a[i-2].x,y:a[i+1].y}],c.push(i-1,i),o.hold.index=i-2,o.controlPoints[i+1].x=a[i-2].x):Math.abs(a[i-2].y-a[i].y)<=3&&(r=[{x:a[i-2].x,y:a[i-2].y},{x:a[i+1].x,y:a[i-2].y}],c.push(i-1,i),o.hold.index=i-2,o.controlPoints[i+1].y=a[i-2].y)),i<=a.length-4&&(n?Math.abs(a[i].x-a[i+2].x)<=3&&(r?(r[1]={x:a[i-2].x,y:a[i+3].y},o.controlPoints[i+3].x=a[i-2].x):(r=[{x:a[i+3].x,y:a[i].y},{x:a[i+3].x,y:a[i+3].y}],o.controlPoints[i].x=a[i+3].x),c.push(i+1,i+2)):Math.abs(a[i].y-a[i+2].y)<=3&&(r?(r[1]={x:a[i+3].x,y:a[i-2].y},o.controlPoints[i+3].y=a[i-2].y):(r=[{x:a[i].x,y:a[i+3].y},{x:a[i+3].x,y:a[i+3].y}],o.controlPoints[i].y=a[i+3].y),c.push(i+1,i+2))),c&&c.length&&a.splice(c[0],c.length),r}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=n(27),l=n(6),d=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=(n=o(this,i(t).call(this))).getDefaultCfg();return n._cfg=l.mix(!0,{},n._cfg,r,e),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,s),c(t,[{key:"getDefaultCfg",value:function(){return{}}}]),c(t,[{key:"get",value:function(e){return this._cfg[e]}},{key:"set",value:function(e,t){this._cfg[e]=t}},{key:"destroy",value:function(){this._cfg={},this.destroyed=!0}}]),t}();e.exports=d},function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(4);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({},o,{getParallelEdges:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e.getEdges().filter(function(e){var r=e.getModel();return r.target===t.id||n&&r.source===t.id})},object2array:function(e){var t=[];return o.each(e,function(e){t.push(e)}),t}})},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=n(9),s=n(2),l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,a(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,u),n=t,(r=[{key:"getDefaultCfg",value:function(){return{name:"",render:function(){return"<button>satellite</button>"},bindEvent:function(){return[]}}}},{key:"_renderDOM",value:function(){var e=s.createDOM(this.render(this.diagram));return this.dom=e,e.isSatellite=!0,e}},{key:"getDOM",value:function(){return this.dom||this._renderDOM()}},{key:"init",value:function(){var e=this.getDOM(),t=this.diagram.getGraph().getGraphContainer();e&&(e.css({position:"absolute",visibility:"hidden"}),t.appendChild(e),e&&this.bindEvent(e,this.diagram))}},{key:"enable",value:function(){return!0}},{key:"show",value:function(){this.getDOM().show()}},{key:"hide",value:function(){this.getDOM().hide()}},{key:"isVisible",value:function(){return"hidden"!==this.getDOM().style.visibility}},{key:"destroy",value:function(){var e=this.events;e&&e.forEach(function(e){e.remove()})}}])&&o(n.prototype,r),l&&o(n,l),t}();e.exports=l},function(e,t,n){e.exports=n(2)},function(e,t,n){var r=n(26),o=n(6),i=n(15);n(7);r.Editor=r,r.Util=o,r.Diagram=n(16),r.Page=n(1),r.Flow=n(95),r.Koni=n(102),r.Mind=n(107),r.Toolbar=n(121),r.Contextmenu=n(122),r.Command=n(15),r.BPMN=n(123),r.registerBehaviour=r.Page.registerBehaviour,r.registerNode=r.Page.registerNode,r.registerEdge=r.Page.registerEdge,r.registerGroup=r.Page.registerGroup,r.registerGuide=r.Page.registerGuide,r.registerCommand=i.registerCommand,e.exports=r},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=n(21),s=n(6),l=n(15),d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,a(t).apply(this,arguments))}var n,r,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,u),n=t,(r=[{key:"getDefaultCfg",value:function(){return{_components:[],_command:{zoomDelta:.1,queue:[],current:0,clipboard:[]}}}},{key:"_getComponentsBy",value:function(e){return this.get("_components").filter(e)}},{key:"_bindCommands",value:function(e){var t=this;s.each(e,function(e){var n=e.dataset,r=n.command;l[r]?s.addEventListener(e,"click",function(){t.getCurrentPage().focusGraphWrapper(),t.executeCommand(r,n)}):console.warn("请设置有效的命令！")})}},{key:"getCommands",value:function(){return this.get("_command").queue}},{key:"getCurrentCommand",value:function(){var e=this.get("_command");return e.queue[e.current-1]}},{key:"executeCommand",value:function(e,t){s.isString(e)?l.execute(e,this,t):l.execute("common",this,{method:e},t)}},{key:"commandEnable",value:function(e){return l.enable(e,this)}},{key:"setCommandDOMenable",value:function(){var e=this,t=this.getComponentsByType("toolbar"),n=this.getComponentsByType("contextmenu"),r=[];t.forEach(function(e){s.each(e.getCommandDoms(),function(e){r.push(e)})}),n.forEach(function(e){s.each(e.getCommandDoms(),function(e){r.push(e)})}),s.each(r,function(t){var n=t.dataset.command;l.enable(n,e)?t.classList.remove("disable"):t.classList.add("disable")})}},{key:"_onPageStatusChange",value:function(){this.setCommandDOMenable()}},{key:"_afterAddContextmenu",value:function(){this.getCurrentPage()&&this.setCommandDOMenable()}},{key:"_afterAddPage",value:function(e){var t=this;this.setCommandDOMenable(),e.on("statuschange",function(e){t._onPageStatusChange(e)}),e.on("mousedown",function(){t.getComponentsByType("contextmenu").forEach(function(e){e.hide()})}),e.on("contextmenu",function(n){var r=t.getComponentsByType("contextmenu"),o=e.getGraph().getCanvas().get("el"),i=s.getBoundingClientRect(o),a={x:n.x,y:n.y},c=n.item;c&&!c.isSelected&&(e.clearSelected(),e.setSelected(n.item,!0)),t.set("contextmenuPoint",a),n.domEvent.preventDefault(),r.forEach(function(e){e.show(),e.contextmenuPoint=a,e.move(i.left+n.domX,i.top+n.domY)})}),e.on("statuschange",function(e){t.getComponentsByType("contextmenu").forEach(function(t){t.switch(e.status)})}),this._bindShortcut(e)}},{key:"_beforeAddToolbar",value:function(e){var t=e.getCommandDoms();this._bindCommands(t)}},{key:"_beforeAddContextmenu",value:function(e){var t=e.getCommandDoms();e.bindEvent(),this._bindCommands(t)}},{key:"getComponentsByType",value:function(e){return this._getComponentsBy(function(t){return t.type===e})}},{key:"getCurrentPage",value:function(){var e,t=this.getComponentsByType("page");return t.every(function(t){return!t.isActived||(e=t,!1)}),e||(e=t[0]),e}},{key:"getComponents",value:function(){return this.get("_components")}},{key:"_shortcutEnable",value:function(e,t){for(var n=e.shortcutCodes,r=s.getKeyboradKey(t),o=!1,i=0;i<n.length;i++){var a=n[i];if(s.isArray(a)){for(var c=a.length,u=!0,l=0;l<c-1;l++)if(!t[a[l]]){u=!1;break}a[c-1]!==r&&a[c-1]!==s.lowerFirst(r)||!u||(o=!0)}else a===r&&(o=!0);if(o)break}return o}},{key:"_bindShortcut",value:function(e){var t=this,n=e.get("shortcut");e.getGraph().on("keydown",function(e){var r=t.getComponentsByType("contextmenu"),o=e.domEvent;r.forEach(function(e){e.hide()}),o.preventDefault();for(var i=l.list.filter(function(e){return e.shortcutCodes&&n[e.name]}),a=0;a<i.length;a++){var c=i[a];if(t._shortcutEnable(c,o))return t.executeCommand(c.name),!1}})}},{key:"add",value:function(e){var t=this.get("_components"),n=s.upperFirst(e.type);e.editor=this,this["_beforeAdd"+n]&&this["_beforeAdd"+n](e),t.push(e),this["_afterAdd"+n]&&this["_afterAdd"+n](e)}},{key:"destroy",value:function(){this.get("_components").forEach(function(e){e.destroy()})}}])&&o(n.prototype,r),d&&o(n,d),t}();e.exports=d},function(e,t,n){var r;
/*!
 * EventEmitter v5.2.6 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - https://oli.me.uk/
 * @preserve
 */!function(t){"use strict";function o(){}var i=o.prototype,a=t.EventEmitter;function c(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function u(e){return function(){return this[e].apply(this,arguments)}}i.getListeners=function(e){var t,n,r=this._getEvents();if(e instanceof RegExp)for(n in t={},r)r.hasOwnProperty(n)&&e.test(n)&&(t[n]=r[n]);else t=r[e]||(r[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&((t={})[e]=n),t||n},i.addListener=function(e,t){if(!function e(t){return"function"==typeof t||t instanceof RegExp||!(!t||"object"!=typeof t)&&e(t.listener)}(t))throw new TypeError("listener must be a function");var n,r=this.getListenersAsObject(e),o="object"==typeof t;for(n in r)r.hasOwnProperty(n)&&-1===c(r[n],t)&&r[n].push(o?t:{listener:t,once:!1});return this},i.on=u("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=u("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,t){var n,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&-1!==(n=c(o[r],t))&&o[r].splice(n,1);return this},i.off=u("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var r,o,i=e?this.removeListener:this.addListener,a=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(r=n.length;r--;)i.call(this,t,n[r]);else for(r in t)t.hasOwnProperty(r)&&(o=t[r])&&("function"==typeof o?i.call(this,r,o):a.call(this,r,o));return this},i.removeEvent=function(e){var t,n=typeof e,r=this._getEvents();if("string"===n)delete r[e];else if(e instanceof RegExp)for(t in r)r.hasOwnProperty(t)&&e.test(t)&&delete r[t];else delete this._events;return this},i.removeAllListeners=u("removeEvent"),i.emitEvent=function(e,t){var n,r,o,i,a=this.getListenersAsObject(e);for(i in a)if(a.hasOwnProperty(i))for(n=a[i].slice(0),o=0;o<n.length;o++)!0===(r=n[o]).once&&this.removeListener(e,r.listener),r.listener.apply(this,t||[])===this._getOnceReturnValue()&&this.removeListener(e,r.listener);return this},i.trigger=u("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},i._getEvents=function(){return this._events||(this._events={})},o.noConflict=function(){return t.EventEmitter=a,o},void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}("undefined"!=typeof window?window:this||{})},function(e,t,n){var r=n(7).Util;e.exports={getGroupIconPath:function(){return"M9.75,9.60000014 L3.75,9.60000014 C3.33578644,9.60000014 3,9.2865995 3,8.90000022 C3,8.51340093 3.33578644,8.20000029 3.75,8.20000029 L9.75,8.20000029 C10.1642136,8.20000029 10.5,8.51340093 10.5,8.90000022 C10.5,9.2865995 10.1642136,9.60000014 9.75,9.60000014 M3,11.6999999 C3,11.3134006 3.33578644,11 3.75,11 L6.75,11 C7.16421356,11 7.5,11.3134006 7.5,11.6999999 C7.5,12.0865992 7.16421356,12.3999999 6.75,12.3999999 L3.75,12.3999999 C3.33578644,12.3999999 3,12.0865992 3,11.6999999 M3.75,13.7999997 L6.75,13.7999997 C7.16421356,13.7999997 7.5,14.1134004 7.5,14.4999996 C7.5,14.8865989 7.16421356,15.1999996 6.75,15.1999996 L3.75,15.1999996 C3.33578644,15.1999996 3,14.8865989 3,14.4999996 C3,14.1134004 3.33578644,13.7999997 3.75,13.7999997 M16.4985,4.00000072 L1.5015,4.00000072 C0.674533504,3.99922416 0.00289396564,4.6232696 0,5.39510058 L0,16.6048994 C0.00289396564,17.3767304 0.674533504,18.0007758 1.5015,17.9999993 L16.4985,17.9999993 C17.3254665,18.0007758 17.997106,17.3767304 18,16.6048994 L18,5.39510058 C17.997106,4.6232696 17.3254665,3.99922416 16.4985,4.00000072M19,13.9999993 L19,3 L5,3 L5,1.39510058 C5.00289397,0.623269599 5.6745335,-0.00077583787 6.5015,7.23978642e-07 L21.4985,7.23978642e-07 C22.3254665,-0.00077583787 22.997106,0.623269599 23,1.39510058 L23,12.6048994 C22.997106,13.3767304 22.3254665,14.0007758 21.4985,13.9999993 L19,13.9999993 Z"},getCollapsedButtonPath:function(){return r.getRectPath(0,0,14,14,2)+"M3,7L11,7"},getExpandedButtonPath:function(){return r.getRectPath(0,0,14,14,2)+"M3,7L11,7M7,3L7,11"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.presetPrimaryColors=t.presetPalettes=t.generate=void 0;var r,o=n(30),i=(r=o)&&r.__esModule?r:{default:r};var a={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},c={};Object.keys(a).forEach(function(e){c[e]=(0,i.default)(a[e])}),t.generate=i.default,t.presetPalettes=c,t.presetPrimaryColors=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=[],n=(0,i.default)(e),r=d;r>0;r-=1){var o=n.toHsv(),a=(0,i.default)({h:h(o,r,!0),s:g(o,r,!0),v:p(o,r,!0)}).toHexString();t.push(a)}t.push(n.toHexString());for(var c=1;c<=f;c+=1){var u=n.toHsv(),s=(0,i.default)({h:h(u,c),s:g(u,c),v:p(u,c)}).toHexString();t.push(s)}return t};var r,o=n(31),i=(r=o)&&r.__esModule?r:{default:r};var a=2,c=16,u=5,s=5,l=15,d=5,f=4;function h(e,t,n){var r=void 0;return(r=Math.round(e.h)>=60&&Math.round(e.h)<=240?n?Math.round(e.h)-a*t:Math.round(e.h)+a*t:n?Math.round(e.h)+a*t:Math.round(e.h)-a*t)<0?r+=360:r>=360&&(r-=360),r}function g(e,t,n){if(0===e.h&&0===e.s)return e.s;var r=void 0;return(r=n?Math.round(100*e.s)-c*t:t===f?Math.round(100*e.s)+c:Math.round(100*e.s)+u*t)>100&&(r=100),n&&t===d&&r>10&&(r=10),r<6&&(r=6),r}function p(e,t,n){return n?Math.round(100*e.v)+s*t:Math.round(100*e.v)-l*t}},function(e,t,n){var r;!function(o){var i=/^\s+/,a=/\s+$/,c=0,u=o.round,s=o.min,l=o.max,d=o.random;function f(e,t){if(t=t||{},(e=e||"")instanceof f)return e;if(!(this instanceof f))return new f(e,t);var n=function(e){var t={r:0,g:0,b:0},n=1,r=null,c=null,u=null,d=!1,f=!1;"string"==typeof e&&(e=function(e){e=e.replace(i,"").replace(a,"").toLowerCase();var t,n=!1;if(M[e])e=M[e],n=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};if(t=z.rgb.exec(e))return{r:t[1],g:t[2],b:t[3]};if(t=z.rgba.exec(e))return{r:t[1],g:t[2],b:t[3],a:t[4]};if(t=z.hsl.exec(e))return{h:t[1],s:t[2],l:t[3]};if(t=z.hsla.exec(e))return{h:t[1],s:t[2],l:t[3],a:t[4]};if(t=z.hsv.exec(e))return{h:t[1],s:t[2],v:t[3]};if(t=z.hsva.exec(e))return{h:t[1],s:t[2],v:t[3],a:t[4]};if(t=z.hex8.exec(e))return{r:Y(t[1]),g:Y(t[2]),b:Y(t[3]),a:T(t[4]),format:n?"name":"hex8"};if(t=z.hex6.exec(e))return{r:Y(t[1]),g:Y(t[2]),b:Y(t[3]),format:n?"name":"hex"};if(t=z.hex4.exec(e))return{r:Y(t[1]+""+t[1]),g:Y(t[2]+""+t[2]),b:Y(t[3]+""+t[3]),a:T(t[4]+""+t[4]),format:n?"name":"hex8"};if(t=z.hex3.exec(e))return{r:Y(t[1]+""+t[1]),g:Y(t[2]+""+t[2]),b:Y(t[3]+""+t[3]),format:n?"name":"hex"};return!1}(e));"object"==typeof e&&(H(e.r)&&H(e.g)&&H(e.b)?(h=e.r,g=e.g,p=e.b,t={r:255*X(h,255),g:255*X(g,255),b:255*X(p,255)},d=!0,f="%"===String(e.r).substr(-1)?"prgb":"rgb"):H(e.h)&&H(e.s)&&H(e.v)?(r=D(e.s),c=D(e.v),t=function(e,t,n){e=6*X(e,360),t=X(t,100),n=X(n,100);var r=o.floor(e),i=e-r,a=n*(1-t),c=n*(1-i*t),u=n*(1-(1-i)*t),s=r%6;return{r:255*[n,c,a,a,u,n][s],g:255*[u,n,n,c,a,a][s],b:255*[a,a,u,n,n,c][s]}}(e.h,r,c),d=!0,f="hsv"):H(e.h)&&H(e.s)&&H(e.l)&&(r=D(e.s),u=D(e.l),t=function(e,t,n){var r,o,i;function a(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(e=X(e,360),t=X(t,100),n=X(n,100),0===t)r=o=i=n;else{var c=n<.5?n*(1+t):n+t-n*t,u=2*n-c;r=a(u,c,e+1/3),o=a(u,c,e),i=a(u,c,e-1/3)}return{r:255*r,g:255*o,b:255*i}}(e.h,r,u),d=!0,f="hsl"),e.hasOwnProperty("a")&&(n=e.a));var h,g,p;return n=j(n),{ok:d,format:e.format||f,r:s(255,l(t.r,0)),g:s(255,l(t.g,0)),b:s(255,l(t.b,0)),a:n}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=u(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=u(this._r)),this._g<1&&(this._g=u(this._g)),this._b<1&&(this._b=u(this._b)),this._ok=n.ok,this._tc_id=c++}function h(e,t,n){e=X(e,255),t=X(t,255),n=X(n,255);var r,o,i=l(e,t,n),a=s(e,t,n),c=(i+a)/2;if(i==a)r=o=0;else{var u=i-a;switch(o=c>.5?u/(2-i-a):u/(i+a),i){case e:r=(t-n)/u+(t<n?6:0);break;case t:r=(n-e)/u+2;break;case n:r=(e-t)/u+4}r/=6}return{h:r,s:o,l:c}}function g(e,t,n){e=X(e,255),t=X(t,255),n=X(n,255);var r,o,i=l(e,t,n),a=s(e,t,n),c=i,u=i-a;if(o=0===i?0:u/i,i==a)r=0;else{switch(i){case e:r=(t-n)/u+(t<n?6:0);break;case t:r=(n-e)/u+2;break;case n:r=(e-t)/u+4}r/=6}return{h:r,s:o,v:c}}function p(e,t,n,r){var o=[G(u(e).toString(16)),G(u(t).toString(16)),G(u(n).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function m(e,t,n,r){return[G(L(r)),G(u(e).toString(16)),G(u(t).toString(16)),G(u(n).toString(16))].join("")}function y(e,t){t=0===t?0:t||10;var n=f(e).toHsl();return n.s-=t/100,n.s=I(n.s),f(n)}function v(e,t){t=0===t?0:t||10;var n=f(e).toHsl();return n.s+=t/100,n.s=I(n.s),f(n)}function b(e){return f(e).desaturate(100)}function x(e,t){t=0===t?0:t||10;var n=f(e).toHsl();return n.l+=t/100,n.l=I(n.l),f(n)}function S(e,t){t=0===t?0:t||10;var n=f(e).toRgb();return n.r=l(0,s(255,n.r-u(-t/100*255))),n.g=l(0,s(255,n.g-u(-t/100*255))),n.b=l(0,s(255,n.b-u(-t/100*255))),f(n)}function w(e,t){t=0===t?0:t||10;var n=f(e).toHsl();return n.l-=t/100,n.l=I(n.l),f(n)}function O(e,t){var n=f(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,f(n)}function P(e){var t=f(e).toHsl();return t.h=(t.h+180)%360,f(t)}function _(e){var t=f(e).toHsl(),n=t.h;return[f(e),f({h:(n+120)%360,s:t.s,l:t.l}),f({h:(n+240)%360,s:t.s,l:t.l})]}function C(e){var t=f(e).toHsl(),n=t.h;return[f(e),f({h:(n+90)%360,s:t.s,l:t.l}),f({h:(n+180)%360,s:t.s,l:t.l}),f({h:(n+270)%360,s:t.s,l:t.l})]}function E(e){var t=f(e).toHsl(),n=t.h;return[f(e),f({h:(n+72)%360,s:t.s,l:t.l}),f({h:(n+216)%360,s:t.s,l:t.l})]}function k(e,t,n){t=t||6,n=n||30;var r=f(e).toHsl(),o=360/n,i=[f(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(f(r));return i}function A(e,t){t=t||6;for(var n=f(e).toHsv(),r=n.h,o=n.s,i=n.v,a=[],c=1/t;t--;)a.push(f({h:r,s:o,v:i})),i=(i+c)%1;return a}f.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:o.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:o.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:o.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=j(e),this._roundA=u(100*this._a)/100,this},toHsv:function(){var e=g(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=g(this._r,this._g,this._b),t=u(360*e.h),n=u(100*e.s),r=u(100*e.v);return 1==this._a?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=h(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=h(this._r,this._g,this._b),t=u(360*e.h),n=u(100*e.s),r=u(100*e.l);return 1==this._a?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return p(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,n,r,o){var i=[G(u(e).toString(16)),G(u(t).toString(16)),G(u(n).toString(16)),G(L(r))];if(o&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1))return i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0);return i.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:u(this._r),g:u(this._g),b:u(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+u(this._r)+", "+u(this._g)+", "+u(this._b)+")":"rgba("+u(this._r)+", "+u(this._g)+", "+u(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:u(100*X(this._r,255))+"%",g:u(100*X(this._g,255))+"%",b:u(100*X(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+u(100*X(this._r,255))+"%, "+u(100*X(this._g,255))+"%, "+u(100*X(this._b,255))+"%)":"rgba("+u(100*X(this._r,255))+"%, "+u(100*X(this._g,255))+"%, "+u(100*X(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(B[p(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+m(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=f(e);n="#"+m(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(n=this.toRgbString()),"prgb"===e&&(n=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(n=this.toHexString()),"hex3"===e&&(n=this.toHexString(!0)),"hex4"===e&&(n=this.toHex8String(!0)),"hex8"===e&&(n=this.toHex8String()),"name"===e&&(n=this.toName()),"hsl"===e&&(n=this.toHslString()),"hsv"===e&&(n=this.toHsvString()),n||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return f(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(x,arguments)},brighten:function(){return this._applyModification(S,arguments)},darken:function(){return this._applyModification(w,arguments)},desaturate:function(){return this._applyModification(y,arguments)},saturate:function(){return this._applyModification(v,arguments)},greyscale:function(){return this._applyModification(b,arguments)},spin:function(){return this._applyModification(O,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(k,arguments)},complement:function(){return this._applyCombination(P,arguments)},monochromatic:function(){return this._applyCombination(A,arguments)},splitcomplement:function(){return this._applyCombination(E,arguments)},triad:function(){return this._applyCombination(_,arguments)},tetrad:function(){return this._applyCombination(C,arguments)}},f.fromRatio=function(e,t){if("object"==typeof e){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]="a"===r?e[r]:D(e[r]));e=n}return f(e,t)},f.equals=function(e,t){return!(!e||!t)&&f(e).toRgbString()==f(t).toRgbString()},f.random=function(){return f.fromRatio({r:d(),g:d(),b:d()})},f.mix=function(e,t,n){n=0===n?0:n||50;var r=f(e).toRgb(),o=f(t).toRgb(),i=n/100;return f({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},f.readability=function(e,t){var n=f(e),r=f(t);return(o.max(n.getLuminance(),r.getLuminance())+.05)/(o.min(n.getLuminance(),r.getLuminance())+.05)},f.isReadable=function(e,t,n){var r,o,i=f.readability(e,t);switch(o=!1,(r=function(e){var t,n;t=((e=e||{level:"AA",size:"small"}).level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),"AA"!==t&&"AAA"!==t&&(t="AA");"small"!==n&&"large"!==n&&(n="small");return{level:t,size:n}}(n)).level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7}return o},f.mostReadable=function(e,t,n){var r,o,i,a,c=null,u=0;o=(n=n||{}).includeFallbackColors,i=n.level,a=n.size;for(var s=0;s<t.length;s++)(r=f.readability(e,t[s]))>u&&(u=r,c=f(t[s]));return f.isReadable(e,c,{level:i,size:a})||!o?c:(n.includeFallbackColors=!1,f.mostReadable(e,["#fff","#000"],n))};var M=f.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},B=f.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(M);function j(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function X(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var n=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=s(t,l(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),o.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function I(e){return s(1,l(0,e))}function Y(e){return parseInt(e,16)}function G(e){return 1==e.length?"0"+e:""+e}function D(e){return e<=1&&(e=100*e+"%"),e}function L(e){return o.round(255*parseFloat(e)).toString(16)}function T(e){return Y(e)/255}var N,F,R,z=(F="[\\s|\\(]+("+(N="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+N+")[,|\\s]+("+N+")\\s*\\)?",R="[\\s|\\(]+("+N+")[,|\\s]+("+N+")[,|\\s]+("+N+")[,|\\s]+("+N+")\\s*\\)?",{CSS_UNIT:new RegExp(N),rgb:new RegExp("rgb"+F),rgba:new RegExp("rgba"+R),hsl:new RegExp("hsl"+F),hsla:new RegExp("hsla"+R),hsv:new RegExp("hsv"+F),hsva:new RegExp("hsva"+R),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function H(e){return!!z.CSS_UNIT.exec(e)}e.exports?e.exports=f:void 0===(r=function(){return f}.call(t,n,t,e))||(e.exports=r)}(Math)},function(e,t,n){var r=n(18);function o(e){var t=e.getCurrentPage();this.matrixCache=t.getMatrix().slice(0),this._zoom(e),t.updateStatus()}function i(e){e.getCurrentPage().updateMatrix(this.matrixCache)}r.registerCommand("zoomTo",{_zoom:function(e){e.getCurrentPage().zoom(Number(this.zoom))},queue:!1,execute:o,back:i}),r.registerCommand("zoomIn",{enable:function(e){var t=e.getCurrentPage(),n=t.getMaxZoom(),r=t.getMinZoom(),o=t.getZoom();return o<n||o===r},_zoom:function(e){var t=e.getCurrentPage(),n=e.get("_command"),r=t.getZoom(),o=t.getMaxZoom(),i=r+n.zoomDelta;i>=o&&(i=o),t.zoom(i)},queue:!1,execute:o,back:i,shortcutCodes:[["metaKey","="],["ctrlKey","="]]}),r.registerCommand("zoomOut",{enable:function(e){var t=e.getCurrentPage(),n=t.getMaxZoom(),r=t.getMinZoom(),o=t.getZoom();return o>r||o===n},_zoom:function(e){var t=e.getCurrentPage(),n=t.getZoom(),r=t.getMinZoom(),o=n-e.get("_command").zoomDelta;o<=r&&(o=r),t.zoom(o)},queue:!1,execute:o,back:i,shortcutCodes:[["metaKey","-"],["ctrlKey","-"]]}),r.registerCommand("autoZoom",{enable:function(){return!0},_zoom:function(e){e.getCurrentPage().autoZoom()},queue:!1,execute:o,back:i}),r.registerCommand("resetZoom",{enable:function(){return!0},_zoom:function(e){e.getCurrentPage().resetZoom()},queue:!1,execute:o,back:i,shortcutCodes:[["metaKey","0"],["ctrlKey","0"]]})},function(e,t,n){var r=n(18);r.registerCommand("collapseExpand",{getItem:function(e){var t=e.getCurrentPage(),n=t.getGraph();return this.itemId?n.find(this.itemId):t.getSelected()[0]},enable:function(e){var t=this.getItem(e);return t&&!1!==t.collapseExpand&&t.getChildren().length>0},execute:function(e){var t=e.getCurrentPage(),n=t.getGraph(),r=this.getItem(e);r.getModel().collapsed?(n.update(r,{collapsed:!1}),r.getInnerEdges&&r.getInnerEdges().forEach(function(e){e.update()}),this.toCollapsed=!1):(n.update(r,{collapsed:!0}),this.toCollapsed=!0),t.clearSelected(),t.setSelected(r,!0),1===this.executeTimes&&(this.itemId=r.id)},back:function(e){var t=e.getCurrentPage(),n=t.getGraph(),r=this.getItem(e);this.toCollapsed?n.update(r,{collapsed:!1}):n.update(r,{collapsed:!0}),t.clearSelected(),t.setSelected(r,!0)},shortcutCodes:[["metaKey","/"],["ctrlKey","/"]]}),r.registerCommand("collapse",{enable:function(e){var t=this.getItem(e);return t&&!1!==t.collapseExpand&&t.getChildren().length>0&&!t.getModel().collapsed}},"collapseExpand"),r.registerCommand("expand",{enable:function(e){var t=this.getItem(e);return t&&!1!==t.collapseExpand&&t.getChildren().length>0&&t.getModel().collapsed}},"collapseExpand")},function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(4),i={INIT:"_initGraph"};i.AUGMENT={_initGraph:function(){var e=this.get("graph"),t=new(this.get("graphConstructor"))(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({page:this},e));t.draw(),this.set("_graph",t)},changeMode:function(e){this.get("_graph").changeMode(e)},updateMatrix:function(e){this.get("_graph").updateMatrix(e)},getMode:function(){return this.get("_graph").get("mode")},getMatrix:function(){return this.get("_graph").getMatrix()},getZoom:function(){return this.get("_graph").getMatrix()[0]},getMaxZoom:function(){return this.get("_graph").get("maxZoom")},getMinZoom:function(){return this.get("_graph").get("minZoom")},getGraph:function(){return this.get("_graph")},getItems:function(){return this.get("_graph").getItems()},getNodes:function(){return this.get("_graph").getNodes()},translate:function(e,t){return this.get("_graph").translate(e,t)},getEdges:function(){return this.get("_graph").getEdges()},getGroups:function(){return this.get("_graph").getGroups()},render:function(){return this.get("_graph").render(),this},add:function(e,t){return this.get("_graph").add(e,t),this},focusPointByDom:function(e){return this.get("_graph").focusPointByDom(e),this},focusPoint:function(e){return this.get("_graph").focusPoint(e),this},find:function(e){return this.get("_graph").find(e)},focus:function(e){var t=this.get("_graph"),n=t.find(e);if(n){var r=n.getCenter();t.focusPoint(r)}return this},save:function(){return this.get("_graph").save()},read:function(e){this.get("_graph").read(e)},clear:function(){this.get("_graph").clear()},remove:function(e){return this.get("_graph").remove(e),this},update:function(e,t){return this.get("_graph").update(e,t),this},zoom:function(e,t){return this.get("_graph").zoom(e,t),this},getDomPoint:function(e){return this.get("_graph").getDomPoint(e)},getPoint:function(e){return this.get("_graph").getPoint(e)},zoomByDom:function(e,t){var n=this.get("_graph"),r=n.getPoint(e);return n.zoom(r,t),this},autoZoom:function(){return this.get("_graph").autoZoom(),this},resetZoom:function(){var e=this.get("_graph"),t=e.getWidth(),n=e.getHeight();return e.zoomByDom({x:t/2,y:n/2},1),this},css:function(e){var t=this.get("_graph").getMouseEventWrapper();o.modifyCSS(t,e)},setCapture:function(e){this.get("_graph").getRootGroup().set("capture",e)},destroy:function(){this.get("_graph").destroy()},delete:function(){var e=this.getSelected(),t=this.get("_graph");o.each(e,function(e){t.remove(e)})}},e.exports=i},function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(36),i=n(4),a={CFG:{grid:void 0},INIT:"_initGrid"};a.AUGMENT={_initGrid:function(){var e=this.get("grid"),t=this.get("_graph");if(e){var n=new o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({page:this,graph:t},e));this.setController("grid",n)}},showGrid:function(e){var t=this.get("_graph"),n=this.getController("grid");n||(e?i.isObject(e)&&this.set("grid",e):this.set("grid",!0),this._initGrid()),(n=this.getController("grid")).show(),t.draw()},hideGrid:function(){var e=this.get("_graph"),t=this.getController("grid");t&&t.hide(),e.draw()},getGridCell:function(){return this.getController("grid").getCell()}},e.exports=a},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=n(9),s=n(14),l=n(4),d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,a(t).apply(this,arguments))}var n,r,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,u),n=t,(r=[{key:"getDefaultCfg",value:function(){return{cell:16,line:s.gridStyle,type:"point",visible:!0}}},{key:"init",value:function(){this._draw(),this._onViewPortChange(),!this.visible&&this.hide()}},{key:"_onViewPortChange",value:function(){var e=this,t=this.graph;t.on("afterviewportchange",function(){e.update()}),t.on("beforechangesize",function(){e.update()})}},{key:"_draw",value:function(){var e=this.graph,t=this._getPath(),n=e.getRootGroup(),r=l.mix({},this.line),o=e.getMatrix(),i=this.type,a="line"===i?1/o[0]:2/o[0];"point"===i&&(r.lineDash=null),r.lineWidth=a,r.path=t;var c=n.addShape("path",{attrs:r,capture:!1,zIndex:0});l.toBack(c,n),this.gridEl=c}},{key:"show",value:function(){this.gridEl.show(),this.visible=!0}},{key:"hide",value:function(){this.gridEl.hide(),this.visible=!1}},{key:"_getLinePath",value:function(){for(var e=this.graph,t=e.get("width"),n=e.get("height"),r=e.getPoint({x:0,y:0}),o=e.getPoint({x:t,y:n}),i=this.cell,a=Math.ceil(r.x/i)*i,c=Math.ceil(r.y/i)*i,u=[],s=0;s<=o.x-r.x;s+=i){var l=a+s;u.push(["M",l,r.y]),u.push(["L",l,o.y])}for(var d=0;d<=o.y-r.y;d+=i){var f=c+d;u.push(["M",r.x,f]),u.push(["L",o.x,f])}return u}},{key:"_getPointPath",value:function(){for(var e=this.graph,t=e.get("width"),n=e.get("height"),r=e.getPoint({x:0,y:0}),o=2/e.getMatrix()[0],i=e.getPoint({x:t,y:n}),a=this.getCell(),c=Math.ceil(r.x/a)*a,u=Math.ceil(r.y/a)*a,s=[],l=0;l<=i.x-r.x;l+=a)for(var d=c+l,f=0;f<=i.y-r.y;f+=a){var h=u+f;s.push(["M",d,h]),s.push(["L",d+o,h])}return s}},{key:"getCell",value:function(){var e=this.cell,t=this.graph.getMatrix()[0];return e*t<9.6?9.6/t:e}},{key:"_getPath",value:function(){var e=this.type;return this["_get"+l.upperFirst(e)+"Path"]()}},{key:"update",value:function(e){l.mix(this,e);var t=this._getPath(),n=this.gridEl,r=this.graph.getMatrix(),o="line"===this.type?1/r[0]:2/r[0];n.attr("lineWidth",o),n.attr("path",t)}},{key:"destroy",value:function(){var e=this.gridEl;e&&e.remove()}}])&&o(n.prototype,r),d&&o(n,d),t}();e.exports=d},function(e,t){var n={};function r(e,t,n){e.on(n,function(e){t.emit(n,e)}),e.on("node:"+n,function(e){t.emit("node:"+n,e)}),e.on("edge:"+n,function(e){t.emit("edge:"+n,e)}),e.on("group:"+n,function(e){t.emit("group:"+n,e)}),e.on("anchor:"+n,function(e){t.emit("anchor:"+n,e)})}n.INIT="_initEvent",n.AUGMENT={_initEvent:function(){var e=this,t=this.get("_graph");r(t,this,"click"),r(t,this,"dblclick"),r(t,this,"mouseenter"),r(t,this,"mouseleave"),r(t,this,"mousedown"),r(t,this,"mouseup"),r(t,this,"contextmenu"),t.on("keydown",function(t){e.emit("keydown",t)}),t.on("keyup",function(t){e.emit("keyup",t)}),t.on("beforechange",function(t){e.emit("beforechange",t)}),t.on("afterchange",function(t){e.emit("afterchange",t)}),t.on("afterviewportchange",function(t){e.emit("afterviewportchange",t),t.updateMatrix[0]!==t.originMatrix[0]&&e.emit("afterzoom",t)}),t.on("beforeviewportchange",function(t){e.emit("beforeviewportchange",t),t.updateMatrix[0]!==t.originMatrix[0]&&e.emit("beforezoom",t)})}},e.exports=n},function(e,t,n){var r=n(4),o={CFG:{selectable:!0,multiSelectable:!0,_selectedCache:{}},INIT:"_initSelected"};o.AUGMENT={_initSelected:function(){var e=this,t=this.get("_graph");t.on("afteritemdraw",function(t){var n=t.item;n.isSelected&&e.setItemSelected(n)}),t.on("beforeitemdestroy",function(t){e.clearItemSelected(t.item)})},setItemSelected:function(e){var t=this.get("_graph").getShapeObj(e).getSelectedStyle(e),n=e.getKeyShape();this.get("_selectedCache")[e.id]=e,t&&n.attr(t),e.isEdge&&(e.startArrow&&e.startArrow.attr({fill:t.stroke}),e.endArrow&&e.endArrow.attr({fill:t.stroke}))},clearItemSelected:function(e){var t=this.get("_graph"),n=e.getKeyShape(),o=t.getShapeObj(e),i=o.getStyle(e),a=o.getSelectedStyle(e),c=this.get("_selectedCache"),u=r.getContrast(i,a);n.attr(u),e.isEdge&&(e.startArrow&&e.startArrow.attr({fill:u.stroke}),e.endArrow&&e.endArrow.attr({fill:u.stroke})),delete c[e.id]},setSelected:function(e,t){var n,o=this,i=this.get("selectable"),a=this.get("_graph");i&&(n=r.isArray(e)?e:[e],r.each(n,function(e){r.isString(e)&&(e=a.find(e)),e&&!e.destroyed&&(t?(o.emit("beforeitemselected",{item:e}),o.setItemSelected(e),o.emit("afteritemselected",{item:e})):(o.emit("beforeitemunselected",{item:e}),o.clearItemSelected(e),o.emit("afteritemunselected",{item:e})),e.isSelected=t,o.updateStatus(),a.draw())}))},getSelected:function(){var e=this.get("_selectedCache");return r.objectToValues(e)},clearSelected:function(){var e=this,t=this.get("_graph"),n=this.get("_selectedCache");r.each(n,function(t){t.isSelected&&e.setSelected(t,!1)}),t.draw()}},e.exports=o},function(e,t,n){var r=n(4),o={CFG:{activeable:!0,_activedCache:{}},INIT:"_initActived"};o.AUGMENT={_initActived:function(){var e=this,t=this.get("_graph");t.on("afteritemdraw",function(t){var n=t.item;n.isActived&&e.setItemActived(n)}),t.on("beforeitemdestroy",function(t){e.clearItemActived(t.item)})},setItemActived:function(e){var t=this.get("_graph").getShapeObj(e),n=this.get("_activedCache"),r=t.getActivedStyle(e),o=e.getKeyShape();n[e.id]=e,r&&o.attr(r),e.isEdge&&(e.startArrow&&e.startArrow.attr({fill:r.stroke}),e.endArrow&&e.endArrow.attr({fill:r.stroke}))},clearItemActived:function(e){var t=this.get("_graph"),n=e.getKeyShape(),o=t.getShapeObj(e),i=o.getStyle(e),a=this.get("_activedCache"),c=o.getActivedStyle(e),u=r.getContrast(i,c);n.attr(u),e.isEdge&&(e.startArrow&&e.startArrow.attr({fill:u.stroke}),e.endArrow&&e.endArrow.attr({fill:u.stroke})),delete a[e.id]},setActived:function(e,t){var n,o=this,i=this.get("activeable"),a=this.get("_graph");i&&(n=r.isArray(e)?e:[e],r.each(n,function(e){r.isString(e)&&(e=a.find(e)),e&&!e.destroyed&&(t?(o.emit("beforeitemactived",{item:e}),o.setItemActived(e),o.emit("afteritemactived",{item:e})):(o.emit("beforeitemunactived",{item:e}),o.clearItemActived(e),o.emit("afteritemunactived",{item:e})),e.isActived=t)}),a.draw())},getActived:function(){var e=this.get("_activedCache");return r.objectToValues(e)},clearActived:function(){var e=this,t=this.get("_graph"),n=this.get("_activedCache");r.each(n,function(t){t.isActived&&e.setActived(t,!1)}),t.draw()}},e.exports=o},function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(41),i={CFG:{align:{}},INIT:"_initAlign"};i.AUGMENT={_initAlign:function(){var e=this.get("align"),t=this.get("_graph"),n=new o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({flow:this,graph:t},e));this.setController("align",n)},align:function(e,t,n){return this.getController("align").align(e,t,n)},clearAlignLine:function(){return this.getController("align").clearAlignLine()}},e.exports=i},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=n(9),s=n(14),l=n(4);function d(e,t){return{line:e,point:t,dis:l.pointLineDistance(e[0],e[1],e[2],e[3],t.x,t.y)}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,a(t).apply(this,arguments))}var n,r,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,u),n=t,(r=[{key:"getDefaultCfg",value:function(){return{line:s.alignLineStyle,item:!0,grid:!1,tolerance:5,_horizontalLines:{},_verticalLines:{},_alignLines:[]}}},{key:"init",value:function(){this.item&&this._cacheBoxLine()}},{key:"_cacheBoxLine",value:function(){var e=this.graph,t=this._horizontalLines,n=this._verticalLines,r=this.item;e.on("afteritemdraw",function(e){var o=e.item;if(!l.isEdge(o)){var i=o.getBBox();!0===r||"horizontal"===r?(t[o.id+"tltr"]=[i.minX,i.minY,i.maxX,i.minY,o],t[o.id+"lcrc"]=[i.minX,i.centerY,i.maxX,i.centerY,o],t[o.id+"blbr"]=[i.minX,i.maxY,i.maxX,i.maxY,o]):"center"===r&&(t[o.id+"lcrc"]=[i.minX,i.centerY,i.maxX,i.centerY,o]),!0===r||"vertical"===r?(n[o.id+"tlbl"]=[i.minX,i.minY,i.minX,i.maxY,o],n[o.id+"tcbc"]=[i.centerX,i.minY,i.centerX,i.maxY,o],n[o.id+"trbr"]=[i.maxX,i.minY,i.maxX,i.maxY,o]):"center"===r&&(n[o.id+"tcbc"]=[i.centerX,i.minY,i.centerX,i.maxY,o])}}),e.on("beforeitemdestroy",function(e){var r=e.item;delete t[r.id+"tltr"],delete t[r.id+"lcrc"],delete t[r.id+"blbr"],delete n[r.id+"tlbl"],delete n[r.id+"tcbc"],delete n[r.id+"trbr"]})}},{key:"align",value:function(e,t){var n=l.mix({},e),r=this.flow.getController("grid");return this.grid&&r&&r.visible&&this._gridAlign(e,t),this.item&&this._itemAlign(e,t,n),e}},{key:"_gridAlign",value:function(e,t){var n=this.flow,r=this.grid,o=n.getGridCell();if("cc"===r){var i=Math.round((e.x+t.width/2)/o)*o,a=Math.round((e.y+t.height/2)/o)*o;e.x=i-t.width/2,e.y=a-t.height/2}else e.x=Math.round(e.x/o)*o,e.y=Math.round(e.y/o)*o}},{key:"_itemAlign",value:function(e,t,n){var r=this._horizontalLines,o=this._verticalLines,i=this.tolerance,a={x:n.x+t.width/2,y:n.y},c={x:n.x+t.width/2,y:n.y+t.height/2},u={x:n.x+t.width/2,y:n.y+t.height},s={x:n.x,y:n.y+t.height/2},f={x:n.x+t.width,y:n.y+t.height/2},h=[],g=[],p=null;if(this.clearAlignLine(),l.each(r,function(e){e[4].isVisible()&&(h.push(d(e,a)),h.push(d(e,c)),h.push(d(e,u)))}),l.each(o,function(e){e[4].isVisible()&&(g.push(d(e,s)),g.push(d(e,c)),g.push(d(e,f)))}),h.sort(function(e,t){return e.dis-t.dis}),g.sort(function(e,t){return e.dis-t.dis}),0!==h.length&&h[0].dis<i){e.y=h[0].line[1]-h[0].point.y+n.y,p={type:"item",horizontals:[h[0]]};for(var m=1;m<3;m++)h[0].dis===h[m].dis&&p.horizontals.push(h[m])}if(0!==g.length&&g[0].dis<i){e.x=g[0].line[0]-g[0].point.x+n.x,p?p.verticals=[g[0]]:p={type:"item",verticals:[g[0]]};for(var y=1;y<3;y++)g[0].dis===g[y].dis&&p.verticals.push(g[y])}p&&(p.bbox=t,this._addAlignLine(p))}},{key:"clearAlignLine",value:function(){var e=this._alignLines;l.each(e,function(e){e.remove()}),this._alignLines=[]}},{key:"_addAlignLine",value:function(e){var t=e.bbox,n=this.graph.getRootGroup(),r=this.line,o=this._alignLines;"item"===e.type&&(e.horizontals&&l.each(e.horizontals,function(e){var i,a,c=e.line,u=e.point,s=(c[0]+c[2])/2;u.x<s?(i=u.x-t.width/2,a=Math.max(c[0],c[2])):(i=u.x+t.width/2,a=Math.min(c[0],c[2]));var d=n.addShape("line",{attrs:l.mix({x1:i,y1:c[1],x2:a,y2:c[1]},r),capture:!1});o.push(d)}),e.verticals&&l.each(e.verticals,function(e){var i,a,c=e.line,u=e.point,s=(c[1]+c[3])/2;u.y<s?(i=u.y-t.height/2,a=Math.max(c[1],c[3])):(i=u.y+t.height/2,a=Math.min(c[1],c[3]));var d=n.addShape("line",{attrs:l.mix({x1:c[0],y1:i,x2:c[0],y2:a},r),capture:!1});o.push(d)}))}}])&&o(n.prototype,r),f&&o(n,f),t}();e.exports=f},function(e,t,n){var r=n(4),o={CFG:{labelEditable:!1},INIT:"_initLabelEditor"};o.AUGMENT={_initLabelEditor:function(){var e=this;if(this.get("labelEditable")){var t=this.getGraph(),n=r.createDOM('<div contenteditable="true" role="textbox" tabindex="1" class="g6-label-editor"></div>',{position:"absolute",visibility:"hidden","z-index":"2",padding:"0px 2px 0px 0px",resize:"none",width:"auto",height:"auto",outline:"none",border:"1px solid #1890FF","transform-origin":"left top","max-width":"320px",background:"white","box-sizing":"content-box"});t.getGraphContainer().appendChild(n),n.on("blur",function(n){n.stopPropagation(),!t.destroyed&&e.endEditLabel()}),n.on("keydown",function(t){t.stopPropagation();var n=r.getKeyboradKey(t);(t.metaKey&&"s"===n||t.ctrlKey&&"s"===n)&&t.preventDefault(),"Enter"!==n&&"Escape"!==n||e.endEditLabel()}),this.set("labelTextArea",n),t.on("beforeviewportchange",function(){n.focusItem&&e.setLabelEditorBeginPosition(n.focusItem)})}},_getLabelTextAreaBox:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0];t&&e.attr("text",t);var o=this.getGraph().getRootGroup(),i=r.getBBox(e,o);return{minX:i.minX-n[1],minY:i.minY-n[0],maxX:i.maxX+n[1],maxY:i.maxY+n[0]}},setLabelEditorBeginPosition:function(e){var t=this.get("labelTextArea"),n=e.getLabel();if(n){var o=this._getLabelTextAreaBox(n),i=n.attr("lineHeight"),a=n.attr("fontSize"),c={x:o.minX,y:o.minY-i/4+a/4-1,width:o.maxX-o.minX,height:o.maxY-o.minY};t.css({top:c.y+"px",left:c.x+"px"}),t.labelPoint=c}else{var u=this.getGraph().getRootGroup(),s=e.getKeyShape(),l=r.getBBox(s,u),d={x:l.minY+(l.maxY-l.minY-t.height())/2,y:(l.minX+l.maxX)/2};t.css({top:d.x+"px",left:d.y+"px"}),t.labelPoint=d}},beginEditLabel:function(e){var t=this.get("labelTextArea"),n=this.getGraph();if(r.isString(e)&&(e=n.find(e)),e&&!e.destroyed&&t){this.setSignal("preventWheelPan",!0);var o=e.getModel(),i=e.getLabel(),a=n.getZoom();if(t.focusItem=e,i){var c=i.attr("lineHeight"),u=this._getLabelTextAreaBox(i),s=(u.maxX-u.minX)/a,l=(u.maxY-u.minY+c/4)/a;t.innerHTML=o.label,t.innerHTML=o.label,t.css({"min-width":s+"px","min-height":l+"px",visibility:"visible","font-family":i.attr("fontFamily"),"line-height":c+"px","font-size":i.attr("fontSize")+"px",transform:"scale("+a+")"})}else t.innerHTML="",t.css({"min-width":"auto","min-height":"auto"});this.setLabelEditorBeginPosition(e),t.css({visibility:"visible"}),t.focus(),document.execCommand("selectAll",!1,null)}},endEditLabel:function(){var e=this.get("labelTextArea");if(this.setSignal("preventWheelPan",!1),e){var t=e.focusItem;if(t){var n=t.getModel(),r=this.editor;n.label!==e.textContent&&r.executeCommand("update",{action:"updateLabel",itemId:t.id,updateModel:{label:e.textContent}}),e.hide(),e.focusItem=void 0,this.focusGraphWrapper()}}}},e.exports=o},function(e,t){var n={AUGMENT:{updateStatus:function(){var e,t=this.getSelected();0===t.length?e="canvas-selected":1===t.length?t[0].isNode?e="node-selected":t[0].isEdge?e="edge-selected":t[0].isGroup&&(e="group-selected"):e="multi-selected",this.emit("statuschange",{status:e})}}};e.exports=n},function(e,t,n){n(45),n(46),n(47),n(48),n(49),n(50),n(51),n(52),n(53),n(54),n(55),n(56),n(57),n(58),n(59),n(60),n(61),n(62)},function(e,t,n){var r=n(3),o=n(4);r.registerBehaviour("panBlank",o.getPanCanvasBehaviour(!0))},function(e,t,n){n(3).registerBehaviour("hoverButton",function(e){e.getGraph().behaviourOn("mouseenter",function(t){e.getSignal("panningItem")||t.shape&&t.shape.isButton&&e.css({cursor:"pointer"})})})},function(e,t,n){var r=n(3),o=n(4);r.registerBehaviour("panCanvas",o.getPanCanvasBehaviour())},function(e,t,n){var r=n(3),o=n(14),i=n(4);r.registerBehaviour("wheelChangeViewport",function(e){var t,n=e.getGraph();n.behaviourOn("wheel",function(e){e.domEvent.preventDefault()}),n.behaviourOn("wheel",i.throttle(function(r){if(e.getSignal("preventWheelPan"))return;var a=r.domEvent,c=e.getSignal("wheelZoom");t||e.setCapture(!1);if(c){var u=a.wheelDelta;if(Math.abs(u)>10){var s=n.getMatrix()[0];u>0?n.zoom({x:r.x,y:r.y},1.05*s):n.zoom({x:r.x,y:r.y},s*(1/1.05))}}else{var l=[],d=n.getMatrix();i.mat3.translate(l,d,[a.wheelDeltaX*o.wheelPanRatio,a.wheelDeltaY*o.wheelPanRatio]),e.translateLimt(l)&&n.updateMatrix(l)}t&&clearTimeout(t),t=setTimeout(function(){e.setCapture(!0),t=void 0},50)},16))})},function(e,t,n){n(3).registerBehaviour("processPanItem",function(e){var t=e.getGraph();t.behaviourOn("mousemove",function(n){var r=e.get("panItemDelegation");if(r){var o=e.get("panItemStartPoint"),i=e.get("panItemStartBox"),a=n.x-o.x,c=n.y-o.y,u=e.align({x:i.minX+a,y:i.minY+c},{width:i.width,height:i.height});r.attr({x:u.x,y:u.y}),t.emit("itempanning",n),t.draw()}})})},function(e,t,n){n(3).registerBehaviour("startPanItem",function(e){var t=e.getGraph(),n=t.getRootGroup();t.behaviourOn("dragstart",function(r){if(2!==r.button&&r.item&&(r.item.isNode||r.item.isGroup)){var o,i=r.item;if((o=(o=i.isSelected?e.getSelected():[i]).filter(function(e){return e.isNode||e.isGroup}))[0]&&!1!==o[0].dragable){t.emit("beforepanitem",{items:o}),t.emit("beforeshowdelegation",{items:o});var a=e.getDelegation(o,n),c=a.getBBox();e.setSignal("panningItem",!0),e.set("panItems",o),e.set("panItemDelegation",a),e.set("panItemStartBox",c),e.set("panItemStartPoint",{x:r.x,y:r.y}),t.draw()}}})})},function(e,t,n){n(3).registerBehaviour("endPanItem",function(e){var t=e.getGraph();t.behaviourOn("panitemend",function(){var n=e.get("panItemDelegation");n&&(n.remove(),t.draw()),e.setSignal("panningItem",!1),e.set("panItemDelegation",void 0),e.set("panItemStartPoint",void 0),e.set("panItemStartBox",void 0),e.set("panItems",void 0)}),t.behaviourOn("canvas:mouseleave",function(){e.get("panItems")&&(e.clearAlignLine(),t.emit("panitemend"))})})},function(e,t,n){n(3).registerBehaviour("dblclickItemEditLabel",function(e){e.getGraph().behaviourOn("node:dblclick",function(t){t.shape&&!t.shape.isButton&&e.beginEditLabel(t.item)})})},function(e,t,n){n(3).registerBehaviour("clickCanvasSelected",function(e){var t=e.getGraph();t.behaviourOn("click",function(t){t.shape||(e.clearSelected(),e.clearActived(),e.updateStatus())}),t.behaviourOn("contextmenu",function(t){t.shape||(e.clearSelected(),e.clearActived(),e.updateStatus())})})},function(e,t,n){n(3).registerBehaviour("clickCollapsedButton",function(e){var t=e.getGraph();t.behaviourOn("click",function(n){var r=n.item,o=n.shape;if(r&&o&&o.isCollapsedButton){var i=e.editor;i?i.executeCommand("collapseExpand",{itemId:r.id}):t.update(r,{collapsed:!0})}})})},function(e,t,n){n(3).registerBehaviour("clickEdgeSelected",function(e){e.getGraph().behaviourOn("edge:click",function(t){e.get("multiSelectable")&&!0===e.getSignal("shiftKeyDown")?e.setSelected(t.item.id,!0):(e.clearActived(),e.clearSelected(),e.setSelected(t.item.id,!0))})})},function(e,t,n){n(3).registerBehaviour("clickExpandedButton",function(e){var t=e.getGraph();t.behaviourOn("click",function(n){var r=n.item,o=n.shape;if(r&&o&&o.isExpandedButton){var i=e.editor;i?i.executeCommand("collapseExpand",{itemId:r.id}):t.update(r,{collapsed:!1})}})})},function(e,t,n){n(3).registerBehaviour("clickGroupSelected",function(e){e.getGraph().behaviourOn("group:click",function(t){e.get("multiSelectable")&&!0===e.getSignal("shiftKeyDown")?e.setSelected(t.item.id,!0):(e.clearActived(),e.clearSelected(),e.setSelected(t.item.id,!0))})})},function(e,t,n){n(3).registerBehaviour("clickNodeSelected",function(e){e.getGraph().behaviourOn("node:click",function(t){e.get("multiSelectable")&&!0===e.getSignal("shiftKeyDown")?e.setSelected(t.item.id,!0):(e.clearActived(),e.clearSelected(),e.setSelected(t.item.id,!0))})})},function(e,t,n){n(3).registerBehaviour("hoverNodeActived",function(e){var t,n=e.getGraph();n.behaviourOn("node:mouseenter",function(n){!1!==n.item.getShapeObj().panAble&&e.css({cursor:"move"}),e.getSignal("panningItem")||e.getSignal("dragEdge")||n.item&&n.item.isSelected||(t=n.item,e.setActived(t,!0))}),n.behaviourOn("node:mouseleave",function(n){var r=n.toShape;t&&(r&&r.isAnchor&&r.getItem()===t||e.getSignal("dragEdge")||(t.isSelected||e.setActived(t,!1),t=void 0))})})},function(e,t,n){n(3).registerBehaviour("hoverGroupActived",function(e){var t=e.getGraph();t.behaviourOn("mouseenter",function(t){e.getSignal("panningItem")||t.item&&t.item.isSelected||e.getSignal("dragEdge")||t.shape&&t.shape.isGroupKeyShape&&(e.css({cursor:"move"}),e.setActived(t.item,!0))}),t.behaviourOn("group:mouseleave",function(t){t.item.isActived&&!t.item.isSelected&&e.setActived(t.item,!1)})})},function(e,t,n){n(3).registerBehaviour("hoverEdgeActived",function(e){var t=e.getGraph();t.behaviourOn("edge:mouseenter",function(t){e.getSignal("panningItem")||t.item&&t.item.isSelected||e.getSignal("dragEdge")||e.setActived(t.item,!0)}),t.behaviourOn("edge:mouseleave",function(t){e.setActived(t.item,!1)})})},function(e,t,n){n(3).registerBehaviour("keydownCmdWheelZoom",function(e){var t=e.getGraph();t.behaviourOn("keydown",function(t){91===t.domEvent.keyCode&&e.setSignal("wheelZoom",!0)}),t.behaviourOn("keyup",function(t){91===t.domEvent.keyCode&&e.setSignal("wheelZoom",!1)})})},function(e,t,n){var r=n(22);e.exports={dragingEdgeEndPoint:function(e){var t=e.endPointType,n=e.edgeModel,r=e.graph,o=e.delegation,i=e.startPoint,a=e.ev,c=e.source,u=e.target,s=a.item,l="source"===t?[a,i]:[i,a];s&&("source"===t?u=s:c=s);var d=r.getShapeObj("edge",n).getPathByPoints({points:l,source:c,target:u});o.attr("path",d),r.draw()},panGroup:function(e,t,n,o){var i=e.getModel();r.traverseTree(e,function(r){if("node"===r.type){var i=r.getModel();o.update(r,{x:i.x+t,y:i.y+n})}e.getCrossEdges&&e.getCrossEdges().forEach(function(e){e.update()})},function(e){return"group"===e.type?e.getChildren():[]}),o.update(e,{x:i.x+t,y:i.y+n})},dropUpdateEdge:function(e){var t=e.ev,n=e.endPointType,r=e.model,o=e.diagram,i=o.get("noEndEdge"),a=o.get("linkAnchor"),c=o.get("linkNode"),u=t.item,s=t.shape,l=t.x,d=t.y;if(o.getGraph().emit("beforedropedge"),s){if(a&&s.isAnchor&&s.hasHotspot){var f=s,h=f.getItem();return"target"===n?(r.target=h.id,r.targetAnchor=f.getIndex(),!0):(r.source=h.id,r.sourceAnchor=f.getIndex(),!0)}if(c&&u&&u.isNode)return"target"===n?(r.target=u.id,!0):(r.source=u.id,!0)}else if(i)return"target"===n?(r.target={x:l,y:d},!0):(r.source={x:l,y:d},!0);return!1}}},function(e,t){e.exports={rectRectCrossAlgorithm:function(e,t){var n=Math.max(e.minX,t.minX),r=Math.max(e.minY,t.minY),o=Math.min(e.maxX,t.maxX),i=Math.min(e.maxY,t.maxY);return n>o||r>i},euclideanDistance:{pointPoint:function(e,t){var n=Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2);return Math.sqrt(n)}}}},function(e,t,n){var r={},o=n(2);r.AUGMENT={changeAddEdgeModel:function(e){this.set("addEdgeModel",e)},cancelAdd:function(){this.set("addType",void 0),this.set("addModel",void 0),this.changeMode("default")},beginAdd:function(e,t){this.set("addType",e),this.set("addModel",t),this.changeMode("add")},endAdd:function(){this.set("addType",void 0),this.set("addModel",void 0),this.changeMode("default")},delete:function(){var e=this.getSelected(),t=this.get("_graph");o.each(e,function(e){t.remove(e)})},toBack:function(){var e=this.getSelected(),t=this.get("_graph");e.sort(function(e,t){var n=e.getGraphicGroup(),r=t.getGraphicGroup();return o.getIndex(r)-o.getIndex(n)}),e.forEach(function(e){t.toBack(e)})},toFront:function(){var e=this.getSelected(),t=this.get("_graph");e.sort(function(e,t){var n=e.getGraphicGroup(),r=t.getGraphicGroup();return o.getIndex(n)-o.getIndex(r)}),e.forEach(function(e){t.toFront(e)})},addGroup:function(e){var t,n=this.get("_graph"),r=this.getSelected(),i=!0;if(0!==r.length){e||(e={label:"新建分组"}),o.setId(e),n.add("group",e),n.toFront(e.id);var a=n.find(e.id);if(r.forEach(function(e){var n=e.getParent();n&&(t?t!==n&&(i=!1):t=n)}),i){t&&(e.parent=t.getModel().id),r.forEach(function(t){n.update(t,{parent:e.id})});var c=a.getInnerEdges();a.deepEach(function(e){n.toFront(e)}),c.forEach(function(e){n.toFront(e)})}else console.warn("add group elements must have the same parent")}},unGroup:function(){var e=this.get("_graph"),t=this.getSelected(),n=t[0];1===t.length&&o.isGroup(n)&&(n.getChildren().forEach(function(t){e.update(t,{parent:void 0}),t.collapsedParent||t.show(),t.isGroup&&t.deepEach(function(e){e.collapsedParent||e.show()})}),e.remove(n))},newGroup:function(e){this.addGroup(e)}},e.exports=r},function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(67),i=n(2),a={CFG:{anchor:{}},INIT:"_initAnchor"};a.AUGMENT={_initAnchor:function(){var e=this.get("anchor"),t=this.get("_graph");if(e){var n=new o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({diagram:this,graph:t},e));this.setController("anchor",n)}},showAnchor:function(e,t,n){this.getController("anchor").showAnchor(e,t,n)},clearAnchor:function(e){this.getController("anchor").clearAnchor(e)},setHotspotActived:function(e,t){this.getController("anchor").setHotspotActived(e,t)},hoverShowAnchor:function(e){var t=this,n=e.getAnchorPoints(),r=[];n.forEach(function(n,o){var i={anchor:n,item:e};t.emit("hovernode:beforeshowanchor",i),i.cancel||r.push(o)}),this.showAnchor(e,r)},anchorHasBeenLinked:function(e,t){var n=e.getEdges(),r=[];return n.forEach(function(t){var n=t.getModel();n.source!==e.id||i.isNil(n.sourceAnchor)||r.push(n.sourceAnchor),n.target!==e.id||i.isNil(n.targetAnchor)||r.push(n.targetAnchor)}),i.isObject(t)?-1!==r.indexOf(t.index):-1!==r.indexOf(t)},dragEdgeBeforeShowAnchor:function(e,t,n){var r=this;this.getGraph().getNodes().forEach(function(o){var i,a=[],c=o.getAnchorPoints();if(e.isNode){var u=e.getAnchorPoints();c.forEach(function(c,s){i="target"===n?{source:e,sourceAnchor:u[t],target:o,targetAnchor:c,dragEndPointType:n}:{target:e,targetAnchor:u[t],source:o,sourceAnchor:c,dragEndPointType:n},r.emit("dragedge:beforeshowanchor",i),i.cancel||a.push(s)})}else c.forEach(function(e,t){a.push(t)});o===e&&o.isAnchorShow?a.forEach(function(e){var n=o.getAnchor(e);t!==e&&n&&n.showHotspot()}):r.showAnchor(o,a,!0)})}},e.exports=a},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=n(9),d=n(5),f=n(2),h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,u(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,l),n=t,(r=[{key:"getDefaultCfg",value:function(){return{_anchorItemCache:{}}}},{key:"init",value:function(){var e=this,t=this.graph;t.on("afteritemdraw",function(t){t.item.isAnchorShow&&e.showAnchor(t.item)}),t.on("beforeitemdestroy",function(t){e._clearAnchor(t.item)}),t.on("afteritemhide",function(t){t.item.isNode&&e._clearAnchor(t.item)})}},{key:"_updateAnchor",value:function(e){var t=this.graph;e.anchorShapes.forEach(function(e){e.updatePosition()}),t.draw()}},{key:"_drawAnchor",value:function(e,t,n,r){var i=e.getAnchorPoints();this._clearAnchor(e),f.each(i,function(i,a){if(!n||-1!==n.indexOf(a)){var c,u=t.addShape("marker",{attrs:o({symbol:"circle"},d.anchorPointStyle,{x:i.x,y:i.y}),freezePoint:i,item:e,index:a,eventPreFix:"anchor",isItemChange:function(){},zIndex:d.zIndex.anchorPoint});u.toFront(),u.eventPreFix="anchor",u.showHotspot=function(){c=t.addShape("marker",{attrs:o({symbol:"circle"},d.anchorHotsoptStyle,{x:i.x,y:i.y}),freezePoint:i,capture:!1,zIndex:d.zIndex.anchorHotsopt}),e.anchorShapes.push(c),u.hasHotspot=!0,c.toFront(),u.toFront()},u.getIndex=function(){return a},u.getItem=function(){return e},u.getPoint=function(){return i},u.updatePosition=function(){var t=e.getAnchorPoints()[a];u.attr(t)},u.setActived=function(){u.attr(d.anchorPointHoverStyle)},u.clearActived=function(){u.attr(d.anchorPointStyle)},u.isAnchor=!0,u.setHotspotActived=function(e){c&&(e?c.attr(d.anchorHotsoptActivedStyle):c.attr(d.anchorHotsoptStyle))},r&&u.showHotspot(),e.anchorShapes.push(u),e.getAllAnchors=function(){return e.anchorShapes.filter(function(e){return e.isAnchor})},e.getAnchor=function(t){return e.anchorShapes.find(function(e){return e.get("index")===t})}}})}},{key:"_clearAnchor",value:function(e){e.anchorShapes&&e.anchorShapes.forEach(function(e){e.remove()}),e.anchorShapes=[]}},{key:"setHotspotActived",value:function(e,t){var n=this.diagram.getGraph();e.setHotspotActived(t),n.draw()}},{key:"showAnchor",value:function(e,t,n){if(e.isVisible()){var r=this.graph,o=this._anchorItemCache,i=r.getRootGroup();this._drawAnchor(e,i,t,n),e.isAnchorShow=!0,o[e.id]=e}}},{key:"clearAnchor",value:function(e){var t=this,n=this.graph,r=n.get("itemCache"),o=this._anchorItemCache,i=e;i=f.isObject(e)?[e]:f.isString(e)?[r[e]]:o,f.each(i,function(e){t._clearAnchor(e),e.isAnchorShow=!1,delete o[e.id]}),n.draw()}}])&&a(n.prototype,r),i&&a(n,i),t}();e.exports=h},function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(69),i={CFG:{orbit:null},INIT:"_initOrbit"};i.AUGMENT={_initOrbit:function(){var e=this.get("orbit");if(e){var t=new o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({diagram:this},e));this.setController("orbit",t)}},showOrbit:function(e){this.getController("orbit").show(e)},hideOrbit:function(){this.getController("orbit").hide()},layoutOrbit:function(e,t){this.getController("orbit").layout(e,t)}},e.exports=i},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=n(9),l=n(5),d=n(70),f=n(2),h=f.vec2,g=f.isString,p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,c(t).apply(this,arguments))}var n,r,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,s),n=t,(r=[{key:"getDefaultCfg",value:function(){return{satellite:[],satelliteCache:[]}}},{key:"init",value:function(){var e=this,t=this.satellite,n=this.diagram,r={diagram:n};n.getGraph().addBehaviour("orbit"),t.forEach(function(t){g(t)?e.satelliteCache.push(new d[t](r)):e.satelliteCache.push(new d(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({},r,t)))})}},{key:"layout",value:function(e,t){var n=this.diagram,r=n.getGraph(),o=this.satelliteCache,i=e.getBBox(),a=i.centerX,c=i.centerY,u=n.getZoom(),s=l.orbitGap/u,d=o.filter(function(e){return e.isVisible()}),f=[t.x-a,t.y-c],g=h.length(f),p=i.width/2+s,m=h.scale([],f,p/g);d.forEach(function(e){var t=e.getDOM(),n=t.width()/2,o=r.getDomPoint({x:m[0]+a,y:m[1]+c});t.css({top:o.y-n+"px",left:o.x-n+"px"})})}},{key:"show",value:function(e){this.satelliteCache.forEach(function(t){t.enable()&&(t.item=e,t.show())})}},{key:"hide",value:function(){this.satelliteCache.forEach(function(e){e.hide()})}}])&&i(n.prototype,r),f&&i(n,f),t}();e.exports=p},function(e,t,n){var r=n(23);r.forkAndLink=n(71),e.exports=r},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=n(23),l=n(2),d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,c(t).apply(this,arguments))}var n,r,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,s),n=t,(r=[{key:"getDefaultCfg",value:function(){return{name:"forkAndLink",render:function(){return'\n          <div style="\n            width: 11px;\n            height: 11px;\n            cursor: copy;\n            background-image: url(https://gw.alipayobjects.com/zos/rmsportal/yWAiQOmucbYMCpwkvTBP.svg)\n          "></div>\n        '},bindEvent:function(e,t){var n=this,r=t.getGraph(),i=r.getRootGroup();return e.setAttribute("draggable","true"),[l.addEventListener(e,"dragstart",function(){var r=n.item,a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({},t.get("addEdgeModel"),{source:r.id}),c=r.getBBox(),u=t.getDelegation([{isEdge:!0}],i);t.setSignal("dragEdge",!0),t.beginAdd("edge",a),t.set("addEdgeConfig",{addModel:a,delegation:u,startPoint:{x:c.centerX,y:c.centerY},sourceItem:r}),e.hide()}),l.addEventListener(e,"click",function(e){var o=e.clientX,i=e.clientY,a=t.editor,c=n.item,u=r.getPointByClient({x:o,y:i}),s=c.getBBox(),d=c.getModel(),f=[u.x-s.centerX,u.y-s.centerY],h=l.vec2.length(f);if(l.vec2.scale(f,f,160/h),a)a.executeCommand("copyAdjacent",{copyNode:c,x:u.x+f[0],y:u.y+f[1]});else{var g=l.clone(d);g.x=u.x+f[0],g.y=u.y+f[1],r.add(c.type,g)}})]}}}}])&&i(n.prototype,r),d&&i(n,d),t}();e.exports=d},function(e,t,n){var r=n(2),o=n(5),i={};function a(e){e.controlPointShapes&&r.each(e.controlPointShapes,function(e){e.remove()}),e.controlPointShapes=[],e.isControlPointShow=!1}i.INIT="_initResize",i.CFG={nodeResizeable:!1,edgeResizeable:!0},i.AUGMENT={_initResize:function(){var e=this,t=this.get("_graph"),n=this.get("nodeResizeable"),o=this.get("edgeResizeable");n&&t.on("afteritemdraw",function(t){"node"===t.item.type&&t.item.isVisible()&&e.drawControlPoints(t.item)}),o&&t.on("afteritemdraw",function(t){"edge"===t.item.type&&t.item.isVisible()&&e.drawControlPoints(t.item)}),t.on("afteritemhide",function(e){var t;e.item.isControlPointShow&&((t=e.item).controlPointShapes&&r.each(t.controlPointShapes,function(e){e.hide()}),t.isControlPointShow=!1)}),t.on("afteritemshow",function(e){var t;!e.item.isControlPointShow&&((t=e.item).controlPointShapes&&r.each(t.controlPointShapes,function(e){e.show()}),t.isControlPointShow=!0)}),t.on("beforeitemdestroy",function(e){e.item.isControlPointShow&&a(e.item)})},drawControlPoints:function(e){var t,n,i,c,u,s,l,d,f,h=this.get("_graph").getRootGroup(),g=this.get("nodeResizeable"),p=this.get("edgeResizeable");"node"===e.type?g&&function(e,t){var n=e.getBBox(),i=[{x:n.minX,y:n.minY},{x:n.maxX,y:n.minY},{x:n.minX,y:n.maxY},{x:n.maxX,y:n.maxY}];a(e);var c=t.addShape("rect",{attrs:r.mix({},o.nodeSelectedBoxStyle,{symbol:"square",x:n.minX,y:n.minY,width:n.maxX-n.minX,height:n.maxY-n.minY})});e.controlPointShapes.push(c),r.each(i,function(n){var i=t.addShape("marker",{attrs:r.mix({},o.nodeControlPointStyle,{symbol:"square",x:n.x,y:n.y}),freezePoint:{x:n.x,y:n.y},item:e});e.controlPointShapes.push(i)})}(e,h):"edge"===e.type&&p&&(n=h,i=(t=e).getKeyShape().attr("path"),c=i[0],u=c.length,s=i[i.length-1],l=s.length,d=[{x:c[u-2],y:c[u-1]},{x:s[l-2],y:s[l-1]}],f=t.getModel(),a(t),r.each(d,function(e,i){var a=n.addShape("marker",{attrs:r.mix({},o.edgeControlPointStyle,{x:e.x,y:e.y}),freezePoint:{x:e.x,y:e.y},item:t});a.eventPreFix="edgeControlPoint",a.getSourcePoint=function(){return d[0]},a.getTargetPoint=function(){return d[d.length-1]},a.getItem=function(){return t},a.isSourceEndPoint=function(){return f.source&&0===i},a.isTargetEndPoint=function(){return f.target&&i===d.length-1},t.controlPointShapes.push(a)})),e.isControlPointShow=!0}},e.exports=i},function(e,t,n){function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(2),a={};a.AUGMENT={addOutterShape:function(e,t){this.clearOutterShape(e);var n=t.lineWidth,o=e.getKeyShape(),a=e.getGraphicGroup(),c=o.attr(),u=o.get("type"),s=o.attr("lineWidth"),l=i.clone(c);delete l.fillStyle,delete l.strokeStyle,delete l.matrix;var d=a.addShape(u,{attrs:r({},l,{fill:null},t)});i.toBack(d,a);var f=d.getBBox(),h=f.maxX-f.minX,g=f.maxY-f.minY,p=(f.minX+f.maxX)/2,m=(f.minY+f.maxY)/2;d.transform([["t",-p,-m],["s",(n+h+s)/h,(n+g+s)/g],["t",p,m]]),d.isOutter=!0,e.outterShape=d},clearOutterShape:function(e){e.outterShape&&e.outterShape.remove()}},e.exports=a},function(e,t){var n={CFG:{linkNode:!0,linkAnchor:!0},INIT:"_initLink",AUGMENT:{_initLink:function(){var e=this,t=this.getGraph(),n=this.get("linkAnchor"),r=this.get("linkNode"),o=t.get("mode");n&&(this.on("beforeitemactived",function(t){var n=t.item;n.isNode&&e.hoverShowAnchor(n)}),this.on("beforeitemunactived",function(t){var n=t.item;(n.isNode||n.isGroup)&&e.clearAnchor(n)}),this.on("beforeitemselected",function(t){var n=t.item;n.isNode?e.hoverShowAnchor(n):n.isGroup&&e.hoverShowAnchor(n)}),this.on("beforeitemunselected",function(t){var n=t.item;(n.isNode||n.isGroup)&&e.clearAnchor(n)}),t.addBehaviour("dragAnchorAddEdge","add"),t.addBehaviour("hoverAnchorActived","default"),t.changeMode(o)),r&&(t.addBehaviour("hoverNodeAddOutter","add"),t.addBehaviour("hoverNodeAddOutter","default"),t.changeMode(o))}}};e.exports=n},function(e,t,n){n(76),n(77),n(78),n(79)},function(e,t,n){function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(13),a=n(2),c=n(5);i.registerNode("diagram-base",{getSize:function(e){var t=e.getModel();return a.getNodeSize(t.size)},defaultFillPalette:0,defaultStrokePalette:3,activedFillPalette:0,activedStrokePalette:5,selectedFillPalette:2,selectedStrokePalette:5,getDefaulStyle:function(){return c.nodeStyle},getDefaulActivedStyle:function(){return c.nodeActivedStyle},getDefaulSelectedtyle:function(){return c.nodeSelectedStyle},getStyle:function(e){var t,n,r=e.getModel(),o=r.color;if(o){var i=a.Palettes.generate(o);t=i[this.defaultFillPalette],n=i[this.defaultStrokePalette]}return a.mix(!0,{},this.getDefaulStyle(),{fill:t,stroke:n},r.style)},getPath:function(e){var t=this.getSize(e),n=this.getStyle(e);return a.getRectPath(-t[0]/2,-t[1]/2,t[0],t[1],n.radius)},getActivedOutterStyle:function(){return c.nodeActivedOutterStyle},getActivedStyle:function(e){var t=e.getModel(),n=this.getDefaulActivedStyle(e),o=t.color;if(o){var i=a.Palettes.generate(o);return r({},n,{fill:i[this.activedFillPalette],stroke:i[this.activedStrokePalette]})}return n},getSelectedStyle:function(e){var t=e.getModel(),n=this.getDefaulSelectedtyle(e),o=t.color;if(o){var i=a.Palettes.generate(o);return r({},n,{fill:i[this.selectedFillPalette],stroke:i[this.selectedStrokePalette]})}return n},getSelectedOutterStyle:function(e){var t=e.getModel().color;if(t){var n=a.Palettes.generate(t);return r({},c.nodeSelectedOutterStyle,{stroke:n[1],fill:n[1]})}return c.nodeSelectedOutterStyle},anchor:[[.5,0],[1,.5],[.5,1],[0,.5]]}),i.registerNode("capsule",{getPath:function(e){var t=this.getSize(e);return a.getRectPath(-t[0]/2,-t[1]/2,t[0],t[1],t[1]/2)}}),i.registerNode("circle",{getPath:function(e){var t=this.getSize(e),n=t[0],r=t[1];return a.getEllipsePath(0,0,n/2,r/2)}}),i.registerNode("rhombus",{getPath:function(e){var t=this.getSize(e),n=t[0],r=t[1],o=[{x:0,y:0-r/2},{x:0+n/2,y:0},{x:0,y:0+r/2},{x:0-n/2,y:0},{x:0,y:0-r/2}];return a.pointsToPolygon(o)}})},function(e,t,n){var r=n(13),o=n(2),i=n(5);r.registerEdge("diagram-base",{getPath:function(e){var t=e.getPoints(),n=e.getSource(),r=e.getTarget();return this.getPathByPoints({points:t,source:n,target:r,item:e})},getPathByPoints:function(e){var t=e.points;return o.pointsToPolygon(t)},getStyle:function(e){var t=e.getModel();return o.mix(!0,{},i.edgeStyle,{stroke:t.color},t.style)},getActivedStyle:function(){return i.edgeActivedStyle},getSelectedStyle:function(){return i.edgeSelectedStyle},getActivedOutterStyle:function(){},getSelectedOutterStyle:function(){}})},function(e,t,n){function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(13),a=n(5),c=n(2),u=c.getGroupIconPath(),s=c.getCollapsedButtonPath(),l=c.getExpandedButtonPath(),d={fill:"#CED4D9"},f={stroke:"#697B8C",fill:"#fff",fillOpacity:0},h={stroke:"#697B8C",fill:"#fff",fillOpacity:0},g={fill:"#000000",textBaseline:"top",textAlign:"left"},p={stroke:"#CED4D9",fill:"#F2F4F5",radius:4},m=a.groupBackgroundPadding,y=40,v=13,b=12,x=12,S=8,w=12,O=184-m[1]-m[3],P=40-m[0]-m[2];i.registerGroup("diagram-base",{draw:function(e){var t=e.getModel(),n=e.getGraphicGroup(),o=e.getChildrenBBox(),i=this.getStyle(e),a=t.collapsed,p=t.padding?t.padding:m;if(o.minX===1/0&&(o.minX=t.x,o.maxX=t.x+O,o.minY=t.y,o.maxY=t.y+P),a&&(o.minX=o.maxX-O,o.maxY=o.minY+P),o.maxX-o.minX<O){var _=O-o.maxX+o.minX;o.minX-=_/2,o.maxX+=_/2}var C=function(e,t){return e.minX-t[3]}(o,p),E=function(e,t){return e.minY-t[0]}(o,p),k=function(e,t){return e.maxX-e.minX+t[3]+t[1]}(o,p),A=function(e,t){return e.maxY-e.minY+t[0]+t[2]}(o,p),M=function(e,t,n,o){var i=t.addShape("path",{attrs:r({},o,{path:n})});return i.isGroupKeyShape=!0,i}(0,n,c.getRectPath(C,E,k,A,i.radius),i);return function(e,t,n,r){var o=c.mix(!0,{},g,{x:n+y,y:r+v});c.isString(e)?o.text=e:c.mix(o,e),t.addShape("text",{attrs:o})}(c.isNil(t.label)?"新建分组":t.label,n,C,E),function(e,t,n,o){var i=t.addShape("path",{attrs:r({path:e},d)}),a=i.getBBox();i.translate(n-a.minX+S,o-a.minY+w)}(c.isNil(t.icon)?u:t.icon,n,C,E),(function(e,t,n,o,i){var a;if(e){var c=(a=t.addShape("path",{attrs:r({path:l},h)})).getBBox(),u=c.maxX-c.minX;a.isExpandedButton=!0,a.translate(n+i-c.minX-u-x,o-c.minY+b)}else{var d=(a=t.addShape("path",{attrs:r({path:s},f)})).getBBox(),g=d.maxX-d.minX;a.isCollapsedButton=!0,a.translate(n+i-d.minX-g-x,o-d.minY+b)}return a.isButton=!0,a}(a,n,C,E,k)).item=e,t.x=o.minX,t.y=o.minY,M},getStyle:function(e){var t=e.getModel();return c.mix(!0,{},p,{fill:t.color,stroke:t.color},t.style)},getActivedStyle:function(){return a.groupActivedStyle},getSelectedStyle:function(){return a.groupSelectedStyle},getSelectedOutterStyle:function(){return a.groupSelectedOutterStyle},getActivedOutterStyle:function(){},intersectBox:"rect"})},function(e,t,n){n(13).registerGuide("diagram-base")},function(e,t,n){n(81),n(82),n(83),n(84),n(85),n(86),n(87),n(88),n(89),n(90),n(91),n(92),n(93),n(94)},function(e,t,n){var r=n(1),o=n(2);r.registerBehaviour("panItem",function(e){var t=e.getGraph();t.behaviourOn("drop",function(){var n=e.get("panItems");if(n){var r=n[0],i=n.map(function(e){return e.id}),a=e.get("panItemDelegation"),c=e.get("panItemStartBox"),u=r.id,s=a.attr("x")-c.minX,l=a.attr("y")-c.minY;t.emit("afterpanitemdrop",{panItems:n}),e.clearAlignLine();var d=e.editor;t.emit("panitemend"),!d||e.getSignal("dragaddnodetogroup")?f():d.executeCommand(f)}function f(){i.forEach(function(e){var n=t.find(e),r=n.getModel();n.isGroup?o.panGroup(n,s,l,t):(t.update(n,{x:r.x+s,y:r.y+l}),t.toFront(n))}),1===i.length&&(e.clearSelected(),e.setSelected(u,!0))}})},["startPanItem","processPanItem","endPanItem"])},function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(1),i=n(5);o.registerBehaviour("hoverAnchorActived",function(e){var t=e.getGraph();t.behaviourOn("anchor:mouseenter",function(n){if(!e.getSignal("panningItem")&&!e.getSignal("dragEdge")){var o=n.shape,a=o.getItem(),c=a.getModel(),u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({},e.get("addEdgeModel"),{source:c.id}),s={anchor:o.getPoint(),item:a};e.emit("hoveranchor:beforeaddedge",s),s.cancel?e.css({cursor:i.cursor.hoverUnEffectiveAnchor}):(e.css({cursor:i.cursor.hoverEffectiveAnchor}),!o.get("destroyed")&&o.setActived(),e.beginAdd("edge",u),t.draw())}}),t.behaviourOn("anchor:mouseleave",function(n){if(!e.getSignal("dragEdge")&&!e.getSignal("panningItem")){var r=n.shape,o=r.getItem();e.css({cursor:i.cursor.beforePanCanvas}),o.isSelected||(e.clearAnchor(o),e.setActived(o,!1)),!r.get("destroyed")&&r.clearActived(),e.cancelAdd(),t.draw()}})})},function(e,t,n){var r=n(1),o=n(5);r.registerBehaviour("hoverEdgeControlPoint",function(e){e.getGraph().behaviourOn("edgeControlPoint:mouseenter",function(t){if(!e.getSignal("dragEdge")&&!e.getSignal("panningItem")){var n=t.shape;(n.isTargetEndPoint()||n.isSourceEndPoint())&&e.css({cursor:o.cursor.hoverEdgeControllPoint})}})})},function(e,t,n){var r=n(1),o=n(5),i=n(2);r.registerBehaviour("dragEdgeControlPoint",function(e){var t,n,r,a,c,u,s,l,d,f,h=e.getGraph(),g=h.getRootGroup();function p(g){if(r){var p={};h.getNodes().forEach(function(t){e.clearAnchor(t)}),e.css({cursor:o.cursor.beforePanCanvas}),r.remove();var m=i.dropUpdateEdge({ev:g,endPointType:t?"target":"source",model:p,diagram:e});h.show(d);var y=d.id;if(m){var v=e.editor;v?v.executeCommand("update",{itemId:y,updateModel:p}):h.update(y,p)}e.setSignal("dragEdge",!1),t=void 0,n=void 0,r=void 0,a=void 0,c=void 0,u=void 0,s=void 0,l=void 0,d=void 0,f=void 0}}h.behaviourOn("edgeControlPoint:mousedown",function(o){if(2!==o.button){var i=o.shape;i.isTargetEndPoint()?(d=i.getItem(),f=d.getModel(),t=i,a=i.getSourcePoint(),c=d.getSource(),s=f.sourceAnchor):i.isSourceEndPoint()&&(d=i.getItem(),f=d.getModel(),n=i,a=i.getTargetPoint(),u=d.getTarget(),l=f.targetAnchor),d&&(r=e.getDelegation([d],g),c?e.dragEdgeBeforeShowAnchor(c,s,"target"):u&&e.dragEdgeBeforeShowAnchor(u,l,"source"),h.hide(d),e.setSignal("dragEdge",!0))}}),h.behaviourOn("mousemove",function(e){r&&i.dragingEdgeEndPoint({endPointType:c?"target":"source",edgeModel:f,graph:h,delegation:r,startPoint:a,ev:e,originSource:c,originTarget:u})}),h.behaviourOn("edgeControlPoint:mouseleave",function(r){t||n||r.toShape||e.css({cursor:o.cursor.beforePanCanvas})}),h.behaviourOn("mouseup",p),h.behaviourOn("canvas:mouseleave",p)},["dragHoverAnchorHotspot"])},function(e,t,n){var r=n(1),o=n(2);r.registerBehaviour("dragPanelItemAddNode",function(e){var t,n,r,i,a,c=e.getGraph(),u=c.getRootGroup();function s(){e.setSignal("panningItem",!1),e.set("panItemDelegation",void 0),e.set("panItemStartBox",void 0),e.set("panItemStartPoint",void 0),n=void 0,r=void 0,i=void 0,a=void 0}c.behaviourOn("canvas:mouseenter",function(c){if(!n&&(i=e.get("addType"),a=e.get("addModel"),a=o.clone(a),"node"===i)){var s=(r=o.getNodeSize(a.size))[0]/2,l=r[1]/2;t={minX:c.x-s,minY:c.y-l,maxX:c.x+s,maxY:c.y+l,width:r[0],height:r[1]},n=e.getDelegation([t],u),e.setSignal("panningItem",!0),e.set("panItemDelegation",n),e.set("panItemStartBox",t),e.set("panItemStartPoint",{x:c.x,y:c.y})}}),c.behaviourOn("mouseup",function(t){if(n){a.x=t.x,a.y=t.y;var r=i;o.setId(a);var u=e.editor;n.remove(),e.endAdd(),e.clearAlignLine(),e.clearSelected(),e.focusGraphWrapper(),u?u.executeCommand("add",{type:"node",addModel:a}):c.add(r,a),e.setSelected(c.find(a.id),!0),s()}}),c.behaviourOn("canvas:mouseleave",function(){n&&(e.clearAlignLine(),n.remove(),c.draw(),e.cancelAdd(),s())})},["processPanItem"])},function(e,t,n){n(1).registerBehaviour("dragHoverAnchorHotspot",function(e){var t=e.getGraph();t.behaviourOn("anchor:dragenter",function(t){if(e.getSignal("dragEdge")){var n=t.shape;e.setHotspotActived(n,!0)}}),t.behaviourOn("anchor:dragleave",function(t){if(e.getSignal("dragEdge")){var n=t.shape;e.setHotspotActived(n,!1)}})})},function(e,t,n){var r=n(1),o=n(2);r.registerBehaviour("dragAnchorAddEdge",function(e){var t=e.getGraph(),n=t.getRootGroup();t.behaviourOn("anchor:dragstart",function(t){if(2!==t.button){var r=t.shape,i=r.get("freezePoint"),a=r.getItem(),c=o.clone(e.get("addModel")),u=r.getIndex();c.source=a.id,c.sourceAnchor=u;var s={x:i.x,y:i.y},l=e.getDelegation([{isEdge:!0}],n);e.setSignal("dragEdge",!0),e.dragEdgeBeforeShowAnchor(a,u,"target"),e.set("addEdgeConfig",{addModel:c,delegation:l,startPoint:s,sourceItem:a})}})},["processAddEdge","dragHoverAnchorHotspot","hoverAnchorActived"])},function(e,t,n){var r=n(1),o=n(5);r.registerBehaviour("dragMultiSelect",function(e){var t,n,r=e.getGraph(),i=r.getRootGroup();function a(){e.css({cursor:o.cursor.beforePanCanvas}),t=void 0,n=void 0}e.css({cursor:o.cursor.multiSelect}),r.behaviourOn("dragstart",function(e){2!==e.button&&(t={x:e.x,y:e.y},n=i.addShape("rect",{attrs:o.multiSelectRectStyle}))}),r.behaviourOn("drag",function(e){n&&(n.attr({x:Math.min(t.x,e.x),y:Math.min(t.y,e.y),width:Math.abs(e.x-t.x),height:Math.abs(e.y-t.y)}),r.draw())}),r.behaviourOn("dragend",function(){if(n){var t=r.getNodes().map(function(e){return e.id}),o=n.getBBox(),i=e.editor;i?i.executeCommand(c):c(),n.remove(),e.changeMode("default"),e.updateStatus(),r.draw(),a()}function c(){e.clearSelected(),t.forEach(function(t){var n=r.find(t),i=n.getBBox();i.minX>o.minX&&i.minY>o.minY&&i.maxX<o.maxX&&i.maxY<o.maxY&&e.setSelected(n,!0)})}}),r.behaviourOn("canvas:mouseleave",function(){n&&(n.remove(),r.draw(),a())})})},function(e,t,n){n(1).registerBehaviour("keydownShiftMultiSelected",function(e){var t=e.getGraph();t.behaviourOn("keydown",function(t){t.domEvent.shiftKey&&e.setSignal("shiftKeyDown",!0)}),t.behaviourOn("keyup",function(t){t.domEvent.shiftKey||e.setSignal("shiftKeyDown",!1)})})},function(e,t,n){var r=n(1),o=n(5);r.registerBehaviour("dragNodeAddToGroup",function(e){var t,n,r=e.getGraph();function i(){e.setSignal("dragaddnodetogroup",!1),t=void 0,n=void 0}r.behaviourOn("dragenter",function(i){if(e.getSignal("panningItem")){var a=e.get("panItems");a[0]&&a[0].isNode&&1===a.length&&i.item&&i.item.isGroup&&a[0].getParent()!==i.item&&(t=a[0],n=i.item,r.update(n,{padding:o.groupBackgroundPadding.map(function(e){return e+4}),style:o.dragNodeHoverToGroupStyle}))}}),r.behaviourOn("dragleave",function(){n&&t&&r.update(n,{padding:void 0,style:void 0})}),r.behaviourOn("drop",function(o){if(n&&t&&n===o.item){e.setSignal("dragaddnodetogroup",!0);var i=t.id,a=n.id;r.update(a,{padding:void 0,style:void 0,collapsed:!1});var c=e.editor;c?c.executeCommand(u):u()}function u(){r.update(i,{parent:a})}}),r.behaviourOn("dragend",function(){i()}),r.behaviourOn("canvas:mouseleave",function(){n&&(r.update(n,{padding:void 0,style:void 0}),i())})})},function(e,t,n){var r=n(1),o=n(5),i=n(2);r.registerBehaviour("dragOutFromGroup",function(e){var t,n,r,a=e.getGraph(),c=!1;function u(){clearTimeout(r),n&&a.update(n,{padding:void 0,style:void 0}),c=!1,t=void 0,n=void 0}a.behaviourOn("drag",function(u){e.getSignal("panningItem")&&!c&&(clearTimeout(r),r=setTimeout(function(){var r=e.get("panItems");if(r){if(t=r[0],n=r[0].getParent(),t&&1===r.length&&n&&!u.shape){var s=e.get("panItemDelegation").getBBox(),l=n.getBBox();i.rectRectCrossAlgorithm(s,l)&&(a.update(n,{padding:o.groupBackgroundPadding.map(function(e){return e-8}),style:o.dragNodeLeaveFromGroupStyle}),c=!0)}c||(t=void 0,n=void 0)}},o.outFromGroupDelayTime))}),a.behaviourOn("dragenter",function(e){t&&n&&(n===e.item&&a.update(n,{padding:o.groupBackgroundPadding.map(function(e){return e+4}),style:o.dragNodeHoverToGroupStyle}),c=!1)}),a.on("drop",function(e){n&&t&&!e.shape&&(a.update(t,{parent:void 0}),a.update(n,{style:void 0}),u())}),a.on("dragend",function(){u()}),a.behaviourOn("canvas:mouseleave",function(){u()})})},function(e,t,n){var r=n(1),o=n(2),i=n(5);r.registerBehaviour("processAddEdge",function(e){var t=e.getGraph();function n(){e.setSignal("dragEdge",!1),e.set("addEdgeConfig",{addModel:void 0,delegation:void 0,startPoint:void 0,sourceItem:void 0})}t.behaviourOn("mousemove",function(n){var r=e.get("addEdgeConfig");if(r){var i=r.addModel,a=r.delegation,c=r.startPoint,u=r.sourceItem;a&&o.dragingEdgeEndPoint({endPointType:"target",edgeModel:i,graph:t,delegation:a,startPoint:c,ev:n,sourceItem:u})}}),t.behaviourOn("mouseup",function(r){var a=e.get("addEdgeConfig");if(a){var c=a.addModel,u=a.delegation,s=a.sourceItem,l=e.editor;if(u)t.getNodes().forEach(function(t){e.clearAnchor(t)}),e.clearAnchor(s),e.setActived(s,!1),e.setSelected(s,!1),e.css({cursor:i.cursor.beforePanCanvas}),u.remove(),o.dropUpdateEdge({ev:r,endPointType:"target",model:c,diagram:e})&&(l?l.executeCommand("add",{type:"edge",addModel:c}):t.add("edge",c)),t.draw(),e.endAdd(),n();else n()}}),t.behaviourOn("canvas:mouseleave",function(){var r=e.get("addEdgeConfig");if(r){var o=r.delegation,i=r.sourceItem;if(o)t.getNodes().forEach(function(t){e.clearAnchor(t)}),e.setActived(i,!1),e.clearAnchor(i),o.remove(),e.cancelAdd(),t.draw(),n();else n()}})})},function(e,t,n){n(1).registerBehaviour("hoverNodeAddOutter",function(e){var t,n=e.getGraph();n.behaviourOn("node:mouseenter",function(n){var r=n.item;e.getSignal("dragEdge")&&(t=r,e.addOutterShape(r,{stroke:"#52C41A",strokeOpacity:.45,lineWidth:4}))}),n.behaviourOn("node:mouseleave",function(){t&&e.clearOutterShape(t)}),n.behaviourOn("beforedropedge",function(){t&&e.clearOutterShape(t)})})},function(e,t,n){var r=n(1),o=n(5),i=n(2);r.registerBehaviour("orbit",function(e){var t,n=e.getGraph();n.behaviourOn("beforepanitem",function(){e.hideOrbit()}),n.behaviourOn("node:mouseenter",function(n){var r=n.item;e.getSignal("panningItem")||e.getSignal("dragEdge")||(t=r,e.showOrbit(r))}),n.on("beforeviewportchange",function(){e.hideOrbit()}),n.behaviourOn("mousemove",function(r){var a=r.item,c=r.x,u=r.y;if(t){var s=t.getBBox(),l=i.euclideanDistance.pointPoint({x:s.centerX,y:s.centerY},{x:c,y:u}),d=n.getMatrix()[0];a!==t&&l>s.width/2+o.orbitGap/d&&(e.hideOrbit(),t=void 0),t&&e.layoutOrbit(t,{x:c,y:u})}})})},function(e,t,n){var r=n(11);n(96),e.exports=r},function(e,t,n){n(97),n(98),n(99),n(100),n(101)},function(e,t,n){var r=n(11);r.registerNode("flow-base",{}),r.registerNode("flow-html",{},["html"]),r.registerNode("flow-rect",{},"flow-base"),r.registerNode("flow-capsule",{},"capsule"),r.registerNode("flow-circle",{},"circle"),r.registerNode("flow-rhombus",{},"rhombus")},function(e,t,n){n(11).registerEdge("flow-base",{})},function(e,t,n){var r=n(19),o=n(11);function i(e,t,n,r){var o=r?r/2:30,i=r;if(e<=t&&t<=n||e>=t&&t>=n){var a=(n-t)/2,c=Math.abs(a);if(0===a)return e===t?0:(t-e)/Math.abs(t-e)*o;if(c>i){var u=a/c*i;return Math.abs(u)<o?a/c*o:u}return c<o?a/c*o:a}var s=o;return(s=Math.abs(t-n)<2*Math.abs(t-e)?r*Math.abs(t-n)/(2*Math.abs(t-e)):r)>i&&(s=i),s<o&&(s=o),t>e?s:-s}function a(e,t,n,r){var o,a,c=e.bbox,u=function(e,t){var n=Math.abs(e.x-t.centerX),r=Math.abs(e.y-t.centerY);return n/t.width>r/t.height}(t,c);o=a=0;var s=Math.min(c.height,c.width);return r&&r.bbox&&(s=Math.min(s,r.bbox.height,r.bbox.width)),u?o=i(c.centerX,t.x,n.x,s):a=i(c.centerY,t.y,n.y,s),{x:t.x+o,y:t.y+a}}var c=.1;function u(e,t){var n=e.x,r=e.y,o=t.x,i=t.y;return{x:n+(o-n)*c,y:r+(i-r)*c}}function s(e,t,n){var o=e[0],i=e[e.length-1],c=["M",o.x,o.y],s=function(e,t,n,r){return[n&&n.bbox?a(n,e,t,r):u(e,t),r&&r.bbox?a(r,t,e,n):u(t,e)]}(o,i,t,n),l=["C"],d=[c];return r.each(s,function(e){l.push(e.x,e.y)}),l.push(i.x,i.y),d.push(l),d}o.registerEdge("flow-smooth",{getPathByPoints:function(e){return s(e.points,e.source,e.target)}},"flow-edge")},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=n(19),a=n(11),c=16,u=5;function s(e,t){var n=Math.min(e.minX,t.minX),r=Math.min(e.minY,t.minY),o=Math.max(e.maxX,t.maxX),i=Math.max(e.maxY,t.maxY);return{centerX:(n+o)/2,centerY:(r+i)/2,minX:n,minY:r,maxX:o,maxY:i,height:i-r,width:o-n}}function l(e,t){return 2*Math.abs(e.centerX-t.centerX)<e.width+t.width&&2*Math.abs(e.centerY-t.centerY)<e.height+t.height}function d(e){var t=e.x,n=e.y;return{centerX:t,centerY:n,minX:t,minY:n,maxX:t,maxY:n,height:0,width:0}}function f(e,t){return 0===e.width&&0===e.height?e:{centerX:e.centerX,centerY:e.centerY,minX:e.minX-t,minY:e.minY-t,maxX:e.maxX+t,maxY:e.maxY+t,height:e.height+2*t,width:e.width+2*t}}function h(e,t){return function(e,t){var n=Math.abs(e.x-t.centerX),r=Math.abs(e.y-t.centerY);return n/t.width>r/t.height}(t,e)?{x:t.x>e.centerX?e.maxX:e.minX,y:t.y}:{x:t.x,y:t.y>e.centerY?e.maxY:e.minY}}function g(e){var t=e.minX,n=e.minY,r=e.maxX,o=e.maxY;return[{x:t,y:n},{x:r,y:n},{x:r,y:o},{x:t,y:o}]}function p(e,t){var n=e.x,r=e.y;return n<t.minX||n>t.maxX||r<t.minY||r>t.maxY}function m(e,t,n,r){var o=t.x-e.x,i=t.y-e.y,a=r.x-n.x,c=r.y-n.y,u=(-i*(e.x-n.x)+o*(e.y-n.y))/(-a*i+o*c),s=(a*(e.y-n.y)-c*(e.x-n.x))/(-a*i+o*c);return u>=0&&u<=1&&s>=0&&s<=1}function y(e,t,n){if(n.width===n.height===0)return!1;var r=o(g(n),4),i=r[0],a=r[1],c=r[2],u=r[3];return m(e,t,i,a)||m(e,t,i,u)||m(e,t,a,c)||m(e,t,c,u)}function v(e){return e=x(e)}function b(e,t){return[e,{x:e.x,y:t.y},t]}function x(e){var t=[],n={};return e.forEach(function(e){var t=e.id="".concat(e.x,"-").concat(e.y);n[t]=e}),i.each(n,function(e){t.push(e)}),t}function S(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}function w(e,t,n,r,o){return S(e,t)+S(e,n)+function(e,t){var n=0;return t.forEach(function(t){t&&(e.x===t.x&&(n+=-2),e.y===t.y&&(n+=-2))}),n}(e,[t,n,r,o])}function O(e,t,n,o,i,a,c){var u=[],s=[t],l={},d={},f={};d[t.id]=0,f[t.id]=w(t,n,t);var h={};e.forEach(function(e){h[e.id]=e});for(var g=function(){var r,g,p,m=void 0,v=1/0;if(s.forEach(function(e){f[e.id]<v&&(v=f[e.id],m=e)}),m===n){var b=[];return function e(t,n,r,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;t.unshift(n[o]),r[o]&&r[o]!==o&&i<=100&&e(t,n,r,r[o],i+1)}(b,h,l,n.id),{v:b}}g=m,(p=(r=s).indexOf(g))>-1&&r.splice(p,1),u.push(m),function(e,t,n,r){var o=[];return e.forEach(function(e){e!==t&&(e.x!==t.x&&e.y!==t.y||y(e,t,n)||y(e,t,r)||o.push(e))}),x(o)}(e,m,o,i).forEach(function(e){if(-1===u.indexOf(e)){-1===s.indexOf(e)&&s.push(e);var r=f[m.id]+S(m,e);d[e.id]&&r>=d[e.id]||(l[e.id]=m.id,d[e.id]=r,f[e.id]=d[e.id]+w(e,n,t,a,c))}})};s.length;){var p=g();if("object"===r(p))return p.v}return console.error("cannot find path: ",e,t,n),[t,n]}function P(e,t,n,r,o){var i=n&&n.bbox?n.bbox:d(e),a=r&&r.bbox?r.bbox:d(t);if(l(i,a))return v(b(e,t));var c=f(i,o),u=f(a,o);if(l(c,u))return v(b(e,t));var m=h(c,e),y=h(u,t),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=[];e.forEach(function(e){t.push(e.x),n.push(e.y)});var r=Math.min.apply(Math,t),o=Math.max.apply(Math,t),i=Math.min.apply(Math,n),a=Math.max.apply(Math,n);return{centerX:(r+o)/2,centerY:(i+a)/2,maxX:o,maxY:a,minX:r,minY:i,height:a-i,width:o-r}}([m,y]),w=(s(c,u),s(c,S)),P=s(u,S),_=[];_=(_=_.concat(g(w))).concat(g(P));var C={x:(e.x+t.x)/2,y:(e.y+t.y)/2};[S,w,P].forEach(function(e){_=_.concat(function(e,t){return function(e,t){return t<e.minX||t>e.maxX?[]:[{x:t,y:e.minY},{x:t,y:e.maxY}]}(e,t.x).concat(function(e,t){return t<e.minY||t>e.maxY?[]:[{x:e.minX,y:t},{x:e.maxX,y:t}]}(e,t.y))}(e,C).filter(function(e){return p(e,c)&&p(e,u)}))}),[{x:m.x,y:y.y},{x:y.x,y:m.y}].forEach(function(e){p(e,c)&&p(e,u)&&_.push(e)}),_.unshift(m),_.push(y);var E=O(_=x(_),m,y,i,a,e,t);return E.unshift(e),E.push(t),v(E)}function _(e,t){var n=[],r=e[0];return n.push("M".concat(r.x," ").concat(r.y)),e.forEach(function(r,i){var a=e[i+1],c=e[i+2];if(a&&c)if(function(e,t,n){return!(e.x===t.x===n.x||e.y===t.y===n.y)}(r,a,c)){var u=o(function(e,t,n,r){var o=S(e,t),i=S(n,t);return o<r&&(r=o),i<r&&(r=i),[{x:t.x-r/o*(t.x-e.x),y:t.y-r/o*(t.y-e.y)},{x:t.x-r/i*(t.x-n.x),y:t.y-r/i*(t.y-n.y)}]}(r,a,c,t),2),s=u[0],l=u[1];n.push("L".concat(s.x," ").concat(s.y)),n.push("Q".concat(a.x," ").concat(a.y," ").concat(l.x," ").concat(l.y)),n.push("L".concat(l.x," ").concat(l.y))}else n.push("L".concat(a.x," ").concat(a.y));else a&&n.push("L".concat(a.x," ").concat(a.y))}),n.join("")}a.registerEdge("flow-polyline",{getPathByPoints:function(e){var t=e.points,n=e.source,r=e.target,o=c,a=P(t[0],t[t.length-1],n,r,o);return i.pointsToPolygon(a)}}),a.registerEdge("flow-polyline-round",{getPathByPoints:function(e){var t=e.points,n=e.source,r=e.target,o=c,i=u;return _(v(P(t[0],t[t.length-1],n,r,o)),i)}})},function(e,t,n){n(11).registerGroup("flow-base",{})},function(e,t,n){var r=n(17);n(103),e.exports=r},function(e,t,n){n(104),n(105),n(106)},function(e,t,n){n(17).registerNode("koni-base",{defaultFillPalette:5,defaultStrokePalette:5,activedFillPalette:4,activedStrokePalette:6,selectedFillPalette:5,selectedStrokePalette:6,anchor:null},"circle")},function(e,t,n){var r=n(17),o=n(24),i=o.vec2;r.registerEdge("koni-base",{getDefaultLabelRectPadding:function(){return o.toAllPadding([0,2])},getPathByPoints:function(e){var t=e.points,n=e.source,r=e.target,a=e.item;if(n&&r){var c=o.getParallelEdges(r,n),u=o.getParallelEdges(n,r),s=u.indexOf(a);return n===r?(s=(u=u.filter(function(e){var t=e.getModel();return t.source===n.id&&t.target===r.id})).indexOf(a),function(e,t){var n=e.getBBox(),r=[n.centerX,n.centerY],o=n.width/2,a=50*(t+1)+50,c=[r[0]-o/2,r[1]-Math.sqrt(3)/2*o],u=[c[0]-r[0],c[1]-r[1]],s=i.scale([],u,(o+a)/o),l=[r[0]+s[0],r[1]+s[1]],d=[r[0]+o/2,r[1]-Math.sqrt(3)/2*o],f=[d[0]-r[0],d[1]-r[1]],h=i.scale([],f,(o+a)/o),g=[r[0]+h[0],r[1]+h[1]];return[["M",c[0],c[1]],["C",l[0],l[1],g[0],g[1],d[0],d[1]]]}(n,s)):(0===c.length&&s--,function(e,t,n){var r=e.getBBox(),o=t.getBBox(),a=r.centerX,c=r.centerY,u=20*(n+1),s=[.5*(o.centerX+a)-a,.5*(o.centerY+c)-c],l=[-s[1],s[0]],d=i.length(l);i.scale(l,l,u/d);var f={x:s[0]+l[0]+a,y:s[1]+l[1]+c},h=e.getLinkPoints(f)[0],g=t.getLinkPoints(f)[0];return[["M",h.x,h.y],["Q",f.x,f.y,g.x,g.y]]}(n,r,s))}return o.pointsToPolygon(t)}})},function(e,t,n){n(17).registerGroup("koni-base",{})},function(e,t,n){var r=n(8);r.Util=n(10),n(108),n(112),n(120),e.exports=r},function(e,t,n){n(109),n(110),n(111)},function(e,t,n){var r=n(1),o=n(10);r.registerBehaviour("panMindNode",function(e){var t,n,r,i=e.getGraph();function a(){t.nth=n;var o=i.add("node",t);e.setSelected(o,!0),r&&i.remove(r.id)}function c(){i.emit("panitemend"),t=void 0,r=void 0,n=void 0}i.behaviourOn("beforeshowdelegation",function(){e.clearSelected(),e.clearActived()}),i.behaviourOn("node:dragstart",function(e){if(2!==e.button){var r=e.item;!(t=r.getModel()).parent||e.shape.isCollapsedButton||e.shape.isExpandedButton?c():(n=i.getNth(r),i.remove(r))}}),i.behaviourOn("itempanning",function(t){if(!t.shape||!t.shape.isPlaceholder){var n=e.getHotArea(t),o=e.getRoot();if(r&&(n?r.id!==n.id&&i.remove(i.find(r.id)):i.remove(i.find(r.id))),r=n,n){var a=n.parent;if(!i.find(n.id)){var c={id:n.id,parent:a.id,isPlaceholder:!0,parentModel:a,baseline:r.parent.id===o.id?"center":void 0,shape:"mind-placeholder",nth:n.nth};n.side&&(c.side=n.side),i.add("node",c)}}}}),i.behaviourOn("drop",function(){if(t)if(r){var u=o.clone(t);i.remove(r.id),e.executeCommand("moveMindNode",{model:u,newParentId:r.parent.id,newNth:r.nth,newSide:r.side,originParentId:t.parent,originNth:n,originSide:t.side})}else a();c()}),i.behaviourOn("canvas:mouseleave",function(){t&&(a(),c())})},["startPanItem","processPanItem","endPanItem"])},function(e,t,n){n(1).registerBehaviour("keydownMoveSelection",function(e){e.getGraph().on("keydown",function(t){e._moveItemSelection(t)})})},function(e,t,n){n(1).registerBehaviour("keydownEditLabel",function(e){e.getGraph().behaviourOn("keydown",function(t){e.showLabelEditor(t)})})},function(e,t,n){n(113),n(114),n(115),n(116),n(117),n(118),n(119)},function(e,t,n){function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(8),a=n(10),c={fill:"#000",textAlign:"left",textBaseline:"top"},u={stroke:"#959EA6",strokeOpacity:0,fill:"#959EA6",cursor:"pointer"},s={stroke:"#434B54",fill:"#fff",cursor:"pointer"};i.registerNode("mind-base",{dy:4,afterDraw:function(e){var t=e.getModel();t.children&&t.children.length>0&&t.collapsed&&this.drawExpandedButton(e)},debugDrawLayoutPoint:function(e){var t=e.getModel();e.getGraphicGroup().addShape("circle",{attrs:{x:t.x,y:t.y,r:5,fill:"red"}})},drawExpandedButton:function(e){var t=e.getKeyShape().getBBox(),n=e.getGraphicGroup().addGroup(),o=n.addShape("path",{attrs:r({path:a.getRectPath(0,0,16,7,3)},u)}),i=o.getBBox(),c=a.getMindNodeSide(e),s=this.getButtonPositon(t,i,c),l={fill:"white",r:1};n.addShape("circle",{attrs:r({},l,{x:4,y:3.5}),capture:!1}),n.addShape("circle",{attrs:r({},l,{x:8,y:3.5}),capture:!1}),n.addShape("circle",{attrs:r({},l,{x:12,y:3.5}),capture:!1}),o.attr("lineAppendWidth",20),n.translate(s.x,s.y),o.isExpandedButton=!0,o.isButton=!0},drawCollapsedButton:function(e){var t=e.getKeyShape().getBBox(),n=e.getGraphicGroup().addShape("path",{attrs:r({path:a.getCollapsedButtonPath()},s)}),o=n.getBBox(),i=a.getMindNodeSide(e),c=this.getButtonPositon(t,o,i);n.translate(c.x,c.y),n.isCollapsedButton=!0,n.isButton=!0},getButtonPositon:function(e,t,n){return"right"===n?{x:e.maxX+2,y:e.maxY-(t.maxY-t.minY)/2}:{x:e.minX-(t.maxX-t.minX)-2,y:e.maxY-(t.maxY-t.minY)/2}},getLabel:function(e){return e.getModel().label},getPadding:function(){return[4,8,4,8]},getSize:function(e){var t=e.getModel(),n=e.getGraphicGroup(),r=t.size;if(t.size){if(a.isArray(r))return r;if(a.isNumber(r))return[r,r]}var o=n.findByClass("label")[0],i=this.getPadding(e),c=o.getBBox();return[c.width+i[1]+i[3],c.height+i[0]+i[2]]},getPath:function(e){var t=this.getSize(e),n=this.getStyle(e);return a.getRectPath(-t[0]/2,-t[1]/2+this.dy,t[0],t[1],n.radius)},drawLabel:function(e){var t=e.getGraphicGroup(),n=this.getLabel(e),r=this.getLabelStyle(e);n||(n=" ");var o=a.mix(!0,{},c,r,{x:0,y:0});a.isObject(n)?a.mix(o,n):o.text=n;var i=t.addShape("text",{class:"label",attrs:o});return this.adjustLabelText(i),this.adjustLabelPosition(e,i),i},adjustLabelText:function(e){var t=e.attr("text"),n=e.getBBox();if(n.maxX-n.minX>400){var r=e.attr("font");t=a.getLabelTextByTextLineWidth(t,r),e.attr("text",t)}},adjustLabelPosition:function(e,t){var n=this.getSize(e),r=this.getPadding(),o=n[0],i=t.getBBox();t.attr({x:-o/2+r[3],y:-i.height/2+this.dy})},getLabelStyle:function(){return{fill:"rgba(38,38,38,0.85)",lineHeight:18,fontSize:12}},getStyle:function(){return{fill:"#ccc",fillOpacity:0,radius:4,lineWidth:2}},getActivedStyle:function(){return{stroke:"#44C0FF",lineWidth:2}},getSelectedStyle:function(){return{stroke:"#1AA7EE",lineWidth:2}},anchor:[[0,1],[1,1]]})},function(e,t,n){n(8).registerNode("mind-first-sub",{dy:0,getPadding:function(){return[6,12,8,12]},getLabelStyle:function(){return{fill:"rgba(38,38,38,0.85)",fontWeight:500,fontSize:14,lineHeight:20}}})},function(e,t,n){n(8).registerNode("mind-second-sub",{dy:0,getPadding:function(){return[8,4,8,4]},getLabelStyle:function(){return{fill:"rgba(38,38,38,0.85)",fontSize:12,lineHeight:20}}})},function(e,t,n){var r=n(8),o=n(10);r.registerNode("mind-root",{adjustLabelPosition:function(e,t){var n=t.getBBox();t.attr({x:-n.width/2,y:-n.height/2-1})},getPath:function(e){var t=this.getSize(e),n=this.getStyle(e);return o.getRectPath(-t[0]/2,-t[1]/2,t[0],t[1],n.radius)},getButtonPositon:function(e,t,n){return"right"===n?{x:e.maxX+2,y:(e.maxY+e.minY)/2-(t.maxY-t.minY)/2}:{x:e.minX-(t.maxX-t.minX)-2,y:(e.maxY+e.minY)/2-(t.maxY-t.minY)/2}},getPadding:function(){return o.toAllPadding([12,24])},getStyle:function(){return{fill:"#587EF7",stroke:"#587EF7",fillOpacity:1,radius:4}},getLabelStyle:function(){return{fontSize:20,fill:"white",lineHeight:28}},drawExpandedButton:function(){},drawCollapsedButton:function(){},panAble:!1,anchor:[[.45,.5],[.55,.5]]},"mind-first-sub")},function(e,t,n){var r=n(8),o=n(10);r.registerNode("mind-placeholder",{afterDraw:function(e){e.getKeyShape().isPlaceholder=!0},getPath:function(e){var t,n=e.getModel().parentModel,r=this.getStyle(e),i=0;return n.hierarchy<=2?t=28:(t=20,i=4),o.getRectPath(-27.5,-t/2+i,55,t,r.radius)},getStyle:function(){return{fill:"#91D5FF",radius:4,lineWidth:3}},drawExpandedButton:function(){},drawCollapsedButton:function(){},anchor:function(){return[[0,1],[1,1]]}})},function(e,t,n){n(8).registerEdge("mind-edge",{getEdetal:function(e){return e.children&&e.children.length>0&&!e.collapsed?2===e.hierarchy?24:18:0},getPath:function(e){var t=e.getPoints(),n=e.getSource(),r=e.getTarget(),o=n.getBBox(),i=r.getBBox(),a=r.getModel(),c=14,u=4;if(2===a.hierarchy&&(c=66,u=30),t[0].y===t[1].y){var s=3===a.hierarchy?24:18,l=this.getEdetal(a);return o.centerX<i.centerX?[["M",t[0].x+s,t[0].y],["L",i.maxX+l,i.maxY]]:[["M",t[0].x+2,t[0].y],["L",i.minX-l,i.maxY]]}if(a.hierarchy>=3){var d=3===a.hierarchy?24:18,f=this.getEdetal(a);if(o.centerX<i.centerX){var h=t[0].x+d;return[["M",t[0].x,t[0].y],["M",h,t[0].y],["C",h+u,t[0].y,i.minX-c,i.maxY,i.minX,i.maxY],["L",i.maxX+f,i.maxY]]}var g=t[0].x-d;return[["M",t[0].x,t[0].y],["M",g,t[0].y],["C",g-u,t[0].y,i.maxX+c,i.maxY,i.maxX,i.maxY],["L",i.minX-f,i.maxY]]}var p=this.getEdetal(a);return o.centerX<i.centerX?[["M",t[0].x,t[0].y],["C",t[0].x+u,t[0].y,i.minX-c,i.maxY,i.minX,i.maxY],["L",i.maxX+p,i.maxY]]:[["M",t[0].x,t[0].y],["C",t[0].x-u,t[0].y,i.maxX+c,i.maxY,i.maxX,i.maxY],["L",i.minX-p,i.maxY]]},getStyle:function(e){var t=e.getTarget(),n=1;if(t){var r=t.getModel();n=r.hierarchy<=3?3:r.hierarchy<=5?2:1}return{stroke:"#959EA6",lineWidth:n}}})},function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(8).registerEdge("mind-placeholder-edge",{getOriginShapeObject:function(e){return e.getGraph().getShapeObj("edge",{shape:"mind-edge"})},getPath:function(e){return this.getOriginShapeObject(e).getPath(e)},getStyle:function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({},this.getOriginShapeObject(e).getStyle(e),{stroke:"#91D5FF"})}})},function(e,t,n){var r=n(15),o=n(10);function i(e,t,n){var r=e.getGraph(),o=t.getModel(),i=e.getFirstChildrenBySide("left"),a=i[0]&&r.find(i[0].id);return r.add("node",{id:n,parent:t.id,label:"新建节点",side:o.children.length>2?"left":"right",nth:a?r.getNth(a):void 0})}r.registerCommand("append",{enable:function(e){var t=e.getCurrentPage(),n=t.getSelected();return t.isMind&&1===n.length},getItem:function(e){var t=e.getCurrentPage(),n=t.getGraph();return this.selectedItemId?n.find(this.selectedItemId):t.getSelected()[0]},execute:function(e){var t,n=e.getCurrentPage(),r=n.getGraph(),o=n.getRoot(),a=this.getItem(e),c=a.getModel(),u=c.hierarchy,s=a.getParent();if(a.isRoot)t=i(n,a,this.addItemId);else{var l=r.getNth(a);t=r.add("node",{id:this.addItemId,parent:s.id,side:2===u&&3===o.children.length?"left":c.side,label:"新建节点",nth:"left"===c.side&&2===u?l:l+1})}n.clearSelected(),n.clearActived(),n.setSelected(t,!0),1===this.executeTimes&&(this.selectedItemId=a.id,this.addItemId=t.id,n.beginEditLabel(t))},back:function(e){var t=e.getCurrentPage();t.getGraph().remove(this.addItemId),t.clearSelected(),t.clearActived(),t.setSelected(this.selectedItemId,!0)},shortcutCodes:["Enter"]}),r.registerCommand("appendChild",{enable:function(e){var t=e.getCurrentPage(),n=t.getSelected();return t.isMind&&n.length>0},getItem:function(e){var t=e.getCurrentPage(),n=t.getGraph();return this.selectedItemId?n.find(this.selectedItemId):t.getSelected()[0]},execute:function(e){var t,n=e.getCurrentPage(),r=n.getGraph(),o=this.getItem(e);t=o.isRoot?i(n,o,this.addItemId):r.add("node",{id:this.addItemId,parent:o.id,label:"新建节点"}),n.clearSelected(),n.clearActived(),n.setSelected(t,!0),1===this.executeTimes&&(this.selectedItemId=o.id,this.addItemId=t.id,n.beginEditLabel(t))},back:function(e){var t=e.getCurrentPage();t.getGraph().remove(this.addItemId),t.clearSelected(),t.clearActived(),t.setSelected(this.selectedItemId,!0)},shortcutCodes:["Tab"]}),r.registerCommand("moveMindNode",{enable:function(e){var t=e.getCurrentPage(),n=t.get("panItems");return t.isMind&&n&&n.length>0},execute:function(e){var t=e.getCurrentPage(),n=t.getGraph(),r=this.newParentId,i=this.newNth,a=this.newSide,c=o.clone(this.model);delete c.shape,delete c.side,n.remove(c.id),o.mix(c,{parent:r,nth:i,side:a});var u=n.add("node",c);t.clearSelected(),t.setSelected(u,!0)},back:function(e){var t=e.getCurrentPage(),n=t.getGraph(),r=this.originParentId,i=this.originNth,a=this.originSide,c=o.clone(this.model);delete c.shape,delete c.side,n.remove(c.id),o.mix(c,{parent:r,nth:i,side:a});var u=n.add("node",c);t.clearSelected(),t.setSelected(u,!0)}})},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=n(6),s=n(9),l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,a(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,s),n=t,(r=[{key:"getDefaultCfg",value:function(){return{type:"toolbar",container:null}}},{key:"init",value:function(){this._initContainer()}},{key:"_initContainer",value:function(){var e=this.container;if(!e)throw new Error("please set the container for the toolbar !");u.isString(e)&&(e=document.getElementById(e));var t=e.getElementsByClassName("command");this.commands=t}},{key:"getCommandDoms",value:function(){return this.commands}}])&&o(n.prototype,r),l&&o(n,l),t}();e.exports=l},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=n(6),s=n(9),l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,a(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,s),n=t,(r=[{key:"getDefaultCfg",value:function(){return{type:"contextmenu",container:null}}},{key:"init",value:function(){this._initContainer()}},{key:"_initContainer",value:function(){var e=this.container;if(!e)throw new Error("please set the container for the tontextmenu !");u.isString(e)&&(e=document.getElementById(e));var t=e.getElementsByClassName("command");e.style.position="absolute",e.style["z-index"]=2,e.style.top="0px",e.style.left="0px",this.commands=t,this.containerDom=e}},{key:"bindEvent",value:function(){var e=this,t=this.commands;u.each(t,function(t){u.addEventListener(t,"click",function(){-1===t.className.indexOf("disable")&&e.hide()})})}},{key:"switch",value:function(e){var t=this.containerDom.getElementsByClassName("menu");u.each(t,function(t){t.dataset.status===e?t.style.display="block":t.style.display="none"})}},{key:"getCommandDoms",value:function(){return this.commands}},{key:"show",value:function(){var e=this.containerDom;this.editor.getCurrentPage().setSignal("preventWheelPan",!0),e.style.display="block"}},{key:"hide",value:function(){var e=this.containerDom;this.editor.getCurrentPage().setSignal("preventWheelPan",!1),e.style.display="none"}},{key:"move",value:function(e,t){var n=this.containerDom,r=u.getBoundingClientRect(n),o=parseFloat(u.getStyle(n,"top")),i=parseFloat(u.getStyle(n,"left"));n.style.left=i+(e-r.left)+"px",n.style.top=o+(t-r.top)+"px"}}])&&o(n.prototype,r),l&&o(n,l),t}();e.exports=l},function(e,t,n){var r=n(12);n(124),n(127),e.exports=r},function(e,t,n){n(125),n(126)},function(e,t,n){function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i,a,c=n(20),u=c.mouseEnterEdge,s=c.startMove,l=c.mouseLeaveEdge,d=c.mouseMoveEdge,f=c.endMove;n(12).registerBehaviour("bpmnMoveEdgeController",function(e){var t,n=e.getGraph(),o=n.getRootGroup();function c(){e.set("panItemDelegation",void 0),e.set("panItemStartBox",void 0),e.set("panItemStartPoint",void 0),t=void 0}n.behaviourOn("edge:mouseenter",function(t){!i&&t.item&&(a=t.item,u({graph:n,bpmn:e,ev:t,backUpCursor:!0}))}),n.behaviourOn("edge:mousedown",function(e){var t=e.item;s(n,e),i=t}),n.behaviourOn("mouseup",function(){i&&(f({graph:n,item:i}),i=void 0)}),n.behaviourOn("mousemove",function(t){i?d(n,i,t):a&&u({graph:n,bpmn:e,ev:r({},t,{item:a}),backUpCursor:!1})}),n.behaviourOn("edge:mouseleave",function(){i||a&&(l({graph:n,bpmn:e,item:a}),a=void 0)}),n.behaviourOn("node:dragstart",function(n){var r=n.item.getBBox();t=e.getDelegation([r],o),e.set("bpmnNodePanDelegation",t),e.set("bpmnNodePanStartBox",r),e.set("bpmnNodePanStartPoint",{x:n.x,y:n.y}),e.set("bpmnNodePanStartItem",n.item)}),n.behaviourOn("node:dragend",function(t){var r=e.get("bpmnNodePanDelegation"),o=e.get("bpmnNodePanStartPoint"),i=e.get("bpmnNodePanStartItem");i&&i.getEdges().forEach(function(e){n.update(e,{nodeMoved:{item:i.id,start:o,delta:{x:t.x-o.x,y:t.y-o.y}}})}),r.remove(),c()})},["startPanItem","processPanItem","endPanItem"])},function(e,t,n){n(12).registerBehaviour("hoverNodeShowArrowController",function(e){var t,n=e.getGraph(),r=e.get("arrowController"),o=r.long,i=r.thickness;n.on("node:mouseenter",function(a){if(!e.getSignal("panningItem")&&!e.getSignal("dragEdge")){var c=r.topArrow,u=r.bottomArrow,s=r.leftArrow,l=r.rightArrow,d=(t=a.item).getBBox(),f=n.getDomPoint({x:d.centerX,y:d.minY}),h=n.getDomPoint({x:d.minX,y:d.centerY}),g=n.getDomPoint({x:d.centerX,y:d.maxY}),p=n.getDomPoint({x:d.maxX,y:d.centerY});c.css({top:f.y-(o+10)+"px",left:f.x-i/2+"px",transform:"rotate(-90deg)"}),u.css({top:g.y+10+"px",left:g.x-i/2+"px",transform:"rotate(90deg)"}),s.css({top:h.y-i/2+"px",left:h.x-(o+10)+"px",transform:"rotate(180deg)"}),l.css({top:p.y-i/2+"px",left:p.x+10+"px"}),c.setAttribute("anchorIndex",0),u.setAttribute("anchorIndex",2),s.setAttribute("anchorIndex",3),l.setAttribute("anchorIndex",1),e.showArrowController(t)}}),n.behaviourOn("mousemove",function(n){var r=n.x,i=n.y;if(t){var a=t.getBBox(),c=o+10,u=a.minX-c,s=a.minY-c,l=a.maxX+c,d=a.maxY+c;(r<u||i<s||r>l||i>d)&&(e.hideArrowController(),t=void 0)}})})},function(e,t,n){n(128),n(12).registerNode("bpmn-base",{anchor:null})},function(e,t,n){"use strict";n.r(t);var r=n(12),o=n.n(r),i=n(0);function a(e){var t=e.bbox,n=e.shape,r=void 0===n?"ROUNDED_RECT":n,o=e.point,i=e.vertical;i=!!i;var a={true:"x",false:"y"},c={true:"minX",false:"minY"},u={true:"maxX",false:"maxY"};switch(r){case"ROUNDED_RECT":if(o[a[i]]>=t[c[i]]+4&&o[a[i]]<=t[u[i]]-4)return{added:void 0,joint:{x:i?o.x:o.x>t.centerX?t.maxX:t.minX,y:i?o.y>t.centerY?t.maxY:t.minY:o.y}};if(o[a[i]]>=t[c[i]]&&o[a[i]]<t[c[i]]+4)return{added:void 0,joint:{x:i?o.x:o.x>t.centerX?t.maxX-4+Math.sqrt(16-Math.pow(t.minY+4-o.y,2)):t.minX+4-Math.sqrt(16-Math.pow(t.minY+4-o.y,2)),y:i?o.y>t.centerY?t.maxY-4+Math.sqrt(16-Math.pow(t.minX+4-o.x,2)):t.minY+4-Math.sqrt(16-Math.pow(t.minX+4-o.x,2)):o.y}};if(o[a[i]]>=t[u[i]]-4&&o[a[i]]<=t[u[i]])return{added:void 0,joint:{x:i?o.x:o.x>t.centerX?t.maxX-4+Math.sqrt(16-Math.pow(o.y-t.maxY+4,2)):t.minX+4-Math.sqrt(16-Math.pow(o.y-t.maxY+4,2)),y:i?o.y>t.centerY?t.maxY-4+Math.sqrt(16-Math.pow(o.x-t.maxX+4,2)):t.minY+4-Math.sqrt(16-Math.pow(o.x-t.maxX+4,2)):o.y}};break;case"CIRCLE":if(o[a[i]]>=t[c[i]]&&o[a[i]]<=t[u[i]])return{added:void 0,joint:{x:i?o.x:o.x>t.centerX?t.centerX+Math.sqrt(16-Math.pow(t.centerY-o.y)):t.centerX-Math.sqrt(16-Math.pow(t.centerY-o.y)),y:i?o.y>t.centerY?t.centerY+Math.sqrt(16-Math.pow(t.centerX-o.x)):t.centerY-Math.sqrt(16-Math.pow(t.centerX-o.x)):o.y}};break;case"RHOMEBUS":if(o[a[i]]>=t[c[i]]&&o[a[i]]<=t[u[i]])return{added:void 0,joint:{x:i?o.x:o.x>t.centerX?o.y<t.centerY?(o.y-t.minY)*(t.maxX-t.centerX)/(t.centerY-t.minY)+t.centerX:(t.maxY-o.y)*(t.maxX-t.centerX)/(t.maxY-t.centerY)+t.centerX:o.y<t.centerY?t.centerX-(o.y-t.minY)*(t.centerX-t.minX)/(t.centerY-t.minY):t.centerX-(t.maxY-o.y)*(t.centerX-t.minX)/(t.maxY-t.centerY),y:i?o.y>t.centerY?o.x<t.centerX?(o.x-t.minX)*(t.maxY-t.centerY)/(t.centerX-t.minX)+t.centerY:(t.maxX-o.x)*(t.maxY-t.centerY)/(t.maxX-t.centerX)+t.centerY:o.x<t.centerX?t.centerY-(o.x-t.minX)*(t.centerY-t.minY)/(t.centerX-t.minX):t.centerY-(t.maxX-o.x)*(t.centerY-t.minY)/(t.maxX-t.centerX):o.y}};break;case"RECT":default:if(o[a[i]]>=t[c[i]]&&o[a[i]]<=t[u[i]])return{added:void 0,joint:{x:i?o.x:o.x>t.centerX?t.maxX:t.minX,y:i?o.y>t.centerY?t.maxY:t.minY:o.y}}}return i?o.x<t.centerX?{added:{x:o.x,y:t.centerY},joint:{x:t.minX,y:t.centerY}}:{added:{x:o.x,y:t.centerY},joint:{x:t.maxX,y:t.centerY}}:o.y<t.centerY?{added:{x:t.centerX,y:o.y},joint:{x:t.centerX,y:t.minY}}:{added:{x:t.centerX,y:o.y},joint:{x:t.centerX,y:t.maxY}}}var c=n(20);o.a.registerEdge("bpmn-base",{getPath:function(e){var t,n=e.getSource(),r=e.getTarget(),o=e.model;if(o.edgeMoved&&o.lastMouse){var u,s,l,d,f,h=o.controlPoints,g=o.hold.index,p=[{x:h[g].x+o.edgeMoved.x,y:h[g].y+o.edgeMoved.y},{x:h[g+1].x+o.edgeMoved.x,y:h[g+1].y+o.edgeMoved.y}],m=Object(i.j)(p,0);if(n){var y=a({bbox:n.getBBox(),point:m,vertical:o.hold.vertical,shape:n.model.shape});s=y.added,l=y.joint}if(0===g&&n&&(p[0]=l,s&&(p.splice(1,0,s),e.model.hold.index+=1)),r){var v=a({bbox:r.getBBox(),point:m,vertical:o.hold.vertical,shape:r.model.shape});d=v.added,f=v.joint}g===h.length-2&&r&&(s&&0===g?(p[2]=f,d&&p.splice(2,0,d)):(p[1]=f,d&&p.splice(1,0,d))),(u=o.controlPoints).splice.apply(u,[g,2].concat(p)),n&&Object(i.l)(l,h,o.hold.index)&&(h.splice(0,o.hold.index),o.hold.index=0,h[0]=l),r&&Object(i.l)(f,h,o.hold.index)&&(o.controlPoints.splice(o.hold.index+1),h[o.hold.index+1]=f),t=Object(c.mergeLine)(e,g),function(e,t,n){var r=e.controlPoints;if(t){var o=Object(i.f)(r[0],t.getBBox()),a=o.point,c=o.index;e.sourceJoint={index:c,delta:{x:r[0].x-a.x,y:r[0].y-a.y}}}if(n){var u=Object(i.f)(r[r.length-1],n.getBBox()),s=u.point,l=u.index;e.targetJoint={index:l,delta:{x:r[r.length-1].x-s.x,y:r[r.length-1].y-s.y}}}}(o,n,r),o.lastMouse={x:o.lastMouse.x+o.edgeMoved.x,y:o.lastMouse.y+o.edgeMoved.y}}else if(o.modifiedByMouse&&o.nodeMoved)!function(e,t,n){if(e.nodeMoved){var r=e.nodeMoved.item===t.id,o=e.nodeMoved.item===n.id,a=r?t.getBBox():n.getBBox(),c=e.nodeMoved.delta,u={minX:a.minX-c.x,maxX:a.maxX-c.x,centerX:a.centerX-c.x,minY:a.minY-c.y,maxY:a.maxY-c.y,centerY:a.centerY+c.y,height:a.height,width:a.width},s=e.controlPoints;if(2===s.length){var l=Object(i.d)(t,n),d=l.sourcePoint,f=l.targetPoint;e.sourceJoint&&d.index===e.sourceJoint.index&&(d.point=Object(i.c)(t.getBBox())[d.index],d.point.x+=e.sourceJoint.delta.x,d.point.y+=e.sourceJoint.delta.y),e.targetJoint&&f.index===e.targetJoint.index&&(f.point=Object(i.c)(n.getBBox())[f.index],f.point.x+=e.targetJoint.delta.x,f.point.y+=e.targetJoint.delta.y);var h=Object(i.h)(d,f);e.controlPoints=h}else{var g;g=r?1:s.length-3;var p=Object(i.i)(s,g),m=Object(i.a)(u,s,g),y=Object(i.a)(a,s,g),v=r?e.sourceJoint:e.targetJoint;if(m===y){var b=Object(i.c)(a)[v.index],x={x:b.x+v.delta.x,y:b.y+v.delta.y},S=Object(i.g)(x,s,g);r?e.controlPoints.splice(0,2,x,S):o&&e.controlPoints.splice(g+1,2,S,x)}else if(0===y)if(3===s.length){var w=Object(i.d)(t,n),O=w.sourcePoint,P=w.targetPoint,_=Object(i.h)(O,P);e.controlPoints=_}else{var C,E=Object(i.j)(s,g);C=p?E.y<a.centerY?0:2:E.x<a.centerX?3:1;var k=Object(i.c)(a)[C];if(r){var A=Object(i.g)(k,s,g+1);e.controlPoints.splice(0,3,k,A),e.sourceJoint={index:C,delta:{x:0,y:0}}}else if(o){var M=Object(i.g)(k,s,g-1);e.controlPoints.splice(g,3,M,k),e.targetJoint={index:C,delta:{x:0,y:0}}}}else{var B=Object(i.k)(v.index),j=Object(i.c)(a)[B],X=Object(i.g)(j,s,g);r?(e.controlPoints.splice(0,2,j,X),e.sourceJoint={index:B,delta:{x:0,y:0}}):o&&(e.controlPoints.splice(g+1,2,X,j),e.targetJoint={index:B,delta:{x:0,y:0}})}}}}(o,n,r);else if(!o.modifiedByMouse){var b=o.anchorIndex,x=Object(i.d)(n,r,!o.initialed&&b),S=x.sourcePoint,w=x.targetPoint,O=Object(i.h)(S,w);e.model.controlPoints=O}return o.nodeMoved=void 0,{path:this.getPathByPoints({points:o.controlPoints}),helpLine:t}},draw:function(e){var t=e.getGraphicGroup(),n=e.model,r=this.getPath(e),o=r.path,a=r.helpLine,c=this.getStyle(e),u=Object(i.b)(t,o,c);if(null!=n.hold){var s=Object(i.j)(n.controlPoints,n.hold.index);t.addShape("circle",{attrs:{x:s.x,y:s.y,r:3,fill:"rgb(0,182,239)"}})}return a&&(n.helpLine=a,n.helpLineTime=(new Date).getTime()),!a&&(new Date).getTime()-n.helpLineTime>=150&&(n.helpLine=void 0,n.helpLineTime=void 0),n.helpLine&&t.addShape("path",{attrs:{path:[["M",n.helpLine[0].x,n.helpLine[0].y],["L",n.helpLine[1].x,n.helpLine[1].y]],lineAppendWidth:8,lineWidth:1,strokeOpacity:.92,stroke:"rgba(255,139,48)"}}),u}})}])});

/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7168":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("dfdb");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7201":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('dispose');


/***/ }),

/***/ "72af":
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__("99cd");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "72f0":
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "73ac":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("743f"),
    baseUnary = __webpack_require__("b047"),
    nodeUtil = __webpack_require__("99d3");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "743f":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isLength = __webpack_require__("b218"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "7463":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("c032");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "74e7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bc59");


/***/ }),

/***/ "74fd":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');


/***/ }),

/***/ "7530":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "764b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "7685":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3ac6");
var setGlobal = __webpack_require__("8fad");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "76dd":
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__("ce86");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "77b2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("c1b2");
var fails = __webpack_require__("06fa");
var createElement = __webpack_require__("7a37");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "78a2":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "78e7":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "7948":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "79bc":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "7a37":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3ac6");
var isObject = __webpack_require__("dfdb");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "7a48":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7b83":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("7c64"),
    mapCacheDelete = __webpack_require__("93ed"),
    mapCacheGet = __webpack_require__("2478"),
    mapCacheHas = __webpack_require__("a524"),
    mapCacheSet = __webpack_require__("1fc8");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "7c64":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("e24b"),
    ListCache = __webpack_require__("5e2e"),
    Map = __webpack_require__("79bc");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "7de7":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("0363");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "7e64":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e"),
    stackClear = __webpack_require__("efb6"),
    stackDelete = __webpack_require__("2fcc"),
    stackGet = __webpack_require__("802a"),
    stackHas = __webpack_require__("55a3"),
    stackSet = __webpack_require__("d02c");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var nativeFunctionToString = __webpack_require__("9e81");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "802a":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "8103":
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__("d194");

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),

/***/ "8176":
/***/ (function(module, exports, __webpack_require__) {

var setToStringTag = __webpack_require__("2874");

// Math[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "85d3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9a13");

/***/ }),

/***/ "85e3":
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "8604":
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__("26e8"),
    hasPath = __webpack_require__("e2c0");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "872a":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("3b4a");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "89d9":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("656b"),
    baseSet = __webpack_require__("159a"),
    castPath = __webpack_require__("e2e4");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "8adb":
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "8b7b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a5eb");
var global = __webpack_require__("3ac6");
var getBuiltIn = __webpack_require__("9883");
var IS_PURE = __webpack_require__("7042");
var DESCRIPTORS = __webpack_require__("c1b2");
var NATIVE_SYMBOL = __webpack_require__("1e63");
var fails = __webpack_require__("06fa");
var has = __webpack_require__("78e7");
var isArray = __webpack_require__("6220");
var isObject = __webpack_require__("dfdb");
var anObject = __webpack_require__("6f8d");
var toObject = __webpack_require__("4fff");
var toIndexedObject = __webpack_require__("a421");
var toPrimitive = __webpack_require__("7168");
var createPropertyDescriptor = __webpack_require__("2c6c");
var nativeObjectCreate = __webpack_require__("4896");
var objectKeys = __webpack_require__("a016");
var getOwnPropertyNamesModule = __webpack_require__("0cf0");
var getOwnPropertyNamesExternal = __webpack_require__("8e11");
var getOwnPropertySymbolsModule = __webpack_require__("a205");
var getOwnPropertyDescriptorModule = __webpack_require__("44ba");
var definePropertyModule = __webpack_require__("4180");
var propertyIsEnumerableModule = __webpack_require__("7043");
var createNonEnumerableProperty = __webpack_require__("0273");
var redefine = __webpack_require__("d666");
var shared = __webpack_require__("d659");
var sharedKey = __webpack_require__("b2ed");
var hiddenKeys = __webpack_require__("6e9a");
var uid = __webpack_require__("3e80");
var wellKnownSymbol = __webpack_require__("0363");
var wrappedWellKnownSymbolModule = __webpack_require__("fbcc");
var defineWellKnownSymbol = __webpack_require__("9bfb");
var setToStringTag = __webpack_require__("2874");
var InternalStateModule = __webpack_require__("2f5a");
var $forEach = __webpack_require__("dee0").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "8d05":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.toPrimitive` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');


/***/ }),

/***/ "8de2":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    keysIn = __webpack_require__("9934");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "8e11":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("a421");
var nativeGetOwnPropertyNames = __webpack_require__("0cf0").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "8eeb":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("32b3"),
    baseAssignValue = __webpack_require__("872a");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "8f95":
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__("fc48");
var wellKnownSymbol = __webpack_require__("0363");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "8fad":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3ac6");
var createNonEnumerableProperty = __webpack_require__("0273");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "9080":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9103":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("a421");
var addToUnscopables = __webpack_require__("c44e");
var Iterators = __webpack_require__("7463");
var InternalStateModule = __webpack_require__("2f5a");
var defineIterator = __webpack_require__("4056");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "91e9":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "93ed":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9520":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObject = __webpack_require__("1a8c");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "9638":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "96e9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3ac6");
var nativeFunctionToString = __webpack_require__("ab85");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "9802":
/***/ (function(module, exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__("9bfb");

defineWellKnownSymbol('replaceAll');


/***/ }),

/***/ "980e":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.search` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');


/***/ }),

/***/ "9883":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("764b");
var global = __webpack_require__("3ac6");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "98dc":
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__("76dd");

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),

/***/ "9934":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("6fcd"),
    baseKeysIn = __webpack_require__("41c3"),
    isArrayLike = __webpack_require__("30c9");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("60ae");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "99cd":
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "99d3":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("585a");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "9a13":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("a38c");


/***/ }),

/***/ "9ac4":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.species` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');


/***/ }),

/***/ "9aff":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("9638"),
    isArrayLike = __webpack_require__("30c9"),
    isIndex = __webpack_require__("c098"),
    isObject = __webpack_require__("1a8c");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9bfb":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("764b");
var has = __webpack_require__("78e7");
var wrappedWellKnownSymbolModule = __webpack_require__("fbcc");
var defineProperty = __webpack_require__("4180").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "9c96":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("06fa");
var wellKnownSymbol = __webpack_require__("0363");
var V8_VERSION = __webpack_require__("4963");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "9cd3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5ab9");


/***/ }),

/***/ "9e57":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "9e69":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "9e81":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "a016":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("b323");
var enumBugKeys = __webpack_require__("9e57");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "a06f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("74e7");

/***/ }),

/***/ "a0e5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("06fa");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "a205":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "a2bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__("e8b5");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("f8c2");

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ "a38c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("3e476");
var path = __webpack_require__("764b");

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),

/***/ "a421":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("638c");
var requireObjectCoercible = __webpack_require__("1875");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "a454":
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__("72f0"),
    defineProperty = __webpack_require__("3b4a"),
    identity = __webpack_require__("cd9d");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("c032");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a524":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "a5eb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("3ac6");
var getOwnPropertyDescriptor = __webpack_require__("44ba").f;
var isForced = __webpack_require__("a0e5");
var path = __webpack_require__("764b");
var bind = __webpack_require__("194a");
var createNonEnumerableProperty = __webpack_require__("0273");
var has = __webpack_require__("78e7");

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "aa1b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.unscopables` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');


/***/ }),

/***/ "aaec":
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "ab85":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("d659");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "ab88":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("b5f1");

/***/ }),

/***/ "ac0c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("de6a");
var path = __webpack_require__("764b");

module.exports = path.Object.getPrototypeOf;


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("f5df");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;


/***/ }),

/***/ "b047":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b218":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "b2ed":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("d659");
var uid = __webpack_require__("3e80");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "b301":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "b323":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("78e7");
var toIndexedObject = __webpack_require__("a421");
var indexOf = __webpack_require__("6386").indexOf;
var hiddenKeys = __webpack_require__("6e9a");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "b39a":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "b4c0":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var classof = __webpack_require__("c6b6");
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("b629");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b5f1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1c29");

__webpack_require__("0c82");
__webpack_require__("7201");
__webpack_require__("74fd");
__webpack_require__("266f");
// TODO: Remove from `core-js@4`
__webpack_require__("9802");


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "b629":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("b39a");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("f8c2");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "b760":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("872a"),
    eq = __webpack_require__("9638");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "bb83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("5779");
var createNonEnumerableProperty = __webpack_require__("0273");
var has = __webpack_require__("78e7");
var wellKnownSymbol = __webpack_require__("0363");
var IS_PURE = __webpack_require__("7042");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "bbc0":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "bc59":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("3e47");
__webpack_require__("484e");
var path = __webpack_require__("764b");

module.exports = path.Array.from;


/***/ }),

/***/ "c032":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("b622");


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c098":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "c1b2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("06fa");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c1bb":
/***/ (function(module, exports, __webpack_require__) {

!function(t,i){ true?module.exports=i(__webpack_require__("07cd")):undefined}(window,function(t){return function(t){var i={};function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var r in t)e.d(n,r,function(i){return t[i]}.bind(null,r));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=267)}({266:function(t,i,e){function n(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{},n=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.forEach(function(i){r(t,i,e[i])})}return t}function r(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var o=e(3),a=o.Util,c=o.G.Canvas,u=function(){function t(t){a.mix(this,n({type:"minimap",container:null,isMinimap:!0,backgroundCSS:{height:"100%",position:"absolute",margin:"auto",left:0,right:0,"z-index":0},minimapContainerCSS:{background:"#fff",position:"relative",overflow:"hidden"},viewportCSS:{height:"100%",position:"absolute",margin:"auto",left:0,right:0,"z-index":1},controlLayerCSS:{width:"100%",height:"100%",cursor:"move",position:"absolute","z-index":2},viewportWindowStyle:{stroke:"#91D5FF"},viewportBackStyle:{fill:"#EBEEF2",fillOpacity:.65},getGraph:function(){}},t)),this._initContainer(),this._initMiniMap(),this._bindEvent(),this._assignDebounceRender()}var i=t.prototype;return i._assignDebounceRender=function(){var t=this;this.debounceRender=a.debounce(function(){t.renderBackground(),t.renderViewPort()},32)},i.bindGraph=function(t){var i=this;t.on("afterchange",function(){i.debounceRender()}),t.on("afterlayout",function(){i.debounceRender()}),t.on("afterviewportchange",function(){i.renderViewPort()}),t.on("afterfilter",function(){i.debounceRender()})},i.renderBackground=function(t){t||(t=this.getGraph());var i=this.miniMapCanvas,e=this.width,n=this.height,r=[];t.saveImage({graph:t,width:e,height:n,canvas:i,beforeTransform:function(i){var e=i[0];t.getNodes().forEach(function(t){var i=t.getBBox(),n=t.getModel(),o=i.width;if(o*e<2){var c=t.getGraphicGroup(),u=a.clone(c.getMatrix());c.transform([["t",-n.x,-n.y],["s",2/(o*e),2/(o*e)],["t",n.x,n.y]]),r.push({item:t,originMatrix:u})}})},afterTransform:function(){r.forEach(function(t){var i=t.item,e=t.originMatrix;i.getGraphicGroup().setMatrix(e)})}}),this.miniMapMatrix=i.matrix},i._bindEvent=function(){var t,i,e,n,r,o=this,c=this.controlLayer,u=!1;function s(){u=!1,i=void 0,n=void 0,t=void 0,e=void 0,r=void 0}c.on("mousedown",function(c){o.miniMapMatrix&&(r=o.getGraph(),u=!0,t=a.clone(r.getMatrix()),i=o.miniMapMatrix[0],e=t[0],n={clientX:c.clientX,clientY:c.clientY})}),c.on("mouseup",function(){s()}),c.on("mouseleave",function(){s()}),c.on("mousemove",function(o){if(u&&r){var c=n.clientX-o.clientX,s=n.clientY-o.clientY,h=a.clone(t);a.mat3.translate(h,h,[e*c/i,e*s/i]),r.updateMatrix(h)}})},i._initMiniMap=function(){var t=this.background,i=this.viewPort,e=this.width,r=this.height,o=this.viewportWindowStyle,a=this.viewportBackStyle,u=new c({containerDOM:t,width:e,height:r}),s=new c({containerDOM:i,width:e,height:r}),h=s.addShape("rect",{attrs:n({x:0,y:0,width:e,height:r},o)}),p=s.addShape("path",{attrs:n({path:"M0,0 L1,1"},a)});t.css({width:e+"px",height:r+"px"}),i.css({position:"absolute"}),this.miniMapCanvas=u,this.viewportCanvas=s,this.viewportWindow=h,this.viewportBack=p},i._initContainer=function(){var t=this.container,i=this.width,e=this.height;t=a.initDOMContainer(t,"minimap"),i||(i=a.getWidth(t),this.width=i),e||(e=a.getHeight(t),this.height=e);var n=this.minimapContainerCSS;n.width=i+"px",n.height=e+"px";var r=this.backgroundCSS,o=this.viewportCSS,c=this.controlLayerCSS,u=a.createDOM('<div class="g6-editor-minimap-container"></div>',n),s=a.createDOM('<div class="g6-editor-minimap-background"></div>',r),h=a.createDOM('<div class="g6-editor-minimap-viewport">',o),p=a.createDOM('<div class="g6-editor-minimap-control-layer">',c);t.appendChild(u),u.appendChild(p),u.appendChild(h),u.appendChild(s),this.minimapContainer=u,this.background=s,this.viewPort=h,this.controlLayer=p},i.renderViewPort=function(t){if(t||(t=this.getGraph()),0!==t.getItems().length){var i=this.viewportWindow,e=this.viewportCanvas,n=this.viewportBack,r=this.miniMapMatrix,o=t.getWidth(),c=t.getHeight(),u=this.width,s=this.height,h=t.getMatrix();if(r){var p=a.invertMatrix({x:0,y:0},h),d=a.invertMatrix({x:o,y:c},h),f=a.applyMatrix(p,r),l=a.applyMatrix(d,r),g=l.x-f.x,v=l.y-f.y;n.attr({path:[["M",0,0],["L",u,0],["L",u,s],["L",0,s],["L",0,0],["M",f.x,f.y],["L",f.x,l.y],["L",l.x,l.y],["L",l.x,f.y],["L",f.x,f.y]]}),i.attr({x:f.x,y:f.y,width:g,height:v}),e.draw()}}},i.destroy=function(){this.minimapContainer.destroy()},t}();t.exports=u},267:function(t,i,e){function n(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var r=e(3),o=e(266),a=function(){function t(t){this.options=t}var i=t.prototype;return i.init=function(){var t=this.graph,i=new o(function(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(i){n(t,i,e[i])})}return t}({getGraph:function(){return t}},this.options));i.bindGraph(t),this.minimap=i},i.destroy=function(){this.minimap.destroy()},t}();r.Plugins["tool.minimap"]=a,r.Components.Minimap=o,t.exports=a},3:function(i,e){i.exports=t}})});
//# sourceMappingURL=plugin.tool.minimap.js.map

/***/ }),

/***/ "c1c9":
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__("a454"),
    shortOut = __webpack_require__("f3c1");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "c230":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("c1b2");
var definePropertyModule = __webpack_require__("4180");
var anObject = __webpack_require__("6f8d");
var objectKeys = __webpack_require__("a016");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "c32f":
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__("2b10");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c44e":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "c4b8":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("9883");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c6cf":
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__("4d8c"),
    overRest = __webpack_require__("2286"),
    setToString = __webpack_require__("c1c9");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8fe":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("f8af");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cb5a":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("9638");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "cbd0":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("1561");
var requireObjectCoercible = __webpack_require__("1875");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cc94":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "cd9d":
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "ce86":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    arrayMap = __webpack_require__("7948"),
    isArray = __webpack_require__("6747"),
    isSymbol = __webpack_require__("ffd6");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d02c":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e"),
    Map = __webpack_require__("79bc"),
    MapCache = __webpack_require__("7b83");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d094":
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "d194":
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__("c32f"),
    hasUnicode = __webpack_require__("aaec"),
    stringToArray = __webpack_require__("126d"),
    toString = __webpack_require__("76dd");

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d339":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f446");


/***/ }),

/***/ "d370":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("253c"),
    isObjectLike = __webpack_require__("1310");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

var ObjectPrototype = Object.prototype;

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (toString !== ObjectPrototype.toString) {
  redefine(ObjectPrototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d659":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("7042");
var store = __webpack_require__("7685");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.4.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "d666":
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__("0273");

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d925":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("a5eb");
var DESCRIPTORS = __webpack_require__("c1b2");
var create = __webpack_require__("4896");

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),

/***/ "da03":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "dc57":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "dcbe":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("30c9"),
    isObjectLike = __webpack_require__("1310");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "de6a":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("a5eb");
var fails = __webpack_require__("06fa");
var toObject = __webpack_require__("4fff");
var nativeGetPrototypeOf = __webpack_require__("5779");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("f5fb");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "dee0":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("194a");
var IndexedObject = __webpack_require__("638c");
var toObject = __webpack_require__("4fff");
var toLength = __webpack_require__("6725");
var arraySpeciesCreate = __webpack_require__("4344");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "dfdb":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "e24b":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("49f4"),
    hashDelete = __webpack_require__("1efc"),
    hashGet = __webpack_require__("bbc0"),
    hashHas = __webpack_require__("7a48"),
    hashSet = __webpack_require__("2524");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "e2c0":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("e2e4"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747"),
    isIndex = __webpack_require__("c098"),
    isLength = __webpack_require__("b218"),
    toKey = __webpack_require__("f4d6");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e2e4":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("6747"),
    isKey = __webpack_require__("f608"),
    stringToPath = __webpack_require__("18d8"),
    toString = __webpack_require__("76dd");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "e363":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.asyncIterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),

/***/ "e380":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("7b83");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e519":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("a5eb");
var isArray = __webpack_require__("6220");

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("2b3e");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e699":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.match` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var shared = __webpack_require__("5692");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var classof = __webpack_require__("c6b6");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("60ae");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var inspectSource = shared('inspectSource');
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (V8_VERSION === 66) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  if (!GLOBAL_CORE_JS_PROMISE && !IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e7cc":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.matchAll` well-known symbol
defineWellKnownSymbol('matchAll');


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "eac5":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "ec62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("6f8d");
var aPossiblePrototype = __webpack_require__("2f97");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "ec8c":
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "edbd":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("9883");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "ef09":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("9bfb");

// `Symbol.toStringTag` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');


/***/ }),

/***/ "efb6":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f3c1":
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "f446":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("d925");
var path = __webpack_require__("764b");

var Object = path.Object;

module.exports = function create(P, D) {
  return Object.create(P, D);
};


/***/ }),

/***/ "f4d6":
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__("ffd6");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "f575":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("bb83").IteratorPrototype;
var create = __webpack_require__("4896");
var createPropertyDescriptor = __webpack_require__("2c6c");
var setToStringTag = __webpack_require__("2874");
var Iterators = __webpack_require__("7463");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f5fb":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("06fa");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "f608":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("6747"),
    isSymbol = __webpack_require__("ffd6");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f8af":
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__("2474");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "f8c2":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "f909":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("7e64"),
    assignMergeValue = __webpack_require__("b760"),
    baseFor = __webpack_require__("72af"),
    baseMergeDeep = __webpack_require__("4f50"),
    isObject = __webpack_require__("1a8c"),
    keysIn = __webpack_require__("9934"),
    safeGet = __webpack_require__("8adb");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "fa21":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("7530"),
    getPrototype = __webpack_require__("2dcb"),
    isPrototype = __webpack_require__("eac5");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "faaa":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("6f8d");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js
var is_array = __webpack_require__("1316");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/array/from.js
var from = __webpack_require__("a06f");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js
var is_iterable = __webpack_require__("2dc0");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js
var iterator = __webpack_require__("6271");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/symbol.js
var symbol = __webpack_require__("ab88");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__("5d24");
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("0b11");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js


function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = set_prototype_of_default.a ? get_prototype_of_default.a : function _getPrototypeOf(o) {
    return o.__proto__ || get_prototype_of_default()(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/object/create.js
var create = __webpack_require__("09e1");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: ./node_modules/gg-editor-core/dist/bundle.js
var bundle = __webpack_require__("70a1");
var bundle_default = /*#__PURE__*/__webpack_require__.n(bundle);

// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__("42454");
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);

// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__("2593");

// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__("98dc");
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);

// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__("8103");
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);

// CONCATENATED MODULE: ./src/utils/index.js





// CONCATENATED MODULE: ./src/components/Base/Editor.js




 // do not open source, waiting for 3.x



var Editor_Editor =
/*#__PURE__*/
function (_GGEditorCore) {
  _inherits(Editor, _GGEditorCore);

  function Editor(options) {
    var _this;

    _classCallCheck(this, Editor);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Editor).call(this, options));
    _this.id = uniqueId_default()();
    return _this;
  }

  return Editor;
}(bundle_default.a);


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// CONCATENATED MODULE: ./src/common/constants.js

var FLOW_CONTAINER = 'J_FlowContainer';
var MIND_CONTAINER = 'J_MindContainer';
var KONI_CONTAINER = 'J_KoniContainer';
var TOOLBAR_CONTAINER = 'J_ToolbarContainer';
var MINIMAP_CONTAINER = 'J_MinimapContainer';
var CONTEXT_MENU_CONTAINER = 'J_ContextMenuContainer';
var FLOW_CLASS_NAME = 'Flow';
var MIND_CLASS_NAME = 'Mind';
var KONI_CLASS_NAME = 'Koni';
var EVENT_BEFORE_ADD_PAGE = 'beforeAddPage';
var EVENT_AFTER_ADD_PAGE = 'afterAddPage';
var STATUS_CANVAS_SELECTED = 'canvas-selected';
var STATUS_NODE_SELECTED = 'node-selected';
var STATUS_EDGE_SELECTED = 'edge-selected';
var STATUS_GROUP_SELECTED = 'group-selected';
var STATUS_MULTI_SELECTED = 'multi-selected';
var GRAPH_MOUSE_REACT_EVENTS = {
  click: 'Click',
  contextmenu: 'ContextMenu',
  dblclick: 'DoubleClick',
  drag: 'Drag',
  dragend: 'DragEnd',
  dragenter: 'DragEnter',
  dragleave: 'DragLeave',
  dragstart: 'DragStart',
  drop: 'Drop',
  mousedown: 'MouseDown',
  mouseenter: 'MouseEnter',
  mouseleave: 'MouseLeave',
  mousemove: 'MouseMove',
  mouseup: 'MouseUp'
};
var GRAPH_OTHER_REACT_EVENTS = {
  afterchange: 'onAfterChange',
  afterchangesize: 'onAfterChangeSize',
  afterviewportchange: 'onAfterViewportChange',
  beforechange: 'onBeforeChange',
  beforechangesize: 'onBeforeChangeSize',
  beforeviewportchange: 'onBeforeViewportChange',
  keydown: 'onKeyDown',
  keyup: 'onKeyUp',
  mousewheel: 'onMouseWheel'
};
var PAGE_REACT_EVENTS = {
  afteritemactived: 'onAfterItemActived',
  afteriteminactivated: 'onAfterItemInactivated',
  afteritemselected: 'onAfterItemSelected',
  afteritemunactived: 'onAfterItemInactivated',
  afteritemunselected: 'onAfterItemUnselected',
  beforeitemactived: 'onBeforeItemActived',
  beforeiteminactivated: 'onBeforeItemInactivated',
  beforeitemselected: 'onBeforeItemSelected',
  beforeitemunactived: 'onBeforeItemInactivated',
  beforeitemunselected: 'onBeforeItemUnselected',
  keyUpEditLabel: 'onKeyUpEditLabel'
};
var EDITOR_REACT_EVENTS = {
  aftercommandexecute: 'onAfterCommandExecute',
  beforecommandexecute: 'onBeforeCommandExecute'
};
var GRAPH_MOUSE_EVENTS = Object.keys(GRAPH_MOUSE_REACT_EVENTS);
var GRAPH_OTHER_EVENTS = Object.keys(GRAPH_OTHER_REACT_EVENTS);
var PAGE_EVENTS = Object.keys(PAGE_REACT_EVENTS);
var EDITOR_EVENTS = Object.keys(EDITOR_REACT_EVENTS);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js
var define_property = __webpack_require__("85d3");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./src/common/context/PropsAPIContext/PropsAPI.js





var PropsAPI_PropsAPI =
/*#__PURE__*/
function () {
  function PropsAPI(editor) {
    var _this = this;

    _classCallCheck(this, PropsAPI);

    _defineProperty(this, "editor", null);

    this.editor = editor;
    ['executeCommand'].forEach(function (key) {
      _this[key] = function () {
        var _this$editor;

        return (_this$editor = _this.editor)[key].apply(_this$editor, arguments);
      };
    });
    ['read', 'save', 'add', 'find', 'update', 'remove', 'getSelected'].forEach(function (key) {
      _this[key] = function () {
        var _this$currentPage;

        return (_this$currentPage = _this.currentPage)[key].apply(_this$currentPage, arguments);
      };
    });
  }

  _createClass(PropsAPI, [{
    key: "currentPage",
    get: function get() {
      return this.editor.getCurrentPage();
    }
  }]);

  return PropsAPI;
}();

/* harmony default export */ var PropsAPIContext_PropsAPI = (PropsAPI_PropsAPI);
// CONCATENATED MODULE: ./src/components/Editor/index.js







/* harmony default export */ var components_Editor = ({
  name: 'VueFlowchartEditor',
  props: _toConsumableArray(EDITOR_EVENTS.map(function (event) {
    return EDITOR_REACT_EVENTS[event];
  })),
  data: function data() {
    return {
      editor: null,
      propsAPI: null
    };
  },
  provide: function provide() {
    return {
      root: this
    };
  },
  created: function created() {
    this.init();
    this.bindEvent();
  },
  beforeDestroy: function beforeDestroy() {
    this.editor && this.editor.destroy();
    this.propsAPI = null;
  },
  methods: {
    addListener: function addListener(target, eventName, handler) {
      if (typeof handler === 'function') target.on(eventName, handler);
    },
    handleBeforeAddPage: function handleBeforeAddPage(func) {
      this.editor.on(EVENT_BEFORE_ADD_PAGE, func);
    },
    handleAfterAddPage: function handleAfterAddPage(func) {
      var page = this.editor.getCurrentPage();

      if (page) {
        func({
          page: page
        });
        return;
      }

      this.editor.on(EVENT_AFTER_ADD_PAGE, func);
    },
    init: function init() {
      this.editor = new Editor_Editor();
      this.propsAPI = new PropsAPIContext_PropsAPI(this.editor);
    },
    bindEvent: function bindEvent() {
      var _this = this;

      EDITOR_EVENTS.forEach(function (event) {
        _this.addListener(_this.editor, [event], _this[EDITOR_REACT_EVENTS[event]]);
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", [this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default]);
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat.js
var es_array_flat = __webpack_require__("0481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat.js
var es_array_unscopables_flat = __webpack_require__("4069");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// CONCATENATED MODULE: ./src/components/Page/index.js











/* harmony default export */ var Page = ({
  inject: ['root'],
  props: [].concat(_toConsumableArray(GRAPH_MOUSE_EVENTS.map(function (event) {
    var evN = GRAPH_MOUSE_REACT_EVENTS[event];
    return ["on".concat(evN), "onNode".concat(evN), "onEdge".concat(evN), "onGroup".concat(evN), "onGuide".concat(evN), "onAnchor".concat(evN)];
  }).flat()), _toConsumableArray(GRAPH_OTHER_EVENTS.map(function (event) {
    return GRAPH_OTHER_REACT_EVENTS[event];
  })), _toConsumableArray(PAGE_EVENTS.map(function (event) {
    return PAGE_REACT_EVENTS[event];
  }))),
  data: function data() {
    return {
      config: {},
      page: null,
      pageId: ''
    };
  },
  mounted: function mounted() {
    this.init().then(this.bindEvent);
  },
  methods: {
    getPageId: function getPageId() {
      // should be extend
      return '';
    },
    initPage: function initPage() {// should be extend
    },
    readData: function readData() {
      if (this.data) {
        this.page.read(this.data);
      }
    },
    addListener: function addListener(target, eventName, handler) {
      if (typeof handler === 'function') target.on(eventName, handler);
    },
    init: function init() {
      var _this = this;

      return new Promise(function (resolve) {
        _this.pageId = _this.getPageId();
        merge_default()(_this.config, _this.$props, {
          graph: {
            container: _this.pageId
          }
        });

        _this.$nextTick(function () {
          _this.initPage();

          _this.readData();

          resolve();
        });
      });
    },
    bindEvent: function bindEvent() {
      var _this2 = this;

      var addListener = this.addListener;
      var graph = this.getGraph();
      GRAPH_MOUSE_EVENTS.forEach(function (event) {
        var eventName = GRAPH_MOUSE_REACT_EVENTS[event];
        addListener(graph, "".concat(event), _this2["on".concat(eventName)]);
        addListener(graph, "node:".concat(event), _this2["onNode".concat(eventName)]);
        addListener(graph, "edge:".concat(event), _this2["onEdge".concat(eventName)]);
        addListener(graph, "group:".concat(event), _this2["onGroup".concat(eventName)]);
        addListener(graph, "guide:".concat(event), _this2["onGuide".concat(eventName)]);
        addListener(graph, "anchor:".concat(event), _this2["onAnchor".concat(eventName)]);
      });
      GRAPH_OTHER_EVENTS.forEach(function (event) {
        addListener(graph, [event], _this2[GRAPH_OTHER_REACT_EVENTS[event]]);
      });
      PAGE_EVENTS.forEach(function (event) {
        addListener(_this2.page, [event], _this2[PAGE_REACT_EVENTS[event]]);
      });
    },
    getGraph: function getGraph() {
      return this.page.getGraph();
    }
  },
  render: function render() {
    var h = arguments[0];
    var page = this.page,
        pageId = this.pageId;
    return h("div", {
      "attrs": {
        "id": pageId
      },
      "style": {
        height: '100%'
      }
    }, [page ? this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default : null]);
  }
});
// CONCATENATED MODULE: ./src/components/Flow/index.js




/* harmony default export */ var Flow = ({
  mixins: [Page],
  name: 'Flow',
  props: {
    data: {
      default: function _default() {
        return {
          nodes: [],
          edges: []
        };
      }
    },
    graph: Object,
    align: Object,
    grid: Object,
    shortcut: Object,
    noEndEdge: {
      default: true,
      type: Boolean
    }
  },
  methods: {
    getPageId: function getPageId() {
      return "".concat(FLOW_CONTAINER, "_").concat(this.root.editor.id);
    },
    initPage: function initPage() {
      var editor = this.root.editor;
      editor.emit(EVENT_BEFORE_ADD_PAGE, {
        className: FLOW_CLASS_NAME
      });
      this.page = new Editor_Editor.Flow(this.config);
      editor.add(this.page);
      editor.emit(EVENT_AFTER_ADD_PAGE, {
        page: this.page
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Koni/index.js




/* harmony default export */ var Koni = ({
  mixins: [Page],
  name: 'Koni',
  props: {
    data: {
      default: function _default() {
        return {
          nodes: [],
          edges: []
        };
      }
    },
    graph: Object,
    align: Object,
    grid: Object,
    shortcut: Object,
    noEndEdge: {
      default: true,
      type: Boolean
    }
  },
  methods: {
    getPageId: function getPageId() {
      return "".concat(KONI_CONTAINER, "_").concat(this.root.editor.id);
    },
    initPage: function initPage() {
      var editor = this.root.editor;
      editor.emit(EVENT_BEFORE_ADD_PAGE, {
        className: KONI_CLASS_NAME
      });
      this.page = new Editor_Editor.Koni(this.config);
      editor.add(this.page);
      editor.emit(EVENT_AFTER_ADD_PAGE, {
        page: this.page
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Mind/index.js




/* harmony default export */ var Mind = ({
  mixins: [Page],
  name: 'Mind',
  props: {
    data: {
      default: function _default() {
        return {
          roots: []
        };
      }
    },
    graph: Object,
    shortcut: Object
  },
  methods: {
    bindEvent: function bindEvent() {
      Page.methods.bindEvent.call(this);
      this.bindKeyUpEditLabel();
    },
    bindKeyUpEditLabel: function bindKeyUpEditLabel() {
      var _this = this;

      var editLabel = this.page.get('labelTextArea');
      editLabel.on('keyup', function (e) {
        e.stopPropagation();
        var item = editLabel.focusItem;
        var text = editLabel.textContent;

        _this.page.emit('keyUpEditLabel', {
          item: item,
          text: text
        });
      });
    },
    getPageId: function getPageId() {
      return "".concat(MIND_CONTAINER, "_").concat(this.root.editor.id);
    },
    initPage: function initPage() {
      var editor = this.root.editor;
      editor.emit(EVENT_BEFORE_ADD_PAGE, {
        className: MIND_CLASS_NAME
      });
      this.page = new Editor_Editor.Mind(this.config);
      editor.add(this.page);
      editor.emit(EVENT_AFTER_ADD_PAGE, {
        page: this.page
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Register/Register.js




/* harmony default export */ var Register = (function (type) {
  return {
    name: "Register".concat(type),
    inject: ['root'],
    props: {
      name: String,
      config: Object,
      extend: String,
      behaviour: Function,
      dependences: Array
    },
    data: function data() {
      return {
        type: type.toLowerCase()
      };
    },
    created: function created() {
      this.bindEvent();
    },
    methods: {
      bindEvent: function bindEvent() {
        var _this = this;

        var type = this.type;
        var handleBeforeAddPage = this.root.handleBeforeAddPage;
        handleBeforeAddPage(function (_ref) {
          var _host;

          var className = _ref.className;
          var host = Editor_Editor[className];
          var keys = ['name', 'config', 'extend'];

          if (type === 'command') {
            host = Editor_Editor;
          }

          if (type === 'behaviour') {
            keys = ['name', 'behaviour', 'dependences'];
          }

          var args = keys.map(function (key) {
            return _this[key];
          });

          (_host = host)["register".concat(upperFirst_default()(type))].apply(_host, _toConsumableArray(args));
        });
      }
    },
    render: function render() {
      return null;
    }
  };
});
// CONCATENATED MODULE: ./src/components/Register/index.js

var RegisterNode = Register('Node');
var RegisterEdge = Register('Edge');
var RegisterGroup = Register('Group');
var RegisterGuide = Register('Guide');
var RegisterCommand = Register('Command');
var RegisterBehaviour = Register('Behaviour');
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./src/components/Command/index.js

/* harmony default export */ var Command = ({
  name: 'Command',
  props: {
    name: String,
    required: true
  },
  render: function render() {
    var h = arguments[0];
    var name = this.name; // https://github.com/vuejs/vue/issues/9458#issuecomment-461845497

    return h("div", {
      "attrs": {
        "data-command": name
      },
      "class": "command"
    }, [this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default]);
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/@antv/g6/build/g6.js
var g6 = __webpack_require__("07cd");
var g6_default = /*#__PURE__*/__webpack_require__.n(g6);

// CONCATENATED MODULE: ./src/components/Minimap/index.js







__webpack_require__("c1bb");

/* harmony default export */ var Minimap = ({
  name: 'Minimap',
  inject: ['root'],
  props: {
    container: String,
    width: Number,
    height: Number,
    viewportWindowStyle: Object,
    viewportBackStyle: Object
  },
  data: function data() {
    return {
      containerId: '',
      minimap: null
    };
  },
  created: function created() {
    this.bindEvent();
  },
  mounted: function mounted() {
    this.init().then(this.bindPage);
  },
  beforeDestroy: function beforeDestroy() {
    this.minimap && this.minimap.destroy();
  },
  methods: {
    bindEvent: function bindEvent() {
      this.root.handleAfterAddPage(this.bindPage);
    },
    init: function init() {
      var _this = this;

      return new Promise(function (resolve) {
        _this.containerId = "".concat(MINIMAP_CONTAINER, "_").concat(_this.root.editor.id);
        var container = _this.container || _this.containerId;
        var width = _this.width,
            height = _this.height,
            viewportWindowStyle = _this.viewportWindowStyle,
            viewportBackStyle = _this.viewportBackStyle;

        _this.$nextTick(function () {
          var _document$getElementB = document.getElementById(container),
              clientWidth = _document$getElementB.clientWidth,
              clientHeight = _document$getElementB.clientHeight;

          _this.minimap = new g6_default.a.Components.Minimap({
            container: container,
            width: width || clientWidth,
            height: height || clientHeight,
            viewportWindowStyle: viewportWindowStyle,
            viewportBackStyle: viewportBackStyle
          });

          var currentPage = _this.getCurrentPage();

          _this.minimap.getGraph = function () {
            return currentPage.getGraph();
          };

          resolve();
        });
      });
    },
    bindPage: function bindPage() {
      var currentPage = this.getCurrentPage();

      if (!this.minimap || !currentPage) {
        return;
      }

      var graph = currentPage.getGraph();
      this.minimap.bindGraph(graph);
      this.minimap.debounceRender();
    },
    getCurrentPage: function getCurrentPage() {
      var currentPage = this.root.editor.getCurrentPage();
      return currentPage;
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "id": this.containerId
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/ContextMenu/Menu.js
/* harmony default export */ var Menu = (function (type) {
  return {
    name: "".concat(type, "Menu"),
    data: function data() {
      return {
        type: type.toLowerCase()
      };
    },
    render: function render() {
      var h = arguments[0];
      var type = this.type;
      return h("div", {
        "class": "menu",
        "attrs": {
          "data-status": "".concat(type, "-selected")
        }
      }, [this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default]);
    }
  };
});
// CONCATENATED MODULE: ./src/components/ContextMenu/index.js




var NodeMenu = Menu('Node');
var EdgeMenu = Menu('Edge');
var GroupMenu = Menu('Group');
var MultiMenu = Menu('Multi');
var CanvasMenu = Menu('Canvas');
/* harmony default export */ var ContextMenu = ({
  name: 'ContextMenu',
  inject: ['root'],
  // provide by Editor
  data: function data() {
    return {
      contextMenu: null,
      containerId: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    var editor = this.root.editor;
    this.getContainerId();
    this.$nextTick(function () {
      _this.contextMenu = new Editor_Editor.Contextmenu({
        container: _this.containerId
      });
      editor.add(_this.contextMenu);
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.contextMenu && this.contextMenu.destroy();
    this.contextMenu = null;
  },
  methods: {
    getContainerId: function getContainerId() {
      var editor = this.root.editor;
      this.containerId = "".concat(CONTEXT_MENU_CONTAINER, "_").concat(editor.id);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "id": this.containerId
      }
    }, [this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default]);
  }
});
// CONCATENATED MODULE: ./src/components/Toolbar/index.js



/* harmony default export */ var Toolbar = ({
  name: 'Toolbar',
  inject: ['root'],
  data: function data() {
    return {
      containerId: '',
      toolbar: null
    };
  },
  created: function created() {
    this.getContainerId();
  },
  mounted: function mounted() {
    var _this = this;

    var _this$root = this.root,
        editor = _this$root.editor,
        handleAfterAddPage = _this$root.handleAfterAddPage;
    handleAfterAddPage(function () {
      _this.toolbar = new Editor_Editor.Toolbar({
        container: _this.containerId
      });
      editor.add(_this.toolbar);
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.toolbar && this.toolbar.destroy();
    this.toolbar = null;
  },
  methods: {
    getContainerId: function getContainerId() {
      var editor = this.root.editor;
      this.containerId = "".concat(TOOLBAR_CONTAINER, "_").concat(editor.id);
    }
  },
  render: function render() {
    var h = arguments[0];
    var containerId = this.containerId;
    return h("div", {
      "attrs": {
        "id": containerId
      }
    }, [this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default]);
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// CONCATENATED MODULE: ./src/components/ItemPanel/Item.js









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* harmony default export */ var Item = ({
  name: 'Item',
  inject: ['root'],
  props: {
    type: {
      type: String,
      default: 'node'
    },
    size: String,
    shape: String,
    src: String,
    model: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      page: null
    };
  },
  created: function created() {
    this.bindEvent();
  },
  methods: {
    bindEvent: function bindEvent() {
      var _this = this;

      this.root.handleAfterAddPage(function (_ref) {
        var page = _ref.page;
        _this.page = page;
      });
    },
    handleMouseDown: function handleMouseDown() {
      var type = this.type,
          size = this.size,
          shape = this.shape,
          model = this.model;

      if (this.page) {
        this.page.beginAdd(type, _objectSpread({
          type: type,
          size: size,
          shape: shape
        }, model));
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var src = this.src,
        shape = this.shape;
    return h("div", {
      "style": {
        cursor: 'pointer'
      },
      "on": {
        "mousedown": this.handleMouseDown
      }
    }, [src ? h("img", {
      "attrs": {
        "src": src,
        "alt": shape,
        "draggable": false
      }
    }) : this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default]);
  }
});
// CONCATENATED MODULE: ./src/components/ItemPanel/index.js


/* harmony default export */ var ItemPanel = ({
  name: 'ItemPanel',
  created: function created() {
    this.bindEvent();
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('mouseup', this.handleMouseUp);
  },
  methods: {
    bindEvent: function bindEvent() {
      var _this = this;

      this.root.handleAfterAddPage(function (_ref) {
        var page = _ref.page;
        _this.page = page;
        document.addEventListener('mouseup', _this.handleMouseUp);
      });
    },
    handleMouseUp: function handleMouseUp() {
      this.page.cancelAdd();
    }
  },
  inject: ['root'],
  render: function render() {
    var h = arguments[0];
    return h("div", [this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default]);
  }
});
// CONCATENATED MODULE: ./src/components/DetailPanel/Panel.js
/* harmony default export */ var Panel = (function (type) {
  return {
    name: "".concat(type, "Panel"),
    props: ['status'],
    data: function data() {
      return {
        type: type.toLowerCase()
      };
    },
    render: function render() {
      var h = arguments[0];
      var type = this.type,
          status = this.status;

      if ("".concat(type, "-selected") !== status) {
        return null;
      }

      return h("div", [this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default]);
    }
  };
});
// CONCATENATED MODULE: ./src/components/DetailPanel/index.js



var NodePanel = Panel('Node');
var EdgePanel = Panel('Edge');
var GroupPanel = Panel('Group');
var MultiPanel = Panel('Multi');
var CanvasPanel = Panel('Canvas');
/* harmony default export */ var DetailPanel = ({
  name: 'DetailPanel',
  inject: ['root'],
  data: function data() {
    return {
      status: '',
      uniqueId: ''
    };
  },
  created: function created() {
    this.bindEvent();
  },
  methods: {
    bindEvent: function bindEvent() {
      var _this = this;

      this.root.handleAfterAddPage(function (_ref) {
        var page = _ref.page;
        _this.status = STATUS_CANVAS_SELECTED;
        page.on('statuschange', function (_ref2) {
          var status = _ref2.status;
          _this.status = status;
          _this.uniqueId = uniqueId_default()();
        });
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    var status = this.status,
        uniqueId = this.uniqueId;

    if (!status) {
      return null;
    }

    return h("div", {
      "key": uniqueId
    }, [this.$scopedSlots.default({
      status: status,
      uniqueId: uniqueId
    })]);
  }
});
// CONCATENATED MODULE: ./src/index.js












/* harmony default export */ var src = (components_Editor);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport Flow */__webpack_require__.d(__webpack_exports__, "Flow", function() { return Flow; });
/* concated harmony reexport Mind */__webpack_require__.d(__webpack_exports__, "Mind", function() { return Mind; });
/* concated harmony reexport Koni */__webpack_require__.d(__webpack_exports__, "Koni", function() { return Koni; });
/* concated harmony reexport RegisterNode */__webpack_require__.d(__webpack_exports__, "RegisterNode", function() { return RegisterNode; });
/* concated harmony reexport RegisterEdge */__webpack_require__.d(__webpack_exports__, "RegisterEdge", function() { return RegisterEdge; });
/* concated harmony reexport RegisterGroup */__webpack_require__.d(__webpack_exports__, "RegisterGroup", function() { return RegisterGroup; });
/* concated harmony reexport RegisterGuide */__webpack_require__.d(__webpack_exports__, "RegisterGuide", function() { return RegisterGuide; });
/* concated harmony reexport RegisterCommand */__webpack_require__.d(__webpack_exports__, "RegisterCommand", function() { return RegisterCommand; });
/* concated harmony reexport RegisterBehaviour */__webpack_require__.d(__webpack_exports__, "RegisterBehaviour", function() { return RegisterBehaviour; });
/* concated harmony reexport Command */__webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* concated harmony reexport Minimap */__webpack_require__.d(__webpack_exports__, "Minimap", function() { return Minimap; });
/* concated harmony reexport NodeMenu */__webpack_require__.d(__webpack_exports__, "NodeMenu", function() { return NodeMenu; });
/* concated harmony reexport EdgeMenu */__webpack_require__.d(__webpack_exports__, "EdgeMenu", function() { return EdgeMenu; });
/* concated harmony reexport GroupMenu */__webpack_require__.d(__webpack_exports__, "GroupMenu", function() { return GroupMenu; });
/* concated harmony reexport MultiMenu */__webpack_require__.d(__webpack_exports__, "MultiMenu", function() { return MultiMenu; });
/* concated harmony reexport CanvasMenu */__webpack_require__.d(__webpack_exports__, "CanvasMenu", function() { return CanvasMenu; });
/* concated harmony reexport ContextMenu */__webpack_require__.d(__webpack_exports__, "ContextMenu", function() { return ContextMenu; });
/* concated harmony reexport Toolbar */__webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* concated harmony reexport Item */__webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* concated harmony reexport ItemPanel */__webpack_require__.d(__webpack_exports__, "ItemPanel", function() { return ItemPanel; });
/* concated harmony reexport NodePanel */__webpack_require__.d(__webpack_exports__, "NodePanel", function() { return NodePanel; });
/* concated harmony reexport EdgePanel */__webpack_require__.d(__webpack_exports__, "EdgePanel", function() { return EdgePanel; });
/* concated harmony reexport GroupPanel */__webpack_require__.d(__webpack_exports__, "GroupPanel", function() { return GroupPanel; });
/* concated harmony reexport MultiPanel */__webpack_require__.d(__webpack_exports__, "MultiPanel", function() { return MultiPanel; });
/* concated harmony reexport CanvasPanel */__webpack_require__.d(__webpack_exports__, "CanvasPanel", function() { return CanvasPanel; });
/* concated harmony reexport DetailPanel */__webpack_require__.d(__webpack_exports__, "DetailPanel", function() { return DetailPanel; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "fba5":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "fbcc":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("0363");


/***/ }),

/***/ "fc48":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fc93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a5eb");
var fails = __webpack_require__("06fa");
var isArray = __webpack_require__("6220");
var isObject = __webpack_require__("dfdb");
var toObject = __webpack_require__("4fff");
var toLength = __webpack_require__("6725");
var createProperty = __webpack_require__("6c15");
var arraySpeciesCreate = __webpack_require__("4344");
var arrayMethodHasSpeciesSupport = __webpack_require__("9c96");
var wellKnownSymbol = __webpack_require__("0363");
var V8_VERSION = __webpack_require__("4963");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ }),

/***/ "ffd6":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ })

/******/ });
});
//# sourceMappingURL=vue-flowchart-editor.umd.js.map