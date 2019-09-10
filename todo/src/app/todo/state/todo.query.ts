import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodoStore, TodoState } from './todo.store';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoQuery extends QueryEntity<TodoState, Todo> {

  constructor(protected store: TodoStore) {
    super(store);
  }

}
