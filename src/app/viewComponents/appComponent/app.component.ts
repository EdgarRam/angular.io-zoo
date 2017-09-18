import {
    Component,
    OnInit,
    DoCheck
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global'

import { UserService } from '../../services/user-srv';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.pug',
    styleUrls: ['./app.component.css'],
    providers: [ UserService ]
})

export class AppComponent implements OnInit, DoCheck{
    public title: String;
    public identity;
    public url

    constructor(
        private _userService: UserService,
        private _router: Router,
    ){
        this.title = 'NGZOO';
        this.url = GLOBAL.url
    }


    ngOnInit(){
        this.identity = this._userService.getIdentity()
    }

    ngDoCheck(){
        this.identity = this._userService.getIdentity()
    }

    logout(){
        localStorage.clear();
        this.identity= null;
        this._router.navigate( ['/'])
    }

}
