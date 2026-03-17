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
  loading: any

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
      content: 'ప్రాసెస్ అవుతుంది దయచేసి లాగండి'
    });
    this.loading.present();
    var id = event;
    this.service.getmandals().subscribe((res: any) => {
      this.mandals = res.data.filter((data: any) => data.const_id == id);
      if (this.mandals.length) {
        this.loading.dismiss();
      }
    })
  }

  getconstency(event: any) {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();
    var id = event;
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
      if (this.constituency.length) {
        this.loading.dismiss();
      }
    })
  }

  gepanchayati(event: any) {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();
    var id = event;
    this.service.gepanchayatis().subscribe((res: any) => {
      this.getvillages = res.data.filter((data: any) => data.mndl_id == id);
      if (this.getvillages.length) {
        this.loading.dismiss();
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
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి లాగండి'
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
    } else if (this.form.value.password.length < 4 || this.form.value.password.length > 16) {
      const confirm = await this.alertCtrl.create({
        mode: 'ios',
        subTitle: 'పాస్వర్డ్ 4 నుండి 16 అక్షరాల మధ్య ఉండాలి', // Password must be between 8 and 16 characters
        buttons: ['OK']
      });
      await confirm.present();
      this.loading.dismiss();
    } else {

      
      this.service.postinfo(this.form.value).subscribe((res: any) => {
        if (res.status == 200) {
          const toast = this.alertCtrl.create({
            message: 'యాప్ ఆక్టివేట్ అయినది, ఫోన్ నెంబర్ పాస్వర్డ్ తో లాగిన్ అవ్వండి',
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
        } else {
          const toast = this.alertCtrl.create({
            message: 'Server Error',
            mode: 'ios',
            buttons: ['OK']
          });
          toast.present();
          this.loading.dismiss();
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

