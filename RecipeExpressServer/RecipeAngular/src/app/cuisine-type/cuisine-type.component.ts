import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import IRecipeModel from '../share/IRecipeModel';
import {RecipeServiceService} from '../recipe-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cuisine-type',
  templateUrl: './cuisine-type.component.html',
  styleUrls: ['./cuisine-type.component.css']
})
export class CuisineTypeComponent implements OnInit {

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
        rId: string;
       router$: ActivatedRoute;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private recipeService$: RecipeServiceService) {

      this.rId = route.snapshot.params['Id'];
      recipeService$.retrieveRecipeDetailsByCuisineTypes(this.rId)
           .subscribe(
             result=>{this.recipelist =result},
              () => { },
          () => { } 
           );

     }

  ngOnInit() {
  }

}
