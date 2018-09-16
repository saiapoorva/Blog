import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthGuard} from './auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';
import { HomeComponent } from './home/home.component';
import { CreatepostComponent } from './home/createpost/createpost.component';
import { ListpostComponent } from './home/listpost/listpost.component';

import { CreatepostService } from './home/createpost/createpost.service';

import { CookieService } from 'ngx-cookie-service';
import {AuthinterceptorsService} from './register/authinterceptors.service';
import { CommentlikeComponent } from './home/commentlike/commentlike.component';
import { ViewpostComponent } from './home/listpost/viewpost/viewpost.component';
import { EditpostComponent } from './home/editpost/editpost.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    RegisterComponent,
    CreatepostComponent,
    HomeComponent,
    ListpostComponent,
    
    CommentlikeComponent,
    ViewpostComponent,
    EditpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

     
      {path:"login", component: LoginComponent},
      {path:"register", component: RegisterComponent},
      {path:"home", component: HomeComponent, canActivate : [AuthGuard],
      canActivateChild: [AuthGuard],
      children: [{path:"Createpost", component: CreatepostComponent},
      
      {path: "Listpost", component: ListpostComponent},
      {path: "Listpost/:lid", component: ViewpostComponent},
      {path: "Logout", component: LoginComponent}
      
    ]},
    
    {path:"home", redirectTo:"home", pathMatch: "full"},
      {path: "**", redirectTo:"home"}
    
     
     



  ], { useHash: true })
  ],
  providers: [RegisterService, AuthGuard,  CreatepostService, CookieService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthinterceptorsService,
    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
