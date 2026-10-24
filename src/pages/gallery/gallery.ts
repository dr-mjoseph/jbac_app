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
      if (res && res.data && Array.isArray(res.data)) {
        this.imagesget = res.data;
      } else {
        this.imagesget = [];
      }
    }, error => {
      console.log('Error fetching gallery images', error);
      this.imagesget = [];
    });
  }
  onImgError(event: any, item: any) {
    const fallbackId = (item && item.id) ? (Math.abs(item.id) % 12) : 1;
    event.target.src = 'assets/images/meet-fig' + fallbackId + '.png';
  }

  gotohome(){
    this.navCtrl.push('HomePage')
  }

  gotosub(id){
    console.log(id);
    this.navCtrl.push('SubGalleryPage', { id: id }); // Pass the id as a parameter
  }
}
