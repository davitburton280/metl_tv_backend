function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var i=0;i<n.length;i++){var c=n[i];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,n,i){return n&&_defineProperties(e.prototype,n),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"55j5":function(e,n,i){"use strict";i.r(n),i.d(n,"ChannelsModule",(function(){return K}));var c,s=i("ofXK"),a=i("tyNb"),t=i("9xOu"),r=i("3Pt+"),o=i("fXoL"),b=i("FFj9"),u=i("Rnal"),l=i("tk/3"),h=((c=function(){function e(n){_classCallCheck(this,e),this.httpClient=n}return _createClass(e,[{key:"changeProfileImage",value:function(e){return this.httpClient.post(t.b+"users/change-profile-image",e)}},{key:"changeCoverImage",value:function(e){return this.httpClient.post(t.b+"users/change-cover-image",e)}},{key:"getUserInfo",value:function(e){return this.httpClient.get(t.b+"users/get-user-info",{params:e})}}]),e}()).\u0275fac=function(e){return new(e||c)(o.fc(l.b))},c.\u0275prov=o.Nb({token:c,factory:c.\u0275fac,providedIn:"root"}),c),f=i("1m4N"),v=i("HHsJ"),d=i("wDcp"),g=i("hKYS"),p=i("kUS0"),m=i("bhfF");function C(e,n){if(1&e){var i=o.Yb();o.Xb(0,"div",23),o.Xb(1,"input",24),o.jc("change",(function(e){return o.Gc(i),o.nc(2).coverChangeEvent(e)})),o.Wb(),o.Xb(2,"ngx-photo-editor",25),o.jc("imageCropped",(function(e){return o.Gc(i),o.nc(2).coverCropped(e)})),o.Wb(),o.Wb()}if(2&e){var c=o.nc(2);o.sc("hidden",!0),o.Cb(2),o.sc("imageChanedEvent",c.coverChangedEvent)("autoCrop",!1)("viewMode",3)}}function U(e,n){if(1&e&&o.Sb(0,"img",26),2&e){var i=o.nc(2);o.sc("src",i.apiUrl+"uploads/avatars/"+i.channelUser.avatar,o.Ic)}}function I(e,n){1&e&&o.Sb(0,"img",27),2&e&&o.sc("src","assets/img/default-user.png",o.Ic)}function k(e,n){if(1&e){var i=o.Yb();o.Xb(0,"div",23),o.Xb(1,"input",28),o.jc("change",(function(e){return o.Gc(i),o.nc(2).profileChangeEvent(e)})),o.Wb(),o.Xb(2,"ngx-photo-editor",29),o.jc("imageCropped",(function(e){return o.Gc(i),o.nc(2).profileCropped(e)})),o.Wb(),o.Wb()}if(2&e){var c=o.nc(2);o.sc("hidden",!0),o.Cb(2),o.sc("imageChanedEvent",c.profileChangedEvent)("aspectRatio",4/3)("viewMode",1)("resizeToWidth",500)}}function W(e,n){if(1&e){var i=o.Yb();o.Xb(0,"a",33),o.jc("click",(function(){o.Gc(i);var e=o.nc(3);return e.subscribeToChannel(e.channelUser.channel)})),o.Pc(1,"Subscribe"),o.Wb()}}function X(e,n){if(1&e){var i=o.Yb();o.Xb(0,"a",34),o.jc("click",(function(){o.Gc(i);var e=o.nc(3);return e.subscribeToChannel(e.channelUser.channel)})),o.Pc(1,"Subscribed"),o.Wb()}}function w(e,n){if(1&e&&(o.Xb(0,"div",8),o.Sb(1,"i",30),o.Nc(2,W,2,0,"a",31),o.Nc(3,X,2,0,"a",32),o.Wb()),2&e){var i=o.nc(2);o.Cb(2),o.sc("ngIf",!i.subscribedToChannel),o.Cb(1),o.sc("ngIf",i.subscribedToChannel)}}function S(e,n){if(1&e){var i=o.Yb();o.Xb(0,"li",35),o.Xb(1,"a",36),o.jc("click",(function(){o.Gc(i);var e=n.$implicit;return o.nc(2).changeActiveTab(e)})),o.Pc(2),o.Wb(),o.Wb()}if(2&e){var c=n.$implicit,s=o.nc(2);o.Cb(1),o.Hb("active",c===s.activeTab),o.uc("id","",c.link,"-tab"),o.uc("href","#",c.link,"",o.Ic),o.Cb(1),o.Qc(c.name)}}function y(e,n){if(1&e&&o.Sb(0,"img",48),2&e){var i=o.nc(2).$implicit,c=o.nc(5);o.sc("src",c.apiUrl+"uploads/thumbnails/"+i.thumbnail,o.Ic)}}function P(e,n){1&e&&o.Sb(0,"img",48),2&e&&o.sc("src","assets/img/video-thumbnail-default.png",o.Ic)}function N(e,n){1&e&&(o.Xb(0,"span",49),o.Pc(1,"Live now"),o.Wb())}function _(e,n){if(1&e&&o.Sb(0,"img",50),2&e){var i=o.nc(4).$implicit,c=o.nc(3);o.sc("src",c.apiUrl+"uploads/avatars/"+i.avatar,o.Ic)}}function V(e,n){1&e&&o.Sb(0,"img",50),2&e&&o.sc("src","assets/img/default-user.png",o.Ic)}function T(e,n){if(1&e){var i=o.Yb();o.Xb(0,"div",41),o.jc("click",(function(){o.Gc(i);var e=o.nc().$implicit,n=o.nc(2).$implicit;return o.nc(3).openVideoPage(e,n.username)})),o.Nc(1,y,1,1,"img",42),o.Nc(2,P,1,1,"img",42),o.Nc(3,N,2,0,"span",43),o.Xb(4,"div",44),o.Nc(5,_,1,1,"img",45),o.Nc(6,V,1,1,"img",45),o.Xb(7,"div"),o.Xb(8,"p",12),o.Pc(9),o.Wb(),o.Xb(10,"p",46),o.Pc(11),o.Wb(),o.Xb(12,"p",47),o.Pc(13,"17k watching"),o.Wb(),o.Wb(),o.Wb(),o.Wb()}if(2&e){var c=o.nc().$implicit,s=o.nc(2).$implicit;o.Cb(1),o.sc("ngIf",c.thumbnail),o.Cb(1),o.sc("ngIf",!c.thumbnail),o.Cb(1),o.sc("ngIf","live"===c.status),o.Cb(2),o.sc("ngIf",s.avatar),o.Cb(1),o.sc("ngIf",!s.avatar),o.Cb(3),o.Qc(c.name),o.Cb(2),o.Qc(s.full_name)}}function j(e,n){1&e&&(o.Vb(0),o.Nc(1,T,14,7,"ng-template",40),o.Ub())}function F(e,n){if(1&e&&(o.Vb(0),o.Xb(1,"p",38),o.Pc(2),o.Wb(),o.Xb(3,"owl-carousel-o",39),o.Nc(4,j,2,0,"ng-container",37),o.Wb(),o.Ub()),2&e){var i=o.nc().$implicit,c=o.nc(3);o.Cb(2),o.Qc(i.full_name),o.Cb(1),o.sc("options",c.owlOptions),o.Cb(1),o.sc("ngForOf",i.videos)}}function O(e,n){if(1&e&&(o.Vb(0),o.Nc(1,F,5,3,"ng-container",1),o.Ub()),2&e){var i=n.$implicit;o.Cb(1),o.sc("ngIf",i.videos.length>0)}}function R(e,n){if(1&e&&(o.Vb(0),o.Nc(1,O,2,1,"ng-container",37),o.Ub()),2&e){var i=o.nc(2);o.Cb(1),o.sc("ngForOf",i.watchlistVideos)}}function E(e,n){1&e&&o.Sb(0,"img",52)}function $(e,n){if(1&e&&o.Sb(0,"img",48),2&e){var i=o.nc(2).$implicit,c=o.nc(3);o.tc("src",c.apiUrl+"uploads/thumbnails/"+i.thumbnail,o.Ic)}}function G(e,n){if(1&e&&o.Sb(0,"img",50),2&e){var i=o.nc(5);o.sc("src",i.apiUrl+"uploads/avatars/"+i.authUser.avatar,o.Ic)}}function x(e,n){1&e&&o.Sb(0,"img",50),2&e&&o.sc("src","assets/img/default-user.png",o.Ic)}function A(e,n){if(1&e){var i=o.Yb();o.Xb(0,"div",41),o.jc("click",(function(){o.Gc(i);var e=o.nc().$implicit,n=o.nc(3);return n.openVideoPage(e,n.authUser.username)})),o.Nc(1,E,1,0,"img",51),o.Nc(2,$,1,1,"img",42),o.Xb(3,"div",44),o.Nc(4,G,1,1,"img",45),o.Nc(5,x,1,1,"img",45),o.Xb(6,"div"),o.Xb(7,"p",12),o.Pc(8),o.Wb(),o.Xb(9,"p",46),o.Pc(10),o.Wb(),o.Xb(11,"p",47),o.Pc(12,"17k watching"),o.Wb(),o.Wb(),o.Wb(),o.Wb()}if(2&e){var c=o.nc().$implicit,s=o.nc(3);o.Cb(1),o.sc("ngIf",!c.thumbnail||"undefined"===c.thumbnail),o.Cb(1),o.sc("ngIf",c.thumbnail&&"undefined"!==c.thumbnail),o.Cb(2),o.sc("ngIf",s.authUser.avatar),o.Cb(1),o.sc("ngIf",!s.authUser.avatar),o.Cb(3),o.Qc(c.name),o.Cb(2),o.Qc(s.authUser.full_name)}}function Y(e,n){1&e&&(o.Vb(0),o.Nc(1,A,13,6,"ng-template",40),o.Ub())}function M(e,n){if(1&e&&(o.Vb(0),o.Xb(1,"p",38),o.Pc(2,"Recent videos"),o.Wb(),o.Xb(3,"owl-carousel-o"),o.Nc(4,Y,2,0,"ng-container",37),o.Wb(),o.Ub()),2&e){var i=o.nc(2);o.Cb(4),o.sc("ngForOf",i.currentUser.videos)}}function Q(e,n){if(1&e){var i=o.Yb();o.Vb(0),o.Xb(1,"div",3),o.Nc(2,C,3,4,"div",4),o.Xb(3,"label",5),o.Sb(4,"img",6),o.Wb(),o.Wb(),o.Xb(5,"div",7),o.Xb(6,"div",8),o.Xb(7,"label",9),o.Nc(8,U,1,1,"img",10),o.Nc(9,I,1,1,"img",11),o.Wb(),o.Nc(10,k,3,5,"div",4),o.Xb(11,"div"),o.Xb(12,"p",12),o.Pc(13),o.Wb(),o.Xb(14,"p",13),o.Pc(15),o.Wb(),o.Wb(),o.Wb(),o.Nc(16,w,4,2,"div",14),o.Wb(),o.Xb(17,"div",15),o.Xb(18,"div",16),o.Xb(19,"ul",17),o.Nc(20,S,3,5,"li",18),o.Wb(),o.Xb(21,"form",19),o.Xb(22,"div",20),o.Xb(23,"input",21),o.jc("keyup.enter",(function(){return o.Gc(i),o.nc().searchVideos()})),o.Wb(),o.Sb(24,"i",22),o.Wb(),o.Wb(),o.Wb(),o.Nc(25,R,2,1,"ng-container",1),o.Nc(26,M,5,1,"ng-container",1),o.Wb(),o.Ub()}if(2&e){var c=o.nc();o.Cb(2),o.sc("ngIf",c.channelUser.username===c.authUser.username),o.Cb(2),o.sc("src",c.channelUser.cover?c.apiUrl+"uploads/covers/"+c.channelUser.cover:"assets/img/default-thumbnail.png",o.Ic),o.Cb(4),o.sc("ngIf",c.channelUser.avatar),o.Cb(1),o.sc("ngIf",!c.channelUser.avatar),o.Cb(1),o.sc("ngIf",c.channelUser.username===c.authUser.username),o.Cb(3),o.Qc(c.channelUser.channel.name),o.Cb(2),o.Rc("",c.subscribersCount+" subscriber"+(1===c.subscribersCount?"":"s")," "),o.Cb(1),o.sc("ngIf",c.channelUser.username!==c.authUser.username),o.Cb(4),o.sc("ngForOf",c.allTabs),o.Cb(1),o.sc("formGroup",c.searchVideosForm),o.Cb(4),o.sc("ngIf","Watchlist"===c.activeTab.name),o.Cb(1),o.sc("ngIf","Videos"===c.activeTab.name)}}function B(e,n){1&e&&(o.Xb(0,"div",53),o.Xb(1,"p"),o.Pc(2,"Channel with such name is not found"),o.Wb(),o.Wb())}var D,L,q,H=[{path:"show",component:(D=function(){function e(n,i,c,s,a,o,b,u,l){_classCallCheck(this,e),this.videoService=n,this.getAuthUser=i,this.router=c,this.usersService=s,this.base64ToFile=a,this.route=o,this.fb=b,this.channelService=u,this.subject=l,this.owlOptions=t.e,this.watchlistVideos=[],this.activeTab=t.f[0],this.allTabs=t.f,this.apiUrl=t.b,this.subscribedToChannel=!1,this.authUser=this.getAuthUser.transform(),this.passedUsername=this.route.snapshot.queryParams.username,this.searchVideosForm=this.fb.group({search:["",r.t.required]})}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.passedUsername&&this.usersService.getUserInfo({username:this.passedUsername}).subscribe((function(n){e.channelUser=n,e.checkChannelSubscription(),console.log(e.channelUser.username,e.authUser.username)})),this.videoService.getUserVideos({user_id:this.authUser.id}).subscribe((function(n){e.currentUser=n})),this.videoService.getVideosByAuthor({}).subscribe((function(n){e.watchlistVideos=n}))}},{key:"changeActiveTab",value:function(e){this.activeTab=e,this.searchVideos()}},{key:"checkChannelSubscription",value:function(){var e=this;console.log(this.channelUser),this.channelService.checkChannelSubscription({user_id:this.authUser.id,channel_id:this.channelUser.channel.id}).subscribe((function(n){e.subscribedToChannel="Subscribed"===n.status,e.subscribersCount=n.subscribers_count}))}},{key:"openVideoPage",value:function(e,n){var i,c;console.log(n),"live"===e.status?(i="user/video/watch",c={session:e.session_name,publisher:n}):(i="videos/play",c={id:e.id}),this.router.navigate([i],{queryParams:c})}},{key:"coverChangeEvent",value:function(e){this.coverChangedEvent=e}},{key:"profileChangeEvent",value:function(e){this.profileChangedEvent=e}},{key:"profileCropped",value:function(e){var n=this;this.profileBase64=e.base64;var i="profile_".concat(Date.now(),".jpg"),c=new FormData;c.append("avatar_file",this.base64ToFile.transform(e.base64),i),c.append("avatar",i),c.append("id",this.authUser.id),this.usersService.changeProfileImage(c).subscribe((function(e){localStorage.setItem("token",e.token),n.authUser=n.getAuthUser.transform(),n.channelUser=n.authUser}))}},{key:"coverCropped",value:function(e){var n=this;this.coverBase64=e.base64;var i=new FormData,c="cover_".concat(Date.now(),".jpg");i.append("cover_file",this.base64ToFile.transform(e.base64),c),i.append("cover",c),i.append("id",this.authUser.id),this.usersService.changeCoverImage(i).subscribe((function(e){localStorage.setItem("token",e.token),n.authUser=n.getAuthUser.transform(),n.channelUser=n.authUser}))}},{key:"searchVideos",value:function(){var e=this.searchVideosForm.value;e.search&&("Watchlist"===this.activeTab.name?this.searchInVideosByAuthor(e):"Videos"===this.activeTab.name&&this.searchInUserVideos(e))}},{key:"searchInVideosByAuthor",value:function(e){var n=this;this.videoService.searchInVideosByAuthor(e).subscribe((function(e){n.watchlistVideos=e}))}},{key:"searchInUserVideos",value:function(e){var n=this;this.currentUser.videos=[],this.videoService.searchInUserVideos(Object.assign({user_id:this.authUser.id},e)).subscribe((function(e){n.currentUser.videos=e.videos}))}},{key:"subscribeToChannel",value:function(e){var n=this;console.log(e),this.channelService.subscribeToChannel({user_id:this.authUser.id,channel_id:e.id}).subscribe((function(e){n.subscribedToChannel="Subscribed"===e.status,n.subscribersCount=e.subscribers_count,n.channelService.getUserChannelSubscriptions({user_id:n.authUser.id}).subscribe((function(e){n.subject.setUserSubscriptions(e)}))}))}}]),e}(),D.\u0275fac=function(e){return new(e||D)(o.Rb(b.a),o.Rb(u.a),o.Rb(a.d),o.Rb(h),o.Rb(f.a),o.Rb(a.a),o.Rb(r.c),o.Rb(v.a),o.Rb(d.a))},D.\u0275cmp=o.Lb({type:D,selectors:[["app-show-channel"]],decls:4,vars:2,consts:[[1,"profile-list"],[4,"ngIf"],["class","channel-not-found",4,"ngIf"],[1,"profile-block"],[3,"hidden",4,"ngIf"],["for","cover-image-input"],["id","cover-image",3,"src"],[1,"sub-block"],[1,"d-flex","align-items-center"],["for","profile-image-input"],["class","avatar list-img",3,"src",4,"ngIf"],["class","avatar","id","profile-image",3,"src",4,"ngIf"],[1,"main-text-1"],[1,"main-text-4"],["class","d-flex align-items-center",4,"ngIf"],[1,"watchlist","pWatchlist"],[1,"profile-list","user-profile-block"],["id","profileList","role","tablist",1,"nav","nav-tabs"],["class","nav-item",4,"ngFor","ngForOf"],[3,"formGroup"],[1,"watchlist-search"],["placeholder","Search","formControlName","search",1,"watchlist-input",3,"keyup.enter"],[1,"fas","fa-search"],[3,"hidden"],["type","file","id","cover-image-input",3,"change"],[3,"imageChanedEvent","autoCrop","viewMode","imageCropped"],[1,"avatar","list-img",3,"src"],["id","profile-image",1,"avatar",3,"src"],["type","file","id","profile-image-input",3,"change"],[3,"imageChanedEvent","aspectRatio","viewMode","resizeToWidth","imageCropped"],[1,"sub-bell","fas","fa-bell"],["class","subscribe-btn",3,"click",4,"ngIf"],["class","subscribe-btn subscribed",3,"click",4,"ngIf"],[1,"subscribe-btn",3,"click"],[1,"subscribe-btn","subscribed",3,"click"],[1,"nav-item"],["data-toggle","tab","role","tab","aria-controls","pWatch","aria-selected","true",1,"nav-link",3,"id","href","click"],[4,"ngFor","ngForOf"],[1,"trending-text"],[3,"options"],["carouselSlide",""],[1,"item","main-carousel-item",3,"click"],["class","main-item-img",3,"src",4,"ngIf"],["class","live-now",4,"ngIf"],[1,"main-item-block"],["class","avatar",3,"src",4,"ngIf"],[1,"main-text-2"],[1,"main-text-3"],[1,"main-item-img",3,"src"],[1,"live-now"],[1,"avatar",3,"src"],["class","main-item-img","src","assets/img/video-thumbnail-default.png",4,"ngIf"],["src","assets/img/video-thumbnail-default.png",1,"main-item-img"],[1,"channel-not-found"]],template:function(e,n){1&e&&(o.Xb(0,"div",0),o.Sb(1,"app-categories"),o.Nc(2,Q,27,12,"ng-container",1),o.Nc(3,B,3,0,"div",2),o.Wb()),2&e&&(o.Cb(2),o.sc("ngIf",n.channelUser),o.Cb(1),o.sc("ngIf",!n.channelUser))},directives:[g.a,s.m,s.l,r.v,r.m,r.g,r.b,r.l,r.f,p.a,m.a,m.c],styles:[".profile-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%}.subscribed[_ngcontent-%COMP%]{background-color:#d6d6d6!important}"]}),D)}],J=((L=function e(){_classCallCheck(this,e)}).\u0275mod=o.Pb({type:L}),L.\u0275inj=o.Ob({factory:function(e){return new(e||L)},imports:[[a.e.forChild(H)],a.e]}),L),z=i("PCNd"),K=((q=function e(){_classCallCheck(this,e)}).\u0275mod=o.Pb({type:q}),q.\u0275inj=o.Ob({factory:function(e){return new(e||q)},imports:[[s.c,J,z.a,p.b]]}),q)}}]);