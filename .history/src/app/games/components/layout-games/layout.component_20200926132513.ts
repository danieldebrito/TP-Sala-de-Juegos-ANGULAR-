import { Component, OnInit } from '@angular/core';
import { LayoutGamesService } from './layout-games.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor( private layoutGamesService: LayoutGamesService) { }

  ngOnInit(): void {
  }

}
