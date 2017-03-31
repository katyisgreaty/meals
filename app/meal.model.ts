export class Meal {
  public isFocusFood: boolean = false;
  public isBeingEdited: boolean = false;
  public mealId: number;

  constructor(public name: string, public details: string, public calories: number) {
    this.mealId = Meal.idCounter;
    Meal.idCounter++;
  };

  static idCounter: number = 0;

  static listOfMeals: Meal[] = [
    new Meal('Turkey Sandwich', 'Turkey, wheat bread, mayo tomato and lettuce', 400),
    new Meal('Cereal', 'Lucky Charms and 1% Milk', 310),
    new Meal('Pasta', 'Rotini and Marinara Sauce', 400),
    new Meal('Waffles', 'Waffles with butter, syrup and strawberries', 700),
    new Meal('Hamburger', 'Hamburger with sweet bun, grilled pineapple, teriyaki sauce and cheddar cheese', 900),
  ];


}
