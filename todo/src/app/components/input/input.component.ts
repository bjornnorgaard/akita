import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TodoService} from '../../todo/state/todo.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public control = new FormControl('');

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
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
