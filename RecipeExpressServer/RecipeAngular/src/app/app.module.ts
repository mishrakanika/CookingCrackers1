import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MealTypeComponent } from './meal-type/meal-type.component';
import { CuisineTypeComponent } from './cuisine-type/cuisine-type.component';
import { MealPreferenceComponent } from './meal-preference/meal-preference.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { ChefprofileComponent } from './chefprofile/chefprofile.component';
import { AddrecipeComponent } from './chefprofile/addrecipe/addrecipe.component';
import { UpdaterecipeComponent } from './chefprofile/updaterecipe/updaterecipe.component';
import { DeleterecipeComponent } from './chefprofile/deleterecipe/deleterecipe.component';
import { RecipeServiceService} from './recipe-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MealTypeComponent,
    CuisineTypeComponent,
    MealPreferenceComponent,
    HomeComponent,
    ChefprofileComponent,
    AddrecipeComponent,
    UpdaterecipeComponent,
    DeleterecipeComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, RecipeServiceService ],
  bootstrap: [AddrecipeComponent]
})
export class AppModule { }
