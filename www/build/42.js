webpackJsonp([42],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmarriagePageModule", function() { return AddmarriagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addmarriage__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddmarriagePageModule = /** @class */ (function () {
    function AddmarriagePageModule() {
    }
    AddmarriagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addmarriage__["a" /* AddmarriagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addmarriage__["a" /* AddmarriagePage */]),
            ],
        })
    ], AddmarriagePageModule);
    return AddmarriagePageModule;
}());

//# sourceMappingURL=addmarriage.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmarriagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
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
var AddmarriagePage = /** @class */ (function () {
    function AddmarriagePage(navCtrl, navParams, camera, actionSheetCtrl, formBuilder, service, loadingCtrl, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.imagesdata = [];
        this.pastoras = [];
        this.submitted = false;
        this.addingmarriages = this.formBuilder.group({
            gender: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            status: [''],
            name: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            denomation_id: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            ministry_id: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            believer_id: [''],
            pastor_id: [''],
            image: [''],
            dob: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            work: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            location: [''],
            address: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            description: [''],
            phonenumber: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(10)]],
            state_id: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            districtname: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            constituencyname: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            mandals: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            village_name: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            height: [''],
            color: [''],
            whealth: [''],
            types: [''],
            self: [''],
            term: [true],
            caste: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            subcaste: [''],
            spirti: ['']
        });
    }
    Object.defineProperty(AddmarriagePage.prototype, "m", {
        get: function () { return this.addingmarriages.controls; },
        enumerable: true,
        configurable: true
    });
    AddmarriagePage.prototype.onStateChange = function (event) {
        var _this = this;
        var stateId = event;
        this.addingmarriages.patchValue({
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
    AddmarriagePage.prototype.pastorfilterdropdown = function () {
        var _this = this;
        this.service.getpastor().subscribe(function (res) {
            _this.pastoras = res && res.data ? res.data : [];
        });
    };
    AddmarriagePage.prototype.ionViewDidLoad = function () {
        this.getbeliver();
        this.getbelivers();
        this.pastorfilterdropdown();
        this.getdenomations();
    };
    AddmarriagePage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    AddmarriagePage.prototype.getbelivers = function () {
        var _this = this;
        this.service.getbelivers().subscribe(function (res) {
            _this.bliversdata = res.data;
        });
    };
    AddmarriagePage.prototype.churchchange = function (event) {
        // this.form = event
    };
    AddmarriagePage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    AddmarriagePage.prototype.getdistric = function () {
        var _this = this;
        this.service.getdistrict().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.districts = res.data;
            }
        });
    };
    AddmarriagePage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.addingmarriages.patchValue({
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
    AddmarriagePage.prototype.getmandals = function (event) {
        var _this = this;
        var id = event;
        this.addingmarriages.patchValue({
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
            });
        }
    };
    AddmarriagePage.prototype.gepanchayati = function (event) {
        var _this = this;
        var id = event;
        this.addingmarriages.patchValue({
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
            });
        }
    };
    AddmarriagePage.prototype.getbeliver = function () {
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
    AddmarriagePage.prototype.numericOnly = function (event) {
        var patt = /^([0-9])$/;
        var result = patt.test(event.key);
        return result;
    };
    AddmarriagePage.prototype.triggerFileInput = function () {
        var input = document.getElementById('marriageFileInput');
        if (input) {
            input.value = '';
            input.click();
        }
    };
    AddmarriagePage.prototype.triggerCameraInput = function () {
        var input = document.getElementById('marriageCameraInput');
        if (input) {
            input.value = '';
            input.click();
        }
    };
    AddmarriagePage.prototype.onFileSelected = function (event) {
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
                    if (_this.addingmarriages) {
                        _this.addingmarriages.patchValue({ image: e.target.result });
                    }
                });
            };
            reader.readAsDataURL(file);
        }
    };
    AddmarriagePage.prototype.openphoto = function () {
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
                                            if (_this.addingmarriages) {
                                                _this.addingmarriages.patchValue({ image: ing });
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
                                            if (_this.addingmarriages) {
                                                _this.addingmarriages.patchValue({ image: img });
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
    AddmarriagePage.prototype.postmarriages = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
        });
        this.loading.present();
        this.submitted = true;
        if (this.addingmarriages.invalid) {
            alert('please fiil the details ');
            this.loading.dismiss();
        }
        else {
            var data = {
                description: this.addingmarriages.value.description,
                height: this.addingmarriages.value.height,
                color: this.addingmarriages.value.color,
                work: this.addingmarriages.value.work,
                status: this.addingmarriages.value.status,
                name: this.addingmarriages.value.name,
                dob: this.addingmarriages.value.dob,
                location: this.addingmarriages.value.location,
                address: this.addingmarriages.value.address,
                phonenumber: this.addingmarriages.value.phonenumber,
                districtname: this.addingmarriages.value.districtname,
                constituencyname: this.addingmarriages.value.constituencyname,
                mandals: this.addingmarriages.value.mandals,
                village_name: this.addingmarriages.value.village_name,
                gender: this.addingmarriages.value.gender,
                whealth: this.addingmarriages.value.whealth,
                types: this.addingmarriages.value.types,
                self: this.addingmarriages.value.self,
                reviewImg: this.imagesdata,
                denomation_id: this.addingmarriages.value.denomation_id,
                ministry_id: this.addingmarriages.value.ministry_id,
                caste: this.addingmarriages.value.caste,
                subcaste: this.addingmarriages.value.subcaste,
                pastor_id: this.addingmarriages.value.pastor_id,
                believer_id: this.addingmarriages.value.believer_id,
                spirti: this.addingmarriages.value.spirti,
                usr_id: localStorage.getItem('usr_id'),
            };
            this.service.postingmarriages(data).subscribe(function (res) {
                if (res.status == 200) {
                    alert('విజయవంతముగా సబ్మిట్ అయింది');
                    _this.addingmarriages.reset();
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
    AddmarriagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addmarriage',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addmarriage\addmarriage.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b> వివాహబంధం కోసం నమోదు</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <form [formGroup]="addingmarriages">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మినిస్ట్రీ</ion-label>\n\n          <ion-select formControlName="ministry_id">\n\n            <ion-option value="" disabled selected>మినిస్ట్రీ ఎంపిక చేయండి</ion-option>\n\n            <ion-option *ngFor="let i of ministryname" [value]="i.id">{{i.ministryname}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>కులం</ion-label>\n\n          <ion-select formControlName="caste">\n\n            <ion-option value="" disabled selected>కులం ఎంపిక చేయండి</ion-option>\n\n\n\n            <ion-option value="ఎస్సీ">ఎస్సీ</ion-option>\n\n            <ion-option value="ఎస్టీ">ఎస్టీ</ion-option>\n\n            <ion-option value="బిసి - ఏ">బిసి - ఏ</ion-option>\n\n            <ion-option value="బిసి - బి">బిసి - బి</ion-option>\n\n            <ion-option value="బిసి - సి">బిసి - సి</ion-option>\n\n            <ion-option value="బిసి - డి">బిసి - డి</ion-option>\n\n            <ion-option value="బిసి - ఈ">బిసి - ఈ</ion-option>\n\n            <ion-option value="ఓసి">ఓసి</ion-option>\n\n            <ion-option value="కులం లేదు">కులం లేదు</ion-option>\n\n          </ion-select>\n\n          <!-- <div *ngIf="submitted && m[\'caste\'].errors" class="invalid-feedback">\n\n            <div *ngIf="m[\'caste\'].errors[\'required\']">కులం అవసరం</div>\n\n          </div> -->\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఉప కులం పేరు</ion-label>\n\n          <ion-input type="text" formControlName="subcaste" placeholder="ఉప కులం పేరు నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జెండర్</ion-label>\n\n          <ion-select formControlName="gender">\n\n            <ion-option value="" disabled selected>జెండర్ ఎంపిక చేయండి</ion-option>\n\n            <ion-option value="male">పురుషుడు</ion-option>\n\n            <ion-option value="female">స్త్రీ</ion-option>\n\n            <ion-option value="Transgender">ట్రాన్స్‌ జెండర్</ion-option>\n\n          </ion-select>\n\n          <div *ngIf="submitted && m[\'gender\'].errors" class="invalid-feedback">\n\n            <div *ngIf="m[\'gender\'].errors[\'required\']">జెండర్ ఎంపిక అవసరం</div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-list>\n\n          <ion-label stacked>మీ వివాహ స్థితి</ion-label>\n\n          <ion-item>\n\n            <input type="radio" value="వివాహం కాలేదు" formControlName="status">\n\n            <label>వివాహం కాలేదు</label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="వివాహం అయినది" formControlName="status" />\n\n            <label> వివాహం అయినది </label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="విడాకులు అయినది" formControlName="status" />\n\n            <label> విడాకులు అయినది </label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పేరు(ఇంటి పేరు తో సహా)</ion-label>\n\n          <ion-input type="text" formControlName="name" placeholder="పేరు"\n\n            [ngClass]="{\'is-invalid\': submitted && m[\'name\'].errors }"></ion-input>\n\n          <div *ngIf="submitted && m[\'name\'].errors" class="invalid-feedback">\n\n            <div *ngIf="m[\'name\'].errors[\'required\']">పేరు అవసరం</div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <div class="imgerdt" style="padding: 12px; text-align: center; border: 2px dashed #00548F; border-radius: 8px; background: #fafafa;">\n\n          <img src="assets/icon/upload.svg" style="height: 60px; width: 60px; display: block; margin: 0 auto 6px;">\n\n          <p style="margin: 4px 0 10px; font-weight: bold; color: #00548F; font-size: 14px;">వివాహ ఫోటో అప్‌లోడ్ చేయండి (Choose File / Camera)</p>\n\n          <input type="file" (change)="onFileSelected($event)" accept="image/*" style="display: block; width: 100%; max-width: 290px; margin: 0 auto 10px; padding: 6px; background: #fff; border: 1px solid #ccc; border-radius: 4px;">\n\n          <button ion-button small outline icon-start type="button" (click)="openphoto()" style="margin: 0 auto; display: inline-block;">\n\n            <ion-icon name="camera"></ion-icon> Camera / Gallery\n\n          </button>\n\n          <div *ngIf="imagesdata.length" style="margin-top: 12px;">\n\n            <img [src]="imagesdata[0].reviewimg" alt="" height="200px" width="200px" style="border-radius: 8px; border: 1px solid #00548F;">\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-list>\n\n          <ion-label stacked>మీరు ఎవరు</ion-label>\n\n          <ion-item>\n\n            <input type="radio" [value]="1" (click)="churchchange($event)" formControlName="types">\n\n            <label> విశ్వాసి </label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" [value]="2" (click)="churchchange($event)" formControlName="types" />\n\n            <label> పాస్టర్ </label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-12 *ngIf="addingmarriages.get(\'types\').value === \'1\'">\n\n        <ion-item>\n\n          <ion-label stacked for="church_name">విశ్వాసి పేరు అవసరం</ion-label>\n\n          <ion-input type="text" (input)="filterbelivers($event.target)"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 *ngIf="addingmarriages.get(\'types\').value === \'1\'">\n\n        <ion-item>\n\n          <ion-label stacked>విశ్వాసి</ion-label>\n\n          <ion-select formControlName="believer_id">\n\n            <ion-option value="" disabled selected>విశ్వాసి పేరు ఎంపిక చేయండి</ion-option>\n\n            <ion-option *ngFor="let item of bliversdata" [value]="item.id">{{item.fname}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-list>\n\n          <ion-label stacked>వివాహం సంబంధం ఎవరకి</ion-label>\n\n          <ion-label>వివాహం సంబంధం ఎవరకి ఎంటర్ చేయండి<span style="color:red;"> * </span></ion-label>\n\n          <ion-item>\n\n            <input type="radio" value="self" formControlName="self">\n\n            <label> నా కొరకు </label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="others" formControlName="self" />\n\n            <label> ఇతరుల కొరకు </label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked for="pattern_name">సెలెక్ట్ డినామినేషన్ మోడల్‌ </ion-label>\n\n          <ion-select formControlName="denomation_id">\n\n            <ion-option value="" disabled selected>డినామినేషన్‌ను ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let i of denomation" [value]="i.id">{{i.denomation_name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మినిస్ట్రీ</ion-label>\n\n          <ion-select formControlName="ministry_id">\n\n            <ion-option value="" disabled selected>మినిస్ట్రీ ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let i of ministryname" [value]="i.id">{{i.ministryname}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-list>\n\n          <ion-label>యజమాని రకం<span style="color:red;"> * </span></ion-label>\n\n          <ion-item>\n\n            <input type="radio" value="వివాహం కాలేదు" formControlName="status">\n\n            <label> స్వయం </label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="వివాహం అయినది" formControlName="status" />\n\n            <label> వివాహం అయినది </label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="విడాకులు అయినది" formControlName="status" />\n\n            <label> విడాకులు అయినది </label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పేరు(ఇంటి పేరు తో సహా)</ion-label>\n\n          <ion-input type="text" formControlName="name" placeholder="పేరు"\n\n            [ngClass]="{\'is-invalid\': submitted && m[\'name\'].errors }"></ion-input>\n\n          <div *ngIf="submitted && m[\'name\'].errors" class="invalid-feedback">\n\n            <div *ngIf="m[\'name\'].errors[\'required\']">పేరు అవసరం</div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఆధ్యాత్మిక స్థితి</ion-label>\n\n          <ion-select formControlName="spirti">\n\n            <ion-option value="" selected disabled>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option value="practicingchristian">అభ్యాసమైన క్రిస్తవుడు</ion-option>\n\n            <ion-option value="nominalchristian">సాధారణ క్రిస్తవుడు</ion-option>\n\n            <ion-option value="festivalchristian">పండుగ క్రిస్తవుడు</ion-option>\n\n            <ion-option value="justbelievingjesus">కేవలం యేసుని నమ్మడం</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పుట్టినరోజు తేదీ <span style="color:red;">*</span></ion-label>\n\n          <ion-input type="date" formControlName="dob"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && addingmarriages.controls[\'dob\'].errors" class="error-message">\n\n          <div *ngIf="addingmarriages.controls[\'dob\'].errors[\'required\']">పుట్టినరోజు తేదీ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item stacked>\n\n          <ion-label>పని స్థితి <span style="color:red;">*</span></ion-label>\n\n          <ion-input type="text" formControlName="work"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && addingmarriages.controls[\'work\'].errors" class="error-message">\n\n          <div *ngIf="addingmarriages.controls[\'work\'].errors[\'required\']">పని స్థితి అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఫోన్ నంబర్ <span style="color:red;">*</span></ion-label>\n\n          <ion-input type="tel" formControlName="phonenumber" (keypress)="numericOnly($event)" maxlength="10"\n\n            minlength="10"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && addingmarriages.controls[\'phonenumber\'].errors" class="error-message">\n\n          <div *ngIf="addingmarriages.controls[\'phonenumber\'].errors[\'required\']">ఫోన్ నంబర్ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>వివరణ</ion-label>\n\n          <ion-input type="text" formControlName="description"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఎత్తు</ion-label>\n\n          <ion-input type="text" formControlName="height"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>రంగు</ion-label>\n\n          <ion-input type="text" formControlName="color"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>స్థానం</ion-label>\n\n          <ion-input type="text" formControlName="location"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>చిరునామా <span style="color:red;">*</span></ion-label>\n\n          <ion-input type="text" formControlName="address"\n\n            [ngClass]="{\'is-invalid\': submitted && m[\'address\'].errors }"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && m[\'address\'].errors" class="error-message">\n\n          <div *ngIf="m[\'address\'].errors[\'required\']">చిరునామా అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>రాష్ట్రం / State <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="state_id" (ionChange)="onStateChange($event)">\n\n            <ion-option value="" disabled selected>రాష్ట్రం ఎంచుకోండి</ion-option>\n\n            <ion-option value="1">ఆంధ్రప్రదేశ్ (AP)</ion-option>\n\n            <ion-option value="2">తెలంగాణ (TG)</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && m[\'state_id\'].errors" class="error-message">\n\n          <div *ngIf="m[\'state_id\'].errors[\'required\']">రాష్ట్రం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జిల్లాల ఎంచుకోండి <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="districtname" [disabled]="!addingmarriages.value.state_id" [ngClass]="{\'is-invalid\': submitted && m[\'districtname\'].errors }"\n\n            (ionChange)="getconstency($event)">\n\n            <ion-option value="" selected disabled>రకము ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of districts" [value]="item.id">{{ item.distrct_nm }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && m[\'districtname\'].errors" class="error-message">\n\n          <div *ngIf="m[\'districtname\'].errors[\'required\']">జిల్లా అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>నియోజకవర్గం ఎంచుకోండి <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="constituencyname" [disabled]="!addingmarriages.value.districtname"\n\n            [ngClass]="{\'is-invalid\': submitted && m[\'constituencyname\'].errors }" (ionChange)="getmandals($event)">\n\n            <ion-option value="" selected disabled>నియోజకవర్గం ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of constituency" [value]="item.id">{{ item.const_nm }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && m[\'constituencyname\'].errors" class="error-message">\n\n          <div *ngIf="m[\'constituencyname\'].errors[\'required\']">నియోజకవర్గం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మండలం ఎంచుకోండి <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="mandals" [disabled]="!addingmarriages.value.constituencyname" [ngClass]="{\'is-invalid\': submitted && m[\'mandals\'].errors }"\n\n            (ionChange)="gepanchayati($event)">\n\n            <ion-option value="" selected disabled>రకము ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{ item.mndl_nm }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && m[\'mandals\'].errors" class="error-message">\n\n          <div *ngIf="m[\'mandals\'].errors[\'required\']">మండలం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పంచాయతీల ఎంచుకోండి <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="village_name" [disabled]="!addingmarriages.value.mandals" [ngClass]="{\'is-invalid\': submitted && m[\'village_name\'].errors }">\n\n            <ion-option value="" selected disabled>రకము ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of panchayati" [value]="item.id">{{ item.pnchyt_nm }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && m[\'village_name\'].errors" class="error-message">\n\n          <div *ngIf="m[\'village_name\'].errors[\'required\']">పంచాయితి అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ధనం</ion-label>\n\n          <ion-input type="text" formControlName="whealth"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 *ngIf="form==2">\n\n        <ion-item>\n\n          <ion-label stacked>పాస్టర్</ion-label>\n\n          <ion-select formControlName="pastor_id" (click)="pastorfilterdropdown()">\n\n            <ion-option value="" selected disabled>పాస్టర్ పేరు ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of pastoras" [value]="item.id">{{ item.pastorname }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>షరతులు మరియు షరతులు <span style="color:red;">*</span></ion-label>\n\n          <ion-checkbox formControlName="term" checked></ion-checkbox>\n\n        </ion-item>\n\n        <div *ngIf="submitted && m[\'term\'].errors" class="error-message">\n\n          <div *ngIf="m[\'term\'].errors[\'required\']">షరతులు మరియు షరతులు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 style="text-align: center;">\n\n      <button ion-button color="primary" (click)="postmarriages()">నమోదు</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addmarriage\addmarriage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], AddmarriagePage);
    return AddmarriagePage;
}());

//# sourceMappingURL=addmarriage.js.map

/***/ })

});
//# sourceMappingURL=42.js.map