import {
    Component,
    OnInit
} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.pug',
})

export class HomeComponent implements OnInit {
  title = 'Bienvenido a Ngzoo';


  ngOnInit(){
      console.log( 'HomeComponent cargado' );
  }
}
