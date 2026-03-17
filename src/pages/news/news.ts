import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
// import { HomePage } from '../home/home';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  imagesdata: any = []
  addingnews: FormGroup
  submitted: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public formBuilder: FormBuilder, public service: ServiceProvider ,
  private loadingCtrl: LoadingController
  ) {

    this.addingnews = this.formBuilder.group({
      image: [''],
      description: [''],
      news: ['', [Validators.required]],
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
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
              console.log(imagedata);

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

  gotohome() {
    this.navCtrl.push('HomePage')
  }


  loading: any

  postnews() {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();
    if (this.addingnews.invalid) {
      alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
      this.loading.dismiss();
    } else {
      var data = {
        description: this.addingnews.value.description,
        news: this.addingnews.value.news,
        mobilenumber:localStorage.getItem('mobile_number'),
        reviewImg: this.imagesdata
      }
      // console.log(data)
      this.service.postupdatenews(data).subscribe((res: any) => {
        if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది')
          this.addingnews.reset();
          this.imagesdata = [];
          this.submitted = false;
          this.loading.dismiss();
          // this.getnews();
        } else {
          alert('server down')
          this.loading.dismiss();
        }
      })
    }
  }

}
