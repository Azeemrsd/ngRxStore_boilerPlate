import * as ingredientActions from './ingredient.actions'
const initialState = {
    ingredients:[
         {
        name:'Apple',
        price: 10
    },{
         name:'Cheese',
        price:5
    }
    ]
}
export const ingredientReducer = (state = initialState,action) =>{
switch(action.type){
case ingredientActions.ADD_INGREDIENT : 
return {...state,ingredients: [...state.ingredients, action.payload] }
default: return state;
}
}
