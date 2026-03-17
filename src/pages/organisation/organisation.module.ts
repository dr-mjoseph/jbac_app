import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganisationPage } from './organisation';

@NgModule({
  declarations: [
    OrganisationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganisationPage),
  ],
})
export class OrganisationPageModule {}
