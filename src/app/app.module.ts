
import { NgModule } from '@angular/core';
import { appRoutingProviders } from './routing/appRouting';

//Components
import { AppComponent } from './viewComponents/appComponent/app.component';

import declarations from './declarations';
import imports from './imports';


@NgModule({
  declarations: declarations,
  imports: imports,
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
