import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the AssociationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-association',
  templateUrl: 'association.html',
})
export class AssociationPage {
  form: FormGroup
  districts: any;
  mandals: any;
  panchayati: any;
  district: any;
  constituency: any;
  denomation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public service: ServiceProvider) {

    this.form = this.formBuilder.group({
      pa_name: ['', [Validators.required]],
      pastor_id: [''],
      level: [''],
      pa_president:['', [Validators.required, Validators.maxLength(10)]],
      pa_secretory: [''],
      phonenumber: [''],
      std_phonenumber: [''],
      whatsapp_number: [''],
      totalleadrs: [''],
      address: [''],
      district_id: ['', [Validators.required]],
      constituency_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      village_id: [''],
      website: [''],
      workingareas: [''],
      description: [''],
      password: [''],
      //retypepassword: ['', [Validators.required, Validators.minLength(6)]],
      term: [''],

    })
  }


  ionViewDidLoad() {
    this.getdistric();
    this.getdenomations();
    // this.getbelivers();
    // this.getbeliver();
    // this.getservice();
  }

  // getbelivers() {
  //   this.service.getbelivers().subscribe((res: any) => {
  //     this.bliversdata = res.data;
  //   })
  // }
  gotohome() {
    this.navCtrl.push('FormsPage');
  }

  getdenomations() {
    this.service.getdenomation().subscribe((res: any) => {
      this.denomation = res.data;
    })
  }

  getdistric() {
    this.service.getdistrict().subscribe((res: any) => {
      this.districts = res.data;
    })
  }

  getconstency(event: any) {
    var id = event;
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
    })
  }

  getmandals(event: any) {
    var id = event;
    this.service.getmandals().subscribe((res: any) => {
      this.mandals = res.data.filter((data: any) => data.const_id == id);
    })
  }

  gepanchayati(event: any) {
    var id = event;
    this.service.gepanchayatis().subscribe((res: any) => {
      this.panchayati = res.data.filter((data: any) => data.mndl_id == id);
    })
  }

  submitted: boolean = false;

  postpastorassociations() {
    this.submitted = true;
    if (this.form.invalid) {
      alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
      return;
    }
    //  else if (this.form.value.password != this.form.value.retypepassword) {
    //   alert("Passwords are Unmatched")
    // }
    else {
      this.service.postpastorassociationss(this.form.value).subscribe((res: any) => {
        if (res.status == 451) {
          alert('ఇదే ఫోన్ నెంబర్ తో ఇంతకుముందే రిజిస్టర్ అయ్యారు')
        } else if (res.status == 200) {
          alert('Submited Successfully')
          this.form.reset();
          this.submitted = false;
        }
      })
    }
  }

  // Accept Input As a Number Only
  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  getpastorassciationas: any;
  pastorassociationpastorfilter() {
    if (this.form.value.district_id == null || this.form.value.constituency_id == null || this.form.value.mandal_id == null) {
      alert("Please Fill the Districts, Constituency & Mandal")
    } else {
      var data = {
        districts: this.form.value.district_id,
        constituencyname: this.form.value.constituency_id,
        mandal_id: this.form.value.mandal_id,
      }
      this.service.getpastorsfilters(data).subscribe((res: any) => {
        this.getpastorassciationas = res.data;
      })
    }
  }


}
