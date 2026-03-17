import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {IonicPage, AlertController, ModalController, NavController, ToastController } from 'ionic-angular';
import Swiper from 'swiper';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  banners = [
    { id: '1', banner: 'https://jbac.in/baneers/Banner01.png' },
   // { id: '2', banner: 'https://jbac.in/baneers/Banner02.png' },
    { id: '3', banner: 'https://jbac.in/baneers/Banner03.png' },
    { id: '4', banner: 'https://jbac.in/baneers/Banner04.png' },
    { id: '5', banner: 'https://jbac.in/baneers/Banner05.png' },
    { id: '6', banner: 'https://jbac.in/baneers/Banner06.png' },
    { id: '7', banner: 'https://jbac.in/baneers/Banner07.png' },
  ]
  main: any = 0
  count: any
  maintrue: boolean = false;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public formBuilder: FormBuilder, public toastCtrl: ToastController, public service: ServiceProvider, public modalCtrl: ModalController) {

    if (localStorage.getItem("usr_id") == "" || localStorage.getItem("usr_id") == null || localStorage.getItem("usr_id") == undefined) {
      this.maintrue = false;
      if (this.main == 0) {
        this.openFormAlert();
        localStorage.setItem('aort_id', '1');
        this.main = 1;
      }
    } else {
      this.maintrue = true;
    }

    this.service.getcount().subscribe((res: any) => {
      this.count = res.data[0].count
    })

  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  ionViewDidLoad() {
    this.initSwiper();
  }

  initSwiper() {
    new Swiper('.swiper-container', {
      // Swiper configuration options
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination', // Container for pagination bullets
        clickable: true // Enable clickable bullets
      }
    });
  }

  gotopage(id: any) {
    if (id == 1) {
      this.navCtrl.push('AboutPage')
    } else if (id == 2) {
      this.navCtrl.push('MeetingPage')
    } else if (id == 3) {
      this.navCtrl.push('FormsPage')
    } else if (id == 4) {
      if (localStorage.getItem("usr_id") == " " || localStorage.getItem("usr_id") == null || localStorage.getItem("usr_id") == undefined) {
        const confirm = this.alertCtrl.create({
          mode: 'ios',
          title: 'దయచేసి లాగిన్ అవ్వండి',
          buttons:['Ok']
        })
        confirm.present();
        this.navCtrl.push('LoginPage');
      } else {
        this.navCtrl.push('Forms2Page')
      }
      // this.navCtrl.push('Forms2Page')
    } else if (id == 5) {
      // if (localStorage.getItem("usr_id") == " " || localStorage.getItem("usr_id") == null || localStorage.getItem("usr_id") == undefined) {
      //   const confirm = this.alertCtrl.create({
      //     mode: 'ios',
      //     title: 'దయచేసి లాగిన్ అవ్వండి',
      //     buttons:['Ok']
      //   })
      //   confirm.present();
      //   this.navCtrl.push('LoginPage');
      // } else {
      //   this.navCtrl.push('AccountPage')
      // }
      this.navCtrl.push('AccountPage')
    } else if (id == 6) {
      if (localStorage.getItem("usr_id") == " " || localStorage.getItem("usr_id") == null || localStorage.getItem("usr_id") == undefined) {
        const confirm = this.alertCtrl.create({
          mode: 'ios',
          title: 'దయచేసి లాగిన్ అవ్వండి',
          buttons:['Ok']
        })
        confirm.present();
        this.navCtrl.push('LoginPage');
      } else {
        this.navCtrl.push('WingcommandPage')
      }
    } else if (id == 7) {

      if (localStorage.getItem("usr_id") == " " || localStorage.getItem("usr_id") == null || localStorage.getItem("usr_id") == undefined) {
        const confirm = this.alertCtrl.create({
          mode: 'ios',
          title: 'దయచేసి లాగిన్ అవ్వండి',
          buttons:['Ok']
        })
        confirm.present();
        this.navCtrl.push('LoginPage');
      } else {
        this.navCtrl.push('NewsPage')
      }
      // this.navCtrl.push('NewsPage')



   
    } else if (id == 8) {
      if (localStorage.getItem("usr_id") == " " || localStorage.getItem("usr_id") == null || localStorage.getItem("usr_id") == undefined) {
        const confirm = this.alertCtrl.create({
          mode: 'ios',
          title: 'దయచేసి లాగిన్ అవ్వండి',
          buttons:['Ok']
        })
        confirm.present();
        this.navCtrl.push('LoginPage');
      } else {
        this.navCtrl.push('AddmeetingsPage')
      }
    } else if (id == 9) {
      if (localStorage.getItem("usr_id") == " " || localStorage.getItem("usr_id") == null || localStorage.getItem("usr_id") == undefined) {
        const confirm = this.alertCtrl.create({
          mode: 'ios',
          title: 'దయచేసి లాగిన్ అవ్వండి',
          buttons:['Ok']
        })
        confirm.present();
        this.navCtrl.push('LoginPage');
      } else {
        this.navCtrl.push('ChurchTimingsPage');
      }
    } else if (id == 10) {
      this.navCtrl.push('HelpinghandsPage');
    } else if (id == 11) {
      this.navCtrl.push('ContactPage');
    } else if (id == 12) {
      this.navCtrl.push('ChurchgoPage');
    } else if (id == 13) {
      this.navCtrl.push('WebhelpPage');
    } else if (id == 14) {
      this.navCtrl.push('TechsolPage');
    } else if (id == 15) {
      this.navCtrl.push('GalleryPage');
    } else if (id == 16) {
      this.navCtrl.push('VideoGalleryPage');
    } else if (id == 17) {
      this.navCtrl.push('NewsViewPage');
    } else if (id == 18) {
      this.navCtrl.push('AddattacksPage');
    }
   
  }

  async logout() {
    const confirm = this.alertCtrl.create({
      title: 'మీరు ఖచ్చితంగా లాగ్ అవుట్ చేస్తారా ?',
      mode: 'ios',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            localStorage.clear();
            this.navCtrl.push('LoginPage')
   
          }
        },
        {
          text: 'No',
          handler: () => {
          }
        }
      ]
    });
    confirm.present();
  }

  gotoprofile() {
    if (localStorage.getItem("usr_id") == " " || localStorage.getItem("usr_id") == null || localStorage.getItem("usr_id") == undefined) {
      this.navCtrl.push('LoginPage');
    } else {
      this.navCtrl.push('ProfilePage');
    }
  }

  openFormAlert() {
    let modal = this.modalCtrl.create('EntryFormPage');
    modal.present();
  }
  gotoprivacy() {
    this.navCtrl.push('PagesPrivacyPage')
  }
  gotonewsciew() {
    this.navCtrl.push('NewsViewPage')
  }

}



