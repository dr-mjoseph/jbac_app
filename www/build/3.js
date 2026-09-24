webpackJsonp([3],{

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallerySubPageModule", function() { return VideoGallerySubPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_gallery_sub__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_tubet_tubet__ = __webpack_require__(504);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VideoGallerySubPageModule = /** @class */ (function () {
    function VideoGallerySubPageModule() {
    }
    VideoGallerySubPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__video_gallery_sub__["a" /* VideoGallerySubPage */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_tubet_tubet__["a" /* TubetPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__video_gallery_sub__["a" /* VideoGallerySubPage */]),
            ],
        })
    ], VideoGallerySubPageModule);
    return VideoGallerySubPageModule;
}());

//# sourceMappingURL=video-gallery-sub.module.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoGallerySubPage; });
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
var VideoGallerySubPage = /** @class */ (function () {
    function VideoGallerySubPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.id = this.navParams.get('id');
    }
    VideoGallerySubPage.prototype.ionViewDidLoad = function () {
        this.getvideo();
        this.uniqueRecords = new Map();
    };
    VideoGallerySubPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    VideoGallerySubPage.prototype.getvideo = function () {
        var _this = this;
        this.service.getvideourl().subscribe(function (res) {
            var x = [];
            x.push(res);
            _this.videos = x[0].data.filter(function (item) { return item.category_id === _this.id; });
            _this.catreru = x[0].data[0].category_nm;
        });
    };
    VideoGallerySubPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video-gallery-sub',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\video-gallery-sub\video-gallery-sub.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b style="text-transform: capitalize;"> {{catreru}} Video-Gallery\n\n      </b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n\n\n\n\n  <div *ngFor="let o of videos">\n\n    <br>\n\n    <div style="text-align: center;">\n\n      <iframe [src]="o.banner_url | tubet " allow="autoplay; encrypted-media" style="height:250px;width:333px"></iframe>\n\n    </div>\n\n  </div>\n\n\n\n  <div>\n\n    <br>\n\n    <p style="color: white;text-transform: capitalize;">Church\'s <span style="text-align: left">More</span></p>\n\n    <div style="text-align: center;">\n\n      <iframe src=" https://www.youtube.com/embed/Kz5pscwuTF8?si=GCFQfS8y6jiyzRVD" allow="autoplay; encrypted-media"\n\n        allowfullscreen style="height:250px;width:333px"></iframe>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\video-gallery-sub\video-gallery-sub.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], VideoGallerySubPage);
    return VideoGallerySubPage;
}());

//# sourceMappingURL=video-gallery-sub.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TubetPipe; });
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


/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TubetPipe = /** @class */ (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function TubetPipe(dom) {
        this.dom = dom;
    }
    TubetPipe.prototype.transform = function (url) {
        return this.dom.bypassSecurityTrustResourceUrl(url);
    };
    TubetPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'tubet',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], TubetPipe);
    return TubetPipe;
}());

//# sourceMappingURL=tubet.js.map

/***/ })

});
//# sourceMappingURL=3.js.map