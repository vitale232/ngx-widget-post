(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~3d02fa00"],{

/***/ "1kEK":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryAdapters/json.js ***!
  \*********************************************************************/
/*! exports provided: jsonAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonAdapter", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t={convertToGEGeometry:function(t,s){if(null==s)return null;return t.convertJSONToGeometry(s)},exportPoint:function(t,i,n){const e=new s(t.getPointX(i),t.getPointY(i),n),o=t.hasZ(i),h=t.hasM(i);o&&(e.z=t.getPointZ(i));h&&(e.m=t.getPointM(i));return e},exportPolygon:function(t,s,n){return new i(t.exportPaths(s),n,t.hasZ(s),t.hasM(s))},exportPolyline:function(t,s,i){return new n(t.exportPaths(s),i,t.hasZ(s),t.hasM(s))},exportMultipoint:function(t,s,i){return new e(t.exportPoints(s),i,t.hasZ(s),t.hasM(s))},exportExtent:function(t,s,i){const n=t.hasZ(s),e=t.hasM(s),h=new o(t.getXMin(s),t.getYMin(s),t.getXMax(s),t.getYMax(s),i);if(n){const i=t.getZExtent(s);h.zmin=i.vmin,h.zmax=i.vmax}if(e){const i=t.getMExtent(s);h.mmin=i.vmin,h.mmax=i.vmax}return h}};class s{constructor(t,s,i){this.x=t,this.y=s,this.spatialReference=i,this.z=void 0,this.m=void 0}}class i{constructor(t,s,i,n){this.rings=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class n{constructor(t,s,i,n){this.paths=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class e{constructor(t,s,i,n){this.points=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class o{constructor(t,s,i,n,e){this.xmin=t,this.ymin=s,this.xmax=i,this.ymax=n,this.spatialReference=e,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}


/***/ }),

/***/ "2X7Z":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/centroid.js ***!
  \***************************************************************/
/*! exports provided: getCentroidOptimizedGeometry, lineCentroid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCentroidOptimizedGeometry", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineCentroid", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(n,t){return n?t?4:3:t?3:2}function t(t,I,o,u,l){if(!I||!I.lengths.length)return null;const N="upperLeft"===(null==l?void 0:l.originPosition)?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const s=t.coords,c=[],f=o?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:i,coords:T}=I,h=n(o,u);let g=0;for(const n of i){const t=e(f,T,g,n,o,u,N);t&&c.push(t),g+=n*h}if(c.sort(((n,t)=>{let e=N*n[2]-N*t[2];return 0===e&&o&&(e=n[4]-t[4]),e})),c.length){let n=6*c[0][2];s[0]=c[0][0]/n,s[1]=c[0][1]/n,o&&(n=6*c[0][4],s[2]=0!==n?c[0][3]/n:0),(s[0]<f[0]||s[0]>f[1]||s[1]<f[2]||s[1]>f[3]||o&&(s[2]<f[4]||s[2]>f[5]))&&(s.length=0)}if(!s.length){const n=I.lengths[0]?r(T,0,i[0],o,u):null;if(!n)return null;s[0]=n[0],s[1]=n[1],o&&n.length>2&&(s[2]=n[2])}return t}function e(t,e,r,I,o,u,l=1){const N=n(o,u);let s=r,c=r+N,f=0,i=0,T=0,h=0,g=0;for(let n=0,r=I-1;n<r;n++,s+=N,c+=N){const n=e[s],r=e[s+1],I=e[s+2],u=e[c],l=e[c+1],N=e[c+2];let E=n*l-u*r;h+=E,f+=(n+u)*E,i+=(r+l)*E,o&&(E=n*N-u*I,T+=(I+N)*E,g+=E),n<t[0]&&(t[0]=n),n>t[1]&&(t[1]=n),r<t[2]&&(t[2]=r),r>t[3]&&(t[3]=r),o&&(I<t[4]&&(t[4]=I),I>t[5]&&(t[5]=I))}if(h*l>0&&(h*=-1),g*l>0&&(g*=-1),!h)return null;const E=[f,i,.5*h];return o&&(E[3]=T,E[4]=.5*g),E}function r(t,e,r,N,s){const c=n(N,s);let f=e,i=e+c,T=0,h=0,g=0,E=0;for(let n=0,e=r-1;n<e;n++,f+=c,i+=c){const n=t[f],e=t[f+1],r=t[f+2],s=t[i],c=t[i+1],b=t[i+2],m=N?o(n,e,r,s,c,b):I(n,e,s,c);if(m)if(T+=m,N){const t=l(n,e,r,s,c,b);h+=m*t[0],g+=m*t[1],E+=m*t[2]}else{const t=u(n,e,s,c);h+=m*t[0],g+=m*t[1]}}return T>0?N?[h/T,g/T,E/T]:[h/T,g/T]:r>0?N?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function I(n,t,e,r){const I=e-n,o=r-t;return Math.sqrt(I*I+o*o)}function o(n,t,e,r,I,o){const u=r-n,l=I-t,N=o-e;return Math.sqrt(u*u+l*l+N*N)}function u(n,t,e,r){return[n+.5*(e-n),t+.5*(r-t)]}function l(n,t,e,r,I,o){return[n+.5*(r-n),t+.5*(I-t),e+.5*(o-e)]}


/***/ }),

/***/ "AIxD":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/quantizationUtils.js ***!
  \*************************************************************************/
/*! exports provided: equals, getQuantizedBoundsCoordsArray, getQuantizedBoundsCoordsArrayArray, getQuantizedBoundsPaths, getQuantizedBoundsPoints, getQuantizedBoundsRings, quantizeBounds, quantizeExtent, quantizeGeometry, quantizeMultipoint, quantizePaths, quantizePoint, quantizePoints, quantizePolygon, quantizePolyline, quantizeRings, quantizeX, quantizeY, toQuantizationTransform, unquantizeBounds, unquantizeCoordsArray, unquantizeCoordsArrayArray, unquantizeExtent, unquantizeMultipoint, unquantizePaths, unquantizePoint, unquantizePoints, unquantizePolygon, unquantizePolyline, unquantizeRings, unquantizeX, unquantizeY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArray", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArrayArray", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPaths", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPoints", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsRings", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeBounds", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeExtent", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeGeometry", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeMultipoint", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePaths", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePoint", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePoints", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePolygon", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePolyline", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeRings", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeX", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeY", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toQuantizationTransform", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeBounds", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArray", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArrayArray", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeExtent", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeMultipoint", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePaths", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePoint", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePoints", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePolygon", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePolyline", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeRings", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeX", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeY", function() { return y; });
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonUtils.js */ "qatw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(n){return n&&"upperLeft"===n.originPosition}const o=(n,t,r)=>[t,r],l=(n,t,r)=>[t,r,n[2]],a=(n,t,r)=>[t,r,n[2],n[3]];function m(n){if(!n)return null;return{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:[n.tolerance,n.tolerance],translate:[n.extent.xmin,n.extent.ymax]}}function c(n,t){if(n===t||null==n&&null==t)return!0;if(null==n||null==t)return!1;let r,e,u,o,l,a;return i(n)?(r=n.translate[0],e=n.translate[1],u=n.scale[0]):(r=n.extent.xmin,e=n.extent.ymax,u=n.tolerance),i(t)?(o=t.translate[0],l=t.translate[1],a=t.scale[0]):(o=t.extent.xmin,l=t.extent.ymax,a=t.tolerance),r===o&&e===l&&u===a}function s({scale:n,translate:t},r){return Math.round((r-t[0])/n[0])}function f({scale:n,translate:t},r){return Math.round((t[1]-r)/n[1])}function x(n,t,r){const e=[];let u,i,o,l;for(let a=0;a<r.length;a++){const m=r[a];a>0?(o=s(n,m[0]),l=f(n,m[1]),o===u&&l===i||(e.push(t(m,o-u,l-i)),u=o,i=l)):(u=s(n,m[0]),i=f(n,m[1]),e.push(t(m,u,i)))}return e.length>0?e:null}function h(n,t,r){return t[0]=s(n,r[0]),t[3]=f(n,r[1]),t[2]=s(n,r[2]),t[1]=f(n,r[3]),t}function I(n,t,r,e){return x(n,r?e?a:l:e?l:o,t)}function g(n,t,r,e){const u=[],i=r?e?a:l:e?l:o;for(let r=0;r<t.length;r++){const e=x(n,i,t[r]);e&&e.length>=3&&u.push(e)}return u.length?u:null}function N(n,t,r,e){const u=[],i=r?e?a:l:e?l:o;for(let r=0;r<t.length;r++){const e=x(n,i,t[r]);e&&e.length>=2&&u.push(e)}return u.length?u:null}function p({scale:n,translate:t},r){return r*n[0]+t[0]}function y({scale:n,translate:t},r){return t[1]-r*n[1]}function z(n,t,r){const e=new Array(r.length);if(!r.length)return e;const[u,i]=n.scale;let o=p(n,r[0][0]),l=y(n,r[0][1]);e[0]=t(r[0],o,l);for(let n=1;n<r.length;n++){const a=r[n];o+=a[0]*u,l-=a[1]*i,e[n]=t(a,o,l)}return e}function T(n,t,r){const e=new Array(r.length);for(let u=0;u<r.length;u++)e[u]=z(n,t,r[u]);return e}function M(n,t,r){return r?(t[0]=p(n,r[0]),t[1]=y(n,r[3]),t[2]=p(n,r[2]),t[3]=y(n,r[1]),t):[p(n,t[0]),y(n,t[3]),p(n,t[2]),y(n,t[1])]}function E(n,t,r,e){return z(n,r?e?a:l:e?l:o,t)}function P(n,t,r,e){return T(n,r?e?a:l:e?l:o,t)}function b(n,t,r,e){return T(n,r?e?a:l:e?l:o,t)}function F(n,t,r){let[e,u]=r[0],i=Math.min(e,t[0]),o=Math.min(u,t[1]),l=Math.max(e,t[2]),a=Math.max(u,t[3]);for(let n=1;n<r.length;n++){const[t,m]=r[n];e+=t,u+=m,t<0&&(i=Math.min(i,e)),t>0&&(l=Math.max(l,e)),m<0?o=Math.min(o,u):m>0&&(a=Math.max(a,u))}return n[0]=i,n[1]=o,n[2]=l,n[3]=a,n}function V(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(let r=0;r<t.length;r++)F(n,n,t[r]);return n}function Y(n){const t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return F(t,t,n)}function _(n){return V([0,0,0,0],n)}function A(n){return V([0,0,0,0],n)}function w(n,t,r,e,u){return t.xmin=s(n,r.xmin),t.ymin=f(n,r.ymin),t.xmax=s(n,r.xmax),t.ymax=f(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),u&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function G(n,t,r,e,u){return t.points=I(n,r.points,e,u),t}function L(n,t,r,e,u){return t.x=s(n,r.x),t.y=f(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m)),t}function O(n,t,r,e,u){const i=g(n,r.rings,e,u);return i?(t.rings=i,t):null}function S(n,t,r,e,u){const i=N(n,r.paths,e,u);return i?(t.paths=i,t):null}function d(i,o){return i&&o?Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPoint"])(o)?L(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(o)?S(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(o)?O(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isMultipoint"])(o)?G(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(o)?w(i,{},o,!1,!1):null:null}function j(n,t,r,e,u){return t.xmin=p(n,r.xmin),t.ymin=y(n,r.ymin),t.xmax=p(n,r.xmax),t.ymax=y(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),u&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function U(n,t,r,e,u){return t.points=E(n,r.points,e,u),t}function k(n,t,r,e,u){return t.x=p(n,r.x),t.y=y(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m)),t}function q(n,t,r,e,u){return t.rings=b(n,r.rings,e,u),t}function v(n,t,r,e,u){return t.paths=P(n,r.paths,e,u),t}


/***/ }),

/***/ "HsO1":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js ***!
  \*****************************************************************************/
/*! exports provided: checkProjectionSupport, project, projectMany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProjectionSupport", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectMany", function() { return j; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/webMercatorUtils.js */ "l4ZG");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/projection.js */ "gYg2");
/* harmony import */ var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/geometryAdapters/json.js */ "1kEK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const u=[0,0];function c(s,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=s(t.x,t.y,u),null!=t.z&&(n.z=t.z),null!=t.m&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=s(t.xmin,t.ymin,u),[n.xmax,n.ymax]=s(t.xmax,t.ymax,u),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:p(t.rings,s),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:p(t.paths,s),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:l(t.points,s),hasM:t.hasM,hasZ:t.hasZ}:void 0}function p(s,t){const n=[];for(const e of s)n.push(l(e,t));return n}function l(s,t){const n=[];for(const e of s){const s=t(e[0],e[1],[0,0]);n.push(s),e.length>2&&s.push(e[2]),e.length>3&&s.push(e[3])}return n}async function f(s,t){if(!t)return;const n=Array.isArray(s)?s.map((s=>{var t;return null==(t=s.geometry)?void 0:t.spatialReference})):[s];await Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_3__["initializeProjection"])(n.map((s=>({source:s,dest:t}))))}const x=c.bind(null,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__["lngLatToXY"]),y=c.bind(null,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__["xyToLngLat"]);function g(s,r,i){return s?(i||(i=r,r=s.spatialReference),Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["isValid"])(r)&&Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["isValid"])(i)&&!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["equals"])(r,i)?Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__["canProject"])(r,i)?Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["isWebMercator"])(i)?x(s):y(s):Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_3__["projectMany"])(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_4__["jsonAdapter"],[s],r,i,null)[0]:s):s}const _=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,r){!t||!t.length||!e||!r||Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["equals"])(e,r);const i={geometries:t,inSpatialReference:e,outSpatialReference:r,resolve:null};return this._jobs.push(i),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])((s=>{i.resolve=s,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:t,inSpatialReference:n,outSpatialReference:r,resolve:i}=s;Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__["canProject"])(n,r)?Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["isWebMercator"])(r)?i(t.map(x)):i(t.map(y)):i(Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_3__["projectMany"])(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_4__["jsonAdapter"],t,n,r,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};async function j(s,t,n){return _.push(s,t,n)}


/***/ }),

/***/ "RjdO":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quickselect.js ***!
  \*********************************************************/
/*! exports provided: q */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return r; });
/* harmony import */ var _commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_commonjsHelpers.js */ "X2wA");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var r=Object(_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["c"])((function(o){var r;void 0!==(r=function(){function o(o,t,a,f,i){r(o,t,a||0,f||o.length-1,i||n)}function r(o,n,a,f,i){for(;f>a;){if(f-a>600){var c=f-a+1,e=n-a+1,h=Math.log(c),u=.5*Math.exp(2*h/3),s=.5*Math.sqrt(h*u*(c-u)/c)*(e-c/2<0?-1:1);r(o,n,Math.max(a,Math.floor(n-e*u/c+s)),Math.min(f,Math.floor(n+(c-e)*u/c+s)),i)}var M=o[n],m=a,v=f;for(t(o,a,n),i(o[f],M)>0&&t(o,a,f);m<v;){for(t(o,m,v),m++,v--;i(o[m],M)<0;)m++;for(;i(o[v],M)>0;)v--}0===i(o[a],M)?t(o,a,v):t(o,++v,f),v<=n&&(a=v+1),n<=v&&(f=v-1)}}function t(o,r,t){var n=o[r];o[r]=o[t],o[t]=n}function n(o,r){return o<r?-1:o>r?1:0}return o}())&&(o.exports=r)}));


/***/ }),

/***/ "kB+0":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/rbush.js ***!
  \***************************************************/
/*! exports provided: r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return i; });
/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quickselect.js */ "RjdO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(t,n){if(!(this instanceof i))return new i(t,n);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}function n(t,i,n){if(!n)return i.indexOf(t);for(var h=0;h<i.length;h++)if(n(t,i[h]))return h;return-1}function h(t,i){a(t,0,t.children.length,i,t)}function a(t,i,n,h,a){a||(a=u(null)),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(var e,o=i;o<n;o++)e=t.children[o],r(a,t.leaf?h(e):e);return a}function r(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function e(t,i){return t.minX-i.minX}function o(t,i){return t.minY-i.minY}function s(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function l(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function c(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function u(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function f(i,n,h,a,r){for(var e,o=[n,h];o.length;)(h=o.pop())-(n=o.pop())<=a||(e=n+Math.ceil((h-n)/a/2)*a,Object(_quickselect_js__WEBPACK_IMPORTED_MODULE_0__["q"])(i,e,n,h,r),o.push(n,e,e,h))}i.prototype={all:function(){return this._all(this.data,[])},search:function(t){var i=this.data,n=[],h=this.toBBox;if(!c(t,i))return n;for(var a,r,e,o,s=[];i;){for(a=0,r=i.children.length;a<r;a++)e=i.children[a],c(t,o=i.leaf?h(e):e)&&(i.leaf?n.push(e):m(t,o)?this._all(e,n):s.push(e));i=s.pop()}return n},collides:function(t){var i=this.data,n=this.toBBox;if(!c(t,i))return!1;for(var h,a,r,e,o=[];i;){for(h=0,a=i.children.length;h<a;h++)if(r=i.children[h],c(t,e=i.leaf?n(r):r)){if(i.leaf||m(t,e))return!0;o.push(r)}i=o.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}var h=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===h.height)this._splitRoot(this.data,h);else{if(this.data.height<h.height){var a=this.data;this.data=h,h=a}this._insert(h,this.data.height-h.height-1,!0)}else this.data=h;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=u([]),this},remove:function(t,i){if(!t)return this;for(var h,a,r,e,o=this.data,s=this.toBBox(t),l=[],c=[];o||l.length;){if(o||(o=l.pop(),a=l[l.length-1],h=c.pop(),e=!0),o.leaf&&-1!==(r=n(t,o.children,i)))return o.children.splice(r,1),l.push(o),this._condense(l),this;e||o.leaf||!m(o,s)?a?(h++,o=a.children[h],e=!1):o=null:(l.push(o),c.push(h),h=0,a=o,o=o.children[0])}return this},toBBox:function(t){return t},compareMinX:e,compareMinY:o,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,i){for(var n=[];t;)t.leaf?i.push.apply(i,t.children):n.push.apply(n,t.children),t=n.pop();return i},_build:function(t,i,n,a){var r,e=n-i+1,o=this._maxEntries;if(e<=o)return h(r=u(t.slice(i,n+1)),this.toBBox),r;a||(a=Math.ceil(Math.log(e)/Math.log(o)),o=Math.ceil(e/Math.pow(o,a-1))),(r=u([])).leaf=!1,r.height=a;var s,l,m,c,x=Math.ceil(e/o),d=x*Math.ceil(Math.sqrt(o));for(f(t,i,n,d,this.compareMinX),s=i;s<=n;s+=d)for(f(t,s,m=Math.min(s+d-1,n),x,this.compareMinY),l=s;l<=m;l+=x)c=Math.min(l+x-1,m),r.children.push(this._build(t,l,c,a-1));return h(r,this.toBBox),r},_chooseSubtree:function(t,i,n,h){for(var a,r,e,o,l,m,c,u,f,x;h.push(i),!i.leaf&&h.length-1!==n;){for(c=u=1/0,a=0,r=i.children.length;a<r;a++)l=s(e=i.children[a]),f=t,x=e,(m=(Math.max(x.maxX,f.maxX)-Math.min(x.minX,f.minX))*(Math.max(x.maxY,f.maxY)-Math.min(x.minY,f.minY))-l)<u?(u=m,c=l<c?l:c,o=e):m===u&&l<c&&(c=l,o=e);i=o||i.children[0]}return i},_insert:function(t,i,n){var h=this.toBBox,a=n?t:h(t),e=[],o=this._chooseSubtree(a,this.data,i,e);for(o.children.push(t),r(o,a);i>=0&&e[i].children.length>this._maxEntries;)this._split(e,i),i--;this._adjustParentBBoxes(a,e,i)},_split:function(t,i){var n=t[i],a=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,a);var e=this._chooseSplitIndex(n,r,a),o=u(n.children.splice(e,n.children.length-e));o.height=n.height,o.leaf=n.leaf,h(n,this.toBBox),h(o,this.toBBox),i?t[i-1].children.push(o):this._splitRoot(n,o)},_splitRoot:function(t,i){this.data=u([t,i]),this.data.height=t.height+1,this.data.leaf=!1,h(this.data,this.toBBox)},_chooseSplitIndex:function(t,i,n){var h,r,e,o,l,m,c,u,f,x,d,p,M,X;for(m=c=1/0,h=i;h<=n-i;h++)r=a(t,0,h,this.toBBox),e=a(t,h,n,this.toBBox),f=r,x=e,d=void 0,p=void 0,M=void 0,X=void 0,d=Math.max(f.minX,x.minX),p=Math.max(f.minY,x.minY),M=Math.min(f.maxX,x.maxX),X=Math.min(f.maxY,x.maxY),o=Math.max(0,M-d)*Math.max(0,X-p),l=s(r)+s(e),o<m?(m=o,u=h,c=l<c?l:c):o===m&&l<c&&(c=l,u=h);return u},_chooseSplitAxis:function(t,i,n){var h=t.leaf?this.compareMinX:e,a=t.leaf?this.compareMinY:o;this._allDistMargin(t,i,n,h)<this._allDistMargin(t,i,n,a)&&t.children.sort(h)},_allDistMargin:function(t,i,n,h){t.children.sort(h);var e,o,s=this.toBBox,m=a(t,0,i,s),c=a(t,n-i,n,s),u=l(m)+l(c);for(e=i;e<n-i;e++)o=t.children[e],r(m,t.leaf?s(o):o),u+=l(m);for(e=n-i-1;e>=i;e--)o=t.children[e],r(c,t.leaf?s(o):o),u+=l(c);return u},_adjustParentBBoxes:function(t,i,n){for(var h=n;h>=0;h--)r(i[h],t)},_condense:function(t){for(var i,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(i=t[n-1].children).splice(i.indexOf(t[n]),1):this.clear():h(t[n],this.toBBox)},_initFormat:function(t){var i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};


/***/ })

}]);
//# sourceMappingURL=default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~3d02fa00.js.map