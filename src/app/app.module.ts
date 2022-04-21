import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecettesModule } from './recettes/recettes.module';
import { TodoModule } from './todo/todo.module';
import { FilmsModule } from './films/films.module';
import { Page404Component } from './404/page/page404/page404.component';
import { HumainModule } from './humain/humain.module';
import { GameModule } from './game/game.module';


@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [BrowserModule, AppRoutingModule, TodoModule, RecettesModule, FilmsModule, HumainModule, GameModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}