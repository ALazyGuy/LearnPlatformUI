import { Component, OnInit } from '@angular/core';
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

  constructor(private cmsService: CmsService) { }

  ngOnInit(): void {
    this.blocks$ = this.cmsService.getBlocks();
  }
}
