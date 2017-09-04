import {
    Component,
    DoCheck,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'NGZOO';
  emailContact : string;

  ngOnInit(){
      this.emailContact = localStorage.getItem( 'email' )
      console.log( localStorage.getItem( 'email' ) )
  }
  ngDoCheck(){
      console.log( 'ejecuta ngDoCheck' );
      this.emailContact = localStorage.getItem( 'email' )
  }

  deleteEmail(){
      console.log( 'emial')
      localStorage.removeItem('email');
      this.emailContact = null
  }
}
