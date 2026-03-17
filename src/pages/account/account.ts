import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  gotopage(id: any) {
    if (id == 1) {
      this.navCtrl.push('AddchurchtimingsPage');
    } else if (id == 2) {
      this.navCtrl.push('AddinstitutePage');
    } else if (id == 3) {
      this.navCtrl.push('AddmeetingsPage');
    } else if (id == 4) {
      this.navCtrl.push('AddbussinessPage');
    } else if (id == 5) {
      this.navCtrl.push('AddmarriagePage');
    } else if (id == 6) {
      this.navCtrl.push('AddjobsPage');
    } else if (id == 7) {
      this.navCtrl.push('AddadsPage');
    }
  }

}
