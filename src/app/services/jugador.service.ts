import { Injectable } from '@angular/core';
import { Jugador } from '../models/Jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor() { }

  public getAllJugadores(): Jugador[] {
    // Obtener los jugadores de a la API
    // DEVELOPMENT:: MOCK
    return [
      new Jugador('1', 'Juan', 22),
      new Jugador('2', 'Pedro', 10),
      new Jugador('3', 'Ana', 5)
    ];
  }

  //TODO: borrar, insertar, update, delete
}
