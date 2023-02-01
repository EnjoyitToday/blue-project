import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoLinkComponent } from './photo-link.component';

@NgModule({
  declarations: [
    PhotoLinkComponent
  ],
  exports:[
    PhotoLinkComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PhotoLinkModule {}
