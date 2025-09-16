import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CmsActions, ComponentActions } from '../../../store/cms/cms.actions';
import { BlockConfiguration, ComponentConfiguration, ImageComponentConfiguration, TextComponentConfiguration } from '../../models/component-configuration';
import { BehaviorSubject } from 'rxjs';
import { CmsService } from '../../services/cms-service';
import { TextComponent } from '../text-component/text-component';
import { ImageComponent } from '../image-component/image-component';

@Component({
  selector: 'lp-side-bar-component',
  standalone: false,
  templateUrl: './side-bar-component.html',
  styleUrl: './side-bar-component.scss'
})
export class SideBarComponent {

  selectedBlock$: BehaviorSubject<BlockConfiguration | null> = new BehaviorSubject<BlockConfiguration | null>(null);
  selectedComponent$: BehaviorSubject<ComponentConfiguration | null> = new BehaviorSubject<ComponentConfiguration | null>(null);
  builderMode: boolean = false;

  readonly buttons: {viewText: string, type: string}[] = [
    {viewText: 'Simple Text', type: 'TextComponent'},
    {viewText: 'Image', type: 'ImageComponent'},
  ];

  constructor(private store: Store, private cmsService: CmsService) {
    this.selectedBlock$ = this.cmsService.getSelectedBlock();
    this.selectedComponent$ = this.cmsService.getSelectedComponent();
    this.builderMode = this.cmsService.getBuildMode().getValue();
  }

  addComponent(type: string) {
    let component: ComponentConfiguration | undefined;
    
    switch (type) {
      case 'TextComponent':
        component = {type: type, uniqueId: `${type}-${Math.random()}`, data: 'New text'} as TextComponentConfiguration;
        break;
      case 'ImageComponent':
        component = {type: type, uniqueId: `${type}-${Math.random()}`, src: 'https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE=', altText: 'Placeholder Image', width: 100, height: 100} as ImageComponentConfiguration;
        break;
      default:
        console.warn(`Component type ${type} not supported`);
    }

    if(component) {
      this._addComponent(component);
    }
  }

  private _addComponent(component: ComponentConfiguration) {
    this.store.dispatch(ComponentActions.addComponent({component: component}));
  }

  updateBuilderMode() {
    this.builderMode = !this.builderMode;
    this.store.dispatch(CmsActions.updateBuilderMode({mode: this.builderMode}));
  }

}
