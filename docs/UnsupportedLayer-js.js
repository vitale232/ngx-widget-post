(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UnsupportedLayer-js"],{

/***/ "GN2T":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/UnsupportedLayer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/scheduling.js */ "WBXD");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let n=class extends(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_15__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_14__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_13__["default"]))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["create"])(((r,o)=>{Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_12__["schedule"])((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let e="Unsupported layer type";r&&(e+=" "+r),o(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("layer:unsupported-layer-type",e,{layerType:r}))}))})))}read(r,o){const e={resourceInfo:r};null!=r.id&&(e.id=r.id),null!=r.title&&(e.title=r.title),super.read(e,o)}write(r){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["mixin"])(r||{},this.resourceInfo,{id:this.id})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],n.prototype,"resourceInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["show","hide"]})],n.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{read:!1},readOnly:!0,value:"unsupported"})],n.prototype,"type",void 0),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.UnsupportedLayer")],n);var a=n;/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ })

}]);
//# sourceMappingURL=UnsupportedLayer-js.js.map