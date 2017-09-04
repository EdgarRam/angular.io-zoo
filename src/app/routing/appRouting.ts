import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



//Components
import { TiendaComponent } from '../components/tienda/tienda';
import { ParquesComponent } from '../components/parques/parques';

import { AnimalsComponent } from '../components/animals/animals';
import { ContactComponent } from '../components/contact/contact';
import { HomeComponent } from '../components/home/home';
import { KeepersComponent } from '../components/keepers/keepers';

const appRoutes: Routes  = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path:'home',
        component: HomeComponent,
    },
    {
        path:'animals',
        component: AnimalsComponent,
    },
    {
        path:'contact',
        component: ContactComponent,
    },
    {
        path:'keepers',
        component: KeepersComponent,
    },
    {
        path:'store',
        component: TiendaComponent,
    },
    {
        path:'**',
        component: HomeComponent
    }
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );
