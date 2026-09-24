webpackJsonp([17],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesPrivacyPageModule", function() { return PagesPrivacyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_privacy__ = __webpack_require__(494);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PagesPrivacyPageModule = /** @class */ (function () {
    function PagesPrivacyPageModule() {
    }
    PagesPrivacyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pages_privacy__["a" /* PagesPrivacyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pages_privacy__["a" /* PagesPrivacyPage */]),
            ],
        })
    ], PagesPrivacyPageModule);
    return PagesPrivacyPageModule;
}());

//# sourceMappingURL=pages-privacy.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesPrivacyPage; });
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


//import { HomePage } from '../home/home';
/**
 * Generated class for the PagesPrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagesPrivacyPage = /** @class */ (function () {
    function PagesPrivacyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PagesPrivacyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagesPrivacyPage');
    };
    PagesPrivacyPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
        // this.navCtrl.setRoot(HomePage);
    };
    PagesPrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pages-privacy',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\pages-privacy\pages-privacy.html"*/'<!--\n\n  Generated template for the PagesPrivacyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Privacy Policy</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<!-- <ion-content padding>\n\n\n\n</ion-content> -->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;">Privacy Policy</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n\n\n  <!-- <ion-card style="padding: 1%;border-radius: 5px;">\n\n\n\n    <h2 style="text-align: center;color: #e35b5b;font-weight: 800">\n\n      <u>నేను పుట్టిన ఆంధ్రప్రదేశ్ రాష్ట్రంలో నా క్రైస్తవ సమాజం కోసం నేను ఏమిచేసాను .</u> </h2>&nbsp;\n\n\n\n    <h6 style="text-align:center;font-weight:700;">\n\n      నా కోసం, నా కుటుంబం కోసం ప్రార్ధించండి, JBAC కోఆర్డినేటర్ , ..ప్రొఫెసర్ డాక్టర్ జోసెఫ్ పి.మోసిగంటి, B.Tech, M.Tech, Ph.D .\n\n    </h6>&nbsp;\n\n\n\n    <h5 style="text-align: center;font-weight: 700;">\n\n      <u> డైరెక్టర్ సెయింట్ మేరీస్ గ్రూప్ ఆఫ్ ఇంజినీరింగ్ కాలేజెస్, చేబ్రోలు, గుంటూరు</u>\n\n    </h5>\n\n\n\n  </ion-card> -->\n\n  <ion-card style="padding: 1%;border-radius: 5px;">\n\n    <p style="line-height: 35px;text-align: justify;justify-self: start;;font-weight: 1000;font-family: Ramabhadra,sans-serif!important;">\n\n     \n\nPrivacy Policy\n\nLast updated: December 28, 2024 <br>\n\nJesus Believers Association Council, ("JBAC", "we", or "us") is a Christian, nonprofit organization committed to excellence, integrity, and your privacy. This Policy is provided to inform you of the ways JBAC collects, uses, discloses and otherwise processes or handles your personal and churches information. By providing your information, you agree to your personal and churches information being processed in accordance with this Privacy Policy, as amended from time to time (as noted in the date above).\n\n<br>\n\n<ion-card style="padding: 1%;border-radius: 5px;">\n\n<h2 style="text-align: center;color: #e35b5b;font-weight: 800">\n\n  <u>INFORMATION COLLECTION AND USE </u> </h2>\n\n</ion-card>\n\nJBAC collects some information that cannot be traced back to a specific individual (when that person is not signed in with an account). For example, our web servers automatically record the IP address (the general location where the user is logged) of each visitor to our website, jbac.in, and tracks how many people visit the Website. This information is used to administer and specialize the Website more effectively and gain general information about the backgrounds and sources of visitors.\n\n\n\nThis policy also applies to information we collect when you contact us by telephone, mail, email, mobile application, text, social media, or advertising on third party websites that redirect you to jbac.in.\n\n\n\nJBAC may also ask you to provide personal and churches information that identifies you. We require this information when you create an account, submit an inquiry to us, become a partner, make a purchase or donation, or engage with us for promotional purposes. Such information could include your name, postal address, phone number, email address, date of birth, marital status, other demographic information, or credit card information. JBAC limits the personal and churches information it collects to that which is reasonable under the circumstances, and we only collect your personal and churches information with your consent.\n\n\n\nWe use your personal and churches information for processing your donations and purchases as well as informing you about upcoming JBAC events such as conferences, outreach updates, or opportunities for you to serve, etc. We may otherwise use your personal and churches information where permissible by law, for example to respond to an emergency, or in the course of an investigation into illegal behaviour.\n\n\n\nUser may receive SMS, WhatsApp, Phone Call, email from “Jesus Believers Association Council”. User will receive a text message from JBAC-AP on your mobile number. Message frequency may vary.\n\n\n\n\n\nFor support, please email us at “jbac7ap@gmail.com” or call us at “+91 7075 482 182” “Jesus Believers Association Council Updates” respects your right to privacy.\n\n<br>\n\n<ion-card style="padding: 1%;border-radius: 5px;">\n\n<h2 style="text-align: center;color: #e35b5b;font-weight: 800">\n\n  <u>COOKIES AND SIMILAR TECHNOLOGIES </u> </h2>\n\n</ion-card>\n\n\n\n\n\nCookies are small pieces of text used to store information on devices that visit websites. Other technologies, including data we store on your web browser or device, identifiers associated with your device, pixel technology (e.g., Facebook pixel) and other software (Google Analytics and Google AdWords), are used for similar purposes. In this policy, we refer to all of these technologies as “cookies.”\n\n\n\nJesus Believers Association Council use cookies in various ways, as followed:\n\n\n\nAuthenticating and identifying you on our websites so we can provide you with the services you requested, including location services.\n\n\n\nMeasuring your use of the websites so that we can tailor your experience to your interests, and improve our service on the Website, apps or social media platforms.\n\n\n\nTo help us keep your account, data and the website safe and secure.\n\n\n\nSome browsers have “do not track” features that allow you to tell a website not to track you. These functions are not uniform. Note that if you disable cookies certain features on our sites may not work. If you block or reject cookies, not all of the tracking described here will stop.\n\n\n\n<br>\n\n<ion-card style="padding: 1%;border-radius: 5px;">\n\n<h2 style="text-align: center;color: #e35b5b;font-weight: 800">\n\n  <u>THIRD PARTY SERVICE PROVIDERS\n\n  </u> </h2>\n\n</ion-card>\n\n\n\n\n\nThere are times when JBAC uses trusted third-party service providers to help us collect and process information. These third-party Processors may have access to, store, or process Personal Data or Client Data as part of providing those services for us. We limit the information provided to these service providers to that which is reasonably necessary for them to perform their functions. Our contracts with them require them to maintain the confidentiality of such information and conform to our privacy standards. Some of these third parties may be located outside of the country you reside in, and as a result, that country\'s courts, governments or law enforcement agencies could obtain disclosure of your information in accordance with that country\'s laws.\n\n<br>\n\nINFORMATION SHARING AND DISCLOSURE\n\n<br>\n\n We will not rent, sell, lease, or share personal and churches information with other organizations, except for service providers referred to in the preceding section or except in response to subpoenas, court orders, legal processes, or to establish and/or exercise legal rights.\n\n <br>\n\nSAFEGUARDS AND RETENTION\n\n<br>\n\nWe take all reasonable steps to protect the security and confidentiality of your personal and churches information. We protect the personal and churches information within our custody or control with appropriate organizational, technological and physical safeguards.\n\n\n\nWe store personal and churches information in electronic and physical files that are secure, and our security measures include secure on- and off-site storage, restricted access to records and data processing equipment, password protocols, and encryption and security software. We conduct audits and monitor compliance with our privacy practices.\n\n\n\nWe only retain personal and churches information for as long as is necessary for the purpose for which it was collected. Legal requirements, however, may require us to retain some or all of the personal and churches information we hold for a period of time that is longer than that which we might otherwise hold.\n\n<br>\n\nTHIRD PARTY LINKS\n\n<br>\n\nThe Website may contain links to other websites operated by third parties. Please note that this Privacy Policy applies only to the personal and churches information that we collect or receive from third parties with your consent, and we cannot be responsible for personal and churches information that third parties may collect, store and use, including through their websites. You should always read the privacy policy of each website you visit carefully.\n\n<br>\n\nCHILDREN’S POLICY\n\n<br>\n\nWe do not knowingly collect children’s personal and churches information. Users under the age of 16 must ask parent or guardian permission to use this Website, request information from JBAC, or purchase any resources on this Website.\n\n<br>\n\nHOW DO YOU ACCESS AND UPDATE YOUR PERSONAL AND CHURCHES INFORMATION\n\n<br>\n\nJBAC strives to keep all personal and churches information complete, up-to-date and accurate. You or a person authorized on your behalf has the right to request changes or corrections to inaccurate or incomplete information. If you have any questions, please reach out to us via one of the avenues listed below.\n\nProf. Joseph P. Mosiganti\n\nChairman, Jesus Believers Association Council\n\nDirector, St. Mary’s Group of Institutions Guntur for Women\n\nNear Narakoduru Cross Roads, Chebrolu, Guntur District, Andhra Pradesh State, South India, email: jbac7ap@gmail.com ,Phone: +91 7075 482 182\n\n<br>\n\nOPTING OUT\n\n<br>\n\nIf you supply us with your postal address, you may receive periodic mailings from us, with information about orders you have placed, new resources, conferences, or upcoming events. If you do not wish to receive mailings, please let us know by reaching out through the contact information provided above.\n\n\n\nIf you give us your telephone number, we may reach out to you with information regarding orders that you have placed, inquiries you have requested, prayer needs, or updates to your account information, etc. If you do not wish to receive phone calls from us, please let us know by reaching out through the contact information provided above.\n\n<br>\n\nChildren\n\n<br>\n\nThis Website is not intended for use by, and we do not knowingly collect the personal and churches information of anyone under thirteen (13) years of age.\n\n<br>\n\nRights to Access and Accuracy\n\n<br>\n\nWe will make all reasonable efforts to ensure that your personal and churches information is accurate and complete.\n\n\n\nYou have the right to request access to your personal and churches information and learn about how information is being used. We will provide you with such access within 30 days of your written request or information about an extension if we anticipate that it will take us longer than that period.\n\n\n\nYou also have the right to request that we correct your information (in writing). If the information is demonstrated to be inaccurate or incomplete, we will correct the information as required. If the correction is not made, we will note the individual’s correction request in the file.\n\n<br>\n\nContacting Us\n\n<br>\n\nProf. Joseph P. Mosiganti\n\nChairman, Jesus Believers Association Council\n\nDirector, St. Mary’s Group of Institutions Guntur for Women\n\nNear Narakoduru Cross Roads, Chebrolu, Guntur District, Andhra Pradesh State, South India, email: jbac7ap@gmail.com ,Phone: +91 7075 482 182\n\n\n\nCopyright 2024 Jesus Believers Association Council\n\n    </p>\n\n\n\n    \n\n  </ion-card>\n\n\n\n  \n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\pages-privacy\pages-privacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], PagesPrivacyPage);
    return PagesPrivacyPage;
}());

//# sourceMappingURL=pages-privacy.js.map

/***/ })

});
//# sourceMappingURL=17.js.map