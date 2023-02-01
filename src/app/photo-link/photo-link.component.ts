import { Component,Input } from '@angular/core';

@Component({
  selector: 'bp-photo-link',
  templateUrl: './photo-link.component.html'
})
export class PhotoLinkComponent {

  @Input() styling:string="";

  @Input() imgUrl:string="";

  @Input() linkAdress?:string="";
}
