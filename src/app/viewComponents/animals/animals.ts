import {
    Component,
    OnInit
} from '@angular/core';

import { fadeIn } from '../../components/animations/animations'


@Component({
    selector: 'animals',
    templateUrl: './animals.pug',
    animations:[fadeIn]
})

export class AnimalsComponent implements OnInit {
  title = 'Animales';


  ngOnInit(){
      console.log( 'AnimalsComponent cargado' );
  }
}
