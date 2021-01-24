(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-GraphicsLayerView2D-js"],{

/***/ "xw90":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/GraphicsLayerView2D.js ***!
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
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/Collection.js */ "LE9a");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Graphic.js */ "jWBI");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ "Vh9r");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_14__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__["default"])){initialize(){this.graphicsView=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_13__["default"]({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(e,i){return this.suspended||!this.graphicsView?Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(e){let i;return"number"==typeof e?i=[e]:e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_11__["default"]?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):_core_Collection_js__WEBPACK_IMPORTED_MODULE_10__["default"].isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])(this.graphicsView.graphics)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],n.prototype,"graphicsView",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({dependsOn:["graphicsView.updating"]})],n.prototype,"updating",void 0),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;/* harmony default export */ __webpack_exports__["default"] = (l);


/***/ })

}]);
//# sourceMappingURL=layers-GraphicsLayerView2D-js.js.map