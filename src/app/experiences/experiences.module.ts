import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './experiences.component';
import { ScreenModule } from '../screen/screen.module';


@NgModule({
  declarations: [
    ExperiencesComponent
  ],
  exports:[
    ExperiencesComponent
  ],
  imports: [
    ScreenModule,
    CommonModule,
  ]
})
export class ExperiencesModule { }
