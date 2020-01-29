export class Jugador {
  id: string;
  nombre: string;
  puntuacion: number;

  constructor(id: string, nombre: string, puntuacion: number) {
    this.id = id;
    this.nombre = nombre;
    this.puntuacion = puntuacion;
  }
}
