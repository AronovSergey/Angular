import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
    id: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.route.params.subscribe((params: Params) => {
            this.id = params.id;
        });
    }
}
