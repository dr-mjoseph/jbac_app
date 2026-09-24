webpackJsonp([8],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WingPageModule", function() { return WingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wing__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WingPageModule = /** @class */ (function () {
    function WingPageModule() {
    }
    WingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wing__["a" /* WingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wing__["a" /* WingPage */]),
            ],
        })
    ], WingPageModule);
    return WingPageModule;
}());

//# sourceMappingURL=wing.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WingPage; });
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
 * Generated class for the WingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WingPage = /** @class */ (function () {
    function WingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WingPage');
    };
    WingPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    WingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wing',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\wing\wing.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>JBAC వింగ్స్ సమాచారం</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n\n\n  <ion-card style="background-color: #ffffff;padding: 3%;border-radius: 8px;">\n\n    <h5 style="text-align: justify;font-weight: 1000;font-family: Ramabhadra,sans-serif!important;">\n\n      విశ్వాసులకు మరియు పాస్టర్లకు వున్నా అవకాశాలు గురుంచి జూమ్ మరియు సాధారణ ఫోన్ ద్వారా మీటింగ్ జాయిన్\n\n      అవుటకొరకు ఫ్రీ రిజిస్ట్రేషన్, టైం స్లాట్ బుకింగ్ గురుంచి క్లిక్ చేయండి . </h5>\n\n    <hr>\n\n    <h5 style="text-align: justify;font-weight: 1000;font-family: Ramabhadra,sans-serif!important;">\n\n      ఈ క్రింది విభాగాలలో పనిచేసేవారు జాయిన్ అవ్వుటకు మరియు విభాగాలకు లీడర్ గ ఉండుటకు రిజిస్ట్రేషన్ . </h5>\n\n  </ion-card>\n\n\n\n  <ion-card style="background-color: #ffffff;padding: 3%;border-radius: 8px;">\n\n    <ul style="font-weight: 800;">\n\n      <li> Drivers / డ్రైవర్స్ </li>\n\n      <li> Social Media </li>\n\n      <li> Paper Media </li>\n\n      <li> Electronic Media </li>\n\n      <li> Software / IT Wing </li>\n\n      <li> Political Wing </li>\n\n      <li> Business Wing </li>\n\n      <li> Retired Wing </li>\n\n      <li> Social Service </li>\n\n      <li> Singers &amp; writers Musicians. </li>\n\n      <li> Christian News Paper Wing. </li>\n\n    </ul>\n\n  </ion-card>\n\n\n\n  <ion-card style="background-color: #ffffff;padding: 3%;border-radius: 8px;">\n\n    <ul style="font-weight: 800;">\n\n      <li> YouTube wing.</li>\n\n      <li> Lawyers / Advocates </li>\n\n      <li> Teachers </li>\n\n      <li> Placement Wing </li>\n\n      <li> Financiers Wing </li>\n\n      <li> Engineers </li>\n\n      <li> Doctors </li>\n\n      <li> Police </li>\n\n      <li> Other </li>\n\n    </ul>\n\n  </ion-card>\n\n\n\n  <ion-card style="background-color: #ffffff;padding: 3%;border-radius: 8px;">\n\n    <h5 style="text-align: justify;font-weight: 1000;font-family: Ramabhadra,sans-serif!important;">\n\n      ఆంధ్ర ప్రదేశ్ లోని దాదాపు అన్ని మెయిన్‌లైన్ చర్చిలు, పెద్ద సమూహం కలిగిన చర్చిలు, ఇండిపెండెంట్ చర్చి\n\n      బిషప్‌లు & చర్చి హెడ్‌లు, క్రిస్టియన్ అసోసియేషన్ నాయకులు, క్రిస్టియన్ మీడియా, క్రిస్టియన్ సింగర్స్,\n\n      మ్యూజిషియన్స్, క్రిస్టియన్ న్యూస్ మ్యాగజైన్‌, IAS నుండి అటెండర్, లేబర్ నుండి ల్యాండ్ లార్డ్ మరియు\n\n      పాస్టర్ నుండి బిషప్ లతో అసోసియేట్ చేయడం ద్వారా AP రాష్ట్రంలోని క్రిస్టియన్ కమ్యూనిటీ కోసం పని\n\n      చేస్తున్నాము. ఇప్పటివరకు సుమారు 110 బిషప్‌లు & చర్చి హెడ్‌లతో మాట్లాడగలిగాను, 40,000 మంది పాస్టర్లతో మెసేజ్ ద్వారా\n\n      కమ్యూనికేట్ కాగలిగాము. </h5>\n\n  </ion-card>\n\n\n\n  <ion-card style="background-color: #ffffff;padding: 3%;border-radius: 8px;">\n\n    <h5 style="text-align: justify;font-weight: 1000;font-family: Ramabhadra,sans-serif!important;">\n\n      ఇప్పటివరకు సుమారు 110 బిషప్‌లు & చర్చి హెడ్‌లతో మాట్లాడగలిగాను, 40,000 మంది పాస్టర్లతో మెసేజ్ ద్వారా\n\n      కమ్యూనికేట్ కాగలిగాము. జిల్లా, నియోజక వర్గం, మున్సిపాలిటీ, మండల్, పంచాయత్, వార్డ్ నాయకులుగా ఉండటానికి ఇష్టము వున్న వారు ,\n\n      మాకు మెసేజ్ గాని, వాట్సాప్ ఆడియో రికార్డింగ్ గాని చేసి పంపించండి ఫోన్ కాల్ చేయవద్దు, ఫోన్\n\n      7075482182. మీరు ఇతర క్రిస్టియన్ అసోసియేషన్ లోలైన ఉండవచ్చు అభ్యతరం లేదు, ఎందుకంటే మనం అందరితో కలిసే\n\n      చేస్తున్నాము.నాయకులుగా ఉండగోరె వారు పాస్టర్లఐన, వుద్యోగం, పని చేసుకునే విశ్వాసులు ఐన పర్వాలేదు, వారు\n\n      చేసే పని చిన్నదే. </h5>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\wing\wing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], WingPage);
    return WingPage;
}());

//# sourceMappingURL=wing.js.map

/***/ })

});
//# sourceMappingURL=8.js.map