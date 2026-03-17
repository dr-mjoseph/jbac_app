import { Component } from '@angular/core';
import { IonicPage,  NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalpage',
  templateUrl: 'modalpage.html',
})
export class ModalpagePage {


  imageUrl: string;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.imageUrl = this.navParams.get('imageUrl');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
