import { Component } from '@angular/core';
import { ActionSheetController, AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { HomePage } from '../home/home';

/**
 * Generated class for the AddmeetingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addmeetings',
  templateUrl: 'addmeetings.html',
})
export class AddmeetingsPage {
  form: FormGroup
  districts: any;
  mandals: any;
  panchayati: any;
  constituency: any;
  denomation: any
  imagesData: any = []
  loading: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, public frombuilder: FormBuilder, public actionSheetCtrl: ActionSheetController, public camera: Camera, private loadingCtrl: LoadingController, private alertctrl: AlertController) {
    this.form = this.frombuilder.group({
      mettingtype: ['', [Validators.required]],
      denomation: ['', [Validators.required]],
      speakerone: [''],
      speakertwo: [''],
      speakerthree: [''],
      speakerfour: [''],
      fromdate: ['', [Validators.required]],
      todate: ['', [Validators.required]],
      image: [''],
      districtname: ['', [Validators.required]],
      constituencyname: ['', [Validators.required]],
      mandals: ['', [Validators.required]],
      village_name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      fromtime: [''],
      totime: [''],
      address: ['', [Validators.required]],
      location: [''],
      facebook: [''],
      youtube: [''],
      orgphone: [''],
      evntphone: [''],
      peoplecount:['']
    })
  }

  get t() { return this.form.controls; }

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  ionViewDidLoad() {
    this.getdistric();
    this.getdenomations();
  }

  getdistric() {
    this.service.getdistrict().subscribe((res: any) => {
      this.districts = res.data;
    })
  }


  getdenomations() {
    this.service.getdenomation().subscribe((res: any) => {
      this.denomation = res.data;
    })
  }
  dist: any = 0
  const: any = 0
  man: any = 0
  vil: any = 0

  geyr(id: any) {

    if (id == 2) {
      if (this.dist == 0) {
        this.loading = this.alertctrl.create({
          mode: 'ios',
          message: 'Select the District',
          buttons: ['Ok']
        });
        this.loading.present();
      }
    }
    if (id == 3) {
      if (this.dist == 0) {
        const akert = this.alertctrl.create({
          mode: 'ios',
          message: 'Select the District',
          buttons: ['Ok']
        });
        akert.present();
      } else if (this.const == 0) {
        const akert = this.alertctrl.create({
          mode: 'ios',
          message: 'Select the Constitunecy',
          buttons: ['Ok']
        });
        akert.present();
      }
      console.log(this.dist, this.const, this.man);

    }
    if (id == 4) {
      if (this.dist == 0) {
        const akert = this.alertctrl.create({
          mode: 'ios',
          message: 'Select the District',
          buttons: ['Ok']
        });
        akert.present();
      } else if (this.const == 0) {
        const akert = this.alertctrl.create({
          mode: 'ios',
          message: 'Select the Constitunecy',
          buttons: ['Ok']
        });
        akert.present();
      } else if (this.man == 0) {
        const akert = this.alertctrl.create({
          mode: 'ios',
          message: 'Select the Mandals',
          buttons: ['Ok']
        });
        akert.present();
      }
    }

  }


  getconstency(event: any) {
    this.dist = 1;
    var id = event;
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
    })
  }


  getmandals(event: any) {
    this.const = 1
    var id = event;
    this.service.getmandals().subscribe((res: any) => {
      this.mandals = res.data.filter((data: any) => data.const_id == id);
    })
  }

  gepanchayati(event: any) {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();
    this.man = 1
    var id = event;
    this.service.gepanchayatis().subscribe((res: any) => {
      this.panchayati = res.data.filter((data: any) => data.mndl_id == id);

      if (this.panchayati.length) {
        this.loading.dismiss();
      }

    })
  }

  submitted: boolean = false;

  postmeetings() {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();

    this.submitted = true;
    if (this.form.invalid) {
      this.loading.dismiss();
      alert('* మార్క్ చేసిన వివరాలను తప్పనిసరిగా పూరించాలి');
    } else {
      var data = {
        mettingtype: this.form.value.mettingtype,            //
        denomation: this.form.value.denomation,              //
        speakerone: this.form.value.speakerone,
        speakertwo: this.form.value.speakertwo,
        speakerthree: this.form.value.speakerthree,
        speakerfour: this.form.value.speakerfour,
        fromdate: this.form.value.fromdate,                   //
        todate: this.form.value.todate,                       //
        districtname: this.form.value.districtname,           //
        description: this.form.value.description,             //
        constituencyname: this.form.value.constituencyname,   //
        mandals: this.form.value.mandals,                     // 
        village_name: this.form.value.village_name,           //
        fromtime: this.form.value.fromtime,
        totime: this.form.value.totime,
        location: this.form.value.location,             //
        address: this.form.value.address,             //
        facebook: this.form.value.facebook,             //
        youtube: this.form.value.youtube,             //
        ministry_id: this.form.value.ministry_id,
        reviewImg: this.imagesData,
        orgphone: this.form.value.orgphone,
        evntphone: this.form.value.evntphone,
        peoplecount : this.form.value.peoplecount
      }
      this.service.postsmeetings(data).subscribe((res: any) => {
        if (res.status == 200) {
          this.loading.dismiss();
          const confirm = this.alertctrl.create({
            mode: 'ios',
            title: 'విజయవంతంగా సబ్మిట్ చేసినారు',
            buttons: ['Ok']
          })
          confirm.present();
          this.navCtrl.push('MeetingPage');
          this.form.reset();
          this.submitted = false;
          this.loading.dismiss();
        } else {
          this.loading.dismiss();
          alert('server down')
        }
      })
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
              this.imagesData = [];
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
                reviewimg: img,
                filetype: 'jpeg',
              }
              this.imagesData = [];
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


}
