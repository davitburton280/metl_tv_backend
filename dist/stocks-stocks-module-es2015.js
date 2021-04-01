(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stocks-stocks-module"],{

/***/ "./src/app/core/helpers/normalizeTableColumnName.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/helpers/normalizeTableColumnName.ts ***!
  \**********************************************************/
/*! exports provided: normalizeColName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeColName", function() { return normalizeColName; });
function normalizeColName(col) {
    col = `${col[0].toUpperCase()}${col.slice(1)}`.replace(/([A-Z])/g, ' $1').trim();
    return col.replace(/_/g, ' ');
}



/***/ }),

/***/ "./src/app/stocks/stock-profile/historical-tab/historical-tab.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/stocks/stock-profile/historical-tab/historical-tab.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HistoricalTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricalTabComponent", function() { return HistoricalTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _core_helpers_normalizeTableColumnName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/helpers/normalizeTableColumnName */ "./src/app/core/helpers/normalizeTableColumnName.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _core_services_stocks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/stocks.service */ "./src/app/core/services/stocks.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");










function HistoricalTabComponent_table_0_ng_container_1_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.normalizeColName(col_r5), "");
} }
function HistoricalTabComponent_table_0_ng_container_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9[col_r5], " ");
} }
function HistoricalTabComponent_table_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HistoricalTabComponent_table_0_ng_container_1_th_2_Template, 2, 1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HistoricalTabComponent_table_0_ng_container_1_td_3_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", col_r5);
} }
function HistoricalTabComponent_table_0_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
function HistoricalTabComponent_table_0_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
function HistoricalTabComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HistoricalTabComponent_table_0_ng_container_1_Template, 4, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HistoricalTabComponent_table_0_tr_2_Template, 1, 0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HistoricalTabComponent_table_0_tr_3_Template, 1, 0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.tableData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
function HistoricalTabComponent_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No historical prices found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HistoricalTabComponent {
    constructor(stocksService) {
        this.stocksService = stocksService;
        this.displayedColumns = ['date', 'price', 'change', 'changePercent', 'open', 'volume'];
        this.paginationValues = [10, 25, 100];
    }
    ngOnInit() {
        this.stocksService.getStockHistoricalPrices({ stock: this.selectedStock }).subscribe(dt => {
            this.tableData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](dt.historical);
            this.tableData.paginator = this.paginator;
        });
    }
    normalizeColName(col) {
        return Object(_core_helpers_normalizeTableColumnName__WEBPACK_IMPORTED_MODULE_2__["normalizeColName"])(col);
    }
}
HistoricalTabComponent.ɵfac = function HistoricalTabComponent_Factory(t) { return new (t || HistoricalTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_stocks_service__WEBPACK_IMPORTED_MODULE_4__["StocksService"])); };
HistoricalTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoricalTabComponent, selectors: [["app-historical-tab"]], viewQuery: function HistoricalTabComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { selectedStock: "selectedStock" }, decls: 3, vars: 4, consts: [["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], [3, "pageSizeOptions", "hidden"], [4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function HistoricalTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HistoricalTabComponent_table_0_Template, 4, 4, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-paginator", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HistoricalTabComponent_mat_error_2_Template, 2, 0, "mat-error", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableData && ctx.tableData.data.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", ctx.paginationValues)("hidden", !(ctx.tableData == null ? null : ctx.tableData.data.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.tableData == null ? null : ctx.tableData.data.length));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tzL3N0b2NrLXByb2ZpbGUvaGlzdG9yaWNhbC10YWIvQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcc3RvY2tzXFxzdG9jay1wcm9maWxlXFxoaXN0b3JpY2FsLXRhYlxcaGlzdG9yaWNhbC10YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0b2Nrcy9zdG9jay1wcm9maWxlL2hpc3RvcmljYWwtdGFiL2hpc3RvcmljYWwtdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc3RvY2tzL3N0b2NrLXByb2ZpbGUvaGlzdG9yaWNhbC10YWIvaGlzdG9yaWNhbC10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoricalTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-historical-tab',
                templateUrl: './historical-tab.component.html',
                styleUrls: ['./historical-tab.component.scss']
            }]
    }], function () { return [{ type: _core_services_stocks_service__WEBPACK_IMPORTED_MODULE_4__["StocksService"] }]; }, { selectedStock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['selectedStock']
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./src/app/stocks/stock-profile/stock-profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/stocks/stock-profile/stock-profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: StockProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockProfileComponent", function() { return StockProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_stocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/stocks.service */ "./src/app/core/services/stocks.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_stocks_stock_profile_summary_tab_summary_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/stocks/stock-profile/summary-tab/summary-tab.component */ "./src/app/stocks/stock-profile/summary-tab/summary-tab.component.ts");
/* harmony import */ var _app_stocks_stock_profile_historical_tab_historical_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/stocks/stock-profile/historical-tab/historical-tab.component */ "./src/app/stocks/stock-profile/historical-tab/historical-tab.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");









function StockProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockProfileComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const stock_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.openStockProfile(stock_r3.symbol); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stock_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("crypto-item-green", stock_r3.changesPercentage > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stock_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stock_r3.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stock_r3.change);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", stock_r3.changesPercentage, "%");
} }
function StockProfileComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockProfileComponent_div_7_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.changeTab("summary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockProfileComponent_div_7_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.changeTab("historical"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Historical data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-summary-tab", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-historical-tab", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab === "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab === "historical");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedStock", ctx_r1.selectedStock)("hidden", ctx_r1.activeTab !== "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedStock", ctx_r1.selectedStock)("hidden", ctx_r1.activeTab !== "historical");
} }
function StockProfileComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please select a stock to view its information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class StockProfileComponent {
    constructor(stocksService, router, route) {
        this.stocksService = stocksService;
        this.router = router;
        this.route = route;
        this.activeTab = 'summary';
        this.multi = [
            {
                name: 'USA',
                series: [
                    {
                        name: '1990',
                        value: 250000000
                    },
                    {
                        name: '2009',
                        value: 109000000
                    },
                    {
                        name: '2010',
                        value: 309000000
                    },
                    {
                        name: '2011',
                        value: 311000000
                    }
                ]
            }
        ];
        this.view = [300, 150];
        // options
        this.referenceLines = [
            {
                name: '2009',
                value: 209000000
            }
        ];
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
    }
    ngOnInit() {
        var _a, _b, _c;
        this.stocksService.getIndices({}).subscribe(dt => {
            this.indices = dt;
        });
        this.selectedStock = (_c = (_b = (_a = this.route.snapshot) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b.symbol) === null || _c === void 0 ? void 0 : _c.toUpperCase();
    }
    changeTab(tab) {
        this.activeTab = tab;
    }
    openStockProfile(stock) {
        this.router.navigateByUrl('/test', { skipLocationChange: true }).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.router.navigate([`stocks/${stock}/analytics`]); }));
    }
}
StockProfileComponent.ɵfac = function StockProfileComponent_Factory(t) { return new (t || StockProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_stocks_service__WEBPACK_IMPORTED_MODULE_2__["StocksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
StockProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StockProfileComponent, selectors: [["app-stock-profile"]], decls: 9, vars: 3, consts: [[1, "stock-content"], [1, "major-indexes"], [1, "favorites"], [1, "crypto-content"], ["class", "crypto-item", 3, "crypto-item-green", "click", 4, "ngFor", "ngForOf"], ["class", "stock-tabs", 4, "ngIf"], [4, "ngIf"], [1, "crypto-item", 3, "click"], [1, "crypto-text-1"], [1, "crypto-text-2"], [1, "crypto-text-abs"], [1, "crypto-block"], [1, "stock-tabs"], [1, "nav", "nav-tabs"], ["data-toggle", "tab", 3, "click"], [1, "tab-content"], ["id", "summary"], [3, "selectedStock", "hidden"], ["id", "historical"]], template: function StockProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Major indexes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, StockProfileComponent_div_6_Template, 12, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, StockProfileComponent_div_7_Template, 13, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, StockProfileComponent_mat_error_8_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.indices);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedStock);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _app_stocks_stock_profile_summary_tab_summary_tab_component__WEBPACK_IMPORTED_MODULE_5__["SummaryTabComponent"], _app_stocks_stock_profile_historical_tab_historical_tab_component__WEBPACK_IMPORTED_MODULE_6__["HistoricalTabComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: [".crypto-section[_ngcontent-%COMP%] {\n  background: #0E1D43 0 0 no-repeat padding-box;\n  width: 100%;\n  padding: 60px 200px;\n  margin: -1.75rem auto;\n  min-height: calc(100vh - 2px);\n}\n.crypto-section[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #FFFFFF;\n  font-size: 24px;\n  font-weight: bold;\n  flex-wrap: wrap;\n}\n.crypto-section[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.crypto-section[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.crypto-section[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #F53C6F;\n}\n.crypto-content[_ngcontent-%COMP%] {\n  padding: 32px 0 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n.crypto-item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 200px;\n  height: 179px;\n  margin-bottom: 32px;\n  background: #F53C6F 0 0 no-repeat padding-box;\n  padding: 24px 8px;\n  border: 1px dashed transparent;\n  transition: 0.2s;\n  margin-right: 13px;\n  cursor: pointer;\n}\n.crypto-item[_ngcontent-%COMP%]:hover {\n  border: 1px dashed #FFFFFF;\n}\n.crypto-item[_ngcontent-%COMP%]   .cryptoRemove[_ngcontent-%COMP%], .crypto-item[_ngcontent-%COMP%]   .stock-follow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  cursor: pointer;\n}\n.crypto-item[_ngcontent-%COMP%]   .cryptoRemove[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .crypto-item[_ngcontent-%COMP%]   .stock-follow[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.crypto-item[_ngcontent-%COMP%]   .cryptoRemove[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .crypto-item[_ngcontent-%COMP%]   .stock-follow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 16px;\n  transition: 0.1s;\n}\n.crypto-item[_ngcontent-%COMP%]   .stock-follow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  color: white;\n  text-transform: uppercase;\n  padding: 3px;\n  font-size: 9px;\n  border: 1px solid white;\n  font-weight: bold;\n  border-radius: 0px;\n}\n.addStockWrap[_ngcontent-%COMP%]   .crypto-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0D1B3E;\n  color: #FFFFFF;\n  border: 1px dashed #FFFFFF;\n  transition: 0.2s;\n  cursor: pointer;\n}\n.addStockWrap[_ngcontent-%COMP%]   .crypto-item[_ngcontent-%COMP%]:hover {\n  background: #2b4380;\n}\n.crypto-item-red[_ngcontent-%COMP%] {\n  background: #F53C6F;\n}\n.crypto-item-green[_ngcontent-%COMP%] {\n  background: #18B587;\n}\n.crypto-text-1[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 14px;\n  font-family: \"Muli-Light\";\n  margin-bottom: 4px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.crypto-text-2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 26px;\n  line-height: 26px;\n  font-family: \"Muli-Bold\";\n  margin-bottom: 4px;\n  position: relative;\n  margin-left: 6px;\n}\n.crypto-text-abs[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -5px;\n  top: -6px;\n  font-size: 16px;\n  font-family: \"Muli-Bold\";\n}\n.crypto-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 130px;\n}\n.crypto-map[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n.all-stocks[_ngcontent-%COMP%]   .mat-paginator[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n  font-family: \"Muli-Regular\";\n  font-size: 12px;\n}\napp-search-stocks-form[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\nselect[_ngcontent-%COMP%] {\n  background: transparent;\n  border-bottom: 1px solid #ffffff !important;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  font-family: \"Muli-Light\";\n  font-size: 18px;\n  color: #ffffff !important;\n}\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: #000000 !important;\n}\n.center-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stock-type-selector[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  max-width: 200px;\n  width: 100%;\n}\n@media (max-width: 1400px) {\n  .crypto-section[_ngcontent-%COMP%] {\n    padding: 60px 150px;\n  }\n}\n@media (max-width: 991px) {\n  .crypto-section[_ngcontent-%COMP%] {\n    padding: 60px 50px;\n    justify-content: space-around;\n  }\n\n  .crypto-content[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n}\n.stock-select[_ngcontent-%COMP%] {\n  width: 316px;\n  height: 51px;\n  background: #EEEEEE 0 0 no-repeat padding-box;\n  box-shadow: 0 0 6px #9A9A9A24;\n  color: #545454;\n  font-size: 16px;\n  padding: 16px;\n  font-family: \"Muli-Regular\";\n  outline: 0;\n  border: 0;\n  margin-right: 32px;\n}\n.my-stocks[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 51px;\n  box-shadow: 0 0 6px #9A9A9A24;\n  background: #F53C6F;\n  font-size: 16px;\n  font-family: \"Muli-Regular\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white !important;\n}\n.prospective-stocks[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 51px;\n  background: #F53C6F 0 0 no-repeat padding-box;\n  box-shadow: 0 0 6px #9A9A9A24;\n  background: #EEEEEE;\n  font-size: 16px;\n  font-family: \"Muli-Regular\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #545454 !important;\n}\n.stock-block[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 32px;\n}\n.stock-content-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.stock-btns[_ngcontent-%COMP%] {\n  display: flex;\n}\n.stock-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 35px;\n  padding: 5px;\n}\n.stock-tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n.stock-tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #F53C6F;\n}\n.stock-tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.small-chart-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n}\n@media (max-width: 991px) {\n  .stock-block[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .stock-select[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .stock-select[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .stock-btns[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .prospective-stocks[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tzL3N0b2NrLXByb2ZpbGUvQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxzdG9ja3MtbGlzdHNcXHN0b2Nrcy1saXN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RvY2tzL3N0b2NrLXByb2ZpbGUvc3RvY2stcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RvY2tzL3N0b2NrLXByb2ZpbGUvQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcc3RvY2tzXFxzdG9jay1wcm9maWxlXFxzdG9jay1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksNkNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FDRko7QURJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNGUjtBRElRO0VBQ0ksU0FBQTtBQ0ZaO0FES1E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSFo7QURLWTtFQUNJLGNBQUE7QUNIaEI7QURVQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNQSjtBRFVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNQSjtBRFVJO0VBQ0ksMEJBQUE7QUNSUjtBRFdJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNUUjtBRFlZO0VBQ0ksZUFBQTtBQ1ZoQjtBRGNRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1paO0FEaUJRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2ZaO0FEc0JJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ25CUjtBRHFCUTtFQUNJLG1CQUFBO0FDbkJaO0FEeUJBO0VBQ0ksbUJBQUE7QUN0Qko7QUR5QkE7RUFDSSxtQkFBQTtBQ3RCSjtBRHlCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FDdEJKO0FEeUJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDdEJKO0FEeUJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ3RCSjtBRHlCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ3RCSjtBRHlCQTtFQUNJLFdBQUE7QUN0Qko7QUQwQkE7RUFDSSxvQkFBQTtBQ3ZCSjtBRDJCSTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQ3hCUjtBRDRCQTtFQUNJLDRCQUFBO0FDekJKO0FENEJBO0VBQ0ksdUJBQUE7RUFFQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDMUJKO0FENEJJO0VBQ0ksYUFBQTtBQzFCUjtBRDZCSTtFQUNJLHlCQUFBO0FDM0JSO0FEZ0NBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUM3Qko7QURnQ0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUM3Qko7QURnQ0E7RUFDSTtJQUNJLG1CQUFBO0VDN0JOO0FBQ0Y7QURnQ0E7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsNkJBQUE7RUM5Qk47O0VEZ0NFO0lBQ0ksNkJBQUE7RUM3Qk47QUFDRjtBQ2hNQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBRGtNSjtBQy9MQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURrTUo7QUMvTEE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QURrTUo7QUMvTEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QURrTUo7QUMvTEE7RUFDSSxXQUFBO0FEa01KO0FDL0xBO0VBQ0ksYUFBQTtBRGtNSjtBQzlMSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FEaU1SO0FDOUxJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FEZ01SO0FDN0xJO0VBQ0ksbUJBQUE7QUQrTFI7QUM3TFE7RUFDSSxZQUFBO0FEK0xaO0FDMUxBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUQ2TEo7QUMxTEE7RUFDSTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VENkxOOztFQzNMRTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFRDhMTjtBQUNGO0FDM0xBO0VBQ0k7SUFDSSxVQUFBO0VENkxOOztFQzNMRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VEOExOOztFQzVMRTtJQUNJLGdCQUFBO0VEK0xOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zdG9ja3Mvc3RvY2stcHJvZmlsZS9zdG9jay1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAnbWl4aW5zJztcclxuXHJcbi5jcnlwdG8tc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEUxRDQzIDAgMCBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDYwcHggMjAwcHg7XHJcbiAgICBtYXJnaW46IC0xLjc1cmVtIGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMnB4KTtcclxuXHJcbiAgICAudG9wLXdyYXAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRjUzQzZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLmNyeXB0by1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDMycHggMCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNyeXB0by1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTc5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Y1M0M2RiAwIDAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgcGFkZGluZzogMjRweCA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuY3J5cHRvUmVtb3ZlLCAuc3RvY2stZm9sbG93IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stZm9sbG93IHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5hZGRTdG9ja1dyYXAge1xyXG4gICAgLmNyeXB0by1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzBEMUIzRTtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI0ZGRkZGRjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyYjQzODA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmNyeXB0by1pdGVtLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjUzQzZGO1xyXG59XHJcblxyXG4uY3J5cHRvLWl0ZW0tZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzE4QjU4NztcclxufVxyXG5cclxuLmNyeXB0by10ZXh0LTEge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ011bGktTGlnaHQnO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLmNyeXB0by10ZXh0LTIge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1Cb2xkJztcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5jcnlwdG8tdGV4dC1hYnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTVweDtcclxuICAgIHRvcDogLTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1Cb2xkJztcclxufVxyXG5cclxuLmNyeXB0by1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMzBweDtcclxufVxyXG5cclxuLmNyeXB0by1tYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWxsLXN0b2NrcyB7XHJcbiAgICAubWF0LXBhZ2luYXRvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1SZWd1bGFyJztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFwcC1zZWFyY2gtc3RvY2tzLWZvcm0ge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLy9ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1MaWdodCc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBvcHRpb24ge1xyXG4gICAgICAgIGNvbG9yOiAkYmxhY2sgIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5jZW50ZXItZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0b2NrLXR5cGUtc2VsZWN0b3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgLmNyeXB0by1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiA2MHB4IDE1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5jcnlwdG8tc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogNjBweCA1MHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gICAgLmNyeXB0by1jb250ZW50IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxufVxyXG4iLCIuY3J5cHRvLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMEUxRDQzIDAgMCBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2MHB4IDIwMHB4O1xuICBtYXJnaW46IC0xLjc1cmVtIGF1dG87XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAycHgpO1xufVxuLmNyeXB0by1zZWN0aW9uIC50b3Atd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jcnlwdG8tc2VjdGlvbiAudG9wLXdyYXAgaDIge1xuICBtYXJnaW46IDA7XG59XG4uY3J5cHRvLXNlY3Rpb24gLnRvcC13cmFwIGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jcnlwdG8tc2VjdGlvbiAudG9wLXdyYXAgaTpob3ZlciB7XG4gIGNvbG9yOiAjRjUzQzZGO1xufVxuXG4uY3J5cHRvLWNvbnRlbnQge1xuICBwYWRkaW5nOiAzMnB4IDAgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY3J5cHRvLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxNzlweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgYmFja2dyb3VuZDogI0Y1M0M2RiAwIDAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBwYWRkaW5nOiAyNHB4IDhweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jcnlwdG8taXRlbTpob3ZlciB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjRkZGRkZGO1xufVxuLmNyeXB0by1pdGVtIC5jcnlwdG9SZW1vdmUsIC5jcnlwdG8taXRlbSAuc3RvY2stZm9sbG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jcnlwdG8taXRlbSAuY3J5cHRvUmVtb3ZlOmhvdmVyIHNwYW4sIC5jcnlwdG8taXRlbSAuc3RvY2stZm9sbG93OmhvdmVyIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY3J5cHRvLWl0ZW0gLmNyeXB0b1JlbW92ZSBzcGFuLCAuY3J5cHRvLWl0ZW0gLnN0b2NrLWZvbGxvdyBzcGFuIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cbi5jcnlwdG8taXRlbSAuc3RvY2stZm9sbG93IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogM3B4O1xuICBmb250LXNpemU6IDlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5hZGRTdG9ja1dyYXAgLmNyeXB0by1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwRDFCM0U7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBkYXNoZWQgI0ZGRkZGRjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkZFN0b2NrV3JhcCAuY3J5cHRvLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMmI0MzgwO1xufVxuXG4uY3J5cHRvLWl0ZW0tcmVkIHtcbiAgYmFja2dyb3VuZDogI0Y1M0M2Rjtcbn1cblxuLmNyeXB0by1pdGVtLWdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzE4QjU4Nztcbn1cblxuLmNyeXB0by10ZXh0LTEge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJNdWxpLUxpZ2h0XCI7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLmNyeXB0by10ZXh0LTIge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uY3J5cHRvLXRleHQtYWJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNXB4O1xuICB0b3A6IC02cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XG59XG5cbi5jcnlwdG8tYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLmNyeXB0by1tYXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uYWxsLXN0b2NrcyAubWF0LXBhZ2luYXRvciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktUmVndWxhclwiO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmFwcC1zZWFyY2gtc3RvY2tzLWZvcm0ge1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1MaWdodFwiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5zZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuc2VsZWN0IG9wdGlvbiB7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50ZXItZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN0b2NrLXR5cGUtc2VsZWN0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5jcnlwdG8tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNjBweCAxNTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jcnlwdG8tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNjBweCA1MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG5cbiAgLmNyeXB0by1jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxufVxuLnN0b2NrLXNlbGVjdCB7XG4gIHdpZHRoOiAzMTZweDtcbiAgaGVpZ2h0OiA1MXB4O1xuICBiYWNrZ3JvdW5kOiAjRUVFRUVFIDAgMCBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDAgMCA2cHggIzlBOUE5QTI0O1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJNdWxpLVJlZ3VsYXJcIjtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG5cbi5teS1zdG9ja3Mge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTFweDtcbiAgYm94LXNoYWRvdzogMCAwIDZweCAjOUE5QTlBMjQ7XG4gIGJhY2tncm91bmQ6ICNGNTNDNkY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnByb3NwZWN0aXZlLXN0b2NrcyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA1MXB4O1xuICBiYWNrZ3JvdW5kOiAjRjUzQzZGIDAgMCBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDAgMCA2cHggIzlBOUE5QTI0O1xuICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktUmVndWxhclwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM1NDU0NTQgIWltcG9ydGFudDtcbn1cblxuLnN0b2NrLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLnN0b2NrLWNvbnRlbnQtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdG9jay1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnN0b2NrLXRhYnMgbGkge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5zdG9jay10YWJzIGEge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnN0b2NrLXRhYnMgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNGNTNDNkY7XG59XG4uc3RvY2stdGFicyAuYWN0aXZlIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zbWFsbC1jaGFydC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zdG9jay1ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuc3RvY2stc2VsZWN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5zdG9jay1zZWxlY3Qge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAuc3RvY2stYnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAucHJvc3BlY3RpdmUtc3RvY2tzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3RvY2tzLWxpc3RzL3N0b2Nrcy1saXN0cy5jb21wb25lbnQnO1xyXG5cclxuXHJcbi5zdG9jay1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDMxNnB4O1xyXG4gICAgaGVpZ2h0OiA1MXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0VFRUVFRSAwIDAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDZweCAjOUE5QTlBMjQ7XHJcbiAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNdWxpLVJlZ3VsYXJcIjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5teS1zdG9ja3Mge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDZweCAjOUE5QTlBMjQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjUzQzZGO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9zcGVjdGl2ZS1zdG9ja3Mge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Y1M0M2RiAwIDAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDZweCAjOUE5QTlBMjQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICM1NDU0NTQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0b2NrLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG59XHJcblxyXG4uc3RvY2stY29udGVudC1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdG9jay1idG5zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zdG9jay10YWJzIHtcclxuICAgIGxpIHtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjUzQzZGO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNtYWxsLWNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuc3RvY2stYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnN0b2NrLXNlbGVjdCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuc3RvY2stc2VsZWN0IHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLnN0b2NrLWJ0bnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnByb3NwZWN0aXZlLXN0b2NrcyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StockProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-stock-profile',
                templateUrl: './stock-profile.component.html',
                styleUrls: ['./stock-profile.component.scss']
            }]
    }], function () { return [{ type: _core_services_stocks_service__WEBPACK_IMPORTED_MODULE_2__["StocksService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/stocks/stock-profile/summary-tab/summary-tab.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/stocks/stock-profile/summary-tab/summary-tab.component.ts ***!
  \***************************************************************************/
/*! exports provided: SummaryTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryTabComponent", function() { return SummaryTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _core_helpers_normalizeTableColumnName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/helpers/normalizeTableColumnName */ "./src/app/core/helpers/normalizeTableColumnName.ts");
/* harmony import */ var _core_services_stocks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/stocks.service */ "./src/app/core/services/stocks.service.ts");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");











function SummaryTabComponent_mat_spinner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
} }
function SummaryTabComponent_ng_container_3_ng_container_7_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.normalizeColName(col_r6), "");
} }
function SummaryTabComponent_ng_container_3_ng_container_7_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const col_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10[col_r6], " ");
} }
function SummaryTabComponent_ng_container_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SummaryTabComponent_ng_container_3_ng_container_7_th_2_Template, 2, 1, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SummaryTabComponent_ng_container_3_ng_container_7_td_3_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", col_r6);
} }
function SummaryTabComponent_ng_container_3_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function SummaryTabComponent_ng_container_3_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function SummaryTabComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-charts-area-chart", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SummaryTabComponent_ng_container_3_ng_container_7_Template, 4, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SummaryTabComponent_ng_container_3_tr_8_Template, 1, 0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SummaryTabComponent_ng_container_3_tr_9_Template, 1, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx_r1.colorScheme)("legend", false)("showXAxisLabel", false)("showYAxisLabel", false)("autoScale", true)("xAxis", true)("yAxis", true)("results", ctx_r1.chartData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedStock.replace("^", ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r1.tableData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
function SummaryTabComponent_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No chart data found\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SummaryTabComponent {
    constructor(stocksService, loader) {
        this.stocksService = stocksService;
        this.loader = loader;
        this.colorScheme = {
            domain: ['#18B587', '#F53C6F']
        };
        // Table settings
        this.displayedColumns = ['symbol', 'name', 'price', 'change', 'changesPercentage', 'marketCap', 'open', 'volume'];
    }
    ngOnInit() {
        this.getStockInfo();
    }
    normalizeColName(col) {
        return Object(_core_helpers_normalizeTableColumnName__WEBPACK_IMPORTED_MODULE_2__["normalizeColName"])(col);
    }
    getStockInfo() {
        this.loader.dataLoading = true;
        this.stocksService.getStockChartData({ stock: this.selectedStock }).subscribe(dt => {
            this.chartData = dt.chart;
            this.tableData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](dt.table);
            this.loader.dataLoading = false;
        });
    }
}
SummaryTabComponent.ɵfac = function SummaryTabComponent_Factory(t) { return new (t || SummaryTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_stocks_service__WEBPACK_IMPORTED_MODULE_3__["StocksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"])); };
SummaryTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryTabComponent, selectors: [["app-summary-tab"]], inputs: { selectedStock: "selectedStock" }, decls: 5, vars: 3, consts: [[1, "table-chart-container"], [1, "loader"], [3, "diameter", 4, "ngIf"], [4, "ngIf"], [3, "diameter"], [1, "chart-container"], [3, "scheme", "legend", "showXAxisLabel", "showYAxisLabel", "autoScale", "xAxis", "yAxis", "results"], [1, "table-container"], [1, "selected-stock"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function SummaryTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SummaryTabComponent_mat_spinner_2_Template, 1, 1, "mat-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SummaryTabComponent_ng_container_3_Template, 10, 13, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SummaryTabComponent_mat_error_4_Template, 2, 0, "mat-error", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader.dataLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chartData && ctx.chartData[0].series.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (!ctx.chartData || ctx.chartData[0].series.length === 0) && !ctx.loader.dataLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["AreaChartComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".table-chart-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.table-chart-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table-chart-container[_ngcontent-%COMP%]   .selected-stock[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.table-chart-container[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  margin-top: 50px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n.table-chart-container[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tzL3N0b2NrLXByb2ZpbGUvc3VtbWFyeS10YWIvQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcc3RvY2tzXFxzdG9jay1wcm9maWxlXFxzdW1tYXJ5LXRhYlxcc3VtbWFyeS10YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0b2Nrcy9zdG9jay1wcm9maWxlL3N1bW1hcnktdGFiL3N1bW1hcnktdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0hSO0FET1E7RUFDSSxXQUFBO0FDTFo7QURTSTtFQUNJLGNBQUE7QUNQUjtBRFVJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDUlI7QURVUTtFQUNJLHFCQUFBO0FDUloiLCJmaWxlIjoic3JjL2FwcC9zdG9ja3Mvc3RvY2stcHJvZmlsZS9zdW1tYXJ5LXRhYi9zdW1tYXJ5LXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG4udGFibGUtY2hhcnQtY29udGFpbmVyIHtcclxuICAgIC5sb2FkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlbGVjdGVkLXN0b2NrIHtcclxuICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhcnQtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLnRhYmxlLWNoYXJ0LWNvbnRhaW5lciAubG9hZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnRhYmxlLWNoYXJ0LWNvbnRhaW5lciAudGFibGUtY29udGFpbmVyIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGFibGUtY2hhcnQtY29udGFpbmVyIC5zZWxlY3RlZC1zdG9jayB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnRhYmxlLWNoYXJ0LWNvbnRhaW5lciAuY2hhcnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRhYmxlLWNoYXJ0LWNvbnRhaW5lciAuY2hhcnQtY29udGFpbmVyIGgxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-summary-tab',
                templateUrl: './summary-tab.component.html',
                styleUrls: ['./summary-tab.component.scss']
            }]
    }], function () { return [{ type: _core_services_stocks_service__WEBPACK_IMPORTED_MODULE_3__["StocksService"] }, { type: _core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }]; }, { selectedStock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['selectedStock']
        }] }); })();


/***/ }),

/***/ "./src/app/stocks/stocks-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/stocks/stocks-routing.module.ts ***!
  \*************************************************/
/*! exports provided: StocksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksRoutingModule", function() { return StocksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_stocks_stock_profile_stock_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/stocks/stock-profile/stock-profile.component */ "./src/app/stocks/stock-profile/stock-profile.component.ts");





const routes = [
    {
        path: 'analytics',
        component: _app_stocks_stock_profile_stock_profile_component__WEBPACK_IMPORTED_MODULE_2__["StockProfileComponent"],
        data: {
            title: 'Stock profile',
        }
    },
    {
        path: ':symbol/analytics',
        component: _app_stocks_stock_profile_stock_profile_component__WEBPACK_IMPORTED_MODULE_2__["StockProfileComponent"],
        data: {
            title: 'Stock profile',
        }
    },
];
class StocksRoutingModule {
}
StocksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StocksRoutingModule });
StocksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StocksRoutingModule_Factory(t) { return new (t || StocksRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StocksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StocksRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/stocks/stocks.module.ts":
/*!*****************************************!*\
  !*** ./src/app/stocks/stocks.module.ts ***!
  \*****************************************/
/*! exports provided: StocksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksModule", function() { return StocksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _stocks_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stocks-routing.module */ "./src/app/stocks/stocks-routing.module.ts");
/* harmony import */ var _app_stocks_stock_profile_stock_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/stocks/stock-profile/stock-profile.component */ "./src/app/stocks/stock-profile/stock-profile.component.ts");
/* harmony import */ var _app_stocks_stock_profile_summary_tab_summary_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/stocks/stock-profile/summary-tab/summary-tab.component */ "./src/app/stocks/stock-profile/summary-tab/summary-tab.component.ts");
/* harmony import */ var _app_stocks_stock_profile_historical_tab_historical_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/stocks/stock-profile/historical-tab/historical-tab.component */ "./src/app/stocks/stock-profile/historical-tab/historical-tab.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");









class StocksModule {
}
StocksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StocksModule });
StocksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StocksModule_Factory(t) { return new (t || StocksModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _stocks_routing_module__WEBPACK_IMPORTED_MODULE_2__["StocksRoutingModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StocksModule, { declarations: [_app_stocks_stock_profile_stock_profile_component__WEBPACK_IMPORTED_MODULE_3__["StockProfileComponent"],
        _app_stocks_stock_profile_summary_tab_summary_tab_component__WEBPACK_IMPORTED_MODULE_4__["SummaryTabComponent"],
        _app_stocks_stock_profile_historical_tab_historical_tab_component__WEBPACK_IMPORTED_MODULE_5__["HistoricalTabComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _stocks_routing_module__WEBPACK_IMPORTED_MODULE_2__["StocksRoutingModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StocksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_stocks_stock_profile_stock_profile_component__WEBPACK_IMPORTED_MODULE_3__["StockProfileComponent"],
                    _app_stocks_stock_profile_summary_tab_summary_tab_component__WEBPACK_IMPORTED_MODULE_4__["SummaryTabComponent"],
                    _app_stocks_stock_profile_historical_tab_historical_tab_component__WEBPACK_IMPORTED_MODULE_5__["HistoricalTabComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _stocks_routing_module__WEBPACK_IMPORTED_MODULE_2__["StocksRoutingModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=stocks-stocks-module-es2015.js.map