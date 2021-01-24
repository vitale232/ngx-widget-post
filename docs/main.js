(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vitale232/prj/esri-core/ngx-widget/src/main.ts */"zUnb");


/***/ }),

/***/ "6V/v":
/*!*****************************************!*\
  !*** ./src/app/ngx-widget.directive.ts ***!
  \*****************************************/
/*! exports provided: NgxWidgetDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxWidgetDirective", function() { return NgxWidgetDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _arcgis_core_widgets_Expand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/core/widgets/Expand */ "NrxR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "9YHx");





class NgxWidgetDirective {
    constructor(cdr, templateRef, viewContainerRef) {
        this.cdr = cdr;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hasView = false;
        this.viewElement = undefined;
        this._view = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.view$ = this._view.asObservable();
        this._position = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            position: 'bottom-left',
            index: 0,
        });
        this.position$ = this._position.asObservable();
        this._expand = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.expand$ = this._expand.asObservable();
        this._expanded = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.expanded$ = this._expanded.asObservable();
        this._expandIconClass = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('esri-icon-expand');
        this.expandIconClass$ = this._expandIconClass.asObservable();
        this._expandTooltip = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('Expand the widget');
        this.expandTooltip$ = this._expandTooltip.asObservable();
        this._changeDetection = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default);
        this.changeDetection$ = this._changeDetection.asObservable();
    }
    // Use rxjs to handle `@Input`s reactively
    // Use the selector as the input name to accept as the default input to the directive.
    set appNgxWidget(val) {
        this._view.next(val);
    }
    set appNgxWidgetPosition(val) {
        this._position.next(val);
    }
    set appNgxWidgetExpand(val) {
        this._expand.next(val);
    }
    set appNgxWidgetExpanded(val) {
        this._expanded.next(val);
    }
    set appNgxWidgetExpandTooltip(val) {
        this._expandTooltip.next(val);
    }
    set appNgxWidgetExpandIconClass(val) {
        this._expandIconClass.next(val);
    }
    set appNgxWidgetChangeDetection(val) {
        this._changeDetection.next(val);
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            this.view$,
            this.position$,
            this.expand$,
            this.expanded$,
            this.expandIconClass$,
            this.expandTooltip$,
            this.changeDetection$,
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$))
            .subscribe((params) => this.handleWidget(...params));
    }
    ngOnDestroy() {
        this._destroy$.next(null);
        this._destroy$.complete();
    }
    handleWidget(view, position, expand, expanded, expandIconClass, expandTooltip, changeDetectionStrategy) {
        if (this.hasView) {
            this.clear(view);
        }
        if (view != null && position != null) {
            if (expand === true) {
                this.viewElement = new _arcgis_core_widgets_Expand__WEBPACK_IMPORTED_MODULE_1__["default"]({
                    expanded,
                    expandIconClass,
                    expandTooltip,
                    view,
                    content: this.render(),
                });
                view.ui.add(this.viewElement, position);
            }
            else {
                this.viewElement = this.render();
                view.ui.add(this.viewElement, position);
            }
        }
        this.markForCheck(changeDetectionStrategy);
    }
    render() {
        const embeddedView = this.viewContainerRef.createEmbeddedView(this.templateRef);
        const element = embeddedView.rootNodes[0];
        this.hasView = true;
        return element;
    }
    clear(view) {
        if (view) {
            view.ui.remove(this.viewElement);
        }
        this.viewContainerRef.clear();
        this.hasView = false;
        this.viewElement = null;
    }
    markForCheck(changeDetectionStrategy) {
        if (changeDetectionStrategy === _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush) {
            setTimeout(() => this.cdr.markForCheck());
        }
    }
}
NgxWidgetDirective.ɵfac = function NgxWidgetDirective_Factory(t) { return new (t || NgxWidgetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
NgxWidgetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxWidgetDirective, selectors: [["", "appNgxWidget", ""]], inputs: { appNgxWidget: "appNgxWidget", appNgxWidgetPosition: "appNgxWidgetPosition", appNgxWidgetExpand: "appNgxWidgetExpand", appNgxWidgetExpanded: "appNgxWidgetExpanded", appNgxWidgetExpandTooltip: "appNgxWidgetExpandTooltip", appNgxWidgetExpandIconClass: "appNgxWidgetExpandIconClass", appNgxWidgetChangeDetection: "appNgxWidgetChangeDetection" } });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _esri_map_esri_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esri-map/esri-map.component */ "U10u");
/* harmony import */ var _ngx_widget_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-widget.directive */ "6V/v");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _form_widget_form_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-widget/form-widget.component */ "wfrm");





function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-form-widget", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AppComponent_div_3_Template_app_form_widget_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockGroups", ctx_r0.blockGroups);
} }
const _c0 = function (a0) { return { position: a0, index: 0 }; };
class AppComponent {
    constructor() {
        this.position = 'bottom-right';
    }
    onViewReady(view) {
        this.view = view;
    }
    onLayerReady(layer) {
        this.layer = layer;
        const query = layer.createQuery();
        query.where = '1=1';
        layer.queryFeatures(query).then((featureSet) => {
            this.features = featureSet.features;
            this.blockGroups = Array.from(new Set(this.features.map((feat) => feat.getAttribute('NAMELSAD')))).sort();
        });
    }
    onValueChange(val) {
        if (this.layer && this.view) {
            const query = this.layer.createQuery();
            query.where = `NAMELSAD = '${val}'`;
            this.layer.queryFeatures(query).then((featureSet) => {
                var _a;
                (_a = this.highlightHandle) === null || _a === void 0 ? void 0 : _a.remove();
                this.view.goTo(featureSet.features);
                this.highlightHandle = this.layerView.highlight(featureSet.features);
            });
        }
    }
    onLayerViewReady(layerView) {
        this.layerView = layerView;
    }
    onMoveWidgetClick(position) {
        this.position = position;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 7, consts: [[3, "viewReady", "layerReady", "layerViewReady"], ["class", "ngx-widget", 4, "appNgxWidget", "appNgxWidgetPosition", "appNgxWidgetExpand", "appNgxWidgetExpanded", "appNgxWidgetExpandIconClass"], [1, "button-group"], ["mat-raised-button", "", 3, "click"], [1, "ngx-widget"], [3, "blockGroups", "valueChange"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Angular Component as a Widget!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-esri-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewReady", function AppComponent_Template_app_esri_map_viewReady_2_listener($event) { return ctx.onViewReady($event); })("layerReady", function AppComponent_Template_app_esri_map_layerReady_2_listener($event) { return ctx.onLayerReady($event); })("layerViewReady", function AppComponent_Template_app_esri_map_layerViewReady_2_listener($event) { return ctx.onLayerViewReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.onMoveWidgetClick("top-left"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Move Widget - Top Left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() { return ctx.onMoveWidgetClick("top-right"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Move Widget - Top Right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() { return ctx.onMoveWidgetClick("bottom-left"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Move Widget - Bottom Left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { return ctx.onMoveWidgetClick("bottom-right"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Move Widget - Bottom Right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appNgxWidget", ctx.view)("appNgxWidgetPosition", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.position))("appNgxWidgetExpand", true)("appNgxWidgetExpanded", true)("appNgxWidgetExpandIconClass", "esri-icon-search");
    } }, directives: [_esri_map_esri_map_component__WEBPACK_IMPORTED_MODULE_1__["EsriMapComponent"], _ngx_widget_directive__WEBPACK_IMPORTED_MODULE_2__["NgxWidgetDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _form_widget_form_widget_component__WEBPACK_IMPORTED_MODULE_4__["FormWidgetComponent"]], styles: [".ngx-widget[_ngcontent-%COMP%] {\n        width: 200px;\n        height: 120px;\n        background-color: white;\n        padding: 5px;\n      }\n      .button-group[_ngcontent-%COMP%] {\n        padding-top: 1.5rem;\n        display: flex;\n        justify-content: center;\n      }\n      button[_ngcontent-%COMP%] {\n        margin-right: 5px;\n      }"] });


/***/ }),

/***/ "U10u":
/*!************************************************!*\
  !*** ./src/app/esri-map/esri-map.component.ts ***!
  \************************************************/
/*! exports provided: EsriMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsriMapComponent", function() { return EsriMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _arcgis_core_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/core/config.js */ "EyXx");
/* harmony import */ var _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/layers/FeatureLayer */ "W9Wu");
/* harmony import */ var _arcgis_core_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/Map */ "bRsD");
/* harmony import */ var _arcgis_core_views_MapView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/views/MapView */ "phGV");
/* harmony import */ var _arcgis_core_widgets_BasemapGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @arcgis/core/widgets/BasemapGallery */ "Qvb4");
/* harmony import */ var _arcgis_core_widgets_Expand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @arcgis/core/widgets/Expand */ "NrxR");
/* harmony import */ var _arcgis_core_widgets_Legend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @arcgis/core/widgets/Legend */ "ire8");









const _c0 = ["mapViewNode"];
/**
 * A simple Esri map using the beta ES Modules build.
 * This code is based on an Esri Github example. Learn more here:
 * https://github.com/vitale232/jsapi-resources/tree/master/esm-samples
 */
class EsriMapComponent {
    constructor(zone) {
        this.zone = zone;
        this.viewReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.layerReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.layerViewReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.view = null;
    }
    ngOnInit() {
        // Set this property when using routes in order to resolve the /assets correctly.
        // IMPORTANT: the directory path may be different between your product app and your dev app
        // config.assetsPath = "/assets";
        _arcgis_core_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].assetsPath = 'assets/';
        this.zone.runOutsideAngular(() => {
            // Initialize MapView and return an instance of MapView
            this.initializeMap().then((view) => 
            // The map has been initialized
            this.zone.run(() => this.viewReady.emit(view)));
        });
    }
    initializeMap() {
        const container = this.mapViewEl.nativeElement;
        const layer = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_2__["default"]({
            // auto-casts to a new PortalItem
            portalItem: {
                id: '234d2e3f6f554e0e84757662469c26d3',
            },
        });
        const map = new _arcgis_core_Map__WEBPACK_IMPORTED_MODULE_3__["default"]({
            basemap: 'gray-vector',
            layers: [layer],
        });
        const view = new _arcgis_core_views_MapView__WEBPACK_IMPORTED_MODULE_4__["default"]({
            container,
            map,
        });
        const legend = new _arcgis_core_widgets_Legend__WEBPACK_IMPORTED_MODULE_7__["default"]({
            view,
        });
        const basemapGallery = new _arcgis_core_widgets_BasemapGallery__WEBPACK_IMPORTED_MODULE_5__["default"]({
            view,
        });
        const legendExpand = new _arcgis_core_widgets_Expand__WEBPACK_IMPORTED_MODULE_6__["default"]({
            content: legend,
        });
        const bgExpand = new _arcgis_core_widgets_Expand__WEBPACK_IMPORTED_MODULE_6__["default"]({
            content: basemapGallery,
        });
        view.ui.add(bgExpand, 'top-right');
        view.ui.add(legendExpand, 'bottom-left');
        this.view = view;
        this.createLayerView(layer, view);
        layer.load().then(() => {
            view.extent = layer.fullExtent;
            this.zone.run(() => this.layerReady.emit(layer));
        });
        return this.view.when();
    }
    ngOnDestroy() {
        if (this.view) {
            // destroy the map view
            this.view.destroy();
        }
    }
    createLayerView(layer, view) {
        view
            .whenLayerView(layer)
            .then((layerView) => this.zone.run(() => this.layerViewReady.emit(layerView)));
    }
}
EsriMapComponent.ɵfac = function EsriMapComponent_Factory(t) { return new (t || EsriMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
EsriMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EsriMapComponent, selectors: [["app-esri-map"]], viewQuery: function EsriMapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapViewEl = _t.first);
    } }, outputs: { viewReady: "viewReady", layerReady: "layerReady", layerViewReady: "layerViewReady" }, decls: 2, vars: 0, consts: [["mapViewNode", ""]], template: function EsriMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", null, 0);
    } }, styles: [".esri-view[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0;\n        height: 60vh;\n        width: 100%;\n      }\n      #mapViewNode[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0;\n        height: 60vh;\n        width: 100%;\n      }"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _esri_map_esri_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./esri-map/esri-map.component */ "U10u");
/* harmony import */ var _ngx_widget_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngx-widget.directive */ "6V/v");
/* harmony import */ var _form_widget_form_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-widget/form-widget.component */ "wfrm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _esri_map_esri_map_component__WEBPACK_IMPORTED_MODULE_3__["EsriMapComponent"],
        _ngx_widget_directive__WEBPACK_IMPORTED_MODULE_4__["NgxWidgetDirective"],
        _form_widget_form_widget_component__WEBPACK_IMPORTED_MODULE_5__["FormWidgetComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]] }); })();


/***/ }),

/***/ "geBw":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers lazy namespace object ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "geBw";

/***/ }),

/***/ "wfrm":
/*!******************************************************!*\
  !*** ./src/app/form-widget/form-widget.component.ts ***!
  \******************************************************/
/*! exports provided: FormWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWidgetComponent", function() { return FormWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");










function FormWidgetComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", group_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r1, " ");
} }
class FormWidgetComponent {
    constructor(fb) {
        this.fb = fb;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.form = this.fb.group({
            blockGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }),
        });
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.form
            .get('blockGroup')
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$))
            .subscribe((val) => this.valueChange.emit(val));
    }
    ngOnDestroy() {
        this._destroy$.next(null);
        this._destroy$.complete();
    }
}
FormWidgetComponent.ɵfac = function FormWidgetComponent_Factory(t) { return new (t || FormWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
FormWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormWidgetComponent, selectors: [["app-form-widget"]], inputs: { blockGroups: "blockGroups" }, outputs: { valueChange: "valueChange" }, decls: 10, vars: 3, consts: [[3, "formGroup"], ["appearance", "outline"], ["formControlName", "blockGroup"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function FormWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose a Block Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Block Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormWidgetComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blockGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.blockGroups == null ? null : ctx.blockGroups.length, " Block Groups Available");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: ["[_nghost-%COMP%] {\n        width: 100%;\n        padding-left: 10px;\n        padding-right: 10px;\n      }\n      form[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n      mat-form-field[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n      h3[_ngcontent-%COMP%] {\n        margin-bottom: 0.25rem;\n        margin-top: -13px;\n      }"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map