export class AdminEvent {
    constructor(){
        this.event_id = 0;
        this.image = "null";
        this.event_name ="null";
        this.event_date = "null";
        this.event_time = "null";
        this.venue_name = "null";
        this.artist_name = "null";
        this.description = "null";
        this.approval_status = "false";
    }
    event_id : number;
    image : string;
    event_name : string;
    event_date: string;
    event_time: string;
    venue_name: string;
    artist_name : string;
    description : string;
    approval_status : string;
}
