import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Meal Tracking</h1>
  <div class="container">
    <div class="row">
      <meal-list>Loading...</meal-list>
    </div>
    <new-meal (newClickSender)="addMeal($event)">Form coming soon</new-meal>
  </div>
  `
})

export class AppComponent {

  addMeal(newMeal: Meal) {
    Meal.listOfMeals.push(newMeal);
  }
}
