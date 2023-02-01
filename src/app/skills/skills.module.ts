import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenModule } from '../screen/screen.module';
import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [
    SkillsComponent
  ],
  exports:[
    SkillsComponent
  ],
  imports: [
    CommonModule,
    ScreenModule
  ]
})
export class SkillsModule { }
