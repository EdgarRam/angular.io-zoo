// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AdminRoutingModule } from './admin-routing.module';


// Components
import { MainComponent } from './components/main/main';
import { AddComponent } from './components/add/add';
import { EditComponent } from './components/edit/edit';
import { ListComponent } from './components/list/list';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRoutingModule
    ],
    declarations:[
        AddComponent,
        EditComponent,
        ListComponent,
        MainComponent
    ],
    exports: [ MainComponent ]
})

export class AdminModule{}
