import { Component, NgZone } from '@angular/core';
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

  collegeTypeOptions: string[] = [
    'School',
    'Junior College',
    'Degree College',
    'PG College',
    'Engineering College',
    'Medical / Nursing College',
    'Pharmacy College',
    'B.Ed / D.Ed College',
    'Polytechnic / ITI',
    'Bible College',
    'University',
    'Other'
  ];
  selectedCollegeTypes: string[] = [];
  gettingLocation: boolean = false;
  denomation: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public formBuilder: FormBuilder, public service: ServiceProvider, private loadingCtrl: LoadingController, public zone: NgZone) {
    this.addinginsututies = this.formBuilder.group({
      checkbox: [''],
      believer_id: [''],
      pastor_id: [''],
      owner_name: ['', [Validators.required]],
      institutename: ['', [Validators.required]],
      denomination_id: ['', [Validators.required]],
      collegetype: ['', [Validators.required]],
      courses: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      youtube: [''],
      ministry: [''],
      website: [''],
      image: [''],
      description: [''],
      state_id: ['', [Validators.required]],
      district_id: ['', [Validators.required]],
      constituency_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      village_id: ['', [Validators.required]],
      location: [''],
      address: ['', [Validators.required]],
      facebook: [''],
      term: [true],
      ministry_id: [''],
    });
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


  getpastorassciationas: any = [];
  pastorfilter() {
    this.service.getpastor().subscribe((res: any) => {
      this.getpastorassciationas = res && res.data ? res.data : [];
    });
  }

  ionViewDidLoad() {
    this.getbelivers();
    this.pastorfilter();
    this.getdenomations();
  }

  getdenomations() {
    this.service.getdenomation().subscribe((res: any) => {
      this.denomation = res && res.data ? res.data : [];
    });
  }

  onCollegeTypeCheckbox(type: string, isChecked: boolean) {
    if (isChecked) {
      if (this.selectedCollegeTypes.indexOf(type) === -1) {
        this.selectedCollegeTypes.push(type);
      }
    } else {
      this.selectedCollegeTypes = this.selectedCollegeTypes.filter(t => t !== type);
    }
    this.addinginsututies.patchValue({
      collegetype: this.selectedCollegeTypes.join(', ')
    });
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      this.gettingLocation = true;
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.zone.run(() => {
            const url = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
            this.addinginsututies.patchValue({ location: url });
            this.gettingLocation = false;
            alert('ప్రస్తుత లొకేషన్ విజయవంతంగా తీసుకోబడింది');
          });
        },
        (err) => {
          this.zone.run(() => {
            this.gettingLocation = false;
            alert('లొకేషన్ పొందలేకపోయాము. దయచేసి మాన్యువల్‌గా నమోదు చేయండి.');
          });
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      alert('ఈ పరికరంలో జియోలొకేషన్ సపోర్ట్ లేదు.');
    }
  }

  onStateChange(event: any) {
    var stateId = event;
    this.addinginsututies.patchValue({
      state_id: stateId,
      district_id: '',
      constituency_id: '',
      mandal_id: '',
      village_id: ''
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

  getconstency(event: any) {
    var id = event;
    this.addinginsututies.patchValue({
      constituency_id: '',
      mandal_id: '',
      village_id: ''
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
    this.addinginsututies.patchValue({
      mandal_id: '',
      village_id: ''
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
      }, error => {
        console.log(error);
      });
    }
  }

  gepanchayati(event: any) {
    var id = event;
    this.addinginsututies.patchValue({
      village_id: ''
    });
    this.panchayati = [];
    if (id) {
      this.service.gepanchayatis().subscribe((res: any) => {
        if (res.status == 202) {
          alert(res.message);
        } else if (res.status == 200) {
          this.panchayati = res.data.filter((data: any) => data.mndl_id == id);
        }
      }, error => {
        console.log(error);
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

  triggerFileInput() {
    const input = document.getElementById('instituteFileInput') as HTMLInputElement;
    if (input) {
      input.value = '';
      input.click();
    }
  }

  triggerCameraInput() {
    const input = document.getElementById('instituteCameraInput') as HTMLInputElement;
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
          if (this.addinginsututies) {
            this.addinginsututies.patchValue({ image: e.target.result });
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
                  if (this.addinginsututies) {
                    this.addinginsututies.patchValue({ image: ing });
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
                  if (this.addinginsututies) {
                    this.addinginsututies.patchValue({ image: img });
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
      if (this.selectedCollegeTypes && this.selectedCollegeTypes.length > 0) {
        this.addinginsututies.value.collegetype = this.selectedCollegeTypes.join(', ');
        this.addinginsututies.value.college_type = this.selectedCollegeTypes.join(', ');
      }
      this.addinginsututies.value.owner_name = this.addinginsututies.value.owner_name;
      this.addinginsututies.value.chairman_name = this.addinginsututies.value.owner_name;
      this.addinginsututies.value.denomination = this.addinginsututies.value.denomination_id;
      this.addinginsututies.value.image = this.imagesdata;
      this.addinginsututies.value.usr_id = localStorage.getItem('usr_id');
      this.addinginsututies.value.number = localStorage.getItem('mobile_number');
      this.service.postinsututies(this.addinginsututies.value).subscribe((res: any) => {
        if (res.status == 200) {
          alert('విజయవంతముగా సబ్మిట్ అయింది');
          this.addinginsututies.reset();
          this.selectedCollegeTypes = [];
          this.imagesdata = [];
          this.submitted = false;
          this.loading.dismiss();
        } else {
          alert('server down');
          this.loading.dismiss();
        }
      },
        error => {
          this.loading.dismiss();
        })
    }
  }

}
