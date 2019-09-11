import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../todo/state/todo.model';
import {TodoService} from '../../todo/state/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() todo: Todo;
  @Output() checked: EventEmitter<void> = new EventEmitter();

  constructor(private service: TodoService) {
  }


  public changed(): void {
    this.checked.emit();
  }

  public delete(): void {
    this.service.remove(this.todo);
  }
}
