webpackJsonp([4],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsViewPageModule", function() { return NewsViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_view__ = __webpack_require__(492);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsViewPageModule = /** @class */ (function () {
    function NewsViewPageModule() {
    }
    NewsViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news_view__["a" /* NewsViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news_view__["a" /* NewsViewPage */]),
            ],
        })
    ], NewsViewPageModule);
    return NewsViewPageModule;
}());

//# sourceMappingURL=news-view.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalpagePage; });
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
 * Generated class for the ModalpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalpagePage = /** @class */ (function () {
    function ModalpagePage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imageUrl = this.navParams.get('imageUrl');
    }
    ModalpagePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalpage',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\modalpage\modalpage.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons end>\n\n      <button ion-button color="warning" (click)="dismiss()">Close Image</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <img [src]="imageUrl" (click)="dismiss()" class="modal-image" />\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\modalpage\modalpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], ModalpagePage);
    return ModalpagePage;
}());

//# sourceMappingURL=modalpage.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modalpage_modalpage__ = __webpack_require__(458);
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

/**
 * Generated class for the NewsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsViewPage = /** @class */ (function () {
    function NewsViewPage(navCtrl, navParams, service, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.modalCtrl = modalCtrl;
    }
    NewsViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsViewPage');
        this.getnews();
    };
    NewsViewPage.prototype.getnews = function () {
        var _this = this;
        this.service.getupdatenews().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.allsearchnews = res.data;
                _this.searchnews = res.data;
                console.log(_this.searchnews);
            }
        });
    };
    NewsViewPage.prototype.getfilter = function (event) {
        console.log(event);
        if (event == 0) {
            this.getnews();
        }
        else {
            this.searchnews = this.allsearchnews.filter(function (item) { return item.news === event; });
        }
        if (this.searchnews.length == 0) {
            alert('ఈ క్యాటగిరీకి సంబంధించిన డేటా లేదు');
        }
        else {
            alert('సర్వర్ డౌన్ వుంది');
        }
    };
    NewsViewPage.prototype.toggleDescription = function () {
        this.showFullDescription = !this.showFullDescription;
    };
    NewsViewPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    NewsViewPage.prototype.openImage = function (imageUrl) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modalpage_modalpage__["a" /* ModalpagePage */], { imageUrl: imageUrl });
        modal.present();
    };
    NewsViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news-view',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\news-view\news-view.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;font-size: 20px;font-family:ramabhadra;"><b>JBAC: వార్తలు &\n\n        ప్రకటనలు</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n\n\n  <ion-item>\n\n    <ion-label stacked>సెలెక్ట్ న్యూస్<span style="color:red; font-family:ramabhadra;">*</span></ion-label>\n\n    <ion-select (ionChange)="getfilter($event)">\n\n      <ion-option value="" selected disabled>కేటగిరీ ఎంచుకోండి</ion-option>\n\n      <ion-option value="0">అన్ని వార్తలు</ion-option>\n\n      <ion-option value="క్రైస్తవుల మీద దాడులు">క్రైస్తవుల మీద దాడులు సంబంధించిన న్యూస్</ion-option>\n\n      <ion-option value="గౌరవ వేతనం, ప్రభుత్వ పథకాలు సంబంధించిన న్యూస్">గౌరవ వేతనం, ప్రభుత్వ పథకాలు సంబంధించిన న్యూస్</ion-option>\n\n      <ion-option value="క్రైస్తవులకు సంబంధించిన న్యూస్">క్రైస్తవులకు సంబంధించిన న్యూస్</ion-option>\n\n      <ion-option value="జనరల్ న్యూస్">జనరల్ న్యూస్</ion-option>   \n\n      <ion-option value="దళిత్ క్రిస్టియన్స్ షెడ్యూల్ కాస్ట్ స్టేటస్ న్యూస్">దళిత్ క్రిస్టియన్స్ షెడ్యూల్ కాస్ట్ స్టేటస్ న్యూస్</ion-option>      \n\n      <ion-option value="చదువుకి సంబంధించి">చదువుకి సంబంధించి</ion-option>\n\n      <ion-option value="ట్రైనింగ్ కి సంబంధించి">ట్రైనింగ్ కి సంబంధించి</ion-option>\n\n      <ion-option value="ఉద్యోగాలకు సంబంధించి">ఉద్యోగాలకు సంబంధించి</ion-option>\n\n      <ion-option value="ఆరోగ్యం కి సంబంధించి">ఆరోగ్యం కి సంబంధించి</ion-option>\n\n      <ion-option value="సమాజం లోని సమస్యలు కి సంబంధించి న్యూస్">సమాజం లోని సమస్యలు కి సంబంధించి న్యూస్</ion-option>\n\n      <ion-option value="డా|| జోసెఫ్ గారి వార్తలు">డా|| జోసెఫ్ గారి వార్తలు</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-row class="card-row">\n\n\n\n    <ion-col col-12 *ngFor="let item of searchnews" class="card-col">\n\n      <ion-card class="custom-card" style="border-radius: 10px;">\n\n        <ion-card-header>\n\n          <div class="card-image">\n\n            <img style="border-radius: 8px;" *ngIf="item.image" [src]="item.image" alt="Image" class="card-img"\n\n              (click)="openImage(item.image)">\n\n          </div>\n\n        </ion-card-header>\n\n        <ion-card-content style="text-transform: capitalize;font-size: 20px;font-family:ramabhadra;">\n\n          <p style="font-size: 20px;font-family:ramabhadra;">వివరణ: <strong>\n\n              {{ showFullDescription ? item.description : (item.description | slice:0:100) }}\n\n              {{ item.description.length > 100 && !showFullDescription ? \'...\' : \'\' }}\n\n            </strong></p>\n\n          <p *ngIf="item.description.length > 100">\n\n            <button (click)="toggleDescription()">\n\n              {{ showFullDescription ? \'తక్కువ సమాచారం\' : \'మరింత సమాచారం\' }}\n\n            </button>\n\n          </p>\n\n\n\n          <p style="font-size: 20px;font-family:ramabhadra;">విభాగం: <strong>{{item.news}}</strong></p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\news-view\news-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], NewsViewPage);
    return NewsViewPage;
}());

//# sourceMappingURL=news-view.js.map

/***/ })

});
//# sourceMappingURL=4.js.map