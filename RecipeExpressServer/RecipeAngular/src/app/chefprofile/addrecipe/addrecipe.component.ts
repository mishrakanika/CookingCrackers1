import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import IRecipeModel from '../../share/IRecipeModel'
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RecipeServiceService} from '../../recipe-service.service';


@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {
 addRecipeId: string;
 inputrecipe: IRecipeModel;
 rname: string;
 rmethod: string;
 rdescription: string;
 rcuisinetype: string;
 rmealpreference: string;
 rmealtype: string;
 rduration: number;
 ringredients: string;
 rchefid: string;
 rimage: string;
 name: string;
  RecipeService$: RecipeServiceService;
  router$: Router;
  constructor(
    router$: Router,
    RecipeService$: RecipeServiceService,
   ) {
     this.RecipeService$ = RecipeService$;
     this.router$ = router$;
    this.inputrecipe = {rrecipeId:'', rname: '', rmethod: '', rdescription:'', rcuisinetype:'',rmealpreference:'', rmealtype:'', rduration:0,ringredients:'',rchefid:'',rimage:'',};
    
    }


    onSubmit() {
      console.log(this.inputrecipe);
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
  
      this.RecipeService$.getRecipeForPost(this.inputrecipe)
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









  
  