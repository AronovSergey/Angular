import { Component } from '@angular/core';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
})
export class ActivitiesComponent {
    activities = [
        { title: 'Activty one', owner: 'Sergey Aronov' },
        { title: 'Activty two', owner: 'Sergey Aronov' },
        { title: 'Activty three', owner: 'Sergey Aronov' },
    ];
}
