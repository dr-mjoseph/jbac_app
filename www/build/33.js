webpackJsonp([33],{

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
            ],
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>మమ్మల్ని సంప్రదించండి</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss" padding>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 style="background-color: white;border-radius:5px;margin-bottom:10px;text-align: center;">\n\n      <div class="contact-card">\n\n        <ion-icon name="flaticon-position"></ion-icon>\n\n\n\n        <ion-title text-center><b><u>నా చిరునామా</u></b></ion-title>\n\n\n\n        <h4> <b>ప్రొఫెసర్ డాక్టర్ జోసఫ్ పి. మోసిగంటి, B.Tech, M.Tech, Ph.D\n\n          ఫౌండర్ & చైర్మన్, జీసస్ బిలీవర్స్ అసోసియేషన్ కౌన్సిల్ (JBAC). <br>\n\n          డైరెక్టర్, సెయింట్ మేరీస్ గ్రూప్ ఆఫ్ ఇంజినీరింగ్ కాలేజెస్ చేబ్రోలు, గుంటూరు </b></h4>\n\n        <h4> Phone : 7075482182, email: mjosephp7@gmail.com</h4>\n\n\n\n       </div>\n\n    </ion-col>\n\n\n\n    <ion-col col-12 style="background-color: white; border-radius: 5px; margin-bottom: 10px;">\n\n      <ion-title text-center>\n\n        <b><u>సోషల్ మీడియా అకౌంట్స్</u></b>\n\n      </ion-title>\n\n      <ion-row>\n\n        <ion-col col-4 class="social-label">\n\n          <i class="fab fa-twitter twitter-icon"></i> \n\n        </ion-col>\n\n        <ion-col col-8 class="social-value"><br><b><a target="_blank" href="https://www.youtube.com/c/DrJOSEPHPRAKASHMOSIGANTI7">@Mjosephp7</a></b></ion-col>\n\n    \n\n        <ion-col col-4 class="social-label">\n\n          <i class="fab fa-instagram instagram-icon"></i> \n\n        </ion-col>\n\n        <ion-col col-8 class="social-value"><br><b>Josephpmosiganti</b></ion-col>\n\n    \n\n        <ion-col col-4 class="social-label">\n\n          <i class="fab fa-facebook facebook-icon"></i> \n\n        </ion-col>\n\n        <ion-col col-8 class="social-value"><br><b>Joseph P. Mosiganti</b></ion-col>\n\n    \n\n        <ion-col col-4 class="social-label">\n\n          <i class="fab fa-youtube youtube-icon"></i>\n\n        </ion-col>\n\n        <ion-col col-8 class="social-value"><br><b> <a target="_blank" href="https://www.youtube.com/c/DrJOSEPHPRAKASHMOSIGANTI7">Dr. JOSEPH PRAKASH MOSIGANTI7</a></b></ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n    \n\n    <style>\n\n      .social-label {\n\n        font-weight: bold;\n\n        color: #333;\n\n        display: flex;\n\n        align-items: center;\n\n      }\n\n      .social-label i {\n\n        margin-right: 8px;\n\n        font-size: 1.2em;\n\n      }\n\n      .twitter-icon {\n\n        color: #1DA1F2; /* Twitter color */\n\n      }\n\n      .instagram-icon {\n\n        color: #C13584; /* Instagram color */\n\n      }\n\n      .facebook-icon {\n\n        color: #1877F2; /* Facebook color */\n\n      }\n\n      .youtube-icon {\n\n        color: #FF0000; /* YouTube color */\n\n      }\n\n      .social-value {\n\n        color: #555;\n\n      }\n\n    </style>\n\n    \n\n    \n\n\n\n    <ion-col col-12 style="background-color: white;border-radius:5px;margin-bottom:10px">\n\n      <div class="contact-card">\n\n        <ion-title text-center><b><u>సంప్రదించవలసిన నెంబర్</u></b></ion-title>\n\n        <h4>Email : <a href="mailto:jbac7ap@gmail.Com"> <b> jbac7ap@gmail.com </b></a></h4>\n\n        <h4>ఫోన్ నెంబర్ : <a href="tel:+(91) – 7075482182"> <b> 7075482182 </b></a></h4>\n\n        <h4>వెబ్ సైట్ : <a href="https://jbac.in/"> <b> www.jbac.in </b></a></h4>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=33.js.map