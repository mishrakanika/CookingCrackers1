import { Routes, RouterModule } from '@angular/router';
import { MealTypeComponent } from './meal-type/meal-type.component';
import { MealPreferenceComponent } from './meal-preference/meal-preference.component';
import { CuisineTypeComponent } from './cuisine-type/cuisine-type.component';
import { HomeComponent } from './home/home.component';
import { ChefprofileComponent } from './chefprofile/chefprofile.component';
import { GetRecipeComponent } from './all-recipe/get-recipe/get-recipe.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import {AddrecipeComponent} from './chefprofile/addrecipe/addrecipe.component';
import {NavbarComponent} from './navbar/navbar.component';
import { ChefprofilebioComponent } from './chefprofile/chefprofilebio/chefprofilebio.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'addrecipe', component: AddrecipeComponent },
    { path: 'allrecipes', component: AllRecipeComponent },
    { path: 'getRecipe/:Id',component: GetRecipeComponent},
    { path: 'recipe',component: AllRecipeComponent},
    { path: 'mealtype', component: MealTypeComponent },
    { path: 'mealpreference', component: MealPreferenceComponent },
    { path: 'cuisinetype', component: CuisineTypeComponent },
    { path: 'chef', component: ChefprofileComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'chefprofilebio', component: ChefprofilebioComponent },
];

export const routing = RouterModule.forRoot(routes, {useHash:true});