webpackJsonp([29],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPageModule", function() { return FormsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormsPageModule = /** @class */ (function () {
    function FormsPageModule() {
    }
    FormsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forms__["a" /* FormsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forms__["a" /* FormsPage */]),
            ],
        })
    ], FormsPageModule);
    return FormsPageModule;
}());

//# sourceMappingURL=forms.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsPage; });
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
var FormsPage = /** @class */ (function () {
    function FormsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    FormsPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    FormsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormsPage');
    };
    FormsPage.prototype.gotopage = function (id) {
        if (id == 1) {
            this.navCtrl.push('BelieverPage');
        }
        else if (id == 2) {
            this.navCtrl.push('StudentPage');
        }
        else if (id == 3) {
            this.navCtrl.push('MinistryPage');
        }
        else if (id == 4) {
            this.navCtrl.push('PastorPage');
        }
        else if (id == 5) {
            this.navCtrl.push('ChurchPage');
        }
        else if (id == 6) {
            this.navCtrl.push('OrganisationPage');
        }
        else if (id == 7) {
            this.navCtrl.push('AssociationPage');
        }
        else if (id == 27) {
            this.navCtrl.push('PrivacyPage');
        }
        else {
            var confirm_1 = this.alertCtrl.create({
                mode: 'ios',
                title: 'Coming Soon..!',
                buttons: ['Ok']
            });
            confirm_1.present();
            setTimeout(function () { confirm_1.dismiss(); }, 2000);
        }
    };
    FormsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forms',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\forms\forms.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>రిజిస్ట్రేషన్</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n  <br>\n\n  <ion-card  class="hesd" (click)="gotopage(1)">\n\n    <ion-card-header >\n\n      బిలీవర్ రిజిస్టర్\n\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card class="hesd" (click)="gotopage(2)">\n\n    <ion-card-header>\n\n      విద్యార్థుల రిజిస్టర్\n\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card class="hesd" (click)="gotopage(3)">\n\n    <ion-card-header>\n\n      మినిస్ట్రీ రిజిస్టర్\n\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card class="hesd" (click)="gotopage(4)">\n\n    <ion-card-header>\n\n      పాస్టర్ రిజిస్టర్\n\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card class="hesd" (click)="gotopage(5)">\n\n    <ion-card-header >\n\n      చర్చి రిజిస్టర్\n\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card class="hesd" (click)="gotopage(6)">\n\n    <ion-card-header >\n\n      సంస్థ రిజిస్టర్\n\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card class="hesd" (click)="gotopage(7)">\n\n    <ion-card-header>\n\n      పాస్టర్ అసోసియేషన్ రిజిస్టర్\n\n    </ion-card-header>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\forms\forms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], FormsPage);
    return FormsPage;
}());

//# sourceMappingURL=forms.js.map

/***/ })

});
//# sourceMappingURL=29.js.map