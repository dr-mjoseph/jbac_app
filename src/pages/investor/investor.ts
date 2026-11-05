import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-investor',
  templateUrl: 'investor.html',
})
export class InvestorPage {
  investorForm: FormGroup;
  showSpinner: boolean = false;

  // Location Lists
  states: any[] = [];
  districts: any[] = [];
  constituencies: any[] = [];
  mandals: any[] = [];
  panchayatis: any[] = [];

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
    this.investorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.email]],

      // Address
      state_id: ['', [Validators.required]],
      districts: ['', [Validators.required]],
      constituencyname: ['', [Validators.required]],
      mandals: ['', [Validators.required]],
      panchayati: ['', [Validators.required]],

      // Investment Details
      business_type_id: ['', [Validators.required]],
      denomination_id: ['', [Validators.required]],
      capital_to_invest: ['', [Validators.required]],
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

  // Address Cascading
  onStateChange(stateId: any) {
    this.investorForm.patchValue({
      districts: '',
      constituencyname: '',
      mandals: '',
      panchayati: ''
    });
    this.districts = [];
    this.constituencies = [];
    this.mandals = [];
    this.panchayatis = [];

    if (stateId) {
      this.service.getdistrict(stateId).subscribe((res: any) => {
        this.districts = (res && res.data) ? res.data : [];
      });
    }
  }

  onDistrictChange(distId: any) {
    this.investorForm.patchValue({
      constituencyname: '',
      mandals: '',
      panchayati: ''
    });
    this.constituencies = [];
    this.mandals = [];
    this.panchayatis = [];

    if (distId) {
      this.service.getconsistencys(distId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.constituencies = list.filter((item: any) => item.dstrct_id == distId);
      });
    }
  }

  onConstituencyChange(constId: any) {
    this.investorForm.patchValue({
      mandals: '',
      panchayati: ''
    });
    this.mandals = [];
    this.panchayatis = [];

    if (constId) {
      this.service.getmandals(constId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.mandals = list.filter((item: any) => item.const_id == constId);
      });
    }
  }

  onMandalChange(mandalId: any) {
    this.investorForm.patchValue({
      panchayati: ''
    });
    this.panchayatis = [];

    if (mandalId) {
      this.service.gepanchayatis(mandalId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.panchayatis = list.filter((item: any) => !mandalId || item.mndl_id == mandalId);
      });
    }
  }

  submitInvestor() {
    if (this.investorForm.invalid) {
      const alert = this.alertCtrl.create({
        title: 'దయచేసి అన్ని వివరాలు పూరించండి',
        subTitle: 'Please fill all required fields before submitting.',
        buttons: ['సరే (OK)']
      });
      alert.present();
      return;
    }

    const loader = this.loadingCtrl.create({
      content: 'నమోదు చేయబడుతుంది... (Submitting Investor Profile)...'
    });
    loader.present();

    const formVal = this.investorForm.value;

    const selState = this.states.find(function(s) { return s.id == formVal.state_id; });
    const selDist = this.districts.find(function(d) { return d.id == formVal.districts; });
    const selConst = this.constituencies.find(function(c) { return c.id == formVal.constituencyname; });
    const selMndl = this.mandals.find(function(m) { return m.id == formVal.mandals; });
    const selPanch = this.panchayatis.find(function(p) { return p.id == formVal.panchayati; });

    const selBizType = this.businessTypes.find(function(t) { return t.id == formVal.business_type_id; });
    const selDenom = this.denominations.find(function(d) { return d.id == formVal.denomination_id; });

    const payload = {
      name: formVal.name,
      mobile: formVal.mobile,
      email: formVal.email,

      // Address
      state_id: formVal.state_id,
      state_name: selState ? (selState.state_name || selState.name || '') : '',
      district_id: formVal.districts,
      district_name: selDist ? (selDist.distrct_nm || selDist.districtname || '') : '',
      constituency_id: formVal.constituencyname,
      constituency_name: selConst ? (selConst.const_nm || selConst.name || '') : '',
      mandal_id: formVal.mandals,
      mandal_name: selMndl ? (selMndl.mndl_nm || selMndl.name || '') : '',
      panchayat_id: formVal.panchayati,
      panchayat_name: selPanch ? (selPanch.pnchyt_nm || selPanch.name || '') : '',

      // Investment Details
      business_type_id: formVal.business_type_id,
      business_type: selBizType ? (selBizType.business_type || '') : '',
      denomination_id: formVal.denomination_id,
      denomination: selDenom ? (selDenom.denomation_name || selDenom.denomination_name || '') : '',
      capital_to_invest: formVal.capital_to_invest,
      description: formVal.description
    };

    const self = this;
    this.service.registerInvestor(payload).subscribe(
      (res: any) => {
        loader.dismiss();
        if (res && res.status === 200) {
          const successAlert = self.alertCtrl.create({
            title: 'నమోదు పూర్తయింది! (Success)',
            subTitle: 'మీ ఇన్వెస్టర్ ప్రొఫైల్ విజయవంతంగా నమోదు చేయబడింది. (Investor registration submitted successfully)',
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
