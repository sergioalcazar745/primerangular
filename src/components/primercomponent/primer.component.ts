import { Component } from "@angular/core";

@Component({
    selector: 'primer-component',
    templateUrl: './primer.component.html',
    styleUrls: ['./primer.component.css']
})

export class PrimerComponent{
    
    public titulo: string;
    public descripcion: string;
    public anyo: number;

    constructor(){
        this.titulo = "Viernes de angular";
        this.descripcion = "Aprendiendo Angular a tope!!!";
        this.anyo = 2022
    }
}