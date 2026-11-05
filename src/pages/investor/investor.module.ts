import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvestorPage } from './investor';

@NgModule({
  declarations: [
    InvestorPage,
  ],
  imports: [
    IonicPageModule.forChild(InvestorPage),
  ],
})
export class InvestorPageModule {}
