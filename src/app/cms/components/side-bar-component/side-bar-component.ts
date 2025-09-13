import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StaticBlockComponentConfiguration } from '../../models/component-configuration';

@Component({
  selector: 'lp-side-bar-component',
  standalone: false,
  templateUrl: './side-bar-component.html',
  styleUrl: './side-bar-component.scss'
})
export class SideBarComponent {

  @Input() selectedBlock$: BehaviorSubject<StaticBlockComponentConfiguration|null> = new BehaviorSubject<StaticBlockComponentConfiguration|null>(null);
  @Output() addComponent: EventEmitter<{type: string, blockId: string}> = new EventEmitter<{type: string, blockId: string}>();

  readonly buttons: {viewText: string, type: string}[] = [
    {viewText: 'Simple Text', type: 'TextComponent'},
  ];

  _addComponent(type: string) {
    this.addComponent.emit({type: type, blockId: this.selectedBlock$.value?.uniqueId || ''});
  }

}
