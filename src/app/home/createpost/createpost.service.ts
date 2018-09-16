import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, BehaviorSubject} from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class CreatepostService {

  j : any = [];
  uname : any;

  constructor(private _http: HttpClient, private _activatedr: ActivatedRoute ) { }
//$editp = new BehaviorSubject<any>();
  insert(model: any){

    console.log(model);
    return this._http.post('http://localhost:3000/home/Createpost', model).subscribe((data : any) =>{

    console.log(data);

    });

  }

  display(){
   
    return this._http.get('http://localhost:3000/post');

    
 }
 login(){

   this._http.get('http://localhost:3000/login');

}


  commentlike(model){
    console.log(model);

    return this._http.post('http://localhost:3000/post', model).subscribe((data : any ) =>{

      //console.log(data.id);
      console.log(data);

  
      });
    }
dispcomm(postid1){

return this._http.get('http://localhost:3000/dispcomm/'+postid1); 
}
 

likec(postid1, model){

  return this._http.post('http://localhost:3000/likec/'+postid1, model);
}



editpost(model){
    return this._http.post('http://localhost:3000/editpost', model).subscribe((data: any)=>{

  console.log(data);
  });

 
}
deletepost(model){

  return this._http.post('http://localhost:3000/deletepost', model);
}


}
