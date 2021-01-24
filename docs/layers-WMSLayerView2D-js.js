(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-WMSLayerView2D-js"],{

/***/ "JTUT":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/WMSLayerView2D.js ***!
  \*********************************************************************/
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
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ "bHqs");
/* harmony import */ var _layers_support_ExportWMSImageParameters_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../layers/support/ExportWMSImageParameters.js */ "uAeW");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _layers_WMSLayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../layers/WMSLayerView.js */ "prZ3");
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../engine/BitmapContainer.js */ "LTnl");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./support/ExportStrategy.js */ "vbiG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const y=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.WMSLayerView2D");let g=class extends(Object(_layers_WMSLayerView_js__WEBPACK_IMPORTED_MODULE_15__["WMSLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_17__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__["default"])))){initialize(){const{layer:e,view:t}=this;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(e)||y.error(e)}))}attach(){const{layer:e,view:t}=this,{imageMaxHeight:r,imageMaxWidth:i}=e;this._bitmapContainer=new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_16__["BitmapContainer"],this.container.addChild(this._bitmapContainer),this.strategy=new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_18__["default"]({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new _layers_support_ExportWMSImageParameters_js__WEBPACK_IMPORTED_MODULE_13__["default"]({layer:e,view:t}),this.handles.add(this._exportWMSImageParameters.watch("version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),"wms")}detach(){this.handles.remove("wms"),this.strategy.destroy(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t}=this,r=this._bitmapContainer,{x:i,y:s}=e,{spatialReference:a}=t;let o=null,m=0,n=0;r.children.some((e=>{const{width:t,height:r,resolution:h,x:d,y:l}=e,c=d+h*t,u=l-h*r;return i>=d&&i<=c&&s<=l&&s>=u&&(o=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"]({xmin:d,ymin:u,xmax:c,ymax:l,spatialReference:a}),m=t,n=r,!0)}));const h=o.width/m,d=Math.round((i-o.xmin)/h),l=Math.round((o.ymax-s)/h);return{extent:o,width:m,height:n,x:d,y:l}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this._exportWMSImageParameters.timeExtent,timestamp:this.refreshTimestamp,...i})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],g.prototype,"strategy",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({dependsOn:["strategy.updating"]})],g.prototype,"updating",void 0),g=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.WMSLayerView2D")],g);var f=g;/* harmony default export */ __webpack_exports__["default"] = (f);


/***/ }),

/***/ "prZ3":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/WMSLayerView.js ***!
  \****************************************************************/
/*! exports provided: WMSLayerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WMSLayerView", function() { return i; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{async fetchPopupFeatures(e){const{layer:r}=this;if(!e)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const{popupEnabled:t}=r;if(!t)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:t}));const i=this.createFetchPopupFeaturesQuery(e),{extent:c,width:u,height:a,x:n,y:h}=i;if(!(c&&u&&a))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:c,width:u,height:a});const m=r.fetchFeatureInfo(c,u,a,n,h);return m?m.then((e=>[e])):Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])([])}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"layer",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.WMSLayerView")],c),c};


/***/ })

}]);
//# sourceMappingURL=layers-WMSLayerView2D-js.js.map