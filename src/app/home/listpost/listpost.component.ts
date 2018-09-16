import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreatepostService } from '../createpost/createpost.service';
import { RegisterService } from '../../register/register.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.css'],
  providers: [RegisterService, CreatepostService, CookieService]
})
export class ListpostComponent implements OnInit {

  post: any = [];
  post1: any = [];
 model: any = {};
 commentby: any;
 show : boolean = true;
 

  constructor(private _http: HttpClient, private _cookieService: CookieService, private _regservice : RegisterService, private _createpost : CreatepostService, private _activater : ActivatedRoute) { }

  ngOnInit() {
    
    this._createpost.display().subscribe( (data: any) =>{

      

      this.post = data;
      console.log(this.post);
      
      
    });
    

    
  }

  

  commentsparentfn(event){

    console.log(event);

    
    }
    editpostfn(event){

      console.log(event);

    }

    

    
    
   


}
