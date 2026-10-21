import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-entry-form',
  templateUrl: 'entry-form.html',
})
export class EntryFormPage {
  loading: any;
  isSubmitting: boolean = false;

  form: FormGroup

  districts: any;
  mandals: any = [];
  constituency: any = [];

  getvillages: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public formBuilder: FormBuilder,
    public service: ServiceProvider, public toastCtrl: ToastController, public alertCtrl: AlertController, private loadingCtrl: LoadingController) {


    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      category: ['', Validators.required],
      district_id: ['', Validators.required],
      constituency_id: ['', Validators.required],
      mandal_id: ['', Validators.required],
      village_id: ['', Validators.required],
      password: ['']
    });



    this.getdistric();
  }
  gotoprivacy() {
    this.navCtrl.push('PagesPrivacyPage')
  }
 

  closeModal() {
    this.viewCtrl.dismiss();
  }

  getdistric() {
    this.service.getdistrict().subscribe((res: any) => {
      this.districts = res.data;
    })
  }

  getmandals(event: any) {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'దయచేసి వేచి ఉండండి, ప్రాసెస్ అవుతోంది...'
    });
    this.loading.present();
    var id = event;
    this.service.getmandals().subscribe((res: any) => {
      this.mandals = res.data.filter((data: any) => data.const_id == id);
      if (this.mandals.length) {
        this.loading.dismiss();
      this.isSubmitting = false;
      }
    })
  }

  getconstency(event: any) {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'దయచేసి వేచి ఉండండి, ప్రాసెస్ అవుతోంది...'
    });
    this.loading.present();
    var id = event;
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
      if (this.constituency.length) {
        this.loading.dismiss();
      this.isSubmitting = false;
      }
    })
  }

  gepanchayati(event: any) {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'దయచేసి వేచి ఉండండి, ప్రాసెస్ అవుతోంది...'
    });
    this.loading.present();
    var id = event;
    this.service.gepanchayatis().subscribe((res: any) => {
      this.getvillages = res.data.filter((data: any) => data.mndl_id == id);
      if (this.getvillages.length) {
        this.loading.dismiss();
      this.isSubmitting = false;
      }
    })
  }

  poorp(id: any) {
    if (id == 1) {
      if (this.form.value.district_id == '') {
        const toast = this.alertCtrl.create({
          message: 'జిల్లాను ఎంచుకోండి',
          mode: 'ios',
          buttons: ['Ok']
        });
        toast.present();
          this.form.reset({ name: '', number: '', category: '', district_id: '', constituency_id: '', mandal_id: '', village_id: '', password: '' });
          this.mandals = [];
          this.constituency = [];
          this.getvillages = [];
      }
    } else if (id == 2) {
      if (this.form.value.district_id == '') {
        const toast = this.alertCtrl.create({
          message: 'జిల్లాను ఎంచుకోండి',
          mode: 'ios',
          buttons: ['Ok']
        });
        toast.present();
      } else if (this.form.value.constituency_id == '') {
        const toast = this.alertCtrl.create({
          message: 'నియోజకవర్గాన్ని ఎంచుకోండి',
          mode: 'ios',
          buttons: ['Ok']
        });
        toast.present();
      }
    } else if (id == 3) {
      if (this.form.value.district_id == '') {
        const toast = this.alertCtrl.create({
          message: 'జిల్లాను ఎంచుకోండి',
          mode: 'ios',
          buttons: ['Ok']
        });
        toast.present();
      } else if (this.form.value.constituency_id == '') {
        const toast = this.alertCtrl.create({
          message: 'నియోజకవర్గాన్ని ఎంచుకోండి',
          mode: 'ios',
          buttons: ['Ok']
        });
        toast.present();
      } else if (this.form.value.mandal_id == '') {
        const toast = this.alertCtrl.create({
          message: 'మండలాన్ని ఎంచుకోండి',
          mode: 'ios',
          buttons: ['Ok']
        });
        toast.present();
      }
    }
  }

  async submit() {
    this.isSubmitting = true;
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'దయచేసి వేచి ఉండండి, ప్రాసెస్ అవుతోంది...'
    });
    this.loading.present();
    if (this.form.invalid) {
      const confirm = await this.alertCtrl.create({
        mode: 'ios',
        subTitle: 'దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి', // Please fill in the empty fields
        buttons: ['OK']
      });
      await confirm.present();
      this.loading.dismiss();
      this.isSubmitting = false;
    } else if (this.form.value.password.length < 4 || this.form.value.password.length > 16) {
      const confirm = await this.alertCtrl.create({
        mode: 'ios',
        subTitle: 'పాస్వర్డ్ 4 నుండి 16 అక్షరాల మధ్య ఉండాలి', // Password must be between 8 and 16 characters
        buttons: ['OK']
      });
      await confirm.present();
      this.loading.dismiss();
      this.isSubmitting = false;
    } else {

      
      this.service.postinfo(this.form.value).subscribe((res: any) => {
        if (res.status == 200) {
          const toast = this.alertCtrl.create({
            title: 'రిజిస్ట్రేషన్ విజయవంతం! (Registration Successful)',
            message: 'registered successfully, you can login with username and password with the same mobile number and if you want to change you can change while login or by clicking forgot password.\n\nనమోదు విజయవంతంగా పూర్తయింది. మీరు అదే మొబైల్ నంబరును యూజర్‌నేమ్ మరియు పాస్‌వర్డ్‌గా ఉపయోగించి లాగిన్ అవ్వవచ్చు. పాస్‌వర్డ్ మార్చుకోవాలనుకుంటే లాగిన్ సమయంలో లేదా Forgot Password ద్వారా మార్చుకోవచ్చు.',
            mode: 'ios',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  this.navCtrl.push('LoginPage');
                }
              }
            ]
          });
          toast.present();
          this.loading.dismiss();
      this.isSubmitting = false;

        } else if (res.status == 606) {
          const confirm = this.alertCtrl.create({
            mode: 'ios',
            title: 'ఈ ఫోన్ నెంబర్ తో ఇంతకుముందే యాప్ ఆక్టివేట్ అయినది, లాగిన్ అవ్వండి, ',
             buttons: [
              {
                text: 'OK',
                handler: () => {
                  this.navCtrl.push('LoginPage');
                }
              }
            ]
          })
          confirm.present();
          this.loading.dismiss();
      this.isSubmitting = false;
        } else {
          const toast = this.alertCtrl.create({
            message: 'Server Error',
            mode: 'ios',
            buttons: ['OK']
          });
          toast.present();
          this.loading.dismiss();
      this.isSubmitting = false;
        }
      })
    }
  }

  gotologin() {
    this.navCtrl.push('LoginPage');
  }

  home() {
    this.navCtrl.push('HomePage');
  }
}

