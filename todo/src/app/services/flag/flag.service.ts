import {Injectable} from '@angular/core';
import bulletTrain from 'bullet-train-client';
import {environment} from '../../../environments/environment';
import {AuthService} from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class FlagService {

  constructor(private auth: AuthService) {
    bulletTrain.init({
      environmentID: environment.bulletId,
      onChange: (old, params) => {
        console.log('OnChange', old, params);
      }
    });
  }

  public isEnabled(key: string): boolean {
    return bulletTrain.hasFeature(key);
  }

}
