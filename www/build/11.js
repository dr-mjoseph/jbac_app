webpackJsonp([11],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechsolPageModule", function() { return TechsolPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__techsol__ = __webpack_require__(500);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TechsolPageModule = /** @class */ (function () {
    function TechsolPageModule() {
    }
    TechsolPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__techsol__["a" /* TechsolPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__techsol__["a" /* TechsolPage */]),
            ],
        })
    ], TechsolPageModule);
    return TechsolPageModule;
}());

//# sourceMappingURL=techsol.module.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechsolPage; });
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
 * Generated class for the TechsolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TechsolPage = /** @class */ (function () {
    function TechsolPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TechsolPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TechsolPage');
    };
    TechsolPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    TechsolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-techsol',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\techsol\techsol.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>Technical Solutions</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="pagecss">\n\n  <ion-row style="background-color: rgb(225, 200, 167);padding: 3px;border-radius: 5px;">\n\n    <h3\n\n      style="margin:10px;text-align: center;color: #e63030;font-weight: 800;font-family: cursive;font-family: Ramabhadra,sans-serif!important;">\n\n      చర్చిలు మరియు క్రైస్తవ సంస్థలకు తెక్నికల్ సమాధానాలు.\n\n    </h3>\n\n\n\n    <ion-col col-12>\n\n      <p style="text-align: justify;font-weight:900; font-family: inherit!important;">\n\n        <li>\n\n          మేము సామాజికంగా మంచిని చేయడానికి చర్చిలు మరియు క్రైస్తవ సంస్థలకు అనుకూల తెక్నికల్ సమాధానాలను అందిస్తున్నాము, అలాగే మరియు మరింత ఆత్మలను గెలిచేందుకు.<br><br>\n\n\n\n          1. మేము చిన్న చర్చిల మరియు క్రైస్తవ సంస్థల నుండి పెద్ద చర్చిలు మరియు సంస్థల వరకు సమాధానాలను అందిస్తున్నాము.<br><br>\n\n          \n\n          2. మేము మీ చర్చిలు మరియు క్రైస్తవ సంస్థల ప్రక్రియలను క్రిందికి నియంత్రించడానికి ఆటోమైజ్ చేయవచ్చు, మరియు విశ్వాసులకు పరిష్కరణ సేవలు అందించవచ్చు.<br><br>\n\n          \n\n          3. మేము మీ చర్చిల పోన్ నెంబర్లను అన్ని నిమిషాలు పొందొంది మరియు మీకు అందించుటకు.<br><br>\n\n          \n\n          4. మేము ఒక ఫోన్ నంబర్ ను కొనుగోలు చేసుకుని, ఒక ఫోన్ నంబర్ తో 10 నుండి 300 మందికి ఆడియో కాన్ఫరెన్స్ సదస్యత్వం అందించవచ్చు, సాధారణ ఫోన్ విశ్వాసులు కూడా కాన్ఫరెన్స్ ను అందుకున్నారు, మేము పోల్ ను చర్చాత్మక ప్రశ్నలను నిర్వచించవచ్చు<br><br>\n\n          \n\n          5. మీరు గొప్ప నంబర్లో విశ్వాసులకు సెకండ్‌లో దేవుడి పదమును తెలుగు లేదా ఏ భాషలో పంపవచ్చు.<br><br>\n\n          \n\n          6. మీరు మీ ధ్వని లేదా సమాచారాన్ని రికార్డ్ చేసుకుని, మా సాఫ్ట్‌వేర్ ప్యానెల్ ద్వారా మీరు సెకండ్‌లో లక్షల విశ్వాసులకు మీ ధ్వనిని పంపవచ్చు, విశ్వాసుడు ఫోన్‌ను ఆడవితే, అతడు అప్‌లిఫ్ట్ చేయవచ్చు.<br><br>\n\n          \n\n          7. మేము ఒక పరికరం మరియు సాఫ్ట్‌వేర్ అందిస్తున్నాము, మీ ఫోన్ సిమ్‌ను పరికరంలో విడివిడి వ్యక్తుల ఫోన్ నంబర్లను ఇన్‌సర్ట్ చేసి, విశ్వాసులు మిగిలిన దానిని తేడా వినండి, అతడు ఫోన్ ని ఆదాయం చేయవచ్చు, అతడు ఫోన్‌ను ఆడినా, విశ్వాసుడు రికార్డెడ్ ధ్వనిని వినవచ్చు.<br><br>\n\n          \n\n          8. మాకు ప్రాంతంలో 40,000 పాద్రుల ఫోన్ నంబర్లు ఉన్నాయి. ఈ పాద్రులకు, బైబిల్ కళాశాలలకు, సంగీతంలకు, గాయకులకు, రచయితలకు, సినిమా పరిశ్రమలోని విశ్వాసులకు, వ్యాపారంలో విశ్వాసులకు సంబంధించిన ఆటెండర్ ను ఐఏఎస్ నుండి భారీగా పాద్రులు వరకు సమాచారం పంపవచ్చు.\n\n          <hr>\n\n          \n\n          <h6 class="mate" style="text-align: center;"> - - ప్రొఫెసర్ డాక్టర్ జోసెఫ్ ప్రకాష్ మోసిగంటి,<br> చైర్మన్ ,<br>\n\n            JBAC మరియు డైరెక్టర్ సెయింట్ మేరీస్ గ్రూప్ ఆఫ్ ఇంజినీరింగ్ కాలేజెస్,<br> గుంటూరు . </h6>\n\n      </p>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\techsol\techsol.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], TechsolPage);
    return TechsolPage;
}());

//# sourceMappingURL=techsol.js.map

/***/ })

});
//# sourceMappingURL=11.js.map