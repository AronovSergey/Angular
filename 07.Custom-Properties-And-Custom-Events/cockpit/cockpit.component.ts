import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
    @Output() taskCreated = new EventEmitter<{ title: string; body: string }>();
    title = '';
    body = '';

    ngOnInit() {}

    onSubmitClick() {
        console.log('x');
        this.taskCreated.emit({ title: this.title, body: this.body });
    }
}
