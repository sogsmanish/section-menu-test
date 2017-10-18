import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as Component from './index';
var sectionRoutes = [
    // { path: '', redirectTo: '/people/view/card-view', pathMatch: 'full' },
    { path: '', redirectTo: '/section/add', pathMatch: 'full' },
    {
        path: 'section', component: Component.SectionComponent,
        children: [
            {
                path: 'add', component: Component.AddSectionBoardComponent
            },
            {
                path: 'board-setup', component: Component.SectionBoardSetupComponent
            },
            {
                path: 'view', component: Component.SectionBoardViewComponent,
                children: [
                    { path: 'card-view', component: Component.SectionBoardCardViewComponent },
                    { path: 'list-view', component: Component.SectionBoardListViewComponent }
                ]
            },
        ]
    }
];
var SectionRoutingModule = (function () {
    function SectionRoutingModule() {
    }
    return SectionRoutingModule;
}());
export { SectionRoutingModule };
SectionRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(sectionRoutes)],
                exports: [RouterModule]
            },] },
];
/** @nocollapse */
SectionRoutingModule.ctorParameters = function () { return []; };
//# sourceMappingURL=section-routing.module.js.map