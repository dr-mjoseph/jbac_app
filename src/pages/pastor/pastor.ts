import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the PastorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pastor',
  templateUrl: 'pastor.html',
})
export class PastorPage {
  form: FormGroup
  districts: any;
  mandals: any;
  panchayati: any;
  district: any;
  constituency: any;
  denomation: any;
  bliversdata: any;
  wings: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, public formBuilder: FormBuilder) {


    this.form = this.formBuilder.group({
      pastorname: ['', [Validators.required]],
      dob: [''],
      about_desp: [''],
      gender: [''],
      phonenumber: ['', [Validators.required, Validators.maxLength(10)]],
      phonenumber2: [''],
      pa_phonenumber: [''],
      staus: [''],
      designation: [''],
      caste: [''],
      nativeplace: [''],
      talent: [''],
      education: [''],
      district_id: ['', [Validators.required]],
      constituency_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      panchayat_id: ['', [Validators.required]],
      ward: [''],
      youtubechanel: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      //// retypepassword: ['', [Validators.required, Validators.minLength(6)]],
      leaders: ['', [Validators.required]],
      leadertype: [''],
      generaltype: ['',],
      wingtype: ['',],
      facebook: [''],
      god: [''],
      //  // term: ['', [Validators.required]],
      lifegoal: [''],
      denomination_id: ['', [Validators.required]],
      villagename: ['', [Validators.required]],
      wingtypes: [''],
      pastortype: [''],
      ministry_id: [''],
      subward: [''],
      subcaste: ['']
    })
  }

  ionViewDidLoad() {
    this.getdistric();
    this.getdenomations();
    this.getbelivers();
    this.getwing();
    // this.getservice();
  }

  getwing() {
    this.service.getwing().subscribe((res: any) => {
      this.wings = res.data;
    })
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

  // Accept Input As a Number Only
  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
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
    var a = event.value
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
  onparent(event: any) {
    var parents = event.value
    if (parents == 'YES') {
      this.father = true
    } else {
      this.father = false
    }
  }

  subwardevent(event: any) {
  }

  onsubward(event: any) {
    var s = event
    if (s == '6') {
      this.subward = true;
    } else {
      this.subward = false;
    }

  }

  onradioleadertype(event: any) {
    var a = event.value
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
  submitted: boolean = false
  postchurchregister() {

    this.submitted = true;
    if (this.form.invalid) {
      alert('* ఉన్న తప్పనిసరి  ఫీల్డ్స్ ఎంటర్ చేయండి');
      return;
    } 
    // else if (this.form.value.password != this.form.value.retypepassword) {
    //   alert("Passwords are Unmatched")
    // }

    else {
      this.service.postpastor(this.form.value).subscribe((res: any) => {
        if (res.status == 451) {
          alert('ఇదే ఫోన్ నెంబర్ తో ఇంతకుముందే రిజిస్టర్ అయ్యారు')
        } else if (res.status == 200) {
          alert(' విజయవంతముగా నమోదు చేయబడింది, మీ ఫోన్ నెంబర్ మరియు పాస్వర్డ్ తో లాగిన్ అవగలరు ')
          // this.router.navigate(['/profile'], { queryParams: { id: "1" } });
          this.form.reset();
          this.submitted = false;
        }
      },
        error => {
        })
    }
  }
}
