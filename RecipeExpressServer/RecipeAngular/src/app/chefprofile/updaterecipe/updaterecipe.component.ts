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
  inputrecipe: IRecipeModel;
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
 router$: Router;
 name: string;
 RecipeService$: RecipeServiceService;

  constructor(private route: ActivatedRoute,
    private router: Router,

		private location: Location,
    private recipeService$: RecipeServiceService) { 
    
      this.inputrecipe = {rrecipeId:'', rname: '', rmethod: '', rdescription:'', rcuisinetype:'',rmealpreference:'', rmealtype:'', rduration:0,ringredients:'',rchefid:'',rimage:'',};
    

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
    
  }

  onSubmitupdate() {
    console.log(this.inputrecipe);
    this.inputrecipe.rrecipeId = this.rrecipeId;
    this.inputrecipe.rname = this.rname;
    this.inputrecipe.rmethod = this.rmethod;
    this.inputrecipe.rdescription = this.rdescription;
    this.inputrecipe.rcuisinetype = this.rcuisinetype;
    this.inputrecipe.rmealpreference = this.rmealpreference;
    this.inputrecipe.rmealtype = this.rmealtype;
    this.inputrecipe.rduration = this.rduration;
    this.inputrecipe.ringredients = this.ringredients;
    this.inputrecipe.rchefid = this.rchefid;
    this.inputrecipe.rimage = this.rimage;
    
    console.log(this.rname);
    console.log(this.inputrecipe.rname);
    console.log(this.inputrecipe);

    this.RecipeService$.updateRecipe(this.rrecipeId)
    .subscribe(
      result => {
        this.inputrecipe = result;
        this.name = "Post";
        console.log('result'+this.inputrecipe.toString());
      },
      () => {},
      () => {}
    );
    this.router$.navigate(['/']);
  }



  ngOnInit() {
  }

}
