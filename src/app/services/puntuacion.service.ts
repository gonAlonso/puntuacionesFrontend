import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puntuacion } from '../models/Puntuacion';

@Injectable({
  providedIn: 'root'
})
export class PuntuacionService {

  private URL: string;

  constructor(private httpClient: HttpClient) {
    this.URL = 'http://localhost:5200/puntuacion'
  }

  public addPuntuacion(puntuacion: Puntuacion) {
    const body = JSON.stringify( puntuacion );
    const headers = new HttpHeaders( {'Content-type': 'application/json'} );
    return this.httpClient.post( this.URL, body, {headers} );
  }

  public updatePuntuacion(id: string, puntuacion: Puntuacion) {
    const  body = JSON.stringify( puntuacion );
    const headers = new HttpHeaders( {'Content-type': 'application/json'} );
    return this.httpClient.put( `${this.URL}/${id}`, body, {headers} );
  }

  public removePuntuacion(id: string){
    return this.httpClient.delete( `${this.URL}/${id}`);
  }

  public getPuntuacion(id: string){
    return this.httpClient.get( `${this.URL}/${id}`);
  }
}
