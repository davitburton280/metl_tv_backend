function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Zxoc:function(t,e,n){"use strict";n.r(e),n.d(e,"StocksModule",(function(){return U}));var o=n("ofXK"),c=n("tyNb"),a=n("fXoL"),i=n("sAj1"),r=n("+0xr");function s(t){return(t="".concat(t[0].toUpperCase()).concat(t.slice(1)).replace(/([A-Z])/g," $1").trim()).replace(/_/g," ")}var l=n("lwos"),p=n("Xa2L"),b=n("zQsl"),d=n("kmnG");function f(t,e){1&t&&a.Sb(0,"mat-spinner",4),2&t&&a.uc("diameter",50)}function g(t,e){if(1&t&&(a.Xb(0,"th",16),a.Rc(1),a.Wb()),2&t){var n=a.nc().$implicit,o=a.nc(2);a.Cb(1),a.Tc(" ",o.normalizeColName(n),"")}}function m(t,e){if(1&t&&(a.Xb(0,"td",17),a.Rc(1),a.Wb()),2&t){var n=e.$implicit,o=a.nc().$implicit;a.Cb(1),a.Tc(" ",n[o]," ")}}function u(t,e){if(1&t&&(a.Vb(0),a.Vb(1,13),a.Pc(2,g,2,1,"th",14),a.Pc(3,m,2,1,"td",15),a.Ub(),a.Ub()),2&t){var n=e.$implicit;a.Cb(1),a.uc("matColumnDef",n)}}function h(t,e){1&t&&a.Sb(0,"tr",18)}function C(t,e){1&t&&a.Sb(0,"tr",19)}function P(t,e){if(1&t&&(a.Vb(0),a.Xb(1,"div",5),a.Sb(2,"ngx-charts-area-chart",6),a.Wb(),a.Xb(3,"div",7),a.Xb(4,"h1",8),a.Rc(5),a.Wb(),a.Xb(6,"table",9),a.Pc(7,u,4,1,"ng-container",10),a.Pc(8,h,1,0,"tr",11),a.Pc(9,C,1,0,"tr",12),a.Wb(),a.Wb(),a.Ub()),2&t){var n=a.nc();a.Cb(2),a.uc("scheme",n.colorScheme)("legend",!1)("showXAxisLabel",!1)("showYAxisLabel",!1)("autoScale",!0)("xAxis",!0)("yAxis",!0)("results",n.chartData),a.Cb(3),a.Sc(n.selectedStock.replace("^","")),a.Cb(1),a.uc("dataSource",n.tableData),a.Cb(1),a.uc("ngForOf",n.displayedColumns),a.Cb(1),a.uc("matHeaderRowDef",n.displayedColumns),a.Cb(1),a.uc("matRowDefColumns",n.displayedColumns)}}function y(t,e){1&t&&(a.Xb(0,"mat-error"),a.Rc(1,"No chart data found\n"),a.Wb())}var x,k=((x=function(){function t(e,n){_classCallCheck(this,t),this.stocksService=e,this.loader=n,this.colorScheme={domain:["#18B587","#F53C6F"]},this.displayedColumns=["symbol","name","price","change","changesPercentage","marketCap","open","volume"]}return _createClass(t,[{key:"ngOnInit",value:function(){this.getStockInfo()}},{key:"normalizeColName",value:function(t){return s(t)}},{key:"getStockInfo",value:function(){var t=this;this.loader.dataLoading=!0,this.stocksService.getStockChartData({stock:this.selectedStock}).subscribe((function(e){t.chartData=e.chart,t.tableData=new r.k(e.table),t.loader.dataLoading=!1}))}}]),t}()).\u0275fac=function(t){return new(t||x)(a.Rb(i.a),a.Rb(l.a))},x.\u0275cmp=a.Lb({type:x,selectors:[["app-summary-tab"]],inputs:{selectedStock:"selectedStock"},decls:5,vars:3,consts:[[1,"table-chart-container"],[1,"loader"],[3,"diameter",4,"ngIf"],[4,"ngIf"],[3,"diameter"],[1,"chart-container"],[3,"scheme","legend","showXAxisLabel","showYAxisLabel","autoScale","xAxis","yAxis","results"],[1,"table-container"],[1,"selected-stock"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],[4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(a.Xb(0,"div",0),a.Xb(1,"div",1),a.Pc(2,f,1,1,"mat-spinner",2),a.Wb(),a.Pc(3,P,10,13,"ng-container",3),a.Wb(),a.Pc(4,y,2,0,"mat-error",3)),2&t&&(a.Cb(2),a.uc("ngIf",e.loader.dataLoading),a.Cb(1),a.uc("ngIf",e.chartData&&e.chartData[0].series.length>0),a.Cb(1),a.uc("ngIf",!(e.chartData&&0!==e.chartData[0].series.length||e.loader.dataLoading)))},directives:[o.m,p.b,b.a,r.j,o.l,r.g,r.i,r.c,r.e,r.b,r.d,r.a,r.f,r.h,d.b],styles:[".table-chart-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}.table-chart-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.table-chart-container[_ngcontent-%COMP%]   .selected-stock[_ngcontent-%COMP%]{margin:20px 0}.table-chart-container[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]{width:100%;height:250px;margin-top:50px;display:grid;justify-content:center;align-items:center}.table-chart-container[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline-block}"]}),x),O=n("M9IT");function _(t,e){if(1&t&&(a.Xb(0,"th",10),a.Rc(1),a.Wb()),2&t){var n=a.nc().$implicit,o=a.nc(2);a.Cb(1),a.Tc(" ",o.normalizeColName(n),"")}}function v(t,e){if(1&t&&(a.Xb(0,"td",11),a.Rc(1),a.Wb()),2&t){var n=e.$implicit,o=a.nc().$implicit;a.Cb(1),a.Tc(" ",n[o]," ")}}function M(t,e){if(1&t&&(a.Vb(0),a.Vb(1,7),a.Pc(2,_,2,1,"th",8),a.Pc(3,v,2,1,"td",9),a.Ub(),a.Ub()),2&t){var n=e.$implicit;a.Cb(1),a.uc("matColumnDef",n)}}function w(t,e){1&t&&a.Sb(0,"tr",12)}function S(t,e){1&t&&a.Sb(0,"tr",13)}function X(t,e){if(1&t&&(a.Xb(0,"table",3),a.Pc(1,M,4,1,"ng-container",4),a.Pc(2,w,1,0,"tr",5),a.Pc(3,S,1,0,"tr",6),a.Wb()),2&t){var n=a.nc();a.uc("dataSource",n.tableData),a.Cb(1),a.uc("ngForOf",n.displayedColumns),a.Cb(1),a.uc("matHeaderRowDef",n.displayedColumns),a.Cb(1),a.uc("matRowDefColumns",n.displayedColumns)}}function D(t,e){1&t&&(a.Xb(0,"mat-error"),a.Rc(1,"No historical prices found"),a.Wb())}var R,W=((R=function(){function t(e){_classCallCheck(this,t),this.stocksService=e,this.displayedColumns=["date","price","change","changePercent","open","volume"],this.paginationValues=[10,25,100]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.stocksService.getStockHistoricalPrices({stock:this.selectedStock}).subscribe((function(e){t.tableData=new r.k(e.historical),t.tableData.paginator=t.paginator}))}},{key:"normalizeColName",value:function(t){return s(t)}}]),t}()).\u0275fac=function(t){return new(t||R)(a.Rb(i.a))},R.\u0275cmp=a.Lb({type:R,selectors:[["app-historical-tab"]],viewQuery:function(t,e){var n;1&t&&a.Wc(O.a,!0),2&t&&a.Dc(n=a.kc())&&(e.paginator=n.first)},inputs:{selectedStock:"selectedStock"},decls:3,vars:4,consts:[["mat-table","","class","mat-elevation-z8",3,"dataSource",4,"ngIf"],[3,"pageSizeOptions","hidden"],[4,"ngIf"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],[4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(a.Pc(0,X,4,4,"table",0),a.Sb(1,"mat-paginator",1),a.Pc(2,D,2,0,"mat-error",2)),2&t&&(a.uc("ngIf",e.tableData&&e.tableData.data.length),a.Cb(1),a.uc("pageSizeOptions",e.paginationValues)("hidden",!(null!=e.tableData&&e.tableData.data.length)),a.Cb(1),a.uc("ngIf",!(null!=e.tableData&&e.tableData.data.length)))},directives:[o.m,O.a,r.j,o.l,r.g,r.i,r.c,r.e,r.b,r.d,r.a,r.f,r.h,d.b],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),R);function z(t,e){if(1&t&&(a.Xb(0,"div",7),a.Xb(1,"p",8),a.Rc(2),a.Wb(),a.Xb(3,"p",9),a.Xb(4,"span",10),a.Rc(5,"$"),a.Wb(),a.Rc(6),a.Wb(),a.Xb(7,"div",11),a.Xb(8,"p",8),a.Rc(9),a.Wb(),a.Xb(10,"p",8),a.Rc(11),a.Wb(),a.Wb(),a.Wb()),2&t){var n=e.$implicit;a.Hb("crypto-item-green",n.changesPercentage>0),a.Cb(2),a.Sc(n.name),a.Cb(4),a.Sc(n.price),a.Cb(3),a.Sc(n.price),a.Cb(2),a.Tc("",n.changesPercentage,"%")}}function I(t,e){if(1&t){var n=a.Yb();a.Xb(0,"div",12),a.Xb(1,"ul",13),a.Xb(2,"li"),a.Xb(3,"a",14),a.jc("click",(function(){return a.Ic(n),a.nc().changeTab("summary")})),a.Rc(4," Summary"),a.Wb(),a.Wb(),a.Xb(5,"li"),a.Xb(6,"a",14),a.jc("click",(function(){return a.Ic(n),a.nc().changeTab("historical")})),a.Rc(7," Historical data"),a.Wb(),a.Wb(),a.Wb(),a.Xb(8,"div",15),a.Xb(9,"div",16),a.Sb(10,"app-summary-tab",17),a.Wb(),a.Xb(11,"div",18),a.Sb(12,"app-historical-tab",17),a.Wb(),a.Wb(),a.Wb()}if(2&t){var o=a.nc();a.Cb(2),a.Hb("active","summary"===o.activeTab),a.Cb(3),a.Hb("active","historical"===o.activeTab),a.Cb(5),a.uc("selectedStock",o.selectedStock)("hidden","summary"!==o.activeTab),a.Cb(2),a.uc("selectedStock",o.selectedStock)("hidden","historical"!==o.activeTab)}}function j(t,e){1&t&&(a.Xb(0,"mat-error"),a.Rc(1,"Please select a stock to view its information"),a.Wb())}var L,T,A,F=((L=function(){function t(e,n,o){_classCallCheck(this,t),this.stocksService=e,this.router=n,this.route=o,this.activeTab="summary",this.multi=[{name:"USA",series:[{name:"1990",value:25e7},{name:"2009",value:109e6},{name:"2010",value:309e6},{name:"2011",value:311e6}]}],this.view=[300,150],this.referenceLines=[{name:"2009",value:209e6}],this.colorScheme={domain:["#5AA454","#E44D25","#CFC0BB","#7aa3e5","#a8385d","#aae3f5"]}}return _createClass(t,[{key:"ngOnInit",value:function(){var t,e,n=this;this.stocksService.getIndices({}).subscribe((function(t){n.indices=t})),this.selectedStock=null===(e=null===(t=this.route.snapshot)||void 0===t?void 0:t.params)||void 0===e?void 0:e.symbol.toUpperCase()}},{key:"changeTab",value:function(t){this.activeTab=t}}]),t}()).\u0275fac=function(t){return new(t||L)(a.Rb(i.a),a.Rb(c.d),a.Rb(c.a))},L.\u0275cmp=a.Lb({type:L,selectors:[["app-stock-profile"]],decls:9,vars:3,consts:[[1,"stock-content"],[1,"major-indexes"],[1,"favorites"],[1,"crypto-content"],["class","crypto-item",3,"crypto-item-green",4,"ngFor","ngForOf"],["class","stock-tabs",4,"ngIf"],[4,"ngIf"],[1,"crypto-item"],[1,"crypto-text-1"],[1,"crypto-text-2"],[1,"crypto-text-abs"],[1,"crypto-block"],[1,"stock-tabs"],[1,"nav","nav-tabs"],["data-toggle","tab",3,"click"],[1,"tab-content"],["id","summary"],[3,"selectedStock","hidden"],["id","historical"]],template:function(t,e){1&t&&(a.Xb(0,"div",0),a.Xb(1,"div",1),a.Xb(2,"h2"),a.Rc(3,"Major indexes"),a.Wb(),a.Xb(4,"div",2),a.Xb(5,"div",3),a.Pc(6,z,12,6,"div",4),a.Wb(),a.Wb(),a.Wb(),a.Pc(7,I,13,8,"div",5),a.Pc(8,j,2,0,"mat-error",6),a.Wb()),2&t&&(a.Cb(6),a.uc("ngForOf",e.indices),a.Cb(1),a.uc("ngIf",e.selectedStock),a.Cb(1),a.uc("ngIf",!e.selectedStock))},directives:[o.l,o.m,k,W,d.b],styles:[".crypto-section[_ngcontent-%COMP%]{background:#0e1d43 0 0 no-repeat padding-box;width:100%;padding:60px 200px;margin:-1.75rem auto;min-height:calc(100vh - 2px)}.crypto-section[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;color:#fff;font-size:24px;font-weight:700}.crypto-section[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.crypto-section[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;cursor:pointer;transition:.2s}.crypto-section[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#f53c6f}.crypto-content[_ngcontent-%COMP%]{padding:32px 0 0;display:flex;justify-content:space-between;flex-wrap:wrap}.crypto-item[_ngcontent-%COMP%]{position:relative;width:200px;height:179px;margin-bottom:32px;background:#f53c6f 0 0 no-repeat padding-box;padding:24px 8px;border:1px dashed transparent;transition:.2s}.crypto-item[_ngcontent-%COMP%]:hover{border:1px dashed #fff}.crypto-item[_ngcontent-%COMP%]   .cryptoRemove[_ngcontent-%COMP%], .crypto-item[_ngcontent-%COMP%]   .stock-follow[_ngcontent-%COMP%]{position:absolute;top:0;right:5px;cursor:pointer}.crypto-item[_ngcontent-%COMP%]   .cryptoRemove[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .crypto-item[_ngcontent-%COMP%]   .stock-follow[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{font-size:20px}.crypto-item[_ngcontent-%COMP%]   .cryptoRemove[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .crypto-item[_ngcontent-%COMP%]   .stock-follow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:16px;transition:.1s}.crypto-item[_ngcontent-%COMP%]   .stock-follow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;color:#fff;text-transform:uppercase;padding:3px;font-size:9px;border:1px solid #fff;font-weight:700;border-radius:0}.addStockWrap[_ngcontent-%COMP%]   .crypto-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background:#0d1b3e;color:#fff;border:1px dashed #fff;transition:.2s;cursor:pointer}.addStockWrap[_ngcontent-%COMP%]   .crypto-item[_ngcontent-%COMP%]:hover{background:#2b4380}.crypto-item-red[_ngcontent-%COMP%]{background:#f53c6f}.crypto-item-green[_ngcontent-%COMP%]{background:#18b587}.crypto-text-1[_ngcontent-%COMP%]{color:#fff;font-size:14px;font-family:Muli-Light;margin-bottom:4px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.crypto-text-2[_ngcontent-%COMP%]{color:#fff;font-size:26px;line-height:26px;font-family:Muli-Bold;margin-bottom:4px;position:relative;margin-left:6px}.crypto-text-abs[_ngcontent-%COMP%]{position:absolute;left:-5px;top:-6px;font-size:16px;font-family:Muli-Bold}.crypto-block[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:130px}.crypto-map[_ngcontent-%COMP%]{width:100%}.modal-dialog[_ngcontent-%COMP%]{margin:0!important}.all-stocks[_ngcontent-%COMP%]   .mat-paginator[_ngcontent-%COMP%]{background:transparent;color:#fff;font-family:Muli-Regular;font-size:12px}app-search-stocks-form[_ngcontent-%COMP%]{padding-top:10px!important}select[_ngcontent-%COMP%]{background:transparent;border-bottom:1px solid #fff!important;border-left:none;border-right:none;border-top:none;font-family:Muli-Light;font-size:18px;color:#fff!important}select[_ngcontent-%COMP%]:focus{outline:none}select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{color:#000!important}.center-group[_ngcontent-%COMP%]{display:flex;justify-content:center}@media (max-width:1400px){.crypto-section[_ngcontent-%COMP%]{padding:60px 150px}}@media (max-width:991px){.crypto-section[_ngcontent-%COMP%]{padding:60px 50px}.crypto-content[_ngcontent-%COMP%], .crypto-section[_ngcontent-%COMP%]{justify-content:space-around}}.stock-select[_ngcontent-%COMP%]{width:316px;height:51px;background:#eee 0 0 no-repeat padding-box;box-shadow:0 0 6px hsla(0,0%,60.4%,.14);color:#545454;font-size:16px;padding:16px;font-family:Muli-Regular;outline:0;border:0;margin-right:32px}.my-stocks[_ngcontent-%COMP%]{background:#f53c6f;color:#fff!important}.my-stocks[_ngcontent-%COMP%], .prospective-stocks[_ngcontent-%COMP%]{width:200px;height:51px;box-shadow:0 0 6px hsla(0,0%,60.4%,.14);font-size:16px;font-family:Muli-Regular;display:flex;justify-content:center;align-items:center}.prospective-stocks[_ngcontent-%COMP%]{background:#f53c6f 0 0 no-repeat padding-box;background:#eee;color:#545454!important}.stock-block[_ngcontent-%COMP%]{display:flex;margin-bottom:32px}.stock-content-img[_ngcontent-%COMP%]{width:100%}.stock-btns[_ngcontent-%COMP%]{display:flex}.stock-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:35px;padding:5px}.stock-tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;text-decoration:none}.stock-tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:#f53c6f}.stock-tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.small-chart-container[_ngcontent-%COMP%]{width:100%;height:150px}@media (max-width:991px){.stock-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.stock-select[_ngcontent-%COMP%]{margin-right:0;margin-bottom:20px}}@media (max-width:480px){.stock-select[_ngcontent-%COMP%]{width:80%}.stock-btns[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.prospective-stocks[_ngcontent-%COMP%]{margin-top:20px}}"]}),L),H=[{path:"analytics",component:F,data:{title:"Stock profile"}},{path:":symbol/analytics",component:F,data:{title:"Stock profile"}}],$=((T=function t(){_classCallCheck(this,t)}).\u0275mod=a.Pb({type:T}),T.\u0275inj=a.Ob({factory:function(t){return new(t||T)},imports:[[c.f.forChild(H)],c.f]}),T),N=n("PCNd"),U=((A=function t(){_classCallCheck(this,t)}).\u0275mod=a.Pb({type:A}),A.\u0275inj=a.Ob({factory:function(t){return new(t||A)},imports:[[o.c,$,b.b,N.a]]}),A)}}]);