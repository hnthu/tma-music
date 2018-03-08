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

  public hotsongs = [
    { id: "1", imageUrl: "../assets/icon/a.jpg", title: "" },
    { id: "2", imageUrl: "../assets/icon/b.jpg", title: "" },
    { id: "3", imageUrl: "../assets/icon/c.jpg", title: "" },
    { id: "4", imageUrl: "../assets/icon/d.jpg", title: "" },
    { id: "5", imageUrl: "../assets/icon/e.jpg", title: "" }
  ];

  onClick(i){
   	document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("item active")[0].setAttribute("class", "item");
   	document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("item")[i].setAttribute("class", "item active");
   }
}
