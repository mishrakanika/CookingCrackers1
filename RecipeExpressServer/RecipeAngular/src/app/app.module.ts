import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MealTypeComponent } from './meal-type/meal-type.component';
import { CuisineTypeComponent } from './cuisine-type/cuisine-type.component';
import { MealPreferenceComponent } from './meal-preference/meal-preference.component';

@NgModule({
  declarations: [
    AppComponent,
    MealTypeComponent,
    CuisineTypeComponent,
    MealPreferenceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MealTypeComponent]
})
export class AppModule { }
