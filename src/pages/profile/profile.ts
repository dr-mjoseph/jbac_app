import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
// import { HomePage } from '../home/home';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  getpastorsdatas: any = [];
  getchurchfilter: any = [];
  getstudentspastors: any = [];
  getchurchstudentfilter: any = [];
  getministrypastors: any = [];
  getchurchpastors: any = [];
  getorganizationpastors: any = [];
  getpastorassciationas: any = [];
  ministryname: any = [];

  pastorform: FormGroup;
  churchregsiterform: FormGroup;
  updateprofileministry: FormGroup;
  beliverform: FormGroup;
  studentform: FormGroup;
  independentorgainsationform: FormGroup;
  pastorsassociations: FormGroup;
  ministryform: FormGroup;

  categoryid: any;
  category: any;
  name: any;
  mobile_number: any;

  details: any = [];

  lead: boolean = false;
  mini: boolean = false;
  leadertype: boolean = false;
  leadtype: boolean = false;
  wingtype: boolean = false;
  wingtypes: boolean = false;
  subward: boolean = false;
  father: boolean = false;

  states: any = [
    { id: 1, state_name: 'ఆంధ్రప్రదేశ్ (Andhra Pradesh - AP)' },
    { id: 2, state_name: 'తెలంగాణ (Telangana - TG)' }
  ];
  districts: any = [];
  mandals: any = [];
  constituency: any = [];
  panchayati: any = [];
  resDistricts: any = [];
  resConstituency: any = [];
  resMandals: any = [];
  resPanchayati: any = [];
  denomation: any;

  bliversdata: any

  loading: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public service: ServiceProvider) {

    this.pastorform = this.formBuilder.group({
      state_id: [''],
      pastorname: [''],
      dob: [''],
      about_desp: [''],
      gender: [''],
      phonenumber: [''],
      phonenumber2: [''],
      pa_phonenumber: [''],
      staus: [''],
      designation: [''],
      caste: [''],
      nativeplace: [''],
      talent: [''],
      education: [''],
      district_id: [''],
      constituency_id: [''],
      mandal_id: [''],
      panchayat_id: [''],
      ward: [''],
      youtubechanel: [''],
      password: [''],
      leaders: [''],
      leadertype: ['',],
      generaltype: ['',],
      wingtype: ['',],
      facebook: [''],
      god: [''],
      lifegoal: [''],
      denomination_id: [''],
      villagename: [''],
      wingtypes: [''],
      pastortype: [''],
      ministry_id: [''],
      subward: [''],
      fellowship: [''],
      assicoation_id: [''],
      position: [''],
      subcaste: [''],
      leadership: ['']
    })

    this.churchregsiterform = this.formBuilder.group({
      state_id: [''],
      church_name: ['', [Validators.required]],
      denomination_id: [''],
      total_members: [''],
      district_id: [''],
      constituency_id: [''],
      mandal_id: [''],
      village_id: [''],
      street: [''],
      pastor_id: [''],
      location: [''],
      contactnumber: [''],
      description: [''],
      village_name: [''],
      password: [''],
      churchtype: [''],
      ministry_id: [''],
      facebook: [''],
      youtube: ['']
    })

    this.updateprofileministry = this.formBuilder.group({
      state_id: [''],
      ministryname: [''],
      denomation: [''],
      ministryemail: [''],
      ministrywebsite: [''],
      headnmber: [''],
      number_ofchurches: [''],
      number_ofmembers: [''],
      district_id: [''],
      constituency_id: [''],
      mandal_id: [''],
      panchayat_id: [''],
      password: [''],
      pastor: [''],
      description: [''],
      term: [''],
    })

    this.beliverform = this.formBuilder.group({
      state_id: [''],
      fname: [''],
      whatsapp: [''],
      dob: [''],
      gender: [''],
      email: [''],
      mobile_number: [''],
      status: [''],
      income: [''],
      caste: [''],
      subcaste: [''],
      nativeplace: [''],
      talent: [''],
      education: [''],
      designation: [''],
      dpartment: [''],
      districts: [''],
      mandals: [''],
      panchayati: [''],
      constituencyname: [''],
      villagename: [''],
      wardnumber: [''],
      ward: [''],
      nri: [''],
      leadership: [''],
      leadertype: [''],
      generaltype: [''],
      subward: [''],
      wingtype: [''],
      wingtypes: [''],
      denomination_id: [''],
      hobbies: [''],
      spirti: [''],
      lifegoal: [''],
      church: [''],
      pastor: [''],
      youtube: [''],
      lname: [''],
      god: [''],
    })

    this.studentform = this.formBuilder.group({
      state_id: [''],
      studentname: [''],
      gender: [''],
      number: [''],
      study: [''],
      schname: [''],
      fathername: [''],
      aboutyourself: [''],
      nativeplace: [''],
      caste: [''],
      talent: [''],
      district_id: [''],
      constituency_id: [''],
      mandal_id: [''],
      village_id: [''],
      password: [''],
      church: ['',],
      pastor: [''],
      leadership: [''],
      leadertype: [''],
      generaltype: [''],
      wingtype: ['',],
      wingtypes: [''],
      dob: [''],
      denomination_id: [''],
      hobbies: [''],
      spirti: [''],
      lifegoal: [''],
      whatsappnumber: [''],
      nri: [''],
      ward: [''],
      wardnumber: [''],
      villagename: [''],
      res_state_id: [''],
      respanchayati: [''],
      resmandals: [''],
      resconstituencyname: ['',],
      resdistricts: [''],
      god: [''],
      term: [''],
      mother: [''],
      orphon: [''],
      subcaste: [''],
      subward: ['']
    })

    this.independentorgainsationform = this.formBuilder.group({
      state_id: [''],
      organisation_name: [''],
      checkbox: [''],
      believer_id: [''],
      pastor_id: [''],
      denomation: [''],
      org_address: [''],
      location: [''],
      contact_num: [''],
      email: [''],
      website: [''],
      service_name: [''],
      organizationtype: [''],
      ministry_id: [''],
      password: [''],
      districts: [''],
      constituencyname: [''],
      mandals: [''],
      panchayati: [''],
      villagename: [''],
      ward: [''],
      term: ['']
    })

    this.pastorsassociations = this.formBuilder.group({
      state_id: [''],
      pa_name: [''],
      pastor_id: [''],
      level: [''],
      phonenumber: [''],
      whatsapp_number: [''],
      totalleadrs: [''],
      address: [''],
      district_id: [''],
      constituency_id: [''],
      mandal_id: [''],
      village_id: [''],
      website: [''],
      workingareas: [''],
      description: [''],
      password: [''],

      term: [''],

    })

    this.ministryform = this.formBuilder.group({
      state_id: [''],
      ministryname: [''],
      denomation_id: [''],
      headname: [''],
      ministryemail: [''],
      ministrywebsite: [''],
      headnmber: [''],
      number_ofchurches: [''],
      number_ofmembers: [''],
      district_id: [''],
      constituency_id: [''],
      mandal_id: [''],
      panchayat_id: [''],
      pastor: [''],
      personal_secretary: [''],
      remarks: [''],
      description: ['']
    })

    this.categoryid = localStorage.getItem("category_id");
    this.category = localStorage.getItem("category");
    this.name = localStorage.getItem("name");
    this.mobile_number = localStorage.getItem("mobile_number");

  }

  ionViewDidLoad() {
    this.getpastorsdata();
    this.getchurchesdata();
    this.getministriesdata();
    console.log('ionViewDidLoad ProfilePage');
    this.geteditdtails()
    this.personaldata();
    this.getdenomations();
    this.getpastorassciation();
    this.getwing();
    this.getbelivers();
    this.getservice();
  }

  services: any;

  getpastorsdata() {
    this.service.getpastor().subscribe((res: any) => {
      this.getpastorsdatas = res && res.data ? res.data : [];
      this.getstudentspastors = this.getpastorsdatas;
      this.getministrypastors = this.getpastorsdatas;
      this.getchurchpastors = this.getpastorsdatas;
      this.getorganizationpastors = this.getpastorsdatas;
      this.getpastorassciationas = this.getpastorsdatas;
    });
  }

  getchurchesdata() {
    this.service.getchurch().subscribe((res: any) => {
      this.getchurchfilter = res && res.data ? res.data : [];
      this.getchurchstudentfilter = this.getchurchfilter;
    });
  }

  getpastorssdata() { this.getpastorsdata(); }
  getchurchesstudentdata() { this.getchurchesdata(); }

  getministriesdata() {
    this.service.getministry().subscribe((res: any) => {
      this.ministryname = res && res.data ? res.data : [];
    });
  }

  getservice() {
    this.service.getservices().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.services = res.data;
      }
    })
  }


  assicoations: any;
  getpastorassciation() {
    this.service.getpastorassci().subscribe((res: any) => {
      this.assicoations = res.data;
    })
  }

  profiledata: any
  personaldata() {
    var data = {
      category_id: localStorage.getItem('category_id'),
    }
    this.service.getuserprofilereport(data).subscribe((res: any) => {
      if (res && res.data && res.data.length > 0) {
        this.profiledata = res.data[0];
      }
    }, err => {
      console.log('Error loading personal data:', err);
    });
  }

  getdistric(stateId?: any) {
    const sid = stateId || 1;
    this.service.getdistrict(sid).subscribe((res: any) => {
      this.districts = res && res.data ? res.data : [];
    }, () => {
      this.districts = [];
    });
  }

  onStateChange(event: any, formType?: string) {
    const sid = event;
    this.constituency = [];
    this.mandals = [];
    this.panchayati = [];

    if (formType === 'believer' || !formType) {
      this.beliverform.patchValue({ districts: '', constituencyname: '', mandals: '', panchayati: '' });
    }
    if (formType === 'student' || !formType) {
      this.studentform.patchValue({ district_id: '', constituency_id: '', mandal_id: '', village_id: '' });
    }
    if (formType === 'ministry' || !formType) {
      this.updateprofileministry.patchValue({ district_id: '', constituency_id: '', mandal_id: '', panchayat_id: '' });
      if (this.ministryform) {
        this.ministryform.patchValue({ district_id: '', constituency_id: '', mandal_id: '', panchayat_id: '' });
      }
    }
    if (formType === 'pastor' || !formType) {
      this.pastorform.patchValue({ district_id: '', constituency_id: '', mandal_id: '', panchayat_id: '' });
    }
    if (formType === 'church' || !formType) {
      this.churchregsiterform.patchValue({ district_id: '', constituency_id: '', mandal_id: '', village_id: '' });
    }
    if (formType === 'organisation' || !formType) {
      this.independentorgainsationform.patchValue({ districts: '', constituencyname: '', mandals: '', panchayati: '' });
    }
    if (formType === 'association' || !formType) {
      this.pastorsassociations.patchValue({ district_id: '', constituency_id: '', mandal_id: '', village_id: '' });
    }

    if (sid) {
      this.getdistric(sid);
    } else {
      this.districts = [];
    }
  }

  onResStateChange(event: any) {
    const sid = event;
    this.studentform.patchValue({
      resdistricts: '',
      resconstituencyname: '',
      resmandals: '',
      respanchayati: ''
    });
    this.resDistricts = [];
    this.resConstituency = [];
    this.resMandals = [];
    this.resPanchayati = [];

    if (sid) {
      this.service.getdistrict(sid).subscribe((res: any) => {
        this.resDistricts = res && res.data ? res.data : [];
      }, () => {
        this.resDistricts = [];
      });
    }
  }

  getconstency(event: any, formType?: string) {
    const id = event;
    this.mandals = [];
    this.panchayati = [];
    if (formType === 'believer') {
      this.beliverform.patchValue({ constituencyname: '', mandals: '', panchayati: '' });
    } else if (formType === 'student') {
      this.studentform.patchValue({ constituency_id: '', mandal_id: '', village_id: '' });
    } else if (formType === 'ministry') {
      this.updateprofileministry.patchValue({ constituency_id: '', mandal_id: '', panchayat_id: '' });
      if (this.ministryform) this.ministryform.patchValue({ constituency_id: '', mandal_id: '', panchayat_id: '' });
    } else if (formType === 'pastor') {
      this.pastorform.patchValue({ constituency_id: '', mandal_id: '', panchayat_id: '' });
    } else if (formType === 'church') {
      this.churchregsiterform.patchValue({ constituency_id: '', mandal_id: '', village_id: '' });
    } else if (formType === 'organisation') {
      this.independentorgainsationform.patchValue({ constituencyname: '', mandals: '', panchayati: '' });
    } else if (formType === 'association') {
      this.pastorsassociations.patchValue({ constituency_id: '', mandal_id: '', village_id: '' });
    }
    if (!id || id == 0) {
      this.constituency = [];
      return;
    }
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency = res && res.data ? res.data.filter((data: any) => data.dstrct_id == id) : [];
    }, () => {
      this.constituency = [];
    });
  }

  getmandals(event: any, formType?: string) {
    const id = event;
    this.panchayati = [];
    if (formType === 'believer') {
      this.beliverform.patchValue({ mandals: '', panchayati: '' });
    } else if (formType === 'student') {
      this.studentform.patchValue({ mandal_id: '', village_id: '' });
    } else if (formType === 'ministry') {
      this.updateprofileministry.patchValue({ mandal_id: '', panchayat_id: '' });
      if (this.ministryform) this.ministryform.patchValue({ mandal_id: '', panchayat_id: '' });
    } else if (formType === 'pastor') {
      this.pastorform.patchValue({ mandal_id: '', panchayat_id: '' });
    } else if (formType === 'church') {
      this.churchregsiterform.patchValue({ mandal_id: '', village_id: '' });
    } else if (formType === 'organisation') {
      this.independentorgainsationform.patchValue({ mandals: '', panchayati: '' });
    } else if (formType === 'association') {
      this.pastorsassociations.patchValue({ mandal_id: '', village_id: '' });
    }
    if (!id || id == 0) {
      this.mandals = [];
      return;
    }
    this.service.getmandals().subscribe((res: any) => {
      this.mandals = res && res.data ? res.data.filter((data: any) => data.const_id == id) : [];
    }, () => {
      this.mandals = [];
    });
  }

  gepanchayati(event: any, formType?: string) {
    const id = event;
    if (formType === 'believer') {
      this.beliverform.patchValue({ panchayati: '' });
    } else if (formType === 'student') {
      this.studentform.patchValue({ village_id: '' });
    } else if (formType === 'ministry') {
      this.updateprofileministry.patchValue({ panchayat_id: '' });
      if (this.ministryform) this.ministryform.patchValue({ panchayat_id: '' });
    } else if (formType === 'pastor') {
      this.pastorform.patchValue({ panchayat_id: '' });
    } else if (formType === 'church') {
      this.churchregsiterform.patchValue({ village_id: '' });
    } else if (formType === 'organisation') {
      this.independentorgainsationform.patchValue({ panchayati: '' });
    } else if (formType === 'association') {
      this.pastorsassociations.patchValue({ village_id: '' });
    }
    if (!id || id == 0) {
      this.panchayati = [];
      return;
    }
    this.service.gepanchayatis().subscribe((res: any) => {
      this.panchayati = res && res.data ? res.data.filter((data: any) => data.mndl_id == id) : [];
    }, () => {
      this.panchayati = [];
    });
  }

  getconstency1(event: any) {
    const id = event;
    this.studentform.patchValue({ resconstituencyname: '', resmandals: '', respanchayati: '' });
    this.resMandals = [];
    this.resPanchayati = [];
    if (!id || id == 0) {
      this.resConstituency = [];
      return;
    }
    this.service.getconsistencys().subscribe((res: any) => {
      this.resConstituency = res && res.data ? res.data.filter((data: any) => data.dstrct_id == id) : [];
    }, () => {
      this.resConstituency = [];
    });
  }

  getmandals1(event: any) {
    const id = event;
    this.studentform.patchValue({ resmandals: '', respanchayati: '' });
    this.resPanchayati = [];
    if (!id || id == 0) {
      this.resMandals = [];
      return;
    }
    this.service.getmandals().subscribe((res: any) => {
      this.resMandals = res && res.data ? res.data.filter((data: any) => data.const_id == id) : [];
    }, () => {
      this.resMandals = [];
    });
  }

  gepanchayati1(event: any) {
    const id = event;
    this.studentform.patchValue({ respanchayati: '' });
    if (!id || id == 0) {
      this.resPanchayati = [];
      return;
    }
    this.service.gepanchayatis().subscribe((res: any) => {
      this.resPanchayati = res && res.data ? res.data.filter((data: any) => data.mndl_id == id) : [];
    }, () => {
      this.resPanchayati = [];
    });
  }

  getdenomations() {
    this.service.getdenomation().subscribe((res: any) => {
      this.denomation = res.data;
    })
  }

  getbelivers() {
    this.service.getbelivers().subscribe((res: any) => {
      this.bliversdata = res.data;
    })
  }



  //////////////////////pastor change/////////////////////
  // assicoation: boolean = false;
  // pastorassicoation(event: any) {
  //   var as = event.value
  //   if (as == 'yes') {
  //     this.assicoation = true
  //   } else {
  //     this.assicoation = false
  //   }
  // }

  wingtypesystem: boolean = false;

  onradioleadertyperajkumar(event: any) {
    var apple = event.target.value
    if (apple == "YES") {
      this.lead = true;
    } else {
      this.lead = false;
    }
  }

  onradiochange(event: any) {
    var a = event.target.value
    if (a == 'YES') {
      this.beliverform.patchValue({
        leadertype: '',
      });
      this.pastorform.patchValue({
        leadertype: '',
      });
      this.studentform.patchValue({
        leadertype: '',
      });
      this.lead = true
    }

    if (a == 'NO') {
      this.beliverform.patchValue({
        leadertype: '',
      });
      this.pastorform.patchValue({
        leadertype: '',
      });
      this.studentform.patchValue({
        leadertype: '',
      });
      this.lead = false
      this.leadtype = false
      this.wingtype = false
      this.wingtypes = false
      this.subward = false
    }
  }

  wings: any;
  getwing() {
    this.service.getwing().subscribe((res: any) => {
      this.wings = res.data;
    })
  }

  onsubward(event: any) {
    var s = event
    if (s == '6') {
      this.subward = true
    } else {
      this.subward = false
    }
  }

  onradioleadertype(event: any) {
    var a = event.target.value;
    if (a == '1') {
      this.leadtype = true
      this.wingtype = false
      this.wingtypes = false
      this.subward = true
    } else {
      this.leadtype = false
      this.wingtype = true
      this.wingtypes = true
      this.subward = false
    }
  }

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  geteditdtails() {
    var data = {
      category_id: this.categoryid || localStorage.getItem('category_id'),
      usr_id: localStorage.getItem('usr_id'),
      mobile_number: localStorage.getItem('mobile_number')
    }
    this.service.geteditdtails(data).subscribe((res: any) => {
      if (!res || !res.data || res.data.length === 0) return;
      this.details = res.data[0];
      if (this.details.category_id) {
        this.categoryid = String(this.details.category_id);
      }
      this.details = res.data[0];
      this.pastorform.patchValue({
        pastorname: this.details.pastorname || this.details.name,
        phonenumber: this.details.phonenumber || this.details.mobile_number,
        dob: this.details.dob,
        gender: this.details.gender,
        designation: this.details.designation,
        pa_phonenumber: this.details.pa_phonenumber,
        staus: this.details.staus,
        caste: this.details.caste,
        nativeplace: this.details.nativeplace,
        talent: this.details.talent,
        education: this.details.education,
        youtubechanel: this.details.youtubechanel,
        facebook: this.details.facebook,
        about_desp: this.details.about_desp,
        lifegoal: this.details.lifegoal,
        god: this.details.god,
        district_id: this.details.district_id,
        constituency_id: this.details.constituency_id,
        mandal_id: this.details.mandal_id,
        panchayat_id: this.details.village_id,
        location: this.details.location,
        villagename: this.details.villagename,
        subcaste: this.details.subcaste,
        fellowship: this.details.fellowship,
        position: this.details.position,
        assicoation_id: this.details.assicoation_id,
        denomination_id: this.details.denomination_id,
        pastortype: this.details.pastortype,
        leaders: this.details.leadership,
        phonenumber2: this.details.phonenumber2
      })

      this.churchregsiterform.patchValue({
        church_name: this.details.church_name || this.details.name,
        denomination_id: this.details.denomination_id,
        pastor_id: this.details.pastor_id,
        total_members: this.details.total_members,
        contactnumber: this.details.contactnumber || this.details.mobile_number,
        description: this.details.description,
        district_id: this.details.district_id,
        constituency_id: this.details.constituency_id,
        mandal_id: this.details.mandal_id,
        village_id: this.details.village_id,
        street: this.details.street,
        location: this.details.location,
        password: this.details.password,
        village_name: this.details.village_name,
        churchtype: this.details.churchtype,
        ministry_id: this.details.ministry_id,
        youtube: this.details.youtube,
        facebook: this.details.facebook
      })

      this.updateprofileministry.patchValue({
        ministryname: this.details.ministryname || this.details.headname || this.details.name,
        headnmber: this.details.headnmber || this.details.mobile_number,
        denomation: this.details.denomation,
        ministryemail: this.details.ministryemail,
        ministrywebsite: this.details.ministrywebsite,
        number_ofchurches: this.details.number_ofchurches,
        number_ofmembers: this.details.number_ofmembers,
        district_id: this.details.district_id,
        constituency_id: this.details.constituency_id,
        mandal_id: this.details.mandal_id,
        panchayat_id: this.details.panchayat_id,
        password: this.details.password,
        pastor: this.details.pastor,
        description: this.details.description,
        term: this.details.term
      })

      this.beliverform.patchValue({
        fname: this.details.fname || this.details.name,
        whatsapp: this.details.whatsapp,
        dob: this.details.dob,
        gender: this.details.gender,
        email: this.details.email,
        mobile_number: this.details.mobile_number,
        status: this.details.status,
        income: this.details.income,
        caste: this.details.caste,
        subcaste: this.details.subcaste,
        nativeplace: this.details.nativeplace,
        talent: this.details.talent,
        education: this.details.education,
        designation: this.details.designation,
        dpartment: this.details.dpartment,
        districts: this.details.district_id,
        mandals: this.details.mandal_id,
        panchayati: this.details.panchayat_id,
        constituencyname: this.details.constituency_id,
        villagename: this.details.villagename,
        wardnumber: this.details.wardnumber,
        ward: this.details.ward,
        nri: this.details.livingfrom,
        leadership: this.details.leadership,
        leadertype: this.details.leadertype,
        generaltype: this.details.generaltype,
        subward: this.details.subward,
        wingtype: this.details.wingtype,
        wingtypes: this.details.wingtypes,
        denomination_id: this.details.denomination_id,
        hobbies: this.details.hobbies,
        spirti: this.details.spirti,
        lifegoal: this.details.lifegoal,
        church: this.details.church_id,
        pastor: this.details.pastor_id,
        youtube: this.details.youtube,
        lname: this.details.lname,
        god: this.details.god,
      })

      this.studentform.patchValue({
        studentname: this.details.studentname || this.details.name,
        gender: this.details.gender,
        number: this.details.number,
        study: this.details.study,
        schname: this.details.schname,
        fathername: this.details.fathername,
        aboutyourself: this.details.aboutyourself,
        nativeplace: this.details.nativeplace,
        caste: this.details.caste,
        talent: this.details.talent,
        district_id: this.details.district_id,
        constituency_id: this.details.constituency_id,
        mandal_id: this.details.mandal_id,
        village_id: this.details.village_id,
        password: this.details.password,
        church: this.details.church_id,
        pastor: this.details.pastor_id,
        leadership: this.details.leadership,
        leadertype: this.details.leadertype,
        generaltype: this.details.generaltype,
        wingtype: this.details.wingtype,
        wingtypes: this.details.wingtypes,
        dob: this.details.dob,
        denomination_id: this.details.denomination_id,
        hobbies: this.details.hobbies,
        spirti: this.details.spirti,
        lifegoal: this.details.lifegoal,
        whatsappnumber: this.details.whatsappnumber,
        nri: this.details.nri,
        ward: this.details.ward,
        wardnumber: this.details.wardnumber,
        villagename: this.details.villagename,
        respanchayati: this.details.respanchayati,
        resmandals: this.details.resmandals,
        resconstituencyname: this.details.resconstituencyname,
        resdistricts: this.details.resdistricts,
        god: this.details.god,
        term: this.details.term,
        mother: this.details.mother,
        orphon: this.details.orphonintersted,
        subcaste: this.details.subcaste,
      })

      this.independentorgainsationform.patchValue({
        organisation_name: this.details.organisation_name || this.details.name,
        checkbox: this.details.organizationtype,
        believer_id: this.details.believer_id,
        pastor_id: this.details.pastor_id,
        denomation: this.details.denomation,
        org_address: this.details.org_address,
        location: this.details.location,
        contact_num: this.details.contact_num || this.details.mobile_number,
        email: this.details.email,
        website: this.details.website,
        service_name: this.details.service_name,
        organizationtype: this.details.organizationtype,
        ministry_id: this.details.ministry_id,
        password: this.details.password,
        districts: this.details.districts,
        constituencyname: this.details.constituencyname,
        mandals: this.details.mandals,
        panchayati: this.details.panchayati,
        villagename: this.details.villagename,
        ward: this.details.ward,
        term: this.details.term,
      })

      this.pastorsassociations.patchValue({
        pa_name: this.details.paname || this.details.pa_name || this.details.name,
        pastor_id: this.details.headname,
        level: this.details.level,
        phonenumber: this.details.phonenumber || this.details.mobile_number,
        whatsapp_number: this.details.whatsapp_number,
        totalleadrs: this.details.totalleadrs,
        address: this.details.address,
        district_id: this.details.districtname,
        constituency_id: this.details.constituencyname,
        mandal_id: this.details.mandals,
        village_id: this.details.panchaiti,
        website: this.details.website,
        workingareas: this.details.workingareas,
        description: this.details.description,
      })

      // Pre-populate state and cascading location dropdowns
      const distId = this.details.district_id || this.details.districts || this.details.districtname;
      let stateId = this.details.state_id ? Number(this.details.state_id) : (distId && Number(distId) >= 31 ? 2 : 1);
      if (!stateId) stateId = 1;

      this.pastorform.patchValue({ state_id: stateId });
      this.churchregsiterform.patchValue({ state_id: stateId });
      this.updateprofileministry.patchValue({ state_id: stateId });
      this.beliverform.patchValue({ state_id: stateId });
      this.studentform.patchValue({ state_id: stateId });
      this.independentorgainsationform.patchValue({ state_id: stateId });
      this.pastorsassociations.patchValue({ state_id: stateId });
      this.ministryform.patchValue({ state_id: stateId });

      this.getdistric(stateId);

      const constId = this.details.constituency_id || this.details.constituencyname;
      const mandalId = this.details.mandal_id || this.details.mandals;
      if (distId) {
        this.service.getconsistencys().subscribe((r: any) => {
          if (r && r.data) this.constituency = r.data.filter((d: any) => d.dstrct_id == distId);
        });
      }
      if (constId) {
        this.service.getmandals().subscribe((r: any) => {
          if (r && r.data) this.mandals = r.data.filter((d: any) => d.const_id == constId);
        });
      }
      if (mandalId) {
        this.service.gepanchayatis().subscribe((r: any) => {
          if (r && r.data) this.panchayati = r.data.filter((d: any) => d.mndl_id == mandalId);
        });
      }

      // Pre-populate Student Residential Address
      const resDistId = this.details.resdistricts;
      let resStateId = this.details.res_state_id ? Number(this.details.res_state_id) : (resDistId && Number(resDistId) >= 31 ? 2 : 1);
      if (!resStateId) resStateId = stateId;
      this.studentform.patchValue({ res_state_id: resStateId });
      if (resStateId) {
        this.service.getdistrict(resStateId).subscribe((r: any) => {
          this.resDistricts = r && r.data ? r.data : [];
        });
      }
      const resConstId = this.details.resconstituencyname;
      const resMandalId = this.details.resmandals;
      if (resDistId) {
        this.service.getconsistencys().subscribe((r: any) => {
          if (r && r.data) this.resConstituency = r.data.filter((d: any) => d.dstrct_id == resDistId);
        });
      }
      if (resConstId) {
        this.service.getmandals().subscribe((r: any) => {
          if (r && r.data) this.resMandals = r.data.filter((d: any) => d.const_id == resConstId);
        });
      }
      if (resMandalId) {
        this.service.gepanchayatis().subscribe((r: any) => {
          if (r && r.data) this.resPanchayati = r.data.filter((d: any) => d.mndl_id == resMandalId);
        });
      }

      this.ministryform.patchValue({
        ministryname: this.details.ministryname || this.details.headname || this.details.name,
        denomation_id: this.details.denomation_id,
        headname: this.details.headname,
        ministryemail: this.details.ministryemail,
        ministrywebsite: this.details.ministrywebsite,
        headnmber: this.details.headnmber || this.details.mobile_number,
        number_ofchurches: this.details.number_ofchurches,
        number_ofmembers: this.details.number_ofmembers,
        district_id: this.details.district_id,
        constituency_id: this.details.constituency_id,
        mandal_id: this.details.mandal_id,
        panchayat_id: this.details.panchayat_id,
        pastor: this.details.pastor,
        personal_secretary: this.details.personal_secretary,
        remarks: this.details.remarks,
        description: this.details.description,
      })
    })
  }

  editbeliver() {
    const usr_id = localStorage.getItem('usr_id');
    const data = Object.assign({}, this.beliverform.value, { usr_id });
    this.service.editbeliver(data).subscribe((res: any) => {
      if (res.status == 200) {
        alert('విజయవంతంగా అప్డేట్ చేయబడింది / Updated Successfully');
      } else {
        alert('సర్వర్ లో సమస్య ఉంది, దయచేసి తర్వాత ప్రయత్నించండి / Server error, please try again');
      }
    }, () => {
      alert('సర్వర్ లో సమస్య ఉంది, దయచేసి తర్వాత ప్రయత్నించండి / Server error, please try again');
    });
  }

  // Accept Input As a Number Only
  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  editstudent() {
    const usr_id = localStorage.getItem('usr_id');
    const data = Object.assign({}, this.studentform.value, { usr_id });
    this.service.editstudent(data).subscribe((res: any) => {
      if (res.status == 200) {
        alert('విజయవంతంగా అప్డేట్ చేయబడింది / Updated Successfully');
      } else {
        alert('సర్వర్ లో సమస్య ఉంది, దయచేసి తర్వాత ప్రయత్నించండి / Server error, please try again');
      }
    }, () => {
      alert('సర్వర్ లో సమస్య ఉంది, దయచేసి తర్వాత ప్రయత్నించండి / Server error, please try again');
    });
  }

  postministryupdate() {
    const usr_id = localStorage.getItem('usr_id');
    const sourceData = this.updateprofileministry ? this.updateprofileministry.value : this.ministryform.value;
    const data = Object.assign({}, this.ministryform ? this.ministryform.value : {}, sourceData, { usr_id });
    this.service.editministry(data).subscribe((res: any) => {
      if (res.status == 200) {
        alert('విజయవంతంగా అప్డేట్ చేయబడింది / Updated Successfully');
      } else {
        alert('సర్వర్ లో సమస్య ఉంది, దయచేసి తర్వాత ప్రయత్నించండి / Server error, please try again');
      }
    }, () => {
      alert('సర్వర్ లో సమస్య ఉంది, దయచేసి తర్వాత ప్రయత్నించండి / Server error, please try again');
    });
  }

  editchurch() {
    const usr_id = localStorage.getItem('usr_id');
    const data = Object.assign({}, this.churchregsiterform.value, { usr_id });
    this.service.editchurch(data).subscribe((res: any) => {
      if (res.status == 200) {
        alert('విజయవంతంగా అప్డేట్ చేయబడింది / Updated Successfully');
      } else {
        alert('సర్వర్ లో సమస్య ఉంది, దయచేసి తర్వాత ప్రయత్నించండి / Server error, please try again');
      }
    }, () => {
      alert('సర్వర్ లో సమస్య ఉంది, దయచేసి తర్వాత ప్రయత్నించండి / Server error, please try again');
    });
  }

  editpastor() {
    const usr_id = localStorage.getItem('usr_id');
    const data = Object.assign({}, this.pastorform.value, { usr_id });
    this.service.editpastor(data).subscribe((res: any) => {
      if (res.status == 200) {
        alert('విజయవంతముగా సబ్మిట్ అయింది / Submitted Successfully');
      } else {
        alert('సర్వర్ లో సమస్య ఉంది, దయచేసి తర్వాత ప్రయత్నించండి / Server error, please try again');
      }
    }, () => {
      alert('సర్వర్ లో సమస్య ఉంది, దయచేసి తర్వాత ప్రయత్నించండి / Server error, please try again');
    });
  }

  editindependentorgainsation() {
    const usr_id = localStorage.getItem('usr_id');
    const data = Object.assign({}, this.independentorgainsationform.value, { usr_id });
    this.service.editindependentorgainsation(data).subscribe((res: any) => {
      if (res.status == 200) {
        alert('విజయవంతంగా అప్డేట్ చేయబడింది / Updated Successfully');
      } else {
        alert('సర్వర్ లో సమస్య ఉంది, దయచేసి తర్వాత ప్రయత్నించండి / Server error, please try again');
      }
    }, () => {
      alert('సర్వర్ లో సమస్య ఉంది, దయచేసి తర్వాత ప్రయత్నించండి / Server error, please try again');
    });
  }

  editassciation() {
    const usr_id = localStorage.getItem('usr_id');
    const data = Object.assign({}, this.pastorsassociations.value, { usr_id });
    this.service.editpastororgainsation(data).subscribe((res: any) => {
      if (res.status == 200) {
        alert('విజయవంతంగా అప్డేట్ చేయబడింది / Updated Successfully');
      } else {
        alert('సర్వర్ లో సమస్య ఉంది, దయచేసి తర్వాత ప్రయత్నించండి / Server error, please try again');
      }
    }, () => {
      alert('సర్వర్ లో సమస్య ఉంది, దయచేసి తర్వాత ప్రయత్నించండి / Server error, please try again');
    });
  }

}
