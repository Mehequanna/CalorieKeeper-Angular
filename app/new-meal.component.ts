import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <h1>Add a Meal</h1>
  <div>
    <label>Meal:</label>
    <input #newName type="text" value=" " />
    <br>
    <label>Description of Meal:</label>
    <input #newDescription type="text" value=" "/>
    <br>
    <label># of Calories:</label>
    <input #newCalories type="number" min="0" step="10" value="150"/>
    <br>
    <button class="btn" (click)="addClicked(newName.value, newDescription.value, newCalories.value);
    newName.value=' ';
    newDescription.value=' ';
    newCalories.value='150';
    ">Add Meal</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, description: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, description, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
