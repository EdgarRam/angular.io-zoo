import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './routing/appRouting';

//Components
import { AppComponent } from './app.component';

import { TiendaComponent } from './components/tienda/tienda';
import { ParquesComponent } from './components/parques/parques';

import { AnimalsComponent } from './components/animals/animals';
import { ContactComponent } from './components/contact/contact';
import { HomeComponent } from './components/home/home';
import { KeepersComponent } from './components/keepers/keepers';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
