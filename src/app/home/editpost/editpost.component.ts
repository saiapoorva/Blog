import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatepostService } from '../createpost/createpost.service';
import {RegisterService} from '../../register/register.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css'],
  providers: [CreatepostService, RegisterService]
 
})
export class EditpostComponent implements OnInit {

  constructor(private _http : HttpClient, private _createpost : CreatepostService, private _reg : RegisterService) { }

  @Input() postid1: any;
  model: any = {};
  edit : any = [];
  @Output() editposts : EventEmitter<string> = new EventEmitter();
  isLoggedin : Boolean;
  uname: any;
  postuname : any;
  

 
  //shown : Boolean = false;
  ngOnInit() {

    

    
  }

  
  


  editpost()
  {

    //this.shown  = !this.shown;
    //console.log(postid1);

    //console.log(this.lo);
   
   
    


//this._reg.login(model);
     
        console.log(this.model);
      this._createpost.editpost(this.model); 
        this.editposts.emit(this.model);
    
    
      

    }

    

  

  deletepost(model){

    
    

    

    
    this.model = "";

      this._createpost.deletepost(model).subscribe((data: any) =>{

      console.log(data);
      });
    }

  }


  

  



