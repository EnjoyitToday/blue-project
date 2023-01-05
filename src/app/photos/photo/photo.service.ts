import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Photo } from "../interface/photo.entity";


@Injectable({
  providedIn:'root'
})
export class PhotoService{

  private API = "http://localhost:3000"

  constructor(private http:HttpClient){};

  public listFromUser(user:string):Observable<Photo[]>{
    return this.http
      .get<Photo[]>(`${this.API}/${user}/photos`)
  }
}
