import { Pipe, PipeTransform } from '@angular/core';
import {  DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'tubet',
})

export class TubetPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  constructor(private dom: DomSanitizer){
  }
  
  transform(url: string) {
    return this.dom.bypassSecurityTrustResourceUrl(url);
  }
}
