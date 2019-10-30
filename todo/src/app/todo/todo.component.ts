import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from './state/todo.service';
import { TodoQuery } from './state/todo.query';
import { FlagService } from '../services/flag/flag.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public loading$: Observable<boolean>;
  public goToSourceClicked = false;

  constructor(private service: TodoService, private query: TodoQuery, public flags: FlagService) {
  }

  public goToSource(): void {
    this.goToSourceClicked = true;
    window.location.href = 'https://github.com/bjornnorgaard/akita/tree/master/todo';
  }

  public ngOnInit(): void {
    this.service.load();
    this.loading$ = this.query.selectLoading();
  }
}
