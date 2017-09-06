import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components

import { MainComponent } from './components/main/main';
import { AddComponent } from './components/add/add';
import { EditComponent } from './components/edit/edit';
import { ListComponent } from './components/list/list';



const adminRoutes: Routes =[
    {
        path: 'admin-panel',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'create',
                component: AddComponent
            },
            {
                path: 'list',
                component: ListComponent
            },
            {
                path: 'edit',
                component: EditComponent
            }
        ]
    }
]


@NgModule({
    imports: [
        RouterModule.forChild( adminRoutes )
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule{}
