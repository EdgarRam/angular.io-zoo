import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user-srv';


@Component({
    selector: 'register',
    templateUrl: './register.html',
    providers: [ UserService ]
})

export class RegisterComponent implements OnInit {
    public title: String;
    public user: User;
    public status: String;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ){
        this.title = 'Registro';
        this.user = new User( '', '', '', '', '', 'ROLE_USER', '' );
    }

    ngOnInit(){
        console.log( 'RegisterComponent cargado')
    }

    onSubmit( registerForm ){
        this._userService.register( this.user )
            .subscribe(
                response =>{
                    if( response.user && response.user._id ){
                        this.status = 'success'
                        this.user = new User( '', '', '', '', '', 'ROLE_USER', '' );
                        registerForm.reset();
                    }
                    else{
                        this.status = 'error';
                    }
                },
                err => {
                    this.status = 'error';
                    console.log( <any>err )
                }
            )
    }
}
