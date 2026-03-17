import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HomePage } from '../home/home';

/**
 * Generated class for the PagesPrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-privacy',
  templateUrl: 'pages-privacy.html',
})
export class PagesPrivacyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesPrivacyPage');
  }
  gotohome() {
    this.navCtrl.push('HomePage')
    // this.navCtrl.setRoot(HomePage);
  }
}
