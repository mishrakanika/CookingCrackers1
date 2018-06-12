import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import IRecipeModel from './share/IRecipeModel';
import IRecipeCatalogModel from './share/IRecipeCatalogModel';
import IRecipeCatalogDetailsModel from './share/IRecipeCatalogDetailsModel';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class UserService {

  host:string = '';
  userId:string = "";

  constructor(private http: Http) { }

  setUserid(uId:string) {
    this.userId = uId;
  }

  validateLUsernameInfo(username:string) {
    return this.http.get( '/app/user/username/' + username)
    .map(response => response.json());
  }


  retrieveRecipeDetailsByUser(rId: string) {
    var result = this.http.get( '/app/recipe/user/' + rId)
    .map(response => response.json());
    return result;
  }

  getUserInfo() {
    return this.http.get('/auth/userdata')
    .map(response => response.json());
  }


  loginWithGoogle(){
    return this.http.get('/auth/google')
    .map(response => response.json());
  }


}
