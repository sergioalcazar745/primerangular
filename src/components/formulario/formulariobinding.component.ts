import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'formulario-binding',
    templateUrl: './formulariobinding.component.html'
})

export class FormularioBindingComponent{

    public user: any;
    public mensaje: string;
    // public prueba = Array<string>

    constructor(){
        this.mensaje = ""
        this.user = {
            nombre: "",
            apellido: "",
            edad: 0
        }
    }

    recibirDatos(): void{
        this.mensaje = "Datos recibidos"
    }

}