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





const routes = [
    {
        path: 'show',
        component: _app_channels_show_channel_show_channel_component__WEBPACK_IMPORTED_MODULE_2__["ShowChannelComponent"],
        data: {
            title: 'Channel page'
        }
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
/* harmony import */ var _show_channel_channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-channel/channel-profile/channel-profile.component */ "./src/app/channels/show-channel/channel-profile/channel-profile.component.ts");
/* harmony import */ var _show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-channel/watchlist-tab/watchlist-tab.component */ "./src/app/channels/show-channel/watchlist-tab/watchlist-tab.component.ts");
/* harmony import */ var _show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show-channel/videos-tab/videos-tab.component */ "./src/app/channels/show-channel/videos-tab/videos-tab.component.ts");
/* harmony import */ var _show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-channel/playlists-tab/playlists-tab.component */ "./src/app/channels/show-channel/playlists-tab/playlists-tab.component.ts");
/* harmony import */ var _show_channel_about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./show-channel/about-tab/about-tab.component */ "./src/app/channels/show-channel/about-tab/about-tab.component.ts");












class ChannelsModule {
}
ChannelsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChannelsModule });
ChannelsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChannelsModule_Factory(t) { return new (t || ChannelsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _channels_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChannelsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_photo_editor__WEBPACK_IMPORTED_MODULE_5__["NgxPhotoEditorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChannelsModule, { declarations: [_show_channel_show_channel_component__WEBPACK_IMPORTED_MODULE_3__["ShowChannelComponent"],
        _show_channel_channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_6__["ChannelProfileComponent"],
        _show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_7__["WatchlistTabComponent"],
        _show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_8__["VideosTabComponent"],
        _show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_9__["PlaylistsTabComponent"],
        _show_channel_about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_10__["AboutTabComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _channels_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChannelsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ngx_photo_editor__WEBPACK_IMPORTED_MODULE_5__["NgxPhotoEditorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _show_channel_show_channel_component__WEBPACK_IMPORTED_MODULE_3__["ShowChannelComponent"],
                    _show_channel_channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_6__["ChannelProfileComponent"],
                    _show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_7__["WatchlistTabComponent"],
                    _show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_8__["VideosTabComponent"],
                    _show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_9__["PlaylistsTabComponent"],
                    _show_channel_about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_10__["AboutTabComponent"]
                ],
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
/* harmony import */ var _core_constants_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/global */ "./src/app/core/constants/global.ts");
/* harmony import */ var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/channels.service */ "./src/app/core/services/channels.service.ts");
/* harmony import */ var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/pipes/get-auth-user.pipe */ "./src/app/shared/pipes/get-auth-user.pipe.ts");
/* harmony import */ var _shared_pipes_fix_text_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/fix-text-line-breaks.pipe */ "./src/app/shared/pipes/fix-text-line-breaks.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");










function AboutTabComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutTabComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutTabComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.editModeOn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutTabComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not more than 100 characters please ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutTabComponent {
    constructor(fb, channelService, getAuthUser, fixLineBreaks) {
        this.fb = fb;
        this.channelService = channelService;
        this.getAuthUser = getAuthUser;
        this.fixLineBreaks = fixLineBreaks;
        this.editMode = false;
        this.authUser = this.getAuthUser.transform();
    }
    ngOnInit() {
        this.aboutForm = this.fb.group({
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(_core_constants_global__WEBPACK_IMPORTED_MODULE_2__["DESCRIPTION_CHARACTERS_LIMIT"])]],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.aboutForm.patchValue({
            username: this.channelUser.username,
            id: this.channelUser.channel.id,
            description: this.fixLineBreaks.transform(this.channelUser.channel.description)
            // ...this.channelUser.channel
        });
    }
    editModeOn() {
        this.editMode = true;
    }
    saveChannelDescription() {
        if (this.aboutForm.valid) {
            this.channelService.saveDescription(this.aboutForm.value).subscribe(dt => {
                this.channelUser = dt;
                document.querySelector('.description').innerHTML = this.channelUser.channel.description;
                this.editMode = false;
            });
        }
    }
    ngAfterViewInit() {
        document.querySelector('.description').innerHTML = this.channelUser.channel.description;
    }
}
AboutTabComponent.ɵfac = function AboutTabComponent_Factory(t) { return new (t || AboutTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_3__["ChannelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_4__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_fix_text_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_5__["FixTextLineBreaksPipe"])); };
AboutTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutTabComponent, selectors: [["app-about-tab"]], inputs: { channelUser: "channelUser" }, decls: 17, vars: 11, consts: [[1, "about-tab"], [1, "info"], [4, "ngIf"], [1, "date"], ["class", "btn", 3, "click", 4, "ngIf"], [1, "description", 3, "hidden"], [1, "edit-form-controls", 3, "hidden"], ["id", "channel-about-form", 3, "formGroup"], ["rows", "15", "formControlName", "description"], [1, "save", 3, "click"], [1, "btn", 3, "click"]], template: function AboutTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AboutTabComponent_h2_2_Template, 2, 0, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AboutTabComponent_button_7_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutTabComponent_Template_button_click_14_listener() { return ctx.saveChannelDescription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AboutTabComponent_mat_error_16_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.channelUser.channel == null ? null : ctx.channelUser.channel.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Joined ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 8, ctx.channelUser.channel.created_at, "d MMM, yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode && ctx.authUser.username === ctx.channelUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.channelUser.channel.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.aboutForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aboutForm.get("description").hasError("maxlength"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: #18B587;\n  font-family: \"Muli-Bold\";\n}\n.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  margin-top: 0;\n  display: flex;\n  align-items: center;\n}\n.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #545454;\n  font-family: \"Muli-Bold\";\n}\n@media screen and (max-width: 400px) {\n  .about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 24px;\n  background: #18B587;\n  color: #FFFFFF;\n  padding: 4px 18px;\n  border-radius: 0;\n}\n.about-tab[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 24px;\n  background: #F4F4F4;\n  color: #545454;\n  font-size: 16px;\n}\n.about-tab[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.about-tab[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  background: #C9C9C9;\n  color: #545454;\n  padding: 4px 18px;\n  border-radius: 0;\n}\n.about-tab[_ngcontent-%COMP%]   .save.active[_ngcontent-%COMP%] {\n  background: #18B587;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL2Fib3V0LXRhYi9DOlxccHJvamVjdHNcXG1ldGx0dlxcZnJvbnRlbmQvc3JjXFxhcHBcXGNoYW5uZWxzXFxzaG93LWNoYW5uZWxcXGFib3V0LXRhYlxcYWJvdXQtdGFiLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFubmVscy9zaG93LWNoYW5uZWwvYWJvdXQtdGFiL2Fib3V0LXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDQVI7QURDUTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FDQ1o7QURDUTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDWjtBREFZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQ0VoQjtBRERnQjtFQUpKO0lBS1Esa0JBQUE7RUNJbEI7QUFDRjtBREZZO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSWhCO0FEQUk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRVI7QURDSTtFQUNJLFdBQUE7QUNDUjtBRElJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRlI7QURJUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0ZaIiwiZmlsZSI6InNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL2Fib3V0LXRhYi9hYm91dC10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtdGFiIHtcclxuICAgIC5pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMThCNTg3O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzE4QjU4NztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAvL2JvcmRlcjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuc2F2ZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQzlDOUM5O1xyXG4gICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAxOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE4QjU4NztcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5hYm91dC10YWIgLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYWJvdXQtdGFiIC5pbmZvIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMThCNTg3O1xuICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIjtcbn1cbi5hYm91dC10YWIgLmluZm8gLmRhdGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFib3V0LXRhYiAuaW5mbyAuZGF0ZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuYWJvdXQtdGFiIC5pbmZvIC5kYXRlIHNwYW4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmFib3V0LXRhYiAuaW5mbyAuZGF0ZSAuYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIGJhY2tncm91bmQ6ICMxOEI1ODc7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nOiA0cHggMThweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5hYm91dC10YWIgLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5hYm91dC10YWIgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hYm91dC10YWIgLnNhdmUge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjQzlDOUM5O1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgcGFkZGluZzogNHB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYWJvdXQtdGFiIC5zYXZlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxOEI1ODc7XG4gIGNvbG9yOiAjRkZGRkZGO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-tab',
                templateUrl: './about-tab.component.html',
                styleUrls: ['./about-tab.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_3__["ChannelsService"] }, { type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_4__["GetAuthUserPipe"] }, { type: _shared_pipes_fix_text_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_5__["FixTextLineBreaksPipe"] }]; }, { channelUser: [{
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/users.service */ "./src/app/core/services/users.service.ts");
/* harmony import */ var _shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/pipes/base64-to-file.pipe */ "./src/app/shared/pipes/base64-to-file.pipe.ts");
/* harmony import */ var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/get-auth-user.pipe */ "./src/app/shared/pipes/get-auth-user.pipe.ts");
/* harmony import */ var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/channels.service */ "./src/app/core/services/channels.service.ts");
/* harmony import */ var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/subject.service */ "./src/app/core/services/subject.service.ts");
/* harmony import */ var _core_services_socket_io_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/socket-io.service */ "./src/app/core/services/socket-io.service.ts");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_photo_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-photo-editor */ "./node_modules/ngx-photo-editor/__ivy_ngcc__/fesm2015/ngx-photo-editor.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/pipes/get-thumb-path.pipe */ "./src/app/shared/pipes/get-thumb-path.pipe.ts");





















function ChannelProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChannelProfileComponent_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.coverChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngx-photo-editor", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function ChannelProfileComponent_div_2_Template_ngx_photo_editor_imageCropped_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.coverCropped($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChanedEvent", ctx_r0.coverChangedEvent)("autoCrop", false)("viewMode", 3);
} }
function ChannelProfileComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.removeCover(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChannelProfileComponent_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChannelProfileComponent_mat_icon_15_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_mat_icon_15_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.removeAvatar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChannelProfileComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChannelProfileComponent_div_16_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.profileChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngx-photo-editor", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function ChannelProfileComponent_div_16_Template_ngx_photo_editor_imageCropped_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.profileCropped($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChanedEvent", ctx_r4.profileChangedEvent)("aspectRatio", 4 / 3)("viewMode", 1)("resizeToWidth", 500);
} }
function ChannelProfileComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.channelUser.channel.name);
} }
function ChannelProfileComponent_mat_form_field_19_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ChannelProfileComponent_mat_form_field_19_Template_input_keyup_enter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChannelProfileComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
} }
function ChannelProfileComponent_div_23_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_23_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.connectWithUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Connect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChannelProfileComponent_div_23_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Waiting for confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChannelProfileComponent_div_23_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Connected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r25);
} }
function ChannelProfileComponent_div_23_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_23_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.toggleBottomChatBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChannelProfileComponent_div_23_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_23_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.subscribeToChannel(ctx_r33.channelUser.channel); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChannelProfileComponent_div_23_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_23_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.subscribeToChannel(ctx_r35.channelUser.channel); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Subscribed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChannelProfileComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChannelProfileComponent_div_23_a_1_Template, 5, 0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChannelProfileComponent_div_23_a_2_Template, 5, 0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChannelProfileComponent_div_23_button_3_Template, 5, 1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_23_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.disconnectUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Disconnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ChannelProfileComponent_div_23_a_11_Template, 5, 0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChannelProfileComponent_div_23_a_12_Template, 5, 0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChannelProfileComponent_div_23_a_13_Template, 5, 0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.usersConnectionStatus === "idle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.usersConnectionStatus === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.usersConnectionStatus === "connected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.usersConnectionStatus === "connected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.subscribedToChannel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.subscribedToChannel);
} }
function ChannelProfileComponent_div_24_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_24_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.toggleEditMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit channel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChannelProfileComponent_div_24_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_24_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.toggleEditMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChannelProfileComponent_div_24_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_24_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Save changes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChannelProfileComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChannelProfileComponent_div_24_button_1_Template, 4, 0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChannelProfileComponent_div_24_button_2_Template, 4, 0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChannelProfileComponent_div_24_button_3_Template, 4, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.editMode);
} }
const _c0 = function (a0) { return { opacity: a0 }; };
class ChannelProfileComponent {
    constructor(usersService, base64ToFile, getAuthUser, channelService, subject, socketService, loader, fb) {
        this.usersService = usersService;
        this.base64ToFile = base64ToFile;
        this.getAuthUser = getAuthUser;
        this.channelService = channelService;
        this.subject = subject;
        this.socketService = socketService;
        this.loader = loader;
        this.fb = fb;
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.subscribedToChannel = false;
        this.subscribersCount = 0;
        this.changingImage = false;
        this.editMode = false;
        this.subscriptions = [];
        this.attemptedToConnect = false;
        this.usersConnectionStatus = 'idle';
        this.toggleChatBox = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.channelUser) {
            this.checkChannelSubscription();
            this.initChannelForm();
            // this.detectImageChange();
            this.checkIfUsersConnected();
            this.getAcceptedDeclinedRequests();
            this.getDisconnectUser();
        }
    }
    initChannelForm() {
        this.channelForm = this.fb.group({
            id: [''],
            avatar: [''],
            cover: [''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['']
        });
        this.channelForm.patchValue({
            name: this.channelUser.channel.name,
            id: this.channelUser.channel.id,
            username: this.channelUser.username,
            avatar: this.channelUser.channel.avatar,
            cover: this.channelUser.channel.cover
        });
    }
    checkIfUsersConnected() {
        this.usersService.checkIfUsersConnected({
            user_id: this.authUser.id,
            channel_user_id: this.channelUser.id
        }).subscribe(dt => {
            this.usersConnection = dt;
            if (dt) {
                this.usersConnectionStatus = dt.confirmed ? 'connected' : 'pending';
            }
        });
    }
    coverChangeEvent(event) {
        this.coverChangedEvent = event;
    }
    profileChangeEvent(event) {
        this.profileChangedEvent = event;
    }
    detectImageChange() {
        // document.querySelector('img.avatar').addEventListener('load', () => {
        //     console.log('Loading image!!!')
        if (this.profileChangedEvent || this.coverChangedEvent) {
            this.loader.dataLoading = false;
            this.changingImage = false;
            console.log('Avatar changed');
            console.log(this.changingImage);
        }
        // });
    }
    profileCropped(event) {
        // this.loader.dataLoading = true;
        this.changingImage = true;
        this.profileBase64 = event.base64;
        const filename = `avatar_${Date.now()}.jpg`;
        const fd = new FormData();
        this.channelForm.patchValue({ avatar: filename });
        fd.append('avatar_file', this.base64ToFile.transform(event.base64), filename);
        fd.append('avatar', filename);
        fd.append('id', this.authUser.id);
        this.subscriptions.push(this.usersService.changeProfileImage(fd).subscribe((dt) => {
            this.changeAuthUserInfo(dt);
        }));
    }
    coverCropped(event) {
        this.coverBase64 = event.base64;
        this.changingImage = true;
        const fd = new FormData();
        const filename = `cover_${Date.now()}.jpg`;
        this.channelForm.patchValue({ cover: filename });
        fd.append('cover_file', this.base64ToFile.transform(event.base64), filename);
        fd.append('cover', filename);
        fd.append('id', this.authUser.id);
        this.loader.dataLoading = true;
        this.subscriptions.push(this.usersService.changeCoverImage(fd).subscribe((dt) => {
            this.changeAuthUserInfo(dt);
        }));
    }
    removeCover() {
        this.channelUser.channel.cover = '';
        this.channelForm.patchValue({ cover: this.channelUser.channel.cover });
    }
    removeAvatar() {
        this.channelUser.channel.avatar = '';
        this.channelForm.patchValue({ avatar: this.channelUser.channel.avatar });
    }
    subscribeToChannel(channel) {
        this.subscriptions.push(this.channelService.subscribeToChannel({
            user_id: this.authUser.id,
            channel_id: channel.id
        }).subscribe(dt => {
            this.subscribedToChannel = dt.status === 'Subscribed';
            this.subscribersCount = dt.subscribers_count;
            this.subscriptions.push(this.channelService.getUserChannelSubscriptions({ user_id: this.authUser.id }).subscribe(d => {
                this.subject.setUserSubscriptions(d);
            }));
        }));
    }
    checkChannelSubscription() {
        // console.log(this.channelUser)
        this.subscriptions.push(this.channelService.checkChannelSubscription({
            user_id: this.authUser.id,
            channel_id: this.channelUser.channel.id
        }).subscribe(dt => {
            this.subscribedToChannel = dt.status === 'Subscribed';
            this.subscribersCount = dt.subscribers_count;
        }));
    }
    changeAuthUserInfo(dt) {
        localStorage.setItem('token', dt.token);
        this.authUser = this.getAuthUser.transform();
        this.channelUser = this.authUser;
        this.changingImage = false;
        this.subject.changeAuthUser((dt.hasOwnProperty('token') ? dt.token : ''));
        // this.loader.dataLoading = false;
        // console.log(this.channelUser)
    }
    toggleEditMode() {
        this.editMode = !this.editMode;
    }
    saveChanges() {
        console.log('save changes!!!');
        console.log(this.channelForm.value);
        console.log('save changes!!!');
        if (this.channelForm.valid) {
            this.subscriptions.push(this.channelService.changeChannelDetails(this.channelForm.value).subscribe((dt => {
                this.editMode = false;
                this.changeAuthUserInfo(dt);
            })));
        }
    }
    toggleBottomChatBox() {
        this.toggleChatBox.emit(this.channelUser);
    }
    connectWithUser() {
        this.attemptedToConnect = true;
        this.usersConnectionStatus = 'pending';
        this.socketService.connectWithUser({
            authUser: this.authUser,
            channelUser: this.channelUser
        });
    }
    getAcceptedDeclinedRequests() {
        this.subscriptions.push(this.socketService.acceptedConnection().subscribe((dt) => {
            console.log('accepted', dt);
            console.log(dt.receiver_id, this.channelUser.id);
            if ((dt.receiver_id === this.authUser.id && dt.initiator_id === this.channelUser.id)
                || (dt.receiver_id === this.channelUser.id && dt.initiator_id === this.authUser.id)) {
                this.usersConnectionStatus = 'connected';
            }
        }));
        this.subscriptions.push(this.socketService.declinedConnection().subscribe((dt) => {
            console.log('declined');
            this.usersConnectionStatus = 'idle';
        }));
    }
    disconnectUser() {
        this.socketService.disconnectUsers({
            id: this.usersConnection.id,
            to_username: this.channelUser.username
        });
        this.usersConnectionStatus = 'idle';
    }
    getDisconnectUser() {
        this.subscriptions.push(this.socketService.getDisconnectUsers({}).subscribe(dt => {
            console.log('disconnected', dt);
            this.usersConnectionStatus = 'idle';
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
ChannelProfileComponent.ɵfac = function ChannelProfileComponent_Factory(t) { return new (t || ChannelProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_4__["Base64ToFilePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_5__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_6__["ChannelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_socket_io_service__WEBPACK_IMPORTED_MODULE_8__["SocketIoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
ChannelProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChannelProfileComponent, selectors: [["app-channel-profile"]], inputs: { channelUser: "channelUser", authUser: "authUser" }, outputs: { toggleChatBox: "toggleChatBox" }, decls: 25, vars: 23, consts: [[3, "formGroup"], [1, "profile-block"], [3, "hidden", 4, "ngIf"], [1, "cover-image-container"], ["for", "cover-image-input"], ["id", "cover-image", 3, "src", "load"], ["mat-icon-button", "", "type", "button", "class", "remove-cover-btn", 3, "click", 4, "ngIf"], [1, "sub-block"], [1, "d-flex", "align-items-center"], [1, "avatar-container"], ["for", "profile-image-input"], ["id", "profile-image", 1, "avatar", 3, "ngStyle", "src", "load"], ["id", "add-photo-btn", 4, "ngIf"], ["class", "remove-avatar-btn", 3, "click", 4, "ngIf"], ["class", "channel-name", "id", "channel-name", 4, "ngIf"], [4, "ngIf"], [1, "subscribers-count"], ["class", "loader", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], [3, "hidden"], ["type", "file", "id", "cover-image-input", 3, "change"], ["type", "hidden", "formControlName", "cover"], [3, "imageChanedEvent", "autoCrop", "viewMode", "imageCropped"], ["mat-icon-button", "", "type", "button", 1, "remove-cover-btn", 3, "click"], ["id", "add-photo-btn"], [1, "remove-avatar-btn", 3, "click"], ["type", "file", "id", "profile-image-input", 3, "change"], ["type", "hidden", "formControlName", "avatar"], [3, "imageChanedEvent", "aspectRatio", "viewMode", "resizeToWidth", "imageCropped"], ["id", "channel-name", 1, "channel-name"], ["matInput", "", "formControlName", "name", "id", "channel-name-input", 3, "keyup.enter"], [1, "loader"], [3, "diameter"], ["class", "add-friend-btn", 3, "click", 4, "ngIf"], ["class", "waiting-for-confirmation-btn", 4, "ngIf"], ["class", "users-connected-btn", 3, "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["class", "toggle-chat-box-btn", 3, "click", 4, "ngIf"], ["class", "subscribe-btn", 3, "click", 4, "ngIf"], ["class", "subscribe-btn subscribed", 3, "click", 4, "ngIf"], [1, "add-friend-btn", 3, "click"], [1, "waiting-for-confirmation-btn"], [1, "users-connected-btn", 3, "matMenuTriggerFor"], [1, "toggle-chat-box-btn", 3, "click"], [1, "subscribe-btn", 3, "click"], [1, "subscribe-btn", "subscribed", 3, "click"], ["class", "btn", "type", "button", "id", "edit-channel", 3, "click", 4, "ngIf"], ["class", "btn", "type", "button", "id", "cancel-changes", 3, "click", 4, "ngIf"], ["class", "btn", "type", "button", "id", "save-channel-details", 3, "click", 4, "ngIf"], ["type", "button", "id", "edit-channel", 1, "btn", 3, "click"], ["type", "button", "id", "cancel-changes", 1, "btn", 3, "click"], ["type", "button", "id", "save-channel-details", 1, "btn", 3, "click"]], template: function ChannelProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChannelProfileComponent_div_2_Template, 4, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ChannelProfileComponent_Template_img_load_5_listener() { return ctx.detectImageChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "getImgPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChannelProfileComponent_button_7_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ChannelProfileComponent_Template_img_load_12_listener() { return ctx.detectImageChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "getImgPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChannelProfileComponent_mat_icon_14_Template, 2, 0, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChannelProfileComponent_mat_icon_15_Template, 2, 0, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChannelProfileComponent_div_16_Template, 4, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChannelProfileComponent_p_18_Template, 2, 1, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ChannelProfileComponent_mat_form_field_19_Template, 2, 0, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ChannelProfileComponent_div_22_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ChannelProfileComponent_div_23_Template, 14, 6, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ChannelProfileComponent_div_24_Template, 4, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.channelForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.channelUser.username === ctx.authUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 15, ctx.channelUser.channel == null ? null : ctx.channelUser.channel.cover, "covers"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode && ctx.channelUser.channel.cover);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.editMode ? 0.5 : 1))("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 18, ctx.channelUser.channel.avatar, "avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode && !ctx.channelUser.channel.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode && ctx.channelUser.channel.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.channelUser.username === ctx.authUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.subscribersCount + " subscriber" + (ctx.subscribersCount === 1 ? "" : "s"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changingImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.channelUser.username !== ctx.authUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.channelUser.username === ctx.authUser.username);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ngx_photo_editor__WEBPACK_IMPORTED_MODULE_11__["NgxPhotoEditorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuTrigger"]], pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_18__["GetThumbPathPipe"]], styles: [".sub-bell[_ngcontent-%COMP%] {\n  color: #F53C6F;\n  margin-right: 16px;\n}\n\n.subscribe-btn[_ngcontent-%COMP%], .users-connected-btn[_ngcontent-%COMP%] {\n  width: 119px;\n  height: 36px;\n  padding: 15px 32px;\n  color: #ffffff !important;\n  font-size: 16px;\n  font-family: \"Muli-Light\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s ease-in-out;\n  background: #18B587;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.toggle-chat-box-btn[_ngcontent-%COMP%] {\n  width: 119px;\n  height: 36px;\n  padding: 15px 32px;\n  color: #ffffff !important;\n  font-size: 16px;\n  font-family: \"Muli-Light\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s ease-in-out;\n  background: #18B587;\n}\n\n.add-friend-btn[_ngcontent-%COMP%] {\n  width: 119px;\n  height: 36px;\n  padding: 15px 32px;\n  color: #ffffff !important;\n  font-size: 16px;\n  font-family: \"Muli-Light\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s ease-in-out;\n  background: #18B587;\n  background-color: #F53C6F;\n  padding: 0;\n  margin-right: 16px;\n}\n\n.waiting-for-confirmation-btn[_ngcontent-%COMP%] {\n  width: 119px;\n  height: 36px;\n  padding: 15px 32px;\n  color: #ffffff !important;\n  font-size: 16px;\n  font-family: \"Muli-Light\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s ease-in-out;\n  background: #18B587;\n  width: 210px;\n  background-color: #b3b3b3;\n  padding: 0;\n  margin-right: 16px;\n}\n\n.loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 52px;\n  margin-left: 10px;\n  margin-top: -17px;\n}\n\n#add-photo-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 10px;\n  cursor: pointer;\n}\n\n.cover-image-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cover-image-container[_ngcontent-%COMP%]   .remove-cover-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n.cover-image-container[_ngcontent-%COMP%]   .remove-cover-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  background-color: #000000;\n  color: #ffffff;\n  border-radius: 20px;\n  font-size: 16px;\n}\n\nlabel[for=cover-image-input][_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#edit-channel[_ngcontent-%COMP%], #save-channel-details[_ngcontent-%COMP%] {\n  background: #18B587;\n  border-radius: 0;\n  color: #fff;\n  padding: 8px 24px;\n  display: flex;\n  align-items: center;\n}\n\n#cancel-changes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #C9C9C9;\n  border-radius: 0;\n  color: #fff;\n  padding: 8px 24px;\n  margin-right: 20px;\n}\n\n.avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.avatar-container[_ngcontent-%COMP%]   .remove-avatar-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 13px;\n  color: #000000;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.subscribed[_ngcontent-%COMP%] {\n  background-color: #b3b3b3 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL2NoYW5uZWwtcHJvZmlsZS9DOlxccHJvamVjdHNcXG1ldGx0dlxcZnJvbnRlbmQvc3JjXFxhcHBcXGNoYW5uZWxzXFxzaG93LWNoYW5uZWxcXGNoYW5uZWwtcHJvZmlsZVxcY2hhbm5lbC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFubmVscy9zaG93LWNoYW5uZWwvY2hhbm5lbC1wcm9maWxlL0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NoYW5uZWxzL3Nob3ctY2hhbm5lbC9jaGFubmVsLXByb2ZpbGUvY2hhbm5lbC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFubmVscy9zaG93LWNoYW5uZWwvY2hhbm5lbC1wcm9maWxlL0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQ0pFO0VES0Ysa0JBQUE7QUVGSjs7QUZLQTtFR1NJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkYxQlM7RURTVCxpQkFBQTtFQUNBLGtCQUFBO0FFUUo7O0FGTEE7RUdHSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJGMUJTO0FDZ0NiOztBRmZBO0VHREksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CRjFCUztFRG1CVCx5QkNwQkU7RURxQkYsVUFBQTtFQUNBLGtCQUFBO0FFNEJKOztBRnpCQTtFR1JJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkYxQlM7RUQwQlQsWUFBQTtFQUNBLHlCQ3hCUztFRHlCVCxVQUFBO0VBQ0Esa0JBQUE7QUVzQ0o7O0FGbkNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRXNDSjs7QUZuQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBRXNDSjs7QUZsQ0E7RUFDSSxrQkFBQTtBRXFDSjs7QUZuQ0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUVxQ1I7O0FGbkNRO0VBQ0kseUJDdkRKO0VEd0RJLGNDekRKO0VEMERJLG1CQUFBO0VBQ0EsZUFBQTtBRXFDWjs7QUYvQkE7RUFDSSxXQUFBO0FFa0NKOztBRi9CQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUVrQ0o7O0FGL0JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FFa0NKOztBRi9CQTtFQUNJLGtCQUFBO0FFa0NKOztBRmhDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUVpQ1I7O0FGN0JBO0VBQ0ksb0NBQUE7QUVnQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGFubmVscy9zaG93LWNoYW5uZWwvY2hhbm5lbC1wcm9maWxlL2NoYW5uZWwtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG4uc3ViLWJlbGwge1xyXG4gICAgY29sb3I6ICRyZWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUtYnRuLCAudXNlcnMtY29ubmVjdGVkLWJ0biB7XHJcbiAgICBAaW5jbHVkZSByZWd1bGFyQnV0dG9uO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi50b2dnbGUtY2hhdC1ib3gtYnRuIHtcclxuICAgIEBpbmNsdWRlIHJlZ3VsYXJCdXR0b247XHJcbn1cclxuXHJcbi5hZGQtZnJpZW5kLWJ0biB7XHJcbiAgICBAaW5jbHVkZSByZWd1bGFyQnV0dG9uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi53YWl0aW5nLWZvci1jb25maXJtYXRpb24tYnRue1xyXG4gICAgQGluY2x1ZGUgcmVndWxhckJ1dHRvbjtcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodF9ncmF5O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxufVxyXG5cclxuI2FkZC1waG90by1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogOXB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLnJlbW92ZS1jb3Zlci1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuXHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5sYWJlbFtmb3I9XCJjb3Zlci1pbWFnZS1pbnB1dFwiXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2VkaXQtY2hhbm5lbCwgI3NhdmUtY2hhbm5lbC1kZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQ6ICMxOEI1ODc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jY2FuY2VsLWNoYW5nZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzlDOUM5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5hdmF0YXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAucmVtb3ZlLWF2YXRhci1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICB0b3A6IDEzcHg7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdWJzY3JpYmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2IzYjMgIWltcG9ydGFudDtcclxufVxyXG4iLCIkcmVkOiAjRjUzQzZGO1xyXG4kbWV0bC1ncmVlbjogIzE4QjU4NztcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiRsaWdodF9ncmF5OiAjYjNiM2IzO1xyXG4iLCIuc3ViLWJlbGwge1xuICBjb2xvcjogI0Y1M0M2RjtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uc3Vic2NyaWJlLWJ0biwgLnVzZXJzLWNvbm5lY3RlZC1idG4ge1xuICB3aWR0aDogMTE5cHg7XG4gIGhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktTGlnaHRcIjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6ICMxOEI1ODc7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi50b2dnbGUtY2hhdC1ib3gtYnRuIHtcbiAgd2lkdGg6IDExOXB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJNdWxpLUxpZ2h0XCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xufVxuXG4uYWRkLWZyaWVuZC1idG4ge1xuICB3aWR0aDogMTE5cHg7XG4gIGhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktTGlnaHRcIjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6ICMxOEI1ODc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNTNDNkY7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLndhaXRpbmctZm9yLWNvbmZpcm1hdGlvbi1idG4ge1xuICB3aWR0aDogMTE5cHg7XG4gIGhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktTGlnaHRcIjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6ICMxOEI1ODc7XG4gIHdpZHRoOiAyMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzYjNiMztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4ubG9hZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0xN3B4O1xufVxuXG4jYWRkLXBob3RvLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOXB4O1xuICB0b3A6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb3Zlci1pbWFnZS1jb250YWluZXIgLnJlbW92ZS1jb3Zlci1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuLmNvdmVyLWltYWdlLWNvbnRhaW5lciAucmVtb3ZlLWNvdmVyLWJ0biBtYXQtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmxhYmVsW2Zvcj1jb3Zlci1pbWFnZS1pbnB1dF0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2VkaXQtY2hhbm5lbCwgI3NhdmUtY2hhbm5lbC1kZXRhaWxzIHtcbiAgYmFja2dyb3VuZDogIzE4QjU4NztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jY2FuY2VsLWNoYW5nZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjQzlDOUM5O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmF2YXRhci1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXZhdGFyLWNvbnRhaW5lciAucmVtb3ZlLWF2YXRhci1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDEzcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN1YnNjcmliZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiM2IzICFpbXBvcnRhbnQ7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbkBtaXhpbiByZWRCdXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIHJlZ3VsYXJCdXR0b24ge1xyXG4gICAgd2lkdGg6IDExOXB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1MaWdodFwiO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbWV0bC1ncmVlbjtcclxufVxyXG5cclxuXHJcbi8vIFBsYXlsaXN0IHZpZGVvcyBtb2RhbFxyXG5AbWl4aW4gdmlkZW9JdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE4QjU4NztcclxuICAgIH1cclxuXHJcbiAgICAmLmFkZGVkIHtcclxuXHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIHNwYW4uYWRkZWQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0yNHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJBZGRlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNTNjNmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyNHB4IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNob3J0ZW5lZC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLnRhZ3Mge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFnSXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWl4aW4gaW5wdXRXcmFwIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgICAgICAgJi5zZWFyY2gge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODE4MTgxMjE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFnSXRlbSB7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgcGFkZGluZzogMnB4IDExcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0VFRUVFRTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBjb2xvcjogIzU0NTQ1NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vLyBQbGF5bGlzdCBpdGVtIGZvciAnVmlkZW9zJyBzZWN0aW9uXHJcbkBtaXhpbiBwbGF5bGlzdEl0ZW0ge1xyXG5cclxuICAgIC5wbGF5bGlzdC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA0MzJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAgIC50aHVtYm5haWwtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAuc2hvcnQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDlweDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MzJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZha2UtYmcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDEsIDEsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzdG9ja3NJdGVtIHtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDE3OXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIHBhZGRpbmc6IDI0cHggOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuXHJcblxyXG4gICAgJi5zdG9jay1pdGVtLWdyZWVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RvY2staXRlbS1yZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRyZWQgMCAwIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stZm9sbG93LCAuc3RvY2stdW5mb2xsb3cge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAudW5mb2xsb3ctYnRuIHtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stbmFtZSwgLnN0b2NrLXByaWNlLWNoYW5nZSwgLnN0b2NrLXByaWNlLWNoYW5nZS1wZXJjZW50IHtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNdWxpLUxpZ2h0JztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stcHJpY2Uge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011bGktQm9sZCc7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kb2xsYXItc2lnbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC01cHg7XHJcbiAgICAgICAgdG9wOiAtNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011bGktQm9sZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0b2NrLXByaWNlLWRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-channel-profile',
                templateUrl: './channel-profile.component.html',
                styleUrls: ['./channel-profile.component.scss']
            }]
    }], function () { return [{ type: _core_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: _shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_4__["Base64ToFilePipe"] }, { type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_5__["GetAuthUserPipe"] }, { type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_6__["ChannelsService"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"] }, { type: _core_services_socket_io_service__WEBPACK_IMPORTED_MODULE_8__["SocketIoService"] }, { type: _core_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, { channelUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['channelUser']
        }], authUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['authUser']
        }], toggleChatBox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
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
/* harmony import */ var _core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/modals/confirmation-dialog/confirmation-dialog.component */ "./src/app/core/components/modals/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _core_helpers_track_by_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/helpers/track-by-element */ "./src/app/core/helpers/track-by-element.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/playlists.service */ "./src/app/core/services/playlists.service.ts");
/* harmony import */ var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/subject.service */ "./src/app/core/services/subject.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/pipes/filter-out-falsy-values-from-object.pipe */ "./src/app/shared/pipes/filter-out-falsy-values-from-object.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/components/video-filters/video-filters.component */ "./src/app/shared/components/video-filters/video-filters.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/pipes/get-thumb-path.pipe */ "./src/app/shared/pipes/get-thumb-path.pipe.ts");















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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistsTabComponent_ng_container_2_table_3_tr_13_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const playlist_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.goToEditPage(playlist_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "getImgPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistsTabComponent_ng_container_2_table_3_tr_13_Template_span_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const playlist_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.goToEditPage(playlist_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 7);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlaylistsTabComponent_ng_container_2_table_3_tr_13_Template, 29, 16, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.playlists)("ngForTrackBy", ctx_r6.trackByElement);
} }
function PlaylistsTabComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistsTabComponent_ng_container_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.openAddPlaylistModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add New Playlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlaylistsTabComponent_ng_container_2_table_3_Template, 14, 2, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.playlists.length > 0);
} }
function PlaylistsTabComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistsTabComponent_ng_container_3_ng_container_2_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const playlist_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.openPlaylistPage(playlist_r18, playlist_r18.videos[0] == null ? null : playlist_r18.videos[0].id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "getImgPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "playlist_play");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const playlist_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, playlist_r18.thumbnail), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r18.videos.length + (playlist_r18.videos.length === 1 ? " video" : " videos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r18.description);
} }
function PlaylistsTabComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlaylistsTabComponent_ng_container_3_ng_container_2_Template, 18, 7, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.playlists);
} }
function PlaylistsTabComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No playlists found for this channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PlaylistsTabComponent {
    constructor(router, playlistsService, subjectService, dialog, getExactParams) {
        this.router = router;
        this.playlistsService = playlistsService;
        this.subjectService = subjectService;
        this.dialog = dialog;
        this.getExactParams = getExactParams;
        this.playlists = [];
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.showFilters = false;
        this.search = '';
        this.filters = null;
        this.subscriptions = [];
        this.trackByElement = _core_helpers_track_by_element__WEBPACK_IMPORTED_MODULE_4__["default"];
    }
    ngOnInit() {
        this.search = localStorage.getItem('search');
        this.getPlaylists({ search: this.search, filters: this.filters });
        this.getFiltersToggleState();
    }
    getFiltersToggleState() {
        this.subscriptions.push(this.subjectService.getToggleFiltersData().subscribe(dt => {
            this.showFilters = dt;
        }));
    }
    getPlaylists(params) {
        params = this.getExactParams.transform(params);
        this.playlistsService.get(Object.assign({ channel_id: this.channelUser.channel.id, user_id: this.authUser.id }, params)).subscribe(dt => {
            this.playlists = dt;
            // console.log(this.authUser, this.channelUser)
        });
    }
    openAddPlaylistModal() {
        this.dialog.open(_core_components_modals_add_playlist_dialog_add_playlist_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AddPlaylistDialogComponent"], {
            data: { channel_id: this.channelUser.channel.id }
        })
            .afterClosed().subscribe(dt => {
            this.getPlaylists({ search: this.search, filters: this.filters });
        });
    }
    openPlaylistPage(playlist, firstVideoId) {
        const route = 'videos/play';
        const params = { id: firstVideoId, playlist_id: playlist.id };
        this.router.navigate([route], { queryParams: params });
    }
    getSearchResults(search) {
        this.search = search;
        this.getPlaylists({ search, filters: this.filters });
    }
    getFilteredPlaylists(filters) {
        this.filters = filters;
        this.getPlaylists({ search: this.search, filters });
    }
    goToEditPage(playlist) {
        this.router.navigate(['playlists/single/' + playlist.id]);
    }
    removePlaylist(id, channelId) {
        this.dialog.open(_core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"]).afterClosed().subscribe(confirmed => {
            if (confirmed) {
                this.playlistsService.removePlaylist({ id, channel_id: channelId }).subscribe(dt => {
                    this.getPlaylists({ search: this.search, filters: this.filters });
                });
            }
        });
    }
}
PlaylistsTabComponent.ɵfac = function PlaylistsTabComponent_Factory(t) { return new (t || PlaylistsTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_playlists_service__WEBPACK_IMPORTED_MODULE_6__["PlaylistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterOutFalsyValuesFromObjectPipe"])); };
PlaylistsTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaylistsTabComponent, selectors: [["app-playlists-tab"]], inputs: { channelUser: "channelUser", authUser: "authUser" }, decls: 5, vars: 4, consts: [[3, "filter", 4, "ngIf"], [1, "playlist-tab"], [4, "ngIf"], ["id", "no-playlists-found", 4, "ngIf"], [3, "filter"], [1, "btn", "new-playlist", 3, "click"], ["class", "table-responsive", 4, "ngIf"], [1, "table-responsive"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "img-info"], [1, "thumbnail", 3, "src", "click"], [1, "info"], [1, "material-icons", 3, "click"], [3, "click"], [1, "playlists-items"], [4, "ngFor", "ngForOf"], [1, "item"], [1, "top-wrap", 3, "click"], [1, "thumbnail", 3, "src"], [1, "overlay-info"], [1, "icon"], [1, "material-icons"], [1, "video-count"], ["id", "no-playlists-found"], [1, "error"]], template: function PlaylistsTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlaylistsTabComponent_app_video_filters_0_Template, 1, 0, "app-video-filters", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlaylistsTabComponent_ng_container_2_Template, 4, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlaylistsTabComponent_ng_container_3_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlaylistsTabComponent_div_4_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authUser.username === ctx.channelUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authUser.username !== ctx.channelUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playlists.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_11__["VideoFiltersComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_13__["GetThumbPathPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".playlist-tab[_ngcontent-%COMP%]   .new-playlist[_ngcontent-%COMP%] {\n  background: #18B587;\n  border-radius: 0;\n  color: #fff;\n  padding: 8px 24px;\n}\n.playlist-tab[_ngcontent-%COMP%]   #no-playlists-found[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  display: table;\n  margin: 24px 0;\n  width: 100%;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   .td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%]:hover {\n  color: #18B587;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  color: #545454;\n  font-family: \"Muli-Bold\", sans-serif;\n  white-space: nowrap;\n  font-size: 16px;\n  padding: 12px 0;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  margin-right: 12px !important;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 144px;\n  cursor: pointer;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  max-width: 240px;\n  font-size: 16px;\n  font-family: \"Muli-Bold\";\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 240px;\n  font-size: 12px;\n  font-weight: normal;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n@media screen and (max-width: 991px) {\n  .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n  }\n}\n.playlists-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  flex: 0 0 calc(33.3% - 21px);\n  margin-right: 32px;\n  margin-bottom: 32px;\n  cursor: pointer;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3n+3) {\n  margin-right: 0;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 216px;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   .overlay-info[_ngcontent-%COMP%] {\n  padding: 16px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   .overlay-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #545454;\n  font-size: 16px;\n  font-weight: bold;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: #545454;\n  font-size: 15px;\n  font-weight: 500;\n}\n@media screen and (max-width: 991px) {\n  .playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    flex: 0 0 calc(50% - 21px);\n  }\n}\n@media screen and (max-width: 767px) {\n  .playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL3BsYXlsaXN0cy10YWIvQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXBwXFxjaGFubmVsc1xcc2hvdy1jaGFubmVsXFxwbGF5bGlzdHMtdGFiXFxwbGF5bGlzdHMtdGFiLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFubmVscy9zaG93LWNoYW5uZWwvcGxheWxpc3RzLXRhYi9wbGF5bGlzdHMtdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0FSO0FER0k7RUFDSSxnQkFBQTtBQ0RSO0FES0k7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNIUjtBREtRO0VBQ0ksa0JBQUE7QUNIWjtBRFFnQjtFQUNJLGdCQUFBO0FDTnBCO0FEV2dCO0VBQ0ksaUJBQUE7QUNUcEI7QURXb0I7RUFDSSxnQkFBQTtBQ1R4QjtBRFd3QjtFQUNJLGNBQUE7QUNUNUI7QURlWTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDYmhCO0FEa0JvQjtFQUNJLFNBQUE7QUNoQnhCO0FEb0JnQjtFQUNJLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDbEJwQjtBRHFCZ0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNuQnBCO0FEcUJvQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDbkJ4QjtBRHNCb0I7RUFDSSxpQkFBQTtBQ3BCeEI7QURzQndCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3BCNUI7QUR1QndCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3JCNUI7QUQ0QlE7RUF6Rko7SUEwRlEsY0FBQTtJQUNBLGdCQUFBO0VDekJWO0FBQ0Y7QUQ2QkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQzFCSjtBRDRCSTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUMxQlI7QUQ0QlE7RUFDSSxlQUFBO0FDMUJaO0FENkJRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDM0JaO0FENkJZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDM0JoQjtBRDhCWTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQzVCaEI7QUQ4QmdCO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDNUJwQjtBRGlDUTtFQUNJLGdCQUFBO0FDL0JaO0FEaUNZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQy9CaEI7QURrQ1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDaENoQjtBRG9DUTtFQXhESjtJQXlEUSwwQkFBQTtFQ2pDVjtBQUNGO0FEa0NRO0VBM0RKO0lBNERRLGNBQUE7RUMvQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL3Nob3ctY2hhbm5lbC9wbGF5bGlzdHMtdGFiL3BsYXlsaXN0cy10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWxpc3QtdGFiIHtcclxuICAgIC5uZXctcGxheWxpc3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxOEI1ODc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMjRweDtcclxuICAgIH1cclxuXHJcbiAgICAjbm8tcGxheWxpc3RzLWZvdW5kIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCAjQzlDOUM5O1xyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG5cclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAvL2JvcmRlci1yaWdodDogMXB4IHNvbGlkICNDOUM5Qzk7XHJcbiAgICAgICAgICAgICAgICAudGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMThCNTg3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ZCwgdGgge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzlDOUM5O1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0M5QzlDOTtcclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9ib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pbWctaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnBsYXlsaXN0cy1pdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIC5pdGVtIHtcclxuICAgICAgICBmbGV4OiAwIDAgY2FsYygzMy4zJSAtIDIxcHgpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpudGgtY2hpbGQoM24rMykge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9wLXdyYXAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjE2cHg7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm92ZXJsYXktaW5mbyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMC4zOCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgICBmbGV4OiAwIDAgY2FsYyg1MCUgLSAyMXB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5wbGF5bGlzdC10YWIgLm5ldy1wbGF5bGlzdCB7XG4gIGJhY2tncm91bmQ6ICMxOEI1ODc7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMjRweDtcbn1cbi5wbGF5bGlzdC10YWIgI25vLXBsYXlsaXN0cy1mb3VuZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMjRweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHIge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHRyOmxhc3QtY2hpbGQgLnRkIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0ZDpsYXN0LWNoaWxkIC5tYXRlcmlhbC1pY29ucyB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRkOmxhc3QtY2hpbGQgLm1hdGVyaWFsLWljb25zOmhvdmVyIHtcbiAgY29sb3I6ICMxOEI1ODc7XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRkLCAucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRoIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiLCBzYW5zLXNlcmlmO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEycHggMDtcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGQ6bGFzdC1jaGlsZCAubWF0ZXJpYWwtaWNvbnMsIC5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGg6bGFzdC1jaGlsZCAubWF0ZXJpYWwtaWNvbnMge1xuICBtYXJnaW46IDA7XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRkIC5tYXRlcmlhbC1pY29ucywgLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0aCAubWF0ZXJpYWwtaWNvbnMge1xuICBtYXJnaW4tcmlnaHQ6IDEycHggIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0ZCAuaW1nLWluZm8sIC5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGggLmltZy1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRkIC5pbWctaW5mbyBpbWcsIC5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGggLmltZy1pbmZvIGltZyB7XG4gIHdpZHRoOiAxNDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0ZCAuaW1nLWluZm8gLmluZm8sIC5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGggLmltZy1pbmZvIC5pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRkIC5pbWctaW5mbyAuaW5mbyBoMywgLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0aCAuaW1nLWluZm8gLmluZm8gaDMge1xuICBtYXgtd2lkdGg6IDI0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0ZCAuaW1nLWluZm8gLmluZm8gcCwgLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0aCAuaW1nLWluZm8gLmluZm8gcCB7XG4gIG1heC13aWR0aDogMjQwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5wbGF5bGlzdC10YWIgdGFibGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbn1cblxuLnBsYXlsaXN0cy1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5wbGF5bGlzdHMtaXRlbXMgLml0ZW0ge1xuICBmbGV4OiAwIDAgY2FsYygzMy4zJSAtIDIxcHgpO1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wbGF5bGlzdHMtaXRlbXMgLml0ZW06bnRoLWNoaWxkKDNuKzMpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnBsYXlsaXN0cy1pdGVtcyAuaXRlbSAudG9wLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjE2cHg7XG59XG4ucGxheWxpc3RzLWl0ZW1zIC5pdGVtIC50b3Atd3JhcCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5wbGF5bGlzdHMtaXRlbXMgLml0ZW0gLnRvcC13cmFwIC5vdmVybGF5LWluZm8ge1xuICBwYWRkaW5nOiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi5wbGF5bGlzdHMtaXRlbXMgLml0ZW0gLnRvcC13cmFwIC5vdmVybGF5LWluZm8gcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ucGxheWxpc3RzLWl0ZW1zIC5pdGVtIC5pbmZvIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5wbGF5bGlzdHMtaXRlbXMgLml0ZW0gLmluZm8gaDIge1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wbGF5bGlzdHMtaXRlbXMgLml0ZW0gLmluZm8gcCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5wbGF5bGlzdHMtaXRlbXMgLml0ZW0ge1xuICAgIGZsZXg6IDAgMCBjYWxjKDUwJSAtIDIxcHgpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucGxheWxpc3RzLWl0ZW1zIC5pdGVtIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistsTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playlists-tab',
                templateUrl: './playlists-tab.component.html',
                styleUrls: ['./playlists-tab.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_6__["PlaylistsService"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterOutFalsyValuesFromObjectPipe"] }]; }, { channelUser: [{
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/global */ "./src/app/core/constants/global.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_channels_show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/channels/show-channel/watchlist-tab/watchlist-tab.component */ "./src/app/channels/show-channel/watchlist-tab/watchlist-tab.component.ts");
/* harmony import */ var _app_channels_show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/channels/show-channel/videos-tab/videos-tab.component */ "./src/app/channels/show-channel/videos-tab/videos-tab.component.ts");
/* harmony import */ var _app_channels_show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/channels/show-channel/playlists-tab/playlists-tab.component */ "./src/app/channels/show-channel/playlists-tab/playlists-tab.component.ts");
/* harmony import */ var _shared_components_stocks_lists_modal_stocks_lists_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/stocks-lists-modal/stocks-lists-modal.component */ "./src/app/shared/components/stocks-lists-modal/stocks-lists-modal.component.ts");
/* harmony import */ var _core_helpers_track_by_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/helpers/track-by-element */ "./src/app/core/helpers/track-by-element.ts");
/* harmony import */ var _core_services_video_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/video.service */ "./src/app/core/services/video.service.ts");
/* harmony import */ var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/pipes/get-auth-user.pipe */ "./src/app/shared/pipes/get-auth-user.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_users_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/users.service */ "./src/app/core/services/users.service.ts");
/* harmony import */ var _shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/pipes/base64-to-file.pipe */ "./src/app/shared/pipes/base64-to-file.pipe.ts");
/* harmony import */ var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/services/subject.service */ "./src/app/core/services/subject.service.ts");
/* harmony import */ var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/services/channels.service */ "./src/app/core/services/channels.service.ts");
/* harmony import */ var _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/services/playlists.service */ "./src/app/core/services/playlists.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @core/services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var _shared_pipes_update_user_stocks_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/pipes/update-user-stocks.pipe */ "./src/app/shared/pipes/update-user-stocks.pipe.ts");
/* harmony import */ var _core_services_stocks_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @core/services/stocks.service */ "./src/app/core/services/stocks.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _core_services_chat_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @core/services/chat.service */ "./src/app/core/services/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _shared_components_user_tags_user_tags_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../shared/components/user-tags/user-tags.component */ "./src/app/shared/components/user-tags/user-tags.component.ts");
/* harmony import */ var _channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./channel-profile/channel-profile.component */ "./src/app/channels/show-channel/channel-profile/channel-profile.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_components_search_videos_form_search_videos_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @shared/components/search-videos-form/search-videos-form.component */ "./src/app/shared/components/search-videos-form/search-videos-form.component.ts");
/* harmony import */ var _shared_components_search_stocks_form_search_stocks_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @shared/components/search-stocks-form/search-stocks-form.component */ "./src/app/shared/components/search-stocks-form/search-stocks-form.component.ts");
/* harmony import */ var _about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./about-tab/about-tab.component */ "./src/app/channels/show-channel/about-tab/about-tab.component.ts");
/* harmony import */ var _shared_components_chat_bottom_box_chat_bottom_box_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../shared/components/chat-bottom-box/chat-bottom-box.component */ "./src/app/shared/components/chat-bottom-box/chat-bottom-box.component.ts");






































function ShowChannelComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 5);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 15);
} }
function ShowChannelComponent_ng_container_2_app_user_tags_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-user-tags", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tagSelected", function ShowChannelComponent_ng_container_2_app_user_tags_1_Template_app_user_tags_tagSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.getVideosByTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ShowChannelComponent_ng_container_2_app_channel_profile_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-channel-profile", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggleChatBox", function ShowChannelComponent_ng_container_2_app_channel_profile_2_Template_app_channel_profile_toggleChatBox_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.toggleChatBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("channelUser", ctx_r5.channelUser)("authUser", ctx_r5.authUser);
} }
function ShowChannelComponent_ng_container_2_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowChannelComponent_ng_container_2_li_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const tab_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.changeActiveTab(tab_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r19 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", tab_r19 === ctx_r6.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", tab_r19.link, "-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "#" + tab_r19.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tab_r19.name);
} }
function ShowChannelComponent_ng_container_2_mat_spinner_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 5);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 15);
} }
function ShowChannelComponent_ng_container_2_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowChannelComponent_ng_container_2_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.toggleFilters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "tune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("filters-active", ctx_r8.showFilters);
} }
function ShowChannelComponent_ng_container_2_app_search_videos_form_14_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-search-videos-form", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function ShowChannelComponent_ng_container_2_app_search_videos_form_14_Template_app_search_videos_form_search_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.searchVideos($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ShowChannelComponent_ng_container_2_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowChannelComponent_ng_container_2_div_15_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r28.openModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ShowChannelComponent_ng_container_2_div_15_div_2_app_search_stocks_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-search-stocks-form", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function ShowChannelComponent_ng_container_2_div_15_div_2_app_search_stocks_form_1_Template_app_search_stocks_form_search_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r31.searchInUserStocks($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("whiteForm", true)("returnSearchText", true);
} }
function ShowChannelComponent_ng_container_2_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowChannelComponent_ng_container_2_div_15_div_2_app_search_stocks_form_1_Template, 1, 2, "app-search-stocks-form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.activeTab.name === "Watchlist" && (ctx_r27.userStocks == null ? null : ctx_r27.userStocks.length) > 0);
} }
function ShowChannelComponent_ng_container_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowChannelComponent_ng_container_2_div_15_div_1_Template, 4, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShowChannelComponent_ng_container_2_div_15_div_2_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.activeTab.name === "Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.activeTab.name !== "About");
} }
function ShowChannelComponent_ng_container_2_app_watchlist_tab_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-watchlist-tab", 35);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("channelUser", ctx_r11.channelUser);
} }
function ShowChannelComponent_ng_container_2_app_videos_tab_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-videos-tab", 36);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("channelUser", ctx_r12.channelUser)("authUser", ctx_r12.authUser);
} }
function ShowChannelComponent_ng_container_2_app_playlists_tab_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-playlists-tab", 36);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("channelUser", ctx_r13.channelUser)("authUser", ctx_r13.authUser);
} }
function ShowChannelComponent_ng_container_2_app_about_tab_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-about-tab", 35);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("channelUser", ctx_r14.channelUser);
} }
function ShowChannelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowChannelComponent_ng_container_2_app_user_tags_1_Template, 1, 0, "app-user-tags", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShowChannelComponent_ng_container_2_app_channel_profile_2_Template, 1, 2, "app-channel-profile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ShowChannelComponent_ng_container_2_li_6_Template, 3, 5, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ShowChannelComponent_ng_container_2_mat_spinner_9_Template, 1, 1, "mat-spinner", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ShowChannelComponent_ng_container_2_button_12_Template, 3, 2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ShowChannelComponent_ng_container_2_app_search_videos_form_14_Template, 1, 0, "app-search-videos-form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ShowChannelComponent_ng_container_2_div_15_Template, 3, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ShowChannelComponent_ng_container_2_app_watchlist_tab_16_Template, 1, 1, "app-watchlist-tab", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ShowChannelComponent_ng_container_2_app_videos_tab_17_Template, 1, 2, "app-videos-tab", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ShowChannelComponent_ng_container_2_app_playlists_tab_18_Template, 1, 2, "app-playlists-tab", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ShowChannelComponent_ng_container_2_app_about_tab_19_Template, 1, 1, "app-about-tab", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.auth.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.channelUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.allTabs)("ngForTrackBy", ctx_r1.trackByElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.loader.stocksLoading.status === "loading" && ctx_r1.activeTab.name === "watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab.name !== "About" && ctx_r1.activeTab.name !== "Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab.name !== "About" && ctx_r1.activeTab.name !== "Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab.name === "Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab.name === "Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab.name === "Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab.name === "Playlists");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab.name === "About");
} }
function ShowChannelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Channel with such name is not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ShowChannelComponent_app_chat_bottom_box_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-chat-bottom-box", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function ShowChannelComponent_app_chat_bottom_box_4_Template_app_chat_bottom_box_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.showChatBox = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("channelUser", ctx_r3.channelUser);
} }
class ShowChannelComponent {
    constructor(videoService, getAuthUser, router, usersService, base64ToFile, route, fb, subjectService, channelService, playlistsService, subject, auth, dialog, loader, updateStocks, stocksService, toastr, chatService) {
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
        this.auth = auth;
        this.dialog = dialog;
        this.loader = loader;
        this.updateStocks = updateStocks;
        this.stocksService = stocksService;
        this.toastr = toastr;
        this.chatService = chatService;
        this.allTabs = _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["PROFILE_PAGE_TABS"];
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["API_URL"];
        this.playlists = [];
        this.editMode = false;
        this.showFilters = false;
        this.filters = null;
        this.dataLoading = 'idle';
        this.userStocks = [];
        this.filteredStocks = [];
        this.subscriptions = [];
        this.trackByElement = _core_helpers_track_by_element__WEBPACK_IMPORTED_MODULE_8__["default"];
        this.showChatBox = false;
        this.authUser = this.getAuthUser.transform();
        this.passedUsername = this.route.snapshot.queryParams.username;
        this.passedTab = this.route.snapshot.queryParams.tab;
        this.searchVideosForm = this.fb.group({ search: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] });
    }
    ngOnInit() {
        var _a;
        // localStorage.setItem('search', '');
        this.activeTab = ((_a = _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["PROFILE_PAGE_TABS"].filter(tabs => tabs.name.toLowerCase() === this.passedTab)) === null || _a === void 0 ? void 0 : _a[0]) || _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["PROFILE_PAGE_TABS"][0];
        this.getUserInfo();
        this.subject.currentUserStocks.subscribe((dt) => {
            this.userStocks = dt.stocks;
            this.filteredStocks = this.userStocks;
        });
    }
    toggleFilters() {
        this.showFilters = !this.showFilters;
        this.subject.setToggleFiltersData(this.showFilters);
    }
    getUserInfo() {
        this.loader.channelLoading.status = 'loading';
        const viewingOwnChannel = +(this.authUser.username === this.passedUsername);
        if (this.passedUsername) {
            this.usersService.getUserInfo({
                username: this.passedUsername,
                own_channel: viewingOwnChannel
            }).subscribe(dt => {
                if (dt) {
                    this.channelUser = dt;
                }
                this.loader.channelLoading.status = 'finished';
            });
        }
    }
    changeActiveTab(tab) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.activeTab = tab;
            this.showFilters = false;
            yield this.router.navigate([`/channels/show`], {
                queryParams: {
                    tab: tab.name.toLowerCase(),
                    username: this.passedUsername
                }
            });
            this.subject.setToggleFiltersData(this.showFilters);
            if (this.activeTab.name === 'Videos') {
                this.getUserInfo();
            }
        });
    }
    searchInUserStocks(e) {
        localStorage.setItem('searchStock', e.search);
        this.watchListTab.getSearchResults(e);
    }
    searchVideos(e) {
        localStorage.setItem('search', e.search);
        this.showFilters = false;
        this.subject.setToggleFiltersData(this.showFilters);
        if (this.activeTab.name === 'Videos') {
            this.searchInUserVideos(e.search);
        }
        else if (this.activeTab.name === 'Playlists') {
            this.searchInPlaylists(e.search);
        }
    }
    searchInVideosByAuthor(s) {
        if (this.watchListTab) {
            // this.watchListTab.getSearchResults(s);
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
    getVideosByTag(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['videos'], { queryParams: { tag: name } });
        });
    }
    openModal() {
        this.dialog.open(_shared_components_stocks_lists_modal_stocks_lists_modal_component__WEBPACK_IMPORTED_MODULE_7__["StocksListsModalComponent"], {
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
            width: '100%',
            panelClass: 'stocks-lists-modal'
        }).afterClosed().subscribe(dt => {
        });
    }
    isStockFollowed(stock) {
        return !!this.userStocks.find(s => s.name === stock.name);
    }
    updateFollowedStocksList(stock) {
        const result = this.updateStocks.transform(this.userStocks, stock, this.isStockFollowed(stock));
        if (result) {
            this.loader.stocksLoading.status = 'loading';
            this.subscriptions.push(this.stocksService.updateFollowedStocks(Object.assign({ user_id: this.authUser.id }, { stocks: result }))
                .subscribe(dt => {
                this.userStocks = (dt === null || dt === void 0 ? void 0 : dt.user_stocks) || [];
                this.loader.stocksLoading.status = 'finished';
                this.subject.changeUserStocks({ stocks: this.userStocks, empty: this.userStocks.length === 0 });
            }));
        }
    }
    toggleChatBox() {
        this.showChatBox = !this.showChatBox;
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
ShowChannelComponent.ɵfac = function ShowChannelComponent_Factory(t) { return new (t || ShowChannelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_10__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_users_service__WEBPACK_IMPORTED_MODULE_12__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_13__["Base64ToFilePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_14__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_15__["ChannelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_playlists_service__WEBPACK_IMPORTED_MODULE_16__["PlaylistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_14__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_19__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_update_user_stocks_pipe__WEBPACK_IMPORTED_MODULE_20__["UpdateUserStocksPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_stocks_service__WEBPACK_IMPORTED_MODULE_21__["StocksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_chat_service__WEBPACK_IMPORTED_MODULE_23__["ChatService"])); };
ShowChannelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowChannelComponent, selectors: [["app-show-channel"]], viewQuery: function ShowChannelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_app_channels_show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_4__["WatchlistTabComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_app_channels_show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_5__["VideosTabComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_app_channels_show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistsTabComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.watchListTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.videosTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.playlistsTab = _t.first);
    } }, decls: 5, vars: 4, consts: [[3, "diameter", 4, "ngIf"], [1, "profile-list"], [4, "ngIf"], ["class", "channel-not-found", 4, "ngIf"], [3, "channelUser", "close", 4, "ngIf"], [3, "diameter"], [3, "tagSelected", 4, "ngIf"], [3, "channelUser", "authUser", "toggleChatBox", 4, "ngIf"], [1, "stocks-watchlist", "pWatchlist"], [1, "profile-list", "user-profile-block"], ["id", "channel-tabs-list", "role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "loader-wrapper"], [1, "spinner-container"], [1, "search-wrapper"], [1, "toggle-filters-btn"], ["class", "filter-toggle-btn", "type", "button", 3, "filters-active", "click", 4, "ngIf"], [3, "search", 4, "ngIf"], ["class", "right-side", 4, "ngIf"], [3, "channelUser", 4, "ngIf"], [3, "channelUser", "authUser", 4, "ngIf"], [3, "tagSelected"], [3, "channelUser", "authUser", "toggleChatBox"], [1, "nav-item"], ["data-toggle", "tab", "role", "tab", "aria-controls", "pWatch", "aria-selected", "true", 1, "nav-link", 3, "id", "href", "click"], ["type", "button", 1, "filter-toggle-btn", 3, "click"], [3, "search"], [1, "right-side"], ["class", "open-add-stock-modal", 3, "click", 4, "ngIf"], ["class", "watchlist-search d-", 4, "ngIf"], [1, "open-add-stock-modal", 3, "click"], ["type", "button"], [1, "watchlist-search", "d-"], [3, "whiteForm", "returnSearchText", "search", 4, "ngIf"], [3, "whiteForm", "returnSearchText", "search"], [3, "channelUser"], [3, "channelUser", "authUser"], [1, "channel-not-found"], [3, "channelUser", "close"]], template: function ShowChannelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ShowChannelComponent_mat_spinner_0_Template, 1, 1, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShowChannelComponent_ng_container_2_Template, 20, 12, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ShowChannelComponent_div_3_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ShowChannelComponent_app_chat_bottom_box_4_Template, 1, 1, "app-chat-bottom-box", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loader.channelLoading.status === "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.channelUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.channelUser && ctx.loader.channelLoading.status === "finished");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showChatBox && ctx.channelUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"], _shared_components_user_tags_user_tags_component__WEBPACK_IMPORTED_MODULE_26__["UserTagsComponent"], _channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_27__["ChannelProfileComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIcon"], _shared_components_search_videos_form_search_videos_form_component__WEBPACK_IMPORTED_MODULE_29__["SearchVideosFormComponent"], _shared_components_search_stocks_form_search_stocks_form_component__WEBPACK_IMPORTED_MODULE_30__["SearchStocksFormComponent"], _app_channels_show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_4__["WatchlistTabComponent"], _app_channels_show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_5__["VideosTabComponent"], _app_channels_show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistsTabComponent"], _about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_31__["AboutTabComponent"], _shared_components_chat_bottom_box_chat_bottom_box_component__WEBPACK_IMPORTED_MODULE_32__["ChatBottomBoxComponent"]], styles: [".profile-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.search-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: -webkit-min-content;\n  max-width: -moz-min-content;\n  max-width: min-content;\n  align-items: center;\n}\n\n.search-wrapper[_ngcontent-%COMP%]   .toggle-filters-btn[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 20px;\n  padding-top: 4px;\n  height: 31px;\n}\n\n.search-wrapper[_ngcontent-%COMP%]   .toggle-filters-btn[_ngcontent-%COMP%]   .filter-toggle-btn[_ngcontent-%COMP%] {\n  background-color: unset;\n  height: 23px;\n}\n\n.search-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#search-videos-form[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#search-videos-form[_ngcontent-%COMP%]   .filters-active[_ngcontent-%COMP%] {\n  background-color: #18B587 !important;\n  color: #ffffff;\n}\n\n.open-add-stock-modal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 31px;\n  margin-right: 20px;\n}\n\n.open-add-stock-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: unset;\n  height: 23px;\n}\n\n#channel-tabs-list[_ngcontent-%COMP%] {\n  width: 624px;\n}\n\n@media (max-width: 991px) {\n  #channel-tabs-list[_ngcontent-%COMP%] {\n    max-width: 624px;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFwcFxcY2hhbm5lbHNcXHNob3ctY2hhbm5lbFxcc2hvdy1jaGFubmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFubmVscy9zaG93LWNoYW5uZWwvc2hvdy1jaGFubmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFubmVscy9zaG93LWNoYW5uZWwvQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNJLFdBQUE7QUNKUjs7QURTQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFFJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDTlI7O0FEUVE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUNOWjs7QURVSTtFQUNJLGFBQUE7QUNSUjs7QURZQTtFQUNJLGFBQUE7QUNUSjs7QURZSTtFQUNJLG9DQUFBO0VBQ0EsY0VyQ0E7QUQyQlI7O0FEZUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNaSjs7QURjSTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQ1pSOztBRGdCQTtFQUNJLFlBQUE7QUNiSjs7QURjSTtFQUZKO0lBR1EsZ0JBQUE7SUFDQSxXQUFBO0VDWE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL3Nob3ctY2hhbm5lbC9zaG93LWNoYW5uZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG5cclxuLnByb2ZpbGUtYmxvY2sge1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnNlYXJjaC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAudG9nZ2xlLWZpbHRlcnMtYnRuIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgICAgIGhlaWdodDogMzFweDtcclxuXHJcbiAgICAgICAgLmZpbHRlci10b2dnbGUtYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LXNpZGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNzZWFyY2gtdmlkZW9zLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcblxyXG4gICAgLmZpbHRlcnMtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWV0bC1ncmVlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ub3Blbi1hZGQtc3RvY2stbW9kYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgICAgICBoZWlnaHQ6IDIzcHhcclxuICAgIH1cclxufVxyXG5cclxuI2NoYW5uZWwtdGFicy1saXN0IHtcclxuICAgIHdpZHRoOiA2MjRweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIG1heC13aWR0aDogNjI0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuIiwiLnByb2ZpbGUtYmxvY2sgbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYXJjaC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWFyY2gtd3JhcHBlciAudG9nZ2xlLWZpbHRlcnMtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBoZWlnaHQ6IDMxcHg7XG59XG4uc2VhcmNoLXdyYXBwZXIgLnRvZ2dsZS1maWx0ZXJzLWJ0biAuZmlsdGVyLXRvZ2dsZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgaGVpZ2h0OiAyM3B4O1xufVxuLnNlYXJjaC13cmFwcGVyIC5yaWdodC1zaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI3NlYXJjaC12aWRlb3MtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4jc2VhcmNoLXZpZGVvcy1mb3JtIC5maWx0ZXJzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOEI1ODcgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5vcGVuLWFkZC1zdG9jay1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzFweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLm9wZW4tYWRkLXN0b2NrLW1vZGFsIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBoZWlnaHQ6IDIzcHg7XG59XG5cbiNjaGFubmVsLXRhYnMtbGlzdCB7XG4gIHdpZHRoOiA2MjRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAjY2hhbm5lbC10YWJzLWxpc3Qge1xuICAgIG1heC13aWR0aDogNjI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iLCIkcmVkOiAjRjUzQzZGO1xyXG4kbWV0bC1ncmVlbjogIzE4QjU4NztcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiRsaWdodF9ncmF5OiAjYjNiM2IzO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowChannelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-show-channel',
                templateUrl: './show-channel.component.html',
                styleUrls: ['./show-channel.component.scss']
            }]
    }], function () { return [{ type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_9__["VideoService"] }, { type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_10__["GetAuthUserPipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }, { type: _core_services_users_service__WEBPACK_IMPORTED_MODULE_12__["UsersService"] }, { type: _shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_13__["Base64ToFilePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_14__["SubjectService"] }, { type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_15__["ChannelsService"] }, { type: _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_16__["PlaylistsService"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_14__["SubjectService"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"] }, { type: _core_services_loader_service__WEBPACK_IMPORTED_MODULE_19__["LoaderService"] }, { type: _shared_pipes_update_user_stocks_pipe__WEBPACK_IMPORTED_MODULE_20__["UpdateUserStocksPipe"] }, { type: _core_services_stocks_service__WEBPACK_IMPORTED_MODULE_21__["StocksService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrService"] }, { type: _core_services_chat_service__WEBPACK_IMPORTED_MODULE_23__["ChatService"] }]; }, { watchListTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_app_channels_show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_4__["WatchlistTabComponent"]]
        }], videosTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_app_channels_show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_5__["VideosTabComponent"]]
        }], playlistsTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_app_channels_show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistsTabComponent"]]
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
/* harmony import */ var _shared_components_videos_list_holder_videos_list_holder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/videos-list-holder/videos-list-holder.component */ "./src/app/shared/components/videos-list-holder/videos-list-holder.component.ts");
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
VideosTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosTabComponent, selectors: [["app-videos-tab"]], inputs: { channelUser: "channelUser", authUser: "authUser" }, decls: 2, vars: 3, consts: [[3, "filter", 4, "ngIf"], [3, "videos", "removable"], [3, "filter"]], template: function VideosTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideosTabComponent_app_video_filters_0_Template, 1, 0, "app-video-filters", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-videos-list-holder", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videos", ctx.channelUser.videos)("removable", ctx.authUser.username === ctx.channelUser.username);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_videos_list_holder_videos_list_holder_component__WEBPACK_IMPORTED_MODULE_7__["VideosListHolderComponent"], _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_8__["VideoFiltersComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL3Nob3ctY2hhbm5lbC92aWRlb3MtdGFiL3ZpZGVvcy10YWIuY29tcG9uZW50LnNjc3MifQ== */"] });
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/video.service */ "./src/app/core/services/video.service.ts");
/* harmony import */ var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/subject.service */ "./src/app/core/services/subject.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/pipes/filter-out-falsy-values-from-object.pipe */ "./src/app/shared/pipes/filter-out-falsy-values-from-object.pipe.ts");
/* harmony import */ var _core_services_stocks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/stocks.service */ "./src/app/core/services/stocks.service.ts");
/* harmony import */ var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/pipes/get-auth-user.pipe */ "./src/app/shared/pipes/get-auth-user.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _shared_components_stocks_tiles_stock_tiles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/stocks-tiles/stock-tiles.component */ "./src/app/shared/components/stocks-tiles/stock-tiles.component.ts");













function WatchlistTabComponent_div_0_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 20);
} }
function WatchlistTabComponent_div_0_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No stocks added to watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchlistTabComponent_div_0_app_stock_tiles_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-stock-tiles", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updatedStocksList", function WatchlistTabComponent_div_0_app_stock_tiles_3_Template_app_stock_tiles_updatedStocksList_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.saveUpdatedStocksList($event); })("updatedStocksPriority", function WatchlistTabComponent_div_0_app_stock_tiles_3_Template_app_stock_tiles_updatedStocksPriority_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.updateStocksPriority($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stocks", ctx_r3.filteredStocks)("userStocks", ctx_r3.userStocks)("followingAllowed", true);
} }
function WatchlistTabComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchlistTabComponent_div_0_mat_spinner_1_Template, 1, 1, "mat-spinner", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchlistTabComponent_div_0_small_2_Template, 2, 0, "small", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WatchlistTabComponent_div_0_app_stock_tiles_3_Template, 1, 3, "app-stock-tiles", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stocksLoading === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.userStocks == null ? null : ctx_r0.userStocks.length) === 0 && ctx_r0.stocksLoading === "finished");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.userStocks == null ? null : ctx_r0.userStocks.length) > 0);
} }
class WatchlistTabComponent {
    constructor(videoService, subjectService, router, getExactParams, stocksService, getAuthUser, subject, cdr) {
        this.videoService = videoService;
        this.subjectService = subjectService;
        this.router = router;
        this.getExactParams = getExactParams;
        this.stocksService = stocksService;
        this.getAuthUser = getAuthUser;
        this.subject = subject;
        this.cdr = cdr;
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.subscriptions = [];
        this.userStocks = [];
        this.filteredStocks = [];
        this.stocksLoading = 'idle';
    }
    ngOnInit() {
        this.authUser = this.getAuthUser.transform();
        this.search = localStorage.getItem('searchStock');
        this.stocksLoading = 'loading';
        this.subscriptions.push(this.subject.currentUserStocks
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(d => !d.initial))
            .subscribe(dt => {
            this.userStocks = dt.stocks;
            this.filteredStocks = this.userStocks;
            this.stocksLoading = 'finished';
        }));
    }
    getSearchResults(s) {
        this.search = s;
        if (s.search) {
            this.filteredStocks = this.userStocks.filter(us => us.name.toLowerCase().includes(s.search));
        }
        else {
            this.filteredStocks = this.userStocks;
        }
    }
    saveUpdatedStocksList(stocks) {
        this.stocksLoading = 'loading';
        this.subscriptions.push(this.stocksService.updateFollowedStocks(Object.assign({ user_id: this.authUser.id }, { stocks })).subscribe(dt => {
            this.userStocks = (dt === null || dt === void 0 ? void 0 : dt.user_stocks) || [];
            this.subject.changeUserStocks({ stocks: this.userStocks, empty: this.userStocks.length === 0 });
            this.stocksLoading = 'finished';
            this.cdr.detectChanges();
        }));
    }
    updateStocksPriority(e) {
        const sendData = {
            order_type: 'custom',
            rows: JSON.stringify(e),
            user_id: this.authUser.id
        };
        this.subject.changeUserStocks({ stocks: e, dragdrop: true });
        this.stocksService.updateUserStocksPriority(sendData).subscribe(dt => {
            localStorage.setItem('token', (dt.hasOwnProperty('token') ? dt.token : ''));
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
WatchlistTabComponent.ɵfac = function WatchlistTabComponent_Factory(t) { return new (t || WatchlistTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterOutFalsyValuesFromObjectPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_stocks_service__WEBPACK_IMPORTED_MODULE_7__["StocksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
WatchlistTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchlistTabComponent, selectors: [["app-watchlist-tab"]], inputs: { channelUser: "channelUser" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "diameter", 4, "ngIf"], ["class", "error", 4, "ngIf"], [3, "stocks", "userStocks", "followingAllowed", "updatedStocksList", "updatedStocksPriority", 4, "ngIf"], [3, "diameter"], [1, "error"], [3, "stocks", "userStocks", "followingAllowed", "updatedStocksList", "updatedStocksPriority"]], template: function WatchlistTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WatchlistTabComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredStocks && ctx.channelUser.username === ctx.authUser.username);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _shared_components_stocks_tiles_stock_tiles_component__WEBPACK_IMPORTED_MODULE_11__["StockTilesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL3Nob3ctY2hhbm5lbC93YXRjaGxpc3QtdGFiL3dhdGNobGlzdC10YWIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchlistTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-watchlist-tab',
                templateUrl: './watchlist-tab.component.html',
                styleUrls: ['./watchlist-tab.component.scss']
            }]
    }], function () { return [{ type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterOutFalsyValuesFromObjectPipe"] }, { type: _core_services_stocks_service__WEBPACK_IMPORTED_MODULE_7__["StocksService"] }, { type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__["GetAuthUserPipe"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { channelUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['channelUser']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=channels-channels-module-es2015.js.map