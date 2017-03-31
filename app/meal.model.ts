export class Meal {
  
  public isBeingEdited: boolean = false;

  constructor(public name: string, public details: string, public calories: number) { };

  static listOfMeals: Meal[] = [
    new Meal('Turkey Sandwich', 'Turkey, wheat bread, mayo tomato and lettuce', 400),
    new Meal('Cereal', 'Lucky Charms and 1% Milk', 310),
    new Meal('Pasta', 'Rotini and Marinara Sauce', 400),
  ];


}
