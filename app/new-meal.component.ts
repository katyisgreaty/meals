import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h2>Add New Meal:</h2>
    <div class="form-group col-md-7">
      <form name="new-meal">
        <label for="name">Name of meal</label>
        <input type="text" name="name" (input)="newMealName = $event.target.value" class="form-control">
        <label name="details">Details of meal</label>
        <input type="text" name="details" (input)="newMealDetails = $event.target.value" class="form-control">
        <label name="calories">Calories of meal</label>
        <input type="number" name="calories" (input)="newMealCalories = $event.target.value" class="form-control">
        <button type="button" (click)="newMealButtonClicked()">Enter new meal</button>
      </form>
    </div>
  `
})

export class NewMealComponent {
  @Output() newClickSender = new EventEmitter();

  newMealName: string = null;
  newMealDetails: string = null;
  newMealCalories: number = null;

  newMealButtonClicked(){
    if(this.newMealName === null || this.newMealDetails === null || this.newMealCalories === null) {
      alert("Please fill out all the fields!");
    } else {
      var newMeal = new Meal(this.newMealName, this.newMealDetails, this.newMealCalories);
      this.newClickSender.emit(newMeal);
    }
  }
}
