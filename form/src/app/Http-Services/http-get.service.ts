import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class HttpGetService {

	constructor(
		private _httpClient: HttpClient
	) { }

	getAll(api :string, object:any[]):Observable<HttpResponse<object>> {
		return this._httpClient.get<object>(api,{
			observe:"response"
		}).pipe(catchError(this.errorHandle));
  }
  getOne(api:string, object:any,id:number):Observable<HttpResponse<object>>{
  	return this._httpClient.get<object>(`${api}/${id}`,{observe:"response"}).pipe(catchError(this.errorHandle));

  }

  errorHandle(error: HttpErrorResponse){
	return throwError(error.message || "Serve Error");
  }
}
