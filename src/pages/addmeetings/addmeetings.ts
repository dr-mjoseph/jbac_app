import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
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
  form: FormGroup;
  locationLoading: boolean = false;
  locationError: string = '';
  locationSuccess: string = '';
  locationName: string = '';
  locationSourceMessage: string = '';
  districts: any;
  mandals: any;
  panchayati: any;
  constituency: any;
  denomation: any
  imagesData: any = []
  loading: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, public frombuilder: FormBuilder, public actionSheetCtrl: ActionSheetController, public camera: Camera, private loadingCtrl: LoadingController, private alertctrl: AlertController, public zone: NgZone, public cdr: ChangeDetectorRef) {
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

  async useCurrentLocation(): Promise<void> {
    this.locationError = '';
    this.locationSuccess = '';
    this.locationName = '';
    this.locationSourceMessage = '';
    this.locationLoading = true;

    var reverseGeocode = async (lat: number, lng: number): Promise<string> => {
      try {
        var bdcUrl = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + lat + '&longitude=' + lng + '&localityLanguage=en';
        var res = await fetch(bdcUrl);
        var data = await res.json();
        var parts = [
          data.locality || data.name || '',
          data.city || data.principalSubdivision || '',
          data.countryName || ''
        ].filter(function(p: any) { return !!p; });
        if (parts.length > 0) {
          return parts.join(', ');
        }
      } catch (e) {
        console.warn('BigDataCloud geocoding error:', e);
      }

      try {
        var nominatimUrl = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + lat + '&lon=' + lng;
        var resNom = await fetch(nominatimUrl);
        var dataNom = await resNom.json();
        if (dataNom && dataNom.display_name) {
          return dataNom.display_name;
        }
      } catch (e) {
        console.warn('Nominatim geocoding error:', e);
      }

      return lat.toFixed(5) + ', ' + lng.toFixed(5);
    };

    var applyLocation = (lat: number, lng: number, place: string, source: string) => {
      var updateFn = () => {
        var googleUrl = 'https://maps.google.com/?q=' + lat + ',' + lng;
        this.form.patchValue({
          location: googleUrl,
          address: place
        });
        if (this.form.controls['location']) {
          this.form.controls['location'].markAsDirty();
          this.form.controls['location'].markAsTouched();
        }
        if (this.form.controls['address']) {
          this.form.controls['address'].markAsDirty();
          this.form.controls['address'].markAsTouched();
        }

        this.locationName = place;
        this.locationSuccess = 'కరెంటు లొకేషన్ విజయవంతముగా నమోదు చేయబడింది.';
        this.locationSourceMessage = source;
        this.locationLoading = false;
        if (this.cdr) {
          this.cdr.detectChanges();
        }

        var alertSuccess = this.alertctrl.create({
          mode: 'ios',
          title: 'లొకేషన్ నమోదు అయ్యింది!',
          subTitle: place,
          message: googleUrl,
          buttons: ['సరే']
        });
        alertSuccess.present();
      };

      if (this.zone) {
        this.zone.run(updateFn);
      } else {
        updateFn();
      }
    };

    var fallbackToIp = async (reasonMsg: string) => {
      try {
        var ipRes = await fetch('https://ipapi.co/json/');
        var ipData = await ipRes.json();
        if (ipData && ipData.latitude && ipData.longitude) {
          var lat = parseFloat(ipData.latitude);
          var lng = parseFloat(ipData.longitude);
          var parts = [ipData.city, ipData.region, ipData.country_name].filter(function(p: any) { return !!p; });
          var place = parts.join(', ') || (lat + ', ' + lng);
          applyLocation(lat, lng, place, 'నెట్‌వర్క్ (IP) ఆధారంగా లొకేషన్ నమోదు చేయబడింది.');
          return;
        }
      } catch (ipErr) {
        console.warn('IP location fallback failed:', ipErr);
      }

      var errorFn = () => {
        this.locationLoading = false;
        this.locationError = reasonMsg;
        if (this.cdr) {
          this.cdr.detectChanges();
        }

        var alertErr = this.alertctrl.create({
          mode: 'ios',
          title: 'లొకేషన్ లోపం',
          message: reasonMsg,
          buttons: ['సరే']
        });
        alertErr.present();
      };

      if (this.zone) {
        this.zone.run(errorFn);
      } else {
        errorFn();
      }
    };

    if (!navigator.geolocation) {
      await fallbackToIp('మీ డివైస్ లో GPS జియోలొకేషన్ సపోర్ట్ లేదు.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var place = await reverseGeocode(lat, lng);
        applyLocation(lat, lng, place, 'GPS ద్వారా లొకేషన్ విజయవంతముగా పొందబడింది.');
      },
      async (error) => {
        var msg = 'లొకేషన్ పొందడంలో సమస్య ఏర్పడింది.';
        if (error.code === error.PERMISSION_DENIED) {
          msg = 'లొకేషన్ అనుమతి నిరాకరించబడింది. దయచేసి మొబైల్ సెట్టింగ్స్ లో లొకేషన్ పర్మిషన్ ఆన్ చేయండి.';
        } else if (error.code === error.TIMEOUT) {
          msg = 'లొకేషన్ రిక్వెస్ట్ టైమ్‌అవుట్ అయ్యింది.';
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          msg = 'లొకేషన్ సిగ్నల్ అందుబాటులో లేదు.';
        }
        await fallbackToIp(msg);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
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
