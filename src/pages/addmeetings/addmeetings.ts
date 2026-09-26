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
  locationSourceMessage: string = '';;
  locationLoading: boolean = false;
  locationError: string = '';
  locationSuccess: string = '';
  locationName: string = '';
  locationSourceMessage: string = '';;
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

    // 1. Explicitly prompt user for permission to get real GPS location
    var confirmAlert = this.alertctrl.create({
      mode: 'ios',
      title: 'లొకేషన్ అనుమతి (Location Permission)',
      message: 'మీ ప్రస్తుత ఖచ్చితమైన డివైస్ GPS లొకేషన్ మరియు అడ్రసును ఫారమ్‌లో నమోదు చేయడానికి అనుమతిస్తున్నారా?',
      buttons: [
        {
          text: 'వద్దు (Cancel)',
          role: 'cancel'
        },
        {
          text: 'అనుమతించు (Allow)',
          handler: () => {
            this.executeGpsLocation();
          }
        }
      ]
    });
    confirmAlert.present();
  }

  async executeGpsLocation(): Promise<void> {
    this.locationLoading = true;
    if (this.cdr) {
      this.cdr.detectChanges();
    }

    var reverseGeocode = async (lat: number, lng: number): Promise<string> => {
      try {
        var nominatimUrl = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + lat + '&lon=' + lng + '&addressdetails=1';
        var resNom = await fetch(nominatimUrl, { headers: { 'Accept': 'application/json' } });
        var dataNom = await resNom.json();
        if (dataNom) {
          if (dataNom.display_name && dataNom.display_name.trim().length > 0) {
            return dataNom.display_name.trim();
          }
          if (dataNom.address) {
            var a = dataNom.address;
            var parts = [
              a.house_number || a.building || a.amenity || '',
              a.road || a.street || '',
              a.neighbourhood || a.suburb || '',
              a.village || a.town || a.city || '',
              a.county || a.mandal || '',
              a.state_district || a.district || '',
              a.state || '',
              a.postcode || '',
              a.country || ''
            ].filter(function(p: any) { return !!p && p.trim().length > 0; });
            if (parts.length > 0) {
              return parts.join(', ');
            }
          }
        }
      } catch (e) {
        console.warn('Nominatim geocoding error:', e);
      }

      try {
        var bdcUrl = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + lat + '&longitude=' + lng + '&localityLanguage=en';
        var res = await fetch(bdcUrl);
        var data = await res.json();
        var bdcParts = [
          data.locality || data.name || '',
          data.city || data.principalSubdivision || '',
          data.countryName || ''
        ].filter(function(p: any) { return !!p; });
        if (bdcParts.length > 0) {
          return bdcParts.join(', ');
        }
      } catch (e) {
        console.warn('BigDataCloud geocoding error:', e);
      }

      return lat.toFixed(6) + ', ' + lng.toFixed(6);
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
        this.locationSuccess = 'కరెంటు GPS లొకేషన్ విజయవంతముగా నమోదు చేయబడింది.';
        this.locationSourceMessage = source;
        this.locationLoading = false;
        if (this.cdr) {
          this.cdr.detectChanges();
        }

        var alertSuccess = this.alertctrl.create({
          mode: 'ios',
          title: 'GPS లొకేషన్ నమోదు అయ్యింది!',
          subTitle: 'కూటములు ప్రదేశం: ' + place,
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

    var handleFailure = (reasonMsg: string) => {
      var errorFn = () => {
        this.locationLoading = false;
        this.locationError = reasonMsg;
        if (this.cdr) {
          this.cdr.detectChanges();
        }

        var alertErr = this.alertctrl.create({
          mode: 'ios',
          title: 'GPS లొకేషన్ లోపం',
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

    var tryIpFallback = async (fallbackReason: string) => {
      try {
        var ipLoc: any = null;
        try {
          var res1 = await fetch('https://ipapi.co/json/');
          var d1 = await res1.json();
          if (d1 && d1.latitude && d1.longitude) {
            ipLoc = { lat: Number(d1.latitude), lng: Number(d1.longitude) };
          }
        } catch (e1) {}

        if (!ipLoc) {
          try {
            var res2 = await fetch('https://freeipapi.com/api/json');
            var d2 = await res2.json();
            if (d2 && d2.latitude && d2.longitude) {
              ipLoc = { lat: Number(d2.latitude), lng: Number(d2.longitude) };
            }
          } catch (e2) {}
        }

        if (ipLoc && !isNaN(ipLoc.lat) && !isNaN(ipLoc.lng)) {
          var place = await reverseGeocode(ipLoc.lat, ipLoc.lng);
          applyLocation(ipLoc.lat, ipLoc.lng, place, 'నెట్‌వర్క్ ఆధారిత లొకేషన్ (' + fallbackReason + ').');
          return true;
        }
      } catch (e) {
        console.warn('IP fallback error:', e);
      }
      return false;
    };

    if (!navigator.geolocation) {
      var ok = await tryIpFallback('GPS సపోర్ట్ లేనందున');
      if (!ok) {
        handleFailure('మీ డివైస్ లేదా బ్రౌజర్ లో GPS జియోలొకేషన్ సపోర్ట్ లేదు.');
      }
      return;
    }

    // Tier 1: Hardware GPS with High Accuracy
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var place = await reverseGeocode(lat, lng);
        applyLocation(lat, lng, place, 'డివైస్ GPS ద్వారా ఖచ్చితమైన లొకేషన్ పొందబడింది.');
      },
      (error) => {
        // Tier 2: Low-accuracy fallback
        navigator.geolocation.getCurrentPosition(
          async (lowPos) => {
            var lat = lowPos.coords.latitude;
            var lng = lowPos.coords.longitude;
            var place = await reverseGeocode(lat, lng);
            applyLocation(lat, lng, place, 'నెట్‌వర్క్ / వై-ఫై ద్వారా లొకేషన్ పొందబడింది.');
          },
          async (lowErr) => {
            // Tier 3: IP Geolocation fallback
            var reason = 'GPS అందుబాటులో లేనందున';
            if (error.code === error.PERMISSION_DENIED) {
              reason = 'లొకేషన్ అనుమతి నిరాకరించబడినందున';
            } else if (error.code === error.TIMEOUT) {
              reason = 'GPS సమయం మించినందున';
            }
            var recovered = await tryIpFallback(reason);
            if (!recovered) {
              var msg = 'GPS లొకేషన్ పొందడంలో సమస్య ఏర్పడింది.';
              if (error.code === error.PERMISSION_DENIED) {
                msg = 'లొకేషన్ అనుమతి నిరాకరించబడింది. ఖచ్చితమైన స్థానం నమోదు కోసం దయచేసి మొబైల్ సెట్టింగ్స్ లో లొకేషన్ పర్మిషన్ Allow చేయండి.';
              } else if (error.code === error.TIMEOUT) {
                msg = 'GPS శోధించడానికి సమయం మించిపోయింది. దయచేసి డివైస్ లో GPS / Location ఆన్ లో ఉందో లేదో సరిచూసుకోండి.';
              } else if (error.code === error.POSITION_UNAVAILABLE) {
                msg = 'డివైస్ GPS సిగ్నల్ అందుబాటులో లేదు. దయచేసి డివైస్ లో లొకేషన్ ఆన్ చేయండి.';
              }
              handleFailure(msg);
            }
          },
          {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 60000
          }
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 0
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
