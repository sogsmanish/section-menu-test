import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionRoutingModule } from './section-routing.module';
import * as Component from './index';
var SectionModule = (function () {
    function SectionModule() {
    }
    return SectionModule;
}());
export { SectionModule };
SectionModule.decorators = [
    { type: NgModule, args: [{
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
                    Component.AddSectionBoardComponent
                ],
                exports: [
                    Component.SectionBoardSetupComponent,
                    Component.SectionBoardViewComponent,
                    Component.SectionBoardCardViewComponent,
                    Component.SectionBoardListViewComponent,
                    Component.SectionComponent,
                    Component.AddSectionBoardComponent
                ]
            },] },
];
/** @nocollapse */
SectionModule.ctorParameters = function () { return []; };
//# sourceMappingURL=section.module.js.map