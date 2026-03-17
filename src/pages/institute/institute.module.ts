import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstitutePage } from './institute';

@NgModule({
  declarations: [
    InstitutePage,
  ],
  imports: [
    IonicPageModule.forChild(InstitutePage),
  ],
})
export class InstitutePageModule {}
