import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
// import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  imagesget: any
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider,) {
  }

  ionViewDidLoad() {
    this.getimages();
  }

  getimages() {
    this.service.getimages().subscribe((res: any) => {
      this.imagesget = res.data;
    })
  }
  gotohome(){
    this.navCtrl.push('HomePage')
  }

  gotosub(id){
    console.log(id);
    this.navCtrl.push('SubGalleryPage', { id: id }); // Pass the id as a parameter
  }


}
