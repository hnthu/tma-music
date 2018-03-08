<<<<<<< HEAD
  import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'

@Component({
  selector: 'app-topmenubar',
  providers: [AppService],
  templateUrl: './topmenubar.component.html',
  styleUrls: ['./topmenubar.component.css']
})
export class TopmenubarComponent implements OnInit {

  constructor(private _service:AppService){}

  isLoggedIn: boolean = false;
  ngOnInit() {
  	//this._service.checkCredentials();
  }

  public loginData = {username: "", password: ""};


  login(){
   	this._service.obtainAccessToken(this.loginData);
   	this.isLoggedIn = true;
  }


   logout() {
        //this._service.logout();
        this.isLoggedIn = false;
    }

}
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topmenubar',
  templateUrl: './topmenubar.component.html',
  styleUrls: ['./topmenubar.component.css']
})
export class TopmenubarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
>>>>>>> e98b792efd54c336f69b5b9d99e681fd80c0d121
