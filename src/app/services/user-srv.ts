import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global'


@Injectable()
export class UserService{
    public url: string;

    constructor(
        private _http: Http
    ){
        this.url = GLOBAL.url
    }


    register( _userToRegister ){
        // let params = JSON.stringify(
        //     _userToRegister
        // );
        let headers = new Headers({
            'Content-Type': 'application/json'
        })



        return this._http.post(
            this.url+'register',
            _userToRegister,
            headers
        )
        .map( res => res.json() )
    }
}
