import {
    Component,
    OnInit
} from '@angular/core';

import { fadeIn } from '../../components/animations/animations'


@Component({
    selector: 'keepers',
    templateUrl: './keepers.pug',
    animations: [fadeIn]
})

export class KeepersComponent implements OnInit {
  title = 'Cuidadores';


  ngOnInit(){
      console.log( 'KeepersComponent cargado' );
  }
}
