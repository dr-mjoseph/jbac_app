import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, LoadingController,  NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  passloginform: FormGroup
  loading: any
  category: any = ''
  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder: FormBuilder, public alertCtrl: AlertController, private service: ServiceProvider, private loadingCtrl: LoadingController) {
    this.passloginform = this.formbuilder.group({
      category: ['', [Validators.required]],
      number: ['', [Validators.required]],
      password: [''],
      repassword: ['']
    });
  }

  password_type: string = 'password';
  togglePasswordMode() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  // Accept Input As a Number Only
  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  gotohome() {
    this.navCtrl.push('LoginPage')
  }

  shoepass: boolean = false

  checknumber() {

    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();

    console.log(this.passloginform.value.number.length == 10);

    if (this.passloginform.value.category == '') {
      this.loading.dismiss();
      const alert = this.alertCtrl.create({
        mode: 'ios',
        title: 'దయచేసి వర్గాన్ని ఎంచుకోండి',
        buttons: ['OK']
      });
      alert.present();

    } else if (this.passloginform.value.number == '') {
      this.loading.dismiss();
      const alert = this.alertCtrl.create({
        mode: 'ios',
        title: 'దయచేసి నంబర్‌ను నమోదు చేయండి',
        buttons: ['OK']
      });
      alert.present();
    } else if (this.passloginform.value.number.length != 10) {
      this.loading.dismiss();
      const alert = this.alertCtrl.create({
        mode: 'ios',
        title: 'ఫోన్ నంబర్‌ను తనిఖీ చేయండి',
        buttons: ['OK']
      });
      alert.present();
    } else {

      if (this.passloginform.value.category == 1) {
        this.category = 'విశ్వాసి';
      } else if (this.passloginform.value.category == 2) {
        this.category = 'విద్యార్థి';
      } else if (this.passloginform.value.category == 3) {
        this.category = 'మినిస్ట్రీస్';
      } else if (this.passloginform.value.category == 4) {
        this.category = 'పాస్టర్';
      } else if (this.passloginform.value.category == 5) {
        this.category = 'చర్చి';
      } else if (this.passloginform.value.category == 6) {
        this.category = 'క్రిస్టియన్ ఆర్గనైజెషన్ / కంపెనీ';
      } else if (this.passloginform.value.category == 7) {
        this.category = 'పాస్టర్ల అసోసియేషన్';
      }

      this.service.checknumberpassword(this.passloginform.value).subscribe((res: any) => {
        if (res.status == 200) {
          this.shoepass = true;
          this.loading.dismiss();
          const alert = this.alertCtrl.create({
            mode: 'ios',
            title: 'పాస్వర్డ్ను నమోదు చేయండి',
            buttons: ['OK']
          });
          alert.present();
        } else {
          this.loading.dismiss();
          const alert = this.alertCtrl.create({
            mode: 'ios',
            title: 'మొబైల్ నంబర్ నమోదు కాలేదు',
            buttons: ['OK']
          });
          alert.present();
        }
      })
    }
  }

  submit() {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();
    if (this.passloginform.value.password.length < 8 || this.passloginform.value.password.length > 16) {
      this.loading.dismiss();
      const alert = this.alertCtrl.create({
        mode: 'ios',
        title: 'పాస్వర్డ్ను 8 నుండి 16 అక్షరాల మధ్య ఉండాలి',
        buttons: ['OK']
      });
      alert.present();
    } else if (this.passloginform.value.repassword.length < 8 || this.passloginform.value.repassword.length > 16) {
      const alert = this.alertCtrl.create({
        mode: 'ios',
        title: 'పాస్వర్డ్ మళ్లీ నమోదు 8 నుండి 16 అక్షరాల మధ్య ఉండాలి',
        buttons: ['OK']
      });
      alert.present();
      this.loading.dismiss();
    } else if (this.passloginform.value.password != this.passloginform.value.repassword) {
      const alert = this.alertCtrl.create({
        mode: 'ios',
        title: 'పాస్‌వర్డ్‌లు సమానంగా లేదు',
        buttons: ['OK']
      });
      alert.present();
      this.loading.dismiss();
    } else {
      this.service.upadtedpassword(this.passloginform.value).subscribe((res: any) => {
        if (res.status == 200) {
          this.loading.dismiss();
          const alert = this.alertCtrl.create({
            mode: 'ios',
            title: 'పాస్‌వర్డ్‌లు విజయవంతంగా నవీకరించబడ్డాయి',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  this.navCtrl.push('LoginPage');
                }
              }
            ]
          });
          alert.present();
        }
      })
    }
  }


}









