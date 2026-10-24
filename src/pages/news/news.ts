import { Component, NgZone } from '@angular/core';
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
  private loadingCtrl: LoadingController, public zone: NgZone
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

  triggerFileInput() {
    const input = document.getElementById('newsFileInput') as HTMLInputElement;
    if (input) input.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.zone.run(() => {
          this.imagesdata = [{
            reviewimg: e.target.result,
            filetype: 'jpeg'
          }];
          if (this.addingnews) {
            this.addingnews.patchValue({ image: e.target.result });
          }
        });
      };
      reader.readAsDataURL(file);
    }
  }

  async openphoto() {
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          icon: 'ios-folder-open',
          text: 'Gallery',
          handler: () => {
            const options: CameraOptions = {
              quality: 70,
              destinationType: this.camera.DestinationType.DATA_URL,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              saveToPhotoAlbum: false
            }
            this.camera.getPicture(options).then((imaged) => {
              this.zone.run(() => {
                var ing = `data:image/jpeg;base64,` + imaged;
                var imagedata = {
                  reviewimg: ing,
                  filetype: 'jpeg',
                }
                this.imagesdata = [imagedata];
                if (this.addingnews) {
                  this.addingnews.patchValue({ image: ing });
                }
              });
            }, (err) => {
              console.log('Gallery picker error, triggering file fallback', err);
              this.triggerFileInput();
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
              this.zone.run(() => {
                var img = `data:image/jpeg;base64,` + imageD;
                var imagedata = {
                  reviewimg: img,
                  filetype: 'jpeg',
                }
                this.imagesdata = [imagedata];
                if (this.addingnews) {
                  this.addingnews.patchValue({ image: img });
                }
              });
            }, (err) => {
              console.log('Camera error, triggering file fallback', err);
              this.triggerFileInput();
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
    actionSheet.present();
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
