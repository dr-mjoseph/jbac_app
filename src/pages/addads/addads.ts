import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
// import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-addads',
  templateUrl: 'addads.html',
})
export class AddadsPage {
  addsadding:FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public formBuilder: FormBuilder, public service: ServiceProvider , public loadingCtrl:LoadingController ) {
    
    this.addsadding = this.formBuilder.group({
      title: ['', [Validators.required]],
      type: ['', [Validators.required]],
      image: [''],
      description: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.minLength(10)]],
      term: ['', [Validators.required]]
    })

    this.addsadding.reset();
  }

  gotohome() {
    this.navCtrl.push('HomePage');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddadsPage');
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
                reviewImg: img,
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
  
  submitted:any=[]
  loading:any
  postadds() {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();
    this.submitted = true;
    if (this.addsadding.invalid) {
      alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
      this.loading.dismiss();
    } else {
      var data = {
        type: this.addsadding.value.type,
        title: this.addsadding.value.title,
        description: this.addsadding.value.description,
        number: this.addsadding.value.number,
        usr_id: localStorage.getItem('usr_id'),
        reviewImg: this.imagesdata
      }
      this.service.postadds(data).subscribe((res: any) => {
        if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది')
          this.addsadding.reset();
          this.imagesdata = [];
          this.submitted = false;
          this.loading.dismiss();
        } else {
          this.loading.dismiss();
          alert('server down');
        }
      },
        error => {
        })
    }
  }



}
