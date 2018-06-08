import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import IRecipeModel from '../../share/IRecipeModel';
import {RecipeServiceService} from '../../recipe-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updaterecipe',
  templateUrl: './updaterecipe.component.html',
  styleUrls: ['./updaterecipe.component.css']
})
export class UpdaterecipeComponent implements OnInit {

  getRecipe: IRecipeModel;
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

    this.rrecipeId = route.snapshot.params['Id'];
       console.log("Recipe ID :"+ this.rrecipeId);
       recipeService$.retrieveRecipeDetailsByName(this.rrecipeId)
       .subscribe(
         result => { this.rname = result.rname;
          this.rrecipeId = result.rrecipeId;
          this.rmethod = result.rmethod;
          this.rdescription = result.rdescription;
          this.rduration = result.rduration;
          this.ringredients = result.ringredients;
          this.rchefid = result.rchefid;
          this.rcuisinetype = result.rcuisinetype;
          this.rmealpreference = result.rmealpreference;
          this.rmealtype = result.rmealtype;
          this.rimage = result.rimage;

         },
			() => { },
			() => { } 
       );

    
  }

  ngOnInit() {
  }

}
