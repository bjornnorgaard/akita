import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgMaterialModule} from './ng-material/ng-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {TodoComponent} from './todo/todo.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {TodoListComponent} from './todo/todo-list/todo-list.component';
import {TodoItemComponent} from './todo/todo-item/todo-item.component';
import {InputComponent} from './todo/input/input.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';
import { CallbackComponent } from './user/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    UserComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
