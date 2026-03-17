import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-believer',
  templateUrl: 'believer.html',
})
export class BelieverPage {
  showSpinner: boolean = false;
  extension: boolean = false;
  submitted: boolean = false;
  form_ind: any;
  beliverform: any;
  denomation: any;
  pattern: any;
  districts: any;
  mandals: any;
  panchayati: any;
  bliversdata: any;
  district: any;
  constituency: any;
  panchayatis: any;
  imagedata: any = [];
  wings: any;
  now: any;
  ministryname: any;
  constituency_id: any;
  services: any;
  id: any;
  form: FormGroup;
  // <span style="color:red;"> *</span>
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public service: ServiceProvider, public alertCtrl: AlertController) {

    this.form = this.formBuilder.group({
      fname: ['', Validators.required], //
      whatsapp: [''],
      dob: [''],
      gender: ['',],
      mobile_number: ['', Validators.required], //
      status: [''], //
      income: [''],
      caste: [''],
      subcaste: [''],
      nativeplace: [''],
      talent: ['', Validators.required], //
      education: ['', Validators.required], //
      designation: ['', Validators.required], //
      dpartment: ['', Validators.required], //
      districts: ['', Validators.required], //
      mandals: ['', Validators.required], //
      panchayati: ['', Validators.required], //
      constituencyname: ['', Validators.required], //
      villagename: ['', Validators.required], //
      wardnumber: [''],
      ward: ['', Validators.required], //
      nri: ['', Validators.required], //
      leadership: ['', Validators.required], //
      leadertype: [''],
      generaltype: [''],
      subward: [''],
      wingtype: [''],
      denomination_id: ['', Validators.required], //
      hobbies: [''],
      spirit: [''],
      lifegoal: [''],
      church: [''],
      pastor: [''],
      youtube: [''], 
      lname: [''],
      god: [''],
      term: ['', Validators.required], //
      password: ['', Validators.required],
      retypepassword: ['', Validators.required],
    });
    this.form.reset();
  }

  gotohome() {
    this.navCtrl.push('FormsPage');
  }

  ionViewDidLoad() {
    this.getdistric();
    this.getdenomations();
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

  getconstency(event: any) {
    var id = event;
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
    })
  }

  gepanchayati(event: any) {
    var id = event;
    this.service.gepanchayatis().subscribe((res: any) => {
      this.panchayati = res.data.filter((data: any) => data.mndl_id == id);
    })
  }

  getpastorsdatas: any;

  getpastorsdata() {
    if (this.beliverform.value.districts == null || this.beliverform.value.constituencyname == null || this.beliverform.value.mandals == null) {
      alert("Please Fill the Districts, Constituency & Mandal")
    } else {
      var data = {
        districts: this.beliverform.value.districts,
        constituencyname: this.beliverform.value.constituencyname,
        mandal_id: this.beliverform.value.mandals,
      }
      this.service.getpastorsfilters(data).subscribe((res: any) => {
        this.getpastorsdatas = res.data;
      })
    }
  }

  lead: boolean = false;
  mini: boolean = false;
  assicoation: boolean = false;
  leadtype: boolean = false;
  wingtype: boolean = false;
  wingtypes: boolean = false;
  subward: boolean = false;
  father: boolean = false;

  onradiochange(event: any) {
    var a = event.target.value
    console.log(a);

    if (a == 'YES') {
      this.lead = true
    }

    if (a == 'NO') {
      this.lead = false
      this.leadtype = false
      this.wingtype = false
      this.wingtypes = false
      this.subward = false
    }
  }

  onsubward(event: any) {
    var s = event
    if (s == '6') {
      this.subward = true
    } else {
      this.subward = false
    }
  }

  onradioleadertype(event: any) {
    var a = event.target.value;
    if (a == '1') {
      this.leadtype = true
      this.wingtype = false
      this.wingtypes = false
      this.subward = true
    } else {
      this.leadtype = false
      this.wingtype = true
      this.wingtypes = true
      this.subward = false
    }
  }

  postbeliversignup() {
    this.submitted = true;
    if (this.form.invalid) {
      const confirm = this.alertCtrl.create({
        mode: 'ios',
        title: 'దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి.!'
      })
      confirm.present();
      setTimeout(() => { confirm.dismiss(); }, 2000);
    } else  if (this.form.value.password != this.form.value.retypepassword) {
      alert("Passwords are Unmatched")
    } else {

      console.log(this.form.value);
      
      this.service.postbeliver(this.form.value).subscribe((res: any) => {
        if (res.status == 451) {
          alert('ఇదే ఫోన్ నెంబర్ తో ఇంతకుముందే రిజిస్టర్ అయ్యారు');
        } else if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది');
          this.form.reset();
          this.submitted = false;
        } else {
          alert('server down');
        }
      })

    }
  }

  togglePasswordVisibility(inputField: string) {
    const input = document.querySelector(`ion-input[formControlName='${inputField}'] input`);
    const icon = document.querySelector(`ion-input[formControlName='${inputField}'] ion-icon`);

    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
      icon.setAttribute('name', 'eye-off');
    } else {
      input.setAttribute('type', 'password');
      icon.setAttribute('name', 'eye');
    }
  }

}
