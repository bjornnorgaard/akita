import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {NotFoundComponent} from './routing/not-found/not-found.component';
import {LoginComponent} from './user/login/login.component';
import {LogoutComponent} from './user/logout/logout.component';
import {CallbackComponent} from './user/callback/callback.component';
import {UserComponent} from './user/user.component';


const routes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: '', redirectTo: 'todo', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'user', component: UserComponent},
  {path: 'callback', component: CallbackComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
