import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class CheckedLoginGuard implements CanActivate {
  constructor(
    private _routerService: Router 
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.length!=0){
        let login_json=localStorage.getItem('login-infor');
        let log_string=JSON.parse(login_json);
        if(log_string.role=='user'){
          this._routerService.navigate(['user'])
          return false;
        }
        else if(log_string.role=='admin'){
          this._routerService.navigate(['admin'])
          return false;
        }
      }
        else
        return true;
    }
  }

