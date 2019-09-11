import {Injectable} from '@angular/core';
import {TodoStore} from './todo.store';
import {createTodo, Todo} from './todo.model';
import {TodoQuery} from './todo.query';

@Injectable({providedIn: 'root'})
export class TodoService {

  constructor(private todoStore: TodoStore, private todoQuery: TodoQuery) {
  }

  private timeout = 300;

  public load(): void {
    this.todoStore.setLoading(true);
    const json = localStorage.getItem('todos');
    const todos = JSON.parse(json) as Todo[];
    this.todoStore.set(todos);
    this.todoStore.setLoading(false);
  }

  public add(desc: string): void {
    this.todoStore.setLoading(true);
    setTimeout(() => {
      const todo = createTodo(desc);
      this.todoStore.add(todo);
      this.save();
      this.todoStore.setLoading(false);
    }, this.timeout);
  }

  public toggleCompleted(todo: Todo): void {
    this.todoStore.setLoading(true);
    setTimeout(() => {
      const updated = {...todo};
      updated.completed = !updated.completed;
      this.todoStore.replace(updated.id, updated);
      this.save();
      this.todoStore.setLoading(false);
    }, this.timeout);
  }

  public remove(todo: Todo): void {
    this.todoStore.setLoading(true);
    setTimeout(() => {
      this.todoStore.remove(todo.id);
      this.save();
      this.todoStore.setLoading(false);
    }, this.timeout);
  }

  public setActive(todo: Todo): void {
    this.todoStore.setActive(todo.id);
  }

  public clearActive(): void {
    this.todoStore.setActive(null);
  }

  private save(): void {
    const todos = this.todoQuery.getAll();
    localStorage.setItem('todos', JSON.stringify(todos));
  }

}
