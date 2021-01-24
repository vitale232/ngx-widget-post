(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-ImageryLayerView2D-js"],{

/***/ "WKti":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryGraphicsView2D.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../Graphic.js */ "jWBI");
/* harmony import */ var _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../support/GraphicsCollection.js */ "9iar");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../layers/LayerView.js */ "NloG");
/* harmony import */ var _engine_Container_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../engine/Container.js */ "AMBt");
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../graphics/GraphicsView2D.js */ "Vh9r");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../LayerView2D.js */ "Vm2Q");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const y=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let w=class extends(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_18__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_15__["default"])){constructor(){super(...arguments),this.container=new _engine_Container_js__WEBPACK_IMPORTED_MODULE_16__["Container"],this._graphicsView=null,this.type="Graphics",this._graphics=new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_14__["default"],this._updateGraphics=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["debounce"])((async(e,t)=>{if(!e.stationary)return;const i=e.state,r=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"]({xmin:i.extent.xmin,ymin:i.extent.ymin,xmax:i.extent.xmax,ymax:i.extent.ymax,spatialReference:i.spatialReference}),s=e.state.size[0],a=e.state.size[1],o={};o.timeExtent=this.timeExtent,o.requestAsImageElement=!1,o.signal=t;const n=this._getVectorFieldExportParams({extent:r,width:s,height:a}),c=await this.layer.fetchImage(n.extent,n.width,n.height,o),l=this.layer.renderer;if("vector-field"===l.type){this._pixelData={extent:n.extent,pixelBlock:c.pixelData.pixelBlock};const t=await l.getGraphicsFromPixelData(c.pixelData,"vector-uv"===this.layer.rasterInfo.dataType);this._graphicsView.update(e),await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["after"])(0).then((()=>{this._graphics.set("items",t)}))}}))}get updating(){var e;return null==(e=this._graphicsView)?void 0:e.updating}update(e){this._updateGraphics(e).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(e)||y.error(e)}))}hitTest(e,t){if(this.suspended)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(null);const i=this.view.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["createScreenPoint"])(e,t));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(new _Graphic_js__WEBPACK_IMPORTED_MODULE_13__["default"]({attributes:{},geometry:i,layer:this.layer}))}attach(){this._graphicsView=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_17__["default"]({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate()})}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container)}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}_getVectorFieldExportParams(e){var t,i;let{extent:r,width:s,height:a}=e;const o=this.layer,n=null==(t=o.fullExtent)?void 0:t.xmin,p=null==(i=o.fullExtent)?void 0:i.ymax;let h;"vector-field"===o.renderer.type&&(h=o.renderer.symbolTileSize),h=Math.max(h||0,30),s=Math.ceil(s*(1/h)),a=Math.ceil(a*(1/h));const c=(r.xmax-r.xmin)/s,l=(r.ymax-r.ymin)/a;return r.xmin=n+Math.floor((r.xmin-n)/c)*c,r.xmax=n+Math.ceil((r.xmax-n)/c)*c,r.ymin=p+Math.floor((r.ymin-p)/l)*l,r.ymax=p+Math.ceil((r.ymax-p)/l)*l,{extent:r,width:s,height:a}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],w.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],w.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],w.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({dependsOn:["_graphicsView.updating"]})],w.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],w.prototype,"_graphicsView",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({graphics:"Graphics"})],w.prototype,"type",void 0),w=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],w);var f=w;/* harmony default export */ __webpack_exports__["default"] = (f);


/***/ }),

/***/ "f1zk":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/ImageryLayerView2D.js ***!
  \*************************************************************************/
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
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _layers_ImageryLayerView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layers/ImageryLayerView.js */ "yAIi");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _imagery_ImageryGraphicsView2D_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./imagery/ImageryGraphicsView2D.js */ "WKti");
/* harmony import */ var _imagery_ImageryView2D_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./imagery/ImageryView2D.js */ "slNU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let m=class extends(Object(_layers_ImageryLayerView_js__WEBPACK_IMPORTED_MODULE_13__["ImageryLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_14__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__["default"])))){constructor(){super(...arguments),this._exportImageVersion=-1}get pixelData(){return this.updating?null:this.subview.getPixelData()}get updating(){return!(this.subview&&!this.subview.updating)}hitTest(e,t){return this.suspended||!this.subview?Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])(null):this.subview.hitTest(e,t)}update(e){var t;null==(t=this.subview)||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_10__["init"])(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),this.watch("timeExtent",(()=>{this.subview.timeExtent=this.timeExtent,this.requestUpdate()})),this.layer.on("redraw",(()=>this.subview.redraw())),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_10__["watch"])(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update")}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.isUpdating()}_setSubView(){var e;let t="Imagery";var s,r;("vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(t="Graphics"),this.subview&&this.subview.type===t)||(null==(s=this.subview)||s.uninstall(this.container),null==(r=this.subview)||r.destroy(),this.subview="Imagery"===t?new _imagery_ImageryView2D_js__WEBPACK_IMPORTED_MODULE_16__["default"]({layer:this.layer,view:this.view}):new _imagery_ImageryGraphicsView2D_js__WEBPACK_IMPORTED_MODULE_15__["default"]({layer:this.layer,view:this.view}),this.subview.attach(),this.subview.install(this.container));this.requestUpdate()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({dependsOn:["updating"]})],m.prototype,"pixelData",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,dependsOn:["subview.updating"]})],m.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],m.prototype,"subview",void 0),m=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.ImageryLayerView2D")],m);var d=m;/* harmony default export */ __webpack_exports__["default"] = (d);


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


/***/ }),

/***/ "slNU":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryView2D.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../Graphic.js */ "jWBI");
/* harmony import */ var _layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../layers/support/rasterFunctions/pixelUtils.js */ "ne7T");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../layers/LayerView.js */ "NloG");
/* harmony import */ var _engine_Container_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../engine/Container.js */ "AMBt");
/* harmony import */ var _engine_ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../engine/ImageryBitmapSource.js */ "iUxC");
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../engine/BitmapContainer.js */ "LTnl");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../LayerView2D.js */ "Vm2Q");
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../support/ExportStrategy.js */ "vbiG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const y=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.imagery.ImageryView2D");let x=class extends(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_18__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__["default"])){constructor(){super(...arguments),this.container=new _engine_Container_js__WEBPACK_IMPORTED_MODULE_15__["Container"],this.type="Imagery",this._bitmapView=null}get updating(){var e;return null==(e=this.strategy)?void 0:e.updating}update(e){this.strategy.update(e).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(e)||y.error(e)}))}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()}hitTest(e,t){if(this.suspended)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(null);const r=this.view.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_11__["createScreenPoint"])(e,t));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(new _Graphic_js__WEBPACK_IMPORTED_MODULE_12__["default"]({attributes:{},geometry:r,layer:this.layer}))}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_17__["BitmapContainer"],this.strategy=new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_19__["default"]({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender()}))}))}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.container.children;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_13__["mosaicPixelData"])(r,t);return i?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i){return(i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new _engine_ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_16__["default"](t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],x.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],x.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],x.prototype,"strategy",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],x.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({dependsOn:["strategy.updating"]})],x.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({imagery:"Imagery"})],x.prototype,"type",void 0),x=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.imagery.ImageryView2D")],x);var f=x;/* harmony default export */ __webpack_exports__["default"] = (f);


/***/ }),

/***/ "yAIi":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/ImageryLayerView.js ***!
  \********************************************************************/
/*! exports provided: ImageryLayerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageryLayerView", function() { return m; });
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
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/Point.js */ "SuVq");
/* harmony import */ var _layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layers/support/commonProperties.js */ "IvSi");
/* harmony import */ var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../tasks/support/Query.js */ "xk++");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./support/popupUtils.js */ "rXMu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const m=m=>{let c=class extends m{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,o){const{layer:t}=this;if(!e)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:a}=t,m=Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_15__["getFetchPopupTemplate"])(t,o);if(!a||!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(m))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:m});const c=await m.getRequiredFields(),l=new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_14__["default"];l.geometry=e,l.outFields=c,l.outSpatialReference=e.spatialReference;const y=this.view.resolution,d="2d"===this.view.type?new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"](y,y,this.view.spatialReference):new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"](.5*y,.5*y,this.view.spatialReference),{returnTopmostRaster:w,showNoDataRecords:f}=m.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},h={returnDomainValues:!0,returnTopmostRaster:w,pixelSize:d,showNoDataRecords:f};return t.queryVisibleRasters(l,h).then((e=>e))}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],c.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({dependsOn:["timeExtent"]})],c.prototype,"suspended",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_13__["combinedViewLayerTimeExtentProperty"])],c.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],c.prototype,"view",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.layers.ImageryLayerView")],c),c};


/***/ })

}]);
//# sourceMappingURL=layers-ImageryLayerView2D-js.js.map