import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-marriage',
  templateUrl: 'marriage.html',
})
export class MarriagePage {

  form: FormGroup
  districts: any;
  constituency: any;
  panchayati: any;
  mandals: any;
  searchdist: any;
  marriagedata: any;
  searchconts: any;
  searchmand: any;
  ministryname: any;
  denomation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder: FormBuilder, public service: ServiceProvider) {

    this.form = this.formbuilder.group({
      denomation_id: [''],
      ministry_id: [''],
      gender: [''],
      status: [''],
      caste: [''],
      spirti: [''],
      district_id: ['', [Validators.required]],
      constenncy_id: ['', [Validators.required]],
      mandal_id: ['', [Validators.required]],
      panchayati_id: ['', [Validators.required]],
    })
  }

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  ionViewDidLoad() {
    this.getdistric();
    this.defaultdata();
    this.getbeliver();
    this.getdenomations();
  }

  trimString(string: any, length: any) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  }
  serach(event: any, tableid: any) {
  }
  
  defaultdata() {
    var data = { df: 0 }
    this.service.searchmarriages(data).subscribe((res: any) => {
      this.marriagedata = [];
      if (res.status == 200) {
        this.marriagedata = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
      }
    })
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

  getconstency(event: any) {
    var id = event;
    this.service.getconsistencys().subscribe((res: any) => {
      this.constituency = res.data.filter((data: any) => data.dstrct_id == id);
    });
  }

  gepanchayati(event: any) {
    var id = event;
    this.service.gepanchayatis().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.panchayati = res.data.filter((data: any) => data.mndl_id == id);
      }
    }, error => {
      console.log(error);
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

  searchdistric(event: any) {
    this.searchdist = event
    var data = {
      district_id: this.searchdist,
      df: 1
    }
    this.service.searchmarriages(data).subscribe((res: any) => {
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

  searchconstenct(event: any) {
    this.searchconts = event
    var data = {
      district_id: this.searchdist,
      constenncy_id: this.searchconts,
      df: 2,
    }
    console.log(data);

    this.service.searchmarriages(data).subscribe((res: any) => {
      this.marriagedata = res.data
      if (res.status == 200) {
        this.marriagedata = res.data
      } else {
        alert('No Data')
      }
    })
  }

  fromshow: any = 1;

  onSearch() {
    if (this.fromshow == 1) {
      this.fromshow = 2;
    } else {
      this.fromshow = 1;
    }
  }

  searchmandals(event: any) {
    this.searchmand = event
    var data = {
      district_id: this.searchdist,
      constenncy_id: this.searchconts,
      mandal_id: event,
      df: 3,
    }
    this.service.searchmarriages(data).subscribe((res: any) => {
      this.marriagedata = [];
      if (res.status == 200) {
        this.marriagedata = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
      }
    })
  }

  searchvillages(event: any) {
    var data = {
      district_id: this.searchdist,
      constenncy_id: this.searchconts,
      mandal_id: this.searchmand,
      village_id: event,
      df: 4,
    }
    this.service.searchmarriages(data).subscribe((res: any) => {
      this.marriagedata = [];
      if (res.status == 200) {
        this.marriagedata = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
      }
    })
  }

  search() {
    var data = {
      id: this.form.value.village_id
    }
    this.service.searchmarriages(data).subscribe((res: any) => {
      this.marriagedata = [];
      if (res.status == 200) {
        this.marriagedata = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
        console.log(this.marriagedata);
        this.fromshow = 1;

      } else {
        alert('server down')
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

  getdenomations() {
    this.service.getdenomation().subscribe((res: any) => {
      this.denomation = res.data;
      console.log(res.data);

    })
  }

  serachgender(event: any, tableid: any) {
    console.log(event);

    var data = {
      name: event,
      columnid: tableid
    }
    this.service.searchingmarriages(data).subscribe((res: any) => {
      this.marriagedata = res.data;
    })
  }

  serachcaste(event: any, tableid: any) {
    var data = {
      name: event,
      columnid: tableid
    }
    this.service.searchingmarriages(data).subscribe((res: any) => {
      this.marriagedata = res.data;
    })
  }

  spirit(event: any, tableid: any) {
    var data = {
      name: event,
      columnid: tableid
    }
    this.service.searchingmarriages(data).subscribe((res: any) => {
      this.marriagedata = res.data;
    })
  }

  isShowDiv = true;

  toggleDisplayDiv(item: any) {
    item.isShowDiv = !item.isShowDiv;
  }


}
