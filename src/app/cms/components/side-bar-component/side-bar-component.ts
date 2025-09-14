import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ComponentActions } from '../../../store/cms/cms.actions';
import { BlockConfiguration, ComponentConfiguration, TextComponentConfiguration } from '../../models/component-configuration';
import { BehaviorSubject } from 'rxjs';
import { CmsService } from '../../services/cms-service';

@Component({
  selector: 'lp-side-bar-component',
  standalone: false,
  templateUrl: './side-bar-component.html',
  styleUrl: './side-bar-component.scss'
})
export class SideBarComponent {

  selectedBlock$: BehaviorSubject<BlockConfiguration | null> = new BehaviorSubject<BlockConfiguration | null>(null);
  selectedComponent$: BehaviorSubject<ComponentConfiguration | null> = new BehaviorSubject<ComponentConfiguration | null>(null);

  readonly buttons: {viewText: string, type: string}[] = [
    {viewText: 'Simple Text', type: 'TextComponent'},
  ];

  constructor(private store: Store, private cmsService: CmsService) {
    this.selectedBlock$ = this.cmsService.getSelectedBlock();
    this.selectedComponent$ = this.cmsService.getSelectedComponent();
  }

  addComponent(type: string) {
    this.store.dispatch(ComponentActions.addComponent({component: {type: type, uniqueId: `text-${Math.random()}`, data: 'New text'} as TextComponentConfiguration}));
  }

}
