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
      styles: [".playlist[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.playlist[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 190px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.playlist[_ngcontent-%COMP%]   .play-all[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #18B587;\n  border-radius: 0;\n  font-size: 16px;\n  color: #ffffff;\n}\n.playlist[_ngcontent-%COMP%]   .play-all[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.playlist[_ngcontent-%COMP%]   .add-video[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .save-playlist-changes[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  padding: 6px 24px;\n  background: #18B587;\n  border-radius: 0;\n  font-size: 16px;\n  color: #ffffff;\n}\n.playlist[_ngcontent-%COMP%]   .add-video.cancel[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .add-video.back[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .save-playlist-changes.cancel[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .save-playlist-changes.back[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .cancel.cancel[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .cancel.back[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .back.cancel[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .back.back[_ngcontent-%COMP%] {\n  background: #C9C9C9;\n  margin-right: 24px;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 16px;\n  margin-bottom: 0;\n  font-size: 16px;\n  font-family: \"Muli-Bold\";\n  color: #545454;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n  cursor: pointer;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  color: #545454;\n  font-size: 12px;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  vertical-align: sub;\n  font-size: 22px;\n  color: #545454;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  color: #545454;\n  font-size: 16px;\n  font-weight: 600;\n  border: 0;\n  padding: 0;\n  outline: none;\n  margin-left: 6px;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   #playlist-info-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   #playlist-info-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  width: 100%;\n  padding: 14px 24px;\n  background: #F4F4F4;\n  color: #545454;\n  border: 0;\n  outline: none;\n  resize: none;\n}\n.playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   #privacy-select[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3NpbmdsZS1wbGF5bGlzdC9wbGF5bGlzdC1pbmZvLWZvcm0vQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXBwXFxwbGF5bGlzdHNcXHNpbmdsZS1wbGF5bGlzdFxccGxheWxpc3QtaW5mby1mb3JtXFxwbGF5bGlzdC1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BsYXlsaXN0cy9zaW5nbGUtcGxheWxpc3QvcGxheWxpc3QtaW5mby1mb3JtL3BsYXlsaXN0LWluZm8tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQ1I7QURFSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FSO0FERVE7RUFDSSxrQkFBQTtBQ0FaO0FESUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRlI7QURJUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNGWjtBRFNRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQ1BaO0FEU1k7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ1BoQjtBRFdRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1RaO0FEWVE7RUFDSSxnQkFBQTtBQ1ZaO0FEWVk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDVmhCO0FEYVk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNYaEI7QURnQlk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ2RoQjtBRGtCUTtFQUNJLGFBQUE7QUNoQloiLCJmaWxlIjoic3JjL2FwcC9wbGF5bGlzdHMvc2luZ2xlLXBsYXlsaXN0L3BsYXlsaXN0LWluZm8tZm9ybS9wbGF5bGlzdC1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTkwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsYXktYWxsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE4QjU4NztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZC12aWRlbywgLnNhdmUtcGxheWxpc3QtY2hhbmdlcywgLmNhbmNlbCwgLmJhY2sge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDI0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE4QjU4NztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgJi5jYW5jZWwsICYuYmFjayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNDOUM5Qzk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlbGVjdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3BsYXlsaXN0LWluZm8tZm9ybSB7XHJcbiAgICAgICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjcHJpdmFjeS1zZWxlY3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIucGxheWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5wbGF5bGlzdCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTkwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnBsYXlsaXN0IC5wbGF5LWFsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzE4QjU4NztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wbGF5bGlzdCAucGxheS1hbGwgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5wbGF5bGlzdCAuYWRkLXZpZGVvLCAucGxheWxpc3QgLnNhdmUtcGxheWxpc3QtY2hhbmdlcywgLnBsYXlsaXN0IC5jYW5jZWwsIC5wbGF5bGlzdCAuYmFjayB7XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIHBhZGRpbmc6IDZweCAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnBsYXlsaXN0IC5hZGQtdmlkZW8uY2FuY2VsLCAucGxheWxpc3QgLmFkZC12aWRlby5iYWNrLCAucGxheWxpc3QgLnNhdmUtcGxheWxpc3QtY2hhbmdlcy5jYW5jZWwsIC5wbGF5bGlzdCAuc2F2ZS1wbGF5bGlzdC1jaGFuZ2VzLmJhY2ssIC5wbGF5bGlzdCAuY2FuY2VsLmNhbmNlbCwgLnBsYXlsaXN0IC5jYW5jZWwuYmFjaywgLnBsYXlsaXN0IC5iYWNrLmNhbmNlbCwgLnBsYXlsaXN0IC5iYWNrLmJhY2sge1xuICBiYWNrZ3JvdW5kOiAjQzlDOUM5O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG4ucGxheWxpc3QgLmluZm8gaDMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuLnBsYXlsaXN0IC5pbmZvIGgzIHNwYW4ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wbGF5bGlzdCAuaW5mbyBwIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wbGF5bGlzdCAuaW5mbyAuc2VsZWN0IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5wbGF5bGlzdCAuaW5mbyAuc2VsZWN0IHNwYW4ge1xuICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuLnBsYXlsaXN0IC5pbmZvIC5zZWxlY3Qgc2VsZWN0IHtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuLnBsYXlsaXN0IC5pbmZvICNwbGF5bGlzdC1pbmZvLWZvcm0gaW5wdXQsIC5wbGF5bGlzdCAuaW5mbyAjcGxheWxpc3QtaW5mby1mb3JtIHRleHRhcmVhIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE0cHggMjRweDtcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmVzaXplOiBub25lO1xufVxuLnBsYXlsaXN0IC5pbmZvICNwcml2YWN5LXNlbGVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"]
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


    var _core_helpers_track_by_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/helpers/track-by-element */
    "./src/app/core/helpers/track-by-element.ts");
    /* harmony import */


    var _core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/components/modals/confirmation-dialog/confirmation-dialog.component */
    "./src/app/core/components/modals/confirmation-dialog/confirmation-dialog.component.ts");
    /* harmony import */


    var _core_components_modals_add_video_to_another_playlist_add_video_to_another_playlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @core/components/modals/add-video-to-another-playlist/add-video-to-another-playlist.component */
    "./src/app/core/components/modals/add-video-to-another-playlist/add-video-to-another-playlist.component.ts");
    /* harmony import */


    var _core_constants_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @core/constants/global */
    "./src/app/core/constants/global.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @core/services/playlists.service */
    "./src/app/core/services/playlists.service.ts");
    /* harmony import */


    var _core_services_video_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @core/services/video.service */
    "./src/app/core/services/video.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");
    /* harmony import */


    var _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../shared/pipes/date-from-now.pipe */
    "./src/app/shared/pipes/date-from-now.pipe.ts");

    function PlaylistVideosComponent_div_1_li_57_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistVideosComponent_div_1_li_57_Template_li_click_0_listener() {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistVideosComponent_div_1_Template_img_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var video_r1 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.openPlaylistPage(video_r1, ctx_r9.playlist);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistVideosComponent_div_1_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var video_r1 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r10.updatePrivacy(video_r1, video_r1.privacy.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-menu", null, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistVideosComponent_div_1_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var video_r1 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.addToAnotherPlaylist(video_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "playlist_add");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Add to another playlist");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistVideosComponent_div_1_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var video_r1 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r12.changePlaylistThumbnail(ctx_r12.playlist.id, video_r1.thumbnail);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "insert_photo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Set as playlist thumbnail");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistVideosComponent_div_1_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var video_r1 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r13.updatePrivacy(video_r1, video_r1.privacy.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistVideosComponent_div_1_Template_button_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var video_r1 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.removeVideoFromPlaylist(ctx_r14.playlist.id, video_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Remove from playlist");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\xB7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\xB7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "dateFromNow");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, PlaylistVideosComponent_div_1_li_57_Template, 3, 1, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var video_r1 = ctx.$implicit;

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragPreviewClass", "video-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 14, video_r1.thumbnail), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", video_r1.privacy.name !== "Public" ? "red" : "green");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("visibility_", video_r1.privacy.name !== "Public" ? "off" : "on", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r1.duration);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("visibility_", video_r1.privacy.name !== "Public" ? "on" : "off", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Make ", video_r1.privacy.name !== "Private" ? "private" : "public", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r1.channel.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", video_r1.status === "live" ? "17k watching" : video_r1.views + " view" + (video_r1.views === 1 ? "" : "s"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 16, video_r1.created_at));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", video_r1 == null ? null : video_r1.tags);
      }
    }

    var PlaylistVideosComponent = /*#__PURE__*/function () {
      function PlaylistVideosComponent(router, route, playlistsService, videoService, dialog, getAuthUser) {
        _classCallCheck(this, PlaylistVideosComponent);

        this.router = router;
        this.route = route;
        this.playlistsService = playlistsService;
        this.videoService = videoService;
        this.dialog = dialog;
        this.getAuthUser = getAuthUser;
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_6__["API_URL"];
        this.trackByElement = _core_helpers_track_by_element__WEBPACK_IMPORTED_MODULE_3__["default"];
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
          // console.log(e)
          // console.log(channel)
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

          this.dialog.open(_core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogComponent"]).afterClosed().subscribe(function (confirmed) {
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
            _this6.dialog.open(_core_components_modals_add_video_to_another_playlist_add_video_to_another_playlist_component__WEBPACK_IMPORTED_MODULE_5__["AddVideoToAnotherPlaylistComponent"], {
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
        key: "updatePrivacy",
        value: function updatePrivacy(video, privacy) {
          this.videoService.updatePrivacy({
            video_id: video.id,
            privacy: privacy === 'Public' ? 'Private' : 'Public'
          }).subscribe(function (dt) {
            video.privacy = dt;
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
      return new (t || PlaylistVideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_playlists_service__WEBPACK_IMPORTED_MODULE_8__["PlaylistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_9__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_11__["GetAuthUserPipe"]));
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
      vars: 2,
      consts: [["cdkDropList", "", 1, "playlist"], ["class", "playlist-item", "cdkDrag", "", 3, "cdkDragPreviewClass", "cdkDragDropped", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["cdkDrag", "", 1, "playlist-item", 3, "cdkDragPreviewClass", "cdkDragDropped"], [1, "video-container"], [1, "img"], [3, "src", "click"], [1, "update-privacy", 3, "ngClass", "click"], [1, "duration"], [1, "details"], [1, "title"], [1, ""], [1, "dotes"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "shortened-details"], [1, "channel-name"], [1, "dot"], [1, "watchers-count"], [1, "upload-time"], [1, "video-details-2nd-row"], [1, "shortened-description"], [1, "tags"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]],
      template: function PlaylistVideosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlaylistVideosComponent_div_1_Template, 58, 18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.playlist.videos)("ngForTrackBy", ctx.trackByElement);
        }
      },
      directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuItem"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_17__["GetThumbPathPipe"], _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_18__["DateFromNowPipe"]],
      styles: [".playlist-item[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  background: #ffffff;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px !important;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.update-privacy[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3NpbmdsZS1wbGF5bGlzdC9wbGF5bGlzdC12aWRlb3MvQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXBwXFxwbGF5bGlzdHNcXHNpbmdsZS1wbGF5bGlzdFxccGxheWxpc3QtdmlkZW9zXFxwbGF5bGlzdC12aWRlb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BsYXlsaXN0cy9zaW5nbGUtcGxheWxpc3QvcGxheWxpc3QtdmlkZW9zL0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXlsaXN0cy9zaW5nbGUtcGxheWxpc3QvcGxheWxpc3QtdmlkZW9zL3BsYXlsaXN0LXZpZGVvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLG1CQUFBO0VBQ0EsbUJDSkk7QUNDUjs7QUZPQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBRUpKOztBRlFJO0VBQ0ksdUJBQUE7QUVOUjs7QUZVQTtFQUNJLFVBQUE7QUVQSjs7QUZVQTtFQUNJLHNEQUFBO0FFUEo7O0FGVUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FFUEoiLCJmaWxlIjoic3JjL2FwcC9wbGF5bGlzdHMvc2luZ2xlLXBsYXlsaXN0L3BsYXlsaXN0LXZpZGVvcy9wbGF5bGlzdC12aWRlb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuXHJcbi5wbGF5bGlzdC1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4udXBkYXRlLXByaXZhY3kge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIiRyZWQ6ICNGNTNDNkY7XHJcbiRtZXRsLWdyZWVuOiAjMThCNTg3O1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJGxpZ2h0X2dyYXk6ICNiM2IzYjM7XHJcbiIsIi5wbGF5bGlzdC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IGltZyB7XG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4udXBkYXRlLXByaXZhY3kge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_8__["PlaylistsService"]
        }, {
          type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_9__["VideoService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_11__["GetAuthUserPipe"]
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


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _playlist_info_form_playlist_info_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./playlist-info-form/playlist-info-form.component */
    "./src/app/playlists/single-playlist/playlist-info-form/playlist-info-form.component.ts");
    /* harmony import */


    var _playlist_videos_playlist_videos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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
      function SinglePlaylistComponent(router, route, playlistsService, dialog, getAuthUser) {
        _classCallCheck(this, SinglePlaylistComponent);

        this.router = router;
        this.route = route;
        this.playlistsService = playlistsService;
        this.dialog = dialog;
        this.getAuthUser = getAuthUser;
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.authUser = this.getAuthUser.transform();
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
              playlist_id: playlistId,
              user_id: this.authUser
            }).subscribe(function (dt) {
              _this7.playlist = dt;
            });
          }
        }
      }]);

      return SinglePlaylistComponent;
    }();

    SinglePlaylistComponent.ɵfac = function SinglePlaylistComponent_Factory(t) {
      return new (t || SinglePlaylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_playlists_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_5__["GetAuthUserPipe"]));
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
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _playlist_info_form_playlist_info_form_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistInfoFormComponent"], _playlist_videos_playlist_videos_component__WEBPACK_IMPORTED_MODULE_8__["PlaylistVideosComponent"]],
      styles: [".single-playlist[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  color: #18B587;\n}\n.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  flex: 0 0 316px;\n  margin-right: 32px;\n}\n.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 0 0 500px;\n}\n.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-description[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .channel-name[_ngcontent-%COMP%], .single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%], .single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .upload-time[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n@media screen and (max-width: 560px) {\n  .single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3NpbmdsZS1wbGF5bGlzdC9DOlxccHJvamVjdHNcXG1ldGx0dlxcZnJvbnRlbmQvc3JjXFxhcHBcXHBsYXlsaXN0c1xcc2luZ2xlLXBsYXlsaXN0XFxzaW5nbGUtcGxheWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BsYXlsaXN0cy9zaW5nbGUtcGxheWxpc3Qvc2luZ2xlLXBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FSO0FER0k7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNEUjtBREdRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDRFo7QURJUTtFQUNJLGVBQUE7QUNGWjtBREtvQjtFQUNJLG1CQUFBO0FDSHhCO0FETXdCOzs7RUFHSSxtQkFBQTtBQ0o1QjtBRFNZO0VBaEJKO0lBaUJRLE9BQUE7RUNOZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGxheWxpc3RzL3NpbmdsZS1wbGF5bGlzdC9zaW5nbGUtcGxheWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2luZ2xlLXBsYXlsaXN0IHtcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMxOEI1ODc7XHJcbiAgICB9XHJcblxyXG4gICAgLmlubmVyLXdyYXAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgZmxleDogMCAwIDMxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICBmbGV4OiAwIDAgNTAwcHg7XHJcbiAgICAgICAgICAgIC5wbGF5bGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICAudGl0bGUsIC5zaG9ydGVuZWQtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2hvcnRlbmVkLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hhbm5lbC1uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAud2F0Y2hlcnMtY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC51cGxvYWQtdGltZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOiA1NjBweCl7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5zaW5nbGUtcGxheWxpc3QgaDIge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzE4QjU4Nztcbn1cbi5zaW5nbGUtcGxheWxpc3QgLmlubmVyLXdyYXAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnNpbmdsZS1wbGF5bGlzdCAuaW5uZXItd3JhcCAubGVmdCB7XG4gIGZsZXg6IDAgMCAzMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxuLnNpbmdsZS1wbGF5bGlzdCAuaW5uZXItd3JhcCAucmlnaHQge1xuICBmbGV4OiAwIDAgNTAwcHg7XG59XG4uc2luZ2xlLXBsYXlsaXN0IC5pbm5lci13cmFwIC5yaWdodCAucGxheWxpc3QtaXRlbSAuZGV0YWlscyAudGl0bGUsIC5zaW5nbGUtcGxheWxpc3QgLmlubmVyLXdyYXAgLnJpZ2h0IC5wbGF5bGlzdC1pdGVtIC5kZXRhaWxzIC5zaG9ydGVuZWQtZGVzY3JpcHRpb24ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnNpbmdsZS1wbGF5bGlzdCAuaW5uZXItd3JhcCAucmlnaHQgLnBsYXlsaXN0LWl0ZW0gLmRldGFpbHMgLnNob3J0ZW5lZC1kZXRhaWxzIC5jaGFubmVsLW5hbWUsXG4uc2luZ2xlLXBsYXlsaXN0IC5pbm5lci13cmFwIC5yaWdodCAucGxheWxpc3QtaXRlbSAuZGV0YWlscyAuc2hvcnRlbmVkLWRldGFpbHMgLndhdGNoZXJzLWNvdW50LFxuLnNpbmdsZS1wbGF5bGlzdCAuaW5uZXItd3JhcCAucmlnaHQgLnBsYXlsaXN0LWl0ZW0gLmRldGFpbHMgLnNob3J0ZW5lZC1kZXRhaWxzIC51cGxvYWQtdGltZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAuc2luZ2xlLXBsYXlsaXN0IC5pbm5lci13cmFwIC5yaWdodCB7XG4gICAgZmxleDogMTtcbiAgfVxufSJdfQ== */"]
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
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_5__["GetAuthUserPipe"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=playlists-playlists-module-es5.js.map