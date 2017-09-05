import {
    Component,
    OnInit
} from '@angular/core';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.pug',
})

export class KeepersComponent implements OnInit {
  title = 'Cuidadores';


  ngOnInit(){
      console.log( 'KeepersComponent cargado' );
  }
}
