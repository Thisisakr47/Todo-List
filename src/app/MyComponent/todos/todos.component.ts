import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];
  loadtodos!: string;
  constructor() {
    this.loadtodos = localStorage.getItem("todos")!;
    // this.loadtodos = JSON.parse(localStorage.getItem("todos")!)

    if (this.loadtodos == null) {
      this.todos = []
    }
    else {
      this.todos = JSON.parse(this.loadtodos)
    }
  }

  ngOnInit(): void {
  }

  deletetodo(todo: Todo) {
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addtodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggletodo(todo: Todo) {
    var index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
