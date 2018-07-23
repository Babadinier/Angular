import { Injectable } from "../../../node_modules/@angular/core";
import { Resolve } from "../../../node_modules/@angular/router";
import { EventService } from "./shared/event.service";
import { map } from 'rxjs/operators';

@Injectable()
export class EventsListResolver implements Resolve<any> {
    constructor(private eventService:EventService) {

    }

    resolve() {
        return this.eventService.getEvents().pipe(map(events => events))
    }
}