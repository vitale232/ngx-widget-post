(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MapNotesLayer-js"],{

/***/ "Wvof":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/MapNotesLayer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../geometry.js */ "4GrV");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/Collection.js */ "LE9a");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "mXvl");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./FeatureLayer.js */ "W9Wu");
/* harmony import */ var _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../support/GraphicsCollection.js */ "9iar");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_17__["BlendLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__["ScaleRangeLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_18__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_15__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_14__["default"])))))){constructor(e){super(e),this.capabilities={operations:{supportsEditing:!0}},this.legendEnabled=!1,this.lineGraphics=new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["default"],this.opacity=1,this.pointGraphics=new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["default"],this.polygonGraphics=new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["default"],this.textGraphics=new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["default"],this.type="map-notes"}readFullExtent(e,r){if(!r.layers.length)return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"]({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__["default"].WGS84});const o=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromJSON(r.layers[0].layerDefinition.spatialReference);return r.layers.reduce(((e,r)=>{const o=r.layerDefinition.extent;return o?_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(o).union(e):e}),new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"]({spatialReference:o}))}readCapabilities(e,r){return{operations:{supportsEditing:!r.layers.some((e=>!!e.layerDefinition.drawingInfo))}}}readFeatureCollections(e,r,o){const t=r.layers.map((e=>{const r=new _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_20__["default"];return r.read(e,o),r}));return new _core_Collection_js__WEBPACK_IMPORTED_MODULE_13__["default"]({items:t})}readMinScale(e,r){for(const e of r.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,r){for(const e of r.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,r){"featureCollection"in e&&super.read(e.featureCollection,r),super.read(e,r)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])(["web-map","portal-item"],"fullExtent",["layers"])],h.prototype,"readFullExtent",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],h.prototype,"capabilities",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])(["portal-item","web-map"],"capabilities",["layers"])],h.prototype,"readCapabilities",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],h.prototype,"featureCollections",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])(["web-map","portal-item"],"featureCollections",["layers"])],h.prototype,"readFeatureCollections",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}})],h.prototype,"legendEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(Object(_support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["graphicsCollectionProperty"])("lineGraphics"))],h.prototype,"lineGraphics",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["show","hide"]})],h.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])(["web-map","portal-item"],"minScale",["layers"])],h.prototype,"readMinScale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])(["web-map","portal-item"],"maxScale",["layers"])],h.prototype,"readMaxScale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,json:{name:"opacity",write:!0}})],h.prototype,"opacity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(Object(_support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["graphicsCollectionProperty"])("pointGraphics"))],h.prototype,"pointGraphics",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(Object(_support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["graphicsCollectionProperty"])("polygonGraphics"))],h.prototype,"polygonGraphics",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(Object(_support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["graphicsCollectionProperty"])("textGraphics"))],h.prototype,"textGraphics",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,json:{read:!1}})],h.prototype,"type",void 0),h=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.MapNotesLayer")],h);var j=h;/* harmony default export */ __webpack_exports__["default"] = (j);


/***/ })

}]);
//# sourceMappingURL=MapNotesLayer-js.js.map