import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    tasks = [
        {
            title: 'Wash the dishes',
            body: 'I should wash the dishes today',
            isCompleted: false,
        },
    ];

    onNewTaskAdded(taskData: { title: string; body: string }) {
        this.tasks.push({
            title: taskData.title,
            body: taskData.body,
            isCompleted: false,
        });
    }
}
