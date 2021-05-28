import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
    { path: 'one', component: PageOneComponent },
    { path: 'user/:id', component: UserComponent },
];
@NgModule({
    declarations: [AppComponent, PageOneComponent, UserComponent],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
