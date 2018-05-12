webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_consultas_consultas_component__ = __webpack_require__("./src/app/components/consultas/consultas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_primas_primas_component__ = __webpack_require__("./src/app/components/primas/primas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_productos_productos_component__ = __webpack_require__("./src/app/components/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_recetas_recetas_component__ = __webpack_require__("./src/app/components/recetas/recetas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_notFound_notFound_component__ = __webpack_require__("./src/app/components/notFound/notFound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Componentes Unicos






var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */], data: { header: true } },
    { path: "inicio", redirectTo: "", pathMatch: "full" },
    { path: "home", redirectTo: "", pathMatch: "full" },
    { path: "mPrima", component: __WEBPACK_IMPORTED_MODULE_4__components_primas_primas_component__["a" /* PrimasComponent */], data: { header: true } },
    { path: "recetas", component: __WEBPACK_IMPORTED_MODULE_6__components_recetas_recetas_component__["a" /* RecetasComponent */], data: { header: true } },
    { path: "productos", component: __WEBPACK_IMPORTED_MODULE_5__components_productos_productos_component__["a" /* ProductosComponent */], data: { header: true } },
    { path: "consulta", component: __WEBPACK_IMPORTED_MODULE_3__components_consultas_consultas_component__["a" /* ConsultasComponent */], data: { header: true } },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_7__components_notFound_notFound_component__["a" /* NotFoundComponent */], data: { header: false } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes
                //{ enableTracing: true }  <-- debugging purposes only
                )
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_app_component__ = __webpack_require__("./src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_consultas_consultas_component__ = __webpack_require__("./src/app/components/consultas/consultas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_primas_primas_component__ = __webpack_require__("./src/app/components/primas/primas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_productos_productos_component__ = __webpack_require__("./src/app/components/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_recetas_recetas_component__ = __webpack_require__("./src/app/components/recetas/recetas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_menu_menu_component__ = __webpack_require__("./src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_notFound_notFound_component__ = __webpack_require__("./src/app/components/notFound/notFound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//services




//Componentes Unicos





//Componentes Semi-globlaes


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__components_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_notFound_notFound_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_consultas_consultas_component__["a" /* ConsultasComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_primas_primas_component__["a" /* PrimasComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_productos_productos_component__["a" /* ProductosComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_recetas_recetas_component__["a" /* RecetasComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* ReactiveFormsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__components_app_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<menuView *ngIf=\"showHeader\"></menuView>\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = 'mi Comidita';
        this.showHeader = true;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.useHeaderFooter = function (options) {
        if ((typeof options.header) == 'boolean') {
            this.showHeader = options.header;
        }
        else {
            this.showHeader = true;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/components/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/consultas/consultas.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/consultas/consultas.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"consultas\">\n  <div class=\"consultasContainer fy-container-l\">\n    <h1 class=\"title\">Consultas</h1>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/consultas/consultas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConsultasComponent = /** @class */ (function () {
    function ConsultasComponent() {
    }
    ConsultasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'consultasView',
            template: __webpack_require__("./src/app/components/consultas/consultas.component.html"),
            styles: [__webpack_require__("./src/app/components/consultas/consultas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConsultasComponent);
    return ConsultasComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#home{\n  width: 100%;\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section id=\"home\" class=\"fy-row fy-row-centerMid fy-container-l\">\n  <div class=\"homeInner\">\n    <h1>Super comidita</h1>\n    <p>Crea, modifica y ve las recetas de tu local de comida de la esquina.</p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'homeView',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = "#nav{\n  background-color: #262626;\n  width: 100px;\n  height: 100vh;\n  color: white;\n  text-align: center;\n}\n\n.navContainer{\n\n}\n\n.icon{\n  height: 100px;\n  width: 100%;\n  padding: 0px 10px;\n}\n\n.icon:hover{\n  background-color: #545454;\n  cursor: pointer;\n}\n\n.icon:focus{\n  outline: 0;\n}\n\n.icon:hover p{\n  font-weight: bold;\n}\n\n.icon i{\n  font-size: 25px;\n  margin-bottom: 5px;\n}\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"nav\">\n  <div class=\"navContainer\">\n    <div class=\"icon fy-rowVertical fy-row-centerMid\" routerLink=\"/\">\n      <i class=\"ion-home\"></i>\n      <p>Inicio</p>\n    </div>\n\n    <div class=\"icon fy-rowVertical fy-row-centerMid\" routerLink=\"/mPrima\">\n      <i class=\"ion-ios-nutrition\"></i>\n      <p>Materias Primas</p>\n    </div>\n\n    <div class=\"icon fy-rowVertical fy-row-centerMid\" routerLink=\"/recetas\">\n      <i class=\"ion-fork\"></i>\n      <p>Recetas</p>\n    </div>\n\n    <div class=\"icon fy-rowVertical fy-row-centerMid\" routerLink=\"/productos\">\n      <i class=\"ion-pizza\"></i>\n      <p>Productos</p>\n    </div>\n<!--\n    <div class=\"icon fy-rowVertical fy-row-centerMid\" routerLink=\"/consulta\">\n      <i class=\"ion-eye\"></i>\n      <p>Consultas</p>\n    </div>\n  -->\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'menuView',
            template: __webpack_require__("./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/notFound/notFound.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notFound/notFound.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Página no encontrada</h1>\n"

/***/ }),

/***/ "./src/app/components/notFound/notFound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'notFoundView',
            template: __webpack_require__("./src/app/components/notFound/notFound.component.html"),
            styles: [__webpack_require__("./src/app/components/notFound/notFound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/primas/primas.component.css":
/***/ (function(module, exports) {

module.exports = ".primasContainer{\n  min-height: 500px;\n}\n\n.materiaPrima{\n  width: 100%;\n  text-align: center;\n}\n\n.materiaPrima tr:not(.materiaPrimaHead){\n}\n\n.materiaPrimaHead th{\n  padding-bottom: 30px;\n}\n\n.materiaPrima img{\n  width: 40px;\n}\n"

/***/ }),

/***/ "./src/app/components/primas/primas.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"primas\">\n  <div class=\"primasContainer fy-container-l\">\n    <h1 class=\"title\">Materia Prima</h1>\n\n    <div *ngIf=\"loading\" class=\"loadingContainer\">\n      <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n    </div>\n\n    <div class=\"loadingContainer\" *ngIf=\"productos?.length == 0 && !loading\">\n      <h2>No hay Materia Prima :(</h2>\n    </div>\n\n    <table class=\"materiaPrima\"  *ngIf=\"productos?.length > 0 && !loading\">\n\n      <tr class=\"materiaPrimaHead\">\n        <th></th>\n        <th>Nombre</th>\n        <th>Departamento</th>\n        <th>Cantidad</th>\n        <th>Precio c/u</th>\n        <th>Precio total</th>\n        <th>Fecha de caducidad</th>\n        <th></th>\n      </tr>\n <!--\n      <tr>\n        <td><img src=\"./assets/img/food/carrot.svg\" alt=\"Materia Prima\"></td>\n        <td>NOmbre</td>\n        <td>No tiene</td>\n        <td>5 pz(s)</td>\n        <td>$353</td>\n        <td>$w234234</td>\n        <td>10-Abril-2017</td>\n        <td>\n          <a *ngIf=\"editMode\"><i class=\"ion-edit edit\"></i></a>\n          <a *ngIf=\"editMode\"><i class=\"ion-ios-trash trash\"></i></a>\n          <a *ngIf=\"!editMode\"(click)=\"changeEditMode()\"><i class=\"ion-ios-gear config\"></i></a>\n        </td>\n      </tr>\n-->\n\n\n      <tr *ngFor=\"let producto of productos\">\n        <td><img src=\"./assets/img/food/carrot.svg\" alt=\"Materia Prima\"></td>\n        <td>{{producto?._fields[0].properties.nombre}}</td>\n        <td>No tiene</td>\n        <td>{{producto?._fields[0].properties.cantidad}} pz(s)</td>\n        <td>${{producto?._fields[0].properties.precio}}</td>\n        <td>${{producto?._fields[0].properties.precio * producto._fields[0].properties.cantidad}}</td>\n        <td>10-Abril-2017</td>\n        <td>\n          <a *ngIf=\"editMode\"><i class=\"ion-edit edit\" (click)=\"modal2Click(producto)\"></i></a>\n          <a *ngIf=\"editMode\"><i class=\"ion-ios-trash trash\" (click)=\"deletePrima(producto._fields[0].properties.nombre)\"></i></a>\n          <a *ngIf=\"!editMode\" (click)=\"changeEditMode()\"><i class=\"ion-ios-gear config\"></i></a>\n        </td>\n      </tr>\n    </table>\n\n\n  </div>\n\n  <div *ngIf=\"editMode\" class=\"add fy-row fy-row-centerMid\" (click)=\"changeEditMode()\">\n    <i class=\"ion-checkmark\"></i>\n  </div>\n\n  <div *ngIf=\"!editMode\" class=\"add fy-row fy-row-centerMid\" (click)=\"modalClick()\">\n    <i class=\"ion-plus\"></i>\n  </div>\n\n</section>\n\n<section id=\"modalAdd\" class=\"fy-row fy-row-centerMid\" *ngIf=\"modalActivado\">\n  <div class=\"modalAddInner\">\n    <form class=\"formComidita\" [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"formComiditaTitulo\">\n        <h2>Agregar Materia Prima</h2>\n        <span>En está sección puedes agregar ingredientes para armar las recetas, cada ingrediente queda guardado aun cuando el stock del ingrdiente este en 0.</span>\n      </div>\n      <p>Nombre de la materia prima</p>\n      <input type=\"text\" placeholder=\"Ej. Zanahoria\" formControlName=\"nombre\">\n      <p>Departamento</p>\n      <select name=\"Departamento\" formControlName=\"departamento\">\n        <option value=\"\" disabled selected>Selecciona una opción</option>\n        <option value=\"Cereales\">Cereales</option>\n        <option value=\"Alimentos Congelados\">Alimentos Congelados</option>\n        <option value=\"Productos Frescos\">Productos Frescos</option>\n        <option value=\"Lácteos\">Lácteos</option>\n        <option value=\"Lácteos\">Carnes</option>\n        <option value=\"Alimentos Congelados\">Alimentos Congelados</option>\n        <option value=\"Miselaneos\">Miselaneos</option>\n        <option value=\"Otros\">Otros</option>\n      </select>\n      <p>Cantidad</p>\n      <input type=\"number\" formControlName=\"cantidad\" min=\"0\" placeholder=\"Ej. 0\">\n      <p>Unidad</p>\n      <select name=\"Unidad\" formControlName=\"unidad\">\n        <option value=\"\" disabled selected>Selecciona una opción</option>\n        <option value=\"Kilogramo\">Kg</option>\n        <option value=\"Gramo\">Gramo</option>\n        <option value=\"Pieza\">Por Pieza</option>\n        <option value=\"Litro\">Litro</option>\n      </select>\n      <p>Precio por unidad</p>\n      <input type=\"number\" min=\"0\" placeholder=\"Ej. 0\" formControlName=\"precio\">\n      <p>Fecha de Caducidad</p>\n      <input type=\"date\" name=\"fecha\" value=\"fecha\" formControlName=\"fecha\">\n      <button [disabled]=\"!addForm.valid\"><i *ngIf=\"loadingForm\" class=\"ion-load-c\">Cargando</i><div i *ngIf=\"!loadingForm\"><i class=\"ion-plus\"></i>Agregar</div></button>\n    </form>\n    <i class=\"ion-close close\" (click)=\"modalClick()\"></i>\n  </div>\n</section>\n\n\n<section id=\"modalUpdate\" class=\"fy-row fy-row-centerMid\" *ngIf=\"moda2lActivado\">\n  <div class=\"modalUpdateInner\">\n    <form class=\"formComidita\" [formGroup]=\"modForm\" (ngSubmit)=\"modPrima()\">\n      <div class=\"formComiditaTitulo\">\n        <h2>Modificar Materia Prima</h2>\n        <span>En está sección puedes modificar ingredientes para armar las recetas, cada ingrediente queda guardado aun cuando el stock del ingrdiente este en 0.</span>\n      </div>\n      <p>Nombre de la materia prima</p>\n      <input type=\"text\" value={{selectedP._fields[0].properties.nombre}} formControlName=\"nombre\">\n      <p>Departamento</p>\n      <select name=\"Departamento\" formControlName=\"departamento\">\n        <option value=\"\" disabled selected>Selecciona una opción</option>\n        <option value=\"Cereales\">Cereales</option>\n        <option value=\"Alimentos Congelados\">Alimentos Congelados</option>\n        <option value=\"Productos Frescos\">Productos Frescos</option>\n        <option value=\"Lácteos\">Lácteos</option>\n        <option value=\"Lácteos\">Carnes</option>\n        <option value=\"Alimentos Congelados\">Alimentos Congelados</option>\n        <option value=\"Miselaneos\">Miselaneos</option>\n        <option value=\"Otros\">Otros</option>\n      </select>\n      <p>Cantidad</p>\n      <input type=\"number\" formControlName=\"cantidad\" min=\"0\" value={{selectedP._fields[0].properties.cantidad}}>\n      <p>Unidad</p>\n      <select name=\"Unidad\" formControlName=\"unidad\">\n        <option value=\"\" disabled selected>Selecciona una opción</option>\n        <option value=\"Kilogramo\">Kg</option>\n        <option value=\"Gramo\">Gramo</option>\n        <option value=\"Pieza\">Por Pieza</option>\n        <option value=\"Litro\">Litro</option>\n      </select>\n      <p>Precio por unidad</p>\n      <input type=\"number\" min=\"0\" value={{selectedP._fields[0].properties.precio}} formControlName=\"precio\">\n      <p>Fecha de Caducidad</p>\n      <input type=\"date\" name=\"fecha\" value=\"fecha\" formControlName=\"fecha\">\n      <button [disabled]=\"!modForm.valid\"><i *ngIf=\"loadingForm\" class=\"ion-load-c\">Cargando</i><div i *ngIf=\"!loadingForm\"><i class=\"ion-plus\"></i>Guardar</div></button>\n    </form>\n    <i class=\"ion-close close\" (click)=\"modal2Click()\"></i>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/primas/primas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_prima_model__ = __webpack_require__("./src/app/models/prima.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PrimasComponent = /** @class */ (function () {
    function PrimasComponent(productService, formBuilder) {
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.nuevaPrima = new __WEBPACK_IMPORTED_MODULE_3__models_prima_model__["a" /* Prima */]();
        this.selectedP = new __WEBPACK_IMPORTED_MODULE_3__models_prima_model__["a" /* Prima */]();
        this.loading = false;
        this.loadingForm = false;
        this.errorProductos = false;
        this.errorProducto = false;
        this.modalActivado = false;
        this.moda2lActivado = false;
        this.productoAniadido = false;
        this.editMode = false;
    }
    PrimasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productos = [];
        this.loading = true;
        this.resultado = this.productService.misProductos().catch(function (error) {
            console.log("Error al acceder a los productos");
            _this.errorProductos = true;
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(null);
        });
        this.resultado.subscribe(function (val) {
            _this.productos = val;
            console.log(val);
            _this.loading = false;
        });
        this.createForm();
        this.createForm2();
    };
    PrimasComponent.prototype.modalClick = function () {
        if (this.modalActivado == false) {
            this.modalActivado = true;
        }
        else {
            this.modalActivado = false;
        }
    };
    PrimasComponent.prototype.modal2Click = function (prim) {
        if (this.moda2lActivado == false) {
            this.selectedP = prim;
            this.nuevaPrima.nombreNew = this.selectedP.nombre;
            this.moda2lActivado = true;
        }
        else {
            this.moda2lActivado = false;
        }
    };
    PrimasComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loadingForm = true;
        this.nuevaPrima.nombre = this.addForm.value.nombre;
        this.nuevaPrima.departamento = this.addForm.value.departamento;
        this.nuevaPrima.cantidad = this.addForm.value.cantidad;
        this.nuevaPrima.unidad = this.addForm.value.unidad;
        this.nuevaPrima.precio = this.addForm.value.precio;
        this.nuevaPrima.fecha = this.addForm.value.fecha;
        this.productService.agregarPrima(this.nuevaPrima).subscribe(function (val) {
            _this.productoAniadido = val;
            if (val) {
                _this.modalClick();
            }
            _this.loadingForm = false;
            _this.errorProducto = !val;
            _this.ngOnInit();
        });
    };
    PrimasComponent.prototype.modPrima = function () {
        var _this = this;
        this.loadingForm = true;
        this.nuevaPrima.nombre = this.modForm.value.nombre;
        this.nuevaPrima.departamento = this.modForm.value.departamento;
        this.nuevaPrima.cantidad = this.modForm.value.cantidad;
        this.nuevaPrima.unidad = this.modForm.value.unidad;
        this.nuevaPrima.precio = this.modForm.value.precio;
        this.nuevaPrima.fecha = this.modForm.value.fecha;
        console.log(this.nuevaPrima);
        this.productService.modificarPrima(this.nuevaPrima).subscribe(function (val) {
            _this.productoAniadido = val;
            if (val) {
                _this.modal2Click("Cerro");
            }
            _this.loadingForm = false;
            _this.errorProducto = !val;
            _this.ngOnInit();
        });
    };
    PrimasComponent.prototype.deletePrima = function (nombre) {
        var _this = this;
        this.productService.deletePrima(nombre).subscribe(function (val) {
            if (val) {
                console.log("Exito al eliminar el producto");
            }
            _this.errorProducto = !val;
            _this.ngOnInit();
        });
    };
    PrimasComponent.prototype.createForm = function () {
        this.addForm = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            departamento: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            cantidad: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(0)]],
            unidad: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            precio: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(0)]],
            fecha: ['', []],
        });
    };
    PrimasComponent.prototype.createForm2 = function () {
        this.modForm = this.formBuilder.group({
            nombre: ['', []],
            departamento: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            cantidad: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(0)]],
            unidad: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            precio: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(0)]],
            fecha: ['', []],
        });
    };
    PrimasComponent.prototype.changeEditMode = function () {
        if (this.editMode == false) {
            this.editMode = true;
        }
        else {
            this.editMode = false;
        }
    };
    PrimasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'primasView',
            template: __webpack_require__("./src/app/components/primas/primas.component.html"),
            styles: [__webpack_require__("./src/app/components/primas/primas.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], PrimasComponent);
    return PrimasComponent;
}());



/***/ }),

/***/ "./src/app/components/productos/productos.component.css":
/***/ (function(module, exports) {

module.exports = ".listaRecetas,\n.listaProductos{\n  margin-bottom: 20px;\n}\n\n.listaRecetas h3,\n.listaProductos h3{\n  margin-bottom: 15px;\n}\n\n.receta,\n.productos{\n  padding: 10px 5px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n.receta{\n  cursor: pointer;\n}\n\n.productos{\n  position: relative;\n}\n\n.trashProducto{\n  right: 30px;\n  top: 25%;\n  position: absolute;\n}\n\n.receta:hover{\n  border: 1px solid #050505;\n}\n"

/***/ }),

/***/ "./src/app/components/productos/productos.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"productos\">\n  <div class=\"productosContainer fy-container-l\">\n    <h1 class=\"title\">Productos Elaborados</h1>\n\n    <div class=\"loadingContainer\" *ngIf=\"producto?.length == 0 && !loading\">\n      <h2>No hay ningun Producto :(</h2>\n    </div>\n\n    <div class=\"listaRecetas\">\n      <h3>Escoje una receta para elaborar</h3>\n      <div class=\"receta\" *ngFor=\"let receta of recetas\">\n        <p>------ {{receta?._fields[0].properties.nombre}} ------</p>\n      </div>\n    </div>\n\n    <div class=\"listaProductos\">\n      <h3>Productos actuales</h3>\n      <div class=\"productos\" *ngFor=\"let producto of productos\">\n        <p>**** Producto: {{producto?._fields[0].properties.nombre}} ****</p>\n        <p>**** Cantidad: {{producto?._fields[0].properties.cantidad}} ****</p>\n        <i class=\"ion-ios-trash trash trashProducto\" (click)=\"eliminarProductoFinal(producto?._fields[0].properties.nombre)\"></i>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"add fy-row fy-row-centerMid\" (click)=\"modalClick()\">\n    <i class=\"ion-plus\"></i>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/productos/productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductosComponent = /** @class */ (function () {
    function ProductosComponent(productService, formBuilder) {
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.loading = false;
        this.errorRecetas = false;
        this.errorProducto = false;
    }
    ProductosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.recetas = [];
        this.resultado = this.productService.getRecetas().catch(function (error) {
            console.log("Error al acceder a los producos");
            _this.errorRecetas = true;
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(null);
        });
        this.resultado.subscribe(function (val) {
            _this.recetas = val;
            _this.loading = false;
            console.log(_this.recetas);
        });
        this.resultado2 = this.productService.getProductoFinal().catch(function (error) {
            console.log("Error al acceder a los producos");
            _this.errorProducto = true;
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(null);
        });
        this.resultado2.subscribe(function (val) {
            _this.productos = val;
            _this.loading = false;
            console.log(_this.productos);
        });
    };
    ProductosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'productosView',
            template: __webpack_require__("./src/app/components/productos/productos.component.html"),
            styles: [__webpack_require__("./src/app/components/productos/productos.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ProductosComponent);
    return ProductosComponent;
}());



/***/ }),

/***/ "./src/app/components/recetas/recetas.component.css":
/***/ (function(module, exports) {

module.exports = ".recetaContainer{\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.receta{\n  background-color: white;\n  padding: 20px 30px;\n  border-radius: 8px;\n  -webkit-box-shadow: 0 0 40px -10px #000;\n          box-shadow: 0 0 40px -10px #000;\n  font-family: Montserrat;\n  position: relative;\n  width: 30%;\n  margin-bottom: 10px;\n}\n\n.trashReceta{\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n.recetaIngredientesContainer{\n  padding: 15px 0;\n}\n\n.recetaIngredientes i{\n  margin-right: 5px;\n}\n\n.recetaIngredientesNombre{\n  margin-right: 40px;\n}\n\n.bigInput{\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.inputMid{\n  width: 50%;\n}\n\n.inputMid2{\n  width: 40%;\n}\n\n.agragarIngredienteContainer{\n  margin-top: 10px;\n}\n\n.agragarIngrediente{\n  cursor: pointer;\n  font-size: 25px;\n}\n\n.agragarIngrediente:hover{\n  color: #1f98f4;\n}\n"

/***/ }),

/***/ "./src/app/components/recetas/recetas.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"recetas\">\n  <div class=\"recetasContainer fy-container-l\">\n    <h1 class=\"title\">Recetas</h1>\n\n    <div *ngIf=\"loading\" class=\"loadingContainer\">\n      <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n    </div>\n\n    <div class=\"loadingContainer\" *ngIf=\"recetas?.length == 0 && !loading\">\n      <h2>No hay ninguna Receta :(</h2>\n    </div>\n\n      <div class=\"recetaContainer fy-row\">\n        <div class=\"receta\" *ngFor=\"let receta of recetas\">\n          <h4>{{receta._fields[0].properties.nombre}}</h4>\n          <i class=\"ion-ios-trash trash trashReceta\" (click)=\"deleteReceta(receta._fields[0].properties.nombre)\"></i>\n\n            <div class=\"recetaIngredientes fy-row\" >\n              <i class=\"ion-minus\"></i><p class=\"recetaIngredientesNombre\">{{receta._fields[0].properties.ingrediente}}</p>\n              <p>{{receta._fields[0].properties.cantidad}}</p>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  <div class=\"add fy-row fy-row-centerMid\" (click)=\"modalClick()\">\n    <i class=\"ion-plus\"></i>\n  </div>\n</section>\n\n\n<section id=\"modalAdd\" class=\"fy-row fy-row-centerMid\" *ngIf=\"modalActivado\">\n  <div class=\"modalAddInner\">\n    <form class=\"formComidita\" [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"formComiditaTitulo\">\n        <h2>Agregar Receta</h2>\n        <span>En está sección puedes agregar recetas para armar productos, Las recetas pueden ser eliminadas completamente, si eliminas recetas los productos quedarasn eliminados</span>\n      </div>\n      <div class=\"input\">\n        <p>Nombre de la receta</p>\n        <input type=\"text\" placeholder=\"Ej. Pastel de carne\" formControlName=\"nombre\">\n      </div>\n      <div class=\"bigInput fy-row\">\n        <div class=\"inputMid\">\n          <p>Ingredientes</p>\n          <select name=\"Ingredientes\" formControlName=\"ingrediente\">\n            <option value=\"\" disabled selected>Selecciona una opción</option>\n            <option *ngFor=\"let producto of productos\" value=\"{{producto._fields[0].properties.nombre}}\">{{producto._fields[0].properties.nombre}}</option>\n          </select>\n        </div>\n        <div class=\"inputMid2\">\n          <p>Cantidad</p>\n          <input type=\"number\" formControlName=\"cantidad\" min=\"0\" placeholder=\"Ej. 0\">\n        </div>\n      </div>\n\n      <div class=\"agragarIngredienteContainer\">\n        <i class=\"ion-plus-circled agragarIngrediente\"></i>\n      </div>\n\n\n      <button [disabled]=\"!addForm.valid\"><i *ngIf=\"loadingForm\" class=\"ion-load-c\">Cargando</i><div i *ngIf=\"!loadingForm\"><i class=\"ion-plus\"></i>Agregar</div></button>\n    </form>\n    <i class=\"ion-close close\" (click)=\"modalClick()\"></i>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/recetas/recetas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecetasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_receta_model__ = __webpack_require__("./src/app/models/receta.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecetasComponent = /** @class */ (function () {
    function RecetasComponent(productService, formBuilder) {
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.nuevaReceta = new __WEBPACK_IMPORTED_MODULE_3__models_receta_model__["a" /* Receta */]();
        this.loading = false;
        this.loadingForm = false;
        this.modalActivado = false;
        this.recetaAniadido = false;
        this.errorRecetas = false;
        this.errorReceta = false;
    }
    RecetasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.recetas = [];
        this.resultado = this.productService.getRecetas().catch(function (error) {
            console.log("Error al acceder a los producos");
            _this.errorRecetas = true;
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(null);
        });
        this.resultado.subscribe(function (val) {
            _this.recetas = val;
            _this.loading = false;
            console.log(_this.recetas);
        });
        /*
            for(var i=0;i < this.recetas.length; i++){
              this.recetas[i]._fields[0].properties.cantidad = this.recetas[0]._fields[0].properties.cantidad.split(',');
              this.recetas[i]._fields[0].properties.ingrediente = this.recetas[0]._fields[0].properties.ingrediente.split(',');
            }
        */
        this.createForm();
    };
    RecetasComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loadingForm = true;
        this.nuevaReceta.nombre = this.addForm.value.nombre;
        this.nuevaReceta.ingrediente = [this.addForm.value.ingrediente];
        this.nuevaReceta.cantidad = [this.addForm.value.cantidad];
        console.log(this.nuevaReceta);
        this.productService.agregarReceta(this.nuevaReceta).subscribe(function (val) {
            _this.recetaAniadido = val;
            if (val) {
                console.log("exito");
                //this.modalClick();
            }
            _this.loadingForm = false;
            _this.errorReceta = !val;
            _this.ngOnInit();
        });
        this.modalClick();
    };
    RecetasComponent.prototype.deleteReceta = function (nombre) {
        var _this = this;
        this.productService.deleteReceta(nombre).subscribe(function (val) {
            if (val) {
                console.log("exito");
                //this.modalClick();
            }
            _this.loadingForm = false;
            _this.errorReceta = !val;
            _this.ngOnInit();
        });
    };
    RecetasComponent.prototype.createForm = function () {
        this.addForm = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            ingrediente: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            cantidad: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(0)]],
        });
    };
    RecetasComponent.prototype.modalClick = function () {
        var _this = this;
        if (this.modalActivado == false) {
            this.productos = [];
            this.resProducto = this.productService.misProductos().catch(function (error) {
                console.log("Error al acceder a los producos");
                _this.errorRecetas = true;
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(null);
            });
            this.resProducto.subscribe(function (val) {
                _this.productos = val;
                _this.loading = false;
            });
            this.modalActivado = true;
        }
        else {
            this.modalActivado = false;
        }
    };
    RecetasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'recetasView',
            template: __webpack_require__("./src/app/components/recetas/recetas.component.html"),
            styles: [__webpack_require__("./src/app/components/recetas/recetas.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], RecetasComponent);
    return RecetasComponent;
}());



/***/ }),

/***/ "./src/app/models/prima.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prima; });
var Prima = /** @class */ (function () {
    function Prima() {
        this.nombre = "";
        this.nombreNew = "";
        this.departamento = "";
        this.cantidad = -1;
        this.unidad = "";
        this.precio = -1;
        this.fecha = "";
    }
    return Prima;
}());

;


/***/ }),

/***/ "./src/app/models/receta.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Receta; });
var Receta = /** @class */ (function () {
    function Receta() {
        this.nombre = "";
    }
    return Receta;
}());

;


/***/ }),

/***/ "./src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_prima_model__ = __webpack_require__("./src/app/models/prima.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_receta_model__ = __webpack_require__("./src/app/models/receta.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.prima = new __WEBPACK_IMPORTED_MODULE_2__models_prima_model__["a" /* Prima */]();
        this.receta = new __WEBPACK_IMPORTED_MODULE_3__models_receta_model__["a" /* Receta */]();
    }
    ProductService.prototype.misProductos = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.productoObservable = this.http.get('http://localhost:3000/', options)
            .map(function (response) {
            //console.log(response.json());
            if (response.status == 200) {
                _this.producto = response.json();
                return _this.producto;
            }
            else {
                return undefined;
            }
        });
        return this.productoObservable;
    };
    ProductService.prototype.agregarPrima = function (prima) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        //console.log(prima);
        return this.http.post('http://localhost:3000/addPrima', JSON.stringify(prima), { headers: headers })
            .map(function (response) {
            if (response.status == 200) {
                //console.log(response._body);
                return true;
            }
            else {
                return false;
            }
        });
    };
    ProductService.prototype.modificarPrima = function (prima) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        console.log(prima.nombreNew);
        return this.http.post('http://localhost:3000/modPrima', JSON.stringify(prima), { headers: headers })
            .map(function (response) {
            if (response.status == 200) {
                //console.log(response._body);
                return true;
            }
            else {
                return false;
            }
        });
    };
    ProductService.prototype.deletePrima = function (nombre) {
        var miReceta = { "nombre": nombre };
        //console.log(miReceta)
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:3000/deleteProducto', JSON.stringify(miReceta), { headers: headers })
            .map(function (response) {
            //console.log(response.status);
            if (response.status == 200) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    ProductService.prototype.getRecetas = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.productoObservable = this.http.get('http://localhost:3000/recetas', options)
            .map(function (response) {
            if (response.status == 200) {
                _this.recetas = response.json();
                console.log(response.json());
                return _this.recetas;
            }
            else {
                return undefined;
            }
        });
        return this.productoObservable;
    };
    ProductService.prototype.agregarReceta = function (receta) {
        var recetaPrueb = { "nombre": "Puerco a la Manzana", "ingrediente": ["Puerco", "Manzana"], "cantidad": ["12", "32.2"] };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/agregarReceta', JSON.stringify(receta), { headers: headers })
            .map(function (response) {
            console.log(response.status);
            if (response.status == 200) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    ProductService.prototype.deleteReceta = function (nombre) {
        var miReceta = { "nombre": nombre };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:3000/deleteReceta', JSON.stringify(miReceta), { headers: headers })
            .map(function (response) {
            console.log(response.status);
            if (response.status == 200) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    ProductService.prototype.getProductoFinal = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.productoObservable = this.http.get('http://localhost:3000/productoElaborados', { headers: headers })
            .map(function (response) {
            if (response.status == 200) {
                _this.productoFinal = response.json();
                return _this.productoFinal;
            }
            else {
                return undefined;
            }
        });
        return this.productoObservable;
    };
    ProductService.prototype.deleteProductoFinal = function (nombre) {
        var miProducto = { "nombre": nombre };
        console.log(miProducto);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:3000/eliminarProductoElaborados', JSON.stringify(miProducto), { headers: headers })
            .map(function (response) {
            console.log(response.status);
            if (response.status == 200) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    ProductService.prototype.elaborarProducto = function (nombre) {
        var miProducto = { "nombre": nombre };
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map