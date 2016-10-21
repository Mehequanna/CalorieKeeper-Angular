import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MealListComponent} from './meal-list.component';
import { NewMealComponent } from './new-meal.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
   ],
  declarations: [
    AppComponent,
    MealListComponent,
    NewMealComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
