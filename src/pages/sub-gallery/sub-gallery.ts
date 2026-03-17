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
      this.gallery = res.data.filter((data: any) => data.category_id == this.id);
    })
  }

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  openImage(imageUrl: string) {
    const imageModal = this.modalCtrl.create(ImagemodalPage, { imageSrc: imageUrl });
    imageModal.present();
  }




}
