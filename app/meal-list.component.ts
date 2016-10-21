import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="row col-xs-offset-4">
      <div class="col-xs-4">
        <select (change)="onChangeMeal($event.target.value)" class="filter form-control">
          <option value="all">All Meals</option>
          <option value="low">Low Calorie Meals</option>
          <option value="high">High Calorie Meals</option>
        </select>
      </div>
    </div>
    <br>
    <br>
    <div id="meals" class="table-responsive">
      <table class="table table-striped">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Calories</th>
          <th>Edit?</th>
        </tr>
        <tr *ngFor="let currentMeal of childMealList | calories:selectedCalories">
          <td>{{ currentMeal.name }}</td>
          <td>{{ currentMeal.description }}</td>
          <td class="text-nowrap">{{ currentMeal.calories }}</td>
          <td><button (click)="editButtonClick(currentMeal)" class="btn">Edit</button></td>
        </tr>
      </table>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonClick(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  public selectedCalories: string = "all";
  onChangeMeal(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
  }
}
