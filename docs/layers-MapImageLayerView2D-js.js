(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-MapImageLayerView2D-js"],{

/***/ "6BjF":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/MapImageLayerView2D.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ "bHqs");
/* harmony import */ var _layers_support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../layers/support/ExportImageParameters.js */ "cM4j");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../support/drapedUtils.js */ "6UvW");
/* harmony import */ var _layers_MapImageLayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../layers/MapImageLayerView.js */ "U3zk");
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../engine/BitmapContainer.js */ "LTnl");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./support/ExportStrategy.js */ "vbiG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.MapImageLayerView2D");let l=class extends(Object(_layers_MapImageLayerView_js__WEBPACK_IMPORTED_MODULE_15__["MapImageLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_17__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_13__["default"])))){constructor(){super(...arguments),this._exportImageVersion=-1}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["isAbortError"])(e)||c.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i=r>=10.3,s=r>=10;this._bitmapContainer=new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_16__["BitmapContainer"],this.container.addChild(this._bitmapContainer),this.strategy=new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_18__["default"]({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i,imageNormalizationSupported:s,hidpi:!0}),this.imageParameters=new _layers_support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_12__["ExportImageParameters"]({view:this.view,layer:this.layer}),this.handles.add(Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_10__["init"])(this.imageParameters,"version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),"mapimagelayerview-update")}detach(){this.strategy.destroy(),this.handles.remove("mapimagelayerview-update"),this.imageParameters.destroy(),this.imageParameters=null,this._exportImageVersion=-1,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return Object(_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_14__["createQueryGeometry"])(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.imageParameters.timeExtent,timestamp:this.refreshTimestamp,...i})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"strategy",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({dependsOn:["strategy.updating"]})],l.prototype,"updating",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.MapImageLayerView2D")],l);var y=l;/* harmony default export */ __webpack_exports__["default"] = (y);


/***/ }),

/***/ "6UvW":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/support/drapedUtils.js ***!
  \****************************************************************/
/*! exports provided: createQueryGeometry, intersectsDrapedGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQueryGeometry", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectsDrapedGeometry", function() { return o; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/unitUtils.js */ "gEht");
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ "U282");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function a(t,i,a,o=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"]){let s;if("2d"===a.type)s=i*a.resolution;else if("3d"===a.type){const r=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o)&&!o.equals(a.spatialReference)?Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(o)/Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(a.spatialReference):i*r}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}function o(e,r,n){const o=n.toMap(e);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(o))return!1;return a(o,Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_4__["calculateTolerance"])(),n,s).intersects(r)}const s=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "U282":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js ***!
  \****************************************************************************/
/*! exports provided: calculateTolerance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTolerance", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function e(t,e){return"number"==typeof t?t:t&&t.stops&&t.stops.length?function(t){let e=0,n=0;for(let r=0;r<t.length;r++){const s=t[r].size;"number"==typeof s&&(e+=s,n++)}return e/n}(t.stops):e}function n(n){const r=n&&n.renderer,s="touch"===(n&&n.event&&n.event.pointerType)?9:6;if(!r)return s;const o="visualVariables"in r?function(t,n){if(!n)return t;const r=n.filter((t=>"size"===t.type)).map((n=>{const{maxSize:r,minSize:s}=n;return(e(r,t)+e(s,t))/2}));let s=0;const o=r.length;if(0===o)return t;for(let t=0;t<o;t++)s+=r[t];const f=Math.floor(s/o);return Math.max(f,t)}(s,r.visualVariables):s;if("simple"===r.type)return t(o,r.symbol);if("unique-value"===r.type){let e=o;return r.uniqueValueInfos.forEach((n=>{e=t(e,n.symbol)})),e}if("class-breaks"===r.type){let e=o;return r.classBreakInfos.forEach((n=>{e=t(e,n.symbol)})),e}return r.type,o}


/***/ }),

/***/ "U3zk":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/MapImageLayerView.js ***!
  \*********************************************************************/
/*! exports provided: MapImageLayerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapImageLayerView", function() { return n; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../support/arcadeOnDemand.js */ "gvqN");
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ "U282");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/popupUtils.js */ "rXMu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=n=>{let d=class extends n{async fetchPopupFeatures(e,t){const{layer:s}=this;if(!e)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s}));const u=this.get("view.scale"),n=[],d=async e=>{const s=0===e.minScale||u<=e.minScale,o=0===e.maxScale||u>=e.maxScale;if(e.visible&&s&&o)if(e.sublayers)e.sublayers.forEach(d);else if(e.popupEnabled){const s=Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__["getFetchPopupTemplate"])(e,{...t,defaultPopupTemplateEnabled:!1});Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(s)&&n.push({sublayer:e,popupTemplate:s})}},y=s.sublayers.toArray().map(d);await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["all"])(y);const f=n.map((async({sublayer:s,popupTemplate:o})=>{await s.load().catch((()=>{}));const a=s.createQuery(),p=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t)?t.event:null,i=Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_13__["calculateTolerance"])({renderer:s.renderer,event:p}),u=this.createFetchPopupFeaturesQueryGeometry(e,i);a.geometry=u,a.outFields=await Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__["getRequiredFields"])(s,o);const m=await this._loadArcadeModules(o);m&&m.arcadeUtils.hasGeometryOperations(o)||(a.maxAllowableOffset=u.width/i);return(await s.queryFeatures(a)).features}));return(await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["eachAlways"])(f)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e,r;return!!super.canResume()&&(null==(e=this.imageParameters)||null==(r=e.timeExtent)||!r.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_12__["loadArcade"])()}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],d.prototype,"imageParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],d.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({dependsOn:["imageParameters.timeExtent"]})],d.prototype,"suspended",void 0),d=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.layers.MapImageLayerView")],d),d};


/***/ }),

/***/ "rXMu":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/popupUtils.js ***!
  \**********************************************************************/
/*! exports provided: getFetchPopupTemplate, getRequiredFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFetchPopupTemplate", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequiredFields", function() { return i; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layers/support/fieldUtils.js */ "wdpY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function i(i,d=i.popupTemplate){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(d))return[];const o=await d.getRequiredFields(i.fields),{lastEditInfoEnabled:s}=d,{objectIdField:u,typeIdField:a,globalIdField:n,relationships:f}=i;if(o.includes("*"))return["*"];const r=s?await Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["getFeatureEditFields"])(i):[],m=Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["fixFields"])(i.fields,[...o,...r]);return a&&m.push(a),m&&u&&Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields,u)&&-1===m.indexOf(u)&&m.push(u),m&&n&&Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields,n)&&-1===m.indexOf(n)&&m.push(n),f&&f.forEach((e=>{const{keyField:p}=e;m&&p&&Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields,p)&&-1===m.indexOf(p)&&m.push(p)})),m}function d(p,l){return p.popupTemplate?p.popupTemplate:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l)&&l.defaultPopupTemplateEnabled&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}


/***/ })

}]);
//# sourceMappingURL=layers-MapImageLayerView2D-js.js.map