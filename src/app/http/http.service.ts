import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

// @Injectable() tells angular to inject any dependencies this class may have.
// Not needed for components because the @Component decorator does it for us.
@Injectable()
export class HttpService {
  url: string = "http://localhost:8080/greeting";

  constructor(private httpClient: HttpClient) { }

  getInfo() : Observable<string> {
    return this.httpClient.get(this.url, {responseType: 'text'})
        .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) : Observable<never> {
    // || operator: see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#expression-operators
    return throwError(error.message || "Unknown server error.");
  }
}
