import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor() { 

  }
  checkLog(username:string,password:string,role:string):boolean{
	if(role=='admin'){
		if(username == 'admin' && password =='admin'){
			return true;
		}
	}
	else if(role=='user'){
		if(username == 'user' && password =='user'){
			return true;
		}
	}  	
	else if(role=='manager'){
		if(username == 'manager' && password =='manager'){
			return true;
		}
	}
	else
	return false;  	
  }
}
