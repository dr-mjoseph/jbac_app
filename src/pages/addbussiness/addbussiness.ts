import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionSheetController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { HomePage } from '../home/home';

/**
 * Generated class for the AddbussinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addbussiness',
  templateUrl: 'addbussiness.html',
})
export class AddbussinessPage {
  addingbusiness: FormGroup

  imagesdata: any = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public formBuilder: FormBuilder, public service: ServiceProvider, private loadingCtrl: LoadingController) {

    this.addingbusiness = this.formBuilder.group({
      title: ['', [Validators.required]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.minLength(10)]],
      denomation: [''],
      districtname: ['', [Validators.required]],
      constituencyname: ['', [Validators.required]],
      mandals: ['', [Validators.required]],
      village_name: ['', [Validators.required]],
      ministry_id: [''],
      ward: ['', [Validators.required]],
       // term: ['', [Validators.required]],
    })

    this.addingbusiness.reset();

  }

  ionViewDidLoad() {
    this.getdistric();
    this.getbeliver();
    this.getbelivers();
    this.getdenomations();
  }


  get j() { return this.addingbusiness.controls; }

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
    })
  }

  // Accept Input As a Number Only
  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
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

  submitted: boolean = false;
  loading: any
  postbusiness() {

    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();
    this.submitted = true;
    if (this.addingbusiness.invalid) {
      alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
      this.loading.dismiss();
    } else {
      var data = {
        type: this.addingbusiness.value.type,
        title: this.addingbusiness.value.title,
        description: this.addingbusiness.value.description,
        number: this.addingbusiness.value.number,
        usr_id: localStorage.getItem('usr_id'),
        name: localStorage.getItem('name'),
        reviewImg: this.imagesdata,
        denomation: this.addingbusiness.value.denomation,
        districtname: this.addingbusiness.value.districtname,
        constituencyname: this.addingbusiness.value.constituencyname,
        mandals: this.addingbusiness.value.mandals,
        village_name: this.addingbusiness.value.village_name,
        ministry_id: this.addingbusiness.value.ministry_id,
        ward: this.addingbusiness.value.ministry_id,
      }
      this.service.postbusiness(data).subscribe((res: any) => {
        if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది')
          this.addingbusiness.reset();
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
