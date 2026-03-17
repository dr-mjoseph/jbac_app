import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotohome(){
    this.navCtrl.push('HomePage')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
