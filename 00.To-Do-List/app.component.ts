import { Component } from '@angular/core';
import { Task } from './task/task.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    currentId = 0;
    tasks: Task[] = [
        new Task(this.currentId++, 'example one'),
        new Task(this.currentId++, 'example two'),
    ];

    onAddTask(description: string) {
        this.tasks = [new Task(this.currentId++, description), ...this.tasks];
    }

    onRemoveTask(task: Task) {
        this.tasks = this.tasks.filter(
            (taskInstance) => taskInstance.id !== task.id
        );
    }
}
