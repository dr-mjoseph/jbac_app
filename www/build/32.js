webpackJsonp([32],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyCouncellingPageModule", function() { return FamilyCouncellingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__family_councelling__ = __webpack_require__(513);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FamilyCouncellingPageModule = /** @class */ (function () {
    function FamilyCouncellingPageModule() {
    }
    FamilyCouncellingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__family_councelling__["a" /* FamilyCouncellingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__family_councelling__["a" /* FamilyCouncellingPage */]),
            ],
        })
    ], FamilyCouncellingPageModule);
    return FamilyCouncellingPageModule;
}());

//# sourceMappingURL=family-councelling.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyCouncellingPage; });
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



var FamilyCouncellingPage = /** @class */ (function () {
    function FamilyCouncellingPage(navCtrl, navParams, alertCtrl, toastCtrl, loadingCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.viewMode = 'browse'; // 'browse' | 'my_bookings' | 'doctor_profile' | 'doctor_schedule' | 'book_now'
        this.role = 'user';
        this.isAdmin = false;
        this.isDoctor = false;
        this.isLoggedIn = false;
        this.doctors = [];
        this.appointments = [];
        this.selectedDoctor = null;
        this.loading = false;
        // Booking Form model (with Voice Consultation)
        this.bookingData = {
            doc_id: '',
            patient_name: '',
            patient_phone: '',
            patient_email: '',
            appointment_date: '',
            appointment_time: '10:00 AM - 11:00 AM',
            reason: '',
            notes: '',
            user_voice_audio: '',
            user_voice_text: '',
            user_language: 'te-IN'
        };
        // Voice recording & Speech-to-Text state for Patient
        this.selectedLang = 'te-IN'; // 'te-IN' (Telugu) | 'en-IN' (English) | 'hi-IN' (Hindi)
        this.isRecording = false;
        this.recordingTimer = 0;
        this.recordingInterval = null;
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.recordedAudioUrl = '';
        this.recordedAudioBase64 = '';
        this.speechRecognition = null;
        this.transcribedText = '';
        this.isSpeechSupported = false;
        // Voice recording & Speech-to-Text state for Doctor Reply
        this.isDoctorVoiceReplyOpen = false;
        this.activeApptForReply = null;
        this.selectedDoctorLang = 'te-IN';
        this.isDoctorRecording = false;
        this.doctorRecordingTimer = 0;
        this.doctorRecordingInterval = null;
        this.doctorMediaRecorder = null;
        this.doctorAudioChunks = [];
        this.doctorRecordedAudioUrl = '';
        this.doctorRecordedAudioBase64 = '';
        this.doctorTranscribedText = '';
        this.doctorSpeechRecognition = null;
        // Doctor Profile Form model
        this.doctorProfile = {
            id: null,
            usr_id: '',
            doctor_name: '',
            specialty: 'Family Counsellor & Physician',
            qualification: 'MBBS, MD',
            phone: '',
            email: '',
            hospital_church: '',
            available_days: 'Mon, Wed, Fri',
            available_time_slots: '10:00 AM - 01:00 PM, 05:00 PM - 08:00 PM',
            consultation_fee: '0',
            bio: '',
            is_active: 1
        };
        this.timeSlots = [
            '09:00 AM - 10:00 AM',
            '10:00 AM - 11:00 AM',
            '11:00 AM - 12:00 PM',
            '12:00 PM - 01:00 PM',
            '02:00 PM - 03:00 PM',
            '03:00 PM - 04:00 PM',
            '04:00 PM - 05:00 PM',
            '05:00 PM - 06:00 PM',
            '06:00 PM - 07:00 PM',
            '07:00 PM - 08:00 PM'
        ];
    }
    FamilyCouncellingPage.prototype.ionViewWillEnter = function () {
        var storedUsrId = localStorage.getItem('usr_id');
        var isDocFlag = localStorage.getItem('is_doctor');
        var catId = localStorage.getItem('category_id');
        var cat = (localStorage.getItem('category') || '').toLowerCase().trim();
        var role = (localStorage.getItem('role') || '').toLowerCase().trim();
        if (storedUsrId && storedUsrId.trim() !== '' && storedUsrId !== 'null' && !storedUsrId.startsWith('guest_')) {
            this.isLoggedIn = true;
            this.usr_id = storedUsrId;
            this.user_name = localStorage.getItem('name') || '';
            this.user_phone = localStorage.getItem('phone') || localStorage.getItem('mobile_number') || '';
            this.user_email = localStorage.getItem('email') || '';
            this.isDoctor = (catId === '8' || isDocFlag === '1' || cat === 'doctor' || role === 'doctor');
            this.isAdmin = (role === 'admin' || cat === 'admin');
        }
        else {
            this.isLoggedIn = false;
            this.usr_id = null;
            this.isDoctor = false;
            this.isAdmin = false;
        }
        if (!this.isLoggedIn) {
            if (this.viewMode !== 'book_now') {
                this.viewMode = 'browse';
            }
        }
        else if (this.isDoctor) {
            if (this.viewMode === 'browse') {
                this.viewMode = 'doctor_schedule';
            }
        }
        else {
            // Normal user logged in
            if (this.viewMode === 'doctor_schedule' || this.viewMode === 'doctor_profile') {
                this.viewMode = 'browse';
            }
        }
        this.loadDoctors();
        this.loadAppointments();
        this.checkSpeechSupport();
    };
    FamilyCouncellingPage.prototype.switchTab = function (tab) {
        this.viewMode = tab;
        if (tab === 'my_bookings' || tab === 'doctor_schedule') {
            this.loadAppointments();
        }
    };
    FamilyCouncellingPage.prototype.onTabChange = function (tab) {
        this.switchTab(tab);
    };
    FamilyCouncellingPage.prototype.gotohome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    FamilyCouncellingPage.prototype.goToLogin = function () {
        this.navCtrl.push('LoginPage');
    };
    FamilyCouncellingPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    FamilyCouncellingPage.prototype.checkSpeechSupport = function () {
        var SpeechRec = window.webkitSpeechRecognition || window.SpeechRecognition;
        this.isSpeechSupported = !!SpeechRec;
    };
    FamilyCouncellingPage.prototype.getFallbackDoctors = function () {
        return [];
    };
    FamilyCouncellingPage.prototype.loadDoctors = function () {
        var _this = this;
        this.doctors = this.getFallbackDoctors();
        this.service.getcouncellingdoctors().subscribe(function (res) {
            if (res && res.status === 200) {
                _this.doctors = (res.data && res.data.length > 0) ? res.data.filter(function (d) { return d.d_in === 0 || d.d_in === '0' || d.d_in === undefined; }) : [];
                var myDoc = _this.doctors.find(function (d) { return String(d.usr_id) === String(_this.usr_id) || (_this.user_phone && String(d.phone_number || d.phone) === String(_this.user_phone)); });
                if (myDoc) {
                    _this.isDoctor = true;
                    _this.doctorProfile = Object.assign({}, myDoc);
                }
            }
        }, function (err) {
            console.error('Error loading doctors:', err);
            _this.doctors = _this.getFallbackDoctors();
        });
    };
    FamilyCouncellingPage.prototype.loadAppointments = function () {
        var _this = this;
        var payload = {
            usr_id: this.usr_id,
            phone_number: this.user_phone,
            role: (this.isAdmin || this.isDoctor) ? 'doctor' : 'user'
        };
        this.service.getcouncellingappointments(payload).subscribe(function (res) {
            if (res && res.status === 200) {
                _this.appointments = res.data || [];
            }
        }, function (err) {
            console.error('Error loading appointments:', err);
        });
    };
    FamilyCouncellingPage.prototype.openBookingForm = function (doc) {
        var _this = this;
        if (!this.isLoggedIn) {
            var alert_1 = this.alertCtrl.create({
                title: 'లాగిన్ అవ్వండి (Login Required)',
                message: 'కౌన్సిలింగ్ అపాయింట్‌మెంట్ బుక్ చేసుకోవడానికి దయచేసి ముందుగా లాగిన్ అవ్వండి.',
                buttons: [
                    { text: 'రద్దు (Cancel)', role: 'cancel' },
                    {
                        text: 'లాగిన్ అవ్వండి (Login)',
                        handler: function () {
                            _this.navCtrl.push('LoginPage', { redirect: 'FamilyCouncellingPage' });
                        }
                    }
                ]
            });
            alert_1.present();
            return;
        }
        this.selectedDoctor = doc;
        this.bookingData.doc_id = doc.id;
        this.clearUserVoiceRecording();
        this.viewMode = 'book_now';
    };
    FamilyCouncellingPage.prototype.cancelBooking = function () {
        this.selectedDoctor = null;
        this.clearUserVoiceRecording();
        this.viewMode = 'browse';
    };
    // <------------------ Patient Voice Recording & STT ------------------>
    FamilyCouncellingPage.prototype.setLanguage = function (lang) {
        this.selectedLang = lang;
        this.bookingData.user_language = lang;
    };
    FamilyCouncellingPage.prototype.startUserVoiceRecording = function () {
        var _this = this;
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            this.showToast('మైక్రోఫోన్ సపోర్ట్ లేదు (Microphone not supported on this device).');
            return;
        }
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
            _this.audioChunks = [];
            var MediaRec = window.MediaRecorder;
            if (!MediaRec) {
                _this.showToast('MediaRecorder సపోర్ట్ లేదు.');
                return;
            }
            _this.mediaRecorder = new MediaRec(stream);
            _this.mediaRecorder.ondataavailable = function (e) {
                if (e.data && e.data.size > 0) {
                    _this.audioChunks.push(e.data);
                }
            };
            _this.mediaRecorder.onstop = function () {
                var audioBlob = new Blob(_this.audioChunks, { type: 'audio/webm' });
                _this.recordedAudioUrl = URL.createObjectURL(audioBlob);
                var reader = new FileReader();
                reader.onloadend = function () {
                    _this.recordedAudioBase64 = reader.result;
                    _this.bookingData.user_voice_audio = _this.recordedAudioBase64;
                };
                reader.readAsDataURL(audioBlob);
            };
            _this.mediaRecorder.start();
            _this.isRecording = true;
            _this.recordingTimer = 0;
            _this.recordingInterval = setInterval(function () {
                _this.recordingTimer++;
            }, 1000);
            // Start Speech-to-Text concurrently
            var SpeechRec = window.webkitSpeechRecognition || window.SpeechRecognition;
            if (SpeechRec) {
                _this.speechRecognition = new SpeechRec();
                _this.speechRecognition.lang = _this.selectedLang;
                _this.speechRecognition.continuous = true;
                _this.speechRecognition.interimResults = true;
                _this.speechRecognition.onresult = function (event) {
                    var text = '';
                    for (var i = event.resultIndex; i < event.results.length; ++i) {
                        text += event.results[i][0].transcript;
                    }
                    if (text) {
                        _this.transcribedText = text;
                        _this.bookingData.user_voice_text = text;
                        if (!_this.bookingData.notes) {
                            _this.bookingData.notes = text;
                        }
                    }
                };
                _this.speechRecognition.onerror = function (e) {
                    console.warn('Speech recognition warning:', e);
                };
                try {
                    _this.speechRecognition.start();
                }
                catch (_) { }
            }
        }).catch(function (err) {
            console.error('Mic access error:', err);
            _this.showToast('దయచేసి మైక్రోఫోన్ అనుమతి ఇవ్వండి (Microphone permission required).');
        });
    };
    FamilyCouncellingPage.prototype.stopUserVoiceRecording = function () {
        if (this.mediaRecorder && this.isRecording) {
            this.mediaRecorder.stop();
            if (this.mediaRecorder.stream) {
                this.mediaRecorder.stream.getTracks().forEach(function (track) { return track.stop(); });
            }
        }
        if (this.speechRecognition) {
            try {
                this.speechRecognition.stop();
            }
            catch (_) { }
        }
        if (this.recordingInterval) {
            clearInterval(this.recordingInterval);
        }
        this.isRecording = false;
        this.showToast('వాయిస్ రికార్డింగ్ పూర్తయింది! (Voice message recorded)');
    };
    FamilyCouncellingPage.prototype.clearUserVoiceRecording = function () {
        if (this.isRecording) {
            this.stopUserVoiceRecording();
        }
        this.recordedAudioUrl = '';
        this.recordedAudioBase64 = '';
        this.transcribedText = '';
        this.recordingTimer = 0;
        this.bookingData.user_voice_audio = '';
        this.bookingData.user_voice_text = '';
    };
    FamilyCouncellingPage.prototype.submitAppointment = function () {
        var _this = this;
        if (!this.bookingData.doc_id) {
            this.showToast('దయచేసి డాక్టర్ని ఎంచుకోండి (Please select a doctor)');
            return;
        }
        if (!this.bookingData.patient_name || !this.bookingData.patient_phone) {
            this.showToast('దయచేసి మీ పేరు మరియు ఫోన్ నంబర్ నమోదు చేయండి');
            return;
        }
        if (!this.bookingData.appointment_date) {
            this.showToast('దయచేసి అపాయింట్‌మెంట్ తేదీని ఎంచుకోండి');
            return;
        }
        var loader = this.loadingCtrl.create({ content: 'అపాయింట్‌మెంట్ నమోదు అవుతోంది...' });
        loader.present();
        var payload = {
            doc_id: this.bookingData.doc_id,
            doctor_id: this.bookingData.doc_id,
            doctor_name: this.selectedDoctor ? (this.selectedDoctor.doctor_name || this.selectedDoctor.name) : '',
            usr_id: this.usr_id,
            user_id: this.usr_id,
            patient_name: this.bookingData.patient_name,
            family_name: this.bookingData.patient_name,
            patient_phone: this.bookingData.patient_phone,
            phone_number: this.bookingData.patient_phone,
            patient_email: this.bookingData.patient_email || '',
            appointment_date: this.bookingData.appointment_date,
            appointment_time: this.bookingData.appointment_time,
            reason: this.bookingData.reason || 'Family Counselling & Consultation',
            notes: this.bookingData.notes || this.transcribedText || '',
            user_voice_audio: this.recordedAudioBase64 || '',
            user_voice_text: this.transcribedText || this.bookingData.notes || '',
            user_language: this.selectedLang || 'te-IN'
        };
        this.service.bookcouncellingappointment(payload).subscribe(function (res) {
            loader.dismiss();
            if (res && (res.status === 200 || res.status === '200')) {
                var alert_2 = _this.alertCtrl.create({
                    title: 'విజయవంతం! (Success)',
                    subTitle: 'మీ అపాయింట్‌మెంట్ మరియు వాయిస్ కన్సల్టేషన్ విజయవంతంగా బుక్ అయ్యాయి! డాక్టర్ గారు త్వరలో మీతో మాట్లాడతారు.',
                    buttons: ['Ok']
                });
                alert_2.present();
                _this.loadAppointments();
                _this.clearUserVoiceRecording();
                _this.viewMode = 'my_bookings';
            }
            else {
                _this.showToast(res.message || 'అపాయింట్‌మెంట్ విఫలమైంది.');
            }
        }, function (err) {
            loader.dismiss();
            _this.showToast('నెట్‌వర్క్ సమస్య. దయచేసి మళ్లీ ప్రయత్నించండి.');
        });
    };
    // <------------------ Doctor Voice Advice Reply ------------------>
    FamilyCouncellingPage.prototype.openDoctorVoiceReply = function (appt) {
        this.activeApptForReply = appt;
        this.clearDoctorVoiceRecording();
        this.isDoctorVoiceReplyOpen = true;
    };
    FamilyCouncellingPage.prototype.closeDoctorVoiceReply = function () {
        this.clearDoctorVoiceRecording();
        this.isDoctorVoiceReplyOpen = false;
        this.activeApptForReply = null;
    };
    FamilyCouncellingPage.prototype.setDoctorLanguage = function (lang) {
        this.selectedDoctorLang = lang;
    };
    FamilyCouncellingPage.prototype.startDoctorVoiceRecording = function () {
        var _this = this;
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            this.showToast('మైక్రోఫోన్ సపోర్ట్ లేదు.');
            return;
        }
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
            _this.doctorAudioChunks = [];
            var MediaRec = window.MediaRecorder;
            if (!MediaRec) {
                _this.showToast('MediaRecorder సపోర్ట్ లేదు.');
                return;
            }
            _this.doctorMediaRecorder = new MediaRec(stream);
            _this.doctorMediaRecorder.ondataavailable = function (e) {
                if (e.data && e.data.size > 0) {
                    _this.doctorAudioChunks.push(e.data);
                }
            };
            _this.doctorMediaRecorder.onstop = function () {
                var audioBlob = new Blob(_this.doctorAudioChunks, { type: 'audio/webm' });
                _this.doctorRecordedAudioUrl = URL.createObjectURL(audioBlob);
                var reader = new FileReader();
                reader.onloadend = function () {
                    _this.doctorRecordedAudioBase64 = reader.result;
                };
                reader.readAsDataURL(audioBlob);
            };
            _this.doctorMediaRecorder.start();
            _this.isDoctorRecording = true;
            _this.doctorRecordingTimer = 0;
            _this.doctorRecordingInterval = setInterval(function () {
                _this.doctorRecordingTimer++;
            }, 1000);
            // Concurrent STT for Doctor
            var SpeechRec = window.webkitSpeechRecognition || window.SpeechRecognition;
            if (SpeechRec) {
                _this.doctorSpeechRecognition = new SpeechRec();
                _this.doctorSpeechRecognition.lang = _this.selectedDoctorLang;
                _this.doctorSpeechRecognition.continuous = true;
                _this.doctorSpeechRecognition.interimResults = true;
                _this.doctorSpeechRecognition.onresult = function (event) {
                    var text = '';
                    for (var i = event.resultIndex; i < event.results.length; ++i) {
                        text += event.results[i][0].transcript;
                    }
                    if (text) {
                        _this.doctorTranscribedText = text;
                    }
                };
                try {
                    _this.doctorSpeechRecognition.start();
                }
                catch (_) { }
            }
        }).catch(function (err) {
            console.error('Doctor mic error:', err);
            _this.showToast('దయచేసి మైక్రోఫోన్ అనుమతి ఇవ్వండి.');
        });
    };
    FamilyCouncellingPage.prototype.stopDoctorVoiceRecording = function () {
        if (this.doctorMediaRecorder && this.isDoctorRecording) {
            this.doctorMediaRecorder.stop();
            if (this.doctorMediaRecorder.stream) {
                this.doctorMediaRecorder.stream.getTracks().forEach(function (track) { return track.stop(); });
            }
        }
        if (this.doctorSpeechRecognition) {
            try {
                this.doctorSpeechRecognition.stop();
            }
            catch (_) { }
        }
        if (this.doctorRecordingInterval) {
            clearInterval(this.doctorRecordingInterval);
        }
        this.isDoctorRecording = false;
        this.showToast('డాక్టర్ వాయిస్ సలహా రికార్డ్ అయింది!');
    };
    FamilyCouncellingPage.prototype.clearDoctorVoiceRecording = function () {
        if (this.isDoctorRecording) {
            this.stopDoctorVoiceRecording();
        }
        this.doctorRecordedAudioUrl = '';
        this.doctorRecordedAudioBase64 = '';
        this.doctorTranscribedText = '';
        this.doctorRecordingTimer = 0;
    };
    FamilyCouncellingPage.prototype.sendDoctorVoiceReply = function () {
        var _this = this;
        if (!this.activeApptForReply)
            return;
        if (!this.doctorRecordedAudioBase64 && !this.doctorTranscribedText) {
            this.showToast('దయచేసి వాయిస్ సలహా లేదా టెక్స్ట్ నమోదు చేయండి.');
            return;
        }
        var loader = this.loadingCtrl.create({ content: 'వాయిస్ సలహా పంపబడుతోంది...' });
        loader.present();
        var payload = {
            appointment_id: this.activeApptForReply.id,
            id: this.activeApptForReply.id,
            doctor_voice_audio: this.doctorRecordedAudioBase64 || '',
            doctor_voice_text: this.doctorTranscribedText || '',
            doctor_language: this.selectedDoctorLang || 'te-IN',
            doctor_notes: this.doctorTranscribedText || 'Voice Consultation Advice Provided'
        };
        this.service.doctorvoicereply(payload).subscribe(function (res) {
            loader.dismiss();
            if (res && (res.status === 200 || res.status === '200')) {
                _this.activeApptForReply.doctor_voice_audio = payload.doctor_voice_audio;
                _this.activeApptForReply.doctor_voice_text = payload.doctor_voice_text;
                _this.activeApptForReply.doctor_language = payload.doctor_language;
                _this.activeApptForReply.status = 'Doctor Replied';
                _this.showToast('పేషెంట్‌కి వాయిస్ సలహా విజయవంతంగా పంపబడింది!');
                _this.closeDoctorVoiceReply();
                _this.loadAppointments();
            }
            else {
                _this.showToast((res && res.message) ? res.message : 'సలహా పంపడంలో సమస్య ఏర్పడింది.');
            }
        }, function (err) {
            loader.dismiss();
            _this.showToast('నెట్‌వర్క్ సమస్య.');
        });
    };
    FamilyCouncellingPage.prototype.saveDoctorProfile = function () {
        var _this = this;
        if (!this.doctorProfile.doctor_name || !this.doctorProfile.phone) {
            this.showToast('దయచేసి డాక్టర్ పేరు మరియు ఫోన్ నంబర్ నమోదు చేయండి');
            return;
        }
        var loader = this.loadingCtrl.create({ content: 'డాక్టర్ ప్రొఫైల్ భద్రపరచబడుతోంది...' });
        loader.present();
        this.service.savecouncellingdoctor(this.doctorProfile).subscribe(function (res) {
            loader.dismiss();
            if (res && res.status === 200) {
                _this.isDoctor = true;
                _this.showToast('డాక్టర్ ప్రొఫైల్ విజయవంతంగా భద్రపరచబడింది!');
                _this.loadDoctors();
                _this.viewMode = 'browse';
            }
            else {
                _this.showToast(res.message || 'ప్రొఫైల్ సేవ్ విఫలమైంది');
            }
        }, function (err) {
            loader.dismiss();
            _this.showToast('నెట్‌వర్క్ సమస్య.');
        });
    };
    FamilyCouncellingPage.prototype.editDoctorAsAdmin = function (doc) {
        this.doctorProfile = Object.assign({}, doc);
        this.viewMode = 'doctor_profile';
        this.showToast('డాక్టర్ వివరాలు ఎడిట్ చేయడానికి సిద్ధం');
    };
    FamilyCouncellingPage.prototype.updateStatus = function (appt, newStatus) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'స్థితిని మార్చండి',
            message: 'ఈ అపాయింట్‌మెంట్ స్థితిని ' + newStatus + ' గా మార్చాలనుకుంటున్నారా?',
            buttons: [
                { text: 'రద్దు (Cancel)', role: 'cancel' },
                {
                    text: 'సరే (Confirm)',
                    handler: function () {
                        _this.service.updateappointmentstatus({ id: appt.id, status: newStatus }).subscribe(function (res) {
                            if (res && res.status === 200) {
                                appt.status = newStatus;
                                _this.showToast('అపాయింట్‌మెంట్ స్థితి మారింది');
                            }
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    FamilyCouncellingPage.prototype.gotoDoctorRegister = function () {
        this.navCtrl.push('DoctorregisterPage');
    };
    FamilyCouncellingPage.prototype.getLangName = function (code) {
        if (!code)
            return 'తెలుగు';
        if (code.startsWith('te'))
            return 'తెలుగు';
        if (code.startsWith('hi'))
            return 'हिंदी';
        if (code.startsWith('en'))
            return 'English';
        return code;
    };
    FamilyCouncellingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-family-councelling',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\family-councelling\family-councelling.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title style="text-align: center; font-size: 15px;">\n      <b>వివాహ & కుటుంబ కౌన్సిలింగ్ (Counselling)</b>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button tappable icon-only (click)="gotohome()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="viewMode" (ionChange)="onTabChange(viewMode)" color="primary">\n      <ion-segment-button tappable value="browse" (click)="switchTab(\'browse\')">\n        కౌన్సిలర్లు\n      </ion-segment-button>\n      <ion-segment-button tappable value="my_bookings" *ngIf="isLoggedIn && !isDoctor" (click)="switchTab(\'my_bookings\')">\n        నా బుకింగ్స్\n      </ion-segment-button>\n      <ion-segment-button tappable value="doctor_schedule" *ngIf="isLoggedIn && (isDoctor || isAdmin)" (click)="switchTab(\'doctor_schedule\')">\n        షెడ్యూల్\n      </ion-segment-button>\n      <ion-segment-button tappable value="doctor_profile" *ngIf="isLoggedIn && (isDoctor || isAdmin)" (click)="switchTab(\'doctor_profile\')">\n        ప్రొఫైల్ అప్డేట్\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="pagecss">\n\n  <!-- TOP BANNER FOR GUESTS: PROMINENT DOCTOR REGISTER & LOGIN BUTTONS -->\n  <div *ngIf="!isLoggedIn && viewMode !== \'book_now\'" style="background: linear-gradient(135deg, #f0fdf4, #e0f2fe); border: 1px solid #bbf7d0; margin: 10px; padding: 12px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">\n    <div style="display: flex; justify-content: space-between; align-items: center;">\n      <div>\n        <div style="font-size: 13px; font-weight: bold; color: #166534;">\n          🩺 మీరు డాక్టర్ లేదా కౌన్సిలరా?\n        </div>\n        <div style="font-size: 11px; color: #374151; margin-top: 2px;">\n          క్రిస్టియన్ ఫ్యామిలీ వెల్నెస్ నెట్‌వర్క్‌లో చేరండి\n        </div>\n      </div>\n      <button ion-button tappable small color="secondary" style="border-radius: 8px; font-weight: bold; margin: 0;" (click)="gotoDoctorRegister()">\n        రిజిస్టర్ అవ్వండి\n      </button>\n    </div>\n  </div>\n\n  <!-- TOP BANNER FOR DOCTORS & ADMINS -->\n  <div *ngIf="isLoggedIn && (isDoctor || isAdmin) && viewMode !== \'book_now\'" class="doctor-workspace-mobile-banner" style="background: linear-gradient(135deg, #00548F, #00365c); color: white; margin: 10px; padding: 12px 14px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,84,143,0.25);">\n    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">\n      <span style="font-size: 13px; font-weight: bold; color: #ffeb3b;">\n        🩺 డాక్టర్ వర్క్‌స్పేస్ (Doctor Portal)\n      </span>\n      <span style="background: rgba(255,255,255,0.2); font-size: 10px; padding: 2px 6px; border-radius: 6px;">\n        DOCTOR\n      </span>\n    </div>\n    <div style="display: flex; gap: 8px; margin-top: 8px;">\n      <button ion-button tappable small style="background-color: #10b981; font-weight: bold; margin: 0; flex: 1; border-radius: 6px;" (click)="viewMode = \'doctor_schedule\'">\n        అపాయింట్‌మెంట్లు ({{ appointments.length }})\n      </button>\n      <button ion-button tappable small outline style="border-color: white; color: white; font-weight: bold; margin: 0; flex: 1; border-radius: 6px;" (click)="viewMode = \'doctor_profile\'">\n        ప్రొఫైల్ ఎడిట్\n      </button>\n    </div>\n  </div>\n\n  <!-- ==============================================\n       TAB 1: BROWSE DOCTORS & COUNSELLORS\n       ============================================== -->\n  <div *ngIf="viewMode === \'browse\'">\n    <div style="background: #e0f2fe; padding: 10px 14px; margin: 10px; border-radius: 10px; color: #0369a1; font-size: 12px;">\n      <b>✝️ Christian Marriage & Family Care:</b> వివాహ బంధాలు, కుటుంబ సమస్యలు, పిల్లల పెంపకం మరియు మానసిక ఆరోగ్యానికి క్రైస్తవ వైద్యులు & కౌన్సిలర్ల నుండి ఉచిత / నామమాత్రపు కన్సల్టేషన్.\n    </div>\n\n    <div *ngFor="let doc of doctors" class="doc-card" style="background: white; margin: 10px; padding: 14px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); border-left: 4px solid #00548F;">\n      <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 10px;">\n        <div style="width: 50px; height: 50px; border-radius: 50%; background: #e0f2fe; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #00548F;">\n          <ion-icon name="medkit"></ion-icon>\n        </div>\n        <div>\n          <h3 style="margin: 0; font-size: 15px; font-weight: bold; color: #1e293b;">{{doc.doctor_name || doc.name}}</h3>\n          <p style="margin: 2px 0 0 0; font-size: 12px; color: #0284c7; font-weight: 600;">{{doc.specialization || doc.specialty || \'Family Counsellor\'}} &bull; {{doc.qualification || \'Certified\'}}</p>\n        </div>\n      </div>\n\n      <div style="font-size: 12px; color: #475569; line-height: 1.6;">\n        <div><b>📅 రోజులు:</b> {{doc.available_days || \'Mon to Sat\'}}</div>\n        <div><b>⏰ సమయం:</b> {{doc.available_time_slots || (doc.available_time_start + \' - \' + doc.available_time_end) || \'10:00 AM - 05:00 PM\'}}</div>\n        <div><b>📍 స్థలం:</b> {{doc.location || doc.hospital_church || \'Online Consultation\'}}</div>\n        <div><b>💳 ఫీజు:</b> {{doc.consultation_fee ? doc.consultation_fee : \'ఉచిత సేవ (Free Consultation)\'}}</div>\n      </div>\n\n      <p *ngIf="doc.bio" style="font-size: 11.5px; color: #64748b; margin: 8px 0; background: #f8fafc; padding: 6px 10px; border-radius: 6px;">\n        {{doc.bio}}\n      </p>\n\n      <div style="margin-top: 10px;">\n        <button ion-button tappable block color="primary" style="border-radius: 8px; font-weight: bold; margin: 0;" (click)="openBookingForm(doc)">\n          <ion-icon name="calendar" style="margin-right: 6px;"></ion-icon> అపాయింట్‌మెంట్ బుక్ చేసుకోండి\n        </button>\n      </div>\n    </div>\n\n    <div *ngIf="doctors.length === 0" style="text-align: center; padding: 40px 20px; color: #6b7280;">\n      <ion-icon name="people" style="font-size: 48px; color: #cbd5e1;"></ion-icon>\n      <p>కౌన్సిలర్ల వివరాలు లోడ్ అవుతున్నాయి...</p>\n    </div>\n  </div>\n\n  <!-- ==============================================\n       BOOKING FORM SUB-PAGE (WITH VOICE CONSULTATION)\n       ============================================== -->\n  <div *ngIf="viewMode === \'book_now\' && selectedDoctor" style="padding: 10px;">\n    <div style="background: #eef6ff; padding: 12px; border-radius: 10px; margin-bottom: 12px; border-left: 4px solid #00548F;">\n      <h4 style="margin: 0; font-size: 15px; font-weight: bold; color: #00548F;">\n        డాక్టర్: {{selectedDoctor.doctor_name || selectedDoctor.name}}\n      </h4>\n      <p style="margin: 2px 0 0 0; font-size: 12px; color: #4b5563;">\n        {{selectedDoctor.specialization || selectedDoctor.specialty}}\n      </p>\n    </div>\n\n    <div style="background: white; border-radius: 12px; padding: 14px; box-shadow: 0 2px 10px rgba(0,0,0,0.06); margin-bottom: 14px;">\n      <h5 style="margin: 0 0 10px 0; font-size: 13.5px; font-weight: bold; color: #1e293b;">\n        అపాయింట్‌మెంట్ వివరాలు\n      </h5>\n\n      <ion-list no-lines>\n        <ion-item style="padding-left: 0;">\n          <ion-label stacked>పేరు (Full Name) *</ion-label>\n          <ion-input type="text" [(ngModel)]="bookingData.patient_name" placeholder="మీ పేరు"></ion-input>\n        </ion-item>\n\n        <ion-item style="padding-left: 0;">\n          <ion-label stacked>ఫోన్ నంబర్ (Phone) *</ion-label>\n          <ion-input type="tel" [(ngModel)]="bookingData.patient_phone" placeholder="10-అంకెల ఫోన్"></ion-input>\n        </ion-item>\n\n        <ion-item style="padding-left: 0;">\n          <ion-label stacked>అపాయింట్‌మెంట్ తేదీ (Date) *</ion-label>\n          <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" [(ngModel)]="bookingData.appointment_date"></ion-datetime>\n        </ion-item>\n\n        <ion-item style="padding-left: 0;">\n          <ion-label stacked>సమయం (Time Slot) *</ion-label>\n          <ion-select [(ngModel)]="bookingData.appointment_time">\n            <ion-option *ngFor="let slot of timeSlots" [value]="slot">{{slot}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item style="padding-left: 0;">\n          <ion-label stacked>సమస్య సంక్షిప్తంగా (Reason)</ion-label>\n          <ion-input type="text" [(ngModel)]="bookingData.reason" placeholder="ఉదా: వివాహ / కుటుంబ సలహా"></ion-input>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <!-- VOICE CONSULTATION CARD -->\n    <div style="background: linear-gradient(135deg, #fef2f2, #fff7ed); border: 2px dashed #f87171; border-radius: 12px; padding: 14px; margin-bottom: 14px;">\n      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">\n        <span style="font-size: 14px; font-weight: bold; color: #b91c1c;">\n          🎙️ వాయిస్ కన్సల్టేషన్ (Voice Problem Recording)\n        </span>\n        <span style="background: #fee2e2; color: #991b1b; font-size: 10px; font-weight: bold; padding: 2px 6px; border-radius: 6px;">\n          తెలుగు / English / हिंदी\n        </span>\n      </div>\n      <p style="font-size: 11.5px; color: #7f1d1d; margin: 0 0 10px 0;">\n        మీ సమస్యను నేరుగా మాట్లాడి రికార్డ్ చేయండి. డాక్టర్ గారికి మీ వాయిస్ మరియు అనువదించబడిన టెక్స్ట్ చేరుతుంది.\n      </p>\n\n      <!-- Language Selector -->\n      <div style="display: flex; gap: 6px; margin-bottom: 12px;">\n        <button ion-button tappable small [outline]="selectedLang !== \'te-IN\'" color="danger" style="flex: 1; border-radius: 6px; font-size: 11px; margin: 0;" (click)="setLanguage(\'te-IN\')">\n          తెలుగు\n        </button>\n        <button ion-button tappable small [outline]="selectedLang !== \'en-IN\'" color="danger" style="flex: 1; border-radius: 6px; font-size: 11px; margin: 0;" (click)="setLanguage(\'en-IN\')">\n          English\n        </button>\n        <button ion-button tappable small [outline]="selectedLang !== \'hi-IN\'" color="danger" style="flex: 1; border-radius: 6px; font-size: 11px; margin: 0;" (click)="setLanguage(\'hi-IN\')">\n          हिंदी\n        </button>\n      </div>\n\n      <!-- Record Buttons & Timer -->\n      <div style="text-align: center; margin-bottom: 10px;">\n        <button *ngIf="!isRecording" ion-button color="danger" style="border-radius: 24px; font-weight: bold; padding: 0 20px;" (click)="startUserVoiceRecording()">\n          <ion-icon name="mic" style="margin-right: 6px;"></ion-icon> మాట్లాడండి (Start Recording)\n        </button>\n        <button *ngIf="isRecording" ion-button color="dark" style="border-radius: 24px; font-weight: bold; padding: 0 20px; background-color: #dc2626;" (click)="stopUserVoiceRecording()">\n          <ion-icon name="square" style="margin-right: 6px;"></ion-icon> ఆపండి (Stop: {{ recordingTimer }}s)\n        </button>\n      </div>\n\n      <!-- Audio Playback -->\n      <div *ngIf="recordedAudioUrl" style="margin-top: 10px; text-align: center;">\n        <audio [src]="recordedAudioUrl" controls style="width: 100%; height: 38px; margin-bottom: 6px;"></audio>\n        <button ion-button tappable clear small color="danger" (click)="clearUserVoiceRecording()" style="margin: 0; font-size: 11px;">\n          <ion-icon name="trash" style="margin-right: 4px;"></ion-icon> మళ్లీ రికార్డ్ చేయండి\n        </button>\n      </div>\n\n      <!-- Transcribed Text Preview -->\n      <div *ngIf="transcribedText || bookingData.notes" style="background: white; border-radius: 8px; padding: 10px; margin-top: 10px; border: 1px solid #fed7aa;">\n        <div style="font-size: 11px; font-weight: bold; color: #c2410c; margin-bottom: 4px;">\n          📝 వాయిస్ అనువాదం (Transcribed Text - {{ getLangName(selectedLang) }}):\n        </div>\n        <p style="margin: 0; font-size: 12px; color: #1e293b;">\n          {{ transcribedText || bookingData.notes }}\n        </p>\n      </div>\n    </div>\n\n    <!-- Actions -->\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button tappable block outline color="dark" (click)="cancelBooking()">\n          రద్దు (Cancel)\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button tappable block color="primary" (click)="submitAppointment()">\n          బుక్ చేయండి\n        </button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <!-- ==============================================\n       TAB 2: MY BOOKINGS (PATIENT VIEW)\n       ============================================== -->\n  <div *ngIf="viewMode === \'my_bookings\' && isLoggedIn">\n    <div style="padding: 10px 14px 4px 14px;">\n      <h4 style="font-size: 15px; font-weight: bold; color: #1e293b; margin: 0;">\n        నా అపాయింట్‌మెంట్లు (My Appointments)\n      </h4>\n    </div>\n\n    <div *ngFor="let appt of appointments" style="background: white; margin: 10px; padding: 14px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); border-left: 4px solid #10b981;">\n      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">\n        <span style="font-weight: bold; font-size: 14px; color: #00548F;">\n          👨‍⚕️ {{appt.doctor_name || \'Dr. Christian Counsellor\'}}\n        </span>\n        <span style="font-size: 11px; font-weight: bold; padding: 2px 8px; border-radius: 12px; background: #dcfce7; color: #15803d;">\n          {{appt.status || \'Confirmed\'}}\n        </span>\n      </div>\n\n      <div style="font-size: 12px; color: #475569; line-height: 1.6;">\n        <div><b>📅 తేదీ:</b> {{appt.appointment_date}} &bull; <b>సమయం:</b> {{appt.appointment_time}}</div>\n        <div *ngIf="appt.counselling_type || appt.reason"><b>విషయం:</b> {{appt.counselling_type || appt.reason}}</div>\n      </div>\n\n      <!-- Patient voice audio preview if present -->\n      <div *ngIf="appt.user_voice_audio || appt.user_voice_text" style="background: #f8fafc; border-radius: 8px; padding: 8px; margin-top: 8px; border: 1px solid #e2e8f0;">\n        <div style="font-size: 11px; font-weight: bold; color: #64748b;">\n          🎙️ మీ వాయిస్ సమస్య:\n        </div>\n        <audio *ngIf="appt.user_voice_audio" [src]="appt.user_voice_audio" controls style="width: 100%; height: 32px; margin-top: 4px;"></audio>\n        <p *ngIf="appt.user_voice_text" style="margin: 4px 0 0 0; font-size: 11.5px; color: #334155;">\n          "{{appt.user_voice_text}}"\n        </p>\n      </div>\n\n      <!-- DOCTOR VOICE ADVICE REPLY -->\n      <div *ngIf="appt.doctor_voice_audio || appt.doctor_voice_text || appt.doctor_notes" style="background: linear-gradient(135deg, #ecfdf5, #f0fdf4); border: 1px solid #86efac; border-radius: 10px; padding: 10px; margin-top: 10px;">\n        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">\n          <span style="font-size: 12.5px; font-weight: bold; color: #166534;">\n            🩺 డాక్టర్ వాయిస్ సలహా (Doctor Voice Advice):\n          </span>\n          <span *ngIf="appt.doctor_language" style="font-size: 10px; background: #bbf7d0; color: #14532d; padding: 1px 6px; border-radius: 6px; font-weight: bold;">\n            {{ getLangName(appt.doctor_language) }}\n          </span>\n        </div>\n        <audio *ngIf="appt.doctor_voice_audio" [src]="appt.doctor_voice_audio" controls style="width: 100%; height: 36px; margin-bottom: 6px;"></audio>\n        <p *ngIf="appt.doctor_voice_text || appt.doctor_notes" style="margin: 0; font-size: 12px; color: #166534; font-weight: 500;">\n          {{ appt.doctor_voice_text || appt.doctor_notes }}\n        </p>\n      </div>\n    </div>\n\n    <div *ngIf="appointments.length === 0" style="text-align: center; padding: 40px 20px; color: #6b7280;">\n      <ion-icon name="calendar" style="font-size: 48px; color: #cbd5e1;"></ion-icon>\n      <p>మీకు ఇంకా ఏ విధమైన అపాయింట్‌మెంట్లు బుక్ కాలేదు.</p>\n      <button ion-button tappable outline small color="primary" (click)="viewMode = \'browse\'">\n        కౌన్సిలర్లను చూడండి\n      </button>\n    </div>\n  </div>\n\n  <!-- ==============================================\n       TAB 3: DOCTOR / ADMIN PROFILE SETUP\n       ============================================== -->\n  <div *ngIf="viewMode === \'doctor_profile\' && isLoggedIn && (isDoctor || isAdmin)" style="padding: 10px;">\n    <div style="background: white; border-radius: 12px; padding: 14px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">\n      <h4 style="margin: 0 0 10px 0; font-size: 15px; font-weight: bold; color: #00548F;">\n        🩺 డాక్టర్ ప్రొఫైల్ వివరాలు (Doctor Profile)\n      </h4>\n\n      <ion-list no-lines>\n        <ion-item style="padding-left: 0;">\n          <ion-label stacked>డాక్టర్ పేరు *</ion-label>\n          <ion-input type="text" [(ngModel)]="doctorProfile.doctor_name" placeholder="Dr. Name"></ion-input>\n        </ion-item>\n\n        <ion-item style="padding-left: 0;">\n          <ion-label stacked>విద్యార్హత (Qualification) *</ion-label>\n          <ion-input type="text" [(ngModel)]="doctorProfile.qualification" placeholder="MBBS, MD / Counsellor"></ion-input>\n        </ion-item>\n\n        <ion-item style="padding-left: 0;">\n          <ion-label stacked>స్పెషలైజేషన్ (Specialty) *</ion-label>\n          <ion-input type="text" [(ngModel)]="doctorProfile.specialty" placeholder="Family Counselling / Psychologist"></ion-input>\n        </ion-item>\n\n        <ion-item style="padding-left: 0;">\n          <ion-label stacked>మొబైల్ ఫోన్ నంబర్ *</ion-label>\n          <ion-input type="tel" [(ngModel)]="doctorProfile.phone"></ion-input>\n        </ion-item>\n\n        <ion-item style="padding-left: 0;">\n          <ion-label stacked>అందుబాటులో ఉండే రోజులు</ion-label>\n          <ion-input type="text" [(ngModel)]="doctorProfile.available_days" placeholder="Mon, Wed, Fri"></ion-input>\n        </ion-item>\n\n        <ion-item style="padding-left: 0;">\n          <ion-label stacked>సమయాలు</ion-label>\n          <ion-input type="text" [(ngModel)]="doctorProfile.available_time_slots" placeholder="10:00 AM - 05:00 PM"></ion-input>\n        </ion-item>\n\n        <ion-item style="padding-left: 0;">\n          <ion-label stacked>కన్సల్టేషన్ ఫీజు (ఉచితమైతే 0)</ion-label>\n          <ion-input type="text" [(ngModel)]="doctorProfile.consultation_fee" placeholder="Free / 200"></ion-input>\n        </ion-item>\n\n        <ion-item style="padding-left: 0;">\n          <ion-label stacked>డాక్టర్ పరిచయం (Bio)</ion-label>\n          <ion-textarea rows="3" [(ngModel)]="doctorProfile.bio" placeholder="పరిచయం, సేవా వివరాలు..."></ion-textarea>\n        </ion-item>\n      </ion-list>\n\n      <button ion-button tappable block color="primary" (click)="saveDoctorProfile()" style="border-radius: 8px; font-weight: bold; margin-top: 14px;">\n        ప్రొఫైల్ సేవ్ చేయండి\n      </button>\n    </div>\n  </div>\n\n  <!-- ==============================================\n       TAB 4: DOCTOR APPOINTMENTS SCHEDULE & VOICE REPLY\n       ============================================== -->\n  <div *ngIf="viewMode === \'doctor_schedule\' && isLoggedIn && (isDoctor || isAdmin)">\n    <div style="padding: 10px 14px 4px 14px;">\n      <h4 style="font-size: 15px; font-weight: bold; color: #1e293b; margin: 0;">\n        డాక్టర్ షెడ్యూల్ & పేషెంట్స్ (Schedule & Voice Consultations)\n      </h4>\n    </div>\n\n    <!-- DOCTOR VOICE REPLY MODAL / PANEL -->\n    <div *ngIf="isDoctorVoiceReplyOpen && activeApptForReply" style="background: linear-gradient(135deg, #eff6ff, #f0fdf4); border: 2px solid #3b82f6; border-radius: 12px; margin: 10px; padding: 14px; box-shadow: 0 4px 16px rgba(59,130,246,0.2);">\n      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">\n        <span style="font-size: 14px; font-weight: bold; color: #1d4ed8;">\n          🎙️ వాయిస్ సలహా రికార్డింగ్ (Advice to {{ activeApptForReply.patient_name || activeApptForReply.family_name }})\n        </span>\n        <button ion-button tappable icon-only clear small (click)="closeDoctorVoiceReply()" style="color: #64748b;">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </div>\n\n      <!-- Language selector for doctor -->\n      <div style="display: flex; gap: 6px; margin-bottom: 12px;">\n        <button ion-button tappable small [outline]="selectedDoctorLang !== \'te-IN\'" color="primary" style="flex: 1; border-radius: 6px; font-size: 11px; margin: 0;" (click)="setDoctorLanguage(\'te-IN\')">\n          తెలుగు\n        </button>\n        <button ion-button tappable small [outline]="selectedDoctorLang !== \'en-IN\'" color="primary" style="flex: 1; border-radius: 6px; font-size: 11px; margin: 0;" (click)="setDoctorLanguage(\'en-IN\')">\n          English\n        </button>\n        <button ion-button tappable small [outline]="selectedDoctorLang !== \'hi-IN\'" color="primary" style="flex: 1; border-radius: 6px; font-size: 11px; margin: 0;" (click)="setDoctorLanguage(\'hi-IN\')">\n          हिंदी\n        </button>\n      </div>\n\n      <!-- Doctor recording button -->\n      <div style="text-align: center; margin-bottom: 10px;">\n        <button *ngIf="!isDoctorRecording" ion-button color="primary" style="border-radius: 24px; font-weight: bold; padding: 0 20px;" (click)="startDoctorVoiceRecording()">\n          <ion-icon name="mic" style="margin-right: 6px;"></ion-icon> వాయిస్ సలహా చెప్పండి\n        </button>\n        <button *ngIf="isDoctorRecording" ion-button color="danger" style="border-radius: 24px; font-weight: bold; padding: 0 20px;" (click)="stopDoctorVoiceRecording()">\n          <ion-icon name="square" style="margin-right: 6px;"></ion-icon> ఆపండి ({{ doctorRecordingTimer }}s)\n        </button>\n      </div>\n\n      <!-- Doctor audio preview -->\n      <div *ngIf="doctorRecordedAudioUrl" style="margin-top: 8px; text-align: center;">\n        <audio [src]="doctorRecordedAudioUrl" controls style="width: 100%; height: 36px; margin-bottom: 6px;"></audio>\n        <button ion-button tappable clear small color="danger" (click)="clearDoctorVoiceRecording()" style="margin: 0; font-size: 11px;">\n          <ion-icon name="trash" style="margin-right: 4px;"></ion-icon> మళ్లీ రికార్డ్ చేయండి\n        </button>\n      </div>\n\n      <!-- Doctor transcribed text -->\n      <div *ngIf="doctorTranscribedText" style="background: white; border-radius: 8px; padding: 8px; margin: 8px 0; border: 1px solid #bfdbfe;">\n        <div style="font-size: 11px; font-weight: bold; color: #1e40af;">\n          📝 వాయిస్ అనువాదం ({{ getLangName(selectedDoctorLang) }}):\n        </div>\n        <p style="margin: 4px 0 0 0; font-size: 12px; color: #1e293b;">\n          {{ doctorTranscribedText }}\n        </p>\n      </div>\n\n      <!-- Submit button -->\n      <div style="margin-top: 10px;">\n        <button ion-button tappable block color="secondary" style="border-radius: 8px; font-weight: bold; margin: 0;" (click)="sendDoctorVoiceReply()">\n          <ion-icon name="send" style="margin-right: 6px;"></ion-icon> పేషెంట్‌కి వాయిస్ సలహా పంపండి\n        </button>\n      </div>\n    </div>\n\n    <!-- Appointment list for doctor -->\n    <div *ngFor="let appt of appointments" style="background: white; margin: 10px; padding: 14px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); border-left: 4px solid #0284c7;">\n      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">\n        <span style="font-weight: bold; font-size: 14px; color: #00548F;">\n          👤 {{appt.patient_name || appt.family_name}}\n        </span>\n        <span style="font-size: 11px; font-weight: bold; padding: 2px 8px; border-radius: 12px; background: #e0f2fe; color: #0369a1;">\n          {{appt.status || \'Confirmed\'}}\n        </span>\n      </div>\n\n      <div style="font-size: 12px; color: #475569; line-height: 1.6;">\n        <div><b>📞 ఫోన్:</b> {{appt.phone_number || appt.patient_phone}}</div>\n        <div><b>📅 తేదీ:</b> {{appt.appointment_date}} &bull; <b>సమయం:</b> {{appt.appointment_time}}</div>\n        <div *ngIf="appt.counselling_type || appt.reason"><b>సమస్య:</b> {{appt.counselling_type || appt.reason}}</div>\n      </div>\n\n      <!-- Patient Voice Message & Speech-to-Text playback -->\n      <div *ngIf="appt.user_voice_audio || appt.user_voice_text" style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 8px; margin-top: 8px;">\n        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">\n          <span style="font-size: 11px; font-weight: bold; color: #991b1b;">\n            🎙️ పేషెంట్ వాయిస్ మెసేజ్:\n          </span>\n          <span *ngIf="appt.user_language" style="font-size: 9.5px; background: #fee2e2; color: #7f1d1d; padding: 1px 5px; border-radius: 4px; font-weight: bold;">\n            {{ getLangName(appt.user_language) }}\n          </span>\n        </div>\n        <audio *ngIf="appt.user_voice_audio" [src]="appt.user_voice_audio" controls style="width: 100%; height: 32px; margin-bottom: 4px;"></audio>\n        <p *ngIf="appt.user_voice_text" style="margin: 0; font-size: 11.5px; color: #7f1d1d;">\n          "{{ appt.user_voice_text }}"\n        </p>\n      </div>\n\n      <!-- Doctor Previous Reply preview if exists -->\n      <div *ngIf="appt.doctor_voice_audio || appt.doctor_voice_text" style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 8px; margin-top: 8px;">\n        <div style="font-size: 11px; font-weight: bold; color: #166534; margin-bottom: 4px;">\n          🩺 మీరు పంపిన వాయిస్ సలహా:\n        </div>\n        <audio *ngIf="appt.doctor_voice_audio" [src]="appt.doctor_voice_audio" controls style="width: 100%; height: 32px; margin-bottom: 4px;"></audio>\n        <p *ngIf="appt.doctor_voice_text" style="margin: 0; font-size: 11.5px; color: #15803d;">\n          {{ appt.doctor_voice_text }}\n        </p>\n      </div>\n\n      <!-- Action buttons -->\n      <div style="display: flex; gap: 8px; margin-top: 10px;">\n        <button ion-button tappable small color="primary" style="flex: 1; border-radius: 6px; font-weight: bold; margin: 0;" (click)="openDoctorVoiceReply(appt)">\n          <ion-icon name="mic" style="margin-right: 4px;"></ion-icon> వాయిస్ సలహా ఇవ్వండి\n        </button>\n        <button ion-button tappable small outline color="secondary" style="border-radius: 6px; font-weight: bold; margin: 0;" (click)="updateStatus(appt, \'Completed\')">\n          పూర్తయింది\n        </button>\n      </div>\n    </div>\n\n    <div *ngIf="appointments.length === 0" style="text-align: center; padding: 40px 20px; color: #6b7280;">\n      <ion-icon name="clipboard" style="font-size: 48px; color: #cbd5e1;"></ion-icon>\n      <p>షెడ్యూల్ చేసిన అపాయింట్‌మెంట్లు లేవు.</p>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\family-councelling\family-councelling.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], FamilyCouncellingPage);
    return FamilyCouncellingPage;
}());

//# sourceMappingURL=family-councelling.js.map

/***/ })

});
//# sourceMappingURL=32.js.map