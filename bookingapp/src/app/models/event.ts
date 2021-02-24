export class Event {
    constructor(){
        this.eventId = 0;
        this.imageurl = "null";
        this.eventName ="null";
        this.eventDate = "null";
        this.eventTime = "null";
        this.venueName = "null";
        this.availableSeats = 0;
        this.ticketPrice = 0;
        this.artistName = "null";
        this.description = "null";
        this.approvalStatus = false;
    }
    eventId : number;
    imageurl : string;
    eventName : string;
    eventDate: string;
    eventTime: string;
    venueName: string;
    availableSeats:number;
    ticketPrice : number;
    artistName : string;
    description : string;
    approvalStatus : boolean;
}
