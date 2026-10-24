import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';

/**
 * Generated class for the ChurchgoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-churchgo',
  templateUrl: 'churchgo.html',
})
export class ChurchgoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openYoutube() {
    window.open('https://www.youtube.com/channel/UCnk2hURhesjDM7SuOxgmt5A/about', '_system', 'location=yes');
  }

  gotoAbout() {
    this.navCtrl.push('AboutPage');
  }

  gotohome(){
    this.navCtrl.push('HomePage')
  }

}
