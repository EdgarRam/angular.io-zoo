import {
    Component,
    OnInit
} from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.html',
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
