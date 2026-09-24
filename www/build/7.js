webpackJsonp([7],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WingcommandPageModule", function() { return WingcommandPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wingcommand__ = __webpack_require__(510);
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

/***/ 510:
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



// import { HomePage } from '../home/home';
var WingcommandPage = /** @class */ (function () {
    function WingcommandPage(navCtrl, navParams, service, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.profiledata = [];
        this.isShowDiv = true;
    }
    WingcommandPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WingcommandPage');
        this.getLeaderswebsiteData();
    };
    WingcommandPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    WingcommandPage.prototype.getLeaderswebsiteData = function () {
        var _this = this;
        var data = {
            "category": localStorage.getItem("category_id"),
            "usr_id": localStorage.getItem("usr_id")
        };
        this.service.getUserMainData(data).subscribe(function (res) {
            if (res.data.length == "0") {
                var confirm_1 = _this.alertCtrl.create({
                    title: 'మీరు జనరల్ లీడర్ (లేదా ) వింగ్ లీడర్ కాదు ?',
                    mode: 'ios',
                    buttons: [
                        {
                            text: 'ok',
                            handler: function () {
                            }
                        },
                    ]
                });
                confirm_1.present();
                _this.navCtrl.push('HomePage');
            }
            else {
                _this.leaderid = res.data[0].leadertype;
                if (res.data[0].leadertype == 1) {
                    _this.leaders = "Leader ";
                }
                else if (res.data[0].leadertype == 2) {
                    _this.leaders = "Wing ";
                }
                _this.myresdata = res.data[0].generaltype;
                if (res.data[0].leadertype == 1) {
                    if (res.data[0].generaltype == 1) {
                        _this.generals = "District";
                        _this.general = "Constituency ";
                    }
                    else if (res.data[0].generaltype == 2) {
                        _this.generals = "Constituency";
                        _this.general = "Mandal ";
                    }
                    else if (res.data[0].generaltype == 3) {
                        _this.generals = "Mandal ";
                        _this.general = "Village ";
                    }
                    else if (res.data[0].generaltype == 4) {
                        _this.generals = "Village ";
                        _this.general = "";
                    }
                    var data = {
                        "usr_id": localStorage.getItem("usr_id"),
                        "category_id": localStorage.getItem("category_id"),
                        "generaltype": res.data[0].generaltype,
                        district_id: res.data[0].district_id,
                        constituency_id: res.data[0].constituency_id,
                        mandal_id: res.data[0].mandal_id,
                        panchayat_id: res.data[0].village_id
                    };
                    _this.service.getLeaderswebsiteD(data).subscribe(function (result) {
                        _this.belearr = result.data[0];
                        _this.studentarr = result.data[1];
                        _this.pastorarr = result.data[2];
                        console.log(_this.belearr, _this.studentarr, _this.pastorarr, 'leader');
                    });
                }
                else if (res.data[0].leadertype == 2) {
                    _this.wingtypes = res.data[0].wingtypes;
                    if (res.data[0].generaltype == 1) {
                        _this.generals = "District";
                        _this.general = "Constituency";
                    }
                    else if (res.data[0].generaltype == 2) {
                        _this.generals = "Constituency";
                        _this.general = "Mandal";
                    }
                    else if (res.data[0].generaltype == 3) {
                        _this.generals = "Mandal";
                        _this.general = "Village";
                    }
                    else if (res.data[0].generaltype == 4) {
                        _this.generals = "Village";
                        _this.general = "";
                    }
                    var data4 = {
                        "usr_id": localStorage.getItem("usr_id"),
                        "category_id": localStorage.getItem("category_id"),
                        "generaltype": res.data[0].generaltype,
                        wingtype: res.data[0].wingtype,
                        district_id: res.data[0].district_id,
                        constituency_id: res.data[0].constituency_id,
                        mandal_id: res.data[0].mandal_id,
                        panchayat_id: res.data[0].village_id
                    };
                    _this.service.getLeaderswebsitewing(data4).subscribe(function (result) {
                        _this.belearr = result.data[0];
                        _this.studentarr = result.data[1];
                        _this.pastorarr = result.data[2];
                        console.log(_this.belearr, _this.studentarr, _this.pastorarr, 'leader');
                    });
                }
            }
        });
    };
    WingcommandPage.prototype.deleteAlert = function (id, index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure to rejected ?',
            mode: 'ios',
            buttons: [
                {
                    text: 'అవును, తిరస్కరించబడింది!',
                    handler: function () {
                        _this.deleteleader(id, index);
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                    }
                }
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
            alert(' తిరస్కరించబడింది ');
            _this.getLeaderswebsiteData();
        }, function (error) {
        });
    };
    WingcommandPage.prototype.make = function (id) {
        this.formshow = id;
    };
    WingcommandPage.prototype.confirm = function (id, index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'మీరు ఖచ్చితంగా నిర్ధారించాలనుకుంటున్నారా?',
            mode: 'ios',
            buttons: [
                {
                    text: 'అవును, నిర్ధారించండి! ',
                    handler: function () {
                        _this.conformleader(id, index);
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                    }
                }
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
            alert('Request Accepted Successfully');
            _this.getLeaderswebsiteData();
        }, function (error) {
        });
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
            selector: 'page-wingcommand',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\wingcommand\wingcommand.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b> వింగ్ లీడర్</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n  <p style="color: white;text-align:center;"><b> {{generals}} {{wingtypes}} {{leaders}}</b> </p>\n\n\n\n  <ion-row>\n\n    <ion-col col-6 text-center (click)="make(1)">\n\n      <button ion-button block>Believers Requests</button>\n\n    </ion-col>\n\n    <ion-col col-6 text-center (click)="make(3)">\n\n      <button ion-button block>Pastors Requests</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-card *ngIf="formshow == 1">\n\n    <ion-card-header>\n\n      <ion-card-title text-center *ngIf="general != \'\'">{{ general }} Level Believers Requests</ion-card-title>\n\n      <ion-card-title text-center *ngIf="general == \'\'">Village Believers</ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n\n\n      <div style="overflow: auto;">\n\n        <table class="table" >\n\n          <thead style="text-align: center;">\n\n            <tr style="text-align: center;">\n\n              <th>S.no</th>\n\n              <th>Name</th>\n\n              <th>Native Place</th>\n\n              <th>Status</th>\n\n              <th>Contact</th>\n\n            </tr>\n\n          </thead>\n\n          <tbody>\n\n            <tr *ngFor="let x of belearr; let i = index" style="text-align: center;">\n\n              <td >{{ i + 1 }}</td>\n\n              <td>{{ x.fname }}</td>\n\n              <td>{{ x.nativeplace }}</td>\n\n              <td class="actions" >\n\n                <ion-label *ngIf="x.approval_ind == 1" style="color: green;"><b>Accepted</b></ion-label>\n\n                <ion-label *ngIf="x.approval_ind == 2" style="color: red;"><b>Rejected</b></ion-label>\n\n                <button *ngIf="x.approval_ind == 0" ion-button color="success"\n\n                  (click)="confirm(1, x.id)">Confirm</button>\n\n                <button *ngIf="x.approval_ind == 0" ion-button color="danger"\n\n                  (click)="deleteAlert(1, x.id)">Reject</button>\n\n              </td>\n\n              <td class="contact">\n\n                <a href="tel:+91{{ x.mobile_number }}">\n\n                  <ion-icon name="call"></ion-icon>\n\n                </a>\n\n              </td>\n\n            </tr>\n\n          </tbody>\n\n        </table>\n\n      </div>\n\n      <h3 *ngIf="belearr.length == 0" text-center>No Requests</h3>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n  <ion-card *ngIf="formshow == 2">\n\n    <ion-card-header>\n\n      <ion-card-title text-center>{{ general }} Level Student </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n\n\n      <div style="overflow: auto;">\n\n        <table class="table">\n\n          <thead>\n\n            <tr style="text-align: center;">\n\n              <th>S.no</th>\n\n              <th>Name</th>\n\n              <th>Native Place</th>\n\n              <th>Status</th>\n\n              <th>Contact</th>\n\n            </tr>\n\n          </thead>\n\n          <tbody>\n\n            <tr *ngFor="let x of studentarr; let i = index" style="text-align: center;">\n\n              <td style="text-align: center;">{{ i + 1 }}</td>\n\n              <td>{{ x.studentname }}</td>\n\n              <td>{{ x.nativeplace }}</td>\n\n              <td class="actions">\n\n                <ion-label *ngIf="x.approval_ind == 1" style="color: green;"><b>Accepted</b></ion-label>\n\n                <ion-label *ngIf="x.approval_ind == 2" style="color: red;"><b>Rejected</b></ion-label>\n\n                <button *ngIf="x.approval_ind == 0" ion-button color="success"\n\n                  (click)="confirm(2, x.id)">Confirm</button>\n\n                <button *ngIf="x.approval_ind == 0" ion-button color="danger"\n\n                  (click)="deleteAlert(2, x.id)">Reject</button>\n\n              </td>\n\n              <td class="contact">\n\n                <a href="tel:+91{{ x.number }}">\n\n                  <ion-icon name="call"></ion-icon>\n\n                </a>\n\n              </td>\n\n            </tr>\n\n          </tbody>\n\n        </table>\n\n      </div>\n\n      <h3 *ngIf="studentarr.length === 0" text-center>No Requests</h3>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n\n\n  <ion-card *ngIf="formshow == 3">\n\n    <ion-card-header>\n\n      <ion-card-title text-center *ngIf="general !== \'\'">{{ general }} Level Pastors </ion-card-title>\n\n      <ion-card-title text-center *ngIf="general === \'\'">Village Pastors</ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <div style="overflow: auto;">\n\n        <table class="table" >\n\n          <thead >\n\n            <tr style="text-align: center;">\n\n              <th>S.no</th>\n\n              <th>Name</th>\n\n              <th>Native Place</th>\n\n              <th>Status</th>\n\n              <th>Contact</th>\n\n            </tr>\n\n          </thead>\n\n          <tbody>\n\n            <tr *ngFor="let x of pastorarr; let i = index" style="text-align: center;">\n\n              <td style="text-align: center;">{{ i + 1 }}</td>\n\n              <td>{{ x.pastorname }}</td>\n\n              <td>{{ x.nativeplace }}</td>\n\n              <td class="actions" style="text-align: center;">\n\n                <ion-label *ngIf="x.approval_ind == 1" style="color: green;"><b>Accepted</b></ion-label>\n\n                <ion-label *ngIf="x.approval_ind == 2" style="color: red;"><b>Rejected</b></ion-label>\n\n                <button ion-button color="success" *ngIf="x.approval_ind == 0" color="primary"\n\n                  (click)="confirm(3, x.id)">Confirm</button>\n\n                <button ion-button color="danger" *ngIf="x.approval_ind == 0" color="danger"\n\n                  (click)="deleteAlert(3, x.id)">Reject</button>\n\n              </td>\n\n              <td class="contact">\n\n                <a href="tel:+91{{ x.phonenumber }}">\n\n                  <ion-icon name="call"></ion-icon>\n\n                </a>\n\n              </td>\n\n            </tr>\n\n          </tbody>\n\n        </table>\n\n      </div>\n\n      <h3 *ngIf="pastorarr.length === 0" text-center>No Requests</h3>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\wingcommand\wingcommand.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], WingcommandPage);
    return WingcommandPage;
}());

//# sourceMappingURL=wingcommand.js.map

/***/ })

});
//# sourceMappingURL=7.js.map