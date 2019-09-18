import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserStore} from './user.store';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private userStore: UserStore,
              private http: HttpClient) {
  }

}
