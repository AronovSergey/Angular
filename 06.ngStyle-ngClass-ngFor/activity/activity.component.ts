import { Component } from '@angular/core';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
})
export class ActivityComponent {
    title = 'Running Group';
    owner = 'Sergey Aronov';
    isActive = false;

    constructor() {
        this.isActive = Math.random() > 0.5 ? true : false;
    }

    getColor() {
        return this.isActive ? 'green' : 'red';
    }
}
