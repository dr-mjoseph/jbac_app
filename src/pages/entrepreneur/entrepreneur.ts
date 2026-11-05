import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-entrepreneur',
  templateUrl: 'entrepreneur.html',
})
export class EntrepreneurPage {
  entrepreneurForm: FormGroup;
  showSpinner: boolean = false;

  // Personal Location Lists
  states: any[] = [];
  personalDistricts: any[] = [];
  personalConstituencies: any[] = [];
  personalMandals: any[] = [];
  personalPanchayatis: any[] = [];

  // Business Location Lists
  businessDistricts: any[] = [];
  businessConstituencies: any[] = [];
  businessMandals: any[] = [];
  businessPanchayatis: any[] = [];

  // Metadata
  businessTypes: any[] = [];
  denominations: any[] = [];

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public service: ServiceProvider
  ) {
    this.entrepreneurForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.email]],

      // Personal Address
      state_id: ['', [Validators.required]],
      districts: ['', [Validators.required]],
      constituencyname: ['', [Validators.required]],
      mandals: ['', [Validators.required]],
      panchayati: ['', [Validators.required]],

      // Business Setup Place
      business_state_id: ['', [Validators.required]],
      business_districts: ['', [Validators.required]],
      business_constituencyname: ['', [Validators.required]],
      business_mandals: ['', [Validators.required]],
      business_panchayati: ['', [Validators.required]],

      // Business & Finance
      business_type_id: ['', [Validators.required]],
      denomination_id: ['', [Validators.required]],
      self_fund: ['', [Validators.required]],
      capital_need: ['', [Validators.required]],
      description: ['']
    });
  }

  ionViewDidLoad() {
    this.loadStates();
    this.loadBusinessTypes();
    this.loadDenominations();
  }

  gotohome() {
    this.navCtrl.setRoot('HomePage');
  }

  loadStates() {
    this.service.getstates().subscribe(
      (res: any) => {
        if (res && res.data) {
          this.states = res.data;
        } else {
          this.states = [
            { id: 1, state_name: 'Andhra Pradesh-ఆంధ్రప్రదేశ్ (AP)', name: 'Andhra Pradesh (AP)' },
            { id: 2, state_name: 'Telangana-తెలంగాణ (TG)', name: 'Telangana (TG)' }
          ];
        }
      },
      () => {
        this.states = [
          { id: 1, state_name: 'Andhra Pradesh-ఆంధ్రప్రదేశ్ (AP)', name: 'Andhra Pradesh (AP)' },
          { id: 2, state_name: 'Telangana-తెలంగాణ (TG)', name: 'Telangana (TG)' }
        ];
      }
    );
  }

  loadBusinessTypes() {
    this.service.getBusinessTypes().subscribe(
      (res: any) => {
        if (res && res.data) {
          this.businessTypes = res.data;
        }
      },
      (err: any) => console.log('Error loading business types', err)
    );
  }

  loadDenominations() {
    this.service.getdenomation().subscribe(
      (res: any) => {
        if (res && res.data) {
          this.denominations = res.data;
        }
      },
      (err: any) => console.log('Error loading denominations', err)
    );
  }

  // Personal Address Cascade
  onPersonalStateChange(stateId: any) {
    this.entrepreneurForm.patchValue({
      districts: '',
      constituencyname: '',
      mandals: '',
      panchayati: ''
    });
    this.personalDistricts = [];
    this.personalConstituencies = [];
    this.personalMandals = [];
    this.personalPanchayatis = [];

    if (stateId) {
      this.service.getdistrict(stateId).subscribe((res: any) => {
        this.personalDistricts = (res && res.data) ? res.data : [];
      });
    }
  }

  onPersonalDistrictChange(distId: any) {
    this.entrepreneurForm.patchValue({
      constituencyname: '',
      mandals: '',
      panchayati: ''
    });
    this.personalConstituencies = [];
    this.personalMandals = [];
    this.personalPanchayatis = [];

    if (distId) {
      this.service.getconsistencys(distId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.personalConstituencies = list.filter((item: any) => item.dstrct_id == distId);
      });
    }
  }

  onPersonalConstituencyChange(constId: any) {
    this.entrepreneurForm.patchValue({
      mandals: '',
      panchayati: ''
    });
    this.personalMandals = [];
    this.personalPanchayatis = [];

    if (constId) {
      this.service.getmandals(constId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.personalMandals = list.filter((item: any) => item.const_id == constId);
      });
    }
  }

  onPersonalMandalChange(mandalId: any) {
    this.entrepreneurForm.patchValue({
      panchayati: ''
    });
    this.personalPanchayatis = [];

    if (mandalId) {
      this.service.gepanchayatis(mandalId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.personalPanchayatis = list.filter((item: any) => !mandalId || item.mndl_id == mandalId);
      });
    }
  }

  // Business Setup Place Cascade
  onBusinessStateChange(stateId: any) {
    this.entrepreneurForm.patchValue({
      business_districts: '',
      business_constituencyname: '',
      business_mandals: '',
      business_panchayati: ''
    });
    this.businessDistricts = [];
    this.businessConstituencies = [];
    this.businessMandals = [];
    this.businessPanchayatis = [];

    if (stateId) {
      this.service.getdistrict(stateId).subscribe((res: any) => {
        this.businessDistricts = (res && res.data) ? res.data : [];
      });
    }
  }

  onBusinessDistrictChange(distId: any) {
    this.entrepreneurForm.patchValue({
      business_constituencyname: '',
      business_mandals: '',
      business_panchayati: ''
    });
    this.businessConstituencies = [];
    this.businessMandals = [];
    this.businessPanchayatis = [];

    if (distId) {
      this.service.getconsistencys(distId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.businessConstituencies = list.filter((item: any) => item.dstrct_id == distId);
      });
    }
  }

  onBusinessConstituencyChange(constId: any) {
    this.entrepreneurForm.patchValue({
      business_mandals: '',
      business_panchayati: ''
    });
    this.businessMandals = [];
    this.businessPanchayatis = [];

    if (constId) {
      this.service.getmandals(constId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.businessMandals = list.filter((item: any) => item.const_id == constId);
      });
    }
  }

  onBusinessMandalChange(mandalId: any) {
    this.entrepreneurForm.patchValue({
      business_panchayati: ''
    });
    this.businessPanchayatis = [];

    if (mandalId) {
      this.service.gepanchayatis(mandalId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.businessPanchayatis = list.filter((item: any) => !mandalId || item.mndl_id == mandalId);
      });
    }
  }

  submitEntrepreneur() {
    if (this.entrepreneurForm.invalid) {
      const alert = this.alertCtrl.create({
        title: 'దయచేసి అన్ని వివరాలు పూరించండి',
        subTitle: 'Please fill all required fields before submitting.',
        buttons: ['సరే (OK)']
      });
      alert.present();
      return;
    }

    const loader = this.loadingCtrl.create({
      content: 'నమోదు చేయబడుతుంది... (Submitting Entrepreneur Profile)...'
    });
    loader.present();

    const formVal = this.entrepreneurForm.value;

    const selPersonalState = this.states.find(function(s) { return s.id == formVal.state_id; });
    const selPersonalDist = this.personalDistricts.find(function(d) { return d.id == formVal.districts; });
    const selPersonalConst = this.personalConstituencies.find(function(c) { return c.id == formVal.constituencyname; });
    const selPersonalMndl = this.personalMandals.find(function(m) { return m.id == formVal.mandals; });
    const selPersonalPanch = this.personalPanchayatis.find(function(p) { return p.id == formVal.panchayati; });

    const selBizState = this.states.find(function(s) { return s.id == formVal.business_state_id; });
    const selBizDist = this.businessDistricts.find(function(d) { return d.id == formVal.business_districts; });
    const selBizConst = this.businessConstituencies.find(function(c) { return c.id == formVal.business_constituencyname; });
    const selBizMndl = this.businessMandals.find(function(m) { return m.id == formVal.business_mandals; });
    const selBizPanch = this.businessPanchayatis.find(function(p) { return p.id == formVal.business_panchayati; });

    const selBizType = this.businessTypes.find(function(t) { return t.id == formVal.business_type_id; });
    const selDenom = this.denominations.find(function(d) { return d.id == formVal.denomination_id; });

    const payload = {
      name: formVal.name,
      mobile: formVal.mobile,
      email: formVal.email,

      // Personal Address
      state_id: formVal.state_id,
      state_name: selPersonalState ? (selPersonalState.state_name || selPersonalState.name || '') : '',
      district_id: formVal.districts,
      district_name: selPersonalDist ? (selPersonalDist.distrct_nm || selPersonalDist.districtname || '') : '',
      constituency_id: formVal.constituencyname,
      constituency_name: selPersonalConst ? (selPersonalConst.const_nm || selPersonalConst.name || '') : '',
      mandal_id: formVal.mandals,
      mandal_name: selPersonalMndl ? (selPersonalMndl.mndl_nm || selPersonalMndl.name || '') : '',
      panchayat_id: formVal.panchayati,
      panchayat_name: selPersonalPanch ? (selPersonalPanch.pnchyt_nm || selPersonalPanch.name || '') : '',

      // Business Setup Location
      business_state_id: formVal.business_state_id,
      business_state_name: selBizState ? (selBizState.state_name || selBizState.name || '') : '',
      business_district_id: formVal.business_districts,
      business_district_name: selBizDist ? (selBizDist.distrct_nm || selBizDist.districtname || '') : '',
      business_constituency_id: formVal.business_constituencyname,
      business_constituency_name: selBizConst ? (selBizConst.const_nm || selBizConst.name || '') : '',
      business_mandal_id: formVal.business_mandals,
      business_mandal_name: selBizMndl ? (selBizMndl.mndl_nm || selBizMndl.name || '') : '',
      business_panchayat_id: formVal.business_panchayati,
      business_panchayat_name: selBizPanch ? (selBizPanch.pnchyt_nm || selBizPanch.name || '') : '',

      // Business & Finance
      business_type_id: formVal.business_type_id,
      business_type: selBizType ? (selBizType.business_type || '') : '',
      denomination_id: formVal.denomination_id,
      denomination: selDenom ? (selDenom.denomation_name || selDenom.denomination_name || '') : '',
      self_fund: formVal.self_fund,
      capital_need: formVal.capital_need,
      description: formVal.description
    };

    const self = this;
    this.service.registerEntrepreneur(payload).subscribe(
      (res: any) => {
        loader.dismiss();
        if (res && res.status === 200) {
          const successAlert = self.alertCtrl.create({
            title: 'నమోదు పూర్తయింది! (Success)',
            subTitle: 'మీ ఎంటర్‌ప్రెన్యూర్ ప్రొఫైల్ విజయవంతంగా నమోదు చేయబడింది. (Entrepreneur registration submitted successfully)',
            buttons: [
              {
                text: 'సరే (OK)',
                handler: () => {
                  self.navCtrl.setRoot('FormsPage');
                }
              }
            ]
          });
          successAlert.present();
        } else {
          const msg = (res && res.message) ? res.message : 'Submission failed. Please try again.';
          const errAlert = self.alertCtrl.create({
            title: 'విఫలమైంది (Failed)',
            subTitle: msg,
            buttons: ['సరే (OK)']
          });
          errAlert.present();
        }
      },
      () => {
        loader.dismiss();
        const netAlert = self.alertCtrl.create({
          title: 'నెట్‌వర్క్ లోపం (Network Error)',
          subTitle: 'Unable to connect to server. Please try again.',
          buttons: ['సరే (OK)']
        });
        netAlert.present();
      }
    );
  }
}
