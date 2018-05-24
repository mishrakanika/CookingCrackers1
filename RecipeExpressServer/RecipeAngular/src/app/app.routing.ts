import { Routes, RouterModule } from '@angular/router';
import { MealTypeComponent } from './meal-type/meal-type.component';
import { MealPreferenceComponent } from './meal-preference/meal-preference.component';
import { CuisineTypeComponent } from './cuisine-type/cuisine-type.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'mealtype', component: MealTypeComponent },
    { path: 'mealpreference', component: MealPreferenceComponent },
    { path: 'cuisinetype', component: CuisineTypeComponent },
  //  { path: 'list', component: ListsComponent },
   // { path: 'list/:id', component: ListComponent}
];

export const routing = RouterModule.forRoot(routes);