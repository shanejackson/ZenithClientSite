import {Component}  from '@angular/core';
import {EventListComponent} from './event-list.component';
import {EventService} from './event.service';

@Component({
    selector: 'event-parent',
    template: `
        <h2>View Events</h2>
        <event-list></event-list>
    `,
    providers: <any>[EventService]
})
export class EventComponent {
}