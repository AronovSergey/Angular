import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appNotIf]',
})
export class NotIfDirective {
    @Input() set appNotIf(condition: boolean) {
        console.log(condition);
        if (!condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {
            this.vcRef.clear();
        }
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private vcRef: ViewContainerRef
    ) {}
}
