webpackJsonp([39],{

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmeetingsPageModule", function() { return AddmeetingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addmeetings__ = __webpack_require__(471);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddmeetingsPageModule = /** @class */ (function () {
    function AddmeetingsPageModule() {
    }
    AddmeetingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addmeetings__["a" /* AddmeetingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addmeetings__["a" /* AddmeetingsPage */]),
            ],
        })
    ], AddmeetingsPageModule);
    return AddmeetingsPageModule;
}());

//# sourceMappingURL=addmeetings.module.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmeetingsPage; });
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
 * Generated class for the AddmeetingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddmeetingsPage = /** @class */ (function () {
    function AddmeetingsPage(navCtrl, navParams, service, frombuilder, actionSheetCtrl, camera, loadingCtrl, alertctrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.frombuilder = frombuilder;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.alertctrl = alertctrl;
        this.imagesData = [];
        this.dist = 0;
        this.const = 0;
        this.man = 0;
        this.vil = 0;
        this.submitted = false;
        this.locationLoading = false;
        this.locationError = '';
        this.locationSuccess = '';
        this.locationName = '';
        this.locationSourceMessage = '';
        this.form = this.frombuilder.group({
            mettingtype: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            denomation: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            speakerone: [''],
            speakertwo: [''],
            speakerthree: [''],
            speakerfour: [''],
            fromdate: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            todate: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            image: [''],
            districtname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            constituencyname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            mandals: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            village_name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            fromtime: [''],
            totime: [''],
            address: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            location: [''],
            facebook: [''],
            youtube: [''],
            orgphone: [''],
            evntphone: [''],
            peoplecount: ['']
        });
    }
    Object.defineProperty(AddmeetingsPage.prototype, "t", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    AddmeetingsPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    AddmeetingsPage.prototype.ionViewDidLoad = function () {
        this.getdistric();
        this.getdenomations();
    };
    AddmeetingsPage.prototype.getdistric = function () {
        var _this = this;
        this.service.getdistrict().subscribe(function (res) {
            _this.districts = res.data;
        });
    };
    AddmeetingsPage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    AddmeetingsPage.prototype.geyr = function (id) {
        if (id == 2) {
            if (this.dist == 0) {
                this.loading = this.alertctrl.create({
                    mode: 'ios',
                    message: 'Select the District',
                    buttons: ['Ok']
                });
                this.loading.present();
            }
        }
        if (id == 3) {
            if (this.dist == 0) {
                var akert = this.alertctrl.create({
                    mode: 'ios',
                    message: 'Select the District',
                    buttons: ['Ok']
                });
                akert.present();
            }
            else if (this.const == 0) {
                var akert = this.alertctrl.create({
                    mode: 'ios',
                    message: 'Select the Constitunecy',
                    buttons: ['Ok']
                });
                akert.present();
            }
            console.log(this.dist, this.const, this.man);
        }
        if (id == 4) {
            if (this.dist == 0) {
                var akert = this.alertctrl.create({
                    mode: 'ios',
                    message: 'Select the District',
                    buttons: ['Ok']
                });
                akert.present();
            }
            else if (this.const == 0) {
                var akert = this.alertctrl.create({
                    mode: 'ios',
                    message: 'Select the Constitunecy',
                    buttons: ['Ok']
                });
                akert.present();
            }
            else if (this.man == 0) {
                var akert = this.alertctrl.create({
                    mode: 'ios',
                    message: 'Select the Mandals',
                    buttons: ['Ok']
                });
                akert.present();
            }
        }
    };
    AddmeetingsPage.prototype.getconstency = function (event) {
        var _this = this;
        this.dist = 1;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    AddmeetingsPage.prototype.getmandals = function (event) {
        var _this = this;
        this.const = 1;
        var id = event;
        this.service.getmandals().subscribe(function (res) {
            _this.mandals = res.data.filter(function (data) { return data.const_id == id; });
        });
    };
    AddmeetingsPage.prototype.gepanchayati = function (event) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
        });
        this.loading.present();
        this.man = 1;
        var id = event;
        this.service.gepanchayatis().subscribe(function (res) {
            _this.panchayati = res.data.filter(function (data) { return data.mndl_id == id; });
            if (_this.panchayati.length) {
                _this.loading.dismiss();
            }
        });
    };
    AddmeetingsPage.prototype.postmeetings = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
        });
        this.loading.present();
        this.submitted = true;
        if (this.form.invalid) {
            this.loading.dismiss();
            alert('* మార్క్ చేసిన వివరాలను తప్పనిసరిగా పూరించాలి');
        }
        else {
            var data = {
                mettingtype: this.form.value.mettingtype,
                denomation: this.form.value.denomation,
                speakerone: this.form.value.speakerone,
                speakertwo: this.form.value.speakertwo,
                speakerthree: this.form.value.speakerthree,
                speakerfour: this.form.value.speakerfour,
                fromdate: this.form.value.fromdate,
                todate: this.form.value.todate,
                districtname: this.form.value.districtname,
                description: this.form.value.description,
                constituencyname: this.form.value.constituencyname,
                mandals: this.form.value.mandals,
                village_name: this.form.value.village_name,
                fromtime: this.form.value.fromtime,
                totime: this.form.value.totime,
                location: this.form.value.location,
                address: this.form.value.address,
                facebook: this.form.value.facebook,
                youtube: this.form.value.youtube,
                ministry_id: this.form.value.ministry_id,
                reviewImg: this.imagesData,
                orgphone: this.form.value.orgphone,
                evntphone: this.form.value.evntphone,
                peoplecount: this.form.value.peoplecount
            };
            this.service.postsmeetings(data).subscribe(function (res) {
                if (res.status == 200) {
                    _this.loading.dismiss();
                    var confirm_1 = _this.alertctrl.create({
                        mode: 'ios',
                        title: 'విజయవంతంగా సబ్మిట్ చేసినారు',
                        buttons: ['Ok']
                    });
                    confirm_1.present();
                    _this.navCtrl.push('MeetingPage');
                    _this.form.reset();
                    _this.submitted = false;
        this.locationLoading = false;
        this.locationError = '';
        this.locationSuccess = '';
        this.locationName = '';
        this.locationSourceMessage = '';
                    _this.loading.dismiss();
                }
                else {
                    _this.loading.dismiss();
                    alert('server down');
                }
            });
        }
    };
    AddmeetingsPage.prototype.useCurrentLocation = function () {
        var _this = this;
        var confirmAlert = this.alertctrl.create({
            mode: 'ios',
            title: 'లొకేషన్ అనుమతి (Location Permission)',
            message: 'మీ ప్రస్తుత GPS లొకేషన్ మరియు అడ్రసును ఫారమ్‌లో నమోదు చేయడానికి అనుమతిస్తున్నారా?',
            buttons: [
                {
                    text: 'రద్దు (Cancel)',
                    role: 'cancel'
                },
                {
                    text: 'అనుమతించు (Allow)',
                    handler: function () {
                        _this.executeGetCurrentLocation();
                    }
                }
            ]
        });
        confirmAlert.present();
    };
    AddmeetingsPage.prototype.executeGetCurrentLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var reverseGeocode, applyLocation, handleFailure, fetchNetworkLocation, tryNetworkFallback, isSecure, fallbackTriggered, triggerFallbackOnce;
            return __generator(this, function (_a) {
                this.locationError = '';
                this.locationSuccess = '';
                this.locationName = '';
                this.locationSourceMessage = '';
                this.locationLoading = true;
                if (this.cdr) {
                    this.cdr.detectChanges();
                }

                reverseGeocode = function (lat, lng) {
                    return __awaiter(_this, void 0, void 0, function () {
                        var nominatimUrl, resNom, dataNom, a, parts, bdcUrl, resBdc, dataBdc, bdcParts;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 3, , 4]);
                                    nominatimUrl = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + lat + '&lon=' + lng + '&addressdetails=1';
                                    return [4, fetch(nominatimUrl, { headers: { 'Accept': 'application/json' } })];
                                case 1:
                                    resNom = _b.sent();
                                    return [4, resNom.json()];
                                case 2:
                                    dataNom = _b.sent();
                                    if (dataNom) {
                                        if (dataNom.display_name && dataNom.display_name.trim().length > 0) {
                                            return [2, dataNom.display_name.trim()];
                                        }
                                        if (dataNom.address) {
                                            a = dataNom.address;
                                            parts = [
                                                a.house_number || a.building || a.amenity || '',
                                                a.road || a.street || '',
                                                a.neighbourhood || a.suburb || '',
                                                a.village || a.town || a.city || '',
                                                a.county || a.mandal || '',
                                                a.state_district || a.district || '',
                                                a.state || '',
                                                a.postcode || '',
                                                a.country || ''
                                            ].filter(function (p) { return !!p && p.trim().length > 0; });
                                            if (parts.length > 0) {
                                                return [2, parts.join(', ')];
                                            }
                                        }
                                    }
                                    return [3, 4];
                                case 3:
                                    _b.sent();
                                    return [3, 4];
                                case 4:
                                    _b.trys.push([4, 7, , 8]);
                                    bdcUrl = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + lat + '&longitude=' + lng + '&localityLanguage=en';
                                    return [4, fetch(bdcUrl)];
                                case 5:
                                    resBdc = _b.sent();
                                    return [4, resBdc.json()];
                                case 6:
                                    dataBdc = _b.sent();
                                    bdcParts = [
                                        dataBdc.locality || dataBdc.name || '',
                                        dataBdc.city || '',
                                        dataBdc.principalSubdivision || '',
                                        dataBdc.postcode || '',
                                        dataBdc.countryName || ''
                                    ].filter(function (p) { return !!p && p.trim().length > 0; });
                                    if (bdcParts.length > 0) {
                                        return [2, bdcParts.join(', ')];
                                    }
                                    return [3, 8];
                                case 7:
                                    _b.sent();
                                    return [3, 8];
                                case 8:
                                    return [2, lat.toFixed(6) + ', ' + lng.toFixed(6)];
                            }
                        });
                    });
                };

                applyLocation = function (lat, lng, place, source) {
                    var googleUrl = 'https://maps.google.com/?q=' + lat + ',' + lng;
                    _this.form.patchValue({
                        location: googleUrl,
                        address: place
                    });
                    if (_this.form.controls['location']) {
                        _this.form.controls['location'].markAsDirty();
                        _this.form.controls['location'].markAsTouched();
                    }
                    if (_this.form.controls['address']) {
                        _this.form.controls['address'].markAsDirty();
                        _this.form.controls['address'].markAsTouched();
                    }
                    _this.locationName = place;
                    _this.locationSuccess = 'కరెంటు లొకేషన్ విజయవంతముగా నమోదు చేయబడింది.';
                    _this.locationSourceMessage = source;
                    _this.locationLoading = false;
                    if (_this.cdr) {
                        _this.cdr.detectChanges();
                    }

                    var alertSuccess = _this.alertctrl.create({
                        mode: 'ios',
                        title: 'లొకేషన్ నమోదు అయ్యింది!',
                        subTitle: 'కూటములు జరిగే ప్రదేశం: ' + place,
                        message: 'గూగుల్ లొకేషన్: ' + googleUrl,
                        buttons: ['సరే']
                    });
                    alertSuccess.present();
                };

                handleFailure = function (reasonMsg) {
                    _this.locationLoading = false;
                    _this.locationError = reasonMsg;
                    if (_this.cdr) {
                        _this.cdr.detectChanges();
                    }
                    var alertErr = _this.alertctrl.create({
                        mode: 'ios',
                        title: 'లొకేషన్ లోపం',
                        message: reasonMsg,
                        buttons: ['సరే']
                    });
                    alertErr.present();
                };

                fetchNetworkLocation = function () {
                    return __awaiter(_this, void 0, void 0, function () {
                        var res, data, parts, res2, data2, parts2, res3, data3, parts3;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 3, , 4]);
                                    return [4, fetch('https://ipwho.is/')];
                                case 1:
                                    res = _c.sent();
                                    return [4, res.json()];
                                case 2:
                                    data = _c.sent();
                                    if (data && data.success && typeof data.latitude === 'number' && typeof data.longitude === 'number') {
                                        parts = [data.city, data.region, data.postal, data.country].filter(Boolean);
                                        return [2, { lat: data.latitude, lng: data.longitude, fallbackPlace: parts.join(', ') }];
                                    }
                                    return [3, 4];
                                case 3:
                                    _c.sent();
                                    return [3, 4];
                                case 4:
                                    _c.trys.push([4, 7, , 8]);
                                    return [4, fetch('https://freeipapi.com/api/json')];
                                case 5:
                                    res2 = _c.sent();
                                    return [4, res2.json()];
                                case 6:
                                    data2 = _c.sent();
                                    if (data2 && typeof data2.latitude === 'number' && typeof data2.longitude === 'number') {
                                        parts2 = [data2.cityName, data2.regionName, data2.zipCode, data2.countryName].filter(Boolean);
                                        return [2, { lat: data2.latitude, lng: data2.longitude, fallbackPlace: parts2.join(', ') }];
                                    }
                                    return [3, 8];
                                case 7:
                                    _c.sent();
                                    return [3, 8];
                                case 8:
                                    _c.trys.push([8, 11, , 12]);
                                    return [4, fetch('https://api.bigdatacloud.net/data/reverse-geocode-client')];
                                case 9:
                                    res3 = _c.sent();
                                    return [4, res3.json()];
                                case 10:
                                    data3 = _c.sent();
                                    if (data3 && typeof data3.latitude === 'number' && typeof data3.longitude === 'number') {
                                        parts3 = [data3.locality || data3.name, data3.city, data3.principalSubdivision, data3.postcode, data3.countryName].filter(Boolean);
                                        return [2, { lat: data3.latitude, lng: data3.longitude, fallbackPlace: parts3.join(', ') }];
                                    }
                                    return [3, 12];
                                case 11:
                                    _c.sent();
                                    return [3, 12];
                                case 12:
                                    return [2, null];
                            }
                        });
                    });
                };

                tryNetworkFallback = function (reasonNote) {
                    return __awaiter(_this, void 0, void 0, function () {
                        var netLoc, place;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    _d.trys.push([0, 3, , 4]);
                                    return [4, fetchNetworkLocation()];
                                case 1:
                                    netLoc = _d.sent();
                                    if (!netLoc) return [3, 3];
                                    return [4, reverseGeocode(netLoc.lat, netLoc.lng)];
                                case 2:
                                    place = _d.sent();
                                    if (!place || place === netLoc.lat.toFixed(6) + ', ' + netLoc.lng.toFixed(6)) {
                                        if (netLoc.fallbackPlace) {
                                            place = netLoc.fallbackPlace;
                                        }
                                    }
                                    applyLocation(netLoc.lat, netLoc.lng, place, reasonNote);
                                    return [2];
                                case 3:
                                    _d.sent();
                                    return [3, 4];
                                case 4:
                                    handleFailure('లొకేషన్ పొందడం సాధ్యం కాలేదు. దయచేసి గూగుల్ లొకేషన్ లింక్ మరియు అడ్రసును ఫారమ్‌లో నమోదు చేయండి.');
                                    return [2];
                            }
                        });
                    });
                };

                isSecure = typeof window !== 'undefined' && (
                    window.isSecureContext ||
                    window.location.protocol === 'https:' ||
                    window.location.hostname === 'localhost' ||
                    window.location.hostname === '127.0.0.1'
                );

                if (!isSecure || !navigator.geolocation) {
                    return [4, tryNetworkFallback('నెట్‌వర్క్ ద్వారా లొకేషన్ నమోదు చేయబడింది.')];
                }

                fallbackTriggered = false;
                triggerFallbackOnce = function (note) {
                    if (!fallbackTriggered) {
                        fallbackTriggered = true;
                        tryNetworkFallback(note);
                    }
                };

                try {
                    navigator.geolocation.getCurrentPosition(
                        function (position) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var lat, lng, place;
                                return __generator(this, function (_e) {
                                    switch (_e.label) {
                                        case 0:
                                            if (fallbackTriggered) return [2];
                                            lat = position.coords.latitude;
                                            lng = position.coords.longitude;
                                            return [4, reverseGeocode(lat, lng)];
                                        case 1:
                                            place = _e.sent();
                                            applyLocation(lat, lng, place, 'GPS ద్వారా ఖచ్చితమైన లొకేషన్ పొందబడింది.');
                                            return [2];
                                    }
                                });
                            });
                        },
                        function (error) {
                            console.warn('GPS error:', error);
                            var note = 'GPS అందుబాటులో లేనందున నెట్‌వర్క్ ద్వారా లొకేషన్ నమోదు చేయబడింది.';
                            if (error.code === error.PERMISSION_DENIED) {
                                note = 'GPS అనుమతి లేనందున నెట్‌వర్క్ ద్వారా లొకేషన్ నమోదు చేయబడింది.';
                            } else if (error.code === error.TIMEOUT) {
                                note = 'GPS సమయం మించినందున నెట్‌వర్క్ ద్వారా లొకేషన్ నమోదు చేయబడింది.';
                            }
                            triggerFallbackOnce(note);
                        },
                        {
                            enableHighAccuracy: true,
                            timeout: 8000,
                            maximumAge: 0
                        }
                    );
                } catch (e) {
                    triggerFallbackOnce('నెట్‌వర్క్ ద్వారా లొకేషన్ నమోదు చేయబడింది.');
                }

                return [2];
            });
        });
    };

    AddmeetingsPage.prototype.openphoto = function () {
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
                                            _this.imagesData = [];
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
                                                reviewimg: img,
                                                filetype: 'jpeg',
                                            };
                                            _this.imagesData = [];
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
    AddmeetingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addmeetings',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addmeetings\addmeetings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;font-size: 40px;font-family:ramabhadra"><b> క్రైస్తవ మీటింగ్స్ పోస్టర్‌ నమోదు</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <h3\n\n    style="border-radius: 15px;text-align:center ;color: #fb0404;font-family:ramabhadra ; font-size: 20px;background-color: aliceblue;padding: 2%;font-weight: 800;">\n\n    క్రైస్తవ మీటింగ్స్ సమాచారం సబ్మిట్ చేయండి ( * మార్క్ వున్నవి తప్పనిసరిగా పూరించండి)</h3>\n\n  <form [formGroup]="form">\n\n    <ion-row>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>కూటముల టైపు ఎంచుకోండి<span style="color:red; font-family:ramabhadra">*</span></ion-label>\n\n          <ion-select formControlName="mettingtype" [ngClass]="{\'is-invalid\': submitted && t[\'mettingtype\'].errors }">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option value="ఉజ్జీవ">ఉజ్జీవ కూటములు</ion-option>\n\n            <ion-option value="సువార్త కూటములు">సువార్త కూటములు</ion-option>\n\n            <ion-option value="ఉపవాస కూటములు">ఉపవాస కూటములు</ion-option>\n\n            <ion-option value="స్వస్థత కూటములు">స్వస్థత కూటములు</ion-option>\n\n            <ion-option value="ఉజ్జీవ స్వస్థత కూటములు">ఉజ్జీవ స్వస్థత కూటములు</ion-option>\n\n            <ion-option value="వార్షికోత్సవ కూటములు">వార్షికోత్సవ కూటములు</ion-option>\n\n            <ion-option value="కృతజ్ఞత స్తుతి కూటములు">కృతజ్ఞత స్తుతి కూటములు</ion-option>\n\n            <ion-option value="ప్రవచన విడుదల కూటములు">ప్రవచన విడుదల కూటములు</ion-option>\n\n            <ion-option value="యూత్ మీటింగ్స్">యూత్ మీటింగ్స్</ion-option>\n\n            <ion-option value="క్రైస్తవ నాయకుల కూటములు">క్రైస్తవ నాయకుల కూటములు</ion-option>\n\n            <ion-option value="స్త్రీల కూటములు">స్త్రీల కూటములు</ion-option>\n\n            <ion-option value="పాస్టర్ ఫెలోషిప్ కూటములు">పాస్టర్ ఫెలోషిప్ కూటములు</ion-option>\n\n            <ion-option value="క్రైస్తవ పిల్లల కూటములు">క్రైస్తవ పిల్లల కూటములు</ion-option>\n\n            <ion-option value="క్రైస్తవ బుక్స్ ఎక్సిబిషన్">క్రైస్తవ బుక్స్ ఎక్సిబిషన్</ion-option>\n\n            <ion-option value="క్రైస్తవ సంగీత కూటములు">క్రైస్తవ సంగీత కూటములు</ion-option>\n\n            <ion-option value="ఇతర కూటములు">ఇతర కూటములు</ion-option>\n\n          </ion-select>\n\n          <div *ngIf="submitted && t[\'mettingtype\'].errors" class="invalid-feedback">\n\n            <div *ngIf="t[\'mettingtype\'].errors[\'required\']">కూటముల టైపు ఎంచుకోండి</div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 class="mb-4 pb-2">\n\n        <ion-item class="form-outline">\n\n          <ion-label stacked>మీ డినామినేషన్ మోడల్‌<span style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="denomation" style="height:37px;width: 273px;">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of denomation" [value]="item.id">{{item.denomation_name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>కూటముల ప్రారంభ తేదీ<span style="color:red; ">*</span></ion-label>\n\n          <ion-input type="date" formControlName="fromdate" [min]="now"></ion-input>\n\n          <div *ngIf="submitted && t[\'fromdate\'].errors" class="invalid-feedback">\n\n            <div *ngIf="t[\'fromdate\'].errors[\'required\']">కూటముల ప్రారంభ తేదీ</div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>కూటముల చివరి తేదీ<span style="color:red; ">*</span></ion-label>\n\n          <ion-input type="date" formControlName="todate" [min]="now"></ion-input>\n\n          <div *ngIf="submitted && t[\'todate\'].errors" class="invalid-feedback">\n\n            <div *ngIf="t[\'todate\'].errors[\'required\']">కూటముల చివరి తేదీ</div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <div class="imgerdt" (click)="openphoto()">\n\n          <img src="assets/icon/Upload.svg" style="height:70px;width:70px;">అప్‌లోడ్ కూటముల పోస్టర్‌\n\n          <br>\n\n          <img *ngIf="imagesData.length" [src]="imagesData[0].reviewimg" alt="" height="200px" width="200px">\n\n          <div *ngIf="submitted && t[\'image\'].errors" class="invalid-feedback">\n\n            <div *ngIf="t[\'image\'].errors[\'required\']">ఇక్కడ క్లిక్ చేసి అప్‌లోడ్ కూటముల పోస్టర్‌</div>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item class="mb-4 pb-2">\n\n          <ion-label stacked>కూటముల సమయాలు & ఇతర సమాచారం<span style="color:red; ">*</span></ion-label>\n\n          <ion-textarea formControlName="description" class="form-control" col="5"\n\n            placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి"></ion-textarea>\n\n          <div *ngIf="submitted && t[\'description\'].errors" class="invalid-feedback">\n\n            <div *ngIf="t[\'description\'].errors[\'required\']">కూటముల సమయాలు ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> మీటింగ్ ఆర్గనైజర్ పేరు (ఇంటి పేరు తో సహా)</ion-label>\n\n          <ion-input type="text" formControlName="speakerone" placeholder=" ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n            class="form-control"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <!-- <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> స్పీకర్ రెండు పేరు</ion-label>\n\n          <ion-input type="text" formControlName="speakertwo" placeholder="స్పీకర్ ఒక పేరును నమోదు చేయండి"\n\n            class="form-control"></ion-input>\n\n        </ion-item>\n\n      </ion-col> -->\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీటింగ్ ఆర్గనైజర్ ఫోన్ నెంబర్[10 అంకెలు]  (పబ్లిక్ కు చూపించ బడదు)</ion-label>\n\n          <ion-input type="tel" formControlName="orgphone" minlength="10" maxlength="10"\n\n            placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" class="form-control"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీటింగ్ కోసం సంప్రదించే ఫోన్[10 అంకెలు]  (పబ్లిక్ కు చూపించ బడును)</ion-label>\n\n          <ion-input type="tel" formControlName="evntphone" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" minlength="10"\n\n            maxlength="10" class="form-control"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item class="mb-4 pb-2">\n\n          <ion-label stacked>మీటింగ్ హాజరు అయ్యే వారి సంఖ్య ఎంత ఉండవచ్చు <span style="color:red; ">*</span></ion-label>\n\n          <ion-input formControlName="peoplecount" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి " type="tel" \n\n            class="form-control"></ion-input>\n\n          <div *ngIf="submitted && t[\'address\'].errors" class="invalid-feedback">\n\n            <div *ngIf="t[\'address\'].errors[\'required\']">>మీటింగ్ హాజరు అయ్యే వారి సంఖ్య ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ యూ ట్యూబ్ ఛానెల్ లింక్</ion-label>\n\n          <ion-input type="text" formControlName="youtube" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n            class="form-control"></ion-input>\n\n          <div *ngIf="submitted && t[\'youtube\'].errors" class="invalid-feedback">\n\n            <div *ngIf="t[\'youtube\'].errors[\'required\']">మీ యూ ట్యూబ్ ఛానెల్ లింక్ </div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ ఫేస్ బుక్-లింక్</ion-label>\n\n          <ion-input type="text" formControlName="facebook" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          <div *ngIf="submitted && t[\'facebook\'].errors" class="invalid-feedback">\n\n            <div *ngIf="t[\'facebook\'].errors[\'required\']">మీ ఫేస్ బుక్-లింక్</div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <h4 Style="color:whitesmoke;text-align: center;font-weight: 600;">కూటముల జరిగే అడ్రసు </h4>\n\n        <ion-item class="mb-4 pb-2">\n\n          <ion-label stacked> జిల్లాను  <span style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="districtname" (ionChange)="getconstency($event)" placeholder="ఇక్కడ క్లిక్ చేసి జిల్లాను ఎంచుకోండి"\n\n            (click)="geyr(1)" class="form-control">\n\n            <ion-option value="{{item.id}}" *ngFor="let item of districts">{{item.distrct_nm}}</ion-option>\n\n          </ion-select>\n\n          <div *ngIf="submitted && t[\'districtname\'].errors" class="invalid-feedback">\n\n            <div *ngIf="t[\'districtname\'].errors[\'required\']">జిల్లాను ఎంచుకోండి </div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item class="mb-4 pb-2">\n\n          <ion-label stacked>నియోజకవర్గం  <span style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="constituencyname" (ionChange)="getmandals($event)" (click)="geyr(2)"\n\n            placeholder="ఇక్కడ క్లిక్ చేసి  నియోజకవర్గం ఎంచుకోండి" class="form-control">\n\n            <ion-option value="{{item.id}}" *ngFor="let item of constituency">{{item.const_nm}}</ion-option>\n\n          </ion-select>\n\n          <div *ngIf="submitted && t[\'constituencyname\'].errors" class="invalid-feedback">\n\n            <div *ngIf="t[\'constituencyname\'].errors[\'required\']">నియోజకవర్గంను ఎంచుకోండి </div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item class="mb-4 pb-2">\n\n          <ion-label stacked> మండలం / మున్సిపాలిటీని ఎంచుకోండి <span style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="mandals" (ionChange)="gepanchayati($event)" (click)="geyr(3)"\n\n            placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట్ మండలం / మున్సిపాలిటీ" class="form-control">\n\n            <ion-option value="{{item.id}}" *ngFor="let item of mandals">{{item.mndl_nm}}</ion-option>\n\n          </ion-select>\n\n          <div *ngIf="submitted && t[\'mandals\'].errors" class="invalid-feedback">\n\n            <div *ngIf="t[\'mandals\'].errors[\'required\']">మండలం / మున్సిపాలిటీని ఎంచుకోండి </div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item class="mb-4 pb-2">\n\n          <ion-label stacked> పంచాయతీ / వార్డుని ఎంచుకోండి <span style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="village_name" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట్ పంచాయతీ/వార్డు" (click)="geyr(4)"\n\n            class="form-control">\n\n            <ion-option value="{{item.id}}" *ngFor="let item of panchayati">{{item.pnchyt_nm}}</ion-option>\n\n          </ion-select>\n\n          <div *ngIf="submitted && t[\'village_name\'].errors" class="invalid-feedback">\n\n            <div *ngIf="t[\'village_name\'].errors[\'required\']">పంచాయతీ / వార్డు ని ఎంచుకోండి</div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item class="mb-4 pb-2">\n\n          <ion-label stacked>కూటముల జరిగే ప్రదేశం ల్యాండ్ మార్క్ మరియు లోకల్ అడ్రస్ <span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-textarea formControlName="address" col="5" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n            class="form-control"></ion-textarea>\n\n          <div *ngIf="submitted && t[\'address\'].errors" class="invalid-feedback">\n\n            <div *ngIf="t[\'address\'].errors[\'required\']">కూటముల జరిగే ప్రదేశం ల్యాండ్ మార్క్ మరియు లోకల్ అడ్రస్ ఎంటర్ చేయండి </div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item class="mb-2">\n\n          <ion-label stacked>కూటముల గూగుల్ లొకేషన్ లింక్</ion-label>\n\n          <ion-input type="text" formControlName="location" placeholder="ఎంటర్ కూటముల గూగుల్ లొకేషన్"\n\n            class="form-control"></ion-input>\n\n          <div *ngIf="submitted && t[\'location\'].errors" class="invalid-feedback">\n\n            <div *ngIf="t[\'location\'].errors[\'required\']">కూటముల గూగుల్ లొకేషన్ ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-item>\n\n        <button ion-button block color="primary" type="button" (click)="useCurrentLocation()" [disabled]="locationLoading" style="margin-top: 8px; margin-bottom: 8px; height: 48px; font-size: 15px; font-weight: bold; border-radius: 8px; text-transform: none;">\n\n          <ion-icon name="pin" style="margin-right: 8px; font-size: 20px;"></ion-icon>\n\n          {{ locationLoading ? \'శోధిస్తున్నాము... దయచేసి ఆగండి\' : \'కరెంటు లొకేషన్ నమోదు కోసం క్లిక్ \' }}\n\n        </button>\n\n        <div *ngIf="locationLoading" style="background: #e7f3fe; color: #0c5460; padding: 10px 14px; border-radius: 8px; margin-bottom: 10px; font-size: 13px; border-left: 4px solid #17a2b8;">\n\n          <ion-icon name="sync" style="margin-right: 6px;"></ion-icon> లొకేషన్ శోధిస్తున్నాము... దయచేసి ఆగండి.\n\n        </div>\n\n        <div *ngIf="locationError" style="background: #fff3cd; color: #856404; padding: 10px 14px; border-radius: 8px; margin-bottom: 10px; font-size: 13px; border-left: 4px solid #ffc107;">\n\n          <ion-icon name="warning" style="margin-right: 6px;"></ion-icon> {{ locationError }}\n\n        </div>\n\n        <div *ngIf="locationSuccess" style="background: #d4edda; color: #155724; padding: 10px 14px; border-radius: 8px; margin-bottom: 10px; font-size: 13px; border-left: 4px solid #28a745;">\n\n          <ion-icon name="checkmark-circle" style="margin-right: 6px;"></ion-icon> {{ locationSuccess }}\n\n          <div *ngIf="locationName" style="margin-top: 6px; font-weight: 500;"><strong>ప్రదేశం:</strong> {{ locationName }}</div>\n\n        </div>\n\n        <div *ngIf="locationSourceMessage" style="color: #666; font-size: 12px; margin-top: 2px; margin-bottom: 8px;">\n\n          {{ locationSourceMessage }}\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 class="mb-4 pb-2" style="text-align: center;">\n\n        <button ion-button color="secondary" type="submit" (click)="postmeetings()">\n\n          నమోదు చేయండి\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\addmeetings\addmeetings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AddmeetingsPage);
    return AddmeetingsPage;
}());

//# sourceMappingURL=addmeetings.js.map

/***/ })

});
//# sourceMappingURL=39.js.map