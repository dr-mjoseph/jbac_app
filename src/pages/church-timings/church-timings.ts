import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, ModalController, NavController, NavParams, ToastController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-church-timings',
  templateUrl: 'church-timings.html',
})
export class ChurchTimingsPage {

  mandals: any;
  constituency: any;
  panchayati: any;
  districts: any;
  church: any;
  searchdist: any;
  searchconts: any;
  searchchurchingform: FormGroup;
  denomationid: any;
  denomation: any;
  ministryname: any;
  submitted: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public toastCtrl: ToastController, public service: ServiceProvider, public modalCtrl: ModalController, public alertCtrl: AlertController) {

    this.searchchurchingform = this.formBuilder.group({
      district_id: ['', [Validators.required]],
      constenncy_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      typetime: ['1'],
      panchayati_id: [''],
      denomationid: [''],
      ministry_id: [''],
      day: [''],
    })
  }

  fromshow: any = 1;

  onSearch() {
    if (this.fromshow == 1) {
      this.fromshow = 2;
    } else {
      this.fromshow = 1;
    }
  }

  ionViewDidLoad() {
    this.getdistric();
    // this.churchtimings();
    this.getdenomations();
    this.getbeliver();
    this.getadds();
    this.search();
  }

  gotohome() {
    this.navCtrl.push('HomePage');
  }


  get h() { return this.searchchurchingform.controls; }

  getbeliver() {
    this.service.getbeliversdata().subscribe((res: any) => {
      if (res.status == 202) {
        const confirm = this.alertCtrl.create({
          mode: 'ios',
          title: res.message
        })
        confirm.present();
      } else if (res.status == 200) {
        this.ministryname = res.data;
      }
    })
  }

  getdistric() {
    this.service.getdistrict().subscribe((res: any) => {
      if (res.status == 202) {
        const confirm = this.alertCtrl.create({
          mode: 'ios',
          title: res.message
        })
        confirm.present();
      } else if (res.status == 200) {
        this.districts = res.data;
      }
    })
  }

  getmandals(event: any) {
    var id = event;
    this.service.getmandals().subscribe((res: any) => {
      if (res.status == 202) {
        const confirm = this.alertCtrl.create({
          mode: 'ios',
          title: res.message
        })
        confirm.present();
      } else if (res.status == 200) {
        this.mandals = res.data.filter((data: any) => data.const_id == id);
      }
    })
  }

  getconstency(event: any) {
    var id = event;
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
    });
  }

  gepanchayati(event: any) {
    var id = event;
    this.service.gepanchayatis().subscribe((res: any) => {
      if (res.status == 202) {
        const confirm = this.alertCtrl.create({
          mode: 'ios',
          title: res.message
        })
        confirm.present();
      } else if (res.status == 200) {
        this.panchayati = res.data.filter((data: any) => data.mndl_id == id);
      }
    })
  }

  ministry_id: any;
  day: any;

  churchtimings() {
    this.service.getchurches().subscribe(res => {
      if (res.status == 202) {
        const confirm = this.alertCtrl.create({
          mode: 'ios',
          title: res.message
        })
        confirm.present();
      } else if (res.status == 200) {
        this.church = res.data;
      }
    })
  }

  search() {

    console.log(this.searchchurchingform.value);

    this.service.searchingchurchdata(this.searchchurchingform.value).subscribe((res: any) => {
      this.church = [];
      if (res.status == 200 && res.data.length != 0) {
        this.church = res.data;
        this.submitted = false;
      } else {
        const confirm = this.alertCtrl.create({
          mode: 'ios',
          title: 'డేటా లేదు'
        })
        confirm.present();
      }
    })
  }

  isShowDiv = true;

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  getdenomations() {
    this.service.getdenomation().subscribe((res: any) => {
      this.denomation = res.data;
    })
  }

  reset() {
    this.searchchurchingform.reset();
  }

  hidefrom() {
    this.fromshow = 1;
  }

  village_id: any;
  adds: any;

  getadds() {
    this.service.getadds().subscribe((res: any) => {

      if (res.status == 202) {
        const confirm = this.alertCtrl.create({
          mode: 'ios',
          title: res.message
        })
        confirm.present();
      } else if (res.status == 200) {
        this.church = res.data;
      }
    })
  }

  of() {
    const confirm = this.alertCtrl.create({
      mode: 'ios',
      title: 'Link not Found'
    })
    confirm.present();
  }

}