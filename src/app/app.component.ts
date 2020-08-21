import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import { Observable } from 'rxjs';
import * as ingredientActions from './store/ingredient.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ingredients: any;
  constructor(public store:Store<{IngredientList:{ingredients:[]}}>){}
ngOnInit(){
this.store.select('IngredientList').subscribe((res:any)=>{
  this.ingredients = res.ingredients
})

}
addIngredient(name,price){
  this.store.dispatch(new ingredientActions.AddIngredient({name,price}))
}
}
