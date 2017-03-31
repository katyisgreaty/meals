import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'high-meal-list',
  template: `

  <div class="meals" *ngFor="let currentMeal of listOfMeals | listingHigh">
    <div class="col-md-3 box">
      <h3>{{currentMeal.name}}</h3>
      <h4>Details: {{currentMeal.details}}</h4>
      <h4>Calories: {{currentMeal.calories}}</h4>
      <button type="button" class="btn btn-primary" (click)="toggleEditing(currentMeal)">Edit Meal</button>
      <div *ngIf="currentMeal.isBeingEdited">
      <div class="panel-body">
      <edit-meal [currentMeal]="currentMeal" (clickSender)="sendDeleteMessage($event)">Loading</edit-meal>
      <button type="button" class="btn btn-primary" (click)="toggleEditing(currentMeal)">Finish Editing</button>
      </div>
      </div>
    </div>
  </div>

  `
})

export class HighMealListComponent {
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
