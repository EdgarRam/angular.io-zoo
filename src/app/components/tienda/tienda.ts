import { Component } from '@angular/core';

@Component({
    selector:'tienda',
    templateUrl: './tienda.html',
    styleUrls: [
        'tienda.css'
    ]
})


export class TiendaComponent{
    public titulo
    public storeName
    public park

    constructor(){
        this.titulo = 'Esta es la tienda'
    }

    showDataPark( _event ){
        this.park = _event
    }
}
