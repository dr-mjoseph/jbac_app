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
        console.log(this.searchevents);
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
        this.searchevents = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
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

  searchchange(event: any) {
    this.mettingtype = event.value
    var data = {
      mettingtype: event.value,
      df: 1
    }
    this.service.searchingdemonationdata(data).subscribe((res: any) => {
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
        this.searchevents = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
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
        this.searchevents = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
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
        this.searchevents = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
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
        this.searchevents = res.data.map((item: any) => ({
          ...item, showMore: false
        }));
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
