import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html',
})
export class FormsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormsPage');
  }


  gotopage(id: any) {
    if (id == 1) {
      this.navCtrl.push('BelieverPage');
    } else if (id == 2) {
      this.navCtrl.push('StudentPage');
    } else if (id == 3) {
      this.navCtrl.push('MinistryPage');
    } else if (id == 4) {
      this.navCtrl.push('PastorPage');
    } else if (id == 5) {
      this.navCtrl.push('ChurchPage');
    } else if (id == 6) {
      this.navCtrl.push('OrganisationPage');
    } else if (id == 7) {
      this.navCtrl.push('AssociationPage');
    }
    else if (id == 27) {
      this.navCtrl.push('PrivacyPage');
    }  else {
      const confirm = this.alertCtrl.create({
        mode: 'ios',
        title: 'Coming Soon..!',
        buttons:['Ok']
      })
      confirm.present();
      setTimeout(() => { confirm.dismiss(); }, 2000);
    }
  }
}
