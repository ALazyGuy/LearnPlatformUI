import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { Observable, of, take, tap } from 'rxjs';
import { ComponentConfiguration, StaticBlockComponentConfiguration } from '../../models/component-configuration';
import { CmsService } from '../../services/cms-service';
import { TextComponent } from '../text-component/text-component';

@Component({
  selector: 'lp-static-block-component',
  standalone: false,
  templateUrl: './static-block-component.html',
  styleUrl: './static-block-component.scss'
})
export class StaticBlockComponent{

  @Output() selectBlock: EventEmitter<StaticBlockComponentConfiguration> = new EventEmitter<StaticBlockComponentConfiguration>();
  @Input() block: StaticBlockComponentConfiguration | undefined;

  constructor(private cmsService: CmsService, private injector: Injector) { }

  getComponent(component: ComponentConfiguration){
    switch (component.type) {
      case 'TextComponent':
        return TextComponent;
      default:
        return null;
    }
  }

  createInjector(config: ComponentConfiguration): Injector {
    return Injector.create({
      providers: [
        { provide: 'componentConfig', useValue: config }
      ],
      parent: this.injector
    });
  }

  selectSelf(): void {
    this.selectBlock.emit(this.block);
  }

}
