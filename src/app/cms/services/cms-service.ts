import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BlockConfiguration, ComponentConfiguration } from '../models/component-configuration';
import { Store } from '@ngrx/store';
import { selectBlocks, selectBuildMode, selectSelectedBlock, selectSelectedComponent } from '../../store/cms/cms.selectors';
import { BlockActions, ComponentActions } from '../../store/cms/cms.actions';

@Injectable({
  providedIn: 'root'
})
export class CmsService{

  blocks$: BehaviorSubject<BlockConfiguration[]> = new BehaviorSubject<BlockConfiguration[]>([]);
  selectedBlock$: BehaviorSubject<BlockConfiguration | null> = new BehaviorSubject<BlockConfiguration | null>(null);
  selectedComponent$: BehaviorSubject<ComponentConfiguration | null> = new BehaviorSubject<ComponentConfiguration | null>(null);
  builderMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private store: Store) {
    this.store.select(selectBlocks).subscribe(blocks => this.blocks$.next(blocks));
    this.store.select(selectSelectedBlock).subscribe(block => this.selectedBlock$.next(block));
    this.store.select(selectSelectedComponent).subscribe(component => this.selectedComponent$.next(component));
    this.store.select(selectBuildMode).subscribe(mode => this.builderMode$.next(mode));
  }

  getBlocks(): BehaviorSubject<BlockConfiguration[]> {
     return this.blocks$;
  }

  getSelectedBlock(): BehaviorSubject<BlockConfiguration | null> {
    return this.selectedBlock$;
  }

  getSelectedComponent(): BehaviorSubject<ComponentConfiguration | null> {
    return this.selectedComponent$;
  }

  selectBlock(blockId: string | null) {
    if(!blockId) {
      return;
    }
    this.store.dispatch(BlockActions.selectBlock({blockId: blockId}))
  }

  selectComponent(component: ComponentConfiguration | undefined) {
    if(!component) {
      return;
    }
    this.store.dispatch(ComponentActions.selectComponent({component: component}))
  }

  getBuildMode(): BehaviorSubject<boolean> {
    return this.builderMode$;
  }

}
