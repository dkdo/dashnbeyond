import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';

import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class ProjectService {
  configUrl = environment.dashApi;
  httpOptions = {
    headers: new HttpHeaders({
      'x-api-key': environment.dashApiKey,
    })
  };

  constructor(private http: HttpClient) {
  }

  getProjects() {
    return this.http.get(`${this.configUrl}/projects`, this.httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getProjectById(projectId) {
    return this.http.get(`${this.configUrl}/projects/${projectId}`, this.httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) {
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
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
