import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1 id="jumbo" class="jumbotron">Meal Tracking</h1>

    <button *ngIf="listAll == false" type="button" (click)="engageListAll()" class="btn button-spacer">List All Meals</button>
      <button *ngIf="listLow == false" type="button" (click)="engageListLow()" class="btn button-spacer">List Meals with less than 500 calories</button>
      <button *ngIf="listHigh == false" type="button" (click)="engageListHigh()" class="btn button-spacer">List Meals with more than 500 calories</button>
      <div class="meals" id="all" *ngIf="listAll == true">
        <div class="row">
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
      <new-meal (newClickSender)="addMeal($event)">Form coming soon</new-meal>


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
}
