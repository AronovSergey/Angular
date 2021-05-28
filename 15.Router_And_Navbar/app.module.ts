import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageTwoComponent } from './page-two/page-two.component';

const appRoutes: Routes = [
    { path: 'one', component: PageOneComponent },
    { path: 'two', component: PageTwoComponent },
    { path: 'three', component: PageThreeComponent },
];
@NgModule({
    declarations: [
        AppComponent,
        PageOneComponent,
        PageTwoComponent,
        PageThreeComponent,
    ],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
