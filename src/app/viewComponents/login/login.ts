import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../models/user';


@Component({
    selector: 'login',
    templateUrl: './login.pug'
})

export class LoginComponent implements OnInit {
    public user: User;
    public title: String;


    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.title = 'Login';
        this.user = new User( '', '', '', '', '', 'ROLE_USER', '' );

    }

    ngOnInit(){
        console.log( 'LoginComponent cargado')
    }


    onSubmit( loginForm ){
        console.log( loginForm )
    }
}
