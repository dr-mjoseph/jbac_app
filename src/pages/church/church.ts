import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-church',
  templateUrl: 'church.html',
})
export class ChurchPage {
  form: FormGroup

  districts: any;
  mandals: any;
  panchayati: any;
  district: any;
  constituency: any;
  denomation: any;
  submitted: boolean = false
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public service: ServiceProvider) {

    this.form = this.formBuilder.group({
      church_name: ['', [Validators.required]],
      denomination_id: ['', [Validators.required]],
      total_members: ['', [Validators.required]],
      district_id: ['', [Validators.required]],
      constituency_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      village_id: ['', [Validators.required]],
      street: ['', [Validators.required]],
      pastor_id: [''],
      location: [''],
      contactnumber: ['', [Validators.required]],
      description: [''],
      ministry_id: [''],
      churchtype: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
     // retypepassword: ['', [Validators.required, Validators.minLength(6)]],
      facebook: [''],
      youtube: [''],
      remarks: [''],
      village_name: ['', [Validators.required]],
       // term: ['', [Validators.required]],
    })
  }


  gotohome() {
    this.navCtrl.push('FormsPage');
  }
  ionViewDidLoad() {
    this.getdistric();
    this.getdenomations();
    this.getbeliver()
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

  ministryname: any
  getbeliver() {
    this.service.getbeliversdata().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.ministryname = res.data;
      }
    })
  }

  postchurchregister() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.invalid) {
      alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
      return;
    } else if (this.form.value.password != this.form.value.retypepassword) {
      alert("Passwords are Unmatched")
    } else {
      console.log(this.form.value);
      this.service.postchurchregister(this.form.value).subscribe((res: any) => {
        if (res.status == 451) {
          alert('ఇదే ఫోన్ నెంబర్ తో ఇంతకుముందే రిజిస్టర్ అయ్యారు')
        } else if (res.status == 200) {
          alert('Your Church is Submited Successfully,Please Submit your Church Service Timings')
          // this.router.navigate(['/profile'], { queryParams: { id: "1" } });
          this.form.reset();
          this.submitted = false;
        }
      })
    }
  }

  
  getchurchpastors: any;
  churchpastorfilter() {
    if (this.form.value.district_id == null || this.form.value.constituency_id == null) {
      alert("Please Fill the Districts, Constituency & Mandal")
    } else {
      var data = {
        districts: this.form.value.district_id,
        constituencyname: this.form.value.constituency_id,
        mandal_id: this.form.value.mandal_id,
      }
      console.log(data);
      this.service.getpastorsfilters(data).subscribe((res: any) => {
        this.getchurchpastors = res.data;
      })
    }
  }


}
