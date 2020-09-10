import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { take, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AlumnoGuard implements CanActivate {

  constructor( private authSvc: AuthService, private router: Router ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authSvc.user$.pipe(
      take(1),
      map((user) => user && (this.authSvc.isAlumno(user) || this.authSvc.isAdmin(user))),
      tap((canEdit) => {
        if (!canEdit) {
          this.router.navigate(['/permisoDenegado']);
        }
      })
    );
  }
}
