import { Routes, RouterModule } from '@angular/router';
import { MealTypeComponent } from './meal-type/meal-type.component';
import { MealPreferenceComponent } from './meal-preference/meal-preference.component';
import { CuisineTypeComponent } from './cuisine-type/cuisine-type.component';
import { HomeComponent } from './home/home.component';
import { ChefprofileComponent } from './chefprofile/chefprofile.component';
import { GetRecipeComponent } from './get-recipe/get-recipe.component';

const routes: Routes = [
    { path: '', component: GetRecipeComponent },
    { path: 'getRecipe/:recipeID',component: GetRecipeComponent},
    { path: 'mealtype', component: MealTypeComponent },
    { path: 'mealpreference', component: MealPreferenceComponent },
    { path: 'cuisinetype', component: CuisineTypeComponent },
    { path: 'chef', component: ChefprofileComponent },
];

export const routing = RouterModule.forRoot(routes);