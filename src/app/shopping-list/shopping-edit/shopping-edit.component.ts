import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping.-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') slform: NgForm;
  subcription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editItem: Ingredients;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subcription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.slform.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        })
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    }
    else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onDestroy() {
    this.subcription.unsubscribe;
  }

  onClear(){
    this.slform.reset();
    this.editMode=false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}
