import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { HomePage } from '../home/home';

/**
 * Generated class for the InstitutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-institute',
  templateUrl: 'institute.html',
})
export class InstitutePage {

  form: FormGroup

  districts: any;
  mandals: any;
  panchayati: any;
  constituency: any;
  denomation: any;
  ministryname: any;
  institutesdata: any = []
  fromshow: any = 1;
  institutedata: any = []


  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, public frombuilder: FormBuilder) {
    this.form = this.frombuilder.group({
      denomination_id: [''],
      ministry_id: [''],
      district_id: [''],
      constenncy_id: [''],
      mandal_id: [''],
      panchayati_id: [''],
      course_offered: [''],
      college_type: ['']
    })
  }

  ionViewDidLoad() {
    this.getdistric();
    this.getdenomations();
    this.getbeliver();
    this.getinstitutes();
  }

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  getinstitutes() {
    this.service.institutes().subscribe((res: any) => {
      this.institutesdata = res.data;
    })
  }

  getbeliver() {
    this.service.getbeliversdata().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.ministryname = res.data;
      }
    })
  }

  getdistric() {
    this.service.getdistrict().subscribe((res: any) => {
      this.districts = res.data;
    })
  }

  getmandals(event: any) {
    var id = event;
    this.service.getmandals().subscribe((res: any) => {
      this.mandals = res.data.filter((data: any) => data.const_id == id);
    })
  }

  getdenomations() {
    this.service.getdenomation().subscribe((res: any) => {
      this.denomation = res.data;
    })
  }

  getconstituency(event: any) {
    var id = event;
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
    })
  }

  getpanchayati(event: any) {
    var id = event;
    this.service.gepanchayatis().subscribe((res: any) => {
      this.panchayati = res.data.filter((data: any) => data.mndl_id == id);
    })
  }

  onSearch() {
    if (this.fromshow == 1) {
      this.fromshow = 2;
    } else {
      this.fromshow = 1;
    }
  }

  submitted: boolean = false;
  search() {
    this.submitted = true;
    if (this.form.invalid) {
      alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
    } else {
      this.service.Searchinstitute(this.form.value).subscribe((res: any) => {
        this.institutedata = [];
        if (res.status == 200) {
          this.institutedata = res.data;
          this.submitted = false;
          this.fromshow = 1;
        } else {
          alert('no data')
        }
      })
    }
  }

}
