import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div id="meals" class="table-responsive">
      <table class="table table-striped">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Calories</th>
        </tr>
        <tr *ngFor="let currentMeal of childMealList">
          <td>{{ currentMeal.name }}</td>
          <td>{{ currentMeal.description }}</td>
          <td class="text-nowrap">{{ currentMeal.calories }}</td>
        </tr>
      </table>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
}
