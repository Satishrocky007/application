import { Ingredients } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredients[]>();
    startedEditing = new Subject<number>()
    private ingredients: Ingredients[] = [
        new Ingredients('Apple', 100),
        new Ingredients('Grapes', 100)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredients[]) {
         this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    updateIngredient(index:number, newingredient:Ingredients){
        this.ingredients[index]= newingredient;
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}