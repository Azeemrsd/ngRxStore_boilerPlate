import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { StoreModule } from '@ngrx/store';
import { ingredientReducer } from './store/ingredients.reducers';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({IngredientList:ingredientReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
