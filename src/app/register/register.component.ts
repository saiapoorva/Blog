import { Component, OnInit } from '@angular/core';
import { registerContentQuery } from '@angular/core/src/render3/instructions';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  constructor(private _regservice: RegisterService) { }
  username: String;
  password: String;
model : any = {};
array : any = [];

  ngOnInit() {
    
  

  }

//   register1(){

    
// }
  register(){
  
  this._regservice.register(this.model);


}










}
