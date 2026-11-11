import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-wingcommand',
  templateUrl: 'wingcommand.html',
})
export class WingcommandPage {
  leders_array: any;
  category_id: any;
  profiledata: any = [];
  belearr: any = [];
  studentarr: any = [];
  pastorarr: any = [];
  teacherarr: any = [];
  formshow: any = 1;
  selectedUserType: string = 'believer';
  general: any = '';
  generals: any = '';
  leaders: any = '';
  wingtypes: any = '';
  leaderid: any;
  myresdata: any;
  cachedUserRes: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.formshow = 1;
  }

  resolveLeaderHierarchyStep(u: any): number {
    if (!u) return 0;
    const raw = String((u.generaltype !== undefined && u.generaltype !== null) ? u.generaltype : '').trim();
    const lower = raw.toLowerCase();
    if (raw.indexOf('రాష్ట్ర') !== -1 || lower.indexOf('state') !== -1) return 0;
    if (raw.indexOf('జిల్లా') !== -1 || lower.indexOf('dist') !== -1) return 1;
    if (raw.indexOf('నియోజకవర్గ') !== -1 || lower.indexOf('const') !== -1) return 2;
    if (raw.indexOf('మండల') !== -1 || lower.indexOf('mandal') !== -1 || lower.indexOf('municip') !== -1) return 3;
    if (raw.indexOf('పంచాయ') !== -1 || lower.indexOf('panchayat') !== -1 || lower.indexOf('village') !== -1) return 4;
    if (raw.indexOf('సబ్') !== -1 || lower.indexOf('subward') !== -1) return 6;
    if (raw.indexOf('వార్డు') !== -1 || lower.indexOf('ward') !== -1) return 5;

    const num = Number(raw);
    if (!isNaN(num) && raw !== '') {
      return num;
    }
    return 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WingcommandPage');
    this.category_id = localStorage.getItem("category_id");
    if (this.category_id === '4' || this.category_id === '3') {
      this.selectedUserType = 'pastor';
      this.formshow = 3;
    } else if (this.category_id === '2') {
      this.selectedUserType = 'student';
      this.formshow = 2;
    } else if (this.category_id === '9') {
      this.selectedUserType = 'teacher';
      this.formshow = 4;
    } else {
      this.selectedUserType = 'believer';
      this.formshow = 1;
    }
    this.getLeaderswebsiteData();
  }

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  getLeaderswebsiteData(forceUserType?: string) {
    const storedCat = localStorage.getItem("category_id");
    const storedUsrId = localStorage.getItem("usr_id");

    var data = {
      "category": storedCat,
      "usr_id": storedUsrId
    };

    this.service.getUserMainData(data).subscribe((res: any) => {
      if (!res || !res.data || res.data.length == 0) {
        const confirm = this.alertCtrl.create({
          title: 'మీరు జనరల్ లీడర్ (లేదా) వింగ్ లీడర్ కాదు?',
          mode: 'ios',
          buttons: [{ text: 'OK', handler: () => {} }]
        });
        confirm.present();
        this.navCtrl.push('HomePage');
        return;
      }

      this.cachedUserRes = res.data[0];
      const userRole = res.data[0].role;

      if (forceUserType) {
        this.selectedUserType = forceUserType;
        if (forceUserType === 'pastor') this.formshow = 3;
        else if (forceUserType === 'student') this.formshow = 2;
        else if (forceUserType === 'teacher') this.formshow = 4;
        else this.formshow = 1;
      } else {
        if (userRole === 'pastor' || storedCat === '4' || storedCat === '3') {
          this.selectedUserType = 'pastor';
          this.formshow = 3;
        } else if (userRole === 'student' || storedCat === '2') {
          this.selectedUserType = 'student';
          this.formshow = 2;
        } else if (userRole === 'teacher' || storedCat === '9') {
          this.selectedUserType = 'teacher';
          this.formshow = 4;
        } else {
          this.selectedUserType = 'believer';
          this.formshow = 1;
        }
      }

      this.fetchSubordinateRequests();
    });
  }

  fetchSubordinateRequests() {
    if (!this.cachedUserRes) return;
    const u = this.cachedUserRes;
    this.leaderid = u.leadertype || (this.selectedUserType === 'teacher' ? '1' : '');

    if (u.leadertype == 1 || (u.leadertype != 2 && this.selectedUserType === 'teacher')) {
      this.leaders = "Leader ";
    } else if (u.leadertype == 2) {
      this.leaders = "Wing ";
    }
    const step = this.resolveLeaderHierarchyStep(u);
    this.myresdata = step;

    let loader = this.loadingCtrl.create({
      content: 'డేటా లోడ్ అవుతోంది... (Loading data...)'
    });
    loader.present().catch(() => {});

    if (u.leadertype == 1 || (u.leadertype != 2 && this.selectedUserType === 'teacher')) {
      if (step == 0) {
        this.generals = "State";
        this.general = "District ";
      } else if (step == 1) {
        this.generals = "District";
        this.general = "Constituency ";
      } else if (step == 2) {
        this.generals = "Constituency";
        this.general = "Mandal ";
      } else if (step == 3) {
        this.generals = "Mandal ";
        this.general = "Panchayat ";
      } else if (step == 4) {
        this.generals = "Panchayat ";
        this.general = "Ward ";
      } else if (step >= 5) {
        this.generals = "Ward ";
        this.general = "";
      }

      var data = {
        "usr_id": localStorage.getItem("usr_id"),
        "category_id": localStorage.getItem("category_id"),
        "user_type": this.selectedUserType,
        "leadertype": u.leadertype || '1',
        "wingtypes": u.wingtypes,
        "generaltype": u.generaltype,
        state_id: u.state_id || 1,
        district_id: u.district_id,
        constituency_id: u.constituency_id,
        mandal_id: u.mandal_id,
        panchayat_id: u.village_id
      };

      this.service.getLeaderswebsiteD(data).subscribe((result: any) => {
        loader.dismiss().catch(() => {});
        const rawBelievers = (result && result.data && result.data[0]) ? result.data[0] : [];
        const rawPastors = (result && result.data && result.data[2]) ? result.data[2] : [];
        const rawStudents = (result && result.data && result.data[3]) ? result.data[3] : [];
        const rawTeachers = (result && result.data && result.data[4]) ? result.data[4] : [];

        if (this.selectedUserType === 'pastor') {
          this.pastorarr = rawPastors.filter((x: any) => Number((x && x.approval_ind)) !== 2);
          this.belearr = [];
          this.studentarr = [];
          this.teacherarr = [];
        } else if (this.selectedUserType === 'student') {
          this.studentarr = rawStudents.filter((x: any) => Number((x && x.approval_ind)) !== 2);
          this.belearr = [];
          this.pastorarr = [];
          this.teacherarr = [];
        } else if (this.selectedUserType === 'teacher') {
          this.teacherarr = rawTeachers.filter((x: any) => Number((x && x.approval_ind)) !== 2 && Number((x && x.d_in)) !== 1);
          this.belearr = [];
          this.pastorarr = [];
          this.studentarr = [];
        } else {
          this.belearr = rawBelievers.filter((x: any) => Number((x && x.approval_ind)) !== 2);
          this.pastorarr = [];
          this.studentarr = [];
          this.teacherarr = [];
        }
      }, () => {
        loader.dismiss().catch(() => {});
      });
    } else if (u.leadertype == 2) {
      this.wingtypes = u.wing_name || u.wingtypes || "";
      if (u.generaltype == 0) {
        this.generals = "State";
        this.general = "District";
      } else if (u.generaltype == 1) {
        this.generals = "District";
        this.general = "Constituency";
      } else if (u.generaltype == 2) {
        this.generals = "Constituency";
        this.general = "Mandal";
      } else if (u.generaltype == 3) {
        this.generals = "Mandal";
        this.general = "Panchayat";
      } else if (u.generaltype == 4) {
        this.generals = "Panchayat";
        this.general = "Ward";
      } else if (u.generaltype == 5 || u.generaltype == 6) {
        this.generals = "Ward";
        this.general = "";
      }

      var data4 = {
        "usr_id": localStorage.getItem("usr_id"),
        "category_id": localStorage.getItem("category_id"),
        "user_type": this.selectedUserType,
        "leadertype": u.leadertype,
        "wingtypes": u.wingtypes,
        "generaltype": u.generaltype,
        wingtype: u.wingtype,
        state_id: u.state_id || 1,
        district_id: u.district_id,
        constituency_id: u.constituency_id,
        mandal_id: u.mandal_id,
        panchayat_id: u.village_id
      };

      this.service.getLeaderswebsitewing(data4).subscribe((result: any) => {
        loader.dismiss().catch(() => {});
        loader.dismiss().catch(() => {});
        const rawBelievers = result.data[0] || [];
        const rawStudents = result.data[1] || [];
        const rawPastors = result.data[2] || [];

        if (this.selectedUserType === 'pastor') {
          this.pastorarr = rawPastors.filter((x: any) => Number((x && x.approval_ind)) !== 2);
          this.belearr = [];
          this.studentarr = [];
          this.teacherarr = [];
        } else if (this.selectedUserType === 'student') {
          this.studentarr = rawStudents.filter((x: any) => Number((x && x.approval_ind)) !== 2);
          this.belearr = [];
          this.pastorarr = [];
          this.teacherarr = [];
        } else {
          this.belearr = rawBelievers.filter((x: any) => Number((x && x.approval_ind)) !== 2);
          this.pastorarr = [];
          this.studentarr = [];
          this.teacherarr = [];
        }
      });
    }
  }

  deleteAlert(id: any, index: any) {
    const confirm = this.alertCtrl.create({
      title: 'Are you sure to reject?',
      mode: 'ios',
      buttons: [
        {
          text: 'అవును, తిరస్కరించండి!',
          handler: () => {
            this.deleteleader(id, index);
          }
        },
        { text: 'No', handler: () => {} }
      ]
    });
    confirm.present();
  }

  deleteleader(id: any, index: any) {
    var data = {
      tableid: id,
      id: index,
      leadertype: this.leaderid
    };
    this.service.deleteleaders(data).subscribe(res => {
      this.fetchSubordinateRequests();
    });
  }

  make(id: any) {
    this.formshow = id;
    if (id == 1) {
      this.selectedUserType = 'believer';
      this.pastorarr = [];
      this.studentarr = [];
      this.teacherarr = [];
    } else if (id == 3) {
      this.selectedUserType = 'pastor';
      this.belearr = [];
      this.studentarr = [];
      this.teacherarr = [];
    } else if (id == 2) {
      this.selectedUserType = 'student';
      this.belearr = [];
      this.pastorarr = [];
      this.teacherarr = [];
    } else if (id == 4) {
      this.selectedUserType = 'teacher';
      this.belearr = [];
      this.pastorarr = [];
      this.studentarr = [];
    }
    this.fetchSubordinateRequests();
  }

  confirm(id: any, index: any) {
    const confirm = this.alertCtrl.create({
      title: 'మీరు ఖచ్చితంగా నిర్ధారించాలనుకుంటున్నారా?',
      mode: 'ios',
      buttons: [
        {
          text: 'అవును, నిర్ధారించండి!',
          handler: () => {
            this.conformleader(id, index);
          }
        },
        { text: 'No', handler: () => {} }
      ]
    });
    confirm.present();
  }

  conformleader(id: any, index: any) {
    var data = {
      tableid: id,
      id: index,
      leadertype: this.leaderid
    };
    this.service.updateconsistency(data).subscribe(res => {
      this.fetchSubordinateRequests();
    });
  }

  getSubordinateSubtitle(): string {
    if (this.myresdata == 0) return 'జిల్లాల వారిగా (District-wise)';
    if (this.myresdata == 1) return 'నియోజకవర్గాల వారిగా (Constituency-wise)';
    if (this.myresdata == 2) return 'మండలాల వారిగా (Mandal-wise)';
    if (this.myresdata == 3) return 'పంచాయితీల వారిగా (Panchayat-wise)';
    if (this.myresdata == 4) return 'వార్డుల వారిగా (Ward-wise)';
    return 'సబార్డినేట్స్ వారిగా';
  }

  getDetailedLeaderStatus(x: any): string {
    if (!x) return 'లీడర్ (Leader)';
    const isWing = String(x.leadertype) === '2' || (x.wingtype && x.wingtype !== 'null' && String(x.wingtype).trim() !== '') || (x.wingtypes && x.wingtypes !== 'null' && String(x.wingtypes).trim() !== '');
    if (isWing) return (x.wing_name || 'వింగ్') + ' లీడర్';
    const gType = String(x.generaltype || '').trim();
    const gLower = gType.toLowerCase();
    const isTeacherRow = this.selectedUserType === 'teacher' || x.role === 'teacher' || String(x.table_name || '') === 'teacher_reg';

    if (gType.indexOf('రాష్ట్ర') !== -1 || gLower.indexOf('state') !== -1 || (isTeacherRow ? gType === '1' : gType === '0')) return 'రాష్ట్ర లీడర్';
    if (gType.indexOf('జిల్లా') !== -1 || gLower.indexOf('dist') !== -1 || (isTeacherRow ? gType === '2' : gType === '1')) return 'జిల్లా లీడర్';
    if (gType.indexOf('నియోజకవర్గ') !== -1 || gLower.indexOf('const') !== -1 || (isTeacherRow ? gType === '3' : gType === '2')) return 'నియోజకవర్గ లీడర్';
    if (gType.indexOf('మండల') !== -1 || gLower.indexOf('mandal') !== -1 || gLower.indexOf('municip') !== -1 || (isTeacherRow ? gType === '4' : gType === '3')) return 'మండల లీడర్';
    if (gType.indexOf('పంచాయ') !== -1 || gLower.indexOf('panchayat') !== -1 || gLower.indexOf('village') !== -1 || (isTeacherRow ? gType === '5' : gType === '4')) return 'గ్రామ / పంచాయితీ లీడర్';
    if (gType.indexOf('వార్డు') !== -1 || gLower.indexOf('ward') !== -1 || (isTeacherRow ? gType === '6' : (gType === '5' || gType === '6'))) return 'వార్డు లీడర్';
    return 'జనరల్ లీడర్';
  }

  isShowDiv = true;
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  personaldata() {
    var data = {
      usr_id: localStorage.getItem('usr_id'),
      category_id: localStorage.getItem('category_id'),
    };
    this.service.getuserprofilereport(data).subscribe((res: any) => {
      this.profiledata = res.data[0];
    });
  }
}
