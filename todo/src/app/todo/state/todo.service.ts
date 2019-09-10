import {Injectable} from '@angular/core';
import {ID} from '@datorama/akita';
import {TodoStore} from './todo.store';
import {createTodo, Todo} from './todo.model';
import {TodoQuery} from './todo.query';

@Injectable({providedIn: 'root'})
export class TodoService {

  constructor(private todoStore: TodoStore, private todoQuery: TodoQuery) {
  }

  public get(): void {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (!todos) {
      return;
    }

    this.todoStore.set(todos);
  }

  public add(desc: string): void {
    const todo = createTodo(desc);
    this.todoStore.add(todo);
  }

  public toggleCompleted(id: ID): void {

  }

  public remove(id: ID): void {
    this.todoStore.remove(id);
  }

  public save(): void {
    const todos = this.todoQuery.getAll();
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

