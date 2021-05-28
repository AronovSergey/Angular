import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    @ViewChild('idInput', { static: true }) idInput: ElementRef;

    constructor(private router: Router, private route: ActivatedRoute) {}

    onBasicClick() {
        this.router.navigate(['/one']);
    }

    onRelativeClick() {
        this.router.navigate(['one'], { relativeTo: this.route });
    }

    onUserRouteClick() {
        this.router.navigate([`user/${this.idInput.nativeElement.value}`]);
    }
}
