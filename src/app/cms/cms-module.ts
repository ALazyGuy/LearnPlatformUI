import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './components/text-component/text-component';
import { StaticBlockComponent } from './components/static-block-component/static-block-component';
import { SideBarComponent } from './components/side-bar-component/side-bar-component';



@NgModule({
  declarations: [
    TextComponent,
    StaticBlockComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextComponent,
    StaticBlockComponent,
    SideBarComponent
  ]
})
export class CmsModule { }
