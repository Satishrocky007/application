import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.nodel';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients :Ingredients[] =[
    new Ingredients('Apple',100) ,
    new Ingredients('Grapes',100)
  ];

  description=[];
    
  constructor() { }

  ngOnInit(): void {
    console.log("loading shopping list component");
  }

}
