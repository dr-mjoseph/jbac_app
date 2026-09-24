webpackJsonp([47],{

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
            ],
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
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


// import { HomePage } from '../home/home';
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    AccountPage.prototype.gotopage = function (id) {
        if (id == 1) {
            this.navCtrl.push('AddchurchtimingsPage');
        }
        else if (id == 2) {
            this.navCtrl.push('AddinstitutePage');
        }
        else if (id == 3) {
            this.navCtrl.push('AddmeetingsPage');
        }
        else if (id == 4) {
            this.navCtrl.push('AddbussinessPage');
        }
        else if (id == 5) {
            this.navCtrl.push('AddmarriagePage');
        }
        else if (id == 6) {
            this.navCtrl.push('AddjobsPage');
        }
        else if (id == 7) {
            this.navCtrl.push('AddadsPage');
        }
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\account\account.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>మై అకౌంట్</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content  class="pagecss">\n\n  <ion-card class="hesd"  (click)="gotopage(1)">\n\n    <ion-card-header >\n\n      చర్చి సమయాలను జోడించండి\n\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card class="hesd"  (click)="gotopage(2)">\n\n    <ion-card-header >\n\n      ఇన్‌స్టిట్యూట్‌లను జోడించండి మినిస్ట్రీ సంబంధించిన\n\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card class="hesd"   (click)="gotopage(3)">\n\n    <ion-card-header >\n\n      సమావేశాలు నమోదు\n\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card class="hesd"  (click)="gotopage(4)">\n\n    <ion-card-header >\n\n      మీ వ్యాపార సమాచారాన్ని సమర్పించండి\n\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card class="hesd"  (click)="gotopage(5)">\n\n    <ion-card-header >\n\n      వివాహ బంధం కోసం నమోదు చేసుకోండి\n\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card class="hesd"  (click)="gotopage(6)">\n\n    <ion-card-header >\n\n      ఉపాధి అవసరాలను సమర్పించండి\n\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card  class="hesd" (click)="gotopage(7)">\n\n    <ion-card-header >\n\n      ప్రకటనల సమాచారాన్ని సమర్పించండి\n\n    </ion-card-header>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=47.js.map