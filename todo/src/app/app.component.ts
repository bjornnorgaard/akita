import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo/state/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private service: TodoService) {
  }


  public goToSource(): void {
    window.location.href = 'https://github.com/bjornnorgaard/akita/tree/master/todo';
  }

  public ngOnInit(): void {
    this.service.load();
  }

}
