import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { HomePage } from '../home/home';

/**
 * Generated class for the AddjobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addjobs',
  templateUrl: 'addjobs.html',
})
export class AddjobsPage {
  
  jobsadding:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public formBuilder: FormBuilder, public service: ServiceProvider , public loadingCtrl:LoadingController) {

     this.jobsadding = this.formBuilder.group({
      jobname: ['', [Validators.required]],
      qualification: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      salary: [''],
      location: ['', [Validators.required]],
      description: ['', [Validators.required]],
      number1: ['', [Validators.required, Validators.minLength(10)]],
      number2: [''],
      districtname: ['', [Validators.required]],
      constituencyname: ['', [Validators.required]],
      mandals: ['', [Validators.required]],
      village_name: ['', [Validators.required]],
      google_location: [''],
      image: [''],
      facebook: [''],
      youtube: [''],
       // term: ['', [Validators.required]],
    })
    this.jobsadding.reset();
  }

  get a() { return this.jobsadding.controls; }

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
    }, error => {

    })
  }

  // Accept Input As a Number Only
  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  imagesdata: any = []
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

  loading:any

  postjobs() {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();
    if (this.jobsadding.invalid) {
    alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి');
    this.loading.dismiss();
    } else {
      var data = {
        jobname: this.jobsadding.value.jobname,
        qualification: this.jobsadding.value.qualification,
        experience: this.jobsadding.value.experience,
        salary: this.jobsadding.value.salary,
        location: this.jobsadding.value.location,
        description: this.jobsadding.value.description,
        number1: this.jobsadding.value.number1,
        number2: this.jobsadding.value.number2,
        districtname: this.jobsadding.value.districtname,
        constituencyname: this.jobsadding.value.constituencyname,
        mandals: this.jobsadding.value.mandals,
        village_name: this.jobsadding.value.village_name,
        google_location: this.jobsadding.value.google_location,
        usr_id: sessionStorage.getItem('usr_id'),
        mobile_number: sessionStorage.getItem('mobile_number'),
        name: sessionStorage.getItem('name'),
        reviewImg: this.imagesdata
      }
      this.service.postjobs(data).subscribe((res: any) => {
        if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది')
          this.jobsadding.reset();
          this.imagesdata = [];
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
