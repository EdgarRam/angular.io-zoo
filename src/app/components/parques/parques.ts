import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

@Component({
    selector:'parques',
    templateUrl: './parques.pug',
    styleUrls: [
        './parques.css'
    ]
})


export class ParquesComponent
    implements
        OnChanges,
        OnInit,
        DoCheck,
        OnDestroy{
    @Input() name: string ;
    public meters: number;
    public vegetation: string;
    public open: boolean;

    @Output() showData= new EventEmitter();


    constructor(){
        this.name = 'Esta es la tienda'
        this.meters = 450;
        this.vegetation = 'Alta'
        this.open = true;
    }

    ngOnChanges( changes: SimpleChanges ){
        console.log( changes )
    }

    ngOnInit( ){
        console.log( 'Metro on init lanzado')
    }

    ngDoCheck(){
        console.log( 'ejecuta ngDoCheck' );
    }

    ngOnDestroy(){
        console.log( 'destroy ')
    }

    emitEvent( _event ){
        this.showData.emit({
            name: this.name,
            meters: this.meters,
            vegetation: this.vegetation,
            status: this.open,
        })
    }

}
