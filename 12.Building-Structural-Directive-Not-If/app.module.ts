import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotIfDirective } from './not-if/not-if.directive';

@NgModule({
    declarations: [AppComponent, NotIfDirective],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
