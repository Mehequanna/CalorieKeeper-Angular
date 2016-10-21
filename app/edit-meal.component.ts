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
      <input [(ngModel)]="childSelectedMeal.calories">
      <br>
      <button class="btn btn-success" (click)="doneClicked()">Done</button>
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
