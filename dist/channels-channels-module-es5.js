function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["channels-channels-module"], {
  /***/
  "./src/app/channels/channels-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/channels/channels-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ChannelsRoutingModule */

  /***/
  function srcAppChannelsChannelsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChannelsRoutingModule", function () {
      return ChannelsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_channels_show_channel_show_channel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/channels/show-channel/show-channel.component */
    "./src/app/channels/show-channel/show-channel.component.ts");
    /* harmony import */


    var _app_channels_show_subscriptions_show_subscriptions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/channels/show-subscriptions/show-subscriptions.component */
    "./src/app/channels/show-subscriptions/show-subscriptions.component.ts");

    var routes = [{
      path: 'show',
      component: _app_channels_show_channel_show_channel_component__WEBPACK_IMPORTED_MODULE_2__["ShowChannelComponent"],
      data: {
        title: 'Channel page'
      }
    }, {
      path: 'subscriptions',
      component: _app_channels_show_subscriptions_show_subscriptions_component__WEBPACK_IMPORTED_MODULE_3__["ShowSubscriptionsComponent"],
      data: {
        title: 'My Subscriptions'
      }
    }];

    var ChannelsRoutingModule = function ChannelsRoutingModule() {
      _classCallCheck(this, ChannelsRoutingModule);
    };

    ChannelsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChannelsRoutingModule
    });
    ChannelsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChannelsRoutingModule_Factory(t) {
        return new (t || ChannelsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChannelsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/channels/channels.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/channels/channels.module.ts ***!
    \*********************************************/

  /*! exports provided: ChannelsModule */

  /***/
  function srcAppChannelsChannelsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChannelsModule", function () {
      return ChannelsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _channels_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./channels-routing.module */
    "./src/app/channels/channels-routing.module.ts");
    /* harmony import */


    var _show_channel_show_channel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./show-channel/show-channel.component */
    "./src/app/channels/show-channel/show-channel.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_photo_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-photo-editor */
    "./node_modules/ngx-photo-editor/__ivy_ngcc__/fesm2015/ngx-photo-editor.js");
    /* harmony import */


    var _show_subscriptions_show_subscriptions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./show-subscriptions/show-subscriptions.component */
    "./src/app/channels/show-subscriptions/show-subscriptions.component.ts");
    /* harmony import */


    var _show_channel_channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./show-channel/channel-profile/channel-profile.component */
    "./src/app/channels/show-channel/channel-profile/channel-profile.component.ts");
    /* harmony import */


    var _show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./show-channel/watchlist-tab/watchlist-tab.component */
    "./src/app/channels/show-channel/watchlist-tab/watchlist-tab.component.ts");
    /* harmony import */


    var _show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./show-channel/videos-tab/videos-tab.component */
    "./src/app/channels/show-channel/videos-tab/videos-tab.component.ts");
    /* harmony import */


    var _show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./show-channel/playlists-tab/playlists-tab.component */
    "./src/app/channels/show-channel/playlists-tab/playlists-tab.component.ts");
    /* harmony import */


    var _show_channel_about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./show-channel/about-tab/about-tab.component */
    "./src/app/channels/show-channel/about-tab/about-tab.component.ts");

    var ChannelsModule = function ChannelsModule() {
      _classCallCheck(this, ChannelsModule);
    };

    ChannelsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChannelsModule
    });
    ChannelsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChannelsModule_Factory(t) {
        return new (t || ChannelsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _channels_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChannelsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_photo_editor__WEBPACK_IMPORTED_MODULE_5__["NgxPhotoEditorModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChannelsModule, {
        declarations: [_show_channel_show_channel_component__WEBPACK_IMPORTED_MODULE_3__["ShowChannelComponent"], _show_subscriptions_show_subscriptions_component__WEBPACK_IMPORTED_MODULE_6__["ShowSubscriptionsComponent"], _show_channel_channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_7__["ChannelProfileComponent"], _show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_8__["WatchlistTabComponent"], _show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_9__["VideosTabComponent"], _show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_10__["PlaylistsTabComponent"], _show_channel_about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_11__["AboutTabComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _channels_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChannelsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_photo_editor__WEBPACK_IMPORTED_MODULE_5__["NgxPhotoEditorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_show_channel_show_channel_component__WEBPACK_IMPORTED_MODULE_3__["ShowChannelComponent"], _show_subscriptions_show_subscriptions_component__WEBPACK_IMPORTED_MODULE_6__["ShowSubscriptionsComponent"], _show_channel_channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_7__["ChannelProfileComponent"], _show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_8__["WatchlistTabComponent"], _show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_9__["VideosTabComponent"], _show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_10__["PlaylistsTabComponent"], _show_channel_about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_11__["AboutTabComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _channels_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChannelsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_photo_editor__WEBPACK_IMPORTED_MODULE_5__["NgxPhotoEditorModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/channels/show-channel/about-tab/about-tab.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/channels/show-channel/about-tab/about-tab.component.ts ***!
    \************************************************************************/

  /*! exports provided: AboutTabComponent */

  /***/
  function srcAppChannelsShowChannelAboutTabAboutTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutTabComponent", function () {
      return AboutTabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _core_constants_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/constants/global */
    "./src/app/core/constants/global.ts");
    /* harmony import */


    var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/services/channels.service */
    "./src/app/core/services/channels.service.ts");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    function AboutTabComponent_h2_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AboutTabComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutTabComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.editModeOn();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AboutTabComponent_mat_error_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not more than 100 characters please ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AboutTabComponent = /*#__PURE__*/function () {
      function AboutTabComponent(fb, channelService, getAuthUser) {
        _classCallCheck(this, AboutTabComponent);

        this.fb = fb;
        this.channelService = channelService;
        this.getAuthUser = getAuthUser;
        this.editMode = false;
        this.authUser = this.getAuthUser.transform();
      }

      _createClass(AboutTabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.aboutForm = this.fb.group({
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(_core_constants_global__WEBPACK_IMPORTED_MODULE_2__["DESCRIPTION_CHARACTERS_LIMIT"])]],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.aboutForm.patchValue({
            username: this.channelUser.username,
            id: this.channelUser.channel.id,
            description: this.channelUser.channel.description.replace(/<br\s*[\/]?>/gi, '\n') // ...this.channelUser.channel

          });
        }
      }, {
        key: "editModeOn",
        value: function editModeOn() {
          this.editMode = true;
        }
      }, {
        key: "getDesc",
        value: function getDesc(d) {
          return d.replace('<br>', '');
        }
      }, {
        key: "saveChannelDescription",
        value: function saveChannelDescription() {
          var _this = this;

          if (this.aboutForm.valid) {
            this.channelService.saveDescription(this.aboutForm.value).subscribe(function (dt) {
              _this.channelUser = dt;
              document.querySelector('.description').innerHTML = _this.channelUser.channel.description;
              _this.editMode = false;
            });
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          document.querySelector('.description').innerHTML = this.channelUser.channel.description;
        }
      }]);

      return AboutTabComponent;
    }();

    AboutTabComponent.ɵfac = function AboutTabComponent_Factory(t) {
      return new (t || AboutTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_3__["ChannelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_4__["GetAuthUserPipe"]));
    };

    AboutTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutTabComponent,
      selectors: [["app-about-tab"]],
      inputs: {
        channelUser: "channelUser"
      },
      decls: 17,
      vars: 11,
      consts: [[1, "about-tab"], [1, "info"], [4, "ngIf"], [1, "date"], ["class", "btn", 3, "click", 4, "ngIf"], [1, "description", 3, "hidden"], [1, "edit-form-controls", 3, "hidden"], ["id", "channel-about-form", 3, "formGroup"], ["rows", "3", "formControlName", "description"], [1, "save", 3, "click"], [1, "btn", 3, "click"]],
      template: function AboutTabComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutTabComponent_Template_button_click_14_listener() {
            return ctx.saveChannelDescription();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AboutTabComponent_mat_error_16_Template, 2, 0, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.channelUser.channel == null ? null : ctx.channelUser.channel.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Joined ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 8, ctx.channelUser.channel.created_at, "d MMM, yyyy"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode && ctx.authUser.username === ctx.channelUser.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getDesc(ctx.channelUser.channel.description));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.aboutForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aboutForm.get("description").hasError("maxlength"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: #18B587;\n  font-family: \"Muli-Bold\";\n}\n.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  margin-top: 0;\n  display: flex;\n  align-items: center;\n}\n.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #545454;\n  font-family: \"Muli-Bold\";\n}\n@media screen and (max-width: 400px) {\n  .about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 24px;\n  background: #18B587;\n  color: #FFFFFF;\n  padding: 4px 18px;\n  border-radius: 0;\n}\n.about-tab[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 24px;\n  background: #F4F4F4;\n  color: #545454;\n  font-size: 16px;\n}\n.about-tab[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.about-tab[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  background: #C9C9C9;\n  color: #545454;\n  padding: 4px 18px;\n  border-radius: 0;\n}\n.about-tab[_ngcontent-%COMP%]   .save.active[_ngcontent-%COMP%] {\n  background: #18B587;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL2Fib3V0LXRhYi9DOlxccHJvamVjdHNcXHRyYWRpbmdcXGZyb250ZW5kL3NyY1xcYXBwXFxjaGFubmVsc1xcc2hvdy1jaGFubmVsXFxhYm91dC10YWJcXGFib3V0LXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL2Fib3V0LXRhYi9hYm91dC10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0FSO0FEQ1E7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQ0NaO0FEQ1E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ1o7QURBWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUNFaEI7QUREZ0I7RUFKSjtJQUtRLGtCQUFBO0VDSWxCO0FBQ0Y7QURGWTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0loQjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0VSO0FEQ0k7RUFDSSxXQUFBO0FDQ1I7QURJSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FESVE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNGWiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL3Nob3ctY2hhbm5lbC9hYm91dC10YWIvYWJvdXQtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LXRhYiB7XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzE4QjU4NztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxOEI1ODc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAvL2hlaWdodDogMTIwcHg7XHJcbiAgICAgICAgLy9ib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNhdmUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0M5QzlDOTtcclxuICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMThweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxOEI1ODc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuYWJvdXQtdGFiIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmFib3V0LXRhYiAuaW5mbyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzE4QjU4NztcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XG59XG4uYWJvdXQtdGFiIC5pbmZvIC5kYXRlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hYm91dC10YWIgLmluZm8gLmRhdGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmFib3V0LXRhYiAuaW5mbyAuZGF0ZSBzcGFuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5hYm91dC10YWIgLmluZm8gLmRhdGUgLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZzogNHB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYWJvdXQtdGFiIC5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uYWJvdXQtdGFiIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWJvdXQtdGFiIC5zYXZlIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgYmFja2dyb3VuZDogI0M5QzlDOTtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIHBhZGRpbmc6IDRweCAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmFib3V0LXRhYiAuc2F2ZS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xuICBjb2xvcjogI0ZGRkZGRjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-tab',
          templateUrl: './about-tab.component.html',
          styleUrls: ['./about-tab.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_3__["ChannelsService"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_4__["GetAuthUserPipe"]
        }];
      }, {
        channelUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['channelUser']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/channels/show-channel/channel-profile/channel-profile.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/channels/show-channel/channel-profile/channel-profile.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ChannelProfileComponent */

  /***/
  function srcAppChannelsShowChannelChannelProfileChannelProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChannelProfileComponent", function () {
      return ChannelProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_constants_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @core/constants/global */
    "./src/app/core/constants/global.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _core_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/services/users.service */
    "./src/app/core/services/users.service.ts");
    /* harmony import */


    var _shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/pipes/base64-to-file.pipe */
    "./src/app/shared/pipes/base64-to-file.pipe.ts");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @core/services/channels.service */
    "./src/app/core/services/channels.service.ts");
    /* harmony import */


    var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @core/services/subject.service */
    "./src/app/core/services/subject.service.ts");
    /* harmony import */


    var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @core/services/loader.service */
    "./src/app/core/services/loader.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_photo_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-photo-editor */
    "./node_modules/ngx-photo-editor/__ivy_ngcc__/fesm2015/ngx-photo-editor.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");

    function ChannelProfileComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChannelProfileComponent_div_2_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.coverChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngx-photo-editor", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function ChannelProfileComponent_div_2_Template_ngx_photo_editor_imageCropped_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.coverCropped($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChanedEvent", ctx_r0.coverChangedEvent)("autoCrop", false)("viewMode", 3);
      }
    }

    function ChannelProfileComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.removeCover();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChannelProfileComponent_mat_icon_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChannelProfileComponent_mat_icon_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_mat_icon_15_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.removeAvatar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChannelProfileComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChannelProfileComponent_div_16_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.profileChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngx-photo-editor", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function ChannelProfileComponent_div_16_Template_ngx_photo_editor_imageCropped_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.profileCropped($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChanedEvent", ctx_r4.profileChangedEvent)("aspectRatio", 4 / 3)("viewMode", 1)("resizeToWidth", 500);
      }
    }

    function ChannelProfileComponent_p_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.channelUser.channel.name);
      }
    }

    function ChannelProfileComponent_mat_form_field_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ChannelProfileComponent_mat_form_field_19_Template_input_keyup_enter_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          return $event.preventDefault();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChannelProfileComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
      }
    }

    function ChannelProfileComponent_div_23_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_23_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r24.subscribeToChannel(ctx_r24.channelUser.channel);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subscribe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChannelProfileComponent_div_23_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_23_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.subscribeToChannel(ctx_r26.channelUser.channel);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subscribed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChannelProfileComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChannelProfileComponent_div_23_a_1_Template, 2, 0, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChannelProfileComponent_div_23_a_2_Template, 2, 0, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.subscribedToChannel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.subscribedToChannel);
      }
    }

    function ChannelProfileComponent_div_24_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_24_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r31.toggleEditMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit channel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChannelProfileComponent_div_24_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_24_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r33.toggleEditMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChannelProfileComponent_div_24_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelProfileComponent_div_24_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r35.saveChanges();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Save changes ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChannelProfileComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChannelProfileComponent_div_24_button_1_Template, 4, 0, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChannelProfileComponent_div_24_button_2_Template, 4, 0, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChannelProfileComponent_div_24_button_3_Template, 4, 0, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.editMode);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        opacity: a0
      };
    };

    var ChannelProfileComponent = /*#__PURE__*/function () {
      function ChannelProfileComponent(usersService, base64ToFile, getAuthUser, channelService, subject, loader, fb) {
        _classCallCheck(this, ChannelProfileComponent);

        this.usersService = usersService;
        this.base64ToFile = base64ToFile;
        this.getAuthUser = getAuthUser;
        this.channelService = channelService;
        this.subject = subject;
        this.loader = loader;
        this.fb = fb;
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.subscribedToChannel = false;
        this.subscribersCount = 0;
        this.changingImage = false;
        this.editMode = false;
        this.channelForm = this.fb.group({
          id: [''],
          avatar: [''],
          cover: [''],
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          username: ['']
        });
      }

      _createClass(ChannelProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.channelUser) {
            this.checkChannelSubscription(); // this.detectImageChange();

            this.channelForm.patchValue({
              name: this.channelUser.channel.name,
              id: this.channelUser.channel.id,
              username: this.channelUser.username,
              avatar: this.channelUser.channel.avatar,
              cover: this.channelUser.channel.cover
            });
          }
        }
      }, {
        key: "coverChangeEvent",
        value: function coverChangeEvent(event) {
          this.coverChangedEvent = event;
        }
      }, {
        key: "profileChangeEvent",
        value: function profileChangeEvent(event) {
          this.profileChangedEvent = event;
        }
      }, {
        key: "detectImageChange",
        value: function detectImageChange() {
          // document.querySelector('img.avatar').addEventListener('load', () => {
          //     console.log('Loading image!!!')
          if (this.profileChangedEvent || this.coverChangedEvent) {
            this.loader.dataLoading = false;
            this.changingImage = false;
            console.log('Avatar changed');
            console.log(this.changingImage);
          } // });

        }
      }, {
        key: "profileCropped",
        value: function profileCropped(event) {
          var _this2 = this;

          // this.loader.dataLoading = true;
          this.changingImage = true;
          this.profileBase64 = event.base64;
          var filename = "avatar_".concat(Date.now(), ".jpg");
          var fd = new FormData();
          this.channelForm.patchValue({
            avatar: filename
          });
          fd.append('avatar_file', this.base64ToFile.transform(event.base64), filename);
          fd.append('avatar', filename);
          fd.append('id', this.authUser.id);
          this.usersService.changeProfileImage(fd).subscribe(function (dt) {
            _this2.changeAuthUserInfo(dt);
          });
        }
      }, {
        key: "coverCropped",
        value: function coverCropped(event) {
          var _this3 = this;

          this.coverBase64 = event.base64;
          this.changingImage = true;
          var fd = new FormData();
          var filename = "cover_".concat(Date.now(), ".jpg");
          this.channelForm.patchValue({
            cover: filename
          });
          fd.append('cover_file', this.base64ToFile.transform(event.base64), filename);
          fd.append('cover', filename);
          fd.append('id', this.authUser.id);
          this.loader.dataLoading = true;
          this.usersService.changeCoverImage(fd).subscribe(function (dt) {
            _this3.changeAuthUserInfo(dt);
          });
        }
      }, {
        key: "removeCover",
        value: function removeCover() {
          this.channelUser.channel.cover = '';
          this.channelForm.patchValue({
            cover: this.channelUser.channel.cover
          });
        }
      }, {
        key: "removeAvatar",
        value: function removeAvatar() {
          this.channelUser.channel.avatar = '';
          this.channelForm.patchValue({
            avatar: this.channelUser.channel.avatar
          });
        }
      }, {
        key: "subscribeToChannel",
        value: function subscribeToChannel(channel) {
          var _this4 = this;

          this.channelService.subscribeToChannel({
            user_id: this.authUser.id,
            channel_id: channel.id
          }).subscribe(function (dt) {
            _this4.subscribedToChannel = dt.status === 'Subscribed';
            _this4.subscribersCount = dt.subscribers_count;

            _this4.channelService.getUserChannelSubscriptions({
              user_id: _this4.authUser.id
            }).subscribe(function (d) {
              _this4.subject.setUserSubscriptions(d);
            });
          });
        }
      }, {
        key: "checkChannelSubscription",
        value: function checkChannelSubscription() {
          var _this5 = this;

          // console.log(this.channelUser)
          this.channelService.checkChannelSubscription({
            user_id: this.authUser.id,
            channel_id: this.channelUser.channel.id
          }).subscribe(function (dt) {
            _this5.subscribedToChannel = dt.status === 'Subscribed';
            _this5.subscribersCount = dt.subscribers_count;
          });
        }
      }, {
        key: "changeAuthUserInfo",
        value: function changeAuthUserInfo(dt) {
          localStorage.setItem('token', dt.token);
          this.authUser = this.getAuthUser.transform();
          this.channelUser = this.authUser;
          this.changingImage = false; // this.loader.dataLoading = false;
          // console.log(this.channelUser)
        }
      }, {
        key: "toggleEditMode",
        value: function toggleEditMode() {
          this.editMode = !this.editMode;
        }
      }, {
        key: "saveChanges",
        value: function saveChanges() {
          var _this6 = this;

          console.log('save changes!!!');
          console.log(this.channelForm.value);
          console.log('save changes!!!');

          if (this.channelForm.valid) {
            this.channelService.changeChannelDetails(this.channelForm.value).subscribe(function (dt) {
              _this6.editMode = false;

              _this6.changeAuthUserInfo(dt);
            });
          }
        }
      }]);

      return ChannelProfileComponent;
    }();

    ChannelProfileComponent.ɵfac = function ChannelProfileComponent_Factory(t) {
      return new (t || ChannelProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_4__["Base64ToFilePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_5__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_6__["ChannelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    ChannelProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChannelProfileComponent,
      selectors: [["app-channel-profile"]],
      inputs: {
        channelUser: "channelUser",
        authUser: "authUser"
      },
      decls: 25,
      vars: 23,
      consts: [[3, "formGroup"], [1, "profile-block"], [3, "hidden", 4, "ngIf"], [1, "cover-image-container"], ["for", "cover-image-input"], ["id", "cover-image", 3, "src", "load"], ["mat-icon-button", "", "type", "button", "class", "remove-cover-btn", 3, "click", 4, "ngIf"], [1, "sub-block"], [1, "d-flex", "align-items-center"], [1, "avatar-container"], ["for", "profile-image-input"], ["id", "profile-image", 1, "avatar", 3, "ngStyle", "src", "load"], ["id", "add-photo-btn", 4, "ngIf"], ["class", "remove-avatar-btn", 3, "click", 4, "ngIf"], ["class", "main-text-1", "id", "channel-name", 4, "ngIf"], [4, "ngIf"], [1, "main-text-4"], ["class", "loader", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], [3, "hidden"], ["type", "file", "id", "cover-image-input", 3, "change"], ["type", "hidden", "formControlName", "cover"], [3, "imageChanedEvent", "autoCrop", "viewMode", "imageCropped"], ["mat-icon-button", "", "type", "button", 1, "remove-cover-btn", 3, "click"], ["id", "add-photo-btn"], [1, "remove-avatar-btn", 3, "click"], ["type", "file", "id", "profile-image-input", 3, "change"], ["type", "hidden", "formControlName", "avatar"], [3, "imageChanedEvent", "aspectRatio", "viewMode", "resizeToWidth", "imageCropped"], ["id", "channel-name", 1, "main-text-1"], ["matInput", "", "formControlName", "name", "id", "channel-name-input", 3, "keyup.enter"], [1, "loader"], [3, "diameter"], ["class", "subscribe-btn", 3, "click", 4, "ngIf"], ["class", "subscribe-btn subscribed", 3, "click", 4, "ngIf"], [1, "subscribe-btn", 3, "click"], [1, "subscribe-btn", "subscribed", 3, "click"], ["class", "btn", "type", "button", "id", "edit-channel", 3, "click", 4, "ngIf"], ["class", "btn", "type", "button", "id", "cancel-changes", 3, "click", 4, "ngIf"], ["class", "btn", "type", "button", "id", "save-channel-details", 3, "click", 4, "ngIf"], ["type", "button", "id", "edit-channel", 1, "btn", 3, "click"], ["type", "button", "id", "cancel-changes", 1, "btn", 3, "click"], ["type", "button", "id", "save-channel-details", 1, "btn", 3, "click"]],
      template: function ChannelProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChannelProfileComponent_div_2_Template, 4, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ChannelProfileComponent_Template_img_load_5_listener() {
            return ctx.detectImageChange();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ChannelProfileComponent_Template_img_load_12_listener() {
            return ctx.detectImageChange();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ChannelProfileComponent_div_23_Template, 3, 2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ChannelProfileComponent_div_24_Template, 4, 3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ngx_photo_editor__WEBPACK_IMPORTED_MODULE_10__["NgxPhotoEditorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_16__["GetThumbPathPipe"]],
      styles: [".loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 52px;\n  margin-left: 10px;\n  margin-top: -17px;\n}\n\n#add-photo-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 10px;\n  cursor: pointer;\n}\n\n.cover-image-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cover-image-container[_ngcontent-%COMP%]   .remove-cover-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n.cover-image-container[_ngcontent-%COMP%]   .remove-cover-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  background-color: #000000;\n  color: #ffffff;\n  border-radius: 20px;\n  font-size: 16px;\n}\n\nlabel[for=cover-image-input][_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#edit-channel[_ngcontent-%COMP%], #save-channel-details[_ngcontent-%COMP%] {\n  background: #18B587;\n  border-radius: 0;\n  color: #fff;\n  padding: 8px 24px;\n  display: flex;\n  align-items: center;\n}\n\n#cancel-changes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #C9C9C9;\n  border-radius: 0;\n  color: #fff;\n  padding: 8px 24px;\n  margin-right: 20px;\n}\n\n.avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.avatar-container[_ngcontent-%COMP%]   .remove-avatar-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 13px;\n  color: #000000;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.subscribed[_ngcontent-%COMP%] {\n  background-color: #D6D6D6 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL2NoYW5uZWwtcHJvZmlsZS9DOlxccHJvamVjdHNcXHRyYWRpbmdcXGZyb250ZW5kL3NyY1xcYXBwXFxjaGFubmVsc1xcc2hvdy1jaGFubmVsXFxjaGFubmVsLXByb2ZpbGVcXGNoYW5uZWwtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL2NoYW5uZWwtcHJvZmlsZS9jaGFubmVsLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYW5uZWxzL3Nob3ctY2hhbm5lbC9jaGFubmVsLXByb2ZpbGUvQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0RKOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQ0ZSOztBRElRO0VBQ0kseUJFeEJKO0VGeUJJLGNFMUJKO0VGMkJJLG1CQUFBO0VBQ0EsZUFBQTtBQ0ZaOztBRFFBO0VBQ0ksV0FBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRFFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEUUE7RUFDSSxrQkFBQTtBQ0xKOztBRE9JO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ05SOztBRFVBO0VBQ0ksb0NBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL3Nob3ctY2hhbm5lbC9jaGFubmVsLXByb2ZpbGUvY2hhbm5lbC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5sb2FkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbn1cclxuXHJcbiNhZGQtcGhvdG8tYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDlweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5jb3Zlci1pbWFnZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5yZW1vdmUtY292ZXItYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxubGFiZWxbZm9yPVwiY292ZXItaW1hZ2UtaW5wdXRcIl0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNlZGl0LWNoYW5uZWwsICNzYXZlLWNoYW5uZWwtZGV0YWlscyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2NhbmNlbC1jaGFuZ2VzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0M5QzlDOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYXZhdGFyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLnJlbW92ZS1hdmF0YXItYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgdG9wOiAxM3B4O1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3Vic2NyaWJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZENkQ2ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmxvYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMTdweDtcbn1cblxuI2FkZC1waG90by1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDlweDtcbiAgdG9wOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb3Zlci1pbWFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY292ZXItaW1hZ2UtY29udGFpbmVyIC5yZW1vdmUtY292ZXItYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cbi5jb3Zlci1pbWFnZS1jb250YWluZXIgLnJlbW92ZS1jb3Zlci1idG4gbWF0LWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5sYWJlbFtmb3I9Y292ZXItaW1hZ2UtaW5wdXRdIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNlZGl0LWNoYW5uZWwsICNzYXZlLWNoYW5uZWwtZGV0YWlscyB7XG4gIGJhY2tncm91bmQ6ICMxOEI1ODc7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2NhbmNlbC1jaGFuZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0M5QzlDOTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5hdmF0YXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmF2YXRhci1jb250YWluZXIgLnJlbW92ZS1hdmF0YXItYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxM3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWJzY3JpYmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RDZENiAhaW1wb3J0YW50O1xufSIsIiRyZWQ6ICNGNTNDNkY7XHJcbiRncmVlbjogIzE4QjU4NztcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-channel-profile',
          templateUrl: './channel-profile.component.html',
          styleUrls: ['./channel-profile.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
        }, {
          type: _shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_4__["Base64ToFilePipe"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_5__["GetAuthUserPipe"]
        }, {
          type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_6__["ChannelsService"]
        }, {
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"]
        }, {
          type: _core_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, {
        channelUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['channelUser']
        }],
        authUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['authUser']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/channels/show-channel/playlists-tab/playlists-tab.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/channels/show-channel/playlists-tab/playlists-tab.component.ts ***!
    \********************************************************************************/

  /*! exports provided: PlaylistsTabComponent */

  /***/
  function srcAppChannelsShowChannelPlaylistsTabPlaylistsTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistsTabComponent", function () {
      return PlaylistsTabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_constants_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @core/constants/global */
    "./src/app/core/constants/global.ts");
    /* harmony import */


    var _core_components_modals_add_playlist_dialog_add_playlist_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/components/modals/add-playlist-dialog/add-playlist-dialog.component */
    "./src/app/core/components/modals/add-playlist-dialog/add-playlist-dialog.component.ts");
    /* harmony import */


    var _core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/components/modals/confirmation-dialog/confirmation-dialog.component */
    "./src/app/core/components/modals/confirmation-dialog/confirmation-dialog.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @core/services/playlists.service */
    "./src/app/core/services/playlists.service.ts");
    /* harmony import */


    var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @core/services/subject.service */
    "./src/app/core/services/subject.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @shared/pipes/filter-out-falsy-values-from-object.pipe */
    "./src/app/shared/pipes/filter-out-falsy-values-from-object.pipe.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @shared/components/video-filters/video-filters.component */
    "./src/app/shared/components/video-filters/video-filters.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");

    function PlaylistsTabComponent_app_video_filters_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-video-filters", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function PlaylistsTabComponent_app_video_filters_0_Template_app_video_filters_filter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.getFilteredPlaylists($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlaylistsTabComponent_ng_container_2_table_3_tr_13_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility_off");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Private");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function PlaylistsTabComponent_ng_container_2_table_3_tr_13_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility_on");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Public");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function PlaylistsTabComponent_ng_container_2_table_3_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistsTabComponent_ng_container_2_table_3_tr_13_Template_img_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var playlist_r8 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r11.goToEditPage(playlist_r8);
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistsTabComponent_ng_container_2_table_3_tr_13_Template_span_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var playlist_r8 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r13.goToEditPage(playlist_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistsTabComponent_ng_container_2_table_3_tr_13_Template_mat_icon_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var playlist_r8 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r14.removePlaylist(playlist_r8.id, ctx_r14.channelUser.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var playlist_r8 = ctx.$implicit;

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
      }
    }

    function PlaylistsTabComponent_ng_container_2_table_3_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.playlists);
      }
    }

    function PlaylistsTabComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistsTabComponent_ng_container_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.openAddPlaylistModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add New Playlist");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlaylistsTabComponent_ng_container_2_table_3_Template, 14, 1, "table", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.playlists.length > 0);
      }
    }

    function PlaylistsTabComponent_ng_container_3_ng_container_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistsTabComponent_ng_container_3_ng_container_2_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var playlist_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.openPlaylistPage(playlist_r18, playlist_r18.videos[0] == null ? null : playlist_r18.videos[0].id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "playlist_play");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var playlist_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

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
      }
    }

    function PlaylistsTabComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlaylistsTabComponent_ng_container_3_ng_container_2_div_1_Template, 17, 7, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var playlist_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (playlist_r18 == null ? null : playlist_r18.videos == null ? null : playlist_r18.videos.length) > 0);
      }
    }

    function PlaylistsTabComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlaylistsTabComponent_ng_container_3_ng_container_2_Template, 2, 1, "ng-container", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.playlists);
      }
    }

    function PlaylistsTabComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No playlists found for this channel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PlaylistsTabComponent = /*#__PURE__*/function () {
      function PlaylistsTabComponent(router, playlistsService, subjectService, dialog, getExactParams) {
        _classCallCheck(this, PlaylistsTabComponent);

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
      }

      _createClass(PlaylistsTabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.search = localStorage.getItem('search');
          this.getPlaylists({
            search: this.search,
            filters: this.filters
          });
          this.getFiltersToggleState();
        }
      }, {
        key: "getFiltersToggleState",
        value: function getFiltersToggleState() {
          var _this7 = this;

          this.subscriptions.push(this.subjectService.getToggleFiltersData().subscribe(function (dt) {
            _this7.showFilters = dt;
          }));
        }
      }, {
        key: "getPlaylists",
        value: function getPlaylists(params) {
          var _this8 = this;

          params = this.getExactParams.transform(params);
          this.playlistsService.get(Object.assign({
            channel_id: this.channelUser.channel.id,
            user_id: this.authUser.id
          }, params)).subscribe(function (dt) {
            _this8.playlists = dt;
          });
        }
      }, {
        key: "openAddPlaylistModal",
        value: function openAddPlaylistModal() {
          var _this9 = this;

          this.dialog.open(_core_components_modals_add_playlist_dialog_add_playlist_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AddPlaylistDialogComponent"], {
            data: {
              channel_id: this.channelUser.channel.id
            }
          }).afterClosed().subscribe(function (dt) {
            _this9.getPlaylists({
              search: _this9.search,
              filters: _this9.filters
            });
          });
        }
      }, {
        key: "openPlaylistPage",
        value: function openPlaylistPage(playlist, firstVideoId) {
          var route = 'videos/play';
          var params = {
            id: firstVideoId,
            playlist_id: playlist.id
          };
          this.router.navigate([route], {
            queryParams: params
          });
        }
      }, {
        key: "getSearchResults",
        value: function getSearchResults(search) {
          this.search = search;
          this.getPlaylists({
            search: search,
            filters: this.filters
          });
        }
      }, {
        key: "getFilteredPlaylists",
        value: function getFilteredPlaylists(filters) {
          this.filters = filters;
          this.getPlaylists({
            search: this.search,
            filters: filters
          });
        }
      }, {
        key: "goToEditPage",
        value: function goToEditPage(playlist) {
          this.router.navigate(['playlists/single/' + playlist.id]);
        }
      }, {
        key: "removePlaylist",
        value: function removePlaylist(id, channelId) {
          var _this10 = this;

          this.dialog.open(_core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"]).afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
              _this10.playlistsService.removePlaylist({
                id: id,
                channel_id: channelId
              }).subscribe(function (dt) {
                _this10.getPlaylists({
                  search: _this10.search,
                  filters: _this10.filters
                });
              });
            }
          });
        }
      }]);

      return PlaylistsTabComponent;
    }();

    PlaylistsTabComponent.ɵfac = function PlaylistsTabComponent_Factory(t) {
      return new (t || PlaylistsTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_playlists_service__WEBPACK_IMPORTED_MODULE_5__["PlaylistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterOutFalsyValuesFromObjectPipe"]));
    };

    PlaylistsTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlaylistsTabComponent,
      selectors: [["app-playlists-tab"]],
      inputs: {
        channelUser: "channelUser",
        authUser: "authUser"
      },
      decls: 6,
      vars: 4,
      consts: [[3, "filter", 4, "ngIf"], [1, "playlist-tab"], [4, "ngIf"], ["id", "no-playlists-found"], [3, "filter"], [1, "btn", "new-playlist", 3, "click"], ["class", "table-responsive", 4, "ngIf"], [1, "table-responsive"], [4, "ngFor", "ngForOf"], [1, "img-info"], [1, "thumbnail", 3, "src", "click"], [1, "info"], [1, "material-icons", 3, "click"], [3, "click"], [1, "playlists-items"], ["class", "item", 4, "ngIf"], [1, "item"], [1, "top-wrap", 3, "click"], [1, "thumbnail", 3, "src"], [1, "overlay-info"], [1, "icon"], [1, "material-icons"], [1, "video-count"]],
      template: function PlaylistsTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlaylistsTabComponent_app_video_filters_0_Template, 1, 0, "app-video-filters", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlaylistsTabComponent_ng_container_2_Template, 4, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlaylistsTabComponent_ng_container_3_Template, 3, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlaylistsTabComponent_span_5_Template, 2, 0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFilters);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authUser.username === ctx.channelUser.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authUser.username !== ctx.channelUser.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playlists.length === 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_10__["VideoFiltersComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_12__["GetThumbPathPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
      styles: [".playlist-tab[_ngcontent-%COMP%]   .new-playlist[_ngcontent-%COMP%] {\n  background: #18B587;\n  border-radius: 0;\n  color: #fff;\n  padding: 8px 24px;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  display: table;\n  margin: 24px 0;\n  width: 100%;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   .td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%]:hover {\n  color: #18B587;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  color: #545454;\n  font-family: \"Muli-Bold\", sans-serif;\n  white-space: nowrap;\n  font-size: 16px;\n  padding: 12px 0;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  margin-right: 12px !important;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 144px;\n  cursor: pointer;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  max-width: 240px;\n  font-size: 16px;\n  font-family: \"Muli-Bold\";\n  -webkit-line-clamp: 1;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 240px;\n  font-size: 12px;\n  font-weight: normal;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n@media screen and (max-width: 991px) {\n  .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n  }\n}\n.playlists-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  flex: 0 0 calc(33.3% - 21px);\n  margin-right: 32px;\n  margin-bottom: 32px;\n  cursor: pointer;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3n+3) {\n  margin-right: 0;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 216px;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   .overlay-info[_ngcontent-%COMP%] {\n  padding: 16px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   .overlay-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #545454;\n  font-size: 16px;\n  font-weight: bold;\n}\n.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: #545454;\n  font-size: 15px;\n  font-weight: 500;\n}\n@media screen and (max-width: 991px) {\n  .playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    flex: 0 0 calc(50% - 21px);\n  }\n}\n@media screen and (max-width: 767px) {\n  .playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL3BsYXlsaXN0cy10YWIvQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcY2hhbm5lbHNcXHNob3ctY2hhbm5lbFxccGxheWxpc3RzLXRhYlxccGxheWxpc3RzLXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL3BsYXlsaXN0cy10YWIvcGxheWxpc3RzLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNBUjtBRElJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDRlI7QURJUTtFQUNJLGtCQUFBO0FDRlo7QURPZ0I7RUFDSSxnQkFBQTtBQ0xwQjtBRFVnQjtFQUNJLGlCQUFBO0FDUnBCO0FEU29CO0VBQ0ksZ0JBQUE7QUNQeEI7QURRd0I7RUFDSSxjQUFBO0FDTjVCO0FEWVk7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1ZoQjtBRGVvQjtFQUNJLFNBQUE7QUNieEI7QURpQmdCO0VBQ0ksNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNmcEI7QURrQmdCO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDaEJwQjtBRGtCb0I7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ2hCeEI7QURtQm9CO0VBQ0ksaUJBQUE7QUNqQnhCO0FEbUJ3QjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNqQjVCO0FEb0J3QjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNsQjVCO0FEd0JRO0VBdEZKO0lBdUZRLGNBQUE7SUFDQSxnQkFBQTtFQ3JCVjtBQUNGO0FEeUJBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUN0Qko7QUR1Qkk7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDckJSO0FEdUJRO0VBQ0ksZUFBQTtBQ3JCWjtBRHVCUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ3JCWjtBRHNCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ3BCaEI7QURzQlk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUNwQmhCO0FEcUJnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ25CcEI7QUR3QlE7RUFDSSxnQkFBQTtBQ3RCWjtBRHVCWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNyQmhCO0FEd0JZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3RCaEI7QUR5QlE7RUFsREo7SUFtRFEsMEJBQUE7RUN0QlY7QUFDRjtBRHVCUTtFQXJESjtJQXNEUSxjQUFBO0VDcEJWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGFubmVscy9zaG93LWNoYW5uZWwvcGxheWxpc3RzLXRhYi9wbGF5bGlzdHMtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXlsaXN0LXRhYiB7XHJcbiAgICAubmV3LXBsYXlsaXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDI0cHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBtYXJnaW46IDI0cHggMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkICNDOUM5Qzk7XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcblxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIC8vYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0M5QzlDOTtcclxuICAgICAgICAgICAgICAgIC50ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMThCNTg3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ZCwgdGgge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzlDOUM5O1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0M5QzlDOTtcclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9ib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pbWctaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wbGF5bGlzdHMtaXRlbXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLml0ZW17XHJcbiAgICAgICAgZmxleDogMCAwIGNhbGMoMzMuMyUgLSAyMXB4KTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKDNuKzMpe1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b3Atd3JhcHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIxNnB4O1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdmVybGF5LWluZm97XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMC4zOCk7XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmZve1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KXtcclxuICAgICAgICAgICAgZmxleDogMCAwIGNhbGMoNTAlIC0gMjFweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgICAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5wbGF5bGlzdC10YWIgLm5ldy1wbGF5bGlzdCB7XG4gIGJhY2tncm91bmQ6ICMxOEI1ODc7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMjRweDtcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAyNHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHI6bGFzdC1jaGlsZCAudGQge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0ZDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRkOmxhc3QtY2hpbGQgLm1hdGVyaWFsLWljb25zIHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGQ6bGFzdC1jaGlsZCAubWF0ZXJpYWwtaWNvbnM6aG92ZXIge1xuICBjb2xvcjogIzE4QjU4Nztcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGQsIC5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGgge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCIsIHNhbnMtc2VyaWY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0ZDpsYXN0LWNoaWxkIC5tYXRlcmlhbC1pY29ucywgLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0aDpsYXN0LWNoaWxkIC5tYXRlcmlhbC1pY29ucyB7XG4gIG1hcmdpbjogMDtcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGQgLm1hdGVyaWFsLWljb25zLCAucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRoIC5tYXRlcmlhbC1pY29ucyB7XG4gIG1hcmdpbi1yaWdodDogMTJweCAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRkIC5pbWctaW5mbywgLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0aCAuaW1nLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGQgLmltZy1pbmZvIGltZywgLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0aCAuaW1nLWluZm8gaW1nIHtcbiAgd2lkdGg6IDE0NHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRkIC5pbWctaW5mbyAuaW5mbywgLnBsYXlsaXN0LXRhYiB0YWJsZSB0ciB0aCAuaW1nLWluZm8gLmluZm8ge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cbi5wbGF5bGlzdC10YWIgdGFibGUgdHIgdGQgLmltZy1pbmZvIC5pbmZvIGgzLCAucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRoIC5pbWctaW5mbyAuaW5mbyBoMyB7XG4gIG1heC13aWR0aDogMjQwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRkIC5pbWctaW5mbyAuaW5mbyBwLCAucGxheWxpc3QtdGFiIHRhYmxlIHRyIHRoIC5pbWctaW5mbyAuaW5mbyBwIHtcbiAgbWF4LXdpZHRoOiAyNDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnBsYXlsaXN0LXRhYiB0YWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgfVxufVxuXG4ucGxheWxpc3RzLWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnBsYXlsaXN0cy1pdGVtcyAuaXRlbSB7XG4gIGZsZXg6IDAgMCBjYWxjKDMzLjMlIC0gMjFweCk7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlsaXN0cy1pdGVtcyAuaXRlbTpudGgtY2hpbGQoM24rMykge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ucGxheWxpc3RzLWl0ZW1zIC5pdGVtIC50b3Atd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMTZweDtcbn1cbi5wbGF5bGlzdHMtaXRlbXMgLml0ZW0gLnRvcC13cmFwIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnBsYXlsaXN0cy1pdGVtcyAuaXRlbSAudG9wLXdyYXAgLm92ZXJsYXktaW5mbyB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuLnBsYXlsaXN0cy1pdGVtcyAuaXRlbSAudG9wLXdyYXAgLm92ZXJsYXktaW5mbyBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5wbGF5bGlzdHMtaXRlbXMgLml0ZW0gLmluZm8ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLnBsYXlsaXN0cy1pdGVtcyAuaXRlbSAuaW5mbyBoMiB7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBsYXlsaXN0cy1pdGVtcyAuaXRlbSAuaW5mbyBwIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnBsYXlsaXN0cy1pdGVtcyAuaXRlbSB7XG4gICAgZmxleDogMCAwIGNhbGMoNTAlIC0gMjFweCk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wbGF5bGlzdHMtaXRlbXMgLml0ZW0ge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistsTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-playlists-tab',
          templateUrl: './playlists-tab.component.html',
          styleUrls: ['./playlists-tab.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_5__["PlaylistsService"]
        }, {
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }, {
          type: _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterOutFalsyValuesFromObjectPipe"]
        }];
      }, {
        channelUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['channelUser']
        }],
        authUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['authUser']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/channels/show-channel/show-channel.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/channels/show-channel/show-channel.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ShowChannelComponent */

  /***/
  function srcAppChannelsShowChannelShowChannelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowChannelComponent", function () {
      return ShowChannelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_constants_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/constants/global */
    "./src/app/core/constants/global.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_channels_show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/channels/show-channel/watchlist-tab/watchlist-tab.component */
    "./src/app/channels/show-channel/watchlist-tab/watchlist-tab.component.ts");
    /* harmony import */


    var _app_channels_show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/channels/show-channel/videos-tab/videos-tab.component */
    "./src/app/channels/show-channel/videos-tab/videos-tab.component.ts");
    /* harmony import */


    var _app_channels_show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/channels/show-channel/playlists-tab/playlists-tab.component */
    "./src/app/channels/show-channel/playlists-tab/playlists-tab.component.ts");
    /* harmony import */


    var _core_components_modals_crypto_currency_crypto_currency_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @core/components/modals/crypto-currency/crypto-currency.component */
    "./src/app/core/components/modals/crypto-currency/crypto-currency.component.ts");
    /* harmony import */


    var _core_services_video_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @core/services/video.service */
    "./src/app/core/services/video.service.ts");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_users_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @core/services/users.service */
    "./src/app/core/services/users.service.ts");
    /* harmony import */


    var _shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @shared/pipes/base64-to-file.pipe */
    "./src/app/shared/pipes/base64-to-file.pipe.ts");
    /* harmony import */


    var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @core/services/subject.service */
    "./src/app/core/services/subject.service.ts");
    /* harmony import */


    var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @core/services/channels.service */
    "./src/app/core/services/channels.service.ts");
    /* harmony import */


    var _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @core/services/playlists.service */
    "./src/app/core/services/playlists.service.ts");
    /* harmony import */


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @core/services/auth.service */
    "./src/app/core/services/auth.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_user_tags_user_tags_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../shared/components/user-tags/user-tags.component */
    "./src/app/shared/components/user-tags/user-tags.component.ts");
    /* harmony import */


    var _channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./channel-profile/channel-profile.component */
    "./src/app/channels/show-channel/channel-profile/channel-profile.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./about-tab/about-tab.component */
    "./src/app/channels/show-channel/about-tab/about-tab.component.ts");

    function ShowChannelComponent_app_user_tags_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-user-tags", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tagSelected", function ShowChannelComponent_app_user_tags_1_Template_app_user_tags_tagSelected_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r3.getVideosByTag($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ShowChannelComponent_ng_container_2_li_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowChannelComponent_ng_container_2_li_5_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var tab_r13 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r14.changeActiveTab(tab_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tab_r13 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", tab_r13 === ctx_r5.activeTab);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", tab_r13.link, "-tab");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "#" + tab_r13.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tab_r13.name);
      }
    }

    function ShowChannelComponent_ng_container_2_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowChannelComponent_ng_container_2_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r16.toggleFilters();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "tune");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("filters-active", ctx_r6.showFilters);
      }
    }

    function ShowChannelComponent_ng_container_2_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowChannelComponent_ng_container_2_div_9_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r18.openModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "add_circle_outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ShowChannelComponent_ng_container_2_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function ShowChannelComponent_ng_container_2_div_10_Template_input_keyup_enter_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r20.searchVideos();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ShowChannelComponent_ng_container_2_app_watchlist_tab_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-watchlist-tab");
      }
    }

    function ShowChannelComponent_ng_container_2_app_videos_tab_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-videos-tab", 5);
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("channelUser", ctx_r10.channelUser)("authUser", ctx_r10.authUser);
      }
    }

    function ShowChannelComponent_ng_container_2_app_playlists_tab_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-playlists-tab", 5);
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("channelUser", ctx_r11.channelUser)("authUser", ctx_r11.authUser);
      }
    }

    function ShowChannelComponent_ng_container_2_app_about_tab_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-about-tab", 24);
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("channelUser", ctx_r12.channelUser);
      }
    }

    function ShowChannelComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-channel-profile", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ShowChannelComponent_ng_container_2_li_5_Template, 3, 5, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ShowChannelComponent_ng_container_2_button_8_Template, 3, 2, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ShowChannelComponent_ng_container_2_div_9_Template, 4, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ShowChannelComponent_ng_container_2_div_10_Template, 3, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ShowChannelComponent_ng_container_2_app_watchlist_tab_11_Template, 1, 0, "app-watchlist-tab", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ShowChannelComponent_ng_container_2_app_videos_tab_12_Template, 1, 2, "app-videos-tab", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ShowChannelComponent_ng_container_2_app_playlists_tab_13_Template, 1, 2, "app-playlists-tab", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ShowChannelComponent_ng_container_2_app_about_tab_14_Template, 1, 1, "app-about-tab", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("channelUser", ctx_r1.channelUser)("authUser", ctx_r1.authUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.allTabs);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.searchVideosForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab.name !== "About" && ctx_r1.activeTab.name !== "Watchlist");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab.name === "Watchlist");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab.name !== "About");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab.name === "Watchlist");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab.name === "Videos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab.name === "Playlists");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab.name === "About");
      }
    }

    function ShowChannelComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Channel with such name is not found");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var ShowChannelComponent = /*#__PURE__*/function () {
      function ShowChannelComponent(videoService, getAuthUser, router, usersService, base64ToFile, route, fb, subjectService, channelService, playlistsService, subject, auth, dialog) {
        _classCallCheck(this, ShowChannelComponent);

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
        this.owlOptions = _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["OWL_OPTIONS"];
        this.watchlistVideos = [];
        this.allTabs = _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["PROFILE_PAGE_TABS"];
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["API_URL"];
        this.playlists = [];
        this.editMode = false;
        this.showFilters = false;
        this.filters = null;
        this.authUser = this.getAuthUser.transform();
        this.passedUsername = this.route.snapshot.queryParams.username;
        this.passedTab = this.route.snapshot.queryParams.tab;
        this.searchVideosForm = this.fb.group({
          search: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(ShowChannelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          var _a;

          localStorage.setItem('search', '');
          this.activeTab = ((_a = _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["PROFILE_PAGE_TABS"].filter(function (tabs) {
            return tabs.name.toLowerCase() === _this11.passedTab;
          })) === null || _a === void 0 ? void 0 : _a[0]) || _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["PROFILE_PAGE_TABS"][0];
          this.getUserInfo();
        }
      }, {
        key: "toggleFilters",
        value: function toggleFilters() {
          this.showFilters = !this.showFilters;
          this.subject.setToggleFiltersData(this.showFilters);
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          var _this12 = this;

          if (this.passedUsername) {
            this.usersService.getUserInfo({
              username: this.passedUsername
            }).subscribe(function (dt) {
              if (dt) {
                _this12.channelUser = dt;
              }
            });
          }
        }
      }, {
        key: "changeActiveTab",
        value: function changeActiveTab(tab) {
          this.activeTab = tab;
          this.searchVideos();
          this.showFilters = false;
          this.subject.setToggleFiltersData(this.showFilters);

          if (this.activeTab.name === 'Videos') {
            this.getUserInfo();
          }
        }
      }, {
        key: "searchVideos",
        value: function searchVideos() {
          var s = this.searchVideosForm.value;
          localStorage.setItem('search', s.search);
          this.showFilters = false;
          this.subject.setToggleFiltersData(this.showFilters);

          if (this.activeTab.name === 'Watchlist') {
            this.searchInVideosByAuthor(s.search);
          } else if (this.activeTab.name === 'Videos') {
            this.searchInUserVideos(s.search);
          } else if (this.activeTab.name === 'Playlists') {
            this.searchInPlaylists(s.search);
          }
        }
      }, {
        key: "searchInVideosByAuthor",
        value: function searchInVideosByAuthor(s) {
          if (this.watchListTab) {// this.watchListTab.getSearchResults(s);
          }
        }
      }, {
        key: "searchInUserVideos",
        value: function searchInUserVideos(s) {
          if (this.videosTab) {
            this.videosTab.getSearchResults(s);
          }
        }
      }, {
        key: "searchInPlaylists",
        value: function searchInPlaylists(s) {
          if (this.playlistsTab) {
            this.playlistsTab.getSearchResults(s);
          }
        }
      }, {
        key: "getVideosByTag",
        value: function getVideosByTag(name) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.router.navigate(['videos'], {
                      queryParams: {
                        tag: name
                      }
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "openModal",
        value: function openModal() {
          this.dialog.open(_core_components_modals_crypto_currency_crypto_currency_component__WEBPACK_IMPORTED_MODULE_7__["CryptoCurrencyComponent"], {
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
            width: '100%'
          }).afterClosed().subscribe(function (dt) {});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return ShowChannelComponent;
    }();

    ShowChannelComponent.ɵfac = function ShowChannelComponent_Factory(t) {
      return new (t || ShowChannelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_8__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_9__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_users_service__WEBPACK_IMPORTED_MODULE_11__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_12__["Base64ToFilePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_13__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_14__["ChannelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_playlists_service__WEBPACK_IMPORTED_MODULE_15__["PlaylistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_13__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialog"]));
    };

    ShowChannelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ShowChannelComponent,
      selectors: [["app-show-channel"]],
      viewQuery: function ShowChannelComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_app_channels_show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_4__["WatchlistTabComponent"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_app_channels_show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_5__["VideosTabComponent"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_app_channels_show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistsTabComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.watchListTab = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.videosTab = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.playlistsTab = _t.first);
        }
      },
      decls: 4,
      vars: 3,
      consts: [[1, "profile-list"], [3, "tagSelected", 4, "ngIf"], [4, "ngIf"], ["class", "channel-not-found", 4, "ngIf"], [3, "tagSelected"], [3, "channelUser", "authUser"], [1, "watchlist", "pWatchlist"], [1, "profile-list", "user-profile-block"], ["id", "profileList", "role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["id", "search-videos-form", 3, "formGroup"], [1, "toggle-filters-btn"], ["class", "filter-toggle-btn", "type", "button", 3, "filters-active", "click", 4, "ngIf"], ["class", "open-add-stock-modal", 3, "click", 4, "ngIf"], ["class", "watchlist-search", 4, "ngIf"], [3, "channelUser", "authUser", 4, "ngIf"], [3, "channelUser", 4, "ngIf"], [1, "nav-item"], ["data-toggle", "tab", "role", "tab", "aria-controls", "pWatch", "aria-selected", "true", 1, "nav-link", 3, "id", "href", "click"], ["type", "button", 1, "filter-toggle-btn", 3, "click"], [1, "open-add-stock-modal", 3, "click"], [1, "watchlist-search"], ["placeholder", "Search", "formControlName", "search", 1, "watchlist-input", 3, "keyup.enter"], [1, "fas", "fa-search"], [3, "channelUser"], [1, "channel-not-found"]],
      template: function ShowChannelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowChannelComponent_app_user_tags_1_Template, 1, 0, "app-user-tags", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShowChannelComponent_ng_container_2_Template, 15, 11, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ShowChannelComponent_div_3_Template, 3, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.channelUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.channelUser);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _shared_components_user_tags_user_tags_component__WEBPACK_IMPORTED_MODULE_19__["UserTagsComponent"], _channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_20__["ChannelProfileComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _app_channels_show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_4__["WatchlistTabComponent"], _app_channels_show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_5__["VideosTabComponent"], _app_channels_show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistsTabComponent"], _about_tab_about_tab_component__WEBPACK_IMPORTED_MODULE_22__["AboutTabComponent"]],
      styles: [".profile-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#search-videos-form[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#search-videos-form[_ngcontent-%COMP%]   .toggle-filters-btn[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 20px;\n  padding-top: 4px;\n  height: 31px;\n}\n\n#search-videos-form[_ngcontent-%COMP%]   .toggle-filters-btn[_ngcontent-%COMP%]   .filter-toggle-btn[_ngcontent-%COMP%] {\n  background-color: unset;\n  height: 23px;\n}\n\n#search-videos-form[_ngcontent-%COMP%]   .open-add-stock-modal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 31px;\n  margin-right: 20px;\n}\n\n#search-videos-form[_ngcontent-%COMP%]   .open-add-stock-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: unset;\n  height: 23px;\n}\n\n#search-videos-form[_ngcontent-%COMP%]   .filters-active[_ngcontent-%COMP%] {\n  background-color: #18B587 !important;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNoYW5uZWxzXFxzaG93LWNoYW5uZWxcXHNob3ctY2hhbm5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL3Nob3ctY2hhbm5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksV0FBQTtBQ0ZSOztBRE9BO0VBQ0ksYUFBQTtBQ0pKOztBRE1JO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSlI7O0FETVE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUNKWjs7QURRSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ05SOztBRFFRO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FDTlo7O0FEVUk7RUFDSSxvQ0FBQTtFQUNBLGNFcENBO0FENEJSIiwiZmlsZSI6InNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL3Nob3ctY2hhbm5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4ucHJvZmlsZS1ibG9jayB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4jc2VhcmNoLXZpZGVvcy1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLnRvZ2dsZS1maWx0ZXJzLWJ0biB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgICAgICBoZWlnaHQ6IDMxcHg7XHJcblxyXG4gICAgICAgIC5maWx0ZXItdG9nZ2xlLWJ0biB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5vcGVuLWFkZC1zdG9jay1tb2RhbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMzFweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIzcHhcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlcnMtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4gIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLnByb2ZpbGUtYmxvY2sgbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3NlYXJjaC12aWRlb3MtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4jc2VhcmNoLXZpZGVvcy1mb3JtIC50b2dnbGUtZmlsdGVycy1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGhlaWdodDogMzFweDtcbn1cbiNzZWFyY2gtdmlkZW9zLWZvcm0gLnRvZ2dsZS1maWx0ZXJzLWJ0biAuZmlsdGVyLXRvZ2dsZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgaGVpZ2h0OiAyM3B4O1xufVxuI3NlYXJjaC12aWRlb3MtZm9ybSAub3Blbi1hZGQtc3RvY2stbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDMxcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiNzZWFyY2gtdmlkZW9zLWZvcm0gLm9wZW4tYWRkLXN0b2NrLW1vZGFsIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBoZWlnaHQ6IDIzcHg7XG59XG4jc2VhcmNoLXZpZGVvcy1mb3JtIC5maWx0ZXJzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOEI1ODcgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG59IiwiJHJlZDogI0Y1M0M2RjtcclxuJGdyZWVuOiAjMThCNTg3O1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowChannelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-show-channel',
          templateUrl: './show-channel.component.html',
          styleUrls: ['./show-channel.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_8__["VideoService"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_9__["GetAuthUserPipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _core_services_users_service__WEBPACK_IMPORTED_MODULE_11__["UsersService"]
        }, {
          type: _shared_pipes_base64_to_file_pipe__WEBPACK_IMPORTED_MODULE_12__["Base64ToFilePipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_13__["SubjectService"]
        }, {
          type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_14__["ChannelsService"]
        }, {
          type: _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_15__["PlaylistsService"]
        }, {
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_13__["SubjectService"]
        }, {
          type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialog"]
        }];
      }, {
        watchListTab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_app_channels_show_channel_watchlist_tab_watchlist_tab_component__WEBPACK_IMPORTED_MODULE_4__["WatchlistTabComponent"]]
        }],
        videosTab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_app_channels_show_channel_videos_tab_videos_tab_component__WEBPACK_IMPORTED_MODULE_5__["VideosTabComponent"]]
        }],
        playlistsTab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_app_channels_show_channel_playlists_tab_playlists_tab_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistsTabComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/channels/show-channel/videos-tab/videos-tab.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/channels/show-channel/videos-tab/videos-tab.component.ts ***!
    \**************************************************************************/

  /*! exports provided: VideosTabComponent */

  /***/
  function srcAppChannelsShowChannelVideosTabVideosTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideosTabComponent", function () {
      return VideosTabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_constants_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @core/constants/global */
    "./src/app/core/constants/global.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/services/video.service */
    "./src/app/core/services/video.service.ts");
    /* harmony import */


    var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/services/subject.service */
    "./src/app/core/services/subject.service.ts");
    /* harmony import */


    var _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/pipes/filter-out-falsy-values-from-object.pipe */
    "./src/app/shared/pipes/filter-out-falsy-values-from-object.pipe.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_video_carousel_holder_video_carousel_holder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/video-carousel-holder/video-carousel-holder.component */
    "./src/app/shared/components/video-carousel-holder/video-carousel-holder.component.ts");
    /* harmony import */


    var _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @shared/components/video-filters/video-filters.component */
    "./src/app/shared/components/video-filters/video-filters.component.ts");

    function VideosTabComponent_app_video_filters_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-video-filters", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function VideosTabComponent_app_video_filters_0_Template_app_video_filters_filter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.getFilteredVideos($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var VideosTabComponent = /*#__PURE__*/function () {
      function VideosTabComponent(router, videoService, subjectService, getExactParams) {
        _classCallCheck(this, VideosTabComponent);

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

      _createClass(VideosTabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.subjectService.getToggleFiltersData().subscribe(function (dt) {
            _this13.showFilters = dt;
          });
        }
      }, {
        key: "getUserVideos",
        value: function getUserVideos(params) {
          var _this14 = this;

          params = this.getExactParams.transform(params);
          params.user_id = this.channelUser.id;
          this.videoService.getUserVideos(params).subscribe(function (dt) {
            _this14.videosLoaded = true;
            _this14.channelUser.videos = dt === null || dt === void 0 ? void 0 : dt.videos;
          });
        }
      }, {
        key: "getSearchResults",
        value: function getSearchResults(s) {
          this.search = s;
          this.getUserVideos({
            search: this.search,
            filters: this.filters
          });
        }
      }, {
        key: "getFilteredVideos",
        value: function getFilteredVideos(e) {
          this.filters = e;
          this.getUserVideos({
            search: this.search,
            filters: this.filters
          });
        }
      }]);

      return VideosTabComponent;
    }();

    VideosTabComponent.ɵfac = function VideosTabComponent_Factory(t) {
      return new (t || VideosTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterOutFalsyValuesFromObjectPipe"]));
    };

    VideosTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideosTabComponent,
      selectors: [["app-videos-tab"]],
      inputs: {
        channelUser: "channelUser",
        authUser: "authUser"
      },
      decls: 2,
      vars: 5,
      consts: [[3, "filter", 4, "ngIf"], [3, "videos", "title", "detailsSource", "removable"], [3, "filter"]],
      template: function VideosTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideosTabComponent_app_video_filters_0_Template, 1, 0, "app-video-filters", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-video-carousel-holder", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFilters);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videos", ctx.channelUser.videos)("title", "Recent videos")("detailsSource", ctx.channelUser)("removable", ctx.authUser.username === ctx.channelUser.username);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_video_carousel_holder_video_carousel_holder_component__WEBPACK_IMPORTED_MODULE_7__["VideoCarouselHolderComponent"], _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_8__["VideoFiltersComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL3Nob3ctY2hhbm5lbC92aWRlb3MtdGFiL3ZpZGVvcy10YWIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideosTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-videos-tab',
          templateUrl: './videos-tab.component.html',
          styleUrls: ['./videos-tab.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]
        }, {
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]
        }, {
          type: _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterOutFalsyValuesFromObjectPipe"]
        }];
      }, {
        channelUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['channelUser']
        }],
        authUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['authUser']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/channels/show-channel/watchlist-tab/watchlist-tab.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/channels/show-channel/watchlist-tab/watchlist-tab.component.ts ***!
    \********************************************************************************/

  /*! exports provided: WatchlistTabComponent */

  /***/
  function srcAppChannelsShowChannelWatchlistTabWatchlistTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WatchlistTabComponent", function () {
      return WatchlistTabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_constants_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @core/constants/global */
    "./src/app/core/constants/global.ts");
    /* harmony import */


    var _core_services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/services/video.service */
    "./src/app/core/services/video.service.ts");
    /* harmony import */


    var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/services/subject.service */
    "./src/app/core/services/subject.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/pipes/filter-out-falsy-values-from-object.pipe */
    "./src/app/shared/pipes/filter-out-falsy-values-from-object.pipe.ts");

    var WatchlistTabComponent = /*#__PURE__*/function () {
      function WatchlistTabComponent(videoService, subjectService, router, getExactParams) {
        _classCallCheck(this, WatchlistTabComponent);

        this.videoService = videoService;
        this.subjectService = subjectService;
        this.router = router;
        this.getExactParams = getExactParams;
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.subscriptions = [];
        this.showFilters = false;
      }

      _createClass(WatchlistTabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.search = localStorage.getItem('search');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return WatchlistTabComponent;
    }();

    WatchlistTabComponent.ɵfac = function WatchlistTabComponent_Factory(t) {
      return new (t || WatchlistTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterOutFalsyValuesFromObjectPipe"]));
    };

    WatchlistTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WatchlistTabComponent,
      selectors: [["app-watchlist-tab"]],
      decls: 98,
      vars: 0,
      consts: [[1, "favorites"], [1, "crypto-content"], [1, "crypto-item", "crypto-item-green"], [1, "cryptoRemove"], [1, "material-icons"], [1, "crypto-text-1"], [1, "crypto-text-2"], [1, "crypto-text-abs"], [1, "crypto-block"], ["src", "assets/img/map.png", 1, "crypto-map"], [1, "crypto-item"]],
      template: function WatchlistTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bitcoin 24h");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "11,300.38");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "-489,86");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "-4,16%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Bitcoin 24h");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "11,300.38");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "-489,86");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "-4,16%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Bitcoin 24h");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "11,300.38");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "-489,86");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "-4,16%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Bitcoin 24h");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "11,300.38");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "-489,86");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "-4,16%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Bitcoin 24h");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "11,300.38");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "-489,86");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "-4,16%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Bitcoin 24h");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "11,300.38");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "-489,86");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "-4,16%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".crypto-section[_ngcontent-%COMP%] {\n  background: #0E1D43 0 0 no-repeat padding-box;\n  width: 100%;\n  padding: 60px 200px;\n  margin: -1.75rem auto;\n  min-height: calc(100vh - 2px);\n}\n.crypto-section[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #FFFFFF;\n  font-size: 24px;\n  font-weight: bold;\n}\n.crypto-section[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.crypto-section[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.crypto-section[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #F53C6F;\n}\n.crypto-content[_ngcontent-%COMP%] {\n  padding: 32px 0 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n.crypto-item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 200px;\n  height: 179px;\n  margin-bottom: 32px;\n  background: #F53C6F 0% 0% no-repeat padding-box;\n  padding: 24px 8px;\n  border: 1px dashed transparent;\n  transition: 0.2s;\n  margin-right: 13px;\n}\n.crypto-item[_ngcontent-%COMP%]:hover {\n  border: 1px dashed #FFFFFF;\n}\n.crypto-item[_ngcontent-%COMP%]   .cryptoRemove[_ngcontent-%COMP%], .crypto-item[_ngcontent-%COMP%]   .stock-follow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  cursor: pointer;\n}\n.crypto-item[_ngcontent-%COMP%]   .cryptoRemove[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .crypto-item[_ngcontent-%COMP%]   .stock-follow[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.crypto-item[_ngcontent-%COMP%]   .cryptoRemove[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .crypto-item[_ngcontent-%COMP%]   .stock-follow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 16px;\n  transition: 0.1s;\n}\n.crypto-item[_ngcontent-%COMP%]   .stock-follow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  color: white;\n  text-transform: uppercase;\n  padding: 3px;\n  font-size: 9px;\n  border: 1px solid white;\n  font-weight: bold;\n  border-radius: 0px;\n}\n.addStockWrap[_ngcontent-%COMP%]   .crypto-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0D1B3E;\n  color: #FFFFFF;\n  border: 1px dashed #FFFFFF;\n  transition: 0.2s;\n  cursor: pointer;\n}\n.addStockWrap[_ngcontent-%COMP%]   .crypto-item[_ngcontent-%COMP%]:hover {\n  background: #2b4380;\n}\n.crypto-item-red[_ngcontent-%COMP%] {\n  background: #F53C6F;\n}\n.crypto-item-green[_ngcontent-%COMP%] {\n  background: #18B587;\n}\n.crypto-text-1[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 14px;\n  font-family: \"Muli-Light\";\n  margin-bottom: 4px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.crypto-text-2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 26px;\n  line-height: 26px;\n  font-family: \"Muli-Bold\";\n  margin-bottom: 4px;\n  position: relative;\n  margin-left: 6px;\n}\n.crypto-text-abs[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -5px;\n  top: -6px;\n  font-size: 16px;\n  font-family: \"Muli-Bold\";\n}\n.crypto-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 130px;\n}\n.crypto-map[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n.all-stocks[_ngcontent-%COMP%]   .mat-paginator[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n  font-family: \"Muli-Regular\";\n  font-size: 12px;\n}\napp-search-stocks-form[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\nselect[_ngcontent-%COMP%] {\n  background: transparent;\n  border-bottom: 1px solid #ffffff !important;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  font-family: \"Muli-Light\";\n  font-size: 18px;\n  color: #ffffff !important;\n}\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: #000000 !important;\n}\n.center-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 1400px) {\n  .crypto-section[_ngcontent-%COMP%] {\n    padding: 60px 150px;\n  }\n}\n@media (max-width: 991px) {\n  .crypto-section[_ngcontent-%COMP%] {\n    padding: 60px 50px;\n    justify-content: space-around;\n  }\n\n  .crypto-content[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL3dhdGNobGlzdC10YWIvQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcbW9kYWxzXFxjcnlwdG8tY3VycmVuY3lcXGNyeXB0by1jdXJyZW5jeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1jaGFubmVsL3dhdGNobGlzdC10YWIvd2F0Y2hsaXN0LXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLDZDQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ0ZKO0FESUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNGUjtBRElRO0VBQ0ksU0FBQTtBQ0ZaO0FES1E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSFo7QURLWTtFQUNJLGNBQUE7QUNIaEI7QURVQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNQSjtBRFVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BKO0FEVUk7RUFDSSwwQkFBQTtBQ1JSO0FEV0k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ1RSO0FEWVk7RUFDSSxlQUFBO0FDVmhCO0FEY1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWlo7QURpQlE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDZlo7QURzQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDbkJSO0FEcUJRO0VBQ0ksbUJBQUE7QUNuQlo7QUR5QkE7RUFDSSxtQkFBQTtBQ3RCSjtBRHlCQTtFQUNJLG1CQUFBO0FDdEJKO0FEeUJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUN0Qko7QUR5QkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN0Qko7QUR5QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDdEJKO0FEeUJBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDdEJKO0FEeUJBO0VBQ0ksV0FBQTtBQ3RCSjtBRDBCQTtFQUNJLG9CQUFBO0FDdkJKO0FEMkJJO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FDeEJSO0FENEJBO0VBQ0ksNEJBQUE7QUN6Qko7QUQ0QkE7RUFDSSx1QkFBQTtFQUVBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUMxQko7QUQyQkk7RUFDSSxhQUFBO0FDekJSO0FENEJJO0VBQ0EseUJBQUE7QUMxQko7QUQrQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUM1Qko7QUQrQkE7RUFDSTtJQUNJLG1CQUFBO0VDNUJOO0FBQ0Y7QUQrQkE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsNkJBQUE7RUM3Qk47O0VEK0JFO0lBQ0ksNkJBQUE7RUM1Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL3Nob3ctY2hhbm5lbC93YXRjaGxpc3QtdGFiL3dhdGNobGlzdC10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdtaXhpbnMnO1xyXG5cclxuLmNyeXB0by1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICMwRTFENDMgMCAwIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNjBweCAyMDBweDtcclxuICAgIG1hcmdpbjogLTEuNzVyZW0gYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAycHgpO1xyXG5cclxuICAgIC50b3Atd3JhcCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0Y1M0M2RjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5jcnlwdG8tY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAzMnB4IDAgMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jcnlwdG8taXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDE3OXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGNTNDNkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgcGFkZGluZzogMjRweCA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG5cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuY3J5cHRvUmVtb3ZlLCAuc3RvY2stZm9sbG93IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stZm9sbG93IHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5hZGRTdG9ja1dyYXAge1xyXG4gICAgLmNyeXB0by1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzBEMUIzRTtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI0ZGRkZGRjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyYjQzODA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmNyeXB0by1pdGVtLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjUzQzZGO1xyXG59XHJcblxyXG4uY3J5cHRvLWl0ZW0tZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzE4QjU4NztcclxufVxyXG5cclxuLmNyeXB0by10ZXh0LTEge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ011bGktTGlnaHQnO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLmNyeXB0by10ZXh0LTIge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1Cb2xkJztcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5jcnlwdG8tdGV4dC1hYnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTVweDtcclxuICAgIHRvcDogLTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1Cb2xkJztcclxufVxyXG5cclxuLmNyeXB0by1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMzBweDtcclxufVxyXG5cclxuLmNyeXB0by1tYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWxsLXN0b2NrcyB7XHJcbiAgICAubWF0LXBhZ2luYXRvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1SZWd1bGFyJztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFwcC1zZWFyY2gtc3RvY2tzLWZvcm0ge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLy9ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1MaWdodCc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbntcclxuICAgIGNvbG9yOiAkYmxhY2sgIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5jZW50ZXItZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAuY3J5cHRvLXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHggMTUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLmNyeXB0by1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiA2MHB4IDUwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgICAuY3J5cHRvLWNvbnRlbnQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG59XHJcbiIsIi5jcnlwdG8tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMwRTFENDMgMCAwIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDYwcHggMjAwcHg7XG4gIG1hcmdpbjogLTEuNzVyZW0gYXV0bztcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDJweCk7XG59XG4uY3J5cHRvLXNlY3Rpb24gLnRvcC13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jcnlwdG8tc2VjdGlvbiAudG9wLXdyYXAgaDIge1xuICBtYXJnaW46IDA7XG59XG4uY3J5cHRvLXNlY3Rpb24gLnRvcC13cmFwIGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jcnlwdG8tc2VjdGlvbiAudG9wLXdyYXAgaTpob3ZlciB7XG4gIGNvbG9yOiAjRjUzQzZGO1xufVxuXG4uY3J5cHRvLWNvbnRlbnQge1xuICBwYWRkaW5nOiAzMnB4IDAgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY3J5cHRvLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxNzlweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgYmFja2dyb3VuZDogI0Y1M0M2RiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIHBhZGRpbmc6IDI0cHggOHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbn1cbi5jcnlwdG8taXRlbTpob3ZlciB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjRkZGRkZGO1xufVxuLmNyeXB0by1pdGVtIC5jcnlwdG9SZW1vdmUsIC5jcnlwdG8taXRlbSAuc3RvY2stZm9sbG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jcnlwdG8taXRlbSAuY3J5cHRvUmVtb3ZlOmhvdmVyIHNwYW4sIC5jcnlwdG8taXRlbSAuc3RvY2stZm9sbG93OmhvdmVyIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY3J5cHRvLWl0ZW0gLmNyeXB0b1JlbW92ZSBzcGFuLCAuY3J5cHRvLWl0ZW0gLnN0b2NrLWZvbGxvdyBzcGFuIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cbi5jcnlwdG8taXRlbSAuc3RvY2stZm9sbG93IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogM3B4O1xuICBmb250LXNpemU6IDlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5hZGRTdG9ja1dyYXAgLmNyeXB0by1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwRDFCM0U7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBkYXNoZWQgI0ZGRkZGRjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkZFN0b2NrV3JhcCAuY3J5cHRvLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMmI0MzgwO1xufVxuXG4uY3J5cHRvLWl0ZW0tcmVkIHtcbiAgYmFja2dyb3VuZDogI0Y1M0M2Rjtcbn1cblxuLmNyeXB0by1pdGVtLWdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzE4QjU4Nztcbn1cblxuLmNyeXB0by10ZXh0LTEge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJNdWxpLUxpZ2h0XCI7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLmNyeXB0by10ZXh0LTIge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uY3J5cHRvLXRleHQtYWJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNXB4O1xuICB0b3A6IC02cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XG59XG5cbi5jcnlwdG8tYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLmNyeXB0by1tYXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uYWxsLXN0b2NrcyAubWF0LXBhZ2luYXRvciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktUmVndWxhclwiO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmFwcC1zZWFyY2gtc3RvY2tzLWZvcm0ge1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1MaWdodFwiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5zZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuc2VsZWN0IG9wdGlvbiB7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50ZXItZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAuY3J5cHRvLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDYwcHggMTUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY3J5cHRvLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDYwcHggNTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuXG4gIC5jcnlwdG8tY29udGVudCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchlistTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-watchlist-tab',
          templateUrl: './watchlist-tab.component.html',
          styleUrls: ['./watchlist-tab.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]
        }, {
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterOutFalsyValuesFromObjectPipe"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/channels/show-subscriptions/show-subscriptions.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/channels/show-subscriptions/show-subscriptions.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ShowSubscriptionsComponent */

  /***/
  function srcAppChannelsShowSubscriptionsShowSubscriptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowSubscriptionsComponent", function () {
      return ShowSubscriptionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_constants_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @core/constants/global */
    "./src/app/core/constants/global.ts");
    /* harmony import */


    var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/services/channels.service */
    "./src/app/core/services/channels.service.ts");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/services/auth.service */
    "./src/app/core/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @core/services/subject.service */
    "./src/app/core/services/subject.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");

    function ShowSubscriptionsComponent_ul_2_li_1_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowSubscriptionsComponent_ul_2_li_1_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var channel_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.subscribeToChannel(channel_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var channel_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("subscribed", ctx_r3.checkIfSubscribed(channel_r2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.checkIfSubscribed(channel_r2) ? "Subscribed" : "Subscribe", " ");
      }
    }

    function ShowSubscriptionsComponent_ul_2_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowSubscriptionsComponent_ul_2_li_1_Template_p_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var channel_r2 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.openChannelPage(channel_r2, channel_r2 == null ? null : channel_r2.user == null ? null : channel_r2.user.username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ShowSubscriptionsComponent_ul_2_li_1_button_10_Template, 2, 3, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var channel_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, channel_r2.avatar, "avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r2.videos.length + (channel_r2.videos.length === 1 ? " video" : " videos"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (channel_r2 == null ? null : channel_r2.user == null ? null : channel_r2.user.username) !== (ctx_r1.authUser == null ? null : ctx_r1.authUser.username));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r2.description);
      }
    }

    function ShowSubscriptionsComponent_ul_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowSubscriptionsComponent_ul_2_li_1_Template, 13, 8, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.userChannels.subscriptions);
      }
    }

    var ShowSubscriptionsComponent = /*#__PURE__*/function () {
      function ShowSubscriptionsComponent(channelsService, getAuthUser, auth, router, subject) {
        _classCallCheck(this, ShowSubscriptionsComponent);

        this.channelsService = channelsService;
        this.getAuthUser = getAuthUser;
        this.auth = auth;
        this.router = router;
        this.subject = subject;
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.authUser = this.getAuthUser.transform();
      }

      _createClass(ShowSubscriptionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserChannelSubscriptions();
        }
      }, {
        key: "openChannelPage",
        value: function openChannelPage(channel, username) {
          this.router.navigate(['channels/show'], {
            queryParams: {
              username: username
            }
          });
        }
      }, {
        key: "getUserChannelSubscriptions",
        value: function getUserChannelSubscriptions() {
          var _this15 = this;

          this.channelsService.getSubscriptions({
            user_id: this.authUser.id
          }).subscribe(function (dt) {
            _this15.userChannels = dt;
          });
        }
      }, {
        key: "checkIfSubscribed",
        value: function checkIfSubscribed(channel) {
          var _a;

          return channel.channel_subscribers.subscriber_id === ((_a = this.authUser) === null || _a === void 0 ? void 0 : _a.id);
        }
      }, {
        key: "subscribeToChannel",
        value: function subscribeToChannel(channel) {
          var _this16 = this;

          this.channelsService.subscribeToChannel({
            user_id: this.authUser.id,
            channel_id: channel.id
          }).subscribe(function (dt) {
            // this.subscribedToChannel = dt.status === 'Subscribed';
            _this16.channelsService.getUserChannelSubscriptions({
              user_id: _this16.authUser.id
            }).subscribe(function (d) {
              _this16.subject.setUserSubscriptions(d);

              _this16.getUserChannelSubscriptions();
            });
          });
        }
      }]);

      return ShowSubscriptionsComponent;
    }();

    ShowSubscriptionsComponent.ɵfac = function ShowSubscriptionsComponent_Factory(t) {
      return new (t || ShowSubscriptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_2__["ChannelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_3__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]));
    };

    ShowSubscriptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowSubscriptionsComponent,
      selectors: [["app-show-subscriptions"]],
      decls: 3,
      vars: 1,
      consts: [["id", "my-subscriptions"], [4, "ngIf"], ["class", "channel-item", 4, "ngFor", "ngForOf"], [1, "channel-item"], [1, "thumbnail"], [1, "avatar", 3, "src"], [1, "info"], [1, "name", 3, "click"], [1, "shortened-details"], [1, "video-count"], ["class", "btn subscribe-to-channel-btn", 3, "subscribed", "click", 4, "ngIf"], [1, "btn", "subscribe-to-channel-btn", 3, "click"]],
      template: function ShowSubscriptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Subscriptions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowSubscriptionsComponent_ul_2_Template, 2, 1, "ul", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userChannels);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_8__["GetThumbPathPipe"]],
      styles: ["#my-subscriptions[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #18B587;\n}\n\n.subscribe-to-channel-btn[_ngcontent-%COMP%] {\n  padding: 12px 28px;\n  font-size: 16px;\n  color: #FFFFFF;\n  background: #F53C6F;\n  border-radius: 0;\n  box-shadow: 0 0 6px #006dcc2e;\n}\n\n.subscribe-to-channel-btn.subscribed[_ngcontent-%COMP%] {\n  background-color: #D6D6D6 !important;\n}\n\n.channel-item[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n}\n\n.channel-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 240px !important;\n  height: 240px;\n}\n\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  min-width: 250px;\n  max-width: 350px;\n}\n\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #545454;\n  font-size: 24px;\n  font-family: \"Muli-Bold\";\n  cursor: pointer;\n}\n\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  margin-left: 26px;\n  margin-top: -3px;\n}\n\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Muli-Light\";\n}\n\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%], .channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .videos-count[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #818181;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1zdWJzY3JpcHRpb25zL0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNoYW5uZWxzXFxzaG93LXN1YnNjcmlwdGlvbnNcXHNob3ctc3Vic2NyaXB0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbm5lbHMvc2hvdy1zdWJzY3JpcHRpb25zL0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jaGFubmVscy9zaG93LXN1YnNjcmlwdGlvbnMvc2hvdy1zdWJzY3JpcHRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQ0hJO0FDRVI7O0FGSUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJDWEU7RURZRixnQkFBQTtFQUNBLDZCQUFBO0FFREo7O0FGR0k7RUFDSSxvQ0FBQTtBRURSOztBRktBO0VBQ0ksYUFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtBRUhKOztBRktJO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0FFSFI7O0FGTUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRUpSOztBRk1RO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUVKWjs7QUZPUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUVMWjs7QUZRUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBRU5aOztBRlVRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUVSWiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL3Nob3ctc3Vic2NyaXB0aW9ucy9zaG93LXN1YnNjcmlwdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuI215LXN1YnNjcmlwdGlvbnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICRncmVlbjtcclxufVxyXG5cclxuLnN1YnNjcmliZS10by1jaGFubmVsLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJhY2tncm91bmQ6ICRyZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDZweCAjMDA2ZGNjMmU7XHJcblxyXG4gICAgJi5zdWJzY3JpYmVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZENkQ2ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGFubmVsLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vd2lkdGg6IDkzNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAuYXZhdGFyIHtcclxuICAgICAgICB3aWR0aDogMjQwcHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1Cb2xkJztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNdWxpLUxpZ2h0JztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAud2F0Y2hlcnMtY291bnQsIC52aWRlb3MtY291bnQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZpZGVvcy1jb3VudCB7XHJcbiAgICAgICAgICAgIC8vbWFyZ2luLWxlZnQ6IDI2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuIiwiJHJlZDogI0Y1M0M2RjtcclxuJGdyZWVuOiAjMThCNTg3O1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuIiwiI215LXN1YnNjcmlwdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMThCNTg3O1xufVxuXG4uc3Vic2NyaWJlLXRvLWNoYW5uZWwtYnRuIHtcbiAgcGFkZGluZzogMTJweCAyOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kOiAjRjUzQzZGO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiAwIDAgNnB4ICMwMDZkY2MyZTtcbn1cbi5zdWJzY3JpYmUtdG8tY2hhbm5lbC1idG4uc3Vic2NyaWJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENkQ2RDYgIWltcG9ydGFudDtcbn1cblxuLmNoYW5uZWwtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jaGFubmVsLWl0ZW0gLmF2YXRhciB7XG4gIHdpZHRoOiAyNDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDI0MHB4O1xufVxuLmNoYW5uZWwtaXRlbSAuaW5mbyB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn1cbi5jaGFubmVsLWl0ZW0gLmluZm8gLm5hbWUge1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNoYW5uZWwtaXRlbSAuaW5mbyAuZG90IHtcbiAgbWFyZ2luLWxlZnQ6IDI2cHg7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG59XG4uY2hhbm5lbC1pdGVtIC5pbmZvIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktTGlnaHRcIjtcbn1cbi5jaGFubmVsLWl0ZW0gLmluZm8gLndhdGNoZXJzLWNvdW50LCAuY2hhbm5lbC1pdGVtIC5pbmZvIC52aWRlb3MtY291bnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODE4MTgxO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowSubscriptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-show-subscriptions',
          templateUrl: './show-subscriptions.component.html',
          styleUrls: ['./show-subscriptions.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_2__["ChannelsService"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_3__["GetAuthUserPipe"]
        }, {
          type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=channels-channels-module-es5.js.map