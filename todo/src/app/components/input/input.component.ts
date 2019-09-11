import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TodoService} from '../../todo/state/todo.service';
import {TodoQuery} from '../../todo/state/todo.query';
import {map} from 'rxjs/operators';
import {Todo} from '../../todo/state/todo.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public control = new FormControl('');

  constructor(private todoService: TodoService, private query: TodoQuery) {
  }

  ngOnInit() {
    // this.query.selectActive().subscribe(active => {
    //   if (!active) {
    //     return;
    //   }
    //
    //   this.control.setValue(active.description);
    // });
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
