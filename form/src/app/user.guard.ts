import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
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
          return true;
        }
        else{
          window.alert('Bạn không có quyền vào trang của user ');
           this._routerService.navigate(['admin']);
          return false;
          
        }	
  
      }
      else{
        window.alert('Bạn chưa đăng nhập');
        this._routerService.navigate(['login']);
        return false;
      }
  }
}
