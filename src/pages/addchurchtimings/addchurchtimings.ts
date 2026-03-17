import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-addchurchtimings',
  templateUrl: 'addchurchtimings.html',
})

export class AddchurchtimingsPage {

  addingchurchtimimngs: any;

  submitted: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public formBuilder: FormBuilder, public service: ServiceProvider, private loadingCtrl: LoadingController) {

    this.addingchurchtimimngs = this.formBuilder.group({
      service_name: ['', [Validators.required]],
      day: ['', [Validators.required]],
      time_start: ['', [Validators.required]],
      time_end: ['', [Validators.required]],
      description: ['', [Validators.required]],
      church: [''],
      district_id: ['', [Validators.required]],
      constituency_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      streetname: [''],
    })
  }

  get c() { return this.addingchurchtimimngs.controls; }

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  mandals: any;
  constituency: any;
  panchayati: any;
  districts: any;
  searchdist: any;

  ionViewDidLoad() {
    this.getdistric();
  }

  getdistric() {
    this.service.getdistrict().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.districts = res.data;
      }
    }, error => {
      console.log(error);
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
    }, error => {
      console.log(error);
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
    }, error => {
      console.log(error);
    })
  }

  getchurchstudentfilter: any = []
  StreetVar: any
  filterchurchdata() {
    if (this.addingchurchtimimngs.value.district_id == '' || this.addingchurchtimimngs.value.constituency_id == '' || this.addingchurchtimimngs.value.mandal_id == '') {
      alert("Please Fill the Districts & Constituency")
    } else {
      var data = {
        districts: this.addingchurchtimimngs.value.district_id,
        constituencyname: this.addingchurchtimimngs.value.constituency_id,
        mandal_id: this.addingchurchtimimngs.value.mandal_id,
      }
      this.service.getchurchesdatafilters(data).subscribe((res: any) => {
        this.getchurchstudentfilter = res.data;
        this.StreetVar = res.data[0].street
        console.log(res.data)
        console.log(this.StreetVar);

      })
    }
  }

  cheurch() {
    if (this.getchurchstudentfilter.length == 0) {

      if (this.addingchurchtimimngs.value.district_id == '') {
        const confirm = this.actionSheetCtrl.create({
          title: 'జిల్లా ఎంచుకోండి'
        })
        confirm.present();
      } else if (this.addingchurchtimimngs.value.constituency_id == '') {
        const confirm = this.actionSheetCtrl.create({
          title: 'నియోజకవర్గాన్ని ఎంచుకోండి'
        })
        confirm.present();
      } else if (this.addingchurchtimimngs.value.mandal_id == '') {
        const confirm = this.actionSheetCtrl.create({
          title: 'మండలాన్ని ఎంచుకోండి'
        })
        confirm.present();
      }
    }
  }

  loading: any
  postchurchtimings() {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();
    this.submitted = true;
    if (this.addingchurchtimimngs.invalid) {
      alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి');
      this.loading.dismiss();
    } else {
      var data = {
        service_name: this.addingchurchtimimngs.value.service_name,
        day: this.addingchurchtimimngs.value.day,
        time_start: this.addingchurchtimimngs.value.time_start,
        time_end: this.addingchurchtimimngs.value.time_end,
        description: this.addingchurchtimimngs.value.description,
        church: this.addingchurchtimimngs.value.church,
        usr_id: localStorage.getItem('usr_id'),
        mobile_number: localStorage.getItem('mobile_number'),
        name: localStorage.getItem('name'),
        district_id: this.addingchurchtimimngs.value.district_id,
        constituency_id: this.addingchurchtimimngs.value.constituency_id,
        mandal_id: this.addingchurchtimimngs.value.mandal_id,
        // village_id: this.addingchurchtimimngs.value.village_id,
      }
      this.service.postchurchmeetings(data).subscribe((res: any) => {
        if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది')
          this.addingchurchtimimngs.reset();
          this.submitted = false;
          this.loading.dismiss();
        } else {
          alert('server down');
          this.loading.dismiss();
        }
      },
        error => {
        })
    }
  }


}
