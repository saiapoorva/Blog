import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { RegisterService } from '../register/register.service';


@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorsService implements HttpInterceptor {

  constructor(private _regService:RegisterService ) { }
  intercept(req, next){
    var reqClone = req.clone({
headers: new HttpHeaders().set('authorization',this._regService.checkLogin()) 

    });

    return next.handle(reqClone);

    
  }
}
