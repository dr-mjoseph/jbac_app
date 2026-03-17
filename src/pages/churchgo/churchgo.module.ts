import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChurchgoPage } from './churchgo';

@NgModule({
  declarations: [
    ChurchgoPage,
  ],
  imports: [
    IonicPageModule.forChild(ChurchgoPage),
  ],
})
export class ChurchgoPageModule {}
