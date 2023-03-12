import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe",
          "This is simply test",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2FMelting-Potatoes.jpg",
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe("Another Test Recipe",
      "This is simply test",
      "https://www.seriouseats.com/thmb/-hizGHRcRo7KDY4sdXKcQy2tmR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/oyakodon-japanese-chicken-and-egg-rice-bowl-recipe-hero-f2d42cfe8e8e4436b97d6e79d038d9bc.JPG",
      [
        new Ingredient('Beef', 5),
        new Ingredient('Bread', 15)
      ]
      )
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
