(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workshops-workshops-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/workshops/workshops/workshops.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/workshops/workshops/workshops.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>workshops works!</p>\n"

/***/ }),

/***/ "./src/app/workshops/workshops-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/workshops/workshops-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: WorkshopsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshopsRoutingModule", function() { return WorkshopsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _workshops_workshops_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workshops/workshops.component */ "./src/app/workshops/workshops/workshops.component.ts");




const routes = [{ path: "", component: _workshops_workshops_component__WEBPACK_IMPORTED_MODULE_3__["WorkshopsComponent"] }];
let WorkshopsRoutingModule = class WorkshopsRoutingModule {
};
WorkshopsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WorkshopsRoutingModule);



/***/ }),

/***/ "./src/app/workshops/workshops.module.ts":
/*!***********************************************!*\
  !*** ./src/app/workshops/workshops.module.ts ***!
  \***********************************************/
/*! exports provided: WorkshopsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshopsModule", function() { return WorkshopsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _workshops_workshops_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workshops/workshops.component */ "./src/app/workshops/workshops/workshops.component.ts");
/* harmony import */ var _workshops_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workshops-routing.module */ "./src/app/workshops/workshops-routing.module.ts");





let WorkshopsModule = class WorkshopsModule {
};
WorkshopsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_workshops_workshops_component__WEBPACK_IMPORTED_MODULE_3__["WorkshopsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _workshops_routing_module__WEBPACK_IMPORTED_MODULE_4__["WorkshopsRoutingModule"]]
    })
], WorkshopsModule);



/***/ }),

/***/ "./src/app/workshops/workshops/workshops.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/workshops/workshops/workshops.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMvd29ya3Nob3BzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/workshops/workshops/workshops.component.ts":
/*!************************************************************!*\
  !*** ./src/app/workshops/workshops/workshops.component.ts ***!
  \************************************************************/
/*! exports provided: WorkshopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshopsComponent", function() { return WorkshopsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkshopsComponent = class WorkshopsComponent {
    constructor() { }
    ngOnInit() {
    }
};
WorkshopsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workshops',
        template: __webpack_require__(/*! raw-loader!./workshops.component.html */ "./node_modules/raw-loader/index.js!./src/app/workshops/workshops/workshops.component.html"),
        styles: [__webpack_require__(/*! ./workshops.component.scss */ "./src/app/workshops/workshops/workshops.component.scss")]
    })
], WorkshopsComponent);



/***/ })

}]);
//# sourceMappingURL=workshops-workshops-module-es2015.js.map