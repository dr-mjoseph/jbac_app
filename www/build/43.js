webpackJsonp([43],{

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddchurchtimingsPageModule", function() { return AddchurchtimingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addchurchtimings__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddchurchtimingsPageModule = /** @class */ (function () {
    function AddchurchtimingsPageModule() {
    }
    AddchurchtimingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addchurchtimings__["a" /* AddchurchtimingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addchurchtimings__["a" /* AddchurchtimingsPage */]),
            ],
        })
    ], AddchurchtimingsPageModule);
    return AddchurchtimingsPageModule;
}());

//# sourceMappingURL=addchurchtimings.module.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddchurchtimingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
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


// import { HomePage } from '../home/home';



var AddchurchtimingsPage = /** @class */ (function () {
    function AddchurchtimingsPage(navCtrl, navParams, camera, actionSheetCtrl, formBuilder, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.submitted = false;
        this.getchurchstudentfilter = [];
        this.addingchurchtimimngs = this.formBuilder.group({
            service_name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            day: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            time_start: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            time_end: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            church: [''],
            district_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            constituency_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            mandal_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            streetname: [''],
        });
    }
    Object.defineProperty(AddchurchtimingsPage.prototype, "c", {
        get: function () { return this.addingchurchtimimngs.controls; },
        enumerable: true,
        configurable: true
    });
    AddchurchtimingsPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    AddchurchtimingsPage.prototype.ionViewDidLoad = function () {
        this.getdistric();
    };
    AddchurchtimingsPage.prototype.getdistric = function () {
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
    AddchurchtimingsPage.prototype.getmandals = function (event) {
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
    AddchurchtimingsPage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    AddchurchtimingsPage.prototype.gepanchayati = function (event) {
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
    AddchurchtimingsPage.prototype.filterchurchdata = function () {
        var _this = this;
        if (this.addingchurchtimimngs.value.district_id == '' || this.addingchurchtimimngs.value.constituency_id == '' || this.addingchurchtimimngs.value.mandal_id == '') {
            alert("Please Fill the Districts & Constituency");
        }
        else {
            var data = {
                districts: this.addingchurchtimimngs.value.district_id,
                constituencyname: this.addingchurchtimimngs.value.constituency_id,
                mandal_id: this.addingchurchtimimngs.value.mandal_id,
            };
            this.service.getchurchesdatafilters(data).subscribe(function (res) {
                _this.getchurchstudentfilter = res.data;
                _this.StreetVar = res.data[0].street;
                console.log(res.data);
                console.log(_this.StreetVar);
            });
        }
    };
    AddchurchtimingsPage.prototype.cheurch = function () {
        if (this.getchurchstudentfilter.length == 0) {
            if (this.addingchurchtimimngs.value.district_id == '') {
                var confirm_1 = this.actionSheetCtrl.create({
                    title: 'జిల్లా ఎంచుకోండి'
                });
                confirm_1.present();
            }
            else if (this.addingchurchtimimngs.value.constituency_id == '') {
                var confirm_2 = this.actionSheetCtrl.create({
                    title: 'నియోజకవర్గాన్ని ఎంచుకోండి'
                });
                confirm_2.present();
            }
            else if (this.addingchurchtimimngs.value.mandal_id == '') {
                var confirm_3 = this.actionSheetCtrl.create({
                    title: 'మండలాన్ని ఎంచుకోండి'
                });
                confirm_3.present();
            }
        }
    };
    AddchurchtimingsPage.prototype.postchurchtimings = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
        });
        this.loading.present();
        this.submitted = true;
        if (this.addingchurchtimimngs.invalid) {
            alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి');
            this.loading.dismiss();
        }
        else {
            var data = {
                service_name: this.addingchurchtimimngs.value.service_name,
                day: this.addingchurchtimimngs.value.day,
                time_start: this.addingchurchtimimngs.value.time_start,
                time_end: this.addingchurchtimimngs.value.time_end,
                description: this.addingchurchtimimngs.value.description,
                church: this.addingchurchtimimngs.value.church,
                usr_id: localStorage.getItem('usr_id'),
                mobile_number: localStorage.getItem('mobile_number'),
                name: localStorage.getItem('name'),
                district_id: this.addingchurchtimimngs.value.district_id,
                constituency_id: this.addingchurchtimimngs.value.constituency_id,
                mandal_id: this.addingchurchtimimngs.value.mandal_id,
            };
            this.service.postchurchmeetings(data).subscribe(function (res) {
                if (res.status == 200) {
                    alert('విజయవంతముగా సబ్మిట్ అయింది');
                    _this.addingchurchtimimngs.reset();
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
    AddchurchtimingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addchurchtimings',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addchurchtimings\addchurchtimings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>చర్చి సమయాలను జోడించండి</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <form [formGroup]="addingchurchtimimngs">\n\n    <ion-row>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సేవా రోజు *</ion-label>\n\n          <ion-select formControlName="day">\n\n            <ion-option value="">రోజు ఎంచుకోండి</ion-option>\n\n            <ion-option value="Sunday">ఆదివారం</ion-option>\n\n            <ion-option value="Monday">సోమవారం</ion-option>\n\n            <ion-option value="Tuesday">మంగళవారం</ion-option>\n\n            <ion-option value="Wednesday">బుధవారం</ion-option>\n\n            <ion-option value="Thursday">గురువారం</ion-option>\n\n            <ion-option value="Friday">శుక్రవారం</ion-option>\n\n            <ion-option value="Saturday">శనివారం</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="addingchurchtimimngs.get(\'day\').hasError(\'required\') && submitted">\n\n          <p style="color: red">రోజు అవసరం</p>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సేవా పేరు *</ion-label>\n\n          <ion-select formControlName="service_name">\n\n            <ion-option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option value="FIRST">మొదటి</ion-option>\n\n            <ion-option value="SECOND">రెండవ</ion-option>\n\n            <ion-option value="THIRD">మూడవ</ion-option>\n\n            <ion-option value="FOURTH">నాలుగవ</ion-option>\n\n            <ion-option value="FIFTH">ఐదవ</ion-option>\n\n            <ion-option value="WOMENS MEETING">మహిళల సభ</ion-option>\n\n            <ion-option value="MENS MEETING">పురుషుల సభ</ion-option>\n\n            <ion-option value="YOUTH MEETING">యువత సభ</ion-option>\n\n            <ion-option value="FASTING PRAYER">ఉపవాస ప్రార్థన</ion-option>\n\n            <ion-option value="SUNDAY SCHOOL">ఆదివార పాఠశాల</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="addingchurchtimimngs.get(\'service_name\').hasError(\'required\') && submitted">\n\n          <p style="color: red">సేవా పేరు అవసరం</p>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label stacked>ప్రారంభ సమయం (24 గంటల ఫార్మాట్) *</ion-label>\n\n            <ion-input type="time" formControlName="time_start"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <span style="font-family:monospace;font-weight:bold;padding: 4px;">\n\n              <b>12 గంటల ఫార్మాట్ సమయం : {{starttime}} -{{starttimea}}</b></span>\n\n          </ion-item>\n\n          <ion-item *ngIf="addingchurchtimimngs.get(\'time_start\').hasError(\'required\') && submitted">\n\n            <p style="color: red">ప్రారంభ సమయం అవసరం</p>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label stacked>ముగింపు సమయం (24 గంటల ఫార్మాట్) *</ion-label>\n\n            <ion-input type="time" formControlName="time_end"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <span style="font-family:monospace;font-weight:bold;padding: 4px;">\n\n              <b>12 గంటల ఫార్మాట్ సమయం : {{endtime}} - {{endtimea}}</b></span>\n\n          </ion-item>\n\n          <ion-item *ngIf="addingchurchtimimngs.get(\'time_end\').hasError(\'required\') && submitted">\n\n            <p style="color: red">ముగింపు సమయం అవసరం</p>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 class="mb-4 pb-2">\n\n        <ion-item>\n\n          <ion-label stacked>జిల్లాలను ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="district_id" (ionChange)="getconstency($event)">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && c[\'district_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="c[\'district_id\'].errors[\'required\']">జిల్లా అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 class="mb-4 pb-2">\n\n        <ion-item>\n\n          <ion-label stacked>నియోజకవర్గం ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="constituency_id" (ionChange)="getmandals($event)">\n\n            <ion-option value="" disabled selected>నియోజకవర్గం ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && c[\'constituency_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="c[\'constituency_id\'].errors[\'required\']">మండలా అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 class="mb-4 pb-2">\n\n        <ion-item>\n\n          <ion-label stacked>మండలాను ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event);" (click)="filterchurchdata();">\n\n            <ion-option value="" disabled selected>మండలo ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && c[\'mandal_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="c[\'mandal_id\'].errors[\'required\']">మండలా అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>వీధి పేరు<span style="color:red">*</span></ion-label>\n\n          <ion-input formControlName="streetname"  placeholder="వీధి పేరు"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 class="mb-4 pb-2">\n\n        <ion-item>\n\n          <ion-label stacked>చర్చును ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="church" (click)=\'cheurch()\' >\n\n            <ion-option value="" disabled selected>చర్చు పేరును ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of getchurchstudentfilter" [value]="item.id">{{item.church_name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && c[\'church\'].errors" class="invalid-feedback">\n\n          <div *ngIf="c[\'church\'].errors[\'required\']">చర్చు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ చర్చు గురించి ఇతర సమాచారం</ion-label>\n\n          <ion-input formControlName="description" placeholder="వివరణ"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && c[\'description\'].errors" class="invalid-feedback">\n\n          <div *ngIf="c[\'description\'].errors[\'required\']">వివరణ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 style="text-align: center;">\n\n        <button ion-button block (click)="postchurchtimings()" type="submit">సబ్మిట్</button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addchurchtimings\addchurchtimings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], AddchurchtimingsPage);
    return AddchurchtimingsPage;
}());

//# sourceMappingURL=addchurchtimings.js.map

/***/ })

});
//# sourceMappingURL=43.js.map