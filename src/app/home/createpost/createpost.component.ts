import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { CreatepostService } from './createpost.service';
import { RegisterService } from '../../register/register.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css'],
  providers : [CreatepostService, RegisterService]
})
export class CreatepostComponent implements OnInit {

 

  constructor(private _createpostService : CreatepostService, private _regService : RegisterService, private router: Router) { }
username: String;
username1: any;
  title: String;
  description: String;
  model : any = {};
  ngOnInit() {
  }

  insert(){

    //this._regService.login(this.username);
    //console.log(this.username1);

    this._createpostService.insert(this.model);
    this.router.navigate(['/home/Listpost']);


  }

}
