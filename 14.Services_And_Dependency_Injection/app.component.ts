import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'course-project';
    loadedFeature = 'recipe';

    onNavigation(feature: string) {
        this.loadedFeature = feature;
    }
}
