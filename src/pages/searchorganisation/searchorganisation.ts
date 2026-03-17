import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
// import { HomePage } from '../home/home';

/**
 * Generated class for the SearchorganisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchorganisation',
  templateUrl: 'searchorganisation.html',
})
export class SearchorganisationPage {
  serachMeetingform:FormGroup

  mandals: any;
  constituency: any;
  districts: any;
  searchevents: any;
  mettingtype: any;
  denomation: any;
  ministryname: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public service: ServiceProvider) {

    this.serachMeetingform = this.formBuilder.group({
      denomation_id: [''],
      ministry_id: [''],
      service_name: [''],
      district_id: ['', [Validators.required]],
      constenncy_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      panchayati_id: ['', [Validators.required]],
    })
  }

  defaultdata() {
    this.service.getorganizations().subscribe((res: any) => {
      console.log(res.data);
      this.marriagedata = [];
      if (res.status == 200) {
        this.marriagedata = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
        console.log(  this.marriagedata );
        
      }
    },
      error => {
      })
  }

  fromshow: any = 1
  onSearch() {
    if (this.fromshow == 1) {
      this.fromshow = 2;
    } else {
      this.fromshow = 1;
    }
  }



  ionViewDidLoad() {
    this.getdistric();
    // this.searechevents();
    this.defaultdata();
    this.getdenomations();
    this.getbeliver();
  }

  gotohome() {
    this.navCtrl.push('HomePage')
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


  getbeliver() {
    this.service.getbeliversdata().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.ministryname = res.data;
      }
    }, error => {
      console.log(error);
    })
  }

  services: any;
  getservice() {
    this.service.getservices().subscribe((res:any) => {
      if (res.status == 202) {
       alert(res.message);
      } else if (res.status == 200) {
        this.services = res.data;
      }
    }, error => {
    })
  }
  getdenomations() {
    this.service.getdenomation().subscribe((res: any) => {
      this.denomation = res.data;
    })
  }

  isShowDiv = true;

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  getmandals(event: any) {
    var id = event;
    this.service.getmandals().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.mandals = res.data.filter((data: any) => data.const_id == id);
      }
    }, error => {
      console.log(error);
    })
  }

  trimString(string: any, length: any) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  }

  getconstency(event: any) {
    var id = event;
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
    });
  }

  panchayati: any;
  gepanchayati(event: any) {
    var id = event;
    this.service.gepanchayatis().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.panchayati = res.data.filter((data: any) => data.mndl_id == id);
      }
    })
  }
  marriagedata:any
  serachcaste(event: any) {
    this.denomation_id = event
    var data = {
      denomation_id: event,
      df: 1,
    }
    this.service.searchorganization(data).subscribe((res: any) => {
      this.marriagedata = [];
      if (res.status == 200) {
        this.marriagedata = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
      }
    },
      error => {
      })
  }
  searchdeno: any;
  ministry_id: any;
  serachgender(event: any) {
    this.ministry_id = event
    var data = {
      denomation_id: this.denomation_id,
      ministry_id: this.ministry_id,
      df: 2
    }
    this.service.searchorganization(data).subscribe((res: any) => {
      console.log(data);

      this.marriagedata = [];
      if (res.status == 200) {
        this.marriagedata = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
      }
    },
      error => {
      })
  }


  service_name: any
  servicessearch(event: any) {
    this.service_name = event
    var data = {
      denomation_id: this.denomation_id,
      ministry_id: this.ministry_id,
      service_name: this.service_name,
      df: 3,
    }
    console.log(data);
    this.service.searchorganization(data).subscribe((res: any) => {
      this.marriagedata = [];
      if (res.status == 200) {
        this.marriagedata = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('No Data')
      }
    },
      error => {
      })
  }

  denomation_id: any;
  titles: any;
  serachgenders(event: any, tableid: any) {
    var data = {
      name: event,
      columnid: tableid
    }
    console.log(data);

    this.service.searchinorganizations(data).subscribe((res: any) => {
      this.marriagedata = res.data;
    })
  }
  district_id:any;
  searchdistric(event: any) {
    this.district_id = event
    var data = {
      denomation_id: this.denomation_id,
      ministry_id: this.ministry_id,
      service_name: this.service_name,
      district_id: this.district_id,
      df: 4
    }
    console.log(data);
    
    this.service.searchorganization(data).subscribe((res: any) => {
      this.marriagedata = [];
      if (res.status == 200) {
        this.marriagedata = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
        console.log(this.marriagedata);

      } else {
        alert('server down')
      }
    },
      error => {
      })
  }
  constenncy_id:any;
  searchconstenct(event: any) {
    this.constenncy_id = event
    var data = {
      denomation_id: this.denomation_id,
      ministry_id: this.ministry_id,
      service_name: this.service_name,
      district_id: this.district_id,
      constenncy_id: this.constenncy_id,
      df: 5,
    }
    console.log(data);
    
    this.service.searchorganization(data).subscribe((res: any) => {
      this.marriagedata = [];
      if (res.status == 200) {
        this.marriagedata = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('No Data')
      }
    },
      error => {
      })
  }
  searchconts:any
  mandal_id:any;
  searchmandals(event: any) {
    this.mandal_id = event
    var data = {
      denomation_id: this.denomation_id,
      ministry_id: this.ministry_id,
      service_name: this.service_name,
      district_id: this.district_id,
      constenncy_id: this.searchconts,
      mandal_id: this.mandal_id,
      df: 6,
    }
    this.service.searchorganization(data).subscribe((res: any) => {
      this.marriagedata = [];
      if (res.status == 200) {
        this.marriagedata = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
      }
    },
      error => {
      })
  }
  panchayati_id:any;
  searchvillages(event: any) {
    this.panchayati_id = event
    var data = {
      denomation_id: this.denomation_id,
      ministry_id: this.ministry_id,
      service_name: this.service_name,
      district_id: this.district_id,
      constenncy_id: this.searchconts,
      mandal_id: this.mandal_id,
      panchayati_id:this.panchayati_id,
      df: 6,
    }
    console.log(data);
    
    this.service.searchorganization(data).subscribe((res: any) => {
      this.marriagedata = [];
      if (res.status == 200) {
        this.marriagedata = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
      }
    },
      error => {
      })
  }

  search() {
    var data = {
      id: this.serachMeetingform.value.village_id
    }
    console.log(data);

    this.service.searchorganization(data).subscribe((res: any) => {
      this.marriagedata = [];
      if (res.status == 200) {
        this.marriagedata = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
      }
    },
      error => {
      })
  }

}
