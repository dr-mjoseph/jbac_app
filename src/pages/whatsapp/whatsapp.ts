import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';

/**
 * Generated class for the WhatsappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-whatsapp',
  templateUrl: 'whatsapp.html',
})
export class WhatsappPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotohome() {
    this.navCtrl.push('HomePage')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhatsappPage');
  }

}
