import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'sumar-numeros',
    templateUrl: './sumarnumeros.component.html'
})

export class SumarNumero{
    @ViewChild("caja1") caja1!: ElementRef;
    @ViewChild("caja1") caja2!: ElementRef;
    public suma: number;

    constructor(){
        this.suma = 0;
    }

    sumarNumeros(){
        this.suma = parseInt(this.caja1.nativeElement.value) + parseInt(this.caja2.nativeElement.value)
    }
}