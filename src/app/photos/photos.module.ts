import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";

import { PhotoListComponent } from "./photo-list/photo-list.component";
import { PhotoComponent } from "./photo/photo.component";
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent
  ],
  exports:[
    PhotoComponent
  ],
  imports:[
    HttpClientModule,
    CommonModule
  ]
})
export class PhotosModule{}
