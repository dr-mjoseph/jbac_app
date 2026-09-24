webpackJsonp([48],{

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    AboutPage.prototype.loginmethod = function () {
        if (localStorage.getItem("usr_id") == "" || localStorage.getItem("usr_id") == null || localStorage.getItem("usr_id") == undefined) {
            this.navCtrl.setRoot('LoginPage'); // Use setRoot for the initial page
        }
        else {
            this.navCtrl.setRoot('HomePage'); // Use setRoot for the initial page
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;">గురించి</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n\n\n  <ion-card style="padding: 1%;border-radius: 5px;">\n\n\n\n    <h2 style="text-align: center;color: #e35b5b;font-weight: 800">\n\n      <u>నేను పుట్టిన ఆంధ్రప్రదేశ్ రాష్ట్రంలో నా క్రైస్తవ సమాజం కోసం నేను ఏమిచేసాను .</u> </h2>&nbsp;\n\n\n\n    <h6 style="text-align:center;font-weight:700;">\n\n      నా కోసం, నా కుటుంబం కోసం ప్రార్ధించండి, JBAC కోఆర్డినేటర్ , ..ప్రొఫెసర్ డాక్టర్ జోసెఫ్ పి.మోసిగంటి, B.Tech, M.Tech, Ph.D .\n\n    </h6>&nbsp;\n\n\n\n    <h5 style="text-align: center;font-weight: 700;">\n\n      <u> డైరెక్టర్ సెయింట్ మేరీస్ గ్రూప్ ఆఫ్ ఇంజినీరింగ్ కాలేజెస్, చేబ్రోలు, గుంటూరు</u>\n\n    </h5>\n\n\n\n  </ion-card>\n\n  <ion-card style="padding: 1%;border-radius: 5px;">\n\n    <p style="line-height: 35px;text-align: justify;justify-self: start;;font-weight: 1000;font-family: Ramabhadra,sans-serif!important;">\n\n      క్రైస్తవ సమాజం పట్ల జరుగుతున్న దాడులు, చర్చిలు మీద దాడులు, సువార్త చెప్పకుండా అడ్డంకులు, కేసులు ఇవన్నీ\n\n      చూసి నా మనసు చాలా నలిగిపోయింది, కాబట్టి నేను జాబు చేయకుండా, నేను సమాజం కోసం ఒక వాయిస్ గా ఉండాలి అని\n\n      అనిపించింది, పాస్టర్లు చక్కగా చర్చిలకు కట్టుకునేటట్టు, సువార్త చేసుకునేటట్టు తర్వాత క్రైస్తవులు\n\n      నిరభ్యంతరంగా వాళ్లపై ఎక్సర్సైజ్ చేసుకునేటట్టు ప్రార్థనలు చేసుకునేటట్టు Policyలు మార్చాలని దాని మీద కూడా\n\n      వర్క్ చేస్తున్నాను.ఆంధ్రప్రదేశ్ రాష్ట్రంలో కోటిమంది ఏసుప్రభు నమ్ముకున్న వారు వున్నాము.<br>\n\n      ఇప్పటివరకు 60 వేల మందికి పైనే పాస్టర్లకు Bulk SMS, Bulk calls, WhatsApp ద్వారా\n\n      సమాచారం ఇస్తున్నాను. ఉద్యోగం మానేసిన కారణంగా రెండు లక్షల జీతం రాకపోగా ప్రయాణ ఖర్చులు, మీటింగులు ఖర్చులు,\n\n      software’s ఖర్చులు. అయినా సంతోషంగా క్రైస్తవ సమాజానికి హృదయమంతటితో చేస్తున్నాను. ఇంకా ఎఫెక్టివ్ గా మంచిగా\n\n      చేయాలని ఉంది తప్పకుండా చేస్తాను. నాకోసం నా కుటుంబం కోసం ప్రార్థించండి.\n\n      <br> 60 వేల పైనే పాస్టర్స్ మరియు ఇతరుల నంబర్లు కలెక్ట్ చేశాను. క్రిస్టియన్ డైరెక్టరీస్, వాట్స్ యాప్\n\n      గ్రూప్లు నుంచి, పేస్ బుక్, పాస్టర్ ఫెలో షిప్ లనుంచి కలెక్ట్ చేశాను .ఇప్పటివరకు, నేను ఒక్కడినే రాత్రి\n\n      పగలు కష్టపడ్డాను. ఎక్కువమందితో కమ్యూనికేషన్ అయిపోవడం వల్ల నేను ఫోన్ లిఫ్ట్ చేయలేకపోతున్నాను, ఇంకొక\n\n      వీక్నెస్ ఏంటంటే నేను మాట్లాడితే అర్థగంట నుంచి గంట మాట్లాడుతాను అందుకే ఫోన్లు లేపట్లేదు. మెసేజ్ గాని\n\n      పెడితే అది నాకు చాలా ఉపయోగకరంగా ఉంటుంది, నేను రెస్పాన్స్ ఇస్తాను.\n\n      <br>వివరాలు పొందడానికి ఈ నెంబర్ కూడా 7075482182 సేవ్ చేసుకోండి లేదా వెబ్ సైట్ అయినా చూడవచ్చు. కొన్ని\n\n      వేల రూపాయలు పెట్టి ఎక్విప్మెంట్, సాఫ్ట్వేర్లు కొని ఆటోమైజ్ చేసేసాను. ఇప్పటివరకు ఎవరిని అడగలేదు ఎవరు\n\n      ఇవ్వలేదు ఇద్దరు తప్ప. నాకు సమాజం పట్ల ఉన్న అంకితభావం వలన నాకున్నది ఖర్చు చేసేసాను. నేను రెండు లక్షలు\n\n      జీతం వదిలేసి నా ఖర్చులు నిమిత్తము పార్ట్ టైం డైరెక్టర్ గా పనిచేస్తున్నాను, నాకు దేవుడు ఏదో విధంగా సహాయం\n\n      చేస్తాడని నమ్మకం.\n\n      మిమ్మల్ని మనీ అడగట్లేదు కానీ మీరు చేయగలిగింది చేయండి.\n\n      <br>\n\n      నేను పెట్టే వీడియోలు మీరు చూచు నట్లు, వీడియో ఛానల్ సబ్ స్క్రైబ్ చేసుకోండి<br>\n\n      నా సాక్షం వీడియో\n\n    </p>\n\n\n\n    <iframe height="240" src="https://www.youtube.com/embed/xKb9CQvHYUQ?si=C2GoTyHg1-UBJgnz"\n\n      title="YouTube video player" frameborder="0"\n\n      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\n\n      allowfullscreen></iframe>\n\n\n\n  </ion-card>\n\n\n\n  <ion-card style="padding: 1%;border-radius: 5px;">\n\n    <h5 style="line-height: 35px;text-align: center;font-weight: 1000;">\n\n      ..ప్రొఫెసర్ డాక్టర్ జోసఫ్ పి మోసిగంటి.\n\n      <br>\n\n      B.Tech, M.Tech, Ph.D<br>\n\n      చైర్మన్, ఆంధ్రప్రదేశ్ జీసస్ బిలీవర్స్ అసోసియేషన్ కౌన్సిల్ (JBAC) . <br>\n\n      డైరెక్టర్ , సెయింట్ మేరీస్ గ్రూప్ ఆఫ్ ఇంజినీరింగ్ కాలేజెస్ , చేబ్రోలు , గుంటూరు . <br>\n\n      Phone : 7075482182 ( సేవ్ చేసుకొని మెసేజ్-SMS మాత్రమే చేయండి ) .<br>\n\n       నా ఫోన్ నెంబర్ తో పాటు, నా పేరు, నా వివరాలు, సేవ్ చేసుకోవడానికి ఈ లింక్ ఓపెన్ చేసి \n\n       <a href="https://save-jbac-contact.jbac.in"> ఇక్కడ క్లిక్ చేయండి </a> సేవ్ బటన్ అని ఉంటది దాన్ని క్లిక్\n\n      చేసి డౌన్లోడ్ అయిన తర్వాత ఓపెన్ చేసి , ఇంపోర్ట్ క్లిక్ చేసి , జిమెయిల్ గాని , ఫోన్ గాని క్లిక్ చేసి , సేవ్\n\n      చేసుకుంటే మీ కాంటాక్ట్స్ లో అన్ని వివరాలు సేవ్ అయిపోతాయి. అయ్యా నేను 40 వేల మందికి మెసేజ్ పంపించాను ,\n\n      మీరు తిరిగి నాకు వాట్ సేప్(WhatsApp) లో మెసేజ్ , వీడియోలు , ఫోటోలు పెట్టవద్దు , దయచేసి అర్థం చేసుకోండి .\n\n    </h5>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=48.js.map