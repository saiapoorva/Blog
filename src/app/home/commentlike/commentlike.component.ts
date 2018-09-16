import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatepostService } from '../createpost/createpost.service';
import {ActivatedRoute} from '@angular/router';






@Component({
  selector: 'app-commentlike',
  templateUrl: './commentlike.component.html',
  styleUrls: ['./commentlike.component.css'],
  providers: [CreatepostService]
})
export class CommentlikeComponent implements OnInit {

 
  
  @Output() comments : EventEmitter<string> = new EventEmitter();
  @Input() postid1: any;
  model: any = {};
  comments1: any =[];
  post1 : any = [];
  listcomm : any = {};
  list : any = [];
  shown : Boolean = false;
  likeco : any = [];

  postid : any;
  

  constructor(private _http : HttpClient, private _createpost : CreatepostService, private activatedroute: ActivatedRoute) { }


 
  ngOnInit() {

  }

  
  commentlike(){


  this.model.postid = this.postid1;
this.comments1 =   this._createpost.commentlike(this.model);
console.log(this.comments1);
this.comments.emit(this.model); 
  

  }

  dispcomments(postid1){
  this.shown  = !this.shown;
    
    this._createpost.dispcomm(postid1).subscribe((data)=>{
    
     
     //this.listcomm = data.comments;
   this.listcomm =  data;


    });
   
  }
  likec(postid1, model){

    this.model.likedby = "";
 
     this._createpost.likec(postid1,model).subscribe((data: any)=>{
        this.likeco = data;

    });

    



  }

  

  

} 
