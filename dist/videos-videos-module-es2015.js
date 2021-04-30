(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videos-videos-module"],{

/***/ "./src/app/videos/play-video/play-video.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/videos/play-video/play-video.component.ts ***!
  \***********************************************************/
/*! exports provided: PlayVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayVideoComponent", function() { return PlayVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/global */ "./src/app/core/constants/global.ts");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_video_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/video.service */ "./src/app/core/services/video.service.ts");
/* harmony import */ var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/pipes/get-auth-user.pipe */ "./src/app/shared/pipes/get-auth-user.pipe.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/playlists.service */ "./src/app/core/services/playlists.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_user_tags_user_tags_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/user-tags/user-tags.component */ "./src/app/shared/components/user-tags/user-tags.component.ts");
/* harmony import */ var _shared_components_video_js_video_js_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/video-js/video-js.component */ "./src/app/shared/components/video-js/video-js.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _video_details_form_video_details_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./video-details-form/video-details-form.component */ "./src/app/videos/play-video/video-details-form/video-details-form.component.ts");
/* harmony import */ var _video_suggestions_video_suggestions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./video-suggestions/video-suggestions.component */ "./src/app/videos/play-video/video-suggestions/video-suggestions.component.ts");
/* harmony import */ var _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/pipes/date-from-now.pipe */ "./src/app/shared/pipes/date-from-now.pipe.ts");
/* harmony import */ var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/pipes/get-thumb-path.pipe */ "./src/app/shared/pipes/get-thumb-path.pipe.ts");



















function PlayVideoComponent_app_user_tags_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-user-tags", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tagSelected", function PlayVideoComponent_app_user_tags_0_Template_app_user_tags_tagSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.getVideosByTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayVideoComponent_ng_container_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No tags defined for this video");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayVideoComponent_ng_container_3_ng_container_6_p_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_3_ng_container_6_p_1_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const tag_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r13.openVideoByTag(tag_r12.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" #", tag_r12.name, "");
} }
function PlayVideoComponent_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlayVideoComponent_ng_container_3_ng_container_6_p_1_Template, 2, 1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.videoData.tags);
} }
function PlayVideoComponent_ng_container_3_div_25_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_3_div_25_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r16.showTagsForm = !ctx_r16.showTagsForm; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Edit details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayVideoComponent_ng_container_3_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PlayVideoComponent_ng_container_3_div_25_button_3_Template, 5, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.videoData == null ? null : ctx_r8.videoData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.showTagsForm && (ctx_r8.authUser == null ? null : ctx_r8.authUser.id) === ctx_r8.videoData.author_id);
} }
function PlayVideoComponent_ng_container_3_app_video_details_form_26_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-video-details-form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("formReady", function PlayVideoComponent_ng_container_3_app_video_details_form_26_Template_app_video_details_form_formReady_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.saveVideoDetails($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("videoData", ctx_r9.videoData);
} }
function PlayVideoComponent_ng_container_3_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_3_div_35_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.openChannelPage(ctx_r20.videoData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "getImgPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 3, ctx_r10.videoData.channel.avatar, "avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.videoData.channel.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.videoData.channel.subscribers_count + " subscriber" + (ctx_r10.videoData.channel.subscribers_count === 1 ? "" : "s"));
} }
function PlayVideoComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-vjs-player", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PlayVideoComponent_ng_container_3_span_5_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PlayVideoComponent_ng_container_3_ng_container_6_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_3_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.updateLikes(ctx_r22.videoData, "like"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_3_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.updateLikes(ctx_r24.videoData, "dislike"); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_3_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.saveVideo(ctx_r25.videoData); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "dateFromNow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, PlayVideoComponent_ng_container_3_div_35_Template, 8, 6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("videoData", ctx_r1.videoData)("options", ctx_r1.videoJSPlayerOptions);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 18, ctx_r1.videoData.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.videoData == null ? null : ctx_r1.videoData.channel);
} }
function PlayVideoComponent_app_video_suggestions_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-video-suggestions");
} }
function PlayVideoComponent_app_video_suggestions_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-video-suggestions");
} }
class PlayVideoComponent {
    constructor(route, videoService, router, getAuthUser, auth, toastr, playlistsService) {
        this.route = route;
        this.videoService = videoService;
        this.router = router;
        this.getAuthUser = getAuthUser;
        this.auth = auth;
        this.toastr = toastr;
        this.playlistsService = playlistsService;
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["API_URL"];
        this.userVideoConnection = { liked: 0, disliked: 0, saved: '', viewed: false };
        this.isProduction = _env__WEBPACK_IMPORTED_MODULE_3__["environment"].production;
        this.videoJSPlayerOptions = {
            autoplay: true,
            controls: true,
            bigPlayButton: false,
            progressControl: true,
            fluid: false,
            preload: 'auto',
            html5: {
                vhs: {
                    withCredentials: true,
                    overrideNative: true,
                },
                nativeAudioTracks: false,
                nativeVideoTracks: false
            },
            sources: []
        };
        this.viewsCount = 0;
        this.showTagsForm = false;
        this.authUser = this.getAuthUser.transform();
    }
    ngOnInit() {
        const videoId = this.route.snapshot.queryParams.id;
        const params = { id: videoId };
        this.videoService.getVideoById(params).subscribe(dt => {
            this.videoData = dt;
            if (this.auth.loggedIn()) {
                this.userVideoConnection = this.checkUserVideoConnection(dt);
                this.updateViewsCount(dt);
                this.indexUserTags(dt);
            }
        });
    }
    checkUserVideoConnection(videoData) {
        var _a, _b, _c;
        const userVideoConnection = videoData === null || videoData === void 0 ? void 0 : videoData.users_vids.find(u => u.id === this.authUser.id);
        if (!userVideoConnection) {
            return this.userVideoConnection;
        }
        else {
            const liked = (_a = userVideoConnection.users_videos) === null || _a === void 0 ? void 0 : _a.liked;
            const disliked = (_b = userVideoConnection.users_videos) === null || _b === void 0 ? void 0 : _b.disliked;
            const saved = userVideoConnection.users_videos.saved ? 'saved' : '';
            const viewed = !!((_c = userVideoConnection === null || userVideoConnection === void 0 ? void 0 : userVideoConnection.users_videos) === null || _c === void 0 ? void 0 : _c.viewed);
            return { liked, disliked, saved, viewed };
        }
    }
    updateViewsCount(dt) {
        const params = { user_id: this.authUser.id, video_id: dt.id };
        if (!this.userVideoConnection.viewed) {
            this.videoService.updateViews(params).subscribe((d) => {
                this.videoData = d;
            });
        }
    }
    updateLikes(videoData, action) {
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
            }).subscribe(dt => {
            });
        }
        else {
            this.toastr.error('Please log in first to take this action');
        }
    }
    getLikesState(action, videoData) {
        if (action === 'like') {
            this.userVideoConnection.liked = +!this.userVideoConnection.liked;
            if (this.userVideoConnection.disliked) {
                videoData.dislikes += videoData.dislikes === 0 ? 0 : -1;
            }
            this.userVideoConnection.disliked = 0;
            videoData.likes += this.userVideoConnection.liked ? 1 : -1;
        }
        else {
            this.userVideoConnection.disliked = +!this.userVideoConnection.disliked;
            if (this.userVideoConnection.liked) {
                videoData.likes += videoData.likes === 0 ? 0 : -1;
            }
            this.userVideoConnection.liked = 0;
            videoData.dislikes += this.userVideoConnection.disliked ? 1 : -1;
        }
        return videoData;
    }
    indexUserTags(dt) {
        var _a;
        const params = { user_id: this.authUser.id, video_id: dt.id, tags: (_a = this.videoData) === null || _a === void 0 ? void 0 : _a.tags };
        this.videoService.indexUserTags(params).subscribe(d => {
        });
    }
    openChannelPage(videoData) {
        this.router.navigate(['channels/show'], { queryParams: { username: videoData.users_vids[0].username } });
    }
    openVideoByTag(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['videos'], { queryParams: { tag: name } });
        });
    }
    saveVideo(videoData) {
        this.videoService.saveVideo({
            video_id: videoData.id,
            user_id: this.authUser.id,
            saved: this.userVideoConnection.saved === 'saved' ? 0 : 1
        }).subscribe(dt => {
            this.userVideoConnection.saved = dt.saved ? 'saved' : '';
        });
    }
    saveVideoDetails(e) {
        this.videoData.tags = e.tags;
        this.videoService.saveVideoDetails(Object.assign(Object.assign({}, e), { video_id: this.videoData.id })).subscribe(dt => {
            this.videoData = dt;
            this.showTagsForm = false;
        });
    }
    getVideosByTag(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['videos'], { queryParams: { tag: name } });
        });
    }
    isSmallSize() {
        return window.screen.availWidth < 992;
    }
    ngAfterViewInit() {
    }
}
PlayVideoComponent.ɵfac = function PlayVideoComponent_Factory(t) { return new (t || PlayVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_playlists_service__WEBPACK_IMPORTED_MODULE_9__["PlaylistsService"])); };
PlayVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlayVideoComponent, selectors: [["app-play-video"]], decls: 7, vars: 4, consts: [[3, "tagSelected", 4, "ngIf"], [1, "ads-block"], [1, "ads-block-left"], [4, "ngIf"], [1, "ads-block-right"], [3, "tagSelected"], [1, "videoWrap"], [3, "videoData", "options"], [1, "main-tags"], [1, "main-tags-text"], [1, "main-tags-like"], [1, "main-tags-share", 3, "click"], [1, "fas", "fa-thumbs-up"], [1, "fas", "fa-thumbs-down"], [1, "main-tags-share"], [1, "fas", "fa-share-alt"], [1, "fas", "fa-plus-square"], [1, "tags-container"], ["class", "editable-details", 4, "ngIf"], [3, "videoData", "formReady", 4, "ngIf"], [1, "details-row"], [1, "ads-text-2"], [1, "dot"], ["class", "main-item-block channel-block", 3, "click", 4, "ngIf"], ["class", "tag", 3, "click", 4, "ngFor", "ngForOf"], [1, "tag", 3, "click"], [1, "editable-details"], [1, "ads-text-1"], ["id", "add-tags", 3, "click", 4, "ngIf"], ["id", "add-tags", 3, "click"], [3, "videoData", "formReady"], [1, "main-item-block", "channel-block", 3, "click"], [1, "avatar", 3, "src"], [1, "channel-name"], [1, "main-text-4"]], template: function PlayVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PlayVideoComponent_app_user_tags_0_Template, 1, 0, "app-user-tags", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PlayVideoComponent_ng_container_3_Template, 37, 20, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PlayVideoComponent_app_video_suggestions_4_Template, 1, 0, "app-video-suggestions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PlayVideoComponent_app_video_suggestions_6_Template, 1, 0, "app-video-suggestions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.videoData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSmallSize());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isSmallSize());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_components_user_tags_user_tags_component__WEBPACK_IMPORTED_MODULE_11__["UserTagsComponent"], _shared_components_video_js_video_js_component__WEBPACK_IMPORTED_MODULE_12__["VideoJsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _video_details_form_video_details_form_component__WEBPACK_IMPORTED_MODULE_14__["VideoDetailsFormComponent"], _video_suggestions_video_suggestions_component__WEBPACK_IMPORTED_MODULE_15__["VideoSuggestionsComponent"]], pipes: [_shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_16__["DateFromNowPipe"], _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_17__["GetThumbPathPipe"]], styles: [".plyr[_ngcontent-%COMP%] {\n  height: 400px !important;\n  width: 100%;\n}\n.plyr[_ngcontent-%COMP%]   .plyr__control--overlaid[_ngcontent-%COMP%] {\n  background-color: #18B587 !important;\n}\n.plyr[_ngcontent-%COMP%]   .plyr__controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .plyr[_ngcontent-%COMP%]   .plyr__controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .plyr[_ngcontent-%COMP%]   .plyr--video[_ngcontent-%COMP%]   .plyr__control[aria-expanded=true][_ngcontent-%COMP%] {\n  background: #18B587 !important;\n}\n.plyr--full-ui[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n  color: #18B587 !important;\n}\n.saved[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .saved[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #18B587 !important;\n}\n#add-tags[_ngcontent-%COMP%] {\n  background-color: #18B587;\n  color: #ffffff;\n  margin-left: 10px;\n  display: flex;\n  align-items: center;\n  padding: 8px 24px;\n}\n.tag[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.details-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.details-row[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.channel-block[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-top: 0.5px solid #C9C9C9;\n  border-bottom: 0.5px solid #C9C9C9;\n  padding: 12px 0;\n}\n.tags-container[_ngcontent-%COMP%]   .editable-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.main-tags[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 16px;\n  margin-top: 24px;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.main-tags[_ngcontent-%COMP%]   .main-tags-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n  margin-right: 24px;\n  align-items: center;\n}\n.main-tags[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #0035C6;\n  font-size: 16px;\n  font-family: \"Muli-Bold\";\n  margin-right: 16px;\n  margin-bottom: 8px;\n}\n.main-tags[_ngcontent-%COMP%]   .main-tags-like[_ngcontent-%COMP%] {\n  display: flex;\n  color: #545454;\n}\n.main-tags[_ngcontent-%COMP%]   .main-tags-share[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.main-tags[_ngcontent-%COMP%]   .main-tags-share[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  color: #545454;\n  font-size: 12px;\n  font-family: \"Muli-Light\";\n  margin-bottom: 0 !important;\n}\n.main-tags[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n  color: #18B587 !important;\n}\n.main-tags[_ngcontent-%COMP%]   .disliked[_ngcontent-%COMP%] {\n  color: #F53C6F !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxwbHlyLWN1c3RvbS5zY3NzIiwic3JjL2FwcC92aWRlb3MvcGxheS12aWRlby9wbGF5LXZpZGVvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlb3MvcGxheS12aWRlby9DOlxccHJvamVjdHNcXHRyYWRpbmdcXGZyb250ZW5kL3NyY1xcYXBwXFx2aWRlb3NcXHBsYXktdmlkZW9cXHBsYXktdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvcy9wbGF5LXZpZGVvL0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0FDQUo7QURFSTtFQUNJLG9DQUFBO0FDQVI7QURHSTtFQUNJLDhCQUFBO0FDRFI7QURLQTtFQUNJLHlCQUFBO0FDRko7QUNUSTtFQUNJLHlCQUFBO0FEWVI7QUNSQTtFQUNJLHlCQ1RJO0VEVUosY0NUSTtFRFdKLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURVSjtBQ1BBO0VBQ0ksZUFBQTtBRFVKO0FDUEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QURVSjtBQ1JJO0VBQ0ksY0FBQTtBRFVSO0FDTkE7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QURTSjtBQ0RJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FESVI7QUNFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBRENKO0FDQ0k7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEQ1I7QUNFSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEQVI7QUNHSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FERFI7QUNJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURGUjtBQ0lRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QURGWjtBQ09JO0VBQ0kseUJBQUE7QURMUjtBQ1FJO0VBQ0kseUJBQUE7QUROUiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy9wbGF5LXZpZGVvL3BsYXktdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQbHlyIGN1c3RvbSBzdHlsZXNcclxuLnBseXIge1xyXG4gICAgaGVpZ2h0OiA0MDBweCFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAucGx5cl9fY29udHJvbC0tb3ZlcmxhaWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOEI1ODcgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGx5cl9fY29udHJvbHMgYnV0dG9uOmhvdmVyLCAucGx5cl9fY29udHJvbHMgYnV0dG9uOmZvY3VzLCAucGx5ci0tdmlkZW8gLnBseXJfX2NvbnRyb2xbYXJpYS1leHBhbmRlZD10cnVlXSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE4QjU4NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGx5ci0tZnVsbC11aSBpbnB1dFt0eXBlPXJhbmdlXSB7XHJcbiAgICBjb2xvcjogIzE4QjU4NyAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5wbHlyIHtcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cbi5wbHlyIC5wbHlyX19jb250cm9sLS1vdmVybGFpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOEI1ODcgIWltcG9ydGFudDtcbn1cbi5wbHlyIC5wbHlyX19jb250cm9scyBidXR0b246aG92ZXIsIC5wbHlyIC5wbHlyX19jb250cm9scyBidXR0b246Zm9jdXMsIC5wbHlyIC5wbHlyLS12aWRlbyAucGx5cl9fY29udHJvbFthcmlhLWV4cGFuZGVkPXRydWVdIHtcbiAgYmFja2dyb3VuZDogIzE4QjU4NyAhaW1wb3J0YW50O1xufVxuXG4ucGx5ci0tZnVsbC11aSBpbnB1dFt0eXBlPXJhbmdlXSB7XG4gIGNvbG9yOiAjMThCNTg3ICFpbXBvcnRhbnQ7XG59XG5cbi5zYXZlZCBpLCAuc2F2ZWQgcCB7XG4gIGNvbG9yOiAjMThCNTg3ICFpbXBvcnRhbnQ7XG59XG5cbiNhZGQtdGFncyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOEI1ODc7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDI0cHg7XG59XG5cbi50YWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZXRhaWxzLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGV0YWlscy1yb3cgLmRvdCB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uY2hhbm5lbC1ibG9jayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgI0M5QzlDOTtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI0M5QzlDOTtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuXG4udGFncy1jb250YWluZXIgLmVkaXRhYmxlLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tYWluLXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm1haW4tdGFncyAubWFpbi10YWdzLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluLXRhZ3MgcCB7XG4gIGNvbG9yOiAjMDAzNUM2O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5tYWluLXRhZ3MgLm1haW4tdGFncy1saWtlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICM1NDU0NTQ7XG59XG4ubWFpbi10YWdzIC5tYWluLXRhZ3Mtc2hhcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbi10YWdzIC5tYWluLXRhZ3Mtc2hhcmUgcCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktTGlnaHRcIjtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLm1haW4tdGFncyAubGlrZWQge1xuICBjb2xvcjogIzE4QjU4NyAhaW1wb3J0YW50O1xufVxuLm1haW4tdGFncyAuZGlzbGlrZWQge1xuICBjb2xvcjogI0Y1M0M2RiAhaW1wb3J0YW50O1xufSIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcInBseXItY3VzdG9tXCI7XHJcblxyXG4uc2F2ZWQge1xyXG4gICAgaSwgcCB7XHJcbiAgICAgICAgY29sb3I6ICMxOEI1ODcgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuI2FkZC10YWdzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAvL3BhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcclxufVxyXG5cclxuLnRhZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kZXRhaWxzLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuZG90IHtcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNoYW5uZWwtYmxvY2sge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgI0M5QzlDOTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNDOUM5Qzk7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbn1cclxuXHJcbi5hZHMtYmxvY2stcmlnaHQge1xyXG5cclxufVxyXG5cclxuLnRhZ3MtY29udGFpbmVyIHtcclxuICAgIC5lZGl0YWJsZS1kZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4ubWFpbi10YWdzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIC5tYWluLXRhZ3MtdGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBjb2xvcjogIzAwMzVDNjtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi10YWdzLWxpa2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tdGFncy1zaGFyZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktTGlnaHRcIjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpa2VkIHtcclxuICAgICAgICBjb2xvcjogIzE4QjU4NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXNsaWtlZCB7XHJcbiAgICAgICAgY29sb3I6ICRyZWQgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiJHJlZDogI0Y1M0M2RjtcclxuJGdyZWVuOiAjMThCNTg3O1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlayVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-play-video',
                templateUrl: './play-video.component.html',
                styleUrls: ['./play-video.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__["GetAuthUserPipe"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_9__["PlaylistsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/videos/play-video/video-details-form/video-details-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/videos/play-video/video-details-form/video-details-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: VideoDetailsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetailsFormComponent", function() { return VideoDetailsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");










function VideoDetailsFormComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The video name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoDetailsFormComponent_mat_chip_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function VideoDetailsFormComponent_mat_chip_11_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const tag_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.remove(tag_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r5.name, " ");
} }
function VideoDetailsFormComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please provide some tags describing your live video ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VideoDetailsFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.formReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isSubmitted = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.videoDetailsForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tags: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ngOnInit() {
        this.videoDetailsForm.patchValue({ name: this.videoData.name });
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.videoData.tags.push({ name: value.trim() });
            this.videoDetailsForm.patchValue({ tags: this.videoData.tags });
            // this.saveTags();
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    remove(tag) {
        const index = this.videoData.tags.indexOf(tag);
        if (index >= 0) {
            this.videoData.tags.splice(index, 1);
            this.videoDetailsForm.patchValue({ tags: this.videoData.tags });
        }
    }
    saveDetails() {
        this.videoDetailsForm.patchValue({ tags: this.videoData.tags });
        this.isSubmitted = true;
        if (this.videoDetailsForm.valid) {
            this.formReady.emit(this.videoDetailsForm.value);
        }
    }
}
VideoDetailsFormComponent.ɵfac = function VideoDetailsFormComponent_Factory(t) { return new (t || VideoDetailsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
VideoDetailsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoDetailsFormComponent, selectors: [["app-video-details-form"]], inputs: { videoData: "videoData" }, outputs: { formReady: "formReady" }, decls: 21, vars: 6, consts: [["id", "tags-form", 3, "formGroup"], [1, "left-group"], ["id", "video-name"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], [1, "right-group"], ["id", "video-tags"], [1, "example-chip-list"], ["formControlName", "tags"], ["tagList", ""], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Tags...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["chipsInput", ""], ["align", "end"], [1, "actions"], ["id", "save-tags", 3, "click"], [3, "removed"], ["matChipRemove", ""]], template: function VideoDetailsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VideoDetailsFormComponent_mat_error_5_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-chip-list", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VideoDetailsFormComponent_mat_chip_11_Template, 4, 1, "mat-chip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function VideoDetailsFormComponent_Template_input_matChipInputTokenEnd_12_listener($event) { return ctx.add($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-hint", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Please press 'Enter' after the tag name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, VideoDetailsFormComponent_mat_error_16_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoDetailsFormComponent_Template_button_click_18_listener() { return ctx.saveDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.videoDetailsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.videoDetailsForm.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videoData.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r1)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoData.tags.length === 0 && ctx.isSubmitted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatHint"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipRemove"]], styles: ["#tags-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n#tags-form[_ngcontent-%COMP%]   .right-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n#tags-form[_ngcontent-%COMP%]   .right-group[_ngcontent-%COMP%]   #video-tags[_ngcontent-%COMP%] {\n  width: 250px;\n}\n#tags-form[_ngcontent-%COMP%]   .right-group[_ngcontent-%COMP%]   #video-tags[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#tags-form[_ngcontent-%COMP%]   .right-group[_ngcontent-%COMP%]   #save-tags[_ngcontent-%COMP%] {\n  background-color: #18B587;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  border-radius: 0;\n  transition: 0.3s ease-in-out;\n  margin-left: 30px;\n}\n@media screen and (max-width: 767px) {\n  #tags-form[_ngcontent-%COMP%]   .right-group[_ngcontent-%COMP%]   #save-tags[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tZGV0YWlscy1mb3JtL0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXHZpZGVvc1xccGxheS12aWRlb1xcdmlkZW8tZGV0YWlscy1mb3JtXFx2aWRlby1kZXRhaWxzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvcy9wbGF5LXZpZGVvL3ZpZGVvLWRldGFpbHMtZm9ybS92aWRlby1kZXRhaWxzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvcy9wbGF5LXZpZGVvL3ZpZGVvLWRldGFpbHMtZm9ybS9DOlxccHJvamVjdHNcXHRyYWRpbmdcXGZyb250ZW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FER0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNEUjtBREdRO0VBQ0ksWUFBQTtBQ0RaO0FER1k7RUFDSSxXQUFBO0FDRGhCO0FES1E7RUFDSSx5QkVwQko7RUZxQkksY0VwQko7RUZxQkksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQ0haO0FESVk7RUFUSjtJQVVRLGNBQUE7RUNEZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tZGV0YWlscy1mb3JtL3ZpZGVvLWRldGFpbHMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4jdGFncy1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgLnJpZ2h0LWdyb3VwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICN2aWRlby10YWdzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG5cclxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNzYXZlLXRhZ3Mge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIiN0YWdzLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuI3RhZ3MtZm9ybSAucmlnaHQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI3RhZ3MtZm9ybSAucmlnaHQtZ3JvdXAgI3ZpZGVvLXRhZ3Mge1xuICB3aWR0aDogMjUwcHg7XG59XG4jdGFncy1mb3JtIC5yaWdodC1ncm91cCAjdmlkZW8tdGFncyBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3RhZ3MtZm9ybSAucmlnaHQtZ3JvdXAgI3NhdmUtdGFncyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOEI1ODc7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgI3RhZ3MtZm9ybSAucmlnaHQtZ3JvdXAgI3NhdmUtdGFncyB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn0iLCIkcmVkOiAjRjUzQzZGO1xyXG4kZ3JlZW46ICMxOEI1ODc7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoDetailsFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-details-form',
                templateUrl: './video-details-form.component.html',
                styleUrls: ['./video-details-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { videoData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['videoData']
        }], formReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['formReady']
        }] }); })();


/***/ }),

/***/ "./src/app/videos/play-video/video-suggestions/video-suggestions.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/videos/play-video/video-suggestions/video-suggestions.component.ts ***!
  \************************************************************************************/
/*! exports provided: VideoSuggestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSuggestionsComponent", function() { return VideoSuggestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/global */ "./src/app/core/constants/global.ts");
/* harmony import */ var _core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/modals/confirmation-dialog/confirmation-dialog.component */ "./src/app/core/components/modals/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/playlists.service */ "./src/app/core/services/playlists.service.ts");
/* harmony import */ var _core_services_video_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/video.service */ "./src/app/core/services/video.service.ts");
/* harmony import */ var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/pipes/get-auth-user.pipe */ "./src/app/shared/pipes/get-auth-user.pipe.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pipes/get-thumb-path.pipe */ "./src/app/shared/pipes/get-thumb-path.pipe.ts");
/* harmony import */ var _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/pipes/date-from-now.pipe */ "./src/app/shared/pipes/date-from-now.pipe.ts");














function VideoSuggestionsComponent_div_0_ng_container_4_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoSuggestionsComponent_div_0_ng_container_4_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const video_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.removeVideoFromPlaylist(video_r3, ctx_r5.playlistId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VideoSuggestionsComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoSuggestionsComponent_div_0_ng_container_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const video_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.openVideoPage(video_r3, ctx_r8.playlistData == null ? null : ctx_r8.playlistData.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "getImgPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoSuggestionsComponent_div_0_ng_container_4_Template_p_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const video_r3 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.openVideoPage(video_r3, ctx_r10.playlistData == null ? null : ctx_r10.playlistData.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, VideoSuggestionsComponent_div_0_ng_container_4_div_10_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const video_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
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
} }
function VideoSuggestionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VideoSuggestionsComponent_div_0_ng_container_4_Template, 11, 8, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.playlistData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.playlistData.videos);
} }
function VideoSuggestionsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoSuggestionsComponent_div_1_div_1_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const video_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.openVideoPage(video_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "getImgPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "dateFromNow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
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
} }
function VideoSuggestionsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VideoSuggestionsComponent_div_1_div_1_Template, 17, 9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ind_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ind_r12 < 5);
} }
class VideoSuggestionsComponent {
    constructor(route, playlistsService, videoService, getAuthUser, router, dialog) {
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
    ngOnInit() {
        var _a, _b;
        this.urlParams = this.route.snapshot.queryParams;
        this.videoId = +((_a = this.urlParams) === null || _a === void 0 ? void 0 : _a.id);
        this.playlistId = (_b = this.urlParams) === null || _b === void 0 ? void 0 : _b.playlist_id;
        this.playlistOpened = !!this.playlistId;
        if (this.playlistOpened) {
            this.playlistsService.getById({ playlist_id: this.playlistId }).subscribe(dt => {
                this.playlistData = dt;
            });
        }
        this.videoService.get({ limit: _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_VIDEO_SUGGESTIONS_COUNT"] }).subscribe(dt => {
            this.videoSuggestions = dt.videos;
        });
    }
    openVideoPage(video, playlistId = null) {
        const route = '/videos/play';
        const params = { id: video.id, playlist_id: playlistId };
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.router.navigate([route], { queryParams: params }); }));
    }
    removeVideoFromPlaylist(video, playlistId) {
        this.dialog.open(_core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"]).afterClosed().subscribe(confirmed => {
            if (confirmed) {
                this.playlistsService.removeVideoFromPlaylist({
                    playlist_id: playlistId,
                    video_id: video.id
                }).subscribe(dt => {
                    const oldVideoIndex = this.playlistData.videos.indexOf(video);
                    this.playlistData.videos = dt.videos;
                    const nextVideo = this.playlistData.videos[oldVideoIndex];
                    if (nextVideo) {
                        this.openVideoPage(nextVideo);
                    }
                });
            }
        });
    }
}
VideoSuggestionsComponent.ɵfac = function VideoSuggestionsComponent_Factory(t) { return new (t || VideoSuggestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_playlists_service__WEBPACK_IMPORTED_MODULE_6__["PlaylistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_7__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
VideoSuggestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VideoSuggestionsComponent, selectors: [["app-video-suggestions"]], decls: 5, vars: 3, consts: [["class", "playlist-wrap", 4, "ngIf"], ["class", "suggested-videos", 4, "ngFor", "ngForOf"], [3, "hidden"], ["src", "assets/img/ads.png", 1, "ads"], [1, "playlist-wrap"], [1, "list-wrap"], [4, "ngFor", "ngForOf"], [1, "playlist-video", 3, "click"], [1, "thumbnail-container"], [3, "src"], [1, "details-container"], [1, "video-name", 3, "click"], [1, "main-text-3"], ["class", "remove-btn-container", 3, "click", 4, "ngIf"], [1, "remove-btn-container", 3, "click"], [1, "material-icons"], [1, "suggested-videos"], ["class", "suggested-video", 4, "ngIf"], [1, "suggested-video"], [3, "src", "click"], [1, "video-name"], [1, "channel-sub-name"], [1, "details-row"], [1, "watchers-count"], [1, "dot"], [1, "upload-time"]], template: function VideoSuggestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VideoSuggestionsComponent_div_0_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VideoSuggestionsComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.playlistOpened && ctx.playlistData && ctx.playlistData.videos.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.videoSuggestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.isProduction);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_11__["GetThumbPathPipe"], _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_12__["DateFromNowPipe"]], styles: [".playlist-wrap[_ngcontent-%COMP%] {\n  box-shadow: 0 0 6px #0000001A;\n}\n.playlist-wrap[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.playlist-wrap[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #E3E3E3;\n  border-radius: 10px;\n}\n.playlist-wrap[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #CBCBCB;\n  border-radius: 10px;\n}\n.playlist-wrap[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n.playlist-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background: #F8F8F8;\n  font-size: 16px;\n  color: #545454;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  max-height: 440px;\n  overflow: auto;\n  padding: 0px 12px 16px;\n  margin-top: 16px;\n  margin-top: 16px;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%]   .ads-info[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%]   .playlist-video[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 51px;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%]   .video-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: #18B587;\n}\n.playlist-wrap[_ngcontent-%COMP%]   .list-wrap[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #545454;\n  transition: 0.3s;\n}\n.suggested-video[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .suggested-video[_ngcontent-%COMP%]   .video-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.selected[_ngcontent-%COMP%] {\n  background-color: #F4F4F4;\n}\n.details-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.details-row[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3BsYXktdmlkZW8vdmlkZW8tc3VnZ2VzdGlvbnMvQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcdmlkZW9zXFxwbGF5LXZpZGVvXFx2aWRlby1zdWdnZXN0aW9uc1xcdmlkZW8tc3VnZ2VzdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvcy9wbGF5LXZpZGVvL3ZpZGVvLXN1Z2dlc3Rpb25zL3ZpZGVvLXN1Z2dlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjtBRENJO0VBQ0ksVUFBQTtBQ0NSO0FERUk7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURHSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUNEUjtBRElJO0VBQ0ksZ0JBQUE7QUNGUjtBREtJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDSFI7QURNSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSlI7QURPWTtFQUNJLFNBQUE7QUNMaEI7QURTUTtFQUNJLGVBQUE7QUNQWjtBRFVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNSWjtBRFdRO0VBQ0ksZUFBQTtBQ1RaO0FEWVE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDVlo7QURhZ0I7RUFDSSxjQUFBO0FDWHBCO0FEZVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDYmhCO0FEc0JJO0VBQ0ksZUFBQTtBQ25CUjtBRHVCQTtFQUNJLHlCQUFBO0FDcEJKO0FEd0JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDckJKO0FEdUJJO0VBQ0ksYUFBQTtBQ3JCUiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy9wbGF5LXZpZGVvL3ZpZGVvLXN1Z2dlc3Rpb25zL3ZpZGVvLXN1Z2dlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXlsaXN0LXdyYXAge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDZweCAjMDAwMDAwMUE7XHJcblxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTNFM0UzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0NCQ0JDQjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0LXdyYXAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDQwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEycHggMTZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcblxyXG4gICAgICAgIC5hZHMtaW5mbyB7XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wbGF5bGlzdC12aWRlbyB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmlkZW8tbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZW1vdmUge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMThCNTg3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4uc3VnZ2VzdGVkLXZpZGVvIHtcclxuICAgIGltZywgLnZpZGVvLW5hbWUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XHJcbn1cclxuXHJcblxyXG4uZGV0YWlscy1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmRvdCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxufVxyXG4iLCIucGxheWxpc3Qtd3JhcCB7XG4gIGJveC1zaGFkb3c6IDAgMCA2cHggIzAwMDAwMDFBO1xufVxuLnBsYXlsaXN0LXdyYXAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG4ucGxheWxpc3Qtd3JhcCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI0UzRTNFMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wbGF5bGlzdC13cmFwIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjQ0JDQkNCO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnBsYXlsaXN0LXdyYXAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG59XG4ucGxheWxpc3Qtd3JhcCBoMiB7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuLnBsYXlsaXN0LXdyYXAgLmxpc3Qtd3JhcCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIG1heC1oZWlnaHQ6IDQ0MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMHB4IDEycHggMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5wbGF5bGlzdC13cmFwIC5saXN0LXdyYXAgLmFkcy1pbmZvOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG4ucGxheWxpc3Qtd3JhcCAubGlzdC13cmFwIC5wbGF5bGlzdC12aWRlbyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wbGF5bGlzdC13cmFwIC5saXN0LXdyYXAgaW1nIHtcbiAgd2lkdGg6IDY4cHg7XG4gIGhlaWdodDogNTFweDtcbn1cbi5wbGF5bGlzdC13cmFwIC5saXN0LXdyYXAgLnZpZGVvLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucGxheWxpc3Qtd3JhcCAubGlzdC13cmFwIC5yZW1vdmUge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGxheWxpc3Qtd3JhcCAubGlzdC13cmFwIC5yZW1vdmU6aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiAjMThCNTg3O1xufVxuLnBsYXlsaXN0LXdyYXAgLmxpc3Qtd3JhcCAucmVtb3ZlIHNwYW4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc3VnZ2VzdGVkLXZpZGVvIGltZywgLnN1Z2dlc3RlZC12aWRlbyAudmlkZW8tbmFtZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbn1cblxuLmRldGFpbHMtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kZXRhaWxzLXJvdyAuZG90IHtcbiAgbWFyZ2luOiAwIDVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoSuggestionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-video-suggestions',
                templateUrl: './video-suggestions.component.html',
                styleUrls: ['./video-suggestions.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _core_services_playlists_service__WEBPACK_IMPORTED_MODULE_6__["PlaylistsService"] }, { type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_7__["VideoService"] }, { type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__["GetAuthUserPipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/videos/show-saved-videos/show-saved-videos.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/videos/show-saved-videos/show-saved-videos.component.ts ***!
  \*************************************************************************/
/*! exports provided: ShowSavedVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSavedVideosComponent", function() { return ShowSavedVideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/global */ "./src/app/core/constants/global.ts");
/* harmony import */ var _core_helpers_build_play_video_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/helpers/build-play-video-route */ "./src/app/core/helpers/build-play-video-route.ts");
/* harmony import */ var _core_services_video_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/video.service */ "./src/app/core/services/video.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/subject.service */ "./src/app/core/services/subject.service.ts");
/* harmony import */ var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/channels.service */ "./src/app/core/services/channels.service.ts");
/* harmony import */ var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/pipes/get-auth-user.pipe */ "./src/app/shared/pipes/get-auth-user.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/pipes/get-thumb-path.pipe */ "./src/app/shared/pipes/get-thumb-path.pipe.ts");
/* harmony import */ var _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/pipes/date-from-now.pipe */ "./src/app/shared/pipes/date-from-now.pipe.ts");













function ShowSavedVideosComponent_div_0_ng_container_1_div_1_li_25_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowSavedVideosComponent_div_0_ng_container_1_div_1_li_25_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const tag_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r6.getVideosByTag(tag_r5.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r5.name);
} }
function ShowSavedVideosComponent_div_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowSavedVideosComponent_div_0_ng_container_1_div_1_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const video_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r8.openVideoPage(video_r3, ctx_r8.userVideos.username); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowSavedVideosComponent_div_0_ng_container_1_div_1_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const video_r3 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r10.openChannelPage(video_r3.user.channel, video_r3.user.username); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u00B7");
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
} if (rf & 2) {
    const video_r3 = ctx.$implicit;
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
} }
function ShowSavedVideosComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowSavedVideosComponent_div_0_ng_container_1_div_1_Template, 26, 12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.userVideos.users_vids);
} }
function ShowSavedVideosComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowSavedVideosComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.search);
} }
class ShowSavedVideosComponent {
    constructor(videoService, router, subject, channelsService, route, getAuthUser) {
        this.videoService = videoService;
        this.router = router;
        this.subject = subject;
        this.channelsService = channelsService;
        this.route = route;
        this.getAuthUser = getAuthUser;
        this.channelsVideos = [];
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_2__["API_URL"];
    }
    ngOnInit() {
        this.authUser = this.getAuthUser.transform();
        this.videoService.getUserSavedVideos({ user_id: this.authUser.id }).subscribe(dt => {
            this.userVideos = dt;
        });
    }
    openVideoPage(video, username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const r = Object(_core_helpers_build_play_video_route__WEBPACK_IMPORTED_MODULE_3__["buildPlayVideoRoute"])(video, username);
            yield this.router.navigate([r.route], { queryParams: r.params });
        });
    }
    openChannelPage(channel, username) {
        this.router.navigate(['channels/show'], { queryParams: { username } });
    }
    getVideosByTag(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['videos'], { queryParams: { tag: name } });
        });
    }
}
ShowSavedVideosComponent.ɵfac = function ShowSavedVideosComponent_Factory(t) { return new (t || ShowSavedVideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_4__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_7__["ChannelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__["GetAuthUserPipe"])); };
ShowSavedVideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowSavedVideosComponent, selectors: [["app-show-saved-videos"]], decls: 1, vars: 1, consts: [["id", "videos-list", 4, "ngIf"], ["id", "videos-list"], [4, "ngIf"], ["class", "video-container flex-wrap", 4, "ngFor", "ngForOf"], [1, "video-container", "flex-wrap"], [1, "thumbnail"], [3, "src", "click"], [1, "duration"], [1, "details"], [1, "title"], [1, "shortened-details"], [1, "channel-name", 3, "click"], [1, "dot"], [1, "watchers-count"], [1, "upload-time"], [1, "shortened-description"], [1, "tags"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function ShowSavedVideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ShowSavedVideosComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userVideos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_10__["GetThumbPathPipe"], _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_11__["DateFromNowPipe"]], styles: [".filter-toggle-btn[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  background-color: unset;\n  display: flex;\n  align-items: center;\n  font-family: \"Muli-Bold\";\n  padding: 10px;\n}\n.filter-toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3Nob3ctc2F2ZWQtdmlkZW9zL0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXHZpZGVvc1xcc2hvdy12aWRlb3NcXHNob3ctdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlb3Mvc2hvdy1zYXZlZC12aWRlb3Mvc2hvdy1zYXZlZC12aWRlb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FDRko7QURJSTtFQUNJLGlCQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC92aWRlb3Mvc2hvdy1zYXZlZC12aWRlb3Mvc2hvdy1zYXZlZC12aWRlb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdtaXhpbnMnO1xyXG5cclxuLmZpbHRlci10b2dnbGUtYnRuIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi5maWx0ZXItdG9nZ2xlLWJ0biB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5maWx0ZXItdG9nZ2xlLWJ0biBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowSavedVideosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-show-saved-videos',
                templateUrl: './show-saved-videos.component.html',
                styleUrls: ['./show-saved-videos.component.scss']
            }]
    }], function () { return [{ type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_4__["VideoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"] }, { type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_7__["ChannelsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_8__["GetAuthUserPipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/videos/show-videos/show-playlists-list/show-playlists-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/videos/show-videos/show-playlists-list/show-playlists-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ShowPlaylistsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPlaylistsListComponent", function() { return ShowPlaylistsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipes/get-thumb-path.pipe */ "./src/app/shared/pipes/get-thumb-path.pipe.ts");







function ShowPlaylistsListComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowPlaylistsListComponent_div_0_ng_container_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const playlist_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.openPlaylistPage(playlist_r1, playlist_r1.videos[0].id); });
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
} if (rf & 2) {
    const playlist_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](playlist_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](playlist_r1.videos.length + (playlist_r1.videos.length === 1 ? " video" : " videos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 3, playlist_r1.thumbnail), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ShowPlaylistsListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowPlaylistsListComponent_div_0_ng_container_1_Template, 14, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playlist_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", playlist_r1.videos.length > 0);
} }
class ShowPlaylistsListComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    openPlaylistPage(playlist, firstVideoId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const route = 'videos/play';
            const params = { id: firstVideoId, playlist_id: playlist.id };
            yield this.router.navigate([route], { queryParams: params });
        });
    }
}
ShowPlaylistsListComponent.ɵfac = function ShowPlaylistsListComponent_Factory(t) { return new (t || ShowPlaylistsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ShowPlaylistsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowPlaylistsListComponent, selectors: [["app-show-playlists-list"]], inputs: { items: "items", authUser: "authUser" }, decls: 1, vars: 1, consts: [["class", "playlist-container", 4, "ngFor", "ngForOf"], [1, "playlist-container"], [4, "ngIf"], [1, "thumbnail-container", 3, "click"], [1, "thumbnail"], [1, "short-details"], [1, "name"], [1, "video-count"], [3, "src"], [1, "fake-bg", "thumbnail"], [1, "details"]], template: function ShowPlaylistsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ShowPlaylistsListComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items.playlists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_5__["GetThumbPathPipe"]], styles: [".playlist-container[_ngcontent-%COMP%] {\n  width: 432px;\n  display: flex;\n  margin-bottom: 30px;\n}\n.playlist-container[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.playlist-container[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  position: relative;\n}\n.playlist-container[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .short-details[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: white;\n}\n.playlist-container[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .short-details[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.playlist-container[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 249px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer;\n}\n@media screen and (max-width: 991px) {\n  .playlist-container[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 432px !important;\n    width: 100% !important;\n  }\n}\n.playlist-container[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]   .fake-bg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  background: rgba(1, 1, 1, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3Nob3ctdmlkZW9zL3Nob3ctcGxheWxpc3RzLWxpc3QvQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3ZpZGVvcy9zaG93LXZpZGVvcy9zaG93LXBsYXlsaXN0cy1saXN0L3Nob3ctcGxheWxpc3RzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEhJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQzdIUjtBRCtIUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQzdIWjtBRCtIWTtFQUNJLGtCQUFBO0FDN0hoQjtBRCtIZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQzdIcEI7QUQrSG9CO0VBQ0ksaUJBQUE7QUM3SHhCO0FEaUlnQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGVBQUE7QUMvSHBCO0FEZ0lvQjtFQUxKO0lBTVEsMkJBQUE7SUFDQSxzQkFBQTtFQzdIdEI7QUFDRjtBRGlJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsOEJBQUE7QUMvSGhCIiwiZmlsZSI6InNyYy9hcHAvdmlkZW9zL3Nob3ctdmlkZW9zL3Nob3ctcGxheWxpc3RzLWxpc3Qvc2hvdy1wbGF5bGlzdHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG5AbWl4aW4gcmVkQnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MXB4O1xyXG4gICAgYmFja2dyb3VuZDogJHJlZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk11bGktUmVndWxhclwiO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcblxyXG4vLyBQbGF5bGlzdCB2aWRlb3MgbW9kYWxcclxuQG1peGluIHZpZGVvSXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOEI1ODc7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hZGRlZCB7XHJcblxyXG4gICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICBzcGFuLmFkZGVkLXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjRweDtcclxuICAgICAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJBZGRlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNTNjNmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyNHB4IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNob3J0ZW5lZC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLnRhZ3Mge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFnSXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWl4aW4gaW5wdXRXcmFwIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgICAgICAgJi5zZWFyY2gge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODE4MTgxMjE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFnSXRlbSB7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgcGFkZGluZzogMnB4IDExcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0VFRUVFRTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBjb2xvcjogIzU0NTQ1NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vLyBQbGF5bGlzdCBpdGVtIGZvciAnVmlkZW9zJyBzZWN0aW9uXHJcbkBtaXhpbiBwbGF5bGlzdEl0ZW0ge1xyXG5cclxuICAgIC5wbGF5bGlzdC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA0MzJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAgIC50aHVtYm5haWwtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAuc2hvcnQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDlweDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MzJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZha2UtYmcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDEsIDEsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzdG9ja3NXYXRjaGxpc3Qge1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiLnBsYXlsaXN0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5wbGF5bGlzdC1jb250YWluZXIgLnRodW1ibmFpbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wbGF5bGlzdC1jb250YWluZXIgLnRodW1ibmFpbC1jb250YWluZXIgLnRodW1ibmFpbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wbGF5bGlzdC1jb250YWluZXIgLnRodW1ibmFpbC1jb250YWluZXIgLnRodW1ibmFpbCAuc2hvcnQtZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ucGxheWxpc3QtY29udGFpbmVyIC50aHVtYm5haWwtY29udGFpbmVyIC50aHVtYm5haWwgLnNob3J0LWRldGFpbHMgLm5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wbGF5bGlzdC1jb250YWluZXIgLnRodW1ibmFpbC1jb250YWluZXIgLnRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMjQ5cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAucGxheWxpc3QtY29udGFpbmVyIC50aHVtYm5haWwtY29udGFpbmVyIC50aHVtYm5haWwgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDQzMnB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuLnBsYXlsaXN0LWNvbnRhaW5lciAudGh1bWJuYWlsLWNvbnRhaW5lciAuZmFrZS1iZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDEsIDEsIDAuMik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowPlaylistsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-show-playlists-list',
                templateUrl: './show-playlists-list.component.html',
                styleUrls: ['./show-playlists-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['items']
        }], authUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['authUser']
        }] }); })();


/***/ }),

/***/ "./src/app/videos/show-videos/show-regular-list/show-regular-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/videos/show-videos/show-regular-list/show-regular-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ShowRegularListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowRegularListComponent", function() { return ShowRegularListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_helpers_build_play_video_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/helpers/build-play-video-route */ "./src/app/core/helpers/build-play-video-route.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pipes/get-thumb-path.pipe */ "./src/app/shared/pipes/get-thumb-path.pipe.ts");
/* harmony import */ var _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pipes/date-from-now.pipe */ "./src/app/shared/pipes/date-from-now.pipe.ts");










function ShowRegularListComponent_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Live now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ShowRegularListComponent_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "turned_in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Saved");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ShowRegularListComponent_div_1_li_27_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowRegularListComponent_div_1_li_27_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const tag_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.getVideosByTag(tag_r6.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r6.name);
} }
function ShowRegularListComponent_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ShowRegularListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowRegularListComponent_div_1_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const video_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.openVideoPage(video_r1, video_r1.user.username); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowRegularListComponent_div_1_Template_span_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const video_r1 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.openChannelPage(video_r1.user.channel, video_r1.user.username); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u00B7");
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
} if (rf & 2) {
    const video_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
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
} }
class ShowRegularListComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    openVideoPage(video, username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const r = Object(_core_helpers_build_play_video_route__WEBPACK_IMPORTED_MODULE_2__["buildPlayVideoRoute"])(video, username);
            yield this.router.navigate([r.route], { queryParams: r.params });
        });
    }
    openChannelPage(channel, username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['channels/show'], { queryParams: { username } });
        });
    }
    checkIfSavedByCurrentUser(video) {
        return video.users_vids.find(v => { var _a; return v.username === ((_a = this.authUser) === null || _a === void 0 ? void 0 : _a.username) && v.users_videos.saved; });
    }
    checkIfNewVideo(video) {
        const duration = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](moment__WEBPACK_IMPORTED_MODULE_3__().diff(video.created_at));
        return Math.floor(duration.asDays()) < 7;
    }
    getVideosByTag(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['videos'], { queryParams: { tag: name } });
        });
    }
}
ShowRegularListComponent.ɵfac = function ShowRegularListComponent_Factory(t) { return new (t || ShowRegularListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ShowRegularListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowRegularListComponent, selectors: [["app-show-regular-list"]], inputs: { items: "items", authUser: "authUser" }, decls: 2, vars: 1, consts: [["id", "regular-video-list-container"], ["class", "video-container flex-wrap", 4, "ngFor", "ngForOf"], [1, "video-container", "flex-wrap"], [1, "thumbnail"], [3, "src", "click"], ["class", "live-now", 4, "ngIf"], [1, "duration"], [1, "details"], [1, "title"], [1, "shortened-details"], [1, "channel-name", 3, "click"], [1, "dot"], [1, "watchers-count"], [1, "upload-time"], [1, "shortened-description"], ["class", "saved-video", 4, "ngIf"], [1, "tags"], [3, "click", 4, "ngFor", "ngForOf"], ["class", "is-new-video", 4, "ngIf"], [1, "live-now"], [1, "saved-video"], [3, "click"], [1, "is-new-video"], [1, "new"]], template: function ShowRegularListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowRegularListComponent_div_1_Template, 29, 15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items.videos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_7__["GetThumbPathPipe"], _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_8__["DateFromNowPipe"]], styles: ["#regular-video-list-container[_ngcontent-%COMP%]   .shortened-description[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 4;\n}\n#regular-video-list-container[_ngcontent-%COMP%]   .is-new-video[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%] {\n  background-color: #18B587;\n  color: white;\n  padding: 2px;\n}\n@media (max-width: 992px) {\n  #regular-video-list-container[_ngcontent-%COMP%]   .is-new-video[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n#regular-video-list-container[_ngcontent-%COMP%]   .channel-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.playlist-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 30px;\n}\n.playlist-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  position: relative;\n}\n.playlist-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  max-width: 310px;\n}\n@media screen and (max-width: 1022px) {\n  .playlist-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .playlist-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    max-width: 432px;\n    width: 100%;\n  }\n  .playlist-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    padding-left: 0;\n    margin-top: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3Nob3ctdmlkZW9zL3Nob3ctcmVndWxhci1saXN0L0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXHZpZGVvc1xcc2hvdy12aWRlb3NcXHNob3ctcmVndWxhci1saXN0XFxzaG93LXJlZ3VsYXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW9zL3Nob3ctdmlkZW9zL3Nob3ctcmVndWxhci1saXN0L3Nob3ctcmVndWxhci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0kscUJBQUE7QUNIUjtBRFFRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ05aO0FEVVE7RUFUSjtJQVVRLG1CQUFBO0VDUFY7QUFDRjtBRFVJO0VBQ0ksZUFBQTtBQ1JSO0FEWUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNUSjtBRFdJO0VBQ0ksa0JBQUE7QUNUUjtBRFlJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ1ZSO0FEYUk7RUFiSjtJQWNRLHNCQUFBO0VDVk47RURXTTtJQUNJLGdCQUFBO0lBQ0EsV0FBQTtFQ1RWO0VEV007SUFDSSxlQUFBO0lBQ0EsZUFBQTtFQ1RWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWRlb3Mvc2hvdy12aWRlb3Mvc2hvdy1yZWd1bGFyLWxpc3Qvc2hvdy1yZWd1bGFyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuI3JlZ3VsYXItdmlkZW8tbGlzdC1jb250YWluZXIge1xyXG4gICAgLnNob3J0ZW5lZC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiA0O1xyXG4gICAgfVxyXG5cclxuICAgIC5pcy1uZXctdmlkZW8ge1xyXG5cclxuICAgICAgICAubmV3IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4QjU4NztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGFubmVsLW5hbWUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnBsYXlsaXN0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjJweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDMycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIjcmVndWxhci12aWRlby1saXN0LWNvbnRhaW5lciAuc2hvcnRlbmVkLWRlc2NyaXB0aW9uIHtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiA0O1xufVxuI3JlZ3VsYXItdmlkZW8tbGlzdC1jb250YWluZXIgLmlzLW5ldy12aWRlbyAubmV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4QjU4NztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgI3JlZ3VsYXItdmlkZW8tbGlzdC1jb250YWluZXIgLmlzLW5ldy12aWRlbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuI3JlZ3VsYXItdmlkZW8tbGlzdC1jb250YWluZXIgLmNoYW5uZWwtbmFtZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBsYXlsaXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ucGxheWxpc3QtY29udGFpbmVyIC50aHVtYm5haWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGxheWxpc3QtY29udGFpbmVyIC5kZXRhaWxzIHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBtYXgtd2lkdGg6IDMxMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyMnB4KSB7XG4gIC5wbGF5bGlzdC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnBsYXlsaXN0LWNvbnRhaW5lciAudGh1bWJuYWlsIHtcbiAgICBtYXgtd2lkdGg6IDQzMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wbGF5bGlzdC1jb250YWluZXIgLmRldGFpbHMge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowRegularListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-show-regular-list',
                templateUrl: './show-regular-list.component.html',
                styleUrls: ['./show-regular-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['items']
        }], authUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['authUser']
        }] }); })();


/***/ }),

/***/ "./src/app/videos/show-videos/show-search-results/show-search-results.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/videos/show-videos/show-search-results/show-search-results.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ShowSearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSearchResultsComponent", function() { return ShowSearchResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_helpers_build_play_video_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/helpers/build-play-video-route */ "./src/app/core/helpers/build-play-video-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/subject.service */ "./src/app/core/services/subject.service.ts");
/* harmony import */ var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/channels.service */ "./src/app/core/services/channels.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pipes/get-thumb-path.pipe */ "./src/app/shared/pipes/get-thumb-path.pipe.ts");
/* harmony import */ var _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pipes/date-from-now.pipe */ "./src/app/shared/pipes/date-from-now.pipe.ts");










function ShowSearchResultsComponent_ng_container_1_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowSearchResultsComponent_ng_container_1_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.subscribeToChannel(channel_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("subscribed", ctx_r2.checkIfSubscribed(channel_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.checkIfSubscribed(channel_r1) ? "Subscribed" : "Subscribe", " ");
} }
function ShowSearchResultsComponent_ng_container_1_div_14_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r10.name);
} }
function ShowSearchResultsComponent_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowSearchResultsComponent_ng_container_1_div_14_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const video_r8 = ctx.$implicit; const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.openVideoPage(video_r8, channel_r1.user.username); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u00B7");
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
} if (rf & 2) {
    const video_r8 = ctx.$implicit;
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
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
} }
function ShowSearchResultsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowSearchResultsComponent_ng_container_1_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const channel_r1 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.openChannelPage(channel_r1, channel_r1.user == null ? null : channel_r1.user.username); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "getImgPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowSearchResultsComponent_ng_container_1_Template_p_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const channel_r1 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.openChannelPage(channel_r1, channel_r1 == null ? null : channel_r1.user == null ? null : channel_r1.user.username); });
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
} if (rf & 2) {
    const channel_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
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
} }
class ShowSearchResultsComponent {
    constructor(router, subject, channelsService) {
        this.router = router;
        this.subject = subject;
        this.channelsService = channelsService;
    }
    ngOnInit() {
    }
    openChannelPage(channel, username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['channels/show'], { queryParams: { username } });
        });
    }
    openVideoPage(video, username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const r = Object(_core_helpers_build_play_video_route__WEBPACK_IMPORTED_MODULE_2__["buildPlayVideoRoute"])(video, username);
            yield this.router.navigate([r.route], { queryParams: r.params });
        });
    }
    subscribeToChannel(channel) {
        this.channelsService.subscribeToChannel({ user_id: this.authUser.id, channel_id: channel.id }).subscribe(dt => {
            this.channelsService.getUserChannelSubscriptions({ user_id: this.authUser.id }).subscribe(d => {
                this.subject.setUserSubscriptions(d);
                if (this.checkIfSubscribed(channel)) {
                    channel.subscribers = channel.subscribers.filter(s => { var _a; return s.id !== ((_a = this.authUser) === null || _a === void 0 ? void 0 : _a.id); });
                }
                else {
                    channel.subscribers.push(this.authUser);
                }
                // console.log(channel.subscribers)
                // channel.subscribers = channel.subscribers.filter(s => s.id !== this.authUser?.id).concat([this.authUser]);
                // console.log(channel.subscribers)
                // this.searchChannelsVideos({search: this.search, filters: this.filters});
            });
        });
    }
    checkIfSubscribed(channel) {
        return channel.subscribers.find(s => { var _a; return s.id === ((_a = this.authUser) === null || _a === void 0 ? void 0 : _a.id); });
    }
    getDesc(d) {
        return d === null || d === void 0 ? void 0 : d.replace(/<br\s*[\/]?>/gi, '\n');
    }
}
ShowSearchResultsComponent.ɵfac = function ShowSearchResultsComponent_Factory(t) { return new (t || ShowSearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__["ChannelsService"])); };
ShowSearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowSearchResultsComponent, selectors: [["app-show-search-results"]], inputs: { channelsVideos: "channelsVideos", authUser: "authUser" }, decls: 2, vars: 1, consts: [["id", "search-results-container"], [4, "ngFor", "ngForOf"], [1, "channel-item"], [1, "thumbnail"], [1, "avatar", 3, "src", "click"], [1, "info"], [1, "name", 3, "click"], [1, "shortened-details"], [1, "video-count"], ["class", "btn subscribe-to-channel-btn", 3, "subscribed", "click", 4, "ngIf"], ["class", "video-container", 4, "ngFor", "ngForOf"], [1, "btn", "subscribe-to-channel-btn", 3, "click"], [1, "video-container"], [3, "src", "click"], [1, "duration"], [1, "details"], [1, "title"], [1, "channel-name"], [1, "dot"], [1, "watchers-count"], [1, "upload-time"], [1, "shortened-description"], [1, "tags"]], template: function ShowSearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowSearchResultsComponent_ng_container_1_Template, 15, 9, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.channelsVideos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_7__["GetThumbPathPipe"], _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_8__["DateFromNowPipe"]], styles: ["#my-subscriptions[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #18B587;\n}\n\n.channel-item[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n}\n\n.channel-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 240px !important;\n  height: 240px;\n}\n\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  min-width: 250px;\n  max-width: 350px;\n}\n\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #545454;\n  font-size: 24px;\n  font-family: \"Muli-Bold\";\n  cursor: pointer;\n}\n\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  margin-left: 26px;\n  margin-top: -3px;\n}\n\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Muli-Light\";\n}\n\n.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%], .channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .videos-count[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #818181;\n}\n\n#search-results-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 432px;\n  height: 243px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#search-results-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 432px;\n}\n\n#search-results-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  max-width: 310px;\n}\n\n@media screen and (max-width: 1022px) {\n  #search-results-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  #search-results-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    max-width: 432px;\n    width: 100%;\n  }\n  #search-results-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    padding-left: 0;\n    margin-top: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3Nob3ctdmlkZW9zL3Nob3ctc2VhcmNoLXJlc3VsdHMvQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcY2hhbm5lbHNcXHNob3ctc3Vic2NyaXB0aW9uc1xcc2hvdy1zdWJzY3JpcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlb3Mvc2hvdy12aWRlb3Mvc2hvdy1zZWFyY2gtcmVzdWx0cy9DOlxccHJvamVjdHNcXHRyYWRpbmdcXGZyb250ZW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdmlkZW9zL3Nob3ctdmlkZW9zL3Nob3ctc2VhcmNoLXJlc3VsdHMvc2hvdy1zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW9zL3Nob3ctdmlkZW9zL3Nob3ctc2VhcmNoLXJlc3VsdHMvQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcdmlkZW9zXFxzaG93LXZpZGVvc1xcc2hvdy1zZWFyY2gtcmVzdWx0c1xcc2hvdy1zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFBO0VBQ0EsY0NKSTtBQ0VSOztBRk9BO0VBQ0ksYUFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtBRUxKOztBRk9JO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0FFTFI7O0FGUUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRU5SOztBRlFRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUVOWjs7QUZTUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUVQWjs7QUZVUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBRVJaOztBRllRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUVWWjs7QUMvQkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURrQ1I7O0FDaENRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FEa0NaOztBQzlCSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QURnQ1I7O0FDN0JJO0VBcEJKO0lBcUJRLHNCQUFBO0VEZ0NOO0VDL0JNO0lBQ0ksZ0JBQUE7SUFDQSxXQUFBO0VEaUNWO0VDL0JNO0lBQ0ksZUFBQTtJQUNBLGVBQUE7RURpQ1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy9zaG93LXZpZGVvcy9zaG93LXNlYXJjaC1yZXN1bHRzL3Nob3ctc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdtaXhpbnMnO1xyXG5cclxuI215LXN1YnNjcmlwdGlvbnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICRncmVlbjtcclxufVxyXG5cclxuXHJcblxyXG4uY2hhbm5lbC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvL3dpZHRoOiA5MzZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgICAgd2lkdGg6IDI0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ011bGktQm9sZCc7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kb3Qge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1MaWdodCc7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLndhdGNoZXJzLWNvdW50LCAudmlkZW9zLWNvdW50IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzgxODE4MTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIkcmVkOiAjRjUzQzZGO1xyXG4kZ3JlZW46ICMxOEI1ODc7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4iLCIjbXktc3Vic2NyaXB0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxOEI1ODc7XG59XG5cbi5jaGFubmVsLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY2hhbm5lbC1pdGVtIC5hdmF0YXIge1xuICB3aWR0aDogMjQwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyNDBweDtcbn1cbi5jaGFubmVsLWl0ZW0gLmluZm8ge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIG1heC13aWR0aDogMzUwcHg7XG59XG4uY2hhbm5lbC1pdGVtIC5pbmZvIC5uYW1lIHtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jaGFubmVsLWl0ZW0gLmluZm8gLmRvdCB7XG4gIG1hcmdpbi1sZWZ0OiAyNnB4O1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuLmNoYW5uZWwtaXRlbSAuaW5mbyBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJNdWxpLUxpZ2h0XCI7XG59XG4uY2hhbm5lbC1pdGVtIC5pbmZvIC53YXRjaGVycy1jb3VudCwgLmNoYW5uZWwtaXRlbSAuaW5mbyAudmlkZW9zLWNvdW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzgxODE4MTtcbn1cblxuI3NlYXJjaC1yZXN1bHRzLWNvbnRhaW5lciAudGh1bWJuYWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDMycHg7XG4gIGhlaWdodDogMjQzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI3NlYXJjaC1yZXN1bHRzLWNvbnRhaW5lciAudGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQzMnB4O1xufVxuI3NlYXJjaC1yZXN1bHRzLWNvbnRhaW5lciAuaW5mbyB7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgbWF4LXdpZHRoOiAzMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjJweCkge1xuICAjc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gICNzZWFyY2gtcmVzdWx0cy1jb250YWluZXIgLnRodW1ibmFpbCB7XG4gICAgbWF4LXdpZHRoOiA0MzJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyIC5pbmZvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAnbWl4aW5zJztcclxuQGltcG9ydCBcIi4uLy4uLy4uL2NoYW5uZWxzL3Nob3ctc3Vic2NyaXB0aW9ucy9zaG93LXN1YnNjcmlwdGlvbnMuY29tcG9uZW50XCI7XHJcblxyXG4jc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyIHtcclxuICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNDMycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNDNweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQzMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMzEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyMnB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MzJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowSearchResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-show-search-results',
                templateUrl: './show-search-results.component.html',
                styleUrls: ['./show-search-results.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"] }, { type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__["ChannelsService"] }]; }, { channelsVideos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['channelsVideos']
        }], authUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['authUser']
        }] }); })();


/***/ }),

/***/ "./src/app/videos/show-videos/show-videos.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/videos/show-videos/show-videos.component.ts ***!
  \*************************************************************/
/*! exports provided: ShowVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowVideosComponent", function() { return ShowVideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/global */ "./src/app/core/constants/global.ts");
/* harmony import */ var _core_services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/video.service */ "./src/app/core/services/video.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/subject.service */ "./src/app/core/services/subject.service.ts");
/* harmony import */ var _core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/channels.service */ "./src/app/core/services/channels.service.ts");
/* harmony import */ var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/pipes/get-auth-user.pipe */ "./src/app/shared/pipes/get-auth-user.pipe.ts");
/* harmony import */ var _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/pipes/filter-out-falsy-values-from-object.pipe */ "./src/app/shared/pipes/filter-out-falsy-values-from-object.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/video-filters/video-filters.component */ "./src/app/shared/components/video-filters/video-filters.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _show_regular_list_show_regular_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./show-regular-list/show-regular-list.component */ "./src/app/videos/show-videos/show-regular-list/show-regular-list.component.ts");
/* harmony import */ var _show_playlists_list_show_playlists_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./show-playlists-list/show-playlists-list.component */ "./src/app/videos/show-videos/show-playlists-list/show-playlists-list.component.ts");
/* harmony import */ var _show_search_results_show_search_results_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./show-search-results/show-search-results.component */ "./src/app/videos/show-videos/show-search-results/show-search-results.component.ts");
















function ShowVideosComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowVideosComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showFilters = !ctx_r6.showFilters; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "tune");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowVideosComponent_app_video_filters_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-video-filters", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function ShowVideosComponent_app_video_filters_2_Template_app_video_filters_filter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.getFilteredList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowVideosComponent_mat_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 20);
} }
function ShowVideosComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-show-regular-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-show-playlists-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r3.items)("authUser", ctx_r3.authUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r3.items)("authUser", ctx_r3.authUser);
} }
function ShowVideosComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-show-search-results", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("channelsVideos", ctx_r4.channelsVideos)("authUser", ctx_r4.authUser);
} }
function ShowVideosComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No results found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ShowVideosComponent {
    constructor(videoService, router, subject, channelsService, route, getAuthUser, getExactParams) {
        this.videoService = videoService;
        this.router = router;
        this.subject = subject;
        this.channelsService = channelsService;
        this.route = route;
        this.getAuthUser = getAuthUser;
        this.getExactParams = getExactParams;
        this.items = { videos: [], playlists: [] };
        this.channelsVideos = [];
        this.apiUrl = _core_constants_global__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
        this.showTrending = false;
        this.showFilters = false;
        this.filters = {};
        this.filterStatus = 'idle';
        this.subscriptions = [];
        this.loadingVideos = false;
        this.authUser = this.getAuthUser.transform();
        this.subscriptions.push(this.route.queryParams.subscribe(d => {
            var _a, _b;
            this.search = (_a = this.route.snapshot.queryParams) === null || _a === void 0 ? void 0 : _a.search;
            this.showTrending = this.router.url.includes('trending');
            this.selectedTag = (_b = this.route.snapshot.queryParams) === null || _b === void 0 ? void 0 : _b.tag;
            if (this.search) {
                this.searchChannelsVideos({ search: this.search, filters: this.filters });
            }
            else {
                this.getVideosList({ search: this.search, filters: this.filters, tag: this.selectedTag });
            }
        }));
    }
    ngOnInit() {
    }
    getFilteredList(filters = {}) {
        this.filters = filters;
        this.filterStatus = 'applied';
        if (this.search) {
            this.searchChannelsVideos({ search: this.search, filters: this.filters });
        }
        else {
            this.getVideosList({ filters: this.filters });
        }
    }
    getVideosList(params) {
        params = this.getExactParams.transform(params);
        this.videoService.get(Object.assign({ withPlaylists: !this.showTrending ? 1 : 0, trending: this.showTrending ? 1 : 0 }, params)).subscribe(dt => {
            this.items = dt;
        });
    }
    searchChannelsVideos(params) {
        var _a;
        params = this.getExactParams.transform(params);
        this.loadingVideos = true;
        this.channelsService.searchWithVideos(Object.assign({ user_id: (_a = this.authUser) === null || _a === void 0 ? void 0 : _a.id }, params)).subscribe(dt => {
            this.loadingVideos = false;
            this.channelsVideos = dt;
        });
    }
    isFiltersShown() {
        var _a;
        return ((_a = this.items.videos) === null || _a === void 0 ? void 0 : _a.length) > 0 ||
            (this.search && this.channelsVideos.find(v => v.videos.length > 0))
            || this.filterStatus === 'applied' && !this.loadingVideos;
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
ShowVideosComponent.ɵfac = function ShowVideosComponent_Factory(t) { return new (t || ShowVideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__["ChannelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterOutFalsyValuesFromObjectPipe"])); };
ShowVideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowVideosComponent, selectors: [["app-show-videos"]], decls: 8, vars: 6, consts: [[1, "all-videos"], ["class", "filter-toggle-btn", 3, "click", 4, "ngIf"], [3, "filter", 4, "ngIf"], ["id", "videos-list"], [3, "diameter", 4, "ngIf"], [4, "ngIf"], [1, "filter-toggle-btn", 3, "click"], [3, "filter"], [3, "diameter"], [3, "items", "authUser"], [3, "channelsVideos", "authUser"], [1, "error"]], template: function ShowVideosComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _shared_components_video_filters_video_filters_component__WEBPACK_IMPORTED_MODULE_10__["VideoFiltersComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _show_regular_list_show_regular_list_component__WEBPACK_IMPORTED_MODULE_12__["ShowRegularListComponent"], _show_playlists_list_show_playlists_list_component__WEBPACK_IMPORTED_MODULE_13__["ShowPlaylistsListComponent"], _show_search_results_show_search_results_component__WEBPACK_IMPORTED_MODULE_14__["ShowSearchResultsComponent"]], styles: [".filter-toggle-btn[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  background-color: unset;\n  display: flex;\n  align-items: center;\n  font-family: \"Muli-Bold\";\n  padding: 10px;\n}\n.filter-toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3Nob3ctdmlkZW9zL0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXHZpZGVvc1xcc2hvdy12aWRlb3NcXHNob3ctdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlb3Mvc2hvdy12aWRlb3Mvc2hvdy12aWRlb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FDRko7QURJSTtFQUNJLGlCQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC92aWRlb3Mvc2hvdy12aWRlb3Mvc2hvdy12aWRlb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdtaXhpbnMnO1xyXG5cclxuLmZpbHRlci10b2dnbGUtYnRuIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1Cb2xkXCI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi5maWx0ZXItdG9nZ2xlLWJ0biB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5maWx0ZXItdG9nZ2xlLWJ0biBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowVideosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-videos',
                templateUrl: './show-videos.component.html',
                styleUrls: ['./show-videos.component.scss']
            }]
    }], function () { return [{ type: _core_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"] }, { type: _core_services_channels_service__WEBPACK_IMPORTED_MODULE_5__["ChannelsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__["GetAuthUserPipe"] }, { type: _shared_pipes_filter_out_falsy_values_from_object_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterOutFalsyValuesFromObjectPipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/videos/videos-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/videos/videos-routing.module.ts ***!
  \*************************************************/
/*! exports provided: VideosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosRoutingModule", function() { return VideosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_videos_show_videos_show_videos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/videos/show-videos/show-videos.component */ "./src/app/videos/show-videos/show-videos.component.ts");
/* harmony import */ var _app_videos_play_video_play_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/videos/play-video/play-video.component */ "./src/app/videos/play-video/play-video.component.ts");
/* harmony import */ var _app_videos_show_saved_videos_show_saved_videos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/videos/show-saved-videos/show-saved-videos.component */ "./src/app/videos/show-saved-videos/show-saved-videos.component.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");








const routes = [
    {
        path: '',
        component: _app_videos_show_videos_show_videos_component__WEBPACK_IMPORTED_MODULE_2__["ShowVideosComponent"],
        pathMatch: 'full',
        data: {
            title: 'Videos',
        }
    },
    {
        path: 'play',
        component: _app_videos_play_video_play_video_component__WEBPACK_IMPORTED_MODULE_3__["PlayVideoComponent"],
        data: {
            title: 'Play Video',
        }
    },
    {
        path: 'saved',
        component: _app_videos_show_saved_videos_show_saved_videos_component__WEBPACK_IMPORTED_MODULE_4__["ShowSavedVideosComponent"],
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: {
            title: 'Saved Videos',
        }
    }
];
class VideosRoutingModule {
}
VideosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideosRoutingModule });
VideosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideosRoutingModule_Factory(t) { return new (t || VideosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/videos/videos.module.ts":
/*!*****************************************!*\
  !*** ./src/app/videos/videos.module.ts ***!
  \*****************************************/
/*! exports provided: VideosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosModule", function() { return VideosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _videos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videos-routing.module */ "./src/app/videos/videos-routing.module.ts");
/* harmony import */ var _show_videos_show_videos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-videos/show-videos.component */ "./src/app/videos/show-videos/show-videos.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _videos_play_video_play_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../videos/play-video/play-video.component */ "./src/app/videos/play-video/play-video.component.ts");
/* harmony import */ var _show_saved_videos_show_saved_videos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-saved-videos/show-saved-videos.component */ "./src/app/videos/show-saved-videos/show-saved-videos.component.ts");
/* harmony import */ var _play_video_video_suggestions_video_suggestions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./play-video/video-suggestions/video-suggestions.component */ "./src/app/videos/play-video/video-suggestions/video-suggestions.component.ts");
/* harmony import */ var _play_video_video_details_form_video_details_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./play-video/video-details-form/video-details-form.component */ "./src/app/videos/play-video/video-details-form/video-details-form.component.ts");
/* harmony import */ var _show_videos_show_regular_list_show_regular_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-videos/show-regular-list/show-regular-list.component */ "./src/app/videos/show-videos/show-regular-list/show-regular-list.component.ts");
/* harmony import */ var _show_videos_show_search_results_show_search_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./show-videos/show-search-results/show-search-results.component */ "./src/app/videos/show-videos/show-search-results/show-search-results.component.ts");
/* harmony import */ var _show_videos_show_playlists_list_show_playlists_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./show-videos/show-playlists-list/show-playlists-list.component */ "./src/app/videos/show-videos/show-playlists-list/show-playlists-list.component.ts");













class VideosModule {
}
VideosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideosModule });
VideosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideosModule_Factory(t) { return new (t || VideosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _videos_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideosRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideosModule, { declarations: [_show_videos_show_videos_component__WEBPACK_IMPORTED_MODULE_3__["ShowVideosComponent"],
        _videos_play_video_play_video_component__WEBPACK_IMPORTED_MODULE_5__["PlayVideoComponent"],
        _show_saved_videos_show_saved_videos_component__WEBPACK_IMPORTED_MODULE_6__["ShowSavedVideosComponent"],
        _play_video_video_suggestions_video_suggestions_component__WEBPACK_IMPORTED_MODULE_7__["VideoSuggestionsComponent"],
        _play_video_video_details_form_video_details_form_component__WEBPACK_IMPORTED_MODULE_8__["VideoDetailsFormComponent"],
        _show_videos_show_regular_list_show_regular_list_component__WEBPACK_IMPORTED_MODULE_9__["ShowRegularListComponent"],
        _show_videos_show_search_results_show_search_results_component__WEBPACK_IMPORTED_MODULE_10__["ShowSearchResultsComponent"],
        _show_videos_show_playlists_list_show_playlists_list_component__WEBPACK_IMPORTED_MODULE_11__["ShowPlaylistsListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _videos_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideosRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _show_videos_show_videos_component__WEBPACK_IMPORTED_MODULE_3__["ShowVideosComponent"],
                    _videos_play_video_play_video_component__WEBPACK_IMPORTED_MODULE_5__["PlayVideoComponent"],
                    _show_saved_videos_show_saved_videos_component__WEBPACK_IMPORTED_MODULE_6__["ShowSavedVideosComponent"],
                    _play_video_video_suggestions_video_suggestions_component__WEBPACK_IMPORTED_MODULE_7__["VideoSuggestionsComponent"],
                    _play_video_video_details_form_video_details_form_component__WEBPACK_IMPORTED_MODULE_8__["VideoDetailsFormComponent"],
                    _show_videos_show_regular_list_show_regular_list_component__WEBPACK_IMPORTED_MODULE_9__["ShowRegularListComponent"],
                    _show_videos_show_search_results_show_search_results_component__WEBPACK_IMPORTED_MODULE_10__["ShowSearchResultsComponent"],
                    _show_videos_show_playlists_list_show_playlists_list_component__WEBPACK_IMPORTED_MODULE_11__["ShowPlaylistsListComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _videos_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideosRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=videos-videos-module-es2015.js.map