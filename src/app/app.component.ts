import {Component} from '@angular/core';
import {EventComponent} from './event/event.component'
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: `
        <h1>Fetching:</h1>
        <event-parent></event-parent>
    `
})

export class AppComponent {}