webpackJsonp([2],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGalleryPageModule", function() { return VideoGalleryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_gallery__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_youtube_youtube__ = __webpack_require__(508);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VideoGalleryPageModule = /** @class */ (function () {
    function VideoGalleryPageModule() {
    }
    VideoGalleryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__video_gallery__["a" /* VideoGalleryPage */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_youtube_youtube__["a" /* YoutubePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__video_gallery__["a" /* VideoGalleryPage */]),
            ],
        })
    ], VideoGalleryPageModule);
    return VideoGalleryPageModule;
}());

//# sourceMappingURL=video-gallery.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoGalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { HomePage } from '../home/home';
var VideoGalleryPage = /** @class */ (function () {
    function VideoGalleryPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
    }
    VideoGalleryPage.prototype.ionViewDidLoad = function () {
        this.getvideo();
        this.uniqueRecords = new Map();
    };
    VideoGalleryPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    VideoGalleryPage.prototype.getvideo = function () {
        var _this = this;
        this.service.getvideourl().subscribe(function (res) {
            var x = [];
            x.push(res);
            _this.videos = x[0].data;
            _this.videos.forEach(function (record) {
                if (!_this.uniqueRecords.has(record.category_id)) {
                    _this.uniqueRecords.set(record.category_id, record);
                }
                _this.filteredData = Array.from(_this.uniqueRecords.values());
                console.log(_this.filteredData);
            });
        });
    };
    VideoGalleryPage.prototype.opensub = function (id) {
        this.navCtrl.push('VideoGallerySubPage', { id: id });
    };
    VideoGalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video-gallery',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\video-gallery\video-gallery.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>Video-Gallery</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n\n\n  <div *ngFor="let o of filteredData">\n\n    <br>\n\n    <p style="color: white; display: flex; justify-content: space-between; text-transform: capitalize;">\n\n      <span>{{o.category_nm}}</span>\n\n      <span (click)="opensub(o.category_id)">More</span>\n\n    </p>\n\n\n\n    <div style="text-align: center;">\n\n      <iframe [src]="o.banner_url | youtube" allow="autoplay; encrypted-media"\n\n        style="height:250px;width:333px"></iframe>\n\n    </div>\n\n  </div>\n\n\n\n  <!-- <div>\n\n    <br>\n\n    <p style="color: white;text-transform: capitalize;">Churchs <span style="text-align: left">More</span></p>\n\n    <div style="text-align: center;">\n\n      <iframe src=" https://www.youtube.com/embed/Kz5pscwuTF8?si=GCFQfS8y6jiyzRVD" allow="autoplay; encrypted-media"\n\n        allowfullscreen style="height:250px;width:333px"></iframe>\n\n    </div>\n\n  </div> -->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\video-gallery\video-gallery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], VideoGalleryPage);
    return VideoGalleryPage;
}());

//# sourceMappingURL=video-gallery.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubePipe = /** @class */ (function () {
    function YoutubePipe(dom) {
        this.dom = dom;
    }
    YoutubePipe.prototype.transform = function (url) {
        return this.dom.bypassSecurityTrustResourceUrl(url);
    };
    YoutubePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'youtube',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], YoutubePipe);
    return YoutubePipe;
}());

//# sourceMappingURL=youtube.js.map

/***/ })

});
//# sourceMappingURL=2.js.map