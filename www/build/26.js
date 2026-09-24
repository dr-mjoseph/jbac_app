webpackJsonp([26],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpinghandsPageModule", function() { return HelpinghandsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpinghands__ = __webpack_require__(485);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpinghandsPageModule = /** @class */ (function () {
    function HelpinghandsPageModule() {
    }
    HelpinghandsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__helpinghands__["a" /* HelpinghandsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__helpinghands__["a" /* HelpinghandsPage */]),
            ],
        })
    ], HelpinghandsPageModule);
    return HelpinghandsPageModule;
}());

//# sourceMappingURL=helpinghands.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpinghandsPage; });
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
 * Generated class for the HelpinghandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpinghandsPage = /** @class */ (function () {
    function HelpinghandsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpinghandsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpinghandsPage');
    };
    HelpinghandsPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    HelpinghandsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-helpinghands',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\helpinghands\helpinghands.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;font-family: Ramabhadra,sans-serif!important;"><b>మీకు మా సహాయం</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <div class="row" style="background-color: #ffffff;padding: 3%;border-radius: 8px;">\n\n    <div class="col-lg-12" >\n\n      <h3 style="text-align: center;font-weight: 1000;font-family: Ramabhadra,sans-serif!important;">\n\n        దేవుని కృపతో మేము చేసేది</h3>\n\n\n\n      <p class="mat">1 . దాదాపు అన్ని సేవలను పాస్టర్స్ కి, క్రైస్తవ సమాజానికి ఇస్తాము .</p>\n\n\n\n      <p class="mat"> 2.ప్రభుత్వము నుంచి క్రైస్తవలకు ఉండే పధకాలు, పొందేలా సహాయం చేస్తాము.</p>\n\n\n\n      <p class="mat">3 . పాస్టర్స్ మీద, క్రైస్తవ సమాజాం మీద జరిగే దాడులను ప్రభుత్వం దృష్టికి, అధికారుల దృష్టికి తీసుకు\n\n        వెళ్తాము .</p>\n\n\n\n      <p class="mat">4 . చర్చి నడుపుకొనుటకు పర్మిషన్ విషయములో గాని, సువార్త చెప్పుకొనే స్వేచ్ఛ విషయములో గాని అండగా\n\n        ఉంటూనే, రాజ్యాంగ బద్దమైన, న్యాయ బద్దమైన పాలసీ లు తీసుకు రావటానికి ప్రయత్నిస్తాము. <br> చర్చిలు కట్టుకోవడానికి\n\n        గవర్నమెంట్ ఆర్డర్స్(GO) ఏమున్నాయి, కట్టుకోవడానికి ఎలా పెట్టుకోవాలి, పర్మిషన్ ఇవ్వకపోతే ఏం చేయాలి, పర్మిషన్\n\n        లేకుండా చర్చిలు కట్టుకుంటే ఏమవుతుంది.</p>\n\n\n\n      <p class="mat"> 5 . చర్చి కి వెళ్లే SC లకు సర్టిఫికెట్ ఇవ్వకపోతే, మన కాండిడేట్ కి సపోర్ట్ గా ఉంటాము, చర్చికి\n\n        వెల్లె వ్యక్తీ తనంతట తాను డిక్లేర్ చేసుకునే వరకు, ఎవరు అతనిని బలవంత మత మార్పిడి చేయలేరు.</p>\n\n\n\n      <p class="mat">6 . SC వారికీ మత స్వేచ్ఛ కోసం మొత్తం క్రైస్తవ సమాజాం నుంచి సపోర్ట్ తీసుకురావటం, ST, BC, OC లకు\n\n        అందరికి మత స్వేచ్ఛ ఉంది, ఒక్క SC కి తప్ప .</p>\n\n\n\n      <p class="mat"> 7 . తనంతట తాను క్రైస్తవుడుగా డిక్లేర్ చేసుకున్న వానికి BC-C ఇవ్వకపోతే, మన కాండిడేట్ కి సపోర్ట్ గా\n\n        ఉండి ఇప్పిస్తాము</p>\n\n\n\n      <p class="mat">6 . SC\n\n        వారికీ మత స్వేచ్ఛ కోసం మొత్తం క్రైస్తవ సమాజాం నుంచి సపోర్ట్ తీసుకురావటం, ST, BC, OC లకు\n\n        అందరికి మత స్వేచ్ఛ ఉంది, ఒక్క SC కి తప్ప..</p>\n\n      <p class="mat">\n\n        7.తనంతట తాను క్రైస్తవుడుగా డిక్లేర్ చేసుకున్న వానికి BC-C ఇవ్వకపోతే, మన కాండిడేట్ కి సపోర్ట్ గా\n\n        ఉండి ఇప్పిస్తాము</p>\n\n      <p class="mat">\n\n        8 . ఎవరికి ఆపద వచ్చినా, క్రైస్తవ సమాజానికి సంబంధించి, ఏ సమాచారము వున్నా, ఆంధ్ర ప్రదేశ్ లో ఉన్న\n\n        కోటి\n\n        మంది క్రైస్తవలకు చేరే విధంగా చూడటము. </p>\n\n      <p class="mat">\n\n        9 . క్రైస్తవ విద్యార్థులకు ఉద్యోగాలు పొందటానికి సహాయం చేయటం.</p>\n\n      <p class="mat">\n\n        10 . గవర్నమెంట్ యాక్ట్ ప్రకారంగా క్రైస్తవలకు వచ్చే సుమారు 400 నామినేటెడ్ పోస్టులకు మన క్రైస్తవ\n\n        లీడర్స్ ను రికమెండ్ చేయటం. జీతము మరియు హోదా ఉన్న నామినేటెడ్ పోస్టులు అవి, దాని ద్వారా క్రైస్తవ\n\n        సమాజానికి మరింత సేవ చేయవచ్చు.</p>\n\n      <p class="mat">11 . క్రైస్తవ వ్యాపారస్తులను, ఆర్థిక పరమైన క్రైస్తవ భాగస్వామ్యులను కలపటం.</p>\n\n      <p class="mat">\n\n        12 . యేసుని ఇష్టపడే ప్రభుత్వ ఉద్యోగులైన, లేబర్ నుండి ల్యాండ్ లార్డ్ , పాస్టర్ నుండి బిషప్ మరియు IAS నుండి\n\n        అటెండర్ ల అందరికి దేవుని సహాయము తోపాటు, కోటిమంది సహోదరులు అండ కలిగించటం .</p>\n\n      <p class="mat">\n\n        13. ప్రభుత్వం చేసిన చేయక పోయినా , కోటిమంది ఒకరుకు ఒకరు సహాయం చేసుకునేటట్టు సమాచారం ఇవ్వటం .</p>\n\n      <p class="mat">\n\n        14. పొలిటికల్ పార్టీ తో నిమ్మిత్తం లేకుండా, డినామినేషన్ తో నిమిత్తం లేకుండా, కులం తో నిమిత్తం\n\n        లేకుండా, పెద్ద చిన్న బేధం లేకుండా, యేసుప్రభువు అంటే ఇష్టం వున్నా ప్రతీ వారిని కలుపుకుపోవటం.</p>\n\n      <p class="mat">15. మీ సమస్యలను ఫోన్ కాల్ చేయండి, ఫోన్ 7075482182 , మీ దగ్గరవున్న రుజువులతో పోస్ట్ చేయండి <a\n\n          href="https://jbac.in/addattacks">ఇక్కడ క్లిక్ చేసి పోస్ట్ చేయండి</a>, దానిని పరిశీలించి , మేము చేయగలిగింది\n\n        తప్పకుండ చేస్తాము.</p>\n\n      <p class="mat">\n\n        16. రాబోయే రోజులలో ఇంకా అనేకమైనవి చేస్తాము</p>\n\n      <p class="mat">\n\n        17. ట్రస్ట్ గాని సొసైటీ కి గాని 12 A గాని 80G గాని ఎలా సంపాదించాలి వాటి వల్ల ఉపయోగం ఏంటి.</p>\n\n      <p class="mat">\n\n        18. మిగతా కులాల వారు(మాల, మాదిగ SC ఉప కులాలు వారు కాకుండా) క్రైస్తవులుగా మారితే వారి రిజర్వేషన్ పోతుందా!, వారికి\n\n        జరిగే అదనపు మేలు ఏంటి..</p>\n\n      <p class="mat">\n\n        19. రాకడ సమయం చాలా దగ్గరగా ఉంది కాబట్టి, ఎంత త్వరగా మనము నశించిపోయే ఆత్మలను రక్షించడానికి టెక్నాలజీని ఎలా\n\n        ఉపయోగించుకోవాలి, ఒక్క క్లిక్ తో అనేక మందికి మెసేజ్ ఎలా పంపించాలో చూపించ బడును.</p>\n\n\n\n      <p class="mat">పైన\n\n        చెప్పిన సర్వీసెస్ అన్ని క్రింద తెలిపే అందరి సహాయముతో ఇవ్వగలము. ఇది ఒక సెంట్రలైజడ్ టీమ్\n\n        అందరితో అసోసియేట్ అవుతుంది.</p>\n\n      <p class="mat">ఆంధ్ర\n\n        ప్రదేశ్ లోని దాదాపు అన్ని మెయిన్‌లైన్ చర్చిలు, పెద్ద సమూహం కలిగిన చర్చిలు, ఇండిపెండెంట్\n\n        చర్చి బిషప్‌లు & చర్చి హెడ్‌లు, క్రిస్టియన్ అసోసియేషన్ నాయకులు, క్రిస్టియన్ మీడియా, క్రిస్టియన్ సింగర్స్,\n\n        మ్యూజిషియన్స్, క్రిస్టియన్ న్యూస్ మ్యాగజైన్‌, IAS నుండి అటెండర్, లేబర్ నుండి ల్యాండ్ లార్డ్ మరియు పాస్టర్ నుండి\n\n        బిషప్ లతో అసోసియేట్ చేయడం ద్వారా AP రాష్ట్రంలోని క్రిస్టియన్ కమ్యూనిటీ కోసం పని చేస్తున్నాము. ఇప్పటివరకు సుమారు\n\n        110 బిషప్‌లు & చర్చి హెడ్‌లతో మాట్లాడగలిగాను, 60,000 మంది పాస్టర్లతో మెసేజ్ ద్వారా కమ్యూనికేట్ కాగలిగాము.</p>\n\n      <p class="mat">\n\n        జిల్లా, నియోజక వర్గం, మున్సిపాలిటీ, మండల్, పంచాయత్, వార్డ్ నాయకులుగా ఉండటానికి ఇష్టము వున్న వారు , మాకు మెసేజ్\n\n        గాని, వాట్సాప్ ఆడియో రికార్డింగ్ గాని చేసి పంపించండి ఫోన్ కాల్ చేయవద్దు, ఫోన్ :7075482182. మీరు ఇతర క్రిస్టియన్\n\n        అసోసియేషన్ లోలైన ఉండవచ్చు అభ్యతరం లేదు, ఎందుకంటే మనం అందరితో కలిసే చేస్తున్నాము.నాయకులుగా ఉండగోరె వారు\n\n        పాస్టర్లఐన, వుద్యోగం, పని చేసుకునే విశ్వాసులు ఐన పర్వాలేదు, వారు చేసే పని చిన్నదే. </p>\n\n      <h5 style="text-align: center;font-family: Ramabhadra,sans-serif!important;color: crimson;font-weight: 900;"> Like\n\n        Minded People from Attender to any Professional Can Join with us, contact <br>\n\n\n\n        Email: mjosephp7@gmail.com <br>\n\n\n\n        Number: (+91) 7075-482-182</h5>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\helpinghands\helpinghands.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], HelpinghandsPage);
    return HelpinghandsPage;
}());

//# sourceMappingURL=helpinghands.js.map

/***/ })

});
//# sourceMappingURL=26.js.map