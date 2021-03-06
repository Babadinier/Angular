import { Component } from "../../../node_modules/@angular/core";
import { Router } from "../../../node_modules/@angular/router";

@Component({
    template: `
        <h1>New Event</h1>
        <hr>
        <div>
            <h3>[Create Event Form will go here]</h3>
            <br />
            <br />
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
        </div>
    `
})

export class CreateEventComponent{
    isDirty:boolean = true
    constructor(private router:Router)
    {

    }

    cancel(){
        this.router.navigate(['/events'])
    } 
}