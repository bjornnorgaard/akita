import {Injectable} from '@angular/core';
import bulletTrain from 'bullet-train-client';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class FlagService {

  constructor() {
    bulletTrain.init({
      environmentID: environment.bulletId,
      onChange: () => console.log('OnChange')
    });
  }

  public isEnabled(key: string): boolean {
    return bulletTrain.hasFeature(key);
  }

}




