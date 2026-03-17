import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-forms2',
  templateUrl: 'forms2.html',
})
export class Forms2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormsPage');
  }

  gotopage(id: any) {
    if (id == 1) {
      this.navCtrl.push('InstitutePage');
    } else if (id == 2) {
      this.navCtrl.push('MarriagePage');
    } else if (id == 3) {
      this.navCtrl.push('JobsPage');
    } else if (id == 4) {
      this.navCtrl.push('HelpPage');
    } else if (id == 5) {
      this.navCtrl.push('SearchhousePage');
    } else if (id == 6) {
      this.navCtrl.push('WingPage');
    } else if (id == 7) {
      this.navCtrl.push('SearchorganisationPage');
    }
  }
}
