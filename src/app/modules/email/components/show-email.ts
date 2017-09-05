import {
    Component
} from '@angular/core';

@Component({
  selector: 'show-email',
  template: `
      <span *ngIf="emailContact">
        <h4> {{title}}</h4>
          <strong>
              Email de contacto: {{emailContact}}
          </strong>
          <button
            (click)="deleteEmail()"
          >Eliminar email de contacto</button>
      </span>
  `,
})

export class ShowEmailComponent{
  title = 'Mostrar email';
  emailContact : string;

  ngOnInit(){
      this.emailContact = localStorage.getItem( 'email' )
  }
  ngDoCheck(){
      this.emailContact = localStorage.getItem( 'email' )
  }

  deleteEmail(){
      localStorage.removeItem('email');
      this.emailContact = null
  }
}
