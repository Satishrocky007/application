import { Recipe } from '../recipes/recipe.model'
import { EventEmitter } from '@angular/core';
export class RecipeService {

    recipeselected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('ChickenBiryani', 'Non-Veg', 'https://cdn.pixabay.com/photo/2016/01/15/10/56/biryani-1141444_960_720.jpg'),

        new Recipe('Fish', 'Non-Veg', 'https://images.immediate.co.uk/production/volatile/sites/4/2009/07/GettyImages-931270318-43ab672.jpg?webp=true&quality=90&resize=940%2C399')
    ];

    getRecipe() {
        return this.recipes.slice();
    }

}