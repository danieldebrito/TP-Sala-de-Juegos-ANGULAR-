import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {

  grilla = [[]];

  elementos = [
    { iconSrc: 'heart', seleccionada: false },
    { iconSrc: 'car', seleccionada: false },
    { iconSrc: 'book', seleccionada: false },
    { iconSrc: 'apple', seleccionada: false },
    { iconSrc: 'bell', seleccionada: false },
    { iconSrc: 'bicycle', seleccionada: false },
    { iconSrc: 'bomb', seleccionada: false },
    { iconSrc: 'bolt', seleccionada: false },
    { iconSrc: 'heart', seleccionada: false },
    { iconSrc: 'car', seleccionada: false },
    { iconSrc: 'book', seleccionada: false },
    { iconSrc: 'apple', seleccionada: false },
    { iconSrc: 'bell', seleccionada: false },
    { iconSrc: 'bicycle', seleccionada: false },
    { iconSrc: 'bomb', seleccionada: false },
    { iconSrc: 'bolt', seleccionada: false }
  ];

  pares = [];

  constructor() { }

  ngOnInit(): void {
    this.iniciarGrilla();
  }

  iniciarGrilla(): void {
    // desordeno
    this.elementos = this.elementos
      .sort(() => Math.random() - 0.5);
    // inserto elementos
    let count = 0;
    for (let i = 0; i < 4; i++) {
      this.grilla[i] = [];
      for (let j = 0; j < 4; j++) {
        this.grilla[i][j] = this.elementos[count];
        count++;
      }
    }

  }


  elegirCelda(celda): any {
    if (celda.seleccionada) {
      return;
    }

    celda.seleccionada = true;
    if (this.pares.length < 2) {
      this.pares.push(celda);
    }

    if (this.pares.length === 2) {
      // evaluo si se queda destapada
      let pares = this.pares;
      this.pares = [];
      if (pares[0].iconSrc !== pares[1].iconSrc) {
        setTimeout(() => {
          pares[0].seleccionada = false;
          pares[1].seleccionada = false;
          pares = [];
        }, 1000);

      }
      // evaluo si ya gano
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < this.grilla.length; index++) {

        if (this.grilla[index].some((x) => {
          return !x.seleccionada;
        })) {
          return;
        }
      }

      alert('GANASTE!');

    }
  }

}
