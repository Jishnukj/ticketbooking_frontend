export class Event {
    constructor(){
        this.eventId = 0;
        this.imageurl = "null";
        this.eventName ="null";
        this.eventDate = "null";
        this.eventTime = "null";
        this.venueId = 0;
        this.availableSeats = 0;
        this.artistName = "null";
        this.description = "null";
        this.approvalStatus = false;
    }
    eventId : number;
    imageurl : string;
    eventName : string;
    eventDate: string;
    eventTime: string;
    venueId: number;
    availableSeats:number;
    artistName : string;
    description : string;
    approvalStatus : boolean;
}
