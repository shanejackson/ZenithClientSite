import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event/event-list.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventListComponent
  ],
  imports: [

    FormsModule,
    HttpModule,
        BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, EventComponent]
})
export class AppModule { }
