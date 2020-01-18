import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable() tells angular to inject any dependencies this class may have.
// Not needed for components because the @Component decorator does it for us.
@Injectable()
export class HttpService {
  url: string = "http://localhost:8080/greeting";

  constructor(private httpClient: HttpClient) { }

  getInfo() : Observable<string> {
    return this.httpClient.get(this.url, {responseType: 'text'});
  }
}
