import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BudgetCalculatorComponent } from './budget-calculator/budget-calculator.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CardItemComponent } from './list-item/card-item/card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    BudgetCalculatorComponent,
    EditItemComponent,
    ListItemComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
