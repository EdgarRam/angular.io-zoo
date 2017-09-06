import { AnimationEntryMetadata } from '@angular/core';
import {
    animate,
    state, style, transition, trigger
} from '@angular/animations';

export const fadeIn: AnimationEntryMetadata =
    trigger( 'fadeIn',[
        transition( ':enter',[
            style({
                opacity:0,
                transform: 'translateY(50%)',
                // transform: 'rotate( 150deg)'
            }),
            animate( '300ms linear', style({
                opacity:1,
                transform: 'translateY(0)',
                // transform: 'rotate( 0deg)'
            }) )
        ] )
    ] )
