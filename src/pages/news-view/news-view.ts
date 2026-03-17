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
  searchnews: any
  allsearchnews: any
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

  getfilter(event) {
    console.log(event);
    if (event == 0) {
      this.getnews();
    } else {
      this.searchnews = this.allsearchnews.filter(item => item.news === event);
    }
    if (this.searchnews.length == 0) {
      alert('ఈ క్యాటగిరీకి సంబంధించిన డేటా లేదు')
    }
   else {
    alert('సర్వర్ డౌన్ వుంది');
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
