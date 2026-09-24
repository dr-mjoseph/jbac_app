webpackJsonp([19],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(493);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */]),
            ],
        })
    ], NewsPageModule);
    return NewsPageModule;
}());

//# sourceMappingURL=news.module.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// import { HomePage } from '../home/home';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams, camera, actionSheetCtrl, formBuilder, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.imagesdata = [];
        this.submitted = false;
        this.addingnews = this.formBuilder.group({
            image: [''],
            description: [''],
            news: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
        });
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage.prototype.openphoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionSheet = this.actionSheetCtrl.create({
                            buttons: [
                                {
                                    icon: 'ios-folder-open',
                                    text: 'Gallery',
                                    role: 'destructive',
                                    handler: function () {
                                        var options = {
                                            quality: 70,
                                            destinationType: _this.camera.DestinationType.DATA_URL,
                                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                                            saveToPhotoAlbum: false
                                        };
                                        _this.camera.getPicture(options).then(function (imaged) {
                                            var ing = "data:image/jpeg;base64," + imaged;
                                            var imagedata = {
                                                reviewimg: ing,
                                                filetype: 'jpeg',
                                            };
                                            console.log(imagedata);
                                            _this.imagesdata = [];
                                            _this.imagesdata.push(imagedata);
                                        }, function (err) {
                                        });
                                    }
                                }, {
                                    icon: 'ios-camera',
                                    text: 'Camera',
                                    handler: function () {
                                        var options = {
                                            quality: 70,
                                            correctOrientation: true,
                                            destinationType: _this.camera.DestinationType.DATA_URL,
                                            encodingType: _this.camera.EncodingType.JPEG,
                                            mediaType: _this.camera.MediaType.PICTURE
                                        };
                                        _this.camera.getPicture(options).then(function (imageD) {
                                            var img = "data:image/jpeg;base64," + imageD;
                                            var imagedata = {
                                                reviewimg: img,
                                                filetype: 'jpeg',
                                            };
                                            console.log(imagedata);
                                            _this.imagesdata = [];
                                            _this.imagesdata.push(imagedata);
                                        }, function (err) {
                                        });
                                    }
                                }, {
                                    icon: 'ios-close',
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }
                            ]
                        });
                        return [4 /*yield*/, actionSheet];
                    case 1:
                        (_a.sent()).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewsPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    NewsPage.prototype.postnews = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
        });
        this.loading.present();
        if (this.addingnews.invalid) {
            alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
            this.loading.dismiss();
        }
        else {
            var data = {
                description: this.addingnews.value.description,
                news: this.addingnews.value.news,
                mobilenumber: localStorage.getItem('mobile_number'),
                reviewImg: this.imagesdata
            };
            // console.log(data)
            this.service.postupdatenews(data).subscribe(function (res) {
                if (res.status == 200) {
                    alert('విజయవంతముగా సబ్మిట్ అయింది');
                    _this.addingnews.reset();
                    _this.imagesdata = [];
                    _this.submitted = false;
                    _this.loading.dismiss();
                    // this.getnews();
                }
                else {
                    alert('server down');
                    _this.loading.dismiss();
                }
            });
        }
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\news\news.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;font-family:ramabhadra;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;font-family:ramabhadra;"><b> వార్తలు నమోదు </b></ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;font-size: 12px;font-family:ramabhadra;">ఆంధ్రలోని క్రైస్తవ వార్తలు నమోదు చేయండి </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <form [formGroup]="addingnews">\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>అప్లోడ్ చేసే న్యూస్ ఏ కేటగిరీ క్రింద వస్తుంది<span style="color:red; font-family:ramabhadra;">*</span></ion-label>\n\n              <ion-select formControlName="news" [ngClass]="{\'is-invalid\': submitted && h[\'news\'].errors }">\n\n                <ion-option value="" selected disabled>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n                <ion-option value="క్రైస్తవుల మీద దాడులు">క్రైస్తవుల మీద దాడులు సంబంధించిన న్యూస్</ion-option>\n\n                <ion-option value="జనరల్ న్యూస్">జనరల్ న్యూస్</ion-option>\n\n                <ion-option value="దళిత్ క్రిస్టియన్స్ షెడ్యూల్ కాస్ట్ స్టేటస్ న్యూస్">దళిత్ క్రిస్టియన్స్ షెడ్యూల్ కాస్ట్ స్టేటస్ న్యూస్</ion-option>      \n\n                <ion-option value="గౌరవ వేతనం, ప్రభుత్వ పథకాలు సంబంధించిన న్యూస్">గౌరవ వేతనం, ప్రభుత్వ పథకాలు సంబంధించిన న్యూస్</ion-option>\n\n                <ion-option value="క్రైస్తవులకు సంబంధించిన న్యూస్">క్రైస్తవులకు సంబంధించిన న్యూస్</ion-option>\n\n                <ion-option value="చదువుకి సంబంధించి">చదువుకి సంబంధించి</ion-option>\n\n                <ion-option value="ట్రైనింగ్ కి సంబంధించి">ట్రైనింగ్ కి సంబంధించి</ion-option>\n\n                <ion-option value="ఉద్యోగాలకు సంబంధించి">ఉద్యోగాలకు సంబంధించి</ion-option>\n\n                <ion-option value="ఆరోగ్యం కి సంబంధించి">ఆరోగ్యం కి సంబంధించి</ion-option>\n\n                <ion-option value="సమాజం లోని సమస్యలు కి సంబంధించి న్యూస్">సమాజం లోని సమస్యలు కి సంబంధించి న్యూస్</ion-option>\n\n                <ion-option value="డా|| జోసెఫ్ గారి వార్తలు">డా|| జోసెఫ్ గారి వార్తలు</ion-option>\n\n                \n\n              </ion-select>\n\n            </ion-item>\n\n            <div *ngIf="submitted && h[\'news\'].errors" class="invalid-feedback">\n\n              <div *ngIf="h[\'news\'].errors[\'required\']">న్యూస్ ఏ కేటగిరీ క్రింద వస్తుంది ఎంచుకోండి </div>\n\n            </div>\n\n          </ion-col>\n\n                  \n\n          <ion-col col-12 (click)="openphoto()">\n\n            <div class="imgerdt">\n\n              <img src="../../assets/icon/Upload.svg" style="height:70px;width:70px;font-family:ramabhadra;">\n\n              వార్తల పేపర్ కటింగ్ / ఫోటో అప్‌లోడ్ చేయండి<br>\n\n              <img *ngIf="imagesdata.length" style="width:200px;height:200px" src="{{imagesdata[0].reviewimg}}">\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n             <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label  stacked>మీరు అప్లోడ్ చేసిన వార్తల గురించి వివరణ (ఏ పేపర్)<span style="color:red;font-family:ramabhadra; "></span></ion-label>\n\n              <ion-textarea type="text" formControlName="description" placeholder="ఇక్కడ క్లిక్ చేసి అప్లోడ్ చేయండి"\n\n                [ngClass]="{\'is-invalid\': submitted && h[\'description\'].errors }"></ion-textarea>\n\n            </ion-item>\n\n            <!-- <div *ngIf="submitted && h[\'description\'].errors" class="invalid-feedback">\n\n              <div *ngIf="h[\'description\'].errors[\'required\']">మీరు అప్లోడ్ చేసిన న్యూస్ గురించి వివరణ (ఏ పేపర్)</div> \n\n            </div> -->\n\n          </ion-col>\n\n\n\n            <div style="text-align: center;">\n\n              <button ion-button color="secondary" (click)="postnews()" style="font-size: 20px;letter-spacing: 1px;font-family:ramabhadra;">సబ్మిట్</button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </form>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* LoadingController */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ })

});
//# sourceMappingURL=19.js.map