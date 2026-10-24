webpackJsonp([12],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentPageModule", function() { return StudentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student__ = __webpack_require__(511);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudentPageModule = /** @class */ (function () {
    function StudentPageModule() {
    }
    StudentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__student__["a" /* StudentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__student__["a" /* StudentPage */]),
            ],
        })
    ], StudentPageModule);
    return StudentPageModule;
}());

//# sourceMappingURL=student.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(44);
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





/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentPage = /** @class */ (function () {
    function StudentPage(navCtrl, formBuilder, service, alertCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.showSpinner = false;
        this.denomation = [];
        this.submitted = false;
        this.constituency1 = [];
        this.mandals1 = [];
        this.panchayati1 = [];
        this.resDistricts = [];
        this.states = [
            { id: 1, state_name: 'ఆంధ్రప్రదేశ్ (Andhra Pradesh - AP)' },
            { id: 2, state_name: 'తెలంగాణ (Telangana - TG)' }
        ];
        this.wingtype = false;
        this.studentform = this.formBuilder.group({
            studentname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            number: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            study: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            schname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            fathername: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            aboutyourself: [''],
            nativeplace: [''],
            caste: [''],
            talent: [''],
            tmarks: [''],
            mmarks: [''],
            branch: [''],
            state_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            district_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            constituency_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            mandal_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            village_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            retypepassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            church: ['',],
            pastor: [''],
            leadership: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            leadertype: ['2'],
            generaltype: [''],
            wingtype: ['',],
            wingtypes: [''],
            dob: [''],
            denomination_id: [''],
            hobbies: [''],
            spirti: [''],
            lifegoal: [''],
            whatsappnumber: [''],
            nri: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            ward: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            wardnumber: [''],
            villagename: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            respanchayati: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            resmandals: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            resconstituencyname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            res_state_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            resdistricts: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            god: [''],
            term: [true],
            mother: [''],
            orphon: [''],
            subcaste: [''],
            gender: ['']
        });
        var datePipe = new __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]('en-Us');
        this.now = datePipe.transform(new Date(), 'yyyy-MM-dd');
    }
    StudentPage.prototype.ionViewDidLoad = function () {
        this.getdenomations();
        this.getwing();
    };
    StudentPage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    StudentPage.prototype.getstates = function () {
        var _this = this;
        this.service.getstates().subscribe(function (res) {
            if (res && res.data) {
                _this.states = res.data;
            }
        });
    };
    StudentPage.prototype.onStateChange = function (event) {
        this.studentform.patchValue({
            state_id: event,
            district_id: '',
            constituency_id: '',
            mandal_id: '',
            village_id: ''
        });
        this.districts = [];
        this.constituency = [];
        this.mandals = [];
        this.panchayati = [];
        this.getdistric(event);
    };
    StudentPage.prototype.onResStateChange = function (event) {
        this.studentform.patchValue({
            res_state_id: event,
            resdistricts: '',
            resconstituencyname: '',
            resmandals: '',
            respanchayati: ''
        });
        this.resDistricts = [];
        this.constituency1 = [];
        this.mandals1 = [];
        this.panchayati1 = [];
        this.getresdistric(event);
    };
    StudentPage.prototype.getdistric = function (stateId) {
        var _this = this;
        var sid = stateId || (this.studentform.get('state_id') ? this.studentform.get('state_id').value : 1);
        this.service.getdistrict(sid).subscribe(function (res) {
            _this.districts = res.data;
        });
    };
    StudentPage.prototype.getresdistric = function (stateId) {
        var _this = this;
        var sid = stateId || (this.studentform.get('res_state_id') ? this.studentform.get('res_state_id').value : 1);
        this.service.getdistrict(sid).subscribe(function (res) {
            _this.resDistricts = res.data;
        });
    };
    StudentPage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.studentform.patchValue({
            constituency_id: '',
            mandal_id: '',
            village_id: ''
        });
        this.constituency = [];
        this.mandals = [];
        this.panchayati = [];
        if (!id)
            return;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    StudentPage.prototype.getconstency1 = function (event) {
        var _this = this;
        var id = event;
        this.studentform.patchValue({
            resconstituencyname: '',
            resmandals: '',
            respanchayati: ''
        });
        this.constituency1 = [];
        this.mandals1 = [];
        this.panchayati1 = [];
        if (!id)
            return;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency1 = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    StudentPage.prototype.getmandals = function (event) {
        var _this = this;
        var id = event;
        this.studentform.patchValue({
            mandal_id: '',
            village_id: ''
        });
        this.mandals = [];
        this.panchayati = [];
        if (!id)
            return;
        this.service.getmandals().subscribe(function (res) {
            _this.mandals = res.data.filter(function (data) { return data.const_id == id; });
        });
    };
    StudentPage.prototype.getmandals1 = function (event) {
        var _this = this;
        var id = event;
        this.studentform.patchValue({
            resmandals: '',
            respanchayati: ''
        });
        this.mandals1 = [];
        this.panchayati1 = [];
        if (!id)
            return;
        this.service.getmandals().subscribe(function (res) {
            _this.mandals1 = res.data.filter(function (data) { return data.const_id == id; });
        });
    };
    StudentPage.prototype.gepanchayati = function (event) {
        var _this = this;
        var id = event;
        this.studentform.patchValue({
            village_id: ''
        });
        this.panchayati = [];
        if (!id)
            return;
        this.service.gepanchayatis().subscribe(function (res) {
            _this.panchayati = res.data.filter(function (data) { return data.mndl_id == id; });
        });
    };
    StudentPage.prototype.gepanchayati1 = function (event) {
        var _this = this;
        var id = event;
        this.studentform.patchValue({
            respanchayati: ''
        });
        this.panchayati1 = [];
        if (!id)
            return;
        this.service.gepanchayatis().subscribe(function (res) {
            _this.panchayati1 = res.data.filter(function (data) { return data.mndl_id == id; });
        });
    };
    StudentPage.prototype.onradioleadertyperajkumar = function (event) {
        if (event.target.value == "YES") {
            this.wingtype = true;
        }
        else {
            this.wingtype = false;
        }
    };
    StudentPage.prototype.getwing = function () {
        var _this = this;
        this.service.getwing().subscribe(function (res) {
            _this.wings = res.data;
        });
    };
    StudentPage.prototype.onparent = function (event) {
        var parents = event.target.value;
        if (parents == 'YES') {
            this.father = true;
        }
        else {
            this.father = false;
        }
    };
    StudentPage.prototype.submitForm = function () {
        this.submitted = true;
        if (this.studentform.valid) {
            // Submit logic here
        }
    };
    StudentPage.prototype.numericOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        return charCode >= 48 && charCode <= 57;
    };
    StudentPage.prototype.gotohome = function () {
        this.navCtrl.push('FormsPage');
    };
    StudentPage.prototype.poststudentsignup = function () {
        var _this = this;
        this.showSpinner = true;
        this.submitted = true;
        if (!this.studentform.get('term') || !this.studentform.get('term').value) {
            this.studentform.patchValue({ term: true });
        }
        if (this.studentform.invalid) {
            var confirm_1 = this.alertCtrl.create({
                mode: 'ios',
                title: 'దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి.!'
            });
            confirm_1.present();
            setTimeout(function () { confirm_1.dismiss(); }, 2000);
        }
        else if (this.studentform.value.password != this.studentform.value.retypepassword) {
            var confirm_2 = this.alertCtrl.create({
                mode: 'ios',
                title: 'Passwords are Unmatched.!'
            });
            confirm_2.present();
            setTimeout(function () { confirm_2.dismiss(); }, 2000);
        }
        else {
            this.service.poststudentsignup(this.studentform.value).subscribe(function (res) {
                _this.showSpinner = false;
                if (res.status == 451) {
                    alert('ఇదే ఫోన్ నెంబర్ తో ఇంతకుముందే రిజిస్టర్ అయ్యారు');
                }
                else
                    _this.showSpinner = false;
                if (res.status == 200) {
                    alert('విజయవంతముగా సబ్మిట్ అయింది');
                    _this.studentform.reset({
                        term: true
                    });
                    _this.mandals = [];
                    _this.constituency = [];
                    _this.panchayati = [];
                    _this.submitted = false;
                }
                else {
                    alert('server down');
                }
            });
        }
    };
    StudentPage.prototype.getchurch = function () {
        var _this = this;
        this.service.getchurch().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else
                _this.showSpinner = false;
            if (res.status == 200) {
                _this.church = res.data;
            }
        });
    };
    StudentPage.prototype.getchurchesstudentdata = function () {
        var _this = this;
        if (this.studentform.value.resdistricts == null || this.studentform.value.resconstituencyname == null || this.studentform.value.resmandals == null) {
            alert("Please Fill the Districts, Constituency & Mandal");
        }
        else {
            var data = {
                districts: this.studentform.value.resdistricts,
                constituencyname: this.studentform.value.resconstituencyname,
                mandal_id: this.studentform.value.resmandals,
            };
            this.service.getchurchesdatafilters(data).subscribe(function (res) {
                _this.getchurchstudentfilter = res.data;
            });
        }
    };
    StudentPage.prototype.getpastorssdata = function () {
        var _this = this;
        if (this.studentform.value.resdistricts == null || this.studentform.value.resconstituencyname == null || this.studentform.value.resmandals == null) {
            alert("Please Fill the Districts, Constituency & Mandal");
        }
        else {
            var data = {
                districts: this.studentform.value.resdistricts,
                constituencyname: this.studentform.value.resconstituencyname,
                mandal_id: this.studentform.value.resmandals
            };
            this.service.getpastorsfilters(data).subscribe(function (res) {
                _this.getstudentspastors = res.data;
            });
        }
    };
    StudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-student',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\student\student.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>విద్యార్థి రిజిస్ట్రేషన్</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <form [formGroup]="studentform">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>విద్యార్థి పేరు (ఇంటి పేరు తో సహా)<span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-input formControlName="studentname" type="text" placeholder="మీ పేరు నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && studentform.get(\'studentname\').errors" class="error-message"\n\n          style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n          <div *ngIf="studentform.get(\'studentname\').hasError(\'required\')"\n\n            style="color:red; ">విద్యార్థి పేరు అవసరం\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జెండర్</ion-label>\n\n          <ion-select formControlName="gender" placeholder="జెండర్ ఎంచుకోండి">\n\n            <ion-option value="male">పురుషుడు</ion-option>\n\n            <ion-option value="female">స్త్రీ</ion-option>\n\n            <ion-option value="transgender">ట్రాన్స్ జెండర్</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>విద్యార్థి నెంబర్ <span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-input formControlName="number" type="tel" placeholder="మీ నంబర్ నమోదు చేయండి" maxlength="10"\n\n            (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && studentform.get(\'number\').errors" class="error-message"\n\n          style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n          <div *ngIf="studentform.get(\'number\').hasError(\'required\')"\n\n            style="color:red; ">నెంబర్ అవసరం</div>\n\n          <div *ngIf="studentform.get(\'number\').hasError(\'maxlength\')"\n\n            style="color:red; ">10 అంకెల కన్నా తక్కువ</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>వాట్సాప్ నెంబర్</ion-label>\n\n          <ion-input formControlName="whatsappnumber" type="tel" placeholder="మీ వాట్సాప్ నెంబర్ నమోదు చేయండి"\n\n            maxlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పుట్టిన తేది</ion-label>\n\n          <ion-input type="date" formControlName="dob"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>తండ్రి పేరు(ఇంటి పేరు తో సహా) <span style="color:red; ">*</span></ion-label>\n\n          <ion-input type="text" formControlName="fathername" placeholder="మీ తండ్రి పేరు నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && studentform.get(\'fathername\').errors" class="error-message"\n\n          style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n          <div *ngIf="studentform.get(\'fathername\').hasError(\'required\')"\n\n            style="color:red; ">తండ్రి పేరు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీరు దేవుని కోసం ఏమి చేస్తారు</ion-label>\n\n          <ion-select formControlName="god" placeholder="రకాన్ని ఎంచుకోండి">\n\n            <ion-option value="Singing">పాటలు పాడడం</ion-option>\n\n            <ion-option value="Music">సంగీతం</ion-option>\n\n            <ion-option value="Dance">నృత్యం</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జీవిత లక్ష్యం</ion-label>\n\n          <ion-input type="text" formControlName="lifegoal" placeholder="మీ జీవిత లక్ష్యం నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఆసక్తులు</ion-label>\n\n          <ion-select formControlName="hobbies">\n\n            <ion-option value="" disabled selected>రకాన్ని ఎంచుకోండి</ion-option>\n\n            <ion-option value="Singing">పాటలు పాడడం</ion-option>\n\n            <ion-option value="Designing">డిజైనింగ్</ion-option>\n\n            <ion-option value="Writer">రచయిత</ion-option>\n\n            <ion-option value="readingbooks">పుస్తకాలు చదవడం</ion-option>\n\n            <ion-option value="servingpeople">జనులకు సేవ చేయడం</ion-option>\n\n            <ion-option value="music">సంగీతం</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>కళాశాల/పాఠశాల పేరు <span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-input formControlName="schname" placeholder="మీ కళాశాల/పాఠశాల పేరు నమోదు చేయండి" type="text"></ion-input>\n\n          <div *ngIf="submitted && studentform.get(\'schname\').errors" class="error-message"\n\n            style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n            <div *ngIf="studentform.get(\'schname\').hasError(\'required\')"\n\n              style="color:red; ">కళాశాల/పాఠశాల పేరు అవసరం\n\n            </div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ప్రతిభ (Talent)</ion-label>\n\n          <ion-select formControlName="talent" placeholder="మీ ప్రతిభను ఎంచుకోండి">\n\n            <ion-option value="" disabled selected>మీ ప్రతిభను ఎంచుకోండి</ion-option>\n\n            <ion-option value="Video editing">Video editing</ion-option>\n\n            <ion-option value="Photo Graphy">Photo Graphy</ion-option>\n\n            <ion-option value="Using Social Meadia">Social Meadia</ion-option>\n\n            <ion-option value="Organiser">Organiser</ion-option>\n\n            <ion-option value="Sound Management">Sound Management</ion-option>\n\n            <ion-option value="Drumist">Drumist</ion-option>\n\n            <ion-option value="Keyboard Player">Keyboard Player</ion-option>\n\n            <ion-option value="Giving Gospel">Giving Gospel</ion-option>\n\n            <ion-option value="Singer">Singer</ion-option>\n\n            <ion-option value="Songs Writer">Songs Writer</ion-option>\n\n            <ion-option value="Social Service">Social Service</ion-option>\n\n            <ion-option value="Good in Studies">Good in Studies</ion-option>\n\n            <ion-option value="Multy Talent">Multy Talent</ion-option>\n\n            <ion-option value="Speaker">Speaker</ion-option>\n\n            <ion-option value="Writer">Writer</ion-option>\n\n            <ion-option value="Others">Others</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>గ్రూప్ / బ్రాంచ్ (Group / Branch)</ion-label>\n\n          <ion-input type="text" formControlName="branch" placeholder="ఉదా: MPC, BiPC, CSE, ECE"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>పరీక్షలో మీరు సాధించిన మార్కులు (Total Marks Secured)</ion-label>\n\n          <ion-input type="text" formControlName="tmarks" placeholder="సాధించిన మార్కులు" (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>బోర్డు / యూనివర్సిటీ గరిష్ట మార్కులు (Maximum Marks Conducted)</ion-label>\n\n          <ion-input type="text" formControlName="mmarks" placeholder="గరిష్ట మార్కులు" (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>విద్య <span style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="study">\n\n            <ion-option value="" disabled selected>రకాన్ని ఎంచుకోండి</ion-option>\n\n            <ion-option value="1-5">1-5</ion-option>\n\n            <ion-option value="6-10">6-10</ion-option>\n\n            <ion-option value="Diploma">డిప్లొమా</ion-option>\n\n            <ion-option value="Inter">ఇంటర్</ion-option>\n\n            <ion-option value="Degree">డిగ్రీ</ion-option>\n\n            <ion-option value="Medical">మెడికల్</ion-option>\n\n            <ion-option value="Engineering">ఇంజనీరింగ్</ion-option>\n\n            <ion-option value="PG">పీజీ</ion-option>\n\n            <ion-option value="PHD">పిహెచ్డి</ion-option>\n\n          </ion-select>\n\n          <div *ngIf="submitted && studentform.get(\'study\').errors" class="error-message"\n\n            style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n            <div *ngIf="studentform.get(\'study\').hasError(\'required\')"\n\n              style="color:red; ">విద్య అవసరం</div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఆధ్యాత్మిక స్థితి</ion-label>\n\n          <ion-select formControlName="spirti">\n\n            <ion-option value="" disabled selected>రకాన్ని ఎంచుకోండి</ion-option>\n\n            <ion-option value="practicingchristian">ప్రాక్టిసింగ్ క్రిస్టియన్</ion-option>\n\n            <ion-option value="nominalchristian">నామమాత్ర క్రిస్టియన్</ion-option>\n\n            <ion-option value="festivalchristian">పండుగల క్రిస్టియన్</ion-option>\n\n            <ion-option value="justbelievingjesus">యేసును నమ్మడం మాత్రమే</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సంఘం / చర్చి విధానం<span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="denomination_id">\n\n            <ion-option value="" disabled selected>సంఘాన్ని ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let i of denomation" [value]="i.id">{{i.denomation_name}}</ion-option>\n\n          </ion-select>\n\n          <div *ngIf="submitted && studentform.get(\'denomination_id\').errors" class="error-message"\n\n            style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n            <div *ngIf="studentform.get(\'denomination_id\').hasError(\'required\')">సంఘం అవసరం</div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-grid>\n\n      <h3 style="text-align: center;font-weight: 900;    color: white;">కళాశాల / పాఠశాల చిరునామా</h3>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>రాష్ట్రం / State (కళాశాల/పాఠశాల) <span style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="state_id" (ionChange)="onStateChange($event)" placeholder="రాష్ట్రం ఎంచుకోండి">\n\n              <ion-option value="" disabled selected>రాష్ట్రం ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let s of states" [value]="s.id">{{s.state_name}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>జిల్లాను ఎంచుకోండి<span\n\n                style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="district_id" [disabled]="!studentform.value.state_id" (ionChange)="getconstency($event);" placeholder="జిల్లాను ఎంచుకోండి">\n\n              <ion-option value="" disabled selected>రకాన్ని ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n            </ion-select>\n\n            <div *ngIf="submitted && studentform.get(\'district_id\').errors" class="error-message"\n\n              style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n              <div *ngIf="studentform.get(\'district_id\').hasError(\'required\')">జిల్లా అవసరం</div>\n\n            </div>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>నియోజకవర్గాన్ని ఎంచుకోండి<span\n\n                style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="constituency_id" [disabled]="!studentform.value.district_id" (ionChange)="getmandals($event);" placeholder="నియోజకవర్గాన్ని ఎంచుకోండి">\n\n              <ion-option value="" disabled selected>రకాన్ని ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n            </ion-select>\n\n            <div *ngIf="submitted && studentform.get(\'constituency_id\').errors" class="error-message"\n\n              style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n              <div *ngIf="studentform.get(\'constituency_id\').hasError(\'required\')">నియోజకవర్గం అవసరం</div>\n\n            </div>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మండలాలను ఎంచుకోండి<span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="mandal_id" [disabled]="!studentform.value.constituency_id" (ionChange)="gepanchayati($event);" placeholder="మండలాలను ఎంచుకోండి">\n\n            <ion-option value="" disabled selected>రకాన్ని ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n          </ion-select>\n\n          <div *ngIf="submitted && studentform.get(\'mandal_id\').errors" class="error-message"\n\n            style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n            <div *ngIf="studentform.get(\'mandal_id\').hasError(\'required\')">మండలం అవసరం</div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పంచాయతీని ఎంచుకోండి<span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="village_id" [disabled]="!studentform.value.mandal_id" placeholder="పంచాయతీని ఎంచుకోండి">\n\n            <ion-option value="" disabled selected>రకాన్ని ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n          </ion-select>\n\n          <div *ngIf="submitted && studentform.get(\'village_id\').errors" class="error-message"\n\n            style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n            <div *ngIf="studentform.get(\'village_id\').hasError(\'required\')">పంచాయతీ అవసరం</div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-grid>\n\n      <h3 style="text-align: center;font-weight: 900;color: white;">నివాస చిరునామా</h3>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>రాష్ట్రం / State (నివాసం) <span style="color:red">*</span></ion-label>\n\n            <ion-select formControlName="res_state_id" (ionChange)="onResStateChange($event)" placeholder="రాష్ట్రం ఎంచుకోండి">\n\n              <ion-option value="" disabled selected>రాష్ట్రం ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let s of states" [value]="s.id">{{s.state_name}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>జిల్లాలను ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n            <ion-select formControlName="resdistricts" [disabled]="!studentform.value.res_state_id" (ionChange)="getconstency1($event)" placeholder="జిల్లాలను ఎంచుకోండి">\n\n              <ion-option value="" disabled selected>ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let item of resDistricts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && studentform.get(\'resdistricts\').errors" class="error-message"\n\n            style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n            <div *ngIf="studentform.get(\'resdistricts\').hasError(\'required\')">జిల్లా అవసరం</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>నియోజకవర్గాన్ని ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n            <ion-select formControlName="resconstituencyname" [disabled]="!studentform.value.resdistricts" (ionChange)="getmandals1($event)" placeholder="నియోజకవర్గాన్ని ఎంచుకోండి">\n\n              <ion-option value="" disabled selected>ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let item of constituency1" [value]="item.id">{{item.const_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && studentform.get(\'resconstituencyname\').errors" class="error-message"\n\n            style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n            <div *ngIf="studentform.get(\'resconstituencyname\').hasError(\'required\')">నియోజకవర్గం అవసరం</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మండలాలను ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n            <ion-select formControlName="resmandals" [disabled]="!studentform.value.resconstituencyname"\n\n              (ionChange)="gepanchayati1($event);getpastorssdata();getchurchesstudentdata()" placeholder="మండలాలను ఎంచుకోండి">\n\n              <ion-option value="" disabled selected>ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let item of mandals1" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && studentform.get(\'resmandals\').errors" class="error-message"\n\n            style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n            <div *ngIf="studentform.get(\'resmandals\').hasError(\'required\')">మండలం అవసరం</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>పంచాయతీని ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n            <ion-select formControlName="respanchayati" [disabled]="!studentform.value.resmandals" placeholder="పంచాయతీని ఎంచుకోండి">\n\n              <ion-option value="" disabled selected>ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let item of panchayati1" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && studentform.get(\'respanchayati\').errors" class="error-message"\n\n            style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n            <div *ngIf="studentform.get(\'respanchayati\').hasError(\'required\')">పంచాయతీ అవసరం</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>గ్రామం పేరు / వీధి పేరు<span style="color:red">*</span></ion-label>\n\n          <ion-input formControlName="villagename" type="text"\n\n            placeholder="మీ గ్రామం / వీధి పేరు నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && studentform.get(\'villagename\').errors" class="error-message"\n\n          style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n          <div *ngIf="studentform.get(\'villagename\').hasError(\'required\')">గ్రామం పేరు / వీధి పేరు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>వార్డు నంబర్</ion-label>\n\n          <ion-input formControlName="wardnumber" type="text" placeholder="వార్డు నంబర్ నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పాస్టర్ ని ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="pastor" (ionChange)="getpastorssdata()">\n\n            <ion-option value="" disabled selected>మీ పాస్టర్ ని ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of getstudentspastors" [value]="item.id">{{item.pastorname}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>చర్చి ని ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="church" (ionChange)="getchurchesstudentdata()">\n\n            <ion-option value="" disabled selected>చర్చి పేరు ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of getchurchstudentfilter" [value]="item.id">{{item.church_name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ స్థానిక చిరునామా / ఇల్లు నంబర్ నమోదు చేయండి<span style="color:red; ">*</span></ion-label>\n\n          <ion-input formControlName="ward" type="text" placeholder="మీ వీధి పేరు నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && studentform.get(\'ward\').errors" class="error-message"\n\n          style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n          <div *ngIf="studentform.get(\'ward\').hasError(\'required\')">స్థానిక చిరునామా / ఇల్లు నంబర్ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 col-md-6>\n\n        <ion-list>\n\n          <ion-label stacked>ఎక్కడ నివసిస్తున్నారు? <span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-item>\n\n            <input type="radio" value="YES" formControlName="nri">\n\n            <label> ఆంధ్ర ప్రదేశ్ లో నివసించరు </label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="NO" formControlName="nri" />\n\n            <label> ఆంధ్ర ప్రదేశ్ లో నివసిస్తున్నారు </label>\n\n          </ion-item>\n\n        </ion-list>\n\n        <div *ngIf="submitted && studentform.get(\'nri\').errors" class="error-message"\n\n          style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n          <div *ngIf="studentform.get(\'nri\').hasError(\'required\')">ఎక్కడ నివసిస్తున్నారు అనేది అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-col col-12>\n\n      <ion-list>\n\n        <ion-label stacked>నాయకుడిగా మారాలనుకుంటున్నారా? <span\n\n            style="color:red; ">*</span></ion-label>\n\n        <ion-item>\n\n          <input type="radio" value="YES" (click)="onradioleadertyperajkumar($event)" formControlName="leadership">\n\n          <label>అవును</label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <input type="radio" value="NO" (click)="onradioleadertyperajkumar($event)" formControlName="leadership">\n\n          <label>కాదు</label>\n\n        </ion-item>\n\n      </ion-list>\n\n      <div *ngIf="submitted && studentform.get(\'leadership\').errors" class="error-message"\n\n        style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n        <div *ngIf="studentform.get(\'leadership\').hasError(\'required\')">నాయకత్వం అవసరం</div>\n\n      </div>\n\n    </ion-col>\n\n    <ion-col col-12 class="mb-4 pb-2" *ngIf="lead">\n\n      <ion-item>\n\n        <ion-label stacked>నాయకత్వం</ion-label>\n\n        <ion-radio formControlName="leadertype">\n\n          <ion-item>\n\n            <ion-label>జనరల్</ion-label>\n\n            <ion-radio slot="start" value="1" (ionChange)="onradioleadertype($event.target)"></ion-radio>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>వింగ్</ion-label>\n\n            <ion-radio slot="start" value="2" (ionChange)="onradioleadertype($event.target)"></ion-radio>\n\n          </ion-item>\n\n        </ion-radio>\n\n      </ion-item>\n\n    </ion-col>\n\n\n\n    <ion-row *ngIf="leadtype">\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జనరల్ నాయకత్వం స్థాయి</ion-label>\n\n          <ion-select formControlName="generaltype" placeholder="జనరల్ నాయకత్వం ఎంచుకోండి">\n\n            <ion-option value="" selected disabled>జనరల్ నాయకత్వం ఎంచుకోండి</ion-option>\n\n            <ion-option value="State Level">రాష్ట్ర స్థాయి (State Level)</ion-option>\n\n            <ion-option value="District Level">జిల్లా స్థాయి (District Level)</ion-option>\n\n            <ion-option value="Constituency Level">నియోజకవర్గ స్థాయి (Constituency Level)</ion-option>\n\n            <ion-option value="Mandal Level">మండల స్థాయి (Mandal Level)</ion-option>\n\n            <ion-option value="Ward / Panchayati Level">వార్డు / పంచాయతీ స్థాయి (Ward / Panchayati Level)</ion-option>\n\n            <ion-option value="Church Level">చర్చి స్థాయి (Church Level)</ion-option>\n\n            <ion-option value="College Level">కాలేజీ స్థాయి (College Level)</ion-option>\n\n            <ion-option value="Branch Level">బ్రాంచ్ స్థాయి (Branch Level)</ion-option>\n\n            <ion-option value="Branch / Group Level">బ్రాంచ్ / గ్రూప్ స్థాయి (Branch / Group Level)</ion-option>\n\n            <ion-option value="Branch / Group Year Level">బ్రాంచ్ / గ్రూప్ ఇయర్ స్థాయి (Branch / Group Year Level)</ion-option>\n\n            <ion-option value="Section / Class Level">సెక్షన్ / క్లాస్ స్థాయి (Section / Class Level)</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="wingtype">\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>వింగ్ నాయకత్వం స్థాయి</ion-label>\n\n          <ion-select formControlName="wingtype">\n\n            <ion-option value="" disabled selected>వింగ్ నాయకత్వం ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of wings" [value]="item.id">{{item.position}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="wingtypes">\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>వింగ్ నాయకత్వం</ion-label>\n\n          <ion-select formControlName="wingtypes">\n\n            <ion-option value="">వింగ్ నాయకత్వం ఎంచుకోండి</ion-option>\n\n            <ion-option value="Driver">డ్రైవర్</ion-option>\n\n            <ion-option value="Socialmedia">సోషల్ మీడియా</ion-option>\n\n            <ion-option value="Papermedia">పేపర్ మీడియా</ion-option>\n\n            <ion-option value="MeadiaReporters">మీడియా రిపోర్టర్లు</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list>\n\n          <ion-label stacked>విద్యార్థి అనాథా? <span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-item>\n\n            <input type="radio" value="YES" (click)="onparent($event)" formControlName="mother">\n\n            <label>అవును</label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="NO" (click)="onparent($event)" formControlName="mother">\n\n            <label>కాదు</label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-12 *ngIf="father">\n\n        <ion-item>\n\n          <ion-label stacked>తండ్రి లేదా తల్లి పేరు(ఇంటి పేరు తో సహా)</ion-label>\n\n          <ion-input formControlName="orphon" type="text"\n\n            placeholder="మీ తండ్రి లేదా తల్లి పేరును నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>స్థానిక స్థలం</ion-label>\n\n          <ion-input formControlName="nativeplace" type="text"\n\n            placeholder="మీ స్థానిక స్థలాన్ని నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ గురించి</ion-label>\n\n          <ion-input formControlName="aboutyourself" type="text" placeholder="మీ గురించి నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ కులం</ion-label>\n\n          <ion-select formControlName="caste">\n\n            <ion-option value="" disabled selected>జాతిని ఎంచుకోండి</ion-option>\n\n            <ion-option value="No Caste">జాతి లేదు</ion-option>\n\n            <ion-option value="SC">ఎస్ఈ</ion-option>\n\n            <ion-option value="ST">ఎస్టీ</ion-option>\n\n            <ion-option value="BC-A">బీసీ-A</ion-option>\n\n            <ion-option value="BC-B">బీసీ-B</ion-option>\n\n            <ion-option value="BC-C">బీసీ-C</ion-option>\n\n            <ion-option value="BC-D">బీసీ-D</ion-option>\n\n            <ion-option value="BC-E">బీసీ-E</ion-option>\n\n            <ion-option value="OC">ఓసీ</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఉప జాతి</ion-label>\n\n          <ion-input formControlName="subcaste" type="text" placeholder="మీ ఉప జాతిని నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పాస్వర్డ్<span style="color:red">*</span></ion-label>\n\n          <ion-input formControlName="password" type="password" placeholder="మీ పాస్వర్డ్ నమోదు చేయండి" maxlength="16"\n\n            minlength="6"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && studentform.get(\'password\').errors" class="error-message"\n\n          style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n          <div *ngIf="studentform.get(\'password\').hasError(\'required\')">పాస్వర్డ్ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పునః-పాస్వర్డ్<span style="color:red">*</span></ion-label>\n\n          <ion-input formControlName="retypepassword" type="password" placeholder="మీ పాస్వర్డ్ నమోదు చేయండి"\n\n            maxlength="16" minlength="6"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && studentform.get(\'retypepassword\').errors" class="error-message"\n\n          style="color:red; font-family: \'ramabhardra\', sans-serif!important;">\n\n          <div *ngIf="studentform.get(\'retypepassword\').hasError(\'required\')">పునః-పాస్వర్డ్ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <input type="checkbox" value="yes" formControlName="term">\n\n          <label stacked> &nbsp;&nbsp; నేను మరియు మీకు సమాచారం భద్రంగా ఉంచటంలో సమ్మతిస్తున్నాను</label>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n        <div style="text-align: center;">\n\n          <button ion-button color="secondary" (click)="poststudentsignup()" [disabled]="showSpinner" style="letter-spacing: 1px;">\n\n            <ion-spinner *ngIf="showSpinner" name="crescent" style="width:16px;height:16px;vertical-align:middle;margin-right:6px;"></ion-spinner>\n\n            {{ showSpinner ? \'దయచేసి వేచి ఉండండి, ప్రాసెస్ అవుతోంది...\' : \'నమోదు\' }}\n\n          </button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\student\student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], StudentPage);
    return StudentPage;
}());

//# sourceMappingURL=student.js.map

/***/ })

});
//# sourceMappingURL=12.js.map