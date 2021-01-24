(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layer~9fe18dbe"],{

/***/ "5x/F":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/LevelDependentSizeVariable.js ***!
  \*********************************************************************************/
/*! exports provided: LevelDependentSizeVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelDependentSizeVariable", function() { return n; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../renderers/visualVariables/support/sizeVariableUtils.js */ "hvLT");
/* harmony import */ var _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../renderers/visualVariables/SizeVariable.js */ "w/y1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var l;let n=l=class extends _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_12__["default"]{writeLevels(e,s,i){for(const i in e){const e=this.levels[i];return void(s.stops=e)}}clone(){return new l({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:Object(_renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_11__["isSizeVariable"])(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:Object(_renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_11__["isSizeVariable"])(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.levels)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],n.prototype,"levels",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("levels")],n.prototype,"writeLevels",null),n=l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.engine.LevelDependentSizeVariable")],n);


/***/ }),

/***/ "G0q+":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/shapingUtils.js ***!
  \****************************************************************************************/
/*! exports provided: ShapedGlyph, ShapingInfo, shapeGlyphs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapedGlyph", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapingInfo", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shapeGlyphs", function() { return T; });
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/mat2d.js */ "opr1");
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/mat2df32.js */ "LGNZ");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../alignmentUtils.js */ "Mt1D");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Rect.js */ "qcDN");
/* harmony import */ var _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../collisions/BoundingBox.js */ "e+Fw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const g=Math.PI/180;class u{constructor(t,s,e,i){this._rotationT=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this._xBounds=0,this._yBounds=0,this.minZoom=0,this.maxZoom=255;const o=e.rect,h=new Float32Array(8);t*=i,s*=i;const n=e.code?o.width*i:e.metrics.width,a=e.code?o.height*i:e.metrics.height;h[0]=t,h[1]=s,h[2]=t+n,h[3]=s,h[4]=t,h[5]=s+a,h[6]=t+n,h[7]=s+a,this._data=h,this._setTextureCoords(o),this._scale=i,this._mosaic=e,this.x=t,this.y=s}get width(){return this._mosaic.metrics.width*this._scale}get mosaic(){return this._mosaic}set angle(t){this._angle=t,Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this._rotationT),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this._rotationT,this._rotationT,-t),this._setOffsets(this._data)}get angle(){return this._angle}get xTopLeft(){return this._data[0]}get yTopLeft(){return this._data[1]}get xBottomRight(){return this._data[6]}get yBottomRight(){return this._data[7]}get texcoords(){return this._texcoords}get textureBinding(){return this._mosaic.textureBinding}get offsets(){return this._offsets||this._setOffsets(this._data),this._offsets}get char(){return String.fromCharCode(this._mosaic.code)}get code(){return this._mosaic.code}get bounds(){const{height:t,width:s}=this._mosaic.metrics,e=s*this._scale,i=Math.abs(t)*this._scale,h=new Float32Array(8);h[0]=this.x,h[1]=this.y,h[2]=this.x+e,h[3]=this.y,h[4]=this.x,h[5]=this.y+i,h[6]=this.x+e,h[7]=this.y+i;const n=Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["m"])(Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this._rotationT,this._T);Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["t"])(h,h,n);let c=1/0,d=1/0,f=0,l=0;for(let t=0;t<4;t++){const s=h[2*t],e=h[2*t+1];c=Math.min(c,s),d=Math.min(d,e),f=Math.max(f,s),l=Math.max(l,e)}const g=f-c,u=l-d;return new _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["default"](c+g/2,d+u/2,g,u)}setTransform(t){this._T=t,this._offsets=null}_setOffsets(t){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0});const s=this._offsets,e=new Float32Array(8),i=Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["m"])(Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this._rotationT,this._T);Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["t"])(e,t,i),s.upperLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(8*e[0],8*e[1]),s.upperRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(8*e[2],8*e[3]),s.lowerLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(8*e[4],8*e[5]),s.lowerRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(8*e[6],8*e[7])}_setTextureCoords({x:t,y:s,width:e,height:i}){this._texcoords={upperLeft:Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(t,s),upperRight:Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(t+e,s),lowerLeft:Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(t,s+i),lowerRight:Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(t+e,s+i)}}}const _=(t,s)=>({code:0,page:0,sdf:!0,rect:new _Rect_js__WEBPACK_IMPORTED_MODULE_6__["default"](0,0,11,8),textureBinding:s,metrics:{advance:0,height:4,width:t,left:0,top:0}});class p{constructor(t,s,e){this._rotation=0,this._decorate(t,s,e),this.glyphs=t,this.bounds=this._createBounds(t),this.isMultiline=s.length>1,this._hasRotation=0!==e.angle,this._T=this._createGlyphTransform(this.bounds,e);for(const s of t)s.setTransform(this._T)}setRotation(t){if(0===t&&0===this._rotation)return;this._rotation=t;const s=this._T,e=Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["b"])(Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),t);Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["m"])(s,e,s);for(const t of this.glyphs)t.setTransform(this._T)}_decorate(t,s,e){if(!e.decoration||"none"===e.decoration||!t.length)return;const i=e.scale,o="underline"===e.decoration?30:20,h=t[0].textureBinding;for(const e of s){const s=e.startX*i,n=e.startY*i,r=(e.width+e.glyphWidthEnd)*i;t.push(new u(s,n+o*i,_(r,h),1))}}get boundsT(){const e=this.bounds,i=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),e.x,e.y);if(Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["t"])(i,i,this._T),this._hasRotation){const t=Math.max(e.width,e.height);return new _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["default"](i[0],i[1],t,t)}return new _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["default"](i[0],i[1],e.width,e.height)}_createBounds(t){let s=1/0,e=1/0,i=0,o=0;for(const h of t)s=Math.min(s,h.xTopLeft),e=Math.min(e,h.yTopLeft),i=Math.max(i,h.xTopLeft+h.width),o=Math.max(o,h.yBottomRight);const h=i-s,n=o-e;return new _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["default"](s+h/2,e+n/2,h,n)}_createGlyphTransform(s,e){const o=g*e.angle,h=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),a=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])();return Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["t"])(h,h,Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(a,e.xOffset,-e.yOffset)),e.isCIM?Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(h,h,o):(Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["t"])(h,h,Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(a,s.x,s.y)),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(h,h,o),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["t"])(h,h,Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(a,-s.x,-s.y))),h}}class x{constructor(t,s,e,i,o,h){this.glyphWidthEnd=0,this.startX=0,this.startY=0,this.start=Math.max(0,Math.min(s,e)),this.end=Math.max(0,Math.max(s,e)),this.end<t.length&&(this.glyphWidthEnd=t[this.end].metrics.width),this.width=i,this.yMin=o,this.yMax=h}}const w=t=>10===t,y=t=>32===t;function T(t,s,e){const i=e.scale,o=new Array,h=function(t,s,e){const i=new Array,o=1/e.scale,h=e.maxLineWidth*o,n=s?t.length-1:0,r=s?-1:t.length,a=s?-1:1;let c=n,d=0,f=0,l=c,m=l,g=0,u=1/0,_=0;for(;c!==r;){const{code:s,metrics:e}=t[c],o=Math.abs(e.top);if(w(s)||y(s)||(u=Math.min(u,o),_=Math.max(_,o+e.height)),w(s))c!==n&&(i.push(new x(t,l,c-a,d,u,_)),u=1/0,_=0),d=0,l=c+a,m=c+a,f=0;else if(y(s))m=c+a,f=0,g=e.advance,d+=e.advance;else if(d>h){if(m!==l){const s=m-2*a;d-=g,i.push(new x(t,l,s,d-f,u,_)),u=1/0,_=0,l=m,d=f}else i.push(new x(t,l,c-a,d,u,_)),u=1/0,_=0,l=c,m=c,d=0;d+=e.advance,f+=e.advance}else d+=e.advance,f+=e.advance;c+=a}const p=new x(t,l,c-a,d,u,_);return p.start>=0&&p.end<t.length&&i.push(p),i}(t,s,e),n=function(t,s){let e=0;for(let s=0;s<t.length;s++){const{width:i}=t[s];e=Math.max(i,e)}const i="underline"===s.decoration?4:0,o=t[0].yMin;return{x:0,y:o,height:t[t.length-1].yMax+s.lineHeight*(t.length-1)+i-o,width:e}}(h,e),{vAlign:r,hAlign:a}=e,c=r===_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_4__["VAlign"].Baseline?1:0,f=c?0:r-1,l=(1-c)*-n.y+f*(n.height/2)+-26*(c?1:0);for(let s=0;s<h.length;s++){const{start:n,end:r,width:c}=h[s];let d=-1*(a+1)*(c/2)-3;const f=s*e.lineHeight+l-3;h[s].startX=d,h[s].startY=f;for(let s=n;s<=r;s++){const e=t[s];if(w(e.code))continue;const h=new u(d+e.metrics.left,f-e.metrics.top,e,i);d+=e.metrics.advance,o.push(h)}}return new p(o,h,e)}


/***/ }),

/***/ "Mt1D":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/alignmentUtils.js ***!
  \***************************************************************************/
/*! exports provided: HAlign, VAlign, getAlignmentFromPlacement, getJustification, getXAnchorDirection, getXDirection, getYAnchorDirection, getYDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAlign", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VAlign", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignmentFromPlacement", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJustification", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getXAnchorDirection", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getXDirection", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYAnchorDirection", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYDirection", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var e,t;function n(t){switch(t){case"left":return e.Left;case"right":return e.Right;case"center":case"justify":return e.Center}}function r(e){switch(e){case"top":return t.Top;case"middle":return t.Center;case"baseline":return t.Baseline;case"bottom":return t.Bottom}}function a(n){switch(n){case"above-left":return[e.Right,t.Bottom];case"above-center":case"above-along":return[e.Center,t.Bottom];case"above-right":return[e.Left,t.Bottom];case"center-left":return[e.Right,t.Center];case"center-center":case"center-along":return[e.Center,t.Center];case"center-right":return[e.Left,t.Center];case"below-left":return[e.Right,t.Top];case"below-center":case"below-along":return[e.Center,t.Top];case"below-right":return[e.Left,t.Top];case"always-horizontal":return[e.Center,t.Baseline];default:return console.debug(`Found invalid placement type ${n}`),[e.Center,t.Center]}}function c(t){switch(t){case e.Right:return-1;case e.Center:return 0;case e.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${t}`),0}}function o(e){switch(e){case t.Top:return 1;case t.Center:return 0;case t.Bottom:case t.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function s(t){switch(t){case"left":return e.Left;case"right":return e.Right;case"center":case"justify":return e.Center}}!function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(e||(e={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(t||(t={}));


/***/ }),

/***/ "RaXU":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/util.js ***!
  \*******************************************************************/
/*! exports provided: analyzeRings, toJSONGeometryType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analyzeRings", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSONGeometryType", function() { return e; });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/jsonMap.js */ "+opI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function e(t){return o.toJSON(t)}function n(t,o,e){const n=[],i=[];let r=0,l=0;for(const s of t){const t=l;let m=s[0][0],c=s[0][1];n[l++]=m,n[l++]=c;let p=0;for(let t=1;t<s.length;++t){const o=m,e=c;m=s[t][0],c=s[t][1],p+=c*o-m*e,n[l++]=m,n[l++]=c}o(p/2),p>0?(t-r>0&&(e(r,t,n,i),r=t),i.length=0):p<0&&t-r>0?i.push(.5*(t-r)):l=t}l-r>0&&e(r,l,n,i)}


/***/ }),

/***/ "a8c1":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/vvFlagUtils.js ***!
  \*****************************************************************************/
/*! exports provided: getVVFlags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVVFlags", function() { return e; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "yE7X");
/* harmony import */ var _visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visualVariablesUtils.js */ "NIRN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e){if(!e)return _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].NONE;let r=0;for(const i of e)if("size"===i.type){const t=Object(_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_1__["getTypeOfSizeVisualVariable"])(i);r|=t,"outline"===i.target&&(r|=t<<4)}else"color"===i.type?r|=_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].COLOR:"opacity"===i.type?r|=_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].OPACITY:"rotation"===i.type&&(r|=_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].ROTATION);return r}


/***/ }),

/***/ "e+Fw":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/BoundingBox.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/vec2f32.js */ "c46T");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class e{constructor(t,e,s,r){this.center=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(t,e),this.centerT=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),this.halfWidth=s/2,this.halfHeight=r/2,this.width=s,this.height=r}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new e(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(h,i=4){const e=Math.abs(h.centerT[0]-this.centerT[0]),s=Math.abs(h.centerT[1]-this.centerT[1]),r=(h.halfWidth+this.halfWidth+i)/e,n=(h.halfHeight+this.halfHeight+i)/s,a=Math.min(r,n);return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["log2"])(a)}extend(t){const h=Math.min(this.xmin,t.xmin),i=Math.min(this.ymin,t.ymin),e=Math.max(this.xmax,t.xmax)-h,s=Math.max(this.ymax,t.ymax)-i,r=h+e/2,n=i+s/2;this.width=e,this.height=s,this.halfWidth=e/2,this.halfHeight=s/2,this.x=r,this.y=n}static deserialize(t){const h=t.readF32(),i=t.readF32(),s=t.readInt32(),r=t.readInt32();return new e(h,i,s,r)}}/* harmony default export */ __webpack_exports__["default"] = (e);


/***/ }),

/***/ "fvq6":
/*!***********************************************!*\
  !*** ./node_modules/@arcgis/core/core/MD5.js ***!
  \***********************************************/
/*! exports provided: createMD5Hash, outputTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMD5Hash", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outputTypes", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n={Base64:0,Hex:1,String:2,Raw:3};function t(n,t){const r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,r,e,o,c,u){return t((s=t(t(r,n),t(o,u)))<<(f=c)|s>>>32-f,e);var s,f}function e(n,t,e,o,c,u,s){return r(t&e|~t&o,n,t,c,u,s)}function o(n,t,e,o,c,u,s){return r(t&o|e&~o,n,t,c,u,s)}function c(n,t,e,o,c,u,s){return r(t^e^o,n,t,c,u,s)}function u(n,t,e,o,c,u,s){return r(e^(t|~o),n,t,c,u,s)}function s(r,s=n.Hex){const f=s||n.Base64,i=function(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;let s=1732584193,f=-271733879,i=-1732584194,h=271733878;for(let r=0;r<n.length;r+=16){const a=s,l=f,g=i,p=h;s=e(s,f,i,h,n[r+0],7,-680876936),h=e(h,s,f,i,n[r+1],12,-389564586),i=e(i,h,s,f,n[r+2],17,606105819),f=e(f,i,h,s,n[r+3],22,-1044525330),s=e(s,f,i,h,n[r+4],7,-176418897),h=e(h,s,f,i,n[r+5],12,1200080426),i=e(i,h,s,f,n[r+6],17,-1473231341),f=e(f,i,h,s,n[r+7],22,-45705983),s=e(s,f,i,h,n[r+8],7,1770035416),h=e(h,s,f,i,n[r+9],12,-1958414417),i=e(i,h,s,f,n[r+10],17,-42063),f=e(f,i,h,s,n[r+11],22,-1990404162),s=e(s,f,i,h,n[r+12],7,1804603682),h=e(h,s,f,i,n[r+13],12,-40341101),i=e(i,h,s,f,n[r+14],17,-1502002290),f=e(f,i,h,s,n[r+15],22,1236535329),s=o(s,f,i,h,n[r+1],5,-165796510),h=o(h,s,f,i,n[r+6],9,-1069501632),i=o(i,h,s,f,n[r+11],14,643717713),f=o(f,i,h,s,n[r+0],20,-373897302),s=o(s,f,i,h,n[r+5],5,-701558691),h=o(h,s,f,i,n[r+10],9,38016083),i=o(i,h,s,f,n[r+15],14,-660478335),f=o(f,i,h,s,n[r+4],20,-405537848),s=o(s,f,i,h,n[r+9],5,568446438),h=o(h,s,f,i,n[r+14],9,-1019803690),i=o(i,h,s,f,n[r+3],14,-187363961),f=o(f,i,h,s,n[r+8],20,1163531501),s=o(s,f,i,h,n[r+13],5,-1444681467),h=o(h,s,f,i,n[r+2],9,-51403784),i=o(i,h,s,f,n[r+7],14,1735328473),f=o(f,i,h,s,n[r+12],20,-1926607734),s=c(s,f,i,h,n[r+5],4,-378558),h=c(h,s,f,i,n[r+8],11,-2022574463),i=c(i,h,s,f,n[r+11],16,1839030562),f=c(f,i,h,s,n[r+14],23,-35309556),s=c(s,f,i,h,n[r+1],4,-1530992060),h=c(h,s,f,i,n[r+4],11,1272893353),i=c(i,h,s,f,n[r+7],16,-155497632),f=c(f,i,h,s,n[r+10],23,-1094730640),s=c(s,f,i,h,n[r+13],4,681279174),h=c(h,s,f,i,n[r+0],11,-358537222),i=c(i,h,s,f,n[r+3],16,-722521979),f=c(f,i,h,s,n[r+6],23,76029189),s=c(s,f,i,h,n[r+9],4,-640364487),h=c(h,s,f,i,n[r+12],11,-421815835),i=c(i,h,s,f,n[r+15],16,530742520),f=c(f,i,h,s,n[r+2],23,-995338651),s=u(s,f,i,h,n[r+0],6,-198630844),h=u(h,s,f,i,n[r+7],10,1126891415),i=u(i,h,s,f,n[r+14],15,-1416354905),f=u(f,i,h,s,n[r+5],21,-57434055),s=u(s,f,i,h,n[r+12],6,1700485571),h=u(h,s,f,i,n[r+3],10,-1894986606),i=u(i,h,s,f,n[r+10],15,-1051523),f=u(f,i,h,s,n[r+1],21,-2054922799),s=u(s,f,i,h,n[r+8],6,1873313359),h=u(h,s,f,i,n[r+15],10,-30611744),i=u(i,h,s,f,n[r+6],15,-1560198380),f=u(f,i,h,s,n[r+13],21,1309151649),s=u(s,f,i,h,n[r+4],6,-145523070),h=u(h,s,f,i,n[r+11],10,-1120210379),i=u(i,h,s,f,n[r+2],15,718787259),f=u(f,i,h,s,n[r+9],21,-343485551),s=t(s,a),f=t(f,l),i=t(i,g),h=t(h,p)}return[s,f,i,h]}(function(n){const t=[];for(let r=0,e=8*n.length;r<e;r+=8)t[r>>5]|=(255&n.charCodeAt(r/8))<<r%32;return t}(r),8*r.length);switch(f){case n.Raw:return i;case n.Hex:return function(n){const t="0123456789abcdef",r=[];for(let e=0,o=4*n.length;e<o;e++)r.push(t.charAt(n[e>>2]>>e%4*8+4&15)+t.charAt(n[e>>2]>>e%4*8&15));return r.join("")}(i);case n.String:return function(n){const t=[];for(let r=0,e=32*n.length;r<e;r+=8)t.push(String.fromCharCode(n[r>>5]>>>r%32&255));return t.join("")}(i);case n.Base64:return function(n){const t=[];for(let r=0,e=4*n.length;r<e;r+=3){const e=(n[r>>2]>>r%4*8&255)<<16|(n[r+1>>2]>>(r+1)%4*8&255)<<8|n[r+2>>2]>>(r+2)%4*8&255;for(let o=0;o<4;o++)8*r+6*o>32*n.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>6*(3-o)&63))}return t.join("")}(i)}}


/***/ }),

/***/ "m662":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/clusterUtils.js ***!
  \***************************************************************************/
/*! exports provided: createClusterCountSizeVariable, createClusterRenderer, findSizeVV, hasClusterCountVV, isClusterCompatibleRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClusterCountSizeVariable", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClusterRenderer", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSizeVV", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClusterCountVV", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClusterCompatibleRenderer", function() { return m; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../renderers/visualVariables/support/SizeStop.js */ "moES");
/* harmony import */ var _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../renderers/visualVariables/SizeVariable.js */ "w/y1");
/* harmony import */ var _core_MD5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/MD5.js */ "fvq6");
/* harmony import */ var _engine_LevelDependentSizeVariable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../engine/LevelDependentSizeVariable.js */ "5x/F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.support.clusterUtils");_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"].add("esri-cluster-arcade-enabled",1);const u=Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-cluster-arcade-enabled"),c=(e,t,r,s)=>{const a=t.clone();if(!m(a))return a;if(r.fields)for(const i of r.fields)v(e,i);if("visualVariables"in a){const t=(a.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),n=d(t);t.forEach((i=>{"rotation"===i.type?i.field?i.field=S(e,i.field,"avg_angle"):i.valueExpression&&(i.field=x(e,i.valueExpression,"avg_angle"),i.valueExpression=null):i.normalizationField?(i.field=S(e,i.field,"norm",i.normalizationField),i.normalizationField=null):i.field?i.field=S(e,i.field,"avg"):(i.field=x(e,i.valueExpression,"avg"),i.valueExpression=null)})),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(n)&&!p(t)&&(t.push(f(r,s)),a.dynamicClusterSize=!0),a.visualVariables=t}switch(a.type){case"simple":break;case"unique-value":a.field?a.field=S(e,a.field,"mode"):a.valueExpression&&(a.field=x(e,a.valueExpression,"mode"),a.valueExpression=null);break;case"class-breaks":a.normalizationField?(a.field=S(e,a.field,"norm",a.normalizationField),a.normalizationField=null):a.field?a.field=S(e,a.field,"avg"):(a.field=x(e,a.valueExpression,"avg"),a.valueExpression=null)}return a},d=e=>{for(const i of e)if("size"===i.type)return i;return null},p=e=>{for(const i of e)if("cluster_count"===i.field)return!0;return!1},f=(e,t)=>{const r=[new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({value:0,size:0}),new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({value:1})];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t))return new _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_5__["default"]({field:"cluster_count",stops:[...r,new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({value:2,size:0})]});const n=Object.keys(t).reduce(((i,a)=>({...i,[a]:[...r,new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({value:Math.max(2,t[a].minValue),size:e.clusterMinSize}),new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({value:Math.max(3,t[a].maxValue),size:e.clusterMaxSize})]})),{});return new _engine_LevelDependentSizeVariable_js__WEBPACK_IMPORTED_MODULE_7__["LevelDependentSizeVariable"]({field:"cluster_count",levels:n})},m=e=>{const i=i=>o.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("Unsupported-renderer",i,{renderer:e}));if("unique-value"===e.type){if(e.field2||e.field3)return i("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){const t=e.normalizationType;if("field"!==t)return i(`FeatureReductionCluster does not support a normalizationType of ${t}`),!1}}else if("simple"!==e.type)return i(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1;if(!u){if("valueExpression"in e&&e.valueExpression)return i("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return i("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function v(e,i){const{name:t,outStatistic:s}=i,{onStatisticField:a,onStatisticValueExpression:l,statisticType:u}=s;if(l){const i=Object(_core_MD5_js__WEBPACK_IMPORTED_MODULE_6__["createMD5Hash"])(l.toLowerCase());e.push({name:t,outStatistic:{onStatisticField:i,onStatisticValueExpression:l,statisticType:u}})}else a?e.push({name:t,outStatistic:{onStatisticField:a,statisticType:u}}):o.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-unsupported-field","Unable to handle field",{field:i}))}function x(e,i,t){const r=Object(_core_MD5_js__WEBPACK_IMPORTED_MODULE_6__["createMD5Hash"])(i),s="mode"===t?`cluster_type_${r}`:`cluster_avg_${r}`;return e.some((e=>e.name===s))||e.push({name:s,outStatistic:{onStatisticField:r,onStatisticValueExpression:i,statisticType:t}}),s}function S(e,i,t,r){if("cluster_count"===i||e.some((e=>e.name===i)))return i;const s=function(e,i,t){switch(e){case"avg":case"avg_angle":return`cluster_avg_${i}`;case"mode":return`cluster_type_${i}`;case"norm":{const e=t,r="field",s=i.toLowerCase()+",norm:"+r+","+e.toLowerCase();return"cluster_avg_"+Object(_core_MD5_js__WEBPACK_IMPORTED_MODULE_6__["createMD5Hash"])(s)}}}(t,i,r);return e.some((e=>e.name===s))||("norm"===t?e.push({name:s,outStatistic:{onStatisticField:i,onStatisticNormalizationField:r,statisticType:t}}):e.push({name:s,outStatistic:{onStatisticField:i,statisticType:t}})),s}


/***/ }),

/***/ "owVx":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/schemaUtils.js ***!
  \***************************************************************************/
/*! exports provided: addAggregateFields, createMatcherSchema, createSchema, createSymbolSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAggregateFields", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMatcherSchema", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSchema", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSymbolSchema", function() { return v; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/lang.js */ "f/qv");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/symbols.js */ "nNR5");
/* harmony import */ var _support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../support/clusterUtils.js */ "m662");
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../engine/webgl/materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../engine/webgl/Utils.js */ "yN2G");
/* harmony import */ var _engine_webgl_util_vvFlagUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../engine/webgl/util/vvFlagUtils.js */ "a8c1");
/* harmony import */ var _support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./support/rendererUtils.js */ "tDOP");
/* harmony import */ var _support_util_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/util.js */ "RaXU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const g=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.layers.features.schemaUtils"),b={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function h(e){return Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["hydrateMaterialKey"])(e)}function x(e){switch(e.type){case"line-marker":var t;return{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style};default:return Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_6__["f"])(e.toJSON()).toJSON()}}function v(e,t,r){if(!e)return null;let n=0,l=!1;switch(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t)&&"visualVariables"in t&&(n=Object(_engine_webgl_util_vvFlagUtils_js__WEBPACK_IMPORTED_MODULE_11__["getVVFlags"])(t.visualVariables||[]),l="dot-density"===t.type),e.type){case"simple-fill":case"picture-fill":return function(e,t,i,r){const n=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].FILL,t,!1,i),l=r?h(n):n,s=e.clone(),a=s.outline;s.outline=null;const o=[],c={materialKey:l,hash:s.hash(),...x(s)};if(o.push(c),a){const e=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].LINE,t,!0,!1),i={materialKey:r?h(e):e,hash:a.hash(),...x(a)};o.push(i)}return{type:"composite-symbol",layers:o,hash:o.reduce(((e,t)=>t.hash+e),"")}}(e,n,l,r);case"simple-marker":case"picture-marker":return function(e,t,i){const r=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].MARKER,t,!1,!1),n=i?h(r):r,l=x(e);return{materialKey:n,hash:e.hash(),...l,angle:e.angle}}(e,n,r);case"simple-line":return function(e,t,i){const r=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].LINE,t,!1,!1),n=i?h(r):r,l=e.clone(),s=l.marker;l.marker=null;const a=[];if(a.push({materialKey:n,hash:l.hash(),...x(l)}),s){var o;const e=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].MARKER,t,!1,!1),r=i?h(e):e;s.color=null!=(o=s.color)?o:l.color,a.push({materialKey:r,hash:s.hash(),lineWidth:l.width,...x(s)})}return{type:"composite-symbol",layers:a,hash:a.reduce(((e,t)=>t.hash+e),"")}}(e,n,r);case"text":return function(e,t,i){const r=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].TEXT,t,!1,!1),n=i?h(r):r,l=x(e);return{materialKey:n,hash:e.hash(),...l,angle:e.angle}}(e,n,r);case"label":return function(e,t,i){const r=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].LABEL,t,!1,!1,e.labelPlacement);return{materialKey:i?h(r):r,hash:e.hash(),...e.toJSON(),labelPlacement:e.labelPlacement}}(e,n,r);case"cim":return{type:"cim",rendererKey:n,data:e.data};case"web-style":return{...x(e),type:"web-style",hash:e.hash(),rendererKey:n};default:throw new Error(`symbol not supported ${e.type}`)}}function w(e,i){const r=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__["clone"])(e);return r.some((e=>function(e,t){const i=e.labelPlacement,r=b[t];if(!e.symbol)return g.warn("No LabelClass symbol specified."),!0;if(!r)return g.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${t} is not supported`)),!0;if(!r.some((e=>e===i))){const n=r[0];i&&g.warn(`Found invalid label placement type ${i} for ${t}. Defaulting to ${n}`),e.labelPlacement=n}return!1}(e,i)))?[]:r}function E(t){return Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-update-debug")&&console.debug("Created new schema",I(t,!0)),I(t)}function I(e,t=!1){try{var i,r;const n=function(e,t=!1){const i=new Array;return i.push(function(e,t,i=!1){const r={indexCount:0,fields:{}},n="featureReduction"in e&&e.featureReduction,s=n?"aggregate":"feature";switch(e.renderer.type){case"heatmap":{const{blurRadius:t,fieldOffset:i,field:n}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:r,target:s,storage:null,mesh:{blurRadius:t,fieldOffset:i,field:z(r,{target:s,field:n,resultType:"numeric"}).field}}}default:{const t=[],a="aggregate"===s?Object(_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_7__["createClusterRenderer"])(t,e.renderer,n,null):e.renderer;R(r,t);const u=j(r,s,a,i),d=function(e,t,i){switch(i.type){case"dot-density":return function(e,t,i){if(!i||!i.length)return{type:"dot-density",mapping:[],target:t};return{type:"dot-density",mapping:i.map(((i,r)=>{const{field:n,fieldIndex:l}=z(e,{valueExpression:i.valueExpression,field:i.field,resultType:"numeric",target:t});return{binding:r,field:n,fieldIndex:l}})),target:t}}(e,t,i.attributes);case"simple":case"class-breaks":case"unique-value":return function(e,t,i){if(!i||!i.length)return{type:"visual-variable",mapping:[],target:t};const r={storage:!0},n="numeric";return{type:"visual-variable",mapping:Object(_support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_12__["simplifyVisualVariables"])(i).map((i=>{var l;const s=Object(_engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_10__["getVVType"])(i.type),{field:a,fieldIndex:o}=z(e,{target:t,valueExpression:i.valueExpression,field:i.field,context:r,resultType:n});switch(i.type){case"size":return"$view.scale"===i.valueExpression?null:{type:"size",binding:s,field:a,fieldIndex:o,normalizationField:z(e,{target:t,field:i.normalizationField,context:r,resultType:n}).field,valueRepresentation:null!=(l=i.valueRepresentation)?l:null};case"color":return{type:"color",binding:s,field:a,fieldIndex:o,normalizationField:z(e,{target:t,field:i.normalizationField,context:r,resultType:n}).field};case"opacity":return{type:"opacity",binding:s,field:a,fieldIndex:o,normalizationField:z(e,{target:t,field:i.normalizationField,context:r,resultType:n}).field};case"rotation":return{type:"rotation",binding:s,field:a,fieldIndex:o}}})).filter((e=>e)),target:t}}(e,t,i.visualVariables);case"heatmap":case"dictionary":return null}}(r,s,a),c=Object(_support_util_js__WEBPACK_IMPORTED_MODULE_13__["toJSONGeometryType"])(e.geometryType);let p=e.labelsVisible&&e.labelingInfo||[],g=[];if(n){if("selection"===n.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("ValidationError","Mapview does not support `selection` reduction type",n);g=n&&n.labelsVisible&&n.labelingInfo||[]}p=w(p,c),g=w(g,c);let b=0;const h=[...p.map((e=>V(a,r,e,"feature",b++,i))),...g.map((e=>V(a,r,e,"aggregate",b++,i)))];return{type:"symbol",target:s,attributes:r,aggregateFields:t,storage:d,mesh:{matcher:u,labels:h}}}}}(e,t)),i}(e,t),a={};n.map((t=>function(e,t,i){switch(i.target){case"feature":return void T(e,S(t),i);case"aggregate":{const r=t.featureReduction;if("selection"===r.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("ValidationError","Mapview does not support `selection` reduction type",r);return T(e,S(t),i),void function(e,t,i){e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(t.clusterMaxSize)/64),fields:i.aggregateFields}});F(e.aggregate,i.attributes.fields)}(e,r,i)}}}(a,e,t)));return{source:{definitionExpression:e.definitionExpression,fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:null==(i=e.historicMoment)?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(r=e.timeExtent)?void 0:r.toJSON()},attributes:{fields:{},indexCount:0},processors:n,targets:a}}catch(e){if("ValidationError"===e.fieldName)return g.error(e),null;throw e}}function F(e,t){for(const i in t){const r=t[i];if(r.target!==e.name)continue;const n=e.attributes[i];n?(n.context.mesh=n.context.mesh||r.context.mesh,n.context.storage=n.context.storage||r.context.storage):e.attributes[i]=r}return e}function S(e){var t,i,r,n,l;return[null!=(t=null==(i=e.filter)?void 0:i.toJSON())?t:null,null!=(r=null==(n=e.effect)||null==(l=n.filter)?void 0:l.toJSON())?r:null]}function T(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),F(e.feature,i.attributes.fields),e}function z(e,t){return t.field?N(e,{...t,type:"field",field:t.field}):t.valueExpression?N(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function N(e,t){switch(t.type){case"expression":{const i=t.valueExpression;if(!e.fields[i]){const r=e.indexCount++;e.fields[i]={...t,name:i,fieldIndex:r}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(t.label);if(!e.fields[i]){const r=e.indexCount++;e.fields[i]={...t,name:i,fieldIndex:r}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field;return"aggregate"===t.target&&e.fields[i]||(e.fields[i]={...t,name:i}),{field:i}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function V(e,t,i,r,n,l=!1){const s=N(t,{type:"label-expression",target:r,context:{mesh:!0},resultType:"string",label:{labelExpression:i.labelExpression,labelExpressionInfo:i.labelExpressionInfo?{expression:i.labelExpressionInfo.expression}:null,symbol:!!i.symbol,where:i.where}}),{fieldIndex:a}=s;return{...v(i,e,l),fieldIndex:a,target:r,index:n}}function R(e,t){const i={mesh:!0,storage:!0};for(const r of t){const{name:t,outStatistic:n}=r,{statisticType:l,onStatisticField:s}=n;let a=null,o=null,u=null;const d="numeric",c="feature";if("onStatisticValueExpression"in n){o=N(e,{type:"expression",target:c,valueExpression:n.onStatisticValueExpression,resultType:d}).fieldIndex}else if("onStatisticNormalizationField"in n){a=N(e,{type:"field",target:c,field:s,resultType:d}).field,u=n.onStatisticNormalizationField}else{a=N(e,{type:"field",target:c,field:s,resultType:d}).field}N(e,{type:"statistic",target:"aggregate",name:t,context:i,inField:a,inNormalizationField:u,inFieldIndex:o,statisticType:l})}}function j(e,t,i,n=!1){const s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrapOr"])(e,{indexCount:0,fields:{}});switch(i.type){case"simple":case"dot-density":return function(e,t,i,r=!1){const n=t.getSymbols();return{type:"simple",symbol:v(n.length?n[0]:null,t,r),isDotDensity:i}}(0,i,"dot-density"===i.type,n);case"class-breaks":return function(e,t,i,r=!1){const n={mesh:!0,use:"renderer.field"},l=i.backgroundFillSymbol,{field:s,fieldIndex:a}=z(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:n}),o=i.normalizationType,u="log"===o?"esriNormalizeByLog":"percent-of-total"===o?"esriNormalizeByPercentOfTotal":"field"===o?"esriNormalizeByField":null,d=i.classBreakInfos.map((e=>({symbol:v(e.symbol,i,r),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return{type:"interval",attributes:e.fields,field:s,fieldIndex:a,backgroundFillSymbol:v(l,i,r),defaultSymbol:v(i.defaultSymbol,i,r),intervals:d,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:u,isMaxInclusive:i.isMaxInclusive}}(s,t,i,n);case"unique-value":return function(e,t,i,r=!1){const n=[],s=i.backgroundFillSymbol,a={target:t,context:{mesh:!0},resultType:"string"};if(i.field&&"string"!=typeof i.field)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("ValidationError","Expected renderer.field to be a string",i);const{field:o,fieldIndex:u}=z(e,{...a,field:i.field,valueExpression:i.valueExpression});for(const e of i.uniqueValueInfos)n.push({value:""+e.value,symbol:v(e.symbol,i,r)});return{type:"map",attributes:e.fields,field:o,fieldIndex:u,field2:z(e,{...a,field:i.field2}).field,field3:z(e,{...a,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:v(s,i),defaultSymbol:v(i.defaultSymbol,i),map:n}}(s,t,i,n);case"dictionary":return function(e,t,i=!1){return{type:"dictionary",renderer:t.toJSON()}}(0,i,n)}}


/***/ }),

/***/ "t7mB":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/BidiText.js ***!
  \**************************************************************************/
/*! exports provided: bidiText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bidiText", function() { return n; });
/* harmony import */ var _core_BidiEngine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/BidiEngine.js */ "179/");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const i=new _core_BidiEngine_js__WEBPACK_IMPORTED_MODULE_0__["default"];function n(r){if(!i.hasBidiChar(r))return[r,!1];let n;return n="rtl"===i.checkContextual(r)?"IDNNN":"ICNNN",[i.bidiTransform(r,n,"VLYSN"),!0]}


/***/ }),

/***/ "tDOP":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/rendererUtils.js ***!
  \*************************************************************************************/
/*! exports provided: simplifyVVRenderer, simplifyVisualVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplifyVVRenderer", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplifyVisualVariables", function() { return t; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/screenUtils.js */ "qRWG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.renderers.visualVariables.support.utils"),r=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const l=e.clone(),o=l.visualVariables.map((e=>s(e)?a(e):e));return l.visualVariables=o,l};function t(e){return e.map((e=>s(e)?a(e.clone()):e))}function s(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function a(e){return e.stops=function(e,r){if(r.length<=8)return r;if(o.warn(`Found ${r.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),r.length>16)return function(e,o){const[r,...t]=o,s=t.pop(),a=t[0].value,i=t[t.length-1].value,u=(i-a)/6,c=[];for(let r=a;r<i;r+=u){let s=0;for(;r>=t[s].value;)s++;const a=t[s],i=o[s-1],u=r-i.value,p=a.value===i.value?1:u/(a.value-i.value);if("color"===e){const e=t[s],l=o[s-1],a=e.color.clone();a.r=n(l.color.r,a.r,p),a.g=n(l.color.g,a.g,p),a.b=n(l.color.b,a.b,p),a.a=n(l.color.a,a.a,p),c.push({value:r,color:a,label:e.label})}else if("size"===e){const e=t[s],a=o[s-1],i=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(e.size),u=n(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(a.size),i,p);c.push({value:r,size:u,label:e.label})}else{const e=t[s],l=n(o[s-1].opacity,e.opacity,p);c.push({value:r,opacity:l,label:e.label})}}return[r,...c,s]}(e,r);return function(e){const[l,...o]=e,r=o.pop();for(;o.length>6;){let e=0,l=0;for(let r=1;r<o.length;r++){const t=o[r-1],s=o[r],a=Math.abs(s.value-t.value);a>l&&(l=a,e=r)}o.splice(e,1)}return[l,...o,r]}(r)}(e.type,e.stops),e}function n(e,l,o){return(1-o)*e+o*l}


/***/ })

}]);
//# sourceMappingURL=default~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layer~9fe18dbe.js.map