import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping.-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
 
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[];

  description = [];

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    console.log("loading shopping list component");
    this.ingredients=this.shoppingListService.getIngredients();
  this.shoppingListService.ingredientsChanged.subscribe(
    (ingredients:Ingredients[])=>{
      this.ingredients=ingredients;
    }
        );

  }

  // onIngredientAdded(ingredient: Ingredients) {
  //   console.log("on Ingredientadded")
  //   this.ingredients.push(ingredient);
  // }

}
