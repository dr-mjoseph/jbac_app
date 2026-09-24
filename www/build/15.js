webpackJsonp([15],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(497);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
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




// import { HomePage } from '../home/home';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, formBuilder, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.details = [];
        this.lead = false;
        this.mini = false;
        this.leadertype = false;
        this.leadtype = false;
        this.wingtype = false;
        this.wingtypes = false;
        this.subward = false;
        this.father = false;
        this.districts = [];
        this.mandals = [];
        this.constituency = [];
        this.panchayati = [];
        //////////////////////pastor change/////////////////////
        // assicoation: boolean = false;
        // pastorassicoation(event: any) {
        //   var as = event.value
        //   if (as == 'yes') {
        //     this.assicoation = true
        //   } else {
        //     this.assicoation = false
        //   }
        // }
        this.wingtypesystem = false;
        this.pastorform = this.formBuilder.group({
            pastorname: [''],
            dob: [''],
            about_desp: [''],
            gender: [''],
            phonenumber: [''],
            phonenumber2: [''],
            pa_phonenumber: [''],
            staus: [''],
            designation: [''],
            caste: [''],
            nativeplace: [''],
            talent: [''],
            education: [''],
            district_id: [''],
            constituency_id: [''],
            mandal_id: [''],
            panchayat_id: [''],
            ward: [''],
            youtubechanel: [''],
            password: [''],
            leaders: [''],
            leadertype: ['',],
            generaltype: ['',],
            wingtype: ['',],
            facebook: [''],
            god: [''],
            lifegoal: [''],
            denomination_id: [''],
            villagename: [''],
            wingtypes: [''],
            pastortype: [''],
            ministry_id: [''],
            subward: [''],
            fellowship: [''],
            assicoation_id: [''],
            position: [''],
            subcaste: [''],
            leadership: ['']
        });
        this.churchregsiterform = this.formBuilder.group({
            church_name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            denomination_id: [''],
            total_members: [''],
            district_id: [''],
            constituency_id: [''],
            mandal_id: [''],
            village_id: [''],
            street: [''],
            pastor_id: [''],
            location: [''],
            contactnumber: [''],
            description: [''],
            village_name: [''],
            password: [''],
            churchtype: [''],
            ministry_id: [''],
            facebook: [''],
            youtube: ['']
        });
        this.updateprofileministry = this.formBuilder.group({
            ministryname: [''],
            denomation: [''],
            ministryemail: [''],
            ministrywebsite: [''],
            headnmber: [''],
            number_ofchurches: [''],
            number_ofmembers: [''],
            district_id: [''],
            constituency_id: [''],
            mandal_id: [''],
            panchayat_id: [''],
            password: [''],
            pastor: [''],
            description: [''],
            term: [''],
        });
        this.beliverform = this.formBuilder.group({
            fname: [''],
            whatsapp: [''],
            dob: [''],
            gender: [''],
            email: [''],
            mobile_number: [''],
            status: [''],
            income: [''],
            caste: [''],
            subcaste: [''],
            nativeplace: [''],
            talent: [''],
            education: [''],
            designation: [''],
            dpartment: [''],
            districts: [''],
            mandals: [''],
            panchayati: [''],
            constituencyname: [''],
            villagename: [''],
            wardnumber: [''],
            ward: [''],
            nri: [''],
            leadership: [''],
            leadertype: [''],
            generaltype: [''],
            subward: [''],
            wingtype: [''],
            wingtypes: [''],
            denomination_id: [''],
            hobbies: [''],
            spirti: [''],
            lifegoal: [''],
            church: [''],
            pastor: [''],
            youtube: [''],
            lname: [''],
            god: [''],
        });
        this.studentform = this.formBuilder.group({
            studentname: [''],
            gender: [''],
            number: [''],
            study: [''],
            schname: [''],
            fathername: [''],
            aboutyourself: [''],
            nativeplace: [''],
            caste: [''],
            talent: [''],
            district_id: [''],
            constituency_id: [''],
            mandal_id: [''],
            village_id: [''],
            password: [''],
            church: ['',],
            pastor: [''],
            leadership: [''],
            leadertype: [''],
            generaltype: [''],
            wingtype: ['',],
            wingtypes: [''],
            dob: [''],
            denomination_id: [''],
            hobbies: [''],
            spirti: [''],
            lifegoal: [''],
            whatsappnumber: [''],
            nri: [''],
            ward: [''],
            wardnumber: [''],
            villagename: [''],
            respanchayati: [''],
            resmandals: [''],
            resconstituencyname: ['',],
            resdistricts: [''],
            god: [''],
            term: [''],
            mother: [''],
            orphon: [''],
            subcaste: [''],
            subward: ['']
        });
        this.independentorgainsationform = this.formBuilder.group({
            organisation_name: [''],
            checkbox: [''],
            believer_id: [''],
            pastor_id: [''],
            denomation: [''],
            org_address: [''],
            location: [''],
            contact_num: [''],
            email: [''],
            website: [''],
            service_name: [''],
            organizationtype: [''],
            ministry_id: [''],
            password: [''],
            districts: [''],
            constituencyname: [''],
            mandals: [''],
            panchayati: [''],
            villagename: [''],
            ward: [''],
            term: ['']
        });
        this.pastorsassociations = this.formBuilder.group({
            pa_name: [''],
            pastor_id: [''],
            level: [''],
            phonenumber: [''],
            whatsapp_number: [''],
            totalleadrs: [''],
            address: [''],
            district_id: [''],
            constituency_id: [''],
            mandal_id: [''],
            village_id: [''],
            website: [''],
            workingareas: [''],
            description: [''],
            password: [''],
            term: [''],
        });
        this.ministryform = this.formBuilder.group({
            ministryname: [''],
            denomation_id: [''],
            headname: [''],
            ministryemail: [''],
            ministrywebsite: [''],
            headnmber: [''],
            number_ofchurches: [''],
            number_ofmembers: [''],
            district_id: [''],
            constituency_id: [''],
            mandal_id: [''],
            panchayat_id: [''],
            pastor: [''],
            personal_secretary: [''],
            remarks: [''],
            description: ['']
        });
        this.categoryid = localStorage.getItem("category_id");
        this.category = localStorage.getItem("category");
        this.name = localStorage.getItem("name");
        this.mobile_number = localStorage.getItem("mobile_number");
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        this.geteditdtails();
        this.personaldata();
        this.getdenomations();
        this.getpastorassciation();
        this.getwing();
        this.getbelivers();
        this.getdistric();
        this.getmandals(0);
        this.getconstency(0);
        this.gepanchayati(0);
        this.getservice();
    };
    ProfilePage.prototype.getservice = function () {
        var _this = this;
        this.service.getservices().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.services = res.data;
            }
        });
    };
    ProfilePage.prototype.getpastorassciation = function () {
        var _this = this;
        this.service.getpastorassci().subscribe(function (res) {
            _this.assicoations = res.data;
        });
    };
    ProfilePage.prototype.personaldata = function () {
        var _this = this;
        var data = {
            category_id: localStorage.getItem('category_id'),
        };
        this.service.getuserprofilereport(data).subscribe(function (res) {
            _this.profiledata = res.data[0];
        });
    };
    ProfilePage.prototype.getdistric = function () {
        var _this = this;
        this.service.getdistrict().subscribe(function (res) {
            _this.districts = res.data;
        });
    };
    ProfilePage.prototype.getconstency = function (event) {
        var _this = this;
        if (event != 0) {
            var id = event;
        }
        this.service.getconsistencys().subscribe(function (res) {
            if (event == 0) {
                _this.constituency = res.data;
            }
            else {
                _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
            }
        });
    };
    ProfilePage.prototype.getmandals = function (event) {
        var _this = this;
        if (event != 0) {
            var id = event;
        }
        this.service.getmandals().subscribe(function (res) {
            if (event == 0) {
                _this.mandals = res.data;
            }
            else {
                _this.mandals = res.data.filter(function (data) { return data.const_id == id; });
            }
        });
    };
    ProfilePage.prototype.gepanchayati = function (event) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
        });
        this.loading.present();
        if (event != 0) {
            var id = event;
        }
        this.service.gepanchayatis().subscribe(function (res) {
            if (event == 0) {
                _this.panchayati = res.data;
                _this.loading.dismiss();
            }
            else {
                _this.panchayati = res.data.filter(function (data) { return data.mndl_id == id; });
                _this.loading.dismiss();
            }
        });
    };
    ProfilePage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    ProfilePage.prototype.getbelivers = function () {
        var _this = this;
        this.service.getbelivers().subscribe(function (res) {
            _this.bliversdata = res.data;
        });
    };
    ProfilePage.prototype.onradioleadertyperajkumar = function (event) {
        var apple = event.target.value;
        if (apple == "YES") {
            this.lead = true;
        }
        else {
            this.lead = false;
        }
    };
    ProfilePage.prototype.onradiochange = function (event) {
        var a = event.target.value;
        if (a == 'YES') {
            this.beliverform.patchValue({
                leadertype: '',
            });
            this.pastorform.patchValue({
                leadertype: '',
            });
            this.studentform.patchValue({
                leadertype: '',
            });
            this.lead = true;
        }
        if (a == 'NO') {
            this.beliverform.patchValue({
                leadertype: '',
            });
            this.pastorform.patchValue({
                leadertype: '',
            });
            this.studentform.patchValue({
                leadertype: '',
            });
            this.lead = false;
            this.leadtype = false;
            this.wingtype = false;
            this.wingtypes = false;
            this.subward = false;
        }
    };
    ProfilePage.prototype.getwing = function () {
        var _this = this;
        this.service.getwing().subscribe(function (res) {
            _this.wings = res.data;
        });
    };
    ProfilePage.prototype.onsubward = function (event) {
        var s = event;
        if (s == '6') {
            this.subward = true;
        }
        else {
            this.subward = false;
        }
    };
    ProfilePage.prototype.onradioleadertype = function (event) {
        var a = event.target.value;
        if (a == '1') {
            this.leadtype = true;
            this.wingtype = false;
            this.wingtypes = false;
            this.subward = true;
        }
        else {
            this.leadtype = false;
            this.wingtype = true;
            this.wingtypes = true;
            this.subward = false;
        }
    };
    ProfilePage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    ProfilePage.prototype.geteditdtails = function () {
        var _this = this;
        var data = {
            category_id: this.categoryid,
            usr_id: localStorage.getItem('usr_id')
        };
        this.service.geteditdtails(data).subscribe(function (res) {
            _this.details = res.data[0];
            _this.pastorform.patchValue({
                pastorname: _this.details.pastorname,
                phonenumber: _this.details.phonenumber,
                dob: _this.details.dob,
                gender: _this.details.gender,
                designation: _this.details.designation,
                pa_phonenumber: _this.details.pa_phonenumber,
                staus: _this.details.staus,
                caste: _this.details.caste,
                nativeplace: _this.details.nativeplace,
                talent: _this.details.talent,
                education: _this.details.education,
                youtubechanel: _this.details.youtubechanel,
                facebook: _this.details.facebook,
                about_desp: _this.details.about_desp,
                lifegoal: _this.details.lifegoal,
                god: _this.details.god,
                district_id: _this.details.district_id,
                constituency_id: _this.details.constituency_id,
                mandal_id: _this.details.mandal_id,
                panchayat_id: _this.details.village_id,
                location: _this.details.location,
                villagename: _this.details.villagename,
                subcaste: _this.details.subcaste,
                fellowship: _this.details.fellowship,
                position: _this.details.position,
                assicoation_id: _this.details.assicoation_id,
                denomination_id: _this.details.denomination_id,
                pastortype: _this.details.pastortype,
                leaders: _this.details.leadership,
                phonenumber2: _this.details.phonenumber2
            });
            _this.churchregsiterform.patchValue({
                church_name: _this.details.church_name,
                denomination_id: _this.details.denomination_id,
                pastor_id: _this.details.pastor_id,
                total_members: _this.details.total_members,
                contactnumber: _this.details.contactnumber,
                description: _this.details.description,
                district_id: _this.details.district_id,
                constituency_id: _this.details.constituency_id,
                mandal_id: _this.details.mandal_id,
                village_id: _this.details.village_id,
                street: _this.details.street,
                location: _this.details.location,
                password: _this.details.password,
                village_name: _this.details.village_name,
                churchtype: _this.details.churchtype,
                ministry_id: _this.details.ministry_id,
                youtube: _this.details.youtube,
                facebook: _this.details.facebook
            });
            _this.updateprofileministry.patchValue({
                ministryname: _this.details.ministryname,
                headnmber: _this.details.headnmber,
                denomation: _this.details.denomation,
                ministryemail: _this.details.ministryemail,
                ministrywebsite: _this.details.ministrywebsite,
                number_ofchurches: _this.details.number_ofchurches,
                number_ofmembers: _this.details.number_ofmembers,
                district_id: _this.details.district_id,
                constituency_id: _this.details.constituency_id,
                mandal_id: _this.details.mandal_id,
                panchayat_id: _this.details.panchayat_id,
                password: _this.details.password,
                pastor: _this.details.pastor,
                description: _this.details.description,
                term: _this.details.term
            });
            _this.beliverform.patchValue({
                fname: _this.details.fname,
                whatsapp: _this.details.whatsapp,
                dob: _this.details.dob,
                gender: _this.details.gender,
                email: _this.details.email,
                mobile_number: _this.details.mobile_number,
                status: _this.details.status,
                income: _this.details.income,
                caste: _this.details.caste,
                subcaste: _this.details.subcaste,
                nativeplace: _this.details.nativeplace,
                talent: _this.details.talent,
                education: _this.details.education,
                designation: _this.details.designation,
                dpartment: _this.details.dpartment,
                districts: _this.details.district_id,
                mandals: _this.details.mandal_id,
                panchayati: _this.details.panchayat_id,
                constituencyname: _this.details.constituency_id,
                villagename: _this.details.villagename,
                wardnumber: _this.details.wardnumber,
                ward: _this.details.ward,
                nri: _this.details.livingfrom,
                leadership: _this.details.leadership,
                leadertype: _this.details.leadertype,
                generaltype: _this.details.generaltype,
                subward: _this.details.subward,
                wingtype: _this.details.wingtype,
                wingtypes: _this.details.wingtypes,
                denomination_id: _this.details.denomination_id,
                hobbies: _this.details.hobbies,
                spirti: _this.details.spirti,
                lifegoal: _this.details.lifegoal,
                church: _this.details.church_id,
                pastor: _this.details.pastor_id,
                youtube: _this.details.youtube,
                lname: _this.details.lname,
                god: _this.details.god,
            });
            _this.studentform.patchValue({
                studentname: _this.details.studentname,
                gender: _this.details.gender,
                number: _this.details.number,
                study: _this.details.study,
                schname: _this.details.schname,
                fathername: _this.details.fathername,
                aboutyourself: _this.details.aboutyourself,
                nativeplace: _this.details.nativeplace,
                caste: _this.details.caste,
                talent: _this.details.talent,
                district_id: _this.details.district_id,
                constituency_id: _this.details.constituency_id,
                mandal_id: _this.details.mandal_id,
                village_id: _this.details.village_id,
                password: _this.details.password,
                church: _this.details.church_id,
                pastor: _this.details.pastor_id,
                leadership: _this.details.leadership,
                leadertype: _this.details.leadertype,
                generaltype: _this.details.generaltype,
                wingtype: _this.details.wingtype,
                wingtypes: _this.details.wingtypes,
                dob: _this.details.dob,
                denomination_id: _this.details.denomination_id,
                hobbies: _this.details.hobbies,
                spirti: _this.details.spirti,
                lifegoal: _this.details.lifegoal,
                whatsappnumber: _this.details.whatsappnumber,
                nri: _this.details.nri,
                ward: _this.details.ward,
                wardnumber: _this.details.wardnumber,
                villagename: _this.details.villagename,
                respanchayati: _this.details.respanchayati,
                resmandals: _this.details.resmandals,
                resconstituencyname: _this.details.resconstituencyname,
                resdistricts: _this.details.resdistricts,
                god: _this.details.god,
                term: _this.details.term,
                mother: _this.details.mother,
                orphon: _this.details.orphonintersted,
                subcaste: _this.details.subcaste,
            });
            _this.independentorgainsationform.patchValue({
                organisation_name: _this.details.organisation_name,
                checkbox: _this.details.organizationtype,
                believer_id: _this.details.believer_id,
                pastor_id: _this.details.pastor_id,
                denomation: _this.details.denomation,
                org_address: _this.details.org_address,
                location: _this.details.location,
                contact_num: _this.details.contact_num,
                email: _this.details.email,
                website: _this.details.website,
                service_name: _this.details.service_name,
                organizationtype: _this.details.organizationtype,
                ministry_id: _this.details.ministry_id,
                password: _this.details.password,
                districts: _this.details.districts,
                constituencyname: _this.details.constituencyname,
                mandals: _this.details.mandals,
                panchayati: _this.details.panchayati,
                villagename: _this.details.villagename,
                ward: _this.details.ward,
                term: _this.details.term,
            });
            _this.pastorsassociations.patchValue({
                pa_name: _this.details.paname,
                pastor_id: _this.details.headname,
                level: _this.details.level,
                phonenumber: _this.details.phonenumber,
                whatsapp_number: _this.details.whatsapp_number,
                totalleadrs: _this.details.totalleadrs,
                address: _this.details.address,
                district_id: _this.details.districtname,
                constituency_id: _this.details.constituencyname,
                mandal_id: _this.details.mandals,
                village_id: _this.details.panchaiti,
                website: _this.details.website,
                workingareas: _this.details.workingareas,
                description: _this.details.description,
            });
            _this.ministryform.patchValue({
                ministryname: _this.details.ministryname,
                denomation_id: _this.details.denomation_id,
                headname: _this.details.headname,
                ministryemail: _this.details.ministryemail,
                ministrywebsite: _this.details.ministrywebsite,
                headnmber: _this.details.headnmber,
                number_ofchurches: _this.details.number_ofchurches,
                number_ofmembers: _this.details.number_ofmembers,
                district_id: _this.details.district_id,
                constituency_id: _this.details.constituency_id,
                mandal_id: _this.details.mandal_id,
                panchayat_id: _this.details.panchayat_id,
                pastor: _this.details.pastor,
                personal_secretary: _this.details.personal_secretary,
                remarks: _this.details.remarks,
                description: _this.details.description,
            });
        });
    };
    ProfilePage.prototype.editbeliver = function () {
        this.beliverform.value.usr_id = localStorage.getItem('usr_id');
        this.service.editbeliver(this.beliverform.value).subscribe(function (res) {
            if (res.status == 200) {
                alert('విజయవంతం గా అప్ డేట్ చేసినారు');
            }
            else {
                alert('server down');
            }
        });
    };
    // Accept Input As a Number Only
    ProfilePage.prototype.numericOnly = function (event) {
        var patt = /^([0-9])$/;
        var result = patt.test(event.key);
        return result;
    };
    ProfilePage.prototype.editstudent = function () {
        this.studentform.value.usr_id = localStorage.getItem('usr_id');
        this.service.editstudent(this.studentform.value).subscribe(function (res) {
            if (res.status == 200) {
                alert('విజయవంతం గా అప్ డేట్ చేసినారు');
            }
            else {
                alert('server down');
            }
        });
    };
    ProfilePage.prototype.postministryupdate = function () {
        this.ministryform.value.usr_id = localStorage.getItem('usr_id');
        this.service.editministry(this.ministryform.value).subscribe(function (res) {
            if (res.status == 200) {
                alert('విజయవంతం గా అప్ డేట్ చేసినారు');
            }
            else {
                alert('server down');
            }
        });
    };
    ProfilePage.prototype.editchurch = function () {
        this.churchregsiterform.value.usr_id = localStorage.getItem('usr_id');
        this.service.editchurch(this.churchregsiterform.value).subscribe(function (res) {
            if (res.status == 200) {
                alert('విజయవంతం గా అప్ డేట్ చేసినారు');
            }
            else {
                alert('server down');
            }
        });
    };
    ProfilePage.prototype.editpastor = function () {
        this.pastorform.value.usr_id = localStorage.getItem('usr_id');
        this.service.editpastor(this.pastorform.value).subscribe(function (res) {
            if (res.status == 200) {
                alert('విజయవంతముగా సబ్మిట్ అయింది');
            }
            else {
                alert('server down');
            }
        });
    };
    ProfilePage.prototype.editindependentorgainsation = function () {
        this.independentorgainsationform.value.usr_id = localStorage.getItem('usr_id');
        this.service.editindependentorgainsation(this.independentorgainsationform.value).subscribe(function (res) {
            if (res.status == 200) {
                alert('విజయవంతం గా అప్ డేట్ చేసినారు');
            }
            else {
                alert('server down');
            }
        });
    };
    ProfilePage.prototype.editassciation = function () {
        this.pastorsassociations.value.usr_id = localStorage.getItem('usr_id');
        this.service.editpastorsassociations(this.pastorsassociations.value).subscribe(function (res) {
            if (res.status == 200) {
                alert('విజయవంతం గా అప్ డేట్ చేసినారు');
            }
            else {
                alert('server down');
            }
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="color:1f376e" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>ప్రొఫైల్‌ని సవరించండి </b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="pagecss">\n\n\n\n  <section *ngIf="categoryid==1">\n\n    <h2 class="test" style="text-align: center;font-size: 35px;font-family:ramabhadra;">బిలీవర్ ప్రొఫైల్</h2>\n\n    <form [formGroup]="beliverform" class="form-container">\n\n      <ion-row>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>పేరు(ఇంటి పేరు తో సహా) <span style="color:red;"> *</span></ion-label>\n\n            <ion-input formControlName="fname" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n          <ion-note *ngIf="beliverform.get(\'fname\').invalid && beliverform.get(\'fname\').touched" color="danger">\n\n            పేరు తప్పనిసరి\n\n          </ion-note>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>జెండర్</ion-label>\n\n            <ion-select formControlName="gender">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option value="Male">పురుషుడు</ion-option>\n\n              <ion-option value="Female">స్త్రీ</ion-option>\n\n              <ion-option value="transgender">ట్రాన్స్ జెండర్</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-note *ngIf="beliverform.get(\'gender\').invalid && beliverform.get(\'gender\').touched" color="danger">\n\n            జెండర్ తప్పనిసరి\n\n          </ion-note>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>మొబైల్ నంబర్<span style="color:red;"> *</span></ion-label>\n\n            <ion-input type="tel" formControlName="mobile_number" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n              maxlength="10" minlength="10"></ion-input>\n\n          </ion-item>\n\n          <ion-note *ngIf="beliverform.get(\'mobile_number\').invalid && beliverform.get(\'mobile_number\').touched"\n\n            color="danger">\n\n            మొబైల్ నంబర్ తప్పనిసరి\n\n          </ion-note>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>వాట్స్ యాప్ నంబర్</ion-label>\n\n            <ion-input type="tel" formControlName="whatsapp" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" maxlength="10"\n\n              minlength="10"></ion-input>\n\n          </ion-item>\n\n          <!-- <ion-note *ngIf="beliverform.get(\'whatsapp\').invalid && beliverform.get(\'whatsapp\').touched" color="danger">\n\n            ఈ ఫీల్డ్ తప్పనిసరి\n\n          </ion-note> -->\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>పుట్టినరోజు</ion-label>\n\n            <ion-input type="date" formControlName="dob"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-note *ngIf="beliverform.get(\'dob\').invalid && beliverform.get(\'dob\').touched" color="danger">\n\n          పుట్టినరోజు తప్పనిసరి\n\n        </ion-note>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>ఆధ్యాత్మిక స్థితి</ion-label>\n\n            <ion-select formControlName="spirti">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option value="practicingchristian">ప్రాక్టీసింగ్ క్రిస్టియన్</ion-option>\n\n              <ion-option value="nominalchristian">నామినల్ క్రిస్టియన్</ion-option>\n\n              <ion-option value="festivalchristian">ఫెస్టివల్ క్రిస్టియన్</ion-option>\n\n              <ion-option value="justbelievingjesus">జస్ట్ బిలీవింగ్ జీసస్</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked> క్రెస్తవ సమాజానికి మీరు ఏమి చేయ గలరు</ion-label>\n\n            <ion-select formControlName="god">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option value="1">నా టాలెంట్ ఉపయోగించ గలను</ion-option>\n\n              <ion-option value="2">నా టైం ఉపయోగించ గలను</ion-option>\n\n              <ion-option value="3">మనీ ఇవ్వగలను</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>టాలెంట్</ion-label>\n\n            <ion-select formControlName="talent" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి"\n\n              [ngClass]="{\'is-invalid\': submitted && beliverform.controls[\'talent\'].errors}">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option value="Speaker">సాఫ్ట్ వేర్</ion-option>\n\n              <ion-option value="Writer">సోషల్ మీడియా మేనేజ్ మెంట్</ion-option>\n\n              <ion-option value="Writer">ఫోటో ఎడిటింగ్</ion-option>\n\n              <ion-option value="Writer">వీడియో ఎడిటింగ్</ion-option>\n\n              <ion-option value="Writer">ఫోటో ఎడిటింగ్</ion-option>\n\n              <ion-option value="Writer">మూవీ మేకింగ్</ion-option>\n\n              <ion-option value="Writer">ఈవెంట్ మేనేజ్ మెంట్</ion-option>\n\n              <ion-option value="Singer">డాక్యుమెంట్ రైటింగ్</ion-option>\n\n              <ion-option value="Others">ఇతర </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>జీవిత లక్ష్యం</ion-label>\n\n            <ion-input type="text" formControlName="lifegoal" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <!-- <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>ఆసక్తిలు</ion-label>\n\n            <ion-select formControlName="hobbies">\n\n              <ion-option value="" disabled selected>రకం </ion-option>\n\n              <ion-option value="Singing">పాటలు పాడడం</ion-option>\n\n              <ion-option value="Designing">రూపకలా</ion-option>\n\n              <ion-option value="Writer">రచయిత</ion-option>\n\n              <ion-option value="readingbooks">పుస్తకాలు చదవడం</ion-option>\n\n              <ion-option value="servingpeople">ప్రజలకు సేవ చేయడం</ion-option>\n\n              <ion-option value="music">సంగీతం</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col> -->\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>మీ వివాహ స్థితి</ion-label>\n\n            <ion-select formControlName="status">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option value="వివాహం కాలేదు">వివాహం కాలేదు</ion-option>\n\n              <ion-option value="వివాహం అయినది">వివాహం అయినది</ion-option>\n\n              <ion-option value="విడాకులు అయినది">విడాకులు అయినది</ion-option>\n\n              <ion-option value="వివాహం కాలేదు">వివాహం కాలేదు</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>సెలెక్ట్ డినామినేషన్ మోడల్ </ion-label>\n\n            <ion-select formControlName="denomination_id">\n\n              <ion-option value="" disabled>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let i of denomation" [value]="i.id">{{i.denomation_name}}\n\n              </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>మీ చదువు</ion-label>\n\n            <ion-select formControlName="education" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option value="1-5">1-5</ion-option>\n\n              <ion-option value="6-10">6-10</ion-option>\n\n              <ion-option value="ITI">ఐటిఐ</ion-option>\n\n              <ion-option value="Diploma">డిప్లొమా</ion-option>\n\n              <ion-option value="Inter">ఇంటర్</ion-option>\n\n              <ion-option value="Degree">డిగ్రీ</ion-option>\n\n              <ion-option value="Medical">మెడికల్</ion-option>\n\n              <ion-option value="Engineering">ఇంజనీరింగ్</ion-option>\n\n              <ion-option value="PG">పిజి</ion-option>\n\n              <ion-option value="PHD">పిఎచ్‌డి</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <!-- <ion-item>\n\n            <ion-label stacked>అవధిని ఎంపిక చేయండి</ion-label>\n\n            <ion-select formControlName="designation" placeholder="అవధిని ఎంపిక చేయండి">\n\n              <ion-option value="" disabled selected>రకం ఎంపిక చేయండి</ion-option>\n\n              <ion-option value="1-5">1-5</ion-option>\n\n              <ion-option value="6-10">6-10</ion-option>\n\n              <ion-option value="ITI">ఐటిఐ</ion-option>\n\n              <ion-option value="Diploma">డిప్లొమా</ion-option>\n\n              <ion-option value="Inter">ఇంటర్</ion-option>\n\n              <ion-option value="Degree">డిగ్రీ</ion-option>\n\n              <ion-option value="Medical">మెడికల్</ion-option>\n\n              <ion-option value="Engineering">ఇంజనీరింగ్</ion-option>\n\n              <ion-option value="PG">పిజి</ion-option>\n\n              <ion-option value="PHD">పిఎచ్‌డి</ion-option>\n\n            </ion-select>\n\n          </ion-item> -->\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>మీరు పని చేసే విభాగం<span style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="dpartment" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option value="Real estate">రియల్ ఎస్టేట్</ion-option>\n\n              <ion-option value="Construction">కన్స్ట్రక్షన్</ion-option>\n\n              <ion-option value="Education">ఎడ్యుకేషన్</ion-option>\n\n              <ion-option value="Police">పోలీసు</ion-option>\n\n              <ion-option value="Advocate">అడ్వకేట్</ion-option>\n\n              <ion-option value="School">స్కూలు</ion-option>\n\n              <ion-option value="College">కళాశాల</ion-option>\n\n              <ion-option value="Cultivation">వ్యవసాయం</ion-option>\n\n              <ion-option value="Paper media">పేపర్ మీడియా</ion-option>\n\n              <ion-option value="Electronic media">ఎలక్ట్రానిక్ మీడియా</ion-option>\n\n              <ion-option value="Social media">సోషల్ మీడియా</ion-option>\n\n              <ion-option value="Other">ఇతర</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>1). జిల్లా </ion-label>\n\n            <ion-select formControlName="districts" (ionChange)="getconstency($event)">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>2). నియోజకవర్గం </ion-label>\n\n            <ion-select formControlName="constituencyname" (ionChange)="getmandals($event)">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>మండలం/మున్సిపాలిటీ </ion-label>\n\n            <ion-select formControlName="mandals" (ionChange)="gepanchayati($event);">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>పంచాయితి/వార్డు </ion-label>\n\n            <ion-select formControlName="panchayati">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 col-md-6>\n\n          <!-- Village Name/Street Name beliverform Group -->\n\n          <ion-item>\n\n            <ion-label stacked>గ్రామం పేరు / స్ట్రీట్ పేరు<span style="color:red; ">*</span></ion-label>\n\n            <ion-input type="text" formControlName="villagename"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <!-- Ward Number beliverform Group -->\n\n          <ion-item>\n\n            <ion-label stacked>వార్డ్ నంబర్</ion-label>\n\n            <ion-input type="text" formControlName="wardnumber"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12 col-md-6>\n\n          <!-- Local Address/House Number beliverform Group -->\n\n          <ion-item>\n\n            <ion-label stacked>మీ స్థానిక చిరునామా / హౌస్ నంబర్<span style="color:red; ">*</span></ion-label>\n\n            <ion-input type="text" formControlName="ward" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <!-- Living From beliverform Group -->\n\n          <ion-item>\n\n            <ion-label stacked>మీరు విదేశాలలో గాని ఇతర రాష్ట్రాలలో వుండే ఆంధ్ర వారు<span\n\n                style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="nri" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option value="NRI">విదేశం లో ఉంటాము</ion-option>\n\n              <ion-option value="NRAP">వేరే రాష్ట్రంలో ఉంటాము</ion-option>\n\n              <ion-option value="AP">ఆంధ్ర ప్రదేశ్ రాష్ట్రము లో నే ఉంటాము</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <!-- <ion-row>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>పాస్టర్‌ను సెలెక్ట చేయండి</ion-label>\n\n            <ion-select formControlName="pastor" interface="popover" (ionChange)="getpastorsdata()">\n\n              <ion-option value="" disabled selected>మీ పాస్టర్‌ను సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of getpastorsdatas" [value]="item.id">{{item.pastorname}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>చర్చిని సెలెక్ట చేయండి</ion-label>\n\n            <ion-select formControlName="church" interface="popover" (ionChange)="getchurchesdata()">\n\n              <ion-option value="" disabled selected>చర్చి పేరును సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of getchurchfilter" [value]="item.id">{{item.church_name}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row> -->\n\n\n\n\n\n      <ion-row>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label stacked>నాయకుడు అయితే కావాలా? <span style="color:red;"> *</span></ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n\n\n              <input type="radio" value="YES" (click)="onradiochange($event)" formControlName="leadership">\n\n              <label> అవును </label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <input type="radio" value="NO" (click)="onradiochange($event)" formControlName="leadership" />\n\n              <label> కాదు </label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n\n\n\n\n        <ion-col col-12 col-md-6 *ngIf="lead">\n\n          <ion-list>\n\n            <ion-label stacked>నాయకత్వం</ion-label>\n\n            <ion-item>\n\n              <input type="radio" value="1" (click)="onradioleadertype($event)" formControlName="leadertype">\n\n              <label>జనరల్</label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <input type="radio" value="2" (click)="onradioleadertype($event)" formControlName="leadertype">\n\n              <label>వింగ్</label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6 *ngIf="leadtype" (click)="onsubward($event)">\n\n          <ion-item>\n\n            <ion-label stacked>జనరల్ నాయకత్వం లెవెల్</ion-label>\n\n            <ion-select formControlName="generaltype">\n\n              <ion-option value="">జనరల్ నాయకత్వం సెలెక్ట చేయండి</ion-option>\n\n              <ion-option value="1">జిల్లా</ion-option>\n\n              <ion-option value="2">నియమకం</ion-option>\n\n              <ion-option value="3">మండలం</ion-option>\n\n              <ion-option value="4">గ్రామం</ion-option>\n\n              <ion-option value="5">వార్డ్</ion-option>\n\n              <ion-option value="6">సబ్ వార్డ్</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6 *ngIf="subward">\n\n          <ion-item>\n\n            <ion-label stacked>ఉప వార్డ్ పేరు</ion-label>\n\n            <ion-input type="text" formControlName="subward" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6 *ngIf="wingtype">\n\n          <ion-item>\n\n            <ion-label stacked>వింగ్ నాయకత్వం లెవెల్</ion-label>\n\n            <ion-select formControlName="wingtype">\n\n              <ion-option value="">వింగ్ నాయకత్వం సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of wings" [value]="item.id">{{item.position}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>యూట్యూబ్ ఛానల్</ion-label>\n\n            <ion-input type="text" formControlName="youtube" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>ఇతర సమాచారం</ion-label>\n\n            <ion-input type="text" formControlName="lname" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>స్థానిక ప్రాంతం</ion-label>\n\n            <ion-input type="text" formControlName="nativeplace"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>నెలకు ఆదాయం</ion-label>\n\n            <ion-input type="text" formControlName="income" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>కులం </ion-label>\n\n            <ion-select formControlName="caste">\n\n              <ion-option value="">కులం సెలెక్ట చేయండి</ion-option>\n\n              <ion-option value="no">కులం లేదు</ion-option>\n\n              <ion-option value="SC">ఎస్సీ</ion-option>\n\n              <ion-option value="ST">ఎస్టీ</ion-option>\n\n              <ion-option value="BC-A">బిస్సి-ఎ</ion-option>\n\n              <ion-option value="BC-B">బిస్సి-బి</ion-option>\n\n              <ion-option value="BC-C">బిస్సి-సి</ion-option>\n\n              <ion-option value="BC-D">బిస్సి-డి</ion-option>\n\n              <ion-option value="BC-E">బిస్సి-ఇ</ion-option>\n\n              <ion-option value="OC">ఒస్సీ</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-6>\n\n          <ion-item>\n\n            <ion-label stacked>ఉప కులం </ion-label>\n\n            <ion-input type="text" formControlName="subcaste" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 col-md-6>\n\n          <div style="text-align: center;">\n\n            <button ion-button color="secondary" (click)="editbeliver()" style="letter-spacing: 1px;">నమోదు\n\n              చేయండి</button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n  </section>\n\n\n\n  <section *ngIf="categoryid==2">\n\n    <div class="container ">\n\n      <h2 class="test" style="text-align: center;font-size: 35px;font-family:ramabhadra;"> విద్యార్థుల ప్రొఫైల్ </h2>\n\n      <form [formGroup]="studentform">\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>విద్యార్థి పేరు (ఇంటి పేరు తో సహా)<span style="color:red;">*</span></ion-label>\n\n              <ion-input formControlName="studentname" type="text"\n\n                placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n            </ion-item>\n\n            <div *ngIf="submitted && studentform.get(\'studentname\').errors" class="error-message">\n\n              <div *ngIf="studentform.get(\'studentname\').hasError(\'required\')">విద్యార్థి పేరు ఎంటర్ చేయండి</div>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>జెండర్</ion-label>\n\n              <ion-select formControlName="gender" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n                <ion-option value="male">పురుషుడు</ion-option>\n\n                <ion-option value="female">స్త్రీ</ion-option>\n\n                <ion-option value="transgender">ట్రాన్స్ జెండర్</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>విద్యార్థి ఫోన్ నెంబర్<span style="color:red;">*</span></ion-label>\n\n              <ion-input formControlName="number" type="tel" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" maxlength="10"\n\n                (keypress)="numericOnly($event)"></ion-input>\n\n            </ion-item>\n\n            <div *ngIf="submitted && studentform.get(\'number\').errors" class="error-message">\n\n              <div *ngIf="studentform.get(\'number\').hasError(\'required\')">ఫోన్ నెంబర్ ఎంటర్ చేయండి</div>\n\n              <div *ngIf="studentform.get(\'number\').hasError(\'maxlength\')">10 అంకెల కన్నా తక్కువ వున్నాయి</div>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>వాట్సాప్ నెంబర్</ion-label>\n\n              <ion-input formControlName="whatsappnumber" type="tel" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n                maxlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>పుట్టిన తేది</ion-label>\n\n              <ion-input type="date" formControlName="dob"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>తండ్రి పేరు (ఇంటి పేరు తో సహా)<span style="color:red;">*</span></ion-label>\n\n              <ion-input type="text" formControlName="fathername"\n\n                placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n            </ion-item>\n\n            <div *ngIf="submitted && studentform.get(\'fathername\').errors" class="error-message">\n\n              <div *ngIf="studentform.get(\'fathername\').hasError(\'required\')">తండ్రి పేరు ఎంటర్ చేయండి</div>\n\n            </div>\n\n          </ion-col>\n\n\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>మీరు దేవుని కోసం ఏమి చేస్తారు</ion-label>\n\n              <ion-select formControlName="god" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n                <ion-option value="Singing">పాటలు పాడడం</ion-option>\n\n                <ion-option value="Music">సంగీతం</ion-option>\n\n                <ion-option value="Dance">నృత్యం</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>జీవిత లక్ష్యం</ion-label>\n\n              <ion-input type="text" formControlName="lifegoal"\n\n                placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>ఆసక్తులు</ion-label>\n\n              <ion-select formControlName="hobbies">\n\n                <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                <ion-option value="Singing">పాటలు పాడడం</ion-option>\n\n                <ion-option value="Designing">డిజైనింగ్</ion-option>\n\n                <ion-option value="Writer">రచయిత</ion-option>\n\n                <ion-option value="readingbooks">పుస్తకాలు చదవడం</ion-option>\n\n                <ion-option value="servingpeople">జనులకు సేవ చేయడం</ion-option>\n\n                <ion-option value="music">సంగీతం</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>కళాశాల/పాఠశాల పేరు <span style="color:red;">*</span></ion-label>\n\n              <ion-input formControlName="schname" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" type="text"></ion-input>\n\n              <div *ngIf="submitted && studentform.get(\'schname\').errors" class="error-message">\n\n                <div *ngIf="studentform.get(\'schname\').hasError(\'required\')">కళాశాల/పాఠశాల పేరు ఎంటర్ చేయండి</div>\n\n              </div>\n\n            </ion-item>\n\n          </ion-col>\n\n\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>ప్రతిభ</ion-label>\n\n              <ion-select formControlName="talent">\n\n                <ion-option value="" disabled selected>రకాన్ని సెలెక్ట చేయండి</ion-option>\n\n                <ion-option value="Speaker">వక్త</ion-option>\n\n                <ion-option value="Writer">రచయిత</ion-option>\n\n                <ion-option value="Singer">గాయకుడు</ion-option>\n\n                <ion-option value="Others">ఇతరులు</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>విద్య <span style="color:red;">*</span></ion-label>\n\n              <ion-select formControlName="study">\n\n                <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                <ion-option value="1-5">1-5</ion-option>\n\n                <ion-option value="6-10">6-10</ion-option>\n\n                <ion-option value="Diploma">డిప్లొమా</ion-option>\n\n                <ion-option value="Inter">ఇంటర్</ion-option>\n\n                <ion-option value="Degree">డిగ్రీ</ion-option>\n\n                <ion-option value="Medical">మెడికల్</ion-option>\n\n                <ion-option value="Engineering">ఇంజనీరింగ్</ion-option>\n\n                <ion-option value="PG">పీజీ</ion-option>\n\n                <ion-option value="PHD">పిహెచ్డి</ion-option>\n\n              </ion-select>\n\n              <div *ngIf="submitted && studentform.get(\'study\').errors" class="error-message">\n\n                <div *ngIf="studentform.get(\'study\').hasError(\'required\')">విద్య ఎంటర్ చేయండి</div>\n\n              </div>\n\n            </ion-item>\n\n          </ion-col>\n\n\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>ఆధ్యాత్మిక స్థితి</ion-label>\n\n              <ion-select formControlName="spirti">\n\n                <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                <ion-option value="practicingchristian">ప్రాక్టిసింగ్ క్రిస్టియన్</ion-option>\n\n                <ion-option value="nominalchristian">నామమాత్ర క్రిస్టియన్</ion-option>\n\n                <ion-option value="festivalchristian">పండుగల క్రిస్టియన్</ion-option>\n\n                <ion-option value="justbelievingjesus">యేసును నమ్మడం మాత్రమే</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>సెలెక్ట్ డినామినేషన్ మోడల్<span style="color:red;">*</span></ion-label>\n\n              <ion-select formControlName="denomination_id">\n\n                <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                <ion-option *ngFor="let i of denomation" [value]="i.id">{{i.denomation_name}}</ion-option>\n\n              </ion-select>\n\n              <div *ngIf="submitted && studentform.get(\'denomination_id\').errors" class="error-message">\n\n                <div *ngIf="studentform.get(\'denomination_id\').hasError(\'required\')">సంఘం ఎంటర్ చేయండి</div>\n\n              </div>\n\n            </ion-item>\n\n          </ion-col>\n\n\n\n\n\n          <ion-grid>\n\n            <h3 style="text-align: center;font-weight: 900;    color: white;">కళాశాల / పాఠశాల చిరునామా</h3>\n\n            <ion-row>\n\n              <ion-col col-12>\n\n                <ion-item>\n\n                  <ion-label stacked>1). జిల్లా<span style="color:red;">*</span></ion-label>\n\n                  <ion-select formControlName="district_id" (ionChange)="getconstency($event);">\n\n                    <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                    <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n                  </ion-select>\n\n                  <div *ngIf="submitted && studentform.get(\'district_id\').errors" class="error-message">\n\n                    <div *ngIf="studentform.get(\'district_id\').hasError(\'required\')">జిల్లా సెలెక్ట చేయండి</div>\n\n                  </div>\n\n                </ion-item>\n\n              </ion-col>\n\n              <ion-col col-12>\n\n                <ion-item>\n\n                  <ion-label stacked>2). నియోజకవర్గం<span style="color:red;">*</span></ion-label>\n\n                  <ion-select formControlName="constituency_id" (ionChange)="getmandals($event);">\n\n                    <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                    <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n                  </ion-select>\n\n                  <div *ngIf="submitted && studentform.get(\'constituency_id\').errors" class="error-message">\n\n                    <div *ngIf="studentform.get(\'constituency_id\').hasError(\'required\')">నియోజకవర్గం సెలెక్ట చేయండి\n\n                    </div>\n\n                  </div>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              <ion-item>\n\n                <ion-label stacked>3). మండలం / మున్సిపాలిటీ<span style="color:red;">*</span></ion-label>\n\n                <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event);">\n\n                  <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                  <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n                </ion-select>\n\n                <div *ngIf="submitted && studentform.get(\'mandal_id\').errors" class="error-message">\n\n                  <div *ngIf="studentform.get(\'mandal_id\').hasError(\'required\')">మండలం / మున్సిపాలిటీ సెలెక్ట చేయండి\n\n                  </div>\n\n                </div>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-12>\n\n              <ion-item>\n\n                <ion-label stacked>4). పంచాయతీ / వార్డ్<span style="color:red;">*</span></ion-label>\n\n                <ion-select formControlName="village_id">\n\n                  <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                  <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n                </ion-select>\n\n                <div *ngIf="submitted && studentform.get(\'village_id\').errors" class="error-message">\n\n                  <div *ngIf="studentform.get(\'village_id\').hasError(\'required\')">పంచాయతీ సెలెక్ట చేయండి</div>\n\n                </div>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-grid>\n\n            <h3 style="text-align: center;font-weight: 900;    color: white;">నివాస చిరునామా</h3>\n\n            <ion-row>\n\n              <ion-col col-12>\n\n                <ion-item>\n\n                  <ion-label stacked>1). జిల్లా<span style="color:red">*</span></ion-label>\n\n                  <ion-select formControlName="resdistricts" (ionChange)="getconstency($event)">\n\n                    <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                    <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngIf="submitted && studentform.get(\'resdistricts\').errors" class="error-message">\n\n                  <div *ngIf="studentform.get(\'resdistricts\').hasError(\'required\')">జిల్లా సెలెక్ట చేయండి</div>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col col-12>\n\n                <ion-item>\n\n                  <ion-label stacked>2). నియోజకవర్గం<span style="color:red">*</span></ion-label>\n\n                  <ion-select formControlName="resconstituencyname" (ionChange)="getmandals($event)">\n\n                    <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                    <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngIf="submitted && studentform.get(\'resconstituencyname\').errors" class="error-message">\n\n                  <div *ngIf="studentform.get(\'resconstituencyname\').hasError(\'required\')">నియోజకవర్గం సెలెక్ట చేయండి\n\n                  </div>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-12>\n\n                <ion-item>\n\n                  <ion-label stacked>మండలం<span style="color:red">*</span></ion-label>\n\n                  <ion-select formControlName="resmandals" (ionChange)="gepanchayati($event)">\n\n                    <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                    <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngIf="submitted && studentform.get(\'resmandals\').errors" class="error-message">\n\n                  <div *ngIf="studentform.get(\'resmandals\').hasError(\'required\')">మండలం / మున్సిపాలిటీ సెలెక్ట చేయండి\n\n                  </div>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col col-12>\n\n                <ion-item>\n\n                  <ion-label stacked>4). పంచాయతీ / వార్డ్<span style="color:red">*</span></ion-label>\n\n                  <ion-select formControlName="respanchayati">\n\n                    <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                    <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngIf="submitted && studentform.get(\'respanchayati\').errors" class="error-message">\n\n                  <div *ngIf="studentform.get(\'respanchayati\').hasError(\'required\')">పంచాయతీ సెలెక్ట చేయండి</div>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              <ion-item>\n\n                <ion-label stacked>గ్రామం పేరు / వీధి పేరు<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="villagename" type="text"\n\n                  placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n              </ion-item>\n\n              <div *ngIf="submitted && studentform.get(\'villagename\').errors" class="error-message">\n\n                <div *ngIf="studentform.get(\'villagename\').hasError(\'required\')">గ్రామం పేరు / వీధి పేరు ఎంటర్ చేయండి\n\n                </div>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-12>\n\n              <ion-item>\n\n                <ion-label stacked>వార్డు నంబర్</ion-label>\n\n                <ion-input formControlName="wardnumber" type="text"\n\n                  placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              <ion-item>\n\n                <ion-label stacked>మీ పాస్టర్ ని సెలెక్ట చేయండి</ion-label>\n\n                <ion-select formControlName="pastor" (ionChange)="getpastorssdata()">\n\n                  <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                  <ion-option *ngFor="let item of getstudentspastors" [value]="item.id">{{item.pastorname}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-12>\n\n              <ion-item>\n\n                <ion-label stacked>చర్చి ని సెలెక్ట చేయండి</ion-label>\n\n                <ion-select formControlName="church" (ionChange)="getchurchesstudentdata()">\n\n                  <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                  <ion-option *ngFor="let item of getchurchstudentfilter"\n\n                    [value]="item.id">{{item.church_name}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              <ion-item>\n\n                <ion-label stacked>మీ స్థానిక చిరునామా / ఇల్లు నంబర్ నమోదు చేయండి<span\n\n                    style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="ward" type="text" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n              </ion-item>\n\n              <div *ngIf="submitted && studentform.get(\'ward\').errors" class="error-message">\n\n                <div *ngIf="studentform.get(\'ward\').hasError(\'required\')">స్థానిక చిరునామా / ఇల్లు నంబర్ ఎంటర్ చేయండి\n\n                </div>\n\n              </div>\n\n            </ion-col>\n\n\n\n            <ion-col col-12 col-md-6>\n\n              <ion-list>\n\n                <ion-item>\n\n                  <ion-label stacked>ఎక్కడ నివసిస్తున్నారు? <span style="color:red;">*</span></ion-label>\n\n                </ion-item><br>\n\n                <input type="radio" value="YES" formControlName="nri">\n\n                <label> ఆంధ్ర ప్రదేశ్ లో నివసించరు </label>\n\n                <br>\n\n                <input type="radio" value="NO" formControlName="nri" />\n\n                <label> ఆంధ్ర ప్రదేశ్ లో నివసిస్తున్నారు </label>\n\n\n\n              </ion-list>\n\n              <div *ngIf="submitted && studentform.get(\'nri\').errors" class="error-message">\n\n                <div *ngIf="studentform.get(\'nri\').hasError(\'required\')">ఎక్కడ నివసిస్తున్నారు అనేది ఎంటర్ చేయండి</div>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>నాయకుడిగా మారాలనుకుంటున్నారా? <span style="color:red;">*</span></ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <input type="radio" value="YES" (click)="onradioleadertyperajkumar($event)" formControlName="leadership">\n\n              <label>అవును</label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <input type="radio" value="NO" (click)="onradioleadertyperajkumar($event)" formControlName="leadership">\n\n              <label>కాదు</label>\n\n            </ion-item>\n\n            <div *ngIf="submitted && studentform.get(\'leadership\').errors" class="error-message">\n\n              <div *ngIf="studentform.get(\'leadership\').hasError(\'required\')">నాయకత్వం ఎంటర్ చేయండి</div>\n\n            </div>\n\n          </ion-col>\n\n\n\n          <ion-col col-12 col-md-6 *ngIf="lead">\n\n            <ion-list>\n\n              <ion-label stacked>నాయకత్వం</ion-label>\n\n              <ion-item>\n\n                <input type="radio" value="1" (click)="onradioleadertype($event)" formControlName="leadertype">\n\n                <label>జనరల్</label>\n\n              </ion-item>\n\n              <ion-item>\n\n                <input type="radio" value="2" (click)="onradioleadertype($event)" formControlName="leadertype">\n\n                <label>వింగ్</label>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n\n\n          <ion-col col-12 col-md-6 *ngIf="leadtype" (click)="onsubward($event)">\n\n            <ion-item>\n\n              <ion-label stacked>జనరల్ నాయకత్వం లెవెల్</ion-label>\n\n              <ion-select formControlName="generaltype">\n\n                <ion-option value="">జనరల్ నాయకత్వం సెలెక్ట చేయండి</ion-option>\n\n                <ion-option value="1">జిల్లా</ion-option>\n\n                <ion-option value="2">నియమకం</ion-option>\n\n                <ion-option value="3">మండలం</ion-option>\n\n                <ion-option value="4">గ్రామం</ion-option>\n\n                <ion-option value="5">వార్డ్</ion-option>\n\n                <ion-option value="6">సబ్ వార్డ్</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12 col-md-6 *ngIf="subward">\n\n            <ion-item>\n\n              <ion-label stacked>ఉప వార్డ్ పేరు</ion-label>\n\n              <ion-input type="text" formControlName="subward" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12 col-md-6 *ngIf="wingtype">\n\n            <ion-item>\n\n              <ion-label stacked>వింగ్ నాయకత్వం లెవెల్</ion-label>\n\n              <ion-select formControlName="wingtype">\n\n                <ion-option value="">వింగ్ నాయకత్వం సెలెక్ట చేయండి</ion-option>\n\n                <ion-option *ngFor="let item of wings" [value]="item.id">{{item.position}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n\n\n          <ion-col col-12 *ngIf="father">\n\n            <ion-item>\n\n              <ion-label stacked>తండ్రి లేదా తల్లి పేరు(ఇంటి పేరు తో సహా)</ion-label>\n\n              <ion-input formControlName="orphon" type="text" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>స్థానిక స్థలం</ion-label>\n\n              <ion-input formControlName="nativeplace" type="text"\n\n                placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>మీ గురించి</ion-label>\n\n              <ion-input formControlName="aboutyourself" type="text"\n\n                placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>కులం </ion-label>\n\n              <ion-select formControlName="caste">\n\n                <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                <ion-option value="No Caste">కులం లేదు</ion-option>\n\n                <ion-option value="SC">ఎస్ఈ</ion-option>\n\n                <ion-option value="ST">ఎస్టీ</ion-option>\n\n                <ion-option value="BC-A">బీసీ-A</ion-option>\n\n                <ion-option value="BC-B">బీసీ-B</ion-option>\n\n                <ion-option value="BC-C">బీసీ-C</ion-option>\n\n                <ion-option value="BC-D">బీసీ-D</ion-option>\n\n                <ion-option value="BC-E">బీసీ-E</ion-option>\n\n                <ion-option value="OC">ఓసీ</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>ఉప కులం </ion-label>\n\n              <ion-input formControlName="subcaste" type="text"\n\n                placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>పాస్వర్డ్<span style="color:red">*</span></ion-label>\n\n              <ion-input formControlName="password" type="password" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n                maxlength="16" minlength="6"></ion-input>\n\n            </ion-item>\n\n            <div *ngIf="submitted && studentform.get(\'password\').errors" class="error-message">\n\n              <div *ngIf="studentform.get(\'password\').hasError(\'required\')">పాస్వర్డ్ ఎంటర్ చేయండి</div>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-12 col-md-6>\n\n            <div style="text-align: center;">\n\n              <button ion-button color="secondary" (click)="editstudent()" style="letter-spacing: 1px;">నమోదు\n\n                చేయండి</button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </form>\n\n    </div>\n\n  </section>\n\n\n\n  <section *ngIf="categoryid==3">\n\n    <h2 class="test" style="text-align: center;font-size: 35px;font-family:ramabhadra;"> మినిస్ట్రీ ప్రొఫైల్ </h2>\n\n    <form [formGroup]="ministryform">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మినిస్ట్రీ పేరు<span style="color:red; ">*</span></ion-label>\n\n            <ion-input type="text" formControlName="ministryname" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n              [ngClass]="{\'is-invalid\': submitted && r[\'ministryname\'].errors }"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && r[\'ministryname\'].errors" class="invalid-feedback">\n\n            <div *ngIf="r[\'ministryname\'].errors[\'required\']">మినిస్ట్రీ పేరు ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>సెలెక్ట్ డినామినేషన్ మోడల్<span style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="denomation_id" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి"\n\n              [ngClass]="{\'is-invalid\': submitted && r[\'denomation\'].errors }">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of denomation" [value]="item.id">{{item.denomation_name}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && r[\'denomation\'].errors" class="invalid-feedback">\n\n            <div *ngIf="r[\'denomation\'].errors[\'required\']">డెనమినేషన్ ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మినిస్ట్రీ ఇమెయిల్</ion-label>\n\n            <ion-input type="email" formControlName="ministryemail" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n              [ngClass]="{\'is-invalid\': submitted && r[\'ministryemail\'].errors }"></ion-input>\n\n          </ion-item>\n\n          <!-- <div *ngIf="submitted && r[\'ministryemail\'].errors" class="invalid-feedback">\n\n            <div *ngIf="r[\'ministryemail\'].errors[\'required\']">మినిస్ట్రీ ఇమెయిల్ ఎంటర్ చేయండి</div>\n\n          </div> -->\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మినిస్ట్రీ వెబ్‌సైట్</ion-label>\n\n            <ion-input type="url" formControlName="ministrywebsite" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n              [ngClass]="{\'is-invalid\': submitted && r[\'ministrywebsite\'].errors }"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && r[\'ministrywebsite\'].errors" class="invalid-feedback">\n\n            <div *ngIf="r[\'ministrywebsite\'].errors[\'required\']">మినిస్ట్రీ  వెబ్‌సైట్ ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>చర్చిలు / బ్రాంచుల నంబర్<span style="color:red; ">*</span></ion-label>\n\n            <ion-input type="text" formControlName="number_ofchurches" class="form-control"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n              [ngClass]="{\'is-invalid\': submitted && r[\'number_ofchurches\'].errors }"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && r[\'number_ofchurches\'].errors" class="invalid-feedback">\n\n            <div *ngIf="r[\'number_ofchurches\'].errors[\'required\']">చర్చిలు / బ్రాంచుల నంబర్ ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మొత్తం సభ్యుల నంబర్<span style="color:red; ">*</span></ion-label>\n\n            <ion-input type="text" formControlName="number_ofmembers" class="form-control"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n              [ngClass]="{\'is-invalid\': submitted && r[\'number_ofmembers\'].errors }"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && r[\'number_ofmembers\'].errors" class="invalid-feedback">\n\n            <div *ngIf="r[\'number_ofmembers\'].errors[\'required\']">మొత్తం సభ్యుల నంబర్ ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>జిల్లా <span style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="district_id" (ionChange)="getconstency($event);"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి"\n\n              [ngClass]="{\'is-invalid\': submitted && r[\'district_id\'].errors }">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && r[\'district_id\'].errors" class="invalid-feedback">\n\n            <div *ngIf="r[\'district_id\'].errors[\'required\']">జిల్లా సెలెక్ట చేయండి </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>2). నియోజకవర్గం<span style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="constituency_id" (ionChange)="getmandals($event);"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి"\n\n              [ngClass]="{\'is-invalid\': submitted && r[\'constituency_id\'].errors }">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && r[\'constituency_id\'].errors" class="invalid-feedback">\n\n            <div *ngIf="r[\'constituency_id\'].errors[\'required\']">నియోజకవర్గం సెలెక్ట చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>3). మండలం / మున్సిపాలిటీ<span style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event);"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి"\n\n              [ngClass]="{\'is-invalid\': submitted && r[\'mandal_id\'].errors }">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && r[\'mandal_id\'].errors" class="invalid-feedback">\n\n            <div *ngIf="r[\'mandal_id\'].errors[\'required\']">మండలం ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>4). పంచాయతీ / వార్డ్ <span style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="panchayat_id" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి"\n\n              [ngClass]="{\'is-invalid\': submitted && r[\'panchayat_id\'].errors }">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && r[\'panchayat_id\'].errors" class="invalid-feedback">\n\n            <div *ngIf="r[\'panchayat_id\'].errors[\'required\']">పంచాయతీ సెలెక్ట చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked>మీ పాస్టర్‌ను సెలెక్ట చేయండి</ion-label>\n\n              <ion-select formControlName="pastor" (click)="ministrypastorsfilterdata()"\n\n                placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి" style="height:37px;width: 273px;">\n\n                <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n                <ion-option *ngFor="let item of getministrypastors" [value]="item.id">{{item.pastorname}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label stacked> ఫోన్ నంబర్<span style="color:red; ">*</span></ion-label>\n\n              <ion-input type="text" formControlName="headnmber" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n                [ngClass]="{\'is-invalid\': submitted && r[\'headnmber\'].errors }" maxlength="10" minlength="10"\n\n                (keypress)="numericOnly($event)"></ion-input>\n\n            </ion-item>\n\n            <div *ngIf="submitted && r[\'headnmber\'].errors" class="invalid-feedback">\n\n              <div *ngIf="r[\'headnmber\'].errors[\'required\']">ఫోన్ నంబర్ ఎంటర్ చేయండి</div>\n\n              <div *ngIf="r[\'headnmber\'].errors[\'maxLength\']">10 అంకెల నంబర్ ఎంటర్ చేయండి</div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>వివరణ</ion-label>\n\n            <ion-input type="text" formControlName="description"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 col-md-6>\n\n          <div style="text-align: center;">\n\n            <button ion-button color="secondary" (click)="postministryupdate()" style="letter-spacing: 1px;">నమోదు\n\n              చేయండి</button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n  </section>\n\n\n\n  <section *ngIf="categoryid==4">\n\n    <!-- Pastor Profile -->\n\n    <h2 class="test" style="text-align: center;font-size: 35px;font-family:ramabhadra;"> సేవకుల వివరాలు (మీకు తగిన\n\n      సమాచారం ఇవ్వటం కొరకు) </h2>\n\n    <form [formGroup]="pastorform">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ పేరు(ఇంటి పేరు తో సహా)<span style="color:red">*</span></ion-label>\n\n            <ion-input formControlName="pastorname" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి "></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && pastorform.get(\'pastorname\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorform.get(\'pastorname\').errors[\'required\']">మీ పేరు ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ జెండర్ </ion-label>\n\n            <ion-select formControlName="gender" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="Male">పురుషుడు</ion-option>\n\n              <ion-option value="Female">స్త్రీ</ion-option>\n\n              <ion-option value="transgender">ట్రాన్స్ జెండర్</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && pastorform.get(\'gender\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorform.get(\'gender\').errors[\'required\']">మీ జెండర్ ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ ఫోన్ నంబర్ 1<span style="color:red">*</span></ion-label>\n\n            <ion-input formControlName="phonenumber" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" maxlength="10"\n\n              minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && pastorform.get(\'phonenumber\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorform.get(\'phonenumber\').errors[\'required\']">జెండర్ ఎంటర్ చేయండి</div>\n\n            <div *ngIf="pastorform.get(\'phonenumber\').errors[\'maxlength\']">మీ 10 అంకెల ఫోన్ నంబర్ ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ ఫోన్ నంబర్ 2</ion-label>\n\n            <ion-input formControlName="phonenumber2" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" maxlength="10"\n\n              minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n          </ion-item>\n\n          <!-- <div *ngIf="submitted && pastorform.get(\'phonenumber2\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorform.get(\'phonenumber2\').errors[\'required\']">జెండర్ ఎంటర్ చేయండి</div>\n\n            <div *ngIf="pastorform.get(\'phonenumber2\').errors[\'maxlength\']">మీ 10 అంకెల ఫోన్ నంబర్ ఎంటర్ చేయండి</div>\n\n          </div> -->\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ PA ఫోన్ నంబర్</ion-label>\n\n            <ion-input formControlName="pa_phonenumber" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" maxlength="10"\n\n              minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n          </ion-item>\n\n          <!-- <div *ngIf="submitted && pastorform.get(\'pa_phonenumber\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorform.get(\'pa_phonenumber\').errors[\'required\']">జంతువు ఎంటర్ చేయండి</div>\n\n            <div *ngIf="pastorform.get(\'pa_phonenumber\').errors[\'maxlength\']">10 అంకెలఫోన్ నంబర్ ఎంటర్ చేయండి</div>\n\n          </div> -->\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ డినామినేషన్ మోడల్ సెలెక్ట చేయండి<span style="color:red">*</span></ion-label>\n\n            <ion-select formControlName="denomination_id" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option *ngFor="let i of denomation" [value]="i.id">{{i.denomation_name}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && pastorform.get(\'denomination_id\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorform.get(\'denomination_id\').errors[\'required\']">మీ డినామినేషన్ సెలెక్ట చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n\n\n          <ion-list>\n\n            <ion-label stacked>మీ వివాహ స్థితి <span style="color:red;"> * </span></ion-label>\n\n            <ion-item>\n\n              <input type="radio" value="వివాహం కాలేదు" formControlName="staus" />\n\n              <label>వివాహం కాలేదు</label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <input type="radio" value="వివాహం అయినది" formControlName="staus" />\n\n              <label>వివాహం అయినది </label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <input type="radio" value="విడాకులు అయినది" formControlName="staus" />\n\n              <label> విడాకులు అయినది </label>\n\n            </ion-item>\n\n          </ion-list>\n\n          <div *ngIf="submitted && pastorform.get(\'staus\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorform.get(\'staus\').errors[\'required\']">మీ వివాహ స్థితి ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ టైటిల్ సెలెక్ట చేయండి</ion-label>\n\n            <ion-select formControlName="designation" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="సువార్తికుడు">సువార్తికుడు</ion-option>\n\n              <ion-option value="పాస్టర్">పాస్టర్</ion-option>\n\n              <ion-option value="ఫాదర్">ఫాదర్</ion-option>\n\n              <ion-option value="బ్రదర్">బ్రదర్</ion-option>\n\n              <ion-option value="డాక్టర్">డాక్టర్</ion-option>\n\n              <ion-option value="సీనియర్ పాస్టర్">సీనియర్ పాస్టర్</ion-option>\n\n              <ion-option value="రెవ్">రెవ్</ion-option>\n\n              <ion-option value="రెవ్ డాక్టర్">రెవ్ డాక్టర్</ion-option>\n\n              <ion-option value="బిషప్">బిషప్</ion-option>\n\n              <ion-option value="రెవ్ బిషప్">రెవ్ బిషప్</ion-option>\n\n              <ion-option value="మోస్ట్ రేవ్ బిషప్">మోస్ట్ రేవ్ బిషప్</ion-option>\n\n              <ion-option value="ఆర్చ్ బిషప్">ఆర్చ్ బిషప్</ion-option>\n\n              <ion-option value="లెఫ్టినెంట్ కల్నల్">లెఫ్టినెంట్ కల్నల్</ion-option>\n\n              <ion-option value="కల్నల్">కల్నల్</ion-option>\n\n              <ion-option value="కమిషనర్">కమిషనర్</ion-option>\n\n\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && pastorform.get(\'designation\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorform.get(\'designation\').errors[\'required\']">మీ టైటిల్ ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <!-- <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>విశేషం</ion-label>\n\n            <ion-select formControlName="talent" placeholder="విశేషం సెలెక్ట చేయండి">\n\n              <ion-option value="Speaker">స్పీకర్</ion-option>\n\n              <ion-option value="Writer">రచయిత</ion-option>\n\n              <ion-option value="Singer">పాడినవారు</ion-option>\n\n              <ion-option value="other">ఇతరమైనవారు</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col> -->\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ చదువు సెలెక్ట చేయండి</ion-label>\n\n            <ion-select formControlName="education" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="1-5">1-5</ion-option>\n\n              <ion-option value="6-10">6-10</ion-option>\n\n              <ion-option value="డిప్లొమా">డిప్లొమా</ion-option>\n\n              <ion-option value="ఇంటర్">ఇంటర్</ion-option>\n\n              <ion-option value="డిగ్రీ">డిగ్రీ</ion-option>\n\n              <ion-option value="మెడికల్">మెడికల్</ion-option>\n\n              <ion-option value="ఇంజనీరింగ్">ఇంజనీరింగ్</ion-option>\n\n              <ion-option value="పిజి">పిజి</ion-option>\n\n              <ion-option value="పిహెచ్‌డి">పిహెచ్‌డి</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-item>\n\n          <p><u><b>చిరునామా</b></u></p>\n\n        </ion-item>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>జిల్లా<span style="color:red">*</span></ion-label>\n\n            <ion-select formControlName="district_id" (ionChange)="getconstency($event)"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>2). నియోజకవర్గం<span style="color:red">*</span></ion-label>\n\n            <ion-select formControlName="constituency_id" (ionChange)="getmandals($event)"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>3). మండలం / మున్సిపాలిటీ<span style="color:red">*</span></ion-label>\n\n            <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event)"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>4). పంచాయతీ / వార్డ్<span style="color:red">*</span></ion-label>\n\n            <ion-select formControlName="panchayat_id" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>గ్రామం పేరు / స్ట్రీట్ పేరు<span style="color:red">*</span></ion-label>\n\n            <ion-input formControlName="villagename" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n\n\n          <ion-list>\n\n\n\n            <ion-label stacked>మీరు మినిస్ట్రీ / ఇండిపెండెంట్ పాస్టర్ సెలెక్ట చేయండి<span style="color:red;"> *\n\n              </span></ion-label>\n\n            <ion-item>\n\n              <input type="radio" value="Ministry" (ionSelect)="churchchange($event.target)"\n\n                formControlName="pastortype">\n\n              <label>మినిస్ట్రీ ఆండర్ లో పాస్టర్ </label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <input type="radio" value="Independent" (ionSelect)="churchchange($event.target)"\n\n                formControlName="pastortype" />\n\n              <label>ఇండిపెండెంట్ పాస్టర్</label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-list>\n\n            <ion-label stacked>మీరు నాయకుడుగా ఉండటానికి ఇష్టపడుతున్నారా ?<span style="color:red;"> * </span></ion-label>\n\n            <ion-item>\n\n              <input type="radio" value="YES" (click)="onradiochange($event)" formControlName="leaders" />\n\n              <label>అవును</label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <input type="radio" value="NO" (click)="onradiochange($event)" formControlName="leaders" />\n\n              <label>కాదు</label>\n\n            </ion-item>\n\n          </ion-list>\n\n          <div *ngIf="submitted && pastorform.get(\'leaders\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorform.get(\'leaders\').errors[\'required\']">నాయకుడు అవును / కాదు సెలెక్ట చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n\n\n        <ion-col col-12 *ngIf="lead">\n\n          <ion-list>\n\n            <ion-label stacked>నాయకుడు రకాలు సెలెక్ట చేయండి<span style="color:red;"> * </span></ion-label>\n\n            <ion-item>\n\n              <input type="radio" value="1" (click)="onradioleadertype($event)" formControlName="leadertype" />\n\n              <label>సాధారణం నాయకుడు</label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <input type="radio" value="2" (click)="onradioleadertype($event)" formControlName="leadertype" />\n\n              <label> వింగ్ నాయకుడు </label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-12 *ngIf="leadtype">\n\n          <ion-item>\n\n            <ion-label stacked>సాధారణ నాయకుడు లెవెల్</ion-label>\n\n            <ion-select formControlName="generaltype" (ionChange)="onsubward($event)"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="1">జిల్లా నాయకుడు</ion-option>\n\n              <ion-option value="2">నియోజకవర్గం నాయకుడు </ion-option>\n\n              <ion-option value="3">మండలం నాయకుడు</ion-option>\n\n              <ion-option value="4">పంచాయతి నాయకుడు</ion-option>\n\n              <ion-option value="5">వార్డు నాయకుడు</ion-option>\n\n              <ion-option value="6">ఉప వార్డు నాయకుడు</ion-option>\n\n              <ion-option value="7">10 ఇళ్ల నాయకుడు</ion-option>\n\n              <ion-option value="8">చర్చి నాయకుడు</ion-option>\n\n              <ion-option value="9">పనిచేసేచోట నాయకుడు</ion-option>\n\n              <ion-option value="10">బందువుల నాయకుడు</ion-option>\n\n              <ion-option value="11">ఫ్రెండ్స్ నాయకుడు</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 *ngIf="wingtype">\n\n          <ion-item>\n\n            <ion-label stacked>వింగ్ నాయకుడు లెవెల్</ion-label>\n\n            <ion-select formControlName="wingtype" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="1">జిల్లా నాయకుడు</ion-option>\n\n              <ion-option value="2">నియోజకవర్గం నాయకుడు </ion-option>\n\n              <ion-option value="3">మండలం నాయకుడు</ion-option>\n\n              <ion-option value="4">పంచాయతి నాయకుడు</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 *ngIf="wingtypes">\n\n          <ion-item>\n\n            <ion-label stacked>ఏ వింగ్ కి నాయకుడు</ion-label>\n\n            <ion-select formControlName="wingtypes" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option Selected value="" disabled>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option value="స్టూడెంట్ వింగ్">స్టూడెంట్ వింగ్</ion-option>\n\n              <ion-option value="బ్యూరోక్రాట్  వింగ్">బ్యూరోక్రాట్ వింగ్</ion-option>\n\n              <ion-option value="మెడికల్ వింగ్">మెడికల్ వింగ్</ion-option>\n\n              <ion-option value="ఇంజనీరింగ్ వింగ్">ఇంజనీరింగ్ వింగ్</ion-option>\n\n              <ion-option value="పోలీస్ & మిలిటరీ వింగ్">పోలీస్ వింగ్ & మిలిటరీ వింగ్</ion-option>\n\n              <ion-option value="అడ్వకేట్ వింగ్">అడ్వకేట్ వింగ్</ion-option>\n\n              <ion-option value="టీచింగ్ వింగ్">టీచింగ్ వింగ్</ion-option>\n\n              <ion-option value="బ్యాంకింగ్ వింగ్">బ్యాంకింగ్ వింగ్</ion-option>\n\n              <ion-option value="చార్టెడ్ అకౌంట్ వింగ్">డ్చార్టెడ్ అకౌంట్ వింగ్</ion-option>\n\n              <ion-option value="బిజినెస్ వింగ్">బిజినెస్ వింగ్</ion-option>\n\n              <ion-option value="గ్రూప్1 ఆఫీసర్ వింగ్">గ్రూప్1 ఆఫీసర్ వింగ్</ion-option>\n\n              <ion-option value="గ్రూప్2 ఆఫీసర్ వింగ్">గ్రూప్2 ఆఫీసర్ వింగ్</ion-option>\n\n              <ion-option value="గ్రూప్3 ఆఫీసర్ వింగ్">గ్రూప్3 ఆఫీసర్ వింగ్</ion-option>\n\n              <ion-option value="గ్రూప్4 ఆఫీసర్ వింగ్">గ్రూప్4 ఆఫీసర్ వింగ్</ion-option>\n\n              <ion-option value="ఎన్ జి ఓ వింగ్">ఎన్ జి ఓ వింగ్</ion-option>\n\n              <ion-option value="నిర్మాణ రంగం  వింగ్">నిర్మాణ రంగం వింగ్ </ion-option>\n\n              <ion-option value="మీడియా వింగ్">మీడియా వింగ్</ion-option>\n\n              <ion-option value="పొలిటికల్ వింగ్">పొలిటికల్ వింగ్</ion-option>\n\n              <ion-option value="సాఫ్ట్ వెర్ వింగ్">సాఫ్ట్ వెర్ వింగ్</ion-option>\n\n              <ion-option value="హౌస్ కీపింగ్ వింగ్"> హౌస్ కీపింగ్ వింగ్ </ion-option>\n\n              <ion-option value="సోషల్ మీడియా వింగ్">సోషల్ మీడియా వింగ్</ion-option>\n\n              <ion-option value="పేపర్ మీడియా వింగ్">పేపర్ మీడియా వింగ్</ion-option>\n\n              <ion-option value="ఎలక్ట్రానిక్ మీడియా వింగ్">ఎలక్ట్రానిక్ మీడియా వింగ్ </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <!-- <ion-col col-12 *ngIf="leadtype"></ion-col>\n\n          <ion-item>\n\n            <ion-label stacked> వింగ్ నాయకుడు రకాలు</ion-label>\n\n           \n\n              <ion-option value="జిల్లా నాయకుడు">జిల్లా నాయకుడు</ion-option>\n\n              <ion-option value="నియోజకవర్గం  నాయకుడు">నియోజకవర్గం  నాయకుడు  </ion-option>\n\n              <ion-option value="మండలం నాయకుడు">మండలం నాయకుడు</ion-option>\n\n              <ion-option value="పంచాయతి నాయకుడు">పంచాయతి నాయకుడు</ion-option>\n\n              <ion-option value="వార్డు నాయకుడు">వార్డు నాయకుడు</ion-option>\n\n                            <ion-option value="పనిచేసేచోట నాయకుడు">పనిచేసేచోట నాయకుడు</ion-option>\n\n              <ion-option value="బందువుల నాయకుడు">బందువుల నాయకుడు</ion-option>\n\n              <ion-option value="ఫ్రెండ్స్ నాయకుడు">ఫ్రెండ్స్ నాయకుడు</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col> -->\n\n        <ion-col col-12 *ngIf="subward">\n\n          <ion-item>\n\n            <ion-label stacked>ఉప-వార్డు పరిధి (ఏ ఇంటి నెంబర్ నుంచి ఏ ఇంటి వరకు)</ion-label>\n\n            <ion-input formControlName="subward" type="text" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ ఫేస్‌బుక్ యొక్క లింక్‌</ion-label>\n\n            <ion-input formControlName="facebook" type="text" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ జీవిత లక్ష్యం</ion-label>\n\n            <ion-input formControlName="lifegoal" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ కులం (మీకు సంబంధించిన సమాచారం పంపించుటకొరకు)</ion-label>\n\n            <ion-select formControlName="caste" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option value="ఎస్సి">ఎస్సి</ion-option>\n\n              <ion-option value="ఎస్టి">ఎస్టి</ion-option>\n\n              <ion-option value="బిసి - ఏ">బిసి - ఏ</ion-option>\n\n              <ion-option value="బిసి - బి">బిసి - బి</ion-option>\n\n              <ion-option value="బిసి - సి">బిసి - సి</ion-option>\n\n              <ion-option value="బిసి - డి">బిసి - డి</ion-option>\n\n              <ion-option value="బిసి - ఇ">బిసి - ఇ</ion-option>\n\n              <ion-option value="ఓసీ">ఓసీ</ion-option>\n\n              <ion-option value="కులం లేదు">కులం లేదు</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ ఉప కులం</ion-label>\n\n            <ion-input formControlName="subcaste" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <!-- <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>స్థానిక స్థలం</ion-label>\n\n            <ion-input formControlName="nativeplace" placeholder="మీ స్థానిక స్థలంను నమోదు చేయండి"\n\n              type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item> -->\n\n        <!-- <ion-label stacked>దేవుడి కోసం</ion-label>\n\n            <ion-select formControlName="god" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option value="Singer">పాడుతున్నాను</ion-option>\n\n              <ion-option value="Singer">సంగీతం</ion-option>\n\n              <ion-option value="Dance">నృత్యం</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col> -->\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ ఇతర సమాచారం</ion-label>\n\n            <ion-input formControlName="about_desp" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n              type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <div style="text-align: center;">\n\n            <button ion-button color="secondary" (click)="editpastor()" style="letter-spacing: 1px;">సబ్మిట్</button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n  </section>\n\n  <!-- Church Profile -->\n\n  <section *ngIf="categoryid==5">\n\n\n\n    <h2 class="test" style="text-align: center;font-size: 35px;font-family:ramabhadra;"> చర్చి ప్రొఫైల్ </h2>\n\n    <form [formGroup]="churchregsiterform">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>చర్చి పేరు <span style="color: red;">*</span></ion-label>\n\n            <ion-input type="text" formControlName="church_name" required\n\n              placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && churchregsiterform.get(\'church_name\').errors" class="error-message">\n\n            <div *ngIf="churchregsiterform.get(\'church_name\').errors[\'required\']">చర్చి పేరు ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>సంప్రదించే నంబర్ <span style="color: red;"></span></ion-label>\n\n            <ion-input type="tel" formControlName="contactnumber" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n              maxlength="10" minlength="10"></ion-input>\n\n          </ion-item>\n\n          <!-- <div *ngIf="submitted && churchregsiterform.get(\'contactnumber\').errors" class="error-message">\n\n            <div *ngIf="churchregsiterform.get(\'contactnumber\').errors[\'required\']">సంప్రదించే నంబర్ ఎంటర్ చేయండి</div>\n\n          </div> -->\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మొత్తం చర్చి సభ్యులు <span style="color: red;">*</span></ion-label>\n\n            <ion-input type="number" formControlName="total_members"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && churchregsiterform.get(\'total_members\').errors" class="error-message">\n\n            <div *ngIf="churchregsiterform.get(\'total_members\').errors[\'required\']">మొత్తం చర్చి సభ్యులు ఎంటర్ చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>సెలెక్ట్ డినామినేషన్ మోడల్ <span style="color: red;">*</span></ion-label>\n\n            <ion-select formControlName="denomination_id" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option *ngFor="let i of denomation" [value]="i.id">{{i.denomation_name}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && churchregsiterform.get(\'denomination_id\').errors" class="error-message">\n\n            <div *ngIf="churchregsiterform.get(\'denomination_id\').errors[\'required\']">డినామినేషన్ మోడల్ సెలెక్ట చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n\n\n          <ion-list>\n\n            <ion-label stacked>చర్చి టైపు <span style="color:red;"> * </span></ion-label>\n\n\n\n            <ion-item>\n\n              <input type="radio" value="Ministry" formControlName="churchtype">\n\n              <label>మెయిన్ లైన్ / మినిస్ట్రీ చర్చి </label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <input type="radio" value="Independentchurch" formControlName="churchtype" />\n\n              <label>స్వతంత్ర చర్చి </label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-12 *ngIf="churchregsiterform.get(\'churchtype\').value === \'Ministry\'">\n\n          <ion-item>\n\n            <ion-label stacked>మీ మెయిన్ లైన్ / మినిస్ట్రీ చర్చి సెలెక్ట చేయండి </ion-label>\n\n            <ion-select formControlName="ministry_id" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option *ngFor="let i of ministryname" [value]="i.id">{{i.ministryname}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <p><u>చిరునామా</u></p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>1). జిల్లా <span style="color:red;">*</span></ion-label>\n\n            <ion-select formControlName="district_id" (ionChange)="getconstency($event)"\n\n              [ngClass]="{\'is-invalid\': submitted && churchregsiterform.get(\'district_id\').errors }">\n\n              <ion-option value="" selected disabled>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && churchregsiterform.get(\'district_id\').errors" class="error-message">\n\n            <div *ngIf="churchregsiterform.get(\'district_id\').errors[\'required\']">జిల్లా సెలెక్ట చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>2). నియోజకవర్గం <span style="color:red;">*</span></ion-label>\n\n            <ion-select formControlName="constituency_id" (ionChange)="getmandals($event)"\n\n              [ngClass]="{\'is-invalid\': submitted && churchregsiterform.get(\'constituency_id\').errors }">\n\n              <ion-option value="" selected disabled>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && churchregsiterform.get(\'constituency_id\').errors" class="error-message">\n\n            <div *ngIf="churchregsiterform.get(\'constituency_id\').errors[\'required\']">నియోజకవర్గం సెలెక్ట చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>3.) మండలం / మున్సిపాలిటీ <span style="color:red;">*</span></ion-label>\n\n            <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event)"\n\n              [ngClass]="{\'is-invalid\': submitted && churchregsiterform.get(\'mandal_id\').errors }">\n\n              <ion-option value="" selected disabled>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && churchregsiterform.get(\'mandal_id\').errors" class="error-message">\n\n            <div *ngIf="churchregsiterform.get(\'mandal_id\').errors[\'required\']">మండలం / మున్సిపాలిటీ సెలెక్ట చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>4). పంచాయతీ / వార్డ్ <span style="color:red;">*</span></ion-label>\n\n            <ion-select formControlName="village_id"\n\n              [ngClass]="{\'is-invalid\': submitted && churchregsiterform.get(\'village_id\').errors }">\n\n              <ion-option value="" selected disabled>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && churchregsiterform.get(\'village_id\').errors" class="error-message">\n\n            <div *ngIf="churchregsiterform.get(\'village_id\').errors[\'required\']">పంచాయితీ సెలెక్ట చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>గ్రామం పేరు <span style="color:red;"></span></ion-label>\n\n            <ion-input type="text" formControlName="village_name"\n\n              [ngClass]="{\'is-invalid\': submitted && churchregsiterform.get(\'village_name\').errors }"></ion-input>\n\n          </ion-item>\n\n          <!-- <div *ngIf="submitted && churchregsiterform.get(\'village_name\').errors" class="error-message">\n\n            <div *ngIf="churchregsiterform.get(\'village_name\').errors[\'required\']">గ్రామం పేరు ఎంటర్ చేయండి</div>\n\n          </div> -->\n\n        </ion-col>\n\n        \n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>వీధి పేరు & లోకల్ అడ్రస్<span style="color:red;"></span></ion-label>\n\n            <ion-input type="text" formControlName="street" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n              [ngClass]="{\'is-invalid\': submitted && churchregsiterform.get(\'street\').errors }"></ion-input>\n\n          </ion-item>\n\n          <!-- <div *ngIf="submitted && churchregsiterform.get(\'street\').errors" class="error-message">\n\n            <div *ngIf="churchregsiterform.get(\'street\').errors[\'required\']">స్ట్రీట్ పేరు ఎంటర్ చేయండి</div>\n\n          </div> -->\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>చర్చి పాస్టర్ పేరు<span style="color:red;">*</span></ion-label>\n\n            <ion-select formControlName="pastor_id" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి"\n\n              [ngClass]="{\'is-invalid\': submitted && churchregsiterform.get(\'pastor_id\').errors }">\n\n              <ion-option *ngFor="let i of getchurchpastors" [value]="i.id">{{i.pastorname }}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && churchregsiterform.get(\'pastor_id\').errors" class="error-message">\n\n            <div *ngIf="churchregsiterform.get(\'pastor_id\').errors[\'required\']">పాస్టర్ సెలెక్ట చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>ఫేస్‌బుక్</ion-label>\n\n            <ion-input type="text" formControlName="facebook" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>యూట్యూబ్</ion-label>\n\n            <ion-input type="text" formControlName="youtube" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <!-- Village Name and Description inputs -->\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>చర్చి గూగుల్ లొకేషన్</ion-label>\n\n            <ion-input type="text" formControlName="location" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>ఇతర సమాచారం</ion-label>\n\n            <ion-textarea formControlName="description" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-textarea>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div style="text-align: center;">\n\n            <button ion-button color="secondary" (click)="editchurch()" style="letter-spacing: 1px;">నమోదు\n\n              చేయండి</button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n  </section>\n\n\n\n  <section *ngIf="categoryid==6">\n\n\n\n    <h2 class="test" style="text-align: center;font-size: 35px;font-family:ramabhadra;"> సంస్థ ప్రొఫైల్ </h2>\n\n    <form [formGroup]="independentorgainsationform">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>సంస్థ పేరు <span style="color:red; ">*</span></ion-label>\n\n            <ion-input formControlName="organisation_name" type="text"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && independentorgainsationform.get(\'organisation_name\').errors"\n\n            class="invalid-feedback">\n\n            <div *ngIf="independentorgainsationform.get(\'organisation_name\').errors[\'required\']">సంస్థ పేరు ఎంటర్ చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-list>\n\n            <ion-label stacked>సంస్థ యజమాని రకం <span style="color:red;"> * </span></ion-label>\n\n            <ion-item>\n\n              <input type="radio" value="1" formControlName="checkbox">\n\n              <label>విశ్వాసి</label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <input type="radio" value="2" formControlName="checkbox" />\n\n              <label> పాస్టర్ </label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n\n\n        <ion-col col-12 *ngIf="independentorgainsationform.get(\'checkbox\').value === \'1\'">\n\n          <ion-item>\n\n            <ion-label stacked>విశ్వాసి పేరు కోసం శోధించండి</ion-label>\n\n            <ion-input type="text" (keyup)="filterbelivers($event.target)"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 *ngIf="independentorgainsationform.get(\'checkbox\').value === \'1\'">\n\n          <ion-item>\n\n            <ion-label stacked>విశ్వాసి</ion-label>\n\n            <ion-select formControlName="believer_id" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option *ngFor="let i of bliversdata" [value]="i.id">{{i.fname}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>వాట్సాప్ నంబర్</ion-label>\n\n            <ion-input formControlName="org_address" type="text" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n              maxlength="10" minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>స్థలం <span style="color:red; ">*</span></ion-label>\n\n            <ion-input formControlName="location" type="text" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && independentorgainsationform.get(\'location\').errors" class="invalid-feedback">\n\n            <div *ngIf="independentorgainsationform.get(\'location\').errors[\'required\']">స్థలం ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>సంస్థ సంప్రదించే నంబర్ <span style="color:red; ">*</span></ion-label>\n\n            <ion-input formControlName="contact_num" type="text" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n              maxlength="10" minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && independentorgainsationform.get(\'contact_num\').errors" class="invalid-feedback">\n\n            <div *ngIf="independentorgainsationform.get(\'contact_num\').errors[\'required\']">సంస్థ సంప్రదించే నంబర్\n\n              ఎంటర్ చేయండి</div>\n\n            <div *ngIf="independentorgainsationform.get(\'contact_num\').errors[\'maxlength\']">10 అంకెల నంబర్ ఎంటర్ చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>ఇమెయిల్</ion-label>\n\n            <ion-input formControlName="email" type="text" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>సంస్థ వెబ్‌సైట్</ion-label>\n\n            <ion-input formControlName="website" type="text" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>సేవా పేరు <span style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="service_name">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of services" [value]="item?.id">{{item?.servicename}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && independentorgainsationform.get(\'service_name\').errors" class="invalid-feedback">\n\n            <div *ngIf="independentorgainsationform.get(\'service_name\').errors[\'required\']">సేవా పేరు ఎంటర్ చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-list>\n\n            <ion-label stacked>సంస్థ రకం <span style="color:red;"> * </span></ion-label>\n\n            <ion-item>\n\n              <input type="radio" value="Ministry" formControlName="organizationtype">\n\n              <label>మంత్రివర్గ సంస్థ </label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <input type="radio" value="Independentchurch" formControlName="organizationtype" />\n\n              <label> స్వతంత్ర సంస్థ </label>\n\n            </ion-item>\n\n          </ion-list>\n\n\n\n          <div *ngIf="submitted && independentorgainsationform.get(\'organizationtype\').errors" class="invalid-feedback">\n\n            <div *ngIf="independentorgainsationform.get(\'organizationtype\').errors[\'organizationtype\']">సంస్థ రకం ఎంటర్\n\n              చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n\n\n        <ion-col col-12 *ngIf="independentorgainsationform.get(\'organizationtype\').value === \'Ministry\'">\n\n          <ion-item>\n\n            <ion-label stacked>మినిస్ట్రీ</ion-label>\n\n            <ion-select formControlName="ministry_id">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let i of ministryname" [value]="i.id">{{i.ministryname}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <p>చిరునామా</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>1). జిల్లా <span style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="districts" (ionChange)="getconstency($event)"\n\n              style="height:37px;width: 273px;">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && independentorgainsationform.get(\'districts\').errors" class="invalid-feedback">\n\n            <div *ngIf="independentorgainsationform.get(\'districts\').errors[\'required\']">జిల్లా సెలెక్ట చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>2). నియోజకవర్గం<span style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="constituencyname" (ionChange)="getmandals($event)"\n\n              style="height:37px;width: 273px;">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && independentorgainsationform.get(\'constituencyname\').errors" class="invalid-feedback">\n\n            <div *ngIf="independentorgainsationform.get(\'constituencyname\').errors[\'required\']">\n\n              నియోజకవర్గం సెలెక్ట చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>3). మండలం / మున్సిపాలిటీ <span style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="mandals" (ionChange)="gepanchayati($event)" style="height:37px;width: 273px;">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && independentorgainsationform.get(\'mandals\').errors" class="invalid-feedback">\n\n            <div *ngIf="independentorgainsationform.get(\'mandals\').errors[\'required\']">మండలం / మున్సిపాలిటీ సెలెక్ట\n\n              చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>పంచాయితీ <span style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="panchayati" style="height:37px;width: 273px;">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && independentorgainsationform.get(\'panchayati\').errors" class="invalid-feedback">\n\n            <div *ngIf="independentorgainsationform.get(\'panchayati\').errors[\'required\']">పంచాయితీ సెలెక్ట చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>గ్రామం పేరు / స్ట్రీట్ పేరు <span style="color:red; ">*</span></ion-label>\n\n            <ion-input formControlName="villagename" type="text"\n\n              placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && independentorgainsationform.get(\'villagename\').errors" class="invalid-feedback">\n\n            <div *ngIf="independentorgainsationform.get(\'villagename\').errors[\'required\']">గ్రామం పేరు ఎంటర్ చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ స్థానిక చిరునామా / హౌస్ నంబర్ <span style="color:red; ">*</span></ion-label>\n\n            <ion-input formControlName="ward" type="text" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && independentorgainsationform.get(\'ward\').errors" class="invalid-feedback">\n\n            <div *ngIf="independentorgainsationform.get(\'ward\').errors[\'required\']">స్ట్రీట్ పేరు ఎంటర్ చేయండి</div>\n\n          </div>\n\n        </ion-col>\n\n\n\n        <ion-col col-12 *ngIf="form==2">\n\n          <ion-item>\n\n            <ion-label stacked>మీ పాస్టర్</ion-label>\n\n            <ion-select formControlName="pastor_id" (click)="getorgnaziationpstorsget()">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let i of getorganizationpastors" [value]="i.id">{{i.pastorname}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>సెలెక్ట్ డినామినేషన్ మోడల్ <span style="color:red; ">*</span></ion-label>\n\n            <ion-select formControlName="denomation" style="height:37px;width: 273px;">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of denomation" [value]="item.id">{{item.denomation_name}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && independentorgainsationform.get(\'denomation\').errors" class="invalid-feedback">\n\n            <div *ngIf="independentorgainsationform.get(\'denomation\').errors[\'required\']">\n\n              డినామినేషన్\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div style="text-align: center;">\n\n            <button ion-button color="secondary" (click)="editindependentorgainsation()"\n\n              style="letter-spacing: 1px;">నమోదు\n\n              చేయండి</button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n  </section>\n\n<!-- Pastor Association -->\n\n  <section *ngIf="categoryid==7">\n\n    <h2 class="test" style="text-align: center;font-size: 35px;font-family:ramabhadra;"> పాస్టర్ అసోసియేషన్ ప్రొఫైల్\n\n    </h2>\n\n    <form [formGroup]="pastorsassociations">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>పాస్టర్ యసోసియేషన్ పేరు <span style="color:red;">*</span></ion-label>\n\n            <ion-input formControlName="pa_name" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" required></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && pastorsassociations.get(\'pa_name\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorsassociations.get(\'pa_name\').errors[\'required\']"> పాస్టర్ యసోసియేషన్ పేరు ఎంటర్ చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>పాస్టర్ల అసోసియేషన్ స్థాయి</ion-label>\n\n            <ion-select formControlName="level" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option value="మండల స్థాయి">మండల స్థాయి</ion-option>\n\n              <ion-option value="నియోజకవర్గ స్థాయి">నియోజకవర్గ స్థాయి</ion-option>\n\n              <ion-option value="జిల్లా స్థాయి">జిల్లా స్థాయి</ion-option>\n\n              <ion-option value="రాష్ట్ర స్థాయి">రాష్ట్ర స్థాయి</ion-option>\n\n              <ion-option value="జాతీయ స్థాయి">జాతీయ స్థాయి</ion-option>\n\n              <ion-option value="అంతర్జాతీయ స్థాయి">అంతర్జాతీయ స్థాయి</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>సంప్రదించే నంబర్ <span style="color:red;">*</span></ion-label>\n\n            <ion-input formControlName="phonenumber" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" maxlength="10"\n\n              minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && pastorsassociations.get(\'phonenumber\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorsassociations.get(\'phonenumber\').errors[\'required\']">\n\n              సంప్రదించే నంబర్ ఎంటర్ చేయండి\n\n            </div>\n\n            <div *ngIf="pastorsassociations.get(\'phonenumber\').errors[\'maxlength\']">\n\n              10 అంకెల నంబర్ ఎంటర్ చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>వాట్సాప్ నంబర్</ion-label>\n\n            <ion-input formControlName="whatsapp_number" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" maxlength="10"\n\n              minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>ఆంధ్రప్రదేశ్‌లో మొత్తం మీ నాయకులు</ion-label>\n\n            <ion-input formControlName="totalleadrs" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ స్థానిక చిరునామా <span style="color:red;">*</span></ion-label>\n\n            <ion-input formControlName="address" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && pastorsassociations.get(\'address\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorsassociations.get(\'address\').errors[\'required\']"> చిరునామా ఎంటర్ చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>జిల్లా సెలెక్ట చేయండి <span style="color:red;">*</span></ion-label>\n\n            <ion-select formControlName="district_id" (ionChange)="getconstency($event)" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && pastorsassociations.get(\'district_id\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorsassociations.get(\'district_id\').errors[\'required\']"> జిల్లా ఎంటర్ చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>నియోజక వర్గం  <span style="color:red;">*</span></ion-label>\n\n            <ion-select formControlName="constituency_id" (ionChange)="getmandals($event)" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && pastorsassociations.get(\'constituency_id\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorsassociations.get(\'constituency_id\').errors[\'required\']">నియోజక వర్గం ఎంటర్ చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మండలం <span style="color:red;">*</span></ion-label>\n\n            <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event)" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && pastorsassociations.get(\'mandal_id\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorsassociations.get(\'mandal_id\').errors[\'required\']"> మండలం ఎంటర్ చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>పంచాయితి <span style="color:red;">*</span></ion-label>\n\n            <ion-select formControlName="village_id" placeholder="ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && pastorsassociations.get(\'village_id\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorsassociations.get(\'village_id\').errors[\'required\']"> పంచాయితి ఎంటర్ చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row> \n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked for="pastor_name">అసోసియేషన్ హెడ్ సెలెక్ట్ చేయండి<span style="color:red;">*</span></ion-label>\n\n            <ion-select formControlName="pastor_id">\n\n              <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n              <ion-option *ngFor="let i of getpastorassciationas" [value]="i.id">{{i.pastorname}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngIf="submitted && pastorsassociations.get(\'pastor_id\').errors" class="invalid-feedback">\n\n            <div *ngIf="pastorsassociations.get(\'pastor_id\').errors[\'required\']"> అసోసియేషన్ హెడ్ సెలెక్ట్ చేయండి\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n       \n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ అసోసియేషన్ దేనిగురుంచి పనిచేస్తుంది</ion-label>\n\n            <ion-input formControlName="workingareas" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n              type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>అసోసియేషన్ ఫేస్‌బుక్ పేజ్:</ion-label>\n\n            <ion-input formControlName="description" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n              type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>అసోసియేషన్ వెబ్‌సైట్</ion-label>\n\n            <ion-input formControlName="website" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-col>  \n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div style="text-align: center;">\n\n            <button ion-button color="secondary" (click)="editassciation()" style="letter-spacing: 1px;">నమోదు\n\n              చేయండి</button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n\n\n  </section>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=15.js.map