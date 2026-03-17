import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-video-gallery',
  templateUrl: 'video-gallery.html',
})
export class VideoGalleryPage {
  videos: any;
  uniqueRecords: any
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider) { }

  ionViewDidLoad() {
    this.getvideo();
    this.uniqueRecords = new Map();
  }

  gotohome() {
    this.navCtrl.push('HomePage')
  }

  filteredData: any
  getvideo() {
    this.service.getvideourl().subscribe((res: any) => {
      var x = [];
      x.push(res);
      this.videos = x[0].data;
      this.videos.forEach((record: any) => {
        if (!this.uniqueRecords.has(record.category_id)) {
          this.uniqueRecords.set(record.category_id, record);
        }
        this.filteredData = Array.from(this.uniqueRecords.values());
        console.log(this.filteredData);
      })
    })
  }

  opensub(id: any) {
    this.navCtrl.push('VideoGallerySubPage', { id: id });
  }


}
