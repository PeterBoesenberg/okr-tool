(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["introduction-introduction-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/introduction/analyze/analyze.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/introduction/analyze/analyze.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Every company is different. Every OKR-implementation is different as well.\nTherefore you have to analyze two things.\n<ol>\n  <li>What is the current status of the company?</li>\n  <li>What do they want to achieve with OKR?</li>\n</ol>\n<h2>Current status</h2>\nGoal: Get a deep understanding about the company\n<ul>\n  <li>Who is signing the contract?</li>\n  <li>On which levels is the company setting goals already?</li>\n  <li>What kind of goals are set?</li>\n  <li>What is the frequency? Annual?</li>\n  <li>Are those goals met?</li>\n  <li>What are the consequences on meeting/not meeting goals?</li>\n  <li>Is there a vision/mission/strategy of any kind? Who knows about it?</li>\n  <li>How is this influencing day-to-day decisions?</li>\n  <li>Name, legal form, size, locations</li>\n  <li>How is the company organized? Is there an organigram?</li>\n  <li>Which kind of leadership styles can be found in the company? Where?</li>\n  <li>Does it differ between hierarchy/between department?</li>\n  <li>What are there experiences with consultants? ...with changes?</li>\n  <li>When was the last time they tried something similar? How did it go?</li>\n  <li>Who wants OKR?</li>\n  <li>Who is the initiator?</li>\n  <li>Who are the supporters?</li>\n  <li>Who knows already about OKR?</li>\n</ul>\n\n<h2>Goals for OKR</h2>\nGoal: What exactly should change with OKR? When?\n<ul>\n  <li>Realizing strategy</li>\n  <li>Achieving high percentage of OKR? (bad goal)</li>\n  <li>Motivating employees</li>\n  <li>Increasing performance</li>\n  <li>Creating a healthy work environment</li>\n  <li>Improving communication</li>\n</ul>\nNot matter what the company wants to achieve with OKR, it has to be measured.\nSome of those seem hard or impossible to measure. For ideas about how to measure\nlook here <a routerLink=\"/ressources/measure\">Measure everything</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/introduction/introduction/introduction.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/introduction/introduction/introduction.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Introduction</h1>\n<p>\n  Before you start reaching the sky with Objectices and Key Results, you should\n  prepare yourself. Keep in mind that we are all humans. We are all reluctant to\n  change. That's why its important to start off as smoothly as possible.\n</p>\n<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Analyze\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-analyze></app-analyze>\n  </mat-expansion-panel>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Plan\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-plan></app-plan>\n  </mat-expansion-panel>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Onboarding\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-onboarding></app-onboarding>\n  </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/introduction/onboarding/onboarding.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/introduction/onboarding/onboarding.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>onboarding works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/introduction/plan/plan.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/introduction/plan/plan.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Make great plans and stay flexible</p>\n"

/***/ }),

/***/ "./src/app/introduction/analyze/analyze.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/introduction/analyze/analyze.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvZHVjdGlvbi9hbmFseXplL2FuYWx5emUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/introduction/analyze/analyze.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/introduction/analyze/analyze.component.ts ***!
  \***********************************************************/
/*! exports provided: AnalyzeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzeComponent", function() { return AnalyzeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnalyzeComponent = class AnalyzeComponent {
    constructor() { }
    ngOnInit() {
    }
};
AnalyzeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analyze',
        template: __webpack_require__(/*! raw-loader!./analyze.component.html */ "./node_modules/raw-loader/index.js!./src/app/introduction/analyze/analyze.component.html"),
        styles: [__webpack_require__(/*! ./analyze.component.scss */ "./src/app/introduction/analyze/analyze.component.scss")]
    })
], AnalyzeComponent);



/***/ }),

/***/ "./src/app/introduction/introduction-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/introduction/introduction-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: IntroductionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionRoutingModule", function() { return IntroductionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction/introduction.component.ts");




const routes = [{ path: '', component: _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__["IntroductionComponent"] }];
let IntroductionRoutingModule = class IntroductionRoutingModule {
};
IntroductionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], IntroductionRoutingModule);



/***/ }),

/***/ "./src/app/introduction/introduction.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/introduction/introduction.module.ts ***!
  \*****************************************************/
/*! exports provided: IntroductionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionModule", function() { return IntroductionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _introduction_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./introduction-routing.module */ "./src/app/introduction/introduction-routing.module.ts");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction/introduction.component.ts");
/* harmony import */ var _analyze_analyze_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./analyze/analyze.component */ "./src/app/introduction/analyze/analyze.component.ts");
/* harmony import */ var _plan_plan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plan/plan.component */ "./src/app/introduction/plan/plan.component.ts");
/* harmony import */ var _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./onboarding/onboarding.component */ "./src/app/introduction/onboarding/onboarding.component.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");











let IntroductionModule = class IntroductionModule {
};
IntroductionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__["IntroductionComponent"],
            _analyze_analyze_component__WEBPACK_IMPORTED_MODULE_7__["AnalyzeComponent"],
            _plan_plan_component__WEBPACK_IMPORTED_MODULE_8__["PlanComponent"],
            _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_9__["OnboardingComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _introduction_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroductionRoutingModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"]
        ]
    })
], IntroductionModule);



/***/ }),

/***/ "./src/app/introduction/introduction/introduction.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/introduction/introduction/introduction.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/introduction/introduction/introduction.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/introduction/introduction/introduction.component.ts ***!
  \*********************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntroductionComponent = class IntroductionComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntroductionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-introduction',
        template: __webpack_require__(/*! raw-loader!./introduction.component.html */ "./node_modules/raw-loader/index.js!./src/app/introduction/introduction/introduction.component.html"),
        styles: [__webpack_require__(/*! ./introduction.component.scss */ "./src/app/introduction/introduction/introduction.component.scss")]
    })
], IntroductionComponent);



/***/ }),

/***/ "./src/app/introduction/onboarding/onboarding.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/introduction/onboarding/onboarding.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvZHVjdGlvbi9vbmJvYXJkaW5nL29uYm9hcmRpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/introduction/onboarding/onboarding.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/introduction/onboarding/onboarding.component.ts ***!
  \*****************************************************************/
/*! exports provided: OnboardingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingComponent", function() { return OnboardingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OnboardingComponent = class OnboardingComponent {
    constructor() { }
    ngOnInit() {
    }
};
OnboardingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onboarding',
        template: __webpack_require__(/*! raw-loader!./onboarding.component.html */ "./node_modules/raw-loader/index.js!./src/app/introduction/onboarding/onboarding.component.html"),
        styles: [__webpack_require__(/*! ./onboarding.component.scss */ "./src/app/introduction/onboarding/onboarding.component.scss")]
    })
], OnboardingComponent);



/***/ }),

/***/ "./src/app/introduction/plan/plan.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/introduction/plan/plan.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvZHVjdGlvbi9wbGFuL3BsYW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/introduction/plan/plan.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/introduction/plan/plan.component.ts ***!
  \*****************************************************/
/*! exports provided: PlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanComponent", function() { return PlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlanComponent = class PlanComponent {
    constructor() { }
    ngOnInit() {
    }
};
PlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plan',
        template: __webpack_require__(/*! raw-loader!./plan.component.html */ "./node_modules/raw-loader/index.js!./src/app/introduction/plan/plan.component.html"),
        styles: [__webpack_require__(/*! ./plan.component.scss */ "./src/app/introduction/plan/plan.component.scss")]
    })
], PlanComponent);



/***/ })

}]);
//# sourceMappingURL=introduction-introduction-module-es2015.js.map