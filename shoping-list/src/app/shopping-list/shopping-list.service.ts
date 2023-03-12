import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
  ingredientsChange = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredient() {
    return this.ingredients.slice();
    // return this.ingredients;                     // easy way to have new ingredients when change
  }

  addIngredient(ingredient: Ingredient) {
    let itemExist = false;
    for(let item of this.ingredients) {
      if(item.name === ingredient.name) {
        item.amount += ingredient.amount;
        itemExist = true;
        break;
      }
    }

    if(!itemExist) {
      this.ingredients.push(ingredient);
    }

    this.ingredientsChange.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    for(let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }
    this.ingredientsChange.emit(this.ingredients.slice());
  }
}
