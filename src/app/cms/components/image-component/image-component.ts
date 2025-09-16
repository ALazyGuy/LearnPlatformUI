import { Component, Inject, Input } from '@angular/core';
import { ComponentConfiguration, ImageComponentConfiguration } from '../../models/component-configuration';

@Component({
  selector: 'lp-image-component',
  standalone: false,
  templateUrl: './image-component.html',
  styleUrl: './image-component.scss'
})
export class ImageComponent {

  @Input() config: ImageComponentConfiguration | undefined;

  constructor(@Inject('componentConfig') config: ComponentConfiguration) {
    if(!this.config) {
      this.config = config as ImageComponentConfiguration;
    }
  }

}
