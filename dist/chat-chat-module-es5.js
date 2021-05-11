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
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatModule, {
        declarations: [_show_chatrooms_show_chatrooms_component__WEBPACK_IMPORTED_MODULE_3__["ShowChatroomsComponent"], _show_messages_show_messages_component__WEBPACK_IMPORTED_MODULE_4__["ShowMessagesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_show_chatrooms_show_chatrooms_component__WEBPACK_IMPORTED_MODULE_3__["ShowChatroomsComponent"], _show_messages_show_messages_component__WEBPACK_IMPORTED_MODULE_4__["ShowMessagesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"]]
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
      styles: [".categories[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 10px;\n  flex-wrap: wrap;\n  border-bottom: 0.5px solid #E2E2E2;\n  margin-bottom: 24px;\n}\n\n.categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 2px;\n  margin-bottom: 8px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 22px;\n  border-radius: 11px;\n  padding: 2px 11px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #EEEEEE;\n  transition: 0.3s ease-in-out;\n  color: #545454 !important;\n  font-size: 14px;\n  font-family: \"Muli-Regular\";\n  cursor: pointer;\n}\n\n.categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #F53C6F;\n  color: white !important;\n  cursor: pointer;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #18B587;\n  font-weight: bold;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%] {\n  margin: 32px 0;\n  padding: 16px 24px 24px;\n  background: #F5F5F5;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #545454;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 240px;\n  padding: 8px 12px;\n  border: 0;\n  color: #545454;\n  outline: none;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 14px;\n  border: 0;\n  color: #545454;\n  outline: none;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .add-photo[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  color: #C9C9C9;\n  font-size: 16px;\n  font-weight: bold;\n  transition: all 0.1s ease;\n  cursor: pointer;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .add-photo[_ngcontent-%COMP%]:hover {\n  color: #18B587;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .add-photo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .add-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 12px;\n  padding: 0;\n  cursor: auto;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 24px;\n  background: #C9C9C9;\n  color: #ffffff;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .create-post[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #18B587;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 24px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 48px 12px 16px;\n  border: 0;\n  background: #81818121;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #545454;\n  cursor: pointer;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding: 0;\n  border: 0;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 8px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  padding: 12px;\n  background: #F5F5F5;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #545454;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  color: #18B587;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 16px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  background: transparent;\n  color: #c9c9c9;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button.vote-up-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button.vote-down-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #18B587;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left-wrap[_ngcontent-%COMP%]   .voting-container[_ngcontent-%COMP%]   .vote-count[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  text-align: center;\n  font-size: 12px;\n  color: #545454;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0 36px 4px 12px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #545454;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 16px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n  color: #545454;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 40px;\n  display: flex;\n  text-decoration: none;\n  color: #545454;\n  transition: all 0.1s ease;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #18B587;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n\n.chatrooms-list[_ngcontent-%COMP%]   .chatrooms-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .post-menu[_ngcontent-%COMP%]   .dotes[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9zaG93LWNoYXRyb29tcy9DOlxccHJvamVjdHNcXHRyYWRpbmdcXGZyb250ZW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGNhdGVnb3JpZXMuc2NzcyIsInNyYy9hcHAvY2hhdC9zaG93LWNoYXRyb29tcy9zaG93LWNoYXRyb29tcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhdC9zaG93LWNoYXRyb29tcy9DOlxccHJvamVjdHNcXHRyYWRpbmdcXGZyb250ZW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvY2hhdC9zaG93LWNoYXRyb29tcy9DOlxccHJvamVjdHNcXHRyYWRpbmdcXGZyb250ZW5kL3NyY1xcYXBwXFxjaGF0XFxzaG93LWNoYXRyb29tc1xcc2hvdy1jaGF0cm9vbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0FKOztBREdBO0VFOEZJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FEN0ZKOztBRFJBOztFQUVJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDV0o7O0FFaENJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRm1DUjs7QUVoQ0k7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRmtDUjs7QUVoQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUZrQ1o7O0FFaENZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUZrQ2hCOztBRS9CWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRmlDaEI7O0FFN0JRO0VBQ0ksZ0JBQUE7QUYrQlo7O0FFN0JZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBRitCaEI7O0FFM0JRO0VBQ0ksZ0JBQUE7QUY2Qlo7O0FFM0JZO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FGNkJoQjs7QUV6QlE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUYyQlo7O0FFekJZO0VBQ0ksY0FBQTtBRjJCaEI7O0FFeEJZO0VBQ0ksaUJBQUE7QUYwQmhCOztBRXZCWTtFQUNJLGFBQUE7QUZ5QmhCOztBRXJCUTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUZ1Qlo7O0FFckJZO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUZ1QmhCOztBRXJCZ0I7RUFDSSxtQkFBQTtBRnVCcEI7O0FFakJJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBRm1CUjs7QUVqQlE7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUZtQlo7O0FFaEJRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUZrQlo7O0FFZEk7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FGZ0JSOztBRWRRO0VBQ0kscUJBQUE7QUZnQlo7O0FFYlE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUZlWjs7QUVWUTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FGWVo7O0FFVlk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUZZaEI7O0FFVmdCO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FGWXBCOztBRVZvQjtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBRll4Qjs7QUVQWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBRlNoQjs7QUVOb0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUZReEI7O0FFTndCO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBRlE1Qjs7QUVMZ0M7RUFDSSx5QkFBQTtBRk9wQzs7QUVGZ0M7RUFDSSx3QkFBQTtBRklwQzs7QUVBNEI7RUFDSSxjQUFBO0FGRWhDOztBRUM0QjtFQUNJLGVBQUE7QUZDaEM7O0FFR3dCO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUZENUI7O0FFTWdCO0VBQ0ksT0FBQTtFQUNBLHdCQUFBO0FGSnBCOztBRU1vQjtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRkp4Qjs7QUVPb0I7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUZMeEI7O0FFUW9CO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FGTnhCOztBRVF3QjtFQUNJLGFBQUE7QUZONUI7O0FFUTRCO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUZOaEM7O0FFUWdDO0VBQ0ksY0FBQTtBRk5wQzs7QUVTZ0M7RUFDSSxrQkFBQTtBRlBwQzs7QUVZd0I7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBRlY1QiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvc2hvdy1jaGF0cm9vbXMvc2hvdy1jaGF0cm9vbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xyXG4uY2F0ZWdvcmllcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjRTJFMkUyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMgbGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzIGxpIGEge1xyXG4gICAgQGluY2x1ZGUgdGFnSXRlbTtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMgbGkgYS5hY3RpdmUsXHJcbi5jYXRlZ29yaWVzIGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0Y1M0M2RjtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi5jYXRlZ29yaWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI0UyRTJFMjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmNhdGVnb3JpZXMgbGkge1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5jYXRlZ29yaWVzIGxpIGEge1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIHBhZGRpbmc6IDJweCAxMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0VFRUVFRTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICM1NDU0NTQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJNdWxpLVJlZ3VsYXJcIjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2F0ZWdvcmllcyBsaSBhLmFjdGl2ZSxcbi5jYXRlZ29yaWVzIGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRjUzQzZGO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hhdHJvb21zLWxpc3QgaDEge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiAjMThCNTg3O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY3JlYXRlLXBvc3Qge1xuICBtYXJnaW46IDMycHggMDtcbiAgcGFkZGluZzogMTZweCAyNHB4IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNyZWF0ZS1wb3N0IC5pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNoYXRyb29tcy1saXN0IC5jcmVhdGUtcG9zdCAuaW1nIGltZyB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNyZWF0ZS1wb3N0IC5pbWcgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzU0NTQ1NDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY3JlYXRlLXBvc3QgLnNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNyZWF0ZS1wb3N0IC5zZWxlY3Qgc2VsZWN0IHtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNyZWF0ZS1wb3N0IC5pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNyZWF0ZS1wb3N0IC5pbnB1dCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY3JlYXRlLXBvc3QgLmFkZC1waG90byB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI0M5QzlDOTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNoYXRyb29tcy1saXN0IC5jcmVhdGUtcG9zdCAuYWRkLXBob3RvOmhvdmVyIHtcbiAgY29sb3I6ICMxOEI1ODc7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNyZWF0ZS1wb3N0IC5hZGQtcGhvdG8gc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmNoYXRyb29tcy1saXN0IC5jcmVhdGUtcG9zdCAuYWRkLXBob3RvIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY3JlYXRlLXBvc3QgLmJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogYXV0bztcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY3JlYXRlLXBvc3QgLmJ0biBidXR0b24ge1xuICBwYWRkaW5nOiA2cHggMjRweDtcbiAgYmFja2dyb3VuZDogI0M5QzlDOTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNyZWF0ZS1wb3N0IC5idG4gYnV0dG9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxOEI1ODc7XG59XG4uY2hhdHJvb21zLWxpc3QgLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuc2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggNDhweCAxMnB4IDE2cHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogIzgxODE4MTIxO1xufVxuLmNoYXRyb29tcy1saXN0IC5zZWFyY2ggc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE0cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNhdGVnb3JpZXMge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNhdGVnb3JpZXMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2F0ZWdvcmllcyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5wb3N0ZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2hhdHJvb21zLWxpc3QgLmNoYXRyb29tcy1pdGVtcyAuaXRlbSAucG9zdGVkIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNoYXRyb29tcy1pdGVtcyAuaXRlbSAucG9zdGVkIHAgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBjb2xvcjogIzE4QjU4Nztcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIC5sZWZ0LXdyYXAgLnZvdGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNoYXRyb29tcy1saXN0IC5jaGF0cm9vbXMtaXRlbXMgLml0ZW0gLmluZm8gLmxlZnQtd3JhcCAudm90aW5nLWNvbnRhaW5lciBidXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNjOWM5Yzk7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNoYXRyb29tcy1pdGVtcyAuaXRlbSAuaW5mbyAubGVmdC13cmFwIC52b3RpbmctY29udGFpbmVyIGJ1dHRvbi52b3RlLXVwLWJ0biBzcGFuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIC5sZWZ0LXdyYXAgLnZvdGluZy1jb250YWluZXIgYnV0dG9uLnZvdGUtZG93bi1idG4gc3BhbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIC5sZWZ0LXdyYXAgLnZvdGluZy1jb250YWluZXIgYnV0dG9uLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMThCNTg3O1xufVxuLmNoYXRyb29tcy1saXN0IC5jaGF0cm9vbXMtaXRlbXMgLml0ZW0gLmluZm8gLmxlZnQtd3JhcCAudm90aW5nLWNvbnRhaW5lciBidXR0b24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIC5sZWZ0LXdyYXAgLnZvdGluZy1jb250YWluZXIgLnZvdGUtY291bnQge1xuICBtYXJnaW46IDhweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNoYXRyb29tcy1pdGVtcyAuaXRlbSAuaW5mbyAucmlnaHQtd3JhcCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDAgMzZweCA0cHggMTJweDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIC5yaWdodC13cmFwIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNoYXRyb29tcy1pdGVtcyAuaXRlbSAuaW5mbyAucmlnaHQtd3JhcCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIC5yaWdodC13cmFwIC5wb3N0LW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuLmNoYXRyb29tcy1saXN0IC5jaGF0cm9vbXMtaXRlbXMgLml0ZW0gLmluZm8gLnJpZ2h0LXdyYXAgLnBvc3QtbWVudSAubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNoYXRyb29tcy1pdGVtcyAuaXRlbSAuaW5mbyAucmlnaHQtd3JhcCAucG9zdC1tZW51IC5tZW51IGEge1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG59XG4uY2hhdHJvb21zLWxpc3QgLmNoYXRyb29tcy1pdGVtcyAuaXRlbSAuaW5mbyAucmlnaHQtd3JhcCAucG9zdC1tZW51IC5tZW51IGE6aG92ZXIge1xuICBjb2xvcjogIzE4QjU4Nztcbn1cbi5jaGF0cm9vbXMtbGlzdCAuY2hhdHJvb21zLWl0ZW1zIC5pdGVtIC5pbmZvIC5yaWdodC13cmFwIC5wb3N0LW1lbnUgLm1lbnUgYSBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLmNoYXRyb29tcy1saXN0IC5jaGF0cm9vbXMtaXRlbXMgLml0ZW0gLmluZm8gLnJpZ2h0LXdyYXAgLnBvc3QtbWVudSAuZG90ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbkBtaXhpbiByZWRCdXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuXHJcbi8vIFBsYXlsaXN0IHZpZGVvcyBtb2RhbFxyXG5AbWl4aW4gdmlkZW9JdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE4QjU4NztcclxuICAgIH1cclxuXHJcbiAgICAmLmFkZGVkIHtcclxuXHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIHNwYW4uYWRkZWQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0yNHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJBZGRlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNTNjNmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyNHB4IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNob3J0ZW5lZC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLnRhZ3Mge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFnSXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWl4aW4gaW5wdXRXcmFwIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgICAgICAgJi5zZWFyY2gge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODE4MTgxMjE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFnSXRlbSB7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgcGFkZGluZzogMnB4IDExcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0VFRUVFRTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBjb2xvcjogIzU0NTQ1NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaS1SZWd1bGFyXCI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vLyBQbGF5bGlzdCBpdGVtIGZvciAnVmlkZW9zJyBzZWN0aW9uXHJcbkBtaXhpbiBwbGF5bGlzdEl0ZW0ge1xyXG5cclxuICAgIC5wbGF5bGlzdC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA0MzJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAgIC50aHVtYm5haWwtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAuc2hvcnQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDlweDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MzJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZha2UtYmcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDEsIDEsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzdG9ja3NJdGVtIHtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDE3OXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIHBhZGRpbmc6IDI0cHggOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuXHJcblxyXG4gICAgJi5zdG9jay1pdGVtLWdyZWVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RvY2staXRlbS1yZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRyZWQgMCAwIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuY3J5cHRvUmVtb3ZlLCAuc3RvY2stZm9sbG93LCAuc3RvY2stdW5mb2xsb3cge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC51bmZvbGxvdy1idG4ge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdG9jay1uYW1lLCAuc3RvY2stcHJpY2UtY2hhbmdlLCAuc3RvY2stcHJpY2UtY2hhbmdlLXBlcmNlbnQge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011bGktTGlnaHQnO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdG9jay1wcmljZSB7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1Cb2xkJztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byA0cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRvbGxhci1zaWduIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogLTVweDtcclxuICAgICAgICB0b3A6IC02cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1Cb2xkJztcclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2stcHJpY2UtZGV0YWlscyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgJ2NhdGVnb3JpZXMnO1xyXG4uY2hhdHJvb21zLWxpc3Qge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICBjb2xvcjogIzE4QjU4NztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuY3JlYXRlLXBvc3Qge1xyXG4gICAgICAgIG1hcmdpbjogMzJweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjRweCAyNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcblxyXG4gICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnB1dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcblxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWRkLXBob3RvIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQzlDOUM5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMThCNTg3O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgY3Vyc29yOiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAyNHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0M5QzlDOTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDQ4cHggMTJweCAxNnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4MTgxODEyMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2hhdHJvb21zLWl0ZW1zIHtcclxuICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcblxyXG4gICAgICAgICAgICAucG9zdGVkIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE4QjU4NztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5sZWZ0LXdyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgIC52b3RpbmctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2M5YzljOTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnZvdGUtdXAtYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi52b3RlLWRvd24tYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxOEI1ODc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudm90ZS1jb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJpZ2h0LXdyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAzNnB4IDRweCAxMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucG9zdC1tZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE4QjU4NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZG90ZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"]
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ShowMessagesComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShowMessagesComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create new group chat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Lorem ipsum dolor sit amet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShowMessagesComponent_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Wednesday, February 5th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "15\u058912");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "15\u058912");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "15\u058912");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "15\u058912");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "15\u058912");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "15\u058912");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShowMessagesComponent_div_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Group chat name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Wednesday, February 5th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "15\u058912");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit amet accusantium quae necessitatibus, id velit qui doloribus non vero voluptates. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "15\u058912");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem possimus excepturi ipsam? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "15\u058912");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias mollitia quia, odit corporis incidunt quasi. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "15\u058912");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ShowMessagesComponent = /*#__PURE__*/function () {
      function ShowMessagesComponent() {
        _classCallCheck(this, ShowMessagesComponent);

        this.activeTab = 'direct';
      }

      _createClass(ShowMessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeTab",
        value: function changeTab(tab) {
          this.activeTab = tab;
        }
      }]);

      return ShowMessagesComponent;
    }();

    ShowMessagesComponent.ɵfac = function ShowMessagesComponent_Factory(t) {
      return new (t || ShowMessagesComponent)();
    };

    ShowMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowMessagesComponent,
      selectors: [["app-show-messages"]],
      decls: 48,
      vars: 8,
      consts: [[1, "categories", "border-none"], [1, "active"], [1, "chat-wrap"], [1, "people-list"], [1, "tab-wrap"], [1, "tab", 3, "click"], ["class", "list-wrap", 4, "ngIf"], ["class", "chat", 4, "ngIf"], [1, "list-wrap"], [1, "list"], [1, "img", 2, "background-image", "url(assets/img/item-1.png)"], [1, "text"], [1, "name"], [1, "CreateGroupChat"], ["src", "assets/img/noun_create.png", "alt", ""], [1, "chat"], [1, "chat-about"], [1, "left"], [1, "right"], [1, "remove"], ["href", ""], [1, "fas", "fa-trash"], [1, "dotes"], [1, "fas", "fa-ellipsis-v"], [1, "chat-history"], [1, "data_list"], [1, "other-message"], [1, "message-data"], [1, "date"], [1, "message"], [1, "my-message"], [1, "chat-message"], ["type", "text", "placeholder", "Type your message"], [1, "icons"], ["src", "assets/img/gif-24px.svg", "alt", ""], ["src", "assets/img/mood-24px.svg", "alt", ""], ["src", "assets/img/send-24px.svg", "alt", ""], [1, "img", 2, "background-image", "url(assets/img/item-4.png)"], [1, "img", 2, "background-image", "url(assets/img/item-12.png)"]],
      template: function ShowMessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recommendations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Today's picks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "AAPL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Phil Ramerez");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "True Money");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "PICK 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Synergy fusion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sunshine trading stream");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Shot stocks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "SMP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Strategy for U");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Automotive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowMessagesComponent_Template_button_click_40_listener() {
            return ctx.changeTab("direct");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowMessagesComponent_Template_button_click_42_listener() {
            return ctx.changeTab("group");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Group Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ShowMessagesComponent_div_44_Template, 163, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ShowMessagesComponent_div_45_Template, 33, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ShowMessagesComponent_div_46_Template, 80, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ShowMessagesComponent_div_47_Template, 62, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeTab == "direct");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeTab == "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab == "direct");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab == "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab == "direct");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab == "group");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".categories[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 10px;\n  flex-wrap: wrap;\n  border-bottom: 0.5px solid #E2E2E2;\n  margin-bottom: 24px;\n}\n\n.categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 2px;\n  margin-bottom: 8px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 22px;\n  border-radius: 11px;\n  padding: 2px 11px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #EEEEEE;\n  transition: 0.3s ease-in-out;\n  color: #545454 !important;\n  font-size: 14px;\n  font-family: \"Muli-Regular\";\n  cursor: pointer;\n}\n\n.categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #F53C6F;\n  color: white !important;\n  cursor: pointer;\n}\n\n.categories.border-none[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n}\n\n.chat-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%] {\n  flex: 0 0 316px;\n  background: #F5F5F5;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #DCDCDC;\n  border-radius: 4px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #aeaeae;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .tab-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 16px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .tab-wrap[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 6px 16px;\n  font-size: 16px;\n  font-weight: 500;\n  background: #C9C9C9;\n  color: #FFFFFF;\n  text-align: left;\n  transition: all 0.3s ease;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .tab-wrap[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  background: #F53C6F;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .tab-wrap[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(.active):hover {\n  background: #18B587;\n  color: #FFFFFF;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .CreateGroupChat[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  margin: 4px 0 16px;\n  background: transparent;\n  color: #18B587;\n  font-size: 16px;\n  font-family: \"Muli-Bold\";\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .CreateGroupChat[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 2px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  max-height: 600px;\n  overflow-x: auto;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  display: flex;\n  border-left: solid 5px transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%], .chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  border-left: solid 5px #18B587;\n  background: #ffffff;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #18B587;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #18B587;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  margin-right: 22px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 16px;\n  font-weight: 500;\n  color: #545454;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  display: block;\n  font-size: 14px;\n  font-weight: 300;\n  color: #ACACAC;\n}\n\n@media screen and (max-width: 1029px) {\n  .chat-wrap[_ngcontent-%COMP%]   .people-list[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  margin-left: 32px;\n  flex: 1;\n  min-width: 350px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #DCDCDC;\n  border-radius: 4px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #aeaeae;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #F5F5F5;\n  padding: 12px 16px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #18B587;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #C9C9C9;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  overflow-x: auto;\n  height: 600px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  padding-right: 48px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.data_list[_ngcontent-%COMP%] {\n  height: 1px;\n  margin: 16px 0 32px;\n  background: #C9C9C9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.data_list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #C9C9C9;\n  padding: 0 32px;\n  font-size: 12px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.my-message[_ngcontent-%COMP%] {\n  padding-right: 8px;\n  margin-left: 48px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.my-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background: #18B587;\n  color: #FFFFFF;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li.my-message[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-left: 16px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #545454;\n  font-size: 16px;\n  font-weight: 500;\n  margin-right: 16px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 300;\n  color: #545454;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background: #F5F5F5;\n  color: #545454;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  padding: 16px;\n  font-family: \"Muli-Light\";\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%] {\n  background: #F5F5F5;\n  display: flex;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  background: transparent;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-right: 16px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n\n@media screen and (max-width: 1029px) {\n  .chat-wrap[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 24px;\n    min-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9zaG93LW1lc3NhZ2VzL0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcY2F0ZWdvcmllcy5zY3NzIiwic3JjL2FwcC9jaGF0L3Nob3ctbWVzc2FnZXMvc2hvdy1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhdC9zaG93LW1lc3NhZ2VzL0M6XFxwcm9qZWN0c1xcdHJhZGluZ1xcZnJvbnRlbmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9jaGF0L3Nob3ctbWVzc2FnZXMvQzpcXHByb2plY3RzXFx0cmFkaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcY2hhdFxcc2hvdy1tZXNzYWdlc1xcc2hvdy1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQUo7O0FER0E7RUU4RkksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUQ3Rko7O0FEUkE7O0VBRUksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNXSjs7QUVoQ0k7RUFDSSxTQUFBO0VBQ0EsU0FBQTtBRm1DUjs7QUUvQkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBRmtDSjs7QUVoQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FGa0NSOztBRS9CSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBRmlDUjs7QUUvQlE7RUFDSSxVQUFBO0FGaUNaOztBRS9CUTtFQUNJLHVCQUFBO0FGaUNaOztBRS9CUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUZpQ1o7O0FFL0JRO0VBQ0ksbUJBQUE7QUZpQ1o7O0FFN0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FGK0JaOztBRTlCWTtFQUNJLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUZnQ2hCOztBRS9CZ0I7RUFDSSxtQkFBQTtBRmlDcEI7O0FFL0JnQjtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBRmlDcEI7O0FFdkJRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FGeUJaOztBRXhCWTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBRjBCaEI7O0FFdEJRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBRndCWjs7QUV2Qlk7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFLQSx5QkFBQTtBRnlCaEI7O0FFdkJnQjtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUZ5QnBCOztBRXZCd0I7RUFDSSxjQUFBO0FGeUI1Qjs7QUV0QndCO0VBQ0ksY0FBQTtBRndCNUI7O0FFbEJnQjtFQUNJLGtCQUFBO0FGb0JwQjs7QUVoQm9CO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FGa0J4Qjs7QUVmb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUZpQnhCOztBRVpRO0VBOUdKO0lBK0dRLE9BQUE7RUZlVjtBQUNGOztBRVpJO0VBQ0ksaUJBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUZjUjs7QUVaUTtFQUNJLFVBQUE7QUZjWjs7QUVaUTtFQUNJLHVCQUFBO0FGY1o7O0FFWlE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FGY1o7O0FFWlE7RUFDSSxtQkFBQTtBRmNaOztBRVhRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FGYVo7O0FFVlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUZZaEI7O0FFWGdCO0VBQ0ksa0JBQUE7QUZhcEI7O0FFVmdCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRllwQjs7QUVSWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBRlVoQjs7QUVSZ0I7RUFDSSxjQUFBO0FGVXBCOztBRVBnQjtFQUNJLGlCQUFBO0FGU3BCOztBRUpRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUZNWjs7QUVIWTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUZLaEI7O0FFSGdCO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRktwQjs7QUVKb0I7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBRk14Qjs7QUVGZ0I7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FGSXBCOztBRUhvQjtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBRkt4Qjs7QUVIb0I7RUFDSSx5QkFBQTtBRkt4Qjs7QUVGZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FGSXBCOztBRUhvQjtFQUNJLGtCQUFBO0FGS3hCOztBRUZvQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRkl4Qjs7QUVEb0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FGR3hCOztBRUNnQjtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FGQ3BCOztBRUlRO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FGRlo7O0FFR1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBRkRoQjs7QUVJWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FGRmhCOztBRUdnQjtFQUNJLGlCQUFBO0FGRHBCOztBRUVvQjtFQUNJLFNBQUE7QUZBeEI7O0FFS1E7RUFuSko7SUFvSlEsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFRkZWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGF0L3Nob3ctbWVzc2FnZXMvc2hvdy1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XHJcbi5jYXRlZ29yaWVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNFMkUyRTI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyBsaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMgbGkgYSB7XHJcbiAgICBAaW5jbHVkZSB0YWdJdGVtO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyBsaSBhLmFjdGl2ZSxcclxuLmNhdGVnb3JpZXMgbGkgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjUzQzZGO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLmNhdGVnb3JpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjRTJFMkUyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uY2F0ZWdvcmllcyBsaSB7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLmNhdGVnb3JpZXMgbGkgYSB7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgcGFkZGluZzogMnB4IDExcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogIzU0NTQ1NCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktUmVndWxhclwiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXRlZ29yaWVzIGxpIGEuYWN0aXZlLFxuLmNhdGVnb3JpZXMgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNGNTNDNkY7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXRlZ29yaWVzLmJvcmRlci1ub25lIHtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5jaGF0LXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY2hhdC13cmFwIC5pbWcge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1saXN0IHtcbiAgZmxleDogMCAwIDMxNnB4O1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWxpc3QgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtbGlzdCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtbGlzdCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI0RDRENEQztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWxpc3QgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNhZWFlYWU7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtbGlzdCAudGFiLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWxpc3QgLnRhYi13cmFwIC50YWIge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kOiAjQzlDOUM5O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1saXN0IC50YWItd3JhcCAudGFiLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNGNTNDNkY7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtbGlzdCAudGFiLXdyYXAgLnRhYjpub3QoLmFjdGl2ZSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMThCNTg3O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1saXN0IC5DcmVhdGVHcm91cENoYXQge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbjogNHB4IDAgMTZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMThCNTg3O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktQm9sZFwiO1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWxpc3QgLkNyZWF0ZUdyb3VwQ2hhdCBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtbGlzdCAubGlzdCB7XG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWxpc3QgLmxpc3QgbGkge1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtbGlzdCAubGlzdCBsaS5hY3RpdmUsIC5jaGF0LXdyYXAgLnBlb3BsZS1saXN0IC5saXN0IGxpOmhvdmVyIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCAjMThCNTg3O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWxpc3QgLmxpc3QgbGkuYWN0aXZlIC50ZXh0IC5uYW1lLCAuY2hhdC13cmFwIC5wZW9wbGUtbGlzdCAubGlzdCBsaTpob3ZlciAudGV4dCAubmFtZSB7XG4gIGNvbG9yOiAjMThCNTg3O1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWxpc3QgLmxpc3QgbGkuYWN0aXZlIC50ZXh0IHNwYW4sIC5jaGF0LXdyYXAgLnBlb3BsZS1saXN0IC5saXN0IGxpOmhvdmVyIC50ZXh0IHNwYW4ge1xuICBjb2xvcjogIzE4QjU4Nztcbn1cbi5jaGF0LXdyYXAgLnBlb3BsZS1saXN0IC5saXN0IGxpIC5pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDIycHg7XG59XG4uY2hhdC13cmFwIC5wZW9wbGUtbGlzdCAubGlzdCBsaSAudGV4dCAubmFtZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuLmNoYXQtd3JhcCAucGVvcGxlLWxpc3QgLmxpc3QgbGkgLnRleHQgc3BhbiB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNBQ0FDQUM7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI5cHgpIHtcbiAgLmNoYXQtd3JhcCAucGVvcGxlLWxpc3Qge1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cbi5jaGF0LXdyYXAgLmNoYXQge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAzNTBweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG4uY2hhdC13cmFwIC5jaGF0IDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNEQ0RDREM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNhZWFlYWU7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LWFib3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LWFib3V0IC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtYWJvdXQgLmxlZnQgLmltZyB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtYWJvdXQgLmxlZnQgLm5hbWUge1xuICBjb2xvcjogIzE4QjU4NztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1hYm91dCAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1hYm91dCAucmlnaHQgaSB7XG4gIGNvbG9yOiAjQzlDOUM5O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1hYm91dCAucmlnaHQgPiBkaXYge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGhlaWdodDogNjAwcHg7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LWhpc3RvcnkgbGkge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1oaXN0b3J5IGxpLmRhdGFfbGlzdCB7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IDE2cHggMCAzMnB4O1xuICBiYWNrZ3JvdW5kOiAjQzlDOUM5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaS5kYXRhX2xpc3Qgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjQzlDOUM5O1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaS5teS1tZXNzYWdlIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBtYXJnaW4tbGVmdDogNDhweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaS5teS1tZXNzYWdlIC5tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogIzE4QjU4NztcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LWhpc3RvcnkgbGkubXktbWVzc2FnZSAubWVzc2FnZS1kYXRhIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaSAubWVzc2FnZS1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1oaXN0b3J5IGxpIC5tZXNzYWdlLWRhdGEgLmltZyB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtaGlzdG9yeSBsaSAubWVzc2FnZS1kYXRhIC5uYW1lIHtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1oaXN0b3J5IGxpIC5tZXNzYWdlLWRhdGEgLmRhdGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNTQ1NDU0O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1oaXN0b3J5IGxpIC5tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGktTGlnaHRcIjtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LW1lc3NhZ2UgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5jaGF0LXdyYXAgLmNoYXQgLmNoYXQtbWVzc2FnZSAuaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuLmNoYXQtd3JhcCAuY2hhdCAuY2hhdC1tZXNzYWdlIC5pY29ucyBhIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uY2hhdC13cmFwIC5jaGF0IC5jaGF0LW1lc3NhZ2UgLmljb25zIGE6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI5cHgpIHtcbiAgLmNoYXQtd3JhcCAuY2hhdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuQG1peGluIHJlZEJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTFweDtcclxuICAgIGJhY2tncm91bmQ6ICRyZWQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNdWxpLVJlZ3VsYXJcIjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5cclxuLy8gUGxheWxpc3QgdmlkZW9zIG1vZGFsXHJcbkBtaXhpbiB2aWRlb0l0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMThCNTg3O1xyXG4gICAgfVxyXG5cclxuICAgICYuYWRkZWQge1xyXG5cclxuICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgc3Bhbi5hZGRlZC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTI0cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIkFkZGVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1M2M2ZjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDI0cHggNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2hvcnRlbmVkLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAudGFncyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWdJdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtaXhpbiBpbnB1dFdyYXAge1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuICAgICAgICAmLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4MTgxODEyMTtcclxuICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWdJdGVtIHtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICBwYWRkaW5nOiAycHggMTFweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgIGNvbG9yOiAjNTQ1NDU0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNdWxpLVJlZ3VsYXJcIjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi8vIFBsYXlsaXN0IGl0ZW0gZm9yICdWaWRlb3MnIHNlY3Rpb25cclxuQG1peGluIHBsYXlsaXN0SXRlbSB7XHJcblxyXG4gICAgLnBsYXlsaXN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDQzMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgICAgLnRodW1ibmFpbC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5zaG9ydC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZmFrZS1iZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMSwgMSwgMSwgMC4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHN0b2Nrc0l0ZW0ge1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTc5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgcGFkZGluZzogMjRweCA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG5cclxuXHJcbiAgICAmLnN0b2NrLWl0ZW0tZ3JlZW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxOEI1ODc7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdG9jay1pdGVtLXJlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHJlZCAwIDAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjRkZGRkZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5jcnlwdG9SZW1vdmUsIC5zdG9jay1mb2xsb3csIC5zdG9jay11bmZvbGxvdyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLnVuZm9sbG93LWJ0biB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0b2NrLW5hbWUsIC5zdG9jay1wcmljZS1jaGFuZ2UsIC5zdG9jay1wcmljZS1jaGFuZ2UtcGVyY2VudCB7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1MaWdodCc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0b2NrLXByaWNlIHtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNdWxpLUJvbGQnO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDRweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuZG9sbGFyLXNpZ24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtNXB4O1xyXG4gICAgICAgIHRvcDogLTZweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNdWxpLUJvbGQnO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdG9jay1wcmljZS1kZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiQGltcG9ydCAnY2F0ZWdvcmllcyc7XHJcbi5jYXRlZ29yaWVze1xyXG4gICAgJi5ib3JkZXItbm9uZXtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2hhdC13cmFwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAuaW1ne1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxuXHJcbiAgICAucGVvcGxlLWxpc3R7XHJcbiAgICAgICAgZmxleDogMCAwIDMxNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGNUY1RjUgO1xyXG5cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0RDRENEQztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTc0LCAxNzQsIDE3NCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLnRhYi13cmFwe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICAudGFie1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNDOUM5Qzk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y1M0M2RjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bm90KC5hY3RpdmUpOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxOEI1ODc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saXN0LXdyYXB7XHJcbiAgICAgICAgICAgIC8vIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgICAgICAvLyBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkNyZWF0ZUdyb3VwQ2hhdHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDRweCAwIDE2cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjogIzE4QjU4NztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNdWxpLUJvbGRcIjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpc3R7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgICYuYWN0aXZlICwgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgNXB4ICMxOEI1ODc7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAudGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE4QjU4NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMThCNTg3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQUNBQ0FDO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI5cHgpIHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBtaW4td2lkdGg6IDM1MHB4O1xyXG5cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0RDRENEQztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTc0LCAxNzQsIDE3NCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhdC1hYm91dHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcblxyXG5cclxuICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5pbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMThCNTg3O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQzlDOUM5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgID5kaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGF0LWhpc3Rvcnl7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XHJcblxyXG5cclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDhweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmRhdGFfbGlzdHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE2cHggMCAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNDOUM5Qzk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQzlDOUM5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5teS1tZXNzYWdle1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICAubWVzc2FnZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzE4QjU4NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlLWRhdGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lc3NhZ2UtZGF0YXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWVzc2FnZXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVsaS1MaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhdC1tZXNzYWdle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1IDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaWNvbnN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyOXB4KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
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
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=chat-chat-module-es5.js.map