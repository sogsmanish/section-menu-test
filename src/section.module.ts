import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';

import * as Component from './index';


@NgModule({
  imports: [
    CommonModule,
    SectionRoutingModule
  ],

  declarations: [
    Component.SectionBoardSetupComponent,
    Component.SectionBoardViewComponent,
    Component.SectionBoardCardViewComponent,
    Component.SectionBoardListViewComponent,
    Component.SectionComponent,
    Component.AddSectionBoardComponent],
    
    exports:[
      Component.SectionBoardSetupComponent,
      Component.SectionBoardViewComponent,
      Component.SectionBoardCardViewComponent,
      Component.SectionBoardListViewComponent,
      Component.SectionComponent,
      Component.AddSectionBoardComponent
    ]
})
export class SectionModule { }
