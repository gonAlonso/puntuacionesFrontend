import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaJugadorComponent } from './lista-jugador/lista-jugador.component';
import { AddJugadorComponent } from './add-jugador/add-jugador.component';


const routes: Routes = [
  {path: 'listaJugadores', component: ListaJugadorComponent},
  {path: 'addJugador', component: AddJugadorComponent},
  {path: '', component: ListaJugadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
