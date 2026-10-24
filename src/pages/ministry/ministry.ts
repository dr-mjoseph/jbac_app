import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the MinistryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ministry',
  templateUrl: 'ministry.html',
})
export class MinistryPage {
  showSpinner: boolean = false;
  submitted: boolean = false;
  ministryform: FormGroup
  districts: any;
  mandals: any;
  panchayati: any;
  constituency: any;
  denomation: any
  get r() { return this.ministryform ? this.ministryform.controls : {}; }

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public service: ServiceProvider) {
    this.ministryform = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      denomation: ['', [Validators.required]],
      ministryemail: [''],
      ministrywebsite: [''],
      headnmber: ['', [Validators.required, Validators.maxLength(10)]],
      number_ofchurches: ['', [Validators.required]],
      number_ofmembers: ['', [Validators.required]],
      state_id: ['1'],
      district_id: ['', [Validators.required]],
      constituency_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      panchayat_id: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     retypepassword: ['', [Validators.required, Validators.minLength(6)]],
      pastor: [''],
      description: [''],
       term: [true]
    });
  }

  ionViewDidLoad() {
    this.getdistric();
    this.getdenomations();
  }

  onStateChange(event: any) {
    const stateId = (event && event.target) ? event.target.value : event;
    if (this.ministryform) {
      this.ministryform.patchValue({
        state_id: stateId,
        district_id: '',
        constituency_id: '',
        mandal_id: '',
        panchayat_id: ''
      });
    }
    this.districts = [];
    this.constituency = [];
    this.mandals = [];
    this.panchayati = [];
    this.service.getdistrict(stateId).subscribe((res: any) => {
      if (res && res.status == 200) {
        this.districts = res.data;
      }
    }, (error: any) => {
      console.log(error);
    });
  }

  getdistric() {
    this.service.getdistrict(1).subscribe((res: any) => {
      this.districts = res.data;
    })
  }

  getconstency(event: any) {
    var id = event;
    if (this.ministryform) {
      this.ministryform.patchValue({
        constituency_id: '',
        mandal_id: '',
        panchayat_id: ''
      });
    }
    this.constituency = [];
    this.mandals = [];
    this.panchayati = [];
    if (!id) return;
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
    })
  }

  getmandals(event: any) {
    var id = event;
    if (this.ministryform) {
      this.ministryform.patchValue({
        mandal_id: '',
        panchayat_id: ''
      });
    }
    this.mandals = [];
    this.panchayati = [];
    if (!id) return;
    this.service.getmandals().subscribe((res: any) => {
      this.mandals = res.data.filter((data: any) => data.const_id == id);
    })
  }

  getdenomations() {
    this.service.getdenomation().subscribe((res: any) => {
      this.denomation = res.data;
    })
  }

  gepanchayati(event: any) {
    var id = event;
    if (this.ministryform) {
      this.ministryform.patchValue({
        panchayat_id: ''
      });
    }
    this.panchayati = [];
    if (!id) return;
    this.service.gepanchayatis().subscribe((res: any) => {
      this.panchayati = res.data.filter((data: any) => data.mndl_id == id);
    })
  }

  postministrysignup() {
    this.showSpinner = true;
    if (this.ministryform.invalid) {
      alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
    } else if (this.ministryform.value.password != this.ministryform.value.retypepassword) {
      alert("Passwords are Unmatched");
    } else {
      this.service.postministrysignup(this.ministryform.value).subscribe((res: any) => {
        this.showSpinner = false;
          if (res.status == 451) {
          alert('ఇదే ఫోన్ నెంబర్ తో ఇంతకుముందే రిజిస్టర్ అయ్యారు');
        } else this.showSpinner = false;
          if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది');
          this.mandals = [];
          this.constituency = [];
          this.panchayati = [];
          this.submitted = false;
        } else {
          alert('server down');
        }
      })
    }
  }

  getministrypastors: any;
  ministrypastorsfilterdata() {
    if (this.ministryform.value.district_id == null || this.ministryform.value.constituency_id == null || this.ministryform.value.mandal_id == null) {
      alert("Please Fill the Districts, Constituency & Mandal")
    } else {
      var data = {
        districts: this.ministryform.value.district_id,
        constituencyname: this.ministryform.value.constituency_id,
        mandal_id: this.ministryform.value.mandal_id,
      }
      this.service.getpastorsfilters(data).subscribe((res: any) => {
        this.getministrypastors = res.data;
      })
    }
  }

  // Accept Input As a Number Only
  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }


  gotohome() {
    this.navCtrl.push('FormsPage');
  }

}
