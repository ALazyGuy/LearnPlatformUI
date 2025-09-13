import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './components/text-component/text-component';
import { StaticBlockComponent } from './components/static-block-component/static-block-component';



@NgModule({
  declarations: [
    TextComponent,
    StaticBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextComponent,
    StaticBlockComponent
  ]
})
export class CmsModule { }
