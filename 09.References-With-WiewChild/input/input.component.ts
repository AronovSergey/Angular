import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
    @ViewChild('inputRefresh', { static: true }) inputRefresh: ElementRef;

    ngOnInit(): void {}

    onButtonClick() {
        console.log('input', this.inputRefresh);
        console.log('value', this.inputRefresh.nativeElement.value);
    }
}
