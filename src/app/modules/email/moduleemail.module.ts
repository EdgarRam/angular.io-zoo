//Importar modulos necesarios para crear modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { SaveEmailComponent } from './components/save-email';
import { ShowEmailComponent } from './components/show-email';
import { MainEmailComponent } from './components/main-email';


// Generar nuevo modulo
// Decorador ngModule para cargar los componentes y la configuraciónde los modulos

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations:[
        SaveEmailComponent,
        ShowEmailComponent,
        MainEmailComponent
    ],
    exports: [ MainEmailComponent ]
})

export class ModuleEmailModule{

}
