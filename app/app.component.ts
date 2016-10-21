import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'calorie-keeper',
  template: `
    <div class="container">
      <div class="jumbotron text-center">
        <h1>Calorie Keeper</h1>
      </div>
      <div class="table table-sm table-responsive">
        <table class="drinks table table-striped">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Calories</th>
          </tr>
          <tr *ngFor="let currentMeal of masterMealList">
            <td>{{ currentMeal.name }}</td>
            <td>{{ currentMeal.description }}</td>
            <td class="text-nowrap">{{ currentMeal.calories }}</td>
          </tr>
        </table>
      </div>
    </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Example: Chicken Tikka Masala", "Chicken, sauce, rice, and a naan. Best food on the planet.", 1000),
    new Meal("Example: Chicken Tereyaki", "Chicken, teriyaki sauce, and white rice. Yeah that's right, I ate all of it.", 450)
  ];
}
