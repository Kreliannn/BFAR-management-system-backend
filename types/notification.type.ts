import { getFisherfolkInterface } from "./fisherFolk.type";

export interface notificationInterface {
    fisherFolk : string,
    message: string,
    date : string,
    time : string,
    itemName : string,
}


export interface getNotificationInterface {
    _id : string,
    fisherFolk : getFisherfolkInterface,
    message: string,
    date : string,
    time : string,
    itemName : string,
}