import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
    providedIn: 'root'
})
@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    //property:class recipe
    private recipes:Recipe[]=[
        new Recipe('Burger',
        'A hamburger with a rim of lettuce sitting on a black plate against a black background',
        '../src/app/img/18.jpg',
        [
            new Ingredient('meal',1),
            new Ingredient('tomato',2)
            
        ]),
        new Recipe('Special Friend Rice',
        'Fried rice is a dish of cooked rice that has been stir-fried in a wok or a friying pan and is usually mixed with other ingredients such a eggs,vegetable,meat',
        '../src/app/img/nasi-goreng-pattaya.jpg',
        [
            new Ingredient('rice',1),
            new Ingredient('meal',3),
            new Ingredient('egg',1)
        ]),
    ];

    getRecipes(){
        return this.recipes.slice();
    }

addIngredientsShoppingList(ingredients:Ingredient[]){
    this.slsService.addIngredients(ingredients);
}
getRecipe(index:number){
    return this.recipes [index];
}
constructor(private slsService:ShoppingListService) { }

}