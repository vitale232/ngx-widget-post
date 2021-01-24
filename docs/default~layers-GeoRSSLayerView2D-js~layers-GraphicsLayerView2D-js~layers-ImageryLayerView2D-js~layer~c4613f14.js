(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~c4613f14"],{

/***/ "+TxJ":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseMarkerTemplate.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../layers/graphics/featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../chunks/mat2d.js */ "opr1");
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/mat2df32.js */ "LGNZ");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../enums.js */ "yE7X");
/* harmony import */ var _symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper.js */ "5Bb1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (d=>class extends d{constructor(...t){super(...t),this.angle=0,this.xOffset=0,this.yOffset=0,this.width=0,this.height=0,this.boundsType="square",this._anchorX=0,this._anchorY=0,this._computedWidth=0,this._computedHeight=0,this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].MARKER}writeMeshWithGeometry(s,e,o,r,p,n){const u=e.indexVector,a=e.get("geometry"),f=e.getVector("geometry"),c=f.vertexCount,l=c,m=u.length;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._markerPlacement)){const t=null!=n?n:o.readLegacyGeometry();this._writePlacedMarkers(a,u,c,p,t)}else{const t=n?Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__["deltaDecodeGeometry"])(Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__["convertFromGeometry"])(n),2):"esriGeometryPolygon"===r?o.readCentroid():o.readUnquantizedGeometry();if(!t)return;if(t.isPoint){const[s,e]=t.coords;this._writeVertices(a,p,this._getPos(s,e)),this._writeIndices(u,c)}else t.forEachVertex(((t,s)=>{const e=f.vertexCount;this._writeVertices(a,p,this._getPos(t,s)),this._writeIndices(u,e)}))}const _=e.getVector("geometry").vertexCount-l,d=u.length-m;s.writeDisplayRecord(this.geometryType,this._materialKey,l,_,m,d)}_applyTransformation(t,s,e=0){Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__["i"])(t),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__["t"])(t,t,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__["f"])(this.xOffset,-this.yOffset)),this.angle+e!==0&&Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__["r"])(t,t,.017453292519944444*(this.angle+e));const i=this._computedWidth,h=this._computedHeight,a=(this._anchorX-.5)*i,c=(this._anchorY-.5)*h;Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["s"])(s,a,c),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(s,s,t),this._offsetUpperLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(16*s[0],16*s[1]),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["s"])(s,a+i,c),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(s,s,t),this._offsetUpperRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(16*s[0],16*s[1]),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["s"])(s,a,c+h),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(s,s,t),this._offsetBottomLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(16*s[0],16*s[1]),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["s"])(s,a+i,c+h),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(s,s,t),this._offsetBottomRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(16*s[0],16*s[1])}_writePlacedMarkers(t,i,h,o,r){const p=_symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_9__["CIMMarkerPlacementHelper"].getPlacement(r,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this._markerPlacement),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(1));if(!p)return;const n=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),u=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_5__["c"])();let f=0,l=p.next();for(;null!=l;)l.tx>=-128&&l.tx<=640&&l.ty>=-128&&l.ty<=640&&(this._applyTransformation(u,n,l.getAngle()/.017453292519944444),this._writeVertices(t,o,this._getPos(l.tx,l.ty)),this._writeIndices(i,h+f),f+=4),l=p.next()}_getPos(t,s){return Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(Math.round(8*t),Math.round(8*s))}_writeVertices(t,s,e){t.push(e),t.push(this._offsetUpperLeft),t.push(this._texUpperLeft),t.push(this._bitestAndDistRatio),t.push(s),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),t.push(e),t.push(this._offsetUpperRight),t.push(this._texUpperRight),t.push(this._bitestAndDistRatio),t.push(s),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),t.push(e),t.push(this._offsetBottomLeft),t.push(this._texBottomLeft),t.push(this._bitestAndDistRatio),t.push(s),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),t.push(e),t.push(this._offsetBottomRight),t.push(this._texBottomRight),t.push(this._bitestAndDistRatio),t.push(s),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth)}_writeIndices(t,s){const e=s;t.push(e+0),t.push(e+1),t.push(e+2),t.push(e+1),t.push(e+3),t.push(e+2)}});


/***/ }),

/***/ "/Hru":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/VertexVector.js ***!
  \******************************************************************************/
/*! exports provided: default, VertexVectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexVectors", function() { return o; });
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils.js */ "yN2G");
/* harmony import */ var _util_Writer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Writer.js */ "PeSW");
/* harmony import */ var _VertexBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VertexBuffer.js */ "2vGY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{constructor(t,e){this.data=t,this.stride=e}get vertexCount(){const t=this.stride/4,e=this.data.length/t;return e!==(0|e)&&console.debug("Corrupted stride"),e}transfer(t,e){const r=this.data.buffer();t.vertexCount=this.vertexCount,t.data=r,t.stride=this.stride,e.push(r)}}class o{constructor(r,o,n=!1){this.geometryType=r,this.indexVector=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_1__["default"](Uint32Array,6*o),this.namedVectors={};const i=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["getStrides"])(r,n);for(const t in i){const r=i[t];let n;switch(r%4){case 0:case 2:n=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_1__["default"](Uint32Array,r*o);break;case 1:case 3:n=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_1__["default"](Uint8Array,r*o)}this.namedVectors[t]=new s(n,r)}}get(t){return this.namedVectors[t].data}getVector(t){return this.namedVectors[t]}transfer(t,e){const r=this.indexVector.buffer(),s={};e.push(r);for(const t in this.namedVectors){const r=this.namedVectors[t];s[t]={},r.transfer(s[t],e)}t.geometryType=this.geometryType,t.indexBuffer=r,t.namedBuffers=s,this.destroy()}intoBuffers(){const t=_VertexBuffer_js__WEBPACK_IMPORTED_MODULE_2__["VertexBuffers"].fromVertexVectors(this);return this.destroy(),t}destroy(){this.indexVector=null,this.namedVectors=null}}/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ }),

/***/ "/kT+":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/segmentUtils.js ***!
  \****************************************************************************************/
/*! exports provided: SegmentCursor, pathDivide, pathLength, pathSubdivide, segmentAt, segmentCount, segmentLength, smoothPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentCursor", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathDivide", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathLength", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathSubdivide", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentAt", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentCount", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentLength", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothPaths", function() { return l; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "aixI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(t,e){return t[e+1]}function h(t){return t.length-1}function a(t){let e=0;for(let s=0;s<h(t);s++)e+=d(t,s);return e}function d(t,e,s=1){const[n,i]=r(t,e);return Math.sqrt(n*n+i*i)*s}class c{constructor(t,e,s,n,i){this._segments=t,this._index=e,this._distance=s,this._xStart=n,this._yStart=i,this._done=!1}static create(t){return new c(t,0,0,t[0][0],t[0][1])}clone(){return new c(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(t){return this._index===t._index||t._index===this._index-1&&(0===this._distance||1===t._distance)||t._index===this._index+1&&(1===this._distance||0===t._distance)}leq(t){return this._index<t._index||this._index===t._index&&this._distance<=t._distance}geq(t){return this._index>t._index||this._index===t._index&&this._distance>=t._distance}get _segment(){return this._segments[this._index+1]}get angle(){const t=this.dy,e=(0*t+-1*-this.dx)/(1*this.length);let s=Math.acos(e);return t>0&&(s=2*Math.PI-s),s}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:t,dy:e}=this;return Math.sqrt(t*t+e*e)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<h(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(t,e){const s=this.backwardLength;if(t<=s)return this._distance=(s-t)/this.length,this;let n=this.backwardLength;for(;this.prev();){if(n+this.length>t)return this._seekBackwards(t-n);n+=this.length}return this._distance=0,e?this:null}seek(t,e=!1){if(t<0)return this._seekBackwards(Math.abs(t),e);if(t<=this.remainingLength)return this._distance=(this.backwardLength+t)/this.length,this;let s=this.remainingLength;for(;this.next();){if(s+this.length>t)return this.seek(t-s,e);s+=this.length}return this._distance=1,e?this:null}}function u(t,e,s){const n=a(t),i=c.create(t),r=n/2,h=(n-e)/2,d=Math.floor(h/e),u=r-d*e;i.seek(u);for(let t=-d;t<=d;t++)i.x<512&&i.x>=0&&i.y<512&&i.y>=0&&s(i.clone(),t,r+t*e,n),i.seek(e)}function o(t,e,s){_(s,e,a(t),c.create(t),0)}function _(s,n,i,r,h){if(i<n)return;const a=r.clone().seek(i/2);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a))return;s(a.clone(),i,h),i=(i-n)/2;const d=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(a.seek(n/2));_(s,n,i,r,h+1),_(s,n,i,d,h+1)}function l(t,e){const s=e;for(let e=0;e<t.length;e++){let n=t[e];const i=[];i.push(n[0]);for(let t=1;t<n.length;t++){let[e,s]=i[t-1];e+=n[t][0],s+=n[t][1],i.push([e,s])}g(i,s);const r=[];r.push(i[0]);for(let t=1;t<i.length;t++){const[e,s]=i[t-1],[n,h]=i[t],a=Math.round(n-e),d=Math.round(h-s);r.push([a,d])}t[e]=r,n=r}return t}function g(t,e){const r=1e-6;if(e<=0)return;const h=t.length;if(h<3)return;const a=[];let d=0;a.push(0);for(let e=1;e<h;e++)d+=Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["dist"])(t[e],t[e-1]),a.push(d);e=Math.min(e,.2*d);const c=[];c.push(t[0][0]),c.push(t[0][1]);const u=t[h-1][0],o=t[h-1][1],_=Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["sub"])([0,0],t[0],t[1]);Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["normalize"])(_),t[0][0]+=e*_[0],t[0][1]+=e*_[1],Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["sub"])(_,t[h-1],t[h-2]),Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["normalize"])(_),t[h-1][0]+=e*_[0],t[h-1][1]+=e*_[1];for(let t=1;t<h;t++)a[t]+=e;a[h-1]+=e;const l=.5*e;for(let s=1;s<h-1;s++){let n=0,i=0,d=0;for(let h=s-1;h>=0&&!(a[h+1]<a[s]-l);h--){const c=l+a[h+1]-a[s],u=a[h+1]-a[h],o=a[s]-a[h]<l?1:c/u;if(Math.abs(o)<r)break;const _=o*o,g=o*c-.5*_*u,x=o*u/e,f=t[h+1],y=t[h][0]-f[0],p=t[h][1]-f[1];n+=x/g*(f[0]*o*c+.5*_*(c*y-u*f[0])-_*o*u*y/3),i+=x/g*(f[1]*o*c+.5*_*(c*p-u*f[1])-_*o*u*p/3),d+=x}for(let c=s+1;c<h&&!(a[c-1]>a[s]+l);c++){const h=l-a[c-1]+a[s],u=a[c]-a[c-1],o=a[c]-a[s]<l?1:h/u;if(Math.abs(o)<r)break;const _=o*o,g=o*h-.5*_*u,x=o*u/e,f=t[c-1],y=t[c][0]-f[0],p=t[c][1]-f[1];n+=x/g*(f[0]*o*h+.5*_*(h*y-u*f[0])-_*o*u*y/3),i+=x/g*(f[1]*o*h+.5*_*(h*p-u*f[1])-_*o*u*p/3),d+=x}c.push(n/d),c.push(i/d)}c.push(u),c.push(o);for(let e=0,s=0;e<h;e++)t[e][0]=c[s++],t[e][1]=c[s++]}


/***/ }),

/***/ "5Bb1":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/CIMMarkerPlacementHelper.js ***!
  \**************************************************************************************/
/*! exports provided: CIMMarkerPlacementHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIMMarkerPlacementHelper", function() { return e; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CIMOperators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CIMOperators.js */ "k0QX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class e{static getPlacement(e,o,s){const c=Object(_CIMOperators_js__WEBPACK_IMPORTED_MODULE_1__["getPlacementOperator"])(o);if(!c)return null;const n=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["cloneAndDecodeGeometry"])(e);return c.execute(n,o,s)}}


/***/ }),

/***/ "916D":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLMeshTemplate.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums.js */ "yE7X");
/* harmony import */ var _symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../symbols/cim/effects/CIMEffectHelper.js */ "XbuD");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{get needsPixelBuffer(){return!!this.effects||this.geometryType===_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].MARKER||this.geometryType===_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].TEXT||this.geometryType===_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].LABEL}writeMesh(r,i,o,f,m){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.effects))return this.writeMeshWithGeometry(r,i,o,f,m);const h=_symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_3__["CIMEffectHelper"].executeEffects(this.effects,o.readLegacyGeometry());let y=_symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_3__["CIMEffectHelper"].next(h);for(;y;)this.writeMeshWithGeometry(r,i,o,Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["getJsonType"])(y),m,y),y=_symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_3__["CIMEffectHelper"].next(h)}writeMeshWithGeometry(e,t,r,s,i,o){}bindFeature(e,t,r){}});


/***/ }),

/***/ "9SkJ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLLineTemplate.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utils.js */ "yN2G");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util.js */ "aixI");
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ "916D");
/* harmony import */ var _WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLBaseLineTemplate.js */ "bzZf");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const f=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.WGLLineTemplate");class p extends(Object(_WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"])){constructor(e,t,i,r,o,l,n,a,c,h,f,p,d,u,L,y){super();const _=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__["LineMaterialKey"].load(e);t&&(_.sdf=t.sdf,_.pattern=!0,_.textureBinding=t.textureBinding),this._capType=r,this._joinType=o,this._miterLimitCosine=Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["getLimitCosine"])(l),this.tessellationProperties._fillColor=n,this.tessellationProperties._tl=a,this.tessellationProperties._br=c,this._hasPattern=h,this._isDashed=f,this._joinOnUTurn=L,this._isColorLocked=p,this._zOrder=u,this.effects=y,this._materialKey=_.data,this.tessellationProperties._bitset=p?1:0,this.tessellationProperties._halfWidth=.5*i,this.tessellationProperties._halfReferenceWidth=.5*d,this._initializeTessellator(!1)}static fromCIMLine(e,s,o){const n=e.color,a=e.scaleFactor||1,m=e.isDashed;let c=e.cap;m&&1===c&&(c=2);const h=e.join,f=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(e.width)*a,d=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(e.referenceWidth),u=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(e.miterLimit),L=n&&Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBA"])(n)||0;if(!s)return new p(e.materialKey,s,f,c,h,u,L,0,0,!1,m,e.colorLocked,d,e.zOrder,o,e.effects);const{rect:y,width:_,height:j}=s,S=y.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],g=y.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],w=S+_,P=g+j,x=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(S,g),K=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(w,P);return new p(e.materialKey,s,f,c,h,u,L,x,K,!0,m,e.colorLocked,d,e.zOrder,o,e.effects)}static fromSimpleLine(e,s,l){const{color:m}=e,c="esriSLSSolid"!==e.style&&"esriSLSNull"!==e.style,h=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_6__["getCapType"])(e.cap||"round",c),f=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_6__["getJoinType"])(e.join||"round");let d=m&&"esriSLSNull"!==e.style&&Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBAArray"])(m)||0;"esriSLSNull"===e.style&&(d=0);const u=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(e.width),L=e.miterLimit;if(!s)return new p(e.materialKey,s,u,h,f,L,d,0,0,!1,c,!1,u,0,l,null);const{rect:y,width:_,height:j}=s,S=y.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],g=y.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],w=S+_,P=g+j,x=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(S,g),K=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(w,P);return new p(e.materialKey,s,u,h,f,L,d,x,K,!0,c,!1,u,0,l,null)}static fromPictureLineSymbol(e,t,i,r){return f.error("PictureLineSymbol support does not exist!"),null}}/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "Bcjy":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/factories/matcherUtils.js ***!
  \****************************************************************************************/
/*! exports provided: createMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMatcher", function() { return s; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/Matcher.js */ "YB6V");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const a=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri/views/2d/engine/webgl/mesh/factories/matcherUtils");async function s(e,s,c){switch(e.type){case"simple":return _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__["FeatureMatcher"].fromBasicRenderer(e,s,c);case"map":return _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__["MapMatcher"].fromUVRenderer(e,s,c);case"interval":return _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__["IntervalMatcher"].fromCBRenderer(e,s,c);case"dictionary":return _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__["DictionaryMatcher"].fromDictionaryRenderer(e,s,c);default:return a.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-mesh:invalid-renderer","Unable to handle unknown renderer type")),null}}


/***/ }),

/***/ "C/3w":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseFillTemplate.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../layers/graphics/featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums.js */ "yE7X");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _templateUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templateUtils.js */ "DiuL");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (l=>class extends l{constructor(...t){super(...t),this.forceLibtess=!1,this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].FILL}writeMeshWithGeometry(r,s,l,m,u,n){const p=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__["FillMaterialKey"].load(this._materialKey),d=s.indexVector,y=s.getVector("geometry"),c=y.vertexCount,f=d.length;let g=n?Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__["deltaDecodeGeometry"])(Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__["convertFromGeometry"])(n),2):l.readUnquantizedGeometry();if(!g)return;if(g=Object(_templateUtils_js__WEBPACK_IMPORTED_MODULE_4__["clipMarshall"])(g),!g)return;let x=g.coords;!this.forceLibtess&&Object(_templateUtils_js__WEBPACK_IMPORTED_MODULE_4__["triangulate"])(d,g,c)||(x=[],Object(_templateUtils_js__WEBPACK_IMPORTED_MODULE_4__["triangulateLibtess"])(x,d,g,c)),this._write(y,l,u,x,p);const b=y.vertexCount-c,j=d.length-f;r.writeDisplayRecord(this.geometryType,this._materialKey,c,b,f,j)}_write(t,e,s,a,i){for(let o=0;o<a.length;o+=2){const h=Object(_number_js__WEBPACK_IMPORTED_MODULE_1__["i1616to32"])(1*a[o],1*a[o+1]);t.data.push(h),t.data.push(s),i.dotDensity?t.data.writeF32(1/Math.abs(e.readGeometryArea())):(t.data.push(this.fillColor),t.data.push(this.tl),t.data.push(this.br),t.data.push(this.aux1),t.data.push(this.aux2),t.data.push(this.aux3))}}});


/***/ }),

/***/ "C8N4":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/bufcut.js ***!
  \************************************************************************/
/*! exports provided: bufcut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufcut", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e,r,i,u,o,f,p){g=0;const c=(u-i)*f,v=o&&o.length,s=v?(o[0]-i)*f:c;let d,h,a,w,z,M=n(r,i,u,0,s,f,!0);if(M&&M.next!==M.prev){if(v&&(M=function(e,x,r,i,u,o){const f=new Array;for(let t=0,u=i.length;t<u;t++){const y=n(e,x,r,i[t]*o,t<u-1?i[t+1]*o:r*o,o,!1);y===y.next&&(y.steiner=!0),f.push(l(y))}f.sort(Z);for(const e of f)y(e,u),u=t(u,u.next);return u}(r,i,u,o,M,f)),c>80*f){d=a=r[0+i*f],h=w=r[1+i*f];for(let e=f;e<s;e+=f){const n=r[e+i*f],t=r[e+1+i*f];d=Math.min(d,n),h=Math.min(h,t),a=Math.max(a,n),w=Math.max(w,t)}z=Math.max(a-d,w-h),z=0!==z?1/z:0}x(M,e,f,d,h,z,p,0)}}function n(e,n,t,x,r,i,l){let y;if(l===function(e,n,t,x,r,i){let u=0;for(let t=x,o=r-i;t<r;t+=i)u+=(e[o+n*i]-e[t+n*i])*(e[t+1+n*i]+e[o+1+n*i]),o=t;return u}(e,n,0,x,r,i)>0)for(let t=x;t<r;t+=i)y=u(t+n*i,e[t+n*i],e[t+1+n*i],y);else for(let t=r-i;t>=x;t-=i)y=u(t+n*i,e[t+n*i],e[t+1+n*i],y);return y&&h(y,y.next)&&(o(y),y=y.next),y}function t(e,n=e){if(!e)return e;let t,x=e;do{if(t=!1,x.steiner||!h(x,x.next)&&0!==p(x.prev,x,x.next))x=x.next;else{if(o(x),x=n=x.prev,x===x.next)break;t=!0}}while(t||x!==n);return n}function x(e,n,u,l,y,p,c,v){if(!e)return;!v&&p&&(e=f(e,l,y,p));let s=e;for(;e.prev!==e.next;){const f=e.prev,d=e.next;if(p?i(e,l,y,p):r(e))n.push(f.index/u+c),n.push(e.index/u+c),n.push(d.index/u+c),o(e),e=d.next,s=d.next;else if((e=d)===s){v?1===v?x(e=a(e,n,u,c),n,u,l,y,p,c,2):2===v&&w(e,n,u,l,y,p,c):x(t(e),n,u,l,y,p,c,1);break}}}function r(e){const n=e.prev,t=e,x=e.next;if(p(n,t,x)>=0)return!1;let r=e.next.next;const i=r;let u=0;for(;r!==e.prev&&(0===u||r!==i);){if(u++,v(n.x,n.y,t.x,t.y,x.x,x.y,r.x,r.y)&&p(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function i(e,n,t,x){const r=e.prev,i=e,u=e.next;if(p(r,i,u)>=0)return!1;const o=r.x<i.x?r.x<u.x?r.x:u.x:i.x<u.x?i.x:u.x,l=r.y<i.y?r.y<u.y?r.y:u.y:i.y<u.y?i.y:u.y,y=r.x>i.x?r.x>u.x?r.x:u.x:i.x>u.x?i.x:u.x,f=r.y>i.y?r.y>u.y?r.y:u.y:i.y>u.y?i.y:u.y,c=d(o,l,n,t,x),s=d(y,f,n,t,x);let h=e.prevZ,Z=e.nextZ;for(;h&&h.z>=c&&Z&&Z.z<=s;){if(h!==e.prev&&h!==e.next&&v(r.x,r.y,i.x,i.y,u.x,u.y,h.x,h.y)&&p(h.prev,h,h.next)>=0)return!1;if(h=h.prevZ,Z!==e.prev&&Z!==e.next&&v(r.x,r.y,i.x,i.y,u.x,u.y,Z.x,Z.y)&&p(Z.prev,Z,Z.next)>=0)return!1;Z=Z.nextZ}for(;h&&h.z>=c;){if(h!==e.prev&&h!==e.next&&v(r.x,r.y,i.x,i.y,u.x,u.y,h.x,h.y)&&p(h.prev,h,h.next)>=0)return!1;h=h.prevZ}for(;Z&&Z.z<=s;){if(Z!==e.prev&&Z!==e.next&&v(r.x,r.y,i.x,i.y,u.x,u.y,Z.x,Z.y)&&p(Z.prev,Z,Z.next)>=0)return!1;Z=Z.nextZ}return!0}function u(e,n,t,x){const r=m.create(e,n,t);return x?(r.next=x.next,r.prev=x,x.next.prev=r,x.next=r):(r.prev=r,r.next=r),r}function o(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function l(e){let n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function y(e,n){if(n=function(e,n){let t=n;const x=e.x,r=e.y;let i,u=-1/0;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const e=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(e<=x&&e>u){if(u=e,e===x){if(r===t.y)return t;if(r===t.next.y)return t.next}i=t.x<t.next.x?t:t.next}}t=t.next}while(t!==n);if(!i)return null;if(x===u)return i.prev;const o=i,l=i.x,y=i.y;let f,p=1/0;t=i.next;for(;t!==o;)x>=t.x&&t.x>=l&&x!==t.x&&v(r<y?x:u,r,l,y,r<y?u:x,r,t.x,t.y)&&(f=Math.abs(r-t.y)/(x-t.x),(f<p||f===p&&t.x>i.x)&&s(t,e)&&(i=t,p=f)),t=t.next;return i}(e,n)){const x=M(n,e);t(x,x.next)}}function f(e,n,t,x){for(let r;r!==e;r=r.next){if(r=r||e,null===r.z&&(r.z=d(r.x,r.y,n,t,x)),r.prev.next!==r||r.next.prev!==r)return r.prev.next=r,r.next.prev=r,f(e,n,t,x);r.prevZ=r.prev,r.nextZ=r.next}return e.prevZ.nextZ=null,e.prevZ=null,function(e){let n,t=1;for(;;){let x,r=e;e=null,n=null;let i=0;for(;r;){i++,x=r;let u=0;for(;u<t&&x;u++)x=x.nextZ;let o=t;for(;u>0||o>0&&x;){let t;0===u?(t=x,x=x.nextZ,o--):0!==o&&x?r.z<=x.z?(t=r,r=r.nextZ,u--):(t=x,x=x.nextZ,o--):(t=r,r=r.nextZ,u--),n?n.nextZ=t:e=t,t.prevZ=n,n=t}r=x}if(n.nextZ=null,t*=2,i<2)return e}}(e)}function p(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function c(e,n,t,x){return!!(h(e,n)&&h(t,x)||h(e,x)&&h(t,n))||p(e,n,t)>0!=p(e,n,x)>0&&p(t,x,e)>0!=p(t,x,n)>0}function v(e,n,t,x,r,i,u,o){return(r-u)*(n-o)-(e-u)*(i-o)>=0&&(e-u)*(x-o)-(t-u)*(n-o)>=0&&(t-u)*(i-o)-(r-u)*(x-o)>=0}function s(e,n){return p(e.prev,e,e.next)<0?p(e,n,e.next)>=0&&p(e,e.prev,n)>=0:p(e,n,e.prev)<0||p(e,e.next,n)<0}function d(e,n,t,x,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-x)*r)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function h(e,n){return e.x===n.x&&e.y===n.y}function Z(e,n){return e.x-n.x}function a(e,n,t,x){let r=e;do{const i=r.prev,u=r.next.next;!h(i,u)&&c(i,r,r.next,u)&&s(i,u)&&s(u,i)&&(n.push(i.index/t+x),n.push(r.index/t+x),n.push(u.index/t+x),o(r),o(r.next),r=e=u),r=r.next}while(r!==e);return r}function w(e,n,r,i,u,o,l){let y=e;do{let e=y.next.next;for(;e!==y.prev;){if(y.index!==e.index&&z(y,e)){let f=M(y,e);return y=t(y,y.next),f=t(f,f.next),x(y,n,r,i,u,o,l,0),void x(f,n,r,i,u,o,l,0)}e=e.next}y=y.next}while(y!==e)}function z(e,n){return e.next.index!==n.index&&e.prev.index!==n.index&&!function(e,n){let t=e;do{if(t.index!==e.index&&t.next.index!==e.index&&t.index!==n.index&&t.next.index!==n.index&&c(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}(e,n)&&s(e,n)&&s(n,e)&&function(e,n){let t=e,x=!1;const r=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&r<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(x=!x),t=t.next}while(t!==e);return x}(e,n)}function M(e,n){const t=m.create(e.index,e.x,e.y),x=m.create(n.index,n.x,n.y),r=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=r,r.prev=t,x.next=t,t.prev=x,i.next=x,x.prev=i,x}class m{constructor(){this.index=0,this.x=0,this.y=0,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}static create(e,n,t){const x=b[g++];return x.index=e,x.x=n,x.y=t,x.prev=null,x.next=null,x.z=null,x.prevZ=null,x.nextZ=null,x.steiner=!1,x}}const b=new Array;let g=0;for(let e=0;e<8096;e++)b.push(new m);


/***/ }),

/***/ "DiuL":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/templateUtils.js ***!
  \*****************************************************************************************/
/*! exports provided: area, clip, clipMarshall, triangleArea, triangulate, triangulateEarcut, triangulateLibtess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "area", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clip", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipMarshall", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangleArea", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangulate", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangulateEarcut", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangulateLibtess", function() { return d; });
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../layers/graphics/OptimizedGeometry.js */ "gVKr");
/* harmony import */ var _core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/libs/earcut/earcut.js */ "+yyC");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _TileClipper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../TileClipper.js */ "LaVW");
/* harmony import */ var _bufcut_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bufcut.js */ "C8N4");
/* harmony import */ var _Tesselator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Tesselator.js */ "6NBT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c=new _Tesselator_js__WEBPACK_IMPORTED_MODULE_5__["default"],l=new _TileClipper_js__WEBPACK_IMPORTED_MODULE_3__["TileClipper"](0,0,0,1,128);function f(o,t,e){let n=0;for(let r=1;r<e;r++){const e=o[2*(t+r-1)],s=o[2*(t+r-1)+1];n+=(o[2*(t+r)]-e)*(o[2*(t+r)+1]+s)}return n}function u(o,t,e,n,r){let s=0;for(let c=e;c<n;c+=3){const e=2*(o.getValue(c)-r),n=2*(o.getValue(c+1)-r),l=2*(o.getValue(c+2)-r);s+=Math.abs((t[e]-t[l])*(t[n+1]-t[e+1])-(t[e]-t[n])*(t[l+1]-t[e+1]))}return s}function i(o,t,e){const{coords:n,lengths:s,hasIndeterminateRingOrder:c}=t;if(c)return!1;const l=o.length;let i=0;for(let t=0;t<s.length;){let c=t,h=s[t],d=f(n,i,h);const g=[];for(;++c<s.length;){const o=s[c],t=f(n,i+h,o);if(!(t>0))break;d+=t,g.push(i+h),h+=o}const a=o.length;Object(_bufcut_js__WEBPACK_IMPORTED_MODULE_4__["bufcut"])(o,n,i,i+h,g,2,e);const m=u(o,n,a,o.length,e),p=Math.abs(d);if(Math.abs((m-p)/Math.max(1e-7,p))>1e-5)return o.seek(l),!1;t=c,i+=h}return!0}function h(o,e,n){const{coords:r,lengths:s,hasIndeterminateRingOrder:c}=e;if(c)return!1;let l=0;for(let c=0;c<s.length;){let u=c,i=s[c];const h=[];for(;++u<s.length;){const o=s[u];if(!(f(r,l+i,o)>0))break;h.push(l+i-l),i+=o}const d=l+i,g=e.coords.slice(2*l,2*d),a=Object(_core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__["earcut"])(g,h,2);for(const t of a)o.push(t+n+l);c=u,l+=i}return!0}function d(o,t,e,n){const r=[],{coords:s,lengths:l}=e;c.beginPolygon(o,r);let f=0;for(let o=0;o<l.length;o++){const t=e.lengths[o];c.beginContour();for(let o=0;o<t;o++){const t=[s[2*(f+o)],s[2*(f+o)+1],0];c.addVertex(t,t)}c.endContour(),f+=t}c.endPolygon();for(let o=0;o<r.length;o++)t.push(r[o]+n)}function g(o,t,e,n,r,s,c,l){const f=((o-r)*(s-l)-(t-l)*(r-c))/((o-e)*(s-l)-(t-n)*(r-c));if(f<0||f>1)return null;return{x:Math.round(o+f*(e-o)),y:Math.round(t+f*(n-t))}}function a(t){if(!function(o,t,e){let n=0;for(let r=0;r<o.lengths.length;r++){const s=o.lengths[r];for(let r=0;r<s;r++){const s=o.coords[2*(r+n)],c=o.coords[2*(r+n)+1];if(s<t||s>e||c<t||c>e)return!0}n+=s}return!1}(t,-128,_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TILE_SIZE"]+128))return t;l.reset(3);let n=0;for(let o=0;o<t.lengths.length;o++){const e=t.lengths[o];let r=t.coords[2*(0+n)],s=t.coords[2*(0+n)+1];l.moveTo(r,s);for(let o=1;o<e;o++)r=t.coords[2*(o+n)],s=t.coords[2*(o+n)+1],l.lineTo(r,s);l.close(),n+=e}const r=l.result(!1);if(!r)return null;const s=[],c=[];for(const o of r){let t=0;for(const e of o)c.push(e.x),c.push(e.y),t++;s.push(t)}return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_0__["default"](s,c)}function m(o,t,e=0){const n=-e,r=t+e;let s=0,c=0,l=0;for(let t=0;t<o.lengths.length;t++){const e=o.lengths[t],f=l+e;let u=0,i=null;for(;s!==f;){let t=o.coords[2*s],e=o.coords[2*s+++1],l=t<n||t>=r||e<n||e>=r;const h=l;for(;s!==f&&l===h;)l||(o.coords[2*c]=t,o.coords[2*c+++1]=e,u++),t=o.coords[2*s],e=o.coords[2*s+++1],l=t<n||t>=r||e<n||e>=r;if(s===f){l?i&&(o.coords[2*c]=i.x,o.coords[2*c+++1]=i.y,u++):(o.coords[2*c]=t,o.coords[2*c+++1]=e,u++);continue}const d=o.coords[2*(s-2)],a=o.coords[2*(s-2)+1],m=g(d,a,t,e,n,n,r,n)||g(d,a,t,e,r,n,r,r)||g(d,a,t,e,r,r,n,r)||g(d,a,t,e,n,n,n,r);m&&(o.coords[2*c]=m.x,o.coords[2*c+++1]=m.y,u++,i||(i=m)),l||(o.coords[2*c]=t,o.coords[2*c+++1]=e,u++)}o.lengths[t]=u,l+=e}}l.setExtent(_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TILE_SIZE"]);


/***/ }),

/***/ "Dw8i":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLTemplateStore.js ***!
  \********************************************************************************************/
/*! exports provided: WGLTemplateStore, isDynamicId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLTemplateStore", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDynamicId", function() { return C; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../symbols/support/defaults.js */ "psH3");
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/Result.js */ "GqaZ");
/* harmony import */ var _layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layers/features/schemaUtils.js */ "owVx");
/* harmony import */ var _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WGLTextTemplate.js */ "iegs");
/* harmony import */ var _WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WGLMarkerTemplate.js */ "qLV0");
/* harmony import */ var _WGLDynamicFillTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLDynamicFillTemplate.js */ "I6rf");
/* harmony import */ var _WGLDynamicLineTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLDynamicLineTemplate.js */ "ImOt");
/* harmony import */ var _WGLDynamicMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WGLDynamicMarkerTemplate.js */ "xF2a");
/* harmony import */ var _layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../layers/features/textUtils.js */ "MrbB");
/* harmony import */ var _WGLDynamicTextTemplate_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WGLDynamicTextTemplate.js */ "OetV");
/* harmony import */ var _WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WGLFillTemplate.js */ "n7P2");
/* harmony import */ var _WGLLineTemplate_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./WGLLineTemplate.js */ "9SkJ");
/* harmony import */ var _util_Lock_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../util/Lock.js */ "L/mq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const S=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"),k=new Array;function w(e,t){const r=e.length;return e.push(null),t.then((t=>e[r]=t)),e}function C(e){return!!(1&e)}class L{constructor(e,t){this._idCounter=1,this._templateIdCounter=1,this._idToTemplateGroup=new Map,this._symbolToTemplate=new Map,this._fetchQueue=[],this._idToResolver=new Map,this._cimTemplateCache=new Map,this._cimAnalyses=[],this._lock=new _util_Lock_js__WEBPACK_IMPORTED_MODULE_15__["default"],this._fetchResource=e,this._joinOnUTurn=t}get _markerError(){return this._errorTemplates.marker[0]}get _fillError(){return this._errorTemplates.fill[0]}get _lineError(){return this._errorTemplates.line[0]}get _textError(){return this._errorTemplates.line[0]}createTemplateGroup(e,t){this._initErrorTemplates();const r=e.hash;if(this._symbolToTemplate.has(r))return this._symbolToTemplate.get(r);const s=new Array;t&&this._createMeshTemplates(s,t,!0),this._createMeshTemplates(s,e,!1);const i=this._createGroupId("expanded-cim"===e.type);return this._idToTemplateGroup.set(i,s),this._symbolToTemplate.set(r,i),i}getTemplateGroup(e){return this._idToTemplateGroup.has(e)?this._idToTemplateGroup.get(e):k}getDynamicTemplateGroup(e){return this._idToTemplateGroup.has(e)?(C(e)||S.error("mapview-template-store",`Id ${e} does not refer to a dynamic template`),this._idToTemplateGroup.get(e)):k}getMosaicItem(e,t){const s=this._createTemplateId(),i=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["create"])((e=>this._idToResolver.set(s,e)));return this._fetchQueue.push({symbol:e,id:s,glyphIds:t}),i}finalize(e){return this._fetchQueue.length||this._lock.isHeld()?Object(_util_Lock_js__WEBPACK_IMPORTED_MODULE_15__["withLock"])(this._lock,this._fetchAllQueuedResources.bind(this),e):Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])()}_initErrorTemplates(){this._errorTemplates||(this._errorTemplates={fill:this._createMeshTemplates([],Object(_layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_5__["createSymbolSchema"])(_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_3__["errorPolygonSymbol2D"]),!1),marker:this._createMeshTemplates([],Object(_layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_5__["createSymbolSchema"])(_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_3__["errorPointSymbol2D"]),!1),line:this._createMeshTemplates([],Object(_layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_5__["createSymbolSchema"])(_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_3__["errorPolylineSymbol2D"]),!1)})}_fetchAllQueuedResources(e){if(!this._fetchQueue.length)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])();const r=this._fetchQueue,o=this._cimAnalyses;return this._fetchQueue=[],this._cimAnalyses=[],Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(o).then((()=>this._fetchResource(r,e).then((e=>{for(const{id:t,mosaicItem:r}of e){this._idToResolver.get(t)(r),this._idToResolver.delete(t)}})))).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(e)?this._fetchQueue=this._fetchQueue.concat(r):function(e){return"worker:port-closed"===e.name}(e)||S.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-template-store","Unable to fetch requested texture resources",e))}))}_createGroupId(e){return this._idCounter++<<1|(e?1:0)}_createTemplateId(){return this._templateIdCounter++}async _createSMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t,S)?_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromSimpleMarker(e,t):this._markerError}async _createPMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t,S)?_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromPictureMarker(e,t):this._markerError}async _createSFS(e,t){const{spriteMosaicItem:r}=await this.getMosaicItem(e);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(r,S)?_WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromSimpleFill(e,r,t):this._fillError}async _createPFS(e,t){const{spriteMosaicItem:r}=await this.getMosaicItem(e);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(r,S)?_WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromPictureFill(e,r,t):this._fillError}async _createSLS(e,t){const{spriteMosaicItem:r}=await this.getMosaicItem(e);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(r,S)?_WGLLineTemplate_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromSimpleLine(e,r,this._joinOnUTurn):this._lineError}async _createLMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t,S)?_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromLineSymbolMarker(e,t):this._markerError}async _createTS(e){const{glyphMosaicItems:t}=await this.getMosaicItem(e);return _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromText(e,t)}async _createCIMText(e){const{glyphMosaicItems:t}=await this.getMosaicItem(e.cim,Object(_layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_11__["codepoints"])(e.text));return e.cim.mosaicHash=e.materialHash,Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t,S)?_WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromCIMText(e,t):this._textError}async _createCIMFill(e){e.cim.mosaicHash=e.materialHash;const{spriteMosaicItem:t}=await this.getMosaicItem(e.cim);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t,S)?_WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromCIMFill(e,t):this._fillError}async _createCIMLine(e){e.cim.mosaicHash=e.materialHash;const{spriteMosaicItem:t}=await this.getMosaicItem(e.cim);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t,S)?_WGLLineTemplate_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromCIMLine(e,t,this._joinOnUTurn):this._lineError}async _createCIMMarker(e){e.cim.mosaicHash=e.materialHash;const{spriteMosaicItem:t}=await this.getMosaicItem(e.cim);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t,S)?_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromCIMMarker(e,t):this._markerError}async _createCIM(e){const t=e.templateHash;if(this._cimTemplateCache.has(t))return this._cimTemplateCache.get(t);let r;switch(e.type){case"marker":r=this._createCIMMarker(e);break;case"line":r=this._createCIMLine(e);break;case"fill":r=this._createCIMFill(e);break;case"text":r=this._createCIMText(e)}return r.then((e=>this._cimTemplateCache.set(t,e))),r}_createDynamicCIM(e){const t=e.templateHash;if(this._cimTemplateCache.has(t))return this._cimTemplateCache.get(t);let r;switch(e.type){case"marker":r=_WGLDynamicMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromCIMMarker(e);break;case"line":r=_WGLDynamicLineTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"].fromCIMLine(e);break;case"fill":r=_WGLDynamicFillTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"].fromCIMFill(e);break;case"text":r=_WGLDynamicTextTemplate_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromCIMText(e)}return this._cimTemplateCache.set(t,r),r}_createPrimitiveMeshTemplates(e,t,r){switch(t.type){case"esriSMS":return w(e,this._createSMS(t));case"esriPMS":return w(e,this._createPMS(t));case"esriSFS":return w(e,this._createSFS(t,r));case"line-marker":return w(e,this._createLMS(t));case"esriPFS":return w(e,this._createPFS(t,r));case"esriSLS":return w(e,this._createSLS(t,!1));case"esriTS":return w(e,this._createTS(t));default:return S.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"),e}}_createMeshTemplates(e,t,r){if(-1!==t.type.indexOf("3d"))return S.error("3D symbols are not supported with MapView"),e;if("expanded-cim"===t.type){for(const r of t.layers)"function"==typeof r.materialHash?e.push(this._createDynamicCIM(r)):w(e,this._createCIM(r));return e}if("composite-symbol"===t.type){for(const s of t.layers)this._createPrimitiveMeshTemplates(e,s,r);return e}return"cim"===t.type||"label"===t.type||"web-style"===t.type?e:this._createPrimitiveMeshTemplates(e,t,r)}}


/***/ }),

/***/ "GqaZ":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Result.js ***!
  \************************************************************************/
/*! exports provided: ok */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ok", function() { return e; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e,n){if(e&&"name"in e){const o=e;return n&&n.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](o.name,o.message,o.details)),!1}return!0}


/***/ }),

/***/ "I6rf":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicFillTemplate.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../GeometryUtils.js */ "HQFP");
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/Result.js */ "GqaZ");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util.js */ "aixI");
/* harmony import */ var _WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLBaseFillTemplate.js */ "C/3w");
/* harmony import */ var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WGLDynamicMeshTemplate.js */ "ej3m");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class n extends(Object(_WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_10__["default"])){constructor(t){if(super(t),Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.color)){const e=(e,i,s)=>{const r=t.color(e,i,s);return r&&Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBA"])(r)||0};this._dynamicPropertyMap.set("_fillColor",e)}else{const e=t.color;this.fillColor=e&&Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBA"])(e)||0}let i=0;Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.height)||(i=t.height||0);this._dynamicPropertyMap.set("_height",((e,s,r)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.height)?t.height(e,s,r):i));let s=0;Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.offsetX)||(s=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.offsetX||0)+128,s>255&&(s=255));this._dynamicPropertyMap.set("_offsetX",((i,r,o)=>{if(Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.offsetX)){let s=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.offsetX(i,r,o))+128;return s>255&&(s=255),s}return s}));let r=1;Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.scaleX)||(r=t.scaleX||1);this._dynamicPropertyMap.set("_scaleX",((e,i,s)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.scaleX)?t.scaleX(e,i,s):r));let f=0;Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.offsetY)||(f=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(-t.offsetY||0)+128,f>255&&(f=255));this._dynamicPropertyMap.set("_offsetY",((i,s,r)=>{if(Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.offsetY)){let o=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(-t.offsetY(i,s,r))+128;return o>255&&(o=255),o}return f}));let c=0;Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.angle)||(c=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__["radToByte"])(t.angle)||0);this._dynamicPropertyMap.set("_angle",((e,i,s)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.angle)?Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__["radToByte"])(t.angle(e,i,s)):c)),this.effects=t.effects,this._cimFillLayer=t,this._fillMaterialKey=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__["FillMaterialKey"].load(t.materialKey)}static fromCIMFill(t){return new n(t)}bindFeature(o,a,l){const h=o.readLegacyFeature();this._dynamicPropertyMap.forEach(((t,e)=>{this[e]=t(h,a,l)}));const c=this._fillMaterialKey,m=this._materialCache,n=this._cimFillLayer;this.aux3=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0,0,this._angle,n.colorLocked?1:0);const p=(0,n.materialHash)(h,a,l),y=m.get(p);let _=null;if(y&&Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_7__["ok"])(y.spriteMosaicItem)&&(_=y.spriteMosaicItem),_){const{rect:o,width:a,height:l}=_,f=o.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],h=o.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],m=f+a,n=h+l;let p=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(this._height));p>255?p=255:p<=0&&(p=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(n-h));let y=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(this._height/l*a||0));y>255?y=255:y<=0&&(y=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(m-f));const u=this._scaleX,d=1;this.tl=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(f,h),this.br=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(m,n),this.aux1=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(y,p,this._offsetX,this._offsetY),this.aux2=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(128*u,128*d),c.sdf=_.sdf,c.pattern=!0,c.textureBinding=_.textureBinding}else this.tl=0,this.br=0,this.aux1=0,this.aux2=0,c.sdf=!1,c.pattern=!1,c.textureBinding=0;this._materialKey=c.data}}/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ }),

/***/ "ImOt":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicLineTemplate.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/Result.js */ "GqaZ");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util.js */ "aixI");
/* harmony import */ var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WGLDynamicMeshTemplate.js */ "ej3m");
/* harmony import */ var _WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLBaseLineTemplate.js */ "bzZf");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class m extends(Object(_WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"])){constructor(i){super(i),this._cimLineLayer=i;let e=0;Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.width)||(e=.5*Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(i.width));if(this._dynamicPropertyMap.set("_halfWidth",((s,r,o)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.width)?.5*Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(i.width(s,r,o)):e)),Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.cap)?this._dynamicPropertyMap.set("_capType",i.cap):this._capType=i.cap,Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.join)?this._dynamicPropertyMap.set("_joinType",i.join):this._joinType=i.join,Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.color)){const t=(t,e,s)=>{const o=i.color(t,e,s);return o&&Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBA"])(o)||0};this._dynamicPropertyMap.set("_fillColor",t)}else{const t=i.color;this._fillColor=t&&Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBA"])(t)||0}if(Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.miterLimit)){const t=(t,e,s)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["getLimitCosine"])(i.miterLimit(t,e,s));this._dynamicPropertyMap.set("_miterLimitCosine",t)}else this._miterLimitCosine=Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["getLimitCosine"])(i.miterLimit);this._scaleFactor=i.scaleFactor||1,this._isDashed=i.isDashed,this.effects=i.effects,this.tessellationProperties._bitset=i.colorLocked?1:0,this._materialKey=i.materialKey,this._initializeTessellator(!0)}static fromCIMLine(t){return new m(t)}bindFeature(t,r,a){const l=t.readLegacyFeature();this._dynamicPropertyMap.forEach(((t,i)=>{this[i]=t(l,r,a)})),this._halfWidth*=this._scaleFactor;const h=this._materialCache,n=(0,this._cimLineLayer.materialHash)(l,r,a),m=h.get(n);let c=null;if(m&&Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_5__["ok"])(m.spriteMosaicItem)&&(c=m.spriteMosaicItem),c){this._hasPattern=!0;const{rect:t,width:s,height:r}=c,o=t.x+_definitions_js__WEBPACK_IMPORTED_MODULE_1__["SPRITE_PADDING"],a=t.y+_definitions_js__WEBPACK_IMPORTED_MODULE_1__["SPRITE_PADDING"],l=o+s,h=a+r;this.tessellationProperties._tl=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(o,a),this.tessellationProperties._br=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(l,h)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0;this.tessellationProperties._fillColor=this._fillColor,this.tessellationProperties._halfWidth=this._halfWidth,this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth;const p=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__["LineMaterialKey"].load(this._materialKey);c&&(p.sdf=c.sdf,p.pattern=!0,p.textureBinding=c.textureBinding),this._materialKey=p.data}}/* harmony default export */ __webpack_exports__["default"] = (m);


/***/ }),

/***/ "J3nV":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/factories/WGLMeshFactory.js ***!
  \******************************************************************************************/
/*! exports provided: WGLMeshFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLMeshFactory", function() { return m; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enums.js */ "yE7X");
/* harmony import */ var _MeshData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MeshData.js */ "acOm");
/* harmony import */ var _VertexVector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../VertexVector.js */ "/Hru");
/* harmony import */ var _templates_WGLLabelTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../templates/WGLLabelTemplate.js */ "phaq");
/* harmony import */ var _templates_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../templates/WGLMarkerTemplate.js */ "qLV0");
/* harmony import */ var _templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../templates/WGLTemplateStore.js */ "Dw8i");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class m{constructor(e,t,r){this._isDD=!1,this._geometryType=e,this._idField=t,this._templateStore=r}update(t,r){this._isDD="simple"===t.mesh.matcher.type&&t.mesh.matcher.isDotDensity,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t.mesh.labels)&&this._setLabelTemplates(t.mesh.labels,r)}_setLabelTemplates(e,t){this._labelTemplates=e.map((e=>_templates_WGLLabelTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromLabelClass(e,t)))}get templates(){return this._templateStore}createMeshData(e){const t=new Array(5),l=this._labelTemplates&&this._labelTemplates.length>0,n="esriGeometryPolyline"===this._geometryType?_definitions_js__WEBPACK_IMPORTED_MODULE_3__["HEURISTIC_GLYPHS_PER_LINE"]:_definitions_js__WEBPACK_IMPORTED_MODULE_3__["HEURISTIC_GLYPHS_PER_FEATURE"];return t[_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].MARKER]=new _VertexVector_js__WEBPACK_IMPORTED_MODULE_6__["VertexVectors"](_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].MARKER,4*e),t[_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].FILL]=new _VertexVector_js__WEBPACK_IMPORTED_MODULE_6__["VertexVectors"](_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].FILL,e,this._isDD),t[_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].LINE]=new _VertexVector_js__WEBPACK_IMPORTED_MODULE_6__["VertexVectors"](_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].LINE,e),t[_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].TEXT]=new _VertexVector_js__WEBPACK_IMPORTED_MODULE_6__["VertexVectors"](_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].TEXT,4*e),t[_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].LABEL]=new _VertexVector_js__WEBPACK_IMPORTED_MODULE_6__["VertexVectors"](_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].LABEL,l?4*n:0),new _MeshData_js__WEBPACK_IMPORTED_MODULE_5__["MeshData"](t,{features:e,records:e,metrics:0})}async analyze(e,r,s,i,o){if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAborted"])(o))return;let a;"dictionary"===r.type&&(a=await r.analyze(this._idField,e.copy(),s,i,o));let l=0;for(;e.next();){let t;if(t=a?a[l++]:r.match(this._idField,e,this._geometryType,s,i),e.setGroupId(t),Object(_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_9__["isDynamicId"])(t)){const r=this._templateStore.getDynamicTemplateGroup(t);for(const t of r)t&&t.analyze&&t.analyze(this._templateStore,e,s,i)}}return this._templateStore.finalize(o)}async analyzeGraphics(e,r,s,i,o){if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAborted"])(o))return;const a=e.getCursor();for(r&&await r.analyze(this._idField,a.copy(),s,i,o);a.next();){let e=a.getGroupId();if(null!=e&&-1!==e||(e=r.match(this._idField,a,a.geometryType,s,i),a.setGroupId(e)),Object(_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_9__["isDynamicId"])(e)){const t=this._templateStore.getDynamicTemplateGroup(e);for(const e of t)e&&e.analyze&&e.analyze(this._templateStore,a,s,i)}a.setGroupId(e)}return this._templateStore.finalize(o)}writeGraphic(e,t){const r=t.getGroupId(),s=t.getDisplayId(),i=this._templateStore.getTemplateGroup(r),o=t.geometryType;if(null!=s){if(Object(_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_9__["isDynamicId"])(r))for(const e of i)e.bindFeature(t,null,null);if(i){e.writeDisplayObject(s,t.readGraphic().insertAfter);for(const r of i){if(!r)continue;const i=e.get(r.geometryType);r.writeMesh(e,i,t,o,s)}}}}writeCursor(t,r,s,i,o,a){const l=r.getGroupId(),n=r.getDisplayId(),m=this._templateStore.getTemplateGroup(l);if(null==n)return;if(!m)return;if(t.writeDisplayObject(n,0),Object(_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_9__["isDynamicId"])(l))for(const e of m)e.bindFeature(r,s,i);for(const e of m){const s=t.get(e.geometryType);!e.needsPixelBuffer&&r.hasFilter()||e.writeMesh(t,s,r,this._geometryType,n)}const f=t.hasDisplayRecords();if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a)&&f){const e=a&&this._findLabelRef(m);this._writeLabels(t,r,n,a,e,o)}t.endDisplayObject()}_findLabelRef(e){for(const t of e)if(t instanceof _templates_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"])return t;return null}_writeLabels(t,r,s,i,o,a){for(const l of i)if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(l)&&l){const{glyphs:e,rtl:i,index:n}=l,p=this._labelTemplates[n],m=t.get(p.geometryType);p.bindReferenceTemplate(o),p.bindTextInfo(e,i),p.writeMesh(t,m,r,this._geometryType,s,a)}}}


/***/ }),

/***/ "L/mq":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Lock.js ***!
  \**********************************************************************/
/*! exports provided: default, withLock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLock", function() { return s; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function s(e,r,s){return e.acquire().then((()=>r(s))).then((()=>e.release())).catch((r=>{throw e.release(),r}))}/* harmony default export */ __webpack_exports__["default"] = (class{constructor(){this._resolver=null}isHeld(){return!!this._resolver}acquire(){return this._resolver?this._resolver.promise.then((()=>this.acquire())):(this._resolver=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["createResolver"])(),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])())}release(){const e=this._resolver;this._resolver=null,e.resolve()}});


/***/ }),

/***/ "MrbB":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/textUtils.js ***!
  \*************************************************************************/
/*! exports provided: codepoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codepoints", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t){const e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}


/***/ }),

/***/ "OetV":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicTextTemplate.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../alignmentUtils.js */ "Mt1D");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util.js */ "aixI");
/* harmony import */ var _WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WGLBaseTextTemplate.js */ "RNFe");
/* harmony import */ var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WGLDynamicMeshTemplate.js */ "ej3m");
/* harmony import */ var _layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../layers/features/textUtils.js */ "MrbB");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class h extends(Object(_WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_6__["default"])){constructor(e){super(e),this._horizontalAlignment="center",this._verticalAlignment="middle",this._textToGlyphs=new Map;const i=e.scaleFactor||1;if(this._cimTextLayer=e,Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.color)){const t=(t,i,s)=>Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["premultiplyAlphaRGBA"])(e.color(t,i,s));this._dynamicPropertyMap.set("_color",t)}else this._color=Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["premultiplyAlphaRGBA"])(e.color);if(Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.color)){const t=(t,i,s)=>Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["premultiplyAlphaRGBA"])(e.outlineColor(t,i,s));this._dynamicPropertyMap.set("_haloColor",t)}else this._haloColor=Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["premultiplyAlphaRGBA"])(e.outlineColor);let r;Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.size)||(r=Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.size*e.sizeRatio)),127));if(this._dynamicPropertyMap.set("_size",((i,s,o)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.size)?Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.size(i,s,o)*e.sizeRatio)),127):r)),Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.outlineSize)){const i=(i,s,o)=>Math.min(Math.floor(5*Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.outlineSize(i,s,o)*e.sizeRatio)),127);this._dynamicPropertyMap.set("_haloSize",i)}else this._haloSize=Math.min(Math.floor(5*Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.outlineSize*e.sizeRatio)),127);let n;Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.offsetX)||(n=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.offsetX*e.sizeRatio)));let l;this._dynamicPropertyMap.set("_xOffset",((i,s,o)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.offsetX)?Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.offsetX(i,s,o)*e.sizeRatio)):n)),Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.offsetY)||(l=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.offsetY*e.sizeRatio)));this._dynamicPropertyMap.set("_yOffset",((i,s,o)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.offsetY)?Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.offsetY(i,s,o)*e.sizeRatio)):l)),Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.angle)?this._dynamicPropertyMap.set("_angle",e.angle):this._angle=e.angle,Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.horizontalAlignment)?this._dynamicPropertyMap.set("_horizontalAlignment",e.horizontalAlignment):this._horizontalAlignment=e.horizontalAlignment,Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.verticalAlignment)?this._dynamicPropertyMap.set("_verticalAlignment",e.verticalAlignment):this._verticalAlignment=e.verticalAlignment,this._scaleFactor=i,Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.text)?this._dynamicPropertyMap.set("_text",e.text):this._text=e.text;const h=Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.referenceSize*e.sizeRatio)),127);this._referenceSize=Math.round(Math.sqrt(256*h)),this._materialKey=e.materialKey;const c=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__["TextMaterialKey"].load(this._materialKey);c.sdf=!0,this._bitset=(1===e.alignment?1:0)|(e.colorLocked?1:0)<<1,this._materialKey=c.data,this._decoration="none",this._lineHeight=1,this._lineWidth=512,this._textPlacement=e.markerPlacement,this.effects=e.effects,this._isCIM=!0}static fromCIMText(t){return new h(t)}async analyze(t,e,i,s){const o=e.readLegacyFeature(),a=function(t,e,i,s){return"string"==typeof t.text?t.text:"function"==typeof t.text?t.text(e,i,s):""}(this._cimTextLayer,o,i,s),r=await t.getMosaicItem(this._cimTextLayer.cim,Object(_layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_7__["codepoints"])(a));return this._textToGlyphs.set(a,r.glyphMosaicItems),r}bindFeature(t,s,o){const a=t.readLegacyFeature();if(this._dynamicPropertyMap.forEach(((t,e)=>{this[e]=t(a,s,o)})),!this._text||0===this._text.length)return void(this._shapingInfo=null);this._size*=this._scaleFactor,this._scale=this._size/24,this._xOffset*=this._scaleFactor,this._yOffset*=this._scaleFactor,this._xAlignD=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getXAnchorDirection"])(this._horizontalAlignment||"center"),this._yAlignD=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getYAnchorDirection"])(this._verticalAlignment||"baseline");const r=this._textToGlyphs.get(this._text);this.bindTextInfo(r,!1)}}/* harmony default export */ __webpack_exports__["default"] = (h);


/***/ }),

/***/ "RNFe":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseTextTemplate.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../layers/graphics/featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _shapingUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shapingUtils.js */ "G0q+");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../enums.js */ "yE7X");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper.js */ "5Bb1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (f=>class extends f{constructor(...t){super(...t),this._isCIM=!1,this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].TEXT,this._aux=Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i8888to32"])(0,0,this._referenceSize,this._bitset)}bindTextInfo(e,i){e&&e.length?this._shapingInfo=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["andThen"])(e,(t=>Object(_shapingUtils_js__WEBPACK_IMPORTED_MODULE_5__["shapeGlyphs"])(t,i,{scale:this._scale,angle:this._angle,xOffset:this._xOffset,yOffset:this._yOffset,hAlign:this._xAlignD,vAlign:this._yAlignD,maxLineWidth:Math.max(32,Math.min(this._lineWidth,512)),lineHeight:_definitions_js__WEBPACK_IMPORTED_MODULE_3__["MAGIC_LABEL_LINE_HEIGHT"]*Math.max(.25,Math.min(this._lineHeight,4)),decoration:this._decoration,isCIM:this._isCIM}))):this._shapingInfo=null}writeMeshWithGeometry(t,i,s,r,h,a){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textPlacement)){const e=null!=a?a:s.readLegacyGeometry();return this._writePlacedText(t,i,h,e)}const l=a?Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__["deltaDecodeGeometry"])(Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__["convertFromGeometry"])(a),2):"esriGeometryPolygon"===r?s.readCentroid():s.readUnquantizedGeometry();if(l){if(l.isPoint){const[e,s]=l.coords;return this._writeGlyphs(t,i,h,{x:e,y:s})}l.forEachVertex(((e,s)=>this._writeGlyphs(t,i,h,{x:e,y:s})))}}_writePlacedText(t,e,o,n){const h=this._shapingInfo;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(h))return;const a=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_7__["MaterialKeyBase"].load(this._materialKey),m=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this._textPlacement),p=_symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_8__["CIMMarkerPlacementHelper"].getPlacement(n,m,Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(1));if(!p)return;let f,_,g=p.next();for(;null!=g;){_=Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i1616to32"])(Math.round(8*g.tx),Math.round(8*g.ty)),f=g.getAngle(),h.setRotation(f);for(const i of h.glyphs){a.textureBinding=i.textureBinding;const s=e.getVector("geometry").vertexCount,r=e.indexVector.length,n=this._writeIndices(e),h=this._writeVertex(e,o,_,i);t.writeDisplayRecord(this.geometryType,a.data,s,h,r,n)}h.setRotation(-f),g=p.next()}}_writeGlyphs(t,e,s,r){const o=this._shapingInfo;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(o))return;const n=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_7__["MaterialKeyBase"].load(this._materialKey),h=Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i1616to32"])(Math.round(8*r.x),Math.round(8*r.y));for(const i of o.glyphs){n.textureBinding=i.textureBinding;const r=e.getVector("geometry").vertexCount,o=e.indexVector.length,a=this._writeIndices(e),l=this._writeVertex(e,s,h,i);t.writeDisplayRecord(this.geometryType,n.data,r,l,o,a)}}_writeVertexCommon(t,e,i,s){const r=this._color,o=this._haloColor,n=Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i8888to32"])(0,0,this._referenceSize,this._bitset),h=Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i8888to32"])(0,0,this._size,this._haloSize);t.push(i),t.push(e),t.push(r),t.push(o),t.push(h),t.push(n)}_writeVertex(t,e,i,s){const r=t.get("geometry");return this._writeVertexCommon(r,e,i,s),r.push(s.offsets.upperLeft),r.push(s.texcoords.upperLeft),this._writeVertexCommon(r,e,i,s),r.push(s.offsets.upperRight),r.push(s.texcoords.upperRight),this._writeVertexCommon(r,e,i,s),r.push(s.offsets.lowerLeft),r.push(s.texcoords.lowerLeft),this._writeVertexCommon(r,e,i,s),r.push(s.offsets.lowerRight),r.push(s.texcoords.lowerRight),4}_writeIndices(t){const e=t.getVector("geometry").vertexCount,i=t.indexVector;return i.push(e+0),i.push(e+1),i.push(e+2),i.push(e+1),i.push(e+3),i.push(e+2),6}});


/***/ }),

/***/ "XbuD":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/CIMEffectHelper.js ***!
  \**************************************************************************/
/*! exports provided: CIMEffectHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIMEffectHelper", function() { return s; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CIMEffects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CIMEffects.js */ "/iQf");
/* harmony import */ var _CIMOperators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CIMOperators.js */ "k0QX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{static executeEffects(e,s){const c=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["cloneAndDecodeGeometry"])(s);let f=new _CIMEffects_js__WEBPACK_IMPORTED_MODULE_1__["SimpleGeometryCursor"](c);for(const t of e){const e=Object(_CIMOperators_js__WEBPACK_IMPORTED_MODULE_2__["getEffectOperator"])(t);e&&(f=e.execute(f,t,1.3333333333333333))}return f}static next(t){const r=t.next();return Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["deltaEncodeGeometry"])(r),r}}


/***/ }),

/***/ "YB6V":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Matcher.js ***!
  \*************************************************************************/
/*! exports provided: DictionaryMatcher, FeatureMatcher, IntervalMatcher, MapMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryMatcher", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureMatcher", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalMatcher", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMatcher", function() { return f; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../support/arcadeOnDemand.js */ "gvqN");
/* harmony import */ var _symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../symbols/cim/utils.js */ "NrhG");
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/LRUCache.js */ "wk6I");
/* harmony import */ var _arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../arcade/callExpressionWithFeature.js */ "ictz");
/* harmony import */ var _symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../symbols/cim/cimSymbolUtils.js */ "ZxoT");
/* harmony import */ var _layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layers/features/schemaUtils.js */ "owVx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri/views/2d/engine/webgl/util/Matcher");class c{constructor(){this.type="feature",this._defaultResult=null}static async fromBasicRenderer(e,t,i){const s=new c;if(e.symbol){const r=await Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(e.symbol,i),a=t.createTemplateGroup(r,null);s.setDefault(a)}return s}size(){return 1}getDefault(){return this._defaultResult}setDefault(e){this._defaultResult=e}match(e,t,i,s,r){return this.getDefault()}async analyze(e,t,i,s,r){return null}}class d extends c{constructor(e,t,i,s){super(),this.type="interval",this._intervals=[],this._isMaxInclusive=t,this._fieldIndex=s,this._field=e,this._normalizationInfo=i}static async fromCBRenderer(e,t,s){const{isMaxInclusive:r,normalizationField:a,normalizationTotal:n,normalizationType:o}=e,u=e.field,c=new d(u,r,{normalizationField:a,normalizationTotal:n,normalizationType:o},e.fieldIndex),f=await Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(e.backgroundFillSymbol,s);await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(e.intervals.map((async e=>{const i=await Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(e.symbol,s),r=await t.createTemplateGroup(i,f),a={min:e.min,max:e.max};c.add(a,r)})));const m=await Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(e.defaultSymbol,s);if(m){const e=await t.createTemplateGroup(m,f);c.setDefault(e)}return c}add(e,t){this._intervals.push({interval:e,result:t}),this._intervals.sort(((e,t)=>e.interval.min-t.interval.min))}size(){return super.size()+this._intervals.length}match(e,t,i,s,r){if(null==this._fieldIndex&&!this._field)return this.getDefault();const a=null!=this._fieldIndex?t.getComputedNumericAtIndex(this._fieldIndex):this._getValueFromField(t);if(!a&&(null==a||isNaN(a)))return this.getDefault();for(let e=0;e<this._intervals.length;e++){const{interval:t,result:i}=this._intervals[e],s=a>=t.min,r=this._isMaxInclusive?a<=t.max:a<t.max;if(s&&r)return i}return this.getDefault()}_needsNormalization(){const e=this._normalizationInfo;return e&&(e.normalizationField||e.normalizationTotal||e.normalizationType)}_getValueFromField(e){const t=e.readAttribute(this._field);if(!this._needsNormalization())return t;const{normalizationField:i,normalizationTotal:s,normalizationType:r}=this._normalizationInfo,a=!!i&&e.readAttribute(i);if(r)switch(r){case"esriNormalizeByField":return a?t/a:void 0;case"esriNormalizeByLog":return Math.log(t)*Math.LOG10E;case"esriNormalizeByPercentOfTotal":return t/s*100;default:return void u.error(`Found unknown normalization type: ${r}`)}else u.error("Normalization is required, but no type was set!")}}class f extends c{constructor(e,t,i){super(),this.type="map",this._nullResult=null,this._resultsMap=new Map,this._fieldsIndex=i,this._fields=e,this._seperator=t||""}static async fromUVRenderer(e,t,s){const r=e.fieldDelimiter,a=[e.field];e.field2&&a.push(e.field2),e.field3&&a.push(e.field3);const n=await Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(e.backgroundFillSymbol,s),o=new f(a,r,e.fieldIndex);await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(e.map.map((async e=>{const i=await Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(e.symbol,s),r=await t.createTemplateGroup(i,n);"<Null>"===e.value?o.setNullResult(r):o.add(e.value,r)})));const u=await Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(e.defaultSymbol,s);if(u){const e=await t.createTemplateGroup(u,n);o.setDefault(e)}return o}setNullResult(e){this._nullResult=e}add(e,t){this._resultsMap.set(e.toString(),t)}size(){return super.size()+this._resultsMap.size}match(e,t,i,s,r){if(null==this._fieldsIndex&&!this._fields)return this.getDefault();const a=null!=this._fieldsIndex?t.getComputedStringAtIndex(this._fieldsIndex):this._getValueFromFields(t);if(null!==this._nullResult&&(null==a||""===a||"<Null>"===a))return this._nullResult;if(!a&&null==a)return this.getDefault();const n=a.toString();return this._resultsMap.has(n)?this._resultsMap.get(n):this.getDefault()}_getValueFromFields(e){const t=[];for(const i of this._fields){const s=e.readAttribute(i);t.push(s)}return t.join(this._seperator)}}class m extends c{constructor(e,t,i,s){super(),this.type="dictionary",this._groupIdCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_5__["default"](100),this._renderer=e,this._fieldMap=e.fieldMap,this._symbolFields=e.getSymbolFields(),this._templates=t,this._info=i,this._scaleFn=s}static async fromDictionaryRenderer(e,t,i){const r=(await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../../../renderers/DictionaryRenderer.js */ "JhoD"))).default.fromJSON(e.renderer);await r.fetchResources({spatialReference:i.spatialReference,fields:i.fields});const a=await async function(e,t){const i=e||1;if("number"==typeof i)return(e,t,s)=>i;const r=await Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__["createRendererExpression"])(i,t.spatialReference,t.fields);return(e,i,s)=>Object(_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_6__["default"])(r,e,{$view:s},t.geometryType,i)||1}(r.scaleExpression,i);return new m(r,t,i,a)}async _analyzeFeature(e,i,s,a){const n=e.readLegacyFeature(),c=this._scaleFn(n,i,s),d=this._attributeHash(n)+"-"+c,f=this._groupIdCache.get(d);if(f)return f;const m={...s,spatialReference:this._info.spatialReference,abortOptions:a,fields:this._info.fields},h=await this._renderer.getSymbolAsync(n,m),p=Object(_layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_8__["createSymbolSchema"])(h,this._renderer),_=Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(p,this._info,a).then((e=>{if("expanded-cim"!==e.type)return u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-bad-type",`Found unexpected type ${e.type} in dictionary response`)),null;e.hash+="-"+c;for(const t of e.layers)t.scaleFactor=c,t.templateHash+="-"+c,"text"===t.type&&"string"==typeof t.text&&t.text.indexOf("[")>-1&&(t.text=Object(_symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_4__["createLabelOverrideFunction"])(this._fieldMap,t.text,t.cim.textCase));return this._templates.createTemplateGroup(e,null)}));return this._groupIdCache.put(d,_,1),_}async analyze(e,t,s,r,a){const n=t.getCursor(),l=[];for(;n.next();)l.push(this._analyzeFeature(n,s,r,a));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(l)}match(e,t,i,s,r){return null}_attributeHash(e){let t="";for(const i of this._symbolFields){const s=this._fieldMap[i];s&&(t+=e.attributes[s]+"-")}return t}}


/***/ }),

/***/ "ZxoT":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/cimSymbolUtils.js ***!
  \*****************************************************************/
/*! exports provided: expandSymbol, expandSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandSymbol", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandSymbols", function() { return m; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WebStyleSymbol.js */ "3cLA");
/* harmony import */ var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/symbols.js */ "nNR5");
/* harmony import */ var _cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cimAnalyzer.js */ "T8sT");
/* harmony import */ var _ExpandedCIM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExpandedCIM.js */ "wlZk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const m=async(e,t,a)=>Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(e.map((r=>n(r,t,a)))),o=async(r,e)=>new _ExpandedCIM_js__WEBPACK_IMPORTED_MODULE_4__["ExpandedCIM"](await Object(_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_3__["analyzeCIMSymbol"])(r.data,e),r.data,r.rendererKey),n=async(r,t,a)=>{if(!r)return null;if("cim"===r.type)return o(r,t);if("web-style"===r.type){const m=_WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(r),n={type:"cim",data:(await m.fetchCIMSymbol(a)).data,rendererKey:r.rendererKey};return o(n,t)}return r};


/***/ }),

/***/ "bzZf":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseLineTemplate.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums.js */ "yE7X");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _TileClipper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../TileClipper.js */ "LaVW");
/* harmony import */ var _TurboLine_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../TurboLine.js */ "Jimw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const u=_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]+16,c=new _TileClipper_js__WEBPACK_IMPORTED_MODULE_5__["TileClipper"](0,0,0,1,16);c.setExtent(_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]);const _=new Uint32Array(9),f=new Uint32Array(36),p=new Uint32Array(3),d=new Uint32Array(6),x=t=>e=>{const r=Math.ceil(1024*t._halfWidth),n=Math.ceil(1024*t._halfReferenceWidth);e.entry0=t.offset+t.vertexCount++;{const o=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(e.distance,r),l=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(31*e.prevNormal.x),Math.round(31*e.prevNormal.y),Math.round(0),Math.round(-31)),a=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(0,0,0,t._bitset);f[0]=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(8*e.currentVertex.x,8*e.currentVertex.y),f[1]=t.id,f[2]=t._fillColor,f[3]=l,f[4]=o,f[5]=t._tl,f[6]=t._br,f[7]=a,f[8]=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(n,0)}e.entry2=t.offset+t.vertexCount++;{const o=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(e.distance,r),l=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(31*-e.prevNormal.x),Math.round(31*-e.prevNormal.y),Math.round(0),Math.round(31)),a=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(0,0,0,t._bitset);f[9]=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(8*e.currentVertex.x,8*e.currentVertex.y),f[10]=t.id,f[11]=t._fillColor,f[12]=l,f[13]=o,f[14]=t._tl,f[15]=t._br,f[16]=a,f[17]=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(n,0)}e.exit0=t.offset+t.vertexCount++;{const o=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(e.distance,r),l=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(31*e.nextNormal.x),Math.round(31*e.nextNormal.y),Math.round(0),Math.round(-31)),a=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(0,0,0,t._bitset);f[18]=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(8*e.currentVertex.x,8*e.currentVertex.y),f[19]=t.id,f[20]=t._fillColor,f[21]=l,f[22]=o,f[23]=t._tl,f[24]=t._br,f[25]=a,f[26]=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(n,0)}e.exit2=t.offset+t.vertexCount++;{const o=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(e.distance,r),l=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(31*-e.nextNormal.x),Math.round(31*-e.nextNormal.y),Math.round(0),Math.round(31)),a=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(0,0,0,t._bitset);f[27]=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(8*e.currentVertex.x,8*e.currentVertex.y),f[28]=t.id,f[29]=t._fillColor,f[30]=l,f[31]=o,f[32]=t._tl,f[33]=t._br,f[34]=a,f[35]=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(n,0)}t.geometryBuf.writeRegion(f)},y=t=>e=>{d[0]=e.leftExit0,d[1]=e.rightEntry0,d[2]=e.leftExit2,d[3]=e.rightEntry0,d[4]=e.rightEntry2,d[5]=e.leftExit2,t.indexCount+=6,t.indexBuf.writeRegion(d)},m=t=>(e,r,n,o,l,a,h,u,c)=>{const f=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(c,Math.ceil(1024*t._halfWidth)),p=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(31*l),Math.round(31*a),Math.round(31*h),Math.round(31*u)),d=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(31*n,31*o,0,t._bitset);return _[0]=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(8*e,8*r),_[1]=t.id,_[2]=t._fillColor,_[3]=p,_[4]=f,_[5]=t._tl,_[6]=t._br,_[7]=d,_[8]=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(Math.ceil(1024*t._halfReferenceWidth),0),t.geometryBuf.writeRegion(_),t.offset+t.vertexCount++},C=t=>(e,i,s)=>{p[0]=e,p[1]=i,p[2]=s,t.indexCount+=3,t.indexBuf.writeRegion(p)};/* harmony default export */ __webpack_exports__["default"] = (e=>class extends e{constructor(...t){super(...t),this.tessellationProperties={_fillColor:null,_tl:null,_br:null,_halfWidth:null,_bitset:null,_halfReferenceWidth:null,id:null,indexBuf:null,indexCount:null,geometryBuf:null,vertexCount:null,offset:null},this._tessellationOptions={},this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLGeometryType"].LINE}writeMeshWithGeometry(t,e,i,s,r,n){const o=e.indexVector,l=e.get("geometry"),a=e.getVector("geometry").vertexCount,h=o.length,u=null!=n?n:i.readLegacyGeometry();if(!u)return;switch(s){case"esriGeometryPolyline":{const t=this._clipLines(u.paths);if(0===t.length)return;this._write(o,l,a,r,t);break}case"esriGeometryPolygon":{const t=this._clipLines(u.rings);if(0===t.length)return;this._write(o,l,a,r,t);break}}const c=this.tessellationProperties.vertexCount,_=this.tessellationProperties.indexCount;t.writeDisplayRecord(this.geometryType,this._materialKey,a,c,h,_)}_clipLines(t){const e=[];let i=!1,s=0;for(;s<t.length;){const r=[],n=t[s];c.reset(2);let[o,l]=n[0];if(i)c.moveTo(o,l);else{if(o<-16||o>u||l<-16||l>u){i=!0;continue}r.push({x:o,y:l})}let a=!1;const h=n.length;for(let t=1;t<h;++t)if(o+=n[t][0],l+=n[t][1],i)c.lineTo(o,l);else{if(o<-16||o>u||l<-16||l>u){a=!0;break}r.push({x:o,y:l})}if(a)i=!0;else{if(i){const t=c.resultWithStarts();if(t)for(const i of t)e.push(i)}else e.push({line:r,start:0});s++,i=!1}}return e}_write(t,e,i,s,r){this.tessellationProperties.id=s,this.tessellationProperties.indexBuf=t,this.tessellationProperties.indexCount=0,this.tessellationProperties.geometryBuf=e,this.tessellationProperties.vertexCount=0,this.tessellationProperties.offset=i;for(const t of r){const e=t.line;e.length<2||(this._tessellationOptions.initialDistance=t.start%65535,this._tessellationCallbacks instanceof _TurboLine_js__WEBPACK_IMPORTED_MODULE_6__["StandardTessellationCallbacks"]&&(this._tessellationCallbacks.capType=this._capType,this._tessellationCallbacks.joinType=this._joinType),Object(_TurboLine_js__WEBPACK_IMPORTED_MODULE_6__["tessellate"])(e,this._tessellationOptions,this._tessellationCallbacks),Object(_TurboLine_js__WEBPACK_IMPORTED_MODULE_6__["cleanup"])())}}_initializeTessellator(e){const i=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__["LineMaterialKey"].load(this._materialKey);if(this._tessellationOptions.trackDistance=this._isDashed||this._hasPattern,this._tessellationOptions.thin=!e&&this.tessellationProperties._halfWidth<_definitions_js__WEBPACK_IMPORTED_MODULE_1__["THIN_LINE_THRESHOLD"]/2&&!(i.vvSizeFieldStops||i.vvSizeMinMaxValue||i.vvSizeScaleStops||i.vvSizeUnitValue),this._tessellationOptions.wrapDistance=65535,this._tessellationOptions.outerBisectorAutoSplitThreshold=.2631578947368421,this._tessellationOptions.enableOuterBisectorSplit=this._isDashed||this._hasPattern,this._tessellationOptions.innerBisectorAutoSplitThreshold=.2631578947368421,this._tessellationOptions.enableInnerBisectorSplit=this._isDashed||this._hasPattern,this._tessellationOptions.thin)this._tessellationCallbacks={vertex:x(this.tessellationProperties),bridge:y(this.tessellationProperties)};else{const t=new _TurboLine_js__WEBPACK_IMPORTED_MODULE_6__["StandardTessellationCallbacks"](m(this.tessellationProperties),C(this.tessellationProperties));t.miterLimitCosine=this._miterLimitCosine,t.textured=this._isDashed||this._hasPattern,t.joinOnUTurn=this._joinOnUTurn,this._tessellationCallbacks=t}}});


/***/ }),

/***/ "ej3m":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicMeshTemplate.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _symbols_cim_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../symbols/cim/cimAnalyzer.js */ "T8sT");
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ "916D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate");/* harmony default export */ __webpack_exports__["default"] = (class extends _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(e){super(),this._ongoingMaterialRequestMap=new Map,this._materialCache=new Map,this._dynamicPropertyMap=new Map,this._cimLayer=e}analyze(e,s,o,n){const m=s.readLegacyFeature(),c=this._materialCache,l=this._cimLayer.materialHash;if(!l)return r.error("A Dynamic mesh template must have a material hash value or function!"),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["reject"])(null);const h="function"==typeof l?l(m,o,n):l;if(c.has(h)){const e=c.get(h);return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(e)}if(this._ongoingMaterialRequestMap.has(h))return this._ongoingMaterialRequestMap.get(h);const g=Object(_symbols_cim_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_2__["analyzeCIMResource"])(this._cimLayer.cim,this._cimLayer.materialOverrides);g.mosaicHash=h;const p=e.getMosaicItem(g).then((e=>(this._ongoingMaterialRequestMap.delete(h),c.set(h,e),e))).catch((e=>(this._ongoingMaterialRequestMap.delete(h),r.error(".analyze()",e.message),null)));return this._ongoingMaterialRequestMap.set(h,p),p}});


/***/ }),

/***/ "iegs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLTextTemplate.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../alignmentUtils.js */ "Mt1D");
/* harmony import */ var _util_BidiText_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/BidiText.js */ "t7mB");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WGLBaseTextTemplate.js */ "RNFe");
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ "916D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class m extends(Object(_WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_6__["default"])){constructor(n,r,a,h,f,m,c,_,d,u,x,z,g,M,p,y,j,T=!1){super(),this._xOffset=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(z),this._yOffset=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(g),this._decoration=d||"none",this._color=h,this._haloColor=f,this._haloSize=Math.min(Math.floor(5*Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["toPt"])(a))),127),this._size=Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(r)),127);const b=Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(r)),127);this._referenceSize=Math.round(Math.sqrt(256*b)),this._scale=this._size/24,this._angle=x,this._justify=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getJustification"])(m||"center"),this._xAlignD=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getXAnchorDirection"])(m||"center"),this._yAlignD=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getYAnchorDirection"])(c||"baseline"),this._baseline="baseline"===(c||"baseline"),this._bitset=(1===_?1:0)|(u?1:0)<<1;const A=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__["MaterialKeyBase"].load(n);A.sdf=!0,this._materialKey=A.data,this._lineWidth=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(M)||512,this._lineHeight=p||1,this._textPlacement=y,this.effects=j,this._isCIM=T}static fromText(t,e){const i=new m(t.materialKey,t.font.size,t.haloSize||0,t.color&&Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBAArray"])(t.color)||0,t.haloColor&&Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBAArray"])(t.haloColor)||0,t.horizontalAlignment,t.verticalAlignment,0,t.font.decoration,!1,t.angle||0,t.xoffset,t.yoffset,t.lineWidth,t.lineHeight,null,null,!1),[,o]=Object(_util_BidiText_js__WEBPACK_IMPORTED_MODULE_2__["bidiText"])(t.text);return i.bindTextInfo(e,o),i}static fromCIMText(t,e){const i=t.scaleFactor||1,o=new m(t.materialKey,t.size*t.sizeRatio*i,t.outlineSize*t.sizeRatio,Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBA"])(t.color),Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBA"])(t.outlineColor),t.horizontalAlignment,t.verticalAlignment,t.alignment,t.decoration,t.colorLocked,t.angle,t.offsetX*t.sizeRatio*i,t.offsetY*t.sizeRatio*i,512,1,t.markerPlacement,t.effects,!0),[,s]=Object(_util_BidiText_js__WEBPACK_IMPORTED_MODULE_2__["bidiText"])(t.text);return o.bindTextInfo(e,s),o}}/* harmony default export */ __webpack_exports__["default"] = (m);


/***/ }),

/***/ "n7P2":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLFillTemplate.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../GeometryUtils.js */ "HQFP");
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ "916D");
/* harmony import */ var _WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLBaseFillTemplate.js */ "C/3w");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class h extends(Object(_WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"])){constructor(t,e,r,l,i,o,n,c,f){super(),this.effects=f;const a=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__["FillMaterialKey"].load(t);e&&(a.sdf=e.sdf,a.pattern=!0,a.textureBinding=e.textureBinding),this.fillColor=r,this.tl=l,this.br=i,this.aux1=o,this.aux2=n,this.aux3=c,this._materialKey=a.data}static fromCIMFill(l,s){const n=l.color,a=n&&Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBA"])(n)||0,m=l.materialKey;if(!s){const t=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0,0,0,l.colorLocked?1:0);return new h(m,null,a,0,0,0,0,t,l.effects)}const{rect:u,width:d,height:p}=s,y=u.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],x=u.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],g=y+d,j=x+p;let w=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(l.height||0));w>255?w=255:w<=0&&(w=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(j-x));let K=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(l.height/p*d||0));K>255?K=255:K<=0&&(K=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(g-y));let F=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(l.offsetX||0)+128;F>255&&(F=255);let L=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(-l.offsetY||0)+128;L>255&&(L=255);const B=l.scaleX||1,G=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(y,x),M=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(g,j),S=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(K,w,F,L),U=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(128*B,128),b=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0,0,Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__["degToByte"])(l.angle),l.colorLocked?1:0);return new h(m,s,a,G,M,S,U,b,l.effects)}static fromSimpleFill(e,l,s=!1){const{color:c}=e,f=c&&"esriSFSNull"!==e.style&&Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBAArray"])(c)||0,a=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0,0,0,s?255:0),m=e.materialKey;if(!l)return new h(m,null,f,0,0,0,0,a,null);const{rect:u,width:d,height:p}=l,y=u.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],x=u.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],g=y+d,j=x+p,w=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(y,x),K=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(g,j),F=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(g-y),Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(j-x),0,0),L=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(128,128);return new h(m,l,f,w,K,F,L,a,null)}static fromPictureFill(s,n,c=!1){const f=_definitions_js__WEBPACK_IMPORTED_MODULE_2__["PICTURE_FILL_COLOR"],{rect:a,width:m,height:u}=n,d=a.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],p=a.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],y=d+m,x=p+u,g=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(d,p),j=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(y,x);let w=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(s.width));w>255&&(w=255);let K=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(s.height));K>255&&(K=255);let F=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(s.xoffset)+128;F>255&&(F=255);let L=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(-s.yoffset)+128;L>255&&(L=255);const B=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(w,K,F,L),G=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(128*s.xscale,128*s.yscale),M=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0,0,0,c?255:0),S=s.materialKey;return new h(S,n,f,g,j,B,G,M,null)}}/* harmony default export */ __webpack_exports__["default"] = (h);


/***/ }),

/***/ "phaq":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLLabelTemplate.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../alignmentUtils.js */ "Mt1D");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../enums.js */ "yE7X");
/* harmony import */ var _meshUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meshUtils.js */ "m3fN");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _collisions_Metric_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../collisions/Metric.js */ "NMeD");
/* harmony import */ var _segmentUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./segmentUtils.js */ "/kT+");
/* harmony import */ var _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./WGLTextTemplate.js */ "iegs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const M=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate");const L=function(e){const t=new Map;return i=>(t.has(i)||t.set(i,e(i)),t.get(i))}((e=>{let t=0;if(0===e)return 1/0;for(;!(e%2);)t++,e/=2;return t})),S=e=>Math.floor(127*e+127),P=e=>Math.floor(10*e),v=e=>Math.round(e*(254/360)),Z=(e,t)=>Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(Math.round(8*e),Math.round(8*t));class O extends _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_14__["default"]{constructor(e,t,i,o){super(e,i.font.size,i.haloSize||0,i.color&&Object(_color_js__WEBPACK_IMPORTED_MODULE_11__["premultiplyAlphaRGBAArray"])(i.color)||0,i.haloColor&&Object(_color_js__WEBPACK_IMPORTED_MODULE_11__["premultiplyAlphaRGBAArray"])(i.haloColor)||0,i.horizontalAlignment,i.verticalAlignment,Object(_meshUtils_js__WEBPACK_IMPORTED_MODULE_9__["isMapAligned"])(t.labelPlacement)?1:0,i.font.decoration,!1,i.angle||0,i.xoffset,i.yoffset,i.lineWidth,i.lineHeight,null,null),this._outLineLabelAngle=0,this._refPlacementPadding=0,this._refPlacementDirX=0,this._refPlacementDirY=0,this._refOffsetX=0,this._refOffsetY=0,this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].LABEL;const n=function(e,t){const i=!!e.minScale&&t.scaleToZoom(e.minScale)||0;return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["clamp"])(i,0,25.5)}(t,o),l=function(e,t){const i=!!e.maxScale&&t.scaleToZoom(e.maxScale)||255;return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["clamp"])(i,0,25.5)}(t,o),c=t.labelPlacement,[m,f]=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__["getAlignmentFromPlacement"])(c);this._xAlignD=m,this._yAlignD=f,this._minZoom=n,this._maxZoom=l,this._refPlacementPadding=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["pt2px"])(i.haloSize)+_definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXT_PLACEMENT_PADDING"];const d=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_10__["LabelMaterialKey"].load(e);d.sdf=!0,this._materialKey=d.data}static fromLabelClass(e,t){if("center-along"===e.labelPlacement){const t=e.symbol;t.xoffset=0,t.yoffset=0,t.angle=0,t.font.decoration="none"}return new O(e.materialKey,e,e.symbol,t)}get _shapedBox(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this._shapingInfo).bounds}bindReferenceTemplate(e){let i=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__["getXDirection"])(this._xAlignD),o=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__["getYDirection"])(this._yAlignD);if(this._refOffsetX=0,this._refOffsetY=0,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e))return void(this._refSymbolAndPlacementOffset=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(0,0,S(i),S(o)));if("circle"===e.boundsType&&(i||o)){const e=Math.sqrt(i*i+o*o);i/=e,o/=e}const s=Math.max(e.height,e.width),n=4*this._refPlacementPadding;this._refSymbolAndPlacementOffset=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(n,s,S(i),S(o)),this._referenceSize=s,this._refPlacementDirX=i,this._refPlacementDirY=o,this._refOffsetX=e.xOffset,this._refOffsetY=e.yOffset}writeMesh(e,i,s,n,r,a){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._shapingInfo))return;const h=new Array,l=this._shapingInfo,c="esriGeometryPolygon"===s.geometryType?s.readLegacyCentroid():s.readLegacyGeometry();if(c){switch(this.current={out:e,outVecs:i,outMetrics:h,inId:r,inShaping:l,zoomLevel:a},n){case"esriGeometryPolyline":this._placeLineLabels(c);break;case"esriGeometryPoint":case"esriGeometryPolygon":this._placePointLabels(c);break;default:((e,t="mapview-labeling")=>{M.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](t,e))})("mapview-labeling",`Geometry of type ${n} is not supported`)}e.writeMetrics(this.current.outMetrics)}}_isVisible(e,t){const i=P(this.current.zoomLevel);return P(e)<=i&&i<=P(t)}_placePointLabels(e){const{out:t,outVecs:i,outMetrics:o,inId:s}=this.current;this._writeGlyphs(t,i,s,e,o)}_placeLineLabels(e){const t=Object(_segmentUtils_js__WEBPACK_IMPORTED_MODULE_13__["smoothPaths"])(e.paths,this.current.inShaping.bounds.width),i=this._placeSubdivGlyphs.bind(this),o=(this._shapedBox.width+128)/4;for(const e of t)Object(_segmentUtils_js__WEBPACK_IMPORTED_MODULE_13__["pathDivide"])(e,o,i)}_placeSubdivGlyphs(e,t,i,o){const s=L(t),r=this._shapedBox.width/4,a=Math.min(i,o-i),h=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["log2"])(a/(4+r/2)),l=0===t?h:Math.min(s,h),c=Math.max(this._minZoom,this.current.zoomLevel+2-l),m=this.current.zoomLevel-c,f=this._shapedBox.width/2*Math.pow(2,m);this.current.inShaping.isMultiline?0===t&&this._placeStraight(e,c):this._placeCurved(e,c,f)}_placeStraight(e,t){const{out:i,outVecs:o,outMetrics:s,inId:n}=this.current;this._writeGlyphs(i,o,n,e,s,t)}_placeCurved(e,t,i){const o={from:this.current.out.currentDisplayRecordCount(),count:-1},s=new _collisions_Metric_js__WEBPACK_IMPORTED_MODULE_12__["default"](this.current.inId,o,e.x,e.y,t),n=e.clone(),r=e.angle*(180/Math.PI)%360,a=(e.angle*(180/Math.PI)+180)%360;this._outLineLabelAngle=v(r),this._placeFirst(n,s,t,1),this._placeBack(e,n,s,t,i,1),this._placeForward(e,n,s,t,i,1),this._outLineLabelAngle=v(a),this._placeFirst(n,s,t,0),this._placeBack(e,n,s,t,i,0),this._placeForward(e,n,s,t,i,0),s.range.count=this.current.out.currentDisplayRecordCount()-s.range.from,s.bounds&&this.current.outMetrics.push(s)}_placeBack(e,t,i,o,s,n){const r=e.clone();let a=e.backwardLength+0;for(;r.prev()&&!(a>=s);)this._placeOnSegment(r,t,i,a,o,-1,n),a+=r.length+0}_placeForward(e,t,i,o,s,n){const r=e.clone();let a=e.remainingLength+0;for(;r.next()&&!(a>=s);)this._placeOnSegment(r,t,i,a,o,1,n),a+=r.length+0}_placeFirst(e,t,i,o){const s=e,r=this.current.inShaping,a=r.glyphs,h=this.current.zoomLevel,{out:l,outVecs:c,inId:m}=this.current,f=Z(s.x,s.y);for(const s of a){const a=s.x>r.bounds.x?o:1-o,u=a*e.remainingLength+(1-a)*e.backwardLength,p=Math.abs(s.x+s.width/2-r.bounds.x),_=Math.max(0,h+Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["log2"])(p/(u+0))),d=Math.max(i,_);s.maxZoom=25,s.angle=e.angle+(1-o)*Math.PI,s.minZoom=d,this._writeGlyph(l,c,s,m,f),o&&this._isVisible(s.minZoom,s.maxZoom)&&t.add(s.bounds,0,0)}}_placeOnSegment(e,t,i,o,s,r,a){const h=this.current.inShaping.glyphs,{out:l,outVecs:c,inId:m}=this.current,f=this.current.inShaping,u=this.current.zoomLevel,p=e.dx/e.length,_=e.dy/e.length,d={x:e.x+o*-r*p,y:e.y+o*-r*_},g=Z(d.x,d.y);for(const p of h){const h=p.x>f.bounds.x?a:1-a;if(!(h&&1===r||!h&&-1===r))continue;const _=Math.abs(p.x+p.width/2-f.bounds.x),d=Math.max(0,u+Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["log2"])(_/o)-.1),y=Math.max(s,u+Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["log2"])(_/(o+e.length+0)));0!==d&&(p.angle=e.angle+(1-a)*Math.PI,p.minZoom=y,p.maxZoom=d,this._writeGlyph(l,c,p,m,g),a&&this._isVisible(p.minZoom,p.maxZoom)&&i.add(p.bounds,e.x-t.x,e.y-t.y))}}_writeGlyphs(e,i,o,s,n,r=this._minZoom){const a=this._shapingInfo;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a))return;if(s.x<0||s.x>=512||s.y<0||s.y>=512)return;const h=e.currentDisplayRecordCount(),l=Z(s.x+this._refOffsetX,s.y-this._refOffsetY),c=new _collisions_Metric_js__WEBPACK_IMPORTED_MODULE_12__["default"](o,{from:h,count:-1},s.x+this._refOffsetX,s.y-this._refOffsetY,r);for(const t of a.glyphs)t.minZoom=r,t.maxZoom=this._maxZoom,this._writeGlyph(e,i,t,o,l);c.range.count=e.currentDisplayRecordCount()-c.range.from,c.bounds=a.boundsT;const m=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_10__["LabelMaterialKey"].load(this._materialKey),f=this._refPlacementDirX,u=this._refPlacementDirY,p=m.vvSizeFieldStops||m.vvSizeMinMaxValue||m.vvSizeScaleStops||m.vvSizeUnitValue;c.setPlacementOffset(p,this._referenceSize,this._refPlacementPadding,f,u),n.push(c)}_writeGlyph(e,t,i,o,s){const n=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_10__["MaterialKeyBase"].load(this._materialKey);n.textureBinding=i.textureBinding;const r=t.indexVector.length,a=t.getVector("geometry").vertexCount,h=this._writeIndices(t),l=this._writeVertex(t,o,s,i);e.writeDisplayRecord(this.geometryType,n.data,a,l,r,h)}_writeVertexCommon(e,t,i,o){const s=this._color,n=this._haloColor,r=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(0,0,this._size,this._haloSize),a=Math.max(o.minZoom,this._minZoom),h=Math.min(o.maxZoom,this._maxZoom),l=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(P(a),P(h),this._outLineLabelAngle,0);e.push(i),e.push(t),e.push(s),e.push(n),e.push(r),e.push(this._refSymbolAndPlacementOffset),e.push(l)}}/* harmony default export */ __webpack_exports__["default"] = (O);


/***/ }),

/***/ "qLV0":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLMarkerTemplate.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/mat2df32.js */ "LGNZ");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ "916D");
/* harmony import */ var _WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLBaseMarkerTemplate.js */ "+TxJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class d extends(Object(_WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"])){constructor(t,e,o,l,c,m,f,d,u,M,p,y,g,x,k,_,b,w,S,j,P){super(),this.angle=l,this.height=f,this.width=m,this.xOffset=e*S,this.yOffset=o*S,this._markerPlacement=j,this.effects=P,this._anchorX=.5-(.5+_)*k.width/k.width,this._anchorY=.5-(.5+b)*k.height/k.height;const C=(1===x?1:0)|(p?1:0)<<1|(g?1:0)<<2|(y?1:0)<<3,L=k&&k.sdf,B=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__["MarkerMaterialKey"].load(t);B.sdf=L,B.pattern=!0,B.textureBinding=k.textureBinding,this._materialKey=B.data,this._fillColor=c,this._outlineColor=u,this._sizeOutlineWidth=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i8888to32"])(Math.round(Math.min(Math.sqrt(128*m),255)),Math.round(Math.min(Math.sqrt(128*f),255)),Math.round(Math.min(Math.sqrt(128*M),255)),Math.round(Math.min(Math.sqrt(128*d),255)));const K=k.rect.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],W=k.rect.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],q=K+k.width,T=W+k.height;this._texUpperLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(K,W),this._texUpperRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(q,W),this._texBottomLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(K,T),this._texBottomRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(q,T),m*=w,f*=w,m*=S,f*=S;const z=Math.round(Math.min(64*w,255));this._bitestAndDistRatio=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i8888to32"])(0,0,C,z),this._computedWidth=m,this._computedHeight=f;const A=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),R=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_3__["c"])();this._applyTransformation(R,A)}static fromCIMMarker(r,o){const i=o&&o.width||1,s=o&&o.height||1,a=r.size,n=i/s*r.scaleX,h=r.scaleSymbolsProportionally&&r.frameHeight?a/r.frameHeight:1,c=Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBA"])(r.color),m=Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBA"])(r.outlineColor),f=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(a),u=f*n,M=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(r.offsetX||0),p=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(r.offsetY||0),y=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(r.outlineWidth||0)*h,g=r.alignment||0,x=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(r.referenceSize);let k=r.rotation||0;r.rotateClockwise||(k=-k);let _=0,b=0;const w=r.anchorPoint;return w&&(r.isAbsoluteAnchorPoint?a&&(_=-w.x/(a*n),b=w.y/a):(_=w.x,b=w.y)),new d(r.materialKey,M,p,k,c,u,f,x,m,y,r.colorLocked,r.scaleSymbolsProportionally,!1,g,o,_,b,r.sizeRatio,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(r.scaleFactor,1),r.markerPlacement,r.effects)}static fromPictureMarker(t,r){const i=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.width)),s=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.height)),a=_definitions_js__WEBPACK_IMPORTED_MODULE_2__["PICTURE_FILL_COLOR"],n=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.xoffset||0)),h=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.yoffset||0));return new d(t.materialKey,n,h,t.angle,a,i,s,s,0,0,!1,!1,!1,0,r,0,0,1,1,null,null)}static fromSimpleMarker(t,r){const o=Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBAArray"])(t.color),i=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.size)),s=i,a=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.xoffset||0)),n=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.yoffset||0)),h=t.style,l=t.outline,m=0|(l&&l.color&&Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBAArray"])(l.color)),f=0|(l&&l.width&&Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(l.width))),u=new d(t.materialKey,a,n,t.angle,o,i,s,s,m,f,!1,!1,"esriSMSCross"===h||"esriSMSX"===h,0,r,0,0,126/64,1,null,null);return u.boundsType="esriSMSCircle"===h?"circle":"square",u}static fromLineSymbolMarker(t,r){const o=Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBAArray"])(t.color),i=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(6*t.lineWidth)),s=i,a="cross"===t.style||"x"===t.style;let n;switch(t.placement){case"begin-end":n="Both";break;case"begin":n="JustBegin";break;case"end":n="JustEnd";break;default:n="None"}const h={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:n,offsetAlongLine:0},l=new d(t.materialKey,0,0,0,o,i,s,s/6,o,a?Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.lineWidth)):0,!1,!1,a,1,r,0,0,126/64,1,h,null);return l.boundsType="circle"===t.style?"circle":"square",l}}/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "wlZk":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/ExpandedCIM.js ***!
  \**************************************************************/
/*! exports provided: ExpandedCIM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandedCIM", function() { return s; });
/* harmony import */ var _views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/2d/engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _views_2d_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/2d/engine/webgl/materialKey/MaterialKey.js */ "GMaR");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r={marker:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].MARKER,fill:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].FILL,line:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LINE,text:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].TEXT};class s{constructor(e,s,a){this.layers=e,this.data=s,this.hash=this._createHash(),this.rendererKey=a;for(const s of e){const e=r[s.type];s.materialKey=Object(_views_2d_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["createMaterialKey"])(e,this.rendererKey,!1,!1)}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}


/***/ }),

/***/ "xF2a":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicMarkerTemplate.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/mat2df32.js */ "LGNZ");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../util/Result.js */ "GqaZ");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util.js */ "aixI");
/* harmony import */ var _WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WGLBaseMarkerTemplate.js */ "+TxJ");
/* harmony import */ var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WGLDynamicMeshTemplate.js */ "ej3m");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const y=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),d=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),M=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate");class u extends(Object(_WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_13__["default"])){constructor(e){if(super(e),this._cimMarkerLayer=e,Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.color)){const t=(t,i,s)=>Object(_color_js__WEBPACK_IMPORTED_MODULE_9__["premultiplyAlphaRGBA"])(e.color(t,i,s));this._dynamicPropertyMap.set("_fillColor",t)}else this._fillColor=Object(_color_js__WEBPACK_IMPORTED_MODULE_9__["premultiplyAlphaRGBA"])(e.color);if(Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.outlineColor)){const t=(t,i,s)=>Object(_color_js__WEBPACK_IMPORTED_MODULE_9__["premultiplyAlphaRGBA"])(e.outlineColor(t,i,s));this._dynamicPropertyMap.set("_outlineColor",t)}else this._outlineColor=Object(_color_js__WEBPACK_IMPORTED_MODULE_9__["premultiplyAlphaRGBA"])(e.outlineColor);if(Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.size)){const t=(t,i,r)=>Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.size(t,i,r));this._dynamicPropertyMap.set("_size",t)}else this._size=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.size);if(Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.scaleX)?this._dynamicPropertyMap.set("_scaleX",e.scaleX):this._scaleX=e.scaleX,Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.offsetX)){const t=(t,i,r)=>Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetX(t,i,r));this._dynamicPropertyMap.set("xOffset",t)}else this.xOffset=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetX);if(Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.offsetY)){const t=(t,i,r)=>Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetY(t,i,r));this._dynamicPropertyMap.set("yOffset",t)}else this.yOffset=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetY);if(Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.outlineWidth)){const t=(t,i,r)=>Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.outlineWidth(t,i,r));this._dynamicPropertyMap.set("_outlineWidth",t)}else this._outlineWidth=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.outlineWidth);Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.rotation)?this._dynamicPropertyMap.set("_angle",e.rotation):this._angle=e.rotation,this._scaleFactor=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(e.scaleFactor,1),this._markerPlacement=e.markerPlacement,this.effects=e.effects,this._bitSet=(1===e.alignment?1:0)|(e.colorLocked?1:0)<<1|(e.scaleSymbolsProportionally?1:0)<<3,this._materialKey=e.materialKey}static fromCIMMarker(t){return new u(t)}bindFeature(t,e,o){const a=t.readLegacyFeature();this._dynamicPropertyMap.forEach(((t,i)=>{this[i]=t(a,e,o)}));const m=this._cimMarkerLayer.materialHash,f="function"==typeof m?m(a,e,o):m,_=this._materialCache.get(f);if(!_||!Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_10__["ok"])(_.spriteMosaicItem)||!_.spriteMosaicItem)return void M.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-cim","Encountered an error when binding feature"));const p=_.spriteMosaicItem,u=this._cimMarkerLayer.sizeRatio,g=p.width/p.height*this._scaleX,k=this._cimMarkerLayer.rotateClockwise?this._angle:-this._angle;let L=this._size,x=L*g;const P=this.xOffset,j=this.yOffset;this.xOffset*=this._scaleFactor,this.yOffset*=this._scaleFactor;const w=this._cimMarkerLayer.scaleSymbolsProportionally&&this._cimMarkerLayer.frameHeight?this._size/Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(this._cimMarkerLayer.frameHeight):1,z=this._outlineWidth*w,b=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(this._cimMarkerLayer.referenceSize);let O=0,W=0;const C=this._cimMarkerLayer.anchorPoint;C&&(this._cimMarkerLayer.isAbsoluteAnchorPoint?this._size&&(O=-C.x/(this._size*g),W=C.y/this._size):(O=C.x,W=C.y)),this._sizeOutlineWidth=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(Math.round(Math.min(Math.sqrt(128*x),255)),Math.round(Math.min(Math.sqrt(128*L),255)),Math.round(Math.min(Math.sqrt(128*z),255)),Math.round(Math.min(Math.sqrt(128*b),255))),this.angle=k;const X=Math.round(Math.min(64*u,255));this._bitestAndDistRatio=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(0,0,this._bitSet,X);const F=p.rect.x+_definitions_js__WEBPACK_IMPORTED_MODULE_4__["SPRITE_PADDING"],K=p.rect.y+_definitions_js__WEBPACK_IMPORTED_MODULE_4__["SPRITE_PADDING"],B=F+p.width,R=K+p.height;this._texUpperLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(F,K),this._texUpperRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(B,K),this._texBottomLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(F,R),this._texBottomRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(B,R);const S=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_8__["MarkerMaterialKey"].load(this._materialKey);S.sdf=p.sdf,S.pattern=!0,S.textureBinding=p.textureBinding,this._materialKey=S.data,this._anchorX=.5-(.5+O)*p.width/p.width,this._anchorY=.5-(.5+W)*p.height/p.height,x*=u,L*=u,x*=this._scaleFactor,L*=this._scaleFactor,x*=p.rect.width/p.width,L*=p.rect.height/p.height,this._computedWidth=x,this._computedHeight=L,this._applyTransformation(d,y),this.xOffset=P,this.yOffset=j}}/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ })

}]);
//# sourceMappingURL=default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~c4613f14.js.map