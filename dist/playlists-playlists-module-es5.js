function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playlists-playlists-module"], {
  /***/
  "./src/app/playlists/playlists-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/playlists/playlists-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: PlaylistsRoutingModule */

  /***/
  function srcAppPlaylistsPlaylistsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistsRoutingModule", function () {
      return PlaylistsRoutingModule;
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


    var _app_playlists_single_playlist_single_playlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/playlists/single-playlist/single-playlist.component */
    "./src/app/playlists/single-playlist/single-playlist.component.ts");

    var routes = [{
      path: 'single/:id',
      component: _app_playlists_single_playlist_single_playlist_component__WEBPACK_IMPORTED_MODULE_2__["SinglePlaylistComponent"],
      data: {
        title: 'Edit Playlist'
      }
    }];

    var PlaylistsRoutingModule = function PlaylistsRoutingModule() {
      _classCallCheck(this, PlaylistsRoutingModule);
    };

    PlaylistsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PlaylistsRoutingModule
    });
    PlaylistsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PlaylistsRoutingModule_Factory(t) {
        return new (t || PlaylistsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlaylistsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistsRoutingModule, [{
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
  "./src/app/playlists/playlists.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/playlists/playlists.module.ts ***!
    \***********************************************/

  /*! exports provided: PlaylistsModule */

  /***/
  function srcAppPlaylistsPlaylistsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistsModule", function () {
      return PlaylistsModule;
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


    var _playlists_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./playlists-routing.module */
    "./src/app/playlists/playlists-routing.module.ts");
    /* harmony import */


    var _single_playlist_single_playlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./single-playlist/single-playlist.component */
    "./src/app/playlists/single-playlist/single-playlist.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _single_playlist_playlist_info_form_playlist_info_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./single-playlist/playlist-info-form/playlist-info-form.component */
    "./src/app/playlists/single-playlist/playlist-info-form/playlist-info-form.component.ts");
    /* harmony import */


    var _single_playlist_playlist_videos_playlist_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./single-playlist/playlist-videos/playlist-videos.component */
    "./src/app/playlists/single-playlist/playlist-videos/playlist-videos.component.ts");

    var PlaylistsModule = function PlaylistsModule() {
      _classCallCheck(this, PlaylistsModule);
    };

    PlaylistsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PlaylistsModule
    });
    PlaylistsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PlaylistsModule_Factory(t) {
        return new (t || PlaylistsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _playlists_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlaylistsRoutingModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlaylistsModule, {
        declarations: [_single_playlist_single_playlist_component__WEBPACK_IMPORTED_MODULE_3__["SinglePlaylistComponent"], _single_playlist_playlist_info_form_playlist_info_form_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistInfoFormComponent"], _single_playlist_playlist_videos_playlist_videos_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistVideosComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _playlists_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlaylistsRoutingModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_single_playlist_single_playlist_component__WEBPACK_IMPORTED_MODULE_3__["SinglePlaylistComponent"], _single_playlist_playlist_info_form_playlist_info_form_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistInfoFormComponent"], _single_playlist_playlist_videos_playlist_videos_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistVideosComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _playlists_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlaylistsRoutingModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/playlists/single-playlist/playlist-info-form/playlist-info-form.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/playlists/single-playlist/playlist-info-form/playlist-info-form.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: PlaylistInfoFormComponent */

  /***/
  function srcAppPlaylistsSinglePlaylistPlaylistInfoFormPlaylistInfoFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistInfoFormComponent", function () {
      return PlaylistInfoFormComponent;
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


    var _core_components_modals_add_video_to_playlist_dialog_add_video_to_playlist_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/components/modals/add-video-to-playlist-dialog/add-video-to-playlist-dialog.component */
    "./src/app/core/components/modals/add-video-to-playlist-dialog/add-video-to-playlist-dialog.component.ts");
    /* harmony import */


    var _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/services/playlists.service */
    "./src/app/core/services/playlists.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");

    function PlaylistInfoFormComponent_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistInfoFormComponent_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.openPlaylistPage(ctx_r4.playlist);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Play All ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlaylistInfoFormComponent_ng_container_5_h3_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last updated on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r6.playlist.updated_at, "d MMM, yyyy"), "");
      }
    }

    function PlaylistInfoFormComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistInfoFormComponent_ng_container_5_Template_span_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.editPlaylistInfo(ctx_r7.playlist);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PlaylistInfoFormComponent_ng_container_5_h3_10_Template, 3, 4, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PlaylistInfoFormComponent_ng_container_5_Template_select_change_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.updatePrivacy($event.target.value, ctx_r9.playlist);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Private");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Public");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.playlist.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.playlist.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.playlist.videos == null ? null : ctx_r1.playlist.videos.length, " videos");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("visibility_", ctx_r1.playlist.privacy - 0 ? "off" : "on", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1)("selected", ctx_r1.playlist.privacy);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0)("selected", !ctx_r1.playlist.privacy);
      }
    }

    function PlaylistInfoFormComponent_form_6_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Playlist name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlaylistInfoFormComponent_form_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlaylistInfoFormComponent_form_6_span_2_Template, 2, 0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistInfoFormComponent_form_6_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.editMode = !ctx_r11.editMode;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistInfoFormComponent_form_6_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.savePlaylistInfoChanges();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.playlistInfoForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.playlistInfoForm.get("name").hasError("required"));
      }
    }

    function PlaylistInfoFormComponent_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistInfoFormComponent_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.openVideosModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Video");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PlaylistInfoFormComponent = /*#__PURE__*/function () {
      function PlaylistInfoFormComponent(fb, playlistsService, dialog, toastr, router, getAuthUser) {
        _classCallCheck(this, PlaylistInfoFormComponent);

        this.fb = fb;
        this.playlistsService = playlistsService;
        this.dialog = dialog;
        this.toastr = toastr;
        this.router = router;
        this.getAuthUser = getAuthUser;
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["API_URL"];
        this.editMode = false;
        this.refreshPlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playlistInfoForm = this.fb.group({
          id: [''],
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          description: [''],
          privacy: ['']
        });
        this.authUser = this.getAuthUser.transform();
      }

      _createClass(PlaylistInfoFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openVideosModal",
        value: function openVideosModal() {
          var _this = this;

          this.dialog.open(_core_components_modals_add_video_to_playlist_dialog_add_video_to_playlist_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddVideoToPlaylistDialogComponent"], {
            data: {
              playlist: this.playlist
            }
          }).afterClosed().subscribe(function (dt) {
            _this.refreshPlaylist.emit();
          });
        }
      }, {
        key: "updatePrivacy",
        value: function updatePrivacy(value, playlist) {
          var _this2 = this;

          console.log(+value);
          playlist.privacy = +value;
          this.playlistInfoForm.patchValue({
            privacy: +value
          });
          this.playlistsService.updatePrivacy({
            privacy: value,
            id: playlist.id
          }).subscribe(function (dt) {
            _this2.toastr.success('Playlist privacy is updated successfully');
          });
        }
      }, {
        key: "editPlaylistInfo",
        value: function editPlaylistInfo(playlist) {
          this.editMode = true;
          this.playlistInfoForm.patchValue(playlist);
        }
      }, {
        key: "savePlaylistInfoChanges",
        value: function savePlaylistInfoChanges() {
          var _this3 = this;

          if (this.playlistInfoForm.valid) {
            this.playlistsService.updatePlaylistInfo(this.playlistInfoForm.value).subscribe(function (dt) {
              _this3.editMode = false;
              _this3.playlist = dt;
            });
          }
        }
      }, {
        key: "openPlaylistPage",
        value: function openPlaylistPage(playlist) {
          var _a, _b;

          var route = 'videos/play';
          var params = {
            id: (_b = (_a = playlist.videos) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id,
            playlist_id: playlist.id
          };
          this.router.navigate([route], {
            queryParams: params
          });
        }
      }, {
        key: "backToPlaylists",
        value: function backToPlaylists() {
          var route = 'channels/show';
          var params = {
            tab: 'playlists',
            username: this.authUser.username
          };
          this.router.navigate([route], {
            queryParams: params
          });
        }
      }]);

      return PlaylistInfoFormComponent;
    }();

    PlaylistInfoFormComponent.ɵfac = function PlaylistInfoFormComponent_Factory(t) {
      return new (t || PlaylistInfoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_playlists_service__WEBPACK_IMPORTED_MODULE_4__["PlaylistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__["GetAuthUserPipe"]));
    };

    PlaylistInfoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlaylistInfoFormComponent,
      selectors: [["app-playlist-info-form"]],
      inputs: {
        playlist: "playlist"
      },
      outputs: {
        refreshPlaylist: "refreshPlaylist"
      },
      decls: 10,
      vars: 7,
      consts: [[1, "playlist"], [3, "src"], ["class", "btn play-all", 3, "click", 4, "ngIf"], [1, "info"], [4, "ngIf"], ["id", "playlist-info-form", 3, "formGroup", 4, "ngIf"], [1, "btn", "back", 3, "click"], ["class", "btn add-video", 3, "click", 4, "ngIf"], [1, "btn", "play-all", 3, "click"], [1, "material-icons"], [1, "material-icons", 3, "click"], ["id", "privacy-select", 1, "select"], [3, "change"], [3, "value", "selected"], ["id", "playlist-info-form", 3, "formGroup"], ["formControlName", "name"], ["class", "error", 4, "ngIf"], ["formControlName", "description"], [1, "btn", "cancel", 3, "click"], [1, "btn", "save-playlist-changes", 3, "click"], [1, "error"], [1, "btn", "add-video", 3, "click"]],
      template: function PlaylistInfoFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "getImgPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlaylistInfoFormComponent_button_3_Template, 4, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlaylistInfoFormComponent_ng_container_5_Template, 19, 9, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlaylistInfoFormComponent_form_6_Template, 8, 2, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistInfoFormComponent_Template_button_click_7_listener() {
            return ctx.backToPlaylists();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PlaylistInfoFormComponent_button_9_Template, 2, 0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.playlist.thumbnail), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.playlist.videos == null ? null : ctx.playlist.videos.length) !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_11__["GetThumbPathPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
      styles: [".playlist[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.playlist[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 190px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.playlist[_ngcontent-%COMP%]   .play-all[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #18B587;\n  border-radius: 0;\n  font-size: 16px;\n  color: #ffffff;\n}\n.playlist[_ngcontent-%COMP%]   .play-all[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.playlist[_ngcontent-%COMP%]   .add-video[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .save-playlist-changes[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  padding: 6px 24px;\n  background: #18B587;\n  border-radius: 0;\n  font-size: 16px;\n  color: #ffffff;\n}\n.playlist[_ngcontent-%COMP%]   .add-video.cancel[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .add-video.back[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .save-playlist-changes.cancel[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .save-playlist-changes.back[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .cancel.cancel[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .cancel.back[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .back.cancel[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .back.back[_ngcontent-%COMP%] {\n  background: #C9C9C9;\n  margin-right: 24px;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 16px;\n  margin-bottom: 0;\n  font-size: 16px;\n  font-family: \"Muli-Bold\";\n  color: #545454;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n  cursor: pointer;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  color: #545454;\n  font-size: 12px;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  vertical-align: sub;\n  font-size: 22px;\n  color: #545454;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  color: #545454;\n  font-size: 16px;\n  font-weight: 600;\n  border: 0;\n  padding: 0;\n  outline: none;\n  margin-left: 6px;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   #playlist-info-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   #playlist-info-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  width: 100%;\n  padding: 14px 24px;\n  background: #F4F4F4;\n  color: #545454;\n  border: 0;\n  outline: none;\n  resize: none;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   #privacy-select[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3NpbmdsZS1wbGF5bGlzdC9wbGF5bGlzdC1pbmZvLWZvcm0vQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxccGxheWxpc3RzXFxzaW5nbGUtcGxheWxpc3RcXHBsYXlsaXN0LWluZm8tZm9ybVxccGxheWxpc3QtaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5bGlzdHMvc2luZ2xlLXBsYXlsaXN0L3BsYXlsaXN0LWluZm8tZm9ybS9wbGF5bGlzdC1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0NSO0FERUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNBUjtBREVRO0VBQ0ksa0JBQUE7QUNBWjtBRElJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0ZSO0FESVE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDRlo7QURTUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUNQWjtBRFNZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNQaEI7QURXUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNUWjtBRFlRO0VBQ0ksZ0JBQUE7QUNWWjtBRFlZO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1ZoQjtBRGFZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDWGhCO0FEZ0JZO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNkaEI7QURrQlE7RUFDSSxhQUFBO0FDaEJaIiwiZmlsZSI6InNyYy9hcHAvcGxheWxpc3RzL3NpbmdsZS1wbGF5bGlzdC9wbGF5bGlzdC1pbmZvLWZvcm0vcGxheWxpc3QtaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXlsaXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGF5LWFsbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxOEI1ODc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hZGQtdmlkZW8sIC5zYXZlLXBsYXlsaXN0LWNoYW5nZXMsIC5jYW5jZWwsIC5iYWNrIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAyNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxOEI1ODc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgICYuY2FuY2VsLCAmLmJhY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQzlDOUM5O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaW5mbyB7XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xyXG4gICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNwbGF5bGlzdC1pbmZvLWZvcm0ge1xyXG4gICAgICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTRweCAyNHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3ByaXZhY3ktc2VsZWN0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLnBsYXlsaXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucGxheWxpc3QgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDE5MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5wbGF5bGlzdCAucGxheS1hbGwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxOEI1ODc7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucGxheWxpc3QgLnBsYXktYWxsIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4ucGxheWxpc3QgLmFkZC12aWRlbywgLnBsYXlsaXN0IC5zYXZlLXBsYXlsaXN0LWNoYW5nZXMsIC5wbGF5bGlzdCAuY2FuY2VsLCAucGxheWxpc3QgLmJhY2sge1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBwYWRkaW5nOiA2cHggMjRweDtcbiAgYmFja2dyb3VuZDogIzE4QjU4NztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wbGF5bGlzdCAuYWRkLXZpZGVvLmNhbmNlbCwgLnBsYXlsaXN0IC5hZGQtdmlkZW8uYmFjaywgLnBsYXlsaXN0IC5zYXZlLXBsYXlsaXN0LWNoYW5nZXMuY2FuY2VsLCAucGxheWxpc3QgLnNhdmUtcGxheWxpc3QtY2hhbmdlcy5iYWNrLCAucGxheWxpc3QgLmNhbmNlbC5jYW5jZWwsIC5wbGF5bGlzdCAuY2FuY2VsLmJhY2ssIC5wbGF5bGlzdCAuYmFjay5jYW5jZWwsIC5wbGF5bGlzdCAuYmFjay5iYWNrIHtcbiAgYmFja2dyb3VuZDogI0M5QzlDOTtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLnBsYXlsaXN0IC5pbmZvIGgzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xuICBjb2xvcjogIzU0NTQ1NDtcbn1cbi5wbGF5bGlzdCAuaW5mbyBoMyBzcGFuIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGxheWxpc3QgLmluZm8gcCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucGxheWxpc3QgLmluZm8gLnNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4ucGxheWxpc3QgLmluZm8gLnNlbGVjdCBzcGFuIHtcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogIzU0NTQ1NDtcbn1cbi5wbGF5bGlzdCAuaW5mbyAuc2VsZWN0IHNlbGVjdCB7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cbi5wbGF5bGlzdCAuaW5mbyAjcGxheWxpc3QtaW5mby1mb3JtIGlucHV0LCAucGxheWxpc3QgLmluZm8gI3BsYXlsaXN0LWluZm8tZm9ybSB0ZXh0YXJlYSB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNHB4IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5wbGF5bGlzdCAuaW5mbyAjcHJpdmFjeS1zZWxlY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistInfoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-playlist-info-form',
          templateUrl: './playlist-info-form.component.html',
          styleUrls: ['./playlist-info-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_4__["PlaylistsService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__["GetAuthUserPipe"]
        }];
      }, {
        playlist: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['playlist']
        }],
        refreshPlaylist: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['refreshPlaylist']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/playlists/single-playlist/playlist-videos/playlist-videos.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/playlists/single-playlist/playlist-videos/playlist-videos.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: PlaylistVideosComponent */

  /***/
  function srcAppPlaylistsSinglePlaylistPlaylistVideosPlaylistVideosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistVideosComponent", function () {
      return PlaylistVideosComponent;
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


    var _core_helpers_move_item_in_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/helpers/move-item-in-array */
    "./src/app/core/helpers/move-item-in-array.ts");
    /* harmony import */


    var _core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/components/modals/confirmation-dialog/confirmation-dialog.component */
    "./src/app/core/components/modals/confirmation-dialog/confirmation-dialog.component.ts");
    /* harmony import */


    var _core_components_modals_add_video_to_another_playlist_add_video_to_another_playlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/components/modals/add-video-to-another-playlist/add-video-to-another-playlist.component */
    "./src/app/core/components/modals/add-video-to-another-playlist/add-video-to-another-playlist.component.ts");
    /* harmony import */


    var _core_constants_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @core/constants/global */
    "./src/app/core/constants/global.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @core/services/playlists.service */
    "./src/app/core/services/playlists.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");
    /* harmony import */


    var _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../shared/pipes/date-from-now.pipe */
    "./src/app/shared/pipes/date-from-now.pipe.ts");

    function PlaylistVideosComponent_div_1_li_50_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistVideosComponent_div_1_li_50_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var tag_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r5.getVideosByTag(tag_r4.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r4.name);
      }
    }

    function PlaylistVideosComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDragDropped", function PlaylistVideosComponent_div_1_Template_div_cdkDragDropped_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var video_r1 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r7.dragDropped($event, video_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistVideosComponent_div_1_Template_img_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var video_r1 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.openPlaylistPage(video_r1, ctx_r9.playlist);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-menu", null, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistVideosComponent_div_1_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var video_r1 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r10.addToAnotherPlaylist(video_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "playlist_add");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Add to another playlist");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistVideosComponent_div_1_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var video_r1 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.changePlaylistThumbnail(ctx_r11.playlist.id, video_r1.thumbnail);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "insert_photo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Set as playlist thumbnail");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistVideosComponent_div_1_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var video_r1 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r12.removeVideoFromPlaylist(ctx_r12.playlist.id, video_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Remove from playlist");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\xB7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\xB7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "dateFromNow");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, PlaylistVideosComponent_div_1_li_50_Template, 3, 1, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var video_r1 = ctx.$implicit;

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragPreviewClass", "video-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 10, video_r1.thumbnail), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r1.duration);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r1.channel.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", video_r1.status === "live" ? "17k watching" : video_r1.views + " view" + (video_r1.views === 1 ? "" : "s"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 12, video_r1.created_at));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", video_r1 == null ? null : video_r1.tags);
      }
    }

    var PlaylistVideosComponent = /*#__PURE__*/function () {
      function PlaylistVideosComponent(router, route, playlistsService, dialog, getAuthUser) {
        _classCallCheck(this, PlaylistVideosComponent);

        this.router = router;
        this.route = route;
        this.playlistsService = playlistsService;
        this.dialog = dialog;
        this.getAuthUser = getAuthUser;
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_5__["API_URL"];
        this.refreshPlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PlaylistVideosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authUser = this.getAuthUser.transform();
        }
      }, {
        key: "openPlaylistPage",
        value: function openPlaylistPage(video, playlist) {
          this.router.navigate(['videos/play'], {
            queryParams: {
              id: video.id,
              playlist_id: playlist.id
            }
          });
        }
      }, {
        key: "dragDropped",
        value: function dragDropped(e, video) {
          console.log(e); // console.log(channel)

          this.playlist.videos = Object(_core_helpers_move_item_in_array__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.playlist.videos, e.previousIndex, e.currentIndex); // console.log(this.playlist)

          var sendData = {
            rows: JSON.stringify(this.playlist),
            playlist_id: this.playlist.id
          };
          this.playlistsService.updateVideoPosition(sendData).subscribe(function (dt) {});
        }
      }, {
        key: "changePlaylistThumbnail",
        value: function changePlaylistThumbnail(playlistId, thumbnail) {
          var _this4 = this;

          var params = Object.assign({
            playlist_id: playlistId
          }, {
            thumbnail: thumbnail
          });
          this.playlistsService.changePlaylistThumbnail(params).subscribe(function (dt) {
            _this4.playlist = dt;

            _this4.refreshPlaylist.emit();
          });
        }
      }, {
        key: "removeVideoFromPlaylist",
        value: function removeVideoFromPlaylist(playlistId, videoId) {
          var _this5 = this;

          this.dialog.open(_core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"]).afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
              _this5.playlistsService.removeVideoFromPlaylist({
                playlist_id: playlistId,
                video_id: videoId
              }).subscribe(function (dt) {
                _this5.playlist = dt;

                _this5.refreshPlaylist.emit();
              });
            }
          });
        }
      }, {
        key: "addToAnotherPlaylist",
        value: function addToAnotherPlaylist(video) {
          var _this6 = this;

          var _a, _b;

          this.playlistsService.get({
            channel_id: (_b = (_a = this.authUser) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b.id
          }).subscribe(function (dt) {
            _this6.dialog.open(_core_components_modals_add_video_to_another_playlist_add_video_to_another_playlist_component__WEBPACK_IMPORTED_MODULE_4__["AddVideoToAnotherPlaylistComponent"], {
              width: '500px',
              data: {
                video_id: video.id,
                playlists: dt
              }
            }).afterClosed().subscribe(function (result) {
              _this6.refreshPlaylist.emit();
            });
          });
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
      }]);

      return PlaylistVideosComponent;
    }();

    PlaylistVideosComponent.ɵfac = function PlaylistVideosComponent_Factory(t) {
      return new (t || PlaylistVideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_playlists_service__WEBPACK_IMPORTED_MODULE_7__["PlaylistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_9__["GetAuthUserPipe"]));
    };

    PlaylistVideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PlaylistVideosComponent,
      selectors: [["app-playlist-videos"]],
      inputs: {
        playlist: "playlist"
      },
      outputs: {
        refreshPlaylist: "refreshPlaylist"
      },
      decls: 2,
      vars: 1,
      consts: [["cdkDropList", "", 1, "playlist"], ["class", "playlist-item", "cdkDrag", "", 3, "cdkDragPreviewClass", "cdkDragDropped", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "playlist-item", 3, "cdkDragPreviewClass", "cdkDragDropped"], [1, "video-container"], [1, "img"], [1, "thumbnail"], [1, "thumbnail", 3, "src", "click"], [1, "duration"], [1, "details"], [1, "title"], [1, ""], [1, "dotes"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "shortened-details"], [1, "channel-name"], [1, "dot"], [1, "watchers-count"], [1, "upload-time"], [1, "video-details-2nd-row"], [1, "shortened-description"], [1, "tags"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]],
      template: function PlaylistVideosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlaylistVideosComponent_div_1_Template, 51, 14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.playlist.videos);
        }
      },
      directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["CdkDrag"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuItem"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_15__["GetThumbPathPipe"], _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_16__["DateFromNowPipe"]],
      styles: [".playlist-item[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  background: #FFFFFF;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 200px;\n  margin-right: 32px;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 115px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 9px;\n  right: 10px;\n  color: white;\n  background-color: #000;\n  padding: 0 2px;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 23px;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: capitalize;\n  font-family: \"Muli-Bold\";\n  color: #545454;\n  font-size: 16px;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .dotes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 40px;\n  font-size: 14px;\n  background: transparent;\n  line-height: 0 !important;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .channel-name[_ngcontent-%COMP%] {\n  font-family: \"Muli-Bold\";\n  color: #818181;\n  font-size: 14px;\n  white-space: nowrap;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .upload-time[_ngcontent-%COMP%], .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #818181;\n  white-space: nowrap;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%], .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .upload-time[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .video-details-2nd-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .video-details-2nd-row[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .video-details-2nd-row[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 22px;\n  border-radius: 11px;\n  padding: 2px 11px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #EEEEEE;\n  transition: 0.3s ease-in-out;\n  color: #545454 !important;\n  font-size: 14px;\n  font-family: \"Muli-Regular\";\n  cursor: pointer;\n}\n.playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-description[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 0;\n  color: #545454;\n  white-space: pre-wrap;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  max-width: 250px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px !important;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 200px;\n  margin-right: 32px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 115px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 9px;\n  right: 10px;\n  color: white;\n  background-color: #000;\n  padding: 0 2px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 23px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: capitalize;\n  font-family: \"Muli-Bold\";\n  color: #545454;\n  font-size: 16px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .dotes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 40px;\n  font-size: 14px;\n  background: transparent;\n  line-height: 0 !important;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .channel-name[_ngcontent-%COMP%] {\n  font-family: \"Muli-Bold\";\n  color: #818181;\n  font-size: 14px;\n  white-space: nowrap;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .upload-time[_ngcontent-%COMP%], .cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #818181;\n  white-space: nowrap;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%], .cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .upload-time[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .video-details-2nd-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .video-details-2nd-row[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .video-details-2nd-row[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 22px;\n  border-radius: 11px;\n  padding: 2px 11px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #EEEEEE;\n  transition: 0.3s ease-in-out;\n  color: #545454 !important;\n  font-size: 14px;\n  font-family: \"Muli-Regular\";\n  cursor: pointer;\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-description[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 0;\n  color: #545454;\n  white-space: pre-wrap;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  max-width: 250px;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3NpbmdsZS1wbGF5bGlzdC9wbGF5bGlzdC12aWRlb3MvQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxccGxheWxpc3RzXFxzaW5nbGUtcGxheWxpc3RcXHBsYXlsaXN0LXZpZGVvc1xccGxheWxpc3QtdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5bGlzdHMvc2luZ2xlLXBsYXlsaXN0L3BsYXlsaXN0LXZpZGVvcy9wbGF5bGlzdC12aWRlb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BsYXlsaXN0cy9zaW5nbGUtcGxheWxpc3QvcGxheWxpc3QtdmlkZW9zL0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNIQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUNySEo7QURBSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNFUjtBREFRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFWjtBREFZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQ0VoQjtBRENZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNDaEI7QURHUTtFQUNJLE9BQUE7QUNEWjtBREdZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ0RoQjtBREdnQjtFQUNJLFNBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNEcEI7QURLb0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUNIeEI7QURRWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ05oQjtBRFFnQjtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ05wQjtBRFNnQjtFQUNJLGNBQUE7QUNQcEI7QURXZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDVHBCO0FEWWdCO0VBRUksbUJBQUE7QUNYcEI7QURlWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ2JoQjtBRGtCb0I7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FDaEJ4QjtBRGtCd0I7RUVrSnBCLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FEaktKO0FEV1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDVGhCO0FEdUJBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FDcEJKO0FEd0JJO0VBQ0ksdUJBQUE7QUN0QlI7QUQ1R0k7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDOEdSO0FENUdRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM4R1o7QUQ1R1k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxlQUFBO0FDOEdoQjtBRDNHWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDNkdoQjtBRHpHUTtFQUNJLE9BQUE7QUMyR1o7QUR6R1k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDMkdoQjtBRHpHZ0I7RUFDSSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDMkdwQjtBRHZHb0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUN5R3hCO0FEcEdZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDc0doQjtBRHBHZ0I7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNzR3BCO0FEbkdnQjtFQUNJLGNBQUE7QUNxR3BCO0FEakdnQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNtR3BCO0FEaEdnQjtFQUVJLG1CQUFBO0FDaUdwQjtBRDdGWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQytGaEI7QUQxRm9CO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQzRGeEI7QUQxRndCO0VFa0pwQixZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBRHJESjtBRGpHWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNtR2hCO0FEdEVBO0VBQ0ksVUFBQTtBQ3lFSjtBRHRFQTtFQUNJLHNEQUFBO0FDeUVKIiwiZmlsZSI6InNyYy9hcHAvcGxheWxpc3RzL3NpbmdsZS1wbGF5bGlzdC9wbGF5bGlzdC12aWRlb3MvcGxheWxpc3QtdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcclxuXHJcbkBtaXhpbiB2aWRlb0NvbnRhaW5lciB7XHJcbiAgICAudmlkZW8tY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZmxleDogMCAwIDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDExNXB4O1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kdXJhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDlweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjNweDtcclxuXHJcbiAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZG90ZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNob3J0ZW5lZC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIC5jaGFubmVsLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kb3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAudXBsb2FkLXRpbWUsIC53YXRjaGVycy1jb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLndhdGNoZXJzLWNvdW50LCAudXBsb2FkLXRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZpZGVvLWRldGFpbHMtMm5kLXJvdyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgICAudGFncyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9tYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhZ0l0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zaG9ydGVuZWQtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucGxheWxpc3QtaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIEBpbmNsdWRlIHZpZGVvQ29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgdmlkZW9Db250YWluZXI7XHJcblxyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuIiwiLnBsYXlsaXN0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuLnBsYXlsaXN0LWl0ZW0gLnZpZGVvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ucGxheWxpc3QtaXRlbSAudmlkZW8tY29udGFpbmVyIC5pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDAgMCAyMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxuLnBsYXlsaXN0LWl0ZW0gLnZpZGVvLWNvbnRhaW5lciAuaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExNXB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlsaXN0LWl0ZW0gLnZpZGVvLWNvbnRhaW5lciAuaW1nIC5kdXJhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA5cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDAgMnB4O1xufVxuLnBsYXlsaXN0LWl0ZW0gLnZpZGVvLWNvbnRhaW5lciAuZGV0YWlscyB7XG4gIGZsZXg6IDE7XG59XG4ucGxheWxpc3QtaXRlbSAudmlkZW8tY29udGFpbmVyIC5kZXRhaWxzIC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAyM3B4O1xufVxuLnBsYXlsaXN0LWl0ZW0gLnZpZGVvLWNvbnRhaW5lciAuZGV0YWlscyAudGl0bGUgaDQge1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIjtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5wbGF5bGlzdC1pdGVtIC52aWRlby1jb250YWluZXIgLmRldGFpbHMgLnRpdGxlIC5kb3RlcyBidXR0b24ge1xuICB3aWR0aDogNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbGluZS1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbi5wbGF5bGlzdC1pdGVtIC52aWRlby1jb250YWluZXIgLmRldGFpbHMgLnNob3J0ZW5lZC1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wbGF5bGlzdC1pdGVtIC52aWRlby1jb250YWluZXIgLmRldGFpbHMgLnNob3J0ZW5lZC1kZXRhaWxzIC5jaGFubmVsLW5hbWUge1xuICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIjtcbiAgY29sb3I6ICM4MTgxODE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5wbGF5bGlzdC1pdGVtIC52aWRlby1jb250YWluZXIgLmRldGFpbHMgLnNob3J0ZW5lZC1kZXRhaWxzIC5kb3Qge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5wbGF5bGlzdC1pdGVtIC52aWRlby1jb250YWluZXIgLmRldGFpbHMgLnNob3J0ZW5lZC1kZXRhaWxzIC51cGxvYWQtdGltZSwgLnBsYXlsaXN0LWl0ZW0gLnZpZGVvLWNvbnRhaW5lciAuZGV0YWlscyAuc2hvcnRlbmVkLWRldGFpbHMgLndhdGNoZXJzLWNvdW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgxODE4MTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5wbGF5bGlzdC1pdGVtIC52aWRlby1jb250YWluZXIgLmRldGFpbHMgLnNob3J0ZW5lZC1kZXRhaWxzIC53YXRjaGVycy1jb3VudCwgLnBsYXlsaXN0LWl0ZW0gLnZpZGVvLWNvbnRhaW5lciAuZGV0YWlscyAuc2hvcnRlbmVkLWRldGFpbHMgLnVwbG9hZC10aW1lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5wbGF5bGlzdC1pdGVtIC52aWRlby1jb250YWluZXIgLmRldGFpbHMgLnZpZGVvLWRldGFpbHMtMm5kLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucGxheWxpc3QtaXRlbSAudmlkZW8tY29udGFpbmVyIC5kZXRhaWxzIC52aWRlby1kZXRhaWxzLTJuZC1yb3cgLnRhZ3MgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnBsYXlsaXN0LWl0ZW0gLnZpZGVvLWNvbnRhaW5lciAuZGV0YWlscyAudmlkZW8tZGV0YWlscy0ybmQtcm93IC50YWdzIGxpIHNwYW4ge1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIHBhZGRpbmc6IDJweCAxMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0VFRUVFRTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICM1NDU0NTQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJNdWxpLVJlZ3VsYXJcIjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlsaXN0LWl0ZW0gLnZpZGVvLWNvbnRhaW5lciAuZGV0YWlscyAuc2hvcnRlbmVkLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmNkay1kcmFnLXByZXZpZXcgaW1nIHtcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2RrLWRyYWctcHJldmlldyAudmlkZW8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IC52aWRlby1jb250YWluZXIgLmltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMCAwIDIwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4uY2RrLWRyYWctcHJldmlldyAudmlkZW8tY29udGFpbmVyIC5pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTE1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2RrLWRyYWctcHJldmlldyAudmlkZW8tY29udGFpbmVyIC5pbWcgLmR1cmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDlweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMCAycHg7XG59XG4uY2RrLWRyYWctcHJldmlldyAudmlkZW8tY29udGFpbmVyIC5kZXRhaWxzIHtcbiAgZmxleDogMTtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IC52aWRlby1jb250YWluZXIgLmRldGFpbHMgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDIzcHg7XG59XG4uY2RrLWRyYWctcHJldmlldyAudmlkZW8tY29udGFpbmVyIC5kZXRhaWxzIC50aXRsZSBoNCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNkay1kcmFnLXByZXZpZXcgLnZpZGVvLWNvbnRhaW5lciAuZGV0YWlscyAudGl0bGUgLmRvdGVzIGJ1dHRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xufVxuLmNkay1kcmFnLXByZXZpZXcgLnZpZGVvLWNvbnRhaW5lciAuZGV0YWlscyAuc2hvcnRlbmVkLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNkay1kcmFnLXByZXZpZXcgLnZpZGVvLWNvbnRhaW5lciAuZGV0YWlscyAuc2hvcnRlbmVkLWRldGFpbHMgLmNoYW5uZWwtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xuICBjb2xvcjogIzgxODE4MTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNkay1kcmFnLXByZXZpZXcgLnZpZGVvLWNvbnRhaW5lciAuZGV0YWlscyAuc2hvcnRlbmVkLWRldGFpbHMgLmRvdCB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLmNkay1kcmFnLXByZXZpZXcgLnZpZGVvLWNvbnRhaW5lciAuZGV0YWlscyAuc2hvcnRlbmVkLWRldGFpbHMgLnVwbG9hZC10aW1lLCAuY2RrLWRyYWctcHJldmlldyAudmlkZW8tY29udGFpbmVyIC5kZXRhaWxzIC5zaG9ydGVuZWQtZGV0YWlscyAud2F0Y2hlcnMtY291bnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODE4MTgxO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNkay1kcmFnLXByZXZpZXcgLnZpZGVvLWNvbnRhaW5lciAuZGV0YWlscyAuc2hvcnRlbmVkLWRldGFpbHMgLndhdGNoZXJzLWNvdW50LCAuY2RrLWRyYWctcHJldmlldyAudmlkZW8tY29udGFpbmVyIC5kZXRhaWxzIC5zaG9ydGVuZWQtZGV0YWlscyAudXBsb2FkLXRpbWUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNkay1kcmFnLXByZXZpZXcgLnZpZGVvLWNvbnRhaW5lciAuZGV0YWlscyAudmlkZW8tZGV0YWlscy0ybmQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IC52aWRlby1jb250YWluZXIgLmRldGFpbHMgLnZpZGVvLWRldGFpbHMtMm5kLXJvdyAudGFncyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uY2RrLWRyYWctcHJldmlldyAudmlkZW8tY29udGFpbmVyIC5kZXRhaWxzIC52aWRlby1kZXRhaWxzLTJuZC1yb3cgLnRhZ3MgbGkgc3BhbiB7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgcGFkZGluZzogMnB4IDExcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogIzU0NTQ1NCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktUmVndWxhclwiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2RrLWRyYWctcHJldmlldyAudmlkZW8tY29udGFpbmVyIC5kZXRhaWxzIC5zaG9ydGVuZWQtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG1heC13aWR0aDogMjUwcHg7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbkBtaXhpbiByZWRCdXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIHZpZGVvSXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOEI1ODc7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hZGRlZCB7XHJcblxyXG4gICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICBzcGFuLmFkZGVkLXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjRweDtcclxuICAgICAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJBZGRlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNTNjNmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyNHB4IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2hvcnRlbmVkLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC52aWRlby1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMCAyMDBweDtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kdXJhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDlweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MzJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjQ5cHg7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MzJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kdXJhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDlweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZG90ZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNob3J0ZW5lZC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNoYW5uZWwtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kb3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC51cGxvYWQtdGltZSwgLndhdGNoZXJzLWNvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLndhdGNoZXJzLWNvdW50LCAudXBsb2FkLXRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2hvcnRlbmVkLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNoYW5uZWwtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNoYW5uZWwtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLnZpZGVvcy1jb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFncyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWdJdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1peGluIGlucHV0V3JhcCB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcblxyXG4gICAgICAgICYuc2VhcmNoIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzgxODE4MTIxO1xyXG4gICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHRhZ0l0ZW17XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgcGFkZGluZzogMnB4IDExcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0VFRUVFRTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBjb2xvcjogIzU0NTQ1NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGF5bGlzdEl0ZW17XHJcbiAgICAucGxheWxpc3QtY29udGFpbmVyIHtcclxuICAgICAgICAudGh1bWJuYWlsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgLnNob3J0LWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjQ5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDMycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mYWtlLWJnIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxLCAxLCAxLCAwLjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlaylistVideosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-playlist-videos',
          templateUrl: './playlist-videos.component.html',
          styleUrls: ['./playlist-videos.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_7__["PlaylistsService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_9__["GetAuthUserPipe"]
        }];
      }, {
        playlist: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['playlist']
        }],
        refreshPlaylist: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['refreshPlaylist']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/playlists/single-playlist/single-playlist.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/playlists/single-playlist/single-playlist.component.ts ***!
    \************************************************************************/

  /*! exports provided: SinglePlaylistComponent */

  /***/
  function srcAppPlaylistsSinglePlaylistSinglePlaylistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SinglePlaylistComponent", function () {
      return SinglePlaylistComponent;
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


    var _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/services/playlists.service */
    "./src/app/core/services/playlists.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _playlist_info_form_playlist_info_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./playlist-info-form/playlist-info-form.component */
    "./src/app/playlists/single-playlist/playlist-info-form/playlist-info-form.component.ts");
    /* harmony import */


    var _playlist_videos_playlist_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./playlist-videos/playlist-videos.component */
    "./src/app/playlists/single-playlist/playlist-videos/playlist-videos.component.ts");

    function SinglePlaylistComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Playlist");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-playlist-info-form", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refreshPlaylist", function SinglePlaylistComponent_div_0_Template_app_playlist_info_form_refreshPlaylist_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.getPlaylistDetails();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-playlist-videos", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refreshPlaylist", function SinglePlaylistComponent_div_0_Template_app_playlist_videos_refreshPlaylist_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.getPlaylistDetails();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playlist", ctx_r0.playlist);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playlist", ctx_r0.playlist);
      }
    }

    var SinglePlaylistComponent = /*#__PURE__*/function () {
      function SinglePlaylistComponent(router, route, playlistsService, dialog) {
        _classCallCheck(this, SinglePlaylistComponent);

        this.router = router;
        this.route = route;
        this.playlistsService = playlistsService;
        this.dialog = dialog;
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
      }

      _createClass(SinglePlaylistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPlaylistDetails();
        }
      }, {
        key: "getPlaylistDetails",
        value: function getPlaylistDetails() {
          var _this7 = this;

          var _a, _b;

          var playlistId = (_b = (_a = this.route.snapshot) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b.id;

          if (playlistId) {
            this.playlistsService.getById({
              playlist_id: playlistId
            }).subscribe(function (dt) {
              _this7.playlist = dt;
            });
          }
        }
      }]);

      return SinglePlaylistComponent;
    }();

    SinglePlaylistComponent.ɵfac = function SinglePlaylistComponent_Factory(t) {
      return new (t || SinglePlaylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_playlists_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    SinglePlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SinglePlaylistComponent,
      selectors: [["app-single-playlist"]],
      decls: 1,
      vars: 1,
      consts: [["class", "single-playlist", 4, "ngIf"], [1, "single-playlist"], [1, "inner-wrap"], [1, "left"], [3, "playlist", "refreshPlaylist"], [1, "right"]],
      template: function SinglePlaylistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SinglePlaylistComponent_div_0_Template, 8, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playlist);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _playlist_info_form_playlist_info_form_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistInfoFormComponent"], _playlist_videos_playlist_videos_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistVideosComponent"]],
      styles: [".single-playlist[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  color: #18B587;\n}\n.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  flex: 0 0 316px;\n  margin-right: 32px;\n}\n.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 0 0 500px;\n}\n.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-description[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .channel-name[_ngcontent-%COMP%], .single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%], .single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .upload-time[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n@media screen and (max-width: 560px) {\n  .single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3NpbmdsZS1wbGF5bGlzdC9DOlxccHJvamVjdHNcXHRyYWRpbmdcXGZyb250ZW5kL3NyY1xcYXBwXFxwbGF5bGlzdHNcXHNpbmdsZS1wbGF5bGlzdFxcc2luZ2xlLXBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5bGlzdHMvc2luZ2xlLXBsYXlsaXN0L3NpbmdsZS1wbGF5bGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBUjtBREdJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDRFI7QURHUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0RaO0FESVE7RUFDSSxlQUFBO0FDRlo7QURLb0I7RUFDSSxtQkFBQTtBQ0h4QjtBRE13Qjs7O0VBR0ksbUJBQUE7QUNKNUI7QURTWTtFQWhCSjtJQWlCUSxPQUFBO0VDTmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BsYXlsaXN0cy9zaW5nbGUtcGxheWxpc3Qvc2luZ2xlLXBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdsZS1wbGF5bGlzdCB7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjMThCNTg3O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbm5lci13cmFwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMCAzMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgZmxleDogMCAwIDUwMHB4O1xyXG4gICAgICAgICAgICAucGxheWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlLCAuc2hvcnRlbmVkLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3J0ZW5lZC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoYW5uZWwtbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLndhdGNoZXJzLWNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudXBsb2FkLXRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuICBhbmQgKG1heC13aWR0aDogNTYwcHgpe1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuc2luZ2xlLXBsYXlsaXN0IGgyIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMxOEI1ODc7XG59XG4uc2luZ2xlLXBsYXlsaXN0IC5pbm5lci13cmFwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5zaW5nbGUtcGxheWxpc3QgLmlubmVyLXdyYXAgLmxlZnQge1xuICBmbGV4OiAwIDAgMzE2cHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbn1cbi5zaW5nbGUtcGxheWxpc3QgLmlubmVyLXdyYXAgLnJpZ2h0IHtcbiAgZmxleDogMCAwIDUwMHB4O1xufVxuLnNpbmdsZS1wbGF5bGlzdCAuaW5uZXItd3JhcCAucmlnaHQgLnBsYXlsaXN0LWl0ZW0gLmRldGFpbHMgLnRpdGxlLCAuc2luZ2xlLXBsYXlsaXN0IC5pbm5lci13cmFwIC5yaWdodCAucGxheWxpc3QtaXRlbSAuZGV0YWlscyAuc2hvcnRlbmVkLWRlc2NyaXB0aW9uIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5zaW5nbGUtcGxheWxpc3QgLmlubmVyLXdyYXAgLnJpZ2h0IC5wbGF5bGlzdC1pdGVtIC5kZXRhaWxzIC5zaG9ydGVuZWQtZGV0YWlscyAuY2hhbm5lbC1uYW1lLFxuLnNpbmdsZS1wbGF5bGlzdCAuaW5uZXItd3JhcCAucmlnaHQgLnBsYXlsaXN0LWl0ZW0gLmRldGFpbHMgLnNob3J0ZW5lZC1kZXRhaWxzIC53YXRjaGVycy1jb3VudCxcbi5zaW5nbGUtcGxheWxpc3QgLmlubmVyLXdyYXAgLnJpZ2h0IC5wbGF5bGlzdC1pdGVtIC5kZXRhaWxzIC5zaG9ydGVuZWQtZGV0YWlscyAudXBsb2FkLXRpbWUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgLnNpbmdsZS1wbGF5bGlzdCAuaW5uZXItd3JhcCAucmlnaHQge1xuICAgIGZsZXg6IDE7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SinglePlaylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-single-playlist',
          templateUrl: './single-playlist.component.html',
          styleUrls: ['./single-playlist.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistsService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=playlists-playlists-module-es5.js.map