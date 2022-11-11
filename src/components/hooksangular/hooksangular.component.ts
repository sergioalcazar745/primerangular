import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'hooks-angular',
    templateUrl: './hooksangular.component.html',
})

export class HooksAngular implements OnInit{
    public mensaje: string;

    constructor(){
        console.log("Entrando en constructor")
        this.mensaje = "Soy Hooks Angular";
    }

    ngOnInit(): void {
        console.log("Ejecutando OnInit");
    }

    ngDoCheck(): void{
        console.log("Ejecutando onDoCheck")
    }

    cambiarMensaje(): void{
        this.mensaje = "Single Day!!!"
    }
}