//Declaracion de componentes
// view Components
import { AppComponent } from './viewComponents/appComponent/app.component';
import { TiendaComponent } from './viewComponents/tienda/tienda';
import { AnimalsComponent } from './viewComponents/animals/animals';
import { ContactComponent } from './viewComponents/contact/contact';
import { HomeComponent } from './viewComponents/home/home';
import { KeepersComponent } from './viewComponents/keepers/keepers';
import { RegisterComponent } from './viewComponents/register/register';
import { LoginComponent } from './viewComponents/login/login';
// view Components


//only components
import { ParquesComponent } from './components/parques/parques';
import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny';
//only components


const declarations=[
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent,
    SimpleTinyComponent,
    RegisterComponent,
    LoginComponent
]


export default declarations;
