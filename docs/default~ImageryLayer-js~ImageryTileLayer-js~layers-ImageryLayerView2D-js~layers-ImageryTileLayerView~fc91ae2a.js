(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ImageryLayer-js~ImageryTileLayer-js~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView~fc91ae2a"],{

/***/ "Piei":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/PixelBlock.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "Gj5k");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var n;const p=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.layers.support.PixelBlock");let c=n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]{constructor(t){super(t),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.pixels=null,this.statistics=null}static createEmptyBand(t,e){return new(n.getPixelArrayConstructor(t))(e)}static getPixelArrayConstructor(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"u32":e=Uint32Array;break;case"f32":e=Float32Array;break;case"f64":e=Float64Array;break;case"c64":case"c128":case"unknown":e=Float32Array}return e}castPixelType(t){if(!t)return"f32";let e=t.toLowerCase();return["u1","u2","u4"].indexOf(e)>-1?e="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(e)&&(e="f32"),e}getPlaneCount(){return this.pixels&&this.pixels.length}addData(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})}getAsRGBA(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}getAsRGBAFloat(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}updateStatistics(){this.statistics=this.pixels.map((t=>this._calculateBandStatistics(t,this.mask)));const t=this.mask;let e=0;if(t)for(let s=0;s<t.length;s++)t[s]&&e++;else e=this.width*this.height;this.validPixelCount=e}clamp(t){if(!t||"f64"===t||"f32"===t)return;let e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}const[s,i]=e,r=this.pixels,l=this.width*this.height,a=r.length;let o,h,p;const c=[];for(let e=0;e<a;e++){p=n.createEmptyBand(t,l),o=r[e];for(let t=0;t<l;t++)h=o[t],p[t]=h>i?i:h<s?s:h;c.push(p)}this.pixels=c,this.pixelType=t}extractBands(t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(t)||0===t.length||null==this.pixels||0===this.pixels.length)return this;const e=this.pixels.length,i=t.some((t=>t>=this.pixels.length)),r=e===t.length&&!t.some(((t,e)=>t!==e));return i||r?this:new n({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((t=>this.pixels[t])),statistics:this.statistics&&t.map((t=>this.statistics[t]))})}clone(){const t=new n({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let s;this.mask&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0));const i=n.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const e=this.pixels[0].slice;for(s=0;s<this.pixels.length;s++)t.pixels[s]=e?this.pixels[s].slice(0,this.pixels[s].length):new i(this.pixels[s])}if(this.statistics)for(t.statistics=[],s=0;s<this.statistics.length;s++)t.statistics[s]=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.statistics[s]);return t}_fillFrom8Bit(t){const{mask:e,maskIsAlpha:s,pixels:i}=this;if(!t||!i||!i.length)return void p.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let r,l,a,o;r=l=a=i[0],i.length>=3?(l=i[1],a=i[2]):2===i.length&&(l=i[1]);const h=new Uint32Array(t),n=this.width*this.height;if(r.length===n)if(e&&e.length===n)if(s)for(o=0;o<n;o++)e[o]&&(h[o]=e[o]<<24|a[o]<<16|l[o]<<8|r[o]);else for(o=0;o<n;o++)e[o]&&(h[o]=255<<24|a[o]<<16|l[o]<<8|r[o]);else for(o=0;o<n;o++)h[o]=255<<24|a[o]<<16|l[o]<<8|r[o];else p.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(t){const{pixels:e,mask:s,statistics:i}=this;if(!t||!e||!e.length)return void p.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const r=this.pixelType;let l=1,a=0,o=1;if(i&&i.length>0)a=i.map((t=>t.minValue)).reduce(((t,e)=>Math.min(t,e))),o=i.map((t=>t.maxValue-t.minValue)).reduce(((t,e)=>Math.max(t,e))),l=255/o;else{let t=255;"s8"===r?(a=-128,t=127):"u16"===r?t=65535:"s16"===r?(a=-32768,t=32767):"u32"===r?t=4294967295:"s32"===r?(a=-2147483648,t=2147483647):"f32"===r?(a=-34e38,t=34e38):"f64"===r&&(a=-Number.MAX_VALUE,t=Number.MAX_VALUE),l=255/(t-a)}const h=new Uint32Array(t),n=this.width*this.height;let c,u,m,x,f;if(c=u=m=e[0],c.length!==n)return p.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(u=e[1],e.length>=3&&(m=e[2]),s&&s.length===n)for(x=0;x<n;x++)s[x]&&(h[x]=255<<24|(m[x]-a)*l<<16|(u[x]-a)*l<<8|(c[x]-a)*l);else for(x=0;x<n;x++)h[x]=255<<24|(m[x]-a)*l<<16|(u[x]-a)*l<<8|(c[x]-a)*l;else if(s&&s.length===n)for(x=0;x<n;x++)f=(c[x]-a)*l,s[x]&&(h[x]=255<<24|f<<16|f<<8|f);else for(x=0;x<n;x++)f=(c[x]-a)*l,h[x]=255<<24|f<<16|f<<8|f}_fillFrom32Bit(t){const{pixels:e,mask:s}=this;if(!t||!e||!e.length)return p.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let i,r,l,a;i=r=l=e[0],e.length>=3?(r=e[1],l=e[2]):2===e.length&&(r=e[1]);const o=this.width*this.height;if(i.length!==o)return p.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let h=0;if(s&&s.length===o)for(a=0;a<o;a++)t[h++]=i[a],t[h++]=r[a],t[h++]=l[a],t[h++]=1&s[a];else for(a=0;a<o;a++)t[h++]=i[a],t[h++]=r[a],t[h++]=l[a],t[h++]=1}_calculateBandStatistics(t,e){let s=1/0,i=-1/0;const r=t.length;let l,a=0;if(e)for(l=0;l<r;l++)e[l]&&(a=t[l],s=a<s?a:s,i=a>i?a:i);else for(l=0;l<r;l++)a=t[l],s=a<s?a:s,i=a>i?a:i;return{minValue:s,maxValue:i}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],c.prototype,"width",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],c.prototype,"height",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],c.prototype,"pixelType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__["cast"])("pixelType")],c.prototype,"castPixelType",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],c.prototype,"validPixelCount",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],c.prototype,"mask",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],c.prototype,"maskIsAlpha",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],c.prototype,"pixels",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],c.prototype,"statistics",void 0),c=n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.PixelBlock")],c);var u=c;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "ne7T":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterFunctions/pixelUtils.js ***!
  \********************************************************************************/
/*! exports provided: approximateTransform, clip, colorize, createColormapLUT, createContrastBrightnessLUT, createStretchLUT, estimateStatisticsFromHistograms, estimateStatisticsHistograms, extractBands, getClipBounds, lookupPixels, mosaic, mosaicPixelData, remapColor, resampleByMajority, setValidBoundary, split, stretch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approximateTransform", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clip", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorize", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColormapLUT", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContrastBrightnessLUT", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStretchLUT", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateStatisticsFromHistograms", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateStatisticsHistograms", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractBands", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClipBounds", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookupPixels", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mosaic", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mosaicPixelData", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remapColor", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resampleByMajority", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValidBoundary", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stretch", function() { return h; });
/* harmony import */ var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PixelBlock.js */ "Piei");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e=function(t){return t&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0};function n(n,i){if(!i||!e(n))return n;const l=n.pixels.length;return i&&i.some((t=>t>=l))||1===l&&1===i.length&&0===i[0]?n:l!==i.length||i.some(((t,e)=>t!==e))?new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({pixelType:n.pixelType,width:n.width,height:n.height,mask:n.mask,validPixelCount:n.validPixelCount,maskIsAlpha:n.maskIsAlpha,pixels:i.map((t=>n.pixels[t])),statistics:n.statistics&&i.map((t=>n.statistics[t]))}):n}function i(t){if(!t)return;const e=t.colormap;if(!e||0===e.length)return;const n=e.sort(((t,e)=>t[0]-e[0]));let i=0;n[0][0]<0&&(i=n[0][0]);const l=Math.max(256,n[n.length-1][0]-i+1),o=new Uint8Array(4*l),r=[];let a,s=0,h=0;const f=5===n[0].length;if(l>65536)return n.forEach((t=>{r[t[0]-i]=f?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:r,offset:i,alphaSpecified:f};if(t.fillUnspecified)for(a=n[h],s=a[0]-i;s<l;s++)o[4*s]=a[1],o[4*s+1]=a[2],o[4*s+2]=a[3],o[4*s+3]=f?a[4]:255,s===a[0]-i&&(a=h===n.length-1?a:n[++h]);else for(s=0;s<n.length;s++)a=n[s],h=4*(a[0]-i),o[h]=a[1],o[h+1]=a[2],o[h+2]=a[3],o[h+3]=f?a[4]:255;return{indexedColormap:o,offset:i,alphaSpecified:f}}function l(t,n){if(!e(t))return t;if(!n&&(n.indexedColormap||n.indexed2DColormap))return t;const i=t.clone(),l=i.pixels;let o=i.mask;const r=i.width*i.height;if(1!==l.length)return t;const{indexedColormap:a,indexed2DColormap:s,offset:h,alphaSpecified:f}=n,u=a.length-1;let x=0;const p=l[0],c=new Uint8Array(p.length),m=new Uint8Array(p.length),d=new Uint8Array(p.length);let w,y=0;if(a)if(o)for(x=0;x<r;x++)o[x]&&(y=4*(p[x]-h),y<h||y>u?o[x]=0:(c[x]=a[y],m[x]=a[y+1],d[x]=a[y+2],o[x]=a[y+3]));else{for(o=new Uint8Array(r),x=0;x<r;x++)y=4*(p[x]-h),y<h||y>u?o[x]=0:(c[x]=a[y],m[x]=a[y+1],d[x]=a[y+2],o[x]=a[y+3]);i.mask=o}else if(o)for(x=0;x<r;x++)o[x]&&(w=s[p[x]],c[x]=w[0],m[x]=w[1],d[x]=w[2],o[x]=w[3]);else{for(o=new Uint8Array(r),x=0;x<r;x++)w=s[p[x]],c[x]=w[0],m[x]=w[1],d[x]=w[2],o[x]=w[3];i.mask=o}return i.pixels=[c,m,d],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=f,i}function o(t){if(!e(t))return null;t.statistics||t.updateStatistics();const{pixels:n,mask:i,pixelType:l,statistics:o}=t,r=t.width*t.height,a=n.length;let s,h,f,u,x;const p=[],c=[];let m,d,w,y,g,M,k,A,U,C;const T=256;for(u=0;u<a;u++){if(m=new Uint32Array(T),w=n[u],"u8"===l)if(s=-.5,h=255.5,i)for(x=0;x<r;x++)i[x]&&m[w[x]]++;else for(x=0;x<r;x++)m[w[x]]++;else{if(s=o[u].minValue,h=o[u].maxValue,f=(h-s)/T,d=new Uint32Array(257),i)for(x=0;x<r;x++)i[x]&&d[Math.floor((w[x]-s)/f)]++;else for(x=0;x<r;x++)d[Math.floor((w[x]-s)/f)]++;for(x=0;x<255;x++)m[x]=d[x];m[255]=d[255]+d[256]}for(p.push({min:s,max:h,size:T,counts:m}),y=0,g=0,A=0,x=0;x<T;x++)y+=m[x],g+=x*m[x];for(U=g/y,x=0;x<T;x++)A+=m[x]*Math.pow(x-U,2);C=Math.sqrt(A/(y-1)),f=(h-s)/T,M=(U+.5)*f+s,k=C*f,c.push({min:s,max:h,avg:M,stddev:k})}return{statistics:c,histograms:p}}function r(t){const e=[];for(let n=0;n<t.length;n++){const{min:i,max:l,size:o,counts:r}=t[n];let a=0,s=0;for(let t=0;t<o;t++)a+=r[t],s+=t*r[t];const h=s/a;let f=0;for(let t=0;t<o;t++)f+=r[t]*Math.pow(t-h,2);const u=(l-i)/o,x=(h+.5)*u+i,p=Math.sqrt(f/(a-1))*u;e.push({min:i,max:l,avg:x,stddev:p})}return e}function a(t){const{minCutOff:e,maxCutOff:n,gamma:i,pixelType:l}=t,o=t.outMin||0,r=t.outMax||255;if(-1===["u8","u16","s8","s16"].indexOf(l))return null;const a=e.length;let h,f,u=0;"s8"===l?u=-127:"s16"===l&&(u=-32767);let x=256;["u16","s16"].indexOf(l)>-1&&(x=65536);const p=[],c=[],m=r-o;for(h=0;h<a;h++)c[h]=n[h]-e[h],p[h]=m/(n[h]-e[h]);const d=i&&i.length>=a,w=[];if(d)for(h=0;h<a;h++)i[h]>1?i[h]>2?w[h]=6.5+Math.pow(i[h]-2,2.5):w[h]=6.5+100*Math.pow(2-i[h],4):w[h]=1;let y;const g=[];let M,k,A;if(d)for(h=0;h<a;h++){for(A=[],f=0;f<x;f++)M=f+u,y=(M-e[h])/c[h],k=1,i[h]>1&&(k-=Math.pow(1/m,y*w[h])),M<n[h]&&M>e[h]?A[f]=Math.floor(k*m*Math.pow(y,1/i[h]))+o:M>=n[h]?A[f]=r:A[f]=o;g[h]=A}else for(h=0;h<a;h++){for(A=[],f=0;f<x;f++)M=f+u,M<=e[h]?A[f]=o:M>=n[h]?A[f]=r:A[f]=Math.floor((M-e[h])/c[h]*m)+o;g[h]=A}if(null!=t.contrastOffset){const e=s(t.contrastOffset,t.brightnessOffset);for(h=0;h<a;h++)for(A=g[h],f=0;f<x;f++)A[f]=e[A[f]]}return{lut:g,offset:u}}function s(t,e){const n=Math.min(Math.max(t,-100),100),i=Math.min(Math.max(e,-100),100),l=255;let o,r;const a=new Uint8Array(256);for(o=0;o<256;o++)n>0&&n<100?r=(200*o-25500+510*i)/(2*(100-n))+128:n<=0&&n>-100?r=(200*o-25500+510*i)*(100+n)/2e4+128:100===n?(r=200*o-25500+256*(100-n)+510*i,r=r>0?l:0):-100===n&&(r=128),a[o]=r>l?l:r<0?0:r;return a}function h(t,n){if(!e(t))return null;const i=t.clone(),{pixels:l,mask:o}=i,{minCutOff:r,maxCutOff:a,gamma:s}=n,h=n.outMin||0,f=n.outMax||255,u=i.width*i.height,x=l.length;let p,c,m,d,w;const y=f-h,g=[],M=[];for(p=0;p<x;p++)M[p]=a[p]-r[p],g[p]=y/(a[p]-r[p]);const k=s&&s.length>=x,A=[];if(k)for(p=0;p<x;p++)s[p]>1?s[p]>2?A[p]=6.5+Math.pow(s[p]-2,2.5):A[p]=6.5+100*Math.pow(2-s[p],4):A[p]=1;if(k)if(null!=o){for(c=0;c<u;c++)if(o[c])for(p=0;p<x;p++)m=l[p][c],w=(m-r[p])/M[p],d=1,s[p]>1&&(d-=Math.pow(1/y,w*A[p])),m<a[p]&&m>r[p]?l[p][c]=Math.floor(d*y*Math.pow(w,1/s[p]))+h:m>=a[p]?l[p][c]=f:l[p][c]=h}else for(c=0;c<u;c++)for(p=0;p<x;p++)m=l[p][c],w=(m-r[p])/M[p],d=1,s[p]>1&&(d-=Math.pow(1/y,w*A[p])),m<a[p]&&m>r[p]?l[p][c]=Math.floor(d*y*Math.pow(w,1/s[p]))+h:m>=a[p]?l[p][c]=f:l[p][c]=h;else if(null!=o){for(c=0;c<u;c++)if(o[c])for(p=0;p<x;p++)m=l[p][c],m<a[p]&&m>r[p]?l[p][c]=Math.floor((m-r[p])/M[p]*y)+h:m>=a[p]?l[p][c]=f:l[p][c]=h}else for(c=0;c<u;c++)for(p=0;p<x;p++)m=l[p][c],m<a[p]&&m>r[p]?l[p][c]=Math.floor((m-r[p])/M[p]*y)+h:m>=a[p]?l[p][c]=f:l[p][c]=h;return i.pixelType="u8",i.updateStatistics(),i}function f(n,i){if(!e(n))return null;const{pixels:l,mask:o}=n,r=n.width*n.height,a=l.length;let s=i.lut;const{offset:h}=i;let f,u;s&&1===s[0].length&&(s=l.map((()=>s)));const x=[];let p,c,m;if(h)if(null==o)for(f=0;f<a;f++){for(p=l[f],c=s[f],m=new Uint8Array(r),u=0;u<r;u++)m[u]=c[p[u]-h];x.push(m)}else for(f=0;f<a;f++){for(p=l[f],c=s[f],m=new Uint8Array(r),u=0;u<r;u++)o[u]&&(m[u]=c[p[u]-h]);x.push(m)}else if(null==o)for(f=0;f<a;f++){for(p=l[f],c=s[f],m=new Uint8Array(r),u=0;u<r;u++)m[u]=c[p[u]];x.push(m)}else for(f=0;f<a;f++){for(p=l[f],c=s[f],m=new Uint8Array(r),u=0;u<r;u++)o[u]&&(m[u]=c[p[u]]);x.push(m)}const d=new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({width:n.width,height:n.height,pixels:x,mask:o,pixelType:"u8"});return d.updateStatistics(),d}function u(t,n){if(!e(t))return null;const i=t.clone(),{pixels:l}=i,o=i.width*i.height,r=n.length,a=Math.floor(r/2),s=n[Math.floor(a)],h=l[0];let f,u,x,p,c,m,d=!1;const w=new Uint8Array(o),y=new Uint8Array(o),g=new Uint8Array(o);let M=i.mask;const k=4===n[0].mappedColor.length;for(M||(M=new Uint8Array(o),M.fill(k?255:1),i.mask=M),c=0;c<o;c++)if(M[c]){for(f=h[c],d=!1,m=a,u=s,x=0,p=r-1;p-x>1;){if(f===u.value){d=!0;break}f>u.value?x=m:p=m,m=Math.floor((x+p)/2),u=n[Math.floor(m)]}d||(f===n[x].value?(u=n[x],d=!0):f===n[p].value?(u=n[p],d=!0):f<n[x].value?(d=!1,u=null):f>n[x].value&&(f<n[p].value?(u=n[x],d=!0):p===r-1?(d=!1,u=null):(u=n[p],d=!0))),d?(w[c]=u.mappedColor[0],y[c]=u.mappedColor[1],g[c]=u.mappedColor[2],M[c]=u.mappedColor[3]):w[c]=y[c]=g[c]=M[c]=0}return i.pixels=[w,y,g],i.mask=M,i.pixelType="u8",i.maskIsAlpha=k,i}function x(t,e,n,i,l,o,r,a){return{xmin:l<=n*t?0:l<n*t+t?l-n*t:t,ymin:o<=i*e?0:o<i*e+e?o-i*e:e,xmax:l+r<=n*t?0:l+r<n*t+t?l+r-n*t:t,ymax:o+a<=i*e?0:o+a<i*e+e?o+a-i*e:e}}function p(t,e){if(!t||0===t.length)return null;const n=t.filter((t=>t.pixelBlock))[0];if(!n)return null;const i=(n.extent.xmax-n.extent.xmin)/n.pixelBlock.width,l=(n.extent.ymax-n.extent.ymin)/n.pixelBlock.height,o=.01*Math.min(i,l),r=t.sort(((t,e)=>Math.abs(t.extent.ymax-e.extent.ymax)>o?e.extent.ymax-t.extent.ymax:Math.abs(t.extent.xmin-e.extent.xmin)>o?t.extent.xmin-e.extent.xmin:0)),a=Math.min.apply(null,r.map((t=>t.extent.xmin))),s=Math.min.apply(null,r.map((t=>t.extent.ymin))),h=Math.max.apply(null,r.map((t=>t.extent.xmax))),f=Math.max.apply(null,r.map((t=>t.extent.ymax))),u={x:Math.round((e.xmin-a)/i),y:Math.round((f-e.ymax)/l)},x={width:Math.round((h-a)/i),height:Math.round((f-s)/l)},p={width:Math.round((e.xmax-e.xmin)/i),height:Math.round((e.ymax-e.ymin)/l)};if(Math.round(x.width/n.pixelBlock.width)*Math.round(x.height/n.pixelBlock.height)!==r.length||u.x<0||u.y<0||x.width<p.width||x.height<p.height)return null;return{extent:e,pixelBlock:c(r.map((t=>t.pixelBlock)),x,u,p)}}function c(n,i,l,o){const r=n.filter((t=>e(t)))[0];if(null==r)return null;const a=o?o.width:i.width,s=o?o.height:i.height,h=r.width,f=r.height,u=i.width/h,p=i.height/f,c=l?l.x:0,m=l?l.y:0,d=r.pixelType,w=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].getPixelArrayConstructor(d),y=r.pixels.length,g=[];let M,k,A,U,C,T,v,B,S,O,P;for(T=0;T<y;T++){for(k=new w(a*s),v=0;v<p;v++)for(B=0;B<u;B++)if(A=n[v*u+B],A)for(M=A.pixels[T],P=x(h,f,B,v,c,m,a,s),S=P.ymin;S<P.ymax;S++)for(U=(v*f+S-m)*a+(B*h-c),C=S*h,O=P.xmin;O<P.xmax;O++)k[U+O]=M[C+O];g.push(k)}let b,I;if(n.some((t=>null==t||t.mask&&t.mask.length>0)))for(b=new Uint8Array(a*s),v=0;v<p;v++)for(B=0;B<u;B++)if(A=n[v*u+B],I=A?A.mask:null,P=x(h,f,B,v,c,m,a,s),I)for(S=P.ymin;S<P.ymax;S++)for(U=(v*f+S-m)*a+(B*h-c),C=S*h,O=P.xmin;O<P.xmax;O++)b[U+O]=I[C+O];else if(A)for(S=P.ymin;S<P.ymax;S++)for(U=(v*f+S-m)*a+(B*h-c),C=S*h,O=P.xmin;O<P.xmax;O++)b[U+O]=1;else for(S=P.ymin;S<P.ymax;S++)for(U=(v*f+S-m)*a+(B*h-c),C=S*h,O=P.xmin;O<P.xmax;O++)b[U+O]=0;const j=new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({width:a,height:s,pixels:g,pixelType:d,mask:b});return j.updateStatistics(),j}function m(t,n,i){if(!e(t))return null;const{width:l,height:o}=t,r=n.x,a=n.y,s=i.width+r,h=i.height+a;if(r<0||a<0||s>l||h>o)return t;if(0===r&&0===a&&s===l&&h===o)return t;t.mask||(t.mask=new Uint8Array(l*o));const f=t.mask;for(let t=0;t<o;t++){const e=t*l;for(let n=0;n<l;n++)f[e+n]=t<a||t>=h||n<r||n>=s?0:1}return t.updateStatistics(),t}function d(t){if(!e(t))return null;const n=t.clone(),{width:i,height:l,pixels:o,mask:r}=t,a=o[0],s=n.pixels[0];for(let t=2;t<l-1;t++){const e=new Map;for(let n=t-2;n<t+2;n++)for(let t=0;t<4;t++){const l=n*i+t;g(e,a[l],r?r[l]:1)}s[t*i]=w(e),s[t*i+1]=s[t*i+2]=s[t*i];let n=3;for(;n<i-1;n++){let l=(t-2)*i+n+1;g(e,a[l],r?r[l]:1),l=(t-1)*i+n+1,g(e,a[l],r?r[l]:1),l=t*i+n+1,g(e,a[l],r?r[l]:1),l=(t+1)*i+n+1,g(e,a[l],r?r[l]:1),l=(t-2)*i+n-3,y(e,a[l],r?r[l]:1),l=(t-1)*i+n-3,y(e,a[l],r?r[l]:1),l=t*i+n-3,y(e,a[l],r?r[l]:1),l=(t+1)*i+n-3,y(e,a[l],r?r[l]:1),s[t*i+n]=w(e)}s[t*i+n+1]=s[t*i+n]}for(let t=0;t<i;t++)s[t]=s[i+t]=s[2*i+t],s[(l-1)*i+t]=s[(l-2)*i+t];return n.updateStatistics(),n}function w(t){if(0===t.size)return 0;let e=0,n=-1,i=0;const l=t.keys();let o=l.next();for(;!o.done;)i=t.get(o.value),i>e&&(n=o.value,e=i),o=l.next();return n}function y(t,e,n){if(0===n)return;const i=t.get(e);1===i?t.delete(e):t.set(e,i-1)}function g(t,e,n){0!==n&&t.set(e,t.has(e)?t.get(e)+1:1)}function M(n,i,l){let{x:o,y:r}=i;const{width:a,height:s}=l;if(0===o&&0===r&&s===n.height&&a===n.width)return n;const{width:h,height:f}=n,u=Math.max(0,r),x=Math.max(0,o),p=Math.min(o+a,h),c=Math.min(r+s,f);if(p<0||c<0||!e(n))return null;o=Math.max(0,-o),r=Math.max(0,-r);const{pixels:m,mask:d}=n,w=a*s,y=m.length,g=[];for(let e=0;e<y;e++){const i=m[e],l=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].createEmptyBand(n.pixelType,w);for(let t=u;t<c;t++){const e=t*h;let n=(t+r-u)*a+o;for(let t=x;t<p;t++)l[n++]=i[e+t]}g.push(l)}const M=new Uint8Array(w);for(let t=u;t<c;t++){const e=t*h;let n=(t+r-u)*a+o;for(let t=x;t<p;t++)M[n++]=d?d[e+t]:1}const k=new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({width:l.width,height:l.height,pixelType:n.pixelType,pixels:g,mask:M});return k.updateStatistics(),k}function k(n,i=!0){if(!e(n))return null;const{pixels:l,width:o,height:r,mask:a,pixelType:s}=n,h=[],f=Math.round(o/2),u=Math.round(r/2),x=r-1,p=o-1;for(let e=0;e<l.length;e++){const n=l[e],a=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].createEmptyBand(s,f*u);let c=0;for(let t=0;t<r;t+=2)for(let e=0;e<o;e+=2){const l=n[t*o+e];if(i){const i=e===p?l:n[t*o+e+1],r=t===x?l:n[t*o+e+o],s=e===p?r:t===x?i:n[t*o+e+o+1];a[c++]=(l+i+r+s)/4}else a[c++]=l}h.push(a)}let c=null;if(a){c=new Uint8Array(f*u);let t=0;for(let e=0;e<r;e+=2)for(let n=0;n<o;n+=2){const l=a[e*o+n];if(i){const i=n===p?l:a[e*o+n+1],r=e===x?l:a[e*o+n+o],s=n===p?r:e===x?i:a[e*o+n+o+1];c[t++]=l*i*r*s?1:0}else c[t++]=l}}return new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({width:f,height:u,pixelType:s,pixels:h,mask:c})}function A(t,n,i){if(!e(t))return null;const{width:l,height:o}=n;let{width:r,height:a}=t;const s=new Map,h={x:0,y:0},f=null==i?1:1+i;let u=t;for(let t=0;t<f;t++){const e=Math.ceil(r/l),i=Math.ceil(a/o);for(let r=0;r<i;r++){h.y=r*o;for(let i=0;i<e;i++){h.x=i*l;const e=M(u,h,n);s.set(`${t}/${r}/${i}`,e)}}t<f-1&&(u=k(u)),r=Math.round(r/2),a=Math.round(a/2)}return s}function U(n,i,l,o,r="nearest"){if(!e(n))return null;"majority"===r&&(n=d(n));const{pixels:a,mask:s,pixelType:h}=n,f=n.width,u=n.height,x=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].getPixelArrayConstructor(h),p=a.length,{width:c,height:m}=i,w=o.cols,y=o.rows,g=Math.ceil(c/w),M=Math.ceil(m/y);let k,A,U,C,T,v,B,S=!1;for(let t=0;t<l.length;t+=3)-1===l[t]&&-1===l[t+1]&&-1===l[t+2]&&(S=!0);const O=new Float32Array(c*m),P=new Float32Array(c*m);let b,I,j=0;const z="majority"===r?0:.5;for(let t=0;t<M;t++)for(let e=0;e<g;e++){k=12*(t*g+e),A=l[k],U=l[k+1],C=l[k+2],T=l[k+3],v=l[k+4],B=l[k+5];for(let n=0;n<y;n++){j=(t*y+n)*c+e*w,I=(n+.5)/y;for(let t=0;t<n;t++)b=(t+.5)/w,O[j+t]=Math.round((A*b+U*I+C)*f-z),P[j+t]=Math.round((T*b+v*I+B)*u-z)}k+=6,A=l[k],U=l[k+1],C=l[k+2],T=l[k+3],v=l[k+4],B=l[k+5];for(let n=0;n<y;n++){j=(t*y+n)*c+e*w,I=(n+.5)/y;for(let t=n;t<w;t++)b=(t+.5)/w,O[j+t]=Math.round((A*b+U*I+C)*f-z),P[j+t]=Math.round((T*b+v*I+B)*u-z)}}const D=(t,e)=>{for(let n=0;n<m;n++){k=n*c;for(let n=0;n<c;n++)O[k]<0||P[k]<0?t[k]=0:t[k]=e[O[k]+P[k]*f],k++}},E=[];let $;for(let t=0;t<p;t++)$=new x(c*m),D($,a[t]),E.push($);const q=new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({width:c,height:m,pixelType:h,pixels:E});if(s)q.mask=new Uint8Array(c*m),D(q.mask,s);else if(S){q.mask=new Uint8Array(c*m);for(let t=0;t<c*m;t++)q.mask[t]=O[t]<0||P[t]<0?0:1}return q.updateStatistics(),q}


/***/ })

}]);
//# sourceMappingURL=default~ImageryLayer-js~ImageryTileLayer-js~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView~fc91ae2a.js.map