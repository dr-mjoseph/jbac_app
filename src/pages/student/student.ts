import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  showSpinner: boolean = false;

  now: any;
  denomation: any = []
  studentform: FormGroup;
  submitted: boolean = false;
  
  constituency1:any=[];
  mandals1:any=[];
  panchayati1:any=[];
  states: any = [
    { id: 1, state_name: 'ఆంధ్రప్రదేశ్ (Andhra Pradesh - AP)' },
    { id: 2, state_name: 'తెలంగాణ (Telangana - TG)' }
  ];
  districts: any;
  mandals: any;
  panchayati: any;
  district: any;
  constituency: any;
  wingtype: any = false;
  wings: any;
  father: any;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public service: ServiceProvider, public alertCtrl: AlertController) {
    this.studentform = this.formBuilder.group({
      studentname: ['', [Validators.required]],
      number: ['', [Validators.required]],
      study: ['', [Validators.required]],
      schname: ['', [Validators.required]],
      fathername: ['', [Validators.required]],
      aboutyourself: [''],
      nativeplace: [''],
      caste: [''],
      talent: [''],
      tmarks: [''],
      mmarks: [''],
      branch: [''],
      state_id: ['1'],
      district_id: ['', [Validators.required]],
      constituency_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      village_id: ['', [Validators.required]],
      password: ['', [Validators.required]],
      retypepassword: ['', [Validators.required]],
      church: ['',],
      pastor: [''],
      leadership: ['', [Validators.required]],
      leadertype: ['2'],
      generaltype: [''],
      wingtype: ['',],
      wingtypes: [''],
      dob: [''],
      denomination_id: [''],
      hobbies: [''],
      spirti: [''],
      lifegoal: [''],
      whatsappnumber: [''],
      nri: ['', [Validators.required]],
      ward: ['', [Validators.required]],
      wardnumber: [''],
      villagename: ['', [Validators.required]],
      respanchayati: ['', [Validators.required]],
      resmandals: ['', [Validators.required]],
      resconstituencyname: ['', [Validators.required]],
      res_state_id: ['1'],
      resdistricts: ['', [Validators.required]],
      god: [''],
      term: [true],
      mother: [''],
      orphon: [''],
      subcaste: [''],
      gender: ['']
    })

    this.studentform.reset({ term: true });

    const datePipe = new DatePipe('en-Us');
    this.now = datePipe.transform(new Date(), 'yyyy-MM-dd');

  }

  ionViewDidLoad() {
    this.getdistric();
    this.getdenomations();
    this.getwing()
  }

  getdenomations() {
    this.service.getdenomation().subscribe((res: any) => {
      this.denomation = res.data;
    })
  }
    getstates() {
    this.service.getstates().subscribe((res: any) => {
      if (res && res.data) {
        this.states = res.data;
      }
    });
  }

  onStateChange(event: any) {
    this.studentform.patchValue({
      district_id: '',
      constituency_id: '',
      mandal_id: '',
      village_id: ''
    });
    this.constituency = [];
    this.mandals = [];
    this.panchayati = [];
    this.getdistric(event);
  }

  onResStateChange(event: any) {
    this.studentform.patchValue({
      resdistricts: '',
      resconstituencyname: '',
      resmandals: '',
      respanchayati: ''
    });
    this.constituency1 = [];
    this.mandals1 = [];
    this.panchayati1 = [];
    this.getdistric(event);
  }

  getdistric(stateId?: any) {
    const sid = stateId || this.studentform.get('state_id')?.value || 1;
    this.service.getdistrict(sid).subscribe((res: any) => {
      this.districts = res.data;
    });
  }

  

  getconstency(event: any) {
    var id = event;
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
    })
  }

  
  getconstency1(event: any) {
    var id = event;
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency1 = res.data.filter((data: any) => data.dstrct_id == id);
    })
  }



  getmandals(event: any) {
    var id = event;
    this.service.getmandals().subscribe((res: any) => {
      this.mandals = res.data.filter((data: any) => data.const_id == id);
    })
  }
  getmandals1(event: any) {
    var id = event;
    this.service.getmandals().subscribe((res: any) => {
      this.mandals1 = res.data.filter((data: any) => data.const_id == id);
    })
  }

  gepanchayati(event: any) {
    var id = event;
    this.service.gepanchayatis().subscribe((res: any) => {
      this.panchayati = res.data.filter((data: any) => data.mndl_id == id);
    })
  }
  gepanchayati1(event: any) {
    var id = event;
    this.service.gepanchayatis().subscribe((res: any) => {
      this.panchayati1 = res.data.filter((data: any) => data.mndl_id == id);
    })
  }
  onradioleadertyperajkumar(event: any) {
    if (event.target.value == "YES") {
      this.wingtype = true
    } else {
      this.wingtype = false;
    }
  }

  getwing() {
    this.service.getwing().subscribe((res: any) => {
      this.wings = res.data;
    })
  }

  onparent(event: any) {
    var parents = event.target.value
    if (parents == 'YES') {
      this.father = true
    } else {
      this.father = false
    }
  }

  submitForm() {
    this.submitted = true;
    if (this.studentform.valid) {
      // Submit logic here
    }
  }

  numericOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    return charCode >= 48 && charCode <= 57;
  }

  gotohome() {
    this.navCtrl.push('FormsPage');
  }

  poststudentsignup() {
    this.showSpinner = true;
    this.submitted = true;
    if (!this.studentform.get('term') || !this.studentform.get('term').value) {
      this.studentform.patchValue({ term: true });
    }
    if (this.studentform.invalid) {
      const confirm = this.alertCtrl.create({
        mode: 'ios',
        title: 'దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి.!'
      })
      confirm.present();
      setTimeout(() => { confirm.dismiss(); }, 2000);
    } else if (this.studentform.value.password != this.studentform.value.retypepassword) {
      const confirm = this.alertCtrl.create({
        mode: 'ios',
        title: 'Passwords are Unmatched.!'
      })
      confirm.present();
      setTimeout(() => { confirm.dismiss(); }, 2000);
    } else {
      this.service.poststudentsignup(this.studentform.value).subscribe((res: any) => {
        this.showSpinner = false;
          if (res.status == 451) {
          alert('ఇదే ఫోన్ నెంబర్ తో ఇంతకుముందే రిజిస్టర్ అయ్యారు')
        } else this.showSpinner = false;
          if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది')
          this.studentform.reset({
            term: true
          });
          this.mandals = [];
          this.constituency = [];
          this.panchayati = [];
          this.submitted = false;
        } else {
          alert('server down')
        }
      })
    }
  }

  numericOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return charCode >= 48 && charCode <= 57;
  }

  gotohome() {
    this.navCtrl.push('FormsPage');
  }

  church: any;
  pastor: any;

  getchurch() {
    this.service.getchurch().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else this.showSpinner = false;
          if (res.status == 200) {
        this.church = res.data;
      }
    })
  }

  getchurchstudentfilter: any;
  getchurchesstudentdata() {
    if (this.studentform.value.resdistricts == null || this.studentform.value.resconstituencyname == null || this.studentform.value.resmandals == null) {
      alert("Please Fill the Districts, Constituency & Mandal")
    } else {
      var data = {
        districts: this.studentform.value.resdistricts,
        constituencyname: this.studentform.value.resconstituencyname,
        mandal_id: this.studentform.value.resmandals,
      }
      this.service.getchurchesdatafilters(data).subscribe((res: any) => {
        this.getchurchstudentfilter = res.data;
      })
    }
  }

  getstudentspastors: any;
  getpastorssdata() {
    if (this.studentform.value.resdistricts == null || this.studentform.value.resconstituencyname == null || this.studentform.value.resmandals == null) {
      alert("Please Fill the Districts, Constituency & Mandal")
    } else {
      var data = {
        districts: this.studentform.value.resdistricts,
        constituencyname: this.studentform.value.resconstituencyname,
        mandal_id: this.studentform.value.resmandals
      }
      this.service.getpastorsfilters(data).subscribe((res: any) => {
        this.getstudentspastors = res.data;
      })
    }
  }
}

