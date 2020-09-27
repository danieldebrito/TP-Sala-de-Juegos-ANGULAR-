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

  constructor() { }

  ngOnInit(): void {
  }

}
