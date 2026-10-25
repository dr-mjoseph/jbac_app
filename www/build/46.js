webpackJsonp([46],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbussinessPageModule", function() { return AddbussinessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addbussiness__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddbussinessPageModule = /** @class */ (function () {
    function AddbussinessPageModule() {
    }
    AddbussinessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addbussiness__["a" /* AddbussinessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addbussiness__["a" /* AddbussinessPage */]),
            ],
        })
    ], AddbussinessPageModule);
    return AddbussinessPageModule;
}());

//# sourceMappingURL=addbussiness.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddbussinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(246);
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
 * Generated class for the AddbussinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddbussinessPage = /** @class */ (function () {
    function AddbussinessPage(navCtrl, navParams, camera, actionSheetCtrl, formBuilder, service, loadingCtrl, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.imagesdata = [];
        this.submitted = false;
        this.addingbusiness = this.formBuilder.group({
            title: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            type: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            number: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10)]],
            denomation: [''],
            state_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            districtname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            constituencyname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            mandals: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            village_name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            ministry_id: [''],
            ward: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            term: [true],
        });
    }
    AddbussinessPage.prototype.ionViewDidLoad = function () {
        this.getbelivers();
        this.getdenomations();
    };
    Object.defineProperty(AddbussinessPage.prototype, "j", {
        get: function () { return this.addingbusiness.controls; },
        enumerable: true,
        configurable: true
    });
    AddbussinessPage.prototype.onStateChange = function (event) {
        var _this = this;
        var stateId = event;
        this.addingbusiness.patchValue({
            state_id: stateId,
            districtname: '',
            constituencyname: '',
            mandals: '',
            village_name: ''
        });
        this.districts = [];
        this.constituency = [];
        this.mandals = [];
        this.panchayati = [];
        this.service.getdistrict(stateId).subscribe(function (res) {
            if (res && res.status == 200) {
                _this.districts = res.data;
            }
        });
    };
    AddbussinessPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    AddbussinessPage.prototype.getbelivers = function () {
        var _this = this;
        this.service.getbelivers().subscribe(function (res) {
            _this.bliversdata = res.data;
        });
    };
    AddbussinessPage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    AddbussinessPage.prototype.getdistric = function () {
        var _this = this;
        this.service.getdistrict().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.districts = res.data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    AddbussinessPage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.addingbusiness.patchValue({
            constituencyname: '',
            mandals: '',
            village_name: ''
        });
        this.constituency = [];
        this.mandals = [];
        this.panchayati = [];
        if (id) {
            this.service.getconsistencys().subscribe(function (res) {
                if (res && res.data) {
                    _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
                }
            });
        }
    };
    AddbussinessPage.prototype.getmandals = function (event) {
        var _this = this;
        var id = event;
        this.addingbusiness.patchValue({
            mandals: '',
            village_name: ''
        });
        this.mandals = [];
        this.panchayati = [];
        if (id) {
            this.service.getmandals().subscribe(function (res) {
                if (res.status == 202) {
                    alert(res.message);
                }
                else if (res.status == 200) {
                    _this.mandals = res.data.filter(function (data) { return data.const_id == id; });
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddbussinessPage.prototype.gepanchayati = function (event) {
        var _this = this;
        var id = event;
        this.addingbusiness.patchValue({
            village_name: ''
        });
        this.panchayati = [];
        if (id) {
            this.service.gepanchayatis().subscribe(function (res) {
                if (res.status == 202) {
                    alert(res.message);
                }
                else if (res.status == 200) {
                    _this.panchayati = res.data.filter(function (data) { return data.mndl_id == id; });
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddbussinessPage.prototype.getbeliver = function () {
        var _this = this;
        this.service.getbeliversdata().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.ministryname = res.data;
            }
        });
    };
    // Accept Input As a Number Only
    AddbussinessPage.prototype.numericOnly = function (event) {
        var patt = /^([0-9])$/;
        var result = patt.test(event.key);
        return result;
    };
    AddbussinessPage.prototype.triggerFileInput = function () {
        var input = document.getElementById('businessFileInput');
        if (input) {
            input.value = '';
            input.click();
        }
    };
    AddbussinessPage.prototype.triggerCameraInput = function () {
        var input = document.getElementById('businessCameraInput');
        if (input) {
            input.value = '';
            input.click();
        }
    };
    AddbussinessPage.prototype.onFileSelected = function (event) {
        var _this = this;
        var file = event.target.files && event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.zone.run(function () {
                    _this.imagesdata = [{
                            reviewimg: e.target.result,
                            filetype: 'jpeg'
                        }];
                });
            };
            reader.readAsDataURL(file);
        }
    };
    AddbussinessPage.prototype.openphoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var actionSheet;
            return __generator(this, function (_a) {
                actionSheet = this.actionSheetCtrl.create({
                    title: 'ఫోటో ఎంచుకోండి (Select Photo)',
                    buttons: [
                        {
                            icon: 'ios-folder-open',
                            text: 'Gallery',
                            handler: function () {
                                if (!(window.navigator && window.navigator.camera)) {
                                    _this.triggerFileInput();
                                    return;
                                }
                                try {
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
                                                filetype: 'jpeg',
                                            };
                                            _this.imagesdata = [imagedata];
                                        });
                                    }, function (err) {
                                        console.log('Gallery picker error, triggering file fallback', err);
                                        _this.triggerFileInput();
                                    });
                                }
                                catch (err) {
                                    _this.triggerFileInput();
                                }
                            }
                        }, {
                            icon: 'ios-camera',
                            text: 'Camera',
                            handler: function () {
                                if (!(window.navigator && window.navigator.camera)) {
                                    _this.triggerCameraInput();
                                    return;
                                }
                                try {
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
                                                filetype: 'jpeg',
                                            };
                                            _this.imagesdata = [imagedata];
                                        });
                                    }, function (err) {
                                        console.log('Camera error, triggering camera fallback', err);
                                        _this.triggerCameraInput();
                                    });
                                }
                                catch (err) {
                                    _this.triggerCameraInput();
                                }
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
    AddbussinessPage.prototype.postbusiness = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
        });
        this.loading.present();
        this.submitted = true;
        if (this.addingbusiness.invalid) {
            alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
            this.loading.dismiss();
        }
        else {
            var data = {
                type: this.addingbusiness.value.type,
                title: this.addingbusiness.value.title,
                description: this.addingbusiness.value.description,
                number: this.addingbusiness.value.number,
                usr_id: localStorage.getItem('usr_id'),
                name: localStorage.getItem('name'),
                reviewImg: this.imagesdata,
                denomation: this.addingbusiness.value.denomation,
                districtname: this.addingbusiness.value.districtname,
                constituencyname: this.addingbusiness.value.constituencyname,
                mandals: this.addingbusiness.value.mandals,
                village_name: this.addingbusiness.value.village_name,
                ministry_id: this.addingbusiness.value.ministry_id,
                ward: this.addingbusiness.value.ministry_id,
            };
            this.service.postbusiness(data).subscribe(function (res) {
                if (res.status == 200) {
                    alert('విజయవంతముగా సబ్మిట్ అయింది');
                    _this.addingbusiness.reset();
                    _this.imagesdata = [];
                    _this.submitted = false;
                    _this.loading.dismiss();
                }
                else {
                    alert('server down');
                    _this.loading.dismiss();
                }
            }, function (error) {
            });
        }
    };
    AddbussinessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addbussiness',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addbussiness\addbussiness.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b> మీ వ్యాపార నమోదు</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <form [formGroup]="addingbusiness">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>విధానానికి జోడించండి<span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="type" [ngClass]="{\'is-invalid\': submitted && j[\'type\'].errors }">\n\n            <ion-option value="" disabled selected>విధానానికి జోడించండి</ion-option>\n\n            <ion-option value="Sales">అమ్మకం</ion-option>\n\n            <ion-option value="Purchase">కొనుగోలు</ion-option>\n\n            <ion-option value="Rent">అద్దె</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && j[\'type\'].errors" class="invalid-feedback">\n\n          <div *ngIf="j[\'type\'].errors[\'required\']">విధానం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఫ్లాట్ల రకాలు<span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="title" [ngClass]="{\'is-invalid\': submitted && j[\'title\'].errors }">\n\n            <ion-option value="" disabled selected>ఫ్లాట్ల రకాలు ఎంచుకోండి</ion-option>\n\n            <ion-option value="1bhk">1BHK</ion-option>\n\n            <ion-option value="2bhk">2BHK</ion-option>\n\n            <ion-option value="3bhk">3BHK</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && j[\'title\'].errors" class="invalid-feedback">\n\n          <div *ngIf="j[\'title\'].errors[\'required\']">శీర్షిక అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <div class="imgerdt" style="padding: 12px; text-align: center; border: 2px dashed #00548F; border-radius: 8px; background: #fafafa;">\n\n          <img src="assets/icon/upload.svg" style="height: 60px; width: 60px; display: block; margin: 0 auto 6px;">\n\n          <p style="margin: 4px 0 10px; font-weight: bold; color: #00548F; font-size: 14px;">బ్రాచ్యాల్‌ను అప్‌లోడ్ చేయండి (Choose File / Camera)</p>\n\n          <input type="file" (change)="onFileSelected($event)" accept="image/*" style="display: block; width: 100%; max-width: 290px; margin: 0 auto 10px; padding: 6px; background: #fff; border: 1px solid #ccc; border-radius: 4px;">\n\n          <button ion-button small outline icon-start type="button" (click)="openphoto()" style="margin: 0 auto; display: inline-block;">\n\n            <ion-icon name="camera"></ion-icon> Camera / Gallery\n\n          </button>\n\n          <div *ngIf="imagesdata.length" style="margin-top: 12px;">\n\n            <img [src]="imagesdata[0].reviewimg" alt="" height="200px" width="200px" style="border-radius: 8px; border: 1px solid #00548F;">\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>వివరణ<span style="color:red">*</span></ion-label>\n\n          <ion-textarea formControlName="description" placeholder="వివరణ నమోదు చేయండి"\n\n            [ngClass]="{\'is-invalid\': submitted && j[\'description\'].errors }"></ion-textarea>\n\n        </ion-item>\n\n        <div *ngIf="submitted && j[\'description\'].errors" class="invalid-feedback">\n\n          <div *ngIf="j[\'description\'].errors[\'required\']">వివరణ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సెలెక్ట్ డినామినేషన్ మోడల్‌</ion-label>\n\n          <ion-select formControlName="denomation" style="height:37px;width: 273px;">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of denomation" [value]="item.id">{{item.denomation_name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మంత్రిత్వం ఎంపికచేయండి</ion-label>\n\n          <ion-select formControlName="ministry_id" style="height:37px;width: 273px;">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let i of ministryname" [value]="i.ministryname">{{i.ministryname}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>స్థానిక చిరునామా/స్ట్రీట్ పేరు <span style="color:red">*</span></ion-label>\n\n          <ion-input type="text" formControlName="ward" placeholder="స్ట్రీట్ పేరు నమోదు చేయండి"\n\n            [ngClass]="{\'is-invalid\': submitted && j[\'ward\'].errors }"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && j[\'ward\'].errors" class="invalid-feedback">\n\n          <div *ngIf="j[\'ward\'].errors[\'required\']">స్థానిక చిరునామా/స్ట్రీట్ పేరు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>కాంటాక్ట్ నంబర్ <span style="color:red">*</span></ion-label>\n\n          <ion-input type="text" formControlName="number" placeholder="కాంటాక్ట్ నంబర్ నమోదు చేయండి" maxlength="10"\n\n            (keypress)="numericOnly($event)" [ngClass]="{\'is-invalid\': submitted && j[\'number\'].errors }"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && j[\'number\'].errors" class="invalid-feedback">\n\n          <div *ngIf="j[\'number\'].errors[\'required\']">కాంటాక్ట్ నంబర్ అవసరం</div>\n\n          <div *ngIf="j[\'number\'].errors[\'minlength\']">10 అంకెల కనిపించాలి</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>రాష్ట్రం / State <span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="state_id" (ionChange)="onStateChange($event)" style="height:37px;width: 273px;">\n\n            <ion-option value="" disabled selected>రాష్ట్రం ఎంచుకోండి</ion-option>\n\n            <ion-option value="1">ఆంధ్రప్రదేశ్ (AP)</ion-option>\n\n            <ion-option value="2">తెలంగాణ (TG)</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && j[\'state_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="j[\'state_id\'].errors[\'required\']">రాష్ట్రం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జిల్లాలను ఎంపికచేయండి <span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="districtname" [disabled]="!addingbusiness.value.state_id" (ionChange)="getconstency($event)"\n\n            [ngClass]="{\'is-invalid\': submitted && j[\'districtname\'].errors }" style="height:37px;width: 273px;">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && j[\'districtname\'].errors" class="invalid-feedback">\n\n          <div *ngIf="j[\'districtname\'].errors[\'required\']">జిల్లా అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మండలాలను ఎంపికచేయండి <span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="constituencyname" [disabled]="!addingbusiness.value.districtname" (ionChange)="getmandals($event)"\n\n            [ngClass]="{\'is-invalid\': submitted && j[\'constituencyname\'].errors }" style="height:37px;width: 273px;">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && j[\'constituencyname\'].errors" class="invalid-feedback">\n\n          <div *ngIf="j[\'constituencyname\'].errors[\'required\']">మండలం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పంచాయితీ ఎంపికచేయండి <span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="mandals" [disabled]="!addingbusiness.value.constituencyname" (ionChange)="gepanchayati($event)"\n\n            [ngClass]="{\'is-invalid\': submitted && j[\'mandals\'].errors }" style="height:37px;width: 273px;">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && j[\'mandals\'].errors" class="invalid-feedback">\n\n          <div *ngIf="j[\'mandals\'].errors[\'required\']">మండలం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>గ్రామ ఎంపికచేయండి <span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="village_name" [disabled]="!addingbusiness.value.mandals" [ngClass]="{\'is-invalid\': submitted && j[\'village_name\'].errors }"\n\n            style="height:37px;width: 273px;">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && j[\'village_name\'].errors" class="invalid-feedback">\n\n          <div *ngIf="j[\'village_name\'].errors[\'required\']">గ్రామం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 mb-4 pb-2>\n\n        <ion-item>\n\n          <ion-label stacked>షరతులు మరియు అంశాలు<span style="color:red">*</span></ion-label>\n\n          <ion-checkbox formControlName="term" checked\n\n            [ngClass]="{\'is-invalid\': submitted && j[\'term\'].errors }"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button type="button" ion-button (click)="postbusiness()">నమోదు చేయి</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addbussiness\addbussiness.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], AddbussinessPage);
    return AddbussinessPage;
}());

//# sourceMappingURL=addbussiness.js.map

/***/ })

});
//# sourceMappingURL=46.js.map