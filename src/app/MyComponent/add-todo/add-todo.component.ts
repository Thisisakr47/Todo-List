import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  
  title!: string;
  description!: string;

  @Output() add_todo: EventEmitter<Todo> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(){
    const todo = {
      id: 1,
      title: this.title,
      body: this.description,
      active: true
    }

    this.add_todo.emit(todo);
  }

}
