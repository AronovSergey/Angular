import { Component } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
})
export class InputComponent {
    term = '';
    onInputChange(event: Event) {
        this.term = (<HTMLInputElement>event.target).value;
    }
}
