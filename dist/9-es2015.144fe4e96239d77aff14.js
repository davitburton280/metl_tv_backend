(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"55j5":function(e,i,n){"use strict";n.r(i),n.d(i,"ChannelsModule",(function(){return L}));var t=n("ofXK"),c=n("tyNb"),s=n("9xOu"),a=n("3Pt+"),r=n("fXoL"),o=n("FFj9"),b=n("Rnal"),u=n("tk/3");let h=(()=>{class e{constructor(e){this.httpClient=e}changeProfileImage(e){return this.httpClient.post(s.b+"users/change-profile-image",e)}changeCoverImage(e){return this.httpClient.post(s.b+"users/change-cover-image",e)}getUserInfo(e){return this.httpClient.get(s.b+"users/get-user-info",{params:e})}}return e.\u0275fac=function(i){return new(i||e)(r.fc(u.b))},e.\u0275prov=r.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=n("1m4N"),d=n("HHsJ"),f=n("wDcp"),g=n("hKYS"),p=n("kUS0"),m=n("bhfF");function v(e,i){if(1&e){const e=r.Yb();r.Xb(0,"div",23),r.Xb(1,"input",24),r.jc("change",(function(i){return r.Hc(e),r.nc(2).coverChangeEvent(i)})),r.Wb(),r.Xb(2,"ngx-photo-editor",25),r.jc("imageCropped",(function(i){return r.Hc(e),r.nc(2).coverCropped(i)})),r.Wb(),r.Wb()}if(2&e){const e=r.nc(2);r.tc("hidden",!0),r.Cb(2),r.tc("imageChanedEvent",e.coverChangedEvent)("autoCrop",!1)("viewMode",3)}}function C(e,i){if(1&e&&r.Sb(0,"img",26),2&e){const e=r.nc(2);r.tc("src",e.apiUrl+"uploads/avatars/"+e.channelUser.avatar,r.Jc)}}function U(e,i){1&e&&r.Sb(0,"img",27),2&e&&r.tc("src","assets/img/default-user.png",r.Jc)}function W(e,i){if(1&e){const e=r.Yb();r.Xb(0,"div",23),r.Xb(1,"input",28),r.jc("change",(function(i){return r.Hc(e),r.nc(2).profileChangeEvent(i)})),r.Wb(),r.Xb(2,"ngx-photo-editor",29),r.jc("imageCropped",(function(i){return r.Hc(e),r.nc(2).profileCropped(i)})),r.Wb(),r.Wb()}if(2&e){const e=r.nc(2);r.tc("hidden",!0),r.Cb(2),r.tc("imageChanedEvent",e.profileChangedEvent)("aspectRatio",4/3)("viewMode",1)("resizeToWidth",500)}}function I(e,i){if(1&e){const e=r.Yb();r.Xb(0,"a",33),r.jc("click",(function(){r.Hc(e);const i=r.nc(3);return i.subscribeToChannel(i.channelUser.channel)})),r.Qc(1,"Subscribe"),r.Wb()}}function X(e,i){if(1&e){const e=r.Yb();r.Xb(0,"a",34),r.jc("click",(function(){r.Hc(e);const i=r.nc(3);return i.subscribeToChannel(i.channelUser.channel)})),r.Qc(1,"Subscribed"),r.Wb()}}function O(e,i){if(1&e&&(r.Xb(0,"div",8),r.Sb(1,"i",30),r.Oc(2,I,2,0,"a",31),r.Oc(3,X,2,0,"a",32),r.Wb()),2&e){const e=r.nc(2);r.Cb(2),r.tc("ngIf",!e.subscribedToChannel),r.Cb(1),r.tc("ngIf",e.subscribedToChannel)}}function S(e,i){if(1&e){const e=r.Yb();r.Xb(0,"li",35),r.Xb(1,"a",36),r.jc("click",(function(){r.Hc(e);const n=i.$implicit;return r.nc(2).changeActiveTab(n)})),r.Qc(2),r.Wb(),r.Wb()}if(2&e){const e=i.$implicit,n=r.nc(2);r.Cb(1),r.Hb("active",e===n.activeTab),r.vc("id","",e.link,"-tab"),r.vc("href","#",e.link,"",r.Jc),r.Cb(1),r.Rc(e.name)}}function w(e,i){if(1&e&&r.Sb(0,"img",48),2&e){const e=r.nc(2).$implicit,i=r.nc(5);r.tc("src",i.apiUrl+"uploads/thumbnails/"+e.thumbnail,r.Jc)}}function k(e,i){1&e&&r.Sb(0,"img",48),2&e&&r.tc("src","assets/img/video-thumbnail-default.png",r.Jc)}function V(e,i){1&e&&(r.Xb(0,"span",49),r.Qc(1,"Live now"),r.Wb())}function T(e,i){if(1&e&&r.Sb(0,"img",50),2&e){const e=r.nc(4).$implicit,i=r.nc(3);r.tc("src",i.apiUrl+"uploads/avatars/"+e.avatar,r.Jc)}}function R(e,i){1&e&&r.Sb(0,"img",50),2&e&&r.tc("src","assets/img/default-user.png",r.Jc)}function _(e,i){if(1&e){const e=r.Yb();r.Xb(0,"div",41),r.jc("click",(function(){r.Hc(e);const i=r.nc().$implicit,n=r.nc(2).$implicit;return r.nc(3).openVideoPage(i,n.username)})),r.Oc(1,w,1,1,"img",42),r.Oc(2,k,1,1,"img",42),r.Oc(3,V,2,0,"span",43),r.Xb(4,"div",44),r.Oc(5,T,1,1,"img",45),r.Oc(6,R,1,1,"img",45),r.Xb(7,"div"),r.Xb(8,"p",12),r.Qc(9),r.Wb(),r.Xb(10,"p",46),r.Qc(11),r.Wb(),r.Xb(12,"p",47),r.Qc(13,"17k watching"),r.Wb(),r.Wb(),r.Wb(),r.Wb()}if(2&e){const e=r.nc().$implicit,i=r.nc(2).$implicit;r.Cb(1),r.tc("ngIf",e.thumbnail),r.Cb(1),r.tc("ngIf",!e.thumbnail),r.Cb(1),r.tc("ngIf","live"===e.status),r.Cb(2),r.tc("ngIf",i.avatar),r.Cb(1),r.tc("ngIf",!i.avatar),r.Cb(3),r.Rc(e.name),r.Cb(2),r.Rc(i.full_name)}}function j(e,i){1&e&&(r.Vb(0),r.Oc(1,_,14,7,"ng-template",40),r.Ub())}function y(e,i){if(1&e&&(r.Vb(0),r.Xb(1,"p",38),r.Qc(2),r.Wb(),r.Xb(3,"owl-carousel-o",39),r.Oc(4,j,2,0,"ng-container",37),r.Wb(),r.Ub()),2&e){const e=r.nc().$implicit,i=r.nc(3);r.Cb(2),r.Rc(e.full_name),r.Cb(1),r.tc("options",i.owlOptions),r.Cb(1),r.tc("ngForOf",e.videos)}}function F(e,i){if(1&e&&(r.Vb(0),r.Oc(1,y,5,3,"ng-container",1),r.Ub()),2&e){const e=i.$implicit;r.Cb(1),r.tc("ngIf",e.videos.length>0)}}function Q(e,i){if(1&e&&(r.Vb(0),r.Oc(1,F,2,1,"ng-container",37),r.Ub()),2&e){const e=r.nc(2);r.Cb(1),r.tc("ngForOf",e.watchlistVideos)}}function $(e,i){1&e&&r.Sb(0,"img",52)}function J(e,i){if(1&e&&r.Sb(0,"img",48),2&e){const e=r.nc(2).$implicit,i=r.nc(3);r.uc("src",i.apiUrl+"uploads/thumbnails/"+e.thumbnail,r.Jc)}}function P(e,i){if(1&e&&r.Sb(0,"img",50),2&e){const e=r.nc(5);r.tc("src",e.apiUrl+"uploads/avatars/"+e.authUser.avatar,r.Jc)}}function H(e,i){1&e&&r.Sb(0,"img",50),2&e&&r.tc("src","assets/img/default-user.png",r.Jc)}function E(e,i){if(1&e){const e=r.Yb();r.Xb(0,"div",41),r.jc("click",(function(){r.Hc(e);const i=r.nc().$implicit,n=r.nc(3);return n.openVideoPage(i,n.authUser.username)})),r.Oc(1,$,1,0,"img",51),r.Oc(2,J,1,1,"img",42),r.Xb(3,"div",44),r.Oc(4,P,1,1,"img",45),r.Oc(5,H,1,1,"img",45),r.Xb(6,"div"),r.Xb(7,"p",12),r.Qc(8),r.Wb(),r.Xb(9,"p",46),r.Qc(10),r.Wb(),r.Xb(11,"p",47),r.Qc(12,"17k watching"),r.Wb(),r.Wb(),r.Wb(),r.Wb()}if(2&e){const e=r.nc().$implicit,i=r.nc(3);r.Cb(1),r.tc("ngIf",!e.thumbnail||"undefined"===e.thumbnail),r.Cb(1),r.tc("ngIf",e.thumbnail&&"undefined"!==e.thumbnail),r.Cb(2),r.tc("ngIf",i.authUser.avatar),r.Cb(1),r.tc("ngIf",!i.authUser.avatar),r.Cb(3),r.Rc(e.name),r.Cb(2),r.Rc(i.authUser.full_name)}}function x(e,i){1&e&&(r.Vb(0),r.Oc(1,E,13,6,"ng-template",40),r.Ub())}function A(e,i){if(1&e&&(r.Vb(0),r.Xb(1,"p",38),r.Qc(2,"Recent videos"),r.Wb(),r.Xb(3,"owl-carousel-o"),r.Oc(4,x,2,0,"ng-container",37),r.Wb(),r.Ub()),2&e){const e=r.nc(2);r.Cb(4),r.tc("ngForOf",e.currentUser.videos)}}function Y(e,i){if(1&e){const e=r.Yb();r.Vb(0),r.Xb(1,"div",3),r.Oc(2,v,3,4,"div",4),r.Xb(3,"label",5),r.Sb(4,"img",6),r.Wb(),r.Wb(),r.Xb(5,"div",7),r.Xb(6,"div",8),r.Xb(7,"label",9),r.Oc(8,C,1,1,"img",10),r.Oc(9,U,1,1,"img",11),r.Wb(),r.Oc(10,W,3,5,"div",4),r.Xb(11,"div"),r.Xb(12,"p",12),r.Qc(13),r.Wb(),r.Xb(14,"p",13),r.Qc(15),r.Wb(),r.Wb(),r.Wb(),r.Oc(16,O,4,2,"div",14),r.Wb(),r.Xb(17,"div",15),r.Xb(18,"div",16),r.Xb(19,"ul",17),r.Oc(20,S,3,5,"li",18),r.Wb(),r.Xb(21,"form",19),r.Xb(22,"div",20),r.Xb(23,"input",21),r.jc("keyup.enter",(function(){return r.Hc(e),r.nc().searchVideos()})),r.Wb(),r.Sb(24,"i",22),r.Wb(),r.Wb(),r.Wb(),r.Oc(25,Q,2,1,"ng-container",1),r.Oc(26,A,5,1,"ng-container",1),r.Wb(),r.Ub()}if(2&e){const e=r.nc();r.Cb(2),r.tc("ngIf",e.channelUser.username===e.authUser.username),r.Cb(2),r.tc("src",e.channelUser.cover?e.apiUrl+"uploads/covers/"+e.channelUser.cover:"assets/img/default-thumbnail.png",r.Jc),r.Cb(4),r.tc("ngIf",e.channelUser.avatar),r.Cb(1),r.tc("ngIf",!e.channelUser.avatar),r.Cb(1),r.tc("ngIf",e.channelUser.username===e.authUser.username),r.Cb(3),r.Rc(e.channelUser.channel.name),r.Cb(2),r.Sc("",e.subscribersCount+" subscriber"+(1===e.subscribersCount?"":"s")," "),r.Cb(1),r.tc("ngIf",e.channelUser.username!==e.authUser.username),r.Cb(4),r.tc("ngForOf",e.allTabs),r.Cb(1),r.tc("formGroup",e.searchVideosForm),r.Cb(4),r.tc("ngIf","Watchlist"===e.activeTab.name),r.Cb(1),r.tc("ngIf","Videos"===e.activeTab.name)}}function M(e,i){1&e&&(r.Xb(0,"div",53),r.Xb(1,"p"),r.Qc(2,"Channel with such name is not found"),r.Wb(),r.Wb())}const B=[{path:"show",component:(()=>{class e{constructor(e,i,n,t,c,r,o,b,u){this.videoService=e,this.getAuthUser=i,this.router=n,this.usersService=t,this.base64ToFile=c,this.route=r,this.fb=o,this.channelService=b,this.subject=u,this.owlOptions=s.d,this.watchlistVideos=[],this.activeTab=s.g[0],this.allTabs=s.g,this.apiUrl=s.b,this.subscribedToChannel=!1,this.authUser=this.getAuthUser.transform(),this.passedUsername=this.route.snapshot.queryParams.username,this.searchVideosForm=this.fb.group({search:["",a.t.required]})}ngOnInit(){this.passedUsername&&this.usersService.getUserInfo({username:this.passedUsername}).subscribe(e=>{e&&(this.channelUser=e,this.checkChannelSubscription())}),this.videoService.getUserVideos({user_id:this.authUser.id}).subscribe(e=>{this.currentUser=e}),this.videoService.getVideosByAuthor({}).subscribe(e=>{this.watchlistVideos=e})}changeActiveTab(e){this.activeTab=e,this.searchVideos()}checkChannelSubscription(){this.channelService.checkChannelSubscription({user_id:this.authUser.id,channel_id:this.channelUser.channel.id}).subscribe(e=>{this.subscribedToChannel="Subscribed"===e.status,this.subscribersCount=e.subscribers_count})}openVideoPage(e,i){let n,t;console.log(i),"live"===e.status?(n="user/video/watch",t={session:e.session_name,publisher:i}):(n="videos/play",t={id:e.id}),this.router.navigate([n],{queryParams:t})}coverChangeEvent(e){this.coverChangedEvent=e}profileChangeEvent(e){this.profileChangedEvent=e}profileCropped(e){this.profileBase64=e.base64;const i=`profile_${Date.now()}.jpg`,n=new FormData;n.append("avatar_file",this.base64ToFile.transform(e.base64),i),n.append("avatar",i),n.append("id",this.authUser.id),this.usersService.changeProfileImage(n).subscribe(e=>{localStorage.setItem("token",e.token),this.authUser=this.getAuthUser.transform(),this.channelUser=this.authUser})}coverCropped(e){this.coverBase64=e.base64;const i=new FormData,n=`cover_${Date.now()}.jpg`;i.append("cover_file",this.base64ToFile.transform(e.base64),n),i.append("cover",n),i.append("id",this.authUser.id),this.usersService.changeCoverImage(i).subscribe(e=>{localStorage.setItem("token",e.token),this.authUser=this.getAuthUser.transform(),this.channelUser=this.authUser})}searchVideos(){const e=this.searchVideosForm.value;e.search&&("Watchlist"===this.activeTab.name?this.searchInVideosByAuthor(e):"Videos"===this.activeTab.name&&this.searchInUserVideos(e))}searchInVideosByAuthor(e){this.videoService.searchInVideosByAuthor(e).subscribe(e=>{this.watchlistVideos=e})}searchInUserVideos(e){this.currentUser.videos=[],this.videoService.searchInUserVideos(Object.assign({user_id:this.authUser.id},e)).subscribe(e=>{this.currentUser.videos=e.videos})}subscribeToChannel(e){console.log(e),this.channelService.subscribeToChannel({user_id:this.authUser.id,channel_id:e.id}).subscribe(e=>{this.subscribedToChannel="Subscribed"===e.status,this.subscribersCount=e.subscribers_count,this.channelService.getUserChannelSubscriptions({user_id:this.authUser.id}).subscribe(e=>{this.subject.setUserSubscriptions(e)})})}}return e.\u0275fac=function(i){return new(i||e)(r.Rb(o.a),r.Rb(b.a),r.Rb(c.d),r.Rb(h),r.Rb(l.a),r.Rb(c.a),r.Rb(a.c),r.Rb(d.a),r.Rb(f.a))},e.\u0275cmp=r.Lb({type:e,selectors:[["app-show-channel"]],decls:4,vars:2,consts:[[1,"profile-list"],[4,"ngIf"],["class","channel-not-found",4,"ngIf"],[1,"profile-block"],[3,"hidden",4,"ngIf"],["for","cover-image-input"],["id","cover-image",3,"src"],[1,"sub-block"],[1,"d-flex","align-items-center"],["for","profile-image-input"],["class","avatar list-img",3,"src",4,"ngIf"],["class","avatar","id","profile-image",3,"src",4,"ngIf"],[1,"main-text-1"],[1,"main-text-4"],["class","d-flex align-items-center",4,"ngIf"],[1,"watchlist","pWatchlist"],[1,"profile-list","user-profile-block"],["id","profileList","role","tablist",1,"nav","nav-tabs"],["class","nav-item",4,"ngFor","ngForOf"],[3,"formGroup"],[1,"watchlist-search"],["placeholder","Search","formControlName","search",1,"watchlist-input",3,"keyup.enter"],[1,"fas","fa-search"],[3,"hidden"],["type","file","id","cover-image-input",3,"change"],[3,"imageChanedEvent","autoCrop","viewMode","imageCropped"],[1,"avatar","list-img",3,"src"],["id","profile-image",1,"avatar",3,"src"],["type","file","id","profile-image-input",3,"change"],[3,"imageChanedEvent","aspectRatio","viewMode","resizeToWidth","imageCropped"],[1,"sub-bell","fas","fa-bell"],["class","subscribe-btn",3,"click",4,"ngIf"],["class","subscribe-btn subscribed",3,"click",4,"ngIf"],[1,"subscribe-btn",3,"click"],[1,"subscribe-btn","subscribed",3,"click"],[1,"nav-item"],["data-toggle","tab","role","tab","aria-controls","pWatch","aria-selected","true",1,"nav-link",3,"id","href","click"],[4,"ngFor","ngForOf"],[1,"trending-text"],[3,"options"],["carouselSlide",""],[1,"item","main-carousel-item",3,"click"],["class","main-item-img",3,"src",4,"ngIf"],["class","live-now",4,"ngIf"],[1,"main-item-block"],["class","avatar",3,"src",4,"ngIf"],[1,"main-text-2"],[1,"main-text-3"],[1,"main-item-img",3,"src"],[1,"live-now"],[1,"avatar",3,"src"],["class","main-item-img","src","assets/img/video-thumbnail-default.png",4,"ngIf"],["src","assets/img/video-thumbnail-default.png",1,"main-item-img"],[1,"channel-not-found"]],template:function(e,i){1&e&&(r.Xb(0,"div",0),r.Sb(1,"app-categories"),r.Oc(2,Y,27,12,"ng-container",1),r.Oc(3,M,3,0,"div",2),r.Wb()),2&e&&(r.Cb(2),r.tc("ngIf",i.channelUser),r.Cb(1),r.tc("ngIf",!i.channelUser))},directives:[g.a,t.m,t.l,a.v,a.m,a.g,a.b,a.l,a.f,p.a,m.a,m.c],styles:[".profile-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%}.subscribed[_ngcontent-%COMP%]{background-color:#d6d6d6!important}"]}),e})()}];let D=(()=>{class e{}return e.\u0275mod=r.Pb({type:e}),e.\u0275inj=r.Ob({factory:function(i){return new(i||e)},imports:[[c.e.forChild(B)],c.e]}),e})();var N=n("PCNd");let L=(()=>{class e{}return e.\u0275mod=r.Pb({type:e}),e.\u0275inj=r.Ob({factory:function(i){return new(i||e)},imports:[[t.c,D,N.a,p.b]]}),e})()}}]);