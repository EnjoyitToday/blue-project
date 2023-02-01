import { NgModule } from "@angular/core";
import { PhotoModule } from "../photo/photo.module";
import { SideBarComponent } from "./side-bar.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from "@angular/common";
import { PhotoLinkModule } from "../photo-link/photo-link.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations:[SideBarComponent,],
  exports:[SideBarComponent],
  imports:[
    PhotoModule,
    PhotoLinkModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDividerModule,
    CommonModule,
    RouterModule
  ]
})
export class SideBarModule{}
