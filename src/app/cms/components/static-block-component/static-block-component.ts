import { ChangeDetectionStrategy, Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { Observable, of, take, tap } from 'rxjs';
import { ComponentConfiguration, StaticBlockComponentConfiguration } from '../../models/component-configuration';
import { CmsService } from '../../services/cms-service';
import { TextComponent } from '../text-component/text-component';
import { ImageComponent } from '../image-component/image-component';

@Component({
  selector: 'lp-static-block-component',
  standalone: false,
  templateUrl: './static-block-component.html',
  styleUrl: './static-block-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaticBlockComponent{

  @Input() block: StaticBlockComponentConfiguration | undefined;

  constructor(private cmsService: CmsService, private injector: Injector) { }

  getComponent(component: ComponentConfiguration){
    switch (component.type) {
      case 'TextComponent':
        return TextComponent;
      case 'ImageComponent':
        return ImageComponent;
      default:
        return null;
    }
  }

  createInjector(config: ComponentConfiguration): Injector {
    console.log("called");
    return Injector.create({
      providers: [
        { provide: 'componentConfig', useValue: config }
      ],
      parent: this.injector
    });
  }

  selectSelf(): void {
    this.cmsService.selectBlock(this.block?.uniqueId || null);
  }

  selectComponent(component: ComponentConfiguration | undefined): void {
    this.cmsService.selectComponent(component);
  }

}
