import { Component, OnInit, OnDestroy } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-observable',
    templateUrl: './observable.component.html',
})
export class ObservableComponent implements OnInit, OnDestroy {
    counter: number = 0;
    private firstObsSubscription: Subscription;

    constructor() {}

    ngOnInit() {
        const customIntervalObservable = Observable.create((observer) => {
            this.counter = 0;
            setInterval(() => {
                observer.next(this.counter);
                {
                    if (this.counter === 3) {
                        observer.complete();
                    }
                    if (this.counter > 5) {
                        observer.error(new Error('count is greater 5!'));
                    }
                    this.counter++;
                }
            }, 1000);
        });

        this.firstObsSubscription = customIntervalObservable.subscribe(
            (data) => {
                console.log(data);
            },
            (err) => {
                console.log(err.message);
            },
            () => {
                console.log('Completed');
            }
        );
    }

    ngOnDestroy() {
        this.firstObsSubscription.unsubscribe();
    }
}
