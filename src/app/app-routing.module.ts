import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPageComponent } from './todo/page/todo-page/todo-page.component';
import { PageRecettesComponent } from './recettes/page/page-recettes/page-recettes.component';
import { PageFilmsComponent} from './films/page/page-films/page-films.component'
import { Page404Component } from './404/page/page404/page404.component';
import { PageHumainComponent } from './humain/page/page-humain/page-humain.component';
import { GameComponent } from './game/page/game/game.component';

const routes: Routes = [
  { path: 'todo', component: TodoPageComponent },
  { path: 'recettes', component: PageRecettesComponent },
  { path: 'films', component: PageFilmsComponent},
  { path: 'humain', component: PageHumainComponent },
  { path: 'game', component: GameComponent },
  //Permet de définir une home page
  { path: '', component: TodoPageComponent },
  // Permet de définir la page 404
  { path: '**', pathMatch: 'full', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
