import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes :Recipe[] =[
    new Recipe('ChickenBiryani','Non-Veg','https://cdn.pixabay.com/photo/2016/01/15/10/56/biryani-1141444_960_720.jpg'),
    
    new Recipe('Fish','Non-Veg','https://images.immediate.co.uk/production/volatile/sites/4/2009/07/GettyImages-931270318-43ab672.jpg?webp=true&quality=90&resize=940%2C399')
  ];

  constructor() { }

  ngOnInit(): void {
    console.log("loading recipe list component");
  }

}
