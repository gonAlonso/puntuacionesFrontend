import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../models/Jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private URL: string;

  constructor(private httpClient: HttpClient) {
    this.URL = 'http://localhost:5200/'
  }

  public getAllJugadores(): Observable<any> {
    return this.httpClient.get( `${this.URL}puntuaciones`)
  }

  //TODO: borrar, insertar, update, delete

  public addJugador(jugador: Jugador) {
    const  body = JSON.stringify( jugador );
    const headers = new HttpHeaders( {'Content-type': 'application/json'} );
    return this.httpClient.post( `${this.URL}puntuacion`, body, {headers} );
  }
}
