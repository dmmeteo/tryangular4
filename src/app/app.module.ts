import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Third party imports
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {VideoListComponent} from './video-list/video-list.component';
import {VideoDetailComponent} from './video-detail/video-detail.component';
import {SafePipe} from './utility/safe.pipe';

@NgModule({
    declarations: [
        AppComponent,
        VideoListComponent,
        VideoDetailComponent,
        SafePipe
    ],
    imports: [
        BsDropdownModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
