import {
    Component,
    OnInit
} from '@angular/core';

import { fadeIn } from '../../components/animations/animations'

@Component({
    selector: 'home',
    templateUrl: './home.pug',
    animations: [fadeIn]
})

export class HomeComponent implements OnInit {
  title = 'Bienvenido a Ngzoo';


  ngOnInit(){
      console.log( 'HomeComponent cargado' );
  }
}
