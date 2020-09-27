import { Component, OnInit } from '@angular/core';
import { JugadasService } from 'src/app/services/jugadas.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Jugada } from 'src/app/class/jugada';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agilidad',
  templateUrl: './agilidad.component.html',
  styleUrls: ['./agilidad.component.css']
})
export class AgilidadComponent implements OnInit {

  public user$: Observable<any> = this.auth.afAuth.user;

  public juegoNombre: string;
  public resultado = '';
  public puntaje = 0;
  public fecha = '';
  public jugador = '';
  public jugada: Jugada = {};

  public disabledButton = false;

  public numero1 = 0;
  public numero2 = 0;
  public operacion = '';
  public result = 0;
  public resultAux = 0;
  public show = true;
  public respuesta = '';
  public seconds: number;
  public rtaIngresada = 0;

  constructor(private jugadasService: JugadasService, public auth: AuthService) {
    this.juegoNombre = 'Agilidad Aritmética';
    // this.jugador = this.auth.nombre;
  }

  public oberserableTimer(): void {
    this.disabledButton = true;
    setTimeout(() => {
      this.result = this.resultAux;
      this.show = false;
      this.checkRespuesta();
      this.disabledButton = false;
    }, 5000);
  }

  public checkRespuesta(): void {
    if (this.result === this.rtaIngresada) {
      this.respuesta = 'GANASTE!!';
      this.resultado = 'Ganó';
      this.puntaje = 10;
      this.addJugada();
      this.disabledButton = true;
    } else {
      this.respuesta = 'Perdiste :-(';
      this.resultado = 'Perdió';
      this.puntaje = 0;
      this.addJugada();
      this.disabledButton = true;
    }
  }

  public addJugada(): void {
    this.jugada.juego = this.juegoNombre;
    // this.jugada.jugador = this.auth.nombre;
    this.jugada.puntaje = this.puntaje;
    this.jugada.resultado = this.resultado;
    this.jugada.fechaHora = this.jugadasService.getfecha();

    this.jugadasService.addItem(this.jugada);
  }

  public eligeOperacion(): void {
    const opc = Math.floor((Math.random() * 3) + 1);

    this.numero1 = Math.floor((Math.random() * 20) + 1);
    this.numero2 = Math.floor((Math.random() * 20) + 1);

    switch (opc) {
      case 1:
        this.operacion = '+';
        this.resultAux = this.numero1 + this.numero2;
        break;
      case 2:
        this.operacion = '-';
        this.resultAux = this.numero1 - this.numero2;
        break;
      case 3:
        this.operacion = '*';
        this.resultAux = this.numero1 * this.numero2;
        break;
    }
  }

  public reiniciar(): void {
    this.eligeOperacion();
    this.oberserableTimer();
    this.numero1 = 0;
    this.numero2 = 0;
    this.operacion = '';
    this.result = 0;
    this.resultAux = 0;
    this.show = true;
    this.respuesta = '';
    this.rtaIngresada = 0;

    this.eligeOperacion();
    this.oberserableTimer();
  }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.auth.user$.subscribe(
      item => {
        this.jugada.jugador = item.email;
      }
    );
  }
}
