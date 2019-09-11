import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo/state/todo.service';
import {TodoQuery} from './todo/state/todo.query';
import {Observable} from 'rxjs';
import {FlagService} from './services/flag/flag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loading$: Observable<boolean>;

  constructor(private service: TodoService, private query: TodoQuery, public flags: FlagService) {
  }

  public goToSource(): void {
    window.location.href = 'https://github.com/bjornnorgaard/akita/tree/master/todo';
  }

  public ngOnInit(): void {
    this.service.load();
    this.loading$ = this.query.selectLoading();
  }

}
