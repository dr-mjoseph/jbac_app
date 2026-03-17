import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoGalleryPage } from './video-gallery';
import { YoutubePipe } from '../pipes/youtube/youtube';

@NgModule({
  declarations: [
    VideoGalleryPage,
    YoutubePipe
  ],
  imports: [
    IonicPageModule.forChild(VideoGalleryPage),
  ],
})
export class VideoGalleryPageModule { }
