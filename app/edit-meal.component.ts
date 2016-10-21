import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal" id="editMeal">
      <h1>Edit Meal</h1>
      <div>
      <label>Meal:</label>
      <input [(ngModel)]="childSelectedMeal.name">
      <br>
      <label>Description of Meal:</label>
      <input [(ngModel)]="childSelectedMeal.description">
      <br>
      <label># of Calories:</label>
      <input [(ngModel)]="childSelectedMeal.calories" type="number" min="0" step="10" value="150">
      <br>
      <button class="btn" (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
