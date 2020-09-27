import { Component, OnInit } from '@angular/core';
import { JugadasService } from 'src/app/services/jugadas.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Jugada } from 'src/app/class/jugada';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {

  public user$: Observable<any> = this.auth.afAuth.user;


  public juegoNombre: string;
  public resultado = '';
  public puntaje = 0;
  public fecha = '';
  public jugador = '';
  public jugada: Jugada = {};

  public message = '';
  public result = '';
  public numeroIngresado = 0;
  public numeroSecreto: number;
  public contador = 0;
  public quedan = '';
  public fue = '';
  public disabledButton = false;

  constructor(private jugadasService: JugadasService, public auth: AuthService) {
    this.juegoNombre = 'Adivina el Número';
    // this.jugador = this.auth.user$;
  }

  public generarnumero() {
    this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
    this.result = '';
    this.message = '';
    this.numeroIngresado = 0;
    this.contador = 0;
    this.quedan = '';
    console.log(this.numeroSecreto);
    this.disabledButton = false;
  }

  public verificar() {
    this.quedan = 'Podes probar';
    this.fue = '¿Como te fue?' ;
    this.contador++;
    if (this.numeroIngresado === this.numeroSecreto) {
      this.result = 'Ganaste!! ';
      this.message = 'Muy Bien';
      this.quedan = '';
      this.fue = '';

      this.resultado = 'Ganó';
      this.puntaje = 10;
      this.addJugada();
      this.disabledButton = true;

      return true;
    }
    if (this.numeroIngresado < this.numeroSecreto) {
      this.result = 'Falta ';
    }
    if (this.numeroIngresado > this.numeroSecreto) {
      this.result = 'Te Pasaste ';
    }
    if (this.contador === 5){
      this.result = 'Perdiste!! ';
      this.message = 'Otra vez...';
      this.quedan = 'era: ' + this.numeroSecreto;
      this.fue = '';

      this.resultado = 'Perdió';
      this.puntaje = 0;
      this.addJugada();
      this.disabledButton = true;

      return false;
    } else {
      this.message =  ( 5 - this.contador)   + ' más !!';
    }
  }

  public addJugada(){
    this.jugada.juego = this.juegoNombre;
    this.jugada.jugador = this.auth.user$;
    this.jugada.puntaje = this.puntaje;
    this.jugada.resultado = this.resultado;
    this.jugada.fechaHora = this.jugadasService.getfecha();

    this.jugadasService.addItem(this.jugada);
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.generarnumero();
  }
}
