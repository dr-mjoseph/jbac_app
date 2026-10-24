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
  showSpinner: boolean = false;

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
     retypepassword: ['', [Validators.required, Validators.minLength(6)]],
      state_id: ['', [Validators.required]],
      districts: ['', [Validators.required]],
      constituencyname: ['', [Validators.required]],
      mandals: ['', [Validators.required]],
      panchayati: ['', [Validators.required]],
      villagename: ['', [Validators.required]],
      ward: ['', [Validators.required]],
      term: [true]
    })
  }

  
  getorganizationpastors: any = [];
  
  onStateChange(event: any) {
    var stateId = event;
    this.form.patchValue({
      state_id: stateId,
      districts: '',
      constituencyname: '',
      mandals: '',
      panchayati: ''
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
  getorgnaziationpstorsget() {
    this.service.getpastor().subscribe((res: any) => {
      this.getorganizationpastors = res && res.data ? res.data : [];
    });
  }

  ionViewDidLoad() {
    this.getorgnaziationpstorsget();
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

  getconstency(event: any) {
    var id = event;
    this.form.patchValue({
      constituencyname: '',
      mandals: '',
      panchayati: ''
    });
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
    this.form.patchValue({
      mandals: '',
      panchayati: ''
    });
    this.mandals = [];
    this.panchayati = [];
    if (!id) return;
    this.service.getmandals().subscribe((res: any) => {
      this.mandals = res.data.filter((data: any) => data.const_id == id);
    })
  }

  gepanchayati(event: any) {
    var id = event;
    this.form.patchValue({
      panchayati: ''
    });
    this.panchayati = [];
    if (!id) return;
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
      } else this.showSpinner = false;
          if (res.status == 200) {
        this.services = res.data;
      }
    })
  }

  getbeliver() {
    this.service.getbeliversdata().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else this.showSpinner = false;
          if (res.status == 200) {
        this.ministryname = res.data;
      }
    })
  }

  postindepedentorganisation() {
    this.showSpinner = true;
    this.submitted = true;
    if (!this.form.get('term') || !this.form.get('term').value) {
      this.form.patchValue({ term: true });
    }
    if (this.form.invalid) {
      alert('please fiil the details ');
      return;
    } else if (this.form.value.password != this.form.value.retypepassword) {
      alert("Passwords are Unmatched");
    } else {
      this.service.postindepedentorganisation(this.form.value).subscribe((res: any) => {
        this.showSpinner = false;
          if (res.status == 451) {
          alert('ఇదే ఫోన్ నెంబర్ తో ఇంతకుముందే రిజిస్టర్ అయ్యారు');
        } else this.showSpinner = false;
          if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది');
          this.form.reset({
            term: true
          });
          this.mandals = [];
          this.constituency = [];
          this.panchayati = [];
          this.submitted = false;
        } else {
          alert('Error');
        }
      })
    }
  }

}

