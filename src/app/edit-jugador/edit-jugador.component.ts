import { Component, OnInit } from '@angular/core';
import { Jugador } from '../models/Jugador';
import { ActivatedRoute, Router } from '@angular/router';
import { JugadorService } from '../services/jugador.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-edit-jugador',
  templateUrl: '../add-jugador/add-jugador.component.html',
  styleUrls: ['./edit-jugador.component.css']
})
export class EditJugadorComponent implements OnInit {

  public jugador: Jugador;

  constructor(private activatedRoute: ActivatedRoute,
      private jugadorService: JugadorService,
      private router: Router) {
        this.jugador = new Jugador('','',0)
      }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id
    this.jugadorService.getJugador( id ).subscribe(
      resp => this.jugador = resp['datos'],
      err => alert(`Error, no se puede realizar la modificacion ${err}`)
    )
  }

  onSubmit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.jugadorService.updateJugador( id, this.jugador).subscribe(
      response => {
        this.router.navigate(['/listaJugadores'])
      },
      err => { alert('Error al guardar el jugador:' + err ); }
    )
  }

}
