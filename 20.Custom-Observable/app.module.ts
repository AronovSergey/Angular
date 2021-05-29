import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ObservableComponent } from './observable/observable.component';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'observable', component: ObservableComponent },
];

@NgModule({
    declarations: [AppComponent, HomePageComponent, ObservableComponent],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
