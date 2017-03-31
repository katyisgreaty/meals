import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { MealListComponent } from './meal-list.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { LowMealListComponent } from './low-meal-list.component';
import { HighMealListComponent } from './high-meal-list.component';
import { HighCalPipe } from './highcal.pipe';
import { LowCalPipe } from './lowcal.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent, MealListComponent, NewMealComponent, EditMealComponent, LowMealListComponent, HighMealListComponent, LowCalPipe, HighCalPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
