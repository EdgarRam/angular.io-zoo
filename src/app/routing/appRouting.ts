import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



//view Components
import { TiendaComponent } from '../viewComponents/tienda/tienda';
import { AnimalsComponent } from '../viewComponents/animals/animals';
import { ContactComponent } from '../viewComponents/contact/contact';
import { HomeComponent } from '../viewComponents/home/home';
import { KeepersComponent } from '../viewComponents/keepers/keepers';

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
