import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient) {
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
  }
}
