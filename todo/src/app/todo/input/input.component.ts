import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TodoService} from '../state/todo.service';
import {TodoQuery} from '../state/todo.query';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  public control = new FormControl('');

  constructor(private todoService: TodoService, private query: TodoQuery) {
  }

  public newTodo(): void {
    if (!this.control.value) {
      return;
    }

    const value = this.control.value.trim();

    if (!value) {
      return;
    }

    this.todoService.add(value);
    this.control.reset();
  }
}
