(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~aafed1ba"],{

/***/ "0RS7":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/number.js ***!
  \*******************************************************************/
/*! exports provided: i16, i1616to32, i32, i8, i8816to32, i8888to32, numTo32, toFloat32, toUint32, u16, u32, u32to4Xu8, u8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i16", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i1616to32", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i32", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i8", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i8816to32", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i8888to32", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numTo32", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat32", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint32", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u16", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u32", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u32to4Xu8", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u8", function() { return f; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=new Float32Array(1),r=new Uint32Array(n.buffer);function t(n,r,t){return Math.round(Math.max(Math.min(n,t),r))}function u(n){return t(n,-128,127)}function e(n){return t(n,-32768,32767)}function o(n){return t(n,-2147483648,2147483647)}function f(n){return t(n,0,255)}function i(n){return t(n,0,65535)}function c(n){return t(n,0,4294967295)}function a(t){return n[0]=t,r[0]}function h(t){return r[0]=t,n[0]}function M(n){return[255&n,(65280&n)>>>8,(16711680&n)>>>16,(4278190080&n)>>>24]}function m(n,r){return 65535&n|r<<16}function w(n,r,t,u){return 255&n|(255&r)<<8|(255&t)<<16|u<<24}function x(n,r,t){return 255&n|(255&r)<<8|t<<16}function y(n){return 0|n}


/***/ }),

/***/ "4SEz":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SymbolProperties.js ***!
  \*****************************************************************************/
/*! exports provided: TextProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProperties", function() { return h; });
/* harmony import */ var _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/ObjectPool.js */ "7Nfj");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class h{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(o,h,s,t,i,l,r,e,c){this.color=o,this.haloColor=h,this.haloSize=s,this.size=t,this.angle=i,this.offsetX=l,this.offsetY=r,this.hAnchor=e,this.vAnchor=c}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}h.pool=new _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__["default"](h);


/***/ }),

/***/ "AMBt":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/Container.js ***!
  \****************************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return r; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayObject.js */ "fEsP");
/* harmony import */ var _layers_effects_EffectList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layers/effects/EffectList.js */ "q0q8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s=Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mapview-transitions-duration");class r extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_1__["DisplayObject"]{constructor(){super(...arguments),this._childrenSet=new Set,this.children=[],this._effectList=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e))}get computedEffects(){var e,t;return null!=(e=null==(t=this._effectList)?void 0:t.effects)?e:null}get effect(){var e,t;return null!=(e=null==(t=this._effectList)?void 0:t.effect)?e:""}set effect(e){(this._effectList||e)&&(this._effectList||(this._effectList=new _layers_effects_EffectList_js__WEBPACK_IMPORTED_MODULE_2__["default"](s)),this._effectList.effect=e,this.requestRender())}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectList&&(this._effectList.transitionStep(e,t),this._effectList.transitioning&&this.requestRender())}doRender(e){const t=this.createRenderParams(e);this.renderChildren(t)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e)return e;if(this.contains(e))return e;const i=e.parent;return i&&i!==this&&i.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}removeAllChildren(){this._childrenSet.clear();for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){let t;return e<0||e>=this.children.length?null:(t=this.children.splice(e,1)[0],this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t)}sortChildren(e){return this.children.sort(e)}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const t of this.children)t.beforeRender(e);for(const t of this.children)t.processRender(e);for(const t of this.children)t.afterRender(e)}createRenderParams(e){return{...e,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}


/***/ }),

/***/ "BmV5":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/effects/colorMatrixFunctions.js ***!
  \********************************************************************************/
/*! exports provided: brightness, contrast, grayscale, invert, rotateHue, saturate, sepia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brightness", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contrast", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayscale", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateHue", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturate", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sepia", function() { return a; });
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/mat4.js */ "15Hh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r=(r,s)=>{const o=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(r,s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1);return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["b"])(o,o)},s=(r,s)=>{const o=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(r,s,0,0,.5-.5*s,0,s,0,.5-.5*s,0,0,s,.5-.5*s,0,0,0,1);return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["b"])(o,o)},o=(r,s)=>{const o=1-s,c=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(r,.2126+.7874*o,.7152-.7152*o,.0722-.0722*o,0,.2126-.2126*o,.7152+.2848*o,.0722-.0722*o,0,.2126-.2126*o,.7152-.7152*o,.0722+.9278*o,0,0,0,0,1);return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["b"])(c,c)},c=(r,s)=>{const o=Math.sin(s*Math.PI/180),c=Math.cos(s*Math.PI/180),e=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(r,.213+.787*c-.213*o,.715-.715*c-.715*o,.072-.072*c+.928*o,0,.213-.213*c+.143*o,.715+.285*c+.14*o,.072-.072*c-.283*o,0,.213-.213*c-.787*o,.715-.715*c+.715*o,.072+.928*c+.072*o,0,0,0,0,1);return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e,e)},e=(r,s)=>{const o=1-2*s,c=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(r,o,0,0,s,0,o,0,s,0,0,o,s,0,0,0,1);return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["b"])(c,c)},u=(r,s)=>{const o=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(r,.213+.787*s,.715-.715*s,.072-.072*s,0,.213-.213*s,.715+.285*s,.072-.072*s,0,.213-.213*s,.715-.715*s,.072+.928*s,0,0,0,0,1);return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["b"])(o,o)},a=(r,s)=>{const o=1-s,c=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(r,.393+.607*o,.769-.769*o,.189-.189*o,0,.349-.349*o,.686+.314*o,.168-.168*o,0,.272-.272*o,.534-.534*o,.131+.869*o,0,0,0,0,1);return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["b"])(c,c)};


/***/ }),

/***/ "GMaR":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/materialKey/MaterialKey.js ***!
  \************************************************************************************/
/*! exports provided: FillMaterialKey, LabelMaterialKey, LineMaterialKey, MarkerMaterialKey, MaterialKeyBase, TextMaterialKey, createMaterialKey, getFillVVFlags, getLabelVVFlags, getLineVVFlags, getMarkerVVFlags, getSizeFlagsMask, getTextVVFlags, hydrateMaterialKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillMaterialKey", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelMaterialKey", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineMaterialKey", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerMaterialKey", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialKeyBase", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMaterialKey", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMaterialKey", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFillVVFlags", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelVVFlags", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineVVFlags", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkerVVFlags", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizeFlagsMask", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextVVFlags", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrateMaterialKey", function() { return l; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "yE7X");
/* harmony import */ var _mesh_templates_meshUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mesh/templates/meshUtils.js */ "m3fN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function a(t,s=!1){const r=_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_FIELD_STOPS|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_MINMAX_VALUE|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_SCALE_STOPS|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_UNIT_VALUE,a=(t&(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVTarget"].FIELD_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVTarget"].MINMAX_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVTarget"].SCALE_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVTarget"].UNIT_TARGETS_OUTLINE))>>>4;return s?r&a:r&~a}function n(t){const i=a(t,!1);return t&(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].COLOR|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].OPACITY|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].ROTATION|i)}function o(t){return t&(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].COLOR|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].OPACITY)}function v(t,i){if(i){return t&a(t,!0)}const s=a(t,!1);return t&(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].COLOR|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].OPACITY|s)}function h(t){return n(t)}function u(t){return t&a(t,!1)}function S(t,e,i,r,a){switch(t){case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL:return z.from(e,r);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE:return y.from(e,i);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER:return T.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT:return E.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL:return m.from(e,a);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function l(t){switch(c.load(t).geometryType){case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER:return new T(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL:return new z(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE:return new y(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT:return new E(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL:return new m(t)}}class c{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(t){this.setBits(t,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(t){this.setBit(20,t)}get sdf(){return!!this.bit(11)}set sdf(t){this.setBit(11,t)}get pattern(){return!!this.bit(12)}set pattern(t){this.setBit(12,t)}get textureBinding(){return this.bits(0,8)}set textureBinding(t){this.setBits(t,0,8)}get geometryTypeString(){switch(this.geometryType){case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL:return"fill";case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER:return"marker";case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE:return"line";case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT:return"text";case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL:return"label";default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const i=1<<t;e?this._data|=i:this._data&=~i}bit(t){return(this._data&1<<t)>>t}setBits(t,e,i){for(let s=e,r=0;s<i;s++,r++)this.setBit(s,0!=(t&1<<r))}bits(t,e){let i=0;for(let s=t,r=0;s<e;s++,r++)i|=this.bit(s)<<r;return i}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(7&this.textureBinding)}}c.shared=new c(0);const d=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(t){this.setBit(16,t)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(t){this.setBit(17,t)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(t){this.setBit(18,t)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(t){this.setBit(19,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,i){super.setVV(t,i);const s=a(t,i)&t;this.vvSizeMinMaxValue=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_SCALE_STOPS)}},V=t=>class extends t{get vvRotation(){return 0!==this.bit(15)}set vvRotation(t){this.setBit(15,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,i){super.setVV(t,i),this.vvRotation=!i&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].ROTATION)}},p=t=>class extends t{get vvColor(){return 0!==this.bit(13)}set vvColor(t){this.setBit(13,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,i){super.setVV(t,i),this.vvColor=!i&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].COLOR)}},g=t=>class extends t{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(t){this.setBit(14,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,i){super.setVV(t,i),this.vvOpacity=!i&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].OPACITY)}};class z extends(p(g(c))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL,e?i.dotDensity=!0:i.setVV(t,!1),i.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,vvColor:this.vvColor,vvOpacity:this.vvOpacity}}get dotDensity(){return!!this.bit(15)}set dotDensity(t){this.setBit(15,t)}}z.shared=new z(0);class T extends(p(g(V(d(c))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER,e.setVV(t,!1),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}T.shared=new T(0);class y extends(p(g(d(c)))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE,i.setVV(t,e),i.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}y.shared=new y(0);class E extends(p(g(V(d(c))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(t);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT,e.setVV(t,!1),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}E.shared=new E(0);class m extends(d(c)){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL,i.setVV(t,!1),i.mapAligned=!!Object(_mesh_templates_meshUtils_js__WEBPACK_IMPORTED_MODULE_2__["isMapAligned"])(e),i.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}m.shared=new m(0);


/***/ }),

/***/ "RKAj":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/effects/effects.js ***!
  \*******************************************************************/
/*! exports provided: BloomEffect, BlurEffect, ColorMatrixEffect, DropShadowEffect, HueRotateEffect, OpacityEffect, isColorMatrixEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloomEffect", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlurEffect", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorMatrixEffect", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropShadowEffect", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HueRotateEffect", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpacityEffect", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isColorMatrixEffect", function() { return n; });
/* harmony import */ var _chunks_mat4f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/mat4f32.js */ "lwwL");
/* harmony import */ var _colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorMatrixFunctions.js */ "BmV5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(t){return"colorMatrix"in t}class c{constructor(t,s,o){this.strength=t,this.radius=s,this.threshold=o,this.type="bloom"}interpolate(t,s,o){this.strength=m(t.strength,s.strength,o),this.radius=m(t.radius,s.radius,o),this.threshold=m(t.threshold,s.threshold,o)}clone(){return new c(this.strength,this.radius,this.threshold)}}class u{constructor(t){this.radius=t,this.type="blur"}interpolate(t,s,o){this.radius=Math.round(m(t.radius,s.radius,o))}clone(){return new u(this.radius)}}class l{constructor(t,s){this.type=t,this.amount=s,"invert"!==this.type&&"grayscale"!==this.type&&"sepia"!==this.type||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,s,o){this.amount=m(t.amount,s.amount,o),this._updateMatrix()}clone(){return new l(this.type,this.amount)}_updateMatrix(){const h=this._colorMatrix||Object(_chunks_mat4f32_js__WEBPACK_IMPORTED_MODULE_0__["c"])();switch(this.type){case"brightness":this._colorMatrix=Object(_colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__["brightness"])(h,this.amount);break;case"contrast":this._colorMatrix=Object(_colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__["contrast"])(h,this.amount);break;case"grayscale":this._colorMatrix=Object(_colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__["grayscale"])(h,this.amount);break;case"invert":this._colorMatrix=Object(_colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__["invert"])(h,this.amount);break;case"saturate":this._colorMatrix=Object(_colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__["saturate"])(h,this.amount);break;case"sepia":this._colorMatrix=Object(_colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__["sepia"])(h,this.amount)}}}class d{constructor(t,s,o,r){this.offsetX=t,this.offsetY=s,this.blurRadius=o,this.color=r,this.type="drop-shadow"}interpolate(t,s,o){this.offsetX=m(t.offsetX,s.offsetX,o),this.offsetY=m(t.offsetY,s.offsetY,o),this.blurRadius=m(t.blurRadius,s.blurRadius,o),this.color[0]=Math.round(m(t.color[0],s.color[0],o)),this.color[1]=Math.round(m(t.color[1],s.color[1],o)),this.color[2]=Math.round(m(t.color[2],s.color[2],o)),this.color[3]=m(t.color[3],s.color[3],o)}clone(){return new d(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}}class p{constructor(t){this.angle=t,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,s,o){this.angle=m(t.angle,s.angle,o),this._updateMatrix()}clone(){return new p(this.angle)}_updateMatrix(){const s=this._colorMatrix||Object(_chunks_mat4f32_js__WEBPACK_IMPORTED_MODULE_0__["c"])();this._colorMatrix=Object(_colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__["rotateHue"])(s,this.angle)}}class M{constructor(t){this.amount=t,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(t,s,o){this.amount=m(t.amount,s.amount,o)}clone(){return new M(this.amount)}}function m(t,s,o){return t+(s-t)*o}


/***/ }),

/***/ "Za7r":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/effects/parser.js ***!
  \******************************************************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return h; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _colorUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../colorUtils.js */ "6zdV");
/* harmony import */ var _chunks_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/_commonjsHelpers.js */ "X2wA");
/* harmony import */ var _effects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects.js */ "RKAj");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var p=Object(_chunks_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_2__["c"])((function(t){t.exports&&(t.exports=function(){function t(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function e(t,r,n,u){this.message=t,this.expected=r,this.found=n,this.location=u,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}function r(t,r){r=void 0!==r?r:{};var n,u={},a={start:Kt},c=Kt,o=_t("none"),i="none",s=Ht("none",!1),f=function(){return[]},l=")",p=Ht(")",!1),h=function(t,e){return{type:"function",name:t,parameters:e||[]}},m=",",g=Ht(",",!1),v=function(t,e){return e.length>0?ie(t,e,3):[t]},d=function(t){return{type:"quantity",value:t.value,unit:t.unit}},A=function(t){return{type:"color",colorType:t.type,value:t.value}},y=_t("whitespace"),w=/^[ \t\n\r]/,x=Nt([" ","\t","\n","\r"],!1,!1),b=_t("function"),F="(",C=Ht("(",!1),E=function(t){return t},$=_t("identifier"),j=/^[a-z\-]/,k=Nt([["a","z"],"-"],!1,!1),q=function(){return Ut()},S=_t("percentage"),z="%",R=Ht("%",!1),T=function(t){return{value:t,unit:"%"}},I=_t("length"),M="px",O=Ht("px",!1),U=function(t){return{value:t,unit:"px"}},H="cm",N=Ht("cm",!1),P=function(t){return{value:t,unit:"cm"}},_="mm",B=Ht("mm",!1),D=function(t){return{value:t,unit:"mm"}},G="in",J=Ht("in",!1),K=function(t){return{value:t,unit:"in"}},L="pt",Q=Ht("pt",!1),V=function(t){return{value:t,unit:"pt"}},W="pc",X=Ht("pc",!1),Y=function(t){return{value:t,unit:"pc"}},Z=_t("angle"),tt="deg",et=Ht("deg",!1),rt=function(t){return{value:t,unit:"deg"}},nt="rad",ut=Ht("rad",!1),at=function(t){return{value:t,unit:"rad"}},ct="grad",ot=Ht("grad",!1),it=function(t){return{value:t,unit:"grad"}},st="turn",ft=Ht("turn",!1),lt=function(t){return{value:t,unit:"turn"}},pt=_t("number"),ht=function(t){return{value:t,unit:null}},mt=_t("color"),gt="#",vt=Ht("#",!1),dt=/^[0-9a-fA-F]/,At=Nt([["0","9"],["a","f"],["A","F"]],!1,!1),yt=function(){return{type:"hex",value:Ut()}},wt=function(t){return{type:"function",value:t}},xt=function(){return{type:"named",value:Ut()}},bt=/^[+\-]/,Ft=Nt(["+","-"],!1,!1),Ct=/^[0-9]/,Et=Nt([["0","9"]],!1,!1),$t=".",jt=Ht(".",!1),kt="e",qt=Ht("e",!1),St=function(){return parseFloat(Ut())},zt=0,Rt=0,Tt=[{line:1,column:1}],It=0,Mt=[],Ot=0;if("startRule"in r){if(!(r.startRule in a))throw new Error("Can't start parsing from rule \""+r.startRule+'".');c=a[r.startRule]}function Ut(){return t.substring(Rt,zt)}function Ht(t,e){return{type:"literal",text:t,ignoreCase:e}}function Nt(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function Pt(){return{type:"end"}}function _t(t){return{type:"other",description:t}}function Bt(e){var r,n=Tt[e];if(n)return n;for(r=e-1;!Tt[r];)r--;for(n={line:(n=Tt[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return Tt[e]=n,n}function Dt(t,e){var r=Bt(t),n=Bt(e);return{start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function Gt(t){zt<It||(zt>It&&(It=zt,Mt=[]),Mt.push(t))}function Jt(t,r,n){return new e(e.buildMessage(t,r),t,r,n)}function Kt(){var t;return(t=Lt())===u&&(t=Qt()),t}function Lt(){var e,r;return Ot++,e=zt,Yt()!==u?(t.substr(zt,4)===i?(r=i,zt+=4):(r=u,0===Ot&&Gt(s)),r!==u&&Yt()!==u?(Rt=e,e=f()):(zt=e,e=u)):(zt=e,e=u),Ot--,e===u&&0===Ot&&Gt(o),e}function Qt(){var t,e;if(t=[],(e=Vt())!==u)for(;e!==u;)t.push(e),e=Vt();else t=u;return t}function Vt(){var e,r,n,a;return e=zt,Yt()!==u&&(r=Zt())!==u&&Yt()!==u?((n=Wt())===u&&(n=null),n!==u&&Yt()!==u?(41===t.charCodeAt(zt)?(a=l,zt++):(a=u,0===Ot&&Gt(p)),a!==u&&Yt()!==u?(Rt=e,e=h(r,n)):(zt=e,e=u)):(zt=e,e=u)):(zt=e,e=u),e}function Wt(){var e,r,n,a,c,o,i,s;if(e=zt,(r=Xt())!==u){for(n=[],a=zt,(c=Yt())!==u?(44===t.charCodeAt(zt)?(o=m,zt++):(o=u,0===Ot&&Gt(g)),o===u&&(o=null),o!==u&&(i=Yt())!==u&&(s=Xt())!==u?a=c=[c,o,i,s]:(zt=a,a=u)):(zt=a,a=u);a!==u;)n.push(a),a=zt,(c=Yt())!==u?(44===t.charCodeAt(zt)?(o=m,zt++):(o=u,0===Ot&&Gt(g)),o===u&&(o=null),o!==u&&(i=Yt())!==u&&(s=Xt())!==u?a=c=[c,o,i,s]:(zt=a,a=u)):(zt=a,a=u);n!==u?(Rt=e,e=r=v(r,n)):(zt=e,e=u)}else zt=e,e=u;return e}function Xt(){var t,e;return t=zt,(e=ee())===u&&(e=re())===u&&(e=ne())===u&&(e=ue()),e!==u&&(Rt=t,e=d(e)),(t=e)===u&&(t=zt,(e=ae())!==u&&(Rt=t,e=A(e)),t=e),t}function Yt(){var e,r;for(Ot++,e=[],w.test(t.charAt(zt))?(r=t.charAt(zt),zt++):(r=u,0===Ot&&Gt(x));r!==u;)e.push(r),w.test(t.charAt(zt))?(r=t.charAt(zt),zt++):(r=u,0===Ot&&Gt(x));return Ot--,e===u&&(r=u,0===Ot&&Gt(y)),e}function Zt(){var e,r,n;return Ot++,e=zt,(r=te())!==u?(40===t.charCodeAt(zt)?(n=F,zt++):(n=u,0===Ot&&Gt(C)),n!==u?(Rt=e,e=r=E(r)):(zt=e,e=u)):(zt=e,e=u),Ot--,e===u&&(r=u,0===Ot&&Gt(b)),e}function te(){var e,r,n;if(Ot++,e=zt,r=[],j.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Ot&&Gt(k)),n!==u)for(;n!==u;)r.push(n),j.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Ot&&Gt(k));else r=u;return r!==u&&(Rt=e,r=q()),Ot--,(e=r)===u&&(r=u,0===Ot&&Gt($)),e}function ee(){var e,r,n;return Ot++,e=zt,Yt()!==u&&(r=ce())!==u?(37===t.charCodeAt(zt)?(n=z,zt++):(n=u,0===Ot&&Gt(R)),n!==u?(Rt=e,e=T(r)):(zt=e,e=u)):(zt=e,e=u),Ot--,e===u&&0===Ot&&Gt(S),e}function re(){var e,r,n;return Ot++,e=zt,Yt()!==u&&(r=ce())!==u?(t.substr(zt,2)===M?(n=M,zt+=2):(n=u,0===Ot&&Gt(O)),n!==u?(Rt=e,e=U(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Yt()!==u&&(r=ce())!==u?(t.substr(zt,2)===H?(n=H,zt+=2):(n=u,0===Ot&&Gt(N)),n!==u?(Rt=e,e=P(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Yt()!==u&&(r=ce())!==u?(t.substr(zt,2)===_?(n=_,zt+=2):(n=u,0===Ot&&Gt(B)),n!==u?(Rt=e,e=D(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Yt()!==u&&(r=ce())!==u?(t.substr(zt,2)===G?(n=G,zt+=2):(n=u,0===Ot&&Gt(J)),n!==u?(Rt=e,e=K(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Yt()!==u&&(r=ce())!==u?(t.substr(zt,2)===L?(n=L,zt+=2):(n=u,0===Ot&&Gt(Q)),n!==u?(Rt=e,e=V(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Yt()!==u&&(r=ce())!==u?(t.substr(zt,2)===W?(n=W,zt+=2):(n=u,0===Ot&&Gt(X)),n!==u?(Rt=e,e=Y(r)):(zt=e,e=u)):(zt=e,e=u)))))),Ot--,e===u&&0===Ot&&Gt(I),e}function ne(){var e,r,n;return Ot++,e=zt,(r=ce())!==u?(t.substr(zt,3)===tt?(n=tt,zt+=3):(n=u,0===Ot&&Gt(et)),n!==u?(Rt=e,e=r=rt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,3)===nt?(n=nt,zt+=3):(n=u,0===Ot&&Gt(ut)),n!==u?(Rt=e,e=r=at(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,4)===ct?(n=ct,zt+=4):(n=u,0===Ot&&Gt(ot)),n!==u?(Rt=e,e=r=it(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,4)===st?(n=st,zt+=4):(n=u,0===Ot&&Gt(ft)),n!==u?(Rt=e,e=r=lt(r)):(zt=e,e=u)):(zt=e,e=u)))),Ot--,e===u&&(r=u,0===Ot&&Gt(Z)),e}function ue(){var t,e;return Ot++,t=zt,Yt()!==u&&(e=ce())!==u?(Rt=t,t=ht(e)):(zt=t,t=u),Ot--,t===u&&0===Ot&&Gt(pt),t}function ae(){var e,r,n,a;if(Ot++,e=zt,35===t.charCodeAt(zt)?(r=gt,zt++):(r=u,0===Ot&&Gt(vt)),r!==u){if(n=[],dt.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Ot&&Gt(At)),a!==u)for(;a!==u;)n.push(a),dt.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Ot&&Gt(At));else n=u;n!==u?(Rt=e,e=r=yt()):(zt=e,e=u)}else zt=e,e=u;return e===u&&(e=zt,(r=Vt())!==u&&(Rt=e,r=wt(r)),(e=r)===u&&(e=zt,(r=te())!==u&&(Rt=e,r=xt()),e=r)),Ot--,e===u&&(r=u,0===Ot&&Gt(mt)),e}function ce(){var e,r,n,a,c,o,i,s;if(e=zt,bt.test(t.charAt(zt))?(r=t.charAt(zt),zt++):(r=u,0===Ot&&Gt(Ft)),r===u&&(r=null),r!==u){for(n=zt,a=[],Ct.test(t.charAt(zt))?(c=t.charAt(zt),zt++):(c=u,0===Ot&&Gt(Et));c!==u;)a.push(c),Ct.test(t.charAt(zt))?(c=t.charAt(zt),zt++):(c=u,0===Ot&&Gt(Et));if(a!==u)if(46===t.charCodeAt(zt)?(c=$t,zt++):(c=u,0===Ot&&Gt(jt)),c!==u){if(o=[],Ct.test(t.charAt(zt))?(i=t.charAt(zt),zt++):(i=u,0===Ot&&Gt(Et)),i!==u)for(;i!==u;)o.push(i),Ct.test(t.charAt(zt))?(i=t.charAt(zt),zt++):(i=u,0===Ot&&Gt(Et));else o=u;o!==u?n=a=[a,c,o]:(zt=n,n=u)}else zt=n,n=u;else zt=n,n=u;if(n===u)if(n=[],Ct.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Ot&&Gt(Et)),a!==u)for(;a!==u;)n.push(a),Ct.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Ot&&Gt(Et));else n=u;if(n!==u){if(a=zt,101===t.charCodeAt(zt)?(c=kt,zt++):(c=u,0===Ot&&Gt(qt)),c!==u)if(bt.test(t.charAt(zt))?(o=t.charAt(zt),zt++):(o=u,0===Ot&&Gt(Ft)),o===u&&(o=null),o!==u){if(i=[],Ct.test(t.charAt(zt))?(s=t.charAt(zt),zt++):(s=u,0===Ot&&Gt(Et)),s!==u)for(;s!==u;)i.push(s),Ct.test(t.charAt(zt))?(s=t.charAt(zt),zt++):(s=u,0===Ot&&Gt(Et));else i=u;i!==u?a=c=[c,o,i]:(zt=a,a=u)}else zt=a,a=u;else zt=a,a=u;a===u&&(a=null),a!==u?(Rt=e,e=r=St()):(zt=e,e=u)}else zt=e,e=u}else zt=e,e=u;return e}function oe(t,e){return t.map((function(t){return t[e]}))}function ie(t,e,r){return[t].concat(oe(e,r))}if((n=c())!==u&&zt===t.length)return n;throw n!==u&&zt<t.length&&Gt(Pt()),Jt(Mt,It<t.length?t.charAt(It):null,It<t.length?Dt(It,It+1):Dt(It,It))}return t(e,Error),e.buildMessage=function(t,e){var r={literal:function(t){return'"'+u(t.text)+'"'},class:function(t){var e,r="";for(e=0;e<t.parts.length;e++)r+=t.parts[e]instanceof Array?a(t.parts[e][0])+"-"+a(t.parts[e][1]):a(t.parts[e]);return"["+(t.inverted?"^":"")+r+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function u(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function a(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function c(t){return r[t.type](t)}function o(t){var e,r,n=new Array(t.length);for(e=0;e<t.length;e++)n[e]=c(t[e]);if(n.sort(),n.length>0){for(e=1,r=1;e<n.length;e++)n[e-1]!==n[e]&&(n[r]=n[e],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function i(t){return t?'"'+u(t)+'"':"end of input"}return"Expected "+o(t)+" but "+i(e)+" found."},{SyntaxError:e,parse:r}}())}));function h(e){let r;try{r=e?p.parse(e):[]}catch(r){return{input:e,parsedFunctions:[],effects:[],error:new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:invalid-syntax","Invalid effect syntax",{input:e,error:r})}}const n={input:e,parsedFunctions:r,effects:[],error:null};try{for(const t of r)n.effects.push(m(t))}catch(t){n.effects.length=0,n.error=t}return n}function m(e){try{switch(e.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return function(t){let e=1;g(t.parameters,1),1===t.parameters.length&&(e=w(t.parameters[0]));return new _effects_js__WEBPACK_IMPORTED_MODULE_3__["ColorMatrixEffect"](t.name,e)}(e);case"opacity":return function(t){let e=1;g(t.parameters,1),1===t.parameters.length&&(e=w(t.parameters[0]));return new _effects_js__WEBPACK_IMPORTED_MODULE_3__["OpacityEffect"](e)}(e);case"hue-rotate":return function(e){let r=0;g(e.parameters,1),1===e.parameters.length&&(function(e){if("quantity"!==e.type||(0!==e.value||null!==e.unit)&&null==A[e.unit])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error",`Expected <angle>, Actual: ${v(e)}`,{term:e})}(n=e.parameters[0]),r=n.value*A[n.unit]||0);var n;return new _effects_js__WEBPACK_IMPORTED_MODULE_3__["HueRotateEffect"](r)}(e);case"blur":return function(t){let e=0;g(t.parameters,1),1===t.parameters.length&&(e=b(t.parameters[0]),d(e,t.parameters[0]));return new _effects_js__WEBPACK_IMPORTED_MODULE_3__["BlurEffect"](e)}(e);case"drop-shadow":return function(e){const r=[];let n;for(const u of e.parameters)if("color"===u.type){if(r.length&&Object.freeze(r),n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error","Accepts only one color",{});n=F(u)}else{const e=b(u);if(Object.isFrozen(r))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error","<length> parameters not consecutive",{lengths:r});r.push(e),3===r.length&&d(e,u)}if(r.length<2||r.length>3)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${r.length}}`,{lengths:r});return new _effects_js__WEBPACK_IMPORTED_MODULE_3__["DropShadowEffect"](r[0],r[1],r[2]||0,n||C("black"))}(e);case"bloom":return function(t){let e=1,r=0,n=0;g(t.parameters,3),t.parameters[0]&&(e=w(t.parameters[0]));t.parameters[1]&&(r=b(t.parameters[1]),d(r,t.parameters[1]));t.parameters[2]&&(n=w(t.parameters[2]));return new _effects_js__WEBPACK_IMPORTED_MODULE_3__["BloomEffect"](e,r,n)}(e)}}catch(t){throw t.details.filter=e,t}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:unknown-effect",`Effect '${e.name}' is not supported`,{effect:e})}function g(e,r){if(e.length>r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error",`Function supports up to ${r} parameters, Actual: ${e.length}`,{parameters:e})}function v(t){return"color"===t.type?"<color>":y[t.unit]?"<length>":A[t.unit]?"<angle>":"%"===t.unit?"<percentage>":"<double>"}function d(e,r){if(e<0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error",`Negative values are not allowed, Actual: ${e}`,{term:r})}const A={deg:1,grad:.9,rad:180/Math.PI,turn:360};const y={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/73};function w(e){!function(e){if("quantity"!==e.type||null!==e.unit&&"%"!==e.unit)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error",`Expected <double> or <percentage>, Actual: ${v(e)}`,{term:e})}(e);const r=e.value;return d(r,e),"%"===e.unit?.01*r:r}function x(e){return function(e){if("quantity"!==e.type||null!==e.unit)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error",`Expected <double>, Actual: ${v(e)}`,{term:e})}(e),d(e.value,e),e.value}function b(e){return function(e){if("quantity"!==e.type||(0!==e.value||null!==e.unit)&&null==y[e.unit])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error",`Expected <length>, Actual: ${v(e)}`,{term:e})}(e),e.value*y[e.unit]||0}function F(r){switch(r.colorType){case"hex":return Object(_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__["hex2rgba"])(r.value);case"named":return C(r.value);case"function":return function(e){if(g(e.parameters,4),E.test(e.name))return[w(e.parameters[0]),w(e.parameters[1]),w(e.parameters[2]),e.parameters[3]?w(e.parameters[3]):1];if($.test(e.name))return Object(_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__["hsla2rgba"])(x(e.parameters[0]),w(e.parameters[1]),w(e.parameters[2]),e.parameters[3]?w(e.parameters[3]):1);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:syntax-error",`Invalid color function '${e.name}'`,{colorFunction:e})}(r.value)}}function C(e){const n=Object(_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__["getNamedColorCopy"])(e);if(!n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:unknown-color",`color '${e}' isn't valid`,{namedColor:e});return n}const E=/^rgba?/i,$=/^hsla?/i;


/***/ }),

/***/ "lwwL":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat4f32.js ***!
  \*****************************************************/
/*! exports provided: I, a, b, c, f, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(){const r=new Float32Array(16);return r[0]=1,r[5]=1,r[10]=1,r[15]=1,r}function n(r){const n=new Float32Array(16);return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n}function t(r,n,t,e,a,o,c,s,u,l,f,i,w,y,A,F){const _=new Float32Array(16);return _[0]=r,_[1]=n,_[2]=t,_[3]=e,_[4]=a,_[5]=o,_[6]=c,_[7]=s,_[8]=u,_[9]=l,_[10]=f,_[11]=i,_[12]=w,_[13]=y,_[14]=A,_[15]=F,_}function e(r,n){return new Float32Array(r,n,16)}const a=r();var o=Object.freeze({__proto__:null,create:r,clone:n,fromValues:t,createView:e,IDENTITY:a});


/***/ }),

/***/ "m3fN":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/meshUtils.js ***!
  \*************************************************************************************/
/*! exports provided: isMapAligned */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMapAligned", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e){switch(e){case"above-along":case"below-along":case"center-along":return 1;default:return 0}}


/***/ }),

/***/ "q0q8":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/effects/EffectList.js ***!
  \**********************************************************************/
/*! exports provided: default, canInterpolateEffectStops, canInterpolateEffects, convertEffectToStops, normalizeEffectStops, normalizeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canInterpolateEffectStops", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canInterpolateEffects", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertEffectToStops", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeEffectStops", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeEffects", function() { return g; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _colorUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../colorUtils.js */ "6zdV");
/* harmony import */ var _effects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects.js */ "RKAj");
/* harmony import */ var _parser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parser.js */ "Za7r");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function h(e){if(!e)return[];if("string"==typeof e){const t=Object(_parser_js__WEBPACK_IMPORTED_MODULE_5__["parse"])(e);return t.error?t.error:[{scale:-1,effects:t.effects}]}const t=[];for(const r of e){if(!isFinite(r.scale)||r.scale<=0)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("effect:invalid-scale","scale must be finite and greater than 0",{stop:r});const e=Object(_parser_js__WEBPACK_IMPORTED_MODULE_5__["parse"])(r.value);if(e.error)return e.error;t.push({scale:r.scale,effects:e.effects})}t.sort(((e,t)=>t.effects.length-e.effects.length));for(let e=0;e<t.length-1;e++){if(!_(t[e].effects,t[e+1].effects))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:t[e].effects,b:t[e+1].effects});g(t[e].effects,t[e+1].effects)}return t.sort(((e,t)=>t.scale-e.scale)),t}function u(e){switch(e.type){case"grayscale":case"sepia":case"invert":return new _effects_js__WEBPACK_IMPORTED_MODULE_4__["ColorMatrixEffect"](e.type,0);case"saturate":case"brightness":case"contrast":return new _effects_js__WEBPACK_IMPORTED_MODULE_4__["ColorMatrixEffect"](e.type,1);case"opacity":return new _effects_js__WEBPACK_IMPORTED_MODULE_4__["OpacityEffect"](1);case"hue-rotate":return new _effects_js__WEBPACK_IMPORTED_MODULE_4__["HueRotateEffect"](0);case"blur":return new _effects_js__WEBPACK_IMPORTED_MODULE_4__["BlurEffect"](0);case"drop-shadow":return new _effects_js__WEBPACK_IMPORTED_MODULE_4__["DropShadowEffect"](0,0,0,[...Object(_colorUtils_js__WEBPACK_IMPORTED_MODULE_3__["getNamedColor"])("transparent")]);case"bloom":return new _effects_js__WEBPACK_IMPORTED_MODULE_4__["BloomEffect"](0,0,0)}}function _(e,t){const s=e.length>t.length?e:t;return(e.length>t.length?t:e).every(((e,t)=>e.type===s[t].type))}function g(e,t){const s=e.length>t.length?e:t,r=e.length>t.length?t:e;for(let e=r.length;e<s.length;e++)r.push(u(s[e]))}function p(e,t,s){var r,n,f,i;if(null==(r=e[0])||!r.effects||null==(n=t[0])||!n.effects)return!0;return!((-1===(null==(f=e[0])?void 0:f.scale)||-1===(null==(i=t[0])?void 0:i.scale))&&(e.length>1||t.length>1)&&s<=0)&&_(e[0].effects,t[0].effects)}function m(e,t,s){var r,n;const f=e.length>t.length?e:t,i=e.length>t.length?t:e,c=i[i.length-1],l=null!=(r=null==c?void 0:c.scale)?r:s,o=null!=(n=null==c?void 0:c.effects)?n:[];for(let e=i.length;e<f.length;e++)i.push({scale:l,effects:[...o]});for(let e=0;e<f.length;e++)i[e].scale=-1===i[e].scale?s:i[e].scale,f[e].scale=-1===f[e].scale?s:f[e].scale,g(i[e].effects,f[e].effects)}function d(e,t,s){return e+(t-e)*s}/* harmony default export */ __webpack_exports__["default"] = (class{constructor(e=200){this.duration=e,this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this._effect="",this._effects=[],this._scale=0}get effect(){return this._effect}set effect(e){if(e=e||"",this._effect===e)return;this._effect=e;const s=h(e);Array.isArray(s)?this._transitionTo(s):(this._transitionTo([]),_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.layers.effects.EffectList").warn("Invalid Effect",{effect:e,error:s}))}get hasEffects(){return this.transitioning||!!this._effects.length}get effects(){return this._effects}get scale(){return this._scale}get transitioning(){return null!==this._to}transitionStep(e,t){this._applyTimeTransition(e),this._updateForScale(t)}_transitionTo(t){this.scale>0&&p(this._current,t,this.scale)?(this._final=t,this._to=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(t),m(this._current,this._to,this.scale),this._from=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._effects=this._current[0]?Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(this._current[0].effects):[]}_applyTimeTransition(t){if(!this._to)return;this._time+=t;const s=Math.min(1,this._time/this.duration);for(let e=0;e<this._current.length;e++){const t=this._current[e],r=this._from[e],n=this._to[e];t.scale=d(r.scale,n.scale,s);for(let e=0;e<t.effects.length;e++){const f=t.effects[e],i=r.effects[e],c=n.effects[e];f.interpolate(i,c,s)}}1===s&&(this._current=this._final,this._effects=this._current[0]?Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(this._current[0].effects):[],this._from=this._to=this._final=null)}_updateForScale(e){if(0===this._current.length)return;this._scale=e;const t=this._current,s=this._current.length-1;let r,n,f=1;if(1===t.length||e>=t[0].scale)n=r=t[0].effects;else if(e<=t[s].scale)n=r=t[s].effects;else for(let i=0;i<s;i++){const s=t[i],c=t[i+1];if(s.scale>=e&&c.scale<=e){f=(e-s.scale)/(c.scale-s.scale),r=s.effects,n=c.effects;break}}for(let e=0;e<this._effects.length;e++){this._effects[e].interpolate(r[e],n[e],f)}}});


/***/ }),

/***/ "qaIE":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/color.js ***!
  \******************************************************************/
/*! exports provided: copyAndPremultiply, premultiplyAlpha, premultiplyAlphaRGBA, premultiplyAlphaRGBAArray, premultiplyAlphaUint32, white */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAndPremultiply", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlpha", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlphaRGBA", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlphaRGBAArray", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlphaUint32", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return n; });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "0RS7");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=[255,255,255,1],t=[0,0,0,0];function u(r,n){return Array.isArray(n)?(r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3]):(r[0]=n.r,r[1]=n.g,r[2]=n.b,r[3]=n.a),r}function o(r,n=0,t=!1){const u=r[n+3];return r[n+0]*=u,r[n+1]*=u,r[n+2]*=u,t||(r[n+3]*=255),r}function c(r){return o(u([],r))}function e(n){return o(u(t,n)),Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t[0],t[1],t[2],t[3])}function i(n){if(!n)return 0;const{r:t,g:u,b:o,a:c}=n;return Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t*c,u*c,o*c,255*c)}function f(n){if(!n)return 0;const[t,u,o,c]=n;return Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t*(c/255),u*(c/255),o*(c/255),c)}


/***/ }),

/***/ "yE7X":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js ***!
  \******************************************************************/
/*! exports provided: MosaicType, VVType, WGLDrawPhase, WGLGeometryTransactionStatus, WGLGeometryType, WGLVVFlag, WGLVVTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MosaicType", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VVType", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLDrawPhase", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLGeometryTransactionStatus", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLGeometryType", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLVVFlag", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLVVTarget", function() { return _; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var E,T,I,L,A,_,O;!function(E){E[E.FILL=0]="FILL",E[E.LINE=1]="LINE",E[E.MARKER=2]="MARKER",E[E.TEXT=3]="TEXT",E[E.LABEL=4]="LABEL"}(E||(E={})),function(E){E[E.SUCCEEDED=0]="SUCCEEDED",E[E.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(T||(T={})),function(E){E[E.NONE=0]="NONE",E[E.MAP=1]="MAP",E[E.LABEL=2]="LABEL",E[E.LABEL_ALPHA=4]="LABEL_ALPHA",E[E.HITTEST=8]="HITTEST",E[E.HIGHLIGHT=16]="HIGHLIGHT",E[E.CLIP=32]="CLIP",E[E.DEBUG=64]="DEBUG",E[E.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(I||(I={})),function(E){E[E.SIZE=0]="SIZE",E[E.COLOR=1]="COLOR",E[E.OPACITY=2]="OPACITY",E[E.ROTATION=3]="ROTATION"}(L||(L={})),function(E){E[E.NONE=0]="NONE",E[E.OPACITY=1]="OPACITY",E[E.COLOR=2]="COLOR",E[E.ROTATION=4]="ROTATION",E[E.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",E[E.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",E[E.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",E[E.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(A||(A={})),function(E){E[E.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",E[E.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",E[E.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",E[E.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(_||(_={})),function(E){E[E.SPRITE=0]="SPRITE",E[E.GLYPH=1]="GLYPH"}(O||(O={}));


/***/ }),

/***/ "yN2G":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js ***!
  \******************************************************************/
/*! exports provided: C_FILL_STRIDE_SPEC, C_FILL_STRIDE_SPEC_DD, C_FILL_VERTEX_DEF, C_FILL_VERTEX_DEF_DD, C_ICON_STRIDE_SPEC, C_ICON_VERTEX_DEF, C_LABEL_STRIDE_SPEC, C_LABEL_VERTEX_DEF, C_LINE_STRIDE_SPEC, C_LINE_VERTEX_DEF, C_TEXT_STRIDE_SPEC, C_TEXT_VERTEX_DEF, C_VBO_GEOMETRY, C_VBO_INFO, C_VBO_PERINSTANCE, C_VBO_PERINSTANCE_VV, allocateTypedArrayBuffer, allocateTypedArrayBufferwithData, copyMeshData, createGeometryData, createProgramDescriptor, createTextureFromTexelData, geometryToMappedGeometry, getBytes, getCapType, getJoinType, getNamedBuffers, getPixelArrayCtor, getPixelBytes, getStrides, getTextProperties, getTransformParams, getVVType, isDefined, isNumber, strideToPackingFactor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_STRIDE_SPEC", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_STRIDE_SPEC_DD", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_VERTEX_DEF", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_VERTEX_DEF_DD", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_ICON_STRIDE_SPEC", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_ICON_VERTEX_DEF", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LABEL_STRIDE_SPEC", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LABEL_VERTEX_DEF", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LINE_STRIDE_SPEC", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LINE_VERTEX_DEF", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_TEXT_STRIDE_SPEC", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_TEXT_VERTEX_DEF", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_GEOMETRY", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_INFO", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_PERINSTANCE", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_PERINSTANCE_VV", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allocateTypedArrayBuffer", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allocateTypedArrayBufferwithData", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyMeshData", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryData", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgramDescriptor", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextureFromTexelData", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geometryToMappedGeometry", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBytes", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCapType", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJoinType", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNamedBuffers", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPixelArrayCtor", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPixelBytes", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrides", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextProperties", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformParams", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVVType", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strideToPackingFactor", function() { return C; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./color.js */ "qaIE");
/* harmony import */ var _SymbolProperties_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SymbolProperties.js */ "4SEz");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.Utils"),f="geometry",l="per_instance",m="per_instance_vv",d=[{name:"geometry",strideInBytes:32,divisor:0}],p=[{name:"geometry",strideInBytes:32,divisor:0}],y=[{name:"geometry",strideInBytes:12,divisor:0}],g=[{name:"geometry",strideInBytes:36,divisor:0}],h=[{name:"geometry",strideInBytes:32,divisor:0}],w=[{name:"geometry",strideInBytes:36,divisor:0}];function v(e){const r={};for(const t of e)r[t.name]=t.strideInBytes;return r}const b=v(d),A=v(p),I=v(y),L=v(g),j=v(h),x=v(w);function E(e,r){switch(e){case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].MARKER:return b;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].FILL:return r?I:A;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LINE:return L;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].TEXT:return j;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LABEL:return x}}const U=["geometry"],F=["geometry"],M=["geometry"],T=["geometry"],z=["geometry"];function B(e){switch(e){case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].MARKER:return U;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].FILL:return F;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LINE:return M;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].TEXT:return T;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LABEL:return z}}function C(e){switch(e%4){case 0:case 2:return 4;case 1:case 3:return 1}}function R(e,r){switch(r%4){case 0:case 2:return new Uint32Array(Math.floor(e*r/4));case 1:case 3:return new Uint8Array(e*r)}}function O(e,r){switch(r%4){case 0:case 2:return new Uint32Array(e);case 1:case 3:return new Uint8Array(e)}}function $(e){return _SymbolProperties_js__WEBPACK_IMPORTED_MODULE_11__["TextProperties"].pool.acquire(e.color?Object(_color_js__WEBPACK_IMPORTED_MODULE_10__["copyAndPremultiply"])(e.color):[255,255,255,255],e.haloColor?Object(_color_js__WEBPACK_IMPORTED_MODULE_10__["copyAndPremultiply"])(e.haloColor):[255,255,255,255],Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["pt2px"])(e.haloSize),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["pt2px"])(e.font.size),e.angle*Math.PI/180,e.xoffset/e.font.size,e.yoffset/e.font.size,"left"===e.horizontalAlignment?0:"right"===e.horizontalAlignment?1:.5,"top"===e.verticalAlignment?0:"bottom"===e.verticalAlignment?1:.5)}function N(e){return null!=e}function P(e){return"number"==typeof e}function S(e,t){switch(e){case"butt":return 0;case"round":return t?2:1;case"square":return 2;default:return u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-type",`Cap type ${e} is not a valid option. Defaulting to round`)),1}}function Z(e){switch(e){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-type",`Join type ${e} is not a valid option. Defaulting to round`)),1}}function _(e){switch(e){case"opacity":return _enums_js__WEBPACK_IMPORTED_MODULE_9__["VVType"].OPACITY;case"color":return _enums_js__WEBPACK_IMPORTED_MODULE_9__["VVType"].COLOR;case"rotation":return _enums_js__WEBPACK_IMPORTED_MODULE_9__["VVType"].ROTATION;case"size":return _enums_js__WEBPACK_IMPORTED_MODULE_9__["VVType"].SIZE;default:return u.error(`Cannot interpret unknown vv: ${e}`),null}}function k(e){const{transform:r,hasZ:t,hasM:n}=e;return{transform:r,hasZ:t,hasM:n}}function q(e,r,t,n,o,s,i){for(const r in s){const n=s[r].stride,i=C(n),a=s[r].data,c=t[r].data,u=n*o.vertexCount/i,f=n*e/i,l=n*o.vertexFrom/i;for(let e=0;e<u;++e)c[e+f]=a[e+l]}const a=o.indexCount;for(let t=0;t<a;++t)n[t+r]=i[t+o.indexFrom]-o.vertexFrom+e}const D={geometry:35044};function K(e,r){const t=[];for(let n=0;n<5;++n){const o=B(n),s={};for(const e of o)s[e]={data:r(n,e)};t.push({data:e(n),buffers:s})}return t}function X(e,r){let n,s;return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPowerOfTwo"])(r.width)&&Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPowerOfTwo"])(r.height)?(n=!0,s=9987):(n=!1,s=9729),new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__["default"](e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,hasMipmap:n,samplingMode:s,wrapMode:33071,flipped:!0},r)}function J(e){return{vertexFrom:void 0,vertexTo:void 0,geometry:e}}function Y(e){switch(e){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function G(e){switch(e){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("webgl-utils",`Unable to handle type ${e}`))}}function H(e){switch(e){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("webgl-utils",`Unable to handle type ${e}`))}}const Q=new Map,V=(e,r)=>{if(!Q.has(e)){const t=function(e){const r={};for(const t in e){const n=e[t];let o=0;r[t]=n.map((e=>{const r={...e,normalized:e.normalized||!1,divisor:e.divisor||0,offset:o,stride:0};return o+=e.count*Y(e.type),r})),r[t].forEach((e=>e.stride=o))}return r}(r),n={strides:(e=>{const r={};for(const t in e){const n=e[t];r[t]=n.length?n[0].stride:0}return r})(t),bufferLayouts:t,attributes:(e=>{const r={};for(const t in e)for(const n of e[t])r[n.name]=n.location;return r})(r)};Q.set(e,n)}return Q.get(e)};


/***/ })

}]);
//# sourceMappingURL=default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~aafed1ba.js.map