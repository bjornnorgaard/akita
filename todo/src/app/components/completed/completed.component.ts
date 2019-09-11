import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../todo/state/todo.model';
import { TodoQuery } from '../../todo/state/todo.query';
import { map } from 'rxjs/operators';
import { TodoService } from '../../todo/state/todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  public todos$: Observable<Todo[]>;

  constructor(private query: TodoQuery, private service: TodoService) {
  }

  ngOnInit() {
    this.todos$ = this.query.selectAll().pipe(
      map(todos => todos.filter(t => t.completed === true))
    );
  }

  public uncomplete(todo: Todo): void {
    this.service.toggleCompleted(todo);
  }
}
