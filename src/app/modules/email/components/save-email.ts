import {
    Component
} from '@angular/core';

@Component({
  selector: 'save-email',
  template: `
    <h4> {{title}}</h4>
    <input type="text"
     [(ngModel)] ='emailContact'>

     <button (click) ="saveEmail()"> Guardar Email</button>
  `,
})

export class SaveEmailComponent{
  title = 'Guardar email';
  emailContact : string;

  saveEmail(){
      localStorage.setItem( 'email', this.emailContact )
      localStorage.getItem( 'email' )
      console.log( this.emailContact)
  }
}
