import {Injectable} from '@angular/core';
import {TodoStore} from './todo.store';
import {createTodo, Todo} from './todo.model';
import {TodoQuery} from './todo.query';

@Injectable({providedIn: 'root'})
export class TodoService {

  constructor(private todoStore: TodoStore, private todoQuery: TodoQuery) {
  }

  public load(): void {
    const json = localStorage.getItem('todos');
    const todos = JSON.parse(json) as Todo[];
    this.todoStore.set(todos);
  }

  public add(desc: string): void {
    const todo = createTodo(desc);
    this.todoStore.add(todo);
    this.save();
  }

  public toggleCompleted(todo: Todo): void {
    const updated = {...todo};
    updated.completed = !updated.completed;
    this.todoStore.replace(updated.id, updated);
    this.save();
  }

  public remove(todo: Todo): void {
    this.todoStore.remove(todo.id);
    this.save();
  }

  private save(): void {
    const todos = this.todoQuery.getAll();
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
