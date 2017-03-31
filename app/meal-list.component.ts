import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div id="all">
    <div class="meals" *ngFor="let currentMeal of listOfMeals">
      <div class="col-md-4 box">
        <h3>{{currentMeal.name}}</h3>
        <h4>Details: {{currentMeal.details}}</h4>
        <h4>Calories: {{currentMeal.calories}}</h4>
        <h5>Sounds delicious! And remember, calories are not the end-all be-all of health. Eating what makes you feel healthy and happy is the goal! The food you eat does not determine your worth as a person</h5>
        <button type="button" class="btn btn-primary" (click)="toggleEditing(currentMeal)">Edit Meal</button>
        <div *ngIf="currentMeal.isBeingEdited">
        <div class="panel-body">
        <edit-meal [currentMeal]="currentMeal" (clickSender)="sendDeleteMessage($event)">Loading</edit-meal>
        <button type="button" class="btn btn-primary" (click)="toggleEditing(currentMeal)">Finish Editing</button>
        </div>
        </div>
      </div>
    </div>
  </div>

  `
})

export class MealListComponent {
  @Output() deleteSender = new EventEmitter();

  listOfMeals: Meal[] = Meal.listOfMeals;

  toggleEditing(selectedMeal: Meal) {
    selectedMeal.isBeingEdited = (!(selectedMeal.isBeingEdited));
    console.log("toggles");
  }

  sendDeleteMessage(selectedMeal: Meal) {
    this.deleteSender.emit(selectedMeal);
  }
}
