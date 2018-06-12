import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Params } from '@angular/router';
import IRecipeModel from '../../share/IRecipeModel';
import {RecipeServiceService} from '../../recipe-service.service';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-deleterecipe',
  templateUrl: './deleterecipe.component.html',
  styleUrls: ['./deleterecipe.component.css']
})
export class DeleterecipeComponent implements OnInit {
  getRecipe: IRecipeModel;
  deleterecipe: IRecipeModel;
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

  constructor( private route: ActivatedRoute,
		private location: Location,
    private recipeService$: RecipeServiceService) {
      this.deleterecipe = {rrecipeId:'', rname: '', rmethod: '', rdescription:'', rcuisinetype:'',rmealpreference:'', rmealtype:'', rduration:0,ringredients:'',rchefid:'',rimage:'',};

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
      );

      onSubmitdelete() {
        console.log(this.deleterecipe);
        this.deleterecipe.rname = this.rname;
        this.deleterecipe.rmethod = this.rmethod;
        this.deleterecipe.rdescription = this.rdescription;
        this.deleterecipe.rcuisinetype = this.rcuisinetype;
        this.deleterecipe.rmealpreference = this.rmealpreference;
        this.deleterecipe.rmealtype = this.rmealtype;
        this.deleterecipe.rduration = this.rduration;
        this.deleterecipe.ringredients = this.ringredients;
        this.deleterecipe.rchefid = this.rchefid;
        this.deleterecipe.rimage = this.rimage;
        
        console.log(this.rname);
        console.log(this.deleterecipe.rname);
        console.log(this.deleterecipe);
    
        this.RecipeService$.deleteRecipe(this.rrecipeId)
        .subscribe(
          result => {
            this.deleterecipe = result;
            this.name = "Post";
            console.log('result'+this.deleterecipe.toString());
          },
          () => {},
          () => {}
        );
        this.router$.navigate(['/']);
      }



     }

  ngOnInit() {
  }

}
