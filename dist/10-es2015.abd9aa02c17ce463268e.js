(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"55j5":function(t,n,e){"use strict";e.r(n),e.d(n,"ChannelsModule",(function(){return yt}));var i=e("ofXK"),s=e("tyNb"),c=e("9xOu"),a=e("3Pt+"),o=e("fXoL"),r=e("FFj9"),l=e("wDcp"),b=e("ZP/m"),h=e("86ia"),g=e("SAI1");function d(t,n){if(1&t){const t=o.Yb();o.Xb(0,"app-video-filters",2),o.jc("filter",(function(n){return o.Hc(t),o.nc().getFilteredVideos(n)})),o.Wb()}}function p(t,n){if(1&t&&(o.Vb(0),o.Sb(1,"app-video-carousel-holder",4),o.Ub()),2&t){const t=o.nc().$implicit;o.Cb(1),o.tc("videos",t.videos)("title",t.full_name)("detailsSource",t)}}function u(t,n){if(1&t&&(o.Vb(0),o.Oc(1,p,2,3,"ng-container",3),o.Ub()),2&t){const t=n.$implicit;o.Cb(1),o.tc("ngIf",t.videos.length>0)}}let f=(()=>{class t{constructor(t,n,e,i){this.videoService=t,this.subjectService=n,this.router=e,this.getExactParams=i,this.watchlistVideos=[],this.owlOptions=c.e,this.apiUrl=c.b,this.subscriptions=[],this.showFilters=!1,this.filters=null}ngOnInit(){this.watchlistVideos=[],this.search=localStorage.getItem("search"),this.getAllVideosByAuthors({search:this.search,filters:this.filters}),this.getFiltersToggleState()}getFiltersToggleState(){this.subscriptions.push(this.subjectService.getToggleFiltersData().subscribe(t=>{this.showFilters=t}))}getAllVideosByAuthors(t){t=this.getExactParams.transform(t),console.log(t),this.subscriptions.push(this.videoService.getVideosByAuthor(t).subscribe(t=>{this.watchlistVideos=t}))}getFilteredVideos(t){this.filters=t,this.getAllVideosByAuthors({search:this.search,filters:t})}getSearchResults(t){this.search=t,console.log("get search results"),this.getAllVideosByAuthors({search:t,filters:this.filters})}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(r.a),o.Rb(l.a),o.Rb(s.d),o.Rb(b.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-watchlist-tab"]],inputs:{filters:"filters"},decls:2,vars:2,consts:[[3,"filter",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"filter"],[4,"ngIf"],[3,"videos","title","detailsSource"]],template:function(t,n){1&t&&(o.Oc(0,d,1,0,"app-video-filters",0),o.Oc(1,u,2,1,"ng-container",1)),2&t&&(o.tc("ngIf",n.showFilters),o.Cb(1),o.tc("ngForOf",n.watchlistVideos))},directives:[i.m,i.l,h.a,g.a],styles:[""]}),t})();function C(t,n){if(1&t){const t=o.Yb();o.Xb(0,"app-video-filters",2),o.jc("filter",(function(n){return o.Hc(t),o.nc().getFilteredVideos(n)})),o.Wb()}}let m=(()=>{class t{constructor(t,n,e,i){this.router=t,this.videoService=n,this.subjectService=e,this.getExactParams=i,this.owlOptions=c.e,this.apiUrl=c.b,this.showFilters=!1,this.search="",this.filters=null,this.userVideos=[],this.videosLoaded=!1}ngOnInit(){this.subjectService.getToggleFiltersData().subscribe(t=>{this.showFilters=t})}getUserVideos(t){(t=this.getExactParams.transform(t)).user_id=this.channelUser.id,this.videoService.getUserVideos(t).subscribe(t=>{this.videosLoaded=!0,this.channelUser.videos=null==t?void 0:t.videos})}getSearchResults(t){this.search=t,this.getUserVideos({search:this.search,filters:this.filters})}getFilteredVideos(t){this.filters=t,this.getUserVideos({search:this.search,filters:this.filters})}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(s.d),o.Rb(r.a),o.Rb(l.a),o.Rb(b.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-videos-tab"]],inputs:{channelUser:"channelUser",authUser:"authUser"},decls:2,vars:5,consts:[[3,"filter",4,"ngIf"],[3,"videos","title","detailsSource","removable"],[3,"filter"]],template:function(t,n){1&t&&(o.Oc(0,C,1,0,"app-video-filters",0),o.Sb(1,"app-video-carousel-holder",1)),2&t&&(o.tc("ngIf",n.showFilters),o.Cb(1),o.tc("videos",n.channelUser.videos)("title","Recent videos")("detailsSource",n.channelUser)("removable",n.authUser.username===n.channelUser.username))},directives:[i.m,g.a,h.a],styles:[""]}),t})();var O=e("0IaG"),P=e("CPAS");function v(t,n){1&t&&(o.Xb(0,"span",11),o.Qc(1,"Playlist title is required"),o.Wb())}function M(t,n){1&t&&(o.Xb(0,"span",11),o.Qc(1,"Playlist description is required"),o.Wb())}function _(t,n){1&t&&(o.Xb(0,"span",11),o.Qc(1,"Playlist privacy is required"),o.Wb())}let y=(()=>{class t{constructor(t,n,e,i){this.data=t,this.modal=n,this.fb=e,this.playlistService=i,this.isSubmitted=!1,console.log(t),this.addPlaylistForm=this.fb.group({channel_id:t.channel_id,name:["",a.w.required],description:["",a.w.required],privacy:["",a.w.required]})}ngOnInit(){}createPlaylist(){this.isSubmitted=!0,this.addPlaylistForm.valid&&this.playlistService.addPlaylist(this.addPlaylistForm.value).subscribe(t=>{this.modal.close()})}cancel(){this.modal.close()}get nameCtrl(){return this.addPlaylistForm.get("name")}get privacyCtrl(){return this.addPlaylistForm.get("privacy")}get descCtrl(){return this.addPlaylistForm.get("description")}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(O.a),o.Rb(O.d),o.Rb(a.e),o.Rb(P.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-add-playlist-dialog"]],decls:20,vars:7,consts:[[1,"add-playlist-modal"],[3,"formGroup"],["type","text","placeholder","Playlist Title","formControlName","name"],["class","error",4,"ngIf"],["id","playlist-description","cols","30","rows","10","formControlName","description","placeholder","Playlist Description"],[1,"select"],["id","visibility","formControlName","privacy"],[3,"value"],[1,"btn-wrap"],[1,"btn","cancel",3,"click"],[1,"btn","create",3,"click"],[1,"error"]],template:function(t,n){1&t&&(o.Xb(0,"div",0),o.Xb(1,"form",1),o.Sb(2,"input",2),o.Oc(3,v,2,0,"span",3),o.Sb(4,"textarea",4),o.Oc(5,M,2,0,"span",3),o.Xb(6,"div",5),o.Xb(7,"select",6),o.Xb(8,"option",7),o.Qc(9,"Visibility"),o.Wb(),o.Xb(10,"option",7),o.Qc(11,"Public"),o.Wb(),o.Xb(12,"option",7),o.Qc(13,"Private"),o.Wb(),o.Wb(),o.Wb(),o.Oc(14,_,2,0,"span",3),o.Xb(15,"div",8),o.Xb(16,"button",9),o.jc("click",(function(){return n.cancel()})),o.Qc(17,"Cancel"),o.Wb(),o.Xb(18,"button",10),o.jc("click",(function(){return n.createPlaylist()})),o.Qc(19,"Create"),o.Wb(),o.Wb(),o.Wb(),o.Wb()),2&t&&(o.Cb(1),o.tc("formGroup",n.addPlaylistForm),o.Cb(2),o.tc("ngIf",n.nameCtrl.hasError("required")&&n.isSubmitted),o.Cb(2),o.tc("ngIf",n.descCtrl.hasError("required")&&n.isSubmitted),o.Cb(3),o.tc("value",""),o.Cb(2),o.tc("value",0),o.Cb(2),o.tc("value",1),o.Cb(2),o.tc("ngIf",n.privacyCtrl.hasError("required")&&n.isSubmitted))},directives:[a.y,a.p,a.i,a.c,a.o,a.h,i.m,a.v,a.s,a.x],styles:[".add-playlist-modal[_ngcontent-%COMP%]{overflow:auto;max-height:100%;padding:32px;width:100%;max-width:890px;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);position:absolute;background:#fff;z-index:1001}.add-playlist-modal[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .add-playlist-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .add-playlist-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;padding:12px 24px;background:#f4f4f4;color:#545454;margin-bottom:32px;border:0;outline:none}.add-playlist-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:162px;min-height:96px;max-height:280px;resize:none}.add-playlist-modal[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:auto;min-width:284px}.add-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.add-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-left:24px;background:#18b587;color:#fff;font-size:16px;border-radius:0;padding:8px 24px;line-height:normal}.add-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.cancel[_ngcontent-%COMP%]{background:#c9c9c9}"]}),t})();var w=e("NFeN"),U=e("fZdh");function W(t,n){if(1&t){const t=o.Yb();o.Xb(0,"app-video-filters",4),o.jc("filter",(function(n){return o.Hc(t),o.nc().getFilteredPlaylists(n)})),o.Wb()}}function X(t,n){1&t&&(o.Vb(0),o.Xb(1,"mat-icon"),o.Qc(2,"visibility_off"),o.Wb(),o.Xb(3,"span"),o.Qc(4,"Private"),o.Wb(),o.Ub())}function x(t,n){1&t&&(o.Vb(0),o.Xb(1,"mat-icon"),o.Qc(2,"visibility_on"),o.Wb(),o.Xb(3,"span"),o.Qc(4,"Public"),o.Wb(),o.Ub())}function I(t,n){if(1&t){const t=o.Yb();o.Xb(0,"tr"),o.Xb(1,"td"),o.Xb(2,"div",7),o.Xb(3,"img",8),o.jc("click",(function(){o.Hc(t);const e=n.$implicit;return o.nc(3).goToEditPage(e)})),o.oc(4,"getImgPath"),o.Wb(),o.Xb(5,"div",9),o.Xb(6,"h3"),o.Qc(7),o.Wb(),o.Xb(8,"p"),o.Qc(9),o.Wb(),o.Wb(),o.Wb(),o.Wb(),o.Xb(10,"td"),o.Oc(11,X,5,0,"ng-container",2),o.Oc(12,x,5,0,"ng-container",2),o.Wb(),o.Xb(13,"td"),o.Xb(14,"span"),o.Qc(15),o.oc(16,"date"),o.Wb(),o.Wb(),o.Xb(17,"td"),o.Xb(18,"span"),o.Qc(19),o.oc(20,"date"),o.Wb(),o.Wb(),o.Xb(21,"td"),o.Xb(22,"span"),o.Qc(23),o.Wb(),o.Wb(),o.Xb(24,"td"),o.Xb(25,"span",10),o.jc("click",(function(){o.Hc(t);const e=n.$implicit;return o.nc(3).goToEditPage(e)})),o.Qc(26,"create"),o.Wb(),o.Xb(27,"mat-icon",11),o.jc("click",(function(){o.Hc(t);const e=n.$implicit,i=o.nc(3);return i.removePlaylist(e.id,i.channelUser.id)})),o.Qc(28,"delete"),o.Wb(),o.Wb(),o.Wb()}if(2&t){const t=n.$implicit;o.Cb(3),o.tc("src",o.pc(4,8,t.thumbnail),o.Jc),o.Cb(4),o.Rc(t.name),o.Cb(2),o.Rc(t.description),o.Cb(2),o.tc("ngIf",t.privacy),o.Cb(1),o.tc("ngIf",!t.privacy),o.Cb(3),o.Rc(o.qc(16,10,t.created_at,"d MMM, yyyy")),o.Cb(4),o.Rc(o.qc(20,13,t.updated_at,"d MMM, yyyy")),o.Cb(4),o.Rc(t.videos.length)}}function S(t,n){if(1&t&&(o.Xb(0,"table"),o.Xb(1,"tr"),o.Xb(2,"th"),o.Qc(3,"Playlist"),o.Wb(),o.Xb(4,"th"),o.Qc(5,"Visibility"),o.Wb(),o.Xb(6,"th"),o.Qc(7,"Created at"),o.Wb(),o.Xb(8,"th"),o.Qc(9,"Last updated"),o.Wb(),o.Xb(10,"th"),o.Qc(11,"Video count"),o.Wb(),o.Sb(12,"th"),o.Wb(),o.Oc(13,I,29,16,"tr",6),o.Wb()),2&t){const t=o.nc(2);o.Cb(13),o.tc("ngForOf",t.playlists)}}function k(t,n){if(1&t){const t=o.Yb();o.Vb(0),o.Xb(1,"button",5),o.jc("click",(function(){return o.Hc(t),o.nc().openAddPlaylistModal()})),o.Qc(2,"Add New Playlist"),o.Wb(),o.Oc(3,S,14,1,"table",2),o.Ub()}if(2&t){const t=o.nc();o.Cb(3),o.tc("ngIf",t.playlists.length>0)}}function F(t,n){if(1&t){const t=o.Yb();o.Xb(0,"div",14),o.Xb(1,"div",15),o.jc("click",(function(){o.Hc(t);const n=o.nc().$implicit;return o.nc(2).openPlaylistPage(n,null==n.videos[0]?null:n.videos[0].id)})),o.Sb(2,"img",16),o.oc(3,"getImgPath"),o.Xb(4,"div",17),o.Xb(5,"p",18),o.Xb(6,"span",19),o.Qc(7,"playlist_play"),o.Wb(),o.Wb(),o.Xb(8,"p"),o.Qc(9),o.Wb(),o.Xb(10,"p",20),o.Qc(11),o.Wb(),o.Wb(),o.Wb(),o.Xb(12,"div",9),o.Xb(13,"h2"),o.Qc(14),o.Wb(),o.Xb(15,"p"),o.Qc(16),o.Wb(),o.Wb(),o.Wb()}if(2&t){const t=o.nc().$implicit;o.Cb(2),o.tc("src",o.pc(3,5,t.thumbnail),o.Jc),o.Cb(7),o.Rc(t.name),o.Cb(2),o.Rc(t.videos.length+(1===t.videos.length?" video":" videos")),o.Cb(3),o.Rc(t.name),o.Cb(2),o.Rc(t.description)}}function R(t,n){if(1&t&&(o.Vb(0),o.Oc(1,F,17,7,"div",13),o.Ub()),2&t){const t=n.$implicit;o.Cb(1),o.tc("ngIf",(null==t||null==t.videos?null:t.videos.length)>0)}}function T(t,n){if(1&t&&(o.Vb(0),o.Xb(1,"div",12),o.Oc(2,R,2,1,"ng-container",6),o.Wb(),o.Ub()),2&t){const t=o.nc();o.Cb(2),o.tc("ngForOf",t.playlists)}}function Q(t,n){1&t&&(o.Xb(0,"span"),o.Qc(1,"No playlists found for this channel"),o.Wb())}let j=(()=>{class t{constructor(t,n,e,i,s){this.router=t,this.playlistsService=n,this.subjectService=e,this.dialog=i,this.getExactParams=s,this.playlists=[],this.apiUrl=c.b,this.showFilters=!1,this.search="",this.filters=null,this.subscriptions=[]}ngOnInit(){this.search=localStorage.getItem("search"),this.getPlaylists({search:this.search,filters:this.filters}),this.getFiltersToggleState()}getFiltersToggleState(){this.subscriptions.push(this.subjectService.getToggleFiltersData().subscribe(t=>{this.showFilters=t}))}getPlaylists(t){t=this.getExactParams.transform(t),this.playlistsService.get(Object.assign({channel_id:this.channelUser.channel.id},t)).subscribe(t=>{this.playlists=t})}openAddPlaylistModal(){this.dialog.open(y,{data:{channel_id:this.channelUser.channel.id}}).afterClosed().subscribe(t=>{this.getPlaylists({search:this.search,filters:this.filters})})}openPlaylistPage(t,n){this.router.navigate(["videos/play"],{queryParams:{id:n,playlist_id:t.id}})}getSearchResults(t){this.search=t,this.getPlaylists({search:t,filters:this.filters})}getFilteredPlaylists(t){this.filters=t,this.getPlaylists({search:this.search,filters:t})}goToEditPage(t){this.router.navigate(["playlists/single/"+t.id])}removePlaylist(t,n){this.playlistsService.removePlaylist({id:t,channel_id:n}).subscribe(t=>{this.getPlaylists({search:this.search,filters:this.filters})})}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(s.d),o.Rb(P.a),o.Rb(l.a),o.Rb(O.b),o.Rb(b.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-playlists-tab"]],inputs:{channelUser:"channelUser",authUser:"authUser"},decls:6,vars:4,consts:[[3,"filter",4,"ngIf"],[1,"playlist-tab"],[4,"ngIf"],["id","no-playlists-found"],[3,"filter"],[1,"btn","new-playlist",3,"click"],[4,"ngFor","ngForOf"],[1,"img-info"],[1,"thumbnail",3,"src","click"],[1,"info"],[1,"material-icons",3,"click"],[3,"click"],[1,"playlists-items"],["class","item",4,"ngIf"],[1,"item"],[1,"top-wrap",3,"click"],[1,"thumbnail",3,"src"],[1,"overlay-info"],[1,"icon"],[1,"material-icons"],[1,"video-count"]],template:function(t,n){1&t&&(o.Oc(0,W,1,0,"app-video-filters",0),o.Xb(1,"div",1),o.Oc(2,k,4,1,"ng-container",2),o.Oc(3,T,3,1,"ng-container",2),o.Xb(4,"div",3),o.Oc(5,Q,2,0,"span",2),o.Wb(),o.Wb()),2&t&&(o.tc("ngIf",n.showFilters),o.Cb(2),o.tc("ngIf",n.authUser.username===n.channelUser.username),o.Cb(1),o.tc("ngIf",n.authUser.username!==n.channelUser.username),o.Cb(2),o.tc("ngIf",0===n.playlists.length))},directives:[i.m,h.a,i.l,w.a],pipes:[U.a,i.e],styles:[".playlist-tab[_ngcontent-%COMP%]   .new-playlist[_ngcontent-%COMP%]{background:#18b587;border-radius:0;color:#fff;padding:8px 24px}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{display:table;margin:24px 0;width:100%}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table-row}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   .td[_ngcontent-%COMP%]{border-bottom:0}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{text-align:right}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%]{transition:.3s}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%]:hover{color:#18b587}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{display:table-cell;vertical-align:middle;color:#545454;font-family:Muli-Bold;font-size:16px;padding:12px 0}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%]{margin:0}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{margin-right:12px!important;vertical-align:middle;cursor:pointer}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:144px;cursor:pointer}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-left:24px}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{max-width:240px;font-size:16px;font-family:Muli-Bold;-webkit-line-clamp:1;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:240px;font-size:12px;font-weight:400;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.playlists-items[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{flex:0 0 calc(33.3% - 21px);margin-right:32px;margin-bottom:32px;cursor:pointer}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3n+3){margin-right:0}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]{position:relative;height:216px}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   .overlay-info[_ngcontent-%COMP%]{padding:16px;position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.38)}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   .overlay-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:700;margin-bottom:8px}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-top:24px}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#545454;font-size:16px;font-weight:700}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:0;color:#545454;font-size:15px;font-weight:500}"]}),t})();var V=e("Rnal"),A=e("tk/3");let E=(()=>{class t{constructor(t){this.httpClient=t}changeProfileImage(t){return this.httpClient.post(c.b+"users/change-profile-image",t)}changeCoverImage(t){return this.httpClient.post(c.b+"users/change-cover-image",t)}getUserInfo(t){return this.httpClient.get(c.b+"users/get-user-info",{params:t})}}return t.\u0275fac=function(n){return new(n||t)(o.fc(A.b))},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var L=e("1m4N"),H=e("HHsJ"),D=e("Y9zH"),Y=e("lwos"),q=e("kUS0"),z=e("Xa2L");function $(t,n){if(1&t){const t=o.Yb();o.Xb(0,"div",12),o.Xb(1,"input",13),o.jc("change",(function(n){return o.Hc(t),o.nc().coverChangeEvent(n)})),o.Wb(),o.Xb(2,"ngx-photo-editor",14),o.jc("imageCropped",(function(n){return o.Hc(t),o.nc().coverCropped(n)})),o.Wb(),o.Wb()}if(2&t){const t=o.nc();o.tc("hidden",!0),o.Cb(2),o.tc("imageChanedEvent",t.coverChangedEvent)("autoCrop",!1)("viewMode",3)}}function B(t,n){if(1&t){const t=o.Yb();o.Xb(0,"div",12),o.Xb(1,"input",15),o.jc("change",(function(n){return o.Hc(t),o.nc().profileChangeEvent(n)})),o.Wb(),o.Xb(2,"ngx-photo-editor",16),o.jc("imageCropped",(function(n){return o.Hc(t),o.nc().profileCropped(n)})),o.Wb(),o.Wb()}if(2&t){const t=o.nc();o.tc("hidden",!0),o.Cb(2),o.tc("imageChanedEvent",t.profileChangedEvent)("aspectRatio",4/3)("viewMode",1)("resizeToWidth",500)}}function N(t,n){1&t&&(o.Xb(0,"div",17),o.Sb(1,"mat-spinner",18),o.Wb()),2&t&&(o.Cb(1),o.tc("diameter",20))}function J(t,n){if(1&t){const t=o.Yb();o.Xb(0,"a",22),o.jc("click",(function(){o.Hc(t);const n=o.nc(2);return n.subscribeToChannel(n.channelUser.channel)})),o.Qc(1,"Subscribe"),o.Wb()}}function G(t,n){if(1&t){const t=o.Yb();o.Xb(0,"a",23),o.jc("click",(function(){o.Hc(t);const n=o.nc(2);return n.subscribeToChannel(n.channelUser.channel)})),o.Qc(1,"Subscribed"),o.Wb()}}function Z(t,n){if(1&t&&(o.Xb(0,"div",5),o.Sb(1,"i",19),o.Oc(2,J,2,0,"a",20),o.Oc(3,G,2,0,"a",21),o.Wb()),2&t){const t=o.nc();o.Cb(2),o.tc("ngIf",!t.subscribedToChannel),o.Cb(1),o.tc("ngIf",t.subscribedToChannel)}}let K=(()=>{class t{constructor(t,n,e,i,s,a){this.usersService=t,this.base64ToFile=n,this.getAuthUser=e,this.channelService=i,this.subject=s,this.loader=a,this.apiUrl=c.b,this.subscribedToChannel=!1,this.subscribersCount=0}ngOnInit(){this.checkChannelSubscription()}coverChangeEvent(t){this.coverChangedEvent=t}profileChangeEvent(t){this.profileChangedEvent=t}profileCropped(t){this.profileBase64=t.base64;const n=`profile_${Date.now()}.jpg`,e=new FormData;e.append("avatar_file",this.base64ToFile.transform(t.base64),n),e.append("avatar",n),e.append("id",this.authUser.id),this.loader.dataLoading=!0,this.usersService.changeProfileImage(e).subscribe(t=>{this.changeAuthUserInfo(t)})}coverCropped(t){this.coverBase64=t.base64;const n=new FormData,e=`cover_${Date.now()}.jpg`;n.append("cover_file",this.base64ToFile.transform(t.base64),e),n.append("cover",e),n.append("id",this.authUser.id),this.loader.dataLoading=!0,this.usersService.changeCoverImage(n).subscribe(t=>{this.changeAuthUserInfo(t)})}subscribeToChannel(t){console.log(t),this.channelService.subscribeToChannel({user_id:this.authUser.id,channel_id:t.id}).subscribe(t=>{this.subscribedToChannel="Subscribed"===t.status,this.subscribersCount=t.subscribers_count,this.channelService.getUserChannelSubscriptions({user_id:this.authUser.id}).subscribe(t=>{this.subject.setUserSubscriptions(t)})})}checkChannelSubscription(){this.channelService.checkChannelSubscription({user_id:this.authUser.id,channel_id:this.channelUser.channel.id}).subscribe(t=>{this.subscribedToChannel="Subscribed"===t.status,this.subscribersCount=t.subscribers_count})}changeAuthUserInfo(t){localStorage.setItem("token",t.token),this.authUser=this.getAuthUser.transform(),this.channelUser=this.authUser,this.loader.dataLoading=!1}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(E),o.Rb(L.a),o.Rb(V.a),o.Rb(H.a),o.Rb(l.a),o.Rb(Y.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-channel-profile"]],inputs:{channelUser:"channelUser",authUser:"authUser"},decls:18,vars:14,consts:[[1,"profile-block"],[3,"hidden",4,"ngIf"],["for","cover-image-input"],["id","cover-image",3,"src"],[1,"sub-block"],[1,"d-flex","align-items-center"],["for","profile-image-input"],["id","profile-image",1,"avatar",3,"src"],[1,"main-text-1"],[1,"main-text-4"],["class","loader",4,"ngIf"],["class","d-flex align-items-center",4,"ngIf"],[3,"hidden"],["type","file","id","cover-image-input",3,"change"],[3,"imageChanedEvent","autoCrop","viewMode","imageCropped"],["type","file","id","profile-image-input",3,"change"],[3,"imageChanedEvent","aspectRatio","viewMode","resizeToWidth","imageCropped"],[1,"loader"],[3,"diameter"],[1,"sub-bell","fas","fa-bell"],["class","subscribe-btn",3,"click",4,"ngIf"],["class","subscribe-btn subscribed",3,"click",4,"ngIf"],[1,"subscribe-btn",3,"click"],[1,"subscribe-btn","subscribed",3,"click"]],template:function(t,n){1&t&&(o.Xb(0,"div",0),o.Oc(1,$,3,4,"div",1),o.Xb(2,"label",2),o.Sb(3,"img",3),o.oc(4,"getImgPath"),o.Wb(),o.Wb(),o.Xb(5,"div",4),o.Xb(6,"div",5),o.Xb(7,"label",6),o.Sb(8,"img",7),o.oc(9,"getImgPath"),o.Wb(),o.Oc(10,B,3,5,"div",1),o.Xb(11,"div"),o.Xb(12,"p",8),o.Qc(13),o.Wb(),o.Xb(14,"p",9),o.Qc(15),o.Wb(),o.Wb(),o.Oc(16,N,2,1,"div",10),o.Wb(),o.Oc(17,Z,4,2,"div",11),o.Wb()),2&t&&(o.Cb(1),o.tc("ngIf",n.channelUser.username===n.authUser.username),o.Cb(2),o.tc("src",o.qc(4,8,null==n.channelUser?null:n.channelUser.cover,"covers"),o.Jc),o.Cb(5),o.tc("src",o.qc(9,11,null==n.channelUser?null:n.channelUser.avatar,"avatars"),o.Jc),o.Cb(2),o.tc("ngIf",n.channelUser.username===n.authUser.username),o.Cb(3),o.Rc(n.channelUser.channel.name),o.Cb(2),o.Sc("",n.subscribersCount+" subscriber"+(1===n.subscribersCount?"":"s")," "),o.Cb(1),o.tc("ngIf",n.loader.dataLoading),o.Cb(1),o.tc("ngIf",n.channelUser.username!==n.authUser.username))},directives:[i.m,q.a,z.b],pipes:[U.a],styles:[".loader[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:52px;margin-left:10px;margin-top:-17px}label[for=cover-image-input][_ngcontent-%COMP%]{width:100%}"]}),t})();function tt(t,n){1&t&&(o.Xb(0,"h2"),o.Qc(1,"Description"),o.Wb())}function nt(t,n){if(1&t){const t=o.Yb();o.Xb(0,"button",9),o.jc("click",(function(){o.Hc(t);const n=o.nc();return n.editMode=!n.editMode})),o.Qc(1,"Edit"),o.Wb()}}function et(t,n){if(1&t&&(o.Xb(0,"div",10),o.Xb(1,"p"),o.Qc(2),o.Wb(),o.Wb()),2&t){const t=o.nc();o.Cb(2),o.Rc(t.channelUser.channel.description)}}function it(t,n){1&t&&o.Sb(0,"textarea",11)}function st(t,n){if(1&t){const t=o.Yb();o.Xb(0,"button",12),o.jc("click",(function(){return o.Hc(t),o.nc().saveChannelDescription()})),o.Qc(1,"Save"),o.Wb()}}let ct=(()=>{class t{constructor(t,n){this.fb=t,this.channelService=n,this.descriptionUpdated=!1,this.editMode=!1}ngOnInit(){this.aboutForm=this.fb.group({description:["",a.w.required],id:["",a.w.required],username:["",a.w.required]}),this.aboutForm.patchValue(Object.assign({username:this.channelUser.username},this.channelUser.channel))}saveChannelDescription(){this.descriptionUpdated=!0,this.channelService.saveDescription(this.aboutForm.value).subscribe(t=>{this.channelUser=t,this.editMode=!1})}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(a.e),o.Rb(H.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-about-tab"]],inputs:{channelUser:"channelUser"},decls:12,vars:10,consts:[[1,"about-tab"],["id","channel-about-form",3,"formGroup"],[1,"info"],[4,"ngIf"],[1,"date"],["class","btn",3,"click",4,"ngIf"],["class","description",4,"ngIf"],["formControlName","description",4,"ngIf"],["class","save",3,"click",4,"ngIf"],[1,"btn",3,"click"],[1,"description"],["formControlName","description"],[1,"save",3,"click"]],template:function(t,n){1&t&&(o.Xb(0,"div",0),o.Xb(1,"form",1),o.Xb(2,"div",2),o.Oc(3,tt,2,0,"h2",3),o.Xb(4,"div",4),o.Xb(5,"span"),o.Qc(6),o.oc(7,"date"),o.Wb(),o.Oc(8,nt,2,0,"button",5),o.Wb(),o.Wb(),o.Oc(9,et,3,1,"div",6),o.Oc(10,it,1,0,"textarea",7),o.Oc(11,st,2,0,"button",8),o.Wb(),o.Wb()),2&t&&(o.Cb(1),o.tc("formGroup",n.aboutForm),o.Cb(2),o.tc("ngIf",null==n.channelUser.channel?null:n.channelUser.channel.description),o.Cb(3),o.Sc("Joined ",o.qc(7,7,n.channelUser.channel.created_at,"d MMM, yyyy"),""),o.Cb(2),o.tc("ngIf",!n.editMode),o.Cb(1),o.tc("ngIf",!n.editMode&&(null==n.channelUser?null:n.channelUser.channel.description)),o.Cb(1),o.tc("ngIf",!n.descriptionUpdated&&n.editMode),o.Cb(1),o.tc("ngIf",n.editMode))},directives:[a.y,a.p,a.i,i.m,a.c,a.o,a.h],pipes:[i.e],styles:[".about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:16px;color:#18b587;font-family:Muli-Bold}.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-top:0;display:flex;align-items:center}.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:#545454;font-family:Muli-Bold}.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-left:24px;background:#18b587;color:#fff;padding:4px 18px;border-radius:0}.about-tab[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-top:24px;padding:24px;background:#f4f4f4;color:#545454;font-size:16px}.about-tab[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;height:120px}.about-tab[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]{margin-top:24px;background:#c9c9c9;color:#545454;padding:4px 18px;border-radius:0}.about-tab[_ngcontent-%COMP%]   .save.active[_ngcontent-%COMP%]{background:#18b587;color:#fff}"]}),t})();function at(t,n){if(1&t){const t=o.Yb();o.Xb(0,"li",14),o.Xb(1,"a",15),o.jc("click",(function(){o.Hc(t);const e=n.$implicit;return o.nc(2).changeActiveTab(e)})),o.Qc(2),o.Wb(),o.Wb()}if(2&t){const t=n.$implicit,e=o.nc(2);o.Cb(1),o.Hb("active",t===e.activeTab),o.vc("id","",t.link,"-tab"),o.tc("href","#"+t.link,o.Jc),o.Cb(1),o.Rc(t.name)}}function ot(t,n){if(1&t){const t=o.Yb();o.Xb(0,"div",16),o.Xb(1,"input",17),o.jc("keyup.enter",(function(){return o.Hc(t),o.nc(2).searchVideos()})),o.Wb(),o.Sb(2,"i",18),o.Wb()}}function rt(t,n){1&t&&o.Sb(0,"app-watchlist-tab")}function lt(t,n){if(1&t&&o.Sb(0,"app-videos-tab",3),2&t){const t=o.nc(2);o.tc("channelUser",t.channelUser)("authUser",t.authUser)}}function bt(t,n){if(1&t&&o.Sb(0,"app-playlists-tab",3),2&t){const t=o.nc(2);o.tc("channelUser",t.channelUser)("authUser",t.authUser)}}function ht(t,n){if(1&t&&o.Sb(0,"app-about-tab",19),2&t){const t=o.nc(2);o.tc("channelUser",t.channelUser)}}function gt(t,n){if(1&t){const t=o.Yb();o.Vb(0),o.Sb(1,"app-channel-profile",3),o.Xb(2,"div",4),o.Xb(3,"div",5),o.Xb(4,"ul",6),o.Oc(5,at,3,5,"li",7),o.Wb(),o.Xb(6,"form",8),o.Xb(7,"div",9),o.Xb(8,"button",10),o.jc("click",(function(){return o.Hc(t),o.nc().toggleFilters()})),o.Xb(9,"mat-icon"),o.Qc(10,"tune"),o.Wb(),o.Wb(),o.Wb(),o.Oc(11,ot,3,0,"div",11),o.Wb(),o.Wb(),o.Oc(12,rt,1,0,"app-watchlist-tab",1),o.Oc(13,lt,1,2,"app-videos-tab",12),o.Oc(14,bt,1,2,"app-playlists-tab",12),o.Oc(15,ht,1,1,"app-about-tab",13),o.Wb(),o.Ub()}if(2&t){const t=o.nc();o.Cb(1),o.tc("channelUser",t.channelUser)("authUser",t.authUser),o.Cb(4),o.tc("ngForOf",t.allTabs),o.Cb(1),o.tc("formGroup",t.searchVideosForm),o.Cb(2),o.Hb("filters-active",t.showFilters),o.Cb(3),o.tc("ngIf","About"!==t.activeTab.name),o.Cb(1),o.tc("ngIf","Watchlist"===t.activeTab.name),o.Cb(1),o.tc("ngIf","Videos"===t.activeTab.name),o.Cb(1),o.tc("ngIf","Playlists"===t.activeTab.name),o.Cb(1),o.tc("ngIf","About"===t.activeTab.name)}}function dt(t,n){1&t&&(o.Xb(0,"div",20),o.Xb(1,"p"),o.Qc(2,"Channel with such name is not found"),o.Wb(),o.Wb())}let pt=(()=>{class t{constructor(t,n,e,i,s,o,r,l,b,h,g,d){this.videoService=t,this.getAuthUser=n,this.router=e,this.usersService=i,this.base64ToFile=s,this.route=o,this.fb=r,this.subjectService=l,this.channelService=b,this.playlistsService=h,this.subject=g,this.dialog=d,this.owlOptions=c.e,this.watchlistVideos=[],this.activeTab=c.h[2],this.allTabs=c.h,this.apiUrl=c.b,this.playlists=[],this.editMode=!1,this.showFilters=!1,this.filters=null,this.authUser=this.getAuthUser.transform(),this.passedUsername=this.route.snapshot.queryParams.username,this.searchVideosForm=this.fb.group({search:["",a.w.required]})}ngOnInit(){localStorage.setItem("search",""),this.passedUsername&&this.usersService.getUserInfo({username:this.passedUsername}).subscribe(t=>{t&&(this.channelUser=t)})}toggleFilters(){this.showFilters=!this.showFilters,this.subject.setToggleFiltersData(this.showFilters)}changeActiveTab(t){this.activeTab=t,this.searchVideos(),this.showFilters=!1,this.subject.setToggleFiltersData(this.showFilters)}searchVideos(){const t=this.searchVideosForm.value;localStorage.setItem("search",t.search),this.showFilters=!1,this.subject.setToggleFiltersData(this.showFilters),"Watchlist"===this.activeTab.name?this.searchInVideosByAuthor(t.search):"Videos"===this.activeTab.name?this.searchInUserVideos(t.search):"Playlists"===this.activeTab.name&&this.searchInPlaylists(t.search)}searchInVideosByAuthor(t){this.watchListTab&&this.watchListTab.getSearchResults(t)}searchInUserVideos(t){this.videosTab&&this.videosTab.getSearchResults(t)}searchInPlaylists(t){this.playlistsTab&&this.playlistsTab.getSearchResults(t)}ngOnDestroy(){}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(r.a),o.Rb(V.a),o.Rb(s.d),o.Rb(E),o.Rb(L.a),o.Rb(s.a),o.Rb(a.e),o.Rb(l.a),o.Rb(H.a),o.Rb(P.a),o.Rb(l.a),o.Rb(O.b))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-show-channel"]],viewQuery:function(t,n){var e;1&t&&(o.Vc(f,!0),o.Vc(m,!0),o.Vc(j,!0)),2&t&&(o.Cc(e=o.kc())&&(n.watchListTab=e.first),o.Cc(e=o.kc())&&(n.videosTab=e.first),o.Cc(e=o.kc())&&(n.playlistsTab=e.first))},decls:4,vars:2,consts:[[1,"profile-list"],[4,"ngIf"],["class","channel-not-found",4,"ngIf"],[3,"channelUser","authUser"],[1,"watchlist","pWatchlist"],[1,"profile-list","user-profile-block"],["id","profileList","role","tablist",1,"nav","nav-tabs"],["class","nav-item",4,"ngFor","ngForOf"],["id","search-videos-form",3,"formGroup"],[1,"toggle-filters-btn"],["type","button",1,"filter-toggle-btn",3,"click"],["class","watchlist-search",4,"ngIf"],[3,"channelUser","authUser",4,"ngIf"],[3,"channelUser",4,"ngIf"],[1,"nav-item"],["data-toggle","tab","role","tab","aria-controls","pWatch","aria-selected","true",1,"nav-link",3,"id","href","click"],[1,"watchlist-search"],["placeholder","Search","formControlName","search",1,"watchlist-input",3,"keyup.enter"],[1,"fas","fa-search"],[3,"channelUser"],[1,"channel-not-found"]],template:function(t,n){1&t&&(o.Xb(0,"div",0),o.Sb(1,"app-user-tags"),o.Oc(2,gt,16,11,"ng-container",1),o.Oc(3,dt,3,0,"div",2),o.Wb()),2&t&&(o.Cb(2),o.tc("ngIf",n.channelUser),o.Cb(1),o.tc("ngIf",!n.channelUser))},directives:[D.a,i.m,K,i.l,a.y,a.p,a.i,w.a,a.c,a.o,a.h,f,m,j,ct],styles:[".profile-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%}.subscribed[_ngcontent-%COMP%]{background-color:#d6d6d6!important}#search-videos-form[_ngcontent-%COMP%]{display:flex}#search-videos-form[_ngcontent-%COMP%]   .toggle-filters-btn[_ngcontent-%COMP%]{display:flex;margin-right:20px;padding-top:4px}#search-videos-form[_ngcontent-%COMP%]   .toggle-filters-btn[_ngcontent-%COMP%]   .filter-toggle-btn[_ngcontent-%COMP%]{background-color:unset;height:23px}#search-videos-form[_ngcontent-%COMP%]   .filters-active[_ngcontent-%COMP%]{background-color:#18b587!important;color:#fff}"]}),t})();var ut=e("wd/R"),ft=e("7dP1");function Ct(t,n){if(1&t&&o.Sb(0,"img",11),2&t){const t=o.nc().$implicit,n=o.nc(2);o.tc("src",n.apiUrl+"uploads/avatars/"+t.avatar,o.Jc)}}function mt(t,n){1&t&&o.Sb(0,"img",11),2&t&&o.tc("src","assets/img/default-user.png",o.Jc)}function Ot(t,n){if(1&t&&(o.Xb(0,"li",2),o.Xb(1,"div",3),o.Oc(2,Ct,1,1,"img",4),o.Oc(3,mt,1,1,"img",4),o.Wb(),o.Xb(4,"div",5),o.Xb(5,"p",6),o.Qc(6),o.Wb(),o.Xb(7,"div",7),o.Xb(8,"span",8),o.Qc(9,"17k watching"),o.Wb(),o.Xb(10,"span",9),o.Qc(11,"."),o.Wb(),o.Xb(12,"span",10),o.Qc(13,"250 video"),o.Wb(),o.Wb(),o.Xb(14,"p"),o.Qc(15,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed sda,sasddswd"),o.Wb(),o.Wb(),o.Wb()),2&t){const t=n.$implicit;o.Cb(2),o.tc("ngIf",t.avatar),o.Cb(1),o.tc("ngIf",!t.avatar),o.Cb(3),o.Rc(t.name)}}function Pt(t,n){if(1&t&&(o.Xb(0,"ul"),o.Oc(1,Ot,16,3,"li",1),o.Wb()),2&t){const t=o.nc();o.Cb(1),o.tc("ngForOf",t.userChannels.subscriptions)}}const vt=[{path:"show",component:pt},{path:"subscriptions",component:(()=>{class t{constructor(t,n,e){this.channelsService=t,this.getAuthUser=n,this.auth=e,this.apiUrl=c.b,this.authUser=this.getAuthUser.transform()}ngOnInit(){this.channelsService.getSubscriptions({user_id:this.authUser.id}).subscribe(t=>{this.userChannels=t})}getUploadDateTime(t){return ut(t).format("MMM DD, YYYY")}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(H.a),o.Rb(V.a),o.Rb(ft.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-show-subscriptions"]],decls:1,vars:1,consts:[[4,"ngIf"],["class","channel-item",4,"ngFor","ngForOf"],[1,"channel-item"],[1,"thumbnail"],["class","avatar",3,"src",4,"ngIf"],[1,"info"],[1,"name"],[1,"shortened-details"],[1,"watchers-count"],[1,"dot"],[1,"videos-count"],[1,"avatar",3,"src"]],template:function(t,n){1&t&&o.Oc(0,Pt,2,1,"ul",0),2&t&&o.tc("ngIf",n.userChannels)},directives:[i.m,i.l],styles:[".channel-item[_ngcontent-%COMP%]{display:flex;width:936px;margin-bottom:32px}.channel-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:240px!important;height:240px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-top:4px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#545454;font-size:24px;font-family:Muli-Bold}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{margin-left:26px;margin-top:-3px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-family:Muli-Light}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .videos-count[_ngcontent-%COMP%], .channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%]{font-size:14px;color:#818181}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .videos-count[_ngcontent-%COMP%]{margin-left:26px}"]}),t})()}];let Mt=(()=>{class t{}return t.\u0275mod=o.Pb({type:t}),t.\u0275inj=o.Ob({factory:function(n){return new(n||t)},imports:[[s.f.forChild(vt)],s.f]}),t})();var _t=e("PCNd");let yt=(()=>{class t{}return t.\u0275mod=o.Pb({type:t}),t.\u0275inj=o.Ob({factory:function(n){return new(n||t)},imports:[[i.c,Mt,_t.a,q.b]]}),t})()}}]);