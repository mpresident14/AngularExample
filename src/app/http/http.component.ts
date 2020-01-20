import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  info: string;
  errorMsg: string;
  // Using "private" (or any other parameter property) automatically initializes the member variable
  // See https://www.typescriptlang.org/docs/handbook/classes.html#parameter-properties
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getInfo().subscribe(
      (data : string) => this.info = data,
      (error : string) => this.errorMsg = error);
  }
}
