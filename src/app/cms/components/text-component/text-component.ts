import { Component, Inject, Input } from '@angular/core';
import { ComponentConfiguration, TextComponentConfiguration } from '../../models/component-configuration';

@Component({
  selector: 'lp-text-component',
  standalone: false,
  templateUrl: './text-component.html',
  styleUrl: './text-component.scss'
})
export class TextComponent {

  @Input() config: ComponentConfiguration | undefined;

  constructor(@Inject('componentConfig') config: ComponentConfiguration) {
    if(!this.config) {
      this.config = config;
    }
  }

  getData(): string {
    if(this.config && this.config.type === 'TextComponent') {
      return (this.config as TextComponentConfiguration).data;
    }
  
    return 'EMPTY';
  }
}
