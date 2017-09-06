import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { fadeIn } from '../../components/animations/animations'


@Component({
    selector:'tienda',
    templateUrl: './tienda.html',
    styleUrls: [
        'tienda.css'
    ],
    animations:[
        fadeIn,
        trigger('marcar',[
            state( 'inactive', style({
                border: '5px solid #ccc'
            }) ),
            state( 'active', style({
                border: '5px solid yellow',
                background: 'red',
                borderRadius: '50px'
            }) ),
            transition( 'inactive => active', animate('300ms linear')),
            transition( 'active => inactive', animate('300ms linear'))
        ])
    ]
})


export class TiendaComponent implements OnInit{
    public titulo
    public storeName
    public park
    public status

    constructor(){
        this.titulo = 'Esta es la tienda'
        this.status = 'inactive'
    }

    ngOnInit(){
        $( '#textojq' ).hide();
        $('#buttonJq').click(function(){
            $( '#textojq' ).slideToggle();
        })
    }

    changeStatus( _status ){
        this.status =  _status === 'inactive'? 'active' : 'inactive';
    }

    showDataPark( _event ){
        this.park = _event
    }

    textEditor( _content ){
        console.log( _content )
    }
}
