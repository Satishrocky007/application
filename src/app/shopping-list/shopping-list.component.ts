import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../loging.service';
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

  constructor(private shoppingListService: ShoppingListService, private loggingService :LoggingService) { }

  ngOnInit(): void {
    console.log("loading shopping list component");
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
    this.loggingService.printLog('hello from Shopping-Listng-Component ng-Oninit');
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

}
