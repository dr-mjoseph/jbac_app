webpackJsonp([36],{

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChurchgoPageModule", function() { return ChurchgoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__churchgo__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChurchgoPageModule = /** @class */ (function () {
    function ChurchgoPageModule() {
    }
    ChurchgoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__churchgo__["a" /* ChurchgoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__churchgo__["a" /* ChurchgoPage */]),
            ],
        })
    ], ChurchgoPageModule);
    return ChurchgoPageModule;
}());

//# sourceMappingURL=churchgo.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChurchgoPage; });
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
/**
 * Generated class for the ChurchgoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChurchgoPage = /** @class */ (function () {
    function ChurchgoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChurchgoPage.prototype.openYoutube = function () {
        window.open('https://www.youtube.com/channel/UCnk2hURhesjDM7SuOxgmt5A/about', '_system', 'location=yes');
    };
    ChurchgoPage.prototype.gotoAbout = function () {
        this.navCtrl.push('AboutPage');
    };
    ChurchgoPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    ChurchgoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-churchgo',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\churchgo\churchgo.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title style="text-align: center;font-family: Ramabhadra,sans-serif!important;"><b>చర్చి పర్మిషన్</b></ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n\n\n  <div class="row" style="background-color: #857474;padding: 2%;border-radius: 8px;">\n\n    <h2\n\n      style="text-align: center;color: #dbd8d8;font-weight: 900;font-family: cursive;font-family: Ramabhadra,sans-serif!important;">\n\n      <u>ఆంధ్రరాష్ట్ర చర్చి పర్మిషన్ గవర్నమెంట్ ఆర్డర్స్</u>\n\n    </h2>\n\n    <hr>\n\n    <div class="col-lg-12">\n\n      <img src="assets/images/rc1.jpg" style="width: 100%; margin-bottom: 10px; border-radius: 4px;">\n\n      <img src="assets/images/rc2.jpg" style="width: 100%; border-radius: 4px;">\n\n    </div>\n\n  </div>\n\n  <div style="background-color: #e4e3e3;border-radius: 8px; margin-top: 15px;">\n\n    <p style="text-align: justify;text-align: center; font-size:20px;font-weight: 900;padding: 1%;">\n\n      నేను పెట్టే వీడియోలు మీరు చూచు నట్లు, వీడియో ఛానల్ సబ్ స్క్రైబ్ చేసుకోండి<br>\n\n    </p>\n\n\n\n    <div style="text-align: center; margin: 20px 0;">\n\n      <button ion-button color="danger" (click)="openYoutube()" style="border-radius: 5px; font-weight: bold;">\n\n        <ion-icon name="logo-youtube" style="margin-right: 8px;"></ion-icon>\n\n        YouTube ఛానల్ సందర్శించండి\n\n      </button>\n\n    </div>\n\n\n\n    <p style="text-align: justify;text-align: center; font-size:20px;font-weight: 900;padding: 1%;">\n\n      నా గురుంచి తెలుసుకొనుటకు\n\n      <a href="javascript:void(0)" (click)="gotoAbout()" style="color: blue; text-decoration: underline;">ఇక్కడ క్లిక్ చేయండి</a>\n\n      <br>\n\n      ప్రొఫెసర్ డాక్టర్.జోసఫ్ పి మోసిగంటి. <br> B.Tech, M.Tech, Ph.D<br>\n\n      చైర్మన్ , ఆంధ్రప్రదేశ్ జీసస్ బిలీవర్స్ అసోసియేషన్ కౌన్సిల్ (JBAC)<br>\n\n      డైరెక్టర్ , సెయింట్ మేరీస్ గ్రూప్ ఆఫ్ ఇంజినీరింగ్ కాలేజెస్, చేబ్రోలు, గుంటూరు . <br>\n\n      Number : (+91)-7075482182 <br>\n\n      (సేవ్ చేసుకొని మెసేజ్-SMS మాత్రమే చేయండి) .\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\churchgo\churchgo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ChurchgoPage);
    return ChurchgoPage;
}());

//# sourceMappingURL=churchgo.js.map

/***/ })

});
//# sourceMappingURL=36.js.map