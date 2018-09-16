import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  
  
  //status = new Subject<boolean>();
  $authCheck = new BehaviorSubject<any>(this.checkLogin());
  cookieValue : any = "asd";
  token: any;


  constructor(private _http: HttpClient, private _cookieService : CookieService, private _router: Router) { }


  register(model){

    
   
this._http.post('http://localhost:3000/register',model).subscribe((data : any) =>{



    console.log(data);
   
    

});

     
  
  }

 

  login(model){

   
    this._http.post('http://localhost:3000/login', model).subscribe((data : any) =>{
      if(data.isLoggedIn){

      
      this._router.navigate(['/home/Createpost']);
    this._cookieService.set('token',data.token);
    this.token = data.token;
    //this.notifyNavbar(data.isLoggedIn)
      this.$authCheck.next(true);
      alert('loggedin');
      console.log(data);

      }
      else{
        //this.notifyNavbar(data.isLoggedIn)

        alert('wrong credentials');
      }

    });
    
    
   
    

  }

  
  checkLogin(){

    return this._cookieService.get('token');
  
  }

  logout(){
    this._cookieService.delete('token');
    this._cookieService.delete('uname');``
    this.token=null;
    //this.notifyNavbar(false);
    
  }

  


}

