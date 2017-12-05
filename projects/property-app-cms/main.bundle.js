webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_main_section_content_division_division_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/division/division.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_main_section_content_division_division_home_division_home_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/division/division-home/division-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_main_section_content_division_division_create_division_create_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/division/division-create/division-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_main_section_content_home_product_home_product_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_main_section_content_home_product_home_product_home_home_product_home_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product-home/home-product-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_main_section_content_home_product_home_product_create_home_product_create_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product-create/home-product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_main_section_content_home_product_home_edit_home_product_edit_home_product_edit_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-edit/home-product-edit/home-product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_main_section_content_floor_plan_floor_plan_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_main_section_content_floor_plan_floor_plan_home_floor_plan_home_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-home/floor-plan-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/floor-plan-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_main_section_content_unit_manager_unit_manager_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/unit-manager/unit-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_main_section_content_unit_manager_unit_manager_home_unit_manager_home_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/unit-manager/unit-manager-home/unit-manager-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_main_section_content_unit_manager_unit_manager_sub_unit_manager_sub_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/unit-manager/unit-manager-sub/unit-manager-sub.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_main_section_content_amenity_amenity_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/amenity/amenity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_main_section_content_amenity_amenity_home_amenity_home_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/amenity/amenity-home/amenity-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_main_section_content_amenity_amenity_create_amenity_create_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/amenity/amenity-create/amenity-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_main_section_content_packages_packages_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/packages/packages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_main_section_content_packages_packages_home_packages_home_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/packages/packages-home/packages-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_main_section_content_3d_models_3d_model_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/3d-models/3d-model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_main_section_content_3d_models_three_dmodels_home_three_dmodels_home_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/3d-models/three-dmodels-home/three-dmodels-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_main_section_content_3d_models_three_dmodels_create_three_dmodels_create_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/3d-models/three-dmodels-create/three-dmodels-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__component_main_section_content_3d_models_three_dmodels_prod_mapping_three_dmodels_prod_mapping_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/3d-models/three-dmodels-prod-mapping/three-dmodels-prod-mapping.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// importing main section components

// sub division



// sub home




// sub floor plan



// sub unit manager



// sub amenity




// 3d models




var routes = [
    {
        path: '',
        redirectTo: 'division',
        pathMatch: 'full'
    },
    {
        path: 'division',
        component: __WEBPACK_IMPORTED_MODULE_2__component_main_section_content_division_division_component__["a" /* DivisionComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__component_main_section_content_division_division_home_division_home_component__["a" /* DivisionHomeComponent */] },
            { path: 'create', component: __WEBPACK_IMPORTED_MODULE_4__component_main_section_content_division_division_create_division_create_component__["a" /* DivisionCreateComponent */] }
        ]
    },
    {
        path: 'homeproduct',
        component: __WEBPACK_IMPORTED_MODULE_5__component_main_section_content_home_product_home_product_component__["a" /* HomeProductComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__component_main_section_content_home_product_home_product_home_home_product_home_component__["a" /* HomeProductHomeComponent */] },
            { path: 'create', component: __WEBPACK_IMPORTED_MODULE_7__component_main_section_content_home_product_home_product_create_home_product_create_component__["a" /* HomeProductCreateComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_8__component_main_section_content_home_product_home_edit_home_product_edit_home_product_edit_component__["a" /* HomeProductEditComponent */] }
        ]
    },
    {
        path: 'floorplan',
        component: __WEBPACK_IMPORTED_MODULE_9__component_main_section_content_floor_plan_floor_plan_component__["a" /* FloorPlanComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_10__component_main_section_content_floor_plan_floor_plan_home_floor_plan_home_component__["a" /* FloorPlanHomeComponent */] },
            { path: 'create', component: __WEBPACK_IMPORTED_MODULE_11__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["a" /* FloorPlanCreateComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_11__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["a" /* FloorPlanCreateComponent */] }
        ]
    },
    {
        path: 'unitmanager',
        component: __WEBPACK_IMPORTED_MODULE_12__component_main_section_content_unit_manager_unit_manager_component__["a" /* UnitManagerComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_13__component_main_section_content_unit_manager_unit_manager_home_unit_manager_home_component__["a" /* UnitManagerHomeComponent */] },
            { path: 'create', component: __WEBPACK_IMPORTED_MODULE_14__component_main_section_content_unit_manager_unit_manager_sub_unit_manager_sub_component__["a" /* UnitManagerSubComponent */] }
        ]
    },
    {
        path: 'amenity',
        component: __WEBPACK_IMPORTED_MODULE_15__component_main_section_content_amenity_amenity_component__["a" /* AmenityComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_16__component_main_section_content_amenity_amenity_home_amenity_home_component__["a" /* AmenityHomeComponent */] },
            { path: 'create', component: __WEBPACK_IMPORTED_MODULE_17__component_main_section_content_amenity_amenity_create_amenity_create_component__["a" /* AmenityCreateComponent */] }
        ]
    },
    {
        path: 'packages',
        component: __WEBPACK_IMPORTED_MODULE_18__component_main_section_content_packages_packages_component__["a" /* PackagesComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_19__component_main_section_content_packages_packages_home_packages_home_component__["a" /* PackagesHomeComponent */] }
        ]
    },
    {
        path: '3d-models',
        component: __WEBPACK_IMPORTED_MODULE_20__component_main_section_content_3d_models_3d_model_component__["a" /* ThreeDModelsComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_21__component_main_section_content_3d_models_three_dmodels_home_three_dmodels_home_component__["a" /* ThreeDmodelsHomeComponent */] },
            { path: 'create', component: __WEBPACK_IMPORTED_MODULE_22__component_main_section_content_3d_models_three_dmodels_create_three_dmodels_create_component__["a" /* ThreeDmodelsCreateComponent */] },
            { path: 'product_mapping', component: __WEBPACK_IMPORTED_MODULE_23__component_main_section_content_3d_models_three_dmodels_prod_mapping_three_dmodels_prod_mapping_component__["a" /* ThreeDmodelsProdMappingComponent */] }
        ]
    },
    { path: '**', redirectTo: 'division' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-toast-notification></app-toast-notification> -->\r\n<div>\r\n    <!-- displays header section -->\r\n    <div>\r\n        <app-header></app-header>\r\n    </div>\r\n\r\n    <!-- view main-section -->\r\n    <div class=\"main\">\r\n        <!-- displays side nav -->\r\n        <div>\r\n            <app-sidenav></app-sidenav>\r\n        </div>\r\n\r\n        <!-- displays right section -->\r\n        <div id=\"main-sect\">\r\n            <app-main-section></app-main-section>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 17vw auto;\n      grid-template-columns: 17vw auto;\n  height: 88.43vh; }\n\n.toast {\n  width: 20vw;\n  height: 13vh;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  background-color: white;\n  border-radius: 5px;\n  z-index: 9999999 !important;\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n\n.toast-close-btn {\n  float: right;\n  margin-top: 10px;\n  margin-right: 10px;\n  padding: 0; }\n\n.toast-content {\n  font-family: Roboto;\n  font-size: 1.9vh;\n  color: #4D4D4D;\n  text-align: left;\n  height: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n  top: 30%;\n  bottom: 70%;\n  position: absolute; }\n\n.toast .animate {\n  margin-top: 25px;\n  font-size: 21px;\n  text-align: center;\n  -webkit-animation: fadein 2s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 2s; }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RestangularConfigFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_popover__ = __webpack_require__("../../../../ngx-bootstrap/popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_header_header_component__ = __webpack_require__("../../../../../src/app/component/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_main_section_main_section_component__ = __webpack_require__("../../../../../src/app/component/main-section/main-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/component/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_main_section_content_amenity_amenity_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/amenity/amenity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_main_section_content_packages_packages_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/packages/packages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_main_section_content_unit_manager_unit_manager_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/unit-manager/unit-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_main_section_content_division_division_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/division/division.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_main_section_content_division_division_home_division_home_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/division/division-home/division-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_main_section_content_division_division_create_division_create_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/division/division-create/division-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_main_section_shared_shared_header_shared_header_component__ = __webpack_require__("../../../../../src/app/component/main-section/shared/shared-header/shared-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_main_section_shared_shared_body_shared_body_component__ = __webpack_require__("../../../../../src/app/component/main-section/shared/shared-body/shared-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__component_main_section_shared_shared_footer_shared_footer_component__ = __webpack_require__("../../../../../src/app/component/main-section/shared/shared-footer/shared-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__component_main_section_content_home_product_home_product_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__component_main_section_content_home_product_home_product_home_home_product_home_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product-home/home-product-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__component_main_section_content_home_product_home_product_create_home_product_create_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product-create/home-product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__component_main_section_content_floor_plan_floor_plan_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__component_main_section_content_floor_plan_floor_plan_home_floor_plan_home_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-home/floor-plan-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/floor-plan-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__component_main_section_content_unit_manager_unit_manager_home_unit_manager_home_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/unit-manager/unit-manager-home/unit-manager-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__component_main_section_content_unit_manager_unit_manager_sub_unit_manager_sub_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/unit-manager/unit-manager-sub/unit-manager-sub.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__component_main_section_content_amenity_amenity_home_amenity_home_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/amenity/amenity-home/amenity-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__component_main_section_content_amenity_amenity_create_amenity_create_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/amenity/amenity-create/amenity-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__component_main_section_content_packages_packages_home_packages_home_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/packages/packages-home/packages-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__component_main_section_content_3d_models_3d_model_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/3d-models/3d-model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__component_main_section_shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__component_main_section_content_floor_plan_data__ = __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__component_main_section_shared_confirm_modal_confirm_modal__ = __webpack_require__("../../../../../src/app/component/main-section/shared/confirm-modal/confirm-modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__component_main_section_shared_popup_search_popup_search_component__ = __webpack_require__("../../../../../src/app/component/main-section/shared/popup-search/popup-search-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__directives_only_numbers__ = __webpack_require__("../../../../../src/app/directives/only-numbers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__component_main_section_shared_toast_notification_toast_notification_component__ = __webpack_require__("../../../../../src/app/component/main-section/shared/toast-notification/toast-notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_rest_rest_services_service__ = __webpack_require__("../../../../../src/app/services/rest/rest-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__component_main_section_content_home_product_home_edit_home_product_edit_home_product_edit_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-edit/home-product-edit/home-product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__component_header_dropdown_menu_dropdown_menu_component__ = __webpack_require__("../../../../../src/app/component/header/dropdown-menu/dropdown-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__component_main_section_content_home_product_home_product_create_modal_add_home_product_modal_add_home_product_modal_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product-create/modal/add-home-product-modal/add-home-product-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__component_main_section_content_floor_plan_floor_plan_create_widget_template_create_dimension_create_dimension_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/create-dimension/create-dimension.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__component_main_section_shared_shared_header_modal_filter_modal_filter_modal_component__ = __webpack_require__("../../../../../src/app/component/main-section/shared/shared-header/modal/filter-modal/filter-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__component_main_section_content_3d_models_three_dmodels_home_three_dmodels_home_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/3d-models/three-dmodels-home/three-dmodels-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__component_main_section_content_3d_models_three_dmodels_create_three_dmodels_create_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/3d-models/three-dmodels-create/three-dmodels-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__component_main_section_content_3d_models_three_dmodels_prod_mapping_three_dmodels_prod_mapping_component__ = __webpack_require__("../../../../../src/app/component/main-section/content/3d-models/three-dmodels-prod-mapping/three-dmodels-prod-mapping.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//#region Core Imports










// toaster
//import {ToastModule} from 'ng2-toastr/ng2-toastr';
//#endregion
//#region App Imports





// amenity

// packages

// unit manager

// division 



// shared body



// home products



// floorplan





// amenity



// 3d models



//modal import
//import { ModalContentComponent } from './component/main-section/content/floor-plan/floor-plan-create/floor-plan-create.component';
// confirmation modal


// widgets and search filters

// directives
// only numebr directive

//#endregion
// environment


// rest









//#region  rest angular confg
function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(__WEBPACK_IMPORTED_MODULE_41__environments_environment__["a" /* environment */].API_ROOT);
}
//#endregion
var AppModule = (function () {
    function AppModule() {
        if (typeof SVGElement.prototype.contains == 'undefined') {
            SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
        }
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_main_section_main_section_component__["a" /* MainSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__component_sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_15__component_main_section_content_amenity_amenity_component__["a" /* AmenityComponent */],
                __WEBPACK_IMPORTED_MODULE_18__component_main_section_content_division_division_component__["a" /* DivisionComponent */],
                __WEBPACK_IMPORTED_MODULE_27__component_main_section_content_floor_plan_floor_plan_component__["a" /* FloorPlanComponent */],
                __WEBPACK_IMPORTED_MODULE_24__component_main_section_content_home_product_home_product_component__["a" /* HomeProductComponent */],
                __WEBPACK_IMPORTED_MODULE_16__component_main_section_content_packages_packages_component__["a" /* PackagesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__component_main_section_content_unit_manager_unit_manager_component__["a" /* UnitManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_19__component_main_section_content_division_division_home_division_home_component__["a" /* DivisionHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__component_main_section_content_division_division_create_division_create_component__["a" /* DivisionCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_21__component_main_section_shared_shared_header_shared_header_component__["a" /* SharedHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__component_main_section_shared_shared_body_shared_body_component__["a" /* SharedBodyComponent */],
                __WEBPACK_IMPORTED_MODULE_23__component_main_section_shared_shared_footer_shared_footer_component__["a" /* SharedFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__component_main_section_content_home_product_home_product_home_home_product_home_component__["a" /* HomeProductHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_26__component_main_section_content_home_product_home_product_create_home_product_create_component__["a" /* HomeProductCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_28__component_main_section_content_floor_plan_floor_plan_home_floor_plan_home_component__["a" /* FloorPlanHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["a" /* FloorPlanCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_30__component_main_section_content_unit_manager_unit_manager_home_unit_manager_home_component__["a" /* UnitManagerHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_31__component_main_section_content_unit_manager_unit_manager_sub_unit_manager_sub_component__["a" /* UnitManagerSubComponent */],
                __WEBPACK_IMPORTED_MODULE_32__component_main_section_content_amenity_amenity_home_amenity_home_component__["a" /* AmenityHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_33__component_main_section_content_amenity_amenity_create_amenity_create_component__["a" /* AmenityCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_34__component_main_section_content_packages_packages_home_packages_home_component__["a" /* PackagesHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_35__component_main_section_content_3d_models_3d_model_component__["a" /* ThreeDModelsComponent */],
                // widgets
                __WEBPACK_IMPORTED_MODULE_39__component_main_section_shared_popup_search_popup_search_component__["a" /* PopupSearchComponent */],
                // search filter
                __WEBPACK_IMPORTED_MODULE_39__component_main_section_shared_popup_search_popup_search_component__["b" /* SearchFilter */],
                // modal
                //confirm modal
                __WEBPACK_IMPORTED_MODULE_38__component_main_section_shared_confirm_modal_confirm_modal__["a" /* ConfirmationModalComponent */],
                // only number directive
                __WEBPACK_IMPORTED_MODULE_40__directives_only_numbers__["a" /* OnlyNumber */],
                __WEBPACK_IMPORTED_MODULE_29__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["d" /* ModalAddRoomComponent */],
                __WEBPACK_IMPORTED_MODULE_42__component_main_section_shared_toast_notification_toast_notification_component__["a" /* ToastNotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_44__component_main_section_content_home_product_home_edit_home_product_edit_home_product_edit_component__["a" /* HomeProductEditComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["c" /* ModalAddHomeDimensionComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["b" /* ModalAddFeaturesComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["e" /* ModalFacadeDesignComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["f" /* ModalManageFeaturesComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["g" /* ModalManageFloorComponent */],
                __WEBPACK_IMPORTED_MODULE_45__component_header_dropdown_menu_dropdown_menu_component__["a" /* DropdownMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_46__component_main_section_content_home_product_home_product_create_modal_add_home_product_modal_add_home_product_modal_component__["a" /* AddHomeProductModalComponent */],
                __WEBPACK_IMPORTED_MODULE_47__component_main_section_content_floor_plan_floor_plan_create_widget_template_create_dimension_create_dimension_component__["a" /* CreateDimensionComponent */],
                __WEBPACK_IMPORTED_MODULE_48__component_main_section_shared_shared_header_modal_filter_modal_filter_modal_component__["a" /* FilterModalComponent */],
                __WEBPACK_IMPORTED_MODULE_49__component_main_section_content_3d_models_three_dmodels_home_three_dmodels_home_component__["a" /* ThreeDmodelsHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_50__component_main_section_content_3d_models_three_dmodels_create_three_dmodels_create_component__["a" /* ThreeDmodelsCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_51__component_main_section_content_3d_models_three_dmodels_prod_mapping_three_dmodels_prod_mapping_component__["a" /* ThreeDmodelsProdMappingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_popover__["a" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_restangular__["RestangularModule"].forRoot(RestangularConfigFactory),
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_order_pipe__["OrderModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_36__component_main_section_shared_footer_header_data_service__["a" /* FooterHeaderDataService */],
                __WEBPACK_IMPORTED_MODULE_43__services_rest_rest_services_service__["a" /* RestServices */],
                __WEBPACK_IMPORTED_MODULE_42__component_main_section_shared_toast_notification_toast_notification_component__["a" /* ToastNotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_37__component_main_section_content_floor_plan_data__["a" /* DataShared */],
                // {
                //   provide: BrowserXhr, useClass: NgProgressBrowserXhr
                // }
                __WEBPACK_IMPORTED_MODULE_43__services_rest_rest_services_service__["a" /* RestServices */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_38__component_main_section_shared_confirm_modal_confirm_modal__["a" /* ConfirmationModalComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["d" /* ModalAddRoomComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["c" /* ModalAddHomeDimensionComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["b" /* ModalAddFeaturesComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["e" /* ModalFacadeDesignComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["f" /* ModalManageFeaturesComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_main_section_content_floor_plan_floor_plan_create_floor_plan_create_component__["g" /* ModalManageFloorComponent */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/header/assets/icon/logo.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAABECAYAAAAlba0pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABOpJREFUeNrc299rHEUcAPCZycVrqblrj1Yw0YtPPgit+x+ktdUUBB8EQfqQ7lGNr9IHgz4WSpMHoaWK0NZctvggPkgVwfoLt2+CCNGCfVCUprmjanum117jteTW7+yvbi63tzOz890cHTLMZeB255PdnZnv93LUcRySRRmdubwdmgtQ36zP7V7M4pwsQ5gNdYK38LvxUOAisGf9rmJWQJYxjGQJZJsAywzINgmWCZBtIgwdyDYZhgpkAwBDA7IBgaEA2QDBtAPZgMG0AtkAwrQB2YDCQuC95ctf7HjptJEJrgvWwJS1lxYba7dvjtFc3i69YhmouB5XrIQF5LBOa6UEMEKG8kU6NGzvPPSJgYLrcytqB3bBCMAIZbkiYTl759TnhlacwDOmDRgDg5G6tUjpkL2r8qWhBScxeaQGJsAIwKBlRei0dx35xkiFU5gVlYGCMAKdvMIyQe3HXvvOUMKlmO6lgZIweAeFPuoBX//ekMJpWMeEgYowtyUukADQNoRwGhfoRGBKmH8UAFIATm8EMuSdRyxQE8z98bZqcItOXzJ64hC3VBuAmmHEf+HdohEgy2ivGAKRYOs22wGQPv7WL1ltgonTbl37748fn0SCRcstqHv5EWahPk3wy880v20PwCxkWHAF5/lRrkPdCnUVE8b/kvW53SuNT6dNgFmIMOJbmtHZEgsYwoKOmx8fMgFlIcK29lrndAM3wIJy46OXTYBZWLC4HYouYCwsKP9YL5qAsjBg/faWaYGJsBA4P2nCwC3dsKSoQBUoDAuBHx5wgTphIvGcLFAaFpS/zz0HQGLpgolG4qJAZVgIPLsPnkEOTA+TyaEkAVPDQuCZvd4tmhImm/2KA2qDPQBO+LeoOkwlb9kN1A5LAArDVDPOARANFgOUgqniCOncb3da185gwoJy98oPJ9dat+qyMDXc2r1G525tO8tve/+Jd34yMWEj+04ZhA3b7aUro2vNGw1cHIet1ktsS4Gw/KOEDm+plo/9hgIc2f+BAXGRTdlQEYCkXfu9JAtkKWBw7kcg6MxVyyeWtAJHnj9r8MQrnKAIFV7yyEEeyFLC4Ahwcsqq47M1LcDCC/MGdWFuZplwnCqQaYAFe8Hq+Fw9FbAwuQBXjNo8XUdpJBRSBDJNsGC7pAwsTLqfv9leHpL6IVA6INMIC4o0sHAQYNSHhVFBeiDTDJMGFg6eN3hC1U3qrDteeiBDgAkDPRix/YxxJBjQA2RIsETgelhX/KYJyBBhscDeMP1AhgzbAOwP0wh0nFyu0/prhTirmLAQOPb2r2Voj/aHRYGO3/ivg3HwbhhX97+e86HyPg4cLt1ZZtffO3ASYBVkmGJRvoLWv58dftW9LevvTiwArIIMq9ROPHOMx4DE+6ACC2jduXTUfQRo9HsF5eN/mgCrYsCuzowuiE0occWJNM6DPnf8DjQdaDrW7W/fCCcv2v2lifHZZZ6gqWLBEIFW8+sj62Zl2usbIeNzNQ+IBEMAWs2vKqbQ9uvqzBgfUAUTxkvz4tSihmewJ6zvxtkfWAULpgkIMNNUCnkUgcKwlECrefGwmSpYlQRKwxSBAJtKjDqE0gyCQGWYJFAIJpUgSgCmhgkChWHSqb0YoDZYAlAKFrvOJRV/h1/FgMWsgxdkYd7y5zhKtTxbe0r1vTJ1ZNJSPs//AgwAJOGXboXKVMAAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/app/component/header/dropdown-menu/dropdown-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-menu\" *ngIf=\"show\">\n    <ul class=\"menu-list\">\n        <li (click)=\"logout()\"><a href=\"javascript:void(0)\"><i class=\"iconned-edit right-specified\" aria-hidden=\"true\"></i>Logout</a></li>\n        <li (click)=\"settings()\"><a href=\"javascript:void(0)\"><i class=\"iconned-edit\" aria-hidden=\"true\"></i> User Settings</a></li>\n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/header/dropdown-menu/dropdown-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-menu {\n  width: 13vw;\n  height: auto;\n  background-color: white;\n  box-shadow: -2px -2px 23px -3px rgba(0, 0, 0, 0.49);\n  box-shadow: 2px 2px 23px -3px rgba(0, 0, 0, 0.49);\n  border-radius: 5px;\n  position: absolute;\n  right: 40px;\n  margin-top: 10px;\n  z-index: 1000; }\n\n.menu-list {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 0; }\n\n.menu-list li {\n  padding-left: 0;\n  padding-right: 0;\n  line-height: 25px;\n  list-style: none;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.menu-list li:hover {\n  background-color: #ECEFF1; }\n\n.menu-list a {\n  text-decoration: none; }\n\n.menu-list a:hover {\n  text-decoration: none; }\n\n.menu-list a:focus {\n  text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/header/dropdown-menu/dropdown-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropdownMenuComponent = (function () {
    function DropdownMenuComponent(_eref) {
        this._eref = _eref;
        this.show = false;
        this.OnLostFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DropdownMenuComponent.prototype.ngOnInit = function () {
    };
    DropdownMenuComponent.prototype.onClick = function (event) {
        if (event && !this._eref.nativeElement.contains(event.target) && event.path[1].className !== 'user-menu-label') {
            this.close();
        }
    };
    DropdownMenuComponent.prototype.close = function () {
        this.show = false;
        this.OnLostFocus.emit(null);
    };
    DropdownMenuComponent.prototype.logout = function () {
        this.close();
    };
    DropdownMenuComponent.prototype.settings = function () {
        this.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownMenuComponent.prototype, "show", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DropdownMenuComponent.prototype, "OnLostFocus", void 0);
    DropdownMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dropdown-menu',
            template: __webpack_require__("../../../../../src/app/component/header/dropdown-menu/dropdown-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/header/dropdown-menu/dropdown-menu.component.scss")],
            host: {
                '(document:click)': 'onClick($event)',
            },
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], DropdownMenuComponent);
    return DropdownMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height:11.57vh; border:solid 0.5px rgb(228, 228, 228); display: block; width: 100%;\">\r\n    <img id=\"header-logo\" [src]=\"logo\" />\r\n    <div class=\"user-menu-label\">\r\n        <a href=\"javascript:void(0)\" (click)=\"show = !show ? true : false\">John Doe</a>\r\n    </div>\r\n    <app-dropdown-menu [show]=\"show\" (OnLostFocus)=\"OnLostFocus()\"></app-dropdown-menu>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header-logo {\n  margin-left: 1.41vw;\n  width: 2.76vw;\n  height: 7vh;\n  margin-top: 2.68vh; }\n\n.user-menu-label {\n  position: absolute;\n  right: 40px;\n  color: black;\n  top: 3.68vh; }\n\n.user-menu-label a {\n  text-decoration: none; }\n\n.user-menu-label a:hover {\n  text-decoration: none; }\n\n.user-menu-label a:focus {\n  text-decoration: none;\n  color: #616161; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.logo = __webpack_require__("../../../../../src/app/component/header/assets/icon/logo.png");
        this.show = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.OnLostFocus = function () {
        this.show = false;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/component/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/header/header.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/3d-models/3d-model.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"division home content-padding\">\r\n    <div class=\"content\">\r\n\r\n        <!-- header  -->\r\n        <app-shared-header></app-shared-header>\r\n\r\n        <!-- body -->\r\n        <div>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/3d-models/3d-model.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".linkOpen, .linkOpen:hover, .linkOpen:focus {\n  color: #42A5F5;\n  list-style: none;\n  text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/3d-models/3d-model.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeDModelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThreeDModelsComponent = (function () {
    function ThreeDModelsComponent(dataService) {
        this.dataService = dataService;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [true, true, '3D Models', '', true, false, false, true, true, 'active'];
        // footer format 
        // ------
        // 0 footer2:string;
        // 1 saveFinishButtonHidden:boolean;
        // 2 nextButtonHidden:boolean;
        // 3 backButtonHidden:boolean;
        // 4 paginationHidden:boolean;
        this.setFooter = ['', true, true, true, false];
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
    }
    ThreeDModelsComponent.prototype.ngOnInit = function () {
    };
    ThreeDModelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-3d-models',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/3d-models/3d-model.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/3d-models/3d-model.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], ThreeDModelsComponent);
    return ThreeDModelsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/3d-models/three-dmodels-create/three-dmodels-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-body custom-scrolling\">\r\n\t<div class=\"action-content\">\r\n\t\t<!--header part-->\r\n\t\t<ul class=\"app-tab\">\r\n\t\t\t<li class=\"active\">\r\n\t\t\t\t<a href=\"javascript:void(0)\">General</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<!-- content part -->\r\n\t\t<div class=\"action-content-wrapper\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<!-- GENERAL -->\r\n\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t<p class=\"action-title\">GENERAL</p>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"text-normal\">Model Name</label>\r\n\t\t\t\t\t\t<input id=\"model_name\" type=\"text\" class=\"form-control\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"text-normal\">Image File</label>\r\n\t\t\t\t\t\t<div class=\"file-input\">\r\n\t\t\t\t\t\t\t<label for=\"upload\">\r\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\" class=\"btn btn-default border-nothing text-ellipse\">\r\n\t\t\t\t\t\t\t\t\t<b>{{filename}}</b>\r\n\t\t\t\t\t\t\t\t\t<a (click)=\"removeImage(1)\" href=\"javascript:void(0)\" class=\"action-link\" *ngIf=\"filename != 'Browse'\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"iconned-delete-circle\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<input type=\"file\" id=\"upload\" name=\"model_upload\" style=\"display:none\" (change)=\"fileChanged($event, 1)\" accept=\"image/*\">\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- model specification -->\r\n\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t<p class=\"action-title\">MODEL SPECIFICATION</p>\r\n\t\t\t\t\t<div class=\"form-group ms col-sm-6\">\r\n\t\t\t\t\t\t<label class=\"text-normal\">Height</label>\r\n\t\t\t\t\t\t<input id=\"model_height\" type=\"number\" class=\"form-control\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group ms col-sm-6\">\r\n\t\t\t\t\t\t<label class=\"text-normal\">Width</label>\r\n\t\t\t\t\t\t<input id=\"model_width\" type=\"number\" class=\"form-control\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group ms col-sm-6\">\r\n\t\t\t\t\t\t<label class=\"text-normal\">Length</label>\r\n\t\t\t\t\t\t<input id=\"model_length\" type=\"number\" class=\"form-control\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- materials -->\r\n\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<span class=\"action-title\">MATERIALS</span>\r\n\t\t\t\t\t\t<span style=\"margin-right:6px; color:#42A5F5; float:right; cursor:pointer; font-size:14px;\" class=\"action-title\" (click)=\"addHomeDimension()\">\r\n\t\t\t\t\t\t\t<i class=\"iconned-plus-regular\" style=\"margin-right:5px; height:10px;\"></i>Add materials</span>\r\n\t\t\t\t\t\t<!-- add dimension -->\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<table class=\"app-table-mini\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<th style=\"width:20%;\">ID</th>\r\n\t\t\t\t\t\t\t\t<th style=\"width:60%;\">MATERIAL NAME</th>\r\n\t\t\t\t\t\t\t\t<th style=\"width:auto;\"></th>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>001</td>\r\n\t\t\t\t\t\t\t\t\t<td style=\"padding-left:0.5vw;\">Hallway Scarlet</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"icon-container\" style=\"float:left;\">\r\n\t\t\t\t\t\t\t\t\t\t<a style=\"margin-right:10px;\" href=\"javascript:void(0)\" class=\"iconned-container\" (click)=\"editHomeDimension(dim)\"><i class=\"iconned-edit\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t<a style=\"margin-right:10px;\" href=\"javascript:void(0)\" class=\"iconned-container\" (click)=\"markHomeDimensionForDeletion(dim, 'home_dimensions')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"iconned-delete\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- footer  -->\r\n<app-shared-footer></app-shared-footer>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/3d-models/three-dmodels-create/three-dmodels-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ms.col-sm-6 {\n  padding-right: 10px !important;\n  padding-left: 0px !important; }\n\n.ms.col-sm-6:nth-child(3) {\n  padding-right: 0px !important;\n  padding-left: 10px !important; }\n\ninput[type=\"number\"]::-webkit-outer-spin-button, input[type=\"number\"]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\ninput[type=\"number\"] {\n  -moz-appearance: textfield; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/3d-models/three-dmodels-create/three-dmodels-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeDmodelsCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThreeDmodelsCreateComponent = (function () {
    function ThreeDmodelsCreateComponent(dataService) {
        this.dataService = dataService;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [false, false, '3D Models', 'Create New', false, true, true, true, true, 'disable'];
        // footer format 
        // ------
        // 0 footer2:string;
        // 1 saveFinishButtonHidden:boolean;
        // 2 nextButtonHidden:boolean;
        // 3 backButtonHidden:boolean;
        // 4 paginationHidden:boolean;
        this.setFooter = ['footer2', false, true, false, true];
        this.filename = 'Browse';
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
    }
    ThreeDmodelsCreateComponent.prototype.ngOnInit = function () {
    };
    ThreeDmodelsCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-three-dmodels-create',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/3d-models/three-dmodels-create/three-dmodels-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/3d-models/three-dmodels-create/three-dmodels-create.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], ThreeDmodelsCreateComponent);
    return ThreeDmodelsCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/3d-models/three-dmodels-home/three-dmodels-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-body\">\r\n  <table class=\"app-table\">\r\n    <thead>\r\n      <th style=\"width:15%;\">MODEL CODE</th>\r\n      <th style=\"width:25%;\">MODEL NAME</th>\r\n      <th style=\"width:20%;\">TAGS</th>\r\n      <th style=\"width:10%;\"></th>\r\n      <th style=\"width:auto;\"></th>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>0001</td>\r\n        <td>Diamond</td>\r\n        <td>Standard</td>\r\n        <td>\r\n          <a class=\"linkOpen\" routerLink='#'>Open</a>\r\n        </td>\r\n        <td>\r\n          <a (click)=\"openModal(template, item.fp_design_id, i)\" href=\"javascript:void(0)\" class=\"action-link iconned-container left-specified-25\">\r\n            <i class=\"iconned-trashcan\"></i> Delete</a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/3d-models/three-dmodels-home/three-dmodels-home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".linkOpen, .linkOpen:hover, .linkOpen:focus {\n  color: #42A5F5;\n  list-style: none;\n  text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/3d-models/three-dmodels-home/three-dmodels-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeDmodelsHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThreeDmodelsHomeComponent = (function () {
    function ThreeDmodelsHomeComponent(dataService) {
        this.dataService = dataService;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [true, true, '3D Models', '', true, false, false, true, true, 'active'];
        dataService.varHeader.next(this.setHeader);
    }
    ThreeDmodelsHomeComponent.prototype.ngOnInit = function () {
    };
    ThreeDmodelsHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-three-dmodels-home',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/3d-models/three-dmodels-home/three-dmodels-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/3d-models/three-dmodels-home/three-dmodels-home.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], ThreeDmodelsHomeComponent);
    return ThreeDmodelsHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/3d-models/three-dmodels-prod-mapping/three-dmodels-prod-mapping.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-body\">\r\n  <table class=\"app-table\">\r\n    <thead>\r\n      <th style=\"width:10%;\">ID</th>\r\n      <th style=\"width:15%;\">PRODUCT NAME</th>\r\n      <th style=\"width:15%;\">MODEL</th>\r\n      <th style=\"width:15%;\">MATERIAL</th>\r\n      <th style=\"width:15%;\">COLOR</th>\r\n      <th style=\"width:15%;\">SURFACE</th>\r\n      <th style=\"width:auto;\"></th>\r\n    </thead>\r\n    <tbody>\r\n\t<tr>\r\n\t\t<td>0001</td>\r\n\t\t<td>Basin Oval</td>\r\n\t\t<td>Basin423423</td>\r\n\t\t<td>Glossy3775</td>\r\n\t\t<td>#ff04002</td>\r\n\t\t<td>Table</td>\r\n\t\t<td>\r\n\t\t\t<a class=\"linkOpen\" routerLink='#'>Manage 3D Files</a>\r\n\t\t</td>\r\n\t</tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/3d-models/three-dmodels-prod-mapping/three-dmodels-prod-mapping.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/3d-models/three-dmodels-prod-mapping/three-dmodels-prod-mapping.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeDmodelsProdMappingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThreeDmodelsProdMappingComponent = (function () {
    function ThreeDmodelsProdMappingComponent(dataService) {
        this.dataService = dataService;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [true, true, 'Existing Products', '', true, true, false, false, true, 'active'];
        dataService.varHeader.next(this.setHeader);
    }
    ThreeDmodelsProdMappingComponent.prototype.ngOnInit = function () {
    };
    ThreeDmodelsProdMappingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-three-dmodels-prod-mapping',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/3d-models/three-dmodels-prod-mapping/three-dmodels-prod-mapping.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/3d-models/three-dmodels-prod-mapping/three-dmodels-prod-mapping.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], ThreeDmodelsProdMappingComponent);
    return ThreeDmodelsProdMappingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/amenity/amenity-create/amenity-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-body\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/amenity/amenity-create/amenity-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/amenity/amenity-create/amenity-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmenityCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AmenityCreateComponent = (function () {
    function AmenityCreateComponent(dataService) {
        this.dataService = dataService;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [false, false, 'Amenity', 'Create New', false, true, true, true, true, 'disable'];
        // footer format 
        // ------
        // 0 footer2:string;
        // 1 saveFinishButtonHidden:boolean;
        // 2 nextButtonHidden:boolean;
        // 3 backButtonHidden:boolean;
        // 4 paginationHidden:boolean;
        this.setFooter = ['footer2', false, true, true, true];
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
    }
    AmenityCreateComponent.prototype.ngOnInit = function () {
    };
    AmenityCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-amenity-create',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/amenity/amenity-create/amenity-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/amenity/amenity-create/amenity-create.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], AmenityCreateComponent);
    return AmenityCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/amenity/amenity-home/amenity-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-body\">\r\n    <table class=\"app-table\">\r\n        <thead>\r\n            <th>ID</th>\r\n            <th>AMENITY NAME</th>\r\n            <th>DIVISION</th>\r\n            <th></th>\r\n            <th></th>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>0001</td>\r\n                <td>Suwiming Pool</td>\r\n                <td>Can be divided</td>\r\n                <td><a routerLink='#'>Open</a></td>\r\n                <td>Delete</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/amenity/amenity-home/amenity-home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/amenity/amenity-home/amenity-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmenityHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AmenityHomeComponent = (function () {
    function AmenityHomeComponent(dataService) {
        this.dataService = dataService;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [true, true, 'Amenity', '', true, false, false, false, true, 'active'];
        // footer format 
        // ------
        // 0 footer2:string;
        // 1 saveFinishButtonHidden:boolean;
        // 2 nextButtonHidden:boolean;
        // 3 backButtonHidden:boolean;
        // 4 paginationHidden:boolean;
        this.setFooter = ['', true, true, true, false];
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
    }
    AmenityHomeComponent.prototype.ngOnInit = function () {
    };
    AmenityHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-amenity-home',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/amenity/amenity-home/amenity-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/amenity/amenity-home/amenity-home.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], AmenityHomeComponent);
    return AmenityHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/amenity/amenity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"division home content-padding\">\r\n    <div class=\"content\">\r\n\r\n        <!-- header  -->\r\n        <app-shared-header></app-shared-header>\r\n\r\n        <!-- body -->\r\n        <div>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n        <!-- footer -->\r\n        <app-shared-footer></app-shared-footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/amenity/amenity.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/amenity/amenity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmenityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AmenityComponent = (function () {
    function AmenityComponent(dataService) {
        this.dataService = dataService;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [true, true, 'Amenity', '', true, false, false, false, true, 'active'];
        // footer format 
        // ------
        // 0 footer2:string;
        // 1 saveFinishButtonHidden:boolean;
        // 2 nextButtonHidden:boolean;
        // 3 backButtonHidden:boolean;
        // 4 paginationHidden:boolean;
        this.setFooter = ['', true, true, true, false];
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
    }
    AmenityComponent.prototype.ngOnInit = function () {
    };
    AmenityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-amenity',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/amenity/amenity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/amenity/amenity.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], AmenityComponent);
    return AmenityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/division/division-create/division-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-body custom-scrolling\">\r\n    <div class=\"action-content\">\r\n        <!--header part-->\r\n        <ul class=\"app-tab\">\r\n            <li class=\"active\"><a href=\"javascript:void(0)\">Details</a></li>\r\n        </ul>\r\n        <div class=\"action-content-wrapper\">\r\n            <div class=\"row\">\r\n                <!-- GENERAL -->\r\n                <div class=\"col-sm-4\">\r\n                    <p class=\"action-title\">GENERAL</p>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"text-normal\">Division Name*</label>\r\n                        <input class=\"form-control\" id=\"division_name\" name=\"division_name\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"text-normal\">Code</label>\r\n                        <input class=\"form-control\" id=\"division_code\" name=\"division_code\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"text-normal\">Type*</label>\r\n                        <!-- Popup for division type -->\r\n                        <ng-template #popTemplate>\r\n                            <div class=\"modal-division-types\">\r\n                                <div class=\"m-header\">\r\n                                    <span class=\"m-header-title\" style=\"float: left;\">Division Type</span>\r\n                                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"pop.hide()\" style=\"float: right; vertical-align: middle\">\r\n                                        <span aria-hidden=\"true\">&times;</span>\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"option-list\">\r\n                                    <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\" style=\"height: auto!important; border-right: none!important; padding-top: 15px;padding-bottom: 10px;\">\r\n                                        <a [ngClass]=\"selectedOption == '1' ? 'active' : ''\" (click)=\"setSelection('1')\" class=\"nav-link\" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"false\">Precinct</a>\r\n                                        <a [ngClass]=\"selectedOption == '2' ? 'active' : ''\" (click)=\"setSelection('2')\" class=\"nav-link\" id=\"v-pills-profile-tab\" data-toggle=\"pill\" href=\"\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\">Amenity</a>\r\n                                        <a [ngClass]=\"selectedOption == '3' ? 'active' : ''\" (click)=\"setSelection('3')\" class=\"nav-link\" id=\"v-pills-messages-tab\" data-toggle=\"pill\" href=\"\" role=\"tab\" aria-controls=\"v-pills-messages\" aria-selected=\"false\">Park</a>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"padding-specified option-list\">\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" class=\"form-control\" style=\"border-radius: 20px;\" placeholder=\"Add New\">\r\n                                        <span class=\"input-group-btn\">\r\n                                            <a href=\"javascript:void(0)\" class=\"iconned-container iconned-container-left-specified\"><i class=\"iconned-plus\"></i></a>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"padding-specified\">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"pop.hide()\" class=\"pull-left\" style=\"\">Cancel</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-primary pull-right more-rounded-button\" style=\"\">Confirm</a>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                        <!-- Popup for division type -->\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" [popover]=\"popTemplate\" placement=\"right\" #pop=\"bs-popover\" [outsideClick]=\"true\">\r\n                            <span class=\"input-group-btn\">\r\n                              <a href=\"javascript:void(0)\" class=\"iconned-container left-specified\"><i class=\"iconned-settings\"></i></a>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"text-normal\">Image File</label>\r\n                        <div class=\"file-input\">\r\n                            <label for=\"upload\">\r\n                                <span aria-hidden=\"true\" class=\"btn btn-default border-nothing text-ellipse\">{{filename}}</span>\r\n                                <input type=\"file\" id=\"upload\" name=\"division_image_input\" style=\"display:none\" (change)=\"onChange($event)\" accept=\"image/*\">\r\n                              </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"text-normal\">Description</label>\r\n                        <textarea class=\"form-control not-resizable\" rows=\"5\" id=\"division_description\" name=\"division_description\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <!-- AMENITIES -->\r\n                <div class=\"col-sm-4\">\r\n                    <span class=\"action-title\">AMENITIES</span>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            AMENITIES\r\n                        </div>\r\n                        <table class=\"app-table-mini\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Mary</td>\r\n                                    <td>292.1</td>\r\n                                    <td class=\"icon-container\">\r\n                                        <a href=\"javascript:void(0)\" class=\"iconned-container\"><i class=\"iconned-edit\"></i></a>\r\n                                        <a href=\"javascript:void(0)\" class=\"iconned-container\"><i class=\"iconned-delete\"></i></a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<!-- Division Type -->\r\n<!-- <div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content modal-division-types\">\r\n            <div class=\"m-header\">\r\n                <span class=\"m-header-title\">Division Type</span>\r\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                This is static modal, backdrop click will not close it. Click <b>&times;</b> to close modal.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<!-- Division Type .modal-backdrop -->"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/division/division-create/division-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-division-types {\n  width: 16vw;\n  background-color: white; }\n\n.m-header {\n  height: 50px;\n  border-bottom: 1px solid #E0E0E0;\n  padding: 10px; }\n\n.m-header-title {\n  font-size: 17px;\n  font-family: Roboto;\n  font-weight: bold;\n  top: 10px; }\n\n.popover {\n  max-width: 18vw; }\n\n.popover.right > .arrow {\n  display: none !important; }\n\n.popover-content {\n  padding: 0; }\n\n.option-list {\n  border-bottom: 1px solid #E0E0E0; }\n\n.padding-specified {\n  padding: 15px; }\n\n.more-rounded {\n  border-radius: 10px; }\n\n.more-rounded-button {\n  border-radius: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/division/division-create/division-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DivisionCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DivisionCreateComponent = (function () {
    function DivisionCreateComponent(dataService) {
        this.dataService = dataService;
        this.filename = "Browse";
        this.selectedOption = "1";
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [false, false, 'Division', 'Create New', false, true, true, true, true, 'disable'];
        // footer format 
        // ------
        // 0 footer2:string;
        // 1 saveFinishButtonHidden:boolean;
        // 2 nextButtonHidden:boolean;
        // 3 backButtonHidden:boolean;
        // 4 paginationHidden:boolean;
        this.setFooter = ['footer2', false, true, true, true];
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
    }
    DivisionCreateComponent.prototype.ngOnInit = function () {
    };
    DivisionCreateComponent.prototype.onChange = function (event) {
        var files = event.srcElement.files;
        this.filename = files[0].name;
    };
    DivisionCreateComponent.prototype.setSelection = function (index) {
        this.selectedOption = index;
    };
    DivisionCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-division-create',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/division/division-create/division-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/division/division-create/division-create.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], DivisionCreateComponent);
    return DivisionCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/division/division-home/division-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-body\">\r\n    <table class=\"app-table\">\r\n        <thead>\r\n            <th>DIVISION CODE</th>\r\n            <th>DIVISION NAME</th>\r\n            <th>DIVISION CATEGORY</th>\r\n            <th></th>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>0001</td>\r\n                <td>Test name</td>\r\n                <td>Test Category</td>\r\n                <td>\r\n                    <a routerLink='#'>Edit</a>\r\n                    <a>Delete</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/division/division-home/division-home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/division/division-home/division-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DivisionHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DivisionHomeComponent = (function () {
    function DivisionHomeComponent(dataService) {
        this.dataService = dataService;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [true, true, 'Division', '', true, false, false, false, true, 'active'];
        // footer format 
        // ------
        // 0 footer2:string;
        // 1 saveFinishButtonHidden:boolean;
        // 2 nextButtonHidden:boolean;
        // 3 backButtonHidden:boolean;
        // 4 paginationHidden:boolean;
        this.setFooter = ['', true, true, true, false];
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
    }
    DivisionHomeComponent.prototype.ngOnInit = function () {
    };
    DivisionHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-division-home',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/division/division-home/division-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/division/division-home/division-home.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], DivisionHomeComponent);
    return DivisionHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/division/division.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"division home content-padding\">\r\n    <div class=\"content\">\r\n  \r\n      <!-- header  -->\r\n      <app-shared-header></app-shared-header>\r\n  \r\n      <!-- body -->\r\n      <div>\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n  \r\n      <!-- footer -->\r\n      <app-shared-footer></app-shared-footer>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/division/division.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/division/division.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DivisionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DivisionComponent = (function () {
    function DivisionComponent(dataService) {
        this.dataService = dataService;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [true, true, 'Division', '', true, false, false, false, true, 'active'];
        // footer format 
        // ------
        // 0 footer2:string;
        // 1 saveFinishButtonHidden:boolean;
        // 2 nextButtonHidden:boolean;
        // 3 backButtonHidden:boolean;
        // 4 paginationHidden:boolean;
        this.setFooter = ['', true, true, true, false];
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
        //console.log('environment: ', environment.url);
    }
    DivisionComponent.prototype.ngOnInit = function () {
    };
    DivisionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-division',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/division/division.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/division/division.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], DivisionComponent);
    return DivisionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataShared; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataShared = (function () {
    function DataShared() {
        this.roomTypesList = ['Bedroom'];
        // LEVEL  -------------------------
        this.levelList = [];
        //HOME DIMENSION  -------------------------
        this.homeDimensionList = [];
        // FEATURE -------------------------
        this.featureList = ['Study', 'Walk-in Pantry', 'Master Bed at Front', 'Master Bed at Back', 'Veranda', 'Closet', 'Garden', 'Stairs', 'Laundry', 'Basement', 'Hallway'];
        this.featureInputList = [];
        // FACADE DESIGN -------------------------
        this.facadeList = ['Khelsey', 'John', 'Robert', 'Nikky'];
        this.facadeInputlist = [];
    }
    // FUNCTIONS -------------------------    
    DataShared.prototype.dataSubmitLevel = function (roomType, roomName, dimension, imageFile) {
        this.levelList.push({ roomType: roomType, roomName: roomName, dimension: dimension, imageFile: imageFile });
    };
    DataShared.prototype.dataSubmitHomeDimension = function (spaceName, dimension, imageFile) {
        this.homeDimensionList.push({ spaceName: spaceName, dimension: dimension, imageFile: imageFile });
    };
    DataShared.prototype.dataSubmitFeature = function (feature) {
        this.featureList.push(feature);
    };
    DataShared = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataShared);
    return DataShared;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/floor-plan-create.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #AddHomeProductModal>\r\n    <app-add-home-product-modal (OnClose)=\"onHomeProductClose()\" (OnSubmit)=\"OnAddHomeProductModalSubmitted($event)\"></app-add-home-product-modal>\r\n</ng-template>\r\n<ng-template #confirmModal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"pull-left\">Message</h4>\r\n        <a (click)=\"bsModalRef.hide()\" href=\"javascript:void(0)\" class=\"pull-right\">\r\n            <i class=\"iconned-close-mini\"></i>\r\n        </a>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        {{modalMessage}}\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <a href=\"javascript:void(0)\" class=\"link-blue pull-left\" (click)=\"bsModalRef.hide()\">Do not delete</a>\r\n        <button class=\"blue-button\" (click)=\"_modalConfirm()\">Yes</button>\r\n    </div>\r\n</ng-template>\r\n<app-confirm-modal style=\"display: none;\" [message]=\"'Are you sure you want to perform this action? This cannot be undone.'\" [title]=\"'Confirm'\"></app-confirm-modal>\r\n<div class=\"s-body custom-scrolling\">\r\n    <div class=\"action-content\">\r\n        <!--header part-->\r\n        <ul class=\"app-tab\">\r\n            <li class=\"active\"><a href=\"javascript:void(0)\">Details</a></li>\r\n        </ul>\r\n        <div class=\"action-content-wrapper\">\r\n            <div class=\"row\">\r\n                <!-- GENERAL -->\r\n                <div class=\"col-sm-4\">\r\n                    <p class=\"action-title\">GENERAL</p>\r\n                    <div class=\"form-group\" *ngIf=\"operationMode == 'create'\">\r\n                        <label class=\"text-normal\">Home Product</label>\r\n                        <popup-search-component #popupSearch_homeProducts (OnItemSelected)=\"onItemSelected($event)\" (OnRequestAdd)=\"onRequestAdd()\" [group_style]=\"true\" [loadedData]=\"searchData\" [widthExp]=\"true\">\r\n                        </popup-search-component>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"text-normal\">Floorplan Name</label>\r\n                        <input id=\"floorplan_name\" type=\"text\" class=\"form-control\" aria-describedby=\"sizing-addon2\" [(ngModel)]=\"floorPlanData.fp_design_name\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"text-normal\">Facade Designs</label>\r\n                        <input id=\"facade_design\" type=\"text\" [readonly]=\"true\" class=\"form-control background-transparent\" aria-describedby=\"sizing-addon2\" (click)=\"facadeDesign()\" [(ngModel)]=\"facadeDesignList\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <label class=\"text-normal\">Floor Area</label>\r\n                                <input class=\"form-control\" id=\"floor_area\" [OnlyNumber]=\"true\" [(ngModel)]=\"floorPlanData.floor_area\">\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <label class=\"text-normal\">Price</label>\r\n                                <input class=\"form-control\" id=\"price\" [OnlyNumber]=\"true\" [(ngModel)]=\"floorPlanData.base_price\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"form-group\">\r\n                        <label class=\"text-normal\">3D Accessories</label>\r\n                        <input id=\"accessories\" type=\"text\" class=\"form-control\" aria-describedby=\"sizing-addon2\" [(ngModel)]=\"floorPlanData.base_price\">\r\n                    </div> -->\r\n                    <div class=\"form-group\">\r\n                        <label class=\"text-normal\">Features</label>\r\n                        <div class=\"input-group\">\r\n                            <input id=\"features\" [readonly]=\"true\" type=\"text\" class=\"form-control background-transparent\" (click)=\"addFeatures()\" [(ngModel)]=\"featureList\">\r\n                            <span class=\"input-group-btn\">\r\n                              <a href=\"javascript:void(0)\" class=\"iconned-container left-specified\" (click)=\"manageFeatures()\"><i class=\"iconned-settings\"></i></a>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <p class=\"action-title\">LEVEL</p>\r\n                    <div class=\"card\">\r\n                        <table class=\"app-table-mini\">\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of levelsAndRoomsArr, let i = index\">\r\n                                    <table class=\"app-table-mini\">\r\n                                        <tr>\r\n                                            <td>{{item.floor.level}}</td>\r\n                                            <td>{{item.floor.floor_dimension}}</td>\r\n                                            <td class=\"icon-container\">\r\n                                                <a href=\"javascript:void(0)\" class=\"iconned-container\" (click)=\"editFloor(item.floor)\"><i class=\"iconned-edit\"></i></a>\r\n                                                <!-- <a (click)=\"openConfirmModal()\" href=\"javascript:void(0)\" class=\"iconned-container\"><i class=\"iconned-delete\"></i></a> -->\r\n                                            </td>\r\n\r\n                                            <td style=\"float:right;\">\r\n                                                <!-- <a href=\"javascript:void(0)\" class=\"link-blue\" (click)=\"addRoom()\"><i class=\"no-padding iconned-plus-regular\"></i> Add room</a> -->\r\n                                                <span style=\"margin-right:15px; margin-top:12px; color:#42A5F5; float:right; cursor:pointer;font-size:14px;\" class=\"action-title\" (click)=\"addRoom(item.floor)\"><i class=\"iconned-plus-regular\" style=\"margin-right:5px; height:10px;\"></i>Add room</span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr class=\"child-item\" *ngFor=\"let child of item.rooms\">\r\n                                            <td>{{child.space_name}}</td>\r\n                                            <td>{{getLevelContent(child)}}</td>\r\n                                            <td>\r\n                                                <!-- <a href=\"javascript:void(0)\" class=\"iconned-container\" (click)=\"editSpace(child)\"><i class=\"iconned-edit\"></i></a> -->\r\n                                            </td>\r\n                                            <td></td>\r\n                                        </tr>\r\n                                    </table>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div>\r\n                        <span class=\"action-title\">HOME DIMENSIONS</span>\r\n                        <span style=\"margin-right:6px; color:#42A5F5; float:right; cursor:pointer; font-size:14px;\" class=\"action-title\" (click)=\"addHomeDimension()\"><i class=\"iconned-plus-regular\" style=\"margin-right:5px; height:10px;\"></i>Add home dimension</span>\r\n                        <!-- add dimension -->\r\n\r\n                    </div>\r\n                    <div class=\"card\">\r\n                        <table class=\"app-table-mini\">\r\n                            <thead>\r\n                                <th>NAME</th>\r\n                                <th>DIMENSION</th>\r\n                                <th></th>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr class=\"listHoverLightGray\" *ngFor=\"let dim of homeDimensionList; let i = index;\">\r\n                                    <td>{{ dim.space.display }}</td>\r\n                                    <td style=\"padding-left:0.5vw;\">{{ getContent(dim.home_dimension ? dim.home_dimension : dim.home_dimension_src) }}</td>\r\n                                    <td class=\"icon-container\" style=\"float:right;\">\r\n                                        <!-- <a style=\"margin-right:10px;\" href=\"javascript:void(0)\" class=\"iconned-container\" (click)=\"editHomeDimension(dim)\"><i class=\"iconned-edit\"></i></a> -->\r\n                                        <a style=\"margin-right:10px;\" href=\"javascript:void(0)\" class=\"iconned-container\" (click)=\"markHomeDimensionForDeletion(dim, 'home_dimensions')\"><i class=\"iconned-delete\"></i></a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<app-shared-footer (OnSubmit)=\"onSubmit()\"></app-shared-footer>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/floor-plan-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background-transparent {\n  background-color: transparent !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/floor-plan-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloorPlanCreateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModalAddRoomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalAddHomeDimensionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalAddFeaturesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ModalManageFeaturesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ModalFacadeDesignComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ModalManageFloorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_confirm_modal_confirm_modal__ = __webpack_require__("../../../../../src/app/component/main-section/shared/confirm-modal/confirm-modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_popp_search_popup_search_model__ = __webpack_require__("../../../../../src/app/model/popp-search/popup-search-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__ = __webpack_require__("../../../../../src/app/component/main-section/shared/data/progress-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_rest_rest_services_service__ = __webpack_require__("../../../../../src/app/services/rest/rest-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_home_products_home_products_model__ = __webpack_require__("../../../../../src/app/model/home-products/home-products-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__model_floorplan_floorplan_model__ = __webpack_require__("../../../../../src/app/model/floorplan/floorplan-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__ = __webpack_require__("../../../../../src/app/model/data/data-session-holder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__model_floorplan_features__ = __webpack_require__("../../../../../src/app/model/floorplan/features.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__ = __webpack_require__("../../../../../src/app/services/utils/utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__model_floorplan_home_dimension__ = __webpack_require__("../../../../../src/app/model/floorplan/home-dimension.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__model_floorplan_floor__ = __webpack_require__("../../../../../src/app/model/floorplan/floor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__model_space_types__ = __webpack_require__("../../../../../src/app/model/space_types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// imports for modal

















var FloorPlanCreateComponent = (function () {
    function FloorPlanCreateComponent(dataService, modalService, dataPass, rest, activatedRoute, toastr, _location) {
        var _this = this;
        this.dataService = dataService;
        this.modalService = modalService;
        this.dataPass = dataPass;
        this.rest = rest;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this._location = _location;
        this.operationMode = 'create';
        this.setHeader = [false, false, 'Floorplan Set', 'Create New', false, true, true, true, true, 'disable'];
        this.loadedData = [];
        this.searchData = [];
        this.setFooter = ['footer2', false, true, false, true];
        this.facadeDesignList = [];
        this.featureList = [];
        this.homeProductData = []; // holder of home products
        this.confirmModalOwner = '';
        this.confirmModalDeleteId = 0;
        this.confirmModalHomeDimensionServerDelete = false;
        this.modalMessage = '';
        // update level potion
        this.levelsAndRoomsArr = [];
        // **
        // call modals below ---------------
        // ** 
        this.levelList = this.dataPass.levelList;
        this.homeDimensionList = this.dataPass.homeDimensionList;
        dataService.varFooter.next(this.setFooter);
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].Reset();
        this.floorPlanData = new __WEBPACK_IMPORTED_MODULE_11__model_floorplan_floorplan_model__["a" /* FloorPlan */]();
        this.floorPlanData.homeProduct = new __WEBPACK_IMPORTED_MODULE_9__model_home_products_home_products_model__["b" /* HomeProduct */]();
        this.modalService.onHide.subscribe(function (reason) {
            _this.updateDataFromModal();
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.editId = params['id'];
            _this.operationMode = _this.editId ? 'edit' : 'create';
            _this.setHeader = [false, false, 'Floorplan Set', _this.operationMode == 'create' ? 'Create New' : 'Edit', false, true, true, true, true, 'disable'];
            dataService.varHeader.next(_this.setHeader);
            if (_this.operationMode == 'edit') {
                _this.rest.GET('floorplans/' + _this.editId).then(function (response) {
                    console.log(response.data);
                    if (!response.status) {
                        _this._location.back();
                    }
                    else {
                        _this.floorPlanData = response.data;
                        _this.updateEditData();
                    }
                });
            }
        });
    }
    FloorPlanCreateComponent.prototype.updateDataFromModal = function () {
        var _this = this;
        var _temp = [];
        var _spaces = [], _features = [], _homeDimensions = [];
        var type = __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].currentTask;
        if (type == 'facade') {
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].FacadeDesigns.length; i++) {
                _temp.push(__WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].FacadeDesigns[i].space_name);
                _spaces.push({
                    'space_id': __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].FacadeDesigns[i].space_id
                });
            }
            this.facadeDesignList = _temp;
            this.floorPlanData.spaces = _spaces;
        }
        else if (type == 'features') {
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].FeatureItems.length; i++) {
                _temp.push(__WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].FeatureItems[i].feature_name);
                _features.push({ 'feature_id': __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].FeatureItems[i].feature_id });
            }
            this.featureList = _temp;
            this.floorPlanData.features = _features;
        }
        else if (type == 'home_dimension') {
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions.length; i++) {
                console.log('home_dimension');
                console.log(__WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions);
                _temp.push(__WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions[i]);
                _homeDimensions.push({
                    'dimension': __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions[i].home_dimension ? __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions[i].home_dimension.dimension_name :
                        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions[i].home_dimension_src.dimension_name,
                    'dimension_id': __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions[i].space.id
                });
            }
            this.homeDimensionList = _temp;
            this.floorPlanData.dimensions = _homeDimensions;
        }
        else if (type == 'level') {
            console.log(__WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].SelectedFloor);
        }
        else if (type == 'room') {
            console.log(__WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].RoomReturnId);
            console.log(__WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].DimensionValue);
            this.rest.GET('spaces/' + __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].RoomReturnId).then(function (response) {
                console.log(response);
                console.log('after response');
                console.log(__WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].SelectedFloor);
                response.data.dimension = __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].DimensionValue;
                _this.addChildToLevel(__WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].SelectedFloor.item_id, response.data);
            });
        }
    };
    FloorPlanCreateComponent.prototype.updateEditData = function () {
        // this.popupInitialData = this.floorPlanData.home_design_info.home_design_name;
        // console.log(this.floorPlanData);
        // (this.popupSearch_homeProducts as PopupSearchComponent).setInitialData(this.popupInitialData);
        // // updating facade designs 'facadeDesignList'
        for (var i = 0; i < this.floorPlanData.space_infos.length; i++) {
            if (!this.floorPlanData.space_infos[i].fp_design_spaces_link.level) {
                __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].FacadeDesigns.push(this.floorPlanData.space_infos[i]);
            }
        }
        // // console.log(this.facadeDesignList);
        //this.onItemSelected({'id':this.floorPlanData.home_design_id, 'display':this.floorPlanData.home_design_info.home_design_name});
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].currentTask = 'facade';
        this.updateDataFromModal();
        // updating features
        for (var i = 0; i < this.floorPlanData.feature_infos.length; i++) {
            __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].FeatureItems.push(this.floorPlanData.feature_infos[i]);
        }
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].currentTask = 'features';
        this.updateDataFromModal();
        // updating levels
        for (var i = 0; i < this.floorPlanData.fp_design_level_images.length; i++) {
            var _floor = new __WEBPACK_IMPORTED_MODULE_17__model_floorplan_floor__["a" /* Floor */]();
            _floor.item_id = this.floorPlanData.fp_design_level_images[i].item_id;
            _floor.level = this.floorPlanData.fp_design_level_images[i].level;
            _floor.floor_dimension = this.floorPlanData.fp_design_level_images[i].floor_dimension;
            this.levelsAndRoomsArr.push({ 'floor': _floor, 'rooms': this.getRoomsFromSpaceInfo(_floor.level) });
        }
        console.info('this.levelsAndRoomsArr');
        console.log(this.levelsAndRoomsArr);
        // updating home dimensions
        for (var i = 0; i < this.floorPlanData.home_dimensions_infos.length; i++) {
            var s_data = new __WEBPACK_IMPORTED_MODULE_6__model_popp_search_popup_search_model__["a" /* PopupSearchData */]();
            s_data.display = this.floorPlanData.home_dimensions_infos[i].dimension_name;
            s_data.id = this.floorPlanData.home_dimensions_infos[i].dimension_id;
            __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions.push({
                'id': this.floorPlanData.home_dimensions_infos[i].dimension_id,
                'home_dimension': this.floorPlanData.home_dimensions_infos[i].fp_design_dimensions_link.dimension,
                'space': s_data,
                'home_dimension_src': this.floorPlanData.home_dimensions_infos[i]
            });
        }
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].currentTask = 'home_dimension';
        this.updateDataFromModal();
    };
    FloorPlanCreateComponent.prototype.getContent = function (data) {
        if (typeof data == 'object') {
            // console.log('object');
            // console.log(data);
            return data.dimension_name;
        }
        else {
            return data;
        }
    };
    FloorPlanCreateComponent.prototype.getLevelContent = function (child) {
        if (child.dimension) {
            return child.dimension;
        }
        else {
            return child.fp_design_spaces_link.space_dimension;
        }
    };
    FloorPlanCreateComponent.prototype.deleteHomeProduct = function (item, index) {
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions[i].id == item.id) {
                __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions.splice(i, 1);
                this.homeDimensionList.splice(i, 1);
                break;
            }
        }
    };
    FloorPlanCreateComponent.prototype._modalREmoveFromList = function () {
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions[i].id == this.confirmModalDeleteId) {
                __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions.splice(i, 1);
                this.homeDimensionList.splice(i, 1);
                break;
            }
        }
    };
    FloorPlanCreateComponent.prototype._modalConfirm = function () {
        var _this = this;
        if (this.confirmModalOwner == 'home_dimensions') {
            if (this.confirmModalHomeDimensionServerDelete) {
                __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
                console.log(this.confirmModalDeleteId);
                this.rest.DELETE('homedimensions/' + this.confirmModalDeleteId).then(function (response) {
                    console.log(response);
                    __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                    if (response.status) {
                        _this._modalREmoveFromList();
                        _this.toastr.success(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item deleted"), '', { closeButton: true, enableHtml: true });
                    }
                    else {
                        _this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("An error occured. Please try again."), '', { closeButton: true, enableHtml: true });
                    }
                    _this.bsModalRef.hide();
                });
            }
            else {
                this._modalREmoveFromList();
                this.bsModalRef.hide();
            }
        }
    };
    FloorPlanCreateComponent.prototype.markHomeDimensionForDeletion = function (item, confirmModalOwner) {
        if (confirmModalOwner == 'home_dimensions') {
            this.modalMessage = 'Operation cannot be undone. Are you sure to delete this home dimension?';
        }
        this.confirmModalOwner = confirmModalOwner;
        this.confirmModalHomeDimensionServerDelete = item.home_dimension_src;
        console.log(item);
        this.confirmModalDeleteId = !item.home_dimension_src ? item.id : item.home_dimension_src.dimension_id;
        console.log(item);
        this.bsModalRef = this.modalService.show(this.confirmModal);
    };
    FloorPlanCreateComponent.prototype.editHomeDimension = function (item) {
        console.log(item);
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensionOperation = 'edit';
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensionOperationId = item.home_dimension_src.dimension_id;
        this.bsModalRef = this.modalService.show(ModalAddHomeDimensionComponent);
    };
    FloorPlanCreateComponent.prototype.ngOnInit = function () {
        if (this.operationMode == 'create') {
            this.prepareData();
        }
        this.dataPass.featureInputList = [];
        this.dataPass.facadeInputlist = [];
    };
    FloorPlanCreateComponent.prototype.openConfirmModal = function () {
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__shared_confirm_modal_confirm_modal__["a" /* ConfirmationModalComponent */]);
    };
    FloorPlanCreateComponent.prototype._onItemSelected = function (data) {
        this.selectedHomeProduct = this.getHomeProductDetail(data.id);
        this.facades = this.selectedHomeProduct.space_infos;
        this.floorPlanData.home_design_id = this.selectedHomeProduct.home_design_id;
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].FacadeDesigns = this.facades;
        this.updateLevels();
    };
    FloorPlanCreateComponent.prototype.onItemSelected = function (data) {
        var _this = this;
        if (this.operationMode == 'edit') {
            __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
            this.rest.GET("home_products").then(function (response) {
                _this.homeProductData = response.data.home_designs;
                __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                _this._onItemSelected(data);
            });
        }
        else {
            this._onItemSelected(data);
        }
    };
    FloorPlanCreateComponent.prototype.onRequestAdd = function () {
        //console.log('Add Home Product to onRequestAdd()');
        this.homeModalRef = this.modalService.show(this.AddHomeProductModal);
    };
    FloorPlanCreateComponent.prototype.delete = function (type, i) {
        if (type == 'level') {
            this.levelList.splice(i, 1);
            return false;
        }
        else if (type == 'home_dimension') {
            this.homeDimensionList.splice(i, 1);
            return false;
        }
    };
    FloorPlanCreateComponent.prototype.prepareData = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        this.rest.GET("home_products").then(function (data) {
            _this.homeProductData = data.data.home_designs;
            for (var i = 0; i < _this.homeProductData.length; i++) {
                var _d = new __WEBPACK_IMPORTED_MODULE_6__model_popp_search_popup_search_model__["a" /* PopupSearchData */]();
                _d.display = _this.homeProductData[i].home_design_name;
                _d.id = _this.homeProductData[i].home_design_id;
                _this.searchData.push(_d);
            }
            __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
        });
    };
    // getting an item from home product array
    FloorPlanCreateComponent.prototype.getHomeProductDetail = function (id) {
        for (var i = 0; i < this.homeProductData.length; i++) {
            if (this.homeProductData[i].home_design_id == id) {
                return this.homeProductData[i];
            }
        }
        return null;
    };
    FloorPlanCreateComponent.prototype.updateLevels = function () {
        var _temp = [];
        if (this.operationMode == 'create') {
            if (this.selectedHomeProduct) {
                console.log(this.floorPlanData.space_infos);
                for (var i = 0; i < this.selectedHomeProduct.levels; i++) {
                    var _floor = new __WEBPACK_IMPORTED_MODULE_17__model_floorplan_floor__["a" /* Floor */]();
                    _floor.item_id = i;
                    _floor.level = i + 1;
                    _floor.floor_dimension = '';
                    _temp.push({ 'floor': _floor, 'rooms': [] });
                }
            }
        }
        this.levelsAndRoomsArr = _temp;
        console.log('updateLevels');
    };
    FloorPlanCreateComponent.prototype.getRoomsFromSpaceInfo = function (level) {
        var _temp = [];
        for (var i = 0; i < this.floorPlanData.space_infos.length; i++) {
            if (this.floorPlanData.space_infos[i].fp_design_spaces_link.level &&
                this.floorPlanData.space_infos[i].fp_design_spaces_link.level == level) {
                _temp.push(this.floorPlanData.space_infos[i]);
            }
        }
        return _temp;
    };
    FloorPlanCreateComponent.prototype.addChildToLevel = function (parent_id, data) {
        for (var i = 0; i < this.levelsAndRoomsArr.length; i++) {
            if (this.levelsAndRoomsArr[i].floor.item_id == parent_id) {
                console.log(this.levelsAndRoomsArr[i]);
                this.levelsAndRoomsArr[i].rooms.push(data);
                break;
            }
        }
        console.log(this.levelsAndRoomsArr);
    };
    FloorPlanCreateComponent.prototype.addRoom = function (item) {
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].SelectedFloor = item;
        this.bsModalRef = this.modalService.show(ModalAddRoomComponent);
        this.bsModalRef.content.title = 'Add Room';
        this.bsModalRef.content.filename = 'Browse';
    };
    FloorPlanCreateComponent.prototype.addHomeDimension = function () {
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensionOperation = 'create';
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensionOperationId = 0;
        this.bsModalRef = this.modalService.show(ModalAddHomeDimensionComponent);
        this.bsModalRef.content.filename = 'Browse';
    };
    FloorPlanCreateComponent.prototype.addFeatures = function () {
        this.bsModalRef = this.modalService.show(ModalAddFeaturesComponent);
    };
    FloorPlanCreateComponent.prototype.manageFeatures = function () {
        this.bsModalRef = this.modalService.show(ModalManageFeaturesComponent);
    };
    FloorPlanCreateComponent.prototype.facadeDesign = function () {
        this.bsModalRef = this.modalService.show(ModalFacadeDesignComponent);
        return this.bsModalRef.content.listItem;
    };
    FloorPlanCreateComponent.prototype.manageFloor = function () {
        this.bsModalRef = this.modalService.show(ModalManageFloorComponent);
        this.bsModalRef.content.filename = 'Browse';
    };
    FloorPlanCreateComponent.prototype.editFloor = function (item) {
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].SelectedFloor = item;
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].RoomOperation = 'create';
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].RoomReturnEditId = 0;
        this.bsModalRef = this.modalService.show(ModalManageFloorComponent);
        this.bsModalRef.content.filename = 'Browse';
    };
    // footer submit listener
    FloorPlanCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].isRequesting()) {
            return;
        }
        if (this.floorPlanData.home_design_id > 0 && this.floorPlanData.fp_design_name) {
            __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
            for (var i = 0; i < this.levelsAndRoomsArr.length; i++) {
                for (var j = 0; j < this.levelsAndRoomsArr[i].rooms.length; j++) {
                    this.floorPlanData.spaces.push({
                        "space_id": this.levelsAndRoomsArr[i].rooms[j].space_id,
                        "level": this.levelsAndRoomsArr[i].floor.level,
                        "space_dimension": this.levelsAndRoomsArr[i].rooms[j].dimension
                    });
                }
            }
            if (this.operationMode == 'create') {
                this.rest.POST('floorplans', this.floorPlanData, null).then(function (response) {
                    console.log(response);
                    if (response.status) {
                        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].SelectedFloor.fp_design_id = response.data.fp_design_id;
                        // console.log('SessionData.SelectedFloor');
                        // console.log(SessionData.SelectedFloor);
                        _this.rest.POST('floorplanlevels', __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].SelectedFloor, __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].SelectedFloor.cad, __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].SelectedFloor.image, true).then(function (response) {
                            __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                            // console.log(response);
                            if (response.status) {
                                _this.toastr.success(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Floor plan added"), '', { closeButton: true, enableHtml: true });
                                _this._location.back();
                            }
                            else {
                                _this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("An error occured. Please try again."), '', { closeButton: true, enableHtml: true });
                            }
                        });
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                        _this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("An error occured. Please try again."), '', { closeButton: true, enableHtml: true });
                    }
                });
            }
            else {
                // edit
                console.log('this.floorPlanData');
                console.log(this.floorPlanData);
                this.rest.PUT('floorplans/', this.floorPlanData.fp_design_id, this.floorPlanData, null).then(function (response) {
                    console.log(response);
                    __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                    if (response.status) {
                        _this.toastr.success(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item updated."), '', { closeButton: true, enableHtml: true });
                        _this._location.back();
                    }
                    else {
                        _this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("An error occured. Please try again."), '', { closeButton: true, enableHtml: true });
                    }
                });
            }
        }
        else {
            this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("Home product and floorplan name are required fields."), '', { closeButton: true, enableHtml: true });
        }
    };
    // home product ceartion modal closes
    FloorPlanCreateComponent.prototype.onHomeProductClose = function () {
        this.homeModalRef.hide();
    };
    // when add home product modal is submitted, this will be called
    FloorPlanCreateComponent.prototype.OnAddHomeProductModalSubmitted = function (data) {
        this.searchData = [];
        for (var i = 0; i < data.length; i++) {
            var _d = new __WEBPACK_IMPORTED_MODULE_6__model_popp_search_popup_search_model__["a" /* PopupSearchData */]();
            _d.display = data[i].home_design_name;
            _d.id = data[i].home_design_id;
            this.searchData.push(_d);
        }
        this.homeModalRef.hide();
    };
    FloorPlanCreateComponent.prototype.editSpace = function (item) {
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].SelectedFloor = item;
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].RoomOperation = 'edit';
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].RoomReturnEditId = item.space_id;
        console.log(item);
        this.bsModalRef = this.modalService.show(ModalAddRoomComponent);
        this.bsModalRef.content.title = 'Edit Room';
        this.bsModalRef.content.filename = 'Browse';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('popupSearch_homeProducts'),
        __metadata("design:type", Object)
    ], FloorPlanCreateComponent.prototype, "popupSearch_homeProducts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('confirmModal'),
        __metadata("design:type", Object)
    ], FloorPlanCreateComponent.prototype, "confirmModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('AddHomeProductModal'),
        __metadata("design:type", Object)
    ], FloorPlanCreateComponent.prototype, "AddHomeProductModal", void 0);
    FloorPlanCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-floor-plan-create',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/floor-plan-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/floor-plan-create.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataShared */], __WEBPACK_IMPORTED_MODULE_8__services_rest_rest_services_service__["a" /* RestServices */], __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_19__angular_common__["f" /* Location */]])
    ], FloorPlanCreateComponent);
    return FloorPlanCreateComponent;
}());

// *
// modal components
// *
// add room -------------------------
var ModalAddRoomComponent = (function () {
    function ModalAddRoomComponent(bsModalRef, modalService, dataPass, rest, toastr) {
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.dataPass = dataPass;
        this.rest = rest;
        this.toastr = toastr;
        this.loadedData = [];
        this.searchData = [];
        this.selectedRoomType = new __WEBPACK_IMPORTED_MODULE_18__model_space_types__["a" /* SpaceType */]();
        this.operation = 'add';
        this.operationMode = __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].RoomOperation; // edit or add new space
        this.adjust = '';
        this.normal = 'normal';
        this.addedButtonHidden = true;
        this.defaultButtonHidden = false;
        this.listWatcher = null;
    }
    ModalAddRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomData = {};
        if (this.operationMode == 'create') {
            __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
            this.rest.GET('spaces/types').then(function (response) {
                console.log(response.data);
                __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                _this.loadedData = response.data.spacetypes;
                _this.prepareData();
                _this.stateOfButton = Array(_this.loadedData.length).fill(false);
                _this.stateOfButton2 = Array(_this.loadedData.length).fill(false);
            });
        }
        else {
            // edit
            __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
            this.rest.GET('spaces/' + __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].RoomReturnEditId).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                _this.roomData = response.data;
                console.log(_this.roomData);
            });
        }
    };
    ModalAddRoomComponent.prototype.showChildModal = function () {
        this.childModal.show();
        // this.ngOnInit();
        // this.closeInput();
    };
    ModalAddRoomComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
        this.closeInput();
    };
    ModalAddRoomComponent.prototype.prepareData = function () {
        for (var i = 0; i < this.loadedData.length; i++) {
            var _d = new __WEBPACK_IMPORTED_MODULE_6__model_popp_search_popup_search_model__["a" /* PopupSearchData */]();
            _d.display = this.loadedData[i].type_name;
            _d.id = this.loadedData[i].type_id;
            this.searchData.push(_d);
        }
    };
    ModalAddRoomComponent.prototype.onChange = function (event) {
        var files = event.srcElement.files;
        this.filename = files[0].name;
        this.roomData.file = files[0];
    };
    ModalAddRoomComponent.prototype.checkEmpty = function () {
        if (this.roomTypeInput != '') {
            this.addedButtonHidden = false;
            this.defaultButtonHidden = true;
            this.adjust = 'adjust';
            this.normal = '';
        }
        else if (this.roomTypeInput.length == 0 || this.roomTypeInput == null) {
            this.addedButtonHidden = true;
            this.defaultButtonHidden = false;
            this.adjust = '';
            this.normal = 'normal';
            this.roomTypeInput = null;
        }
    };
    ModalAddRoomComponent.prototype.onItemSelected = function (data) {
        console.log(data);
        this.roomData.space_type_id = data.id;
    };
    ModalAddRoomComponent.prototype.submit = function (roomName, dimension, imageFile) {
        this.dataPass.dataSubmitLevel(this.str, roomName, dimension, imageFile);
        this.bsModalRef.hide();
    };
    ModalAddRoomComponent.prototype.closeInput = function () {
        this.operation = 'add';
        this.addedButtonHidden = true;
        this.defaultButtonHidden = false;
        this.adjust = '';
        this.normal = 'normal';
        this.roomTypeInput = '';
        for (var j = 0; j <= this.loadedData.length; j++) {
            this.stateOfButton2[j] = false;
            this.stateOfButton[j] = false;
        }
        this.listWatcherID = null;
        this.listWatcher = null;
    };
    ModalAddRoomComponent.prototype.saveRoomType = function (i, data, listWatcher) {
        if (this.selectedRoomType.type_name) {
            console.log(this.selectedRoomType);
            // if(listWatcher !== null) {
            //   // alert(i);
            //   this.loadedData.splice(i,1,roomType);        
            //   this.listWatcherID = null;
            //   this.listWatcher = null;
            // } else {
            //   this.loadedData.push(roomType);        
            // }
            // this.searchData = [];
            // this.prepareData();
            // this.closeInput();
        }
    };
    ModalAddRoomComponent.prototype.saveType = function () {
        var _this = this;
        if (this.operation == 'edit') {
            if (this.el.nativeElement.value) {
                console.log(this.selectedRoomType);
                this.selectedRoomType.type_name = this.el.nativeElement.value;
                __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
                this.rest.PUT('spaces/types/', this.selectedRoomType.type_id, this.selectedRoomType, null).then(function (response) {
                    console.log(response);
                    __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                    if (response.status) {
                        _this.el.nativeElement.value = '';
                        _this.searchData = [];
                        _this.ngOnInit();
                        _this.closeInput();
                        _this.toastr.success(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item Updated"), '', { closeButton: true, enableHtml: true });
                    }
                    else {
                        _this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to update the item. Pleaase try again."), '', { closeButton: true, enableHtml: true });
                    }
                });
            }
            else {
                this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("Name if required."), '', { closeButton: true, enableHtml: true });
            }
        }
        else {
            if (this.el.nativeElement.value) {
                var _data = new __WEBPACK_IMPORTED_MODULE_18__model_space_types__["a" /* SpaceType */]();
                _data.type_name = this.el.nativeElement.value;
                this.rest.POST('spaces/types', _data, null).then(function (response) {
                    console.log(response);
                    if (response.status) {
                        _this.el.nativeElement.value = '';
                        _this.searchData = [];
                        _this.ngOnInit();
                        _this.closeInput();
                        _this.toastr.success(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item addded"), '', { closeButton: true, enableHtml: true });
                    }
                    else {
                        _this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to add the item. Please try again."), '', { closeButton: true, enableHtml: true });
                    }
                });
            }
            else {
                this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("Name if required."), '', { closeButton: true, enableHtml: true });
            }
        }
    };
    ModalAddRoomComponent.prototype.AddRoomToFloor = function () {
        var _this = this;
        if (this.operationMode == 'create') {
            console.log(this.roomData);
            __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].DimensionValue = this.roomData.dimension;
            console.log(__WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].SelectedFloor);
            if (this.roomData.space_name && this.roomData.space_type_id != 0) {
                __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
                this.rest.POST('spaces', this.roomData, this.roomData.file).then(function (response) {
                    __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                    console.log(response);
                    if (response.status) {
                        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].currentTask = 'room';
                        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].RoomReturnId = response.data.space_id;
                        _this.toastr.success(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item added successfully."), '', { closeButton: true, enableHtml: true });
                        _this.bsModalRef.hide();
                    }
                    else {
                        _this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to add the item. Please try again."), '', { closeButton: true, enableHtml: true });
                    }
                });
            }
            else {
                this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("Please fill up all required fields."), '', { closeButton: true, enableHtml: true });
            }
        }
        else {
            console.log(this.roomData);
        }
    };
    ModalAddRoomComponent.prototype.deleteRoomType = function (i) {
        this.loadedData.splice(i, 1);
        this.stateOfButton.splice(i, 1);
        this.stateOfButton2.splice(i, 1);
        for (var j = 0; j <= this.loadedData.length; j++) {
            this.stateOfButton2[j] = false;
        }
        this.searchData = [];
        this.prepareData();
        this.closeInput();
        return false;
    };
    ModalAddRoomComponent.prototype.editRoomType = function (i, item) {
        this.operation = 'edit';
        for (var j = 0; j <= this.loadedData.length; j++) {
            if (i != j) {
                this.stateOfButton2[j] = true;
            }
        }
        this.listWatcher = 'onList';
        this.listWatcherID = i;
        this.roomTypeInput = item;
        this.selectedRoomType = item;
        this.addRoomType();
    };
    ModalAddRoomComponent.prototype.editState = function (i) {
        this.stateOfButton[i] = !this.stateOfButton[i];
    };
    ModalAddRoomComponent.prototype.addRoomType = function () {
        this.addedButtonHidden = false;
        this.defaultButtonHidden = true;
        this.adjust = 'adjust';
        this.normal = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* ModalDirective */])
    ], ModalAddRoomComponent.prototype, "childModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("input"),
        __metadata("design:type", Object)
    ], ModalAddRoomComponent.prototype, "el", void 0);
    ModalAddRoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-add-room',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/add-room/add-room.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataShared */],
            __WEBPACK_IMPORTED_MODULE_8__services_rest_rest_services_service__["a" /* RestServices */], __WEBPACK_IMPORTED_MODULE_14_ngx_toastr__["b" /* ToastrService */]])
    ], ModalAddRoomComponent);
    return ModalAddRoomComponent;
}());

// add home dimension modal-------------------------
var ModalAddHomeDimensionComponent = (function () {
    function ModalAddHomeDimensionComponent(bsModalRef, modalService, dataPass, rest, toastr) {
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.dataPass = dataPass;
        this.rest = rest;
        this.toastr = toastr;
        this.spaces = [];
        this.operationMode = __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensionOperation;
    }
    // used methods
    ModalAddHomeDimensionComponent.prototype.onChange = function (event) {
        var files = event.srcElement.files;
        this.filename = files[0].name;
        this.homeDimensionData.file = files[0];
    };
    ModalAddHomeDimensionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchData = [];
        this.homeDimensionData = new __WEBPACK_IMPORTED_MODULE_16__model_floorplan_home_dimension__["a" /* HomeDimension */]();
        if (this.operationMode == 'create') {
            __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
            this.rest.GET('homedimensions').then(function (response) {
                __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                _this.spaces = response.data.homedimensions;
                for (var i = 0; i < _this.spaces.length; i++) {
                    var _temp = new __WEBPACK_IMPORTED_MODULE_6__model_popp_search_popup_search_model__["a" /* PopupSearchData */]();
                    _temp.display = _this.spaces[i].dimension_name;
                    _temp.id = _this.spaces[i].dimension_id;
                    _this.searchData.push(_temp);
                }
            });
        }
        else {
            // edit
            __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
            this.rest.GET('homedimensions/' + __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensionOperationId).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                console.log(response.data[0]);
                _this.homeDimensionData = response.data[0];
                _this.homeDimensionData.dimension_name = _this.homeDimensionData.fp_design_dimensions_link.dimension;
            });
        }
    };
    ModalAddHomeDimensionComponent.prototype.submit = function () {
        var _this = this;
        if (this.operationMode == 'create') {
            var timeStampInMs = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
            if (this.homeDimensionData.dimension_name && this.selectedSpace) {
                __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensions.push({ 'id': timeStampInMs, 'home_dimension': this.homeDimensionData, 'space': this.selectedSpace });
                __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].currentTask = 'home_dimension';
                this.toastr.success(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item added successfully."), '', { closeButton: true, enableHtml: true });
                this.bsModalRef.hide();
            }
            else {
                this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("All fields are required."), '', { closeButton: true, enableHtml: true });
            }
        }
        else {
            // edit
            if (this.homeDimensionData.dimension_name) {
                this.rest.PUT('homedimensions', __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].HomeDimensionOperationId, this.homeDimensionData, null).then(function (response) {
                    console.log(response);
                    if (response.status) {
                        _this.toastr.success(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item updated successfully."), '', { closeButton: true, enableHtml: true });
                        _this.bsModalRef.hide();
                    }
                    else {
                        _this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to update the item."), '', { closeButton: true, enableHtml: true });
                    }
                });
            }
            else {
                this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("Dimension is required."), '', { closeButton: true, enableHtml: true });
            }
        }
    };
    ModalAddHomeDimensionComponent.prototype.onItemSelected = function (data) {
        console.log(data);
        this.selectedSpace = data;
    };
    ModalAddHomeDimensionComponent.prototype.onRequestAdd = function () {
        this.addDimensionModalRef = this.modalService.show(this.AddDimensionModal);
    };
    ModalAddHomeDimensionComponent.prototype.closeAddDimensionModal = function () {
        this.addDimensionModalRef.hide();
    };
    ModalAddHomeDimensionComponent.prototype.submitAddDimensionModal = function (data) {
        console.log(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('AddDimensionModal'),
        __metadata("design:type", Object)
    ], ModalAddHomeDimensionComponent.prototype, "AddDimensionModal", void 0);
    ModalAddHomeDimensionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-add-home-dimension',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/add-home-dimension/add-home-dimension.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/add-home-dimension/add-home-dimension.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataShared */],
            __WEBPACK_IMPORTED_MODULE_8__services_rest_rest_services_service__["a" /* RestServices */], __WEBPACK_IMPORTED_MODULE_14_ngx_toastr__["b" /* ToastrService */]])
    ], ModalAddHomeDimensionComponent);
    return ModalAddHomeDimensionComponent;
}());

// add features modal-------------------------
var ModalAddFeaturesComponent = (function () {
    function ModalAddFeaturesComponent(bsModalRef, modalService, dataPass, rest) {
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.dataPass = dataPass;
        this.rest = rest;
        this.loadedData = [];
        this.listItem = [];
        this.hightlightStatus = [];
        this.checkboxValue = false;
        this.listDecoy = [];
    }
    // used methods  
    ModalAddFeaturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.GET('features').then(function (data) {
            _this.loadedData = data.data.features;
        });
    };
    ModalAddFeaturesComponent.prototype.newFunction = function () {
        if (!this.checkboxValue) {
            this.classAll = '';
            this.listDecoy = [];
            this.listItem = [];
        }
        else {
            this.classAll = 'selectedAll';
            this.listDecoy = this.loadedData;
            this.getItem(true, this.loadedData, 0);
        }
    };
    ModalAddFeaturesComponent.prototype.submit = function () {
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].FeatureItems = this.listItem;
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].currentTask = 'features';
        this.modalService.onHide;
    };
    // temporary on selected item ------------
    ModalAddFeaturesComponent.prototype.getItem = function (bool, item, index) {
        if (bool) {
            this.listItem.push(item);
        }
        else {
            this.deleteItemInput(item);
        }
    };
    ModalAddFeaturesComponent.prototype.deleteItemInput = function (item) {
        var index = this.listItem.indexOf(item);
        if (index !== -1) {
            this.listItem.splice(index, 1);
        }
    };
    ModalAddFeaturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-add-features',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/add-features/add-features.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataShared */],
            __WEBPACK_IMPORTED_MODULE_8__services_rest_rest_services_service__["a" /* RestServices */]])
    ], ModalAddFeaturesComponent);
    return ModalAddFeaturesComponent;
}());

// manage features modal-------------------------
var ModalManageFeaturesComponent = (function () {
    function ModalManageFeaturesComponent(bsModalRef, modalService, dataPass, rest, toastr) {
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.dataPass = dataPass;
        this.rest = rest;
        this.toastr = toastr;
        this.loadedData = [];
        this.adjust = '';
        this.normal = 'normal';
        this.addedButtonHidden = true;
        this.defaultButtonHidden = false;
        this.passFeature = [];
        this.listWatcher = null;
    }
    // used methods
    ModalManageFeaturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        this.rest.GET('features').then(function (data) {
            __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
            _this.loadedData = data.data.features;
            _this.stateOfButton = Array(_this.loadedData.length).fill(false);
            _this.stateOfButton2 = Array(_this.loadedData.length).fill(false);
        });
    };
    ModalManageFeaturesComponent.prototype.onChange = function (event) {
        var files = event.srcElement.files;
        this.filename = files[0].name;
    };
    ModalManageFeaturesComponent.prototype.checkEmpty = function () {
        if (this.featureInput != '') {
            this.addedButtonHidden = false;
            this.defaultButtonHidden = true;
            this.adjust = 'adjust';
            this.normal = '';
        }
        else if (this.featureInput.length == 0 || this.featureInput == null) {
            this.addedButtonHidden = true;
            this.defaultButtonHidden = false;
            this.adjust = '';
            this.normal = 'normal';
            this.featureInput = null;
        }
    };
    ModalManageFeaturesComponent.prototype.onItemSelected = function (data) {
        return this.str = data;
    };
    ModalManageFeaturesComponent.prototype.closeInput = function () {
        this.addedButtonHidden = true;
        this.defaultButtonHidden = false;
        this.adjust = '';
        this.normal = 'normal';
        this.featureInput = '';
        for (var j = 0; j <= this.loadedData.length; j++) {
            this.stateOfButton2[j] = false;
            this.stateOfButton[j] = false;
        }
        this.listWatcherID = null;
        this.listWatcher = null;
    };
    ModalManageFeaturesComponent.prototype.saveFeature = function (i, item, listWatcher) {
        var _this = this;
        console.log(i, item, listWatcher);
        // edit
        if (listWatcher) {
            if (item) {
                this.selectedFeature.feature_name = item;
                __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
                this.rest.PUT('features', this.selectedFeature.feature_id, this.selectedFeature, null).then(function (response) {
                    __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                    if (response.status) {
                        _this.toastr.success(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item updated successfully"), '', { closeButton: true, enableHtml: true });
                        _this.ngOnInit();
                        _this.closeInput();
                    }
                    else {
                        _this.toastr.success(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("Ubale to update the selected item. Please try again."), '', { closeButton: true, enableHtml: true });
                    }
                });
            }
            else {
                this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("Name is required"), '', { closeButton: true, enableHtml: true });
            }
        }
        else {
            // add 
            if (item) {
                __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
                var _f = new __WEBPACK_IMPORTED_MODULE_13__model_floorplan_features__["a" /* Feature */]();
                _f.feature_name = item;
                _f.feature_type_id = 28;
                console.log(_f);
                this.rest.POST('features', _f, null).then(function (response) {
                    console.log(response);
                    __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                    if (response.status) {
                        _this.toastr.success(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item added successfully"), '', { closeButton: true, enableHtml: true });
                        _this.ngOnInit();
                        _this.closeInput();
                    }
                    else {
                        _this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("An error occured. Please try again."), '', { closeButton: true, enableHtml: true });
                    }
                });
            }
            else {
                this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("Name is required"), '', { closeButton: true, enableHtml: true });
            }
        }
    };
    ModalManageFeaturesComponent.prototype.markForDeletion = function (template, id) {
        this.selectedId = id;
        this.confirmModalRef = this.modalService.show(template);
    };
    ModalManageFeaturesComponent.prototype.deleteFeature = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        this.rest.DELETE('features/' + this.selectedId).then(function (response) {
            __WEBPACK_IMPORTED_MODULE_7__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
            _this.confirmModalRef.hide();
            console.log(response);
            if (response.status) {
                _this.toastr.success(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item deleted successfully"), '', { closeButton: true, enableHtml: true });
            }
            else {
                _this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to delete the item. Please try again."), '', { closeButton: true, enableHtml: true });
            }
        });
    };
    ModalManageFeaturesComponent.prototype.editFeature = function (i, item) {
        this.selectedFeature = item;
        this.deleteIndex = i;
        console.log(this.selectedFeature);
        for (var j = 0; j <= this.loadedData.length; j++) {
            if (i != j) {
                this.stateOfButton2[j] = true;
            }
        }
        this.listWatcher = 'onList';
        this.listWatcherID = item.feature_id;
        this.featureInput = item.feature_name;
        this.addFeature();
    };
    ModalManageFeaturesComponent.prototype.editState = function (i) {
        this.stateOfButton[i] = !this.stateOfButton[i];
    };
    ModalManageFeaturesComponent.prototype.addFeature = function () {
        this.addedButtonHidden = false;
        this.defaultButtonHidden = true;
        this.adjust = 'adjust';
        this.normal = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* ModalDirective */])
    ], ModalManageFeaturesComponent.prototype, "childModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('divChild'),
        __metadata("design:type", Object)
    ], ModalManageFeaturesComponent.prototype, "divChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("input"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ModalManageFeaturesComponent.prototype, "el", void 0);
    ModalManageFeaturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-manage-features',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/add-features/manage-features.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataShared */],
            __WEBPACK_IMPORTED_MODULE_8__services_rest_rest_services_service__["a" /* RestServices */], __WEBPACK_IMPORTED_MODULE_14_ngx_toastr__["b" /* ToastrService */]])
    ], ModalManageFeaturesComponent);
    return ModalManageFeaturesComponent;
}());

// facade design modal-------------------------
var ModalFacadeDesignComponent = (function () {
    function ModalFacadeDesignComponent(bsModalRef, modalService, dataPass) {
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.dataPass = dataPass;
        this.hightlightStatus = [];
        this.checkboxValue = false;
        this.listItem = [];
        this.facadeList = __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].FacadeDesigns;
    }
    ModalFacadeDesignComponent.prototype.newFunction = function () {
        if (!this.checkboxValue) {
            this.classAll = '';
            this.listDecoy = [];
            this.listItem = [];
        }
        else {
            this.classAll = 'selectedAll';
            this.listDecoy = this.dataPass.facadeList;
            this.getItem(true, this.dataPass.facadeList, 0);
        }
    };
    ModalFacadeDesignComponent.prototype.ngOnInit = function () {
        console.log('SessionData.FacadeDesigns', __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].FacadeDesigns);
    };
    ModalFacadeDesignComponent.prototype.submit = function () {
        //this.dataPass.facadeInputlist = this.listItem;
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].FacadeDesigns = this.listItem;
        __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].currentTask = 'facade';
        this.modalService.onHide;
    };
    // temporary on selected item ------------
    ModalFacadeDesignComponent.prototype.getItem = function (bool, item, index) {
        if (bool) {
            this.listItem.push(item);
        }
        else {
            this.deleteItemInput(item);
        }
    };
    ModalFacadeDesignComponent.prototype.deleteItemInput = function (item) {
        var index = this.listItem.indexOf(item);
        if (index !== -1) {
            this.listItem.splice(index, 1);
        }
    };
    ModalFacadeDesignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-facade-design',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/facade-design/facade-design.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataShared */]])
    ], ModalFacadeDesignComponent);
    return ModalFacadeDesignComponent;
}());

// manage floor modal-------------------------
var ModalManageFloorComponent = (function () {
    function ModalManageFloorComponent(bsModalRef, modalService, dataPass, toastr, rest) {
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.dataPass = dataPass;
        this.toastr = toastr;
        this.rest = rest;
        this.cadfilename = 'Browse';
        this.imgfilename = 'Browse';
    }
    // used methods
    ModalManageFloorComponent.prototype.onChange = function (event, type) {
        if (type == 'cad') {
            this.cadfilename = event.srcElement.files[0].name;
            this.floorData.cad = event.srcElement.files[0];
        }
        else {
            this.imgfilename = event.srcElement.files[0].name;
            this.floorData.image = event.srcElement.files[0];
        }
    };
    ModalManageFloorComponent.prototype.ngOnInit = function () {
        this.floorData = __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].SelectedFloor;
    };
    ModalManageFloorComponent.prototype.save = function () {
        if (this.floorData.level && this.floorData.floor_dimension) {
            __WEBPACK_IMPORTED_MODULE_12__model_data_data_session_holder__["a" /* SessionData */].currentTask = 'level';
            this.modalService.onHide;
            this.bsModalRef.hide();
        }
        else {
            this.toastr.error(__WEBPACK_IMPORTED_MODULE_15__services_utils_utilities__["a" /* Utilities */].getToastContentError("Level and floor dimensio are required fields."), '', { closeButton: true, enableHtml: true });
        }
    };
    ModalManageFloorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-manage-floor',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/manage-floor/manage-floor.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataShared */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_8__services_rest_rest_services_service__["a" /* RestServices */]])
    ], ModalManageFloorComponent);
    return ModalManageFloorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/add-features/add-features.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"manageRoomTypesModal\">\r\n    <div>\r\n        <div>\r\n            <div style=\"margin:0 auto;\">\r\n                <!-- header -->\r\n                <div class=\"mod-header\">\r\n                    <span>Add Features</span>\r\n                    <span class=\"hClose\" (click)=\"bsModalRef.hide()\">&times;</span>\r\n                </div>\r\n\r\n                <!-- body -->\r\n                <div class=\"mod-body\" style=\"padding:0 0; margin:0 0;\">\r\n                    <!-- checkbox -->\r\n                    <div class=\"form-check\">\r\n                        <label class=\"form-check-label\">\r\n                            <input type=\"checkbox\" id=\"box-1\" [(ngModel)]=\"checkboxValue\" (change)=\"newFunction();\">\r\n                            <label for=\"box-1\">Select All</label>\r\n                        </label>\r\n                    </div>\r\n                    <!-- list -->\r\n                    <div class=\"roomTypeContainer custom-scrolling\" style=\"height:300px;\">\r\n                        <table>\r\n                            <tbody>\r\n                                <tr class=\"featureList {{classAll}}\" *ngFor=\"let item of loadedData; let i = index;\" [attr.data-selected]=\"false\" (click)=\"hightlightStatus[i]=!hightlightStatus[i]; getItem(hightlightStatus[i],item,i)\" [class.selected]=\"hightlightStatus[i]\">\r\n                                    <td style=\"color:inherit; float:left;\">{{item.feature_name}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- footer -->\r\n                <div class=\"mod-footer\" style=\"margin-top:35px;\">\r\n                    <span class=\"modCancel\" (click)=\"bsModalRef.hide()\">Cancel</span>\r\n                    <span class=\"modSubmit\" (click)=\"bsModalRef.hide();submit()\">Confirm</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/add-features/manage-features.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #template>\r\n    <div id=\"divChild\" #divChild>\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"pull-left\">Message</h4>\r\n            <a (click)=\"confirmModalRef.hide()\" href=\"javascript:void(0)\" class=\"pull-right\">\r\n                <i class=\"iconned-close-mini\"></i>\r\n            </a>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            Operation cannot be undone. Are you sure to delete this feature?\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <a href=\"javascript:void(0)\" class=\"link-blue pull-left\" (click)=\"confirmModalRef.hide()\">Do not delete</a>\r\n            <button class=\"blue-button\" (click)=\"deleteItem()\">Yes</button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<div class=\"manageRoomTypesModal\">\r\n    <div>\r\n        <div>\r\n            <div style=\"margin:0 auto;\">\r\n                <!-- header -->\r\n                <div class=\"mod-header\">\r\n                    <span>Manage Features</span>\r\n                    <span class=\"hClose\" (click)=\"bsModalRef.hide()\">&times;</span>\r\n                </div>\r\n\r\n                <!-- body -->\r\n                <div class=\"mod-body\" style=\"padding:0 0; margin:0 0;\">\r\n                    <!-- list -->\r\n                    <div class=\"roomTypeContainer custom-scrolling\" style=\"height:300px;\">\r\n                        <table>\r\n                            <tbody>\r\n                                <tr class=\"featureList\" *ngFor=\"let item of loadedData; let i = index;\" [class.editActiveClass]=\"stateOfButton[i]\" [class.deactivate]=\"stateOfButton2[i]\">\r\n                                    <td style=\"color:inherit; float:left;\">{{item.feature_name}}</td>\r\n                                    <td class=\"icon-container\" style=\"padding:0 0; float:right;\">\r\n                                        <i (click)=\"editFeature(i,item);editState(i)\" class=\"iconned-edit\" [class.hideIcon]=\"stateOfButton[i]\" style=\"margin-bottom:3.7px; margin-right:7px\"></i>\r\n                                        <i (click)=\"markForDeletion(template, item.space_id)\" class=\"iconned-trashcan\" style=\"margin-bottom:3.7px;\" [class.activeDelete]=\"stateOfButton[i]\"></i>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <!-- add -->\r\n                    <div class=\"addRoomType mod-body\">\r\n                        <div style=\"display:inline;\">\r\n                            <div style=\"float:left; margin-bottom:1.2vh;\" class=\"{{adjust}} {{normal}}\">\r\n                                <div style=\"float:left; width:100%;\">\r\n                                    <input #input [ngModel]=\"featureInput\" (ngModelChange)=\"checkEmpty()\" id=\"feature_add\" type=\"text\" class=\"form-control\" style=\"border-radius: 20px; height:35px; font-size:15px;\" placeholder=\"Add New\">\r\n                                </div>\r\n                            </div>\r\n                            <div style=\" float:right;\">\r\n                                <!-- added button -->\r\n                                <div [hidden]=\"addedButtonHidden\">\r\n                                    <!-- check -->\r\n                                    <div style=\"float:right; margin-left:0.55vw;\" (click)=\"saveFeature(deleteIndex,input.value,listWatcher)\">\r\n                                        <i class=\"iconned-check-large\" style=\"width:35px; height:35px;\"></i>\r\n                                    </div>\r\n                                    <!-- close -->\r\n                                    <div style=\"float:right;\" (click)=\"closeInput()\">\r\n                                        <i class=\"iconned-close-large\" style=\"width:35px; height:35px;\"></i>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- plus -->\r\n                                <div style=\"float:right;\" [hidden]=\"defaultButtonHidden\" (click)=\"addFeature()\">\r\n                                    <i class=\"iconned-plus\" style=\"width:35px; height:35px;\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- footer -->\r\n                <div class=\"mod-footer\" style=\"margin-top:35px;\">\r\n                    <span class=\"modCancel\" (click)=\"bsModalRef.hide()\">Close</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/add-home-dimension/add-home-dimension.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".popover {\r\n    max-width: 20vw!important;\r\n}\r\n\r\n.modal-division-types {\r\n    max-width: 20vw!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/add-home-dimension/add-home-dimension.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n    .popover {\r\n        max-width: 10vw!important;\r\n    }\r\n    \r\n    .modal-division-types {\r\n        max-width: 10vw!important;\r\n    }\r\n</style>\r\n<ng-template #AddDimensionModal>\r\n    <app-create-dimension (OnClose)=\"closeAddDimensionModal()\" (OnSubmit)=\"submitAddDimensionModal()\"></app-create-dimension>\r\n</ng-template>\r\n<!-- ADD ROOM MODAL -->\r\n<div class=\"addRoomModal\">\r\n    <div class=\"mod-header\">\r\n        <span>Add Home Dimension</span>\r\n        <span class=\"hClose\" (click)=\"bsModalRef.hide()\">&times;</span>\r\n    </div>\r\n\r\n    <!-- body -->\r\n    <div class=\"mod-body\">\r\n        <!-- space name -->\r\n        <div *ngIf=\"operationMode == 'create'\">\r\n            <div class=\"form-group\">\r\n                <label class=\"text-normal\">Dimension Name</label>\r\n                <!-- <input class=\"form-control\" id=\"space_name\" name=\"space_name\" [(ngModel)]=\"homeDimensionData.dimension_name\"> -->\r\n                <popup-search-component (OnItemSelected)=\"onItemSelected($event)\" (OnRequestAdd)=\"onRequestAdd()\" [group_style]=\"false\" [loadedData]=\"searchData\" [widthExp]=\"true\">\r\n                </popup-search-component>\r\n            </div>\r\n        </div>\r\n        <!-- dimension -->\r\n        <div>\r\n            <div class=\"form-group\">\r\n                <label class=\"text-normal\">Dimension</label>\r\n                <input class=\"form-control\" id=\"hoom_dimension_name\" name=\"hoom_dimension_name\" [(ngModel)]=\"homeDimensionData.dimension_name\">\r\n            </div>\r\n        </div>\r\n        <!-- image file -->\r\n        <!-- <div class=\"form-group\">\r\n            <label class=\"text-normal\">Image Files</label>\r\n            <div class=\"file-input\">\r\n                <label for=\"home_dimension_image_upload\">\r\n                    <span aria-hidden=\"true\" class=\"btn btn-default border-nothing text-ellipse\">{{filename}}</span>\r\n                    <input type=\"file\" id=\"home_dimension_image_upload\" name=\"home_dimension_image_upload\" style=\"display:none\" (change)=\"onChange($event)\" accept=\"image/*\">\r\n                </label>\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n    <!-- footer -->\r\n    <div class=\"mod-footer\">\r\n        <span class=\"modCancel\" (click)=\"bsModalRef.hide()\">Cancel</span>\r\n        <span class=\"modSubmit\" (click)=\"submit()\">Submit</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/add-room/add-room.html":
/***/ (function(module, exports) {

module.exports = "<!-- ADD ROOM MODAL -->\r\n<div class=\"addRoomModal\">\r\n    <div class=\"mod-header\">\r\n        <span>{{title}}</span>\r\n        <!-- <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button> -->\r\n        <span class=\"hClose\" (click)=\"bsModalRef.hide()\">&times;</span>\r\n    </div>\r\n\r\n    <!-- body -->\r\n    <div class=\"mod-body\">\r\n        <!-- room type -->\r\n        <div *ngIf=\"operationMode == 'create'\">\r\n            <label class=\"text-normal\">Room Type</label>\r\n            <div class=\"input-group\">\r\n                <div class=\"form-group\">\r\n                    <popup-search-component style=\"width:100px;\" [showIcon]=\"false\" (OnItemSelected)=\"onItemSelected($event)\" (OnRequestAdd)=\"childModal.show()\" [group_style]=\"true\" [loadedData]=\"searchData\" [widthExp]=\"false\"></popup-search-component>\r\n                </div>\r\n                <span class=\"input-group-btn\" (click)=\"showChildModal()\">\r\n                    <a href=\"javascript:void(0)\" class=\"iconned-container left-specified\">\r\n                        <i class=\"iconned-settings\"></i>\r\n                    </a>\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <!-- room name -->\r\n        <div>\r\n            <div class=\"form-group\">\r\n                <label class=\"text-normal\">Room Name</label>\r\n                <input class=\"form-control\" id=\"room_name\" name=\"room_name\" [(ngModel)]=\"roomData.space_name\">\r\n            </div>\r\n        </div>\r\n        <!-- dimension -->\r\n        <div>\r\n            <div class=\"form-group\">\r\n                <label class=\"text-normal\">Dimension</label>\r\n                <input class=\"form-control\" id=\"dimension_name\" name=\"dimension_name\" [(ngModel)]=\"roomData.dimension\">\r\n            </div>\r\n        </div>\r\n        <!-- image file -->\r\n        <div class=\"form-group\">\r\n            <label class=\"text-normal\">Image Files</label>\r\n            <div class=\"file-input\">\r\n                <label for=\"room_image_upload\">\r\n                    <span aria-hidden=\"true\" class=\"btn btn-default border-nothing text-ellipse\">{{filename}}</span>\r\n                    <input type=\"file\" id=\"room_image_upload\" name=\"room_image_upload\" style=\"display:none\" (change)=\"onChange($event)\" accept=\"image/*\"\r\n                        [(ngModel)]=\"image\">\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- footer -->\r\n    <div class=\"mod-footer\">\r\n        <span class=\"modCancel\" (click)=\"bsModalRef.hide()\">Cancel</span>\r\n        <span class=\"modSubmit\" (click)=\"AddRoomToFloor()\">Submit</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- **\r\n MANAGE ROOM TYPES MODAL \r\n** -->\r\n\r\n<div class=\"manageRoomTypesModal\">\r\n    <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" style=\"position:absolute; top:0px;\">\r\n            <div class=\"modal-content\" style=\"margin:0 auto;\">\r\n                <!-- header -->\r\n                <div class=\"mod-header\">\r\n                    <span>Manage Room Types</span>\r\n                    <span class=\"hClose\" (click)=\"hideChildModal()\">&times;</span>\r\n                </div>\r\n\r\n                <!-- body -->\r\n                <div class=\"mod-body\" style=\"padding:0 0; margin:0 0;\">\r\n                    <!-- list -->\r\n                    <div class=\"roomTypeContainer custom-scrolling\" style=\"height:300px;\">\r\n                        <table>\r\n                            <tbody>\r\n                                <tr class=\"roomTypeList\" *ngFor=\"let lData of loadedData; let i = index;\" [class.editActiveClass]=\"stateOfButton[i]\" [class.deactivate]=\"stateOfButton2[i]\">\r\n                                    <td style=\"color:inherit; float:left;\">{{lData.type_name}}</td>\r\n                                    <td class=\"icon-container\" style=\"padding:0 0; float:right;\">\r\n                                        <i (click)=\"editRoomType(i,lData);editState(i)\" class=\"iconned-edit\" [class.hideIcon]=\"stateOfButton[i]\" style=\"margin-bottom:3.7px; margin-right:7px\"></i>\r\n                                        <i (click)=\"deleteRoomType(i)\" class=\"iconned-trashcan\" style=\"margin-bottom:3.7px;\" [class.activeDelete]=\"stateOfButton[i]\"></i>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <!-- add -->\r\n                    <div class=\"addRoomType mod-body\">\r\n                        <div style=\"display:inline;\">\r\n                            <div style=\"float:left; margin-bottom:1.2vh;\" class=\"{{adjust}} {{normal}}\">\r\n                                <div style=\"float:left; width:100%;\">\r\n                                    <input #input [ngModel]=\"selectedRoomType.type_name\" (ngModelChange)=\"checkEmpty()\" id=\"room_type_add\" type=\"text\" class=\"form-control\" style=\"border-radius: 20px; height:35px; font-size:15px;\" placeholder=\"Add New\">\r\n                                </div>\r\n                            </div>\r\n                            <div style=\" float:right;\">\r\n                                <!-- added button -->\r\n                                <div [hidden]=\"addedButtonHidden\">\r\n                                    <!-- check -->\r\n                                    <div style=\"float:right; margin-left:0.55vw;\" (click)=\"saveType()\">\r\n                                        <i class=\"iconned-check-large\" style=\"width:35px; height:35px;\"></i>\r\n                                    </div>\r\n                                    <!-- close -->\r\n                                    <div style=\"float:right;\" (click)=\"closeInput()\">\r\n                                        <i class=\"iconned-close-large\" style=\"width:35px; height:35px;\"></i>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- plus -->\r\n                                <div style=\"float:right;\" [hidden]=\"defaultButtonHidden\" (click)=\"addRoomType()\">\r\n                                    <i class=\"iconned-plus\" style=\"width:35px; height:35px;\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <!-- footer -->\r\n                <div class=\"mod-footer\">\r\n                    <span class=\"modCancel\" (click)=\"hideChildModal()\">Back</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/create-dimension/create-dimension.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"pull-left\">Add Home Dimension</h4>\n    <a (click)=\"close()\" href=\"javascript:void(0)\" class=\"pull-right\">\n        <i class=\"iconned-close-mini\"></i>\n    </a>\n</div>\n<div class=\"modal-body\">\n    <div class=\"form-group\">\n        <label class=\"text-normal\">Dimension Name</label>\n        <input class=\"form-control\" id=\"dimension_name\" [(ngModel)]=\"dimension.dimension_name\" required>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"text-normal\">Dimension Unit</label>\n        <select class=\"form-control\" [(ngModel)]=\"dimension.dimension_unit\" style=\"height: auto!important;\">\n          <option *ngFor=\"let item of dimenUnits\" value=\"{{item}}\">{{item}}</option>\n        </select>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <a href=\"javascript:void(0)\" class=\"link-blue pull-left\" (click)=\"close()\">Cancel</a>\n    <button class=\"blue-button\" (click)=\"submit()\">Submit</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/create-dimension/create-dimension.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".popover {\n  max-width: 20vw !important; }\n\n.modal-division-types {\n  max-width: 20vw !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/create-dimension/create-dimension.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateDimensionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_floorplan_home_dimension__ = __webpack_require__("../../../../../src/app/model/floorplan/home-dimension.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_rest_rest_services_service__ = __webpack_require__("../../../../../src/app/services/rest/rest-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_progress_provider__ = __webpack_require__("../../../../../src/app/component/main-section/shared/data/progress-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utils_utilities__ = __webpack_require__("../../../../../src/app/services/utils/utilities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateDimensionComponent = (function () {
    function CreateDimensionComponent(toastr, rest) {
        this.toastr = toastr;
        this.rest = rest;
        this.dimension = new __WEBPACK_IMPORTED_MODULE_1__model_floorplan_home_dimension__["a" /* HomeDimension */]();
        this.dimenUnits = ['m²', 'm'];
        this.OnClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CreateDimensionComponent.prototype.ngOnInit = function () {
    };
    CreateDimensionComponent.prototype.submit = function () {
        if (__WEBPACK_IMPORTED_MODULE_4__shared_data_progress_provider__["a" /* ProgressProvider */].isRequesting()) {
            return;
        }
        if (this.dimension.dimension_name && this.dimension.dimension_unit) {
            __WEBPACK_IMPORTED_MODULE_4__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
            this.rest.POST('homedimensions', this.dimension, null).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_4__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                console.log(response.data);
            });
        }
        else {
            this.toastr.error(__WEBPACK_IMPORTED_MODULE_5__services_utils_utilities__["a" /* Utilities */].getToastContentError("All fields are required."), '', { closeButton: true, enableHtml: true });
        }
        console.log(this.dimension);
        this.OnSubmit.emit(null);
    };
    CreateDimensionComponent.prototype.close = function () {
        this.OnClose.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CreateDimensionComponent.prototype, "OnClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CreateDimensionComponent.prototype, "OnSubmit", void 0);
    CreateDimensionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-dimension',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/create-dimension/create-dimension.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/create-dimension/create-dimension.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__services_rest_rest_services_service__["a" /* RestServices */]])
    ], CreateDimensionComponent);
    return CreateDimensionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/facade-design/facade-design.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"manageRoomTypesModal\">\r\n    <div>\r\n        <div>\r\n            <div style=\"margin:0 auto;\">\r\n                <!-- header -->\r\n                <div class=\"mod-header\">\r\n                    <span>Select Facade Designs</span>\r\n                    <span class=\"hClose\" (click)=\"bsModalRef.hide()\">&times;</span>\r\n                </div>\r\n\r\n                <!-- body -->\r\n                <div class=\"mod-body\" style=\"padding:0 0; margin:0 0;\">\r\n                    <!-- checkbox -->\r\n                    <div class=\"form-check\">\r\n                        <label class=\"form-check-label\">\r\n                            <input type=\"checkbox\" id=\"box-1\" [(ngModel)]=\"checkboxValue\" (change)=\"newFunction()\">\r\n                            <label for=\"box-1\">Select All</label>\r\n                        </label>\r\n                    </div>\r\n\r\n                    <!-- list -->\r\n                    <div class=\"roomTypeContainer custom-scrolling\" style=\"height:300px;\">\r\n                        <table>\r\n                            <tbody>\r\n                                <tr class=\"facadeList {{classAll}}\" *ngFor=\"let item of facadeList; let i = index;\" [attr.data-selected]=\"false\" (click)=\"hightlightStatus[i]=!hightlightStatus[i]; getItem(hightlightStatus[i],item,i)\" [class.selected]=\"hightlightStatus[i]\">\r\n                                    <td style=\"color:inherit; float:left;\">{{item.space_name}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- footer -->\r\n                <div class=\"mod-footer\" style=\"margin-top:35px;\">\r\n                    <span class=\"modCancel\" (click)=\"bsModalRef.hide()\">Cancel</span>\r\n                    <span class=\"modSubmit\" (click)=\"bsModalRef.hide();submit()\">Confirm</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-create/widget-template/manage-floor/manage-floor.html":
/***/ (function(module, exports) {

module.exports = "<!-- ADD ROOM MODAL -->\r\n<div class=\"\">\r\n    <div class=\"mod-header\">\r\n        <span>Manage Floor</span>\r\n        <span class=\"hClose\" (click)=\"bsModalRef.hide()\">&times;</span>\r\n    </div>\r\n\r\n    <!-- body -->\r\n    <div class=\"mod-body\">\r\n        <!-- level -->\r\n        <div>\r\n            <div class=\"form-group\">\r\n                <label class=\"text-normal\">Level</label>\r\n                <input class=\"form-control\" id=\"level_name\" name=\"level_name\" [(ngModel)]=\"floorData.level\" [OnlyNumber]=\"true\">\r\n            </div>\r\n        </div>\r\n        <!-- dimension -->\r\n        <div>\r\n            <div class=\"form-group\">\r\n                <label class=\"text-normal\">Floor Dimension</label>\r\n                <input class=\"form-control\" id=\"floor_dimension\" name=\"floor_dimension\" [(ngModel)]=\"floorData.floor_dimension\">\r\n            </div>\r\n        </div>\r\n        <!-- CAD File -->\r\n        <div class=\"form-group\">\r\n            <label class=\"text-normal\">CAD File</label>\r\n            <div class=\"file-input\">\r\n                <label for=\"cad_file_upload\">\r\n                    <span aria-hidden=\"true\" class=\"btn btn-default border-nothing text-ellipse\">{{cadfilename}}</span>\r\n                    <input type=\"file\" id=\"cad_file_upload\" name=\"cad_file_upload\" style=\"display:none\" (change)=\"onChange($event, 'cad')\"\r\n                        accept=\".cad|*.cad\" [(ngModel)]=\"cad_file\">\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <!-- image file -->\r\n        <div class=\"form-group\">\r\n            <label class=\"text-normal\">Image Files</label>\r\n            <div class=\"file-input\">\r\n                <label for=\"floor_image_upload\">\r\n                    <span aria-hidden=\"true\" class=\"btn btn-default border-nothing text-ellipse\">{{imgfilename}}</span>\r\n                    <input type=\"file\" id=\"floor_image_upload\" name=\"floor_image_upload\" style=\"display:none\" (change)=\"onChange($event, 'img')\"\r\n                        accept=\"image/*\" [(ngModel)]=\"image_file\">\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- footer -->\r\n    <div class=\"mod-footer\">\r\n        <!-- (click)=\"submit(spaceName,dim,image)\" -->\r\n        <span class=\"modCancel\" (click)=\"bsModalRef.hide()\">Cancel</span>\r\n        <span class=\"modSubmit\" (click)=\"save()\">Save</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-home/floor-plan-home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--CONFIRM MODAL-->\r\n<ng-template #template>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"pull-left\">Message</h4>\r\n        <a (click)=\"bsModalRef.hide()\" href=\"javascript:void(0)\" class=\"pull-right\">\r\n            <i class=\"iconned-close-mini\"></i>\r\n        </a>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        Operation cannot be undone. Are you sure to delete this floorplan?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <a href=\"javascript:void(0)\" class=\"link-blue pull-left\" (click)=\"bsModalRef.hide()\">Do not delete</a>\r\n        <button class=\"blue-button\" (click)=\"deleteItem()\">Yes</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<div class=\"s-body custom-scrolling\">\r\n    <div *ngIf=\"loading\" style=\"padding: 10px;\">\r\n        Loading...\r\n    </div>\r\n    <table class=\"app-table\" *ngIf=\"!loading\">\r\n        <thead>\r\n            <th>FLOORPLAN CODE</th>\r\n            <th style=\"width: 20%;\">FLOORPLAN NAME</th>\r\n            <th style=\"width: 20%;\">HOME PRODUCT</th>\r\n            <th></th>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let item of (loadedData | searchFilter: searchKeys), let i = index\">\r\n                <td>{{item.fp_design_id}}</td>\r\n                <td style=\"color:#42A5F5;\">{{item.fp_design_name}}</td>\r\n                <td style=\"padding-left: 20px;\">{{item.home_design_info.home_design_name}}</td>\r\n                <td class=\"icon-container\">\r\n                    <a [routerLink]=\"['edit', item.fp_design_id]\" href=\"javascript:void(0)\" class=\"action-link iconned-container\"><i class=\"iconned-edit\"></i> Edit</a>\r\n                    <a (click)=\"openModal(template, item.fp_design_id, i)\" href=\"javascript:void(0)\" class=\"action-link iconned-container left-specified-25\"><i class=\"iconned-delete\"></i> Delete</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<app-shared-footer #footer (OnPaginated)=\"onFooterPaginated($event)\"></app-shared-footer>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-home/floor-plan-home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan-home/floor-plan-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloorPlanHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_searchData__ = __webpack_require__("../../../../../src/app/component/main-section/shared/data/searchData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_bs_modal_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utils_utilities__ = __webpack_require__("../../../../../src/app/services/utils/utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_rest_rest_services_service__ = __webpack_require__("../../../../../src/app/services/rest/rest-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_data_progress_provider__ = __webpack_require__("../../../../../src/app/component/main-section/shared/data/progress-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_footer_shared_footer_component__ = __webpack_require__("../../../../../src/app/component/main-section/shared/shared-footer/shared-footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FloorPlanHomeComponent = (function () {
    function FloorPlanHomeComponent(dataService, modalService, toastr, rest) {
        var _this = this;
        this.dataService = dataService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.rest = rest;
        this.setHeader = [true, true, 'Floorplan Set', '', true, false, false, false, true, 'active'];
        this.setFooter = ['', true, true, true, false];
        this.filterData = [];
        this.searchKeys = "";
        this.loading = false;
        this.paginationIndex = 0;
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
        __WEBPACK_IMPORTED_MODULE_2__shared_data_searchData__["a" /* SearchData */].OnSearchValueChanged$.subscribe(function (keys) { return _this.searchData(keys); });
    }
    FloorPlanHomeComponent.prototype.searchData = function (keys) {
        this.searchKeys = keys;
    };
    FloorPlanHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        this.loading = true;
        this.rest.GET('floorplans').then(function (data) {
            _this.filterData = data.data.home_designs;
            _this.footer.updateItems(_this.filterData);
            _this.rest.GET("floorplans?limit=" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].tableMaxItem + "&skip=" + _this.paginationIndex).then(function (data) {
                console.log('init', data.data);
                _this.loadedData = data.data.floorplans;
                _this.loading = false;
                __WEBPACK_IMPORTED_MODULE_8__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
            });
        });
    };
    FloorPlanHomeComponent.prototype.openModal = function (template, id, index) {
        this.deleteId = id;
        this.dataIndex = index;
        this.bsModalRef = this.modalService.show(template);
    };
    FloorPlanHomeComponent.prototype.deleteItem = function () {
        var _this = this;
        // API
        if (__WEBPACK_IMPORTED_MODULE_8__shared_data_progress_provider__["a" /* ProgressProvider */].isRequesting()) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_8__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        this.rest.DELETE('floorplans/' + this.deleteId).then(function (data) {
            console.log(data);
            if (data.status) {
                _this.loadedData.splice(_this.dataIndex, 1);
                _this.bsModalRef.hide();
                __WEBPACK_IMPORTED_MODULE_8__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                _this.toastr.success(__WEBPACK_IMPORTED_MODULE_6__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item deleted successfully"), '', { closeButton: true, enableHtml: true });
            }
            else {
                _this.toastr.error(__WEBPACK_IMPORTED_MODULE_6__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to delete the item. Please try again"), '', { closeButton: true, enableHtml: true });
            }
        });
    };
    FloorPlanHomeComponent.prototype.onFooterPaginated = function (index) {
        var _this = this;
        console.log(index);
        this.paginationIndex = (index * __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].tableMaxItem);
        __WEBPACK_IMPORTED_MODULE_8__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        this.rest.GET("floorplans?limit=" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].tableMaxItem + "&skip=" + this.paginationIndex).then(function (data) {
            _this.loadedData = data.data.home_designs;
            _this.loading = false;
            __WEBPACK_IMPORTED_MODULE_8__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('footer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__shared_shared_footer_shared_footer_component__["a" /* SharedFooterComponent */])
    ], FloorPlanHomeComponent.prototype, "footer", void 0);
    FloorPlanHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-floor-plan-home',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-home/floor-plan-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan-home/floor-plan-home.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_bs_modal_service__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_7__services_rest_rest_services_service__["a" /* RestServices */]])
    ], FloorPlanHomeComponent);
    return FloorPlanHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"division home content-padding\">\r\n    <div class=\"content\">\r\n\r\n        <!-- header  -->\r\n        <app-shared-header></app-shared-header>\r\n\r\n        <!-- body -->\r\n        <router-outlet></router-outlet>\r\n\r\n        <!-- footer -->\r\n        <app-shared-footer [hidden]=\"true\"></app-shared-footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/floor-plan/floor-plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloorPlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FloorPlanComponent = (function () {
    function FloorPlanComponent(dataService) {
        this.dataService = dataService;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [true, true, 'Floorplan Set', '', true, false, false, false, true, 'active'];
        // footer format 
        // ------
        // 0 footer2:string;
        // 1 saveFinishButtonHidden:boolean;
        // 2 nextButtonHidden:boolean;
        // 3 backButtonHidden:boolean;
        // 4 paginationHidden:boolean;
        this.setFooter = ['', true, true, true, false];
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
    }
    FloorPlanComponent.prototype.ngOnInit = function () {
    };
    FloorPlanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-floor-plan',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/floor-plan/floor-plan.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], FloorPlanComponent);
    return FloorPlanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-edit/home-product-edit/home-product-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--CONFIRM MODAL-->\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"pull-left\">Message</h4>\n        <a (click)=\"bsModalRef.hide()\" href=\"javascript:void(0)\" class=\"pull-right\">\n            <i class=\"iconned-close-mini\"></i>\n        </a>\n    </div>\n    <div class=\"modal-body\">\n        {{modalMessage}}\n    </div>\n    <div class=\"modal-footer\">\n        <a href=\"javascript:void(0)\" class=\"link-blue pull-left\" (click)=\"bsModalRef.hide()\">Do not delete</a>\n        <button class=\"blue-button\" (click)=\"deleteItem()\">Yes</button>\n    </div>\n</ng-template>\n\n<div class=\"s-body custom-scrolling\">\n    <div class=\"action-content\">\n        <!--header part-->\n        <ul class=\"app-tab\">\n            <li class=\"active\"><a href=\"javascript:void(0)\">Details</a></li>\n        </ul>\n        <div class=\"action-content-wrapper\">\n            <div class=\"row\">\n                <!-- GENERAL -->\n                <div class=\"col-sm-4\">\n                    <p class=\"action-title\">GENERAL</p>\n                    <div class=\"form-group\">\n                        <label class=\"text-normal\">Home Product Name</label>\n                        <input class=\"form-control\" id=\"home_product_name\" [(ngModel)]=\"homeProduct.home_design_name\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"text-normal\">Home Product Code</label>\n                        <input class=\"form-control\" id=\"home_product_code\" [(ngModel)]=\"homeProduct.design_code\">\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <label class=\"text-normal\">Price</label>\n                                <input class=\"form-control\" [OnlyNumber]=\"true\" id=\"home_product_price\" [(ngModel)]=\"homeProduct.base_price\">\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <label class=\"text-normal\">Number of Floors</label>\n                                <input class=\"form-control\" [OnlyNumber]=\"true\" id=\"home_product_floors\" [(ngModel)]=\"homeProduct.levels\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"text-normal\">Image File</label>\n                        <div class=\"file-input\">\n                            <label for=\"upload\">\n                                <span aria-hidden=\"true\" class=\"btn btn-default border-nothing text-ellipse\">\n                                    <b>{{filename}}</b>\n                                    <a (click)=\"removeImage('')\" href=\"javascript:void(0)\" class=\"action-link\" *ngIf=\"filename != 'Browse'\"><i class=\"iconned-delete-circle\"></i></a>\n                                </span>\n                                <input type=\"file\" id=\"upload\" name=\"division_image_input\" [(ngModel)]=\"division_image_input\" style=\"display:none\" (change)=\"fileChanged($event, 1)\" accept=\"image/*\">\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"text-normal\">Description</label>\n                        <textarea class=\"form-control not-resizable\" rows=\"5\" id=\"home_product_description\" [(ngModel)]=\"homeProduct.description\"></textarea>\n                    </div>\n                </div>\n                <!-- FACADE -->\n                <div class=\"col-sm-4\">\n                    <span class=\"action-title\">FACADE</span>\n                    <div class=\"card\">\n                        <table class=\"app-table-mini\">\n                            <thead>\n                                <th>NAME</th>\n                                <th>\n                                    <a (click)=\"openAddModal(AddFacadeModal, 'facade')\" class=\"link-blue pull-right\" href=\"javascript:void(0)\"><i class=\"iconned-plus-regular left-specified\"></i> Add</a>\n                                </th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of facades, let i = index\">\n                                    <td>{{item.space_name}}</td>\n                                    <td class=\"icon-container\">\n                                        <a href=\"javascript:void(0)\" class=\"iconned-container\" (click)=\"openEditModal(AddFacadeModal, item.space_id, 'facade')\"><i class=\"iconned-edit\"></i></a>\n                                        <a href=\"javascript:void(0)\" class=\"iconned-container\" (click)=\"openModal(template, item.space_id, i, 'facade')\"><i class=\"iconned-delete\"></i></a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <!-- PACKAGES -->\n                <div class=\"col-sm-4\">\n                    <span class=\"action-title\">PACKAGES</span>\n                    <div class=\"card\">\n                        <table class=\"app-table-mini\">\n                            <thead>\n                                <th>NAME</th>\n                                <th>\n                                    <a (click)=\"openAddModal(AddPackageModal, 'package')\" class=\"link-blue pull-right\" href=\"javascript:void(0)\"><i class=\"iconned-plus-regular left-specified\"></i> Add</a>\n                                </th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of packages, let i = index\">\n                                    <td>{{item.package_name}}</td>\n                                    <td class=\"icon-container\">\n                                        <a (click)=\"openEditModal(AddPackageModal, 'package')\" href=\"javascript:void(0)\" class=\"iconned-container\"><i class=\"iconned-edit\"></i></a>\n                                        <a (click)=\"openModal(template, item.package_id, i, 'package')\" href=\"javascript:void(0)\" class=\"iconned-container\"><i class=\"iconned-delete\"></i></a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n<app-shared-footer (OnSubmit)=\"onSubmit()\"></app-shared-footer>\n\n<!-- MODALS -->\n<ng-template #AddFacadeModal>\n    <div class=\"modal-header\">\n        <h4 class=\"pull-left\">{{modalTitle}}</h4>\n        <a (click)=\"bsModalRef.hide()\" href=\"javascript:void(0)\" class=\"pull-right\">\n            <i class=\"iconned-close-mini\"></i>\n        </a>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"form-group\">\n            <label>Facade Name</label>\n            <input type=\"text\" id=\"modal_facade_name\" [(ngModel)]=\"facade.space_name\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n            <label class=\"text-normal\">Image File</label>\n            <div class=\"file-input\">\n                <label>\n                    <span aria-hidden=\"true\" class=\"btn btn-default border-nothing text-ellipse\">\n                        {{modalAddFilename}}\n                        <a (click)=\"removeImage('facade')\" href=\"javascript:void(0)\" class=\"action-link\" *ngIf=\"modalAddFilename != 'Browse'\"><i class=\"iconned-delete-circle\"></i></a>\n                    </span>\n                    <input type=\"file\" name=\"facade_image_input\" style=\"display:none\" (change)=\"modalFileChanged($event, 'facade')\" accept=\"image/*\">\n                </label>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"text-normal\">Description</label>\n            <textarea class=\"form-control not-resizable\" rows=\"5\" id=\"modal_facade_description\" [(ngModel)]=\"facade.description\"></textarea>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <a href=\"javascript:void(0)\" class=\"link-blue pull-left\" (click)=\"bsModalRef.hide()\">Cancel</a>\n        <button class=\"blue-button\" (click)=\"modalSubmit()\">Submit</button>\n    </div>\n</ng-template>\n\n<ng-template #AddPackageModal>\n    <div class=\"modal-header\">\n        <h4 class=\"pull-left\">{{modalTitle}}</h4>\n        <a (click)=\"bsModalRef.hide()\" href=\"javascript:void(0)\" class=\"pull-right\">\n            <i class=\"iconned-close-mini\"></i>\n        </a>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"form-group\">\n            <label>Package Name</label>\n            <input type=\"text\" id=\"modal_package_name\" [(ngModel)]=\"package.package_name\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n            <label class=\"text-normal\">Image File</label>\n            <div class=\"file-input\">\n                <label>\n                    <span aria-hidden=\"true\" class=\"btn btn-default border-nothing text-ellipse\">\n                        {{modalAddFilename}}\n                        <a (click)=\"removeImage('package')\" href=\"javascript:void(0)\" class=\"action-link\" *ngIf=\"modalAddFilename != 'Browse'\">\n                            <i class=\"iconned-delete-circle\"></i>\n                        </a>\n                    </span>\n                    <input type=\"file\" name=\"package_image_input\" style=\"display:none\" (change)=\"modalFileChanged($event, 'package')\" accept=\"image/*\">\n                </label>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"text-normal\">Description</label>\n            <textarea class=\"form-control not-resizable\" rows=\"5\" id=\"modal_package_description\" [(ngModel)]=\"package.description\"></textarea>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <a href=\"javascript:void(0)\" class=\"link-blue pull-left\" (click)=\"bsModalRef.hide()\">Cancel</a>\n        <button class=\"blue-button\" (click)=\"modalSubmit()\">Submit</button>\n    </div>\n</ng-template>\n<ng-template #SelectFacadeModal>\n    <div class=\"modal-header\">\n        <h4 class=\"pull-left\">Select Facade Design</h4>\n        <a (click)=\"bsModalRef.hide()\" href=\"javascript:void(0)\" class=\"pull-right\">\n            <i class=\"iconned-close-mini\"></i>\n        </a>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"form-group\">\n            <popup-search-component (OnItemSelected)=\"onItemSelected($event)\" (OnRequestAdd)=\"onRequestAdd()\" [group_style]=\"true\" [loadedData]=\"loadedData\"></popup-search-component>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <a href=\"javascript:void(0)\" class=\"link-blue pull-left\" (click)=\"bsModalRef.hide()\">Cancel</a>\n        <button class=\"blue-button\" (click)=\"modalSubmit()\">Submit</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-edit/home-product-edit/home-product-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-edit/home-product-edit/home-product-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProductEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__ = __webpack_require__("../../../../../src/app/model/home-products/home-products-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_rest_rest_services_service__ = __webpack_require__("../../../../../src/app/services/rest/rest-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__ = __webpack_require__("../../../../../src/app/component/main-section/shared/data/progress-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__ = __webpack_require__("../../../../../src/app/services/utils/utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal_bs_modal_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomeProductEditComponent = (function () {
    function HomeProductEditComponent(router, dataService, activatedRoute, rest, toastr, modalService, _location) {
        var _this = this;
        this.router = router;
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.rest = rest;
        this.toastr = toastr;
        this.modalService = modalService;
        this._location = _location;
        this.setHeader = [false, false, 'Home Product', 'Edit', false, true, true, true, true, 'disable'];
        this.setFooter = ['footer2', false, true, false, true];
        this.filename = 'Browse';
        this.dataIndex = 0;
        this.taskOwner = 'facade';
        this.modalAddFilename = 'Browse';
        this.modalTitle = '';
        this.operationMode = 'add';
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
        this.activatedRoute.params.subscribe(function (params) {
            _this.homeProductId = params['id'];
        });
        this.homeProduct = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["b" /* HomeProduct */]();
        this.homeProduct.facades = [];
        this.homeProduct.packages = [];
        this.facades = [];
        this.packages = [];
    }
    HomeProductEditComponent.prototype.ngOnInit = function () {
        this.ini();
    };
    HomeProductEditComponent.prototype.ini = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        this.rest.GET('home_products/' + this.homeProductId).then(function (data) {
            console.log(data);
            var _facades = [], _facades_id = [];
            var _packages = [], _packages_id = [];
            _this.homeProduct.home_design_id = data.data.home_design_id;
            _this.homeProduct.base_price = data.data.base_price;
            _this.homeProduct.description = data.data.description;
            _this.homeProduct.design_code = data.data.design_code;
            _this.homeProduct.facades = [];
            _this.homeProduct.packages = [];
            _this.homeProduct.home_design_name = data.data.home_design_name;
            _this.homeProduct.levels = data.data.levels;
            // packages
            for (var i = 0; i < data.data.package_infos.length; i++) {
                var pkg = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["c" /* Package */]();
                pkg.description = data.data.package_infos[i].description;
                pkg.package_code = data.data.package_infos[i].package_code;
                pkg.package_id = data.data.package_infos[i].package_id;
                pkg.package_name = data.data.package_infos[i].package_name;
                pkg.package_type = data.data.package_infos[i].package_type;
                pkg.price = data.data.package_infos[i].price;
                pkg.sub_id = data.data.package_infos[i].sub_id;
                _packages.push(pkg);
                _packages_id.push({ 'package_id': pkg.package_id });
            }
            // facades
            for (var i = 0; i < data.data.space_infos.length; i++) {
                var fcd = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["a" /* Facade */]();
                fcd.description = data.data.space_infos[i].description;
                fcd.space_id = data.data.space_infos[i].space_id;
                fcd.space_name = data.data.space_infos[i].space_name;
                fcd.space_type_id = data.data.space_infos[i].space_type_id;
                fcd.sub_id = data.data.space_infos[i].sub_id;
                _facades.push(fcd);
                _facades_id.push({ 'space_id': fcd.space_id });
            }
            if (data.data.media_files_info) {
                _this.filename = data.data.media_files_info.media_name;
            }
            _this.packages = _packages;
            _this.homeProduct.packages = _packages_id;
            _this.facades = _facades;
            _this.homeProduct.facades = _facades_id;
            __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
        });
    };
    HomeProductEditComponent.prototype.fileChanged = function (event) {
        this.filename = event.srcElement.files[0].name;
        this.newFile = event.srcElement.files[0];
    };
    HomeProductEditComponent.prototype.openModal = function (template, id, index, taskOwner) {
        this.deleteId = id;
        this.dataIndex = index;
        this.taskOwner = taskOwner;
        if (taskOwner == 'facade') {
            this.modalMessage = 'Are you sure to delete this facade?';
        }
        else {
            this.modalMessage = 'Are you sure to delete this package?';
        }
        this.bsModalRef = this.modalService.show(template);
    };
    HomeProductEditComponent.prototype.openAddModal = function (template, taskOwner) {
        var _this = this;
        // preparing data
        this.modalAddFilename = 'Browse';
        this.operationMode = 'add';
        if (taskOwner == 'facade') {
            this.facade = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["a" /* Facade */]();
            this.modalTitle = 'Add Facade Design';
            this.rest.GET('spaces/types').then(function (data) {
                if (data.data.spacetypes && data.data.spacetypes.length > 0) {
                    for (var i = 0; i < data.data.spacetypes.length; i++) {
                        if (data.data.spacetypes[i].type_name == 'facade') {
                            _this.spaceTypeId = data.data.spacetypes[i].type_id;
                            break;
                        }
                    }
                }
            });
            this.bsModalRef = this.modalService.show(template);
        }
        else {
            this.package = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["c" /* Package */]();
            this.modalTitle = 'Add Package  Design';
            this.bsModalRef = this.modalService.show(template);
        }
    };
    HomeProductEditComponent.prototype.openEditModal = function (template, id, taskOwner) {
        var _this = this;
        if (taskOwner == 'facade') {
            __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
            this.facade = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["a" /* Facade */]();
            this.modalTitle = 'Edit Facade Design';
            this.rest.GET("spaces/" + id).then(function (data) {
                if (data.data) {
                    console.log(data.data);
                    _this.facade = data.data;
                    _this.modalAddFilename = data.data.media_files_info ? data.data.media_files_info.media_name : 'Browse';
                    __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                    _this.bsModalRef = _this.modalService.show(template);
                }
            });
        }
        else {
            this.package = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["c" /* Package */]();
            this.modalTitle = 'Edit Package  Design';
            this.bsModalRef = this.modalService.show(template);
        }
        this.operationMode = 'edit';
    };
    HomeProductEditComponent.prototype.modalFileChanged = function (event, taskOwner) {
        this.modalAddFilename = event.srcElement.files[0].name;
        this.taskOwner = taskOwner;
        if (this.taskOwner == 'facade') {
            this.facade.file = event.srcElement.files[0];
        }
        else {
            this.package.file = event.srcElement.files[0];
            console.log(this.package);
        }
    };
    HomeProductEditComponent.prototype.deleteItem = function () {
        var _this = this;
        this.bsModalRef.hide();
        console.log(this.deleteId);
        __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        if (this.taskOwner == 'facade') {
            console.log();
            this.rest.DELETE('spaces/' + this.deleteId).then(function (data) {
                console.log(data);
                if (data.status) {
                    _this.toastr.success(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item deleted successfully"), '', { closeButton: true, enableHtml: true });
                    _this.ini();
                }
                else {
                    _this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to delete the item. Please try again"), '', { closeButton: true, enableHtml: true });
                }
                __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
            });
        }
        else {
        }
    };
    HomeProductEditComponent.prototype.removeImage = function (taskOwner) {
        if (taskOwner == 'facade') {
            this.modalAddFilename = 'Browse';
            this.facade.file = null;
        }
        else if (taskOwner == 'package') {
            this.modalAddFilename = 'Browse';
            this.package.file = null;
        }
        else {
            this.filename = 'Browse';
            this.newFile = null;
        }
    };
    HomeProductEditComponent.prototype.onSubmit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].isRequesting()) {
            return;
        }
        if (!this.homeProduct.home_design_name) {
            this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("Home product name is required."), '', { closeButton: true, enableHtml: true });
            return;
        }
        __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        console.log(this.newFile);
        this.rest.UpdateHomeProducts(this.homeProductId, this.homeProduct, this.newFile).then(function (response) {
            __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
            if (response.status) {
                _this.toastr.success(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item updated successfully"), '', { closeButton: true, enableHtml: true });
                _this._location.back();
            }
            else {
                _this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to update the item. Please try again"), '', { closeButton: true, enableHtml: true });
            }
        });
    };
    HomeProductEditComponent.prototype.modalSubmit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].isRequesting()) {
            return;
        }
        console.log('modal Submit');
        if (this.operationMode == 'add') {
            if (this.taskOwner == 'facade') {
                if (!this.facade.space_name) {
                    this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("Name is required."), '', { closeButton: true, enableHtml: true });
                    return;
                }
                __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
                this.facade.space_type_id = this.spaceTypeId;
                var file = this.facade.file;
                this.facade.file = null;
                this.rest.POST("spaces", this.facade, file).then(function (data) {
                    console.log(data.data);
                    if (data.status) {
                        _this.homeProduct.facades.push({ 'space_id': data.data.space_id });
                        _this.rest.UpdateHomeProducts(_this.homeProductId, _this.homeProduct, null).then(function (data) {
                            console.log(data);
                            if (data.status) {
                                _this.bsModalRef.hide();
                                _this.toastr.success(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item added successfully"), '', { closeButton: true, enableHtml: true });
                                __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                                _this.ini();
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                                _this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to add the item. Please try again"), '', { closeButton: true, enableHtml: true });
                            }
                        });
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                        _this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to add the item. Please try again"), '', { closeButton: true, enableHtml: true });
                    }
                });
            }
            else {
                // package
                console.log(this.package);
                if (!this.package.package_name) {
                    this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("Name is required."), '', { closeButton: true, enableHtml: true });
                    return;
                }
                __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
                var file = this.package.file;
                this.package.file = null;
                this.rest.POST("packages", this.package, file).then(function (data) {
                    console.log(data.data);
                    if (data.status) {
                        _this.homeProduct.packages.push({ 'package_id': data.data.package_id });
                        _this.rest.UpdateHomeProducts(_this.homeProductId, _this.homeProduct, null).then(function (data) {
                            console.log(data);
                            if (data.status) {
                                _this.bsModalRef.hide();
                                _this.toastr.success(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item added successfully"), '', { closeButton: true, enableHtml: true });
                                __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                                _this.ini();
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                                _this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to add the item. Please try again"), '', { closeButton: true, enableHtml: true });
                            }
                        });
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                        _this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to add the item. Please try again"), '', { closeButton: true, enableHtml: true });
                    }
                });
            }
        }
        else {
            // edit
            if (this.taskOwner == 'facade') {
                var file = this.facade.file;
                this.facade.file = null;
                console.log('file nga bag o', file);
                this.rest.PUT("spaces/", this.facade.space_id, this.facade, file).then(function (data) {
                    console.log(data);
                    if (data.status) {
                        _this.bsModalRef.hide();
                        _this.toastr.success(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item updated successfully"), '', { closeButton: true, enableHtml: true });
                        _this.ini();
                    }
                    else {
                        _this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to update the item. Please try again"), '', { closeButton: true, enableHtml: true });
                    }
                });
            }
            else {
                // package
            }
        }
    };
    HomeProductEditComponent.prototype.updateData = function () {
    };
    HomeProductEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-product-edit',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-edit/home-product-edit/home-product-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-edit/home-product-edit/home-product-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_footer_header_data_service__["a" /* FooterHeaderDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_rest_rest_services_service__["a" /* RestServices */], __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal_bs_modal_service__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["f" /* Location */]])
    ], HomeProductEditComponent);
    return HomeProductEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-product-create/home-product-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-body custom-scrolling\">\r\n    <div class=\"action-content\">\r\n        <!--header part-->\r\n        <ul class=\"app-tab\">\r\n            <li class=\"active\"><a href=\"javascript:void(0)\">Details</a></li>\r\n        </ul>\r\n        <div class=\"action-content-wrapper\">\r\n            <div class=\"row\">\r\n                <!-- GENERAL -->\r\n                <div class=\"col-sm-4\">\r\n                    <p class=\"action-title\">GENERAL</p>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"text-normal\">Home Product Name</label>\r\n                        <input class=\"form-control\" id=\"home_product_name\" [(ngModel)]=\"homeProduct.home_design_name\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"text-normal\">Home Product Code</label>\r\n                        <input class=\"form-control\" id=\"home_product_code\" [(ngModel)]=\"homeProduct.design_code\">\r\n                    </div>\r\n                    <!-- <div class=\"form-group\">\r\n                        <label class=\"text-normal\">Home Product Type</label>\r\n                        <input class=\"form-control\" id=\"home_product_type\" [(ngModel)]=\"homeProduct.type\">\r\n                    </div> -->\r\n                    <!-- <div class=\"form-group\">\r\n                        <label class=\"text-normal\">Division</label>\r\n                        <popup-search-component></popup-search-component>\r\n                    </div> -->\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <label class=\"text-normal\">Price</label>\r\n                                <input class=\"form-control\" [OnlyNumber]=\"true\" id=\"home_product_price\" [(ngModel)]=\"homeProduct.base_price\">\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <label class=\"text-normal\">Number of Floors</label>\r\n                                <input class=\"form-control\" [OnlyNumber]=\"true\" id=\"home_product_floors\" [(ngModel)]=\"homeProduct.levels\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"text-normal\">Image File</label>\r\n                        <div class=\"file-input\">\r\n                            <label for=\"upload\">\r\n                                <span aria-hidden=\"true\" class=\"btn btn-default border-nothing text-ellipse\">\r\n                                    <b>{{filename}}</b>\r\n                                    <a (click)=\"removeImage(1)\" href=\"javascript:void(0)\" class=\"action-link\" *ngIf=\"filename != 'Browse'\"><i class=\"iconned-delete-circle\"></i></a>\r\n                                </span>\r\n                                <input type=\"file\" id=\"upload\" name=\"division_image_input\" style=\"display:none\" (change)=\"fileChanged($event, 1)\" accept=\"image/*\">\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"text-normal\">Description</label>\r\n                        <textarea class=\"form-control not-resizable\" rows=\"5\" id=\"home_product_description\" [(ngModel)]=\"homeProduct.description\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <!-- FACADE -->\r\n                <div class=\"col-sm-4\">\r\n                    <div>\r\n                        <span class=\"action-title\">FACADES</span>\r\n                        <a style=\"padding: 0;\" (click)=\"openAddModal(AddFacadeModal, 'facade')\" class=\"link-blue pull-right\" href=\"javascript:void(0)\"><i class=\"iconned-plus-regular left-specified\"></i> Add facades</a>\r\n                    </div>\r\n                    <div class=\"card\">\r\n                        <table class=\"app-table-mini\">\r\n                            <thead>\r\n                                <th>NAME</th>\r\n                                <th>\r\n                                </th>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of facades, let i = index\">\r\n                                    <td>{{item.space_name}}</td>\r\n                                    <td class=\"icon-container\">\r\n                                        <a href=\"javascript:void(0)\" class=\"iconned-container\" (click)=\"openEditModal(AddFacadeModal, item.space_id, 'facade')\"><i class=\"iconned-edit\"></i></a>\r\n                                        <a href=\"javascript:void(0)\" class=\"iconned-container\" (click)=\"removeFacade(i)\"><i class=\"iconned-delete\"></i></a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <!-- PACKAGES -->\r\n                <div class=\"col-sm-4\">\r\n                    <div>\r\n                        <span class=\"action-title\">PACKAGES</span>\r\n                        <a style=\"padding: 0;\" (click)=\"openModal(AddPackageModal, 3)\" class=\"link-blue pull-right\" href=\"javascript:void(0)\"><i class=\"iconned-plus-regular left-specified\"></i> Add packages</a>\r\n                    </div>\r\n                    <div class=\"card\">\r\n                        <table class=\"app-table-mini\">\r\n                            <thead>\r\n                                <th>NAME</th>\r\n                                <th>\r\n                                </th>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of packages, let i = index\">\r\n                                    <td>{{item.display}}</td>\r\n                                    <td class=\"icon-container\">\r\n                                        <a href=\"javascript:void(0)\" class=\"iconned-container\"><i class=\"iconned-edit\"></i></a>\r\n                                        <a (click)=\"removePackage(i)\" href=\"javascript:void(0)\" class=\"iconned-container\"><i class=\"iconned-delete\"></i></a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-shared-footer (OnSubmit)=\"onSubmit()\"></app-shared-footer>\r\n\r\n<!-- MODALS -->\r\n<ng-template #AddFacadeModal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"pull-left\">{{modalTitle}}</h4>\r\n        <a (click)=\"bsModalRef.hide()\" href=\"javascript:void(0)\" class=\"pull-right\">\r\n            <i class=\"iconned-close-mini\"></i>\r\n        </a>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n            <label>Facade Name</label>\r\n            <input type=\"text\" id=\"modal_facade_name\" [(ngModel)]=\"facade.space_name\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"text-normal\">Image File</label>\r\n            <div class=\"file-input\">\r\n                <label>\r\n                    <span aria-hidden=\"true\" class=\"btn btn-default border-nothing text-ellipse\">\r\n                        {{f_filename}}\r\n                        <a (click)=\"removeImage(2)\" href=\"javascript:void(0)\" class=\"action-link\" *ngIf=\"f_filename != 'Browse'\"><i class=\"iconned-delete-circle\"></i></a>\r\n                    </span>\r\n                    <input type=\"file\" name=\"facade_image_input\" style=\"display:none\" (change)=\"fileChanged($event, 2)\" accept=\"image/*\">\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"text-normal\">Description</label>\r\n            <textarea class=\"form-control not-resizable\" rows=\"5\" id=\"modal_facade_description\" [(ngModel)]=\"facade.description\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <a href=\"javascript:void(0)\" class=\"link-blue pull-left\" (click)=\"bsModalRef.hide()\">Cancel</a>\r\n        <button class=\"blue-button\" (click)=\"addEditFacade()\">Submit</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #AddPackageModal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"pull-left\">Add Package Design</h4>\r\n        <a (click)=\"bsModalRef.hide()\" href=\"javascript:void(0)\" class=\"pull-right\">\r\n            <i class=\"iconned-close-mini\"></i>\r\n        </a>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n            <label>Package Name</label>\r\n            <input type=\"text\" id=\"modal_package_name\" [(ngModel)]=\"package.name\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"text-normal\">Image File</label>\r\n            <div class=\"file-input\">\r\n                <label>\r\n                    <span aria-hidden=\"true\" class=\"btn btn-default border-nothing text-ellipse\">\r\n                        {{p_filename}}\r\n                        <a (click)=\"removeImage(3)\" href=\"javascript:void(0)\" class=\"action-link\" *ngIf=\"p_filename != 'Browse'\">\r\n                            <i class=\"iconned-delete-circle\"></i>\r\n                        </a>\r\n                    </span>\r\n                    <input type=\"file\" name=\"package_image_input\" [(ngModel)]=\"package.file\" style=\"display:none\" (change)=\"fileChanged($event, 3)\" accept=\"image/*\">\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"text-normal\">Description</label>\r\n            <textarea class=\"form-control not-resizable\" rows=\"5\" id=\"modal_package_description\" [(ngModel)]=\"package.description\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <a href=\"javascript:void(0)\" class=\"link-blue pull-left\" (click)=\"bsModalRef.hide()\">Cancel</a>\r\n        <button class=\"blue-button\" (click)=\"addPackage()\">Submit</button>\r\n    </div>\r\n</ng-template>\r\n<ng-template #SelectFacadeModal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"pull-left\" *ngIf=\"selectMode=='facade'\">Select Facade Design</h4>\r\n        <h4 class=\"pull-left\" *ngIf=\"selectMode=='package'\">Select Package Design</h4>\r\n        <a (click)=\"bsModalRef.hide()\" href=\"javascript:void(0)\" class=\"pull-right\">\r\n            <i class=\"iconned-close-mini\"></i>\r\n        </a>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n            <popup-search-component (OnItemSelected)=\"onItemSelected($event)\" (OnRequestAdd)=\"onRequestAdd()\" [group_style]=\"true\" [loadedData]=\"loadedData\"></popup-search-component>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <a href=\"javascript:void(0)\" class=\"link-blue pull-left\" (click)=\"bsModalRef.hide()\">Cancel</a>\r\n        <button class=\"blue-button\" (click)=\"facadeSelected()\">Submit</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-product-create/home-product-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-division-types {\n  width: 16vw !important; }\n\n.search-result {\n  max-height: 25vh !important; }\n\n.popover {\n  max-width: 23vw; }\n\n.modal-division-types {\n  max-width: 23vw; }\n\n.card {\n  margin-left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-product-create/home-product-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProductCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__ = __webpack_require__("../../../../../src/app/model/home-products/home-products-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_bs_modal_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_rest_rest_services_service__ = __webpack_require__("../../../../../src/app/services/rest/rest-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__ = __webpack_require__("../../../../../src/app/component/main-section/shared/data/progress-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__ = __webpack_require__("../../../../../src/app/services/utils/utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeProductCreateComponent = (function () {
    function HomeProductCreateComponent(dataService, modalService, rest, toastr, location) {
        this.dataService = dataService;
        this.modalService = modalService;
        this.rest = rest;
        this.toastr = toastr;
        this.location = location;
        this.setHeader = [false, false, 'Home Product', 'Create New', false, true, true, true, true, 'disable'];
        this.setFooter = ['footer2', false, true, false, true];
        this.filename = 'Browse';
        this.f_filename = 'Browse';
        this.p_filename = 'Browse';
        this.loadedData = []; // for displaying list of facades
        this.modalTitle = '';
        this.selectMode = 'facade';
        this.operationMode = 'add';
        this.modalAddFilename = 'Browse';
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
        this.facades = [];
        this.packages = [];
        this.homeProduct = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["b" /* HomeProduct */]();
        this.homeProduct.facades = [];
        this.homeProduct.packages = [];
    }
    // when browsing image file
    HomeProductCreateComponent.prototype.fileChanged = function (event, index) {
        switch (index) {
            case 1:
                this.filename = event.srcElement.files[0].name;
                this.homeProductImage = event.srcElement.files[0];
                break;
            case 2:
                this.f_filename = event.srcElement.files[0].name;
                this.facade.file = event.srcElement.files[0];
                break;
            case 3:
                this.p_filename = event.srcElement.files[0].name;
                this.package.file = event.srcElement.files[0];
                break;
            default:
                break;
        }
    };
    HomeProductCreateComponent.prototype.ngOnInit = function () {
    };
    HomeProductCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.homeProduct);
        if (this.homeProduct.home_design_name) {
            __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
            this.homeProduct.has_media = this.homeProductImage != null;
            this.rest.AddHomeProducts(this.homeProduct, this.homeProductImage).then(function (data) {
                __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                console.log(data);
                if (data.status) {
                    _this.toastr.success(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("New product has been successfully added."), '', { closeButton: true, enableHtml: true });
                    _this.location.back();
                }
                else {
                    _this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("An error occured while adding the item. Please try again."), '', { closeButton: true, enableHtml: true });
                }
            });
        }
        else {
            this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("Product name is required."), '', { closeButton: true, enableHtml: true });
        }
    };
    HomeProductCreateComponent.prototype.removeImage = function (index) {
        switch (index) {
            case 1:
                this.filename = 'Browse';
                this.homeProductImage = null;
                break;
            case 2:
                this.f_filename = 'Browse';
                this.facade.file = null;
                break;
            case 3:
                this.p_filename = 'Browse';
                this.package.file = null;
                break;
            default:
                break;
        }
    };
    HomeProductCreateComponent.prototype.openModal = function (template, index) {
        switch (index) {
            case 1:
                break;
            case 2:
                this.resetFacade();
                break;
            case 3:
                this.resetPackage();
                // this.selectMode = 'package';
                // this.preparePackages();
                break;
            case 4:
                this.selectMode = 'facade';
                //this.prepareFacades();
                break;
            default:
                break;
        }
        this.bsModalRef = this.modalService.show(template);
    };
    HomeProductCreateComponent.prototype.openAddModal = function (template, taskOwner) {
        var _this = this;
        // preparing data
        this.modalAddFilename = 'Browse';
        this.operationMode = 'add';
        if (taskOwner == 'facade') {
            this.facade = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["a" /* Facade */]();
            this.modalTitle = 'Add Facade Design';
            this.rest.GET('spaces/types').then(function (data) {
                if (data.data.spacetypes && data.data.spacetypes.length > 0) {
                    for (var i = 0; i < data.data.spacetypes.length; i++) {
                        if (data.data.spacetypes[i].type_name == 'facade') {
                            _this.spaceTypeId = data.data.spacetypes[i].type_id;
                            break;
                        }
                    }
                }
            });
            this.bsModalRef = this.modalService.show(template);
        }
        else {
            this.package = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["c" /* Package */]();
            this.modalTitle = 'Add Package  Design';
            this.bsModalRef = this.modalService.show(template);
        }
    };
    HomeProductCreateComponent.prototype.openEditModal = function (template, id, taskOwner) {
        var _this = this;
        if (taskOwner == 'facade') {
            __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
            this.facade = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["a" /* Facade */]();
            this.modalTitle = 'Edit Facade Design';
            this.rest.GET("spaces/" + id).then(function (data) {
                if (data.data) {
                    console.log(data.data);
                    _this.facade = data.data;
                    _this.modalAddFilename = data.data.media_files_info ? data.data.media_files_info.media_name : 'Browse';
                    __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                    _this.bsModalRef = _this.modalService.show(template);
                }
            });
        }
        else {
            this.package = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["c" /* Package */]();
            this.modalTitle = 'Edit Package  Design';
            this.bsModalRef = this.modalService.show(template);
        }
        this.operationMode = 'edit';
    };
    HomeProductCreateComponent.prototype.addEditFacade = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].isRequesting()) {
            return;
        }
        if (!this.facade.space_name) {
            this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("Name is required."), '', { closeButton: true, enableHtml: true });
            return;
        }
        __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        if (this.operationMode == 'add') {
            this.facade.space_type_id = this.spaceTypeId;
            var file = this.facade.file;
            this.facade.file = null;
            this.rest.POST("spaces", this.facade, file).then(function (data) {
                if (data.status) {
                    _this.homeProduct.facades.push({ 'space_id': data.data.space_id });
                    _this.bsModalRef.hide();
                    _this.toastr.success(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item added successfully"), '', { closeButton: true, enableHtml: true });
                    __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                    _this.getFacade(data.data.space_id);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                    _this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to add the item. Please try again"), '', { closeButton: true, enableHtml: true });
                }
            });
        }
        else {
            var file = this.facade.file;
            this.facade.file = null;
            console.log('file nga bag o', file);
            this.rest.PUT("spaces/", this.facade.space_id, this.facade, file).then(function (data) {
                console.log(data);
                if (data.status) {
                    _this.bsModalRef.hide();
                    _this.toastr.success(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item updated successfully"), '', { closeButton: true, enableHtml: true });
                    _this.getFacade(_this.facade.space_id);
                }
                else {
                    _this.toastr.error(__WEBPACK_IMPORTED_MODULE_7__services_utils_utilities__["a" /* Utilities */].getToastContentError("Unable to update the item. Please try again"), '', { closeButton: true, enableHtml: true });
                }
            });
        }
    };
    HomeProductCreateComponent.prototype.addPackage = function () {
        this.packages.push(this.package);
        this.resetPackage();
        this.bsModalRef.hide();
    };
    HomeProductCreateComponent.prototype.removeFacade = function (index) {
        this.facades.splice(index, 1);
    };
    HomeProductCreateComponent.prototype.removePackage = function (index) {
        this.packages.splice(index, 1);
    };
    HomeProductCreateComponent.prototype.resetFacade = function () {
        this.facade = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["a" /* Facade */]();
        this.facade.description = '';
        this.facade.space_name = '';
        this.f_filename = 'Browse';
    };
    HomeProductCreateComponent.prototype.resetPackage = function () {
        this.package = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["c" /* Package */]();
        this.package.description = '';
        this.package.package_name = '';
        this.p_filename = 'Browse';
    };
    HomeProductCreateComponent.prototype.onItemSelected = function (data) {
        this.selectedData = data;
    };
    HomeProductCreateComponent.prototype.onRequestAdd = function () {
        if (this.selectMode == 'facade') {
            this.openModal(this.AddFacadeModal, 0);
        }
        else {
            this.openModal(this.AddPackageModal, 0);
        }
    };
    HomeProductCreateComponent.prototype.getFacade = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        this.rest.GET('spaces/' + id).then(function (data) {
            var exist = false;
            console.log(data);
            for (var i = 0; i < _this.facades.length; i++) {
                if (_this.facades[i].space_id == data.data.space_id) {
                    _this.facades[i] = data.data;
                    exist = true;
                    break;
                }
            }
            console.log(exist);
            if (!exist) {
                _this.facades.push(data.data);
            }
            __WEBPACK_IMPORTED_MODULE_5__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('AddFacadeModal'),
        __metadata("design:type", Object)
    ], HomeProductCreateComponent.prototype, "AddFacadeModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('AddPackageModal'),
        __metadata("design:type", Object)
    ], HomeProductCreateComponent.prototype, "AddPackageModal", void 0);
    HomeProductCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-product-create',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product-create/home-product-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product-create/home-product-create.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_bs_modal_service__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_4__services_rest_rest_services_service__["a" /* RestServices */], __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["f" /* Location */]])
    ], HomeProductCreateComponent);
    return HomeProductCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-product-create/modal/add-home-product-modal/add-home-product-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"pull-left\">Add Home Product</h4>\n    <a (click)=\"close()\" href=\"javascript:void(0)\" class=\"pull-right\">\n        <i class=\"iconned-close-mini\"></i>\n    </a>\n</div>\n<div class=\"modal-body\">\n    <div class=\"form-group\">\n        <label class=\"text-normal\">Home Product Name</label>\n        <input class=\"form-control\" id=\"home_product_name\" [(ngModel)]=\"homeProduct.home_design_name\" required>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"text-normal\">Home Product Code</label>\n        <input class=\"form-control\" id=\"home_product_code\" [(ngModel)]=\"homeProduct.design_code\">\n    </div>\n    <div class=\"form-group\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <label class=\"text-normal\">Price</label>\n                <input class=\"form-control\" [OnlyNumber]=\"true\" id=\"home_product_price\" [(ngModel)]=\"homeProduct.base_price\">\n            </div>\n            <div class=\"col-sm-6\">\n                <label class=\"text-normal\">Number of Floors</label>\n                <input class=\"form-control\" [OnlyNumber]=\"true\" id=\"home_product_floors\" [(ngModel)]=\"homeProduct.levels\">\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"text-normal\">Image File</label>\n        <div class=\"file-input\">\n            <label for=\"upload\">\n                <span aria-hidden=\"true\" class=\"btn btn-default border-nothing text-ellipse\">\n                    <b>{{filename}}</b>\n                    <a (click)=\"removeImage()\" href=\"javascript:void(0)\" class=\"action-link\" *ngIf=\"filename != 'Browse'\"><i class=\"iconned-delete-circle\"></i></a>\n                </span>\n                <input type=\"file\" id=\"upload\" name=\"division_image_input\" style=\"display:none\" (change)=\"fileChanged($event, 1)\" accept=\"image/*\">\n            </label>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"text-normal\">Description</label>\n        <textarea class=\"form-control not-resizable\" rows=\"5\" id=\"home_product_description\" [(ngModel)]=\"homeProduct.description\"></textarea>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <a href=\"javascript:void(0)\" class=\"link-blue pull-left\" (click)=\"close()\">Cancel</a>\n    <button class=\"blue-button\" (click)=\"submit()\">Submit</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-product-create/modal/add-home-product-modal/add-home-product-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-product-create/modal/add-home-product-modal/add-home-product-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHomeProductModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_rest_rest_services_service__ = __webpack_require__("../../../../../src/app/services/rest/rest-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__ = __webpack_require__("../../../../../src/app/model/home-products/home-products-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_progress_provider__ = __webpack_require__("../../../../../src/app/component/main-section/shared/data/progress-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utils_utilities__ = __webpack_require__("../../../../../src/app/services/utils/utilities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddHomeProductModalComponent = (function () {
    function AddHomeProductModalComponent(rest, toastr) {
        this.rest = rest;
        this.toastr = toastr;
        this.OnSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.filename = 'Browse';
    }
    AddHomeProductModalComponent.prototype.ngOnInit = function () {
        this.homeProduct = new __WEBPACK_IMPORTED_MODULE_2__model_home_products_home_products_model__["b" /* HomeProduct */]();
        this.homeProduct.facades = [];
        this.homeProduct.packages = [];
    };
    AddHomeProductModalComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.homeProduct);
        if (__WEBPACK_IMPORTED_MODULE_3__shared_data_progress_provider__["a" /* ProgressProvider */].isRequesting()) {
            return;
        }
        if (!this.homeProduct.home_design_name) {
            this.toastr.error(__WEBPACK_IMPORTED_MODULE_5__services_utils_utilities__["a" /* Utilities */].getToastContentError("Name is required."), '', { closeButton: true, enableHtml: true });
            return;
        }
        __WEBPACK_IMPORTED_MODULE_3__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        this.rest.AddHomeProducts(this.homeProduct, this.file).then(function (response) {
            if (response.status) {
                _this.rest.GET('home_products').then(function (_data) {
                    __WEBPACK_IMPORTED_MODULE_3__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
                    _this.toastr.success(__WEBPACK_IMPORTED_MODULE_5__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("New product has been successfully added."), '', { closeButton: true, enableHtml: true });
                    _this.OnSubmit.emit(_data.data.home_designs);
                });
            }
            else {
                _this.toastr.error(__WEBPACK_IMPORTED_MODULE_5__services_utils_utilities__["a" /* Utilities */].getToastContentError("An error  occured. Please try again."), '', { closeButton: true, enableHtml: true });
            }
        });
    };
    AddHomeProductModalComponent.prototype.close = function () {
        this.OnClose.emit(null);
    };
    AddHomeProductModalComponent.prototype.removeImage = function () {
        this.filename = 'Browse';
        this.file = null;
    };
    AddHomeProductModalComponent.prototype.fileChanged = function (event) {
        this.file = event.srcElement.files[0];
        this.filename = this.file.name;
        console.log(this.filename);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AddHomeProductModalComponent.prototype, "OnSubmit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AddHomeProductModalComponent.prototype, "OnClose", void 0);
    AddHomeProductModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-home-product-modal',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product-create/modal/add-home-product-modal/add-home-product-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product-create/modal/add-home-product-modal/add-home-product-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_rest_rest_services_service__["a" /* RestServices */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], AddHomeProductModalComponent);
    return AddHomeProductModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-product-home/home-product-home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--CONFIRM MODAL-->\r\n<ng-template #template>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"pull-left\">Message</h4>\r\n        <a (click)=\"bsModalRef.hide()\" href=\"javascript:void(0)\" class=\"pull-right\">\r\n            <i class=\"iconned-close-mini\"></i>\r\n        </a>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        Operation cannot be undone. Are you sure to delete this item?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <a href=\"javascript:void(0)\" class=\"link-blue pull-left\" (click)=\"bsModalRef.hide()\">Do not delete</a>\r\n        <button class=\"blue-button\" (click)=\"deleteItem()\">Yes</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<div class=\"s-body custom-scrolling\">\r\n    <div *ngIf=\"loading\" style=\"padding: 10px;\">\r\n        Loading...\r\n    </div>\r\n    <table class=\"app-table\" *ngIf=\"!loading\">\r\n        <thead>\r\n            <th>CODE</th>\r\n            <th>NAME</th>\r\n            <th>TYPE</th>\r\n            <th>FLOORS</th>\r\n            <th></th>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let item of (loadedData | searchFilter: searchKeys)  | orderBy: 'home_design_id':true, let i = index\">\r\n                <td>{{item.design_code}}</td>\r\n                <td style=\"color:#42A5F5;\">{{item.home_design_name}}</td>\r\n                <td></td>\r\n                <td style=\"padding-left: 30px;\">{{item.levels}}</td>\r\n                <td class=\"icon-container\">\r\n                    <a class=\"action-link iconned-container\" [routerLink]=\"['edit', item.home_design_id]\"><i class=\"iconned-edit\"></i> Edit</a>\r\n                    <a href=\"javascript:void(0)\" class=\"action-link iconned-container left-specified-25\" (click)=\"openModal(template, item.home_design_id, i)\"><i class=\"iconned-delete\"></i> Delete</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<!-- footer -->\r\n<app-shared-footer #footer (OnPaginated)=\"onFooterPaginated($event)\"></app-shared-footer>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-product-home/home-product-home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4 {\n  font-family: Roboto;\n  color: #424242; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-product-home/home-product-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProductHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_searchData__ = __webpack_require__("../../../../../src/app/component/main-section/shared/data/searchData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_progress_provider__ = __webpack_require__("../../../../../src/app/component/main-section/shared/data/progress-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_rest_rest_services_service__ = __webpack_require__("../../../../../src/app/services/rest/rest-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal_bs_modal_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_utils_utilities__ = __webpack_require__("../../../../../src/app/services/utils/utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_footer_shared_footer_component__ = __webpack_require__("../../../../../src/app/component/main-section/shared/shared-footer/shared-footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomeProductHomeComponent = (function () {
    function HomeProductHomeComponent(dataService, rest, modalService, toastr) {
        var _this = this;
        this.dataService = dataService;
        this.rest = rest;
        this.modalService = modalService;
        this.toastr = toastr;
        this.setHeader = [true, true, 'Home Product', '', true, false, false, false, true, 'active'];
        this.deleteId = 0;
        this.dataIndex = -1;
        this.loading = true;
        this.loadedData = [];
        this.filterData = [];
        this.searchKeys = "";
        this.setFooter = ['', true, true, true, false];
        this.paginationIndex = 0;
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
        __WEBPACK_IMPORTED_MODULE_3__shared_data_searchData__["a" /* SearchData */].OnSearchValueChanged$.subscribe(function (keys) { return _this.searchData(keys); });
    }
    HomeProductHomeComponent.prototype.searchData = function (keys) {
        this.searchKeys = keys;
    };
    HomeProductHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        this.rest.GET("home_products").then(function (data) {
            _this.filterData = data.data.home_designs;
            _this.footer.updateItems(_this.filterData);
        });
        this.rest.GET("home_products?limit=" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].tableMaxItem + "&skip=" + this.paginationIndex).then(function (data) {
            console.log(data.data);
            _this.loadedData = data.data.home_designs;
            _this.loading = false;
            __WEBPACK_IMPORTED_MODULE_4__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
        });
    };
    HomeProductHomeComponent.prototype.onFooterPaginated = function (index) {
        var _this = this;
        console.log(index);
        this.paginationIndex = (index * __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].tableMaxItem);
        __WEBPACK_IMPORTED_MODULE_4__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        this.rest.GET("home_products?limit=" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].tableMaxItem + "&skip=" + this.paginationIndex).then(function (data) {
            _this.loadedData = data.data.home_designs;
            _this.loading = false;
            __WEBPACK_IMPORTED_MODULE_4__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
        });
    };
    HomeProductHomeComponent.prototype.openModal = function (template, id, index) {
        this.deleteId = id;
        this.dataIndex = index;
        this.bsModalRef = this.modalService.show(template);
    };
    HomeProductHomeComponent.prototype.deleteItem = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4__shared_data_progress_provider__["a" /* ProgressProvider */].startLoading();
        this.rest.DELETE("home_products/" + this.deleteId).then(function (data) {
            __WEBPACK_IMPORTED_MODULE_4__shared_data_progress_provider__["a" /* ProgressProvider */].stopLoading();
            if (data.status) {
                _this.loadedData.splice(_this.dataIndex, 1);
                _this.bsModalRef.hide();
                _this.toastr.success(__WEBPACK_IMPORTED_MODULE_8__services_utils_utilities__["a" /* Utilities */].getToastContentSuccess("Item deleted successfully"), '', { closeButton: true, enableHtml: true });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('footer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__shared_shared_footer_shared_footer_component__["a" /* SharedFooterComponent */])
    ], HomeProductHomeComponent.prototype, "footer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modal'),
        __metadata("design:type", Object)
    ], HomeProductHomeComponent.prototype, "modal", void 0);
    HomeProductHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-product-home',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product-home/home-product-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product-home/home-product-home.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */], __WEBPACK_IMPORTED_MODULE_5__services_rest_rest_services_service__["a" /* RestServices */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal_bs_modal_service__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */]])
    ], HomeProductHomeComponent);
    return HomeProductHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-padding\">\r\n    <div class=\"content\">\r\n\r\n        <!-- header  -->\r\n        <app-shared-header></app-shared-header>\r\n\r\n        <!-- body -->\r\n        <div>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/home-product/home-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeProductComponent = (function () {
    function HomeProductComponent(dataService) {
        this.dataService = dataService;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [true, true, 'Home Product', '', true, false, false, false, true, 'active'];
        // footer format 
        // ------
        // 0 footer2:string;
        // 1 saveFinishButtonHidden:boolean;
        // 2 nextButtonHidden:boolean;
        // 3 backButtonHidden:boolean;
        // 4 paginationHidden:boolean;
        this.setFooter = ['', true, true, true, false];
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
    }
    HomeProductComponent.prototype.ngOnInit = function () {
    };
    HomeProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-product',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/home-product/home-product.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], HomeProductComponent);
    return HomeProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/packages/packages-home/packages-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-body\">\r\n    <table class=\"app-table\">\r\n        <thead>\r\n            <th>ID</th>\r\n            <th>PACKAGES</th>\r\n            <th>PACKAGE TYPE</th>\r\n            <th></th>\r\n            <th></th>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>0001</td>\r\n                <td>Diamond</td>\r\n                <td>Standard</td>\r\n                <td><a routerLink='#'>Open</a></td>\r\n                <td>Delete</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/packages/packages-home/packages-home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/packages/packages-home/packages-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagesHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PackagesHomeComponent = (function () {
    function PackagesHomeComponent() {
    }
    PackagesHomeComponent.prototype.ngOnInit = function () {
    };
    PackagesHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-packages-home',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/packages/packages-home/packages-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/packages/packages-home/packages-home.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PackagesHomeComponent);
    return PackagesHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/packages/packages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"division home content-padding\">\r\n    <div class=\"content\">\r\n\r\n        <!-- header  -->\r\n        <app-shared-header></app-shared-header>\r\n\r\n        <!-- body -->\r\n        <!-- home -->\r\n        <div *ngIf=\"home\">\r\n            <app-packages-home></app-packages-home>\r\n        </div>\r\n        <!-- create new -->\r\n        <!-- <div *ngIf=\"create\">\r\n            <app-division-create></app-division-create>\r\n          </div> -->\r\n\r\n        <!-- footer -->\r\n        <app-shared-footer></app-shared-footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/packages/packages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/packages/packages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PackagesComponent = (function () {
    // footer format 
    // ------
    // 0 footer2:string; || value "footer2"  <-- this will make footer background color to white :) else value to ""
    // 1 saveFinishButtonHidden:boolean;
    // 2 nextButtonHidden:boolean;
    // 3 backButtonHidden:boolean;
    // 4 paginationHidden:boolean;
    // setFooter = ['',true,true,true,false];
    function PackagesComponent() {
        this.home = true;
        this.create = false;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [true, true, 'Packages', '', true, false, false, false, true, 'active'];
    }
    PackagesComponent.prototype.ngOnInit = function () {
        // this.home = true;
        // this.create = false;
    };
    PackagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-packages',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/packages/packages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/packages/packages.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PackagesComponent);
    return PackagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/unit-manager/unit-manager-home/unit-manager-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-body\">\r\n    <table class=\"app-table\">\r\n        <thead>\r\n            <th>UNIT CODE</th>\r\n            <th>Level</th>\r\n            <th>HOME PRODUCT</th>\r\n            <th>STATUS</th>\r\n            <th>tt</th>\r\n            <th>qq</th>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>L1</td>\r\n                <td>1</td>\r\n                <td>Test</td>\r\n                <td>Single</td>\r\n                <td>Open</td>\r\n                <td>Delete</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/unit-manager/unit-manager-home/unit-manager-home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/unit-manager/unit-manager-home/unit-manager-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitManagerHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnitManagerHomeComponent = (function () {
    function UnitManagerHomeComponent(dataService) {
        this.dataService = dataService;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [true, true, 'Unit Manager', '', true, false, false, false, true, 'active'];
        // footer format 
        // ------
        // 0 footer2:string;
        // 1 saveFinishButtonHidden:boolean;
        // 2 nextButtonHidden:boolean;
        // 3 backButtonHidden:boolean;
        // 4 paginationHidden:boolean;
        this.setFooter = ['', true, true, true, false];
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
    }
    UnitManagerHomeComponent.prototype.ngOnInit = function () {
    };
    UnitManagerHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-unit-manager-home',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/unit-manager/unit-manager-home/unit-manager-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/unit-manager/unit-manager-home/unit-manager-home.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], UnitManagerHomeComponent);
    return UnitManagerHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/unit-manager/unit-manager-sub/unit-manager-sub.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  unit-manager-sub works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/unit-manager/unit-manager-sub/unit-manager-sub.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/unit-manager/unit-manager-sub/unit-manager-sub.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitManagerSubComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnitManagerSubComponent = (function () {
    function UnitManagerSubComponent(dataService) {
        this.dataService = dataService;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [false, false, 'Unit Manager', 'Create New', false, true, true, true, true, 'disable'];
        // footer format 
        // ------
        // 0 footer2:string;
        // 1 saveFinishButtonHidden:boolean;
        // 2 nextButtonHidden:boolean;
        // 3 backButtonHidden:boolean;
        // 4 paginationHidden:boolean;
        this.setFooter = ['footer2', false, true, true, true];
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
    }
    UnitManagerSubComponent.prototype.ngOnInit = function () {
    };
    UnitManagerSubComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-unit-manager-sub',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/unit-manager/unit-manager-sub/unit-manager-sub.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/unit-manager/unit-manager-sub/unit-manager-sub.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], UnitManagerSubComponent);
    return UnitManagerSubComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/content/unit-manager/unit-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"division home content-padding\">\r\n    <div class=\"content\">\r\n\r\n        <!-- header  -->\r\n        <app-shared-header></app-shared-header>\r\n\r\n        <!-- body -->\r\n        <router-outlet></router-outlet>\r\n\r\n        <!-- footer -->\r\n        <app-shared-footer></app-shared-footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/unit-manager/unit-manager.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/content/unit-manager/unit-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnitManagerComponent = (function () {
    function UnitManagerComponent(dataService) {
        this.dataService = dataService;
        // header format
        // ------
        // 1 backbuttonHidden:boolean;
        // 2 forwardslashHidden:boolean;
        // 3 breadcrumb1:string;
        // 4 breadcrumb2:string;
        // 5 breadcrumb2Hidden:boolean;
        // 6 createButtonHidden:boolean;
        // 7 searchBarHidden:boolean;
        // 8 filterBarHidden:boolean;
        // 9 filterButtonHidden:boolean; 
        // 10 breadcrumbState:string = 'active';
        this.setHeader = [true, true, 'Unit Manager', '', true, false, false, false, true, 'active'];
        // footer format 
        // ------
        // 0 footer2:string;
        // 1 saveFinishButtonHidden:boolean;
        // 2 nextButtonHidden:boolean;
        // 3 backButtonHidden:boolean;
        // 4 paginationHidden:boolean;
        this.setFooter = ['', true, true, true, false];
        dataService.varHeader.next(this.setHeader);
        dataService.varFooter.next(this.setFooter);
    }
    UnitManagerComponent.prototype.ngOnInit = function () {
    };
    UnitManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-unit-manager',
            template: __webpack_require__("../../../../../src/app/component/main-section/content/unit-manager/unit-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/content/unit-manager/unit-manager.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_footer_header_data_service__["a" /* FooterHeaderDataService */]])
    ], UnitManagerComponent);
    return UnitManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/main-section.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toast-notification></app-toast-notification>\n<!-- this displays the component inside the main-section components -->\n<div id=\"main-sect\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/main-section.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-sect {\n  background-color: #ECEFF1; }\n\n.content-padding {\n  padding: 2vh 1.99vw; }\n\n.content {\n  width: 76.82vw;\n  height: 81.29vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/main-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainSectionComponent = (function () {
    function MainSectionComponent() {
    }
    MainSectionComponent.prototype.ngOnInit = function () {
    };
    MainSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-section',
            template: __webpack_require__("../../../../../src/app/component/main-section/main-section.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/main-section.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], MainSectionComponent);
    return MainSectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/confirm-modal/confirm-modal.html":
/***/ (function(module, exports) {

module.exports = "<template #modal>\r\n        <div class=\"m-header\">\r\n                <h4 class=\"modal-title pull-left\">{{title}}</h4>\r\n                <a (click)=\"cancel()\" href=\"javascript:void(0)\" class=\"action-link pull-right\">\r\n                    <i class=\"iconned-close-mini\"></i>\r\n                </a>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                {{message}}\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"no();\">Cancel</button>\r\n                <button class=\"btn btn-danger\" (click)=\"yes()\">Yes</button>\r\n            </div>\r\n</template>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/confirm-modal/confirm-modal.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal.show .modal-dialog {\n  width: 40vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/confirm-modal/confirm-modal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationModalComponent = (function () {
    function ConfirmationModalComponent(modalService) {
        this.modalService = modalService;
        this.selectedData = "";
        // event: occurs when yes/no button is pressed/clicked
        this.OnUserResponsed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ConfirmationModalComponent.prototype.yes = function () {
        this.modalService.hide(this.modalService.getModalsCount());
        this.OnUserResponsed.emit(ConfirmationResponse.YES);
    };
    ConfirmationModalComponent.prototype.no = function () {
        this.modalService.hide(this.modalService.getModalsCount());
        this.OnUserResponsed.emit(ConfirmationResponse.NO);
    };
    ConfirmationModalComponent.prototype.cancel = function () {
        this.modalService.hide(this.modalService.getModalsCount());
        this.OnUserResponsed.emit(ConfirmationResponse.CANCEL);
    };
    ConfirmationModalComponent.prototype.ngOnInit = function () {
        //console.log(this.message);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ConfirmationModalComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ConfirmationModalComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ConfirmationModalComponent.prototype, "OnUserResponsed", void 0);
    ConfirmationModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-modal',
            template: __webpack_require__("../../../../../src/app/component/main-section/shared/confirm-modal/confirm-modal.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/shared/confirm-modal/confirm-modal.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], ConfirmationModalComponent);
    return ConfirmationModalComponent;
}());

var ConfirmationResponse;
(function (ConfirmationResponse) {
    ConfirmationResponse[ConfirmationResponse["YES"] = 0] = "YES";
    ConfirmationResponse[ConfirmationResponse["NO"] = 1] = "NO";
    ConfirmationResponse[ConfirmationResponse["CANCEL"] = 2] = "CANCEL";
})(ConfirmationResponse || (ConfirmationResponse = {}));


/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/data/progress-provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nprogress__ = __webpack_require__("../../../../nprogress/nprogress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressProvider = (function () {
    function ProgressProvider() {
    }
    ProgressProvider.startLoading = function () {
        this._requesting = true;
        __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.start();
    };
    ProgressProvider.stopLoading = function () {
        this._requesting = false;
        __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.done();
    };
    ProgressProvider.testLoading = function (duration) {
        __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.start();
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.done();
        }, duration * 1000);
    };
    ProgressProvider.isRequesting = function () {
        return this._requesting;
    };
    ProgressProvider._requesting = false;
    ProgressProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProgressProvider);
    return ProgressProvider;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/data/searchData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchData = (function () {
    function SearchData() {
    }
    SearchData.changeData = function (keys) {
        this.OnSearchValueChanged$.emit(keys);
    };
    SearchData.OnSearchValueChanged$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    SearchData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SearchData);
    return SearchData;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/footer-header-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterHeaderDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterHeaderDataService = (function () {
    function FooterHeaderDataService() {
        // header var array
        // ------------------------
        // 0 backbuttonHidden:boolean;
        // 1 forwardslashHidden:boolean;
        // 2 breadcrumb1:string;
        // 3 breadcrumb2:string;
        // 4 breadcrumb2Hidden:boolean;
        // 5 createButtonHidden:boolean;
        // 6 searchBarHidden:boolean;
        // 7 filterBarHidden:boolean;
        // 8 filterButtonHidden:boolean; 
        // 9 breadcrumbState:string = 'active';
        // ------------------------
        this.varHeader = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */]([true, true, '', '', true, false, false, false, false, 'active']);
        // footer var array
        // ------------------------
        // 0 footer2:string;  
        // 1 saveFinishButtonHidden:boolean;
        // 2 nextButtonHidden:boolean;
        // 3 backButtonHidden:boolean;
        // 4 paginationHidden:boolean;
        // ------------------------
        this.varFooter = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */](['', true, true, true, false]);
    }
    FooterHeaderDataService.prototype.serviceCreateNew = function () {
    };
    FooterHeaderDataService.prototype.serviceBack = function () {
    };
    FooterHeaderDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FooterHeaderDataService);
    return FooterHeaderDataService;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/popup-search/popup-search-component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #popTemplate>\r\n    <div class=\"modal-division-types\" [ngClass]=\"widthExp ? 'modal-division-types' : 'passWidth'\">\r\n        <div class=\"option-list\">\r\n            <div class=\"nav flex-row nav-pills custom-scrolling search-result active-hover\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\" style=\"display: block; border-right: none!important; padding-top: 15px;padding-bottom: 10px;\">\r\n                <a *ngFor=\"let item of (loadedData | searchFilter: selectedData)\" [ngClass]=\"selectedData == item ? 'active' : ''\" (click)=\"selectItem(item)\" class=\"nav-link\" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"false\">\r\n                    {{item.display}}\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"option-list padding-specified\" style=\"border-bottom: 0!important;\">\r\n            <a (click)=\"requestAdd()\" href=\"javascript:void(0)\" class=\"link-blue\" style=\"padding-left: 0!important;\"><i style=\"padding-right: 10px!important;\" class=\"iconned-plus-regular\"></i> Add new</a>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n<div [ngClass]=\"group_style ? 'app-input-group' : 'form-group'\">\r\n    <i class=\"iconned-infinite icon-left\" *ngIf=\"group_style && showIcon\"></i>\r\n    <input #search [(ngModel)]=\"selectedData\" type=\"text\" (click)=\"selectedData=''\" class=\"form-control\" [popover]=\"popTemplate\" placement=\"bottom\" #popover=\"bs-popover\" [outsideClick]=\"true\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/popup-search/popup-search-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-division-types {\n  width: 23vw;\n  background-color: white; }\n\n.passWidth {\n  width: 250px; }\n\n.m-header {\n  height: 50px;\n  border-bottom: 1px solid #E0E0E0;\n  padding: 10px; }\n\n.m-header-title {\n  font-size: 17px;\n  font-family: Roboto;\n  font-weight: bold;\n  top: 10px; }\n\n.popover {\n  max-width: 24vw; }\n\n.popover-arrow,\n.arrow {\n  display: none !important; }\n\n.popover-content {\n  padding: 0; }\n\n.option-list {\n  border-bottom: 1px solid #E0E0E0; }\n\n.padding-specified {\n  padding: 15px; }\n\n.more-rounded {\n  border-radius: 10px; }\n\n.more-rounded-button {\n  border-radius: 20px; }\n\n.search-result {\n  max-height: 250px;\n  overflow-y: auto; }\n\n.active-hover > a:hover {\n  background-color: #1976D2;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/popup-search/popup-search-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchFilter = (function () {
    function SearchFilter() {
    }
    SearchFilter.prototype.transform = function (items, keys) {
        var url = window.location.href.split('/')[window.location.href.split('/').length - 1];
        switch (url) {
            case "homeproduct":
                return keys
                    ? items.filter(function (item) { return item.home_design_name.toLocaleLowerCase().indexOf(keys) !== -1 || (item.design_code.toLocaleLowerCase().indexOf(keys) !== -1) ||
                        item.levels.toString().toLocaleLowerCase().indexOf(keys) !== -1; })
                    : items;
            case "create":
                keys = keys ? keys.toLocaleLowerCase() : keys;
                return keys
                    ? items.filter(function (item) { return item.display.toLocaleLowerCase().indexOf(keys) !== -1; })
                    : items;
            case 'floorplan':
                return keys
                    ? items.filter(function (item) { return item.fp_design_name.toLocaleLowerCase().indexOf(keys) !== -1 || (item.floorplan_code &&
                        item.floorplan_code.toLocaleLowerCase().indexOf(keys) !== -1) ||
                        item.home_design_info.home_design_name.toString().toLocaleLowerCase().indexOf(keys) !== -1; })
                    : items;
            default:
                return items;
        }
    };
    SearchFilter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'searchFilter',
            pure: false
        })
    ], SearchFilter);
    return SearchFilter;
}());

var PopupSearchComponent = (function () {
    function PopupSearchComponent() {
        this.selectedData = "";
        this.group_style = false;
        this.loadedData = [];
        this.showIcon = true;
        this.widthExp = true;
        this.OnRequestAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnItemSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopupSearchComponent.prototype.selectItem = function (data) {
        this.selectedData = data.display;
        this.OnItemSelected.emit(data);
        this.popover.hide();
    };
    PopupSearchComponent.prototype.requestAdd = function () {
        this.OnRequestAdd.emit(null);
        this.popover.hide();
    };
    PopupSearchComponent.prototype.setInitialData = function (data) {
        this.selectedData = data;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopupSearchComponent.prototype, "group_style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PopupSearchComponent.prototype, "loadedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopupSearchComponent.prototype, "showIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopupSearchComponent.prototype, "widthExp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopupSearchComponent.prototype, "OnRequestAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopupSearchComponent.prototype, "OnItemSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('popover'),
        __metadata("design:type", Object)
    ], PopupSearchComponent.prototype, "popover", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], PopupSearchComponent.prototype, "search", void 0);
    PopupSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'popup-search-component',
            template: __webpack_require__("../../../../../src/app/component/main-section/shared/popup-search/popup-search-component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/shared/popup-search/popup-search-component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PopupSearchComponent);
    return PopupSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/shared-body/shared-body.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/shared-body/shared-body.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/shared-body/shared-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedBodyComponent = (function () {
    function SharedBodyComponent() {
    }
    SharedBodyComponent.prototype.ngOnInit = function () {
    };
    SharedBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shared-body',
            template: __webpack_require__("../../../../../src/app/component/main-section/shared/shared-body/shared-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/shared/shared-body/shared-body.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SharedBodyComponent);
    return SharedBodyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/shared-footer/shared-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-footer {{setFooter[0]}}\">\r\n    <!-- pagination -->\r\n    <span class=\"pagination\" [hidden]=\"setFooter[4]\">\r\n        <ul>\r\n            <!-- back button -->\r\n            <li #prev_page class=\"page-item\">\r\n                <a (click)=\"prev()\" href=\"javascript:void(0)\" class=\"disabled back\"><i style=\"font-size: 14px;\" class=\"glyphicon glyphicon-chevron-left align-middle\"></i></a>\r\n            </li>\r\n            <!-- page numbers -->\r\n            <li *ngFor=\"let page of liCollections, let i = index\" class=\"page-item\" (click)=\"selectIndex(i)\">\r\n                <a class=\"page-link align-middle\" href=\"javascript:void(0)\" [ngClass]=\"selectedIndex == i ? 'selected' : ''\">{{i + 1}}</a>\r\n            </li>\r\n            <!-- next button -->\r\n            <li #next_page class=\"page-item\">\r\n                <a (click)=\"next()\" href=\"javascript:void(0)\" class=\"page-link next\"><i style=\"font-size: 14px;\" class=\"glyphicon glyphicon-chevron-right align-middle\"></i></a>\r\n            </li>\r\n        </ul>\r\n    </span>\r\n\r\n    <!-- create new button -->\r\n    <!-- <span class=\"createButton\" [hidden]=\"createButtonHidden\" (click)=\"createNew()\">\r\n        <label class=\"glyphicon glyphicon-plus\"></label>\r\n        <span>Create New</span>            \r\n    </span> -->\r\n\r\n    <!-- save & finish button -->\r\n    <span (click)=\"save()\" class=\"saveFinishButton\" [hidden]=\"setFooter[1]\">\r\n        <span>Save & Finish</span>\r\n    </span>\r\n\r\n    <!-- next button -->\r\n    <span class=\"nextButton\" [hidden]=\"setFooter[2]\">\r\n        <span>Next</span>\r\n    </span>\r\n\r\n    <!-- back button -->\r\n    <span class=\"backButton\" [hidden]=\"setFooter[3]\" (click)=\"back()\">\r\n        <label class=\"glyphicon glyphicon-chevron-left\"></label>\r\n        <span>Back</span>\r\n    </span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/shared-footer/shared-footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".s-footer {\n  height: 7.4vh;\n  width: 100%;\n  padding-top: 1.3vh;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative; }\n\n.s-footer.footer2 {\n  background-color: white;\n  border-top: solid 0.5px #e4e4e4; }\n\n.s-footer .saveFinishButton,\n.s-footer .nextButton,\n.s-footer .backButton {\n  float: right;\n  margin-top: 0.3vw;\n  background-color: #1976D2;\n  border-style: none;\n  width: 6.875vw;\n  height: 3.24vh;\n  font-size: 0.8vw;\n  vertical-align: middle;\n  border-radius: 50px;\n  color: white;\n  cursor: default;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 3.3vh;\n  font-weight: 500;\n  position: absolute;\n  right: 0px;\n  top: 1.7vh; }\n\n.s-footer .createButton:hover,\n.s-footer .saveFinishButton:hover {\n  background-color: #74b5f1; }\n\n.s-footer .createButton .glyphicon {\n  position: relative;\n  margin-left: -.3vw;\n  font-size: 1.2vh;\n  color: white; }\n\n.s-footer .nextButton,\n.s-footer .backButton {\n  width: 4.5vw;\n  background-color: white;\n  color: #1976D2;\n  font-weight: bold;\n  vertical-align: middle;\n  line-height: 3.2vh;\n  margin-right: 1vw;\n  margin-left: 1vw; }\n\n.s-footer .nextButton:hover,\n.s-footer .backButton:hover {\n  background-color: white;\n  color: #7ebbf0; }\n\n.s-footer .saveFinishButton {\n  margin-right: 1vw; }\n\n.s-footer .backButton {\n  position: absolute;\n  left: 0px;\n  top: 1.7vh; }\n\n.s-footer .backButton label {\n  position: absolute;\n  left: 0.35vw;\n  top: 0.7vh; }\n\n.s-footer span.pagination {\n  width: 100%;\n  text-align: center;\n  height: 3.24vh;\n  margin-top: 1vh; }\n\n.s-footer span.pagination ul {\n  list-style: none; }\n\n.s-footer span.pagination ul li.page-item {\n  display: inline-block; }\n\n.s-footer span.pagination ul li.page-item a {\n  border-radius: 50px;\n  width: 1.4vw; }\n\n.s-footer span.pagination ul li.page-item a.page-link {\n  background-color: transparent;\n  border-style: none;\n  font-size: 0.8vw;\n  color: #B0BEC5;\n  vertical-align: middle;\n  padding: 3px; }\n\n.s-footer span.pagination ul li.page-item a.selected {\n  background-color: #78909C; }\n\n.s-footer span.pagination ul li.glyphicon {\n  color: #B0BEC5;\n  margin: 0 0.7vw;\n  font-size: 0.8vw; }\n\n.align-middle {\n  vertical-align: middle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/shared-footer/shared-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_rest_rest_services_service__ = __webpack_require__("../../../../../src/app/services/rest/rest-services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { EventEmitter } from 'selenium-webdriver';
var SharedFooterComponent = (function () {
    function SharedFooterComponent(router, dataService, _location, rest) {
        var _this = this;
        this.router = router;
        this.dataService = dataService;
        this._location = _location;
        this.rest = rest;
        // the event to listen to when clicking the footer paginations
        this.OnPaginated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // event: occurs when save&finish button is clicked
        this.OnSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // for li active class
        this.selectedIndex = 0;
        this.max_rows = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].tableMaxItem;
        dataService.varFooter.subscribe(function (varFooter) {
            _this.setFooter = varFooter;
        });
    }
    SharedFooterComponent.prototype.back = function () {
        this._location.back();
    };
    SharedFooterComponent.prototype.selectIndex = function (selectedIndex) {
        if (this.selectedIndex !== selectedIndex) {
            this.selectedIndex = selectedIndex;
            // broadcast the selected page
            this.OnPaginated.emit(selectedIndex);
        }
    };
    SharedFooterComponent.prototype.ngOnInit = function () {
    };
    SharedFooterComponent.prototype.next = function () {
        if (this.paginations > 1 && ((this.selectedIndex + 1) < this.paginations)) {
            this.selectedIndex = this.selectedIndex + 1;
            this.OnPaginated.emit(this.selectedIndex);
        }
    };
    SharedFooterComponent.prototype.prev = function () {
        if ((this.selectedIndex - 1) > -1) {
            this.selectedIndex = this.selectedIndex - 1;
            this.OnPaginated.emit(this.selectedIndex);
        }
    };
    SharedFooterComponent.prototype.save = function () {
        this.OnSubmit.emit();
    };
    SharedFooterComponent.prototype.updateItems = function (data) {
        this.Items = data;
        if (!this.Items)
            this.Items = [1]; // just to create 1 page
        this.paginations = Math.floor((this.Items.length / this.max_rows)) > 0 ? Math.floor((this.Items.length / this.max_rows)) : 1;
        if ((this.Items.length % this.max_rows !== 0) && this.Items.length > this.max_rows) {
            this.paginations = this.paginations + 1;
        }
        this.liCollections = Array(this.paginations).fill(this.paginations);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SharedFooterComponent.prototype, "Items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SharedFooterComponent.prototype, "OnPaginated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SharedFooterComponent.prototype, "OnSubmit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('prev_page'),
        __metadata("design:type", Object)
    ], SharedFooterComponent.prototype, "prev_page", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('next_page'),
        __metadata("design:type", Object)
    ], SharedFooterComponent.prototype, "next_page", void 0);
    SharedFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shared-footer',
            template: __webpack_require__("../../../../../src/app/component/main-section/shared/shared-footer/shared-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/shared/shared-footer/shared-footer.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_footer_header_data_service__["a" /* FooterHeaderDataService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__services_rest_rest_services_service__["a" /* RestServices */]])
    ], SharedFooterComponent);
    return SharedFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/shared-header/assets/icon/backbutton.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAARCAYAAAAL4VbbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJZJREFUeNpi/P//PwM2IN/5TAFIFQAxiJ7wsFzqAAsOhQZA6gAQ80OFLoD4TEQohAMmYhWiKMaj8CMQb4ArJqDQAei5C2DFxCqEmTyBGIUwxfZY/FKArhCm+CAWxROgzsNQXAC1FhmAnHUAXQMT1DoHYjSAg45YDfBIIaBhAkZ049GAmTbwaDDAqhhNw0Zo0IJCjAEgwABNb0sSEQ/qEQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/shared-header/assets/icon/filter.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAArBJREFUeNpi/P//PwMVgAEQCwDxBSD+QIlBLGRaHgDEDkBsj0PNQ6jjNkAx8Y4EhRCROAGIL/wnDywAYgdi7CHGIQYUOASbwwQocVDDf+qDD/hCC59jFvynLUggxUG0dgxOR9ErmvABA2T7GdHKIVBW3s9AX/AQWpSAiwYmNMkFDPQH8kDcAOMgh1ACEM/Hp/Pqsx8M+aseM1x7/oNo28KMBRmafCUZ+DiZCSlVBOIHyCV1Az7Vn77/ZQieeY/h04+/DMUuYgyWyjwEHdO7+yXDqrPvwewJYTKElBeAMMxBAdCgwwmuAEMF5Bg+DmaGY/e+gjGxYMfVT8QoS0B3EF4gK8gKdgwfJxODlRI3UQ75+OMfw3Ggw2WAeokA/GB3QLPbA2Ly56zDr/9Lll36f/TuF6Lyc+2mZ//V667+f/TuJ7FFQAPMQcSXZAsegC35+O0PXnXbr3wEO37F6XekGH+ACVr2EA0mQhNn/qoneDNAAVDeXYuPIdxEkBTjFZhILTRA2XdevDzDzmufGGYfeYNVTeKih+C0NpFwzsIok8hpoIETdYqNCDBbvwKyeaA56SOYfvz+Nzghr0lXIqbsoUqLEQxAhR3IESAsI8gGLwZAhSfIscTmRKo5CFIUsIFpUDqBpRVQ4cnPwUSukRdBOg8wDB7wgQmpxh0M4ADMQVQLpY/ALE8NB22g1CErz7xnMOu4wfAEmMu0pTjJ8gvIQSxIDnpIqILFWukCcxUoIYOyOqipUewqBk/sJIIF6P2yBFLbnqDqAVSNBM24+//K0++UNmUVsLWpH/wfGNAwZNrUoNzWSEfHfIS2xT4Q6tsPqn4ZPRz1gdSeKwwX0MAxD9A7h+SMfhygkmMmUDr6gYwDKHDYAlg5QwgzkjGkp4A0gmaAo3S/CB1BO0DqCBpAgAEAz+9SCtaBLB0AAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/shared-header/modal/filter-modal/filter-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"pull-left\">Filter Items</h4>\n    <a (click)=\"close()\" href=\"javascript:void(0)\" class=\"pull-right\">\n        <i class=\"iconned-close-mini\"></i>\n    </a>\n</div>\n<div class=\"modal-body\">\n    <div class=\"form-group\">\n        <label class=\"text-normal\">Home Product Name</label>\n        <input class=\"form-control\" id=\"home_product_name\" [(ngModel)]=\"filterData\" required>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <a href=\"javascript:void(0)\" class=\"link-blue pull-left\" (click)=\"close()\">Cancel</a>\n    <button class=\"blue-button\" (click)=\"submit()\">Submit</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/shared-header/modal/filter-modal/filter-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/shared-header/modal/filter-modal/filter-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterModalComponent = (function () {
    function FilterModalComponent() {
    }
    FilterModalComponent.prototype.ngOnInit = function () {
    };
    FilterModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-filter-modal',
            template: __webpack_require__("../../../../../src/app/component/main-section/shared/shared-header/modal/filter-modal/filter-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/shared/shared-header/modal/filter-modal/filter-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterModalComponent);
    return FilterModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/shared-header/shared-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-header\">\r\n    <!-- breadcrumb -->\r\n    <span (click)=\"goBack()\"><img [src]=\"backbuttonIcon\" [hidden]=\"setHeader[0]\" /></span>\r\n    <span (click)=\"goBack()\" class=\"{{setHeader[9]}} brdcrumb\">{{ setHeader[2] }}</span>\r\n    <span class=\"disable brdcrumb\" [hidden]=\"setHeader[1]\" style=\"margin-left:0.2vw; margin-right:0.2vw;\">/</span>\r\n    <span class=\"brdcrumb\" [hidden]=\"setHeader[4]\">{{ setHeader[3] }}</span>\r\n\r\n    <!-- button search -->\r\n    <!-- <span class=\"btn\" [hidden]=\"searchButtonHidden\">Search</span> -->\r\n    <span class=\"createButton\" [hidden]=\"setHeader[5]\" (click)=\"createNew()\">\r\n        <label class=\"glyphicon glyphicon-plus\"></label>\r\n        <span>Create New</span>\r\n    </span>\r\n\r\n    <!-- search bar -->\r\n    <span class=\"searchBar\" [hidden]=\"setHeader[6]\">\r\n        <label class=\"glyphicon glyphicon-search\"></label>\r\n        <input id=\"searhInput\" #searhInput type=\"text\" (keyup)=\"updateSearchKeys()\" placeholder=\"Search\" style=\"border-style:none;\">            \r\n    </span>\r\n\r\n    <!-- filter bar -->\r\n    <span class=\"filterBar\" [hidden]=\"setHeader[7]\">\r\n        <select style=\"border-style:none; font-weight:600;\">\r\n            <option>Filter by Category</option>\r\n            <option>Filter by Date</option>\r\n            <option>Filter by Name</option>\r\n            <option>Filter by Size</option>\r\n        </select>\r\n        <label><img class=\"glyphicon\" [src]=\"filterIcon\" /></label>      \r\n    </span>\r\n\r\n    <!-- filter button -->\r\n    <span class=\"filterButton\" [hidden]=\"setHeader[8]\">\r\n        <label><img class=\"glyphicon\" [src]=\"filterIcon\" /></label>      \r\n    </span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/shared-header/shared-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".s-header {\n  height: 6.20vh;\n  width: 100%;\n  padding-top: .5vh; }\n\n.s-header span img {\n  width: .5vw;\n  height: 1.7vh;\n  margin-right: 0.4vw;\n  margin-bottom: 0.9vh; }\n\n.s-header span.brdcrumb {\n  font-weight: bold;\n  font-size: 2.2vh;\n  color: #616161;\n  cursor: default; }\n\n.s-header span.active {\n  color: #1976D2; }\n\n.s-header span.disable {\n  color: #BDBDBD; }\n\n.s-header span.btn {\n  float: right;\n  margin-top: 0.3vw;\n  background-color: #1976D2;\n  border-style: none;\n  width: 4.427vw;\n  height: 3vh;\n  font-size: 0.8vw;\n  vertical-align: middle;\n  line-height: 1.8vh;\n  border-radius: 50px;\n  color: white; }\n\n.s-header span.btn:hover {\n  background-color: #74b5f1; }\n\n.s-header .searchBar {\n  float: right;\n  margin-top: 0.25vw;\n  margin-right: 0.52vw; }\n\n.s-header .searchBar input {\n  width: 21.5625vw;\n  height: 3.24vh;\n  font-size: 1.7vh;\n  padding-left: 2vw;\n  border-radius: 50px;\n  outline: none; }\n\n.s-header .searchBar input:focus {\n  box-shadow: 0 0 0 2px #40a3f4; }\n\n.s-header .searchBar input::-webkit-input-placeholder {\n  color: #B0BEC5 !important; }\n\n.s-header .searchBar .glyphicon {\n  position: relative;\n  margin-left: 0;\n  font-size: 1.7vh;\n  top: 0.3vh;\n  left: 1.5vw;\n  color: #B0BEC5; }\n\n.s-header .filterBar {\n  float: right;\n  margin-top: 0.25vw;\n  margin-right: -2vw; }\n\n.s-header .filterBar select {\n  width: 12.57vw;\n  height: 3.24vh;\n  font-size: 1.7vh;\n  padding-left: 0.9vw;\n  border-radius: 50px;\n  outline: none; }\n\n.s-header .filterBar select option {\n  border-style: none; }\n\n.s-header .filterBar select:focus {\n  box-shadow: 0 0 0 2px #40a3f4; }\n\n.s-header .filterBar select::-webkit-input-placeholder {\n  color: #B0BEC5 !important; }\n\n.s-header .filterBar .glyphicon {\n  position: relative;\n  right: 2.2vw;\n  color: #1976D2;\n  width: 1.7vw;\n  height: 3vh; }\n\n.s-header .filterButton {\n  float: right;\n  margin-top: 0.22vw;\n  margin-right: 0vw; }\n\n.s-header .filterButton .glyphicon {\n  color: #1976D2;\n  width: 1.7vw;\n  height: 3.2vh; }\n\n.s-header .filterButton .glyphicon:active {\n  box-shadow: 0 0 0 2px #40a3f4;\n  border-radius: 50px; }\n\n.s-header .filterBar select::-ms-expand {\n  display: none; }\n\n.s-header .filterBar select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  text-indent: 1px;\n  text-overflow: ''; }\n\n.s-header .createButton {\n  float: right;\n  margin-top: 0.3vw;\n  background-color: #1976D2;\n  border-style: none;\n  width: 6.875vw;\n  height: 3.24vh;\n  font-size: 0.8vw;\n  vertical-align: middle;\n  border-radius: 50px;\n  color: white !important;\n  cursor: default;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 3.3vh;\n  font-weight: 500; }\n\n.s-header .createButton:hover {\n  background-color: #74b5f1; }\n\n.s-header .createButton .glyphicon {\n  position: relative;\n  margin-left: -.3vw;\n  font-size: 1.2vh;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/shared-header/shared-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_footer_header_data_service__ = __webpack_require__("../../../../../src/app/component/main-section/shared/footer-header-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_searchData__ = __webpack_require__("../../../../../src/app/component/main-section/shared/data/searchData.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SharedHeaderComponent = (function () {
    function SharedHeaderComponent(router, dataService, _location) {
        var _this = this;
        this.router = router;
        this.dataService = dataService;
        this._location = _location;
        this.createUrl = "";
        this.backbuttonIcon = __webpack_require__("../../../../../src/app/component/main-section/shared/shared-header/assets/icon/backbutton.png");
        this.filterIcon = __webpack_require__("../../../../../src/app/component/main-section/shared/shared-header/assets/icon/filter.png");
        dataService.varHeader.subscribe(function (varHeader) {
            _this.setHeader = varHeader;
        });
    }
    SharedHeaderComponent.prototype.createNew = function () {
        this.router.navigate([this.router.url, "create"]);
    };
    SharedHeaderComponent.prototype.back = function () {
        this._location.back();
    };
    SharedHeaderComponent.prototype.goBack = function () {
        if (!this.setHeader[4]) {
            this._location.back();
        }
    };
    SharedHeaderComponent.prototype.ngOnInit = function () {
    };
    SharedHeaderComponent.prototype.updateSearchKeys = function () {
        __WEBPACK_IMPORTED_MODULE_4__data_searchData__["a" /* SearchData */].changeData(this.searhInput.nativeElement.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searhInput'),
        __metadata("design:type", Object)
    ], SharedHeaderComponent.prototype, "searhInput", void 0);
    SharedHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shared-header',
            template: __webpack_require__("../../../../../src/app/component/main-section/shared/shared-header/shared-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/shared/shared-header/shared-header.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_footer_header_data_service__["a" /* FooterHeaderDataService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], SharedHeaderComponent);
    return SharedHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/toast-notification/toast-notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toast animate\" *ngIf=\"show\">\n    <!-- close btn -->\n    <div>\n        <a href=\"javascript:void(0)\" class=\"toast-close-btn\" (click)=\"close()\">\n            <i class=\"iconned-close-mini\"></i>\n        </a>\n    </div>\n    <div class=\"toast-content\">\n        <div class=\"row\">\n            <div class=\"col-2\" style=\"padding-right: 0\"> <i class=\"iconned-info-black\"></i></div>\n            <div class=\"col-10\" style=\"padding-left: 0\">{{message}}</div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/toast-notification/toast-notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toast {\n  width: 20vw;\n  height: 13vh;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  background-color: white;\n  border-radius: 5px;\n  z-index: 9999999 !important;\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n\n.toast-close-btn {\n  float: right;\n  margin-top: 10px;\n  margin-right: 10px;\n  padding: 0; }\n\n.toast-content {\n  font-family: Roboto;\n  font-size: 1.9vh;\n  color: #4D4D4D;\n  text-align: left;\n  height: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n  top: 30%;\n  bottom: 70%;\n  position: absolute; }\n\n.toast .animate {\n  margin-top: 25px;\n  font-size: 21px;\n  text-align: center;\n  -webkit-animation: fadein 2s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 2s; }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main-section/shared/toast-notification/toast-notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastNotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastNotificationComponent = (function () {
    function ToastNotificationComponent() {
        this.show = false;
        this.message = "New division has been successfully added.";
    }
    ToastNotificationComponent.prototype.ngOnInit = function () {
    };
    ToastNotificationComponent.prototype.showToast = function (message) {
        this.message = message;
        //this.show = true;
        // setTimeout(() => {
        //   this.show = false;
        // }, 2000);
        this.show = true;
        console.log(this.show);
    };
    ToastNotificationComponent.prototype.close = function () {
        this.show = false;
    };
    ToastNotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toast-notification',
            template: __webpack_require__("../../../../../src/app/component/main-section/shared/toast-notification/toast-notification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main-section/shared/toast-notification/toast-notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToastNotificationComponent);
    return ToastNotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\" style=\"max-width: 345px;\">\r\n    <a [ngClass]=\"getFragmentClass('/division')\" class=\"nav-link\" id=\"v-pills-home-tab\" data-toggle=\"collapse\" href=\"\" role=\"tab\" aria-selected=\"false\" (click)=\"goto('division')\">Division</a>\r\n    <a [ngClass]=\"getFragmentClass('/homeproduct')\" class=\"nav-link\" id=\"v-pills-profile-tab\" data-toggle=\"pill\" href=\"\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\" (click)=\"goto('homeproduct')\">Home Product</a>\r\n    <a [ngClass]=\"getFragmentClass('/floorplan')\" class=\"nav-link\" id=\"v-pills-messages-tab\" data-toggle=\"pill\" href=\"\" role=\"tab\" aria-controls=\"v-pills-messages\" aria-selected=\"false\" (click)=\"goto('floorplan')\">Floor Plans</a>\r\n    <!-- <a [ngClass]=\"getFragment('/unitmanager')\" class=\"nav-link\" id=\"v-pills-settings-tab\" data-toggle=\"pill\" href=\"\" role=\"tab\" aria-controls=\"v-pills-settings\" aria-selected=\"false\" routerLink=\"unitmanager\">Unit Manager</a>\r\n    <a [ngClass]=\"getFragment('/amenity')\" class=\"nav-link\" id=\"v-pills-messages-tab\" data-toggle=\"pill\" href=\"\" role=\"tab\" aria-controls=\"v-pills-messages\" aria-selected=\"false\" routerLink=\"amenity\">Amenity</a> -->\r\n    <a [ngClass]=\"getFragmentClass('/packages')\" class=\"nav-link\" id=\"v-pills-settings-tab\" data-toggle=\"pill\" href=\"\" role=\"tab\" aria-controls=\"v-pills-settings\" aria-selected=\"false\" (click)=\"goto('packages')\">Packages</a>\r\n    <a [ngClass]=\"getUrl().indexOf('/3d-models') !== -1 || getUrl().indexOf('/3d-models/product_mapping') !== -1 ? 'active' : ''\" class=\"nav-link\" id=\"v-pills-settings-tab\" data-toggle=\"pill\" href=\"\" role=\"tab\" aria-controls=\"3D-collapse\" aria-selected=\"false\"\r\n        (click)=\"goto('3d-models')\" aria-expanded=\"false\">3D Asset Management</a>\r\n\r\n    <!-- 3D collapse -->\r\n    <div id=\"3D-collapse\" class=\"collapse\" [ngClass]=\"getToggleState('3d-models')\">\r\n        <div class=\"nav-children-container\">\r\n            <a [ngClass]=\"getFragmentClass('/3d-models')\" class=\"nav-link\" href=\"\" role=\"tab\" data-toggle=\"pill\" (click)=\"goto('3d-models')\" aria-selected=\"false\">3D Models</a>\r\n            <a [ngClass]=\"getFragmentClass('/3d-models/product_mapping')\" class=\"nav-link\" aria-selected=\"false\" href=\"\" role=\"tab\" data-toggle=\"pill\" (click)=\"goto('3d-models/product_mapping')\">Product Mapping</a>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- (click)=\"models = true;mapping = false\" [class.models]=\"models\" -->\r\n<!-- (click)=\"mapping = true;models = false\" [class.mapping]=\"mapping\" -->"

/***/ }),

/***/ "../../../../../src/app/component/sidenav/sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.nav {\n  padding: 2.68vh 0.52vw;\n  border-right: #d8d6d6 solid 0.7px;\n  height: 88.43vh; }\n\na {\n  padding: 1.20vh 1.042vw;\n  color: #616161;\n  text-decoration: none;\n  font-size: 1.9vh;\n  font-weight: 500; }\n\na:hover {\n  color: #9b9b9b; }\n\na.nav-link {\n  margin-bottom: 1.50vh; }\n\na.active {\n  border-radius: 3px;\n  background-color: #40a3f4;\n  background-image: linear-gradient(to bottom, #40a3f4, #2585dc); }\n\n.models,\n.mapping {\n  background-color: #f3f8fc !important; }\n\n.nav-children-container a {\n  padding-left: 20px; }\n\n.nav-children-container a:active {\n  background-image: linear-gradient(to bottom, #40a3f4, #2585dc); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavComponent = (function () {
    function SidenavComponent(router) {
        this.router = router;
        this.divisionSelected = true;
        this.homeProductSelected = false;
        this.floorPlanSelected = false;
        this.unitManagerSelected = false;
        this.amenitySelected = false;
        this.packagesSelected = false;
        this.models = true;
    }
    // returns an 'active' value indicating that the nav item is active
    SidenavComponent.prototype.getFragmentClass = function (fragment) {
        return this.router.url.indexOf(fragment) !== -1 ? 'active' : '';
    };
    SidenavComponent.prototype.getChildNavFragmentClass = function (fragment) {
        //console.log(this.router);
        return '';
    };
    SidenavComponent.prototype.getUrl = function () {
        return this.router.url;
    };
    SidenavComponent.prototype.goto = function (url) {
        this.router.navigate([url]);
    };
    SidenavComponent.prototype.getToggleState = function (param) {
        return this.router.url.indexOf(param) !== -1 ? 'show' : '';
    };
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/component/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/sidenav/sidenav.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/only-numbers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyNumber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// copyright https://stackoverflow.com/questions/41465542/angular2-input-field-to-accept-only-numbers

var OnlyNumber = (function () {
    function OnlyNumber(el) {
        this.el = el;
    }
    OnlyNumber.prototype.onKeyDown = function (event) {
        var e = event;
        if (this.OnlyNumber) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+V
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], OnlyNumber.prototype, "OnlyNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OnlyNumber.prototype, "onKeyDown", null);
    OnlyNumber = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[OnlyNumber]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], OnlyNumber);
    return OnlyNumber;
}());



/***/ }),

/***/ "../../../../../src/app/model/data/data-session-holder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionData; });
var SessionData = (function () {
    function SessionData() {
    }
    SessionData.Reset = function () {
        this.FacadeSpaceId = 0;
        this.FacadeDesigns = [];
        this.FeatureItems = [];
        this.currentTask = '';
        this.HomeDimensions = [];
        this.HomeDimensionOperation = 'create';
        this.HomeDimensionOperationId = 0;
        this.SelectedFloor = null;
        this.RoomReturnId = 0;
        this.DimensionValue = '';
    };
    SessionData.FacadeSpaceId = 0;
    SessionData.FacadeDesigns = [];
    SessionData.FeatureItems = [];
    SessionData.currentTask = '';
    SessionData.HomeDimensions = [];
    SessionData.HomeDimensionOperationId = 0;
    SessionData.HomeDimensionOperation = 'create';
    SessionData.SelectedFloor = null;
    SessionData.RoomReturnId = 0;
    SessionData.RoomReturnEditId = 0;
    SessionData.RoomOperation = 'create';
    SessionData.DimensionValue = '';
    return SessionData;
}());



/***/ }),

/***/ "../../../../../src/app/model/floorplan/features.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feature; });
var Feature = (function () {
    function Feature() {
    }
    return Feature;
}());



/***/ }),

/***/ "../../../../../src/app/model/floorplan/floor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Floor; });
var Floor = (function () {
    function Floor() {
    }
    return Floor;
}());



/***/ }),

/***/ "../../../../../src/app/model/floorplan/floorplan-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloorPlan; });
var FloorPlan = (function () {
    function FloorPlan() {
    }
    return FloorPlan;
}());



/***/ }),

/***/ "../../../../../src/app/model/floorplan/home-dimension.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDimension; });
var HomeDimension = (function () {
    function HomeDimension() {
    }
    return HomeDimension;
}());



/***/ }),

/***/ "../../../../../src/app/model/home-products/home-products-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomeProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Facade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Package; });
/* unused harmony export HomeDesignPackageLink */
var HomeProduct = (function () {
    function HomeProduct() {
    }
    return HomeProduct;
}());

var Facade = (function () {
    function Facade() {
    }
    return Facade;
}());

var Package = (function () {
    function Package() {
    }
    return Package;
}());

var HomeDesignPackageLink = (function () {
    function HomeDesignPackageLink() {
    }
    return HomeDesignPackageLink;
}());



/***/ }),

/***/ "../../../../../src/app/model/popp-search/popup-search-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupSearchData; });
var PopupSearchData = (function () {
    function PopupSearchData() {
    }
    return PopupSearchData;
}());



/***/ }),

/***/ "../../../../../src/app/model/space_types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpaceType; });
var SpaceType = (function () {
    function SpaceType() {
    }
    return SpaceType;
}());



/***/ }),

/***/ "../../../../../src/app/services/rest/rest-services.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("../../../../axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestServices = (function () {
    function RestServices() {
        // this.uploader.onAfterAddingFile = (file) => {
        //   console.log('1', file);
        //   file.withCredentials = false;
        // };
    }
    //#region basic HTTP request
    RestServices.prototype.DELETE = function (url) {
        return new Promise(function (resolve) {
            return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* environment */].API_ROOT + '/' + url).then(function (data) {
                resolve(data.data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestServices.prototype.GET = function (url) {
        return new Promise(function (resolve) {
            return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* environment */].API_ROOT + '/' + url).then(function (data) {
                resolve(data.data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestServices.prototype.POST = function (url, _data, file, file2, isfile2_a_cad_file) {
        if (file2 === void 0) { file2 = null; }
        if (isfile2_a_cad_file === void 0) { isfile2_a_cad_file = false; }
        return new Promise(function (resolve) {
            var formBox = new FormData();
            formBox.append('data', JSON.stringify(_data));
            if (!isfile2_a_cad_file) {
                if (file) {
                    formBox.append('file', file);
                }
            }
            else {
                if (file2) {
                    formBox.append('cad', file);
                }
                if (file) {
                    formBox.append('image', file2);
                }
            }
            return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
                method: 'post',
                url: __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* environment */].API_ROOT + '/' + url,
                data: formBox,
                headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'multipart/form-data' }
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                resolve(error);
            });
        });
    };
    RestServices.prototype.PUT = function (url, id, _data, file) {
        return new Promise(function (resolve) {
            var formData = new FormData();
            formData.append('data', JSON.stringify(_data));
            if (file) {
                formData.append('file', file);
            }
            url = url.indexOf('/') !== -1 ? url : url + '/';
            return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
                method: 'put',
                url: __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* environment */].API_ROOT + '/' + url + id,
                data: formData,
                headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'multipart/form-data' }
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                resolve(error);
            });
        });
    };
    //#endregion
    //#region custom request(varies on pages)
    //#region home products custom http request
    RestServices.prototype.AddHomeProducts = function (_data, file) {
        return new Promise(function (resolve) {
            var formBox = new FormData();
            formBox.append('data', JSON.stringify(_data));
            formBox.append('file', file);
            return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
                method: 'post',
                url: __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* environment */].API_ROOT + '/' + 'home_products',
                data: formBox,
                headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'multipart/form-data' }
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                resolve(error);
            });
        });
    };
    RestServices.prototype.UpdateHomeProducts = function (id, _data, file) {
        return new Promise(function (resolve) {
            var formData = new FormData();
            formData.append('data', JSON.stringify(_data));
            if (file) {
                formData.append('file', file);
            }
            return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
                method: 'put',
                url: __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* environment */].API_ROOT + '/' + 'home_products/' + id,
                data: formData,
                headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'multipart/form-data' }
            })
                .then(function (response) {
                resolve(response.data);
            })
                .catch(function (error) {
                resolve(error);
            });
        });
    };
    RestServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RestServices);
    return RestServices;
}());



/***/ }),

/***/ "../../../../../src/app/services/utils/utilities.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utilities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_popp_search_popup_search_model__ = __webpack_require__("../../../../../src/app/model/popp-search/popup-search-model.ts");

var Utilities = (function () {
    function Utilities() {
    }
    Utilities.ToPopupSearchData = function (srcData, indexAsName, indexAsId) {
        var data = [];
        for (var i = 0; i < srcData.length; i++) {
            var _data = new __WEBPACK_IMPORTED_MODULE_0__model_popp_search_popup_search_model__["a" /* PopupSearchData */]();
            data.push();
        }
    };
    Utilities.getToastContentSuccess = function (message) {
        return "\n        <div class=\"toast-content\">\n            <div class=\"row\">\n                <div class=\"col-2\" style=\"padding-right: 0\"> <i class=\"iconned-info-black\"></i></div>\n                <div class=\"col-10\" style=\"padding-left: 0!important;\">" + message + "</div>\n            </div>\n        </div>";
    };
    Utilities.getToastContentError = function (message) {
        return "\n        <div class=\"toast-content\">\n            <div class=\"row\">\n                <div class=\"col-2\" style=\"padding-right: 0\"> <i class=\"iconned-info-white\"></i></div>\n                <div class=\"col-10 white-color\" style=\"padding-left: 0!important; color: white!important;\">" + message + "</div>\n            </div>\n        </div>";
    };
    return Utilities;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    API_ROOT: 'http://chuckformetricon.australiasoutheast.cloudapp.azure.com:81',
    testingData: ["Iro", "Iring", "Manok", "Tiki", "Ilaga", "Baboy-baboy", "Umang", "Tabili", "Tuko", "Karnero",
        "Kasag", "Tabugok", "Salagubang", "Apan", "Uk-uk", "Lamok", "Langaw", "Labod", "Ulipan",
        "gangis", "alimatok", "aninipot", "tutubi", "batod", "lamigas", "kuhol"],
    testingData2: ["Iro", "Iring", "Manok",],
    roomTypeList: ["Bedroom", "Living Room"]
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    API_ROOT: 'http://chuckformetricon.australiasoutheast.cloudapp.azure.com:81',
    // testing data
    testingData: ["Iro", "Iring", "Manok", "Tiki", "Ilaga", "Baboy-baboy", "Umang", "Tabili", "Tuko", "Karnero",
        "Kasag", "Tabugok", "Salagubang", "Apan", "Uk-uk", "Lamok", "Langaw", "Labod", "Ulipan",
        "gangis", "alimatok", "aninipot", "tutubi", "batod", "lamigas", "kuhol"],
    testingDData2: ["Iro", "Iring", "Manok",],
    roomTypeList: ["Bedroom", "Living Room"],
    tableMaxItem: 15,
    featureTypeList: ["Study", "Walk-in Pantry", "Veranda", "Closet", "Stairs"]
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map