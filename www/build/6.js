webpackJsonp([6],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubGalleryPageModule", function() { return SubGalleryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_gallery__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubGalleryPageModule = /** @class */ (function () {
    function SubGalleryPageModule() {
    }
    SubGalleryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sub_gallery__["a" /* SubGalleryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sub_gallery__["a" /* SubGalleryPage */]),
            ],
        })
    ], SubGalleryPageModule);
    return SubGalleryPageModule;
}());

//# sourceMappingURL=sub-gallery.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagemodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
 * Generated class for the ImagemodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImagemodalPage = /** @class */ (function () {
    function ImagemodalPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imageSrc = this.navParams.get('imageSrc');
    }
    ImagemodalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ImagemodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImagemodalPage');
    };
    ImagemodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-imagemodal',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\imagemodal\imagemodal.html"*/'\n\n<ion-content style="margin-top: 40%;">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Image Viewer</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="dismiss()">\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <div class="image-container">\n\n    <img [src]="imageSrc">\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\imagemodal\imagemodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], ImagemodalPage);
    return ImagemodalPage;
}());

//# sourceMappingURL=imagemodal.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubGalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imagemodal_imagemodal__ = __webpack_require__(462);
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


var SubGalleryPage = /** @class */ (function () {
    function SubGalleryPage(navCtrl, navParams, service, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.gallery = [];
        this.id = this.navParams.get('id');
    }
    SubGalleryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubGalleryPage');
        this.getimages();
    };
    SubGalleryPage.prototype.getimages = function () {
        var _this = this;
        this.service.getcatewebsitegallery().subscribe(function (res) {
            _this.gallery = res.data.filter(function (data) { return data.category_id == _this.id; });
        });
    };
    SubGalleryPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    SubGalleryPage.prototype.openImage = function (imageUrl) {
        var imageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__imagemodal_imagemodal__["a" /* ImagemodalPage */], { imageSrc: imageUrl });
        imageModal.present();
    };
    SubGalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-gallery',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\sub-gallery\sub-gallery.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>Sub-Gallery</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n\n\n  <ion-row>\n\n    <ion-col col-12 class="fghdh" *ngFor="let gt of gallery">\n\n      <img style="width:100%" src="{{gt.image}}" (click)="openImage(gt.image)" >\n\n      <h5>{{gt.image_name}}</h5>\n\n    </ion-col>\n\n    <br>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\sub-gallery\sub-gallery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], SubGalleryPage);
    return SubGalleryPage;
}());

//# sourceMappingURL=sub-gallery.js.map

/***/ })

});
//# sourceMappingURL=6.js.map