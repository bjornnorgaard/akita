import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoService } from '../state/todo.service';
import { FlagService } from 'src/app/services/flag/flag.service';
import { TodoQuery } from '../state/todo.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public control = new FormControl('');
  public loading$: Observable<boolean>;

  constructor(private todoService: TodoService, private query: TodoQuery, public flag: FlagService) {
  }

  ngOnInit(): void {
    this.loading$ = this.query.selectLoading();
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
