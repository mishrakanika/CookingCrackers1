import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import IRecipeModel from '../share/IRecipeModel';
import {UserService} from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logintype:string;
  username:string;
  password:string;
  userservice$: UserService;
  route$: Router;

  constructor(
    _userservice: UserService,
    private route: ActivatedRoute,
      _route: Router,
    ) { 
      this.logintype = route.snapshot.params['Id'];
      this.userservice$ = _userservice;
      this.route$ = _route;
      if(this.logintype == '3')
      {
        this.userservice$.loginWithGoogle()
        .subscribe(
          result => {
            this.username = result.emails[0].value;
            this.password = "";
          },
          () => { this.username = "not logged in"},
          () => console.log('REST call' + this.username)
        );
      }

      else
      {

    this.userservice$.getUserInfo()
      .subscribe(
        result => {
          this.username = result.emails[0].value;
          this.password = "";
        },
        () => { this.username = "not logged in"},
        () => console.log('REST call' + this.username)
      );
    }
  }
  onClick() {
    this.route$.navigate(['/Home']);
  }
  
  onFBLogin() {
     this.userservice$.validateLUsernameInfo(this.username)
     .subscribe(
       result => {
         this.userservice$.userId = result;
         this.route$.navigate(['/Home']);
       },
       () => {},
       () => console.log('REST call:' + this.username)
     );
     console.log("username:" + this.username);
     console.log("password:" + this.password);
  }

  onGoogleLogin(){
    this.userservice$.loginWithGoogle().
    subscribe(
      result => {
        this.username = result.emails[0].value;
        this.password = "";
      },
      () => { this.username = "not logged in"},
      () => console.log('REST call' + this.username)
    
    );
  }


  ngOnInit() {
  }

}
