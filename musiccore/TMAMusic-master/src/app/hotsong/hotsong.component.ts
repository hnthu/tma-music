import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotsong',
  templateUrl: './hotsong.component.html',
  styleUrls: ['./hotsong.component.css']
})
export class HotsongComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

   onClick(i){
   	document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("item active")[0].setAttribute("class", "item");
   	document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("item")[i].setAttribute("class", "item active");
   }
}
