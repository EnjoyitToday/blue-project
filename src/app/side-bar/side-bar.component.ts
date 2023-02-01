import { Component } from "@angular/core";

@Component({
  selector:"side-bar",
  templateUrl:"./side-bar.component.html",
  styleUrls:["./side-bar.component.css"],
})
export class SideBarComponent{

  public name:string = "Carlos Eduardo Maurício de Sousa";

  public socialMedia=[
    {
      adress:"https://github.com/EnjoyitToday",
      imgAssets:"/assets/gitlogo.png"
    },
    {
      adress:"https://www.linkedin.com/in/carlos-eduardo-maurício-de-sousa-941349249/",
      imgAssets:"/assets/linkedinglogo.png"
    }
  ]

  oi():void{
    console.log("oi")
  }
}
