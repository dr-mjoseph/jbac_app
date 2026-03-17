import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})

export class JobsPage {
  form: FormGroup
  mandals: any;
  constituency: any;
  panchayati: any;
  districts: any;
  searchdist: any;
  searchconts: any;
  jobs: any
  fromshow: any = 1
  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder: FormBuilder, private service: ServiceProvider) {
    this.form = this.formbuilder.group({
      jobtile: ['', [Validators.required]],
      qual: ['', [Validators.required]],
      experience: ['', [Validators.required]],
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
    this.getjobs();
    this.getjob();
  }

  getdistric() {
    this.service.getdistrict().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.districts = res.data;
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


  getjobs() {
    var data = {
      df: 0
    }
    this.service.getjobs(data).subscribe((res: any) => {
      this.jobs = [];
      if (res.status == 200) {
        this.jobs = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
      } else {
        alert('server down')
      }
    },
      error => {
      })
  }

  searchdistric(event: any) {
    this.searchdist = event
    var data = {
      district_id: this.searchdist,
      df: 1
    }
    this.service.getjobs(data).subscribe((res: any) => {
      this.jobs = [];
      if (res.status == 200) {
        this.jobs = res.data;
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
    this.service.getjobs(data).subscribe((res: any) => {
      this.jobs = [];
      if (res.status == 200) {
        this.jobs = res.data;
      } else {
        alert('No Data')
      }
    })
  }

  searchmandals(event: any) {
    var data = {
      district_id: this.searchdist,
      constenncy_id: this.searchconts,
      mandal_id: event,
      df: 3,
    }
    this.service.getjobs(data).subscribe((res: any) => {
      this.jobs = [];
      if (res.status == 200) {
        this.jobs = res.data;
      } else {
        alert('server down')
      }
    })
  }

  search() {
    this.service.getjobs(this.form.value).subscribe((res: any) => {
      this.jobs = [];
      if (res.status == 200) {
        this.jobs = res.data;
        this.fromshow = 1;
      } else {
        alert('server down')
      }
    })
  }

  searchTerm: any;
  filterData() {
    this.jobs = this.jobs.filter((item: any) => {
      return JSON.stringify(item)
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
    });
  }

  jobswe: any
  getjob() {
    this.service.getjob().subscribe((res: any) => {
      this.jobswe = res.data;
      console.log(this.jobswe);
    });
  }

  searchjobswise(event: any, colid: any) {
    var data = {
      name: event,
      colid: colid
    }
    this.service.searchjobswise(data).subscribe((res: any) => {
      this.jobs = res.data;
    });
  }

  onSearch() {
    if (this.fromshow == 1) {
      this.fromshow = 2;
    } else {
      this.fromshow = 1;
    }
  }

}
