webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n\tmargin:0;\r\n\tpadding: 0;\r\n}\r\n.header {\r\n\t/*background: url(../assets/img/header.jpg)  no-repeat;*/\r\n\theight: 980px;\r\n\tbackground-size:100%;\r\n\tmargin-bottom:0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header\">\n  <div class=\"\">\n    <app-navbar></app-navbar>\n   \t<app-slider></app-slider>\n   \t<app-categories></app-categories>\n   \t<app-standbikes></app-standbikes>\n   \t<app-contact></app-contact>\n   \t<app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__slider_slider_component__ = __webpack_require__("../../../../../src/app/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__standbikes_standbikes_component__ = __webpack_require__("../../../../../src/app/standbikes/standbikes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__standbikes_standbikes_component__["a" /* StandbikesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* CarouselModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".categories {\r\n\twidth:100%;\r\n\theight: 600px;\r\n\tbackground: url(" + __webpack_require__("../../../../../src/assets/img/categories_bg.jpg") + ") no-repeat;\r\n\tbackground-size:100% 100%;\r\n\tmargin-top:0;\r\n\t margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n.categories ul {\r\n\tlist-style:none;\r\n\twidth:100%;\r\n\t\r\n\t\r\n}\r\n.categories ul li {\r\n\tdisplay:inline-block;\r\n\tmargin-left:50px;\r\n\tmargin-top:130px;\r\n}\r\n\r\n.categories ul li:first-child {\r\n\tmargin-left:0;\r\n}\r\n\r\n.category {\r\n    display:inline-block;   \r\n    position:relative;\r\n    background: rgba(255, 204, 102,0.5);\r\n    opacity: 1;\r\n \r\n}\r\n.category h3  {\r\n    display:inline-block;\r\n    position:absolute;\r\n    top:90px;  \r\n    left:0;\r\n     \r\n     \r\n    /* Оформление текста */\r\n    color:yellow;\r\n    font-family:Arial, Helvetica, sans-serif;\r\n    font-size:20px; \r\n     \r\n    /* Фон */\r\n   \r\n    padding:10px 30px;\r\n}\r\n\r\n.category p {\r\n\t display:inline-block;\r\n    position:absolute;\r\n    top:140px; \r\n    left:0;  \r\n     \r\n     \r\n    /* Оформление текста */\r\n    color:#FFF;\r\n    font-family:Arial, Helvetica, sans-serif;\r\n    font-size:20px; \r\n     \r\n    /* Фон */\r\n   \r\n    padding:10px 30px;\r\n}\r\n.category button {\r\n\tdisplay:inline-block;\r\n    position:absolute;\r\n    top:220px; \r\n    left:100px;  \r\n    background:none;\r\n    color:white;\r\n    border-radius: 15px;\r\n    padding:7px 15px;\r\n    border:4px solid white;\r\n    font-weight: bold;\r\n    transition: .5s ease;\r\n    opacity: 0;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n.category button.active {\r\n\toutline: none;\r\n}\r\n.category button:focus {\r\n\toutline:none;\r\n}\r\n.category:hover .image {\r\n\topacity: 0.5;\r\n\t\r\n}\r\n.category:hover button {\r\n\topacity: 1;\r\n}\r\n.head {\r\n\tpadding-top:30px;\r\n\tmargin: 0;\r\n\tfont-weight: bold;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .categories {\r\n        height: 950px;\r\n    }\r\n    .categories ul  {\r\n   padding-left:0;\r\n   margin-left:0;\r\n}}\r\n@media screen and (min-width: 1164px) and (max-width: 1200px) {\r\n     .categories {\r\n        height: 600px;\r\n    }\r\n    .categories ul  {\r\n   padding-left:0;\r\n   margin-left:0;\r\n}}\r\n@media screen and (max-width: 762px) {\r\n     .categories {\r\n        height: 1400px;\r\n    }\r\n    .categories ul li {\r\n   padding-left:10px;\r\n   margin-left:0;\r\n}}\r\n@media screen and (max-width: 762px) {\r\n     .categories {\r\n        height: 1400px;\r\n    }\r\n    .categories ul li {\r\n   padding-left:10px;\r\n   margin-left:0;\r\n}}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categories\">\n\t\n\t<div class=\"list text-center\">\n\t\t<h2 class=\"head\">CATEGORIES</h2>\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t<div class=\"category\">\n\t\t\t\t<img class=\"image\" src=\"assets/img/CATEGORIES_PHOTO_01.jpg\" >\n\t\t\t\t<h3>FIXED/SINGLE SPEED</h3>\n\t\t\t\t<p>Are You Ready ?</p>\n\t\t\t\t<button class=\"but\">GO TO STORE</button>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t\n\t\t\t<li>\n\t\t\t\t<div class=\"category\" >\n\t\t\t\t<img class=\"image\"  src=\"assets/img/CATEGORIES_PHOTO_01.jpg\">\n\t\t\t\t<h3 >PREMIUM SERIES</h3>\n\t\t\t\t<p>Exclusive  Bike Components</p>\n\t\t\t\t<button class=\"but\">GO TO STORE</button>\n\t\t\t\t</div>\n\t\t    </li>\n\t\t\t\n\t\t\t<li>\n\t\t\t\t<div class=\"category\">\n\t\t\t\t<img class=\"image\"  src=\"assets/img/CATEGORIES_PHOTO_01.jpg\">\n\t\t\t\t<h3>CITY BIKES</h3>\n\t\t\t\t<p>Street Playground</p>\n\t\t\t\t<button class=\"but\">GO TO STORE</button>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesComponent = (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-categories',
        template: __webpack_require__("../../../../../src/app/categories/categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/categories/categories.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CategoriesComponent);

//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n\tmargin:0;\r\n\tpadding: 0;\r\n}\r\n.contact {\r\n\twidth:100%;\r\n\theight: 634px;\r\n\tbackground:url(" + __webpack_require__("../../../../../src/assets/img/contact_bg.jpg") + ");\r\n\tbackground-size:100% 100%;\r\n}\r\n.contact h2 {\r\n\tfont-weight: bold;\r\n\tpadding-top:25px;\r\n}\r\n.contact p {\r\n\tfont-weight: bold;\r\n\tpadding-top:20px;\r\n}\r\n.username {\r\n\tmargin-top:30px;\r\n\tborder-radius: 10px;\r\n\tpadding: 10px 20px;\r\n\toutline: none;\r\n\tborder: 2px solid #dadada;\r\n\twidth: 225px;\r\n\r\n}\r\n.username::-webkit-input-placeholder {\r\n\tcolor:#a2a2a2;\r\n\tfont-weight: bold;\r\n}\r\n.username:-ms-input-placeholder {\r\n\tcolor:#a2a2a2;\r\n\tfont-weight: bold;\r\n}\r\n.username::placeholder {\r\n\tcolor:#a2a2a2;\r\n\tfont-weight: bold;\r\n}\r\n.username:focus::-webkit-input-placeholder {\r\n\tcolor:transparent;\r\n}\r\n.username:focus:-ms-input-placeholder {\r\n\tcolor:transparent;\r\n}\r\n.username:focus::placeholder {\r\n\tcolor:transparent;\r\n}\r\n.mail{\r\n\tmargin-top:6px;\r\n\tborder-radius: 10px;\r\n\tpadding: 10px 20px;\r\n\toutline: none;\r\n\tborder: 2px solid #dadada;\r\n\twidth: 455px;\r\n}\r\n.mail::-webkit-input-placeholder {\r\n\tcolor:#a2a2a2;\r\n\tfont-weight: bold;\r\n}\r\n.mail:-ms-input-placeholder {\r\n\tcolor:#a2a2a2;\r\n\tfont-weight: bold;\r\n}\r\n.mail::placeholder {\r\n\tcolor:#a2a2a2;\r\n\tfont-weight: bold;\r\n}\r\n.mail:focus::-webkit-input-placeholder {\r\n\tcolor:transparent;\r\n}\r\n.mail:focus:-ms-input-placeholder {\r\n\tcolor:transparent;\r\n}\r\n.mail:focus::placeholder {\r\n\tcolor:transparent;\r\n}\r\n.comment {\r\n\tmargin-top:6px;\r\n\tborder-radius: 10px;\r\n\tpadding: 10px 20px;\r\n\toutline: none;\r\n\tborder: 2px solid #dadada;\r\n\twidth: 455px;\r\n\theight: 200px;\r\n}\r\n.comment::-webkit-input-placeholder {\r\n\tcolor:#a2a2a2;\r\n\tfont-weight: bold;\r\n}\r\n.comment:-ms-input-placeholder {\r\n\tcolor:#a2a2a2;\r\n\tfont-weight: bold;\r\n}\r\n.comment::placeholder {\r\n\tcolor:#a2a2a2;\r\n\tfont-weight: bold;\r\n}\r\n.comment:focus::-webkit-input-placeholder {\r\n\tcolor:transparent;\r\n}\r\n.comment:focus:-ms-input-placeholder {\r\n\tcolor:transparent;\r\n}\r\n.comment:focus::placeholder {\r\n\tcolor:transparent;\r\n}\r\n.sendbutton {\r\n\tbackground-color:#b7b7b7;\r\n\tmargin-top:6px;\r\n\tborder-radius: 10px;\r\n\tpadding: 10px 20px;\r\n\toutline: none;\r\n\tcolor:#f1f1f1;\r\n\tfont-weight: bold;\r\n\twidth: 455px;\r\n\toutline: none;\r\n\tborder:none;\r\n}\r\n.emailinvalid {\r\n\tbackground:#fff68f;\r\n\tmargin-top:10px;\r\n\tmargin-bottom: 0px;\r\n\tpadding: 10px 10px;\r\n\tfont-weight: bold;\r\n\r\n}\r\n\r\n\r\n@media(max-width: 470px) {\r\n\t.surname{\r\n\t\tmargin-top:6px;\r\n\t}\r\n\t.mail, .comment, .sendbutton {\r\n\t\twidth: 225px;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact text-center \">\n\t\n<h2>CONTACT US</h2>\n<p>Please contact us for all inquiries and purchase options.</p>\n\n  <div>\n  <form  [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\" >\n    <input type=\"username\" class=\"username\" placeholder=\"NAME\" name=\"username\" [formControl]=\"myForm.get('username')\" [(ngModel)]=\"username\" >\n   <input type=\"username\" class=\"username surname\" placeholder=\"SURNAME\"  name=\"surname\" [formControl]=\"myForm.get('surname')\" [(ngModel)]=\"surname\"><br>\n\t<div class=\"emailinvalid\" *ngIf=\" myForm.get('username').touched || myForm.get('surname').touched\"><span  >\n    Please enter your name and surname.\n  </span></div>\n\n    <input  formControlName=\"email\" type=\"email\" class=\" mail\" placeholder=\"USER@DOMAIN.COM\">\n       <div class=\"emailinvalid\" *ngIf=\"myForm.hasError('email', 'email') && myForm.get('email').touched\"><span  >\n    Please enter the correct email, this email not valid.\n  </span></div>\n          <br>\n    <textarea name=\"mesasge\" class=\" comment\" placeholder=\"MESSAGE\" cols=\"60\" rows=\"8\" name=\"comment\" [formControl]=\"myForm.get('message')\" [(ngModel)]=\"message\"></textarea>\n\n\n    <br>\n    <button type=\"submit\" class=\"sendbutton\" [disabled]=\"!myForm.valid\">SEND</button>\n  </form>\n</div>\n\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.myForm = fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(24)],
            surname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(24)],
            message: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(15), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(1000)],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]
        });
        this.emailCtrl = this.myForm.get('email');
    }
    ContactComponent.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.footer{\r\n\theight: 70px;\r\n\twidth:100%;\r\n\tbackground: #fcff19;\r\n\tmargin-top: 0;\r\n\tpadding-top: 0;\r\n\tposition:relative;\r\n}\r\n.footer img {\r\n\tposition: absolute;\r\n\ttop:10px;\r\n\tleft:300px;\r\n}\r\n.footer li {\r\n\tlist-style: none;\r\n\tdisplay: inline-block;\r\n\tmargin-right: 20px;\r\n}\r\n.footer li a {\r\n\tcolor:black;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n}\r\n.footer ul {\r\n\tfloat:right;\r\n\tmargin-right:10%;\r\n\tline-height: 70px;\r\n}\r\n\r\n@media(max-width: 1100px) {\r\n\t.footer ul {\r\n\tfloat:right;\r\n\tmargin-right:1%;\r\n\tline-height: 70px;\r\n}\r\n.footer img {\r\n\tleft:30%;\r\n}\r\n}\r\n@media(max-width: 800px) {\r\n\t.footer img  {\r\n\t\tleft:15%;\r\n\t}\r\n}\r\n@media(max-width: 600px) {\r\n\t.footer img {\r\n\t\tdisplay:none;\r\n\t}\r\n\t.footer li {\r\n\t\tmargin-right: 0;\r\n\t}\r\n\t.footer ul {\r\n\t\tfloat:left;\r\n\t\tmargin-left:20px;\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n\t\n\t<img src=\"assets/img/logo_footer.png\" >\n\t<ul>\n\t\t<li><a href=\"\">BICYCLES</a></li>\n\t\t<li><a href=\"\">PARTS</a></li>\n\t\t<li><a href=\"\">ACCESSORIES</a></li>\n\t\t<li><a href=\"\">EXTRAS</a></li>\n\t</ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n\tfont-family: Roboto, sans-serif;\r\n}\r\n.nav {\r\n\tmargin-top: 30px;\t\r\n\tbackground:  rgba(102,102,102,0.5);\r\n\theight: 43px;\r\n\tposition:fixed;\r\n\twidth: 100%;\r\n}\r\n.navbar__menu {\r\n\tmargin-left: 55%;\r\n}\r\n.navbar__menu li {\r\n\tdisplay: inline;\r\n}\r\n.logo {\r\n\tposition: absolute;\r\n\ttop:-15px;\r\n\tleft:25%;\r\n}\r\nbutton { \r\nbackground: none;\r\nborder: none; \r\nfont-weight: bold;\r\npadding:5px 10px;\r\ncolor:white;\r\n}\r\nbutton:active, button:focus  {\r\n\tbackground-color: yellow;\r\n\tborder-radius: 5px;\r\n\toutline: none;\r\n\tmargin: 0;\r\n\tcolor:black;\r\n}\r\n.dropdown-menu {\r\n\tfont:black;\r\n\tbackground-color:  yellow;\r\n\t\r\n}\r\n.hover {\r\n\tfont-weight: bold;\r\n}\r\n.hover:hover {\r\n\tbackground: #dae540;\r\n}\r\n.navbar__menu__li {\r\n\tmargin-left: 15px;\t\r\n}\r\n.navbar__menu__li a {\r\n\tline-height: 43px;\r\n}\r\n.navbar__menu__li:last-child {\r\n\tmargin-left: 30px;\t\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width: 1200px) {\r\n    .navbar-header {\r\n     float: none;\r\n    }\r\n    .navbar-header button.active {\r\n\tmargin: 8px 15px;\r\n    }\r\n    .navbar-header button:focus {\r\n\tmargin: 8px 15px;\r\n    }\r\n    .navbar-left,.navbar-right {\r\n        float: none !important;\r\n    }\r\n    .navbar-toggle {\r\n        display: block;\r\n       line-height: 43px;\r\n        right: 7%;\r\n    }\r\n    .navbar-collapse {\r\n        \r\n        float: right;\r\n    }\r\n    .navbar-fixed-top {\r\n        top: 0;\r\n        border-width: 0 0 1px;\r\n    }\r\n    .navbar-collapse.collapse {\r\n        display: none!important;\r\n    }\r\n    .navbar-nav {\r\n        float: none!important;\r\n        margin-top: 7.5px;\r\n    }\r\n    .navbar-nav>li {\r\n        float: none;\r\n    }\r\n    .navbar-nav>li>a {\r\n        padding-top: 10px;\r\n        padding-bottom: 10px;\r\n    }\r\n    .collapse.in{\r\n        display:inline !important; \r\n    }\r\n    .navbar__menu  {\r\n    \tpadding-left:0;\r\n    \tmargin-left:500px;\r\n    \tmargin-right: 50px;\r\n    \theight: 250px;\r\n    \twidth: 130px;\r\n    \tbackground:  rgba(102,102,102,1);\r\n    \tmargin-top: 15px;\t\r\n    }\r\n    .navbar__menu button{\r\n    \tmargin:10px 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n<nav class=\"nav navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n\t<div class=\"logo\">\n\t\t<img src=\"assets/img/logo.png\" alt=\"\">\n\t</div>\n\t\t<div class=\"navbar-header\">\n\t\t    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n\t\t      <span class=\"icon-bar\"></span>\n\t\t      <span class=\"icon-bar\"></span>\n\t\t      <span class=\"icon-bar\"></span>\n\t   \t    </button>\n\t    </div>\n\n\t<div class=\"navbar-collapse collapse\">\n\n\t<ul class=\"navbar__menu\">\n\t\t\t<li class=\"navbar__menu__li\">\n\t\t\t\t<div class=\"btn-group\">\n\t   \t\t\t\t <button type=\"button\" class=\" \" data-toggle=\"dropdown\">\n\t      \t\t  \t\tBICYCLES\n\t   \t\t\t\t </button>\n\t   \t\t\t \t<ul class=\"dropdown-menu\">\n\t     \t\t \t\t<li><a class=\"hover\" href=\"#\">FIXED/SINGLE SPEED</a></li>\n\t      \t\t\t\t<li><a class=\"hover\" href=\"#\">CITY BIKES</a></li>\n\t      \t\t\t\t<li><a class=\"hover\" href=\"#\">PREMIUM SERIES</a></li>\n\t    \t\t\t</ul>\n\t  \t\t\t</div>\n\t\t\t</li>\n\n\t\t\t<li class=\"navbar__menu__li\">\n\t\t\t\t<div class=\"btn-group\">\n\t   \t\t\t\t <button type=\"button\" class=\" \" data-toggle=\"dropdown\">\n\t      \t\t  \t\tPARTS\n\t   \t\t\t\t </button>\n\t   \t\t\t \t<ul class=\"dropdown-menu\">\n\t     \t\t \t\t<li><a class=\"hover\" href=\"#\">SOMETHING #1</a></li>\n\t      \t\t\t\t<li><a class=\"hover\" href=\"#\">SOMETHING #2</a></li>\n\t      \t\t\t\t<li><a class=\"hover\" href=\"#\">SOMETHING #3</a></li>\n\t    \t\t\t</ul>\n\t  \t\t\t</div>\n\t\t\t</li>\n\n\t\t\t<li class=\"navbar__menu__li\">\n\t\t\t\t<div class=\"btn-group\">\n\t   \t\t\t\t <button type=\"button\" class=\" \" data-toggle=\"dropdown\">\n\t      \t\t  \t\tACCESSORIES\n\t   \t\t\t\t </button>\n\t   \t\t\t \t<ul class=\"dropdown-menu\">\n\t     \t\t \t\t<li><a class=\"hover\" href=\"#\">SOMETHING #1</a></li>\n\t      \t\t\t\t<li><a class=\"hover\" href=\"#\">SOMETHING #2</a></li>\n\t      \t\t\t\t<li><a class=\"hover\" href=\"#\">SOMETHING #3</a></li>\n\t    \t\t\t</ul>\n\t  \t\t\t</div>\n\t\t\t</li>\n\n\t\t\t<li class=\"navbar__menu__li\">\n\t\t\t\t<div class=\"btn-group\">\n\t   \t\t\t\t <button type=\"button\" class=\" \" data-toggle=\"dropdown\">\n\t      \t\t  \t\tEXTRAS\n\t   \t\t\t\t </button>\n\t   \t\t\t \t<ul class=\"dropdown-menu\">\n\t     \t\t \t\t<li><a class=\"hover\" href=\"#\">SOMETHING #1</a></li>\n\t      \t\t\t\t<li><a class=\"hover\" href=\"#\">SOMETHING #2</a></li>\n\t      \t\t\t\t<li><a class=\"hover\" href=\"#\">SOMETHING #3</a></li>\n\t    \t\t\t</ul>\n\t  \t\t\t</div>\n\t\t\t</li>\n\n\t\t\t<li class=\"navbar__menu__li\"><a href=\"\" class=\"basket\"><img src=\"assets/img/basket.png\" alt=\"\"></a></li>\n\t\t\t\n\t\t</ul>\n\n\t</div>\n\n\t\n\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/slider/slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n\tfont-family: Roboto, sans-serif;\r\n}\r\n.slider-block {\r\n\tmargin-bottom: 0;\r\n}\r\n.carousel__img {\r\n\twidth: 100%;\r\n\theight: 980px;\r\n\tmin-height: 980px;\r\n\tmax-height: 980px;\r\n}\r\n\r\n\r\n.leftarrow, .rightarrow {\r\n\tposition: absolute;\r\n\ttop:50%;\r\n}\r\n.carousel-indicators.carousel-indicators-numbers {\r\n\tleft:20%;\r\n\tmargin:0;\r\n\tpadding:0;\r\n\r\n\t\r\n}\r\n.carousel-indicators-numbers li {\r\n    text-indent: 0;\r\n      margin: 0 5px;\r\n      width: 300px;\r\n      height: 5px;\r\n      border: none;\r\n      display:inline-block;\r\n      line-height: 30px;\r\n      color: #fff;\r\n      background-color: #999;\r\n      transition: all 0.25s ease;\r\n }\r\n .carousel-indicators-numbers li:hover {\r\n    background-color:yellow;\r\n }\r\n  .carousel-indicators-numbers li.active {\r\n    background-color:yellow;\r\n }\r\n .carousel-caption {\r\n \tposition:absolute;\r\n \ttop:35%;\r\n }\r\n .carousel-caption h1{\r\n \tfont-weight: bold;\r\n \tfont-size: 50px;\r\n }\r\n  .carousel-caption h3{\r\n \tfont-size: 50px;\r\n }\r\n .carousel-caption h3 span {\r\n \tcolor:yellow;\r\n }\r\n .carousel-caption button {\r\n \tcolor:yellow;\r\n \tbackground-color: black;\r\n \toutline: none;\r\n \tborder:none;\r\n \tpadding: 13px 25px;\r\n \tborder-radius: 15px;\r\n\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"slider_block\">\n  <div id=\"carousel-example-generic\" class=\"carousel slide \">\n \n<ol class=\"carousel-indicators carousel-indicators-numbers\">\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"item active\">\n\n      <img class=\"carousel__img\" src=\"assets/img/header.jpg\" >\n      <div class=\"carousel-caption\">\n      <h1>HANDMADE BICYCLE</h1>\n      <h3>You <span>create</span> the <span>journey</span>, we supply the <span>parts</span>.</h3>\n      <button>SHOP BIKES</button>\n    </div>\n    </div>\n    <div class=\"item\">\n      <img class=\"carousel__img\" src=\"assets/img/velo2.jpg\" >\n       <div class=\"carousel-caption\">\n      <h1>HANDMADE BICYCLE</h1>\n      <h3>You <span>create</span> the <span>journey</span>, we supply the <span>parts</span>.</h3>\n      <button>SHOP BIKES</button>\n    </div>\n    </div>\n    <div class=\"item\">\n      <img class=\"carousel__img\" src=\"assets/img/velo3.jpg\" >\n      <div class=\"carousel-caption\">\n      <h1>HANDMADE BICYCLE</h1>\n      <h3>You <span>create</span> the <span>journey</span>, we supply the <span>parts</span>.</h3>\n      <button>SHOP BIKES</button>\n    </div>\n    </div>\n  </div>\n\n<!-- Controls -->\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n   <img class=\"leftarrow\" src=\"assets/img/left.png\" >\n  </a>\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n  <img  class=\"rightarrow\" src=\"assets/img/right.png\" >\n\n  </a>\n    </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = (function () {
    function SliderComponent() {
    }
    return SliderComponent;
}());
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-slider',
        template: __webpack_require__("../../../../../src/app/slider/slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slider/slider.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);

//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/standbikes/standbikes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n\tmargin:0;\r\n\tpadding: 0;\r\n}\r\n.standbikes {\r\n\twidth:100%;\r\n\theight: 630px;\r\n\tmargin-left:0;\r\n}\r\n.tagname {\r\n\tpadding-top:75px;\r\n\tfont-weight: bold;\r\n}\r\n.standbikes ul {\r\n\tlist-style: none;\r\n\twidth:100%;\r\n\tmargin-top:10px;\r\n\tmargin-left:0;\r\n}\r\n.standbikes ul li {\r\n\tdisplay:inline-block;\r\n\theight:500px;\r\n\t\r\n\twidth:500px;\r\n\tmargin-right:5%;\r\n}\r\n.standbikes ul li:last-child {\r\n\tmargin-right: 0;\r\n}\r\n.popbikes {\r\n\tposition: relative;\r\n}\r\n.popbikes h5 {\r\n\tfont-weight: bold;\r\n\tposition: absolute;\r\n\tleft: 10px;\r\n\tbottom: -70px;\r\n}\r\n.popbikes p {\r\n\tposition: absolute;\r\n\tleft: 10px;\r\n\tbottom: -90px;\r\n}\r\n.popbikes button {\r\n\tcolor:yellow;\r\n \tbackground-color: black;\r\n \toutline: none;\r\n \tborder:none;\r\n \tpadding: 13px 35px;\r\n \tborder-radius: 15px;\r\n \tposition:absolute;\r\n \tbottom: -95px;\r\n \tright: 20px;\r\n}\r\n@media screen and (max-width: 1700px) {\r\n   .standbikes {\r\n\t\r\n\theight:1150px;\r\n   }\r\n\r\n}\r\n@media screen and (max-width: 1076px) {\r\n   .standbikes {\r\n\t\r\n\theight:1650px;\r\n   }\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/standbikes/standbikes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"standbikes text-center\">\n  <h2 class=\"tagname text-center\">POPULAR BIKES</h2>\n  <ul>\n  \t<li>\n  \t\t<div class=\"popbikes\">\n  \t\t\t<img src=\"assets/img/bike1.png\" alt=\"\">\n  \t\t\t<h5>FIXED GEAR</h5>\n  \t\t\t<p>$249.00</p>\n  \t\t\t<button>BUY</button>\n  \t\t</div>\n  \t</li>\n\t<li>\n  \t\t<div class=\"popbikes\">\n  \t\t\t<img src=\"assets/img/bike2.png\" alt=\"\">\n  \t\t\t<h5>FIXED GEAR</h5>\n  \t\t\t<p>$249.00</p>\n  \t\t\t<button>BUY</button>\n  \t\t</div>\n  \t</li>\n\t<li>\n  \t\t<div class=\"popbikes\">\n  \t\t\t<img src=\"assets/img/bike3.png\" alt=\"\">\n  \t\t\t<h5>FIXED GEAR</h5>\n  \t\t\t<p>$249.00</p>\n  \t\t\t<button>BUY</button>\n  \t\t</div>\n  \t</li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/standbikes/standbikes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandbikesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StandbikesComponent = (function () {
    function StandbikesComponent() {
    }
    StandbikesComponent.prototype.ngOnInit = function () {
    };
    return StandbikesComponent;
}());
StandbikesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-standbikes',
        template: __webpack_require__("../../../../../src/app/standbikes/standbikes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/standbikes/standbikes.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StandbikesComponent);

//# sourceMappingURL=standbikes.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/categories_bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "categories_bg.c13cd66cf4cc208c4b74.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/contact_bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "contact_bg.8e3412c79fca935b0432.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map