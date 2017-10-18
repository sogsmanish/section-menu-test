import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import * as Component from './index';

const sectionRoutes: Routes = [

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

@NgModule({
    imports: [RouterModule.forChild(sectionRoutes)],
    exports: [RouterModule]
})

export class SectionRoutingModule { }
