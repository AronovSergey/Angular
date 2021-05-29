import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    @ViewChild('idInput', { static: true }) idInput: ElementRef;

    constructor(private router: Router, private route: ActivatedRoute) {}

    onButtonClick() {
        this.router.navigate(['/user/1'], {
            queryParams: { age: '22' },
            fragment: 'loading',
        });
    }
}
