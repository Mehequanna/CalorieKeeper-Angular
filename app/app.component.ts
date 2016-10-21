import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'calorie-keeper',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>Calorie Keeper</h1>
      </div>
      <meal-list
        [childMealList]="masterMealList"
      ></meal-list>
        <new-meal
          (newMealSender)="addMeal($event)"
        ></new-meal>
    </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Example: Chicken Tikka Masala", "Chicken, sauce, rice, and a naan. Best food on the planet.", 1000),
    new Meal("Example: Chicken Tereyaki", "Chicken, teriyaki sauce, and white rice. Yeah that's right, I ate all of it.", 450)
  ];

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
