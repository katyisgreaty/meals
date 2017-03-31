import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div id="jumbo" class="jumbotron">
    <h1 id="chalk">The You'd-Think-We'd<br>Be-Past-the-Whole-'Counting<br>Calories'-Thing-By-Now<br>Food Tracker</h1>
  </div>
  <div class="buttondiv">
    <button *ngIf="listAll == false" type="button" (click)="engageListAll()" class="btn button-spacer">List All Meals</button>
    <button *ngIf="listLow == false" type="button" (click)="engageListLow()" class="btn button-spacer">List Meals with less than 500 calories</button>
    <button *ngIf="listHigh == false" type="button" (click)="engageListHigh()" class="btn button-spacer">List Meals with more than 500 calories</button>
  </div>
  <div class="lists">
    <div class="meals" id="all" *ngIf="listAll == true">
      <div class="row list-space">
        <meal-list>Loading...</meal-list>
      </div>
    </div>
    <div class="meals" id="low" *ngIf="listLow == true">
      <div class="row">
        <low-meal-list>Loading...</low-meal-list>
      </div>
    </div>
    <div class="meals" id="high" *ngIf="listHigh == true">
      <div class="row">
        <high-meal-list>Loading...</high-meal-list>
      </div>
    </div>
  </div>

  <div class="row new-meal-form">
    <new-meal (newClickSender)="addMeal($event)">Form loading</new-meal>
  </div>
  `
})

export class AppComponent {
  public listAll: boolean = true;
  public listLow: boolean = false;
  public listHigh: boolean = false;

  engageListAll() {
    this.listAll = true;
    this.listLow = false;
    this.listHigh = false;
  }

  engageListLow() {
    this.listLow = true;
    this.listAll = false;
    this.listHigh = false;
  }

  engageListHigh() {
    this.listHigh = true;
    this.listLow = false;
    this.listAll = false;
  }

  addMeal(newMeal: Meal) {
    Meal.listOfMeals.push(newMeal);
  }

  deleteMeal(selectedMeal: Meal) {
    for(let index = 0; index < Meal.listOfMeals.length; index++) {
      if(Meal.listOfMeals[index].mealId === selectedMeal.mealId) {
        Meal.listOfMeals.splice(index, 1);
        break;
      }
    }
  }
}
