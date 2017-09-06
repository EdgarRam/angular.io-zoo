//Decalración de modulos
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './routing/appRouting';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//importar nuevo modulo
import { ModuleEmailModule } from './modules/email/moduleemail.module';
import { AdminModule } from './modules/admin/admin.module';


const imports=[
    FormsModule,
    BrowserModule,
    routing,
    ModuleEmailModule,
    AdminModule,
    BrowserAnimationsModule
]


export default imports
