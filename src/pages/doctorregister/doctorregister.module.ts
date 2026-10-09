import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorregisterPage } from './doctorregister';

@NgModule({
  declarations: [
    DoctorregisterPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorregisterPage),
  ],
})
export class DoctorregisterPageModule {}
