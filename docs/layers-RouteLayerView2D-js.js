(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-RouteLayerView2D-js"],{

/***/ "BLb8":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/RouteLayerView2D.js ***!
  \***********************************************************************/
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
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/Handles.js */ "r0DZ");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ "Vh9r");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_13__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__["default"])){constructor(){super(...arguments),this._handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_10__["default"],this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["all"])(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e)}attach(){this.layer.featureCollections.forEach((e=>{const s=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_12__["default"]({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container)}))}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};h=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ })

}]);
//# sourceMappingURL=layers-RouteLayerView2D-js.js.map