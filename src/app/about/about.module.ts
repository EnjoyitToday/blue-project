import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { ScreenModule } from '../screen/screen.module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  exports:[
    AboutComponent
  ],
  imports: [
    CommonModule,
    ScreenModule
  ]
})
export class AboutModule { }
