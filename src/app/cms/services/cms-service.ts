import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StaticBlockComponentConfiguration } from '../models/component-configuration';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  getContent(): Observable<StaticBlockComponentConfiguration> {
    return of(
      {
        type: 'StaticBlockComponent',
        components: [
          { type: 'TextComponent', data: 'Привет' },
          { type: 'TextComponent', data: 'Саша' }
        ]
      }
    );
  }

}
