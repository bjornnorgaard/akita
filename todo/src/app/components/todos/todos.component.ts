import { Component, OnInit } from '@angular/core';
import { TodoQuery } from '../../todo/state/todo.query';
import { Observable } from 'rxjs';
import { Todo } from '../../todo/state/todo.model';
import { map } from 'rxjs/operators';
import { TodoService } from '../../todo/state/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private todos$: Observable<Todo[]>;

  constructor(private query: TodoQuery, private service: TodoService) {
  }

  ngOnInit() {
    this.todos$ = this.query.selectAll().pipe(
      map(todos => todos.filter(t => t.completed === false))
    );
  }

  public completed(todo: Todo): void {
    this.service.toggleCompleted(todo);
  }

}
