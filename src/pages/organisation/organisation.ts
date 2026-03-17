import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-organisation',
  templateUrl: 'organisation.html',
})

export class OrganisationPage {

  districts: any;
  mandals: any;
  panchayati: any;
  district: any;
  constituency: any;
  denomation: any;
  form: any;
  bliversdata: any;
  services: any;
  ministryname: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, public formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      organisation_name: ['', [Validators.required]],
      checkbox: [''],
      believer_id: [''],
      pastor_id: [''],
      denomation: ['', [Validators.required]],
      org_address: [''],
      location: ['', [Validators.required]],
      contact_num: ['', [Validators.required, Validators.maxLength(10)]],
      email: [''],
      website: [''],
      service_name: ['', [Validators.required]],
      organizationtype: ['', [Validators.required]],
      ministry_id: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
     // retypepassword: ['', [Validators.required, Validators.minLength(6)]],
      districts: ['', [Validators.required]],
      constituencyname: ['', [Validators.required]],
      mandals: ['', [Validators.required]],
      panchayati: ['', [Validators.required]],
      villagename: ['', [Validators.required]],
      ward: ['', [Validators.required]],
      term: ['', [Validators.required]]
    })
  }

  ionViewDidLoad() {
    this.getdistric();
    this.getdenomations();
    this.getbelivers();
    this.getbeliver();
    this.getservice();
  }

  getbelivers() {
    this.service.getbelivers().subscribe((res: any) => {
      this.bliversdata = res.data;
    })
  }
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

  filterbelivers(inputValue: any) {
    let val = inputValue.value;
    if (val && val.trim() != '') {
      var reportdata = this.bliversdata.filter((item: any) => {
        return (item.fname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      this.bliversdata = reportdata;
    } else if (val == "") {
      this.getbelivers();
    }
  }

  submitted: boolean = false

  // Accept Input As a Number Only
  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  getservice() {
    this.service.getservices().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.services = res.data;
      }
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

  postindepedentorganisation() {
    this.submitted = true;
    if (this.form.invalid) {
      alert('please fiil the details ');
      return;
    } else if (this.form.value.password != this.form.value.retypepassword) {
      alert("Passwords are Unmatched");
    } else {
      this.service.postindepedentorganisation(this.form.value).subscribe((res: any) => {
        if (res.status == 451) {
          alert('ఇదే ఫోన్ నెంబర్ తో ఇంతకుముందే రిజిస్టర్ అయ్యారు');
        } else if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది');
          this.form.reset();
          this.submitted = false;
        } else {
          alert('Error');
        }
      })
    }
  }

}

