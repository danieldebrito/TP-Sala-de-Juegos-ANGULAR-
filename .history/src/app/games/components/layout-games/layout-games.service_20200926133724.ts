import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutGamesService {

  constructor( private http: HttpClient ) { }

  getGamesMenuItems(): any{
    return this.http.get<GamesMenuItem[]>('/assets/games-menu.json');
  }
}

export interface GamesMenuItem {
  icon: string;
  redirectTo: string;
  name: string;
}

