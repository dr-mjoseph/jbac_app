import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntryFormPage } from './entry-form';

@NgModule({
  declarations: [
    EntryFormPage,
  ],
  imports: [
    IonicPageModule.forChild(EntryFormPage),
  ],
})
export class EntryFormPageModule {}
