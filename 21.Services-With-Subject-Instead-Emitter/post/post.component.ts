import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../app.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
})
export class PostComponent implements OnInit, OnDestroy {
    isActive: boolean = false;
    private activetedSub: Subscription;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.activetedSub = this.userService.isActiveEmitter.subscribe(
            (isActive) => {
                this.isActive = isActive;
            }
        );
    }

    ngOnDestroy(): void {
        this.activetedSub.unsubscribe();
    }
}
