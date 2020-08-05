(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _domain_celestial_orbit_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain/celestial-orbit.model */ "./src/app/domain/celestial-orbit.model.ts");
/* harmony import */ var _services_planet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/planet.service */ "./src/app/services/planet.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _celestial_orbit_celestial_orbit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./celestial-orbit/celestial-orbit.component */ "./src/app/celestial-orbit/celestial-orbit.component.ts");
/* harmony import */ var _directives_PlanetDirective_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/PlanetDirective.directive */ "./src/app/directives/PlanetDirective.directive.ts");
/* harmony import */ var _orbit_form_orbit_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orbit-form/orbit-form.component */ "./src/app/orbit-form/orbit-form.component.ts");













const _c0 = ["sidenav"];
function AppComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start/Stop Orbit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Get new planet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Orbital Parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "rotated": a0 }; };
function AppComponent_mat_icon_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r6.showSubmenu));
} }
const _c2 = function (a0) { return { "expanded": a0 }; };
function AppComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "orbit-form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r7.showSubmenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("celestialOrbit", ctx_r7.celestialOrbit);
} }
class AppComponent {
    constructor(planetService) {
        this.planetService = planetService;
        this.title = 'Orbiter';
        this.celestialOrbit = new _domain_celestial_orbit_model__WEBPACK_IMPORTED_MODULE_1__["CelestialOrbit"]();
        this.isExpanded = true;
        this.isShowing = false;
        this.showSubmenu = false;
    }
    ngOnInit() {
        this.getRandomPlanet();
    }
    getRandomPlanet() {
        this.planetService.getPlanet().subscribe(res => {
            this.celestialOrbit.planet = res;
        });
    }
    mouseenter() {
        if (!this.isExpanded) {
            this.isShowing = true;
        }
    }
    mouseleave() {
        if (!this.isExpanded) {
            this.isShowing = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 25, vars: 11, consts: [["color", "primary", 1, "toolbar"], ["mat-icon-button", "", 3, "click"], ["autosize", "", 1, "example-container"], ["mode", "side", "opened", "true", 1, "example-sidenav", 3, "mouseenter", "mouseleave"], ["sidenav", ""], [1, "parent", 3, "click"], ["class", "full-width", 4, "ngIf"], ["mat-list-icon", "", 4, "ngIf"], ["mat-list-icon", ""], ["class", "menu-button", 3, "ngClass", 4, "ngIf"], ["class", "submenu", 3, "ngClass", 4, "ngIf"], [3, "orbitalSpeed", "rotationalSpeed", "animatePlanet", "planet"], [1, "full-width"], [1, "menu-button", 3, "ngClass"], [1, "submenu", 3, "ngClass"], [3, "celestialOrbit"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.isExpanded = !ctx.isExpanded; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Indiggo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-sidenav-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AppComponent_Template_mat_sidenav_mouseenter_7_listener() { return ctx.mouseenter(); })("mouseleave", function AppComponent_Template_mat_sidenav_mouseleave_7_listener() { return ctx.mouseleave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_item_click_10_listener() { return ctx.celestialOrbit.animatePlanet = !ctx.celestialOrbit.animatePlanet; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_span_11_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_mat_icon_12_Template, 2, 0, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_mat_icon_13_Template, 2, 0, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_item_click_14_listener() { return ctx.getRandomPlanet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_span_15_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "find_replace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_item_click_18_listener() { return ctx.showSubmenu = !ctx.showSubmenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_span_19_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_mat_icon_22_Template, 2, 3, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_div_23_Template, 2, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "celestial-orbit-animation", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded || ctx.isShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.celestialOrbit.animatePlanet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.celestialOrbit.animatePlanet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded || ctx.isShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded || ctx.isShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded || ctx.isShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowing || ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orbitalSpeed", ctx.celestialOrbit.orbitalSpeed)("rotationalSpeed", ctx.celestialOrbit.rotationalSpeed)("animatePlanet", ctx.celestialOrbit.animatePlanet)("planet", ctx.celestialOrbit.planet);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListIconCssMatStyler"], _celestial_orbit_celestial_orbit_component__WEBPACK_IMPORTED_MODULE_9__["CelestialOrbitComponent"], _directives_PlanetDirective_directive__WEBPACK_IMPORTED_MODULE_10__["PlanetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _orbit_form_orbit_form_component__WEBPACK_IMPORTED_MODULE_11__["OrbitFormComponent"]], styles: [".mat-button-base[_ngcontent-%COMP%]{\r\n  margin: 8px 8px 8px 8px;\r\n}\r\n\r\n.example-container[_ngcontent-%COMP%] {\r\n  height: 88vh;\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n   -webkit-user-select: none;\r\n      -moz-user-select: none;\r\n       -ms-user-select: none;\r\n           user-select: none;\r\n}\r\n\r\n.full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.menu-button[_ngcontent-%COMP%] {\r\n  transition: 300ms ease-in-out;\r\n  transform: rotate(0deg);\r\n}\r\n\r\n.menu-button.rotated[_ngcontent-%COMP%] {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.submenu[_ngcontent-%COMP%] {\r\n  overflow-y: hidden;\r\n  transition: transform 300ms ease;\r\n  transform: scaleY(0);\r\n  transform-origin: top;\r\n  padding-left: 30px;\r\n}\r\n\r\n.submenu.expanded[_ngcontent-%COMP%] {\r\n  transform: scaleY(1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0dBQ0cseUJBQWlCO01BQWpCLHNCQUFpQjtPQUFqQixxQkFBaUI7V0FBakIsaUJBQWlCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYnV0dG9uLWJhc2V7XHJcbiAgbWFyZ2luOiA4cHggOHB4IDhweCA4cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA4OHZoO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdiB7XHJcbiAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWVudS1idXR0b24ge1xyXG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59XHJcbi5tZW51LWJ1dHRvbi5yb3RhdGVkIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi5zdWJtZW51IHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG4uc3VibWVudS5leHBhbmRlZCB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav']
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _directives_PlanetDirective_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/PlanetDirective.directive */ "./src/app/directives/PlanetDirective.directive.ts");
/* harmony import */ var _directives_AnimationDirective_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/AnimationDirective.directive */ "./src/app/directives/AnimationDirective.directive.ts");
/* harmony import */ var _celestial_orbit_celestial_orbit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./celestial-orbit/celestial-orbit.component */ "./src/app/celestial-orbit/celestial-orbit.component.ts");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/side-nav/side-nav.component.ts");
/* harmony import */ var _orbit_form_orbit_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./orbit-form/orbit-form.component */ "./src/app/orbit-form/orbit-form.component.ts");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _directives_PlanetDirective_directive__WEBPACK_IMPORTED_MODULE_12__["PlanetDirective"],
        _directives_AnimationDirective_directive__WEBPACK_IMPORTED_MODULE_13__["PlanetAnimationDirective"],
        _celestial_orbit_celestial_orbit_component__WEBPACK_IMPORTED_MODULE_14__["CelestialOrbitComponent"],
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_15__["SideNavComponent"],
        _orbit_form_orbit_form_component__WEBPACK_IMPORTED_MODULE_16__["OrbitFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _directives_PlanetDirective_directive__WEBPACK_IMPORTED_MODULE_12__["PlanetDirective"],
                    _directives_AnimationDirective_directive__WEBPACK_IMPORTED_MODULE_13__["PlanetAnimationDirective"],
                    _celestial_orbit_celestial_orbit_component__WEBPACK_IMPORTED_MODULE_14__["CelestialOrbitComponent"],
                    _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_15__["SideNavComponent"],
                    _orbit_form_orbit_form_component__WEBPACK_IMPORTED_MODULE_16__["OrbitFormComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/celestial-orbit/celestial-orbit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/celestial-orbit/celestial-orbit.component.ts ***!
  \**************************************************************/
/*! exports provided: CelestialOrbitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelestialOrbitComponent", function() { return CelestialOrbitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _directives_AnimationDirective_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/AnimationDirective.directive */ "./src/app/directives/AnimationDirective.directive.ts");
/* harmony import */ var _directives_PlanetDirective_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/PlanetDirective.directive */ "./src/app/directives/PlanetDirective.directive.ts");





class CelestialOrbitComponent {
    constructor() { }
}
CelestialOrbitComponent.ɵfac = function CelestialOrbitComponent_Factory(t) { return new (t || CelestialOrbitComponent)(); };
CelestialOrbitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CelestialOrbitComponent, selectors: [["celestial-orbit-animation"]], inputs: { animatePlanet: "animatePlanet", orbitalSpeed: "orbitalSpeed", rotationalSpeed: "rotationalSpeed", planet: "planet" }, decls: 6, vars: 6, consts: [[1, "celestialOrbitSideContent"], [1, "sun"], ["planetAnimation", "", 3, "animate", "orbitSpeed"], ["planet", "", 1, "orbiter", 3, "planetColor", "planetRadius", "rotationSpeed"]], template: function CelestialOrbitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.planet.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animate", ctx.animatePlanet)("orbitSpeed", ctx.orbitalSpeed + "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("planetColor", ctx.planet.color)("planetRadius", ctx.planet.radius + "px")("rotationSpeed", ctx.rotationalSpeed);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _directives_AnimationDirective_directive__WEBPACK_IMPORTED_MODULE_2__["PlanetAnimationDirective"], _directives_PlanetDirective_directive__WEBPACK_IMPORTED_MODULE_3__["PlanetDirective"]], styles: [".sun[_ngcontent-%COMP%]{\r\n  display:inline-block;\r\n  position: absolute;\r\n  background-color: yellow;\r\n  height: 150px;\r\n  width: 150px;\r\n  border-radius: 50%;\r\n  border: 10px solid orange;\r\n}\r\n\r\n.orbiter[_ngcontent-%COMP%]{\r\n  border-radius: 50%;\r\n  position:absolute;\r\n}\r\n\r\n.celestialOrbitSideContent[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nmat-sidenav-content[_ngcontent-%COMP%] {\r\n  margin-left: 0 !important;\r\n  flex: 1 1 auto;\r\n}\r\n\r\nmat-sidenav[_ngcontent-%COMP%] {\r\n  flex: 0 1 auto;\r\n}\r\n\r\n@-webkit-keyframes orbit {\r\n  from {transform:rotate(0deg) }\r\n  to { transform:rotate(360deg) }\r\n}\r\n\r\n@-webkit-keyframes rotate-planet {\r\n  from {\r\n    transform: rotate(0);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate-planet {\r\n  from {\r\n    transform: rotate(0);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VsZXN0aWFsLW9yYml0L2NlbGVzdGlhbC1vcmJpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLE1BQU0sdUJBQXVCO0VBQzdCLEtBQUsseUJBQXlCO0FBQ2hDOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQVBBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2VsZXN0aWFsLW9yYml0L2NlbGVzdGlhbC1vcmJpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1bntcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDEwcHggc29saWQgb3JhbmdlO1xyXG59XHJcblxyXG4ub3JiaXRlcntcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbi5jZWxlc3RpYWxPcmJpdFNpZGVDb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcclxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBvcmJpdCB7XHJcbiAgZnJvbSB7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKSB9XHJcbiAgdG8geyB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZykgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1wbGFuZXQge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CelestialOrbitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'celestial-orbit-animation',
                templateUrl: './celestial-orbit.component.html',
                styleUrls: ['./celestial-orbit.component.css']
            }]
    }], function () { return []; }, { animatePlanet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orbitalSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotationalSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], planet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/directives/AnimationDirective.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/directives/AnimationDirective.directive.ts ***!
  \************************************************************/
/*! exports provided: PlanetAnimationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetAnimationDirective", function() { return PlanetAnimationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PlanetAnimationDirective {
    constructor(er, renderer) {
        this.er = er;
        this.renderer = renderer;
        renderer.setStyle(er.nativeElement, 'width', '400px');
        renderer.setStyle(er.nativeElement, 'height', '400px');
        renderer.setStyle(er.nativeElement, 'top', '172px');
        renderer.setStyle(er.nativeElement, 'left', '140px');
        renderer.setStyle(er.nativeElement, 'border-radius', '50%');
        renderer.setStyle(er.nativeElement, '-webkit-animation-iteration-count', 'infinite');
        renderer.setStyle(er.nativeElement, '-webkit-animation-timing-function', 'linear');
        renderer.setStyle(er.nativeElement, '-webkit-animation-name', 'orbit');
    }
    ngOnChanges() {
        this.updateAnimation();
    }
    ngOnInit() {
        this.updateAnimation();
    }
    updateAnimation() {
        let orbitSpeed = `${this.orbitSpeed}`;
        console.log(this.shouldAnimate);
        if (this.shouldAnimate) {
            console.log("SET ORBIT SPEED TO ORBIT SPEED");
            this.renderer.setStyle(this.er.nativeElement, '-webkit-animation-duration', orbitSpeed);
        }
        else {
            console.log("SET ORBIT SPEED TO 0");
            this.renderer.setStyle(this.er.nativeElement, '-webkit-animation-duration', '0s');
        }
    }
}
PlanetAnimationDirective.ɵfac = function PlanetAnimationDirective_Factory(t) { return new (t || PlanetAnimationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PlanetAnimationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PlanetAnimationDirective, selectors: [["", "planetAnimation", ""]], inputs: { shouldAnimate: ["animate", "shouldAnimate"], orbitSpeed: "orbitSpeed", rotationalSpeed: ["rotationSpeed", "rotationalSpeed"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanetAnimationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[planetAnimation]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { shouldAnimate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['animate']
        }], orbitSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['orbitSpeed']
        }], rotationalSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rotationSpeed']
        }] }); })();


/***/ }),

/***/ "./src/app/directives/PlanetDirective.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/PlanetDirective.directive.ts ***!
  \*********************************************************/
/*! exports provided: PlanetDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetDirective", function() { return PlanetDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PlanetDirective {
    constructor(er, renderer) {
        this.er = er;
        this.renderer = renderer;
        renderer.setStyle(er.nativeElement, '-webkit-animation-iteration-count', 'infinite');
        renderer.setStyle(er.nativeElement, '-webkit-animation-timing-function', 'linear');
        renderer.setStyle(er.nativeElement, '-webkit-animation-name', 'rotate-planet');
        renderer.setStyle(er.nativeElement, 'border', '5px solid rgba(29,161,242,0.2)');
        renderer.setStyle(er.nativeElement, 'border-left-color', 'rgb(29,161,242)');
    }
    ngOnChanges() {
        this.updateView();
    }
    ngOnInit() {
        this.updateView();
    }
    updateView() {
        let planetColor = `${this.planetColor}`;
        this.renderer.setStyle(this.er.nativeElement, 'background-color', planetColor);
        let planetRadius = `${this.planetRadius}`;
        this.renderer.setStyle(this.er.nativeElement, 'height', planetRadius);
        this.renderer.setStyle(this.er.nativeElement, 'width', planetRadius);
        this.renderer.setStyle(this.er.nativeElement, 'border-radius', '50%');
        let rotationalSpeed = `${this.rotationSpeed}s`;
        this.renderer.setStyle(this.er.nativeElement, '-webkit-animation-duration', rotationalSpeed);
    }
}
PlanetDirective.ɵfac = function PlanetDirective_Factory(t) { return new (t || PlanetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PlanetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PlanetDirective, selectors: [["", "planet", ""]], inputs: { planetColor: "planetColor", planetRadius: "planetRadius", rotationSpeed: "rotationSpeed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanetDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[planet]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { planetColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['planetColor']
        }], planetRadius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['planetRadius']
        }], rotationSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rotationSpeed']
        }] }); })();


/***/ }),

/***/ "./src/app/domain/celestial-orbit.model.ts":
/*!*************************************************!*\
  !*** ./src/app/domain/celestial-orbit.model.ts ***!
  \*************************************************/
/*! exports provided: CelestialOrbit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelestialOrbit", function() { return CelestialOrbit; });
class CelestialOrbit {
    constructor() {
        this.orbitalSpeed = 1;
        this.rotationalSpeed = 1;
        this.planet = {};
        this.animatePlanet = true;
        this.submitted = false;
    }
}


/***/ }),

/***/ "./src/app/orbit-form/orbit-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/orbit-form/orbit-form.component.ts ***!
  \****************************************************/
/*! exports provided: OrbitFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrbitFormComponent", function() { return OrbitFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function OrbitFormComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Must be positive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrbitFormComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Must be positive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class OrbitFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.celestialOrbit.orbitForm = this.fb.group({
            orbitalSpeed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            rotationalSpeed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
        }, {});
    }
    onSubmit() {
        this.celestialOrbit.submitted = true;
        if (this.celestialOrbit.orbitForm.valid) {
            if (this.celestialOrbit.orbitForm.value.orbitalSpeed >= 0) {
                this.celestialOrbit.orbitalSpeed = this.celestialOrbit.orbitForm.value.orbitalSpeed;
            }
            if (this.celestialOrbit.orbitForm.value.rotationalSpeed >= 0) {
                this.celestialOrbit.rotationalSpeed = this.celestialOrbit.orbitForm.value.rotationalSpeed;
            }
        }
    }
}
OrbitFormComponent.ɵfac = function OrbitFormComponent_Factory(t) { return new (t || OrbitFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
OrbitFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrbitFormComponent, selectors: [["orbit-form"]], inputs: { celestialOrbit: "celestialOrbit" }, decls: 13, vars: 5, consts: [[1, "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "number", "name", "orbitalSpeed", "min", "0", "formControlName", "orbitalSpeed", 1, "form-control", 3, "placeholder"], ["class", "text-danger", 4, "ngIf"], ["type", "number", "name", "rotationalSpeed", "min", "0", "formControlName", "rotationalSpeed", 1, "form-control", 3, "placeholder"], ["type", "submit", "name", "Apply"], [1, "text-danger"]], template: function OrbitFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OrbitFormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Orbital Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrbitFormComponent_span_5_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rotational Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrbitFormComponent_span_10_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.celestialOrbit.orbitForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.celestialOrbit.orbitalSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.celestialOrbit.orbitForm.controls.orbitalSpeed.touched || ctx.celestialOrbit.submitted) && (ctx.celestialOrbit.orbitForm.controls.orbitalSpeed.errors == null ? null : ctx.celestialOrbit.orbitForm.controls.orbitalSpeed.errors.min));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", " ", ctx.celestialOrbit.rotationalSpeed, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.celestialOrbit.orbitForm.controls.rotationalSpeed.touched || ctx.celestialOrbit.submitted) && (ctx.celestialOrbit.orbitForm.controls.rotationalSpeed.errors == null ? null : ctx.celestialOrbit.orbitForm.controls.rotationalSpeed.errors.min));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yYml0LWZvcm0vb3JiaXQtZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrbitFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'orbit-form',
                templateUrl: './orbit-form.component.html',
                styleUrls: ['./orbit-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { celestialOrbit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/planet.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/planet.service.ts ***!
  \********************************************/
/*! exports provided: PlanetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetService", function() { return PlanetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class PlanetService {
    constructor(http) {
        this.http = http;
        this.uri = 'http://localhost:8080/planet';
    }
    getPlanet() {
        return this.http.get(`${this.uri}`);
    }
}
PlanetService.ɵfac = function PlanetService_Factory(t) { return new (t || PlanetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PlanetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlanetService, factory: PlanetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/side-nav/side-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.ts ***!
  \************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SideNavComponent {
    constructor() { }
    ngOnInit() {
    }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(); };
SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-side-nav"]], decls: 2, vars: 0, template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "side-nav works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-nav',
                templateUrl: './side-nav.component.html',
                styleUrls: ['./side-nav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chand\Desktop\Master_Folder\git_repositories\orbiter\Orbiter\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map