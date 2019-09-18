import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from '../state/todo.model';
import {TodoQuery} from '../state/todo.query';
import {TodoService} from '../state/todo.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() showCompleted: boolean;

  public todos$: Observable<Todo[]>;

  constructor(private query: TodoQuery, private service: TodoService) {
  }

  ngOnInit() {
    this.todos$ = this.query.selectAll().pipe(
      map(todos => {
        return todos.filter(t => t.completed === this.showCompleted);
      })
    );
  }

  public completed(todo: Todo): void {
    this.service.toggleCompleted(todo);
  }


}
