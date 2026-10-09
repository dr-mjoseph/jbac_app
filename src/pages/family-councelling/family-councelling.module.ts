import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FamilyCouncellingPage } from './family-councelling';

@NgModule({
  declarations: [
    FamilyCouncellingPage,
  ],
  imports: [
    IonicPageModule.forChild(FamilyCouncellingPage),
  ],
})
export class FamilyCouncellingPageModule {}
