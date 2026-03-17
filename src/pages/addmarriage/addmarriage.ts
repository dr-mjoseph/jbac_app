import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { Camera } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-addmarriage',
  templateUrl: 'addmarriage.html',
})
export class AddmarriagePage {

  addingmarriages: FormGroup

  imagesdata: any = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public formBuilder: FormBuilder, public service: ServiceProvider,private loadingCtrl: LoadingController) {

    this.addingmarriages = this.formBuilder.group({
      gender: ['', [Validators.required]],
      status: [''],
      name: ['', [Validators.required]],
      denomation_id: ['', [Validators.required]],
      ministry_id: ['', [Validators.required]],
      believer_id: [''],
      pastor_id: [''],
      image: [''],
      dob: ['', [Validators.required]],
      work: ['', [Validators.required]],
      location: [''],
      address: ['', [Validators.required]],
      description: [''],
      phonenumber: ['', [Validators.required, Validators.maxLength(10)]],
      districtname: ['', [Validators.required]],
      constituencyname: ['', [Validators.required]],
      mandals: ['', [Validators.required]],
      village_name: ['', [Validators.required]],
      height: [''],
      color: [''],
      whealth: [''],
      types: [''],
      self: [''],
       // term: ['', [Validators.required]],
      caste: ['', [Validators.required]],
      subcaste: [''],
      spirti: ['']
    })
    this.addingmarriages.reset();
  }

  get m() { return this.addingmarriages.controls; }

  ionViewDidLoad() {
    this.getdistric();
    this.getbeliver();
    this.getbelivers();
    this.getdenomations();
  }

  mandals: any;
  constituency: any;
  panchayati: any;
  districts: any;
  searchdist: any;
  ministryname: any;
  bliversdata: any
  denomation: any

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  getbelivers() {
    this.service.getbelivers().subscribe((res: any) => {
      this.bliversdata = res.data;
    })
  }

  churchchange(event: any) {
    // this.form = event
  }


  getdenomations() {
    this.service.getdenomation().subscribe((res: any) => {
      this.denomation = res.data;
    })
  }

  getdistric() {
    this.service.getdistrict().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.districts = res.data;
      }
    })
  }

  getmandals(event: any) {
    var id = event;
    this.service.getmandals().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.mandals = res.data.filter((data: any) => data.const_id == id);
      }
    })
  }

  getconstency(event: any) {
    var id = event;
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
    });
  }

  gepanchayati(event: any) {
    var id = event;
    this.service.gepanchayatis().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.panchayati = res.data.filter((data: any) => data.mndl_id == id);
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

  // Accept Input As a Number Only
  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  submitted: boolean = false
  loading: any
  postmarriages() {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();
    this.submitted = true;
    if (this.addingmarriages.invalid) {
      alert('please fiil the details ');
      this.loading.dismiss();
    } else {
      var data = {
        description: this.addingmarriages.value.description,
        height: this.addingmarriages.value.height,
        color: this.addingmarriages.value.color,
        work: this.addingmarriages.value.work,
        status: this.addingmarriages.value.status,
        name: this.addingmarriages.value.name,
        dob: this.addingmarriages.value.dob,
        location: this.addingmarriages.value.location,
        address: this.addingmarriages.value.address,
        phonenumber: this.addingmarriages.value.phonenumber,
        districtname: this.addingmarriages.value.districtname,
        constituencyname: this.addingmarriages.value.constituencyname,
        mandals: this.addingmarriages.value.mandals,
        village_name: this.addingmarriages.value.village_name,
        gender: this.addingmarriages.value.gender,
        whealth: this.addingmarriages.value.whealth,
        types: this.addingmarriages.value.types,
        self: this.addingmarriages.value.self,
        reviewImg: this.imagesdata,
        denomation_id: this.addingmarriages.value.denomation_id,
        ministry_id: this.addingmarriages.value.ministry_id,
        caste: this.addingmarriages.value.caste,
        subcaste: this.addingmarriages.value.subcaste,
        pastor_id: this.addingmarriages.value.pastor_id,
        believer_id: this.addingmarriages.value.believer_id,
        spirti: this.addingmarriages.value.spirti,
        usr_id: localStorage.getItem('usr_id'),
      }
      this.service.postingmarriages(data).subscribe((res: any) => {
        if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది')
          this.addingmarriages.reset();
          this.imagesdata = [];
          this.submitted = false;
          this.loading.dismiss();
        } else {
          alert('server down')
          this.loading.dismiss();
        }
      },
        error => {
        })
    }
  }

}
