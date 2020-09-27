import { Component, OnInit } from '@angular/core';
import { JugadasService } from 'src/app/services/jugadas.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Jugada } from 'src/app/class/jugada';
import { PalabrasService } from 'src/app/games/pages/anagrama/palabras.service';
import { Palabra } from 'src/app/class/palabra';


@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  public juegoNombre: string;
  public resultado = '';
  public puntaje = 0;
  public fecha = '';
  public jugador = '';
  public jugada: Jugada = {};

  public disabledButton = false;

  public mensaje = '';
  public palabraAleatoria: Palabra = {};
  public palabraArray: string[] = [];
  public palabraSugerida = '';
  public palabraIngresada = '';
  public palabraAnagrama = '';
  public palabras: Palabra[] = [];

  constructor(private jugadasService: JugadasService, public auth: AuthService, private palabrasService: PalabrasService) {
    this.juegoNombre = 'Anagrama';
    this.jugador = this.auth.nombre;
  }

  public getPalabra() {
    this.disabledButton = false;
    this.mensaje = '';
    this.palabraAleatoria = {};
    this.palabraArray = [];
    this.palabraSugerida = '';
    this.palabraIngresada = '';
    this.palabraAnagrama = '';
    this.palabras = [];

    this.palabrasService.getItems().subscribe(elements => {
      this.palabras = elements;

      this.palabraAleatoria = this.palabras[(Math.floor((Math.random() * elements.length) + 1)) - 1];

      this.palabraAnagrama = this.palabraAleatoria.anagrama;
      this.palabraSugerida = this.palabraAleatoria.palabra;
      this.pabraToArray();
    });
  }

  pabraToArray() {
    this.palabraArray = this.palabraAnagrama.split('');
  }

  public verificar() {
    this.disabledButton = true;

    if (this.palabraIngresada === this.palabraAleatoria.palabra) {
      this.mensaje = 'GANASTE!!!';
      this.resultado = 'Ganó';
      this.puntaje = 10;
      this.addJugada();
      this.disabledButton = true;
    } else {
      this.mensaje = 'PERDISTE :-(';
      this.resultado = 'Perdió';
      this.puntaje = 0;
      this.addJugada();
      this.disabledButton = true;
    }
  }

  public addJugada() {
    this.jugada.juego = this.juegoNombre;
    this.jugada.jugador = this.auth.nombre;
    this.jugada.puntaje = this.puntaje;
    this.jugada.resultado = this.resultado;
    this.jugada.fechaHora = this.jugadasService.getfecha();

    this.jugadasService.addItem(this.jugada);
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getPalabra();
  }
}
