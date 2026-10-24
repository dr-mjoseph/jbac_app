import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-doctorregister',
  templateUrl: 'doctorregister.html',
})
export class DoctorregisterPage {
  doctorForm: FormGroup;
  showSpinner: boolean = false;

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public service: ServiceProvider
  ) {
    this.doctorForm = this.fb.group({
      doctor_name: ['', [Validators.required, Validators.minLength(3)]],
      license_number: ['', [Validators.required]],
      specialization: ['Family Counsellor & Clinical Psychologist', [Validators.required]],
      qualification: ['', [Validators.required]],
      experience_years: ['', [Validators.required]],
      phone_number: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      consultation_fee: ['Free / Volunteer Service'],
      available_days: ['Monday to Saturday', [Validators.required]],
      available_time_start: ['10:00 AM', [Validators.required]],
      available_time_end: ['05:00 PM', [Validators.required]],
      location: ['Vijayawada & Online Consultation', [Validators.required]],
      state_id: ['', [Validators.required]],
      district_id: ['', [Validators.required]],
      constituency_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      panchayat_id: ['', [Validators.required]],
      address: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      category_id: [8],
      category: ['Doctor']
    });
  }

  districts: any = [];
  constituency: any = [];
  mandals: any = [];
  panchayati: any = [];

  onStateChange(event: any) {
    var stateId = event;
    this.doctorForm.patchValue({
      state_id: stateId,
      district_id: '',
      constituency_id: '',
      mandal_id: '',
      panchayat_id: ''
    });
    this.districts = [];
    this.constituency = [];
    this.mandals = [];
    this.panchayati = [];
    if (stateId) {
      this.service.getdistrict(stateId).subscribe((res: any) => {
        if (res && res.status == 200) {
          this.districts = res.data;
        }
      });
    }
  }

  getconstency(event: any) {
    var id = event;
    this.doctorForm.patchValue({
      constituency_id: '',
      mandal_id: '',
      panchayat_id: ''
    });
    this.constituency = [];
    this.mandals = [];
    this.panchayati = [];
    if (!id) return;
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency = (res && res.data) ? res.data.filter((data: any) => data.dstrct_id == id) : [];
    });
  }

  getmandals(event: any) {
    var id = event;
    this.doctorForm.patchValue({
      mandal_id: '',
      panchayat_id: ''
    });
    this.mandals = [];
    this.panchayati = [];
    if (!id) return;
    this.service.getmandals().subscribe((res: any) => {
      this.mandals = (res && res.data) ? res.data.filter((data: any) => data.const_id == id) : [];
    });
  }

  gepanchayati(event: any) {
    var id = event;
    this.doctorForm.patchValue({
      panchayat_id: ''
    });
    this.panchayati = [];
    if (!id) return;
    this.service.gepanchayatis().subscribe((res: any) => {
      this.panchayati = (res && res.data) ? res.data.filter((data: any) => data.mndl_id == id) : [];
    });
  }

  gotohome() {
    this.navCtrl.setRoot('HomePage');
  }

  goToLogin() {
    this.navCtrl.push('LoginPage');
  }

  submitDoctor() {
    if (this.doctorForm.invalid) {
      const alert = this.alertCtrl.create({
        title: 'వివరాలు అసంపూర్ణం',
        subTitle: 'దయచేసి పేరు, లైసెన్స్ నంబర్, మొబైల్ నంబర్ మరియు పాస్‌వర్డ్ మొదలైన తప్పనిసరి వివరాలను పూరించండి.',
        buttons: ['Ok']
      });
      alert.present();
      return;
    }

    this.showSpinner = true;
    const payload = Object.assign({}, this.doctorForm.value, {
      category_id: 8,
      category: 'Doctor'
    });

    this.service.registercouncellingdoctor(payload).subscribe(
      (res: any) => {
        this.showSpinner = false;
        if (res && res.status === 200) {
          const alert = this.alertCtrl.create({
            title: 'రిజిస్ట్రేషన్ విజయవంతమైంది! 🎉',
            subTitle: 'స్వాగతం, ' + payload.doctor_name + '! మీరు ఇప్పుడు మీ మొబైల్ నంబర్ ' + payload.phone_number + ' తో లాగిన్ అయి మీ అపాయింట్‌మెంట్స్ చూడవచ్చు.',
            buttons: [{
              text: 'లాగిన్ అవ్వండి (Login)',
              handler: () => {
                this.navCtrl.setRoot('LoginPage');
              }
            }]
          });
          alert.present();
        } else if (res && res.status === 300) {
          const alert = this.alertCtrl.create({
            title: 'మొబైల్ నంబర్ ఇప్పటికే ఉంది',
            subTitle: res.message || 'ఈ మొబైల్ నంబర్‌తో ఇప్పటికే డాక్టర్ అకౌంట్ ఉంది. దయచేసి నేరుగా లాగిన్ అవ్వండి.',
            buttons: [{
              text: 'లాగిన్ పేజీకి వెళ్లండి',
              handler: () => {
                this.navCtrl.setRoot('LoginPage');
              }
            }]
          });
          alert.present();
        } else {
          const alert = this.alertCtrl.create({
            title: 'లోపం సంభవించింది',
            subTitle: (res && res.message) ? res.message : 'రిజిస్ట్రేషన్ పూర్తి కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి.',
            buttons: ['Ok']
          });
          alert.present();
        }
      },
      err => {
        this.showSpinner = false;
        const alert = this.alertCtrl.create({
          title: 'సర్వర్ సమస్య',
          subTitle: 'నెట్‌వర్క్ లోపం సంభవించింది. దయచేసి మీ ఇంటర్నెట్ కనెక్షన్‌ను పరిశీలించి మళ్లీ ప్రయత్నించండి.',
          buttons: ['Ok']
        });
        alert.present();
      }
    );
  }
}
