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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tzL3N0b2NrLXByb2ZpbGUvaGlzdG9yaWNhbC10YWIvQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXBwXFxzdG9ja3NcXHN0b2NrLXByb2ZpbGVcXGhpc3RvcmljYWwtdGFiXFxoaXN0b3JpY2FsLXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RvY2tzL3N0b2NrLXByb2ZpbGUvaGlzdG9yaWNhbC10YWIvaGlzdG9yaWNhbC10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zdG9ja3Mvc3RvY2stcHJvZmlsZS9oaXN0b3JpY2FsLXRhYi9oaXN0b3JpY2FsLXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
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
/* harmony import */ var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/subject.service */ "./src/app/core/services/subject.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _shared_components_stocks_tiles_stock_tiles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/stocks-tiles/stock-tiles.component */ "./src/app/shared/components/stocks-tiles/stock-tiles.component.ts");
/* harmony import */ var _app_stocks_stock_profile_summary_tab_summary_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/stocks/stock-profile/summary-tab/summary-tab.component */ "./src/app/stocks/stock-profile/summary-tab/summary-tab.component.ts");
/* harmony import */ var _app_stocks_stock_profile_historical_tab_historical_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/stocks/stock-profile/historical-tab/historical-tab.component */ "./src/app/stocks/stock-profile/historical-tab/historical-tab.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");












function StockProfileComponent_mat_spinner_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 25);
} }
function StockProfileComponent_app_stock_tiles_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-stock-tiles", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stocks", ctx_r1.indices)("dragDropDisabled", true)("followingAllowed", false)("stockProfileAllowed", true);
} }
function StockProfileComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockProfileComponent_div_8_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.changeTab("summary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockProfileComponent_div_8_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.changeTab("historical"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Historical data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-summary-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-historical-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r2.activeTab === "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r2.activeTab === "historical");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedStock", ctx_r2.selectedStock)("hidden", ctx_r2.activeTab !== "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedStock", ctx_r2.selectedStock)("hidden", ctx_r2.activeTab !== "historical");
} }
function StockProfileComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please select a tile to view its information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class StockProfileComponent {
    constructor(stocksService, router, route, subject) {
        this.stocksService = stocksService;
        this.router = router;
        this.route = route;
        this.subject = subject;
        this.activeTab = 'summary';
        this.dataLoading = 'idle';
    }
    ngOnInit() {
        var _a, _b, _c;
        this.dataLoading = 'loading';
        this.subject.currentIndices.subscribe(dt => {
            if (dt.length > 0) {
                this.dataLoading = 'finished';
                this.indices = dt;
            }
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
StockProfileComponent.ɵfac = function StockProfileComponent_Factory(t) { return new (t || StockProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_stocks_service__WEBPACK_IMPORTED_MODULE_2__["StocksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"])); };
StockProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StockProfileComponent, selectors: [["app-stock-profile"]], decls: 10, vars: 4, consts: [[1, "stock-content"], [1, "major-indexes"], [1, "stocks-list-container"], [1, "spinner-container"], [3, "diameter", 4, "ngIf"], [3, "stocks", "dragDropDisabled", "followingAllowed", "stockProfileAllowed", 4, "ngIf"], ["class", "stock-tabs", 4, "ngIf"], [4, "ngIf"], [3, "diameter"], [3, "stocks", "dragDropDisabled", "followingAllowed", "stockProfileAllowed"], [1, "stock-tabs"], [1, "nav", "nav-tabs"], ["data-toggle", "tab", 3, "click"], [1, "tab-content"], ["id", "summary"], [3, "selectedStock", "hidden"], ["id", "historical"]], template: function StockProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Major indexes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, StockProfileComponent_mat_spinner_6_Template, 1, 1, "mat-spinner", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, StockProfileComponent_app_stock_tiles_7_Template, 1, 4, "app-stock-tiles", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, StockProfileComponent_div_8_Template, 13, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, StockProfileComponent_mat_error_9_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataLoading === "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.indices == null ? null : ctx.indices.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedStock && ctx.dataLoading === "finished");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _shared_components_stocks_tiles_stock_tiles_component__WEBPACK_IMPORTED_MODULE_7__["StockTilesComponent"], _app_stocks_stock_profile_summary_tab_summary_tab_component__WEBPACK_IMPORTED_MODULE_8__["SummaryTabComponent"], _app_stocks_stock_profile_historical_tab_historical_tab_component__WEBPACK_IMPORTED_MODULE_9__["HistoricalTabComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]], styles: [".stock-select[_ngcontent-%COMP%] {\n  width: 316px;\n  height: 51px;\n  background: #EEEEEE 0 0 no-repeat padding-box;\n  box-shadow: 0 0 6px #9A9A9A24;\n  color: #545454;\n  font-size: 16px;\n  padding: 16px;\n  font-family: \"Muli-Regular\";\n  outline: 0;\n  border: 0;\n  margin-right: 32px;\n}\n\n.my-stocks[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 51px;\n  box-shadow: 0 0 6px #9A9A9A24;\n  background: #F53C6F;\n  font-size: 16px;\n  font-family: \"Muli-Regular\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white !important;\n}\n\n.prospective-stocks[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 51px;\n  background: #F53C6F 0 0 no-repeat padding-box;\n  box-shadow: 0 0 6px #9A9A9A24;\n  background: #EEEEEE;\n  font-size: 16px;\n  font-family: \"Muli-Regular\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #545454 !important;\n}\n\n.stock-block[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 32px;\n}\n\n.stock-content[_ngcontent-%COMP%] {\n  padding-left: 50px;\n}\n\n.stock-content-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.stock-btns[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.stock-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.stock-tabs[_ngcontent-%COMP%] {\n  margin-top: 70px;\n}\n\n.stock-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 35px;\n  padding: 5px;\n}\n\n.stock-tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n\n.stock-tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #F53C6F;\n}\n\n.stock-tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.small-chart-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n}\n\n@media (max-width: 991px) {\n  .stock-block[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .stock-select[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 20px;\n  }\n}\n\n@media (max-width: 480px) {\n  .stock-select[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .stock-btns[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .prospective-stocks[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tzL3N0b2NrLXByb2ZpbGUvQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXBwXFxzdG9ja3NcXHN0b2NrLXByb2ZpbGVcXHN0b2NrLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0b2Nrcy9zdG9jay1wcm9maWxlL3N0b2NrLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ1I7O0FERUk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNBUjs7QURHSTtFQUNJLG1CQUFBO0FDRFI7O0FER1E7RUFDSSxZQUFBO0FDRFo7O0FETUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0hKOztBRE1BO0VBQ0k7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQ0hOOztFREtFO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0VDRk47QUFDRjs7QURLQTtFQUNJO0lBQ0ksVUFBQTtFQ0hOOztFREtFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUNGTjs7RURJRTtJQUNJLGdCQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3N0b2Nrcy9zdG9jay1wcm9maWxlL3N0b2NrLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvY2stc2VsZWN0IHtcclxuICAgIHdpZHRoOiAzMTZweDtcclxuICAgIGhlaWdodDogNTFweDtcclxuICAgIGJhY2tncm91bmQ6ICNFRUVFRUUgMCAwIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA2cHggIzlBOUE5QTI0O1xyXG4gICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4ubXktc3RvY2tzIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNTFweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA2cHggIzlBOUE5QTI0O1xyXG4gICAgYmFja2dyb3VuZDogI0Y1M0M2RjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk11bGktUmVndWxhclwiO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvc3BlY3RpdmUtc3RvY2tzIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNTFweDtcclxuICAgIGJhY2tncm91bmQ6ICNGNTNDNkYgMCAwIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA2cHggIzlBOUE5QTI0O1xyXG4gICAgYmFja2dyb3VuZDogI0VFRUVFRTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk11bGktUmVndWxhclwiO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNTQ1NDU0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdG9jay1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuLnN0b2NrLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uc3RvY2stY29udGVudC1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdG9jay1idG5zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zdG9jay1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN0b2NrLXRhYnMge1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y1M0M2RjtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zbWFsbC1jaGFydC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLnN0b2NrLWJsb2NrIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zdG9jay1zZWxlY3Qge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnN0b2NrLXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIC5zdG9jay1idG5zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5wcm9zcGVjdGl2ZS1zdG9ja3Mge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLnN0b2NrLXNlbGVjdCB7XG4gIHdpZHRoOiAzMTZweDtcbiAgaGVpZ2h0OiA1MXB4O1xuICBiYWNrZ3JvdW5kOiAjRUVFRUVFIDAgMCBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDAgMCA2cHggIzlBOUE5QTI0O1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJNdWxpLVJlZ3VsYXJcIjtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG5cbi5teS1zdG9ja3Mge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTFweDtcbiAgYm94LXNoYWRvdzogMCAwIDZweCAjOUE5QTlBMjQ7XG4gIGJhY2tncm91bmQ6ICNGNTNDNkY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnByb3NwZWN0aXZlLXN0b2NrcyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA1MXB4O1xuICBiYWNrZ3JvdW5kOiAjRjUzQzZGIDAgMCBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDAgMCA2cHggIzlBOUE5QTI0O1xuICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktUmVndWxhclwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM1NDU0NTQgIWltcG9ydGFudDtcbn1cblxuLnN0b2NrLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLnN0b2NrLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi5zdG9jay1jb250ZW50LWltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3RvY2stYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zdG9jay1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3RvY2stdGFicyB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG4uc3RvY2stdGFicyBsaSB7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLnN0b2NrLXRhYnMgYSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc3RvY2stdGFicyAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI0Y1M0M2Rjtcbn1cbi5zdG9jay10YWJzIC5hY3RpdmUgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNtYWxsLWNoYXJ0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnN0b2NrLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5zdG9jay1zZWxlY3Qge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnN0b2NrLXNlbGVjdCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5zdG9jay1idG5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5wcm9zcGVjdGl2ZS1zdG9ja3Mge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StockProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-stock-profile',
                templateUrl: './stock-profile.component.html',
                styleUrls: ['./stock-profile.component.scss']
            }]
    }], function () { return [{ type: _core_services_stocks_service__WEBPACK_IMPORTED_MODULE_2__["StocksService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"] }]; }, null); })();


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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_services_stocks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/stocks.service */ "./src/app/core/services/stocks.service.ts");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/subject.service */ "./src/app/core/services/subject.service.ts");
/* harmony import */ var _shared_pipes_update_user_stocks_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/pipes/update-user-stocks.pipe */ "./src/app/shared/pipes/update-user-stocks.pipe.ts");
/* harmony import */ var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/pipes/get-auth-user.pipe */ "./src/app/shared/pipes/get-auth-user.pipe.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");















function SummaryTabComponent_ng_container_3_ng_container_7_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.normalizeColName(col_r5), "");
} }
function SummaryTabComponent_ng_container_3_ng_container_7_td_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r9[col_r5]);
} }
function SummaryTabComponent_ng_container_3_ng_container_7_td_3_div_2_mat_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 21);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 15);
} }
function SummaryTabComponent_ng_container_3_ng_container_7_td_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SummaryTabComponent_ng_container_3_ng_container_7_td_3_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const element_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.updateUserStocks(element_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SummaryTabComponent_ng_container_3_ng_container_7_td_3_div_2_mat_spinner_3_Template, 1, 1, "mat-spinner", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r11.addedToWatchlist ? "red-bg" : "green-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r11.addedToWatchlist ? "Remove from" : "Add to") + " watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.processingStock);
} }
function SummaryTabComponent_ng_container_3_ng_container_7_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SummaryTabComponent_ng_container_3_ng_container_7_td_3_span_1_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SummaryTabComponent_ng_container_3_ng_container_7_td_3_div_2_Template, 4, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r5 !== "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r5 === "action");
} }
function SummaryTabComponent_ng_container_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SummaryTabComponent_ng_container_3_ng_container_7_th_2_Template, 2, 1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SummaryTabComponent_ng_container_3_ng_container_7_td_3_Template, 3, 2, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", col_r5);
} }
function SummaryTabComponent_ng_container_3_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
function SummaryTabComponent_ng_container_3_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
function SummaryTabComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-charts-area-chart", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SummaryTabComponent_ng_container_3_ng_container_7_Template, 4, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SummaryTabComponent_ng_container_3_tr_8_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SummaryTabComponent_ng_container_3_tr_9_Template, 1, 0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx_r0.colorScheme)("legend", false)("showXAxisLabel", false)("showYAxisLabel", false)("trimXAxisTicks", false)("maxXAxisTickLength", 5)("autoScale", true)("xAxis", true)("yAxis", true)("rotateXAxisTicks", false)("xAxisTickFormatting", ctx_r0.axisFormatting)("results", ctx_r0.chartData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedStock.replace("^", ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.tableData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
function SummaryTabComponent_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No chart data found\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SummaryTabComponent {
    constructor(stocksService, loader, subject, updateStocks, getAuthUser) {
        this.stocksService = stocksService;
        this.loader = loader;
        this.subject = subject;
        this.updateStocks = updateStocks;
        this.getAuthUser = getAuthUser;
        this.colorScheme = {
            domain: ['#18B587', '#F53C6F']
        };
        // Table settings
        this.displayedColumns = ['symbol', 'name', 'price', 'change', 'changesPercentage', 'marketCap', 'open', 'volume', 'action'];
        this.userStocks = [];
        this.addedToWatchlist = false;
        this.subscriptions = [];
        this.stocksUpdatedHere = false;
        this.processingStock = false;
    }
    ngOnInit() {
        this.getUserStocks();
        this.getStockInfo();
        this.authUser = this.getAuthUser.transform();
    }
    getUserStocks() {
        this.subject.currentUserStocks.subscribe((dt) => {
            this.userStocks = dt.stocks;
            this.addedToWatchlist = !!this.userStocks.find(us => us.symbol === this.selectedStock);
        });
    }
    getStockInfo() {
        this.loader.dataLoading = true;
        this.stocksService.getStockChartData({ stock: this.selectedStock }).subscribe(dt => {
            this.chartData = dt.chart;
            this.tableData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](dt.table);
            this.loader.dataLoading = false;
        });
    }
    axisFormatting(tick) {
        const xAxisComponent = this;
        const ticks = xAxisComponent.ticks;
        const tickPresent = ticks.find((t, i) => t === tick && moment__WEBPACK_IMPORTED_MODULE_3__(t, 'HH:mm:ss').minute() % 30 === 0);
        return tickPresent ? moment__WEBPACK_IMPORTED_MODULE_3__(tickPresent, 'HH:mm:ss').format('HH:mm A') : '';
    }
    normalizeColName(col) {
        return Object(_core_helpers_normalizeTableColumnName__WEBPACK_IMPORTED_MODULE_2__["normalizeColName"])(col);
    }
    isStockFollowed(stock) {
        return !!this.userStocks.find(s => s.name === stock.name);
    }
    updateUserStocks(stock) {
        this.processingStock = true;
        const removal = this.isStockFollowed(stock);
        const result = this.updateStocks.transform(this.userStocks, stock, removal);
        this.addedToWatchlist = !removal;
        this.loader.show();
        if (result) {
            this.subscriptions.push(this.stocksService.updateFollowedStocks({
                user_id: this.authUser.id,
                stocks: result
            }).subscribe(dt => {
                this.processingStock = false;
                this.userStocks = (dt === null || dt === void 0 ? void 0 : dt.user_stocks) || [];
                this.stocksUpdatedHere = true;
                this.loader.hide();
                this.subject.changeUserStocks({ stocks: this.userStocks, empty: this.userStocks.length === 0 });
            }));
        }
    }
}
SummaryTabComponent.ɵfac = function SummaryTabComponent_Factory(t) { return new (t || SummaryTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_stocks_service__WEBPACK_IMPORTED_MODULE_4__["StocksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_update_user_stocks_pipe__WEBPACK_IMPORTED_MODULE_7__["UpdateUserStocksPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__["GetAuthUserPipe"])); };
SummaryTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryTabComponent, selectors: [["app-summary-tab"]], inputs: { selectedStock: "selectedStock" }, decls: 5, vars: 4, consts: [[1, "loader-holder"], [3, "diameter", "hidden"], [1, "table-chart-container"], [4, "ngIf"], [1, "chart-container"], [3, "scheme", "legend", "showXAxisLabel", "showYAxisLabel", "trimXAxisTicks", "maxXAxisTickLength", "autoScale", "xAxis", "yAxis", "rotateXAxisTicks", "xAxisTickFormatting", "results"], [1, "table-container"], [1, "selected-stock"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["class", "action-column", 4, "ngIf"], [1, "action-column"], ["id", "watchlist-act-btn", 3, "ngClass", "click"], [3, "diameter", 4, "ngIf"], [3, "diameter"], ["mat-header-row", ""], ["mat-row", ""]], template: function SummaryTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SummaryTabComponent_ng_container_3_Template, 10, 17, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SummaryTabComponent_mat_error_4_Template, 2, 0, "mat-error", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50)("hidden", !ctx.loader.dataLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chartData && ctx.chartData[0].series.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (!ctx.chartData || ctx.chartData[0].series.length === 0) && !ctx.loader.dataLoading);
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["AreaChartComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]], styles: [".table-chart-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.table-chart-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table-chart-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .action-column[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.table-chart-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .action-column[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.table-chart-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   #watchlist-act-btn[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.table-chart-container[_ngcontent-%COMP%]   .selected-stock[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.table-chart-container[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  margin-top: 50px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n.table-chart-container[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tzL3N0b2NrLXByb2ZpbGUvc3VtbWFyeS10YWIvQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXBwXFxzdG9ja3NcXHN0b2NrLXByb2ZpbGVcXHN1bW1hcnktdGFiXFxzdW1tYXJ5LXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RvY2tzL3N0b2NrLXByb2ZpbGUvc3VtbWFyeS10YWIvc3VtbWFyeS10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDSFI7QURPUTtFQUNJLFdBQUE7QUNMWjtBRE9ZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDTGhCO0FET2dCO0VBQ0ksaUJBQUE7QUNMcEI7QURVUTtFQUNJLFlBQUE7QUNSWjtBRFlJO0VBQ0ksY0FBQTtBQ1ZSO0FEYUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNYUjtBRGFRO0VBQ0kscUJBQUE7QUNYWiIsImZpbGUiOiJzcmMvYXBwL3N0b2Nrcy9zdG9jay1wcm9maWxlL3N1bW1hcnktdGFiL3N1bW1hcnktdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAnbWl4aW5zJztcclxuXHJcbi50YWJsZS1jaGFydC1jb250YWluZXIge1xyXG4gICAgLmxvYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtY29udGFpbmVyIHtcclxuICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLmFjdGlvbi1jb2x1bW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgbWF0LXNwaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjd2F0Y2hsaXN0LWFjdC1idG4ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3RlZC1zdG9jayB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi50YWJsZS1jaGFydC1jb250YWluZXIgLmxvYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi50YWJsZS1jaGFydC1jb250YWluZXIgLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRhYmxlLWNoYXJ0LWNvbnRhaW5lciAudGFibGUtY29udGFpbmVyIHRhYmxlIC5hY3Rpb24tY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50YWJsZS1jaGFydC1jb250YWluZXIgLnRhYmxlLWNvbnRhaW5lciB0YWJsZSAuYWN0aW9uLWNvbHVtbiBtYXQtc3Bpbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLnRhYmxlLWNoYXJ0LWNvbnRhaW5lciAudGFibGUtY29udGFpbmVyICN3YXRjaGxpc3QtYWN0LWJ0biB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi50YWJsZS1jaGFydC1jb250YWluZXIgLnNlbGVjdGVkLXN0b2NrIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4udGFibGUtY2hhcnQtY29udGFpbmVyIC5jaGFydC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFibGUtY2hhcnQtY29udGFpbmVyIC5jaGFydC1jb250YWluZXIgaDEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-summary-tab',
                templateUrl: './summary-tab.component.html',
                styleUrls: ['./summary-tab.component.scss']
            }]
    }], function () { return [{ type: _core_services_stocks_service__WEBPACK_IMPORTED_MODULE_4__["StocksService"] }, { type: _core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"] }, { type: _shared_pipes_update_user_stocks_pipe__WEBPACK_IMPORTED_MODULE_7__["UpdateUserStocksPipe"] }, { type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__["GetAuthUserPipe"] }]; }, { selectedStock: [{
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