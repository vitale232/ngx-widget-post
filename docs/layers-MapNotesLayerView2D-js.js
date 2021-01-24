(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-MapNotesLayerView2D-js"],{

/***/ "eRoJ":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/MapNotesLayerView2D.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/Collection.js */ "LE9a");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Graphic.js */ "jWBI");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ "Vh9r");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const l=Object.freeze({remove(){},pause(){},resume(){}});let c=class extends(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_14__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__["default"])){async fetchPopupFeatures(e){return(await Promise.all(Array.from(this.graphicsViews(),(r=>r.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate)))))))).flat()}*graphicsViews(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(e,i){if(this.suspended)return null;const t=Array.from(this.graphicsViews(),(async t=>{const s=await t.hitTest(e,i);if(s){if(s.layer=this.layer,s.sourceLayer=this.layer,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(t);!s.popupTemplate&&e.popupTemplate&&(s.popupTemplate=e.popupTemplate)}return s}return null}));return(await Promise.all(t)).filter((e=>!!e))[0]||null}highlight(e){let r;if("number"==typeof e?r=[e]:e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_11__["default"]?r=[e.uid]:Array.isArray(e)&&e.length>0?r="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):_core_Collection_js__WEBPACK_IMPORTED_MODULE_10__["default"].isCollection(e)&&(r=e.map((e=>e&&e.uid)).toArray()),r=r.filter((e=>null!=e)),!r.length)return l;for(const e of this.graphicsViews())e.addHighlight(r);return{remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(r)}}}update(e){for(const r of this.graphicsViews())r.processUpdate(e)}attach(){var e;const r=this.view,i=()=>this.requestUpdate(),t=()=>this.notifyChange("updating");if(null!=(e=this.layer.featureCollections)&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const e of this.layer.featureCollections){const s=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_13__["default"]({view:r,graphics:e.source,renderer:e.renderer,requestUpdateCallback:i});this._graphicsViewsFeatureCollectionMap.set(s,e),this.container.addChild(s.container),this.handles.add(s.watch("updating",t),"layerview-updating")}}else{const e=[this.layer.polygonGraphics,this.layer.lineGraphics,this.layer.pointGraphics,this.layer.textGraphics].map((e=>new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_13__["default"]({view:r,graphics:e,requestUpdateCallback:i})));for(const r of e)this.handles.add(r.watch("updating",t),"layerview-updating"),this.container.addChild(r.container);this._graphicsViews=e}}detach(){this.container.removeAllChildren(),this.handles.remove("layerview-updating");for(const e of this.graphicsViews())e.destroy(),e.view=null,e.renderer=null;this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}};c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.MapNotesLayerView2D")],c);var n=c;/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ })

}]);
//# sourceMappingURL=layers-MapNotesLayerView2D-js.js.map