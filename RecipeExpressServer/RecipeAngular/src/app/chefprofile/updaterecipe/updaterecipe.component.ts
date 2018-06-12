import { Input, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import IRecipeModel from '../../share/IRecipeModel';
import {RecipeServiceService} from '../../recipe-service.service';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updaterecipe',
  templateUrl: './updaterecipe.component.html',
  styleUrls: ['./updaterecipe.component.css']
})
export class UpdaterecipeComponent implements OnInit {

  updateRecipe: IRecipeModel;
  rname: String;
 rrecipeId: string;
 rrecipeIdagain : string;
  rmethod: String;
  rdescription: String;
  rcuisinetype: String;
  rmealpreference: String;
  rmealtype: String;
  rduration: Number;
  ringredients: String;
  rchefid: String;
  rimage: String;
 router$: Router;
 name: string;
 RecipeService$: RecipeServiceService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
		private location: Location,
    private recipeService$: RecipeServiceService
  ) { 
      this.RecipeService$ = recipeService$;
      this.router$ = router;
      this.updateRecipe = {rrecipeId:'', rname: '', rmethod: '', rdescription:'', rcuisinetype:'',rmealpreference:'', rmealtype:'', rduration:0,ringredients:'',rchefid:'',rimage:'',};
    

    this.rrecipeId = route.snapshot.params['Id'];
    this.rrecipeIdagain= route.snapshot.params['Id'];
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
    
  }

  onsubmitupdate() {
    console.log(this.updateRecipe);
    this.updateRecipe.rrecipeId = this.rrecipeId;
    this.updateRecipe.rname = this.rname;
    this.updateRecipe.rmethod = this.rmethod;
    this.updateRecipe.rdescription = this.rdescription;
    this.updateRecipe.rcuisinetype = this.rcuisinetype;
    this.updateRecipe.rmealpreference = this.rmealpreference;
    this.updateRecipe.rmealtype = this.rmealtype;
    this.updateRecipe.rduration = 400;
    this.updateRecipe.ringredients = this.ringredients;
    this.updateRecipe.rchefid = this.rchefid;
    this.updateRecipe.rimage = this.rimage;
    
    console.log(this.rname);
    console.log(this.updateRecipe.rname);
    console.log(this.updateRecipe);

    this.RecipeService$.updateRecipe(this.updateRecipe.rrecipeId,this.updateRecipe)
    .subscribe(
      result => {
        this.updateRecipe = result;
        this.name = "Post";
        console.log('result'+this.updateRecipe.toString());
      },
      () => {},
      () => {}
    );
    this.router$.navigate(['/']);
  }



  ngOnInit() {
  }

}
