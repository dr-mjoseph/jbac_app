import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoGallerySubPage } from './video-gallery-sub';
import { TubetPipe } from './../pipes/tubet/tubet';

@NgModule({
  declarations: [
    VideoGallerySubPage,
    TubetPipe
  ],
  imports: [
    IonicPageModule.forChild(VideoGallerySubPage),
  ],
})
export class VideoGallerySubPageModule {}
