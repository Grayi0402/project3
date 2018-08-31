import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
@Injectable({
	providedIn: 'root'
})
export class LoginGuard implements CanActivate {
	private role: string;
	constructor(
		private _routerService: Router
	) {

	}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot) {
		if(localStorage.length!=0){
			let login_json=localStorage.getItem('login-infor');
			let log_string=JSON.parse(login_json);
			if(log_string.role=='admin'){
				return true;
			}
			else{
				window.alert('Bạn đang đăng nhập quyền của user');
				this._routerService.navigate([log_string.role]);
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

