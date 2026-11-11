import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  form: FormGroup;
  imagesdata: any = [];
  submitted: boolean = false;

  denomation: any[] = [];
  districts: any[] = [];
  constituencies: any[] = [];
  mandals: any[] = [];
  panchayats: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public service: ServiceProvider,
    private loadingCtrl: LoadingController,
    public zone: NgZone
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      mobile_number: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      denomination_id: ['', [Validators.required]],
      state_id: ['', [Validators.required]],
      district_id: ['', [Validators.required]],
      constituency_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      panchayat_id: ['', [Validators.required]],
      address: ['', [Validators.required]],
      help: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  ionViewDidLoad() {
    this.getdenomations();
  }

  getdenomations() {
    this.service.getdenomation().subscribe(
      (res: any) => {
        this.denomation = (res && res.data) ? res.data : (Array.isArray(res) ? res : []);
      },
      () => {
        this.denomation = [];
      }
    );
  }

  onStateChange(stateId: any) {
    this.districts = [];
    this.constituencies = [];
    this.mandals = [];
    this.panchayats = [];

    this.form.patchValue({
      district_id: '',
      constituency_id: '',
      mandal_id: '',
      panchayat_id: ''
    });

    if (stateId) {
      this.service.getdistrict(stateId).subscribe(
        (res: any) => {
          this.districts = (res && res.data) ? res.data : [];
        },
        () => {
          this.districts = [];
        }
      );
    }
  }

  onDistrictChange(districtId: any) {
    this.constituencies = [];
    this.mandals = [];
    this.panchayats = [];

    this.form.patchValue({
      constituency_id: '',
      mandal_id: '',
      panchayat_id: ''
    });

    if (districtId) {
      this.service.getconsistencys(districtId).subscribe(
        (res: any) => {
          const list = (res && res.data) ? res.data : [];
          const filtered = list.filter((item: any) => item.dstrct_id == districtId);
          this.constituencies = filtered.length > 0 ? filtered : list;
        },
        () => {
          this.constituencies = [];
        }
      );
    }
  }

  onConstituencyChange(constId: any) {
    this.mandals = [];
    this.panchayats = [];

    this.form.patchValue({
      mandal_id: '',
      panchayat_id: ''
    });

    if (constId) {
      this.service.getmandals(constId).subscribe(
        (res: any) => {
          const list = (res && res.data) ? res.data : [];
          const filtered = list.filter((item: any) => item.const_id == constId);
          this.mandals = filtered.length > 0 ? filtered : list;
        },
        () => {
          this.mandals = [];
        }
      );
    }
  }

  onMandalChange(mandalId: any) {
    this.panchayats = [];

    this.form.patchValue({
      panchayat_id: ''
    });

    if (mandalId) {
      this.service.gepanchayatis(mandalId).subscribe(
        (res: any) => {
          const list = (res && res.data) ? res.data : [];
          const filtered = list.filter((item: any) => item.mndl_id == mandalId);
          this.panchayats = filtered.length > 0 ? filtered : list;
        },
        () => {
          this.panchayats = [];
        }
      );
    }
  }

  numericOnly(event: any): boolean {
    const val = (event && event.target && event.target.value !== undefined) ? String(event.target.value) : '';
    const cleaned = val.replace(/\D/g, '').slice(0, 10);
    if (cleaned !== val) {
      this.form.patchValue({ mobile_number: cleaned });
    }
    return true;
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
      title: 'ఫోటో ఎంచుకోండి',
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
                  const ing = `data:image/jpeg;base64,` + imaged;
                  this.imagesdata = [{
                    reviewimg: ing,
                    filetype: 'jpeg'
                  }];
                });
              }, () => {
                this.triggerFileInput();
              });
            } catch (err) {
              this.triggerFileInput();
            }
          }
        },
        {
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
                  const img = `data:image/jpeg;base64,` + imageD;
                  this.imagesdata = [{
                    reviewimg: img,
                    filetype: 'jpeg'
                  }];
                });
              }, () => {
                this.triggerCameraInput();
              });
            } catch (err) {
              this.triggerCameraInput();
            }
          }
        },
        {
          icon: 'ios-close',
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  resetFormCompletely() {
    this.submitted = false;
    this.districts = [];
    this.constituencies = [];
    this.mandals = [];
    this.panchayats = [];
    this.imagesdata = [];

    this.form.reset({
      name: '',
      mobile_number: '',
      denomination_id: '',
      state_id: '',
      district_id: '',
      constituency_id: '',
      mandal_id: '',
      panchayat_id: '',
      address: '',
      help: '',
      description: ''
    });

    const fileEl = document.getElementById('helpFileInput') as HTMLInputElement;
    if (fileEl) fileEl.value = '';
    const camEl = document.getElementById('helpCameraInput') as HTMLInputElement;
    if (camEl) camEl.value = '';
  }

  postmeetings() {
    this.submitted = true;
    const v = this.form.value;

    if (
      this.form.invalid ||
      !v.state_id ||
      !v.district_id ||
      !v.constituency_id ||
      !v.mandal_id ||
      !v.panchayat_id
    ) {
      alert('దయచేసి అన్ని వివరాలను మరియు రాష్ట్రం నుండి పంచాయతీ/వార్డు వరకు క్రమంలో ఎంచుకోండి');
      return;
    }

    const loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'సమర్పించబడుతోంది దయచేసి ఆగండి...'
    });
    loading.present();

    const stateLabel = Number(v.state_id) === 2 ? 'Telangana' : 'Andhra Pradesh';

    const data = {
      usr_id: localStorage.getItem('usr_id'),
      mobile_number: v.mobile_number,
      name: v.name,
      denomination_id: Number(v.denomination_id),
      state_id: Number(v.state_id),
      state: stateLabel,
      district_id: Number(v.district_id),
      constituency_id: Number(v.constituency_id),
      mandal_id: Number(v.mandal_id),
      panchayat_id: Number(v.panchayat_id),
      address: v.address,
      description: v.description,
      help: v.help,
      reviewImg: this.imagesdata
    };

    this.service.posthelping(data).subscribe(
      (res: any) => {
        loading.dismiss().catch(() => {});
        if (res && res.status == 200) {
          this.resetFormCompletely();
          alert('సహాయ అభ్యర్థన విజయవంతముగా నమోదు చేయబడింది');
        } else {
          alert('సర్వర్ సమస్య ఏర్పడింది');
        }
      },
      () => {
        loading.dismiss().catch(() => {});
        alert('సర్వర్ సమస్య ఏర్పడింది');
      }
    );
  }
}
