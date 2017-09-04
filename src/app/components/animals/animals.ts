import {
    Component,
    OnInit
} from '@angular/core';

@Component({
  selector: 'animals',
  templateUrl: './animals.html',
})

export class AnimalsComponent implements OnInit {
  title = 'Animales';


  ngOnInit(){
      console.log( 'AnimalsComponent cargado' );
  }
}
