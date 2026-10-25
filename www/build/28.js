webpackJsonp([28],{

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GalleryPageModule = /** @class */ (function () {
    function GalleryPageModule() {
    }
    GalleryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */]),
            ],
        })
    ], GalleryPageModule);
    return GalleryPageModule;
}());

//# sourceMappingURL=gallery.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
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
var GalleryPage = /** @class */ (function () {
    function GalleryPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
    }
    GalleryPage.prototype.ionViewDidLoad = function () {
        this.getimages();
    };
    GalleryPage.prototype.getimages = function () {
        var _this = this;
        this.service.getimages().subscribe(function (res) {
            if (res && res.data && Array.isArray(res.data)) {
                _this.imagesget = res.data;
            }
            else {
                _this.imagesget = [];
            }
        }, function (error) {
            console.log('Error fetching gallery images', error);
            _this.imagesget = [];
        });
    };
    GalleryPage.prototype.onImgError = function (event, item) {
        var fallbackId = (item && item.id) ? (Math.abs(item.id) % 12) : 1;
        event.target.src = 'assets/images/meet-fig' + fallbackId + '.png';
    };
    GalleryPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    GalleryPage.prototype.gotosub = function (id) {
        console.log(id);
        this.navCtrl.push('SubGalleryPage', { id: id }); // Pass the id as a parameter
    };
    GalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gallery',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\gallery\gallery.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>ఫోటో గేలరీ</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n\n\n  <ion-row>\n\n\n\n    <ion-col col-12 *ngFor="let gt of imagesget" style="text-align: center;">\n\n      <img style="height: 200px; max-width: 100%; object-fit: cover; border-radius: 8px;" [src]="gt.image" (error)="onImgError($event, gt)" (click)="gotosub(gt.id)">\n\n      <h3 style="color:white;">{{gt.categoryname}}</h3>\n\n    </ion-col>\n\n\n\n    <ion-col col-12 *ngIf="imagesget && imagesget.length === 0" style="text-align: center; padding: 40px 16px;">\n\n      <ion-icon name="images" style="font-size: 48px; color: #ffeb3b;"></ion-icon>\n\n      <p style="color: white; font-size: 18px;">ప్రస్తుతానికి ఫోటోలు ఏవీ లేవు</p>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\gallery\gallery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], GalleryPage);
    return GalleryPage;
}());

//# sourceMappingURL=gallery.js.map

/***/ })

});
//# sourceMappingURL=28.js.map