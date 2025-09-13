import { Component, OnInit } from '@angular/core';
import { StaticBlockComponent } from '../../../cms/components/static-block-component/static-block-component';
import { SideBarComponent } from '../../../cms/components/side-bar-component/side-bar-component';
import { BehaviorSubject } from 'rxjs';
import { StaticBlockComponentConfiguration, TextComponentConfiguration } from '../../../cms/models/component-configuration';
import { CmsService } from '../../../cms/services/cms-service';

@Component({
  selector: 'lp-builder-page',
  standalone: false,
  templateUrl: './builder-page.html',
  styleUrl: './builder-page.scss' 
})
export class BuilderPage implements OnInit{

  blocks$: BehaviorSubject<StaticBlockComponentConfiguration[]> = new BehaviorSubject<StaticBlockComponentConfiguration[]>([]);
  selectedBlock$: BehaviorSubject<StaticBlockComponentConfiguration | null> = new BehaviorSubject<StaticBlockComponentConfiguration | null>(null);

  constructor(private cmsService: CmsService) { }

  ngOnInit(): void {
    this.blocks$ = this.cmsService.getContent();
  }

  selectBlock(block: StaticBlockComponentConfiguration) {
    this.selectedBlock$.next(block);
  }

  addComponent(type: string, blockId: string) {
    const newBlocks = this.blocks$.value;
    newBlocks.find(b => b.uniqueId === blockId)?.components.push({type: type, uniqueId: `text-${Math.random()}`, data: 'New text'} as TextComponentConfiguration);
    this.blocks$.next(newBlocks);
    if (this.selectedBlock$.value) {
      this.selectedBlock$.next(newBlocks.find(b => b.uniqueId === this.selectedBlock$.value?.uniqueId) || null);
    }
  }
}
