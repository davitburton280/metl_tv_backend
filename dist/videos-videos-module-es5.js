function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videos-videos-module"], {
  /***/
  "./src/app/videos/play-video/play-video.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/videos/play-video/play-video.component.ts ***!
    \***********************************************************/

  /*! exports provided: PlayVideoComponent */

  /***/
  function srcAppVideosPlayVideoPlayVideoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayVideoComponent", function () {
      return PlayVideoComponent;
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


    var _core_helpers_is_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/helpers/is-responsive */
    "./src/app/core/helpers/is-responsive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_video_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @core/services/video.service */
    "./src/app/core/services/video.service.ts");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @core/services/auth.service */
    "./src/app/core/services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @core/services/loader.service */
    "./src/app/core/services/loader.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_user_tags_user_tags_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/components/user-tags/user-tags.component */
    "./src/app/shared/components/user-tags/user-tags.component.ts");
    /* harmony import */


    var _shared_components_video_js_player_video_js_player_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/components/video-js-player/video-js-player.component */
    "./src/app/shared/components/video-js-player/video-js-player.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _video_comments_list_video_comments_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./video-comments-list/video-comments-list.component */
    "./src/app/videos/play-video/video-comments-list/video-comments-list.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _video_details_form_video_details_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./video-details-form/video-details-form.component */
    "./src/app/videos/play-video/video-details-form/video-details-form.component.ts");
    /* harmony import */


    var _video_suggestions_video_suggestions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./video-suggestions/video-suggestions.component */
    "./src/app/videos/play-video/video-suggestions/video-suggestions.component.ts");
    /* harmony import */


    var _video_comments_form_video_comments_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./video-comments-form/video-comments-form.component */
    "./src/app/videos/play-video/video-comments-form/video-comments-form.component.ts");
    /* harmony import */


    var _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../shared/pipes/date-from-now.pipe */
    "./src/app/shared/pipes/date-from-now.pipe.ts");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");

    function PlayVideoComponent_app_user_tags_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-user-tags", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tagSelected", function PlayVideoComponent_app_user_tags_0_Template_app_user_tags_tagSelected_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r3.getVideosByTag($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PlayVideoComponent_ng_container_3_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No tags defined for this video");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PlayVideoComponent_ng_container_3_ng_container_6_p_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_3_ng_container_6_p_1_Template_p_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var tag_r13 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r14.openVideoByTag(tag_r13.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" #", tag_r13.name, "");
      }
    }

    function PlayVideoComponent_ng_container_3_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlayVideoComponent_ng_container_3_ng_container_6_p_1_Template, 2, 1, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.videoData.tags);
      }
    }

    function PlayVideoComponent_ng_container_3_div_25_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_3_div_25_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r17.showTagsForm = !ctx_r17.showTagsForm;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Edit details");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PlayVideoComponent_ng_container_3_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PlayVideoComponent_ng_container_3_div_25_button_3_Template, 5, 0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.videoData == null ? null : ctx_r7.videoData.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.auth.loggedIn() && !ctx_r7.showTagsForm && (ctx_r7.authUser == null ? null : ctx_r7.authUser.id) === ctx_r7.videoData.author_id);
      }
    }

    function PlayVideoComponent_ng_container_3_app_video_details_form_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-video-details-form", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("formReady", function PlayVideoComponent_ng_container_3_app_video_details_form_26_Template_app_video_details_form_formReady_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r19.saveVideoDetails($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("videoData", ctx_r8.videoData);
      }
    }

    function PlayVideoComponent_ng_container_3_div_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_3_div_35_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r21.openChannelPage(ctx_r21.videoData);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 3, ctx_r9.videoData.channel.avatar, "avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.videoData.channel.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.buildSubscribersCountText(ctx_r9.videoData));
      }
    }

    function PlayVideoComponent_ng_container_3_app_video_suggestions_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-video-suggestions");
      }
    }

    function PlayVideoComponent_ng_container_3_app_video_comments_form_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-video-comments-form", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("added", function PlayVideoComponent_ng_container_3_app_video_comments_form_39_Template_app_video_comments_form_added_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r23.commentAdded($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("videoData", ctx_r11.videoData);
      }
    }

    function PlayVideoComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-video-js-player", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PlayVideoComponent_ng_container_3_span_5_Template, 2, 0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PlayVideoComponent_ng_container_3_ng_container_6_Template, 2, 1, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_3_Template_div_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r25.updateLikes(ctx_r25.videoData, "like");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_3_Template_div_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r27.updateLikes(ctx_r27.videoData, "dislike");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Share");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_3_Template_div_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r28.saveVideo(ctx_r28.videoData);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PlayVideoComponent_ng_container_3_div_25_Template, 4, 2, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PlayVideoComponent_ng_container_3_app_video_details_form_26_Template, 1, 1, "app-video-details-form", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\xB7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "dateFromNow");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, PlayVideoComponent_ng_container_3_div_35_Template, 8, 6, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, PlayVideoComponent_ng_container_3_app_video_suggestions_37_Template, 1, 0, "app-video-suggestions", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, PlayVideoComponent_ng_container_3_app_video_comments_form_39_Template, 1, 1, "app-video-comments-form", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "mat-spinner", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "app-video-comments-list", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("videoData", ctx_r1.videoData)("videoUrl", ctx_r1.apiUrl + "uploads/videos/" + ctx_r1.videoData.filename);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.videoData.tags == null ? null : ctx_r1.videoData.tags.length) === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.videoData.tags == null ? null : ctx_r1.videoData.tags.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("liked", ctx_r1.userVideoConnection == null ? null : ctx_r1.userVideoConnection.liked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.videoData.likes);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disliked", ctx_r1.userVideoConnection == null ? null : ctx_r1.userVideoConnection.disliked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.videoData.dislikes);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("saved", (ctx_r1.userVideoConnection == null ? null : ctx_r1.userVideoConnection.saved) === "saved");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r1.userVideoConnection == null ? null : ctx_r1.userVideoConnection.saved) === "saved" ? "Saved" : "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.showTagsForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showTagsForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r1.videoData == null ? null : ctx_r1.videoData.views) + " view" + ((ctx_r1.videoData == null ? null : ctx_r1.videoData.views) === 1 ? "" : "s"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 24, ctx_r1.videoData.created_at));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.videoData == null ? null : ctx_r1.videoData.channel);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSmallScreen);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.auth.loggedIn());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 15)("hidden", !ctx_r1.auth.loggedIn() || ctx_r1.commentsLoading === "finished");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("videoData", ctx_r1.videoData)("videoComments", ctx_r1.videoComments);
      }
    }

    function PlayVideoComponent_app_video_suggestions_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-video-suggestions");
      }
    }

    var PlayVideoComponent = /*#__PURE__*/function () {
      function PlayVideoComponent(route, videoService, router, getAuthUser, auth, toastr, loader, titleService) {
        _classCallCheck(this, PlayVideoComponent);

        this.route = route;
        this.videoService = videoService;
        this.router = router;
        this.getAuthUser = getAuthUser;
        this.auth = auth;
        this.toastr = toastr;
        this.loader = loader;
        this.titleService = titleService;
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["API_URL"];
        this.userVideoConnection = {
          liked: 0,
          disliked: 0,
          saved: '',
          viewed: false
        };
        this.videoJSPlayerOptions = _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["VIDEOJS_PLAYER_OPTIONS"];
        this.showTagsForm = false;
        this.isSmallScreen = _core_helpers_is_responsive__WEBPACK_IMPORTED_MODULE_3__["default"].isSmallScreen();
        this.commentsRefreshed = false;
        this.videoComments = [];
        this.commentsLoading = 'idle';
        this.subscriptions = [];
        this.authUser = this.getAuthUser.transform();
      }

      _createClass(PlayVideoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var videoId = this.route.snapshot.queryParams.id;
          var params = {
            id: videoId
          };
          this.subscriptions.push(this.videoService.getVideoById(params).subscribe(function (dt) {
            _this.videoData = dt;

            _this.titleService.setTitle(dt.name);

            if (_this.auth.loggedIn()) {
              _this.userVideoConnection = _this.checkUserVideoConnection(dt);

              _this.updateViewsCount(dt);

              _this.indexUserTags(dt);

              _this.getComments();
            }
          }));
        }
      }, {
        key: "checkUserVideoConnection",
        value: function checkUserVideoConnection(videoData) {
          var _this2 = this;

          var _a, _b, _c;

          var userVideoConnection = videoData === null || videoData === void 0 ? void 0 : videoData.users_vids.find(function (u) {
            return u.id === _this2.authUser.id;
          });

          if (!userVideoConnection) {
            return this.userVideoConnection;
          } else {
            var liked = (_a = userVideoConnection.users_videos) === null || _a === void 0 ? void 0 : _a.liked;
            var disliked = (_b = userVideoConnection.users_videos) === null || _b === void 0 ? void 0 : _b.disliked;
            var saved = userVideoConnection.users_videos.saved ? 'saved' : '';
            var viewed = !!((_c = userVideoConnection === null || userVideoConnection === void 0 ? void 0 : userVideoConnection.users_videos) === null || _c === void 0 ? void 0 : _c.viewed);
            return {
              liked: liked,
              disliked: disliked,
              saved: saved,
              viewed: viewed
            };
          }
        }
      }, {
        key: "updateViewsCount",
        value: function updateViewsCount(dt) {
          var _this3 = this;

          var params = {
            user_id: this.authUser.id,
            video_id: dt.id
          };

          if (!this.userVideoConnection.viewed) {
            this.subscriptions.push(this.videoService.updateViews(params).subscribe(function (d) {
              _this3.videoData = d;
            }));
          }
        }
      }, {
        key: "updateLikes",
        value: function updateLikes(videoData, action) {
          if (this.auth.loggedIn()) {
            videoData = this.getLikesState(action, videoData);
            this.videoService.updateLikes({
              video_id: videoData.id,
              user_id: this.authUser.id,
              likes: videoData.likes,
              dislikes: videoData.dislikes,
              liked: this.userVideoConnection.liked,
              disliked: this.userVideoConnection.disliked,
              saved: videoData.saved
            }).subscribe(function (dt) {});
          } else {
            this.toastr.error('Please log in first to take this action');
          }
        }
      }, {
        key: "getLikesState",
        value: function getLikesState(action, videoData) {
          if (action === 'like') {
            this.userVideoConnection.liked = +!this.userVideoConnection.liked;

            if (this.userVideoConnection.disliked) {
              videoData.dislikes += videoData.dislikes === 0 ? 0 : -1;
            }

            this.userVideoConnection.disliked = 0;
            videoData.likes += this.userVideoConnection.liked ? 1 : -1;
          } else {
            this.userVideoConnection.disliked = +!this.userVideoConnection.disliked;

            if (this.userVideoConnection.liked) {
              videoData.likes += videoData.likes === 0 ? 0 : -1;
            }

            this.userVideoConnection.liked = 0;
            videoData.dislikes += this.userVideoConnection.disliked ? 1 : -1;
          }

          return videoData;
        }
      }, {
        key: "indexUserTags",
        value: function indexUserTags(dt) {
          var _a;

          var params = {
            user_id: this.authUser.id,
            video_id: dt.id,
            tags: (_a = this.videoData) === null || _a === void 0 ? void 0 : _a.tags
          };
          this.subscriptions.push(this.videoService.indexUserTags(params).subscribe(function (d) {}));
        }
      }, {
        key: "openChannelPage",
        value: function openChannelPage(videoData) {
          this.router.navigate(['channels/show'], {
            queryParams: {
              username: videoData.users_vids[0].username
            }
          });
        }
      }, {
        key: "openVideoByTag",
        value: function openVideoByTag(name) {
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
        key: "saveVideo",
        value: function saveVideo(videoData) {
          var _this4 = this;

          this.subscriptions.push(this.videoService.saveVideo({
            video_id: videoData.id,
            user_id: this.authUser.id,
            saved: this.userVideoConnection.saved === 'saved' ? 0 : 1
          }).subscribe(function (dt) {
            _this4.userVideoConnection.saved = dt.saved ? 'saved' : '';
          }));
        }
      }, {
        key: "saveVideoDetails",
        value: function saveVideoDetails(e) {
          var _this5 = this;

          this.subscriptions.push(this.videoService.saveVideoDetails(e).subscribe(function (dt) {
            _this5.videoData = dt;

            _this5.titleService.setTitle(dt.name);

            _this5.showTagsForm = false;
          }));
        }
      }, {
        key: "getComments",
        value: function getComments() {
          var _this6 = this;

          this.commentsLoading = 'loading';
          this.subscriptions.push(this.videoService.getVideoComments({
            video_id: this.videoData.id
          }).subscribe(function (dt) {
            _this6.videoComments = dt;
            _this6.commentsLoading = 'finished';
          }));
        }
      }, {
        key: "commentAdded",
        value: function commentAdded(e) {
          this.commentsRefreshed = true;
          this.videoComments = e;
        }
      }, {
        key: "getVideosByTag",
        value: function getVideosByTag(name) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.router.navigate(['videos'], {
                      queryParams: {
                        tag: name
                      }
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "buildSubscribersCountText",
        value: function buildSubscribersCountText(videoData) {
          var count = videoData.channel.subscribers_count;
          return count + ' subscriber' + (count === 1 ? '' : 's');
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return PlayVideoComponent;
    }();

    PlayVideoComponent.ɵfac = function PlayVideoComponent_Factory(t) {
      return new (t || PlayVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["Title"]));
    };

    PlayVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PlayVideoComponent,
      selectors: [["app-play-video"]],
      decls: 6,
      vars: 3,
      consts: [[3, "tagSelected", 4, "ngIf"], [1, "ads-block"], [1, "ads-block-left"], [4, "ngIf"], [1, "ads-block-right"], [3, "tagSelected"], [1, "videoWrap"], [3, "videoData", "videoUrl"], [1, "main-tags"], [1, "main-tags-text"], [1, "main-tags-like"], [1, "main-tags-share", 3, "click"], [1, "fas", "fa-thumbs-up"], [1, "fas", "fa-thumbs-down"], [1, "main-tags-share"], [1, "fas", "fa-share-alt"], [1, "fas", "fa-plus-square"], [1, "tags-container"], ["class", "editable-details", 4, "ngIf"], [3, "videoData", "formReady", 4, "ngIf"], [1, "details-row"], [1, "views-count"], [1, "dot"], [1, "date"], ["class", "channel-block", 3, "click", 4, "ngIf"], [1, "comments-block"], ["class", "w-100", 3, "videoData", "added", 4, "ngIf"], [3, "diameter", "hidden"], [3, "videoData", "videoComments"], ["class", "tag", 3, "click", 4, "ngFor", "ngForOf"], [1, "tag", 3, "click"], [1, "editable-details"], [1, "video-title"], ["id", "add-tags", 3, "click", 4, "ngIf"], ["id", "add-tags", 3, "click"], [3, "videoData", "formReady"], [1, "channel-block", 3, "click"], ["alt", "avatar", 1, "avatar", 3, "src"], [1, "channel-name"], [1, "subscribers-count"], [1, "w-100", 3, "videoData", "added"]],
      template: function PlayVideoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PlayVideoComponent_app_user_tags_0_Template, 1, 0, "app-user-tags", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PlayVideoComponent_ng_container_3_Template, 42, 26, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PlayVideoComponent_app_video_suggestions_5_Template, 1, 0, "app-video-suggestions", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.videoData);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isSmallScreen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_components_user_tags_user_tags_component__WEBPACK_IMPORTED_MODULE_12__["UserTagsComponent"], _shared_components_video_js_player_video_js_player_component__WEBPACK_IMPORTED_MODULE_13__["VideoJsPlayerComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"], _video_comments_list_video_comments_list_component__WEBPACK_IMPORTED_MODULE_15__["VideoCommentsListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _video_details_form_video_details_form_component__WEBPACK_IMPORTED_MODULE_17__["VideoDetailsFormComponent"], _video_suggestions_video_suggestions_component__WEBPACK_IMPORTED_MODULE_18__["VideoSuggestionsComponent"], _video_comments_form_video_comments_form_component__WEBPACK_IMPORTED_MODULE_19__["VideoCommentsFormComponent"]],
      pipes: [_shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_20__["DateFromNowPipe"], _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_21__["GetThumbPathPipe"]],
      styles: [".saved[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .saved[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #18B587 !important;\n}\n\n#add-tags[_ngcontent-%COMP%] {\n  background-color: #18B587;\n  color: #ffffff;\n  margin-left: 10px;\n  display: flex;\n  align-items: center;\n  padding: 8px 24px;\n}\n\n.tag[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.details-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.details-row[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  color: #818181;\n}\n\n.channel-block[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-top: 0.5px solid #C9C9C9;\n  border-bottom: 0.5px solid #C9C9C9;\n  padding: 12px 0;\n  display: flex;\n  flex-direction: row;\n}\n\n.tags-container[_ngcontent-%COMP%]   .editable-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.main-tags[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 16px;\n  margin-top: 24px;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.main-tags[_ngcontent-%COMP%]   .main-tags-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n  margin-right: 24px;\n  align-items: center;\n}\n\n.main-tags[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #0035C6;\n  font-size: 16px;\n  font-family: \"Muli-Bold\", sans-serif;\n  margin-right: 16px;\n  margin-bottom: 8px;\n}\n\n.main-tags[_ngcontent-%COMP%]   .main-tags-like[_ngcontent-%COMP%] {\n  display: flex;\n  color: #545454;\n}\n\n.main-tags[_ngcontent-%COMP%]   .main-tags-share[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.main-tags[_ngcontent-%COMP%]   .main-tags-share[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  color: #545454;\n  font-size: 12px;\n  font-family: \"Muli-Light\", sans-serif;\n  margin-bottom: 0 !important;\n}\n\n.main-tags[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n  color: #18B587 !important;\n}\n\n.main-tags[_ngcontent-%COMP%]   .disliked[_ngcontent-%COMP%] {\n  color: #F53C6F !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXBwXFx2aWRlb3NcXHBsYXktdmlkZW9cXHBsYXktdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvcy9wbGF5LXZpZGVvL3BsYXktdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvcy9wbGF5LXZpZGVvL0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDSSx5QkFBQTtBQ0hSOztBRE9BO0VBQ0kseUJFVFM7RUZVVCxjRVRJO0VGV0osaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksZUFBQTtBQ0xKOztBRFFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDTEo7O0FET0k7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ0xSOztBRFNBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDTko7O0FEY0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNYUjs7QURxQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNuQko7O0FEcUJJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ25CUjs7QURzQkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ3BCUjs7QUR1Qkk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ3JCUjs7QUR3Qkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDdEJSOztBRHdCUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0FDdEJaOztBRDJCSTtFQUNJLHlCQUFBO0FDekJSOztBRDRCSTtFQUNJLHlCQUFBO0FDMUJSIiwiZmlsZSI6InNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vcGxheS12aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuLy9AaW1wb3J0IFwicGx5ci1jdXN0b21cIjtcclxuXHJcbi5zYXZlZCB7XHJcbiAgICBpLCBwIHtcclxuICAgICAgICBjb2xvcjogIzE4QjU4NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4jYWRkLXRhZ3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1ldGwtZ3JlZW47XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgLy9wYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XHJcbn1cclxuXHJcbi50YWcge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGV0YWlscy1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmRvdCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGFubmVsLWJsb2NrIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICNDOUM5Qzk7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjQzlDOUM5O1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5hZHMtYmxvY2stcmlnaHQge1xyXG5cclxufVxyXG5cclxuLnRhZ3MtY29udGFpbmVyIHtcclxuICAgIC5lZGl0YWJsZS1kZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAudmlkZW8tdGl0bGV7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5tYWluLXRhZ3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgLm1haW4tdGFncy10ZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjMDAzNUM2O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLXRhZ3MtbGlrZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi10YWdzLXNoYXJlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVsaS1MaWdodFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubGlrZWQge1xyXG4gICAgICAgIGNvbG9yOiAjMThCNTg3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpc2xpa2VkIHtcclxuICAgICAgICBjb2xvcjogJHJlZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmNvbW1lbnRzLWJsb2NrIHtcclxufVxyXG4iLCIuc2F2ZWQgaSwgLnNhdmVkIHAge1xuICBjb2xvcjogIzE4QjU4NyAhaW1wb3J0YW50O1xufVxuXG4jYWRkLXRhZ3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThCNTg3O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAyNHB4O1xufVxuXG4udGFnIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGV0YWlscy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRldGFpbHMtcm93IC5kb3Qge1xuICBtYXJnaW46IDAgMTBweDtcbiAgY29sb3I6ICM4MTgxODE7XG59XG5cbi5jaGFubmVsLWJsb2NrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjQzlDOUM5O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjQzlDOUM5O1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi50YWdzLWNvbnRhaW5lciAuZWRpdGFibGUtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluLXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm1haW4tdGFncyAubWFpbi10YWdzLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluLXRhZ3MgcCB7XG4gIGNvbG9yOiAjMDAzNUM2O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5tYWluLXRhZ3MgLm1haW4tdGFncy1saWtlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICM1NDU0NTQ7XG59XG4ubWFpbi10YWdzIC5tYWluLXRhZ3Mtc2hhcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbi10YWdzIC5tYWluLXRhZ3Mtc2hhcmUgcCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktTGlnaHRcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLm1haW4tdGFncyAubGlrZWQge1xuICBjb2xvcjogIzE4QjU4NyAhaW1wb3J0YW50O1xufVxuLm1haW4tdGFncyAuZGlzbGlrZWQge1xuICBjb2xvcjogI0Y1M0M2RiAhaW1wb3J0YW50O1xufSIsIiRyZWQ6ICNGNTNDNkY7XHJcbiRtZXRsLWdyZWVuOiAjMThCNTg3O1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJGxpZ2h0X2dyYXk6ICNiM2IzYjM7XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlayVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-play-video',
          templateUrl: './play-video.component.html',
          styleUrls: ['./play-video.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__["GetAuthUserPipe"]
        }, {
          type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }, {
          type: _core_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["Title"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/videos/play-video/video-comments-form/video-comments-form.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/videos/play-video/video-comments-form/video-comments-form.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: VideoCommentsFormComponent */

  /***/
  function srcAppVideosPlayVideoVideoCommentsFormVideoCommentsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoCommentsFormComponent", function () {
      return VideoCommentsFormComponent;
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


    var _core_services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/services/video.service */
    "./src/app/core/services/video.service.ts");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/services/subject.service */
    "./src/app/core/services/subject.service.ts");
    /* harmony import */


    var _shared_pipes_fix_text_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/pipes/fix-text-line-breaks.pipe */
    "./src/app/shared/pipes/fix-text-line-breaks.pipe.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");

    var _c0 = ["cEditable"];

    var VideoCommentsFormComponent = /*#__PURE__*/function () {
      function VideoCommentsFormComponent(fb, videoService, getAuthUser, subject, cdr, fixLineBreaks) {
        _classCallCheck(this, VideoCommentsFormComponent);

        this.fb = fb;
        this.videoService = videoService;
        this.getAuthUser = getAuthUser;
        this.subject = subject;
        this.cdr = cdr;
        this.fixLineBreaks = fixLineBreaks;
        this.inputFocused = false;
        this.isSubmitted = false;
        this.originalFormattedComment = '';
        this.editComment = false;
        this.selectedComment = null;
        this.selectedReply = null;
        this.reply = false;
        this.isReplyComment = false;
        this.reply2Reply = false;
        this.parentComment = null;
        this.commentAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commentUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(VideoCommentsFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _a;

          this.authUser = this.getAuthUser.transform();
          this.placeholderText = this.getPlaceholderText();
          this.videoCommentsForm = this.fb.group({
            id: [''],
            from_id: [this.authUser.id],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            video_id: [this.videoData.id],
            to_user_id: [0],
            to_comment_id: [0],
            to_reply_id: [0],
            is_reply: [0]
          });

          if (this.reply2Reply) {
            this.replyUsername = '@' + ((_a = this.selectedReply) === null || _a === void 0 ? void 0 : _a.user.username) + ' ';
            this.videoCommentsForm.patchValue({
              comment: this.replyUsername
            });
          }
        }
      }, {
        key: "saveComment",
        value: function saveComment() {
          var _this7 = this;

          this.isSubmitted = true;

          if (this.videoCommentsForm.valid) {
            // Reply add
            if (this.reply) {
              this.videoCommentsForm.patchValue({
                to_comment_id: this.selectedComment.id,
                to_user_id: this.selectedComment.user.id,
                is_reply: 1
              }); // Reply edit
            } else if (this.isReplyComment) {
              this.videoCommentsForm.patchValue({
                to_comment_id: this.parentComment.id,
                to_user_id: this.parentComment.user.id,
                is_reply: 1
              });
            } else if (this.reply2Reply) {
              var updatedUsername = '<strong class="reply-username">' + this.replyUsername + '</strong>';
              var reply2Reply = this.commentCtrl.value.replace(this.replyUsername, updatedUsername);
              this.videoCommentsForm.patchValue({
                to_comment_id: this.selectedComment.id,
                to_reply_id: this.selectedReply.id,
                to_user_id: this.selectedComment.user.id,
                comment: reply2Reply,
                is_reply: 1
              });
            } // Comment & reply actions


            if (this.editComment) {
              if (this.parentComment) {
                var _updatedUsername = '<strong class="reply-username">' + this.replyUsername + '</strong>';

                var _reply2Reply = this.commentCtrl.value.replace(this.replyUsername, _updatedUsername);

                this.videoCommentsForm.patchValue({
                  comment: _reply2Reply
                });
              }

              this.videoService.updateVideoComment(this.videoCommentsForm.value).subscribe(function (dt) {
                _this7.commentUpdated.emit(dt);

                _this7.videoCommentsForm.get('comment').reset();
              });
            } else {
              this.videoService.addVideoComment(this.videoCommentsForm.value).subscribe(function (dt) {
                _this7.inputFocused = false;

                _this7.commentAdded.emit(dt);

                _this7.videoCommentsForm.get('comment').reset();
              });
            }
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.inputFocused = false;
          this.videoCommentsForm.get('comment').reset();

          if (this.editComment || this.reply || this.reply2Reply) {
            this.cancelled.emit();
          }
        }
      }, {
        key: "getPlaceholderText",
        value: function getPlaceholderText() {
          return 'Add a public ' + (this.reply ? 'reply' : 'comment') + '...';
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.editComment) {
            var comment = this.selectedComment.comment;

            if (this.parentComment) {
              this.replyUsername = comment.substring(comment.lastIndexOf('@'), comment.lastIndexOf(' '));
            }

            this.videoCommentsForm.patchValue({
              comment: this.fixLineBreaks.transform(comment.replace(/<[^>]*>?/gm, '')),
              id: this.selectedComment.id
            });
            this.inputFocused = true;
            this.cdr.detectChanges();
          }
        }
      }, {
        key: "commentCtrl",
        get: function get() {
          return this.videoCommentsForm.get('comment');
        }
      }]);

      return VideoCommentsFormComponent;
    }();

    VideoCommentsFormComponent.ɵfac = function VideoCommentsFormComponent_Factory(t) {
      return new (t || VideoCommentsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_3__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_fix_text_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_5__["FixTextLineBreaksPipe"]));
    };

    VideoCommentsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoCommentsFormComponent,
      selectors: [["app-video-comments-form"]],
      viewQuery: function VideoCommentsFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cEditable = _t.first);
        }
      },
      inputs: {
        videoData: "videoData",
        editComment: "editComment",
        selectedComment: "selectedComment",
        selectedReply: "selectedReply",
        reply: "reply",
        isReplyComment: "isReplyComment",
        reply2Reply: "reply2Reply",
        parentComment: "parentComment"
      },
      outputs: {
        commentAdded: "added",
        commentUpdated: "updated",
        cancelled: "cancelled"
      },
      decls: 14,
      vars: 10,
      consts: [[1, "w-100", 3, "formGroup"], [1, "d-flex", "mt-3", "comment-input-container"], [1, "avatar", 3, "src"], ["type", "hidden", "formControlName", "comment"], ["floatLabel", "never"], ["matInput", "", "cdkTextareaAutosize", "", "formControlName", "comment", 1, "comment-input", 3, "placeholder", "focus"], ["cEditable", ""], [1, "d-flex", "justify-content-end"], [3, "ngClass"], ["type", "button", 1, "btn", "text-btn", 3, "click"], ["type", "button", 1, "ml-3", "px-2", "btn", "enter", 3, "click"]],
      template: function VideoCommentsFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "getImgPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function VideoCommentsFormComponent_Template_textarea_focus_6_listener() {
            return ctx.inputFocused = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoCommentsFormComponent_Template_button_click_10_listener() {
            return ctx.onCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoCommentsFormComponent_Template_button_click_12_listener() {
            return ctx.saveComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.videoCommentsForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 7, ctx.authUser.channel.avatar, "avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholderText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.inputFocused ? "d-flex" : "d-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("green-bg", ctx.videoCommentsForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.reply ? "Reply" : "Comment", " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__["CdkTextareaAutosize"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_10__["GetThumbPathPipe"]],
      styles: ["form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  overflow: hidden;\n  resize: none;\n}\nform[_ngcontent-%COMP%]   .btn.enter[_ngcontent-%COMP%] {\n  background-color: #777;\n  color: white;\n  text-transform: uppercase;\n}\nform[_ngcontent-%COMP%]   .btn.text-btn[_ngcontent-%COMP%] {\n  outline: none;\n  color: #777;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tY29tbWVudHMtZm9ybS9DOlxccHJvamVjdHNcXG1ldGx0dlxcZnJvbnRlbmQvc3JjXFxhcHBcXHZpZGVvc1xccGxheS12aWRlb1xcdmlkZW8tY29tbWVudHMtZm9ybVxcdmlkZW8tY29tbWVudHMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tY29tbWVudHMtZm9ybS92aWRlby1jb21tZW50cy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0JBQUE7QUNBUjtBREdJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDRFI7QURJSTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRlI7QURLSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tY29tbWVudHMtZm9ybS92aWRlby1jb21tZW50cy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi5lbnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLnRleHQtYnRuIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5mb3JtIHRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcmVzaXplOiBub25lO1xufVxuZm9ybSAuYnRuLmVudGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuZm9ybSAuYnRuLnRleHQtYnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICM3Nzc7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoCommentsFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video-comments-form',
          templateUrl: './video-comments-form.component.html',
          styleUrls: ['./video-comments-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_3__["GetAuthUserPipe"]
        }, {
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _shared_pipes_fix_text_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_5__["FixTextLineBreaksPipe"]
        }];
      }, {
        videoData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        editComment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedComment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedReply: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        reply: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isReplyComment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        reply2Reply: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        parentComment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cEditable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['cEditable']
        }],
        commentAdded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['added']
        }],
        commentUpdated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['updated']
        }],
        cancelled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cancelled']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/videos/play-video/video-comments-list/comment-actions/comment-actions.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/videos/play-video/video-comments-list/comment-actions/comment-actions.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: CommentActionsComponent */

  /***/
  function srcAppVideosPlayVideoVideoCommentsListCommentActionsCommentActionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentActionsComponent", function () {
      return CommentActionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var CommentActionsComponent = /*#__PURE__*/function () {
      function CommentActionsComponent(getAuthUser) {
        _classCallCheck(this, CommentActionsComponent);

        this.getAuthUser = getAuthUser;
        this.commentSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CommentActionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authUser = this.getAuthUser.transform();
        }
      }, {
        key: "selectComment",
        value: function selectComment(c) {
          this.commentSelected.emit(c);
        }
      }, {
        key: "removeComment",
        value: function removeComment(c) {
          this.remove.emit(c);
        }
      }]);

      return CommentActionsComponent;
    }();

    CommentActionsComponent.ɵfac = function CommentActionsComponent_Factory(t) {
      return new (t || CommentActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_1__["GetAuthUserPipe"]));
    };

    CommentActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentActionsComponent,
      selectors: [["app-comment-actions"]],
      inputs: {
        comment: "comment"
      },
      outputs: {
        commentSelected: "commentSelected",
        remove: "remove"
      },
      decls: 16,
      vars: 1,
      consts: [[1, "more-actions"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]],
      template: function CommentActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentActionsComponent_Template_button_click_6_listener() {
            return ctx.selectComment(ctx.comment);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentActionsComponent_Template_button_click_11_listener() {
            return ctx.removeComment(ctx.comment);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy9wbGF5LXZpZGVvL3ZpZGVvLWNvbW1lbnRzLWxpc3QvY29tbWVudC1hY3Rpb25zL2NvbW1lbnQtYWN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentActionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comment-actions',
          templateUrl: './comment-actions.component.html',
          styleUrls: ['./comment-actions.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_1__["GetAuthUserPipe"]
        }];
      }, {
        comment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        commentSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        remove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/videos/play-video/video-comments-list/single-comment/single-comment.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/videos/play-video/video-comments-list/single-comment/single-comment.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: SingleCommentComponent */

  /***/
  function srcAppVideosPlayVideoVideoCommentsListSingleCommentSingleCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SingleCommentComponent", function () {
      return SingleCommentComponent;
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


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _video_comments_form_video_comments_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../video-comments-form/video-comments-form.component */
    "./src/app/videos/play-video/video-comments-form/video-comments-form.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");
    /* harmony import */


    var _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/pipes/date-from-now.pipe */
    "./src/app/shared/pipes/date-from-now.pipe.ts");

    function SingleCommentComponent_i_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 17);
      }
    }

    function SingleCommentComponent_app_video_comments_form_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-video-comments-form", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("added", function SingleCommentComponent_app_video_comments_form_23_Template_app_video_comments_form_added_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r3.commentAddedFn($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("videoData", ctx_r1.videoData)("reply", ctx_r1.reply)("selectedComment", ctx_r1.selectedComment)("reply2Reply", ctx_r1.reply2Reply)("selectedReply", ctx_r1.selectedReply);
      }
    }

    function SingleCommentComponent_p_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SingleCommentComponent_p_24_Template_p_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.toggleRepliesFn(ctx_r5.comment);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("expand_", ctx_r2.showReplies && ctx_r2.selectedComment === ctx_r2.comment ? "more" : "less", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.getRepliesTogglerText(ctx_r2.comment));
      }
    }

    var SingleCommentComponent = /*#__PURE__*/function () {
      function SingleCommentComponent(getAuthUser, router) {
        _classCallCheck(this, SingleCommentComponent);

        this.getAuthUser = getAuthUser;
        this.router = router;
        this.toggleReplies = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.commentAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectComment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.likeDislikeComment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.authUser = this.getAuthUser.transform();
      }

      _createClass(SingleCommentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isAuthor",
        value: function isAuthor(c) {
          return c.user.id === this.videoData.author_id;
        }
      }, {
        key: "getRepliesTogglerText",
        value: function getRepliesTogglerText(c) {
          var len = c.replies.length;
          return "View ".concat(len + (len > 1 ? ' replies' : ' reply'));
        }
      }, {
        key: "selectCommentFn",
        value: function selectCommentFn(c) {
          this.selectComment.emit(c);
        }
      }, {
        key: "commentAddedFn",
        value: function commentAddedFn(e) {
          this.commentAdded.emit(e);
        }
      }, {
        key: "toggleRepliesFn",
        value: function toggleRepliesFn(c) {
          this.toggleReplies.emit(c);
        }
      }, {
        key: "likeDislikeCommentFn",
        value: function likeDislikeCommentFn(c) {
          var liked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          this.likeDislikeComment.emit({
            c: c,
            liked: liked
          });
        }
      }, {
        key: "checkUserCommentConnection",
        value: function checkUserCommentConnection(c) {
          var _this8 = this;

          var foundInReactors = c.reactors.find(function (r) {
            return r.id === _this8.authUser.id;
          });
          return foundInReactors === null || foundInReactors === void 0 ? void 0 : foundInReactors.users_comments;
        }
      }, {
        key: "getReactorsCount",
        value: function getReactorsCount(reactors, reaction) {
          return reactors.filter(function (r) {
            return r === null || r === void 0 ? void 0 : r.users_comments[reaction];
          }).length;
        }
      }, {
        key: "getFullName",
        value: function getFullName(data) {
          return data.first_name + ' ' + data.last_name;
        }
      }, {
        key: "openChannelPage",
        value: function openChannelPage(username) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this9 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.router.navigateByUrl('/', {
                      skipLocationChange: true
                    }).then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return this.router.navigate(['channels/show'], {
                                  queryParams: {
                                    username: username
                                  }
                                });

                              case 2:
                                return _context3.abrupt("return", _context3.sent);

                              case 3:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return SingleCommentComponent;
    }();

    SingleCommentComponent.ɵfac = function SingleCommentComponent_Factory(t) {
      return new (t || SingleCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_2__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SingleCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SingleCommentComponent,
      selectors: [["app-single-comment"]],
      inputs: {
        comment: "comment",
        videoData: "videoData",
        showReplyForm: "showReplyForm",
        selectedComment: "selectedComment",
        selectedReply: "selectedReply",
        showReplies: "showReplies",
        reply: "reply",
        reply2Reply: "reply2Reply"
      },
      outputs: {
        toggleReplies: "toggleReplies",
        commentAdded: "commentAdded",
        selectComment: "selectComment",
        likeDislikeComment: "likeDislikeComment"
      },
      decls: 25,
      vars: 20,
      consts: [[1, "d-flex"], [1, "avatar", 3, "src"], [1, "details"], [1, "d-flex", "align-items-center", "mb-2"], [1, "mr-3", "user-name", 3, "click"], ["class", "fas fa-check-circle ml-1", 4, "ngIf"], [1, "comment-date"], [1, "comment-text", "mb-2", 3, "innerHTML"], [1, "likes-reply"], [1, "comments-like", "mb-2"], [1, "fa", "fa-thumbs-up", "mr-1", 3, "click"], [1, "likes-count"], [1, "fa", "fa-thumbs-down", "ml-3", "mr-1", 3, "click"], [1, "reply-container"], [1, "reply", 3, "click"], ["class", "w-100", 3, "videoData", "reply", "selectedComment", "reply2Reply", "selectedReply", "added", 4, "ngIf"], ["class", "replies-toggler mt-3", 3, "click", 4, "ngIf"], [1, "fas", "fa-check-circle", "ml-1"], [1, "w-100", 3, "videoData", "reply", "selectedComment", "reply2Reply", "selectedReply", "added"], [1, "replies-toggler", "mt-3", 3, "click"]],
      template: function SingleCommentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "getImgPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SingleCommentComponent_Template_div_click_5_listener() {
            return ctx.openChannelPage(ctx.comment == null ? null : ctx.comment.user == null ? null : ctx.comment.user.username);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SingleCommentComponent_i_7_Template, 1, 0, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "dateFromNow");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SingleCommentComponent_Template_i_click_14_listener() {
            return ctx.likeDislikeCommentFn(ctx.comment);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SingleCommentComponent_Template_i_click_17_listener() {
            return ctx.likeDislikeCommentFn(ctx.comment, false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SingleCommentComponent_Template_span_click_21_listener() {
            return ctx.selectCommentFn(ctx.comment);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Reply");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SingleCommentComponent_app_video_comments_form_23_Template, 1, 5, "app-video-comments-form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SingleCommentComponent_p_24_Template, 5, 2, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tmp_6_0 = null;
          var currVal_6 = (tmp_6_0 = ctx.checkUserCommentConnection(ctx.comment)) == null ? null : tmp_6_0.liked;
          var tmp_8_0 = null;
          var currVal_8 = (tmp_8_0 = ctx.checkUserCommentConnection(ctx.comment)) == null ? null : tmp_8_0.disliked;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 15, ctx.comment.user == null ? null : ctx.comment.user.channel.avatar, "avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("author", ctx.isAuthor(ctx.comment));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getFullName(ctx.comment == null ? null : ctx.comment.user), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthor(ctx.comment));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 18, ctx.comment.created_at));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.comment.comment, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("liked", currVal_6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getReactorsCount(ctx.comment.reactors, "liked"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disliked", currVal_8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getReactorsCount(ctx.comment.reactors, "disliked"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showReplyForm && (ctx.comment.id === (ctx.selectedComment == null ? null : ctx.selectedComment.id) || ctx.comment.id == (ctx.selectedReply == null ? null : ctx.selectedReply.id)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.comment == null ? null : ctx.comment.replies == null ? null : ctx.comment.replies.length) > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _video_comments_form_video_comments_form_component__WEBPACK_IMPORTED_MODULE_5__["VideoCommentsFormComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_7__["GetThumbPathPipe"], _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_8__["DateFromNowPipe"]],
      styles: [".details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.details[_ngcontent-%COMP%]   .comment-text[_ngcontent-%COMP%] {\n  color: #545454 !important;\n}\n.user-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.author[_ngcontent-%COMP%] {\n  height: 26px;\n  background-color: #777;\n  color: #ffffff !important;\n  border-radius: 20px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 5px;\n  font-family: \"Muli-Regular\", serif !important;\n}\n.replies-toggler[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #0e9d6a;\n  cursor: pointer;\n  font-family: \"Muli-Bold\", serif;\n  font-size: 14px;\n  margin: 0;\n}\n.comment-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #818181;\n  font-family: \"Muli-Light\", serif;\n}\n.user-name[_ngcontent-%COMP%] {\n  color: #545454;\n  font-family: \"Muli-Bold\", serif;\n}\n.likes-reply[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n}\n.likes-reply[_ngcontent-%COMP%]   .comments-like[_ngcontent-%COMP%] {\n  color: #777;\n  display: flex;\n  align-items: center;\n}\n.likes-reply[_ngcontent-%COMP%]   .comments-like[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.likes-reply[_ngcontent-%COMP%]   .reply-container[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.likes-reply[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #777;\n  margin-left: 15px;\n  font-family: \"Muli-Bold\", serif;\n  font-size: 14px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tY29tbWVudHMtbGlzdC9zaW5nbGUtY29tbWVudC9DOlxccHJvamVjdHNcXG1ldGx0dlxcZnJvbnRlbmQvc3JjXFxhcHBcXHZpZGVvc1xccGxheS12aWRlb1xcdmlkZW8tY29tbWVudHMtbGlzdFxcc2luZ2xlLWNvbW1lbnRcXHNpbmdsZS1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlb3MvcGxheS12aWRlby92aWRlby1jb21tZW50cy1saXN0L3NpbmdsZS1jb21tZW50L3NpbmdsZS1jb21tZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksT0FBQTtBQ0RKO0FER0k7RUFDSSx5QkFBQTtBQ0RSO0FETUE7RUFDSSxlQUFBO0FDSEo7QURNQTtFQUVJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDZDQUFBO0FDSko7QURPQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ0pKO0FET0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDSko7QURPQTtFQUNJLGNBQUE7RUFDQSwrQkFBQTtBQ0pKO0FEUUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDTEo7QURPSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNMUjtBRE9RO0VBQ0ksZUFBQTtBQ0xaO0FEU0k7RUFDSSxVQUFBO0FDUFI7QURVSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1JSIiwiZmlsZSI6InNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tY29tbWVudHMtbGlzdC9zaW5nbGUtY29tbWVudC9zaW5nbGUtY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5kZXRhaWxzIHtcclxuICAgIGZsZXg6IDE7XHJcblxyXG4gICAgLmNvbW1lbnQtdGV4dCB7XHJcbiAgICAgICAgY29sb3I6ICM1NDU0NTQgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi51c2VyLW5hbWV7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hdXRob3Ige1xyXG4gICAgLy9taW4td2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcclxuICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ011bGktUmVndWxhcicsIHNlcmlmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZXBsaWVzLXRvZ2dsZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzBlOWQ2YTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1Cb2xkJywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jb21tZW50LWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICBmb250LWZhbWlseTogXCJNdWxpLUxpZ2h0XCIsIHNlcmlmO1xyXG59XHJcblxyXG4udXNlci1uYW1lIHtcclxuICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCIsIHNlcmlmO1xyXG59XHJcblxyXG5cclxuLmxpa2VzLXJlcGx5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIC5jb21tZW50cy1saWtlIHtcclxuICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJlcGx5LWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDgwJVxyXG4gICAgfVxyXG5cclxuICAgIC5yZXBseSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIiwgc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG4iLCIuZGV0YWlscyB7XG4gIGZsZXg6IDE7XG59XG4uZGV0YWlscyAuY29tbWVudC10ZXh0IHtcbiAgY29sb3I6ICM1NDU0NTQgIWltcG9ydGFudDtcbn1cblxuLnVzZXItbmFtZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmF1dGhvciB7XG4gIGhlaWdodDogMjZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktUmVndWxhclwiLCBzZXJpZiAhaW1wb3J0YW50O1xufVxuXG4ucmVwbGllcy10b2dnbGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMwZTlkNmE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbW1lbnQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktTGlnaHRcIiwgc2VyaWY7XG59XG5cbi51c2VyLW5hbWUge1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCIsIHNlcmlmO1xufVxuXG4ubGlrZXMtcmVwbHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ubGlrZXMtcmVwbHkgLmNvbW1lbnRzLWxpa2Uge1xuICBjb2xvcjogIzc3NztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5saWtlcy1yZXBseSAuY29tbWVudHMtbGlrZSAuZmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGlrZXMtcmVwbHkgLnJlcGx5LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG59XG4ubGlrZXMtcmVwbHkgLnJlcGx5IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM3Nzc7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SingleCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-single-comment',
          templateUrl: './single-comment.component.html',
          styleUrls: ['./single-comment.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_2__["GetAuthUserPipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        comment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        videoData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showReplyForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectedComment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectedReply: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showReplies: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        reply: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        reply2Reply: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        toggleReplies: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        commentAdded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        selectComment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        likeDislikeComment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/videos/play-video/video-comments-list/video-comments-list.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/videos/play-video/video-comments-list/video-comments-list.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: VideoCommentsListComponent */

  /***/
  function srcAppVideosPlayVideoVideoCommentsListVideoCommentsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoCommentsListComponent", function () {
      return VideoCommentsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @core/components/modals/confirmation-dialog/confirmation-dialog.component */
    "./src/app/core/components/modals/confirmation-dialog/confirmation-dialog.component.ts");
    /* harmony import */


    var _core_helpers_track_by_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/helpers/track-by-element */
    "./src/app/core/helpers/track-by-element.ts");
    /* harmony import */


    var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/services/subject.service */
    "./src/app/core/services/subject.service.ts");
    /* harmony import */


    var _core_services_video_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/services/video.service */
    "./src/app/core/services/video.service.ts");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./single-comment/single-comment.component */
    "./src/app/videos/play-video/video-comments-list/single-comment/single-comment.component.ts");
    /* harmony import */


    var _comment_actions_comment_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./comment-actions/comment-actions.component */
    "./src/app/videos/play-video/video-comments-list/comment-actions/comment-actions.component.ts");
    /* harmony import */


    var _video_comments_form_video_comments_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../video-comments-form/video-comments-form.component */
    "./src/app/videos/play-video/video-comments-form/video-comments-form.component.ts");

    function VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_div_1_app_comment_actions_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-comment-actions", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_div_1_app_comment_actions_4_Template_app_comment_actions_remove_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r10.removeComment($event);
        })("commentSelected", function VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_div_1_app_comment_actions_4_Template_app_comment_actions_commentSelected_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r12.selectComment($event, false, true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var reply_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", reply_r6);
      }
    }

    function VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-single-comment", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("likeDislikeComment", function VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_div_1_Template_app_single_comment_likeDislikeComment_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r14.likeDislikeComment($event);
        })("commentAdded", function VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_div_1_Template_app_single_comment_commentAdded_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r16.commentAdded($event);
        })("selectComment", function VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_div_1_Template_app_single_comment_selectComment_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var reply_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.replyToReply(c_r1, reply_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_div_1_app_comment_actions_4_Template, 1, 1, "app-comment-actions", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var reply_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", reply_r6)("videoData", ctx_r7.videoData)("showReplyForm", ctx_r7.showReplyToReplyForm)("showReplies", ctx_r7.showReplies)("selectedComment", ctx_r7.selectedComment)("selectedReply", ctx_r7.selectedReply)("reply2Reply", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isMyComment(reply_r6) && !ctx_r7.editReply);
      }
    }

    function VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_app_video_comments_form_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-video-comments-form", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updated", function VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_app_video_comments_form_2_Template_app_video_comments_form_updated_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r21.getUpdatedComments($event);
        })("cancelled", function VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_app_video_comments_form_2_Template_app_video_comments_form_cancelled_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r23.editReply = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editComment", true)("selectedComment", ctx_r8.selectedReply)("isReplyComment", true)("parentComment", c_r1)("videoData", ctx_r8.videoData);
      }
    }

    function VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_div_1_Template, 5, 8, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_app_video_comments_form_2_Template, 1, 5, "app-video-comments-form", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var reply_r6 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reply_r6.id !== (ctx_r4.selectedReply == null ? null : ctx_r4.selectedReply.id) || !ctx_r4.editReply);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.editReply && reply_r6.id === ctx_r4.selectedReply.id);
      }
    }

    function VideoCommentsListComponent_ng_container_1_div_1_app_comment_actions_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-comment-actions", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function VideoCommentsListComponent_ng_container_1_div_1_app_comment_actions_6_Template_app_comment_actions_remove_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r25.removeComment($event);
        })("commentSelected", function VideoCommentsListComponent_ng_container_1_div_1_app_comment_actions_6_Template_app_comment_actions_commentSelected_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r27.selectComment($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", c_r1);
      }
    }

    function VideoCommentsListComponent_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-single-comment", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("likeDislikeComment", function VideoCommentsListComponent_ng_container_1_div_1_Template_app_single_comment_likeDislikeComment_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29.likeDislikeComment($event);
        })("commentAdded", function VideoCommentsListComponent_ng_container_1_div_1_Template_app_single_comment_commentAdded_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r31.commentAdded($event);
        })("toggleReplies", function VideoCommentsListComponent_ng_container_1_div_1_Template_app_single_comment_toggleReplies_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r32.toggleReplies($event);
        })("selectComment", function VideoCommentsListComponent_ng_container_1_div_1_Template_app_single_comment_selectComment_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r33.selectComment($event, true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VideoCommentsListComponent_ng_container_1_div_1_ng_container_4_Template, 3, 2, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VideoCommentsListComponent_ng_container_1_div_1_app_comment_actions_6_Template, 1, 1, "app-comment-actions", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("w-100", ctx_r2.editComment);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", c_r1)("videoData", ctx_r2.videoData)("showReplyForm", ctx_r2.showReplyForm)("showReplies", ctx_r2.showReplies)("selectedComment", ctx_r2.selectedComment)("reply", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r2.isReplyShown(c_r1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", c_r1.replies);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isMyComment(c_r1) && !ctx_r2.editComment);
      }
    }

    function VideoCommentsListComponent_ng_container_1_app_video_comments_form_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-video-comments-form", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updated", function VideoCommentsListComponent_ng_container_1_app_video_comments_form_2_Template_app_video_comments_form_updated_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r35.getUpdatedComments($event);
        })("cancelled", function VideoCommentsListComponent_ng_container_1_app_video_comments_form_2_Template_app_video_comments_form_cancelled_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r37.editComment = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editComment", true)("selectedComment", ctx_r3.selectedComment)("videoData", ctx_r3.videoData);
      }
    }

    function VideoCommentsListComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoCommentsListComponent_ng_container_1_div_1_Template, 7, 11, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideoCommentsListComponent_ng_container_1_app_video_comments_form_2_Template, 1, 3, "app-video-comments-form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var c_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isCommentShown(c_r1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.editComment && c_r1.id === ctx_r0.selectedComment.id);
      }
    }

    var VideoCommentsListComponent = /*#__PURE__*/function () {
      function VideoCommentsListComponent(subject, videoService, getAuthUser, dialog) {
        _classCallCheck(this, VideoCommentsListComponent);

        this.subject = subject;
        this.videoService = videoService;
        this.getAuthUser = getAuthUser;
        this.dialog = dialog;
        this.subscriptions = [];
        this.showReplyForm = false;
        this.showReplyToReplyForm = false;
        this.showReplies = false;
        this.editReply = false;
        this.trackByElement = _core_helpers_track_by_element__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.videoComments = [];
        this.editComment = false;
        this.authUser = this.getAuthUser.transform();
      }

      _createClass(VideoCommentsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isAuthor",
        value: function isAuthor(c) {
          return c.user.id === this.videoData.author_id;
        }
      }, {
        key: "isMyComment",
        value: function isMyComment(c) {
          return c.user.id === this.authUser.id;
        }
      }, {
        key: "getUpdatedComments",
        value: function getUpdatedComments(e) {
          var _this10 = this;

          this.videoComments = e;
          this.editComment = false;
          this.editReply = false;
          this.selectedComment = e.find(function (cm) {
            var _a;

            return cm.id === ((_a = _this10.selectedComment) === null || _a === void 0 ? void 0 : _a.id);
          });
          this.selectedReply = e.find(function (c) {
            var _a;

            return c.id === ((_a = _this10.selectedReply) === null || _a === void 0 ? void 0 : _a.id);
          });
        }
      }, {
        key: "selectComment",
        value: function selectComment(c) {
          var replyBtnClicked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var replyCommentSelected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (!replyBtnClicked && !replyCommentSelected) {
            this.editComment = !this.editComment;
            this.showReplyForm = !this.editComment;
            this.selectedComment = c;
          } else if (replyCommentSelected) {
            this.editReply = true;
            this.selectedReply = c;
          } else {
            this.showReplyForm = this.selectedComment !== c || !this.showReplyForm;
            this.selectedComment = c;
          }
        }
      }, {
        key: "replyToReply",
        value: function replyToReply(c, r) {
          this.showReplyToReplyForm = this.selectedReply !== r || !this.showReplyToReplyForm;
          this.selectedComment = c;
          this.selectedReply = r;
        }
      }, {
        key: "removeComment",
        value: function removeComment(c) {
          var _this11 = this;

          this.subscriptions.push(this.dialog.open(_core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogComponent"]).afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
              _this11.videoService.removeVideoComment({
                user_id: _this11.authUser.id,
                id: c.id,
                video_id: c.video_id
              }).subscribe(function (dt) {
                _this11.videoComments = dt;
                _this11.selectedComment = dt.find(function (cm) {
                  var _a;

                  return cm.id === ((_a = _this11.selectedComment) === null || _a === void 0 ? void 0 : _a.id);
                });
              });
            }
          }));
        }
      }, {
        key: "commentAdded",
        value: function commentAdded(e) {
          var _this12 = this;

          this.videoComments = e;
          this.showReplyForm = false;
          this.showReplyToReplyForm = false;
          this.showReplies = true;
          this.selectedComment = e.find(function (c) {
            return c.id === _this12.selectedComment.id;
          });
        }
      }, {
        key: "toggleReplies",
        value: function toggleReplies(c) {
          this.showReplies = !this.showReplies;
          this.selectedComment = c;
        }
      }, {
        key: "likeDislikeComment",
        value: function likeDislikeComment(e) {
          var _this13 = this;

          var params = this.buildParams(e.c, e.liked);
          this.subscriptions.push(this.videoService.updateCommentLikes(params).subscribe(function (dt) {
            _this13.videoComments = dt;
            _this13.showReplies = true;
            _this13.selectedComment = _this13.videoComments.find(function (comm) {
              var _a;

              return comm.id === ((_a = _this13.selectedComment) === null || _a === void 0 ? void 0 : _a.id);
            });
          }));
        }
      }, {
        key: "buildParams",
        value: function buildParams(c, liked) {
          var params = {
            video_id: c.video_id,
            comment_id: c.id,
            user_id: this.authUser.id,
            liked: 0,
            disliked: 0,
            likes: c.likes,
            dislikes: c.dislikes
          };
          var conn = this.checkUserCommentConnection(c); // Avoiding negative values here

          params.likes = Math.max(0, (conn === null || conn === void 0 ? void 0 : conn.liked) ? --c.likes : +c.likes);
          params.dislikes = Math.max(0, (conn === null || conn === void 0 ? void 0 : conn.disliked) ? --c.dislikes : +c.dislikes);

          if (liked) {
            params.liked = +!(conn === null || conn === void 0 ? void 0 : conn.liked);
          } else {
            params.disliked = +!(conn === null || conn === void 0 ? void 0 : conn.disliked);
          }

          return params;
        }
      }, {
        key: "getReactorsCount",
        value: function getReactorsCount(reactors, reaction) {
          return reactors.filter(function (r) {
            return r === null || r === void 0 ? void 0 : r.users_comments[reaction];
          }).length;
        }
      }, {
        key: "checkUserCommentConnection",
        value: function checkUserCommentConnection(comment) {
          var _this14 = this;

          var _a;

          var foundInReactors = (_a = comment.reactors) === null || _a === void 0 ? void 0 : _a.find(function (r) {
            return r.id === _this14.authUser.id;
          });
          return foundInReactors === null || foundInReactors === void 0 ? void 0 : foundInReactors.users_comments;
        }
      }, {
        key: "isCommentShown",
        value: function isCommentShown(c) {
          var _a;

          return c.id !== ((_a = this.selectedComment) === null || _a === void 0 ? void 0 : _a.id) && !this.showReplyForm || this.showReplyForm || !this.editComment;
        }
      }, {
        key: "isReplyShown",
        value: function isReplyShown(c) {
          return this.showReplies && this.selectedComment === c;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return VideoCommentsListComponent;
    }();

    VideoCommentsListComponent.ɵfac = function VideoCommentsListComponent_Factory(t) {
      return new (t || VideoCommentsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_4__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_5__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
    };

    VideoCommentsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoCommentsListComponent,
      selectors: [["app-video-comments-list"]],
      inputs: {
        videoData: "videoData",
        videoComments: "videoComments",
        editComment: "editComment"
      },
      decls: 2,
      vars: 2,
      consts: [[1, "comments-container", 3, "hidden"], [4, "ngFor", "ngForOf"], ["class", "comment d-flex mt-4", 4, "ngIf"], ["class", "edit-comment-form w-100", 3, "editComment", "selectedComment", "videoData", "updated", "cancelled", 4, "ngIf"], [1, "comment", "d-flex", "mt-4"], [1, "left-group"], [1, "w-100", 3, "comment", "videoData", "showReplyForm", "showReplies", "selectedComment", "reply", "likeDislikeComment", "commentAdded", "toggleReplies", "selectComment"], [1, "replies", 3, "hidden"], [1, "right-group"], [3, "comment", "remove", "commentSelected", 4, "ngIf"], ["class", "d-flex reply mt-4", 4, "ngIf"], ["class", "w-100", 3, "editComment", "selectedComment", "isReplyComment", "parentComment", "videoData", "updated", "cancelled", 4, "ngIf"], [1, "d-flex", "reply", "mt-4"], [1, "w-100", 3, "comment", "videoData", "showReplyForm", "showReplies", "selectedComment", "selectedReply", "reply2Reply", "likeDislikeComment", "commentAdded", "selectComment"], [3, "comment", "remove", "commentSelected"], [1, "w-100", 3, "editComment", "selectedComment", "isReplyComment", "parentComment", "videoData", "updated", "cancelled"], [1, "edit-comment-form", "w-100", 3, "editComment", "selectedComment", "videoData", "updated", "cancelled"]],
      template: function VideoCommentsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoCommentsListComponent_ng_container_1_Template, 3, 2, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.videoComments.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videoComments);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_8__["SingleCommentComponent"], _comment_actions_comment_actions_component__WEBPACK_IMPORTED_MODULE_9__["CommentActionsComponent"], _video_comments_form_video_comments_form_component__WEBPACK_IMPORTED_MODULE_10__["VideoCommentsFormComponent"]],
      styles: [".comments-container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.comments-container[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]    > .left-group[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.comments-container[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .replies[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n.comments-container[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%], .comments-container[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.comments-container[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .left-group[_ngcontent-%COMP%], .comments-container[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]   .left-group[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tY29tbWVudHMtbGlzdC9DOlxccHJvamVjdHNcXG1ldGx0dlxcZnJvbnRlbmQvc3JjXFxhcHBcXHZpZGVvc1xccGxheS12aWRlb1xcdmlkZW8tY29tbWVudHMtbGlzdFxcdmlkZW8tY29tbWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tY29tbWVudHMtbGlzdC92aWRlby1jb21tZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7QUNESjtBRElRO0VBQ0ksc0JBQUE7QUNGWjtBREtRO0VBQ0ksaUJBQUE7QUNIWjtBRE9JO0VBQ0ksOEJBQUE7QUNMUjtBRE9RO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNMWiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy9wbGF5LXZpZGVvL3ZpZGVvLWNvbW1lbnRzLWxpc3QvdmlkZW8tY29tbWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4uY29tbWVudHMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gICAgLmNvbW1lbnQge1xyXG4gICAgICAgICYgPiAubGVmdC1ncm91cCB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVwbGllcyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29tbWVudCwgLnJlcGx5IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIC5sZWZ0LWdyb3VwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQtZ3JvdXAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIi5jb21tZW50cy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmNvbW1lbnRzLWNvbnRhaW5lciAuY29tbWVudCA+IC5sZWZ0LWdyb3VwIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb21tZW50cy1jb250YWluZXIgLmNvbW1lbnQgLnJlcGxpZXMge1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cbi5jb21tZW50cy1jb250YWluZXIgLmNvbW1lbnQsIC5jb21tZW50cy1jb250YWluZXIgLnJlcGx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNvbW1lbnRzLWNvbnRhaW5lciAuY29tbWVudCAubGVmdC1ncm91cCwgLmNvbW1lbnRzLWNvbnRhaW5lciAucmVwbHkgLmxlZnQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoCommentsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video-comments-list',
          templateUrl: './video-comments-list.component.html',
          styleUrls: ['./video-comments-list.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]
        }, {
          type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_4__["VideoService"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_5__["GetAuthUserPipe"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }];
      }, {
        videoData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        videoComments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        editComment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/videos/play-video/video-details-form/video-details-form.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/videos/play-video/video-details-form/video-details-form.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: VideoDetailsFormComponent */

  /***/
  function srcAppVideosPlayVideoVideoDetailsFormVideoDetailsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoDetailsFormComponent", function () {
      return VideoDetailsFormComponent;
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


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _core_constants_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/constants/global */
    "./src/app/core/constants/global.ts");
    /* harmony import */


    var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-dropzone-wrapper */
    "./node_modules/ngx-dropzone-wrapper/__ivy_ngcc__/fesm2015/ngx-dropzone-wrapper.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function VideoDetailsFormComponent_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The video name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VideoDetailsFormComponent_mat_error_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not more than 12 characters please ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VideoDetailsFormComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.apiUrl + "uploads/thumbnails/" + ctx_r2.videoData.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function VideoDetailsFormComponent_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoDetailsFormComponent_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.removeThumbnail();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change thumbnail ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VideoDetailsFormComponent_mat_chip_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function VideoDetailsFormComponent_mat_chip_19_Template_mat_chip_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var tag_r11 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.remove(tag_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r11.name, " ");
      }
    }

    function VideoDetailsFormComponent_mat_error_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please provide some tags describing your live video ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var VideoDetailsFormComponent = /*#__PURE__*/function () {
      function VideoDetailsFormComponent(fb, toastr) {
        _classCallCheck(this, VideoDetailsFormComponent);

        this.fb = fb;
        this.toastr = toastr;
        this.formReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isSubmitted = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_3__["API_URL"];
        this.dropzoneConfig = ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_4__["DROPZONE_CONFIG"];
        this.videoDetailsForm = this.fb.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(_core_constants_global__WEBPACK_IMPORTED_MODULE_3__["TAG_CHARACTERS_LIMIT"])]],
          tags: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          thumbnail: [''],
          video_id: []
        });
      }

      _createClass(VideoDetailsFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.videoDetailsForm.patchValue(Object.assign({
            video_id: this.videoData.id
          }, this.videoData));
        }
      }, {
        key: "add",
        value: function add(event) {
          var input = event.input;
          var value = event.value;

          if ((value || '').trim()) {
            if (this.videoData.tags.length === 3) {
              this.toastr.error('We don\'t support more than 3 tags per video');
            } else {
              this.videoData.tags.push({
                name: value.trim()
              });
              this.videoDetailsForm.patchValue({
                tags: this.videoData.tags
              });
            } // this.saveTags();

          } // Reset the input value


          if (input) {
            input.value = '';
          }
        }
      }, {
        key: "remove",
        value: function remove(tag) {
          var index = this.videoData.tags.indexOf(tag);

          if (index >= 0) {
            this.videoData.tags.splice(index, 1);
            this.videoDetailsForm.patchValue({
              tags: this.videoData.tags
            });
          }
        }
      }, {
        key: "removeThumbnail",
        value: function removeThumbnail() {
          this.videoDetailsForm.patchValue({
            thumbnail: ''
          });
          this.videoData.thumbnail = '';
        }
      }, {
        key: "changeThumbnail",
        value: function changeThumbnail(e) {
          this.thumbnailFile = e.target.files[0];
          this.videoDetailsForm.patchValue({
            thumbnail: this.thumbnailFile.name
          });
        }
      }, {
        key: "saveDetails",
        value: function saveDetails() {
          this.videoDetailsForm.patchValue({
            tags: this.videoData.tags
          });
          this.isSubmitted = true;

          if (this.videoDetailsForm.valid) {
            var formData = new FormData();

            for (var field in this.videoDetailsForm.value) {
              if (field !== 'tags') {
                formData.append(field, this.videoDetailsForm.value[field]);
              } else {
                formData.append(field, JSON.stringify(this.videoDetailsForm.value[field]));
              }
            }

            if (this.thumbnailFile) {
              formData.append('video_thumbnail_file', this.thumbnailFile, this.thumbnailFile.name);
            }

            this.formReady.emit(formData);
          }
        }
      }, {
        key: "removeImage",
        value: function removeImage() {}
      }, {
        key: "onAddedFile",
        value: function onAddedFile(e) {
          this.thumbnailFile = e[0];
          this.videoDetailsForm.patchValue({
            thumbnail: this.thumbnailFile.name
          });
        }
      }]);

      return VideoDetailsFormComponent;
    }();

    VideoDetailsFormComponent.ɵfac = function VideoDetailsFormComponent_Factory(t) {
      return new (t || VideoDetailsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    VideoDetailsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoDetailsFormComponent,
      selectors: [["app-video-details-form"]],
      inputs: {
        videoData: "videoData"
      },
      outputs: {
        formReady: "formReady"
      },
      decls: 31,
      vars: 13,
      consts: [["id", "tags-form", 3, "formGroup"], [1, "left-group"], ["id", "video-name"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], [1, "center-group"], ["class", "image-container", 4, "ngIf"], [1, "actions-container"], ["id", "change-thumbnail", 3, "click", 4, "ngIf"], ["id", "video-thumbnail-dropzone", 1, "single", 3, "config", "hidden", "message", "removedFile", "thumbnail"], ["dropzone", ""], ["type", "file", 3, "hidden", "change"], [1, "right-group"], ["id", "video-tags"], [1, "example-chip-list"], ["formControlName", "tags"], ["tagList", ""], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Tags...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["chipsInput", ""], ["align", "end"], [1, "actions"], ["id", "save-tags", 3, "click"], [1, "image-container"], [1, "saved-thumbnail", 3, "src"], ["id", "change-thumbnail", 3, "click"], [3, "removed"], ["matChipRemove", ""]],
      template: function VideoDetailsFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VideoDetailsFormComponent_mat_error_5_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VideoDetailsFormComponent_mat_error_6_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VideoDetailsFormComponent_div_8_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VideoDetailsFormComponent_button_10_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "dropzone", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removedFile", function VideoDetailsFormComponent_Template_dropzone_removedFile_11_listener() {
            return ctx.removeImage();
          })("thumbnail", function VideoDetailsFormComponent_Template_dropzone_thumbnail_11_listener($event) {
            return ctx.onAddedFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VideoDetailsFormComponent_Template_input_change_13_listener($event) {
            return ctx.changeThumbnail($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-chip-list", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, VideoDetailsFormComponent_mat_chip_19_Template, 4, 1, "mat-chip", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function VideoDetailsFormComponent_Template_input_matChipInputTokenEnd_20_listener($event) {
            return ctx.add($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-hint", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Please press 'Enter' after the tag name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, VideoDetailsFormComponent_mat_error_24_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoDetailsFormComponent_Template_button_click_26_listener() {
            return ctx.saveDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "checked");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.videoDetailsForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.videoDetailsForm.get("name").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoDetailsForm.get("name").hasError("maxlength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoData.thumbnail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoData.thumbnail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.dropzoneConfig)("hidden", ctx.videoData.thumbnail)("message", "Click or drag an image to upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videoData.tags);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r5)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoData.tags.length === 0 && ctx.isSubmitted);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_4__["DropzoneComponent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipRemove"]],
      styles: ["#dropzone.single[_ngcontent-%COMP%] {\n  height: 410px !important;\n}\n#dropzone.single[_ngcontent-%COMP%]   .dz-wrapper[_ngcontent-%COMP%] {\n  height: 100% !important;\n  overflow: hidden !important;\n  width: 100%;\n}\n#dropzone.single[_ngcontent-%COMP%]   .dz-wrapper[_ngcontent-%COMP%]   .dz-message[_ngcontent-%COMP%] {\n  height: 400px !important;\n  border: none !important;\n}\n#dropzone.single[_ngcontent-%COMP%]   .dz-wrapper[_ngcontent-%COMP%]   .dz-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 400px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n#dropzone.single[_ngcontent-%COMP%]   .dz-wrapper[_ngcontent-%COMP%]   .dz-progress[_ngcontent-%COMP%] {\n  display: none;\n}\n#dropzone.single[_ngcontent-%COMP%]   .dz-wrapper[_ngcontent-%COMP%]   .dz-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: #F53C6F;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n  text-decoration: none !important;\n  color: #ffffff;\n  z-index: 44444;\n  font-weight: bold;\n  padding: 5px;\n}\n#video-thumbnail-dropzone[_ngcontent-%COMP%]   .dz-message[_ngcontent-%COMP%] {\n  height: 150px;\n  overflow: hidden;\n}\n#video-thumbnail-dropzone[_ngcontent-%COMP%]   .dz-progress[_ngcontent-%COMP%] {\n  display: none;\n}\n#video-thumbnail-dropzone[_ngcontent-%COMP%]   .dz-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n#tags-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n#tags-form[_ngcontent-%COMP%]   .center-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 33%;\n}\n#tags-form[_ngcontent-%COMP%]   .center-group[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n#tags-form[_ngcontent-%COMP%]   .center-group[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .saved-thumbnail[_ngcontent-%COMP%] {\n  width: 150px;\n}\n#tags-form[_ngcontent-%COMP%]   .center-group[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#tags-form[_ngcontent-%COMP%]   .center-group[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]   #change-thumbnail[_ngcontent-%COMP%] {\n  background-color: #18B587;\n  color: #ffffff;\n  margin-left: 10px;\n  display: flex;\n  align-items: center;\n  padding: 8px 24px;\n}\n#tags-form[_ngcontent-%COMP%]   .right-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n#tags-form[_ngcontent-%COMP%]   .right-group[_ngcontent-%COMP%]   #video-tags[_ngcontent-%COMP%] {\n  width: 250px;\n}\n#tags-form[_ngcontent-%COMP%]   .right-group[_ngcontent-%COMP%]   #video-tags[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#tags-form[_ngcontent-%COMP%]   .right-group[_ngcontent-%COMP%]   #save-tags[_ngcontent-%COMP%] {\n  background-color: #18B587;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  border-radius: 0;\n  transition: 0.3s ease-in-out;\n  margin-left: 30px;\n  padding: 10px;\n}\n@media screen and (max-width: 767px) {\n  #tags-form[_ngcontent-%COMP%]   .right-group[_ngcontent-%COMP%]   #save-tags[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tZGV0YWlscy1mb3JtL0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxkcm9wem9uZS1jdXN0b20uc2NzcyIsInNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tZGV0YWlscy1mb3JtL3ZpZGVvLWRldGFpbHMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tZGV0YWlscy1mb3JtL0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3ZpZGVvcy9wbGF5LXZpZGVvL3ZpZGVvLWRldGFpbHMtZm9ybS9DOlxccHJvamVjdHNcXG1ldGx0dlxcZnJvbnRlbmQvc3JjXFxhcHBcXHZpZGVvc1xccGxheS12aWRlb1xcdmlkZW8tZGV0YWlscy1mb3JtXFx2aWRlby1kZXRhaWxzLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx3QkFBQTtBQ0FKO0FER0k7RUFDSSx1QkFBQTtFQUVBLDJCQUFBO0VBQ0EsV0FBQTtBQ0ZSO0FESVE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0FDRlo7QURNUTtFQUNJLHdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0paO0FET1E7RUFDSSxhQUFBO0FDTFo7QURRUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5QkU5Qk47RUYrQk0sbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0VoQ0o7RUZpQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ05aO0FEWUk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNUUjtBRFlJO0VBQ0ksYUFBQTtBQ1ZSO0FEY1E7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ1paO0FFeENBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FGMkNKO0FFekNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBRjJDUjtBRXpDUTtFQUNJLGtCQUFBO0FGMkNaO0FFekNZO0VBQ0ksWUFBQTtBRjJDaEI7QUV2Q1E7RUFDSSxXQUFBO0FGeUNaO0FFdkNZO0VBQ0kseUJEekJIO0VDMEJHLGNEekJSO0VDMEJRLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUZ5Q2hCO0FFakNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FGbUNSO0FFakNRO0VBQ0ksWUFBQTtBRm1DWjtBRWpDWTtFQUNJLFdBQUE7QUZtQ2hCO0FFL0JRO0VBQ0kseUJEbkRDO0VDb0RELGNEbkRKO0VDb0RJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FGaUNaO0FFaENZO0VBVko7SUFXUSxjQUFBO0VGbUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWRlb3MvcGxheS12aWRlby92aWRlby1kZXRhaWxzLWZvcm0vdmlkZW8tZGV0YWlscy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRHJvcCB6b25lIHN0eWxlc1xyXG4jZHJvcHpvbmUuc2luZ2xlIHtcclxuICAgIGhlaWdodDogNDEwcHggIWltcG9ydGFudDtcclxuXHJcblxyXG4gICAgLmR6LXdyYXBwZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5kei1tZXNzYWdlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuZHotaW1hZ2UgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kei1wcm9ncmVzcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZHotcmVtb3ZlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDQ0NDQ0O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI3ZpZGVvLXRodW1ibmFpbC1kcm9wem9uZSB7XHJcbiAgICAuZHotbWVzc2FnZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5kei1wcm9ncmVzcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZHotaW1hZ2Uge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIjZHJvcHpvbmUuc2luZ2xlIHtcbiAgaGVpZ2h0OiA0MTBweCAhaW1wb3J0YW50O1xufVxuI2Ryb3B6b25lLnNpbmdsZSAuZHotd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2Ryb3B6b25lLnNpbmdsZSAuZHotd3JhcHBlciAuZHotbWVzc2FnZSB7XG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4jZHJvcHpvbmUuc2luZ2xlIC5kei13cmFwcGVyIC5kei1pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuI2Ryb3B6b25lLnNpbmdsZSAuZHotd3JhcHBlciAuZHotcHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBub25lO1xufVxuI2Ryb3B6b25lLnNpbmdsZSAuZHotd3JhcHBlciAuZHotcmVtb3ZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjUzQzZGO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiA0NDQ0NDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuI3ZpZGVvLXRodW1ibmFpbC1kcm9wem9uZSAuZHotbWVzc2FnZSB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jdmlkZW8tdGh1bWJuYWlsLWRyb3B6b25lIC5kei1wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jdmlkZW8tdGh1bWJuYWlsLWRyb3B6b25lIC5kei1pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuI3RhZ3MtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuI3RhZ3MtZm9ybSAuY2VudGVyLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDMzJTtcbn1cbiN0YWdzLWZvcm0gLmNlbnRlci1ncm91cCAuaW1hZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI3RhZ3MtZm9ybSAuY2VudGVyLWdyb3VwIC5pbWFnZS1jb250YWluZXIgLnNhdmVkLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbiN0YWdzLWZvcm0gLmNlbnRlci1ncm91cCAuYWN0aW9ucy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbiN0YWdzLWZvcm0gLmNlbnRlci1ncm91cCAuYWN0aW9ucy1jb250YWluZXIgI2NoYW5nZS10aHVtYm5haWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThCNTg3O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAyNHB4O1xufVxuI3RhZ3MtZm9ybSAucmlnaHQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI3RhZ3MtZm9ybSAucmlnaHQtZ3JvdXAgI3ZpZGVvLXRhZ3Mge1xuICB3aWR0aDogMjUwcHg7XG59XG4jdGFncy1mb3JtIC5yaWdodC1ncm91cCAjdmlkZW8tdGFncyBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3RhZ3MtZm9ybSAucmlnaHQtZ3JvdXAgI3NhdmUtdGFncyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOEI1ODc7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgI3RhZ3MtZm9ybSAucmlnaHQtZ3JvdXAgI3NhdmUtdGFncyB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn0iLCIkcmVkOiAjRjUzQzZGO1xyXG4kbWV0bC1ncmVlbjogIzE4QjU4NztcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiRsaWdodF9ncmF5OiAjYjNiM2IzO1xyXG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0IFwiZHJvcHpvbmUtY3VzdG9tXCI7XHJcblxyXG4jdGFncy1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIC5jZW50ZXItZ3JvdXAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG5cclxuICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLnNhdmVkLXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3Rpb25zLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgI2NoYW5nZS10aHVtYm5haWwge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1ldGwtZ3JlZW47XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1ncm91cCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAjdmlkZW8tdGFncyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuXHJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjc2F2ZS10YWdzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1ldGwtZ3JlZW47XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoDetailsFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video-details-form',
          templateUrl: './video-details-form.component.html',
          styleUrls: ['./video-details-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, {
        videoData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['videoData']
        }],
        formReady: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['formReady']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/videos/play-video/video-suggestions/video-suggestions.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/videos/play-video/video-suggestions/video-suggestions.component.ts ***!
    \************************************************************************************/

  /*! exports provided: VideoSuggestionsComponent */

  /***/
  function srcAppVideosPlayVideoVideoSuggestionsVideoSuggestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoSuggestionsComponent", function () {
      return VideoSuggestionsComponent;
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


    var _core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/components/modals/confirmation-dialog/confirmation-dialog.component */
    "./src/app/core/components/modals/confirmation-dialog/confirmation-dialog.component.ts");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @core/services/playlists.service */
    "./src/app/core/services/playlists.service.ts");
    /* harmony import */


    var _core_services_video_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @core/services/video.service */
    "./src/app/core/services/video.service.ts");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");
    /* harmony import */


    var _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../shared/pipes/date-from-now.pipe */
    "./src/app/shared/pipes/date-from-now.pipe.ts");

    function VideoSuggestionsComponent_div_0_ng_container_4_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoSuggestionsComponent_div_0_ng_container_4_div_10_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var video_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r5.removeVideoFromPlaylist(video_r3, ctx_r5.playlistId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function VideoSuggestionsComponent_div_0_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoSuggestionsComponent_div_0_ng_container_4_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var video_r3 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r8.openVideoPage(video_r3, ctx_r8.playlistData == null ? null : ctx_r8.playlistData.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoSuggestionsComponent_div_0_ng_container_4_Template_p_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var video_r3 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r10.openVideoPage(video_r3, ctx_r10.playlistData == null ? null : ctx_r10.playlistData.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, VideoSuggestionsComponent_div_0_ng_container_4_div_10_Template, 3, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var video_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx_r2.videoId === video_r3.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, video_r3.thumbnail), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r3.channel.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.authUser.id === ctx_r2.playlistData.channel.id);
      }
    }

    function VideoSuggestionsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VideoSuggestionsComponent_div_0_ng_container_4_Template, 11, 8, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.playlistData.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.playlistData.videos);
      }
    }

    function VideoSuggestionsComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoSuggestionsComponent_div_1_div_1_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var video_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.openVideoPage(video_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\xB7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "dateFromNow");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var video_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, video_r11.thumbnail), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r11.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r11.channel.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", video_r11.status === "live" ? "17k watching" : video_r11.views + " view" + (video_r11.views === 1 ? "" : "s"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 7, video_r11.created_at));
      }
    }

    function VideoSuggestionsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VideoSuggestionsComponent_div_1_div_1_Template, 17, 9, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ind_r12 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ind_r12 < 5);
      }
    }

    var VideoSuggestionsComponent = /*#__PURE__*/function () {
      function VideoSuggestionsComponent(route, playlistsService, videoService, getAuthUser, router, dialog) {
        _classCallCheck(this, VideoSuggestionsComponent);

        this.route = route;
        this.playlistsService = playlistsService;
        this.videoService = videoService;
        this.getAuthUser = getAuthUser;
        this.router = router;
        this.dialog = dialog;
        this.playlistOpened = false;
        this.videoSuggestions = [];
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["API_URL"];
        this.isProduction = _env__WEBPACK_IMPORTED_MODULE_4__["environment"].production;
        this.authUser = this.getAuthUser.transform();
      }

      _createClass(VideoSuggestionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          var _a, _b;

          this.urlParams = this.route.snapshot.queryParams;
          this.videoId = +((_a = this.urlParams) === null || _a === void 0 ? void 0 : _a.id);
          this.playlistId = (_b = this.urlParams) === null || _b === void 0 ? void 0 : _b.playlist_id;
          this.playlistOpened = !!this.playlistId;

          if (this.playlistOpened) {
            this.playlistsService.getById({
              playlist_id: this.playlistId
            }).subscribe(function (dt) {
              _this15.playlistData = dt;
            });
          }

          this.videoService.get({
            limit: _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_VIDEO_SUGGESTIONS_COUNT"]
          }).subscribe(function (dt) {
            _this15.videoSuggestions = dt.videos;
          });
        }
      }, {
        key: "openVideoPage",
        value: function openVideoPage(video) {
          var _this16 = this;

          var playlistId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var route = '/videos/play';
          var params = {
            id: video.id,
            playlist_id: playlistId
          };
          this.router.navigateByUrl('/', {
            skipLocationChange: true
          }).then(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.router.navigate([route], {
                        queryParams: params
                      });

                    case 2:
                      return _context5.abrupt("return", _context5.sent);

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          });
        }
      }, {
        key: "removeVideoFromPlaylist",
        value: function removeVideoFromPlaylist(video, playlistId) {
          var _this17 = this;

          this.dialog.open(_core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"]).afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
              _this17.playlistsService.removeVideoFromPlaylist({
                playlist_id: playlistId,
                video_id: video.id
              }).subscribe(function (dt) {
                var oldVideoIndex = _this17.playlistData.videos.indexOf(video);

                _this17.playlistData.videos = dt.videos;
                var nextVideo = _this17.playlistData.videos[oldVideoIndex];

                if (nextVideo) {
                  _this17.openVideoPage(nextVideo);
                }
              });
            }
          });
        }
      }]);

      return VideoSuggestionsComponent;
    }();

    VideoSuggestionsComponent.ɵfac = function VideoSuggestionsComponent_Factory(t) {
      return new (t || VideoSuggestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_playlists_service__WEBPACK_IMPORTED_MODULE_6__["PlaylistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_7__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]));
    };

    VideoSuggestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: VideoSuggestionsComponent,
      selectors: [["app-video-suggestions"]],
      decls: 2,
      vars: 2,
      consts: [["class", "playlist-wrap", 4, "ngIf"], ["class", "suggested-videos", 4, "ngFor", "ngForOf"], [1, "playlist-wrap"], [1, "list-wrap"], [4, "ngFor", "ngForOf"], [1, "playlist-video", 3, "click"], [1, "thumbnail-container"], [3, "src"], [1, "details-container"], [1, "video-name", 3, "click"], [1, "main-text-3"], ["class", "remove-btn-container", 3, "click", 4, "ngIf"], [1, "remove-btn-container", 3, "click"], [1, "material-icons"], [1, "suggested-videos"], ["class", "suggested-video", 4, "ngIf"], [1, "suggested-video"], [3, "src", "click"], [1, "video-name"], [1, "channel-sub-name"], [1, "details-row"], [1, "watchers-count"], [1, "dot"], [1, "upload-time"]],
      template: function VideoSuggestionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VideoSuggestionsComponent_div_0_Template, 5, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VideoSuggestionsComponent_div_1_Template, 2, 1, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.playlistOpened && ctx.playlistData && ctx.playlistData.videos.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.videoSuggestions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_11__["GetThumbPathPipe"], _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_12__["DateFromNowPipe"]],
      styles: [".playlist-wrap[_ngcontent-%COMP%] {\n  box-shadow: 0 0 6px #0000001A;\n}\n.playlist-wrap[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.playlist-wrap[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #E3E3E3;\n  border-radius: 10px;\n}\n.playlist-wrap[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #CBCBCB;\n  border-radius: 10px;\n}\n.playlist-wrap[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n.playlist-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background: #F8F8F8;\n  font-size: 16px;\n  color: #545454;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  max-height: 440px;\n  overflow: auto;\n  padding: 0px 12px 16px;\n  margin-top: 16px;\n  margin-top: 16px;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%]   .ads-info[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%]   .playlist-video[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 51px;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%]   .video-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: #18B587;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #545454;\n  transition: 0.3s;\n}\n.suggested-video[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .suggested-video[_ngcontent-%COMP%]   .video-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.selected[_ngcontent-%COMP%] {\n  background-color: #F4F4F4;\n}\n.details-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.details-row[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tc3VnZ2VzdGlvbnMvQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXBwXFx2aWRlb3NcXHBsYXktdmlkZW9cXHZpZGVvLXN1Z2dlc3Rpb25zXFx2aWRlby1zdWdnZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tc3VnZ2VzdGlvbnMvdmlkZW8tc3VnZ2VzdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQ0NKO0FEQ0k7RUFDSSxVQUFBO0FDQ1I7QURFSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREdJO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQ0RSO0FESUk7RUFDSSxnQkFBQTtBQ0ZSO0FES0k7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNIUjtBRE1JO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKUjtBRE9ZO0VBQ0ksU0FBQTtBQ0xoQjtBRFNRO0VBQ0ksZUFBQTtBQ1BaO0FEVVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1JaO0FEV1E7RUFDSSxlQUFBO0FDVFo7QURZUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNWWjtBRGFnQjtFQUNJLGNBQUE7QUNYcEI7QURlWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNiaEI7QURzQkk7RUFDSSxlQUFBO0FDbkJSO0FEdUJBO0VBQ0kseUJBQUE7QUNwQko7QUR3QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNyQko7QUR1Qkk7RUFDSSxhQUFBO0FDckJSIiwiZmlsZSI6InNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tc3VnZ2VzdGlvbnMvdmlkZW8tc3VnZ2VzdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWxpc3Qtd3JhcCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNnB4ICMwMDAwMDAxQTtcclxuXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNFM0UzRTM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQ0JDQkNCO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzU1NTtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3Qtd3JhcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA0NDBweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTJweCAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuXHJcbiAgICAgICAgLmFkcy1pbmZvIHtcclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBsYXlsaXN0LXZpZGVvIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDY4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52aWRlby1uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJlbW92ZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxOEI1ODc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi5zdWdnZXN0ZWQtdmlkZW8ge1xyXG4gICAgaW1nLCAudmlkZW8tbmFtZSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcclxufVxyXG5cclxuXHJcbi5kZXRhaWxzLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuZG90IHtcclxuICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi5wbGF5bGlzdC13cmFwIHtcbiAgYm94LXNoYWRvdzogMCAwIDZweCAjMDAwMDAwMUE7XG59XG4ucGxheWxpc3Qtd3JhcCA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cbi5wbGF5bGlzdC13cmFwIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjRTNFM0UzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnBsYXlsaXN0LXdyYXAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNDQkNCQ0I7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucGxheWxpc3Qtd3JhcCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cbi5wbGF5bGlzdC13cmFwIGgyIHtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG59XG4ucGxheWxpc3Qtd3JhcCAubGlzdC13cmFwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgbWF4LWhlaWdodDogNDQwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAwcHggMTJweCAxNnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLnBsYXlsaXN0LXdyYXAgLmxpc3Qtd3JhcCAuYWRzLWluZm86bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMDtcbn1cbi5wbGF5bGlzdC13cmFwIC5saXN0LXdyYXAgLnBsYXlsaXN0LXZpZGVvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlsaXN0LXdyYXAgLmxpc3Qtd3JhcCBpbWcge1xuICB3aWR0aDogNjhweDtcbiAgaGVpZ2h0OiA1MXB4O1xufVxuLnBsYXlsaXN0LXdyYXAgLmxpc3Qtd3JhcCAudmlkZW8tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wbGF5bGlzdC13cmFwIC5saXN0LXdyYXAgLnJlbW92ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wbGF5bGlzdC13cmFwIC5saXN0LXdyYXAgLnJlbW92ZTpob3ZlciBzcGFuIHtcbiAgY29sb3I6ICMxOEI1ODc7XG59XG4ucGxheWxpc3Qtd3JhcCAubGlzdC13cmFwIC5yZW1vdmUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5zdWdnZXN0ZWQtdmlkZW8gaW1nLCAuc3VnZ2VzdGVkLXZpZGVvIC52aWRlby1uYW1lIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xufVxuXG4uZGV0YWlscy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRldGFpbHMtcm93IC5kb3Qge1xuICBtYXJnaW46IDAgNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoSuggestionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-video-suggestions',
          templateUrl: './video-suggestions.component.html',
          styleUrls: ['./video-suggestions.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_6__["PlaylistsService"]
        }, {
          type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_7__["VideoService"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__["GetAuthUserPipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/videos/show-saved-videos/show-saved-videos.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/videos/show-saved-videos/show-saved-videos.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ShowSavedVideosComponent */

  /***/
  function srcAppVideosShowSavedVideosShowSavedVideosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowSavedVideosComponent", function () {
      return ShowSavedVideosComponent;
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


    var _core_helpers_build_play_video_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/helpers/build-play-video-route */
    "./src/app/core/helpers/build-play-video-route.ts");
    /* harmony import */


    var _core_services_video_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/services/video.service */
    "./src/app/core/services/video.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @core/services/subject.service */
    "./src/app/core/services/subject.service.ts");
    /* harmony import */


    var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @core/services/channels.service */
    "./src/app/core/services/channels.service.ts");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");
    /* harmony import */


    var _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/pipes/date-from-now.pipe */
    "./src/app/shared/pipes/date-from-now.pipe.ts");

    function ShowSavedVideosComponent_div_0_ng_container_1_div_1_li_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowSavedVideosComponent_div_0_ng_container_1_div_1_li_25_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var tag_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r6.getVideosByTag(tag_r5.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r5.name);
      }
    }

    function ShowSavedVideosComponent_div_0_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowSavedVideosComponent_div_0_ng_container_1_div_1_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var video_r3 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r8.openVideoPage(video_r3, ctx_r8.userVideos.username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowSavedVideosComponent_div_0_ng_container_1_div_1_Template_span_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var video_r3 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r10.openChannelPage(video_r3.user.channel, video_r3.user.username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\xB7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\xB7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "dateFromNow");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ShowSavedVideosComponent_div_0_ng_container_1_div_1_li_25_Template, 3, 1, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var video_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 8, video_r3.thumbnail), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r3.duration);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r3.channel.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", video_r3.status === "live" ? "17k watching" : video_r3.views + " view" + (video_r3.views === 1 ? "" : "s"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 10, video_r3.created_at));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", video_r3.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", video_r3 == null ? null : video_r3.tags);
      }
    }

    function ShowSavedVideosComponent_div_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowSavedVideosComponent_div_0_ng_container_1_div_1_Template, 26, 12, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.userVideos.users_vids);
      }
    }

    function ShowSavedVideosComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowSavedVideosComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.search);
      }
    }

    var ShowSavedVideosComponent = /*#__PURE__*/function () {
      function ShowSavedVideosComponent(videoService, router, subject, channelsService, route, getAuthUser) {
        _classCallCheck(this, ShowSavedVideosComponent);

        this.videoService = videoService;
        this.router = router;
        this.subject = subject;
        this.channelsService = channelsService;
        this.route = route;
        this.getAuthUser = getAuthUser;
        this.channelsVideos = [];
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["API_URL"];
      }

      _createClass(ShowSavedVideosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.authUser = this.getAuthUser.transform();
          this.videoService.getUserSavedVideos({
            user_id: this.authUser.id
          }).subscribe(function (dt) {
            _this18.userVideos = dt;
          });
        }
      }, {
        key: "openVideoPage",
        value: function openVideoPage(video, username) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var r;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    r = Object(_core_helpers_build_play_video_route__WEBPACK_IMPORTED_MODULE_3__["buildPlayVideoRoute"])(video, username);
                    _context6.next = 3;
                    return this.router.navigate([r.route], {
                      queryParams: r.params
                    });

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
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
        key: "getVideosByTag",
        value: function getVideosByTag(name) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.router.navigate(['videos'], {
                      queryParams: {
                        tag: name
                      }
                    });

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return ShowSavedVideosComponent;
    }();

    ShowSavedVideosComponent.ɵfac = function ShowSavedVideosComponent_Factory(t) {
      return new (t || ShowSavedVideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_4__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_7__["ChannelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__["GetAuthUserPipe"]));
    };

    ShowSavedVideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ShowSavedVideosComponent,
      selectors: [["app-show-saved-videos"]],
      decls: 1,
      vars: 1,
      consts: [["id", "videos-list", 4, "ngIf"], ["id", "videos-list"], [4, "ngIf"], ["class", "video-container flex-wrap", 4, "ngFor", "ngForOf"], [1, "video-container", "flex-wrap"], [1, "thumbnail"], [3, "src", "click"], [1, "duration"], [1, "details"], [1, "title"], [1, "shortened-details"], [1, "channel-name", 3, "click"], [1, "dot"], [1, "watchers-count"], [1, "upload-time"], [1, "shortened-description"], [1, "tags"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]],
      template: function ShowSavedVideosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ShowSavedVideosComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userVideos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_10__["GetThumbPathPipe"], _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_11__["DateFromNowPipe"]],
      styles: [".filter-toggle-btn[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  background-color: unset;\n  display: flex;\n  align-items: center;\n  font-family: \"Muli-Bold\";\n  padding: 10px;\n}\n.filter-toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3Nob3ctc2F2ZWQtdmlkZW9zL0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFwcFxcdmlkZW9zXFxzaG93LXZpZGVvc1xcc2hvdy12aWRlb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvcy9zaG93LXNhdmVkLXZpZGVvcy9zaG93LXNhdmVkLXZpZGVvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUNGSjtBRElJO0VBQ0ksaUJBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy9zaG93LXNhdmVkLXZpZGVvcy9zaG93LXNhdmVkLXZpZGVvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG4uZmlsdGVyLXRvZ2dsZS1idG4ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLmZpbHRlci10b2dnbGUtYnRuIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmZpbHRlci10b2dnbGUtYnRuIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowSavedVideosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-show-saved-videos',
          templateUrl: './show-saved-videos.component.html',
          styleUrls: ['./show-saved-videos.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_4__["VideoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]
        }, {
          type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_7__["ChannelsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__["GetAuthUserPipe"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/videos/show-videos/show-playlists-list/show-playlists-list.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/videos/show-videos/show-playlists-list/show-playlists-list.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ShowPlaylistsListComponent */

  /***/
  function srcAppVideosShowVideosShowPlaylistsListShowPlaylistsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowPlaylistsListComponent", function () {
      return ShowPlaylistsListComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");

    function ShowPlaylistsListComponent_div_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowPlaylistsListComponent_div_0_ng_container_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var playlist_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r3.openPlaylistPage(playlist_r1, playlist_r1.videos[0].id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "playlist_add_check");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var playlist_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](playlist_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](playlist_r1.videos.length + (playlist_r1.videos.length === 1 ? " video" : " videos"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 3, playlist_r1.thumbnail), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ShowPlaylistsListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowPlaylistsListComponent_div_0_ng_container_1_Template, 14, 5, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var playlist_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", playlist_r1.videos.length > 0);
      }
    }

    var ShowPlaylistsListComponent = /*#__PURE__*/function () {
      function ShowPlaylistsListComponent(router) {
        _classCallCheck(this, ShowPlaylistsListComponent);

        this.router = router;
      }

      _createClass(ShowPlaylistsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openPlaylistPage",
        value: function openPlaylistPage(playlist, firstVideoId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var route, params;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    route = 'videos/play';
                    params = {
                      id: firstVideoId,
                      playlist_id: playlist.id
                    };
                    _context8.next = 4;
                    return this.router.navigate([route], {
                      queryParams: params
                    });

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return ShowPlaylistsListComponent;
    }();

    ShowPlaylistsListComponent.ɵfac = function ShowPlaylistsListComponent_Factory(t) {
      return new (t || ShowPlaylistsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ShowPlaylistsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ShowPlaylistsListComponent,
      selectors: [["app-show-playlists-list"]],
      inputs: {
        items: "items",
        authUser: "authUser"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "playlist-container", 4, "ngFor", "ngForOf"], [1, "playlist-container"], [4, "ngIf"], [1, "thumbnail-container", 3, "click"], [1, "thumbnail"], [1, "short-details"], [1, "name"], [1, "video-count"], [3, "src"], [1, "fake-bg", "thumbnail"], [1, "details"]],
      template: function ShowPlaylistsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ShowPlaylistsListComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items.playlists);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_5__["GetThumbPathPipe"]],
      styles: [".playlist-container[_ngcontent-%COMP%] {\n  width: 432px;\n  display: flex;\n  margin-bottom: 30px;\n}\n.playlist-container[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.playlist-container[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  position: relative;\n}\n.playlist-container[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .short-details[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: white;\n}\n.playlist-container[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .short-details[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.playlist-container[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 249px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer;\n}\n@media screen and (max-width: 991px) {\n  .playlist-container[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 432px !important;\n    width: 100% !important;\n  }\n}\n.playlist-container[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .fake-bg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  background: rgba(1, 1, 1, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3Nob3ctdmlkZW9zL3Nob3ctcGxheWxpc3RzLWxpc3QvQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvdmlkZW9zL3Nob3ctdmlkZW9zL3Nob3ctcGxheWxpc3RzLWxpc3Qvc2hvdy1wbGF5bGlzdHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDNUlSO0FEOElRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDNUlaO0FEOElZO0VBQ0ksa0JBQUE7QUM1SWhCO0FEOElnQjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDNUlwQjtBRDhJb0I7RUFDSSxpQkFBQTtBQzVJeEI7QURnSmdCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQzlJcEI7QUQrSW9CO0VBTEo7SUFNUSwyQkFBQTtJQUNBLHNCQUFBO0VDNUl0QjtBQUNGO0FEZ0pZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSw4QkFBQTtBQzlJaEIiLCJmaWxlIjoic3JjL2FwcC92aWRlb3Mvc2hvdy12aWRlb3Mvc2hvdy1wbGF5bGlzdHMtbGlzdC9zaG93LXBsYXlsaXN0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbkBtaXhpbiByZWRCdXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIHJlZ3VsYXJCdXR0b24ge1xyXG4gICAgd2lkdGg6IDExOXB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1MaWdodFwiO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbWV0bC1ncmVlbjtcclxufVxyXG5cclxuXHJcbi8vIFBsYXlsaXN0IHZpZGVvcyBtb2RhbFxyXG5AbWl4aW4gdmlkZW9JdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE4QjU4NztcclxuICAgIH1cclxuXHJcbiAgICAmLmFkZGVkIHtcclxuXHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIHNwYW4uYWRkZWQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0yNHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJBZGRlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNTNjNmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyNHB4IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNob3J0ZW5lZC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLnRhZ3Mge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFnSXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWl4aW4gaW5wdXRXcmFwIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgICAgICAgJi5zZWFyY2gge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODE4MTgxMjE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFnSXRlbSB7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgcGFkZGluZzogMnB4IDExcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0VFRUVFRTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBjb2xvcjogIzU0NTQ1NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vLyBQbGF5bGlzdCBpdGVtIGZvciAnVmlkZW9zJyBzZWN0aW9uXHJcbkBtaXhpbiBwbGF5bGlzdEl0ZW0ge1xyXG5cclxuICAgIC5wbGF5bGlzdC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA0MzJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAgIC50aHVtYm5haWwtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAuc2hvcnQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDlweDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MzJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZha2UtYmcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDEsIDEsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzdG9ja3NJdGVtIHtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDE3OXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIHBhZGRpbmc6IDI0cHggOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuXHJcblxyXG4gICAgJi5zdG9jay1pdGVtLWdyZWVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RvY2staXRlbS1yZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRyZWQgMCAwIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stZm9sbG93LCAuc3RvY2stdW5mb2xsb3cge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAudW5mb2xsb3ctYnRuIHtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stbmFtZSwgLnN0b2NrLXByaWNlLWNoYW5nZSwgLnN0b2NrLXByaWNlLWNoYW5nZS1wZXJjZW50IHtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNdWxpLUxpZ2h0JztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stcHJpY2Uge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011bGktQm9sZCc7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kb2xsYXItc2lnbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC01cHg7XHJcbiAgICAgICAgdG9wOiAtNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011bGktQm9sZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0b2NrLXByaWNlLWRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCIucGxheWxpc3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnBsYXlsaXN0LWNvbnRhaW5lciAudGh1bWJuYWlsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlsaXN0LWNvbnRhaW5lciAudGh1bWJuYWlsLWNvbnRhaW5lciAudGh1bWJuYWlsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBsYXlsaXN0LWNvbnRhaW5lciAudGh1bWJuYWlsLWNvbnRhaW5lciAudGh1bWJuYWlsIC5zaG9ydC1kZXRhaWxzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wbGF5bGlzdC1jb250YWluZXIgLnRodW1ibmFpbC1jb250YWluZXIgLnRodW1ibmFpbCAuc2hvcnQtZGV0YWlscyAubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBsYXlsaXN0LWNvbnRhaW5lciAudGh1bWJuYWlsLWNvbnRhaW5lciAudGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAyNDlweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5wbGF5bGlzdC1jb250YWluZXIgLnRodW1ibmFpbC1jb250YWluZXIgLnRodW1ibmFpbCBpbWcge1xuICAgIG1heC13aWR0aDogNDMycHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG4ucGxheWxpc3QtY29udGFpbmVyIC50aHVtYm5haWwtY29udGFpbmVyIC5mYWtlLWJnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMSwgMSwgMSwgMC4yKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowPlaylistsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-show-playlists-list',
          templateUrl: './show-playlists-list.component.html',
          styleUrls: ['./show-playlists-list.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['items']
        }],
        authUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['authUser']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/videos/show-videos/show-regular-list/show-regular-list.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/videos/show-videos/show-regular-list/show-regular-list.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ShowRegularListComponent */

  /***/
  function srcAppVideosShowVideosShowRegularListShowRegularListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowRegularListComponent", function () {
      return ShowRegularListComponent;
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


    var _core_helpers_build_play_video_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/helpers/build-play-video-route */
    "./src/app/core/helpers/build-play-video-route.ts");
    /* harmony import */


    var _core_helpers_track_by_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/helpers/track-by-element */
    "./src/app/core/helpers/track-by-element.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");
    /* harmony import */


    var _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/pipes/date-from-now.pipe */
    "./src/app/shared/pipes/date-from-now.pipe.ts");

    function ShowRegularListComponent_div_1_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Live now");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ShowRegularListComponent_div_1_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "turned_in");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Saved");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ShowRegularListComponent_div_1_li_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowRegularListComponent_div_1_li_27_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var tag_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r7.getVideosByTag(tag_r6.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r6.name);
      }
    }

    function ShowRegularListComponent_div_1_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ShowRegularListComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowRegularListComponent_div_1_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var video_r1 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.openVideoPage(video_r1, video_r1.user.username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ShowRegularListComponent_div_1_span_4_Template, 2, 0, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowRegularListComponent_div_1_Template_span_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var video_r1 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.openChannelPage(video_r1.user.channel, video_r1.user.username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\xB7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\xB7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "dateFromNow");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ShowRegularListComponent_div_1_div_24_Template, 5, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ShowRegularListComponent_div_1_li_27_Template, 3, 1, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ShowRegularListComponent_div_1_div_28_Template, 3, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var video_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 11, video_r1.thumbnail), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", video_r1.status === "live");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r1.duration);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", video_r1.user.channel.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", video_r1.status === "live" ? "17k watching" : video_r1.views + " view" + (video_r1.views === 1 ? "" : "s"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 13, video_r1.created_at));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", video_r1.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.checkIfSavedByCurrentUser(video_r1));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", video_r1 == null ? null : video_r1.tags);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.checkIfNewVideo(video_r1));
      }
    }

    var ShowRegularListComponent = /*#__PURE__*/function () {
      function ShowRegularListComponent(router) {
        _classCallCheck(this, ShowRegularListComponent);

        this.router = router;
        this.trackByElement = _core_helpers_track_by_element__WEBPACK_IMPORTED_MODULE_3__["default"];
      }

      _createClass(ShowRegularListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openVideoPage",
        value: function openVideoPage(video, username) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var r;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    r = Object(_core_helpers_build_play_video_route__WEBPACK_IMPORTED_MODULE_2__["buildPlayVideoRoute"])(video, username);
                    _context9.next = 3;
                    return this.router.navigate([r.route], {
                      queryParams: r.params
                    });

                  case 3:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "openChannelPage",
        value: function openChannelPage(channel, username) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.router.navigate(['channels/show'], {
                      queryParams: {
                        username: username
                      }
                    });

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "checkIfSavedByCurrentUser",
        value: function checkIfSavedByCurrentUser(video) {
          var _this19 = this;

          return video.users_vids.find(function (v) {
            var _a;

            return v.username === ((_a = _this19.authUser) === null || _a === void 0 ? void 0 : _a.username) && v.users_videos.saved;
          });
        }
      }, {
        key: "checkIfNewVideo",
        value: function checkIfNewVideo(video) {
          var duration = moment__WEBPACK_IMPORTED_MODULE_4__["duration"](moment__WEBPACK_IMPORTED_MODULE_4__().diff(video.created_at));
          return Math.floor(duration.asDays()) < 7;
        }
      }, {
        key: "getVideosByTag",
        value: function getVideosByTag(name) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.router.navigate(['videos'], {
                      queryParams: {
                        tag: name
                      }
                    });

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return ShowRegularListComponent;
    }();

    ShowRegularListComponent.ɵfac = function ShowRegularListComponent_Factory(t) {
      return new (t || ShowRegularListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    ShowRegularListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ShowRegularListComponent,
      selectors: [["app-show-regular-list"]],
      inputs: {
        items: "items",
        authUser: "authUser"
      },
      decls: 2,
      vars: 2,
      consts: [["id", "regular-video-list-container"], ["class", "video-container flex-wrap", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "video-container", "flex-wrap"], [1, "thumbnail"], [3, "src", "click"], ["class", "live-now", 4, "ngIf"], [1, "duration"], [1, "details"], [1, "title"], [1, "shortened-details"], [1, "channel-name", 3, "click"], [1, "dot"], [1, "watchers-count"], [1, "upload-time"], [1, "shortened-description"], ["class", "saved-video", 4, "ngIf"], [1, "tags"], [3, "click", 4, "ngFor", "ngForOf"], ["class", "is-new-video", 4, "ngIf"], [1, "live-now"], [1, "saved-video"], [3, "click"], [1, "is-new-video"], [1, "new"]],
      template: function ShowRegularListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowRegularListComponent_div_1_Template, 29, 15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items.videos)("ngForTrackBy", ctx.trackByElement);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_8__["GetThumbPathPipe"], _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_9__["DateFromNowPipe"]],
      styles: ["#regular-video-list-container[_ngcontent-%COMP%]   .shortened-description[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 4;\n}\n#regular-video-list-container[_ngcontent-%COMP%]   .is-new-video[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%] {\n  background-color: #18B587;\n  color: white;\n  padding: 2px;\n}\n@media (max-width: 992px) {\n  #regular-video-list-container[_ngcontent-%COMP%]   .is-new-video[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n#regular-video-list-container[_ngcontent-%COMP%]   .channel-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.playlist-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 30px;\n}\n.playlist-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  position: relative;\n}\n.playlist-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  max-width: 310px;\n}\n@media screen and (max-width: 1022px) {\n  .playlist-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .playlist-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    max-width: 432px;\n    width: 100%;\n  }\n  .playlist-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    padding-left: 0;\n    margin-top: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3Nob3ctdmlkZW9zL3Nob3ctcmVndWxhci1saXN0L0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFwcFxcdmlkZW9zXFxzaG93LXZpZGVvc1xcc2hvdy1yZWd1bGFyLWxpc3RcXHNob3ctcmVndWxhci1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlb3Mvc2hvdy12aWRlb3Mvc2hvdy1yZWd1bGFyLWxpc3Qvc2hvdy1yZWd1bGFyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDSSxxQkFBQTtBQ0hSO0FEUVE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTlo7QURVUTtFQVRKO0lBVVEsbUJBQUE7RUNQVjtBQUNGO0FEVUk7RUFDSSxlQUFBO0FDUlI7QURZQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ1RKO0FEV0k7RUFDSSxrQkFBQTtBQ1RSO0FEWUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDVlI7QURhSTtFQWJKO0lBY1Esc0JBQUE7RUNWTjtFRFdNO0lBQ0ksZ0JBQUE7SUFDQSxXQUFBO0VDVFY7RURXTTtJQUNJLGVBQUE7SUFDQSxlQUFBO0VDVFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy9zaG93LXZpZGVvcy9zaG93LXJlZ3VsYXItbGlzdC9zaG93LXJlZ3VsYXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XHJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4jcmVndWxhci12aWRlby1saXN0LWNvbnRhaW5lciB7XHJcbiAgICAuc2hvcnRlbmVkLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmlzLW5ldy12aWRlbyB7XHJcblxyXG4gICAgICAgIC5uZXcge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThCNTg3O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYW5uZWwtbmFtZSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGxheWxpc3QtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMzEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyMnB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MzJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIiNyZWd1bGFyLXZpZGVvLWxpc3QtY29udGFpbmVyIC5zaG9ydGVuZWQtZGVzY3JpcHRpb24ge1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XG59XG4jcmVndWxhci12aWRlby1saXN0LWNvbnRhaW5lciAuaXMtbmV3LXZpZGVvIC5uZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThCNTg3O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAjcmVndWxhci12aWRlby1saXN0LWNvbnRhaW5lciAuaXMtbmV3LXZpZGVvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG4jcmVndWxhci12aWRlby1saXN0LWNvbnRhaW5lciAuY2hhbm5lbC1uYW1lIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGxheWxpc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5wbGF5bGlzdC1jb250YWluZXIgLnRodW1ibmFpbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wbGF5bGlzdC1jb250YWluZXIgLmRldGFpbHMge1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIG1heC13aWR0aDogMzEwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIycHgpIHtcbiAgLnBsYXlsaXN0LWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucGxheWxpc3QtY29udGFpbmVyIC50aHVtYm5haWwge1xuICAgIG1heC13aWR0aDogNDMycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnBsYXlsaXN0LWNvbnRhaW5lciAuZGV0YWlscyB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowRegularListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-show-regular-list',
          templateUrl: './show-regular-list.component.html',
          styleUrls: ['./show-regular-list.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['items']
        }],
        authUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['authUser']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/videos/show-videos/show-search-results/show-search-results.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/videos/show-videos/show-search-results/show-search-results.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ShowSearchResultsComponent */

  /***/
  function srcAppVideosShowVideosShowSearchResultsShowSearchResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowSearchResultsComponent", function () {
      return ShowSearchResultsComponent;
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


    var _core_helpers_build_play_video_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/helpers/build-play-video-route */
    "./src/app/core/helpers/build-play-video-route.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/services/subject.service */
    "./src/app/core/services/subject.service.ts");
    /* harmony import */


    var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @core/services/channels.service */
    "./src/app/core/services/channels.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");
    /* harmony import */


    var _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/pipes/date-from-now.pipe */
    "./src/app/shared/pipes/date-from-now.pipe.ts");

    function ShowSearchResultsComponent_ng_container_1_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowSearchResultsComponent_ng_container_1_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.subscribeToChannel(channel_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("subscribed", ctx_r2.checkIfSubscribed(channel_r1));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.checkIfSubscribed(channel_r1) ? "Subscribed" : "Subscribe", " ");
      }
    }

    function ShowSearchResultsComponent_ng_container_1_div_14_li_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r10.name);
      }
    }

    function ShowSearchResultsComponent_ng_container_1_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowSearchResultsComponent_ng_container_1_div_14_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var video_r8 = ctx.$implicit;

          var channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.openVideoPage(video_r8, channel_r1.user.username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\xB7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\xB7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "dateFromNow");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ShowSearchResultsComponent_ng_container_1_div_14_li_25_Template, 3, 1, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var video_r8 = ctx.$implicit;

        var channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 8, video_r8.thumbnail), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r8.duration);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](video_r8.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](channel_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", video_r8.status === "live" ? "17k watching" : video_r8.views + " view" + (video_r8.views === 1 ? "" : "s"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 10, video_r8.created_at));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", video_r8.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", video_r8 == null ? null : video_r8.tags);
      }
    }

    function ShowSearchResultsComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowSearchResultsComponent_ng_container_1_Template_img_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var channel_r1 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r15.openChannelPage(channel_r1, channel_r1.user == null ? null : channel_r1.user.username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowSearchResultsComponent_ng_container_1_Template_p_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var channel_r1 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.openChannelPage(channel_r1, channel_r1 == null ? null : channel_r1.user == null ? null : channel_r1.user.username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ShowSearchResultsComponent_ng_container_1_button_13_Template, 2, 3, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ShowSearchResultsComponent_ng_container_1_div_14_Template, 26, 12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var channel_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 6, channel_r1.avatar, "avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](channel_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](channel_r1.videos.length + (channel_r1.videos.length === 1 ? " video" : " videos"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getDesc(channel_r1.description));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (channel_r1 == null ? null : channel_r1.user == null ? null : channel_r1.user.username) !== (ctx_r0.authUser == null ? null : ctx_r0.authUser.username));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", channel_r1.videos);
      }
    }

    var ShowSearchResultsComponent = /*#__PURE__*/function () {
      function ShowSearchResultsComponent(router, subject, channelsService) {
        _classCallCheck(this, ShowSearchResultsComponent);

        this.router = router;
        this.subject = subject;
        this.channelsService = channelsService;
      }

      _createClass(ShowSearchResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openChannelPage",
        value: function openChannelPage(channel, username) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.router.navigate(['channels/show'], {
                      queryParams: {
                        username: username
                      }
                    });

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "openVideoPage",
        value: function openVideoPage(video, username) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var r;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    r = Object(_core_helpers_build_play_video_route__WEBPACK_IMPORTED_MODULE_2__["buildPlayVideoRoute"])(video, username);
                    _context13.next = 3;
                    return this.router.navigate([r.route], {
                      queryParams: r.params
                    });

                  case 3:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "subscribeToChannel",
        value: function subscribeToChannel(channel) {
          var _this20 = this;

          this.channelsService.subscribeToChannel({
            user_id: this.authUser.id,
            channel_id: channel.id
          }).subscribe(function (dt) {
            _this20.channelsService.getUserChannelSubscriptions({
              user_id: _this20.authUser.id
            }).subscribe(function (d) {
              _this20.subject.setUserSubscriptions(d);

              if (_this20.checkIfSubscribed(channel)) {
                channel.subscribers = channel.subscribers.filter(function (s) {
                  var _a;

                  return s.id !== ((_a = _this20.authUser) === null || _a === void 0 ? void 0 : _a.id);
                });
              } else {
                channel.subscribers.push(_this20.authUser);
              } // console.log(channel.subscribers)
              // channel.subscribers = channel.subscribers.filter(s => s.id !== this.authUser?.id).concat([this.authUser]);
              // console.log(channel.subscribers)
              // this.searchChannelsVideos({search: this.search, filters: this.filters});

            });
          });
        }
      }, {
        key: "checkIfSubscribed",
        value: function checkIfSubscribed(channel) {
          var _this21 = this;

          return channel.subscribers.find(function (s) {
            var _a;

            return s.id === ((_a = _this21.authUser) === null || _a === void 0 ? void 0 : _a.id);
          });
        }
      }, {
        key: "getDesc",
        value: function getDesc(d) {
          return d === null || d === void 0 ? void 0 : d.replace(/<br\s*[\/]?>/gi, '\n');
        }
      }]);

      return ShowSearchResultsComponent;
    }();

    ShowSearchResultsComponent.ɵfac = function ShowSearchResultsComponent_Factory(t) {
      return new (t || ShowSearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__["ChannelsService"]));
    };

    ShowSearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ShowSearchResultsComponent,
      selectors: [["app-show-search-results"]],
      inputs: {
        channelsVideos: "channelsVideos",
        authUser: "authUser"
      },
      decls: 2,
      vars: 1,
      consts: [["id", "search-results-container"], [4, "ngFor", "ngForOf"], [1, "channel-item"], [1, "thumbnail"], [1, "avatar", 3, "src", "click"], [1, "info"], [1, "name", 3, "click"], [1, "shortened-details"], [1, "video-count"], ["class", "btn subscribe-to-channel-btn", 3, "subscribed", "click", 4, "ngIf"], ["class", "video-container", 4, "ngFor", "ngForOf"], [1, "btn", "subscribe-to-channel-btn", 3, "click"], [1, "video-container"], [3, "src", "click"], [1, "duration"], [1, "details"], [1, "title"], [1, "channel-name"], [1, "dot"], [1, "watchers-count"], [1, "upload-time"], [1, "shortened-description"], [1, "tags"]],
      template: function ShowSearchResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowSearchResultsComponent_ng_container_1_Template, 15, 9, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.channelsVideos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_7__["GetThumbPathPipe"], _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_8__["DateFromNowPipe"]],
      styles: ["#search-results-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 432px;\n  height: 243px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#search-results-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 432px;\n}\n#search-results-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  max-width: 310px;\n}\n@media screen and (max-width: 1022px) {\n  #search-results-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  #search-results-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    max-width: 432px;\n    width: 100%;\n  }\n  #search-results-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    padding-left: 0;\n    margin-top: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3Nob3ctdmlkZW9zL3Nob3ctc2VhcmNoLXJlc3VsdHMvQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXBwXFx2aWRlb3NcXHNob3ctdmlkZW9zXFxzaG93LXNlYXJjaC1yZXN1bHRzXFxzaG93LXNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlb3Mvc2hvdy12aWRlb3Mvc2hvdy1zZWFyY2gtcmVzdWx0cy9zaG93LXNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSlI7QURPUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0xaO0FEU0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDUFI7QURVSTtFQXJCSjtJQXNCUSxzQkFBQTtFQ1BOO0VEUU07SUFDSSxnQkFBQTtJQUNBLFdBQUE7RUNOVjtFRFFNO0lBQ0ksZUFBQTtJQUNBLGVBQUE7RUNOVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlkZW9zL3Nob3ctdmlkZW9zL3Nob3ctc2VhcmNoLXJlc3VsdHMvc2hvdy1zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ21peGlucyc7XHJcbi8vQGltcG9ydCBcIi4uLy4uLy4uL2NoYW5uZWxzL3Nob3ctc3Vic2NyaXB0aW9ucy9zaG93LXN1YnNjcmlwdGlvbnMuY29tcG9uZW50XCI7XHJcblxyXG4jc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyIHtcclxuICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNDMycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNDNweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MzJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjJweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDMycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIjc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyIC50aHVtYm5haWwge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MzJweDtcbiAgaGVpZ2h0OiAyNDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyIC50aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDMycHg7XG59XG4jc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyIC5pbmZvIHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBtYXgtd2lkdGg6IDMxMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyMnB4KSB7XG4gICNzZWFyY2gtcmVzdWx0cy1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgI3NlYXJjaC1yZXN1bHRzLWNvbnRhaW5lciAudGh1bWJuYWlsIHtcbiAgICBtYXgtd2lkdGg6IDQzMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNzZWFyY2gtcmVzdWx0cy1jb250YWluZXIgLmluZm8ge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowSearchResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-show-search-results',
          templateUrl: './show-search-results.component.html',
          styleUrls: ['./show-search-results.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]
        }, {
          type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__["ChannelsService"]
        }];
      }, {
        channelsVideos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['channelsVideos']
        }],
        authUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['authUser']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/videos/show-videos/show-videos.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/videos/show-videos/show-videos.component.ts ***!
    \*************************************************************/

  /*! exports provided: ShowVideosComponent */

  /***/
  function srcAppVideosShowVideosShowVideosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowVideosComponent", function () {
      return ShowVideosComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/services/subject.service */
    "./src/app/core/services/subject.service.ts");
    /* harmony import */


    var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @core/services/channels.service */
    "./src/app/core/services/channels.service.ts");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @shared/pipes/filter-out-falsy-values-from-object.pipe */
    "./src/app/shared/pipes/filter-out-falsy-values-from-object.pipe.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @shared/components/video-filters/video-filters.component */
    "./src/app/shared/components/video-filters/video-filters.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _show_regular_list_show_regular_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./show-regular-list/show-regular-list.component */
    "./src/app/videos/show-videos/show-regular-list/show-regular-list.component.ts");
    /* harmony import */


    var _show_playlists_list_show_playlists_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./show-playlists-list/show-playlists-list.component */
    "./src/app/videos/show-videos/show-playlists-list/show-playlists-list.component.ts");
    /* harmony import */


    var _show_search_results_show_search_results_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./show-search-results/show-search-results.component */
    "./src/app/videos/show-videos/show-search-results/show-search-results.component.ts");

    function ShowVideosComponent_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowVideosComponent_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.showFilters = !ctx_r6.showFilters;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "tune");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShowVideosComponent_app_video_filters_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-video-filters", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function ShowVideosComponent_app_video_filters_2_Template_app_video_filters_filter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.getFilteredList($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShowVideosComponent_mat_spinner_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 20);
      }
    }

    function ShowVideosComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-show-regular-list", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-show-playlists-list", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r3.items)("authUser", ctx_r3.authUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r3.items)("authUser", ctx_r3.authUser);
      }
    }

    function ShowVideosComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-show-search-results", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("channelsVideos", ctx_r4.channelsVideos)("authUser", ctx_r4.authUser);
      }
    }

    function ShowVideosComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No results found");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ShowVideosComponent = /*#__PURE__*/function () {
      function ShowVideosComponent(videoService, router, subject, channelsService, route, getAuthUser, getExactParams) {
        var _this22 = this;

        _classCallCheck(this, ShowVideosComponent);

        this.videoService = videoService;
        this.router = router;
        this.subject = subject;
        this.channelsService = channelsService;
        this.route = route;
        this.getAuthUser = getAuthUser;
        this.getExactParams = getExactParams;
        this.items = {
          videos: [],
          playlists: []
        };
        this.channelsVideos = [];
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.showTrending = false;
        this.showFilters = false;
        this.filters = {};
        this.filterStatus = 'idle';
        this.subscriptions = [];
        this.loadingVideos = false;
        this.authUser = this.getAuthUser.transform();
        this.subscriptions.push(this.route.queryParams.subscribe(function (d) {
          var _a, _b;

          _this22.search = (_a = _this22.route.snapshot.queryParams) === null || _a === void 0 ? void 0 : _a.search;
          _this22.showTrending = _this22.router.url.includes('trending');
          _this22.selectedTag = (_b = _this22.route.snapshot.queryParams) === null || _b === void 0 ? void 0 : _b.tag;

          if (_this22.search) {
            _this22.searchChannelsVideos({
              search: _this22.search,
              filters: _this22.filters
            });
          } else {
            _this22.getVideosList({
              search: _this22.search,
              filters: _this22.filters,
              tag: _this22.selectedTag
            });
          }
        }));
      }

      _createClass(ShowVideosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getFilteredList",
        value: function getFilteredList() {
          var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.filters = filters;
          this.filterStatus = 'applied';

          if (this.search) {
            this.searchChannelsVideos({
              search: this.search,
              filters: this.filters
            });
          } else {
            this.getVideosList({
              filters: this.filters
            });
          }
        }
      }, {
        key: "getVideosList",
        value: function getVideosList(params) {
          var _this23 = this;

          params = this.getExactParams.transform(params);
          this.videoService.get(Object.assign({
            withPlaylists: !this.showTrending ? 1 : 0,
            trending: this.showTrending ? 1 : 0
          }, params)).subscribe(function (dt) {
            _this23.items = dt;
          });
        }
      }, {
        key: "searchChannelsVideos",
        value: function searchChannelsVideos(params) {
          var _this24 = this;

          var _a;

          params = this.getExactParams.transform(params);
          this.loadingVideos = true;
          this.channelsService.searchWithVideos(Object.assign({
            user_id: (_a = this.authUser) === null || _a === void 0 ? void 0 : _a.id
          }, params)).subscribe(function (dt) {
            _this24.loadingVideos = false;
            _this24.channelsVideos = dt;
          });
        }
      }, {
        key: "isFiltersShown",
        value: function isFiltersShown() {
          var _a;

          return ((_a = this.items.videos) === null || _a === void 0 ? void 0 : _a.length) > 0 || this.search && this.channelsVideos.find(function (v) {
            return v.videos.length > 0;
          }) || this.filterStatus === 'applied' && !this.loadingVideos;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return ShowVideosComponent;
    }();

    ShowVideosComponent.ɵfac = function ShowVideosComponent_Factory(t) {
      return new (t || ShowVideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__["ChannelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterOutFalsyValuesFromObjectPipe"]));
    };

    ShowVideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowVideosComponent,
      selectors: [["app-show-videos"]],
      decls: 8,
      vars: 6,
      consts: [[1, "all-videos"], ["class", "filter-toggle-btn", 3, "click", 4, "ngIf"], [3, "filter", 4, "ngIf"], ["id", "videos-list"], [3, "diameter", 4, "ngIf"], [4, "ngIf"], [1, "filter-toggle-btn", 3, "click"], [3, "filter"], [3, "diameter"], [3, "items", "authUser"], [3, "channelsVideos", "authUser"], [1, "error"]],
      template: function ShowVideosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowVideosComponent_button_1_Template, 5, 0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowVideosComponent_app_video_filters_2_Template, 1, 0, "app-video-filters", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShowVideosComponent_mat_spinner_4_Template, 1, 1, "mat-spinner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShowVideosComponent_ng_container_5_Template, 3, 4, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShowVideosComponent_ng_container_6_Template, 2, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShowVideosComponent_div_7_Template, 3, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFiltersShown());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFilters);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingVideos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.search && !ctx.loadingVideos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.search && !ctx.loadingVideos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.search && (ctx.channelsVideos == null ? null : ctx.channelsVideos.length) === 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_10__["VideoFiltersComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _show_regular_list_show_regular_list_component__WEBPACK_IMPORTED_MODULE_12__["ShowRegularListComponent"], _show_playlists_list_show_playlists_list_component__WEBPACK_IMPORTED_MODULE_13__["ShowPlaylistsListComponent"], _show_search_results_show_search_results_component__WEBPACK_IMPORTED_MODULE_14__["ShowSearchResultsComponent"]],
      styles: [".filter-toggle-btn[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  background-color: unset;\n  display: flex;\n  align-items: center;\n  font-family: \"Muli-Bold\";\n  padding: 10px;\n}\n.filter-toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3Nob3ctdmlkZW9zL0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFwcFxcdmlkZW9zXFxzaG93LXZpZGVvc1xcc2hvdy12aWRlb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvcy9zaG93LXZpZGVvcy9zaG93LXZpZGVvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUNGSjtBRElJO0VBQ0ksaUJBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy9zaG93LXZpZGVvcy9zaG93LXZpZGVvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG4uZmlsdGVyLXRvZ2dsZS1idG4ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLmZpbHRlci10b2dnbGUtYnRuIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmZpbHRlci10b2dnbGUtYnRuIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowVideosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-show-videos',
          templateUrl: './show-videos.component.html',
          styleUrls: ['./show-videos.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]
        }, {
          type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__["ChannelsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__["GetAuthUserPipe"]
        }, {
          type: _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterOutFalsyValuesFromObjectPipe"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/videos/videojs-test/videojs-test.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/videos/videojs-test/videojs-test.component.ts ***!
    \***************************************************************/

  /*! exports provided: VideojsTestComponent */

  /***/
  function srcAppVideosVideojsTestVideojsTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideojsTestComponent", function () {
      return VideojsTestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! video.js */
    "./node_modules/video.js/dist/video.es.js");
    /* harmony import */


    var recordrtc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! recordrtc */
    "./node_modules/recordrtc/RecordRTC.js");
    /* harmony import */


    var recordrtc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_2__);

    var VideojsTestComponent = /*#__PURE__*/function () {
      function VideojsTestComponent() {
        _classCallCheck(this, VideojsTestComponent);

        this.config = {
          controls: true,
          bigPlayButton: false,
          width: 320,
          height: 240,
          fluid: false,
          plugins: {
            record: {
              audio: true,
              video: true,
              maxLength: 110,
              debug: true
            }
          }
        };
      }

      _createClass(VideojsTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.player = Object(video_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document.getElementById('video'), this.config, function () {
            // console.log('player ready! id:', el);
            // print version information at startup
            var msg = 'Using video.js ' + video_js__WEBPACK_IMPORTED_MODULE_1__["default"].VERSION + ' with videojs-record ' + video_js__WEBPACK_IMPORTED_MODULE_1__["default"].getPluginVersion('record') + ' and recordrtc ' + recordrtc__WEBPACK_IMPORTED_MODULE_2__["version"];
            video_js__WEBPACK_IMPORTED_MODULE_1__["default"].log(msg);
          }, function () {});
          var player = this.player;
          this.player.on('finishRecord', function () {
            // the blob object contains the recorded data that
            // can be downloaded by the user, stored on server etc.
            console.log('finished recording: ', player.recordedData); // player.record().saveAs({'video': 'my-video-file-name.webm'});
          });
        }
      }]);

      return VideojsTestComponent;
    }();

    VideojsTestComponent.ɵfac = function VideojsTestComponent_Factory(t) {
      return new (t || VideojsTestComponent)();
    };

    VideojsTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideojsTestComponent,
      selectors: [["app-videojs-test"]],
      decls: 1,
      vars: 0,
      consts: [["id", "video", "playsinline", "", 1, "video-js"]],
      template: function VideojsTestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "video", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy92aWRlb2pzLXRlc3QvdmlkZW9qcy10ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideojsTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-videojs-test',
          templateUrl: './videojs-test.component.html',
          styleUrls: ['./videojs-test.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/videos/videos-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/videos/videos-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: VideosRoutingModule */

  /***/
  function srcAppVideosVideosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideosRoutingModule", function () {
      return VideosRoutingModule;
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


    var _app_videos_show_videos_show_videos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/videos/show-videos/show-videos.component */
    "./src/app/videos/show-videos/show-videos.component.ts");
    /* harmony import */


    var _app_videos_play_video_play_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/videos/play-video/play-video.component */
    "./src/app/videos/play-video/play-video.component.ts");
    /* harmony import */


    var _app_videos_show_saved_videos_show_saved_videos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/videos/show-saved-videos/show-saved-videos.component */
    "./src/app/videos/show-saved-videos/show-saved-videos.component.ts");
    /* harmony import */


    var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @core/guards/auth.guard */
    "./src/app/core/guards/auth.guard.ts");
    /* harmony import */


    var _app_videos_videojs_test_videojs_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/videos/videojs-test/videojs-test.component */
    "./src/app/videos/videojs-test/videojs-test.component.ts");

    var routes = [{
      path: 'test',
      component: _app_videos_videojs_test_videojs_test_component__WEBPACK_IMPORTED_MODULE_6__["VideojsTestComponent"]
    }, {
      path: '',
      component: _app_videos_show_videos_show_videos_component__WEBPACK_IMPORTED_MODULE_2__["ShowVideosComponent"],
      pathMatch: 'full',
      data: {
        title: 'Videos'
      }
    }, {
      path: 'play',
      component: _app_videos_play_video_play_video_component__WEBPACK_IMPORTED_MODULE_3__["PlayVideoComponent"],
      data: {
        title: 'Play Video'
      }
    }, {
      path: 'saved',
      component: _app_videos_show_saved_videos_show_saved_videos_component__WEBPACK_IMPORTED_MODULE_4__["ShowSavedVideosComponent"],
      canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
      data: {
        title: 'Saved Videos'
      }
    }];

    var VideosRoutingModule = function VideosRoutingModule() {
      _classCallCheck(this, VideosRoutingModule);
    };

    VideosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: VideosRoutingModule
    });
    VideosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function VideosRoutingModule_Factory(t) {
        return new (t || VideosRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideosRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideosRoutingModule, [{
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
  "./src/app/videos/videos.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/videos/videos.module.ts ***!
    \*****************************************/

  /*! exports provided: VideosModule */

  /***/
  function srcAppVideosVideosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideosModule", function () {
      return VideosModule;
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


    var _videos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./videos-routing.module */
    "./src/app/videos/videos-routing.module.ts");
    /* harmony import */


    var _show_videos_show_videos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./show-videos/show-videos.component */
    "./src/app/videos/show-videos/show-videos.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _videos_play_video_play_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../videos/play-video/play-video.component */
    "./src/app/videos/play-video/play-video.component.ts");
    /* harmony import */


    var _show_saved_videos_show_saved_videos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./show-saved-videos/show-saved-videos.component */
    "./src/app/videos/show-saved-videos/show-saved-videos.component.ts");
    /* harmony import */


    var _play_video_video_suggestions_video_suggestions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./play-video/video-suggestions/video-suggestions.component */
    "./src/app/videos/play-video/video-suggestions/video-suggestions.component.ts");
    /* harmony import */


    var _play_video_video_details_form_video_details_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./play-video/video-details-form/video-details-form.component */
    "./src/app/videos/play-video/video-details-form/video-details-form.component.ts");
    /* harmony import */


    var _show_videos_show_regular_list_show_regular_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./show-videos/show-regular-list/show-regular-list.component */
    "./src/app/videos/show-videos/show-regular-list/show-regular-list.component.ts");
    /* harmony import */


    var _show_videos_show_search_results_show_search_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./show-videos/show-search-results/show-search-results.component */
    "./src/app/videos/show-videos/show-search-results/show-search-results.component.ts");
    /* harmony import */


    var _show_videos_show_playlists_list_show_playlists_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./show-videos/show-playlists-list/show-playlists-list.component */
    "./src/app/videos/show-videos/show-playlists-list/show-playlists-list.component.ts");
    /* harmony import */


    var _play_video_video_comments_form_video_comments_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./play-video/video-comments-form/video-comments-form.component */
    "./src/app/videos/play-video/video-comments-form/video-comments-form.component.ts");
    /* harmony import */


    var _play_video_video_comments_list_video_comments_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./play-video/video-comments-list/video-comments-list.component */
    "./src/app/videos/play-video/video-comments-list/video-comments-list.component.ts");
    /* harmony import */


    var _play_video_video_comments_list_comment_actions_comment_actions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./play-video/video-comments-list/comment-actions/comment-actions.component */
    "./src/app/videos/play-video/video-comments-list/comment-actions/comment-actions.component.ts");
    /* harmony import */


    var _play_video_video_comments_list_single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./play-video/video-comments-list/single-comment/single-comment.component */
    "./src/app/videos/play-video/video-comments-list/single-comment/single-comment.component.ts");
    /* harmony import */


    var _videojs_test_videojs_test_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./videojs-test/videojs-test.component */
    "./src/app/videos/videojs-test/videojs-test.component.ts");

    var VideosModule = function VideosModule() {
      _classCallCheck(this, VideosModule);
    };

    VideosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: VideosModule
    });
    VideosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function VideosModule_Factory(t) {
        return new (t || VideosModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videos_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideosRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideosModule, {
        declarations: [_show_videos_show_videos_component__WEBPACK_IMPORTED_MODULE_3__["ShowVideosComponent"], _videos_play_video_play_video_component__WEBPACK_IMPORTED_MODULE_5__["PlayVideoComponent"], _show_saved_videos_show_saved_videos_component__WEBPACK_IMPORTED_MODULE_6__["ShowSavedVideosComponent"], _play_video_video_suggestions_video_suggestions_component__WEBPACK_IMPORTED_MODULE_7__["VideoSuggestionsComponent"], _play_video_video_details_form_video_details_form_component__WEBPACK_IMPORTED_MODULE_8__["VideoDetailsFormComponent"], _show_videos_show_regular_list_show_regular_list_component__WEBPACK_IMPORTED_MODULE_9__["ShowRegularListComponent"], _show_videos_show_search_results_show_search_results_component__WEBPACK_IMPORTED_MODULE_10__["ShowSearchResultsComponent"], _show_videos_show_playlists_list_show_playlists_list_component__WEBPACK_IMPORTED_MODULE_11__["ShowPlaylistsListComponent"], _play_video_video_comments_form_video_comments_form_component__WEBPACK_IMPORTED_MODULE_12__["VideoCommentsFormComponent"], _play_video_video_comments_list_video_comments_list_component__WEBPACK_IMPORTED_MODULE_13__["VideoCommentsListComponent"], _play_video_video_comments_list_comment_actions_comment_actions_component__WEBPACK_IMPORTED_MODULE_14__["CommentActionsComponent"], _play_video_video_comments_list_single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_15__["SingleCommentComponent"], _videojs_test_videojs_test_component__WEBPACK_IMPORTED_MODULE_16__["VideojsTestComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videos_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideosRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_show_videos_show_videos_component__WEBPACK_IMPORTED_MODULE_3__["ShowVideosComponent"], _videos_play_video_play_video_component__WEBPACK_IMPORTED_MODULE_5__["PlayVideoComponent"], _show_saved_videos_show_saved_videos_component__WEBPACK_IMPORTED_MODULE_6__["ShowSavedVideosComponent"], _play_video_video_suggestions_video_suggestions_component__WEBPACK_IMPORTED_MODULE_7__["VideoSuggestionsComponent"], _play_video_video_details_form_video_details_form_component__WEBPACK_IMPORTED_MODULE_8__["VideoDetailsFormComponent"], _show_videos_show_regular_list_show_regular_list_component__WEBPACK_IMPORTED_MODULE_9__["ShowRegularListComponent"], _show_videos_show_search_results_show_search_results_component__WEBPACK_IMPORTED_MODULE_10__["ShowSearchResultsComponent"], _show_videos_show_playlists_list_show_playlists_list_component__WEBPACK_IMPORTED_MODULE_11__["ShowPlaylistsListComponent"], _play_video_video_comments_form_video_comments_form_component__WEBPACK_IMPORTED_MODULE_12__["VideoCommentsFormComponent"], _play_video_video_comments_list_video_comments_list_component__WEBPACK_IMPORTED_MODULE_13__["VideoCommentsListComponent"], _play_video_video_comments_list_comment_actions_comment_actions_component__WEBPACK_IMPORTED_MODULE_14__["CommentActionsComponent"], _play_video_video_comments_list_single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_15__["SingleCommentComponent"], _videojs_test_videojs_test_component__WEBPACK_IMPORTED_MODULE_16__["VideojsTestComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videos_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideosRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=videos-videos-module-es5.js.map