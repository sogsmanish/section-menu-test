(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
    (factory((global.section = global.section || {}),global.ng.core,global._angular_common,global._angular_router));
}(this, (function (exports,_angular_core,_angular_common,_angular_router) { 'use strict';

var SectionComponent = (function () {
    function SectionComponent() {
    }
    SectionComponent.prototype.ngOnInit = function () {
    };
    return SectionComponent;
}());
SectionComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'app-section',
                templateUrl: './section.component.html',
                styleUrls: ['./section.component.css']
            },] },
];
/** @nocollapse */
SectionComponent.ctorParameters = function () { return []; };

var AddSectionBoardComponent = (function () {
    function AddSectionBoardComponent() {
    }
    AddSectionBoardComponent.prototype.ngOnInit = function () {
    };
    return AddSectionBoardComponent;
}());
AddSectionBoardComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'app-add-section-board',
                templateUrl: './add-section-board.component.html',
                styleUrls: ['./add-section-board.component.css']
            },] },
];
/** @nocollapse */
AddSectionBoardComponent.ctorParameters = function () { return []; };

var SectionBoardSetupComponent = (function () {
    function SectionBoardSetupComponent() {
    }
    SectionBoardSetupComponent.prototype.ngOnInit = function () {
    };
    return SectionBoardSetupComponent;
}());
SectionBoardSetupComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'app-section-board-setup',
                templateUrl: './section-board-setup.component.html',
                styleUrls: ['./section-board-setup.component.css']
            },] },
];
/** @nocollapse */
SectionBoardSetupComponent.ctorParameters = function () { return []; };

var SectionBoardViewComponent = (function () {
    function SectionBoardViewComponent() {
    }
    SectionBoardViewComponent.prototype.ngOnInit = function () {
    };
    return SectionBoardViewComponent;
}());
SectionBoardViewComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'app-section-board-view',
                templateUrl: './section-board-view.component.html',
                styleUrls: ['./section-board-view.component.css']
            },] },
];
/** @nocollapse */
SectionBoardViewComponent.ctorParameters = function () { return []; };

var SectionBoardCardViewComponent = (function () {
    function SectionBoardCardViewComponent() {
    }
    SectionBoardCardViewComponent.prototype.ngOnInit = function () {
    };
    return SectionBoardCardViewComponent;
}());
SectionBoardCardViewComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'app-section-board-card-view',
                templateUrl: './section-board-card-view.component.html',
                styleUrls: ['./section-board-card-view.component.css']
            },] },
];
/** @nocollapse */
SectionBoardCardViewComponent.ctorParameters = function () { return []; };

var SectionBoardListViewComponent = (function () {
    function SectionBoardListViewComponent() {
    }
    SectionBoardListViewComponent.prototype.ngOnInit = function () {
    };
    return SectionBoardListViewComponent;
}());
SectionBoardListViewComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'app-section-board-list-view',
                templateUrl: './section-board-list-view.component.html',
                styleUrls: ['./section-board-list-view.component.css']
            },] },
];
/** @nocollapse */
SectionBoardListViewComponent.ctorParameters = function () { return []; };

var sectionRoutes = [
    // { path: '', redirectTo: '/people/view/card-view', pathMatch: 'full' },
    { path: '', redirectTo: '/section/add', pathMatch: 'full' },
    {
        path: 'section', component: SectionComponent,
        children: [
            {
                path: 'add', component: AddSectionBoardComponent
            },
            {
                path: 'board-setup', component: SectionBoardSetupComponent
            },
            {
                path: 'view', component: SectionBoardViewComponent,
                children: [
                    { path: 'card-view', component: SectionBoardCardViewComponent },
                    { path: 'list-view', component: SectionBoardListViewComponent }
                ]
            },
        ]
    }
];
var SectionRoutingModule$$1 = (function () {
    function SectionRoutingModule$$1() {
    }
    return SectionRoutingModule$$1;
}());
SectionRoutingModule$$1.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_router.RouterModule.forChild(sectionRoutes)],
                exports: [_angular_router.RouterModule]
            },] },
];
/** @nocollapse */
SectionRoutingModule$$1.ctorParameters = function () { return []; };

var SectionModule$$1 = (function () {
    function SectionModule$$1() {
    }
    return SectionModule$$1;
}());
SectionModule$$1.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule,
                    SectionRoutingModule$$1
                ],
                declarations: [
                    SectionBoardSetupComponent,
                    SectionBoardViewComponent,
                    SectionBoardCardViewComponent,
                    SectionBoardListViewComponent,
                    SectionComponent,
                    AddSectionBoardComponent
                ],
                exports: [
                    SectionBoardSetupComponent,
                    SectionBoardViewComponent,
                    SectionBoardCardViewComponent,
                    SectionBoardListViewComponent,
                    SectionComponent,
                    AddSectionBoardComponent
                ]
            },] },
];
/** @nocollapse */
SectionModule$$1.ctorParameters = function () { return []; };

exports.SectionComponent = SectionComponent;
exports.AddSectionBoardComponent = AddSectionBoardComponent;
exports.SectionBoardSetupComponent = SectionBoardSetupComponent;
exports.SectionBoardViewComponent = SectionBoardViewComponent;
exports.SectionBoardCardViewComponent = SectionBoardCardViewComponent;
exports.SectionBoardListViewComponent = SectionBoardListViewComponent;
exports.SectionModule = SectionModule$$1;
exports.SectionRoutingModule = SectionRoutingModule$$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
