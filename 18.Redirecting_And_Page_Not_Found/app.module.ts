import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: 'one', component: PageOneComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'not-found' },
];
@NgModule({
    declarations: [AppComponent, PageOneComponent, PageNotFoundComponent],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
