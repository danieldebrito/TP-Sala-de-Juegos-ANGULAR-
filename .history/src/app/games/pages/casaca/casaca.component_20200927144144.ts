import { Component, OnInit } from '@angular/core';
import { JugadasService } from 'src/app/services/jugadas.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Jugada } from 'src/app/class/jugada';
import { Casaca } from 'src/app/class/casaca';
import { CasacasService } from 'src/app/games/pages/casaca/casacas.service';

@Component({
  selector: 'app-casaca',
  templateUrl: './casaca.component.html',
  styleUrls: ['./casaca.component.css']
})
export class CasacaComponent implements OnInit {

  public juegoNombre: string;
  public resultado = '';
  public puntaje = 0;
  public fecha = '';
  public jugador = '';
  public jugada: Jugada = {};

  public mensaje = '';
  public disabledButton = false;

  public correcta: Casaca = {};
  public opcion1: Casaca = {};
  public opcion2: Casaca = {};

  public casacas: Casaca[] = [];
  public opciones: Casaca[] = [];

  constructor(
    private jugadasService: JugadasService,
    public auth: AuthService,
    private casacaService: CasacasService) {
    this.juegoNombre = 'De Quién es la Casaca ??';
  }

  public getItems(): void {
    this.resetVariables();
    this.casacaService.getItems().subscribe(elements => {
      this.casacas = elements;

      this.correcta = this.casacas[Math.floor((Math.random() * this.casacas.length) + 1)];
      this.opciones.push(this.correcta);
      this.casacas.splice(this.casacas.indexOf(this.correcta), 1);

      this.opcion1 = this.casacas[Math.floor((Math.random() * this.casacas.length) + 1)];
      this.opciones.push(this.opcion1);
      this.casacas.splice(this.casacas.indexOf(this.opcion1), 1);

      this.opcion2 = this.casacas[Math.floor((Math.random() * this.casacas.length) + 1)];
      this.opciones.push(this.opcion2);
      this.casacas.splice(this.casacas.indexOf(this.opcion2), 1);

      this.opciones.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });

    },
      error => {
        console.error(error);
      });
  }

  public resetVariables(): void {
    this.correcta = {};
    this.opcion1 = {};
    this.opcion2 = {};
    this.casacas = [];
    this.opciones = [];
    this.disabledButton = false;
    this.mensaje = 'JUGANDO';
  }

  public verificar(elegida: Casaca): void {
    if (elegida === this.correcta) {
        this.resultado = 'Ganó';
        this.puntaje = 10;
        this.addJugada();
        this.disabledButton = true;
        this.mensaje = 'GANASTE!!!';
    } else {
      this.resultado = 'Perdió';
      this.puntaje = 0;
      this.addJugada();
      this.disabledButton = true;
      this.mensaje = 'Perdiste :-(';
    }
  }

  public addJugada(): void{
    this.jugada.juego = this.juegoNombre;
    this.jugada.puntaje = this.puntaje;
    this.jugada.resultado = this.resultado;
    this.jugada.fechaHora = this.jugadasService.getfecha();

    this.jugadasService.addItem(this.jugada);
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getItems();
    this.auth.user$.subscribe(
      item => {
        this.jugada.jugador = item.email;
      }
    );
  }
}
