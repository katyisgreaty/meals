import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div class="form-group">
      <label>Name of Meal</label>
      <input [value]="currentMeal.name" (input)="currentMeal.name = $event.target.value" class="form-control" type="text">
      <label>Details</label>
      <input [value]="currentMeal.details" (input)="currentMeal.details = $event.target.value" class="form-control" type="text">
      <label>Calories</label>
      <input [value]="currentMeal.calories" (input)="currentMeal.calories = $event.target.value" class="form-control" type="number">
    <button type="button" class="btn btn-danger" (click)="deleteButtonClicked(currentMeal)">Delete This Meal</button>
  </div>
  `
})

export class EditMealComponent {
  @Input() currentMeal: Meal;
  @Output() clickSender = new EventEmitter();

  editMeal(selectedMeal: Meal) {
    selectedMeal.isBeingEdited = false;
  }

  deleteButtonClicked(selectedMeal: Meal) {
    this.clickSender.emit(selectedMeal);
  }

}
