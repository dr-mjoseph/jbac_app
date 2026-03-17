import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-video-gallery-sub',
  templateUrl: 'video-gallery-sub.html',
})

export class VideoGallerySubPage {

  videos: any;
  uniqueRecords: any
  id: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider) {
    this.id = this.navParams.get('id');
  }

  ionViewDidLoad() {
    this.getvideo();
    this.uniqueRecords = new Map();
  }

  gotohome() {
    this.navCtrl.push('HomePage')
  }

  filteredData: any;
  catreru:any;
  
  getvideo() {
    this.service.getvideourl().subscribe((res: any) => {
      var x = [];
      x.push(res);
      this.videos = x[0].data.filter((item: any) => item.category_id === this.id);
      this.catreru= x[0].data[0].category_nm
    })
  }

}
