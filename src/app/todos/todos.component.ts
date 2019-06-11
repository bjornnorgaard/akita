import { Component, OnInit } from '@angular/core';
import { TodosQuery } from './state/todos.query';
import { Observable } from 'rxjs';
import { Todo } from './state/todo.model';
import { TodosService } from './state/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos: Observable<Todo[]>;

  constructor(private todosQuery: TodosQuery, private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.get();
    this.todos = this.todosQuery.selectAll();
  }
}
