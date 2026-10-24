import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
// import { HomePage } from '../home/home';
import { ModalpagePage } from '../modalpage/modalpage';

/**
 * Generated class for the NewsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-view',
  templateUrl: 'news-view.html',
})
export class NewsViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsViewPage');
    this.getnews()
  }
  searchnews: any;
  allsearchnews: any;
  selectedCategory: any = '0';
  getnews() {
    this.service.getupdatenews().subscribe(res => {
      if (res && res.status == 202) {
        console.log(res.message);
      } else if (res && res.status == 200 && res.data) {
        this.allsearchnews = res.data;
        this.getfilter(this.selectedCategory);
        console.log('Loaded news:', this.allsearchnews.length);
      }
    }, err => {
      console.log('Error loading news:', err);
    });
  }

  getfilter(event: any) {
    console.log('Filtering news by:', event);
    if (!this.allsearchnews) return;
    if (event == '0' || event === 0 || !event) {
      this.searchnews = [...this.allsearchnews];
      return;
    }
    const cleanStr = (s: any) => String(s || '').replace(/[\s,\.\-_\/]+/g, '').trim().toLowerCase();
    const selected = cleanStr(event);
    this.searchnews = this.allsearchnews.filter((item: any) => {
      if (!item) return false;
      const cat = cleanStr(item.news || item.category || '');
      return cat === selected || cat.includes(selected) || selected.includes(cat);
    });
  }




  showFullDescription: any

  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }

  gotohome() {
    this.navCtrl.push('HomePage');
  }


  openImage(imageUrl: string) {
    const modal = this.modalCtrl.create(ModalpagePage, { imageUrl });
    modal.present();
  }

}
