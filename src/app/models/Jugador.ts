export class Jugador {
  _id: string;
  nombre: string;
  puntuacion: number;

  constructor(id: string, nombre: string, puntuacion: number) {
    this._id = id;
    this.nombre = nombre;
    this.puntuacion = puntuacion;
  }
}
