import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../interface/photo.entity';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit {

  photos:Photo[] = [];

  constructor(
    private photoService:PhotoService,
    private activatedRoute:ActivatedRoute
  ){};

  public ngOnInit():void{
    const userName = this.activatedRoute.snapshot.params['userName'];
    this.getPhotos(userName);

  };

  public getPhotos(userName:string):void{
    this.photoService
    .listFromUser(userName)
    .subscribe(photos => this.photos =  photos);
  };
}
