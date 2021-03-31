(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["channels-channels-module"],{

/***/ "./src/app/channels/channels-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/channels/channels-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChannelsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsRoutingModule", function() { return ChannelsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_channels_show_channel_show_channel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/channels/show-channel/show-channel.component */ "./src/app/channels/show-channel/show-channel.component.ts");
/* harmony import */ var _app_channels_show_subscriptions_show_subscriptions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/channels/show-subscriptions/show-subscriptions.component */ "./src/app/channels/show-subscriptions/show-subscriptions.component.ts");






const routes = [
    {
        path: 'show',
        component: _app_channels_show_channel_show_channel_component__WEBPACK_IMPORTED_MODULE_2__["ShowChannelComponent"]
    },
    {
        path: 'subscriptions',
        component: _app_channels_show_subscriptions_show_subscriptions_component__WEBPACK_IMPORTED_MODULE_3__["ShowSubscriptionsComponent"]
    }
];
class ChannelsRoutingModule {
}
ChannelsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChannelsRoutingModule });
ChannelsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChannelsRoutingModule_Factory(t) { return new (t || ChannelsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChannelsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/channels/channels.module.ts":
/*!*********************************************!*\
  !*** ./src/app/channels/channels.module.ts ***!
  \*********************************************/
/*! exports provided: ChannelsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsModule", function() { return ChannelsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _channels_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channels-routing.module */ "./src/app/channels/channels-routing.module.ts");
/* harmony import */ var _show_channel_show_channel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-channel/show-channel.component */ "./src/app/channels/show-channel/show-channel.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_photo_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-photo-editor */ "./node_modules/ngx-photo-editor/__ivy_ngcc__/fesm2015/ngx-photo-editor.js");
/* harmony import */ var _show_subscriptions_show_subscriptions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-subscriptions/show-subscriptions.component */ "./src/app/channels/show-subscriptions/show-subscriptions.component.ts");
/* harmony import */ var _show_channel_channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-channel/channel-profile/channel-profile.component */ "./src/app/channels/show-channel/channel-profile/channel-profile.component.ts");
/* harmony import */ var _show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show-channel/watchlist-tab/watchlist-tab.component */ "./src/app/channels/show-channel/watchlist-tab/watchlist-tab.component.ts");
/* harmony import */ var _show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-channel/videos-tab/videos-tab.component */ "./src/app/channels/show-channel/videos-tab/videos-tab.component.ts");
/* harmony import */ var _show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./show-channel/playlists-tab/playlists-tab.component */ "./src/app/channels/show-channel/playlists-tab/playlists-tab.component.ts");
/* harmony import */ var _show_channel_about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./show-channel/about-tab/about-tab.component */ "./src/app/channels/show-channel/about-tab/about-tab.component.ts");













class ChannelsModule {
}
ChannelsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChannelsModule });
ChannelsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChannelsModule_Factory(t) { return new (t || ChannelsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _channels_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChannelsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_photo_editor__WEBPACK_IMPORTED_MODULE_5__["NgxPhotoEditorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChannelsModule, { declarations: [_show_channel_show_channel_component__WEBPACK_IMPORTED_MODULE_3__["ShowChannelComponent"], _show_subscriptions_show_subscriptions_component__WEBPACK_IMPORTED_MODULE_6__["ShowSubscriptionsComponent"], _show_channel_channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_7__["ChannelProfileComponent"], _show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_8__["WatchlistTabComponent"], _show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_9__["VideosTabComponent"], _show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_10__["PlaylistsTabComponent"], _show_channel_about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_11__["AboutTabComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _channels_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChannelsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ngx_photo_editor__WEBPACK_IMPORTED_MODULE_5__["NgxPhotoEditorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_show_channel_show_channel_component__WEBPACK_IMPORTED_MODULE_3__["ShowChannelComponent"], _show_subscriptions_show_subscriptions_component__WEBPACK_IMPORTED_MODULE_6__["ShowSubscriptionsComponent"], _show_channel_channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_7__["ChannelProfileComponent"], _show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_8__["WatchlistTabComponent"], _show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_9__["VideosTabComponent"], _show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_10__["PlaylistsTabComponent"], _show_channel_about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_11__["AboutTabComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _channels_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChannelsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    ngx_photo_editor__WEBPACK_IMPORTED_MODULE_5__["NgxPhotoEditorModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/channels/show-channel/about-tab/about-tab.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/channels/show-channel/about-tab/about-tab.component.ts ***!
  \************************************************************************/
/*! exports provided: AboutTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutTabComponent", function() { return AboutTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/channels.service */ "./src/app/core/services/channels.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AboutTabComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutTabComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutTabComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.editMode = !ctx_r5.editMode; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutTabComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.channelUser.channel.description);
} }
function AboutTabComponent_textarea_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "textarea", 11);
} }
function AboutTabComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutTabComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.saveChannelDescription(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutTabComponent {
    constructor(fb, channelService) {
        this.fb = fb;
        this.channelService = channelService;
        this.descriptionUpdated = false;
        this.editMode = false;
    }
    ngOnInit() {
        this.aboutForm = this.fb.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.aboutForm.patchValue(Object.assign({ username: this.channelUser.username }, this.channelUser.channel));
    }
    saveChannelDescription() {
        this.descriptionUpdated = true;
        this.channelService.saveDescription(this.aboutForm.value).subscribe(dt => {
            this.channelUser = dt;
            this.editMode = false;
        });
    }
}
AboutTabComponent.ɵfac = function AboutTabComponent_Factory(t) { return new (t || AboutTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_2__["ChannelsService"])); };
AboutTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutTabComponent, selectors: [["app-about-tab"]], inputs: { channelUser: "channelUser" }, decls: 12, vars: 10, consts: [[1, "about-tab"], ["id", "channel-about-form", 3, "formGroup"], [1, "info"], [4, "ngIf"], [1, "date"], ["class", "btn", 3, "click", 4, "ngIf"], ["class", "description", 4, "ngIf"], ["formControlName", "description", 4, "ngIf"], ["class", "save", 3, "click", 4, "ngIf"], [1, "btn", 3, "click"], [1, "description"], ["formControlName", "description"], [1, "save", 3, "click"]], template: function AboutTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutTabComponent_h2_3_Template, 2, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutTabComponent_button_8_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AboutTabComponent_div_9_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AboutTabComponent_textarea_10_Template, 1, 0, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AboutTabComponent_button_11_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.aboutForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.channelUser.channel == null ? null : ctx.channelUser.channel.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Joined ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 7, ctx.channelUser.channel.created_at, "d MMM, yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode && (ctx.channelUser == null ? null : ctx.channelUser.channel.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.descriptionUpdated && ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #18B587;\n  font-family: \"Muli-Bold\";\n}\n.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n}\n.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #545454;\n  font-family: \"Muli-Bold\";\n}\n.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 24px;\n  background: #18B587;\n  color: #FFFFFF;\n  padding: 4px 18px;\n  border-radius: 0;\n}\n.about-tab[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 24px;\n  background: #F4F4F4;\n  color: #545454;\n  font-size: 16px;\n}\n.about-tab[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 120px;\n}\n.about-tab[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  background: #C9C9C9;\n  color: #545454;\n  padding: 4px 18px;\n  border-radius: 0;\n}\n.about-tab[_ngcontent-%COMP%]   .save.active[_ngcontent-%COMP%] {\n  background: #18B587;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL2Fib3V0LXRhYi9DOlxccHJvamVjdHNcXHRyYWRpbmdcXGZyb250ZW5kL3NyY1xcYXBwXFxjaGFubmVsc1xcc2hvdy1jaGFubmVsXFxhYm91dC10YWJcXGFib3V0LXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL2Fib3V0LXRhYi9hYm91dC10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0FSO0FERVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FDQVo7QURHUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRFo7QURHWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUNEaEI7QURJWTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZoQjtBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0xSO0FEUUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ05SO0FEVUk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNSUjtBRFVRO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDUloiLCJmaWxlIjoic3JjL2FwcC9jaGFubmVscy9zaG93LWNoYW5uZWwvYWJvdXQtdGFiL2Fib3V0LXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC10YWIge1xyXG4gICAgLmluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzE4QjU4NztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMThweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgLy9ib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNhdmUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0M5QzlDOTtcclxuICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMThweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxOEI1ODc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuYWJvdXQtdGFiIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmFib3V0LXRhYiAuaW5mbyBoMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMxOEI1ODc7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xufVxuLmFib3V0LXRhYiAuaW5mbyAuZGF0ZSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWJvdXQtdGFiIC5pbmZvIC5kYXRlIHNwYW4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIjtcbn1cbi5hYm91dC10YWIgLmluZm8gLmRhdGUgLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZzogNHB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYWJvdXQtdGFiIC5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uYWJvdXQtdGFiIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwcHg7XG59XG4uYWJvdXQtdGFiIC5zYXZlIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgYmFja2dyb3VuZDogI0M5QzlDOTtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIHBhZGRpbmc6IDRweCAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmFib3V0LXRhYiAuc2F2ZS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xuICBjb2xvcjogI0ZGRkZGRjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-tab',
                templateUrl: './about-tab.component.html',
                styleUrls: ['./about-tab.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_2__["ChannelsService"] }]; }, { channelUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['channelUser']
        }] }); })();


/***/ }),

/***/ "./src/app/channels/show-channel/channel-profile/channel-profile.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/channels/show-channel/channel-profile/channel-profile.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChannelProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelProfileComponent", function() { return ChannelProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/global */ "./src/app/core/constants/global.ts");
/* harmony import */ var _core_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/users.service */ "./src/app/core/services/users.service.ts");
/* harmony import */ var _shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/base64-to-file.pipe */ "./src/app/shared/pipes/base64-to-file.pipe.ts");
/* harmony import */ var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/pipes/get-auth-user.pipe */ "./src/app/shared/pipes/get-auth-user.pipe.ts");
/* harmony import */ var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/channels.service */ "./src/app/core/services/channels.service.ts");
/* harmony import */ var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/subject.service */ "./src/app/core/services/subject.service.ts");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_photo_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-photo-editor */ "./node_modules/ngx-photo-editor/__ivy_ngcc__/fesm2015/ngx-photo-editor.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pipes/get-thumb-path.pipe */ "./src/app/shared/pipes/get-thumb-path.pipe.ts");













function ChannelProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChannelProfileComponent_div_1_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.coverChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-photo-editor", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function ChannelProfileComponent_div_1_Template_ngx_photo_editor_imageCropped_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.coverCropped($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChanedEvent", ctx_r0.coverChangedEvent)("autoCrop", false)("viewMode", 3);
} }
function ChannelProfileComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChannelProfileComponent_div_10_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.profileChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-photo-editor", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function ChannelProfileComponent_div_10_Template_ngx_photo_editor_imageCropped_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.profileCropped($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChanedEvent", ctx_r1.profileChangedEvent)("aspectRatio", 4 / 3)("viewMode", 1)("resizeToWidth", 500);
} }
function ChannelProfileComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 20);
} }
function ChannelProfileComponent_div_17_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_17_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.subscribeToChannel(ctx_r12.channelUser.channel); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChannelProfileComponent_div_17_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_17_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.subscribeToChannel(ctx_r14.channelUser.channel); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subscribed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChannelProfileComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChannelProfileComponent_div_17_a_2_Template, 2, 0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChannelProfileComponent_div_17_a_3_Template, 2, 0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.subscribedToChannel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.subscribedToChannel);
} }
class ChannelProfileComponent {
    constructor(usersService, base64ToFile, getAuthUser, channelService, subject, loader) {
        this.usersService = usersService;
        this.base64ToFile = base64ToFile;
        this.getAuthUser = getAuthUser;
        this.channelService = channelService;
        this.subject = subject;
        this.loader = loader;
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.subscribedToChannel = false;
        this.subscribersCount = 0;
    }
    ngOnInit() {
        this.checkChannelSubscription();
    }
    coverChangeEvent(event) {
        this.coverChangedEvent = event;
    }
    profileChangeEvent(event) {
        this.profileChangedEvent = event;
    }
    profileCropped(event) {
        this.profileBase64 = event.base64;
        const filename = `profile_${Date.now()}.jpg`;
        const fd = new FormData();
        fd.append('avatar_file', this.base64ToFile.transform(event.base64), filename);
        fd.append('avatar', filename);
        fd.append('id', this.authUser.id);
        this.loader.dataLoading = true;
        this.usersService.changeProfileImage(fd).subscribe((dt) => {
            this.changeAuthUserInfo(dt);
        });
    }
    coverCropped(event) {
        this.coverBase64 = event.base64;
        const fd = new FormData();
        const filename = `cover_${Date.now()}.jpg`;
        fd.append('cover_file', this.base64ToFile.transform(event.base64), filename);
        fd.append('cover', filename);
        fd.append('id', this.authUser.id);
        this.loader.dataLoading = true;
        this.usersService.changeCoverImage(fd).subscribe((dt) => {
            this.changeAuthUserInfo(dt);
        });
    }
    subscribeToChannel(channel) {
        console.log(channel);
        this.channelService.subscribeToChannel({ user_id: this.authUser.id, channel_id: channel.id }).subscribe(dt => {
            this.subscribedToChannel = dt.status === 'Subscribed';
            this.subscribersCount = dt.subscribers_count;
            this.channelService.getUserChannelSubscriptions({ user_id: this.authUser.id }).subscribe(d => {
                this.subject.setUserSubscriptions(d);
            });
        });
    }
    checkChannelSubscription() {
        // console.log(this.channelUser)
        this.channelService.checkChannelSubscription({
            user_id: this.authUser.id,
            channel_id: this.channelUser.channel.id
        }).subscribe(dt => {
            this.subscribedToChannel = dt.status === 'Subscribed';
            this.subscribersCount = dt.subscribers_count;
        });
    }
    changeAuthUserInfo(dt) {
        localStorage.setItem('token', dt.token);
        this.authUser = this.getAuthUser.transform();
        this.channelUser = this.authUser;
        this.loader.dataLoading = false;
    }
}
ChannelProfileComponent.ɵfac = function ChannelProfileComponent_Factory(t) { return new (t || ChannelProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_3__["Base64ToFilePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_4__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__["ChannelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"])); };
ChannelProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChannelProfileComponent, selectors: [["app-channel-profile"]], inputs: { channelUser: "channelUser", authUser: "authUser" }, decls: 18, vars: 14, consts: [[1, "profile-block"], [3, "hidden", 4, "ngIf"], ["for", "cover-image-input"], ["id", "cover-image", 3, "src"], [1, "sub-block"], [1, "d-flex", "align-items-center"], ["for", "profile-image-input"], ["id", "profile-image", 1, "avatar", 3, "src"], [1, "main-text-1"], [1, "main-text-4"], ["class", "loader", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], [3, "hidden"], ["type", "file", "id", "cover-image-input", 3, "change"], [3, "imageChanedEvent", "autoCrop", "viewMode", "imageCropped"], ["type", "file", "id", "profile-image-input", 3, "change"], [3, "imageChanedEvent", "aspectRatio", "viewMode", "resizeToWidth", "imageCropped"], [1, "loader"], [3, "diameter"], [1, "sub-bell", "fas", "fa-bell"], ["class", "subscribe-btn", 3, "click", 4, "ngIf"], ["class", "subscribe-btn subscribed", 3, "click", 4, "ngIf"], [1, "subscribe-btn", 3, "click"], [1, "subscribe-btn", "subscribed", 3, "click"]], template: function ChannelProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChannelProfileComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "getImgPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "getImgPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChannelProfileComponent_div_10_Template, 3, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChannelProfileComponent_div_16_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ChannelProfileComponent_div_17_Template, 4, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.channelUser.username === ctx.authUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 8, ctx.channelUser == null ? null : ctx.channelUser.cover, "covers"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 11, ctx.channelUser == null ? null : ctx.channelUser.avatar, "avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.channelUser.username === ctx.authUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.channelUser.channel.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.subscribersCount + " subscriber" + (ctx.subscribersCount === 1 ? "" : "s"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader.dataLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.channelUser.username !== ctx.authUser.username);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_photo_editor__WEBPACK_IMPORTED_MODULE_9__["NgxPhotoEditorComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_11__["GetThumbPathPipe"]], styles: [".loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 52px;\n  margin-left: 10px;\n  margin-top: -17px;\n}\n\nlabel[for=cover-image-input][_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL2NoYW5uZWwtcHJvZmlsZS9DOlxccHJvamVjdHNcXHRyYWRpbmdcXGZyb250ZW5kL3NyY1xcYXBwXFxjaGFubmVsc1xcc2hvdy1jaGFubmVsXFxjaGFubmVsLXByb2ZpbGVcXGNoYW5uZWwtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL2NoYW5uZWwtcHJvZmlsZS9jaGFubmVsLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGFubmVscy9zaG93LWNoYW5uZWwvY2hhbm5lbC1wcm9maWxlL2NoYW5uZWwtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbn1cclxuXHJcbmxhYmVsW2Zvcj1cImNvdmVyLWltYWdlLWlucHV0XCJdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi5sb2FkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogLTE3cHg7XG59XG5cbmxhYmVsW2Zvcj1jb3Zlci1pbWFnZS1pbnB1dF0ge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-channel-profile',
                templateUrl: './channel-profile.component.html',
                styleUrls: ['./channel-profile.component.scss']
            }]
    }], function () { return [{ type: _core_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }, { type: _shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_3__["Base64ToFilePipe"] }, { type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_4__["GetAuthUserPipe"] }, { type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__["ChannelsService"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"] }, { type: _core_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }]; }, { channelUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['channelUser']
        }], authUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['authUser']
        }] }); })();


/***/ }),

/***/ "./src/app/channels/show-channel/playlists-tab/playlists-tab.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/channels/show-channel/playlists-tab/playlists-tab.component.ts ***!
  \********************************************************************************/
/*! exports provided: PlaylistsTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistsTabComponent", function() { return PlaylistsTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/global */ "./src/app/core/constants/global.ts");
/* harmony import */ var _core_components_modals_add_playlist_dialog_add_playlist_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/modals/add-playlist-dialog/add-playlist-dialog.component */ "./src/app/core/components/modals/add-playlist-dialog/add-playlist-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/playlists.service */ "./src/app/core/services/playlists.service.ts");
/* harmony import */ var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/subject.service */ "./src/app/core/services/subject.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/video-filters/video-filters.component */ "./src/app/shared/components/video-filters/video-filters.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/pipes/get-thumb-path.pipe */ "./src/app/shared/pipes/get-thumb-path.pipe.ts");












function PlaylistsTabComponent_app_video_filters_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-video-filters", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function PlaylistsTabComponent_app_video_filters_0_Template_app_video_filters_filter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.getFilteredPlaylists($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlaylistsTabComponent_ng_container_2_table_3_tr_13_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function PlaylistsTabComponent_ng_container_2_table_3_tr_13_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Public");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function PlaylistsTabComponent_ng_container_2_table_3_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistsTabComponent_ng_container_2_table_3_tr_13_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const playlist_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.goToEditPage(playlist_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "getImgPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PlaylistsTabComponent_ng_container_2_table_3_tr_13_ng_container_11_Template, 5, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PlaylistsTabComponent_ng_container_2_table_3_tr_13_ng_container_12_Template, 5, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistsTabComponent_ng_container_2_table_3_tr_13_Template_span_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const playlist_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.goToEditPage(playlist_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistsTabComponent_ng_container_2_table_3_tr_13_Template_mat_icon_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const playlist_r8 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.removePlaylist(playlist_r8.id, ctx_r14.channelUser.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playlist_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, playlist_r8.thumbnail), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", playlist_r8.privacy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !playlist_r8.privacy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 10, playlist_r8.created_at, "d MMM, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 13, playlist_r8.updated_at, "d MMM, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r8.videos.length);
} }
function PlaylistsTabComponent_ng_container_2_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Playlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Created at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Last updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Video count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlaylistsTabComponent_ng_container_2_table_3_tr_13_Template, 29, 16, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.playlists);
} }
function PlaylistsTabComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistsTabComponent_ng_container_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.openAddPlaylistModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add New Playlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlaylistsTabComponent_ng_container_2_table_3_Template, 14, 1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.playlists.length > 0);
} }
function PlaylistsTabComponent_ng_container_3_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistsTabComponent_ng_container_3_ng_container_2_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const playlist_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.openPlaylistPage(playlist_r18, playlist_r18.videos[0] == null ? null : playlist_r18.videos[0].id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "getImgPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "playlist_play");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playlist_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, playlist_r18.thumbnail), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r18.videos.length + (playlist_r18.videos.length === 1 ? " video" : " videos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r18.description);
} }
function PlaylistsTabComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlaylistsTabComponent_ng_container_3_ng_container_2_div_1_Template, 17, 7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const playlist_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (playlist_r18 == null ? null : playlist_r18.videos == null ? null : playlist_r18.videos.length) > 0);
} }
function PlaylistsTabComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlaylistsTabComponent_ng_container_3_ng_container_2_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.playlists);
} }
function PlaylistsTabComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No playlists found for this channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PlaylistsTabComponent {
    constructor(router, playlistsService, subjectService, dialog) {
        this.router = router;
        this.playlistsService = playlistsService;
        this.subjectService = subjectService;
        this.dialog = dialog;
        this.playlists = [];
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.showFilters = false;
    }
    ngOnInit() {
        const s = localStorage.getItem('search');
        console.log(!s);
        if (!s) {
            this.getPlaylists();
        }
        else {
            this.getSearchResults(s);
        }
        this.subjectService.getToggleFiltersData().subscribe(dt => {
            this.showFilters = dt;
        });
    }
    getPlaylists() {
        this.playlistsService.get({ channel_id: this.channelUser.channel.id }).subscribe(dt => {
            this.playlists = dt;
        });
    }
    openAddPlaylistModal() {
        this.dialog.open(_core_components_modals_add_playlist_dialog_add_playlist_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AddPlaylistDialogComponent"], {
            data: { channel_id: this.channelUser.channel.id }
        })
            .afterClosed().subscribe(dt => {
            this.getPlaylists();
        });
    }
    openPlaylistPage(playlist, firstVideoId) {
        const route = 'videos/play';
        const params = { id: firstVideoId, playlist_id: playlist.id };
        this.router.navigate([route], { queryParams: params });
    }
    getSearchResults(s) {
        console.log(s);
        this.playlistsService.searchPlaylists({ search: s }).subscribe(dt => {
            this.playlists = dt;
        });
    }
    getFilteredPlaylists(e) {
        this.playlistsService.get({
            channel_id: this.channelUser.channel.id,
            filters: JSON.stringify(e)
        }).subscribe(dt => {
            this.playlists = dt;
        });
    }
    goToEditPage(playlist) {
        this.router.navigate(['playlists/single/' + playlist.id]);
    }
    removePlaylist(id, channelId) {
        this.playlistsService.removePlaylist({ id, channel_id: channelId }).subscribe(dt => {
            this.playlists = dt;
        });
    }
}
PlaylistsTabComponent.ɵfac = function PlaylistsTabComponent_Factory(t) { return new (t || PlaylistsTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_playlists_service__WEBPACK_IMPORTED_MODULE_4__["PlaylistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
PlaylistsTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaylistsTabComponent, selectors: [["app-playlists-tab"]], inputs: { channelUser: "channelUser", authUser: "authUser" }, decls: 6, vars: 4, consts: [[3, "filter", 4, "ngIf"], [1, "playlist-tab"], [4, "ngIf"], ["id", "no-playlists-found"], [3, "filter"], [1, "btn", "new-playlist", 3, "click"], [4, "ngFor", "ngForOf"], [1, "img-info"], [1, "thumbnail", 3, "src", "click"], [1, "info"], [1, "material-icons", 3, "click"], [3, "click"], [1, "playlists-items"], ["class", "item", 4, "ngIf"], [1, "item"], [1, "top-wrap", 3, "click"], [1, "thumbnail", 3, "src"], [1, "overlay-info"], [1, "icon"], [1, "material-icons"], [1, "video-count"]], template: function PlaylistsTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlaylistsTabComponent_app_video_filters_0_Template, 1, 0, "app-video-filters", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlaylistsTabComponent_ng_container_2_Template, 4, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlaylistsTabComponent_ng_container_3_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlaylistsTabComponent_span_5_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authUser.username === ctx.channelUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authUser.username !== ctx.channelUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playlists.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_8__["VideoFiltersComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_10__["GetThumbPathPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".playlist-tab[_ngcontent-%COMP%]   .new-playlist[_ngcontent-%COMP%] {\n  background: #18B587;\n  border-radius: 0;\n  color: #fff;\n  padding: 8px 24px;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  display: table;\n  margin: 24px 0;\n  width: 100%;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   .td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%]:hover {\n  color: #18B587;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  color: #545454;\n  font-family: \"Muli-Bold\";\n  font-size: 16px;\n  padding: 12px 0;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  margin-right: 12px !important;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 144px;\n  cursor: pointer;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  max-width: 240px;\n  font-size: 16px;\n  font-family: \"Muli-Bold\";\n  -webkit-line-clamp: 1;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 240px;\n  font-size: 12px;\n  font-weight: normal;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.playlists-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  flex: 0 0 calc(33.3% - 21px);\n  margin-right: 32px;\n  margin-bottom: 32px;\n  cursor: pointer;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3n+3) {\n  margin-right: 0;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 216px;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   .overlay-info[_ngcontent-%COMP%] {\n  padding: 16px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   .overlay-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #545454;\n  font-size: 16px;\n  font-weight: bold;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: #545454;\n  font-size: 15px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL3BsYXlsaXN0cy10YWIvQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcY2hhbm5lbHNcXHNob3ctY2hhbm5lbFxccGxheWxpc3RzLXRhYlxccGxheWxpc3RzLXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL3BsYXlsaXN0cy10YWIvcGxheWxpc3RzLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNBUjtBRElJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDRlI7QURJUTtFQUNJLGtCQUFBO0FDRlo7QURPZ0I7RUFDSSxnQkFBQTtBQ0xwQjtBRFVnQjtFQUNJLGlCQUFBO0FDUnBCO0FEU29CO0VBQ0ksZ0JBQUE7QUNQeEI7QURRd0I7RUFDSSxjQUFBO0FDTjVCO0FEWVk7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNWaEI7QURlb0I7RUFDSSxTQUFBO0FDYnhCO0FEaUJnQjtFQUNJLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDZnBCO0FEa0JnQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ2hCcEI7QURrQm9CO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNoQnhCO0FEbUJvQjtFQUNJLGlCQUFBO0FDakJ4QjtBRG1Cd0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDakI1QjtBRG9Cd0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDbEI1QjtBRDJCQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDeEJKO0FEeUJJO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ3ZCUjtBRHlCUTtFQUNJLGVBQUE7QUN2Qlo7QUR5QlE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUN2Qlo7QUR3Qlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUN0QmhCO0FEd0JZO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FDdEJoQjtBRHVCZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNyQnBCO0FEMEJRO0VBQ0ksZ0JBQUE7QUN4Qlo7QUR5Qlk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDdkJoQjtBRDBCWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUN4QmhCIiwiZmlsZSI6InNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL3BsYXlsaXN0cy10YWIvcGxheWxpc3RzLXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5bGlzdC10YWIge1xyXG4gICAgLm5ldy1wbGF5bGlzdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE4QjU4NztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAyNHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCAjQzlDOUM5O1xyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG5cclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAvL2JvcmRlci1yaWdodDogMXB4IHNvbGlkICNDOUM5Qzk7XHJcbiAgICAgICAgICAgICAgICAudGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE4QjU4NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGQsIHRoIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzlDOUM5O1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0M5QzlDOTtcclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9ib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pbWctaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wbGF5bGlzdHMtaXRlbXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLml0ZW17XHJcbiAgICAgICAgZmxleDogMCAwIGNhbGMoMzMuMyUgLSAyMXB4KTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKDNuKzMpe1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b3Atd3JhcHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIxNnB4O1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdmVybGF5LWluZm97XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMC4zOCk7XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmZve1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5wbGF5bGlzdC10YWIgLm5ldy1wbGF5bGlzdCB7XG4gIGJhY2tncm91bmQ6ICMxOEI1ODc7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMjRweDtcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAyNHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHI6bGFzdC1jaGlsZCAudGQge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0ZDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRkOmxhc3QtY2hpbGQgLm1hdGVyaWFsLWljb25zIHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGQ6bGFzdC1jaGlsZCAubWF0ZXJpYWwtaWNvbnM6aG92ZXIge1xuICBjb2xvcjogIzE4QjU4Nztcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGQsIC5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGgge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0ZDpsYXN0LWNoaWxkIC5tYXRlcmlhbC1pY29ucywgLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0aDpsYXN0LWNoaWxkIC5tYXRlcmlhbC1pY29ucyB7XG4gIG1hcmdpbjogMDtcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGQgLm1hdGVyaWFsLWljb25zLCAucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRoIC5tYXRlcmlhbC1pY29ucyB7XG4gIG1hcmdpbi1yaWdodDogMTJweCAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRkIC5pbWctaW5mbywgLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0aCAuaW1nLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGQgLmltZy1pbmZvIGltZywgLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0aCAuaW1nLWluZm8gaW1nIHtcbiAgd2lkdGg6IDE0NHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRkIC5pbWctaW5mbyAuaW5mbywgLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0aCAuaW1nLWluZm8gLmluZm8ge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGQgLmltZy1pbmZvIC5pbmZvIGgzLCAucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRoIC5pbWctaW5mbyAuaW5mbyBoMyB7XG4gIG1heC13aWR0aDogMjQwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRkIC5pbWctaW5mbyAuaW5mbyBwLCAucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRoIC5pbWctaW5mbyAuaW5mbyBwIHtcbiAgbWF4LXdpZHRoOiAyNDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGxheWxpc3RzLWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnBsYXlsaXN0cy1pdGVtcyAuaXRlbSB7XG4gIGZsZXg6IDAgMCBjYWxjKDMzLjMlIC0gMjFweCk7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlsaXN0cy1pdGVtcyAuaXRlbTpudGgtY2hpbGQoM24rMykge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ucGxheWxpc3RzLWl0ZW1zIC5pdGVtIC50b3Atd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMTZweDtcbn1cbi5wbGF5bGlzdHMtaXRlbXMgLml0ZW0gLnRvcC13cmFwIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnBsYXlsaXN0cy1pdGVtcyAuaXRlbSAudG9wLXdyYXAgLm92ZXJsYXktaW5mbyB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuLnBsYXlsaXN0cy1pdGVtcyAuaXRlbSAudG9wLXdyYXAgLm92ZXJsYXktaW5mbyBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5wbGF5bGlzdHMtaXRlbXMgLml0ZW0gLmluZm8ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLnBsYXlsaXN0cy1pdGVtcyAuaXRlbSAuaW5mbyBoMiB7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBsYXlsaXN0cy1pdGVtcyAuaXRlbSAuaW5mbyBwIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistsTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playlists-tab',
                templateUrl: './playlists-tab.component.html',
                styleUrls: ['./playlists-tab.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_4__["PlaylistsService"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { channelUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['channelUser']
        }], authUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['authUser']
        }] }); })();


/***/ }),

/***/ "./src/app/channels/show-channel/show-channel.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/channels/show-channel/show-channel.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowChannelComponent", function() { return ShowChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/global */ "./src/app/core/constants/global.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_channels_show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/channels/show-channel/watchlist-tab/watchlist-tab.component */ "./src/app/channels/show-channel/watchlist-tab/watchlist-tab.component.ts");
/* harmony import */ var _app_channels_show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/channels/show-channel/videos-tab/videos-tab.component */ "./src/app/channels/show-channel/videos-tab/videos-tab.component.ts");
/* harmony import */ var _app_channels_show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/channels/show-channel/playlists-tab/playlists-tab.component */ "./src/app/channels/show-channel/playlists-tab/playlists-tab.component.ts");
/* harmony import */ var _core_services_video_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/video.service */ "./src/app/core/services/video.service.ts");
/* harmony import */ var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/pipes/get-auth-user.pipe */ "./src/app/shared/pipes/get-auth-user.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/users.service */ "./src/app/core/services/users.service.ts");
/* harmony import */ var _shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/pipes/base64-to-file.pipe */ "./src/app/shared/pipes/base64-to-file.pipe.ts");
/* harmony import */ var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/subject.service */ "./src/app/core/services/subject.service.ts");
/* harmony import */ var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/channels.service */ "./src/app/core/services/channels.service.ts");
/* harmony import */ var _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/services/playlists.service */ "./src/app/core/services/playlists.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/components/categories/categories.component */ "./src/app/shared/components/categories/categories.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./channel-profile/channel-profile.component */ "./src/app/channels/show-channel/channel-profile/channel-profile.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./about-tab/about-tab.component */ "./src/app/channels/show-channel/about-tab/about-tab.component.ts");

























function ShowChannelComponent_ng_container_2_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowChannelComponent_ng_container_2_li_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const tab_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.changeActiveTab(tab_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", tab_r8 === ctx_r2.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", tab_r8.link, "-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#" + tab_r8.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r8.name);
} }
function ShowChannelComponent_ng_container_2_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ShowChannelComponent_ng_container_2_div_11_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.searchVideos(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowChannelComponent_ng_container_2_app_watchlist_tab_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-watchlist-tab");
} }
function ShowChannelComponent_ng_container_2_app_videos_tab_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-videos-tab", 3);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("channelUser", ctx_r5.channelUser)("authUser", ctx_r5.authUser);
} }
function ShowChannelComponent_ng_container_2_app_playlists_tab_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-playlists-tab", 3);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("channelUser", ctx_r6.channelUser)("authUser", ctx_r6.authUser);
} }
function ShowChannelComponent_ng_container_2_app_about_tab_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-about-tab", 19);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("channelUser", ctx_r7.channelUser);
} }
function ShowChannelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-channel-profile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShowChannelComponent_ng_container_2_li_5_Template, 3, 5, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowChannelComponent_ng_container_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.toggleFilters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "tune");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ShowChannelComponent_ng_container_2_div_11_Template, 3, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ShowChannelComponent_ng_container_2_app_watchlist_tab_12_Template, 1, 0, "app-watchlist-tab", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ShowChannelComponent_ng_container_2_app_videos_tab_13_Template, 1, 2, "app-videos-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ShowChannelComponent_ng_container_2_app_playlists_tab_14_Template, 1, 2, "app-playlists-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ShowChannelComponent_ng_container_2_app_about_tab_15_Template, 1, 1, "app-about-tab", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("channelUser", ctx_r0.channelUser)("authUser", ctx_r0.authUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allTabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.searchVideosForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filters-active", ctx_r0.showFilters);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeTab.name !== "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeTab.name === "Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeTab.name === "Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeTab.name === "Playlists");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeTab.name === "About");
} }
function ShowChannelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Channel with such name is not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ShowChannelComponent {
    constructor(videoService, getAuthUser, router, usersService, base64ToFile, route, fb, subjectService, channelService, playlistsService, subject, dialog) {
        this.videoService = videoService;
        this.getAuthUser = getAuthUser;
        this.router = router;
        this.usersService = usersService;
        this.base64ToFile = base64ToFile;
        this.route = route;
        this.fb = fb;
        this.subjectService = subjectService;
        this.channelService = channelService;
        this.playlistsService = playlistsService;
        this.subject = subject;
        this.dialog = dialog;
        this.owlOptions = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["OWL_OPTIONS"];
        this.watchlistVideos = [];
        this.activeTab = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["PROFILE_PAGE_TABS"][2];
        this.allTabs = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["PROFILE_PAGE_TABS"];
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.playlists = [];
        this.editMode = false;
        this.showFilters = false;
        this.authUser = this.getAuthUser.transform();
        this.passedUsername = this.route.snapshot.queryParams.username;
        this.searchVideosForm = this.fb.group({ search: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] });
    }
    ngOnInit() {
        localStorage.setItem('search', '');
        if (this.passedUsername) {
            this.usersService.getUserInfo({ username: this.passedUsername }).subscribe(dt => {
                if (dt) {
                    this.channelUser = dt;
                }
            });
        }
    }
    toggleFilters() {
        this.showFilters = !this.showFilters;
        this.subject.setToggleFiltersData(this.showFilters);
    }
    changeActiveTab(tab) {
        this.activeTab = tab;
        this.searchVideos();
        this.showFilters = false;
        this.subject.setToggleFiltersData(this.showFilters);
    }
    searchVideos() {
        const s = this.searchVideosForm.value;
        localStorage.setItem('search', s.search);
        this.showFilters = false;
        this.subject.setToggleFiltersData(this.showFilters);
        if (this.activeTab.name === 'Watchlist') {
            this.searchInVideosByAuthor(s.search);
        }
        else if (this.activeTab.name === 'Videos') {
            this.searchInUserVideos(s.search);
        }
        else if (this.activeTab.name === 'Playlists') {
            this.searchInPlaylists(s.search);
        }
    }
    searchInVideosByAuthor(s) {
        if (this.watchListTab) {
            this.watchListTab.getSearchResults(s);
        }
    }
    searchInUserVideos(s) {
        if (this.videosTab) {
            this.videosTab.getSearchResults(s);
        }
    }
    searchInPlaylists(s) {
        if (this.playlistsTab) {
            this.playlistsTab.getSearchResults(s);
        }
    }
    ngOnDestroy() {
    }
}
ShowChannelComponent.ɵfac = function ShowChannelComponent_Factory(t) { return new (t || ShowChannelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_6__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_7__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_10__["Base64ToFilePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_12__["ChannelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_playlists_service__WEBPACK_IMPORTED_MODULE_13__["PlaylistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"])); };
ShowChannelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowChannelComponent, selectors: [["app-show-channel"]], viewQuery: function ShowChannelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_app_channels_show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_3__["WatchlistTabComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_app_channels_show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_4__["VideosTabComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_app_channels_show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_5__["PlaylistsTabComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.watchListTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videosTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.playlistsTab = _t.first);
    } }, decls: 4, vars: 2, consts: [[1, "profile-list"], [4, "ngIf"], ["class", "channel-not-found", 4, "ngIf"], [3, "channelUser", "authUser"], [1, "watchlist", "pWatchlist"], [1, "profile-list", "user-profile-block"], ["id", "profileList", "role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["id", "search-videos-form", 3, "formGroup"], [1, "toggle-filters-btn"], ["type", "button", 1, "filter-toggle-btn", 3, "click"], ["class", "watchlist-search", 4, "ngIf"], [3, "channelUser", "authUser", 4, "ngIf"], [3, "channelUser", 4, "ngIf"], [1, "nav-item"], ["data-toggle", "tab", "role", "tab", "aria-controls", "pWatch", "aria-selected", "true", 1, "nav-link", 3, "id", "href", "click"], [1, "watchlist-search"], ["placeholder", "Search", "formControlName", "search", 1, "watchlist-input", 3, "keyup.enter"], [1, "fas", "fa-search"], [3, "channelUser"], [1, "channel-not-found"]], template: function ShowChannelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowChannelComponent_ng_container_2_Template, 16, 11, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShowChannelComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.channelUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.channelUser);
    } }, directives: [_shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_15__["CategoriesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_17__["ChannelProfileComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _app_channels_show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_3__["WatchlistTabComponent"], _app_channels_show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_4__["VideosTabComponent"], _app_channels_show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_5__["PlaylistsTabComponent"], _about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_19__["AboutTabComponent"]], styles: [".profile-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.subscribed[_ngcontent-%COMP%] {\n  background-color: #D6D6D6 !important;\n}\n\n#search-videos-form[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#search-videos-form[_ngcontent-%COMP%]   .toggle-filters-btn[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 20px;\n  padding-top: 4px;\n}\n\n#search-videos-form[_ngcontent-%COMP%]   .toggle-filters-btn[_ngcontent-%COMP%]   .filter-toggle-btn[_ngcontent-%COMP%] {\n  background-color: unset;\n  height: 23px;\n}\n\n#search-videos-form[_ngcontent-%COMP%]   .filters-active[_ngcontent-%COMP%] {\n  background-color: #18B587 !important;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNoYW5uZWxzXFxzaG93LWNoYW5uZWxcXHNob3ctY2hhbm5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL3Nob3ctY2hhbm5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksV0FBQTtBQ0ZSOztBRE1BO0VBQ0ksb0NBQUE7QUNISjs7QURNQTtFQUNJLGFBQUE7QUNISjs7QURLSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSFI7O0FES1E7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUNIWjs7QURPSTtFQUNJLG9DQUFBO0VBQ0EsY0UxQkE7QURxQlIiLCJmaWxlIjoic3JjL2FwcC9jaGFubmVscy9zaG93LWNoYW5uZWwvc2hvdy1jaGFubmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5wcm9maWxlLWJsb2NrIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnN1YnNjcmliZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RDZENiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jc2VhcmNoLXZpZGVvcy1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLnRvZ2dsZS1maWx0ZXJzLWJ0biB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuXHJcbiAgICAgICAgLmZpbHRlci10b2dnbGUtYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlcnMtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4gIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLnByb2ZpbGUtYmxvY2sgbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN1YnNjcmliZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZENkQ2ICFpbXBvcnRhbnQ7XG59XG5cbiNzZWFyY2gtdmlkZW9zLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI3NlYXJjaC12aWRlb3MtZm9ybSAudG9nZ2xlLWZpbHRlcnMtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuI3NlYXJjaC12aWRlb3MtZm9ybSAudG9nZ2xlLWZpbHRlcnMtYnRuIC5maWx0ZXItdG9nZ2xlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBoZWlnaHQ6IDIzcHg7XG59XG4jc2VhcmNoLXZpZGVvcy1mb3JtIC5maWx0ZXJzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOEI1ODcgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG59IiwiJHJlZDogI0Y1M0M2RjtcclxuJGdyZWVuOiAjMThCNTg3O1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowChannelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-channel',
                templateUrl: './show-channel.component.html',
                styleUrls: ['./show-channel.component.scss']
            }]
    }], function () { return [{ type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_6__["VideoService"] }, { type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_7__["GetAuthUserPipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _core_services_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"] }, { type: _shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_10__["Base64ToFilePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"] }, { type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_12__["ChannelsService"] }, { type: _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_13__["PlaylistsService"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] }]; }, { watchListTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_app_channels_show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_3__["WatchlistTabComponent"]]
        }], videosTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_app_channels_show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_4__["VideosTabComponent"]]
        }], playlistsTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_app_channels_show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_5__["PlaylistsTabComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/channels/show-channel/videos-tab/videos-tab.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/channels/show-channel/videos-tab/videos-tab.component.ts ***!
  \**************************************************************************/
/*! exports provided: VideosTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosTabComponent", function() { return VideosTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/global */ "./src/app/core/constants/global.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/video.service */ "./src/app/core/services/video.service.ts");
/* harmony import */ var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/subject.service */ "./src/app/core/services/subject.service.ts");
/* harmony import */ var _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/filter-out-falsy-values-from-object.pipe */ "./src/app/shared/pipes/filter-out-falsy-values-from-object.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_video_carousel_holder_video_carousel_holder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/video-carousel-holder/video-carousel-holder.component */ "./src/app/shared/components/video-carousel-holder/video-carousel-holder.component.ts");
/* harmony import */ var _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/video-filters/video-filters.component */ "./src/app/shared/components/video-filters/video-filters.component.ts");










function VideosTabComponent_app_video_filters_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-video-filters", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function VideosTabComponent_app_video_filters_0_Template_app_video_filters_filter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.getFilteredVideos($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VideosTabComponent {
    constructor(router, videoService, subjectService, getExactParams) {
        this.router = router;
        this.videoService = videoService;
        this.subjectService = subjectService;
        this.getExactParams = getExactParams;
        this.owlOptions = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["OWL_OPTIONS"];
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.showFilters = false;
        this.search = '';
        this.filters = null;
        this.userVideos = [];
        this.videosLoaded = false;
    }
    ngOnInit() {
        this.subjectService.getToggleFiltersData().subscribe(dt => {
            this.showFilters = dt;
        });
    }
    getUserVideos(params) {
        params = this.getExactParams.transform(params);
        params.user_id = this.channelUser.id;
        this.videoService.getUserVideos(params).subscribe(dt => {
            this.videosLoaded = true;
            this.channelUser.videos = dt === null || dt === void 0 ? void 0 : dt.videos;
        });
    }
    getSearchResults(s) {
        this.search = s;
        this.getUserVideos({ search: this.search, filters: this.filters });
    }
    getFilteredVideos(e) {
        this.filters = e;
        this.getUserVideos({ search: this.search, filters: this.filters });
    }
}
VideosTabComponent.ɵfac = function VideosTabComponent_Factory(t) { return new (t || VideosTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterOutFalsyValuesFromObjectPipe"])); };
VideosTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosTabComponent, selectors: [["app-videos-tab"]], inputs: { channelUser: "channelUser", authUser: "authUser" }, decls: 2, vars: 5, consts: [[3, "filter", 4, "ngIf"], [3, "videos", "title", "detailsSource", "removable"], [3, "filter"]], template: function VideosTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideosTabComponent_app_video_filters_0_Template, 1, 0, "app-video-filters", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-video-carousel-holder", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videos", ctx.channelUser.videos)("title", "Recent videos")("detailsSource", ctx.channelUser)("removable", ctx.authUser.username === ctx.channelUser.username);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_video_carousel_holder_video_carousel_holder_component__WEBPACK_IMPORTED_MODULE_7__["VideoCarouselHolderComponent"], _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_8__["VideoFiltersComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL3Nob3ctY2hhbm5lbC92aWRlb3MtdGFiL3ZpZGVvcy10YWIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideosTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-videos-tab',
                templateUrl: './videos-tab.component.html',
                styleUrls: ['./videos-tab.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"] }, { type: _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterOutFalsyValuesFromObjectPipe"] }]; }, { channelUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['channelUser']
        }], authUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['authUser']
        }] }); })();


/***/ }),

/***/ "./src/app/channels/show-channel/watchlist-tab/watchlist-tab.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/channels/show-channel/watchlist-tab/watchlist-tab.component.ts ***!
  \********************************************************************************/
/*! exports provided: WatchlistTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistTabComponent", function() { return WatchlistTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/global */ "./src/app/core/constants/global.ts");
/* harmony import */ var _core_services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/video.service */ "./src/app/core/services/video.service.ts");
/* harmony import */ var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/subject.service */ "./src/app/core/services/subject.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/filter-out-falsy-values-from-object.pipe */ "./src/app/shared/pipes/filter-out-falsy-values-from-object.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/video-filters/video-filters.component */ "./src/app/shared/components/video-filters/video-filters.component.ts");
/* harmony import */ var _shared_components_video_carousel_holder_video_carousel_holder_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/video-carousel-holder/video-carousel-holder.component */ "./src/app/shared/components/video-carousel-holder/video-carousel-holder.component.ts");










function WatchlistTabComponent_app_video_filters_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-video-filters", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function WatchlistTabComponent_app_video_filters_0_Template_app_video_filters_filter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getFilteredVideos($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchlistTabComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-video-carousel-holder", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const videoList_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videos", videoList_r4.videos)("title", videoList_r4.full_name)("detailsSource", videoList_r4);
} }
function WatchlistTabComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchlistTabComponent_ng_container_1_ng_container_1_Template, 2, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const videoList_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", videoList_r4.videos.length > 0);
} }
class WatchlistTabComponent {
    constructor(videoService, subjectService, router, getExactParams) {
        this.videoService = videoService;
        this.subjectService = subjectService;
        this.router = router;
        this.getExactParams = getExactParams;
        this.watchlistVideos = [];
        this.owlOptions = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["OWL_OPTIONS"];
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.subscriptions = [];
        this.showFilters = false;
        this.filters = null;
    }
    ngOnInit() {
        this.watchlistVideos = [];
        this.search = localStorage.getItem('search');
        this.getAllVideosByAuthors({ search: this.search, filters: this.filters });
        this.getFiltersToggleState();
    }
    getFiltersToggleState() {
        this.subscriptions.push(this.subjectService.getToggleFiltersData().subscribe(dt => {
            this.showFilters = dt;
        }));
    }
    getAllVideosByAuthors(params) {
        params = this.getExactParams.transform(params);
        console.log(params);
        this.subscriptions.push(this.videoService.getVideosByAuthor(params).subscribe(dt => {
            this.watchlistVideos = dt;
        }));
    }
    getFilteredVideos(filters) {
        this.filters = filters;
        this.getAllVideosByAuthors({ search: this.search, filters });
    }
    getSearchResults(search) {
        this.search = search;
        console.log('get search results');
        this.getAllVideosByAuthors({ search, filters: this.filters });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
WatchlistTabComponent.ɵfac = function WatchlistTabComponent_Factory(t) { return new (t || WatchlistTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterOutFalsyValuesFromObjectPipe"])); };
WatchlistTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchlistTabComponent, selectors: [["app-watchlist-tab"]], decls: 2, vars: 2, consts: [[3, "filter", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "filter"], [4, "ngIf"], [3, "videos", "title", "detailsSource"]], template: function WatchlistTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WatchlistTabComponent_app_video_filters_0_Template, 1, 0, "app-video-filters", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchlistTabComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.watchlistVideos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_7__["VideoFiltersComponent"], _shared_components_video_carousel_holder_video_carousel_holder_component__WEBPACK_IMPORTED_MODULE_8__["VideoCarouselHolderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL3Nob3ctY2hhbm5lbC93YXRjaGxpc3QtdGFiL3dhdGNobGlzdC10YWIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchlistTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-watchlist-tab',
                templateUrl: './watchlist-tab.component.html',
                styleUrls: ['./watchlist-tab.component.scss']
            }]
    }], function () { return [{ type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterOutFalsyValuesFromObjectPipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/channels/show-subscriptions/show-subscriptions.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/channels/show-subscriptions/show-subscriptions.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ShowSubscriptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSubscriptionsComponent", function() { return ShowSubscriptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/global */ "./src/app/core/constants/global.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/channels.service */ "./src/app/core/services/channels.service.ts");
/* harmony import */ var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/pipes/get-auth-user.pipe */ "./src/app/shared/pipes/get-auth-user.pipe.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ShowSubscriptionsComponent_ul_0_li_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const channel_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.apiUrl + "uploads/avatars/" + channel_r2.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ShowSubscriptionsComponent_ul_0_li_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/img/default-user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ShowSubscriptionsComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowSubscriptionsComponent_ul_0_li_1_img_2_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShowSubscriptionsComponent_ul_0_li_1_img_3_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "17k watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "250 video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed sda,sasddswd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", channel_r2.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !channel_r2.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r2.name);
} }
function ShowSubscriptionsComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowSubscriptionsComponent_ul_0_li_1_Template, 16, 3, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.userChannels.subscriptions);
} }
class ShowSubscriptionsComponent {
    constructor(channelsService, getAuthUser, auth) {
        this.channelsService = channelsService;
        this.getAuthUser = getAuthUser;
        this.auth = auth;
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.authUser = this.getAuthUser.transform();
    }
    ngOnInit() {
        this.channelsService.getSubscriptions({ user_id: this.authUser.id }).subscribe(dt => {
            this.userChannels = dt;
        });
    }
    getUploadDateTime(datetime) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(datetime).format('MMM DD, YYYY');
    }
}
ShowSubscriptionsComponent.ɵfac = function ShowSubscriptionsComponent_Factory(t) { return new (t || ShowSubscriptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_3__["ChannelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_4__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
ShowSubscriptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowSubscriptionsComponent, selectors: [["app-show-subscriptions"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "channel-item", 4, "ngFor", "ngForOf"], [1, "channel-item"], [1, "thumbnail"], ["class", "avatar", 3, "src", 4, "ngIf"], [1, "info"], [1, "name"], [1, "shortened-details"], [1, "watchers-count"], [1, "dot"], [1, "videos-count"], [1, "avatar", 3, "src"]], template: function ShowSubscriptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShowSubscriptionsComponent_ul_0_Template, 2, 1, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userChannels);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".channel-item[_ngcontent-%COMP%] {\n  display: flex;\n  width: 936px;\n  margin-bottom: 32px;\n}\n.channel-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 240px !important;\n  height: 240px;\n}\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #545454;\n  font-size: 24px;\n  font-family: \"Muli-Bold\";\n}\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  margin-left: 26px;\n  margin-top: -3px;\n}\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Muli-Light\";\n}\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%], .channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .videos-count[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #818181;\n}\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .videos-count[_ngcontent-%COMP%] {\n  margin-left: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1zdWJzY3JpcHRpb25zL0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNoYW5uZWxzXFxzaG93LXN1YnNjcmlwdGlvbnNcXHNob3ctc3Vic2NyaXB0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1zdWJzY3JpcHRpb25zL3Nob3ctc3Vic2NyaXB0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0FDQ1I7QURFSTtFQUNJLGVBQUE7QUNBUjtBREVRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ0FaO0FER1E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDRFo7QURJUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQ0ZaO0FETVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0paO0FET1E7RUFDSSxpQkFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvY2hhbm5lbHMvc2hvdy1zdWJzY3JpcHRpb25zL3Nob3ctc3Vic2NyaXB0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFubmVsLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA5MzZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcblxyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgICAgd2lkdGg6IDI0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1Cb2xkJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kb3Qge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1MaWdodCc7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLndhdGNoZXJzLWNvdW50LCAudmlkZW9zLWNvdW50IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzgxODE4MTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52aWRlb3MtY291bnQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsIi5jaGFubmVsLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTM2cHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4uY2hhbm5lbC1pdGVtIC5hdmF0YXIge1xuICB3aWR0aDogMjQwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyNDBweDtcbn1cbi5jaGFubmVsLWl0ZW0gLmluZm8ge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4uY2hhbm5lbC1pdGVtIC5pbmZvIC5uYW1lIHtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XG59XG4uY2hhbm5lbC1pdGVtIC5pbmZvIC5kb3Qge1xuICBtYXJnaW4tbGVmdDogMjZweDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cbi5jaGFubmVsLWl0ZW0gLmluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1MaWdodFwiO1xufVxuLmNoYW5uZWwtaXRlbSAuaW5mbyAud2F0Y2hlcnMtY291bnQsIC5jaGFubmVsLWl0ZW0gLmluZm8gLnZpZGVvcy1jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MTgxODE7XG59XG4uY2hhbm5lbC1pdGVtIC5pbmZvIC52aWRlb3MtY291bnQge1xuICBtYXJnaW4tbGVmdDogMjZweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowSubscriptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-subscriptions',
                templateUrl: './show-subscriptions.component.html',
                styleUrls: ['./show-subscriptions.component.scss']
            }]
    }], function () { return [{ type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_3__["ChannelsService"] }, { type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_4__["GetAuthUserPipe"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/users.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/users.service.ts ***!
  \************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/global */ "./src/app/core/constants/global.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UsersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    changeProfileImage(params) {
        return this.httpClient.post(`${_core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"]}users/change-profile-image`, params);
    }
    changeCoverImage(params) {
        return this.httpClient.post(`${_core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"]}users/change-cover-image`, params);
    }
    getUserInfo(params) {
        return this.httpClient.get(`${_core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"]}users/get-user-info`, { params });
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=channels-channels-module-es2015.js.map