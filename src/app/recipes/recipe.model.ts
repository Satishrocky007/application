import { Ingredients } from '../shared/ingredient.model';

export class Recipe{
    public name:String;
    public description: String;
    public imagePath:String;
    public ingredients:Ingredients[];


    constructor(name:string, des: string, image:string, ingredients:Ingredients[]){
      this.name=name;
      this.description=des;
      this.imagePath=image;
      this.ingredients=ingredients;
    }
}