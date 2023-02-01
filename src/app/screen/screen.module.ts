import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen.component';



@NgModule({
  declarations: [
    ScreenComponent
  ],
  exports:[
    ScreenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ScreenModule { }
