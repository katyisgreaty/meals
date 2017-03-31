import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="row" *ngFor="let currentMeal of listOfMeals">
    <div class="col-md-4">
      <h3>{{currentMeal.name}}</h3>
      <h4>Details: {{currentMeal.details}}</h4>
      <h4>Calories: {{currentMeal.calories}}</h4>
    </div>
  </div>

  `
})

export class MealListComponent {
  listOfMeals: Meal[] = Meal.listOfMeals;
}
