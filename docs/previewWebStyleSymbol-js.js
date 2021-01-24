(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["previewWebStyleSymbol-js"],{

/***/ "Su0i":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/previewWebStyleSymbol.js ***!
  \****************************************************************************/
/*! exports provided: previewWebStyleSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewWebStyleSymbol", function() { return i; });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(i,n,h){const s=i.thumbnail&&i.thumbnail.url;return s?Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(s,{responseType:"image"}).then((e=>{const i=function(e,i){const n=!/\\.svg$/i.test(e.src)&&i&&i.disableUpsampling,h=Math.max(e.width,e.height);let s=i&&null!=i.maxSize?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(i.maxSize):120;n&&(s=Math.min(h,s));const o=Math.min(s,i&&null!=i.size?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(i.size):h);if(o!==h){const t=0!==e.width&&0!==e.height?e.width/e.height:1;t>=1?(e.width=o,e.height=o/t):(e.width=o*t,e.height=o)}return e}(e.data,h);return h&&h.node?(h.node.appendChild(i),h.node):i})):i.fetchSymbol().then((t=>n(t,h)))}


/***/ })

}]);
//# sourceMappingURL=previewWebStyleSymbol-js.js.map