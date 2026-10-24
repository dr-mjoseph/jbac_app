import { Component } from '@angular/core';
import { AlertController, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';
import { ModalpagePage } from '../modalpage/modalpage';

@IonicPage()
@Component({
  selector: 'page-meeting',
  templateUrl: 'meeting.html',
})
export class MeetingPage {
  fromshow: any = 1;
  meetingfrom: FormGroup;

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
  searchevents: any = []
  mettingtype: any;
  denomation: any;
  ministryname: any;
  speaks: any;
  startdate: any;
  submitted: boolean = false;
  ministry_id: any;
  pastors: any;
  panchayati: any;
  searchdeno: any;
  searchdist: any;
  searchconts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public service: ServiceProvider, public alrtcyt: AlertController, public modalCtrl: ModalController) {

    this.meetingfrom = this.formBuilder.group({
      state_id: [''],
      mettingtype: [''],
      denomation_id: [''],
      ministry_id: [''],
      district_id: [''],
      constenncy_id: [''],
      mandal_id: [''],
      panchayati_id: [''],
      startdate: [''],
    });

    this.getdenomations();
    this.getbeliver();
    this.getdistric();
    this.searechevents();
  }

  onStateChange(event: any) {
    var stateId = event;
    this.meetingfrom.patchValue({
      state_id: stateId,
      district_id: '',
      constenncy_id: '',
      mandal_id: '',
      panchayati_id: ''
    });
    this.districts = [];
    this.constituency = [];
    this.mandals = [];
    this.panchayati = [];
    this.service.getdistrict(stateId).subscribe((res: any) => {
      if (res && res.status == 200) {
        this.districts = res.data;
      }
    });
  }

  getdenomations() {
    this.service.getdenomation().subscribe((res: any) => {
      this.denomation = res.data;
    })
  }

  getbeliver() {
    this.service.getbeliversdata().subscribe((res: any) => {
      this.ministryname = res.data;
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
      console.log(this.constituency);
    });
  }

  formatDateString(dateVal: any): string {
    if (!dateVal) return '';
    if (typeof dateVal === 'string') {
      const match = dateVal.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
      if (match) {
        return `${match[1]}-${match[2]}-${match[3]}`;
      }
      const ddmmyyyy = dateVal.trim().match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
      if (ddmmyyyy) {
        const m = ddmmyyyy[2].length === 1 ? '0' + ddmmyyyy[2] : ddmmyyyy[2];
        const d = ddmmyyyy[1].length === 1 ? '0' + ddmmyyyy[1] : ddmmyyyy[1];
        return `${ddmmyyyy[3]}-${m}-${d}`;
      }
    }
    try {
      const dt = new Date(dateVal);
      if (isNaN(dt.getTime())) return '';
      const year = dt.getFullYear();
      const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : String(dt.getMonth() + 1);
      const day = dt.getDate() < 10 ? '0' + dt.getDate() : String(dt.getDate());
      return `${year}-${month}-${day}`;
    } catch {
      return '';
    }
  }

  isOldMeeting(event: any): boolean {
    const today = this.formatDateString(new Date());
    if (!today || !event) return false;
    const end = this.formatDateString(event.enddate);
    const start = this.formatDateString(event.startdate || event.event_date);
    if (end) {
      return end < today;
    }
    if (start) {
      return start < today;
    }
    return false;
  }

  sortEventsAscending(list: any[]): any[] {
    const today = this.formatDateString(new Date());
    return list.sort((a, b) => {
      const startA = this.formatDateString(a.startdate || a.event_date);
      const startB = this.formatDateString(b.startdate || b.event_date);
      const effA = (startA && startA < today) ? today : (startA || '9999-99-99');
      const effB = (startB && startB < today) ? today : (startB || '9999-99-99');
      if (effA !== effB) {
        return effA.localeCompare(effB);
      }
      if (startA !== startB) {
        return (startA || '').localeCompare(startB || '');
      }
      return Number(a.id || 0) - Number(b.id || 0);
    });
  }

  setFilteredEvents(rawData: any[]) {
    if (!Array.isArray(rawData)) {
      this.searchevents = [];
      return;
    }
    const nonExpired = rawData
      .filter((item: any) => item && !this.isOldMeeting(item))
      .map((item: any) => ({ ...item, showMore: false }));
    this.searchevents = this.sortEventsAscending(nonExpired);
  }

  searchdistric(event: any) {
    this.searchdist = event
    var data = {
      district_id: this.searchdist,
      df: 2
    }
    this.service.searchingdata(data).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.setFilteredEvents(res.data);
      } else {
        alert('server down')
      }
    },
      error => {
      })
  }

  searchconstenct(event: any) {
    this.searchconts = event.value
    var data = {
      district_id: this.searchdist,
      constenncy_id: this.searchconts,
      df: 3,
    }
    this.service.searchingdata(data).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.setFilteredEvents(res.data);
      } else {
        alert('No Data')
      }
    });
  }


  getmandals(event: any) {
    var id = event;
    this.service.getmandals().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.mandals = res.data.filter((data: any) => data.const_id == id);
      }
    });
  }

  gepanchayati(event: any) {
    var id = event;
    console.log(id);
    this.service.gepanchayatis().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.panchayati = res.data.filter((data: any) => data.mndl_id == id);
      }
    })
  }

  ministry(event: any) {
    this.ministry_id = event;
    var data = {
      ministry_id: event.value,
      denomation: this.searchdeno,
      mettingtype: this.mettingtype,
      speakerone: this.speaks,
      df: 4,
    }
    this.service.searchingdemonationdata(data).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.setFilteredEvents(res.data);
      } else {
        alert('server down')
      }
    },
      error => {
      })
  }


  searchdenomationdata(event: any) {
    this.searchdeno = event.value;
    var data = {
      denomation: this.searchdeno,
      mettingtype: this.mettingtype,
      df: 2
    }
    this.service.searchingdemonationdata(data).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.setFilteredEvents(res.data);
      } else {
        alert('server down')
      }
    },
      error => {
      })
  }

  searchchange(event: any) {
    this.mettingtype = event.value
    var data = {
      mettingtype: event.value,
      df: 1
    }
    this.service.searchingdemonationdata(data).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.setFilteredEvents(res.data);
      } else {
        alert('server down')
      }
    })
  }

  searchmandals(event: any) {
    var data = {
      district_id: this.searchdist,
      constenncy_id: this.searchconts,
      mandal_id: event,
      df: 4,
    }
    this.service.searchingdata(data).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.setFilteredEvents(res.data);
      } else {
        alert('server down')
      }
    })
  }

  gotohome() {
    this.navCtrl.push('HomePage');
  }

  onSearch() {
    if (this.fromshow == 1) {
      this.fromshow = 2;
    } else {
      this.fromshow = 1;
    }
  }

  onDateChange(event: any) {
    this.startdate = event.value
    var data = { startdate: event.value, df: 5 }
    this.service.searchingdemonationdata(data).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.setFilteredEvents(res.data);
      } else {
        alert('server down')
      }
    });
  }

  search() {
    // this.fromshow = 1

    console.log(this.meetingfrom.value);


    this.service.searchingdata(this.meetingfrom.value).subscribe((res: any) => {
      this.searchevents = [];
      if (res.status == 200) {
        this.setFilteredEvents(res.data);
        if (this.searchevents.length == 0) {
          alert('ఈ క్యాటగిరీకి సంబంధించిన డేటా లేదు')
        }
      } else {
        alert('సర్వర్ డౌన్ వుంది');
      }
    })
  }

  searechevents() {
    this.searchevents = [];
    this.service.getevents().subscribe((res: any) => {
      if (res.status == 202) {
        alert(res.message);
      } else if (res.status == 200) {
        this.setFilteredEvents(res.data);
        if (this.searchevents.length == 0) {
          alert('No Data Found')
        }
      }
    });
  }

  reset() {
    this.meetingfrom.reset();
    this.searechevents();
  }

  hidefrom() {
    this.fromshow = 1
  }

  async showAlert() {
    const alert = await this.alrtcyt.create({
      mode: 'ios',
      message: 'Link data is not available.',
      buttons: ['OK']
    });
    await alert.present();
  }

  tester(imageUrl: string) {

    const modal = this.modalCtrl.create(ModalpagePage, { imageUrl });
    modal.present();
  }




}
