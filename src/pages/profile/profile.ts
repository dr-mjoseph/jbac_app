import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
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

  districts: any = [];
  mandals: any = [];
  constituency: any = [];
  panchayati: any = [];
  denomation: any;

  bliversdata: any

  loading: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public service: ServiceProvider,
    private loadingCtrl: LoadingController) {

    this.pastorform = this.formBuilder.group({
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
    console.log('ionViewDidLoad ProfilePage');
    this.geteditdtails()
    this.personaldata();
    this.getdenomations();
    this.getpastorassciation();
    this.getwing();
    this.getbelivers();
    this.getdistric()
    this.getmandals(0);
    this.getconstency(0);
    this.gepanchayati(0);
    this.getservice();
  }

  services: any;
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
      this.profiledata = res.data[0];
    })
  }

  getdistric() {
    this.service.getdistrict().subscribe((res: any) => {
      this.districts = res.data;
    })
  }

  getconstency(event: any) {
    if (event != 0) {
      var id = event;
    }
    this.service.getconsistencys().subscribe((res: any) => {
      if (event == 0) {
        this.constituency = res.data;
      } else {
        this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
      }
    })
  }

  getmandals(event: any) {
    if (event != 0) {
      var id = event;
    }
    this.service.getmandals().subscribe((res: any) => {
      if (event == 0) {
        this.mandals = res.data;
      } else {
        this.mandals = res.data.filter((data: any) => data.const_id == id);
      }
    })
  }

  gepanchayati(event: any) {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
    });
    this.loading.present();
    if (event != 0) {
      var id = event
    }
    this.service.gepanchayatis().subscribe((res: any) => {
      if (event == 0) {
        this.panchayati = res.data;
        this.loading.dismiss();
      } else {
        this.panchayati = res.data.filter((data: any) => data.mndl_id == id);
        this.loading.dismiss();
      }
    })
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
      category_id: this.categoryid,
      usr_id: localStorage.getItem('usr_id')
    }
    this.service.geteditdtails(data).subscribe((res: any) => {
      this.details = res.data[0];
      this.pastorform.patchValue({
        pastorname: this.details.pastorname,
        phonenumber: this.details.phonenumber,
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
        church_name: this.details.church_name,
        denomination_id: this.details.denomination_id,
        pastor_id: this.details.pastor_id,
        total_members: this.details.total_members,
        contactnumber: this.details.contactnumber,
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
        ministryname: this.details.ministryname,
        headnmber: this.details.headnmber,
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
        fname: this.details.fname,
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
        studentname: this.details.studentname,
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
        organisation_name: this.details.organisation_name,
        checkbox: this.details.organizationtype,
        believer_id: this.details.believer_id,
        pastor_id: this.details.pastor_id,
        denomation: this.details.denomation,
        org_address: this.details.org_address,
        location: this.details.location,
        contact_num: this.details.contact_num,
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
        pa_name: this.details.paname,
        pastor_id: this.details.headname,
        level: this.details.level,
        phonenumber: this.details.phonenumber,
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

      this.ministryform.patchValue({
        ministryname: this.details.ministryname,
        denomation_id: this.details.denomation_id,
        headname: this.details.headname,
        ministryemail: this.details.ministryemail,
        ministrywebsite: this.details.ministrywebsite,
        headnmber: this.details.headnmber,
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
    this.beliverform.value.usr_id = localStorage.getItem('usr_id');
    this.service.editbeliver(this.beliverform.value).subscribe((res: any) => {
      if (res.status == 200) {
        alert('విజయవంతం గా అప్ డేట్ చేసినారు')
      } else {
        alert('server down')
      }
    })
  }

  // Accept Input As a Number Only
  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  editstudent() {
    this.studentform.value.usr_id = localStorage.getItem('usr_id');
    this.service.editstudent(this.studentform.value).subscribe((res: any) => {
      if (res.status == 200) {
        alert('విజయవంతం గా అప్ డేట్ చేసినారు')
      } else {
        alert('server down')
      }
    })
  }

  postministryupdate() {
    this.ministryform.value.usr_id = localStorage.getItem('usr_id');
    this.service.editministry(this.ministryform.value).subscribe((res: any) => {
      if (res.status == 200) {
        alert('విజయవంతం గా అప్ డేట్ చేసినారు')
      } else {
        alert('server down')
      }
    })
  }

  editchurch() {
    this.churchregsiterform.value.usr_id = localStorage.getItem('usr_id');
    this.service.editchurch(this.churchregsiterform.value).subscribe((res: any) => {
      if (res.status == 200) {
        alert('విజయవంతం గా అప్ డేట్ చేసినారు')
      } else {
        alert('server down')
      }
    })
  }

  editpastor() {
    this.pastorform.value.usr_id = localStorage.getItem('usr_id');
    this.service.editpastor(this.pastorform.value).subscribe((res: any) => {
      if (res.status == 200) {
        alert('విజయవంతముగా సబ్మిట్ అయింది')
      } else {
        alert('server down')
      }
    })
  }

  editindependentorgainsation() {
    this.independentorgainsationform.value.usr_id = localStorage.getItem('usr_id');
    this.service.editindependentorgainsation(this.independentorgainsationform.value).subscribe((res: any) => {


      if (res.status == 200) {
        alert('విజయవంతం గా అప్ డేట్ చేసినారు')
      } else {
        alert('server down')
      }
    })
  }

  editassciation() {
    this.pastorsassociations.value.usr_id = localStorage.getItem('usr_id');
    this.service.editpastorsassociations(this.pastorsassociations.value).subscribe((res: any) => {
      if (res.status == 200) {
        alert('విజయవంతం గా అప్ డేట్ చేసినారు')
      } else {
        alert('server down')
      }
    })
  }


}
