import { Component } from '@angular/core';
import { IonicPage,  NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ImagemodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imagemodal',
  templateUrl: 'imagemodal.html',
})
export class ImagemodalPage {

  imageSrc: string;
  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.imageSrc = this.navParams.get('imageSrc');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagemodalPage');
  }

}
