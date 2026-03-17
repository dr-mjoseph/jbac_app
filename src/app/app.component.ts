import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { HomePage } from '../pages/home/home';
import { ServiceProvider } from '../providers/service/service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{ title: string, image: any, page: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public service: ServiceProvider) {
    this.initializeApp();

    this.pages = [
      { 'title': 'మీకు మా సహాయం', 'image': 'assets/icon/svg/helping-hand.svg', 'page': 'HelpinghandsPage' },
      { 'title': 'చర్చి పర్మిషన్ గవర్నమెంట్ ఆర్డర్స్', 'image': 'assets/icon/svg/governmental.svg', 'page': 'ChurchgoPage' },
      { 'title': 'వెబ్ సైట్ ఎలా ఉపయోగించాలి', 'image': 'assets/icon/svg/cloud-computing.svg', 'page': 'WebhelpPage' },
      { 'title': 'మీ చర్చికి మా టెక్నికల్ పొల్లుషన్స్', 'image': 'assets/icon/svg/employee.svg', 'page': 'TechsolPage' },
      { 'title': 'ఫోటో గ్యాలరీ', 'image': 'assets/icon/svg/picture.svg', 'page': 'GalleryPage' },
      { 'title': 'వీడియో గ్యాలరీ', 'image': 'assets/icon/svg/video.svg', 'page': 'VideoGalleryPage' },
      { 'title': 'క్రైస్తవులకు సంబందించిన వార్తలు పెట్టండి', 'image': 'assets/icon/svg/news.svg', 'page': 'NewsPage' },
      { 'title': 'క్రైస్తవులపై దాడుల నమోదు', 'image': 'assets/icon/svg/organisation.svg', 'page': 'AddattacksPage' },
      { 'title': 'JBAC వింగ్స్ సమాచారం', 'image': 'assets/icon/svg/project-manager.svg', 'page': 'WingPage' },
      { 'title': 'మమ్మల్ని సంప్రదించండి', 'image': 'assets/icon/svg/contact-us.svg', 'page': 'ContactPage' },
    ]

    this.service.updatecount().subscribe((res: any) => {
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#00548F'); // Set color to blue
      this.splashScreen.hide();
      // if (localStorage.getItem("usr_id") == "" || localStorage.getItem("usr_id") == null || localStorage.getItem("usr_id") == undefined) {
      //   this.nav.setRoot('LoginPage'); // Use setRoot for the initial page
      // } else {
      this.nav.setRoot('HomePage'); // Use setRoot for the initial page
      // }
    });
  }

  openPage(page) {
    this.nav.push(page);
  }

  
}
