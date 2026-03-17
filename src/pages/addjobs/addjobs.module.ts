import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddjobsPage } from './addjobs';

@NgModule({
  declarations: [
    AddjobsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddjobsPage),
  ],
})
export class AddjobsPageModule {}
