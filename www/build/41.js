webpackJsonp([41],{

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddjobsPageModule", function() { return AddjobsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addjobs__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddjobsPageModule = /** @class */ (function () {
    function AddjobsPageModule() {
    }
    AddjobsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addjobs__["a" /* AddjobsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addjobs__["a" /* AddjobsPage */]),
            ],
        })
    ], AddjobsPageModule);
    return AddjobsPageModule;
}());

//# sourceMappingURL=addjobs.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddjobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
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
 * Generated class for the AddjobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddjobsPage = /** @class */ (function () {
    function AddjobsPage(navCtrl, navParams, camera, actionSheetCtrl, formBuilder, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.imagesdata = [];
        this.jobsadding = this.formBuilder.group({
            jobname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            qualification: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            experience: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            salary: [''],
            location: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            number1: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10)]],
            number2: [''],
            districtname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            constituencyname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            mandals: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            village_name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            google_location: [''],
            image: [''],
            facebook: [''],
            youtube: [''],
        });
        this.jobsadding.reset();
    }
    Object.defineProperty(AddjobsPage.prototype, "a", {
        get: function () { return this.jobsadding.controls; },
        enumerable: true,
        configurable: true
    });
    AddjobsPage.prototype.ionViewDidLoad = function () {
        this.getdistric();
        this.getbeliver();
        this.getbelivers();
        this.getdenomations();
    };
    AddjobsPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    AddjobsPage.prototype.getbelivers = function () {
        var _this = this;
        this.service.getbelivers().subscribe(function (res) {
            _this.bliversdata = res.data;
        });
    };
    AddjobsPage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    AddjobsPage.prototype.getdistric = function () {
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
    AddjobsPage.prototype.getmandals = function (event) {
        var _this = this;
        var id = event;
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
    };
    AddjobsPage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    AddjobsPage.prototype.gepanchayati = function (event) {
        var _this = this;
        var id = event;
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
    };
    AddjobsPage.prototype.getbeliver = function () {
        var _this = this;
        this.service.getbeliversdata().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.ministryname = res.data;
            }
        }, function (error) {
        });
    };
    // Accept Input As a Number Only
    AddjobsPage.prototype.numericOnly = function (event) {
        var patt = /^([0-9])$/;
        var result = patt.test(event.key);
        return result;
    };
    AddjobsPage.prototype.openphoto = function () {
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
    AddjobsPage.prototype.postjobs = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
        });
        this.loading.present();
        if (this.jobsadding.invalid) {
            alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి');
            this.loading.dismiss();
        }
        else {
            var data = {
                jobname: this.jobsadding.value.jobname,
                qualification: this.jobsadding.value.qualification,
                experience: this.jobsadding.value.experience,
                salary: this.jobsadding.value.salary,
                location: this.jobsadding.value.location,
                description: this.jobsadding.value.description,
                number1: this.jobsadding.value.number1,
                number2: this.jobsadding.value.number2,
                districtname: this.jobsadding.value.districtname,
                constituencyname: this.jobsadding.value.constituencyname,
                mandals: this.jobsadding.value.mandals,
                village_name: this.jobsadding.value.village_name,
                google_location: this.jobsadding.value.google_location,
                usr_id: sessionStorage.getItem('usr_id'),
                mobile_number: sessionStorage.getItem('mobile_number'),
                name: sessionStorage.getItem('name'),
                reviewImg: this.imagesdata
            };
            this.service.postjobs(data).subscribe(function (res) {
                if (res.status == 200) {
                    alert('విజయవంతముగా సబ్మిట్ అయింది');
                    _this.jobsadding.reset();
                    _this.imagesdata = [];
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
    AddjobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addjobs',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addjobs\addjobs.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>ఉపాధి అవసరాలను నమోదు</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="pagecss">\n\n\n\n  <form [formGroup]="jobsadding">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఉద్యోగం పేరు <span style="color:red;">*</span></ion-label>\n\n          <ion-input formControlName="jobname" placeholder="ఉద్యోగం పేరు"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && jobsadding.get(\'jobname\').errors" class="invalid-feedback">\n\n          <div *ngIf="jobsadding.get(\'jobname\').hasError(\'required\')">ఉద్యోగ పేరు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>అర్హత <span style="color:red;">*</span></ion-label>\n\n          <ion-input formControlName="qualification" placeholder="అర్హత నిర్వచించండి"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && jobsadding.get(\'qualification\').errors" class="invalid-feedback">\n\n          <div *ngIf="jobsadding.get(\'qualification\').hasError(\'required\')">అర్హత అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      \n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>అనుభవం <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="experience" placeholder="మీ అనుభవం ఎంచుకోండి">\n\n            <ion-option value="" disabled selected>మీ అనుభవం ఎంచుకోండి</ion-option>\n\n            <ion-option value="fresher">ఫ్రెషర్</ion-option>\n\n            <ion-option value="1-2">1-2</ion-option>\n\n            <ion-option value="2-3">2-3</ion-option>\n\n            <ion-option value="3-5">3-5</ion-option>\n\n            <ion-option value="Above 5YEARS">5 ఏళ్ల పైన</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && jobsadding.get(\'experience\').errors" class="invalid-feedback">\n\n          <div *ngIf="jobsadding.get(\'experience\').hasError(\'required\')">అనుభవం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ప్రాంతం స్థలం <span style="color:red;">*</span></ion-label>\n\n          <ion-input formControlName="location" placeholder="మీ పని ప్రాంతం నిర్వచించండి"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && jobsadding.get(\'location\').errors" class="invalid-feedback">\n\n          <div *ngIf="jobsadding.get(\'location\').hasError(\'required\')">స్థలం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఉద్యోగ వివరణ <span style="color:red;">*</span></ion-label>\n\n          <ion-textarea formControlName="description" placeholder="ఉద్యోగ వివరణను నిర్వచించండి"></ion-textarea>\n\n        </ion-item>\n\n        <div *ngIf="submitted && jobsadding.get(\'description\').errors" class="invalid-feedback">\n\n          <div *ngIf="jobsadding.get(\'description\').hasError(\'required\')">ఉద్యోగ వివరణ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>గూగుల్ స్థలం</ion-label>\n\n          <ion-input formControlName="google_location" placeholder="మీ గూగుల్ స్థలం URL నిర్వచించండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 (click)="openphoto()">\n\n        <div class="imgerdt">\n\n          <img src="assets/icon/Upload.svg"  style="height:70px;width:70px;">\n\n          చిత్రం అప్‌లోడ్ చేయండి<br>\n\n          <img *ngIf="imagesdata.length" style="width:200px;height:200px" src="{{imagesdata[0].reviewimg}}">\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సంప్రదించండి నంబర్1 <span style="color:red;">*</span></ion-label>\n\n          <ion-input formControlName="number1" placeholder="సంప్రదించండి నంబర్" maxlength="10" minlength="10"\n\n            (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && jobsadding.get(\'number1\').errors" class="invalid-feedback">\n\n          <div *ngIf="jobsadding.get(\'number1\').hasError(\'required\')">సంప్రదించండి నంబర్ 1 అవసరం</div>\n\n          <div *ngIf="jobsadding.get(\'number1\').hasError(\'minlength\')">10 అంశాల కంటే తక్కువిగా ఉంది</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సంప్రదించండి నంబర్2</ion-label>\n\n          <ion-input formControlName="number2" placeholder="సంప్రదించండి నంబర్" maxlength="10" minlength="10"\n\n            (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>YouTube</ion-label>\n\n          <ion-input formControlName="youtube" placeholder="యూట్యూబ్ నిర్వచించండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఫేస్‌బుక్</ion-label>\n\n          <ion-input formControlName="facebook" placeholder="ఫేస్‌బుక్ నిర్వచించండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>      \n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జిల్లాల ఎంచుకోండి <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="districtname" (ionChange)="getconstency($event)">\n\n            <ion-option value="" disabled selected>రకము ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && a[\'districtname\'].errors" class="invalid-feedback">\n\n          <div *ngIf="a[\'districtname\'].errors[\'required\']">జిల్లా అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మండలం ఎంచుకోండి <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="constituencyname" (ionChange)="getmandals($event)">\n\n            <ion-option value="" disabled selected>రకము ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && a[\'constituencyname\'].errors" class="invalid-feedback">\n\n          <div *ngIf="a[\'constituencyname\'].errors[\'required\']">మండలం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పండల ఎంచుకోండి <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="mandals" (ionChange)="gepanchayati($event)">\n\n            <ion-option value="" disabled selected>రకము ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && a[\'mandals\'].errors" class="invalid-feedback">\n\n          <div *ngIf="a[\'mandals\'].errors[\'required\']">మండలం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పంచాయితీ ఎంచుకోండి <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="village_name">\n\n            <ion-option value="" disabled selected>రకము ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && a[\'village_name\'].errors" class="invalid-feedback">\n\n          <div *ngIf="a[\'village_name\'].errors[\'required\']">పంచాయితీ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>షరతులు మరియు షరతులు <span style="color:red;">*</span></ion-label>\n\n          <ion-checkbox formControlName="term" checked></ion-checkbox>\n\n        </ion-item>\n\n        <div *ngIf="submitted && a[\'term\'].errors" class="invalid-feedback">\n\n          <div *ngIf="a[\'term\'].errors[\'required\']">షరతులు మరియు షరతులు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n    <ion-row>\n\n      <ion-col col-md-12 style="text-align: center;">\n\n        <button type="submit" ion-button class="default-btn user-all-btn" (click)="postjobs()">నమోదు</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addjobs\addjobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], AddjobsPage);
    return AddjobsPage;
}());

//# sourceMappingURL=addjobs.js.map

/***/ })

});
//# sourceMappingURL=41.js.map