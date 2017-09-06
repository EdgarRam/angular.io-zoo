import {
    Component,
    OnInit
} from '@angular/core';

import { fadeIn } from '../../components/animations/animations'

@Component({
    selector: 'contact',
    templateUrl: './contact.pug',
    animations: [fadeIn]
})

export class ContactComponent implements OnInit {
  title = 'Contacto';
  public emailContact;

  construct(){

  }

  ngOnInit(){
      console.log( 'ContactComponent cargado' );
  }

  saveEmail(){
      localStorage.setItem( 'email', this.emailContact )
      localStorage.getItem( 'email' )
      console.log( this.emailContact)
  }


}
