import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-searchhouse',
  templateUrl: 'searchhouse.html',
})
export class SearchhousePage {
  serachMeetingform: FormGroup;
  searchdenomation: FormGroup;
  form_ind: any;
  youth: any;
  revival: any;
  showSpinner: boolean = false;
  women: any;
  pastor: any;
  childern: any;
  musical: any;
  mandals: any;
  constituency: any;
  districts: any;
  searchevents: any;
  mettingtype: any;
  denomation: any;
  ministryname: any;
  titles: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public service: ServiceProvider) {

    this.searchdenomation = this.formBuilder.group({
      denomation: ['', [Validators.required]],
      type: ['', [Validators.required]],
      title: ['', [Validators.required]],
      ministry_id: ['', [Validators.required]],
    })
    this.serachMeetingform = this.formBuilder.group({
      district_id: ['', [Validators.required]],
      constenncy_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      panchayati_id: ['', [Validators.required]],
    })
  }

  ionViewDidLoad() {
    this.getdistric();
    this.searechevents();
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

  formshow(id: any) {
    this.form_ind = id
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

  getdenomations() {
    this.service.getdenomation().subscribe((res: any) => {
      this.denomation = res.data;
    })
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

  type: any;
  searchchange(event: any) {
    this.type = event
    var data = {
      type: event,
      df: 1,
    }
    this.service.searchingbusiness(data).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.searchevents = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
      }
    })
  }

  searchdeno: any;
  searchdenomationdata(event: any) {
    this.searchdeno = event
    var data = {
      type: this.type,
      denomation: this.searchdeno,
      df: 2
    }
    this.service.searchingbusiness(data).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.searchevents = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
      }
    },
      error => {
      })
  }

  searchspeak(event: any) {
    this.titles = event
    var data = {
      type: this.type,
      denomation: this.searchdeno,
      title: this.titles,
      df: 3,
    }
    this.service.searchingbusiness(data).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.searchevents = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('No Data')
      }
    },
      error => {
      })
  }


  ministry(event: any) {
    var data = {
      type: this.type,
      denomation: this.searchdeno,
      title: this.titles,
      ministry_id: event,
      df: 4,
    }
    console.log(data);

    this.service.searchingdemonationdata(data).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.searchevents = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
      }
    },
      error => {
      })
  }
  searchdist: any;
  searchconts: any;

  searchdistric(event: any) {
    this.searchdist = event
    var data = {

      district_id: this.searchdist,
      df: 2
    }
    this.service.searchingdata(data).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.searchevents = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
      }
    },
      error => {
      })
  }

  searchconstenct(event: any) {
    this.searchconts = event
    var data = {
      // mettingtype: this.mettingtype,
      district_id: this.searchdist,
      constenncy_id: this.searchconts,
      df: 3,
    }
    this.service.searchingdata(data).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.searchevents = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('No Data')
      }
    },
      error => {
      })
  }

  searchmandals(event: any) {
    var data = {
      // mettingtype: this.mettingtype,
      district_id: this.searchdist,
      constenncy_id: this.searchconts,
      mandal_id: event,
      df: 4,
    }
    this.service.searchingdata(data).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.searchevents = res.data.map((item: any) => ({
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
    this.service.searchingdata(this.serachMeetingform.value).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.searchevents = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
        this.fromshow = 1;
      } else {
        alert('server down')
      }
    },
      error => {
      })
  }

  searchdenomationalldata() {
    this.service.searchingdemonationdata(this.serachMeetingform.value).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.searchevents = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
      }
    },
      error => {
      })
  }
  searechevents() {
    this.service.getbusiness().subscribe((res: any) => {
      console.log("dfkgkdj", res.data);
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.searchevents = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      }
    }, error => {
    })
  }

  reset() {
    this.serachMeetingform.reset();
    window.location.reload();
  }

  searchTerm: any;

  filterData() {
    this.searchevents = this.searchevents.filter((item: any) => {
      return JSON.stringify(item)
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
    });
  }
  fromshow: any = 1
  onSearch() {
    if (this.fromshow == 1) {
      this.fromshow = 2;
    } else {
      this.fromshow = 1;
    }
  }


}
