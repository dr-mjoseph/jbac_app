webpackJsonp([48],{

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddadsPageModule", function() { return AddadsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addads__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddadsPageModule = /** @class */ (function () {
    function AddadsPageModule() {
    }
    AddadsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addads__["a" /* AddadsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addads__["a" /* AddadsPage */]),
            ],
        })
    ], AddadsPageModule);
    return AddadsPageModule;
}());

//# sourceMappingURL=addads.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddadsPage; });
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
var AddadsPage = /** @class */ (function () {
    function AddadsPage(navCtrl, navParams, camera, actionSheetCtrl, formBuilder, service, loadingCtrl, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.imagesdata = [];
        this.submitted = [];
        this.addsadding = this.formBuilder.group({
            title: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            type: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            image: [''],
            description: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            number: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10)]],
            term: [true, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
    }
    AddadsPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    AddadsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddadsPage');
    };
    AddadsPage.prototype.triggerFileInput = function () {
        var fileInput = document.getElementById('adsFileInput');
        if (fileInput) {
            fileInput.click();
        }
    };
    AddadsPage.prototype.onFileSelected = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.zone.run(function () {
                    _this.imagesdata = [{
                            reviewimg: e.target.result,
                            reviewImg: e.target.result,
                            filetype: file.type || 'image/jpeg'
                        }];
                });
            };
            reader.readAsDataURL(file);
        }
    };
    AddadsPage.prototype.openphoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var actionSheet;
            return __generator(this, function (_a) {
                actionSheet = this.actionSheetCtrl.create({
                    buttons: [
                        {
                            icon: 'ios-folder-open',
                            text: 'Gallery',
                            handler: function () {
                                var options = {
                                    quality: 70,
                                    destinationType: _this.camera.DestinationType.DATA_URL,
                                    sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                                    saveToPhotoAlbum: false
                                };
                                _this.camera.getPicture(options).then(function (imaged) {
                                    _this.zone.run(function () {
                                        var ing = "data:image/jpeg;base64," + imaged;
                                        var imagedata = {
                                            reviewimg: ing,
                                            reviewImg: ing,
                                            filetype: 'jpeg',
                                        };
                                        _this.imagesdata = [imagedata];
                                    });
                                }, function (err) {
                                    _this.triggerFileInput();
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
                                    _this.zone.run(function () {
                                        var img = "data:image/jpeg;base64," + imageD;
                                        var imagedata = {
                                            reviewimg: img,
                                            reviewImg: img,
                                            filetype: 'jpeg',
                                        };
                                        _this.imagesdata = [imagedata];
                                    });
                                }, function (err) {
                                    _this.triggerFileInput();
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
                actionSheet.present();
                return [2 /*return*/];
            });
        });
    };
    AddadsPage.prototype.postadds = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
        });
        this.loading.present();
        this.submitted = true;
        if (this.addsadding.invalid) {
            alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
            this.loading.dismiss();
        }
        else {
            var data = {
                type: this.addsadding.value.type,
                title: this.addsadding.value.title,
                description: this.addsadding.value.description,
                number: this.addsadding.value.number,
                usr_id: localStorage.getItem('usr_id'),
                reviewImg: this.imagesdata
            };
            this.service.postadds(data).subscribe(function (res) {
                if (res.status == 200) {
                    alert('విజయవంతముగా సబ్మిట్ అయింది');
                    _this.addsadding.reset();
                    _this.imagesdata = [];
                    _this.submitted = false;
                    _this.loading.dismiss();
                }
                else {
                    _this.loading.dismiss();
                    alert('server down');
                }
            }, function (error) {
            });
        }
    };
    AddadsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addads',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addads\addads.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b> ప్రకటనల సమాచారాన్ని</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <form [formGroup]="addsadding">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జోడింపు రకం<span style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="type">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option value="Meetings">మీటింగ్‌లు</ion-option>\n\n            <ion-option value="Church">చర్చి</ion-option>\n\n            <ion-option value="Jobs">ఉద్యోగాలు</ion-option>\n\n            <ion-option value="Marriages">ళ్లిలు</ion-option>\n\n            <ion-option value="Institutes">ఇన్స్టిట్యూట్లు</ion-option>\n\n            <ion-option value="Other">ఇతర</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>శీర్షిక<span style="color:red; ">*</span></ion-label>\n\n          <ion-input type="text" formControlName="title" placeholder="శీర్షిక నమోదు"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <div class="imgerdt" style="padding: 12px; text-align: center; border: 2px dashed #00548F; border-radius: 8px; background: #fafafa;">\n\n          <img src="assets/icon/upload.svg" style="height: 60px; width: 60px; display: block; margin: 0 auto 6px;">\n\n          <p style="margin: 4px 0 10px; font-weight: bold; color: #00548F; font-size: 14px;">ప్రకటనల చిత్రం అప్‌లోడ్ చేయండి (Choose File / Camera)</p>\n\n          <input type="file" (change)="onFileSelected($event)" accept="image/*" style="display: block; width: 100%; max-width: 290px; margin: 0 auto 10px; padding: 6px; background: #fff; border: 1px solid #ccc; border-radius: 4px;">\n\n          <button ion-button small outline icon-start type="button" (click)="openphoto()" style="margin: 0 auto; display: inline-block;">\n\n            <ion-icon name="camera"></ion-icon> Camera / Gallery\n\n          </button>\n\n          <div *ngIf="imagesdata.length" style="margin-top: 12px;">\n\n            <img [src]="imagesdata[0].reviewimg || imagesdata[0].reviewImg" alt="" height="200px" width="200px" style="border-radius: 8px; border: 1px solid #00548F;">\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>విజ్ఞాపన వివరణ<span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-textarea formControlName="description" placeholder="వివరణ నమోదు"></ion-textarea>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సంప్రదించండి నంబర్<span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-input type="text" formControlName="number" class="form-control" placeholder="సంప్రదించండి నంబర్"\n\n            maxlength="10" minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>షరతులు మరియు షరతులు <span style="color:red;">*</span></ion-label>\n\n          <ion-checkbox formControlName="term"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-md-12 style="text-align: center;">\n\n        <button type="submit" color="secondary" ion-button class="default-btn user-all-btn"\n\n          (click)="postadds()">నమోదు</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addads\addads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], AddadsPage);
    return AddadsPage;
}());

//# sourceMappingURL=addads.js.map

/***/ })

});
//# sourceMappingURL=48.js.map