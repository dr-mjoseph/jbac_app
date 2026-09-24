webpackJsonp([45],{

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddattacksPageModule", function() { return AddattacksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addattacks__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddattacksPageModule = /** @class */ (function () {
    function AddattacksPageModule() {
    }
    AddattacksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addattacks__["a" /* AddattacksPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addattacks__["a" /* AddattacksPage */]),
            ],
        })
    ], AddattacksPageModule);
    return AddattacksPageModule;
}());

//# sourceMappingURL=addattacks.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddattacksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(246);
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



var AddattacksPage = /** @class */ (function () {
    function AddattacksPage(navCtrl, navParams, camera, actionSheetCtrl, formBuilder, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.submitted = false;
        this.imagesData = [];
        this.documentarray = [];
        this.filenamearray = [];
        this.form = this.formBuilder.group({
            image: [''],
            videoa: [''],
            videob: [''],
            document: [''],
            address: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            victim1num: [''],
            victim2num: [''],
            victim1name: [''],
            victim2name: [''],
            attacker1num: [''],
            attacker2num: [''],
            attacker1name: [''],
            attacker2name: [''],
            noteondescription: [''],
            audio: [''],
            district_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            constituency_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            mandal_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            village_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            term: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        this.form.reset();
    }
    AddattacksPage.prototype.openphoto = function () {
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
                                                reviewImg: ing,
                                                filetype: 'jpeg',
                                            };
                                            _this.imagesData.push(imagedata);
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
                                                reviewImg: img,
                                                filetype: 'jpeg',
                                            };
                                            console.log(imagedata);
                                            _this.imagesData.push(imagedata);
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
    AddattacksPage.prototype.ionViewDidLoad = function () {
        this.getdistric();
    };
    AddattacksPage.prototype.getdistric = function () {
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
    AddattacksPage.prototype.getmandals = function (event) {
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
    AddattacksPage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    AddattacksPage.prototype.gepanchayati = function (event) {
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
    AddattacksPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    AddattacksPage.prototype.onSelectFile = function (event) {
        var _this = this;
        var file = event.target.files && event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            if (file.type.indexOf('image') > -1) {
                this.format = 'image';
            }
            else if (file.type.indexOf('video') > -1) {
                this.format = 'video';
            }
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
        }
    };
    AddattacksPage.prototype.onSelectFileb = function (event) {
        var _this = this;
        var file = event.target.files && event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            if (file.type.indexOf('image') > -1) {
                this.formatb = 'image';
            }
            else if (file.type.indexOf('video') > -1) {
                this.formatb = 'video';
            }
            reader.onload = function (event) {
                _this.urlb = event.target.result;
            };
        }
    };
    AddattacksPage.prototype.onSelectFiledoc = function (event) {
        var _this = this;
        var file = event.target.files && event.target.files[0];
        var name = event.target.files[0].name;
        if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (event) {
                _this.urldoc = event.target.result;
                _this.documentarray.push({ reviewimg: _this.urldoc, filetype: name });
                _this.filenamearray.push({ name: name });
            };
        }
    };
    AddattacksPage.prototype.onSelectFileaudio = function (event) {
        var _this = this;
        var file = event.target.files && event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            if (file.type.indexOf('image') > -1) {
                this.formataudio = 'image';
            }
            else if (file.type.indexOf('audio') > -1) {
                this.formataudio = 'audio';
            }
            reader.onload = function (event) {
                _this.urlaudio = event.target.result;
            };
        }
    };
    // Accept Input As a Number Only
    AddattacksPage.prototype.numericOnly = function (event) {
        var patt = /^([0-9])$/;
        var result = patt.test(event.key);
        return result;
    };
    AddattacksPage.prototype.postattacks = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
        });
        this.loading.present();
        if (this.form.invalid) {
            alert('please fiil the details ');
            this.loading.dismiss();
        }
        else {
            this.form.value.image = this.imagesData;
            this.form.value.videoa = this.url;
            this.form.value.videob = this.urlb;
            this.form.value.document = this.documentarray;
            this.form.value.audio = this.urlaudio;
            this.form.value.usr_id = localStorage.getItem('usr_id');
            this.form.value.username = localStorage.getItem('name');
            this.form.value.usernumber = localStorage.getItem('mobile_number');
            console.log(this.form.value);
            this.service.postattacks(this.form.value).subscribe(function (res) {
                if (res.status == 200) {
                    alert('విజయవంతముగా సబ్మిట్ అయింది');
                    _this.form.reset();
                    _this.imagesData = [];
                    _this.url = [];
                    _this.urlb = [];
                    _this.documentarray = [];
                    _this.urlaudio = [];
                    _this.loading.dismiss();
                }
                else {
                    alert('server down');
                    _this.loading.dismiss();
                }
            });
        }
    };
    AddattacksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addattacks',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addattacks\addattacks.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b> క్రైస్తవులపై దాడుల నమోదు </b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n  <form [formGroup]="form">\n\n    <ion-row>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>అప్లోడ్ దాడులకు సంబంధించిన ఫోటోలు</ion-label>\n\n        </ion-item>\n\n        <div class="imgerdt"  (click)="openphoto()" >\n\n          <img src="assets/icon/upload.svg"style="height:70px;width:70px;">3 ఫోటోలు వరకు చేయవచ్చు.\n\n          <div *ngIf="imagesData.length">\n\n            <div *ngFor="let item of imagesData; let i = index">\n\n              <img src="{{item.reviewImg}}" style="padding: 3px;" height="100px" width="100px">\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <div class="imgerdt" style="padding:6px 4px">\n\n          <ion-label stacked> అప్లోడ్ దాడులకు సంబందించిన వీడియో 1</ion-label>\n\n          <input type="file" (change)="onSelectFile($event)" formControlName="videoa">\n\n          <video *ngIf="format === \'video\' && url" [src]="url" height="200" controls></video>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <div class="imgerdt" style="padding:6px 4px">\n\n          <ion-label stacked> అప్లోడ్ దాడులకు సంబందించిన వీడియో 2</ion-label>\n\n          <input type="file" (change)="onSelectFileb($event)" formControlName="videob">\n\n          <video *ngIf="formatb === \'video\' && url" [src]="urlb" height="200" controls></video>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <div class="imgerdt" style="padding:6px 4px">\n\n          <ion-label stacked> అప్లోడ్ దాడులకు సంబందించిన డాక్యుమెంట్ లేదా పోలీస్ కంప్లైంట్ pdf ఫార్మాట్ లో మాత్రమే</ion-label>\n\n          <input type="file" (change)="onSelectFiledoc($event)" formControlName="document">\n\n          <div class="center">\n\n            <div *ngFor="let i of filenamearray;let t = index;">\n\n              <div>{{ t + 1 }}.{{i.name}}</div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>బాదిత క్రైస్తవుడు-1 ఫోన్ నెంబర్</ion-label>\n\n          <ion-input type="tel" formControlName="victim1num" maxlength="10" minlength="10"\n\n            (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>బాదిత క్రైస్తవుడు-2 ఫోన్ నెంబర్</ion-label>\n\n          <ion-input type="tel" formControlName="victim2num" maxlength="10" minlength="10"\n\n            (keypress)="numericOnly($event)" ></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>బాదిత క్రైస్తవుడు-1  పేరు(ఇంటి పేరు తో సహా)</ion-label>\n\n          <ion-input type="text" formControlName="victim1name" ></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>బాదిత క్రైస్తవుడు-2  పేరు(ఇంటి పేరు తో సహా)</ion-label>\n\n          <ion-input type="text" formControlName="victim2name" ></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>దాడి చేసిన వ్యక్తి-1 ఫోన్ నెంబర్ </ion-label>\n\n          <ion-input type="tel" formControlName="attacker1num" maxlength="10" minlength="10"\n\n            (keypress)="numericOnly($event)" ></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>దాడి చేసిన వ్యక్తి-2 ఫోన్ నెంబర్ </ion-label>\n\n          <ion-input type="tel" formControlName="attacker2num" maxlength="10" minlength="10"\n\n(keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>దాడి చేసిన వ్యక్తి-1 పేరు(ఇంటి పేరు తో సహా)</ion-label>\n\n          <ion-input type="text" formControlName="attacker1name"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>దాడి చేసిన వ్యక్తి-2 పేరు(ఇంటి పేరు తో సహా)</ion-label>\n\n          <ion-input type="text" formControlName="attacker2name" ></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>దాడి గురుంచి మరింత సమాచారం రాయండి</ion-label>\n\n          <ion-textarea formControlName="noteondescription" ></ion-textarea>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>\n\n            మీ అడ్రస్<span style="color: red;">*</span>\n\n          </ion-label>\n\n          <ion-textarea formControlName="address" placeholder="Attack Address"></ion-textarea>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>వాయిస్ రికార్డు ఉంటే అప్లోడ్ చేయండి&nbsp;</ion-label>\n\n          <ion-input type="file" (change)="onSelectFileaudio($event)" formControlName="audio"></ion-input>\n\n          <audio [src]="urlaudio" *ngIf="formataudio===\'audio\' && urlaudio" controls></audio>\n\n        </ion-item>\n\n      </ion-col>\n\n      \n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> జిల్లా సెలెక్ట్ చేయండి <span style="color: red;">*</span></ion-label>\n\n          <ion-select formControlName="district_id" (ionChange)="getconstency($event);">\n\n            <ion-option value="" disabled selected>క్లిక్ చేసి జిల్లా సెలెక్ట్ చేయండి</ion-option>\n\n            <ion-option *ngFor="let item of districts" [value]="item.id">{{ item.distrct_nm\n\n              }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> నియోజకవర్గం సెలెక్ట్ చేయండి*<span style="color: red;">*</span></ion-label>\n\n          <ion-select formControlName="constituency_id" (ionChange)="getmandals($event);">\n\n            <ion-option value="" disabled selected>క్లిక్ చేసి నియోజకవర్గం సిలెక్ట్ చేయండి</ion-option>\n\n            <ion-option *ngFor="let item of constituency" [value]="item.id">{{ item.const_nm\n\n              }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> మండలంను సెలెక్ట్ చేయండి<span style="color: red;">*</span></ion-label>\n\n          <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event);">\n\n            <ion-option value="" disabled selected>క్లిక్ చేసి మండలంను సెలెక్ట్ చేయండి</ion-option>\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{ item.mndl_nm }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> పంచాయితీ సెలెక్ట్ చేయండి *<span style="color: red;">*</span></ion-label>\n\n          <ion-select formControlName="village_id">\n\n            <ion-option value="" disabled selected>క్లిక్ చేసి పంచాయితీ సెలెక్ట్ చేయండి</ion-option>\n\n            <ion-option *ngFor="let item of panchayati" [value]="item.id">{{ item.pnchyt_nm }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <div class="imgerdt" style="padding: 0px 3px;">\n\n          <ion-label> ఈ విషయములో మీ సహాయం కొరకు ఇష్టపడుతున్నాము\n\n            అవును సెలెక్ట్ చేయండి <span style="color: red;">*</span></ion-label>\n\n          <ion-checkbox formControlName="term"> </ion-checkbox> అవును\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <div style="text-align: center;">\n\n          <button ion-button color="secondary" (click)="postattacks()" style="letter-spacing: 1px;">సబ్మిట్</button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addattacks\addattacks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], AddattacksPage);
    return AddattacksPage;
}());

//# sourceMappingURL=addattacks.js.map

/***/ })

});
//# sourceMappingURL=45.js.map