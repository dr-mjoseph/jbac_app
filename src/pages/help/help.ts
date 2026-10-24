import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  form: FormGroup
  imagesdata: any = []

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public camera: Camera, public actionSheetCtrl: ActionSheetController, public service: ServiceProvider, public zone: NgZone) {

    this.form = this.formBuilder.group({
      description: ['', [Validators.required]],
      help: ['']
    })
  }

  gotohome() {
    this.navCtrl.push('HomePage')
  }
  triggerFileInput() {
    const input = document.getElementById('helpFileInput') as HTMLInputElement;
    if (input) {
      input.value = '';
      input.click();
    }
  }

  triggerCameraInput() {
    const input = document.getElementById('helpCameraInput') as HTMLInputElement;
    if (input) {
      input.value = '';
      input.click();
    }
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
        });
      };
      reader.readAsDataURL(file);
    }
  }

  async openphoto() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'ఫోటో ఎంచుకోండి (Select Photo)',
      buttons: [
        {
          icon: 'ios-folder-open',
          text: 'Gallery',
          handler: () => {
            if (!((window as any).navigator && (window as any).navigator.camera)) {
              this.triggerFileInput();
              return;
            }
            try {
              const options: CameraOptions = {
                quality: 70,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                saveToPhotoAlbum: false
              };
              this.camera.getPicture(options).then((imaged) => {
                this.zone.run(() => {
                  var ing = `data:image/jpeg;base64,` + imaged;
                  var imagedata = {
                    reviewimg: ing,
                    filetype: 'jpeg',
                  };
                  this.imagesdata = [imagedata];
                });
              }, (err) => {
                console.log('Gallery picker error, triggering file fallback', err);
                this.triggerFileInput();
              });
            } catch (err) {
              this.triggerFileInput();
            }
          }
        }, {
          icon: 'ios-camera',
          text: 'Camera',
          handler: () => {
            if (!((window as any).navigator && (window as any).navigator.camera)) {
              this.triggerCameraInput();
              return;
            }
            try {
              const options: CameraOptions = {
                quality: 70,
                correctOrientation: true,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
              };
              this.camera.getPicture(options).then((imageD) => {
                this.zone.run(() => {
                  var img = `data:image/jpeg;base64,` + imageD;
                  var imagedata = {
                    reviewimg: img,
                    filetype: 'jpeg',
                  };
                  this.imagesdata = [imagedata];
                });
              }, (err) => {
                console.log('Camera error, triggering camera fallback', err);
                this.triggerCameraInput();
              });
            } catch (err) {
              this.triggerCameraInput();
            }
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

  postmeetings() {
    if (this.form.invalid) {
      alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి');
    } else {
      var data = {
        usr_id: localStorage.getItem('usr_id'),
        mobile_number: localStorage.getItem('mobile_number'),
        name: localStorage.getItem('name'),
        description: this.form.value.description,
        help: this.form.value.help,
        reviewImg: this.imagesdata
      }
      this.service.posthelping(data).subscribe((res: any) => {
        if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది')
          this.form.reset();
          this.imagesdata = [];
        } else {
          alert('server down')
        }
      })
    }

  }

}
