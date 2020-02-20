import { Component, OnInit, Input } from '@angular/core';
import { Puntuacion } from '../models/Puntuacion';
import { PuntuacionService } from '../services/puntuacion.service';
import { JugadorService } from '../services/jugador.service';
//import { NumberValueAccessor } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-gestion-puntuaciones',
  templateUrl: './gestion-puntuaciones.component.html',
  styleUrls: ['./gestion-puntuaciones.component.css']
})
export class GestionPuntuacionesComponent implements OnInit {
  listaPuntuaciones: Puntuacion[];
  @Input() public idUsuario: string;


  constructor(private jugServ: JugadorService,
          private puntServ: PuntuacionService,
          private snackbar: MatSnackBar) {
    this.idUsuario = null;
  }

  ngOnInit() {
    this.listarPuntuaciones()
  }

  listarPuntuaciones(){
    this.jugServ.getPuntuacionesJugador( this.idUsuario).subscribe(
      result => {
        this.listaPuntuaciones = result['datos'].puntuaciones
      },
      error => alert("Error al cargar las puntuaciones")
    )
  }
  delPuntuacion(id: string){
    this.puntServ.removePuntuacion(id).subscribe(
      result => {
        this.listarPuntuaciones()
        this.snackbar.open( 'Puntuacion Borrada', 'OK', {duration: 3000})
      },
      error => alert("Error borrando puntuacion")
    )
  }

  addPuntuacion(valorPuntuacion){
    let nueva = new Puntuacion(null, valorPuntuacion)
    nueva._id = undefined;
    this.jugServ.addPuntuacionJugador(this.idUsuario, nueva).subscribe(
      result => {
        this.listarPuntuaciones()
        this.snackbar.open( 'Puntuacion añadir', 'OK', {duration: 3000})
      },
      error => alert("Error al guardar puntuacion")
    )
  }
}
