import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-addattacks',
  templateUrl: 'addattacks.html',
})
export class AddattacksPage {

  form: FormGroup

  submitted: Boolean = false;

  imagesData: any = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public formBuilder: FormBuilder, public service: ServiceProvider , private loadingCtrl: LoadingController ) {

    this.form = this.formBuilder.group({
      image: [''],
      videoa: [''],
      videob: [''],
      document: [''],
      address: ['', [Validators.required]],
      victim1num: [''],
      victim2num: [''],
      victim1name: [''],
      victim2name: [''],
      attacker1num: [''],
      attacker2num: [''],
      attacker1name: [''],
      attacker2name: [''],
      noteondescription: [''],
      audio: [''],
      district_id: ['', [Validators.required]],
      constituency_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      village_id: ['', [Validators.required]],
      term: ['', [Validators.required]]
    })
    this.form.reset();
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
                reviewImg: ing,
                filetype: 'jpeg',
              }
              this.imagesData.push(imagedata);
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
                reviewImg: img,
                filetype: 'jpeg',
              }
              console.log(imagedata);
              this.imagesData.push(imagedata);
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


  gotohome() {
    this.navCtrl.push('HomePage');
  }

  format: any
  formatb: any

  url: any
  urlb: any

  onSelectFile(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1) {
        this.format = 'image';
      } else if (file.type.indexOf('video') > -1) {
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }

  onSelectFileb(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1) {
        this.formatb = 'image';
      } else if (file.type.indexOf('video') > -1) {
        this.formatb = 'video';
      }
      reader.onload = (event) => {
        this.urlb = (<FileReader>event.target).result;
      }
    }
  }

  urldoc: any;
  urldoc2: any;

  documentarray: any = [];
  filenamearray: any = [];

  onSelectFiledoc(event: any) {
    const file = event.target.files && event.target.files[0];
    var name = event.target.files[0].name
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.urldoc = (<FileReader>event.target).result;
        this.documentarray.push({ reviewimg: this.urldoc, filetype: name });
        this.filenamearray.push({ name: name })
      }
    }
  }

  formataudio: any;
  urlaudio: any;

  onSelectFileaudio(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1) {
        this.formataudio = 'image';
      } else if (file.type.indexOf('audio') > -1) {
        this.formataudio = 'audio';
      }
      reader.onload = (event) => {
        this.urlaudio = (<FileReader>event.target).result;
      }
    }
  }

  // Accept Input As a Number Only
  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }
  loading:any
  postattacks() {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();
    if (this.form.invalid) {
      alert('please fiil the details ');
      this.loading.dismiss();
    } else {
      this.form.value.image = this.imagesData;
      this.form.value.videoa = this.url;
      this.form.value.videob = this.urlb;
      this.form.value.document = this.documentarray;
      this.form.value.audio = this.urlaudio
      this.form.value.usr_id = localStorage.getItem('usr_id')
      this.form.value.username = localStorage.getItem('name')
      this.form.value.usernumber = localStorage.getItem('mobile_number')

      console.log(this.form.value);
      
      this.service.postattacks(this.form.value).subscribe((res: any) => {
        if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది')
          this.form.reset();
          this.imagesData = [];
          this.url = [];
          this.urlb = [];
          this.documentarray = [];
          this.urlaudio = [];
          this.loading.dismiss();
        } else {
          alert('server down')
          this.loading.dismiss();
        }
      })
    }
  }

}
