import { Component, OnInit } from '@angular/core';
import { Jugador } from '../models/Jugador';
import { JugadorService } from '../services/jugador.service';

@Component({
  selector: 'app-add-jugador',
  templateUrl: './add-jugador.component.html',
  styleUrls: ['./add-jugador.component.css']
})
export class AddJugadorComponent implements OnInit {

  public jugador: Jugador;

  constructor( private jugadorService: JugadorService) {
    this.jugador = new Jugador('', '', 0);
  }

  ngOnInit() { }

  onSubmit() {
    this.jugadorService.addJugador( this.jugador).subscribe(
      response => {},
      err => { alert('Error al guardar el jugador:' + err ); },
      () => {}
    )
  }

}
