import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  // Les données par défaut de la todolist sont celle du service
  // Ce sont les données stockées dans le navigateur
  todos: Todo[] = this.todoService.restorer()

  // Le contenu du formulaire pour ajouter une Todo
  currentTodo: string = '';

  // Rajoute une todo à notre list
  addTodo(content: string): void {
    this.todos.push({ content: content });
    let textinput = <HTMLInputElement>document.querySelector('input[type=text]')
    textinput.value = "";
  }

  // Retire une todo dans la todolist
  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  // Sauvegarde les données dans le store
  sauvegarder(): void {
    this.todoService.sauvegarder(this.todos);
  }

  // Rajouter ces arguments au contructeur va faire en sorte que Angular injecte le service dans ce composant
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
}