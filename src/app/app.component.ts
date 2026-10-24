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

  pages: Array<{ title: string, subtitle?: string, image: any, page: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public service: ServiceProvider) {
    this.initializeApp();

        this.pages = [
      { 'title': 'ప్రొఫైల్‌ని సవరించండి', 'subtitle': 'Edit Profile & Details', 'image': 'assets/icon/svg/services.svg', 'page': 'ProfilePage' },
      { 'title': 'వివాహ & కుటుంబ కౌన్సిలింగ్', 'subtitle': 'Family & Marriage Counselling', 'image': 'assets/icon/svg/couple.svg', 'page': 'FamilyCouncellingPage' },
      { 'title': 'వివాహ సంబంధాలు', 'subtitle': 'Christian Marriage Alliances', 'image': 'assets/icon/svg/register.svg', 'page': 'MarriagePage' },
      { 'title': 'వివాహ సంబంధం నమోదు', 'subtitle': 'Register Marriage Profile', 'image': 'assets/icon/svg/register.svg', 'page': 'AddmarriagePage' },
      { 'title': 'కౌన్సిలర్ / డాక్టర్ నమోదు', 'subtitle': 'Register as Counsellor', 'image': 'assets/icon/svg/employee.svg', 'page': 'DoctorregisterPage' },
      { 'title': 'మీకు మా సహాయం', 'subtitle': 'Helping Hands & Support', 'image': 'assets/icon/svg/helping-hand.svg', 'page': 'HelpinghandsPage' },
      { 'title': 'చర్చి పర్మిషన్ గవర్నమెంట్ ఆర్డర్స్', 'subtitle': 'Govt Orders & Church Permissions', 'image': 'assets/icon/svg/governmental.svg', 'page': 'ChurchgoPage' },
      { 'title': 'యాప్ ఎలా ఉపయోగించాలి', 'subtitle': 'App & Website Help Guide', 'image': 'assets/icon/svg/cloud-computing.svg', 'page': 'WebhelpPage' },
      { 'title': 'మీ చర్చికి మా టెక్నికల్ సొల్యూషన్స్', 'subtitle': 'Technical Church Solutions', 'image': 'assets/icon/svg/employee.svg', 'page': 'TechsolPage' },
      { 'title': 'ఫోటో గ్యాలరీ', 'subtitle': 'JBAC Photo Gallery', 'image': 'assets/icon/svg/picture.svg', 'page': 'GalleryPage' },
      { 'title': 'వీడియో గ్యాలరీ', 'subtitle': 'Video Gallery & Sermons', 'image': 'assets/icon/svg/video.svg', 'page': 'VideoGalleryPage' },
      { 'title': 'క్రైస్తవ వార్తలు', 'subtitle': 'Latest Christian News', 'image': 'assets/icon/svg/news.svg', 'page': 'NewsPage' },
      { 'title': 'క్రైస్తవులపై దాడుల నమోదు', 'subtitle': 'Report Attacks on Christians', 'image': 'assets/icon/svg/organisation.svg', 'page': 'AddattacksPage' },
      { 'title': 'JBAC వింగ్స్ సమాచారం', 'subtitle': 'JBAC Wings & Leadership', 'image': 'assets/icon/svg/project-manager.svg', 'page': 'WingPage' },
      { 'title': 'మమ్మల్ని సంప్రదించండి', 'subtitle': 'Contact JBAC Helpline', 'image': 'assets/icon/svg/contact-us.svg', 'page': 'ContactPage' },
    ];

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
    if (page === 'ProfilePage') {
      const uid = localStorage.getItem('usr_id');
      if (!uid || uid === ' ' || uid === 'null' || uid === 'undefined') {
        this.nav.push('LoginPage');
        return;
      }
    }
    this.nav.push(page);
  }


}
