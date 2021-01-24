(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-support-labelFormatUtils-js"],{

/***/ "zKxS":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/labelFormatUtils.js ***!
  \**********************************************************************/
/*! exports provided: createLabelFunction, formatField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLabelFunction", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatField", function() { return y; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../support/arcadeOnDemand.js */ "gvqN");
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fieldUtils.js */ "wdpY");
/* harmony import */ var _intl_date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../intl/date.js */ "RlM3");
/* harmony import */ var _intl_number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../intl/number.js */ "IeLS");
/* harmony import */ var _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FieldsIndex.js */ "gLc9");
/* harmony import */ var _labelUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./labelUtils.js */ "ezna");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.layers.support.labelFormatUtils"),f={type:"simple",evaluate:()=>null},m={getAttribute:(e,t)=>e.field(t)};async function d(e,a,o){if(!e||!e.symbol)return f;const i=e.where,l=Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_7__["getLabelExpression"])(e),d=i?await __webpack_require__.e(/*! import() | core-sql-WhereClause-js */ "default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom~0707428b").then(__webpack_require__.bind(null, /*! ../../core/sql/WhereClause.js */ "ZqIb")):null;let g;if("arcade"===l.type){const e=await Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_2__["createLabelExpression"])(l.expression,o,a);g={type:"arcade",evaluate(r){try{const t=e.evaluate({$feature:"attributes"in r?e.repurposeFeature(r):e.repurposeAdapter(r)});if(null!=t)return t.toString()}catch(e){c.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:r,expression:l}))}return null},needsHydrationToEvaluate:()=>null==Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_7__["getSingleFieldArcadeExpression"])(l.expression)}}else g={type:"simple",evaluate:e=>l.expression.replace(/{[^}]*}/g,(t=>{const r=t.slice(1,-1),o=Object(_fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__["getField"])(a,r);if(!o)return t;let i=null;if("attributes"in e){e&&e.attributes&&(i=e.attributes[o.name])}else i=e.field(o.name);return null==i?"":y(i,o)}))};if(i){let e;try{e=d.WhereClause.create(i,new _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_6__["default"](a))}catch(e){return f}const t=g.evaluate;g.evaluate=r=>{const a="attributes"in r?void 0:m;return e.testFeature(r,a)?t(r):null}}return g}function y(e,t){if(null==e)return"";const r=t.domain;if(r)if("codedValue"===r.type||"coded-value"===r.type){const t=e;for(const e of r.codedValues)if(e.code===t)return e.name}else if("range"===r.type){const t=+e,a="range"in r?r.range[0]:r.minValue,n="range"in r?r.range[1]:r.maxValue;if(a<=t&&t<=n)return r.name}let n=e;return"date"===t.type||"esriFieldTypeDate"===t.type?n=Object(_intl_date_js__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(n,Object(_intl_date_js__WEBPACK_IMPORTED_MODULE_4__["convertDateFormatToIntlOptions"])("short-date")):Object(_fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__["isNumericField"])(t)&&(n=Object(_intl_number_js__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(+n)),n||""}


/***/ })

}]);
//# sourceMappingURL=layers-support-labelFormatUtils-js.js.map