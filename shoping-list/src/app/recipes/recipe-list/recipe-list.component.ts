import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply test",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2FMelting-Potatoes.jpg"),
    new Recipe("Another Test Recipe", "This is simply test",
      "https://www.seriouseats.com/thmb/-hizGHRcRo7KDY4sdXKcQy2tmR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/oyakodon-japanese-chicken-and-egg-rice-bowl-recipe-hero-f2d42cfe8e8e4436b97d6e79d038d9bc.JPG")
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() {
  }


  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
