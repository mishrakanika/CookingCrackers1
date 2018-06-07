import { Component, OnInit } from '@angular/core';
import IRecipeModel from '../share/IRecipeModel';
import { ActivatedRoute, Params } from '@angular/router';
import {RecipeServiceService} from '../recipe-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chefprofile',
  templateUrl: './chefprofile.component.html',
  styleUrls: ['./chefprofile.component.css']
})
export class ChefprofileComponent implements OnInit {

  recipelist: IRecipeModel[];
        rname: String;
       rrecipeId: string;
        rmethod: String;
        rdescription: String;
        rcuisinetype: String;
        rmealpreference: String;
        rmealtype: String;
        rduration: Number;
        ringredients: String;
        rchefid: String;
        rimage: String;
       router$: ActivatedRoute;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private recipeService$: RecipeServiceService) {

      recipeService$.retrieveAllRecipe()
      .subscribe(
        result=>{this.recipelist =result},
         () => { },
     () => { } 
      );

     }

  ngOnInit() {
  }

}
