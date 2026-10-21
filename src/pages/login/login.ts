import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ServiceProvider } from '../../providers/service/service';
// import { ForgotPasswordPage } from '../forgot-password/forgot-password';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  passloginform: FormGroup
  loading: any;
  isLoggingIn: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder: FormBuilder, public alertCtrl: AlertController, private service: ServiceProvider, private loadingCtrl: LoadingController, private modalCtrl: ModalController) {
    this.passloginform = this.formbuilder.group({
      category: ['', [Validators.required]],
      mobile_number: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // Accept Input As a Number Only
  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  async passlogin() {
    this.isLoggingIn = true;
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'దయచేసి వేచి ఉండండి, ప్రాసెస్ అవుతోంది...'
    });
    this.loading.present();

    const dismissLoadingSafely = () => {
      this.isLoggingIn = false;
      if (this.loading) {
        try {
          this.loading.dismiss().catch(() => {});
        } catch (_) {}
      }
    };

    if (this.passloginform.invalid) {
      dismissLoadingSafely();
      const alert = this.alertCtrl.create({
        mode: 'ios',
        title: 'మీ వివరాలు తప్పు, సరి చుడండి',
        buttons: ['OK']
      });
      alert.present();
    } else {
      this.service.passwordlogin(this.passloginform.value).subscribe((res: any) => {
        dismissLoadingSafely();
        if (res.status == 250) {
          const alert = this.alertCtrl.create({
            mode: 'ios',
            title: 'ఈ నంబర్ రిజిస్టర్ కాలేదు',
            buttons: ['OK']
          });
          alert.present();
        } else if (res.status == 600) {
          const alert = this.alertCtrl.create({
            mode: 'ios',
            title: 'పాస్‌వర్డ్ తప్పు',
            buttons: ['OK']
          });
          alert.present();
        } else if (res.status == 200 || res.status == 201) {
          if (res.data && res.data.length > 0) {
            localStorage.setItem('usr_id', res.data[0].id);
            localStorage.setItem('mobile_number', this.passloginform.value.mobile_number);
            localStorage.setItem('name', res.data[0].name);
            localStorage.setItem('category_id', this.passloginform.value.category);
            localStorage.setItem('auth_ind', "1");
            if (this.passloginform.value.category == 1) {
              localStorage.setItem('category', 'Believer');
            } else if (this.passloginform.value.category == 2) {
              localStorage.setItem('category', 'Student');
            } else if (this.passloginform.value.category == 3) {
              localStorage.setItem('category', 'Ministry');
            } else if (this.passloginform.value.category == 4) {
              localStorage.setItem('category', 'Pastor');
            } else if (this.passloginform.value.category == 5) {
              localStorage.setItem('category', 'Church');
            } else if (this.passloginform.value.category == 6) {
              localStorage.setItem('category', 'Independent Organization');
            } else if (this.passloginform.value.category == 7) {
              localStorage.setItem('category', 'Pastors Association ');
            } else if (this.passloginform.value.category == 8) {
              localStorage.setItem('category', 'Doctor');
              localStorage.setItem('is_doctor', '1');
            }
          }

          let navigated = false;
          const doNavigate = () => {
            if (navigated) return;
            navigated = true;
            const redirect = this.navParams.get('redirect');
            if (redirect === 'FamilyCouncellingPage' || redirect === 'family-councelling') {
              this.navCtrl.setRoot('FamilyCouncellingPage');
            } else {
              this.navCtrl.setRoot(HomePage);
            }
          };

          const alert = this.alertCtrl.create({
            mode: 'ios',
            title: 'విజయ వంతం గా లాగిన్ అయ్యారు',
            buttons: [{
              text: 'OK',
              handler: () => {
                doNavigate();
              }
            }]
          });
          alert.onDidDismiss(() => {
            doNavigate();
          });
          alert.present();
        } else {
          const alert = this.alertCtrl.create({
            mode: 'ios',
            title: res.message || 'లాగిన్ విఫలమైంది',
            buttons: ['OK']
          });
          alert.present();
        }
      }, (_err: any) => {
        dismissLoadingSafely();
        const alert = this.alertCtrl.create({
          mode: 'ios',
          title: 'సర్వర్ సమస్య ఉంది, దయచేసి మళ్లీ ప్రయత్నించండి',
          buttons: ['OK']
        });
        alert.present();
      });
    }
  }

  gotodoctorregister() {
    this.navCtrl.push('DoctorregisterPage');
  }

  gotoformspage() {
    this.navCtrl.setRoot('FormsPage')
  }

  password_type: string = 'password';
  togglePasswordMode() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  gotoforgetpasswordpage() {
    const modal = this.modalCtrl.create('ForgotPasswordPage');
    modal.present();
  }




}
