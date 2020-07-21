export class Recipe{
    public name:String;
    public description: String;
    public imagePath:String;


    constructor(name:string, des: string, image:string){
      this.name=name;
      this.description=des;
      this.imagePath=image;

    }
}