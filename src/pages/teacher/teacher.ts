import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html',
})
export class TeacherPage {
  teacherForm: FormGroup;
  showSpinner: boolean = false;

  // States
  states: any[] = [];

  // Institute Location Lists
  instDistricts: any[] = [];
  instConstituencies: any[] = [];
  instMandals: any[] = [];
  instPanchayatis: any[] = [];

  // Residential Location Lists
  resDistricts: any[] = [];
  resConstituencies: any[] = [];
  resMandals: any[] = [];
  resPanchayatis: any[] = [];

  // Master Dropdown Data
  roleCategories: any[] = [];
  qualificationCategories: any[] = [];
  experienceLevels: any[] = [];
  familyBackgrounds: any[] = [];
  institutionTypes: any[] = [];
  denominations: any[] = [];

  casteList: string[] = ['OC', 'BC-A', 'BC-B', 'BC-C', 'BC-D', 'BC-E', 'SC', 'ST', 'Others / ఇతరులు'];

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public service: ServiceProvider
  ) {
    this.teacherForm = this.fb.group({
      name_with_surname: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.email]],
      exact_designation: ['', [Validators.required]],
      role_category: ['', [Validators.required]],
      qualification_category: ['', [Validators.required]],
      total_experience_years: ['', [Validators.required]],
      experience_in: ['', [Validators.required]],

      // Social & Spiritual
      caste: ['', [Validators.required]],
      subcaste: [''],
      faith_category: ['', [Validators.required]],
      family_background: ['', [Validators.required]],
      pastor_phone: ['', [Validators.pattern(/^[0-9]{10}$/)]],

      // Institution & Employment
      teacher_type: ['', [Validators.required]],
      working_in: ['', [Validators.required]],
      institute_name: ['', [Validators.required]],

      // Institute Address
      inst_state_id: ['', [Validators.required]],
      inst_districts: ['', [Validators.required]],
      inst_constituencyname: ['', [Validators.required]],
      inst_mandals: ['', [Validators.required]],
      inst_panchayati: ['', [Validators.required]],
      inst_address: [''],

      // Residential Address
      res_state_id: ['', [Validators.required]],
      res_districts: ['', [Validators.required]],
      res_constituencyname: ['', [Validators.required]],
      res_mandals: ['', [Validators.required]],
      res_panchayati: ['', [Validators.required]],
      res_address: ['']
    });
  }

  ionViewDidLoad() {
    // Pre-seed all master dropdowns synchronously so the UI is immediately populated
    this.roleCategories = this.getDefaultRoles();
    this.qualificationCategories = this.getDefaultQualifications();
    this.familyBackgrounds = this.getDefaultFamilyBackgrounds();
    this.institutionTypes = this.getDefaultInstitutionTypes();
    this.experienceLevels = this.getDefaultExperienceLevels();
    this.denominations = this.getDefaultDenominations();

    this.loadStates();
    this.loadTeachingMasterData();
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

  loadTeachingMasterData() {
    this.service.getTeachingMasterData().subscribe(
      (res: any) => {
        const payload = (res && res.data) ? res.data : res;
        if (payload) {
          if (payload.roles && payload.roles.length) this.roleCategories = payload.roles;
          if (payload.backgrounds && payload.backgrounds.length) {
            this.familyBackgrounds = payload.backgrounds;
          } else if (payload.family_backgrounds && payload.family_backgrounds.length) {
            this.familyBackgrounds = payload.family_backgrounds;
          }
          if (payload.institutions && payload.institutions.length) {
            this.institutionTypes = payload.institutions;
          } else if (payload.institution_types && payload.institution_types.length) {
            this.institutionTypes = payload.institution_types;
          }
          if (payload.experience && payload.experience.length) {
            this.experienceLevels = payload.experience;
          } else if (payload.experience_levels && payload.experience_levels.length) {
            this.experienceLevels = payload.experience_levels;
          }
          if (payload.qualifications && payload.qualifications.length) {
            this.qualificationCategories = payload.qualifications;
          }
          if (payload.denominations && payload.denominations.length) {
            this.denominations = payload.denominations;
          }
        }
      },
      () => {
        if (!this.roleCategories || !this.roleCategories.length) this.roleCategories = this.getDefaultRoles();
        if (!this.familyBackgrounds || !this.familyBackgrounds.length) this.familyBackgrounds = this.getDefaultFamilyBackgrounds();
        if (!this.institutionTypes || !this.institutionTypes.length) this.institutionTypes = this.getDefaultInstitutionTypes();
        if (!this.experienceLevels || !this.experienceLevels.length) this.experienceLevels = this.getDefaultExperienceLevels();
        if (!this.qualificationCategories || !this.qualificationCategories.length) this.qualificationCategories = this.getDefaultQualifications();
        if (!this.denominations || !this.denominations.length) this.denominations = this.getDefaultDenominations();
      }
    );
  }

  loadDenominations() {
    this.service.getdenomation().subscribe(
      (res: any) => {
        const list = (res && res.data) ? res.data : (Array.isArray(res) ? res : []);
        if (list && list.length > 0) {
          this.denominations = list;
        } else if (!this.denominations || this.denominations.length === 0) {
          this.denominations = this.getDefaultDenominations();
        }
      },
      () => {
        if (!this.denominations || this.denominations.length === 0) {
          this.denominations = this.getDefaultDenominations();
        }
      }
    );
  }

  getDefaultDenominations(): any[] {
    return [
      { id: 1, name: 'అసెంబ్లీ ఆఫ్ గాడ్ - Assembly of God', denomation_name: 'అసెంబ్లీ ఆఫ్ గాడ్ - Assembly of God', denomination_name: 'అసెంబ్లీ ఆఫ్ గాడ్ - Assembly of God' },
      { id: 2, name: 'బాప్టిస్ట్ - Baptist', denomation_name: 'బాప్టిస్ట్ - Baptist', denomination_name: 'బాప్టిస్ట్ - Baptist' },
      { id: 3, name: 'బైబిల్ మిషన్ - Bible Mission', denomation_name: 'బైబిల్ మిషన్ - Bible Mission', denomination_name: 'బైబిల్ మిషన్ - Bible Mission' },
      { id: 4, name: 'కాథలిక్ - Catholic', denomation_name: 'కాథలిక్ - Catholic', denomination_name: 'కాథలిక్ - Catholic' },
      { id: 5, name: 'సి.ఎస్.ఐ - CSI (Church of South India)', denomation_name: 'సి.ఎస్.ఐ - CSI (Church of South India)', denomination_name: 'సి.ఎస్.ఐ - CSI (Church of South India)' },
      { id: 6, name: 'సి.ఎన్.ఐ - CNI (Church of North India)', denomation_name: 'సి.ఎన్.ఐ - CNI (Church of North India)', denomination_name: 'సి.ఎన్.ఐ - CNI (Church of North India)' },
      { id: 7, name: 'లూథరన్ - Lutheran', denomation_name: 'లూథరన్ - Lutheran', denomination_name: 'లూథరన్ - Lutheran' },
      { id: 8, name: 'మెథడిస్ట్ - Methodist', denomation_name: 'మెథడిస్ట్ - Methodist', denomination_name: 'మెథడిస్ట్ - Methodist' },
      { id: 9, name: 'పెంతెకొస్తు - Pentecostal', denomation_name: 'పెంతెకొస్తు - Pentecostal', denomination_name: 'పెంతెకొస్తు - Pentecostal' },
      { id: 10, name: 'సాల్వేషన్ ఆర్మీ - Salvation Army', denomation_name: 'సాల్వేషన్ ఆర్మీ - Salvation Army', denomination_name: 'సాల్వేషన్ ఆర్మీ - Salvation Army' },
      { id: 11, name: 'సెవెంత్ డే అడ్వెంటిస్ట్ - Seventh-day Adventist', denomation_name: 'సెవెంత్ డే అడ్వెంటిస్ట్ - Seventh-day Adventist', denomination_name: 'సెవెంత్ డే అడ్వెంటిస్ట్ - Seventh-day Adventist' },
      { id: 12, name: 'ఇండిపెండెంట్ చర్చి - Independent Church', denomation_name: 'ఇండిపెండెంట్ చర్చి - Independent Church', denomination_name: 'ఇండిపెండెంట్ చర్చి - Independent Church' },
      { id: 13, name: 'ఇతరులు - Others', denomation_name: 'ఇతరులు - Others', denomination_name: 'ఇతరులు - Others' }
    ];
  }

  getDefaultRoles(): any[] {
    return [
      { id: 1, name_en: 'Administration', name_te: 'పరిపాలన (Administration)' },
      { id: 2, name_en: 'Teaching', name_te: 'బోధన (Teaching)' },
      { id: 3, name_en: 'Administration and Teaching', name_te: 'పరిపాలన మరియు బోధన (Administration & Teaching)' }
    ];
  }

  getDefaultFamilyBackgrounds(): any[] {
    return [
      { id: 1, name_en: 'First Generation Employee', name_te: 'మొదటి తరం ఉద్యోగి (First Generation)' },
      { id: 2, name_en: 'Second Generation', name_te: 'రెండవ తరం ఉద్యోగి (Second Generation)' },
      { id: 3, name_en: 'Third Generation', name_te: 'మూడవ తరం ఉద్యోగి (Third Generation)' },
      { id: 4, name_en: 'Fourth Generation', name_te: 'నాల్గవ తరం ఉద్యోగి (Fourth Generation)' },
      { id: 5, name_en: 'Sixth Generation Employee', name_te: 'ఆరవ తరం ఉద్యోగి (Sixth Generation)' }
    ];
  }

  getDefaultInstitutionTypes(): any[] {
    return [
      { id: 1, name_en: 'Anganwady', name_te: 'అంగన్‌వాడీ (Anganwady)' },
      { id: 2, name_en: 'Play School', name_te: 'ప్లే స్కూల్ (Play School)' },
      { id: 3, name_en: 'Primary School', name_te: 'ప్రాథమిక పాఠశాల (Primary School)' },
      { id: 4, name_en: 'High School', name_te: 'ఉన్నత పాఠశాల (High School)' },
      { id: 5, name_en: 'Junior College', name_te: 'జూనియర్ కళాశాల (Junior College)' },
      { id: 6, name_en: 'Vocational College', name_te: 'వృత్తి విద్యా కళాశాల (Vocational College)' },
      { id: 7, name_en: 'Diploma College', name_te: 'డిప్లొమా కళాశాల (Diploma College)' },
      { id: 8, name_en: 'Degree College', name_te: 'డిగ్రీ కళాశాల (Degree College)' },
      { id: 9, name_en: 'Technical College', name_te: 'ఇంజనీరింగ్ / సాంకేతిక కళాశాల (Technical College)' },
      { id: 10, name_en: 'Medical College', name_te: 'వైద్య కళాశాల (Medical College)' }
    ];
  }

  getDefaultExperienceLevels(): any[] {
    return [
      { id: 1, name_en: '0-1 Years', name_te: '0 - 1 సంవత్సరం' },
      { id: 2, name_en: '1-3 Years', name_te: '1 - 3 సంవత్సరాలు' },
      { id: 3, name_en: '3-5 Years', name_te: '3 - 5 సంవత్సరాలు' },
      { id: 4, name_en: '5-10 Years', name_te: '5 - 10 సంవత్సరాలు' },
      { id: 5, name_en: '10-15 Years', name_te: '10 - 15 సంవత్సరాలు' },
      { id: 6, name_en: '15-20 Years', name_te: '15 - 20 సంవత్సరాలు' },
      { id: 7, name_en: '20+ Years', name_te: '20 కంటే ఎక్కువ సంవత్సరాలు' }
    ];
  }

  getDefaultQualifications(): any[] {
    return [
      { id: 1, name: '10th or Below 10th' },
      { id: 2, name: 'Inter' },
      { id: 3, name: 'UG' },
      { id: 4, name: 'PG' },
      { id: 5, name: 'Ph.D' },
      { id: 6, name: 'Post Doctoral' }
    ];
  }

  // ==========================================
  // INSTITUTE LOCATION CASCADING
  // ==========================================
  onInstStateChange(stateId: any) {
    this.instDistricts = [];
    this.instConstituencies = [];
    this.instMandals = [];
    this.instPanchayatis = [];

    this.teacherForm.patchValue({
      inst_districts: '',
      inst_constituencyname: '',
      inst_mandals: '',
      inst_panchayati: ''
    });

    if (stateId) {
      this.service.getdistrict(stateId).subscribe((res: any) => {
        this.instDistricts = (res && res.data) ? res.data : [];
      });
    }
  }

  onInstDistrictChange(districtId: any) {
    this.instConstituencies = [];
    this.instMandals = [];
    this.instPanchayatis = [];

    this.teacherForm.patchValue({
      inst_constituencyname: '',
      inst_mandals: '',
      inst_panchayati: ''
    });

    if (districtId) {
      this.service.getconsistencys(districtId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.instConstituencies = list.filter((item: any) => item.dstrct_id == districtId);
      });
    }
  }

  onInstConstituencyChange(constId: any) {
    this.instMandals = [];
    this.instPanchayatis = [];

    this.teacherForm.patchValue({
      inst_mandals: '',
      inst_panchayati: ''
    });

    if (constId) {
      this.service.getmandals(constId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.instMandals = list.filter((item: any) => item.const_id == constId);
      });
    }
  }

  onInstMandalChange(mandalId: any) {
    this.instPanchayatis = [];

    this.teacherForm.patchValue({
      inst_panchayati: ''
    });

    if (mandalId) {
      this.service.gepanchayatis(mandalId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.instPanchayatis = list.filter((item: any) => item.mndl_id == mandalId);
      });
    }
  }

  // ==========================================
  // RESIDENTIAL LOCATION CASCADING
  // ==========================================
  onResStateChange(stateId: any) {
    this.resDistricts = [];
    this.resConstituencies = [];
    this.resMandals = [];
    this.resPanchayatis = [];

    this.teacherForm.patchValue({
      res_districts: '',
      res_constituencyname: '',
      res_mandals: '',
      res_panchayati: ''
    });

    if (stateId) {
      this.service.getdistrict(stateId).subscribe((res: any) => {
        this.resDistricts = (res && res.data) ? res.data : [];
      });
    }
  }

  onResDistrictChange(districtId: any) {
    this.resConstituencies = [];
    this.resMandals = [];
    this.resPanchayatis = [];

    this.teacherForm.patchValue({
      res_constituencyname: '',
      res_mandals: '',
      res_panchayati: ''
    });

    if (districtId) {
      this.service.getconsistencys(districtId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.resConstituencies = list.filter((item: any) => item.dstrct_id == districtId);
      });
    }
  }

  onResConstituencyChange(constId: any) {
    this.resMandals = [];
    this.resPanchayatis = [];

    this.teacherForm.patchValue({
      res_mandals: '',
      res_panchayati: ''
    });

    if (constId) {
      this.service.getmandals(constId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.resMandals = list.filter((item: any) => item.const_id == constId);
      });
    }
  }

  onResMandalChange(mandalId: any) {
    this.resPanchayatis = [];

    this.teacherForm.patchValue({
      res_panchayati: ''
    });

    if (mandalId) {
      this.service.gepanchayatis(mandalId).subscribe((res: any) => {
        const list = (res && res.data) ? res.data : [];
        this.resPanchayatis = list.filter((item: any) => item.mndl_id == mandalId);
      });
    }
  }

  // ==========================================
  // FORM SUBMISSION
  // ==========================================
  submitTeacher() {
    if (this.teacherForm.invalid) {
      const alert = this.alertCtrl.create({
        title: 'దయచేసి వివరాలను సరిచూసుకోండి (Please check details)',
        subTitle: 'ఎరుపు రంగుతో ఉన్న వివరాలను తప్పనిసరిగా నమోదు చేయాలి.',
        buttons: ['సరే (OK)']
      });
      alert.present();
      return;
    }

    const loader = this.loadingCtrl.create({
      content: 'మీ వివరాలు నమోదవుతున్నాయి... (Submitting...)',
      spinner: 'crescent'
    });
    loader.present();

    const formVal = this.teacherForm.value;

    const payload = {
      name_with_surname: formVal.name_with_surname,
      gender: formVal.gender,
      mobile: formVal.mobile,
      email: formVal.email || '',
      exact_designation: formVal.exact_designation,
      role_category: formVal.role_category,
      qualification_category: formVal.qualification_category,
      total_experience_years: formVal.total_experience_years,
      experience_in: formVal.experience_in,
      caste: formVal.caste,
      subcaste: formVal.subcaste || '',
      faith_category: formVal.faith_category,
      family_background: formVal.family_background,
      pastor_phone: formVal.pastor_phone || '',
      teacher_type: formVal.teacher_type,
      working_in: formVal.working_in,
      institute_name: formVal.institute_name,

      // Institute Address
      inst_state_id: formVal.inst_state_id,
      inst_district_id: formVal.inst_districts,
      inst_constituency_id: formVal.inst_constituencyname,
      inst_mandal_id: formVal.inst_mandals,
      inst_panchayat_id: formVal.inst_panchayati,
      inst_address: formVal.inst_address || '',

      // Residential Address
      res_state_id: formVal.res_state_id,
      res_district_id: formVal.res_districts,
      res_constituency_id: formVal.res_constituencyname,
      res_mandal_id: formVal.res_mandals,
      res_panchayat_id: formVal.res_panchayati,
      res_address: formVal.res_address || ''
    };

    const self = this;
    this.service.registerTeacher(payload).subscribe(
      (res: any) => {
        loader.dismiss();
        if (res && (res.status === 200 || res.id)) {
          const successAlert = self.alertCtrl.create({
            title: 'నమోదు పూర్తయింది! (Success)',
            subTitle: 'మీ బోధనా రంగ ఉద్యోగి వివరాలు విజయవంతంగా నమోదు చేయబడ్డాయి.',
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
