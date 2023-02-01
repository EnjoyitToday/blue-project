import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'about',
    pathMatch:'full'
  },
  {path:'about',component: AboutComponent},
  {path:'experiencies',component: ExperiencesComponent},
  {path:'skills',component: SkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
