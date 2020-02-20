import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../models/Jugador';
import { Puntuacion } from '../models/Puntuacion';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private URL: string;

  constructor(private httpClient: HttpClient) {
    this.URL = 'http://localhost:5200/usuario'
  }

  public getAllJugadores(): Observable<any> {
    return this.httpClient.get( this.URL )
  }

  public getPuntuacionesJugador(id: string){
    return this.httpClient.get(`${this.URL}/${id}/puntuacion`)
  }

  public addJugador(jugador: Jugador) {
    const  body = JSON.stringify( jugador );
    const headers = new HttpHeaders( {'Content-type': 'application/json'} );
    return this.httpClient.post( this.URL, body, {headers} );
  }

  public addPuntuacionJugador(idJugador: string, puntuacion: Puntuacion) {
    puntuacion._id = null
    const  body = JSON.stringify( puntuacion );
    const headers = new HttpHeaders( {'Content-type': 'application/json'} );
    return this.httpClient.post( `${this.URL}/${idJugador}/puntuacion`, body, {headers} );
  }

  public updateJugador(id: string, jugador: Jugador) {
    const  body = JSON.stringify( jugador );
    const headers = new HttpHeaders( {'Content-type': 'application/json'} );
    return this.httpClient.put( `${this.URL}/${id}`, body, {headers} );
  }

  public removeJugador(id: string){
    return this.httpClient.delete( `${this.URL}/${id}`);
  }

  public getJugador(id: string){
    return this.httpClient.get( `${this.URL}/${id}`);
  }
}
