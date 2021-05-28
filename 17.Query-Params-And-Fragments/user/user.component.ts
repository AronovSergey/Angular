import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
    id: string;
    age: string;
    fragment: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        // id - params
        this.id = this.route.snapshot.params['id'];
        this.route.params.subscribe((params: Params) => {
            this.id = params.id;
        });

        // age - queryParams
        this.age = this.route.snapshot.queryParams['age'];
        this.route.queryParams.subscribe((params: Params) => {
            this.age = params.age;
        });

        // Freagment
        this.fragment = this.route.snapshot.fragment;
        this.route.fragment.subscribe((fragment) => {
            this.fragment = fragment;
        });
    }
}
