import {
    Component,
    OnInit
} from '@angular/core';

@Component({
  selector: 'animals',
  templateUrl: './animals.pug',
})

export class AnimalsComponent implements OnInit {
  title = 'Animales';


  ngOnInit(){
      console.log( 'AnimalsComponent cargado' );
  }
}
