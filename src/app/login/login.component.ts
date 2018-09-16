import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [RegisterService]
})
export class LoginComponent implements OnInit {

  constructor(private _regservice : RegisterService, private router : Router) { }
  username: String;
  password: String;
  model : any = {
    

  };
  
  ngOnInit() {

    
  }

  login(){

     this._regservice.login(this.model);
     //this.router.navigate(['/home/Listpost']);
     

  }

}
