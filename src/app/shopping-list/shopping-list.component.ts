import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.nodel';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients :Ingredients[] =[
    new Ingredients('TamatoReceipe',180) ,
    new Ingredients('MuttonBiryani',250)
  ];

  description=[];
    
  constructor() { }

  ngOnInit(): void {
  }

}
