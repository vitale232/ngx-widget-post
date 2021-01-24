(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PointCloudLayer-js"],{

/***/ "7dZg":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudBitfieldFilter.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PointCloudFilter.js */ "gRed");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var p;let d=p=class extends _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_11__["default"]{constructor(r){super(r),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new p({field:this.field,requiredClearBits:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.requiredClearBits),requiredSetBits:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.requiredSetBits)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"]],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],d.prototype,"requiredClearBits",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"]],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],d.prototype,"requiredSetBits",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({pointCloudBitfieldFilter:"bitfield"})],d.prototype,"type",void 0),d=p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],d);var u=d;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "8i82":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudReturnFilter.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PointCloudFilter.js */ "gRed");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var p;let u=p=class extends _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_11__["default"]{constructor(r){super(r),this.includedReturns=[],this.type="return"}clone(){return new p({field:this.field,includedReturns:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.includedReturns)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"includedReturns",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({pointCloudReturnFilter:"return"})],u.prototype,"type",void 0),u=p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.pointCloudFilters.PointCloudReturnFilter")],u);var n=u;/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ }),

/***/ "RLtZ":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/PointCloudLayer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ "f/qv");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/object.js */ "nR38");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _popup_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../popup/ExpressionInfo.js */ "Fjfq");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../PopupTemplate.js */ "SFah");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/commonProperties.js */ "IvSi");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./support/Field.js */ "ofM5");
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./support/FieldsIndex.js */ "gLc9");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "PVlI");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./support/fieldProperties.js */ "L+uT");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../support/popupUtils.js */ "9Ruv");
/* harmony import */ var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mixins/SceneService.js */ "lq5k");
/* harmony import */ var _pointCloudFilters_typeUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pointCloudFilters/typeUtils.js */ "mKtp");
/* harmony import */ var _renderers_support_pointCloud_typeUtils_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../renderers/support/pointCloud/typeUtils.js */ "l8Gk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const O=_core_Logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger("esri.layers.PointCloudLayer"),N=Object(_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_28__["defineFieldProperties"])();let R=class extends(Object(_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_30__["SceneService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_25__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_22__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_26__["PortalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_27__["ScaleRangeLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_20__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_19__["default"]))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}get fieldsIndex(){return new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_24__["default"](this.fields)}getFieldDomain(e){const r=this.fieldsIndex.get(e);return r&&r.domain?r.domain:null}readServiceFields(e,t,o){return Array.isArray(e)?e.map((e=>{const t=new _support_Field_js__WEBPACK_IMPORTED_MODULE_23__["default"];return"FieldTypeInteger"===e.type&&((e=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(e)).type="esriFieldTypeInteger"),t.read(e,o),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new _support_Field_js__WEBPACK_IMPORTED_MODULE_23__["default"]({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,r,o,i){Object(_core_object_js__WEBPACK_IMPORTED_MODULE_3__["setDeepValue"])("layerDefinition.drawingInfo.renderer",e.write(null,i),r)}load(e){const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then((()=>this._fetchService(r)),(()=>this._fetchService(r)));return this.addResolvingPromise(t),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__["resolve"])(this)}createPopupTemplate(e){const r=Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_29__["createPopupTemplate"])(this,e);return this.formatPopupTemplateReturnsField(r),this.formatPopupTemplateRGBField(r),r}formatPopupTemplateReturnsField(e){const r=this.fieldsIndex.get("RETURNS");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new _popup_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_16__["default"]({name:"pcl-returns-decoded",title:r.alias||r.name,expression:`\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-returns-decoded"}formatPopupTemplateRGBField(e){const r=this.fieldsIndex.get("RGB");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new _popup_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_16__["default"]({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:`\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,r){if(await this.load(r),!this.attributeStorageInfo)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const t=this.fieldsIndex.get(e);if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.attributeStorageInfo)if(e.name===t.name){const t=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["join"])(this.parsedUrl.path,`./statistics/${e.key}`);return Object(_request_js__WEBPACK_IMPORTED_MODULE_18__["default"])(t,{query:{f:"json"},responseType:"json",signal:r?r.signal:null}).then((e=>e.data))}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((r=>r.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&O.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&O.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:["PointCloudLayer"]})],R.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__["popupEnabled"])],R.prototype,"popupEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_17__["default"],json:{name:"popupInfo",write:!0}})],R.prototype,"popupTemplate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0,json:{read:!1},dependsOn:["fields","title","attributeStorageInfo"]})],R.prototype,"defaultPopupTemplate",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],R.prototype,"opacity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:["show","hide"]})],R.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({types:[_pointCloudFilters_typeUtils_js__WEBPACK_IMPORTED_MODULE_31__["types"]],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],R.prototype,"filters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:[_support_Field_js__WEBPACK_IMPORTED_MODULE_23__["default"]]})],R.prototype,"fields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0,dependsOn:["fields"]})],R.prototype,"fieldsIndex",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","fields",["fields","attributeStorageInfo"])],R.prototype,"readServiceFields",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])(N.outFields)],R.prototype,"outFields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],R.prototype,"attributeStorageInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__["elevationInfo"])],R.prototype,"elevationInfo",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],R.prototype,"path",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__["legendEnabled"])],R.prototype,"legendEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({types:_renderers_support_pointCloud_typeUtils_js__WEBPACK_IMPORTED_MODULE_32__["types"],json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:_renderers_support_pointCloud_typeUtils_js__WEBPACK_IMPORTED_MODULE_32__["types"]},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],R.prototype,"renderer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__["writer"])("renderer")],R.prototype,"writeRenderer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{read:!1},readOnly:!0})],R.prototype,"type",void 0),R=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.layers.PointCloudLayer")],R);var _=R;/* harmony default export */ __webpack_exports__["default"] = (_);


/***/ }),

/***/ "auUa":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudValueFilter.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PointCloudFilter.js */ "gRed");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var p;let u=p=class extends _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_11__["default"]{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new p({field:this.field,mode:this.mode,values:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.values)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"mode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({pointCloudValueFilter:"value"})],u.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"values",void 0),u=p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.pointCloudFilters.PointCloudValueFilter")],u);var l=u;/* harmony default export */ __webpack_exports__["default"] = (l);


/***/ }),

/***/ "gRed":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudFilter.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(r){super(r),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.pointCloudFilters.PointCloudFilter")],t);var p=t;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "l8Gk":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/typeUtils.js ***!
  \*****************************************************************************/
/*! exports provided: types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return i; });
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../PointCloudRenderer.js */ "dzHX");
/* harmony import */ var _PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../PointCloudClassBreaksRenderer.js */ "Tg0p");
/* harmony import */ var _PointCloudRGBRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PointCloudRGBRenderer.js */ "pd9S");
/* harmony import */ var _PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PointCloudStretchRenderer.js */ "V4u7");
/* harmony import */ var _PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PointCloudUniqueValueRenderer.js */ "ofcG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const i={key:"type",base:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_0__["default"],typeMap:{"point-cloud-class-breaks":_PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"],"point-cloud-rgb":_PointCloudRGBRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"],"point-cloud-stretch":_PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"],"point-cloud-unique-value":_PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"]},errorContext:"renderer"};


/***/ }),

/***/ "mKtp":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/typeUtils.js ***!
  \*************************************************************************/
/*! exports provided: types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return e; });
/* harmony import */ var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointCloudFilter.js */ "gRed");
/* harmony import */ var _PointCloudBitfieldFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PointCloudBitfieldFilter.js */ "7dZg");
/* harmony import */ var _PointCloudReturnFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PointCloudReturnFilter.js */ "8i82");
/* harmony import */ var _PointCloudValueFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PointCloudValueFilter.js */ "auUa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e={key:"type",base:_PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_0__["default"],typeMap:{value:_PointCloudValueFilter_js__WEBPACK_IMPORTED_MODULE_3__["default"],bitfield:_PointCloudBitfieldFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"],return:_PointCloudReturnFilter_js__WEBPACK_IMPORTED_MODULE_2__["default"]}};


/***/ }),

/***/ "pd9S":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/PointCloudRGBRenderer.js ***!
  \**********************************************************************/
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
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PointCloudRenderer.js */ "dzHX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var i;let c=i=class extends _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"]{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null}clone(){return new i({...this.cloneProperties(),field:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.field)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.renderers.PointCloudRGBRenderer")],c);var n=c;/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ })

}]);
//# sourceMappingURL=PointCloudLayer-js.js.map