export class Puntuacion {
  _id: string;
  valor: number;
  fecha: Date;

  constructor(id: string, puntuacion: number) {
    this._id = id;
    this.fecha = new Date();
    this.valor = puntuacion;
  }
}
