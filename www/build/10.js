webpackJsonp([10],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebhelpPageModule", function() { return WebhelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webhelp__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WebhelpPageModule = /** @class */ (function () {
    function WebhelpPageModule() {
    }
    WebhelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__webhelp__["a" /* WebhelpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__webhelp__["a" /* WebhelpPage */]),
            ],
        })
    ], WebhelpPageModule);
    return WebhelpPageModule;
}());

//# sourceMappingURL=webhelp.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebhelpPage; });
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
 * Generated class for the WebhelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WebhelpPage = /** @class */ (function () {
    function WebhelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WebhelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WebhelpPage');
    };
    WebhelpPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    WebhelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-webhelp',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\webhelp\webhelp.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>వెబ్ సైట్ ఎలా ఉపయోగించాలి</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <div class="row" style="background-color: #ffffff;padding: 3%;border-radius: 8px;">\n\n    <div class="col-lg-12">\n\n      <h3 style="text-align: center;font-weight: 1000;font-family: Ramabhadra,sans-serif!important;">\n\n        అనేక లక్షలమంది మీ మీటింగ్స్ పోస్టర్ చూచునట్లు ఫ్రీగా వెబ్ సైట్ లో పెట్టండి . </h3>\n\n      <hr>\n\n      <p class="mat">మంత్రి గారిచే ఆంధ్రలో క్రైస్తవలకి సహాయం కోసం <a href="https://jbac.in/">వెబ్ పోర్టల్</a>\n\n        ప్రారంభించబడింది, ఆంధ్రలోని కోటి మంది పైనే ఉన్న క్రైస్తవ సమాజానికి ఉపయోగకరంగా వెబ్ పోర్టల్. నా సేవలకు గుర్తింపుగా ఆంధ్రప్రదేశ్ ప్రభుత్వం ఇచ్చే, ఆంధ్రప్రదేశ్ ప్రభుత్వం ఇచ్చే, రాష్ట్ర వ్యాప్తంగా వున్న క్రైస్తవులలో ప్రతిభావంతులకు ఇచ్చే ఆంధ్ర రాష్ట్ర ఎమనెంట్ క్రిస్టియన్ అవార్డుని, సి.ఎం. గారు బహుకరించారు. అవార్డుతో పాటు 20,000 రూపాయల బ్యాంకు చెక్, సర్టిఫికెట్, శాలువాతో సన్మానించినారు. అవార్డు గ్రహీత డాక్టర్ జోసెఫ్ మోసిగంటి గారు అత్యంత నిరుపేద కుటుంబం నుంచి కష్టపడి చదివి బీటెక్ ఎంటెక్ పీహెచ్డీ సాధించి, దేవుడి దయ వలన చెడు అలవాట్లు బానిస కాకుండా, చదువులో ముందుకెళ్ల గలిగానని చెప్పారు. దైవభక్తి మనిషికి ఎంతో ముఖ్యమని, అది తనని సన్మార్గంలో నడిపించిందని చెప్పారు. అనేక లక్షలమంది మీ మీటింగ్స్ పోస్టర్ తో పాటు మీ యు ట్యూబ్ ఛానల్, మీ పేస్ బుక్ చూచునట్లు ఫ్రీగా వెబ్ సైట్ లో పెట్టండి . </p>\n\n\n\n      <p class="mat"> 2 . మీటింగ్స్ క్లిక్ చేసి ,</p>\n\n      <p class="mat"> 3 . మీటింగ్ పోస్టర్ మరియు * మార్క్ చేసిన వివరాలను తప్పనిసరిగా పూరించాలి, సమాచారము అంతా ఎంటర్ చేసి\n\n      </p>\n\n      <p class="mat"> 4. సబ్మిట్ బటన్ క్లిక్ చేసి 3 సెకండ్స్ వెయిట్ చేస్తే విజయవంతం గా సబ్మిట్ చేసినారు అని వస్తుంది\n\n        తరువాత మీ పోస్టర్ ని చూడడానికి ఈ <a href="/events">లింక్ క్లిక్ చేయండి</a>.<br> ఒకసారి చివరి వరకు చదవండి తరువాత\n\n        లింక్ లు క్లిక్ చేద్దురుగాని.సుమారు 6,00,000 మందికి పంపిస్తున్నాను, కొంతమంది ఫోన్ నంబర్లు వివరాలు, సుమారు 3 సంవత్సరాలు కస్టపడి,డైరెక్టరీస్ ద్వారాను, పాస్టర్ ఫెలోషిప్ ద్వారాను, వాట్సాప్ గ్రూప్స్\n\n        ద్వారానూ , ఫ్రెండ్స్ ద్వారానూ చర్చిల సమాచారం సేకరించాను.<a href="/gallery">సుమారు 100 మంది బిషోప్స్, అసోసియేషన్\n\n          హెడ్స్ ని కలవగలిగాను </a> , 200 మంది బిషప్స్ తో మాట్లాడగలిగాను. <br> అనేక లక్షల మంది చూచి, మేలు పొందునట్లు, మీ మీటింగ్స్ సమాచారం, యూట్యూబ్, ఫేస్బుక్ లింక్స్ నమోదు చేయవచ్చు(ఖర్చుపెట్టి టెక్నాలజీ కొన్నాను, ఇవ్వాలి అనుకున్న వారు ఇవ్వవచ్చు, 9849482182 కి\n\n        ఫోన్ పే చేయండి/upi : mjosephp@ybl ). ఇంకా మన పిల్లల ఉద్యోగాలు, అటాక్స్, క్రిస్టియన్ న్యూస్, క్రిస్టియన్ బిజినెస్ సమాచారం మొదలగునవి నమోదు చేయవచ్చు మరియు నమోదు అయినవి చూడవచ్చు. మీకు తెలియకపోతే మీ సంగం లో చదువుకున్న వారి చేత చేయించండి. ఇతరులకు ఈ మెసేజ్ పంపించండి.\n\n      </p>\n\n      <hr>\n\n      <p class="mat"> నా ఫోన్ నెంబర్ తో పాటు, నా పేరు, నా వివరాలు, సేవ్ చేసుకోవడానికి <a\n\n          href="https://save-jbac-contact.jbac.in">ఈ లింక్ ఓపెన్ చేసి</a> సేవ్ బటన్ అని ఉంటది దాన్ని క్లిక్ చేసి\n\n        డౌన్లోడ్ అయిన తర్వాత ఓపెన్ చేసి, ఇంపోర్ట్ క్లిక్ చేసి, జిమెయిల్ గాని, ఫోన్ గాని క్లిక్ చేసి, సేవ్ చేసుకుంటే మీ\n\n        కాంటాక్ట్స్ లో అన్ని వివరాలు సేవ్ అయిపోతాయి.అయ్యా నేను 60 వేల మందికి మెసేజ్ పంపించాను, మీరు తిరిగి నాకు\n\n        వాట్సేప్(WhatsApp) లో మెసేజ్,వీడియోలు , ఫోటోలు పెట్టవద్దు, దయచేసి అర్థం చేసుకోండి, అనేక లక్షలమంది మీ మీటింగ్స్\n\n        పోస్టర్ చూచునట్లు ఫ్రీగా వెబ్ సైట్ లో పెట్టండి. అనేక లక్షల మంది చూచి, మేలు పొందునట్లు మీకు తెలిసిన, చూచినా\n\n        క్రైస్తవులకు సంబందించిన న్యూస్ కూడా పెట్ట వచ్చు <a href="https://jbac.in/news">ఈ లింక్ ఓపెన్ చేసి</a>.\n\n        పూర్తిగా చదివిన తరువాత కూడా డౌట్ ఉంటే ఫోన్ 7075482182 ఈ నెంబర్ కి కాల్ చేస్తే నా మాటలు వినబడతాయి, తరువాత మీరు\n\n        మాట్లాడండి\n\n        రికార్డు అవుతుంది, తరువాత మీరు మాట్లాడిన దానిని విని, మీకు సమాచారం పంపిస్తాను, 60, 0000 మందికి పంపిస్తున్నాను\n\n        గనుక వ్యక్తిగతము గాఅందరితో మాట్లాడటం కుదరదు అర్ధం చేసుకోండి. నేను నా కుటుంబం దేవుని ఆత్మ చేత నడిపించబడేటట్టు\n\n        దయచేసి ప్రార్థన చేయండి.\n\n      </p>\n\n      <hr>\n\n      <h6 class="mate" style="text-align: center;"> ప్రొఫెసర్ డాక్టర్ జోసెఫ్ ప్రకాష్ మోసిగంటి,<br> చైర్మన్ ,<br> JBAC\n\n        మరియు డైరెక్టర్ సెయింట్ మేరీస్ గ్రూప్ ఆఫ్ ఇంజినీరింగ్ కాలేజెస్,<br> గుంటూరు . </h6>\n\n      <hr>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\webhelp\webhelp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], WebhelpPage);
    return WebhelpPage;
}());

//# sourceMappingURL=webhelp.js.map

/***/ })

});
//# sourceMappingURL=10.js.map