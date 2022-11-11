import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-deporte',
    templateUrl: './deportes.component.html',
    styleUrls: ['./deporte.component.css']
})

export class Deportes implements OnInit{
    public deportes: Array<string>;
    public numeros: Array<number>;

    constructor(){
        this.deportes = ["Petanca", "Curling", "Canicas", "Fútbol", "Pádel"];
        this.numeros = [5, 6, 9, 12, 14, 53, 22];
    }

    ngOnInit(): void {
        
    }

    ngDoCheck(): void{

    }
}