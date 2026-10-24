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
    const url = 'https://www.youtube.com/channel/UCnk2hURhesjDM7SuOxgmt5A/about';
    try {
      if ((window as any).cordova && (window as any).cordova.InAppBrowser) {
        (window as any).cordova.InAppBrowser.open(url, '_system', 'location=yes');
      } else {
        window.open(url, '_system');
      }
    } catch (e) {
      window.location.href = url;
    }
  }

  gotoAbout() {
    this.navCtrl.push('AboutPage');
  }

  gotohome(){
    this.navCtrl.push('HomePage')
  }

}
