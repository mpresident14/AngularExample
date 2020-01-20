import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hello-name',
  templateUrl: './hello-name.component.html',
  styleUrls: ['./hello-name.component.css']
})
export class HelloNameComponent implements OnInit {
  name: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // The drawback of commented method is that if the component is navigating back to itself,
    // Angular will reuse the component, so ngOnInit() will not be called again. Instead,
    // we subscribe to an observable so that the view change whenever the route is updated.

    // this.name = this.route.snapshot.paramMap.get("name");
    this.route.paramMap.subscribe(
      (paramMap: ParamMap) => this.name = paramMap.get("name")
    );
  }

  // Optional Route Parameters
  onBack() : void {
    // this.router.navigate(["/hello", {name: this.name}])

    // Relative routing
    this.router.navigate(["../", {name: this.name}], {relativeTo: this.route})
  }

  goToChild(): void {
    this.router.navigate(["child-route", {name: this.name}], {relativeTo: this.route})
  }
}
