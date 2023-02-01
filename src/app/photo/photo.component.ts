import { Component, Input } from '@angular/core';

@Component({
  selector: 'bp-photos',
  templateUrl: './photo.component.html'
})
export class PhotoComponent {

  @Input() styling:string="";

  @Input() imgUrl:string="";

}
