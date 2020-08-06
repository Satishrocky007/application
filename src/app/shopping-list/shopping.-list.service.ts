import { Ingredients} from '../shared/ingredient.model'

export class ShoppingListService{

    ingredients: Ingredients[] = [
        new Ingredients('Apple', 100),
        new Ingredients('Grapes', 100)
      ];

      getIngredients(){
          return this.getIngredients;
      }
    
}