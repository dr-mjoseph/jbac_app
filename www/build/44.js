webpackJsonp([44],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddinstitutePageModule", function() { return AddinstitutePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addinstitute__ = __webpack_require__(504);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddinstitutePageModule = /** @class */ (function () {
    function AddinstitutePageModule() {
    }
    AddinstitutePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addinstitute__["a" /* AddinstitutePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addinstitute__["a" /* AddinstitutePage */]),
            ],
        })
    ], AddinstitutePageModule);
    return AddinstitutePageModule;
}());

//# sourceMappingURL=addinstitute.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddinstitutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
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



var AddinstitutePage = /** @class */ (function () {
    function AddinstitutePage(navCtrl, navParams, camera, actionSheetCtrl, formBuilder, service, loadingCtrl, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.imagesdata = [];
        this.getpastorassciationas = [];
        this.minini = false;
        this.submitted = false;
        this.addinginsututies = this.formBuilder.group({
            checkbox: [''],
            believer_id: [''],
            pastor_id: [''],
            institutename: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            collegetype: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            courses: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            phonenumber: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(10)]],
            youtube: [''],
            ministry: [''],
            website: [''],
            image: [''],
            description: [''],
            state_id: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            district_id: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            constituency_id: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            mandal_id: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            village_id: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            location: [''],
            address: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            facebook: [''],
            term: [true],
            ministry_id: [''],
        });
    }
    Object.defineProperty(AddinstitutePage.prototype, "i", {
        get: function () { return this.addinginsututies.controls; },
        enumerable: true,
        configurable: true
    });
    AddinstitutePage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    AddinstitutePage.prototype.pastorfilter = function () {
        var _this = this;
        this.service.getpastor().subscribe(function (res) {
            _this.getpastorassciationas = res && res.data ? res.data : [];
        });
    };
    AddinstitutePage.prototype.ionViewDidLoad = function () {
        this.getbelivers();
        this.pastorfilter();
    };
    AddinstitutePage.prototype.onStateChange = function (event) {
        var _this = this;
        var stateId = event;
        this.addinginsututies.patchValue({
            state_id: stateId,
            district_id: '',
            constituency_id: '',
            mandal_id: '',
            village_id: ''
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
    AddinstitutePage.prototype.getbelivers = function () {
        var _this = this;
        this.service.getbelivers().subscribe(function (res) {
            _this.bliversdata = res.data;
        });
    };
    AddinstitutePage.prototype.getdistric = function () {
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
    AddinstitutePage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.addinginsututies.patchValue({
            constituency_id: '',
            mandal_id: '',
            village_id: ''
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
    AddinstitutePage.prototype.getmandals = function (event) {
        var _this = this;
        var id = event;
        this.addinginsututies.patchValue({
            mandal_id: '',
            village_id: ''
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
    AddinstitutePage.prototype.gepanchayati = function (event) {
        var _this = this;
        var id = event;
        this.addinginsututies.patchValue({
            village_id: ''
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
    AddinstitutePage.prototype.getbeliver = function () {
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
    AddinstitutePage.prototype.churchchange = function (event) {
        this.form = event.target.value;
    };
    AddinstitutePage.prototype.ministryad = function (event) {
        if (event.target.value == "Ministry") {
            this.minini = true;
        }
        else {
            this.minini = false;
        }
    };
    AddinstitutePage.prototype.triggerFileInput = function () {
        var input = document.getElementById('instituteFileInput');
        if (input) {
            input.value = '';
            input.click();
        }
    };
    AddinstitutePage.prototype.triggerCameraInput = function () {
        var input = document.getElementById('instituteCameraInput');
        if (input) {
            input.value = '';
            input.click();
        }
    };
    AddinstitutePage.prototype.onFileSelected = function (event) {
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
                    if (_this.addinginsututies) {
                        _this.addinginsututies.patchValue({ image: e.target.result });
                    }
                });
            };
            reader.readAsDataURL(file);
        }
    };
    AddinstitutePage.prototype.openphoto = function () {
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
                                            if (_this.addinginsututies) {
                                                _this.addinginsututies.patchValue({ image: ing });
                                            }
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
                                            if (_this.addinginsututies) {
                                                _this.addinginsututies.patchValue({ image: img });
                                            }
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
    AddinstitutePage.prototype.belivers = function (inputValue) {
        var val = inputValue.value;
        if (val && val.trim() != '') {
            var reportdata = this.bliversdata.filter(function (item) {
                return (item.fname.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.bliversdata = reportdata;
        }
        else if (val == "") {
            this.getbelivers();
        }
    };
    AddinstitutePage.prototype.postinsututies = function () {
        var _this = this;
        this.submitted = true;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
        });
        this.loading.present();
        if (this.addinginsututies.invalid) {
            alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
            this.loading.dismiss();
        }
        else {
            this.addinginsututies.value.image = this.imagesdata;
            this.addinginsututies.value.usr_id = localStorage.getItem('usr_id');
            this.addinginsututies.value.number = localStorage.getItem('mobile_number');
            this.service.postinsututies(this.addinginsututies.value).subscribe(function (res) {
                if (res.status == 200) {
                    alert('విజయవంతముగా సబ్మిట్ అయింది');
                    _this.addinginsututies.reset();
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
    AddinstitutePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addinstitute',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addinstitute\addinstitute.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b> ఇన్‌స్టిట్యూట్‌లను నమోదు</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="pagecss">\n\n  <form [formGroup]="addinginsututies">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list>\n\n          <ion-label stacked>యొక్క స్వంతం రకం<span style="color:red;"> * </span></ion-label>\n\n          <ion-item>\n\n            <input type="radio" value="1" (click)="churchchange($event)" formControlName="checkbox">\n\n            <label> బెలివర్ </label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="2" (click)="churchchange($event)" formControlName="checkbox" />\n\n            <label> పాస్టర్ </label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 *ngIf="form==1">\n\n        <ion-item>\n\n          <ion-label stacked>బెలివర్ పేరు వెంటనే వెలుపల చేయండి<span style="color:red;">*</span></ion-label>\n\n          <ion-input type="text" (ionInput)="filterbelivers($event.target.value)"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>బెలివర్ <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="believer_id">\n\n            <ion-option value="" disabled selected>బెలివర్ పేరును ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of bliversdata" [value]="item.id">{{item.fname}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && i[\'believer_id\'].errors" class="error-message">\n\n          <div *ngIf="i[\'believer_id\'].errors[\'required\']">బెలివర్ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-list>\n\n          <ion-label stacked>మంత్రి రకం <span style="color:red;"> * </span></ion-label>\n\n          <ion-item>\n\n            <input type="radio" value="Ministry" (click)="ministryad($event)" formControlName="ministry">\n\n            <label> మంత్రికి </label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="Independent Ministry" (click)="ministryad($event)" formControlName="ministry" />\n\n            <label> స్వంత మంత్రి </label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 *ngIf="minini">\n\n        <ion-item>\n\n          <ion-label stacked>మంత్రి</ion-label>\n\n          <ion-select formControlName="ministry_id">\n\n            <ion-option value="" disabled selected>మంత్రిని ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let i of ministryname" [value]="i.id">{{i.ministryname}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ప్రతిష్టానం పేరు <span style="color:red;">*</span></ion-label>\n\n          <ion-input type="text" formControlName="institutename"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && i[\'institutename\'].errors" class="error-message">\n\n          <div *ngIf="i[\'institutename\'].errors[\'required\']">ప్రతిష్టానం పేరు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>కాలేజీ రకం <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="collegetype">\n\n            <ion-option value="" disabled selected>కాలేజీ ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option value="Biblecollege">బైబిల్ కాలేజీ</ion-option>\n\n            <ion-option value="PlaySchool">ప్లే స్కూల్</ion-option>\n\n            <ion-option value="HighSchool">హై స్కూల్</ion-option>\n\n            <ion-option value="Inter">ఇంటర్</ion-option>\n\n            <ion-option value="Degree/Engneering">డిగ్రీ/ఇంజనీరింగ్</ion-option>\n\n            <ion-option value="PGCollege">పిజి కాలేజీ</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && i[\'collegetype\'].errors" class="error-message">\n\n          <div *ngIf="i[\'collegetype\'].errors[\'required\']">కాలేజీ రకం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12 *ngIf="minini">\n\n        <ion-item>\n\n          <ion-label stacked>మంత్రికి</ion-label>\n\n          <ion-select formControlName="ministry_id">\n\n            <ion-option value="" disabled selected>మంత్రిని ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let i of ministryname" [value]="i.id">{{i.ministryname}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>అందించే కోర్సులు <span style="color:red;">*</span></ion-label>\n\n          <ion-input type="text" formControlName="courses"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && i[\'courses\'].errors" class="error-message">\n\n          <div *ngIf="i[\'courses\'].errors[\'required\']">అందించే కోర్సులు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఫోన్ నంబర్ <span style="color:red;">*</span></ion-label>\n\n          <ion-input type="text" formControlName="phonenumber" maxlength="10" minlength="10"\n\n            (ionInput)="numericOnly($event.target.value)"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && i[\'phonenumber\'].errors" class="error-message">\n\n          <div *ngIf="i[\'phonenumber\'].errors[\'required\']">ఫోన్ నంబర్ 1 అవసరం</div>\n\n          <div *ngIf="i[\'phonenumber\'].errors[\'minlength\']">10 అంకెల కనీసం ఉండాలి</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <div class="imgerdt" style="padding: 12px; text-align: center; border: 2px dashed #00548F; border-radius: 8px; background: #fafafa;">\n\n          <img src="assets/icon/upload.svg" style="height: 60px; width: 60px; display: block; margin: 0 auto 6px;">\n\n          <p style="margin: 4px 0 10px; font-weight: bold; color: #00548F; font-size: 14px;">ఇన్‌స్టిట్యూట్ ఫోటో అప్‌లోడ్ చేయండి (Choose File / Camera)</p>\n\n          <input type="file" (change)="onFileSelected($event)" accept="image/*" style="display: block; width: 100%; max-width: 290px; margin: 0 auto 10px; padding: 6px; background: #fff; border: 1px solid #ccc; border-radius: 4px;">\n\n          <button ion-button small outline icon-start type="button" (click)="openphoto()" style="margin: 0 auto; display: inline-block;">\n\n            <ion-icon name="camera"></ion-icon> Camera / Gallery\n\n          </button>\n\n          <div *ngIf="imagesdata.length" style="margin-top: 12px;">\n\n            <img [src]="imagesdata[0].reviewimg" alt="" height="200px" width="200px" style="border-radius: 8px; border: 1px solid #00548F;">\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>చిరునామా<span style="color:red">*</span></ion-label>\n\n          <ion-textarea formControlName="address" placeholder="మీ చిరునామా నమోదు చేయండి"></ion-textarea>\n\n        </ion-item>\n\n        <div *ngIf="submitted && i[\'address\'].errors" class="invalid-feedback">\n\n          <div *ngIf="i[\'address\'].errors[\'required\']">చిరునామా అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>యూట్యూబ్</ion-label>\n\n          <ion-input type="text" formControlName="youtube" placeholder="మీ యూట్యూబ్ లింక్‌ని  నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>వెబ్‌సైట్</ion-label>\n\n          <ion-input type="text" formControlName="website"\n\n            placeholder="మీ వెబ్‌సైట్ లింక్‌ని  నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>వివరణ</ion-label>\n\n          <ion-input type="text" formControlName="description" placeholder="మీ వివరణను నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఫేస్‌బుక్</ion-label>\n\n          <ion-input type="text" formControlName="facebook"\n\n            placeholder="మీ ఫేస్‌బుక్ లింక్‌ని  నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>రాష్ట్రం / State <span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="state_id" (ionChange)="onStateChange($event)">\n\n            <ion-option value="" disabled selected>రాష్ట్రం ఎంచుకోండి</ion-option>\n\n            <ion-option value="1">ఆంధ్రప్రదేశ్ (AP)</ion-option>\n\n            <ion-option value="2">తెలంగాణ (TG)</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && i[\'state_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="i[\'state_id\'].errors[\'required\']">రాష్ట్రం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జిల్లాలు ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="district_id" [disabled]="!addinginsututies.value.state_id" (ionChange)="getconstency($event)">\n\n            <ion-option value="" disabled selected>రకమైనది ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && i[\'district_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="i[\'district_id\'].errors[\'required\']">జిల్లా అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>కన్స్టిచ్యూన్సీ ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="constituency_id" [disabled]="!addinginsututies.value.district_id" (ionChange)="getmandals($event)">\n\n            <ion-option value="" disabled selected>రకమైనది ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && i[\'constituency_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="i[\'constituency_id\'].errors[\'required\']">కన్స్టిచ్యూన్సీ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మండలాన్ని ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="mandal_id" [disabled]="!addinginsututies.value.constituency_id" (ionChange)="gepanchayati($event)">\n\n            <ion-option value="" disabled selected>రకమైనది ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && i[\'mandal_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="i[\'mandal_id\'].errors[\'required\']">మండల అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పంచాయితి ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="village_id" [disabled]="!addinginsututies.value.mandal_id">\n\n            <ion-option value="" disabled selected>రకమైనది ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && i[\'village_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="i[\'village_id\'].errors[\'required\']">గ్రామం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n\n\n      <ion-col col-12 *ngIf="form==2">\n\n        <ion-item>\n\n          <ion-label stacked>పాస్టర్<span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="pastor_id" (click)="pastorfilter()">\n\n            <ion-option value="" disabled selected>పాస్టర్ నామాను ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of getpastorassciationas" [value]="item.id">{{item.pastorname}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && i[\'pastor_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="i[\'pastor_id\'].errors[\'required\']">పాస్టర్ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item stacked>\n\n          <ion-label stacked>లొకేషన్</ion-label>\n\n          <ion-input formControlName="location" type="text" placeholder="మీ లొకేషన్ నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>అవాంతరాలు మరియు షరత్లు<span style="color:red">*</span></ion-label>\n\n          <ion-checkbox formControlName="term"></ion-checkbox>\n\n        </ion-item>\n\n        <div *ngIf="submitted && i[\'term\'].errors" class="invalid-feedback">\n\n          <div *ngIf="i[\'term\'].errors[\'required\']">అవాంతరాలు మరియు షరత్లు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <ion-row>\n\n      <ion-col col-12 style="text-align: center;">\n\n        <button ion-button type="submit" (click)="postinsututies()">శోధించు</button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addinstitute\addinstitute.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], AddinstitutePage);
    return AddinstitutePage;
}());

//# sourceMappingURL=addinstitute.js.map

/***/ })

});
//# sourceMappingURL=44.js.map