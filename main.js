(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-slider></app-slider>\r\n<app-servicios></app-servicios>\r\n<app-promociones></app-promociones>\r\n<app-bienvenidos></app-bienvenidos>\r\n<!--<app-team></app-team>-->\r\n<app-map></app-map>\r\n<app-footer></app-footer>\r\n<!--<app-overlay></app-overlay>-->\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/ngx-page-scroll.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        ngx_page_scroll__WEBPACK_IMPORTED_MODULE_1__["PageScrollConfig"].defaultScrollOffset = 100;
        ngx_page_scroll__WEBPACK_IMPORTED_MODULE_1__["PageScrollConfig"].defaultDuration = 700;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/ngx-page-scroll.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _servicios_servicios_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./servicios/servicios.component */ "./src/app/servicios/servicios.component.ts");
/* harmony import */ var _promociones_promociones_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./promociones/promociones.component */ "./src/app/promociones/promociones.component.ts");
/* harmony import */ var _bienvenidos_bienvenidos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bienvenidos/bienvenidos.component */ "./src/app/bienvenidos/bienvenidos.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { OverlayComponent } from './overlay/overlay.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_7__["SliderComponent"],
                _servicios_servicios_component__WEBPACK_IMPORTED_MODULE_8__["ServiciosComponent"],
                _promociones_promociones_component__WEBPACK_IMPORTED_MODULE_9__["PromocionesComponent"],
                _bienvenidos_bienvenidos_component__WEBPACK_IMPORTED_MODULE_10__["BienvenidosComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_page_scroll__WEBPACK_IMPORTED_MODULE_3__["NgxPageScrollModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
                        path: '',
                        component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                    }]),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bienvenidos/bienvenidos.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bienvenidos/bienvenidos.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.bienvenidos {\r\n  display: flex;\r\n  padding: 80px 0 125px;\r\n}\r\n\r\n.con-video {\r\n  display: flex;\r\n}\r\n\r\n.video iframe {\r\n  width: 598px;\r\n  height: 420px;\r\n}\r\n\r\n.descri-video {\r\n  width: 598px;\r\n  height: 420px;\r\n}\r\n\r\n.descri-video img {\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n.descri-video h2 {\r\n  margin: auto;\r\n  width: auto;\r\n}\r\n\r\n.descri-video p {\r\n  padding-top: 20px;\r\n  text-align: center;\r\n  font-family: 'Champagne-Limousines-Bold';\r\n  font-weight: lighter;\r\n  font-size: 20px;\r\n  margin: 0px 38px\r\n}\r\n\r\n@media only screen and (max-width: 1020px) {\r\n  .bienvenidos {\r\n    padding: 50px 0;\r\n  }\r\n\r\n  .con-video {\r\n    display: block;\r\n  }\r\n\r\n  .video {\r\n    width: 100%;\r\n\r\n  }\r\n\r\n  .video iframe {\r\n    margin: 0 auto 20px;\r\n    display: block;\r\n  }\r\n\r\n  .descri-video {\r\n    width: 100%;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 598px) {\r\n  .descri-video img {\r\n    width: 90%;\r\n    margin: auto;\r\n  }\r\n\r\n  .video iframe {\r\n    width: 320px;\r\n    height: 260px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/bienvenidos/bienvenidos.component.html":
/*!********************************************************!*\
  !*** ./src/app/bienvenidos/bienvenidos.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bienvenidos\" id=\"section-4\">\r\n  <div class=\"centrado-vertical\">\r\n    <div class=\"content con-video\">\r\n      <div class=\"video\">\r\n        <iframe  src=\"https://www.youtube.com/embed/5M_hB8y8XZQ\" frameborder=\"0\"\r\n                 allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n      </div>\r\n      <div class=\"descri-video\">\r\n        <h2 class=\"titulo-corrido\">bienvenido a</h2>\r\n        <img src=\"../../assets/img/logo-negro.png\" alt=\"\" class=\"logo\">\r\n        <p>Valoramos a nuestros clientes y sabemos exactamente qué es lo que más se adapta a ellos y cómo\r\n          implementar\r\n          sus ideas más creativas en la realidad para mejorar su apariencia natural.<br>¡Siéntase libre de\r\n          expresarse a través de su apariencia confiando en nosotros!</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/bienvenidos/bienvenidos.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bienvenidos/bienvenidos.component.ts ***!
  \******************************************************/
/*! exports provided: BienvenidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidosComponent", function() { return BienvenidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BienvenidosComponent = /** @class */ (function () {
    function BienvenidosComponent() {
    }
    BienvenidosComponent.prototype.ngOnInit = function () {
    };
    BienvenidosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bienvenidos',
            template: __webpack_require__(/*! ./bienvenidos.component.html */ "./src/app/bienvenidos/bienvenidos.component.html"),
            styles: [__webpack_require__(/*! ./bienvenidos.component.css */ "./src/app/bienvenidos/bienvenidos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BienvenidosComponent);
    return BienvenidosComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.footer {\r\n  width: auto;\r\n  height: 70px;\r\n  background-color: #000000;\r\n}\r\n\r\n.con-foot {\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.25);\r\n  padding-top: 30px;\r\n}\r\n\r\n.footer p {\r\n  color: rgba(255, 255, 255, 0.25);\r\n  font-family: 'Champagne-Limousines-Bold';\r\n  font-size: 15px;\r\n  font-weight: lighter;\r\n  padding-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <div class=\"content\">\r\n    <div class=\"con-foot\"></div>\r\n    <p>Versatti Copyrirht © 2018</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.header {\r\n  padding: 16px 0;\r\n  transition: .5s all;\r\n}\r\n\r\n.header ul {\r\n  border-right: 1px solid rgba(255, 255, 255, .25)\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 100;\r\n  border-bottom: 1px solid rgba(255, 255, 255, .25)\r\n}\r\n\r\nheader.active {\r\n  background-color: rgba(0, 0, 0, .7)\r\n}\r\n\r\nnav {\r\n  width: 770px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transition: .5s all;\r\n}\r\n\r\nheader ul {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-left: 150px\r\n}\r\n\r\nheader li {\r\n  display: inline;\r\n  float: left\r\n}\r\n\r\nheader li a {\r\n  display: block;\r\n  text-align: center;\r\n  padding: 0 12px;\r\n  text-decoration: none;\r\n  font-family: 'Poiret One', cursive;\r\n  color: #fff;\r\n  font-size: 24px\r\n}\r\n\r\n.logonav {\r\n  width: 150px;\r\n  display: inline-block;\r\n  padding: 10px 0;\r\n  vertical-align: middle;\r\n  margin-left: 35px\r\n}\r\n\r\n.ico-redes {\r\n  display: inline-block;\r\n  padding-left: 18px\r\n}\r\n\r\n.redes_sociales {\r\n  width: 20px;\r\n  display: inline-block;\r\n  padding: 0 5px;\r\n  vertical-align: middle\r\n}\r\n\r\n.burguer {\r\n  display: none;\r\n  transition: .5s\r\n}\r\n\r\n@media only screen and (max-width: 1115px) {\r\n  header ul {\r\n    margin: 0\r\n  }\r\n\r\n  .ico-redes {\r\n    padding: 0\r\n  }\r\n\r\n  nav {\r\n    width: auto\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 850px) {\r\n  .header {\r\n    padding: 8px 0\r\n  }\r\n\r\n  .logonav {\r\n    margin-left: 15px\r\n  }\r\n\r\n  nav {\r\n    height: 0;\r\n    overflow: hidden;\r\n    transition: .3s;\r\n    display: block;\r\n  }\r\n\r\n  nav.active {\r\n    height: calc(100vh - 111px)\r\n  }\r\n\r\n  nav ul {\r\n    width: 100%\r\n  }\r\n\r\n  nav li {\r\n    width: 100%;\r\n    float: none\r\n  }\r\n\r\n  nav li a {\r\n    padding: 10px 0\r\n  }\r\n\r\n  .ico-redes {\r\n    margin: auto;\r\n    display: block;\r\n    width: 60px\r\n  }\r\n\r\n  .burguer {\r\n    display: block;\r\n    position: absolute;\r\n    height: 45px;\r\n    right: 15px;\r\n    top: 20px;\r\n    width: 45px;\r\n    transition: .5s\r\n  }\r\n\r\n  .burguer.active .one {\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    margin: 16px 0 0\r\n  }\r\n\r\n  .burguer.active .two {\r\n    display: none\r\n  }\r\n\r\n  .burguer.active .three {\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n    margin: -5px 0 0\r\n  }\r\n\r\n  .burguer span {\r\n    width: 100%;\r\n    background-color: #fff;\r\n    height: 5px;\r\n    border-radius: 3px;\r\n    margin: 7px 0;\r\n    display: block;\r\n    transition: .5s\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header [ngClass]=\"{'active' : !onTop || menuOpen }\" >\r\n  <div class=\"content\">\r\n    <div class=\"header\" id=\"mainmenu\">\r\n      <img class=\"logonav\" src=\"../../assets/img/logo-versatti.png\"/>\r\n      <nav [ngClass]=\" {'active': menuOpen}\">\r\n        <ul>\r\n          <li><a class=\"lnk-menu\" pageScroll href=\"#section-1\" [routerLink]=\"'/'\" fragment=\"section-1\">Promociones</a>\r\n          </li>\r\n          <li><a class=\"lnk-menu\" pageScroll href=\"#section-2\" [routerLink]=\"'/'\" fragment=\"section-2\">Servicios</a>\r\n          </li>\r\n          <li><a class=\"lnk-menu\" pageScroll href=\"#section-3\" [routerLink]=\"'/'\" fragment=\"section-3\">Equipo</a></li>\r\n          <li><a class=\"lnk-menu\" pageScroll href=\"#section-4\" [routerLink]=\"'/'\" fragment=\"section-4\">Nosotros</a></li>\r\n          <li><a class=\"lnk-menu\" pageScroll href=\"#section-5\" [routerLink]=\"'/'\" fragment=\"section-5\">Contáctanos</a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n      <div class=\"ico-redes\">\r\n        <a target=\"_blank\" href=\"https://www.facebook.com/VersattiSalonSpa/\"><img class=\"redes_sociales\"\r\n                                                                                  src=\"../../assets/img/fb.png\"/></a>\r\n        <a target=\"_blank\" href=\"https://www.instagram.com/versattisalon/\"><img class=\"redes_sociales\"\r\n                                                                                src=\"../../assets/img/inst.png\"/></a>\r\n      </div>\r\n      <div (click)=\"openMenu()\" [ngClass]=\" {'active': menuOpen}\" class=\"burguer\"><span class=\"one\"></span><span class=\"two\"></span><span\r\n        class=\"three\"></span></div>\r\n    </div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.onTop = true;
        this.menuOpen = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.doSomething = function (event) {
        this.onTop = true;
        this.onTop = window.pageYOffset < 150;
    };
    HeaderComponent.prototype.openMenu = function () {
        this.menuOpen = !this.menuOpen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "doSomething", null);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapa {\r\n  display: block;\r\n  margin: auto;\r\n  height: 530px\r\n}\r\n\r\n.ubicacion {\r\n  background: #000\r\n}\r\n\r\n.cont-datos {\r\n  width: 100%\r\n}\r\n\r\n.datos-ubicacion {\r\n  background-color: #c09;\r\n  padding: 60px 5% 0;\r\n  height: 160px;\r\n  justify-content: center\r\n}\r\n\r\n.direccion {\r\n  display: inline-block;\r\n  width: 33%;\r\n  padding: 0 31px;\r\n  box-sizing: border-box\r\n}\r\n\r\n.direccion img {\r\n  margin: 0 5px;\r\n  vertical-align: top\r\n}\r\n\r\n.direccion p {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  font-weight: lighter;\r\n  font-family: Champagne-Limousines-Bold;\r\n  margin: 0 10px\r\n}\r\n\r\n.mapa {\r\n  width: 100%\r\n}\r\n\r\n@media only screen and (max-width: 1120px) {\r\n  .datos-ubicacion {\r\n    padding: 60px 15px 0\r\n  }\r\n\r\n  .direccion {\r\n    padding: 0\r\n  }\r\n\r\n  .direccion p {\r\n    width: 160px\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n  .direccion p {\r\n    width: 120px;\r\n    font-size: 17px\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 812px) {\r\n  .datos-ubicacion {\r\n    padding: 40px 10px 20px;\r\n    height: auto\r\n  }\r\n\r\n  .direccion {\r\n    display: block;\r\n    margin: 0 auto 20px;\r\n    width: 211px\r\n  }\r\n\r\n  .direccion img {\r\n    width: 50px\r\n  }\r\n\r\n  .mapa {\r\n    height: 340px\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"ubicacion\">\r\n  <div class=\"centrado-vertical\">\r\n    <div class=\"cont-datos\">\r\n      <div class=\"datos-ubicacion\">\r\n        <div class=\"content\">\r\n          <div class=\"direccion\">\r\n            <img src=\"../../assets/img/place-holder.png\"/>\r\n            <p>Dirección:<br>\r\n              Jr. Brigadier Mateo <br>\r\n              Pumacahua 2529 <br>\r\n              Lince, Lima</p>\r\n\r\n          </div>\r\n          <div class=\"direccion\">\r\n            <img src=\"../../assets/img/phone-call.png\"/>\r\n            <p>Teléfonos:<br>\r\n              (01) 472 0889<br>\r\n              991 916 126<br>\r\n            </p>\r\n\r\n          </div>\r\n          <div class=\"direccion\">\r\n            <img src=\"../../assets/img/clock.png\"/>\r\n            <p>Horario de atención:<br>\r\n              lunes a sábado<br>\r\n              de 10:00 a.m.<br>\r\n              a 9:00 p.m.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <iframe\r\n    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.364943343865!2d-77.04500068509638!3d-12.087149991440429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85868ae6a35%3A0xbb61a7371183807a!2sVersatti!5e0!3m2!1ses!2spe!4v1530919659243\"\r\n    class=\"mapa\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n\r\n  <div class=\"centrado-vertical\">\r\n    <div class=\"cont-datos\">\r\n      <div class=\"datos-ubicacion\">\r\n        <div class=\"content\">\r\n          <div class=\"direccion\">\r\n            <img src=\"../../assets/img/place-holder.png\"/>\r\n            <p >Dirección:<br> Jr. Gavilanes 167 <br> San Isidro, Lima</p>\r\n\r\n          </div>\r\n          <div class=\"direccion\">\r\n            <img src=\"../../assets/img/phone-call.png\"/>\r\n            <p>Teléfonos:<br>\r\n              (01) 693 8086<br>\r\n              991 916 126<br>\r\n            </p>\r\n\r\n          </div>\r\n          <div class=\"direccion\">\r\n            <img src=\"../../assets/img/clock.png\"/>\r\n            <p>Horario de atención:<br>\r\n              lunes a sábado<br>\r\n              de 10:00 a.m.<br>\r\n              a 8:00 p.m.</p>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <iframe class=\"mapa\" frameborder=\"0\" style=\"border:0\"\r\n          src=\"https://www.google.com/maps/embed/v1/place?q=Calle%20los%20gavilanes%20167%20san%20isidro&key=AIzaSyDF6P_VsDHZV7J_NM4zc96C8yzVWyRmFtw\"\r\n          allowfullscreen></iframe>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/promociones/promociones.component.css":
/*!*******************************************************!*\
  !*** ./src/app/promociones/promociones.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.promociones {\r\n  background-image: url('foto-salon.png');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  margin: auto;\r\n  display: flex;\r\n  padding: 50px 0 125px;\r\n}\r\n\r\n.promociones p {\r\n  margin: auto;\r\n  display: block;\r\n  width: 800px;\r\n  text-align: center;\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  line-height: 1.8em;\r\n  letter-spacing: 0.3px;\r\n}\r\n\r\n@media only screen and (max-width: 936px) {\r\n\r\n  .promociones p {\r\n    width: 100%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/promociones/promociones.component.html":
/*!********************************************************!*\
  !*** ./src/app/promociones/promociones.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"promociones\" id=\"section-3\">\r\n  <div class=\"centrado-vertical\">\r\n    <div class=\"content\">\r\n      <h3 class=\"titulo-corrido\">reserve su cita en línea</h3>\r\n      <h2 class=\"titulo-normal-2\">OBTEN HASTA UN 20% DE DESCUENTO</h2>\r\n      <p> Hacemos un descuento solo para aquellos clientes que hacen una cita, así que apúrate para hacer una cita\r\n        con nuestros especialistas ¡Ahorra hasta 20%!</p>\r\n      <div class=\"boton_reserva\">Reserva una cita</div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/promociones/promociones.component.ts":
/*!******************************************************!*\
  !*** ./src/app/promociones/promociones.component.ts ***!
  \******************************************************/
/*! exports provided: PromocionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromocionesComponent", function() { return PromocionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PromocionesComponent = /** @class */ (function () {
    function PromocionesComponent() {
    }
    PromocionesComponent.prototype.ngOnInit = function () {
    };
    PromocionesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promociones',
            template: __webpack_require__(/*! ./promociones.component.html */ "./src/app/promociones/promociones.component.html"),
            styles: [__webpack_require__(/*! ./promociones.component.css */ "./src/app/promociones/promociones.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PromocionesComponent);
    return PromocionesComponent;
}());



/***/ }),

/***/ "./src/app/servicios/servicios.component.css":
/*!***************************************************!*\
  !*** ./src/app/servicios/servicios.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.servicios {\r\n  margin: auto;\r\n  display: flex;\r\n  padding: 50px 0 125px;\r\n}\r\n\r\n.cont-servicios {\r\n  display: flex;\r\n  margin-top: 57px;\r\n}\r\n\r\n.servicio {\r\n  width: 33.3%;\r\n  display: block;\r\n}\r\n\r\n.caja_serv {\r\n  width: 270px;\r\n  height: 350px;\r\n  padding: 15px 7px 15px 7px;\r\n  font-family: 'Champagne-Limousines-Bold';\r\n  display: block;\r\n  margin: 0 auto;\r\n  align-content: center;\r\n  transition: .3s all;\r\n}\r\n\r\n.caja_serv_posterior {\r\n  width: 270px;\r\n  height: 350px;\r\n  padding: 15px 7px 15px 7px;\r\n  display: none;\r\n  margin: 0 auto;\r\n}\r\n\r\n.text_caja_posterior {\r\n  font-family: 'Champagne-Limousines-Bold';\r\n  font-size: 30px;\r\n}\r\n\r\n.text_caja_posterior_precio {\r\n  font-family: 'Blacksword';\r\n  color: #cc0099;\r\n  font-size: 30px;\r\n  font-weight: lighter;\r\n}\r\n\r\n.text_caja_posterior_precio span {\r\n  font-family: 'Champagne-Limousines-Bold';\r\n}\r\n\r\n.lista_servicios {\r\n  padding-left: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.list_ser {\r\n  font-family: 'Champagne-Limousines-Bold';\r\n  font-size: 18px;\r\n  line-height: 25px;\r\n}\r\n\r\n.servicio:hover .caja_serv {\r\n  display: none;\r\n}\r\n\r\n.servicio:hover .caja_serv_posterior {\r\n  display: block;\r\n}\r\n\r\n.caja_serv img {\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n.cont_img {\r\n  display: block;\r\n  margin: auto;\r\n  height: 112px;\r\n  width: 270px;\r\n}\r\n\r\n.caja_serv h4 {\r\n  text-align: center;\r\n  font-family: 'Blacksword';\r\n  font-size: 42px;\r\n  font-weight: lighter;\r\n  padding-top: 10px;\r\n}\r\n\r\n.caja_serv p {\r\n  text-align: center;\r\n  font-size: 24px;\r\n}\r\n\r\n@media only screen and (max-width: 936px) {\r\n  .cont-servicios {\r\n    display: block;\r\n  }\r\n  .servicio{\r\n    width: 100%;\r\n  }\r\n  .caja_serv {\r\n    display: block;\r\n    margin: auto;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/servicios/servicios.component.html":
/*!****************************************************!*\
  !*** ./src/app/servicios/servicios.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"servicios\" id=\"section-2\">\r\n  <div class=\"centrado-vertical\">\r\n    <div class=\"content\">\r\n      <h3 class=\"titulo-corrido\">nuestros</h3>\r\n      <h2 class=\"titulo-normal\">servicios</h2>\r\n      <div class=\"cont-servicios\">\r\n        <div class=\"servicio\">\r\n          <div class=\"caja_serv\">\r\n            <div class=\"cont_img\"><img src=\"../../assets/img/tijera.png\" alt=\"corte\"/></div>\r\n            <h4>Cabello</h4>\r\n            <p>Si quieres cambiar tu estilo o simplemente mantener el cabello saludable, este es el mejor\r\n              lugar\r\n              que estás buscando.</p>\r\n          </div>\r\n          <div class=\"caja_serv_posterior\">\r\n            <h4 class=\"text_caja_posterior\">CORTES DE CABELLO</h4>\r\n            <h4 class=\"text_caja_posterior_precio\">desde <span>S/. 50</span></h4>\r\n            <ul class=\"lista_servicios\">\r\n              <li class=\"list_ser\">corte de cabello para ella</li>\r\n              <li class=\"list_ser\">corte de cabello para el</li>\r\n              <li class=\"list_ser\">peinados elaborados</li>\r\n              <li class=\"list_ser\">tintes con amoniaco</li>\r\n              <li class=\"list_ser\">mechas balayage o californianas</li>\r\n              <li class=\"list_ser\">tratamientos de nutrición</li>\r\n              <li class=\"list_ser\">tratamiento reconstructiva</li>\r\n            </ul>\r\n            <div class=\"boton_reserva\">Reserva una cita</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"servicio\">\r\n          <div class=\"caja_serv\">\r\n            <div class=\"cont_img\"><img src=\"../../assets/img/manicure.png\" alt=\"coloracion\"/></div>\r\n            <h4>Belleza</h4>\r\n            <p>Somos un salón de servicio completo. Ofrecemos los servicios más recientes y de la más alta\r\n              calidad para todos los miembros de su familia.</p>\r\n          </div>\r\n          <div class=\"caja_serv_posterior\">\r\n            <h4 class=\"text_caja_posterior\">MAQUILLAJE</h4>\r\n            <h4 class=\"text_caja_posterior_precio\">desde <span>S/. 25</span></h4>\r\n            <ul class=\"lista_servicios\">\r\n              <li class=\"list_ser\">manicure spa</li>\r\n              <li class=\"list_ser\">pedicure spa</li>\r\n              <li class=\"list_ser\">color gel</li>\r\n              <li class=\"list_ser\">maquillaje mac</li>\r\n              <li class=\"list_ser\">maquillaje mac premiun</li>\r\n              <li class=\"list_ser\">micropigmentacion de cejas</li>\r\n              <li class=\"list_ser\">extensión de pestañas</li>\r\n            </ul>\r\n            <div class=\"boton_reserva\">Reserva una cita</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"servicio\">\r\n          <div class=\"caja_serv\">\r\n            <div class=\"cont_img\"><img src=\"../../assets/img/tinte.png\" alt=\"manicure\"/></div>\r\n            <h4>Bienestar</h4>\r\n            <p>Ofrecemos una amplia variedad de servicios, centrándonos en la estética personal. Nuestros\r\n              practicantes están bien entrenados.</p>\r\n          </div>\r\n          <div class=\"caja_serv_posterior\">\r\n            <h4 class=\"text_caja_posterior\">DEPILACIÓN</h4>\r\n            <h4 class=\"text_caja_posterior_precio\">desde <span>S/. 30</span></h4>\r\n            <ul class=\"lista_servicios\">\r\n              <li class=\"list_ser\">limpieza facial dermalogica</li>\r\n              <li class=\"list_ser\">limpieza facial dermalogica más velo de colágeno</li>\r\n              <li class=\"list_ser\">masaje relajante</li>\r\n              <li class=\"list_ser\">ampollas control caída</li>\r\n              <li class=\"list_ser\">depilación de rostro</li>\r\n              <li class=\"list_ser\">depilación corpora</li>\r\n            </ul>\r\n            <div class=\"boton_reserva\">Reserva una cita</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/servicios/servicios.component.ts":
/*!**************************************************!*\
  !*** ./src/app/servicios/servicios.component.ts ***!
  \**************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiciosComponent = /** @class */ (function () {
    function ServiciosComponent() {
    }
    ServiciosComponent.prototype.ngOnInit = function () {
    };
    ServiciosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servicios',
            template: __webpack_require__(/*! ./servicios.component.html */ "./src/app/servicios/servicios.component.html"),
            styles: [__webpack_require__(/*! ./servicios.component.css */ "./src/app/servicios/servicios.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiciosComponent);
    return ServiciosComponent;
}());



/***/ }),

/***/ "./src/app/slider/slider.component.css":
/*!*********************************************!*\
  !*** ./src/app/slider/slider.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.carrusel {\r\n  width: 100%;\r\n  position: relative;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n.img_slider {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/slider/slider.component.html":
/*!**********************************************!*\
  !*** ./src/app/slider/slider.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"carrusel\" id=\"section-1\">\r\n  <div class=\"carrusel-1\">\r\n    <div>\r\n      <img class=\"img_slider\" src=\"../../assets/img/img-slider.png\"/>\r\n    </div>\r\n    <div>\r\n      <img class=\"img_slider\" src=\"../../assets/img/img-slider.png\"/>\r\n    </div>\r\n    <div>\r\n      <img class=\"img_slider\" src=\"../../assets/img/img-slider.png\"/>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/slider/slider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.team {\r\n  background-color: black;\r\n  display: flex;\r\n  padding: 50px 0 125px;\r\n}\r\n\r\n.team h2 {\r\n  color: white;\r\n}\r\n\r\n.team img {\r\n  display: block;\r\n  margin: auto;\r\n  width: 200px;\r\n  height: 300px;\r\n}\r\n\r\n.member {\r\n  width: 33%;\r\n  display: inline-block;\r\n  align-content: center;\r\n  padding-top: 60px;\r\n\r\n}\r\n\r\n.caja-member {\r\n  width: 270px;\r\n  font-family: 'Champagne-Limousines-Bold';\r\n  display: block;\r\n  margin: 0 auto;\r\n  align-content: center;\r\n}\r\n\r\n.cargo {\r\n  color: #cc0099;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  padding-bottom: 20px;\r\n\r\n}\r\n\r\n.member-desc {\r\n  color: white;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  font-weight: lighter;\r\n}\r\n"

/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"team\" >\r\n  <div class=\"centrado-vertical\">\r\n    <div class=\"content\">\r\n      <h3 class=\"titulo-corrido\">nuestro</h3>\r\n      <h2 class=\"titulo-normal\">equipo</h2>\r\n      <div class=\"member\">\r\n        <div class=\"caja-member\">\r\n          <img src=\"../../assets/img/directora.png\"/>\r\n          <p class=\"nombre\">MARILÚ</p>\r\n          <p class=\"cargo\">Directora de salón</p>\r\n          <p class=\"member-desc\">Makeup Artist & Hair.\r\n            Especialista en maquillaje\r\n            profesional para novias,\r\n            quinceañeras y eventos.</p>\r\n          <div class=\"boton_reserva\">Portafolio</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"member\">\r\n        <div class=\"caja-member\">\r\n          <img src=\"../../assets/img/estilista.png\"/>\r\n          <p class=\"nombre\">LIZ</p>\r\n          <p class=\"cargo\">Especialista en coloración capilar</p>\r\n          <p class=\"member-desc\">Tinte, decoloración o aclaración,\r\n            mechas oscuras y reflejos.</p>\r\n          <div class=\"boton_reserva\">Portafolio</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"member\">\r\n        <div class=\"caja-member\">\r\n          <img src=\"../../assets/img/yerika.png\"/>\r\n          <p class=\"nombre\">YERIKA</p>\r\n          <p class=\"cargo\">Especialista en manicure y pedicure de salón</p>\r\n          <p class=\"member-desc\">Uñas de gel,<br>      uñas de acrílico,<br>\r\n            gel color.\r\n          </p>\r\n          <div class=\"boton_reserva\">Portafolio</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Proyectoss\versatti\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map