import { Component, NgZone } from '@angular/core';
import { ActionSheetController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-addmarriage',
  templateUrl: 'addmarriage.html',
})
export class AddmarriagePage {

  addingmarriages: FormGroup

  imagesdata: any = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public formBuilder: FormBuilder, public service: ServiceProvider,private loadingCtrl: LoadingController, public zone: NgZone) {

    this.addingmarriages = this.formBuilder.group({
      gender: ['', [Validators.required]],
      status: [''],
      name: ['', [Validators.required]],
      denomation_id: ['', [Validators.required]],
      ministry_id: ['', [Validators.required]],
      believer_id: [''],
      pastor_id: [''],
      image: [''],
      dob: ['', [Validators.required]],
      work: ['', [Validators.required]],
      location: [''],
      address: ['', [Validators.required]],
      description: [''],
      phonenumber: ['', [Validators.required, Validators.maxLength(10)]],
      state_id: ['', [Validators.required]],
      districtname: ['', [Validators.required]],
      constituencyname: ['', [Validators.required]],
      mandals: ['', [Validators.required]],
      village_name: ['', [Validators.required]],
      height: [''],
      color: [''],
      whealth: [''],
      types: [''],
      self: [''],
      term: [true],
      caste: ['', [Validators.required]],
      subcaste: [''],
      spirti: ['']
    });
  }

  get m() { return this.addingmarriages.controls; }

  onStateChange(event: any) {
    var stateId = event;
    this.addingmarriages.patchValue({
      state_id: stateId,
      districtname: '',
      constituencyname: '',
      mandals: '',
      village_name: ''
    });
    this.districts = [];
    this.constituency = [];
    this.mandals = [];
    this.panchayati = [];
    this.service.getdistrict(stateId).subscribe((res: any) => {
      if (res && res.status == 200) {
        this.districts = res.data;
      }
    });
  }

  pastoras: any = [];
  pastorfilterdropdown() {
    this.service.getpastor().subscribe((res: any) => {
      this.pastoras = res && res.data ? res.data : [];
    });
  }

  ionViewDidLoad() {
    this.getbeliver();
    this.getbelivers();
    this.pastorfilterdropdown();
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

  churchchange(event: any) {
    // this.form = event
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
    })
  }

  getconstency(event: any) {
    var id = event;
    this.addingmarriages.patchValue({
      constituencyname: '',
      mandals: '',
      village_name: ''
    });
    this.constituency = [];
    this.mandals = [];
    this.panchayati = [];
    if (id) {
      this.service.getconsistencys().subscribe((res: any) => {
        if (res && res.data) {
          this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
        }
      });
    }
  }

  getmandals(event: any) {
    var id = event;
    this.addingmarriages.patchValue({
      mandals: '',
      village_name: ''
    });
    this.mandals = [];
    this.panchayati = [];
    if (id) {
      this.service.getmandals().subscribe((res: any) => {
        if (res.status == 202) {
          alert(res.message);
        } else if (res.status == 200) {
          this.mandals = res.data.filter((data: any) => data.const_id == id);
        }
      });
    }
  }

  gepanchayati(event: any) {
    var id = event;
    this.addingmarriages.patchValue({
      village_name: ''
    });
    this.panchayati = [];
    if (id) {
      this.service.gepanchayatis().subscribe((res: any) => {
        if (res.status == 202) {
          alert(res.message);
        } else if (res.status == 200) {
          this.panchayati = res.data.filter((data: any) => data.mndl_id == id);
        }
      });
    }
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

  triggerFileInput() {
    const input = document.getElementById('marriageFileInput') as HTMLInputElement;
    if (input) {
      input.value = '';
      input.click();
    }
  }

  triggerCameraInput() {
    const input = document.getElementById('marriageCameraInput') as HTMLInputElement;
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
          if (this.addingmarriages) {
            this.addingmarriages.patchValue({ image: e.target.result });
          }
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
                  if (this.addingmarriages) {
                    this.addingmarriages.patchValue({ image: ing });
                  }
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
                  if (this.addingmarriages) {
                    this.addingmarriages.patchValue({ image: img });
                  }
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

  submitted: boolean = false
  loading: any
  postmarriages() {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();
    this.submitted = true;
    if (this.addingmarriages.invalid) {
      alert('please fiil the details ');
      this.loading.dismiss();
    } else {
      var data = {
        description: this.addingmarriages.value.description,
        height: this.addingmarriages.value.height,
        color: this.addingmarriages.value.color,
        work: this.addingmarriages.value.work,
        status: this.addingmarriages.value.status,
        name: this.addingmarriages.value.name,
        dob: this.addingmarriages.value.dob,
        location: this.addingmarriages.value.location,
        address: this.addingmarriages.value.address,
        phonenumber: this.addingmarriages.value.phonenumber,
        districtname: this.addingmarriages.value.districtname,
        constituencyname: this.addingmarriages.value.constituencyname,
        mandals: this.addingmarriages.value.mandals,
        village_name: this.addingmarriages.value.village_name,
        gender: this.addingmarriages.value.gender,
        whealth: this.addingmarriages.value.whealth,
        types: this.addingmarriages.value.types,
        self: this.addingmarriages.value.self,
        reviewImg: this.imagesdata,
        denomation_id: this.addingmarriages.value.denomation_id,
        ministry_id: this.addingmarriages.value.ministry_id,
        caste: this.addingmarriages.value.caste,
        subcaste: this.addingmarriages.value.subcaste,
        pastor_id: this.addingmarriages.value.pastor_id,
        believer_id: this.addingmarriages.value.believer_id,
        spirti: this.addingmarriages.value.spirti,
        usr_id: localStorage.getItem('usr_id'),
      }
      this.service.postingmarriages(data).subscribe((res: any) => {
        if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది')
          this.addingmarriages.reset();
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
