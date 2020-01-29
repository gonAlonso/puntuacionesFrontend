import { Component, OnInit } from '@angular/core';
import { Jugador } from '../models/Jugador';
import { JugadorService } from '../services/jugador.service';

@Component({
  selector: 'app-lista-jugador',
  templateUrl: './lista-jugador.component.html',
  styleUrls: ['./lista-jugador.component.css']
})
export class ListaJugadorComponent implements OnInit {
  listaJugadores: Jugador[];
  constructor() { }

  ngOnInit() {
    this.listaJugadores = JugadorService.getAllJugadores();
  }


}
