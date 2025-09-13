import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing-module';
import { BuilderPage } from './pages/builder-page/builder-page';
import { CmsModule } from '../cms/cms-module';


@NgModule({
  declarations: [
    BuilderPage
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    CmsModule
  ]
})
export class CoursesModule { }
