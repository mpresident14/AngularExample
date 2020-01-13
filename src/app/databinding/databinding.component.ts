import { Component } from '@angular/core';

@Component({
    selector: 'app-databinding',
    templateUrl: './databinding.component.html'
})
export class DataBinding {
    buttonHidden : boolean = true;
    greeting : string = "Hello";
    username : string = "World";

    toggleHideButton() : void {
        this.buttonHidden = !this.buttonHidden;
    }

    changeText() : string {
        if (this.greeting === "Hello") {
            this.greeting = "Hey";
        } else {
            this.greeting = "Hello";
        }

        this.username = "World";
        return this.greeting;
    }
}
