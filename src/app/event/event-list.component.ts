import {Component} from '@angular/core';
import {EventService} from './event.service';
import {Event} from './event';

@Component({
    selector: 'event-list',
    template: `
        <div>
            <table class="table" border=1 *ngFor="let event of events">
                <td>{{event.eventFrom}} - {{event.eventTo}}</td>
                <td>{{event.activity.description}}</td>
            </table>
        </div>
    `
})

export class EventListComponent {
    constructor(private _postDataService:EventService) {
        //should be moved to ngOnInit lifecycle hook
        this.getEvents();
    }

    private events:Event[] = [];
    private errorMessage:any = '';

    getEvents() {
        this._postDataService.getData()
            .subscribe(
                events => this.events = events,
                error => this.errorMessage = <any>error);
    }
}