webpackJsonp([12],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherPageModule", function() { return TeacherPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher__ = __webpack_require__(511);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeacherPageModule = /** @class */ (function () {
    function TeacherPageModule() {
    }
    TeacherPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__teacher__["a" /* TeacherPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__teacher__["a" /* TeacherPage */]),
            ],
        })
    ], TeacherPageModule);
    return TeacherPageModule;
}());

//# sourceMappingURL=teacher.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeacherPage = /** @class */ (function () {
    function TeacherPage(navCtrl, fb, alertCtrl, loadingCtrl, toastCtrl, service, cdRef) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.cdRef = cdRef;
        this.showSpinner = false;
        // States
        this.states = [];
        // Institute Location Lists
        this.instDistricts = [];
        this.instConstituencies = [];
        this.instMandals = [];
        this.instPanchayatis = [];
        // Residential Location Lists
        this.resDistricts = [];
        this.resConstituencies = [];
        this.resMandals = [];
        this.resPanchayatis = [];
        // Master Dropdown Data
        this.roleCategories = [];
        this.qualificationCategories = [];
        this.experienceLevels = [];
        this.familyBackgrounds = [];
        this.institutionTypes = [];
        this.denominations = [];
        this.casteList = ['OC', 'BC-A', 'BC-B', 'BC-C', 'BC-D', 'BC-E', 'SC', 'ST', 'Others / ఇతరులు'];
        // CV / Profile Upload
        this.cvBase64 = '';
        this.cvFileName = '';
        this.teacherForm = this.fb.group({
            name_with_surname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            gender: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            mobile: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[0-9]{10}$/)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            exact_designation: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            role_category: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            qualification_category: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            total_experience_years: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            experience_in: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            // Social & Spiritual
            caste: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            subcaste: [''],
            faith_category: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            family_background: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            pastor_phone: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[0-9]{10}$/)]],
            // Institution & Employment
            teacher_type: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            working_in: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            institute_name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            // Institute Address
            inst_state_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            inst_districts: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            inst_constituencyname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            inst_mandals: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            inst_panchayati: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            inst_address: [''],
            // Residential Address
            res_state_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            res_districts: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            res_constituencyname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            res_mandals: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            res_panchayati: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            res_address: [''],
            // Personal Achievements & Profile
            about_achievements: [''],
            // CV / Profile Upload (Optional)
            cv_profile: ['']
        });
    }
    TeacherPage.prototype.normalizeDenominations = function (list) {
        if (!Array.isArray(list) || list.length === 0)
            return this.getDefaultDenominations();
        return list.map(function (d, idx) {
            var rawName = (typeof d === 'string' ? d : (d.denomation_name || d.denomination_name || d.name || '')) || '';
            var cleanName = rawName.trim();
            return {
                id: d.id || idx + 1,
                denomation_name: cleanName,
                denomination_name: cleanName,
                name: cleanName
            };
        }).filter(function (d) { return d.name.length > 0; });
    };
    TeacherPage.prototype.normalizeExperienceLevels = function (rawExp) {
        if (!Array.isArray(rawExp) || rawExp.length === 0)
            return this.getDefaultExperienceLevels();
        return rawExp.map(function (e, idx) {
            var years = (e.years_range || e.name_en || '').toString().trim();
            var label = (e.label_te || e.name_te || e.years_range || e.name_en || '').toString().trim();
            return {
                id: e.id || idx + 1,
                years_range: years,
                name_en: years,
                label_te: label,
                name_te: label
            };
        }).filter(function (e) { return e.years_range.length > 0; });
    };
    TeacherPage.prototype.ionViewDidLoad = function () {
        // Pre-seed all master dropdowns synchronously so the UI is immediately populated
        this.roleCategories = this.getDefaultRoles();
        this.qualificationCategories = this.getDefaultQualifications();
        this.familyBackgrounds = this.getDefaultFamilyBackgrounds();
        this.institutionTypes = this.getDefaultInstitutionTypes();
        this.experienceLevels = this.getDefaultExperienceLevels();
        this.denominations = this.getDefaultDenominations();
        this.loadStates();
        this.loadTeachingMasterData();
        this.loadDenominations();
    };
    TeacherPage.prototype.gotohome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    TeacherPage.prototype.loadStates = function () {
        var _this = this;
        this.service.getstates().subscribe(function (res) {
            if (res && res.data) {
                _this.states = res.data;
            }
            else {
                _this.states = [
                    { id: 1, state_name: 'Andhra Pradesh-ఆంధ్రప్రదేశ్ (AP)', name: 'Andhra Pradesh (AP)' },
                    { id: 2, state_name: 'Telangana-తెలంగాణ (TG)', name: 'Telangana (TG)' }
                ];
            }
        }, function () {
            _this.states = [
                { id: 1, state_name: 'Andhra Pradesh-ఆంధ్రప్రదేశ్ (AP)', name: 'Andhra Pradesh (AP)' },
                { id: 2, state_name: 'Telangana-తెలంగాణ (TG)', name: 'Telangana (TG)' }
            ];
        });
    };
    TeacherPage.prototype.loadTeachingMasterData = function () {
        var _this = this;
        this.service.getTeachingMasterData().subscribe(function (res) {
            var payload = (res && res.data) ? res.data : res;
            if (payload) {
                if (payload.roles && payload.roles.length)
                    _this.roleCategories = payload.roles;
                if (payload.backgrounds && payload.backgrounds.length) {
                    _this.familyBackgrounds = payload.backgrounds;
                }
                else if (payload.family_backgrounds && payload.family_backgrounds.length) {
                    _this.familyBackgrounds = payload.family_backgrounds;
                }
                if (payload.institutions && payload.institutions.length) {
                    _this.institutionTypes = payload.institutions;
                }
                else if (payload.institution_types && payload.institution_types.length) {
                    _this.institutionTypes = payload.institution_types;
                }
                var rawExp = payload.experience || payload.experience_levels;
                if (rawExp && rawExp.length) {
                    _this.experienceLevels = _this.normalizeExperienceLevels(rawExp);
                }
                if (payload.qualifications && payload.qualifications.length) {
                    _this.qualificationCategories = payload.qualifications;
                }
                if (payload.denominations && payload.denominations.length) {
                    _this.denominations = _this.normalizeDenominations(payload.denominations);
                }
            }
        }, function () {
            if (!_this.roleCategories || !_this.roleCategories.length)
                _this.roleCategories = _this.getDefaultRoles();
            if (!_this.familyBackgrounds || !_this.familyBackgrounds.length)
                _this.familyBackgrounds = _this.getDefaultFamilyBackgrounds();
            if (!_this.institutionTypes || !_this.institutionTypes.length)
                _this.institutionTypes = _this.getDefaultInstitutionTypes();
            if (!_this.experienceLevels || !_this.experienceLevels.length)
                _this.experienceLevels = _this.getDefaultExperienceLevels();
            if (!_this.qualificationCategories || !_this.qualificationCategories.length)
                _this.qualificationCategories = _this.getDefaultQualifications();
            if (!_this.denominations || !_this.denominations.length)
                _this.denominations = _this.getDefaultDenominations();
        });
    };
    TeacherPage.prototype.loadDenominations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            var list = (res && res.data) ? res.data : (Array.isArray(res) ? res : []);
            if (list && list.length > 0) {
                _this.denominations = _this.normalizeDenominations(list);
            }
            else if (!_this.denominations || _this.denominations.length === 0) {
                _this.denominations = _this.getDefaultDenominations();
            }
        }, function () {
            if (!_this.denominations || _this.denominations.length === 0) {
                _this.denominations = _this.getDefaultDenominations();
            }
        });
    };
    TeacherPage.prototype.getDefaultDenominations = function () {
        return [
            { id: 1, name: 'అసెంబ్లీ ఆఫ్ గాడ్ - Assembly of God', denomation_name: 'అసెంబ్లీ ఆఫ్ గాడ్ - Assembly of God', denomination_name: 'అసెంబ్లీ ఆఫ్ గాడ్ - Assembly of God' },
            { id: 2, name: 'బాప్టిస్ట్ - Baptist', denomation_name: 'బాప్టిస్ట్ - Baptist', denomination_name: 'బాప్టిస్ట్ - Baptist' },
            { id: 3, name: 'బైబిల్ మిషన్ - Bible Mission', denomation_name: 'బైబిల్ మిషన్ - Bible Mission', denomination_name: 'బైబిల్ మిషన్ - Bible Mission' },
            { id: 4, name: 'కాథలిక్ - Catholic', denomation_name: 'కాథలిక్ - Catholic', denomination_name: 'కాథలిక్ - Catholic' },
            { id: 5, name: 'సి.ఎస్.ఐ - CSI (Church of South India)', denomation_name: 'సి.ఎస్.ఐ - CSI (Church of South India)', denomination_name: 'సి.ఎస్.ఐ - CSI (Church of South India)' },
            { id: 6, name: 'సి.ఎన్.ఐ - CNI (Church of North India)', denomation_name: 'సి.ఎన్.ఐ - CNI (Church of North India)', denomination_name: 'సి.ఎన్.ఐ - CNI (Church of North India)' },
            { id: 7, name: 'లూథరన్ - Lutheran', denomation_name: 'లూథరన్ - Lutheran', denomination_name: 'లూథరన్ - Lutheran' },
            { id: 8, name: 'మెథడిస్ట్ - Methodist', denomation_name: 'మెథడిస్ట్ - Methodist', denomination_name: 'మెథడిస్ట్ - Methodist' },
            { id: 9, name: 'పెంతెకొస్తు - Pentecostal', denomation_name: 'పెంతెకొస్తు - Pentecostal', denomination_name: 'పెంతెకొస్తు - Pentecostal' },
            { id: 10, name: 'సాల్వేషన్ ఆర్మీ - Salvation Army', denomation_name: 'సాల్వేషన్ ఆర్మీ - Salvation Army', denomination_name: 'సాల్వేషన్ ఆర్మీ - Salvation Army' },
            { id: 11, name: 'సెవెంత్ డే అడ్వెంటిస్ట్ - Seventh-day Adventist', denomation_name: 'సెవెంత్ డే అడ్వెంటిస్ట్ - Seventh-day Adventist', denomination_name: 'సెవెంత్ డే అడ్వెంటిస్ట్ - Seventh-day Adventist' },
            { id: 12, name: 'ఇండిపెండెంట్ చర్చి - Independent Church', denomation_name: 'ఇండిపెండెంట్ చర్చి - Independent Church', denomination_name: 'ఇండిపెండెంట్ చర్చి - Independent Church' },
            { id: 13, name: 'ఇతరులు - Others', denomation_name: 'ఇతరులు - Others', denomination_name: 'ఇతరులు - Others' }
        ];
    };
    TeacherPage.prototype.getDefaultRoles = function () {
        return [
            { id: 1, name_en: 'Administration', name_te: 'పరిపాలన (Administration)' },
            { id: 2, name_en: 'Teaching', name_te: 'బోధన (Teaching)' },
            { id: 3, name_en: 'Administration and Teaching', name_te: 'పరిపాలన మరియు బోధన (Administration & Teaching)' }
        ];
    };
    TeacherPage.prototype.getDefaultFamilyBackgrounds = function () {
        return [
            { id: 1, name_en: 'First Generation Employee', name_te: 'మొదటి తరం ఉద్యోగి (First Generation)' },
            { id: 2, name_en: 'Second Generation', name_te: 'రెండవ తరం ఉద్యోగి (Second Generation)' },
            { id: 3, name_en: 'Third Generation', name_te: 'మూడవ తరం ఉద్యోగి (Third Generation)' },
            { id: 4, name_en: 'Fourth Generation', name_te: 'నాల్గవ తరం ఉద్యోగి (Fourth Generation)' },
            { id: 5, name_en: 'Sixth Generation Employee', name_te: 'ఆరవ తరం ఉద్యోగి (Sixth Generation)' }
        ];
    };
    TeacherPage.prototype.getDefaultInstitutionTypes = function () {
        return [
            { id: 1, name_en: 'Anganwady', name_te: 'అంగన్‌వాడీ (Anganwady)' },
            { id: 2, name_en: 'Play School', name_te: 'ప్లే స్కూల్ (Play School)' },
            { id: 3, name_en: 'Primary School', name_te: 'ప్రాథమిక పాఠశాల (Primary School)' },
            { id: 4, name_en: 'High School', name_te: 'ఉన్నత పాఠశాల (High School)' },
            { id: 5, name_en: 'Junior College', name_te: 'జూనియర్ కళాశాల (Junior College)' },
            { id: 6, name_en: 'Vocational College', name_te: 'వృత్తి విద్యా కళాశాల (Vocational College)' },
            { id: 7, name_en: 'Diploma College', name_te: 'డిప్లొమా కళాశాల (Diploma College)' },
            { id: 8, name_en: 'Degree College', name_te: 'డిగ్రీ కళాశాల (Degree College)' },
            { id: 9, name_en: 'Technical College', name_te: 'ఇంజనీరింగ్ / సాంకేతిక కళాశాల (Technical College)' },
            { id: 10, name_en: 'Medical College', name_te: 'వైద్య కళాశాల (Medical College)' }
        ];
    };
    TeacherPage.prototype.getDefaultExperienceLevels = function () {
        return [
            { id: 1, years_range: '0-1 Years', name_en: '0-1 Years', label_te: '0 - 1 సంవత్సరం (0-1 Years)', name_te: '0 - 1 సంవత్సరం (0-1 Years)' },
            { id: 2, years_range: '1-3 Years', name_en: '1-3 Years', label_te: '1 - 3 సంవత్సరాలు (1-3 Years)', name_te: '1 - 3 సంవత్సరాలు (1-3 Years)' },
            { id: 3, years_range: '3-5 Years', name_en: '3-5 Years', label_te: '3 - 5 సంవత్సరాలు (3-5 Years)', name_te: '3 - 5 సంవత్సరాలు (3-5 Years)' },
            { id: 4, years_range: '5-10 Years', name_en: '5-10 Years', label_te: '5 - 10 సంవత్సరాలు (5-10 Years)', name_te: '5 - 10 సంవత్సరాలు (5-10 Years)' },
            { id: 5, years_range: '10-15 Years', name_en: '10-15 Years', label_te: '10 - 15 సంవత్సరాలు (10-15 Years)', name_te: '10 - 15 సంవత్సరాలు (10-15 Years)' },
            { id: 6, years_range: '15-20 Years', name_en: '15-20 Years', label_te: '15 - 20 సంవత్సరాలు (15-20 Years)', name_te: '15 - 20 సంవత్సరాలు (15-20 Years)' },
            { id: 7, years_range: '20+ Years', name_en: '20+ Years', label_te: '20 కంటే ఎక్కువ సంవత్సరాలు (20+ Years)', name_te: '20 కంటే ఎక్కువ సంవత్సరాలు (20+ Years)' }
        ];
    };
    TeacherPage.prototype.getDefaultQualifications = function () {
        return [
            { id: 1, name: '10th or Below 10th' },
            { id: 2, name: 'Inter' },
            { id: 3, name: 'UG' },
            { id: 4, name: 'PG' },
            { id: 5, name: 'Ph.D' },
            { id: 6, name: 'Post Doctoral' }
        ];
    };
    // ==========================================
    // CV / PROFILE UPLOAD HANDLERS
    // ==========================================
    TeacherPage.prototype.onCvFileSelected = function (event) {
        var target = event && event.target ? event.target : null;
        var files = target && target.files ? target.files : null;
        var file = files && files.length > 0 ? files[0] : null;
        if (!file)
            return;
        var parts = file.name ? file.name.split('.') : [];
        var ext = parts.length > 1 ? parts[parts.length - 1].toLowerCase() : '';
        if (ext !== 'pdf' && ext !== 'doc' && ext !== 'docx') {
            var alert_1 = this.alertCtrl.create({
                title: 'చెల్లని ఫైల్ (Invalid File)',
                subTitle: 'దయచేసి PDF లేదా DOC/DOCX ఫైల్ మాత్రమే అప్‌లోడ్ చేయండి.',
                buttons: ['సరే (OK)']
            });
            alert_1.present();
            if (target)
                target.value = '';
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            var alert_2 = this.alertCtrl.create({
                title: 'పరిమాణం ఎక్కువ (File Too Large)',
                subTitle: 'ఫైల్ పరిమాణం 5MB లోపు ఉండాలి.',
                buttons: ['సరే (OK)']
            });
            alert_2.present();
            if (target)
                target.value = '';
            return;
        }
        this.cvFileName = file.name;
        try {
            this.cdRef.detectChanges();
        }
        catch (e) { }
        var reader = new FileReader();
        var self = this;
        reader.onload = function () {
            self.cvBase64 = reader.result;
            self.teacherForm.patchValue({ cv_profile: self.cvBase64 });
            try {
                self.cdRef.detectChanges();
            }
            catch (e) { }
        };
        reader.readAsDataURL(file);
    };
    TeacherPage.prototype.openCvChooser = function (fileInput) {
        if (fileInput) {
            fileInput.click();
        }
    };
    TeacherPage.prototype.removeCvFile = function (fileInput) {
        this.cvBase64 = '';
        this.cvFileName = '';
        this.teacherForm.patchValue({ cv_profile: '' });
        if (fileInput) {
            fileInput.value = '';
        }
        var changeInput = document.getElementById('teacherCvChangeInput');
        if (changeInput) {
            changeInput.value = '';
        }
        try {
            this.cdRef.detectChanges();
        }
        catch (e) { }
    };
    // ==========================================
    // INSTITUTE LOCATION CASCADING
    // ==========================================
    TeacherPage.prototype.onInstStateChange = function (stateId) {
        var _this = this;
        this.instDistricts = [];
        this.instConstituencies = [];
        this.instMandals = [];
        this.instPanchayatis = [];
        this.teacherForm.patchValue({
            inst_districts: '',
            inst_constituencyname: '',
            inst_mandals: '',
            inst_panchayati: ''
        });
        if (stateId) {
            this.service.getdistrict(stateId).subscribe(function (res) {
                _this.instDistricts = (res && res.data) ? res.data : [];
            });
        }
    };
    TeacherPage.prototype.onInstDistrictChange = function (districtId) {
        var _this = this;
        this.instConstituencies = [];
        this.instMandals = [];
        this.instPanchayatis = [];
        this.teacherForm.patchValue({
            inst_constituencyname: '',
            inst_mandals: '',
            inst_panchayati: ''
        });
        if (districtId) {
            this.service.getconsistencys(districtId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.instConstituencies = list.filter(function (item) { return item.dstrct_id == districtId; });
            });
        }
    };
    TeacherPage.prototype.onInstConstituencyChange = function (constId) {
        var _this = this;
        this.instMandals = [];
        this.instPanchayatis = [];
        this.teacherForm.patchValue({
            inst_mandals: '',
            inst_panchayati: ''
        });
        if (constId) {
            this.service.getmandals(constId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.instMandals = list.filter(function (item) { return item.const_id == constId; });
            });
        }
    };
    TeacherPage.prototype.onInstMandalChange = function (mandalId) {
        var _this = this;
        this.instPanchayatis = [];
        this.teacherForm.patchValue({
            inst_panchayati: ''
        });
        if (mandalId) {
            this.service.gepanchayatis(mandalId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.instPanchayatis = list.filter(function (item) { return item.mndl_id == mandalId; });
            });
        }
    };
    // ==========================================
    // RESIDENTIAL LOCATION CASCADING
    // ==========================================
    TeacherPage.prototype.onResStateChange = function (stateId) {
        var _this = this;
        this.resDistricts = [];
        this.resConstituencies = [];
        this.resMandals = [];
        this.resPanchayatis = [];
        this.teacherForm.patchValue({
            res_districts: '',
            res_constituencyname: '',
            res_mandals: '',
            res_panchayati: ''
        });
        if (stateId) {
            this.service.getdistrict(stateId).subscribe(function (res) {
                _this.resDistricts = (res && res.data) ? res.data : [];
            });
        }
    };
    TeacherPage.prototype.onResDistrictChange = function (districtId) {
        var _this = this;
        this.resConstituencies = [];
        this.resMandals = [];
        this.resPanchayatis = [];
        this.teacherForm.patchValue({
            res_constituencyname: '',
            res_mandals: '',
            res_panchayati: ''
        });
        if (districtId) {
            this.service.getconsistencys(districtId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.resConstituencies = list.filter(function (item) { return item.dstrct_id == districtId; });
            });
        }
    };
    TeacherPage.prototype.onResConstituencyChange = function (constId) {
        var _this = this;
        this.resMandals = [];
        this.resPanchayatis = [];
        this.teacherForm.patchValue({
            res_mandals: '',
            res_panchayati: ''
        });
        if (constId) {
            this.service.getmandals(constId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.resMandals = list.filter(function (item) { return item.const_id == constId; });
            });
        }
    };
    TeacherPage.prototype.onResMandalChange = function (mandalId) {
        var _this = this;
        this.resPanchayatis = [];
        this.teacherForm.patchValue({
            res_panchayati: ''
        });
        if (mandalId) {
            this.service.gepanchayatis(mandalId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.resPanchayatis = list.filter(function (item) { return item.mndl_id == mandalId; });
            });
        }
    };
    // ==========================================
    // FORM SUBMISSION
    // ==========================================
    TeacherPage.prototype.submitTeacher = function () {
        if (this.teacherForm.invalid) {
            var alert_3 = this.alertCtrl.create({
                title: 'దయచేసి వివరాలను సరిచూసుకోండి (Please check details)',
                subTitle: 'ఎరుపు రంగుతో ఉన్న వివరాలను తప్పనిసరిగా నమోదు చేయాలి.',
                buttons: ['సరే (OK)']
            });
            alert_3.present();
            return;
        }
        var loader = this.loadingCtrl.create({
            content: 'మీ వివరాలు నమోదవుతున్నాయి... (Submitting...)',
            spinner: 'crescent'
        });
        loader.present();
        var formVal = this.teacherForm.value;
        var payload = {
            name: formVal.name_with_surname,
            name_with_surname: formVal.name_with_surname,
            gender: formVal.gender,
            mobile: formVal.mobile,
            email: formVal.email || '',
            designation: formVal.exact_designation,
            exact_designation: formVal.exact_designation,
            role_category: formVal.role_category,
            qualification_category: formVal.qualification_category,
            total_experience_years: formVal.total_experience_years,
            experience_in: formVal.experience_in,
            caste: formVal.caste,
            subcaste: formVal.subcaste || '',
            faith_category: formVal.faith_category,
            family_background: formVal.family_background,
            pastor_phone: formVal.pastor_phone || '',
            teacher_type: formVal.teacher_type,
            working_in: formVal.working_in,
            institute_name: formVal.institute_name,
            // Institute Address
            inst_state_id: formVal.inst_state_id,
            inst_district_id: formVal.inst_districts,
            inst_constituency_id: formVal.inst_constituencyname,
            inst_mandal_id: formVal.inst_mandals,
            inst_panchayat_id: formVal.inst_panchayati,
            inst_address: formVal.inst_address || '',
            // Residential Address
            res_state_id: formVal.res_state_id,
            res_district_id: formVal.res_districts,
            res_constituency_id: formVal.res_constituencyname,
            res_mandal_id: formVal.res_mandals,
            res_panchayat_id: formVal.res_panchayati,
            res_address: formVal.res_address || '',
            // About & Achievements
            about_achievements: formVal.about_achievements || '',
            description: formVal.about_achievements || '',
            // CV / Profile
            cv_profile: this.cvBase64 || '',
            cv_file: this.cvBase64 || ''
        };
        var self = this;
        this.service.registerTeacher(payload).subscribe(function (res) {
            loader.dismiss();
            if (res && (res.status === 200 || res.id)) {
                var successAlert = self.alertCtrl.create({
                    title: 'నమోదు పూర్తయింది! (Success)',
                    subTitle: 'మీ బోధనా రంగ ఉద్యోగి వివరాలు విజయవంతంగా నమోదు చేయబడ్డాయి.',
                    buttons: [
                        {
                            text: 'సరే (OK)',
                            handler: function () {
                                self.navCtrl.setRoot('FormsPage');
                            }
                        }
                    ]
                });
                successAlert.present();
            }
            else {
                var msg = (res && res.message) ? res.message : 'Submission failed. Please try again.';
                var errAlert = self.alertCtrl.create({
                    title: 'విఫలమైంది (Failed)',
                    subTitle: msg,
                    buttons: ['సరే (OK)']
                });
                errAlert.present();
            }
        }, function () {
            loader.dismiss();
            var netAlert = self.alertCtrl.create({
                title: 'నెట్‌వర్క్ లోపం (Network Error)',
                subTitle: 'Unable to connect to server. Please try again.',
                buttons: ['సరే (OK)']
            });
            netAlert.present();
        });
    };
    TeacherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacher',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\teacher\teacher.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title style="text-align: center; font-size: 15px;">\n\n      <b>బోధనా రంగ ఉద్యోగుల నమోదు (Teachers)</b>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="gotohome()">\n\n        <ion-icon name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n  <div class="form-card">\n\n    <div class="header-box">\n\n      <div style="font-size: 30px; margin-bottom: 6px;">📚</div>\n\n      <h3 style="margin: 0; font-size: 16px; font-weight: bold;">బోధనా రంగంలో ఉద్యోగుల నమోదు</h3>\n\n      <p style="margin: 4px 0 0 0; font-size: 11.5px; opacity: 0.9;">\n\n        Registration of Employees in Teaching Field (AP & TG)\n\n      </p>\n\n    </div>\n\n\n\n    <form [formGroup]="teacherForm" (ngSubmit)="submitTeacher()">\n\n\n\n      <!-- SECTION 1: PERSONAL DETAILS -->\n\n      <div class="section-heading">1. వ్యక్తిగత వివరాలు (Personal Details)</div>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>ఇంటిపేరుతో సహా పూర్తి పేరు (Name with Surname) <span class="req">*</span></ion-label>\n\n        <ion-input type="text" formControlName="name_with_surname" placeholder="ఉదా: కొండేటి రాజేష్ (Kondeti Rajesh)"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>లింగం (Gender) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="gender" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option value="Male">పురుషుడు (Male)</ion-option>\n\n          <ion-option value="Female">స్త్రీ (Female)</ion-option>\n\n          <ion-option value="Other">ఇతరులు (Other)</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>మొబైల్ నంబర్ (Mobile Number) <span class="req">*</span></ion-label>\n\n        <ion-input type="tel" maxlength="10" formControlName="mobile" placeholder="10 అంకెల మొబైల్ నంబర్"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>ఈమెయిల్ (Email Address)</ion-label>\n\n        <ion-input type="email" formControlName="email" placeholder="example@mail.com"></ion-input>\n\n      </ion-item>\n\n\n\n\n\n      <!-- SECTION 2: PROFESSIONAL & TEACHING PROFILE -->\n\n      <div class="section-heading">2. వృత్తి & బోధనా అనుభవం (Teaching Profile)</div>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>ఖచ్చితమైన హోదా (Exact Designation) <span class="req">*</span></ion-label>\n\n        <ion-input type="text" formControlName="exact_designation" placeholder="ఉదా: SGT, School Assistant, Lecturer, Principal, Professor..."></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>పాత్ర వర్గం (Role Category) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="role_category" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let r of roleCategories" [value]="r.name_en">{{ r.name_te }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>విద్యార్హత వర్గం (Qualification Category) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="qualification_category" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let q of qualificationCategories" [value]="q.name || q.qualification_name">\n\n            {{ q.name || q.qualification_name }}\n\n          </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>మొత్తం అనుభవం (Total Experience : Years) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="total_experience_years" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let exp of experienceLevels" [value]="exp.years_range || exp.name_en">{{ exp.label_te || exp.name_te || exp.years_range }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>అనుభవం ఉన్న విభాగం / సబ్జెక్ట్ (Experience In : Subject / Field) <span class="req">*</span></ion-label>\n\n        <ion-input type="text" formControlName="experience_in" placeholder="ఉదా: Mathematics, Physics, English, Computer Science..."></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>ఉపాధ్యాయుని రకం (Teacher Type) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="teacher_type" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option value="Government">ప్రభుత్వ (Government)</ion-option>\n\n          <ion-option value="Private">ప్రైవేట్ (Private)</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>ఎక్కడ పనిచేస్తున్నారు (Working In) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="working_in" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let inst of institutionTypes" [value]="inst.name_en">{{ inst.name_te }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>విద్యా సంస్థ పేరు (Institute Name) <span class="req">*</span></ion-label>\n\n        <ion-input type="text" formControlName="institute_name" placeholder="ఉదా: Z.P. High School / Andhra Loyola College..."></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>మీ గురించి మరియు మీ సాధించిన విజయాల గురించి రాయండి (Write about yourself and your achievements)</ion-label>\n\n        <ion-textarea formControlName="about_achievements" rows="4" placeholder="మీ విద్యా బోధనా ప్రస్థానం, సాధించిన విజయాలు, గుర్తింపులు లేదా ఇతర ముఖ్య వివరాలు..."></ion-textarea>\n\n      </ion-item>\n\n\n\n      <!-- CV / PROFILE UPLOAD CONTAINER (Outside ion-item for 100% Mobile Touch Reliability) -->\n\n      <div class="cv-upload-container">\n\n        <div class="cv-label-box">\n\n          <span class="cv-main-label">సీవీ / ప్రొఫైల్ అప్‌లోడ్ (Upload CV / Profile)</span>\n\n          <span class="cv-opt-label">(ఐచ్ఛికం / Optional)</span>\n\n        </div>\n\n\n\n        <!-- When NO file is selected -->\n\n        <div *ngIf="!cvFileName" class="cv-dropzone">\n\n          <img src="assets/icon/upload.svg" class="cv-upload-icon">\n\n          <div class="cv-hint-text">\n\n            మీ సీవీ లేదా ప్రొఫైల్ ఫైల్‌ను ఇక్కడ అప్‌లోడ్ చేయండి (PDF, DOC, DOCX - గరిష్ట పరిమాణం 5MB)\n\n          </div>\n\n\n\n          <!-- Direct Native Clickable Button via Overlay Input -->\n\n          <div class="cv-btn-wrapper">\n\n            <button ion-button block icon-start class="cv-select-btn" type="button">\n\n              <ion-icon name="cloud-upload"></ion-icon>\n\n              సీవీ / ప్రొఫైల్ ఫైల్ ఎంచుకోండి (Choose CV / Profile)\n\n            </button>\n\n            <input #teacherCvFileInput id="teacherCvFileInput" type="file" \n\n                   (change)="onCvFileSelected($event)" \n\n                   accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" \n\n                   class="cv-native-input">\n\n          </div>\n\n        </div>\n\n\n\n        <!-- When file IS selected -->\n\n        <div *ngIf="cvFileName" class="cv-file-card">\n\n          <div class="cv-file-info">\n\n            <span class="cv-file-icon">📄</span>\n\n            <div class="cv-file-details">\n\n              <div class="cv-file-name">{{ cvFileName }}</div>\n\n              <div class="cv-file-status">✓ ఫైల్ సిద్ధంగా ఉంది (Ready to upload)</div>\n\n            </div>\n\n          </div>\n\n\n\n          <div class="cv-file-actions">\n\n            <div class="cv-change-wrapper">\n\n              <button ion-button small outline color="primary" type="button" class="cv-change-btn">\n\n                <ion-icon name="sync"></ion-icon> మార్చండి (Change)\n\n              </button>\n\n              <input type="file" (change)="onCvFileSelected($event)" \n\n                     accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" \n\n                     class="cv-native-input">\n\n            </div>\n\n            <button ion-button small outline color="danger" type="button" (click)="removeCvFile(teacherCvFileInput)" class="cv-remove-btn">\n\n              <ion-icon name="trash"></ion-icon> తొలగించు (Remove)\n\n            </button>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n\n\n      <!-- SECTION 3: SOCIAL, FAITH & FAMILY BACKGROUND -->\n\n      <div class="section-heading">3. సామాజిక, ఆధ్యాత్మిక & కుటుంబ నేపథ్యం (Background)</div>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>కులం (Caste Category) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="caste" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let c of casteList" [value]="c">{{ c }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>ఉప కులం (Subcaste)</ion-label>\n\n        <ion-input type="text" formControlName="subcaste" placeholder="ఉప కులం పేరు (ఐచ్ఛికం)"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>విశ్వాస వర్గం / డినామినేషన్ (Faith Category) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="faith_category" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let d of denominations" [value]="d.denomation_name || d.denomination_name || d.name">\n\n            {{ d.denomation_name || d.denomination_name || d.name }}\n\n          </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>కుటుంబ నేపథ్యం (Family Background) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="family_background" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let fb of familyBackgrounds" [value]="fb.name_en">{{ fb.name_te }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>మీ చర్చి / పాస్టర్ గారి ఫోన్ నంబర్ (Church / Pastor Phone)</ion-label>\n\n        <ion-input type="tel" maxlength="10" formControlName="pastor_phone" placeholder="పాస్టర్ గారి 10 అంకెల మొబైల్ నంబర్ (ఐచ్ఛికం)"></ion-input>\n\n      </ion-item>\n\n\n\n\n\n      <!-- SECTION 4: INSTITUTE ADDRESS (State-Guarded Cascade) -->\n\n      <div class="section-heading">4. విద్యా సంస్థ చిరునామా (Institute Address)</div>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>రాష్ట్రం (Institute State) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="inst_state_id" (ionChange)="onInstStateChange($event)" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let s of states" [value]="s.id">{{ s.state_name || s.name }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>జిల్లా (Institute District) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="inst_districts" (ionChange)="onInstDistrictChange($event)" [disabled]="!teacherForm.get(\'inst_state_id\').value" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let d of instDistricts" [value]="d.id">{{ d.distrct_nm || d.districtname }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>నియోజకవర్గం (Institute Constituency) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="inst_constituencyname" (ionChange)="onInstConstituencyChange($event)" [disabled]="!teacherForm.get(\'inst_districts\').value" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let c of instConstituencies" [value]="c.id">{{ c.const_nm || c.constituency_name || c.name }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>మండలం (Institute Mandal) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="inst_mandals" (ionChange)="onInstMandalChange($event)" [disabled]="!teacherForm.get(\'inst_constituencyname\').value" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let m of instMandals" [value]="m.id">{{ m.mndl_nm || m.mandal_name || m.name }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>పంచాయతీ / గ్రామం (Institute Panchayat) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="inst_panchayati" [disabled]="!teacherForm.get(\'inst_mandals\').value" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let p of instPanchayatis" [value]="p.id">{{ p.pnchyt_nm || p.panchayat_name || p.name }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>సంస్థ వీధి / డోర్ నం / ల్యాండ్‌మార్క్ (Street, Door No, Landmark)</ion-label>\n\n        <ion-input type="text" formControlName="inst_address" placeholder="విద్యా సంస్థ వివరణాత్మక చిరునామా"></ion-input>\n\n      </ion-item>\n\n\n\n\n\n      <!-- SECTION 5: RESIDENTIAL ADDRESS (State-Guarded Cascade) -->\n\n      <div class="section-heading">5. నివాస చిరునామా (Residential Address)</div>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>రాష్ట్రం (Residential State) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="res_state_id" (ionChange)="onResStateChange($event)" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let s of states" [value]="s.id">{{ s.state_name || s.name }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>జిల్లా (Residential District) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="res_districts" (ionChange)="onResDistrictChange($event)" [disabled]="!teacherForm.get(\'res_state_id\').value" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let d of resDistricts" [value]="d.id">{{ d.distrct_nm || d.districtname }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>నియోజకవర్గం (Residential Constituency) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="res_constituencyname" (ionChange)="onResConstituencyChange($event)" [disabled]="!teacherForm.get(\'res_districts\').value" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let c of resConstituencies" [value]="c.id">{{ c.const_nm || c.constituency_name || c.name }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>మండలం (Residential Mandal) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="res_mandals" (ionChange)="onResMandalChange($event)" [disabled]="!teacherForm.get(\'res_constituencyname\').value" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let m of resMandals" [value]="m.id">{{ m.mndl_nm || m.mandal_name || m.name }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>పంచాయతీ / గ్రామం (Residential Panchayat) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="res_panchayati" [disabled]="!teacherForm.get(\'res_mandals\').value" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let p of resPanchayatis" [value]="p.id">{{ p.pnchyt_nm || p.panchayat_name || p.name }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>ఇంటి నంబర్ / వీధి / ల్యాండ్‌మార్క్ (House No, Street, Landmark)</ion-label>\n\n        <ion-input type="text" formControlName="res_address" placeholder="మీ నివాస పూర్తి చిరునామా"></ion-input>\n\n      </ion-item>\n\n\n\n      <!-- SUBMIT BUTTON -->\n\n      <button ion-button block class="submit-btn" type="submit">\n\n        నమోదు చేయండి (Submit Registration)\n\n      </button>\n\n\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\teacher\teacher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], TeacherPage);
    return TeacherPage;
}());

//# sourceMappingURL=teacher.js.map

/***/ })

});
//# sourceMappingURL=12.js.map