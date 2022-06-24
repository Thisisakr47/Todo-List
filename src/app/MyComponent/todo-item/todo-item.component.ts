import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Input() pos!: number;
  @Output() delete_todo: EventEmitter<Todo> = new EventEmitter();
  @Output() toggle_todo: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  OnClick(todo: Todo){
    this.delete_todo.emit(todo);
  }

  OnCompletion(todo: Todo){
    this.toggle_todo.emit(todo);
  }
}
