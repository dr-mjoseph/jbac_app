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

 
  yourVideoId = 'https://www.youtube.com/embed/MjDV1hHkPkY?si=oH1BfkRY5P_A70Rz';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChurchgoPage');
  }

  gotohome(){
    this.navCtrl.push('HomePage')
  }

}
