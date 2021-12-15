function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"], {
  /***/
  "./src/app/chat/chat-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/chat/chat-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: ChatRoutingModule */

  /***/
  function srcAppChatChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function () {
      return ChatRoutingModule;
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


    var _app_chat_show_chatrooms_show_chatrooms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/chat/show-chatrooms/show-chatrooms.component */
    "./src/app/chat/show-chatrooms/show-chatrooms.component.ts");
    /* harmony import */


    var _app_chat_show_messages_show_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/chat/show-messages/show-messages.component */
    "./src/app/chat/show-messages/show-messages.component.ts");

    var routes = [{
      path: 'rooms',
      component: _app_chat_show_chatrooms_show_chatrooms_component__WEBPACK_IMPORTED_MODULE_2__["ShowChatroomsComponent"],
      data: {
        title: 'Chat rooms'
      }
    }, {
      path: 'messages',
      component: _app_chat_show_messages_show_messages_component__WEBPACK_IMPORTED_MODULE_3__["ShowMessagesComponent"],
      data: {
        title: 'Chat'
      }
    }];

    var ChatRoutingModule = function ChatRoutingModule() {
      _classCallCheck(this, ChatRoutingModule);
    };

    ChatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChatRoutingModule
    });
    ChatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChatRoutingModule_Factory(t) {
        return new (t || ChatRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatRoutingModule, [{
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
  "./src/app/chat/chat.module.ts":
  /*!*************************************!*\
    !*** ./src/app/chat/chat.module.ts ***!
    \*************************************/

  /*! exports provided: ChatModule */

  /***/
  function srcAppChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatModule", function () {
      return ChatModule;
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


    var _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chat-routing.module */
    "./src/app/chat/chat-routing.module.ts");
    /* harmony import */


    var _show_chatrooms_show_chatrooms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./show-chatrooms/show-chatrooms.component */
    "./src/app/chat/show-chatrooms/show-chatrooms.component.ts");
    /* harmony import */


    var _show_messages_show_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./show-messages/show-messages.component */
    "./src/app/chat/show-messages/show-messages.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _show_messages_direct_chat_direct_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./show-messages/direct-chat/direct-chat.component */
    "./src/app/chat/show-messages/direct-chat/direct-chat.component.ts");
    /* harmony import */


    var _show_messages_group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./show-messages/group-chat/group-chat.component */
    "./src/app/chat/show-messages/group-chat/group-chat.component.ts");

    var ChatModule = function ChatModule() {
      _classCallCheck(this, ChatModule);
    };

    ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChatModule
    });
    ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChatModule_Factory(t) {
        return new (t || ChatModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatModule, {
        declarations: [_show_chatrooms_show_chatrooms_component__WEBPACK_IMPORTED_MODULE_3__["ShowChatroomsComponent"], _show_messages_show_messages_component__WEBPACK_IMPORTED_MODULE_4__["ShowMessagesComponent"], _show_messages_direct_chat_direct_chat_component__WEBPACK_IMPORTED_MODULE_6__["DirectChatComponent"], _show_messages_group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_7__["GroupChatComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_show_chatrooms_show_chatrooms_component__WEBPACK_IMPORTED_MODULE_3__["ShowChatroomsComponent"], _show_messages_show_messages_component__WEBPACK_IMPORTED_MODULE_4__["ShowMessagesComponent"], _show_messages_direct_chat_direct_chat_component__WEBPACK_IMPORTED_MODULE_6__["DirectChatComponent"], _show_messages_group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_7__["GroupChatComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/chat/show-chatrooms/show-chatrooms.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/chat/show-chatrooms/show-chatrooms.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ShowChatroomsComponent */

  /***/
  function srcAppChatShowChatroomsShowChatroomsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowChatroomsComponent", function () {
      return ShowChatroomsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ShowChatroomsComponent = /*#__PURE__*/function () {
      function ShowChatroomsComponent() {
        _classCallCheck(this, ShowChatroomsComponent);
      }

      _createClass(ShowChatroomsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShowChatroomsComponent;
    }();

    ShowChatroomsComponent.ɵfac = function ShowChatroomsComponent_Factory(t) {
      return new (t || ShowChatroomsComponent)();
    };

    ShowChatroomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowChatroomsComponent,
      selectors: [["app-show-chatrooms"]],
      decls: 194,
      vars: 0,
      consts: [[1, "chatrooms-list"], [1, "create-post"], [1, "img"], ["src", "assets/img/item-4.png", "alt", ""], [1, "select"], ["name", "", "id", ""], ["value", ""], [1, "input"], ["placeholder", "Title", "type", "text"], [1, "add-photo"], ["type", "file"], [1, "material-icons"], [1, "btn"], [1, "post"], [1, "categories"], [1, "active"], [1, "search"], ["placeholder", "Search", "type", "text"], [1, "chatrooms-items"], [1, "item"], [1, "posted"], [1, "info"], [1, "left-wrap"], [1, "voting-container"], [1, "vote-up-btn", "active"], [1, "vote-count"], [1, "vote-down-btn"], [1, "right-wrap"], ["src", "assets/img/jp-valeryunsplash.png", "alt", ""], [1, "post-menu"], [1, "menu"], ["href", ""], [1, "dotes"]],
      template: function ShowChatroomsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chat Rooms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Choose community");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Add Photo or Video ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "whatshot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Hot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "new_releases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "trending_up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "new_releases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Best of the week");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Posted by");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "u/alotasalad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "4 minutes ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "50k");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "This is my friends loss but to make matters even worse he borrowed the money from his Nigerian boss and yolod everything on fds otw up and down did I forget to mention that 4K in the the account right now is also his bosses money \uD83D\uDCB0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "chat_bubble");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Posted by");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "u/alotasalad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "4 minutes ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "50k");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "This is my friends loss but to make matters even worse he borrowed the money from his Nigerian boss and yolod everything on fds otw up and down did I forget to mention that 4K in the the account right now is also his bosses money \uD83D\uDCB0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "chat_bubble");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Posted by");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "u/alotasalad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "4 minutes ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "50k");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "This is my friends loss but to make matters even worse he borrowed the money from his Nigerian boss and yolod everything on fds otw up and down did I forget to mention that 4K in the the account right now is also his bosses money \uD83D\uDCB0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "chat_bubble");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Posted by");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "u/alotasalad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "4 minutes ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "50k");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "This is my friends loss but to make matters even worse he borrowed the money from his Nigerian boss and yolod everything on fds otw up and down did I forget to mention that 4K in the the account right now is also his bosses money \uD83D\uDCB0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "chat_bubble");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".categories[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 10px;\n  flex-wrap: wrap;\n  border-bottom: 0.5px solid #E2E2E2;\n  margin-bottom: 24px;\n}\n\n.categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 2px;\n  margin-bottom: 8px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 22px;\n  border-radius: 11px;\n  padding: 2px 11px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #EEEEEE;\n  transition: 0.3s ease-in-out;\n  color: #545454 !important;\n  font-size: 14px;\n  font-family: \"Muli-Regular\";\n  cursor: pointer;\n}\n\n.categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #F53C6F;\n  color: white !important;\n  cursor: pointer;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #18B587;\n  font-weight: bold;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%] {\n  margin: 32px 0;\n  padding: 16px 24px 24px;\n  background: #F5F5F5;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #545454;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 240px;\n  padding: 8px 12px;\n  border: 0;\n  color: #545454;\n  outline: none;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 14px;\n  border: 0;\n  color: #545454;\n  outline: none;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .add-photo[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  color: #C9C9C9;\n  font-size: 16px;\n  font-weight: bold;\n  transition: all 0.1s ease;\n  cursor: pointer;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .add-photo[_ngcontent-%COMP%]:hover {\n  color: #18B587;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .add-photo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .add-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 12px;\n  padding: 0;\n  cursor: auto;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 24px;\n  background: #C9C9C9;\n  color: #ffffff;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #18B587;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 24px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 48px 12px 16px;\n  border: 0;\n  background: #81818121;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #545454;\n  cursor: pointer;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding: 0;\n  border: 0;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 8px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  padding: 12px;\n  background: #F5F5F5;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #545454;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  color: #18B587;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 16px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  background: transparent;\n  color: #c9c9c9;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button.vote-up-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button.vote-down-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #18B587;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   .vote-count[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  text-align: center;\n  font-size: 12px;\n  color: #545454;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0 36px 4px 12px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #545454;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 16px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n  color: #545454;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 40px;\n  display: flex;\n  text-decoration: none;\n  color: #545454;\n  transition: all 0.1s ease;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #18B587;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .dotes[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9zaG93LWNoYXRyb29tcy9DOlxccHJvamVjdHNcXG1ldGx0dlxcZnJvbnRlbmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcY2F0ZWdvcmllcy5zY3NzIiwic3JjL2FwcC9jaGF0L3Nob3ctY2hhdHJvb21zL3Nob3ctY2hhdHJvb21zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGF0L3Nob3ctY2hhdHJvb21zL0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NoYXQvc2hvdy1jaGF0cm9vbXMvQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXBwXFxjaGF0XFxzaG93LWNoYXRyb29tc1xcc2hvdy1jaGF0cm9vbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0FKOztBREdBO0VFNEdJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FEM0dKOztBRFJBOztFQUVJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDV0o7O0FFaENJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRm1DUjs7QUVoQ0k7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRmtDUjs7QUVoQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUZrQ1o7O0FFaENZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUZrQ2hCOztBRS9CWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRmlDaEI7O0FFN0JRO0VBQ0ksZ0JBQUE7QUYrQlo7O0FFN0JZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBRitCaEI7O0FFM0JRO0VBQ0ksZ0JBQUE7QUY2Qlo7O0FFM0JZO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FGNkJoQjs7QUV6QlE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUYyQlo7O0FFekJZO0VBQ0ksY0FBQTtBRjJCaEI7O0FFeEJZO0VBQ0ksaUJBQUE7QUYwQmhCOztBRXZCWTtFQUNJLGFBQUE7QUZ5QmhCOztBRXJCUTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUZ1Qlo7O0FFckJZO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUZ1QmhCOztBRXJCZ0I7RUFDSSxtQkFBQTtBRnVCcEI7O0FFakJJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBRm1CUjs7QUVqQlE7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUZtQlo7O0FFaEJRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUZrQlo7O0FFZEk7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FGZ0JSOztBRWRRO0VBQ0kscUJBQUE7QUZnQlo7O0FFYlE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUZlWjs7QUVWUTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FGWVo7O0FFVlk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUZZaEI7O0FFVmdCO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FGWXBCOztBRVZvQjtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBRll4Qjs7QUVQWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBRlNoQjs7QUVOb0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUZReEI7O0FFTndCO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBRlE1Qjs7QUVMZ0M7RUFDSSx5QkFBQTtBRk9wQzs7QUVGZ0M7RUFDSSx3QkFBQTtBRklwQzs7QUVBNEI7RUFDSSxjQUFBO0FGRWhDOztBRUM0QjtFQUNJLGVBQUE7QUZDaEM7O0FFR3dCO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUZENUI7O0FFTWdCO0VBQ0ksT0FBQTtFQUNBLHdCQUFBO0FGSnBCOztBRU1vQjtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRkp4Qjs7QUVPb0I7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUZMeEI7O0FFUW9CO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FGTnhCOztBRVF3QjtFQUNJLGFBQUE7QUZONUI7O0FFUTRCO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUZOaEM7O0FFUWdDO0VBQ0ksY0FBQTtBRk5wQzs7QUVTZ0M7RUFDSSxrQkFBQTtBRlBwQzs7QUVZd0I7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBRlY1QiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvc2hvdy1jaGF0cm9vbXMvc2hvdy1jaGF0cm9vbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xyXG4uY2F0ZWdvcmllcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjRTJFMkUyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMgbGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzIGxpIGEge1xyXG4gICAgQGluY2x1ZGUgdGFnSXRlbTtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMgbGkgYS5hY3RpdmUsXHJcbi5jYXRlZ29yaWVzIGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0Y1M0M2RjtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi5jYXRlZ29yaWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI0UyRTJFMjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmNhdGVnb3JpZXMgbGkge1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5jYXRlZ29yaWVzIGxpIGEge1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIHBhZGRpbmc6IDJweCAxMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0VFRUVFRTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICM1NDU0NTQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJNdWxpLVJlZ3VsYXJcIjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2F0ZWdvcmllcyBsaSBhLmFjdGl2ZSxcbi5jYXRlZ29yaWVzIGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRjUzQzZGO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hhdHJvb21zLWxpc3QgaDEge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiAjMThCNTg3O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY3JlYXRlLXBvc3Qge1xuICBtYXJnaW46IDMycHggMDtcbiAgcGFkZGluZzogMTZweCAyNHB4IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNyZWF0ZS1wb3N0IC5pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNoYXRyb29tcy1saXN0IC5jcmVhdGUtcG9zdCAuaW1nIGltZyB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNyZWF0ZS1wb3N0IC5pbWcgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzU0NTQ1NDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY3JlYXRlLXBvc3QgLnNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNyZWF0ZS1wb3N0IC5zZWxlY3Qgc2VsZWN0IHtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNyZWF0ZS1wb3N0IC5pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNyZWF0ZS1wb3N0IC5pbnB1dCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY3JlYXRlLXBvc3QgLmFkZC1waG90byB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI0M5QzlDOTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNoYXRyb29tcy1saXN0IC5jcmVhdGUtcG9zdCAuYWRkLXBob3RvOmhvdmVyIHtcbiAgY29sb3I6ICMxOEI1ODc7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNyZWF0ZS1wb3N0IC5hZGQtcGhvdG8gc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmNoYXRyb29tcy1saXN0IC5jcmVhdGUtcG9zdCAuYWRkLXBob3RvIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY3JlYXRlLXBvc3QgLmJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogYXV0bztcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY3JlYXRlLXBvc3QgLmJ0biBidXR0b24ge1xuICBwYWRkaW5nOiA2cHggMjRweDtcbiAgYmFja2dyb3VuZDogI0M5QzlDOTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNyZWF0ZS1wb3N0IC5idG4gYnV0dG9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxOEI1ODc7XG59XG4uY2hhdHJvb21zLWxpc3QgLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuc2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggNDhweCAxMnB4IDE2cHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogIzgxODE4MTIxO1xufVxuLmNoYXRyb29tcy1saXN0IC5zZWFyY2ggc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE0cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNhdGVnb3JpZXMge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNhdGVnb3JpZXMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2F0ZWdvcmllcyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5wb3N0ZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2hhdHJvb21zLWxpc3QgLmNoYXRyb29tcy1pdGVtcyAuaXRlbSAucG9zdGVkIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNoYXRyb29tcy1pdGVtcyAuaXRlbSAucG9zdGVkIHAgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBjb2xvcjogIzE4QjU4Nztcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIC5sZWZ0LXdyYXAgLnZvdGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNoYXRyb29tcy1saXN0IC5jaGF0cm9vbXMtaXRlbXMgLml0ZW0gLmluZm8gLmxlZnQtd3JhcCAudm90aW5nLWNvbnRhaW5lciBidXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNjOWM5Yzk7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNoYXRyb29tcy1pdGVtcyAuaXRlbSAuaW5mbyAubGVmdC13cmFwIC52b3RpbmctY29udGFpbmVyIGJ1dHRvbi52b3RlLXVwLWJ0biBzcGFuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIC5sZWZ0LXdyYXAgLnZvdGluZy1jb250YWluZXIgYnV0dG9uLnZvdGUtZG93bi1idG4gc3BhbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIC5sZWZ0LXdyYXAgLnZvdGluZy1jb250YWluZXIgYnV0dG9uLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMThCNTg3O1xufVxuLmNoYXRyb29tcy1saXN0IC5jaGF0cm9vbXMtaXRlbXMgLml0ZW0gLmluZm8gLmxlZnQtd3JhcCAudm90aW5nLWNvbnRhaW5lciBidXR0b24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIC5sZWZ0LXdyYXAgLnZvdGluZy1jb250YWluZXIgLnZvdGUtY291bnQge1xuICBtYXJnaW46IDhweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNoYXRyb29tcy1pdGVtcyAuaXRlbSAuaW5mbyAucmlnaHQtd3JhcCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDAgMzZweCA0cHggMTJweDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIC5yaWdodC13cmFwIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNoYXRyb29tcy1pdGVtcyAuaXRlbSAuaW5mbyAucmlnaHQtd3JhcCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIC5yaWdodC13cmFwIC5wb3N0LW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuLmNoYXRyb29tcy1saXN0IC5jaGF0cm9vbXMtaXRlbXMgLml0ZW0gLmluZm8gLnJpZ2h0LXdyYXAgLnBvc3QtbWVudSAubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNoYXRyb29tcy1pdGVtcyAuaXRlbSAuaW5mbyAucmlnaHQtd3JhcCAucG9zdC1tZW51IC5tZW51IGEge1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNoYXRyb29tcy1pdGVtcyAuaXRlbSAuaW5mbyAucmlnaHQtd3JhcCAucG9zdC1tZW51IC5tZW51IGE6aG92ZXIge1xuICBjb2xvcjogIzE4QjU4Nztcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIC5yaWdodC13cmFwIC5wb3N0LW1lbnUgLm1lbnUgYSBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLmNoYXRyb29tcy1saXN0IC5jaGF0cm9vbXMtaXRlbXMgLml0ZW0gLmluZm8gLnJpZ2h0LXdyYXAgLnBvc3QtbWVudSAuZG90ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbkBtaXhpbiByZWRCdXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIHJlZ3VsYXJCdXR0b24ge1xyXG4gICAgd2lkdGg6IDExOXB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1MaWdodFwiO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbWV0bC1ncmVlbjtcclxufVxyXG5cclxuXHJcbi8vIFBsYXlsaXN0IHZpZGVvcyBtb2RhbFxyXG5AbWl4aW4gdmlkZW9JdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE4QjU4NztcclxuICAgIH1cclxuXHJcbiAgICAmLmFkZGVkIHtcclxuXHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIHNwYW4uYWRkZWQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0yNHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJBZGRlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNTNjNmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyNHB4IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNob3J0ZW5lZC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLnRhZ3Mge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFnSXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWl4aW4gaW5wdXRXcmFwIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgICAgICAgJi5zZWFyY2gge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODE4MTgxMjE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFnSXRlbSB7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgcGFkZGluZzogMnB4IDExcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0VFRUVFRTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBjb2xvcjogIzU0NTQ1NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vLyBQbGF5bGlzdCBpdGVtIGZvciAnVmlkZW9zJyBzZWN0aW9uXHJcbkBtaXhpbiBwbGF5bGlzdEl0ZW0ge1xyXG5cclxuICAgIC5wbGF5bGlzdC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA0MzJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAgIC50aHVtYm5haWwtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAuc2hvcnQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDlweDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MzJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZha2UtYmcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDEsIDEsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzdG9ja3NJdGVtIHtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDE3OXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIHBhZGRpbmc6IDI0cHggOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuXHJcblxyXG4gICAgJi5zdG9jay1pdGVtLWdyZWVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RvY2staXRlbS1yZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRyZWQgMCAwIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stZm9sbG93LCAuc3RvY2stdW5mb2xsb3cge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAudW5mb2xsb3ctYnRuIHtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stbmFtZSwgLnN0b2NrLXByaWNlLWNoYW5nZSwgLnN0b2NrLXByaWNlLWNoYW5nZS1wZXJjZW50IHtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNdWxpLUxpZ2h0JztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stcHJpY2Uge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011bGktQm9sZCc7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kb2xsYXItc2lnbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC01cHg7XHJcbiAgICAgICAgdG9wOiAtNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011bGktQm9sZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0b2NrLXByaWNlLWRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJAaW1wb3J0ICdjYXRlZ29yaWVzJztcclxuLmNoYXRyb29tcy1saXN0IHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgY29sb3I6ICMxOEI1ODc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNyZWF0ZS1wb3N0IHtcclxuICAgICAgICBtYXJnaW46IDMycHggMDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDI0cHggMjRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG5cclxuICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlbGVjdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG5cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFkZC1waG90byB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI0M5QzlDOTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE4QjU4NztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogYXV0bztcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMjRweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNDOUM5Qzk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzE4QjU4NztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCA0OHB4IDEycHggMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODE4MTgxMjE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTRweDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3JpZXMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXRyb29tcy1pdGVtcyB7XHJcbiAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG5cclxuICAgICAgICAgICAgLnBvc3RlZCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxOEI1ODc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAubGVmdC13cmFwIHtcclxuICAgICAgICAgICAgICAgICAgICAudm90aW5nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjOWM5Yzk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi52b3RlLXVwLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYudm90ZS1kb3duLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMThCNTg3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZvdGUtY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yaWdodC13cmFwIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzZweCA0cHggMTJweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvc3QtbWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxOEI1ODc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRvdGVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowChatroomsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-show-chatrooms',
          templateUrl: './show-chatrooms.component.html',
          styleUrls: ['./show-chatrooms.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/chat/show-messages/direct-chat/direct-chat.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/chat/show-messages/direct-chat/direct-chat.component.ts ***!
    \*************************************************************************/

  /*! exports provided: DirectChatComponent */

  /***/
  function srcAppChatShowMessagesDirectChatDirectChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectChatComponent", function () {
      return DirectChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_helpers_is_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @core/helpers/is-responsive */
    "./src/app/core/helpers/is-responsive.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _core_services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @core/services/chat.service */
    "./src/app/core/services/chat.service.ts");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _core_services_socket_io_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @core/services/socket-io.service */
    "./src/app/core/services/socket-io.service.ts");
    /* harmony import */


    var _core_services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @core/services/users.service */
    "./src/app/core/services/users.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @core/services/subject.service */
    "./src/app/core/services/subject.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @shared/pipes/group-by.pipe */
    "./src/app/shared/pipes/group-by.pipe.ts");
    /* harmony import */


    var _shared_pipes_get_elegant_date_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @shared/pipes/get-elegant-date.pipe */
    "./src/app/shared/pipes/get-elegant-date.pipe.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");
    /* harmony import */


    var _shared_pipes_fix_text_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../shared/pipes/fix-text-line-breaks.pipe */
    "./src/app/shared/pipes/fix-text-line-breaks.pipe.ts");
    /* harmony import */


    var _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../shared/pipes/date-from-now.pipe */
    "./src/app/shared/pipes/date-from-now.pipe.ts");
    /* harmony import */


    var _shared_pipes_get_date_text_for_messages_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../../shared/pipes/get-date-text-for-messages.pipe */
    "./src/app/shared/pipes/get-date-text-for-messages.pipe.ts");

    var _c0 = ["directMessagesList"];

    function DirectChatComponent_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectChatComponent_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.toggleBlockedUsers(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_backward");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Active contacts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DirectChatComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", null, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectChatComponent_div_6_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.toggleBlockedUsers(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Active users ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectChatComponent_div_6_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.toggleBlockedUsers(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Blocked users ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx_r1.showBlockedUsers);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.showBlockedUsers);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", true);
      }
    }

    function DirectChatComponent_li_8_ng_template_2_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "fixLineBreaks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "dateFromNow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lastMsg_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().lastMsg;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, lastMsg_r17.message));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, lastMsg_r17.created_at));
      }
    }

    function DirectChatComponent_li_8_ng_template_2_ng_container_11_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectChatComponent_li_8_ng_template_2_ng_container_11_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var user_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).user;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.unreadLastMessages(user_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unread ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DirectChatComponent_li_8_ng_template_2_ng_container_11_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectChatComponent_li_8_ng_template_2_ng_container_11_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var user_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).user;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r28.blockUser(user_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Block ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DirectChatComponent_li_8_ng_template_2_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", null, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DirectChatComponent_li_8_ng_template_2_ng_container_11_button_5_Template, 2, 0, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DirectChatComponent_li_8_ng_template_2_ng_container_11_button_6_Template, 2, 0, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var lastMsg_r17 = ctx_r31.lastMsg;
        var user_r16 = ctx_r31.user;

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r22)("disableRipple", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.ifUnreadShown(lastMsg_r17, user_r16));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.showBlockedUsers);
      }
    }

    function DirectChatComponent_li_8_ng_template_2_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var userMessages_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](userMessages_r13 == null ? null : userMessages_r13.unseens);
      }
    }

    function DirectChatComponent_li_8_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectChatComponent_li_8_ng_template_2_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var user_r16 = ctx.user;
          var lastMsg_r17 = ctx.lastMsg;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r33.makeUserActive(user_r16, lastMsg_r17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DirectChatComponent_li_8_ng_template_2_div_9_Template, 9, 6, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DirectChatComponent_li_8_ng_template_2_ng_container_11_Template, 7, 4, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DirectChatComponent_li_8_ng_template_2_ng_container_12_Template, 4, 1, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r16 = ctx.user;
        var lastMsg_r17 = ctx.lastMsg;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blocked", ctx_r15.ifContactBlocked(user_r16));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, user_r16.avatar, "user_avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r15.onlineUsers.length === 0)("ngClass", ctx_r15.getUserCurrentStatus(user_r16.username) ? "online" : "offline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r16.first_name + " " + user_r16.last_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lastMsg_r17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.ifMoreActionsShown(lastMsg_r17, user_r16));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.checkIfLastMessageSeen(lastMsg_r17));
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        user: a0,
        lastMsg: a1
      };
    };

    function DirectChatComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DirectChatComponent_li_8_ng_template_2_Template, 13, 12, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var userMessages_r13 = ctx.$implicit;

        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", (ctx_r2.activeUser == null ? null : ctx_r2.activeUser.id) === userMessages_r13.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, userMessages_r13, ctx_r2.getUserLastMessage(userMessages_r13 == null ? null : userMessages_r13.users_connections[0] == null ? null : userMessages_r13.users_connections[0].users_messages)));
      }
    }

    function DirectChatComponent_div_10_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectChatComponent_div_10_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r36.activeUser = null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DirectChatComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DirectChatComponent_div_10_button_2_Template, 3, 0, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blocked", ctx_r3.ifContactBlocked(ctx_r3.activeUser));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isChatUsersListSize());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, ctx_r3.activeUser.avatar, "user_avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.activeUser.first_name + " " + ctx_r3.activeUser.last_name);
      }
    }

    function DirectChatComponent_ng_container_13_ng_container_5_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r42.getSeenTooltip(m_r40))("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, m_r40.to_user.avatar, "user_avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DirectChatComponent_ng_container_13_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DirectChatComponent_ng_container_13_ng_container_5_div_13_Template, 3, 5, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var m_r40 = ctx.$implicit;

        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r39.isOwnMessage(m_r40.from_user) ? "my-message" : "other-message");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 6, m_r40.from_user.avatar, "user_avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r40.from_user.first_name + " " + m_r40.from_user.last_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 9, m_r40.created_at, "HH:mm"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", m_r40.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r40.seen && m_r40.to_id !== ctx_r39.authUser.id);
      }
    }

    function DirectChatComponent_ng_container_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "getDateText");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DirectChatComponent_ng_container_13_ng_container_5_Template, 14, 12, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var msg_r38 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, msg_r38.key));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", msg_r38.value);
      }
    }

    function DirectChatComponent_ng_container_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DirectChatComponent_ng_container_14_Template_textarea_keyup_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.setTyping();
        })("focus", function DirectChatComponent_ng_container_14_Template_textarea_focus_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.setSeen();
        })("keyup.enter", function DirectChatComponent_ng_container_14_Template_textarea_keyup_enter_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.sendMessage($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "                    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.typingText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r6.ifContactBlocked(ctx_r6.activeUser));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.chatForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r6.getChatInputPlaceholder(ctx_r6.activeUser));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r6.isProduction);
      }
    }

    var DirectChatComponent = /*#__PURE__*/function () {
      function DirectChatComponent(chatService, getAuthUser, socketService, usersService, toastr, subject, datePipe, groupBy, fb, getElegantDate) {
        _classCallCheck(this, DirectChatComponent);

        this.chatService = chatService;
        this.getAuthUser = getAuthUser;
        this.socketService = socketService;
        this.usersService = usersService;
        this.toastr = toastr;
        this.subject = subject;
        this.datePipe = datePipe;
        this.groupBy = groupBy;
        this.fb = fb;
        this.getElegantDate = getElegantDate;
        this.usersMessages = [];
        this.filteredUsersMessages = [];
        this.selectedUserMessages = {
          messages: [],
          user: {},
          rawMessages: [],
          connection_id: null
        };
        this.showBlockedUsers = false;
        this.onlineUsers = [];
        this.blockedUsers = [];
        this.newMessageSources = [];
        this.subscriptions = [];
        this.isProduction = _env__WEBPACK_IMPORTED_MODULE_4__["environment"].production;
        this.newMessagesCountReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(DirectChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.addUserToSocket();
          this.getOnlineUsers();
          this.getMessagesFromSocket();
          this.getUsersMessages();
          this.initForm();
          this.getTyping();
          this.getSeen();
          this.getChatNotifications();
          this.getBlockUnblockUser();
        }
      }, {
        key: "addUserToSocket",
        value: function addUserToSocket() {
          this.socketService.addNewUser(Object.assign(Object.assign({}, this.authUser), {
            group: false
          }));
        }
      }, {
        key: "getOnlineUsers",
        value: function getOnlineUsers() {
          var _this = this;

          this.socketService.getConnectedUsers({
            username: this.authUser.username
          });
          this.socketService.usersOnlineFeedback().subscribe(function (dt) {
            console.log(dt);
            _this.onlineUsers = dt;
          });
          this.subscriptions.push(this.socketService.userOnlineFeedback().subscribe(function (dt) {
            console.log(_this.onlineUsers);
            _this.onlineUsers = dt;
          }));
        }
      }, {
        key: "getUserCurrentStatus",
        value: function getUserCurrentStatus(username) {
          return this.onlineUsers.length === 0 || this.onlineUsers.includes(username);
        }
      }, {
        key: "getChatNotifications",
        value: function getChatNotifications() {
          var _this2 = this;

          this.subscriptions.push(this.socketService.getChatNotifications().subscribe(function (data) {
            _this2.onlineUsers = data.users;
          }));
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var _a, _b, _c;

          this.chatForm = this.fb.group({
            from: [this.authUser.username],
            from_id: [this.authUser.id],
            connection_id: [(_a = this.selectedUserMessages) === null || _a === void 0 ? void 0 : _a.connection_id],
            to_id: [(_b = this.activeUser) === null || _b === void 0 ? void 0 : _b.id],
            avatar: [(_c = this.authUser) === null || _c === void 0 ? void 0 : _c.avatar],
            from_user: [this.authUser],
            to_user: [null],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            personal: [1]
          });
        }
      }, {
        key: "isOwnMessage",
        value: function isOwnMessage(user) {
          return user.id === this.authUser.id;
        }
      }, {
        key: "isChatUsersListSize",
        value: function isChatUsersListSize() {
          return _core_helpers_is_responsive__WEBPACK_IMPORTED_MODULE_1__["default"].isChatUsersListSize();
        }
      }, {
        key: "getUsersMessages",
        value: function getUsersMessages() {
          var _this3 = this;

          this.selectedUserMessages.messages = [];
          this.subscriptions.push(this.chatService.getDirectMessages({
            user_id: this.authUser.id,
            blocked: 0
          }).subscribe(function (dt) {
            var _a, _b, _c;

            _this3.usersMessages = dt;
            var newMessagesSource = dt.filter(function (d) {
              return d.unseens > 0;
            });

            _this3.newMessagesCountReceived.emit(newMessagesSource.length);

            _this3.blockedUsers = dt.filter(function (d) {
              return d.users_connections[0].is_blocked === 1;
            });
            _this3.filteredUsersMessages = dt.filter(function (d) {
              return !!d.users_connections[0].is_blocked === _this3.showBlockedUsers;
            });
            console.log(_this3.blockedUsers);
            _this3.newMessageSources = _this3.filteredUsersMessages.filter(function (fm) {
              return fm.unseens;
            });

            _this3.subject.setNewMessagesSourceData({
              source: _this3.newMessageSources,
              type: 'direct'
            });

            _this3.activeUser = _this3.activeUser || _this3.filteredUsersMessages[0]; // connection_id: this.filteredUsersMessages[0].users_connections[0].id
            // console.log(this.activeUser)

            var selectedMessages = _this3.filteredUsersMessages.find(function (m) {
              var _a;

              return m.id === ((_a = _this3.activeUser) === null || _a === void 0 ? void 0 : _a.id);
            });

            _this3.selectedUserMessages.user = selectedMessages;
            _this3.selectedUserMessages.connection_id = selectedMessages === null || selectedMessages === void 0 ? void 0 : selectedMessages.users_connections[0].id;
            _this3.selectedUserMessages.messages = _this3.groupBy.transform(selectedMessages === null || selectedMessages === void 0 ? void 0 : selectedMessages.users_connections[0].users_messages, 'created_at');
            _this3.selectedUserMessages.rawMessages = selectedMessages === null || selectedMessages === void 0 ? void 0 : selectedMessages.users_connections[0].users_messages;

            _this3.chatForm.patchValue({
              to_id: (_a = _this3.activeUser) === null || _a === void 0 ? void 0 : _a.id,
              to_user: _this3.activeUser,
              connection_id: (_c = (_b = _this3.activeUser) === null || _b === void 0 ? void 0 : _b.users_connections) === null || _c === void 0 ? void 0 : _c[0].id
            }); // console.log(this.chatForm.value)

          }));
        }
      }, {
        key: "getMessagesFromSocket",
        value: function getMessagesFromSocket() {
          var _this4 = this;

          this.subscriptions.push(this.socketService.onNewMessage().subscribe(function (dt) {
            console.log('new message direct chat!!!');
            _this4.typingText = null;

            _this4.getUsersMessages();
          }));
        }
      }, {
        key: "makeUserActive",
        value: function makeUserActive(user, lastMsg) {
          this.activeUser = user;
          this.selectedUserMessages = {
            messages: [],
            user: {},
            rawMessages: [],
            connection_id: null
          };

          if (user) {
            this.chatForm.patchValue({
              to_id: user.id,
              to_user: this.activeUser,
              connection_id: this.activeUser.users_connections[0].id
            });
            var userMessages = JSON.parse(JSON.stringify(this.filteredUsersMessages.find(function (m) {
              return m.id === user.id;
            })));
            this.selectedUserMessages = userMessages;
            this.selectedUserMessages.connection_id = userMessages === null || userMessages === void 0 ? void 0 : userMessages.users_connections[0].id;
            this.selectedUserMessages.messages = this.groupBy.transform(userMessages === null || userMessages === void 0 ? void 0 : userMessages.users_connections[0].users_messages, 'created_at');
            this.selectedUserMessages.rawMessages = userMessages === null || userMessages === void 0 ? void 0 : userMessages.users_connections[0].users_messages;

            if (!(lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.seen)) {
              this.setSeen();
            }
          }
        }
      }, {
        key: "toggleBlockedUsers",
        value: function toggleBlockedUsers(show) {
          var _this5 = this;

          var _a, _b;

          this.showBlockedUsers = show;
          this.filteredUsersMessages = this.usersMessages.filter(function (d) {
            var _a;

            return !!((_a = d.users_connections) === null || _a === void 0 ? void 0 : _a[0].is_blocked) === _this5.showBlockedUsers;
          });
          this.activeUser = this.filteredUsersMessages[0];

          if (this.activeUser) {
            var activeUserMessages = (_b = (_a = this.activeUser) === null || _a === void 0 ? void 0 : _a.users_connections[0]) === null || _b === void 0 ? void 0 : _b.users_messages;
            this.makeUserActive(this.activeUser, activeUserMessages[activeUserMessages.length - 1]);
          }
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(e) {
          var _this6 = this;

          if (e.keyCode === 13 && !e.shiftKey && this.chatForm.value.message.trim() !== '') {
            if (this.chatForm.valid) {
              var data = Object.assign({}, this.chatForm.value);
              this.subscriptions.push(this.chatService.saveDirectMessage(data).subscribe(function (dt) {
                _this6.usersMessages = dt;
                _this6.filteredUsersMessages = dt.filter(function (d) {
                  return !!d.users_connections[0].is_blocked === _this6.showBlockedUsers;
                });

                var selectedMessages = _this6.filteredUsersMessages.find(function (m) {
                  var _a;

                  return m.id === ((_a = _this6.activeUser) === null || _a === void 0 ? void 0 : _a.id);
                });

                _this6.selectedUserMessages.user = selectedMessages;
                _this6.selectedUserMessages.connection_id = selectedMessages === null || selectedMessages === void 0 ? void 0 : selectedMessages.users_connections[0].id;
                console.log(selectedMessages === null || selectedMessages === void 0 ? void 0 : selectedMessages.users_connections);
                _this6.selectedUserMessages.messages = _this6.groupBy.transform(selectedMessages === null || selectedMessages === void 0 ? void 0 : selectedMessages.users_connections[0].users_messages, 'created_at');
                _this6.selectedUserMessages.rawMessages = selectedMessages === null || selectedMessages === void 0 ? void 0 : selectedMessages.users_connections[0].users_messages;

                _this6.socketService.sendMessage(data);

                _this6.scrollMsgsToBottom();

                console.log(_this6.selectedUserMessages);
              }));
              this.chatForm.patchValue({
                message: ''
              });
            }
          }
        }
      }, {
        key: "scrollMsgsToBottom",
        value: function scrollMsgsToBottom() {
          try {
            this.messagesList.nativeElement.scrollTop = this.messagesList.nativeElement.scrollHeight;
          } catch (err) {
            console.log(err);
          }
        }
      }, {
        key: "setTyping",
        value: function setTyping() {
          var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          this.socketService.setTyping({
            from_user: this.chatForm.value.from_user,
            to_user: this.chatForm.value.to_user,
            message: this.chatForm.value.message
          });
        }
      }, {
        key: "getTyping",
        value: function getTyping() {
          var _this7 = this;

          this.subscriptions.push(this.socketService.getTyping().subscribe(function (dt) {
            console.log(dt.from_user.id, _this7.authUser.id, _this7.activeUser);

            if (dt.from_user.id !== _this7.authUser.id && _this7.activeUser.id === dt.from_user.id) {
              _this7.typingText = dt.message ? "".concat(dt.from_user.first_name, " is typing...") : null;
            }
          }));
        }
      }, {
        key: "setSeen",
        value: function setSeen() {
          var _a;

          var userMessages = this.selectedUserMessages.rawMessages;

          if (userMessages.length > 0) {
            var isOwnMessage = ((_a = userMessages[userMessages.length - 1]) === null || _a === void 0 ? void 0 : _a.from_id) === this.authUser.id;
            console.log('set seen', isOwnMessage);
            this.scrollMsgsToBottom();

            if (!isOwnMessage) {
              this.socketService.setSeen({
                message_id: userMessages[userMessages.length - 1].id,
                from_id: this.chatForm.value.from_id,
                to_id: this.chatForm.value.to_id,
                from_user: this.chatForm.value.from_user,
                to_user: this.chatForm.value.to_user,
                connection_id: this.chatForm.value.connection_id,
                seen: 1,
                seen_at: moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD, h:mm:ss a')
              });
            }
          }
        }
      }, {
        key: "getSeen",
        value: function getSeen() {
          var _this8 = this;

          this.subscriptions.push(this.socketService.getSeen().subscribe(function (dt) {
            _this8.selectedUserMessages.messages = [];
            console.log('get seen', dt);

            _this8.getUsersMessages();
          }));
        }
      }, {
        key: "unreadLastMessages",
        value: function unreadLastMessages(usersMessages) {
          var _this9 = this;

          var _a;

          var messages = (_a = usersMessages.users_connections[0]) === null || _a === void 0 ? void 0 : _a.users_messages;
          var lastReceivedMessages = [];
          messages.reverse().some(function (message) {
            if (message.from_id !== _this9.authUser.id) {
              lastReceivedMessages.push(message);
            }

            return message.from_id === _this9.authUser.id;
          });
          var params = {
            message_ids: lastReceivedMessages.map(function (m) {
              return m.id;
            }),
            to_user: usersMessages.username,
            from_user: this.authUser.username
          };

          if (params.message_ids.length > 0) {
            this.socketService.unreadLastMessages(params);
          }
        }
      }, {
        key: "blockUser",
        value: function blockUser(user) {
          var _this10 = this;

          var _a;

          var params = {
            connection_id: (_a = user.users_connections) === null || _a === void 0 ? void 0 : _a[0].id,
            user: this.authUser,
            block: +!this.showBlockedUsers,
            contact_username: user.username
          };
          this.subscriptions.push(this.usersService.blockUser(params).subscribe(function (dt) {
            _this10.activeUser = null;

            _this10.getUsersMessages();

            _this10.socketService.blockUnblockUser(params);
          }));
        }
      }, {
        key: "getBlockUnblockUser",
        value: function getBlockUnblockUser() {
          var _this11 = this;

          this.subscriptions.push(this.socketService.getBlockUnblockUser().subscribe(function (dt) {
            // this.selectedUserMessages.messages = [];
            console.log('get block/unblock', dt);

            _this11.toastr.error("".concat(dt.user.username, " blocked the connection between you two"));

            _this11.activeUser = null;

            _this11.getUsersMessages();
          }));
        }
      }, {
        key: "getSeenTooltip",
        value: function getSeenTooltip(message) {
          var user = message.to_user; // const thisWeekDate = moment(message.seen_at).isSame(new Date(), 'week');
          // const seenDate = moment(message.seen_at).format(thisWeekDate ? 'ddd HH:mm' : 'MMM DD, YYYY HH:mm');

          var seenDate = this.getElegantDate.transform(message.seen_at);
          return "".concat(user.first_name, " ").concat(user.last_name, " at ").concat(seenDate);
        }
      }, {
        key: "checkIfLastMessageSeen",
        value: function checkIfLastMessageSeen(lastMsg) {
          return (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.seen) === 0 && (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.from_id) !== this.authUser.id;
        }
      }, {
        key: "getUserLastMessage",
        value: function getUserLastMessage(messages) {
          return messages[messages.length - 1];
        }
      }, {
        key: "getChatInputPlaceholder",
        value: function getChatInputPlaceholder(activeUser) {
          return !this.ifContactBlocked(activeUser) ? 'Type your message' : 'Since the contact is blocked you will no longer be able to send messages to this user';
        }
      }, {
        key: "ifUnreadShown",
        value: function ifUnreadShown(lastMsg, user) {
          return (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.from_id) !== this.authUser.id && !user.users_connections[0].is_blocked;
        }
      }, {
        key: "ifMoreActionsShown",
        value: function ifMoreActionsShown(lastMsg, user) {
          return !user.users_connections[0].is_blocked && (!lastMsg || (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.from_id) === this.authUser.id || (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.seen) === 1);
        }
      }, {
        key: "ifContactBlocked",
        value: function ifContactBlocked(user) {
          var _a;

          return (_a = user.users_connections) === null || _a === void 0 ? void 0 : _a[0].is_blocked;
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.scrollMsgsToBottom();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.setTyping(null);
          this.subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return DirectChatComponent;
    }();

    DirectChatComponent.ɵfac = function DirectChatComponent_Factory(t) {
      return new (t || DirectChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_socket_io_service__WEBPACK_IMPORTED_MODULE_7__["SocketIoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_10__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_12__["GroupByPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_elegant_date_pipe__WEBPACK_IMPORTED_MODULE_13__["GetElegantDatePipe"]));
    };

    DirectChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DirectChatComponent,
      selectors: [["app-direct-chat"]],
      viewQuery: function DirectChatComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messagesList = _t.first);
        }
      },
      inputs: {
        authUser: "authUser"
      },
      outputs: {
        newMessagesCountReceived: "newMessagesCountReceived"
      },
      decls: 15,
      vars: 10,
      consts: [[1, "chat-wrap"], [1, "people-groups-container", 3, "hidden"], ["id", "people-list", 1, "list-wrap"], [1, "top-actions"], ["id", "back-to-active-users"], [3, "click", 4, "ngIf"], ["class", "three-dot-actions", 4, "ngIf"], [1, "list", "align-items-center"], [3, "active", 4, "ngFor", "ngForOf"], [1, "chat", 3, "hidden"], ["class", "chat-about", 3, "blocked", 4, "ngIf"], ["id", "direct-messages", 1, "chat-history"], ["directMessagesList", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"], [1, "three-dot-actions"], [1, "show-actions", 3, "matMenuTriggerFor"], [1, "fas", "fa-ellipsis-h"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "disableRipple", "click"], [1, "fas", "fa-users"], [1, "fa", "fa-users-slash"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["itemTemplate", ""], [1, "d-flex", "user-last-msg", "align-items-center", "justify-content-between"], [1, "left-group", 3, "click"], [1, "img", "user-avatar"], [1, "avatar", 3, "src"], [1, "status", 3, "hidden", "ngClass"], [1, "text"], [1, "name"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "ml-auto", "more-btn"], [1, "d-flex", "align-items-center"], [1, "latest-message"], [1, "ml-4", "latest-msg-date"], ["mat-icon-button", "", 1, "more-actions-btn", 3, "matMenuTriggerFor", "disableRipple"], [1, "fas", "fa-ellipsis-v"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "seen-circle"], [1, "chat-about"], [1, "left"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "img"], [1, "right"], ["mat-icon-button", "", 3, "click"], [1, "data-list"], [1, "message-container", 3, "ngClass"], [1, "message-data", "mb-0", "pl-0", "d-flex", "justify-content-between", "align-items-center"], [1, "date"], [1, "message", 3, "innerHTML"], ["class", "seen", 4, "ngIf"], [1, "seen"], [1, "seen-avatar", 3, "matTooltip", "src"], [1, "text-center", "font-italic", "d-block"], [1, "chat-message"], [1, "chat-form", 3, "formGroup"], ["cdkTextareaAutosize", "", "rows", "4", "formControlName", "message", 1, "flex-1", "mx-3", 3, "placeholder", "keyup", "focus", "keyup.enter"], [1, "icons", 3, "hidden"], ["href", ""], ["src", "assets/img/gif-24px.svg", "alt", ""], ["src", "assets/img/mood-24px.svg", "alt", ""], ["src", "assets/img/send-24px.svg", "alt", ""]],
      template: function DirectChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DirectChatComponent_button_5_Template, 5, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DirectChatComponent_div_6_Template, 11, 7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DirectChatComponent_li_8_Template, 4, 7, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DirectChatComponent_div_10_Template, 9, 8, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DirectChatComponent_ng_container_13_Template, 6, 4, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DirectChatComponent_ng_container_14_Template, 14, 6, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("responsive-list", ctx.isChatUsersListSize());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isChatUsersListSize() && ctx.activeUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showBlockedUsers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredUsersMessages.length > 0 || ctx.blockedUsers.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredUsersMessages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isChatUsersListSize() && !ctx.activeUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedUserMessages == null ? null : ctx.selectedUserMessages.messages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeUser);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_18__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_19__["GetThumbPathPipe"], _shared_pipes_fix_text_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_20__["FixTextLineBreaksPipe"], _shared_pipes_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_21__["DateFromNowPipe"], _shared_pipes_get_date_text_for_messages_pipe__WEBPACK_IMPORTED_MODULE_22__["GetDateTextForMessagesPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
      styles: [".chat-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 100vh;\n}\n.chat-wrap[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%] {\n  flex: 0 0 316px;\n  background: #F5F5F5;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #DCDCDC;\n  border-radius: 4px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #aeaeae;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .create-group-chat[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  margin: 4px 0 16px;\n  background: transparent;\n  color: #18B587;\n  font-size: 16px;\n  font-family: \"Muli-Bold\";\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .create-group-chat[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 2px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  max-height: 600px;\n  overflow-x: auto;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  display: flex;\n  border-left: solid 5px transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  border-left: solid 5px #18B587;\n  background: #ffffff;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #18B587;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #18B587;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  border-left: solid 5px #F53C6F;\n  background: #ffffff;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #F53C6F;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #F53C6F;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  margin-right: 22px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 16px;\n  font-weight: 500;\n  color: #545454;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  display: block;\n  font-size: 14px;\n  font-weight: 300;\n  color: #ACACAC;\n}\n@media screen and (max-width: 1029px) {\n  .chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  margin-left: 32px;\n  flex: 1;\n  min-width: 350px;\n  margin-top: -50px;\n}\n@media (max-width: 1111px) {\n  .chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-left: 0;\n  }\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #DCDCDC;\n  border-radius: 4px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #aeaeae;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #F5F5F5;\n  padding: 12px 16px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .group-name[_ngcontent-%COMP%] {\n  color: #18B587;\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #F53C6F;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  height: 600px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  padding-right: 48px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.data-list[_ngcontent-%COMP%] {\n  height: 1px;\n  margin: 16px 0 32px;\n  background: #C9C9C9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.data-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #C9C9C9;\n  padding: 0 32px;\n  font-size: 12px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.my-message[_ngcontent-%COMP%] {\n  padding-right: 8px;\n  margin-left: 48px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.my-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background: #18B587;\n  color: #FFFFFF;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.my-message[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-left: 16px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #545454;\n  font-size: 16px;\n  font-weight: 500;\n  margin-right: 16px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 300;\n  color: #545454;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background: #F5F5F5;\n  color: #545454;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  padding: 16px;\n  font-family: \"Muli-Light\";\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .seen[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .seen[_ngcontent-%COMP%]   .seen-avatar[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%] {\n  background: #F5F5F5;\n  display: flex;\n  justify-content: space-between;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  background: #F5F5F5;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message.disabled[_ngcontent-%COMP%] {\n  background-color: #c7c4c4 !important;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .chat-form[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .chat-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 98%;\n  padding: 12px 16px;\n  background: transparent;\n  border: none;\n  height: 100px !important;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .chat-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border: none !important;\n  outline: none !important;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-right: 16px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n@media screen and (max-width: 1029px) {\n  .chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 24px;\n    min-width: 100%;\n  }\n}\n.responsive-list[_ngcontent-%COMP%] {\n  flex: 0 0 100% !important;\n}\n.responsive-list[_ngcontent-%COMP%]   .more-btn[_ngcontent-%COMP%] {\n  display: block;\n}\n.my-message[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%], .my-message[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: none;\n}\n.user-last-msg[_ngcontent-%COMP%] {\n  width: 98%;\n}\n.right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.left-group[_ngcontent-%COMP%] {\n  display: flex;\n}\n.seen-circle[_ngcontent-%COMP%] {\n  background-color: #F53C6F !important;\n  color: #ffffff;\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  font-size: 12px;\n}\n.more-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.top-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-right: 20px;\n}\n.top-actions[_ngcontent-%COMP%]   .show-actions[_ngcontent-%COMP%] {\n  background-color: #C9C9C9;\n  padding: 5px;\n  border-radius: 35px;\n  width: 30px;\n  height: 30px;\n  color: white;\n  margin-bottom: 10px;\n}\n.top-actions[_ngcontent-%COMP%]   .show-actions[_ngcontent-%COMP%]:hover {\n  background-color: #18B587;\n}\n.top-actions[_ngcontent-%COMP%]   #back-to-active-users[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n.top-actions[_ngcontent-%COMP%]   #back-to-active-users[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: unset;\n  border: none;\n}\n.top-actions[_ngcontent-%COMP%]   #back-to-active-users[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  position: relative;\n}\n.user-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 48px !important;\n  height: 48px;\n}\n.user-avatar[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 14px;\n  top: 35px;\n  right: 0;\n  padding: 0;\n  line-height: 0;\n}\n.user-avatar[_ngcontent-%COMP%]   .status.offline[_ngcontent-%COMP%] {\n  background-color: gray;\n}\n.user-avatar[_ngcontent-%COMP%]   .status.online[_ngcontent-%COMP%] {\n  background-color: #18B587;\n}\n.latest-message[_ngcontent-%COMP%], .latest-msg-date[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n}\n.more-actions-btn[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n.blocked[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n.blocked[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9zaG93LW1lc3NhZ2VzL2RpcmVjdC1jaGF0L0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxnZW5lcmFsLWNoYXQtd3JhcC5zY3NzIiwic3JjL2FwcC9jaGF0L3Nob3ctbWVzc2FnZXMvZGlyZWN0LWNoYXQvZGlyZWN0LWNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXQvc2hvdy1tZXNzYWdlcy9kaXJlY3QtY2hhdC9DOlxccHJvamVjdHNcXG1ldGx0dlxcZnJvbnRlbmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jaGF0L3Nob3ctbWVzc2FnZXMvZGlyZWN0LWNoYXQvQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXBwXFxjaGF0XFxzaG93LW1lc3NhZ2VzXFxkaXJlY3QtY2hhdFxcZGlyZWN0LWNoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNESjtBREdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0RSO0FES0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNIUjtBREtRO0VBQ0ksVUFBQTtBQ0haO0FETVE7RUFDSSx1QkFBQTtBQ0paO0FET1E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDTFo7QURRUTtFQUNJLG1CQUFBO0FDTlo7QURjUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ1paO0FEY1k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNaaEI7QURnQlE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDZFo7QURnQlk7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFLQSx5QkFBQTtBQ2RoQjtBRGdCZ0I7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0FDZHBCO0FEaUJ3QjtFQUNJLGNBQUE7QUNmNUI7QURrQndCO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDaEI1QjtBRHFCZ0I7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0FDbkJwQjtBRHNCd0I7RUFDSSxjQUFBO0FDcEI1QjtBRHVCd0I7RUFDSSxjQUFBO0FDckI1QjtBRDJCZ0I7RUFDSSxrQkFBQTtBQ3pCcEI7QUQ2Qm9CO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDM0J4QjtBRDhCb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUM1QnhCO0FEa0NRO0VBakhKO0lBa0hRLE9BQUE7RUMvQlY7QUFDRjtBRGtDSTtFQUNJLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNoQ1I7QURpQ1E7RUFMSjtJQU1RLGFBQUE7SUFDQSxjQUFBO0VDOUJWO0FBQ0Y7QURnQ1E7RUFDSSxVQUFBO0FDOUJaO0FEaUNRO0VBQ0ksdUJBQUE7QUMvQlo7QURrQ1E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDaENaO0FEbUNRO0VBQ0ksbUJBQUE7QUNqQ1o7QURvQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNsQ1o7QURvQ1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNsQ2hCO0FEb0NnQjtFQUNJLGtCQUFBO0FDbENwQjtBRHFDZ0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNuQ3BCO0FEdUNZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDckNoQjtBRHdDb0I7RUFDSSxjRS9MbEI7QUR5Sk47QUQwQ2dCO0VBQ0ksaUJBQUE7QUN4Q3BCO0FENkNRO0VBRUksZ0JBQUE7RUFDQSxhQUFBO0FDNUNaO0FEOENZO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQzVDaEI7QUQ4Q2dCO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQzVDcEI7QUQ4Q29CO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUM1Q3hCO0FEZ0RnQjtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUM5Q3BCO0FEZ0RvQjtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQzlDeEI7QURpRG9CO0VBQ0kseUJBQUE7QUMvQ3hCO0FEbURnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNqRHBCO0FEbURvQjtFQUNJLGtCQUFBO0FDakR4QjtBRG9Eb0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNsRHhCO0FEcURvQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNuRHhCO0FEdURnQjtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDckRwQjtBRHdEZ0I7RUFDSSxpQkFBQTtBQ3REcEI7QUR3RG9CO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ3ZEeEI7QUQ2RFE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQzNEWjtBRDZEWTtFQUNJLG1CQUFBO0FDM0RoQjtBRDhEWTtFQUNJLG9DQUFBO0FDNURoQjtBRCtEWTtFQUNJLFVBQUE7QUM3RGhCO0FEK0RnQjtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDN0RwQjtBRCtEb0I7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0FDN0R4QjtBRGtFWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDaEVoQjtBRGtFZ0I7RUFDSSxpQkFBQTtBQ2hFcEI7QURrRW9CO0VBQ0ksU0FBQTtBQ2hFeEI7QURzRVE7RUFyTUo7SUFzTVEsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFQ25FVjtBQUNGO0FEMkVBO0VBQ0kseUJBQUE7QUN4RUo7QUQwRUk7RUFDSSxjQUFBO0FDeEVSO0FEcUZJO0VBQ0ksYUFBQTtBQ2xGUjtBRXJSQTtFQUNJLFVBQUE7QUZ3Uko7QUVwUkk7RUFDSSxlQUFBO0FGdVJSO0FFblJBO0VBQ0ksYUFBQTtBRnNSSjtBRW5SQTtFQUNJLG9DQUFBO0VBQ0EsY0RqQkk7RUNrQkosV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUZzUko7QUVsUkk7RUFDSSw2QkFBQTtBRnFSUjtBRWpSQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FGb1JKO0FFbFJJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRm9SUjtBRWxSUTtFQUNJLHlCRDlDQztBRGtVYjtBRWhSSTtFQUNJLGtCQUFBO0FGa1JSO0FFaFJRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FGa1JaO0FFaFJZO0VBQ0ksZ0JBQUE7QUZrUmhCO0FFM1FBO0VBQ0ksa0JBQUE7QUY4UUo7QUU1UUk7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUY4UVI7QUUzUUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FGNlFSO0FFM1FRO0VBQ0ksc0JBQUE7QUY2UVo7QUUxUVE7RUFDSSx5QkQxRkM7QURzV2I7QUV2UUE7RUFDSSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBRjBRSjtBRXZRQTtFQUNJLHNCQUFBO0FGMFFKO0FFdlFBO0VBQ0ksK0NBQUE7QUYwUUo7QUV4UUk7RUFDSSxZQUFBO0FGMFFSIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9zaG93LW1lc3NhZ2VzL2RpcmVjdC1jaGF0L2RpcmVjdC1jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5jaGF0LXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXg6IDAgMCAzMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG5cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRENEQ0RDO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTc0LCAxNzQsIDE3NCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlzdC13cmFwIHtcclxuICAgICAgICAgICAgLy8gbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgIC8vIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY3JlYXRlLWdyb3VwLWNoYXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNHB4IDAgMTZweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMThCNTg3O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saXN0IHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgNXB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCAjMThCNTg3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxOEI1ODc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxOEI1ODc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggI0Y1M0M2RjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRjUzQzZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRjUzQzZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0FDQUNBQztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjlweCkge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2hhdCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTExcHgpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRENEQ0RDO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTc0LCAxNzQsIDE3NCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhdC1hYm91dCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG5cclxuICAgICAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ncm91cC1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE4QjU4NztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIC5yZW1vdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhdC1oaXN0b3J5IHtcclxuICAgICAgICAgICAgLy9tYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQ4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5kYXRhLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTZweCAwIDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0M5QzlDOTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0M5QzlDOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYubXktbWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0OHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxOEI1ODc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2UtZGF0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tZXNzYWdlLWRhdGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktTGlnaHRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2VlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWVuLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhdC1tZXNzYWdlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgJiA+IGlucHV0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzRjNCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jaGF0LWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyOXB4KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubW9yZS1idG4ge1xyXG4gICAgLy9kaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS1saXN0IHtcclxuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLm1vcmUtYnRuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuLnJlc3BvbnNpdmUtbGlzdCArIC5jaGF0IHtcclxuICAgIC8vZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdGhlci1tZXNzYWdlIHtcclxuXHJcbn1cclxuXHJcbi5teS1tZXNzYWdlIHtcclxuICAgIC5pbWcsIC5uYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcbiIsIi5jaGF0LXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uY2hhdC13cmFwIC5pbWcge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1ncm91cHMtY29udGFpbmVyIHtcbiAgZmxleDogMCAwIDMxNnB4O1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtZ3JvdXBzLWNvbnRhaW5lciA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtZ3JvdXBzLWNvbnRhaW5lciA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI0RDRENEQztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNhZWFlYWU7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtZ3JvdXBzLWNvbnRhaW5lciAuY3JlYXRlLWdyb3VwLWNoYXQge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbjogNHB4IDAgMTZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMThCNTg3O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIgLmNyZWF0ZS1ncm91cC1jaGF0IGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1ncm91cHMtY29udGFpbmVyIC5saXN0IHtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtZ3JvdXBzLWNvbnRhaW5lciAubGlzdCBsaSB7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItbGVmdDogc29saWQgNXB4IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1ncm91cHMtY29udGFpbmVyIC5saXN0IGxpLmFjdGl2ZSB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggIzE4QjU4NztcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1ncm91cHMtY29udGFpbmVyIC5saXN0IGxpLmFjdGl2ZSAudGV4dCAubmFtZSB7XG4gIGNvbG9yOiAjMThCNTg3O1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIgLmxpc3QgbGkuYWN0aXZlIC50ZXh0IHNwYW4ge1xuICBjb2xvcjogIzE4QjU4NztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1ncm91cHMtY29udGFpbmVyIC5saXN0IGxpOmhvdmVyIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCAjRjUzQzZGO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIgLmxpc3QgbGk6aG92ZXIgLnRleHQgLm5hbWUge1xuICBjb2xvcjogI0Y1M0M2Rjtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1ncm91cHMtY29udGFpbmVyIC5saXN0IGxpOmhvdmVyIC50ZXh0IHNwYW4ge1xuICBjb2xvcjogI0Y1M0M2Rjtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1ncm91cHMtY29udGFpbmVyIC5saXN0IGxpIC5pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDIycHg7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtZ3JvdXBzLWNvbnRhaW5lciAubGlzdCBsaSAudGV4dCAubmFtZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIgLmxpc3QgbGkgLnRleHQgc3BhbiB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNBQ0FDQUM7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI5cHgpIHtcbiAgLmNoYXQtd3JhcCAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cbi5jaGF0LXdyYXAgLmNoYXQge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTExMXB4KSB7XG4gIC5jaGF0LXdyYXAgLmNoYXQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cbi5jaGF0LXdyYXAgLmNoYXQgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG4uY2hhdC13cmFwIC5jaGF0IDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNEQ0RDREM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNhZWFlYWU7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LWFib3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LWFib3V0IC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtYWJvdXQgLmxlZnQgLmltZyB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtYWJvdXQgLmxlZnQgLmdyb3VwLW5hbWUge1xuICBjb2xvcjogIzE4QjU4NztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtYWJvdXQgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtYWJvdXQgLnJpZ2h0IC5yZW1vdmUgaSB7XG4gIGNvbG9yOiAjRjUzQzZGO1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1hYm91dCAucmlnaHQgPiBkaXYge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGhlaWdodDogNjAwcHg7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LWhpc3RvcnkgbGkge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1oaXN0b3J5IGxpLmRhdGEtbGlzdCB7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IDE2cHggMCAzMnB4O1xuICBiYWNrZ3JvdW5kOiAjQzlDOUM5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaS5kYXRhLWxpc3Qgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjQzlDOUM5O1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaS5teS1tZXNzYWdlIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBtYXJnaW4tbGVmdDogNDhweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaS5teS1tZXNzYWdlIC5tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogIzE4QjU4NztcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LWhpc3RvcnkgbGkubXktbWVzc2FnZSAubWVzc2FnZS1kYXRhIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaSAubWVzc2FnZS1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1oaXN0b3J5IGxpIC5tZXNzYWdlLWRhdGEgLmltZyB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaSAubWVzc2FnZS1kYXRhIC5uYW1lIHtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1oaXN0b3J5IGxpIC5tZXNzYWdlLWRhdGEgLmRhdGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1oaXN0b3J5IGxpIC5tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktTGlnaHRcIjtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaSAuc2VlbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1oaXN0b3J5IGxpIC5zZWVuIC5zZWVuLWF2YXRhciB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LW1lc3NhZ2UgPiBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LW1lc3NhZ2UuZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjNGM0ICFpbXBvcnRhbnQ7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LW1lc3NhZ2UgLmNoYXQtZm9ybSB7XG4gIHdpZHRoOiA5MCU7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LW1lc3NhZ2UgLmNoYXQtZm9ybSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiA5OCU7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1tZXNzYWdlIC5jaGF0LWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1tZXNzYWdlIC5pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LW1lc3NhZ2UgLmljb25zIGEge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtbWVzc2FnZSAuaWNvbnMgYTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbjogMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjlweCkge1xuICAuY2hhdC13cmFwIC5jaGF0IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuXG4ucmVzcG9uc2l2ZS1saXN0IHtcbiAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcbn1cbi5yZXNwb25zaXZlLWxpc3QgLm1vcmUtYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5teS1tZXNzYWdlIC5pbWcsIC5teS1tZXNzYWdlIC5uYW1lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnVzZXItbGFzdC1tc2cge1xuICB3aWR0aDogOTglO1xufVxuXG4ucmlnaHQgaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxlZnQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2Vlbi1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjUzQzZGICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tb3JlLWJ0biBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRvcC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLnRvcC1hY3Rpb25zIC5zaG93LWFjdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzlDOUM5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi50b3AtYWN0aW9ucyAuc2hvdy1hY3Rpb25zOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4QjU4Nztcbn1cbi50b3AtYWN0aW9ucyAjYmFjay10by1hY3RpdmUtdXNlcnMge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4udG9wLWFjdGlvbnMgI2JhY2stdG8tYWN0aXZlLXVzZXJzIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBib3JkZXI6IG5vbmU7XG59XG4udG9wLWFjdGlvbnMgI2JhY2stdG8tYWN0aXZlLXVzZXJzIGJ1dHRvbiBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnVzZXItYXZhdGFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnVzZXItYXZhdGFyIC5hdmF0YXIge1xuICB3aWR0aDogNDhweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4udXNlci1hdmF0YXIgLnN0YXR1cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgdG9wOiAzNXB4O1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDA7XG59XG4udXNlci1hdmF0YXIgLnN0YXR1cy5vZmZsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cbi51c2VyLWF2YXRhciAuc3RhdHVzLm9ubGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOEI1ODc7XG59XG5cbi5sYXRlc3QtbWVzc2FnZSwgLmxhdGVzdC1tc2ctZGF0ZSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLm1vcmUtYWN0aW9ucy1idG4ge1xuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uYmxvY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xufVxuLmJsb2NrZWQgaW1nIHtcbiAgb3BhY2l0eTogMC41O1xufSIsIiRyZWQ6ICNGNTNDNkY7XHJcbiRtZXRsLWdyZWVuOiAjMThCNTg3O1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJGxpZ2h0X2dyYXk6ICNiM2IzYjM7XHJcbiIsIkBpbXBvcnQgJ35hc3NldHMvc3R5bGVzL2dlbmVyYWwtY2hhdC13cmFwJztcclxuQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi51c2VyLWxhc3QtbXNnIHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICBpIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sZWZ0LWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zZWVuLWNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubW9yZS1idG4ge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxufVxyXG5cclxuLnRvcC1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgIC5zaG93LWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDOUM5Qzk7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1ldGwtZ3JlZW47O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjYmFjay10by1hY3RpdmUtdXNlcnMge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi51c2VyLWF2YXRhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXR1cyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAgIHRvcDogMzVweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG5cclxuICAgICAgICAmLm9mZmxpbmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5vbmxpbmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWV0bC1ncmVlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sYXRlc3QtbWVzc2FnZSwgLmxhdGVzdC1tc2ctZGF0ZSB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuXHJcbi5tb3JlLWFjdGlvbnMtYnRuIHtcclxuICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ibG9ja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-direct-chat',
          templateUrl: './direct-chat.component.html',
          styleUrls: ['./direct-chat.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_6__["GetAuthUserPipe"]
        }, {
          type: _core_services_socket_io_service__WEBPACK_IMPORTED_MODULE_7__["SocketIoService"]
        }, {
          type: _core_services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
        }, {
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_10__["SubjectService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]
        }, {
          type: _shared_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_12__["GroupByPipe"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _shared_pipes_get_elegant_date_pipe__WEBPACK_IMPORTED_MODULE_13__["GetElegantDatePipe"]
        }];
      }, {
        authUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        messagesList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['directMessagesList']
        }],
        newMessagesCountReceived: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/chat/show-messages/group-chat/group-chat.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/chat/show-messages/group-chat/group-chat.component.ts ***!
    \***********************************************************************/

  /*! exports provided: GroupChatComponent */

  /***/
  function srcAppChatShowMessagesGroupChatGroupChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupChatComponent", function () {
      return GroupChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_helpers_is_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @core/helpers/is-responsive */
    "./src/app/core/helpers/is-responsive.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/components/modals/confirmation-dialog/confirmation-dialog.component */
    "./src/app/core/components/modals/confirmation-dialog/confirmation-dialog.component.ts");
    /* harmony import */


    var _core_components_modals_show_chat_group_members_show_chat_group_members_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @core/components/modals/show-chat-group-members/show-chat-group-members.component */
    "./src/app/core/components/modals/show-chat-group-members/show-chat-group-members.component.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _core_services_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @core/services/chat.service */
    "./src/app/core/services/chat.service.ts");
    /* harmony import */


    var _core_services_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @core/services/users.service */
    "./src/app/core/services/users.service.ts");
    /* harmony import */


    var _core_services_socket_io_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @core/services/socket-io.service */
    "./src/app/core/services/socket-io.service.ts");
    /* harmony import */


    var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @core/services/subject.service */
    "./src/app/core/services/subject.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @shared/pipes/group-by.pipe */
    "./src/app/shared/pipes/group-by.pipe.ts");
    /* harmony import */


    var _shared_pipes_fix_text_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @shared/pipes/fix-text-line-breaks.pipe */
    "./src/app/shared/pipes/fix-text-line-breaks.pipe.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../../../shared/pipes/get-thumb-path.pipe */
    "./src/app/shared/pipes/get-thumb-path.pipe.ts");
    /* harmony import */


    var _shared_pipes_get_date_text_for_messages_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ../../../shared/pipes/get-date-text-for-messages.pipe */
    "./src/app/shared/pipes/get-date-text-for-messages.pipe.ts");

    var _c0 = ["chipsInput"];
    var _c1 = ["groupMessagesList"];

    function GroupChatComponent_li_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupChatComponent_li_15_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var group_r13 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.makeGroupActive(group_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "fixLineBreaks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r13 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", group_r13.id === (ctx_r0.selectedGroup == null ? null : ctx_r0.selectedGroup.id))("unconfirmed", !ctx_r0.ifConfirmedToJoinTheGroup(group_r13));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 9, group_r13.avatar, "group_avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r13.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 12, group_r13.chat_group_messages[group_r13.chat_group_messages.length - 1] == null ? null : group_r13.chat_group_messages[group_r13.chat_group_messages.length - 1].message, " "));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.isSeenByAuthUser(group_r13.chat_group_messages));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.isSeenByAuthUser(group_r13.chat_group_messages));
      }
    }

    function GroupChatComponent_mat_chip_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function GroupChatComponent_mat_chip_32_Template_mat_chip_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var member_r16 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.removeInputMember(member_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var member_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r16.first_name + " " + member_r16.last_name, " ");
      }
    }

    function GroupChatComponent_mat_option_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contact_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", contact_r19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contact_r19.first_name + " " + contact_r19.last_name, " ");
      }
    }

    function GroupChatComponent_ul_43_li_1_mat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupChatComponent_ul_43_li_1_mat_icon_3_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var m_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.removeSavedMember(m_r21.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GroupChatComponent_ul_43_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GroupChatComponent_ul_43_li_1_mat_icon_3_Template, 2, 0, "mat-icon", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r21 = ctx.$implicit;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pending", !m_r21.chat_groups_members.confirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", m_r21.name)("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 6, m_r21.avatar, "user_avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r21.id !== (ctx_r20.selectedGroup == null ? null : ctx_r20.selectedGroup.creator_id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r20.getUserCurrentStatus(m_r21) ? "online" : "offline");
      }
    }

    function GroupChatComponent_ul_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupChatComponent_ul_43_li_1_Template, 5, 9, "li", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.groupMembers);
      }
    }

    function GroupChatComponent_div_50_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupChatComponent_div_50_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.removeGroup();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GroupChatComponent_button_57_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupChatComponent_button_57_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.leaveGroup();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Leave group ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GroupChatComponent_div_72_ng_container_5_ng_container_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var seen_r35 = ctx.$implicit;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r34.getSeenTooltip(seen_r35))("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, seen_r35.avatar, "user_avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function GroupChatComponent_div_72_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "getImgPath");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GroupChatComponent_div_72_ng_container_5_ng_container_14_Template, 3, 5, "ng-container", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var m_r32 = ctx.$implicit;

        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r31.getMessageClass(m_r32.from_user));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 6, m_r32.from_user.avatar, "user_avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r32.from_user.first_name + " " + m_r32.from_user.last_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 9, m_r32.created_at, "HH:mm"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", m_r32.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", m_r32.seen_by);
      }
    }

    function GroupChatComponent_div_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "getDateText");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GroupChatComponent_div_72_ng_container_5_Template, 15, 12, "ng-container", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var msg_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, msg_r30.key));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", msg_r30.value);
      }
    }

    function GroupChatComponent_small_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.typingText.text);
      }
    }

    var GroupChatComponent = /*#__PURE__*/function () {
      function GroupChatComponent(fb, chatService, usersService, socketService, subject, toastr, dialog, groupBy, fixLineBreaks) {
        var _this12 = this;

        _classCallCheck(this, GroupChatComponent);

        this.fb = fb;
        this.chatService = chatService;
        this.usersService = usersService;
        this.socketService = socketService;
        this.subject = subject;
        this.toastr = toastr;
        this.dialog = dialog;
        this.groupBy = groupBy;
        this.fixLineBreaks = fixLineBreaks;
        this.showGroupChatForm = false;
        this.showMembersInput = false;
        this.userContacts = [];
        this.groupMembers = [];
        this.socketGroupsUsers = [];
        this.inputGroupMembers = [];
        this.filteredContacts = [];
        this.memberCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.subscriptions = [];
        this.typingText = {
          group: null,
          text: null
        };
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.groupRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedGroupMessages = [];
        this.selectedRawMessages = [];
        this.groupsMessages = [];
        this.haveGroupJoinInvitation = false;
        this.isProduction = _env__WEBPACK_IMPORTED_MODULE_7__["environment"].production;
        this.subscriptions.push(this.memberCtrl.valueChanges.subscribe(function (search) {
          if (search) {
            _this12.filteredContacts = _this12.userContacts.filter(function (fc) {
              var fullNameLowerCased = (fc.first_name + ' ' + fc.last_name).toLowerCase();

              if (fullNameLowerCased.includes(search)) {
                return !_this12.groupMembers.find(function (gm) {
                  return gm.name.toLowerCase() === fullNameLowerCased;
                });
              }

              return false;
            });
          }
        }));
      }

      _createClass(GroupChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initGroupChatForms();
          this.initForm();
          this.getGroupsMessages();
          this.addUserToSocket();
          this.getUserContacts();
          this.getGroupJoinInvitation();
          this.getChatNotifications();
          this.getMessagesFromSocket();
          this.getTyping();
          this.getSeen();
        }
      }, {
        key: "initGroupChatForms",
        value: function initGroupChatForms() {
          this.groupChatForm = this.fb.group({
            creator_id: [this.authUser.id],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: [this.authUser.username]
          });
          this.groupChatDetailsForm = this.fb.group({
            group_id: [''],
            member_ids: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var _a, _b;

          this.chatForm = this.fb.group({
            from: [this.authUser.username],
            from_id: [this.authUser.id],
            group_id: [(_a = this.selectedGroup) === null || _a === void 0 ? void 0 : _a.id],
            avatar: [(_b = this.authUser) === null || _b === void 0 ? void 0 : _b.avatar],
            from_user: [this.authUser],
            to_id: [null],
            to_user: [null],
            to_group: [this.selectedGroup],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            personal: [1]
          });
        }
      }, {
        key: "addUserToSocket",
        value: function addUserToSocket() {
          this.socketService.addNewUser(Object.assign(Object.assign({}, this.authUser), {
            group: true
          }));
        }
      }, {
        key: "getUserContacts",
        value: function getUserContacts() {
          var _this13 = this;

          this.subscriptions.push(this.usersService.getUserContacts({
            user_id: this.authUser.id,
            blocked: 0
          }).subscribe(function (dt) {
            _this13.userContacts = dt;
          }));
        }
      }, {
        key: "getGroupsMessages",
        value: function getGroupsMessages() {
          var _this14 = this;

          var selectedGroupBefore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          this.subscriptions.push(this.chatService.getGroupsMessages({
            user_id: this.authUser.id,
            blocked: 0
          }).subscribe(function (dt) {
            var _a, _b, _c;

            _this14.groupsMessages = dt;
            _this14.selectedGroup = dt.find(function (d) {
              return d.name === selectedGroupBefore;
            }) || dt[0];
            _this14.selectedGroupMessages = _this14.groupBy.transform((_a = _this14.selectedGroup) === null || _a === void 0 ? void 0 : _a.chat_group_messages, 'created_at');

            if (_this14.selectedGroup) {
              if (((_b = _this14.selectedGroup) === null || _b === void 0 ? void 0 : _b.chat_group_messages.length) > 0) {
                _this14.scrollMsgsToBottom();
              }

              _this14.groupChatDetailsForm.patchValue({
                group_id: _this14.selectedGroup.id
              });

              _this14.chatForm.patchValue({
                group_id: _this14.selectedGroup.id
              });

              _this14.groupMembers = (_c = _this14.selectedGroup) === null || _c === void 0 ? void 0 : _c.chat_group_members; // this.getGroupMessages();
              // console.log(this.groupMembers)
            }
          }));
        }
      }, {
        key: "makeGroupActive",
        value: function makeGroupActive(group) {
          this.selectedGroup = group;
          this.groupChatDetailsForm.patchValue({
            group_id: this.selectedGroup.id
          });
          this.chatForm.patchValue({
            group_id: this.selectedGroup.id
          });
          this.selectedGroupMessages = this.groupBy.transform(group.chat_group_messages, 'created_at');
          this.typingText.group = group;
          this.getTypingTextStatus({
            group: group.name,
            message: ''
          });
          this.getGroupMembers();
        }
      }, {
        key: "addGroup",
        value: function addGroup() {
          var _this15 = this;

          if (this.groupChatForm.valid) {
            this.subscriptions.push(this.chatService.addGroup(this.groupChatForm.value).subscribe(function (dt) {
              _this15.selectedGroup = dt.find(function (d) {
                return _this15.groupChatForm.value.name === d.name;
              });

              _this15.getGroupsMessages(_this15.selectedGroup);

              _this15.socketService.setNewGroup(_this15.groupChatForm.value);

              _this15.groupChatForm.patchValue({
                name: ''
              });
            }));
          }
        }
      }, {
        key: "changeAvatar",
        value: function changeAvatar(e) {
          var _this16 = this;

          // this.selectedGroup.avatar = e.target.files[0].name;
          var file = e.target.files[0];
          var formData = new FormData();
          formData.append('avatar', file.name);
          formData.append('group_id', this.selectedGroup.id);
          formData.append('member_id', this.authUser.id);
          formData.append('group_avatar_file', file); // console.log({avatar: e.target.files[0].name})

          this.subscriptions.push(this.chatService.changeGroupAvatar(formData).subscribe(function (dt) {
            _this16.groupsMessages = dt;
            _this16.selectedGroup = _this16.groupsMessages.find(function (group) {
              return _this16.selectedGroup.id === group.id;
            });
          }));
        }
      }, {
        key: "removeInputMember",
        value: function removeInputMember(member) {
          var index = this.inputGroupMembers.indexOf(member);

          if (index >= 0) {
            this.inputGroupMembers.splice(index, 1);
            this.groupChatDetailsForm.patchValue({
              member_ids: this.inputGroupMembers
            });
          }
        }
      }, {
        key: "removeSavedMember",
        value: function removeSavedMember(member_id) {
          var _this17 = this;

          this.subscriptions.push(this.dialog.open(_core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogComponent"]).afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
              _this17.chatService.removeGroupMember({
                group_id: _this17.selectedGroup.id,
                member_id: member_id
              }).subscribe(function (dt) {
                _this17.groupMembers = dt === null || dt === void 0 ? void 0 : dt.chat_group_members;
              });
            }
          }));
        }
      }, {
        key: "removeGroup",
        value: function removeGroup() {
          var _this18 = this;

          this.subscriptions.push(this.dialog.open(_core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogComponent"]).afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
              _this18.chatService.removeGroup({
                group_id: _this18.selectedGroup.id
              }).subscribe(function (dt) {
                _this18.socketService.removeGroup({
                  group: _this18.selectedGroup.name,
                  username: _this18.authUser.username
                });

                _this18.groupsMessages = dt;
                _this18.selectedGroup = null;
              });
            }
          }));
        }
      }, {
        key: "autoCompleteMemberSelected",
        value: function autoCompleteMemberSelected(e) {
          var value = e.option.value;

          if (!this.inputGroupMembers.find(function (gm) {
            return gm.id === value;
          })) {
            this.inputGroupMembers.push(e.option.value);
            this.groupChatDetailsForm.patchValue({
              member_ids: this.inputGroupMembers
            });
          }

          this.chipsInput.nativeElement.value = '';
          this.memberCtrl.setValue('');
        }
      }, {
        key: "addMember",
        value: function addMember(e) {
          var _this19 = this;

          this.chipsInput.nativeElement.value = '';
          this.memberCtrl.setValue('');
          console.log(this.groupChatDetailsForm.value, this.selectedGroup);
          this.subscriptions.push(this.chatService.addGroupMembers(this.groupChatDetailsForm.value).subscribe(function (dt) {
            _this19.groupMembers = dt === null || dt === void 0 ? void 0 : dt.chat_group_members;

            _this19.socketService.inviteToNewGroup({
              members: _this19.inputGroupMembers,
              group_id: _this19.selectedGroup.id
            });

            _this19.inputGroupMembers = [];
          }));
        }
      }, {
        key: "leaveGroup",
        value: function leaveGroup() {
          var _this20 = this;

          this.subscriptions.push(this.dialog.open(_core_components_modals_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogComponent"]).afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
              _this20.chatService.leaveGroup({
                member_id: _this20.authUser.id,
                group_id: _this20.selectedGroup.id
              }).subscribe(function (dt) {
                _this20.groupsMessages = dt;

                _this20.socketService.leaveGroup({
                  group: _this20.selectedGroup.name,
                  username: _this20.authUser.username
                });

                _this20.selectedGroup = null;
              });
            }
          }));
        }
      }, {
        key: "openAllMembersModal",
        value: function openAllMembersModal() {
          this.subscriptions.push(this.dialog.open(_core_components_modals_show_chat_group_members_show_chat_group_members_component__WEBPACK_IMPORTED_MODULE_5__["ShowChatGroupMembersComponent"], {
            width: '300px',
            height: '400px'
          }).afterClosed().subscribe(function (dt) {}));
        }
      }, {
        key: "ifConfirmedToJoinTheGroup",
        value: function ifConfirmedToJoinTheGroup(group) {
          var _this21 = this;

          return group === null || group === void 0 ? void 0 : group.chat_group_members.find(function (member) {
            return member.id === _this21.authUser.id && member.chat_groups_members.confirmed;
          });
        }
      }, {
        key: "getGroupJoinInvitation",
        value: function getGroupJoinInvitation() {
          var _this22 = this;

          this.subscriptions.push(this.socketService.inviteToGroupSent().subscribe(function (data) {
            _this22.chatService.getChatGroups({
              user_id: _this22.authUser.id
            }).subscribe(function (dt) {
              _this22.groupsMessages = dt;
              _this22.selectedGroup = _this22.groupsMessages.find(function (group) {
                return data.group_id === group.id;
              });
              _this22.haveGroupJoinInvitation = true;
              console.log(_this22.selectedGroup);
            });
          }));
        }
      }, {
        key: "acceptGroupJoin",
        value: function acceptGroupJoin() {
          var _this23 = this;

          this.subscriptions.push(this.chatService.acceptGroupJoin({
            group_id: this.selectedGroup.id,
            member_id: this.authUser.id
          }).subscribe(function (dt) {
            _this23.groupsMessages = dt;
            _this23.selectedGroup = _this23.groupsMessages.find(function (group) {
              return _this23.selectedGroup.id === group.id;
            });
            console.log(_this23.selectedGroup);
            _this23.haveGroupJoinInvitation = false;

            _this23.socketService.acceptJoinToGroup({
              group: _this23.selectedGroup.name,
              username: _this23.authUser.username
            });
          }));
        }
      }, {
        key: "declineGroupJoin",
        value: function declineGroupJoin() {
          var _this24 = this;

          this.subscriptions.push(this.chatService.declineGroupJoin({
            group_id: this.selectedGroup.id,
            member_id: this.authUser.id
          }).subscribe(function (dt) {
            var _a;

            _this24.groupsMessages = dt;

            _this24.socketService.declineJoinToGroup({
              group: (_a = _this24.selectedGroup) === null || _a === void 0 ? void 0 : _a.name,
              username: _this24.authUser.username
            });

            _this24.selectedGroup = _this24.groupsMessages.find(function (group) {
              return _this24.selectedGroup.id === group.id;
            });
          }));
        }
      }, {
        key: "getChatNotifications",
        value: function getChatNotifications() {
          var _this25 = this;

          this.subscriptions.push(this.socketService.getChatNotifications().subscribe(function (data) {
            var _a, _b;

            _this25.socketGroupsUsers = data.groupsUsers; // console.log(this.socketGroupsUsers)

            if (data.groupRemoved) {
              _this25.getGroupsMessages(); // this.selectedGroup = data.username !== this.authUser.username ? null : this.groupsMessages[this.groups.length - 1];

            } else if (data.groupCreated) {
              _this25.selectedGroup = _this25.groupsMessages.find(function (g) {
                return g.name === data.group;
              });

              if (_this25.selectedGroup) {
                _this25.groupChatDetailsForm.patchValue({
                  group_id: _this25.selectedGroup.id
                });

                _this25.groupMembers = (_a = _this25.selectedGroup) === null || _a === void 0 ? void 0 : _a.chat_group_members;
              }
            } else if (!data.joiningChat) {
              // if (data.username !== this.authUser.username) {
              _this25.toastr.info(data.msg);

              if (data.acceptingJoinGroup || data.decliningJoinGroup || data.leavingGroup) {
                _this25.selectedGroup = _this25.groupsMessages.find(function (g) {
                  return g.name === data.group;
                });

                if (_this25.selectedGroup) {
                  _this25.getGroupMembers(); // this.getGroupMessages();

                }
              }

              _this25.groupMembers = (_b = _this25.selectedGroup) === null || _b === void 0 ? void 0 : _b.chat_group_members; // }
            }
          }));
        }
      }, {
        key: "getGroupMembers",
        value: function getGroupMembers() {
          var _this26 = this;

          this.subscriptions.push(this.chatService.getGroupMembers({
            group_id: this.selectedGroup.id
          }).subscribe(function (dt) {
            _this26.groupMembers = dt === null || dt === void 0 ? void 0 : dt.chat_group_members;
          }));
        }
      }, {
        key: "getUserCurrentStatus",
        value: function getUserCurrentStatus(groupMember) {
          var _a, _b; // console.log(groupMember)


          var groupName = (_a = this.groupsMessages.find(function (gm) {
            var _a;

            return gm.id === ((_a = groupMember === null || groupMember === void 0 ? void 0 : groupMember.chat_groups_members) === null || _a === void 0 ? void 0 : _a.group_id);
          })) === null || _a === void 0 ? void 0 : _a.name;

          if (this.socketGroupsUsers && groupName === ((_b = this.selectedGroup) === null || _b === void 0 ? void 0 : _b.name)) {
            return !!this.socketGroupsUsers.find(function (sGroupUser) {
              return sGroupUser.group === groupName && groupMember.username === sGroupUser.username;
            });
          }

          return false;
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(e) {
          var _this27 = this;

          this.chatForm.patchValue({
            message: this.fixLineBreaks.transform(e.target.value)
          });

          if (e.keyCode === 13 && !e.shiftKey && this.chatForm.value.message.trim() !== '') {
            if (this.chatForm.valid) {
              var data = Object.assign(Object.assign({}, this.chatForm.value), {
                group: this.selectedGroup.name
              });
              this.subscriptions.push(this.chatService.saveGroupMessage(data).subscribe(function (dt) {
                // this.selectedUserMessages.messages = this.groupBy.transform(dt[0].messages, 'created_at');
                // this.selectedUserMessages.user = dt[0].user;
                _this27.socketService.sendMessage(data);

                _this27.scrollMsgsToBottom(); // console.log(this.selectedUserMessages);

              }));
              this.chatForm.patchValue({
                message: ''
              });
            }
          }
        }
      }, {
        key: "scrollMsgsToBottom",
        value: function scrollMsgsToBottom() {
          try {
            // console.log(this.messagesList.nativeElement, this.messagesList.nativeElement.scrollHeight)
            this.messagesList.nativeElement.scrollTop = this.messagesList.nativeElement.scrollHeight;
          } catch (err) {
            console.log(err);
          }
        } // getGroupMessages() {
        //     this.subscriptions.push(this.chatService.getGroupChatMessages({
        //         group_id: this.selectedGroup?.id,
        //         group: 1
        //     }).subscribe(dt => {
        //         this.selectedRawMessages = dt;
        //         this.selectedGroupMessages = this.groupBy.transform(dt, 'created_at');
        //
        //     }));
        // }

      }, {
        key: "getMessagesFromSocket",
        value: function getMessagesFromSocket() {
          var _this28 = this;

          this.subscriptions.push(this.socketService.onNewMessage().subscribe(function (dt) {
            if (dt.group) {
              console.log('new message group chat!!!'); // this.groupRemoved.emit({});

              _this28.getGroupsMessages(_this28.selectedGroup.name); // this.selectedGroupMessages = this.groupBy.transform(dt, 'created_at');


              _this28.typingText = {
                group: null,
                text: null
              }; // this.getUsersMessages();
            }
          }));
        }
      }, {
        key: "getMessageClass",
        value: function getMessageClass(user) {
          this.scrollMsgsToBottom();
          return user.id === this.authUser.id ? 'my-message' : 'other-message';
        }
      }, {
        key: "getSeen",
        value: function getSeen() {
          var _this29 = this;

          this.subscriptions.push(this.socketService.getSeen().subscribe(function (dt) {
            // console.log('get seen', dt)
            // console.log(this.selectedGroup)
            _this29.getGroupsMessages(_this29.selectedGroup.name);
          }));
        }
      }, {
        key: "setSeen",
        value: function setSeen() {
          var _a; // console.log(this.selectedGroupMessages)
          // console.log(this.groupsMessages)


          var messages = (_a = this.selectedGroup) === null || _a === void 0 ? void 0 : _a.chat_group_messages;
          var lastMessage = messages[messages.length - 1];
          var isOwnMessage = (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.from_id) === this.authUser.id; // console.log('set seen')
          // console.log(isOwnMessage)
          // console.log(lastMessage)
          // console.log(this.selectedGroup)

          this.scrollMsgsToBottom();

          if (!isOwnMessage) {
            this.socketService.setSeen({
              message_id: lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.id,
              from_id: this.chatForm.value.from_id,
              to_id: this.chatForm.value.to_id,
              from_user: this.chatForm.value.from_user,
              group: this.selectedGroup.name,
              group_id: this.selectedGroup.id,
              seen: 1,
              seen_at: moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD, h:mm:ss a')
            });
          }
        }
      }, {
        key: "getSeenTooltip",
        value: function getSeenTooltip(message) {
          var seenDate = message.group_chat_messages_seen.created_at;
          var thisWeekDate = moment__WEBPACK_IMPORTED_MODULE_6__(seenDate).isSame(new Date(), 'week');
          var seenDateFormatted = moment__WEBPACK_IMPORTED_MODULE_6__(seenDate).format(thisWeekDate ? 'ddd HH:mm' : 'MMM DD, YYYY HH:mm');
          return "".concat(message.first_name, " ").concat(message.last_name, " at ").concat(seenDateFormatted);
        }
      }, {
        key: "getTyping",
        value: function getTyping() {
          var _this30 = this;

          this.socketService.getTyping().subscribe(function (dt) {
            var _a;

            console.log(dt.group, (_a = _this30.selectedGroup) === null || _a === void 0 ? void 0 : _a.name);

            _this30.getTypingTextStatus(dt);
          });
        }
      }, {
        key: "setTyping",
        value: function setTyping() {
          this.socketService.setTyping({
            from_user: this.chatForm.value.from_user,
            group: this.selectedGroup.name,
            message: this.chatForm.value.message
          });
        }
      }, {
        key: "getTypingTextStatus",
        value: function getTypingTextStatus(dt) {
          var _a, _b;

          var sameGroupTyping = ((_a = dt.from_user) === null || _a === void 0 ? void 0 : _a.id) !== this.authUser.id && dt.group === this.selectedGroup.name && dt.message;
          this.typingText = {
            group: sameGroupTyping ? ((_b = this.selectedGroup) === null || _b === void 0 ? void 0 : _b.name) === dt.group : null,
            text: sameGroupTyping ? "".concat(dt.from_user.username, " is typing...") : null
          };
        }
      }, {
        key: "isChatUsersListSize",
        value: function isChatUsersListSize() {
          return _core_helpers_is_responsive__WEBPACK_IMPORTED_MODULE_1__["default"].isChatUsersListSize();
        }
      }, {
        key: "isSeenByAuthUser",
        value: function isSeenByAuthUser(messages) {
          var _this31 = this;

          var f = messages.filter(function (message) {
            var found = false;

            if (message.from_id !== _this31.authUser.id) {
              found = !message.seen_by.find(function (sb) {
                return sb.id === _this31.authUser.id;
              });
            }

            return found;
          });
          return f.length;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return GroupChatComponent;
    }();

    GroupChatComponent.ɵfac = function GroupChatComponent_Factory(t) {
      return new (t || GroupChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_socket_io_service__WEBPACK_IMPORTED_MODULE_10__["SocketIoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_14__["GroupByPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_fix_text_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_15__["FixTextLineBreaksPipe"]));
    };

    GroupChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupChatComponent,
      selectors: [["app-group-chat"]],
      viewQuery: function GroupChatComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chipsInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messagesList = _t.first);
        }
      },
      inputs: {
        authUser: "authUser"
      },
      outputs: {
        groupRemoved: "groupRemoved"
      },
      decls: 85,
      vars: 38,
      consts: [[1, "chat-wrap"], [1, "people-groups-container", 3, "hidden"], ["id", "groups-list", 1, "list-wrap"], [1, "create-group-chat", 3, "hidden", "click"], ["src", "assets/img/noun_create.png", "alt", ""], ["id", "group-chat-form", 3, "formGroup", "hidden"], ["formControlName", "name", "placeholder", "Group name"], ["mat-icon-button", "", 3, "click"], [1, "list"], ["class", "list-chat-group", 3, "active", "unconfirmed", "click", 4, "ngFor", "ngForOf"], [1, "chat", 3, "hidden"], [1, "chat-top"], [3, "formGroup", "hidden"], [1, "chat-about"], [1, "left"], ["for", "group-avatar-input"], [1, "img", 3, "src"], ["id", "group-avatar-input", "type", "file", 3, "hidden", "change"], [1, "group-name"], [1, "center"], [1, "member-add", 3, "hidden"], ["aria-label", "Fruit selection", "formControlName", "member_ids"], ["tagList", ""], [3, "removed", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Member name from your contacts", "matInput", "", "maxlength", "10", 3, "formControl", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matAutocomplete"], ["chipsInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["align", "end"], [3, "click"], [1, "members-list", 3, "hidden"], [4, "ngIf"], ["id", "show-more-members", 3, "click"], [1, "right"], ["mat-icon-button", "", 3, "disableRipple", "click"], ["class", "remove", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 1, "dotes", 3, "matMenuTriggerFor", "disableRipple"], [1, "fas", "fa-ellipsis-v"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], [1, "confirm-joining-group", 3, "hidden"], [1, "actions"], [1, "accept-btn", 3, "click"], [1, "decline-btn", 3, "click"], ["id", "group-messages", 1, "chat-history"], ["groupMessagesList", ""], [3, "hidden"], [4, "ngFor", "ngForOf"], ["class", "text-center font-italic d-block", 4, "ngIf"], [1, "chat-message", 3, "hidden"], [1, "chat-form", 3, "formGroup"], ["cdkTextareaAutosize", "", "formControlName", "message", "placeholder", "Type your message", 1, "flex-1", "mx-3", 3, "keyup", "focus", "keyup.enter"], [1, "icons", 3, "hidden"], ["href", ""], ["src", "assets/img/gif-24px.svg", "alt", ""], ["src", "assets/img/mood-24px.svg", "alt", ""], ["src", "assets/img/send-24px.svg", "alt", ""], [1, "list-chat-group", 3, "click"], [1, "text"], [1, "name"], [1, "seen-circle", 3, "hidden"], [3, "removed"], ["matChipRemove", ""], [3, "value"], ["class", "group-member", 3, "pending", 4, "ngFor", "ngForOf"], [1, "group-member"], [1, "avatar", 3, "matTooltip", "src"], [3, "click", 4, "ngIf"], [1, "status", 3, "ngClass"], [1, "remove", 3, "click"], [1, "fas", "fa-trash"], [1, "data-list"], [1, "message-container", 3, "ngClass"], [1, "message-data", "mb-0", "pl-0", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "img"], [1, "avatar", 3, "src"], [1, "date"], [1, "message", 3, "innerHTML"], [1, "seen"], [1, "seen-avatar", 3, "matTooltip", "src"], [1, "text-center", "font-italic", "d-block"]],
      template: function GroupChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupChatComponent_Template_button_click_3_listener() {
            return ctx.showGroupChatForm = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Create new group ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupChatComponent_Template_button_click_8_listener() {
            return ctx.addGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupChatComponent_Template_button_click_11_listener() {
            return ctx.showGroupChatForm = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GroupChatComponent_li_15_Template, 14, 15, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "getImgPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GroupChatComponent_Template_input_change_24_listener($event) {
            return ctx.changeAvatar($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-chip-list", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, GroupChatComponent_mat_chip_32_Template, 4, 1, "mat-chip", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-autocomplete", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function GroupChatComponent_Template_mat_autocomplete_optionSelected_35_listener($event) {
            return ctx.autoCompleteMemberSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, GroupChatComponent_mat_option_37_Template, 2, 2, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-hint", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Please press 'Enter' after the name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupChatComponent_Template_button_click_40_listener($event) {
            return ctx.addMember($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, GroupChatComponent_ul_43_Template, 2, 1, "ul", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupChatComponent_Template_a_click_44_listener() {
            return ctx.openAllMembersModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Show more ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupChatComponent_Template_button_click_47_listener() {
            return ctx.showMembersInput = !ctx.showMembersInput;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "people");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, GroupChatComponent_div_50_Template, 3, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-menu", null, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupChatComponent_Template_button_click_55_listener() {
            return ctx.showMembersInput = !ctx.showMembersInput;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Add members ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, GroupChatComponent_button_57_Template, 2, 0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Please accept or decline joining to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupChatComponent_Template_button_click_65_listener() {
            return ctx.acceptGroupJoin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Accept");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupChatComponent_Template_button_click_67_listener() {
            return ctx.declineGroupJoin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Decline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul", 46, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, GroupChatComponent_div_72_Template, 6, 4, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, GroupChatComponent_small_73_Template, 2, 1, "small", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "form", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "textarea", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function GroupChatComponent_Template_textarea_keyup_76_listener() {
            return ctx.setTyping();
          })("focus", function GroupChatComponent_Template_textarea_focus_76_listener() {
            return ctx.setSeen();
          })("keyup.enter", function GroupChatComponent_Template_textarea_keyup_enter_76_listener($event) {
            return ctx.sendMessage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("responsive-list", ctx.isChatUsersListSize());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isChatUsersListSize());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showGroupChatForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.groupChatForm)("hidden", !ctx.showGroupChatForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groupsMessages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.selectedGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.groupChatDetailsForm)("hidden", !ctx.selectedGroup || !ctx.ifConfirmedToJoinTheGroup(ctx.selectedGroup));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 35, ctx.selectedGroup == null ? null : ctx.selectedGroup.avatar, "group_avatars"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedGroup == null ? null : ctx.selectedGroup.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showMembersInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputGroupMembers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.memberCtrl)("matChipInputFor", _r1)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matAutocomplete", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredContacts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showMembersInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.groupMembers == null ? null : ctx.groupMembers.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authUser.id === (ctx.selectedGroup == null ? null : ctx.selectedGroup.creator_id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8)("disableRipple", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authUser.id !== (ctx.selectedGroup == null ? null : ctx.selectedGroup.creator_id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.selectedGroup || ctx.ifConfirmedToJoinTheGroup(ctx.selectedGroup));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedGroup == null ? null : ctx.selectedGroup.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", (ctx.selectedGroupMessages == null ? null : ctx.selectedGroupMessages.length) === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedGroupMessages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typingText.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.selectedGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.chatForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isProduction);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormField"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipList"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocomplete"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuItem"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_24__["CdkTextareaAutosize"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipRemove"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"]],
      pipes: [_shared_pipes_get_thumb_path_pipe__WEBPACK_IMPORTED_MODULE_27__["GetThumbPathPipe"], _shared_pipes_fix_text_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_15__["FixTextLineBreaksPipe"], _shared_pipes_get_date_text_for_messages_pipe__WEBPACK_IMPORTED_MODULE_28__["GetDateTextForMessagesPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"]],
      styles: [".chat-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 100vh;\n}\n.chat-wrap[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%] {\n  flex: 0 0 316px;\n  background: #F5F5F5;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #DCDCDC;\n  border-radius: 4px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #aeaeae;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .create-group-chat[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  margin: 4px 0 16px;\n  background: transparent;\n  color: #18B587;\n  font-size: 16px;\n  font-family: \"Muli-Bold\";\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .create-group-chat[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 2px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  max-height: 600px;\n  overflow-x: auto;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  display: flex;\n  border-left: solid 5px transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  border-left: solid 5px #18B587;\n  background: #ffffff;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #18B587;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #18B587;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  border-left: solid 5px #F53C6F;\n  background: #ffffff;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #F53C6F;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #F53C6F;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  margin-right: 22px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 16px;\n  font-weight: 500;\n  color: #545454;\n}\n.chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  display: block;\n  font-size: 14px;\n  font-weight: 300;\n  color: #ACACAC;\n}\n@media screen and (max-width: 1029px) {\n  .chat-wrap[_ngcontent-%COMP%]   .people-groups-container[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  margin-left: 32px;\n  flex: 1;\n  min-width: 350px;\n  margin-top: -50px;\n}\n@media (max-width: 1111px) {\n  .chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-left: 0;\n  }\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #DCDCDC;\n  border-radius: 4px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #aeaeae;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #F5F5F5;\n  padding: 12px 16px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .group-name[_ngcontent-%COMP%] {\n  color: #18B587;\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #F53C6F;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  height: 600px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  padding-right: 48px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.data-list[_ngcontent-%COMP%] {\n  height: 1px;\n  margin: 16px 0 32px;\n  background: #C9C9C9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.data-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #C9C9C9;\n  padding: 0 32px;\n  font-size: 12px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.my-message[_ngcontent-%COMP%] {\n  padding-right: 8px;\n  margin-left: 48px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.my-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background: #18B587;\n  color: #FFFFFF;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.my-message[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-left: 16px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #545454;\n  font-size: 16px;\n  font-weight: 500;\n  margin-right: 16px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 300;\n  color: #545454;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background: #F5F5F5;\n  color: #545454;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  padding: 16px;\n  font-family: \"Muli-Light\";\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .seen[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .seen[_ngcontent-%COMP%]   .seen-avatar[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%] {\n  background: #F5F5F5;\n  display: flex;\n  justify-content: space-between;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  background: #F5F5F5;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message.disabled[_ngcontent-%COMP%] {\n  background-color: #c7c4c4 !important;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .chat-form[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .chat-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 98%;\n  padding: 12px 16px;\n  background: transparent;\n  border: none;\n  height: 100px !important;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .chat-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border: none !important;\n  outline: none !important;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-right: 16px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n@media screen and (max-width: 1029px) {\n  .chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 24px;\n    min-width: 100%;\n  }\n}\n.responsive-list[_ngcontent-%COMP%] {\n  flex: 0 0 100% !important;\n}\n.responsive-list[_ngcontent-%COMP%]   .more-btn[_ngcontent-%COMP%] {\n  display: block;\n}\n.my-message[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%], .my-message[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: none;\n}\n.list-chat-group[_ngcontent-%COMP%] {\n  display: flex;\n}\n.list-chat-group[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n}\n.list-chat-group[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 15px;\n}\n.list-chat-group.unconfirmed[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3) !important;\n}\n.chat-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F5F5F5;\n  padding: 12px 16px;\n}\n.chat-top[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.chat-top[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 20px;\n}\n.chat-top[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .accept-btn[_ngcontent-%COMP%] {\n  width: 119px;\n  height: 36px;\n  padding: 15px 32px;\n  color: #ffffff !important;\n  font-size: 16px;\n  font-family: \"Muli-Light\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s ease-in-out;\n  background: #18B587;\n  background-color: #18B587;\n}\n.chat-top[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .decline-btn[_ngcontent-%COMP%] {\n  width: 119px;\n  height: 36px;\n  padding: 15px 32px;\n  color: #ffffff !important;\n  font-size: 16px;\n  font-family: \"Muli-Light\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s ease-in-out;\n  background: #18B587;\n  background-color: #F53C6F;\n}\n.center[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n}\n.center[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 70%;\n  padding: 5px;\n}\n.center[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.center[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: horizontal;\n  overflow: hidden;\n}\n.center[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%]   #show-more-members[_ngcontent-%COMP%] {\n  width: 110px;\n  color: #18B587;\n  margin-left: 10px;\n}\n.center[_ngcontent-%COMP%]   .member-add[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.center[_ngcontent-%COMP%]   .member-add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 119px;\n  height: 36px;\n  padding: 15px 32px;\n  color: #ffffff !important;\n  font-size: 16px;\n  font-family: \"Muli-Light\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s ease-in-out;\n  background: #18B587;\n  width: 50px;\n}\n#group-chat-form[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 10px;\n}\n#group-chat-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin-left: 25px;\n}\n#group-chat-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 14px;\n  color: #C9C9C9;\n  font-family: \"Muli-Light\";\n}\n#group-chat-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-size: 14px;\n  color: #C9C9C9;\n  font-family: \"Muli-Light\";\n}\n.group-member[_ngcontent-%COMP%] {\n  position: relative;\n  width: 42px;\n  border-radius: 42px;\n  margin-left: 5px;\n}\n.group-member[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 14px;\n  top: 28px;\n  right: 0;\n  padding: 0;\n  line-height: 0;\n}\n.group-member[_ngcontent-%COMP%]   .status.offline[_ngcontent-%COMP%] {\n  background-color: gray;\n}\n.group-member[_ngcontent-%COMP%]   .status.online[_ngcontent-%COMP%] {\n  background-color: #18B587;\n}\n.group-member.pending[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.group-member.pending[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.group-member[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  margin-left: auto;\n  margin-right: auto;\n  display: none;\n  cursor: pointer;\n}\n.group-member[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.group-member[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  display: block;\n}\n.group-member[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.seen-circle[_ngcontent-%COMP%] {\n  background-color: #F53C6F !important;\n  color: #ffffff;\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9zaG93LW1lc3NhZ2VzL2dyb3VwLWNoYXQvQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGdlbmVyYWwtY2hhdC13cmFwLnNjc3MiLCJzcmMvYXBwL2NoYXQvc2hvdy1tZXNzYWdlcy9ncm91cC1jaGF0L2dyb3VwLWNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXQvc2hvdy1tZXNzYWdlcy9ncm91cC1jaGF0L0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NoYXQvc2hvdy1tZXNzYWdlcy9ncm91cC1jaGF0L0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFwcFxcY2hhdFxcc2hvdy1tZXNzYWdlc1xcZ3JvdXAtY2hhdFxcZ3JvdXAtY2hhdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhdC9zaG93LW1lc3NhZ2VzL2dyb3VwLWNoYXQvQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0RKO0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDRFI7QURLSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0hSO0FES1E7RUFDSSxVQUFBO0FDSFo7QURNUTtFQUNJLHVCQUFBO0FDSlo7QURPUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNMWjtBRFFRO0VBQ0ksbUJBQUE7QUNOWjtBRGNRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDWlo7QURjWTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ1poQjtBRGdCUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNkWjtBRGdCWTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUtBLHlCQUFBO0FDZGhCO0FEZ0JnQjtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUNkcEI7QURpQndCO0VBQ0ksY0FBQTtBQ2Y1QjtBRGtCd0I7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNoQjVCO0FEcUJnQjtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUNuQnBCO0FEc0J3QjtFQUNJLGNBQUE7QUNwQjVCO0FEdUJ3QjtFQUNJLGNBQUE7QUNyQjVCO0FEMkJnQjtFQUNJLGtCQUFBO0FDekJwQjtBRDZCb0I7RUFDSSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUMzQnhCO0FEOEJvQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQzVCeEI7QURrQ1E7RUFqSEo7SUFrSFEsT0FBQTtFQy9CVjtBQUNGO0FEa0NJO0VBQ0ksaUJBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2hDUjtBRGlDUTtFQUxKO0lBTVEsYUFBQTtJQUNBLGNBQUE7RUM5QlY7QUFDRjtBRGdDUTtFQUNJLFVBQUE7QUM5Qlo7QURpQ1E7RUFDSSx1QkFBQTtBQy9CWjtBRGtDUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNoQ1o7QURtQ1E7RUFDSSxtQkFBQTtBQ2pDWjtBRG9DUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2xDWjtBRG9DWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ2xDaEI7QURvQ2dCO0VBQ0ksa0JBQUE7QUNsQ3BCO0FEcUNnQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ25DcEI7QUR1Q1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNyQ2hCO0FEd0NvQjtFQUNJLGNFL0xsQjtBRHlKTjtBRDBDZ0I7RUFDSSxpQkFBQTtBQ3hDcEI7QUQ2Q1E7RUFFSSxnQkFBQTtFQUNBLGFBQUE7QUM1Q1o7QUQ4Q1k7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDNUNoQjtBRDhDZ0I7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDNUNwQjtBRDhDb0I7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQzVDeEI7QURnRGdCO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQzlDcEI7QURnRG9CO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDOUN4QjtBRGlEb0I7RUFDSSx5QkFBQTtBQy9DeEI7QURtRGdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2pEcEI7QURtRG9CO0VBQ0ksa0JBQUE7QUNqRHhCO0FEb0RvQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2xEeEI7QURxRG9CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ25EeEI7QUR1RGdCO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNyRHBCO0FEd0RnQjtFQUNJLGlCQUFBO0FDdERwQjtBRHdEb0I7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDdkR4QjtBRDZEUTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDM0RaO0FENkRZO0VBQ0ksbUJBQUE7QUMzRGhCO0FEOERZO0VBQ0ksb0NBQUE7QUM1RGhCO0FEK0RZO0VBQ0ksVUFBQTtBQzdEaEI7QUQrRGdCO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUM3RHBCO0FEK0RvQjtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7QUM3RHhCO0FEa0VZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNoRWhCO0FEa0VnQjtFQUNJLGlCQUFBO0FDaEVwQjtBRGtFb0I7RUFDSSxTQUFBO0FDaEV4QjtBRHNFUTtFQXJNSjtJQXNNUSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VDbkVWO0FBQ0Y7QUQyRUE7RUFDSSx5QkFBQTtBQ3hFSjtBRDBFSTtFQUNJLGNBQUE7QUN4RVI7QURxRkk7RUFDSSxhQUFBO0FDbEZSO0FFblJBO0VBQ0ksYUFBQTtBRnNSSjtBRXBSSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FGc1JSO0FFblJJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUZxUlI7QUVsUkk7RUFDSSwrQ0FBQTtBRm9SUjtBRWhSQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRm1SSjtBRWpSSTtFQUNJLFdBQUE7QUZtUlI7QUVoUkk7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBRmtSUjtBRWhSUTtFQ3ZCSixZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJGMUJTO0VDeUNELHlCRHpDQztBRHFVYjtBRXpSUTtFQzVCSixZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJGMUJTO0VDOENELHlCRC9DTjtBRG9WTjtBRWhTQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FGbVNKO0FFaFNJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUZrU1I7QUUvUkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUZpU1I7QUUvUlE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBRmlTWjtBRTdSUTtFQUNJLFlBQUE7RUFDQSxjRDNFQztFQzRFRCxpQkFBQTtBRitSWjtBRTNSSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUY2UlI7QUUzUlE7RUNyRUosWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CRjFCUztFQ3VGRCxXQUFBO0FGdVNaO0FFL1JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FGa1NKO0FFaFNJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FGa1NSO0FFaFNRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBRmtTWjtBRXJTUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUZrU1o7QUVyUkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FGdVJKO0FFclJJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBRnVSUjtBRXJSUTtFQUNJLHNCQUFBO0FGdVJaO0FFcFJRO0VBQ0kseUJENUlDO0FEa2FiO0FFalJJO0VBQ0ksb0NBQUE7QUZtUlI7QUVqUlE7RUFDSSxZQUFBO0FGbVJaO0FFL1FJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FGaVJSO0FFOVFJO0VBQ0ksb0NBQUE7QUZnUlI7QUU3UVE7RUFDSSxjQUFBO0FGK1FaO0FFNVFRO0VBQ0ksWUFBQTtBRjhRWjtBRXpRQTtFQUNJLG9DQUFBO0VBQ0EsY0RuTEk7RUNvTEosV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUY0UUoiLCJmaWxlIjoic3JjL2FwcC9jaGF0L3Nob3ctbWVzc2FnZXMvZ3JvdXAtY2hhdC9ncm91cC1jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5jaGF0LXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXg6IDAgMCAzMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG5cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRENEQ0RDO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTc0LCAxNzQsIDE3NCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlzdC13cmFwIHtcclxuICAgICAgICAgICAgLy8gbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgIC8vIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY3JlYXRlLWdyb3VwLWNoYXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNHB4IDAgMTZweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMThCNTg3O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saXN0IHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgNXB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCAjMThCNTg3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxOEI1ODc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxOEI1ODc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggI0Y1M0M2RjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRjUzQzZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRjUzQzZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0FDQUNBQztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjlweCkge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2hhdCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTExcHgpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRENEQ0RDO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTc0LCAxNzQsIDE3NCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhdC1hYm91dCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG5cclxuICAgICAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ncm91cC1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE4QjU4NztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIC5yZW1vdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhdC1oaXN0b3J5IHtcclxuICAgICAgICAgICAgLy9tYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQ4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5kYXRhLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTZweCAwIDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0M5QzlDOTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0M5QzlDOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYubXktbWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0OHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxOEI1ODc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2UtZGF0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tZXNzYWdlLWRhdGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGktTGlnaHRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2VlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWVuLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhdC1tZXNzYWdlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgJiA+IGlucHV0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzRjNCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jaGF0LWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyOXB4KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubW9yZS1idG4ge1xyXG4gICAgLy9kaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS1saXN0IHtcclxuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLm1vcmUtYnRuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuLnJlc3BvbnNpdmUtbGlzdCArIC5jaGF0IHtcclxuICAgIC8vZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdGhlci1tZXNzYWdlIHtcclxuXHJcbn1cclxuXHJcbi5teS1tZXNzYWdlIHtcclxuICAgIC5pbWcsIC5uYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcbiIsIi5jaGF0LXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uY2hhdC13cmFwIC5pbWcge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1ncm91cHMtY29udGFpbmVyIHtcbiAgZmxleDogMCAwIDMxNnB4O1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtZ3JvdXBzLWNvbnRhaW5lciA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtZ3JvdXBzLWNvbnRhaW5lciA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI0RDRENEQztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNhZWFlYWU7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtZ3JvdXBzLWNvbnRhaW5lciAuY3JlYXRlLWdyb3VwLWNoYXQge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbjogNHB4IDAgMTZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMThCNTg3O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIgLmNyZWF0ZS1ncm91cC1jaGF0IGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1ncm91cHMtY29udGFpbmVyIC5saXN0IHtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtZ3JvdXBzLWNvbnRhaW5lciAubGlzdCBsaSB7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItbGVmdDogc29saWQgNXB4IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1ncm91cHMtY29udGFpbmVyIC5saXN0IGxpLmFjdGl2ZSB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggIzE4QjU4NztcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1ncm91cHMtY29udGFpbmVyIC5saXN0IGxpLmFjdGl2ZSAudGV4dCAubmFtZSB7XG4gIGNvbG9yOiAjMThCNTg3O1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIgLmxpc3QgbGkuYWN0aXZlIC50ZXh0IHNwYW4ge1xuICBjb2xvcjogIzE4QjU4NztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1ncm91cHMtY29udGFpbmVyIC5saXN0IGxpOmhvdmVyIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCAjRjUzQzZGO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIgLmxpc3QgbGk6aG92ZXIgLnRleHQgLm5hbWUge1xuICBjb2xvcjogI0Y1M0M2Rjtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1ncm91cHMtY29udGFpbmVyIC5saXN0IGxpOmhvdmVyIC50ZXh0IHNwYW4ge1xuICBjb2xvcjogI0Y1M0M2Rjtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1ncm91cHMtY29udGFpbmVyIC5saXN0IGxpIC5pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDIycHg7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtZ3JvdXBzLWNvbnRhaW5lciAubGlzdCBsaSAudGV4dCAubmFtZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIgLmxpc3QgbGkgLnRleHQgc3BhbiB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNBQ0FDQUM7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI5cHgpIHtcbiAgLmNoYXQtd3JhcCAucGVvcGxlLWdyb3Vwcy1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cbi5jaGF0LXdyYXAgLmNoYXQge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTExMXB4KSB7XG4gIC5jaGF0LXdyYXAgLmNoYXQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cbi5jaGF0LXdyYXAgLmNoYXQgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG4uY2hhdC13cmFwIC5jaGF0IDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNEQ0RDREM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNhZWFlYWU7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LWFib3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LWFib3V0IC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtYWJvdXQgLmxlZnQgLmltZyB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtYWJvdXQgLmxlZnQgLmdyb3VwLW5hbWUge1xuICBjb2xvcjogIzE4QjU4NztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtYWJvdXQgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtYWJvdXQgLnJpZ2h0IC5yZW1vdmUgaSB7XG4gIGNvbG9yOiAjRjUzQzZGO1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1hYm91dCAucmlnaHQgPiBkaXYge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGhlaWdodDogNjAwcHg7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LWhpc3RvcnkgbGkge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1oaXN0b3J5IGxpLmRhdGEtbGlzdCB7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IDE2cHggMCAzMnB4O1xuICBiYWNrZ3JvdW5kOiAjQzlDOUM5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaS5kYXRhLWxpc3Qgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjQzlDOUM5O1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaS5teS1tZXNzYWdlIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBtYXJnaW4tbGVmdDogNDhweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaS5teS1tZXNzYWdlIC5tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogIzE4QjU4NztcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LWhpc3RvcnkgbGkubXktbWVzc2FnZSAubWVzc2FnZS1kYXRhIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaSAubWVzc2FnZS1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1oaXN0b3J5IGxpIC5tZXNzYWdlLWRhdGEgLmltZyB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaSAubWVzc2FnZS1kYXRhIC5uYW1lIHtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1oaXN0b3J5IGxpIC5tZXNzYWdlLWRhdGEgLmRhdGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1oaXN0b3J5IGxpIC5tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktTGlnaHRcIjtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaSAuc2VlbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1oaXN0b3J5IGxpIC5zZWVuIC5zZWVuLWF2YXRhciB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LW1lc3NhZ2UgPiBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LW1lc3NhZ2UuZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjNGM0ICFpbXBvcnRhbnQ7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LW1lc3NhZ2UgLmNoYXQtZm9ybSB7XG4gIHdpZHRoOiA5MCU7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LW1lc3NhZ2UgLmNoYXQtZm9ybSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiA5OCU7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1tZXNzYWdlIC5jaGF0LWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1tZXNzYWdlIC5pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LW1lc3NhZ2UgLmljb25zIGEge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtbWVzc2FnZSAuaWNvbnMgYTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbjogMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjlweCkge1xuICAuY2hhdC13cmFwIC5jaGF0IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuXG4ucmVzcG9uc2l2ZS1saXN0IHtcbiAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcbn1cbi5yZXNwb25zaXZlLWxpc3QgLm1vcmUtYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5teS1tZXNzYWdlIC5pbWcsIC5teS1tZXNzYWdlIC5uYW1lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxpc3QtY2hhdC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubGlzdC1jaGF0LWdyb3VwIC5sZWZ0IHtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5saXN0LWNoYXQtZ3JvdXAgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLmxpc3QtY2hhdC1ncm91cC51bmNvbmZpcm1lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50O1xufVxuXG4uY2hhdC10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xufVxuLmNoYXQtdG9wIGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jaGF0LXRvcCAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNoYXQtdG9wIC5hY3Rpb25zIC5hY2NlcHQtYnRuIHtcbiAgd2lkdGg6IDExOXB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJNdWxpLUxpZ2h0XCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThCNTg3O1xufVxuLmNoYXQtdG9wIC5hY3Rpb25zIC5kZWNsaW5lLWJ0biB7XG4gIHdpZHRoOiAxMTlweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1MaWdodFwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogIzE4QjU4NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1M0M2Rjtcbn1cblxuLmNlbnRlciB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2VudGVyIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogNXB4O1xufVxuLmNlbnRlciAubWVtYmVycy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jZW50ZXIgLm1lbWJlcnMtbGlzdCB1bCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jZW50ZXIgLm1lbWJlcnMtbGlzdCAjc2hvdy1tb3JlLW1lbWJlcnMge1xuICB3aWR0aDogMTEwcHg7XG4gIGNvbG9yOiAjMThCNTg3O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5jZW50ZXIgLm1lbWJlci1hZGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jZW50ZXIgLm1lbWJlci1hZGQgYnV0dG9uIHtcbiAgd2lkdGg6IDExOXB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJNdWxpLUxpZ2h0XCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xuICB3aWR0aDogNTBweDtcbn1cblxuI2dyb3VwLWNoYXQtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4jZ3JvdXAtY2hhdC1mb3JtIGlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn1cbiNncm91cC1jaGF0LWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI0M5QzlDOTtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaS1MaWdodFwiO1xufVxuLmdyb3VwLW1lbWJlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDQycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uZ3JvdXAtbWVtYmVyIC5zdGF0dXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHRvcDogMjhweDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuLmdyb3VwLW1lbWJlciAuc3RhdHVzLm9mZmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuLmdyb3VwLW1lbWJlciAuc3RhdHVzLm9ubGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOEI1ODc7XG59XG4uZ3JvdXAtbWVtYmVyLnBlbmRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uZ3JvdXAtbWVtYmVyLnBlbmRpbmcgaW1nIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmdyb3VwLW1lbWJlciBtYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ncm91cC1tZW1iZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uZ3JvdXAtbWVtYmVyOmhvdmVyIG1hdC1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZ3JvdXAtbWVtYmVyOmhvdmVyIGltZyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnNlZW4tY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1M0M2RiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufSIsIiRyZWQ6ICNGNTNDNkY7XHJcbiRtZXRsLWdyZWVuOiAjMThCNTg3O1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJGxpZ2h0X2dyYXk6ICNiM2IzYjM7XHJcbiIsIkBpbXBvcnQgJ35hc3NldHMvc3R5bGVzL2dlbmVyYWwtY2hhdC13cmFwJztcclxuQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAnbWl4aW5zJztcclxuXHJcblxyXG4ubGlzdC1jaGF0LWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmxlZnQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi51bmNvbmZpcm1lZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGF0LXRvcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAuYWNjZXB0LWJ0biB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlZ3VsYXJCdXR0b247XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtZXRsLWdyZWVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlY2xpbmUtYnRuIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgcmVndWxhckJ1dHRvbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG5cclxuICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWVtYmVycy1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNzaG93LW1vcmUtbWVtYmVycyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICRtZXRsLWdyZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbWJlci1hZGQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgcmVndWxhckJ1dHRvbjtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4jZ3JvdXAtY2hhdC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcblxyXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI0M5QzlDOTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVsaS1MaWdodFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIC8vQGluY2x1ZGUgcmVndWxhckJ1dHRvbjtcclxuICAgICAgICAvL3dpZHRoOiA2OHB4O1xyXG4gICAgICAgIC8vcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4uZ3JvdXAtbWVtYmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG4gICAgLnN0YXR1cyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAgIHRvcDogMjhweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG5cclxuICAgICAgICAmLm9mZmxpbmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5vbmxpbmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWV0bC1ncmVlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgICYucGVuZGluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG5cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNlZW4tY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbkBtaXhpbiByZWRCdXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIHJlZ3VsYXJCdXR0b24ge1xyXG4gICAgd2lkdGg6IDExOXB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1MaWdodFwiO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbWV0bC1ncmVlbjtcclxufVxyXG5cclxuXHJcbi8vIFBsYXlsaXN0IHZpZGVvcyBtb2RhbFxyXG5AbWl4aW4gdmlkZW9JdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE4QjU4NztcclxuICAgIH1cclxuXHJcbiAgICAmLmFkZGVkIHtcclxuXHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIHNwYW4uYWRkZWQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0yNHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJBZGRlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNTNjNmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyNHB4IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNob3J0ZW5lZC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLnRhZ3Mge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFnSXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWl4aW4gaW5wdXRXcmFwIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgICAgICAgJi5zZWFyY2gge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODE4MTgxMjE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFnSXRlbSB7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgcGFkZGluZzogMnB4IDExcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0VFRUVFRTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBjb2xvcjogIzU0NTQ1NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vLyBQbGF5bGlzdCBpdGVtIGZvciAnVmlkZW9zJyBzZWN0aW9uXHJcbkBtaXhpbiBwbGF5bGlzdEl0ZW0ge1xyXG5cclxuICAgIC5wbGF5bGlzdC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA0MzJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAgIC50aHVtYm5haWwtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAuc2hvcnQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDlweDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MzJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZha2UtYmcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDEsIDEsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzdG9ja3NJdGVtIHtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDE3OXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIHBhZGRpbmc6IDI0cHggOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuXHJcblxyXG4gICAgJi5zdG9jay1pdGVtLWdyZWVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RvY2staXRlbS1yZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRyZWQgMCAwIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stZm9sbG93LCAuc3RvY2stdW5mb2xsb3cge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAudW5mb2xsb3ctYnRuIHtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stbmFtZSwgLnN0b2NrLXByaWNlLWNoYW5nZSwgLnN0b2NrLXByaWNlLWNoYW5nZS1wZXJjZW50IHtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNdWxpLUxpZ2h0JztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stcHJpY2Uge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011bGktQm9sZCc7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kb2xsYXItc2lnbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC01cHg7XHJcbiAgICAgICAgdG9wOiAtNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011bGktQm9sZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0b2NrLXByaWNlLWRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-group-chat',
          templateUrl: './group-chat.component.html',
          styleUrls: ['./group-chat.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _core_services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"]
        }, {
          type: _core_services_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"]
        }, {
          type: _core_services_socket_io_service__WEBPACK_IMPORTED_MODULE_10__["SocketIoService"]
        }, {
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]
        }, {
          type: _shared_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_14__["GroupByPipe"]
        }, {
          type: _shared_pipes_fix_text_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_15__["FixTextLineBreaksPipe"]
        }];
      }, {
        authUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        chipsInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['chipsInput']
        }],
        messagesList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['groupMessagesList']
        }],
        groupRemoved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/chat/show-messages/show-messages.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/chat/show-messages/show-messages.component.ts ***!
    \***************************************************************/

  /*! exports provided: ShowMessagesComponent */

  /***/
  function srcAppChatShowMessagesShowMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowMessagesComponent", function () {
      return ShowMessagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @core/services/chat.service */
    "./src/app/core/services/chat.service.ts");
    /* harmony import */


    var _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/pipes/get-auth-user.pipe */
    "./src/app/shared/pipes/get-auth-user.pipe.ts");
    /* harmony import */


    var _core_services_socket_io_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/services/socket-io.service */
    "./src/app/core/services/socket-io.service.ts");
    /* harmony import */


    var _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/services/subject.service */
    "./src/app/core/services/subject.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @shared/pipes/group-by.pipe */
    "./src/app/shared/pipes/group-by.pipe.ts");
    /* harmony import */


    var _shared_components_user_tags_user_tags_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/components/user-tags/user-tags.component */
    "./src/app/shared/components/user-tags/user-tags.component.ts");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _direct_chat_direct_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./direct-chat/direct-chat.component */
    "./src/app/chat/show-messages/direct-chat/direct-chat.component.ts");
    /* harmony import */


    var _group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./group-chat/group-chat.component */
    "./src/app/chat/show-messages/group-chat/group-chat.component.ts");

    function ShowMessagesComponent_ng_container_0_app_direct_chat_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-direct-chat", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newMessagesCountReceived", function ShowMessagesComponent_ng_container_0_app_direct_chat_8_Template_app_direct_chat_newMessagesCountReceived_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3.newMessagesCountInDirect = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("authUser", ctx_r1.authUser);
      }
    }

    function ShowMessagesComponent_ng_container_0_app_group_chat_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-group-chat", 7);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("authUser", ctx_r2.authUser);
      }
    }

    function ShowMessagesComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-tags");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowMessagesComponent_ng_container_0_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.changeTab("direct");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Chat ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowMessagesComponent_ng_container_0_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.changeTab("group");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Group Chat ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ShowMessagesComponent_ng_container_0_app_direct_chat_8_Template, 1, 1, "app-direct-chat", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ShowMessagesComponent_ng_container_0_app_group_chat_9_Template, 1, 1, "app-group-chat", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.activeTab == "direct");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx_r0.newMessagesCountInDirect.toString())("matBadgeHidden", ctx_r0.activeTab === "direct" || ctx_r0.newMessagesCountInDirect === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.activeTab === "group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx_r0.newMessagesCountInGroups.toString())("matBadgeHidden", ctx_r0.activeTab === "group" || ctx_r0.newMessagesCountInGroups === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "direct" && ctx_r0.authUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeTab == "group" && ctx_r0.authUser);
      }
    }

    var ShowMessagesComponent = /*#__PURE__*/function () {
      function ShowMessagesComponent(chatService, getAuthUser, socketService, subject, datePipe, groupBy) {
        _classCallCheck(this, ShowMessagesComponent);

        this.chatService = chatService;
        this.getAuthUser = getAuthUser;
        this.socketService = socketService;
        this.subject = subject;
        this.datePipe = datePipe;
        this.groupBy = groupBy;
        this.activeTab = 'direct';
        this.groupsMessages = [];
        this.groupsLoaded = false;
        this.subscriptions = [];
        this.newMessagesCountInGroups = 0;
        this.newMessagesCountInDirect = 0;
      }

      _createClass(ShowMessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authUser = this.getAuthUser.transform();
          this.getGroupsMessages();
        }
      }, {
        key: "changeTab",
        value: function changeTab(tab) {
          this.activeTab = tab;
        }
      }, {
        key: "getGroupsMessages",
        value: function getGroupsMessages() {
          var _this32 = this;

          this.subscriptions.push(this.chatService.getGroupsMessages({
            user_id: this.authUser.id,
            blocked: 0
          }).subscribe(function (dt) {
            _this32.groupsMessages = dt;
            _this32.groupsLoaded = true;
            var newMessagesSource = dt.filter(function (fm) {
              return fm.new_messages_count > 0;
            });
            console.log(newMessagesSource);
            _this32.newMessagesCountInGroups = newMessagesSource.length;

            _this32.subject.setNewMessagesSourceData({
              source: newMessagesSource,
              type: 'group'
            });
          }));
        }
      }]);

      return ShowMessagesComponent;
    }();

    ShowMessagesComponent.ɵfac = function ShowMessagesComponent_Factory(t) {
      return new (t || ShowMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_2__["GetAuthUserPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_socket_io_service__WEBPACK_IMPORTED_MODULE_3__["SocketIoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_6__["GroupByPipe"]));
    };

    ShowMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowMessagesComponent,
      selectors: [["app-show-messages"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "tab-wrap"], ["matBadgePosition", "before", 1, "tab", "direct-tab", 3, "matBadge", "matBadgeHidden", "click"], [1, "tab", "group-tab", 3, "matBadge", "matBadgeHidden", "click"], [3, "authUser", "newMessagesCountReceived", 4, "ngIf"], [3, "authUser", 4, "ngIf"], [3, "authUser", "newMessagesCountReceived"], [3, "authUser"]],
      template: function ShowMessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShowMessagesComponent_ng_container_0_Template, 10, 10, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authUser);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_user_tags_user_tags_component__WEBPACK_IMPORTED_MODULE_7__["UserTagsComponent"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadge"], _direct_chat_direct_chat_component__WEBPACK_IMPORTED_MODULE_9__["DirectChatComponent"], _group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_10__["GroupChatComponent"]],
      styles: [".categories[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 10px;\n  flex-wrap: wrap;\n  border-bottom: 0.5px solid #E2E2E2;\n  margin-bottom: 24px;\n}\n\n.categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 2px;\n  margin-bottom: 8px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 22px;\n  border-radius: 11px;\n  padding: 2px 11px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #EEEEEE;\n  transition: 0.3s ease-in-out;\n  color: #545454 !important;\n  font-size: 14px;\n  font-family: \"Muli-Regular\";\n  cursor: pointer;\n}\n\n.categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #F53C6F;\n  color: white !important;\n  cursor: pointer;\n}\n\n.categories.border-none[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n}\n\n.direct-tab[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  z-index: 300;\n  left: 0;\n}\n\n.tab-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 16px;\n  width: 100%;\n  max-width: 317px;\n  background-color: #f5f5f5;\n}\n\n.tab-wrap[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 6px 16px;\n  font-size: 16px;\n  font-weight: 500;\n  background: #C9C9C9;\n  color: #FFFFFF;\n  text-align: left;\n  transition: all 0.3s ease;\n}\n\n.tab-wrap[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  background: #F53C6F;\n}\n\n.tab-wrap[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(.active):hover {\n  background: #18B587;\n  color: #FFFFFF;\n}\n\n@media (max-width: 1111px) {\n  .tab-wrap[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9zaG93LW1lc3NhZ2VzL0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjYXRlZ29yaWVzLnNjc3MiLCJzcmMvYXBwL2NoYXQvc2hvdy1tZXNzYWdlcy9zaG93LW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGF0L3Nob3ctbWVzc2FnZXMvQzpcXHByb2plY3RzXFxtZXRsdHZcXGZyb250ZW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvY2hhdC9zaG93LW1lc3NhZ2VzL0M6XFxwcm9qZWN0c1xcbWV0bHR2XFxmcm9udGVuZC9zcmNcXGFwcFxcY2hhdFxcc2hvdy1tZXNzYWdlc1xcc2hvdy1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQUo7O0FER0E7RUU0R0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUQzR0o7O0FEUkE7O0VBRUksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNXSjs7QUUvQkk7RUFDSSxTQUFBO0VBQ0EsU0FBQTtBRmtDUjs7QUU3Qkk7RUFDSSxZQUFBO0VBQ0EsT0FBQTtBRmdDUjs7QUUzQkE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBRjhCSjs7QUU1Qkk7RUFDSSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FGOEJSOztBRTVCUTtFQUNJLG1CQUFBO0FGOEJaOztBRTNCUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBRjZCWjs7QUV6Qkk7RUEzQko7SUE0QlEsZUFBQTtJQUNBLGlCQUFBO0VGNEJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGF0L3Nob3ctbWVzc2FnZXMvc2hvdy1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XHJcbi5jYXRlZ29yaWVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNFMkUyRTI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyBsaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMgbGkgYSB7XHJcbiAgICBAaW5jbHVkZSB0YWdJdGVtO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyBsaSBhLmFjdGl2ZSxcclxuLmNhdGVnb3JpZXMgbGkgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjUzQzZGO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLmNhdGVnb3JpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjRTJFMkUyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uY2F0ZWdvcmllcyBsaSB7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLmNhdGVnb3JpZXMgbGkgYSB7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgcGFkZGluZzogMnB4IDExcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogIzU0NTQ1NCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktUmVndWxhclwiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXRlZ29yaWVzIGxpIGEuYWN0aXZlLFxuLmNhdGVnb3JpZXMgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNGNTNDNkY7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXRlZ29yaWVzLmJvcmRlci1ub25lIHtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5kaXJlY3QtdGFiIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHotaW5kZXg6IDMwMDtcbiAgbGVmdDogMDtcbn1cblxuLnRhYi13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuLnRhYi13cmFwIC50YWIge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kOiAjQzlDOUM5O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi50YWItd3JhcCAudGFiLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNGNTNDNkY7XG59XG4udGFiLXdyYXAgLnRhYjpub3QoLmFjdGl2ZSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTExcHgpIHtcbiAgLnRhYi13cmFwIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuQG1peGluIHJlZEJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTFweDtcclxuICAgIGJhY2tncm91bmQ6ICRyZWQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNdWxpLVJlZ3VsYXJcIjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gcmVndWxhckJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTE5cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNdWxpLUxpZ2h0XCI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgIGJhY2tncm91bmQ6ICRtZXRsLWdyZWVuO1xyXG59XHJcblxyXG5cclxuLy8gUGxheWxpc3QgdmlkZW9zIG1vZGFsXHJcbkBtaXhpbiB2aWRlb0l0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMThCNTg3O1xyXG4gICAgfVxyXG5cclxuICAgICYuYWRkZWQge1xyXG5cclxuICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgc3Bhbi5hZGRlZC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTI0cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIkFkZGVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1M2M2ZjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDI0cHggNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2hvcnRlbmVkLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAudGFncyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWdJdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtaXhpbiBpbnB1dFdyYXAge1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuICAgICAgICAmLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4MTgxODEyMTtcclxuICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWdJdGVtIHtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICBwYWRkaW5nOiAycHggMTFweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgIGNvbG9yOiAjNTQ1NDU0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNdWxpLVJlZ3VsYXJcIjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi8vIFBsYXlsaXN0IGl0ZW0gZm9yICdWaWRlb3MnIHNlY3Rpb25cclxuQG1peGluIHBsYXlsaXN0SXRlbSB7XHJcblxyXG4gICAgLnBsYXlsaXN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDQzMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgICAgLnRodW1ibmFpbC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5zaG9ydC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZmFrZS1iZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMSwgMSwgMSwgMC4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHN0b2Nrc0l0ZW0ge1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTc5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgcGFkZGluZzogMjRweCA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG5cclxuXHJcbiAgICAmLnN0b2NrLWl0ZW0tZ3JlZW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxOEI1ODc7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdG9jay1pdGVtLXJlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHJlZCAwIDAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjRkZGRkZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdG9jay1mb2xsb3csIC5zdG9jay11bmZvbGxvdyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC51bmZvbGxvdy1idG4ge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdG9jay1uYW1lLCAuc3RvY2stcHJpY2UtY2hhbmdlLCAuc3RvY2stcHJpY2UtY2hhbmdlLXBlcmNlbnQge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011bGktTGlnaHQnO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdG9jay1wcmljZSB7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1Cb2xkJztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byA0cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRvbGxhci1zaWduIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogLTVweDtcclxuICAgICAgICB0b3A6IC02cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1Cb2xkJztcclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stcHJpY2UtZGV0YWlscyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgJ2NhdGVnb3JpZXMnO1xyXG5cclxuLmNhdGVnb3JpZXMge1xyXG4gICAgJi5ib3JkZXItbm9uZSB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmRpcmVjdC10YWIge1xyXG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcclxuICAgICAgICB6LWluZGV4OiAzMDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi50YWItd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzE3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG5cclxuICAgIC50YWIge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0M5QzlDOTtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y1M0M2RjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bm90KC5hY3RpdmUpOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE4QjU4NztcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTExcHgpIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowMessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-show-messages',
          templateUrl: './show-messages.component.html',
          styleUrls: ['./show-messages.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]
        }, {
          type: _shared_pipes_get_auth_user_pipe__WEBPACK_IMPORTED_MODULE_2__["GetAuthUserPipe"]
        }, {
          type: _core_services_socket_io_service__WEBPACK_IMPORTED_MODULE_3__["SocketIoService"]
        }, {
          type: _core_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
        }, {
          type: _shared_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_6__["GroupByPipe"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=chat-chat-module-es5.js.map