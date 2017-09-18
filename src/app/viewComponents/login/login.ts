import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user-srv';

@Component({
    selector: 'login',
    templateUrl: './login.pug',
    providers: [ UserService ]
})

export class LoginComponent implements OnInit {
    public user: User;
    public title: String;
    public identity;
    public token;
    public status: String;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ){
        this.title = 'Login';
        this.user = new User( '', '', '', '', '', 'ROLE_USER', '' );

    }

    ngOnInit(){
        console.log( 'LoginComponent cargado')
        console.log( this._userService.getIdentity() )
        console.log( this._userService.getToken() )
    }

    onSubmit( loginForm ){
        this._userService.singup( this.user )
        .subscribe(
            response => {
                this.identity = response.user;
                if( !this.identity || !this.identity._id ){
                    alert( 'el usuario no se ha logueado correctamente')
                }
                else{
                    this.identity.password = '';
                    localStorage.setItem('identity', JSON.stringify(this.identity) );
                    this.getToken()
                    loginForm.reset();
                }

            },
            error =>{
                console.log( <any> error )
                this.status = 'error'
            }
        )
    }

    getToken(){
        this._userService.singup( this.user, true )
        .subscribe(
            response => {
                this.token = response.token;

                if( this.token.length <= 0 ){
                    alert( 'El token no se ha generado' )
                }
                else{
                    console.log( this.token )
                    localStorage.setItem('token', this.token )
                    this.status = 'success'
                    this._router.navigate(['/'])
                }
            },
            error =>{
                var errorMessage = <any> error
                if( errorMessage !== null ){
                    var body = errorMessage
                    console.log( body )
                    this.status = 'error'
                }
            }
        )
    }

}
