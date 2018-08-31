import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, throwError} from 'rxjs'
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpPutService {
	
  constructor( 
  	private _httpClient : HttpClient
  	) { }

  updateData(api:string,obj:any):Observable<any>{
  	return this._httpClient.put<any>(`${api}/${obj.id}`,obj)
		.pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
		return throwError(error.message || "Serve Error");
	}
}
