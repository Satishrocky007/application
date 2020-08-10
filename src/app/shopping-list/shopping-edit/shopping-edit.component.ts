import { Component, ElementRef,  OnInit,  ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping.-list.service';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
 // @Output() ingredientAdded = new EventEmitter<Ingredients>();

  constructor(private shoppingListService:ShoppingListService ) { }

  ngOnInit(): void {
  }

  onAddItem() {
    console.log("on Add item started");
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(ingName, ingAmount);
    // console.log("befor emit")
    // this.ingredientAdded.emit(newIngredient);
    // console.log("After emit")
    this.shoppingListService.addIngredient(newIngredient);
         }
}
