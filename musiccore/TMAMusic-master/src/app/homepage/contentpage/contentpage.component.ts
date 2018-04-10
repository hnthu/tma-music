import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.css']
})
export class ContentPageComponent implements OnInit {
  isPlay = true;
  audio = new Audio();
  constructor() { }

  ngOnInit() {
  }

  playAudio(){
    this.audio.src = "../assets/music/Cung-Anh-Ngoc-Dolil-Hagi-STee.mp3";
    if(this.isPlay){
      this.isPlay = false;
      this.audio.load();
      this.audio.play();
    }   
    else{
      this.isPlay = true;
      this.audio.pause();
    }
  }
  stopAudio(){
    this.audio.pause();
    this.isPlay = true;
  }
  nextAudio(){
    this.audio.src = "../assets/music/Cung-Anh-Ngoc-Dolil-Hagi-STee.mp3";
    this.audio.load();
    this.audio.play();
    this.isPlay = false;
  }
  previousAudio(){
    this.audio.src = "../assets/music/Cung-Anh-Ngoc-Dolil-Hagi-STee.mp3";
    this.audio.load();
    this.audio.play();
    this.isPlay = false;
  }

}
