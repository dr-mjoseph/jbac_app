import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WebhelpPage } from './webhelp';

@NgModule({
  declarations: [
    WebhelpPage,
  ],
  imports: [
    IonicPageModule.forChild(WebhelpPage),
  ],
})
export class WebhelpPageModule {}
