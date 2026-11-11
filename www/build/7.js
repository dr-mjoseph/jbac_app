webpackJsonp([7],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WingcommandPageModule", function() { return WingcommandPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wingcommand__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WingcommandPageModule = /** @class */ (function () {
    function WingcommandPageModule() {
    }
    WingcommandPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wingcommand__["a" /* WingcommandPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wingcommand__["a" /* WingcommandPage */]),
            ],
        })
    ], WingcommandPageModule);
    return WingcommandPageModule;
}());

//# sourceMappingURL=wingcommand.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WingcommandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WingcommandPage = /** @class */ (function () {
    function WingcommandPage(navCtrl, navParams, service, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.profiledata = [];
        this.belearr = [];
        this.studentarr = [];
        this.pastorarr = [];
        this.teacherarr = [];
        this.formshow = 1;
        this.selectedUserType = 'believer';
        this.general = '';
        this.generals = '';
        this.leaders = '';
        this.wingtypes = '';
        this.cachedUserRes = null;
        this.isShowDiv = true;
        this.formshow = 1;
    }
    WingcommandPage.prototype.resolveLeaderHierarchyStep = function (u) {
        if (!u)
            return 0;
        var raw = String((u.generaltype !== undefined && u.generaltype !== null) ? u.generaltype : '').trim();
        var lower = raw.toLowerCase();
        if (raw.indexOf('రాష్ట్ర') !== -1 || lower.indexOf('state') !== -1)
            return 0;
        if (raw.indexOf('జిల్లా') !== -1 || lower.indexOf('dist') !== -1)
            return 1;
        if (raw.indexOf('నియోజకవర్గ') !== -1 || lower.indexOf('const') !== -1)
            return 2;
        if (raw.indexOf('మండల') !== -1 || lower.indexOf('mandal') !== -1 || lower.indexOf('municip') !== -1)
            return 3;
        if (raw.indexOf('పంచాయ') !== -1 || lower.indexOf('panchayat') !== -1 || lower.indexOf('village') !== -1)
            return 4;
        if (raw.indexOf('సబ్') !== -1 || lower.indexOf('subward') !== -1)
            return 6;
        if (raw.indexOf('వార్డు') !== -1 || lower.indexOf('ward') !== -1)
            return 5;
        var num = Number(raw);
        if (!isNaN(num) && raw !== '') {
            return num;
        }
        return 0;
    };
    WingcommandPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WingcommandPage');
        this.category_id = localStorage.getItem("category_id");
        if (this.category_id === '4' || this.category_id === '3') {
            this.selectedUserType = 'pastor';
            this.formshow = 3;
        }
        else if (this.category_id === '2') {
            this.selectedUserType = 'student';
            this.formshow = 2;
        }
        else if (this.category_id === '9') {
            this.selectedUserType = 'teacher';
            this.formshow = 4;
        }
        else {
            this.selectedUserType = 'believer';
            this.formshow = 1;
        }
        this.getLeaderswebsiteData();
    };
    WingcommandPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    WingcommandPage.prototype.getLeaderswebsiteData = function (forceUserType) {
        var _this = this;
        var storedCat = localStorage.getItem("category_id");
        var storedUsrId = localStorage.getItem("usr_id");
        var data = {
            "category": storedCat,
            "usr_id": storedUsrId
        };
        this.service.getUserMainData(data).subscribe(function (res) {
            if (!res || !res.data || res.data.length == 0) {
                var confirm_1 = _this.alertCtrl.create({
                    title: 'మీరు జనరల్ లీడర్ (లేదా) వింగ్ లీడర్ కాదు?',
                    mode: 'ios',
                    buttons: [{ text: 'OK', handler: function () { } }]
                });
                confirm_1.present();
                _this.navCtrl.push('HomePage');
                return;
            }
            _this.cachedUserRes = res.data[0];
            var userRole = res.data[0].role;
            if (forceUserType) {
                _this.selectedUserType = forceUserType;
                if (forceUserType === 'pastor')
                    _this.formshow = 3;
                else if (forceUserType === 'student')
                    _this.formshow = 2;
                else if (forceUserType === 'teacher')
                    _this.formshow = 4;
                else
                    _this.formshow = 1;
            }
            else {
                if (userRole === 'pastor' || storedCat === '4' || storedCat === '3') {
                    _this.selectedUserType = 'pastor';
                    _this.formshow = 3;
                }
                else if (userRole === 'student' || storedCat === '2') {
                    _this.selectedUserType = 'student';
                    _this.formshow = 2;
                }
                else if (userRole === 'teacher' || storedCat === '9') {
                    _this.selectedUserType = 'teacher';
                    _this.formshow = 4;
                }
                else {
                    _this.selectedUserType = 'believer';
                    _this.formshow = 1;
                }
            }
            _this.fetchSubordinateRequests();
        });
    };
    WingcommandPage.prototype.fetchSubordinateRequests = function () {
        var _this = this;
        if (!this.cachedUserRes)
            return;
        var u = this.cachedUserRes;
        this.leaderid = u.leadertype || (this.selectedUserType === 'teacher' ? '1' : '');
        if (u.leadertype == 1 || (u.leadertype != 2 && this.selectedUserType === 'teacher')) {
            this.leaders = "Leader ";
        }
        else if (u.leadertype == 2) {
            this.leaders = "Wing ";
        }
        var step = this.resolveLeaderHierarchyStep(u);
        this.myresdata = step;
        var loader = this.loadingCtrl.create({
            content: 'డేటా లోడ్ అవుతోంది... (Loading data...)'
        });
        loader.present().catch(function () { });
        if (u.leadertype == 1 || (u.leadertype != 2 && this.selectedUserType === 'teacher')) {
            if (step == 0) {
                this.generals = "State";
                this.general = "District ";
            }
            else if (step == 1) {
                this.generals = "District";
                this.general = "Constituency ";
            }
            else if (step == 2) {
                this.generals = "Constituency";
                this.general = "Mandal ";
            }
            else if (step == 3) {
                this.generals = "Mandal ";
                this.general = "Panchayat ";
            }
            else if (step == 4) {
                this.generals = "Panchayat ";
                this.general = "Ward ";
            }
            else if (step >= 5) {
                this.generals = "Ward ";
                this.general = "";
            }
            var data = {
                "usr_id": localStorage.getItem("usr_id"),
                "category_id": localStorage.getItem("category_id"),
                "user_type": this.selectedUserType,
                "leadertype": u.leadertype || '1',
                "wingtypes": u.wingtypes,
                "generaltype": u.generaltype,
                state_id: u.state_id || 1,
                district_id: u.district_id,
                constituency_id: u.constituency_id,
                mandal_id: u.mandal_id,
                panchayat_id: u.village_id
            };
            this.service.getLeaderswebsiteD(data).subscribe(function (result) {
                loader.dismiss().catch(function () { });
                var rawBelievers = (result && result.data && result.data[0]) ? result.data[0] : [];
                var rawPastors = (result && result.data && result.data[2]) ? result.data[2] : [];
                var rawStudents = (result && result.data && result.data[3]) ? result.data[3] : [];
                var rawTeachers = (result && result.data && result.data[4]) ? result.data[4] : [];
                if (_this.selectedUserType === 'pastor') {
                    _this.pastorarr = rawPastors.filter(function (x) { return Number((x && x.approval_ind)) !== 2; });
                    _this.belearr = [];
                    _this.studentarr = [];
                    _this.teacherarr = [];
                }
                else if (_this.selectedUserType === 'student') {
                    _this.studentarr = rawStudents.filter(function (x) { return Number((x && x.approval_ind)) !== 2; });
                    _this.belearr = [];
                    _this.pastorarr = [];
                    _this.teacherarr = [];
                }
                else if (_this.selectedUserType === 'teacher') {
                    _this.teacherarr = rawTeachers.filter(function (x) { return Number((x && x.approval_ind)) !== 2 && Number((x && x.d_in)) !== 1; });
                    _this.belearr = [];
                    _this.pastorarr = [];
                    _this.studentarr = [];
                }
                else {
                    _this.belearr = rawBelievers.filter(function (x) { return Number((x && x.approval_ind)) !== 2; });
                    _this.pastorarr = [];
                    _this.studentarr = [];
                    _this.teacherarr = [];
                }
            }, function () {
                loader.dismiss().catch(function () { });
            });
        }
        else if (u.leadertype == 2) {
            this.wingtypes = u.wing_name || u.wingtypes || "";
            if (u.generaltype == 0) {
                this.generals = "State";
                this.general = "District";
            }
            else if (u.generaltype == 1) {
                this.generals = "District";
                this.general = "Constituency";
            }
            else if (u.generaltype == 2) {
                this.generals = "Constituency";
                this.general = "Mandal";
            }
            else if (u.generaltype == 3) {
                this.generals = "Mandal";
                this.general = "Panchayat";
            }
            else if (u.generaltype == 4) {
                this.generals = "Panchayat";
                this.general = "Ward";
            }
            else if (u.generaltype == 5 || u.generaltype == 6) {
                this.generals = "Ward";
                this.general = "";
            }
            var data4 = {
                "usr_id": localStorage.getItem("usr_id"),
                "category_id": localStorage.getItem("category_id"),
                "user_type": this.selectedUserType,
                "leadertype": u.leadertype,
                "wingtypes": u.wingtypes,
                "generaltype": u.generaltype,
                wingtype: u.wingtype,
                state_id: u.state_id || 1,
                district_id: u.district_id,
                constituency_id: u.constituency_id,
                mandal_id: u.mandal_id,
                panchayat_id: u.village_id
            };
            this.service.getLeaderswebsitewing(data4).subscribe(function (result) {
                loader.dismiss().catch(function () { });
                loader.dismiss().catch(function () { });
                var rawBelievers = result.data[0] || [];
                var rawStudents = result.data[1] || [];
                var rawPastors = result.data[2] || [];
                if (_this.selectedUserType === 'pastor') {
                    _this.pastorarr = rawPastors.filter(function (x) { return Number((x && x.approval_ind)) !== 2; });
                    _this.belearr = [];
                    _this.studentarr = [];
                    _this.teacherarr = [];
                }
                else if (_this.selectedUserType === 'student') {
                    _this.studentarr = rawStudents.filter(function (x) { return Number((x && x.approval_ind)) !== 2; });
                    _this.belearr = [];
                    _this.pastorarr = [];
                    _this.teacherarr = [];
                }
                else {
                    _this.belearr = rawBelievers.filter(function (x) { return Number((x && x.approval_ind)) !== 2; });
                    _this.pastorarr = [];
                    _this.studentarr = [];
                    _this.teacherarr = [];
                }
            });
        }
    };
    WingcommandPage.prototype.deleteAlert = function (id, index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure to reject?',
            mode: 'ios',
            buttons: [
                {
                    text: 'అవును, తిరస్కరించండి!',
                    handler: function () {
                        _this.deleteleader(id, index);
                    }
                },
                { text: 'No', handler: function () { } }
            ]
        });
        confirm.present();
    };
    WingcommandPage.prototype.deleteleader = function (id, index) {
        var _this = this;
        var data = {
            tableid: id,
            id: index,
            leadertype: this.leaderid
        };
        this.service.deleteleaders(data).subscribe(function (res) {
            _this.fetchSubordinateRequests();
        });
    };
    WingcommandPage.prototype.make = function (id) {
        this.formshow = id;
        if (id == 1) {
            this.selectedUserType = 'believer';
            this.pastorarr = [];
            this.studentarr = [];
            this.teacherarr = [];
        }
        else if (id == 3) {
            this.selectedUserType = 'pastor';
            this.belearr = [];
            this.studentarr = [];
            this.teacherarr = [];
        }
        else if (id == 2) {
            this.selectedUserType = 'student';
            this.belearr = [];
            this.pastorarr = [];
            this.teacherarr = [];
        }
        else if (id == 4) {
            this.selectedUserType = 'teacher';
            this.belearr = [];
            this.pastorarr = [];
            this.studentarr = [];
        }
        this.fetchSubordinateRequests();
    };
    WingcommandPage.prototype.confirm = function (id, index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'మీరు ఖచ్చితంగా నిర్ధారించాలనుకుంటున్నారా?',
            mode: 'ios',
            buttons: [
                {
                    text: 'అవును, నిర్ధారించండి!',
                    handler: function () {
                        _this.conformleader(id, index);
                    }
                },
                { text: 'No', handler: function () { } }
            ]
        });
        confirm.present();
    };
    WingcommandPage.prototype.conformleader = function (id, index) {
        var _this = this;
        var data = {
            tableid: id,
            id: index,
            leadertype: this.leaderid
        };
        this.service.updateconsistency(data).subscribe(function (res) {
            _this.fetchSubordinateRequests();
        });
    };
    WingcommandPage.prototype.getSubordinateSubtitle = function () {
        if (this.myresdata == 0)
            return 'జిల్లాల వారిగా (District-wise)';
        if (this.myresdata == 1)
            return 'నియోజకవర్గాల వారిగా (Constituency-wise)';
        if (this.myresdata == 2)
            return 'మండలాల వారిగా (Mandal-wise)';
        if (this.myresdata == 3)
            return 'పంచాయితీల వారిగా (Panchayat-wise)';
        if (this.myresdata == 4)
            return 'వార్డుల వారిగా (Ward-wise)';
        return 'సబార్డినేట్స్ వారిగా';
    };
    WingcommandPage.prototype.getDetailedLeaderStatus = function (x) {
        if (!x)
            return 'లీడర్ (Leader)';
        var isWing = String(x.leadertype) === '2' || (x.wingtype && x.wingtype !== 'null' && String(x.wingtype).trim() !== '') || (x.wingtypes && x.wingtypes !== 'null' && String(x.wingtypes).trim() !== '');
        if (isWing)
            return (x.wing_name || 'వింగ్') + ' లీడర్';
        var gType = String(x.generaltype || '').trim();
        var gLower = gType.toLowerCase();
        if (gType.indexOf('రాష్ట్ర') !== -1 || gLower.indexOf('state') !== -1 || gType === '0')
            return 'రాష్ట్ర లీడర్';
        if (gType.indexOf('జిల్లా') !== -1 || gLower.indexOf('dist') !== -1 || gType === '1')
            return 'జిల్లా లీడర్';
        if (gType.indexOf('నియోజకవర్గ') !== -1 || gLower.indexOf('const') !== -1 || gType === '2')
            return 'నియోజకవర్గ లీడర్';
        if (gType.indexOf('మండల') !== -1 || gLower.indexOf('mandal') !== -1 || gLower.indexOf('municip') !== -1 || gType === '3')
            return 'మండల లీడర్';
        if (gType.indexOf('పంచాయ') !== -1 || gLower.indexOf('panchayat') !== -1 || gLower.indexOf('village') !== -1 || gType === '4')
            return 'గ్రామ / పంచాయితీ లీడర్';
        if (gType.indexOf('వార్డు') !== -1 || gLower.indexOf('ward') !== -1 || gType === '5' || gType === '6')
            return 'వార్డు లీడర్';
        return 'జనరల్ లీడర్';
    };
    WingcommandPage.prototype.toggleDisplayDiv = function () {
        this.isShowDiv = !this.isShowDiv;
    };
    WingcommandPage.prototype.personaldata = function () {
        var _this = this;
        var data = {
            usr_id: localStorage.getItem('usr_id'),
            category_id: localStorage.getItem('category_id'),
        };
        this.service.getuserprofilereport(data).subscribe(function (res) {
            _this.profiledata = res.data[0];
        });
    };
    WingcommandPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wingcommand',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\wingcommand\wingcommand.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>నాయకత్వ అభ్యర్థనలు (Leaders)</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n  <p style="color: white; text-align: center; font-size: 1.1rem; margin-top: 10px;">\n\n    <b>{{ generals }} {{ wingtypes }} {{ leaders }}</b>\n\n  </p>\n\n\n\n  <!-- User Specific Request Header Button -->\n\n  <ion-row style="padding: 0 15px;" justify-content-center>\n\n    <ion-col col-12 text-center *ngIf="formshow == 1">\n\n      <button ion-button block color="primary" style="font-size: 13px; font-weight: 600; height: 42px;">\n\n        👥 Believers Requests (విశ్వాసులు)\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-12 text-center *ngIf="formshow == 3">\n\n      <button ion-button block color="danger" style="font-size: 13px; font-weight: 600; height: 42px;">\n\n        ✝️ Pastors Requests (పాస్టర్లు)\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-12 text-center *ngIf="formshow == 2">\n\n      <button ion-button block color="secondary" style="font-size: 13px; font-weight: 600; height: 42px;">\n\n        🎓 Students Requests (విద్యార్థులు)\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-12 text-center *ngIf="formshow == 4">\n\n      <button ion-button block style="background-color: #047857; color: #fff; font-size: 13px; font-weight: 600; height: 42px;">\n\n        👨‍🏫 Teachers Requests (ఉపాధ్యాయులు / బోధనా రంగం)\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <!-- Believers Requests Card -->\n\n  <ion-card *ngIf="formshow == 1">\n\n    <ion-card-header>\n\n      <ion-card-title text-center style="font-size: 14px; color: #00548F;">\n\n        {{ general != \'\' ? general + \' Level Believers Requests\' : \'Believers Requests\' }} ({{ getSubordinateSubtitle() }})\n\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <div style="overflow: auto;">\n\n        <table class="table" style="width: 100%;">\n\n          <thead style="text-align: center;">\n\n            <tr>\n\n              <th>S.No</th>\n\n              <th>పేరు (Name)</th>\n\n              <th>స్థాయి</th>\n\n              <th>నియోజకవర్గం</th>\n\n              <th>మండలం</th>\n\n              <th>నిర్ణయం</th>\n\n              <th>కాల్</th>\n\n            </tr>\n\n          </thead>\n\n          <tbody>\n\n            <tr *ngFor="let x of belearr; let i = index" style="text-align: center;">\n\n              <td>{{ i + 1 }}</td>\n\n              <td><b>{{ x.fname }} {{ x.lname || \'\' }}</b></td>\n\n              <td><span style="font-size: 10px; background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px;">{{ getDetailedLeaderStatus(x) }}</span></td>\n\n              <td>{{ x.constituency_name || x.nativeplace || \'--\' }}</td>\n\n              <td>{{ x.mandal_name || \'--\' }}</td>\n\n              <td class="actions">\n\n                <ion-label *ngIf="x.approval_ind == 1" style="color: green;"><b>✓ Accepted</b></ion-label>\n\n                <div *ngIf="x.approval_ind == 0 || x.approval_ind == null">\n\n                  <button ion-button small color="success" (click)="confirm(1, x.id)">Confirm</button>\n\n                  <button ion-button small color="danger" (click)="deleteAlert(1, x.id)">Reject</button>\n\n                </div>\n\n              </td>\n\n              <td class="contact">\n\n                <a href="tel:+91{{ x.mobile_number }}">\n\n                  <ion-icon name="call" style="font-size: 20px; color: green;"></ion-icon>\n\n                </a>\n\n              </td>\n\n            </tr>\n\n          </tbody>\n\n        </table>\n\n      </div>\n\n      <h4 *ngIf="!belearr || belearr.length == 0" text-center style="color: #64748b; padding: 20px;">\n\n        ఈ పరిధిలో ఎటువంటి విశ్వాసి అభ్యర్థనలు లేవు / No Believers Requests\n\n      </h4>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <!-- Pastors Requests Card -->\n\n  <ion-card *ngIf="formshow == 3">\n\n    <ion-card-header>\n\n      <ion-card-title text-center style="font-size: 14px; color: #8b0000;">\n\n        {{ general != \'\' ? general + \' Level Pastors Requests\' : \'Pastors Requests\' }} ({{ getSubordinateSubtitle() }})\n\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <div style="overflow: auto;">\n\n        <table class="table" style="width: 100%;">\n\n          <thead style="text-align: center;">\n\n            <tr>\n\n              <th>S.No</th>\n\n              <th>పాస్టర్ పేరు</th>\n\n              <th>స్థాయి</th>\n\n              <th>నియోజకవర్గం</th>\n\n              <th>మండలం</th>\n\n              <th>నిర్ణయం</th>\n\n              <th>కాల్</th>\n\n            </tr>\n\n          </thead>\n\n          <tbody>\n\n            <tr *ngFor="let x of pastorarr; let i = index" style="text-align: center;">\n\n              <td>{{ i + 1 }}</td>\n\n              <td><b>{{ x.pastorname }}</b></td>\n\n              <td><span style="font-size: 10px; background: #fee2e2; color: #991b1b; padding: 2px 6px; border-radius: 4px;">{{ getDetailedLeaderStatus(x) }}</span></td>\n\n              <td>{{ x.constituency_name || x.nativeplace || \'--\' }}</td>\n\n              <td>{{ x.mandal_name || \'--\' }}</td>\n\n              <td class="actions">\n\n                <ion-label *ngIf="x.approval_ind == 1" style="color: green;"><b>✓ Accepted</b></ion-label>\n\n                <div *ngIf="x.approval_ind == 0 || x.approval_ind == null">\n\n                  <button ion-button small color="success" (click)="confirm(3, x.id)">Confirm</button>\n\n                  <button ion-button small color="danger" (click)="deleteAlert(3, x.id)">Reject</button>\n\n                </div>\n\n              </td>\n\n              <td class="contact">\n\n                <a href="tel:+91{{ x.phonenumber }}">\n\n                  <ion-icon name="call" style="font-size: 20px; color: green;"></ion-icon>\n\n                </a>\n\n              </td>\n\n            </tr>\n\n          </tbody>\n\n        </table>\n\n      </div>\n\n      <h4 *ngIf="!pastorarr || pastorarr.length == 0" text-center style="color: #64748b; padding: 20px;">\n\n        ఈ పరిధిలో ఎటువంటి పాస్టర్ అభ్యర్థనలు లేవు / No Pastors Requests\n\n      </h4>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <!-- Students Requests Card -->\n\n  <ion-card *ngIf="formshow == 2">\n\n    <ion-card-header>\n\n      <ion-card-title text-center style="font-size: 14px; color: #1e7e34;">\n\n        {{ general != \'\' ? general + \' Level Students Requests\' : \'Students Requests\' }} ({{ getSubordinateSubtitle() }})\n\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <div style="overflow: auto;">\n\n        <table class="table" style="width: 100%;">\n\n          <thead style="text-align: center;">\n\n            <tr>\n\n              <th>S.No</th>\n\n              <th>విద్యార్థి పేరు</th>\n\n              <th>స్థాయి</th>\n\n              <th>నియోజకవర్గం</th>\n\n              <th>మండలం</th>\n\n              <th>నిర్ణయం</th>\n\n              <th>కాల్</th>\n\n            </tr>\n\n          </thead>\n\n          <tbody>\n\n            <tr *ngFor="let x of studentarr; let i = index" style="text-align: center;">\n\n              <td>{{ i + 1 }}</td>\n\n              <td><b>{{ x.studentname || x.fname }}</b></td>\n\n              <td><span style="font-size: 10px; background: #dcfce7; color: #166534; padding: 2px 6px; border-radius: 4px;">{{ getDetailedLeaderStatus(x) }}</span></td>\n\n              <td>{{ x.constituency_name || x.nativeplace || \'--\' }}</td>\n\n              <td>{{ x.mandal_name || \'--\' }}</td>\n\n              <td class="actions">\n\n                <ion-label *ngIf="x.approval_ind == 1" style="color: green;"><b>✓ Accepted</b></ion-label>\n\n                <div *ngIf="x.approval_ind == 0 || x.approval_ind == null">\n\n                  <button ion-button small color="success" (click)="confirm(2, x.id)">Confirm</button>\n\n                  <button ion-button small color="danger" (click)="deleteAlert(2, x.id)">Reject</button>\n\n                </div>\n\n              </td>\n\n              <td class="contact">\n\n                <a href="tel:+91{{ x.number || x.mobile_number }}">\n\n                  <ion-icon name="call" style="font-size: 20px; color: green;"></ion-icon>\n\n                </a>\n\n              </td>\n\n            </tr>\n\n          </tbody>\n\n        </table>\n\n      </div>\n\n      <h4 *ngIf="!studentarr || studentarr.length == 0" text-center style="color: #64748b; padding: 20px;">\n\n        ఈ పరిధిలో ఎటువంటి విద్యార్థి అభ్యర్థనలు లేవు / No Students Requests\n\n      </h4>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <!-- Teachers Requests Card -->\n\n  <ion-card *ngIf="formshow == 4">\n\n    <ion-card-header>\n\n      <ion-card-title text-center style="font-size: 14px; color: #047857;">\n\n        {{ general != \'\' ? general + \' Level Teacher Leaders Requests\' : \'Teacher Leaders Requests\' }} ({{ getSubordinateSubtitle() }})\n\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <div style="overflow: auto;">\n\n        <table class="table" style="width: 100%;">\n\n          <thead style="text-align: center;">\n\n            <tr>\n\n              <th>S.No</th>\n\n              <th>పేరు (Name)</th>\n\n              <th>స్థాయి</th>\n\n              <th>నియోజకవర్గం</th>\n\n              <th>మండలం</th>\n\n              <th>నిర్ణయం</th>\n\n              <th>కాల్</th>\n\n            </tr>\n\n          </thead>\n\n          <tbody>\n\n            <tr *ngFor="let x of teacherarr; let i = index" style="text-align: center;">\n\n              <td>{{ i + 1 }}</td>\n\n              <td><b>{{ x.name_with_surname || x.name || \'--\' }}</b></td>\n\n              <td><span style="font-size: 10px; background: #dcfce7; color: #047857; padding: 2px 6px; border-radius: 4px;">{{ getDetailedLeaderStatus(x) }}</span></td>\n\n              <td>{{ x.constituency_name || \'--\' }}</td>\n\n              <td>{{ x.mandal_name || \'--\' }}</td>\n\n              <td class="actions">\n\n                <ion-label *ngIf="x.approval_ind == 1" style="color: green;"><b>✓ Accepted</b></ion-label>\n\n                <div *ngIf="x.approval_ind == 0 || x.approval_ind == null">\n\n                  <button ion-button small color="success" (click)="confirm(4, x.id)">Confirm</button>\n\n                  <button ion-button small color="danger" (click)="deleteAlert(4, x.id)">Reject</button>\n\n                </div>\n\n              </td>\n\n              <td class="contact">\n\n                <a href="tel:+91{{ x.mobile || x.mobile_number }}">\n\n                  <ion-icon name="call" style="font-size: 20px; color: green;"></ion-icon>\n\n                </a>\n\n              </td>\n\n            </tr>\n\n          </tbody>\n\n        </table>\n\n      </div>\n\n      <h4 *ngIf="!teacherarr || teacherarr.length == 0" text-center style="color: #64748b; padding: 20px;">\n\n        ఈ పరిధిలో ఎటువంటి ఉపాధ్యాయ నాయకుల అభ్యర్థనలు లేవు / No Teacher Leader Requests\n\n      </h4>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\wingcommand\wingcommand.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], WingcommandPage);
    return WingcommandPage;
}());

//# sourceMappingURL=wingcommand.js.map

/***/ })

});
//# sourceMappingURL=7.js.map