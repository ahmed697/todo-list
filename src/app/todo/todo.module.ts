import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './page/todo-page/todo-page.component';
// Importation du module outil pour les formulaires
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoPageComponent],
  imports: [
    CommonModule,
    // Module qui permet de lié une variable à un champ texte et autres actions
    FormsModule,
  ],
})
export class TodoModule {}