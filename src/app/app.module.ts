import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';
import { SideBarModule } from './side-bar/side-bar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoModule } from './photo/photo.module';
import { AboutModule } from './about/about.module';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SideBarModule,
    AboutModule,
    BrowserModule,
    AppRoutingModule,
    PhotoModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
