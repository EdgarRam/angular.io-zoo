import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './routing/appRouting';

//importar nuevo modulo
import { ModuleEmailModule } from './modules/email/moduleemail.module';


const imports=[
    FormsModule,
    BrowserModule,
    routing,
    ModuleEmailModule
]


export default imports
