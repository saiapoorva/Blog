import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register.service';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isLoggedIn : Boolean = false;
  //loggedIn = false;
  

  constructor(private _regService : RegisterService ) { }

  ngOnInit() {

   if(this._regService.checkLogin()) {

    this.isLoggedIn = true;

   }

    this._regService.$authCheck.subscribe((data)=>{

        this.isLoggedIn = data;
        //this.loggedIn=data;

    });

  }

  logout(){

    this._regService.logout();
    this.isLoggedIn = false;

  }



}
