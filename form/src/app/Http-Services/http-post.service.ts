import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, throwError} from 'rxjs'
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpPostService {

  constructor(
	  private _httpClient: HttpClient) { }
  	 add(obj: Object, api:string):Observable<Object>{
	return this._httpClient.post<Object>(api,obj).pipe(catchError(this.errorHandle));
  }
  errorHandle(error: HttpErrorResponse){
	return throwError(error.message || "Serve Error");
  }


}
