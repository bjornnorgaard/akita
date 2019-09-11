import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo/state/todo.service';
import {TodoQuery} from './todo/state/todo.query';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private loading$: Observable<boolean>;

  constructor(private service: TodoService, private query: TodoQuery) {
  }

  public goToSource(): void {
    window.location.href = 'https://github.com/bjornnorgaard/akita/tree/master/todo';
  }

  public ngOnInit(): void {
    this.service.load();
    this.loading$ = this.query.selectLoading();
  }

}
