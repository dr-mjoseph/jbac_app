import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-addinstitute',
  templateUrl: 'addinstitute.html',
})
export class AddinstitutePage {

  addinginsututies: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public formBuilder: FormBuilder, public service: ServiceProvider,     private loadingCtrl: LoadingController) {
    this.addinginsututies = this.formBuilder.group({
      checkbox: [''],
      believer_id: [''],
      pastor_id: [''],
      institutename: ['', [Validators.required]],
      collegetype: ['', [Validators.required]],
      courses: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.maxLength(10)]],
      youtube: [''],
      ministry: [''],
      website: [''],
      image: [''],
      description: [''],
      district_id: ['', [Validators.required]],
      constituency_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      village_id: ['', [Validators.required]],
      location: [''],
      address: ['', [Validators.required]],
      facebook: [''],
       // term: ['', [Validators.required]],
      ministry_id: [''],
    })
    this.addinginsututies.reset();
  }


  get i() { return this.addinginsututies.controls; }

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  mandals: any;
  constituency: any;
  panchayati: any;
  districts: any;
  searchdist: any;
  ministryname: any;
  imagesdata: any = [];
  bliversdata: any

  ionViewDidLoad() {
    this.getdistric();
    this.getbeliver();
    this.getbelivers();
  }

  getbelivers() {
    this.service.getbelivers().subscribe((res: any) => {
      this.bliversdata = res.data;
    })
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

  getbeliver() {
    this.service.getbeliversdata().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.ministryname = res.data;
      }
    }, error => {

    })
  }


  form: any;
  churchchange(event: any) {
    this.form = event.target.value
  }
  minini: boolean = false;
  ministryad(event: any) {
    if (event.target.value == "Ministry") {
      this.minini = true;
    } else {
      this.minini = false;
    }
  }


  async openphoto() {
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          icon: 'ios-folder-open',
          text: 'Gallery',
          role: 'destructive',
          handler: () => {
            const options: CameraOptions = {
              quality: 70,
              destinationType: this.camera.DestinationType.DATA_URL,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              saveToPhotoAlbum: false
            }
            this.camera.getPicture(options).then((imaged) => {
              var ing = `data:image/jpeg;base64,` + imaged;
              var imagedata = {
                reviewimg: ing,
                filetype: 'jpeg',
              }
              console.log(imagedata);
              this.imagesdata = [];
              this.imagesdata.push(imagedata);
            }, (err) => {
            });
          }
        }, {
          icon: 'ios-camera',
          text: 'Camera',
          handler: () => {
            const options: CameraOptions = {
              quality: 70,
              correctOrientation: true,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            }
            this.camera.getPicture(options).then((imageD) => {
              var img = `data:image/jpeg;base64,` + imageD;
              var imagedata = {
                reviewimg: img,
                filetype: 'jpeg',
              }
              this.imagesdata = [];
              this.imagesdata.push(imagedata);
            }, (err) => {
            });
          }
        }, {
          icon: 'ios-close',
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    (await actionSheet).present();
  }

  belivers(inputValue: any) {
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
  loading:any
  
  postinsututies() {
    this.submitted = true;
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();

    if (this.addinginsututies.invalid) {
      alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
      this.loading.dismiss();
    } else {
      this.addinginsututies.value.image = this.imagesdata;
      this.addinginsututies.value.usr_id = localStorage.getItem('usr_id');
      this.addinginsututies.value.number = localStorage.getItem('mobile_number');
      this.service.postinsututies(this.addinginsututies.value).subscribe((res: any) => {
        if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది')
          this.addinginsututies.reset();
          this.imagesdata = [];
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
