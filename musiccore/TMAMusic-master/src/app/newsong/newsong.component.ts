import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'


@Component({
  selector: 'app-newsong',
  providers: [AppService],
  templateUrl: './newsong.component.html',
  styleUrls: ['./newsong.component.css']
})
export class NewsongComponent implements OnInit {

    public foo = { id: 1, name: 'sample foo' };
   	private foosUrl = 'http://localhost:8080/songs';

    constructor(private _service:AppService) {}

    ngOnInit() {

    }
    getFoo(){
        this._service.getResource(this.foosUrl+this.foo.id)
          .subscribe(
            data => this.foo = data,
            error =>  this.foo.name = 'Error');
    }

}
