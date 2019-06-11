import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: TodosComponent }
    ])
  ]
})
export class TodosModule { }
