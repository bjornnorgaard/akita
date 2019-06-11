import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { TodosStore } from './todos.store';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodosService {

  private api = 'https://jsonplaceholder.typicode.com';

  constructor(private todosStore: TodosStore,
              private http: HttpClient) {
  }

  get() {
    this.http.get<Todo[]>(`${this.api}/todos`)
    .subscribe(res => this.todosStore.set(res));
  }

  add(todo: Todo) {
    this.todosStore.add(todo);
  }

  update(id, todo: Partial<Todo>) {
    this.todosStore.update(id, todo);
  }

  remove(id: ID) {
    this.todosStore.remove(id);
  }
}
