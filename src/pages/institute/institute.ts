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

  isShowDiv: boolean = true;
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }


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
      state_id: [''],
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

  onStateChange(event: any) {
    var stateId = event;
    this.form.patchValue({
      state_id: stateId,
      district_id: '',
      constenncy_id: '',
      mandal_id: '',
      panchayati_id: ''
    });
    this.districts = [];
    this.constituency = [];
    this.mandals = [];
    this.panchayati = [];
    if (stateId) {
      this.service.getdistrict(stateId).subscribe((res: any) => {
        if (res && res.status == 200) {
          this.districts = res.data;
        }
      });
    }
  }

  ionViewDidLoad() {
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
    this.service.getdistrict(this.form.value.state_id || 1).subscribe((res: any) => {
      this.districts = res.data;
    })
  }

  getconstituency(event: any) {
    var id = event;
    this.form.patchValue({
      constenncy_id: '',
      mandal_id: '',
      panchayati_id: ''
    });
    this.constituency = [];
    this.mandals = [];
    this.panchayati = [];
    if (id) {
      this.service.getconsistencys().subscribe((res: any) => {
        if (res && res.data) {
          this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
        }
      });
    }
  }

  getmandals(event: any) {
    var id = event;
    this.form.patchValue({
      mandal_id: '',
      panchayati_id: ''
    });
    this.mandals = [];
    this.panchayati = [];
    if (id) {
      this.service.getmandals().subscribe((res: any) => {
        if (res && res.data) {
          this.mandals = res.data.filter((data: any) => data.const_id == id);
        }
      });
    }
  }

  getpanchayati(event: any) {
    var id = event;
    this.form.patchValue({
      panchayati_id: ''
    });
    this.panchayati = [];
    if (id) {
      this.service.gepanchayatis().subscribe((res: any) => {
        if (res && res.data) {
          this.panchayati = res.data.filter((data: any) => data.mndl_id == id);
        }
      });
    }
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
