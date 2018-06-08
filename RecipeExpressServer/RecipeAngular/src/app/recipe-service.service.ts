import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import IRecipeModel from './share/IRecipeModel';
import IRecipeCatalogModel from './share/IRecipeCatalogModel';
import IRecipeCatalogDetailsModel from './share/IRecipeCatalogDetailsModel';



 @Injectable()
//  {} providedIn: 'root'
// }
export class RecipeServiceService {
  //host:string = 'http://localhost:8080';

  constructor(private http: Http) { }

  
  retrieveRecipeDetailsByCategory(rId: string) {
    var result = this.http.get( '/app/recipe/category/' + rId)
    .map(response => response.json());

    return result;
  }
  
  retrieveRecipeDetailsByName(rrecipeId: string) {
    console.log(rrecipeId);
    var result=  this.http.get( '/app/recipe/'+ rrecipeId)
    .map(response => response.json());
    return result;
  }


  retrieveAllRecipe() {
    //console.log(rrecipeId);
    var result=  this.http.get( '/app/recipe/')
    .map(response => response.json());
    return result;
  }


  updateRecipe(rrecipeId: string){
    console.log("inside Update recipe post");
    return this.http.post( '/app/recipe/', rrecipeId)
    .map(response => response.json()); 
  }

 deleteRecipe(rrecipeId: string){
  console.log(rrecipeId);
  var result=  this.http.delete(  '/app/recipe/'+ rrecipeId)
  .map(response => response.json());
  return result;
}


  getRecipeForPost(recipe: IRecipeModel) {
    console.log("inside getrecipepost");
    return this.http.post('/app/recipe/', recipe)
    .map(response => response.json());
  }

  
}





