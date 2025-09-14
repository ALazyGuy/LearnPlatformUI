import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlockActions, ComponentActions } from './store/cms/cms.actions';
import { StaticBlockComponentConfiguration, TextComponentConfiguration } from './cms/models/component-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected title = 'learn-platform-ui';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(BlockActions.addBlock({block: {type: 'StaticBlockComponent', uniqueId: 'block-1', order: 1, components: []} as StaticBlockComponentConfiguration}));
    this.store.dispatch(ComponentActions.addComponentToBlock({component: { type: 'TextComponent', data: 'Привет', uniqueId: 'text-1', order: 1 } as TextComponentConfiguration, blockId: 'block-1'}));
    this.store.dispatch(ComponentActions.addComponentToBlock({component: { type: 'TextComponent', data: 'Саша', uniqueId: 'text-2', order: 2 } as TextComponentConfiguration, blockId: 'block-1'}));
  }

}
