import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'calorie-keeper',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>Calorie Keeper</h1>
      </div>
      <div id="main">
        <meal-list
          [childMealList]="masterMealList"
          (clickSender)="showDetails($event)"
        ></meal-list>
        <edit-meal
          [childSelectedMeal]="selectedMeal"
          (doneClickedSender)="finishedEditing()"
        ></edit-meal>
        <button (click)="showMealDiv()" class="btn" *ngIf="!hideNewMealButton">New Meal</button>
        <div *ngIf="showAddMeal" id="newMeal">
          <new-meal
            (newMealSender)="addMeal($event)"
          ></new-meal>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Example: Chicken Tikka Masala", "Chicken, sauce, rice, and a naan. Best food on the planet. Don't judge me!", 1000),
    new Meal("Example: Chicken Tereyaki", "Chicken, teriyaki sauce, and white rice. Yeah that's right, I ate all of it.", 450)
  ];

  hideNewMealButton = false;
  showAddMeal = false;
  showMealDiv() {
    this.showAddMeal = true;
    this.hideNewMealButton = true;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
    this.showAddMeal = false;
    this.hideNewMealButton = false;
  }

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
}
