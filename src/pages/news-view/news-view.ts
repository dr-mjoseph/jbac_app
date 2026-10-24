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
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.allsearchnews = res.data;
        this.searchnews = res.data;
        console.log(this.searchnews);

      }
    })
  }

  getfilter(event: any) {
    console.log('Filtering news by:', event);
    if (!this.allsearchnews) return;
    if (event == '0' || event == 0 || !event) {
      this.searchnews = [...this.allsearchnews];
    } else {
      const selected = String(event).trim().toLowerCase();
      this.searchnews = this.allsearchnews.filter((item: any) => {
        if (!item || !item.news) return false;
        const cat = String(item.news).trim().toLowerCase();
        return cat === selected || cat.includes(selected) || selected.includes(cat);
      });
    }
    if (this.searchnews.length == 0) {
      alert('ఈ క్యాటగిరీకి సంబంధించిన డేటా లేదు');
    }
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
