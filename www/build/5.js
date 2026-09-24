webpackJsonp([5],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingPageModule", function() { return MeetingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meeting__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MeetingPageModule = /** @class */ (function () {
    function MeetingPageModule() {
    }
    MeetingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__meeting__["a" /* MeetingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meeting__["a" /* MeetingPage */])
            ],
        })
    ], MeetingPageModule);
    return MeetingPageModule;
}());

//# sourceMappingURL=meeting.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalpagePage; });
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


/**
 * Generated class for the ModalpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalpagePage = /** @class */ (function () {
    function ModalpagePage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imageUrl = this.navParams.get('imageUrl');
    }
    ModalpagePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalpage',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\modalpage\modalpage.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons end>\n\n      <button ion-button color="warning" (click)="dismiss()">Close Image</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <img [src]="imageUrl" (click)="dismiss()" class="modal-image" />\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\modalpage\modalpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], ModalpagePage);
    return ModalpagePage;
}());

//# sourceMappingURL=modalpage.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modalpage_modalpage__ = __webpack_require__(458);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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



var MeetingPage = /** @class */ (function () {
    function MeetingPage(navCtrl, navParams, formBuilder, service, alrtcyt, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.alrtcyt = alrtcyt;
        this.modalCtrl = modalCtrl;
        this.fromshow = 1;
        this.showSpinner = false;
        this.searchevents = [];
        this.submitted = false;
        this.meetingfrom = this.formBuilder.group({
            mettingtype: [''],
            denomation_id: [''],
            ministry_id: [''],
            district_id: [''],
            constenncy_id: [''],
            mandal_id: [''],
            panchayati_id: [''],
            startdate: [''],
        });
        this.getdenomations();
        this.getbeliver();
        this.getdistric();
        this.searechevents();
    }
    MeetingPage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    MeetingPage.prototype.getbeliver = function () {
        var _this = this;
        this.service.getbeliversdata().subscribe(function (res) {
            _this.ministryname = res.data;
        });
    };
    MeetingPage.prototype.getdistric = function () {
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
    MeetingPage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
            console.log(_this.constituency);
        });
    };
    MeetingPage.prototype.searchdistric = function (event) {
        var _this = this;
        this.searchdist = event;
        var data = {
            district_id: this.searchdist,
            df: 2
        };
        this.service.searchingdata(data).subscribe(function (res) {
            _this.searchevents = [];
            if (res.status == 200) {
                _this.searchevents = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
                console.log(_this.searchevents);
            }
            else {
                alert('server down');
            }
        }, function (error) {
        });
    };
    MeetingPage.prototype.searchconstenct = function (event) {
        var _this = this;
        this.searchconts = event.value;
        var data = {
            district_id: this.searchdist,
            constenncy_id: this.searchconts,
            df: 3,
        };
        this.service.searchingdata(data).subscribe(function (res) {
            _this.searchevents = [];
            if (res.status == 200) {
                _this.searchevents = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
            }
            else {
                alert('No Data');
            }
        });
    };
    MeetingPage.prototype.getmandals = function (event) {
        var _this = this;
        var id = event;
        this.service.getmandals().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.mandals = res.data.filter(function (data) { return data.const_id == id; });
            }
        });
    };
    MeetingPage.prototype.gepanchayati = function (event) {
        var _this = this;
        var id = event;
        console.log(id);
        this.service.gepanchayatis().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.panchayati = res.data.filter(function (data) { return data.mndl_id == id; });
            }
        });
    };
    MeetingPage.prototype.ministry = function (event) {
        var _this = this;
        this.ministry_id = event;
        var data = {
            ministry_id: event.value,
            denomation: this.searchdeno,
            mettingtype: this.mettingtype,
            speakerone: this.speaks,
            df: 4,
        };
        this.service.searchingdemonationdata(data).subscribe(function (res) {
            _this.searchevents = [];
            if (res.status == 200) {
                _this.searchevents = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
            }
            else {
                alert('server down');
            }
        }, function (error) {
        });
    };
    MeetingPage.prototype.searchdenomationdata = function (event) {
        var _this = this;
        this.searchdeno = event.value;
        var data = {
            denomation: this.searchdeno,
            mettingtype: this.mettingtype,
            df: 2
        };
        this.service.searchingdemonationdata(data).subscribe(function (res) {
            _this.searchevents = [];
            if (res.status == 200) {
                _this.searchevents = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
            }
            else {
                alert('server down');
            }
        }, function (error) {
        });
    };
    MeetingPage.prototype.searchchange = function (event) {
        var _this = this;
        this.mettingtype = event.value;
        var data = {
            mettingtype: event.value,
            df: 1
        };
        this.service.searchingdemonationdata(data).subscribe(function (res) {
            _this.searchevents = [];
            if (res.status == 200) {
                _this.searchevents = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
            }
            else {
                alert('server down');
            }
        });
    };
    MeetingPage.prototype.searchmandals = function (event) {
        var _this = this;
        var data = {
            district_id: this.searchdist,
            constenncy_id: this.searchconts,
            mandal_id: event,
            df: 4,
        };
        this.service.searchingdata(data).subscribe(function (res) {
            _this.searchevents = [];
            if (res.status == 200) {
                _this.searchevents = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
            }
            else {
                alert('server down');
            }
        });
    };
    MeetingPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    MeetingPage.prototype.onSearch = function () {
        if (this.fromshow == 1) {
            this.fromshow = 2;
        }
        else {
            this.fromshow = 1;
        }
    };
    MeetingPage.prototype.onDateChange = function (event) {
        var _this = this;
        this.startdate = event.value;
        var data = { startdate: event.value, df: 5 };
        this.service.searchingdemonationdata(data).subscribe(function (res) {
            _this.searchevents = [];
            if (res.status == 200) {
                _this.searchevents = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
            }
            else {
                alert('server down');
            }
        });
    };
    MeetingPage.prototype.search = function () {
        // this.fromshow = 1
        var _this = this;
        console.log(this.meetingfrom.value);
        this.service.searchingdata(this.meetingfrom.value).subscribe(function (res) {
            _this.searchevents = [];
            if (res.status == 200) {
                _this.searchevents = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
                if (_this.searchevents.length == 0) {
                    alert('ఈ క్యాటగిరీకి సంబంధించిన డేటా లేదు');
                }
            }
            else {
                alert('సర్వర్ డౌన్ వుంది');
            }
        });
    };
    MeetingPage.prototype.searechevents = function () {
        var _this = this;
        this.searchevents = [];
        this.service.getevents().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.searchevents = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
                if (_this.searchevents.length == 0) {
                    alert('No Data Found');
                }
            }
        });
    };
    MeetingPage.prototype.reset = function () {
        this.meetingfrom.reset();
        this.searechevents();
    };
    MeetingPage.prototype.hidefrom = function () {
        this.fromshow = 1;
    };
    MeetingPage.prototype.showAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alrtcyt.create({
                            mode: 'ios',
                            message: 'Link data is not available.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MeetingPage.prototype.tester = function (imageUrl) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modalpage_modalpage__["a" /* ModalpagePage */], { imageUrl: imageUrl });
        modal.present();
    };
    MeetingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meeting',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\meeting\meeting.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="font-family:ramabhadra ;text-align: center;"><b> ఆంధ్రలో జరగబోయే క్రైస్తవ మీటింగ్స్ </b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n  <!-- <h4 style="text-align:center;font-weight: 800;">ఆంధ్ర రాష్ట్రంలోని రాబోయే క్రైస్తవ మీటింగ్స్</h4> -->\n\n  <ion-searchbar (click)="onSearch()" *ngIf="fromshow==1"></ion-searchbar>\n\n\n\n  <form [formGroup]="meetingfrom" class="form-container" *ngIf="fromshow==2">\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>మీ కూటముల టైపు ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="mettingtype" >\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option value="ఉజ్జీవ">ఉజ్జీవ కూటములు</ion-option>\n\n            <ion-option value="సువార్త కూటములు">సువార్త కూటములు</ion-option>\n\n            <ion-option value="ఉపవాస కూటములు">ఉపవాస కూటములు</ion-option>\n\n            <ion-option value="స్వస్థత కూటములు">స్వస్థత కూటములు</ion-option>\n\n            <ion-option value="ఉజ్జీవ స్వస్థత కూటములు">ఉజ్జీవ స్వస్థత కూటములు</ion-option>\n\n            <ion-option value="వార్షికోత్సవ కూటములు">వార్షికోత్సవ కూటములు</ion-option>\n\n            <ion-option value="కృతజ్ఞత స్తుతి కూటములు">కృతజ్ఞత స్తుతి కూటములు</ion-option>\n\n            <ion-option value="ప్రవచన విడుదల కూటములు">ప్రవచన విడుదల కూటములు</ion-option>\n\n            <ion-option value="యూత్ మీటింగ్స్">యూత్ మీటింగ్స్</ion-option>\n\n            <ion-option value="క్రైస్తవ నాయకుల కూటములు">క్రైస్తవ నాయకుల కూటములు</ion-option>\n\n            <ion-option value="స్త్రీల కూటములు">స్త్రీల కూటములు</ion-option>\n\n            <ion-option value="పాస్టర్ ఫెలోషిప్ కూటములు">పాస్టర్ ఫెలోషిప్ కూటములు</ion-option>\n\n            <ion-option value="క్రైస్తవ పిల్లల కూటములు">క్రైస్తవ పిల్లల కూటములు</ion-option>\n\n            <ion-option value="క్రైస్తవ బుక్స్ ఎక్సిబిషన్">క్రైస్తవ బుక్స్ ఎక్సిబిషన్</ion-option>\n\n            <ion-option value="క్రైస్తవ సంగీత కూటములు">క్రైస్తవ సంగీత కూటములు</ion-option>\n\n            <ion-option value="ఇతర కూటములు">ఇతర కూటములు</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>మీ డినామినేషన్ మోడల్ ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="denomation_id" >\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option value="{{item.id}}" *ngFor="let item of denomation">\n\n              {{item.denomation_name}}\n\n            </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <!-- <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>సెలెక్ట్ మినిస్ట్రీ</ion-label>\n\n          <ion-select formControlName="ministry_id" >\n\n            <ion-option value="" disabled selected>సెలెక్ట్ మినిస్ట్రీ</ion-option>\n\n            <ion-option *ngFor="let i of ministryname" [value]="i.id">{{i.ministryname}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col> -->\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label> సమావేశం తేదీ</ion-label>\n\n          <ion-input type="date" formControlName="startdate" [min]="now" (ionChange)="onDateChange($event)"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>జిల్లాను ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="district_id" (ionChange)="getconstency($event)"\n\n            >\n\n            <ion-option value="" disabled selected>జిల్లాను ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>నియోజకవర్గంను ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="constenncy_id" (ionChange)="getmandals($event)">\n\n            <ion-option value="" disabled selected>నియోజకవర్గంను ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>మండలం / మున్సిపాలిటీని ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event)" >\n\n            <ion-option value="" disabled selected>మండలం / మున్సిపాలిటీని ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked> పంచాయతీ / వార్డుని ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="panchayati_id">\n\n            <ion-option value="" disabled selected> పంచాయతీ / వార్డుని ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <button ion-button block (click)="search()">సెర్చ్ చేయండి</button>\n\n      </ion-col>\n\n      <ion-col col-6 style="text-align: center;">\n\n        <button ion-button block (click)="reset()">రీసెట్ సెర్చ్ ఆప్షన్స్</button>\n\n      </ion-col>\n\n      <ion-col col-6 style="text-align: center;">\n\n        <button ion-button block (click)="hidefrom()">క్లోజ్ సెర్చ్ ఆప్షన్</button>\n\n      </ion-col>\n\n      \n\n    </ion-row>\n\n  </form>\n\n\n\n  <ion-row class="card-row">\n\n    <ion-col col-12 *ngFor="let item of searchevents" class="card-col">\n\n      <ion-card class="custom-card">\n\n        <ion-card-header>\n\n          <div class="card-image" (click)="tester(item.image)"  >\n\n            <img *ngIf="item.image" [src]="item.image" alt="Image" class="card-img">\n\n          </div>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <p>మీటింగ్ ప్రారంభ తేదీ: <strong>{{ item.startdate | date }}</strong></p>\n\n          <p>మీటింగ్ చివర తేదీ: <strong>{{ item.enddate | date }}</strong></p>\n\n          <p><b>మీటింగ్ టైపు: {{ item.eventname }} </b></p>\n\n           <!-- <p><b>మీటింగ్ టైపు: {{ item.distrct_nm }} </b></p>  -->\n\n          <!-- <ion-option *ngFor="let item of districts" [value]="districts">{{item.distrct_nm}}</ion-option> -->\n\n\n\n          <ion-buttons class="card-buttons">\n\n            <ng-container >\n\n              <a ion-button *ngIf="item.location" [href]="item.location">\n\n                <ion-icon name="pin"></ion-icon>\n\n              </a>\n\n              <a ion-button *ngIf="item.youtube" [href]="item.youtube">\n\n                <ion-icon name="logo-youtube"></ion-icon>\n\n              </a>\n\n              <a ion-button *ngIf="item.facebook" [href]="item.facebook">\n\n                <ion-icon name="logo-facebook"></ion-icon>\n\n              </a>\n\n              <a ion-button *ngIf="item.eventcontactnumber" [href]="\'tel:+91\' + item.eventcontactnumber">\n\n                <ion-icon name="call"></ion-icon>\n\n              </a>\n\n            </ng-container>\n\n          </ion-buttons>\n\n          <p *ngIf="item.showMore"><b>{{ item.description }}</b></p>\n\n          <button ion-button (click)="item.showMore = !item.showMore" color="danger" *ngIf="!item.showMore">\n\n            మరింత సమాచారం\n\n          </button>\n\n          <button ion-button (click)="item.showMore = !item.showMore" color="danger" *ngIf="item.showMore">\n\n            తక్కువ సమాచారం చూపించు\n\n          </button>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\meeting\meeting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], MeetingPage);
    return MeetingPage;
}());

//# sourceMappingURL=meeting.js.map

/***/ })

});
//# sourceMappingURL=5.js.map