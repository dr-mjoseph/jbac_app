import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-wingcommand',
  templateUrl: 'wingcommand.html',
})
export class WingcommandPage {
  leders_array: any;
  category_id: any;
  profiledata: any = [];
  belearr: any;
  studentarr: any;
  pastorarr: any;
  formshow: any;
  general: any;
  generals: any;
  leaders: any;
  wingtypes: any;
  leaderid: any;
  myresdata: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WingcommandPage');
    this.getLeaderswebsiteData()
  }

  gotohome() {
    this.navCtrl.push('HomePage')
  }
  getLeaderswebsiteData() {
    var data = {
      "category": localStorage.getItem("category_id"),
      "usr_id": localStorage.getItem("usr_id")
    }
    this.service.getUserMainData(data).subscribe((res: any) => {
      if (res.data.length == "0") {
        const confirm = this.alertCtrl.create({
          title: 'మీరు జనరల్ లీడర్ (లేదా ) వింగ్ లీడర్ కాదు ?',
          mode: 'ios',
          buttons: [
            {
              text: 'ok',
              handler: () => {
              }
            },
          ]
        });
        confirm.present();
        this.navCtrl.push('HomePage');
      } else {
        this.leaderid = res.data[0].leadertype
        if (res.data[0].leadertype == 1) {
          this.leaders = "Leader "
        } else if (res.data[0].leadertype == 2) {
          this.leaders = "Wing "
        }
        this.myresdata = res.data[0].generaltype
        if (res.data[0].leadertype == 1) {
          if (res.data[0].generaltype == 1) {
            this.generals = "District"
            this.general = "Constituency "
          } else if (res.data[0].generaltype == 2) {
            this.generals = "Constituency"
            this.general = "Mandal "
          } else if (res.data[0].generaltype == 3) {
            this.generals = "Mandal "
            this.general = "Village "
          } else if (res.data[0].generaltype == 4) {
            this.generals = "Village "
            this.general = ""
          }
          var data = {
            "usr_id": localStorage.getItem("usr_id"),
            "category_id": localStorage.getItem("category_id"),
            "generaltype": res.data[0].generaltype,
            district_id: res.data[0].district_id,
            constituency_id: res.data[0].constituency_id,
            mandal_id: res.data[0].mandal_id,
            panchayat_id: res.data[0].village_id
          }
          this.service.getLeaderswebsiteD(data).subscribe((result: any) => {
            this.belearr = result.data[0];
            this.studentarr = result.data[1];
            this.pastorarr = result.data[2];
            console.log(this.belearr, this.studentarr, this.pastorarr, 'leader')
          })
        } else if (res.data[0].leadertype == 2) {
          this.wingtypes = res.data[0].wingtypes
          if (res.data[0].generaltype == 1) {
            this.generals = "District";
            this.general = "Constituency";
          } else if (res.data[0].generaltype == 2) {
            this.generals = "Constituency";
            this.general = "Mandal";
          } else if (res.data[0].generaltype == 3) {
            this.generals = "Mandal";
            this.general = "Village";
          } else if (res.data[0].generaltype == 4) {
            this.generals = "Village";
            this.general = "";
          }
          var data4 = {
            "usr_id": localStorage.getItem("usr_id"),
            "category_id": localStorage.getItem("category_id"),
            "generaltype": res.data[0].generaltype,
            wingtype: res.data[0].wingtype,
            district_id: res.data[0].district_id,
            constituency_id: res.data[0].constituency_id,
            mandal_id: res.data[0].mandal_id,
            panchayat_id: res.data[0].village_id
          }
          this.service.getLeaderswebsitewing(data4).subscribe((result: any) => {
            this.belearr = result.data[0];
            this.studentarr = result.data[1];
            this.pastorarr = result.data[2];

            console.log(this.belearr, this.studentarr, this.pastorarr, 'leader')

          })
        }
      }
    })
  }


  deleteAlert(id: any, index: any) {

    const confirm = this.alertCtrl.create({
      title: 'Are you sure to rejected ?',
      mode: 'ios',
      buttons: [
        {
          text: 'అవును, తిరస్కరించబడింది!',
          handler: () => {
            this.deleteleader(id, index);
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

  deleteleader(id: any, index: any) {
    var data = {
      tableid: id,
      id: index,
      leadertype: this.leaderid
    }
    this.service.deleteleaders(data).subscribe(res => {
      alert(' తిరస్కరించబడింది ');


      this.getLeaderswebsiteData();
    },
      error => {
      });
  }

  make(id: any) {
    this.formshow = id
  }

  confirm(id: any, index: any) {
    const confirm = this.alertCtrl.create({
      title: 'మీరు ఖచ్చితంగా నిర్ధారించాలనుకుంటున్నారా?',
      mode: 'ios',
      buttons: [
        {
          text: 'అవును, నిర్ధారించండి! ',
          handler: () => {
            this.conformleader(id, index);
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

  conformleader(id: any, index: any) {
    var data = {
      tableid: id,
      id: index,
      leadertype: this.leaderid
    }
    this.service.updateconsistency(data).subscribe(res => {
      alert('Request Accepted Successfully');
      this.getLeaderswebsiteData();
    },
      error => {
      });
  }

  isShowDiv = true;

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  personaldata() {
    var data = {
      usr_id: localStorage.getItem('usr_id'),
      category_id: localStorage.getItem('category_id'),
    }
    this.service.getuserprofilereport(data).subscribe((res: any) => {
      this.profiledata = res.data[0];
    })
  }

}
