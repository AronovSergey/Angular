import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
    declarations: [AppComponent, ActivityComponent, ActivitiesComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
