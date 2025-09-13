import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { StaticBlockComponentConfiguration, TextComponentConfiguration } from '../models/component-configuration';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  getContent(): BehaviorSubject<StaticBlockComponentConfiguration[]> {
    return new BehaviorSubject<StaticBlockComponentConfiguration[]>(
      [
        {
          type: 'StaticBlockComponent',
          uniqueId: 'block-1',
          components: [
            { type: 'TextComponent', data: 'Привет', uniqueId: 'text-1' } as TextComponentConfiguration,
            { type: 'TextComponent', data: 'Саша', uniqueId: 'text-2' } as TextComponentConfiguration
          ]
        }
      ]
    );
  }

}
