import { Recipe } from '../recipes/recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping.-list.service';

@Injectable()
export class RecipeService {

    recipeselected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('ChickenBiryani', 'Non-Veg', 'https://cdn.pixabay.com/photo/2016/01/15/10/56/biryani-1141444_960_720.jpg',[
            new Ingredients('Additional Chicken',1),
            new Ingredients('Spice',2)
        ]),

        new Recipe('Fish', 'Non-Veg', 'https://images.immediate.co.uk/production/volatile/sites/4/2009/07/GettyImages-931270318-43ab672.jpg?webp=true&quality=90&resize=940%2C399',[
            new Ingredients('Layer Fish',1),
            new Ingredients('Spice',2)
        ])
    ];

    constructor(private slService:ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes.slice()[index];
    }

    addIngredientsToshoppingList(ingredients:Ingredients[]){
        this.slService.addIngredients(ingredients);

    }

}