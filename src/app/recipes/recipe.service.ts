import { Recipe } from '../recipes/recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping.-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipeselected = new EventEmitter<Recipe>();

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('ChickenTandori', 'Non-Veg', 'https://www.onceuponachef.com/images/2015/01/Tandoori-Chicken-Drumsticks2-760x505.jpg', [
            new Ingredients('greek yogurt', 1),
            new Ingredients('Kasuri Methi', 1)
        ]),

        new Recipe('Bazeli Masli', 'Non-Veg', 'https://www.ruchikrandhap.com/wp-content/uploads/2015/02/BasicFishFry4-1-1024x695.jpg', [
            new Ingredients('Spice blend', 1),
            new Ingredients('Cream dory', 1)
        ]),

        new Recipe('Gopi Manchuria', 'Veg', 'https://images.herzindagi.info/image/2018/Jan/Chinese-food-veg-manchurian-artcile.jpg', [
            new Ingredients('savory', 1),
            new Ingredients('capsicum', 1)
        ]),

        new Recipe(' Grilled Paneer ', 'Veg', 'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2016/08/paneer-tikka-5a.jpg', [
            new Ingredients('chopped celery', 1),
            new Ingredients('lemon yogurt', 1)
        ])

    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addIngredientsToshoppingList(ingredients: Ingredients[]) {
        this.slService.addIngredients(ingredients);
    }

    AddRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    UpdateRecipe(index:number, newRecipe:Recipe){
        this.recipes[index] =newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());  
    }

}