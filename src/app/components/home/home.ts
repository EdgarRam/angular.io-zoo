import {
    Component,
    OnInit
} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.html',
})

export class HomeComponent implements OnInit {
  title = 'Home';


  ngOnInit(){
      console.log( 'HomeComponent cargado' );
  }
}
