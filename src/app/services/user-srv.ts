import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global'


@Injectable()
export class UserService{
    public url: string
    // public identity
    // public token

    constructor(
        private _http: Http
    ){
        this.url = GLOBAL.url
    }


    register( _userToRegister ){
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

    singup( _userToLogin, getToken = null ){
        if( getToken !== null ){
            _userToLogin.getToken = getToken;
        }
        let headers = new Headers({
            'Content-Type': 'application/json'
        })

        return this._http.post(
            this.url+'login',
            _userToLogin,
            headers
        )
        .map( res => res.json() )
    }


    getIdentity(){
        let identity =  JSON.parse( localStorage.getItem('identity') )

        return identity || null
    }


    getToken(){
        let token = localStorage.getItem('token')

        return token || null
    }


    updateUser( _userToUpdate ){
        let headers = new Headers({
            "Content-Type": "application/json",
            "Authorization": this.getToken(),
        })

        return this._http.put(
            this.url + 'update-user/' + _userToUpdate._id,
            _userToUpdate,
            {
                headers: headers
            }
        )
        .map( res => res.json() )
    }
}
