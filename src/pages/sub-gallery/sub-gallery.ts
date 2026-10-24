import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';
import { ServiceProvider } from '../../providers/service/service';
import { ImagemodalPage } from '../imagemodal/imagemodal';

@IonicPage()
@Component({
  selector: 'page-sub-gallery',
  templateUrl: 'sub-gallery.html',
})
export class SubGalleryPage {
  gallery: any = []
  id:any
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider,public modalCtrl: ModalController)  {
    this.id = this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubGalleryPage');
    this.getimages();
  }

  getimages() {
    this.service.getcatewebsitegallery().subscribe((res: any) => {
      if (res && res.data && Array.isArray(res.data)) {
        this.gallery = res.data.filter((data: any) => data.category_id == this.id || data.id == this.id);
      } else {
        this.gallery = [];
      }
    }, error => {
      this.gallery = [];
    });
  }

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  onImgError(event: any, item: any) {
    const fallbackId = (item && item.id) ? (Math.abs(item.id) % 12) : 1;
    event.target.src = 'assets/images/meet-fig' + fallbackId + '.png';
  }

  openImage(imageUrl: string) {
    const imageModal = this.modalCtrl.create(ImagemodalPage, { imageSrc: imageUrl });
    imageModal.present();
  }
}
