import { Component, OnInit } from '@angular/core';

@Component({
    selector:'tienda',
    templateUrl: './tienda.html',
    styleUrls: [
        'tienda.css'
    ]
})


export class TiendaComponent implements OnInit{
    public titulo
    public storeName
    public park

    constructor(){
        this.titulo = 'Esta es la tienda'
    }

    ngOnInit(){
        $( '#textojq' ).hide();
        $('#buttonJq').click(function(){
            $( '#textojq' ).slideToggle();
        })
    }

    showDataPark( _event ){
        this.park = _event
    }

    textEditor( _content ){
        console.log( _content )
    }
}
