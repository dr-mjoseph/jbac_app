import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChurchTimingsPage } from './church-timings';

@NgModule({
  declarations: [
    ChurchTimingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChurchTimingsPage),
  ],
})
export class ChurchTimingsPageModule {}
