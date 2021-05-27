import {
    Component,
    ElementRef,
    EventEmitter,
    Output,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.component.html',
    styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
    @ViewChild('descriptionInput', { static: true })
    descriptionInput: ElementRef;
    @Output() addTask = new EventEmitter<{ description: string }>();
    add() {
        this.addTask.emit(this.descriptionInput.nativeElement.value);
        this.descriptionInput.nativeElement.value = '';
    }
}
