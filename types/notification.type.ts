import { getFisherfolkInterface } from "./fisherFolk.type";

export interface notificationInterface {
    fisherFolk : string,
    message: string,
    date : string,
    time : string,
    itemName : string,
    itemiD : string,
    type : string,
    expirationDate : string
}


export interface getNotificationInterface {
    _id : string,
    fisherFolk : getFisherfolkInterface,
    message: string,
    date : string,
    time : string,
    itemName : string,
    itemiD : string,
    type : string,
    expirationDate : string
}