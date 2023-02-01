import { Component,Input } from '@angular/core';

@Component({
  selector: 'screen-template',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {

  @Input() public title:string="";
  @Input() public subTitle:string="";
  @Input() public content:string="";

}
