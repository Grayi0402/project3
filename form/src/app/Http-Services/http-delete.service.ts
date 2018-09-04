import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class HttpDeleteService {

	constructor(
		private httpClient: HttpClient
	) { }


	delete(id: number, api: string) {
		return this.httpClient.delete(`${api}/${id}`).pipe(retry(3), catchError(this.errorHandle));
	}
	
	errorHandle(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}

		return throwError(error.message || "Serve Error");
	}
}
