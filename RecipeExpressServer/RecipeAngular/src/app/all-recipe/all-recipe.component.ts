import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import IRecipeModel from '../share/IRecipeModel';
import {RecipeServiceService} from '../recipe-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.css']
})
export class AllRecipeComponent implements OnInit {
 // @Input() index:number;
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

       constructor(
        private route: ActivatedRoute,
        private location: Location,
        private recipeService$: RecipeServiceService)
         { 	
         
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
