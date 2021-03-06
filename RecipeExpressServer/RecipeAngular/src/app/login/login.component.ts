import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import IRecipeModel from '../share/IRecipeModel';
import {UserService} from '../user.service';
import { Location } from '@angular/common';
import {Md5} from 'ts-md5/dist/md5';
import IUserModel from '../share/IUserModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputuser:IUserModel;
  userId:number;
  logintype:string;
  firstName:string;
  lastName:string;
  username:string;
  password:string;
  isChef:boolean;
  userservice$: UserService;
  route$: Router;
  name:string;

  constructor(
    _userservice: UserService,
    private route: ActivatedRoute,
      _route: Router,
    ) { 
      this.logintype = route.snapshot.params['Id'];
      this.userservice$ = _userservice;
      this.route$ = _route;
      this.inputuser= {firstName:'', lastName: '', username:'', password:'',isChef: false, userId: 0,};

  }
  onClick() {
    this.route$.navigate(['/Home']);
  }
  


  onGoogleLogin(){
    this.userservice$.loginWithGoogle().
    subscribe(
      result => {
        this.username = result.emails[0].value;
        this.userservice$.validateLUsernameInfo(this.username);
        
        
        this.password = "";

      },
      () => { this.username = "not logged in"},
      () => console.log('REST call' + this.username)
    
    );
    this.userservice$.validatecallback();
  }


  onSubmitsignin(){
    console.log("username:" + this.username);
     console.log("password:" + this.password);
     this.userservice$.validateLUsernameInfo(this.username).
     subscribe(
       result =>{
         if(this.username == result.username && Md5.hashStr(this.password) == result.password) 
         {
           console.log("Username matched!!");
           this.route$.navigate(['/allrecipes']);
         }
       },
       () => { this.username = "not logged in"},
       () => console.log('REST call' + this.username)
     );
  }

  onSubmitsigniup(){
    console.log("username:" + this.username);
    console.log("password:" + this.password);
      this.inputuser.firstName = this.firstName;
      this.inputuser.lastName = this.lastName;
      this.inputuser.username = this.username;
      this.inputuser.password = Md5.hashStr(this.password).toString();
      this.inputuser.isChef = this.isChef;
      this.userservice$.createNewUSer(this.inputuser)
      .subscribe(
        result => {
          this.inputuser = result;
          this.name = "Post";
          console.log('result'+this.inputuser.toString());
        },
        () => {},
        () => {}
      );
      this.route$.navigate(['/allrecipes']);
    }

  

  ngOnInit() {
  }

}
