import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  gotohome(){
    this.navCtrl.push('HomePage');
  }

  loginmethod(){
    if (localStorage.getItem("usr_id") == "" || localStorage.getItem("usr_id") == null || localStorage.getItem("usr_id") == undefined) {
      this.navCtrl.setRoot('LoginPage'); // Use setRoot for the initial page
    } else {
      this.navCtrl.setRoot('HomePage'); // Use setRoot for the initial page
    }
  }


}
