export interface Event {
    eventId:number;
    start:Date;
    end:Date;
    createdBy:string;
    activity:Object;
    isActive:boolean;
}
