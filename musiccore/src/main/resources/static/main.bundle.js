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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_oauth2_oidc__ = __webpack_require__("../../../../angular-oauth2-oidc/angular-oauth2-oidc.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_contentpage_contentpage_component__ = __webpack_require__("../../../../../src/app/homepage/contentpage/contentpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__homepage_footerpage_footerpage_component__ = __webpack_require__("../../../../../src/app/homepage/footerpage/footerpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hotsong_hotsong_component__ = __webpack_require__("../../../../../src/app/hotsong/hotsong.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__hotgenre_hotgenre_component__ = __webpack_require__("../../../../../src/app/hotgenre/hotgenre.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__newsong_newsong_component__ = __webpack_require__("../../../../../src/app/newsong/newsong.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__homepage_headerpage_headerpage_component__ = __webpack_require__("../../../../../src/app/homepage/headerpage/headerpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__topmenubar_topmenubar_component__ = __webpack_require__("../../../../../src/app/topmenubar/topmenubar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__menubar_menubar_component__ = __webpack_require__("../../../../../src/app/menubar/menubar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_8__homepage_homepage_component__["a" /* HomePageComponent */]
    },
    { path: '',
        redirectTo: '/homepage',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__homepage_homepage_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__homepage_contentpage_contentpage_component__["a" /* ContentPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__homepage_footerpage_footerpage_component__["a" /* FooterPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__hotsong_hotsong_component__["a" /* HotsongComponent */],
                __WEBPACK_IMPORTED_MODULE_12__hotgenre_hotgenre_component__["a" /* HotgenreComponent */],
                __WEBPACK_IMPORTED_MODULE_13__newsong_newsong_component__["a" /* NewsongComponent */],
                __WEBPACK_IMPORTED_MODULE_14__homepage_headerpage_headerpage_component__["a" /* HeaderpageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__topmenubar_topmenubar_component__["a" /* TopmenubarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__menubar_menubar_component__["a" /* MenubarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_oauth2_oidc__["OAuthModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["HttpClientModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Foo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Foo = /** @class */ (function () {
    function Foo(id, name) {
        this.id = id;
        this.name = name;
    }
    return Foo;
}());

var AppService = /** @class */ (function () {
    function AppService(_router, _http) {
        this._router = _router;
        this._http = _http;
    }
    AppService.prototype.obtainAccessToken = function (loginData) {
        var _this = this;
        var params = new URLSearchParams();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'username': loginData.username, 'password': loginData.password, });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._http.post('http://localhost:8080/login', params.toString(), options)
            .subscribe(function (res) {
            _this.saveToken(res);
        }, function (err) { return alert("Invalid!"); });
    };
    AppService.prototype.saveToken = function (token) {
        var expireDate = new Date().getTime() + (1000 * token.expires_in);
        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].set("access_token", token.access_token, expireDate);
        this._router.navigate(['/']);
    };
    AppService.prototype.getResource = function (resourceUrl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer ' + __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].get('access_token') });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(resourceUrl, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    AppService.prototype.checkCredentials = function () {
        if (!__WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].check('access_token')) {
            this._router.navigate(['/login']);
        }
    };
    AppService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].delete('access_token');
        this._router.navigate(['/login']);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/contentpage/contentpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-page {\r\n    background-color: #fff;\r\n    width: 1000px;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n}\r\n\r\n.container {\r\n    width: 1000px;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n    position: relative;\r\n    padding: 0;\r\n}\r\n\r\n.page-content {\r\n\tmin-height: 500px;\r\n}\r\n\r\n.page-left {\r\n\twidth: 700px;\r\n  float: left;\r\n}\r\n\r\n.page-right {\r\n\tfloat: right;\r\n  width: 300px;\r\n  position: relative;\r\n}\r\n\r\n.page-bottom{\r\n\twidth: 100%;\r\n  float: right;\r\n  min-height: 500px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/contentpage/contentpage.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"main-page\">\r\n\t<div class=\"container page-content\">\r\n\t\t<div class=\"page-left\">\r\n\t\t\t<app-hotsong></app-hotsong>\r\n\t\t</div>\r\n\t\t<div class=\"page-right\">\r\n\t\t\t<app-hotgenre></app-hotgenre>\r\n\t\t</div>\r\n\t\t<div class=\"page-bottom\">\r\n\t\t\t<app-newsong></app-newsong>\r\n\t\t</div>\r\n\t\t\t  \r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/homepage/contentpage/contentpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPageComponent; });
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

var ContentPageComponent = /** @class */ (function () {
    function ContentPageComponent() {
    }
    ContentPageComponent.prototype.ngOnInit = function () {
    };
    ContentPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contentpage',
            template: __webpack_require__("../../../../../src/app/homepage/contentpage/contentpage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/contentpage/contentpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentPageComponent);
    return ContentPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/footerpage/footerpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\r\n    background: #222428;\r\n    padding: 20px 0 0;\r\n    overflow: hidden;\r\n    color: #fff;\r\n    position: relative;\r\n    min-width: 1000px;\r\n    z-index: 9999999;\r\n}\r\n\r\n.container {\r\n    width: 970px;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\nfooter .container {\r\n    background: #222428;\r\n    padding: 0 20px;\r\n}\r\n\r\nfooter .row {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.row {\r\n\toverflow: hidden;\r\n    margin-left: -8px;\r\n    margin-right: -8px;\r\n    margin-bottom: 24px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/footerpage/footerpage.component.html":
/***/ (function(module, exports) {

module.exports = "<footer style=\"margin-bottom: 0;\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\" style=\"text-align: center;\">\r\n\t\t<p>© 2018 TMA</p>\r\n\t\t</div>\r\n\t</div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/homepage/footerpage/footerpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterPageComponent; });
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

var FooterPageComponent = /** @class */ (function () {
    function FooterPageComponent() {
    }
    FooterPageComponent.prototype.ngOnInit = function () {
    };
    FooterPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footerpage',
            template: __webpack_require__("../../../../../src/app/homepage/footerpage/footerpage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/footerpage/footerpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterPageComponent);
    return FooterPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/headerpage/headerpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/headerpage/headerpage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topmenubar></app-topmenubar>\r\n<app-menubar></app-menubar>"

/***/ }),

/***/ "../../../../../src/app/homepage/headerpage/headerpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderpageComponent; });
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

var HeaderpageComponent = /** @class */ (function () {
    function HeaderpageComponent() {
    }
    HeaderpageComponent.prototype.ngOnInit = function () {
    };
    HeaderpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-headerpage',
            template: __webpack_require__("../../../../../src/app/homepage/headerpage/headerpage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/headerpage/headerpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderpageComponent);
    return HeaderpageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nbody{\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #f2f2f2;\r\n  font-weight: 400;\r\n  font-style: normal!important;\r\n  font-size: 14px;\r\n  font-family: \"Roboto\",\"segoe ui\",Helvetica,Arial,sans-serif;\r\n  line-height: 1.42857;\r\n  min-width: 718px;\r\n  display: block;\r\n  overflow-y: scroll;\r\n}\r\n\r\n@media (max-width: 718px ) {\r\n  body{\r\n     overflow-y: inherit;\r\n  }\r\n}\r\n\r\n/*#homepage{\r\n  max-width: 100%;\r\n  min-width:700px;\r\n  margin: 0 auto;\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\r\n  position: relative;\r\n}\r\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n\t<title></title>\r\n\t<link rel=\"stylesheet\" href=\"\">\r\n</head>\r\n<body>\r\n\t\r\n\r\n<div id=\"homepage\" >\r\n\r\n\t\t<div id=\"header\">\r\n\t\t\t<app-headerpage></app-headerpage>\r\n\t\t</div>\r\n\r\n\t\t<div id=\"content\">\r\n\t\t\t<app-contentpage></app-contentpage>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div id=\"footer\">\r\n\t\t\t<app-footerpage></app-footerpage>\r\n\t\t</div>\r\n\r\n</div>\r\n\r\n\r\n</body>\r\n</html>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
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

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hotgenre/hotgenre.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-hotgenre {\r\n    text-transform: uppercase;\r\n    font-weight: 340;\r\n    margin-bottom: 5px;\r\n    margin-top: -20px;\r\n    margin-left: 10px;\r\n/*    border-style: solid;\r\n    border-width: 1px;*/\r\n}\r\n\r\n.title-hotgenre h3>a{\r\n\tcolor: #2582be;\r\n    background: url(https://stc-id.nixcdn.com/v11/images/icon-repeat.png) right -155px no-repeat;\r\n    text-transform: uppercase;\r\n    padding: 0 20px 0 0;\r\n    font-weight: 340 !important;\r\n    -webkit-transition: all 0.2s linear;\r\n    transition: all 0.2s linear;\r\n    text-decoration: none;\r\n}\r\n\r\n.hotgenre {\r\n\tmargin-bottom: 8px;\r\n}\r\n\r\n.img-responsive {\r\n    margin: 0 auto;\r\n    display: block;\r\n    width: 280px;\r\n    height: 70px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hotgenre/hotgenre.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"title-hotgenre\">\r\n\t<h3><a href=\"\" title=\"Chủ Đề Hot\">HOT GENRE</a></h3>\r\n</div>\r\n\r\n<div class=\"hotgenre\">\r\n\t<a href=\"/chu-de/Zing-Music-Awards-2017/IWZ99F06.html#home_chude_01\" title=\"Zing Music Awards 2017\" class=\"_trackLink\" tracking=\"_frombox=#home_chude_01\">\r\n\r\n        <img src=\"../assets/icon/1.jpg\" class=\"img-responsive\" alt=\"Zing Music Awards 2017\">\r\n\t        \r\n\t</a>\r\n</div>\r\n\r\n<div class=\"hotgenre\">\r\n\t<a href=\"/chu-de/Zing-Music-Awards-2017/IWZ99F06.html#home_chude_01\" title=\"Zing Music Awards 2017\" class=\"_trackLink\" tracking=\"_frombox=#home_chude_01\">\r\n\r\n        <img src=\"../assets/icon/2.jpg\" class=\"img-responsive\" alt=\"Zing Music Awards 2017\">\r\n\t        \r\n\t</a>\r\n</div>\r\n\r\n<div class=\"hotgenre\">\r\n\t<a href=\"/chu-de/Zing-Music-Awards-2017/IWZ99F06.html#home_chude_01\" title=\"Zing Music Awards 2017\" class=\"_trackLink\" tracking=\"_frombox=#home_chude_01\">\r\n\r\n        <img src=\"../assets/icon/3.jpg\" class=\"img-responsive\" alt=\"Zing Music Awards 2017\">\r\n\t        \r\n\t</a>\r\n</div>\r\n\r\n<div class=\"hotgenre\">\r\n\t<a href=\"/chu-de/Zing-Music-Awards-2017/IWZ99F06.html#home_chude_01\" title=\"Zing Music Awards 2017\" class=\"_trackLink\" tracking=\"_frombox=#home_chude_01\">\r\n\r\n        <img src=\"../assets/icon/4.jpg\" class=\"img-responsive\" alt=\"Zing Music Awards 2017\">\r\n\t        \r\n\t</a>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/hotgenre/hotgenre.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotgenreComponent; });
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

var HotgenreComponent = /** @class */ (function () {
    function HotgenreComponent() {
    }
    HotgenreComponent.prototype.ngOnInit = function () {
    };
    HotgenreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hotgenre',
            template: __webpack_require__("../../../../../src/app/hotgenre/hotgenre.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hotgenre/hotgenre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HotgenreComponent);
    return HotgenreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hotsong/hotsong.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hotsong {\r\n    width: 700px;\r\n    height: 350px;\r\n    position: relative;\r\n    left: 0px;\r\n    top: 0px;\r\n}\r\n\r\n.col-xs-2{\r\n    background:#00f;\r\n    color:#FFF;\r\n    height: 52px;\r\n    width: 125px;\r\n    padding-left: 0;\r\n}\r\n\r\n.col-half-offset{\r\n    margin-left:2.322%;\r\n}\r\n\r\n.acitve-image {\r\n\tmargin: 5px auto;\r\n\twidth: 690px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hotsong/hotsong.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hotsong\">\r\n\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" style=\"width: 690px; margin: 0 auto;\">\r\n\t\t<!-- Indicators -->\r\n<!-- \t\t<ol class=\"carousel-indicators\">\r\n\t\t  <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t\t  <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n\t\t  <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n\t\t  <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n\t\t  <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\r\n\t\t  <li data-target=\"#myCarousel\" data-slide-to=\"5\"></li>\r\n\t\t</ol> -->\r\n\r\n\t\t<!-- Wrapper for slides -->\r\n\t\t<div class=\"carousel-inner\">\r\n\t\t  <div class=\"item\" *ngFor=\"let song of hotsongs, let i = index\" [ngClass]=\"{active :  i === 0 }\">\r\n\t\t    <img src=\"{{song.imageUrl}}\" alt=\"Los Angeles\" style=\"width:100%; height: 290px;\">\r\n\t\t  </div>\r\n\t\t</div>\r\n\r\n\t\t<!-- Left and right controls -->\r\n<!-- \t\t<a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n  <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n  <span class=\"sr-only\">Previous</span>\r\n</a>\r\n<a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n  <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n  <span class=\"sr-only\">Next</span>\r\n</a> -->\r\n\t</div>\r\n    <div class=\"acitve-image\">\r\n        <div class=\"col-xs-2\" id=\"p1\" (click)=\"onClick(0)\">\r\n\t       \t<img src=\"../assets/icon/a.jpg\" alt=\"Los Angeles\" style=\"width:125px; height: 52px;\">\r\n        </div>\r\n        <div class=\"col-xs-2 col-half-offset\" id=\"p2\" (click)=\"onClick(1)\">\r\n\t\t\t<img src=\"../assets/icon/b.jpg\" alt=\"Los Angeles\" style=\"width:125px; height: 52px;\">\r\n        </div>\r\n        <div class=\"col-xs-2 col-half-offset\" id=\"p3\" (click)=\"onClick(2)\">\r\n        \t<img src=\"../assets/icon/c.jpg\" alt=\"Los Angeles\" style=\"width:125px; height: 52px;\">\r\n        </div>\r\n        <div class=\"col-xs-2 col-half-offset\" id=\"p4\" (click)=\"onClick(3)\">\r\n        \t<img src=\"../assets/icon/d.jpg\" alt=\"Los Angeles\" style=\"width:125px; height: 52px;\">\r\n        </div>\r\n        <div class=\"col-xs-2 col-half-offset\" id=\"p5\" (click)=\"onClick(4)\">\r\n        \t<img src=\"../assets/icon/e.jpg\" alt=\"Los Angeles\" style=\"width:125px; height: 52px;\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/hotsong/hotsong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotsongComponent; });
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

var HotsongComponent = /** @class */ (function () {
    function HotsongComponent() {
        this.hotsongs = [
            { id: "1", imageUrl: "../assets/icon/a.jpg", title: "" },
            { id: "2", imageUrl: "../assets/icon/b.jpg", title: "" },
            { id: "3", imageUrl: "../assets/icon/c.jpg", title: "" },
            { id: "4", imageUrl: "../assets/icon/d.jpg", title: "" },
            { id: "5", imageUrl: "../assets/icon/e.jpg", title: "" }
        ];
    }
    HotsongComponent.prototype.ngOnInit = function () {
    };
    HotsongComponent.prototype.onClick = function (i) {
        document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("item active")[0].setAttribute("class", "item");
        document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("item")[i].setAttribute("class", "item active");
    };
    HotsongComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hotsong',
            template: __webpack_require__("../../../../../src/app/hotsong/hotsong.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hotsong/hotsong.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HotsongComponent);
    return HotsongComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav{\r\n    position: relative;\r\n    background: #e4e4e4;  \r\n    width: 100%;\r\n    height: 40px;\r\n    min-width: 1000px;\r\n    z-index: 900002!important;\r\n    display: block;\r\n}\r\n\r\nnav .container {\r\n    overflow: visible;\r\n    width: 1000px;\r\n}\r\n\r\n#myNavbar ul li a{\r\n    margin-right:5px;\r\n    color: #1c1c1c;\r\n    text-decoration: none;\r\n    font-size: 15px;\r\n    padding-left:12px;\r\n    padding-right: 12px;\r\n    }\r\n\r\n#myNavbar ul li a:hover{\r\n    color: blue;\r\n    }\r\n\r\n#myNavbar ul li a#navbar-mymusic{\r\n     margin-left: -110px;\r\n }\r\n\r\n#navbar-top100:hover> ul{\r\n    display: block;\r\n}\r\n\r\n#myNavbar ul\r\n{\r\n  list-style:none;\r\n  position:relative;\r\n  float:left;\r\n  margin-left: 100px;\r\n  margin-top:-20px;\r\n  }\r\n\r\n#myNavbar ul a\r\n{\r\n  display:block;\r\n  text-decoration:none;\r\n  font-family: \"Roboto\",\"segoe ui\",Helvetica,Arial,sans-serif;\r\n  line-height:40px;\r\n}\r\n\r\n#myNavbar ul li\r\n{\r\n  position:relative;\r\n  float:left;\r\n  margin:0;\r\n  padding:0\r\n}\r\n\r\n#myNavbar ul li ul\r\n{\r\n  display:none;\r\n  position:absolute;\r\n  top:100%;\r\n  left:0;\r\n  background:#fff;\r\n  padding:0;\r\n\r\n}\r\n\r\n#myNavbar ul li ul li\r\n{\r\n position:relative;\r\n  float:left;\r\n  margin:0;\r\n  padding:0;\r\n  width: 150px;\r\n}\r\n\r\n#myNavbar ul ul li a:hover\r\n{\r\n  background-color: #e4e4e4;  \r\n /* border-top: 1px solid #000;*/\r\n}\r\n\r\n#myNavbar ul ul a\r\n{\r\n  line-height:120%;\r\n  padding:10px 20px;\r\n}\r\n\r\n#myNavbar ul li a:hover\r\n{\r\n  display:block;\r\n  z-index:10000;\r\n   background-color: #fff;\r\n  position: relative;\r\n}\r\n\r\n#myNavbar ul li:hover > ul\r\n{\r\n  display:block;\r\n  z-index:10000;\r\n  border-radius:3px;\r\n  margin-left: 0px;\r\n  margin-top:0px;\r\n}\r\n\r\n#myNavbar ul ul li a:hover\r\n{\r\n   margin: 0px 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n    <div class=\"container group\" id=\"myNavbar\">\r\n        <div class=\"menubar\">\r\n            <a href=\"/\" title=\"Zing MP3 - Đỉnh cao âm nhạc\" class=\"img\">\r\n                    <img src=\"../assets/icon/homepage.png\" alt=\"Home Page\">\r\n            </a>\r\n        </div>\r\n        <div id=\"sug\" class=\"section-search\"> \r\n            <ul class=\"main-nav group\">\r\n\r\n            <li class=\"active\"><a id=\"navbar-mymusic\" class=\"fn-login\" href=\"/mymusic\" title=\"Nhạc cá nhân\">Private Song</a> </li>  \r\n            <li><a id=\"navbar-top100\" title=\"Top 100\" [routerLink]=\"['/genre']\">Genre</a>\r\n                <ul>\r\n                    <li><a title=\"Việt Nam\" [routerLink]=\"['/genre']\">EDM</a></li>\r\n                    <li><a title=\"Âu Mỹ\" [routerLink]=\"['/genre']\">Indie</a></li>\r\n                    <li><a title=\"Châu Á\" [routerLink]=\"['/path']\">Bolero</a></li>\r\n                    <li><a title=\"Hòa Tấu\" [routerLink]=\"['/path']\">Acoutic</a></li>\r\n                </ul>\r\n            </li>\r\n  \r\n            <li><a id=\"navbar-genreartist\" title=\"Nghệ Sĩ\" [routerLink]=\"['/path']\">Singer</a>\r\n                <ul>\r\n                    <li><a title=\"Việt Nam\" [routerLink]=\"['/path']\">Việt Nam</a></li>\r\n                    <li><a title=\"Âu Mỹ\" [routerLink]=\"['/path']\">Âu Mỹ</a></li>\r\n                    <li><a title=\"Hàn Quốc\" [routerLink]=\"['/path']\">Hàn Quốc</a></li>\r\n                    <li><a title=\"Nhật Bản\" [routerLink]=\"['/path']\">Nhật Bản</a></li>\r\n                    <li><a title=\"Hao Ngữ\" [routerLink]=\"['/path']\">Hoa Ngữ</a></li>\r\n                    <li><a title=\"Hòa Tấu\" [routerLink]=\"['/path']\">Hòa Tấu</a></li>\r\n                </ul>\r\n            </li>\r\n\r\n\r\n              </ul>\r\n        \r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenubarComponent; });
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

var MenubarComponent = /** @class */ (function () {
    function MenubarComponent() {
    }
    MenubarComponent.prototype.ngOnInit = function () {
    };
    MenubarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menubar',
            template: __webpack_require__("../../../../../src/app/menubar/menubar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menubar/menubar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenubarComponent);
    return MenubarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/newsong/newsong.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-newsong {\r\n    text-transform: uppercase;\r\n    font-weight: 340;\r\n    margin-bottom: 5px;\r\n    margin-left: 10px;\r\n/*    border-style: solid;\r\n    border-width: 1px;*/\r\n}\r\n\r\n.title-newsong h3>a{\r\n    color: #2582be;\r\n    background: url(https://stc-id.nixcdn.com/v11/images/icon-repeat.png) right -155px no-repeat;\r\n    text-transform: uppercase;\r\n    padding: 0 20px 0 0;\r\n    font-weight: 340 !important;\r\n    -webkit-transition: all 0.2s linear;\r\n    transition: all 0.2s linear;\r\n    text-decoration: none;\r\n}\r\n\r\n.hotsong {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.hotsong ul {\r\n\tdisplay: block;\r\n    list-style-type: disc;\r\n    -webkit-margin-before: 1em;\r\n    -webkit-margin-after: 1em;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n    -webkit-padding-start: 40px;\r\n}\r\n\r\n.song {\r\n\tpadding: 10px;\r\n/*    border-bottom: solid 1px #ECECEC;\r\n*/    list-style: none;\r\n    text-align: -webkit-match-parent;\r\n}\r\n\r\n.rank-lable {\r\n\tfont-size: 22px;\r\n    top: 0;\r\n    left: -10px;\r\n    width: 30px;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    color: #666;\r\n    margin: 0;\r\n    padding: 0;\r\n    float: left;\r\n}\r\n\r\n.label-rank-status {\r\n    top: 20px;\r\n    left: 18px;\r\n    width: 62px;\r\n    text-align: center;\r\n    color: #666;\r\n    font-size: 14px;\r\n    float: left;\r\n}\r\n\r\n.list-music {\r\n    width: 1000px;\r\n    float: left;\r\n}\r\n\r\n.fram_select {\r\n    width: 1000px;\r\n    float: left;\r\n    overflow: hidden;\r\n}\r\n\r\n.box-content-music-list {\r\n    position: relative;\r\n}\r\n\r\n.info_song {\r\n    float: left;\r\n    width: 400px;\r\n    font-size: 12px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.icon_listen {\r\n    position: absolute;\r\n    color: #999999;\r\n    right: 0;\r\n    font-size: 12px;\r\n    background: url(https://stc-id.nixcdn.com/v11/images/icon-repeat.png) left -194px no-repeat;\r\n    padding-left: 15px;\r\n    line-height: 24px;\r\n    display: block;\r\n    margin: 1px 0 0 0;\r\n}\r\n\r\n.name_song{\r\n    font-size: 14px;\r\n    float: left;\r\n    max-width: 200px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    line-height: 24px;\r\n    color: #444444;\r\n    text-decoration: none;\r\n    font-weight: 550;\r\n\r\n}\r\n\r\n.name_song:hover{\r\n    color: #2582be;\r\n}\r\n\r\n.name-singer {\r\n    font-size: 14px;\r\n    float: left;\r\n    max-width: 200px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    line-height: 24px;\r\n    color: #999999;\r\n    text-decoration: none;\r\n}\r\n\r\n.name-singer:hover{\r\n    color: #2582be;\r\n}\r\n\r\n.song {\r\n    list-style: none; \r\n    width: 450px; \r\n    float: left; \r\n    margin-right: 30px; \r\n    border-top: #ececec solid 1px; \r\n    padding: 16px 0px; \r\n    line-height: 24px;\r\n}\r\n\r\nli:hover{\r\n    background: #fbfdff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newsong/newsong.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widget widget-cate\">\r\n\t<div class=\"title-newsong\">\r\n\t\t<h3><a href=\"\" title=\"New song\">NEW  SONG</a></h3>\r\n\t</div>\r\n\t<div class=\"hotsong\">\r\n\t\t<div class=\"list-music\">\r\n\t\t\t<div class=\"fram_select\">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li class=\"song\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li><li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li><li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li><li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li><li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t<li style=\"list-style: none; width: 450px; float: left; margin-right: 30px; border-top: #ececec solid 1px; padding: 16px 0px; line-height: 24px;\">\r\n\t\t\t\t\t\t<div class=\"box-content-music-list\">\r\n                            <div class=\"info_song\" style=\"color: #999999;\">\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name_song\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Áo Lụa Hà Đông</a>\r\n                                <span style=\"float: left; padding: 0px 5px; color: #666666; font-size: 12px;\">-</span>\r\n                                <a href=\"https://www.nhaccuatui.com/bai-hat/ao-lua-ha-dong-hoai-lam.pWbVPUL6L1od.html\" class=\"name-singer\" title=\"Áo Lụa Hà Đông - Hoài Lâm\" onclick=\" _gaq.push(['_trackEvent', 'Home', 'Click', 'Bai Hat Moi']);lt(['home','bai-hat-moi','click','song','pWbVPUL6L1od','','title']);\">Hoài Lâm</a>\r\n                            </div>\r\n                            \r\n                            <span class=\"icon_listen\" wgct=\"1\">98.172</span>                       \r\n                        </div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/newsong/newsong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsongComponent = /** @class */ (function () {
    function NewsongComponent(_service) {
        this._service = _service;
        this.foo = { id: 1, name: 'sample foo' };
        this.foosUrl = 'http://localhost:8080/songs';
    }
    NewsongComponent.prototype.ngOnInit = function () {
    };
    NewsongComponent.prototype.getFoo = function () {
        var _this = this;
        this._service.getResource(this.foosUrl + this.foo.id)
            .subscribe(function (data) { return _this.foo = data; }, function (error) { return _this.foo.name = 'Error'; });
    };
    NewsongComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newsong',
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
            template: __webpack_require__("../../../../../src/app/newsong/newsong.component.html"),
            styles: [__webpack_require__("../../../../../src/app/newsong/newsong.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], NewsongComponent);
    return NewsongComponent;
}());



/***/ }),

/***/ "../../../../../src/app/topmenubar/topmenubar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\r\n    position: relative;\r\n    background: #1c1c1c;\r\n    width: 100%;\r\n    height: 50px;\r\n    min-width: 1000px;\r\n    z-index: 900002!important;\r\n    display: block;\r\n}\r\n\r\nheader .container, nav .container {\r\n    overflow: visible;\r\n    width: 1000px;\r\n}\r\n\r\n.group {\r\n    display: block;\r\n    clear: both;\r\n}\r\n\r\nheader .logo {\r\n    float: left;\r\n    width: 185px;\r\n    height: 40px;\r\n    margin-top: 6px;\r\n}\r\n\r\nheader .logo a {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.section-search {\r\n    position: relative;\r\n}\r\n\r\n.section-search .search {\r\n    float: left;\r\n    margin-top: 10px;\r\n    width: 355px;\r\n    position: relative;\r\n}\r\n\r\n.section-search .search .input-txt {\r\n    float: left;\r\n    padding: 5px 15px;\r\n    width: 100%;\r\n    border: 0 none;\r\n    height: 29px;\r\n/*    border-radius: 5px;\r\n    -moz-border-radius: 5px; \r\n    -webkit-border-radius:5px;  */\r\n\r\n\r\n}\r\n\r\n.section-search .search .input-btn {\r\n    white-space: nowrap;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    opacity: 0.2;\r\n    line-height: 25px;\r\n    -webkit-transform: translateX(-7px);\r\n            transform: translateX(-7px);\r\n}\r\n\r\n.section-search .search .input-btn:hover {\r\n\t  opacity: 1;\r\n\t  -webkit-transition: all .2s ease-in-out;\r\n\t  transition: all .2s ease-in-out;\r\n\t}\r\n\r\n.pull-right {\r\n    float: right;\r\n   line-height: 50px;\r\n}\r\n\r\n.nav-account a{\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.nav-account a:hover{\r\n\ttext-decoration: underline;\r\n}\r\n\r\n/*----------------------------Login---------------------------*/\r\n\r\n.modal .modal-content .modal-header .modal-title{\r\n  text-align: center;\r\n}\r\n\r\n.modal-header\r\n{\r\n color: #000;\r\n background-color:#B0E0E6;\r\n}\r\n\r\n.modal-body{\r\n    background-color: #fff;\r\n}\r\n\r\n.modal-header .close {\r\n    margin-top: -50px;\r\n}\r\n\r\nbutton.close {\r\n    -webkit-appearance: none;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    background: 0 0;\r\n    border: 0;\r\n}\r\n\r\n.close {\r\n    float: right;\r\n    font-size: 27px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: #000;\r\n    text-shadow: 0 1px 0 #fff;\r\n    filter: alpha(opacity=20);\r\n    opacity: .2;\r\n}\r\n\r\n.form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    margin-top:20px;\r\n  }\r\n\r\ninput[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 1;\r\n    border-bottom-right-radius: 1;\r\n    border-top-left-radius: 1;\r\n    border-top-right-radius: 1;\r\n    margin-left:-10px;\r\n    width: 70%;\r\n    height: 40px;\r\n    line-height: 40px;\r\n  }\r\n\r\ninput[type=\"password\"],input[type=\"email\"] {\r\n    margin-bottom: -20px;\r\n    border-top-left-radius: 1;\r\n    border-top-right-radius: 1;\r\n    border-bottom-left-radius: 1;\r\n    border-bottom-right-radius: 1;\r\n    margin-left:-10px;\r\n    width: 70%;\r\n    height: 40px;\r\n    line-height: 40px;\r\n  }\r\n\r\n.repass{\r\n    margin-top: -20px;\r\n  }\r\n\r\n.modal{\r\n  padding-top:80px;\r\n  position: absolute;\r\n  z-index: 1000px;\r\n\r\n}\r\n\r\n.modal .submit >button{\r\nposition: relative;\r\nwidth: 20%;\r\n}\r\n\r\n.modal-dialog{\r\n    max-width:500px;\r\n\r\n}\r\n\r\n@media (max-width:960px)  {\r\n    .modal .modal-content .modal-header .modal-title{\r\n  text-align: center;\r\n}\r\n\r\n.modal-header .close {\r\n    margin-top: -50px;\r\n}\r\n\r\nbutton.close {\r\n    -webkit-appearance: none;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    background: 0 0;\r\n    border: 0;\r\n}\r\n\r\n.close {\r\n    float: right;\r\n    font-size: 27px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: #000;\r\n    text-shadow: 0 1px 0 #fff;\r\n    filter: alpha(opacity=20);\r\n    opacity: .2;\r\n}\r\n\r\n  .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    margin-top:20px;\r\n  }\r\n\r\n  input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 1;\r\n    border-bottom-right-radius: 1;\r\n    border-top-left-radius: 1;\r\n    border-top-right-radius: 1;\r\n    margin-left:-10px;\r\n    width: 70%;\r\n    height: 40px;\r\n     line-height: 40px;\r\n  }\r\n\r\n  input[type=\"password\"],input[type=\"email\"] {\r\n    margin-bottom: 20px;\r\n    border-top-left-radius: 1;\r\n    border-top-right-radius: 1;\r\n    border-bottom-left-radius: 1;\r\n    border-bottom-right-radius: 1;\r\n    margin-left:-10px;\r\n    width: 70%;\r\n    height: 40px;\r\n    line-height: 40px;\r\n  }\r\n\r\n.modal{\r\n  padding-top:80px;\r\n  position: absolute;\r\n\r\n \r\n}\r\n\r\n.modal .submit >button{\r\nposition: relative;\r\nwidth: 20%;\r\n}\r\n.modal-dialog{\r\n    max-width:400px;\r\n}\r\n}\r\n\r\n@media (min-width:960px)  {\r\n.modal .modal-content .modal-header .modal-title{\r\n  text-align: center;\r\n}\r\n\r\n.modal-header .close {\r\n    margin-top: -50px;\r\n}\r\n\r\nbutton.close {\r\n    -webkit-appearance: none;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    background: 0 0;\r\n    border: 0;\r\n}\r\n\r\n.close {\r\n    float: right;\r\n    font-size: 27px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: #000;\r\n    text-shadow: 0 1px 0 #fff;\r\n    filter: alpha(opacity=20);\r\n    opacity: .2;\r\n}\r\n\r\n  .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    margin-top:20px;\r\n  }\r\n\r\n  input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 1;\r\n    border-bottom-right-radius: 1;\r\n    border-top-left-radius: 1;\r\n    border-top-right-radius: 1;\r\n    margin-left:-10px;\r\n    width: 70%;\r\n    height: 40px;\r\n     line-height: 40px;\r\n  }\r\n\r\n  input[type=\"password\"],input[type=\"email\"] {\r\n    margin-bottom: 20px;\r\n    border-top-left-radius: 1;\r\n    border-top-right-radius: 1;\r\n    border-bottom-left-radius: 1;\r\n    border-bottom-right-radius: 1;\r\n    margin-left:-10px;\r\n    width: 70%;\r\n    height: 40px;\r\n    line-height: 40px;\r\n  }\r\n\r\n.modal{\r\n  padding-top:80px;\r\n  position: absolute;\r\n \r\n}\r\n\r\n.modal .submit >button{\r\nposition: relative;\r\nwidth: 20%;\r\n}\r\n.modal-dialog{\r\n     max-width:500px;\r\n}\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topmenubar/topmenubar.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <div class=\"container group\">\r\n        <div class=\"logo\">\r\n            <a href=\"/\" title=\"Zing MP3 - Đỉnh cao âm nhạc\" class=\"hide-text\">\r\n                <img src=\"\" alt=\"TMA-Music\">\r\n            </a>\r\n        </div>\r\n        <div id=\"sug\" class=\"section-search\">\r\n            <form action=\"/tim-kiem/bai-hat.html\" method=\"get\" class=\"search\">\r\n                <input type=\"text\" name=\"q\" placeholder=\"Enter search content\" class=\"input-txt\" autocomplete=\"off\">\r\n                <span class=\"input-btn\">\r\n                     <a href=\"/\" title=\"TMA_Music\" class=\"\">\r\n                        <!-- <img src=\"../assets/icon/magnifying-glass.png\" alt=\"Home Page\"> -->\r\n                     </a>\r\n                    <!-- <button type=\"submit\" class=\"zicon btn hide-text\">Tìm kiếm</button> -->\r\n                </span>\r\n            </form>\r\n        \r\n        </div>\r\n    \r\n        <div *ngIf=\"!isLoggedIn\" class=\"nav-account pull-right fn-guestbox\">\r\n             <img class=\"\" src=\"../assets/icon/user.png\"> &nbsp;\r\n            <a class=\"fn-login\" href=\"#\" data-toggle=\"modal\" \r\n                data-target=\"#LoginForm\" title=\"Đăng nhập\"> Login |</a>\r\n            <a class=\"fn-login\" href=\"#\" data-toggle=\"modal\" \r\n                data-target=\"#RegisterForm\" title=\"Đăng xuất\"> Register</a>\r\n        </div>\r\n\t    <div *ngIf=\"isLoggedIn\" class=\"nav-account pull-right fn-guestbox\">\r\n\t\t\t<img class=\"\" src=\"../assets/icon/user.png\"> &nbsp;\r\n\t        <a (click)=\"logout()\" href=\"#\">Logout</a>\r\n\t    </div>\r\n    </div>\r\n\r\n</header>\r\n<div class=\"modal fade\" id=\"LoginForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h2 class=\"modal-title\" id=\"ModalTitle\">Login</h2>\r\n\t\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t          <span aria-hidden=\"true\">&times;</span>\r\n\t\t        </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t        <form role=\"form\" class=\"form-horizontal\">\r\n\t                    <div class=\"form-group\">\r\n\t\t                      <div class=\"col-xs-12 col-sm-12  col-xs-push-2 \">\r\n\t\t    \t\t\t\t\t <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\" required=\"\" autofocus=\"\" [(ngModel)]=\"loginData.username\"/>\r\n\t\t    \t\t\t\t</div>\r\n\t\t\t\t\t\t\t <div class=\"col-xs-12 col-sm-12 col-xs-push-2 \">\r\n\t\t\t\t                    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"\" [(ngModel)]=\"loginData.password\"/> \r\n\t\t\t\t             </div>\r\n\t\t\t           \t</div>\r\n\t\t\t            <div class=\"col-xs-12 col-sm-12 col-md-12 col-xs-push-5\">\r\n\t\t\t                <button class=\"btn btn-primary\" (click)=\"login()\" data-dismiss=\"modal\">Submit</button>\r\n\t\t\t            </div>\r\n\t\t\t        </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"RegisterForm\" tabindex=\"-1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n\t    <div class=\"modal-content\">\r\n\t\t    <div class=\"modal-header\">\r\n\t\t        <h2 class=\"modal-title\" id=\"ModalTitle\">Register</h2>\r\n\t\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t          <span aria-hidden=\"true\">&times;</span>\r\n\t\t        </button>\r\n\t\t    </div>\r\n\t\t    <div class=\"modal-body\">\r\n\t\t    \t<div class=\"row\">\r\n\t\t\t        <form role=\"form\" class=\"form-horizontal\">\r\n\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t        \t<div class=\"col-xs-12 col-sm-12  col-xs-push-2 \">\r\n\t\t\t\t             \t<input type=\"text\" class=\"form-control\" name=\"Username\" placeholder=\"username\" required=\"\" autofocus=\"\" />\r\n\t\t\t\t        \t</div>\r\n\t\t\t\t\t        <div class=\"col-xs-12 col-sm-12  col-xs-push-2 \">\r\n\t\t\t\t\t            <input type=\"password\" class=\"form-control\" name=\"Password\" placeholder=\"password\" required=\"\"/> \r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t        <div class=\"col-xs-12 col-sm-12  col-xs-push-2 repass\" >\r\n\t\t\t\t\t            <input type=\"text\" class=\"form-control\" name=\"repassword\" placeholder=\"Retype password\" required=\"\"/> \r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t        <div class=\"col-xs-12 col-sm-12  col-xs-push-2 \">\r\n\t\t\t\t\t            <input type=\"email\" class=\"form-control\" name=\"password\" placeholder=\"Email\" required=\"\"/> \r\n\t\t\t\t\t        </div>\r\n\t\t\t\t        </div>\r\n\t\t\t\t        <div class=\"col-xs-12 col-sm-12 col-md-12 col-xs-push-5\">\r\n\t\t\t\t            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n\t\t\t\t        </div>\r\n\t\t    \t\t</form>\r\n\t\t\t\t</div>\r\n\t\t    </div>\r\n\t    </div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/topmenubar/topmenubar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopmenubarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopmenubarComponent = /** @class */ (function () {
    function TopmenubarComponent(_service) {
        this._service = _service;
        this.isLoggedIn = false;
        this.loginData = { username: "", password: "" };
    }
    TopmenubarComponent.prototype.ngOnInit = function () {
        //this._service.checkCredentials();
    };
    TopmenubarComponent.prototype.login = function () {
        this._service.obtainAccessToken(this.loginData);
        this.isLoggedIn = true;
    };
    TopmenubarComponent.prototype.logout = function () {
        //this._service.logout();
        this.isLoggedIn = false;
    };
    TopmenubarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topmenubar',
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
            template: __webpack_require__("../../../../../src/app/topmenubar/topmenubar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/topmenubar/topmenubar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], TopmenubarComponent);
    return TopmenubarComponent;
}());



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
    production: false
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