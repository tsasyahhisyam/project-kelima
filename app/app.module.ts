import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { RecipeDetailComponent } from "../app/recipe/recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "../app/recipe/recipe-detail/recipe-list/recipe-list.component";
import { RecipeStartComponent } from "../app/recipe/recipe-detail/recipe-list/recipe-item/recipe-start/recipe-start.component";
import { RecipeItemComponent } from "../app/recipe/recipe-detail/recipe-list/recipe-item/recipe-item.component";
import { RecipeEditComponent } from "./recipe/recipe-detail/recipe-list/recipe-item/recipe-start/recipe-edit/recipe-edit.component";
import { ShoppingEditComponent } from "../app/shopping-list/shopping-edit/shopping-edit.component";
import { DropdownDirective } from '../app/shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
