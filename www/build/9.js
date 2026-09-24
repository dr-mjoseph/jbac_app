webpackJsonp([9],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsappPageModule", function() { return WhatsappPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__whatsapp__ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WhatsappPageModule = /** @class */ (function () {
    function WhatsappPageModule() {
    }
    WhatsappPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__whatsapp__["a" /* WhatsappPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__whatsapp__["a" /* WhatsappPage */]),
            ],
        })
    ], WhatsappPageModule);
    return WhatsappPageModule;
}());

//# sourceMappingURL=whatsapp.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatsappPage; });
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
 * Generated class for the WhatsappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhatsappPage = /** @class */ (function () {
    function WhatsappPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WhatsappPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    WhatsappPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WhatsappPage');
    };
    WhatsappPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-whatsapp',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\whatsapp\whatsapp.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>వాట్సాప్</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <img style="border-radius: 10px;margin-bottom:5%" src="../../assets/icon/png/WhatsAppchristiangrouplinkqrcode.jpg">\n\n\n\n  <div\n\n    style="background-color: aliceblue;padding: 3%;font-size: 20px;font-weight: 1000;text-align: center;border-radius: 10px;margin-bottom:5%">\n\n    ఆంధ్ర క్రైస్తవ అన్ని రాజకీయ పార్టీల బిషప్స్, పాస్టర్లు, క్రైస్తవ నాయకులు, విస్వాసులు  అందరు డిస్కస్\n\n    చేసుకోటానికి <br> <a href="https://chat.whatsapp.com/G7iDcXTqIRO7tB4xWWme7F"> ఈ లింక్ క్లిక్ చేసి వాట్సాప్ గ్రూప్\n\n      లో జాయిన్ అవ్వండి.</a> <br> లేదా కోడ్ స్కాన్ చేయటం ద్వారా గ్రూప్లో జాయిన్ అవ్వచ్చు.\n\n  </div>\n\n  <div\n\n    style="background-color: aliceblue;padding: 3%;font-size: 20px;font-weight: 1000;text-align: center;border-radius: 10px;">\n\n    జోసెఫ్ గారి అభిప్రాయం ప్రకారం ఏ పార్టీకి వోట్ వేస్తే బాగుంటుందో తెలిసికొనుట కొరకు .\n\n    <br><br>\n\n    వార్తా పత్రికలలో జోసెఫ్ గారి అభిప్రాయాలు కొరకు .\n\n    <br><br>\n\n    జోసెఫ్ గారు కలిసిన క్రైస్తవ నాయకుల ఫోటో గేలరీ కొరకు .\n\n    <br><br>\n\n    జోసెఫ్ గారి అభిప్రాయం ప్రకారం ఏ పార్టీకి వోట్ వేస్తే బాగుంటుందో తెలిసికొనుట కొరకు .\n\n    <br><br>\n\n    క్రైస్తవులకు అన్యాయం చేసిన YS జగన్ మోహన్ రెడ్డి గారు కొరకు .\n\n    <h6 class="mate" style="text-align: center;"> - - ప్రొఫెసర్ డాక్టర్ జోసెఫ్ ప్రకాష్ మోసిగంటి,\n\n      <br> చైర్మన్ ,<br>\n\n      JBAC మరియు డైరెక్టర్ సెయింట్ మేరీస్ గ్రూప్ ఆఫ్ ఇంజినీరింగ్ కాలేజెస్,<br> గుంటూరు .\n\n    </h6>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\whatsapp\whatsapp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], WhatsappPage);
    return WhatsappPage;
}());

//# sourceMappingURL=whatsapp.js.map

/***/ })

});
//# sourceMappingURL=9.js.map