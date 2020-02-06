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

  constructor( public jugadorService: JugadorService) { }

  ngOnInit() {
    //this.listaJugadores = JugadorService.getAllJugadores();
    this.jugadorService.getAllJugadores().subscribe(
      result => {
        this.listaJugadores = result.datos;
      },
      error => { alert('Error al listar las puntuaciones')},
      () => {}
    )
  }


}
