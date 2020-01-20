import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  currentName: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.currentName = params.get("name");
        console.log("this.currentName = " + this.currentName);
      }
    );
  }

  onSubmitName() {
    // this.router.navigate(["/hello", this.currentName]);

    // Relative routing
    this.router.navigate([this.currentName], {relativeTo: this.activatedRoute});
  }
}
