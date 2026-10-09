import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-family-councelling',
  templateUrl: 'family-councelling.html',
})
export class FamilyCouncellingPage {
  viewMode: string = 'browse'; // 'browse' | 'my_bookings' | 'doctor_profile' | 'doctor_schedule' | 'book_now'
  usr_id: any;
  user_name: any;
  user_phone: any;
  user_email: any;
  role: any = 'user';
  isAdmin: boolean = false;
  isDoctor: boolean = false;
  isLoggedIn: boolean = false;

  doctors: any[] = [];
  appointments: any[] = [];
  selectedDoctor: any = null;
  loading: boolean = false;

  // Booking Form model (with Voice Consultation)
  bookingData: any = {
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
  selectedLang: string = 'te-IN'; // 'te-IN' (Telugu) | 'en-IN' (English) | 'hi-IN' (Hindi)
  isRecording: boolean = false;
  recordingTimer: number = 0;
  recordingInterval: any = null;
  mediaRecorder: any = null;
  audioChunks: any[] = [];
  recordedAudioUrl: string = '';
  recordedAudioBase64: string = '';
  speechRecognition: any = null;
  transcribedText: string = '';
  isSpeechSupported: boolean = false;

  // Voice recording & Speech-to-Text state for Doctor Reply
  isDoctorVoiceReplyOpen: boolean = false;
  activeApptForReply: any = null;
  selectedDoctorLang: string = 'te-IN';
  isDoctorRecording: boolean = false;
  doctorRecordingTimer: number = 0;
  doctorRecordingInterval: any = null;
  doctorMediaRecorder: any = null;
  doctorAudioChunks: any[] = [];
  doctorRecordedAudioUrl: string = '';
  doctorRecordedAudioBase64: string = '';
  doctorTranscribedText: string = '';
  doctorSpeechRecognition: any = null;

  // Doctor Profile Form model
  doctorProfile: any = {
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

  timeSlots: string[] = [
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public service: ServiceProvider
  ) {}

  ionViewWillEnter() {
    this.usr_id = localStorage.getItem('usr_id');
    this.user_name = localStorage.getItem('name') || '';
    this.user_phone = localStorage.getItem('phone') || '';
    this.user_email = localStorage.getItem('email') || '';
    this.role = localStorage.getItem('role') || 'user';
    const aortId = localStorage.getItem('aort_id');

    // Smooth guest support: do not kick out prospective users or doctors!
    if (this.usr_id && this.usr_id !== ' ' && this.usr_id !== '' && this.usr_id !== 'null') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
      this.usr_id = 'guest_' + Math.floor(100000 + Math.random() * 900000);
    }

    const categoryId = localStorage.getItem('category_id');
    const isDoctorStorage = localStorage.getItem('is_doctor');
    const category = (localStorage.getItem('category') || '').toLowerCase();

    if (this.role === 'admin' || aortId === '1' || aortId === '2') {
      this.isAdmin = true;
    }

    if (categoryId === '8' || isDoctorStorage === '1' || category.includes('doctor') || category.includes('councellor') || this.role === 'doctor') {
      this.isDoctor = true;
      if (this.viewMode === 'browse') {
        this.viewMode = 'doctor_schedule';
      }
    }

    // Safety guard: Non-doctors are never allowed into doctor tabs
    if (!this.isDoctor && !this.isAdmin && (this.viewMode === 'doctor_profile' || this.viewMode === 'doctor_schedule')) {
      this.viewMode = 'browse';
    }

    this.bookingData.patient_name = this.user_name;
    this.bookingData.patient_phone = this.user_phone;
    this.bookingData.patient_email = this.user_email;
    this.doctorProfile.usr_id = this.usr_id;
    this.doctorProfile.phone = this.user_phone;
    this.doctorProfile.email = this.user_email;
    if (this.user_name && !this.doctorProfile.doctor_name) {
      this.doctorProfile.doctor_name = this.user_name.startsWith('Dr') ? this.user_name : 'Dr. ' + this.user_name;
    }

    // Default booking date to tomorrow
    const tmrw = new Date();
    tmrw.setDate(tmrw.getDate() + 1);
    this.bookingData.appointment_date = tmrw.toISOString().split('T')[0];

    this.loadDoctors();
    this.loadAppointments();
    this.checkSpeechSupport();
  }

  gotohome() {
    this.navCtrl.setRoot('HomePage');
  }

  goToLogin() {
    this.navCtrl.push('LoginPage');
  }

  showToast(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  checkSpeechSupport() {
    const SpeechRec = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    this.isSpeechSupported = !!SpeechRec;
  }

  loadDoctors() {
    this.service.getcouncellingdoctors().subscribe(
      (res: any) => {
        if (res && res.status === 200) {
          this.doctors = res.data || [];
          const myDoc = this.doctors.find(d => String(d.usr_id) === String(this.usr_id) || (this.user_phone && String(d.phone_number || d.phone) === String(this.user_phone)));
          if (myDoc) {
            this.isDoctor = true;
            this.doctorProfile = Object.assign({}, myDoc);
          }
        }
      },
      err => {
        console.error('Error loading doctors:', err);
      }
    );
  }

  loadAppointments() {
    const payload = {
      usr_id: this.usr_id,
      phone_number: this.user_phone,
      role: (this.isAdmin || this.isDoctor) ? 'doctor' : 'user'
    };

    this.service.getcouncellingappointments(payload).subscribe(
      (res: any) => {
        if (res && res.status === 200) {
          this.appointments = res.data || [];
        }
      },
      err => {
        console.error('Error loading appointments:', err);
      }
    );
  }

  openBookingForm(doc: any) {
    this.selectedDoctor = doc;
    this.bookingData.doc_id = doc.id;
    this.clearUserVoiceRecording();
    this.viewMode = 'book_now';
  }

  cancelBooking() {
    this.selectedDoctor = null;
    this.clearUserVoiceRecording();
    this.viewMode = 'browse';
  }

  // <------------------ Patient Voice Recording & STT ------------------>
  setLanguage(lang: string) {
    this.selectedLang = lang;
    this.bookingData.user_language = lang;
  }

  startUserVoiceRecording() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      this.showToast('మైక్రోఫోన్ సపోర్ట్ లేదు (Microphone not supported on this device).');
      return;
    }

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream: any) => {
      this.audioChunks = [];
      const MediaRec = (window as any).MediaRecorder;
      if (!MediaRec) {
        this.showToast('MediaRecorder సపోర్ట్ లేదు.');
        return;
      }
      this.mediaRecorder = new MediaRec(stream);
      this.mediaRecorder.ondataavailable = (e: any) => {
        if (e.data && e.data.size > 0) {
          this.audioChunks.push(e.data);
        }
      };
      this.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        this.recordedAudioUrl = URL.createObjectURL(audioBlob);
        const reader = new FileReader();
        reader.onloadend = () => {
          this.recordedAudioBase64 = reader.result as string;
          this.bookingData.user_voice_audio = this.recordedAudioBase64;
        };
        reader.readAsDataURL(audioBlob);
      };

      this.mediaRecorder.start();
      this.isRecording = true;
      this.recordingTimer = 0;
      this.recordingInterval = setInterval(() => {
        this.recordingTimer++;
      }, 1000);

      // Start Speech-to-Text concurrently
      const SpeechRec = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      if (SpeechRec) {
        this.speechRecognition = new SpeechRec();
        this.speechRecognition.lang = this.selectedLang;
        this.speechRecognition.continuous = true;
        this.speechRecognition.interimResults = true;
        this.speechRecognition.onresult = (event: any) => {
          let text = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            text += event.results[i][0].transcript;
          }
          if (text) {
            this.transcribedText = text;
            this.bookingData.user_voice_text = text;
            if (!this.bookingData.notes) {
              this.bookingData.notes = text;
            }
          }
        };
        this.speechRecognition.onerror = (e: any) => {
          console.warn('Speech recognition warning:', e);
        };
        try {
          this.speechRecognition.start();
        } catch (_) {}
      }
    }).catch(err => {
      console.error('Mic access error:', err);
      this.showToast('దయచేసి మైక్రోఫోన్ అనుమతి ఇవ్వండి (Microphone permission required).');
    });
  }

  stopUserVoiceRecording() {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.stop();
      if (this.mediaRecorder.stream) {
        this.mediaRecorder.stream.getTracks().forEach((track: any) => track.stop());
      }
    }
    if (this.speechRecognition) {
      try { this.speechRecognition.stop(); } catch (_) {}
    }
    if (this.recordingInterval) {
      clearInterval(this.recordingInterval);
    }
    this.isRecording = false;
    this.showToast('వాయిస్ రికార్డింగ్ పూర్తయింది! (Voice message recorded)');
  }

  clearUserVoiceRecording() {
    if (this.isRecording) {
      this.stopUserVoiceRecording();
    }
    this.recordedAudioUrl = '';
    this.recordedAudioBase64 = '';
    this.transcribedText = '';
    this.recordingTimer = 0;
    this.bookingData.user_voice_audio = '';
    this.bookingData.user_voice_text = '';
  }

  submitAppointment() {
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

    const loader = this.loadingCtrl.create({ content: 'అపాయింట్‌మెంట్ నమోదు అవుతోంది...' });
    loader.present();

    const payload = {
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

    this.service.bookcouncellingappointment(payload).subscribe(
      (res: any) => {
        loader.dismiss();
        if (res && (res.status === 200 || res.status === '200')) {
          const alert = this.alertCtrl.create({
            title: 'విజయవంతం! (Success)',
            subTitle: 'మీ అపాయింట్‌మెంట్ మరియు వాయిస్ కన్సల్టేషన్ విజయవంతంగా బుక్ అయ్యాయి! డాక్టర్ గారు త్వరలో మీతో మాట్లాడతారు.',
            buttons: ['Ok']
          });
          alert.present();
          this.loadAppointments();
          this.clearUserVoiceRecording();
          this.viewMode = 'my_bookings';
        } else {
          this.showToast(res.message || 'అపాయింట్‌మెంట్ విఫలమైంది.');
        }
      },
      err => {
        loader.dismiss();
        this.showToast('నెట్‌వర్క్ సమస్య. దయచేసి మళ్లీ ప్రయత్నించండి.');
      }
    );
  }

  // <------------------ Doctor Voice Advice Reply ------------------>
  openDoctorVoiceReply(appt: any) {
    this.activeApptForReply = appt;
    this.clearDoctorVoiceRecording();
    this.isDoctorVoiceReplyOpen = true;
  }

  closeDoctorVoiceReply() {
    this.clearDoctorVoiceRecording();
    this.isDoctorVoiceReplyOpen = false;
    this.activeApptForReply = null;
  }

  setDoctorLanguage(lang: string) {
    this.selectedDoctorLang = lang;
  }

  startDoctorVoiceRecording() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      this.showToast('మైక్రోఫోన్ సపోర్ట్ లేదు.');
      return;
    }

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream: any) => {
      this.doctorAudioChunks = [];
      const MediaRec = (window as any).MediaRecorder;
      if (!MediaRec) {
        this.showToast('MediaRecorder సపోర్ట్ లేదు.');
        return;
      }
      this.doctorMediaRecorder = new MediaRec(stream);
      this.doctorMediaRecorder.ondataavailable = (e: any) => {
        if (e.data && e.data.size > 0) {
          this.doctorAudioChunks.push(e.data);
        }
      };
      this.doctorMediaRecorder.onstop = () => {
        const audioBlob = new Blob(this.doctorAudioChunks, { type: 'audio/webm' });
        this.doctorRecordedAudioUrl = URL.createObjectURL(audioBlob);
        const reader = new FileReader();
        reader.onloadend = () => {
          this.doctorRecordedAudioBase64 = reader.result as string;
        };
        reader.readAsDataURL(audioBlob);
      };

      this.doctorMediaRecorder.start();
      this.isDoctorRecording = true;
      this.doctorRecordingTimer = 0;
      this.doctorRecordingInterval = setInterval(() => {
        this.doctorRecordingTimer++;
      }, 1000);

      // Concurrent STT for Doctor
      const SpeechRec = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      if (SpeechRec) {
        this.doctorSpeechRecognition = new SpeechRec();
        this.doctorSpeechRecognition.lang = this.selectedDoctorLang;
        this.doctorSpeechRecognition.continuous = true;
        this.doctorSpeechRecognition.interimResults = true;
        this.doctorSpeechRecognition.onresult = (event: any) => {
          let text = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            text += event.results[i][0].transcript;
          }
          if (text) {
            this.doctorTranscribedText = text;
          }
        };
        try {
          this.doctorSpeechRecognition.start();
        } catch (_) {}
      }
    }).catch(err => {
      console.error('Doctor mic error:', err);
      this.showToast('దయచేసి మైక్రోఫోన్ అనుమతి ఇవ్వండి.');
    });
  }

  stopDoctorVoiceRecording() {
    if (this.doctorMediaRecorder && this.isDoctorRecording) {
      this.doctorMediaRecorder.stop();
      if (this.doctorMediaRecorder.stream) {
        this.doctorMediaRecorder.stream.getTracks().forEach((track: any) => track.stop());
      }
    }
    if (this.doctorSpeechRecognition) {
      try { this.doctorSpeechRecognition.stop(); } catch (_) {}
    }
    if (this.doctorRecordingInterval) {
      clearInterval(this.doctorRecordingInterval);
    }
    this.isDoctorRecording = false;
    this.showToast('డాక్టర్ వాయిస్ సలహా రికార్డ్ అయింది!');
  }

  clearDoctorVoiceRecording() {
    if (this.isDoctorRecording) {
      this.stopDoctorVoiceRecording();
    }
    this.doctorRecordedAudioUrl = '';
    this.doctorRecordedAudioBase64 = '';
    this.doctorTranscribedText = '';
    this.doctorRecordingTimer = 0;
  }

  sendDoctorVoiceReply() {
    if (!this.activeApptForReply) return;
    if (!this.doctorRecordedAudioBase64 && !this.doctorTranscribedText) {
      this.showToast('దయచేసి వాయిస్ సలహా లేదా టెక్స్ట్ నమోదు చేయండి.');
      return;
    }

    const loader = this.loadingCtrl.create({ content: 'వాయిస్ సలహా పంపబడుతోంది...' });
    loader.present();

    const payload = {
      appointment_id: this.activeApptForReply.id,
      id: this.activeApptForReply.id,
      doctor_voice_audio: this.doctorRecordedAudioBase64 || '',
      doctor_voice_text: this.doctorTranscribedText || '',
      doctor_language: this.selectedDoctorLang || 'te-IN',
      doctor_notes: this.doctorTranscribedText || 'Voice Consultation Advice Provided'
    };

    this.service.doctorvoicereply(payload).subscribe(
      (res: any) => {
        loader.dismiss();
        if (res && (res.status === 200 || res.status === '200')) {
          this.activeApptForReply.doctor_voice_audio = payload.doctor_voice_audio;
          this.activeApptForReply.doctor_voice_text = payload.doctor_voice_text;
          this.activeApptForReply.doctor_language = payload.doctor_language;
          this.activeApptForReply.status = 'Doctor Replied';
          this.showToast('పేషెంట్‌కి వాయిస్ సలహా విజయవంతంగా పంపబడింది!');
          this.closeDoctorVoiceReply();
          this.loadAppointments();
        } else {
          this.showToast(res?.message || 'సలహా పంపడంలో సమస్య ఏర్పడింది.');
        }
      },
      err => {
        loader.dismiss();
        this.showToast('నెట్‌వర్క్ సమస్య.');
      }
    );
  }

  saveDoctorProfile() {
    if (!this.doctorProfile.doctor_name || !this.doctorProfile.phone) {
      this.showToast('దయచేసి డాక్టర్ పేరు మరియు ఫోన్ నంబర్ నమోదు చేయండి');
      return;
    }

    const loader = this.loadingCtrl.create({ content: 'డాక్టర్ ప్రొఫైల్ భద్రపరచబడుతోంది...' });
    loader.present();

    this.service.savecouncellingdoctor(this.doctorProfile).subscribe(
      (res: any) => {
        loader.dismiss();
        if (res && res.status === 200) {
          this.isDoctor = true;
          this.showToast('డాక్టర్ ప్రొఫైల్ విజయవంతంగా భద్రపరచబడింది!');
          this.loadDoctors();
          this.viewMode = 'browse';
        } else {
          this.showToast(res.message || 'ప్రొఫైల్ సేవ్ విఫలమైంది');
        }
      },
      err => {
        loader.dismiss();
        this.showToast('నెట్‌వర్క్ సమస్య.');
      }
    );
  }

  editDoctorAsAdmin(doc: any) {
    this.doctorProfile = Object.assign({}, doc);
    this.viewMode = 'doctor_profile';
    this.showToast('డాక్టర్ వివరాలు ఎడిట్ చేయడానికి సిద్ధం');
  }

  updateStatus(appt: any, newStatus: string) {
    const confirm = this.alertCtrl.create({
      title: 'స్థితిని మార్చండి',
      message: 'ఈ అపాయింట్‌మెంట్ స్థితిని ' + newStatus + ' గా మార్చాలనుకుంటున్నారా?',
      buttons: [
        { text: 'రద్దు (Cancel)', role: 'cancel' },
        {
          text: 'సరే (Confirm)',
          handler: () => {
            this.service.updateappointmentstatus({ id: appt.id, status: newStatus }).subscribe(
              (res: any) => {
                if (res && res.status === 200) {
                  appt.status = newStatus;
                  this.showToast('అపాయింట్‌మెంట్ స్థితి మారింది');
                }
              }
            );
          }
        }
      ]
    });
    confirm.present();
  }

  gotoDoctorRegister() {
    this.navCtrl.push('DoctorregisterPage');
  }

  getLangName(code: string): string {
    if (!code) return 'తెలుగు';
    if (code.startsWith('te')) return 'తెలుగు';
    if (code.startsWith('hi')) return 'हिंदी';
    if (code.startsWith('en')) return 'English';
    return code;
  }
}
